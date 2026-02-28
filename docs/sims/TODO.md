# MicroSim TODO — Remaining Implementations

**Generated:** 2026-02-27 | **Remaining:** 65 of 79

**Note:** All MicroSim directories ALREADY been created and the three core
scaffolding files have been generated.  (`main.html`, `index.md`, `metadata.json`).
You do not need to create these directories and files.

A sim is **done** when it has a substantial `.js` file in its directory. If no `.js` file
exists, the sim still needs its JavaScript implementation.

Always use the /microsim-generator skill to implement these Microsims

## Summary by Chapter

| Chapter | Total | Done | Remaining |
|---------|-------|------|-----------|
| 01-scientific-foundations-and-chemistry | 5 | 5 | 0 |
| 02-water-ph-and-organic-chemistry | 5 | 1 | 4 |
| 03-biological-macromolecules | 4 | 2 | 2 |
| 04-cell-organization-and-organelles | 8 | 4 | 4 |
| 05-cell-membranes-and-transport | 4 | 1 | 3 |
| 06-thermodynamics-and-enzymes | 4 | 0 | 4 |
| 07-photosynthesis | 4 | 1 | 3 |
| 08-cellular-respiration | 4 | 0 | 4 |
| 09-cell-signaling-and-feedback | 3 | 0 | 3 |
| 10-cell-cycle-mitosis-and-cancer | 4 | 0 | 4 |
| 11-meiosis-and-mendelian-genetics | 6 | 0 | 6 |
| 12-non-mendelian-and-chromosomal-genetics | 6 | 0 | 6 |
| 13-central-dogma-replication-and-protein-synthesis | 4 | 0 | 4 |
| 14-mutations-gene-regulation-and-biotechnology | 4 | 0 | 4 |
| 15-evidence-for-evolution | 3 | 0 | 3 |
| 16-population-genetics-and-hardy-weinberg | 3 | 0 | 3 |
| 17-speciation-phylogenetics-and-macroevolution | 2 | 0 | 2 |
| 18-population-ecology-and-life-history | 2 | 0 | 2 |
| 19-community-ecology-and-species-interactions | 2 | 0 | 2 |
| 20-ecosystem-ecology-and-conservation | 2 | 0 | 2 |

## Summary by Library

| Library | Count |
|---------|-------|
| p5.js | 57 |
| Chart.js | 5 |
| vis-network | 2 |
| vis-timeline | 1 |

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

## protein-structure-levels

- **Title:** Protein Structure Levels Explorer
- **Chapter:** 03-biological-macromolecules
- **Library:** p5.js
- **Bloom:** Understand (L2)
- **Status:** specified
- **Target:** `docs/sims/protein-structure-levels/protein-structure-levels.js`

### Specification

Type: infographic
**sim-id:** protein-structure-levels<br/>
**Library:** p5.js<br/>

Bloom Level: Understand (L2)
Bloom Verb: explain
Learning Objective: Students will explain the defining features and stabilizing forces at each of the four levels of protein structure, and identify the type of bonds or interactions that maintain each level.

Canvas layout:
- Top row: Four labeled panels side by side: "Primary", "Secondary", "Tertiary", "Quaternary"
- Each panel is clickable; clicking expands it to fill the center of the canvas with a detailed diagram
- Bottom strip: "Stabilizing forces" legend showing bond/interaction types and their icons

Visual elements — Primary panel:
- Linear chain of 8 labeled colored circles (amino acids) connected by lines labeled "Peptide bond"
- N-terminus labeled with "H₂N–" on left, C-terminus with "–COOH" on right
- Each circle a different color representing a different amino acid type (nonpolar gray, polar blue, charged red/orange)

Visual elements — Secondary panel:
- Side-by-side: α-helix (coil) and β-pleated sheet, each drawn with p5.js
- Hydrogen bonds shown as dashed green lines between backbone C=O and N–H
- R groups shown as stubs projecting outward from the helix
- Labels: "H-bonds stabilize both secondary structures"

Visual elements — Tertiary panel:
- Schematic globular protein showing helices (coils) and sheets (arrows) connected by loops, folded into a compact shape
- Color-coded regions of secondary structure: helices orange, sheets blue, loops gray
- Callout labels with arrows pointing to: "Hydrophobic core", "Disulfide bridge (–S–S–)", "Salt bridge (+/–)", "H-bonds between R groups"

Visual elements — Quaternary panel:
- Hemoglobin tetramer: two α subunits (light blue) and two β subunits (light red) arranged symmetrically
- Heme groups shown as flat disk icons within each subunit
- Subunit interfaces labeled "Noncovalent interactions hold subunits together"
- Small oxygen molecules (O₂) shown binding to heme groups

Interactive controls:
- Clicking any panel header expands that level to full-canvas view with more detail
- "Back to overview" button returns to four-panel view
- Hovering over any labeled element shows a tooltip with definition and biological example

Default state: four-panel overview visible

Instructional Rationale: A step-through from linear (primary) to 3D multimeric (quaternary) builds the scaffold for understanding structure–function relationships. The overview lets students see all four levels simultaneously, reinforcing the hierarchical nature of protein organization.

Canvas size: 700 × 480 px
Responsive: Must respond to window resize events

---

## prokaryote-eukaryote-comparison

- **Title:** Prokaryote vs. Eukaryote Cell Comparison
- **Chapter:** 04-cell-organization-and-organelles
- **Library:** p5.js
- **Bloom:** Analyze (L4)
- **Status:** specified
- **Target:** `docs/sims/prokaryote-eukaryote-comparison/prokaryote-eukaryote-comparison.js`

### Specification

Type: infographic
**sim-id:** prokaryote-eukaryote-comparison<br/>
**Library:** p5.js<br/>

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

---

## surface-area-volume-ratio

- **Title:** Surface Area to Volume Ratio Explorer
- **Chapter:** 04-cell-organization-and-organelles
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** specified
- **Target:** `docs/sims/surface-area-volume-ratio/surface-area-volume-ratio.js`

### Specification

Type: microsim
**sim-id:** surface-area-volume-ratio<br/>
**Library:** p5.js<br/>

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

---

## endomembrane-system

- **Title:** Endomembrane System — Protein Secretion Pathway
- **Chapter:** 04-cell-organization-and-organelles
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** specified
- **Target:** `docs/sims/endomembrane-system/endomembrane-system.js`

### Specification

Type: microsim
**sim-id:** endomembrane-system<br/>
**Library:** p5.js<br/>

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

---

## cytoskeleton-explorer

- **Title:** Cytoskeleton Component Explorer
- **Chapter:** 04-cell-organization-and-organelles
- **Library:** p5.js
- **Bloom:** Understand (L2)
- **Status:** specified
- **Target:** `docs/sims/cytoskeleton-explorer/cytoskeleton-explorer.js`

### Specification

Type: infographic
**sim-id:** cytoskeleton-explorer<br/>
**Library:** p5.js<br/>

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

---

## osmosis-simulator

- **Title:** Osmosis and Water Potential Simulator
- **Chapter:** 05-cell-membranes-and-transport
- **Library:** p5.js
- **Bloom:** Apply (L3)
- **Status:** specified
- **Target:** `docs/sims/osmosis-simulator/osmosis-simulator.js`

### Specification

Type: microsim
**sim-id:** osmosis-simulator<br/>
**Library:** p5.js<br/>

Bloom Level: Apply (L3)
Bloom Verb: calculate, demonstrate
Learning Objective: Students will calculate solute potential and water potential for solutions of given concentration, predict the direction of water movement between compartments, and describe the effect of osmosis on both animal and plant cells under hypotonic, isotonic, and hypertonic conditions.

Canvas layout:
- Top half (55%): Two chambers separated by a vertical dashed membrane line; left chamber = cell interior, right chamber = extracellular solution
- Bottom half (45%): Control panel with sliders and numerical readouts

Visual elements:
- Left chamber (cell interior): blue-tinted fluid with small blue dots representing water molecules and larger red dots representing solute molecules
- Right chamber (external solution): same styling but adjustable solute concentration
- Semipermeable membrane: vertical dashed line allowing water (blue dots) to cross but blocking solute (red dots)
- Animated water molecules: small blue dots move through the membrane in proportion to the water potential gradient; net flow direction indicated by a bold blue arrow
- Cell membrane icon at left wall: when using "Plant cell mode," a green outer cell wall appears and a turgor pressure gauge shows pressure building up
- Water potential display: Ψ_cell and Ψ_external calculated and displayed in MPa in the info panel

Interactive controls:
- Slider "Internal solute concentration" (0–1.0 mol/L)
- Slider "External solute concentration" (0–1.0 mol/L)
- Slider "Temperature" (273–313 K, default 298 K)
- Toggle: "Animal cell" vs "Plant cell" mode (plant mode adds rigid wall and turgor pressure gauge)
- Calculated display (updating live): Ψ_s (internal), Ψ_s (external), Ψ_p (internal; 0 for animal, positive for plant), net Ψ difference, direction of water flow
- Button "Equilibrate": runs animation to show final equilibrium state

Default parameters:
- Internal solute: 0.3 mol/L
- External solute: 0.3 mol/L (isotonic)
- Mode: Animal cell

Behavior:
- When internal and external Ψ are equal, water molecules cross membrane equally in both directions; blue arrow disappears
- When external is hypotonic: blue arrow points inward; in animal mode the cell cartoon swells; in plant mode the turgor pressure gauge rises
- When external is hypertonic: blue arrow points outward; in animal mode the cell cartoon shrinks; in plant mode plasmolysis is shown (membrane pulls away from wall)
- Warning text appears if animal cell enters lytic range (solute difference > 0.5 mol/L)

Data Visibility Requirements:
Stage 1: Show initial solute concentrations in each chamber
Stage 2: Show calculated Ψ_s values using Ψ_s = −iCRT
Stage 3: Show net Ψ difference and direction of water flow
Stage 4: Show equilibrium state after animation completes

Instructional Rationale: Sliders that directly alter concentration and instantly show updated Ψ calculations with animated water flow directly connect the abstract formula to a visible physical outcome. The animal/plant toggle reinforces that the same osmotic principles produce different cell outcomes due to the presence or absence of a rigid wall.

Canvas size: 680 × 480 px
Responsive: Must respond to window resize events

---

## sodium-potassium-pump

- **Title:** Sodium-Potassium Pump Cycle
- **Chapter:** 05-cell-membranes-and-transport
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** specified
- **Target:** `docs/sims/sodium-potassium-pump/sodium-potassium-pump.js`

### Specification

Type: microsim
**sim-id:** sodium-potassium-pump<br/>
**Library:** p5.js<br/>

Bloom Level: Understand (L2)
Bloom Verb: explain
Learning Objective: Students will explain the four-step conformational cycle of the Na⁺/K⁺-ATPase, identifying which ions are transported in each direction, how ATP hydrolysis drives the conformational change, and the net electrochemical gradient produced.

Canvas layout:
- Center drawing area (65%): Large schematic of the plasma membrane in cross-section with the pump protein embedded in it, shown in side view
- Right info panel (35%): Step description, ion counts, and energy accounting

Visual elements:
- Plasma membrane: thick horizontal bilayer spanning the canvas
- Pump protein: large asymmetric protein spanning the membrane; conformational state changes visibly with each step (open cytoplasmic face vs. open extracellular face)
- Cytoplasm (below membrane): labeled, contains Na⁺ (orange circles) and K⁺ (blue circles) represented as colored dots
- Extracellular space (above membrane): same dot style, different concentrations
- ATP molecule shown as yellow star; ADP + Pᵢ shown as smaller yellow symbols after hydrolysis
- Ion binding sites inside the pump shown as recessed pockets
- Running counter: "Na⁺ exported: N" and "K⁺ imported: N" that increment with each completed cycle
- Concentration bar chart (right panel bottom): live bars for [Na⁺]_in, [Na⁺]_out, [K⁺]_in, [K⁺]_out that update after enough cycles

Step-through animation (4 steps):
- Step 1: "3 Na⁺ bind" — three orange dots move from cytoplasm into pump binding sites; pump labeled "E1 conformation (open to cytoplasm)"
- Step 2: "ATP hydrolysis → phosphorylation" — yellow ATP star enters pump; ADP departs; pump shape shifts; label "E1-P → E2-P: conformational change"
- Step 3: "3 Na⁺ released; 2 K⁺ bind" — orange dots exit to extracellular space; two blue K⁺ dots enter pump; pump labeled "E2-P conformation (open to extracellular)"
- Step 4: "Dephosphorylation; 2 K⁺ released" — phosphate released; blue K⁺ dots move into cytoplasm; pump returns to E1 conformation

Interactive controls:
- Button "Next Step": advances one step
- Button "Previous Step": goes back one step
- Button "Run Cycle": completes the full 4-step cycle automatically
- Button "Run 10 Cycles": shows gradient building up over 10 cycles; bar chart updates
- Button "Reset"

Default state: Step 1 shown, pump in E1 conformation, cytoplasm with equal Na⁺ and K⁺

Data Visibility Requirements:
Stage 1: Show ion binding sites and cytoplasmic Na⁺ concentrations
Stage 2: Show ATP → ADP + Pᵢ conversion and conformational change label
Stage 3: Show Na⁺ exit and K⁺ entry simultaneously with conformation label
Stage 4: Show dephosphorylation and K⁺ release into cytoplasm; increment counters

Instructional Rationale: Step-through animation with explicit labeling of each conformational state and ion movement transforms an abstract pump cycle into a traceable mechanical sequence. Watching the concentration bar chart shift after multiple cycles directly connects the molecular mechanism to the macroscopic gradient it creates.

Canvas size: 700 × 460 px
Responsive: Must respond to window resize events

---

## cell-junctions-explorer

- **Title:** Cell Junctions Explorer
- **Chapter:** 05-cell-membranes-and-transport
- **Library:** p5.js
- **Bloom:** Analyze (L4)
- **Status:** specified
- **Target:** `docs/sims/cell-junctions-explorer/cell-junctions-explorer.js`

### Specification

Type: infographic
**sim-id:** cell-junctions-explorer<br/>
**Library:** p5.js<br/>

Bloom Level: Understand (L2)
Bloom Verb: explain, compare
Learning Objective: Students will explain the structural basis and functional role of tight junctions, desmosomes, and gap junctions in animal cells, and compare them to plasmodesmata in plant cells.

Canvas layout:
- Left panel (25%): Four clickable buttons — "Tight Junction", "Desmosome", "Gap Junction", "Plasmodesma"
- Center panel (50%): Detailed cross-sectional diagram of two adjacent cells with the selected junction type shown at large scale
- Right panel (25%): Junction name, structural proteins, function, and tissue examples

Visual elements — Tight Junction:
- Two adjacent epithelial cells (rectangles) with their apical surfaces at the top
- Tight junction shown as a continuous seal (thick red line) running across the intercellular space near the apical surface
- Claudin/occludin proteins drawn as interlocking transmembrane segments
- Aqueous intercellular cleft present below the tight junction but absent above (sealed)
- Label: "Seals paracellular space; prevents leakage"

Visual elements — Desmosome:
- Two adjacent cells with thick electron-dense plaques (gray bars) on the cytoplasmic face of each plasma membrane
- Transmembrane cadherin proteins (desmoglein) shown as paired stalk proteins spanning the intercellular space and connecting the two plaques
- Intermediate filament bundles (keratin) shown anchoring to the plaque inside each cell
- Label: "Mechanical anchor; transmits tensile force"

Visual elements — Gap Junction:
- Two adjacent cells; at the gap junction, connexon hemichannels are shown as cylindrical pores spanning each membrane, docking end-to-end to form a complete channel
- Inside each connexon: six connexin subunits shown as a ring in cross-section
- Small colored dots (ions, cAMP) shown passing through the channel from one cell to the other
- Label: "Direct cytoplasmic connection; passes ions and second messengers"

Visual elements — Plasmodesma:
- Two adjacent plant cells with thick cellulose cell walls (dark green outer layers)
- Plasmodesma shown as a narrow channel through the wall, lined with plasma membrane
- Desmotubule (ER-derived membrane strand) running through the center
- Cytoplasm flowing in the annular space between desmotubule and outer membrane
- Label: "Plant cell-to-cell channel; symplastic transport"

Interactive controls:
- Clicking any button updates center and right panels with animated transition
- Hovering over any molecular element shows a tooltip with protein name and brief description
- Toggle "Show intercellular space scale" — adds a nanometer scale bar to the center panel

Default state: Tight Junction selected

Instructional Rationale: Seeing all four junction types in the same visual format and at comparable scales allows direct structural comparison. The consistent two-cell canvas layout and the right panel's functional summary help students connect structure to function for each junction type.

Canvas size: 700 × 460 px
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

## enzyme-kinetics-explorer

- **Title:** Enzyme Kinetics Explorer
- **Chapter:** 06-thermodynamics-and-enzymes
- **Library:** p5.js
- **Bloom:** Apply (L3)
- **Status:** specified
- **Target:** `docs/sims/enzyme-kinetics-explorer/enzyme-kinetics-explorer.js`

### Specification

Type: microsim
**sim-id:** enzyme-kinetics-explorer<br/>
**Library:** p5.js<br/>

Bloom Level: Apply (L3)
Bloom Verb: calculate, interpret
Learning Objective: Students will use the Michaelis-Menten equation to predict enzyme velocity at a given substrate concentration, identify Vmax and Km from a v vs [S] graph, and explain how competitive and noncompetitive inhibitors shift the curve.

Canvas layout:
- Left panel (60%): v vs [S] graph (Michaelis-Menten curve)
- Right panel (40%): Sliders and numerical readout

Visual elements:
- x-axis: Substrate concentration [S] (0 to 10× Km, labeled in µmol/L)
- y-axis: Reaction velocity v (0 to 1.2× Vmax, labeled in µmol/min)
- Michaelis-Menten hyperbolic curve in blue
- Dashed horizontal line at Vmax with label "Vmax"
- Dashed vertical line dropping from the point where v = Vmax/2 to the x-axis, labeled "Km"
- Moveable probe dot that slides along the curve; coordinates (S, v) displayed in right panel
- Optional overlay curves for competitive inhibitor (same Vmax, higher apparent Km — red dashed curve) and noncompetitive inhibitor (lower Vmax, same Km — purple dashed curve)

Interactive controls:
- Slider "Vmax" (1–100 µmol/min)
- Slider "Km" (0.1–10 µmol/L)
- Toggle "Add competitive inhibitor" — adds red dashed curve with apparent Km increased proportionally
- Toggle "Add noncompetitive inhibitor" — adds purple dashed curve with apparent Vmax decreased
- Slider "[Inhibitor] concentration" (0–3×): scales the inhibitor effect
- Probe dot draggable along the x-axis: shows v, [S], and percentage of Vmax in right panel
- Button "Reset"

Default parameters:
- Vmax: 50 µmol/min
- Km: 2 µmol/L
- No inhibitors

Behavior:
- As Vmax slider increases, the horizontal asymptote rises and all y-axis values scale
- As Km slider increases, the curve shifts right (lower affinity)
- Adding competitive inhibitor: red curve has same Vmax, rightward-shifted Km; info panel explains "Competitive inhibitor raises apparent Km"
- Adding noncompetitive inhibitor: purple curve has lower Vmax, unchanged Km; info panel explains "Noncompetitive inhibitor lowers Vmax"

Data Visibility Requirements:
Stage 1: Baseline Michaelis-Menten curve with Vmax and Km labeled
Stage 2: Probe shows calculated v = Vmax[S]/(Km + [S]) for the dragged [S] value
Stage 3: Inhibitor curves overlaid with explanatory text labels

Instructional Rationale: Making Vmax and Km directly adjustable sliders, with inhibitor curves overlaid, converts abstract kinetic curves into manipulable data. Students who adjust Km and see the curve shift right understand affinity in a way that reading a static graph cannot provide.

Canvas size: 700 × 440 px
Responsive: Must respond to window resize events

---

## enzyme-regulation-simulator

- **Title:** Enzyme Regulation Simulator
- **Chapter:** 06-thermodynamics-and-enzymes
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** specified
- **Target:** `docs/sims/enzyme-regulation-simulator/enzyme-regulation-simulator.js`

### Specification

Type: microsim
**sim-id:** enzyme-regulation-simulator<br/>
**Library:** p5.js<br/>

Bloom Level: Analyze (L4)
Bloom Verb: differentiate, compare
Learning Objective: Students will differentiate competitive inhibition, noncompetitive inhibition, and allosteric feedback inhibition by comparing their effects on enzyme kinetics, and explain which regulatory mechanism is most appropriate for each metabolic context.

Canvas layout:
- Top strip (20%): Four mode buttons: "No Inhibition", "Competitive", "Noncompetitive", "Feedback Inhibition"
- Center panel (55%): Split view — left side shows enzyme schematic (active site, allosteric site, substrate, inhibitor); right side shows Michaelis-Menten curve updating in real time
- Bottom panel (25%): Text box summarizing the selected mechanism's effect on Vmax and Km, and a one-sentence metabolic context

Visual elements — Enzyme schematic (left center):
- Enzyme shown as a large irregular protein shape with a labeled active site pocket and a labeled allosteric site
- Substrate (green hexagon) or inhibitor (red/orange triangle) shown in or approaching the appropriate site depending on the mode
- Conformational change shown when allosteric inhibitor is bound (enzyme shape shifts)
- Dashed lines connect inhibitor to allosteric site; solid arrow shows effect on active site shape

Visual elements — Kinetics graph (right center):
- v vs [S] Michaelis-Menten curve, updating shape depending on selected mode:
  - No Inhibition: standard blue hyperbolic curve
  - Competitive: red dashed curve, same Vmax, rightward Km
  - Noncompetitive: purple dashed curve, lower Vmax, same Km
  - Feedback: purple dashed curve (same as noncompetitive) plus a separate feedback loop diagram showing product arrow pointing back to allosteric site
- Slider "[Inhibitor] concentration" controls degree of inhibition (affects curve shape)

Interactive controls:
- Four mode buttons at top
- Slider "[Inhibitor] concentration" (0–100%)
- Probe dot on the graph showing current v at a chosen [S]

Default state: No Inhibition mode

Behavior:
- Switching modes updates both the enzyme schematic and the kinetics graph simultaneously
- Moving the inhibitor concentration slider adjusts how far the curves deviate from baseline
- Info panel at bottom updates with the mechanism summary for the active mode

Instructional Rationale: Showing the enzyme schematic and kinetics curve simultaneously, with both updating when the inhibition mode changes, creates a direct visual link between the molecular mechanism (where the inhibitor binds) and the macroscopic kinetic consequence (how the v vs [S] curve changes). This Analyze-level design requires students to attribute curve changes to binding site differences.

Canvas size: 700 × 480 px
Responsive: Must respond to window resize events

---

## enzyme-activity-explorer

- **Title:** Temperature and pH Effects on Enzyme Activity
- **Chapter:** 06-thermodynamics-and-enzymes
- **Library:** p5.js
- **Bloom:** Apply (L3)
- **Status:** specified
- **Target:** `docs/sims/enzyme-activity-explorer/enzyme-activity-explorer.js`

### Specification

Type: microsim
**sim-id:** enzyme-activity-explorer<br/>
**Library:** p5.js<br/>

Bloom Level: Apply (L3)
Bloom Verb: predict, apply
Learning Objective: Students will predict how enzyme activity changes with temperature and pH, identify optimal values for a given enzyme, and explain the molecular basis for the activity drop at extreme values.

Canvas layout:
- Top toggle: "Temperature mode" | "pH mode"
- Left panel (55%): Activity vs. variable graph (bell-shaped curve)
- Right panel (45%): Molecular explanation panel (why activity rises, why it falls); updates based on cursor position on curve

Visual elements — Temperature mode:
- x-axis: Temperature (0–100°C); y-axis: Relative enzyme activity (0–100%)
- Bell-shaped curve peaking at a temperature set by the "Optimal Temp" slider
- Left side of peak labeled "Increasing collisions (more substrate binding)"
- Right side of peak labeled "Denaturation (H-bonds and hydrophobic interactions disrupted)"
- Draggable cursor dot on the curve; dashed vertical line drops to x-axis showing current temperature
- Right panel: enzyme cartoon — below optimum: active site intact with substrate; above optimum: enzyme drawn as an unraveled chain labeled "Denatured"

Visual elements — pH mode:
- x-axis: pH (0–14); y-axis: Relative enzyme activity (0–100%)
- Bell-shaped curve peaking at pH set by "Optimal pH" slider
- Draggable cursor dot with same vertical line
- Right panel: showing ionization state of key residues at current pH — histidine (pKa ~6) shown protonated vs neutral at different pH values; explanation of why wrong ionization state disrupts active site

Interactive controls:
- Toggle: Temperature mode / pH mode
- Slider "Optimal temperature" (25–80°C, default 37°C): shifts the peak position
- Slider "Optimal pH" (2–10, default 7.2): shifts the peak position
- Slider "Enzyme thermostability": adjusts the width of the temperature bell (narrow = sensitive; wide = thermostable like Taq polymerase)
- Draggable cursor on the curve
- Pre-set buttons: "Human enzyme (37°C, pH 7.2)", "Pepsin (pH 2)", "Taq polymerase (72°C)"

Default state: Temperature mode, human enzyme preset

Behavior:
- Moving cursor along the curve updates the right panel text and cartoon with appropriate molecular explanation
- Switching between presets animates the curve shifting to the new optimum
- Thermostability slider widens/narrows the bell; label on graph indicates width at half-maximum

Instructional Rationale: Two variables (temperature and pH) that share the same conceptual structure (bell-shaped optimum due to competing effects) are presented in the same interactive format to facilitate comparison. Pre-set buttons for biologically diverse enzymes (pepsin, Taq polymerase) demonstrate that optimal values are adaptations to the enzyme's operating environment.

Canvas size: 660 × 420 px
Responsive: Must respond to window resize events

---

## light-dependent-reactions

- **Title:** Light-Dependent Reactions (Z-Scheme)
- **Chapter:** 07-photosynthesis
- **Library:** p5.js
- **Bloom:** Understand (L2)
- **Status:** specified
- **Target:** `docs/sims/light-dependent-reactions/light-dependent-reactions.js`

### Specification

Type: microsim
**sim-id:** light-dependent-reactions<br/>
**Library:** p5.js<br/>

Bloom Level: Understand (L2)
Bloom Verb: explain, trace
Learning Objective: Students will trace the path of an electron from water through PSII, the electron transport chain, and PSI to NADPH, identifying each carrier molecule, the direction of proton pumping, and where ATP and NADPH are produced.

Canvas layout:
- Main drawing area (70%): Z-scheme energy diagram — y-axis shows electron energy (low at bottom = high reduction potential, high at top = low reduction potential); x-axis shows reaction sequence left to right
- Right info panel (30%): Label and detailed description of the currently highlighted component

Visual elements:
- y-axis label: "Electron Energy / Reduction Potential (V)" with scale from −1.5 V (top) to +1.0 V (bottom)
- Horizontal lines (energy levels) for each electron carrier labeled at left: H₂O/O₂, P680, PQ, Cyt b6f, PC, P700, Fd, NADP⁺/NADPH
- Arrows connecting each level showing electron flow direction (zig-zag Z shape)
- Upward arrows at PSII (P680) and PSI (P700) labeled "Light energy input (photon)" with a lightning bolt icon
- Thylakoid membrane schematic drawn below the energy diagram showing PSII, cytochrome b6f, PSI, and ATP synthase embedded in membrane, with proton pumping arrows pointing into the lumen
- Lumen (inside thylakoid) labeled with accumulating H⁺ ions; stroma labeled outside
- ATP synthase shown with rotating symbol and "ATP" output arrow into stroma
- NADPH shown forming at the stroma face of PSI

Step-through animation sequence:
- Step 1: Photon hits PSII → P680 electron excited (glowing dot rises up the y-axis)
- Step 2: Excited electron transfers to PQ; water splitting replaces it (O₂ released)
- Step 3: Electron passes through Cyt b6f; H⁺ pumped into lumen (proton counter increments)
- Step 4: Electron arrives at P700 via PC; second photon excites it
- Step 5: Excited electron transfers to Fd → NADP⁺ reductase → NADPH formed
- Step 6: Proton gradient shown; ATP synthase rotates; ATP produced

Interactive controls:
- Button "Next Step": advances one step
- Button "Previous Step": goes back
- Button "Play All": auto-advances at 2-second intervals
- Button "Reset"
- Hovering any labeled carrier: info panel updates with carrier name, chemical formula, and role

Default state: Step 1 shown with H₂O and P680 highlighted

Data Visibility Requirements:
Stage 1: Water splitting equation shown: 2H₂O → 4H⁺ + 4e⁻ + O₂
Stage 2: Electron energy levels and Z-path drawn with carrier labels
Stage 3: Proton accumulation in lumen counted per cycle
Stage 4: ATP and NADPH outputs labeled with stoichiometry

Instructional Rationale: The Z-scheme is the canonical representation of the light reactions, but it is notoriously confusing when presented statically. A step-through animation that moves an electron dot along the path, simultaneously showing the energy diagram and the membrane cross-section, makes the spatial and energetic relationships simultaneously clear.

Canvas size: 720 × 480 px
Responsive: Must respond to window resize events

---

## photosynthesis-strategies

- **Title:** C3, C4, and CAM Photosynthesis Comparison
- **Chapter:** 07-photosynthesis
- **Library:** p5.js
- **Bloom:** Analyze (L4)
- **Status:** specified
- **Target:** `docs/sims/photosynthesis-strategies/photosynthesis-strategies.js`

### Specification

Type: infographic
**sim-id:** photosynthesis-strategies<br/>
**Library:** p5.js<br/>

Bloom Level: Analyze (L4)
Bloom Verb: compare, differentiate
Learning Objective: Students will compare the C3, C4, and CAM photosynthetic strategies by identifying the spatial or temporal mechanism each uses to concentrate CO₂ around RuBisCO, and predict which strategy is favored under each climate scenario.

Canvas layout:
- Left column (25%): Three clickable strategy buttons — "C3", "C4", "CAM" — plus a "Compare All" view toggle
- Center panel (50%): Leaf cross-section diagram (or daily timeline for CAM) showing the selected strategy's cell types, enzyme locations, and CO₂ flow
- Right panel (25%): Climate suitability gauge (temperature, water availability, light intensity sliders showing which strategy wins)

Visual elements — C3 view:
- Leaf cross-section showing mesophyll cells only (no ring of bundle sheath)
- CO₂ arrow entering stomata → mesophyll → RuBisCO label → Calvin cycle box
- Stomata open indicator (daytime, sun icon)
- Photorespiration side arrow labeled with "Wastes carbon at high T"

Visual elements — C4 view:
- Leaf cross-section with distinct outer mesophyll cells (green) and inner bundle sheath cells (darker green) — Kranz anatomy
- CO₂ arrow → mesophyll: PEP carboxylase → OAA → Malate; transport arrow to bundle sheath → decarboxylation → high [CO₂] → RuBisCO → Calvin cycle
- Bundle sheath cells labeled "CO₂ concentrated here"
- Photorespiration side arrow labeled "Suppressed"

Visual elements — CAM view:
- Leaf cross-section: single cell type (succulent mesophyll)
- Split timeline showing night (left) and day (right):
  - Night: stomata open, CO₂ → PEP carboxylase → Malate → stored in vacuole
  - Day: stomata closed, Malate → decarboxylated → CO₂ → RuBisCO → Calvin cycle
- Sun/moon icons indicating time of day

Visual elements — Compare All view:
- Side-by-side mini-versions of all three cell diagrams with color-coded CO₂ flow arrows

Climate suitability panel (right):
- Three sliders: Temperature (cool to hot), Water availability (wet to dry), Light intensity (low to high)
- Based on slider positions, colored indicators light up for which strategy is "best suited" at those conditions
- Example: high T + low water → CAM highlighted; high T + high water → C4 highlighted; low T + high water → C3 highlighted

Interactive controls:
- Strategy buttons in left panel
- "Compare All" toggle
- Climate sliders in right panel
- Hovering enzyme labels (RuBisCO, PEP carboxylase) shows tooltip with enzyme properties

Default state: C3 selected; climate sliders at moderate values (C3 suitable)

Instructional Rationale: Presenting the three strategies in the same visual format (leaf cross-section) with explicit CO₂ flow arrows, then connecting each to its optimal climate via interactive sliders, supports Analysis-level work by requiring students to attribute structural differences to functional consequences in specific environmental contexts — a core AP Biology analytical skill.

Canvas size: 700 × 460 px
Responsive: Must respond to window resize events

---

## glycolysis-simulator

- **Title:** Glycolysis Pathway Simulator
- **Chapter:** 08-cellular-respiration
- **Library:** p5.js
- **Bloom:** Understand (L2)
- **Status:** specified
- **Target:** `docs/sims/glycolysis-simulator/glycolysis-simulator.js`

### Specification

**Type:** MicroSim (p5.js)<br/>
**sim-id:** glycolysis-simulator<br/>
**Library:** p5.js<br/>

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

## atp-yield-calculator

- **Title:** ATP Yield Calculator
- **Chapter:** 08-cellular-respiration
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** specified
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

## fermentation-pathways

- **Title:** Fermentation Pathways Comparison
- **Chapter:** 08-cellular-respiration
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** specified
- **Target:** `docs/sims/fermentation-pathways/fermentation-pathways.js`

### Specification

**Type:** MicroSim (p5.js)<br/>
**sim-id:** fermentation-pathways<br/>
**Library:** p5.js<br/>

**Learning objective:** Students will be able to *compare* (Bloom's L4: Analyze) lactic acid and alcoholic fermentation in terms of reactants, products, and organisms, and explain why fermentation is necessary when oxygen is absent.

**Canvas:** 760 × 440 px, responsive.

**Layout:** Two parallel flow diagrams side by side, separated by a central divider column.

**Left panel (Lactic Acid Fermentation):**
- Glucose → (Glycolysis) → 2 Pyruvate + 2 NADH + 2 ATP
- Arrow from pyruvate → lactate (with NADH → NAD⁺ shown as curved arrow)
- Waste product label: "Lactate (lactic acid)"
- Organism examples: muscle cells, red blood cells, Lactobacillus (with small icons)

**Right panel (Alcoholic Fermentation):**
- Glucose → (Glycolysis) → 2 Pyruvate + 2 NADH + 2 ATP
- Arrow: pyruvate → acetaldehyde + CO₂ (pyruvate decarboxylase)
- Arrow: acetaldehyde → ethanol (NADH → NAD⁺ curved arrow)
- Waste products: "Ethanol + CO₂"
- Organism examples: yeast, waterlogged plant cells

**Central column:** Shows "NAD⁺ Regenerated!" badge with a circular arrow graphic; label "Purpose: Allow glycolysis to continue"

**Running ATP tally:** Both panels show "Net ATP = 2 per glucose" with a note "No extra ATP from fermentation"

**Interaction:**
- Click "Animate" to trace molecule flow through either pathway with color-coded NADH → NAD⁺ conversion
- Click organism icons to show a fun-fact pop-up (e.g., "Yeast produce CO₂ that makes bread rise!")
- Toggle between "Aerobic" (greyed out ETC shown as disabled) and "Anaerobic" (ETC marked with ✗) modes to show context

**Responsive design:** Panel widths scale with container width. Molecule labels scale proportionally.

---

## signal-transduction-pathway

- **Title:** Signal Transduction Pathway Overview
- **Chapter:** 09-cell-signaling-and-feedback
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** specified
- **Target:** `docs/sims/signal-transduction-pathway/signal-transduction-pathway.js`

### Specification

**Type:** MicroSim (p5.js)<br/>
**sim-id:** signal-transduction-pathway<br/>
**Library:** p5.js<br/>

**Learning objective:** Students will be able to *describe* (Bloom's L2: Understand) the three stages of cell signaling — reception, transduction, response — and identify the role of each stage in a given pathway.

**Canvas:** 760 × 460 px, responsive.

**Layout:** Horizontal three-panel flow: Reception (left, blue) → Transduction (center, purple) → Response (right, green). Each panel has a title header, icon, and descriptive bullet list. Arrows between panels.

**Reception panel:**
- Icon: key + lock symbol (ligand + receptor)
- Labels: "Ligand (signal molecule)", "Receptor protein"
- Text: "Specific binding triggers conformational change"
- Dropdown selector: choose receptor type (GPCR / RTK / Ligand-gated ion channel / Intracellular)
- Selection updates the center panel to show the appropriate transduction pathway

**Transduction panel (changes based on receptor selection):**
- For GPCR: shows G-protein → adenylyl cyclase → cAMP → PKA chain
- For RTK: shows dimerization → autophosphorylation → Ras → MAPK cascade
- For ion channel: shows ion influx → downstream effects
- For intracellular: shows receptor-ligand entering nucleus
- Cascade steps shown as connected circles with molecule names and phosphorylation badges (P)

**Response panel:**
- Options shown as checkboxes: Gene expression, Enzyme activation/inhibition, Ion channel opening, Cytoskeleton change, Cell division
- Active responses highlighted based on receptor selection

**Interaction:**
- Select receptor type from dropdown to update the transduction pathway
- Click any molecule in the cascade to see a tooltip with its full name, type, and function
- "Animate signal" button traces a glowing dot from ligand → receptor → cascade → response

**Responsive design:** Panel widths scale equally with container width; text scales proportionally.

---

## camp-signaling-cascade

- **Title:** cAMP Signaling Cascade
- **Chapter:** 09-cell-signaling-and-feedback
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** specified
- **Target:** `docs/sims/camp-signaling-cascade/camp-signaling-cascade.js`

### Specification

**Type:** MicroSim (p5.js)<br/>
**sim-id:** camp-signaling-cascade<br/>
**Library:** p5.js<br/>

**Learning objective:** Students will be able to *trace* (Bloom's L3: Apply) the sequence of molecular events from hormone binding to a GPCR through the cAMP-PKA cascade to a cellular response, and explain how signal amplification occurs at each step.

**Canvas:** 760 × 500 px, responsive.

**Layout:** Vertical cascade flow from top (extracellular ligand) to bottom (cellular response). Each molecule represented as a labeled circle or shape with color coding.

**Cascade steps (top to bottom):**
1. Epinephrine (ligand) — orange hexagon — "binds GPCR"
2. GPCR (7-pass receptor) — membrane-spanning rectangle — "activates G protein"
3. G protein (Gα-GTP) — purple oval — "GDP→GTP exchange; activates adenylyl cyclase"
4. Adenylyl cyclase — yellow diamond — "ATP → cAMP"
5. cAMP molecules — small blue circles (quantity increases) — "4 cAMP activate PKA"
6. PKA (active) — green pentagon — "phosphorylates target proteins"
7. Target proteins (×N) — multiple shapes — "enzyme activation or inhibition"
8. Cellular response — outcome box (e.g., "Glycogen breakdown, glucose release")

**Amplification counter:** A live counter shows how many product molecules are generated at each step. Starting with 1 epinephrine molecule, the counter shows ×1 → ×10 → ×100 → ×1000 as the signal progresses, illustrating cascade amplification.

**Phosphodiesterase toggle:** A "PDE active" button degrades cAMP (blue circles disappear) and shows PKA returning to inactive state — illustrating signal termination.

**Interaction:**
- Step-through mode: "Next step" button advances the cascade one stage at a time
- Continuous mode: "Animate" button runs the full cascade loop
- Click any molecule for a tooltip with name, type, and function
- Slider to adjust initial ligand concentration (1–100 molecules); amplification counter updates

**Responsive design:** All shapes and text scale proportionally with container width.

---

## feedback-loop-simulator

- **Title:** Feedback Loop Simulator
- **Chapter:** 09-cell-signaling-and-feedback
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** specified
- **Target:** `docs/sims/feedback-loop-simulator/feedback-loop-simulator.js`

### Specification

**Type:** MicroSim (p5.js)<br/>
**sim-id:** feedback-loop-simulator<br/>
**Library:** p5.js<br/>

**Learning objective:** Students will be able to *compare* (Bloom's L4: Analyze) negative and positive feedback loops, predict how each type responds to a perturbation, and identify real biological examples of each.

**Canvas:** 760 × 480 px, responsive.

**Layout:** Left panel: loop diagram (circular arrow showing stimulus → detector → response → effector → stimulus). Right panel: time-series graph showing the variable over time.

**Controls:**
- Toggle buttons: "Negative Feedback" / "Positive Feedback"
- Dropdown: choose example (Negative: blood glucose, thermoregulation, enzyme inhibition; Positive: action potential, blood clotting, childbirth)
- "Apply perturbation" button: introduces a step increase or decrease in the stimulus variable
- "Reset" button: returns system to initial state

**Negative feedback behavior:**
- Time graph shows an oscillating damped curve that returns to set point after perturbation
- Loop diagram arrow labeled "dampens/opposes"
- Color: blue (stabilizing)

**Positive feedback behavior:**
- Time graph shows an exponential/sigmoidal curve that moves away from baseline and may plateau (all-or-nothing)
- Loop diagram arrow labeled "amplifies/reinforces"
- Color: orange (amplifying)

**Labels on graph:** Set point (horizontal dashed line), perturbation marker (vertical dashed line), response curve.

**Interaction:**
- Selecting a different example redraws the graph with that system's characteristic dynamics
- Hover over any point on the graph to see the system state at that time
- Click on loop diagram nodes (stimulus, detector, response, effector) for explanatory tooltips

**Responsive design:** Graph and loop diagram scale proportionally with container width.

---

## mitosis-stage-explorer

- **Title:** Mitosis Stage Explorer
- **Chapter:** 10-cell-cycle-mitosis-and-cancer
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** specified
- **Target:** `docs/sims/mitosis-stage-explorer/mitosis-stage-explorer.js`

### Specification

**Type:** MicroSim (p5.js)<br/>
**sim-id:** mitosis-stage-explorer<br/>
**Library:** p5.js<br/>

**Learning objective:** Students will be able to *identify* (Bloom's L1: Remember) each stage of mitosis by its chromosome appearance and *explain* (Bloom's L2: Understand) the key molecular events driving each stage.

**Canvas:** 760 × 520 px, responsive.

**Layout:** Top: stage selector tabs (Prophase | Metaphase | Anaphase | Telophase | Cytokinesis). Center: large cell diagram showing chromosomes, spindle, nuclear envelope for the selected stage. Bottom: key events bullet list.

**Stage diagrams:**
- **Prophase:** Chromatin condensing into visible chromosomes (X-shaped sister chromatids); spindle forming from two centrosomes; nuclear envelope beginning to break down; nucleolus disappearing
- **Metaphase:** Fully condensed chromosomes aligned at metaphase plate; kinetochore microtubules attached to sister chromatids; polar microtubules overlapping at center
- **Anaphase:** Sister chromatids pulled to opposite poles by shortening kinetochore microtubules; cell elongating (polar microtubule pushing); V-shaped chromosome arms trailing
- **Telophase:** Chromosomes at poles, decondensing; nuclear envelopes reforming; two distinct nuclei; cleavage furrow beginning
- **Cytokinesis:** Cleavage furrow pinching (animal cell) with actin-myosin contractile ring shown; completed division into two daughter cells shown as result

**Color coding:** Chromosomes in contrasting colors (blue/red for two homolog pairs); spindle fibers in green; nuclear envelope in dark gray; centrosomes in orange; metaphase plate as dashed magenta line.

**Interaction:**
- Click stage tabs or "Next Stage" button to advance
- Hover over any labeled structure for a tooltip
- Toggle "Show labels" / "Hide labels" to practice identification
- "Quiz mode": hide stage name and ask user to identify the stage from the diagram

**Responsive design:** Cell diagram scales with container width.

---

## cell-cycle-checkpoints

- **Title:** Cell Cycle Checkpoint Control
- **Chapter:** 10-cell-cycle-mitosis-and-cancer
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** specified
- **Target:** `docs/sims/cell-cycle-checkpoints/cell-cycle-checkpoints.js`

### Specification

**Type:** MicroSim (p5.js)<br/>
**sim-id:** cell-cycle-checkpoints<br/>
**Library:** p5.js<br/>

**Learning objective:** Students will be able to *explain* (Bloom's L2: Understand) how cyclin-CDK complexes and checkpoint proteins regulate cell cycle progression, and *predict* (Bloom's L3: Apply) what happens when checkpoints fail.

**Canvas:** 760 × 500 px, responsive.

**Layout:** Left half: cyclin concentration graph over time (oscillating wave for Cyclin D, E, A, B overlaid). Right half: checkpoint decision flowchart at G1/S and G2/M with YES/NO branches.

**Cyclin concentration graph:**
- X-axis: cell cycle phase (G1, S, G2, M)
- Y-axis: relative protein level
- Four colored curves: Cyclin D (blue, peaks in G1), Cyclin E (green, peaks at G1/S boundary), Cyclin A (orange, peaks in S/G2), Cyclin B (red, peaks in M, drops sharply at anaphase)
- CDK activity shown as shaded region (mirrors cyclin levels)

**Checkpoint flowchart (G1/S example):**
- "Is cell large enough?" → Yes/No
- "Growth factors present?" → Yes/No
- "DNA undamaged?" → Yes/No
- All Yes → "CDK4/6–Cyclin D active → Rb phosphorylated → E2F released → S phase enters"
- Any No → "Cycle halted; repair or apoptosis"

**Toggle button:** Switch between G1/S checkpoint and G2/M checkpoint flowcharts.

**"Damage event" button:** Introduces a DNA damage signal; shows checkpoint kinases (ATM/ATR) activating p53 → p21 induced → CDK inhibited → cycle halted.

**Interaction:**
- Hover over any cyclin curve to see its name, partner CDK, and function
- Click checkpoint decision nodes to see explanatory tooltips
- "What if p53 is mutated?" button: bypasses damage arrest and shows cycle proceeding despite damage (cancer scenario)

**Responsive design:** Graph and flowchart scale proportionally with container width.

---

## cancer-mutation-simulator

- **Title:** Cancer Mutation Simulator
- **Chapter:** 10-cell-cycle-mitosis-and-cancer
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** specified
- **Target:** `docs/sims/cancer-mutation-simulator/cancer-mutation-simulator.js`

### Specification

**Type:** MicroSim (p5.js)<br/>
**sim-id:** cancer-mutation-simulator<br/>
**Library:** p5.js<br/>

**Learning objective:** Students will be able to *analyze* (Bloom's L4: Analyze) how accumulating mutations in proto-oncogenes and tumor suppressor genes progressively disrupt normal cell cycle control, leading to cancer.

**Canvas:** 760 × 480 px, responsive.

**Layout:** Left panel: mutation checklist with 6 gene events (matching colorectal cancer progression). Center: cell behavior panel (cell image + growth graph). Right: information panel describing the selected mutation.

**Six mutation events (colorectal cancer model, in order):**
1. APC loss (tumor suppressor, first hit) — "Wnt signaling activated; early adenoma"
2. Ras activation (oncogene) — "Constitutive proliferation signals; growing adenoma"
3. SMAD4/DPC4 loss (tumor suppressor) — "TGF-β growth inhibition lost; intermediate adenoma"
4. p53 loss (tumor suppressor) — "DNA damage no longer triggers apoptosis; late adenoma"
5. Telomerase reactivation — "Replicative immortality; carcinoma in situ"
6. Metastasis gene changes — "Invasion and metastasis; malignant carcinoma"

**Cell behavior panel:** As each mutation is added:
- The cell image shows increasing disorganization (from normal orderly monolayer to piled-up irregular cells)
- A growth curve updates, showing increasingly rapid, contact-inhibition-independent growth
- Color shifts from healthy green to progressively more orange/red

**Mutation type badges:** Each mutation event labeled as "Oncogene (dominant)" or "Tumor Suppressor (recessive, 2 hits)" with appropriate icon.

**Interaction:**
- Click each mutation event in sequence to add it; earlier events must be added first
- "Reset" button returns to normal cell state
- Hover over any mutation to see which gene, protein affected, and associated human cancer type

**Responsive design:** All panels scale proportionally with container width.

---

## meiosis-stages

- **Title:** Meiosis Stages Explorer
- **Chapter:** 11-meiosis-and-mendelian-genetics
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** specified
- **Target:** `docs/sims/meiosis-stages/meiosis-stages.js`

### Specification

**Type:** MicroSim (p5.js)<br/>
**sim-id:** meiosis-stages<br/>
**Library:** p5.js<br/>

**Learning objective:** Students will be able to *identify* (Bloom's L1: Remember) each stage of meiosis I and meiosis II, and *describe* (Bloom's L2: Understand) the key events and chromosome behavior at each stage.

**Instructional Rationale:** A step-through visualization is appropriate because understanding meiosis requires learners to see what happens to chromosomes at each stage in sequence. Continuous animation would blur the distinction between stages that students must learn to identify separately.

**Canvas:** 800 × 520 px, responsive.

**Layout:** Left: cell illustration showing chromosomes at each stage. Right: stage detail card with stage name, key events (bullet list), and chromosome count.

**Data Visibility Requirements:**

- Stage 1 (Interphase): Show 2n=4 chromosomes (2 homologous pairs), each as a single chromatid
- Stage 2 (Prophase I): Show replicated chromosomes (sister chromatids joined), homologs pairing (synapsis), tetrads forming, crossing over occurring at chiasmata
- Stage 3 (Metaphase I): Show tetrads lined up at metaphase plate, spindle fibers attached
- Stage 4 (Anaphase I): Show homologous pairs separating (not sister chromatids)
- Stage 5 (Telophase I / Cytokinesis I): Show two cells, each with n=2 replicated chromosomes
- Stage 6 (Prophase II): Show chromosomes condensing in each cell, new spindle forming
- Stage 7 (Metaphase II): Show chromosomes lined up at metaphase plate in both cells
- Stage 8 (Anaphase II): Show sister chromatids separating
- Stage 9 (Telophase II / Cytokinesis II): Show four haploid cells, each with n=2 single chromatids

**Color coding:**
- Maternal chromosomes: pink/red shades
- Paternal chromosomes: blue shades
- Recombinant segments: striped pink/blue after crossing over

**Interaction:**
- Next/Previous buttons to step through stages
- "Play All" button for automatic progression at adjustable speed
- Stage indicator bar showing current position in the sequence
- Chromosome count displayed at each stage

**Responsive design:** Cell illustration and card panel scale with container width.

---

## crossing-over

- **Title:** Crossing Over Visualization
- **Chapter:** 11-meiosis-and-mendelian-genetics
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** specified
- **Target:** `docs/sims/crossing-over/crossing-over.js`

### Specification

**Type:** MicroSim (p5.js)<br/>
**sim-id:** crossing-over<br/>
**Library:** p5.js<br/>

**Learning objective:** Students will be able to *explain* (Bloom's L2: Understand) how crossing over during prophase I generates recombinant chromatids carrying novel allele combinations.

**Instructional Rationale:** Step-through with concrete allele data is ideal because learners need to see exactly which alleles move where. A step-by-step approach lets students predict the outcome before it is revealed, reinforcing understanding.

**Canvas:** 760 × 460 px, responsive.

**Data Visibility Requirements:**

- Stage 1: Show two homologous chromosomes, each with 4 labeled gene loci (A/a, B/b, C/c, D/d). Maternal: A-B-C-D (pink). Paternal: a-b-c-d (blue).
- Stage 2: Chromosomes replicate → show sister chromatids joined at centromere (tetrad of 4 chromatids). Label each chromatid.
- Stage 3: Chiasmata form between loci B and C. Show X-shaped crossover point.
- Stage 4: After crossing over, show recombinant chromatids: A-B-c-d and a-b-C-D, alongside non-recombinant parental chromatids: A-B-C-D and a-b-c-d.
- Stage 5: Show the four resulting chromatids separated, labeled "Parental" or "Recombinant."

**Interaction:**
- Next/Previous step buttons
- "Predict" prompt before stage 4: "Which alleles will each recombinant chromatid carry?" (text appears before revealing the answer)
- Toggle to add a second chiasma between A and B to show double crossover

**Colors:** Maternal chromatid segments: pink (#E8A0BF). Paternal: blue (#7FB3D8). Recombinant segments: striped pattern.

**Responsive design:** Chromatid lengths and font sizes scale with container width.

---

## punnett-square-calculator

- **Title:** Interactive Punnett Square Calculator
- **Chapter:** 11-meiosis-and-mendelian-genetics
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** specified
- **Target:** `docs/sims/punnett-square-calculator/punnett-square-calculator.js`

### Specification

**Type:** MicroSim (p5.js)<br/>
**sim-id:** punnett-square-calculator<br/>
**Library:** p5.js<br/>

**Learning objective:** Students will be able to *solve* (Bloom's L3: Apply) monohybrid and dihybrid crosses using Punnett squares and *calculate* expected genotypic and phenotypic ratios.

**Instructional Rationale:** An interactive calculator gives students hands-on practice with Punnett squares. By entering parent genotypes and seeing immediate results, learners build fluency with the procedure and can check their own manual calculations.

**Canvas:** 800 × 520 px, responsive.

**Layout:**

- Top bar: Toggle between "Monohybrid" and "Dihybrid" mode
- Left panel: Parent genotype selectors
  - Monohybrid: Dropdown for Parent 1 (AA, Aa, aa) and Parent 2 (AA, Aa, aa), using configurable gene letter
  - Dihybrid: Dropdowns for two gene loci on each parent
- Center: Animated Punnett square grid that fills in cell by cell
- Right panel: Results summary — genotypic ratio, phenotypic ratio, percentage breakdown

**Interaction:**
- Select parent genotypes → Punnett square auto-fills
- "Step Through" button: fills cells one at a time with brief highlight animation
- "Show All" button: fills entire grid instantly
- Hover over any cell: highlights the contributing gametes on the row and column headers
- "Randomize Parents" button for practice

**Data Visibility:**
- Each cell shows the genotype AND a color-coded phenotype indicator
- Summary panel shows counts (e.g., 1 TT, 2 Tt, 1 tt) and ratios
- For dihybrid: shows 16-cell grid with 9:3:3:1 breakdown

**Colors:** Dominant phenotype cells: green tint. Recessive phenotype cells: tan tint. Highlighted gametes: yellow.

**Responsive design:** Grid cells and font sizes scale proportionally with container width.

---

## dihybrid-cross

- **Title:** Dihybrid Cross Outcome Visualizer
- **Chapter:** 11-meiosis-and-mendelian-genetics
- **Library:** Chart.js
- **Bloom:** Create (L6)
- **Status:** specified
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
- **Status:** specified
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

**Responsive design:** Panels reflow vertically on narrow screens.

---

## mendel-meiosis-map

- **Title:** Mendel-to-Meiosis Concept Map
- **Chapter:** 11-meiosis-and-mendelian-genetics
- **Library:** vis-network
- **Bloom:** Create (L6)
- **Status:** specified
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

## replication-fork

- **Title:** DNA Replication Fork Explorer
- **Chapter:** 13-central-dogma-replication-and-protein-synthesis
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** specified
- **Target:** `docs/sims/replication-fork/replication-fork.js`

### Specification

**Type:** MicroSim (p5.js)<br/>
**sim-id:** replication-fork<br/>
**Library:** p5.js<br/>

**Learning objective:** Students will be able to *identify* (Bloom's L1: Remember) the enzymes at the replication fork and *explain* (Bloom's L2: Understand) why the leading strand is synthesized continuously while the lagging strand requires Okazaki fragments.

**Instructional Rationale:** A step-through visualization shows each enzyme acting in sequence at the fork, making the 5'→3' directionality constraint concrete. Students can see why the lagging strand must be synthesized in fragments rather than just being told.

**Canvas:** 800 × 500 px, responsive.

**Layout:**

- Center: Replication fork diagram showing the parental DNA unwinding from left to right
  - Leading strand (top): continuous synthesis arrow pointing right
  - Lagging strand (bottom): Okazaki fragments with primers shown as colored segments
- Enzyme labels positioned at their active sites with connecting lines
- Right panel: Step description card showing current enzyme, its function, and what is happening

**Data Visibility Requirements:**

- Step 1: Helicase unwinds the helix → show separated strands
- Step 2: SSB proteins coat single strands → show protein dots
- Step 3: Primase lays down RNA primer on leading strand → show red primer segment
- Step 4: DNA Pol III extends leading strand continuously → green arrow grows
- Step 5: Primase lays down primer on lagging strand → red segment appears
- Step 6: DNA Pol III synthesizes Okazaki fragment (away from fork) → blue segment
- Step 7: Repeat steps 5–6 for second Okazaki fragment
- Step 8: DNA Pol I removes primers, fills gaps → red segments turn green
- Step 9: Ligase seals nicks → gap marks disappear

**Interaction:**
- Next/Previous step buttons
- "Play All" button with speed slider
- Hover over any enzyme label → tooltip with enzyme details
- Toggle: show/hide 5'→3' direction arrows on all strands

**Colors:** Parental DNA: gray. New leading strand: green. Okazaki fragments: blue. RNA primers: red. Enzymes: labeled circles in distinct colors.

**Responsive design:** Fork diagram scales with container width; step card reflows below on narrow screens.

---

## gene-expression-pipeline

- **Title:** Gene Expression Pipeline
- **Chapter:** 13-central-dogma-replication-and-protein-synthesis
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** specified
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

---

## genetic-code-table

- **Title:** Genetic Code Table Explorer
- **Chapter:** 13-central-dogma-replication-and-protein-synthesis
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** specified
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

## eukaryotic-gene-regulation

- **Title:** Eukaryotic Gene Regulation Layers
- **Chapter:** 14-mutations-gene-regulation-and-biotechnology
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** specified
- **Target:** `docs/sims/eukaryotic-gene-regulation/eukaryotic-gene-regulation.js`

### Specification

**Type:** Infographic (p5.js)<br/>
**sim-id:** eukaryotic-gene-regulation<br/>
**Library:** p5.js<br/>

**Learning objective:** Students will be able to *organize* (Bloom's L4: Analyze) the multiple layers of eukaryotic gene regulation from chromatin level to post-translational, and *explain* how each layer contributes to controlling gene expression.

**Instructional Rationale:** A layered infographic with progressive disclosure (hover to reveal details at each level) avoids overwhelming students with all regulatory mechanisms at once while showing the complete picture.

**Canvas:** 780 × 480 px, responsive.

**Layout:** Vertical stack of 5 layers, each represented as a horizontal band:

1. **Chromatin level** — shows nucleosomes with methylation/acetylation marks
2. **Transcriptional level** — shows promoter, enhancer, transcription factors
3. **Post-transcriptional level** — shows mRNA processing, alternative splicing
4. **Translational level** — shows miRNA binding to mRNA, ribosome blocked
5. **Post-translational level** — shows protein folding, ubiquitin tagging

**Interaction:**
- Hover over any layer → expands to show detail diagram and 2–3 sentence description
- Click layer → locks the expanded view; click again to collapse
- "Flow" animation button: traces a gene from chromatin through to functional protein, highlighting each regulatory checkpoint
- Color-coded: activation mechanisms in green, repression mechanisms in red

**Colors:** Chromatin: purple band. Transcription: blue band. Post-transcription: teal band. Translation: orange band. Post-translation: brown band.

**Responsive design:** Layers stack and expand vertically; all text and diagrams scale with container.

---

## biotech-toolkit

- **Title:** Biotechnology Toolkit Workflow
- **Chapter:** 14-mutations-gene-regulation-and-biotechnology
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** specified
- **Target:** `docs/sims/biotech-toolkit/biotech-toolkit.js`

### Specification

**Type:** Workflow diagram (p5.js)<br/>
**sim-id:** biotech-toolkit<br/>
**Library:** p5.js<br/>

**Learning objective:** Students will be able to *organize* (Bloom's L4: Analyze) the major biotechnology tools into a logical workflow and *explain* (Bloom's L2: Understand) how each tool contributes to a gene cloning or gene editing experiment.

**Instructional Rationale:** A clickable workflow diagram connecting the tools in a logical experimental pipeline helps students understand that these are not isolated techniques but rather steps in an integrated process.

**Canvas:** 780 × 480 px, responsive.

**Layout:** Flowchart with two parallel tracks:

- **Track 1: Gene Cloning** — Restriction enzymes → Gel electrophoresis → DNA cloning → Recombinant DNA → Transform bacteria → Screen colonies
- **Track 2: Gene Editing** — PCR (amplify target region) → CRISPR-Cas9 design → Guide RNA + Cas9 delivery → Repair pathway → Verify edit (sequencing)
- **Shared tools** (connecting both tracks): PCR, Gel electrophoresis, DNA sequencing

Each node is a rounded rectangle with tool name and icon.

**Interaction:**
- Hover over any node: tooltip with 2–3 sentence description of the tool and its purpose in this step
- Click any node: expands to show a mini-diagram of how the tool works
- Arrows between nodes animate to show flow direction
- Toggle: "Show Timeline" overlays approximate time for each step

**Colors:** Gene cloning track: blue (#3498DB). Gene editing track: green (#27AE60). Shared tools: purple (#8E44AD). Active node: bright highlight.

**Responsive design:** Flowchart reflows to vertical layout on narrow screens.

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
- **Status:** specified
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

## endosymbiosis-model

- **Title:** Endosymbiosis Model
- **Chapter:** 15-evidence-for-evolution
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** specified
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

## species-interactions

- **Title:** Species Interactions Web
- **Chapter:** 19-community-ecology-and-species-interactions
- **Library:** vis-network
- **Bloom:** Create (L6)
- **Status:** specified
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

---

## ecological-succession

- **Title:** Ecological Succession Timeline
- **Chapter:** 19-community-ecology-and-species-interactions
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** specified
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

## energy-pyramid

- **Title:** Energy Pyramid Explorer
- **Chapter:** 20-ecosystem-ecology-and-conservation
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** specified
- **Target:** `docs/sims/energy-pyramid/energy-pyramid.js`

### Specification

**Type:** MicroSim (p5.js)<br/>
**sim-id:** energy-pyramid<br/>
**Library:** p5.js<br/>

**Learning objective:** Students will be able to *calculate* (Bloom's L3: Apply) the energy available at each trophic level using the 10% rule and *explain* (Bloom's L2: Understand) why food chains are limited in length.

**Instructional Rationale:** An interactive pyramid with adjustable base energy and transfer efficiency lets students see the exponential energy loss firsthand and discover why a fifth trophic level receives almost nothing.

**Canvas:** 780 × 480 px, responsive.

**Layout:**

- Center: Stacked pyramid with 4 levels, each proportional to its energy content
  - Each level labeled with trophic level name and energy value
  - Width of each bar proportional to energy available
- Right panel: Controls
  - Slider: Producer energy input (1,000 to 100,000 kcal)
  - Slider: Transfer efficiency (5% to 20%, default 10%)
  - "Add Level" button (up to 6 levels)
- Bottom: Energy loss arrows showing heat dissipation at each level

**Interaction:**
- Adjust sliders → pyramid redraws immediately
- Hover over any level: tooltip with energy breakdown (transferred, lost to heat, indigestible)
- "Show Numbers" toggle: display exact kcal values on each level
- "Biomass Pyramid" toggle: switch from energy to biomass view
- "Numbers Pyramid" toggle: switch to organism count (showing inverted pyramids possible in aquatic systems)

**Colors:** Producers: green gradient. Primary consumers: light orange. Secondary: medium orange. Tertiary: red. Heat loss arrows: warm gray.

**Responsive design:** Pyramid and controls scale with container width.

---

## biogeochemical-cycles

- **Title:** Biogeochemical Cycles Dashboard
- **Chapter:** 20-ecosystem-ecology-and-conservation
- **Library:** p5.js
- **Bloom:** Create (L6)
- **Status:** specified
- **Target:** `docs/sims/biogeochemical-cycles/biogeochemical-cycles.js`

### Specification

**Type:** MicroSim (p5.js)<br/>
**sim-id:** biogeochemical-cycles<br/>
**Library:** p5.js<br/>

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
