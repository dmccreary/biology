// Gene Expression Pipeline
// Step-through visualization of eukaryotic gene expression:
// DNA → pre-mRNA → processed mRNA → translation → polypeptide

let containerWidth;
let canvasWidth = 800;
let drawHeight = 480;
let controlHeight = 40;
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 12;

let currentStep = 0;
const totalSteps = 6;
let prevBtn, nextBtn, compareBtn;
let showProkaryote = false;

// Colors
const COL_EXON = [52, 152, 219];     // blue
const COL_INTRON = [189, 195, 199];   // gray
const COL_PROMOTER = [46, 204, 113];  // green
const COL_TERM = [231, 76, 60];       // red
const COL_CAP = [241, 196, 15];       // gold
const COL_TAIL = [230, 126, 34];      // orange
const COL_AA = [
    [231, 76, 60],   // Met - red
    [52, 152, 219],  // Ala - blue
    [155, 89, 182],  // Tyr - purple
    [46, 204, 113],  // Lys - green
    [243, 156, 18],  // Arg - yellow
];
const COL_RIBOSOME = [149, 165, 166];
const COL_NUCLEUS = [200, 210, 220, 100];

const stageNames = [
    '1. DNA Gene Structure',
    '2. Transcription → Pre-mRNA',
    '3. 5\' Cap & Poly-A Tail Added',
    '4. Splicing: Introns Removed',
    '5. mRNA Exits Nucleus',
    '6. Translation → Polypeptide'
];

const stageDescriptions = [
    'The gene on the DNA template strand contains 4 exons (blue) separated by 3 introns (gray). A promoter (green) signals the start of transcription and a terminator (red) marks the end.',
    'RNA polymerase reads the DNA template and synthesizes a complementary pre-mRNA molecule. The pre-mRNA is an exact RNA copy of the gene, including all exons AND introns.',
    'Before leaving the nucleus, the pre-mRNA receives a 5\' cap (gold circle) for ribosome recognition and a poly-A tail (AAAA...) at the 3\' end for stability and nuclear export.',
    'The spliceosome removes introns by cutting them out as lariat loops. The remaining exons are joined together to form the mature mRNA, which is shorter than the pre-mRNA.',
    'The mature mRNA (with cap and tail) exits the nucleus through a nuclear pore and enters the cytoplasm, where ribosomes will translate it into a polypeptide chain.',
    'The ribosome reads the mRNA codons and assembles amino acids (carried by tRNAs) into a polypeptide chain: Met-Ala-Tyr-Lys-Arg. Each amino acid is shown in a distinct color.'
];

// Gene segments for visual representation
const geneSegments = [
    { type: 'promoter', label: 'Promoter' },
    { type: 'exon', label: 'E1' },
    { type: 'intron', label: 'I1' },
    { type: 'exon', label: 'E2' },
    { type: 'intron', label: 'I2' },
    { type: 'exon', label: 'E3' },
    { type: 'intron', label: 'I3' },
    { type: 'exon', label: 'E4' },
    { type: 'terminator', label: 'Term' }
];

const aminoAcids = ['Met', 'Ala', 'Tyr', 'Lys', 'Arg'];

function setup() {
    updateCanvasSize();
    const canvas = createCanvas(containerWidth, containerHeight);
    const mainEl = document.querySelector('main');
    canvas.parent(mainEl);

    prevBtn = createButton('\u25C0 Previous');
    prevBtn.parent(mainEl);
    prevBtn.mousePressed(() => { if (currentStep > 0) currentStep--; });

    nextBtn = createButton('Next \u25B6');
    nextBtn.parent(mainEl);
    nextBtn.mousePressed(() => { if (currentStep < totalSteps - 1) currentStep++; });

    compareBtn = createButton('Compare Prokaryote');
    compareBtn.parent(mainEl);
    compareBtn.mousePressed(() => { showProkaryote = !showProkaryote; });

    positionControls();
    textFont('Arial');
    describe('Gene expression pipeline step-through from DNA to protein');
}

function positionControls() {
    let y = drawHeight + 8;
    prevBtn.position(canvasWidth / 2 - 150, y);
    nextBtn.position(canvasWidth / 2 - 30, y);
    compareBtn.position(canvasWidth / 2 + 80, y);
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
    textSize(17);
    text('Gene Expression Pipeline', canvasWidth / 2, 4);

    // Stage name
    fill(80);
    textSize(13);
    text(stageNames[currentStep], canvasWidth / 2, 24);

    // Step indicator
    drawStepIndicator(canvasWidth / 2 - 100, 42, 200);

    // Main visualization
    let vizY = 62;
    let vizH = showProkaryote ? 200 : 280;

    drawStage(margin + 10, vizY, canvasWidth - 2 * margin - 20, vizH, currentStep);

    // Description panel
    let descY = vizY + vizH + 10;
    fill(255, 255, 255, 220);
    stroke(200);
    strokeWeight(1);
    rect(margin + 10, descY, canvasWidth - 2 * margin - 20, 60, 6);

    fill(50);
    noStroke();
    textSize(11);
    textAlign(LEFT, TOP);
    textLeading(14);
    text(stageDescriptions[currentStep], margin + 20, descY + 8, canvasWidth - 2 * margin - 40, 50);

    // Prokaryote comparison
    if (showProkaryote) {
        let prokY = descY + 70;
        drawProkaryoteComparison(margin + 10, prokY, canvasWidth - 2 * margin - 20, 90);
    }

    prevBtn.elt.disabled = (currentStep === 0);
    nextBtn.elt.disabled = (currentStep === totalSteps - 1);
    compareBtn.html(showProkaryote ? 'Hide Prokaryote' : 'Compare Prokaryote');
}

function drawStepIndicator(x, y, w) {
    let stepW = w / totalSteps;
    for (let i = 0; i < totalSteps; i++) {
        let sx = x + i * stepW + stepW / 2;
        fill(i <= currentStep ? [52, 152, 219] : [200, 210, 220]);
        noStroke();
        ellipse(sx, y, 10, 10);
        if (i < totalSteps - 1) {
            fill(i < currentStep ? [52, 152, 219] : [200, 210, 220]);
            rect(sx + 5, y - 1.5, stepW - 10, 3);
        }
    }
}

function drawStage(x, y, w, h, step) {
    let segW = w / 11;
    let segH = 30;
    let centerY = y + h * 0.35;

    switch(step) {
        case 0: // DNA gene structure
            drawDNAGene(x, centerY, w, segW, segH);
            break;
        case 1: // Transcription
            drawDNAGene(x, centerY - 30, w, segW, segH * 0.8);
            drawPreMRNA(x, centerY + 40, w, segW, segH);
            drawRNAPol(x + w * 0.6, centerY + 5);
            break;
        case 2: // Cap and tail
            drawPreMRNAWithCapTail(x, centerY, w, segW, segH);
            break;
        case 3: // Splicing
            drawSplicing(x, centerY, w, segW, segH);
            break;
        case 4: // Nuclear export
            drawNuclearExport(x, y, w, h);
            break;
        case 5: // Translation
            drawTranslation(x, y, w, h);
            break;
    }
}

function getSegmentColor(type) {
    switch(type) {
        case 'exon': return COL_EXON;
        case 'intron': return COL_INTRON;
        case 'promoter': return COL_PROMOTER;
        case 'terminator': return COL_TERM;
        default: return [200, 200, 200];
    }
}

function drawDNAGene(x, y, w, segW, segH) {
    let sx = x + 10;
    // Draw DNA double helix indicator
    fill(80);
    noStroke();
    textSize(10);
    textAlign(RIGHT, CENTER);
    text('DNA:', x + 5, y + segH / 2);

    //geneSegments.forEach((seg, i) {
  geneSegments.forEach((seg, i) => {
        let col = getSegmentColor(seg.type);
        fill(col);
        stroke(col[0] * 0.7, col[1] * 0.7, col[2] * 0.7);
        strokeWeight(1);
        rect(sx + i * segW, y, segW - 2, segH, 3);

        fill(255);
        noStroke();
        textSize(9);
        textAlign(CENTER, CENTER);
        text(seg.label, sx + i * segW + segW / 2 - 1, y + segH / 2);
    });

    // Arrow
    fill(80);
    noStroke();
    textSize(9);
    textAlign(LEFT, CENTER);
    text('\u2192 3\'', sx + geneSegments.length * segW + 4, y + segH / 2);
    textAlign(RIGHT, CENTER);
    text('5\' ', sx - 2, y + segH / 2);
}

function drawPreMRNA(x, y, w, segW, segH) {
    let sx = x + 10;
    fill(80);
    noStroke();
    textSize(10);
    textAlign(RIGHT, CENTER);
    text('pre-mRNA:', x + 5, y + segH / 2);

    // Skip promoter and terminator for RNA
    let rnaSegs = geneSegments.filter(s => s.type === 'exon' || s.type === 'intron');
    let rnaW = segW;
    rnaSegs.forEach((seg, i) => {
        let col = getSegmentColor(seg.type);
        fill(col[0], col[1], col[2], 200);
        stroke(col[0] * 0.7, col[1] * 0.7, col[2] * 0.7);
        strokeWeight(1);
        rect(sx + segW + i * rnaW, y, rnaW - 2, segH, 3);

        fill(255);
        noStroke();
        textSize(9);
        textAlign(CENTER, CENTER);
        text(seg.label, sx + segW + i * rnaW + rnaW / 2 - 1, y + segH / 2);
    });
}

function drawRNAPol(x, y) {
    fill(180, 120, 180, 180);
    noStroke();
    ellipse(x, y, 35, 25);
    fill(255);
    textSize(7);
    textAlign(CENTER, CENTER);
    text('RNA Pol', x, y);
    // Arrow
    stroke(180, 120, 180);
    strokeWeight(1.5);
    line(x, y + 13, x, y + 25);
    line(x - 4, y + 21, x, y + 25);
    line(x + 4, y + 21, x, y + 25);
}

function drawPreMRNAWithCapTail(x, y, w, segW, segH) {
    let sx = x + 50;
    let rnaSegs = geneSegments.filter(s => s.type === 'exon' || s.type === 'intron');
    let rnaW = segW;

    // 5' cap
    fill(COL_CAP);
    stroke(COL_CAP[0] * 0.7, COL_CAP[1] * 0.7, COL_CAP[2] * 0.7);
    strokeWeight(1);
    ellipse(sx - 5, y + segH / 2, 20, 20);
    fill(80);
    noStroke();
    textSize(7);
    textAlign(CENTER, CENTER);
    text('5\'cap', sx - 5, y + segH / 2);

    // RNA segments
    rnaSegs.forEach((seg, i) => {
        let col = getSegmentColor(seg.type);
        fill(col[0], col[1], col[2], 200);
        stroke(col[0] * 0.7, col[1] * 0.7, col[2] * 0.7);
        strokeWeight(1);
        rect(sx + 8 + i * rnaW, y, rnaW - 2, segH, 3);
        fill(255);
        noStroke();
        textSize(9);
        textAlign(CENTER, CENTER);
        text(seg.label, sx + 8 + i * rnaW + rnaW / 2 - 1, y + segH / 2);
    });

    // Poly-A tail
    let tailX = sx + 8 + rnaSegs.length * rnaW + 5;
    fill(COL_TAIL);
    noStroke();
    textSize(10);
    textAlign(LEFT, CENTER);
    text('AAAAAAA', tailX, y + segH / 2);
    textSize(7);
    fill(80);
    text(' (poly-A tail)', tailX + 55, y + segH / 2);

    // Labels
    fill(80);
    noStroke();
    textSize(10);
    textAlign(RIGHT, CENTER);
    text('pre-mRNA:', x + 45, y + segH / 2);
}

function drawSplicing(x, y, w, segW, segH) {
    let sx = x + 50;

    // Pre-mRNA with introns being removed (top)
    fill(80);
    noStroke();
    textSize(10);
    textAlign(RIGHT, CENTER);
    text('Before:', x + 45, y - 15 + segH / 2);

    let rnaSegs = geneSegments.filter(s => s.type === 'exon' || s.type === 'intron');
    let rnaW = segW;
    rnaSegs.forEach((seg, i) => {
        let col = getSegmentColor(seg.type);
        let alpha = seg.type === 'intron' ? 100 : 200;
        fill(col[0], col[1], col[2], alpha);
        stroke(col[0] * 0.7, col[1] * 0.7, col[2] * 0.7);
        strokeWeight(seg.type === 'intron' ? 2 : 1);
        if (seg.type === 'intron') {
            strokeWeight(2);
            stroke(231, 76, 60, 150);
        }
        rect(sx + i * rnaW, y - 15, rnaW - 2, segH * 0.8, 3);

        fill(seg.type === 'intron' ? [231, 76, 60] : 255);
        noStroke();
        textSize(8);
        textAlign(CENTER, CENTER);
        text(seg.type === 'intron' ? '\u2717' : seg.label, sx + i * rnaW + rnaW / 2 - 1, y - 15 + segH * 0.4);
    });

    // Arrow
    fill(80);
    noStroke();
    textSize(16);
    textAlign(CENTER, CENTER);
    text('\u2193', sx + rnaSegs.length * rnaW / 2, y + segH * 0.6);
    textSize(8);
    text('Spliceosome', sx + rnaSegs.length * rnaW / 2, y + segH * 0.6 + 14);

    // Mature mRNA (bottom) - only exons
    let matureY = y + segH + 25;
    fill(80);
    noStroke();
    textSize(10);
    textAlign(RIGHT, CENTER);
    text('After:', x + 45, matureY + segH / 2);

    // 5' cap
    fill(COL_CAP);
    stroke(COL_CAP[0] * 0.7, COL_CAP[1] * 0.7, COL_CAP[2] * 0.7);
    strokeWeight(1);
    ellipse(sx - 5, matureY + segH / 2, 18, 18);
    fill(80);
    noStroke();
    textSize(6);
    textAlign(CENTER, CENTER);
    text('5\'cap', sx - 5, matureY + segH / 2);

    let exonSegs = rnaSegs.filter(s => s.type === 'exon');
    let exonW = segW * 1.3;
    exonSegs.forEach((seg, i) => {
        fill(COL_EXON[0], COL_EXON[1], COL_EXON[2], 220);
        stroke(COL_EXON[0] * 0.7, COL_EXON[1] * 0.7, COL_EXON[2] * 0.7);
        strokeWeight(1);
        rect(sx + 8 + i * exonW, matureY, exonW - 3, segH, 3);
        fill(255);
        noStroke();
        textSize(9);
        textAlign(CENTER, CENTER);
        text(seg.label, sx + 8 + i * exonW + exonW / 2, matureY + segH / 2);
    });

    // Poly-A tail
    let tailX = sx + 8 + exonSegs.length * exonW + 3;
    fill(COL_TAIL);
    noStroke();
    textSize(10);
    textAlign(LEFT, CENTER);
    text('AAAA', tailX, matureY + segH / 2);

    fill(46, 204, 113);
    textSize(9);
    text('  Mature mRNA', tailX + 35, matureY + segH / 2);
}

function drawNuclearExport(x, y, w, h) {
    let centerX = x + w / 2;
    let centerY = y + h * 0.45;

    // Nucleus boundary
    fill(COL_NUCLEUS);
    stroke(100, 130, 160);
    strokeWeight(2);
    drawingContext.setLineDash([6, 4]);
    ellipse(centerX - w * 0.15, centerY, w * 0.45, h * 0.7);
    drawingContext.setLineDash([]);

    fill(100, 130, 160);
    noStroke();
    textSize(10);
    textAlign(CENTER, TOP);
    text('NUCLEUS', centerX - w * 0.15, y + 5);

    fill(100);
    textSize(10);
    textAlign(CENTER, TOP);
    text('CYTOPLASM', centerX + w * 0.3, y + 5);

    // mRNA inside nucleus (left)
    let mRNAx = centerX - w * 0.25;
    drawMiniMRNA(mRNAx, centerY, 120);

    // Arrow through nuclear pore
    stroke(80);
    strokeWeight(2);
    let arrowX1 = centerX - w * 0.15 + w * 0.22;
    line(arrowX1, centerY, arrowX1 + 60, centerY);
    line(arrowX1 + 54, centerY - 5, arrowX1 + 60, centerY);
    line(arrowX1 + 54, centerY + 5, arrowX1 + 60, centerY);

    fill(80);
    noStroke();
    textSize(8);
    textAlign(CENTER, BOTTOM);
    text('Nuclear pore', arrowX1 + 30, centerY - 6);

    // mRNA in cytoplasm (right)
    drawMiniMRNA(centerX + w * 0.25, centerY, 120);
}

function drawMiniMRNA(cx, cy, totalW) {
    let exonW = totalW / 5;

    // Cap
    fill(COL_CAP);
    noStroke();
    ellipse(cx - totalW / 2, cy, 12, 12);

    // Exons
    for (let i = 0; i < 4; i++) {
        fill(COL_EXON);
        noStroke();
        rect(cx - totalW / 2 + 8 + i * exonW, cy - 8, exonW - 2, 16, 2);
    }

    // Tail
    fill(COL_TAIL);
    noStroke();
    textSize(8);
    textAlign(LEFT, CENTER);
    text('AAA', cx - totalW / 2 + 8 + 4 * exonW + 2, cy);
}

function drawTranslation(x, y, w, h) {
    let centerX = x + w / 2;
    let mRNAy = y + h * 0.3;

    // mRNA strand
    drawMiniMRNA(centerX - 40, mRNAy, 200);

    // Ribosome
    fill(COL_RIBOSOME[0], COL_RIBOSOME[1], COL_RIBOSOME[2], 150);
    stroke(COL_RIBOSOME[0] * 0.7, COL_RIBOSOME[1] * 0.7, COL_RIBOSOME[2] * 0.7);
    strokeWeight(2);
    // Large subunit
    arc(centerX, mRNAy - 10, 80, 50, PI, 0, CHORD);
    // Small subunit
    arc(centerX, mRNAy + 10, 60, 30, 0, PI, CHORD);

    fill(80);
    noStroke();
    textSize(7);
    textAlign(CENTER, CENTER);
    text('Ribosome', centerX, mRNAy - 18);

    // Polypeptide chain
    let chainY = y + h * 0.65;
    fill(60);
    noStroke();
    textSize(11);
    textAlign(CENTER, BOTTOM);
    text('Polypeptide Chain:', centerX, chainY - 5);

    let aaSize = 28;
    let startX = centerX - (aminoAcids.length * (aaSize + 6)) / 2;

    for (let i = 0; i < aminoAcids.length; i++) {
        let ax = startX + i * (aaSize + 6);

        // Connection line
        if (i > 0) {
            stroke(80);
            strokeWeight(2);
            line(ax - 6, chainY + aaSize / 2, ax, chainY + aaSize / 2);
        }

        // Amino acid circle
        fill(COL_AA[i]);
        stroke(COL_AA[i][0] * 0.7, COL_AA[i][1] * 0.7, COL_AA[i][2] * 0.7);
        strokeWeight(1.5);
        ellipse(ax + aaSize / 2, chainY + aaSize / 2, aaSize, aaSize);

        fill(255);
        noStroke();
        textSize(9);
        textAlign(CENTER, CENTER);
        text(aminoAcids[i], ax + aaSize / 2, chainY + aaSize / 2);
    }

    // Stop indicator
    let stopX = startX + aminoAcids.length * (aaSize + 6);
    fill(231, 76, 60);
    noStroke();
    textSize(10);
    textAlign(LEFT, CENTER);
    text('STOP', stopX, chainY + aaSize / 2);
}

function drawProkaryoteComparison(x, y, w, h) {
    fill(255, 248, 230);
    stroke(200, 180, 120);
    strokeWeight(1);
    rect(x, y, w, h, 6);

    fill(60);
    noStroke();
    textSize(12);
    textStyle(BOLD);
    textAlign(LEFT, TOP);
    text('Prokaryote Comparison', x + 10, y + 6);
    textStyle(NORMAL);

    textSize(10);
    textLeading(14);
    text(
        'In prokaryotes, there is NO mRNA processing:\n' +
        '\u2022 No 5\' cap or poly-A tail\n' +
        '\u2022 No introns to splice out (genes are continuous)\n' +
        '\u2022 No nuclear envelope — transcription and translation happen simultaneously\n' +
        '\u2022 Ribosomes attach to mRNA while it is still being transcribed (coupled transcription-translation)',
        x + 10, y + 24, w - 20, h - 30
    );
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
