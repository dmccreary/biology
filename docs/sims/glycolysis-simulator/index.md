---
title: Glycolysis Pathway Simulator
description: Interactive p5.js MicroSim that walks through all ten steps of glycolysis with investment/payoff highlighting and reaction tooltips.
image: /sims/glycolysis-simulator/glycolysis-simulator.png
og:image: /sims/glycolysis-simulator/glycolysis-simulator.png
twitter:image: /sims/glycolysis-simulator/glycolysis-simulator.png
social:
   cards: false
quality_score: 88
---

# Glycolysis Pathway Simulator

<iframe src="main.html" height="905px" width="100%" scrolling="no"></iframe>

[Run the Glycolysis Pathway Simulator MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

This simulation visualizes the glycolytic pathway as two color-coded halves: the ATP-investment steps (1–5) and the ATP/NADH-producing payoff steps (6–10). Each block lists the substrate, enzyme, and product; badges flag when ATP is consumed or produced and when NADH is generated. Clicking a step reveals the full reaction equation, energetic notes, and cofactors so students can trace how glucose becomes pyruvate and why glycolysis nets only two ATP.

### Visual Highlights
- **Phase backgrounds:** Light coral vs. light green regions emphasize energy flow and can be spotlighted with the toggle button.
- **Badges:** Red “−ATP,” green “+ATP,” and blue “+NADH” badges signal energy transactions at a glance (×2 in the payoff phase).
- **Cleavage divider:** A central column labels the split into two glyceraldehyde-3-phosphate molecules.
- **Net tally cards:** Bottom summary cards track cumulative ATP, NADH, and pyruvate yields.

## How to Use

1. Begin with the Investment phase highlighted (default). Read down steps 1–5 to see where ATP is consumed.
2. Click any step to open its reaction card. Encourage students to articulate enzyme names aloud.
3. Press **Show Payoff Phase** to highlight steps 6–10; discuss why ATP production occurs twice per glucose.
4. Use the **Reset** button to clear selections and re-focus the Investment half for review.
5. Challenge students to explain the net ATP count by referencing the badge placements and the summary panel.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/biology/sims/glycolysis-simulator/main.html"
        height="1000px"
        width="100%"
        scrolling="no"></iframe>
```

## Learning Objectives

- Describe the substrates, enzymes, and products of each glycolytic reaction (Bloom L2).
- Distinguish between the energy investment and payoff phases by identifying when ATP is used or generated.
- Explain why glycolysis yields a net of +2 ATP and +2 NADH per glucose.

## Controls

- **Show Payoff Phase / Show Investment Phase:** Toggles which half of the pathway is emphasized.
- **Reset:** Returns to the default emphasis (investment phase) and clears any selected reaction card.
- **Clickable Steps:** Selecting a step opens an information card that lists the reaction equation, cofactor needs, and energetic notes.

## Data and Reactions

| Step | Enzyme | Key Reaction | Energy Note |
|------|--------|--------------|-------------|
| 1 | Hexokinase | Glucose + ATP → Glucose-6-P + ADP | −ATP |
| 3 | Phosphofructokinase-1 | F6P + ATP → F1,6-BP + ADP | −ATP |
| 6 | G3P dehydrogenase | G3P + NAD⁺ + Pi → 1,3-BPG + NADH + H⁺ | +2 NADH |
| 7 | Phosphoglycerate kinase | 1,3-BPG + ADP → 3-PG + ATP | +2 ATP |
| 10 | Pyruvate kinase | PEP + ADP → Pyruvate + ATP | +2 ATP |

All other steps rearrange carbon skeletons or generate high-energy intermediates that set up these energy transactions. The net outcome shown in the tally cards is **+2 ATP**, **+2 NADH**, and **2 Pyruvate** per glucose.

## Lesson Plan

### Grade Level
9–12 (AP/IB Biology) and introductory undergraduate biology

### Duration
15 minutes

### Prerequisites
- Students know the purpose of cellular respiration and the role of NADH.
- Students can define substrate-level phosphorylation.

### Activities

1. **Engage (4 min):** Ask learners to predict why glycolysis costs ATP even though it makes ATP. Display the investment side to confirm.
2. **Explore (7 min):** Students click each step, jotting enzyme names and energy changes; toggle to the payoff phase midway.
3. **Explain (4 min):** Groups summarize why net ATP is +2 despite two ATP-producing steps happening twice.

### Assessment
- Quick exit ticket: “Which steps consume ATP and which produce it?”
- Oral check: “What reaction generates NADH in glycolysis, and why is it doubled?”
- Optional screenshot annotation: label the cleavage divider and describe what it represents.

## References

1. Freeman, S. *Biological Science*, 7e. Pearson, 2024 — Cellular respiration chapter.
2. Nelson, D. & Cox, M. *Lehninger Principles of Biochemistry*, 8e. W.H. Freeman, 2021.
3. Alberts, B. *Molecular Biology of the Cell*, 7e. Garland Science, 2022.
