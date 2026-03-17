---
title: Speciation, Phylogenetics, and Macroevolution
description: The biological species concept, reproductive isolation, allopatric and sympatric speciation, adaptive radiation, convergent evolution, coevolution, cladistics, cladograms, and molecular clocks.
generated_by: claude skill chapter-content-generator
date: 2026-02-27 02:44:24
version: 0.05
---

# Speciation, Phylogenetics, and Macroevolution

!!! mascot-welcome "Gregor Welcomes You!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Gregor welcomes you">
    Welcome, investigators! In Chapter 16 you learned how allele frequencies change within populations. But when does a population stop being one species and become two? How do we reconstruct the branching history of life? This chapter explores the fascinating process of **speciation** — the birth of new species — and the tools biologists use to map evolutionary relationships across billions of years. Let's investigate!

## Summary

When populations become reproductively isolated, they diverge into separate species
— a process this chapter examines through the biological species concept, pre- and
postzygotic isolating mechanisms, and the contrasting geographic pathways of
allopatric versus sympatric speciation. Adaptive radiation and convergent evolution
illustrate how selection can rapidly diversify or independently produce similar
forms. The chapter then introduces phylogenetics and cladistics: how shared derived
characters and molecular clocks allow biologists to reconstruct evolutionary history
and build cladograms. Coevolution shows how interacting species can drive each
other's evolution, rounding out the major patterns and processes that operate above
the population level.

## Concepts Covered

This chapter covers the following 15 concepts from the learning graph:

**Speciation**

1. Biological Species Concept
2. Speciation Overview
3. Reproductive Isolation
4. Prezygotic Barriers
5. Postzygotic Barriers
6. Allopatric Speciation
7. Sympatric Speciation

**Evolutionary Patterns**

8. Adaptive Radiation
9. Convergent Evolution
10. Coevolution

**Phylogenetics**

11. Phylogenetics
12. Cladistics
13. Cladograms
14. Shared Derived Characters
15. Molecular Clocks

## Prerequisites

This chapter builds on concepts from:

- [Chapter 16: Population Genetics and Hardy-Weinberg Equilibrium](../16-population-genetics-and-hardy-weinberg/index.md)

---

## What Is a Species?

### Biological Species Concept

The **biological species concept** (Ernst Mayr, 1942) defines a species as a group of organisms that can **interbreed in nature and produce viable, fertile offspring** — and are reproductively isolated from other such groups.

Strengths:

- Clear, testable criterion (can they interbreed?)
- Widely applicable to sexually reproducing organisms

Limitations:

- Cannot be applied to asexual organisms (bacteria, many protists)
- Cannot be applied to fossils (we can't observe their mating behavior)
- Some closely related species can hybridize (e.g., wolves and coyotes)

Despite these limitations, the biological species concept remains the most widely used definition in college placement Biology.

## Speciation: The Birth of New Species

### Speciation Overview

**Speciation** is the process by which one species splits into two or more reproductively isolated species. The key requirement is the evolution of **reproductive isolation** — barriers that prevent gene flow between populations.

### Reproductive Isolation

**Reproductive isolating mechanisms** are biological features that prevent members of different species from interbreeding. They are divided into two categories based on timing:

### Prezygotic Barriers

**Prezygotic barriers** prevent the formation of a zygote (act before fertilization):

| Barrier | Mechanism | Example |
|---|---|---|
| Habitat isolation | Species live in different habitats in the same area | Ground squirrels on opposite sides of Grand Canyon |
| Temporal isolation | Species breed at different times (seasons, times of day) | Two frog species: one breeds in spring, another in summer |
| Behavioral isolation | Species have different courtship rituals or signals | Firefly species with different flash patterns |
| Mechanical isolation | Anatomical incompatibility prevents mating | Flower shapes that fit only specific pollinators |
| Gametic isolation | Sperm and egg are chemically incompatible | Sea urchin species with species-specific egg surface proteins |

### Postzygotic Barriers

**Postzygotic barriers** act after fertilization, reducing the viability or fertility of hybrids:

| Barrier | Mechanism | Example |
|---|---|---|
| Reduced hybrid viability | Hybrid embryo fails to develop properly | Sheep-goat hybrids rarely survive |
| Reduced hybrid fertility | Hybrid is viable but infertile | Mule (horse × donkey) is sterile |
| Hybrid breakdown | First-generation hybrid is fertile, but subsequent generations have reduced fitness | Some rice hybrids show declining vigor |

### Allopatric Speciation

**Allopatric speciation** ("other homeland") occurs when a geographic barrier physically separates a population into isolated groups. With gene flow cut off, each group evolves independently through natural selection, genetic drift, and mutation. Over time, reproductive isolation develops.

**Examples:**

- The Grand Canyon separating squirrel populations (Kaibab vs. Abert's squirrels)
- Island colonization (Darwin's finches on the Galápagos)
- Continental drift separating populations on different landmasses

Allopatric speciation is the most common mode of speciation.

### Sympatric Speciation

**Sympatric speciation** ("same homeland") occurs without geographic separation. Reproductive isolation evolves while populations are still in contact.

**Mechanisms:**

- **Polyploidy** (most common in plants) — errors during cell division produce organisms with extra chromosome sets (e.g., 4n). Polyploid individuals can breed with other polyploids but not with the original diploid population → instant reproductive isolation.
- **Habitat differentiation** — some individuals exploit a different niche within the same area
- **Sexual selection** — mate preference diverges within a population

#### Diagram: Speciation Pathways Comparison

<iframe src="../../sims/speciation-pathways/main.html" height="560" width="100%" scrolling="no"></iframe>

*[View Fullscreen](../../sims/speciation-pathways/main.html)*

<details markdown="1">
<summary>Speciation Pathways Comparison — Specification</summary>
**Type:** MicroSim (p5.js)<br/>
**sim-id:** speciation-pathways<br/>
**Library:** p5.js<br/>
**Status:** Specified

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
</details>

---

## Evolutionary Patterns

### Adaptive Radiation

**Adaptive radiation** occurs when a single ancestral species rapidly diversifies into many new species, each adapted to different ecological niches. This typically follows:

- Colonization of a new, relatively empty environment (e.g., islands)
- Mass extinction that opens niches for survivors

**Examples:**

- Darwin's finches — 14+ species from one ancestral finch on the Galápagos, each with a beak adapted to a different food source
- Hawaiian honeycreepers — spectacular beak diversity from a single colonizing species
- Mammalian radiation after the K-Pg extinction

### Convergent Evolution

**Convergent evolution** produces **analogous structures** — similar traits in unrelated species exposed to similar environmental pressures. The underlying genetics and developmental pathways are different; only the final phenotype is similar.

**Examples:**

- Streamlined body shape in dolphins (mammals), sharks (fish), and ichthyosaurs (reptiles)
- Camera-type eyes in vertebrates and cephalopods (evolved independently)
- Cactus-like succulents in American deserts (Cactaceae) and African deserts (Euphorbiaceae)

### Coevolution

**Coevolution** occurs when two or more species exert selective pressures on each other, driving reciprocal evolutionary change.

**Examples:**

- **Predator-prey arms races** — cheetah speed and gazelle speed escalate together
- **Pollinator-flower relationships** — flower shape, color, and scent evolve to match pollinator preferences; pollinator mouthparts evolve to access nectar
- **Parasite-host coevolution** — host immune defenses and parasite evasion strategies escalate reciprocally

!!! mascot-thinking "Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Gregor thinking">
    Adaptive radiation (one species → many) and convergent evolution (many species → similar traits) are opposite patterns. Radiation demonstrates how diverse niches can pull one lineage into many forms. Convergence demonstrates how similar niches can push unrelated lineages toward the same solution. Both illustrate the power of natural selection.

---

## Phylogenetics and Cladistics

### Phylogenetics

**Phylogenetics** is the study of evolutionary relationships among organisms. These relationships are represented as branching tree diagrams that show patterns of common ancestry.

### Cladistics

**Cladistics** is the method of classification based on common ancestry. Organisms are grouped into **clades** — groups that include an ancestor and all of its descendants.

### Shared Derived Characters

Cladistic analysis relies on identifying **shared derived characters** (synapomorphies) — traits that are:

- **Shared** by two or more taxa
- **Derived** (evolved more recently, not present in the distant ancestor)

Shared derived characters indicate that taxa share a more recent common ancestor. In contrast, **shared ancestral characters** (symplesiomorphies) — primitive traits shared by all members of a larger group — do NOT help distinguish close relationships.

**Example:** Among vertebrates:

- Four limbs = shared derived character uniting tetrapods (amphibians, reptiles, mammals)
- Vertebral column = shared ancestral character (all vertebrates have it, so it doesn't distinguish subgroups)

### Cladograms

A **cladogram** is a branching diagram that shows the hypothesized evolutionary relationships among a group of organisms based on shared derived characters.

How to read a cladogram:

- Each **node** (branch point) represents a common ancestor
- Each **branch** represents a lineage evolving over time
- **Sister taxa** are groups that share the most recent common ancestor
- The **outgroup** is the most distantly related taxon, used to root the tree
- Traits are mapped onto branches where they first evolved

#### Diagram: Interactive Cladogram Builder

<iframe src="../../sims/cladogram-builder/main.html" height="560" width="100%" scrolling="no"></iframe>

*[View Fullscreen](../../sims/cladogram-builder/main.html)*

<details markdown="1">
<summary>Interactive Cladogram Builder — Specification</summary>
**Type:** MicroSim (p5.js)<br/>
**sim-id:** cladogram-builder<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Learning objective:** Students will be able to *construct* (Bloom's L6: Create) a cladogram from a character matrix and *interpret* (Bloom's L2: Understand) evolutionary relationships from an existing cladogram.

**Instructional Rationale:** Building a cladogram from raw character data (rather than just reading a pre-made one) develops the reasoning skills tested on the college placement exam, where students must interpret or construct phylogenetic trees from data tables.

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
</details>

### Molecular Clocks

**Molecular clocks** use the rate of DNA or protein sequence change to estimate the time of divergence between two lineages. The method assumes that neutral mutations accumulate at a roughly constant rate over time.

**How it works:**

1. Compare homologous DNA sequences between two species
2. Count the number of nucleotide differences
3. Calibrate the mutation rate using fossil evidence with known dates
4. Estimate the time since the two species shared a common ancestor

**Limitations:**

- Mutation rates vary among genes, organisms, and over time
- Natural selection can accelerate or slow sequence change
- Calibration requires reliable fossil dates

Despite these limitations, molecular clocks are invaluable for estimating divergence times when fossils are scarce or absent.

!!! mascot-tip "Gregor's Tip"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Gregor's tip">
    On the college placement exam, cladogram questions are common. Remember: you cannot determine the age of a species by its position left or right on a cladogram — only the branching pattern (topology) matters. Two species are most closely related if they share the most recent common ancestor (the node closest to the tips). Rotating branches around a node does not change the relationships.

---

## Key Takeaways

1. The **biological species concept** defines a species by reproductive isolation — the ability to interbreed and produce viable, fertile offspring.

2. **Prezygotic barriers** (habitat, temporal, behavioral, mechanical, gametic) prevent fertilization; **postzygotic barriers** (hybrid inviability, infertility, breakdown) reduce hybrid success.

3. **Allopatric speciation** requires geographic separation; **sympatric speciation** occurs without it (often via polyploidy in plants).

4. **Adaptive radiation** diversifies one lineage into many species filling different niches. **Convergent evolution** produces similar traits in unrelated lineages under similar selection pressures.

5. **Coevolution** involves reciprocal evolutionary change between interacting species (predator-prey, pollinator-flower, parasite-host).

6. **Cladistics** classifies organisms by **shared derived characters** (synapomorphies). **Cladograms** display hypothesized evolutionary relationships.

7. **Molecular clocks** estimate divergence times based on the rate of neutral sequence change, calibrated with fossil evidence.

---

??? question "college placement Practice: Test Your Understanding"
    **Question 1:** Two species of frogs live in the same pond but breed at different times of year. What type of reproductive barrier is this? Is it prezygotic or postzygotic?

    **Answer:** This is **temporal isolation**, a **prezygotic** barrier. The two species never encounter each other during their breeding seasons, so mating (and therefore fertilization) cannot occur.

    **Question 2:** A character matrix shows that species A and B share 4 derived characters, while species A and C share only 2. Which pair is more closely related? How would this appear on a cladogram?

    **Answer:** Species A and B are more closely related — they share more derived characters, indicating a more recent common ancestor. On a cladogram, A and B would be sister taxa (sharing a node), with C branching off earlier.

    **Question 3:** Explain why polyploidy can lead to instant speciation in plants but is rare in animals.

    **Answer:** Polyploidy instantly creates reproductive isolation because a polyploid individual (e.g., 4n) cannot produce viable offspring with diploid (2n) members of the parent species — the resulting triploid (3n) offspring would have unbalanced chromosome segregation during meiosis. Plants tolerate polyploidy well because they can self-fertilize or reproduce vegetatively, establishing a viable polyploid population. Animals, with obligate sexual reproduction and more complex development, rarely survive polyploidy.
