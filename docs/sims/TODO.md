# MicroSim TODO — Remaining Implementations

**Generated:** 2026-02-28 | **Remaining:** 34 of 59

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
| 04-cell-organization-and-organelles | 8 | 7 | 1 |
| 05-cell-membranes-and-transport | 4 | 4 | 0 |
| 06-thermodynamics-and-enzymes | 4 | 0 | 4 |
| 07-photosynthesis | 4 | 3 | 1 |
| 08-cellular-respiration | 4 | 1 | 3 |
| 09-cell-signaling-and-feedback | 3 | 3 | 0 |
| 10-cell-cycle-mitosis-and-cancer | 4 | 2 | 2 |
| 11-meiosis-and-mendelian-genetics | 6 | 2 | 4 |
| 12-non-mendelian-and-chromosomal-genetics | 6 | 0 | 6 |
| 13-central-dogma-replication-and-protein-synthesis | 4 | 0 | 4 |
| 14-mutations-gene-regulation-and-biotechnology | 4 | 1 | 3 |
| 15-evidence-for-evolution | 3 | 0 | 3 |
| 16-population-genetics-and-hardy-weinberg | 3 | 0 | 3 |
| 17-speciation-phylogenetics-and-macroevolution | 2 | 0 | 2 |
| 18-population-ecology-and-life-history | 2 | 0 | 2 |
| 19-community-ecology-and-species-interactions | 2 | 1 | 1 |
| 20-ecosystem-ecology-and-conservation | 2 | 0 | 2 |

## Summary by Library

| Library | Count |
|---------|-------|
| p5.js | 54 |
| Chart.js | 5 |
| vis-network | 2 |
| vis-timeline | 1 |



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
