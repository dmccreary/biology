title: Osmosis and Water Potential Simulator
description: Interactive p5.js MicroSim for osmosis and water potential simulator.
image: /sims/osmosis-simulator/osmosis-simulator.png
og:image: /sims/osmosis-simulator/osmosis-simulator.png
twitter:image: /sims/osmosis-simulator/osmosis-simulator.png
social:
   cards: false
quality_score: 86
---

# Osmosis and Water Potential Simulator

<iframe src="main.html" height="610px" width="100%" scrolling="no"></iframe>

[Run the Osmosis and Water Potential Simulator MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

This MicroSim models two fluid chambers separated by a semipermeable membrane so students can see how solute potential (Ψ<sub>s</sub>), pressure potential (Ψ<sub>p</sub>), and temperature determine the direction of osmotic water flow. Animated water molecules drift between the cell interior and the external solution, a bold blue arrow shows net flow, and plant mode adds a rigid cell wall plus turgor gauge to depict pressure buildup.

**Key visual elements**

- Dynamic cell cartoon that swells, shrinks, or plasmolyzes based on tonicity.
- Water and solute particles with densities proportional to the selected concentrations.
- Ψ calculations (Ψ<sub>s</sub>, Ψ<sub>p</sub>, Ψ<sub>cell</sub>, Ψ<sub>external</sub>) rendered live in Stage 2 and Stage 3.
- A Stage 1–4 info rail that documents concentrations, calculated potentials, net ΔΨ, and the equilibrium preview triggered by the *Equilibrate* button.

## How to Use

1. **Set concentrations** – Use the *Internal* and *External solute concentration* sliders (0–1.0 mol L⁻¹) to create hypotonic, isotonic, or hypertonic conditions.
2. **Adjust temperature** – Use the temperature slider (273–313 K) to see how higher thermal energy decreases the magnitude of Ψ<sub>s</sub> (−iCRT).
3. **Toggle cell type** – Switch between *Animal cell* and *Plant cell* to reveal the cell wall and turgor pressure gauge; plasmolysis appears automatically when the external medium is strongly hypertonic.
4. **Control animation** – Pause/resume the stochastic motion of the molecules at any time; *Equilibrate* gradually balances the two solutions and activates the Stage 4 explanation block.
5. **Interpret the Stage rail** – Stage 1 lists concentrations, Stage 2 displays Ψ<sub>s</sub>, Stage 3 reports Ψ<sub>cell</sub>, Ψ<sub>external</sub>, ΔΨ, and Stage 4 either prompts equilibration or confirms when ΔΨ ≈ 0 MPa.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/biology/sims/osmosis-simulator/main.html"
        height="610px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level
High School Biology (Grades 9–12)

### Duration
12–15 minutes

### Prerequisites
- Familiarity with diffusion and osmosis vocabulary.
- Ability to interpret positive vs. negative water potential values.
- Awareness that temperature is measured in Kelvin when using the Ψ<sub>s</sub> equation.

### Learning Objectives

- Students will calculate Ψ<sub>s</sub>, Ψ<sub>p</sub>, and overall Ψ for given concentrations and temperatures.
- Students will classify solutions as hypotonic, isotonic, or hypertonic relative to the cell interior.
- Students will predict which direction water will move and describe how that movement affects animal vs. plant cells.

### Activities

1. **Explore Baseline (4 min)** – Set both concentrations to 0.30 mol L⁻¹, note the missing arrow, and explain why water exchange is balanced.
2. **Compare Tonicities (5 min)** – Create a hypotonic scenario (internal = 0.5, external = 0.1) and then a hypertonic scenario (internal = 0.2, external = 0.65); have students record the Stage 3 ΔΨ values and direction statements.
3. **Plant vs. Animal Focus (3 min)** – Toggle to plant mode, press *Equilibrate*, and discuss why turgor pressure appears while animal cells risk lysis when ΔΨ is highly negative.
4. **What-if Challenge (3 min)** – Students set a temperature, cell type, and concentration pair that makes ΔΨ ≈ 0 MPa and justify their configuration verbally or in writing.

### Assessment
- Ask students to capture a screenshot (or reading) of the Stage rail that demonstrates each tonicity and annotate which control values produced it.
- Provide ΔΨ targets (e.g., +0.30, −0.15 MPa) and have learners reproduce them within ±0.02 MPa, explaining how they tuned both concentration and temperature.

## References

1. Campbell, N. A. & Reece, J. B. *Campbell Biology* (12th ed.). Pearson, 2020.
2. Raven, P. H. et al. *Biology of Plants* (8th ed.). W. H. Freeman, 2012.
