// diagram.js — Plant Cell Interactive Diagram (side-panel label style)
// Layout: image left (65%) + numbered label list right (35%) + SVG bezier leader lines
// Modes: explore (hover to reveal infobox) | quiz (labels hidden, click to identify) | edit (?edit=true)

class DiagramSim {
  // Line width helpers — normal mode 3px, edit mode 4.5px (3×)
  get lw()       { return this.editMode ? 4.5 : 3; }   // default line
  get lwActive() { return this.editMode ? 6   : 4; }   // highlighted line

  constructor() {
    this.data        = null;
    this.mode        = 'explore';
    this.editMode    = false;
    this.markers     = new Map();   // callout.id -> <button> marker element
    this.labelRows   = new Map();   // callout.id -> .label-row element
    this.leaderLines = new Map();   // callout.id -> <path> SVG element
    this.activeId    = null;
    this.quizQueue   = [];
    this.quizIndex   = 0;
    this.quizCorrect = 0;
    this.quizLocked  = false;
  }

  // ── Boot ──────────────────────────────────────────────────────────────────

  async init() {
    this.imgEl       = document.getElementById('diagram-img');
    this.markersLayer = document.getElementById('markers-layer');
    this.labelPanel  = document.getElementById('label-panel');
    this.svgEl       = document.getElementById('leaders-svg');
    this.layoutEl    = document.getElementById('layout');

    const params = new URLSearchParams(window.location.search);
    this.editMode = params.get('edit') === 'true';

    try {
      const res = await fetch('data.json');
      if (!res.ok) throw new Error('HTTP ' + res.status);
      this.data = await res.json();
      // showNumbers defaults to true when the key is absent
      this.showNumbers = this.data.showNumbers !== false;
    } catch (err) {
      this.showFatalError('Could not load data.json: ' + err.message);
      return;
    }

    // Wait for image so layout dimensions are valid
    await new Promise(resolve => {
      if (this.imgEl.complete && this.imgEl.naturalWidth > 0) resolve();
      else this.imgEl.addEventListener('load', resolve, { once: true });
    });

    this.renderMarkers();
    this.renderLabels();

    // Draw leaders after a brief tick so the DOM has painted label positions
    requestAnimationFrame(() => {
      this.drawLeaders();
      this.resizeObserver = new ResizeObserver(() => this.drawLeaders());
      this.resizeObserver.observe(this.layoutEl);
    });

    if (this.editMode) {
      this.activateEditMode();
    } else {
      this.setMode('explore');
    }
  }

  // ── Markers (numbered dots on the image) ──────────────────────────────────

  renderMarkers() {
    this.markersLayer.innerHTML = '';
    this.markers.clear();

    for (const callout of this.data.callouts) {
      const btn = document.createElement('button');
      btn.className = 'marker';
      btn.textContent = this.showNumbers ? callout.id : '';
      btn.setAttribute('aria-label', callout.label);
      btn.style.left = callout.x + '%';
      btn.style.top  = callout.y + '%';
      btn.dataset.id = callout.id;

      this.markers.set(callout.id, btn);
      this.markersLayer.appendChild(btn);
    }
  }

  // ── Label rows (right panel) ───────────────────────────────────────────────

  renderLabels() {
    this.labelPanel.innerHTML = '';
    this.labelRows.clear();

    for (const callout of this.data.callouts) {
      const row = document.createElement('div');
      row.className = 'label-row';
      row.dataset.id = callout.id;

      const handle = document.createElement('span');
      handle.className = 'drag-handle';
      handle.textContent = '⠿';
      handle.setAttribute('aria-hidden', 'true');
      handle.title = 'Drag to reorder';

      const num = document.createElement('span');
      num.className = 'label-num';
      num.textContent = this.showNumbers ? callout.id : '';

      const text = document.createElement('span');
      text.className = 'label-text';
      text.dataset.id = callout.id;
      text.textContent = callout.label;

      row.appendChild(handle);
      row.appendChild(num);
      row.appendChild(text);
      this.labelPanel.appendChild(row);
      this.labelRows.set(callout.id, row);
    }
  }

  // ── SVG leader lines ───────────────────────────────────────────────────────

  drawLeaders() {
    const layoutRect = this.layoutEl.getBoundingClientRect();
    if (layoutRect.width === 0) return;

    // Size the SVG to match the layout exactly
    this.svgEl.setAttribute('width',   layoutRect.width);
    this.svgEl.setAttribute('height',  layoutRect.height);
    this.svgEl.setAttribute('viewBox', `0 0 ${layoutRect.width} ${layoutRect.height}`);
    this.svgEl.innerHTML = '';
    this.leaderLines.clear();

    for (const callout of this.data.callouts) {
      const markerEl = this.markers.get(callout.id);
      const rowEl    = this.labelRows.get(callout.id);
      const numEl    = rowEl.querySelector('.label-num');

      const markerRect = markerEl.getBoundingClientRect();
      const numRect    = numEl.getBoundingClientRect();

      // Marker right-center → label-num left-center, both relative to #layout
      const x1 = markerRect.right  - layoutRect.left;
      const y1 = markerRect.top + markerRect.height / 2 - layoutRect.top;
      const x2 = numRect.left      - layoutRect.left;
      const y2 = numRect.top + numRect.height / 2 - layoutRect.top;

      // Smooth cubic bezier: departs horizontally from x1, arrives horizontally at x2
      const mx = x1 + (x2 - x1) * 0.5;
      const d  = `M ${x1} ${y1} C ${mx} ${y1} ${mx} ${y2} ${x2} ${y2}`;

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', d);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', '#3a7a3a');
      path.setAttribute('stroke-width', this.lw);
      path.setAttribute('opacity', '0.3');
      path.dataset.id = callout.id;

      this.svgEl.appendChild(path);
      this.leaderLines.set(callout.id, path);
    }

    // Re-apply any active highlight after redraw
    if (this.activeId !== null) {
      this.applyLineHighlight(this.activeId);
    }
  }

  applyLineHighlight(id) {
    // Dim all lines, brighten the active one
    for (const [lid, path] of this.leaderLines) {
      if (lid === id) {
        path.setAttribute('opacity',      '0.9');
        path.setAttribute('stroke-width', this.lwActive);
        path.setAttribute('stroke',       '#1f5c1f');
      } else {
        path.setAttribute('opacity',      '0.15');
        path.setAttribute('stroke-width', this.lw);
        path.setAttribute('stroke',       '#3a7a3a');
      }
    }
  }

  clearLineHighlights() {
    for (const path of this.leaderLines.values()) {
      path.setAttribute('opacity',      '0.3');
      path.setAttribute('stroke-width', this.lw);
      path.setAttribute('stroke',       '#3a7a3a');
    }
  }

  // ── Mode switching ────────────────────────────────────────────────────────

  setMode(newMode) {
    if (this.editMode) return;
    this.mode = newMode;
    this.activeId = null;

    document.getElementById('btn-explore').classList.toggle('active', newMode === 'explore');
    document.getElementById('btn-quiz').classList.toggle('active',    newMode === 'quiz');

    // Reset all markers and label rows
    for (const btn of this.markers.values()) {
      btn.className = 'marker';
      btn.textContent = this.showNumbers ? this.data.callouts.find(c => c.id == btn.dataset.id).id : '';
      btn.onpointerdown = null;
      btn.onpointerenter = null;
      btn.onpointerleave = null;
      btn.onclick = null;
    }
    for (const row of this.labelRows.values()) {
      row.className = 'label-row';
      row.onclick = null;
      row.onpointerenter = null;
      row.onpointerleave = null;
      row.querySelector('.label-text').classList.remove('quiz-hidden');
    }

    this.clearLineHighlights();
    this.resetInfobox();
    document.getElementById('quiz-score').style.display    = 'none';
    document.getElementById('quiz-restart').style.display  = 'none';

    if (newMode === 'explore') this.initExplore();
    if (newMode === 'quiz')    this.initQuiz();
  }

  // ── Explore mode ──────────────────────────────────────────────────────────

  initExplore() {
    for (const callout of this.data.callouts) {
      const btn = this.markers.get(callout.id);
      const row = this.labelRows.get(callout.id);

      const activate = () => {
        this.activeId = callout.id;
        btn.classList.add('active');
        row.classList.add('active');
        this.applyLineHighlight(callout.id);
        this.showInfobox(callout);
      };
      const deactivate = () => {
        this.activeId = null;
        btn.classList.remove('active');
        row.classList.remove('active');
        this.clearLineHighlights();
      };

      // Marker dot interactions
      btn.onpointerenter = activate;
      btn.onpointerleave = deactivate;
      btn.onclick        = () => this.showInfobox(callout);

      // Label row interactions (also trigger the same highlight)
      row.onpointerenter = activate;
      row.onpointerleave = deactivate;
      row.onclick        = () => this.showInfobox(callout);
    }
  }

  showInfobox(callout) {
    document.getElementById('infobox-prompt').style.display = 'none';
    document.getElementById('infobox-content').style.display = 'block';

    const labelEl = document.getElementById('infobox-label');
    labelEl.textContent = callout.label;
    labelEl.className = '';

    document.getElementById('infobox-desc').textContent = callout.description;

    const tipEl = document.getElementById('infobox-ap-tip');
    if (callout.ap_tip) {
      tipEl.innerHTML = '<strong>AP Exam Tip:</strong> ' + callout.ap_tip;
      tipEl.style.display = 'block';
    } else {
      tipEl.style.display = 'none';
    }
  }

  resetInfobox() {
    document.getElementById('infobox-prompt').style.display  = 'block';
    document.getElementById('infobox-content').style.display = 'none';
  }

  // ── Quiz mode ─────────────────────────────────────────────────────────────
  // Label texts are hidden; student clicks the correct dot to reveal each one.

  initQuiz() {
    this.quizQueue   = [...this.data.callouts].sort(() => Math.random() - 0.5);
    this.quizIndex   = 0;
    this.quizCorrect = 0;
    this.quizLocked  = false;

    document.getElementById('quiz-score').style.display = '';
    this.updateScore();

    // Hide all label texts and set markers to "?"
    for (const callout of this.data.callouts) {
      this.labelRows.get(callout.id).querySelector('.label-text').classList.add('quiz-hidden');
      const btn = this.markers.get(callout.id);
      btn.classList.add('quiz-unknown');
      btn.textContent = '?';
    }

    this.showNextQuestion();
  }

  showNextQuestion() {
    this.quizLocked = false;

    if (this.quizIndex >= this.quizQueue.length) {
      this.showQuizComplete();
      return;
    }

    const target = this.quizQueue[this.quizIndex];

    // Clear previous correct/incorrect marker classes (keep quiz-unknown on unanswered)
    for (const btn of this.markers.values()) {
      btn.classList.remove('incorrect');
    }
    for (const row of this.labelRows.values()) {
      row.classList.remove('active');
    }
    this.clearLineHighlights();

    // Highlight the target label row (even though text is hidden — shows the row is active)
    this.labelRows.get(target.id).classList.add('active');
    this.applyLineHighlight(target.id);

    // Prompt in infobox
    document.getElementById('infobox-prompt').style.display  = 'none';
    document.getElementById('infobox-content').style.display = 'block';
    document.getElementById('infobox-ap-tip').style.display  = 'none';
    document.getElementById('infobox-desc').textContent      = '';
    document.getElementById('quiz-restart').style.display    = 'none';

    const labelEl = document.getElementById('infobox-label');
    labelEl.className = 'prompt-label';
    labelEl.innerHTML = 'Click on: <em>' + target.label + '</em>';

    // Wire up all marker dots for this question
    for (const callout of this.data.callouts) {
      const btn = this.markers.get(callout.id);
      btn.onclick = () => this.handleAnswer(callout, target);
    }
  }

  handleAnswer(clicked, target) {
    if (this.quizLocked) return;

    const clickedBtn = this.markers.get(clicked.id);

    if (clicked.id === target.id) {
      // ── Correct ──
      this.quizLocked = true;
      this.quizCorrect++;
      this.updateScore();

      // Reveal the label text
      const textEl = this.labelRows.get(target.id).querySelector('.label-text');
      textEl.classList.remove('quiz-hidden');
      this.labelRows.get(target.id).classList.add('correct-row');

      // Mark the dot
      clickedBtn.classList.remove('quiz-unknown');
      clickedBtn.classList.add('correct');
      clickedBtn.textContent = this.showNumbers ? target.id : '';

      // Brighten the leader line permanently for this callout
      const path = this.leaderLines.get(target.id);
      if (path) {
        path.setAttribute('opacity',      '0.7');
        path.setAttribute('stroke',       '#2A8040');
        path.setAttribute('stroke-width', this.lwActive);
      }

      const labelEl = document.getElementById('infobox-label');
      labelEl.className = 'correct-label';
      labelEl.textContent = '✓ ' + target.label;
      document.getElementById('infobox-desc').textContent = target.description;

      const tipEl = document.getElementById('infobox-ap-tip');
      if (target.ap_tip) {
        tipEl.innerHTML = '<strong>AP Exam Tip:</strong> ' + target.ap_tip;
        tipEl.style.display = 'block';
      }

      setTimeout(() => {
        this.quizIndex++;
        this.showNextQuestion();
      }, 1800);

    } else {
      // ── Wrong ──
      clickedBtn.classList.add('incorrect');
      document.getElementById('infobox-desc').textContent =
        'Not quite — that is the ' + clicked.label + '. Try again.';
      setTimeout(() => clickedBtn.classList.remove('incorrect'), 500);
    }
  }

  showQuizComplete() {
    const total = this.quizQueue.length;

    // Reveal any still-hidden labels
    for (const row of this.labelRows.values()) {
      row.querySelector('.label-text').classList.remove('quiz-hidden');
      row.classList.remove('active');
    }
    this.clearLineHighlights();

    document.getElementById('infobox-label').className = '';
    document.getElementById('infobox-label').textContent = 'Quiz complete!';
    document.getElementById('infobox-desc').textContent =
      'You correctly identified ' + this.quizCorrect + ' of ' + total + ' structures.';
    document.getElementById('infobox-ap-tip').style.display = 'none';
    document.getElementById('quiz-restart').style.display = 'inline-block';

    this.launchCelebration();
  }

  // ── Celebration animation ─────────────────────────────────────────────────
  // Canvas-based confetti burst. Dynamically creates and removes its own canvas
  // so no HTML changes are needed. Runs for ~3.5 seconds then cleans up.

  launchCelebration() {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = [
      'position:fixed', 'inset:0', 'width:100%', 'height:100%',
      'pointer-events:none', 'z-index:9999'
    ].join(';');
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    // Biology-themed palette + warm accents
    const COLORS = [
      '#3a7a3a', '#7DB84A', '#a6e3a1',   // greens
      '#F5A623', '#FFD700',               // golds
      '#4A6FA5', '#89b4fa',               // blues
      '#2A8040', '#C45C2A'                // teal / rust
    ];

    // Spawn particles in two bursts from the lower-left and lower-right
    const particles = [];
    const addBurst = (originX, spread) => {
      for (let i = 0; i < 70; i++) {
        particles.push({
          x:             originX + (Math.random() - 0.5) * spread,
          y:             canvas.height * 0.75,
          vx:            (Math.random() - 0.5) * 9,
          vy:            -(Math.random() * 12 + 7),
          w:             Math.random() * 7 + 3,
          h:             Math.random() * 13 + 5,
          rotation:      Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.25,
          color:         COLORS[Math.floor(Math.random() * COLORS.length)],
          alpha:         1
        });
      }
    };

    addBurst(canvas.width * 0.25, 60);
    addBurst(canvas.width * 0.75, 60);

    const GRAVITY   = 0.3;
    const DURATION  = 3500; // ms
    let   startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed  = timestamp - startTime;
      const progress = elapsed / DURATION;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let stillVisible = false;

      for (const p of particles) {
        p.vy       += GRAVITY;
        p.x        += p.vx;
        p.y        += p.vy;
        p.rotation += p.rotationSpeed;

        // Fade out during the final 40% of the duration
        p.alpha = progress < 0.6 ? 1 : Math.max(0, 1 - (progress - 0.6) / 0.4);

        if (p.alpha > 0 && p.y < canvas.height + 40) {
          stillVisible = true;
          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
          ctx.restore();
        }
      }

      if (elapsed < DURATION && stillVisible) {
        requestAnimationFrame(animate);
      } else {
        canvas.remove();
      }
    };

    requestAnimationFrame(animate);
  }

  restartQuiz() { this.setMode('quiz'); }

  updateScore() {
    document.getElementById('score-val').textContent   = this.quizCorrect;
    document.getElementById('score-total').textContent = this.quizQueue.length;
  }

  // ── Edit mode ─────────────────────────────────────────────────────────────

  activateEditMode() {
    document.getElementById('edit-panel').style.display = 'block';
    document.getElementById('btn-explore').disabled = true;
    document.getElementById('btn-quiz').disabled    = true;

    const badge = document.createElement('span');
    badge.id = 'edit-badge';
    badge.textContent = 'EDIT MODE';
    document.getElementById('controls').appendChild(badge);

    for (const callout of this.data.callouts) {
      const btn = this.markers.get(callout.id);
      btn.classList.add('edit-mode');
      btn.title = 'Drag to reposition "' + callout.label + '"';
      btn.onpointerdown = (e) => this.startDrag(e, callout, btn);
    }

    this.enableLabelReorder();
    this.updateJSONOutput();
  }

  // ── Label reorder (edit mode only) ───────────────────────────────────────

  enableLabelReorder() {
    for (const row of this.labelRows.values()) {
      row.classList.add('reorder-enabled');
      const handle = row.querySelector('.drag-handle');
      handle.onpointerdown = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.startReorderDrag(e, row);
      };
    }
  }

  startReorderDrag(e, rowEl) {
    // Use document-level listeners (not setPointerCapture on rowEl) so that
    // moving rowEl in the DOM during onUp does not break subsequent drags.
    const rowRect     = rowEl.getBoundingClientRect();
    const dragOffsetY = e.clientY - rowRect.top;

    // Floating ghost clone that follows the cursor
    const ghost = rowEl.cloneNode(true);
    ghost.style.cssText = [
      'position:fixed',
      'pointer-events:none',
      'z-index:1000',
      'width:'  + rowRect.width + 'px',
      'left:'   + rowRect.left  + 'px',
      'top:'    + (e.clientY - dragOffsetY) + 'px',
      'opacity:0.85',
      'background:white',
      'border-radius:5px',
      'box-shadow:0 4px 14px rgba(0,0,0,0.2)',
      'padding:4px 5px',
      'display:flex',
      'align-items:center',
      'gap:7px'
    ].join(';');
    document.body.appendChild(ghost);

    // Green insertion indicator bar
    const indicator = document.createElement('div');
    indicator.className = 'reorder-indicator';

    rowEl.classList.add('dragging');
    let dropTarget = null; // label-row to insert before; null = append at end

    const onMove = (mv) => {
      ghost.style.top = (mv.clientY - dragOffsetY) + 'px';

      // Siblings = all rows except the one being dragged
      const siblings = [...this.labelPanel.querySelectorAll('.label-row')]
        .filter(r => r !== rowEl);

      dropTarget = null;
      for (const sib of siblings) {
        const rect = sib.getBoundingClientRect();
        if (mv.clientY < rect.top + rect.height / 2) {
          dropTarget = sib;
          break;
        }
      }

      if (dropTarget) {
        this.labelPanel.insertBefore(indicator, dropTarget);
      } else {
        this.labelPanel.appendChild(indicator);
      }
    };

    const onUp = () => {
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerup',   onUp);

      ghost.remove();
      indicator.remove();
      rowEl.classList.remove('dragging');

      // Move the row to its new position
      if (dropTarget) {
        this.labelPanel.insertBefore(rowEl, dropTarget);
      } else {
        this.labelPanel.appendChild(rowEl);
      }

      // Renumber every row and marker by their new DOM position (1-based).
      // This updates ids, displayed numbers, dataset attributes, and both Maps.
      const domRows      = [...this.labelPanel.querySelectorAll('.label-row')];
      const newMarkers   = new Map();
      const newLabelRows = new Map();

      domRows.forEach((row, idx) => {
        const oldId     = parseInt(row.dataset.id);
        const newId     = idx + 1;
        const callout   = this.data.callouts.find(c => c.id === oldId);
        const markerBtn = this.markers.get(oldId);

        // Update the data model
        callout.id = newId;

        // Update the label row DOM
        row.dataset.id = String(newId);
        row.querySelector('.label-num').textContent = this.showNumbers ? newId : '';
        const textSpan = row.querySelector('.label-text');
        if (textSpan) textSpan.dataset.id = String(newId);

        // Update the marker dot on the image
        markerBtn.dataset.id  = String(newId);
        markerBtn.textContent = this.showNumbers ? String(newId) : '';
        markerBtn.setAttribute('aria-label', callout.label);

        newMarkers.set(newId, markerBtn);
        newLabelRows.set(newId, row);
      });

      // Keep data.callouts sorted to match sequential ids
      this.data.callouts.sort((a, b) => a.id - b.id);
      this.markers   = newMarkers;
      this.labelRows = newLabelRows;

      this.drawLeaders();
      this.updateJSONOutput();
    };

    // Document-level listeners track the pointer even outside the panel
    document.addEventListener('pointermove', onMove);
    document.addEventListener('pointerup',   onUp);
  }

  startDrag(e, callout, markerEl) {
    e.preventDefault();
    e.stopPropagation();
    markerEl.setPointerCapture(e.pointerId);

    const onMove = (ev) => {
      const rect = this.imgEl.getBoundingClientRect();
      const x = Math.round(Math.max(0, Math.min(100, (ev.clientX - rect.left)  / rect.width  * 100)) * 10) / 10;
      const y = Math.round(Math.max(0, Math.min(100, (ev.clientY - rect.top)   / rect.height * 100)) * 10) / 10;

      callout.x = x;
      callout.y = y;
      markerEl.style.left = x + '%';
      markerEl.style.top  = y + '%';

      document.getElementById('coord-display').textContent =
        '"' + callout.label + '"  →  x: ' + x.toFixed(1) + ',  y: ' + y.toFixed(1);

      // Redraw leaders live as the dot moves
      this.drawLeaders();
      this.updateJSONOutput();
    };

    const onUp = () => {
      markerEl.releasePointerCapture(e.pointerId);
      markerEl.removeEventListener('pointermove', onMove);
      markerEl.removeEventListener('pointerup',   onUp);
    };

    markerEl.addEventListener('pointermove', onMove);
    markerEl.addEventListener('pointerup',   onUp);
  }

  updateJSONOutput() {
    const exportData = {
      title:       this.data.title,
      orientation: this.data.orientation,
      image:       this.data.image,
      callouts:    this.data.callouts.map(c => ({ ...c }))
    };
    document.getElementById('json-output').value = JSON.stringify(exportData, null, 2);
  }

  copyJSON() {
    const text = document.getElementById('json-output').value;
    navigator.clipboard.writeText(text).then(() => {
      const el = document.getElementById('copy-confirm');
      el.textContent = 'Copied!';
      setTimeout(() => { el.textContent = ''; }, 2000);
    }).catch(() => {
      document.getElementById('json-output').select();
      document.execCommand('copy');
      document.getElementById('copy-confirm').textContent = 'Copied!';
      setTimeout(() => { document.getElementById('copy-confirm').textContent = ''; }, 2000);
    });
  }

  // ── Utilities ─────────────────────────────────────────────────────────────

  showFatalError(msg) {
    document.body.innerHTML =
      '<p style="color:red;padding:20px;font-family:monospace;">DiagramSim error: ' + msg + '</p>';
  }
}

const sim = new DiagramSim();
document.addEventListener('DOMContentLoaded', () => sim.init());
