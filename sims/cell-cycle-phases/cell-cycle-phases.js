// Cell Cycle Phases Explorer (p5.js)
// Shows proportional cell-cycle arc segments with checkpoints and detail panel

let canvasWidth = 760;
const drawHeight = 420;
const controlHeight = 80; // (2 × 35) + 10
const canvasHeight = drawHeight + controlHeight;
const margin = 25;
const sliderLeftMargin = 230;
const defaultTextSize = 16;

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

const ring = {
  cx: 0,
  cy: 0,
  innerR: 95,
  outerR: 165
};

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

function draw() {
  updateCanvasSize();
  background('white');
  stroke('silver');
  strokeWeight(1);
  fill('aliceblue');
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);

  ring.cx = canvasWidth * 0.38;
  ring.cy = drawHeight / 2;

  updateAnimation();

  drawTitle();
  drawCycleRing();
  hoveredCheckpoint = null;
  drawCheckpoints();
  drawCheckpointTooltip();
  drawPointer();
  drawLegend();
  drawDetailPanel();
  drawControlsLabel();
}

function drawTitle() {
  noStroke();
  fill('black');
  textSize(24);
  textAlign(CENTER, TOP);
  text('Cell Cycle Phases Explorer', canvasWidth / 2, 10);
  textSize(defaultTextSize);
  text('Click a phase or animate the clock to see durations, checkpoints, and key events.', canvasWidth / 2, 40);
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
    strokeWeight(i === selectedPhase ? 26 : 20);
    const startRad = radians(phase.startDeg);
    const endRad = radians(phase.endDeg);
    arc(ring.cx, ring.cy, outer, outer, startRad, endRad);
  }

  noStroke();
  fill('black');
  textSize(defaultTextSize);
  textAlign(CENTER, CENTER);
  phases.forEach((phase) => {
    const angle = radians(phase.midDeg);
    const radius = ring.outerR + 25;
    const x = ring.cx + cos(angle) * radius;
    const y = ring.cy + sin(angle) * radius;
    text(`${phase.name}`, x, y);
  });
  textAlign(LEFT, CENTER);
}

function drawCheckpoints() {
  checkpoints.forEach((cp) => {
    const phase = phases[cp.phaseIndex];
    let angleDeg = phase.endDeg;
    if (cp.name === 'Spindle checkpoint') {
      angleDeg = phase.startDeg + (phase.endDeg - phase.startDeg) * 0.5;
    }
    const angle = radians(angleDeg);
    const radius = (ring.innerR + ring.outerR) / 2;
    const x = ring.cx + cos(angle) * radius;
    const y = ring.cy + sin(angle) * radius;
    fill('#E74C3C');
    stroke('#943126');
    strokeWeight(1.5);
    polygon(x, y, 12, 8);
    noStroke();
    fill('black');
    textSize(12);
    textAlign(CENTER, TOP);
    text(cp.name, x, y + 14);
    textAlign(LEFT, CENTER);

    const dist = dist2(mouseX, mouseY, x, y);
    if (dist < 18) hoveredCheckpoint = cp;
  });
}

function dist2(x1, y1, x2, y2) {
  return Math.hypot(x1 - x2, y1 - y2);
}

function drawCheckpointTooltip() {
  if (!hoveredCheckpoint) return;
  const panelX = margin;
  const panelY = drawHeight - 260;
  const w = 270;
  const h = 90;
  stroke('#E74C3C');
  fill(255, 255, 255, 240);
  rect(panelX, panelY, w, h, 10);
  noStroke();
  fill('black');
  textSize(defaultTextSize);
  text(`${hoveredCheckpoint.name}`, panelX + 12, panelY + 18);
  text(hoveredCheckpoint.info, panelX + 12, panelY + 42, w - 24, h - 48);
}

function drawPointer() {
  const radius = (ring.innerR + ring.outerR) / 2 + 10;
  const angle = radians(pointerAngle);
  const x = ring.cx + cos(angle) * radius;
  const y = ring.cy + sin(angle) * radius;
  fill('white');
  stroke('#2C3E50');
  strokeWeight(2);
  circle(x, y, 22);
  noStroke();
  fill('#2C3E50');
  textAlign(CENTER, CENTER);
  text('•', x, y + 2);
  textAlign(LEFT, CENTER);
}

function drawLegend() {
  const panelX = margin;
  const panelY = drawHeight - 150;
  stroke(200);
  fill(255, 255, 255, 240);
  rect(panelX, panelY, 260, 110, 12);
  noStroke();
  fill('black');
  textSize(defaultTextSize);
  text('Checkpoint icons mark critical control points.', panelX + 12, panelY + 24, 236, 60);
}

function drawDetailPanel() {
  const panelX = canvasWidth * 0.62;
  const panelW = canvasWidth - panelX - margin;
  const panelH = 260;
  const panelY = 90;

  stroke(200);
  fill(255, 255, 255, 240);
  rect(panelX, panelY, panelW, panelH, 14);
  noStroke();
  fill('black');
  textSize(defaultTextSize);
  textAlign(LEFT, TOP);

  const phase = phases[selectedPhase];
  text(`${phase.name} phase`, panelX + 14, panelY + 12);
  text(`Duration: ~${phase.hours} hours`, panelX + 14, panelY + 38);
  text('Key events:', panelX + 14, panelY + 70);
  let offsetY = panelY + 92;
  phase.events.forEach((evt) => {
    text(`• ${evt}`, panelX + 24, offsetY);
    offsetY += 20;
  });
  text('Key molecules:', panelX + 14, offsetY + 10);
  offsetY += 34;
  phase.molecules.forEach((mol) => {
    text(`• ${mol}`, panelX + 24, offsetY);
    offsetY += 20;
  });
}

function drawControlsLabel() {
  noStroke();
  fill('black');
  textSize(defaultTextSize);
  const speedValue = (speedSlider.value() / 100).toFixed(1);
  text(`Speed: ${speedValue}×`, margin, drawHeight + 55);
}

function positionControls() {
  const row1Y = drawHeight + 5;
  stepButton.position(margin, row1Y);
  animateButton.position(margin + 165, row1Y);
  resetButton.position(margin + 330, row1Y);

  const row2Y = drawHeight + 40;
  speedSlider.position(sliderLeftMargin, row2Y);
  speedSlider.size(canvasWidth - sliderLeftMargin - margin);
}

function stepPhase() {
  selectedPhase = (selectedPhase + 1) % phases.length;
  pointerAngle = phases[selectedPhase].startDeg;
}

function toggleAnimate() {
  animateActive = !animateActive;
  animateButton.html(animateActive ? 'Pause Animation' : 'Animate Cycle');
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
  const speed = speedSlider.value() / 100; // 0.5–2.0
  pointerAngle += 40 * dt * speed;
  if (pointerAngle >= phases[phases.length - 1].endDeg) pointerAngle -= 360;
  const normalized = (pointerAngle + 360) % 360;
  for (let i = 0; i < phases.length; i++) {
    const phase = phases[i];
    const start = (phase.startDeg + 360) % 360;
    const end = (phase.endDeg + 360) % 360;
    if (start < end) {
      if (normalized >= start && normalized < end) {
        selectedPhase = i;
        break;
      }
    } else {
      if (normalized >= start || normalized < end) {
        selectedPhase = i;
        break;
      }
    }
  }
}

function mousePressed() {
  const dx = mouseX - ring.cx;
  const dy = mouseY - ring.cy;
  const dist = sqrt(dx * dx + dy * dy);
  if (dist < ring.innerR || dist > ring.outerR) return;
  let angle = degrees(atan2(dy, dx));
  if (angle < 0) angle += 360;
  for (let i = 0; i < phases.length; i++) {
    const phase = phases[i];
    const start = (phase.startDeg + 360) % 360;
    const end = (phase.endDeg + 360) % 360;
    if (start < end) {
      if (angle >= start && angle < end) {
        selectedPhase = i;
        pointerAngle = phase.startDeg;
        return;
      }
    } else {
      if (angle >= start || angle < end) {
        selectedPhase = i;
        pointerAngle = phase.startDeg;
        return;
      }
    }
  }
}

function polygon(x, y, radius, sides) {
  beginShape();
  for (let i = 0; i < sides; i++) {
    const angle = (TWO_PI * i) / sides;
    vertex(x + cos(angle) * radius, y + sin(angle) * radius);
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
