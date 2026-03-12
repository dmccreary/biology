// Cell Cycle Phases Explorer (p5.js)
// Two-column layout: cycle ring left, detail panel right — no overlapping elements

let canvasWidth = 760;
const drawHeight = 440;
const controlHeight = 50;
const canvasHeight = drawHeight + controlHeight;
const margin = 15;
const defaultTextSize = 14;

let stepButton;
let animateButton;
let resetButton;
let speedSlider;

const phases = [
  {
    name: 'G1',
    hours: 10,
    color: '#AED6F1',
    events: [
      'Cell grows and doubles organelles',
      'Nutrients & DNA damage are assessed'
    ],
    molecules: ['Cyclin D/CDK4-6', 'Rb & E2F', 'p53']
  },
  {
    name: 'S',
    hours: 9,
    color: '#F9E79F',
    events: ['DNA replication begins', 'Histones synthesized'],
    molecules: ['DNA polymerase', 'Cyclin E/CDK2', 'PCNA']
  },
  {
    name: 'G2',
    hours: 4,
    color: '#A9DFBF',
    events: ['DNA checked for errors', 'Spindle components assembled'],
    molecules: ['Cyclin A/CDK1', 'Chk1/Chk2 kinases']
  },
  {
    name: 'M',
    hours: 1,
    color: '#F5CBA7',
    events: ['Mitosis & cytokinesis', 'Spindle attaches & separates chromatids'],
    molecules: ['Cyclin B/CDK1', 'Spindle checkpoint proteins']
  }
];

const checkpoints = [
  {
    name: 'G1/S checkpoint',
    info: 'Restriction point: cell size, nutrients, DNA damage',
    phaseIndex: 0
  },
  {
    name: 'G2/M checkpoint',
    info: 'Confirms DNA replicated accurately before mitosis',
    phaseIndex: 2
  },
  {
    name: 'Spindle checkpoint',
    info: 'Verifies chromosomes attached to spindle before separation',
    phaseIndex: 3
  }
];

// Ring geometry — computed dynamically based on canvas width
let ring = { cx: 0, cy: 0, innerR: 0, outerR: 0 };
// Boundary between ring column and detail column
let dividerX = 0;

let selectedPhase = 0;
let pointerAngle = -90;
let animateActive = false;
let canvasReady = false;
let hoveredCheckpoint = null;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  canvasReady = true;

  calculatePhaseAngles();

  stepButton = createButton('Step Phase');
  stepButton.mousePressed(stepPhase);

  animateButton = createButton('Animate Cycle');
  animateButton.mousePressed(toggleAnimate);

  resetButton = createButton('Reset');
  resetButton.mousePressed(resetCycle);

  speedSlider = createSlider(50, 200, 100, 5);

  positionControls();
  describe('Interactive cell-cycle clock with clickable phases, checkpoints, animation, and detail panel.');
}

function computeLayout() {
  // Left column: ring occupies ~48% of width
  dividerX = canvasWidth * 0.48;
  ring.cx = dividerX / 2;
  ring.cy = drawHeight / 2 + 20; // offset below title
  // Scale ring to fit in column with padding for labels
  const maxR = Math.min(dividerX / 2 - 45, (drawHeight - 80) / 2 - 30);
  ring.outerR = Math.max(80, maxR);
  ring.innerR = ring.outerR * 0.58;
}

function draw() {
  updateCanvasSize();
  computeLayout();

  // Draw area background
  background('aliceblue');
  noStroke();

  // Control strip background
  fill(245);
  rect(0, drawHeight, canvasWidth, controlHeight);
  stroke(210);
  strokeWeight(1);
  line(0, drawHeight, canvasWidth, drawHeight);

  updateAnimation();
  hoveredCheckpoint = null;

  drawTitle();
  drawCycleRing();
  drawCheckpoints();
  drawPointer();
  drawDetailPanel();
  drawControlsLabel();
}

function drawTitle() {
  noStroke();
  fill(30);
  textSize(18);
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  text('Cell Cycle Phases Explorer', canvasWidth / 2, 8);
  textStyle(NORMAL);
  textSize(12);
  fill(80);
  text('Click a phase or animate the clock to explore durations, checkpoints, and key events.', canvasWidth / 2, 30);
  textAlign(LEFT, CENTER);
}

function calculatePhaseAngles() {
  const totalHours = phases.reduce((sum, ph) => sum + ph.hours, 0);
  let currentDeg = -90; // start at top
  phases.forEach((phase, idx) => {
    const span = (phase.hours / totalHours) * 360;
    phase.startDeg = currentDeg;
    phase.endDeg = currentDeg + span;
    phase.midDeg = phase.startDeg + span / 2;
    currentDeg += span;
    if (idx === selectedPhase) pointerAngle = phase.startDeg;
  });
}

function drawCycleRing() {
  noFill();
  const outer = ring.outerR * 2;
  for (let i = 0; i < phases.length; i++) {
    const phase = phases[i];
    stroke(phase.color);
    strokeWeight(i === selectedPhase ? 28 : 20);
    const startRad = radians(phase.startDeg);
    const endRad = radians(phase.endDeg);
    arc(ring.cx, ring.cy, outer, outer, startRad, endRad);
  }

  // Phase labels outside ring
  noStroke();
  fill(30);
  textSize(defaultTextSize);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  phases.forEach((phase) => {
    const angle = radians(phase.midDeg);
    const labelR = ring.outerR + 22;
    const lx = ring.cx + cos(angle) * labelR;
    const ly = ring.cy + sin(angle) * labelR;
    text(phase.name, lx, ly);
  });

  // Duration inside center of ring
  textStyle(NORMAL);
  textSize(12);
  fill(80);
  const totalHours = phases.reduce((s, p) => s + p.hours, 0);
  text('~' + totalHours + ' hrs', ring.cx, ring.cy - 8);
  textSize(11);
  text('total cycle', ring.cx, ring.cy + 8);
  textAlign(LEFT, CENTER);
}

function drawCheckpoints() {
  // Label placement: push each label to a different side of its marker
  // so nearby checkpoints (G2/M and Spindle are ~7.5° apart) don't overlap.
  // 'out' = label on the outer edge, 'in' = label toward ring center
  const labelSide = {
    'G1/S checkpoint': 'out',
    'G2/M checkpoint': 'out',
    'Spindle checkpoint': 'in'
  };

  checkpoints.forEach((cp) => {
    const phase = phases[cp.phaseIndex];
    let angleDeg = phase.endDeg;
    if (cp.name === 'Spindle checkpoint') {
      angleDeg = phase.startDeg + (phase.endDeg - phase.startDeg) * 0.5;
    }
    const angle = radians(angleDeg);
    const cpR = (ring.innerR + ring.outerR) / 2;
    const cx = ring.cx + cos(angle) * cpR;
    const cy = ring.cy + sin(angle) * cpR;

    // Red octagon marker
    fill('#E74C3C');
    stroke('#943126');
    strokeWeight(1.5);
    drawPolygon(cx, cy, 10, 8);

    // Place label offset from the marker to avoid overlap
    noStroke();
    fill(60);
    textSize(10);

    let lx, ly;
    if (cp.name === 'Spindle checkpoint') {
      // Place to the right of the marker
      lx = cx + 14;
      ly = cy + 10;
      textAlign(LEFT, CENTER);
    } else {
      // Push outward along the radial direction
      const labelR = cpR + 20;
      lx = ring.cx + cos(angle) * labelR;
      ly = ring.cy + sin(angle) * labelR;
      if (cp.name === 'G2/M checkpoint') ly += 40;
      if (lx < ring.cx - 10) {
        textAlign(RIGHT, CENTER);
      } else if (lx > ring.cx + 10) {
        textAlign(LEFT, CENTER);
      } else {
        textAlign(CENTER, BOTTOM);
      }
    }
    text(cp.name, lx, ly);
    textAlign(LEFT, CENTER);

    // Hover detection
    if (dist(mouseX, mouseY, cx, cy) < 18) hoveredCheckpoint = cp;
  });
}

function drawPointer() {
  const pointerR = (ring.innerR + ring.outerR) / 2 + 8;
  const angle = radians(pointerAngle);
  const px = ring.cx + cos(angle) * pointerR;
  const py = ring.cy + sin(angle) * pointerR;
  fill(255);
  stroke('#2C3E50');
  strokeWeight(2);
  circle(px, py, 18);
  noStroke();
  fill('#2C3E50');
  textAlign(CENTER, CENTER);
  textSize(14);
  text('\u2022', px, py + 1);
  textAlign(LEFT, CENTER);
}

function drawDetailPanel() {
  const px = dividerX + 10;
  const pw = canvasWidth - px - margin;
  const py = 50;
  const ph = drawHeight - py - 10;

  // Panel background
  stroke(200);
  strokeWeight(1);
  fill(255, 255, 255, 230);
  rect(px, py, pw, ph, 10);
  noStroke();

  let yOff = py + 14;
  const indent = px + 16;
  const bulletIndent = px + 26;
  const wrapW = pw - 36;

  // Phase header with color swatch
  const phase = phases[selectedPhase];
  fill(phase.color);
  rect(indent - 2, yOff - 2, 14, 14, 3);
  fill(30);
  textSize(16);
  textStyle(BOLD);
  textAlign(LEFT, TOP);
  text(phase.name + ' Phase', indent + 18, yOff);
  textStyle(NORMAL);
  yOff += 26;

  // Duration
  textSize(defaultTextSize);
  fill(60);
  text('Duration: ~' + phase.hours + ' hours', indent, yOff);
  yOff += 28;

  // Key events
  fill(30);
  textStyle(BOLD);
  text('Key Events', indent, yOff);
  textStyle(NORMAL);
  yOff += 20;
  fill(50);
  textSize(13);
  phase.events.forEach((evt) => {
    text('\u2022 ' + evt, bulletIndent, yOff, wrapW, 40);
    yOff += 22;
  });
  yOff += 10;

  // Key molecules
  fill(30);
  textSize(defaultTextSize);
  textStyle(BOLD);
  text('Key Molecules', indent, yOff);
  textStyle(NORMAL);
  yOff += 20;
  fill(50);
  textSize(13);
  phase.molecules.forEach((mol) => {
    text('\u2022 ' + mol, bulletIndent, yOff, wrapW, 40);
    yOff += 22;
  });
  yOff += 14;

  // Checkpoint info (shown in panel, not floating over drawing)
  const relatedCp = checkpoints.find(c => c.phaseIndex === selectedPhase);
  if (relatedCp) {
    // Divider line
    stroke(220);
    strokeWeight(1);
    line(indent, yOff, indent + wrapW, yOff);
    noStroke();
    yOff += 12;

    fill('#C0392B');
    textSize(defaultTextSize);
    textStyle(BOLD);
    text('\u26D4 ' + relatedCp.name, indent, yOff);
    textStyle(NORMAL);
    yOff += 20;
    fill(60);
    textSize(13);
    text(relatedCp.info, bulletIndent, yOff, wrapW, 50);
    yOff += 30;
  }

  // Hovered checkpoint (if different from current phase's checkpoint)
  if (hoveredCheckpoint && (!relatedCp || hoveredCheckpoint.name !== relatedCp.name)) {
    stroke(220);
    strokeWeight(1);
    line(indent, yOff, indent + wrapW, yOff);
    noStroke();
    yOff += 12;

    fill('#E67E22');
    textSize(defaultTextSize);
    textStyle(BOLD);
    text('\u26D4 ' + hoveredCheckpoint.name + ' (hovered)', indent, yOff);
    textStyle(NORMAL);
    yOff += 20;
    fill(60);
    textSize(13);
    text(hoveredCheckpoint.info, bulletIndent, yOff, wrapW, 50);
  }

  textAlign(LEFT, CENTER);
}

function drawControlsLabel() {
  noStroke();
  fill(60);
  textSize(12);
  textAlign(LEFT, CENTER);
  const speedValue = (speedSlider.value() / 100).toFixed(1);
  text('Speed: ' + speedValue + '\u00D7', margin, drawHeight + 38);
}

function positionControls() {
  const btnY = drawHeight + 8;
  stepButton.position(margin, btnY);
  animateButton.position(margin + 110, btnY);
  resetButton.position(margin + 250, btnY);

  const sliderX = margin + 100;
  speedSlider.position(sliderX, drawHeight + 30);
  speedSlider.size(canvasWidth - sliderX - margin - 120);
}

function stepPhase() {
  selectedPhase = (selectedPhase + 1) % phases.length;
  pointerAngle = phases[selectedPhase].startDeg;
}

function toggleAnimate() {
  animateActive = !animateActive;
  animateButton.html(animateActive ? 'Pause' : 'Animate Cycle');
}

function resetCycle() {
  animateActive = false;
  animateButton.html('Animate Cycle');
  selectedPhase = 0;
  pointerAngle = phases[0].startDeg;
}

function updateAnimation() {
  if (!animateActive) return;
  const dt = deltaTime / 1000;
  const speed = speedSlider.value() / 100;
  pointerAngle += 40 * dt * speed;
  if (pointerAngle >= phases[phases.length - 1].endDeg) pointerAngle -= 360;
  const normalized = (pointerAngle + 360) % 360;
  for (let i = 0; i < phases.length; i++) {
    const phase = phases[i];
    const s = (phase.startDeg + 360) % 360;
    const e = (phase.endDeg + 360) % 360;
    if (s < e) {
      if (normalized >= s && normalized < e) { selectedPhase = i; break; }
    } else {
      if (normalized >= s || normalized < e) { selectedPhase = i; break; }
    }
  }
}

function mousePressed() {
  const dx = mouseX - ring.cx;
  const dy = mouseY - ring.cy;
  const d = sqrt(dx * dx + dy * dy);
  if (d < ring.innerR || d > ring.outerR + 20) return;
  let angle = degrees(atan2(dy, dx));
  if (angle < 0) angle += 360;
  for (let i = 0; i < phases.length; i++) {
    const phase = phases[i];
    const s = (phase.startDeg + 360) % 360;
    const e = (phase.endDeg + 360) % 360;
    if (s < e) {
      if (angle >= s && angle < e) { selectedPhase = i; pointerAngle = phase.startDeg; return; }
    } else {
      if (angle >= s || angle < e) { selectedPhase = i; pointerAngle = phase.startDeg; return; }
    }
  }
}

function drawPolygon(x, y, radius, sides) {
  beginShape();
  for (let i = 0; i < sides; i++) {
    const a = (TWO_PI * i) / sides;
    vertex(x + cos(a) * radius, y + sin(a) * radius);
  }
  endShape(CLOSE);
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
  positionControls();
}

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) {
    const newWidth = container.offsetWidth;
    if (newWidth > 0 && newWidth !== canvasWidth) {
      canvasWidth = newWidth;
      if (canvasReady) {
        resizeCanvas(canvasWidth, canvasHeight);
        positionControls();
      }
    }
  }
}
