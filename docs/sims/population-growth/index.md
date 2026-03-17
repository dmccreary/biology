---
title: Population Growth Model Explorer
description: Interactive Chart.js visualization comparing exponential and logistic population growth models with adjustable r, K, and N₀ parameters, carrying capacity line, overshoot mode, and data table.
image: /sims/population-growth/population-growth.png
og:image: /sims/population-growth/population-growth.png
twitter:image: /sims/population-growth/population-growth.png
social:
   cards: false
quality_score: 0
---

# Population Growth Model Explorer

<iframe src="main.html" height="460px" width="100%" scrolling="no"></iframe>

[View Population Growth Model Explorer Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

This interactive visualization compares exponential and logistic population growth models side by side. Students adjust four key parameters — intrinsic growth rate ($r_{max}$), carrying capacity ($K$), initial population size ($N_0$), and number of generations — and immediately see how each parameter affects the growth curves. The exponential model ($dN/dt = rN$) shows unlimited growth, while the logistic model ($dN/dt = rN(K-N)/K$) demonstrates density-dependent growth that levels off at the carrying capacity. An overshoot mode adds a time lag that produces oscillations around $K$.

## How to Use

1. **Select a view** — click "Both Models", "Exponential", or "Logistic" to focus on one or both curves.
2. **Adjust parameters** using the sliders on the right:
   - **r** — intrinsic rate of increase (0.01 to 2.0)
   - **K** — carrying capacity (100 to 10,000)
   - **N₀** — starting population (1 to 1,000)
   - **Generations** — time range (10 to 200)
3. **Enable Overshoot** to add a 3-generation time lag, causing the logistic population to oscillate around $K$.
4. **Click "Data Table"** to see numerical values at each time step.
5. **Hover over the chart** to see exact population values at any generation.

## Lesson Plan

### Grade Level
9-12 (college placement Biology)

### Duration
10-15 minutes

### Prerequisites
- Understanding of population as a group of interbreeding organisms
- Familiarity with birth rate, death rate, and growth rate concepts
- Basic understanding of exponential functions

### Activities

1. **Exploration** (5 min): Start with both models visible. Set r=0.5, K=1000, N₀=10. Notice where the two curves diverge. At what population size does the logistic curve start to slow down? What fraction of K is this? (Answer: approximately K/2, the inflection point where dN/dt is maximized.)
2. **Guided Practice** (5 min): Switch to logistic only. Increase r from 0.1 to 1.5 — how does r affect how quickly the population reaches K? Now enable Overshoot — what happens when r is high (>1.0)? Why do real populations sometimes overshoot K?
3. **Assessment** (5 min): A population of rabbits has r=0.3, K=500, and starts with 20 individuals. Predict: How many generations until the population reaches 250 (half of K)? Set the parameters and check. Then answer: If K drops to 200 due to habitat loss, what happens to the population trajectory?

### Assessment
- Can students explain why the exponential model is unrealistic for long-term population growth?
- Can students identify the inflection point of the logistic curve and explain its biological significance?
- Can students predict how changing r, K, or N₀ will affect the growth curve shape?
- Can students explain why time lags cause population oscillations around K?

## References

1. [Logistic function - Wikipedia](https://en.wikipedia.org/wiki/Logistic_function)
2. [Population dynamics - Wikipedia](https://en.wikipedia.org/wiki/Population_dynamics)
3. [Carrying capacity - Wikipedia](https://en.wikipedia.org/wiki/Carrying_capacity)
