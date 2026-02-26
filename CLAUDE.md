# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AP Biology: An Interactive Course — an MkDocs Material intelligent textbook for advanced high school students preparing for the AP Biology exam. The textbook covers 8 College Board units across 375 concepts organized in a dependency graph.

## Development Commands

```bash
# Local dev server (live reload)
mkdocs serve
# Visit: http://127.0.0.1:8000/biology/

# Production build
mkdocs build

# Install dependencies (one-time)
pip install mkdocs-material
```

The `site/` directory and `.cache/` are gitignored — never commit them.

## Architecture

### Content Layer (`docs/`)

- `docs/index.md` — Home page with cover image (`img/cover.png`), Open Graph metadata in frontmatter
- `docs/course-description.md` — The authoritative source document; all 375 learning graph concepts derive from it
- `docs/learning-graph/` — Learning graph data and analysis pages
- `docs/img/mascot/` — 7 Gregor PNG files (transparent background, ≤100 KB each)
- `docs/css/extra.css` — Layout, iframe, and `.prompt` admonition copy-button styles
- `docs/css/mascot.css` — All 7 mascot admonition color styles + `.mascot-admonition-img` float rule
- `docs/js/extra.js` — Copy-button logic for `.admonition.prompt` blocks
- `docs/js/mathjax-config.js` — MathJax configuration (equations use MathJax, not KaTeX)

### Learning Graph Data (`docs/learning-graph/`)

Two canonical data files drive the interactive graph viewer:
- `learning-graph.csv` — edges as `from,to` concept pairs
- `learning-graph.json` — vis-network format with `nodes`, `edges`, and `metadata` elements

Supporting analysis pages (Python scripts in same directory): `analyze-graph.py`, `csv-to-json.py`, `taxonomy-distribution.py`, `add-taxonomy.py`, `validate-learning-graph.py`.

### Configuration (`mkdocs.yml`)

Key settings:
- Theme: MkDocs Material, primary color `green`
- No `navigation.tabs` — this book uses side navigation only (never add `navigation.tabs`)
- Math: MathJax via external CDN + `docs/js/mathjax-config.js`
- Social plugin enabled (requires Cairo system library)
- `watch: [docs, mkdocs.yml]` for live reload

### CSS Architecture

Two CSS files are loaded in order:
1. `extra.css` — structural styles (logo sizing, iframes, `.prompt` admonition copy button)
2. `mascot.css` — all 7 mascot admonition variants + shared image float rules

**Mascot CSS pattern:**
- Each admonition type gets its own `border-color` + `background-color` block
- A single global rule `[class*="mascot-"] > .admonition-title::before { display: none }` removes all icons
- `.mascot-admonition-img` uses `float: left; margin: 0 1em 0.5em 0` to place the image left of text
- `--mascot-size: 90px` controls image size in admonitions

### Mascot Images

7 PNG files at `docs/img/mascot/`:
`neutral.png`, `welcome.png`, `thinking.png`, `tip.png`, `warning.png`, `celebration.png`, `encouraging.png`

- Format: PNG with transparent background
- Target: 512×512 px generated, displayed at 90×90 px via CSS variable
- Generation prompts: `docs/img/mascot/image-prompts.md`

To trim excess transparent padding from mascot PNGs (run from repo root):
```bash
python3 - <<'PY'
from pathlib import Path
from PIL import Image

root = Path('docs/img/mascot')
THRESH = 10   # alpha ≤ 10 treated as padding
PADDING = 4   # px buffer preserved after crop

for path in sorted(root.glob('*.png')):
    img = Image.open(path).convert('RGBA')
    alpha = img.getchannel('A')
    px = alpha.load()
    w, h = img.size
    min_x, max_x, min_y, max_y = w, -1, h, -1
    for y in range(h):
        for x in range(w):
            if px[x, y] > THRESH:
                min_x = min(min_x, x); max_x = max(max_x, x)
                min_y = min(min_y, y); max_y = max(max_y, y)
    if max_x == -1:
        print(f'skip {path.name}'); continue
    bbox = (max(min_x-PADDING,0), max(min_y-PADDING,0),
            min(max_x+PADDING,w-1)+1, min(max_y+PADDING,h-1)+1)
    cropped = img.crop(bbox)
    if cropped.size != img.size:
        cropped.save(path)
        print(f'cropped {path.name}: {img.size} -> {cropped.size}')
PY
```

---

## Equations and Chemical Notation

### ⚠️ Critical Rule: Never Use Backslash Delimiters in Markdown

**NEVER write `\(...\)` or `\[...\]` directly in any `.md` file.** Python-Markdown can corrupt backslash sequences before MathJax ever sees them, silently breaking equations.

**Always use `$` and `$$` in markdown content files. No exceptions.**

### How the Pipeline Works

```
Markdown source     pymdownx.arithmatex      MathJax renders
──────────────      ───────────────────      ───────────────
$...$          →    \(...\)              →    inline equation
$$...$$        →    \[...\]             →    block equation
```

The arithmatex extension (configured with `generic: true` in `mkdocs.yml`) intercepts dollar-sign delimiters and converts them to backslash form *internally* before handing off to MathJax. The backslash delimiters in `mathjax-config.js` are what MathJax receives — they are never written by hand.

### Inline Equations

Wrap in single `$`:

```markdown
The free energy change is $\Delta G = \Delta H - T\Delta S$.

Enzyme rate follows $v = \frac{V_{max}[S]}{K_m + [S]}$.

Hardy-Weinberg: $p^2 + 2pq + q^2 = 1$
```

### Block (Display) Equations

Wrap in `$$` on its own lines:

```markdown
$$
\Delta G = \Delta H - T\Delta S
$$

$$
\frac{dN}{dt} = rN\left(\frac{K - N}{K}\right)
$$
```

### Chemical Equations — Use `\ce{}`

Chemical notation uses the `mhchem` package via `$\ce{...}$`. This is the **only** correct way to write chemical formulas and reactions.

```markdown
Water: $\ce{H2O}$

Photosynthesis:
$$\ce{6CO2 + 6H2O ->[\text{light}] C6H12O6 + 6O2}$$

Cellular respiration:
$$\ce{C6H12O6 + 6O2 -> 6CO2 + 6H2O + ATP}$$

ATP hydrolysis: $\ce{ATP + H2O -> ADP + P_i}$

Ionization: $\ce{H2CO3 <=> H+ + HCO3-}$
```

Key `\ce{}` syntax:
- Subscripts are automatic: `H2O` renders as H₂O (no `_` needed inside `\ce{}`)
- Arrows: `->` (forward), `<=>` (equilibrium), `<->` (resonance)
- Charges: `H+`, `OH-`, `Fe^{3+}`
- Conditions above arrow: `->[\text{light}]` or `->[catalyst]`

### What NOT to Write

```markdown
<!-- WRONG — backslash delimiters in markdown -->
\(p^2 + 2pq + q^2 = 1\)
\[E = mc^2\]

<!-- WRONG — plain text subscripts instead of math -->
H2O, CO2, ATP → ADP + Pi

<!-- CORRECT -->
$p^2 + 2pq + q^2 = 1$
$$E = mc^2$$
$\ce{H2O}$, $\ce{CO2}$, $\ce{ATP -> ADP + P_i}$
```

---

## Chapter Content Guidelines

### Diagrams in Chapters — Always Use MicroSim Iframes

Every multi-callout biological diagram in a chapter **must** be an interactive
MicroSim, not a static image or a `<details>` placeholder block.
**Never use `<details>` blocks for biological diagrams — use the MicroSim workflow.**

**Decision rule:**

| Content | Action |
|---------|--------|
| Cell organelle diagrams | MicroSim (interactive) |
| Molecular structures (DNA, ATP, proteins) | MicroSim (interactive) |
| Metabolic pathways (ETC, Calvin cycle, glycolysis) | MicroSim (interactive) |
| Neuron / synapse anatomy | MicroSim (interactive) |
| Mitosis / meiosis stage diagrams | MicroSim (interactive) |
| Signal transduction pathway maps | MicroSim (interactive) |
| Ecosystem / food web diagrams | MicroSim (interactive) |
| Phylogenetic trees with labeled clades | MicroSim (interactive) |
| Simple data tables or text comparisons | Markdown table — no sim needed |
| Conceptual relationships (2–4 items) | Prose or bullet list — no sim needed |

### Diagrams Already Built

The following MicroSim interactive diagrams exist in `docs/sims/`. **Always embed
these via iframe rather than creating a duplicate sim.** Check this list first before
creating any new diagram sim.

| Sim directory | Topic covered | Callout count |
|---------------|---------------|---------------|
| `animal-cell` | Eukaryotic animal cell organelles | 13 |
| `plant-cell` | Eukaryotic plant cell organelles | 14 |
| `cell-membrane` | Fluid mosaic model, membrane proteins, transport | 12 |
| `dna-double-helix` | DNA double helix, base pairing, strand directionality | 10 |
| `chloroplast` | Chloroplast structure, thylakoid, light reactions | 12 |
| `mitochondria` | Mitochondrial structure + ETC complexes I–V | 15 |
| `neuron-structure` | Multipolar neuron anatomy, synapse ultrastructure | 13 |

**Iframe path from a chapter page** — chapter files live at
`docs/chapters/unit-X/chapter-name/index.md` (three levels deep from `docs/`),
so the relative path to any sim is `../../../sims/<sim-name>/main.html`.

### Embedding an Existing Diagram in a Chapter

```markdown
## Neuron Structure

<iframe src="../../../sims/neuron-structure/main.html" height="730" width="100%" scrolling="no"></iframe>

*[View Fullscreen](../../../sims/neuron-structure/main.html)*

The diagram above shows the 13 labeled structures of a multipolar motor neuron,
from dendrites through the myelinated axon to the synaptic terminals.
Use **Explore mode** to read about each structure, or switch to **Quiz mode**
to test yourself.
```

Rules for iframe embeds in chapters:
- Never add a `style` attribute to the `<iframe>` element
- Always include `scrolling="no"`
- Height = image natural height (~900 px for landscape 4:3) + ~160 px infobox = **~730 px** for standard sims (adjust if the sim's own `index.md` uses a different height)
- Add a `[View Fullscreen](...)` link immediately after the iframe
- Write 2–4 sentences of prose around the iframe — do not just drop the iframe with no context

### When a Chapter Needs a New Diagram

If the chapter topic requires a diagram not in the "Already Built" list above,
create the full MicroSim **before** writing the chapter content that references it.
Follow the Step-by-Step Build Process below, then embed the new sim via iframe in
the chapter markdown.

Add the new sim to `mkdocs.yml` nav under the MicroSims section.

**Caption format for figure references in prose:** `Figure [unit].[chapter].[number] — Descriptive Title`
(e.g., `Figure 3.2.1 — The Electron Transport Chain`). Reference figures in prose but do not
embed captions in images themselves.

### Interactive Diagrams

A core principle of this intelligent textbook is that complex biological diagrams must
be **interactive**, not static. Every multi-callout diagram should support two modes:

**Explore mode** — The student hovers over a callout label or numbered marker and sees
an infobox that describes the structure, its function, and any AP exam relevance.
- Infobox placement: **below** the diagram for landscape-orientation images;
  **to the right** of the diagram for portrait-orientation images.

**Quiz mode** — A quiz prompt appears (in the same position as the Explore infobox).
The student must click the correct region of the image to identify a named structure,
or identify an unlabeled structure by name from a list.
- Correct/incorrect feedback is shown immediately in the infobox area.

**Implementation pattern:** Interactive diagrams are built as self-contained MicroSim
iframes (HTML + JS + JSON). The AI-generated image contains **no embedded text labels**.
Callout positions are stored as percentage-based `(x, y)` coordinates in a `data.json`
file alongside the image, so the overlay scales with any display size. The same
JavaScript component handles both Explore and Quiz modes via a mode-toggle button.

**MicroSim file naming convention:** The interactive HTML file in every MicroSim folder
must be named `main.html` — never `index.html`. This is consistent with all p5.js
MicroSim standards used throughout this project. The MkDocs page file remains `index.md`.

### Biology Diagram MicroSim: Step-by-Step Build Process

Use this checklist whenever creating a new interactive diagram sim.

#### Step 1 — Plan the diagram

1. Choose the biological subject (e.g., "Cell Membrane — Fluid Mosaic Model").
2. List every structure that will receive a callout. Use the reference table in
   `docs/learning-graph/sample-biology-diagrams.md` as a starting point.
3. Decide the layout style. **Side-panel is the default.**
   - **Side-panel style (default)** — 65/35 grid with image left and numbered label
     list right, connected by SVG bezier leader lines. Use this for all new sims.
   - **Floating-marker style (legacy)** — numbered dots float over the image, infobox
     below. Used only for the original animal-cell sim (`docs/sims/animal-cell/`),
     which has its own local `diagram.js` and is not shared.

#### Step 2 — Write the image generation prompt

Create `docs/sims/<sim-name>/image-prompt.md` with a detailed, unambiguous description
for the text-to-image model. A high-quality prompt produces an image that needs minimal
retouching and has clear, non-overlapping landing zones for every callout marker.

**Mandatory rules (non-negotiable):**

- **No text of any kind in the image.** State this explicitly: "No text, labels,
  numbers, arrows, callout lines, leader lines, or annotation marks anywhere in the
  image." Repeat this at the top AND bottom of the prompt.
- **No figure captions, scale bars, or legends** — these live in the markdown file.
- **No gradient fills** that blur structure boundaries or obscure landing zones.
- **No artistic flourishes** (decorative backgrounds, bokeh, photorealistic lighting)
  that make it hard to place marker dots precisely.

**Color and structure requirements:**

- Assign a **distinct, named hex color** to every labeled structure. The same hex
  value must appear in the `data.json` `"color"` field so the calibrator can match
  label to structure instantly during edit mode.
- Colors must differ by enough hue, lightness, or saturation to be distinguishable
  without labels. Do not use two shades of the same hue for adjacent structures.
- Request **clear landing zones**: each structure must occupy enough image area that
  a 30–40 px circular marker dot can be placed on it without touching neighboring
  structures. State minimum landing zone size explicitly for small structures.

**Spatial layout requirements:**

- Specify **exactly where** each major structure should appear in the image using
  compass directions, thirds, or clock positions (e.g., "soma in the left third,
  axon running horizontally through the center, terminals in the right quarter").
- Identify all **structural connections** that must be visually explicit (e.g.,
  "rough ER visually connects to the nuclear envelope", "axon hillock is a distinct
  cone-shaped narrowing between soma and axon").
- For cross-sections: specify which structures are inside/outside, which membranes
  wrap which compartments, and how many layers are visible.
- For pathways: specify the left-to-right or top-to-bottom flow order.

**Technical specifications (every prompt must include):**

- Aspect ratio: **landscape 4:3** (standard for all biology diagram sims)
- Resolution: **1200 × 900 px**
- Style: **"biological textbook illustration, clean line art with light color fills,
  white background, AP Biology high school level"**
- List every structure to be visible, in order of visual prominence
- Note any structures that must be visible inside other structures (nested anatomy)

**Per-structure prompt block (use this format for each structure):**

```
- **[Structure name]** — [shape and visual appearance]; [location in the image];
  color: [hex or descriptive color]. Must have at least [N] px of clear,
  non-overlapping visual space for a callout marker.
```

#### Step 3 — Create the sim directory and files

```
docs/sims/<sim-name>/
├── main.html         ← thin HTML shell (copy template below)
├── data.json         ← callout data (copy template below, fill placeholder coords)
├── <sim-name>.png    ← AI-generated image (no text)
└── index.md          ← MkDocs page with iframe embed
```

**`main.html` template** — references shared JS and CSS, never has its own copies:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><!-- Diagram Title --> — Interactive Diagram</title>
  <link rel="stylesheet" href="../diagram-architecture/style.css">
</head>
<body>

<div id="controls">
  <button class="mode-btn active" id="btn-explore" onclick="sim.setMode('explore')">Explore</button>
  <button class="mode-btn"        id="btn-quiz"    onclick="sim.setMode('quiz')">Quiz</button>
  <span id="quiz-score" style="display:none">
    Score: <strong id="score-val">0</strong> / <strong id="score-total">0</strong>
  </span>
</div>

<div id="layout">
  <svg id="leaders-svg"></svg>

  <div id="diagram-wrapper">
    <img id="diagram-img" src="<!-- image filename -->.png" alt="<!-- Alt text -->" draggable="false">
    <div id="markers-layer"></div>
  </div>

  <div id="label-panel">
    <!-- label rows injected by diagram.js -->
  </div>
</div>

<div id="infobox">
  <div id="infobox-prompt">Hover over a numbered marker or a label to learn about that structure.</div>
  <div id="infobox-content">
    <div id="infobox-label"></div>
    <div id="infobox-desc"></div>
    <div id="infobox-ap-tip"></div>
    <button id="quiz-restart" onclick="sim.restartQuiz()">Try Again</button>
  </div>
</div>

<div id="edit-panel">
  <h3>Edit Mode — drag markers to calibrate positions</h3>
  <div id="coord-display">Drag a marker to see its live coordinates.</div>
  <textarea id="json-output" readonly spellcheck="false"></textarea>
  <div id="edit-actions">
    <button id="copy-json-btn" onclick="sim.copyJSON()">Copy JSON</button>
    <span id="copy-confirm"></span>
  </div>
</div>

<script src="../diagram-architecture/diagram.js"></script>
</body>
</html>
```

**`data.json` template** — one entry per callout, all coordinates placeholder `50, 50`.
Every field shown is required (except `ap_tip`, which is omitted if not AP-testable):

```json
{
  "title": "Cell Membrane — Fluid Mosaic Model",
  "orientation": "landscape",
  "image": "<sim-name>.png",
  "callouts": [
    {
      "id": 1,
      "label": "Phospholipid bilayer",
      "x": 50,
      "y": 50,
      "radius": 3.5,
      "color": "#F5A623",
      "hint": "1–2 sentence visual description and location in the image for the calibrator.",
      "description": "3–5 sentence explanation: what it is, physical characteristics, function, how it relates to neighboring structures. AP Biology reading level.",
      "ap_tip": "2–3 sentences: common misconception, exam question format, analogy to another AP Biology system."
    }
  ]
}
```

**Field reference and quality standards:**

- `x`, `y` — percentage of image width/height (0–100), not pixels. Set to `50, 50`
  as a placeholder; calibrate in edit mode after the image is generated.
- `radius` — clickable hit zone as % of image width. Match to structure size:
  - 3.0 — very small structures (single protein, narrow gap)
  - 3.5 — small structures (small organelle, thin membrane layer)
  - 4.0 — medium structures (mid-size organelle, short process)
  - 5.0 — large structures (nucleus, soma, large organelle interior)
- `label` — the canonical biological name used in AP Biology. Capitalize only the
  first word (or proper nouns). Match exactly the name used in `index.md` section headings.
- `description` — **required, 3–5 sentences** covering: (1) what the structure is
  and its physical characteristics; (2) its specific biological function; (3) how it
  interacts with adjacent structures or fits into the pathway/process. Write at
  AP Biology reading level (rigorous but accessible to high school students). Include
  relevant molecules, ions, or numerical values where appropriate.
- `ap_tip` — **required for all AP-testable structures**; omit only for purely
  anatomical landmarks with no exam relevance. Write 2–3 sentences covering:
  (1) the most common AP exam misconception or trick question involving this structure;
  (2) the exam question format (e.g., "Know that..."); (3) a useful analogy to another
  system covered in AP Biology (e.g., chloroplast vs. mitochondria parallels). The
  `ap_tip` box renders in amber — use it for genuine exam strategy, not general facts.
- `color` — **required for every callout**. Use the hex color that matches the
  dominant color of the structure as it appears in the generated image. This must
  match the color specified in `image-prompt.md` for that structure. Shown as a
  filled color swatch in edit mode for quick visual matching during calibration.
- `hint` — **required for every callout**. A 1–2 sentence description of the
  structure's visual appearance AND its location within the image
  (e.g., `"pale cream elliptical segments wrapping the yellow axon, between two dark
  pinch points, in the center-right of the image"`). Shown as italic sub-text in edit
  mode and appended to the live coordinate readout while dragging. Precise hints
  dramatically reduce calibration time.
- `showNumbers` — optional boolean (default `true`); set to `false` to display plain
  dots instead of numbered circles. The quiz mode always shows `?` regardless.
- `layout` — optional string (`"side-panel"` or `"top-bottom"`); default is
  `"side-panel"`. Use `"top-bottom"` for images with a horizontal structure
  (e.g. cell membrane cross-sections) where the side panel produces tangled leader lines.
  In `top-bottom` mode, label chips appear in a horizontal strip above and below the
  image; vertical S-curve leader lines connect each chip to its marker.
- `panel` — per-callout string (`"top"` or `"bottom"`); required when
  `"layout": "top-bottom"`. Determines which strip the label chip starts in.
  Biologically, use `"top"` for extracellular structures and `"bottom"` for
  intracellular structures; balance the panel counts (roughly 50/50) so neither
  strip becomes overly crowded.

#### Layout note for cross-section diagrams

The `side-panel` layout (labels right of image) works well when structures are
distributed across the image in 2D (cell organelles, pathway nodes, etc.). It works
poorly for **horizontal cross-sections** like the cell membrane, where many structures
cluster near the membrane midline — leader lines become near-vertical and tangle.

Use `"layout": "top-bottom"` for horizontal cross-sections. Set `"panel": "top"` for
structures in the extracellular/upper half and `"panel": "bottom"` for intracellular/lower
half. In edit mode, each label chip gains a `↓` or `↑` toggle button to move it between
panels, and a `⠿` drag handle to reorder chips left/right within the same panel.
The JSON output from Copy JSON already includes the updated `panel` values.

#### Step 4 — Calibrate callout positions in Edit mode

1. Start the local dev server: `mkdocs serve`
2. Open the sim directly in the browser:
   `http://127.0.0.1:8000/biology/sims/<sim-name>/main.html?edit=true`
3. **Drag each orange marker dot** to the exact structure in the image.
4. The live coordinate readout shows `x` and `y` (plus the `hint` text) while dragging.
5. **Side-panel layout** — drag label rows up/down by their `⠿` handle to reorder.
   Labels and markers renumber automatically after each reorder.
   **Top-bottom layout** — drag chips left/right within a panel to reorder;
   click the `↓`/`↑` button on a chip to move it between the top and bottom strips.
6. Click **Copy JSON** — the full updated `data.json` is copied to the clipboard.
7. Paste over `docs/sims/<sim-name>/data.json` and save.
8. Reload `main.html` (without `?edit=true`) to verify normal mode.

Manual coordinate formula if needed: `x = pixel_x / imageWidth * 100`,
`y = pixel_y / imageHeight * 100`.

#### Step 5 — Verify both modes

Open `main.html` (no `?edit=true`) and check:

- [ ] **Explore mode** — hovering a marker or label row highlights both, shows infobox
- [ ] **Explore mode** — AP Exam Tip box appears (amber) for callouts that have `ap_tip`
- [ ] **Quiz mode** — label texts are hidden, markers show `?`
- [ ] **Quiz mode** — clicking the correct marker reveals label text and shows description
- [ ] **Quiz mode** — clicking a wrong marker shows red shake animation and "Not quite" text
- [ ] **Quiz mode** — after all structures answered, confetti animation plays
- [ ] **Leader lines** — SVG bezier curves redraw correctly after resizing the window

#### Step 6 — Add the MkDocs page

In `docs/sims/<sim-name>/index.md`, embed the sim as an iframe and add descriptive
text for each structure:

```markdown
# <Diagram Title>

<iframe src="main.html" height="560" width="100%" scrolling="no"></iframe>

[View Fullscreen](main.html)

## Structure 1 Name
Brief description...
```

iframe height guideline: image natural height + ~160 px for the infobox below.
Never use a `style` attribute on the iframe element; always include `scrolling="no"`.

#### Shared architecture files (do not copy — always reference)

Both files live at `docs/sims/diagram-architecture/` and are shared by every diagram sim:

| File | Purpose |
|------|---------|
| `diagram-architecture/diagram.js` | All interactive logic — Explore, Quiz, Edit modes |
| `diagram-architecture/style.css`  | All CSS — layout, markers, leader lines, infobox, edit panel |

Each sim's `main.html` references them via `../diagram-architecture/filename`.
`fetch('data.json')` inside `diagram.js` always resolves relative to the **page URL**
(the `main.html` location), so `data.json` and the image are always found in the sim's
own directory regardless of where `diagram.js` lives.

---

## Learning Mascot: Gregor the Tree Frog

### Character Overview

- **Name**: Gregor (after Gregor Mendel, father of genetics)
- **Species**: Tree Frog
- **Personality**: Curious and scientifically enthusiastic when introducing concepts; warm and encouraging when material gets difficult
- **Catchphrase**: "Let's investigate!"
- **Visual**: Small, round-bodied lime-green tree frog with large golden eyes, cream-white underbelly, white lab coat, and a round magnifying glass

### Voice Characteristics

- Uses clear, precise scientific language appropriate for AP-level high school students
- Frames biology as an active investigation ("Let's investigate!", "What does the evidence tell us?")
- Normalizes difficulty: "This is one of the trickiest concepts in AP Biology — that's completely normal"
- Celebrates connections between units: "Notice how this connects back to what we saw in Unit 3"
- Refers to students as "investigators" or "scientists"
- Signature phrases: "Let's investigate!", "What does the evidence tell us?", "You're closer than you think!", "The answer is hiding in plain sight"

### Placement Rules

| Context | Admonition Type | Frequency |
|---------|----------------|-----------|
| General note / sidebar | `mascot-neutral` | As needed |
| Chapter opening | `mascot-welcome` | Every chapter (required) |
| Major concept introduction | `mascot-thinking` | 2–3 per chapter |
| AP exam strategy / memory tip | `mascot-tip` | As needed |
| Common misconception | `mascot-warning` | As needed |
| End of major section | `mascot-celebration` | 1 per chapter |
| Difficult content (e.g., Hardy-Weinberg, ETC) | `mascot-encourage` | Where students typically struggle |

### Do's

- Use Gregor to introduce new topics warmly at chapter openings
- Include the catchphrase "Let's investigate!" in the welcome admonition
- Keep Gregor's dialogue brief: 1–4 sentences maximum
- Use `mascot-thinking` for Big Ideas connections across units
- Use `mascot-warning` for the most common AP exam misconceptions

### Don'ts

- Do **not** use Gregor more than **5–6 times per chapter**
- Do **not** stack Gregor admonitions back-to-back
- Do **not** use Gregor purely decoratively (every appearance must add value)
- Do **not** change Gregor's personality or voice between chapters
- Do **not** use Gregor for routine content that needs no special emphasis

### Admonition Syntax Reference

```markdown
!!! mascot-neutral "A Note from Gregor"
    General notes, sidebars, or any context without a specific tone.

!!! mascot-welcome "Gregor Welcomes You!"
    Welcome text here. Always include "Let's investigate!" in the welcome.

!!! mascot-thinking "Key Insight"
    A critical conceptual connection or big-picture observation.

!!! mascot-tip "Gregor's Tip"
    An AP exam strategy, memory trick, or problem-solving shortcut.

!!! mascot-warning "Common Mistake"
    A frequent misconception or error students make on the AP exam.

!!! mascot-celebration "Excellent Work!"
    Acknowledgment of completing a difficult section or mastering a concept.

!!! mascot-encourage "You've Got This!"
    Encouragement before or during a challenging section.
```

To include Gregor's image inside an admonition body:

```markdown
!!! mascot-welcome "Gregor Welcomes You!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Gregor welcomes you">
    Welcome text here...
```

Image paths are relative to the rendered page depth — use `../../img/mascot/` from pages two levels deep (e.g., `docs/learning-graph/`), or `../img/mascot/` from one level deep.
