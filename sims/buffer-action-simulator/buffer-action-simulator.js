// Buffer Action Simulator MicroSim
// Compare pH response of bicarbonate buffer vs pure water
// MicroSim template version 2026.02

// Canvas dimensions - REQUIRED structure
let canvasWidth = 400;
let drawHeight = 455;
let controlHeight = 90;
let canvasHeight = drawHeight + controlHeight;
let margin = 25;
let sliderLeftMargin = 180;
let defaultTextSize = 16;

// Controls
let hclSlider, naohSlider;
let modeSelect;

// Chemistry constants
let totalVolume = 1.0;
let bufferCapacity = 0.05;

// Non-linear slider mapping: slider 0-200 → moles via power curve
// This gives gradual pH changes at low slider values
let sliderMax = 200;
let maxMoles = 0.10; // 100 mmol max
let sliderPower = 3; // cubic curve for smooth feel

function sliderToMoles(sliderVal) {
    // Power curve: moles = (slider/max)^3 * maxMoles
    let fraction = sliderVal / sliderMax;
    return pow(fraction, sliderPower) * maxMoles;
}

function molesToMmol(moles) {
    return moles * 1000;
}

function setup() {
    updateCanvasSize();
    const canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent(document.querySelector('main'));

    // Row 1: HCl slider (0 to sliderMax, fine steps)
    hclSlider = createSlider(0, sliderMax, 0, 1);
    hclSlider.parent(document.querySelector('main'));
    hclSlider.position(sliderLeftMargin, drawHeight + 5);
    hclSlider.size(canvasWidth - sliderLeftMargin - margin);
    hclSlider.input(onHclChange);

    // Row 2: NaOH slider
    naohSlider = createSlider(0, sliderMax, 0, 1);
    naohSlider.parent(document.querySelector('main'));
    naohSlider.position(sliderLeftMargin, drawHeight + 40);
    naohSlider.size(canvasWidth - sliderLeftMargin - margin);
    naohSlider.input(onNaohChange);

    // Mode select
    modeSelect = createSelect();
    modeSelect.parent(document.querySelector('main'));
    modeSelect.option('Water Only');
    modeSelect.option('Buffer Only');
    modeSelect.option('Both');
    modeSelect.selected('Water Only');
    modeSelect.position(margin, drawHeight + 60);
    modeSelect.style('font-size', '12px');

    describe('Interactive buffer action simulator comparing pH changes in pure water versus bicarbonate buffer when acid or base is added', LABEL);
}

function onHclChange() {
    if (hclSlider.value() > 0) naohSlider.value(0);
}

function onNaohChange() {
    if (naohSlider.value() > 0) hclSlider.value(0);
}

function draw() {
    updateCanvasSize();

    // Drawing area
    fill('aliceblue');
    stroke('silver');
    rect(0, 0, canvasWidth, drawHeight);
    // Control area
    fill('white');
    stroke('silver');
    rect(0, drawHeight, canvasWidth, controlHeight);

    // Get current values via power curve
    let hclMoles = sliderToMoles(hclSlider.value());
    let naohMoles = sliderToMoles(naohSlider.value());
    let hclMmol = molesToMmol(hclMoles);
    let naohMmol = molesToMmol(naohMoles);

    let mode = modeSelect.value();
    let showWater = (mode === 'Both' || mode === 'Water Only');
    let showBuffer = (mode === 'Both' || mode === 'Buffer Only');

    let waterPH = computeWaterPH(hclMoles, naohMoles);
    let bufferPH = computeBufferPH(hclMoles, naohMoles);

    // Title
    noStroke();
    fill('black');
    textSize(20);
    textAlign(CENTER, TOP);
    text('Buffer Action Simulator', canvasWidth / 2, 6);

    // --- Beaker region ---
    let beakerTop = 49;
    let beakerH = 130;
    let beakerW = canvasWidth * 0.28;
    let gap = canvasWidth * 0.06;

    if (showWater && showBuffer) {
        let leftX = canvasWidth / 2 - beakerW - gap / 2;
        let rightX = canvasWidth / 2 + gap / 2;
        drawBeaker(leftX, beakerTop, beakerW, beakerH, waterPH, 'Pure Water');
        drawBeaker(rightX, beakerTop, beakerW, beakerH, bufferPH, 'Bicarbonate Buffer');
        // VS label
        noStroke();
        fill('gray');
        textSize(14);
        textAlign(CENTER, CENTER);
        text('vs', canvasWidth / 2, beakerTop + beakerH / 2 + 10);
    } else if (showWater) {
        let cx = canvasWidth / 2 - beakerW / 2;
        drawBeaker(cx, beakerTop, beakerW, beakerH, waterPH, 'Pure Water');
    } else if (showBuffer) {
        let cx = canvasWidth / 2 - beakerW / 2;
        drawBeaker(cx, beakerTop, beakerW, beakerH, bufferPH, 'Bicarbonate Buffer');
    }

    // --- Equation display ---
    let eqY = beakerTop + beakerH + 18;
    noStroke();
    fill('darkslategray');
    textSize(13);
    textAlign(CENTER, TOP);
    let eq = getEquationText(hclMoles, naohMoles);
    text(eq, canvasWidth / 2, eqY);

    // --- Graph region ---
    let graphTop = eqY + 22;
    let graphLeft = margin + 40;
    let graphRight = canvasWidth - margin - 10;
    let graphBottom = drawHeight - 30;
    let graphW = graphRight - graphLeft;
    let graphH = graphBottom - graphTop;

    drawGraph(graphLeft, graphTop, graphW, graphH, hclMoles, naohMoles, showWater, showBuffer);

    // --- Control labels ---
    noStroke();
    fill('black');
    textSize(defaultTextSize - 2);
    textAlign(LEFT, CENTER);
    text('Add HCl: ' + nf(hclMmol, 1, 1) + ' mmol', margin, drawHeight + 15);
    text('Add NaOH: ' + nf(naohMmol, 1, 1) + ' mmol', margin, drawHeight + 50);
}

function drawBeaker(x, y, w, h, ph, label) {
    // Label
    noStroke();
    fill('black');
    textSize(12);
    textAlign(CENTER, BOTTOM);
    text(label, x + w / 2, y - 2);

    // Beaker outline
    stroke('gray');
    strokeWeight(2);
    noFill();
    line(x, y, x, y + h);
    line(x, y + h, x + w, y + h);
    line(x + w, y + h, x + w, y);
    // Lips
    line(x - 3, y, x + 5, y);
    line(x + w - 5, y, x + w + 3, y);

    // Liquid fill
    let fillLevel = 0.75;
    let liquidH = h * fillLevel;
    let liquidY = y + h - liquidH;
    noStroke();
    fill(phToColor(ph));
    rect(x + 2, liquidY, w - 4, liquidH - 2, 0, 0, 2, 2);

    // pH digital display
    let meterX = x + w / 2;
    let meterY = liquidY + liquidH * 0.4;
    fill(20, 20, 20, 200);
    rectMode(CENTER);
    rect(meterX, meterY, 64, 30, 4);
    noStroke();
    fill(0, 255, 100);
    textAlign(CENTER, CENTER);
    textSize(10);
    text('pH', meterX, meterY - 8);
    textSize(16);
    text(nf(ph, 1, 2), meterX, meterY + 6);
    rectMode(CORNER);
}

function drawGraph(gx, gy, gw, gh, hclMoles, naohMoles, showWater, showBuffer) {
    // Graph background
    fill('white');
    stroke('silver');
    strokeWeight(1);
    rect(gx, gy, gw, gh);

    let isAcid = hclMoles >= naohMoles;
    let activeMoles = max(hclMoles, naohMoles);

    // Y-axis labels (pH 0-14)
    noStroke();
    fill('gray');
    textSize(9);
    textAlign(RIGHT, CENTER);
    for (let p = 0; p <= 14; p += 2) {
        let yy = map(p, 0, 14, gy + gh, gy);
        text(p, gx - 4, yy);
        stroke(230);
        strokeWeight(0.5);
        line(gx, yy, gx + gw, yy);
        noStroke();
    }

    // X-axis labels (mmol, non-linear ticks)
    textAlign(CENTER, TOP);
    let xTicks = [0, 5, 10, 25, 50, 100];
    for (let m = 0; m < xTicks.length; m++) {
        let mmol = xTicks[m];
        let moles = mmol * 0.001;
        let xx = map(moles, 0, maxMoles, gx, gx + gw);
        noStroke();
        text(mmol, xx, gy + gh + 2);
        stroke(230);
        strokeWeight(0.5);
        line(xx, gy, xx, gy + gh);
    }

    // Axis labels
    noStroke();
    fill('dimgray');
    textSize(10);
    textAlign(CENTER, TOP);
    text(isAcid ? 'mmol HCl added' : 'mmol NaOH added', gx + gw / 2, gy + gh + 13);

    push();
    translate(gx - 28, gy + gh / 2);
    rotate(-HALF_PI);
    textAlign(CENTER, CENTER);
    noStroke();
    text('pH', 0, 0);
    pop();

    // Buffering zone shading
    if (showBuffer && isAcid) {
        let zx1 = gx;
        let zx2 = map(bufferCapacity, 0, maxMoles, gx, gx + gw);
        noStroke();
        fill(100, 200, 100, 30);
        rect(zx1, gy, zx2 - zx1, gh);

        // Exhaustion line
        stroke(200, 60, 60, 120);
        strokeWeight(1);
        drawingContext.setLineDash([4, 4]);
        line(zx2, gy, zx2, gy + gh);
        drawingContext.setLineDash([]);

        noStroke();
        fill(200, 60, 60, 160);
        textSize(8);
        textAlign(LEFT, TOP);
        text('buffer\nexhausted', zx2 + 2, gy + 3);
    }

    // Plot pH lines using many small steps for smooth curves
    let numSteps = 300;

    // Water line (red)
    if (showWater) {
        stroke('crimson');
        strokeWeight(2);
        noFill();
        beginShape();
        for (let i = 0; i <= numSteps; i++) {
            let moles = (i / numSteps) * activeMoles;
            let xx = map(moles, 0, maxMoles, gx, gx + gw);
            let ph = isAcid ? computeWaterPH(moles, 0) : computeWaterPH(0, moles);
            let yy = map(ph, 0, 14, gy + gh, gy);
            vertex(xx, yy);
        }
        endShape();
    }

    // Buffer line (blue)
    if (showBuffer) {
        stroke('steelblue');
        strokeWeight(2);
        noFill();
        beginShape();
        for (let i = 0; i <= numSteps; i++) {
            let moles = (i / numSteps) * activeMoles;
            let xx = map(moles, 0, maxMoles, gx, gx + gw);
            let ph = isAcid ? computeBufferPH(moles, 0) : computeBufferPH(0, moles);
            let yy = map(ph, 0, 14, gy + gh, gy);
            vertex(xx, yy);
        }
        endShape();
    }

    // Legend
    noStroke();
    let legendX = gx + gw - 110;
    let legendY = gy + 8;
    if (showWater) {
        fill('crimson');
        ellipse(legendX, legendY, 7, 7);
        fill('black');
        textSize(10);
        textAlign(LEFT, CENTER);
        text('Pure Water', legendX + 8, legendY);
        legendY += 14;
    }
    if (showBuffer) {
        fill('steelblue');
        noStroke();
        ellipse(legendX, legendY, 7, 7);
        fill('black');
        textSize(10);
        textAlign(LEFT, CENTER);
        text('Buffer', legendX + 8, legendY);
    }
}

function phToColor(ph) {
    // Red (pH 0) -> yellow (pH 7) -> blue (pH 14)
    if (ph <= 7) {
        let t = ph / 7.0;
        return lerpColor(color(220, 50, 50, 180), color(240, 220, 80, 180), t);
    } else {
        let t = (ph - 7) / 7.0;
        return lerpColor(color(240, 220, 80, 180), color(60, 80, 220, 180), t);
    }
}

function computeWaterPH(acidMoles, baseMoles) {
    let netAcid = acidMoles - baseMoles;
    if (abs(netAcid) < 1e-10) return 7.0;
    if (netAcid > 0) {
        let hConc = netAcid / totalVolume;
        return max(0, -log(hConc) / log(10));
    } else {
        let ohConc = (-netAcid) / totalVolume;
        let pOH = -log(ohConc) / log(10);
        return min(14, 14 - pOH);
    }
}

function computeBufferPH(acidMoles, baseMoles) {
    let pKa = 6.1;
    let initialHCO3 = 0.024 * totalVolume;
    let initialH2CO3 = initialHCO3 / 20;

    let hco3 = initialHCO3 - acidMoles + baseMoles;
    let h2co3 = initialH2CO3 + acidMoles - baseMoles;

    if (hco3 <= 1e-6) {
        let excessAcid = acidMoles - initialHCO3;
        if (excessAcid > 0) {
            let hConc = excessAcid / totalVolume;
            return max(0, -log(hConc) / log(10));
        }
        return pKa - 2;
    }
    if (h2co3 <= 1e-6) {
        let excessBase = baseMoles - initialH2CO3;
        if (excessBase > 0) {
            let ohConc = excessBase / totalVolume;
            let pOH = -log(ohConc) / log(10);
            return min(14, 14 - pOH);
        }
        return pKa + 3;
    }
    return pKa + log(hco3 / h2co3) / log(10);
}

function getEquationText(hclMoles, naohMoles) {
    if (hclMoles > naohMoles) {
        let net = hclMoles - naohMoles;
        if (net < bufferCapacity) {
            return 'Buffer active:  H\u207A + HCO\u2083\u207B \u2192 H\u2082CO\u2083';
        }
        return 'Buffer exhausted \u2014 excess H\u207A lowers pH rapidly';
    } else if (naohMoles > hclMoles) {
        let net = naohMoles - hclMoles;
        if (net < 0.0012) {
            return 'Buffer active:  OH\u207B + H\u2082CO\u2083 \u2192 HCO\u2083\u207B + H\u2082O';
        }
        return 'Buffer exhausted \u2014 excess OH\u207B raises pH rapidly';
    }
    return 'No acid or base added \u2014 both systems at initial pH';
}

function windowResized() {
    updateCanvasSize();
    resizeCanvas(canvasWidth, canvasHeight);
}

function updateCanvasSize() {
    const container = document.querySelector('main');
    if (container) {
        canvasWidth = container.offsetWidth;
        if (typeof hclSlider !== 'undefined' && hclSlider) {
            hclSlider.size(canvasWidth - sliderLeftMargin - margin);
        }
        if (typeof naohSlider !== 'undefined' && naohSlider) {
            naohSlider.size(canvasWidth - sliderLeftMargin - margin);
        }
    }
}
