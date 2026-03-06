// Surface Area to Volume Ratio Explorer MicroSim (p5.js)
// Responsive visualization of cube surface area, volume, and SA:V ratio

let canvasWidth = 660;
const drawHeight = 460;
const controlHeight = 90;
let canvasHeight = drawHeight + controlHeight;
const margin = 18;
const drawRightPadding = 0;
const sliderLeftMargin = 320;

let canvasReady = false;
let sizeSlider;
let startPauseButton;
let comparisonCheckbox;
let formulaCheckbox;

let showComparisonCell = false;
let showFormulas = false;
let isRotating = false;
let rotationAngle = 0;

const SuperscriptApi = window.SuperscriptText || {};
const drawSuperscriptText =
  SuperscriptApi.drawSuperscriptText ||
  function (textValue, x, y, size, align = 'left') {
    push();
    textSize(size || 16);
    textAlign(align === 'center' ? CENTER : align === 'right' ? RIGHT : LEFT, CENTER);
    noStroke();
    text(textValue.replace(/\^/g, ''), x, y);
    pop();
  };

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  sizeSlider = createSlider(1, 10, 1, 0.5);
  sizeSlider.elt.setAttribute('aria-label', 'Cell side length in micrometers');

  startPauseButton = createButton('Start Scaling Cube');
  startPauseButton.mousePressed(toggleRotation);

  comparisonCheckbox = createCheckbox('Show comparison cell', false);
  comparisonCheckbox.changed(() => {
    showComparisonCell = comparisonCheckbox.checked();
  });

  formulaCheckbox = createCheckbox('Show calculation formulas', false);
  formulaCheckbox.changed(() => {
    showFormulas = formulaCheckbox.checked();
  });

  positionControls();
  canvasReady = true;

  describe(
    'Cube model showing current cell and optional 1 µm reference beside numerical panels and bar chart with live surface area, volume, and SA:V ratio.'
  );
}

function draw() {
  if (!canvasReady) return;
  updateCanvasSize();
  background('white');

  fill('aliceblue');
  // draw a light border around the drawing area and the control area
  stroke('silver ');
  rect(0, 0, canvasWidth, drawHeight);

  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);

  const sideLength = sizeSlider.value();
  const metrics = computeMetrics(sideLength);
  const referenceMetrics = computeMetrics(1);

  if (isRotating) {
    rotationAngle = (rotationAngle + (0.012 * deltaTime) / 16) % TWO_PI;
  }

  drawTitle();

  const panelSpacing = margin;
  const drawLeft = margin;
  const drawRight = canvasWidth - drawRightPadding;
  const drawWidth = drawRight - drawLeft;
  const sharedWidth = (drawWidth - panelSpacing) / 2;
  const leftPanel = {
    x: drawLeft,
    y: 70,
    w: sharedWidth,
    h: 230
  };
  const rightPanel = {
    x: leftPanel.x + sharedWidth + panelSpacing,
    y: 70,
    w: drawRight - (leftPanel.x + sharedWidth + panelSpacing),
    h: 230
  };

  const depthFactor = constrain(0.25 + 0.15 * sin(rotationAngle), 0.2, 0.45);
  drawCubePanel(leftPanel, sideLength, depthFactor);
  drawMetricsPanel(rightPanel, metrics, referenceMetrics);

  let chartTop = rightPanel.y + rightPanel.h + 6;
  const formulasHeight = showFormulas ? 28 : 0;
  if (showFormulas) {
    drawFormulasPanel(rightPanel.x, chartTop, rightPanel.w, formulasHeight);
    chartTop += formulasHeight + 6;
  }

  const desiredChartHeight = showFormulas ? 110 : 140;
  const warningHeight = 48;
  let chartHeight = desiredChartHeight;
  const availableHeight = drawHeight - warningHeight - 18 - chartTop;
  chartHeight = Math.min(chartHeight, availableHeight);
  chartHeight = Math.max(70, chartHeight);
  chartHeight = Math.min(chartHeight, availableHeight);
  if (availableHeight > 40) {
    chartHeight = Math.max(40, chartHeight);
  } else {
    chartHeight = Math.max(10, availableHeight);
  }
  const warningY = chartTop + chartHeight + 12;

  drawBarChart(
    drawLeft,
    chartTop,
    drawWidth,
    chartHeight,
    metrics,
    referenceMetrics,
    true
  );

  drawWarningAndStatus(
    drawLeft,
    drawWidth,
    warningY,
    warningHeight,
    metrics,
    sideLength,
    showComparisonCell ? referenceMetrics : null
  );

  drawControlLabels(sideLength);
}

function drawTitle() {
  push();
  noStroke();
  fill('black');
  textSize(24);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text('Surface Area to Volume Ratio Explorer', canvasWidth / 2, 34);
  textStyle(NORMAL);
  textSize(14);
  fill('black');
  text(
    'Move the slider to change cube size and compare surface area, volume, and SA:V efficiency.',
    canvasWidth / 2,
    64
  );
  pop();
}

function drawCubePanel(panel, sideLength, depthFactor) {
  push();
  translate(panel.x, panel.y);
  fill('white');
  stroke('#c2d4ff');
  rect(0, 0, panel.w, panel.h, 12);
  noStroke();
  fill('#1b3d6d');
  textSize(16);
  textAlign(LEFT, CENTER);
  noStroke();
  text('Cell geometry', 12, 20);

  const centerX = panel.w * 0.48;
  const centerY = panel.h * 0.58;
  const cubeSize = map(sideLength, 1, 10, 90, Math.min(panel.w, panel.h) - 50);
  const depth = cubeSize * depthFactor;
  drawCube(centerX, centerY, cubeSize, depth, '#bbd7ff');
  drawVolumeShading(centerX, centerY, cubeSize);

  fill('#17345c');
  textSize(16);
  textAlign(CENTER, CENTER);
  noStroke();
  text(`Side length: ${sideLength.toFixed(1)} µm`, centerX, panel.h - 16);

  if (showComparisonCell) {
    drawReferenceCube(panel.w * 0.12, panel.h - 60);
  }
  pop();
}

function drawCube(cx, cy, size, depth, frontColor) {
  const left = cx - size / 2;
  const top = cy - size / 2;
  noStroke();

  fill(255, 216, 216, 210);
  quad(
    left + size,
    top,
    left + size + depth,
    top - depth,
    left + size + depth,
    top - depth + size,
    left + size,
    top + size
  );

  fill(255, 238, 238, 210);
  quad(
    left,
    top,
    left + depth,
    top - depth,
    left + size + depth,
    top - depth,
    left + size,
    top
  );

  fill(frontColor);
  rect(left, top, size, size);

  stroke('#1b4c86');
  strokeWeight(2);
  noFill();
  rect(left, top, size, size);
  line(left, top, left + depth, top - depth);
  line(left + size, top, left + size + depth, top - depth);
  line(left, top + size, left + depth, top + size - depth);
  line(left + size, top + size, left + size + depth, top + size - depth);
  line(left + depth, top - depth, left + size + depth, top - depth);
  line(left + depth, top - depth, left + depth, top - depth + size);
  line(left + size + depth, top - depth, left + size + depth, top - depth + size);
  line(left + depth, top - depth + size, left + size + depth, top - depth + size);
}

function drawVolumeShading(cx, cy, size) {
  const left = cx - size / 2;
  const top = cy - size / 2;
  fill(220, 65, 65, 90);
  noStroke();
  rect(left + 8, top + 8, size - 16, size - 16);
}

function drawReferenceCube(localX, baselineY) {
  const size = 40;
  const depth = size * 0.4;
  push();
  drawCube(localX, baselineY, size, depth, '#e2ecff');
  fill('#333');
  textSize(12);
  textAlign(CENTER, TOP);
  noStroke();
  text('1 µm reference', localX, baselineY + size * 0.65);
  pop();
}

function drawMetricsPanel(panel, metrics, referenceMetrics) {
  push();
  translate(panel.x, panel.y);
  fill('white');
  stroke('#c2d4ff');
  rect(0, 0, panel.w, panel.h, 12);
  noStroke();
  fill('#17345c');
  textSize(16);
  textAlign(LEFT, CENTER);
  noStroke();
  text('Calculated values', 12, 20);

  const cards = [
    {
      label: 'Surface Area',
      value: `${formatNumber(metrics.surfaceArea)} µm`,
      suffix: '^2',
      color: '#1E88E5'
    },
    {
      label: 'Volume',
      value: `${formatNumber(metrics.volume)} µm`,
      suffix: '^3',
      color: '#E53935'
    }
  ];

  const cardWidth = (panel.w - 32) / 2;
  const cardHeight = 56;
  const cardY = 38;

  cards.forEach((card, idx) => {
    const x = 12 + idx * (cardWidth + 8);
    fill('#f8fbff');
    stroke(card.color);
    rect(x, cardY, cardWidth, cardHeight, 10);
    noStroke();
    fill('#0c1b33');
    textSize(13);
    textAlign(LEFT, CENTER);
    noStroke();
    text(card.label, x + 10, cardY + 16);
    textSize(18);
    drawSuperscriptText(`${card.value}${card.suffix}`, x + cardWidth - 10, cardY + 38, 18, 'right');
  });

  const ratioHeight = 44;
  const ratioY = panel.h - ratioHeight - 12;
  drawRatioStatus(0, ratioY, panel.w, ratioHeight, metrics.ratio);
  pop();
}

function drawRatioStatus(x, y, w, h, ratio) {
  const status = getRatioStatus(ratio);
  push();
  translate(x, y);
  fill(status.fill);
  stroke(color(status.border));
  rect(0, 0, w, h, 8);
  noStroke();
  fill('#0c1b33');
  textAlign(CENTER, CENTER);
  textSize(18);
  noStroke();
  text(`SA:V = ${formatNumber(ratio, 2)}  •  ${status.label}`, w / 2, h / 2);
  pop();
}

function drawBarChart(x, y, w, h, metrics, referenceMetrics, drawContainer = true) {
  push();
  translate(x, y);
  if (drawContainer) {
    fill('white');
    stroke('#c2d4ff');
    rect(0, 0, w, h, 10);
  }
  const padding = drawContainer ? 16 : 10;
  const chartWidth = w - padding * 2;
  const chartHeight = h - padding * 2;
  const labelColumn = 160;
  const barWidth = chartWidth - labelColumn - 30;
  const categories = [
    {
      label: 'Surface Area (µm^2)',
      value: metrics.surfaceArea,
      reference: referenceMetrics.surfaceArea,
      color: '#1E88E5'
    },
    {
      label: 'Volume (µm^3)',
      value: metrics.volume,
      reference: referenceMetrics.volume,
      color: '#E53935'
    }
  ];
  const maxValue = Math.max(
    ...categories.map((c) =>
      showComparisonCell ? Math.max(c.value, c.reference) : c.value
    )
  );
  const gap = 14;
  const availableHeight = chartHeight - gap * (categories.length - 1);
  const rowHeight = availableHeight / categories.length;

  stroke('#94a3b8');
  line(padding + labelColumn, padding, padding + labelColumn, padding + chartHeight);

  categories.forEach((cat, idx) => {
    const rowY = padding + idx * (rowHeight + gap);
    const labelY = rowY + rowHeight / 2;
    noStroke();
    fill('#0c1b33');
    textAlign(RIGHT, CENTER);
    textSize(13);
    text(cat.label, padding + labelColumn - 10, labelY);

    const barX = padding + labelColumn + 10;
    const comparisonHeight = showComparisonCell ? (rowHeight - 6) / 2 : rowHeight - 4;
    const valueOffset = showComparisonCell ? comparisonHeight + 4 : 2;

    const drawBar = (value, offsetY, opacity = 1) => {
      const widthRatio = maxValue === 0 ? 0 : value / maxValue;
      const width = widthRatio * barWidth;
      const c = color(cat.color);
      c.setAlpha(255 * opacity);
      fill(c);
      noStroke();
      rect(barX, rowY + offsetY, width, comparisonHeight, 6);
      fill('#0c1b33');
      textAlign(LEFT, CENTER);
      textSize(12);
      noStroke();
      text(formatNumber(value), barX + width + 6, rowY + offsetY + comparisonHeight / 2);
    };

    if (showComparisonCell) {
      drawBar(cat.reference, 2, 0.35);
      drawBar(cat.value, valueOffset, 1);
    } else {
      drawBar(cat.value, 2, 1);
    }
  });
  pop();
}

function drawWarningAndStatus(x, width, y, h, metrics, sideLength, referenceMetrics) {
  const gap = Math.max(16, margin);
  const boxWidth = (width - gap) / 2;
  const warningX = x;
  const statusX = x + boxWidth + gap;

  fill('#ffe6e6');
  stroke('#ff9b9b');
  rect(warningX, y, boxWidth, h, 10);
  noStroke();
  fill(sideLength > 5 ? '#8c1c13' : '#4a5b75');
  textAlign(LEFT, CENTER);
  textSize(14);
  const warningText =
    sideLength > 5
      ? 'Diffusion too slow — cell must compartmentalize or shrink.'
      : 'Diffusion-friendly size — high SA:V maintained.';
  noStroke();
  text(warningText, warningX + 10, y + h / 2);

  fill('#eaf3ff');
  stroke('#94b8ff');
  rect(statusX, y, boxWidth, h, 10);
  noStroke();
  fill('#0c1b33');
  textAlign(LEFT, CENTER);
  textSize(14);
  let statusMessage = `Assessment: ${getRatioStatus(metrics.ratio).label}.`;
  if (showComparisonCell && referenceMetrics) {
    const delta = metrics.ratio - referenceMetrics.ratio;
    statusMessage += ` ΔSA:V = ${delta >= 0 ? '+' : ''}${formatNumber(delta, 2)} relative to 1 µm.`;
  }
  noStroke();
  text(statusMessage, statusX + 10, y + h / 2);
}

function drawFormulasPanel(x, y, w, height = 28) {
  fill('#f4f0ff');
  stroke('#c8a9ff');
  rect(x, y, w, height, 8);
  noStroke();
  fill('#331c62');
  textSize(14);
  textAlign(LEFT, CENTER);
  const formulas = ['SA = 6s^2', 'V = s^3', 'SA:V = 6 / s'];
  const spacing = w / formulas.length;
  formulas.forEach((formula, idx) => {
    drawSuperscriptText(formula, x + spacing * idx + 12, y + height / 2, 16);
  });
}

function drawControlLabels(sideLength) {
  const controlTop = drawHeight + 20;
  noStroke();
  fill('#0c1b33');
  textSize(15);
  textAlign(LEFT, CENTER);
  noStroke();
  text('Start / Pause rotation', margin, controlTop - 6);

  const sliderLabelY = controlTop;
  textAlign(RIGHT, CENTER);
  noStroke();
  text('Side length (µm):', sliderLeftMargin - 12, sliderLabelY);
  noStroke();
  text(`${sideLength.toFixed(1)} µm`, sliderLeftMargin - 12, sliderLabelY + 20);
}

function computeMetrics(side) {
  const surfaceArea = 6 * side * side;
  const volume = side * side * side;
  const ratio = surfaceArea / volume;
  return { surfaceArea, volume, ratio };
}

function getRatioStatus(ratio) {
  if (ratio >= 2) {
    return { label: 'Efficient exchange', fill: '#d5f5e3', border: '#27ae60' };
  }
  if (ratio >= 1) {
    return { label: 'Marginal diffusion', fill: '#fff8d5', border: '#f1c40f' };
  }
  return { label: 'Too large for diffusion', fill: '#ffe3e3', border: '#c0392b' };
}

function toggleRotation() {
  isRotating = !isRotating;
  startPauseButton.html(isRotating ? 'Stop Scaling Cube' : 'Start Scaling Cube');
}

function windowResized() {
  updateCanvasSize();
}

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (!container) return;
  const parent = container.parentElement || container;
  const targetWidth = parent.getBoundingClientRect
    ? Math.floor(parent.getBoundingClientRect().width)
    : container.offsetWidth || canvasWidth;
  const newWidth = Math.max(480, targetWidth);
  if (newWidth !== canvasWidth) {
    canvasWidth = newWidth;
    resizeCanvas(canvasWidth, canvasHeight);
    positionControls();
  }
}

function positionControls() {
  if (!sizeSlider || !startPauseButton || !comparisonCheckbox || !formulaCheckbox) {
    return;
  }
  const controlTop = drawHeight + 24;
  startPauseButton.size(160, 34);
  startPauseButton.position(margin, controlTop - 20);

  const sliderWidth = Math.max(160, canvasWidth - sliderLeftMargin - margin);
  sizeSlider.position(sliderLeftMargin, controlTop - 15);
  sizeSlider.size(sliderWidth);

  comparisonCheckbox.position(margin, controlTop + 30);

  formulaCheckbox.position(sliderLeftMargin, controlTop + 30);
}

function formatNumber(value, decimals = 1) {
  return Number(value).toFixed(decimals);
}
