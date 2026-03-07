// Dihybrid Cross Outcome Visualizer
// Chart.js + HTML table for Punnett square with phenotype bar chart

const PHENOTYPE_COLORS = {
    'Round Yellow':    '#F4D03F',
    'Round Green':     '#2ECC71',
    'Wrinkled Yellow': '#E67E22',
    'Wrinkled Green':  '#A04000'
};

const PHENOTYPE_ORDER = ['Round Yellow', 'Round Green', 'Wrinkled Yellow', 'Wrinkled Green'];

let showGenotypes = true;
let chart = null;
let currentGrid = [];  // 4x4 array of {genotype, phenotype}

// Determine gametes from a two-locus genotype pair
function getGametes(locus1, locus2) {
    const alleles1 = locus1.length === 2 ? [locus1[0], locus1[1]] : [locus1[0], locus1[0]];
    const alleles2 = locus2.length === 2 ? [locus2[0], locus2[1]] : [locus2[0], locus2[0]];
    const gametes = [];
    for (const a1 of alleles1) {
        for (const a2 of alleles2) {
            gametes.push(a1 + a2);
        }
    }
    return gametes;
}

// Combine two gametes into a genotype string, with dominant allele first per locus
function combineGametes(g1, g2) {
    let a1 = g1[0], a2 = g2[0]; // locus 1
    let b1 = g1[1], b2 = g2[1]; // locus 2
    // Sort each locus: uppercase (dominant) first
    const locus1 = [a1, a2].sort((x, y) => x.toLowerCase().localeCompare(y.toLowerCase()) || x.localeCompare(y)).join('');
    const locus2 = [b1, b2].sort((x, y) => x.toLowerCase().localeCompare(y.toLowerCase()) || x.localeCompare(y)).join('');
    return locus1 + locus2;
}

// Sort alleles so dominant is first (uppercase before lowercase)
function sortAlleles(a, b) {
    if (a === a.toUpperCase() && b === b.toLowerCase()) return -1;
    if (a === a.toLowerCase() && b === b.toUpperCase()) return 1;
    return 0;
}

function formatGenotype(gt) {
    // gt is 4 chars like "RrYy"
    const l1a = gt[0], l1b = gt[1], l2a = gt[2], l2b = gt[3];
    const loc1 = [l1a, l1b].sort(sortAlleles).join('');
    const loc2 = [l2a, l2b].sort(sortAlleles).join('');
    return loc1 + loc2;
}

function getPhenotype(genotype) {
    const hasR = genotype[0] === 'R' || genotype[1] === 'R';
    const hasY = genotype[2] === 'Y' || genotype[3] === 'Y';
    const shape = hasR ? 'Round' : 'Wrinkled';
    const color = hasY ? 'Yellow' : 'Green';
    return shape + ' ' + color;
}

function buildCross() {
    const p1l1 = document.getElementById('p1-locus1').value;
    const p1l2 = document.getElementById('p1-locus2').value;
    const p2l1 = document.getElementById('p2-locus1').value;
    const p2l2 = document.getElementById('p2-locus2').value;

    const gametes1 = getGametes(p1l1, p1l2);
    const gametes2 = getGametes(p2l1, p2l2);

    // Build 4x4 grid
    currentGrid = [];
    for (let r = 0; r < gametes1.length; r++) {
        const row = [];
        for (let c = 0; c < gametes2.length; c++) {
            const gt = formatGenotype(combineGametes(gametes1[r], gametes2[c]));
            row.push({ genotype: gt, phenotype: getPhenotype(gt) });
        }
        currentGrid.push(row);
    }

    renderPunnett(gametes1, gametes2);
    updateChart();
    updateSummary();
}

function renderPunnett(gametes1, gametes2) {
    const table = document.getElementById('punnett-table');
    let html = '<tr><th class="corner-cell">P1 \\ P2</th>';
    for (const g of gametes2) {
        html += `<th>${g}</th>`;
    }
    html += '</tr>';

    for (let r = 0; r < gametes1.length; r++) {
        html += `<tr><th>${gametes1[r]}</th>`;
        for (let c = 0; c < gametes2.length; c++) {
            const cell = currentGrid[r][c];
            const bg = PHENOTYPE_COLORS[cell.phenotype];
            const text = showGenotypes ? cell.genotype : cell.phenotype.split(' ').map(w => w[0]).join('');
            const textColor = cell.phenotype === 'Wrinkled Green' ? '#fff' : '#222';
            html += `<td style="background:${bg}; color:${textColor}"
                         data-phenotype="${cell.phenotype}"
                         title="${cell.genotype} → ${cell.phenotype}">${text}</td>`;
        }
        html += '</tr>';
    }
    table.innerHTML = html;
}

function updateChart() {
    // Count phenotypes
    const counts = {};
    for (const p of PHENOTYPE_ORDER) counts[p] = 0;
    for (const row of currentGrid) {
        for (const cell of row) {
            counts[cell.phenotype] = (counts[cell.phenotype] || 0) + 1;
        }
    }

    const labels = PHENOTYPE_ORDER.filter(p => counts[p] > 0);
    const data = labels.map(p => counts[p]);
    const colors = labels.map(p => PHENOTYPE_COLORS[p]);

    if (chart) {
        chart.data.labels = labels;
        chart.data.datasets[0].data = data;
        chart.data.datasets[0].backgroundColor = colors;
        chart.data.datasets[0].borderColor = colors.map(c => darken(c, 0.2));
        chart.update();
    } else {
        const ctx = document.getElementById('phenotype-chart').getContext('2d');
        chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Count (out of 16)',
                    data: data,
                    backgroundColor: colors,
                    borderColor: colors.map(c => darken(c, 0.2)),
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 1.1,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 16,
                        ticks: { stepSize: 1, font: { size: 11 } },
                        title: { display: true, text: 'Count (out of 16)', font: { size: 12 } }
                    },
                    x: {
                        ticks: { font: { size: 11 }, maxRotation: 30 },
                        title: { display: true, text: 'Phenotype', font: { size: 12 } }
                    }
                },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: function(ctx) {
                                const count = ctx.parsed.y;
                                const pct = ((count / 16) * 100).toFixed(1);
                                return `${count} / 16  (${pct}%)`;
                            }
                        }
                    }
                },
                onClick: (event, elements) => {
                    highlightPhenotype(elements.length > 0 ? chart.data.labels[elements[0].index] : null);
                }
            }
        });
    }
}

function highlightPhenotype(phenotype) {
    const cells = document.querySelectorAll('#punnett-table td');
    cells.forEach(td => {
        if (phenotype && td.dataset.phenotype === phenotype) {
            td.classList.add('highlighted');
        } else {
            td.classList.remove('highlighted');
        }
    });
}

function updateSummary() {
    const counts = {};
    for (const p of PHENOTYPE_ORDER) counts[p] = 0;
    for (const row of currentGrid) {
        for (const cell of row) {
            counts[cell.phenotype] = (counts[cell.phenotype] || 0) + 1;
        }
    }

    const present = PHENOTYPE_ORDER.filter(p => counts[p] > 0);
    const ratio = present.map(p => counts[p]);
    // Simplify ratio by GCD
    const g = ratio.reduce((a, b) => gcd(a, b));
    const simplified = ratio.map(r => r / g);
    const ratioStr = simplified.join(' : ');

    // Check if it's the classic 9:3:3:1
    const isClassic = simplified.length === 4 && simplified[0] === 9 && simplified[1] === 3 && simplified[2] === 3 && simplified[3] === 1;
    const expectedNote = isClassic ? ' <strong>(Classic 9:3:3:1 ratio!)</strong>' : '';

    const countsStr = present.map(p => `${p}: ${counts[p]}`).join(' | ');
    document.getElementById('summary').innerHTML =
        `<strong>Observed ratio:</strong> ${ratioStr}${expectedNote}<br>` +
        `${countsStr}  &mdash;  Click a bar to highlight cells in the Punnett square.`;
}

function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }

function darken(hex, amount) {
    hex = hex.replace('#', '');
    const r = Math.max(0, parseInt(hex.substring(0, 2), 16) - Math.round(255 * amount));
    const g = Math.max(0, parseInt(hex.substring(2, 4), 16) - Math.round(255 * amount));
    const b = Math.max(0, parseInt(hex.substring(4, 6), 16) - Math.round(255 * amount));
    return `rgb(${r},${g},${b})`;
}

function toggleView() {
    showGenotypes = !showGenotypes;
    document.getElementById('toggle-btn').textContent = showGenotypes ? 'Show Phenotypes' : 'Show Genotypes';
    buildCross();
}

// Event listeners
document.getElementById('p1-locus1').addEventListener('change', buildCross);
document.getElementById('p1-locus2').addEventListener('change', buildCross);
document.getElementById('p2-locus1').addEventListener('change', buildCross);
document.getElementById('p2-locus2').addEventListener('change', buildCross);

// Initial build
buildCross();
