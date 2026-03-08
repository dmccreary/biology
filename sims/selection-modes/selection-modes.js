// Selection Modes Visualizer
// Shows how stabilizing, directional, and disruptive selection
// change a phenotype distribution over generations

const NUM_BINS = 41;
const MAX_GEN = 30;
const BIN_LABELS = [];
for (let i = 0; i < NUM_BINS; i++) {
    BIN_LABELS.push((i - 20).toString());
}

let currentMode = 'stabilizing';
let generation = 0;
let running = false;
let animInterval = null;
let showOverlay = false;

// Distribution data
let originalDist = [];
let currentDist = [];

// Fitness functions for each mode
function getFitness(binIndex, mode) {
    let x = binIndex - 20; // center at 0
    if (mode === 'stabilizing') {
        // Favor center, penalize extremes
        return Math.exp(-x * x / 200);
    } else if (mode === 'directional') {
        // Favor right side
        return 0.3 + 0.7 / (1 + Math.exp(-x / 4));
    } else {
        // Favor extremes, penalize center
        let d = Math.abs(x);
        return 0.2 + 0.8 * (1 - Math.exp(-d * d / 80));
    }
}

// Generate initial normal distribution
function generateNormal(mean, sd, total) {
    let dist = new Array(NUM_BINS).fill(0);
    for (let i = 0; i < NUM_BINS; i++) {
        let x = i - 20;
        dist[i] = Math.exp(-((x - mean) * (x - mean)) / (2 * sd * sd));
    }
    // Normalize to sum = total
    let sum = dist.reduce((a, b) => a + b, 0);
    for (let i = 0; i < NUM_BINS; i++) {
        dist[i] = (dist[i] / sum) * total;
    }
    return dist;
}

function initDistribution() {
    originalDist = generateNormal(0, 8, 1000);
    currentDist = [...originalDist];
    generation = 0;
}

function applySelection() {
    // Apply fitness, then normalize back to same total
    let total = currentDist.reduce((a, b) => a + b, 0);
    let newDist = new Array(NUM_BINS).fill(0);

    for (let i = 0; i < NUM_BINS; i++) {
        newDist[i] = currentDist[i] * getFitness(i, currentMode);
    }

    // Add slight mutation/diffusion (spread by 1 bin)
    let smoothed = new Array(NUM_BINS).fill(0);
    for (let i = 0; i < NUM_BINS; i++) {
        smoothed[i] = newDist[i] * 0.8;
        if (i > 0) smoothed[i] += newDist[i - 1] * 0.1;
        if (i < NUM_BINS - 1) smoothed[i] += newDist[i + 1] * 0.1;
    }

    // Normalize back to original total
    let newTotal = smoothed.reduce((a, b) => a + b, 0);
    if (newTotal > 0) {
        for (let i = 0; i < NUM_BINS; i++) {
            smoothed[i] = (smoothed[i] / newTotal) * total;
        }
    }

    currentDist = smoothed;
    generation++;
}

// Chart setup
let chart;

function createChart() {
    const ctx = document.getElementById('selectionChart').getContext('2d');

    // Fitness zone data
    let fitnessData = new Array(NUM_BINS).fill(0);
    for (let i = 0; i < NUM_BINS; i++) {
        fitnessData[i] = getFitness(i, currentMode) * getMaxDist() * 1.1;
    }

    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: BIN_LABELS,
            datasets: [
                {
                    label: 'Fitness Zone',
                    data: fitnessData,
                    type: 'line',
                    borderColor: 'rgba(46, 204, 113, 0.5)',
                    backgroundColor: 'rgba(46, 204, 113, 0.08)',
                    fill: true,
                    pointRadius: 0,
                    borderWidth: 1.5,
                    tension: 0.4,
                    order: 3
                },
                {
                    label: 'Original Distribution',
                    data: [...originalDist],
                    type: 'line',
                    borderColor: 'rgba(0, 0, 0, 0.3)',
                    borderDash: [5, 5],
                    backgroundColor: 'transparent',
                    pointRadius: 0,
                    borderWidth: 2,
                    tension: 0.4,
                    hidden: true,
                    order: 2
                },
                {
                    label: 'Current Distribution',
                    data: [...currentDist],
                    backgroundColor: getModeColor(0.6),
                    borderColor: getModeColor(1),
                    borderWidth: 1,
                    order: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: { duration: 100 },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: { font: { size: 11 } }
                },
                title: {
                    display: true,
                    text: 'Phenotype Distribution Under Selection',
                    font: { size: 14 }
                },
                tooltip: {
                    callbacks: {
                        label: function(ctx) {
                            if (ctx.datasetIndex === 0) {
                                return 'Fitness: ' + (ctx.raw / (getMaxDist() * 1.1) * 100).toFixed(0) + '%';
                            }
                            return ctx.dataset.label + ': ' + ctx.raw.toFixed(1);
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: { display: true, text: 'Phenotype Value (e.g., body size)', font: { size: 12 } },
                    ticks: {
                        callback: function(val, idx) {
                            return idx % 5 === 0 ? BIN_LABELS[idx] : '';
                        },
                        font: { size: 9 }
                    }
                },
                y: {
                    title: { display: true, text: 'Frequency', font: { size: 12 } },
                    beginAtZero: true,
                    ticks: { font: { size: 9 } }
                }
            }
        }
    });
}

function getMaxDist() {
    return Math.max(...currentDist, ...originalDist);
}

function getModeColor(alpha) {
    if (currentMode === 'stabilizing') return `rgba(52, 152, 219, ${alpha})`;
    if (currentMode === 'directional') return `rgba(230, 126, 34, ${alpha})`;
    return `rgba(231, 76, 60, ${alpha})`;
}

function updateChart() {
    // Update fitness zone
    let maxVal = getMaxDist() * 1.1;
    for (let i = 0; i < NUM_BINS; i++) {
        chart.data.datasets[0].data[i] = getFitness(i, currentMode) * maxVal;
    }

    // Update original distribution
    chart.data.datasets[1].data = [...originalDist];
    chart.data.datasets[1].hidden = !showOverlay;

    // Update current distribution
    chart.data.datasets[2].data = [...currentDist];
    chart.data.datasets[2].backgroundColor = getModeColor(0.6);
    chart.data.datasets[2].borderColor = getModeColor(1);

    chart.update();

    document.getElementById('gen-display').textContent = `Generation: ${generation} / ${MAX_GEN}`;
}

function setMode(mode) {
    currentMode = mode;
    stopRun();
    resetSim();

    // Update button styles
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.className = 'mode-btn';
    });
    document.getElementById('btn-' + mode).classList.add('active-' + mode);

    // Update description
    const descs = {
        stabilizing: 'Stabilizing selection: extreme phenotypes are selected against; the population narrows around the mean.',
        directional: 'Directional selection: one extreme is favored; the distribution shifts toward higher phenotype values.',
        disruptive: 'Disruptive selection: extreme phenotypes are favored over intermediate ones; the distribution splits into two peaks.'
    };
    document.getElementById('mode-desc').textContent = descs[mode];
}

function toggleRun() {
    if (running) {
        stopRun();
    } else {
        startRun();
    }
}

function startRun() {
    if (generation >= MAX_GEN) return;
    running = true;
    document.getElementById('btn-run').textContent = '⏸ Pause';

    let speed = parseInt(document.getElementById('speed-slider').value);
    let interval = Math.max(50, 500 - speed * 45);

    animInterval = setInterval(() => {
        if (generation < MAX_GEN) {
            applySelection();
            updateChart();
        } else {
            stopRun();
        }
    }, interval);
}

function stopRun() {
    running = false;
    if (animInterval) {
        clearInterval(animInterval);
        animInterval = null;
    }
    document.getElementById('btn-run').textContent = '▶ Run';
}

function resetSim() {
    stopRun();
    initDistribution();
    updateChart();
}

function toggleOverlay() {
    showOverlay = !showOverlay;
    let btn = document.getElementById('btn-overlay');
    if (showOverlay) {
        btn.classList.add('active');
        btn.textContent = '✓ Original';
    } else {
        btn.classList.remove('active');
        btn.textContent = 'Show Original';
    }
    updateChart();
}

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    initDistribution();
    createChart();
    updateChart();
});
