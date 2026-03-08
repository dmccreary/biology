// Species Interactions Web
// Interactive vis-network visualization of ecological relationships
// with explore and quiz modes

// ===========================
// DATA
// ===========================

const INTERACTION_TYPES = {
    predation:    { color: '#E74C3C', label: 'Predation',    effects: '+/−' },
    herbivory:    { color: '#E74C3C', label: 'Herbivory',    effects: '+/−' },
    competition:  { color: '#E67E22', label: 'Competition',  effects: '−/−' },
    mutualism:    { color: '#27AE60', label: 'Mutualism',    effects: '+/+' },
    commensalism: { color: '#3498DB', label: 'Commensalism', effects: '+/0' },
    parasitism:   { color: '#8E44AD', label: 'Parasitism',   effects: '+/−' }
};

const nodeData = [
    { id: 'lion',       label: 'Lion',              x: -350, y: -120, icon: '🦁' },
    { id: 'cheetah',    label: 'Cheetah',           x: -350, y: 60,   icon: '🐆' },
    { id: 'zebra',      label: 'Zebra',             x: -160, y: -40,  icon: '🦓' },
    { id: 'grass',      label: 'Grass',             x: -160, y: 160,  icon: '🌾' },
    { id: 'bee',        label: 'Bee',               x: 30,   y: -180, icon: '🐝' },
    { id: 'wildflower', label: 'Wildflower',        x: 30,   y: -60,  icon: '🌸' },
    { id: 'clownfish',  label: 'Clownfish',         x: 30,   y: 80,   icon: '🐠' },
    { id: 'anemone',    label: 'Sea Anemone',       x: 30,   y: 220,  icon: '🪸' },
    { id: 'tick',       label: 'Tick',              x: -350, y: 240,  icon: '🕷️' },
    { id: 'deer',       label: 'Deer',              x: -160, y: 320,  icon: '🦌' },
    { id: 'oak',        label: 'Oak Tree',          x: 30,   y: 360,  icon: '🌳' },
    { id: 'fungus',     label: 'Mycorrhizal\nFungus', x: -160, y: 480, icon: '🍄' },
    { id: 'barnacle',   label: 'Barnacle',          x: -350, y: 400,  icon: '🐚' },
    { id: 'whale',      label: 'Whale',             x: -350, y: 560,  icon: '🐋' }
];

const edgeData = [
    {
        from: 'lion', to: 'zebra', type: 'predation',
        description: 'Lions are apex predators that hunt zebras. The lion benefits (+) by gaining energy, while the zebra is harmed (−) or killed.'
    },
    {
        from: 'cheetah', to: 'zebra', type: 'predation',
        description: 'Cheetahs also hunt zebras, using high-speed chases. The cheetah benefits (+) from the meal; the zebra is harmed (−).'
    },
    {
        from: 'lion', to: 'cheetah', type: 'competition', bidirectional: true,
        description: 'Lions and cheetahs compete for the same prey (zebras and other ungulates). Both species are negatively affected (−/−) by reduced access to food.'
    },
    {
        from: 'zebra', to: 'grass', type: 'herbivory',
        description: 'Zebras graze on grasses. The zebra benefits (+) from nutrition, while the grass is consumed and harmed (−).'
    },
    {
        from: 'bee', to: 'wildflower', type: 'mutualism', bidirectional: true,
        description: 'Bees collect nectar and pollen from wildflowers for food (+), while pollinating the flowers and enabling reproduction (+). Both benefit.'
    },
    {
        from: 'clownfish', to: 'anemone', type: 'mutualism', bidirectional: true,
        description: 'Clownfish live among sea anemone tentacles, gaining protection (+). In return, clownfish defend the anemone from predators and provide nutrients (+).'
    },
    {
        from: 'tick', to: 'deer', type: 'parasitism',
        description: 'Ticks are ectoparasites that feed on deer blood. The tick benefits (+) from the blood meal, while the deer is harmed (−) by blood loss and potential disease transmission.'
    },
    {
        from: 'oak', to: 'fungus', type: 'mutualism', bidirectional: true,
        description: 'Mycorrhizal fungi colonize oak tree roots. The fungus receives sugars from photosynthesis (+), while the tree gains enhanced water and mineral absorption (+).'
    },
    {
        from: 'barnacle', to: 'whale', type: 'commensalism',
        description: 'Barnacles attach to whale skin, gaining a mobile platform for filter feeding (+). The whale is neither significantly helped nor harmed (0).'
    },
    {
        from: 'deer', to: 'oak', type: 'herbivory',
        description: 'Deer browse on oak seedlings and acorns. The deer benefits (+) from nutrition, while the oak is harmed (−) by loss of reproductive potential.'
    }
];

// ===========================
// GLOBALS
// ===========================
let nodes, edges, network;
let selectedNodeId = null;
let quizMode = false;
let quizEdges = [];
let quizIndex = 0;
let quizCorrect = 0;
let quizTotal = 0;

// ===========================
// COLORS
// ===========================
const NODE_COLOR = {
    background: '#F5F5DC',
    border: '#8B7355',
    highlight: { background: '#FFFACD', border: '#8B7355' },
    font: '#2C3E50'
};

const DIMMED = {
    background: '#E8E8E8',
    border: '#CCCCCC',
    font: '#BBBBBB'
};

// ===========================
// ENVIRONMENT
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
        label: n.icon + '\n' + n.label,
        x: n.x,
        y: n.y,
        color: {
            background: NODE_COLOR.background,
            border: NODE_COLOR.border,
            highlight: NODE_COLOR.highlight
        },
        font: { color: NODE_COLOR.font, size: 13, face: 'Arial', multi: true },
        shape: 'box',
        margin: 8,
        borderWidth: 2,
        shadow: { enabled: true, color: 'rgba(0,0,0,0.12)', size: 4, x: 2, y: 2 }
    }));

    const initialEdges = edgeData.map((e, i) => {
        let typeInfo = INTERACTION_TYPES[e.type];
        return {
            id: i,
            from: e.from,
            to: e.to,
            label: quizMode ? '' : typeInfo.label,
            color: { color: quizMode ? '#999' : typeInfo.color },
            width: 2.5,
            font: { size: 10, color: quizMode ? '#999' : typeInfo.color, strokeWidth: 3, strokeColor: '#fff', face: 'Arial' },
            arrows: e.bidirectional
                ? { to: { enabled: false } }
                : { to: { enabled: true, scaleFactor: 0.8 } },
            smooth: { type: 'curvedCW', roundness: 0.12 },
            dashes: e.type === 'commensalism' ? [6, 4] : false
        };
    });

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
            margin: 8,
            font: { size: 13, face: 'Arial' },
            borderWidth: 2
        },
        edges: {
            width: 2.5,
            smooth: { type: 'curvedCW', roundness: 0.12 }
        }
    };

    const container = document.getElementById('network');
    const data = { nodes: nodes, edges: edges };
    network = new vis.Network(container, data, options);

    // Pan to offset for right panel
    network.once('afterDrawing', function() {
        const pos = network.getViewPosition();
        network.moveTo({
            position: { x: pos.x + 60, y: pos.y },
            scale: 0.85,
            animation: false
        });
    });

    // Hover on edge
    network.on('hoverEdge', function(params) {
        if (quizMode || selectedNodeId) return;
        showEdgeInfo(params.edge);
    });

    network.on('blurEdge', function() {
        if (quizMode || selectedNodeId) return;
        resetInfoPanel();
    });

    // Hover on node
    network.on('hoverNode', function(params) {
        if (quizMode) return;
        if (selectedNodeId) return;
        showNodeConnections(params.node, false);
    });

    network.on('blurNode', function() {
        if (quizMode) return;
        if (selectedNodeId) return;
        resetAllStyles();
        resetInfoPanel();
    });

    // Click node
    network.on('click', function(params) {
        if (quizMode) return;
        if (params.nodes.length > 0) {
            const clickedId = params.nodes[0];
            if (selectedNodeId === clickedId) {
                selectedNodeId = null;
                resetAllStyles();
                resetInfoPanel();
            } else {
                selectedNodeId = clickedId;
                showNodeConnections(clickedId, true);
            }
        } else if (params.edges.length > 0) {
            selectedNodeId = null;
            resetAllStyles();
            showEdgeInfo(params.edges[0]);
        } else {
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
function showEdgeInfo(edgeId) {
    const edge = edgeData[edgeId];
    if (!edge) return;
    const typeInfo = INTERACTION_TYPES[edge.type];

    const fromNode = nodeData.find(n => n.id === edge.from);
    const toNode = nodeData.find(n => n.id === edge.to);

    document.getElementById('info-title').textContent =
        fromNode.label.replace(/\n/g, ' ') + ' ↔ ' + toNode.label.replace(/\n/g, ' ');
    document.getElementById('info-title').style.color = typeInfo.color;
    document.getElementById('info-text').innerHTML =
        '<strong>' + typeInfo.label + ' (' + typeInfo.effects + ')</strong><br><br>' +
        edge.description;
}

function showNodeConnections(nodeId, isClick) {
    const node = nodeData.find(n => n.id === nodeId);
    if (!node) return;

    // Find connected edges
    const connectedEdgeIds = [];
    const connectedNodeIds = new Set([nodeId]);

    edgeData.forEach((e, i) => {
        if (e.from === nodeId || e.to === nodeId) {
            connectedEdgeIds.push(i);
            connectedNodeIds.add(e.from);
            connectedNodeIds.add(e.to);
        }
    });

    // Dim non-connected
    nodes.forEach(n => {
        if (connectedNodeIds.has(n.id)) {
            nodes.update({
                id: n.id,
                color: {
                    background: NODE_COLOR.background,
                    border: NODE_COLOR.border
                },
                font: { color: NODE_COLOR.font, size: 13 },
                borderWidth: n.id === nodeId ? 4 : 2
            });
        } else {
            nodes.update({
                id: n.id,
                color: { background: DIMMED.background, border: DIMMED.border },
                font: { color: DIMMED.font, size: 13 },
                borderWidth: 2
            });
        }
    });

    edges.forEach(e => {
        if (connectedEdgeIds.includes(e.id)) {
            const typeInfo = INTERACTION_TYPES[edgeData[e.id].type];
            edges.update({
                id: e.id,
                color: { color: typeInfo.color },
                width: 4,
                font: { size: 11, color: typeInfo.color, strokeWidth: 3, strokeColor: '#fff' }
            });
        } else {
            edges.update({
                id: e.id,
                color: { color: '#E0E0E0' },
                width: 1,
                font: { size: 9, color: '#E0E0E0', strokeWidth: 0 }
            });
        }
    });

    // Build interaction summary
    let summary = '<strong>' + node.icon + ' ' + node.label.replace(/\n/g, ' ') + '</strong><br><br>';
    connectedEdgeIds.forEach(i => {
        const e = edgeData[i];
        const typeInfo = INTERACTION_TYPES[e.type];
        const partner = e.from === nodeId
            ? nodeData.find(n => n.id === e.to)
            : nodeData.find(n => n.id === e.from);
        summary += '<span style="color:' + typeInfo.color + '">●</span> ' +
                   typeInfo.label + ' with ' + partner.label.replace(/\n/g, ' ') +
                   ' (' + typeInfo.effects + ')<br>';
    });

    document.getElementById('info-title').textContent = 'Interactions';
    document.getElementById('info-title').style.color = '#2C3E50';
    document.getElementById('info-text').innerHTML = summary;
}

function resetInfoPanel() {
    document.getElementById('info-title').textContent = 'Explore the Interaction Web';
    document.getElementById('info-title').style.color = '#2C3E50';
    document.getElementById('info-text').innerHTML =
        'Hover over an edge to see the interaction type. Click a species node to highlight all its interactions.';
}

// ===========================
// STYLE RESET
// ===========================
function resetAllStyles() {
    nodes.forEach(n => {
        nodes.update({
            id: n.id,
            color: {
                background: NODE_COLOR.background,
                border: NODE_COLOR.border,
                highlight: NODE_COLOR.highlight
            },
            font: { color: NODE_COLOR.font, size: 13 },
            borderWidth: 2
        });
    });

    edges.forEach(e => {
        const typeInfo = INTERACTION_TYPES[edgeData[e.id].type];
        edges.update({
            id: e.id,
            color: { color: quizMode ? '#999' : typeInfo.color },
            width: 2.5,
            font: { size: 10, color: quizMode ? '#999' : typeInfo.color, strokeWidth: 3, strokeColor: '#fff' }
        });
    });
}

// ===========================
// QUIZ MODE
// ===========================
function toggleQuizMode() {
    quizMode = !quizMode;
    const btn = document.getElementById('quiz-btn');
    const panel = document.getElementById('quiz-panel');

    if (quizMode) {
        btn.classList.add('active');
        btn.textContent = '✓ Quiz Mode';
        panel.style.display = 'block';
        selectedNodeId = null;
        startQuiz();
    } else {
        btn.classList.remove('active');
        btn.textContent = 'Quiz Mode';
        panel.style.display = 'none';
        resetInfoPanel();
    }

    // Re-initialize to show/hide edge labels
    initializeNetwork();
    if (quizMode) {
        startQuiz();
        document.getElementById('quiz-panel').style.display = 'block';
        document.getElementById('quiz-btn').classList.add('active');
        document.getElementById('quiz-btn').textContent = '✓ Quiz Mode';
    }
}

function startQuiz() {
    // Shuffle edges for quiz
    quizEdges = [...Array(edgeData.length).keys()];
    for (let i = quizEdges.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [quizEdges[i], quizEdges[j]] = [quizEdges[j], quizEdges[i]];
    }
    quizIndex = 0;
    quizCorrect = 0;
    quizTotal = edgeData.length;
    showQuizQuestion();
}

function showQuizQuestion() {
    if (quizIndex >= quizTotal) {
        showQuizComplete();
        return;
    }

    const edgeIdx = quizEdges[quizIndex];
    const edge = edgeData[edgeIdx];
    const fromNode = nodeData.find(n => n.id === edge.from);
    const toNode = nodeData.find(n => n.id === edge.to);

    // Highlight the current edge
    resetAllStyles();
    edges.update({
        id: edgeIdx,
        color: { color: '#333' },
        width: 5
    });

    // Highlight connected nodes
    nodes.update({
        id: edge.from,
        borderWidth: 4,
        color: { background: '#FFFACD', border: '#333' }
    });
    nodes.update({
        id: edge.to,
        borderWidth: 4,
        color: { background: '#FFFACD', border: '#333' }
    });

    document.getElementById('quiz-prompt').textContent =
        'What type of interaction exists between ' +
        fromNode.label.replace(/\n/g, ' ') + ' and ' +
        toNode.label.replace(/\n/g, ' ') + '?';

    const types = ['predation', 'competition', 'mutualism', 'commensalism', 'parasitism'];
    // For herbivory, accept predation as the category
    const correctType = edge.type === 'herbivory' ? 'predation' : edge.type;

    let buttonsHtml = '';
    types.forEach(t => {
        const info = INTERACTION_TYPES[t];
        buttonsHtml += '<button class="quiz-option" onclick="checkQuizAnswer(\'' + t + '\', \'' + correctType + '\', ' + edgeIdx + ')">' +
                       info.label + ' (' + info.effects + ')</button>';
    });

    document.getElementById('quiz-buttons').innerHTML = buttonsHtml;
    document.getElementById('quiz-score').textContent =
        'Question ' + (quizIndex + 1) + ' of ' + quizTotal + ' | Score: ' + quizCorrect;
}

function checkQuizAnswer(selected, correct, edgeIdx) {
    const buttons = document.querySelectorAll('.quiz-option');
    const edge = edgeData[edgeIdx];
    const typeInfo = INTERACTION_TYPES[edge.type];

    buttons.forEach(btn => {
        btn.disabled = true;
        const btnType = btn.textContent.split(' (')[0].toLowerCase();
        if (btnType === correct) {
            btn.classList.add('correct');
        } else if (btnType === selected && selected !== correct) {
            btn.classList.add('incorrect');
        }
    });

    if (selected === correct) {
        quizCorrect++;
    }

    // Color the edge correctly
    edges.update({
        id: edgeIdx,
        color: { color: typeInfo.color },
        width: 4,
        label: typeInfo.label,
        font: { size: 10, color: typeInfo.color, strokeWidth: 3, strokeColor: '#fff' }
    });

    // Show explanation
    document.getElementById('info-title').textContent = typeInfo.label + ' (' + typeInfo.effects + ')';
    document.getElementById('info-title').style.color = typeInfo.color;
    document.getElementById('info-text').textContent = edge.description;

    // Advance after delay
    setTimeout(() => {
        quizIndex++;
        showQuizQuestion();
    }, 2000);
}

function showQuizComplete() {
    document.getElementById('quiz-prompt').textContent = 'Quiz Complete!';
    document.getElementById('quiz-buttons').innerHTML = '';
    document.getElementById('quiz-score').innerHTML =
        '<strong>Final Score: ' + quizCorrect + ' / ' + quizTotal + '</strong>' +
        (quizCorrect === quizTotal ? '<br>Perfect! All interactions correctly classified!' : '') +
        '<br><br><button class="quiz-option" onclick="startQuiz()" style="cursor:pointer;">Try Again</button>';

    // Show all edge labels with correct colors
    edgeData.forEach((e, i) => {
        const typeInfo = INTERACTION_TYPES[e.type];
        edges.update({
            id: i,
            color: { color: typeInfo.color },
            width: 2.5,
            label: typeInfo.label,
            font: { size: 10, color: typeInfo.color, strokeWidth: 3, strokeColor: '#fff' }
        });
    });

    resetAllStyles();
    document.getElementById('info-title').textContent = 'Quiz Complete';
    document.getElementById('info-text').textContent =
        'You identified ' + quizCorrect + ' of ' + quizTotal + ' interactions correctly.';
}

// ===========================
// RESET
// ===========================
function resetView() {
    quizMode = false;
    document.getElementById('quiz-btn').classList.remove('active');
    document.getElementById('quiz-btn').textContent = 'Quiz Mode';
    document.getElementById('quiz-panel').style.display = 'none';
    selectedNodeId = null;
    initializeNetwork();
    network.fit({ animation: { duration: 500, easingFunction: 'easeInOutQuad' } });
    setTimeout(() => {
        const pos = network.getViewPosition();
        network.moveTo({
            position: { x: pos.x + 60, y: pos.y },
            scale: 0.85,
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
