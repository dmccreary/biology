---
title: ATP Yield Calculator
description: Interactive p5.js MicroSim that compares ATP yield from each stage of cellular respiration.
image: /sims/atp-yield-calculator/atp-yield-calculator.png
og:image: /sims/atp-yield-calculator/atp-yield-calculator.png
twitter:image: /sims/atp-yield-calculator/atp-yield-calculator.png
social:
   cards: false
quality_score: 88
---

# ATP Yield Calculator

<iframe src="main.html" height="610px" width="100%" scrolling="no"></iframe>

[Run the ATP Yield Calculator MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

This interactive visualization decomposes the ATP produced per glucose molecule across glycolysis, pyruvate oxidation, and the citric acid cycle. A dynamic table and proportional pie chart update instantly when students change the conversion factors for NADH and FADH₂, illustrating why modern biology textbooks report ~32 ATP whereas older references cited ~38.

### Key Visual Elements
- **Stage Table:** Shows substrate-level ATP, oxidative ATP from NADH, oxidative ATP from FADH₂, and the stage total.
- **Pie Chart:** Animates the relative contribution each stage makes to the overall ATP budget.
- **Context Tips:** Hovering any stage row reveals where the reactions take place and why they matter.

## How to Use

1. Start in the default **Modern (~32 ATP)** mode that uses 2.5 ATP/NADH and 1.5 ATP/FADH₂ conversion factors.
2. Hover over each stage row to review the anatomical location (cytosol vs. mitochondrial matrix) and main products.
3. Drag the **NADH** and **FADH₂** sliders to explore how shuttle efficiencies or membrane leakiness alter the net ATP tally.
4. Press the toggle button to jump to the **Classic (~38 ATP)** assumption and observe how the pie chart shifts when NADH and FADH₂ are given more generous yields.
5. Have students explain why substrate-level ATP remains constant while oxidative phosphorylation changes with slider inputs.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/biology/sims/atp-yield-calculator/main.html"
        height="610px"
        width="100%"
        scrolling="no"></iframe>
```

## Learning Objectives

- Calculate the total ATP produced per glucose at each stage of cellular respiration using adjustable NADH and FADH₂ conversion factors.
- Compare modern (~32 ATP) and classic (~38 ATP) assumptions and justify why current estimates are lower.
- Interpret visual data (table + pie chart) to explain why the citric acid cycle dominates ATP yield despite producing only two substrate-level ATP.

## Controls

- **Mode Toggle:** Switches between preset modern and classic conversion factors.
- **NADH Slider (1.5–3.0 ATP):** Adjusts oxidative phosphorylation yield per NADH.
- **FADH₂ Slider (1.0–2.0 ATP):** Adjusts oxidative phosphorylation yield per FADH₂.
- **Show Pie Labels:** Optional checkbox to declutter the chart during discussion.

## Data and Calculations

| Stage | Substrate ATP | NADH Produced | FADH₂ Produced | Notes |
|-------|---------------|---------------|----------------|-------|
| Glycolysis | 2 | 2 | 0 | Occurs in the cytosol before pyruvate enters mitochondria. |
| Pyruvate Oxidation | 0 | 2 | 0 | Converts pyruvate to acetyl-CoA in the mitochondrial matrix. |
| Citric Acid Cycle | 2 | 6 | 2 | Completes oxidation of acetyl-CoA, producing most reduced coenzymes. |

The simulation multiplies NADH and FADH₂ counts by the selected conversion factors, adds substrate-level ATP, and reports both a numeric and proportional breakdown.

## Lesson Plan

### Grade Level
9–12 (AP/IB Biology) and introductory undergraduate biology

### Duration
15 minutes (including short discussion)

### Prerequisites
- Students can list the stages of cellular respiration in order.
- Students know what NADH and FADH₂ are and that they donate electrons to the ETC.
- Students understand substrate-level vs. oxidative phosphorylation.

### Activities

1. **Predict & Observe (5 min):** Ask students to estimate how much ATP each stage supplies before touching the sliders. Then reveal the default visualization.
2. **Parameter Sweep (5 min):** In pairs, students drag the NADH slider from 1.5 to 3.0 and note how much the total ATP fluctuates. Repeat for FADH₂.
3. **Explain (5 min):** Groups summarize why the modern estimate is lower (membrane leak, shuttle costs) and report which stage is most sensitive to slider changes.

### Assessment
- Quick exit ticket: “Which slider affects total ATP more and why?”
- Ask students to describe how the citric acid cycle can remain the largest contributor even when slider values change.
- Optional: Have students screenshot the table in classic mode and annotate the biochemical rationale.

## References

1. Freeman, S. *Biological Science*, 7e. Pearson, 2024 — Chapter on Cellular Respiration.
2. Nelson, D. & Cox, M. *Lehninger Principles of Biochemistry*, 8e. W.H. Freeman, 2021.
3. Alberts, B. *Molecular Biology of the Cell*, 7e. Garland Science, 2022.
