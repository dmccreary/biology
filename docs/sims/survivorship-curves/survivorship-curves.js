// Survivorship Curves Comparator
// Semi-log plot of Type I, II, III curves with organism classification activity

const ORGANISMS = [
    { name: 'Human',     type: 'I',   emoji: '👤', hint: 'High parental care, few offspring' },
    { name: 'Elephant',  type: 'I',   emoji: '🐘', hint: 'Long lifespan, low reproduction rate' },
    { name: 'Whale',     type: 'I',   emoji: '🐋', hint: 'K-selected, large body size' },
    { name: 'Robin',     type: 'II',  emoji: '🐦', hint: 'Constant mortality rate at all ages' },
    { name: 'Squirrel',  type: 'II',  emoji: '🐿️', hint: 'Equal chance of death at any age' },
    { name: 'Turtle',    type: 'II',  emoji: '🐢', hint: 'Steady mortality once past juvenile stage' },
    { name: 'Oyster',    type: 'III', emoji: '🦪', hint: 'Millions of eggs, most die young' },
    { name: 'Oak Tree',  type: 'III', emoji: '🌳', hint: 'Produces thousands of acorns' },
    { name: 'Salmon',    type: 'III', emoji: '🐟', hint: 'Mass spawning, very few survive' },
];

let chart;
let placements = {}; // organism name -> placed type
let hintsOn = false;
let correctCount = 0;
let selectedOrgIndex = null; // for click-to-place

// Generate survivorship data (semi-log: y-axis is log scale)
function generateCurveData() {
    let labels = [];
    let type1 = [];
    let type2 = [];
    let type3 = [];
    let N = 1000;
    let steps = 100;

    for (let i = 0; i <= steps; i++) {
        let x = i / steps; // fraction of max lifespan (0 to 1)
        labels.push(Math.round(x * 100));

        // Type I: most survive until old age, then rapid death
        let s1 = N * Math.exp(-Math.pow(x / 0.85, 8));
        type1.push(Math.max(1, s1));

        // Type II: constant mortality rate (exponential decay)
        let s2 = N * Math.exp(-4.6 * x);
        type2.push(Math.max(1, s2));

        // Type III: very high early mortality, few survivors live long
        let s3 = N * Math.exp(-8 * Math.pow(x, 0.3));
        type3.push(Math.max(1, s3));
    }

    return { labels, type1, type2, type3 };
}

function createChart() {
    let data = generateCurveData();
    let ctx = document.getElementById('survChart').getContext('2d');

    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.labels,
            datasets: [
                {
                    label: 'Type I (e.g., humans)',
                    data: data.type1,
                    borderColor: '#3498db',
                    backgroundColor: 'rgba(52, 152, 219, 0.05)',
                    fill: true,
                    borderWidth: 3,
                    pointRadius: 0,
                    pointHoverRadius: 3,
                    tension: 0.4
                },
                {
                    label: 'Type II (e.g., robins)',
                    data: data.type2,
                    borderColor: '#27ae60',
                    backgroundColor: 'rgba(39, 174, 96, 0.05)',
                    fill: true,
                    borderWidth: 3,
                    pointRadius: 0,
                    pointHoverRadius: 3,
                    tension: 0.4
                },
                {
                    label: 'Type III (e.g., oysters)',
                    data: data.type3,
                    borderColor: '#e67e22',
                    backgroundColor: 'rgba(230, 126, 34, 0.05)',
                    fill: true,
                    borderWidth: 3,
                    pointRadius: 0,
                    pointHoverRadius: 3,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: { duration: 500 },
            interaction: {
                mode: 'index',
                intersect: false
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Survivorship Curves (Semi-Log Scale)',
                    font: { size: 14 }
                },
                tooltip: {
                    enabled: false
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Percentage of Maximum Lifespan',
                        font: { size: 12 }
                    },
                    ticks: {
                        callback: function(val, idx) {
                            return idx % 10 === 0 ? this.getLabelForValue(val) + '%' : '';
                        },
                        font: { size: 9 }
                    }
                },
                y: {
                    type: 'logarithmic',
                    title: {
                        display: true,
                        text: 'Number of Survivors (log scale)',
                        font: { size: 12 }
                    },
                    min: 1,
                    max: 1000,
                    ticks: {
                        font: { size: 9 },
                        callback: function(val) {
                            if ([1, 10, 100, 1000].includes(val)) return val;
                            return '';
                        }
                    }
                }
            }
        }
    });
}

// Organism pool rendering
function renderPool() {
    let pool = document.getElementById('organism-pool');
    pool.innerHTML = '';

    ORGANISMS.forEach((org, i) => {
        if (placements[org.name]) return; // already placed

        let chip = document.createElement('div');
        chip.className = 'organism-chip';
        if (selectedOrgIndex === i) {
            chip.classList.add('selected');
        }
        chip.draggable = true;
        chip.dataset.index = i;
        chip.textContent = org.emoji + ' ' + org.name;

        if (hintsOn) {
            chip.title = org.hint;
            chip.textContent += ' \u24D8';
        }

        // Drag support
        chip.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', i.toString());
            chip.classList.add('dragging');
            selectedOrgIndex = null;
            clearZoneHighlights();
        });
        chip.addEventListener('dragend', () => {
            chip.classList.remove('dragging');
        });

        // Click-to-select support
        chip.addEventListener('click', (e) => {
            e.stopPropagation();
            if (selectedOrgIndex === i) {
                // Deselect
                selectedOrgIndex = null;
                clearZoneHighlights();
            } else {
                selectedOrgIndex = i;
                highlightZones();
            }
            renderPool();
            updateInfoText();
        });

        pool.appendChild(chip);
    });
}

function highlightZones() {
    document.querySelectorAll('.drop-overlay').forEach(z => z.classList.add('selected-target'));
}

function clearZoneHighlights() {
    document.querySelectorAll('.drop-overlay').forEach(z => z.classList.remove('selected-target'));
}

function renderDropZones() {
    ['I', 'II', 'III'].forEach(type => {
        let zoneId = type === 'I' ? 'drop-type1' : type === 'II' ? 'drop-type2' : 'drop-type3';
        let zone = document.getElementById(zoneId);

        let label = type === 'I' ? 'Type I \u2014 low early mortality' :
                    type === 'II' ? 'Type II \u2014 constant mortality' :
                    'Type III \u2014 high early mortality';

        let placedHtml = Object.entries(placements)
            .filter(([name, t]) => t === type)
            .map(([name]) => {
                let org = ORGANISMS.find(o => o.name === name);
                let correct = org.type === type;
                let cls = correct ? 'placed-correct' : 'placed-incorrect';
                return '<span class="placed-chip ' + cls + '">' + org.emoji + ' ' + name +
                       (correct ? ' \u2713' : ' \u2717') + '</span>';
            }).join(' ');

        zone.innerHTML = '<span class="zone-label">' + label + '</span>' +
                         (placedHtml ? ' ' + placedHtml : '');
    });

    // Restore highlight if an organism is selected
    if (selectedOrgIndex !== null) {
        highlightZones();
    }
}

function handleDragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add('drag-over');
}

function handleDragLeave(e) {
    e.currentTarget.classList.remove('drag-over');
}

function handleDrop(e, type) {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');

    let idx = parseInt(e.dataTransfer.getData('text/plain'));
    placeOrganism(idx, type);
}

function handleZoneClick(type) {
    if (selectedOrgIndex === null) return;
    placeOrganism(selectedOrgIndex, type);
    selectedOrgIndex = null;
    clearZoneHighlights();
}

function placeOrganism(idx, type) {
    let org = ORGANISMS[idx];
    if (placements[org.name]) return; // already placed

    placements[org.name] = type;
    let correct = org.type === type;

    if (correct) {
        correctCount++;
    }

    renderPool();
    renderDropZones();
    updateScore();

    // Check if all placed
    if (Object.keys(placements).length === ORGANISMS.length) {
        let total = ORGANISMS.length;
        if (correctCount === total) {
            document.getElementById('info-text').textContent =
                'Perfect! All ' + total + ' organisms correctly classified!';
        } else {
            document.getElementById('info-text').textContent =
                correctCount + ' of ' + total + ' correct. Click Reset to try again.';
        }
    } else {
        updateInfoText();
    }
}

function updateInfoText() {
    if (selectedOrgIndex !== null) {
        let org = ORGANISMS[selectedOrgIndex];
        document.getElementById('info-text').textContent =
            org.emoji + ' ' + org.name + ' selected \u2014 click a curve zone on the graph to place it.';
    } else {
        document.getElementById('info-text').textContent =
            'Click an organism, then click a curve zone \u2014 or drag and drop.';
    }
}

function updateScore() {
    let placed = Object.keys(placements).length;
    let total = ORGANISMS.length;
    document.getElementById('score-display').textContent =
        correctCount + ' correct / ' + placed + ' placed (' + total + ' total)';
}

function toggleHints() {
    hintsOn = !hintsOn;
    let btn = document.getElementById('btn-hint');
    if (hintsOn) {
        btn.classList.add('active');
        btn.textContent = '\u2713 Hints';
    } else {
        btn.classList.remove('active');
        btn.textContent = 'Hints';
    }
    renderPool();
}

function resetAll() {
    placements = {};
    correctCount = 0;
    hintsOn = false;
    selectedOrgIndex = null;
    document.getElementById('btn-hint').classList.remove('active');
    document.getElementById('btn-hint').textContent = 'Hints';
    document.getElementById('info-text').textContent =
        'Click an organism, then click a curve zone \u2014 or drag and drop.';
    document.getElementById('score-display').textContent = '';
    clearZoneHighlights();
    renderPool();
    renderDropZones();
}

// Deselect organism when clicking outside
document.addEventListener('click', (e) => {
    if (selectedOrgIndex !== null &&
        !e.target.closest('.organism-chip') &&
        !e.target.closest('.drop-overlay')) {
        selectedOrgIndex = null;
        clearZoneHighlights();
        renderPool();
        updateInfoText();
    }
});

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    createChart();
    renderPool();
    renderDropZones();
});
