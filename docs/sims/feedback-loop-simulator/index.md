---
title: Feedback Loop Simulator
description: Compare negative and positive feedback loops with an interactive causal loop diagram and responsive time-series graph.
image: /sims/feedback-loop-simulator/feedback-loop-simulator.png
og:image: /sims/feedback-loop-simulator/feedback-loop-simulator.png
twitter:image: /sims/feedback-loop-simulator/feedback-loop-simulator.png
social:
   cards: false
quality_score: 90
---

# Feedback Loop Simulator

<iframe src="main.html" height="740px" width="100%" scrolling="no"></iframe>

[Run the Feedback Loop Simulator MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit Feedback Loop Simulator MicroSim in the p5.js Editor](https://editor.p5js.org/dmccreary/sketches/8OwhO6j0e)

## About This MicroSim

This MicroSim helps learners contrast **balancing (negative)** and **reinforcing (positive)** biological feedback loops. The left panel shows a clickable causal loop diagram where each node (stimulus, detector, control center, effector) provides plain-language explanations. The right panel charts the variable of interest through time, including a dashed set-point line and a vertical perturbation marker so students can see whether the response damps or amplifies the disturbance. Example presets highlight common scenarios such as blood glucose regulation, thermoregulation, action potentials, blood clotting, and childbirth.

### Learning Objectives

- Compare how negative and positive feedback loops respond to the same perturbation by analyzing the time-series curve and loop diagram.
- Identify the role of each component (stimulus, detector, control center, effector) by clicking the diagram nodes and reading their tooltips.
- Predict how real biological systems listed in the example menu will behave (return to baseline or run away) after an applied disturbance.

## How to Use

1. **Pick a loop type.** Use the Negative/Positive Feedback toggle, then choose a biological scenario from the dropdown (blood glucose, thermoregulation, enzyme inhibition, action potential, blood clotting, or childbirth).
2. **Start the animation.** Press **Start Simulation** to watch the variable evolve through time. The sim always loads paused to avoid autoplay surprises.
3. **Apply a perturbation.** Click **Apply Perturbation** to create a sudden increase or decrease in the controlled variable. A vertical dashed line marks the event while the graph shows either a damped return (negative) or runaway surge (positive).
4. **Investigate the diagram.** Hover over the graph to read exact values/time stamps and click each loop node for an explanation of that component’s role in the circuit.
5. **Reset as needed.** Use **Reset System** to clear the history, switch examples, or restart the sequence with different perturbations.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/biology/sims/feedback-loop-simulator/main.html"
        height="640px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level
Grades 9–12 life science or introductory undergraduate physiology

### Duration
10–15 minutes (exploration + discussion)

### Prerequisites

- Prior exposure to the definition of negative vs. positive feedback in homeostasis
- Ability to interpret line graphs (time on the x-axis, variable level on the y-axis)
- Familiarity with at least one body-system example (e.g., glucose regulation or neuron firing)

### Activities

1. **Launch & predict (3 min).** Have students describe what they expect to see for a negative feedback loop before pressing **Start Simulation**. Capture their predictions on the board.
2. **Guided comparison (5 min).** Run the blood glucose example, apply a perturbation, and ask learners to justify why the curve returns to the set point. Switch to the action potential example and highlight how the reinforcing loop stays far from baseline.
3. **Systems mapping (4 min).** Students click each node in the loop diagram and relate it to the graph (e.g., detector corresponds to pancreatic beta cells). Encourage them to reference the [Systems Thinking course](https://dmccreary.github.io/systems-thinking/) for vocabulary that describes balancing vs. reinforcing loops.
4. **Create a scenario (3 min).** In pairs, students choose a preset and write two sentences explaining which part of the loop they could intervene on to change the response.

### Assessment

- Ask students to screenshot or sketch the graph before and after a perturbation and annotate how the feedback loop explains the shape.
- Quick exit ticket: “Which example shows a runaway response and why?” or “How would activating the detector earlier change the curve?”

## References

1. Alberts, B. *Molecular Biology of the Cell*, 7th ed., Garland Science, 2022 – Chapter on cell signaling and feedback regulation.
2. Silverthorn, D. *Human Physiology: An Integrated Approach*, 8th ed., Pearson, 2023 – Sections on thermoregulation and endocrine control.
3. Meadows, D. *Thinking in Systems*, Chelsea Green Publishing, 2008 – Foundations of balancing vs. reinforcing loops used in the Systems Thinking course.
