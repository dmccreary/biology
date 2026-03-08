// Genetic Drift Simulator
// Stochastic simulation showing allele frequency changes over generations
// Multiple trials overlaid to show variability; population size slider

let canvasWidth = 800;
let drawHeight = 380;
let controlHeight = 100;
let canvasHeight = drawHeight + controlHeight;
let sliderLeftMargin = 130;

// Parameters
let popSize = 50;
let initialP = 0.5;
let numGenerations = 100;
let numTrials = 10;

// Simulation data
let trials = []; // array of arrays, each inner array is p values per generation
let isRunning = false;
let currentGen = 0;
let animSpeed = 3; // generations per frame

// Summary stats
let fixations = 0;
let losses = 0;

// Sliders
let popSlider, pSlider, genSlider, trialSlider;

// Use power curve for population size slider (logarithmic feel)
function popSliderToValue(v) {
    // v is 0-100, maps to 10-10000 with cubic curve
    let fraction = v / 100;
    return round(10 + pow(fraction, 3) * 9990);
}

function popValueToSlider(val) {
    let fraction = pow((val - 10) / 9990, 1/3);
    return round(fraction * 100);
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

    let mainEl = select('main').elt;

    // Population size slider (logarithmic mapping)
    popSlider = createSlider(0, 100, popValueToSlider(50), 1);
    popSlider.parent(mainEl);
    popSlider.style('width', '140px');
    popSlider.position(sliderLeftMargin, drawHeight + 12);

    // Initial p slider
    pSlider = createSlider(10, 90, 50, 1);
    pSlider.parent(mainEl);
    pSlider.style('width', '140px');
    pSlider.position(sliderLeftMargin, drawHeight + 38);

    // Generations slider
    genSlider = createSlider(10, 500, 100, 10);
    genSlider.parent(mainEl);
    genSlider.style('width', '140px');
    genSlider.position(sliderLeftMargin, drawHeight + 64);

    // Trial slider
    trialSlider = createSlider(1, 20, 10, 1);
    trialSlider.parent(mainEl);
    trialSlider.style('width', '140px');
    trialSlider.position(sliderLeftMargin + 200, drawHeight + 12);

    updateParams();
}

function updateParams() {
    popSize = popSliderToValue(popSlider.value());
    initialP = pSlider.value() / 100;
    numGenerations = genSlider.value();
    numTrials = trialSlider.value();
}

function draw() {
    background('#F0F8FF');

    updateParams();

    if (isRunning && currentGen < numGenerations) {
        for (let s = 0; s < animSpeed; s++) {
            if (currentGen < numGenerations) {
                advanceOneGeneration();
                currentGen++;
            }
        }
    } else if (isRunning && currentGen >= numGenerations) {
        isRunning = false;
    }

    drawChart();
    drawSummary();
    drawControlLabels();
    drawButtons();
}

function advanceOneGeneration() {
    for (let t = 0; t < trials.length; t++) {
        let prevP = trials[t][trials[t].length - 1];
        // Already fixed or lost
        if (prevP <= 0 || prevP >= 1) {
            trials[t].push(prevP);
            continue;
        }
        // Binomial sampling: count of A alleles in 2N draws
        let alleleCount = 0;
        let totalAlleles = 2 * popSize;
        for (let i = 0; i < totalAlleles; i++) {
            if (random() < prevP) alleleCount++;
        }
        trials[t].push(alleleCount / totalAlleles);
    }
}

function runSimulation() {
    trials = [];
    fixations = 0;
    losses = 0;
    currentGen = 0;

    for (let t = 0; t < numTrials; t++) {
        trials.push([initialP]);
    }
    isRunning = true;
}

function runInstant() {
    trials = [];
    fixations = 0;
    losses = 0;

    for (let t = 0; t < numTrials; t++) {
        let trialData = [initialP];
        let p = initialP;
        for (let g = 0; g < numGenerations; g++) {
            if (p <= 0 || p >= 1) {
                trialData.push(p);
                continue;
            }
            let alleleCount = 0;
            let totalAlleles = 2 * popSize;
            for (let i = 0; i < totalAlleles; i++) {
                if (random() < p) alleleCount++;
            }
            p = alleleCount / totalAlleles;
            trialData.push(p);
        }
        trials.push(trialData);
    }

    currentGen = numGenerations;
    isRunning = false;
    computeSummary();
}

function computeSummary() {
    fixations = 0;
    losses = 0;
    for (let t = 0; t < trials.length; t++) {
        let finalP = trials[t][trials[t].length - 1];
        if (finalP >= 1) fixations++;
        if (finalP <= 0) losses++;
    }
}

function drawChart() {
    let chartX = 55;
    let chartY = 20;
    let chartW = canvasWidth - 80;
    let chartH = drawHeight - 60;

    // Background
    fill(252, 252, 255);
    stroke(200);
    strokeWeight(1);
    rect(chartX, chartY, chartW, chartH);

    // Fixation zone (p=1)
    fill(200, 240, 200, 80);
    noStroke();
    rect(chartX, chartY, chartW, 15);

    // Loss zone (p=0)
    fill(240, 200, 200, 80);
    rect(chartX, chartY + chartH - 15, chartW, 15);

    // Grid lines
    stroke(230);
    strokeWeight(0.5);
    for (let i = 0; i <= 10; i++) {
        let y = chartY + (i / 10) * chartH;
        line(chartX, y, chartX + chartW, y);
    }

    // Y-axis labels
    fill(100);
    noStroke();
    textSize(9);
    textAlign(RIGHT, CENTER);
    for (let i = 0; i <= 10; i++) {
        let val = 1 - i / 10;
        let y = chartY + (i / 10) * chartH;
        text(val.toFixed(1), chartX - 5, y);
    }

    // Y-axis title
    push();
    translate(12, chartY + chartH / 2);
    rotate(-HALF_PI);
    textAlign(CENTER, CENTER);
    textSize(11);
    fill(60);
    text('Allele frequency (p)', 0, 0);
    pop();

    // X-axis labels
    textAlign(CENTER, TOP);
    textSize(9);
    fill(100);
    let maxGen = numGenerations;
    for (let i = 0; i <= 5; i++) {
        let gen = round(i * maxGen / 5);
        let x = chartX + (gen / maxGen) * chartW;
        text(gen, x, chartY + chartH + 4);
    }
    textSize(11);
    fill(60);
    text('Generations', chartX + chartW / 2, chartY + chartH + 18);

    // Initial p line (dashed)
    stroke(100, 100, 200, 100);
    strokeWeight(1);
    drawingContext.setLineDash([5, 5]);
    let ipY = chartY + (1 - initialP) * chartH;
    line(chartX, ipY, chartX + chartW, ipY);
    drawingContext.setLineDash([]);

    // Trial lines
    let trialColors = generateColors(numTrials);
    for (let t = 0; t < trials.length; t++) {
        let data = trials[t];
        if (data.length < 2) continue;

        let col = trialColors[t];
        stroke(col[0], col[1], col[2], 180);
        strokeWeight(1.5);
        noFill();

        beginShape();
        for (let g = 0; g < data.length; g++) {
            let x = chartX + (g / maxGen) * chartW;
            let y = chartY + (1 - data[g]) * chartH;
            vertex(x, y);
        }
        endShape();
    }

    // Zone labels
    fill(60, 140, 60, 150);
    noStroke();
    textSize(8);
    textAlign(LEFT, CENTER);
    text('Fixation (p = 1)', chartX + 5, chartY + 7);
    fill(180, 60, 60, 150);
    text('Loss (p = 0)', chartX + 5, chartY + chartH - 7);
}

function generateColors(n) {
    let colors = [];
    for (let i = 0; i < n; i++) {
        let hue = (i * 360 / n) % 360;
        // Convert HSL to RGB (approximate)
        let h = hue / 60;
        let c = 180;
        let x = c * (1 - abs(h % 2 - 1));
        let r, g, b;
        if (h < 1) { r = c; g = x; b = 0; }
        else if (h < 2) { r = x; g = c; b = 0; }
        else if (h < 3) { r = 0; g = c; b = x; }
        else if (h < 4) { r = 0; g = x; b = c; }
        else if (h < 5) { r = x; g = 0; b = c; }
        else { r = c; g = 0; b = x; }
        colors.push([r + 40, g + 40, b + 40]);
    }
    return colors;
}

function drawSummary() {
    if (trials.length === 0) return;

    computeSummary();
    let still = trials.length - fixations - losses;

    let sx = canvasWidth - 160;
    let sy = 25;

    fill(255, 255, 255, 220);
    stroke(200);
    strokeWeight(1);
    rect(sx, sy, 145, 70, 6);

    fill(60);
    noStroke();
    textSize(10);
    textStyle(BOLD);
    textAlign(LEFT, TOP);
    text('Summary', sx + 8, sy + 5);
    textStyle(NORMAL);

    textSize(9);
    fill(60, 140, 60);
    text(`Fixations (p=1): ${fixations}`, sx + 8, sy + 22);
    fill(180, 60, 60);
    text(`Losses (p=0): ${losses}`, sx + 8, sy + 36);
    fill(80);
    text(`Still drifting: ${still}`, sx + 8, sy + 50);
}

function drawControlLabels() {
    let cy = drawHeight;

    fill(60);
    noStroke();
    textSize(10);
    textAlign(RIGHT, CENTER);

    // Pop size
    text(`Pop size (N=${popSize}):`, sliderLeftMargin - 5, cy + 22);

    // Initial p
    text(`Initial p (${initialP.toFixed(2)}):`, sliderLeftMargin - 5, cy + 48);

    // Generations
    text(`Generations (${numGenerations}):`, sliderLeftMargin - 5, cy + 74);

    // Trials
    text(`Trials (${numTrials}):`, sliderLeftMargin + 195, cy + 22);
}

function drawButtons() {
    let cy = drawHeight + 38;
    let bx = sliderLeftMargin + 340;
    let btnW = 70;
    let btnH = 28;

    // Run (animated)
    fill(46, 204, 113);
    stroke(80);
    strokeWeight(1);
    rect(bx, cy, btnW, btnH, 6);
    fill(255);
    noStroke();
    textSize(12);
    textAlign(CENTER, CENTER);
    text('▶ Run', bx + btnW / 2, cy + btnH / 2);

    // Instant
    bx += btnW + 8;
    fill(52, 152, 219);
    stroke(80);
    strokeWeight(1);
    rect(bx, cy, btnW, btnH, 6);
    fill(255);
    noStroke();
    textSize(11);
    textAlign(CENTER, CENTER);
    text('Instant', bx + btnW / 2, cy + btnH / 2);

    // Clear
    bx += btnW + 8;
    fill(200, 100, 100);
    stroke(80);
    strokeWeight(1);
    rect(bx, cy, 55, btnH, 6);
    fill(255);
    noStroke();
    textSize(11);
    textAlign(CENTER, CENTER);
    text('Clear', bx + 27, cy + btnH / 2);

    // Bottleneck button
    bx += 63;
    let bottleAvail = trials.length > 0 && !isRunning;
    fill(bottleAvail ? [230, 126, 34] : [200, 200, 200]);
    stroke(80);
    strokeWeight(1);
    rect(bx, cy, 80, btnH, 6);
    fill(bottleAvail ? 255 : 150);
    noStroke();
    textSize(10);
    textAlign(CENTER, CENTER);
    text('Bottleneck', bx + 40, cy + btnH / 2);

    // Status
    fill(100);
    textSize(9);
    textAlign(LEFT, CENTER);
    let statusX = sliderLeftMargin + 340;
    let statusY = cy + btnH + 14;
    if (isRunning) {
        text(`Running... generation ${currentGen}/${numGenerations}`, statusX, statusY);
    } else if (trials.length > 0) {
        text(`Complete. ${numTrials} trials × ${numGenerations} generations, N=${popSize}`, statusX, statusY);
    } else {
        text('Adjust parameters, then click Run or Instant.', statusX, statusY);
    }
}

function mousePressed() {
    let cy = drawHeight + 38;
    let bx = sliderLeftMargin + 340;
    let btnW = 70;
    let btnH = 28;

    // Run button
    if (mouseX >= bx && mouseX <= bx + btnW &&
        mouseY >= cy && mouseY <= cy + btnH) {
        runSimulation();
        return;
    }

    // Instant button
    bx += btnW + 8;
    if (mouseX >= bx && mouseX <= bx + btnW &&
        mouseY >= cy && mouseY <= cy + btnH) {
        runInstant();
        return;
    }

    // Clear button
    bx += btnW + 8;
    if (mouseX >= bx && mouseX <= bx + 55 &&
        mouseY >= cy && mouseY <= cy + btnH) {
        trials = [];
        isRunning = false;
        currentGen = 0;
        fixations = 0;
        losses = 0;
        return;
    }

    // Bottleneck button
    bx += 63;
    if (mouseX >= bx && mouseX <= bx + 80 &&
        mouseY >= cy && mouseY <= cy + btnH) {
        if (trials.length > 0 && !isRunning) {
            applyBottleneck();
        }
        return;
    }
}

function applyBottleneck() {
    // Reduce population to 10 for 5 generations, then restore
    let savedPop = popSize;
    let bottleneckN = 10;

    for (let t = 0; t < trials.length; t++) {
        let p = trials[t][trials[t].length - 1];
        for (let g = 0; g < 5; g++) {
            if (p <= 0 || p >= 1) {
                trials[t].push(p);
                continue;
            }
            let alleleCount = 0;
            for (let i = 0; i < 2 * bottleneckN; i++) {
                if (random() < p) alleleCount++;
            }
            p = alleleCount / (2 * bottleneckN);
            trials[t].push(p);
        }
        // Continue with original pop size for remaining generations
        let extraGens = 20;
        for (let g = 0; g < extraGens; g++) {
            if (p <= 0 || p >= 1) {
                trials[t].push(p);
                continue;
            }
            let alleleCount = 0;
            for (let i = 0; i < 2 * savedPop; i++) {
                if (random() < p) alleleCount++;
            }
            p = alleleCount / (2 * savedPop);
            trials[t].push(p);
        }
    }
    // Update numGenerations to reflect extended data
    numGenerations = trials[0].length - 1;
    genSlider.value(min(numGenerations, 500));
}

function windowResized() {
    updateCanvasSize();
    resizeCanvas(canvasWidth, canvasHeight);

    // Reposition sliders
    popSlider.position(sliderLeftMargin, drawHeight + 12);
    pSlider.position(sliderLeftMargin, drawHeight + 38);
    genSlider.position(sliderLeftMargin, drawHeight + 64);
    trialSlider.position(sliderLeftMargin + 200, drawHeight + 12);
}
