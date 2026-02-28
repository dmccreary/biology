// Functional Groups Explorer MicroSim
// Interactive infographic: 7 biological functional groups
// MicroSim template version 2026.02

// Canvas dimensions - REQUIRED structure
let canvasWidth = 400;
let drawHeight = 480;
let controlHeight = 0; // No control area — buttons are drawn in the canvas
let canvasHeight = drawHeight + controlHeight;
let margin = 15;
let defaultTextSize = 16;

// Selected group index (0 = Hydroxyl default)
let selectedGroup = 0;

// Functional group data
let groups = [
    {
        name: 'Hydroxyl',
        formula: '—OH',
        color: '#4CAF50',
        properties: 'Polar; forms hydrogen bonds with water. Makes molecules hydrophilic and soluble. Acts as neither acid nor base at physiological pH.',
        biological: 'Found in sugars (glucose), alcohols (ethanol). The many —OH groups on glucose make it highly water-soluble for transport in blood.',
        atoms: function(cx, cy, s) { drawHydroxyl(cx, cy, s); }
    },
    {
        name: 'Carbonyl',
        formula: 'C=O',
        color: '#FF9800',
        properties: 'Polar due to C=O double bond. Oxygen is electronegative (3.44). If terminal → aldehyde; if internal → ketone.',
        biological: 'Aldehydes in glucose (open chain form); ketones in fructose and dihydroxyacetone phosphate (DHAP) in glycolysis.',
        atoms: function(cx, cy, s) { drawCarbonyl(cx, cy, s); }
    },
    {
        name: 'Carboxyl',
        formula: '—COOH',
        color: '#F44336',
        properties: 'Acidic — donates H⁺ at physiological pH, becoming —COO⁻. Polar and hydrophilic. pKa typically ~2–5.',
        biological: 'Found in amino acids (C-terminus), fatty acids, citric acid (Krebs cycle). Ionized form dominates at pH 7.4.',
        atoms: function(cx, cy, s) { drawCarboxyl(cx, cy, s); }
    },
    {
        name: 'Amino',
        formula: '—NH₂',
        color: '#2196F3',
        properties: 'Basic — accepts H⁺ at physiological pH, becoming —NH₃⁺. Polar and hydrophilic. pKa typically ~9–10.',
        biological: 'Found in amino acids (N-terminus), nucleotide bases (adenine, cytosine, guanine). Key to peptide bond formation.',
        atoms: function(cx, cy, s) { drawAmino(cx, cy, s); }
    },
    {
        name: 'Sulfhydryl',
        formula: '—SH',
        color: '#FFC107',
        properties: 'Weakly polar. Two —SH groups can oxidize to form a disulfide bond (S—S), which stabilizes protein tertiary structure.',
        biological: 'Found in cysteine. Disulfide bridges in insulin, antibodies, and keratin. Critical for protein folding and stability.',
        atoms: function(cx, cy, s) { drawSulfhydryl(cx, cy, s); }
    },
    {
        name: 'Phosphate',
        formula: '—OPO₃²⁻',
        color: '#9C27B0',
        properties: 'Strongly negative (up to −2 charge). Very hydrophilic. Transfers between molecules store and release energy.',
        biological: 'Found in ATP, DNA/RNA backbone, phospholipids. Phosphorylation activates/deactivates enzymes in signal transduction.',
        atoms: function(cx, cy, s) { drawPhosphate(cx, cy, s); }
    },
    {
        name: 'Methyl',
        formula: '—CH₃',
        color: '#9E9E9E',
        properties: 'Nonpolar and hydrophobic. No hydrogen bonding. Affects gene expression when added to DNA (methylation).',
        biological: 'DNA methylation silences genes (epigenetics). Found in membrane lipids. Methyl groups on histones regulate chromatin structure.',
        atoms: function(cx, cy, s) { drawMethyl(cx, cy, s); }
    }
];

function setup() {
    updateCanvasSize();
    const canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent(document.querySelector('main'));
    textFont('Arial');
    describe('Interactive explorer showing 7 biological functional groups with structural formulas, chemical properties, and biological examples', LABEL);
}

function draw() {
    updateCanvasSize();

    // Drawing area
    fill('aliceblue');
    stroke('silver');
    rect(0, 0, canvasWidth, drawHeight);

    // Title
    noStroke();
    fill('black');
    textSize(20);
    textAlign(CENTER, TOP);
    text('Functional Groups Explorer', canvasWidth / 2, 8);

    // Layout: left buttons | center structure | right info
    let leftW = canvasWidth * 0.22;
    let centerW = canvasWidth * 0.34;
    let rightW = canvasWidth * 0.44;
    let topY = 38;
    let panelH = drawHeight - topY - 10;

    drawButtonPanel(margin, topY, leftW - margin, panelH);
    drawStructurePanel(leftW, topY, centerW, panelH);
    drawInfoPanel(leftW + centerW, topY, rightW - margin, panelH);
}

function drawButtonPanel(x, y, w, h) {
    let btnH = 42;
    let gap = 6;
    let totalBtnsH = groups.length * btnH + (groups.length - 1) * gap;
    let startY = y + (h - totalBtnsH) / 2;

    for (let i = 0; i < groups.length; i++) {
        let by = startY + i * (btnH + gap);
        let isSelected = (i === selectedGroup);

        // Button background
        if (isSelected) {
            fill(groups[i].color);
            stroke(40);
            strokeWeight(2);
        } else {
            fill(255);
            stroke(180);
            strokeWeight(1);
        }
        rect(x, by, w, btnH, 6);

        // Button text
        noStroke();
        fill(isSelected ? 'white' : 60);
        textSize(12);
        textAlign(CENTER, CENTER);
        text(groups[i].name, x + w / 2, by + btnH / 2 - 7);

        // Formula below name
        textSize(10);
        fill(isSelected ? color(255, 255, 255, 200) : 120);
        text(groups[i].formula, x + w / 2, by + btnH / 2 + 9);

        // Store hit area
        groups[i]._btn = { x: x, y: by, w: w, h: btnH };
    }
}

function drawStructurePanel(x, y, w, h) {
    // Panel border
    stroke(220);
    strokeWeight(1);
    fill(255);
    rect(x + 4, y, w - 8, h, 6);

    // Label
    noStroke();
    fill(100);
    textSize(11);
    textAlign(CENTER, TOP);
    text('Structural Formula', x + w / 2, y + 6);

    // Draw the structure
    let cx = x + w / 2;
    let cy = y + h * 0.45;
    let s = min(w, h) * 0.28;

    groups[selectedGroup].atoms(cx, cy, s);

    // Partial charge note
    noStroke();
    fill(120);
    textSize(10);
    textAlign(CENTER, BOTTOM);
    if (selectedGroup !== 6) { // Not methyl (nonpolar)
        text('Partial charges shown', x + w / 2, y + h - 6);
    } else {
        text('Nonpolar — no partial charges', x + w / 2, y + h - 6);
    }
}

function drawInfoPanel(x, y, w, h) {
    let g = groups[selectedGroup];
    let padX = 8;
    let padY = 8;

    // Properties box
    let propH = h * 0.45;
    stroke(220);
    strokeWeight(1);
    fill(252);
    rect(x, y, w, propH, 6);

    noStroke();
    fill(g.color);
    textSize(13);
    textAlign(LEFT, TOP);
    text('Properties', x + padX, y + padY);

    fill(50);
    textSize(11);
    textAlign(LEFT, TOP);
    drawWrappedText(g.properties, x + padX, y + padY + 20, w - padX * 2, 14);

    // Biological example box
    let bioY = y + propH + 10;
    let bioH = h - propH - 10;
    stroke(220);
    strokeWeight(1);
    fill(252);
    rect(x, bioY, w, bioH, 6);

    noStroke();
    fill(g.color);
    textSize(13);
    textAlign(LEFT, TOP);
    text('Biological Example', x + padX, bioY + padY);

    fill(50);
    textSize(11);
    textAlign(LEFT, TOP);
    drawWrappedText(g.biological, x + padX, bioY + padY + 20, w - padX * 2, 14);
}

function drawWrappedText(txt, x, y, maxW, lineH) {
    let words = txt.split(' ');
    let currentLine = '';
    let cy = y;

    for (let i = 0; i < words.length; i++) {
        let testLine = currentLine + (currentLine ? ' ' : '') + words[i];
        if (textWidth(testLine) > maxW && currentLine) {
            noStroke();
            text(currentLine, x, cy);
            currentLine = words[i];
            cy += lineH;
        } else {
            currentLine = testLine;
        }
    }
    if (currentLine) {
        noStroke();
        text(currentLine, x, cy);
    }
}

// --- Structure Drawing Functions ---

function drawAtom(x, y, label, atomColor, r) {
    noStroke();
    fill(atomColor);
    ellipse(x, y, r * 2, r * 2);
    fill('white');
    textSize(14);
    textAlign(CENTER, CENTER);
    noStroke();
    text(label, x, y);
}

function drawBond(x1, y1, x2, y2, bondType) {
    stroke(80);
    strokeWeight(2);
    if (bondType === 2) {
        let dx = y2 - y1;
        let dy = -(x2 - x1);
        let len = sqrt(dx * dx + dy * dy);
        let off = 3;
        dx = dx / len * off;
        dy = dy / len * off;
        line(x1 + dx, y1 + dy, x2 + dx, y2 + dy);
        line(x1 - dx, y1 - dy, x2 - dx, y2 - dy);
    } else {
        line(x1, y1, x2, y2);
    }
}

function drawPartialCharge(x, y, chargeType) {
    noStroke();
    fill(chargeType === '-' ? color(200, 50, 50) : color(50, 50, 200));
    textSize(13);
    textAlign(CENTER, CENTER);
    let symbol = chargeType === '-' ? '\u03B4\u207B' : '\u03B4\u207A';
    text(symbol, x, y);
}

function drawRGroupStub(x, y, s) {
    stroke(160);
    strokeWeight(2);
    let rx = x - s * 0.8;
    line(rx, y, x, y);
    noStroke();
    fill(160);
    textSize(14);
    textAlign(CENTER, CENTER);
    text('R', rx - 12, y);
}

function drawHydroxyl(cx, cy, s) {
    // R — O — H
    let oX = cx;
    let oY = cy;
    let hX = cx + s * 0.9;
    let hY = cy - s * 0.3;

    drawRGroupStub(oX - s * 0.15, oY, s);
    drawBond(oX, oY, hX, hY, 1);
    drawAtom(oX, oY, 'O', color(220, 50, 50), 20);
    drawAtom(hX, hY, 'H', color(200, 200, 200), 15);

    drawPartialCharge(oX, oY - 28, '-');
    drawPartialCharge(hX + 12, hY - 12, '+');
}

function drawCarbonyl(cx, cy, s) {
    // R — C = O
    let cX = cx - s * 0.2;
    let cY = cy;
    let oX = cx + s * 0.7;
    let oY = cy - s * 0.1;

    drawRGroupStub(cX - s * 0.15, cY, s);
    drawBond(cX, cY, oX, oY, 2);
    drawAtom(cX, cY, 'C', color(80, 80, 80), 20);
    drawAtom(oX, oY, 'O', color(220, 50, 50), 20);

    drawPartialCharge(cX, cY + 28, '+');
    drawPartialCharge(oX, oY - 28, '-');

    // Second R on other side of C
    stroke(160);
    strokeWeight(2);
    line(cX, cY, cX, cY + s * 0.7);
    noStroke();
    fill(160);
    textSize(14);
    textAlign(CENTER, CENTER);
    text("R'", cX, cY + s * 0.7 + 14);
}

function drawCarboxyl(cx, cy, s) {
    // R — C(=O)(—OH)
    let cX = cx - s * 0.15;
    let cY = cy;
    let oTopX = cX + s * 0.5;
    let oTopY = cY - s * 0.7;
    let oBottomX = cX + s * 0.5;
    let oBottomY = cY + s * 0.5;
    let hX = oBottomX + s * 0.6;
    let hY = oBottomY + s * 0.2;

    drawRGroupStub(cX - s * 0.15, cY, s);
    drawBond(cX, cY, oTopX, oTopY, 2);
    drawBond(cX, cY, oBottomX, oBottomY, 1);
    drawBond(oBottomX, oBottomY, hX, hY, 1);

    drawAtom(cX, cY, 'C', color(80, 80, 80), 20);
    drawAtom(oTopX, oTopY, 'O', color(220, 50, 50), 20);
    drawAtom(oBottomX, oBottomY, 'O', color(220, 50, 50), 20);
    drawAtom(hX, hY, 'H', color(200, 200, 200), 15);

    drawPartialCharge(oTopX + 20, oTopY, '-');
    drawPartialCharge(hX + 12, hY - 12, '+');
}

function drawAmino(cx, cy, s) {
    // R — N(—H)(—H)
    let nX = cx;
    let nY = cy;
    let h1X = nX + s * 0.65;
    let h1Y = nY - s * 0.55;
    let h2X = nX + s * 0.65;
    let h2Y = nY + s * 0.55;

    drawRGroupStub(nX - s * 0.15, nY, s);
    drawBond(nX, nY, h1X, h1Y, 1);
    drawBond(nX, nY, h2X, h2Y, 1);

    drawAtom(nX, nY, 'N', color(50, 50, 220), 20);
    drawAtom(h1X, h1Y, 'H', color(200, 200, 200), 15);
    drawAtom(h2X, h2Y, 'H', color(200, 200, 200), 15);

    drawPartialCharge(nX, nY - 28, '-');
    drawPartialCharge(h1X + 12, h1Y, '+');
    drawPartialCharge(h2X + 12, h2Y, '+');
}

function drawSulfhydryl(cx, cy, s) {
    // R — S — H
    let sX = cx;
    let sY = cy;
    let hX = cx + s * 0.9;
    let hY = cy - s * 0.25;

    drawRGroupStub(sX - s * 0.15, sY, s);
    drawBond(sX, sY, hX, hY, 1);
    drawAtom(sX, sY, 'S', color(200, 180, 40), 20);
    drawAtom(hX, hY, 'H', color(200, 200, 200), 15);

    drawPartialCharge(sX, sY - 28, '-');
    drawPartialCharge(hX + 12, hY - 12, '+');
}

function drawPhosphate(cx, cy, s) {
    // Phosphate: P with 4 oxygens
    let pX = cx;
    let pY = cy;
    let oTopX = pX;
    let oTopY = pY - s * 0.8;
    let oRightX = pX + s * 0.8;
    let oRightY = pY;
    let oBottomX = pX;
    let oBottomY = pY + s * 0.8;
    let oLeftX = pX - s * 0.8;
    let oLeftY = pY;

    drawBond(pX, pY, oTopX, oTopY, 2);
    drawBond(pX, pY, oRightX, oRightY, 1);
    drawBond(pX, pY, oBottomX, oBottomY, 1);
    drawBond(pX, pY, oLeftX, oLeftY, 1);

    // R stub on left O
    stroke(160);
    strokeWeight(2);
    line(oLeftX - 20, oLeftY, oLeftX, oLeftY);
    noStroke();
    fill(160);
    textSize(14);
    textAlign(CENTER, CENTER);
    text('R', oLeftX - 32, oLeftY);

    drawAtom(pX, pY, 'P', color(150, 50, 180), 20);
    drawAtom(oTopX, oTopY, 'O', color(220, 50, 50), 18);
    drawAtom(oRightX, oRightY, 'O\u207B', color(220, 50, 50), 18);
    drawAtom(oBottomX, oBottomY, 'O\u207B', color(220, 50, 50), 18);
    drawAtom(oLeftX, oLeftY, 'O', color(220, 50, 50), 18);

    drawPartialCharge(oTopX + 18, oTopY, '-');
    drawPartialCharge(oRightX, oRightY - 22, '-');
    drawPartialCharge(oBottomX + 18, oBottomY, '-');
}

function drawMethyl(cx, cy, s) {
    // R — C(—H)(—H)(—H)
    let cX = cx;
    let cY = cy;
    let h1X = cX + s * 0.7;
    let h1Y = cY - s * 0.6;
    let h2X = cX + s * 0.85;
    let h2Y = cY + s * 0.2;
    let h3X = cX + s * 0.15;
    let h3Y = cY + s * 0.75;

    drawRGroupStub(cX - s * 0.15, cY, s);
    drawBond(cX, cY, h1X, h1Y, 1);
    drawBond(cX, cY, h2X, h2Y, 1);
    drawBond(cX, cY, h3X, h3Y, 1);

    drawAtom(cX, cY, 'C', color(80, 80, 80), 20);
    drawAtom(h1X, h1Y, 'H', color(200, 200, 200), 15);
    drawAtom(h2X, h2Y, 'H', color(200, 200, 200), 15);
    drawAtom(h3X, h3Y, 'H', color(200, 200, 200), 15);
    // No partial charges — nonpolar
}

// --- Interaction ---

function mousePressed() {
    for (let i = 0; i < groups.length; i++) {
        let b = groups[i]._btn;
        if (b && mouseX >= b.x && mouseX <= b.x + b.w &&
            mouseY >= b.y && mouseY <= b.y + b.h) {
            selectedGroup = i;
            return;
        }
    }
}

function windowResized() {
    updateCanvasSize();
    resizeCanvas(canvasWidth, canvasHeight);
}

function updateCanvasSize() {
    const container = document.querySelector('main');
    if (container) {
        canvasWidth = container.offsetWidth;
    }
}
