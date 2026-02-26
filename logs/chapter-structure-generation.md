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

  I've designed a 20-chapter structure for AP Biology: An Interactive Course covering all 380 concepts, mapped to the 8 College
  Board AP Biology units.

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
  │                                 │ tightly coupled AP exam topic (Unit 6 on the CED). Could split into 2 if desired.      │
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
 