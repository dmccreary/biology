# Interactive Diagram Editor — Design Session Log

**Date:** 2026-02-25
**Status:** Two sims complete and working — Dan McCreary is very pleased with the results
**Sims:** `docs/sims/animal-cell/` · `docs/sims/plant-cell/`
**Architecture docs:** `docs/sims/shared-libs/plan.md`

---

## Session Goal

Design and build a reusable system for turning AI-generated biology diagrams into
interactive MicroSims where students can hover to explore structures (Explore mode)
and click to identify structures (Quiz mode). The system must also support an
editor workflow (Edit mode) for calibrating callout positions after image generation.

---

## What Was Built

### Reference documents

| File | Purpose |
|------|---------|
| `docs/learning-graph/sample-biology-diagrams.md` | Reference list: 10 most common biology textbook diagrams with full callout lists |
| `docs/prompts/05-mitosis-diagram-prompt.md` | Detailed text-to-image prompt for 6-panel mitosis diagram |
| `docs/sims/shared-libs/plan.md` | Full architecture spec for the interactive diagram system |

### Pilot MicroSim — Animal Cell (floating-marker style)

| File | Purpose |
|------|---------|
| `docs/sims/animal-cell/image-prompt.md` | Text-to-image prompt for unlabeled animal cell diagram |
| `docs/sims/animal-cell/animal-cell.png` | AI-generated diagram (no embedded text) |
| `docs/sims/animal-cell/data.json` | Callout positions, labels, descriptions, AP tips (calibrated by Dan) |
| `docs/sims/animal-cell/main.html` | MicroSim shell — embeddable iframe |
| `docs/sims/animal-cell/diagram.js` | All interactive logic (Explore / Quiz / Edit modes) |

### Second MicroSim — Plant Cell (side-panel label style)

| File | Purpose |
|------|---------|
| `docs/sims/plant-cell/plant-cell.png` | AI-generated plant cell diagram (no embedded text) |
| `docs/sims/plant-cell/data.json` | Callout positions, labels, descriptions, AP tips (calibrated by Dan) |
| `docs/sims/plant-cell/main.html` | MicroSim shell — 65/35 grid layout (image left, labels right) |
| `docs/sims/plant-cell/diagram.js` | Interactive logic including SVG bezier leader lines and label reorder |

### CLAUDE.md additions

Four permanent rules added to the project's `CLAUDE.md`:

1. **No captions in image generation prompts** — captions belong in the markdown file
   as text below the `<img>` tag, never embedded in the image.
2. **Interactive diagrams principle** — every multi-callout diagram must support
   Explore mode (hover infobox) and Quiz mode (click to identify); infobox placement
   is below the diagram for landscape, to the right for portrait.
3. **MicroSim file naming** — the interactive HTML file is always `main.html`, never
   `index.html`. The MkDocs page file remains `index.md`.
4. **No static leader lines** — leader lines between callout dots and labels must
   always be drawn dynamically in SVG so positions can be customized.

---

## Architecture Decisions

### 1. Image contains no text labels

The AI-generated image is produced with an explicit instruction to include no text,
arrows, callout lines, or annotation marks. All labeling is handled by an HTML/JS
overlay from `data.json`.

**Rationale:** Separating image from data means labels can be corrected, translated,
or expanded without regenerating the image. It also eliminates reliance on
text-to-image models for accurate typography.

### 2. Callout positions stored as percentages

All `x` and `y` coordinates in `data.json` are percentages (0–100) of the image
width and height, not pixel values.

**Rationale:** Percentage-based positioning scales automatically as the image
resizes within the responsive iframe. No JavaScript resize listener needed.

### 3. `data.json` schema

```json
{
  "title": "Animal Cell",
  "orientation": "landscape",
  "image": "animal-cell.png",
  "imageWidth": 1200,
  "imageHeight": 900,
  "callouts": [
    {
      "id": 1,
      "label": "Nucleus",
      "x": 38.2,
      "y": 33.7,
      "radius": 5.0,
      "description": "Full explanation for Explore mode infobox.",
      "ap_tip": "AP exam tip or common misconception (optional)."
    }
  ]
}
```

Key fields: `x`/`y` are percentages; `radius` is the clickable zone as % of image
width (used for future hit-testing); `ap_tip` is optional.

### 4. Edit mode activated by URL parameter

Edit mode is enabled via `?edit=true` in the URL, not a button in the normal UI.

**Rationale:** Keeps the student-facing UI clean. Instructors and content authors
open the edit URL separately. The mode buttons (Explore / Quiz) are disabled
in edit mode to prevent confusion.

### 5. Marker drag uses setPointerCapture; label reorder uses document-level listeners

Marker repositioning (dot on image) uses `setPointerCapture` on the marker button.
Label row reordering uses `document.addEventListener` for `pointermove`/`pointerup`.

**Rationale:** Both approaches track the pointer reliably outside the element. The
distinction matters for the reorder case: because `onUp` moves the row element itself
in the DOM via `insertBefore`, attaching listeners to the row (with `setPointerCapture`)
caused the second drag to fail after the first reorder. Document-level listeners are
unaffected by DOM moves and fixed the bug.

### 6. Edit mode workflow

1. Open `main.html?edit=true`
2. Drag each orange marker dot to the exact structure in the image
3. Drag label rows up/down by their `⠿` handle to reorder them
4. Labels and marker dots are renumbered automatically after each reorder
5. Live coordinate readout shows `x` and `y` while dragging a marker
6. Click **Copy JSON** — the full updated `data.json` is copied to clipboard
7. Paste over `data.json` and save
8. Reload normal `main.html` to verify

**Calibration formula:** `x = pixel_x / imageWidth * 100`,
`y = pixel_y / imageHeight * 100`. Alternatively, use the edit mode drag directly.

### 7. Exported JSON omits calibrationNote

The JSON output from the edit mode export omits the `calibrationNote` field that
was present in the original `data.json` template.

**Rationale:** Once coordinates are set via the drag editor, the calibration
instructions are no longer needed and would clutter the production data file.

### 8. Quiz mode uses a shuffled queue, not random-per-click

At quiz start, all callouts are shuffled into a `quizQueue` array. Questions are
drawn in order from that array, guaranteeing all structures are tested exactly once
per round before the round completes.

**Rationale:** Random-per-click can repeat structures and never reach others. A
shuffled queue guarantees coverage and allows accurate scoring (correct / total).

### 9. quizLocked flag prevents double-scoring

After a correct answer, a 1800 ms delay shows the description before advancing.
A `quizLocked` boolean blocks further clicks during this window.

**Rationale:** Without the lock, a fast user can click multiple markers during the
feedback display and score multiple correct answers for a single question.

### 10. Markers are `<button>` elements

Each callout marker is rendered as a `<button>` rather than a `<div>`.

**Rationale:** Native button elements are keyboard-focusable and receive
`Enter`/`Space` key events automatically, making the sim accessible without
extra ARIA roles.

### 11. Infobox has a fixed minimum height

The infobox below the diagram has `min-height: 130px`.

**Rationale:** Prevents layout shift (content jumping) when the infobox transitions
from the default prompt text to a full description with AP tip.

### 12. iframe embed convention

```html
<iframe src="../../sims/animal-cell/main.html"
        width="100%" height="560" scrolling="no"></iframe>
```

Per project CLAUDE.md: never use a `style` attribute on iframe elements, always use
`main.html` (not `index.html`), and always include `scrolling="no"`.

### 13. Side-panel label style (plant cell)

The plant cell uses a different visual layout from the animal cell: instead of
numbered floating markers on the image, it uses a 65/35 CSS grid with the image on
the left and a numbered label list on the right. SVG bezier curves connect each dot
on the image to its label row.

**Rationale:** For images where floating markers would crowd the drawing, the side
panel gives each label its own unobstructed space. The bezier curves depart
horizontally from the dot and arrive horizontally at the label, creating clean
S-curves that are visually unambiguous even when leader lines cross.

### 14. SVG leader lines are redrawn via ResizeObserver

A `ResizeObserver` on the `#layout` element redraws all leader lines whenever the
container size changes.

**Rationale:** Leader lines are calculated from live `getBoundingClientRect()` calls.
Any resize (window resize, MkDocs sidebar toggle, iframe reflow) would misalign
static lines. The ResizeObserver keeps them accurate at all times.

### 15. Label reorder renumbers all IDs sequentially

After each drag-to-reorder operation, all callout `id` values, `label-num` display
text, marker button text, `row.dataset.id`, and `btn.dataset.id` are reassigned
to 1–N based on the new DOM order. Both `this.markers` and `this.labelRows` Maps
are rebuilt with the new keys.

**Rationale:** Keeping the original IDs after reorder would show non-sequential
numbers (e.g., 3, 1, 5, 2...) to students, which is confusing. Sequential
renumbering also produces clean exported JSON that loads correctly on fresh page load.

### 16. SVG leader line widths are mode-aware

Leader line widths are controlled by two getter properties on `DiagramSim`:
- `get lw()` — default width: 3 px (normal) / 4.5 px (edit mode)
- `get lwActive()` — highlighted width: 4 px (normal) / 6 px (edit mode)

**Rationale:** Thicker lines in edit mode make the connection between dot and label
easier to see while calibrating positions, where precision matters most.

---

## Text-to-Image Prompt Design Decisions

### Mitosis 6-panel prompt (`05-mitosis-diagram-prompt.md`)

- **3×2 grid layout** — panels flow left-to-right, top-to-bottom
- **Exactly 4 chromosomes** throughout all panels for visual tracking continuity
- **Consistent color vocabulary** across all 6 panels:
  - Chromosomes: cobalt blue `#1A3A8F`
  - Spindle / microtubules: coral-red `#E05B3A`
  - Centrosomes: orange `#F5A623`
  - Nuclear envelope: golden-yellow `#7DB84A`
  - Cleavage furrow: teal `#0A7B6E`
- **Panel 5 (Anaphase)** drawn as a taller, narrower oval to signal cell elongation
- **Per-panel callout placement strategy** specified — left-margin, right-margin, or
  split — to prevent leader lines from crossing each other
- **38 total callouts** across 6 panels — all were placed correctly by the image model

### Animal cell prompt (`image-prompt.md`)

- **No text of any kind** in the image — primary constraint
- **Intentional clear landing zones** left around each structure so callout markers
  don't overlap neighboring structures
- **Distinctive color per structure** to make them identifiable even without labels:
  - Nucleus interior: pale lavender
  - Mitochondria: teal with visible cristae
  - ER: purple stacked cisternae
  - Ribosomes: orange dots on ER surface
  - Cytoplasm: pale blue-grey
  - Cell membrane: warm dark brown double-line with orange lipid tint
- **ER visually connects to nuclear envelope** at 3 o'clock position to show
  biological continuity (endomembrane system)
- Two mitochondria drawn at different orientations to look natural

---

## Tested and Verified

### Animal Cell (floating-marker style)
- [x] Edit mode drag repositions markers correctly
- [x] Live coordinate display updates during drag
- [x] Copy JSON produces valid JSON with updated coordinates
- [x] Pasting updated coordinates into `data.json` persists correctly on reload

### Plant Cell (side-panel label style)
- [x] SVG bezier leader lines render correctly connecting dots to label rows
- [x] Leader lines redraw correctly after window resize (ResizeObserver)
- [x] Leader lines redraw live while dragging a marker in edit mode
- [x] Label reorder drag-and-drop works for first and subsequent reorders
- [x] Labels and marker dots renumber correctly after each reorder
- [x] Exported JSON reflects new order with sequential ids
- [x] Leader line widths are visibly thicker in edit mode (4.5 px vs 3 px)
- [x] Dan McCreary calibrated all 6 callout positions and saved `data.json`

## Not Yet Tested

- [ ] Explore mode hover infobox in MkDocs Material iframe
- [ ] Quiz mode full run-through on plant cell (labels hidden, progressive reveal)
- [ ] Touch drag in edit mode on mobile
- [ ] Portrait layout variant

---

## Next Directions Under Consideration

1. **Shared `diagram.js`** — single canonical copy at
   `docs/sims/shared-libs/diagram.js`, referenced by all sim `main.html`
   files via a relative path, rather than copying per sim. Avoids version drift.

2. **Mitosis 6-panel interactive sim** — next complex diagram; introduces the
   `panel` field in `data.json` and panel-border highlighting in explore/quiz modes.

3. **Quiz Sub-mode B** — "Name It" variant where one marker pulses and the student
   picks the correct name from 4 choices. Better suited to mobile/touch.

4. **MkDocs integration test** — embed both sims in actual chapter pages as iframes
   and verify height, scrolling, and responsiveness in the published site.

5. **Image generation pipeline** — now that the text-to-image → edit → calibrate →
   publish workflow is proven, scale to other key AP Biology diagrams: ETC
   (mitochondria inner membrane), chloroplast light reactions, neuron structure.
