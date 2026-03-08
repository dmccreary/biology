// Mutation Effects Comparator
// Shows how silent, missense, nonsense, insertion, and deletion mutations
// alter the mRNA codon sequence and resulting amino acid chain

let canvasWidth = 800;
let drawHeight = 400;
let controlHeight = 80;
let canvasHeight = drawHeight + controlHeight;
let sliderLeftMargin = 140;

// Original mRNA: AUG GCU UAC CGA AAC UGA
// Encodes: Met-Ala-Tyr-Arg-Asn-Stop
const originalMRNA = ['A','U','G','G','C','U','U','A','C','C','G','A','A','A','C','U','G','A'];

const codonTable = {
    'AUG':'Met','GCU':'Ala','GCC':'Ala','GCA':'Ala','GCG':'Ala',
    'UAC':'Tyr','UAU':'Tyr',
    'CGA':'Arg','CGC':'Arg','CGG':'Arg','CGU':'Arg','AGA':'Arg','AGG':'Arg',
    'AAC':'Asn','AAU':'Asn',
    'UGA':'Stop','UAA':'Stop','UAG':'Stop',
    'UUU':'Phe','UUC':'Phe','UUA':'Leu','UUG':'Leu',
    'CUU':'Leu','CUC':'Leu','CUA':'Leu','CUG':'Leu',
    'AUU':'Ile','AUC':'Ile','AUA':'Ile',
    'GUU':'Val','GUC':'Val','GUA':'Val','GUG':'Val',
    'UCU':'Ser','UCC':'Ser','UCA':'Ser','UCG':'Ser','AGU':'Ser','AGC':'Ser',
    'CCU':'Pro','CCC':'Pro','CCA':'Pro','CCG':'Pro',
    'ACU':'Thr','ACC':'Thr','ACA':'Thr','ACG':'Thr',
    'GAU':'Asp','GAC':'Asp',
    'GAA':'Glu','GAG':'Glu',
    'UGU':'Cys','UGC':'Cys',
    'UGG':'Trp',
    'CAU':'His','CAC':'His','CAA':'Gln','CAG':'Gln',
    'AAA':'Lys','AAG':'Lys',
    'GGU':'Gly','GGC':'Gly','GGA':'Gly','GGG':'Gly'
};

const aaColors = {
    'Met':[46,204,113],'Ala':[52,152,219],'Tyr':[155,89,182],
    'Arg':[230,126,34],'Asn':[241,196,15],'Stop':[231,76,60],
    'Phe':[26,188,156],'Leu':[22,160,133],'Ile':[39,174,96],
    'Val':[41,128,185],'Ser':[142,68,173],'Pro':[243,156,18],
    'Thr':[211,84,0],'Asp':[192,57,43],'Glu':[189,195,199],
    'Cys':[127,140,141],'Trp':[44,62,80],'His':[108,122,137],
    'Gln':[214,137,16],'Lys':[169,50,38],'Gly':[153,163,164]
};

let mutationType = null; // 'silent','missense','nonsense','insertion','deletion'
let mutationPos = -1;    // nucleotide position of mutation
let mutantMRNA = [];
let hoverBase = -1;

const mutationTypes = [
    { id: 'silent', label: 'Silent', color: [100, 180, 100] },
    { id: 'missense', label: 'Missense', color: [230, 160, 50] },
    { id: 'nonsense', label: 'Nonsense', color: [231, 76, 60] },
    { id: 'insertion', label: 'Insertion (+1)', color: [155, 89, 182] },
    { id: 'deletion', label: 'Deletion (-1)', color: [52, 73, 94] }
];

// Pre-computed mutation examples for each type at specific positions
const silentSubs = {
    // position: [original, replacement] that gives same AA
    2: ['G','A'],   // AUG→AUA would change, so use position 5: GCU→GCC
    5: ['U','C'],   // GCU→GCC = Ala→Ala (silent)
    8: ['C','U'],   // UAC→UAU = Tyr→Tyr (silent)
    11:['A','G'],   // CGA→CGG = Arg→Arg (silent)
    14:['C','U'],   // AAC→AAU = Asn→Asn (silent)
};

const missenseSubs = {
    3: ['G','A'],   // GCU→ACU = Ala→Thr
    4: ['C','A'],   // GCU→GAU = Ala→Asp
    6: ['U','G'],   // UAC→GAC = Tyr→Asp
    9: ['C','U'],   // CGA→UGA = Arg→Stop (careful, this is nonsense)
    10:['G','A'],   // CGA→CAA = Arg→Gln
    12:['A','G'],   // AAC→GAC = Asn→Asp
};

const nonsenseSubs = {
    3: ['G','U'],   // GCU→UCU... then reading frame: no, single sub
    6: ['U','A'],   // UAC→AAC... no.
    // UAC at pos 6,7,8 → change to UAA (stop)
    8: ['C','A'],   // UAC→UAA = Tyr→Stop (nonsense!)
    11:['A','U'],   // CGA→UGA... wait CGA is pos 9,10,11. pos 9='C', change C→U: UGA=Stop
};

function applyMutation(type, pos) {
    mutantMRNA = [...originalMRNA];

    if (type === 'silent') {
        // Find nearest valid silent substitution
        let bestPos = findNearest(pos, Object.keys(silentSubs).map(Number));
        if (bestPos >= 0) {
            mutationPos = bestPos;
            mutantMRNA[bestPos] = silentSubs[bestPos][1];
        }
    } else if (type === 'missense') {
        let bestPos = findNearest(pos, Object.keys(missenseSubs).map(Number));
        if (bestPos >= 0) {
            mutationPos = bestPos;
            mutantMRNA[bestPos] = missenseSubs[bestPos][1];
        }
    } else if (type === 'nonsense') {
        // Change UAC (pos 6,7,8) → UAA (pos 8: C→A)
        // or CGA (pos 9,10,11) → UGA (pos 9: C→U)
        if (pos <= 8) {
            mutationPos = 8;
            mutantMRNA[8] = 'A'; // UAC→UAA = Stop
        } else {
            mutationPos = 9;
            mutantMRNA[9] = 'U'; // CGA→UGA = Stop
        }
    } else if (type === 'insertion') {
        // Insert a random base after the clicked position
        mutationPos = constrain(pos, 3, originalMRNA.length - 4);
        let inserted = ['A','U','G','C'][floor(random(4))];
        mutantMRNA.splice(mutationPos + 1, 0, inserted);
    } else if (type === 'deletion') {
        // Delete the clicked base
        mutationPos = constrain(pos, 3, originalMRNA.length - 4);
        mutantMRNA.splice(mutationPos, 1);
    }
}

function findNearest(pos, validPositions) {
    if (validPositions.length === 0) return -1;
    let best = validPositions[0];
    let bestDist = abs(pos - best);
    for (let p of validPositions) {
        if (abs(pos - p) < bestDist) {
            best = p;
            bestDist = abs(pos - p);
        }
    }
    return best;
}

function translateSequence(bases) {
    let aas = [];
    for (let i = 0; i + 2 < bases.length; i += 3) {
        let codon = bases[i] + bases[i+1] + bases[i+2];
        let aa = codonTable[codon] || '???';
        aas.push({ codon: codon, aa: aa, startIdx: i });
        if (aa === 'Stop') break;
    }
    return aas;
}

function getAAColor(aa) {
    return aaColors[aa] || [180, 180, 180];
}

function updateCanvasSize() {
    let container = select('main');
    if (container) {
        let w = container.elt.getBoundingClientRect().width;
        if (w > 50) canvasWidth = w;
    }
}

function setup() {
    updateCanvasSize();
    let canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent(select('main'));
    textFont('Arial');
    mutantMRNA = [...originalMRNA];
}

function draw() {
    background('#F0F8FF');

    drawSequenceRow('Original mRNA:', originalMRNA, 55, false);
    drawSequenceRow('Mutant mRNA:', mutantMRNA, 195, true);
    drawMutationButtons();
    drawInstructions();
}

function drawSequenceRow(label, bases, topY, isMutant) {
    let origAAs = translateSequence(originalMRNA);
    let aas = translateSequence(bases);

    let marginX = 15;
    let seqW = canvasWidth - 30;
    let baseW = min(seqW / max(bases.length, originalMRNA.length), 38);
    let startX = marginX;

    // Label
    fill(60);
    noStroke();
    textSize(13);
    textStyle(BOLD);
    textAlign(LEFT, TOP);
    text(label, startX, topY - 18);
    textStyle(NORMAL);

    // 5' / 3' labels
    textSize(11);
    fill(100);
    text("5'", startX - 2, topY + 8);
    text("3'", startX + bases.length * baseW + 4, topY + 8);

    // Draw bases
    for (let i = 0; i < bases.length; i++) {
        let bx = startX + 14 + i * baseW;
        let by = topY;

        // Codon grouping background
        let codonIdx = floor(i / 3);
        if (codonIdx % 2 === 0) {
            fill(240, 240, 255, 100);
        } else {
            fill(255, 255, 240, 100);
        }
        noStroke();
        rect(bx - baseW / 2 + 1, by - 2, baseW - 2, 24, 2);

        // Highlight mutated base
        let isChanged = false;
        if (isMutant && mutationType) {
            if (mutationType === 'insertion') {
                if (i === mutationPos + 1) isChanged = true;
                else if (i > mutationPos + 1 && i < bases.length) isChanged = true; // frameshift
            } else if (mutationType === 'deletion') {
                if (i >= mutationPos) isChanged = true;
            } else {
                if (i === mutationPos && bases[i] !== originalMRNA[i]) isChanged = true;
            }
        }

        if (isChanged) {
            if (mutationType === 'insertion' && i === mutationPos + 1) {
                fill(155, 89, 182, 60);
            } else if (mutationType === 'deletion' || (mutationType === 'insertion' && i > mutationPos + 1)) {
                fill(231, 76, 60, 40);
            } else {
                fill(231, 76, 60, 60);
            }
            noStroke();
            rect(bx - baseW / 2 + 1, by - 2, baseW - 2, 24, 2);
        }

        // Hover highlight for original row
        if (!isMutant && mutationType && i === hoverBase) {
            fill(255, 255, 100, 120);
            noStroke();
            rect(bx - baseW / 2 + 1, by - 2, baseW - 2, 24, 2);
        }

        // Base letter
        fill(isChanged ? [200, 0, 0] : [40, 40, 40]);
        noStroke();
        textSize(constrain(baseW * 0.6, 10, 16));
        textAlign(CENTER, CENTER);
        textStyle(isChanged ? BOLD : NORMAL);
        text(bases[i], bx, by + 10);
        textStyle(NORMAL);
    }

    // Draw amino acids below
    let aaY = topY + 32;

    for (let j = 0; j < aas.length; j++) {
        let entry = aas[j];
        let ax = startX + 14 + entry.startIdx * baseW;
        let aw = baseW * 3;

        // Check if this AA differs from original
        let origAA = j < origAAs.length ? origAAs[j].aa : null;
        let changed = isMutant && mutationType && entry.aa !== origAA;
        let isFrameshifted = isMutant && mutationType && (mutationType === 'insertion' || mutationType === 'deletion');

        // AA background
        let col = getAAColor(entry.aa);
        if (entry.aa === 'Stop') {
            fill(231, 76, 60, 180);
        } else if (changed) {
            fill(col[0], col[1], col[2], 200);
            stroke(200, 0, 0);
            strokeWeight(2);
        } else {
            fill(col[0], col[1], col[2], 150);
            noStroke();
        }

        if (entry.aa !== 'Stop') {
            rect(ax - baseW / 2 + 2, aaY, aw - 4, 22, 4);
        } else {
            noStroke();
            rect(ax - baseW / 2 + 2, aaY, aw - 4, 22, 4);
        }

        // AA name
        fill(entry.aa === 'Stop' ? 255 : 40);
        noStroke();
        textSize(constrain(baseW * 0.5, 9, 12));
        textAlign(CENTER, CENTER);
        text(entry.aa, ax + baseW, aaY + 11);

        // Codon label
        fill(120);
        textSize(8);
        text(entry.codon, ax + baseW, aaY + 26);

        // Strike-through downstream AAs after premature stop
        if (isMutant && entry.aa === 'Stop' && j < origAAs.length - 1) {
            // Show grayed-out remaining original AAs
            for (let k = j + 1; k < origAAs.length; k++) {
                let gx = startX + 14 + k * 3 * baseW;
                fill(200, 200, 200, 100);
                noStroke();
                rect(gx - baseW / 2 + 2, aaY, baseW * 3 - 4, 22, 4);

                fill(180);
                textSize(constrain(baseW * 0.5, 9, 12));
                textAlign(CENTER, CENTER);
                // Strikethrough
                let origName = origAAs[k].aa;
                text(origName, gx + baseW, aaY + 11);
                stroke(150);
                strokeWeight(1);
                line(gx - baseW / 2 + 6, aaY + 11, gx + baseW * 2.5 - 6, aaY + 11);
            }
            break;
        }
    }

    // Frameshift warning
    if (isMutant && isFrameshifted && mutationType) {
        fill(231, 76, 60);
        textSize(11);
        textAlign(LEFT, CENTER);
        noStroke();
        textStyle(BOLD);
        text('⚠ FRAMESHIFT — all downstream codons altered', startX, aaY + 45);
        textStyle(NORMAL);
    }
}

function drawMutationButtons() {
    let cy = drawHeight + 8;
    let btnW = constrain((canvasWidth - 60) / 6, 70, 110);
    let btnH = 30;
    let startX = 10;

    fill(60);
    noStroke();
    textSize(11);
    textAlign(LEFT, CENTER);
    text('Mutation type:', startX, cy + btnH / 2);

    let bx = startX + 95;

    for (let i = 0; i < mutationTypes.length; i++) {
        let mt = mutationTypes[i];
        let isActive = mutationType === mt.id;

        if (isActive) {
            fill(mt.color[0], mt.color[1], mt.color[2]);
        } else {
            fill(220);
        }
        stroke(150);
        strokeWeight(1);
        rect(bx, cy, btnW, btnH, 6);

        fill(isActive ? 255 : 60);
        noStroke();
        textSize(constrain(btnW * 0.13, 9, 11));
        textAlign(CENTER, CENTER);
        text(mt.label, bx + btnW / 2, cy + btnH / 2);

        bx += btnW + 5;
    }

    // Reset button
    fill(180, 60, 60);
    stroke(150);
    strokeWeight(1);
    rect(bx, cy, 55, btnH, 6);
    fill(255);
    noStroke();
    textSize(11);
    textAlign(CENTER, CENTER);
    text('Reset', bx + 27, cy + btnH / 2);

    // Instructions
    drawControlInstructions(cy + btnH + 8);
}

function drawControlInstructions(y) {
    fill(100);
    noStroke();
    textSize(10);
    textAlign(LEFT, CENTER);

    if (!mutationType) {
        text('Select a mutation type above, then click a nucleotide in the original sequence to place the mutation.', 15, y + 8);
    } else if (mutationPos < 0) {
        text('Now click a nucleotide position in the original mRNA sequence (top row) to place the mutation.', 15, y + 8);
    } else {
        let desc = getMutationDescription();
        text(desc, 15, y + 8);
    }

    // Sequence summary
    let summY = y + 24;
    fill(80);
    textSize(10);
    text('Original: Met-Ala-Tyr-Arg-Asn-Stop    |    mRNA: AUG GCU UAC CGA AAC UGA', 15, summY);
}

function drawInstructions() {
    // No separate instructions needed — integrated into controls
}

function getMutationDescription() {
    if (!mutationType || mutationPos < 0) return '';

    let orig = originalMRNA[mutationPos];
    let mut = mutationPos < mutantMRNA.length ? mutantMRNA[mutationPos] : '—';

    if (mutationType === 'silent') {
        return `Silent mutation: ${orig}→${mutantMRNA[mutationPos]} at position ${mutationPos + 1}. Codon changed but amino acid remains the same.`;
    } else if (mutationType === 'missense') {
        return `Missense mutation: ${orig}→${mutantMRNA[mutationPos]} at position ${mutationPos + 1}. One amino acid changed to a different amino acid.`;
    } else if (mutationType === 'nonsense') {
        return `Nonsense mutation: ${orig}→${mutantMRNA[mutationPos]} at position ${mutationPos + 1}. Creates a premature stop codon — protein is truncated.`;
    } else if (mutationType === 'insertion') {
        return `Insertion at position ${mutationPos + 1}: extra base added. All downstream codons shift — frameshift mutation.`;
    } else if (mutationType === 'deletion') {
        return `Deletion at position ${mutationPos + 1}: base removed. All downstream codons shift — frameshift mutation.`;
    }
    return '';
}

function mousePressed() {
    // Check mutation type buttons
    let cy = drawHeight + 8;
    let btnW = constrain((canvasWidth - 60) / 6, 70, 110);
    let btnH = 30;
    let bx = 10 + 95;

    for (let i = 0; i < mutationTypes.length; i++) {
        if (mouseX >= bx && mouseX <= bx + btnW &&
            mouseY >= cy && mouseY <= cy + btnH) {
            mutationType = mutationTypes[i].id;
            mutationPos = -1;
            mutantMRNA = [...originalMRNA];
            return;
        }
        bx += btnW + 5;
    }

    // Reset button
    if (mouseX >= bx && mouseX <= bx + 55 &&
        mouseY >= cy && mouseY <= cy + btnH) {
        mutationType = null;
        mutationPos = -1;
        mutantMRNA = [...originalMRNA];
        return;
    }

    // Click on original sequence to place mutation
    if (mutationType && mutationPos < 0) {
        let marginX = 15;
        let seqW = canvasWidth - 30;
        let baseW = min(seqW / originalMRNA.length, 38);
        let topY = 55;

        for (let i = 0; i < originalMRNA.length; i++) {
            let bxPos = marginX + 14 + i * baseW;
            if (mouseX >= bxPos - baseW / 2 && mouseX <= bxPos + baseW / 2 &&
                mouseY >= topY - 2 && mouseY <= topY + 24) {
                // Don't allow mutation at start codon positions 0,1,2
                if (i < 3) continue;
                applyMutation(mutationType, i);
                return;
            }
        }
    }
}

function mouseMoved() {
    hoverBase = -1;
    if (mutationType && mutationPos < 0) {
        let marginX = 15;
        let seqW = canvasWidth - 30;
        let baseW = min(seqW / originalMRNA.length, 38);
        let topY = 55;

        for (let i = 0; i < originalMRNA.length; i++) {
            let bxPos = marginX + 14 + i * baseW;
            if (mouseX >= bxPos - baseW / 2 && mouseX <= bxPos + baseW / 2 &&
                mouseY >= topY - 2 && mouseY <= topY + 24) {
                if (i >= 3) hoverBase = i;
                break;
            }
        }
    }
}

function windowResized() {
    updateCanvasSize();
    resizeCanvas(canvasWidth, canvasHeight);
}
