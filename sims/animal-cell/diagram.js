// diagram.js — Interactive Biology Diagram MicroSim
// Modes: explore (hover infobox) | quiz (click-to-identify) | edit (?edit=true in URL)

class DiagramSim {
  constructor() {
    this.data       = null;   // parsed data.json
    this.mode       = 'explore';
    this.editMode   = false;
    this.markers    = new Map(); // callout.id -> <button> element
    this.quizQueue  = [];
    this.quizIndex  = 0;
    this.quizCorrect = 0;
    this.quizLocked = false;   // prevent double-clicks during feedback delay
  }

  // ── Boot ──────────────────────────────────────────────────────────────────

  async init() {
    // Grab DOM refs
    this.imgEl       = document.getElementById('diagram-img');
    this.markersLayer = document.getElementById('markers-layer');

    // Detect edit mode from URL param
    const params = new URLSearchParams(window.location.search);
    this.editMode = params.get('edit') === 'true';

    // Fetch callout data
    try {
      const res = await fetch('data.json');
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      this.data = await res.json();
    } catch (err) {
      this.showFatalError('Could not load data.json: ' + err.message);
      return;
    }

    // Wait for image before rendering so bounding rect is valid in edit mode
    await new Promise(resolve => {
      if (this.imgEl.complete && this.imgEl.naturalWidth > 0) resolve();
      else this.imgEl.addEventListener('load', resolve, { once: true });
    });

    this.renderMarkers();

    if (this.editMode) {
      this.activateEditMode();
    } else {
      this.setMode('explore');
    }
  }

  // ── Marker rendering ──────────────────────────────────────────────────────

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

  positionMarker(markerEl, x, y) {
    markerEl.style.left = x + '%';
    markerEl.style.top  = y + '%';
  }

  // ── Mode switching ────────────────────────────────────────────────────────

  setMode(newMode) {
    if (this.editMode) return; // edit mode overrides everything
    this.mode = newMode;

    // Update button states
    document.getElementById('btn-explore').classList.toggle('active', newMode === 'explore');
    document.getElementById('btn-quiz').classList.toggle('active', newMode === 'quiz');

    // Clear all marker state
    for (const btn of this.markers.values()) {
      btn.className = 'marker';
      btn.textContent = this.data.callouts.find(c => c.id == btn.dataset.id).id;
      btn.onpointerdown  = null;
      btn.onpointerenter = null;
      btn.onpointerleave = null;
      btn.onclick        = null;
    }

    this.resetInfobox();
    document.getElementById('quiz-score').style.display = 'none';
    document.getElementById('quiz-restart').style.display = 'none';

    if (newMode === 'explore') this.initExplore();
    if (newMode === 'quiz')    this.initQuiz();
  }

  // ── Explore mode ──────────────────────────────────────────────────────────

  initExplore() {
    for (const callout of this.data.callouts) {
      const btn = this.markers.get(callout.id);

      // Pointer enter/leave for desktop hover
      btn.onpointerenter = () => {
        btn.classList.add('active');
        this.showInfobox(callout);
      };
      btn.onpointerleave = () => {
        btn.classList.remove('active');
      };

      // Click / tap also works on mobile
      btn.onclick = () => this.showInfobox(callout);
    }
  }

  showInfobox(callout) {
    document.getElementById('infobox-prompt').style.display = 'none';

    const content = document.getElementById('infobox-content');
    content.style.display = 'block';

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
    document.getElementById('infobox-prompt').style.display = 'block';
    document.getElementById('infobox-content').style.display = 'none';
  }

  // ── Quiz mode ─────────────────────────────────────────────────────────────

  initQuiz() {
    // Shuffle all callouts into a random question order
    this.quizQueue   = [...this.data.callouts].sort(() => Math.random() - 0.5);
    this.quizIndex   = 0;
    this.quizCorrect = 0;
    this.quizLocked  = false;

    document.getElementById('quiz-score').style.display = '';
    this.updateScore();

    // All markers show "?" until correct
    for (const btn of this.markers.values()) {
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

    // Reset marker classes except quiz-unknown
    for (const btn of this.markers.values()) {
      btn.classList.remove('correct', 'incorrect');
    }

    // Show prompt in infobox
    document.getElementById('infobox-prompt').style.display = 'none';
    document.getElementById('infobox-content').style.display = 'block';
    document.getElementById('infobox-ap-tip').style.display = 'none';
    document.getElementById('infobox-desc').textContent = '';
    document.getElementById('quiz-restart').style.display = 'none';

    const labelEl = document.getElementById('infobox-label');
    labelEl.className = 'prompt-label';
    labelEl.innerHTML = 'Click on: <em>' + target.label + '</em>';

    // Attach click handlers for this round
    for (const callout of this.data.callouts) {
      const btn = this.markers.get(callout.id);
      btn.onclick = () => this.handleAnswer(callout, target);
    }
  }

  handleAnswer(clicked, target) {
    if (this.quizLocked) return;

    const clickedBtn = this.markers.get(clicked.id);
    const targetBtn  = this.markers.get(target.id);

    if (clicked.id === target.id) {
      // ── Correct ──
      this.quizLocked = true;
      this.quizCorrect++;
      this.updateScore();

      clickedBtn.classList.remove('quiz-unknown');
      clickedBtn.classList.add('correct');
      clickedBtn.textContent = target.id;

      const labelEl = document.getElementById('infobox-label');
      labelEl.className = 'correct-label';
      labelEl.textContent = '✓ ' + target.label;
      document.getElementById('infobox-desc').textContent = target.description;

      const tipEl = document.getElementById('infobox-ap-tip');
      if (target.ap_tip) {
        tipEl.innerHTML = '<strong>AP Exam Tip:</strong> ' + target.ap_tip;
        tipEl.style.display = 'block';
      }

      // Advance after a short pause so the student can read the feedback
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

    document.getElementById('infobox-label').className = '';
    document.getElementById('infobox-label').textContent = 'Quiz complete!';
    document.getElementById('infobox-desc').textContent =
      'You correctly identified ' + this.quizCorrect + ' of ' + total + ' structures.';
    document.getElementById('infobox-ap-tip').style.display = 'none';
    document.getElementById('quiz-restart').style.display = 'inline-block';

    // Reveal all markers
    for (const btn of this.markers.values()) {
      btn.classList.remove('quiz-unknown', 'correct', 'incorrect');
    }
  }

  restartQuiz() {
    this.setMode('quiz');
  }

  updateScore() {
    document.getElementById('score-val').textContent   = this.quizCorrect;
    document.getElementById('score-total').textContent = this.quizQueue.length;
  }

  // ── Edit mode ─────────────────────────────────────────────────────────────

  activateEditMode() {
    // Show the edit panel
    document.getElementById('edit-panel').style.display = 'block';

    // Disable mode buttons
    document.getElementById('btn-explore').disabled = true;
    document.getElementById('btn-quiz').disabled    = true;

    // Add badge to controls bar
    const badge = document.createElement('span');
    badge.id = 'edit-badge';
    badge.textContent = 'EDIT MODE';
    document.getElementById('controls').appendChild(badge);

    // Wire up each marker as draggable
    for (const callout of this.data.callouts) {
      const btn = this.markers.get(callout.id);
      btn.classList.add('edit-mode');
      btn.title = 'Drag to reposition "' + callout.label + '"';
      btn.onpointerdown = (e) => this.startDrag(e, callout, btn);
    }

    this.updateJSONOutput();
  }

  startDrag(e, callout, markerEl) {
    e.preventDefault();
    e.stopPropagation();

    markerEl.setPointerCapture(e.pointerId);

    const onMove = (moveEvent) => {
      const rect = this.imgEl.getBoundingClientRect();
      const rawX = (moveEvent.clientX - rect.left) / rect.width  * 100;
      const rawY = (moveEvent.clientY - rect.top)  / rect.height * 100;

      // Clamp to image bounds and round to 1 decimal place
      const x = Math.round(Math.max(0, Math.min(100, rawX)) * 10) / 10;
      const y = Math.round(Math.max(0, Math.min(100, rawY)) * 10) / 10;

      // Update model
      callout.x = x;
      callout.y = y;

      // Update marker position
      this.positionMarker(markerEl, x, y);

      // Live coordinate readout
      document.getElementById('coord-display').textContent =
        '"' + callout.label + '"  →  x: ' + x.toFixed(1) + ',  y: ' + y.toFixed(1);

      // Refresh JSON output
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
    // Produce a clean copy of the data with updated coordinates.
    // Omit calibrationNote from the exported JSON since coordinates are now set.
    const exportData = {
      title:       this.data.title,
      orientation: this.data.orientation,
      image:       this.data.image,
      imageWidth:  this.data.imageWidth,
      imageHeight: this.data.imageHeight,
      callouts:    this.data.callouts.map(c => ({ ...c }))
    };
    document.getElementById('json-output').value =
      JSON.stringify(exportData, null, 2);
  }

  copyJSON() {
    const text = document.getElementById('json-output').value;
    navigator.clipboard.writeText(text).then(() => {
      const el = document.getElementById('copy-confirm');
      el.textContent = 'Copied!';
      setTimeout(() => { el.textContent = ''; }, 2000);
    }).catch(() => {
      // Fallback for browsers without clipboard API (e.g. non-HTTPS)
      document.getElementById('json-output').select();
      document.execCommand('copy');
      document.getElementById('copy-confirm').textContent = 'Copied!';
      setTimeout(() => {
        document.getElementById('copy-confirm').textContent = '';
      }, 2000);
    });
  }

  // ── Utilities ─────────────────────────────────────────────────────────────

  showFatalError(msg) {
    document.body.innerHTML =
      '<p style="color:red;padding:20px;font-family:monospace;">' +
      'DiagramSim error: ' + msg + '</p>';
  }
}

// Boot — wait for DOM, then initialize
const sim = new DiagramSim();
document.addEventListener('DOMContentLoaded', () => sim.init());
