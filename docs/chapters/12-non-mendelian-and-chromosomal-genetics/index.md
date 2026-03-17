---
title: Non-Mendelian Inheritance and Chromosomal Genetics
description: Extensions of Mendelian genetics including incomplete dominance, codominance, multiple alleles, sex-linked inheritance, polygenic traits, epistasis, genetic linkage, chromosomal abnormalities, and pedigree analysis.
generated_by: claude skill chapter-content-generator
date: 2026-02-26 19:44:36
version: 0.05
---

# Non-Mendelian Inheritance and Chromosomal Genetics

!!! mascot-welcome "Gregor Welcomes You!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Gregor welcomes you">
    Welcome back, investigators! In Chapter 11 you mastered Mendel's elegant laws — but nature is rarely that tidy. Many traits blend, overlap, or depend on multiple genes working in concert. Some alleles ride on sex chromosomes, and sometimes entire chromosomes fail to separate properly during meiosis. In this chapter, we venture beyond the 3:1 ratio into the rich, messy, fascinating reality of inheritance. Let's investigate!

## Summary

Mendel's laws describe a simplified model of inheritance, but most traits do not
follow simple dominant-recessive patterns. This chapter extends the Mendelian
framework to incomplete dominance, codominance, multiple alleles, sex determination,
and X-linked inheritance, then examines how polygenic inheritance and epistasis
produce continuous variation and complex phenotypes. The chapter also covers genetic
linkage and recombination frequency as tools for chromosomal mapping. It concludes
with chromosomal genetics: nondisjunction, the aneuploidy conditions it produces,
and the diagnostic power of pedigree analysis for determining inheritance patterns
in human families.

## Concepts Covered

This chapter covers the following 15 concepts from the learning graph:

1. Incomplete Dominance
2. Codominance
3. Multiple Alleles
4. Sex Determination
5. Sex-Linked Traits
6. X-Linked Inheritance
7. Polygenic Inheritance
8. Epistasis
9. Pleiotropy
10. Genetic Linkage
11. Recombination Frequency
12. Chromosomal Abnormalities
13. Nondisjunction
14. Aneuploidy
15. Pedigree Analysis

## Prerequisites

This chapter builds on concepts from:

- [Chapter 11: Meiosis and Mendelian Genetics](../11-meiosis-and-mendelian-genetics/index.md)

---

## Beyond Simple Dominance

In Chapter 11, every trait exhibited **complete dominance** — the heterozygote looked exactly like the homozygous dominant parent. But many allele interactions are more nuanced. Two important alternatives are incomplete dominance and codominance.

### Incomplete Dominance

In **incomplete dominance**, the heterozygote displays a phenotype that is intermediate between the two homozygous phenotypes — neither allele fully masks the other.

**Classic example:** Flower color in snapdragons (*Antirrhinum*)

- $C^R C^R$ (homozygous) → **red** flowers
- $C^W C^W$ (homozygous) → **white** flowers
- $C^R C^W$ (heterozygous) → **pink** flowers

When two pink heterozygotes are crossed ($C^R C^W \times C^R C^W$):

|  | $C^R$ | $C^W$ |
|---|---|---|
| $C^R$ | $C^R C^R$ (red) | $C^R C^W$ (pink) |
| $C^W$ | $C^R C^W$ (pink) | $C^W C^W$ (white) |

**Phenotypic ratio:** 1 red : 2 pink : 1 white

**Genotypic ratio:** 1 $C^R C^R$ : 2 $C^R C^W$ : 1 $C^W C^W$

Notice that in incomplete dominance, the phenotypic ratio equals the genotypic ratio (1:2:1) because every genotype produces a distinct phenotype.

!!! mascot-tip "Gregor's Tip"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Gregor's tip">
    The college placement exam loves to test the difference between incomplete dominance and codominance. The key: incomplete dominance produces a **blended** intermediate phenotype (pink from red + white), while codominance produces a phenotype where **both alleles are fully expressed** simultaneously. If you see a blended phenotype, it's incomplete dominance. If both traits appear side by side, it's codominance.

### Codominance

In **codominance**, both alleles in the heterozygote are fully and simultaneously expressed — the phenotype is not intermediate but rather shows both parental traits distinctly.

Here is an example of how humans children inherit their blood type from their parents.

#### Diagram: Blood Type Explorer

<iframe src="../../sims/blood-type-explorer/main.html" height="680px" width="100%" scrolling="no"></iframe>

[Run the Blood Type Explorer Fullscreen](../../sims/blood-type-explorer/main.html)

**Classic example:** ABO blood type — the $I^A$ and $I^B$ alleles

- $I^A I^A$ or $I^A i$ → type **A** blood (A antigens on red blood cells)
- $I^B I^B$ or $I^B i$ → type **B** blood (B antigens on red blood cells)
- $I^A I^B$ → type **AB** blood (**both** A and B antigens expressed)
- $ii$ → type **O** blood (neither antigen)

In the $I^A I^B$ heterozygote, both the A antigen and the B antigen are produced — this is codominance because both alleles are fully expressed rather than blended.

| Dominance Pattern | Heterozygote Phenotype | Example |
|---|---|---|
| Complete dominance | Same as homozygous dominant | Tall pea plants (Tt = TT phenotype) |
| Incomplete dominance | Intermediate blend | Pink snapdragons ($C^R C^W$) |
| Codominance | Both alleles fully expressed | AB blood type ($I^A I^B$) |

### Multiple Alleles

Mendel's crosses always involved genes with exactly two alleles. However, many genes exist as **multiple alleles** in a population — more than two allelic variants at a single locus. Any individual organism still carries only two alleles (one per homolog), but the population as a whole harbors more.

The ABO blood group illustrates both codominance and multiple alleles simultaneously: the gene has three alleles ($I^A$, $I^B$, and $i$), producing six possible genotypes and four phenotypes.

| Genotype | Phenotype (Blood Type) | Antigens present |
|---|---|---|
| $I^A I^A$ or $I^A i$ | Type A | A |
| $I^B I^B$ or $I^B i$ | Type B | B |
| $I^A I^B$ | Type AB | A and B |
| $ii$ | Type O | Neither |

#### Diagram: Blood Type Inheritance Explorer

<iframe src="../../sims/blood-type-inheritance/main.html" height="580" width="100%" scrolling="no"></iframe>

*[View Fullscreen](../../sims/blood-type-inheritance/main.html)*

<details markdown="1">
<summary>Blood Type Inheritance Explorer — Specification</summary>
**Type:** MicroSim (p5.js)<br/>
**sim-id:** blood-type-inheritance<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Learning objective:** Students will be able to *apply* (Bloom's L3: Apply) knowledge of multiple alleles and codominance to predict offspring blood types from parental crosses, and *solve* blood type genetics problems.

**Instructional Rationale:** An interactive cross calculator lets students select parental blood types and immediately see the Punnett square and offspring probabilities. This builds fluency with multiple allele systems and reinforces the distinction between codominance and complete dominance (i is recessive to both $I^A$ and $I^B$).

**Canvas:** 780 × 500 px, responsive.

**Layout:**

- Top: Parent selectors — two dropdown menus for Parent 1 and Parent 2 blood type phenotypes (A, B, AB, O)
- Below selectors: Possible genotype(s) for each parent shown as chips (e.g., Type A → could be $I^A I^A$ or $I^A i$)
- Center: Punnett square grid (2×2 or combined if multiple genotypes possible)
- Bottom: Results summary — offspring phenotype probabilities as colored bar chart segments

**Interaction:**
- Select parent phenotypes → genotype possibilities appear
- If a parent's genotype is ambiguous (e.g., Type A could be $I^A I^A$ or $I^A i$), a toggle lets the user specify the exact genotype
- Punnett square auto-fills with color-coded offspring
- Hover over any cell to see genotype, phenotype, and antigen info
- "Random Parents" button for quick practice

**Colors:**
- Type A: red (#E74C3C)
- Type B: blue (#3498DB)
- Type AB: purple (#8E44AD)
- Type O: gray (#95A5A6)

**Responsive design:** Grid and bar chart scale with container width.
</details>

---

## Sex Determination and Sex-Linked Inheritance

### Sex Determination

In humans and many other organisms, biological sex is determined by **sex chromosomes**. Humans have 22 pairs of autosomes plus one pair of sex chromosomes:

- **Females:** XX (two X chromosomes)
- **Males:** XY (one X, one Y chromosome)

The **Y chromosome** carries the *SRY* gene (Sex-determining Region Y), which triggers male development. In the absence of a functional SRY, the default developmental pathway produces female anatomy.

During meiosis in a male (XY), half the sperm receive an X chromosome and half receive a Y chromosome. Eggs from a female (XX) always carry one X. Therefore, the father's sperm determines the sex of the offspring:

| Egg | X Sperm | Y Sperm |
|-----|---------|---------|
| X | XX (female) | XY (male) |

Expected sex ratio: 1 female : 1 male (50:50)

### Sex-Linked Traits

**Sex-linked traits** are controlled by genes located on the sex chromosomes. Because the X chromosome is much larger than the Y chromosome and carries far more genes, most sex-linked traits are specifically **X-linked**.

### X-Linked Inheritance

**X-linked inheritance** refers to the transmission of genes located on the X chromosome. Key features:

- Males have only one X chromosome, so they are **hemizygous** for X-linked genes — a single copy of a recessive allele will produce the recessive phenotype
- Females have two X chromosomes, so they can be homozygous dominant, heterozygous (carriers), or homozygous recessive
- X-linked recessive conditions appear far more frequently in males than in females

**Classic example:** Red-green color blindness

- $X^B$ = normal vision (dominant)
- $X^b$ = color blindness (recessive)

| Genotype | Sex | Phenotype |
|---|---|---|
| $X^B X^B$ | Female | Normal vision |
| $X^B X^b$ | Female | Normal vision (carrier) |
| $X^b X^b$ | Female | Color blind |
| $X^B Y$ | Male | Normal vision |
| $X^b Y$ | Male | Color blind |

**Cross example:** Carrier female × normal male ($X^B X^b \times X^B Y$)

|  | $X^B$ | $Y$ |
|---|---|---|
| $X^B$ | $X^B X^B$ (normal female) | $X^B Y$ (normal male) |
| $X^b$ | $X^B X^b$ (carrier female) | $X^b Y$ (color-blind male) |

**Result:** All daughters have normal vision (but half are carriers); half of sons are color blind.

!!! mascot-warning "Common Mistake"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Gregor warns you">
    Students often write X-linked genotypes without the chromosome notation. Always use the format $X^B X^b$ (not just Bb) for X-linked traits — the chromosome matters! Also remember: fathers cannot pass X-linked traits to their sons (they give sons their Y chromosome). An affected father passes his X-linked allele to **all** daughters, never to sons.

#### Diagram: X-Linked Inheritance Simulator

<iframe src="../../sims/x-linked-inheritance/main.html" height="580" width="100%" scrolling="no"></iframe>

*[View Fullscreen](../../sims/x-linked-inheritance/main.html)*

<details markdown="1">
<summary>X-Linked Inheritance Simulator — Specification</summary>
**Type:** MicroSim (p5.js)<br/>
**sim-id:** x-linked-inheritance<br/>
**Library:** p5.js<br/>
**Status:** Specified

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
</details>

---

## Complex Inheritance Patterns

### Polygenic Inheritance

Many traits are not controlled by a single gene but by the combined effects of **multiple genes** — this is **polygenic inheritance**. Polygenic traits show **continuous variation** (a bell-shaped distribution) rather than discrete categories.

**Examples of polygenic traits:**

- Human skin color (at least 3–4 genes involved)
- Height (hundreds of genes)
- Eye color (multiple genes, including OCA2 and HERC2)
- Milk production in cattle

Each contributing gene typically has a small additive effect. When you plot the phenotypes of a large population, the result is a smooth bell curve (normal distribution) rather than distinct classes.

#### Diagram: Polygenic Trait Distribution Visualizer

<iframe src="../../sims/polygenic-distribution/main.html" height="520" width="100%" scrolling="no"></iframe>

*[View Fullscreen](../../sims/polygenic-distribution/main.html)*

<details markdown="1">
<summary>Polygenic Trait Distribution Visualizer — Specification</summary>
**Type:** MicroSim (Chart.js)<br/>
**sim-id:** polygenic-distribution<br/>
**Library:** Chart.js<br/>
**Status:** Specified

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
</details>

### Epistasis

**Epistasis** occurs when one gene modifies or masks the expression of a different gene at a separate locus. The "masking" gene is called the **epistatic** gene; the gene being masked is the **hypostatic** gene.

**Classic example:** Coat color in Labrador retrievers

- Gene E/e controls pigment deposition (E = pigment deposited; ee = no pigment → yellow)
- Gene B/b controls pigment color (B = black; bb = brown/chocolate)

| Genotype at E locus | Genotype at B locus | Phenotype |
|---|---|---|
| E_ (at least one E) | B_ (at least one B) | Black |
| E_ | bb | Chocolate |
| ee | B_ or bb | Yellow (pigment masked) |

A dihybrid cross of BbEe × BbEe produces a **9:3:4 ratio** instead of the standard 9:3:3:1:

- 9 B_E_ → black
- 3 bbE_ → chocolate
- 3 B_ee + 1 bbee → yellow (4 total)

The ee genotype is epistatic to the B/b locus — it masks whatever pigment gene is present.

!!! mascot-thinking "Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Gregor thinking">
    Modified dihybrid ratios are a big signal on the college placement exam that epistasis is at play. Whenever the F2 phenotypic ratio departs from 9:3:3:1 but the total still adds to 16, suspect epistasis. Common epistatic ratios include 9:3:4, 9:7, 12:3:1, and 15:1 — each reflects a different type of gene interaction.

### Pleiotropy

**Pleiotropy** occurs when a single gene influences **multiple, seemingly unrelated phenotypic traits**. This is the opposite of polygenic inheritance (where many genes affect one trait) — in pleiotropy, one gene affects many traits.

**Classic example:** Sickle cell disease — a single point mutation in the $\beta$-globin gene (Glu → Val at position 6) produces:

- Sickle-shaped red blood cells
- Chronic anemia
- Pain crises from blocked blood vessels
- Increased resistance to malaria (in heterozygotes)
- Organ damage (spleen, kidneys, lungs)

All of these diverse effects trace back to one gene mutation.

| Inheritance pattern | Genes involved | Traits affected | Example |
|---|---|---|---|
| Mendelian (simple) | 1 gene | 1 trait | Pea seed shape |
| Polygenic | Many genes | 1 trait | Human height |
| Pleiotropy | 1 gene | Many traits | Sickle cell disease |
| Epistasis | 2+ genes | 1 trait (with masking) | Labrador coat color |

---

## Genetic Linkage and Recombination

### Genetic Linkage

Mendel's Law of Independent Assortment works beautifully — **when genes are on different chromosomes**. But what happens when two genes are located on the same chromosome?

Genes on the same chromosome tend to be inherited together because they physically travel on the same DNA molecule during meiosis. This phenomenon is called **genetic linkage**. Linked genes do NOT assort independently — they violate Mendel's second law.

Thomas Hunt Morgan first demonstrated linkage in *Drosophila* by showing that certain gene combinations appeared in offspring far more often than the 1:1:1:1 ratio predicted by independent assortment.

### Recombination Frequency

Although linked genes tend to travel together, **crossing over during prophase I** can separate them. The frequency with which crossing over occurs between two linked genes is called the **recombination frequency** (RF).

$$\text{Recombination frequency} = \frac{\text{number of recombinant offspring}}{\text{total offspring}} \times 100\%$$

Key principles:

- RF ranges from 0% (genes very close together; virtually never separated by crossing over) to 50% (genes so far apart on the same chromosome that they behave as if unlinked)
- RF of 50% is indistinguishable from genes on different chromosomes
- RF is used as a measure of genetic **map distance**: 1% recombination = 1 **centimorgan** (cM) or 1 **map unit**
- The closer two genes are on a chromosome, the lower the recombination frequency

**Example:** If a cross produces 400 offspring, of which 36 are recombinants:

$$RF = \frac{36}{400} \times 100\% = 9\%$$

These two genes are approximately 9 cM apart on the chromosome.

#### Diagram: Genetic Linkage and Recombination Mapper

<iframe src="../../sims/linkage-mapper/main.html" height="560" width="100%" scrolling="no"></iframe>

*[View Fullscreen](../../sims/linkage-mapper/main.html)*

<details markdown="1">
<summary>Genetic Linkage and Recombination Mapper — Specification</summary>
**Type:** MicroSim (p5.js)<br/>
**sim-id:** linkage-mapper<br/>
**Library:** p5.js<br/>
**Status:** Specified

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
</details>

---

## Chromosomal Abnormalities

Sometimes errors occur during meiosis that alter the number or structure of entire chromosomes.

### Nondisjunction

**Nondisjunction** is the failure of chromosomes to separate properly during cell division. It can occur during:

- **Meiosis I** — homologous chromosomes fail to separate → both homologs go to one cell
- **Meiosis II** — sister chromatids fail to separate → both chromatids go to one cell
- **Mitosis** — sister chromatids fail to separate (affects only the individual, not offspring)

The result is gametes with an abnormal number of chromosomes — either one extra chromosome (n+1) or one missing (n-1).

### Aneuploidy

When a gamete with an abnormal chromosome number is fertilized by a normal gamete, the resulting zygote has an abnormal chromosome count — this condition is called **aneuploidy**.

- **Trisomy** (2n+1): three copies of a chromosome instead of two
- **Monosomy** (2n-1): only one copy of a chromosome instead of two

| Condition | Chromosome affected | Karyotype | Features |
|---|---|---|---|
| Down syndrome | Trisomy 21 | 47, +21 | Intellectual disability, characteristic facial features, heart defects |
| Turner syndrome | Monosomy X | 45, X | Female phenotype, short stature, infertility |
| Klinefelter syndrome | Extra X in male | 47, XXY | Male phenotype, tall stature, infertility |
| Patau syndrome | Trisomy 13 | 47, +13 | Severe intellectual disability, organ defects |
| Edwards syndrome | Trisomy 18 | 47, +18 | Severe intellectual disability, often fatal in infancy |

Most autosomal monosomies are lethal before birth, while some trisomies (particularly of smaller chromosomes) are survivable. Sex chromosome aneuploidies tend to be less severe than autosomal aneuploidies.

#### Diagram: Nondisjunction in Meiosis Visualizer

<iframe src="../../sims/nondisjunction/main.html" height="400" width="100%" scrolling="no"></iframe>

*[View Fullscreen](../../sims/nondisjunction/main.html)*

<details markdown="1">
<summary>Nondisjunction in Meiosis Visualizer — Specification</summary>
**Type:** MicroSim (p5.js)<br/>
**sim-id:** nondisjunction<br/>
**Library:** p5.js<br/>
**Status:** Specified

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
</details>

---

## Pedigree Analysis

A **pedigree** is a family tree diagram that traces the inheritance of a trait through multiple generations. Pedigrees are essential tools in human genetics because controlled crosses are impossible in humans — geneticists must observe patterns in existing families.

### Pedigree Symbols

- **Circle** = female
- **Square** = male
- **Filled shape** = affected individual
- **Half-filled shape** = carrier (known or inferred)
- **Horizontal line** connecting a circle and square = mating
- **Vertical line** going down = offspring
- **Roman numerals** (I, II, III...) = generations

### Identifying Inheritance Patterns

By analyzing which individuals are affected and how the trait passes through generations, you can deduce the most likely mode of inheritance:

| Pattern | Key clues |
|---|---|
| **Autosomal dominant** | Affected individuals in every generation; affected parent has at least one affected child; unaffected parents never have affected children |
| **Autosomal recessive** | Trait can skip generations; affected children often have two unaffected (carrier) parents; appears equally in males and females |
| **X-linked recessive** | Affects mostly males; affected males get allele from carrier mothers; affected fathers pass allele to all daughters (carriers) but no sons |
| **X-linked dominant** | Affected father passes trait to all daughters but no sons; affected mothers pass to ~50% of all children |

#### Diagram: Interactive Pedigree Analyzer

<iframe src="../../sims/pedigree-analyzer/main.html" height="600" width="100%" scrolling="no"></iframe>

*[View Fullscreen](../../sims/pedigree-analyzer/main.html)*

<details markdown="1">
<summary>Interactive Pedigree Analyzer — Specification</summary>
**Type:** MicroSim (p5.js)<br/>
**sim-id:** pedigree-analyzer<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Learning objective:** Students will be able to *analyze* (Bloom's L4: Analyze) pedigree diagrams to determine the most likely mode of inheritance, and *evaluate* (Bloom's L5: Evaluate) whether observed patterns are consistent with autosomal dominant, autosomal recessive, or X-linked recessive inheritance.

**Instructional Rationale:** Presenting multiple pedigrees that students must classify builds the diagnostic reasoning skills tested on the college placement exam. The immediate feedback loop — guess the pattern, then check — reinforces the distinguishing clues for each inheritance mode.

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
</details>

### Solving a Pedigree: Worked Example

Consider a pedigree where two unaffected parents in generation I have one affected son and one unaffected daughter in generation II. The unaffected daughter marries an unaffected male, and they have one affected son in generation III.

**Step 1:** The trait skips generation II → likely recessive

**Step 2:** Both males and females can be affected → likely autosomal (not X-linked)

**Step 3:** Both parents in generation I must be carriers: Aa × Aa

**Step 4:** The unaffected daughter in generation II has a $\frac{2}{3}$ probability of being Aa (since she is unaffected, she is either AA or Aa, in a 1:2 ratio)

**Conclusion:** Autosomal recessive inheritance

!!! mascot-encourage "You've Got This!"
    <img src="../../img/mascot/encouraging.png" class="mascot-admonition-img" alt="Gregor encourages you">
    Pedigree analysis combines everything you have learned about dominance, recessiveness, and sex linkage into a single detective challenge. On the college placement exam, start by checking if the trait is dominant or recessive (does it skip generations?), then check if it's autosomal or X-linked (is it much more common in one sex?). With practice, you will be able to read pedigrees as fluently as you read Punnett squares.

---

## Key Takeaways

1. **Incomplete dominance** produces an intermediate phenotype in heterozygotes (1:2:1 phenotypic ratio). **Codominance** produces a phenotype where both alleles are fully expressed (e.g., AB blood type).

2. **Multiple alleles** exist at a single locus in a population (e.g., $I^A$, $I^B$, $i$ for ABO blood type), though each individual carries only two.

3. **Sex determination** in humans uses the XX/XY system; the SRY gene on the Y chromosome triggers male development.

4. **X-linked recessive** traits affect males disproportionately because males are hemizygous (only one X). Carrier mothers can pass the allele to affected sons.

5. **Polygenic inheritance** produces continuous variation from the additive effects of multiple genes (bell curve distribution).

6. **Epistasis** occurs when one gene masks or modifies the expression of another gene at a different locus, producing modified dihybrid ratios (e.g., 9:3:4).

7. **Pleiotropy** occurs when a single gene affects multiple phenotypic traits (e.g., sickle cell disease).

8. **Genetic linkage** — genes on the same chromosome tend to be inherited together, violating independent assortment.

9. **Recombination frequency** measures the rate of crossing over between linked genes: RF (%) = (recombinants / total) × 100. RF = 1% corresponds to 1 cM of map distance.

10. **Nondisjunction** — failure of chromosomes to separate during meiosis — produces aneuploid gametes, leading to conditions such as trisomy 21 (Down syndrome).

11. **Pedigree analysis** uses family inheritance patterns to deduce whether a trait is autosomal vs. X-linked and dominant vs. recessive.

---

??? question "college placement Practice: Test Your Understanding"
    **Question 1:** In a cross between a red snapdragon ($C^R C^R$) and a white snapdragon ($C^W C^W$), all F1 offspring are pink. If two F1 plants are crossed, what phenotypic ratio is expected in the F2 generation?

    **Answer:** 1 red ($C^R C^R$) : 2 pink ($C^R C^W$) : 1 white ($C^W C^W$). This 1:2:1 ratio is characteristic of incomplete dominance.

    **Question 2:** A woman who is a carrier for hemophilia ($X^H X^h$) marries an unaffected man ($X^H Y$). What proportion of their sons will have hemophilia? What proportion of their daughters will be carriers?

    **Answer:** Half ($\frac{1}{2}$) of their sons will have hemophilia ($X^h Y$). Half ($\frac{1}{2}$) of their daughters will be carriers ($X^H X^h$). No daughters will have hemophilia.

    **Question 3:** In Labrador retrievers, a cross of BbEe × BbEe yields 91 black, 30 chocolate, and 39 yellow puppies. Is this consistent with a 9:3:4 epistatic ratio? How would you test this statistically?

    **Answer:** Expected 9:3:4 ratio predicts 90 black : 30 chocolate : 40 yellow out of 160 total. The observed values (91:30:39) are very close. To test statistically, you would apply a **chi-square test** comparing observed to expected values. The chi-square value here would be very small, indicating no significant deviation from the 9:3:4 ratio.
