# Mitosis Stages — Text-to-Image Generation Prompt

Please generate a new diagram that will be used in a high-school biology textbook.

## Design Intent

A single wide-format illustration (landscape orientation, approximately 3:2 aspect ratio,
minimum 2400 × 1600 px) divided into a **3-column × 2-row grid** of six equal panels.
Each panel depicts one stage of mitosis in a generalized animal cell.
Each panel is self-contained with its own stage title banner and callout labels.

---

## Global Style Specifications

- **Background**: clean white (#FFFFFF)
- **Panel borders**: thin light-grey (#CCCCCC) lines separating panels; no heavy dividers
- **Cell outline**: medium dark grey (#333333), smooth oval, consistent size panel to panel
  (~60% of each panel area)
- **Cytoplasm fill**: very pale grey-blue (#EEF2F8)
- **Chromosomes**: deep cobalt blue (#1A3A8F) with mid-blue sister chromatid shading
- **Spindle fibers / microtubules**: warm coral-red (#E05B3A), thin lines (1–2 px)
- **Nuclear envelope**: golden yellow-green (#7DB84A), drawn as a double-line ring
- **Centrosomes**: bright orange (#F5A623) solid circles, ~8 px diameter
- **Aster rays**: same coral-red as spindle fibers, short radiating lines from centrosomes
- **Cleavage furrow**: dark teal (#0A7B6E), pinched indentation at equator
- **Callout leader lines**: thin black (#111111), 1 px, angled at 45° where possible
- **Callout text font**: clean sans-serif (e.g., Helvetica Neue or Inter), 11–12 pt,
  black on white; always rendered on a white pill-shaped background so text never
  overlaps the cell drawing
- **Stage title banners**: full-width colored rectangle at top of each panel, white
  bold text, 14 pt. Banner colors progress through a cool-to-warm palette:
  - Panel 1 (Interphase): slate blue (#4A6FA5)
  - Panel 2 (Prophase): medium purple (#6A4C9C)
  - Panel 3 (Prometaphase): deep rose (#9C3F6A)
  - Panel 4 (Metaphase): burnt orange (#C45C2A)
  - Panel 5 (Anaphase): olive green (#6B8E23)
  - Panel 6 (Telophase & Cytokinesis): teal (#1A7B6B)


---

## Panel-by-Panel Specifications

---

### Panel 1 — Interphase (G2)
*Top-left position in the 3×2 grid*

**What to draw inside the cell:**
- Large intact nucleus centered in the cell; nuclear envelope rendered as a continuous
  double-line ring in golden-yellow
- Interior of nucleus: diffuse, wispy chromatin fill (pale blue stipple pattern — NOT
  condensed chromosomes)
- One prominent nucleolus: small dark-blue filled circle inside nucleus, slightly
  off-center toward upper-right of nucleus
- One pair of centrosomes: two small orange circles side-by-side just outside the
  nucleus, positioned at the upper-left of the nucleus; short aster rays radiating
  outward (this signals G2 — centrosomes already duplicated but not separated)
- No spindle fibers present

**Callout placement strategy:**
Place all six callout labels in the left and bottom margins of this panel, using
leader lines that extend from the cell outward to clear white space. Do NOT let
any label overlap the cell outline or another label.

| # | Label text | Anchor point on drawing |
|---|------------|------------------------|
| 1 | **Nucleus** | Center of nucleus |
| 2 | **Nuclear envelope** | Top edge of the double-line ring |
| 3 | **Nucleolus** | The small dark circle inside nucleus |
| 4 | **Diffuse chromatin** | Stipple region inside nucleus, lower-left quadrant |
| 5 | **Centrosome pair (×2)** | The two orange circles at upper-left of nucleus |
| 6 | **Cytoplasm** | Open area between nucleus and cell membrane, right side |

---

### Panel 2 — Prophase
*Top-center position*

**What to draw inside the cell:**
- Nuclear envelope beginning to fragment: draw it as a broken, dashed ring in
  golden-yellow with several visible gaps; do NOT draw a fully intact ring
- Chromosomes now condensed and visible: draw 4 clearly distinct X-shaped chromosomes
  (each X = two sister chromatids joined at centromere); use deep cobalt blue; arrange
  them in a loose cluster inside where the nucleus was
- Centrosomes have begun migrating to opposite poles: place one orange centrosome dot
  at the upper pole and one at the lower pole of the cell; short aster rays on each
- Short stubby spindle fiber lines extending inward from each centrosome toward the
  chromosome cluster — fibers do not yet attach to chromosomes
- Nucleolus is absent (disappeared); do NOT draw it

**Callout placement strategy:**
Place callouts alternating left and right of the panel so they do not crowd each other.
Left-margin callouts for structures on the left side of the cell; right-margin callouts
for structures on the right.

| # | Label text | Side | Anchor point |
|---|------------|------|--------------|
| 1 | **Condensed chromosomes** | Left | One of the X-shaped chromosomes |
| 2 | **Sister chromatids** | Left | One arm of a chromosome X, with a bracket indicating both arms |
| 3 | **Centromere** | Left | The pinch-point of the X shape |
| 4 | **Fragmenting nuclear envelope** | Right | A gap in the dashed ring |
| 5 | **Centrosome** | Right | The upper orange dot |
| 6 | **Aster microtubules** | Right | Short rays radiating from upper centrosome |
| 7 | **Early spindle fibers** | Bottom | Lines projecting from lower centrosome toward center |

---

### Panel 3 — Prometaphase
*Top-right position*

**What to draw inside the cell:**
- Nuclear envelope completely absent — do NOT draw any ring; the interior is now open
  cytoplasm
- 4 condensed X-shaped chromosomes scattered in the cell interior, not yet aligned —
  they are moving but randomly positioned, some closer to upper pole, some to lower
- Spindle fully extending: long coral-red lines running pole-to-pole through the cell
  (polar microtubules); draw them as parallel lines slightly spread
- Kinetochore microtubules: shorter lines branching from the spindle and attaching to
  each chromosome at its centromere pinch-point; each chromosome should have a visible
  attachment from each side (upper and lower pole) — use a slightly brighter red for
  these attachment fibers to distinguish from polar microtubules
- At the centromere of one prominently-placed chromosome, draw a small light-grey
  rectangular block on each side of the centromere to represent kinetochore proteins
- Centrosomes at upper and lower poles, orange dots with asters

**Callout placement strategy:**
Use right-margin callouts for most labels. This is the most complex panel — leave
generous white space on the right margin. Use angled leader lines that do not cross.

| # | Label text | Side | Anchor point |
|---|------------|------|--------------|
| 1 | **Kinetochore** | Right | The small grey rectangle on the featured chromosome's centromere |
| 2 | **Kinetochore microtubules** | Right | The short attachment line from spindle to chromosome |
| 3 | **Polar microtubules** | Right | The long pole-to-pole lines at the periphery |
| 4 | **Chromosome (unaligned)** | Left | One of the off-center X-shaped chromosomes |
| 5 | **Centrosome** | Left | Upper orange dot |
| 6 | **Aster microtubules** | Left | Rays from upper centrosome |
| 7 | **Absent nuclear envelope** | Top (note in italic) | Arrow pointing to open interior with note: *(envelope gone)* |

---

### Panel 4 — Metaphase
*Bottom-left position*

**What to draw inside the cell:**
- All 4 chromosomes neatly aligned single-file along an imaginary horizontal equatorial
  line across the widest part of the cell — the metaphase plate; chromosomes should be
  evenly spaced and clearly X-shaped
- Draw a dashed horizontal line across the full cell width at the equator to represent
  the metaphase plate (label this line explicitly)
- Full spindle visible: long coral-red polar microtubules running from upper centrosome
  to lower centrosome, converging at the chromosomes
- Kinetochore microtubules visible on both faces of each chromosome's centromere,
  pulling from opposite poles
- Centrosomes at upper and lower poles, orange with asters
- No nuclear envelope

**Callout placement strategy:**
This is the most symmetrical panel. Place callouts in the left margin, with leader
lines pointing to the left half of the cell. Keep them evenly vertically spaced.

| # | Label text | Side | Anchor point |
|---|------------|------|--------------|
| 1 | **Metaphase plate** | Left | The dashed horizontal equatorial line |
| 2 | **Chromosome (aligned)** | Left | Leftmost chromosome on the plate |
| 3 | **Centromere** | Left | Pinch-point of the leftmost chromosome |
| 4 | **Kinetochore microtubules** | Left | Attachment fiber from upper spindle to chromosome |
| 5 | **Polar microtubules** | Right | Long spindle fiber at the cell periphery |
| 6 | **Centrosome** | Right | Upper orange dot |
| 7 | **Spindle apparatus** | Right | Bracket or arrow spanning full spindle width |

---

### Panel 5 — Anaphase
*Bottom-center position*

**What to draw inside the cell:**
- Sister chromatids have separated at the centromere: draw 8 individual chromatids (not
  X-shapes anymore — each is now a V-shape or J-shape with arms trailing behind as they
  move toward the poles)
- 4 chromatids moving toward upper pole, 4 toward lower pole; each group forms a loose
  cluster near its respective pole
- The cell itself is noticeably elongated vertically compared to all other panels to
  reflect cell stretching during anaphase — make the cell oval taller and narrower
- Kinetochore microtubules are shorter/contracting (draw them as shorter stubs connecting
  chromatids to centrosomes)
- Polar microtubules are longer/overlapping at the middle of the elongated cell (draw them
  as longer overlapping lines meeting at center)
- Centrosomes at far upper and far lower poles, pushed to the very edges of the elongated cell

**Callout placement strategy:**
Use both left and right margins. Keep labels near the vertical midpoint or poles, not
crowded at the equator.

| # | Label text | Side | Anchor point |
|---|------------|------|--------------|
| 1 | **Separating chromatids** | Left | One of the V-shaped chromatids moving upward |
| 2 | **Centromere (split)** | Left | The top of the V where arms meet — note it is now open |
| 3 | **Shortening kinetochore microtubules** | Left | Short stub between chromatid and upper centrosome |
| 4 | **Elongating polar microtubules** | Right | Long overlapping fibers at the cell's equatorial midzone |
| 5 | **Centrosome (at pole)** | Right | Lower orange dot at far bottom of elongated cell |
| 6 | **Cell elongation** | Bottom | Double-headed arrow outside the cell pointing to the taller oval shape |

---

### Panel 6 — Telophase & Cytokinesis
*Bottom-right position*

**What to draw inside the cell:**
- The cell is clearly pinching into two at the equator: draw a pronounced inward
  indentation (cleavage furrow) as a teal-colored constriction at the cell's midline,
  squeezing the cell into a figure-8 shape
- Two distinct chromosome masses: one cluster at upper pole, one at lower pole; each
  cluster should appear less sharply defined than in earlier panels (chromosomes
  decondensing — draw them as blurry, less crisp X-shapes fading into diffuse stipple)
- New nuclear envelopes re-forming around each chromosome cluster: draw a thin
  golden-yellow ring beginning to enclose each cluster; the ring should appear slightly
  incomplete (dashed in 1–2 places) to show it is still forming
- Small dark blue dot (nucleolus) reappearing inside each forming nucleus
- Spindle fibers largely gone; only a few remnant polar microtubule lines remain at the
  midzone between the two forming cells
- Centrosomes: one orange dot visible near each forming nucleus
- Draw a thin bracket or arrow on the outside of the cell pointing to the constriction
  to anchor the cleavage furrow callout

**Callout placement strategy:**
Use right-margin callouts. Vertical spacing is critical here — the panel has two half-
cells stacked, so alternate labels for upper cell and lower cell.

| # | Label text | Side | Anchor point |
|---|------------|------|--------------|
| 1 | **Cleavage furrow** | Right | The teal pinch at the equator |
| 2 | **Contractile ring (actin/myosin)** | Right | Just inside the cleavage furrow indentation |
| 3 | **Re-forming nuclear envelope** | Right | The dashed yellow-green ring around upper chromosome mass |
| 4 | **Decondensing chromosomes** | Left | The blurry, fading chromosome cluster in upper half |
| 5 | **Nucleolus (reappearing)** | Left | The small dark dot inside the upper forming nucleus |
| 6 | **Two daughter cells (forming)** | Bottom | Label outside cell below the figure-8 shape |

---

## Overall Composition Hints

1. **Consistent cell size**: All six cell ovals should be the same width and height
   except Panel 5 (Anaphase), which is taller and narrower to show cell elongation.

2. **Chromosome count consistency**: Use exactly **4 chromosomes** (2 homologous pairs,
   shown as 2 large + 2 small X-shapes in panels 2–4; 8 V-shapes in panel 5;
   2 × 4 fading clusters in panel 6). Keeping the number small and consistent
   helps students track each chromosome across panels.

3. **Callout text must not overlap the cell boundary**: All label text boxes should
   sit fully outside the cell oval, connected by a straight or single-bend leader line.
   Minimum clearance of 10 px between cell edge and the nearest text box edge.

4. **No callout lines should cross each other**: Arrange labels around the cell in
   clockwise or counterclockwise order matching their anchor position on the cell.

5. **Stage title banner height**: Exactly 28 px; no taller, to preserve drawing area.

6. **Color use rule**: Use color consistently across all 6 panels — chromosomes are
   always cobalt blue, spindle fibers always coral-red, centrosomes always orange,
   nuclear envelope always golden-yellow, cleavage furrow always teal.
   This consistency is pedagogically essential so students can track structures across stages.

7. **Arrow showing cell cycle progression**: In the first five panels, draw a small curved arrow ( → ) in the
   lower-right corner of each panel pointing toward the next panel in sequence.

   Panel 6 has the label "2 daughter cells".
