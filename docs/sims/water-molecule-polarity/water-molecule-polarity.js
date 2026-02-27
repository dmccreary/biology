// Water Molecule Polarity MicroSim
// Step-through reveal of electronegativity, partial charges, dipole, and hydrogen bonds
// MicroSim template version 2026.02

// Global layout variables
let containerWidth;
let canvasWidth = 400;
let drawHeight = 450;
let controlHeight = 45;
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 25;
let defaultTextSize = 16;

// Layout split
let drawAreaFraction = 0.65;
let infoPanelFraction = 0.35;

// Checkboxes
let chargesCb, dipoleCb, hBondsCb;

// Toggle states
let showCharges = false;
let showDipole = false;
let showHBonds = false;

// Molecule geometry constants
let bondAngleDeg = 104.5;
let bondLength; // calculated from drawHeight

// Info panel text
const infoTexts = [
  // Stage 0: bare molecule
  "Water (H\u2082O) consists of one oxygen atom covalently bonded to two hydrogen atoms. " +
  "The bond angle between the two O\u2013H bonds is 104.5\u00B0, giving water its characteristic bent shape. " +
  "This geometry is key to understanding water's unique properties.",

  // Stage 1: partial charges
  "Oxygen is more electronegative (3.44) than hydrogen (2.20) on the Pauling scale. " +
  "This means oxygen pulls the shared electrons closer, creating a partial negative charge (\u03B4\u207B) on oxygen " +
  "and partial positive charges (\u03B4\u207A) on each hydrogen. The O\u2013H bonds are polar covalent bonds.",

  // Stage 2: dipole
  "Because the water molecule is bent (not linear), the two bond dipoles do not cancel out. " +
  "The net dipole moment points from the positive end (between the hydrogens) toward the negative end (oxygen). " +
  "This makes water a polar molecule\u2014essential for its role as a solvent.",

  // Stage 3: hydrogen bonds
  "The partial positive charge on hydrogen of one water molecule is attracted to the partial negative charge " +
  "on oxygen of a neighboring molecule. This is a hydrogen bond (~0.18 nm), which is longer and weaker than " +
  "the covalent O\u2013H bond (~0.10 nm). Each water molecule can form up to 4 hydrogen bonds."
];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  var mainElement = document.querySelector('main');
  canvas.parent(mainElement);

  // Create checkboxes
  chargesCb = createCheckbox('Partial Charges', false);
  chargesCb.changed(() => { showCharges = chargesCb.checked(); });

  dipoleCb = createCheckbox('Dipole', false);
  dipoleCb.changed(() => { showDipole = dipoleCb.checked(); });

  hBondsCb = createCheckbox('H-Bonds', false);
  hBondsCb.changed(() => { showHBonds = hBondsCb.checked(); });

  positionControls();

  describe('Interactive water molecule polarity visualization showing partial charges, dipole moment, and hydrogen bonds', LABEL);
}

function positionControls() {
  let bx = 10;
  let by = drawHeight + 10;
  chargesCb.position(bx, by);
  bx += 150;
  dipoleCb.position(bx, by);
  bx += 100;
  hBondsCb.position(bx, by);
}

function draw() {
  updateCanvasSize();

  let drawAreaW = canvasWidth * drawAreaFraction;
  let infoPanelX = drawAreaW;
  let infoPanelW = canvasWidth * infoPanelFraction;

  // Background regions
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, drawAreaW, drawHeight);

  fill(248, 248, 255);
  stroke('silver');
  rect(drawAreaW, 0, infoPanelW, drawHeight);

  // Control area
  fill('white');
  stroke('silver');
  rect(0, drawHeight, canvasWidth, controlHeight);

  // Calculate molecule positions
  let cx = drawAreaW / 2;
  let cy = drawHeight / 2 - 10;
  bondLength = min(drawAreaW, drawHeight) * 0.2;

  let halfAngle = radians(bondAngleDeg / 2);
  let h1x = cx - bondLength * sin(halfAngle);
  let h1y = cy + bondLength * cos(halfAngle);
  let h2x = cx + bondLength * sin(halfAngle);
  let h2y = cy + bondLength * cos(halfAngle);

  let oRadius = 36;
  let hRadius = 24;

  // Draw title
  fill(0);
  noStroke();
  textAlign(CENTER, TOP);
  textSize(20);
  text('Water Molecule Polarity', drawAreaW / 2, 12);

  // Draw neighboring molecules if H-Bonds checked
  // Position toward top-left and top-right corners of the draw panel so they stay in-bounds
  if (showHBonds) {
    let pad = 45; // padding from panel edges
    let n1x = pad;
    let n1y = pad + 20;
    let n2x = drawAreaW - pad;
    let n2y = pad + 20;
    drawNeighborMolecule(n1x, n1y, 0.55, cx, cy, h1x, h1y);
    drawNeighborMolecule(n2x, n2y, 0.55, cx, cy, h2x, h2y);
  }

  // Draw covalent bonds
  stroke(100);
  strokeWeight(4);
  line(cx, cy, h1x, h1y);
  line(cx, cy, h2x, h2y);

  // Draw bond angle arc
  noFill();
  stroke(80, 80, 80);
  strokeWeight(1.5);
  let arcR = bondLength * 0.35;
  let startA = -(PI / 2 + halfAngle);
  let endA = -(PI / 2 - halfAngle);
  arc(cx, cy, arcR * 2, arcR * 2, startA, endA);

  // Angle label
  fill(60);
  noStroke();
  textSize(13);
  textAlign(CENTER, CENTER);
  text('104.5\u00B0', cx, cy + arcR * 0.75);

  // Draw oxygen atom
  fill(220, 50, 50);
  stroke(180, 30, 30);
  strokeWeight(2);
  ellipse(cx, cy, oRadius * 2, oRadius * 2);
  fill(255);
  noStroke();
  textSize(22);
  textAlign(CENTER, CENTER);
  text('O', cx, cy);

  // Draw hydrogen atoms
  fill(200, 200, 210);
  stroke(160, 160, 170);
  strokeWeight(2);
  ellipse(h1x, h1y, hRadius * 2, hRadius * 2);
  ellipse(h2x, h2y, hRadius * 2, hRadius * 2);
  fill(60);
  noStroke();
  textSize(18);
  text('H', h1x, h1y);
  text('H', h2x, h2y);

  // Partial charges overlay
  if (showCharges) {
    textSize(18);
    fill(0, 0, 180);
    noStroke();
    textAlign(CENTER, CENTER);
    text('\u03B4\u207B', cx + oRadius + 14, cy - 10);

    fill(180, 0, 0);
    text('\u03B4\u207A', h1x - hRadius - 14, h1y + 6);
    text('\u03B4\u207A', h2x + hRadius + 14, h2y + 6);

    // Electronegativity values
    textSize(11);
    fill(0, 0, 150);
    text('EN = 3.44', cx, cy - oRadius - 12);
    fill(150, 0, 0);
    text('EN = 2.20', h1x, h1y + hRadius + 14);
    text('EN = 2.20', h2x, h2y + hRadius + 14);
  }

  // Dipole arrow overlay
  if (showDipole) {
    let dipoleStartX = cx;
    let dipoleStartY = (h1y + h2y) / 2 + 10;
    let dipoleEndX = cx;
    let dipoleEndY = cy - oRadius - 25;

    stroke(0, 100, 200);
    strokeWeight(3.5);
    line(dipoleStartX, dipoleStartY, dipoleEndX, dipoleEndY);

    // Arrowhead
    fill(0, 100, 200);
    noStroke();
    let arrowSize = 10;
    triangle(
      dipoleEndX, dipoleEndY - 4,
      dipoleEndX - arrowSize * 0.6, dipoleEndY + arrowSize,
      dipoleEndX + arrowSize * 0.6, dipoleEndY + arrowSize
    );

    // Plus at start of dipole
    textSize(14);
    textAlign(CENTER, CENTER);
    fill(0, 100, 200);
    noStroke();
    text('+', dipoleStartX + 12, dipoleStartY);

    // Label
    textSize(12);
    text('Net dipole', dipoleEndX + 35, dipoleEndY - 10);
  }

  // Bond length labels when H-Bonds checked
  if (showHBonds) {
    textSize(11);
    fill(80);
    noStroke();
    textAlign(CENTER, CENTER);

    // Covalent bond label
    let midBondX = (cx + h1x) / 2 - 20;
    let midBondY = (cy + h1y) / 2;
    text('O\u2013H ~0.10 nm', midBondX, midBondY - 12);
  }

  // Draw info panel
  drawInfoPanel(infoPanelX, infoPanelW);
}

function drawNeighborMolecule(nx, ny, scale, mainOx, mainOy, mainHx, mainHy) {
  let nb = bondLength * scale;
  let halfA = radians(bondAngleDeg / 2);
  let nh1x = nx - nb * sin(halfA);
  let nh1y = ny + nb * cos(halfA);
  let nh2x = nx + nb * sin(halfA);
  let nh2y = ny + nb * cos(halfA);

  let oR = 22 * scale;
  let hR = 15 * scale;

  // Bonds
  stroke(150);
  strokeWeight(2);
  line(nx, ny, nh1x, nh1y);
  line(nx, ny, nh2x, nh2y);

  // Oxygen
  fill(220, 80, 80, 180);
  stroke(180, 50, 50, 180);
  strokeWeight(1.5);
  ellipse(nx, ny, oR * 2, oR * 2);

  // Hydrogens
  fill(200, 200, 210, 180);
  stroke(160, 160, 170, 180);
  ellipse(nh1x, nh1y, hR * 2, hR * 2);
  ellipse(nh2x, nh2y, hR * 2, hR * 2);

  // Labels
  fill(255, 255, 255, 200);
  noStroke();
  textSize(14 * scale);
  textAlign(CENTER, CENTER);
  text('O', nx, ny);
  textSize(12 * scale);
  text('H', nh1x, nh1y);
  text('H', nh2x, nh2y);

  // Hydrogen bond dashed line from nearest neighbor H to main O
  let d1 = dist(nh1x, nh1y, mainOx, mainOy);
  let d2 = dist(nh2x, nh2y, mainOx, mainOy);
  let hbx = d1 < d2 ? nh1x : nh2x;
  let hby = d1 < d2 ? nh1y : nh2y;
  drawDashedLine(hbx, hby, mainOx, mainOy, 6, 4, color(0, 100, 220, 180));

  // H-bond label
  let midX = (hbx + mainOx) / 2;
  let midY = (hby + mainOy) / 2;
  fill(0, 80, 200);
  noStroke();
  textSize(10);
  textAlign(CENTER, CENTER);
  text('H-bond ~0.18 nm', midX, midY - 10);
}

function drawDashedLine(x1, y1, x2, y2, dashLen, gapLen, col) {
  let d = dist(x1, y1, x2, y2);
  let steps = d / (dashLen + gapLen);
  stroke(col);
  strokeWeight(2.5);
  for (let i = 0; i < steps; i++) {
    let t1 = i * (dashLen + gapLen) / d;
    let t2 = (i * (dashLen + gapLen) + dashLen) / d;
    if (t2 > 1) t2 = 1;
    line(
      lerp(x1, x2, t1), lerp(y1, y2, t1),
      lerp(x1, x2, t2), lerp(y1, y2, t2)
    );
  }
}

function drawInfoPanel(px, pw) {
  let panelMargin = 15;
  let textX = px + panelMargin;
  let textW = pw - panelMargin * 2;

  // Build title and body from active checkboxes
  let title = 'Water Molecule Structure';
  let body = infoTexts[0]; // always show base text

  if (showCharges) {
    title = 'Partial Charges\n& Electronegativity';
    body = infoTexts[1];
  }
  if (showDipole) {
    title = 'Molecular Dipole Moment';
    body = infoTexts[2];
  }
  if (showHBonds) {
    title = 'Hydrogen Bonding';
    body = infoTexts[3];
  }

  // Panel header
  fill(40, 100, 60);
  noStroke();
  textAlign(LEFT, TOP);
  textSize(16);
  textStyle(BOLD);
  text(title, textX, 16);
  textStyle(NORMAL);

  // Shift body down if title wraps to two lines
  let bodyY = title.includes('\n') ? 58 : 42;

  // Panel body with word wrap
  fill(40);
  textSize(14);
  textLeading(20);
  text(body, textX, bodyY, textW, drawHeight - bodyY - 15);

}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(containerWidth, containerHeight);
  positionControls();
  redraw();
}

function updateCanvasSize() {
  const container = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(container.width);
  canvasWidth = containerWidth;
}
