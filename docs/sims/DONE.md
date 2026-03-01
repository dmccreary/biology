# MicroSim DONE — Completed Implementations

**Completed:** 15 MicroSims

These MicroSims have been fully implemented with substantial JavaScript or diagram-architecture overlays.

---

## condensation-hydrolysis

- **Title:** Condensation and Hydrolysis Reaction Simulator
- **Chapter:** 02-water-ph-and-organic-chemistry
- **Library:** p5.js
- **Bloom:** Understand (L2)
- **Status:** complete
- **Target:** `docs/sims/condensation-hydrolysis/condensation-hydrolysis.js`

### Specification

Type: microsim
**sim-id:** condensation-hydrolysis<br/>
**Library:** p5.js<br/>

Bloom Level: Understand (L2)
Bloom Verb: explain
Learning Objective: Students will explain which atoms leave to form water in a condensation reaction and which bond is broken by water in hydrolysis, and identify which direction requires energy input and which releases energy.

Canvas layout:
- Top drawing area (60%): Shows animated monomer and polymer molecules with functional group labels
- Bottom panel (40%): Control buttons, energy display, and cumulative water counter

Visual elements:
- Monomers drawn as colored rounded rectangles (each a different color)
- Functional group labels shown at the reactive ends: "–OH" on one monomer, "H–O–" on the other
- The atoms that will form or break (the –OH and H–) are highlighted in red before the reaction step
- A water molecule (small circle labeled H₂O) appears near the reaction zone; it drifts away (condensation) or drifts in (hydrolysis)
- Growing polymer chain shown as a row of connected rectangles; bond connections shown as short lines between monomers
- Energy indicator: upward-pointing arrow labeled "Energy required (ATP)" for condensation; downward-pointing arrow labeled "Energy released" for hydrolysis
- Counters: "Water molecules released: N" (condensation) and "Water molecules consumed: N" (hydrolysis)

Interactive controls:
- Dropdown: "Select reaction type" — options: Polypeptide (amino acids), Polysaccharide (glucose units), Polynucleotide (nucleotides)
- Button "Add Monomer (Condensation)": animates one condensation step
- Button "Hydrolyze Bond (Hydrolysis)": animates one hydrolysis step (removes last monomer from chain)
- Button "Build to 5 units": rapidly performs 4 condensations to show a short polymer chain
- Button "Reset": clears the canvas

Condensation animation sequence:
1. Two monomers slide toward each other
2. –OH on monomer A and H– on monomer B are highlighted in red
3. A "snap" animation joins the monomers; the highlighted atoms separate
4. A water molecule assembles from the separated atoms and drifts to the side
5. Water counter increments; energy indicator pulses upward

Hydrolysis animation sequence:
1. A water molecule drifts in from the side toward the last bond in the chain
2. The bond is highlighted in red
3. The water molecule splits: –OH attaches to one fragment, H– to the other
4. The bond breaks with a "crack" visual; the freed monomer slides away
5. Water counter decrements; energy indicator pulses downward

Data Visibility Requirements:
Stage 1: Monomer structures with functional group labels
Stage 2: Highlighted reactive atoms (–OH and H–) before bond formation or cleavage
Stage 3: Water molecule assembling or splitting at the reaction site
Stage 4: Updated polymer chain with cumulative water and energy accounting

Instructional Rationale: Animating the specific atoms that leave or join the molecule at each step makes the abstract equation concrete and atom-traceable. The step-by-step button (not continuous looping animation) requires the student to trigger each step, allowing a prediction before the outcome is shown — reinforcing the Understand-level objective.

Canvas size: 660 × 460 px
Responsive: Must respond to window resize events

---

## carbohydrate-structures

- **Title:** Carbohydrate Structures Explorer
- **Chapter:** 03-biological-macromolecules
- **Library:** p5.js
- **Bloom:** Understand (L2)
- **Status:** specified
- **Target:** `docs/sims/carbohydrate-structures/carbohydrate-structures.js`

### Specification

Type: infographic
**sim-id:** carbohydrate-structures<br/>
**Library:** p5.js<br/>

Bloom Level: Understand (L2)
Bloom Verb: explain
Learning Objective: Students will explain the structural difference between α- and β-glucose, identify the glycosidic bond connecting monosaccharide monomers, and contrast the structures of starch and cellulose in terms of bond orientation and biological function.

Canvas layout:
- Left panel (30%): Clickable list of molecules: α-Glucose, β-Glucose, Sucrose, Starch (short chain), Cellulose (short chain)
- Center panel (50%): Structural diagram of the selected molecule, drawn at large scale using p5.js Haworth projections (ring structures)
- Right panel (20%): Properties box showing type, bond type, function, and one key biological fact

Visual elements:
- Haworth projection ring diagrams for each molecule with correct ring shapes (pyranose 6-membered ring for glucose, furanose 5-membered ring for fructose within sucrose)
- For α-glucose: C-1 –OH highlighted in red pointing DOWN from ring plane
- For β-glucose: C-1 –OH highlighted in blue pointing UP from ring plane
- For disaccharides: glycosidic bond shown as a thick colored line connecting two rings, with bond type label (α-1,4, β-1,4, α-1,2)
- For polysaccharides: 4-unit chain shown with consistent bond orientation; α-1,4 chain bends into a coil (starch); β-1,4 chain stays straight and linear (cellulose)
- Water molecule shown departing at each glycosidic bond connection
- Color scheme: carbon atoms dark gray, oxygen atoms red, hydroxyl groups green; glycosidic bond orange

Interactive controls:
- Left panel: clicking any molecule name updates center and right panels
- Hovering over any atom in the center panel shows atom label and brief chemical description
- Toggle button "Show bond orientation labels" — highlights the anomeric C-1 position and the O atom of the glycosidic bond in both the α and β forms

Default state: α-Glucose selected

Behavior: smooth 200 ms transition when new molecule selected; all ring positions correctly drawn for each molecule

Instructional Rationale: Seeing the structural drawings of α- and β-glucose side by side, with the C-1 hydroxyl orientation explicitly highlighted, makes concrete the abstract claim that "one bond direction determines digestibility." The polymer chain view reinforces that bond orientation propagates into dramatically different 3D shapes.

Canvas size: 660 × 460 px
Responsive: Must respond to window resize events

---

## activation-energy-diagram

- **Title:** Activation Energy and Reaction Coordinate
- **Chapter:** 06-thermodynamics-and-enzymes
- **Library:** p5.js
- **Bloom:** Understand (L2)
- **Status:** specified
- **Target:** `docs/sims/activation-energy-diagram/activation-energy-diagram.js`

### Specification

Type: microsim
**sim-id:** activation-energy-diagram<br/>
**Library:** p5.js<br/>

Bloom Level: Understand (L2)
Bloom Verb: explain
Learning Objective: Students will explain why activation energy is a barrier to spontaneous reactions, describe how an enzyme lowers activation energy without changing the overall ΔG of the reaction, and identify the transition state on a reaction coordinate diagram.

Canvas layout:
- Drawing area (65%): Reaction coordinate diagram (x-axis: "Reaction Progress"; y-axis: "Free Energy (kJ/mol)")
- Right info panel (35%): Label and explanation of the currently highlighted region of the curve

Visual elements:
- Two energy curves drawn as smooth arcs:
  - "Without enzyme" curve: high activation energy hump
  - "With enzyme" curve: lower hump (same start and end points)
- Both curves share the same reactant energy level (left) and product energy level (right)
- ΔG arrow: vertical double-headed arrow between reactant and product energy levels, labeled "ΔG (unchanged by enzyme)"
- Ea_uncatalyzed: vertical arrow from reactant energy level to the top of the uncatalyzed hump, labeled "Ea (uncatalyzed)"
- Ea_catalyzed: smaller vertical arrow from reactant to the catalyzed hump peak, labeled "Ea (enzyme-catalyzed)"
- Transition state: labeled peak of each curve ("⧧ Transition state")
- Background shading: reactants region light red; products region light green; activation energy region orange
- For exergonic reactions: product level lower than reactant level; for endergonic: higher

Interactive controls:
- Toggle "Exergonic / Endergonic": switches the diagram between a reaction where products have lower vs higher energy than reactants
- Slider "Enzyme efficiency": adjusts the height of the catalyzed hump from 80% down to 20% of the uncatalyzed Ea, showing how different enzymes reduce Ea by different amounts
- Hover over any labeled region: info panel explains that region in biological terms

Default state: Exergonic reaction; enzyme efficiency at 50% reduction

Behavior:
- All curve positions update smoothly when toggle or slider is changed
- ΔG arrow remains constant regardless of enzyme efficiency slider (reinforcing that enzymes don't change thermodynamics)
- Info panel updates when hovering over: reactants (what they are), transition state (why it's unstable), products (where the energy went), Ea arrows (what contributes to Ea in enzyme vs non-enzyme)

Data Visibility Requirements:
Stage 1: Both curves drawn with labeled axes
Stage 2: Ea arrows and ΔG arrow shown with numerical labels
Stage 3: Transition state peaks labeled; info panel text updates on hover

Instructional Rationale: A reaction coordinate diagram is the canonical representation of catalysis. Making it interactive — with a slider that literally moves the enzyme curve down while leaving the ΔG fixed — makes tangible the key distinction that enzymes affect kinetics (Ea) but not thermodynamics (ΔG).

Canvas size: 660 × 420 px
Responsive: Must respond to window resize events

---

## krebs-cycle-explorer

- **Title:** Krebs Cycle Explorer
- **Chapter:** 08-cellular-respiration
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** implemented
- **Target:** `docs/sims/krebs-cycle-explorer/krebs-cycle-explorer.js`

### Specification

**Type:** MicroSim (p5.js)<br/>
**sim-id:** krebs-cycle-explorer<br/>
**Library:** p5.js<br/>

**Learning objective:** Students will be able to *explain* (Bloom's L2: Understand) the inputs, outputs, and overall purpose of the Krebs cycle, and identify where NADH and FADH₂ are produced.

**Canvas:** 760 × 480 px, responsive.

**Layout:** Circular pathway with 8 labeled intermediates arranged clockwise. Each intermediate shown as a rounded rectangle with carbon count (e.g., "Citrate (6C)"). Arrows between intermediates indicate reactions.

**Molecule nodes:**
- Oxaloacetate (4C) at top (entry/exit point, highlighted in gold)
- Citrate (6C), Isocitrate (6C), α-Ketoglutarate (5C), Succinyl-CoA (4C), Succinate (4C), Fumarate (4C), Malate (4C)
- Acetyl-CoA input arrow entering at top-left junction

**Product badges on arrows:**
- CO₂ released: red badge on isocitrate→α-ketoglutarate and α-ketoglutarate→succinyl-CoA steps
- NADH produced: blue badge on three dehydrogenase steps
- FADH₂ produced: orange badge on succinate→fumarate step
- ATP produced: green badge on succinyl-CoA→succinate step

**Running tally panel** (right side): Live count of CO₂, NADH, FADH₂, ATP accumulated per turn as user clicks through steps.

**Interaction:**
- "Step Forward" button advances through the cycle one reaction at a time
- Click any intermediate node to show its name, carbon count, and role
- "Run Full Cycle" animates all 8 steps automatically
- "×2 for glucose" toggle doubles all product counts and adds label "per glucose"

**Responsive design:** Cycle radius scales with container width. All text scales proportionally.

---

## evolution-timeline

- **Title:** Timeline of Evolutionary Thought
- **Chapter:** 15-evidence-for-evolution
- **Library:** vis-timeline
- **Bloom:** Create (L6)
- **Status:** specified
- **Target:** `docs/sims/evolution-timeline/evolution-timeline.js`

### Specification

**Type:** Timeline (vis-timeline)<br/>
**sim-id:** evolution-timeline<br/>
**Library:** vis-timeline<br/>

**Learning objective:** Students will be able to *identify* (Bloom's L1: Remember) the key scientists and publications in the history of evolutionary thought, and *explain* (Bloom's L2: Understand) how earlier ideas influenced Darwin's theory.

**Instructional Rationale:** A visual timeline with hover-for-detail tooltips helps students build a chronological mental model without overwhelming them with text.

**Canvas:** 760 × 420 px, responsive.

**Events:**

- 1735: Linnaeus publishes *Systema Naturae* (classification but not evolution)
- 1798: Malthus publishes *Essay on Population*
- 1809: Lamarck proposes inheritance of acquired characteristics
- 1830: Lyell publishes *Principles of Geology*
- 1831–1836: Darwin's voyage on HMS *Beagle*
- 1858: Wallace sends Darwin his manuscript (independent discovery)
- 1859: Darwin publishes *On the Origin of Species*
- 1865: Mendel publishes genetics work (overlooked for decades)
- 1900: Mendel's work rediscovered
- 1930s–1940s: Modern Synthesis unifies genetics and evolution
- 1953: Watson and Crick describe DNA structure
- 2003: Human Genome Project completed

**Interaction:**
- Hover over events for 2–3 sentence descriptions
- Click to expand into a detail card with an image
- Zoom and pan along the timeline

**Colors:** Pre-Darwin: gray. Darwin era: green. Modern Synthesis: blue. Molecular era: purple.

**Responsive design:** Timeline scrolls horizontally; events reflow on narrow screens.

---


## comparative-anatomy

- **Title:** Comparative Anatomy Explorer
- **Chapter:** 15-evidence-for-evolution
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** complete
- **Target:** `docs/sims/comparative-anatomy/comparative-anatomy.js`

### Specification

**Type:** MicroSim (p5.js)<br/>
**sim-id:** comparative-anatomy<br/>
**Library:** p5.js<br/>

**Learning objective:** Students will be able to *differentiate* (Bloom's L4: Analyze) among homologous, analogous, and vestigial structures, and *explain* how each type provides evidence for evolution.

**Instructional Rationale:** Side-by-side visual comparison of forelimb bones across species — with the ability to toggle color-coded bone highlighting — makes the homology (same bones, different shapes) immediately visible. A classification quiz reinforces the conceptual distinction.

**Canvas:** 800 × 480 px, responsive.

**Layout:**

- Top: Row of 5 species forelimb silhouettes (human, whale, bat, dog, bird) with skeletal overlays
- Each skeleton color-codes: humerus (red), radius/ulna (blue), carpals (green), metacarpals/phalanges (yellow)
- Bottom: Classification panel

**Interaction:**
- Hover over any bone → highlights the same bone across all species simultaneously
- Toggle: "Show Bones" / "Show Silhouettes Only"
- "Classify" mode: presents pairs of structures → student classifies as homologous, analogous, or vestigial
- Feedback for correct/incorrect answers with explanation

**Examples for classification mode:**

- Human arm / whale flipper → homologous
- Bird wing / insect wing → analogous
- Whale hip bones → vestigial
- Human appendix → vestigial
- Bat wing / bird wing → analogous (both fly, but different skeletal origins)

**Colors:** Humerus: red (#E74C3C). Radius/Ulna: blue (#3498DB). Carpals: green (#27AE60). Phalanges: yellow (#F1C40F). Background: light gray.

**Responsive design:** Species silhouettes wrap to two rows on narrow screens.

---

## protein-structure-levels

- **Title:** Protein Structure Levels Explorer
- **Chapter:** 03-biological-macromolecules
- **Library:** p5.js
- **Bloom:** Understand (L2)
- **Status:** complete
- **Target:** `docs/sims/protein-structure-levels/protein-structure-levels.js`
- **Approach:** Text-to-image illustration (`protein-structures.png`) + p5.js overlay

---

## cell-membrane

- **Title:** Cell Membrane — Fluid Mosaic Model
- **Chapter:** 05-cell-membranes-and-transport
- **Library:** diagram-architecture (shared diagram.js + text-to-image overlay)
- **Bloom:** Understand (L2)
- **Status:** complete
- **Architecture:** Diagram overlay — use shared `diagram-architecture/diagram.js` with `data.json` callouts
- **Target:** `docs/sims/cell-membrane/data.json`

---

## chloroplast

- **Title:** Chloroplast Structure
- **Chapter:** 07-photosynthesis
- **Library:** diagram-architecture (shared diagram.js + text-to-image overlay)
- **Bloom:** Understand (L2)
- **Status:** complete
- **Architecture:** Diagram overlay — use shared `diagram-architecture/diagram.js` with `data.json` callouts
- **Target:** `docs/sims/chloroplast/data.json`

---

## mitochondria

- **Title:** Mitochondria Structure
- **Chapter:** 08-cellular-respiration
- **Library:** diagram-architecture (shared diagram.js + text-to-image overlay)
- **Bloom:** Understand (L2)
- **Status:** complete
- **Architecture:** Diagram overlay — use shared `diagram-architecture/diagram.js` with `data.json` callouts
- **Target:** `docs/sims/mitochondria/data.json`

---

## prokaryote-eukaryote-comparison

- **Title:** Prokaryote vs. Eukaryote Cell Comparison
- **Chapter:** 04-cell-organization-and-organelles
- **Library:** diagram-architecture (shared diagram.js + text-to-image overlay)
- **Bloom:** Analyze (L4)
- **Status:** complete
- **Architecture:** Diagram overlay — use shared `diagram-architecture/diagram.js` with `data.json` callouts
- **Target:** `docs/sims/prokaryote-eukaryote-comparison/data.json`

---

## endomembrane-system

- **Title:** Endomembrane System — Protein Secretion Pathway
- **Chapter:** 04-cell-organization-and-organelles
- **Library:** diagram-architecture (shared diagram.js + text-to-image overlay)
- **Bloom:** Understand (L2)
- **Status:** complete
- **Architecture:** Diagram overlay — use shared `diagram-architecture/diagram.js` with `data.json` callouts
- **Target:** `docs/sims/endomembrane-system/data.json`

---

## cytoskeleton-explorer

- **Title:** Cytoskeleton Component Explorer
- **Chapter:** 04-cell-organization-and-organelles
- **Library:** diagram-architecture (shared diagram.js + text-to-image overlay)
- **Bloom:** Understand (L2)
- **Status:** complete
- **Architecture:** Diagram overlay — use shared `diagram-architecture/diagram.js` with `data.json` callouts
- **Target:** `docs/sims/cytoskeleton-explorer/data.json`

---

## sodium-potassium-pump

- **Title:** Sodium-Potassium Pump Cycle
- **Chapter:** 05-cell-membranes-and-transport
- **Library:** diagram-architecture (shared diagram.js + text-to-image overlay)
- **Bloom:** Understand (L2)
- **Status:** complete
- **Architecture:** Diagram overlay — use shared `diagram-architecture/diagram.js` with `data.json` callouts
- **Target:** `docs/sims/sodium-potassium-pump/data.json`

---

## cell-junctions-explorer

- **Title:** Cell Junctions Explorer
- **Chapter:** 05-cell-membranes-and-transport
- **Library:** diagram-architecture (shared diagram.js + text-to-image overlay)
- **Bloom:** Analyze (L4)
- **Status:** complete
- **Architecture:** Diagram overlay — use shared `diagram-architecture/diagram.js` with `data.json` callouts (dual-panel layout)
- **Target:** `docs/sims/cell-junctions-explorer/data.json`

---
