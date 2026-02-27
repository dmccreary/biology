---
title: Population Genetics and Hardy-Weinberg Equilibrium
description: Allele frequency analysis, the Hardy-Weinberg equilibrium model, evolutionary forces (genetic drift, gene flow, mutation, selection), modes of natural selection, and macroevolution.
generated_by: claude skill chapter-content-generator
date: 2026-02-27 02:42:22
version: 0.05
---

# Population Genetics and Hardy-Weinberg Equilibrium

!!! mascot-welcome "Gregor Welcomes You!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Gregor welcomes you">
    Welcome, investigators! In Chapter 15 you learned that natural selection acts on heritable variation. But how do we *measure* evolutionary change? The answer lies in **population genetics** — tracking allele frequencies across generations. This chapter introduces the Hardy-Weinberg model as a mathematical null hypothesis for evolution, then examines every force that can push a population away from equilibrium. Let's investigate!

## Summary

Evolution operates on populations, not individuals. This chapter introduces
population genetics as the quantitative framework for tracking allele frequency
change over time. The Hardy-Weinberg equilibrium model establishes a mathematical
baseline — what a non-evolving population looks like — and the five assumptions
that must hold for equilibrium to persist. Deviations from those assumptions
define the evolutionary forces studied here: genetic drift (with founder effect
and bottleneck effect as specific scenarios), gene flow, mutation as a source of
new alleles, and the three modes of natural selection (stabilizing, directional,
and disruptive). Sexual selection and its role in shaping phenotypes is also
examined, and the chapter closes with macroevolution, mass extinctions, and the
Three Domains of Life.

## Concepts Covered

This chapter covers the following 16 concepts from the learning graph:

**Population Genetics**

1. Population Genetics
2. Allele Frequency
3. Hardy-Weinberg Equilibrium
4. Hardy-Weinberg Assumptions

**Evolutionary Forces**

5. Genetic Drift
6. Founder Effect
7. Bottleneck Effect
8. Gene Flow
9. Mutation and Evolution
10. Sexual Selection

**Modes of Natural Selection**

11. Stabilizing Selection
12. Directional Selection
13. Disruptive Selection

**Macroevolution**

14. Macroevolution
15. Mass Extinctions
16. Three Domains of Life

## Prerequisites

This chapter builds on concepts from:

- [Chapter 12: Non-Mendelian Inheritance and Chromosomal Genetics](../12-non-mendelian-and-chromosomal-genetics/index.md)
- [Chapter 15: Evidence for Evolution and Mechanisms of Change](../15-evidence-for-evolution/index.md)

---

## Population Genetics: The Quantitative Framework

**Population genetics** is the study of allele and genotype frequencies in populations and how they change over time. A **population** is a group of individuals of the same species living in the same area and interbreeding.

The **gene pool** is the total collection of alleles in a population at any given time. Evolution, in population genetics terms, is defined as **a change in allele frequencies** in a population over generations.

### Allele Frequency

The **allele frequency** (also called gene frequency) is the proportion of a particular allele among all alleles for that gene in a population.

For a gene with two alleles (A and a) in a diploid population of $N$ individuals:

$$p = \text{frequency of allele A} = \frac{2 \times (\text{number of AA}) + (\text{number of Aa})}{2N}$$

$$q = \text{frequency of allele a} = \frac{2 \times (\text{number of aa}) + (\text{number of Aa})}{2N}$$

Since there are only two alleles: $p + q = 1$

**Example:** In a population of 500 individuals: 320 AA, 160 Aa, 20 aa

$$p = \frac{2(320) + 160}{2(500)} = \frac{800}{1000} = 0.80$$

$$q = \frac{2(20) + 160}{2(500)} = \frac{200}{1000} = 0.20$$

Check: $0.80 + 0.20 = 1.0$ ✓

## Hardy-Weinberg Equilibrium

The **Hardy-Weinberg equilibrium** (HWE) is a mathematical model that describes a population in which allele and genotype frequencies remain constant from generation to generation — a population that is NOT evolving.

### The Hardy-Weinberg Equations

**Allele frequencies:** $p + q = 1$

**Genotype frequencies:** $p^2 + 2pq + q^2 = 1$

Where:

- $p^2$ = frequency of homozygous dominant (AA)
- $2pq$ = frequency of heterozygous (Aa)
- $q^2$ = frequency of homozygous recessive (aa)

### Hardy-Weinberg Assumptions

For a population to remain in HWE, **all five** of the following assumptions must hold:

1. **No mutation** — no new alleles are created
2. **Random mating** — individuals do not preferentially choose mates based on genotype
3. **No natural selection** — all genotypes have equal fitness
4. **Very large population size** — no random fluctuations in allele frequencies (no genetic drift)
5. **No gene flow** — no migration of individuals into or out of the population

If **any** assumption is violated, allele frequencies will change → the population is evolving.

| HWE Assumption | Violated by | Result |
|---|---|---|
| No mutation | New alleles arising | Introduces new alleles (slow effect) |
| Random mating | Sexual selection, assortative mating | Changes genotype frequencies |
| No selection | Differential fitness | Adaptive evolution |
| Large population | Small population size | Genetic drift |
| No gene flow | Immigration/emigration | Allele frequency shifts |

!!! mascot-thinking "Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Gregor thinking">
    Hardy-Weinberg is not a description of real populations — it is a **null hypothesis**. Just as a statistician assumes no difference until proven otherwise, Hardy-Weinberg assumes no evolution until the data show otherwise. By comparing observed genotype frequencies to HWE expectations, we can detect which evolutionary forces are acting on a population.

#### Diagram: Hardy-Weinberg Equilibrium Calculator

<iframe src="../../sims/hardy-weinberg-calculator/main.html" height="580" width="100%" scrolling="no"></iframe>

*[View Fullscreen](../../sims/hardy-weinberg-calculator/main.html)*

<details markdown="1">
<summary>Hardy-Weinberg Equilibrium Calculator — Specification</summary>
**Type:** MicroSim (p5.js)<br/>
**sim-id:** hardy-weinberg-calculator<br/>
**Library:** p5.js<br/>
**Status:** Specified

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
</details>

### Solving Hardy-Weinberg Problems: Worked Example

**Problem:** In a population, 16% of individuals show the recessive phenotype (white flowers). Assuming HWE, calculate the frequency of each allele and each genotype.

**Step 1:** The recessive phenotype frequency = $q^2 = 0.16$

**Step 2:** $q = \sqrt{0.16} = 0.40$

**Step 3:** $p = 1 - q = 1 - 0.40 = 0.60$

**Step 4:** Genotype frequencies:

- $p^2 = (0.60)^2 = 0.36$ (36% AA)
- $2pq = 2(0.60)(0.40) = 0.48$ (48% Aa — carriers)
- $q^2 = 0.16$ (16% aa)

Check: $0.36 + 0.48 + 0.16 = 1.00$ ✓

---

## Evolutionary Forces

### Genetic Drift

**Genetic drift** is the random change in allele frequencies due to chance events in small populations. Unlike natural selection, genetic drift is **non-adaptive** — alleles may increase or decrease in frequency regardless of their effect on fitness.

Key features:

- Effect is **inversely proportional to population size** — smaller populations experience stronger drift
- Drift can cause alleles to reach **fixation** (frequency = 1.0) or **loss** (frequency = 0)
- Reduces genetic variation within a population
- Can override natural selection in very small populations

### Founder Effect

The **founder effect** occurs when a small group of individuals colonizes a new area, carrying only a subset of the original population's genetic variation. The new population's allele frequencies may differ dramatically from the source population.

**Example:** The Amish community in Pennsylvania was founded by a small number of German immigrants. The allele for Ellis-van Creveld syndrome (short-limbed dwarfism) is unusually common in this community because, by chance, one of the founders carried it.

### Bottleneck Effect

The **bottleneck effect** occurs when a population is drastically reduced in size by a catastrophic event (disease, natural disaster, hunting), and the surviving population has allele frequencies that differ from the original population by chance.

**Example:** Northern elephant seals were hunted to fewer than 20 individuals in the 1890s. Although the population has recovered to over 100,000, genetic diversity remains extremely low.

#### Diagram: Genetic Drift Simulator

<iframe src="../../sims/genetic-drift/main.html" height="560" width="100%" scrolling="no"></iframe>

*[View Fullscreen](../../sims/genetic-drift/main.html)*

<details markdown="1">
<summary>Genetic Drift Simulator — Specification</summary>
**Type:** MicroSim (p5.js)<br/>
**sim-id:** genetic-drift<br/>
**Library:** p5.js<br/>
**Status:** Specified

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
</details>

### Gene Flow

**Gene flow** (migration) is the transfer of alleles between populations when individuals migrate and reproduce in a new population.

- Gene flow **homogenizes** allele frequencies between populations — makes them more similar
- It counteracts the divergence caused by natural selection or drift
- Gene flow can introduce new alleles to a population

### Mutation and Evolution

**Mutation** is the ultimate source of all new alleles. Without mutation, there would be no genetic variation for selection or drift to act upon.

- Mutation alone changes allele frequencies very slowly (mutation rates are typically $10^{-5}$ to $10^{-9}$ per gene per generation)
- Mutation provides the raw material; other forces (selection, drift, gene flow) determine the fate of new alleles

### Sexual Selection

**Sexual selection** is a form of natural selection in which individuals with certain traits have a mating advantage. Darwin identified two mechanisms:

- **Intrasexual selection** — competition within one sex (usually males) for access to mates (e.g., antler combat in deer)
- **Intersexual selection** (mate choice) — one sex (usually females) chooses mates based on specific traits (e.g., peacock tail displays)

Sexual selection can produce traits that reduce survival but increase mating success (e.g., the peacock's elaborate tail makes the bird more visible to predators but more attractive to peahens).

---

## Modes of Natural Selection

Natural selection can shift the distribution of phenotypes in a population in three different ways:

| Mode | Effect on phenotype distribution | Favored individuals | Example |
|---|---|---|---|
| Stabilizing | Narrows distribution (reduces variation) | Intermediate phenotypes | Human birth weight |
| Directional | Shifts distribution toward one extreme | One extreme phenotype | Antibiotic resistance |
| Disruptive | Widens distribution (increases variation) | Both extreme phenotypes | Beak size in finches |

### Stabilizing Selection

**Stabilizing selection** favors intermediate phenotypes and selects against extreme variants. This is the most common form of selection and acts to maintain the status quo.

**Example:** Human birth weight — babies of intermediate weight have the highest survival rates. Very low or very high birth weights are associated with increased infant mortality.

### Directional Selection

**Directional selection** favors one extreme phenotype, shifting the population mean in that direction over time.

**Example:** Antibiotic resistance in bacteria — when exposed to an antibiotic, bacteria with resistance alleles survive and reproduce, shifting the population toward resistance.

### Disruptive Selection

**Disruptive selection** favors both extremes at the expense of intermediate phenotypes. This can lead to a bimodal distribution and may contribute to speciation.

**Example:** African seed-cracker finches — birds with very large beaks can crack hard seeds, birds with very small beaks efficiently eat soft seeds, but intermediate beaks are poor at both.

#### Diagram: Selection Modes Visualizer

<iframe src="../../sims/selection-modes/main.html" height="520" width="100%" scrolling="no"></iframe>

*[View Fullscreen](../../sims/selection-modes/main.html)*

<details markdown="1">
<summary>Selection Modes Visualizer — Specification</summary>
**Type:** MicroSim (Chart.js)<br/>
**sim-id:** selection-modes<br/>
**Library:** Chart.js<br/>
**Status:** Specified

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
</details>

!!! mascot-warning "Common Mistake"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Gregor warns you">
    Students often confuse genetic drift with natural selection. The key distinction: **natural selection is non-random** (certain traits are systematically favored), while **genetic drift is random** (allele frequency changes are due to chance). Drift is most powerful in small populations; selection can operate in any size population. On the AP exam, if a question describes a random catastrophe reducing a population, think drift (bottleneck). If it describes certain individuals surviving better, think selection.

---

## Macroevolution

**Macroevolution** refers to large-scale evolutionary patterns and events above the species level — the origin of new groups, major adaptive radiations, and mass extinctions.

### Mass Extinctions

The fossil record documents at least five **mass extinction events** in which a large percentage of species disappeared in a geologically short time:

| Event | Time (Mya) | Species lost | Probable cause |
|---|---|---|---|
| End-Ordovician | ~444 | ~85% | Glaciation, sea level drop |
| Late Devonian | ~372 | ~75% | Ocean anoxia, volcanism |
| End-Permian ("Great Dying") | ~252 | ~96% | Massive volcanism (Siberian Traps) |
| End-Triassic | ~201 | ~80% | Volcanism, climate change |
| End-Cretaceous (K-Pg) | ~66 | ~76% | Asteroid impact + volcanism |

Mass extinctions are followed by **adaptive radiations** — surviving lineages diversify rapidly to fill vacated ecological niches. The extinction of non-avian dinosaurs at the K-Pg boundary opened niches that mammals then radiated to fill.

### Three Domains of Life

Modern phylogenetics, based on molecular evidence (especially ribosomal RNA sequences), organizes all life into three **domains**:

- **Bacteria** — prokaryotes; vast metabolic diversity; most numerous organisms on Earth
- **Archaea** — prokaryotes; many extremophiles; molecular machinery more similar to eukaryotes than to bacteria
- **Eukarya** — eukaryotes; includes protists, fungi, plants, and animals

The three-domain system (proposed by Carl Woese in 1990) replaced the older five-kingdom classification and reflects the deep evolutionary split between Bacteria and Archaea — two groups that are as different from each other at the molecular level as either is from Eukarya.

---

## Key Takeaways

1. **Population genetics** defines evolution as a change in allele frequencies within a population over time.

2. The **Hardy-Weinberg model** ($p^2 + 2pq + q^2 = 1$) describes a non-evolving population. Its five assumptions (no mutation, random mating, no selection, large population, no gene flow) define the forces of evolution when violated.

3. **Genetic drift** is random allele frequency change, strongest in small populations. The **founder effect** and **bottleneck effect** are special cases.

4. **Gene flow** transfers alleles between populations, homogenizing their frequencies.

5. **Mutation** is the ultimate source of new alleles but changes frequencies slowly on its own.

6. **Sexual selection** — both intrasexual competition and intersexual mate choice — can produce elaborate traits that reduce survival but increase mating success.

7. **Stabilizing selection** favors intermediates (narrows variation); **directional selection** shifts the mean toward one extreme; **disruptive selection** favors both extremes (may lead to speciation).

8. **Mass extinctions** eliminate large percentages of species, followed by **adaptive radiations** that refill ecological niches.

9. The **Three Domains of Life** (Bacteria, Archaea, Eukarya) reflect deep molecular divergence, with Archaea more closely related to Eukarya than to Bacteria.

---

??? question "AP Practice: Test Your Understanding"
    **Question 1:** In a population of 1,000 individuals, 40 show the recessive phenotype. Assuming HWE, calculate $p$, $q$, and the number of heterozygous carriers.

    **Answer:** $q^2 = 40/1000 = 0.04$. $q = \sqrt{0.04} = 0.20$. $p = 1 - 0.20 = 0.80$. Heterozygote frequency = $2pq = 2(0.80)(0.20) = 0.32$. Number of carriers = $0.32 \times 1000 = 320$ individuals.

    **Question 2:** A volcanic eruption kills 95% of a large lizard population. The survivors happen to have a higher frequency of the green-scale allele than the original population. Is this natural selection or genetic drift? Explain.

    **Answer:** This is **genetic drift** (specifically, a bottleneck effect). The survivors were not selected for green scales — they survived by chance (location relative to the eruption, luck). The change in allele frequency is random, not driven by differential fitness related to the green-scale trait.

    **Question 3:** Explain why disruptive selection might lead to speciation over many generations.

    **Answer:** Disruptive selection favors both extreme phenotypes and selects against intermediates. Over time, this can produce a bimodal distribution — two distinct phenotypic groups within the population. If these groups begin to mate preferentially with similar individuals (assortative mating), gene flow between the groups decreases. Eventually, reproductive isolation may develop, splitting the population into two separate species (sympatric speciation).
