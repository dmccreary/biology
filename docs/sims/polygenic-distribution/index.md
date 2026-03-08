---
title: Polygenic Trait Distribution Visualizer
description: Interactive Chart.js visualization showing how increasing the number of contributing genes transforms a discrete phenotype distribution into a continuous bell curve.
image: /sims/polygenic-distribution/polygenic-distribution.png
og:image: /sims/polygenic-distribution/polygenic-distribution.png
twitter:image: /sims/polygenic-distribution/polygenic-distribution.png
social:
   cards: false
quality_score: 0
---

# Polygenic Trait Distribution Visualizer

<iframe src="main.html" height="600px" width="100%" scrolling="no"></iframe>

[View Polygenic Trait Distribution Visualizer Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

This visualization demonstrates how polygenic inheritance produces continuous
phenotype distributions. As the number of contributing genes increases from 1 to 6,
the histogram transitions from a discrete 1:2:1 Mendelian ratio to an
approximately normal (bell-shaped) curve. The binomial coefficients that
generate each distribution are shown in the "Show Math" panel.

## How to Use

1. **Drag the slider** to change the number of contributing genes (1-6).
2. **Hover** over any bar to see its exact frequency percentage.
3. **Normal Curve** button overlays a theoretical normal distribution for comparison (visible at 2+ genes).
4. **Show Math** button displays the binomial expansion, coefficients, and exact frequencies.
5. Observe the summary statistics (classes, mean, SD, shape) below the chart.

## Lesson Plan

### Grade Level
9-12 (AP Biology)

### Duration
10-15 minutes

### Prerequisites
- Understanding of Mendelian single-gene inheritance (1:2:1 ratio for incomplete dominance)
- Concept of additive alleles contributing equally to a quantitative trait

### Activities

1. **Exploration** (5 min): Start at 1 gene and observe the familiar 1:2:1 ratio. Slowly increase to 6 genes and watch the distribution become bell-shaped. Toggle the normal curve overlay to see how well the distribution matches.
2. **Guided Practice** (5 min): Use "Show Math" to examine the binomial coefficients. Answer: "How many phenotypic classes exist for 3 genes? For 5 genes?" Verify with the slider.
3. **Assessment** (5 min): Explain in writing why human height follows a bell curve distribution. How many genes would need to contribute for the distribution to appear continuous?

### Assessment
- Can students explain why more genes produce more phenotypic classes?
- Can students connect the binomial expansion to the shape of the distribution?
- Can students distinguish polygenic inheritance from single-gene Mendelian patterns?

## References

1. [Polygenic inheritance - Wikipedia](https://en.wikipedia.org/wiki/Polygenic_inheritance)
2. [Quantitative trait locus - Wikipedia](https://en.wikipedia.org/wiki/Quantitative_trait_locus)
3. [Normal distribution - Wikipedia](https://en.wikipedia.org/wiki/Normal_distribution)
