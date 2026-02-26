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

### Complex Diagrams and Biological Illustrations

Biology textbooks require many complex illustrations — cell cross-sections, organelle diagrams, molecular pathways, mitosis stages, phylogenetic trees, ecosystem energy flows, and more. These cannot be rendered as simple text or tables.

Whenever a chapter section would benefit from a detailed biological illustration, include a `<details>` block using this pattern:

````markdown
<details>
<summary>Image Description</summary>
**Figure X.X — Animal Cell Cross-Section**

**Subject:** A detailed cross-section of a eukaryotic animal cell.

**Key elements to illustrate:**
- Plasma membrane (phospholipid bilayer) — labeled at the cell boundary
- Nucleus with visible nuclear envelope, nuclear pores, and nucleolus inside
- Rough ER — studded with ribosomes, connected to the nuclear envelope
- Smooth ER — smooth membrane network near the Golgi
- Golgi apparatus — stacked, flattened cisternae with vesicles budding off
- Mitochondria (2–3 shown) — double membrane with visible cristae, labeled matrix
- Lysosomes — small vesicles near Golgi
- Ribosomes — free in cytoplasm and attached to rough ER
- Cytoskeleton — microtubule and microfilament traces through cytoplasm
- Centrioles — near nucleus, shown as paired cylinders

**Callout labels required for each structure listed above.**

**Style:** Biological textbook illustration, clean line art with light color fills,
white background, all labels connected to structures with thin leader lines.
Suitable for AP Biology high school level.
</details>
````

**When to use image descriptions:**

| Content | Use image description? |
|---------|----------------------|
| Cell organelle diagrams | Always |
| Molecular structures (DNA, ATP, proteins) | Always |
| Metabolic pathways (ETC, Calvin cycle, glycolysis) | Always |
| Mitosis / meiosis stage diagrams | Always |
| Signal transduction pathway maps | Always |
| Ecosystem / food web diagrams | Always |
| Phylogenetic trees with labeled clades | Always |
| Simple data tables or text comparisons | No — use markdown table |
| Conceptual relationships expressible as text | No — use prose or bullet list |

**Callout requirements:** Every image description must list each labeled structure explicitly. Do not write "label the main parts" — enumerate every callout by name so the illustrator (human or AI) has unambiguous targets. Include spatial cues where helpful ("located in the upper-left", "shown as a double membrane").

**Caption format:** Use `Figure [unit].[chapter].[number] — Descriptive Title` (e.g., `Figure 3.2.1 — The Electron Transport Chain`).

**Image generation prompts — no captions:** Never include a figure caption instruction inside a text-to-image prompt. Captions are added in the markdown file as text below the `<img>` tag, not embedded in the image itself. Do not write lines like `Figure caption (below illustration...)` or `Caption: Figure X.X — ...` in any image generation prompt.

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
