// Fermentation Comparison Matrix MicroSim
// Reveals lactic vs alcoholic fermentation features row by row and offers a quiz mode for classification.

let containerWidth;
let canvasWidth = 760;
const drawHeight = 400;
const controlHeight = 120;
const canvasHeight = drawHeight + controlHeight;
const margin = 24;

let startButton;
let resetButton;
let revealAllButton;
let hideAllButton;
let quizButton;
let rowSlider;

let autoReveal = false;
let lastReveal = 0;
let quizMode = false;
let quizIndex = 0;
let quizMessage = '';

const rows = [
  {
    label: 'Organisms / contexts',
    lactic: 'Muscle cells, red blood cells, Lactobacillus bacteria',
    alcoholic: "Baker's yeast, brewer's yeast, waterlogged plant tissue"
  },
  {
    label: 'Waste products',
    lactic: 'Lactate exported to blood, later recycled via Cori cycle',
    alcoholic: 'Ethanol remains in fluid, CO2 gas escapes or is captured'
  },
  {
    label: 'Gas released',
    lactic: 'No gas; acid builds up until blood removes it',
    alcoholic: 'CO2 bubbles inflate dough or carbonate beverages'
  },
  {
    label: 'ATP yield',
    lactic: 'Net 2 ATP per glucose (glycolysis only)',
    alcoholic: 'Also net 2 ATP per glucose (glycolysis only)'
  },
  {
    label: 'NAD+ recycling note',
    lactic: 'NADH reduces pyruvate directly to regenerate NAD+',
    alcoholic: 'NADH reduces acetaldehyde to ethanol, regenerating NAD+'
  }
];

const quizPrompts = [
  { text: 'Produces CO2 bubbles that make bread rise?', answer: 'alcoholic' },
  { text: 'Occurs in fast-twitch muscle fibers during a sprint?', answer: 'lactic' },
  { text: 'Exports lactate that the liver converts back to glucose?', answer: 'lactic' },
  { text: 'Creates ethanol alcohol as a waste product?', answer: 'alcoholic' }
];

let revealedCount = 0;
let layout;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  startButton = createButton('Start Comparison');
  startButton.mousePressed(toggleAutoReveal);

  resetButton = createButton('Reset Grid');
  resetButton.mousePressed(resetMatrix);

  revealAllButton = createButton('Reveal All');
  revealAllButton.mousePressed(() => setRevealed(rows.length));

  hideAllButton = createButton('Hide All');
  hideAllButton.mousePressed(() => setRevealed(0));

  quizButton = createButton('Enter Quiz Mode');
  quizButton.mousePressed(toggleQuizMode);

  rowSlider = createSlider(0, rows.length, 0, 1);
  rowSlider.input(() => {
    setRevealed(rowSlider.value());
  });

  describe('Comparison matrix for lactic vs alcoholic fermentation with reveal and quiz features.', LABEL);
  updateControlPositions();
}

function draw() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight, true);
  layout = computeLayout();

  fill('aliceblue');
  stroke('silver');
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);

  if (autoReveal && millis() - lastReveal > 1800) {
    setRevealed(min(rows.length, revealedCount + 1));
    if (revealedCount === rows.length) {
      autoReveal = false;
      startButton.html('Start Comparison');
    }
    lastReveal = millis();
  }

  drawTitle();
  drawRevealStrip();
  drawMatrix();
  drawQuizNotice();
  drawSummary();
  drawStatusText();
}

function drawTitle() {
  noStroke();
  fill('#2f2f4a');
  textAlign(CENTER, TOP);
  textSize(28);
  text('Fermentation Comparison Matrix', canvasWidth / 2, margin);
  textSize(14);
  fill('#485b78');
  text('Compare lactic vs alcoholic fermentation row by row, then test yourself.', canvasWidth / 2, margin + 28);
}

function drawRevealStrip() {
  const area = layout.revealStrip;
  stroke('#7ca9c8');
  fill('#e2f3ff');
  rect(area.x, area.y, area.w, area.h, 8);
  noStroke();
  fill('#1f3c54');
  textAlign(LEFT, CENTER);
  textSize(13);
  text('Use the controls below to reveal rows in order or jump ahead.', area.x + 12, area.y + area.h / 2);
}

function drawMatrix() {
  const area = layout.matrix;
  const rowHeight = area.h / rows.length;
  const colDivider = area.x + area.w / 2;

  stroke('#8cb0c9');
  fill('#ffffff');
  rect(area.x, area.y, area.w, area.h);

  // Column labels
  noStroke();
  fill('#1a2a44');
  textAlign(CENTER, CENTER);
  textSize(14);
  text('Lactic Fermentation', area.x + (area.w / 4), area.y + 16);
  text('Alcoholic Fermentation', area.x + (3 * area.w / 4), area.y + 16);

  // Grid lines
  stroke('#cfcfcf');
  for (let i = 1; i < rows.length; i++) {
    line(area.x, area.y + i * rowHeight, area.x + area.w, area.y + i * rowHeight);
  }
  stroke('#8cb0c9');
  strokeWeight(2);
  line(colDivider, area.y, colDivider, area.y + area.h);
  strokeWeight(1);

  // Row labels and content
  rows.forEach((row, index) => {
    const yTop = area.y + index * rowHeight;
    const yCenter = yTop + rowHeight / 2;

    // Row label on left margin
    noStroke();
    fill('#4b5563');
    textAlign(LEFT, TOP);
    textSize(12);
    text(row.label, area.x + 10, yTop + 6);

    const revealed = index < revealedCount;
    const isQuizRow = quizMode && index === quizIndex;

    // Column backgrounds
    fill(revealed ? '#f7fbff' : '#f0f0f0');
    stroke('#f0f0f0');
    rect(area.x + 10, yTop + 26, area.w / 2 - 20, rowHeight - 30);
    rect(colDivider + 10, yTop + 26, area.w / 2 - 20, rowHeight - 30);

    if (revealed && !quizMode) {
      // show text
      noStroke();
      fill('#1f2a37');
      textAlign(LEFT, TOP);
      textSize(12);
      text(row.lactic, area.x + 18, yTop + 32, area.w / 2 - 32, rowHeight - 38);
      text(row.alcoholic, colDivider + 18, yTop + 32, area.w / 2 - 32, rowHeight - 38);
    } else if (quizMode && isQuizRow) {
      noStroke();
      fill('#1f2a37');
      textAlign(CENTER, CENTER);
      textSize(12);
      text('Click here if statement fits Lactic', area.x + area.w / 4, yCenter + 10);
      text('Click here if statement fits Alcoholic', area.x + (3 * area.w) / 4, yCenter + 10);
      stroke('#f59e0b');
      noFill();
      rect(area.x + 10, yTop + 26, area.w - 20, rowHeight - 30);
    } else if (!revealed) {
      noStroke();
      fill('#7c7c7c');
      textAlign(CENTER, CENTER);
      textSize(12);
      text('Hidden until revealed', area.x + area.w / 4, yCenter + 10);
      text('Hidden until revealed', area.x + (3 * area.w) / 4, yCenter + 10);
    }
  });
}

function drawQuizNotice() {
  const area = layout.quizStrip;
  stroke('#d4a642');
  fill('#fff7dd');
  rect(area.x, area.y, area.w, area.h, 8);
  noStroke();
  fill('#5b4315');
  textAlign(LEFT, CENTER);
  textSize(12);
  const textMsg = quizMode ? `Quiz Mode: ${quizPrompts[quizIndex].text}` : 'Quiz Mode tells you a feature; click the correct column to classify it.';
  text(textMsg, area.x + 12, area.y + area.h / 2);
}

function drawSummary() {
  const area = layout.summary;
  stroke('#95a8d5');
  fill('#f0f5ff');
  rect(area.x, area.y, area.w, area.h, 8);
  noStroke();
  fill('#1d2f44');
  textAlign(LEFT, CENTER);
  textSize(13);
  const summaryText = revealedCount === rows.length ? 'All rows revealed - compare vocabulary, gases, and ATP at a glance.' : 'Reveal rows to compare organisms, waste, gases, ATP, and NAD+ recycling.';
  text(summaryText, area.x + 12, area.y + area.h / 2);
}

function drawStatusText() {
  fill('#1f2937');
  textAlign(LEFT, TOP);
  textSize(12);
  const status = `Rows revealed: ${revealedCount}/${rows.length}${quizMode ? ' • ' + quizMessage : ''}`;
  text(status, margin, drawHeight - 18);
}

function mousePressed() {
  if (!quizMode) return;
  const area = layout.matrix;
  if (mouseY < area.y || mouseY > area.y + area.h) return;
  const rowHeight = area.h / rows.length;
  const clickedRow = floor((mouseY - area.y) / rowHeight);
  if (clickedRow !== quizIndex) return;
  const colDivider = area.x + area.w / 2;
  const choice = mouseX < colDivider ? 'lactic' : 'alcoholic';
  const prompt = quizPrompts[quizIndex];
  if (choice === prompt.answer) {
    quizMessage = 'Correct!';
    quizIndex = (quizIndex + 1) % quizPrompts.length;
  } else {
    quizMessage = 'Try again: think about the waste product.';
  }
}

function toggleAutoReveal() {
  autoReveal = !autoReveal;
  if (autoReveal) {
    startButton.html('Pause Auto Reveal');
    lastReveal = millis();
  } else {
    startButton.html('Start Comparison');
  }
}

function resetMatrix() {
  autoReveal = false;
  quizMode = false;
  quizMessage = '';
  startButton.html('Start Comparison');
  quizButton.html('Enter Quiz Mode');
  setRevealed(0);
}

function setRevealed(count) {
  revealedCount = constrain(count, 0, rows.length);
  rowSlider.value(revealedCount);
}

function toggleQuizMode() {
  quizMode = !quizMode;
  quizMessage = '';
  quizIndex = 0;
  quizButton.html(quizMode ? 'Exit Quiz Mode' : 'Enter Quiz Mode');
}

function updateControlPositions() {
  const rowY = drawHeight + 10;
  startButton.position(margin, rowY);
  startButton.size(160, 34);

  resetButton.position(margin + 170, rowY);
  resetButton.size(120, 34);

  quizButton.position(margin + 300, rowY);
  quizButton.size(150, 34);

  revealAllButton.position(margin + 460, rowY);
  revealAllButton.size(120, 34);

  hideAllButton.position(margin + 590, rowY);
  hideAllButton.size(120, 34);

  rowSlider.position(margin, rowY + 50);
  rowSlider.size(canvasWidth - margin * 2);
}

function computeLayout() {
  return {
    revealStrip: { x: margin, y: margin + 50, w: canvasWidth - margin * 2, h: 36 },
    matrix: { x: margin, y: margin + 100, w: canvasWidth - margin * 2, h: 200 },
    quizStrip: { x: margin, y: margin + 310, w: canvasWidth - margin * 2, h: 28 },
    summary: { x: margin, y: margin + 345, w: canvasWidth - margin * 2, h: 36 }
  };
}

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (!container) return;
  containerWidth = Math.floor(container.getBoundingClientRect().width);
  canvasWidth = containerWidth;
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight, true);
  updateControlPositions();
}
