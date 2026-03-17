---
title: Population Ecology and Life History
description: Levels of ecological organization, population density and dispersion, exponential and logistic growth models, carrying capacity, limiting factors, survivorship curves, and r/K selection strategies.
generated_by: claude skill chapter-content-generator
date: 2026-02-27 02:46:11
version: 0.05
---

# Population Ecology and Life History

!!! mascot-welcome "Gregor Welcomes You!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Gregor welcomes you">
    Welcome, investigators! We now shift from the molecular and genetic scale to the grand theater of ecology — how organisms interact with each other and their environment. This chapter asks deceptively simple questions: How fast can a population grow? What stops it? Why do some organisms have thousands of offspring while others have just one or two? The mathematical models you learn here will let you predict population dynamics with quantitative precision — a skill the college placement exam tests directly. Let's investigate!

## Summary

Ecology begins with populations — groups of individuals of one species sharing a
habitat. This chapter introduces the conceptual hierarchy from individual to
biosphere, the abiotic and biotic factors that shape organisms, and the quantitative
tools used to describe populations: density, dispersion patterns, and especially
growth models. Exponential growth characterizes populations with unlimited resources;
logistic growth introduces the concept of carrying capacity as a population-limiting
ceiling. The chapter examines density-dependent and density-independent limiting
factors, survivorship curves as windows into life table data, and life history
strategies — concluding with the r-selection/K-selection continuum that predicts
whether organisms invest in many offspring (low parental care) or few (high parental
care) under different ecological conditions.

## Concepts Covered

This chapter covers the following 15 concepts from the learning graph:

**Ecological Organization**

1. Ecology Overview
2. Levels of Ecological Organization
3. Abiotic and Biotic Factors

**Population Dynamics**

4. Population Ecology
5. Population Density
6. Dispersion Patterns
7. Exponential Population Growth
8. Logistic Population Growth
9. Carrying Capacity
10. Limiting Factors
11. Density-Dependent Regulation
12. Density-Independent Factors

**Life History**

13. Survivorship Curves
14. Life History Strategies
15. r-Selection and K-Selection

## Prerequisites

This chapter builds on concepts from:

- [Chapter 15: Evidence for Evolution and Mechanisms of Change](../15-evidence-for-evolution/index.md)
- [Chapter 16: Population Genetics and Hardy-Weinberg Equilibrium](../16-population-genetics-and-hardy-weinberg/index.md)

---

## Ecology Overview

**Ecology** is the scientific study of the interactions between organisms and their environment. It operates at multiple scales, from individual behavior to global patterns.

### Levels of Ecological Organization

Ecology is organized in a nested hierarchy:

| Level | Definition | Example |
|---|---|---|
| **Organism** | An individual living thing | One deer |
| **Population** | All individuals of one species in an area | All deer in a forest |
| **Community** | All populations of different species in an area | Deer, wolves, trees, fungi in a forest |
| **Ecosystem** | Community + abiotic environment | Forest community + soil, water, climate |
| **Biome** | Large geographic region with characteristic climate and organisms | Temperate deciduous forest |
| **Biosphere** | All ecosystems on Earth | The entire living planet |

### Abiotic and Biotic Factors

Every organism is influenced by two categories of environmental factors:

- **Abiotic factors** — non-living physical and chemical conditions: temperature, precipitation, sunlight, soil pH, salinity, wind, dissolved oxygen
- **Biotic factors** — living components: predators, competitors, prey, parasites, mutualists, pathogens

The interplay between abiotic and biotic factors determines where organisms can live and how abundant they are.

---

## Population Ecology

**Population ecology** studies the size, density, distribution, and growth dynamics of populations over time and space.

### Population Density

**Population density** is the number of individuals per unit area (or volume).

$$\text{Population density} = \frac{N}{\text{Area}}$$

Density can be measured through:

- **Direct counts** — counting every individual (practical for large, visible organisms)
- **Mark-recapture** — capture, mark, release, recapture, and estimate using the Lincoln-Petersen formula:

$$N \approx \frac{n_1 \times n_2}{m_2}$$

where $n_1$ = number marked in first capture, $n_2$ = total caught in second capture, $m_2$ = marked individuals recaptured.

### Dispersion Patterns

The spatial arrangement of individuals within a population follows one of three patterns:

| Pattern | Description | Cause | Example |
|---|---|---|---|
| **Clumped** | Individuals grouped together | Resources patchy; social behavior | Herds of elephants near water |
| **Uniform** | Individuals evenly spaced | Territorial behavior; competition | Creosote bushes in a desert |
| **Random** | Individuals scattered unpredictably | No strong attraction or repulsion | Dandelions in a meadow |

Clumped dispersion is the most common pattern in nature.

---

## Population Growth Models

### Exponential Population Growth

When resources are unlimited, a population grows at its maximum per capita rate — the **intrinsic rate of increase** ($r_{max}$). This produces **exponential (J-shaped) growth**:

$$\frac{dN}{dt} = r_{max} N$$

Where:

- $N$ = population size
- $t$ = time
- $r_{max}$ = maximum per capita growth rate (births minus deaths)

The population doubles at a constant interval. Exponential growth cannot persist indefinitely — eventually resources become limiting.

### Carrying Capacity

The **carrying capacity** ($K$) is the maximum population size that the environment can sustain indefinitely given the available resources (food, water, shelter, space).

$K$ is not fixed — it can change with environmental conditions (drought, habitat destruction, resource supplementation).

### Logistic Population Growth

When resources are limited, population growth slows as $N$ approaches $K$. This is modeled by the **logistic growth equation**:

$$\frac{dN}{dt} = r_{max} N \left(\frac{K - N}{K}\right)$$

The term $\frac{K-N}{K}$ is the **environmental resistance** — it equals 1 when $N$ is small (near-exponential growth), 0.5 when $N = K/2$ (maximum growth rate), and 0 when $N = K$ (zero growth). This produces an **S-shaped (sigmoidal) growth curve**.

| Population size ($N$) | $(K-N)/K$ | Growth rate | Phase |
|---|---|---|---|
| Small ($N \ll K$) | ≈ 1.0 | Near-maximum | Lag / exponential |
| $N = K/2$ | 0.5 | Maximum absolute growth | Inflection point |
| $N$ near $K$ | ≈ 0 | Near zero | Leveling off |
| $N = K$ | 0 | Zero | At carrying capacity |

#### Diagram: Population Growth Model Explorer

<iframe src="../../sims/population-growth/main.html" height="560" width="100%" scrolling="no"></iframe>

*[View Fullscreen](../../sims/population-growth/main.html)*

<details markdown="1">
<summary>Population Growth Model Explorer — Specification</summary>
**Type:** MicroSim (Chart.js)<br/>
**sim-id:** population-growth<br/>
**Library:** Chart.js<br/>
**Status:** Specified

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
</details>

!!! mascot-tip "Gregor's Tip"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Gregor's tip">
    The college placement exam will give you the logistic growth equation and ask you to interpret it — not derive it. Know three things: (1) growth rate is highest at $N = K/2$, (2) the $(K-N)/K$ term is what slows growth as the population approaches $K$, and (3) when $N > K$, the growth rate becomes negative (population declines). Be prepared to read and interpret graphs.

---

## Limiting Factors

### Density-Dependent Regulation

**Density-dependent factors** have effects that intensify as population density increases:

- **Competition** for food, water, space — more individuals = more competition per individual
- **Predation** — predators are attracted to areas of high prey density
- **Disease** — pathogens spread faster in crowded populations
- **Parasitism** — parasites find hosts more easily at high density
- **Toxic waste accumulation** — metabolic byproducts build up in dense populations

Density-dependent factors are the main mechanisms that regulate populations around $K$.

### Density-Independent Factors

**Density-independent factors** affect the same proportion of individuals regardless of population size:

- Natural disasters (floods, fires, hurricanes, volcanic eruptions)
- Extreme weather (drought, frost, heat waves)
- Human activities (habitat destruction, pollution)

Density-independent factors can cause dramatic population crashes but do not regulate populations around a stable equilibrium.

---

## Life History Strategies

### Survivorship Curves

A **survivorship curve** plots the proportion of a cohort (group born at the same time) that survives to each age. Three idealized types:

| Type | Pattern | Example | Key feature |
|---|---|---|---|
| **Type I** | Low mortality until old age, then rapid decline | Humans, elephants, whales | High parental care; most die old |
| **Type II** | Constant mortality rate across all ages | Some birds, rodents, some lizards | Equal chance of dying at any age |
| **Type III** | Very high mortality in early life, few survivors reach old age | Oysters, sea turtles, oak trees | Many offspring, little parental care |

### Life History Strategies

A **life history strategy** is the set of traits that define how an organism allocates energy between growth, reproduction, and survival. Key trade-offs:

- **Number vs. size of offspring** — many small offspring OR few large offspring
- **Reproduction vs. survival** — invest in current reproduction OR invest in future reproduction
- **Age at first reproduction** — reproduce early (less body growth) OR reproduce late (more accumulated resources)

### r-Selection and K-Selection

These terms describe a continuum of life history strategies:

| Feature | r-selected | K-selected |
|---|---|---|
| Population size relative to $K$ | Often below $K$ | Near $K$ |
| Offspring number | Many | Few |
| Offspring size | Small | Large |
| Parental care | Little or none | Extensive |
| Development time | Short | Long |
| Reproductive maturity | Early | Late |
| Lifespan | Short | Long |
| Survivorship curve | Type III | Type I |
| Typical environment | Unpredictable, disturbed | Stable, competitive |
| Example organisms | Bacteria, insects, weeds | Elephants, whales, primates |

**r-selected species** maximize $r$ (intrinsic growth rate) — they produce many offspring quickly, sacrificing individual survival for sheer numbers. **K-selected species** invest in fewer offspring with higher survival, competing effectively in stable environments near $K$.

!!! mascot-warning "Common Mistake"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Gregor warns you">
    The r/K framework is a continuum, not a strict dichotomy. Most organisms fall somewhere in between. Also, don't confuse $r$ (the per capita growth rate from the growth equations) with "r-selected" (the life history strategy). An r-selected species *maximizes* r, but all species have some value of r. The college placement exam expects nuanced understanding, not oversimplification.

#### Diagram: Survivorship Curves Comparator

<iframe src="../../sims/survivorship-curves/main.html" height="520" width="100%" scrolling="no"></iframe>

*[View Fullscreen](../../sims/survivorship-curves/main.html)*

<details markdown="1">
<summary>Survivorship Curves Comparator — Specification</summary>
**Type:** MicroSim (Chart.js)<br/>
**sim-id:** survivorship-curves<br/>
**Library:** Chart.js<br/>
**Status:** Specified

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
</details>

---

## Key Takeaways

1. Ecology is organized hierarchically: organism → population → community → ecosystem → biome → biosphere.

2. **Abiotic factors** (temperature, water, light) and **biotic factors** (predators, competitors) shape where and how organisms live.

3. **Population density** = individuals per area. **Dispersion** patterns are clumped (most common), uniform, or random.

4. **Exponential growth** ($dN/dt = r_{max}N$) produces J-shaped curves with unlimited resources. **Logistic growth** ($dN/dt = r_{max}N[(K-N)/K]$) produces S-shaped curves that level off at carrying capacity ($K$).

5. Maximum absolute growth rate occurs at $N = K/2$ (inflection point of the logistic curve).

6. **Density-dependent factors** (competition, predation, disease) intensify with population density and regulate populations around $K$. **Density-independent factors** (natural disasters, weather) affect populations regardless of density.

7. **Survivorship curves** — Type I (low early mortality), Type II (constant mortality), Type III (high early mortality) — characterize different life history strategies.

8. **r-selected species** (many small offspring, little parental care) thrive in unpredictable environments. **K-selected species** (few large offspring, extensive parental care) thrive in stable, competitive environments.

---

??? question "college placement Practice: Test Your Understanding"
    **Question 1:** A population of 500 rabbits has $r_{max} = 0.1$ per month and $K = 2000$. Calculate the population growth rate ($dN/dt$).

    **Answer:** $dN/dt = r_{max} \times N \times (K-N)/K = 0.1 \times 500 \times (2000-500)/2000 = 0.1 \times 500 \times 0.75 = 37.5$ rabbits per month.

    **Question 2:** A population initially grows exponentially, then levels off. After several years, a drought reduces food availability. Predict what happens to the carrying capacity and population size.

    **Answer:** The drought **reduces K** (fewer resources can support fewer individuals). The population, which was near the original K, is now above the new K. Since $N > K$, the growth rate becomes negative, and the population **declines** until it reaches the new, lower carrying capacity.

    **Question 3:** Sea turtles lay hundreds of eggs per nesting season, but fewer than 1% of hatchlings survive to adulthood. Classify their survivorship curve type and life history strategy.

    **Answer:** **Type III** survivorship curve (high early mortality, few survivors to old age). **r-selected** strategy — many small offspring with minimal parental care. This strategy is adaptive in unpredictable marine environments where most hatchlings are lost to predation.
