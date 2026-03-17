---
title: Cancer Mutation Simulator
description: Interactive p5.js MicroSim demonstrating how accumulating mutations in proto-oncogenes and tumor suppressor genes progressively disrupt cell cycle control, leading to cancer.
image: /sims/cancer-mutation-simulator/cancer-mutation-simulator.png
og:image: /sims/cancer-mutation-simulator/cancer-mutation-simulator.png
twitter:image: /sims/cancer-mutation-simulator/cancer-mutation-simulator.png
social:
   cards: false
quality_score: 0
---

# Cancer Mutation Simulator

<iframe src="main.html" height="522px" width="100%" scrolling="no"></iframe>

[Run the Cancer Mutation Simulator MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

This MicroSim demonstrates the multi-hit model of colorectal cancer, showing how six sequential mutations progressively transform normal colon epithelial cells into malignant carcinoma. Each mutation removes one layer of cell cycle control, illustrating the hallmarks of cancer.

## How to Use

1. **Click each mutation** in the left panel in sequential order (mutations must be added in order, matching the actual progression of colorectal cancer)
2. **Observe the cell behavior** in the center panel as cells become increasingly disorganized, the growth curve steepens, and colors shift from healthy green to cancer red
3. **Read the mutation details** in the right panel to learn about each gene, its protein product, and its role in cancer
4. **Hover over any mutation** in the checklist to see the affected protein and associated cancer types
5. **Track the hallmarks progress bar** at the bottom right to see which cancer hallmarks have been acquired
6. **Press "Reset to Normal"** to return to healthy cell state and start over

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/biology/sims/cancer-mutation-simulator/main.html"
        height="522px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level
9-12 (college placement Biology)

### Duration
10-15 minutes

### Prerequisites
- Understanding of cell cycle phases and checkpoint control
- Familiarity with proto-oncogenes and tumor suppressor genes
- Basic understanding of signal transduction pathways

### Activities

1. **Exploration** (5 min): Students click through all 6 mutations, observing how each change affects cell behavior, growth rate, and organization.
2. **Guided Practice** (5 min): Students identify which mutations are in oncogenes vs. tumor suppressors and explain why oncogene mutations are dominant while tumor suppressor mutations are recessive.
3. **Assessment** (5 min): Students predict what would happen if only mutations 1 and 6 occurred (without the intermediate steps) and explain why cancer requires multiple mutations.

### Assessment
- Can students distinguish between oncogene activation and tumor suppressor loss?
- Can students explain why cancer is a multi-step process requiring 5-7 mutations?
- Can students identify which hallmark of cancer each mutation contributes to?

## References

1. [Colorectal cancer - Wikipedia](https://en.wikipedia.org/wiki/Colorectal_cancer)
2. [Knudson hypothesis - Wikipedia](https://en.wikipedia.org/wiki/Knudson_hypothesis)
3. [Hallmarks of cancer - Wikipedia](https://en.wikipedia.org/wiki/The_Hallmarks_of_Cancer)
4. [Tumor suppressor gene - Wikipedia](https://en.wikipedia.org/wiki/Tumor_suppressor_gene)
