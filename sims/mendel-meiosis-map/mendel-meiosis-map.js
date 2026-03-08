// Mendel-to-Meiosis Concept Map
// Interactive vis-network visualization showing connections between
// meiotic events and Mendelian inheritance principles

// ===========================
// NODE DATA
// ===========================

// Left cluster: Meiotic Events (blue)
// Right cluster: Genetic Outcomes (green)
const nodeData = [
    // Meiotic Events (blue cluster, left side)
    { id: 'homolog-pairing',    label: 'Homolog Pairing\n(Prophase I)',        x: -320, y: -160, group: 'meiosis' },
    { id: 'crossing-over',      label: 'Crossing Over\n(Prophase I)',          x: -320, y: -40,  group: 'meiosis' },
    { id: 'random-orientation',  label: 'Random Orientation\n(Metaphase I)',    x: -320, y: 80,   group: 'meiosis' },
    { id: 'homolog-separation', label: 'Homolog Separation\n(Anaphase I)',     x: -320, y: 200,  group: 'meiosis' },
    { id: 'sister-separation',  label: 'Sister Chromatid\nSeparation\n(Anaphase II)', x: -320, y: 320, group: 'meiosis' },

    // Genetic Outcomes (green cluster, right side)
    { id: 'segregation',        label: 'Law of\nSegregation',                  x: 100, y: -160, group: 'genetics' },
    { id: 'independent',        label: 'Law of Independent\nAssortment',       x: 100, y: -40,  group: 'genetics' },
    { id: 'recombination',      label: 'Genetic\nRecombination',               x: 100, y: 80,   group: 'genetics' },
    { id: 'haploid',            label: 'Haploid\nGametes',                     x: 100, y: 200,  group: 'genetics' },
    { id: 'diversity',          label: 'Genetic\nDiversity',                   x: 100, y: 320,  group: 'genetics' }
];

// ===========================
// EDGE DATA with labels
// ===========================
const edgeData = [
    { from: 'homolog-pairing',   to: 'segregation',    label: 'enables' },
    { from: 'homolog-separation', to: 'segregation',   label: 'physical basis' },
    { from: 'homolog-separation', to: 'haploid',       label: 'produces' },
    { from: 'random-orientation', to: 'independent',   label: 'physical basis' },
    { from: 'random-orientation', to: 'diversity',     label: 'increases' },
    { from: 'crossing-over',     to: 'recombination',  label: 'creates' },
    { from: 'crossing-over',     to: 'diversity',      label: 'increases' },
    { from: 'sister-separation', to: 'haploid',        label: 'completes' },
    { from: 'segregation',       to: 'diversity',      label: 'contributes to' },
    { from: 'independent',       to: 'diversity',      label: 'contributes to' },
    { from: 'recombination',     to: 'diversity',      label: 'contributes to' },
    { from: 'homolog-pairing',   to: 'crossing-over',  label: 'required for' }
];

// ===========================
// TOOLTIP DESCRIPTIONS
// ===========================
const descriptions = {
    'homolog-pairing':   'During prophase I, homologous chromosomes find each other and pair up in a process called synapsis. This pairing aligns maternal and paternal copies side by side, which is essential for crossing over and proper segregation.',
    'crossing-over':     'Crossing over occurs when non-sister chromatids of homologous chromosomes exchange segments during prophase I. This produces recombinant chromosomes with new combinations of alleles not found in either parent.',
    'random-orientation': 'At metaphase I, each pair of homologs lines up independently at the cell equator. Whether the maternal or paternal homolog faces each pole is random, creating 2^n possible chromosome combinations in gametes.',
    'homolog-separation': 'During anaphase I, the homologous chromosomes are pulled to opposite poles of the cell. This is the physical event that separates the two alleles of each gene into different gametes.',
    'sister-separation': 'In anaphase II, sister chromatids are finally separated, completing the reduction from diploid to haploid. Each resulting gamete receives one chromatid from each original chromosome.',
    'segregation':       'Mendel\'s First Law states that the two alleles for each gene separate during gamete formation, so each gamete carries only one allele. The physical basis is the separation of homologous chromosomes in anaphase I.',
    'independent':       'Mendel\'s Second Law states that alleles of different genes assort independently during gamete formation. This occurs because homologous pairs orient randomly at metaphase I, independently of other pairs.',
    'recombination':     'Genetic recombination produces new allele combinations on a single chromosome through crossing over. This is why linked genes do not always travel together, and it increases the genetic variation among offspring.',
    'haploid':           'Meiosis produces haploid gametes (n) from diploid cells (2n). The reduction in chromosome number is essential so that fertilization restores the diploid number in the next generation.',
    'diversity':         'Genetic diversity among gametes arises from three meiotic mechanisms: crossing over, random orientation of homologs, and the vast number of possible fertilization combinations. This variation is the raw material for natural selection.'
};

// ===========================
// COLOR DEFINITIONS
// ===========================
const COLORS = {
    meiosis: {
        background: '#5DADE2',
        border: '#2E86C1',
        highlight: { background: '#85C1E9', border: '#2E86C1' },
        font: '#1B2631'
    },
    genetics: {
        background: '#58D68D',
        border: '#28B463',
        highlight: { background: '#82E0AA', border: '#28B463' },
        font: '#1B2631'
    },
    dimmed: {
        background: '#D5DBDB',
        border: '#ABB2B9',
        font: '#ABB2B9'
    },
    edgeDefault: '#7F8C8D',
    edgeHighlight: '#E74C3C',
    edgeDimmed: '#D5DBDB'
};

// ===========================
// GLOBALS
// ===========================
let nodes, edges, network;
let selectedNodeId = null;

// ===========================
// ENVIRONMENT DETECTION
// ===========================
function isInIframe() {
    try { return window.self !== window.top; }
    catch (e) { return true; }
}

// ===========================
// INITIALIZATION
// ===========================
function initializeNetwork() {
    selectedNodeId = null;

    const initialNodes = nodeData.map(n => ({
        id: n.id,
        label: n.label,
        x: n.x,
        y: n.y,
        group: n.group,
        color: {
            background: COLORS[n.group].background,
            border: COLORS[n.group].border,
            highlight: COLORS[n.group].highlight
        },
        font: { color: COLORS[n.group].font, size: 14, face: 'Arial', multi: true },
        shape: 'box',
        margin: 10,
        borderWidth: 2,
        shadow: { enabled: true, color: 'rgba(0,0,0,0.15)', size: 4, x: 2, y: 2 }
    }));

    const initialEdges = edgeData.map((e, i) => ({
        id: i,
        from: e.from,
        to: e.to,
        label: e.label,
        color: { color: COLORS.edgeDefault, highlight: COLORS.edgeHighlight },
        width: 2,
        font: { size: 10, color: '#555', strokeWidth: 3, strokeColor: '#ffffff', face: 'Arial' },
        arrows: { to: { enabled: true, scaleFactor: 0.8 } },
        smooth: { type: 'curvedCW', roundness: 0.15 }
    }));

    nodes = new vis.DataSet(initialNodes);
    edges = new vis.DataSet(initialEdges);

    const enableMouseInteraction = !isInIframe();

    const options = {
        layout: { improvedLayout: false },
        physics: { enabled: false },
        interaction: {
            selectConnectedEdges: false,
            zoomView: enableMouseInteraction,
            dragView: enableMouseInteraction,
            dragNodes: false,
            navigationButtons: true,
            hover: true,
            tooltipDelay: 100
        },
        nodes: {
            shape: 'box',
            margin: 10,
            font: { size: 14, face: 'Arial' },
            borderWidth: 2
        },
        edges: {
            arrows: { to: { enabled: true, scaleFactor: 0.8 } },
            width: 2,
            smooth: { type: 'curvedCW', roundness: 0.15 }
        }
    };

    const container = document.getElementById('network');
    const data = { nodes: nodes, edges: edges };
    network = new vis.Network(container, data, options);

    // Pan to offset for right panel and hold a zoomed-out view (~2 "-" clicks)
    network.once('afterDrawing', function() {
        const basePos = network.getViewPosition();
        const baseScale = network.getScale();
        const targetPos = { x: basePos.x + 60, y: basePos.y };
        const targetScale = baseScale * 0.9 * 0.9;

        const applyInitialView = () => {
            network.moveTo({
                position: targetPos,
                scale: targetScale,
                animation: false
            });
        };

        applyInitialView();
        setTimeout(applyInitialView, 100);
        setTimeout(applyInitialView, 400);
    });

    // Event: hover over node
    network.on('hoverNode', function(params) {
        if (selectedNodeId) return; // don't override click selection
        showNodeInfo(params.node);
    });

    // Event: hover off node
    network.on('blurNode', function() {
        if (selectedNodeId) return;
        resetInfoPanel();
    });

    // Event: click node to highlight connections
    network.on('click', function(params) {
        if (params.nodes.length > 0) {
            const clickedId = params.nodes[0];
            if (selectedNodeId === clickedId) {
                // Clicking same node again deselects
                selectedNodeId = null;
                resetAllStyles();
                resetInfoPanel();
            } else {
                selectedNodeId = clickedId;
                highlightConnections(clickedId);
                showNodeInfo(clickedId);
            }
        } else {
            // Clicked empty space
            selectedNodeId = null;
            resetAllStyles();
            resetInfoPanel();
        }
    });

    resetInfoPanel();
}

// ===========================
// INFO PANEL
// ===========================
function showNodeInfo(nodeId) {
    const node = nodeData.find(n => n.id === nodeId);
    if (!node) return;

    const titleEl = document.getElementById('info-title');
    const textEl = document.getElementById('info-text');

    titleEl.textContent = node.label.replace(/\n/g, ' ');
    titleEl.style.color = node.group === 'meiosis' ? COLORS.meiosis.border : COLORS.genetics.border;
    textEl.textContent = descriptions[nodeId] || '';
}

function resetInfoPanel() {
    document.getElementById('info-title').textContent = 'Explore the Concept Map';
    document.getElementById('info-title').style.color = '#2C3E50';
    document.getElementById('info-text').textContent =
        'Hover over a node to learn about each concept. Click a node to highlight its connections.';
}

// ===========================
// HIGHLIGHT CONNECTIONS
// ===========================
function highlightConnections(nodeId) {
    // Find all connected nodes and edges
    const connectedEdgeIds = edges.getIds().filter(eid => {
        const e = edges.get(eid);
        return e.from === nodeId || e.to === nodeId;
    });

    const connectedNodeIds = new Set([nodeId]);
    connectedEdgeIds.forEach(eid => {
        const e = edges.get(eid);
        connectedNodeIds.add(e.from);
        connectedNodeIds.add(e.to);
    });

    // Dim all nodes
    nodes.forEach(n => {
        if (connectedNodeIds.has(n.id)) {
            const group = nodeData.find(nd => nd.id === n.id).group;
            nodes.update({
                id: n.id,
                color: {
                    background: COLORS[group].background,
                    border: COLORS[group].border
                },
                font: { color: COLORS[group].font, size: 14 },
                borderWidth: n.id === nodeId ? 4 : 2
            });
        } else {
            nodes.update({
                id: n.id,
                color: {
                    background: COLORS.dimmed.background,
                    border: COLORS.dimmed.border
                },
                font: { color: COLORS.dimmed.font, size: 14 },
                borderWidth: 2
            });
        }
    });

    // Dim / highlight edges
    edges.forEach(e => {
        if (connectedEdgeIds.includes(e.id)) {
            const group = nodeData.find(nd => nd.id === e.from).group;
            edges.update({
                id: e.id,
                color: { color: group === 'meiosis' ? COLORS.meiosis.border : COLORS.genetics.border },
                width: 3,
                font: { size: 11, color: '#333', strokeWidth: 3, strokeColor: '#fff' }
            });
        } else {
            edges.update({
                id: e.id,
                color: { color: COLORS.edgeDimmed },
                width: 1,
                font: { size: 9, color: COLORS.edgeDimmed, strokeWidth: 0 }
            });
        }
    });
}

function resetAllStyles() {
    nodes.forEach(n => {
        const group = nodeData.find(nd => nd.id === n.id).group;
        nodes.update({
            id: n.id,
            color: {
                background: COLORS[group].background,
                border: COLORS[group].border,
                highlight: COLORS[group].highlight
            },
            font: { color: COLORS[group].font, size: 14 },
            borderWidth: 2
        });
    });

    edges.forEach(e => {
        edges.update({
            id: e.id,
            color: { color: COLORS.edgeDefault, highlight: COLORS.edgeHighlight },
            width: 2,
            font: { size: 10, color: '#555', strokeWidth: 3, strokeColor: '#fff' }
        });
    });
}

// ===========================
// RESET BUTTON
// ===========================
function resetView() {
    selectedNodeId = null;
    resetAllStyles();
    resetInfoPanel();
    network.fit({ animation: { duration: 500, easingFunction: 'easeInOutQuad' } });
    // Re-offset after fit
    setTimeout(() => {
        const pos = network.getViewPosition();
        network.moveTo({
            position: { x: pos.x + 60, y: pos.y },
            animation: { duration: 300 }
        });
    }, 600);
}

// ===========================
// INIT
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    initializeNetwork();
    document.getElementById('reset-btn').addEventListener('click', resetView);
});
