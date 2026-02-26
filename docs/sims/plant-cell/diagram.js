// diagram.js — Plant Cell Interactive Diagram (side-panel label style)
// Layout: image left (65%) + numbered label list right (35%) + SVG bezier leader lines
// Modes: explore (hover to reveal infobox) | quiz (labels hidden, click to identify) | edit (?edit=true)

class DiagramSim {
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
      btn.textContent = callout.id;
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
      num.textContent = callout.id;

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
      path.setAttribute('stroke-width', '1.5');
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
        path.setAttribute('stroke-width', '2');
        path.setAttribute('stroke',       '#1f5c1f');
      } else {
        path.setAttribute('opacity',      '0.15');
        path.setAttribute('stroke-width', '1.5');
        path.setAttribute('stroke',       '#3a7a3a');
      }
    }
  }

  clearLineHighlights() {
    for (const path of this.leaderLines.values()) {
      path.setAttribute('opacity',      '0.3');
      path.setAttribute('stroke-width', '1.5');
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
      btn.textContent = this.data.callouts.find(c => c.id == btn.dataset.id).id;
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
      clickedBtn.textContent = target.id;

      // Brighten the leader line permanently for this callout
      const path = this.leaderLines.get(target.id);
      if (path) {
        path.setAttribute('opacity',      '0.7');
        path.setAttribute('stroke',       '#2A8040');
        path.setAttribute('stroke-width', '2');
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
    rowEl.setPointerCapture(e.pointerId);

    // Ghost that follows the cursor
    const rowRect = rowEl.getBoundingClientRect();
    const dragOffsetY = e.clientY - rowRect.top;

    const ghost = rowEl.cloneNode(true);
    ghost.style.cssText = [
      'position:fixed',
      'pointer-events:none',
      'z-index:1000',
      'width:'  + rowRect.width  + 'px',
      'left:'   + rowRect.left   + 'px',
      'top:'    + (e.clientY - dragOffsetY) + 'px',
      'opacity:0.85',
      'background:white',
      'border-radius:5px',
      'box-shadow:0 4px 14px rgba(0,0,0,0.18)',
      'padding:4px 5px',
      'display:flex',
      'align-items:center',
      'gap:7px'
    ].join(';');
    document.body.appendChild(ghost);

    // Insertion indicator bar
    const indicator = document.createElement('div');
    indicator.className = 'reorder-indicator';

    rowEl.classList.add('dragging');
    let dropTarget = null; // row to insert before (null = append)

    const onMove = (mv) => {
      ghost.style.top = (mv.clientY - dragOffsetY) + 'px';

      // All rows except the one being dragged
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

      // Move indicator into position
      if (dropTarget) {
        this.labelPanel.insertBefore(indicator, dropTarget);
      } else {
        this.labelPanel.appendChild(indicator);
      }
    };

    const onUp = () => {
      rowEl.removeEventListener('pointermove', onMove);
      rowEl.removeEventListener('pointerup',   onUp);

      ghost.remove();
      indicator.remove();
      rowEl.classList.remove('dragging');

      // Reinsert the row at the drop position
      if (dropTarget) {
        this.labelPanel.insertBefore(rowEl, dropTarget);
      } else {
        this.labelPanel.appendChild(rowEl);
      }

      // Sync this.data.callouts order to match the new DOM order
      const domOrder = [...this.labelPanel.querySelectorAll('.label-row')];
      this.data.callouts = domOrder.map(r =>
        this.data.callouts.find(c => c.id == r.dataset.id)
      );

      // Rebuild labelRows map to match new order
      this.labelRows.clear();
      for (const r of domOrder) {
        this.labelRows.set(parseInt(r.dataset.id), r);
      }

      this.drawLeaders();
      this.updateJSONOutput();
    };

    rowEl.addEventListener('pointermove', onMove);
    rowEl.addEventListener('pointerup',   onUp);
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
