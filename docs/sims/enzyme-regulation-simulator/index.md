---
title: Enzyme Regulation Simulator
description: Explore how different inhibition mechanisms reshape enzyme kinetics in real time.
image: /sims/enzyme-regulation-simulator/enzyme-regulation-simulator.png
og:image: /sims/enzyme-regulation-simulator/enzyme-regulation-simulator.png
twitter:image: /sims/enzyme-regulation-simulator/enzyme-regulation-simulator.png
social:
   cards: false
quality_score: 88
---

# Enzyme Regulation Simulator

<iframe src="main.html" height="722px" width="100%" scrolling="no"></iframe>

[Run the Enzyme Regulation Simulator MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/dmccreary/sketches/jtehut1Zd)

## About This MicroSim

This MicroSim links the molecular view of enzyme regulation to the macroscopic
Michaelis–Menten curve. The top panel highlights the selected mechanism, the
center shows a cartoon enzyme alongside a responsive v vs. [S] graph, and the
bottom summary explains how Vmax, Km, and metabolic context change with each
mode. Sliders and buttons keep the schematic, curve, and textual explanation in
sync so learners can immediately see cause-and-effect relationships.

## How to Use

1. Click **Start Simulation** to animate substrate and inhibitor movement.
2. Move the **Inhibitor concentration** slider to control how strongly the
   enzyme is inhibited. Higher values exaggerate Vmax or Km shifts depending on
   the mechanism.
3. Use the **Probe substrate [S]** slider to reposition the dot on the
   Michaelis–Menten curve and read off the instantaneous reaction rate.
4. Switch among the four **mode buttons**. The top strip, enzyme schematic,
   kinetics graph, and summary panel update together so learners can compare
   competitive, noncompetitive, and feedback regulation.
5. Pause the simulation at any time to take screenshots or have students sketch
   the altered curves for formative assessment.

## Iframe Embed Code

You can add this MicroSim to any web page by inserting this iframe snippet:

```html
<iframe src="https://dmccreary.github.io/biology/sims/enzyme-regulation-simulator/main.html"
        height="712px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level
11-12 (AP/IB Biology)

### Duration
15 minutes

### Prerequisites
- Students have graphed the Michaelis–Menten equation.
- Students can define Vmax, Km, and substrate concentration.

### Activities

1. **Exploration (4 min):** Start the sim in No Inhibition mode and have students describe how the probe dot traces the blue curve.
2. **Compare Mechanisms (6 min):** Cycle through Competitive, Noncompetitive, and Feedback modes. Students adjust the inhibitor slider and predict how Vmax and Km will shift before observing the new curves.
3. **Context Challenge (5 min):** Give two metabolic scenarios (e.g., antibacterial treatment vs. amino-acid biosynthesis) and ask students to choose the most appropriate regulatory mode with evidence from the info panel.

### Assessment
- Exit ticket: “Which inhibition mode leaves Km unchanged? Explain using the probe dot’s readout.”
- Students sketch the red/purple curve they observed and label whether Vmax or Km was altered.

## References

1. Nelson, D. L., & Cox, M. M. (2017). *Lehninger Principles of Biochemistry* (7th ed.). W.H. Freeman.
2. Alberts, B. et al. (2014). *Molecular Biology of the Cell* (6th ed.). Garland Science.
