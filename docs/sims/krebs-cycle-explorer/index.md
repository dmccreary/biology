---
title: Krebs Cycle Explorer
description: Interactive step-through MicroSim of the Krebs (citric acid) cycle showing all 8 intermediates, reaction products, and a running tally of CO₂, NADH, FADH₂, and ATP.
image: /sims/krebs-cycle-explorer/krebs-cycle-explorer.png
og:image: /sims/krebs-cycle-explorer/krebs-cycle-explorer.png
twitter:image: /sims/krebs-cycle-explorer/krebs-cycle-explorer.png
social:
   cards: false
quality_score: 0
---

# Krebs Cycle Explorer

<iframe src="main.html" height="655" width="100%" scrolling="no"></iframe>

[Run the Krebs Cycle Explorer MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

This MicroSim provides an interactive step-through visualization of the **Krebs cycle** (citric acid cycle), the central metabolic pathway that oxidizes acetyl-CoA to $\ce{CO2}$ while generating electron carriers ($\ce{NADH}$ and $\ce{FADH2}$) and a small amount of ATP. The cycle's eight intermediates are arranged in a circular layout with product badges on each reaction arrow.

## How to Use

1. **Step Forward** — Click to advance through the cycle one reaction at a time. Each step highlights the active reaction arrow and updates the running tally of products (CO₂, NADH, FADH₂, ATP).
2. **Run Full Cycle** — Automatically animates all 8 steps in sequence.
3. **Reset** — Returns the cycle to its initial state and clears the tally.
4. **×2 for glucose** — Toggles the tally between "per turn" and "per glucose" (since each glucose produces 2 acetyl-CoA and thus 2 turns of the cycle).
5. **Click any intermediate node** — Shows its name, carbon count, and biological role in an info panel.

## Iframe Embed Code

```html
<iframe src="https://dmccreary.github.io/biology/sims/krebs-cycle-explorer/main.html"
        height="655"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level
9-12 (college placement Biology)

### Duration
10-15 minutes

### Prerequisites
- Understanding of glycolysis and acetyl-CoA formation
- Basic knowledge of oxidation-reduction reactions
- Familiarity with ATP, NADH, and FADH₂ as energy carriers

### Activities

1. **Exploration** (5 min): Step through the cycle one reaction at a time. For each step, read the reaction description and note which products are generated.
2. **Guided Practice** (5 min): Toggle "×2 for glucose" and compare the per-turn vs. per-glucose product totals. Click each intermediate to review its carbon count and role.
3. **Assessment** (5 min): Without looking at the MicroSim, predict the total products of one turn of the Krebs cycle. Then verify using the step-through.

### Assessment
- Students can list all 8 intermediates in order
- Students can identify which steps release $\ce{CO2}$, produce NADH, produce FADH₂, or produce ATP
- Students can calculate total products per glucose molecule (2 turns)

## References

1. [Krebs Cycle — Wikipedia](https://en.wikipedia.org/wiki/Citric_acid_cycle)
2. Campbell Biology, 12th Edition, Chapter 9: Cellular Respiration
