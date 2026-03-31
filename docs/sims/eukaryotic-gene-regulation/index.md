---
title: Eukaryotic Gene Regulation Layers
description: Interactive p5.js MicroSim for exploring the layered checkpoints of eukaryotic gene regulation.
image: /sims/eukaryotic-gene-regulation/eukaryotic-gene-regulation.png
og:image: /sims/eukaryotic-gene-regulation/eukaryotic-gene-regulation.png
twitter:image: /sims/eukaryotic-gene-regulation/eukaryotic-gene-regulation.png
social:
   cards: false
quality_score: 90
---

# Eukaryotic Gene Regulation Layers

<iframe src="main.html" height="550px" width="100%" scrolling="no"></iframe>

[Run the Eukaryotic Gene Regulation Layers MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

This MicroSim turns the abstract layers of eukaryotic gene regulation into a responsive stacked infographic. Each band represents a regulatory checkpoint—chromatin, transcriptional, post-transcriptional, translational, and post-translational. Students click any band to populate the persistent detail panel on the right, making it easy to compare narratives about activation and repression at every checkpoint. A Start/Pause flow animation highlights each checkpoint sequentially to show how signals pass from chromatin opening to final protein activation or degradation.

## How to Use

1. **Explore each layer:** Click a colored band to highlight it and load its description into the right-hand info panel. The panel expands on the layer with a longer explanation of how activation and repression occur.
2. **Trace the regulatory flow:** Press **Start Flow** to animate the progress of a gene through the five checkpoints. Each time the flow advances, the glowing markers and the info panel automatically shift to that checkpoint so students can read the matching description.
3. **Adjust pacing:** Use the **Flow Speed** slider (value displayed to the left) to control how long the animation stays on each checkpoint. Slower speeds provide more reading time; faster speeds emphasize the full pipeline.
4. **Pause anytime:** Select **Start Flow** again to pause the animation at the current checkpoint (the last clicked info panel remains visible for comparison).

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/biology/sims/eukaryotic-gene-regulation/main.html"
        height="550px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level
Grades 9-12 Biology

### Duration
10-15 minutes

### Prerequisites
- Basic understanding of DNA structure and the central dogma (DNA → RNA → protein)
- Familiarity with the role of transcription factors and ribosomes

### Activities

1. **Exploration** (5 min): Students click through each layer and jot down one activation and one repression mechanism per band.
2. **Guided Practice** (5 min): Run the flow animation at two different speeds and discuss what would happen if one checkpoint failed.
3. **Assessment** (5 min): Learners select the layer they find most complex and explain its regulation aloud or via a short written response.

### Assessment
- Student explanations correctly sequence the five regulatory layers.
- Learner notes include at least one molecular mechanism (activation or repression) for each layer.
- Students adjust flow speed intentionally to support their explanation or presentation.

## References

1. Alberts, B. *et al.* (2019). **Molecular Biology of the Cell** (7th ed.). Garland Science.
2. Lodish, H. *et al.* (2021). **Molecular Cell Biology** (9th ed.). W. H. Freeman.
