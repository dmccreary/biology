// Interactive Pedigree Analyzer
// Students classify pedigrees by inheritance mode: AD, AR, XR, XD
// 12 pre-built pedigrees with immediate feedback

let containerWidth;
let canvasWidth = 800;
let drawHeight = 480;
let controlHeight = 40;
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 10;

// UI
let newPedigreeBtn;

// State
let currentPedigree = null;
let pedigreeOrder = [];
let pedigreeIdx = 0;
let selectedAnswer = null;
let answered = false;
let score = 0;
let totalAttempts = 0;
let hoveredIndividual = null;

// Inheritance mode labels
const MODES = {
    AD: 'Autosomal Dominant',
    AR: 'Autosomal Recessive',
    XR: 'X-Linked Recessive',
    XD: 'X-Linked Dominant'
};

const MODE_COLORS = {
    AD: [155, 89, 182],
    AR: [41, 128, 185],
    XR: [231, 76, 60],
    XD: [243, 156, 18]
};

// Pedigree data: 12 pedigrees (3 per mode)
// Each person: {id, sex:'M'/'F', affected:bool, gen:0-2, pos:0-N, genotype:string}
// Matings: {p1:id, p2:id}
// Children: {parent_mating:idx, child:id}
const PEDIGREES = [
    // ===== AUTOSOMAL DOMINANT (3) =====
    {
        mode: 'AD',
        hint: 'The trait appears in every generation. Affected individuals always have at least one affected parent.',
        clues: 'Every generation has affected individuals (no skipping). Affected father + unaffected mother can produce both affected and unaffected children. Males and females are equally affected.',
        people: [
            {id:1, sex:'M', affected:true, gen:0, pos:1, genotype:'Aa'},
            {id:2, sex:'F', affected:false, gen:0, pos:2, genotype:'aa'},
            {id:3, sex:'F', affected:true, gen:1, pos:0.5, genotype:'Aa'},
            {id:4, sex:'M', affected:false, gen:1, pos:1.5, genotype:'aa'},
            {id:5, sex:'M', affected:false, gen:1, pos:2.5, genotype:'aa'},
            {id:6, sex:'F', affected:true, gen:2, pos:0, genotype:'Aa'},
            {id:7, sex:'M', affected:false, gen:2, pos:1, genotype:'aa'},
        ],
        matings: [{p1:1,p2:2},{p1:3,p2:4}],
        children: [{mi:0,child:3},{mi:0,child:4},{mi:0,child:5},{mi:1,child:6},{mi:1,child:7}]
    },
    {
        mode: 'AD',
        hint: 'Look at whether the trait skips generations.',
        clues: 'Trait does not skip generations. An unaffected couple cannot have affected children. Both sexes affected equally.',
        people: [
            {id:1, sex:'F', affected:true, gen:0, pos:1, genotype:'Aa'},
            {id:2, sex:'M', affected:false, gen:0, pos:2, genotype:'aa'},
            {id:3, sex:'M', affected:true, gen:1, pos:0.5, genotype:'Aa'},
            {id:4, sex:'F', affected:false, gen:1, pos:1.5, genotype:'aa'},
            {id:5, sex:'F', affected:true, gen:1, pos:2.5, genotype:'Aa'},
            {id:6, sex:'F', affected:true, gen:2, pos:1, genotype:'Aa'},
            {id:7, sex:'M', affected:false, gen:2, pos:2, genotype:'aa'},
        ],
        matings: [{p1:1,p2:2},{p1:3,p2:4}],
        children: [{mi:0,child:3},{mi:0,child:4},{mi:0,child:5},{mi:1,child:6},{mi:1,child:7}]
    },
    {
        mode: 'AD',
        hint: 'Can two unaffected parents have an affected child in this mode?',
        clues: 'Affected mother passes trait to roughly half her children. The trait never appears from two unaffected parents. Equal sex ratio among affected.',
        people: [
            {id:1, sex:'M', affected:false, gen:0, pos:0.5, genotype:'aa'},
            {id:2, sex:'F', affected:true, gen:0, pos:1.5, genotype:'Aa'},
            {id:3, sex:'M', affected:false, gen:0, pos:2.5, genotype:'aa'},
            {id:4, sex:'F', affected:false, gen:0, pos:3.5, genotype:'aa'},
            {id:5, sex:'F', affected:true, gen:1, pos:0, genotype:'Aa'},
            {id:6, sex:'M', affected:false, gen:1, pos:1, genotype:'aa'},
            {id:7, sex:'F', affected:false, gen:1, pos:3, genotype:'aa'},
            {id:8, sex:'M', affected:false, gen:1, pos:4, genotype:'aa'},
        ],
        matings: [{p1:1,p2:2},{p1:3,p2:4}],
        children: [{mi:0,child:5},{mi:0,child:6},{mi:1,child:7},{mi:1,child:8}]
    },
    // ===== AUTOSOMAL RECESSIVE (3) =====
    {
        mode: 'AR',
        hint: 'The trait skips generation II entirely. Both parents of affected children are unaffected.',
        clues: 'Trait skips a generation — classic sign of recessive. Two unaffected parents produce affected children (both must be carriers). Males and females equally affected.',
        people: [
            {id:1, sex:'M', affected:true, gen:0, pos:1, genotype:'aa'},
            {id:2, sex:'F', affected:false, gen:0, pos:2, genotype:'Aa'},
            {id:3, sex:'M', affected:false, gen:1, pos:0.5, genotype:'Aa'},
            {id:4, sex:'F', affected:false, gen:1, pos:1.5, genotype:'Aa'},
            {id:5, sex:'F', affected:false, gen:1, pos:2.5, genotype:'Aa'},
            {id:6, sex:'M', affected:true, gen:2, pos:0.5, genotype:'aa'},
            {id:7, sex:'F', affected:false, gen:2, pos:1.5, genotype:'Aa'},
        ],
        matings: [{p1:1,p2:2},{p1:3,p2:4}],
        children: [{mi:0,child:3},{mi:0,child:4},{mi:0,child:5},{mi:1,child:6},{mi:1,child:7}]
    },
    {
        mode: 'AR',
        hint: 'Notice that the trait appears in generation III from two unaffected parents in generation II.',
        clues: 'Both parents unaffected but have affected child — both must be carriers (Aa). Trait can skip generations. Equal sex ratio.',
        people: [
            {id:1, sex:'F', affected:false, gen:0, pos:1, genotype:'Aa'},
            {id:2, sex:'M', affected:false, gen:0, pos:2, genotype:'Aa'},
            {id:3, sex:'F', affected:false, gen:1, pos:0, genotype:'AA'},
            {id:4, sex:'M', affected:false, gen:1, pos:1, genotype:'Aa'},
            {id:5, sex:'F', affected:true, gen:1, pos:2, genotype:'aa'},
            {id:6, sex:'M', affected:false, gen:1, pos:3, genotype:'Aa'},
        ],
        matings: [{p1:1,p2:2}],
        children: [{mi:0,child:3},{mi:0,child:4},{mi:0,child:5},{mi:0,child:6}]
    },
    {
        mode: 'AR',
        hint: 'Are affected individuals male and female equally?',
        clues: 'Affected individuals appear from carrier parents. Both sexes affected. The trait seems to appear "out of nowhere" because carriers are phenotypically normal.',
        people: [
            {id:1, sex:'M', affected:false, gen:0, pos:0.5, genotype:'Aa'},
            {id:2, sex:'F', affected:false, gen:0, pos:1.5, genotype:'Aa'},
            {id:3, sex:'M', affected:false, gen:0, pos:2.5, genotype:'Aa'},
            {id:4, sex:'F', affected:false, gen:0, pos:3.5, genotype:'Aa'},
            {id:5, sex:'M', affected:true, gen:1, pos:0, genotype:'aa'},
            {id:6, sex:'F', affected:false, gen:1, pos:1, genotype:'Aa'},
            {id:7, sex:'M', affected:false, gen:1, pos:3, genotype:'Aa'},
            {id:8, sex:'F', affected:true, gen:1, pos:4, genotype:'aa'},
        ],
        matings: [{p1:1,p2:2},{p1:3,p2:4}],
        children: [{mi:0,child:5},{mi:0,child:6},{mi:1,child:7},{mi:1,child:8}]
    },
    // ===== X-LINKED RECESSIVE (3) =====
    {
        mode: 'XR',
        hint: 'Only males are affected. The trait passes from an affected grandfather through a carrier daughter to affected grandsons.',
        clues: 'Only males are affected — hallmark of X-linked recessive. Carrier females pass the trait to ~50% of sons. Affected males cannot pass it to sons (they give Y).',
        people: [
            {id:1, sex:'M', affected:true, gen:0, pos:1, genotype:'X\u1D47Y'},
            {id:2, sex:'F', affected:false, gen:0, pos:2, genotype:'X\u1D2EX\u1D47'},
            {id:3, sex:'F', affected:false, gen:1, pos:0.5, genotype:'X\u1D2EX\u1D47'},
            {id:4, sex:'M', affected:false, gen:1, pos:1.5, genotype:'X\u1D2EY'},
            {id:5, sex:'M', affected:true, gen:1, pos:2.5, genotype:'X\u1D47Y'},
            {id:6, sex:'M', affected:true, gen:2, pos:0, genotype:'X\u1D47Y'},
            {id:7, sex:'F', affected:false, gen:2, pos:1, genotype:'X\u1D2EX\u1D47'},
        ],
        matings: [{p1:1,p2:2},{p1:4,p2:3}],
        children: [{mi:0,child:3},{mi:0,child:4},{mi:0,child:5},{mi:1,child:6},{mi:1,child:7}]
    },
    {
        mode: 'XR',
        hint: 'Are any females affected? What sex are all the affected individuals?',
        clues: 'All affected individuals are male. Unaffected females can be carriers. The trait appears to skip generations through carrier females.',
        people: [
            {id:1, sex:'M', affected:false, gen:0, pos:1, genotype:'X\u1D2EY'},
            {id:2, sex:'F', affected:false, gen:0, pos:2, genotype:'X\u1D2EX\u1D47'},
            {id:3, sex:'M', affected:true, gen:1, pos:0.5, genotype:'X\u1D47Y'},
            {id:4, sex:'F', affected:false, gen:1, pos:1.5, genotype:'X\u1D2EX\u1D2E'},
            {id:5, sex:'M', affected:false, gen:1, pos:2.5, genotype:'X\u1D2EY'},
            {id:6, sex:'F', affected:false, gen:1, pos:3.5, genotype:'X\u1D2EX\u1D47'},
        ],
        matings: [{p1:1,p2:2}],
        children: [{mi:0,child:3},{mi:0,child:4},{mi:0,child:5},{mi:0,child:6}]
    },
    {
        mode: 'XR',
        hint: 'Notice the pattern: affected grandfather, carrier mother, affected grandson.',
        clues: 'Classic X-linked recessive pattern: skips a generation through carrier females. No male-to-male transmission. Only males express the trait.',
        people: [
            {id:1, sex:'M', affected:true, gen:0, pos:0.5, genotype:'X\u1D47Y'},
            {id:2, sex:'F', affected:false, gen:0, pos:1.5, genotype:'X\u1D2EX\u1D2E'},
            {id:3, sex:'F', affected:false, gen:1, pos:0.5, genotype:'X\u1D2EX\u1D47'},
            {id:4, sex:'M', affected:false, gen:1, pos:1.5, genotype:'X\u1D2EY'},
            {id:5, sex:'M', affected:true, gen:2, pos:0, genotype:'X\u1D47Y'},
            {id:6, sex:'M', affected:false, gen:2, pos:1, genotype:'X\u1D2EY'},
            {id:7, sex:'F', affected:false, gen:2, pos:2, genotype:'X\u1D2EX\u1D47'},
        ],
        matings: [{p1:1,p2:2},{p1:4,p2:3}],
        children: [{mi:0,child:3},{mi:0,child:4},{mi:1,child:5},{mi:1,child:6},{mi:1,child:7}]
    },
    // ===== X-LINKED DOMINANT (3) =====
    {
        mode: 'XD',
        hint: 'Affected fathers pass the trait to ALL daughters but NO sons.',
        clues: 'Affected father: all daughters affected, no sons affected (he gives X to daughters, Y to sons). More females affected than males. The trait does not skip generations.',
        people: [
            {id:1, sex:'M', affected:true, gen:0, pos:1, genotype:'X\u1D2EY'},
            {id:2, sex:'F', affected:false, gen:0, pos:2, genotype:'X\u1D47X\u1D47'},
            {id:3, sex:'F', affected:true, gen:1, pos:0, genotype:'X\u1D2EX\u1D47'},
            {id:4, sex:'F', affected:true, gen:1, pos:1, genotype:'X\u1D2EX\u1D47'},
            {id:5, sex:'M', affected:false, gen:1, pos:2, genotype:'X\u1D47Y'},
            {id:6, sex:'M', affected:false, gen:1, pos:3, genotype:'X\u1D47Y'},
        ],
        matings: [{p1:1,p2:2}],
        children: [{mi:0,child:3},{mi:0,child:4},{mi:0,child:5},{mi:0,child:6}]
    },
    {
        mode: 'XD',
        hint: 'Count the affected males vs affected females. Is there a sex difference?',
        clues: 'More females are affected than males. Affected mother passes the trait to ~50% of children regardless of sex. Affected father passes to all daughters.',
        people: [
            {id:1, sex:'F', affected:true, gen:0, pos:1, genotype:'X\u1D2EX\u1D47'},
            {id:2, sex:'M', affected:false, gen:0, pos:2, genotype:'X\u1D47Y'},
            {id:3, sex:'F', affected:true, gen:1, pos:0.5, genotype:'X\u1D2EX\u1D47'},
            {id:4, sex:'M', affected:true, gen:1, pos:1.5, genotype:'X\u1D2EY'},
            {id:5, sex:'F', affected:false, gen:1, pos:2.5, genotype:'X\u1D47X\u1D47'},
        ],
        matings: [{p1:1,p2:2}],
        children: [{mi:0,child:3},{mi:0,child:4},{mi:0,child:5}]
    },
    {
        mode: 'XD',
        hint: 'Does the affected father pass the trait to his sons?',
        clues: 'Affected father gives X\u1D2E to all daughters (all affected) and Y to all sons (none affected). This pattern is unique to X-linked dominant.',
        people: [
            {id:1, sex:'M', affected:true, gen:0, pos:1, genotype:'X\u1D2EY'},
            {id:2, sex:'F', affected:false, gen:0, pos:2, genotype:'X\u1D47X\u1D47'},
            {id:3, sex:'F', affected:true, gen:1, pos:0, genotype:'X\u1D2EX\u1D47'},
            {id:4, sex:'M', affected:false, gen:1, pos:1, genotype:'X\u1D47Y'},
            {id:5, sex:'F', affected:true, gen:1, pos:2, genotype:'X\u1D2EX\u1D47'},
            {id:6, sex:'M', affected:false, gen:1, pos:3, genotype:'X\u1D47Y'},
            {id:7, sex:'F', affected:true, gen:2, pos:0.5, genotype:'X\u1D2EX\u1D47'},
            {id:8, sex:'M', affected:false, gen:2, pos:1.5, genotype:'X\u1D47Y'},
        ],
        matings: [{p1:1,p2:2},{p1:4,p2:3}],
        children: [{mi:0,child:3},{mi:0,child:4},{mi:0,child:5},{mi:0,child:6},{mi:1,child:7},{mi:1,child:8}]
    }
];

function setup() {
    updateCanvasSize();
    const canvas = createCanvas(containerWidth, containerHeight);
    const mainEl = document.querySelector('main');
    canvas.parent(mainEl);

    newPedigreeBtn = createButton('New Pedigree');
    newPedigreeBtn.parent(mainEl);
    newPedigreeBtn.mousePressed(loadNewPedigree);

    positionControls();
    textFont('Arial');
    shufflePedigrees();
    loadNewPedigree();
    describe('Interactive pedigree analyzer quiz for inheritance mode classification');
}

function positionControls() {
    newPedigreeBtn.position(10, drawHeight + 8);
}

function shufflePedigrees() {
    pedigreeOrder = [];
    for (let i = 0; i < PEDIGREES.length; i++) pedigreeOrder.push(i);
    // Fisher-Yates shuffle
    for (let i = pedigreeOrder.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [pedigreeOrder[i], pedigreeOrder[j]] = [pedigreeOrder[j], pedigreeOrder[i]];
    }
    pedigreeIdx = 0;
}

function loadNewPedigree() {
    if (pedigreeIdx >= pedigreeOrder.length) {
        shufflePedigrees();
    }
    currentPedigree = PEDIGREES[pedigreeOrder[pedigreeIdx]];
    pedigreeIdx++;
    selectedAnswer = null;
    answered = false;
    hoveredIndividual = null;
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

    if (!currentPedigree) return;

    // Title
    fill(30);
    noStroke();
    textAlign(CENTER, TOP);
    textSize(17);
    text('Pedigree Analyzer', canvasWidth / 2, 5);

    // Score
    fill(80);
    textSize(12);
    textAlign(RIGHT, TOP);
    text('Score: ' + score + ' / ' + totalAttempts, canvasWidth - 15, 8);

    // Draw pedigree
    drawPedigree(margin, 28, canvasWidth * 0.55, 260);

    // Draw answer buttons
    drawAnswerButtons(canvasWidth * 0.6, 30, canvasWidth * 0.38, 130);

    // Draw feedback panel
    drawFeedbackPanel(canvasWidth * 0.6, 170, canvasWidth * 0.38, 120);

    // Draw genotype tooltip on hover (only after answered)
    if (answered && hoveredIndividual) {
        drawGenotypeTooltip();
    }

    // Instruction at bottom of pedigree area
    if (!answered) {
        fill(100);
        noStroke();
        textSize(11);
        textAlign(CENTER, TOP);
        text('Examine the pedigree and select the inheritance pattern below.', canvasWidth * 0.28, 295);
    } else {
        fill(100);
        noStroke();
        textSize(11);
        textAlign(CENTER, TOP);
        text('Hover over individuals to see their genotypes.', canvasWidth * 0.28, 295);
    }
}

function drawPedigree(x, y, w, h) {
    let ped = currentPedigree;
    let people = ped.people;

    // Find bounds
    let maxGen = 0, maxPos = 0;
    people.forEach(p => {
        if (p.gen > maxGen) maxGen = p.gen;
        if (p.pos > maxPos) maxPos = p.pos;
    });

    let genSpacing = h / (maxGen + 1);
    let posSpacing = w / (maxPos + 1.5);
    let symbolSize = min(genSpacing * 0.3, posSpacing * 0.35, 22);

    // Generation labels
    fill(150);
    noStroke();
    textSize(10);
    textAlign(RIGHT, CENTER);
    for (let g = 0; g <= maxGen; g++) {
        text('Gen ' + (g + 1), x + 30, y + 25 + g * genSpacing);
    }

    // Draw mating lines first
    ped.matings.forEach(m => {
        let p1 = people.find(p => p.id === m.p1);
        let p2 = people.find(p => p.id === m.p2);
        let x1 = x + 35 + p1.pos * posSpacing;
        let y1 = y + 25 + p1.gen * genSpacing;
        let x2 = x + 35 + p2.pos * posSpacing;
        let y2 = y + 25 + p2.gen * genSpacing;
        stroke(120);
        strokeWeight(1.5);
        line(x1 + symbolSize, y1, x2 - symbolSize, y2);
    });

    // Draw parent-to-child lines
    ped.children.forEach(c => {
        let mating = ped.matings[c.mi];
        let p1 = people.find(p => p.id === mating.p1);
        let p2 = people.find(p => p.id === mating.p2);
        let child = people.find(p => p.id === c.child);

        let parentMidX = (x + 35 + p1.pos * posSpacing + x + 35 + p2.pos * posSpacing) / 2;
        let parentY = y + 25 + p1.gen * genSpacing;
        let childX = x + 35 + child.pos * posSpacing;
        let childY = y + 25 + child.gen * genSpacing;

        stroke(120);
        strokeWeight(1.5);
        // Vertical from parent line down
        let midY = parentY + genSpacing * 0.45;
        line(parentMidX, parentY, parentMidX, midY);
        // Horizontal to child's x position
        line(parentMidX, midY, childX, midY);
        // Vertical down to child
        line(childX, midY, childX, childY - symbolSize);
    });

    // Draw individuals
    hoveredIndividual = null;
    people.forEach(p => {
        let px = x + 35 + p.pos * posSpacing;
        let py = y + 25 + p.gen * genSpacing;

        // Check hover
        let d = dist(mouseX, mouseY, px, py);
        if (d < symbolSize + 4) {
            hoveredIndividual = p;
        }

        // Affected fill
        if (p.affected) {
            fill(44, 62, 80); // #2C3E50
        } else {
            fill(255);
        }

        if (hoveredIndividual === p && answered) {
            stroke(46, 204, 113);
            strokeWeight(3);
        } else {
            stroke(60);
            strokeWeight(2);
        }

        if (p.sex === 'M') {
            rectMode(CENTER);
            rect(px, py, symbolSize * 2, symbolSize * 2, 2);
            rectMode(CORNER);
        } else {
            ellipse(px, py, symbolSize * 2, symbolSize * 2);
        }
    });
}

function drawGenotypeTooltip() {
    let p = hoveredIndividual;
    let tipText = p.genotype;
    let tipW = textWidth(tipText) + 20;

    fill(255, 255, 220);
    stroke(180);
    strokeWeight(1);
    textSize(12);
    tipW = max(tipW, textWidth(tipText) + 20);
    rect(mouseX + 10, mouseY - 25, tipW, 22, 4);
    fill(40);
    noStroke();
    textAlign(LEFT, CENTER);
    text(tipText, mouseX + 18, mouseY - 14);
}

function drawAnswerButtons(x, y, w, h) {
    fill(60);
    noStroke();
    textAlign(LEFT, TOP);
    textSize(13);
    textStyle(BOLD);
    text('Select Inheritance Pattern:', x, y);
    textStyle(NORMAL);

    let btnW = w * 0.48;
    let btnH = 32;
    let gap = 6;
    let startY = y + 22;

    let modes = ['AD', 'AR', 'XR', 'XD'];
    let labels = ['Autosomal Dominant', 'Autosomal Recessive', 'X-Linked Recessive', 'X-Linked Dominant'];

    for (let i = 0; i < 4; i++) {
        let bx = x + (i % 2) * (btnW + gap);
        let by = startY + Math.floor(i / 2) * (btnH + gap);
        let mode = modes[i];

        let isCorrect = answered && mode === currentPedigree.mode;
        let isWrong = answered && mode === selectedAnswer && mode !== currentPedigree.mode;
        let isHover = !answered && mouseX > bx && mouseX < bx + btnW && mouseY > by && mouseY < by + btnH;

        if (isCorrect) {
            fill(46, 204, 113, 80);
            stroke(46, 204, 113);
            strokeWeight(2);
        } else if (isWrong) {
            fill(231, 76, 60, 80);
            stroke(231, 76, 60);
            strokeWeight(2);
        } else if (isHover) {
            fill(220, 230, 240);
            stroke(150);
            strokeWeight(1);
        } else {
            fill(245);
            stroke(180);
            strokeWeight(1);
        }

        rect(bx, by, btnW, btnH, 6);

        fill(answered ? (isCorrect ? [30,120,60] : isWrong ? [180,40,30] : 120) : 50);
        noStroke();
        textSize(11);
        textAlign(CENTER, CENTER);
        text(labels[i], bx + btnW / 2, by + btnH / 2);
    }
}

function drawFeedbackPanel(x, y, w, h) {
    if (!answered) {
        fill(245, 248, 250);
        stroke(200);
        strokeWeight(1);
        rect(x, y, w, h, 6);
        fill(150);
        noStroke();
        textSize(11);
        textAlign(CENTER, CENTER);
        text('Select an answer to see feedback.', x + w / 2, y + h / 2);
        return;
    }

    let correct = selectedAnswer === currentPedigree.mode;
    fill(correct ? [235, 250, 240] : [255, 240, 238]);
    stroke(correct ? [46, 204, 113] : [231, 76, 60]);
    strokeWeight(1);
    rect(x, y, w, h, 6);

    fill(correct ? [30, 120, 60] : [180, 40, 30]);
    noStroke();
    textSize(13);
    textStyle(BOLD);
    textAlign(LEFT, TOP);
    text(correct ? '\u2713 Correct!' : '\u2717 Incorrect', x + 10, y + 8);
    textStyle(NORMAL);

    fill(60);
    textSize(10);
    textLeading(14);
    textAlign(LEFT, TOP);

    if (correct) {
        text('Pattern: ' + MODES[currentPedigree.mode] + '\n\n' + currentPedigree.clues, x + 10, y + 28, w - 20, h - 35);
    } else {
        text('The correct answer is: ' + MODES[currentPedigree.mode] + '\n\nHint: ' + currentPedigree.hint, x + 10, y + 28, w - 20, h - 35);
    }
}

function mousePressed() {
    if (answered) return;
    if (!currentPedigree) return;

    // Check answer button clicks
    let x = canvasWidth * 0.6;
    let y = 52;
    let btnW = (canvasWidth * 0.38) * 0.48;
    let btnH = 32;
    let gap = 6;

    let modes = ['AD', 'AR', 'XR', 'XD'];
    for (let i = 0; i < 4; i++) {
        let bx = x + (i % 2) * (btnW + gap);
        let by = y + Math.floor(i / 2) * (btnH + gap);

        if (mouseX > bx && mouseX < bx + btnW && mouseY > by && mouseY < by + btnH) {
            selectedAnswer = modes[i];
            answered = true;
            totalAttempts++;
            if (selectedAnswer === currentPedigree.mode) {
                score++;
            }
            return;
        }
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
