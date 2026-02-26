// Scientific Method Diagram Interactivity

// Node information with descriptions and biology examples
const nodeInfo = {
    'Start': {
        title: 'Observe Phenomenon or Ask Question',
        description: 'Science begins with curiosity. Scientists observe the natural world and ask questions about what they see. Good questions are specific and testable.',
        example: 'A student notices that potato slices bubble vigorously when dropped into hydrogen peroxide, but boiled potato slices barely bubble at all, and asks: "How does temperature affect the activity of catalase?"'
    },
    'Research': {
        title: 'Background Research',
        description: 'Before designing an experiment, scientists review existing knowledge. This includes reading scientific papers, textbooks, and consulting experts to understand what is already known.',
        example: 'The student researches enzyme structure and active site theory, discovering that high temperatures denature proteins by disrupting hydrogen bonds — permanently distorting the active site so substrate can no longer bind.'
    },
    'Hypothesis': {
        title: 'Formulate Hypothesis',
        description: 'A hypothesis is a testable prediction based on observations and research. It should be specific and include both the independent and dependent variables.',
        example: '"If temperature increases beyond 40°C, then catalase activity will decrease because heat denatures the enzyme\'s active site, preventing H₂O₂ from binding and being broken down."'
    },
    'Design': {
        title: 'Design Experiment',
        description: 'Plan a controlled experiment that tests only one variable at a time. Identify controls, variables, materials needed, and the procedure to follow.',
        example: 'Design: Incubate potato extract at 0°C, 25°C, 37°C, 60°C, and 80°C for 5 minutes. Add equal volumes of H₂O₂ to each tube. Measure O₂ bubble column height (mm) after 60 seconds. Three trials per temperature; same potato batch and H₂O₂ concentration throughout.'
    },
    'Conduct': {
        title: 'Conduct Experiment & Collect Data',
        description: 'Carefully follow the experimental procedure and record all observations and measurements. Use appropriate tools and units. Repeat trials for reliability.',
        example: 'Mean bubble height (mm) ± SD: 0°C (11 ± 2), 25°C (37 ± 3), 37°C (54 ± 4), 60°C (19 ± 5), 80°C (3 ± 1). Each value is averaged from 3 independent trials.'
    },
    'Analyze': {
        title: 'Analyze Data',
        description: 'Organize data into tables and graphs. Look for patterns and relationships. Calculate averages, percentages, or other statistics. Identify any anomalies.',
        example: 'Plot bubble height vs. temperature as a line graph with error bars (±1 SD). Activity peaks near 37°C — human body temperature — then drops sharply above 60°C, consistent with denaturation. Error bars at 37°C and 60°C do not overlap, suggesting a statistically significant difference.'
    },
    'Decision1': {
        title: 'Does Data Support Hypothesis?',
        description: 'Compare your results to your prediction. Did the data show what you expected? Consider whether your evidence is strong enough to draw conclusions.',
        example: 'Activity peaked at 37°C and fell sharply above 60°C, matching the prediction. Non-overlapping error bars strengthen confidence that the decline is real, not due to chance. The data support the hypothesis.'
    },
    'Accept': {
        title: 'Accept Hypothesis',
        description: 'If the data consistently supports the hypothesis across multiple trials, the hypothesis is accepted. This doesn\'t mean it\'s proven—just supported by evidence.',
        example: 'Conclusion: The hypothesis is supported. Catalase activity peaks near 37°C (optimal for human enzymes) and is nearly abolished at 80°C, consistent with heat-induced denaturation of the enzyme\'s active site.'
    },
    'Revise': {
        title: 'Revise or Reject Hypothesis',
        description: 'If the data doesn\'t support the hypothesis, this is not failure—it\'s valuable information! Analyze why and form a new, refined hypothesis.',
        example: 'If activity at 0°C was unexpectedly high, revise: "Perhaps cold slows but does not eliminate enzyme activity. Revised hypothesis: activity follows a bell curve peaking at the optimal temperature, declining on both sides."'
    },
    'Communicate': {
        title: 'Communicate Results',
        description: 'Share findings through lab reports, presentations, or publications. Include methods, data, analysis, and conclusions so others can evaluate and replicate the work.',
        example: 'Write a lab report: Introduction (enzyme structure, active site, denaturation), Hypothesis, Materials & Procedure, Data Table with standard deviations, Line graph with error bars, Statistical analysis, Conclusion linking results to protein structure. Present key findings to class; post data to school database for peer comparison.'
    },
    'Decision2': {
        title: 'New Questions Raised?',
        description: 'Good science leads to more questions. Each experiment reveals new aspects to explore. The scientific method is cyclical and ongoing.',
        example: 'New questions emerge: "How does pH affect catalase activity?" "Does substrate concentration change the rate?" "Do enzymes from different organisms (liver vs. potato) have different optimal temperatures?" The investigation cycle continues!'
    },
    'End': {
        title: 'End (Temporary)',
        description: 'A particular investigation may end, but scientific inquiry never truly stops. Today\'s conclusions become tomorrow\'s starting points for new discoveries.',
        example: 'The temperature experiment is complete, but the student is now curious whether pH affects catalase the same way. A new experiment is designed holding temperature constant at 37°C while varying pH from 2 to 12.'
    }
};

// Default info to show
const defaultInfo = {
    title: 'Scientific Method',
    description: 'Hover over any step in the diagram to learn more about it and see a biology example.',
    example: '<strong>Tip:</strong> Click on any node to keep its information displayed.'
};

let lockedNode = null;

// Initialize Mermaid
mermaid.initialize({
    startOnLoad: true,
    theme: 'default',
    flowchart: {
        useMaxWidth: false,
        htmlLabels: true,
        curve: 'basis'
    }
});

// Update infobox content
function updateInfobox(info) {
    document.getElementById('infoTitle').textContent = info.title;
    document.getElementById('infoDescription').textContent = info.description;

    const exampleBox = document.getElementById('infoExample');
    if (info.example.startsWith('<')) {
        exampleBox.innerHTML = info.example;
    } else {
        exampleBox.innerHTML = `<strong>Biology Example:</strong><p>${info.example}</p>`;
    }
}

// Track current mouse Y position relative to container
let lastMouseY = 0;

// Move infobox to align with node or mouse position
function moveInfoboxToNode(node) {
    const infobox = document.getElementById('infobox');
    const container = document.querySelector('.main-content');
    const containerRect = container.getBoundingClientRect();
    const infoboxHeight = infobox.offsetHeight;

    // Maximum allowed top position to keep infobox visible
    const maxAllowedTop = Math.max(0, containerRect.height - infoboxHeight - 20);

    let offset;

    if (!node) {
        // Use last mouse position when no node is selected
        offset = lastMouseY - 20;
    } else {
        const nodeRect = node.getBoundingClientRect();
        // Calculate offset from top of container
        offset = nodeRect.top - containerRect.top;

        // Check if this is the End node - limit its position
        const nodeText = node.textContent.trim();
        if (nodeText.includes('End')) {
            offset = offset - 100;
        }
    }

    // Keep infobox within reasonable bounds (not below 0, not beyond container)
    let finalOffset = Math.max(0, offset - 20);
    finalOffset = Math.min(finalOffset, maxAllowedTop);

    infobox.style.top = finalOffset + 'px';
}

// Track mouse movement over the diagram and update infobox when no node selected
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.main-content');
    container.addEventListener('mousemove', (e) => {
        const containerRect = container.getBoundingClientRect();
        lastMouseY = e.clientY - containerRect.top;

        // If no node is locked and mouse is not over a node, update infobox position
        if (!lockedNode) {
            // Check if mouse is over a mermaid node
            const hoveredNode = e.target.closest('.mermaid .node');
            if (!hoveredNode) {
                moveInfoboxToNode(null);
            }
        }
    });
});

// Get node key from node element
function getNodeKey(node) {
    const text = node.textContent.trim();

    // Match node text to keys
    if (text.includes('Observe') || text.includes('Ask Question')) return 'Start';
    if (text.includes('Background Research')) return 'Research';
    if (text.includes('Formulate Hypothesis')) return 'Hypothesis';
    if (text.includes('Design Experiment')) return 'Design';
    if (text.includes('Conduct Experiment') || text.includes('Collect Data')) return 'Conduct';
    if (text.includes('Analyze Data')) return 'Analyze';
    if (text.includes('Support') && text.includes('Hypothesis')) return 'Decision1';
    if (text.includes('Accept Hypothesis')) return 'Accept';
    if (text.includes('Revise') || text.includes('Reject')) return 'Revise';
    if (text.includes('Communicate')) return 'Communicate';
    if (text.includes('New Questions')) return 'Decision2';
    if (text.includes('End')) return 'End';

    return null;
}

// Remove highlight from all nodes
function clearHighlights() {
    document.querySelectorAll('.mermaid .node').forEach(n => {
        n.classList.remove('highlighted');
    });
}

// Node interaction
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const nodes = document.querySelectorAll('.mermaid .node');

        nodes.forEach((node) => {
            node.style.cursor = 'pointer';

            // Hover events
            node.addEventListener('mouseenter', () => {
                if (lockedNode) return; // Don't update if a node is locked

                const key = getNodeKey(node);
                if (key && nodeInfo[key]) {
                    updateInfobox(nodeInfo[key]);
                    moveInfoboxToNode(node);
                }
            });

            node.addEventListener('mouseleave', () => {
                if (lockedNode) return; // Don't reset if a node is locked
                updateInfobox(defaultInfo);
                moveInfoboxToNode(null);
            });

            // Click to lock/unlock
            node.addEventListener('click', () => {
                const key = getNodeKey(node);

                if (lockedNode === node) {
                    // Unlock if clicking the same node
                    lockedNode = null;
                    clearHighlights();
                    updateInfobox(defaultInfo);
                    moveInfoboxToNode(null);
                } else {
                    // Lock to this node
                    lockedNode = node;
                    clearHighlights();
                    node.classList.add('highlighted');

                    if (key && nodeInfo[key]) {
                        updateInfobox(nodeInfo[key]);
                        moveInfoboxToNode(node);
                    }
                }
            });
        });
    }, 1000); // Wait for Mermaid to render
});

// Click outside to unlock
document.addEventListener('click', (e) => {
    if (lockedNode && !e.target.closest('.mermaid .node')) {
        lockedNode = null;
        clearHighlights();
        updateInfobox(defaultInfo);
        moveInfoboxToNode(null);
    }
});
