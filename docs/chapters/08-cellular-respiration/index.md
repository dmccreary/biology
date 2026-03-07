---
title: Cellular Respiration and Fermentation
description: How cells extract chemical energy from glucose through glycolysis, the Krebs cycle, and oxidative phosphorylation, and how fermentation sustains ATP production without oxygen.
generated_by: claude skill chapter-content-generator
date: 2026-02-26 18:33:04
version: 0.05
---

# Cellular Respiration and Fermentation

## Summary

Cellular respiration extracts the chemical energy stored in glucose and converts it into ATP, the currency cells actually spend. This chapter follows the complete oxidative pathway: glycolysis in the cytoplasm produces pyruvate and a small ATP yield; pyruvate oxidation and the Krebs cycle in the mitochondrial matrix generate NADH and FADH₂ electron carriers; and the mitochondrial electron transport chain couples electron flow to a proton gradient that ATP synthase harvests via chemiosmosis. The chapter quantifies the total ATP yield per glucose and closes with anaerobic fermentation — lactic acid and alcoholic pathways that regenerate NAD⁺ when oxygen is unavailable.

## Concepts Covered

This chapter covers the following 14 concepts from the learning graph:

1. Cellular Respiration Overview
2. Glycolysis
3. Substrate-Level Phosphorylation
4. Pyruvate Oxidation
5. Acetyl-CoA
6. Krebs Cycle
7. Electron Transport Chain (Mitochondria)
8. Oxidative Phosphorylation
9. Chemiosmosis
10. NADH and FADH₂
11. ATP Yield of Respiration
12. Fermentation
13. Lactic Acid Fermentation
14. Alcoholic Fermentation

!!! mascot-welcome "Gregor Welcomes You!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Gregor welcomes you">
    Welcome, investigators! In Chapter 7 we saw how chloroplasts *build* glucose from sunlight and $\ce{CO2}$. Now we flip the script. Cellular respiration *dismantles* glucose, extracting its stored chemical energy and repackaging it as ATP — the molecule every living cell uses to do work. Let's investigate where all that energy goes!

Every time your muscles contract, your neurons fire, or your ribosomes assemble a protein, ATP is consumed. Cellular respiration is the process that continuously replenishes this supply. The overall reaction is deceptively simple:

$$\ce{C6H12O6 + 6O2 -> 6CO2 + 6H2O + ~32 ATP}$$

But the path from glucose to those 32 ATP molecules is a three-stage metabolic journey spanning the cytoplasm and two mitochondrial compartments. Understanding each stage — its location, its inputs and outputs, and its contribution to the ATP total — is central to AP Biology and to understanding life itself.

## Overview: Three Stages, Two Locations

Cellular respiration is divided into three sequential stages:

1. **Glycolysis** — occurs in the cytoplasm; splits glucose into two pyruvate molecules; net yield of 2 ATP and 2 NADH
2. **Pyruvate oxidation + Krebs cycle** — occurs in the mitochondrial matrix; completely oxidizes carbon skeletons to $\ce{CO2}$; produces electron carriers (NADH and $\ce{FADH2}$)
3. **Electron transport chain + oxidative phosphorylation** — occurs on the inner mitochondrial membrane; uses electrons from NADH and $\ce{FADH2}$ to power a proton gradient that drives ATP synthesis

The overall process is **aerobic** — it requires molecular oxygen ($\ce{O2}$) as the final electron acceptor. When oxygen is unavailable, cells resort to **anaerobic fermentation** to regenerate the NAD⁺ needed for glycolysis to continue.

<iframe src="../../sims/mitochondria/main.html" height="730" width="100%" scrolling="no"></iframe>

*[View Fullscreen](../../sims/mitochondria/main.html)*

The diagram above shows the mitochondrion's internal architecture — the double membrane, matrix, and cristae — and the locations of the electron transport chain complexes. Keep this structure in mind as you trace the respiration pathway through each stage.

## Stage 1: Glycolysis

Glycolysis ("glucose splitting") takes place in the **cytoplasm** and does not require oxygen. It is the most ancient metabolic pathway, shared by virtually all living organisms. Ten enzyme-catalyzed reactions convert one glucose molecule into two molecules of **pyruvate** (3-carbon).

### Energy Investment and Payoff

Glycolysis is divided into two phases:

**Energy-investment phase (reactions 1–5):** Two ATP are consumed to phosphorylate glucose, making it more reactive. The resulting fructose-1,6-bisphosphate is cleaved into two interconvertible 3-carbon sugars (glyceraldehyde-3-phosphate, G3P).

**Energy-payoff phase (reactions 6–10):** Each G3P is oxidized and converted to pyruvate. Four ATP are produced by **substrate-level phosphorylation** — direct transfer of a phosphate group from a substrate to ADP. Two NADH are also produced per glucose.

The net yield of glycolysis per glucose molecule:

$$\text{Glucose} + 2\,\ce{NAD+} + 2\,\text{ADP} + 2\,P_i \rightarrow 2\,\text{Pyruvate} + 2\,\text{NADH} + 2\,\text{H}^+ + 2\,\text{ATP} + 2\,\ce{H2O}$$

!!! mascot-tip "Gregor's Tip"
    On the AP exam, questions often ask whether glycolysis requires oxygen. It does **not** — it occurs in both aerobic and anaerobic conditions. The 2 NADH produced in glycolysis can only be used by the ETC if oxygen is present; in anaerobic conditions, fermentation regenerates NAD⁺ so glycolysis can continue.

**Substrate-level phosphorylation** is the mechanism operating in both glycolysis and the Krebs cycle. Unlike oxidative phosphorylation (which uses a proton gradient), substrate-level phosphorylation couples phosphate transfer directly to a spontaneous chemical reaction. It is less efficient but oxygen-independent.

#### Diagram: Glycolysis Pathway Simulator

<iframe src="../../sims/glycolysis-simulator/main.html" height="500" width="100%" scrolling="no"></iframe>

*[View Fullscreen](../../sims/glycolysis-simulator/main.html)*

<details markdown="1">
<summary>Glycolysis Pathway Simulator — Specification</summary>
**Type:** MicroSim (p5.js)<br/>
**sim-id:** glycolysis-simulator<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Learning objective:** Students will be able to *describe* (Bloom's L2: Understand) the inputs, outputs, and net energy yield of glycolysis, distinguishing the investment phase from the payoff phase.

**Canvas:** 760 × 420 px, responsive.

**Layout:** Three columns: left (energy investment phase, reactions 1–5 shaded red/pink), center divider showing glucose cleavage, right (energy payoff phase, reactions 6–10 shaded green).

**Visual elements:**
- Hexagon icon for glucose at top-left; arrow flow downward through 10 numbered steps
- Each step shows: substrate name → enzyme name → product name
- ATP consumed shown as red "−ATP" badges at steps 1 and 3
- ATP produced shown as green "+ATP" badges at steps 7 and 10 (×2 each because 2 G3P)
- NADH produced shown as blue "+NADH" badge at step 6 (×2)
- Net tally panel at bottom: "Net ATP: +2", "Net NADH: +2", "Net Pyruvate: 2"

**Interaction:**
- Click any numbered step to expand a tooltip panel showing the full reaction equation, enzyme name, and cofactor requirement
- Toggle button: "Show Investment Phase" / "Show Payoff Phase" highlights the relevant half of the pathway
- "Reset" button returns all steps to default state

**Color coding:** Investment phase background light coral (#FFCCCC); payoff phase background light green (#CCFFCC); NADH badges blue (#4A90D9); ATP badges gold (#F5A623)
</details>

## Stage 2: Pyruvate Oxidation and the Krebs Cycle

### Pyruvate Oxidation

Before entering the Krebs cycle, each pyruvate molecule produced by glycolysis must be converted to **acetyl-CoA**. This occurs in the **mitochondrial matrix** and is catalyzed by the **pyruvate dehydrogenase complex** — a large, multi-enzyme assembly.

The reaction for each pyruvate:

$$\ce{Pyruvate + CoA + NAD+ -> Acetyl-CoA + CO2 + NADH}$$

Per glucose (two pyruvates): two acetyl-CoA, two CO₂ released, and two NADH produced. The carbon atoms lost as $\ce{CO2}$ will not be recaptured — this is one of the six carbons fully oxidized during respiration.

**Acetyl-CoA** (acetyl coenzyme A) is a 2-carbon acetyl group attached to coenzyme A via a high-energy thioester bond. It is the entry point for the Krebs cycle, and it also links lipid and protein catabolism to respiration — fatty acids and certain amino acids are also converted to acetyl-CoA.

!!! mascot-encourage "You've Got This!"
    <img src="../../img/mascot/encouraging.png" class="mascot-admonition-img" alt="Gregor encourages you">
    The Krebs cycle has eight reactions and a lot of intermediate names. You do **not** need to memorize every intermediate for the AP exam! Focus on the inputs and outputs: what goes **in** (acetyl-CoA, NAD⁺, FAD, ADP), what comes **out** (CO₂, NADH, FADH₂, ATP), and how many turns per glucose. The intermediate names are context — the accounting is what matters.

### The Krebs Cycle (Citric Acid Cycle)

The **Krebs cycle** (also called the citric acid cycle or TCA cycle) runs in the **mitochondrial matrix**. Each turn of the cycle accepts one 2-carbon acetyl group from acetyl-CoA, combines it with a 4-carbon **oxaloacetate** to form 6-carbon **citrate**, and then oxidizes and releases carbon as $\ce{CO2}$, regenerating oxaloacetate.

**Per one turn of the Krebs cycle (one acetyl-CoA):**

- 2 $\ce{CO2}$ released (complete oxidation of the 2-carbon acetyl group)
- 3 NADH produced
- 1 $\ce{FADH2}$ produced
- 1 ATP (or GTP) produced by substrate-level phosphorylation

**Per glucose (two turns):**

- 4 $\ce{CO2}$ released
- 6 NADH produced
- 2 $\ce{FADH2}$ produced
- 2 ATP produced

The Krebs cycle's primary function is **not** to produce ATP directly but to extract electrons from organic molecules and load them onto NAD⁺ and FAD, producing NADH and $\ce{FADH2}$. These electron carriers then deliver their electrons to the ETC, where most of the ATP is generated.

#### Diagram: Krebs Cycle Explorer

<iframe src="../../sims/krebs-cycle-explorer/main.html" height="655" width="100%" scrolling="no"></iframe>

*[View Fullscreen](../../sims/krebs-cycle-explorer/main.html)*

<details markdown="1">
<summary>Krebs Cycle Explorer — Specification</summary>
**Type:** MicroSim (p5.js)<br/>
**sim-id:** krebs-cycle-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Learning objective:** Students will be able to *explain* (Bloom's L2: Understand) the inputs, outputs, and overall purpose of the Krebs cycle, and identify where NADH and FADH₂ are produced.

**Canvas:** 760 × 480 px, responsive.

**Layout:** Circular pathway with 8 labeled intermediates arranged clockwise. Each intermediate shown as a rounded rectangle with carbon count (e.g., "Citrate (6C)"). Arrows between intermediates indicate reactions.

**Molecule nodes:**
- Oxaloacetate (4C) at top (entry/exit point, highlighted in gold)
- Citrate (6C), Isocitrate (6C), α-Ketoglutarate (5C), Succinyl-CoA (4C), Succinate (4C), Fumarate (4C), Malate (4C)
- Acetyl-CoA input arrow entering at top-left junction

**Product badges on arrows:**
- CO₂ released: red badge on isocitrate→α-ketoglutarate and α-ketoglutarate→succinyl-CoA steps
- NADH produced: blue badge on three dehydrogenase steps
- FADH₂ produced: orange badge on succinate→fumarate step
- ATP produced: green badge on succinyl-CoA→succinate step

**Running tally panel** (right side): Live count of CO₂, NADH, FADH₂, ATP accumulated per turn as user clicks through steps.

**Interaction:**
- "Step Forward" button advances through the cycle one reaction at a time
- Click any intermediate node to show its name, carbon count, and role
- "Run Full Cycle" animates all 8 steps automatically
- "×2 for glucose" toggle doubles all product counts and adds label "per glucose"

**Responsive design:** Cycle radius scales with container width. All text scales proportionally.
</details>

## Stage 3: Electron Transport Chain and Oxidative Phosphorylation

### The Electron Transport Chain

The **electron transport chain (ETC)** is embedded in the **inner mitochondrial membrane** — the highly folded membrane (cristae) whose surface area is maximized to accommodate thousands of ETC protein complexes per cell. The ETC consists of four large protein complexes (I–IV) plus two mobile electron carriers (ubiquinone/coenzyme Q and cytochrome c).

!!! mascot-thinking "Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Gregor is thinking">
    Notice that the ETC in mitochondria runs in the *opposite direction* from the photosynthetic ETC in chloroplasts. In chloroplasts, light energy *inputs* electrons at a high-energy state. In mitochondria, electrons *fall* to a lower energy state, releasing energy that pumps protons. Two organelles, two ETCs, one elegant thermodynamic principle — energy flows downhill.

Electrons from NADH enter at **Complex I** (NADH dehydrogenase); electrons from $\ce{FADH2}$ enter at **Complex II** (succinate dehydrogenase). Both converge on **ubiquinone (Q)**, which ferries electrons to **Complex III** (cytochrome bc₁ complex), then to **cytochrome c**, and finally to **Complex IV** (cytochrome c oxidase).

At Complex IV, electrons are transferred to **molecular oxygen** — the final electron acceptor:

$$\ce{4H+ + 4e- + O2 -> 2H2O}$$

This reduction of oxygen to water is why aerobic respiration requires $\ce{O2}$. Without oxygen, electrons cannot flow through the chain, the proton gradient collapses, and oxidative phosphorylation halts.

**Proton pumping:** As electrons move through Complexes I, III, and IV, the energy released is used to pump $\ce{H+}$ ions (protons) from the mitochondrial matrix into the **intermembrane space (IMS)**. This creates:

- A **concentration gradient** (more $\ce{H+}$ in IMS than matrix)
- An **electrical gradient** (IMS is positively charged relative to matrix)

Together these constitute the **proton-motive force (PMF)**, also called the **electrochemical gradient**.

### Chemiosmosis and ATP Synthesis

The proton-motive force drives protons back into the matrix through **ATP synthase** (Complex V) — a remarkable molecular motor that uses the energy of proton flow to synthesize ATP from ADP and inorganic phosphate. This process is called **chemiosmosis** (proposed by Peter Mitchell, Nobel Prize 1978).

$$\text{ADP} + P_i \xrightarrow{\text{ATP synthase}} \text{ATP} \quad (\Delta G = +30.5 \text{ kJ/mol, driven by PMF})$$

ATP synthase has two structural domains:
- **F₀ subunit** — embedded in the inner membrane; the proton channel and rotary motor
- **F₁ subunit** — protrudes into the matrix; contains the catalytic sites where ATP is synthesized

Approximately **2.5 ATP** are synthesized per NADH oxidized and **1.5 ATP** per $\ce{FADH2}$ oxidized. These values reflect the actual coupling efficiency; textbooks historically used 3 and 2 (based on theoretical P/O ratios), but modern measurements favor the lower figures.

**Oxidative phosphorylation** refers to the combined process: electrons flow through the ETC (oxidation), driving proton pumping and subsequent ATP synthesis (phosphorylation) via chemiosmosis.

#### Diagram: ATP Yield Calculator

<iframe src="../../sims/atp-yield-calculator/main.html" height="480" width="100%" scrolling="no"></iframe>

*[View Fullscreen](../../sims/atp-yield-calculator/main.html)*

<details markdown="1">
<summary>ATP Yield Calculator — Specification</summary>
**Type:** MicroSim (p5.js)<br/>
**sim-id:** atp-yield-calculator<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Learning objective:** Students will be able to *calculate* (Bloom's L3: Apply) the total ATP yield per glucose from cellular respiration, accounting for each stage's contribution.

**Canvas:** 760 × 450 px, responsive.

**Layout:** Vertical table-style visualization with one row per metabolic stage.

**Rows:**
1. Glycolysis: 2 ATP (substrate-level), 2 NADH × 2.5 = 5 ATP (oxidative) = 7 ATP total
2. Pyruvate Oxidation: 0 substrate-level, 2 NADH × 2.5 = 5 ATP (oxidative) = 5 ATP total
3. Krebs Cycle: 2 ATP (substrate-level), 6 NADH × 2.5 = 15 ATP + 2 FADH₂ × 1.5 = 3 ATP (oxidative) = 20 ATP total
4. **Grand Total: ~32 ATP per glucose**

**Columns:** Stage | Substrate-level ATP | NADH → ATP | FADH₂ → ATP | Stage Total

**Visual elements:**
- Color-coded rows: glycolysis (yellow), pyruvate oxidation (orange), Krebs cycle (red/maroon), ETC/oxidative phosphorylation (purple)
- Running total shown in bold bottom row
- "Modern estimate (~32)" vs "Classic estimate (~38)" toggle button that updates NADH and FADH₂ conversion factors and re-totals
- Pie chart (right side) showing proportion of ATP from each stage

**Interaction:**
- Slider for NADH → ATP conversion factor (1.5–3 range) with live recalculation
- Slider for FADH₂ → ATP conversion factor (1.0–2.0 range) with live recalculation
- Hover over any row for a brief explanation of where that stage occurs

**Responsive design:** Column widths scale proportionally. Pie chart radius scales with available space.
</details>

### ATP Yield Summary

| Stage | Location | Substrate-level ATP | NADH produced | FADH₂ produced | ATP from oxidative phosphorylation | Stage total |
|---|---|---|---|---|---|---|
| Glycolysis | Cytoplasm | 2 | 2 | 0 | ~5 | ~7 |
| Pyruvate oxidation | Matrix | 0 | 2 | 0 | ~5 | ~5 |
| Krebs cycle | Matrix | 2 | 6 | 2 | ~18 | ~20 |
| **Total per glucose** | | **4** | **10** | **2** | **~28** | **~32** |

!!! mascot-warning "Common Mistake"
    Many textbooks and older AP materials list the total ATP yield as **36 or 38 ATP per glucose**. This is the **theoretical maximum** based on idealized P/O ratios. Modern biochemistry measures the actual yield at **~30–32 ATP** due to membrane leakage, the energy cost of importing cytoplasmic NADH into the mitochondria, and variable coupling efficiency. The AP exam accepts both estimates but be ready to explain why the actual yield is lower than the theoretical maximum.

## Fermentation: Anaerobic Energy Production

When oxygen is absent or insufficient, the ETC cannot function — there is no final electron acceptor. NADH accumulates, and because NAD⁺ cannot be regenerated by the ETC, glycolysis halts (it requires NAD⁺ as an electron acceptor at step 6). **Fermentation** solves this problem by transferring electrons from NADH to organic molecules, regenerating NAD⁺ without producing more ATP.

Fermentation's sole purpose is **NAD⁺ regeneration** so that glycolysis can continue producing the 2 ATP that sustain cell survival. The organic molecules that accept electrons become the fermentation waste products.

There are two principal fermentation pathways:

### Lactic Acid Fermentation

In **lactic acid fermentation**, pyruvate is the electron acceptor. NADH donates its electrons directly to pyruvate, reducing it to **lactate** (lactic acid):

$$\ce{Pyruvate + NADH + H+ -> Lactate + NAD+}$$

This reaction is catalyzed by **lactate dehydrogenase (LDH)**. No CO₂ is released; the carbon atoms in pyruvate are simply rearranged into lactate.

**Where it occurs:**
- Skeletal muscle cells during intense exercise (when $\ce{O2}$ delivery cannot keep pace with ATP demand)
- Red blood cells (which lack mitochondria entirely)
- Lactobacillus bacteria (used in yogurt, cheese, and sauerkraut fermentation)

The accumulation of lactate (and accompanying $\ce{H+}$ ions) is associated with muscle fatigue. When oxygen becomes available, lactate is converted back to pyruvate in the liver (Cori cycle) and re-enters aerobic respiration.

### Alcoholic Fermentation

In **alcoholic fermentation**, pyruvate is first decarboxylated to **acetaldehyde** by pyruvate decarboxylase, releasing $\ce{CO2}$:

$$\ce{Pyruvate -> Acetaldehyde + CO2}$$

Acetaldehyde then accepts electrons from NADH, producing **ethanol**:

$$\ce{Acetaldehyde + NADH + H+ -> Ethanol + NAD+}$$

**Where it occurs:**
- Yeast (*Saccharomyces cerevisiae*) — the basis of bread baking (CO₂ makes dough rise) and alcoholic beverage production
- Some plant cells under waterlogged (anaerobic) conditions

#### MicroSim: Brewing Beer Process Explorer

![](../../img/mascot/beer.png){ align="left" width="150px"}
Even though beer brewing is beyond the scope of the AP Biology exam, it's a fun, memorable way to see glycolysis and alcoholic fermentation unfold step by step right inside a real-world fermenter.

#### Diagram: Brewing Beer

<iframe src="../../sims/brewing-beer/main.html" height="670" width="100%" scrolling="no"></iframe>

*[View Fullscreen](../../sims/brewing-beer/main.html)*

#### Diagram: Fermentation Pathways Comparison

<iframe src="../../sims/fermentation-pathways/main.html" height="480" width="100%" scrolling="no"></iframe>

*[View Fullscreen](../../sims/fermentation-pathways/main.html)*

<details markdown="1">
<summary>Fermentation Pathways Comparison — Specification</summary>
**Type:** MicroSim (p5.js)<br/>
**sim-id:** fermentation-pathways<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Learning objective:** Students will be able to *compare* (Bloom's L4: Analyze) lactic acid and alcoholic fermentation in terms of reactants, products, and organisms, and explain why fermentation is necessary when oxygen is absent.

**Canvas:** 760 × 440 px, responsive.

**Layout:** Two parallel flow diagrams side by side, separated by a central divider column.

**Left panel (Lactic Acid Fermentation):**
- Glucose → (Glycolysis) → 2 Pyruvate + 2 NADH + 2 ATP
- Arrow from pyruvate → lactate (with NADH → NAD⁺ shown as curved arrow)
- Waste product label: "Lactate (lactic acid)"
- Organism examples: muscle cells, red blood cells, Lactobacillus (with small icons)

**Right panel (Alcoholic Fermentation):**
- Glucose → (Glycolysis) → 2 Pyruvate + 2 NADH + 2 ATP
- Arrow: pyruvate → acetaldehyde + CO₂ (pyruvate decarboxylase)
- Arrow: acetaldehyde → ethanol (NADH → NAD⁺ curved arrow)
- Waste products: "Ethanol + CO₂"
- Organism examples: yeast, waterlogged plant cells

**Central column:** Shows "NAD⁺ Regenerated!" badge with a circular arrow graphic; label "Purpose: Allow glycolysis to continue"

**Running ATP tally:** Both panels show "Net ATP = 2 per glucose" with a note "No extra ATP from fermentation"

**Interaction:**
- Click "Animate" to trace molecule flow through either pathway with color-coded NADH → NAD⁺ conversion
- Click organism icons to show a fun-fact pop-up (e.g., "Yeast produce CO₂ that makes bread rise!")
- Toggle between "Aerobic" (greyed out ETC shown as disabled) and "Anaerobic" (ETC marked with ✗) modes to show context

**Responsive design:** Panel widths scale with container width. Molecule labels scale proportionally.
</details>

| Feature | Lactic Acid Fermentation | Alcoholic Fermentation |
|---|---|---|
| Organism examples | Muscle cells, red blood cells, *Lactobacillus* | Yeast (*Saccharomyces*), some plants |
| Electron acceptor | Pyruvate | Acetaldehyde |
| Waste products | Lactate ($\ce{C3H6O3}$) | Ethanol ($\ce{C2H5OH}$) + $\ce{CO2}$ |
| CO₂ released? | No | Yes |
| Net ATP per glucose | 2 (from glycolysis only) | 2 (from glycolysis only) |
| Key purpose | NAD⁺ regeneration | NAD⁺ regeneration |

## Connecting the Stages: Carbon and Electron Accounting

Every carbon atom in glucose is fully oxidized to $\ce{CO2}$ by the end of the Krebs cycle:
- 2 carbons released as $\ce{CO2}$ during pyruvate oxidation (one per pyruvate × 2)
- 4 carbons released as $\ce{CO2}$ during two Krebs cycle turns (two per turn × 2)
- **Total: 6 CO₂ per glucose** — matching the stoichiometry in the overall equation

Every hydrogen atom (proton + electron pair) stripped from glucose is captured by NAD⁺ or FAD:
- 10 NADH + 2 $\ce{FADH2}$ per glucose pass their electrons to the ETC
- The ETC transfers these electrons to $\ce{O2}$, producing 6 $\ce{H2O}$

This electron flow — from the high-energy electrons in glucose through the ETC to the electronegative $\ce{O2}$ — is what drives the proton-motive force and, through chemiosmosis, the synthesis of ~28 ATP by oxidative phosphorylation.

!!! mascot-celebration "Excellent Work!"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Gregor celebrates">
    You've traced the complete journey of a glucose molecule — from the cytoplasm through glycolysis, across the mitochondrial membrane for pyruvate oxidation, around the Krebs cycle, and through the electron transport chain to water and ATP. That's the entire machinery of aerobic life in one chapter. The investigators have officially mastered cellular energy metabolism. Let's investigate the next frontier!

## Summary

Cellular respiration extracts the energy stored in glucose through three coordinated stages:

- **Glycolysis** (cytoplasm): glucose → 2 pyruvate; net +2 ATP, +2 NADH; aerobic or anaerobic
- **Pyruvate oxidation** (mitochondrial matrix): 2 pyruvate → 2 acetyl-CoA; +2 NADH, −2 CO₂
- **Krebs cycle** (mitochondrial matrix): 2 acetyl-CoA fully oxidized; +6 NADH, +2 $\ce{FADH2}$, +2 ATP, −4 CO₂
- **ETC + oxidative phosphorylation** (inner mitochondrial membrane): electrons from NADH and $\ce{FADH2}$ reduce $\ce{O2}$; proton gradient drives ATP synthase; ~28 ATP produced
- **Total yield**: ~32 ATP per glucose under physiological conditions

Fermentation (lactic acid or alcoholic) sustains glycolysis under anaerobic conditions by regenerating NAD⁺, but produces no additional ATP beyond the 2 from glycolysis.

??? note "Self-Check: Test Your Understanding"

    **Question 1.** A cell is treated with a drug that blocks Complex I of the ETC. Which of the following would you expect?

    ??? success "Answer"
        NADH would accumulate (no longer oxidized by Complex I), the proton gradient would decrease, ATP synthesis by oxidative phosphorylation would decline, and the cell would rely more heavily on substrate-level phosphorylation (glycolysis + Krebs) and possibly fermentation to meet ATP demands.

    **Question 2.** Why does $\ce{FADH2}$ produce fewer ATP than NADH during oxidative phosphorylation?

    ??? success "Answer"
        $\ce{FADH2}$ donates electrons at Complex II (succinate dehydrogenase), which does **not** pump protons. NADH donates electrons at Complex I, which **does** pump protons. Because $\ce{FADH2}$ electrons bypass the first proton pump, fewer protons are translocated per electron pair, resulting in a lower PMF contribution and fewer ATP synthesized (~1.5 vs. ~2.5 per carrier).

    **Question 3.** A runner's muscles are producing lactate. What does this tell you about the oxygen supply to those muscles?

    ??? success "Answer"
        The muscles are not receiving enough $\ce{O2}$ to keep up with the rate of NADH production. The ETC cannot process NADH fast enough, so cells switch to lactic acid fermentation to regenerate NAD⁺ and keep glycolysis (and ATP production) running. This is a normal physiological response to intense exercise.

    **Question 4.** Where are the six $\ce{CO2}$ molecules of the overall respiration equation released?

    ??? success "Answer"
        Two $\ce{CO2}$ are released during pyruvate oxidation (one per pyruvate × 2 pyruvates per glucose) and four $\ce{CO2}$ are released during two turns of the Krebs cycle (two per turn × 2 turns). None are released during glycolysis or the ETC.

## Concepts Covered

1. Cellular Respiration Overview
2. Glycolysis
3. Substrate-Level Phosphorylation
4. Pyruvate Oxidation
5. Acetyl-CoA
6. Krebs Cycle
7. Electron Transport Chain (Mitochondria)
8. Oxidative Phosphorylation
9. Chemiosmosis
10. NADH and FADH₂
11. ATP Yield of Respiration
12. Fermentation
13. Lactic Acid Fermentation
14. Alcoholic Fermentation
