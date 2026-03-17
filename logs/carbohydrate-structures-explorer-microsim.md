# Carbohydrate Structures Explorer MicroSim — Session Log

**Date:** 2026-02-28
**Sim ID:** `carbohydrate-structures`
**Chapter:** 02-water-ph-and-organic-chemistry
**Library:** p5.js
**Bloom Level:** Understand (L2)
**Status:** Complete

---

## Summary

Built the Carbohydrate Structures Explorer MicroSim, an interactive infographic
that displays Haworth projection diagrams of five carbohydrate molecules. After
the first implementation, label overlap was severe on the glucose ring view
(C-1 OH, C-2 OH, H atoms, and carbon labels all colliding on the right side of
the ring). A full rewrite of the glucose drawing function resolved all overlaps.
The fix was generalized into a 7-rule "Label Placement in Structural Diagrams"
guide and added to `CLAUDE.md` for all future structural diagram MicroSims.

---

## Files Created / Modified

| File | Action |
|------|--------|
| `docs/sims/carbohydrate-structures/carbohydrate-structures.js` | **Created** — full p5.js implementation |
| `docs/sims/carbohydrate-structures/index.md` | **Modified** — updated iframe height, added About/How to Use/Lesson Plan content |
| `CLAUDE.md` | **Modified** — added "Label Placement in Structural Diagrams" section |

Scaffolding files (`main.html`, `metadata.json`) were already in place and required no changes.

---

## Step-by-Step Process

### 1. Identified Next TODO Item

Read `docs/sims/TODO.md`. The first item (`condensation-hydrolysis`) was already
marked complete. The next item was `carbohydrate-structures` at line 114, with
status "specified".

### 2. Instructional Design Checkpoint

- **Bloom Level:** Understand (L2)
- **Bloom Verb:** explain
- **Learning Objective:** Students will explain the structural difference between
  α- and β-glucose, identify the glycosidic bond connecting monosaccharide monomers,
  and contrast the structures of starch and cellulose in terms of bond orientation
  and biological function.
- **Recommended Pattern:** Clickable infographic with molecule selection — concrete
  data visibility, no continuous animation. Aligned with spec.
- **Rationale:** Students explaining structural differences benefit from side-by-side
  comparison and on-demand detail, not continuous motion.

### 3. Pre-Generation Layout Planning

```
Controls: 1 select dropdown (molecule list), 1 checkbox (bond labels)
Control rows: 1
controlHeight = (1 × 35) + 10 = 45
drawHeight: 415
canvasHeight = 415 + 45 = 460
iframeHeight = 462

sliderLeftMargin: N/A (no sliders)
margin: 25
```

### 4. First Implementation (v1)

Read the p5-guide.md and bouncing-ball.js template. Wrote the initial JS file with:

- 5 molecules selectable via dropdown: α-Glucose, β-Glucose, Sucrose, Starch, Cellulose
- Haworth projection rings (pyranose 6-membered, furanose 5-membered)
- Properties panel on the right with name, type, formula, bond, function, key fact
- "Show bond orientation labels" checkbox
- Smooth transition animation when switching molecules
- Width-responsive design

**Ring dimensions (v1):** `ringW = 80 * 1.2 = 96`, `ringH = 45 * 1.2 = 54`

**Problem:** Severe label overlap on the glucose ring view. The C-1 OH extended
straight down from C-1, colliding with C-2's OH which also extended straight down.
H atoms on the opposite side of each carbon overlapped with OH labels. Carbon
number labels (C1, C2) were too close to ring vertices and merged with the ring
outline. The "C-1 –OH (DOWN = α)" annotation text overlapped with the C-2
substituents.

### 5. Diagnosis and Fix (v2)

Root causes identified from the screenshot:

1. **Ring too small** — vertices too close together, leaving no room for labels
2. **All right-side substituents extended straight down** — C-1 OH and C-2 OH
   stacked vertically, overlapping each other
3. **H labels placed directly opposite OH** — when OH goes down, H goes up from
   the same x-coordinate, crossing the ring outline
4. **Carbon labels too close to vertices** — only 14 px offset, merging with the
   ring stroke
5. **Annotation text positioned near ring** — the dashed-ellipse highlight and
   "DOWN = α" text sat on top of C-2's labels

Fixes applied:

| Issue | v1 | v2 |
|-------|----|----|
| Ring size | `ringW=96, ringH=54` | `ringW=100, ringH=55` |
| C-1 OH direction | Straight down (same x) | **Diagonal down-right** (`x+20, y+40`) |
| C-2 OH direction | Straight down (same x) | **Diagonal down-right** (`x+16, y+35`) |
| H atom stems | Same x as parent, opposite direction | **Offset x by +8 to +12**, shorter stems (20 px vs 28) |
| Carbon label offset | 14 px | **18 px**, placed outside ring perimeter |
| C-3 OH | Straight down from vertex | Straight down (no conflict — bottom of ring has space) |
| C-4 OH | Straight up from vertex | Straight up (no conflict — bottom-left has space) |
| CH₂OH on C-5 | Straight up | **Angled up-left** (`x-12, y-42`) |
| Annotation position | Near C-1 vertex | **Centered on the offset OH position** (`oh1x+10, oh1y±28`) |

The key insight was that **diagonal offsets** break the vertical stacking that
causes overlap when multiple substituents project from the same side of a ring.

### 6. Updated index.md

- Changed iframe height from `450px` to `462` (= 460 canvas + 2)
- Replaced all TODO placeholders with actual content:
  - About section explaining the 5 molecules and what to observe
  - How to Use with 5 numbered steps
  - Lesson Plan with college placement Biology grade level, 3 activities, and assessment criteria

### 7. Generalized into CLAUDE.md Guide

Extracted the overlap-prevention principles into 7 reusable rules and added them
to `CLAUDE.md` under "### Label Placement in Structural Diagrams (Avoiding Overlap)".

---

## Label Placement Guide (Full Detail)

The following 7 rules were added to `CLAUDE.md` and apply to all future structural
diagram MicroSims (molecular structures, cell diagrams, pathway maps, etc.):

### Rule 1: Size the Scaffold Generously

Make rings, membranes, and structural outlines 20–30% larger than feels necessary.
Labels need surrounding whitespace. A ring that looks well-proportioned without
labels will be too tight once substituent text is added.

**Practical guideline:** For a Haworth pyranose ring centered in a ~400 px drawing
area, use `ringW ≥ 95` and `ringH ≥ 50`. For smaller rings in polymer chains,
scale down to 0.55 but accept that only the O label fits inside.

### Rule 2: Offset Substituent Labels Diagonally

When two attachment points are vertically close (e.g., C-1 and C-2 on the right
side of a Haworth ring), extending both labels straight down creates a vertical
stack that overlaps. Instead, angle them in different directions:

```
WRONG (both straight down):        CORRECT (diagonal offsets):
  C1                                  C1
  |                                    \
  OH   ← overlaps C2's OH              OH  (down-right, x+20)
  C2                                  C2
  |                                    \
  OH                                    OH  (down-right, x+16)
```

**Implementation pattern from carbohydrate-structures.js:**

```javascript
// C-1 OH — diagonal down-right (alpha) or up-right (beta)
let oh1x = pts[1].x + 20;  // offset RIGHT from vertex
let oh1y = pts[1].y + 40;  // offset DOWN from vertex
stroke(ohColor);
line(pts[1].x, pts[1].y, oh1x, oh1y);
text('OH', oh1x + 18, oh1y);  // label further right still

// C-2 OH — also diagonal but different offset
line(pts[2].x, pts[2].y, pts[2].x + 16, pts[2].y + 35);
text('OH', pts[2].x + 22, pts[2].y + 35 + 12);
```

The key is that each substituent gets its own unique (dx, dy) vector. Even when
both go "down-right," different magnitudes of horizontal offset prevent collision.

### Rule 3: Use Different Stem Lengths for Primary vs. Secondary Labels

Create a clear visual hierarchy so that important functional groups dominate
and minor atoms (H) recede:

| Label Type | Stem Length | strokeWeight | textSize | textStyle |
|------------|------------|-------------|----------|-----------|
| Primary (OH, NH₂, COOH, CH₂OH) | 35–42 px | 2 | 13–15 | BOLD |
| Secondary (H, lone pairs) | 18–22 px | 1 | 10–11 | NORMAL |
| Ring atom (O in ring) | — | — | 13–16 | BOLD |
| Carbon number (C1, C2) | — | — | 12 | NORMAL |

The shorter H stems keep hydrogen labels close to the ring while OH labels
extend further out. This naturally separates them even when they share a vertex.

### Rule 4: Place Carbon/Atom Labels Outside the Ring Perimeter

Push C1, C2, etc. at least 14–18 px beyond the nearest ring vertex. Never place
them inside the ring polygon or directly on a vertex — they merge with the
ring outline at strokeWeight 2+.

**Offset formula:** For each carbon Cn at vertex `pts[n]`, compute the label
position by moving away from the ring centroid:

```javascript
let cLabels = [
  { n: 1, x: pts[1].x + 18, y: pts[1].y - 12 },  // right + up
  { n: 2, x: pts[2].x + 18, y: pts[2].y },         // right
  { n: 3, x: pts[3].x + 12, y: pts[3].y + 14 },    // right + down
  { n: 4, x: pts[4].x - 12, y: pts[4].y + 14 },    // left + down
  { n: 5, x: pts[5].x - 18, y: pts[5].y - 10 }     // left + up
];
```

Each label radiates outward from the ring center, with direction matching the
vertex's position relative to center.

### Rule 5: Stagger Labels That Share an Edge

When multiple labels project from the same side of a structure (e.g., all
substituents on the right side of a ring), alternate their horizontal offsets:

- First label at x + 16 px
- Second label at x + 24 px
- Third label at x + 16 px

This zigzag prevents a vertical column of text. In the glucose ring, C-1 OH
goes to x+20 while C-2 OH goes to x+16, and the text labels are at x+38 and
x+22 respectively — staggered enough to avoid collision.

### Rule 6: Reserve Annotation Labels for Toggle-On Display

Detailed annotations like "C-1 –OH (DOWN = α)" should only appear when the
user checks a "Show labels" checkbox. Drawing them unconditionally clutters the
default view and creates overlap with nearby substituent labels.

When shown, place annotations 25–30 px beyond the substituent label they
annotate, with a dashed ellipse highlight:

```javascript
if (showLabels) {
  noFill();
  stroke(ohColor);
  strokeWeight(2);
  drawingContext.setLineDash([4, 4]);
  ellipse(oh1x + 10, oh1y, 55, 35);  // circle the OH
  drawingContext.setLineDash([]);

  noStroke();
  fill(ohColor);
  textSize(12);
  let annY = form === 'alpha' ? oh1y + 28 : oh1y - 28;
  text('C-1 –OH (DOWN = α)', oh1x + 10, annY);
}
```

### Rule 7: Test at the Narrowest Expected Width

Responsive MicroSims may render as narrow as 500 px. If labels overlap at that
width, either:

- Reduce font sizes conditionally: `textSize(canvasWidth < 550 ? 10 : 13)`
- Switch to abbreviated labels: "OH" instead of "–OH group"
- Reduce ring scale proportionally

Always test by resizing the browser window before considering the sim complete.

---

## Molecules Implemented

| Molecule | Ring Type | Key Visual Feature |
|----------|-----------|-------------------|
| α-Glucose | Pyranose (6-membered) | C-1 –OH points DOWN (red) |
| β-Glucose | Pyranose (6-membered) | C-1 –OH points UP (blue) |
| Sucrose | Pyranose + Furanose | α-1,2 glycosidic bond (orange), water departing |
| Starch (amylose) | 4× simplified pyranose | α-1,4 bonds, coiling chain, helix indicator |
| Cellulose | 4× simplified pyranose (alternating flipped) | β-1,4 bonds, straight chain, H-bond indicators |

---

## Interactive Controls

| Control | Type | Position |
|---------|------|----------|
| Molecule selector | `createSelect()` | `(10, drawHeight + 8)` |
| Show bond orientation labels | `createCheckbox()` | `(220, drawHeight + 10)` |

---

## Tokens and Efficiency

This was a single-sim generation (not a batch), so no parallel agents were
launched. Total interaction: 3 turns (initial generation, overlap fix, CLAUDE.md
update). The overlap fix required a full rewrite of the glucose ring drawing
function but preserved the rest of the file unchanged.

---

## Lessons Learned

1. **Always draw the ring larger than it looks like it needs to be.** The v1 ring
   at 96×54 looked fine as an empty polygon but became unreadable with 10+
   substituent labels attached.

2. **Diagonal offsets are the primary tool for preventing overlap.** Straight
   up/down/left/right extensions from adjacent vertices guarantee collision.
   Angling each substituent in a unique direction is the single most effective fix.

3. **Visual hierarchy via stem length and font weight separates competing labels.**
   When OH (bold, 13 pt, 35 px stem) and H (normal, 11 pt, 20 px stem) share a
   carbon vertex, the size difference naturally spaces them apart even before
   positional offsets.

4. **Toggle-on annotations prevent default-view clutter.** The "C-1 –OH (DOWN = α)"
   label is essential for learning but destructive to readability when always
   visible. Putting it behind a checkbox solved both needs.

5. **This pattern generalizes to all biology structural diagrams.** Amino acid
   side chains, nucleotide phosphate groups, lipid fatty acid tails — any
   structure with multiple labeled substituents on a ring or backbone will benefit
   from these same 7 rules.
