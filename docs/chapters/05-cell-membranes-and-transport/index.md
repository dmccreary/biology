---
title: Cell Membranes and Transport
description: A complete analysis of the plasma membrane's structure and selective permeability, covering all transport mechanisms from simple diffusion through active transport and bulk vesicular transport to cell-to-cell connectivity structures.
generated_by: claude skill chapter-content-generator
date: 2026-02-26 18:17:32
version: 0.05
---

# Cell Membranes and Transport

## Summary

The plasma membrane is the cell's selective gateway, and this chapter provides a
complete analysis of its structure and functions. Beginning with the fluid mosaic
model — phospholipid bilayer, embedded proteins, and cholesterol — the chapter
explains how membrane composition determines selective permeability. It then
systematically covers every transport mechanism: passive diffusion and osmosis,
water potential and turgor pressure, facilitated diffusion through channels and
carriers, active transport powered by the sodium-potassium pump, and bulk transport
by endocytosis and exocytosis. The chapter closes with cell-to-cell connectivity
structures: plasmodesmata, extracellular matrix, and cell junctions.

## Concepts Covered

This chapter covers the following 21 concepts from the learning graph:

**Membrane Structure**

1. Plasma Membrane
2. Fluid Mosaic Model
3. Phospholipid Bilayer
4. Membrane Proteins
5. Cholesterol in Membranes
6. Selective Permeability

**Passive Transport**

7. Passive Transport
8. Diffusion
9. Osmosis
10. Water Potential
11. Turgor Pressure
12. Facilitated Diffusion

**Active Transport and Bulk Transport**

13. Active Transport
14. Sodium-Potassium Pump
15. Endocytosis
16. Exocytosis
17. Phagocytosis
18. Pinocytosis

**Cell Connectivity**

19. Plasmodesmata
20. Extracellular Matrix
21. Cell Junctions

## Prerequisites

This chapter builds on concepts from:

- [Chapter 3: Biological Macromolecules](../03-biological-macromolecules/index.md)
- [Chapter 4: Cell Organization and Organelles](../04-cell-organization-and-organelles/index.md)

---

!!! mascot-welcome "Gregor Welcomes You!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Gregor welcomes you"/>
    Welcome to Chapter 5, investigators! Every substance that enters or leaves a cell — glucose, oxygen, ions, hormones, waste products — must cross the plasma membrane. How does the membrane decide what gets through, in what direction, and at what rate? The answers involve thermodynamics, protein machinery, and one of the most elegant self-assembling structures in nature: the phospholipid bilayer. Let's investigate!

## Introduction

The **plasma membrane** is not a simple barrier — it is a dynamic, selectively permeable interface between the cell's interior and its environment. Its ability to control what crosses it is the foundation of cellular homeostasis: it allows cells to maintain concentrations of ions and molecules that are dramatically different from the surrounding fluid, to power their own metabolism, and to communicate chemically with neighboring cells. A cell that loses membrane integrity dies within seconds.

Every transport mechanism the cell uses — from the spontaneous diffusion of oxygen down its concentration gradient to the ATP-driven pumping of sodium ions against theirs — ultimately depends on the physical properties of the phospholipid bilayer and the proteins embedded within it. This chapter builds that understanding systematically: structure first, then each transport mechanism in order of energy cost, then the structures that connect cells to each other and to the extracellular world.

---

## Part 1: Membrane Structure

### The Fluid Mosaic Model

The modern description of membrane structure is the **fluid mosaic model**, proposed by Singer and Nicolson in 1972. According to this model, the membrane is a **fluid** phospholipid bilayer in which proteins are embedded and can move laterally — like icebergs floating in a sea of lipid. The word "mosaic" refers to the patchwork of different protein species distributed across the membrane surface.

#### Diagram: Cell Membrane — Fluid Mosaic Model

<iframe src="../../sims/cell-membrane/main.html" width="100%" height="730" scrolling="no"></iframe>

[View Fullscreen](../../sims/cell-membrane/main.html)

<details markdown="1">
<summary>Cell Membrane — Fluid Mosaic Model (existing sim)</summary>
Type: diagram
**sim-id:** cell-membrane<br/>
**Library:** p5.js<br/>
**Status:** Complete

This interactive diagram labels 12 structures of the plasma membrane including the phospholipid bilayer, integral and peripheral membrane proteins, glycoproteins, glycolipids, cholesterol, and the extracellular and intracellular faces. Use Explore mode to read about each component's structure and function; use Quiz mode to test identification. Reference this diagram throughout the chapter as each component is discussed.
</details>

### The Phospholipid Bilayer

The structural foundation of every biological membrane is the **phospholipid bilayer** — two sheets of phospholipids arranged tail-to-tail. As reviewed in Chapter 3, each phospholipid is amphipathic: a hydrophilic phosphate-head group (facing the aqueous environments inside and outside the cell) and two hydrophobic fatty acid tails (pointing inward, away from water). The bilayer forms spontaneously in water because of the hydrophobic effect: clustering the nonpolar tails in the interior minimizes the entropic penalty of exposing them to water.

The bilayer is approximately 7–10 nm thick. Small, nonpolar molecules ($\ce{O2}$, $\ce{CO2}$, lipid-soluble hormones) diffuse freely across it. Small polar, uncharged molecules ($\ce{H2O}$, urea, ethanol) cross slowly. Large polar molecules (glucose, amino acids) and ions ($\ce{Na+}$, $\ce{K+}$, $\ce{Cl-}$, $\ce{Ca^{2+}}$) cannot cross without protein assistance. This differential permeability is the physical basis of **selective permeability**.

Membrane **fluidity** — the lateral mobility of phospholipids within each leaflet — is critical for membrane function. Fluidity is regulated by:

- **Fatty acid saturation** — unsaturated fatty acid tails have kinks that prevent tight packing; membranes with more unsaturated tails are more fluid
- **Temperature** — higher temperatures increase molecular motion and fluidity; lower temperatures decrease it
- **Cholesterol** — inserts between phospholipid tails, buffering both extremes; at high temperatures it restricts motion (reducing excessive fluidity); at low temperatures it prevents crystallization (maintaining minimum fluidity)

### Membrane Proteins

Proteins constitute roughly 50% of the membrane by mass and carry out virtually all of the membrane's functional roles. They are classified by their relationship to the bilayer:

- **Integral (transmembrane) proteins** are embedded in the bilayer and typically span it one or more times. Their membrane-spanning segments are α-helices of nonpolar amino acids that interact with the fatty acid tails. They cannot be removed without dissolving the membrane.
- **Peripheral proteins** are loosely attached to one face of the membrane (usually the cytoplasmic face) via noncovalent interactions with lipid head groups or integral proteins. They can be removed by gentle washing with salt solutions.

Membrane proteins serve six major functional categories:

| Function | Protein Example | Mechanism |
|---|---|---|
| Transport | Aquaporin, GLUT1, $\ce{Na+}$/$\ce{K+}$-ATPase | Channel or carrier for specific solutes |
| Enzymatic activity | Adenylyl cyclase, ATPase | Catalyzes reactions at membrane surface |
| Signal transduction | G-protein coupled receptors, RTKs | Binds extracellular signal, relays intracellular message |
| Cell-cell recognition | MHC proteins, cadherins | Identifies self vs. non-self; cell-type recognition |
| Intercellular joining | Gap junction connexins, desmosomes | Structurally connects adjacent cells |
| Attachment to cytoskeleton/ECM | Integrins, spectrins | Anchors membrane to cytoskeleton or extracellular matrix |

### Cholesterol in Membranes

**Cholesterol** is present in animal cell plasma membranes at roughly one molecule per two phospholipid molecules. As noted above, it acts as a **fluidity buffer**. Beyond this role, cholesterol concentrates in specialized membrane microdomains called **lipid rafts** — regions enriched in cholesterol, sphingolipids, and certain signaling proteins. Lipid rafts appear to serve as platforms for assembling signal transduction machinery and for membrane trafficking.

Cholesterol is absent from plant cell membranes (plants use different sterols — **phytosterols** such as sitosterol and stigmasterol) and from prokaryotic membranes (most bacteria lack sterols entirely, though *Mycoplasma* is an exception). The absence of cholesterol from bacterial membranes is one reason why many antibiotics can target bacteria without harming human cells.

---

## Part 2: Passive Transport

### Passive Transport and Diffusion

**Passive transport** is the movement of molecules across a membrane without any energy input from the cell. It is driven entirely by thermodynamic principles: molecules spontaneously move from regions of higher concentration (or higher electrochemical potential) to regions of lower concentration, increasing entropy. The driving force is the **concentration gradient** (for uncharged molecules) or the **electrochemical gradient** (for ions, which are also influenced by membrane voltage).

**Diffusion** is the net movement of molecules from high to low concentration driven by random thermal motion. The rate of diffusion across a membrane is described qualitatively by **Fick's law**:

$$J = -D \cdot A \cdot \frac{\Delta C}{\Delta x}$$

where $J$ is the diffusion flux (amount per time), $D$ is the diffusion coefficient of the molecule, $A$ is the membrane surface area, $\Delta C$ is the concentration difference across the membrane, and $\Delta x$ is the membrane thickness. This equation captures the intuition that diffusion is faster when: the concentration gradient is steeper, the membrane area is larger, the membrane is thinner, and the diffusing molecule is small (high $D$).

Diffusion reaches equilibrium when the concentration is equal on both sides of the membrane — at that point there is no net movement, though molecules continue to cross randomly in both directions.

### Osmosis and Water Potential

**Osmosis** is the diffusion of water molecules across a selectively permeable membrane from a region of lower solute concentration (higher free water concentration) to a region of higher solute concentration (lower free water concentration). Water moves passively, following its own concentration gradient.

The direction and magnitude of osmosis are quantified by **water potential** ($\Psi$, psi):

$$\Psi = \Psi_s + \Psi_p$$

where $\Psi_s$ is the **solute potential** (always negative or zero; adding solutes lowers water potential) and $\Psi_p$ is the **pressure potential** (the physical pressure on the solution; positive in turgid plant cells, zero in open containers). Water always flows from higher $\Psi$ to lower $\Psi$ — that is, toward lower (more negative) water potential.

Solute potential is calculated from the van't Hoff equation:

$$\Psi_s = -iCRT$$

where $i$ is the ionization constant (number of particles a solute dissociates into), $C$ is molar concentration, $R$ is the pressure constant (0.0083 liter·MPa·mol⁻¹·K⁻¹), and $T$ is temperature in Kelvin.

The osmotic relationship between a cell and its environment determines whether the cell gains or loses water:

| Environment | Solute Concentration | Effect on Animal Cell | Effect on Plant Cell |
|---|---|---|---|
| Isotonic | Equal to cytoplasm | Normal shape; no net water movement | Normal (flaccid but not wilting) |
| Hypotonic | Less than cytoplasm | Cell swells; may lyse (cytolysis) | Cell becomes turgid (firm); wall resists bursting |
| Hypertonic | Greater than cytoplasm | Cell shrinks (crenation) | Cell undergoes plasmolysis (membrane pulls from wall) |

#### Diagram: Osmosis and Water Potential Simulator

<iframe src="../../sims/osmosis-simulator/main.html" width="100%" height="520" scrolling="no"></iframe>

[View Fullscreen](../../sims/osmosis-simulator/main.html)

<details markdown="1">
<summary>Osmosis and Water Potential Simulator MicroSim</summary>
Type: microsim
**sim-id:** osmosis-simulator<br/>
**Library:** p5.js<br/>
**Status:** Specified

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
</details>

### Turgor Pressure

In plant cells, osmotic water entry is resisted by the rigid cell wall. As water enters by osmosis, the cell contents press outward against the wall, generating **turgor pressure** ($\Psi_p$, a positive pressure potential). Turgor pressure increases water potential inside the cell, eventually halting net water entry when $\Psi_{cell} = \Psi_{external}$.

Turgor pressure is the mechanical foundation of plant structure in non-woody tissues (herbaceous plants stand upright because of turgor, not because of lignified wood), and it drives **cell expansion** during growth: cells absorb water and expand in the direction of least wall resistance, guided by how cellulose microfibrils are oriented. When a plant wilts, it is losing turgor pressure due to water loss — the cells are no longer turgid enough to support the stem and leaves.

### Facilitated Diffusion

Large, polar, or charged molecules cannot cross the hydrophobic core of the bilayer by simple diffusion, but they can move passively through specific membrane proteins by **facilitated diffusion** — still down their concentration gradient, still requiring no energy, but at a much faster rate than unaided diffusion. Two protein types mediate facilitated diffusion:

- **Channel proteins** — form hydrophilic pores through the membrane. **Aquaporins** allow water to cross at rates 10–100× faster than simple diffusion. **Ion channels** allow specific ions ($\ce{Na+}$, $\ce{K+}$, $\ce{Ca^{2+}}$, $\ce{Cl-}$) to pass when the channel is open. Most ion channels are **gated**: they open and close in response to specific stimuli (voltage changes → voltage-gated; ligand binding → ligand-gated; mechanical stretch → mechanically gated).
- **Carrier proteins** — bind specific solutes and undergo a conformational change that releases the solute on the other side of the membrane. **GLUT transporters** (glucose transporters) are the most studied; GLUT1 constitutively transports glucose into red blood cells; GLUT4 in muscle and fat cells is insulin-regulated, moving to the membrane from intracellular vesicles in response to insulin binding.

Facilitated diffusion saturates at high substrate concentrations (all carrier molecules occupied), unlike simple diffusion. This saturation kinetics mirrors enzyme kinetics (Chapter 6) and reflects the finite number of transporter proteins in a membrane.

---

## Part 3: Active Transport and Bulk Transport

### Active Transport

**Active transport** moves solutes across a membrane **against** their concentration (or electrochemical) gradient — from low concentration to high concentration. This is thermodynamically unfavorable and requires the cell to couple the transport to an exergonic process, typically ATP hydrolysis or the potential energy of a pre-existing electrochemical gradient.

- **Primary active transport** is directly coupled to ATP hydrolysis. The ATP-powered pump undergoes phosphorylation (by ATP), changes conformation to translocate the solute, then dephosphorylates. The $\ce{Na+}$/$\ce{K+}$-ATPase is the most important example.
- **Secondary active transport** is driven by the electrochemical gradient created by a primary pump. In **cotransport (symport)**, a solute moves down its gradient in the same direction as another solute (e.g., $\ce{Na+}$ and glucose both moving into intestinal cells via SGLT1 — the $\ce{Na+}$ gradient is maintained by the $\ce{Na+}$/$\ce{K+}$-ATPase). In **antiport**, solutes move in opposite directions.

### The Sodium-Potassium Pump ($\ce{Na+}$/$\ce{K+}$-ATPase)

The **sodium-potassium pump** ($\ce{Na+}$/$\ce{K+}$-ATPase) is the dominant primary active transporter in animal cells, consuming approximately one-third of all cellular ATP in neurons and other excitable cells. Each pump cycle:

1. Binds **3 $\ce{Na+}$** from the cytoplasm
2. Hydrolyzes **1 ATP** → phosphorylates the pump protein → conformational change opens the pump to the extracellular side
3. Releases **3 $\ce{Na+}$** outside the cell; binds **2 $\ce{K+}$** from outside
4. Dephosphorylation → conformational change returns pump to cytoplasmic-facing state
5. Releases **2 $\ce{K+}$** inside the cell; ready for next cycle

Net result per cycle: 3 $\ce{Na+}$ out, 2 $\ce{K+}$ in, 1 ATP consumed. This creates steep concentration gradients: $[\ce{Na+}]$ is ~14 mmol/L inside vs. ~145 mmol/L outside; $[\ce{K+}]$ is ~140 mmol/L inside vs. ~4 mmol/L outside. The combined chemical and electrical gradient (the **electrochemical gradient**) for $\ce{Na+}$ inward is used to power secondary cotransporters for glucose, amino acids, and other nutrients. The pump also contributes to the **resting membrane potential** (~−70 mV inside) of neurons, because it moves more positive charges out than it brings in.

#### Diagram: Sodium-Potassium Pump Cycle

<iframe src="../../sims/sodium-potassium-pump/main.html" width="100%" height="520" scrolling="no"></iframe>

[View Fullscreen](../../sims/sodium-potassium-pump/main.html)

<details markdown="1">
<summary>Sodium-Potassium Pump Cycle MicroSim</summary>
Type: microsim
**sim-id:** sodium-potassium-pump<br/>
**Library:** p5.js<br/>
**Status:** Specified

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
</details>

!!! mascot-tip "Gregor's Tip: Active vs. Passive — The Energy Test"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Gregor tip"/>
    The fastest way to classify any transport mechanism on the college placement exam is to ask two questions: (1) Does it move the solute against its concentration gradient? If yes, it must be active transport. (2) Does it require ATP directly (primary) or use a gradient built by ATP (secondary)? Facilitated diffusion can look like active transport because it uses proteins, but it never moves solutes against their gradient and never requires energy.

### Endocytosis

**Endocytosis** is the process by which cells engulf materials from outside by folding the plasma membrane inward to form an **endocytic vesicle**. The three forms differ in what is taken up:

- **Phagocytosis** ("cell eating") — engulfment of large particles (bacteria, dead cells, debris) by extending pseudopods that surround the target and fuse. The resulting **phagosome** fuses with a lysosome to digest its contents. Phagocytosis is performed by specialized cells (macrophages, neutrophils, dendritic cells) as part of the immune response.
- **Pinocytosis** ("cell drinking") — non-specific uptake of small droplets of extracellular fluid and dissolved solutes into small vesicles. All cells perform pinocytosis continuously as part of normal membrane recycling.
- **Receptor-mediated endocytosis** — highly specific uptake of particular macromolecules bound to specific receptor proteins concentrated in coated pits (regions of membrane coated on the cytoplasmic face with the protein clathrin). The receptor-ligand complex is internalized; the cargo is typically delivered to lysosomes while receptors are recycled to the plasma membrane. LDL (low-density lipoprotein) cholesterol uptake is the classic example; mutations in the LDL receptor cause familial hypercholesterolemia.

### Exocytosis

**Exocytosis** is the reverse of endocytosis: vesicles from within the cell fuse with the plasma membrane and release their contents to the extracellular space. All secreted proteins (digestive enzymes, hormones, antibodies, neurotransmitters) are released by exocytosis. Exocytosis is also the mechanism by which the membrane adds material during growth and how cells restore membrane area after a round of endocytosis.

The following table summarizes the full spectrum of membrane transport mechanisms:

| Mechanism | Energy Required | Direction | Protein Needed | Example |
|---|---|---|---|---|
| Simple diffusion | None | Down gradient | No | $\ce{O2}$, $\ce{CO2}$, lipids |
| Osmosis | None | Down water potential gradient | No (or aquaporin) | Water across root hair cells |
| Facilitated diffusion | None | Down gradient | Yes (channel or carrier) | Glucose (GLUT1), ions (ion channels) |
| Primary active transport | ATP (direct) | Against gradient | Yes (pump) | $\ce{Na+}$/$\ce{K+}$-ATPase; $\ce{H+}$-ATPase |
| Secondary active transport | ATP (indirect via gradient) | Against gradient for one solute | Yes (cotransporter) | SGLT1 (Na⁺/glucose symport) |
| Endocytosis | ATP | Into cell (bulk) | Yes (coat proteins) | Phagocytosis; receptor-mediated endocytosis |
| Exocytosis | ATP | Out of cell (bulk) | Yes (SNARE proteins) | Neurotransmitter release; hormone secretion |

!!! mascot-warning "Common Mistake: Osmosis Is Not Active Transport"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Gregor warning"/>
    Students sometimes classify osmosis as active transport because water seems to "defy" concentration gradients — water moves toward the side with more solute, which has less free water. But water is following its own concentration gradient (from more free water → less free water), which is exactly what passive transport does. Osmosis is always passive. The cell never expends ATP to move water directly; it moves ions actively (using the Na⁺/K⁺ pump) and water follows osmotically.

---

## Part 4: Cell Connectivity

### Plasmodesmata

**Plasmodesmata** (singular: plasmodesma) are membrane-lined channels that penetrate the cell walls of adjacent plant cells, connecting their cytoplasms directly. Each plasmodesma is about 40–60 nm in diameter and contains a thin tube of ER-derived membrane called the **desmotubule** running through its center. The cytoplasm flows through the space between the desmotubule and the outer plasma membrane.

Plasmodesmata allow direct cell-to-cell communication without requiring molecules to cross a membrane: small molecules (ions, sugars, amino acids, signaling molecules, small RNA species) move symplastically from cell to cell. The **plasmodesmatal pore** can be regulated — during injury, callose (a β-glucan polymer) is rapidly deposited to seal plasmodesmata and restrict pathogen spread. Viruses that infect plants exploit plasmodesmata by encoding "movement proteins" that enlarge the pores to allow viral RNA to spread throughout the plant.

### Extracellular Matrix

**Animal cells** (which lack cell walls) are embedded in the **extracellular matrix (ECM)** — a complex network of secreted proteins and polysaccharides that fills the space between cells, provides structural scaffolding, and transmits signals.

The major ECM components are:

- **Collagen** — the most abundant protein in the human body; forms strong, inextensible fibers that resist tensile stress (tendons, cartilage, bone, skin)
- **Proteoglycans** — proteins heavily decorated with glycosaminoglycan chains (long, negatively charged polysaccharides); form a gel-like ground substance that resists compression (cartilage) and retains water
- **Fibronectin and laminin** — adhesive glycoproteins that link the ECM to integrins on the cell surface, transmitting mechanical and chemical signals into the cell (**outside-in signaling**)
- **Elastin** — forms elastic fibers that allow tissues to recoil after stretching (arteries, lungs, skin)

**Integrins** are transmembrane receptor proteins that span the plasma membrane, binding ECM components (fibronectin, laminin, collagen) outside and anchoring the cytoskeleton (especially actin filaments) inside. Integrin signaling regulates cell survival, proliferation, migration, and differentiation — and cancer cells frequently exhibit altered integrin expression that enables invasion through the ECM.

### Cell Junctions

**Cell junctions** are protein complexes at the contact points between adjacent cells (or between a cell and the ECM) that mechanically connect cells, seal spaces between them, or allow direct communication. Three major junction types exist in animal cells:

- **Tight junctions** — formed by proteins called claudins and occludins that form a seal between adjacent epithelial cells at the apical (top) surface, preventing paracellular leakage of ions and molecules between cells. Tight junctions create distinct apical and basolateral membrane domains in polarized epithelial cells. They are especially important in the gut epithelium (preventing luminal bacteria from entering the body) and the blood-brain barrier.
- **Desmosomes** (macula adherens) — strong mechanical anchors that link the intermediate filaments (keratin) of adjacent cells through transmembrane cadherin proteins. Desmosomes resist shear forces in tissues subjected to mechanical stress (skin, heart muscle, bladder epithelium). Autoimmune attacks on desmosomal cadherins cause the blistering skin disease pemphigus.
- **Gap junctions** — protein channels (connexons) formed by six connexin subunits per channel that directly connect the cytoplasms of adjacent cells, allowing ions, second messengers (cAMP, $\ce{Ca^{2+}}$, IP₃), and small metabolites to pass between cells without crossing a membrane. Gap junctions coordinate electrical and metabolic coupling between cells — they synchronize the contractions of cardiac muscle and smooth muscle, and allow developing cells to share morphogenetic signals.

In plants, the functional analogue of gap junctions is the plasmodesma (described above).

#### Diagram: Cell Junctions Explorer

<iframe src="../../sims/cell-junctions-explorer/main.html" width="100%" height="590" scrolling="no"></iframe>

[View Fullscreen](../../sims/cell-junctions-explorer/main.html)

<details markdown="1">
<summary>Cell Junctions Explorer MicroSim</summary>
Type: infographic
**sim-id:** cell-junctions-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

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
</details>

---

## Key Connections and Chapter Summary

The plasma membrane and its transport mechanisms form the interface between the cell and its environment — the control point for all of cellular homeostasis:

- **Fluid mosaic model** — the membrane is a dynamic phospholipid bilayer with embedded proteins; fluidity is regulated by fatty acid saturation and cholesterol; integral proteins perform transport, signaling, and structural functions.
- **Selective permeability** — small nonpolar molecules cross freely; large or charged molecules require protein channels or carriers.
- **Passive transport** (diffusion, osmosis, facilitated diffusion) — driven by concentration or water-potential gradients; no ATP required; moves solutes down their gradients.
- **Water potential** ($\Psi = \Psi_s + \Psi_p$) — predicts water movement direction; turgor pressure ($\Psi_p$) in plant cells provides structural support and drives growth.
- **Active transport** — requires ATP; moves solutes against gradients; the $\ce{Na+}$/$\ce{K+}$-ATPase (3 $\ce{Na+}$ out, 2 $\ce{K+}$ in, 1 ATP) is the master pump that creates the gradients driving secondary cotransport of glucose and amino acids.
- **Bulk transport** (endocytosis, exocytosis) — vesicle-mediated; requires ATP and cytoskeletal machinery; moves materials too large for protein channels.
- **Cell junctions** (tight, desmosome, gap junction; plasmodesmata in plants) — provide selective sealing, mechanical coupling, and direct cell-to-cell communication.

!!! mascot-celebration "Excellent Work!"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Gregor celebrating"/>
    Superb work, investigators! You now understand how a cell controls what enters and exits — and why that control is central to everything a cell does. The sodium gradient you learned about here powers the secondary transporters that fuel every absorptive cell in your intestine. The water potential concept you mastered predicts exactly which way water moves in a plant root, a nephron tubule, or an IV bag. The membrane transport principles in this chapter are the engine behind cellular energetics (Chapters 7 and 8) and signal transduction (Chapter 9).

??? note "Self-Check: Test Your Understanding — Click to Reveal"
    **Question:** A student places red blood cells in three solutions: Solution A (0.9% NaCl — normal saline), Solution B (distilled water), and Solution C (5% NaCl). (a) Predict what happens to the cells in each solution and explain why using the concept of water potential. (b) If the same experiment were done with plant cells, how would the result in Solution B differ from the result for red blood cells, and why? (c) A cell uses SGLT1 to absorb glucose from the intestinal lumen even when intracellular glucose is high. Is this active or passive transport? Explain.

    **Answer:** (a) **Solution A (isotonic):** $\Psi$ of solution ≈ $\Psi$ of cytoplasm; no net osmosis; cells maintain normal shape. **Solution B (hypotonic):** $\Psi_{water}$ of pure water (0) > $\Psi_{cytoplasm}$ (negative, due to solutes); water enters by osmosis; red blood cells swell and lyse (cytolysis). **Solution C (hypertonic):** $\Psi_{5\% NaCl}$ << $\Psi_{cytoplasm}$; water exits the cell; red blood cells shrink and crenate. (b) In Solution B, **plant cells** would swell (water enters by osmosis) but would NOT lyse because the rigid cellulose cell wall resists expansion and builds turgor pressure ($\Psi_p$ increases until $\Psi_{cell} = 0$, halting net water entry). Red blood cells lack a cell wall and burst. (c) **Secondary active transport.** SGLT1 uses the $\ce{Na+}$ electrochemical gradient (established by the $\ce{Na+}$/$\ce{K+}$-ATPase, which directly uses ATP) to co-transport $\ce{Na+}$ and glucose into the cell. Glucose moves against its own concentration gradient, powered indirectly by ATP. This is secondary active transport — it requires ATP (albeit indirectly) and moves glucose against its gradient.

[See Annotated References](./references.md)
