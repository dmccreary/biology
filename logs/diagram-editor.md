# Interactive Diagram Editor — Design Session Log

**Date:** 2026-02-25
**Status:** Pilot complete and working
**Sim path:** `docs/sims/animal-cell/`
**Architecture docs:** `docs/sims/diagram-architecture/plan.md`

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
| `docs/sims/diagram-architecture/plan.md` | Full architecture spec for the interactive diagram system |

### Pilot MicroSim — Animal Cell

| File | Purpose |
|------|---------|
| `docs/sims/animal-cell/image-prompt.md` | Text-to-image prompt for unlabeled animal cell diagram |
| `docs/sims/animal-cell/animal-cell.png` | AI-generated diagram (no embedded text) |
| `docs/sims/animal-cell/data.json` | Callout positions, labels, descriptions, AP tips |
| `docs/sims/animal-cell/index.html` | MicroSim shell — embeddable iframe |
| `docs/sims/animal-cell/diagram.js` | All interactive logic (Explore / Quiz / Edit modes) |

### CLAUDE.md additions

Two permanent rules added to the project's `CLAUDE.md`:

1. **No captions in image generation prompts** — captions belong in the markdown file
   as text below the `<img>` tag, never embedded in the image.
2. **Interactive diagrams principle** — every multi-callout diagram must support
   Explore mode (hover infobox) and Quiz mode (click to identify); infobox placement
   is below the diagram for landscape, to the right for portrait.

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

### 5. Edit mode uses setPointerCapture for reliable dragging

Drag tracking uses `setPointerCapture` on the marker element rather than document-
level event listeners.

**Rationale:** `setPointerCapture` routes all pointer events to the capturing element
even when the pointer leaves it, including on touch screens and styluses. This
prevents drag-drop from breaking when the user moves the pointer off the marker.

### 6. Edit mode workflow

1. Open `index.html?edit=true`
2. Drag each orange marker to the exact structure in the image
3. Live coordinate readout shows `x` and `y` as dragging occurs
4. Click **Copy JSON** — the full updated `data.json` is copied to clipboard
5. Paste over `data.json` and save
6. Reload normal `index.html` to verify

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
<iframe src="../../sims/animal-cell/index.html"
        width="100%" height="560" scrolling="no"></iframe>
```

Per project CLAUDE.md: never use a `style` attribute on iframe elements, and always
include `scrolling="no"`.

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

- [x] Edit mode drag repositions markers correctly
- [x] Live coordinate display updates during drag
- [x] Copy JSON produces valid JSON with updated coordinates
- [x] Pasting updated coordinates into `data.json` persists correctly on reload

## Not Yet Tested

- [ ] Explore mode hover infobox in MkDocs Material iframe
- [ ] Quiz mode full run-through (all 6 questions, score display, restart)
- [ ] Touch drag in edit mode on mobile
- [ ] Portrait layout variant

---

## Next Directions Under Consideration

1. **Callout-list style** — alternative diagram style where numbered callouts appear
   in a side panel list with leader lines drawn from the list to the structure, rather
   than floating markers on the image. Useful for dense diagrams where floating
   markers would overlap.

2. **Shared `diagram.js`** — single canonical copy at
   `docs/sims/diagram-architecture/diagram.js`, referenced by all sim `index.html`
   files, rather than copying per sim. Avoids drift between diagram versions.

3. **Mitosis 6-panel interactive sim** — next complex diagram to build; introduces
   the `panel` field in `data.json` and panel-border highlighting.

4. **Quiz Sub-mode B** — "Name It" variant where one marker pulses and the student
   picks the correct name from 4 choices. Better suited to mobile/touch.
