// Fermentation Comparison Matrix MicroSim
// Side-by-side comparison of lactic acid vs alcoholic fermentation with quiz mode.

let canvasWidth = 760;
let drawHeight = 650;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
const margin = 16;

let modeButton;
let currentMode = 'explore'; // 'explore' or 'quiz'
let hoveredRow = -1;
let quizAnswers = [];    // tracks correct answers per row
let quizCurrent = 0;     // current quiz question index
let quizFeedback = '';
let quizFeedbackTime = 0;
let quizComplete = false;
let quizScore = 0;

const HEADER_HEIGHT = 70;
const COL_LABEL_H = 36;

const comparisonData = [
  {
    feature: 'Organisms',
    lactic: 'Muscle cells, red blood cells, some bacteria (Lactobacillus)',
    alcoholic: 'Yeasts (Saccharomyces cerevisiae), some plants under waterlogging'
  },
  {
    feature: 'Location in cell',
    lactic: 'Cytoplasm (no organelles involved)',
    alcoholic: 'Cytoplasm (no organelles involved)'
  },
  {
    feature: 'Oxygen requirement',
    lactic: 'Anaerobic (occurs without oxygen)',
    alcoholic: 'Anaerobic (occurs without oxygen)'
  },
  {
    feature: 'Starting molecule',
    lactic: 'Pyruvate (from glycolysis)',
    alcoholic: 'Pyruvate (from glycolysis)'
  },
  {
    feature: 'Number of steps',
    lactic: '1 step: pyruvate reduced directly to lactate',
    alcoholic: '2 steps: pyruvate decarboxylated, then acetaldehyde reduced'
  },
  {
    feature: 'Key enzyme(s)',
    lactic: 'Lactate dehydrogenase (LDH)',
    alcoholic: 'Pyruvate decarboxylase (PDC) + Alcohol dehydrogenase (ADH)'
  },
  {
    feature: 'End products',
    lactic: 'Lactate (lactic acid)',
    alcoholic: 'Ethanol + CO\u2082'
  },
  {
    feature: 'Gas produced?',
    lactic: 'No gas released',
    alcoholic: 'Yes \u2014 CO\u2082 (bubbles, carbonation, bread rising)'
  },
  {
    feature: 'Carbon count',
    lactic: 'Pyruvate (3C) \u2192 Lactate (3C) \u2014 no carbon lost',
    alcoholic: 'Pyruvate (3C) \u2192 CO\u2082 (1C) + Ethanol (2C)'
  },
  {
    feature: 'Reversibility',
    lactic: 'Reversible \u2014 lactate recycled to glucose via Cori cycle in liver',
    alcoholic: 'Irreversible \u2014 ethanol and CO\u2082 cannot be reassembled into pyruvate'
  },
  {
    feature: 'NAD\u207A recycling',
    lactic: 'NADH donates electrons directly to pyruvate \u2192 NAD\u207A regenerated',
    alcoholic: 'NADH donates electrons to acetaldehyde \u2192 NAD\u207A regenerated'
  },
  {
    feature: 'Net ATP per glucose',
    lactic: '2 ATP (from glycolysis only)',
    alcoholic: '2 ATP (from glycolysis only)'
  },
  {
    feature: 'Real-world uses',
    lactic: 'Yogurt, sauerkraut, kimchi, cheese production',
    alcoholic: 'Beer, wine, bread, biofuel production'
  }
];

const quizQuestions = [
  { text: 'Produces CO\u2082 gas that makes bread dough rise', answer: 'alcoholic' },
  { text: 'Occurs in your leg muscles during an all-out sprint', answer: 'lactic' },
  { text: 'Uses lactate dehydrogenase as its key enzyme', answer: 'lactic' },
  { text: 'Converts pyruvate to ethanol in two steps', answer: 'alcoholic' },
  { text: 'Product can be recycled back to glucose via the Cori cycle', answer: 'lactic' },
  { text: 'Used by Saccharomyces cerevisiae in beer brewing', answer: 'alcoholic' },
  { text: 'No carbon atoms are lost as gas during this process', answer: 'lactic' },
  { text: 'Requires pyruvate decarboxylase and alcohol dehydrogenase', answer: 'alcoholic' },
  { text: 'Used to produce yogurt, sauerkraut, and kimchi', answer: 'lactic' },
  { text: 'The reaction is irreversible \u2014 products cannot reform pyruvate', answer: 'alcoholic' }
];

function setup() {
  updateCanvasSize();
  canvasHeight = drawHeight + controlHeight;
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  modeButton = createButton('Switch to Quiz Mode');
  modeButton.parent(document.querySelector('main'));
  modeButton.mousePressed(toggleMode);

  updateControlPositions();
}

function draw() {
  updateCanvasSize();
  canvasHeight = drawHeight + controlHeight;
  resizeCanvas(canvasWidth, canvasHeight, true);

  background('aliceblue');

  drawTitle();
  drawTable();

  // Control area
  fill(255);
  noStroke();
  rect(0, drawHeight, canvasWidth, controlHeight);

  updateControlPositions();
}

function drawTitle() {
  noStroke();
  fill('#1a2744');
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  textSize(Math.max(16, canvasWidth * 0.026));
  text('Fermentation Comparison Matrix', canvasWidth / 2, margin);

  textStyle(NORMAL);
  textSize(Math.max(12, canvasWidth * 0.016));
  fill('#4a5568');
  if (currentMode === 'explore') {
    text('Hover over any row to highlight it. Click the button below to test yourself.', canvasWidth / 2, margin + Math.max(20, canvasWidth * 0.03));
  } else if (quizComplete) {
    text('Quiz complete! Score: ' + quizScore + ' / ' + quizQuestions.length + '. Click button to return to Explore mode.', canvasWidth / 2, margin + Math.max(20, canvasWidth * 0.03));
  } else {
    text('Question ' + (quizCurrent + 1) + ' of ' + quizQuestions.length + ':  ' + quizQuestions[quizCurrent].text, canvasWidth / 2, margin + Math.max(20, canvasWidth * 0.03));
  }
}

function drawTable() {
  let tableX = margin;
  let tableY = HEADER_HEIGHT;
  let tableW = canvasWidth - margin * 2;
  let numRows = comparisonData.length;

  // Column widths: feature 22%, lactic 39%, alcoholic 39%
  let featureW = tableW * 0.22;
  let lacticW = tableW * 0.39;
  let alcoholicW = tableW * 0.39;

  let lacticX = tableX + featureW;
  let alcoholicX = lacticX + lacticW;

  // Available height for data rows
  let availableH = drawHeight - tableY - COL_LABEL_H - 8;
  let rowH = availableH / numRows;

  // Column headers
  let headerY = tableY;

  // Feature header
  fill('#2d3748');
  stroke('#cbd5e0');
  rect(tableX, headerY, featureW, COL_LABEL_H);
  noStroke();
  fill('#fff');
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(Math.max(11, Math.min(14, canvasWidth * 0.016)));
  text('Feature', tableX + featureW / 2, headerY + COL_LABEL_H / 2);

  // Lactic header
  fill('#7c3aed');
  stroke('#cbd5e0');
  rect(lacticX, headerY, lacticW, COL_LABEL_H);
  noStroke();
  fill('#fff');
  text('Lactic Acid Fermentation', lacticX + lacticW / 2, headerY + COL_LABEL_H / 2);

  // Alcoholic header
  fill('#d97706');
  stroke('#cbd5e0');
  rect(alcoholicX, headerY, alcoholicW, COL_LABEL_H);
  noStroke();
  fill('#fff');
  text('Alcoholic Fermentation', alcoholicX + alcoholicW / 2, headerY + COL_LABEL_H / 2);

  // Data rows
  let dataY = headerY + COL_LABEL_H;
  let fontSize = Math.max(10, Math.min(13, canvasWidth * 0.014));

  for (let i = 0; i < numRows; i++) {
    let rowY = dataY + i * rowH;
    let row = comparisonData[i];
    let isHovered = (hoveredRow === i && currentMode === 'explore');
    let isEven = (i % 2 === 0);

    // Row backgrounds
    let featureBg = isHovered ? '#e2e8f0' : (isEven ? '#edf2f7' : '#f7fafc');
    let lacticBg = isHovered ? '#ede9fe' : (isEven ? '#faf5ff' : '#f5f0ff');
    let alcoholicBg = isHovered ? '#fef3c7' : (isEven ? '#fffbeb' : '#fff8e1');

    // Feature cell
    fill(featureBg);
    stroke('#e2e8f0');
    rect(tableX, rowY, featureW, rowH);
    noStroke();
    fill('#2d3748');
    textAlign(LEFT, TOP);
    textStyle(BOLD);
    textSize(fontSize);
    text(row.feature, tableX + 6, rowY + 4, featureW - 12, rowH - 8);

    // Lactic cell
    fill(lacticBg);
    stroke('#e2e8f0');
    rect(lacticX, rowY, lacticW, rowH);
    noStroke();
    fill('#4a1d96');
    textAlign(LEFT, TOP);
    textStyle(NORMAL);
    textSize(fontSize);

    if (currentMode === 'explore') {
      text(row.lactic, lacticX + 6, rowY + 4, lacticW - 12, rowH - 8);
    } else {
      // Quiz mode — show if already answered correctly, else show "?"
      if (quizAnswers[i] === true) {
        fill('#16a34a');
        text(row.lactic, lacticX + 6, rowY + 4, lacticW - 12, rowH - 8);
      } else {
        fill('#a0aec0');
        textAlign(CENTER, CENTER);
        text('?', lacticX + lacticW / 2, rowY + rowH / 2);
      }
    }

    // Alcoholic cell
    fill(alcoholicBg);
    stroke('#e2e8f0');
    rect(alcoholicX, rowY, alcoholicW, rowH);
    noStroke();
    fill('#92400e');
    textAlign(LEFT, TOP);
    textStyle(NORMAL);
    textSize(fontSize);

    if (currentMode === 'explore') {
      text(row.alcoholic, alcoholicX + 6, rowY + 4, alcoholicW - 12, rowH - 8);
    } else {
      if (quizAnswers[i] === true) {
        fill('#16a34a');
        text(row.alcoholic, alcoholicX + 6, rowY + 4, alcoholicW - 12, rowH - 8);
      } else {
        fill('#a0aec0');
        textAlign(CENTER, CENTER);
        text('?', alcoholicX + alcoholicW / 2, rowY + rowH / 2);
      }
    }
  }

  // Quiz mode: highlight clickable columns
  if (currentMode === 'quiz' && !quizComplete) {
    drawQuizClickZones(lacticX, lacticW, alcoholicX, alcoholicW, dataY);
  }

  // Quiz feedback
  if (quizFeedback && millis() - quizFeedbackTime < 1500) {
    let feedbackY = drawHeight - 28;
    noStroke();
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    textSize(16);
    if (quizFeedback === 'Correct!') {
      fill('#16a34a');
    } else {
      fill('#dc2626');
    }
    text(quizFeedback, canvasWidth / 2, feedbackY);
  }
}

function drawQuizClickZones(lacticX, lacticW, alcoholicX, alcoholicW, dataY) {
  // Draw clickable column indicators at the bottom
  let zoneY = drawHeight - 50;
  let zoneH = 38;

  // Lactic click zone
  fill('#7c3aed');
  noStroke();
  rect(lacticX + 10, zoneY, lacticW - 20, zoneH, 8);
  fill('#fff');
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(14);
  text('Click: Lactic Acid', lacticX + lacticW / 2, zoneY + zoneH / 2);

  // Alcoholic click zone
  fill('#d97706');
  noStroke();
  rect(alcoholicX + 10, zoneY, alcoholicW - 20, zoneH, 8);
  fill('#fff');
  text('Click: Alcoholic', alcoholicX + alcoholicW / 2, zoneY + zoneH / 2);
}

function mouseMoved() {
  if (currentMode !== 'explore') {
    hoveredRow = -1;
    return;
  }
  let tableY = HEADER_HEIGHT + COL_LABEL_H;
  let availableH = drawHeight - HEADER_HEIGHT - COL_LABEL_H - 8;
  let rowH = availableH / comparisonData.length;

  if (mouseX >= margin && mouseX <= canvasWidth - margin &&
      mouseY >= tableY && mouseY < tableY + availableH) {
    hoveredRow = floor((mouseY - tableY) / rowH);
    if (hoveredRow >= comparisonData.length) hoveredRow = -1;
  } else {
    hoveredRow = -1;
  }
}

function mousePressed() {
  if (currentMode !== 'quiz' || quizComplete) return;

  let tableW = canvasWidth - margin * 2;
  let featureW = tableW * 0.22;
  let lacticW = tableW * 0.39;
  let lacticX = margin + featureW;
  let alcoholicX = lacticX + lacticW;
  let alcoholicW = tableW * 0.39;

  // Check click on the answer zones at the bottom
  let zoneY = drawHeight - 50;
  let zoneH = 38;

  let choice = null;
  if (mouseY >= zoneY && mouseY <= zoneY + zoneH) {
    if (mouseX >= lacticX + 10 && mouseX <= lacticX + lacticW - 10) {
      choice = 'lactic';
    } else if (mouseX >= alcoholicX + 10 && mouseX <= alcoholicX + alcoholicW - 10) {
      choice = 'alcoholic';
    }
  }

  if (choice === null) return;

  let q = quizQuestions[quizCurrent];
  if (choice === q.answer) {
    quizFeedback = 'Correct!';
    quizScore++;
    // Reveal a matching row (cycle through unrevealed rows)
    for (let i = 0; i < comparisonData.length; i++) {
      if (quizAnswers[i] !== true) {
        quizAnswers[i] = true;
        break;
      }
    }
    quizCurrent++;
    if (quizCurrent >= quizQuestions.length) {
      quizComplete = true;
      // Reveal all remaining
      for (let i = 0; i < comparisonData.length; i++) {
        quizAnswers[i] = true;
      }
    }
  } else {
    quizFeedback = 'Not quite \u2014 try again!';
  }
  quizFeedbackTime = millis();
}

function toggleMode() {
  if (currentMode === 'explore') {
    currentMode = 'quiz';
    modeButton.html('Return to Explore Mode');
    quizAnswers = new Array(comparisonData.length).fill(false);
    quizCurrent = 0;
    quizScore = 0;
    quizComplete = false;
    quizFeedback = '';
  } else {
    currentMode = 'explore';
    modeButton.html('Switch to Quiz Mode');
    hoveredRow = -1;
    quizFeedback = '';
  }
}

function updateControlPositions() {
  let btnW = Math.min(200, canvasWidth * 0.3);
  modeButton.position((canvasWidth - btnW) / 2, drawHeight + 8);
  modeButton.size(btnW, 34);
  modeButton.style('font-size', '14px');
  modeButton.style('border-radius', '6px');
  modeButton.style('cursor', 'pointer');
  modeButton.style('border', '1px solid #cbd5e0');
  modeButton.style('background-color', currentMode === 'explore' ? '#f3e8d0' : '#ede9fe');
  modeButton.style('color', '#2d3748');
  modeButton.style('font-weight', 'bold');
}

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (!container) return;
  canvasWidth = Math.floor(container.getBoundingClientRect().width);
  // Scale draw height based on width to keep rows readable
  drawHeight = Math.max(500, Math.min(700, canvasWidth * 0.72));
}

function windowResized() {
  updateCanvasSize();
  canvasHeight = drawHeight + controlHeight;
  resizeCanvas(canvasWidth, canvasHeight, true);
  updateControlPositions();
}
