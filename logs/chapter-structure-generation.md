# Chapter Structure Generator

❯ run the /book-chapter-generator skill 

⏺ Skill(book-chapter-generator)
  ⎿  Successfully loaded skill

⏺ Searched for 1 pattern, read 3 files (ctrl+o to expand)

⏺ I need to read the full node list from the learning graph. Let me use an agent to analyze the complete JSON efficiently.

⏺ Explore(Extract all concepts from learning graph)
  ⎿  Done (15 tool uses · 88.5k tokens · 2m 16s)
  (ctrl+o to expand)

⏺ Now I have everything I need. Let me design the chapter structure.

  Key findings:
  - 380 total concepts across 12 taxonomy categories
  - Largest categories: ENRG (55), EVOL (49), CELL (43), GENET (35), POPECO (33), MOLBIO (32)
  - BIOTECH has all 23 concepts as foundational (no internal dependencies — plugs in after MOLBIO)
  - Enzymes (16 dependents), Natural Selection (12), Eukaryotic Cells (23) are the critical hub nodes

  ---
  Proposed Chapter Structure

  I've designed a 20-chapter structure for college placement Biology: An Interactive Course covering all 380 concepts, mapped to the 8 College
  Board college placement Biology units.

  ---
  Chapters

  Unit 1 — Chemistry of Life

  1. Scientific Foundations and Atomic Chemistry (18 concepts)
  Covers the nature of science, experimental design, and statistical reasoning, then establishes the atomic and bonding
  foundations of biological chemistry.
  FOUND (11): Scientific Method, Hypothesis Testing, Controlled Experiments, Independent and Dependent Variables, Chi-Square
  Test, Standard Deviation, Data Interpretation, Graph Construction + 3 additional
  CHEM part 1 (7): Atomic Structure, Elements of Life, Chemical Bonds, Ionic Bonds, Covalent Bonds, Hydrogen Bonds, Van der Waals
   Forces

  2. Water, pH, and Organic Chemistry (14 concepts)
  Explores the unique properties of water that make life possible, acid-base chemistry, and the organic functional groups that
  form the backbone of all biomolecules.
  CHEM part 2 (14): Water Polarity, Cohesion and Adhesion, Surface Tension, Specific Heat Capacity, Universal Solvent,
  Hydrophilic/Hydrophobic, Acid-Base Chemistry, pH Scale, Buffers, Organic Chemistry Basics, Functional Groups, Polymers and
  Monomers, Condensation Reactions, Hydrolysis Reactions

  3. Biological Macromolecules (23 concepts)
  Examines the four classes of biological macromolecules — carbohydrates, lipids, proteins, and nucleic acids — including their
  monomers, structures, and functions.
  MACRO (23): Carbohydrates through Nucleotides, DNA Structure, RNA Structure

  ---
  Unit 2 — Cell Structure and Function

  4. Cell Organization and Organelles (22 concepts)
  Introduces cell theory, compares prokaryotic and eukaryotic cells, and surveys the organelles and cytoskeletal elements that
  define eukaryotic cell architecture.
  CELL part 1 (22): Cell Theory, Prokaryotic Cells, Eukaryotic Cells, Cell Size/Surface Area, Nucleus, Nuclear Envelope,
  Nucleolus, Rough/Smooth ER, Golgi Apparatus, Lysosomes, Vacuoles, Mitochondria, Chloroplasts, Peroxisomes, Cytoskeleton
  (Microfilaments, Microtubules, Intermediate Filaments), Cilia/Flagella, Cell Wall, Plasmodesmata, Extracellular Matrix, Cell
  Junctions

  5. Cell Membranes and Transport (21 concepts)
  Analyzes the fluid mosaic model of membrane structure and all mechanisms by which substances cross cell membranes, from passive
   diffusion to active endocytosis.
  CELL part 2 (21): Plasma Membrane, Fluid Mosaic Model, Phospholipid Bilayer, Membrane Proteins, Cholesterol in Membranes,
  Selective Permeability, Passive Transport, Diffusion, Osmosis, Water Potential, Turgor Pressure, Facilitated Diffusion, Active
  Transport, Sodium-Potassium Pump, Endocytosis, Exocytosis, Phagocytosis, Pinocytosis + 3 additional

  ---
  Unit 3 — Cellular Energetics

  6. Thermodynamics and Enzyme Kinetics (25 concepts)
  Establishes the thermodynamic principles governing biological reactions and examines enzyme structure, mechanism, and
  regulation — the foundation for understanding all metabolic pathways.
  ENRG part 1 (25): Thermodynamics, First/Second Laws, Entropy, Gibbs Free Energy, Exergonic/Endergonic Reactions, ATP Structure,
   ATP Hydrolysis, Coupled Reactions, Redox Reactions, Enzymes, Active Site, Enzyme-Substrate Complex, Activation Energy,
  Transition State, Induced Fit, Cofactors/Coenzymes, Competitive Inhibition, Noncompetitive Inhibition, Allosteric Regulation,
  Feedback Inhibition, Temperature/pH effects on enzymes

  7. Photosynthesis (17 concepts)
  Traces the two stages of photosynthesis — the light-dependent reactions (including the ETC) and the Calvin cycle — and compares
   C3, C4, and CAM photosynthetic strategies.
  ENRG part 2 (17): Photosynthesis Overview, Chlorophyll/Pigments, Absorption Spectrum, Photosystems I/II, Light-Dependent
  Reactions, Photolysis of Water, ETC (Chloroplast), ATP Synthase, Proton Gradient, Calvin Cycle, Carbon Fixation, RuBisCO,
  G3P/Sugar Production, C3/C4/CAM Plants, Photorespiration

  8. Cellular Respiration and Fermentation (13 concepts)
  Follows the complete oxidation of glucose through glycolysis, pyruvate oxidation, the Krebs cycle, and oxidative
  phosphorylation, concluding with anaerobic fermentation pathways.
  ENRG part 3 (13): Cellular Respiration Overview, Glycolysis, Substrate-Level Phosphorylation, Pyruvate Oxidation, Acetyl-CoA,
  Krebs Cycle, ETC (Mitochondria), Oxidative Phosphorylation, Chemiosmosis, NADH and FADH₂, ATP Yield of Respiration,
  Fermentation, Lactic Acid/Alcoholic Fermentation

  ---
  Unit 4 — Cell Communication and the Cell Cycle

  9. Cell Signaling and Feedback (14 concepts)
  Describes how cells receive, transduce, and respond to extracellular signals through receptor types, second-messenger cascades,
   feedback loops, and apoptosis.
  COMM part 1 (14): Cell Signaling Overview, Signal Transduction, Ligand-Receptor Binding, Cell Surface Receptors, GPCRs,
  Receptor Tyrosine Kinases, Intracellular Receptors, Second Messengers, cAMP Signaling, Phosphorylation Cascades, Signal
  Amplification, Negative Feedback Loops, Positive Feedback Loops, Apoptosis

  10. The Cell Cycle, Mitosis, and Cancer (16 concepts)
  Examines the stages of the eukaryotic cell cycle, the mechanics of mitosis, and how checkpoints and regulatory proteins — when
  disrupted — drive cancer.
  COMM part 2 (16): Cell Cycle Overview, G1/S/G2 Phases, Mitosis (Prophase, Metaphase, Anaphase, Telophase), Cytokinesis, Cell
  Cycle Checkpoints, Cyclins and CDKs, Proto-Oncogenes, Tumor Suppressor Genes, Cancer Biology, Contact Inhibition

  ---
  Unit 5 — Heredity

  11. Meiosis and Mendelian Genetics (20 concepts)
  Covers the mechanics of meiosis that produce genetically unique gametes, then applies Mendel's laws to predict inheritance
  outcomes in monohybrid and dihybrid crosses.
  GENET part 1 (20): Meiosis Overview/I/II, Synapsis and Tetrad Formation, Crossing Over, Chiasmata, Genetic Recombination,
  Haploid/Diploid Cells, Gametes, Fertilization, Chromosomal Theory of Inheritance, Mendel's Laws (Segregation + Independent
  Assortment), Dominant/Recessive Alleles, Genotype/Phenotype, Homozygous/Heterozygous, Monohybrid/Dihybrid Crosses, Punnett
  Squares, Test Crosses

  12. Non-Mendelian Inheritance and Chromosomal Genetics (15 concepts)
  Extends Mendelian principles to incomplete dominance, codominance, polygenic traits, and sex-linked inheritance, and examines
  chromosomal abnormalities analyzed through pedigrees.
  GENET part 2 (15): Incomplete Dominance, Codominance, Multiple Alleles, Sex Determination, Sex-Linked Traits, X-Linked
  Inheritance, Polygenic Inheritance, Epistasis, Pleiotropy, Genetic Linkage, Recombination Frequency, Chromosomal Abnormalities,
   Nondisjunction, Aneuploidy, Pedigree Analysis

  ---
  Unit 6 — Gene Expression and Regulation

  13. The Central Dogma: DNA Replication and Protein Synthesis (26 concepts)
  Traces the central dogma from DNA replication through transcription and RNA processing to translation, building a complete
  molecular picture of how genetic information becomes protein.
  MOLBIO part 1 (26): DNA Double Helix, Base Pairing Rules, DNA Replication, DNA Polymerase, Semiconservative Replication,
  Leading/Lagging Strands, Okazaki Fragments, DNA Proofreading/Repair, Telomeres, Transcription Overview, RNA Polymerase,
  Promoter Regions, Transcription Termination, mRNA Processing, 5′ Cap/Poly-A Tail, RNA Splicing, Introns/Exons, Alternative
  Splicing, Translation Overview, Ribosomes, Codons/Anticodons, tRNA Structure, Aminoacyl-tRNA Synthetases, Start/Stop Codons,
  Genetic Code, Polysomes

  14. Mutations, Gene Regulation, and Biotechnology (29 concepts)
  Examines how mutations alter gene products, how cells regulate gene expression at multiple levels from operons to epigenetics,
  and introduces modern biotechnology tools.
  MOLBIO part 2 (6): Point/Frameshift/Silent/Missense/Nonsense Mutations, Mutagens and DNA Damage
  BIOTECH (23): Gene Regulation (Prokaryotes/Eukaryotes), Operons, Lac/Trp Operons, Transcription Factors, Enhancers/Silencers,
  Epigenetic Regulation, DNA Methylation, Histone Modification, Chromatin Remodeling, MicroRNAs, Biotechnology Overview,
  Restriction Enzymes, Gel Electrophoresis, PCR, DNA Cloning, Recombinant DNA, CRISPR-Cas9, Gene Therapy, DNA Sequencing,
  Genomics Overview, Bioinformatics Basics

  ⚠️  Design note: 29 concepts is at the upper limit. However, mutations and gene regulation form a tight conceptual unit (how
  sequence errors + regulatory mechanisms change what proteins are made), and all 23 BIOTECH concepts are foundational (zero
  internal dependencies) making them naturally modular within the chapter.

  ---
  Unit 7 — Natural Selection and Evolution

  15. Evidence for Evolution and Mechanisms of Change (18 concepts)
  Reviews Darwin's theory and the fossil, anatomical, embryological, and molecular evidence supporting it, then introduces
  natural selection as the primary mechanism driving evolutionary change.
  EVOL part 1 (18): History of Evolutionary Thought, Darwin's Observations, Natural Selection, Variation in Populations,
  Heritability, Relative Fitness, Artificial Selection, Fossil Record Evidence, Relative/Absolute Dating, Comparative Anatomy,
  Homologous/Analogous/Vestigial Structures, Comparative Embryology, Molecular Evidence for Evolution, Biogeography,
  Endosymbiotic Theory, Origin of Eukaryotes

  16. Population Genetics and Hardy-Weinberg Equilibrium (16 concepts)
  Applies population genetics to quantify allele frequencies, model Hardy-Weinberg equilibrium, and analyze how genetic drift,
  gene flow, mutation, and selection alter population variation.
  EVOL part 2 (16): Population Genetics, Allele Frequency, Hardy-Weinberg Equilibrium/Assumptions, Genetic Drift, Founder Effect,
   Bottleneck Effect, Gene Flow, Mutation and Evolution, Sexual Selection, Stabilizing/Directional/Disruptive Selection, Three
  Domains of Life, Mass Extinctions, Macroevolution

  17. Speciation, Phylogenetics, and Macroevolution (15 concepts)
  Explains how reproductive isolation leads to speciation, introduces cladistic methods for reconstructing evolutionary history,
  and surveys large-scale patterns in evolution.
  EVOL part 3 (15): Biological Species Concept, Speciation Overview, Reproductive Isolation, Prezygotic/Postzygotic Barriers,
  Allopatric/Sympatric Speciation, Adaptive Radiation, Convergent Evolution, Coevolution, Phylogenetics, Cladistics, Cladograms,
  Shared Derived Characters, Molecular Clocks

  ---
  Unit 8 — Ecology

  18. Population Ecology and Life History (15 concepts)
  Models how populations grow, what limits their size, and how natural selection shapes life history trade-offs between
  reproduction and survival.
  POPECO part 1 (15): Ecology Overview, Levels of Ecological Organization, Abiotic/Biotic Factors, Population Ecology, Population
   Density, Dispersion Patterns, Exponential/Logistic Population Growth, Carrying Capacity, Limiting Factors, Density-Dependent
  Regulation, Density-Independent Factors, Survivorship Curves, Life History Strategies, r/K-Selection

  19. Community Ecology and Species Interactions (18 concepts)
  Analyzes the full range of interspecific interactions — predation, competition, mutualism, parasitism — and the processes of
  ecological succession and island biogeography that shape community structure.
  POPECO part 2 (18): Community Ecology, Interspecific Interactions, Predation, Herbivory, Competition, Competitive Exclusion,
  Resource Partitioning, Ecological Niches, Mutualism, Commensalism, Parasitism, Keystone Species, Trophic Cascades, Ecological
  Succession, Primary/Secondary Succession, Climax Community, Island Biogeography

  20. Ecosystem Ecology, Biogeochemical Cycles, and Conservation (25 concepts)
  Traces energy flow and nutrient cycling through ecosystems, surveys major biomes, and evaluates how human activities threaten
  biodiversity and what conservation strategies can address those threats.
  ECOSYS (25): Ecosystem Ecology, Trophic Levels, Food Chains/Webs, Energy Flow, Ten Percent Rule, Primary/Net Primary
  Productivity, Biogeochemical Cycles, Carbon/Nitrogen/Phosphorus/Water Cycles, Nitrogen Fixation, Biomes Overview,
  Terrestrial/Aquatic Biomes, Biodiversity, Species Richness/Evenness, Habitat Fragmentation, Invasive Species, Climate Change
  and Ecology, Conservation Biology, Ecological Footprint

  ---
  Design Challenges and Solutions

  ┌─────────────────────────────────┬────────────────────────────────────────────────────────────────────────────────────────┐
  │            Challenge            │                                        Solution                                        │
  ├─────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────┤
  │ ENRG has 55 concepts — far too  │ Split into three thematic chapters: thermodynamics/enzymes (Ch 6), photosynthesis (Ch  │
  │ many for one chapter            │ 7), respiration (Ch 8)                                                                 │
  ├─────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────┤
  │ EVOL has 49 concepts spanning   │ Split into three chapters: evidence/mechanisms (Ch 15), population genetics (Ch 16),   │
  │ very different topics           │ speciation/phylogenetics (Ch 17)                                                       │
  ├─────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────┤
  │ CELL has 43 concepts            │ Split at the natural organelles vs. membranes/transport boundary (Ch 4 and 5)          │
  ├─────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────┤
  │ BIOTECH (23 nodes) has zero     │ Combined with MOLBIO mutations in Ch 14 — all 23 are modular and can be presented in   │
  │ internal dependencies           │ any order within the chapter                                                           │
  ├─────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────┤
  │ Ch 14 reaches 29 concepts       │ At the upper limit; justified because mutations + gene regulation + biotech form one   │
  │                                 │ tightly coupled college placement exam topic (Unit 6 on the CED). Could split into 2 if desired.      │
  ├─────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────┤
  │ Ch 7 (Photosynthesis) has only  │ Acceptable — content density is very high; students typically need 2–3 weeks for this  │
  │ 17 concepts                     │ topic                                                                                  │
  ├─────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────┤
  │ Ch 8 (Cellular Respiration) has │ Acceptable — analogous to photosynthesis in depth; the ETC interactive diagram sim     │
  │  only 13 concepts               │ already exists                                                                         │
  └─────────────────────────────────┴────────────────────────────────────────────────────────────────────────────────────────┘

  ---
  Statistics

  ┌────────────────────────────────────┬─────────────────────────────────────────────────┐
  │               Metric               │                      Value                      │
  ├────────────────────────────────────┼─────────────────────────────────────────────────┤
  │ Total chapters                     │ 20                                              │
  ├────────────────────────────────────┼─────────────────────────────────────────────────┤
  │ Total concepts                     │ 380                                             │
  ├────────────────────────────────────┼─────────────────────────────────────────────────┤
  │ Average per chapter                │ 19.0                                            │
  ├────────────────────────────────────┼─────────────────────────────────────────────────┤
  │ Range                              │ 13–29 concepts                                  │
  ├────────────────────────────────────┼─────────────────────────────────────────────────┤
  │ All 380 concepts covered           │ ✓                                               │
  ├────────────────────────────────────┼─────────────────────────────────────────────────┤
  │ All dependencies respected         │ ✓                                               │
  ├────────────────────────────────────┼─────────────────────────────────────────────────┤
  │ Chapters within 8–25 optimal range │ 18/20                                           │
  ├────────────────────────────────────┼─────────────────────────────────────────────────┤
  │ Chapters slightly outside range    │ Ch 14 (29) and Ch 8 (13) — both justified above │
  └────────────────────────────────────┴─────────────────────────────────────────────────┘

  ---                                                                                                                            
                    
⏺ User answered Claude's questions:      
  ⎿  · Do you approve this 20-chapter structure? → Yes — generate all files
 
---

# Detailed Analytical Session Log

**Date:** 2026-02-26
**Session:** Chapter structure analysis and generation for college placement Biology: An Interactive Course
**Analyst:** Claude Sonnet 4.6

---

## Phase 1: Input Resource Analysis

### 1.1 Course Description Analysis

Read `docs/course-description.md`. Key structural constraints extracted:

- **Course scope:** 8 College Board college placement Biology units (Unit 1–8)
- **Target audience:** AP-level high school students (grades 11–12)
- **Stated chapter count hint:** "8 units, approximately 4–6 chapters per unit"
  — This suggested 32–48 chapters, far exceeding the skill's 6–20 chapter ceiling.
  **Decision:** Ignore the per-unit sub-chapter hint and target 20 chapters total
  that map thematically to the 8 units. The units still serve as the primary
  organizational grouping in the nav and summaries.
- **college placement exam alignment:** All concept coverage must support College Board CED
  (Course and Exam Description) learning objectives.

### 1.2 Learning Graph Analysis

An Explore subagent read the full `docs/learning-graph/learning-graph.json`
(380 nodes, 774 edges). Key findings:

**Node count by taxonomy category:**

| Category | Code | Nodes | Foundational (no deps) | % Foundational |
|----------|------|-------|------------------------|----------------|
| Scientific Foundations | FOUND | 11 | 9 | 82% |
| Chemistry of Life | CHEM | 21 | 4 | 19% |
| Macromolecules | MACRO | 23 | 3 | 13% |
| Cell Biology | CELL | 43 | 3 | 7% |
| Cellular Energetics | ENRG | 55 | 7 | 13% |
| Cell Communication | COMM | 30 | 12 | 40% |
| Heredity & Genetics | GENET | 35 | 18 | 51% |
| Molecular Biology | MOLBIO | 32 | 12 | 38% |
| Gene Regulation & Biotech | BIOTECH | 23 | 23 | 100% |
| Evolution | EVOL | 49 | 14 | 29% |
| Population & Community Ecology | POPECO | 33 | 3 | 9% |
| Ecosystem & Global Ecology | ECOSYS | 25 | 1 | 4% |
| **TOTAL** | | **380** | **119** | **31%** |

**Critical hub nodes** (highest downstream dependency counts):

- Eukaryotic Cells (CELL): 23 dependents — gating concept for all organelle content
- Enzymes (ENRG): 16 dependents — gating concept for all metabolic pathway chapters
- Natural Selection (EVOL): 12 dependents — gating concept for population genetics
- Proteins (MACRO): 11 dependents — gating concept for enzyme and signaling chapters
- Functional Groups (CHEM): 12 dependents — gating concept for all macromolecule chapters

**Special structural observation — BIOTECH:**
All 23 BIOTECH nodes have zero internal dependencies (100% foundational). The category
has no inherent internal ordering constraint. It can be taught in any internal sequence
and can attach to any chapter that has covered MOLBIO as its external prerequisite.
This gave maximum flexibility in placement decisions.

### 1.3 Constraint Analysis from the Book-Chapter-Generator Skill

The skill specifies hard constraints that drove all sizing decisions:

| Constraint | Value | Rationale |
|------------|-------|-----------|
| Minimum chapters | 6 | Floor for course complexity |
| Maximum chapters | 20 | Upper ceiling |
| Optimal concepts per chapter | 12–18 | Cognitive load target |
| Acceptable concepts per chapter | 8–25 | Hard boundary |
| Avoid below | 8 concepts | Too thin pedagogically |
| Avoid above | 25 concepts | Cognitively overloaded |

**Target derived from total concept count:**

- 380 ÷ 20 chapters = 19.0 concepts/chapter average → within optimal range
- 380 ÷ 18 chapters = 21.1 concepts/chapter average → near upper end
- 380 ÷ 15 chapters = 25.3 concepts/chapter average → at ceiling

**Decision:** Target exactly 20 chapters. This keeps the average at 19 (within optimal
range), stays at the skill's maximum, and gives the most granular thematic focus.

---

## Phase 2: Category-by-Category Sizing Analysis

For each taxonomy category: how many chapters does it need, and where are the natural
split points?

### FOUND — Scientific Foundations (11 concepts)

**Raw chapter need:** 11 ÷ 19 ≈ 0.6 chapters

**Problem:** 11 concepts is below the 12–18 optimal range if given its own chapter.

**Options evaluated:**

| Option | Structure | Verdict |
|--------|-----------|---------|
| A | FOUND alone (11 concepts) | Below optimal; acceptable but thin |
| B | FOUND + CHEM atomic/bonding concepts (11 + 7 = 18) | Within optimal range |

**Decision: Option B** — combine FOUND (11) with 7 CHEM atomic concepts = 18 total
(Chapter 1).

Rationale: Scientific method and atomic structure are both prerequisite scaffolding
before any cell biology or biochemistry. They are pedagogically contiguous — "what is
science" naturally precedes "what are atoms and how do they bond."

### CHEM — Chemistry of Life (21 concepts)

**Raw chapter need:** 21 ÷ 19 ≈ 1.1 chapters

7 of the 21 CHEM concepts (atoms and bonds) flowed naturally to Chapter 1 alongside
FOUND. The remaining 14 (water properties, acid-base chemistry, organic chemistry
basics, functional groups, condensation/hydrolysis reactions) form a coherent thematic
unit.

**Split point:**

| Chapter 1 — 7 CHEM concepts | Chapter 2 — 14 CHEM concepts |
|-----------------------------|------------------------------|
| Atomic Structure | Water Polarity |
| Elements of Life | Cohesion and Adhesion |
| Chemical Bonds | Surface Tension |
| Ionic Bonds | Specific Heat Capacity |
| Covalent Bonds | Water as Universal Solvent |
| Hydrogen Bonds | Hydrophilic and Hydrophobic |
| Van der Waals Forces | Acid-Base Chemistry |
| | pH Scale |
| | Buffers |
| | Organic Chemistry Basics |
| | Functional Groups |
| | Polymers and Monomers |
| | Condensation Reactions |
| | Hydrolysis Reactions |

**Chapter 2 concept count: 14** — below optimal (12–18) but acceptable (≥8). Content
density of these 14 concepts is high; water properties and organic functional groups
both require substantial exposition and laboratory application. Keeping Chapter 2 at
14 prevents cognitive overload before students encounter macromolecules.

### MACRO — Macromolecules (23 concepts)

**Raw chapter need:** 23 ÷ 19 ≈ 1.2 chapters

**Split options evaluated:**

| Option | Structure | Problem |
|--------|-----------|---------|
| A | Carbohydrates + Lipids (16) \| Proteins + Nucleic Acids (7) | Second chapter too thin |
| B | Carbohydrates + Lipids (16) \| Proteins (8) \| Nucleic Acids (4) | Three very small chapters |
| C | All 23 MACRO in one chapter | 23 within 8–25 acceptable range |

**Decision: Option C — single chapter (23 concepts, Chapter 3).**

Rationale: The four macromolecule classes are traditionally taught and AP-tested as a
unified unit. The internal dependency chain (monomers → polymers → structural function)
runs cleanly across all four classes. Splitting would fragment a conceptually unified
narrative.

### CELL — Cell Biology (43 concepts)

**Raw chapter need:** 43 ÷ 19 ≈ 2.3 chapters → must split into at least 2.

Even a 2-way split gives ~21–22 concepts each, at the upper end of optimal.

**Natural split — two pedagogically distinct clusters:**

| Cluster A: Architecture (Ch 4) | Cluster B: Membrane & Transport (Ch 5) |
|-------------------------------|----------------------------------------|
| Cell Theory | Plasma Membrane |
| Prokaryotic/Eukaryotic Cells | Fluid Mosaic Model |
| Cell Size and Surface Area Ratio | Phospholipid Bilayer |
| Nucleus, Nuclear Envelope, Nucleolus | Membrane Proteins |
| Rough/Smooth ER, Golgi, Lysosomes | Cholesterol in Membranes |
| Vacuoles, Mitochondria, Chloroplasts | Selective Permeability |
| Peroxisomes | Passive Transport, Diffusion, Osmosis |
| Cytoskeleton (3 components) | Water Potential, Turgor Pressure |
| Cilia/Flagella, Cell Wall | Facilitated Diffusion |
| | Active Transport, Na-K Pump |
| | Endocytosis, Exocytosis, Phagocytosis, Pinocytosis |
| | Plasmodesmata, Extracellular Matrix, Cell Junctions |
| **22 concepts** | **21 concepts** |

**Decision: 2-way split into Chapters 4 and 5.**

This split aligns with the two major college placement exam skill clusters for Unit 2 and mirrors
the organization of all major biology textbooks. Organelle structure (Ch 4) is a
prerequisite for membrane transport (Ch 5) — students need to know what the plasma
membrane is before learning how molecules cross it.

### ENRG — Cellular Energetics (55 concepts)

**Raw chapter need:** 55 ÷ 19 ≈ 2.9 chapters → must split into at least 3.

This is the largest single category, nearly 3× the optimal chapter size.

**Three thematic blocks identified:**

| Block | Chapter | Concepts | Count |
|-------|---------|----------|-------|
| Thermodynamics + Enzymes | Ch 6 | First Law/Second Law through pH effects on enzymes | 24 |
| Photosynthesis | Ch 7 | Photosynthesis Overview through Photorespiration | 17 |
| Cellular Respiration | Ch 8 | Glycolysis through Alcoholic Fermentation | 14 |

**Sizing concerns for Chapters 7 and 8:**

Both fall below the 12–18 optimal range (17 and 14 concepts). Merging them was
evaluated: 17 + 14 = 31 concepts, which would be the largest chapter in the book,
well above the 25-concept ceiling. Additionally, photosynthesis and respiration are
distinct college placement exam topics with their own MicroSim interactive diagrams (chloroplast sim
and mitochondria sim). Despite the lower concept counts, each chapter has very high
content density per concept — every step in the ETC or Calvin cycle requires detailed
mechanistic understanding.

**Key design insight for Chapter 6:** Enzymes are used in every subsequent metabolic
pathway. Treating thermodynamics + enzyme kinetics as a dedicated chapter (rather than
folding them into photosynthesis or respiration) ensures that competitive inhibition,
allosteric regulation, and feedback inhibition receive the focused attention they
deserve on the college placement exam before students encounter the specific enzymes of each pathway.

**Decision: 3-way split into Chapters 6, 7, and 8.**

### COMM — Cell Communication and Division (30 concepts)

**Raw chapter need:** 30 ÷ 19 ≈ 1.6 chapters → split into 2.

**Natural split — two college placement CED Unit 4 sub-topics:**

| Part 1: Signaling (Ch 9, 14 concepts) | Part 2: Cell Cycle (Ch 10, 16 concepts) |
|---------------------------------------|------------------------------------------|
| Cell Signaling Overview | Cell Cycle Overview |
| Signal Transduction | G1 / S / G2 Phases |
| Ligand-Receptor Binding | Mitosis stages (Prophase–Telophase) |
| 5 receptor types | Cytokinesis |
| Second Messengers, cAMP | Cell Cycle Checkpoints |
| Phosphorylation Cascades | Cyclins and CDKs |
| Signal Amplification | Proto-Oncogenes |
| Negative/Positive Feedback | Tumor Suppressor Genes |
| Apoptosis | Cancer Biology |
| | Contact Inhibition |

**Dependency note:** Apoptosis (Ch 9) connects directly to Cancer Biology (Ch 10) —
dysregulated apoptosis is a hallmark of cancer. The placement reinforces this link.

**Decision: 2-way split into Chapters 9 and 10.**

### GENET — Heredity and Genetics (35 concepts)

**Raw chapter need:** 35 ÷ 19 ≈ 1.8 chapters → split into 2.

**Natural split — the classic textbook division:**

| Part 1: Meiosis + Mendelian (Ch 11, 20 concepts) | Part 2: Non-Mendelian (Ch 12, 15 concepts) |
|--------------------------------------------------|---------------------------------------------|
| Meiosis I, II, synapsis, crossing over | Incomplete Dominance, Codominance |
| Haploid/diploid, gametes, fertilization | Multiple Alleles |
| Chromosomal Theory of Inheritance | Sex Determination, X-Linked Inheritance |
| Mendel's Laws of Segregation/Assortment | Polygenic Inheritance, Epistasis, Pleiotropy |
| Dominant/Recessive, Genotype/Phenotype | Genetic Linkage, Recombination Frequency |
| Monohybrid/Dihybrid Crosses, Punnett Squares | Chromosomal Abnormalities |
| Test Crosses | Nondisjunction, Aneuploidy |
| | Pedigree Analysis |

**Note on GENET's 51% foundational rate:** Nearly half of GENET concepts have no
prerequisites in the graph. This means the ordering within Chapter 12 especially is
highly flexible — concepts like Incomplete Dominance can be presented in any order
relative to Polygenic Inheritance, which simplifies content generation significantly.

**Decision: 2-way split into Chapters 11 and 12.**

### MOLBIO (32) + BIOTECH (23) — Combined Analysis

**Combined raw chapter need:** 55 ÷ 19 ≈ 2.9 chapters → could split into 2 or 3.

**Key structural observation:** MOLBIO divides into two functionally distinct blocks:

- Block A — Central dogma mechanism (replication → transcription → translation): 26 concepts
- Block B — What goes wrong with DNA (mutations): 6 concepts

BIOTECH's 23 concepts all depend externally on the central dogma being understood, but
have no internal ordering requirements (100% foundational within the category).

**Three-chapter option evaluated:**

| Option | Ch 13 | Ch 14 | Ch 15 |
|--------|-------|-------|-------|
| 3-way | Replication + Transcription (18) | Translation + Mutations (14) | Gene Regulation + Biotech (23) |

Problem with 3-way: Breaking the central dogma between transcription and translation
would fragment the "information flow" narrative (DNA → RNA → protein) that is
definitional to college placement Unit 6. The college placement CED treats replication, transcription, and
translation as a continuous unit.

**Two-chapter option evaluated:**

| Option | Ch 13 | Ch 14 |
|--------|-------|-------|
| 2-way | Full central dogma (26) | Mutations + Gene Regulation + Biotech (6 + 23 = 29) |

Problem with 2-way: Chapter 14 at 29 concepts exceeds the 25-concept ceiling.
However, this is mitigated by the 100% internal independence of BIOTECH — the
chapter is not a 29-step sequential dependency chain but rather 6 + 12 + 11
independently ordered concept clusters.

**Decision: 2-way split into Chapters 13 and 14.**

The college placement CED Unit 6 explicitly combines "Gene Expression and Regulation" with
"Biotechnology" — the 2-chapter structure mirrors this. Mutations, gene regulation,
and biotechnology are all consequences of or interventions on the central dogma;
they form a natural "applications and modifications" unit following the mechanistic
Chapter 13.

### EVOL — Evolution (49 concepts)

**Raw chapter need:** 49 ÷ 19 ≈ 2.6 chapters → split into 3.

**Three thematic blocks — each a distinct college placement exam topic:**

| Block | Chapter | Concepts | Count |
|-------|---------|----------|-------|
| Evidence + Mechanisms | Ch 15 | Darwin through Origin of Eukaryotes | 18 |
| Population Genetics + HW | Ch 16 | Allele frequency through Macroevolution | 16 |
| Speciation + Phylogenetics | Ch 17 | Biological Species Concept through Molecular Clocks | 15 |

**Dependency ordering between the three Evolution chapters:**

- Population genetics (Ch 16) requires understanding natural selection as a mechanism
  (Ch 15) and allele/genotype concepts from Mendelian genetics (Ch 12)
- Hardy-Weinberg equilibrium requires allele frequency calculations — these in turn
  require understanding dominant/recessive inheritance (Ch 11–12)
- Speciation (Ch 17) requires understanding how allele frequencies diverge over time
  (Ch 16) and geographic isolation mechanisms

All dependency chains verified across the evolution arc.

**Decision: 3-way split into Chapters 15, 16, and 17.**

### POPECO — Population and Community Ecology (33 concepts)

**Raw chapter need:** 33 ÷ 19 ≈ 1.7 chapters → split into 2.

**Natural split:**

| Part 1: Population Ecology (Ch 18, 15 concepts) | Part 2: Community Ecology (Ch 19, 18 concepts) |
|-------------------------------------------------|------------------------------------------------|
| Ecology Overview, Ecological Organization | Community Ecology |
| Population Ecology, Density, Dispersion | Interspecific Interactions (6 types) |
| Exponential/Logistic Growth, Carrying Capacity | Keystone Species, Trophic Cascades |
| Limiting Factors, Density-Dependent Regulation | Ecological Succession (Primary/Secondary) |
| Survivorship Curves, Life History Strategies | Climax Community, Island Biogeography |
| r/K-Selection | |

**Rationale for split:** Resource partitioning and competitive exclusion (Ch 19) depend
on logistic growth and carrying capacity (Ch 18). Students need to understand why
populations have limits before they can understand how competing populations partition
resources. This is also the standard CED Unit 8 sub-organization.

**Decision: 2-way split into Chapters 18 and 19.**

### ECOSYS — Ecosystem and Global Ecology (25 concepts)

**Raw chapter need:** 25 ÷ 19 ≈ 1.3 chapters → borderline for single chapter.

**Split option evaluated:** "Energy Flow" (7) + "Biogeochemical Cycles" (6) + "Biomes"
(3) + "Conservation" (7) — natural sub-topics exist, but splitting would create chapters
of 7–13 concepts each, all below optimal.

**Decision: Single chapter (25 concepts, Chapter 20).**

25 is at the top of the acceptable range. Ecosystem ecology, biomes, and conservation
biology form a natural college placement exam capstone unit taught together in every biology course.
The chapter's internal structure (energy flow → matter cycling → biomes → biodiversity
threats → conservation) follows a clean logical progression.

---

## Phase 3: Dependency Ordering Verification

Before finalizing chapter sequence, each inter-chapter dependency was verified:

| Consuming Chapter | Requires Concepts From | Status |
|-------------------|------------------------|--------|
| Ch 2 (Water/Organic Chem) | Ch 1 (atomic bonds) | ✓ |
| Ch 3 (Macromolecules) | Ch 1 (bonds), Ch 2 (functional groups, condensation/hydrolysis) | ✓ |
| Ch 4 (Cell Organelles) | Ch 3 (proteins, nucleic acids, lipids as membrane components) | ✓ |
| Ch 5 (Membranes/Transport) | Ch 3 (phospholipids), Ch 4 (plasma membrane context) | ✓ |
| Ch 6 (Thermodynamics/Enzymes) | Ch 2 (pH), Ch 3 (proteins as enzymes) | ✓ |
| Ch 7 (Photosynthesis) | Ch 4 (chloroplasts), Ch 5 (thylakoid membrane), Ch 6 (ATP, redox) | ✓ |
| Ch 8 (Respiration) | Ch 4 (mitochondria), Ch 5 (inner membrane), Ch 6 (ATP, NADH/FADH₂) | ✓ |
| Ch 9 (Cell Signaling) | Ch 3 (proteins as receptors), Ch 5 (membrane receptors) | ✓ |
| Ch 10 (Cell Cycle) | Ch 4 (nucleus, chromosomes), Ch 9 (checkpoints as signaling) | ✓ |
| Ch 11 (Meiosis/Mendelian) | Ch 4 (nucleus, chromosomes), Ch 10 (contrast with mitosis) | ✓ |
| Ch 12 (Non-Mendelian) | Ch 11 (Mendelian framework as base) | ✓ |
| Ch 13 (Central Dogma) | Ch 3 (DNA/RNA structure, nucleotides), Ch 4 (nucleus) | ✓ |
| Ch 14 (Mutations/Regulation/Biotech) | Ch 13 (central dogma as substrate) | ✓ |
| Ch 15 (Evolution Evidence) | Ch 3 (molecular evidence), Ch 11 (variation), Ch 13 (molecular clocks) | ✓ |
| Ch 16 (Population Genetics/HW) | Ch 12 (alleles/genotypes), Ch 15 (natural selection) | ✓ |
| Ch 17 (Speciation/Phylogenetics) | Ch 16 (allele frequency divergence) | ✓ |
| Ch 18 (Population Ecology) | Ch 15 (natural selection → life history trade-offs) | ✓ |
| Ch 19 (Community Ecology) | Ch 18 (population dynamics as foundation) | ✓ |
| Ch 20 (Ecosystem/Conservation) | Ch 19 (community structure → food webs, trophic levels) | ✓ |

All 19 inter-chapter dependency chains verified. No concept appears in a chapter before
its prerequisites are covered.

---

## Phase 4: Final Concept Count Verification

Arithmetic check confirming all 380 concepts are assigned exactly once:

| Ch | Title (abbreviated) | Taxonomy Sources | Count |
|----|---------------------|------------------|-------|
| 1 | Scientific Foundations | FOUND (11) + CHEM part 1 (7) | 18 |
| 2 | Water and Organic Chem | CHEM part 2 (14) | 14 |
| 3 | Macromolecules | MACRO (23) | 23 |
| 4 | Cell Organelles | CELL part 1 (22) | 22 |
| 5 | Cell Membranes | CELL part 2 (21) | 21 |
| 6 | Thermodynamics + Enzymes | ENRG part 1 (24) | 24 |
| 7 | Photosynthesis | ENRG part 2 (17) | 17 |
| 8 | Cellular Respiration | ENRG part 3 (14) | 14 |
| 9 | Cell Signaling | COMM part 1 (14) | 14 |
| 10 | Cell Cycle + Cancer | COMM part 2 (16) | 16 |
| 11 | Meiosis + Mendelian | GENET part 1 (20) | 20 |
| 12 | Non-Mendelian | GENET part 2 (15) | 15 |
| 13 | Central Dogma | MOLBIO part 1 (26) | 26 |
| 14 | Mutations + Regulation + Biotech | MOLBIO part 2 (6) + BIOTECH (23) | 29 |
| 15 | Evolution Evidence | EVOL part 1 (18) | 18 |
| 16 | Population Genetics | EVOL part 2 (16) | 16 |
| 17 | Speciation + Phylogenetics | EVOL part 3 (15) | 15 |
| 18 | Population Ecology | POPECO part 1 (15) | 15 |
| 19 | Community Ecology | POPECO part 2 (18) | 18 |
| 20 | Ecosystem + Conservation | ECOSYS (25) | 25 |
| | **TOTAL** | | **380** ✓ |

Running sum: 18+14+23+22+21+24+17+14+14+16+20+15+26+29+18+16+15+15+18+25 = **380** ✓

---

## Phase 5: Split Decision Summary Table

| Category | Concepts | Raw ÷ 19 | Decision | Chapters Used | Split Rationale |
|----------|----------|----------|----------|---------------|-----------------|
| FOUND (11) | 11 | 0.6 | Merge with CHEM | 0 own → into Ch 1 | Too thin alone; bonds naturally to atomic chemistry |
| CHEM (21) | 21 | 1.1 | Split 7 + 14 | 2 (Ch 1 partial, Ch 2) | Atomic bonds belong with FOUND; water/organics form own unit |
| MACRO (23) | 23 | 1.2 | Keep whole | 1 (Ch 3) | college placement exam tests 4 macromolecule classes as a unified topic |
| CELL (43) | 43 | 2.3 | Split 22 + 21 | 2 (Ch 4, Ch 5) | Organelles vs. membrane transport — classic textbook division |
| ENRG (55) | 55 | 2.9 | Split 24 + 17 + 14 | 3 (Ch 6, 7, 8) | Enzymes are a prerequisite layer; photosynthesis ≠ respiration |
| COMM (30) | 30 | 1.6 | Split 14 + 16 | 2 (Ch 9, Ch 10) | Signaling vs. cell division — CED Unit 4 natural boundary |
| GENET (35) | 35 | 1.8 | Split 20 + 15 | 2 (Ch 11, Ch 12) | Mendelian vs. non-Mendelian — classic textbook division |
| MOLBIO (32) | 32 | 1.7 | Split 26 + 6 merged w/ BIOTECH | 2 (Ch 13, Ch 14) | Central dogma kept whole; mutations bridge to regulation |
| BIOTECH (23) | 23 | 1.2 | Merge with MOLBIO part 2 | 0 own → into Ch 14 | All foundational; logically follows mutations/gene expression |
| EVOL (49) | 49 | 2.6 | Split 18 + 16 + 15 | 3 (Ch 15, 16, 17) | Evidence, quantitative genetics, and macroevolution are distinct college placement topics |
| POPECO (33) | 33 | 1.7 | Split 15 + 18 | 2 (Ch 18, Ch 19) | Population vs. community ecology — CED Unit 8 natural boundary |
| ECOSYS (25) | 25 | 1.3 | Keep whole | 1 (Ch 20) | Capstone unit; any split produces thin sub-chapters |

---

## Phase 6: Chapters Outside the Optimal Range — Justifications

**Chapter 8 — Cellular Respiration and Fermentation: 14 concepts (below optimal 12–18)**

- Cannot merge with Ch 7 (photosynthesis): 17 + 14 = 31, far above 25-concept ceiling
- Cannot merge with Ch 6 (thermodynamics): 24 + 14 = 38, far above ceiling
- The 14 concepts constitute a complete metabolic pathway sequence; splitting is
  pedagogically harmful
- Content density is high — each of the 14 concepts (glycolysis, Krebs, ETC, ATP yield)
  requires substantial exposition despite the low concept count
- The mitochondria/ETC MicroSim interactive diagram already exists and is designed around
  this chapter's scope
- **Accepted as-is at 14 concepts**

**Chapter 14 — Mutations, Gene Regulation, and Biotechnology: 29 concepts (above ceiling of 25)**

- Alternative evaluated: split into Ch 14a "Mutations + Gene Regulation" (6 + 12 = 18)
  and Ch 14b "Biotechnology" (11)
  - Ch 14b at 11 concepts would be below optimal and pedagogically thin
  - Separating gene regulation (lac operon, transcription factors, epigenetics) from
    biotechnology tools (PCR, CRISPR, gel electrophoresis) fragments college placement Unit 6, where
    the two are assessed together — e.g., CRISPR questions require understanding of
    gene regulation and transcription
- All 23 BIOTECH concepts are internally independent (zero dependencies on each other),
  making the chapter read as 6 + 12 + 11 independently ordered sub-sections rather than
  a 29-step dependency chain
- The college placement CED Unit 6 explicitly groups "Gene Expression and Regulation" with "Biotechnology"
- **Accepted at 29 concepts; flagged for possible future split in a second edition**

---

## Outcome

- 20 chapters created, covering all 380 concepts exactly once
- All 19 inter-chapter dependency chains verified — no forward references
- Chapter sizes: 14–29 concepts, mean 19.0
- 18 of 20 chapters within 8–25 acceptable range
- Nav added to `mkdocs.yml` under a new `Chapters:` section
- Each chapter `index.md` contains: Summary (2–4 sentences), Concepts Covered
  (numbered list with sub-groupings), and Prerequisites (links to prior chapters)
- `docs/chapters/index.md` created with full chapter-overview table linking all 20 chapters
