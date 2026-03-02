---
title: Energy Pyramid Explorer
description: Interactive p5.js MicroSim that visualizes how energy, biomass, or organism counts cascade through trophic levels.
image: /sims/energy-pyramid/energy-pyramid.png
og:image: /sims/energy-pyramid/energy-pyramid.png
twitter:image: /sims/energy-pyramid/energy-pyramid.png
social:
   cards: false
quality_score: 90
---

# Energy Pyramid Explorer

<iframe src="main.html" height="500px" width="100%" scrolling="no"></iframe>

[Run the Energy Pyramid Explorer MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit the Energy Pyramid Explorer MicroSim p5.js Editor](https://editor.p5js.org/dmccreary/sketches/ebnGGjAtC)

## About This MicroSim

This MicroSim lets students manipulate an energy pyramid and immediately see how exponential losses constrain trophic levels. Sliders adjust the producer input and transfer efficiency, an **Add Level** button extends the chain to a maximum of six levels, and optional toggles overlay biomass (kg/ha) or organism-count (“ind”) values alongside the baseline kcal numbers. The right-hand info panel mirrors the currently selected level, showing energy transferred upward, heat/waste, and optional biomass/individuals notes. A heat-loss band and hover tooltips reinforce where the “missing” energy goes.

## How to Use

1. **Set the baseline:** Drag the **Producer Input** slider (default 20,000 kcal) and choose a realistic transfer efficiency (5–20%). The pyramid widths and values update instantly.
2. **Reveal exact values:** Use the **Show Numbers** checkbox to toggle precise kcal/kg/individual labels on each level. Hovering over a band also pops up the transferred vs. lost amounts.
3. **Overlay alternate metrics:** Use the **Show Biomass** and **Show Individuals** toggles (they can be active simultaneously) to add kg/ha and “ind” figures under each level while keeping the energy view as the baseline.
4. **Extend or trim the chain:** Press **Add Level** to append quaternary or apex consumers and observe how little energy remains; use **Remove Level** to go back to four levels if needed. Discuss whether a sixth level is sustainable at the chosen efficiency.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/biology/sims/energy-pyramid/main.html"
        height="450px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level
Grades 9-12 Biology

### Duration
10-15 minutes

### Prerequisites
- Understands the 10% rule for energy transfer.
- Can differentiate producers, primary consumers, and higher trophic levels.
- Familiar with units for energy (kcal) and biomass (kg/ha).

### Activities

1. **Exploration** (5 min): Students adjust producer input and efficiency, turning the number labels on to record the energy reaching each level.
2. **Guided Practice** (5 min): Switch to biomass and numbers modes. Discuss why aquatic numbers pyramids invert and what it implies about individual organism size.
3. **Assessment** (5 min): Challenge learners to add a sixth level and justify whether that apex predator could survive under different efficiency assumptions.

### Assessment
- Accurate calculations of energy/biomass at each trophic level given slider settings.
- Explanation of why only a few trophic levels are viable at 10% efficiency.
- Written comparison of energy vs. biomass vs. numbers pyramids for terrestrial vs. aquatic systems.

## References

1. Odum, E. & Barrett, G. (2005). *Fundamentals of Ecology* (5th ed.). Brooks Cole.
2. U.S. EPA. (2024). **Food Chain and Energy Pyramid**. Retrieved from https://www.epa.gov/
