---
title: Interactive Punnett Square Calculator
description: Compare monohybrid and dihybrid crosses, animate Punnett cells, and read running genotype/phenotype ratios.
image: /sims/punnett-square-calculator/punnett-square-calculator.png
og:image: /sims/punnett-square-calculator/punnett-square-calculator.png
twitter:image: /sims/punnett-square-calculator/punnett-square-calculator.png
social:
   cards: false
quality_score: 0
---

# Interactive Punnett Square Calculator

<iframe src="main.html" height="735px" width="100%" scrolling="no"></iframe>

[Run the Interactive Punnett Square Calculator MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## Learning Objectives

- **Apply** Punnett squares to determine offspring genotypes and phenotypes for mono- and dihybrid crosses.
- **Compare** live genotype and phenotype tallies to the expected Mendelian ratios (1:2:1 and 9:3:3:1).
- **Interpret** how changing parent genotypes or gene letters reshapes the gamete headers and resulting ratios.

## About This MicroSim

The simulation follows the standard Punnett process step-by-step. Students:

1. Pick the cross type (monohybrid or dihybrid) from the top mode bar.
2. Set gene letters and parent genotypes in the left control deck (each selector lives exactly where the wireframe reserved space).
3. Watch the square populate cell-by-cell, hover any cell to read the genotype/phenotype, and compare live counts in the summary column.
4. Randomize parents, toggle between genotype or phenotype labels, or show all cells to verify paper calculations quickly.

The right-hand summary panel always reports how many cells are currently revealed plus the running genotype/phenotype counts, so learners can pause mid-animation and articulate why ratios are trending the way they are.

## How to Use

1. **Choose a Mode** – Click **Monohybrid** for a 2×2 grid or **Dihybrid** for a 4×4 grid.
2. **Set Parent Genotypes** – Use the dropdowns for Parent 1 and Parent 2. The two gene-letter inputs let you rename the traits (e.g., H/h for height).
3. **Start Simulation** – Press **Start Simulation** (the sim loads paused). Cells will reveal based on the animation speed slider; hover a filled cell to highlight its row/column headers and read its label.
4. **Analyze** – Read the Summary & Ratios panel to compare live totals against the theoretical ratios. Toggle **Show Phenotypes** to switch the cell labels.
5. **Experiment** – Use **Step Through**, **Show All**, **Reset Grid**, or **Randomize Parents** to explore other genotype combinations or to practice faster problems.

## Controls

- **Start/Pause Simulation** – Animates one cell at a time; resumes exactly where you paused.
- **Step Through** – Reveals the next cell without running the animation.
- **Show All** – Immediately displays the entire Punnett grid.
- **Show Phenotypes / Show Genotypes** – Switches the label type drawn inside each revealed cell.
- **Randomize Parents** – Loads a new pair of parent genotypes (respecting the current mode).
- **Speed Slider** – Adjusts how quickly the animation reveals cells (0.25× to 2×).
- **Reset Grid** – Clears the grid so you can re-run the same cross or swap parents.

## Classroom Ideas

- **Warm-Up:** Have students predict the 16 dihybrid outcomes, then run the animation to validate their reasoning.
- **Error Analysis:** Pause mid-way through a simulation and ask students to explain why the partial ratios already resemble the final 9:3:3:1 expectation.
- **Inquiry Challenge:** Let groups randomize parents repeatedly and track how often recessive phenotypes appear under different parent combinations.

## Iframe Embed Code

```html
<iframe src="https://dmccreary.github.io/biology/sims/punnett-square-calculator/main.html"
        height="760px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level
college placement / Honors Biology (Grades 10–12)

### Duration
15 minutes (5 min explore + 5 min guided questions + 5 min wrap-up)

### Prerequisites
- Familiarity with Mendel’s laws and allele notation
- Ability to read genotype and phenotype ratios

### Activities
1. **Explore (5 min):** Students build a custom monohybrid cross and describe the first four revealed cells aloud.
2. **Guided Practice (5 min):** Switch to dihybrid mode, randomize the parents, and predict the phenotype ratio before hitting “Show All.”
3. **Assessment (5 min):** Individually, students screenshot a completed grid, annotate the genotype counts, and submit a short explanation of how the ratio matches Mendelian expectations.

### Assessment
Look for accurate genotype/phenotype identification, correct ratio statements, and explanations that reference dominant vs. recessive alleles.

## References

1. College Board college placement Biology Course and Exam Description, Unit 5: Heredity.
2. Gregor Mendel, “Experiments on Plant Hybridization” (1866) — foundational monohybrid and dihybrid analysis.
