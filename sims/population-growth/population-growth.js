// Population Growth Model Explorer
// Compares exponential and logistic growth with adjustable r, K, N0 parameters

let chart;
let currentView = 'both'; // 'both', 'exponential', 'logistic'
let overshootOn = false;
let dataTableOn = false;

// Parameter getters with non-linear mapping for K and N0
function getR() {
    return parseInt(document.getElementById('r-slider').value) / 100;
}

function getK() {
    // Cubic mapping: 100 to 10000
    let frac = parseInt(document.getElementById('k-slider').value) / 100;
    return Math.round(100 + frac * frac * frac * 9900);
}

function getN0() {
    // Linear 1-1000
    let val = parseInt(document.getElementById('n0-slider').value);
    return Math.max(1, Math.round(val * 10));
}

function getGens() {
    return parseInt(document.getElementById('gen-slider').value);
}

// Compute population data
function computeData() {
    let r = getR();
    let K = getK();
    let N0 = getN0();
    let gens = getGens();

    let labels = [];
    let expData = [];
    let logData = [];
    let dNdtData = [];
    let kLine = [];

    // Exponential: N(t) = N0 * e^(rt)
    // Logistic: N(t+1) = N(t) + r*N(t)*(K-N(t))/K
    // Overshoot: N(t+1) = N(t) + r*N(t-lag)*(K-N(t-lag))/K with lag=3

    let logN = N0;
    let lagBuffer = [N0, N0, N0]; // for overshoot time lag

    for (let t = 0; t <= gens; t++) {
        labels.push(t);

        // Exponential
        let expN = N0 * Math.exp(r * t);
        expData.push(Math.min(expN, K * 20)); // cap for display

        // Logistic
        logData.push(logN);

        // dN/dt for logistic
        let dndt = r * logN * (K - logN) / K;
        dNdtData.push(dndt);

        kLine.push(K);

        // Advance logistic
        if (overshootOn) {
            let lagN = lagBuffer[0];
            let growth = r * lagN * (K - lagN) / K;
            logN = Math.max(0, logN + growth);
            lagBuffer.push(logN);
            lagBuffer.shift();
        } else {
            logN = logN + r * logN * (K - logN) / K;
            logN = Math.max(0, logN);
        }
    }

    return { labels, expData, logData, dNdtData, kLine, K };
}

function createChart() {
    let data = computeData();
    let ctx = document.getElementById('growthChart').getContext('2d');

    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.labels,
            datasets: [
                {
                    label: 'Exponential (N₀·e^(rt))',
                    data: data.expData,
                    borderColor: '#3498db',
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    fill: false,
                    borderWidth: 2.5,
                    pointRadius: 0,
                    pointHoverRadius: 4,
                    tension: 0.3,
                    hidden: currentView === 'logistic'
                },
                {
                    label: 'Logistic (dN/dt = rN(K−N)/K)',
                    data: data.logData,
                    borderColor: '#27ae60',
                    backgroundColor: 'rgba(39, 174, 96, 0.1)',
                    fill: false,
                    borderWidth: 2.5,
                    pointRadius: 0,
                    pointHoverRadius: 4,
                    tension: 0.3,
                    hidden: currentView === 'exponential'
                },
                {
                    label: 'Carrying Capacity (K)',
                    data: data.kLine,
                    borderColor: '#e74c3c',
                    borderDash: [8, 4],
                    borderWidth: 1.5,
                    pointRadius: 0,
                    fill: false,
                    hidden: currentView === 'exponential'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: { duration: 300 },
            interaction: {
                mode: 'index',
                intersect: false
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: { font: { size: 11 }, usePointStyle: true }
                },
                tooltip: {
                    callbacks: {
                        label: function(ctx) {
                            let val = ctx.raw;
                            if (ctx.datasetIndex === 2) {
                                return 'K = ' + Math.round(val).toLocaleString();
                            }
                            return ctx.dataset.label.split('(')[0].trim() + ': ' + Math.round(val).toLocaleString();
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: { display: true, text: 'Generation (t)', font: { size: 12 } },
                    ticks: {
                        callback: function(val, idx) {
                            let gens = getGens();
                            let step = Math.max(1, Math.floor(gens / 10));
                            return idx % step === 0 ? data.labels[idx] : '';
                        },
                        font: { size: 9 }
                    }
                },
                y: {
                    title: { display: true, text: 'Population Size (N)', font: { size: 12 } },
                    beginAtZero: true,
                    ticks: {
                        font: { size: 9 },
                        callback: function(val) {
                            if (val >= 1000) return (val / 1000).toFixed(val >= 10000 ? 0 : 1) + 'K';
                            return val;
                        }
                    }
                }
            }
        }
    });
}

function updateChart() {
    let data = computeData();

    chart.data.labels = data.labels;
    chart.data.datasets[0].data = data.expData;
    chart.data.datasets[0].hidden = currentView === 'logistic';
    chart.data.datasets[1].data = data.logData;
    chart.data.datasets[1].hidden = currentView === 'exponential';
    chart.data.datasets[2].data = data.kLine;
    chart.data.datasets[2].hidden = currentView === 'exponential';

    // Adjust y-axis max based on view
    if (currentView === 'logistic') {
        let maxLog = Math.max(...data.logData);
        chart.options.scales.y.max = Math.ceil(maxLog * 1.3);
    } else if (currentView === 'exponential') {
        let maxExp = Math.max(...data.expData);
        chart.options.scales.y.max = Math.ceil(maxExp * 1.1);
    } else {
        // Both — cap at 3x K so exponential doesn't make logistic invisible
        chart.options.scales.y.max = Math.ceil(data.K * 3);
    }

    chart.update();
    updateLabels();
    if (dataTableOn) updateDataTable(data);
}

function updateLabels() {
    document.getElementById('r-val').textContent = getR().toFixed(2);
    document.getElementById('k-val').textContent = getK().toLocaleString();
    document.getElementById('n0-val').textContent = getN0().toLocaleString();
    document.getElementById('gen-val').textContent = getGens();

    let r = getR().toFixed(2);
    let K = getK().toLocaleString();
    if (currentView === 'exponential') {
        document.getElementById('eq-display').innerHTML =
            'dN/dt = rN = ' + r + '·N';
    } else {
        document.getElementById('eq-display').innerHTML =
            'dN/dt = rN(K−N)/K<br>r=' + r + ', K=' + K;
    }
}

function updateParams() {
    updateChart();
}

function setView(view) {
    currentView = view;

    // Update button styles
    document.querySelectorAll('.model-btn').forEach(btn => {
        btn.className = 'model-btn';
    });
    if (view === 'both') {
        document.getElementById('btn-both').classList.add('active-both');
    } else if (view === 'exponential') {
        document.getElementById('btn-exp').classList.add('active-exponential');
    } else {
        document.getElementById('btn-log').classList.add('active-logistic');
    }

    updateChart();
}

function toggleOvershoot() {
    overshootOn = !overshootOn;
    let btn = document.getElementById('btn-overshoot');
    if (overshootOn) {
        btn.classList.add('active');
        btn.textContent = '✓ Overshoot';
        document.getElementById('info-text').textContent =
            'Overshoot ON: a 3-generation time lag causes the population to oscillate around K.';
    } else {
        btn.classList.remove('active');
        btn.textContent = 'Overshoot';
        document.getElementById('info-text').textContent =
            'Hover over the chart to see exact population values at each generation.';
    }
    updateChart();
}

function toggleDataTable() {
    dataTableOn = !dataTableOn;
    let btn = document.getElementById('btn-data');
    let container = document.getElementById('data-table-container');
    if (dataTableOn) {
        btn.classList.add('active');
        btn.textContent = '✓ Data Table';
        container.style.display = 'block';
        updateDataTable(computeData());
    } else {
        btn.classList.remove('active');
        btn.textContent = 'Data Table';
        container.style.display = 'none';
    }
}

function updateDataTable(data) {
    let tbody = document.getElementById('data-body');
    let gens = getGens();
    let step = Math.max(1, Math.floor(gens / 20));
    let rows = '';
    for (let t = 0; t <= gens; t += step) {
        let dndt = data.dNdtData[t];
        rows += '<tr>' +
            '<td style="padding:2px 6px; border:1px solid #ddd; text-align:center;">' + t + '</td>' +
            '<td style="padding:2px 6px; border:1px solid #ddd; text-align:right;">' + Math.round(data.expData[t]).toLocaleString() + '</td>' +
            '<td style="padding:2px 6px; border:1px solid #ddd; text-align:right;">' + Math.round(data.logData[t]).toLocaleString() + '</td>' +
            '<td style="padding:2px 6px; border:1px solid #ddd; text-align:right;">' + dndt.toFixed(1) + '</td>' +
            '</tr>';
    }
    // Always include last generation
    if (gens % step !== 0) {
        let t = gens;
        rows += '<tr>' +
            '<td style="padding:2px 6px; border:1px solid #ddd; text-align:center;">' + t + '</td>' +
            '<td style="padding:2px 6px; border:1px solid #ddd; text-align:right;">' + Math.round(data.expData[t]).toLocaleString() + '</td>' +
            '<td style="padding:2px 6px; border:1px solid #ddd; text-align:right;">' + Math.round(data.logData[t]).toLocaleString() + '</td>' +
            '<td style="padding:2px 6px; border:1px solid #ddd; text-align:right;">' + data.dNdtData[t].toFixed(1) + '</td>' +
            '</tr>';
    }
    tbody.innerHTML = rows;
}

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    createChart();
    updateLabels();
});
