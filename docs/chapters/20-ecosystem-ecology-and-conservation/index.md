---
title: Ecosystem Ecology, Biogeochemical Cycles, and Conservation
description: Energy flow through trophic levels, the ten percent rule, biogeochemical cycles (carbon, nitrogen, phosphorus, water), biomes, biodiversity, and conservation biology strategies.
generated_by: claude skill chapter-content-generator
date: 2026-02-27 02:49:53
version: 0.05
---

# Ecosystem Ecology, Biogeochemical Cycles, and Conservation

!!! mascot-welcome "Gregor Welcomes You!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Gregor welcomes you">
    Welcome to the final chapter, investigators! Everything you have learned — from molecules to cells to organisms to populations to communities — converges here in **ecosystem ecology**. How does energy flow through an entire ecosystem? How is matter recycled through biogeochemical cycles? And most urgently: what is happening to Earth's biodiversity, and what can we do about it? This chapter brings your college placement Biology journey full circle. Let's investigate one last time!

## Summary

This capstone chapter examines ecosystems as systems of energy flow and matter
cycling. Starting with trophic levels and the ten percent energy rule, it explains
why energy transfer between levels is so inefficient and what this means for
ecosystem productivity. The biogeochemical cycles — carbon, nitrogen, phosphorus,
and water — are analyzed as the pathways through which matter is perpetually
recycled between living organisms and the abiotic environment, with nitrogen
fixation highlighted as a biologically essential transformation. The chapter surveys
major terrestrial and aquatic biomes and their defining conditions. It closes with
the biodiversity crisis — habitat fragmentation, invasive species, and climate change
as primary drivers of extinction — and evaluates conservation biology strategies
for measuring and protecting Earth's biological heritage.

## Concepts Covered

This chapter covers the following 25 concepts from the learning graph:

**Energy Flow**

1. Ecosystem Ecology
2. Trophic Levels
3. Food Chains and Food Webs
4. Energy Flow in Ecosystems
5. Ten Percent Energy Rule
6. Primary Productivity
7. Net Primary Productivity

**Biogeochemical Cycles**

8. Biogeochemical Cycles
9. Carbon Cycle
10. Nitrogen Cycle
11. Phosphorus Cycle
12. Water Cycle
13. Nitrogen Fixation

**Biomes**

14. Biomes Overview
15. Terrestrial Biomes
16. Aquatic Biomes

**Biodiversity and Conservation**

17. Biodiversity
18. Species Richness and Evenness
19. Habitat Fragmentation
20. Invasive Species
21. Climate Change and Ecology
22. Conservation Biology
23. Ecological Footprint

## Prerequisites

This chapter builds on concepts from:

- [Chapter 18: Population Ecology and Life History](../18-population-ecology-and-life-history/index.md)
- [Chapter 19: Community Ecology and Species Interactions](../19-community-ecology-and-species-interactions/index.md)

---

## Part 1: Energy Flow in Ecosystems

### Ecosystem Ecology

An **ecosystem** includes all the living organisms (the community) and the abiotic environment (soil, water, atmosphere, climate) in a defined area, functioning as an integrated system. Ecosystem ecology focuses on two fundamental processes:

1. **Energy flow** — energy enters ecosystems as sunlight, is converted to chemical energy by producers, and flows through consumers, with significant losses at each transfer
2. **Chemical cycling** — matter is recycled through biogeochemical cycles; unlike energy, matter is not "used up"

### Trophic Levels

A **trophic level** is a feeding position in a food chain or food web.

| Trophic level | Organisms | Energy source | Example |
|---|---|---|---|
| **Primary producers** (Level 1) | Autotrophs (plants, algae, cyanobacteria) | Sunlight (photosynthesis) or chemicals (chemosynthesis) | Grasses, phytoplankton |
| **Primary consumers** (Level 2) | Herbivores | Eat producers | Rabbits, zooplankton |
| **Secondary consumers** (Level 3) | Carnivores that eat herbivores | Eat primary consumers | Snakes, small fish |
| **Tertiary consumers** (Level 4) | Top carnivores | Eat secondary consumers | Hawks, sharks |
| **Decomposers** | Bacteria, fungi | Dead organic matter at all levels | Mushrooms, soil bacteria |

### Food Chains and Food Webs

A **food chain** is a linear sequence of who eats whom:

Grass → Rabbit → Snake → Hawk

A **food web** is a more realistic representation — a network of interconnected food chains showing that most organisms eat and are eaten by multiple species. Food webs reveal the complexity of energy pathways and help predict the consequences of removing a species.

### Energy Flow in Ecosystems

Energy flows **unidirectionally** through ecosystems — it enters as sunlight (or chemical energy), passes through trophic levels, and exits as heat at each step. This is a direct consequence of the **second law of thermodynamics** (Chapter 6): every energy transformation increases entropy.

### Ten Percent Energy Rule

On average, only about **10%** of the energy at one trophic level is transferred to the next level. The other ~90% is:

- Lost as **metabolic heat** through cellular respiration (~60–80%)
- Used for **life processes** (movement, growth, reproduction)
- Contained in **indigestible material** (not consumed or not absorbed)

This means:

- If producers capture 10,000 kcal of energy from sunlight
- Primary consumers receive ~1,000 kcal
- Secondary consumers receive ~100 kcal
- Tertiary consumers receive ~10 kcal

!!! mascot-thinking "Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Gregor thinking">
    The 10% rule explains why food chains rarely exceed 4–5 trophic levels — there simply is not enough energy left to support another level. It also explains why pound-for-pound, a vegetarian diet requires far less agricultural land than a meat-based diet. This connects to the ecological footprint concept at the end of this chapter.

#### Diagram: Energy Pyramid Explorer

<iframe src="../../sims/energy-pyramid/main.html" height="560" width="100%" scrolling="no"></iframe>

*[View Fullscreen](../../sims/energy-pyramid/main.html)*

<details markdown="1">
<summary>Energy Pyramid Explorer — Specification</summary>
**Type:** MicroSim (p5.js)<br/>
**sim-id:** energy-pyramid<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Learning objective:** Students will be able to *calculate* (Bloom's L3: Apply) the energy available at each trophic level using the 10% rule and *explain* (Bloom's L2: Understand) why food chains are limited in length.

**Instructional Rationale:** An interactive pyramid with adjustable base energy and transfer efficiency lets students see the exponential energy loss firsthand and discover why a fifth trophic level receives almost nothing.

**Canvas:** 780 × 480 px, responsive.

**Layout:**

- Center: Stacked pyramid with 4 levels, each proportional to its energy content
  - Each level labeled with trophic level name and energy value
  - Width of each bar proportional to energy available
- Right panel: Controls
  - Slider: Producer energy input (1,000 to 100,000 kcal)
  - Slider: Transfer efficiency (5% to 20%, default 10%)
  - "Add Level" button (up to 6 levels)
- Bottom: Energy loss arrows showing heat dissipation at each level

**Interaction:**
- Adjust sliders → pyramid redraws immediately
- Hover over any level: tooltip with energy breakdown (transferred, lost to heat, indigestible)
- "Show Numbers" toggle: display exact kcal values on each level
- "Biomass Pyramid" toggle: switch from energy to biomass view
- "Numbers Pyramid" toggle: switch to organism count (showing inverted pyramids possible in aquatic systems)

**Colors:** Producers: green gradient. Primary consumers: light orange. Secondary: medium orange. Tertiary: red. Heat loss arrows: warm gray.

**Responsive design:** Pyramid and controls scale with container width.
</details>

### Primary Productivity and Net Primary Productivity

**Primary productivity** is the rate at which energy is converted to organic compounds by autotrophs.

- **Gross primary productivity (GPP)** — total energy fixed by photosynthesis per unit time
- **Net primary productivity (NPP)** — energy that remains after producers use some for their own respiration:

$$NPP = GPP - R_{\text{autotroph}}$$

NPP represents the energy available to consumers and decomposers — the foundation of the entire food web.

**Global NPP patterns:**

- Highest: tropical rainforests, coral reefs, estuaries
- Moderate: temperate forests, grasslands
- Lowest: deserts, open ocean (per unit area), tundra

---

## Part 2: Biogeochemical Cycles

### Biogeochemical Cycles Overview

**Biogeochemical cycles** are the pathways through which chemical elements move between living organisms and the abiotic environment. Unlike energy (which flows one way and exits as heat), **matter is recycled** — the same atoms cycle endlessly between organic and inorganic forms.

### Carbon Cycle

The **carbon cycle** moves carbon through the atmosphere, living organisms, oceans, and lithosphere.

**Key processes:**

- **Photosynthesis** — removes $\ce{CO2}$ from atmosphere, converts to organic carbon ($\ce{C6H12O6}$)
- **Cellular respiration** — releases $\ce{CO2}$ back to atmosphere
- **Decomposition** — breaks down dead organic matter, releasing $\ce{CO2}$
- **Fossil fuel combustion** — burns ancient carbon deposits, releasing $\ce{CO2}$ (human-accelerated)
- **Ocean absorption** — oceans dissolve $\ce{CO2}$, forming $\ce{H2CO3}$ (carbonic acid)

Human activities (burning fossil fuels, deforestation) have increased atmospheric $\ce{CO2}$ from ~280 ppm (pre-industrial) to over 420 ppm today — driving climate change.

### Nitrogen Cycle

The **nitrogen cycle** converts atmospheric nitrogen ($\ce{N2}$) into biologically usable forms.

**Key processes:**

- **Nitrogen fixation** — conversion of $\ce{N2}$ to $\ce{NH3}$ (ammonia) by nitrogen-fixing bacteria (*Rhizobium* in legume root nodules, free-living cyanobacteria)
- **Nitrification** — conversion of $\ce{NH3}$ → $\ce{NO2^-}$ → $\ce{NO3^-}$ (nitrate) by nitrifying bacteria
- **Assimilation** — plants absorb $\ce{NO3^-}$ or $\ce{NH4^+}$ and incorporate nitrogen into amino acids and nucleotides
- **Ammonification** — decomposers break down organic nitrogen back to $\ce{NH3}$
- **Denitrification** — bacteria convert $\ce{NO3^-}$ back to $\ce{N2}$, returning it to the atmosphere

### Nitrogen Fixation

**Nitrogen fixation** is the critical entry point of the nitrogen cycle — without it, the vast reservoir of atmospheric $\ce{N2}$ (78% of the atmosphere) would be inaccessible to life. Only certain prokaryotes possess the **nitrogenase** enzyme needed to break the strong triple bond in $\ce{N2}$:

$$\ce{N2 + 8H+ + 8e- + 16ATP -> 2NH3 + H2 + 16ADP + 16P_i}$$

### Phosphorus Cycle

The **phosphorus cycle** differs from the carbon and nitrogen cycles in that it has **no atmospheric (gas) phase**. Phosphorus cycles between rock, soil, water, and living organisms.

- Phosphorus enters ecosystems through **weathering of rocks**
- Plants absorb phosphate ions ($\ce{PO4^{3-}}$) from soil
- Animals obtain phosphorus from food
- Decomposition returns phosphorus to soil
- Phosphorus eventually washes into oceans and is deposited in sediments

Phosphorus is often the **limiting nutrient** in freshwater ecosystems.

### Water Cycle

The **water cycle** (hydrological cycle) moves water through the atmosphere, surface water, groundwater, and living organisms:

- **Evaporation** from oceans and surface water
- **Transpiration** from plant leaves (evapotranspiration)
- **Condensation** into clouds
- **Precipitation** as rain or snow
- **Infiltration** into soil and groundwater
- **Runoff** to rivers, lakes, and oceans

#### Diagram: Biogeochemical Cycles Dashboard

<iframe src="../../sims/biogeochemical-cycles/main.html" height="580" width="100%" scrolling="no"></iframe>

*[View Fullscreen](../../sims/biogeochemical-cycles/main.html)*

<details markdown="1">
<summary>Biogeochemical Cycles Dashboard — Specification</summary>
**Type:** MicroSim (p5.js)<br/>
**sim-id:** biogeochemical-cycles<br/>
**Library:** p5.js<br/>
**Status:** Specified

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
</details>

---

## Part 3: Biomes

### Biomes Overview

A **biome** is a large geographic region characterized by its climate (temperature and precipitation patterns) and the dominant type of vegetation or aquatic environment.

### Terrestrial Biomes

| Biome | Temperature | Precipitation | Dominant vegetation | Key features |
|---|---|---|---|---|
| Tropical rainforest | Warm year-round | Very high (>200 cm/yr) | Tall broadleaf trees, dense canopy | Highest biodiversity |
| Tropical savanna | Warm year-round | Seasonal (dry/wet) | Grasses with scattered trees | Frequent fires |
| Desert | Hot or cold | Very low (<30 cm/yr) | Cacti, succulents, sparse shrubs | Extreme temperature swings |
| Temperate grassland | Seasonal (hot/cold) | Moderate (25–75 cm/yr) | Grasses, few trees | Rich soil (breadbaskets) |
| Temperate deciduous forest | Seasonal | Moderate (75–150 cm/yr) | Deciduous broadleaf trees | Four distinct seasons |
| Coniferous forest (taiga) | Cold winters | Moderate | Conifers (spruce, fir, pine) | Largest terrestrial biome |
| Tundra | Very cold | Low | Mosses, lichens, low shrubs | Permafrost |

### Aquatic Biomes

Aquatic biomes are categorized by salinity, depth, flow, and light availability:

- **Freshwater:** lakes, ponds, rivers, streams, wetlands
- **Marine:** open ocean, coral reefs, estuaries, intertidal zones, deep sea
- **Estuaries** — where rivers meet the ocean; extremely productive due to nutrient input

---

## Part 4: Biodiversity and Conservation

### Biodiversity

**Biodiversity** refers to the variety of life at all levels of organization:

- **Genetic diversity** — variation in alleles within a species
- **Species diversity** — variety of species in a community
- **Ecosystem diversity** — variety of habitats and ecological processes in a region

### Species Richness and Evenness

Two components of species diversity:

- **Species richness** — the total number of different species in an area
- **Species evenness** — how equally distributed individuals are among those species

A community with 5 species and 20% of each is more diverse (higher evenness) than a community with 5 species where one species comprises 92% of individuals.

### Threats to Biodiversity

#### Habitat Fragmentation

**Habitat fragmentation** breaks large, continuous habitats into smaller, isolated patches. Effects:

- Reduces population sizes (increasing drift and inbreeding)
- Creates edge effects (edges have different microclimates and increased predation)
- Blocks migration corridors
- Decreases species richness (island biogeography applies — smaller patches support fewer species)

#### Invasive Species

**Invasive species** are non-native organisms introduced to a new environment where they lack natural predators or competitors. They can:

- Outcompete native species for resources
- Prey on native species with no evolved defenses
- Alter habitat structure
- Introduce new diseases

**Examples:** Burmese pythons in the Florida Everglades, zebra mussels in the Great Lakes, kudzu vine in the southeastern U.S.

#### Climate Change and Ecology

**Climate change** — primarily driven by rising atmospheric $\ce{CO2}$ from fossil fuel combustion — affects ecosystems through:

- Rising temperatures — shifting species ranges poleward and upward
- Ocean acidification — $\ce{CO2}$ dissolves in seawater, forming carbonic acid, threatening coral reefs and shelled organisms
- Altered precipitation patterns — droughts, floods, changed growing seasons
- Phenological mismatches — pollinators and plants may not synchronize timing
- Sea level rise — threatening coastal ecosystems

!!! mascot-warning "Common Mistake"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Gregor warns you">
    On the college placement exam, be specific about climate change mechanisms. Don't just say "global warming hurts animals." Explain the mechanism: rising temperatures shift the geographic range of suitable habitat; species that cannot migrate fast enough face extinction. Or: ocean acidification reduces carbonate ion concentration, making it harder for corals and mollusks to build calcium carbonate structures.

### Conservation Biology

**Conservation biology** is the scientific study of Earth's biodiversity and the methods for protecting it.

Key strategies:

- **Protected areas** — national parks, wildlife refuges, marine reserves
- **Habitat corridors** — strips of habitat connecting fragmented patches, allowing migration
- **Captive breeding programs** — breeding endangered species in zoos for eventual reintroduction
- **Restoration ecology** — actively restoring degraded ecosystems to functional condition
- **Population genetics tools** — using Hardy-Weinberg analysis and genetic diversity monitoring to manage small populations

### Ecological Footprint

An **ecological footprint** measures the total amount of biologically productive land and water required to support an individual, city, or nation — including the area needed to produce resources consumed and absorb waste generated.

- The average American ecological footprint is approximately 8 global hectares per person
- If everyone consumed at U.S. levels, we would need approximately 5 Earths
- Reducing ecological footprint requires efficiency improvements, renewable energy, sustainable agriculture, and reduced consumption

!!! mascot-celebration "Excellent Work!"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Gregor celebrates">
    Congratulations, investigators! You have now completed all 20 chapters of college placement Biology — from atoms and molecules to the grand patterns of the biosphere. Every concept connects: the chemistry of Chapter 1 underlies the enzyme kinetics of Chapter 6; the DNA replication of Chapter 13 makes the heredity of Chapter 11 possible; the population genetics of Chapter 16 explains the biodiversity you just studied here. You are ready for the college placement exam. Go make Gregor proud!

---

## Key Takeaways

1. **Energy flows unidirectionally** through ecosystems. Only ~10% of energy at one trophic level is transferred to the next; the rest is lost as heat.

2. **Net primary productivity** ($NPP = GPP - R$) represents the energy available to all consumers and decomposers.

3. **Biogeochemical cycles** recycle matter between living organisms and the abiotic environment. The carbon, nitrogen, phosphorus, and water cycles each have distinct reservoirs and fluxes.

4. **Nitrogen fixation** by bacteria is the critical gateway that makes atmospheric $\ce{N2}$ available to life.

5. The phosphorus cycle has **no gas phase** — phosphorus moves through rock, soil, water, and organisms.

6. **Terrestrial biomes** are defined by climate (temperature and precipitation). **Aquatic biomes** are defined by salinity, depth, and light.

7. **Biodiversity** includes genetic, species, and ecosystem diversity. It is measured by species richness and evenness.

8. The three major threats to biodiversity are **habitat fragmentation**, **invasive species**, and **climate change** (especially ocean acidification and range shifts).

9. **Conservation strategies** include protected areas, habitat corridors, captive breeding, restoration ecology, and population genetics management.

10. The **ecological footprint** quantifies human resource consumption and highlights the unsustainability of current consumption levels.

---

??? question "college placement Practice: Test Your Understanding"
    **Question 1:** A grassland ecosystem receives 20,000 kcal/m²/yr of sunlight. If producers capture 1% and the 10% rule applies, how much energy is available to tertiary consumers?

    **Answer:** Producers capture: $20{,}000 \times 0.01 = 200$ kcal. Primary consumers: $200 \times 0.10 = 20$ kcal. Secondary consumers: $20 \times 0.10 = 2$ kcal. Tertiary consumers: $2 \times 0.10 = 0.2$ kcal/m²/yr.

    **Question 2:** Explain why the phosphorus cycle is considered the "slowest" biogeochemical cycle and how human activities have disrupted it.

    **Answer:** The phosphorus cycle is slow because it has **no atmospheric gas phase** — phosphorus moves only through rock weathering, soil, water, and organisms. Natural weathering releases phosphorus very slowly over geological time. Humans have disrupted the cycle primarily through **agricultural fertilizer runoff** — mining phosphate rock and applying it to fields causes excess phosphorus to wash into waterways, causing **eutrophication** (algal blooms that deplete oxygen and create dead zones).

    **Question 3:** A conservation biologist is managing a species with only 200 individuals in a fragmented habitat. Using concepts from this course, recommend three specific management actions.

    **Answer:** (1) **Establish habitat corridors** connecting fragmented patches to increase gene flow and reduce inbreeding depression (population genetics — Chapter 16). (2) **Monitor genetic diversity** using Hardy-Weinberg analysis and consider translocating individuals from other populations to increase allele diversity (genetic drift mitigation). (3) **Protect and restore habitat** to increase carrying capacity ($K$), reducing the risk of demographic stochasticity and environmental catastrophes driving the population to extinction (population ecology — Chapter 18).

[See Annotated References](./references.md)
