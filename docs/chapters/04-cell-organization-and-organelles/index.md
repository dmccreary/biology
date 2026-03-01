---
title: Cell Organization and Organelles
description: Surveys the fundamental unit of life — the cell — comparing prokaryotic and eukaryotic architecture and examining every major organelle, the cytoskeleton, and the endomembrane system.
generated_by: claude skill chapter-content-generator
date: 2026-02-26 18:10:21
version: 0.05
---

# Cell Organization and Organelles

## Summary

This chapter establishes the fundamental unit of life — the cell — and surveys the
extraordinary internal organization of eukaryotic cells. After comparing prokaryotic
and eukaryotic cell architecture and exploring why cell size is limited by the
surface-area-to-volume ratio, the chapter tours each major organelle: the nucleus
(information storage), the endomembrane system (protein processing and trafficking),
mitochondria and chloroplasts (energy conversion), and the cytoskeleton (structural
support and movement). This structural foundation is prerequisite for understanding
membrane transport, cellular energetics, and cell division.

## Concepts Covered

This chapter covers the following 22 concepts from the learning graph:

1. Cell Theory
2. Prokaryotic Cells
3. Eukaryotic Cells
4. Cell Size and Surface Area Ratio
5. Nucleus
6. Nuclear Envelope
7. Nucleolus
8. Endoplasmic Reticulum
9. Rough ER
10. Smooth ER
11. Golgi Apparatus
12. Lysosomes
13. Vacuoles
14. Mitochondria
15. Chloroplasts
16. Peroxisomes
17. Cytoskeleton
18. Microfilaments
19. Microtubules
20. Intermediate Filaments
21. Cilia and Flagella
22. Cell Wall

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: Scientific Foundations and Atomic Chemistry](../01-scientific-foundations-and-chemistry/index.md)
- [Chapter 2: Water, pH, and Organic Chemistry](../02-water-ph-and-organic-chemistry/index.md)
- [Chapter 3: Biological Macromolecules](../03-biological-macromolecules/index.md)

---

!!! mascot-welcome "Gregor Welcomes You!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Gregor welcomes you"/>
    Welcome to Chapter 4, investigators! We have spent three chapters building the chemical vocabulary of life. Now we step up to the next level of organization — the cell. You are about to tour the most complex machine in the known universe: a living eukaryotic cell, packed with specialized compartments, molecular highways, and energy-converting factories, all operating simultaneously in a space smaller than a grain of sand. Let's investigate!

## Introduction

The **cell** is the fundamental structural and functional unit of all living organisms. This principle, formalized as **Cell Theory** in the 19th century, is one of biology's core unifying ideas. Every living organism is composed of one or more cells; all cells arise from pre-existing cells by cell division; and the cell is the smallest unit capable of carrying out all the processes we associate with life — metabolism, growth, reproduction, and response to stimuli.

Cells come in two fundamentally different architectural plans: the simpler **prokaryotic** design, found in bacteria and archaea, and the far more complex **eukaryotic** design, found in protists, fungi, plants, and animals (including you). Understanding the differences between these two designs, the physical constraints that limit cell size, and the specialized functions of each eukaryotic organelle provides the structural framework that all subsequent chapters depend on.

---

## Part 1: Cell Architecture and Size

### Cell Theory

**Cell Theory** rests on three core principles established through the work of Matthias Schleiden (1838, plants), Theodor Schwann (1839, animals), and Rudolf Virchow (1855, cell division):

- All living things are composed of one or more cells
- The cell is the basic structural and functional unit of life
- All cells come from pre-existing cells (*omnis cellula e cellula*)

A fourth principle, added by later discoveries, underlies modern molecular biology: all cells share a common set of biochemical processes, using the same genetic code, the same ATP energy currency, and the same basic membrane structure — evidence that all life shares a common ancestor.

### Prokaryotic vs. Eukaryotic Cells

The most fundamental division in cell biology separates **prokaryotic** cells from **eukaryotic** cells. The key distinction is the presence or absence of a **nucleus** — a membrane-enclosed compartment housing the cell's DNA. *Pro-* means "before" and *karyon* means "nucleus" in Greek; *eu-* means "true."

| Feature | Prokaryotic | Eukaryotic |
|---|---|---|
| Nucleus | Absent (DNA in nucleoid region) | Present (membrane-enclosed) |
| DNA organization | Circular chromosome; no histones (bacteria) or modified histones (archaea) | Linear chromosomes; associated with histone proteins |
| Membrane-bound organelles | Absent | Present (ER, Golgi, mitochondria, etc.) |
| Ribosomes | 70S (smaller) | 80S (larger); 70S in mitochondria and chloroplasts |
| Cell size | 0.1 – 10 µm (typically 1–5 µm) | 10 – 100 µm |
| Cell wall | Usually present (peptidoglycan in bacteria) | Present in plants (cellulose), fungi (chitin); absent in animals |
| Domain | Bacteria, Archaea | Eukarya |
| Reproduction | Binary fission | Mitosis (somatic); meiosis (reproductive) |

Despite their simplicity, prokaryotes are enormously successful: bacteria and archaea inhabit every environment on Earth, from deep-sea hydrothermal vents to the human gut, and they perform many of the biogeochemical cycles (nitrogen fixation, methanogenesis) that sustain eukaryotic life.

#### Diagram: Prokaryote vs. Eukaryote Cell Comparison

<iframe src="../../sims/prokaryote-eukaryote-comparison/main.html" width="100%" height="520" scrolling="no"></iframe>

[View Fullscreen](../../sims/prokaryote-eukaryote-comparison/main.html)

<details markdown="1">
<summary>Prokaryote vs. Eukaryote Comparison MicroSim</summary>
Type: infographic
**sim-id:** prokaryote-eukaryote-comparison<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Level: Analyze (L4)
Bloom Verb: compare
Learning Objective: Students will compare and contrast the structural features of prokaryotic and eukaryotic cells, distinguishing which features are unique to each domain and which are shared.

Canvas layout:
- Left half: schematic cross-section of a generic prokaryotic bacterial cell
- Right half: schematic cross-section of a generic eukaryotic animal cell
- Center dividing line with label "Prokaryote | Eukaryote"
- Below both cells: shared feature strip labeled "Present in both"

Visual elements — Prokaryote cell (left):
- Oval cell shape, ~30% of canvas width
- Cell wall (thick outer ring, tan/brown)
- Plasma membrane (thin inner ring, blue)
- Nucleoid region (lighter blue irregular zone) with circular DNA loops
- Ribosomes (tiny dots, dark gray, scattered throughout cytoplasm)
- Flagellum (wavy line extending from one end)
- Pili (short stubby projections on outer surface)
- Label: "No membrane-bound organelles"

Visual elements — Eukaryote cell (right):
- Irregular rounded cell shape, ~40% of canvas width
- Plasma membrane (thin outer ring, blue)
- Nucleus (large oval with double membrane, dark blue)
- Nucleolus (small dense circle inside nucleus)
- Rough ER (wavy membrane network near nucleus with dots for ribosomes)
- Golgi apparatus (stacked cisternae, ribbon shape)
- Mitochondrion (oval with folded inner membrane)
- Cytosol with ribosomes (80S, slightly larger dots than prokaryote ribosomes)
- Vacuole (large clear circle)

Shared features strip (below both):
- Plasma membrane, ribosomes (different sizes), cytoplasm, DNA — all labeled as shared

Interactive controls:
- Clicking any labeled structure reveals a tooltip panel at the bottom of the canvas with: structure name, prokaryote/eukaryote/both indicator, one-sentence function description
- Toggle button "Highlight differences" — highlights in orange all features unique to prokaryotes; highlights in green all features unique to eukaryotes; shared features remain gray

Default state: both cells visible, no highlights

Instructional Rationale: Side-by-side visual comparison with click-to-reveal details supports Analyze-level work by requiring students to attribute observed structural differences to specific functional consequences, rather than passively receiving a labeled diagram.

Canvas size: 700 × 460 px
Responsive: Must respond to window resize events
</details>

### Cell Size and the Surface-Area-to-Volume Ratio

Why are cells so small? The answer lies in the relationship between a cell's surface area (the plasma membrane through which all substances enter and exit) and its volume (the cytoplasm that must be supplied). As a cell increases in size, volume grows as the cube of the radius ($V = \frac{4}{3}\pi r^3$), while surface area grows only as the square ($SA = 4\pi r^2$). The **surface-area-to-volume ratio** (SA:V) therefore decreases as cell size increases:

$$\frac{SA}{V} = \frac{4\pi r^2}{\frac{4}{3}\pi r^3} = \frac{3}{r}$$

For a spherical cell, SA:V = 3/r — so doubling the radius halves the SA:V ratio. A cell with a low SA:V cannot supply its interior rapidly enough: nutrients diffuse in too slowly, and metabolic waste products accumulate faster than they can be removed. The result is that most cells remain small (1–100 µm), and very large cells (like neurons and egg cells) have specialized shapes (extremely elongated, or filled with inert yolk) that maintain an adequate functional surface area.

#### Diagram: Surface Area to Volume Ratio Explorer

<iframe src="../../sims/surface-area-volume-ratio/main.html" width="100%" height="480" scrolling="no"></iframe>

[View Fullscreen](../../sims/surface-area-volume-ratio/main.html)

<details markdown="1">
<summary>Surface Area to Volume Ratio MicroSim</summary>
Type: microsim
**sim-id:** surface-area-volume-ratio<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Level: Apply (L3)
Bloom Verb: calculate
Learning Objective: Students will calculate surface area, volume, and SA:V ratio for cuboidal cells of different sizes, and explain why a high SA:V ratio is essential for efficient cellular exchange.

Canvas layout:
- Left panel (50%): 3D wireframe cube drawn in perspective, scaling dynamically as the slider changes cell size
- Right panel (50%): Numerical display showing calculated SA, V, SA:V ratio, and a bar chart comparing SA (blue bar) and V (red bar) as the cube grows

Visual elements:
- Wireframe cube with perspective lines, side length labeled with slider value (1–10 µm)
- Six faces of cube shaded lightly in blue (representing membrane surface area)
- Interior shaded red (representing volume that must be supplied)
- Bar chart below: two bars updating in real time — "Surface Area (µm²)" and "Volume (µm³)"
- SA:V ratio displayed in large bold text; color-coded green (≥ 2.0 = good), yellow (1.0–2.0 = marginal), red (< 1.0 = too large)
- Optional second cube shown at fixed size (e.g., 1 µm) for comparison

Interactive controls:
- Slider: Cell side length from 1 µm to 10 µm (step 0.5 µm)
- Toggle button: "Show comparison cell" — adds a fixed 1 µm reference cube to the left panel
- Checkbox: "Show calculation formulas" — reveals the formulas SA = 6s², V = s³, SA:V = 6/s below the numerical display

Default parameters:
- Side length: 1 µm
- Comparison cell: hidden

Behavior:
- As slider increases, cube scales up, bar chart updates, SA:V ratio display updates with color change
- When side length > 5 µm, red warning text appears: "Diffusion too slow — cell would need to compartmentalize or remain small"

Data Visibility Requirements:
Stage 1: Show cube at current size with side length label
Stage 2: Show calculated SA and V values
Stage 3: Show SA:V ratio with color-coded assessment
Stage 4: Show bar chart comparison at multiple sizes if "comparison cell" is toggled on

Instructional Rationale: Moving a slider and watching SA:V collapse in real time directly demonstrates the mathematical relationship described in the text, converting an abstract ratio into a visceral observation. This Apply-level design requires students to operate the formula, not just read it.

Canvas size: 660 × 420 px
Responsive: Must respond to window resize events
</details>

---

## Part 2: The Nucleus and Endomembrane System

### The Nucleus

The **nucleus** is the defining organelle of eukaryotic cells — the compartment that houses the cell's genetic information and is the site of DNA replication and RNA synthesis (transcription). In a typical animal cell, the nucleus is the largest organelle, roughly 5–10 µm in diameter.

The nucleus is bounded by the **nuclear envelope** — a double membrane (inner and outer membranes) that is continuous with the rough endoplasmic reticulum. The two membranes are perforated by **nuclear pore complexes**, large protein channels (~120 nm diameter) that selectively regulate the passage of molecules between the nucleus and cytoplasm. mRNA molecules exit through nuclear pores after transcription; ribosomal proteins and transcription factors enter through nuclear pores. The **nuclear lamina** — a meshwork of intermediate filament proteins (lamins) — lines the inner nuclear membrane, providing structural support and anchoring chromatin.

Within the nucleus, the DNA is organized into **chromatin** — a complex of DNA wound around histone protein spools called **nucleosomes**. During interphase (non-dividing state), chromatin exists in two forms: **euchromatin** (loosely packed, transcriptionally active) and **heterochromatin** (tightly condensed, transcriptionally silent). During cell division, chromatin condenses further into the discrete **chromosomes** visible under a light microscope.

The **nucleolus** is a dense, non-membrane-bounded sub-compartment within the nucleus where ribosomal RNA (rRNA) genes are actively transcribed and where ribosome subunits are assembled. Cells with high rates of protein synthesis (liver cells, secretory cells) tend to have large, prominent nucleoli; transcriptionally inactive cells (e.g., mature red blood cells, which have lost their nucleus entirely) have no nucleolus.

### The Endomembrane System

The **endomembrane system** is a network of interconnected, membrane-bounded compartments that collectively carry out the synthesis, modification, packaging, and delivery of proteins and lipids. It includes the endoplasmic reticulum, Golgi apparatus, lysosomes, and vacuoles. All membranes in this system are continuous with or derived from each other via vesicle budding and fusion, and all are topologically equivalent to the outer surface of the cell.

**Rough Endoplasmic Reticulum (Rough ER)** is studded with ribosomes on its cytoplasmic face, giving it a rough appearance in electron micrographs. Secretory proteins, membrane proteins, and proteins destined for organelles are synthesized by ribosomes attached to the rough ER; as these proteins are synthesized, they are threaded co-translationally into the ER lumen, where they undergo initial folding and the addition of carbohydrate chains (**N-linked glycosylation**). The rough ER is also the site of **quality control**: misfolded proteins are detected and targeted for degradation.

**Smooth Endoplasmic Reticulum (Smooth ER)** lacks ribosomes and specializes in lipid synthesis, steroid hormone synthesis, and drug detoxification. In liver cells, the smooth ER contains cytochrome P450 enzymes that detoxify many drugs, alcohol, and environmental toxins by oxidizing them into more water-soluble forms for urinary excretion. In muscle cells, a specialized form of smooth ER called the **sarcoplasmic reticulum** stores calcium ions that trigger muscle contraction when released.

**The Golgi Apparatus** receives vesicles from the ER at its **cis face** (receiving face, nearest the ER) and processes their cargo through a stack of flattened membrane-enclosed cisternae. As proteins move through the Golgi stack from cis to trans, they are further modified: carbohydrate chains are trimmed and rebuilt (**Golgi glycosylation**), lipids are modified, and proteins are sorted into different vesicle populations destined for different cellular locations. Vesicles budding from the **trans face** deliver their cargo to the plasma membrane (secretion), to lysosomes, or to other cellular addresses.

**Lysosomes** are membrane-bounded vesicles containing approximately 50 different acid hydrolase enzymes (proteases, lipases, nucleases, glycosidases) that function optimally at pH ~4.8 — well below the cytoplasmic pH of ~7.2. The lysosomal membrane actively pumps protons in using a V-type H⁺-ATPase, maintaining the acidic interior. Lysosomes digest:

- Macromolecules delivered by **endocytosis** (phagocytosis of bacteria, receptor-mediated endocytosis)
- Worn-out organelles via **autophagy** (self-eating) — damaged mitochondria and other organelles are engulfed in a double-membrane autophagosome that fuses with a lysosome
- Glycogen, lipids, and other molecules in storage diseases (lysosomal storage diseases result from missing hydrolase enzymes)

**Vacuoles** are large, membrane-bounded storage compartments. In plant cells, a single **central vacuole** can occupy up to 90% of cell volume, storing water, ions, pigments, and toxic metabolites, while its turgor pressure (pushing outward against the cell wall) provides structural rigidity. In animal cells, smaller vacuoles store water or serve as temporary containers during endocytosis.

**Peroxisomes** are small organelles (0.1–1.0 µm) bounded by a single membrane that carry out oxidative reactions using molecular oxygen. They are named for their production of hydrogen peroxide ($\ce{H2O2}$) as a byproduct:

$$\ce{RH2 + O2 -> R + H2O2}$$

The peroxisome immediately destroys the toxic $\ce{H2O2}$ it produces using the enzyme catalase:

$$\ce{2H2O2 -> 2H2O + O2}$$

Peroxisomes in liver and kidney cells detoxify alcohol and other harmful compounds. In plant seeds and germinating seedlings, peroxisomes called **glyoxysomes** contain the enzymes for the glyoxylate cycle, converting stored fats into sugars for early seedling growth.

#### Diagram: Endomembrane System — Protein Secretion Pathway

<iframe src="../../sims/endomembrane-system/main.html" width="100%" height="540" scrolling="no"></iframe>

[View Fullscreen](../../sims/endomembrane-system/main.html)

<details markdown="1">
<summary>Endomembrane System Protein Secretion Pathway MicroSim</summary>
Type: microsim
**sim-id:** endomembrane-system<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Level: Understand (L2)
Bloom Verb: explain
Learning Objective: Students will explain the sequence of compartments a secretory protein passes through from ribosome to extracellular space, naming each processing step that occurs at each compartment.

Canvas layout:
- Main drawing area (70%): schematic cell cross-section showing the endomembrane compartments in spatial relationship
- Right info panel (30%): step-by-step description of the processing event at each stage; updates as animation advances

Visual elements:
- Nucleus (large blue oval, upper left)
- Rough ER (wavy membrane connected to nuclear envelope, with ribosome dots)
- Smooth ER (connected to rough ER, no ribosomes)
- Golgi apparatus (stack of 4 cisternae, cis face labeled left, trans face labeled right)
- Transport vesicles shown as small circles with arrows indicating direction of travel
- Plasma membrane (bottom edge of cell)
- Extracellular space (below plasma membrane, labeled)
- Lysosomes shown as small purple circles budding from the trans Golgi

Animated protein journey (step-through):
- Step 1: Ribosome on rough ER synthesizes polypeptide into ER lumen; label "Co-translational translocation; N-linked glycosylation begins"
- Step 2: Transport vesicle buds from ER (COPII vesicle); label "Vesicle budding from ER → cis Golgi"
- Step 3: Protein arrives at cis Golgi; label "Golgi: further glycosylation; sorting signals added"
- Step 4: Protein moves through Golgi cisternae (cis → medial → trans); label "Modification and sorting"
- Step 5a: Secretory vesicle buds from trans Golgi; label "Exocytosis → extracellular secretion"
- Step 5b: Alternative: lysosomal vesicle buds from trans Golgi; label "Targeting to lysosome"
- Step 6: Secretory vesicle fuses with plasma membrane; protein released extracellularly

Interactive controls:
- Button "Next Step": advances animation one step at a time
- Button "Previous Step": goes back one step
- Button "Reset": returns to start
- Button "Play All": runs all steps automatically at 1.5 second intervals
- Clicking any organelle outside the animation sequence shows a tooltip with its name and primary function

Default state: Step 1 shown (ribosome on rough ER), info panel shows step 1 description

Behavior:
- Each step highlights the active compartment and draws the vesicle movement with an animated arrow
- Previously visited compartments remain visible but grayed; current compartment is bright
- The info panel updates with the specific processing event (enzyme name, chemical modification) at each step

Data Visibility Requirements:
Stage 1: Show ribosome → ER lumen transition with protein chain entering
Stage 2: Show vesicle formation (COPII coat) and travel from ER to cis Golgi
Stage 3–4: Show protein moving through Golgi stack with modification labels at each cisterna
Stage 5: Show bifurcation: secretory vesicle vs. lysosomal vesicle paths
Stage 6: Show exocytosis — vesicle fusion with plasma membrane

Instructional Rationale: Step-through animation with explicit labeling of each processing event supports the Understand/explain objective by requiring students to trace a protein's journey and identify what happens at each compartment. Continuous animation would obscure the discrete events; the step-through design allows prediction before each reveal.

Canvas size: 700 × 480 px
Responsive: Must respond to window resize events
</details>

---

## Part 3: Energy-Converting Organelles

### Mitochondria

**Mitochondria** are the primary sites of ATP production in eukaryotic cells, earning the familiar (if imprecise) label "powerhouse of the cell." Most eukaryotic cells contain hundreds to thousands of mitochondria; cells with high energy demands (cardiac muscle, neurons, liver cells) have the most.

The mitochondrion has a distinctive double-membrane architecture:

- **Outer mitochondrial membrane** — smooth, contains **porins** (channel proteins) that make it permeable to small molecules (ions, ATP, ADP, pyruvate) up to ~5 kDa
- **Intermembrane space** — the region between the two membranes; its composition resembles the cytoplasm because of the porins; this is where cytochrome c resides and where the proton gradient is established during the electron transport chain
- **Inner mitochondrial membrane** — highly impermeable (even to $\ce{H+}$, which can only cross through ATP synthase); extensively folded into shelf-like projections called **cristae** that dramatically increase surface area; contains the electron transport chain complexes and ATP synthase
- **Matrix** — the innermost compartment; contains mitochondrial DNA (circular, like a bacterial chromosome), mitochondrial ribosomes (70S), and all the enzymes of the citric acid cycle

The mitochondrion's bacterial-like features — including its own circular DNA, 70S ribosomes, double membrane derived from a phagocytic event, and binary fission replication — are the evidence for the **endosymbiotic theory**: mitochondria evolved from aerobic proteobacteria engulfed by an ancient anaerobic host cell approximately 1.5–2 billion years ago.

#### Diagram: Mitochondria Structure

<iframe src="../../sims/mitochondria/main.html" width="100%" height="730" scrolling="no"></iframe>

[View Fullscreen](../../sims/mitochondria/main.html)

<details markdown="1">
<summary>Mitochondria Structure (existing sim)</summary>
Type: diagram
**sim-id:** mitochondria<br/>
**Library:** p5.js<br/>
**Status:** Complete

This interactive diagram labels 15 structures of the mitochondrion, including the outer and inner membranes, cristae, matrix, intermembrane space, ATP synthase, and the five electron transport chain complexes (I–V). Use Explore mode to read about each structure and its AP Biology significance; use Quiz mode to test identification.
</details>

### Chloroplasts

**Chloroplasts** are the photosynthetic organelles of plant cells and algae, converting light energy into the chemical energy of glucose. Like mitochondria, they are large (~3–10 µm), have a double outer membrane, contain their own circular DNA and 70S ribosomes, and are thought to have evolved by endosymbiosis — from cyanobacteria engulfed approximately 1.5 billion years ago.

The chloroplast's internal architecture is more elaborate than the mitochondrion's:

- **Outer and inner chloroplast membranes** — the double-membrane boundary (the inner is more selective than the outer)
- **Stroma** — the fluid-filled interior, analogous to the mitochondrial matrix; contains the enzymes of the Calvin cycle, chloroplast DNA, and ribosomes
- **Thylakoids** — a third, inner membrane system forming flattened, interconnected sacs suspended within the stroma; thylakoids are where the light-dependent reactions occur
- **Grana** (singular: granum) — stacks of thylakoid discs; the stacking maximizes the density of photosynthetic pigments (chlorophylls, carotenoids) and their associated reaction centers

The division of photosynthesis between the thylakoid membranes (light reactions: capture light energy, produce ATP and NADPH, split water) and the stroma (Calvin cycle: use ATP and NADPH to fix $\ce{CO2}$ into glucose) parallels the division of cellular respiration between the inner mitochondrial membrane (ETC and ATP synthesis) and the matrix (citric acid cycle).

#### Diagram: Chloroplast Structure

<iframe src="../../sims/chloroplast/main.html" width="100%" height="730" scrolling="no"></iframe>

[View Fullscreen](../../sims/chloroplast/main.html)

<details markdown="1">
<summary>Chloroplast Structure (existing sim)</summary>
Type: diagram
**sim-id:** chloroplast<br/>
**Library:** p5.js<br/>
**Status:** Complete

This interactive diagram labels 12 chloroplast structures including the outer and inner envelope membranes, thylakoid membranes, grana, stroma lamellae, stroma, and key photosynthetic components. Explore mode provides AP-level descriptions of each structure's role in the light-dependent and light-independent reactions.
</details>

!!! mascot-thinking "Key Insight: The Endosymbiotic Theory"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Gregor thinking"/>
    Both mitochondria and chloroplasts have their own circular DNA, their own 70S ribosomes (like bacteria, not like the 80S ribosomes of the eukaryotic cytoplasm), divide by binary fission, and are bounded by double membranes consistent with an engulfment event. This convergence of evidence from genetics, biochemistry, and cell biology makes the endosymbiotic theory one of the most thoroughly supported ideas in modern biology — and a common topic on AP free-response questions.

---

## Part 4: The Cytoskeleton and Cell Exterior

### The Cytoskeleton

The **cytoskeleton** is a dynamic network of protein filaments that fills the eukaryotic cell's cytoplasm, providing structural support, enabling cell movement, and organizing intracellular transport. It is *not* a rigid scaffold; cytoskeletal filaments are continuously assembled and disassembled in response to cellular signals, allowing the cell to change shape, divide, and move. The cytoskeleton consists of three distinct filament types, each composed of different proteins and serving different functions.

### Microfilaments (Actin Filaments)

**Microfilaments** are the thinnest cytoskeletal elements (~7 nm diameter), composed of two intertwined strands of polymerized **G-actin** (globular actin) monomers forming a helical **F-actin** (filamentous actin) polymer. Microfilaments are polar structures: actin monomers add preferentially to the "plus end" (barbed end) and dissociate from the "minus end" (pointed end), a property that drives **treadmilling** — net movement of the filament through the cell.

Microfilaments provide the force for:

- **Muscle contraction** — myosin motor proteins walk along actin filaments, generating force for sarcomere shortening (Chapter 8)
- **Cell motility** — actin polymerization at the leading edge of migrating cells pushes the plasma membrane forward in lamellipodia and filopodia
- **Cytokinesis** — a contractile ring of actin and myosin pinches the dividing cell in two (animal cells)
- **Maintenance of cell shape** — a cortical network of actin filaments just beneath the plasma membrane determines cell shape and resists deformation

### Microtubules

**Microtubules** are hollow cylinders (~25 nm outer diameter) composed of α-tubulin and β-tubulin heterodimers arranged in 13 protofilaments around a hollow lumen. Like microfilaments, microtubules are polar: the "plus end" (β-tubulin exposed) is the fast-growing end; the "minus end" is anchored at the **microtubule-organizing center (MTOC)**, which in animal cells is the **centrosome** (containing a pair of centrioles).

Microtubules serve as:

- **Intracellular highways** — motor proteins **kinesin** (moves cargo toward the plus/peripheral end) and **dynein** (moves cargo toward the minus/centrosomal end) walk along microtubules carrying organelles, vesicles, and mRNA
- **Mitotic spindle** — during cell division, microtubules form the spindle apparatus that separates chromosomes to opposite poles (Chapter 10)
- **Core of cilia and flagella** — the **axoneme** of cilia and flagella is a bundle of microtubules in a 9+2 arrangement (9 outer doublets + 2 central microtubules)
- **Maintaining cell shape** — especially in long processes like axons of neurons, where microtubules run the entire length

### Intermediate Filaments

**Intermediate filaments** (~10 nm diameter — intermediate between actin and microtubules) are rope-like polymers of fibrous proteins. Unlike actin and tubulin, intermediate filament proteins vary by cell type:

- **Keratins** — in epithelial cells (including skin, hair, nails)
- **Vimentin** — in fibroblasts, white blood cells, and other mesenchymal cells
- **Neurofilaments** — in neurons
- **Lamins** — in the nuclear lamina (linning the inner nuclear membrane)

Intermediate filaments are the most stable cytoskeletal element — they do not undergo rapid dynamic assembly/disassembly like actin or microtubules. They resist mechanical stress and provide tensile strength. The nuclear lamina (built from lamins A, B, and C) mechanically supports the nuclear envelope and anchors chromatin.

| Filament Type | Diameter | Protein(s) | Key Functions |
|---|---|---|---|
| Microfilaments | ~7 nm | Actin (G-actin monomers) | Muscle contraction, cell motility, cytokinesis, cell shape |
| Microtubules | ~25 nm | α- and β-tubulin heterodimers | Intracellular transport, mitotic spindle, cilia/flagella |
| Intermediate filaments | ~10 nm | Keratins, vimentin, lamins, neurofilaments | Mechanical strength, nuclear support, cell-type-specific roles |

### Cilia and Flagella

**Cilia** and **flagella** are hair-like projections from the cell surface built on a microtubule scaffold. Both are enclosed by the plasma membrane and share the same **9+2 axoneme** arrangement: nine outer doublet microtubules surrounding two central single microtubules. **Dynein arms** project from each outer doublet and, using ATP hydrolysis, slide adjacent doublets past each other, generating the bending motion.

The distinction between cilia and flagella is primarily one of number and beat pattern:

- **Cilia** — numerous and short (5–10 µm); beat in a coordinated, oar-like stroke to move fluid past the cell surface (respiratory epithelium cilia move mucus toward the throat; oviduct cilia move an egg toward the uterus) or to propel single-celled organisms
- **Flagella** — usually one or few per cell, longer (up to 200 µm); propel cells through fluid with a wave-like whipping motion (sperm flagella; bacterial flagella are structurally different — composed of flagellin, not tubulin)

**Primary cilia** are non-motile, single cilia present on most vertebrate cells that serve as sensory antennae, transducing extracellular signals (including the Hedgehog developmental signaling pathway).

#### Diagram: Cytoskeleton Component Explorer

<iframe src="../../sims/cytoskeleton-explorer/main.html" width="100%" height="610" scrolling="no"></iframe>

[View Fullscreen](../../sims/cytoskeleton-explorer/main.html)

<details markdown="1">
<summary>Cytoskeleton Component Explorer MicroSim</summary>
Type: infographic
**sim-id:** cytoskeleton-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Level: Remember → Understand (L1 → L2)
Bloom Verb: identify, explain
Learning Objective: Students will identify the three cytoskeletal filament types by diameter and protein composition, and explain the primary biological function associated with each type.

Canvas layout:
- Left panel (30%): Three clickable buttons, one per filament type: "Microfilaments", "Microtubules", "Intermediate Filaments"
- Center panel (45%): Structural diagram of the selected filament type at large scale, showing protein subunit arrangement
- Right panel (25%): Properties and key functions, including diameter, monomer, and top 3 biological roles

Visual elements — Microfilaments:
- Two intertwined helical strands of spherical G-actin monomers (light blue), labeled "G-actin"
- Helical pitch shown with a curved arrow; diameter measurement bar showing ~7 nm
- Plus (+) end and minus (–) end labeled with arrows indicating growth direction
- Small arrows showing direction of treadmilling

Visual elements — Microtubules:
- Cross-section view (circle) showing 13 protofilaments arranged in a ring around a hollow lumen
- Longitudinal view showing α-tubulin (orange) and β-tubulin (dark blue) heterodimers stacked in protofilaments
- Diameter bar: ~25 nm; plus (+) and minus (–) ends labeled
- Kinesin motor protein icon walking toward plus end; dynein icon walking toward minus end

Visual elements — Intermediate filaments:
- Rope-like twisted bundle of fibrous proteins; multiple strands coiled together
- No plus/minus polarity indicated (they are non-polar)
- Diameter bar: ~10 nm
- Labeled subtypes: keratin (epithelial), lamin (nuclear), neurofilament (neuron) shown as small icons

Interactive controls:
- Clicking any button updates center and right panels
- Hovering over any structural element (monomer, motor protein) shows tooltip
- Toggle "Show relative sizes" — superimposes the three filament silhouettes at correct relative diameters for direct comparison

Default state: Microfilaments selected

Instructional Rationale: The side-by-side structural and functional information for each filament type provides the scaffolding students need to move from recall (naming filaments) to understanding (explaining why each is suited to its function). The size comparison toggle supports analysis of the structural basis for different mechanical properties.

Canvas size: 680 × 440 px
Responsive: Must respond to window resize events
</details>

### Cell Wall

The **cell wall** is a rigid or semi-rigid extracellular matrix that surrounds the plasma membrane of plant, fungal, bacterial, and some protist cells (animal cells lack a cell wall).

- **Plant cell walls** are composed primarily of **cellulose** microfibrils (β-1,4-linked glucose polymers) embedded in a matrix of hemicelluloses and pectin. A primary cell wall (thin, flexible) is deposited while the cell is growing; many specialized cells later deposit a thicker **secondary cell wall** reinforced with **lignin** (as in wood and the water-conducting cells of xylem).
- **Fungal cell walls** are composed of **chitin** (β-1,4-linked N-acetylglucosamine polymer), the same material as arthropod exoskeletons.
- **Bacterial cell walls** are composed of **peptidoglycan** — a polymer of sugars cross-linked by short peptide bridges. Gram-positive bacteria have a thick peptidoglycan layer; Gram-negative bacteria have a thin peptidoglycan layer sandwiched between two membranes.

The cell wall provides structural support, determines cell shape, and resists the osmotic pressure that would otherwise cause the cell to burst in hypotonic environments. Plant cells deliberately maintain high turgor pressure inside their cell walls — this turgor is the driving force for cell expansion during growth and is responsible for the upright posture of herbaceous plants.

---

## The Complete Eukaryotic Cell: Animal and Plant

The following interactive diagrams show the complete annotated organization of the eukaryotic animal cell and the eukaryotic plant cell. Use them to integrate all the organelle concepts covered in this chapter.

#### Diagram: Eukaryotic Animal Cell

<iframe src="../../sims/animal-cell/main.html" width="100%" height="730" scrolling="no"></iframe>

[View Fullscreen](../../sims/animal-cell/main.html)

#### Diagram: Eukaryotic Plant Cell

<iframe src="../../sims/plant-cell/main.html" width="100%" height="730" scrolling="no"></iframe>

[View Fullscreen](../../sims/plant-cell/main.html)

The following table summarizes the key differences between animal and plant cells:

| Feature | Animal Cell | Plant Cell |
|---|---|---|
| Cell wall | Absent | Present (cellulose primary wall; lignin secondary wall in some) |
| Central vacuole | Absent (small vesicles present) | Large (up to 90% of volume); maintains turgor |
| Chloroplasts | Absent | Present (in green tissues) |
| Centrioles | Present (in centrosome) | Absent in most flowering plants |
| Lysosomes | Present | Rare; vacuole performs similar function |
| Shape | Irregular, flexible | Regular, box-like (constrained by cell wall) |

!!! mascot-warning "Common Mistake: Animal Cells Have No Chloroplasts"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Gregor warning"/>
    The AP exam regularly tests the differences between animal and plant cells. Remember: animal cells have centrioles and lysosomes but no chloroplasts, no central vacuole, and no cell wall. Plant cells have chloroplasts, a central vacuole, and a cell wall but generally lack centrioles. Both have mitochondria, ribosomes, ER, Golgi, and a nucleus. Don't mix these up on a free-response question!

---

## Key Connections and Chapter Summary

The structural organization of eukaryotic cells that you learned in this chapter provides the spatial context for every process studied in subsequent chapters:

- **Cell Theory** establishes cells as the universal unit of life; prokaryotes and eukaryotes differ fundamentally in the presence of a nucleus and membrane-bound organelles.
- **SA:V ratio** explains why cells stay small; compartmentalization by organelles allows cells to maintain optimal conditions for multiple chemical processes simultaneously.
- **The nucleus** stores genetic information (DNA) and produces RNA by transcription; the nuclear envelope with its pores regulates molecular traffic.
- **The endomembrane system** (rough ER → Golgi → vesicles) provides a conveyor-belt pathway for synthesizing, glycosylating, and delivering secretory and membrane proteins.
- **Mitochondria and chloroplasts** are endosymbiotic organelles with their own genomes; mitochondria produce ATP by cellular respiration (Chapters 7–8), chloroplasts fix carbon by photosynthesis (Chapter 7).
- **The cytoskeleton** (actin microfilaments, tubulin microtubules, intermediate filaments) provides structural support, enables movement, and organizes intracellular transport — themes revisited in cell division (Chapter 10) and signal transduction (Chapter 9).

!!! mascot-celebration "Excellent Work!"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Gregor celebrating"/>
    Remarkable work, investigators! You have now toured the eukaryotic cell in full — from the surface-area constraint that limits its size to the nuclear pores that regulate its gene expression, from the endomembrane system's protein-processing assembly line to the cytoskeletal motors that drive its movement. Every chapter from here builds directly on this architecture. Membranes and transport in Chapter 5, cellular energetics in Chapters 7 and 8, cell division in Chapter 10 — the cell you just learned is the stage on which all of those processes play out.

??? note "Self-Check: Test Your Understanding — Click to Reveal"
    **Question:** A student examines a cell under the electron microscope and observes: a large nucleus with a prominent nucleolus, abundant rough ER, a well-developed Golgi apparatus, and numerous secretory vesicles near the plasma membrane. (a) What is this cell most likely specialized to do? (b) Which organelles would you expect to be *absent or reduced* in a mature red blood cell, and why? (c) Explain why a mutation that destroys the V-type H⁺-ATPase in the lysosomal membrane would be lethal to a cell.

    **Answer:** (a) This cell is specialized for **protein secretion** — the abundant rough ER indicates high-level protein synthesis, the developed Golgi indicates extensive post-translational modification, and the secretory vesicles indicate active exocytosis. Pancreatic acinar cells (secreting digestive enzymes) and plasma B cells (secreting antibodies) are examples. (b) Mature red blood cells **lack a nucleus, mitochondria, ribosomes, ER, and Golgi** — they ejected all membrane-bound organelles during maturation. This maximizes space for hemoglobin and reduces metabolic demands; the cell produces ATP only by anaerobic glycolysis. (c) The V-type H⁺-ATPase maintains the lysosomal interior at pH ~4.8, which is required for all ~50 lysosomal hydrolase enzymes to function. Without it, the lysosome would equilibrate with the cytoplasmic pH (~7.2), rendering all hydrolases inactive. Lysosomes would fill with undigested material, autophagy would fail, and the cell would accumulate damaged organelles — a condition analogous to lysosomal storage diseases.
