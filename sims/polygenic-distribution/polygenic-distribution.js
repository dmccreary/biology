// Polygenic Trait Distribution Visualizer
// Shows how increasing the number of contributing genes transforms
// a discrete phenotype distribution into a continuous bell curve.

let chart = null;
let showNormalCurve = false;
let showMath = false;

// Binomial coefficient C(n, k)
function binomial(n, k) {
    if (k < 0 || k > n) return 0;
    if (k === 0 || k === n) return 1;
    let result = 1;
    for (let i = 0; i < k; i++) {
        result = result * (n - i) / (i + 1);
    }
    return Math.round(result);
}

// Get distribution for n genes (2n alleles, binomial expansion)
function getDistribution(numGenes) {
    const totalAlleles = 2 * numGenes;
    const labels = [];
    const values = [];
    const totalOutcomes = Math.pow(2, totalAlleles);

    for (let k = 0; k <= totalAlleles; k++) {
        labels.push(k.toString());
        values.push(binomial(totalAlleles, k) / totalOutcomes);
    }
    return { labels, values, totalOutcomes };
}

// Generate normal curve points for overlay
function getNormalCurve(numGenes) {
    const n = 2 * numGenes;
    const mean = n / 2;
    const variance = n / 4; // np(1-p) where p=0.5
    const sd = Math.sqrt(variance);
    const points = [];

    for (let k = 0; k <= n; k++) {
        const z = (k - mean) / sd;
        const y = (1 / (sd * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * z * z);
        // Scale to match bar frequencies: multiply by 1 (since bars sum to 1 over n+1 bars of width 1)
        points.push(y);
    }
    return points;
}

// Color gradient from light blue to dark blue
function getBarColors(count) {
    const colors = [];
    for (let i = 0; i < count; i++) {
        const t = count <= 1 ? 0.5 : i / (count - 1);
        const r = Math.round(200 - t * 140);
        const g = Math.round(220 - t * 120);
        const b = Math.round(255 - t * 60);
        colors.push(`rgba(${r}, ${g}, ${b}, 0.85)`);
    }
    return colors;
}

function getBarBorderColors(count) {
    const colors = [];
    for (let i = 0; i < count; i++) {
        const t = count <= 1 ? 0.5 : i / (count - 1);
        const r = Math.round(140 - t * 100);
        const g = Math.round(160 - t * 80);
        const b = Math.round(220 - t * 40);
        colors.push(`rgba(${r}, ${g}, ${b}, 1)`);
    }
    return colors;
}

function updateChart() {
    const numGenes = parseInt(document.getElementById('gene-slider').value);
    document.getElementById('gene-value').textContent = numGenes;

    const dist = getDistribution(numGenes);
    const datasets = [];

    // Bar dataset
    datasets.push({
        type: 'bar',
        label: 'Phenotype Frequency',
        data: dist.values,
        backgroundColor: getBarColors(dist.values.length),
        borderColor: getBarBorderColors(dist.values.length),
        borderWidth: 1,
        order: 2
    });

    // Normal curve overlay
    if (showNormalCurve && numGenes >= 2) {
        const normalData = getNormalCurve(numGenes);
        datasets.push({
            type: 'line',
            label: 'Normal Distribution',
            data: normalData,
            borderColor: 'rgba(231, 76, 60, 0.8)',
            borderWidth: 2,
            pointRadius: 0,
            fill: false,
            tension: 0.4,
            order: 1
        });
    }

    if (chart) {
        chart.data.labels = dist.labels;
        chart.data.datasets = datasets;
        chart.options.scales.x.title.text = `Number of Additive Alleles (0 to ${2 * numGenes})`;
        chart.update('active');
    }

    updateSummary(numGenes, dist);
    updateMathPanel(numGenes, dist);
}

function updateSummary(numGenes, dist) {
    const n = 2 * numGenes;
    const classes = n + 1;
    const mean = n / 2;
    const sd = Math.sqrt(n / 4);

    let shape = 'Uniform';
    if (numGenes === 1) shape = 'Discrete (1:2:1 ratio)';
    else if (numGenes === 2) shape = 'Symmetric, peaked';
    else if (numGenes === 3) shape = 'Approaching bell curve';
    else shape = 'Approximately normal';

    document.getElementById('summary').innerHTML = `
        <div class="summary-item"><strong>Genes:</strong> ${numGenes}</div>
        <div class="summary-item"><strong>Alleles:</strong> ${n}</div>
        <div class="summary-item"><strong>Phenotypic Classes:</strong> ${classes}</div>
        <div class="summary-item"><strong>Mean:</strong> ${mean.toFixed(1)}</div>
        <div class="summary-item"><strong>SD:</strong> ${sd.toFixed(2)}</div>
        <div class="summary-item"><strong>Shape:</strong> ${shape}</div>
    `;
}

function updateMathPanel(numGenes, dist) {
    if (!showMath) return;

    const n = 2 * numGenes;
    const coeffs = [];
    for (let k = 0; k <= n; k++) {
        coeffs.push(binomial(n, k));
    }

    const total = Math.pow(2, n);
    const expansion = `(p + q)<sup>${n}</sup> where p = q = 1/2`;
    const coeffStr = coeffs.join(' : ');

    // Show individual terms
    const terms = coeffs.map((c, i) => {
        const pPow = n - i;
        const qPow = i;
        let term = '';
        if (c !== 1) term += c;
        if (pPow > 0) term += pPow === 1 ? 'p' : `p<sup>${pPow}</sup>`;
        if (qPow > 0) term += qPow === 1 ? 'q' : `q<sup>${qPow}</sup>`;
        return term;
    });

    document.getElementById('math-panel').innerHTML = `
        <div class="math-title">Binomial Expansion for ${numGenes} Gene${numGenes > 1 ? 's' : ''} (${n} alleles)</div>
        <div><strong>Expansion:</strong> ${expansion}</div>
        <div><strong>Coefficients:</strong> ${coeffStr}</div>
        <div><strong>Total outcomes:</strong> ${total}</div>
        <div style="margin-top:4px"><strong>Terms:</strong> ${terms.join(' + ')}</div>
        <div style="margin-top:4px"><strong>Frequencies:</strong> ${coeffs.map(c => (c / total).toFixed(4)).join(', ')}</div>
    `;
}

function toggleNormal() {
    showNormalCurve = !showNormalCurve;
    document.getElementById('btn-normal').classList.toggle('active', showNormalCurve);
    updateChart();
}

function toggleMath() {
    showMath = !showMath;
    document.getElementById('btn-math').classList.toggle('active', showMath);
    document.getElementById('math-panel').classList.toggle('visible', showMath);
    if (showMath) {
        const numGenes = parseInt(document.getElementById('gene-slider').value);
        const dist = getDistribution(numGenes);
        updateMathPanel(numGenes, dist);
    }
}

function initChart() {
    const ctx = document.getElementById('chart').getContext('2d');
    const dist = getDistribution(1);

    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: dist.labels,
            datasets: [{
                label: 'Phenotype Frequency',
                data: dist.values,
                backgroundColor: getBarColors(dist.values.length),
                borderColor: getBarBorderColors(dist.values.length),
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: { duration: 500 },
            plugins: {
                title: { display: false },
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        title: function(items) {
                            return `Additive Alleles: ${items[0].label}`;
                        },
                        label: function(context) {
                            const val = context.parsed.y;
                            return `Frequency: ${(val * 100).toFixed(1)}%`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Number of Additive Alleles (0 to 2)',
                        font: { size: 12, weight: 'bold' }
                    },
                    grid: { display: false }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Frequency (proportion)',
                        font: { size: 12, weight: 'bold' }
                    },
                    ticks: {
                        callback: function(value) {
                            return (value * 100).toFixed(0) + '%';
                        }
                    }
                }
            }
        }
    });

    updateSummary(1, dist);
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    initChart();

    document.getElementById('gene-slider').addEventListener('input', updateChart);
});
