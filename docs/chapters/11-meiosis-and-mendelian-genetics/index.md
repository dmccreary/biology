---
title: Meiosis and Mendelian Genetics
description: The two-division meiotic process that generates haploid gametes, the role of crossing over and independent assortment in creating genetic variation, and Mendel's laws applied through monohybrid crosses, dihybrid crosses, Punnett squares, and test crosses.
generated_by: claude skill chapter-content-generator
date: 2026-02-26 19:39:57
version: 0.05
---

# Meiosis and Mendelian Genetics

!!! mascot-welcome "Gregor Welcomes You!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Gregor welcomes you">
    Welcome, investigators! You already know that mitosis produces two genetically identical daughter cells — perfect for growth and repair. But life would be very boring if every organism were a clone of its parent. Sexual reproduction generates the spectacular diversity we see across the living world, and the molecular engine behind that diversity is **meiosis**. In this chapter we will trace how meiosis halves the chromosome number and shuffles allele combinations, then apply Gregor Mendel's brilliant laws to predict inheritance patterns with mathematical precision. Let's investigate!

## Summary

Sexual reproduction generates genetically unique offspring through meiosis — a
two-division process that halves the chromosome number and shuffles allele
combinations via crossing over. This chapter covers both meiotic divisions in
detail, explains how crossing over at chiasmata creates genetic recombination,
and traces the journey from diploid parent cell to haploid gametes and fertilization.
The second half applies Mendel's laws of segregation and independent assortment to
predict inheritance outcomes, working through monohybrid and dihybrid crosses,
Punnett squares, and test crosses with quantitative rigor appropriate for the college placement exam.

## Concepts Covered

This chapter covers the following 20 concepts from the learning graph:

**Meiosis and Genetic Variation**

1. Meiosis Overview
2. Meiosis I
3. Meiosis II
4. Synapsis and Tetrad Formation
5. Crossing Over
6. Chiasmata
7. Genetic Recombination
8. Haploid and Diploid Cells
9. Gametes
10. Fertilization

**Mendelian Genetics**

11. Chromosomal Theory of Inheritance
12. Mendel's Law of Segregation
13. Mendel's Law of Independent Assortment
14. Dominant and Recessive Alleles
15. Genotype and Phenotype
16. Homozygous and Heterozygous
17. Monohybrid Crosses
18. Dihybrid Crosses
19. Punnett Squares
20. Test Crosses

## Prerequisites

This chapter builds on concepts from:

- [Chapter 3: Biological Macromolecules](../03-biological-macromolecules/index.md)
- [Chapter 4: Cell Organization and Organelles](../04-cell-organization-and-organelles/index.md)
- [Chapter 10: The Cell Cycle, Mitosis, and Cancer](../10-cell-cycle-mitosis-and-cancer/index.md)

---

## Haploid and Diploid Cells

Before diving into meiosis, we need to understand two terms that describe chromosome number in a cell. Recall from Chapter 4 that eukaryotic cells package their DNA into structures called chromosomes.

- **Diploid cells** (abbreviated **2n**) carry two complete sets of chromosomes — one set inherited from each parent. In humans, the diploid number is 46 (23 pairs).
- **Haploid cells** (abbreviated **n**) carry a single set of chromosomes. In humans, the haploid number is 23.

Every somatic (body) cell in your body is diploid. Of the 23 pairs of chromosomes, 22 pairs are **autosomes** (non-sex chromosomes) and one pair consists of **sex chromosomes** (XX or XY). The two chromosomes in each autosomal pair are called **homologous chromosomes** (or homologs) — they carry genes for the same traits arranged in the same order, although they may carry different alleles at each locus.

| Term | Symbol | Chromosome sets | Human example | Found in |
|------|--------|----------------|---------------|----------|
| Diploid | 2n | Two (maternal + paternal) | 46 chromosomes | Somatic cells |
| Haploid | n | One | 23 chromosomes | Gametes (egg, sperm) |

## Gametes and Fertilization

**Gametes** are the specialized reproductive cells — eggs (ova) in females and sperm in males — that carry the haploid chromosome number. They are produced through meiosis in the ovaries and testes, respectively.

**Fertilization** is the fusion of two haploid gametes to form a single diploid cell called a **zygote**. The zygote restores the species' characteristic chromosome number:

$$n + n = 2n$$

In humans: $23 + 23 = 46$. This cycle — meiosis reduces the number, fertilization restores it — ensures the chromosome count stays constant across generations.

!!! mascot-thinking "Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Gregor thinking">
    Notice the elegant logic: if gametes were diploid, the chromosome number would double every generation! Meiosis solves this problem by precisely halving the chromosome count. This connects back to the cell cycle you studied in Chapter 10 — but meiosis adds a critical twist: two rounds of division instead of one.

## Meiosis Overview

**Meiosis** is a specialized form of cell division that produces four genetically unique haploid cells from a single diploid parent cell. Unlike mitosis, which yields two identical diploid daughters, meiosis achieves two critical goals:

1. **Reduces chromosome number** from diploid (2n) to haploid (n)
2. **Generates genetic diversity** through crossing over and independent assortment

Meiosis consists of two sequential divisions — **meiosis I** and **meiosis II** — each with prophase, metaphase, anaphase, and telophase stages. Between the two divisions there is a brief interkinesis (no additional DNA replication occurs).

| Feature | Mitosis | Meiosis |
|---------|---------|---------|
| Number of divisions | 1 | 2 |
| Daughter cells produced | 2 | 4 |
| Daughter cell ploidy | Diploid (2n) | Haploid (n) |
| Genetic identity | Identical to parent | Genetically unique |
| Crossing over | Rare / absent | Required (prophase I) |
| Homolog pairing | Does not occur | Occurs in prophase I |
| Function | Growth, repair | Gamete production |

#### Diagram: Meiosis Stages Explorer

<iframe src="../../sims/meiosis-stages/main.html" height="600" width="100%" scrolling="no"></iframe>

*[View Fullscreen](../../sims/meiosis-stages/main.html)*

<details markdown="1">
<summary>Meiosis Stages Explorer — Specification</summary>
**Type:** MicroSim (p5.js)<br/>
**sim-id:** meiosis-stages<br/>
**Library:** p5.js<br/>
**Status:** Specified

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
</details>

## Meiosis I: The Reductional Division

Meiosis I is called the **reductional division** because it reduces the chromosome number from 2n to n. The key innovation of meiosis I is that **homologous chromosomes pair up and then separate**, unlike mitosis where individual chromosomes line up independently.

### Prophase I

Prophase I is the longest and most complex phase of meiosis — and arguably the most important for generating genetic diversity. Several critical events occur:

1. **Chromosomes condense** from diffuse chromatin into visible structures. Each chromosome has already been replicated during S phase and consists of two sister chromatids joined at the centromere.
2. **Synapsis** occurs — homologous chromosomes find each other and pair tightly along their entire length in a process mediated by the synaptonemal complex (a protein scaffold).
3. **Tetrad formation** — each synapsed pair of homologs consists of four chromatids (two sister chromatids per homolog), forming a structure called a **tetrad** (or bivalent).
4. **Crossing over** occurs at specific points where non-sister chromatids of homologous chromosomes exchange segments of DNA.

### Synapsis and Tetrad Formation

During synapsis, homologous chromosomes align gene by gene with remarkable precision. The **synaptonemal complex** — a protein zipper — holds the homologs together. Each pair of synapsed homologs forms a **tetrad** (four chromatids total). The tetrad is the structural unit that makes crossing over possible.

### Crossing Over and Chiasmata

**Crossing over** is the reciprocal exchange of DNA segments between non-sister chromatids of homologous chromosomes. The physical sites where crossing over has occurred are visible as X-shaped structures called **chiasmata** (singular: chiasma).

The molecular mechanism involves:

1. Enzyme-mediated double-strand breaks in the DNA of one chromatid
2. Strand invasion — a broken end inserts into the homologous chromatid
3. DNA synthesis fills gaps using the homologous strand as a template
4. Ligation reconnects the strands, creating recombinant chromatids

The result is that each recombinant chromatid carries a novel combination of alleles — some from the maternal homolog and some from the paternal homolog. This is a major source of **genetic recombination**.

!!! mascot-tip "Gregor's Tip"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Gregor's tip">
    The college placement exam frequently tests the distinction between crossing over (exchange of segments between non-sister chromatids) and independent assortment (random orientation of tetrads at metaphase I). Both generate genetic variation, but they work by different mechanisms. Crossing over creates new allele combinations *within* a chromosome; independent assortment shuffles *whole chromosomes* between daughter cells.

#### Diagram: Crossing Over Visualization

<iframe src="../../sims/crossing-over/main.html" height="550" width="100%" scrolling="no"></iframe>

*[View Fullscreen](../../sims/crossing-over/main.html)*

<details markdown="1">
<summary>Crossing Over Visualization — Specification</summary>
**Type:** MicroSim (p5.js)<br/>
**sim-id:** crossing-over<br/>
**Library:** p5.js<br/>
**Status:** Specified

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
</details>

### Metaphase I

During metaphase I, tetrads line up at the **metaphase plate** (the cell's equator). Each tetrad is oriented with one homolog facing each pole. The orientation is **random** — the maternal homolog of one pair may face the same pole as the paternal homolog of another pair. This random arrangement is the physical basis of **independent assortment** (discussed later with Mendel's laws).

### Anaphase I

Homologous chromosomes separate and move toward opposite poles. Critically, **sister chromatids remain joined** at their centromeres. This is the fundamental difference from mitotic anaphase, where sister chromatids separate.

### Telophase I and Cytokinesis I

Each pole now has a haploid set of chromosomes (n), though each chromosome still consists of two sister chromatids. The cell divides, producing two haploid cells. A brief **interkinesis** may occur, but no DNA replication takes place.

## Meiosis II: The Equational Division

Meiosis II is structurally similar to mitosis — sister chromatids separate — but it starts with haploid cells rather than diploid. It is called the **equational division** because the chromosome number stays the same (n → n).

| Stage | Key events |
|-------|-----------|
| Prophase II | Chromosomes recondense; new spindle forms |
| Metaphase II | Individual chromosomes (each = 2 sister chromatids) line up at metaphase plate |
| Anaphase II | Sister chromatids separate and move to opposite poles |
| Telophase II / Cytokinesis II | Four haploid daughter cells form, each with n single-chromatid chromosomes |

The end result of meiosis: **four genetically unique haploid cells** from one diploid parent.

### Genetic Recombination: Three Sources of Variation

Meiosis generates genetic diversity through three mechanisms:

1. **Crossing over** (prophase I) — creates recombinant chromatids with new allele combinations
2. **Independent assortment** (metaphase I) — random orientation of tetrads means $2^n$ possible combinations of maternal and paternal chromosomes per gamete. For humans with 23 chromosome pairs: $2^{23} = 8{,}388{,}608$ combinations.
3. **Random fertilization** — any sperm can fertilize any egg. Combined with independent assortment: $8{,}388{,}608 \times 8{,}388{,}608 \approx 7 \times 10^{13}$ genetically distinct zygote possibilities — without even counting crossing over.

!!! mascot-celebration "Excellent Work!"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Gregor celebrates">
    You have now mastered the mechanics of meiosis! The concept that a single individual can produce over 8 million genetically distinct gametes (and over 70 trillion distinct offspring when combined with a partner) helps explain the incredible phenotypic diversity within any species. Time to turn that understanding into predictive power — Mendelian genetics is up next!

---

## The Chromosomal Theory of Inheritance

In the early 1900s, Walter Sutton and Theodor Boveri independently realized that the behavior of chromosomes during meiosis parallels the behavior of Mendel's "hereditary factors." Their **chromosomal theory of inheritance** states:

- Genes are located on chromosomes
- Chromosomes segregate during meiosis I (like Mendel's factors)
- Homologous pairs assort independently (like Mendel's independent assortment)

This theory unified cytology (the study of cells) with genetics, providing a physical explanation for Mendel's abstract laws. Thomas Hunt Morgan's later work with *Drosophila* (fruit flies) confirmed the theory by showing that specific genes reside on specific chromosomes.

## Mendel's Experiments and Key Terms

Gregor Mendel (1822–1884) studied inheritance in garden peas (*Pisum sativum*), choosing traits with discrete, contrasting forms (e.g., tall vs. short, round vs. wrinkled seeds). His experimental approach — true-breeding parental lines, controlled crosses, and large sample sizes with statistical analysis — was revolutionary for his time.

Before we apply Mendel's laws, we need precise vocabulary:

### Dominant and Recessive Alleles

An **allele** is an alternative version of a gene. Diploid organisms carry two alleles for each gene (one per homolog).

- A **dominant allele** produces its phenotype whether the individual carries one or two copies. By convention, dominant alleles are written with an uppercase letter (e.g., **A**).
- A **recessive allele** produces its phenotype only when two copies are present (homozygous recessive). Recessive alleles are written with a lowercase letter (e.g., **a**).

!!! mascot-warning "Common Mistake"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Gregor warns you">
    "Dominant" does NOT mean "more common" or "better." A dominant allele simply masks the recessive allele in heterozygotes. In many populations, the recessive allele is actually more common (e.g., the allele for five fingers is recessive — but nearly universal). The college placement exam tests this distinction directly.

### Genotype and Phenotype

- **Genotype** — the genetic makeup of an organism at a particular locus (e.g., *Bb*, *AA*, *aa*)
- **Phenotype** — the observable physical or biochemical trait that results from the genotype interacting with the environment (e.g., brown eyes, round seeds)

The same phenotype can result from different genotypes. For example, both **BB** and **Bb** produce the dominant phenotype.

### Homozygous and Heterozygous

- **Homozygous** — carrying two identical alleles at a locus (*AA* or *aa*)
- **Heterozygous** — carrying two different alleles at a locus (*Aa*)

| Genotype | Term | Phenotype |
|----------|------|-----------|
| AA | Homozygous dominant | Dominant trait |
| Aa | Heterozygous | Dominant trait |
| aa | Homozygous recessive | Recessive trait |

## Mendel's Law of Segregation

Mendel's **first law** (the Law of Segregation) states:

> The two alleles for each gene separate (segregate) during gamete formation, so that each gamete carries only one allele for each trait.

This directly mirrors the behavior of homologous chromosomes during **anaphase I** of meiosis — when homologs separate, the alleles they carry also separate into different gametes.

A heterozygous individual (*Aa*) produces gametes in a 1:1 ratio — half carry *A* and half carry *a*.

## Mendel's Law of Independent Assortment

Mendel's **second law** (the Law of Independent Assortment) states:

> Alleles of different genes assort independently of one another during gamete formation, provided the genes are on different chromosomes (or far apart on the same chromosome).

This reflects the **random orientation of tetrads at metaphase I**. When two gene loci are on different chromosomes, the maternal/paternal orientation of one pair has no effect on the orientation of the other pair.

## Monohybrid Crosses

A **monohybrid cross** involves parents that differ in a single trait. Mendel's classic example: crossing a true-breeding tall plant (*TT*) with a true-breeding short plant (*tt*).

**P generation (parents):** TT × tt

**F1 generation (first filial):** All *Tt* — all tall (dominant phenotype)

**F1 × F1 cross:** *Tt* × *Tt*

### Punnett Squares

A **Punnett square** is a grid used to predict the genotypic and phenotypic ratios of offspring from a cross. For a monohybrid cross of two heterozygotes:

|  | **T** | **t** |
|---|---|---|
| **T** | TT | Tt |
| **t** | Tt | tt |

**F2 genotypic ratio:** 1 TT : 2 Tt : 1 tt

**F2 phenotypic ratio:** 3 tall : 1 short (the classic **3:1 ratio**)

#### Diagram: Interactive Punnett Square Calculator

<iframe src="../../sims/punnett-square-calculator/main.html" height="600" width="100%" scrolling="no"></iframe>

*[View Fullscreen](../../sims/punnett-square-calculator/main.html)*

<details markdown="1">
<summary>Interactive Punnett Square Calculator — Specification</summary>
**Type:** MicroSim (p5.js)<br/>
**sim-id:** punnett-square-calculator<br/>
**Library:** p5.js<br/>
**Status:** Specified

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
</details>

### Solving a Monohybrid Cross: Worked Example

**Problem:** In pea plants, round seed shape (R) is dominant over wrinkled (r). Cross two heterozygous plants (Rr × Rr). What fraction of offspring will have wrinkled seeds?

**Step 1:** Determine gametes. Each parent produces gametes: R and r (50% each).

**Step 2:** Set up the Punnett square:

|  | **R** | **r** |
|---|---|---|
| **R** | RR | Rr |
| **r** | Rr | rr |

**Step 3:** Read the results.

- Genotypic ratio: 1 RR : 2 Rr : 1 rr
- Phenotypic ratio: 3 round : 1 wrinkled
- **Answer:** $\frac{1}{4}$ (25%) of offspring will have wrinkled seeds

## Dihybrid Crosses

A **dihybrid cross** involves parents that differ in two traits. This tests Mendel's Law of Independent Assortment — if genes assort independently, the inheritance of one trait should not affect the inheritance of another.

**Example:** Cross two pea plants heterozygous for both seed shape and seed color: *RrYy × RrYy* (R = round, r = wrinkled; Y = yellow, y = green).

Each parent produces four types of gametes in equal proportions: **RY**, **Ry**, **rY**, **ry**.

The Punnett square for a dihybrid cross is a 4×4 grid with 16 cells:

|  | **RY** | **Ry** | **rY** | **ry** |
|---|---|---|---|---|
| **RY** | RRYY | RRYy | RrYY | RrYy |
| **Ry** | RRYy | RRyy | RrYy | Rryy |
| **rY** | RrYY | RrYy | rrYY | rrYy |
| **ry** | RrYy | Rryy | rrYy | rryy |

**F2 phenotypic ratio:** 9 round yellow : 3 round green : 3 wrinkled yellow : 1 wrinkled green

This **9:3:3:1 ratio** is the hallmark of a dihybrid cross with independent assortment and complete dominance.

#### Diagram: Dihybrid Cross Outcome Visualizer

<iframe src="../../sims/dihybrid-cross/main.html" height="550" width="100%" scrolling="no"></iframe>

*[View Fullscreen](../../sims/dihybrid-cross/main.html)*

<details markdown="1">
<summary>Dihybrid Cross Outcome Visualizer — Specification</summary>
**Type:** MicroSim (Chart.js)<br/>
**sim-id:** dihybrid-cross<br/>
**Library:** Chart.js<br/>
**Status:** Specified

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
</details>

### The Multiplication Rule for Dihybrid Crosses

A faster approach than drawing the full 4×4 grid: treat each gene independently using the **multiplication rule**.

For *Rr × Rr*: probability of round (R_) = $\frac{3}{4}$, wrinkled (rr) = $\frac{1}{4}$

For *Yy × Yy*: probability of yellow (Y_) = $\frac{3}{4}$, green (yy) = $\frac{1}{4}$

Probability of round yellow = $\frac{3}{4} \times \frac{3}{4} = \frac{9}{16}$

Probability of wrinkled green = $\frac{1}{4} \times \frac{1}{4} = \frac{1}{16}$

This shortcut works **only** when the genes assort independently.

## Test Crosses

A **test cross** determines whether an organism showing the dominant phenotype is homozygous dominant (*AA*) or heterozygous (*Aa*). The individual with the unknown genotype is crossed with a **homozygous recessive** individual (*aa*).

**Logic of the test cross:**

- If the unknown is *AA*: all offspring show the dominant phenotype (all *Aa*)
- If the unknown is *Aa*: offspring appear in a 1:1 ratio of dominant to recessive (*Aa* and *aa*)

| Unknown genotype | Cross | Expected offspring |
|-----------------|-------|--------------------|
| AA | AA × aa | All Aa (100% dominant) |
| Aa | Aa × aa | 50% Aa (dominant), 50% aa (recessive) |

The test cross was Mendel's primary tool for deducing genotypes, and it remains the standard genetic test for identifying carriers of recessive alleles.

#### Diagram: Test Cross Simulator

<iframe src="../../sims/test-cross-simulator/main.html" height="550" width="100%" scrolling="no"></iframe>

*[View Fullscreen](../../sims/test-cross-simulator/main.html)*

<details markdown="1">
<summary>Test Cross Simulator — Specification</summary>
**Type:** MicroSim (p5.js)<br/>
**sim-id:** test-cross-simulator<br/>
**Library:** p5.js<br/>
**Status:** Specified

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
</details>

!!! mascot-encourage "You've Got This!"
    <img src="../../img/mascot/encouraging.png" class="mascot-admonition-img" alt="Gregor encourages you">
    Genetics problems can feel intimidating at first, but they follow consistent logical patterns. If you can set up a Punnett square, identify gamete types, and read the ratios, you can solve any Mendelian genetics problem. Practice is the key — work through several crosses until the 3:1 and 9:3:3:1 ratios feel like second nature. You'll be ready for the college placement exam's genetics free-response questions in no time!

---

## Connecting Meiosis to Mendel's Laws

Mendel published his work in 1866 — decades before chromosomes were understood. The beauty of the chromosomal theory is that it reveals the physical basis for each of Mendel's abstract laws:

| Mendel's law | Chromosomal basis |
|---|---|
| Law of Segregation | Homologous chromosomes (carrying alleles) separate during anaphase I |
| Law of Independent Assortment | Non-homologous chromosome pairs orient randomly at metaphase I |

#### Diagram: Mendel-to-Meiosis Concept Map

<iframe src="../../sims/mendel-meiosis-map/main.html" height="500" width="100%" scrolling="no"></iframe>

*[View Fullscreen](../../sims/mendel-meiosis-map/main.html)*

<details markdown="1">
<summary>Mendel-to-Meiosis Concept Map — Specification</summary>
**Type:** Infographic (vis-network)<br/>
**sim-id:** mendel-meiosis-map<br/>
**Library:** vis-network<br/>
**Status:** Specified

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
</details>

## Key Takeaways

1. **Meiosis** produces four genetically unique haploid cells through two divisions. Meiosis I is reductional (2n → n); meiosis II is equational (n → n).

2. **Synapsis, crossing over, and chiasmata** during prophase I create recombinant chromatids — a major source of genetic variation.

3. **Three sources of genetic diversity** in sexual reproduction: crossing over, independent assortment ($2^n$ combinations), and random fertilization.

4. The **chromosomal theory of inheritance** links Mendel's abstract laws to observable chromosome behavior during meiosis.

5. **Mendel's Law of Segregation:** Two alleles for each gene separate during gamete formation (mirrors homolog separation in anaphase I).

6. **Mendel's Law of Independent Assortment:** Genes on different chromosomes assort independently (mirrors random tetrad orientation at metaphase I).

7. **Punnett squares** predict offspring ratios:
    - Monohybrid cross of heterozygotes → 3:1 phenotypic ratio
    - Dihybrid cross of heterozygotes → 9:3:3:1 phenotypic ratio

8. **Test crosses** (unknown × homozygous recessive) distinguish homozygous dominant from heterozygous individuals based on offspring ratios.

---

??? question "college placement Practice: Test Your Understanding"
    **Question 1:** A cell with a diploid number of 2n = 6 undergoes meiosis. How many chromosomes will be in each gamete? How many genetically distinct types of gametes can this organism produce by independent assortment alone?

    **Answer:** Each gamete will contain n = 3 chromosomes. By independent assortment: $2^3 = 8$ genetically distinct gamete types.

    **Question 2:** In tomato plants, red fruit (R) is dominant over yellow (r), and tall (T) is dominant over dwarf (t). A plant heterozygous for both traits (RrTt) is crossed with a homozygous recessive plant (rrtt). What phenotypic ratio is expected among the offspring?

    **Answer:** This is a dihybrid test cross. The RrTt parent produces four gamete types in equal proportions (RT, Rt, rT, rt). The rrtt parent produces only rt gametes. Expected offspring: 1 red tall (RrTt) : 1 red dwarf (Rrtt) : 1 yellow tall (rrTt) : 1 yellow dwarf (rrtt) — a **1:1:1:1 ratio**.

    **Question 3:** Explain why a cross between two organisms that are both Aa produces a 3:1 phenotypic ratio rather than a 2:1 ratio.

    **Answer:** The 3:1 ratio arises because both AA (homozygous dominant) and Aa (heterozygous) produce the dominant phenotype. The Punnett square yields 1 AA : 2 Aa : 1 aa. Since AA and Aa are phenotypically identical, the dominant class = 1 + 2 = 3 out of 4 total, giving 3:1.
