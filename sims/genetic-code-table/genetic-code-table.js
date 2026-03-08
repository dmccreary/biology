// Genetic Code Table Explorer
// Interactive codon table with mRNA translation tool

let containerWidth;
let canvasWidth = 780;
let drawHeight = 460;
let controlHeight = 40;
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 8;

// UI
let mRNAInput, randomBtn, mutateBtn;

// Codon table data
const BASES = ['U', 'C', 'A', 'G'];
const CODON_TABLE = {};
const AA_NAMES = {};
const AA_PROPERTIES = {};

// Amino acid full names and properties
const AA_INFO = {
    'F': { name: 'Phenylalanine', prop: 'hydrophobic' },
    'L': { name: 'Leucine', prop: 'hydrophobic' },
    'I': { name: 'Isoleucine', prop: 'hydrophobic' },
    'M': { name: 'Methionine', prop: 'hydrophobic' },
    'V': { name: 'Valine', prop: 'hydrophobic' },
    'S': { name: 'Serine', prop: 'polar' },
    'P': { name: 'Proline', prop: 'hydrophobic' },
    'T': { name: 'Threonine', prop: 'polar' },
    'A': { name: 'Alanine', prop: 'hydrophobic' },
    'Y': { name: 'Tyrosine', prop: 'polar' },
    'H': { name: 'Histidine', prop: 'positive' },
    'Q': { name: 'Glutamine', prop: 'polar' },
    'N': { name: 'Asparagine', prop: 'polar' },
    'K': { name: 'Lysine', prop: 'positive' },
    'D': { name: 'Aspartate', prop: 'negative' },
    'E': { name: 'Glutamate', prop: 'negative' },
    'C': { name: 'Cysteine', prop: 'polar' },
    'W': { name: 'Tryptophan', prop: 'hydrophobic' },
    'R': { name: 'Arginine', prop: 'positive' },
    'G': { name: 'Glycine', prop: 'hydrophobic' },
    '*': { name: 'Stop', prop: 'stop' }
};

// Property colors
const PROP_COLORS = {
    hydrophobic: [249, 231, 159],  // yellow
    polar: [171, 235, 198],        // green
    positive: [174, 214, 241],     // blue
    negative: [245, 183, 177],     // red
    stop: [231, 76, 60]            // bright red
};

// Build codon table
function buildCodonTable() {
    const codons = [
        'UUU','UUC','UUA','UUG','CUU','CUC','CUA','CUG',
        'AUU','AUC','AUA','AUG','GUU','GUC','GUA','GUG',
        'UCU','UCC','UCA','UCG','CCU','CCC','CCA','CCG',
        'ACU','ACC','ACA','ACG','GCU','GCC','GCA','GCG',
        'UAU','UAC','UAA','UAG','CAU','CAC','CAA','CAG',
        'AAU','AAC','AAA','AAG','GAU','GAC','GAA','GAG',
        'UGU','UGC','UGA','UGG','CGU','CGC','CGA','CGG',
        'AGU','AGC','AGA','AGG','GGU','GGC','GGA','GGG'
    ];
    const aas = [
        'F','F','L','L','L','L','L','L',
        'I','I','I','M','V','V','V','V',
        'S','S','S','S','P','P','P','P',
        'T','T','T','T','A','A','A','A',
        'Y','Y','*','*','H','H','Q','Q',
        'N','N','K','K','D','D','E','E',
        'C','C','*','W','R','R','R','R',
        'S','S','R','R','G','G','G','G'
    ];
    for (let i = 0; i < codons.length; i++) {
        CODON_TABLE[codons[i]] = aas[i];
    }
}

let highlightedCodon = null;
let highlightedAA = null;

function setup() {
    buildCodonTable();
    updateCanvasSize();
    const canvas = createCanvas(containerWidth, containerHeight);
    const mainEl = document.querySelector('main');
    canvas.parent(mainEl);

    mRNAInput = createInput('AUGGCUAACUAG');
    mRNAInput.parent(mainEl);
    mRNAInput.attribute('placeholder', 'Enter mRNA sequence...');
    mRNAInput.input(onInputChange);

    randomBtn = createButton('Random');
    randomBtn.parent(mainEl);
    randomBtn.mousePressed(generateRandom);

    mutateBtn = createButton('Mutate');
    mutateBtn.parent(mainEl);
    mutateBtn.mousePressed(introduceMutation);

    positionControls();
    textFont('Arial');
    describe('Interactive genetic code table with mRNA translation tool');
}

function positionControls() {
    let y = drawHeight + 8;
    mRNAInput.position(90, y);
    mRNAInput.size(canvasWidth - 280);
    randomBtn.position(canvasWidth - 170, y);
    mutateBtn.position(canvasWidth - 100, y);
}

function onInputChange() {
    // Clean input to only valid RNA bases
    let val = mRNAInput.value().toUpperCase().replace(/[^AUCG]/g, '');
    mRNAInput.value(val);
}

function generateRandom() {
    let seq = 'AUG'; // Always start with start codon
    let len = floor(random(4, 8)) * 3; // 4-8 codons
    for (let i = 3; i < len; i++) {
        seq += BASES[floor(random(4))];
    }
    // Add a stop codon
    let stops = ['UAA', 'UAG', 'UGA'];
    seq += stops[floor(random(3))];
    mRNAInput.value(seq);
}

function introduceMutation() {
    let seq = mRNAInput.value();
    if (seq.length < 3) return;
    // Pick a random position (not the first base of AUG if at start)
    let pos = floor(random(1, seq.length));
    let original = seq[pos];
    let bases = BASES.filter(b => b !== original);
    let newBase = bases[floor(random(bases.length))];
    seq = seq.substring(0, pos) + newBase + seq.substring(pos + 1);
    mRNAInput.value(seq);
}

function draw() {
    updateCanvasSize();
    background('aliceblue');

    stroke('silver');
    strokeWeight(1);
    fill('aliceblue');
    rect(0, 0, canvasWidth, drawHeight);

    fill('white');
    noStroke();
    rect(0, drawHeight, canvasWidth, controlHeight);

    // Title
    fill(30);
    noStroke();
    textAlign(CENTER, TOP);
    textSize(16);
    text('Genetic Code Table Explorer', canvasWidth / 2, 3);

    // Control label
    fill(80);
    textSize(11);
    textAlign(LEFT, CENTER);
    text('mRNA:', 10, drawHeight + 18);

    // Layout: codon table on left, translator on right
    let tableX = margin;
    let tableY = 22;
    let tableW = canvasWidth * 0.52;
    let transX = tableX + tableW + 10;
    let transW = canvasWidth - transX - margin;

    highlightedCodon = null;
    drawCodonTable(tableX, tableY, tableW);
    drawTranslator(transX, tableY, transW);
}

function drawCodonTable(x, y, w) {
    let cellW = (w - 40) / 4;  // 4 columns for second base
    let cellH = 18;
    let headerH = 20;
    let leftMargin = 28;

    // Header: second base
    fill(80);
    noStroke();
    textSize(10);
    textAlign(CENTER, TOP);
    textStyle(BOLD);
    text('Second Base', x + leftMargin + (4 * cellW) / 2, y);
    textStyle(NORMAL);

    for (let j = 0; j < 4; j++) {
        fill(60);
        textSize(11);
        textStyle(BOLD);
        text(BASES[j], x + leftMargin + j * cellW + cellW / 2, y + 14);
        textStyle(NORMAL);
    }

    // Side label: first base
    push();
    fill(80);
    textSize(9);
    textAlign(CENTER, CENTER);
    translate(x + 8, y + headerH + 30 + 8 * cellH);
    rotate(-HALF_PI);
    textStyle(BOLD);
    text('First Base', 0, 0);
    textStyle(NORMAL);
    pop();

    let tableY = y + headerH + 14;

    // Draw cells
    for (let i = 0; i < 4; i++) {      // first base (rows, grouped by 4)
        // First base label
        fill(60);
        noStroke();
        textSize(11);
        textStyle(BOLD);
        textAlign(CENTER, CENTER);
        text(BASES[i], x + 18, tableY + i * 4 * cellH + 2 * cellH);
        textStyle(NORMAL);

        for (let j = 0; j < 4; j++) {  // second base (columns)
            for (let k = 0; k < 4; k++) { // third base (sub-rows)
                let codon = BASES[i] + BASES[j] + BASES[k];
                let aa = CODON_TABLE[codon];
                let info = AA_INFO[aa];
                let row = i * 4 + k;
                let cx = x + leftMargin + j * cellW;
                let cy = tableY + row * cellH;

                // Check hover
                let isHover = mouseX > cx && mouseX < cx + cellW && mouseY > cy && mouseY < cy + cellH;
                if (isHover) {
                    highlightedCodon = codon;
                    highlightedAA = aa;
                }

                // Background
                let col = PROP_COLORS[info.prop];
                fill(isHover ? [col[0] * 0.8, col[1] * 0.8, col[2] * 0.8] : col);
                stroke(isHover ? 40 : 220);
                strokeWeight(isHover ? 1.5 : 0.5);
                rect(cx, cy, cellW - 1, cellH - 1, 1);

                // Text
                fill(aa === '*' ? 255 : 40);
                noStroke();
                textSize(8);
                textAlign(LEFT, CENTER);
                text(codon, cx + 3, cy + cellH / 2);
                textAlign(RIGHT, CENTER);
                textStyle(BOLD);
                text(aa === '*' ? 'Stop' : aa, cx + cellW - 5, cy + cellH / 2);
                textStyle(NORMAL);

                // Third base label (rightmost column)
                if (j === 3) {
                    fill(60);
                    noStroke();
                    textSize(8);
                    textAlign(LEFT, CENTER);
                    text(BASES[k], x + leftMargin + 4 * cellW + 4, cy + cellH / 2);
                }
            }
        }
    }

    // Third base side label
    fill(80);
    noStroke();
    textSize(9);
    textStyle(BOLD);
    textAlign(LEFT, CENTER);
    text('3rd', x + leftMargin + 4 * cellW + 2, tableY - 6);
    textStyle(NORMAL);

    // Hover info box
    if (highlightedCodon) {
        let aa = CODON_TABLE[highlightedCodon];
        let info = AA_INFO[aa];
        let boxY = tableY + 16 * cellH + 8;

        fill(255, 255, 240);
        stroke(180);
        strokeWeight(1);
        rect(x, boxY, w, 36, 4);

        fill(40);
        noStroke();
        textSize(11);
        textAlign(LEFT, CENTER);
        textStyle(BOLD);
        text(highlightedCodon + ' \u2192 ' + (aa === '*' ? 'STOP' : info.name + ' (' + aa + ')'), x + 8, boxY + 12);
        textStyle(NORMAL);
        textSize(10);
        fill(80);
        text('Property: ' + info.prop, x + 8, boxY + 26);

        // Color swatch
        let col = PROP_COLORS[info.prop];
        fill(col);
        noStroke();
        rect(x + w - 30, boxY + 8, 20, 20, 3);
    }

    // Legend
    let legY = tableY + 16 * cellH + 50;
    textSize(9);
    textAlign(LEFT, CENTER);
    let legItems = [
        ['Hydrophobic', 'hydrophobic'],
        ['Polar', 'polar'],
        ['Positive', 'positive'],
        ['Negative', 'negative'],
        ['Stop', 'stop']
    ];
    let legX = x;
    legItems.forEach((item, idx) => {
        fill(PROP_COLORS[item[1]]);
        noStroke();
        rect(legX, legY, 12, 12, 2);
        fill(60);
        text(item[0], legX + 15, legY + 6);
        legX += (idx === 4) ? 0 : (w / 5);
    });
}

function drawTranslator(x, y, w) {
    fill(60);
    noStroke();
    textAlign(LEFT, TOP);
    textSize(13);
    textStyle(BOLD);
    text('mRNA Translator', x, y);
    textStyle(NORMAL);

    let seq = mRNAInput.value().toUpperCase().replace(/[^AUCG]/g, '');
    if (seq.length === 0) {
        fill(150);
        textSize(11);
        text('Type an mRNA sequence below...', x, y + 22);
        return;
    }

    // Parse into codons
    let codons = [];
    for (let i = 0; i + 2 < seq.length; i += 3) {
        codons.push(seq.substring(i, i + 3));
    }

    // Remaining bases
    let remainder = seq.length % 3;
    let remainderStr = remainder > 0 ? seq.substring(seq.length - remainder) : '';

    // Draw codons
    let codonY = y + 22;
    let codonW = 42;
    let codonH = 28;
    let maxPerRow = floor(w / (codonW + 4));
    let stopped = false;

    fill(80);
    noStroke();
    textSize(10);
    text('Codons:', x, codonY);
    codonY += 16;

    let aminoAcidSeq = [];

    for (let i = 0; i < codons.length; i++) {
        let codon = codons[i];
        let aa = CODON_TABLE[codon] || '?';
        let info = AA_INFO[aa];

        let col = i * (codonW + 4);
        let row = floor(col / (maxPerRow * (codonW + 4)));
        let colInRow = i % maxPerRow;
        let cx = x + colInRow * (codonW + 4);
        let cy = codonY + row * (codonH + 30);

        if (stopped) {
            // Gray out codons after stop
            fill(230);
            stroke(200);
        } else if (codon === 'AUG' && i === 0) {
            fill(46, 204, 113, 100);
            stroke(46, 204, 113);
        } else if (aa === '*') {
            fill(231, 76, 60, 100);
            stroke(231, 76, 60);
        } else {
            fill(PROP_COLORS[info.prop]);
            stroke(180);
        }
        strokeWeight(1);
        rect(cx, cy, codonW, codonH, 4);

        // Codon text
        fill(stopped ? 180 : 40);
        noStroke();
        textSize(10);
        textAlign(CENTER, TOP);
        text(codon, cx + codonW / 2, cy + 2);

        // Amino acid below codon
        if (!stopped) {
            textSize(9);
            textStyle(BOLD);
            fill(aa === '*' ? [231, 76, 60] : 40);
            text(aa === '*' ? 'STOP' : aa, cx + codonW / 2, cy + 15);
            textStyle(NORMAL);
            aminoAcidSeq.push(aa === '*' ? 'Stop' : (info ? info.name : '?'));
        }

        if (aa === '*') stopped = true;
    }

    // Amino acid sequence summary
    let summaryY = codonY + (floor((codons.length - 1) / maxPerRow) + 1) * (codonH + 30) + 10;

    fill(60);
    noStroke();
    textSize(11);
    textStyle(BOLD);
    textAlign(LEFT, TOP);
    text('Amino Acid Sequence:', x, summaryY);
    textStyle(NORMAL);

    summaryY += 16;
    let aaStr = '';
    let stopIdx = aminoAcidSeq.indexOf('Stop');
    let displayAAs = stopIdx >= 0 ? aminoAcidSeq.slice(0, stopIdx) : aminoAcidSeq;
    aaStr = displayAAs.join(' - ');
    if (stopIdx >= 0) aaStr += ' | STOP';

    fill(40);
    textSize(10);
    textLeading(14);
    text(aaStr, x, summaryY, w - 5, 60);

    // Stats
    summaryY += 40;
    fill(80);
    textSize(10);
    text('Codons: ' + codons.length + '  |  Amino acids: ' + displayAAs.length + '  |  Bases: ' + seq.length, x, summaryY);

    // Properties summary
    summaryY += 20;
    if (displayAAs.length > 0) {
        let propCounts = { hydrophobic: 0, polar: 0, positive: 0, negative: 0 };
        displayAAs.forEach(name => {
            let aa = Object.entries(AA_INFO).find(([k, v]) => v.name === name);
            if (aa && propCounts[aa[1].prop] !== undefined) {
                propCounts[aa[1].prop]++;
            }
        });
        fill(80);
        textSize(9);
        let propStr = Object.entries(propCounts)
            .filter(([k, v]) => v > 0)
            .map(([k, v]) => k + ': ' + v)
            .join('  |  ');
        text(propStr, x, summaryY);
    }
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
