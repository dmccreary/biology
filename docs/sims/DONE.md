# MicroSim DONE — Completed Implementations

**Completed:** 58 MicroSims

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

## dihybrid-cross

- **Title:** Dihybrid Cross Outcome Visualizer
- **Chapter:** 11-meiosis-and-mendelian-genetics
- **Library:** Chart.js
- **Bloom:** Create (L6)
- **Status:** implemented
- **Complexity Rating:** 5
- **Target:** `docs/sims/dihybrid-cross/dihybrid-cross.js`

### Specification

**Type:** MicroSim (Chart.js)<br/>
**sim-id:** dihybrid-cross<br/>
**Library:** Chart.js<br/>

**Learning objective:** Students will be able to *analyze* (Bloom's L4: Analyze) the phenotypic outcomes of a dihybrid cross and *compare* expected ratios with observed proportions.

**Instructional Rationale:** A bar chart visualization paired with a Punnett square grid allows students to connect the grid method to quantitative outcomes. Seeing both the 16-cell grid and the resulting bar chart reinforces the 9:3:3:1 pattern.

**Canvas:** 760 × 460 px, responsive.

**Layout:**

- Top: Configurable parent genotypes (2 loci, dropdown selectors for each allele)
- Left panel: 4×4 Punnett square grid showing all 16 offspring genotypes
- Right panel: Stacked bar chart showing phenotypic ratio
  - X-axis: phenotype categories
  - Y-axis: count out of 16
  - Color-coded bars matching phenotype

**Data Visibility:**
- Grid cells show genotype text
- Clicking a phenotype category in the bar chart highlights all corresponding cells in the Punnett grid
- Summary text: "Expected ratio: 9:3:3:1" with actual counts

**Interaction:**
- Change parent genotypes → grid and chart update immediately
- Hover bars for exact counts and percentages
- Toggle "Show genotypes" / "Show phenotypes" in the grid

**Colors:**
- Round yellow: gold (#F4D03F)
- Round green: green (#2ECC71)
- Wrinkled yellow: orange (#E67E22)
- Wrinkled green: brown (#A04000)

**Responsive design:** Grid and chart scale with container width, chart reflows below grid on narrow screens.

---

## test-cross-simulator

- **Title:** Test Cross Simulator
- **Chapter:** 11-meiosis-and-mendelian-genetics
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** implemented
- **Complexity Rating:** 6
- **Target:** `docs/sims/test-cross-simulator/test-cross-simulator.js`

### Specification

**Type:** MicroSim (p5.js)<br/>
**sim-id:** test-cross-simulator<br/>
**Library:** p5.js<br/>

**Learning objective:** Students will be able to *apply* (Bloom's L3: Apply) the test cross procedure to determine an unknown genotype, and *evaluate* (Bloom's L5: Evaluate) observed offspring ratios to distinguish homozygous from heterozygous parents.

**Instructional Rationale:** A simulation approach lets students perform multiple test crosses and observe the statistical patterns that distinguish AA from Aa genotypes. Generating offspring one at a time creates engagement and mirrors real experimental uncertainty.

**Canvas:** 780 × 460 px, responsive.

**Layout:**

- Left panel: "Mystery parent" box showing dominant phenotype with unknown genotype ("T?")
- Center: Cross diagram showing the mystery parent × homozygous recessive parent
- Right panel: Offspring tally and running ratio

**Interaction:**
- "Generate Offspring" button: produces one offspring at a time with genotype revealed after a brief delay
- After 20+ offspring, a "Reveal Genotype" button appears
- Confidence meter: as offspring accumulate, shows statistical confidence in the determination
- "New Mystery" button: randomizes the mystery parent's genotype (50% chance AA, 50% chance Aa)
- Trait selector dropdown: choose from 3 sample traits (seed shape, flower color, plant height)

**Data Visibility:**
- Running tally: Dominant: X, Recessive: Y
- Running ratio displayed as "X : Y"
- After reveal: explanation of the statistical reasoning

**Colors:** Dominant phenotype offspring: green. Recessive phenotype offspring: tan. Mystery parent: purple with "?" overlay.

**Responsive design:** Width responsive design so the MicroSim can be used within a fixed-height iframe.

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


---

## mendel-meiosis-map

- **Title:** Mendel-to-Meiosis Concept Map
- **Chapter:** 11-meiosis-and-mendelian-genetics
- **Library:** vis-network
- **Bloom:** Create (L6)
- **Status:** specified
- **Complexity Rating:** 5
- **Target:** `docs/sims/mendel-meiosis-map/mendel-meiosis-map.js`

### Specification

**Type:** Infographic (vis-network)<br/>
**sim-id:** mendel-meiosis-map<br/>
**Library:** vis-network<br/>

**Learning objective:** Students will be able to *analyze* (Bloom's L4: Analyze) the connections between meiotic events and Mendelian inheritance principles, and *explain* how chromosome behavior provides the physical basis for Mendel's laws.

**Instructional Rationale:** A network graph allows students to see the many-to-many relationships between meiotic events and genetic outcomes. Hovering over nodes reveals detailed descriptions, supporting deeper understanding than a linear text treatment.

**Canvas:** 760 × 420 px, responsive.

**Layout:** Force-directed graph with two clusters:

- Left cluster (blue nodes): Meiotic events
  - Homolog pairing (Prophase I)
  - Crossing over
  - Random orientation (Metaphase I)
  - Homolog separation (Anaphase I)
  - Sister chromatid separation (Anaphase II)

- Right cluster (green nodes): Genetic outcomes
  - Law of Segregation
  - Law of Independent Assortment
  - Genetic recombination
  - Haploid gametes
  - Genetic diversity

**Edges:** Labeled arrows showing causal relationships (e.g., "Homolog separation" → "Law of Segregation," labeled "physical basis")

**Interaction:**
- Hover over any node: display a 2–3 sentence description in a tooltip
- Click a node: highlight all connected nodes and edges, dim others
- Drag nodes to rearrange

**Colors:** Meiosis nodes: blue (#5DADE2). Genetics nodes: green (#58D68D). Edges: gray, becoming colored when highlighted.

**Responsive design:** Graph layout recalculates on window resize using vis-network physics.

---

## x-linked-inheritance

- **Title:** X-Linked Inheritance Simulator
- **Chapter:** 12-non-mendelian-and-chromosomal-genetics
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** specified
- **Complexity Rating:** 6
- **Target:** `docs/sims/x-linked-inheritance/x-linked-inheritance.js`

### Specification

**Type:** MicroSim (p5.js)<br/>
**sim-id:** x-linked-inheritance<br/>
**Library:** p5.js<br/>

**Learning objective:** Students will be able to *apply* (Bloom's L3: Apply) X-linked inheritance patterns to predict offspring genotypes and phenotypes, and *analyze* (Bloom's L4: Analyze) why X-linked recessive traits appear more frequently in males.

**Instructional Rationale:** An interactive cross tool that visually shows the X and Y chromosomes traveling from parents to offspring reinforces the physical basis for sex-linked inheritance patterns. Seeing the asymmetry between sons and daughters builds intuition.

**Canvas:** 780 × 500 px, responsive.

**Layout:**

- Top: Parent genotype selectors
  - Mother: dropdown ($X^B X^B$, $X^B X^b$, $X^b X^b$)
  - Father: dropdown ($X^B Y$, $X^b Y$)
- Center: Animated cross diagram showing chromosomes passing from each parent
  - Mother's two X chromosomes shown as pink bars with allele labels
  - Father's X and Y shown as blue bars
  - Arrows trace which chromosome goes to each offspring
- Bottom: Punnett square with results; offspring shown as icons with phenotype coloring

**Interaction:**
- Select parental genotypes → cross auto-animates
- "Step Through" mode: shows gamete formation, then fertilization one offspring at a time
- Toggle between 3 X-linked traits: color blindness, hemophilia, Duchenne muscular dystrophy
- Offspring tally: count of each phenotype/genotype class

**Colors:** Normal phenotype: green. Affected phenotype: red-orange. Carrier: green with orange border.

**Responsive design:** Chromosome diagrams and Punnett square scale proportionally.

---

## polygenic-distribution

- **Title:** Polygenic Trait Distribution Visualizer
- **Chapter:** 12-non-mendelian-and-chromosomal-genetics
- **Library:** Chart.js
- **Bloom:** Create (L6)
- **Status:** specified
- **Complexity Rating:** 6
- **Target:** `docs/sims/polygenic-distribution/polygenic-distribution.js`

### Specification

**Type:** MicroSim (Chart.js)<br/>
**sim-id:** polygenic-distribution<br/>
**Library:** Chart.js<br/>

**Learning objective:** Students will be able to *explain* (Bloom's L2: Understand) how increasing the number of contributing genes transforms a discrete phenotype distribution into a continuous bell curve, and *compare* (Bloom's L4: Analyze) polygenic inheritance with single-gene Mendelian patterns.

**Instructional Rationale:** A slider-controlled visualization showing how the phenotype distribution changes as the number of genes increases from 1 to 5+ builds an intuitive bridge between Mendelian ratios and continuous variation. Seeing the transition happen dynamically is far more instructive than a static figure.

**Canvas:** 760 × 440 px, responsive.

**Layout:**

- Top: Slider labeled "Number of contributing genes" (range: 1 to 6)
- Center: Bar chart / histogram showing phenotype distribution
  - X-axis: Phenotype value (e.g., number of "additive alleles" from 0 to 2n)
  - Y-axis: Frequency (proportion of offspring)
- Bottom: Summary text: number of phenotypic classes, standard deviation, shape description

**Data Visibility Requirements:**

- 1 gene (2 alleles): 3 phenotypic classes in 1:2:1 ratio (Mendelian)
- 2 genes: 5 classes in 1:4:6:4:1 ratio
- 3 genes: 7 classes approximating a bell curve
- 4+ genes: smooth normal distribution
- At each step, show the mathematical expansion (binomial coefficients) alongside the histogram

**Interaction:**
- Slider adjusts gene number → histogram animates the transition
- Hover over bars for exact frequency values
- Toggle: overlay a normal distribution curve for comparison at 3+ genes
- "Show Math" toggle: display binomial expansion beneath the chart

**Colors:** Bars gradient from light (few additive alleles) to dark (many additive alleles) in a green-to-brown skin color gradient (for the skin color example). A neutral blue palette is the default.

**Responsive design:** Chart width and bar counts scale with container.

---

## linkage-mapper

- **Title:** Genetic Linkage and Recombination Mapper
- **Chapter:** 12-non-mendelian-and-chromosomal-genetics
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** specified
- **Complexity Rating:** 8
- **Target:** `docs/sims/linkage-mapper/linkage-mapper.js`

### Specification

**Type:** MicroSim (p5.js)<br/>
**sim-id:** linkage-mapper<br/>
**Library:** p5.js<br/>

**Learning objective:** Students will be able to *calculate* (Bloom's L3: Apply) recombination frequencies from offspring data and *construct* (Bloom's L6: Create) a genetic linkage map showing relative positions of genes on a chromosome.

**Instructional Rationale:** A hands-on mapping tool where students enter test cross data and see the resulting chromosome map builds both calculation skills and spatial understanding of gene arrangement. The ability to drag genes along the chromosome reinforces the relationship between RF and physical distance.

**Canvas:** 780 × 480 px, responsive.

**Layout:**

- Top: Data entry panel — three gene pairs with text inputs for recombinant and total offspring counts
  - Gene pair A-B: recombinant count / total count
  - Gene pair B-C: recombinant count / total count
  - Gene pair A-C: recombinant count / total count
- Center: Chromosome visualization — a horizontal bar with gene markers positioned according to calculated map distances
- Bottom: Results table showing RF for each pair and resulting map distances in cM

**Data Visibility Requirements:**

- Step 1: Enter offspring counts → RF calculated automatically
- Step 2: Map distances displayed in cM
- Step 3: Gene order determined (the largest RF = the outside genes)
- Step 4: Genes positioned on chromosome bar proportionally

**Interaction:**
- Enter test cross data → RFs auto-calculate
- Genes animate into position on the chromosome map
- "Load Example" button with 3 preset problems (Drosophila body color/wing shape/eye color)
- Drag gene markers to test alternative orderings — correct order highlighted in green
- Verify: does A-B + B-C ≈ A-C? Display consistency check

**Preset data (Drosophila example):**
- body color – wing shape: RF = 17%
- wing shape – eye color: RF = 9.5%
- body color – eye color: RF = 26.5%
- Map order: body color — 17 cM — wing shape — 9.5 cM — eye color

**Colors:** Genes: distinct colored markers. Chromosome: gray bar. RF labels: black text.

**Responsive design:** Chromosome bar length and font sizes scale proportionally.

---

## nondisjunction

- **Title:** Nondisjunction in Meiosis Visualizer
- **Chapter:** 12-non-mendelian-and-chromosomal-genetics
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** specified
- **Complexity Rating:** 7
- **Target:** `docs/sims/nondisjunction/nondisjunction.js`

### Specification

**Type:** MicroSim (p5.js)<br/>
**sim-id:** nondisjunction<br/>
**Library:** p5.js<br/>

**Learning objective:** Students will be able to *differentiate* (Bloom's L4: Analyze) between nondisjunction in meiosis I versus meiosis II and *predict* the chromosomal composition of the resulting gametes.

**Instructional Rationale:** A side-by-side comparison of normal meiosis, nondisjunction in meiosis I, and nondisjunction in meiosis II — all shown step-by-step — allows students to pinpoint exactly where the error occurs and trace its consequences through both divisions.

**Canvas:** 800 × 500 px, responsive.

**Layout:** Three parallel columns showing the same cell progressing through meiosis:

- Column 1: **Normal meiosis** (control)
- Column 2: **Nondisjunction in meiosis I** — homologs fail to separate
- Column 3: **Nondisjunction in meiosis II** — sister chromatids fail to separate

**Data Visibility Requirements:**

- Start: All three columns show a diploid cell with 2n=4 (2 homologous pairs, color-coded)
- After meiosis I: Column 1 shows two normal haploid cells; Column 2 shows one cell with both homologs and one empty; Column 3 shows two normal haploid cells (error hasn't happened yet)
- After meiosis II: Column 1 shows four normal gametes (n=2 each); Column 2 shows two n+1 gametes and two n-1 gametes; Column 3 shows one n+1, one n-1, and two normal gametes
- Chromosome counts displayed below each cell

**Interaction:**
- Next/Previous buttons to step through stages (synchronized across columns)
- Highlight the error step with a red flash
- "Show Fertilization" button: shows what happens when each abnormal gamete is fertilized by a normal gamete (trisomy or monosomy)
- Toggle: show a single chromosome pair or two pairs

**Colors:** Maternal chromosomes: pink. Paternal chromosomes: blue. Error highlight: red glow. Normal gamete: green border. Abnormal gamete: red border.

**Responsive design:** Three columns collapse to a tab interface on narrow screens.

---

## pedigree-analyzer

- **Title:** Interactive Pedigree Analyzer
- **Chapter:** 12-non-mendelian-and-chromosomal-genetics
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** specified
- **Complexity Rating:** 9
- **Target:** `docs/sims/pedigree-analyzer/pedigree-analyzer.js`

### Specification

**Type:** MicroSim (p5.js)<br/>
**sim-id:** pedigree-analyzer<br/>
**Library:** p5.js<br/>

**Learning objective:** Students will be able to *analyze* (Bloom's L4: Analyze) pedigree diagrams to determine the most likely mode of inheritance, and *evaluate* (Bloom's L5: Evaluate) whether observed patterns are consistent with autosomal dominant, autosomal recessive, or X-linked recessive inheritance.

**Instructional Rationale:** Presenting multiple pedigrees that students must classify builds the diagnostic reasoning skills tested on the AP exam. The immediate feedback loop — guess the pattern, then check — reinforces the distinguishing clues for each inheritance mode.

**Canvas:** 800 × 520 px, responsive.

**Layout:**

- Top: Pedigree display area — standard 3-generation pedigree drawn with standard symbols
- Center: Multiple-choice selection panel — four buttons: Autosomal Dominant, Autosomal Recessive, X-Linked Recessive, X-Linked Dominant
- Bottom: Explanation panel — after the student selects, shows why the answer is correct (or why it's incorrect with a hint)

**Interaction:**
- "New Pedigree" button: loads one of 10+ pre-built pedigrees (randomized order)
- Student clicks an inheritance pattern → immediate feedback
- Correct: green highlight, explanation of the key clues
- Incorrect: red highlight, hint pointing to a specific feature they should look at (e.g., "Notice that the trait skips generation II — what does that suggest?")
- Hover over any individual in the pedigree: shows inferred genotype (after answer is revealed)
- Score tracker: correct / total attempts
- Difficulty selector: Easy (clear-cut patterns) / Hard (ambiguous with carrier inference required)

**Pedigree data:** 12 pre-built pedigrees stored as JSON:
- 3 autosomal dominant
- 3 autosomal recessive
- 3 X-linked recessive
- 3 X-linked dominant

Each pedigree object includes: nodes (generation, position, sex, affected status, genotype), edges (parent-child, mating), and correct inheritance pattern.

**Colors:** Unaffected: white fill. Affected: dark fill (#2C3E50). Carrier (revealed): half-fill. Correct answer: green glow. Incorrect: red glow.

**Responsive design:** Pedigree node sizes and spacing scale with container. On narrow screens, explanation panel appears below.

---

## genetic-code-table

- **Title:** Genetic Code Table Explorer
- **Chapter:** 13-central-dogma-replication-and-protein-synthesis
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** specified
- **Complexity Rating:** 7
- **Target:** `docs/sims/genetic-code-table/genetic-code-table.js`

### Specification

**Type:** MicroSim (p5.js)<br/>
**sim-id:** genetic-code-table<br/>
**Library:** p5.js<br/>

**Learning objective:** Students will be able to *use* (Bloom's L3: Apply) the genetic code table to translate an mRNA sequence into an amino acid sequence, and *explain* (Bloom's L2: Understand) the properties of the genetic code including redundancy and universality.

**Instructional Rationale:** An interactive codon table where students can click codons to see the corresponding amino acid (and vice versa) builds fluency with reading the table — a skill directly tested on the AP exam. The mRNA translation tool provides immediate practice.

**Canvas:** 780 × 480 px, responsive.

**Layout:**

- Left: Standard 4×4×4 codon table (nested: first base on rows, second base on columns, third base within each cell)
  - Each cell shows the codon and one-letter amino acid abbreviation
  - Color-coded by amino acid property: hydrophobic (yellow), polar (green), charged (blue/red), special (gray)
- Right panel: mRNA Translator
  - Text input field for mRNA sequence (e.g., AUGGCUAACUAG)
  - Below input: parsed codons displayed in colored boxes
  - Below codons: corresponding amino acids
  - Start codon (AUG) highlighted in green; stop codons highlighted in red

**Interaction:**
- Click any cell in the codon table → highlights the amino acid and shows full name, abbreviation, properties
- Type or paste mRNA sequence → auto-translated below, codon by codon
- "Random Sequence" button for practice
- "Introduce Mutation" button: changes one base and shows how the amino acid sequence changes
- Hover over any amino acid in the translation to see which codon specified it

**Colors:** Hydrophobic amino acids: yellow (#F9E79F). Polar: green (#ABEBC6). Positively charged: blue (#AED6F1). Negatively charged: red (#F5B7B1). Start (Met): bright green. Stop: bright red.

**Responsive design:** Codon table and translator panel stack vertically on narrow screens.

---

## translation-simulator

- **Title:** Translation Step-Through Simulator
- **Chapter:** 13-central-dogma-replication-and-protein-synthesis
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** specified
- **Complexity Rating:** 8
- **Target:** `docs/sims/translation-simulator/translation-simulator.js`

### Specification

**Type:** MicroSim (p5.js)<br/>
**sim-id:** translation-simulator<br/>
**Library:** p5.js<br/>

**Learning objective:** Students will be able to *describe* (Bloom's L2: Understand) the three stages of translation (initiation, elongation, termination) and *trace* (Bloom's L3: Apply) the movement of tRNAs through the A, P, and E sites as a polypeptide is assembled.

**Instructional Rationale:** Step-through with visible data at each stage is critical — students must see which codon is being read, which tRNA arrives, what amino acid it carries, and how the polypeptide chain grows. Animation without step control would move too fast for learning.

**Canvas:** 800 × 520 px, responsive.

**Layout:**

- Top: mRNA strand displayed horizontally with codons color-coded and labeled
  - Current reading position highlighted with a bracket
  - Start codon (AUG) in green, stop codon in red
- Center: Ribosome diagram showing A, P, E sites
  - tRNAs shown as L-shaped molecules with anticodon at bottom and amino acid at top
  - Growing polypeptide chain shown as colored circles (one per amino acid) connected by lines
- Bottom: Step description panel — stage name, what is happening, which molecules are involved

**Data Visibility Requirements:**

- Initiation: Show small subunit binding mRNA, initiator Met-tRNA entering P site, large subunit joining
- Each elongation cycle: Show incoming tRNA at A site → peptide bond formation → translocation (3 sub-steps per codon)
- Termination: Show stop codon in A site, release factor binding, polypeptide release, ribosome disassembly

**mRNA sequence:** AUGGCUUACAAACGCUGA (encodes Met-Ala-Tyr-Lys-Arg-Stop)

**Interaction:**
- Next/Previous step buttons (sub-step level: codon recognition → peptide bond → translocation)
- "Play All" button with speed control
- Hover over any amino acid in the growing chain: shows the codon that specified it
- "Custom mRNA" button: student enters their own mRNA sequence for translation
- Toggle: show/hide anticodon labels on tRNAs

**Colors:** Each amino acid: distinct color. A site: light blue. P site: light green. E site: light gray. mRNA: dark background with white text.

**Responsive design:** Ribosome diagram and mRNA strand scale with container width.

---

## mutation-effects

- **Title:** Mutation Effects Comparator
- **Chapter:** 14-mutations-gene-regulation-and-biotechnology
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** specified
- **Complexity Rating:** 7
- **Target:** `docs/sims/mutation-effects/mutation-effects.js`

### Specification

**Type:** MicroSim (p5.js)<br/>
**sim-id:** mutation-effects<br/>
**Library:** p5.js<br/>

**Learning objective:** Students will be able to *differentiate* (Bloom's L4: Analyze) among silent, missense, nonsense, and frameshift mutations by observing how each type alters the mRNA codon sequence and resulting amino acid chain.

**Instructional Rationale:** Side-by-side comparison of normal vs. mutant sequences with concrete amino acid data lets students see exactly why a frameshift is more damaging than a point mutation. Interactive mutation placement empowers exploration.

**Canvas:** 800 × 480 px, responsive.

**Layout:**

- Top: Original DNA template strand with codons labeled and amino acids shown below
- Center: Mutation selector panel
  - Buttons: Silent, Missense, Nonsense, Insertion (+1 base), Deletion (-1 base)
  - Click any nucleotide position in the sequence to place the mutation there
- Bottom: Mutant sequence showing changed codons and altered amino acids
  - Changed nucleotides highlighted in red
  - Changed amino acids highlighted in orange
  - Premature stop codons highlighted in bright red

**Data Visibility Requirements:**

- Original sequence: AUGGCUUACCGAAACUGA → Met-Ala-Tyr-Arg-Asn-Stop
- After silent mutation at position 9 (C→U): AUGGCUUAUUGA... → same amino acids
- After missense: one amino acid changes, shown in orange
- After nonsense: premature stop, downstream amino acids grayed out with strikethrough
- After insertion: reading frame shifts, all downstream amino acids change (shown in red), likely premature stop
- After deletion: same as insertion but removing a base

**Interaction:**
- Click mutation type button → click a position → both sequences update
- "Reset" button to clear mutations
- "Compare All" mode: show all 5 mutation types simultaneously for the same position
- Amino acid property labels (hydrophobic, polar, charged) shown on hover

**Colors:** Normal: blue text. Mutated base: red. Changed amino acid: orange. Premature stop: bright red background. Frameshift downstream: all red.

**Responsive design:** Sequences wrap to multiple lines on narrow screens; mutation panel collapses to dropdown.

---

## operon-regulation

- **Title:** Operon Regulation Simulator
- **Chapter:** 14-mutations-gene-regulation-and-biotechnology
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** specified
- **Complexity Rating:** 7
- **Target:** `docs/sims/operon-regulation/operon-regulation.js`

### Specification

**Type:** MicroSim (p5.js)<br/>
**sim-id:** operon-regulation<br/>
**Library:** p5.js<br/>

**Learning objective:** Students will be able to *compare* (Bloom's L4: Analyze) inducible (lac) and repressible (trp) operon regulation, and *predict* (Bloom's L3: Apply) the transcription state of each operon given different environmental conditions.

**Instructional Rationale:** An interactive toggle between lactose/glucose/tryptophan conditions with visible molecular consequences (repressor binding/releasing, RNA polymerase proceeding/blocked) makes abstract regulation logic concrete and testable.

**Canvas:** 800 × 480 px, responsive.

**Layout:**

- Top: Toggle buttons — "Lac Operon" / "Trp Operon"
- Center: Operon diagram showing:
  - Regulatory gene → repressor protein
  - Promoter, operator, structural genes as labeled segments
  - RNA polymerase approaching/transcribing
  - Repressor protein binding/releasing from operator
  - Inducer or corepressor molecules shown
- Bottom: Condition selector panel
  - Lac mode: toggles for Lactose (present/absent) and Glucose (present/absent)
  - Trp mode: toggle for Tryptophan (present/absent)
- Right: Result display — "Operon: ON" or "Operon: OFF" with explanation

**Interaction:**
- Toggle environmental conditions → operon diagram animates to show molecular response
- Repressor visibly attaches/detaches from operator
- RNA polymerase shown transcribing or blocked
- mRNA and protein products appear when operon is ON
- "Quiz Mode" button: presents a condition and asks student to predict ON/OFF before revealing

**Colors:** Promoter: green. Operator: orange. Structural genes: blue. Repressor: red (active) / gray (inactive). Inducer: purple. Corepressor: yellow.

**Responsive design:** Operon diagram scales horizontally; condition panel wraps below on narrow screens.

---

## endosymbiosis-model

- **Title:** Endosymbiosis Model
- **Chapter:** 15-evidence-for-evolution
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** specified
- **Complexity Rating:** 6
- **Target:** `docs/sims/endosymbiosis-model/endosymbiosis-model.js`

### Specification

**Type:** MicroSim (p5.js)<br/>
**sim-id:** endosymbiosis-model<br/>
**Library:** p5.js<br/>

**Learning objective:** Students will be able to *explain* (Bloom's L2: Understand) the endosymbiotic theory and *evaluate* (Bloom's L5: Evaluate) the molecular and structural evidence supporting it.

**Instructional Rationale:** A step-through animation of the engulfment events — with evidence cards appearing at each step — lets students see both the proposed historical events and the evidence that supports each one.

**Canvas:** 780 × 480 px, responsive.

**Layout:**

- Center: Cell diagrams showing the engulfment sequence
- Right panel: Evidence card that updates at each step

**Data Visibility Requirements:**

- Step 1: Ancestral archaeal host cell (with nucleus-like endomembrane) and free-living aerobic bacterium
- Step 2: Host engulfs bacterium via endocytosis → bacterium now inside a double membrane
- Step 3: Over time, the endosymbiont loses independence (gene transfer to host nucleus) → becomes mitochondrion
- Step 4: Evidence card: list the 5 key pieces of evidence with checkmarks
- Step 5: A mitochondria-containing host engulfs a cyanobacterium → becomes chloroplast
- Step 6: Final modern eukaryotic cell with both organelles labeled

**Interaction:**
- Next/Previous step buttons
- At each step, an "Evidence" button shows the relevant supporting evidence
- "Quiz" toggle: at each step, student must select which evidence applies before seeing the answer
- Toggle: highlight the double membrane origin (inner = bacterium, outer = host vesicle)

**Colors:** Host cell: light blue. Aerobic bacterium / mitochondrion: orange. Cyanobacterium / chloroplast: green. Membranes: distinct line colors.

**Responsive design:** Cell diagrams and evidence card scale with container; card reflows below on narrow screens.

---

## hardy-weinberg-calculator

- **Title:** Hardy-Weinberg Equilibrium Calculator
- **Chapter:** 16-population-genetics-and-hardy-weinberg
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** specified
- **Complexity Rating:** 7
- **Target:** `docs/sims/hardy-weinberg-calculator/hardy-weinberg-calculator.js`

### Specification

**Type:** MicroSim (p5.js)<br/>
**sim-id:** hardy-weinberg-calculator<br/>
**Library:** p5.js<br/>

**Learning objective:** Students will be able to *apply* (Bloom's L3: Apply) the Hardy-Weinberg equations to calculate allele and genotype frequencies, and *evaluate* (Bloom's L5: Evaluate) whether a population is in equilibrium.

**Instructional Rationale:** An interactive calculator where students input observed genotype counts and see both expected (HWE) and observed frequencies side by side — with a chi-square test for goodness of fit — connects the abstract equations to data analysis.

**Canvas:** 800 × 500 px, responsive.

**Layout:**

- Top: Input panel — three fields for number of AA, Aa, and aa individuals
- Center left: Calculated values
  - p and q (allele frequencies)
  - Expected genotype frequencies under HWE ($p^2$, $2pq$, $q^2$)
  - Expected genotype counts
- Center right: Bar chart comparing observed vs. expected genotype frequencies
- Bottom: Chi-square goodness-of-fit test result with interpretation

**Interaction:**
- Enter observed counts → all calculations update immediately
- Bar chart animates to show observed (solid) vs. expected (outline) bars
- Chi-square result displayed with p-value and "In equilibrium" / "Not in equilibrium" verdict
- Slider mode: drag a slider for $p$ (0 to 1) → see how genotype frequencies change (parabola visualization)
- "Load Example" button with 3 preset populations (one in HWE, one with selection, one with drift)

**Colors:** AA: dark blue. Aa: medium blue. aa: light blue. Expected bars: dashed outline. HWE line: green if in equilibrium, red if not.

**Responsive design:** Input panel and chart stack vertically on narrow screens.

---

## genetic-drift

- **Title:** Genetic Drift Simulator
- **Chapter:** 16-population-genetics-and-hardy-weinberg
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** specified
- **Complexity Rating:** 9
- **Target:** `docs/sims/genetic-drift/genetic-drift.js`

### Specification

**Type:** MicroSim (p5.js)<br/>
**sim-id:** genetic-drift<br/>
**Library:** p5.js<br/>

**Learning objective:** Students will be able to *analyze* (Bloom's L4: Analyze) how population size affects the rate and magnitude of genetic drift, and *compare* (Bloom's L4) drift outcomes across different population sizes.

**Instructional Rationale:** A stochastic simulation where students run multiple trials and observe the variability of outcomes reinforces that drift is random and its effects are population-size-dependent. Running 10 small populations vs. 10 large populations side by side is dramatically convincing.

**Canvas:** 800 × 480 px, responsive.

**Layout:**

- Top: Controls — population size slider (10 to 10,000, logarithmic), initial $p$ slider (0.1 to 0.9), number of generations slider (10 to 500), number of trials slider (1 to 20)
- Center: Line chart showing allele frequency ($p$) over generations
  - Each trial = one line
  - Multiple trials overlaid to show variability
- Bottom: Summary — number of fixations (p=1), losses (p=0), and current mean $p$

**Interaction:**
- Adjust population size → run simulation → observe drift patterns
- "Run" button starts the simulation; lines grow in real time
- Compare: small population (N=20) with wide spread of lines vs. large population (N=10,000) with tight clustering
- "Bottleneck" button: reduce population size to 10 for 3 generations, then restore — observe the lasting effect
- "Founder Event" button: start a new simulation with N=10 from the current allele frequency

**Colors:** Each trial line: distinct color from a palette. Fixation zone (p=1): green band. Loss zone (p=0): red band.

**Responsive design:** Chart scales with container; sliders stack vertically on narrow screens.

---

## selection-modes

- **Title:** Selection Modes Visualizer
- **Chapter:** 16-population-genetics-and-hardy-weinberg
- **Library:** Chart.js
- **Bloom:** Create (L6)
- **Status:** specified
- **Complexity Rating:** 6
- **Target:** `docs/sims/selection-modes/selection-modes.js`

### Specification

**Type:** MicroSim (Chart.js)<br/>
**sim-id:** selection-modes<br/>
**Library:** Chart.js<br/>

**Learning objective:** Students will be able to *compare* (Bloom's L4: Analyze) the effects of stabilizing, directional, and disruptive selection on a population's phenotype distribution.

**Instructional Rationale:** An animated bell curve that changes shape over generations under each selection mode makes the abstract concept of "shifting the distribution" concrete and visual.

**Canvas:** 760 × 440 px, responsive.

**Layout:**

- Top: Three mode buttons (Stabilizing, Directional, Disruptive)
- Center: Animated bell curve (normal distribution) showing phenotype frequency
  - X-axis: Phenotype value (e.g., body size)
  - Y-axis: Frequency
  - Shaded fitness zones show which phenotypes are favored (green) or selected against (red)
- Bottom: Generation counter and "Run" / "Reset" buttons

**Interaction:**
- Select a mode → fitness zones appear on the bell curve
- "Run" button: animate the distribution changing over 20 generations
  - Stabilizing: curve narrows, peak stays centered
  - Directional: curve shifts left or right
  - Disruptive: curve splits into two peaks (bimodal)
- Speed slider: control animation rate
- "Overlay" toggle: show original distribution as dashed line for comparison

**Colors:** Original distribution: blue. Evolved distribution: green. Fitness zone: green shading. Selection pressure: red shading.

**Responsive design:** Chart scales with container width.

---

## speciation-pathways

- **Title:** Speciation Pathways Comparison
- **Chapter:** 17-speciation-phylogenetics-and-macroevolution
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** specified
- **Complexity Rating:** 6
- **Target:** `docs/sims/speciation-pathways/speciation-pathways.js`

### Specification

**Type:** MicroSim (p5.js)<br/>
**sim-id:** speciation-pathways<br/>
**Library:** p5.js<br/>

**Learning objective:** Students will be able to *compare* (Bloom's L4: Analyze) allopatric and sympatric speciation, and *explain* (Bloom's L2: Understand) how geographic barriers, polyploidy, and habitat differentiation each lead to reproductive isolation.

**Instructional Rationale:** A side-by-side animated comparison of two speciation pathways — one showing a population split by a geographic barrier, the other showing polyploidy within a single population — makes the critical distinction between the two modes visible and memorable.

**Canvas:** 800 × 480 px, responsive.

**Layout:** Two parallel panels:

- Left: "Allopatric Speciation" — shows a population being divided by a geographic barrier (mountain range rises), then diverging over generations (color/shape changes)
- Right: "Sympatric Speciation" — shows a polyploidy event within a population (chromosome doubling), then reproductive isolation developing

**Interaction:**
- "Play" button advances through stages (5 stages each)
- Next/Previous for manual stepping
- At each stage, a text card describes what is happening genetically
- "Quiz" toggle: at each stage, student predicts whether gene flow is still occurring (yes/no)

**Colors:** Population A: blue individuals. Population B (diverged): orange individuals. Geographic barrier: brown. Polyploid individuals: larger circles with extra chromosome lines visible.

**Responsive design:** Panels stack vertically on narrow screens.

---

## cladogram-builder

- **Title:** Interactive Cladogram Builder
- **Chapter:** 17-speciation-phylogenetics-and-macroevolution
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** specified
- **Complexity Rating:** 9
- **Target:** `docs/sims/cladogram-builder/cladogram-builder.js`

### Specification

**Type:** MicroSim (p5.js)<br/>
**sim-id:** cladogram-builder<br/>
**Library:** p5.js<br/>

**Learning objective:** Students will be able to *construct* (Bloom's L6: Create) a cladogram from a character matrix and *interpret* (Bloom's L2: Understand) evolutionary relationships from an existing cladogram.

**Instructional Rationale:** Building a cladogram from raw character data (rather than just reading a pre-made one) develops the reasoning skills tested on the AP exam, where students must interpret or construct phylogenetic trees from data tables.

**Canvas:** 800 × 480 px, responsive.

**Layout:**

- Left panel: Character matrix (table of species × traits, with checkmarks for presence)
  - 6 species (rows)
  - 6 characters (columns)
  - Outgroup identified
- Right panel: Cladogram building area
  - Drag species labels to branch tips
  - Drag trait markers to branches where they evolved

**Pre-loaded example: Vertebrate classification**

| Character | Lamprey (outgroup) | Trout | Frog | Lizard | Pigeon | Mouse |
|---|---|---|---|---|---|---|
| Vertebrae | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Jaws | | ✓ | ✓ | ✓ | ✓ | ✓ |
| Four limbs | | | ✓ | ✓ | ✓ | ✓ |
| Amniotic egg | | | | ✓ | ✓ | ✓ |
| Feathers | | | | | ✓ | |
| Hair/Mammary glands | | | | | | ✓ |

**Interaction:**
- Drag species to correct positions on the cladogram
- Drag trait markers to the correct branches (where the trait first evolved)
- "Check" button verifies the student's cladogram against the correct solution
- Incorrect placements highlighted with red; hints provided
- 3 pre-loaded datasets of increasing difficulty
- "Molecular Data" toggle: replaces morphological traits with DNA sequence similarity percentages

**Colors:** Each trait: distinct color marker. Correct placement: green flash. Incorrect: red shake. Outgroup: gray.

**Responsive design:** Character matrix and cladogram stack vertically on narrow screens.

---

## population-growth

- **Title:** Population Growth Model Explorer
- **Chapter:** 18-population-ecology-and-life-history
- **Library:** Chart.js
- **Bloom:** Create (L6)
- **Status:** specified
- **Complexity Rating:** 6
- **Target:** `docs/sims/population-growth/population-growth.js`

### Specification

**Type:** MicroSim (Chart.js)<br/>
**sim-id:** population-growth<br/>
**Library:** Chart.js<br/>

**Learning objective:** Students will be able to *compare* (Bloom's L4: Analyze) exponential and logistic growth models and *predict* (Bloom's L3: Apply) population size changes by adjusting $r$ and $K$ parameters.

**Instructional Rationale:** Sliders for $r_{max}$, $K$, and initial $N_0$ let students see the immediate effect of each parameter on the growth curve shape, building intuitive understanding of the logistic equation.

**Canvas:** 780 × 480 px, responsive.

**Layout:**

- Left: Line chart with time (x-axis) and population size (y-axis)
  - Blue line: exponential model
  - Green line: logistic model
  - Dashed horizontal line: carrying capacity ($K$)
  - Vertical dashed line at inflection point
- Right: Parameter panel
  - Slider: $r_{max}$ (0.01 to 2.0)
  - Slider: $K$ (100 to 10,000)
  - Slider: $N_0$ (1 to 1,000)
  - Slider: Time range (10 to 500 generations)

**Interaction:**
- Adjust any slider → both curves update in real time
- Hover over any point on a curve → tooltip shows exact $N$, $t$, and $dN/dt$
- Toggle: show/hide exponential model for comparison
- "Overshoot" toggle: add a time lag to show population oscillations around $K$
- Data table toggle: show numerical values at each time step

**Colors:** Exponential: blue (#3498DB). Logistic: green (#27AE60). Carrying capacity: red dashed (#E74C3C).

**Responsive design:** Chart and sliders scale with container; slider panel wraps below on narrow screens.

---

## survivorship-curves

- **Title:** Survivorship Curves Comparator
- **Chapter:** 18-population-ecology-and-life-history
- **Library:** Chart.js
- **Bloom:** Create (L6)
- **Status:** specified
- **Complexity Rating:** 6
- **Target:** `docs/sims/survivorship-curves/survivorship-curves.js`

### Specification

**Type:** MicroSim (Chart.js)<br/>
**sim-id:** survivorship-curves<br/>
**Library:** Chart.js<br/>

**Learning objective:** Students will be able to *interpret* (Bloom's L2: Understand) survivorship curves and *classify* (Bloom's L4: Analyze) organisms into Type I, II, or III patterns based on mortality data.

**Instructional Rationale:** Overlaying all three survivorship curve types on one semi-log graph and letting students place real organisms onto the correct curves builds both graphing literacy and classification skills.

**Canvas:** 760 × 440 px, responsive.

**Layout:**

- Center: Semi-log plot (log scale y-axis: number of survivors; linear x-axis: percentage of maximum lifespan)
  - Type I curve (blue): concave, drops late
  - Type II curve (green): linear on log scale
  - Type III curve (orange): convex, drops early
- Right: Organism classification panel — draggable organism icons (human, robin, oyster, elephant, lizard, oak tree, whale, salmon, turtle)

**Interaction:**
- Drag organism icons onto the correct curve type
- Correct placement: green flash + organism sticks to curve
- Incorrect: red flash + organism returns to panel + hint
- Hover over any curve: tooltip showing mortality pattern description
- Toggle: "Real Data" overlays actual life table data for humans, robins, and oysters

**Colors:** Type I: blue. Type II: green. Type III: orange. Grid: light gray.

**Responsive design:** Chart and classification panel stack vertically on narrow screens.

---

## biogeochemical-cycles

- **Title:** Biogeochemical Cycles Dashboard
- **Chapter:** 20-ecosystem-ecology-and-conservation
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** specified
- **Complexity Rating:** 8
- **Target:** `docs/sims/biogeochemical-cycles/biogeochemical-cycles.js`

### Specification

**Type:** MicroSim (p5.js)<br/>
**sim-id:** biogeochemical-cycles<br/>
**Library:** p5.js but use the diagram overlay mode to overlay images of the ecosystem landscape diagrams<br/>

**Learning objective:** Students will be able to *compare* (Bloom's L4: Analyze) the reservoirs and fluxes of the carbon, nitrogen, phosphorus, and water cycles, and *explain* (Bloom's L2: Understand) how human activities have altered each cycle.

**Instructional Rationale:** A tabbed dashboard with a common visual language (reservoirs as pools, fluxes as arrows) for all four cycles allows rapid comparison. A "Human Impact" toggle reveals how human activities alter each cycle.

**Canvas:** 800 × 500 px, responsive.

**Layout:**

- Top: Tab buttons — Carbon, Nitrogen, Phosphorus, Water
- Center: Landscape diagram showing reservoirs (atmosphere, soil, ocean, organisms, rock) as labeled pools with size proportional to amount
  - Arrows between pools showing fluxes (labeled with process names)
  - Arrow thickness proportional to flux rate
- Bottom: "Human Impact" toggle — when activated, human-caused fluxes appear in red (fossil fuel burning, fertilizer runoff, deforestation, etc.)

**Interaction:**
- Switch tabs → diagram redraws for selected cycle
- Hover over any reservoir: shows amount stored (in gigatons or appropriate units)
- Hover over any arrow: shows process name, rate, and brief description
- "Human Impact" toggle: adds red arrows and annotations for anthropogenic disruptions
- "Quiz" toggle: labels hidden; student must name each process by clicking arrows

**Colors:** Atmosphere reservoir: light blue. Ocean: dark blue. Soil/sediment: brown. Organisms: green. Rock: gray. Human impact arrows: red.

**Responsive design:** Diagram scales proportionally; tab bar wraps on narrow screens.

---


---

## gene-expression-pipeline

- **Title:** Gene Expression Pipeline
- **Chapter:** 13-central-dogma-replication-and-protein-synthesis
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** specified
- **Complexity Rating:** 6
- **Target:** `docs/sims/gene-expression-pipeline/gene-expression-pipeline.js`

### Specification

**Type:** MicroSim (p5.js)<br/>
**sim-id:** gene-expression-pipeline<br/>
**Library:** p5.js<br/>

**Learning objective:** Students will be able to *describe* (Bloom's L2: Understand) each step of eukaryotic gene expression from transcription through mRNA processing to translation, and *differentiate* (Bloom's L4: Analyze) between prokaryotic and eukaryotic gene expression.

**Instructional Rationale:** A step-through pipeline visualization lets students see the sequential transformation of a gene into a protein, with concrete data visible at each stage. Showing the pre-mRNA with introns being spliced out, the cap and tail being added, and the processed mRNA being translated makes the abstract pipeline tangible.

**Canvas:** 800 × 520 px, responsive.

**Layout:** Horizontal pipeline flowing left to right with five stations:

1. DNA gene (with exons and introns color-coded)
2. Pre-mRNA (direct copy of gene, with introns)
3. Processed mRNA (5' cap, exons only, poly-A tail)
4. Ribosome + tRNA delivering amino acids
5. Polypeptide chain

**Data Visibility Requirements:**

- Stage 1: Show DNA gene with 4 exons (blue) and 3 introns (gray), promoter (green arrow), terminator (red bar)
- Stage 2: RNA polymerase transcribes → pre-mRNA appears with all exons and introns as RNA
- Stage 3: 5' cap (gold circle) and poly-A tail (AAAA... string) added
- Stage 4: Spliceosome removes introns → show lariat loops being excised, exons joining
- Stage 5: Mature mRNA exits nucleus (nuclear envelope shown as dashed line)
- Stage 6: Ribosome translates → amino acid chain grows

**Interaction:**
- Next/Previous buttons to step through stages
- "Play All" for continuous animation
- Toggle: "Compare Prokaryote" — shows a simplified parallel where transcription and translation occur simultaneously (no processing steps)
- Hover over any molecule for name and function tooltip

**Colors:** Exons: blue (#3498DB). Introns: gray (#BDC3C7). 5' cap: gold (#F1C40F). Poly-A tail: orange (#E67E22). Amino acids: distinct colors per amino acid.

**Responsive design:** Pipeline stations wrap to a second row on narrow screens.

## species-interactions

- **Title:** Species Interactions Web
- **Chapter:** 19-community-ecology-and-species-interactions
- **Library:** vis-network
- **Bloom:** Create (L6)
- **Status:** specified
- **Complexity Rating:** 7
- **Target:** `docs/sims/species-interactions/species-interactions.js`

### Specification

**Type:** Graph model (vis-network)<br/>
**sim-id:** species-interactions<br/>
**Library:** vis-network<br/>

**Learning objective:** Students will be able to *classify* (Bloom's L4: Analyze) species interactions as predation, competition, mutualism, commensalism, or parasitism, and *explain* (Bloom's L2: Understand) the effect (+, −, 0) on each species.

**Instructional Rationale:** A network graph where species are nodes and interactions are labeled, color-coded edges gives students a visual map of community structure. Clicking edges reveals detailed descriptions and effect symbols.

**Canvas:** 780 × 480 px, responsive.

**Layout:** Force-directed graph with ~12 species nodes and ~15 interaction edges.

**Nodes (species):** Lion, Zebra, Grass, Bee, Wildflower, Clownfish, Sea anemone, Tick, Deer, Oak tree, Mycorrhizal fungus, Barnacle, Whale

**Edges (interactions):**
- Lion → Zebra: predation (+/−)
- Zebra → Grass: herbivory (+/−)
- Bee ↔ Wildflower: mutualism (+/+)
- Clownfish ↔ Sea anemone: mutualism (+/+)
- Tick → Deer: parasitism (+/−)
- Oak tree ↔ Mycorrhizal fungus: mutualism (+/+)
- Barnacle → Whale: commensalism (+/0)
- Lion ↔ Cheetah: competition (−/−) (add Cheetah node)

**Interaction:**
- Hover over edge: tooltip showing interaction type, description, and +/−/0 effects
- Click node: highlight all its interactions
- "Quiz Mode": edges are unlabeled; student must classify each interaction type
- Drag nodes to rearrange

**Colors:** Predation edges: red. Competition: orange. Mutualism: green. Commensalism: blue. Parasitism: purple.

**Responsive design:** Graph recalculates layout on resize.
