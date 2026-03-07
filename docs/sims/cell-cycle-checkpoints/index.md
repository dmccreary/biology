---
title: Cell Cycle Checkpoint Control
description: Interactive p5.js MicroSim showing how cyclin-CDK complexes and checkpoint proteins regulate cell cycle progression.
image: /sims/cell-cycle-checkpoints/cell-cycle-checkpoints.png
og:image: /sims/cell-cycle-checkpoints/cell-cycle-checkpoints.png
twitter:image: /sims/cell-cycle-checkpoints/cell-cycle-checkpoints.png
social:
   cards: false
quality_score: 0
---

# Cell Cycle Checkpoint Control

<iframe src="main.html" height="502px" width="100%" scrolling="no"></iframe>

[Run the Cell Cycle Checkpoint Control MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

This MicroSim demonstrates how cyclin-CDK complexes regulate cell cycle progression and how checkpoint proteins ensure cells only divide when conditions are favorable. The left panel shows cyclin concentration curves across the four cell cycle phases (G1, S, G2, M), while the right panel displays a checkpoint decision flowchart.

## How to Use

1. **Hover over cyclin curves** on the left graph to see each cyclin's partner CDK and function
2. **Click checkpoint decision nodes** in the flowchart to see explanatory tooltips
3. **Toggle between G1/S and G2/M checkpoints** using the button below the simulation
4. **Press "DNA Damage Event"** to see how ATM/ATR kinases activate p53 and halt the cycle
5. **Press "What if p53 is mutated?"** to observe how checkpoint failure leads to cancer risk

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/biology/sims/cell-cycle-checkpoints/main.html"
        height="502px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level
9-12 (AP Biology)

### Duration
10-15 minutes

### Prerequisites
- Basic understanding of the cell cycle phases (G1, S, G2, M)
- Familiarity with protein kinases and phosphorylation

### Activities

1. **Exploration** (5 min): Students explore the cyclin concentration graph, hovering over each curve to learn about the four cyclins and their CDK partners.
2. **Guided Practice** (5 min): Students toggle between G1/S and G2/M checkpoints, clicking decision nodes to understand the logic of checkpoint control.
3. **Assessment** (5 min): Students use the "DNA Damage Event" and "p53 mutation" buttons to predict and observe checkpoint failure scenarios.

### Assessment
- Can students explain why Cyclin B drops sharply at anaphase?
- Can students predict the outcome of a p53 mutation on cell cycle control?
- Can students differentiate between G1/S and G2/M checkpoint requirements?

## References

1. [Cell Cycle - Wikipedia](https://en.wikipedia.org/wiki/Cell_cycle)
2. [Cyclin-dependent kinase - Wikipedia](https://en.wikipedia.org/wiki/Cyclin-dependent_kinase)
3. [Cell cycle checkpoint - Wikipedia](https://en.wikipedia.org/wiki/Cell_cycle_checkpoint)
