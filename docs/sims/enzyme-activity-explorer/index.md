---
title: Temperature and pH Effects on Enzyme Activity
description: Explore how changes in temperature, pH, and thermostability reshape enzyme activity curves and reveal the molecular causes of activity loss.
image: /sims/enzyme-activity-explorer/enzyme-activity-explorer.png
og:image: /sims/enzyme-activity-explorer/enzyme-activity-explorer.png
twitter:image: /sims/enzyme-activity-explorer/enzyme-activity-explorer.png
social:
   cards: false
quality_score: 90
---

# Temperature and pH Effects on Enzyme Activity

<iframe src="main.html" height="660px" width="100%" scrolling="no"></iframe>

[Run the Temperature and pH Effects on Enzyme Activity MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/dmccreary/sketches/vYF4WuCD9)

## About This MicroSim

This simulation helps students connect the macroscopic bell-shaped activity curves of enzymes with the molecular events that cause them. A draggable cursor explores relative activity across temperature (0–100 °C) or pH (0–14), while a molecular panel explains whether increased collisions, denaturation, or incorrect ionization are driving the change. Sliders shift the optimal temperature, optimal pH, and thermostability (width at half-maximum). Preset buttons load human enzymes, stomach pepsin, or thermostable Taq polymerase so learners can compare adaptations.

## How to Use

1. Click **Temperature Mode** or **pH Mode** at the top to choose which axis is plotted.
2. Drag the orange cursor along the curve (or press the **Sweep Temperature Values** / **Sweep pH Values** button to auto-sweep) and read the activity percent plus annotated explanation.
3. Adjust the **Optimal temperature** or **Optimal pH** slider to shift the peak and observe how the molecular panel reshapes.
4. Use **Enzyme thermostability (FWHM)** to widen or narrow the bell; note how the “Width at 50% activity” label updates.
5. Activate preset buttons for Human enzyme, Pepsin, or Taq polymerase to animate the curve toward real operating conditions.
6. Compare the molecular cartoon or histidine charge gauge to explain why activity falls on either side of the optimum.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/biology/sims/enzyme-activity-explorer/main.html"
        height="700px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level
10-12 (Honors or college placement Biology)

### Duration
15-20 minutes

### Prerequisites
- Structure and function of enzymes (active site, substrate binding)
- How kinetic energy and pH influence molecular motion and ionization

### Activities

1. **Predict and Observe (5 min):** Students sketch how they expect the activity curve to change for a hot-spring enzyme, then use sliders/presets to verify whether the optimum shifts and why.
2. **Guided Molecular Reasoning (7 min):** In pairs, students keep the cursor just left of the peak and list evidence for “collision frequency,” then move it right of the peak and list evidence for “denaturation” or “incorrect charges.” They summarize in their notebooks.
3. **Apply to Scenarios (5 min):** Each group selects Pepsin or Taq polymerase, explains how their environment justifies that optimum, and shares one misconception the right panel helped them correct.

### Assessment
- Exit ticket prompts students to (1) state the optimal temperature/pH for a chosen preset and (2) explain why activity collapses past that point using the language of collisions, denaturation, or protonation.
- Formative questioning during exploration checks that students can interpret the width-at-half-maximum label and relate it to thermostability.

## References

1. Campbell, N. A., & Reece, J. B. *Campbell Biology* (12th ed.), Chapter 6: “An Introduction to Metabolism.”
2. Khan Academy. [Factors affecting enzyme activity](https://www.khanacademy.org/science/biology/biology-of-cells/enzymes/a/factors-affecting-enzymes).
