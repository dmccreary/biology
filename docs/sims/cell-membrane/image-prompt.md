# Image Generation Prompt — Cell Membrane (Fluid Mosaic Model)

## Target

**File:** `cell-membrane.png`
**Size:** 1200 × 900 px, landscape orientation
**Style:** Scientific textbook illustration, clean line art with rich flat color fills,
white background, no gradients or drop shadows except subtle ones on proteins.

---

## Critical constraint

**Absolutely no text, labels, arrows, leader lines, callout numbers, annotation marks,
or any typography anywhere in the image.** All labeling is handled externally.

---

## Subject

A cross-section of a eukaryotic plasma membrane in the **Fluid Mosaic Model** style.
The membrane runs horizontally across the image, roughly centered vertically, with the
extracellular space (outside the cell) occupying the top 30% and the intracellular
space (cytoplasm side) occupying the bottom 30%.

---

## Phospholipid bilayer

Draw the two leaflets of the phospholipid bilayer explicitly:

- **Outer leaflet (top row):** Circular hydrophilic heads — bright warm orange
  (`#F5A623`) — face upward toward the extracellular space. Fatty-acid tails —
  pale warm gray (`#D8C8A8`) — extend downward, interdigitating loosely with
  the inner leaflet tails.
- **Inner leaflet (bottom row):** Same head color and tail color, mirrored.
  Heads face downward toward the intracellular space; tails extend upward.
- The two layers of tails meet in the center of the bilayer, forming a
  hydrophobic core with no gap between them.
- Show approximately 22–26 phospholipid molecules per leaflet across the image
  width so individual molecules are clearly distinguishable.

---

## Cholesterol

Embed 4–5 cholesterol molecules between phospholipids in each leaflet.
Draw them as rigid flat ring structures (four fused hexagonal/pentagonal rings)
in muted gold (`#C8A84B`), wedged vertically between neighboring tail pairs.
Cholesterol should be visibly shorter than the full tail length — it sits in
the mid-region of each leaflet without crossing the bilayer center.

---

## Integral (transmembrane) protein

Show two large integral proteins that fully span both leaflets.
Color: deep teal-blue (`#2D7D9A`), with a slightly irregular kidney or barrel
shape. One should be an obvious **channel protein** — show a visible aqueous
pore running through its center as a narrow white or pale-blue channel.
The other should be a **carrier protein** — same deep teal-blue, no visible
pore, slightly asymmetric/kinked shape suggesting it changes conformation.

---

## Receptor protein

Show one receptor protein that spans the bilayer but has a large extracellular
domain extending prominently into the extracellular space.
Color the transmembrane portion dusty rose (`#C47A7A`); the extracellular domain
should be slightly lighter rose with a branching or lobed shape, distinct from
glycoprotein sugar chains.

---

## Peripheral protein

Show two peripheral proteins — one on the extracellular surface, one on the
intracellular surface.
Color: soft lavender (`#9B8EC4`), slightly flattened oval or crescent shape,
resting against (not embedded in) the surface of the bilayer.

---

## Glycoprotein

Show two glycoproteins on the extracellular face: these are integral proteins
(deep teal-blue) with branching oligosaccharide chains attached at the top
(extracellular end). Draw the sugar chains as short, branching strings of
small circles in lime green (`#7DB84A`). The chains should extend clearly
into the extracellular space, slightly above the hydrophilic heads.

---

## Glycolipid

Show one glycolipid: a phospholipid in the outer leaflet (same head/tail colors)
with a short sugar chain (matching lime green `#7DB84A`) attached to its head,
extending slightly upward. The chain should be visually shorter and less branched
than the glycoprotein chains.

---

## Extracellular and intracellular spaces

- **Extracellular space (top):** Light sky-blue wash (`#E8F4FC`), very pale.
  Leave generous room (~25% of image height) above the membrane.
- **Intracellular space (bottom):** Very pale warm beige (`#F5F0E8`), slightly
  warmer than the extracellular tone. Leave generous room (~25% of image height)
  below the membrane.

---

## Spatial layout and landing zones

Distribute the proteins across the full width of the image so no two proteins
overlap, leaving clear gaps of phospholipid bilayer between each one.
Recommended left-to-right order: peripheral protein (extracellular) → glycolipid
→ channel protein → glycoprotein → carrier protein → receptor protein →
cholesterol cluster → peripheral protein (intracellular).

Each structure should have ~20–40 px of clear bilayer to either side so that
callout markers can be placed without touching neighboring structures.

---

## Do NOT include

- Any text, numbers, Greek letters, or symbols
- Figure captions or titles
- Arrows or leader lines of any kind
- Extracellular matrix components (collagen, fibronectin)
- Cytoskeleton elements below the membrane
- Vesicles or endocytosis events
