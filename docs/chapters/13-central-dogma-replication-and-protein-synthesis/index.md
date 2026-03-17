---
title: "The Central Dogma: DNA Replication and Protein Synthesis"
description: The semiconservative mechanism of DNA replication, transcription from DNA to mRNA with eukaryotic processing, and translation of the genetic code into polypeptides at the ribosome.
generated_by: claude skill chapter-content-generator
date: 2026-02-27 02:34:07
version: 0.05
---

# The Central Dogma: DNA Replication and Protein Synthesis

!!! mascot-welcome "Gregor Welcomes You!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Gregor welcomes you">
    Welcome, investigators! Every time one of your cells divides, it must copy 6 billion base pairs of DNA with astonishing accuracy. Every time your body needs a new enzyme, hormone, or structural protein, it must read the right gene at the right time and build the correct polypeptide. This chapter traces the entire information flow of the **central dogma** — from DNA replication through transcription and mRNA processing to translation at the ribosome. Let's investigate!

## Summary

The central dogma — DNA → RNA → Protein — is the molecular foundation of inheritance
and cellular function. This chapter opens with DNA replication: the semiconservative
mechanism, the roles of DNA polymerase, primase, and ligase, the leading/lagging
strand problem solved by Okazaki fragments, and how proofreading maintains fidelity.
It then covers transcription in both prokaryotes and eukaryotes, including promoter
recognition, RNA polymerase, and the critical eukaryotic mRNA processing steps —
5' capping, poly-A tailing, and splicing of introns. The chapter closes with
translation: ribosome structure, codon-anticodon recognition, the full genetic code,
and the assembly of polypeptides from start codon to stop codon.

## Concepts Covered

This chapter covers the following 26 concepts from the learning graph:

**DNA Replication**

1. DNA Double Helix
2. Base Pairing Rules
3. DNA Replication
4. DNA Polymerase
5. Semiconservative Replication
6. Leading and Lagging Strands
7. Okazaki Fragments
8. DNA Proofreading and Repair
9. Telomeres

**Transcription and RNA Processing**

10. Transcription Overview
11. RNA Polymerase
12. Promoter Regions
13. Transcription Termination
14. mRNA Processing
15. 5-Prime Cap and Poly-A Tail
16. RNA Splicing
17. Introns and Exons
18. Alternative Splicing

**Translation**

19. Translation Overview
20. Ribosomes
21. Codons and Anticodons
22. tRNA Structure
23. Aminoacyl-tRNA Synthetases
24. Start and Stop Codons
25. Genetic Code
26. Polysomes

## Prerequisites

This chapter builds on concepts from:

- [Chapter 3: Biological Macromolecules](../03-biological-macromolecules/index.md)
- [Chapter 4: Cell Organization and Organelles](../04-cell-organization-and-organelles/index.md)

---

## The Central Dogma of Molecular Biology

Francis Crick articulated the **central dogma** in 1958: genetic information flows in one primary direction:

$$\text{DNA} \xrightarrow{\text{replication}} \text{DNA} \xrightarrow{\text{transcription}} \text{RNA} \xrightarrow{\text{translation}} \text{Protein}$$

- **Replication** copies DNA → DNA (preserving the genome for the next generation)
- **Transcription** converts DNA → RNA (reading a gene into a messenger molecule)
- **Translation** converts RNA → Protein (building the functional molecule)

This one-directional flow means that information in proteins does not flow back to alter DNA sequence. While there are exceptions (reverse transcriptase in retroviruses converts RNA → DNA), the central dogma holds for the vast majority of cellular life.

---

## Part 1: DNA Replication

### The DNA Double Helix

Recall from Chapter 3 that DNA is a double-stranded molecule with two polynucleotide chains wound around each other in a **right-handed double helix**. Key structural features:

- The **backbone** consists of alternating deoxyribose sugars and phosphate groups, linked by phosphodiester bonds
- The two strands run **antiparallel** — one strand runs 5' → 3' while the complementary strand runs 3' → 5'
- The **bases** (adenine, thymine, guanine, cytosine) project inward and pair with each other across the helix

<iframe src="../../sims/dna-double-helix/main.html" height="560" width="100%" scrolling="no"></iframe>

*[View Fullscreen](../../sims/dna-double-helix/main.html)*

The interactive diagram above shows the labeled DNA double helix structure. Use Explore mode to review each component, or switch to Quiz mode to test yourself.

### Base Pairing Rules

The two strands are held together by **hydrogen bonds** between complementary base pairs:

- **Adenine (A)** pairs with **Thymine (T)** — 2 hydrogen bonds
- **Guanine (G)** pairs with **Cytosine (C)** — 3 hydrogen bonds

These rules mean that the sequence of one strand completely determines the sequence of the other. This complementarity is the key to both replication and transcription.

| Base | Pairs with | Hydrogen bonds | Mnemonic |
|------|-----------|----------------|----------|
| Adenine (A) | Thymine (T) in DNA; Uracil (U) in RNA | 2 | **A**pple-**T**ree |
| Guanine (G) | Cytosine (C) | 3 | **G**ood-**C**ompany |

**Chargaff's rules** follow directly: in any DNA molecule, %A = %T and %G = %C.

### DNA Replication: Overview

**DNA replication** is the process by which a cell copies its entire genome before division. Replication occurs during the **S phase** of the cell cycle (Chapter 10).

Key characteristics:

- **Semiconservative** — each daughter molecule contains one original (parental) strand and one newly synthesized strand
- **Bidirectional** — replication proceeds in both directions from each origin of replication
- **High fidelity** — error rate of approximately 1 in $10^9$ bases after proofreading and repair

### Semiconservative Replication

The **semiconservative model** was confirmed by the famous **Meselson-Stahl experiment** (1958). They grew *E. coli* in heavy nitrogen ($^{15}$N) medium, then shifted to light nitrogen ($^{14}$N) and tracked DNA density through successive generations:

- **Generation 0:** All DNA is heavy-heavy ($^{15}$N-$^{15}$N)
- **Generation 1:** All DNA is intermediate density (one heavy strand, one light strand)
- **Generation 2:** Half intermediate, half light-light

This result ruled out conservative replication (which would produce only heavy and light DNA) and dispersive replication (which would produce DNA of uniformly intermediate density).

!!! mascot-thinking "Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Gregor thinking">
    The Meselson-Stahl experiment is considered one of the "most beautiful experiments in biology." It demonstrates a powerful principle: a well-designed experiment can distinguish between competing hypotheses by generating predictions that differ. On the college placement exam, be prepared to interpret density gradient results and explain how they support semiconservative replication.

### The Replication Fork: Key Enzymes

Replication begins at **origins of replication** (OriC in *E. coli*; multiple origins in eukaryotes). The double helix is unwound by **helicase**, creating a Y-shaped structure called the **replication fork**.

| Enzyme/Protein | Function |
|---|---|
| **Helicase** | Unwinds the double helix at the replication fork |
| **Single-strand binding proteins (SSB)** | Stabilize separated strands, prevent re-annealing |
| **Topoisomerase** | Relieves torsional strain ahead of the fork |
| **Primase** | Synthesizes short RNA primers (5–10 nucleotides) |
| **DNA polymerase III** | Main replication enzyme; synthesizes new DNA 5' → 3' |
| **DNA polymerase I** | Removes RNA primers and replaces with DNA |
| **Ligase** | Seals nicks (joins Okazaki fragments on lagging strand) |

### DNA Polymerase

**DNA polymerase** is the central enzyme of replication. Critical properties:

- Synthesizes DNA only in the **5' → 3' direction** (adds nucleotides to the 3'-OH end)
- Requires a **primer** — cannot initiate a new strand from scratch
- Uses the template strand to select the correct complementary nucleotide
- Has **3' → 5' exonuclease activity** (proofreading — can back up and remove mismatched bases)

### Leading and Lagging Strands

Because DNA polymerase synthesizes only 5' → 3' but the two template strands run antiparallel, replication proceeds differently on each strand:

- **Leading strand** — the template runs 3' → 5', so the new strand is synthesized **continuously** in the 5' → 3' direction toward the fork. Needs only one primer.
- **Lagging strand** — the template runs 5' → 3', so the new strand must be synthesized **discontinuously** in short segments away from the fork. Each segment requires its own primer.

### Okazaki Fragments

The short DNA segments synthesized on the lagging strand are called **Okazaki fragments** — approximately 1,000–2,000 nucleotides in prokaryotes and 100–200 nucleotides in eukaryotes. After synthesis:

1. **DNA polymerase I** removes the RNA primers and replaces them with DNA
2. **DNA ligase** joins adjacent Okazaki fragments by forming phosphodiester bonds

#### Diagram: DNA Replication Fork Explorer

<iframe src="../../sims/replication-fork/main.html" height="610" width="100%" scrolling="no"></iframe>

*[View Fullscreen](../../sims/replication-fork/main.html)*

<details markdown="1">
<summary>DNA Replication Fork Explorer — Specification</summary>
**Type:** MicroSim (p5.js)<br/>
**sim-id:** replication-fork<br/>
**Library:** p5.js<br/>
**Status:** Specified

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
</details>

### DNA Proofreading and Repair

DNA replication achieves remarkable accuracy through multiple layers of error correction:

1. **Base selection** — DNA polymerase selects the correct nucleotide based on complementary base pairing (error rate: ~1 in $10^5$)
2. **Proofreading** — DNA polymerase's 3'→5' exonuclease activity detects and removes mismatches immediately after insertion (reduces errors to ~1 in $10^7$)
3. **Mismatch repair** — post-replication enzymes scan for remaining mismatches, excise the incorrect segment, and resynthesize (final error rate: ~1 in $10^9$)

Additional repair mechanisms handle DNA damage from external sources:

- **Nucleotide excision repair** — removes bulky lesions (e.g., thymine dimers caused by UV radiation)
- **Base excision repair** — removes single damaged bases

### Telomeres

**Telomeres** are repetitive DNA sequences (TTAGGG in humans, repeated ~2,500 times) that cap the ends of linear chromosomes. They solve the **end-replication problem**: because DNA polymerase requires a primer and synthesizes 5'→3', the very end of the lagging strand template cannot be fully replicated. With each cell division, telomeres shorten slightly.

- **Telomerase** — a reverse transcriptase enzyme that extends telomeres by adding TTAGGG repeats, using an internal RNA template
- Telomerase is active in **germ cells** (maintaining gamete telomere length), **stem cells**, and most **cancer cells**
- Somatic cells typically lack telomerase activity, leading to progressive telomere shortening — this contributes to cellular aging and the **Hayflick limit** (~50 divisions)

!!! mascot-tip "Gregor's Tip"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Gregor's tip">
    The college placement exam connects telomeres to both aging and cancer. Remember: telomerase is normally OFF in somatic cells (contributing to aging) but is reactivated in ~90% of cancers (allowing unlimited division). This links directly to the cell cycle checkpoints you studied in Chapter 10.

---

## Part 2: Transcription

### Transcription Overview

**Transcription** is the synthesis of an RNA molecule from a DNA template. It produces three main types of RNA:

- **mRNA** (messenger RNA) — carries the protein-coding sequence
- **tRNA** (transfer RNA) — delivers amino acids during translation
- **rRNA** (ribosomal RNA) — structural and catalytic component of ribosomes

Only one strand of the DNA double helix is read for any given gene:

- **Template strand** (antisense strand) — read 3' → 5' by RNA polymerase
- **Coding strand** (sense strand) — has the same sequence as the mRNA (with T replaced by U)

### RNA Polymerase

**RNA polymerase** is the enzyme that catalyzes transcription. Key differences from DNA polymerase:

| Feature | DNA Polymerase | RNA Polymerase |
|---------|---------------|----------------|
| Template | DNA | DNA |
| Product | DNA | RNA |
| Direction | 5' → 3' | 5' → 3' |
| Primer needed? | Yes | No |
| Nucleotides | dATP, dTTP, dGTP, dCTP | ATP, UTP, GTP, CTP |
| Proofreading | Yes (3'→5' exonuclease) | Limited |

Prokaryotes have a single RNA polymerase. Eukaryotes have three: **RNA Pol I** (rRNA), **RNA Pol II** (mRNA), and **RNA Pol III** (tRNA and small RNAs).

### Promoter Regions

A **promoter** is a DNA sequence upstream of a gene that signals where transcription begins and which strand to read.

- In prokaryotes: the **-10 box** (TATAAT, also called the Pribnow box) and **-35 box** are recognized by the sigma (σ) factor of RNA polymerase
- In eukaryotes: the **TATA box** (~25 bp upstream of the start site) is recognized by **transcription factor IID (TFIID)**, which recruits RNA Pol II and other general transcription factors

The promoter determines both the **start site** and the **direction** of transcription.

### Transcription Termination

Transcription ends when RNA polymerase encounters a **termination signal**:

- **Prokaryotes:** Two mechanisms — (1) Rho-independent termination: a GC-rich palindromic sequence in the mRNA forms a hairpin loop that destabilizes the polymerase; (2) Rho-dependent termination: Rho protein chases the polymerase and unwinds the RNA-DNA hybrid
- **Eukaryotes:** RNA Pol II transcribes past the poly-A signal (AAUAAA), and the transcript is cleaved and polyadenylated; the polymerase eventually falls off

### mRNA Processing (Eukaryotes)

In eukaryotes, the primary transcript (**pre-mRNA**) undergoes three major processing steps before leaving the nucleus:

### 5-Prime Cap and Poly-A Tail

1. **5' cap** — a modified guanine nucleotide (7-methylguanosine) is added to the 5' end of the mRNA
   - Protects mRNA from degradation by exonucleases
   - Helps the ribosome recognize and bind the mRNA for translation
   - Required for mRNA export from the nucleus

2. **Poly-A tail** — a string of 100–250 adenine nucleotides is added to the 3' end
   - Protects the 3' end from degradation
   - Aids in mRNA export from the nucleus
   - Influences mRNA stability and translation efficiency

### Introns and Exons

Eukaryotic genes contain two types of sequences:

- **Exons** — sequences that are **ex**pressed (retained in the mature mRNA and translated into protein)
- **Introns** — **in**tervening sequences that are removed during RNA processing

### RNA Splicing

**RNA splicing** removes introns and joins exons in the correct order. The process is catalyzed by the **spliceosome** — a large complex of small nuclear ribonucleoproteins (snRNPs, pronounced "snurps") and other proteins.

Splicing steps:

1. The spliceosome recognizes specific sequences at the intron-exon boundaries (splice sites)
2. The intron is cut at both ends and released as a lariat-shaped loop
3. The adjacent exons are joined together

### Alternative Splicing

**Alternative splicing** allows a single gene to produce **multiple different mRNA variants** (and therefore multiple protein variants) by including or excluding different combinations of exons.

- A single human gene can produce dozens or even hundreds of different protein variants
- This is one reason humans can have ~20,000 genes but produce over 100,000 different proteins
- Alternative splicing is regulated by tissue-specific and developmental signals

#### Diagram: Gene Expression Pipeline

<iframe src="../../sims/gene-expression-pipeline/main.html" height="600" width="100%" scrolling="no"></iframe>

*[View Fullscreen](../../sims/gene-expression-pipeline/main.html)*

<details markdown="1">
<summary>Gene Expression Pipeline — Specification</summary>
**Type:** MicroSim (p5.js)<br/>
**sim-id:** gene-expression-pipeline<br/>
**Library:** p5.js<br/>
**Status:** Specified

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
</details>

---

## Part 3: Translation

### Translation Overview

**Translation** is the synthesis of a polypeptide from an mRNA template. It occurs at **ribosomes** in the cytoplasm (or on the rough ER for secreted/membrane proteins).

Translation reads the mRNA in the 5' → 3' direction, three nucleotides at a time. Each triplet of nucleotides is a **codon** that specifies a particular amino acid.

### Ribosomes

**Ribosomes** are molecular machines composed of ribosomal RNA (rRNA) and proteins. Each ribosome has two subunits:

| Subunit | Prokaryotic | Eukaryotic | Function |
|---------|------------|------------|----------|
| Small | 30S | 40S | Binds mRNA; codon-anticodon matching |
| Large | 50S | 60S | Catalyzes peptide bond formation |
| Complete | 70S | 80S | Functional ribosome |

The large subunit has three binding sites for tRNA:

- **A site** (aminoacyl) — accepts incoming charged tRNA
- **P site** (peptidyl) — holds the tRNA carrying the growing polypeptide chain
- **E site** (exit) — discharged tRNA exits here

### Codons and Anticodons

A **codon** is a three-nucleotide sequence on mRNA that specifies one amino acid (or a stop signal). An **anticodon** is the complementary three-nucleotide sequence on a tRNA molecule that base-pairs with the codon.

- 4 bases in groups of 3 → $4^3 = 64$ possible codons
- 64 codons code for only 20 amino acids + 3 stop signals → the code is **redundant** (degenerate)
- Most amino acids are specified by 2–6 different codons (synonymous codons)

### The Genetic Code

The **genetic code** is the set of rules by which the 64 codons are translated into the 20 amino acids.

Key properties:

- **Universal** — nearly all organisms use the same genetic code (minor exceptions in mitochondria and some protists)
- **Redundant (degenerate)** — most amino acids have multiple codons
- **Unambiguous** — each codon specifies only one amino acid
- **Non-overlapping** — codons are read sequentially without overlap
- **Comma-free** — no spacers between codons; the reading frame is set by the start codon

#### Diagram: Genetic Code Table Explorer

<iframe src="../../sims/genetic-code-table/main.html" height="560" width="100%" scrolling="no"></iframe>

*[View Fullscreen](../../sims/genetic-code-table/main.html)*

<details markdown="1">
<summary>Genetic Code Table Explorer — Specification</summary>
**Type:** MicroSim (p5.js)<br/>
**sim-id:** genetic-code-table<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Learning objective:** Students will be able to *use* (Bloom's L3: Apply) the genetic code table to translate an mRNA sequence into an amino acid sequence, and *explain* (Bloom's L2: Understand) the properties of the genetic code including redundancy and universality.

**Instructional Rationale:** An interactive codon table where students can click codons to see the corresponding amino acid (and vice versa) builds fluency with reading the table — a skill directly tested on the college placement exam. The mRNA translation tool provides immediate practice.

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
</details>

### tRNA Structure

**Transfer RNA (tRNA)** is the adapter molecule that connects codons to amino acids. Each tRNA has:

- An **anticodon loop** — three nucleotides complementary to a specific mRNA codon
- An **amino acid attachment site** at the 3' end (CCA sequence) — carries the appropriate amino acid
- A distinctive **cloverleaf** secondary structure with four loops, folding into an L-shaped 3D structure

### Aminoacyl-tRNA Synthetases

**Aminoacyl-tRNA synthetases** are the enzymes that "charge" each tRNA with its correct amino acid. There are 20 of these enzymes — one for each amino acid.

The charging reaction requires ATP:

$$\text{amino acid} + \text{tRNA} + \text{ATP} \xrightarrow{\text{synthetase}} \text{aminoacyl-tRNA} + \text{AMP} + \text{PP}_i$$

These enzymes are critically important for maintaining the fidelity of translation — they ensure that each tRNA is loaded with the correct amino acid. An error here would result in the wrong amino acid being incorporated into the protein, regardless of correct codon-anticodon pairing.

### Start and Stop Codons

- **Start codon:** AUG — codes for methionine (Met) and signals the beginning of translation. The first AUG in the mRNA sets the **reading frame** for the entire message.
- **Stop codons:** UAA, UAG, UGA — do not code for any amino acid. Instead, they are recognized by **release factors** that trigger termination of translation.

### The Three Stages of Translation

Translation proceeds in three stages:

**1. Initiation**

- Small ribosomal subunit binds to the mRNA and scans for the start codon (AUG)
- Initiator tRNA (carrying Met) binds to the start codon at the P site
- Large ribosomal subunit joins, completing the functional ribosome

**2. Elongation** (repeated cycle)

- **Codon recognition:** A charged tRNA enters the A site; its anticodon base-pairs with the mRNA codon
- **Peptide bond formation:** The ribosome (specifically, the rRNA — a ribozyme) catalyzes a peptide bond between the amino acid in the A site and the growing chain in the P site
- **Translocation:** The ribosome shifts one codon (3 nucleotides) along the mRNA in the 5'→3' direction. The tRNA in the P site moves to the E site and exits; the tRNA in the A site moves to the P site

**3. Termination**

- The ribosome reaches a stop codon (UAA, UAG, or UGA)
- A **release factor** binds to the A site (no tRNA matches a stop codon)
- The polypeptide is released, and the ribosome disassembles

#### Diagram: Translation Step-Through Simulator

<iframe src="../../sims/translation-simulator/main.html" height="600" width="100%" scrolling="no"></iframe>

*[View Fullscreen](../../sims/translation-simulator/main.html)*

<details markdown="1">
<summary>Translation Step-Through Simulator — Specification</summary>
**Type:** MicroSim (p5.js)<br/>
**sim-id:** translation-simulator<br/>
**Library:** p5.js<br/>
**Status:** Specified

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
</details>

### Polysomes

In cells, a single mRNA molecule is typically translated by **multiple ribosomes simultaneously**. This cluster of ribosomes on one mRNA is called a **polysome** (or polyribosome).

- Each ribosome in the polysome independently translates the same mRNA
- Ribosomes closer to the 5' end have shorter polypeptide chains (they started more recently)
- Ribosomes closer to the 3' end have nearly complete polypeptides
- Polysomes dramatically increase the rate of protein production from a single mRNA

In prokaryotes, transcription and translation are **coupled** — ribosomes begin translating the mRNA while it is still being transcribed (because there is no nuclear envelope separating the processes).

!!! mascot-warning "Common Mistake"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Gregor warns you">
    Students often confuse the template strand with the coding strand. Remember: RNA polymerase reads the **template strand** (3'→5'), but the mRNA product has the same sequence as the **coding strand** (with U replacing T). When you are given a DNA coding strand sequence and asked to write the mRNA, simply replace T with U. When given the template strand, write the complement and replace T with U.

---

## Key Takeaways

1. The **central dogma** describes the flow of genetic information: DNA → RNA → Protein.

2. **DNA replication** is semiconservative — each daughter molecule contains one parental strand and one new strand. DNA polymerase synthesizes 5'→3', requiring a primer.

3. The **leading strand** is synthesized continuously; the **lagging strand** is synthesized in **Okazaki fragments** that are later joined by ligase.

4. **Proofreading and repair** mechanisms reduce the error rate to approximately 1 in $10^9$ bases.

5. **Telomeres** protect chromosome ends. Telomerase extends them in germ cells and cancer cells but is inactive in most somatic cells.

6. **Transcription** is catalyzed by RNA polymerase, which reads the template strand 3'→5' and synthesizes mRNA 5'→3'. **Promoters** (TATA box in eukaryotes) determine where transcription starts.

7. Eukaryotic **mRNA processing** includes 5' capping, poly-A tailing, and **RNA splicing** (removal of introns, joining of exons). **Alternative splicing** allows one gene to produce multiple proteins.

8. **Translation** occurs at ribosomes in three stages: initiation (start codon AUG), elongation (codon recognition → peptide bond → translocation), and termination (stop codons UAA, UAG, UGA).

9. The **genetic code** is redundant (64 codons for 20 amino acids), universal, unambiguous, and non-overlapping.

10. **tRNAs** are charged by **aminoacyl-tRNA synthetases**; anticodons on tRNA base-pair with codons on mRNA, ensuring the correct amino acid is added.

11. **Polysomes** — clusters of ribosomes on one mRNA — increase the rate of protein production.

---

??? question "college placement Practice: Test Your Understanding"
    **Question 1:** If the template strand of DNA reads 3'-TACGGATCCAATT-5', what is the sequence of the resulting mRNA?

    **Answer:** mRNA is synthesized complementary to the template, in the 5'→3' direction: 5'-AUGCCUAGGUUAA-3'. Note: AUG is the start codon, and UAA is a stop codon.

    **Question 2:** A eukaryotic gene contains 5 exons and 4 introns. How many different mRNA molecules could theoretically be produced by alternative splicing if at least 2 exons must be included?

    **Answer:** The number of subsets of 5 exons with at least 2 members = $\binom{5}{2} + \binom{5}{3} + \binom{5}{4} + \binom{5}{5} = 10 + 10 + 5 + 1 = 26$ possible mRNA variants (though in practice, exon order is maintained, so the actual number depends on which exons can be skipped).

    **Question 3:** Explain why an error in an aminoacyl-tRNA synthetase could be more damaging than a single-base mutation in DNA.

    **Answer:** An aminoacyl-tRNA synthetase charges **every** tRNA of a given type. If it loads the wrong amino acid, that error is repeated in every protein that uses that amino acid — potentially affecting thousands of proteins simultaneously. A DNA mutation, by contrast, affects only one gene (and only the proteins translated from that gene).
