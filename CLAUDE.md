# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

This project has two phases:

1. **Phase 1:** Generation of Learning Graph and Chapter Content
2. **Phase 2:** Generation of high-quality MicroSims

Because of the complexity of the project, all the rules
for phase 1 have been moved into the file @CLAUDE-book-generation.md
Do NOT read that file unless you are generating chapter content.

The remaining rules focus on the generation of high-quality MicroSims.

## Project Overview

college placement Biology: An Interactive Course — an MkDocs Material intelligent textbook for advanced high school students preparing for the college placement Biology exam. The textbook covers 8 College Board units across 375 concepts organized in a dependency graph.


## Development Environment

Assume the user is running `mkdocs serve` in a terminal. When a new MicroSim has been generated, print the URL of the new MicroSim and open it in Chrome:

```bash
open -a "Google Chrome" "http://127.0.0.1:8000/biology/sims/<sim-name>/main.html"
```

### p5.js MicroSim Development

When building a p5.js MicroSim, always read the p5 guide at `/Users/danmccreary/Documents/ws/claude-skills/skills/microsim-generator/references/p5-guide.md` first. Mention to the user in the dialog that you are reading the p5-guide.md before generating code.

### Anatomy & Biology Diagrams: Use Text-to-Image + p5.js Overlay

When a MicroSim requires rendering biological structures (skeletal anatomy, organs, cells, organisms, molecular structures), **do not attempt to draw them with p5.js polygons**. Pure p5.js rendering cannot produce the visual fidelity needed for recognizable anatomy — the results look like abstract geometric shapes.

Instead, use this hybrid approach:

1. Write a detailed `image-prompt.md` specifying exact colors, layout, panel structure, and anatomical details
2. Generate the illustration using a text-to-image model (user runs the prompt)
3. Crop whitespace from the generated image with Python/PIL or sips
4. Write a p5.js overlay that loads the image with `loadImage()` and adds hover/click interactivity on top
5. Use column-based or region-based hit detection — per-pixel detection is unnecessary

This pattern was validated in the `comparative-anatomy` MicroSim where p5.js polygon forelimbs were unrecognizable, but a text-to-image illustration with p5.js overlay was a major success. See `logs/comparative-anatomy-big-win.md` for the full post-mortem.

### Classes of Diagram Overlay MicroSims

The user has been very happy with the quality if detailed images created with
text-to-image LLM models.  Our goal is to centralize these algorithms in
the @docs/sims/shared-libs directory.  A draft diagram.js file is
located there.

There are currently four different types of Diagram Overlay MicroSims.  All of these
use the pattern of using a text-to-image LLM to generate an image.  The
difference is how complex the overlay javascript must be.  In all
of these examples, the names and boundaries of each of the regions
are stored in a overlay.json overlay file within the MicroSim directory.
The diagram.js program fires the correct event for each region.
Adding the `edit=true` parameter allows the user to edit the regions.

Here are some examples:

1. **Type 1: Simple non-overlapping rectangles** - this is when the underlying image
has regular rectangles that the user will hover over an click on.  This
is ideal for vertical or horizontal panels or a regular array of regions (2x3, 3X2, 3X3 etc)
When the user hovers or clicks within a rectangle, an appropriate event occurs.
The edit mode allows the user to change the edges and corners of the rectangles.
2. **Type 2: Complex Polygons** - this is when the underlying image can not
be decomposed into non-overlapping rectangles.  In this example polygons with
three to many edges must be stored in the overlay.json overlay file.  The
diagram.js fires the correct event for each region the the user is hovering
over or clicking on.  The edit mode allows the user to move the existing
points in the polygon, remove an edge point or add a new edge point.
3. **Type 3: Callout Points to Edge Regions** - in this mode, different regions of
the image have points that also have lines to the edges of the diagram
where the labels of the points give the name of the point.  The user
can go into edit mode and move the points around the drawing and also
reorder the labels around the edges.  The user can place a checkbox
in the control region called "Show Numbers" that will toggle numbers
at the callout points.  The default is "Show Numbers" on.
4. **Type 4: Callout Points to Floating Labels** - in this mode,
the user can have a callout line to a label that is placed anywhere
in the diagram.  In the edit mode, the user can change the location
of the callout points and the location of the labels by dragging
them anywhere over the diagram.

Currently we only have Type 1 and Type 3 working.

All diagrams can also have a quiz mode which shows a gold star for each
correct answer and a celebration animation for completing a quiz.

### Slider UX: Use Non-Linear Mapping for Logarithmic Quantities

When a MicroSim controls a quantity that produces logarithmic or exponential responses (pH, concentration, decibels, population growth rates, etc.), **never use a linear slider-to-value mapping**. A linear slider causes jarring jumps at one end and imperceptible changes at the other.

Instead, use a **power-curve mapping** (cubic or quartic) so that small slider movements at the low end produce small value changes and the full slider range still covers the complete domain:

```javascript
let sliderPower = 3; // cubic curve
function sliderToValue(sliderVal) {
    let fraction = sliderVal / sliderMax;
    return pow(fraction, sliderPower) * maxValue;
}
```

This pattern was validated in the buffer-action-simulator where pH (a logarithmic scale) needed gradual visual feedback as the user moved the slider. Apply the same principle whenever the controlled quantity has a non-linear relationship to the observable outcome.

### Label Placement in Structural Diagrams (Avoiding Overlap)

When drawing molecular structures, cell diagrams, or any labeled scientific diagram in p5.js, label overlap is the most common readability problem. Follow these rules:

**1. Size the scaffold generously before placing labels.**
Make rings, membranes, and structural outlines 20–30% larger than feels necessary. Labels need the surrounding whitespace — a tight-looking ring guarantees overlap once substituent labels are added.

**2. Offset substituent labels diagonally, not straight out.**
When two attachment points are vertically close (e.g., C-1 and C-2 on a Haworth ring), extending both labels straight down causes collision. Instead, angle them in different directions:

```
WRONG (both straight down):        CORRECT (diagonal offsets):
  C1                                  C1
  |                                    \
  OH   ← overlaps C2's OH              OH  (down-right)
  C2                                  C2
  |                                    \
  OH                                    OH  (down-right, further right)
```

**3. Use different stem lengths for primary vs. secondary labels.**
- Primary labels (functional groups: OH, NH₂, COOH): stem length 35–40 px, strokeWeight 2, textSize 13–15, bold
- Secondary labels (H atoms, lone pairs): stem length 18–22 px, strokeWeight 1, textSize 10–11, normal weight
- This visual hierarchy prevents H and OH from competing for the same space

**4. Place carbon/atom labels outside the ring perimeter.**
Push C1, C2, etc. at least 14–18 px beyond the nearest ring vertex. Never place them inside the ring or directly on a vertex — they merge with the ring outline.

**5. Stagger labels that share an edge.**
When multiple labels project from the same side of a structure (e.g., all substituents on the right side of a ring), alternate their horizontal offsets: first label at +16 px, second at +24 px, third at +16 px. This prevents a vertical stack of overlapping text.

**6. Reserve annotation labels for toggle-on display.**
Detailed annotations (e.g., "C-1 –OH (DOWN = α)") should only appear when the user checks a "Show labels" checkbox. Drawing them unconditionally clutters the default view. When shown, place them 25–30 px beyond the substituent label they annotate, with a dashed ellipse highlight connecting them to the relevant structure.

**7. Test at the narrowest expected width.**
Responsive MicroSims may render as narrow as 500 px. If labels overlap at that width, either reduce font sizes or switch to abbreviated labels (e.g., "OH" instead of "–OH group") at narrow widths.

This pattern was validated in the carbohydrate-structures MicroSim where C-1 and C-2 substituents on a Haworth pyranose ring overlapped badly until diagonal offsets and hierarchical sizing were applied.

