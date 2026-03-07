# MicroSim DONE — Completed Implementations

**Completed:** 39 MicroSims

These MicroSims have been fully implemented with substantial JavaScript or shared-libs overlays.

---

## camp-signaling-cascade

- **Title:** cAMP Signaling Cascade
- **Chapter:** 09-cell-signaling-and-feedback
- **Library:** p5.js
- **Bloom:** Apply (L3)
- **Status:** implemented
- **Complexity Rating:** 7
- **Target:** `docs/sims/camp-signaling-cascade/camp-signaling-cascade.js`

### Specification

Vertical cascade flow from epinephrine (hexagon) through GPCR (membrane rectangle), G protein (oval), adenylyl cyclase (diamond), cAMP (multiple circles), PKA (pentagon), target proteins (multi-rect), to cellular response (rounded box). 8-step narration with amplification counter (x1 to x100K), signal amplification bar, PDE toggle for signal termination, and info panel with detailed molecular descriptions.

---

## cell-cycle-checkpoints

- **Title:** Cell Cycle Checkpoint Control
- **Chapter:** 10-cell-cycle-mitosis-and-cancer
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** implemented
- **Complexity Rating:** 8
- **Target:** `docs/sims/cell-cycle-checkpoints/cell-cycle-checkpoints.js`

### Specification

Left panel plots cyclin concentrations (Cyclins D/E/A/B) across G1→S→G2→M with shaded CDK activity, while the right panel shows an interactive checkpoint decision tree (toggle between G1/S and G2/M). Buttons trigger DNA damage events (ATM/ATR → p53 → p21 arrest) or simulate p53 loss to illustrate failed checkpoints. Hover tooltips explain each cyclin/CDK role, slider adjusts growth factor levels, and responsiveness keeps graph + flowchart aligned 450–1200 px.

---

## cancer-mutation-simulator

- **Title:** Cancer Mutation Simulator
- **Chapter:** 10-cell-cycle-mitosis-and-cancer
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** implemented
- **Complexity Rating:** 7
- **Target:** `docs/sims/cancer-mutation-simulator/cancer-mutation-simulator.js`

### Specification

Checklist-driven colorectal cancer progression: six sequential mutations (APC loss → Ras activation → SMAD4 loss → p53 loss → telomerase reactivation → metastasis genes) toggle badges between oncogene/tumor-suppressor hits. Center panel shows a cell illustration and growth curve that become more chaotic and steep with each mutation, right panel narrates functional effects, and hover tooltips provide gene/protein detail. Includes Reset button and responsive panel scaling from 450–1200 px.

---

## crossing-over

- **Title:** Crossing Over Visualization
- **Chapter:** 11-meiosis-and-mendelian-genetics
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** implemented
- **Complexity Rating:** 6
- **Target:** `docs/sims/crossing-over/crossing-over.js`

### Specification

Step-through model of homologous chromosomes: Stage 1 shows chromatids with loci A–D, Stage 2 forms a tetrad, Stage 3 animates chiasmata, Stage 4 reveals recombinant chromatids, Stage 5 separates parental vs. recombinant products. Predict prompts precede recombination, double-crossover toggle adds a second chiasma, and responsive sizing keeps chromosomes + controls readable from 450–1200 px.

---

## punnett-square-calculator

- **Title:** Interactive Punnett Square Calculator
- **Chapter:** 11-meiosis-and-mendelian-genetics
- **Library:** p5.js
- **Bloom:** Apply (L3)
- **Status:** implemented
- **Complexity Rating:** 6
- **Target:** `docs/sims/punnett-square-calculator/punnett-square-calculator.js`

### Specification

Responsive canvas with a title band, a mode toggle bar (monohybrid vs. dihybrid), a three-column drawing deck (parent controls, Punnett grid, live summaries), and a dedicated control deck. Hovering any revealed cell highlights its row/column headers; Start/Step/Show All buttons populate the grid while genotype/phenotype tallies update in real time. Randomize Parents, gene-letter inputs, and a speed slider keep the simulation scaffolded between 450–1200 px widths.

---

## fermentation-pathways

- **Title:** Fermentation Pathways Comparison
- **Chapter:** 08-cellular-respiration
- **Library:** p5.js
- **Bloom:** Analyze (L4)
- **Status:** implemented
- **Complexity Rating:** 6
- **Target:** `docs/sims/fermentation-pathways/fermentation-pathways.js`

### Specification

Two parallel flow diagrams comparing lactic acid and alcoholic fermentation. 8-step narration with auto-advance, pathway focus selector (lactic/both/alcoholic), oxygen mode toggle (anaerobic/aerobic), organism fun-fact pop-ups, NAD+ regeneration hub, highlighted path segments with animated progress dots, and ATP yield badges.

---

## photosynthesis-strategies

- **Title:** C3, C4, and CAM Photosynthesis Comparison
- **Chapter:** 07-photosynthesis
- **Library:** p5.js
- **Bloom:** Analyze (L4)
- **Status:** implemented
- **Complexity Rating:** 7
- **Target:** `docs/sims/photosynthesis-strategies/photosynthesis-strategies.js`

### Specification

Type: infographic
Interactive comparison of C3, C4, and CAM photosynthetic carbon fixation strategies. Left panel has strategy selector buttons and Compare All toggle. Center panel shows leaf cross-section diagrams (C3: mesophyll-only with RuBisCO; C4: Kranz anatomy with PEP carboxylase in mesophyll and RuBisCO in bundle sheath; CAM: night/day temporal separation with vacuole storage). Right panel has climate sliders (temperature, water, light) with real-time suitability scoring.

---

## eukaryotic-gene-regulation

- **Title:** Eukaryotic Gene Regulation Layers
- **Chapter:** 14-mutations-gene-regulation-and-biotechnology
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** complete
- **Target:** `docs/sims/eukaryotic-gene-regulation/eukaryotic-gene-regulation.js`

### Specification

Type: Infographic (p5.js)<br/>
**sim-id:** eukaryotic-gene-regulation<br/>
**Library:** p5.js<br/>

Learning Objective: Students organize the five checkpoints of eukaryotic gene regulation and explain how activation vs. repression cues operate at each level.

Layout & Interaction: Aliceblue drawing region with stacked responsive bands anchored to a right-side detail panel. Students click any band—or press Start Flow—to highlight it, expand its height, and auto-populate the persistent detail panel. Start Flow also animates a timeline/spine indicator through the checkpoints and keeps the detail panel synchronized. Icons are pinned relative to each band’s right edge for responsive alignment, adaptive spacing prevents overlaps (including a 20 px cushion above the controls), and the control deck includes a widened Start/Pause button plus a flow-speed slider.

Responsive Design: Width-aware calculations drive layer widths, icon placement, detail panel sizing, and slider layout. `windowResized()` keeps the canvas and slider aligned, while `updateCanvasSize()` and adaptive margins maintain the non-overlap guarantee.

---

## energy-pyramid

- **Title:** Energy Pyramid Explorer
- **Chapter:** 20-ecosystem-ecology-and-conservation
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** complete
- **Target:** `docs/sims/energy-pyramid/energy-pyramid.js`

### Specification

Type: MicroSim (p5.js)<br/>
**sim-id:** energy-pyramid<br/>
**Library:** p5.js<br/>

Learning Objective: Students calculate the energy reaching each trophic level (10% rule) and explain how biomass and organism-count pyramids compare, highlighting why food chains rarely exceed four or five levels.

Layout & Interaction: Left 70% contains a tapered pyramid of up to six tiers, a heat-loss band, and hover tooltips; the right column hosts the detail panel. Producer-input and efficiency sliders live in the top two control rows; separate **Add Level** and **Remove Level** buttons plus “Show Biomass” / “Show Individuals” toggles sit in row three. Energy values always display; toggles optionally append kg/ha and “ind” text. Icons and bars anchor to geometric rules derived from the saved wireframe, and adaptive gutters/bottom margins prevent overlaps at widths 450–1200 px.

Responsive Design: Uses width-aware calculations for bar widths, icon placement, detail panel sizing, sliders, and control rows. `windowResized()` resizes the canvas and p5 sliders; a silver border + white control fill expose any overflow during QA.

---

## osmosis-simulator

- **Title:** Osmosis and Water Potential Simulator
- **Chapter:** 05-cell-membranes-and-transport
- **Library:** p5.js
- **Bloom:** Apply (L3)
- **Status:** complete
- **Target:** `docs/sims/osmosis-simulator/osmosis-simulator.js`

### Specification

Type: MicroSim (p5.js)<br/>
**sim-id:** osmosis-simulator<br/>
**Library:** p5.js<br/>

Learning Objective: Students calculate Ψ<sub>s</sub>, Ψ<sub>p</sub>, and overall Ψ for internal vs. external solutions, classify tonicity, and predict water movement effects on animal and plant cells.

Layout & Interaction: Expanded drawing height allocates room for Ψ labels above the blue (cell) and green (external) chambers separated by a dashed membrane; water/solute particles animate stochastically, a turgor gauge appears in plant mode, and a bold arrow visualizes ΔΨ direction. Stage 1–4 info rail summarizes concentrations, Ψ calculations, ΔΨ, and the equilibration endpoint, while Start/Pause plus Equilibrate controls manage motion and scripted balancing.

Responsive Design: Width-aware layout recalculates chamber widths, membrane band, annotation rail, and slider alignment between 450–1200 px. Sliders and toggle reposition via `positionControls()`, slider labels right-align next to the tracks, and `updateCanvasSize()` maintains the non-overlap guarantee.

---

## enzyme-kinetics-explorer

- **Title:** Enzyme Kinetics Explorer
- **Chapter:** 06-thermodynamics-and-enzymes
- **Library:** p5.js
- **Bloom:** Apply (L3)
- **Status:** complete
- **Target:** `docs/sims/enzyme-kinetics-explorer/enzyme-kinetics-explorer.js`

### Specification

Type: MicroSim (p5.js)<br/>
**sim-id:** enzyme-kinetics-explorer<br/>
**Library:** p5.js<br/>

Learning Objective: Students will use the Michaelis-Menten equation to predict enzyme velocity at a given substrate concentration, identify Vmax and Km from a v vs [S] graph, and explain how competitive and noncompetitive inhibitors shift the curve.

Layout & Interaction: Left 60% hosts a responsive Michaelis-Menten plot with dashed Vmax and Km guides, draggable/autoplay probe dot, and optional competitive (red) or noncompetitive (purple) overlay curves that respect inhibitor concentration. Right 40% contains the numerical info panel with Stage 1–3 prompts that summarize baseline reading, probe exploration, and inhibitor comparisons. Control deck beneath the canvas includes Vmax, Km, and inhibitor sliders; toggles for each inhibitor type; Start/Pause and Reset buttons; and a probe autoplay caption.

Responsive Design: Canvas resizes to container width; graph axes, probe bounds, and info panel recompute every frame. Slider labels right-align precisely 15 px left of the tracks, toggles anchor to the right edge, and the probe interaction respects updated graph bounds after every resize. The wireframe (stored in `wireframe.html`) guarantees non-overlap from 450–1200 px widths, and `windowResized()` repositions all controls via `positionControls()`.

Canvas Size: Responsive width × 610 px height.

---

## enzyme-activity-explorer

- **Title:** Temperature and pH Effects on Enzyme Activity
- **Chapter:** 06-thermodynamics-and-enzymes
- **Library:** p5.js
- **Bloom:** Apply (L3)
- **Status:** complete
- **Target:** `docs/sims/enzyme-activity-explorer/enzyme-activity-explorer.js`

### Specification

Type: MicroSim (p5.js)<br/>
**sim-id:** enzyme-activity-explorer<br/>
**Library:** p5.js<br/>

Learning Objective: Students predict how enzyme activity changes with temperature and pH, identify optimal values for a given enzyme, and explain the molecular basis for the activity drop at extreme values.

Layout & Interaction: The top toggle switches between Temperature and pH views, each with a responsive bell-shaped activity curve (left 55%) and a molecular explanation/ionization panel (right 45%). A draggable cursor (or sweep autoplay) updates activity readouts, dashed guidelines, and the right-panel cartoon showing intact vs. denatured proteins or histidine charge states. Sliders adjust optimal temperature, optimal pH, and enzyme thermostability (curve width), while preset buttons load human enzymes, pepsin, or Taq polymerase and animate the curve to new optima.

Responsive Design: Activity graph and explanation panel recompute widths from `layout.graphArea` and `layout.panelArea`; axis guides, cursor readouts, and annotations remain pinned to panel edges between 450–1200 px widths. Sliders and preset buttons reposition via `updateControlPositions()` so labels stay on-canvas and buttons never overlap sliders. Right-panel explanations wrap inside their bounds, and the entire sim stays paused by default with “Sweep Temperature/pH Values” contextual buttons.

Canvas Size: Responsive width × 700 px height.

---

## replication-fork

- **Title:** DNA Replication Fork Explorer
- **Chapter:** 13-central-dogma-replication-and-protein-synthesis
- **Library:** shared-libs (shared diagram.js + text-to-image overlay)
- **Bloom:** Understand (L2)
- **Status:** complete
- **Architecture:** Diagram overlay — dual-panel layout with 13 callouts covering all enzymes and structures at the DNA replication fork (helicase, DNA Pol III, primase, SSB, topoisomerase, DNA Pol I, DNA ligase, Okazaki fragments, RNA primers, leading/lagging strands)
- **Target:** `docs/sims/replication-fork/data.json`

### Specification

Type: shared-libs overlay
**sim-id:** replication-fork<br/>
**Library:** shared-libs<br/>

Bloom Level: Understand (L2)
Bloom Verb: identify, explain
Learning Objective: Students will identify the enzymes at the replication fork and explain why the leading strand is synthesized continuously while the lagging strand requires Okazaki fragments.

Layout: Dual-panel — left panel (6 labels: RNA primer, SSB, topoisomerase, parental DNA, helicase, primase) and right panel (7 labels: DNA Pol III leading, new leading strand, lagging strand template, DNA Pol III lagging, Okazaki fragments, DNA Pol I, DNA ligase). AI-generated landscape image with diagram.js providing Explore, Quiz, and Edit modes.

---

## meiosis-stages

- **Title:** Meiosis Stages Explorer
- **Chapter:** 11-meiosis-and-mendelian-genetics
- **Library:** shared-libs (shared diagram.js + text-to-image overlay)
- **Bloom:** Understand (L2)
- **Status:** complete
- **Architecture:** Diagram overlay — dual-panel layout with 14 callouts across 9 meiosis stages (two rows: Meiosis I and Meiosis II)
- **Target:** `docs/sims/meiosis-stages/data.json`

### Specification

Type: shared-libs overlay
**sim-id:** meiosis-stages<br/>
**Library:** shared-libs<br/>

Bloom Level: Understand (L2)
Bloom Verb: identify, describe
Learning Objective: Students will identify each stage of meiosis I and meiosis II by chromosome appearance and describe the key events and chromosome behavior at each stage, including crossing over, independent assortment, and nondisjunction.

Layout: Dual-panel — left panel (7 labels: Meiosis I stages + Meiosis II Prophase/Metaphase) and right panel (7 labels: Meiosis I Anaphase/Telophase + Meiosis II Anaphase/Telophase + conceptual markers). AI-generated landscape image with two rows, stage title overlays, and diagram.js providing Explore, Quiz, and Edit modes.

---

## mitosis-stage-explorer

- **Title:** Mitosis Stage Explorer
- **Chapter:** 10-cell-cycle-mitosis-and-cancer
- **Library:** shared-libs (shared diagram.js + text-to-image overlay)
- **Bloom:** Understand (L2)
- **Status:** complete
- **Architecture:** Diagram overlay — top-bottom layout with 15 callouts across 5 mitosis stages
- **Target:** `docs/sims/mitosis-stage-explorer/data.json`

### Specification

Type: shared-libs overlay
**sim-id:** mitosis-stage-explorer<br/>
**Library:** shared-libs<br/>

Bloom Level: Understand (L2)
Bloom Verb: identify, explain
Learning Objective: Students will identify each stage of mitosis by its chromosome appearance and explain the key molecular events driving each stage, including the role of the spindle assembly checkpoint.

Layout: Top-bottom — 15 callout markers distributed across five horizontal panels (Prophase, Metaphase, Anaphase, Telophase, Cytokinesis). AI-generated landscape image with stage title overlays and diagram.js providing Explore, Quiz, and Edit modes.

---

## signal-transduction-pathway

- **Title:** Signal Transduction Pathway Overview
- **Chapter:** 09-cell-signaling-and-feedback
- **Library:** shared-libs (shared diagram.js + text-to-image overlay)
- **Bloom:** Understand (L2)
- **Status:** complete
- **Architecture:** Diagram overlay — dual-panel layout with 13 callouts
- **Target:** `docs/sims/signal-transduction-pathway/data.json`

### Specification

Type: shared-libs overlay
**sim-id:** signal-transduction-pathway<br/>
**Library:** shared-libs<br/>

Bloom Level: Understand (L2)
Bloom Verb: describe
Learning Objective: Students will describe the three stages of cell signaling — reception, transduction, response — and identify the role of each molecular component in the GPCR-cAMP pathway.

Layout: Dual-panel — left panel (6 labels: ligand, GPCR, cell membrane, G-protein inactive, active Gα-GTP, adenylyl cyclase) and right panel (7 labels: cAMP, PKA, phosphorylation cascade, target enzyme, nucleus, transcription factors, gene expression). AI-generated landscape image with diagram.js overlay providing Explore, Quiz, and Edit modes.

---

## enzyme-regulation-simulator

- **Title:** Enzyme Regulation Simulator
- **Chapter:** 06-thermodynamics-and-enzymes
- **Library:** p5.js
- **Bloom:** Analyze (L4)
- **Status:** complete
- **Target:** `docs/sims/enzyme-regulation-simulator/enzyme-regulation-simulator.js`

### Specification

Type: microsim
**sim-id:** enzyme-regulation-simulator<br/>
**Library:** p5.js<br/>

Learning Objective: Students differentiate competitive inhibition, noncompetitive inhibition, and allosteric feedback inhibition by comparing their effects on enzyme kinetics and explaining which regulatory mechanism fits each metabolic context.

Canvas layout:
- Top strip (20%): Mode cards for “No Inhibition”, “Competitive”, “Noncompetitive”, “Feedback Inhibition”
- Center panel (55%): Split view — left enzyme schematic (active site, allosteric site, substrate, inhibitor), right Michaelis–Menten curve with live probe dot
- Bottom panel (25%): Text box summarizing effects on Vmax and Km plus a metabolic context sentence

Visual elements:
- Enzyme schematic shows substrate/inhibitor placement, allosteric binding, dashed links, and shape shifts
- Kinetics graph plots baseline vs. mode-specific curves (competitive: right-shifted Km; noncompetitive/feedback: lower Vmax with dashed purple curve)
- Slider controls inhibitor concentration to modulate curve deviation; probe slider adjusts [S] readout

Controls & Behavior:
- Four mode buttons, inhibitor slider (0–100%), probe [S] slider, and Start Simulation button
- Switching modes updates schematic, curves, and info panel simultaneously; sliders drive real-time curve/probe updates
- Feedback mode adds product-loop annotation showing negative feedback arrow

Responsive Design: Canvas width adapts to iframes with continuous gutters; `updateCanvasSize()` + `positionControls()` realign top strip cards, split panels, and two-row control deck across 450–1200 px while preserving 20 px spacing between regions.

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
- **Library:** shared-libs (shared diagram.js + text-to-image overlay)
- **Bloom:** Understand (L2)
- **Status:** complete
- **Architecture:** Diagram overlay — use shared `shared-libs/diagram.js` with `data.json` callouts
- **Target:** `docs/sims/cell-membrane/data.json`

---

## chloroplast

- **Title:** Chloroplast Structure
- **Chapter:** 07-photosynthesis
- **Library:** shared-libs (shared diagram.js + text-to-image overlay)
- **Bloom:** Understand (L2)
- **Status:** complete
- **Architecture:** Diagram overlay — use shared `shared-libs/diagram.js` with `data.json` callouts
- **Target:** `docs/sims/chloroplast/data.json`

---

## mitochondria

- **Title:** Mitochondria Structure
- **Chapter:** 08-cellular-respiration
- **Library:** shared-libs (shared diagram.js + text-to-image overlay)
- **Bloom:** Understand (L2)
- **Status:** complete
- **Architecture:** Diagram overlay — use shared `shared-libs/diagram.js` with `data.json` callouts
- **Target:** `docs/sims/mitochondria/data.json`

---

## prokaryote-eukaryote-comparison

- **Title:** Prokaryote vs. Eukaryote Cell Comparison
- **Chapter:** 04-cell-organization-and-organelles
- **Library:** shared-libs (shared diagram.js + text-to-image overlay)
- **Bloom:** Analyze (L4)
- **Status:** complete
- **Architecture:** Diagram overlay — use shared `shared-libs/diagram.js` with `data.json` callouts
- **Target:** `docs/sims/prokaryote-eukaryote-comparison/data.json`

---

## endomembrane-system

- **Title:** Endomembrane System — Protein Secretion Pathway
- **Chapter:** 04-cell-organization-and-organelles
- **Library:** shared-libs (shared diagram.js + text-to-image overlay)
- **Bloom:** Understand (L2)
- **Status:** complete
- **Architecture:** Diagram overlay — use shared `shared-libs/diagram.js` with `data.json` callouts
- **Target:** `docs/sims/endomembrane-system/data.json`

---

## cytoskeleton-explorer

- **Title:** Cytoskeleton Component Explorer
- **Chapter:** 04-cell-organization-and-organelles
- **Library:** shared-libs (shared diagram.js + text-to-image overlay)
- **Bloom:** Understand (L2)
- **Status:** complete
- **Architecture:** Diagram overlay — use shared `shared-libs/diagram.js` with `data.json` callouts
- **Target:** `docs/sims/cytoskeleton-explorer/data.json`

---

## sodium-potassium-pump

- **Title:** Sodium-Potassium Pump Cycle
- **Chapter:** 05-cell-membranes-and-transport
- **Library:** shared-libs (shared diagram.js + text-to-image overlay)
- **Bloom:** Understand (L2)
- **Status:** complete
- **Architecture:** Diagram overlay — use shared `shared-libs/diagram.js` with `data.json` callouts
- **Target:** `docs/sims/sodium-potassium-pump/data.json`

---

## cell-junctions-explorer

- **Title:** Cell Junctions Explorer
- **Chapter:** 05-cell-membranes-and-transport
- **Library:** shared-libs (shared diagram.js + text-to-image overlay)
- **Bloom:** Analyze (L4)
- **Status:** complete
- **Architecture:** Diagram overlay — use shared `shared-libs/diagram.js` with `data.json` callouts (dual-panel layout)
- **Target:** `docs/sims/cell-junctions-explorer/data.json`

---

## atp-yield-calculator

- **Title:** ATP Yield Calculator
- **Chapter:** 08-cellular-respiration
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** specified
- **Complexity Rating:** 4
- **Target:** `docs/sims/atp-yield-calculator/atp-yield-calculator.js`

### Specification

**Type:** MicroSim (p5.js)<br/>
**sim-id:** atp-yield-calculator<br/>
**Library:** p5.js<br/>

**Learning objective:** Students will be able to *calculate* (Bloom's L3: Apply) the total ATP yield per glucose from cellular respiration, accounting for each stage's contribution.

**Canvas:** 760 × 450 px, responsive.

**Layout:** Vertical table-style visualization with one row per metabolic stage.

**Rows:**
1. Glycolysis: 2 ATP (substrate-level), 2 NADH × 2.5 = 5 ATP (oxidative) = 7 ATP total
2. Pyruvate Oxidation: 0 substrate-level, 2 NADH × 2.5 = 5 ATP (oxidative) = 5 ATP total
3. Krebs Cycle: 2 ATP (substrate-level), 6 NADH × 2.5 = 15 ATP + 2 FADH₂ × 1.5 = 3 ATP (oxidative) = 20 ATP total
4. **Grand Total: ~32 ATP per glucose**

**Columns:** Stage | Substrate-level ATP | NADH → ATP | FADH₂ → ATP | Stage Total

**Visual elements:**
- Color-coded rows: glycolysis (yellow), pyruvate oxidation (orange), Krebs cycle (red/maroon), ETC/oxidative phosphorylation (purple)
- Running total shown in bold bottom row
- "Modern estimate (~32)" vs "Classic estimate (~38)" toggle button that updates NADH and FADH₂ conversion factors and re-totals
- Pie chart (right side) showing proportion of ATP from each stage

**Interaction:**
- Slider for NADH → ATP conversion factor (1.5–3 range) with live recalculation
- Slider for FADH₂ → ATP conversion factor (1.0–2.0 range) with live recalculation
- Hover over any row for a brief explanation of where that stage occurs

**Responsive design:** Column widths scale proportionally. Pie chart radius scales with available space.

---

> NOTE: Implementation complete; responsive table label placement still pending refinement.


## glycolysis-simulator

- **Title:** Glycolysis Pathway Simulator
- **Chapter:** 08-cellular-respiration
- **Library:** p5.js
- **Bloom:** Understand (L2)
- **Status:** specified
- **Complexity Rating:** 5
- **Target:** `docs/sims/glycolysis-simulator/glycolysis-simulator.js`

### Specification

**Type:** MicroSim (p5.js)<br/>
**sim-id:** glycolysis-simulator<br/>
**Library:** p5.js with images of glucose generated by text-to-image tool<br/>

**Learning objective:** Students will be able to *describe* (Bloom's L2: Understand) the inputs, outputs, and net energy yield of glycolysis, distinguishing the investment phase from the payoff phase.

**Canvas:** 760 × 420 px, responsive.

**Layout:** Three columns: left (energy investment phase, reactions 1–5 shaded red/pink), center divider showing glucose cleavage, right (energy payoff phase, reactions 6–10 shaded green).

**Visual elements:**
- Hexagon icon for glucose at top-left; arrow flow downward through 10 numbered steps
- Each step shows: substrate name → enzyme name → product name
- ATP consumed shown as red "−ATP" badges at steps 1 and 3
- ATP produced shown as green "+ATP" badges at steps 7 and 10 (×2 each because 2 G3P)
- NADH produced shown as blue "+NADH" badge at step 6 (×2)
- Net tally panel at bottom: "Net ATP: +2", "Net NADH: +2", "Net Pyruvate: 2"

**Interaction:**
- Click any numbered step to expand a tooltip panel showing the full reaction equation, enzyme name, and cofactor requirement
- Toggle button: "Show Investment Phase" / "Show Payoff Phase" highlights the relevant half of the pathway
- "Reset" button returns all steps to default state

**Color coding:** Investment phase background light coral (#FFCCCC); payoff phase background light green (#CCFFCC); NADH badges blue (#4A90D9); ATP badges gold (#F5A623)

---
## surface-area-volume-ratio

- **Title:** Surface Area to Volume Ratio Explorer
- **Chapter:** 04-cell-organization-and-organelles
- **Library:** p5.js
- **Bloom:** Apply (L3)
- **Status:** complete
- **Target:** `docs/sims/surface-area-volume-ratio/surface-area-volume-ratio.js`

### Specification

Type: microsim
**sim-id:** surface-area-volume-ratio<br/>
**Library:** p5.js<br/>

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
- Checkbox: "Show comparison cell" — adds a fixed 1 µm reference cube to the left panel
- Checkbox: "Show calculation formulas" — reveals the formulas SA = 6s², V = s³, SA:V = 6/s below the numerical display
- Start/Stop button: begins and pauses the rotation/scaling animation for the cube

Behavior:
- As slider increases, cube scales up, bar chart updates, SA:V ratio display updates with color change
- When side length > 5 µm, red warning text appears: "Diffusion too slow — cell must compartmentalize or shrink."

Responsive design: Canvas width and controls respond to window resize events; bar chart and warning/status strip span the full drawing region.

---
## feedback-loop-simulator

- **Title:** Feedback Loop Simulator
- **Chapter:** 09-cell-signaling-and-feedback
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** complete
- **Target:** `docs/sims/feedback-loop-simulator/feedback-loop-simulator.js`

### Specification

**Type:** MicroSim (p5.js)<br/>
**sim-id:** feedback-loop-simulator<br/>
**Library:** p5.js<br/>

**Learning objective:** Students will be able to *compare* (Bloom's L4: Analyze) negative and positive feedback loops, predict how each type responds to a perturbation, and identify real biological examples of each.

**Canvas:** 760 × 480 px, responsive.

**Layout:** Left panel: causal loop diagram (circular arrow showing stimulus → detector → response → effector → stimulus). Right panel: time-series graph showing the variable over time.

**Controls:**
- Start Simulation/Pause Simulation
- Toggle buttons: "Negative Feedback" / "Positive Feedback"
- Dropdown: choose example (Negative: blood glucose, thermoregulation, enzyme inhibition; Positive: action potential, blood clotting, childbirth)
- "Apply perturbation" button: introduces a step increase or decrease in the stimulus variable
- "Reset" button: returns system to initial state

**Negative feedback behavior:**
- Time graph shows an oscillating damped curve that returns to set point after perturbation
- Causal Loop diagram arrow labeled "dampens/opposes" with a "B" in the center for "Balance"
- Color: blue (stabilizing)

**Positive feedback behavior:**
- Time graph shows an exponential/sigmoidal curve that moves away from baseline and may plateau (all-or-nothing)
- Loop diagram arrow labeled "amplifies/reinforces" with a "R" in the center for "Reinforce"
- Color: orange (amplifying)

**Labels on graph:** Set point (horizontal dashed line), perturbation marker (vertical dashed line), response curve.

**Interaction:**
- Selecting a different example redraws the graph with that system's characteristic dynamics
- Hover over any point on the graph to see the system state at that time
- Click on loop diagram nodes (stimulus, detector, response, effector) for explanatory tooltips

**Responsive design:** Graph and loop diagram scale proportionally with container width.

**Note:** focus on drawing high quality circular arrows between the items in the left-side causal loop diagram

**For Lesson Plan:** show a link to the Systems Thinking course https://dmccreary.github.io/systems-thinking/

---
## ecological-succession

- **Title:** Ecological Succession Timeline
- **Chapter:** 19-community-ecology-and-species-interactions
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** complete
- **Target:** `docs/sims/ecological-succession/ecological-succession.js`

### Specification

**Type:** MicroSim (p5.js)<br/>
**sim-id:** ecological-succession<br/>
**Library:** p5.js<br/>

**Learning objective:** Students will be able to *compare* (Bloom's L4: Analyze) primary and secondary succession and *sequence* (Bloom's L1: Remember) the stages from pioneer community to climax community.

**Instructional Rationale:** An animated landscape that transforms through succession stages — with species appearing and disappearing — makes the temporal scale and gradual nature of succession visually compelling.

**Canvas:** 780 × 440 px, responsive.

**Layout:**

- Top: Toggle — "Primary Succession" / "Secondary Succession"
- Center: Landscape illustration showing terrain, soil depth, and vegetation at each stage
  - 5 stages (slides or smooth animation)
  - Primary: bare rock → lichens/mosses → grasses → shrubs → forest
  - Secondary: disturbed field → grasses/annuals → shrubs → young forest → mature forest
- Bottom: Timeline bar with stage labels and approximate time scales
- Right panel: Species list for current stage with brief descriptions

**Interaction:**
- Click or drag along the timeline to advance through stages
- "Compare" mode: primary and secondary shown side by side, aligned by time axis (showing secondary is faster)
- Hover over any plant/animal icon: species name and role in succession
- Soil depth indicator bar that grows through stages (primary) or stays constant (secondary)

**Colors:** Bare rock: gray. Lichens/mosses: light green. Grasses: yellow-green. Shrubs: medium green. Forest: dark green. Soil: brown gradient increasing in depth.

**Responsive design:** Landscape and timeline scale with container; comparison mode stacks vertically on narrow screens.

---

## biotech-toolkit

- **Title:** Biotechnology Toolkit Workflow
- **Chapter:** 14-mutations-gene-regulation-and-biotechnology
- **Library:** Mermaid.js
- **Bloom:** Analyze (L4)
- **Status:** complete
- **Target:** `docs/sims/biotech-toolkit/main.html`

### Specification

**Type:** Workflow diagram (Mermaid.js)<br/>
**sim-id:** biotech-toolkit<br/>
**Library:** Mermaid.js<br/>

**Learning objective:** Students will be able to *organize* (Bloom's L4: Analyze) the major biotechnology tools into a logical workflow and *explain* (Bloom's L2: Understand) how each tool contributes to a gene cloning or gene editing experiment.

Layout: 2/3 diagram panel + 1/3 info panel. Two parallel tracks (Gene Cloning in blue, Gene Editing in green) with shared tools in purple (PCR, Gel Electrophoresis, DNA Sequencing). Dashed lines connect shared tools between tracks. Hover any node for detailed tool descriptions in the info panel. Color-coded legend in the info panel.

---

## light-dependent-reactions

- **Title:** Light-Dependent Reactions (Z-Scheme)
- **Chapter:** 07-photosynthesis
- **Library:** p5.js
- **Bloom:** Understand (L2)
- **Status:** complete
- **Target:** `docs/sims/light-dependent-reactions/light-dependent-reactions.js`

### Specification

Type: microsim (p5.js)<br/>
**sim-id:** light-dependent-reactions<br/>
**Library:** p5.js<br/>

**Learning objective:** Students will trace the path of an electron from water through PSII, the electron transport chain, and PSI to NADPH, identifying each carrier molecule, the direction of proton pumping, and where ATP and NADPH are produced.

Layout: Z-scheme energy diagram (upper left, 70%) with reduction potential y-axis (-1.5V to +1.0V) and 10 carrier nodes in zig-zag path. Thylakoid membrane schematic (lower left) with PSII, Cyt b6f, PSI, and ATP synthase. Info panel (right, 30%) with step title, description, equation, and running product tally. 6-step step-through with Previous/Next/Play All/Reset buttons. Photon arrows, proton pumping arrows, and product labels appear progressively.

---
