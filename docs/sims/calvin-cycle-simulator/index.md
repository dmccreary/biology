---
title: Calvin Cycle Simulator
description: Interactive p5.js MicroSim for calvin cycle simulator.
image: /sims/calvin-cycle-simulator/calvin-cycle-simulator.png
og:image: /sims/calvin-cycle-simulator/calvin-cycle-simulator.png
twitter:image: /sims/calvin-cycle-simulator/calvin-cycle-simulator.png
social:
   cards: false
quality_score: 0
---

# Calvin Cycle Simulator

<iframe src="main.html" height="712px" width="100%" scrolling="no"></iframe>

[Run the Calvin Cycle Simulator MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/dmccreary/sketches/A4ksv_DxA)

## About This MicroSim

This simulator brings the Calvin cycle to life by showing the three major phases (Carbon Fixation, Reduction, RuBP Regeneration) arranged in a circular diagram. As students step through each turn, animated highlights show where CO₂ enters, where ATP/NADPH are consumed, which G3P molecules exit, and how RuBP is regenerated. Running totals keep track of energy inputs and G3P/glucose output, reinforcing why six turns are required to build one glucose molecule.

## How to Use

1. Select `Run One Turn` to watch a single Calvin cycle turn from start to finish. Observe the highlighted phase, entry arrow, and molecule pool updates.
2. Use `Run 6 Turns (→ 1 glucose)` to queue six sequential turns; adjust the speed slider if you want a slower or faster animation.
3. Hover over any colored arc to read phase-specific details in the right-hand info panel. The totals box at bottom-left updates after each completed turn, showing CO₂ fixed, ATP/NADPH spent, G3P produced, and glucose synthesized.
4. Click `Reset` to clear the animation queue and zero all counters so you can run another scenario.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/biology/sims/calvin-cycle-simulator/main.html"
        height="712px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level
11–12 (AP/advanced high-school biology)

### Duration
30 minutes (15-minute guided exploration + 15-minute practice/reflection)

### Prerequisites
- Basics of photosynthesis (light reactions vs. Calvin cycle)
- Familiarity with ATP, NADPH, and carbon fixation terminology
- Ability to interpret simple energy accounting tables

### Activities

1. **Engage (5 min)**  
   - Ask: “Why do plants need six CO₂ molecules to make one glucose?”  
   - Show the MicroSim in its default state. Invite students to predict which phase requires the most ATP and which releases product.

2. **Explore (10 min)**  
   - Students work in pairs to run one turn at a time, filling out a quick log: CO₂ fixed, ATP used, NADPH used, G3P exiting.  
   - They hover each arc to note the biochemical logic (RuBisCO/CO₂ entry, reduction of 3-PGA, RuBP regeneration).  
   - Encourage them to run all six turns to watch glucose formation and record the totals displayed in the bottom-left panel.

3. **Explain (10 min)**  
   - Facilitate a whole-class discussion:  
     * What fraction of G3P exits to build sugars?  
     * Why does the simulator keep showing ATP usage during RuBP regeneration?  
     * Compare the totals for 6 turns (18 ATP, 12 NADPH) with textbook numbers.  
   - Use the info panel to reinforce which energy carriers are consumed in each phase.

4. **Extend (Optional homework or assessment)**  
   - Students use the simulator to create a short annotated screenshot or video explaining the fate of carbon atoms through six turns.  
   - Provide hypothetical scenarios (e.g., “What happens if the plant is short on NADPH?”) and have them predict changes using the interactive elements.

### Assessment
- Exit ticket: “After 6 turns, how many G3P molecules have left the cycle, and how many ATP/NADPH were spent? Explain why only one glucose results.”  
- Observation checklist while students run the sim (do they track energy usage, hover to read phase details, and interpret totals?).  
- Optional: short written explanation comparing Carbon Fixation vs. Reduction vs. RuBP Regeneration, referencing specific elements of the simulator.

## References

1. Nelson, D. and Cox, M. *Lehninger Principles of Biochemistry*, 8th ed. (Calvin cycle chapter).  
2. college placement Biology Course and Exam Description (2024) – Unit 3, Photosynthesis.  
3. Taiz & Zeiger. *Plant Physiology* (Energy transformations in the chloroplast).
