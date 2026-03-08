// Interactive Punnett Square Calculator MicroSim
// Bloom: Apply (L3) — students solve mono/di-hybrid crosses and interpret ratios

let canvasWidth = 860;
const titleHeight = 56;
const modeBarHeight = 64;
const drawRegionHeight = 430;
const controlHeight = 130;
const legendHeight = 56;
let canvasHeight = titleHeight + modeBarHeight + drawRegionHeight + controlHeight + legendHeight;

let canvas;
let layout = {};
let controlSlots = {};

// Interaction state
let currentMode = 'monohybrid';
let viewMode = 'genotype';
let isAnimating = false;
let lastAdvance = 0;
let activeCells = 0;
let cells = [];
let rowHeaders = [];
let colHeaders = [];
let highlightCell = -1;
let summary = { genotype: {}, phenotype: {}, filled: 0 };
let statusMessage = 'Choose parent genotypes to build the Punnett square.';

const geneLetters = ['A', 'B'];

// DOM controls
let p1Gene1Select, p1Gene2Select, p2Gene1Select, p2Gene2Select;
let geneInputs = [];
let randomizeButton;
let startButton, stepButton, showAllButton, viewToggleButton, resetButton;
let speedSlider, speedLabel;

// Colors
const COLOR_PANEL = '#fefefe';
const COLOR_BORDER = '#c5d1e1';
const COLOR_GRID_BG = '#f8fbff';
const COLOR_DOMINANT = '#b7eed0';
const COLOR_RECESSIVE = '#f6e2c3';
const COLOR_MIXED = '#fcecd1';
const COLOR_HEADER = '#475467';
const COLOR_CARD = '#ffffff';

function setup() {
  updateCanvasSize();
  canvas = createCanvas(canvasWidth, canvasHeight);
  const mainElement = document.querySelector('main');
  if (mainElement) {
    mainElement.style.position = 'relative';
  }
  canvas.parent(mainElement);

  createInterface(mainElement);
  updateGenotypeOptions();
  prepareGridData();
  describe('Interactive Punnett square calculator showing mono- and dihybrid crosses with animation controls');
}

function draw() {
  updateCanvasSize();
  resizeCanvasIfNeeded();
  updateLayoutMetrics();
  background('#f4f8ff');

  drawTitleBand();
  drawModeBar();
  drawDrawingRegion();
  drawControlDeck();
  drawLegendRow();
  maybeAdvanceAnimation();
  positionControls();
}

function updateCanvasSize() {
  const mainElement = document.querySelector('main');
  const available = mainElement ? mainElement.clientWidth : windowWidth;
  const target = constrain(available - 20, 520, 1100);
  canvasWidth = target;
  canvasHeight = titleHeight + modeBarHeight + drawRegionHeight + controlHeight + legendHeight;
}

function resizeCanvasIfNeeded() {
  if (!canvas) return;
  if (canvas.width !== canvasWidth || canvas.height !== canvasHeight) {
    resizeCanvas(canvasWidth, canvasHeight);
  }
}

function updateLayoutMetrics() {
  layout.title = { x: 0, y: 0, w: canvasWidth, h: titleHeight };
  layout.modeBar = { x: 0, y: titleHeight, w: canvasWidth, h: modeBarHeight };
  layout.drawing = { x: 0, y: titleHeight + modeBarHeight, w: canvasWidth, h: drawRegionHeight };
  layout.controlDeck = {
    x: 0,
    y: layout.drawing.y + drawRegionHeight,
    w: canvasWidth,
    h: controlHeight
  };
  layout.legend = {
    x: 0,
    y: layout.controlDeck.y + controlHeight,
    w: canvasWidth,
    h: legendHeight
  };

  const pad = 18;
  const leftW = canvasWidth * 0.28;
  const gridW = canvasWidth * 0.44;
  layout.leftPanel = {
    x: pad,
    y: layout.drawing.y + pad,
    w: leftW - pad,
    h: drawRegionHeight - pad * 2
  };
  layout.gridPanel = {
    x: layout.leftPanel.x + layout.leftPanel.w + pad,
    y: layout.leftPanel.y,
    w: gridW - pad,
    h: layout.leftPanel.h
  };
  layout.summaryPanel = {
    x: layout.gridPanel.x + layout.gridPanel.w + pad,
    y: layout.leftPanel.y,
    w: canvasWidth - (layout.gridPanel.x + layout.gridPanel.w) - pad,
    h: layout.leftPanel.h
  };

  const gridPadding = 24;
  const gridSize = min(
    layout.gridPanel.w - gridPadding * 2,
    layout.gridPanel.h - gridPadding * 2 - 20
  );
  layout.grid = {
    x: layout.gridPanel.x + (layout.gridPanel.w - gridSize) / 2,
    y: layout.gridPanel.y + (layout.gridPanel.h - gridSize) / 2 + 20,
    size: gridSize
  };
  layout.grid.cellW = gridSize / max(1, colHeaders.length || 2);
  layout.grid.cellH = gridSize / max(1, rowHeaders.length || 2);

  computeControlSlots();
}

function computeControlSlots() {
  controlSlots = {};
  let slotY = layout.leftPanel.y + 40;
  const slotH = 32;
  const slotSpacing = 12;
  const slotX = layout.leftPanel.x + 10;
  const slotW = layout.leftPanel.w - 20;

  const geneW = slotW * 0.38;
  const geneH = slotH * 0.64;
  controlSlots.gene1Input = { x: slotX + slotW * 0.02, y: slotY + 35, w: geneW * 0.8, h: geneH };
  controlSlots.gene2Input = {
    x: slotX + slotW - geneW * 0.8 - slotW * 0.02 - 20,
    y: slotY + 35,
    w: geneW * 0.8,
    h: geneH
  };
  slotY += slotH + slotSpacing + 56;

  controlSlots.p1Gene1 = { x: slotX, y: slotY, w: slotW, h: slotH };
  slotY += slotH + slotSpacing;

  controlSlots.p1Gene2 = { x: slotX, y: slotY, w: slotW, h: slotH };
  slotY += slotH + slotSpacing + 6;

  controlSlots.p2Gene1 = { x: slotX, y: slotY, w: slotW, h: slotH };
  slotY += slotH + slotSpacing;

  controlSlots.p2Gene2 = { x: slotX, y: slotY, w: slotW, h: slotH };
  slotY += slotH + slotSpacing + 10;

  controlSlots.randomize = {
    x: slotX,
    y: min(slotY + 10, layout.leftPanel.y + layout.leftPanel.h - slotH - 10),
    w: slotW,
    h: slotH
  };

  // Control deck rows
  const cdX = layout.controlDeck.x + 20;
  const cdY = layout.controlDeck.y + 18;
  const cdW = layout.controlDeck.w - 40;
  const buttonWidth = cdW / 4 - 12;

  controlSlots.startButton = { x: cdX, y: cdY + 10, w: buttonWidth, h: 36 };
  controlSlots.stepButton = { x: cdX + buttonWidth + 12, y: cdY + 10, w: buttonWidth, h: 36 };
  controlSlots.showAll = { x: cdX + (buttonWidth + 12) * 2, y: cdY + 10, w: buttonWidth, h: 36 };
  controlSlots.viewToggle = { x: cdX + (buttonWidth + 12) * 3, y: cdY + 10, w: buttonWidth, h: 36 };

  const secondRowY = cdY + 60;
  controlSlots.speedLabel = { x: cdX, y: secondRowY, w: buttonWidth * 0.6, h: 30 };
  controlSlots.speedSlider = { x: cdX + buttonWidth * 0.6 + 8, y: secondRowY, w: buttonWidth * 1.4, h: 30 };
  controlSlots.resetButton = { x: cdX + (buttonWidth + 12) * 2, y: secondRowY, w: buttonWidth, h: 36 };
}

function drawTitleBand() {
  push();
  fill('#e6f1ff');
  stroke('#b3cce6');
  rect(layout.title.x, layout.title.y, layout.title.w, layout.title.h);
  noStroke();
  fill('#052c65');
  textAlign(LEFT, CENTER);
  textSize(20);
  textStyle(BOLD);
  text('Punnett Square Calculator', layout.title.x + 18, layout.title.y + layout.title.h / 2);
  textStyle(NORMAL);
  textSize(12);
  fill('#0f4473');
  text(
    'Compare monohybrid and dihybrid crosses, then animate each Punnett cell.',
    layout.title.x + 320,
    layout.title.y + layout.title.h / 2
  );
  pop();
}

function drawModeBar() {
  push();
  fill('#f1f2ff');
  stroke('#c9cbe9');
  rect(layout.modeBar.x, layout.modeBar.y, layout.modeBar.w, layout.modeBar.h);

  const btnWidth = 150;
  const btnHeight = 40;
  const btnY = layout.modeBar.y + (layout.modeBar.h - btnHeight) / 2;
  const monoX = layout.modeBar.x + 30;
  const diX = monoX + btnWidth + 12;

  layout.modeButtons = [
    { label: 'Monohybrid', x: monoX, y: btnY, w: btnWidth, h: btnHeight, mode: 'monohybrid' },
    { label: 'Dihybrid', x: diX, y: btnY, w: btnWidth, h: btnHeight, mode: 'dihybrid' }
  ];

  layout.modeButtons.forEach(btn => {
    const active = currentMode === btn.mode;
    fill(active ? '#4c6ef5' : '#ffffff');
    stroke(active ? '#1d4fd8' : '#9aa5d8');
    strokeWeight(active ? 2 : 1);
    rect(btn.x, btn.y, btn.w, btn.h, 8);
    noStroke();
    fill(active ? '#fff' : '#1f2a37');
    textAlign(CENTER, CENTER);
    textSize(14);
    text(btn.label, btn.x + btn.w / 2, btn.y + btn.h / 2);
  });

  noStroke();
  fill('#344054');
  textAlign(LEFT, CENTER);
  textSize(12);
  text(
    `Mode Summary: ${currentMode === 'monohybrid' ? 'single trait (2×2 grid)' : 'two traits (4×4 grid)'}`,
    layout.modeBar.x + 340,
    layout.modeBar.y + layout.modeBar.h / 2
  );
  pop();
}

function drawDrawingRegion() {
  push();
  fill('aliceblue');
  stroke('#cbd5e1');
  rect(layout.drawing.x, layout.drawing.y, layout.drawing.w, layout.drawing.h);
  pop();

  drawLeftPanel();
  drawGridPanel();
  drawSummaryPanel();
}

function drawLeftPanel() {
  push();
  fill(COLOR_PANEL);
  stroke(COLOR_BORDER);
  rect(layout.leftPanel.x, layout.leftPanel.y, layout.leftPanel.w, layout.leftPanel.h, 8);
  noStroke();
  fill('#1f2933');
  textAlign(LEFT, TOP);
  textSize(14);
  textStyle(BOLD);
  text('Parent Genotypes', layout.leftPanel.x + 12, layout.leftPanel.y + 12);
  textStyle(NORMAL);
  textSize(11);
  text(
    'Set gene letters, then choose genotypes for each parent.',
    layout.leftPanel.x + 12,
    layout.leftPanel.y + 30,
    layout.leftPanel.w - 24,
    32
  );

  fill('#52606d');
  textSize(10);
  text('Gene Letters', controlSlots.gene1Input.x, controlSlots.gene1Input.y - 12);
  text('Parent 1 — Trait A', controlSlots.p1Gene1.x, controlSlots.p1Gene1.y - 24);
  if (currentMode === 'dihybrid') {
    text('Parent 1 — Trait B', controlSlots.p1Gene2.x, controlSlots.p1Gene2.y - 12);
  }
  text('Parent 2 — Trait A', controlSlots.p2Gene1.x, controlSlots.p2Gene1.y - 12);
  if (currentMode === 'dihybrid') {
    text('Parent 2 — Trait B', controlSlots.p2Gene2.x, controlSlots.p2Gene2.y - 12);
  }
  text(
    'Practice quickly by randomizing both parents.',
    controlSlots.randomize.x,
    controlSlots.randomize.y - 22,
    controlSlots.randomize.w,
    28
  );
  pop();
}

function drawGridPanel() {
  push();
  fill(COLOR_PANEL);
  stroke(COLOR_BORDER);
  rect(layout.gridPanel.x, layout.gridPanel.y, layout.gridPanel.w, layout.gridPanel.h, 8);

  fill('#1d2939');
  noStroke();
  textAlign(LEFT, TOP);
  textSize(14);
  textStyle(BOLD);
  text('Punnett Square', layout.gridPanel.x + 12, layout.gridPanel.y + 12);
  textStyle(NORMAL);
  textSize(11);
  fill('#475467');
  text(`${activeCells}/${cells.length} cells revealed`, layout.gridPanel.x + 12, layout.gridPanel.y + 30);

  if (!cells.length) {
    pop();
    return;
  }

  const grid = layout.grid;
  const rows = rowHeaders.length;
  const cols = colHeaders.length;

  // Column headers
  textAlign(CENTER, CENTER);
  textSize(12);
  fill(COLOR_HEADER);
  for (let c = 0; c < cols; c++) {
    const headerX = grid.x + grid.cellW * c + grid.cellW / 2;
    text(colHeaders[c], headerX, grid.y - 16);
  }

  // Row headers
  textAlign(RIGHT, CENTER);
  for (let r = 0; r < rows; r++) {
    const headerY = grid.y + grid.cellH * r + grid.cellH / 2;
    text(rowHeaders[r], grid.x - 12, headerY);
  }

  highlightCell = -1;
  const filledCells = cells.slice(0, activeCells);

  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    const cellX = grid.x + cell.col * grid.cellW;
    const cellY = grid.y + cell.row * grid.cellH;
    const cellActive = i < activeCells;
    cell.bounds = { x: cellX, y: cellY, w: grid.cellW, h: grid.cellH };

    const hovering =
      mouseX >= cellX &&
      mouseX <= cellX + grid.cellW &&
      mouseY >= cellY &&
      mouseY <= cellY + grid.cellH;
    if (hovering && cellActive) {
      highlightCell = i;
    }

    const cellColor = getCellColor(cell);
    fill(cellActive ? cellColor : COLOR_GRID_BG);
    stroke('#94a3b8');
    rect(cellX, cellY, grid.cellW, grid.cellH);

    if (cellActive) {
      fill('#1f2a37');
      textAlign(CENTER, CENTER);
      const label = viewMode === 'genotype' ? cell.genotype : cell.phenotype;
      let targetSize;
      if (rowHeaders.length >= 4 || colHeaders.length >= 4) {
        targetSize = viewMode === 'genotype' ? 20 : 14;
      } else {
        targetSize = viewMode === 'genotype' ? 36 : 20;
      }
      textSize(targetSize);
      while (textWidth(label) > grid.cellW - 12 && targetSize > 10) {
        targetSize -= 2;
        textSize(targetSize);
      }
      text(label, cellX + grid.cellW / 2, cellY + grid.cellH / 2);
    } else {
      fill('#94a3b8');
      textAlign(CENTER, CENTER);
      textSize(36);
      text('?', cellX + grid.cellW / 2, cellY + grid.cellH / 2);
    }
  }

  if (highlightCell >= 0) {
    const cell = cells[highlightCell];
    const info = viewMode === 'genotype' ? cell.genotype : cell.phenotype;
    fill(255, 255, 255, 235);
    noStroke();
    rect(grid.x, layout.gridPanel.y + layout.gridPanel.h - 34, layout.gridPanel.w, 28, 6);
    fill('#344054');
    textAlign(CENTER, CENTER);
    textSize(12);
    text(`Highlighted cell: ${info}`, grid.x + layout.gridPanel.w / 2 - 20, layout.gridPanel.y + layout.gridPanel.h - 20);
  }

  pop();
}

function drawSummaryPanel() {
  push();
  fill(COLOR_PANEL);
  stroke(COLOR_BORDER);
  rect(layout.summaryPanel.x, layout.summaryPanel.y, layout.summaryPanel.w, layout.summaryPanel.h, 8);
  noStroke();
  fill('#1d2939');
  textAlign(LEFT, TOP);
  textSize(14);
  textStyle(BOLD);
  text('Summary & Ratios', layout.summaryPanel.x + 12, layout.summaryPanel.y + 12);
  textStyle(NORMAL);
  textSize(11);
  fill('#475467');
  text(statusMessage, layout.summaryPanel.x + 12, layout.summaryPanel.y + 30, layout.summaryPanel.w - 24, 36);

  const cardX = layout.summaryPanel.x + 12;
  let cardY = layout.summaryPanel.y + 74;
  const cardW = layout.summaryPanel.w - 24;
  const cardH = 74;

  drawSummaryCard(cardX, cardY, cardW, cardH, 'Genotype Counts', summary.genotype);
  cardY += cardH + 10;
  drawSummaryCard(cardX, cardY, cardW, cardH, 'Phenotype Counts', summary.phenotype);
  cardY += cardH + 10;

  fill('#eef2ff');
  stroke('#c7d2fe');
  rect(cardX, cardY, cardW, 60, 8);
  noStroke();
  fill('#1f2a37');
  textSize(11);
  const ratio =
    currentMode === 'monohybrid'
      ? 'Expected genotype ratio: 1 TT : 2 Tt : 1 tt'
      : 'Expected phenotype ratio: 9 dominant-dominant : 3 dominant-recessive : 3 recessive-dominant : 1 recessive-recessive';
  text(ratio, cardX + 12, cardY + 12, cardW - 24);
  pop();
}

function drawSummaryCard(x, y, w, h, title, counts) {
  fill(COLOR_CARD);
  stroke('#dde1ee');
  rect(x, y, w, h, 8);
  noStroke();
  fill('#1d2939');
  textSize(12);
  textAlign(LEFT, TOP);
  text(title, x + 10, y + 8);
  fill('#4b5563');
  textSize(11);
  if (!summary.filled) {
    text('—', x + 10, y + 28);
    return;
  }
  const entries = Object.entries(counts);
  let lineY = y + 26;
  entries.slice(0, 3).forEach(([label, count]) => {
    text(`${label}: ${count}`, x + 10, lineY);
    lineY += 16;
  });
}

function drawControlDeck() {
  push();
  fill('#ffffff');
  stroke('#d0d5dd');
  rect(layout.controlDeck.x, layout.controlDeck.y, layout.controlDeck.w, layout.controlDeck.h);

  fill('#1f2a37');
  textAlign(LEFT, TOP);
  textSize(12);
  text(
    'Controls: animate cells, step through manually, or show all combinations instantly.',
    layout.controlDeck.x + 20,
    layout.controlDeck.y + 8
  );
  pop();
}

function drawLegendRow() {
  push();
  fill('#f8fafc');
  stroke('#d0d5dd');
  rect(layout.legend.x, layout.legend.y, layout.legend.w, layout.legend.h);

  const swatchData = [
    { color: COLOR_DOMINANT, label: 'Dominant phenotype' },
    { color: COLOR_RECESSIVE, label: 'Recessive phenotype' },
    { color: COLOR_MIXED, label: 'Mixed traits' },
    { color: '#ffe78c', label: 'Highlighted gamete' }
  ];

  let swatchX = layout.legend.x + 32;
  const swatchY = layout.legend.y + layout.legend.h / 2 - 14;
  const spacing = (layout.legend.w - 80) / swatchData.length;
  swatchData.forEach(item => {
    fill(item.color);
    stroke('#98a2b3');
    rect(swatchX, swatchY, 32, 26, 4);
    noStroke();
    fill('#1f2933');
    textSize(11);
    textAlign(LEFT, CENTER);
    text(item.label, swatchX + 40, swatchY + 13);
    swatchX += spacing;
  });
  pop();
}

function getCellColor(cell) {
  if (currentMode === 'monohybrid') {
    return cell.hasDominant ? COLOR_DOMINANT : COLOR_RECESSIVE;
  }
  if (cell.hasDominantA && cell.hasDominantB) return COLOR_DOMINANT;
  if (!cell.hasDominantA && !cell.hasDominantB) return COLOR_RECESSIVE;
  return COLOR_MIXED;
}

function createInterface(mainElement) {
  p1Gene1Select = createSelect();
  p1Gene2Select = createSelect();
  p2Gene1Select = createSelect();
  p2Gene2Select = createSelect();
  [p1Gene1Select, p1Gene2Select, p2Gene1Select, p2Gene2Select].forEach(select => {
    select.parent(mainElement);
    select.class('punnett-select');
    select.changed(handleParentChange);
  });

  geneInputs = [createInput(geneLetters[0]), createInput(geneLetters[1])];
  geneInputs.forEach((input, index) => {
    input.parent(mainElement);
    input.attribute('maxlength', '1');
    input.addClass('punnett-input');
    input.input(() => handleGeneInputChange(index));
  });

  randomizeButton = createButton('Randomize Parents');
  randomizeButton.parent(mainElement);
  randomizeButton.mousePressed(randomizeParents);

  startButton = createButton('Start Simulation');
  startButton.parent(mainElement);
  startButton.mousePressed(toggleAnimation);

  stepButton = createButton('Step Through');
  stepButton.parent(mainElement);
  stepButton.mousePressed(stepThrough);

  showAllButton = createButton('Show All');
  showAllButton.parent(mainElement);
  showAllButton.mousePressed(showAllCells);

  viewToggleButton = createButton('Show Phenotypes');
  viewToggleButton.parent(mainElement);
  viewToggleButton.mousePressed(toggleViewMode);

  resetButton = createButton('Reset Grid');
  resetButton.parent(mainElement);
  resetButton.mousePressed(() => {
    resetSimulation(false);
    statusMessage = 'Grid reset. Adjust parents or restart animation.';
  });

  speedSlider = createSlider(0.25, 2, 1, 0.05);
  speedSlider.parent(mainElement);
  speedSlider.input(updateSpeedLabel);

  speedLabel = createSpan('Speed: 1.0×');
  speedLabel.parent(mainElement);
  speedLabel.addClass('punnett-speed-label');

  // Hide second gene controls initially (monohybrid default)
  p1Gene2Select.hide();
  p2Gene2Select.hide();
  updateSpeedLabel();
}

function positionControls() {
  if (!canvas) return;
  const canvasRect = canvas.elt.getBoundingClientRect();
  const offsetX = canvasRect.left + window.scrollX;
  const offsetY = canvasRect.top + window.scrollY;

  placeElement(
    geneInputs[0],
    offsetX + controlSlots.gene1Input.x,
    offsetY + controlSlots.gene1Input.y,
    controlSlots.gene1Input.w,
    controlSlots.gene1Input.h
  );
  placeElement(
    geneInputs[1],
    offsetX + controlSlots.gene2Input.x,
    offsetY + controlSlots.gene2Input.y,
    controlSlots.gene2Input.w,
    controlSlots.gene2Input.h
  );

  placeElement(p1Gene1Select, offsetX + controlSlots.p1Gene1.x, offsetY + controlSlots.p1Gene1.y, controlSlots.p1Gene1.w);
  placeElement(p2Gene1Select, offsetX + controlSlots.p2Gene1.x, offsetY + controlSlots.p2Gene1.y, controlSlots.p2Gene1.w);

  if (currentMode === 'dihybrid') {
    p1Gene2Select.show();
    p2Gene2Select.show();
    placeElement(p1Gene2Select, offsetX + controlSlots.p1Gene2.x, offsetY + controlSlots.p1Gene2.y, controlSlots.p1Gene2.w);
    placeElement(p2Gene2Select, offsetX + controlSlots.p2Gene2.x, offsetY + controlSlots.p2Gene2.y, controlSlots.p2Gene2.w);
  } else {
    p1Gene2Select.hide();
    p2Gene2Select.hide();
  }

  placeElement(
    randomizeButton, 
    offsetX + controlSlots.randomize.x, 
    offsetY + controlSlots.randomize.y, 
    controlSlots.randomize.w);

  placeElement(
    startButton,
    offsetX + controlSlots.startButton.x,
    offsetY + controlSlots.startButton.y,
    controlSlots.startButton.w,
    controlSlots.startButton.h
  );
  placeElement(
    stepButton,
    offsetX + controlSlots.stepButton.x,
    offsetY + controlSlots.stepButton.y,
    controlSlots.stepButton.w,
    controlSlots.stepButton.h
  );
  placeElement(
    showAllButton,
    offsetX + controlSlots.showAll.x,
    offsetY + controlSlots.showAll.y,
    controlSlots.showAll.w,
    controlSlots.showAll.h
  );
  placeElement(
    viewToggleButton,
    offsetX + controlSlots.viewToggle.x,
    offsetY + controlSlots.viewToggle.y,
    controlSlots.viewToggle.w,
    controlSlots.viewToggle.h
  );

  placeElement(
    speedLabel,
    offsetX + controlSlots.speedLabel.x,
    offsetY + controlSlots.speedLabel.y,
    controlSlots.speedLabel.w,
    controlSlots.speedLabel.h
  );
  placeElement(
    speedSlider,
    offsetX + controlSlots.speedSlider.x,
    offsetY + controlSlots.speedSlider.y,
    controlSlots.speedSlider.w,
    controlSlots.speedSlider.h
  );
  placeElement(
    resetButton,
    offsetX + controlSlots.resetButton.x,
    offsetY + controlSlots.resetButton.y,
    controlSlots.resetButton.w,
    controlSlots.resetButton.h
  );
}

function placeElement(element, x, y, width, height = 32) {
  element.position(x, y);
  element.style('width', `${width}px`);
  element.style('height', `${height}px`);
}

function handleGeneInputChange(index) {
  const raw = geneInputs[index].value() || '';
  if (!raw.trim()) {
    return;
  }
  const sanitized = sanitizeGeneLetter(raw, index === 0 ? 'A' : 'B');
  geneLetters[index] = sanitized;
  geneInputs[index].value(sanitized);
  updateGenotypeOptions();
  prepareGridData();
}

function sanitizeGeneLetter(value, fallback) {
  const trimmed = value.trim().charAt(0);
  if (!trimmed) return fallback;
  return trimmed.toUpperCase();
}

function updateGenotypeOptions() {
  const monoOptions = buildOptions(geneLetters[0]);
  setSelectOptions(p1Gene1Select, monoOptions);
  setSelectOptions(p2Gene1Select, monoOptions);

  const diOptions = buildOptions(geneLetters[1]);
  setSelectOptions(p1Gene2Select, diOptions);
  setSelectOptions(p2Gene2Select, diOptions);
}

function buildOptions(letter) {
  const dominant = letter.toUpperCase();
  const recessive = dominant.toLowerCase();
  return [`${dominant}${dominant}`, `${dominant}${recessive}`, `${recessive}${recessive}`];
}

function setSelectOptions(selectElement, options) {
  const prev = selectElement.value();
  selectElement.elt.innerHTML = '';
  options.forEach(opt => selectElement.option(opt, opt));
  const target = options.includes(prev) ? prev : options[1];
  selectElement.value(target);
}

function handleParentChange() {
  prepareGridData();
}

function toggleAnimation() {
  if (cells.length === 0) return;
  if (isAnimating) {
    isAnimating = false;
    startButton.html('Resume Simulation');
    statusMessage = 'Animation paused. Step through or resume.';
  } else {
    if (activeCells >= cells.length) {
      resetSimulation(false);
    }
    isAnimating = true;
    startButton.html('Pause Simulation');
    statusMessage = 'Animating Punnett square. Hover any cell for details.';
    lastAdvance = millis();
  }
}

function stepThrough() {
  isAnimating = false;
  startButton.html('Resume Simulation');
  if (activeCells < cells.length) {
    activeCells++;
    updateSummary();
    statusMessage = `Cell ${activeCells} revealed manually.`;
  }
}

function showAllCells() {
  isAnimating = false;
  startButton.html('Resume Simulation');
  activeCells = cells.length;
  updateSummary();
  statusMessage = 'All cells displayed.';
}

function toggleViewMode() {
  viewMode = viewMode === 'genotype' ? 'phenotype' : 'genotype';
  viewToggleButton.html(viewMode === 'genotype' ? 'Show Phenotypes' : 'Show Genotypes');
}

function randomizeParents() {
  const monoOpts = buildOptions(geneLetters[0]);
  const diOpts = buildOptions(geneLetters[1]);
  p1Gene1Select.value(randomChoice(monoOpts));
  p2Gene1Select.value(randomChoice(monoOpts));
  p1Gene2Select.value(randomChoice(diOpts));
  p2Gene2Select.value(randomChoice(diOpts));
  prepareGridData();
  statusMessage = 'Parents randomized. Observe how ratios shift.';
}

function randomChoice(arr) {
  return arr[int(random(arr.length))];
}

function updateSpeedLabel() {
  if (!speedSlider || !speedLabel) return;
  const value = speedSlider.value();
  speedLabel.html(`Speed: ${value.toFixed(2)}×`);
}

function maybeAdvanceAnimation() {
  if (!isAnimating || !speedSlider) return;
  const interval = map(speedSlider.value(), 0.25, 2, 1800, 280);
  if (millis() - lastAdvance >= interval) {
    if (activeCells < cells.length) {
      activeCells++;
      updateSummary();
      lastAdvance = millis();
    } else {
      isAnimating = false;
      startButton.html('Restart Simulation');
      statusMessage = 'All cells revealed! Reset or randomize for more practice.';
    }
  }
}

function prepareGridData() {
  const p1A = p1Gene1Select.value() || buildOptions(geneLetters[0])[1];
  const p2A = p2Gene1Select.value() || buildOptions(geneLetters[0])[1];
  const p1B = p1Gene2Select.value() || buildOptions(geneLetters[1])[1];
  const p2B = p2Gene2Select.value() || buildOptions(geneLetters[1])[1];

  rowHeaders = currentMode === 'monohybrid' ? buildMonohybridGametes(p1A) : buildDihybridGametes(p1A, p1B);
  colHeaders = currentMode === 'monohybrid' ? buildMonohybridGametes(p2A) : buildDihybridGametes(p2A, p2B);

  cells = [];
  for (let r = 0; r < rowHeaders.length; r++) {
    for (let c = 0; c < colHeaders.length; c++) {
      const rowGamete = rowHeaders[r];
      const colGamete = colHeaders[c];
      let genotype, phenotype, hasDominant, hasDominantA, hasDominantB;
      if (currentMode === 'monohybrid') {
        genotype = formatMonohybridGenotype(rowGamete, colGamete);
        hasDominant = /[A-Z]/.test(genotype.charAt(0));
        phenotype = hasDominant ? `Dominant (${geneLetters[0]})` : `Recessive (${geneLetters[0]})`;
      } else {
        const combined = formatDihybridGenotype(rowGamete, colGamete);
        genotype = combined.display;
        hasDominantA = combined.aDominant;
        hasDominantB = combined.bDominant;
        phenotype = buildDihybridPhenotype(hasDominantA, hasDominantB);
      }
      cells.push({
        row: r,
        col: c,
        genotype,
        phenotype,
        hasDominant,
        hasDominantA,
        hasDominantB
      });
    }
  }
  resetSimulation(true);
  updateSummary();
}

function buildMonohybridGametes(genotype) {
  const alleles = genotype.split('');
  return [alleles[0], alleles[1]];
}

function buildDihybridGametes(gene1, gene2) {
  const g1 = gene1.split('');
  const g2 = gene2.split('');
  const gametes = [];
  g1.forEach(a => {
    g2.forEach(b => {
      gametes.push(a + b);
    });
  });
  return gametes;
}

function formatMonohybridGenotype(gamete1, gamete2) {
  const alleles = [gamete1, gamete2];
  alleles.sort((a, b) => {
    const aDom = a === a.toUpperCase();
    const bDom = b === b.toUpperCase();
    if (aDom === bDom) return 0;
    return aDom ? -1 : 1;
  });
  return alleles.join('');
}

function formatDihybridGenotype(gamete1, gamete2) {
  const alleleA = [gamete1[0], gamete2[0]];
  const alleleB = [gamete1[1], gamete2[1]];
  alleleA.sort((a, b) => {
    const aDom = a === a.toUpperCase();
    const bDom = b === b.toUpperCase();
    if (aDom === bDom) return 0;
    return aDom ? -1 : 1;
  });
  alleleB.sort((a, b) => {
    const aDom = a === a.toUpperCase();
    const bDom = b === b.toUpperCase();
    if (aDom === bDom) return 0;
    return aDom ? -1 : 1;
  });
  const display = `${alleleA.join('')}${alleleB.join('')}`;
  return {
    display,
    aDominant: alleleA.some(letter => letter === letter.toUpperCase()),
    bDominant: alleleB.some(letter => letter === letter.toUpperCase())
  };
}

function buildDihybridPhenotype(aDom, bDom) {
  const traitA = aDom ? `Dominant ${geneLetters[0]}` : `Recessive ${geneLetters[0]}`;
  const traitB = bDom ? `Dominant ${geneLetters[1]}` : `Recessive ${geneLetters[1]}`;
  return `${traitA} + ${traitB}`;
}

function resetSimulation(keepStatus) {
  activeCells = 0;
  isAnimating = false;
  startButton.html('Start Simulation');
  if (!keepStatus) {
    statusMessage = 'Animation reset. Start or step through again.';
  }
  updateSummary();
}

function updateSummary() {
  const filled = cells.slice(0, activeCells);
  summary = { genotype: {}, phenotype: {}, filled: activeCells };
  filled.forEach(cell => {
    summary.genotype[cell.genotype] = (summary.genotype[cell.genotype] || 0) + 1;
    summary.phenotype[cell.phenotype] = (summary.phenotype[cell.phenotype] || 0) + 1;
  });
}

function mousePressed() {
  if (!layout.modeButtons) return;
  layout.modeButtons.forEach(btn => {
    if (pointInRect(mouseX, mouseY, btn)) {
      if (currentMode !== btn.mode) {
        currentMode = btn.mode;
        statusMessage = `Switched to ${btn.label} mode. Adjust parents to explore ratios.`;
        prepareGridData();
      }
    }
  });
}

function pointInRect(px, py, rectObj) {
  return px >= rectObj.x && px <= rectObj.x + rectObj.w && py >= rectObj.y && py <= rectObj.y + rectObj.h;
}

function windowResized() {
  updateCanvasSize();
  resizeCanvasIfNeeded();
  positionControls();
}

// --- Basic styles for DOM elements ---
const style = document.createElement('style');
style.innerHTML = `
  .punnett-select, .punnett-input, button, .punnett-speed-label {
    font-family: 'Inter', 'Helvetica', sans-serif;
    font-size: 14px;
  }
  .punnett-select, .punnett-input {
    border: 1px solid #94a3b8;
    border-radius: 6px;
    padding: 4px 10px;
    background: #fff;
    box-shadow: 0 1px 2px rgba(15, 23, 42, 0.08);
  }
  button {
    border-radius: 8px;
    border: 1px solid #cbd5f5;
    background: #edf2ff;
    padding: 6px 10px;
    cursor: pointer;
  }
  button:hover {
    background: #dee5ff;
  }
  .punnett-speed-label {
    display: inline-flex;
    align-items: center;
    height: 32px;
  }
`;
document.head.appendChild(style);
