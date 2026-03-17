// Protein Structure Levels Explorer — Image overlay version
// Students hover over panels to learn about the four levels of protein structure
// Uses text-to-image generated illustration with p5.js interactive overlay
// MicroSim version 2026.02

let containerWidth;
let canvasWidth = 800;
let titleHeight = 36;
let labelHeight = 33;
let imgDisplayHeight = 420;
let infoboxHeight = 130;
let controlHeight = 0;
let canvasHeight = titleHeight + labelHeight + imgDisplayHeight + infoboxHeight + controlHeight;
let containerHeight = canvasHeight;

let proteinImg;
let hoveredPanel = -1;

const panelData = [
  {
    name: 'Primary Structure',
    shortName: 'Primary',
    color: '#2C3E50',
    summary: 'The primary structure is the unique linear sequence of amino acids in a polypeptide chain, read from the N-terminus to the C-terminus. This sequence is encoded directly by the gene\'s DNA and determines all higher levels of structure. Each amino acid is linked to the next by a peptide bond — a covalent bond formed by a condensation reaction between the carboxyl group of one amino acid and the amino group of the next.',
    forces: 'Stabilized by: Covalent peptide bonds between amino acids.',
    apTip: 'Even a single amino acid substitution in the primary sequence (e.g., sickle cell: Glu → Val at position 6 of β-globin) can alter folding and function. The college placement exam frequently tests how primary structure determines all higher levels.'
  },
  {
    name: 'Secondary Structure',
    shortName: 'Secondary',
    color: '#E67E22',
    summary: 'Secondary structure refers to local folding patterns that arise from hydrogen bonds between backbone atoms (not R-groups). The two most common motifs are the alpha helix — a right-handed coil stabilized by H-bonds between every 4th peptide bond — and the beta pleated sheet — flat, zigzag strands aligned side by side with H-bonds running between them. Most proteins contain a mix of both.',
    forces: 'Stabilized by: Hydrogen bonds between backbone C=O and N-H groups.',
    apTip: 'Know that secondary structure involves BACKBONE hydrogen bonds only — not R-group interactions. The college placement exam may ask you to distinguish which bonds stabilize which level. Alpha helices and beta sheets are the two types you must know.'
  },
  {
    name: 'Tertiary Structure',
    shortName: 'Tertiary',
    color: '#27AE60',
    summary: 'Tertiary structure is the complete 3D shape of a single polypeptide chain, determined by interactions between R-groups (side chains). Nonpolar R-groups cluster in the hydrophobic core (away from water), while polar and charged R-groups face outward. The folded shape creates the protein\'s active site and determines its biological function. Four types of R-group interactions contribute: hydrophobic interactions, disulfide bridges (covalent S-S bonds), ionic bonds (salt bridges), and hydrogen bonds between R-groups.',
    forces: 'Stabilized by: Hydrophobic interactions, disulfide bridges, ionic bonds (salt bridges), and H-bonds between R-groups.',
    apTip: 'Tertiary structure is where FUNCTION emerges — the 3D shape creates binding sites, active sites, and recognition surfaces. Denaturation (heat, pH change) disrupts tertiary structure by breaking R-group interactions, but does NOT break peptide bonds (primary structure is preserved).'
  },
  {
    name: 'Quaternary Structure',
    shortName: 'Quaternary',
    color: '#8E44AD',
    summary: 'Quaternary structure exists only in proteins with multiple polypeptide subunits. Hemoglobin is the classic example: four subunits (2 alpha, 2 beta) assemble into a functional tetramer. Each subunit contains a heme group that binds one oxygen molecule. The subunits interact through noncovalent forces at their contact surfaces. Quaternary structure enables cooperative binding — when one subunit binds O₂, it changes shape and increases the other subunits\' affinity for O₂.',
    forces: 'Stabilized by: Same R-group interactions as tertiary, but between different polypeptide subunits (hydrophobic interactions, ionic bonds, H-bonds).',
    apTip: 'Not all proteins have quaternary structure — only those with multiple subunits. Hemoglobin (4 subunits) has it; myoglobin (1 subunit) does not. The college placement exam tests cooperative binding in hemoglobin as a consequence of quaternary structure.'
  }
];

function preload() {
  proteinImg = loadImage('protein-structures.png');
}

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  var mainElement = document.querySelector('main');
  canvas.parent(mainElement);

  describe('Protein Structure Levels Explorer showing the four levels of protein structure — primary, secondary, tertiary, and quaternary — with interactive panel descriptions.', LABEL);
}

function draw() {
  updateCanvasSize();
  background(255);

  // Outer border
  stroke('silver');
  strokeWeight(1);
  noFill();
  rect(0, 0, canvasWidth - 1, canvasHeight - 1);

  // Title
  noStroke();
  fill('#2C3E50');
  textAlign(CENTER, CENTER);
  textSize(Math.min(22, canvasWidth * 0.032));
  textStyle(BOLD);
  text('Four Levels of Protein Structure', canvasWidth / 2, titleHeight / 2);
  textStyle(NORMAL);

  // Column dimensions — primary panel is narrower than the other three
  let baseW = canvasWidth / 4;
  let colWidths = [baseW - 15, baseW - 7, baseW + 8, baseW + 14];
  let colXs = [0];
  for (let i = 1; i < 4; i++) colXs[i] = colXs[i-1] + colWidths[i-1];
  let imgTop = titleHeight + labelHeight + 4;

  // Detect hovered panel
  hoveredPanel = -1;
  if (mouseY >= imgTop && mouseY <= imgTop + imgDisplayHeight && mouseX >= 0 && mouseX <= canvasWidth) {
    for (let i = 3; i >= 0; i--) {
      if (mouseX >= colXs[i]) { hoveredPanel = i; break; }
    }
  }

  // Panel labels
  textSize(Math.min(15, canvasWidth * 0.023));
  textAlign(CENTER, CENTER);
  for (let i = 0; i < 4; i++) {
    let isHovered = (hoveredPanel === i);

    // Label background
    fill(isHovered ? panelData[i].color : '#ECF0F1');
    noStroke();
    rect(colXs[i], titleHeight, colWidths[i], labelHeight);

    // Label text
    fill(isHovered ? 'white' : '#2C3E50');
    textStyle(BOLD);
    text(panelData[i].shortName, colXs[i] + colWidths[i] / 2, titleHeight + labelHeight / 2);
    textStyle(NORMAL);
  }

  // Draw image
  image(proteinImg, 0, imgTop, canvasWidth, imgDisplayHeight);

  // Panel hover highlight
  if (hoveredPanel >= 0) {
    for (let i = 0; i < 4; i++) {
      if (i !== hoveredPanel) {
        fill(255, 255, 255, 120);
        noStroke();
        rect(colXs[i], imgTop, colWidths[i], imgDisplayHeight);
      }
    }
    // Border on hovered panel
    noFill();
    stroke(panelData[hoveredPanel].color);
    strokeWeight(3);
    rect(colXs[hoveredPanel] + 1, imgTop, colWidths[hoveredPanel] - 2, imgDisplayHeight);
  }

  // Panel divider lines
  stroke('#ddd');
  strokeWeight(1);
  for (let i = 1; i < 4; i++) {
    line(colXs[i], imgTop, colXs[i], imgTop + imgDisplayHeight);
  }

  // Infobox area
  let infoTop = imgTop + imgDisplayHeight;
  fill('#F8F9FA');
  stroke('#ddd');
  strokeWeight(1);
  rect(0, infoTop, canvasWidth, infoboxHeight);

  drawInfo(infoTop);
}

function drawInfo(infoTop) {
  noStroke();
  let pad = 12;
  let textW = canvasWidth - pad * 2;

  if (hoveredPanel >= 0) {
    let p = panelData[hoveredPanel];

    // Level name
    fill(p.color);
    textAlign(LEFT, TOP);
    textStyle(BOLD);
    textSize(Math.min(15, canvasWidth * 0.022));
    text(p.name, pad, infoTop + 6);
    textStyle(NORMAL);

    // Forces line
    fill('#555');
    textSize(Math.min(11, canvasWidth * 0.016));
    textStyle(ITALIC);
    text(p.forces, pad, infoTop + 24);
    textStyle(NORMAL);

    // Description
    fill('#333');
    textSize(Math.min(11.5, canvasWidth * 0.017));
    text(p.summary, pad, infoTop + 40, textW, 46);

    // college placement tip
    fill('#B7950B');
    textSize(Math.min(10.5, canvasWidth * 0.015));
    textStyle(ITALIC);
    text('college placement Tip: ' + p.apTip, pad, infoTop + 88, textW, 38);
    textStyle(NORMAL);
  } else {
    fill('#999');
    textAlign(CENTER, CENTER);
    textSize(Math.min(14, canvasWidth * 0.02));
    textStyle(ITALIC);
    text('Hover over a panel to learn about that level of protein structure and its stabilizing forces.', canvasWidth / 2, infoTop + infoboxHeight / 2);
    textStyle(NORMAL);
  }
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
