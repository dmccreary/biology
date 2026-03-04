---
title: Enzyme Kinetics Explorer
description: Interactive p5.js MicroSim for visualizing Michaelis-Menten kinetics and inhibitor effects.
image: /sims/enzyme-kinetics-explorer/enzyme-kinetics-explorer.png
og:image: /sims/enzyme-kinetics-explorer/enzyme-kinetics-explorer.png
twitter:image: /sims/enzyme-kinetics-explorer/enzyme-kinetics-explorer.png
social:
   cards: false
quality_score: 85
---

# Enzyme Kinetics Explorer

<iframe src="main.html" height="615px" width="100%" scrolling="no"></iframe>

[Run the Enzyme Kinetics Explorer MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit Enzyme Kinetics Explorer MicroSim the p5.js Editor](https://editor.p5js.org/dmccreary/sketches/ICXlLpIwk)

## About This MicroSim

This simulation plots the Michaelis-Menten relationship between substrate concentration `[S]` and reaction velocity `v`. Students can change `Vmax`, adjust `Km`, drag or autoplay the on-curve probe to read precise coordinates, and visualize how competitive versus noncompetitive inhibitors reshape the curve. Stage prompts in the right panel guide learners from interpreting the labeled asymptotes to comparing overlay curves.

## How to Use

1. Set `Vmax` and `Km` with the sliders while watching the dashed `Vmax` and `Km` references shift on the graph.
2. Drag the blue probe dot along the curve (or let playback run) to read `[S]`, `v`, and percentage of `Vmax` in real time.
3. Turn on the inhibitor toggles and raise `[Inhibitor]` concentration to see competitive inhibitors shift `Km` right and noncompetitive inhibitors pull `Vmax` downward. Use Reset to return to the default kinetic profile.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/biology/sims/enzyme-kinetics-explorer/main.html"
        height="450px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level
11-12 (AP/IB Biology)

### Duration
15-20 minutes

### Prerequisites
- Ability to interpret coordinate graphs and read asymptotes
- Prior exposure to enzyme function, `Vmax`, and `Km`
- Basic algebra skills for ratios and percentage change

### Activities

1. **Stage 1 - Baseline curve (5 min):** Move the `Vmax` slider to see the horizontal asymptote rise, then adjust `Km` to watch the dashed `Km` line shift right and discuss what these changes mean for affinity.
2. **Stage 2 - Probe investigation (5 min):** Drag the probe to several `[S]` values, record the matching velocities, and calculate when the reaction is operating at 50% `Vmax` or greater.
3. **Stage 3 - Inhibitor comparison (5-10 min):** Activate each inhibitor, increase `[Inhibitor]`, and explain why the competitive overlay shifts horizontally while the noncompetitive overlay lowers only `Vmax`.

### Assessment
- Students correctly state how changing `Km` or `Vmax` reshapes the Michaelis-Menten curve.
- Learners use probe data to justify whether the reaction is saturated at a given `[S]`.
- Students compare screenshots or notes from inhibitor runs to explain how therapeutic inhibitors would alter enzyme behavior.

## References

1. Michaelis, L., & Menten, M. L. (1913). *Die Kinetik der Invertinwirkung.* Biochemische Zeitschrift.
2. Campbell, N. A., & Reece, J. B. (2019). *Campbell Biology* (12th ed.). Pearson.
