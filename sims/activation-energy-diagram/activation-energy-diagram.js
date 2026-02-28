// Activation Energy Diagram MicroSim (p5.js)
// Illustrates how enzymes lower Ea without affecting delta G

let canvasWidth = 660;
const drawHeight = 340;
const controlRows = 2;
const controlHeight = controlRows * 35 + 10; // (2×35)+10 = 80
const canvasHeight = drawHeight + controlHeight; // 420
const margin = 25;
const sliderLeftMargin = 220;
const defaultTextSize = 16;

let reactionSelect;
let efficiencySlider;

let infoText = '';
let hoverLabel = '';

const infoMap = {
  reactants: 'Reactants start with a certain free energy. They must absorb energy to reach the transition state before forming products.',
  products_exergonic: 'Products end at a lower free energy, so energy is released overall (exergonic).',
  products_endergonic: 'Products end at a higher free energy, so energy must be absorbed overall (endergonic).',
  transition: 'The transition state (‡) is the high-energy, unstable arrangement atoms must reach before the reaction can proceed.',
  ea_uncat: 'Ea (uncatalyzed) is the energy the reactants must absorb without an enzyme. Higher Ea means a slower reaction.',
  ea_cat: 'Ea with an enzyme is lower because enzymes stabilize the transition state, speeding up the reaction.',
  deltaG: 'ΔG represents the difference between reactant and product free energy. Enzymes do not change ΔG.'
};

const hoverRegions = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  reactionSelect = createSelect();
  reactionSelect.option('Exergonic');
  reactionSelect.option('Endergonic');
  reactionSelect.selected('Exergonic');
  reactionSelect.changed(() => infoText = '');

  efficiencySlider = createSlider(20, 80, 50, 1);
  efficiencySlider.input(() => infoText = '');

  positionControls();

  describe('Reaction coordinate diagram comparing uncatalyzed versus enzyme-catalyzed activation energy with interactive controls.');
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

  drawAxesAndTitle();
  const isExergonic = reactionSelect.value() === 'Exergonic';
  const diagramWidth = canvasWidth * 0.65;
  const axisLeft = margin + 10;
  const axisRight = diagramWidth - margin;
  const axisBottom = drawHeight - 50;
  const axisTop = 60;

  drawReactionRegions(axisLeft, axisRight, axisBottom, axisTop);
  const energyData = computeEnergyLevels(isExergonic);
  const curves = buildCurves(axisLeft, axisRight, axisTop, axisBottom, energyData);
  drawCurves(curves);
  drawDeltaGArrow(curves, axisLeft, axisBottom, axisTop);
  drawEaArrows(curves);
  drawTransitionLabels(curves);

  determineHoverRegion(curves);
  drawInfoPanel();
  drawControlsText();
}

function drawAxesAndTitle() {
  noStroke();
  fill('black');
  textAlign(CENTER, TOP);
  textSize(24);
  text('Activation Energy and Reaction Coordinate', canvasWidth / 2, 12);
  textAlign(LEFT, CENTER);

  stroke('gray');
  const diagramWidth = canvasWidth * 0.65;
  const axisLeft = margin + 10;
  const axisRight = diagramWidth - margin;
  const axisBottom = drawHeight - 50;
  const axisTop = 60;

  line(axisLeft, axisBottom, axisRight, axisBottom);
  line(axisLeft, axisBottom, axisLeft, axisTop);

  noStroke();
  textSize(defaultTextSize);
  push();
  translate(axisLeft - 40, (axisTop + axisBottom) / 2);
  rotate(-Math.PI / 2);
  text('Free Energy (kJ/mol)', 0, 0);
  pop();
  textAlign(CENTER, TOP);
  text('Reaction Progress', (axisLeft + axisRight) / 2, axisBottom + 12);
  textAlign(LEFT, CENTER);
}

function drawReactionRegions(axisLeft, axisRight, axisBottom, axisTop) {
  noStroke();
  fill(255, 200, 200, 70);
  rect(axisLeft - 10, axisBottom - 10, 70, -(axisBottom - axisTop) - 20);
  fill(200, 255, 200, 70);
  rect(axisRight - 70, axisBottom - 10, 70, -(axisBottom - axisTop) - 20);
}

function computeEnergyLevels(isExergonic) {
  const reactantEnergy = isExergonic ? 0.65 : 0.35;
  const productEnergy = isExergonic ? 0.35 : 0.8;
  const peakEnergy = reactantEnergy + 0.25;
  const effPercent = efficiencySlider.value() / 100;
  const catalyzedPeakEnergy = reactantEnergy + (peakEnergy - reactantEnergy) * effPercent;

  return {
    reactantEnergy,
    productEnergy,
    peakEnergy,
    catalyzedPeakEnergy
  };
}

function buildCurves(axisLeft, axisRight, axisTop, axisBottom, energyData) {
  const points = [];
  const catPoints = [];
  const steps = 60;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const x = lerp(axisLeft, axisRight, t);
    const base = lerp(energyData.reactantEnergy, energyData.productEnergy, t);
    const shape = Math.sin(Math.PI * t);
    const energy = base + (energyData.peakEnergy - energyData.reactantEnergy) * shape;
    const enzymeEnergy = base + (energyData.catalyzedPeakEnergy - energyData.reactantEnergy) * shape;
    points.push({ x, y: energyToY(energy, axisTop, axisBottom), energy });
    catPoints.push({ x, y: energyToY(enzymeEnergy, axisTop, axisBottom), energy: enzymeEnergy });
  }

  const peakIndex = Math.round(steps / 2);
  return {
    uncatalyzed: points,
    catalyzed: catPoints,
    reactantPoint: points[0],
    productPoint: points[points.length - 1],
    uncatalyzedPeak: points[peakIndex],
    catalyzedPeak: catPoints[peakIndex],
    axisTop,
    axisBottom
  };
}

function drawCurves(curves) {
  strokeWeight(3);
  noFill();
  stroke('#c0392b');
  beginShape();
  curves.uncatalyzed.forEach(pt => vertex(pt.x, pt.y));
  endShape();

  stroke('#2980b9');
  beginShape();
  curves.catalyzed.forEach(pt => vertex(pt.x, pt.y));
  endShape();

  hoverRegions.length = 0;
  hoverRegions.push({
    id: 'reactants',
    x: curves.reactantPoint.x - 30,
    y: curves.reactantPoint.y - 30,
    w: 60,
    h: 60
  });
  hoverRegions.push({
    id: 'products',
    x: curves.productPoint.x - 30,
    y: curves.productPoint.y - 30,
    w: 60,
    h: 60
  });
}

function drawDeltaGArrow(curves, axisLeft, axisBottom, axisTop) {
  const x = axisLeft + 40;
  const yStart = curves.reactantPoint.y;
  const yEnd = curves.productPoint.y;
  stroke('#16a085');
  strokeWeight(2);
  drawDoubleArrow(x, yStart, yEnd);
  noStroke();
  fill('black');
  textAlign(LEFT, CENTER);
  const textY = (yStart + yEnd) / 2;
  text('ΔG', x + 8, textY);

  hoverRegions.push({
    id: 'deltaG',
    x: x - 10,
    y: Math.min(yStart, yEnd) - 10,
    w: 40,
    h: Math.abs(yStart - yEnd) + 20
  });
}

function drawEaArrows(curves) {
  const x1 = curves.uncatalyzedPeak.x - 40;
  stroke('#c0392b');
  drawArrow(x1, curves.reactantPoint.y, x1, curves.uncatalyzedPeak.y);
  noStroke();
  fill('black');
  text('Ea (uncatalyzed)', x1 - 10, (curves.reactantPoint.y + curves.uncatalyzedPeak.y) / 2);

  hoverRegions.push({
    id: 'ea_uncat',
    x: x1 - 20,
    y: Math.min(curves.reactantPoint.y, curves.uncatalyzedPeak.y) - 10,
    w: 80,
    h: Math.abs(curves.reactantPoint.y - curves.uncatalyzedPeak.y) + 20
  });

  const x2 = curves.catalyzedPeak.x + 40;
  stroke('#2980b9');
  drawArrow(x2, curves.reactantPoint.y, x2, curves.catalyzedPeak.y);
  noStroke();
  fill('black');
  text('Ea (enzyme)', x2 - 5, (curves.reactantPoint.y + curves.catalyzedPeak.y) / 2);

  hoverRegions.push({
    id: 'ea_cat',
    x: x2 - 20,
    y: Math.min(curves.reactantPoint.y, curves.catalyzedPeak.y) - 10,
    w: 80,
    h: Math.abs(curves.reactantPoint.y - curves.catalyzedPeak.y) + 20
  });
}

function drawTransitionLabels(curves) {
  noStroke();
  fill('black');
  textAlign(CENTER, BOTTOM);
  text('⧧ Transition state', curves.uncatalyzedPeak.x, curves.uncatalyzedPeak.y - 10);
  text('⧧ Transition state', curves.catalyzedPeak.x, curves.catalyzedPeak.y - 10);
  textAlign(LEFT, CENTER);

  hoverRegions.push({
    id: 'transition',
    x: curves.uncatalyzedPeak.x - 50,
    y: Math.min(curves.uncatalyzedPeak.y, curves.catalyzedPeak.y) - 40,
    w: 100,
    h: 80
  });
}

function determineHoverRegion(curves) {
  hoverLabel = '';
  if (mouseY <= drawHeight && mouseX <= canvasWidth) {
    for (const region of hoverRegions) {
      if (
        mouseX >= region.x &&
        mouseX <= region.x + region.w &&
        mouseY >= region.y &&
        mouseY <= region.y + region.h
      ) {
        hoverLabel = region.id;
        break;
      }
    }
  }
}

function drawInfoPanel() {
  const panelX = canvasWidth * 0.65 + 15;
  const panelY = 60;
  const panelW = canvasWidth - panelX - margin;
  const panelH = 220;

  fill(255, 255, 255, 245);
  stroke(200);
  rect(panelX, panelY, panelW, panelH, 12);
  noStroke();
  fill('black');
  textSize(defaultTextSize);
  textAlign(LEFT, TOP);

  let message = 'Hover over different parts of the diagram to learn how enzymes affect activation energy.';
  if (hoverLabel === 'reactants') message = infoMap.reactants;
  else if (hoverLabel === 'products') {
    const isExergonic = reactionSelect.value() === 'Exergonic';
    message = isExergonic ? infoMap.products_exergonic : infoMap.products_endergonic;
  } else if (hoverLabel === 'transition') message = infoMap.transition;
  else if (hoverLabel === 'ea_uncat') message = infoMap.ea_uncat;
  else if (hoverLabel === 'ea_cat') message = infoMap.ea_cat;
  else if (hoverLabel === 'deltaG') message = infoMap.deltaG;

  text(message, panelX + 15, panelY + 15, panelW - 30, panelH - 30);
  textAlign(LEFT, CENTER);
}

function drawControlsText() {
  noStroke();
  fill('black');
  textSize(defaultTextSize);
  text('Reaction Type:', margin, drawHeight + 20);
  text('Enzyme Efficiency (% of original Ea): ' + efficiencySlider.value(), margin, drawHeight + 55);
}

function drawArrow(x1, y1, x2, y2) {
  line(x1, y1, x2, y2);
  const angle = Math.atan2(y2 - y1, x2 - x1);
  push();
  translate(x2, y2);
  rotate(angle + Math.PI / 2);
  triangle(-5, -5, 5, -5, 0, 5);
  pop();
}

function drawDoubleArrow(x, y1, y2) {
  line(x, y1, x, y2);
  push();
  translate(x, y1);
  rotate(Math.PI);
  triangle(-5, -5, 5, -5, 0, 5);
  pop();
  push();
  translate(x, y2);
  triangle(-5, -5, 5, -5, 0, 5);
  pop();
}

function energyToY(value, axisTop, axisBottom) {
  return axisBottom - value * (axisBottom - axisTop);
}

function positionControls() {
  const row1Y = drawHeight + 5;
  const row2Y = drawHeight + 40;
  reactionSelect.position(margin, row1Y);
  efficiencySlider.position(sliderLeftMargin, row2Y);
  efficiencySlider.size(canvasWidth - sliderLeftMargin - margin);
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
      if (typeof efficiencySlider !== 'undefined') {
        resizeCanvas(canvasWidth, canvasHeight);
        efficiencySlider.size(canvasWidth - sliderLeftMargin - margin);
      }
    }
  }
}
