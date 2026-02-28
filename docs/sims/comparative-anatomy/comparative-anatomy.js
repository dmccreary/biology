// Comparative Anatomy Explorer
// Students differentiate homologous, analogous, and vestigial structures
// and explain how each provides evidence for evolution.
// MicroSim version 2026.02

// Global layout variables
let containerWidth;
let canvasWidth = 800;
let drawHeight = 420;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 10;

// Mode: 'explore' or 'classify'
let mode = 'explore';
let modeButton;
let showBonesToggle;
let showBones = true;

// Hover state
let hoveredBone = null;

// Species data with forelimb bone geometry (relative coordinates within each species box)
// Each bone is defined as a polygon relative to species box origin
const boneColors = {
  humerus:   '#E74C3C',
  radius:    '#3498DB',
  ulna:      '#2471A3',
  carpals:   '#27AE60',
  phalanges: '#F1C40F'
};

const boneLabelNames = {
  humerus: 'Humerus',
  radius: 'Radius',
  ulna: 'Ulna',
  carpals: 'Carpals',
  phalanges: 'Phalanges'
};

// Species forelimb data — simplified polygon outlines for each bone
// Coordinates are fractions of species box (0-1 range), scaled at draw time
const species = [
  {
    name: 'Human',
    silhouetteColor: '#D5DBDB',
    bones: {
      humerus:   { pts: [[0.45,0.08],[0.55,0.08],[0.54,0.38],[0.46,0.38]], desc: 'Upper arm bone — long and straight for tool use and manipulation.' },
      radius:    { pts: [[0.46,0.39],[0.52,0.39],[0.50,0.60],[0.44,0.60]], desc: 'Lateral forearm bone — allows rotation of the wrist and palm.' },
      ulna:      { pts: [[0.52,0.39],[0.58,0.39],[0.56,0.60],[0.50,0.60]], desc: 'Medial forearm bone — forms the elbow joint hinge.' },
      carpals:   { pts: [[0.42,0.61],[0.58,0.61],[0.57,0.70],[0.43,0.70]], desc: 'Wrist bones — 8 small bones enabling flexible wrist movement.' },
      phalanges: { pts: [[0.35,0.71],[0.65,0.71],[0.65,0.95],[0.35,0.95]], desc: '14 finger bones — long and dexterous for precise grip.' }
    }
  },
  {
    name: 'Whale',
    silhouetteColor: '#AEB6BF',
    bones: {
      humerus:   { pts: [[0.35,0.10],[0.65,0.10],[0.62,0.28],[0.38,0.28]], desc: 'Very short and thick — provides anchor point for flipper muscles.' },
      radius:    { pts: [[0.38,0.29],[0.50,0.29],[0.48,0.48],[0.36,0.48]], desc: 'Shortened and flattened — fused for rigid flipper structure.' },
      ulna:      { pts: [[0.50,0.29],[0.62,0.29],[0.64,0.48],[0.48,0.48]], desc: 'Shortened alongside radius — supports flipper hydrodynamics.' },
      carpals:   { pts: [[0.34,0.49],[0.66,0.49],[0.68,0.58],[0.32,0.58]], desc: 'Reduced and flattened — embedded within the flipper paddle.' },
      phalanges: { pts: [[0.28,0.59],[0.72,0.59],[0.75,0.95],[0.25,0.95]], desc: 'Greatly elongated — form the broad, paddle-like flipper for swimming.' }
    }
  },
  {
    name: 'Bat',
    silhouetteColor: '#D2B4DE',
    bones: {
      humerus:   { pts: [[0.42,0.08],[0.58,0.08],[0.56,0.30],[0.44,0.30]], desc: 'Short but strong — anchors powerful flight muscles.' },
      radius:    { pts: [[0.44,0.31],[0.52,0.31],[0.48,0.50],[0.40,0.50]], desc: 'Elongated and thin — lightweight support for the wing membrane.' },
      ulna:      { pts: [[0.52,0.31],[0.60,0.31],[0.56,0.50],[0.48,0.50]], desc: 'Reduced in size — bat forearm is dominated by the radius.' },
      carpals:   { pts: [[0.36,0.51],[0.60,0.51],[0.62,0.58],[0.34,0.58]], desc: 'Modified for wing joint flexibility during flight.' },
      phalanges: { pts: [[0.15,0.59],[0.85,0.59],[0.90,0.95],[0.10,0.95]], desc: 'Extremely elongated — spread apart to support the wing membrane (patagium).' }
    }
  },
  {
    name: 'Dog',
    silhouetteColor: '#E0C8A8',
    bones: {
      humerus:   { pts: [[0.40,0.05],[0.60,0.05],[0.58,0.30],[0.42,0.30]], desc: 'Robust — supports quadrupedal locomotion and weight bearing.' },
      radius:    { pts: [[0.42,0.31],[0.52,0.31],[0.50,0.52],[0.40,0.52]], desc: 'Strong and straight — bears weight during running and walking.' },
      ulna:      { pts: [[0.52,0.31],[0.62,0.31],[0.60,0.52],[0.50,0.52]], desc: 'Fused partially with radius — provides stability for running.' },
      carpals:   { pts: [[0.38,0.53],[0.62,0.53],[0.60,0.62],[0.40,0.62]], desc: 'Compact arrangement — supports digitigrade (toe-walking) stance.' },
      phalanges: { pts: [[0.32,0.63],[0.68,0.63],[0.66,0.95],[0.34,0.95]], desc: 'Short and sturdy with claws — adapted for running on toes.' }
    }
  },
  {
    name: 'Bird',
    silhouetteColor: '#A9DFBF',
    bones: {
      humerus:   { pts: [[0.38,0.08],[0.62,0.08],[0.58,0.28],[0.42,0.28]], desc: 'Hollow and pneumatic (air-filled) — lightweight for flight.' },
      radius:    { pts: [[0.42,0.29],[0.52,0.29],[0.48,0.48],[0.38,0.48]], desc: 'Thin — works with ulna to allow wing folding.' },
      ulna:      { pts: [[0.52,0.29],[0.62,0.29],[0.58,0.48],[0.48,0.48]], desc: 'Larger than radius — secondary flight feathers attach here.' },
      carpals:   { pts: [[0.36,0.49],[0.62,0.49],[0.60,0.58],[0.38,0.58]], desc: 'Fused into carpometacarpus — rigid structure for flight efficiency.' },
      phalanges: { pts: [[0.25,0.59],[0.75,0.59],[0.78,0.95],[0.22,0.95]], desc: 'Greatly reduced and fused — support primary flight feathers at wing tip.' }
    }
  }
];

// Classification quiz data
const quizQuestions = [
  { pair: ['Human arm', 'Whale flipper'], answer: 'homologous', explanation: 'Same underlying bone structure (humerus, radius, ulna, carpals, phalanges) inherited from a common ancestor, but modified for different functions.' },
  { pair: ['Bird wing', 'Insect wing'], answer: 'analogous', explanation: 'Both are used for flight, but they evolved independently — bird wings have bones while insect wings are made of chitin. This is convergent evolution.' },
  { pair: ['Whale hip bones', '(no function)'], answer: 'vestigial', explanation: 'Whales retain tiny, non-functional pelvic bones — remnants from their four-legged terrestrial ancestors.' },
  { pair: ['Human appendix', '(reduced organ)'], answer: 'vestigial', explanation: 'The appendix is a reduced cecum inherited from herbivorous ancestors where it aided in cellulose digestion.' },
  { pair: ['Bat wing', 'Bird wing'], answer: 'analogous', explanation: 'Both fly, but bat wings use elongated finger bones with a membrane while bird wings use fused hand bones with feathers — different skeletal origins.' },
  { pair: ['Dog forelimb', 'Human arm'], answer: 'homologous', explanation: 'Both share the same bone set from a common mammalian ancestor, modified for different locomotion styles.' },
  { pair: ['Human arm', 'Bat wing'], answer: 'homologous', explanation: 'Same set of bones — humerus, radius, ulna, carpals, phalanges — inherited from a common ancestor but shaped differently by natural selection.' },
  { pair: ['Eye of octopus', 'Eye of human'], answer: 'analogous', explanation: 'Both are camera-type eyes that evolved independently — a classic example of convergent evolution in distantly related lineages.' }
];

let currentQuestion = 0;
let quizScore = 0;
let quizTotal = 0;
let quizFeedback = '';
let feedbackColor = '';
let quizDone = false;

// Buttons
let classifyButtons = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  var mainElement = document.querySelector('main');
  canvas.parent(mainElement);

  // Mode toggle button
  modeButton = createButton('Switch to Quiz Mode');
  modeButton.parent(mainElement);
  modeButton.position(10, drawHeight + 8);
  modeButton.mousePressed(toggleMode);
  modeButton.style('font-size', '14px');
  modeButton.style('padding', '4px 12px');
  modeButton.style('cursor', 'pointer');

  // Show/hide bones toggle
  showBonesToggle = createButton('Hide Bones');
  showBonesToggle.parent(mainElement);
  showBonesToggle.position(190, drawHeight + 8);
  showBonesToggle.mousePressed(toggleBones);
  showBonesToggle.style('font-size', '14px');
  showBonesToggle.style('padding', '4px 12px');
  showBonesToggle.style('cursor', 'pointer');

  // Quiz answer buttons (hidden initially)
  let labels = ['Homologous', 'Analogous', 'Vestigial'];
  let colors = ['#2ECC71', '#3498DB', '#E67E22'];
  for (let i = 0; i < 3; i++) {
    let btn = createButton(labels[i]);
    btn.parent(mainElement);
    btn.position(330 + i * 110, drawHeight + 8);
    btn.style('font-size', '14px');
    btn.style('padding', '4px 16px');
    btn.style('cursor', 'pointer');
    btn.style('background-color', colors[i]);
    btn.style('color', 'white');
    btn.style('border', 'none');
    btn.style('border-radius', '4px');
    btn.hide();
    let answerVal = labels[i].toLowerCase();
    btn.mousePressed(() => checkAnswer(answerVal));
    classifyButtons.push(btn);
  }

  describe('Comparative Anatomy Explorer showing forelimb homology across five vertebrate species with interactive bone highlighting and classification quiz.', LABEL);
}

function draw() {
  updateCanvasSize();

  // Drawing area background
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);

  // Control area background
  fill('white');
  stroke('silver');
  rect(0, drawHeight, canvasWidth, controlHeight);

  // Detect hovered bone in explore mode
  if (mode === 'explore') {
    detectHover();
  }

  // Title
  fill('black');
  noStroke();
  textAlign(CENTER, TOP);
  textSize(Math.min(24, canvasWidth * 0.035));
  text('Comparative Anatomy Explorer', canvasWidth / 2, 8);

  // Subtitle
  textSize(Math.min(13, canvasWidth * 0.02));
  fill('#666');
  if (mode === 'explore') {
    text('Hover over bones to highlight homologous structures across all species', canvasWidth / 2, 34);
  } else {
    if (!quizDone) {
      text('Classify each pair of structures as homologous, analogous, or vestigial', canvasWidth / 2, 34);
    } else {
      text('Quiz complete!', canvasWidth / 2, 34);
    }
  }

  // Draw species forelimbs
  let speciesCount = species.length;
  let boxW = (canvasWidth - margin * 2) / speciesCount - 8;
  let boxH = drawHeight - 90;
  let startY = 52;

  for (let s = 0; s < speciesCount; s++) {
    let sp = species[s];
    let boxX = margin + s * (boxW + 8) + 4;

    // Species box background
    fill(sp.silhouetteColor);
    stroke('#bbb');
    strokeWeight(1);
    rect(boxX, startY, boxW, boxH, 8);

    if (showBones) {
      // Draw each bone
      let boneKeys = Object.keys(sp.bones);
      for (let bk of boneKeys) {
        let bone = sp.bones[bk];
        let baseColor = boneColors[bk];

        // Highlight if hovered
        if (hoveredBone === bk) {
          fill(baseColor);
          stroke('white');
          strokeWeight(3);
        } else {
          // Slightly transparent when not hovered
          let c = color(baseColor);
          c.setAlpha(160);
          fill(c);
          stroke(baseColor);
          strokeWeight(1);
        }

        // Draw bone polygon
        beginShape();
        for (let pt of bone.pts) {
          vertex(boxX + pt[0] * boxW, startY + pt[1] * boxH);
        }
        endShape(CLOSE);
      }
    }

    // Species label
    fill('black');
    noStroke();
    textAlign(CENTER, TOP);
    textSize(Math.min(14, canvasWidth * 0.022));
    text(sp.name, boxX + boxW / 2, startY + boxH + 4);
  }

  // Bone legend (right side or bottom based on space)
  drawBoneLegend(startY);

  // Hovered bone info box
  if (mode === 'explore' && hoveredBone) {
    drawInfoBox();
  }

  // Quiz mode display
  if (mode === 'classify' && !quizDone) {
    drawQuizQuestion();
  }
  if (mode === 'classify' && quizFeedback) {
    drawQuizFeedback();
  }
  if (mode === 'classify' && quizDone) {
    drawQuizComplete();
  }
}

function drawBoneLegend(startY) {
  let legendX = canvasWidth - 120;
  let legendY = startY + 4;
  let sz = 12;

  fill(255, 255, 255, 200);
  stroke('#ccc');
  strokeWeight(1);
  rect(legendX - 8, legendY - 4, 116, 110, 6);

  noStroke();
  textAlign(LEFT, CENTER);
  textSize(11);

  let keys = Object.keys(boneColors);
  for (let i = 0; i < keys.length; i++) {
    let bk = keys[i];
    fill(boneColors[bk]);
    rect(legendX, legendY + i * 20, sz, sz, 2);
    fill('black');
    noStroke();
    text(boneLabelNames[bk], legendX + sz + 6, legendY + i * 20 + sz / 2);
  }
}

function detectHover() {
  hoveredBone = null;
  let speciesCount = species.length;
  let boxW = (canvasWidth - margin * 2) / speciesCount - 8;
  let boxH = drawHeight - 90;
  let startY = 52;

  for (let s = 0; s < speciesCount; s++) {
    let sp = species[s];
    let boxX = margin + s * (boxW + 8) + 4;
    let boneKeys = Object.keys(sp.bones);

    for (let bk of boneKeys) {
      let bone = sp.bones[bk];
      // Simple bounding box hit test
      let xs = bone.pts.map(p => boxX + p[0] * boxW);
      let ys = bone.pts.map(p => startY + p[1] * boxH);
      let minX = Math.min(...xs);
      let maxX = Math.max(...xs);
      let minY = Math.min(...ys);
      let maxY = Math.max(...ys);

      if (mouseX >= minX && mouseX <= maxX && mouseY >= minY && mouseY <= maxY) {
        hoveredBone = bk;
        return;
      }
    }
  }
}

function drawInfoBox() {
  // Find description from first species
  let desc = species[0].bones[hoveredBone].desc;
  let boneName = boneLabelNames[hoveredBone];

  let boxW = Math.min(canvasWidth - 20, 500);
  let boxX = (canvasWidth - boxW) / 2;
  let boxY = drawHeight - 56;

  fill(255, 255, 255, 240);
  stroke(boneColors[hoveredBone]);
  strokeWeight(2);
  rect(boxX, boxY, boxW, 48, 6);

  noStroke();
  fill(boneColors[hoveredBone]);
  textAlign(LEFT, TOP);
  textSize(13);
  text(boneName, boxX + 10, boxY + 6);
  fill('#333');
  textSize(11);
  text(desc, boxX + 10, boxY + 24, boxW - 20, 30);
}

function drawQuizQuestion() {
  if (currentQuestion >= quizQuestions.length) {
    quizDone = true;
    return;
  }
  let q = quizQuestions[currentQuestion];

  let boxW = Math.min(canvasWidth - 20, 460);
  let boxX = (canvasWidth - boxW) / 2;
  let boxY = drawHeight - 60;

  fill(255, 255, 255, 230);
  stroke('#2C3E50');
  strokeWeight(2);
  rect(boxX, boxY, boxW, 50, 6);

  noStroke();
  fill('#2C3E50');
  textAlign(CENTER, TOP);
  textSize(13);
  text('Question ' + (currentQuestion + 1) + ' of ' + quizQuestions.length, boxX + boxW / 2, boxY + 5);
  textSize(14);
  fill('black');
  let pairText = q.pair[0] + '  vs.  ' + q.pair[1];
  text(pairText, boxX + boxW / 2, boxY + 24);
}

function drawQuizFeedback() {
  let boxW = Math.min(canvasWidth - 20, 500);
  let boxX = (canvasWidth - boxW) / 2;
  let boxY = 52;

  fill(feedbackColor === 'green' ? '#EAFAF1' : '#FDEDEC');
  stroke(feedbackColor === 'green' ? '#27AE60' : '#E74C3C');
  strokeWeight(2);
  rect(boxX, boxY, boxW, 50, 6);

  noStroke();
  fill(feedbackColor === 'green' ? '#1E8449' : '#C0392B');
  textAlign(CENTER, TOP);
  textSize(12);
  text(quizFeedback, boxX + 10, boxY + 6, boxW - 20, 44);
}

function drawQuizComplete() {
  let boxW = 300;
  let boxX = (canvasWidth - boxW) / 2;
  let boxY = drawHeight / 2 - 40;

  fill('#EBF5FB');
  stroke('#2980B9');
  strokeWeight(2);
  rect(boxX, boxY, boxW, 80, 10);

  noStroke();
  fill('#1A5276');
  textAlign(CENTER, CENTER);
  textSize(20);
  text('Score: ' + quizScore + ' / ' + quizQuestions.length, boxX + boxW / 2, boxY + 28);
  textSize(14);
  fill('#2C3E50');
  text(quizScore >= 6 ? 'Excellent work!' : 'Keep studying — you\'ll get there!', boxX + boxW / 2, boxY + 56);
}

function checkAnswer(answer) {
  if (quizDone || currentQuestion >= quizQuestions.length) return;

  let q = quizQuestions[currentQuestion];
  quizTotal++;

  if (answer === q.answer) {
    quizScore++;
    quizFeedback = 'Correct! ' + q.explanation;
    feedbackColor = 'green';
  } else {
    quizFeedback = 'Not quite. The answer is ' + q.answer + '. ' + q.explanation;
    feedbackColor = 'red';
  }

  currentQuestion++;
  if (currentQuestion >= quizQuestions.length) {
    quizDone = true;
  }

  // Clear feedback after a delay
  setTimeout(() => {
    quizFeedback = '';
  }, 5000);
}

function toggleMode() {
  if (mode === 'explore') {
    mode = 'classify';
    modeButton.html('Switch to Explore Mode');
    showBonesToggle.hide();
    for (let btn of classifyButtons) btn.show();
    // Reset quiz
    currentQuestion = 0;
    quizScore = 0;
    quizTotal = 0;
    quizFeedback = '';
    quizDone = false;
  } else {
    mode = 'explore';
    modeButton.html('Switch to Quiz Mode');
    showBonesToggle.show();
    for (let btn of classifyButtons) btn.hide();
    quizFeedback = '';
  }
}

function toggleBones() {
  showBones = !showBones;
  showBonesToggle.html(showBones ? 'Hide Bones' : 'Show Bones');
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(containerWidth, containerHeight);
  redraw();
}

function updateCanvasSize() {
  const container = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(container.width);
  canvasWidth = containerWidth;
}
