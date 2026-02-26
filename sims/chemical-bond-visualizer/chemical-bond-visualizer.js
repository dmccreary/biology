// Chemical Bond Visualizer
// AP Biology - Chapter 1: Scientific Foundations and Atomic Chemistry
// Bloom Level: Analyze (L4) — Verb: compare
// Students compare ionic, nonpolar covalent, polar covalent, hydrogen, and
// van der Waals bonds by examining electron distribution, strength, and
// biological examples for each bond type.

let containerWidth;
let canvasWidth = 600;
let drawHeight = 360;
let controlHeight = 120;
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;

let defaultTextSize = 13;

// Bond data: one entry per bond type
const bondData = [
  {
    name: 'Ionic',
    color: [255, 152, 0],    // orange
    electronBehavior: 'One atom donates an electron to another, forming oppositely charged ions (cation and anion) attracted by electrostatic force.',
    strengthLabel: '~85 kcal/mol in dry conditions; weakened dramatically when dissolved in water.',
    barDry: 100,
    barWater: 5,
    examples: [
      'Na⁺ and Cl⁻ in table salt (NaCl)',
      'Ion gradients that drive nerve impulses',
      'Ionic solutes readily dissociate in cytoplasm'
    ]
  },
  {
    name: 'Nonpolar\nCovalent',
    color: [117, 117, 117],  // gray
    electronBehavior: 'Two atoms of similar electronegativity share electrons equally — no partial charges develop on either atom.',
    strengthLabel: '~83 kcal/mol (C–C bond); very stable under biological conditions.',
    barDry: 95,
    barWater: 95,
    examples: [
      'C–C bonds in fatty acid hydrocarbon tails',
      'C–H bonds throughout organic molecules',
      'Forms the stable scaffold of all lipids'
    ]
  },
  {
    name: 'Polar\nCovalent',
    color: [21, 101, 192],   // blue
    electronBehavior: 'Atoms of different electronegativity share electrons unequally — partial charges δ+ and δ− develop, creating a dipole.',
    strengthLabel: '~110 kcal/mol (O–H bond); very strong yet confers molecular polarity.',
    barDry: 90,
    barWater: 90,
    examples: [
      'O–H bonds in water (H₂O)',
      'N–H bonds in amino acid backbones',
      'Polarity makes water an excellent biological solvent'
    ]
  },
  {
    name: 'Hydrogen\nBond',
    color: [2, 136, 209],    // light blue
    electronBehavior: 'Electrostatic attraction between a δ+ hydrogen (bonded to O, N, or F) and a nearby δ− electronegative atom.',
    strengthLabel: '~3–5 kcal/mol each — weak individually, but powerful in large numbers.',
    barDry: 15,
    barWater: 15,
    examples: [
      'DNA base pairing: A–T (2 bonds), G–C (3 bonds)',
      'Protein α-helix and β-sheet structure',
      'Water cohesion, high boiling point, surface tension'
    ]
  },
  {
    name: 'Van der\nWaals',
    color: [67, 160, 71],    // green
    electronBehavior: 'Transient induced dipoles arise from fleeting electron-density fluctuations in nonpolar molecules, generating weak momentary attractions.',
    strengthLabel: '~0.1–1 kcal/mol per contact — negligible alone, but significant when thousands occur simultaneously.',
    barDry: 2,
    barWater: 2,
    examples: [
      'Nonpolar side-chain packing in protein cores',
      'Enzyme–substrate surface complementarity',
      'Gecko toe adhesion (biological application)'
    ]
  }
];

let selectedBond = -1; // index of currently selected bond; -1 = none
let hoveredBond  = -1; // index of currently hovered bond; -1 = none

// ─── Setup ────────────────────────────────────────────────────────────────────

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textFont('Arial');
  frameRate(24);
  describe(
    'Chemical Bond Visualizer: five animated columns compare ionic, ' +
    'covalent, hydrogen, and van der Waals bonds; click a column to see details.',
    LABEL
  );
}

// ─── Main Draw Loop ───────────────────────────────────────────────────────────

function draw() {
  updateCanvasSize();
  background(255);

  drawTitleBar();

  let colW = canvasWidth / 5;
  for (let i = 0; i < 5; i++) {
    drawBondColumn(i, i * colW, 36, colW, drawHeight - 36);
  }

  drawSummaryCard();
}

// ─── Title Bar ────────────────────────────────────────────────────────────────

function drawTitleBar() {
  noStroke();
  fill(232, 245, 233);
  rect(0, 0, canvasWidth, 36);
  fill(27, 94, 32);
  textAlign(CENTER, CENTER);
  textSize(14);
  text('Chemical Bond Visualizer  —  Click a column to explore', canvasWidth / 2, 18);
}

// ─── Bond Column ──────────────────────────────────────────────────────────────

function drawBondColumn(idx, x, y, w, h) {
  let bd = bondData[idx];
  let cr = bd.color[0], cg = bd.color[1], cb = bd.color[2];
  let isSel  = (selectedBond === idx);
  let isHov  = (hoveredBond  === idx);

  // Column background
  if (isSel) {
    fill(cr, cg, cb, 35);
  } else if (isHov) {
    fill(cr, cg, cb, 15);
  } else {
    fill(255);
  }
  stroke(isSel ? color(cr, cg, cb) : color(210));
  strokeWeight(isSel ? 2.5 : 1);
  rect(x, y, w, h);

  // Bond name (supports two-line names)
  noStroke();
  fill(cr, cg, cb);
  textAlign(CENTER, TOP);
  textSize(12);
  let parts = bd.name.split('\n');
  if (parts.length === 2) {
    text(parts[0], x + w / 2, y + 6);
    text(parts[1], x + w / 2, y + 20);
  } else {
    text(bd.name, x + w / 2, y + 14);
  }

  // Molecular animation (centered at y+50+90 = y+140 within column)
  drawMoleculeAnim(idx, x + w / 2, y + 140, w);

  // Strength bar near bottom of column
  drawStrengthBar(idx, x + 6, y + h - 54, w - 12, 22);

  // Strength label below bar
  noStroke();
  fill(100);
  textAlign(CENTER, TOP);
  textSize(9);
  text('Relative strength', x + w / 2, y + h - 30);
  if (idx === 0) {
    text('(orange = in water)', x + w / 2, y + h - 20);
  }

  // Click hint
  fill(isSel ? color(cr, cg, cb) : color(140));
  textAlign(CENTER, BOTTOM);
  textSize(10);
  text(isSel ? '▼ Selected' : 'Click to explore', x + w / 2, y + h - 2);
}

// ─── Molecular Animations ─────────────────────────────────────────────────────

function drawMoleculeAnim(idx, cx, cy, colW) {
  push();
  let t = frameCount * 0.04;
  switch (idx) {
    case 0: animIonic(cx, cy, t);           break;
    case 1: animNonpolarCovalent(cx, cy, t); break;
    case 2: animPolarCovalent(cx, cy, t);   break;
    case 3: animHydrogenBond(cx, cy, t);    break;
    case 4: animVanDerWaals(cx, cy, t);     break;
  }
  pop();
}

// Ionic: electron dot arcs from Na to Cl then stays; ions show charges
function animIonic(cx, cy, t) {
  let naX = cx - 30;
  let clX = cx + 30;

  // Phase 0→0.4: electron moves Na → Cl; 0.4→1: stays with Cl
  let phase = (t % (TWO_PI * 1.5)) / (TWO_PI * 1.5);
  let ex, ey;
  let transferred = phase >= 0.4;

  if (!transferred) {
    let p = phase / 0.4;
    ex = lerp(naX, clX, p);
    ey = cy - sin(p * PI) * 22;
  } else {
    ex = clX;
    ey = cy;
  }

  // Electron dot (draw before atoms so it appears behind)
  fill(255, 235, 59);
  stroke(245, 127, 23);
  strokeWeight(1);
  circle(ex, ey, 10);

  // Na atom
  fill(255, 204, 188);
  stroke(255, 152, 0);
  strokeWeight(2);
  circle(naX, cy, 38);

  // Cl atom
  fill(200, 230, 201);
  stroke(255, 152, 0);
  strokeWeight(2);
  circle(clX, cy, 42);

  // Labels and optional charge indicators
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(12);
  if (transferred) {
    fill(183, 28, 28);  text('Na⁺', naX, cy);
    fill(27,  94,  32); text('Cl⁻', clX, cy);
    // Attraction arrow between ions
    stroke(255, 152, 0);
    strokeWeight(1.5);
    bondArrow(naX + 20, cy, clX - 22, cy, color(255, 152, 0));
  } else {
    fill(62,  39,  35); text('Na', naX, cy);
    fill(27,  94,  32); text('Cl', clX, cy);
  }
}

// Nonpolar covalent: symmetric electron cloud, two electrons orbit midpoint
function animNonpolarCovalent(cx, cy, t) {
  let sep = 24;

  // Symmetric electron cloud
  noStroke();
  fill(117, 117, 117, 55);
  ellipse(cx, cy, 90, 44);

  // C atoms
  fill(210, 210, 210);
  stroke(117, 117, 117);
  strokeWeight(2);
  circle(cx - sep, cy, 34);
  circle(cx + sep, cy, 34);

  // Labels
  noStroke();
  fill(33, 33, 33);
  textAlign(CENTER, CENTER);
  textSize(13);
  text('C', cx - sep, cy);
  text('C', cx + sep, cy);

  // Two shared electrons rotating symmetrically
  fill(255, 235, 59);
  stroke(245, 127, 23);
  strokeWeight(1);
  circle(cx + 33 * cos(t),          cy + 14 * sin(t),          9);
  circle(cx + 33 * cos(t + PI),     cy + 14 * sin(t + PI),     9);
}

// Polar covalent: H₂O with asymmetric cloud and δ+/δ− labels
function animPolarCovalent(cx, cy, t) {
  let oX = cx;
  let oY = cy - 14;
  let h1X = cx - 26; let h1Y = cy + 22;
  let h2X = cx + 26; let h2Y = cy + 22;

  // Asymmetric electron cloud shifted toward O
  noFill();
  stroke(21, 101, 192, 110);
  strokeWeight(2);
  ellipse(cx - 5, oY + 4, 58, 48);

  // Bond lines
  stroke(160);
  strokeWeight(1.5);
  line(oX, oY + 14, h1X, h1Y - 7);
  line(oX, oY + 14, h2X, h2Y - 7);

  // O atom
  fill(239, 154, 154);
  stroke(21, 101, 192);
  strokeWeight(2);
  circle(oX, oY, 38);

  // H atoms
  fill(227, 242, 253);
  stroke(21, 101, 192);
  strokeWeight(1.5);
  circle(h1X, h1Y, 24);
  circle(h2X, h2Y, 24);

  // Labels
  noStroke();
  textAlign(CENTER, CENTER);
  fill(183, 28, 28); textSize(13); text('O', oX, oY);
  fill(13,  71, 161); textSize(11);
  text('H', h1X, h1Y);
  text('H', h2X, h2Y);

  // Partial charges
  textSize(10);
  fill(13, 71, 161);
  text('δ+', h1X - 18, h1Y - 6);
  text('δ+', h2X + 18, h2Y - 6);
  fill(183, 28, 28);
  text('δ−', oX, oY - 26);

  // Pulsing electron density on O (shows electron pulling)
  let pulse = map(sin(t * 1.5), -1, 1, 20, 65);
  noStroke();
  fill(21, 101, 192, pulse);
  circle(oX, oY, 20);
}

// Hydrogen bond: two water molecules connected by a pulsing dashed line
function animHydrogenBond(cx, cy, t) {
  let m1x = cx - 36;
  let m2x = cx + 36;

  tinyWater(m1x, cy);
  tinyWater(m2x, cy);

  // Pulsing dashed hydrogen bond
  let alpha = map(sin(t * 2), -1, 1, 80, 230);
  stroke(2, 136, 209, alpha);
  strokeWeight(2);
  drawingContext.setLineDash([5, 4]);
  line(m1x + 14, cy + 8, m2x - 15, cy);
  drawingContext.setLineDash([]);

  // Partial charge labels on H donor and O acceptor
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(9);
  fill(13, 71, 161);
  text('δ+', m1x + 10, cy + 19);
  fill(183, 28, 28);
  text('δ−', m2x - 6, cy - 15);

  fill(90);
  textAlign(CENTER, BOTTOM);
  textSize(9);
  text('≈ 3–5 kcal/mol', cx, cy + 46);
}

// Van der Waals: two nonpolar ovals with flickering induced dipoles
function animVanDerWaals(cx, cy, t) {
  let m1x = cx - 33;
  let m2x = cx + 33;
  let flicker = sin(t * 3.2);

  // Electron clouds that shift with flicker
  noStroke();
  fill(67, 160, 71, 60);
  ellipse(m1x + flicker * 3,  cy, 52, 38);
  fill(67, 160, 71, 50);
  ellipse(m2x - flicker * 2.5, cy, 46, 33);

  // Molecule outlines
  noFill();
  stroke(67, 160, 71);
  strokeWeight(1.5);
  ellipse(m1x, cy, 52, 38);
  ellipse(m2x, cy, 46, 33);

  // Transient partial charges (fade in/out with flicker magnitude)
  let chargeAlpha = map(abs(flicker), 0, 1, 0, 200);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(10);

  // Direction flips with flicker sign
  let leftNeg  = flicker > 0;
  fill(leftNeg ? color(13,71,161,chargeAlpha) : color(183,28,28,chargeAlpha));
  text(leftNeg ? 'δ−' : 'δ+', m1x - 12, cy);
  fill(leftNeg ? color(183,28,28,chargeAlpha) : color(13,71,161,chargeAlpha));
  text(leftNeg ? 'δ+' : 'δ−', m1x + 12, cy);
  fill(leftNeg ? color(183,28,28,chargeAlpha) : color(13,71,161,chargeAlpha));
  text(leftNeg ? 'δ+' : 'δ−', m2x - 12, cy);
  fill(leftNeg ? color(13,71,161,chargeAlpha) : color(183,28,28,chargeAlpha));
  text(leftNeg ? 'δ−' : 'δ+', m2x + 12, cy);

  // Faint attraction arrow when flicker is strong
  if (abs(flicker) > 0.4) {
    let arrA = map(abs(flicker), 0.4, 1, 0, 180);
    stroke(67, 160, 71, arrA);
    strokeWeight(1.5);
    bondArrow(m1x + 27, cy, m2x - 24, cy, color(67, 160, 71, arrA));
  }

  noStroke();
  fill(90);
  textAlign(CENTER, BOTTOM);
  textSize(9);
  text('transient induced dipoles', cx, cy + 32);
}

// ─── Small Water Helper ───────────────────────────────────────────────────────

// Draws a small water molecule diagram centered at (x, y)
function tinyWater(x, y) {
  let oY  = y - 6;
  let h1X = x - 12; let h1Y = y + 12;
  let h2X = x + 12; let h2Y = y + 12;

  stroke(160);
  strokeWeight(1);
  line(x, oY, h1X, h1Y);
  line(x, oY, h2X, h2Y);

  fill(239, 154, 154, 180);
  stroke(150);
  strokeWeight(1);
  circle(x, oY, 20);

  fill(227, 242, 253, 180);
  circle(h1X, h1Y, 12);
  circle(h2X, h2Y, 12);

  noStroke();
  textAlign(CENTER, CENTER);
  fill(183, 28, 28); textSize(9); text('O', x, oY);
  fill(13, 71, 161); textSize(8);
  text('H', h1X, h1Y);
  text('H', h2X, h2Y);
}

// ─── Strength Bar ─────────────────────────────────────────────────────────────

function drawStrengthBar(idx, x, y, w, h) {
  let bd = bondData[idx];
  let cr = bd.color[0], cg = bd.color[1], cb = bd.color[2];

  // Background track
  fill(230);
  noStroke();
  rect(x, y, w, h, 3);

  // Filled bar (dry strength)
  let fw = (bd.barDry / 100) * (w - 4);
  fill(cr, cg, cb);
  rect(x + 2, y + 2, fw, h - 4, 2);

  // For ionic: overlay a lighter segment showing water strength
  if (idx === 0) {
    let fwW = (bd.barWater / 100) * (w - 4);
    fill(255, 152, 0, 100);
    rect(x + 2, y + 2, fwW, h - 4, 2);
  }
}

// ─── Summary Card ─────────────────────────────────────────────────────────────

function drawSummaryCard() {
  // Card background
  fill(255, 253, 231);
  stroke(220);
  strokeWeight(1);
  rect(0, drawHeight, canvasWidth, controlHeight);

  if (selectedBond === -1) {
    noStroke();
    fill(158, 158, 158);
    textAlign(CENTER, CENTER);
    textSize(13);
    text('Click any bond column above to see electron behavior, bond strength, and biological examples.',
         canvasWidth / 2, drawHeight + controlHeight / 2);
    return;
  }

  let bd = bondData[selectedBond];
  let cr = bd.color[0], cg = bd.color[1], cb = bd.color[2];
  let cx = 8;
  let cy = drawHeight + 6;
  let cw = canvasWidth - 16;

  // Colored header bar
  fill(cr, cg, cb);
  noStroke();
  rect(cx, cy, cw, 26, 4);
  fill(255);
  textAlign(LEFT, CENTER);
  textSize(13);
  text('  ' + bd.name.replace('\n', ' ') + ' Bond', cx + 8, cy + 13);

  // Three-column content layout
  let c1w = cw * 0.38;
  let c2w = cw * 0.26;
  let c3w = cw * 0.36;
  let contentY = cy + 34;
  let labelSize = 10;
  let bodySize  = 10;

  // Column 1: Electron Behavior
  noStroke();
  fill(cr, cg, cb);
  textAlign(LEFT, TOP);
  textSize(labelSize);
  text('Electron Behavior', cx + 4, contentY);
  fill(50);
  textSize(bodySize);
  text(bd.electronBehavior, cx + 4, contentY + 14, c1w - 8);

  // Column 2: Bond Strength
  fill(cr, cg, cb);
  textSize(labelSize);
  text('Bond Strength', cx + c1w + 4, contentY);
  fill(50);
  textSize(bodySize);
  text(bd.strengthLabel, cx + c1w + 4, contentY + 14, c2w - 8);

  // Column 3: Biological Examples
  fill(cr, cg, cb);
  textSize(labelSize);
  text('Biological Examples', cx + c1w + c2w + 4, contentY);
  fill(50);
  textSize(bodySize);
  for (let i = 0; i < bd.examples.length; i++) {
    text('• ' + bd.examples[i],
         cx + c1w + c2w + 4,
         contentY + 14 + i * 18,
         c3w - 8);
  }
}

// ─── Arrow Helper ─────────────────────────────────────────────────────────────

// Draws a line with an arrowhead at (x2, y2) using the given p5 color
function bondArrow(x1, y1, x2, y2, col) {
  let ang = atan2(y2 - y1, x2 - x1);
  let sz  = 6;
  line(x1, y1, x2, y2);
  push();
  translate(x2, y2);
  rotate(ang);
  fill(col);
  noStroke();
  triangle(0, 0, -sz, -sz / 2, -sz, sz / 2);
  pop();
}

// ─── Interaction ──────────────────────────────────────────────────────────────

function mousePressed() {
  // Only respond to clicks in the column drawing area (below title bar)
  if (mouseY < 36 || mouseY > drawHeight) return;
  let colW = canvasWidth / 5;
  let col  = floor(mouseX / colW);
  if (col >= 0 && col < 5) {
    // Toggle: clicking a selected column deselects it
    selectedBond = (selectedBond === col) ? -1 : col;
  }
}

function mouseMoved() {
  if (mouseY < 36 || mouseY > drawHeight) {
    hoveredBond = -1;
    return;
  }
  let colW = canvasWidth / 5;
  let col  = floor(mouseX / colW);
  hoveredBond = (col >= 0 && col < 5) ? col : -1;
}

// ─── Responsive ───────────────────────────────────────────────────────────────

function windowResized() {
  updateCanvasSize();
  resizeCanvas(containerWidth, canvasHeight);
  redraw();
}

function updateCanvasSize() {
  const container = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(container.width);
  canvasWidth = containerWidth;
}
