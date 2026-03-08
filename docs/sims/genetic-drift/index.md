---
title: Genetic Drift Simulator
description: Stochastic simulation of genetic drift showing allele frequency changes over generations with adjustable population size, initial allele frequency, number of generations, and number of trials overlaid on a single chart, plus bottleneck event simulation.
image: /sims/genetic-drift/genetic-drift.png
og:image: /sims/genetic-drift/genetic-drift.png
twitter:image: /sims/genetic-drift/genetic-drift.png
social:
   cards: false
quality_score: 0
---

# Genetic Drift Simulator

<iframe src="main.html" height="490px" width="100%" scrolling="no"></iframe>

[View Genetic Drift Simulator Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

This stochastic simulation models genetic drift by sampling alleles each generation using binomial probability. Students adjust population size (N=10 to 10,000 with logarithmic slider), initial allele frequency ($p$), number of generations, and number of independent trials. Each trial produces a line on the chart showing how $p$ changes randomly over time. Small populations show wide variation with frequent fixation or loss; large populations show tight clustering around the starting frequency. A "Bottleneck" button simulates a population crash (N=10 for 5 generations) followed by recovery, demonstrating the lasting genetic effects.

## How to Use

1. **Adjust sliders** — set population size, initial $p$, generations, and number of trials.
2. **Click "Run"** to watch lines grow generation by generation (animated).
3. **Click "Instant"** to compute all generations immediately.
4. **Compare results** — the summary box shows fixations ($p$=1), losses ($p$=0), and still-drifting trials.
5. **Click "Bottleneck"** after a run completes to simulate a population crash and observe the lasting effect.
6. **Click "Clear"** to reset and try different parameters.

## Lesson Plan

### Grade Level
9-12 (AP Biology)

### Duration
10-15 minutes

### Prerequisites
- Understanding of allele frequency and Hardy-Weinberg equilibrium
- Knowledge of the five conditions for HWE (especially large population size)
- Familiarity with probability concepts

### Activities

1. **Exploration** (5 min): Run 10 trials with N=20 and N=5000. Compare the spread of lines. How many trials reach fixation or loss in the small population? In the large one?
2. **Guided Practice** (5 min): Set N=100, $p$=0.5, 200 generations, 10 trials. Run the simulation. Then click "Bottleneck." Observe how the bottleneck permanently shifts allele frequencies even after the population recovers. Why does this happen?
3. **Assessment** (5 min): Predict what will happen with N=10, $p$=0.1, 100 generations. Will the allele likely be lost? Run the simulation to test. Explain why rare alleles in small populations are especially vulnerable to drift.

### Assessment
- Can students explain why drift has a stronger effect in small populations?
- Can students predict whether an allele is more likely to be fixed or lost based on its initial frequency?
- Can students describe how a population bottleneck causes a lasting reduction in genetic diversity?
- Can students distinguish genetic drift from natural selection as a mechanism of evolution?

## References

1. [Genetic drift - Wikipedia](https://en.wikipedia.org/wiki/Genetic_drift)
2. [Population bottleneck - Wikipedia](https://en.wikipedia.org/wiki/Population_bottleneck)
3. [Founder effect - Wikipedia](https://en.wikipedia.org/wiki/Founder_effect)
