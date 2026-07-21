---
title: Scientific Foundations and Atomic Chemistry
description: Introduces the scientific method, statistical reasoning, and the atomic and bonding chemistry underpinning all biological processes.
generated_by: claude skill chapter-content-generator
date: 2026-02-26 02:25:21
version: 0.05
---

# Scientific Foundations and Atomic Chemistry

## Summary

This opening chapter establishes the two pillars upon which all of college placement Biology rests:
the nature of scientific inquiry and the atomic chemistry that underlies every
biological process. Students learn to design controlled experiments, apply statistical
tests, and interpret quantitative data — skills exercised throughout the entire course.
The chapter then introduces atomic structure, the types of chemical bonds, and the
forces that hold biological molecules together, setting the stage for all subsequent
chemistry and biochemistry.

## Concepts Covered

This chapter covers the following 18 concepts from the learning graph:

**Scientific Foundations (Unit 1)**

1. Scientific Method
2. Hypothesis Testing
3. Controlled Experiments
4. Independent and Dependent Variables
5. Chi-Square Statistical Test
6. Standard Deviation
7. Data Interpretation
8. Graph Construction and Analysis
9. Systems Thinking
10. Quantitative Reasoning
11. Models in Science

**Chemistry of Life — Atomic and Bonding Foundations**

12. Atomic Structure
13. Elements of Life
14. Chemical Bonds
15. Ionic Bonds
16. Covalent Bonds
17. Hydrogen Bonds
18. Van der Waals Forces

## Prerequisites

This is the first chapter of the course. It assumes only the prerequisites listed
in the [course description](../../course-description.md):

- Completion of one year of high school biology (or equivalent)
- Completion of one year of high school chemistry (or concurrent enrollment)
- Comfort with basic algebra and data interpretation

---

!!! mascot-welcome "Gregor Welcomes You!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Gregor welcomes you"/>
    Welcome to college placement Biology, investigators! I'm Gregor the Tree Frog, and I'll be guiding you through this course. Before we can understand how life works at any level — from a single protein to an entire ecosystem — we need two fundamental tools: a rigorous method for asking questions about nature, and a solid grasp of the atoms and chemical bonds that make biology possible. These aren't just preliminaries to "get through"; they are the lens through which every chapter that follows will make sense. Let's investigate!

## Introduction

Science is, at its core, a way of knowing. It differs from other ways of understanding the world — intuition, tradition, authority — because it demands evidence, reproducibility, and the willingness to be proven wrong. Biology is the application of this approach to the study of living systems, and the college placement Biology course will ask you to think and act as a scientist throughout. That means designing experiments, analyzing data, constructing graphs, and drawing conclusions that are proportional to the evidence.

Underlying every biological phenomenon is chemistry — and underlying chemistry is atomic physics. A cell membrane is not magic; it is a carefully arranged assembly of phospholipid molecules whose behavior is entirely predictable from the properties of covalent bonds and hydrogen bonds. DNA stores genetic information because the geometry of its covalent backbone and the specificity of its hydrogen-bond base pairs make it uniquely suited for that role. Understanding life at the molecular level requires a working vocabulary of atomic structure and chemical bonding.

This chapter is organized in two major parts. Part 1 covers the process of scientific inquiry, from forming a hypothesis to applying statistical tests that determine whether your results are meaningful. Part 2 introduces the atomic and chemical foundations of biology — the cast of characters (atoms and elements) and the rules of interaction (chemical bonds) that govern every biological molecule you will encounter in this course.

---

## Part 1: Scientific Inquiry

### The Scientific Method

The scientific method is an iterative, self-correcting process for building reliable knowledge about the natural world. It is not a rigid checklist performed in one direction, but a cycle of observation, inference, testing, and refinement. In college placement Biology, you will apply these steps in laboratory investigations, analyze data from field studies, and evaluate claims made in the scientific literature.

Below is a workflow of the scientific method.  Note that it is not a single pass.  There can be many loops in the scientific method.

#### Diagram: Scientific Method

<iframe src="../../sims/scientific-method/main.html" width="100%" height="1650px" scrolling="no"></iframe>
[View the Scientific Method Fullscreen](../../sims/scientific-method/main.html)

<details markdown="1">
<summary>Scientific Method</summary>

Note: the first version of this microsim was copied from the Introduction to Physics course, so the following specification was not used.  The Mermaid guide was used.

Type: workflow
**sim-id:** scientific-method<br/>
**Library:** Mermaid<br/>
**Status:** Complete

Bloom Level: Understand (L2)
Bloom Verb: explain
Learning Objective: Students will be able to explain how the steps of the scientific method connect as a cycle, identify where feedback loops occur, and distinguish the iterative nature of science from a linear checklist.

Purpose: Show the scientific method as a cyclic, iterative workflow with hover-text explanations at each step.

Visual style: Circular flowchart with six labeled nodes arranged in a clockwise ring. Arrows connect each step to the next. A large curved "revision loop" arrow points from Conclusion back to Observation/Hypothesis, showing that results often generate new questions.

Nodes (clockwise from top):
1. Observation — "Notice a pattern or phenomenon in nature"
2. Question — "Formulate a specific, answerable research question"
3. Hypothesis — "Propose a testable, falsifiable prediction"
4. Experiment — "Design and conduct a controlled investigation"
5. Data Analysis — "Graph data, calculate statistics, look for patterns"
6. Conclusion — "Accept, reject, or refine the hypothesis; publish results"

Hover text for each node: 1–2 sentences describing the step and a common pitfall to avoid.

Revision loop label: "New questions often arise — science is iterative!"

Color scheme:
- Node fill: medium green (#4CAF50)
- Arrow color: dark gray (#333)
- Revision loop arrow: orange (#FF9800) to distinguish it as the feedback path
- Background: white

Interactive features:
- Hover over any node to display the hover text description below the diagram
- Active (hovered) node glows slightly brighter
- The revision loop animates as a pulsing dashed orange line when the page loads, drawing student attention to the iterative nature of science

Canvas: 600 × 1650 px responsive — must redraw on window resize
</details>

The scientific method is anchored in **empiricism** — the idea that knowledge must ultimately be grounded in observation and measurement. No matter how elegant a theory may be, it must make testable predictions that can be confirmed or refuted by gathering data.

The following table summarizes the key steps of the scientific method as practiced in biology:

| Step | Description | Example (Plant Growth Study) |
|------|-------------|------------------------------|
| 1. Observation | Notice a phenomenon or pattern in nature | Plants near the window grow taller than those farther away |
| 2. Question | Formulate a specific, answerable question | Does light intensity affect the rate of plant stem elongation? |
| 3. Hypothesis | State a falsifiable, testable prediction | If light intensity increases, then stem elongation rate will increase |
| 4. Experiment | Design and conduct a controlled test | Grow identical seedlings under three light intensities for two weeks |
| 5. Data Analysis | Organize, graph, and apply statistics to results | Calculate mean stem length and standard deviation for each group |
| 6. Conclusion | Evaluate hypothesis against data; communicate findings | Stem elongation increased with light intensity; hypothesis supported |

### Hypothesis Testing and the Null Hypothesis

A **hypothesis** in science is not a guess — it is a specific, falsifiable prediction derived from prior observation or theory. A well-formed hypothesis specifies both the expected direction and the mechanism of a relationship. Notice the structure: "If [independent variable changes in this way], then [dependent variable will respond in this way], because [mechanistic reasoning]."

In statistical testing, biologists work with two complementary hypotheses. The **research hypothesis** (also called the alternative hypothesis, $H_a$) states that a real relationship or difference exists. The **null hypothesis** ($H_0$) states that any observed difference is due to chance alone — that the independent variable has no effect. Statistical tests are designed to evaluate the probability that the null hypothesis is true given the observed data. When that probability falls below a threshold (typically $p < 0.05$ in biology), we **reject the null hypothesis** and conclude that the relationship is statistically significant.

!!! mascot-thinking "Key Insight: Falsifiability"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Gregor thinking"/>

    Every scientific hypothesis must be falsifiable — meaning it must be possible, in principle, to obtain evidence that would prove it wrong. A claim like "some unknown force guides evolution" is not falsifiable and therefore not scientific. When you write hypotheses in college placement Biology labs, always ask yourself: "What result would convince me my hypothesis is wrong?" If you can't answer that question, revise your hypothesis.

### Controlled Experiments: Variables and Controls

The power of a controlled experiment lies in its ability to isolate the effect of a single variable while holding all other conditions constant. This isolation allows us to draw a causal conclusion: the independent variable caused the change in the dependent variable.

Three categories of variables must be understood and correctly managed in any experiment:

| Variable Type | Definition | Example |
|---------------|------------|---------|
| **Independent variable** | The factor deliberately manipulated by the experimenter | Light intensity (e.g., 100, 500, 1000 lux) |
| **Dependent variable** | The outcome measured to detect an effect | Stem elongation (mm per day) |
| **Controlled variables** | All other factors held constant across groups | Temperature, water, soil type, pot size, plant species |

A controlled experiment must include at least two groups: the **experimental group** (exposed to the independent variable) and the **control group** (not exposed, or exposed to the baseline condition). The control group provides the reference point against which the effect of the independent variable is measured. Without a control, it is impossible to distinguish the effect of the variable of interest from background variation.

**Replication** — performing the experiment on multiple independent subjects per group — is essential for statistical validity. A single plant responding to high light intensity could be an outlier. Ten plants showing the same response provides much stronger evidence.

### Quantitative Reasoning and Statistical Tools

Biology is a quantitative science. Raw data collected from an experiment — a column of numbers representing enzyme activity, leaf length, or population size — cannot be interpreted by inspection alone. Statistical tools transform raw numbers into meaningful statements about the biological world, with an explicit assessment of how much confidence we should place in our conclusions.

Two statistical measures are central to college placement Biology: **standard deviation** and the **chi-square test**. Both will appear throughout the course and on the college placement exam.

!!! mascot-encourage "You've Got This!"
    <img src="../../img/mascot/encouraging.png" class="mascot-admonition-img" alt="Gregor encouraging"/>
    Statistics can feel intimidating at first — I know that feeling well! But here's the truth: you only need two statistical tools for the entire college placement Biology course, and both have a clear biological purpose. Standard deviation tells you how variable your measurements are. Chi-square tells you whether your genetic ratios match what Mendel's laws predict. Master these two tools early and you will have a real advantage on free-response questions.

### Standard Deviation

#### Diagram: Standard Deviation

<iframe src="../../sims/standard-deviation/main.html" width="100%" height="525px" scrolling="no"></iframe>
[View the Standard Deviation Visualization MicroSim Fullscreen](../../sims/standard-deviation/main.html)

**Standard deviation** ($s$ or $\sigma$) measures the spread of data around the mean. A small standard deviation indicates that data points cluster tightly around the average; a large standard deviation indicates high variability. In biology, high variability often reflects genuine biological diversity, measurement error, or the influence of uncontrolled variables.

The formula for sample standard deviation is:

$$
s = \sqrt{\frac{\sum_{i=1}^{n}(x_i - \bar{x})^2}{n - 1}}
$$

Where $x_i$ is each individual measurement, $\bar{x}$ is the sample mean, and $n$ is the number of observations. The denominator $n - 1$ (rather than $n$) corrects for the fact that we are estimating a population parameter from a sample.

In college placement Biology, standard deviation is typically used to add **error bars** to bar graphs and line graphs. When the error bars of two groups do not overlap, it suggests (though does not prove) that the difference between the groups is statistically significant. On the college placement exam, you may be asked to draw error bars or interpret whether overlapping bars indicate a meaningful difference.

### The Chi-Square ($\chi^2$) Statistical Test

The **chi-square test** is used to determine whether observed counts differ significantly from expected counts — the kind of question that arises naturally in genetics. If you cross two heterozygous parents ($Aa \times Aa$), Mendel's laws predict a 3:1 phenotypic ratio in the offspring. If your actual cross yields 290 dominant and 110 recessive offspring out of 400 total, is that close enough to the expected 300:100 ratio to be consistent with Mendel's prediction, or is the deviation suspiciously large?

The chi-square statistic is calculated as:

$$
\chi^2 = \sum \frac{(O - E)^2}{E}
$$

Where $O$ is the observed count and $E$ is the expected count for each category. The larger the $\chi^2$ value, the greater the discrepancy between observed and expected data.

The $\chi^2$ value is then compared against a **critical value** from a chi-square distribution table, using **degrees of freedom** equal to the number of categories minus one ($df = n_{categories} - 1$). If $\chi^2$ exceeds the critical value at $p = 0.05$, the null hypothesis is rejected — meaning the deviation from expected ratios is too large to be explained by chance alone.

| Observed ($O$) | Expected ($E$) | $(O - E)$ | $(O - E)^2$ | $(O - E)^2 / E$ |
|----------------|----------------|-----------|-------------|-----------------|
| 290 (dominant) | 300 | −10 | 100 | 0.33 |
| 110 (recessive) | 100 | +10 | 100 | 1.00 |
| **Total** | **400** | | | $\chi^2 = 1.33$ |

With 1 degree of freedom and $\chi^2 = 1.33$, the critical value at $p = 0.05$ is 3.84. Since $1.33 < 3.84$, we **fail to reject the null hypothesis** — the data are consistent with a 3:1 Mendelian ratio.

#### Diagram: Chi-Square Test Calculator MicroSim

<iframe src="../../sims/chi-square-calculator/main.html" width="100%" height="875" scrolling="no"></iframe>

*[View the Chi-Square Test Calculator MicroSim Fullscreen](../../sims/chi-square-calculator/main.html)*

<details markdown="1">
<summary>Chi-Square Test Calculator MicroSim</summary>
Type: microsim
**sim-id:** chi-square-calculator<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Level: Apply (L3)
Bloom Verb: calculate
Learning Objective: Students will calculate the chi-square statistic from observed and expected genetic cross data, compare the result to a critical value table, and determine whether to reject the null hypothesis.

Instructional Rationale: An Apply-level objective requires students to actively execute the procedure with their own input values. A step-through calculator that shows each computational stage helps learners internalize the formula rather than treating it as a black box.

Canvas layout:
- Top section (input area): Two rows (for two categories, e.g., dominant and recessive) with editable text fields for Observed counts. Expected counts are automatically calculated from the total and a ratio selector.
- Middle section: Step-by-step calculation table that populates as values are entered, showing O, E, (O−E), (O−E)², and (O−E)²/E for each row, with χ² total at the bottom.
- Bottom section: Decision panel showing the χ² critical value table for df = 1 (critical value = 3.84 at p = 0.05), a highlighted comparison ("Your χ² = X.XX vs. critical value 3.84"), and a conclusion statement in colored text (green = fail to reject null; red = reject null).

Interactive controls:
- Number inputs: Observed count for each category (default: 290 dominant, 110 recessive)
- Ratio selector dropdown: "3:1", "1:2:1", "9:3:3:1" (adds/removes rows dynamically)
- Button: "Calculate χ²" — triggers step-by-step population of the table
- Button: "Reset" — clears all inputs to defaults
- Checkbox: "Show worked explanation" — displays a narrative paragraph interpreting the result

Default parameters:
- Observed: 290 dominant, 110 recessive (monohybrid cross example)
- Ratio: 3:1
- Total: auto-calculated from observed counts

Data Visibility Requirements:
Stage 1: Show raw observed counts entered by user
Stage 2: Show calculated expected counts based on ratio and total
Stage 3: Show (O−E) and (O−E)² for each row
Stage 4: Show (O−E)²/E for each row and the sum (χ²)
Stage 5: Show critical value comparison and accept/reject decision with plain-language explanation

Color scheme:
- Input fields: light blue background
- Calculation table: white with alternating row shading
- Reject null: red text (#D32F2F)
- Fail to reject null: green text (#388E3C)
- χ² total row: bold, dark gray

Must be fully responsive — all elements reposition when canvas width changes.
</details>

---

### Data Interpretation and Graph Construction

Collecting data is only half the work; communicating and interpreting it is equally important. In college placement Biology, you will construct and analyze several types of graphs. The choice of graph type depends on the nature of the data and the relationship you are trying to show.

| Graph Type | When to Use | X-Axis | Y-Axis | Example |
|------------|-------------|--------|--------|---------|
| Bar graph | Comparing discrete categories | Categories (groups) | Mean value ± SD | Enzyme activity at different pH values |
| Line graph | Showing continuous trends over time | Time or continuous variable | Measured value | Population size over years |
| Scatter plot | Showing correlation between two variables | One quantitative variable | Another quantitative variable | Body mass vs. metabolic rate |
| Histogram | Showing frequency distribution | Measurement bins | Frequency or count | Leaf lengths in a population |

When constructing any graph in college placement Biology, follow these conventions:

- Title the graph descriptively (e.g., "Effect of Temperature on Catalase Activity")
- Label both axes with the variable name **and units** (e.g., "Temperature (°C)")
- Scale axes consistently and appropriately — do not distort scales to exaggerate trends
- Include error bars (standard deviation or standard error) on bar graphs whenever possible
- Add a legend if multiple data series are plotted
- Never connect data points in a scatter plot unless a regression line is shown

A common college placement exam question asks you to "describe the data" in a graph. Trained biologists describe **trends** (direction of change), **magnitude** (by how much), and **anomalies** (any unexpected patterns). Avoid simply restating the axis labels — interpret what the numbers mean biologically.

### Systems Thinking and Models in Science

Biology increasingly studies not just individual components but the **systems** formed by their interactions. A cell is not just a collection of organelles; it is a system in which organelles interact through chemical signals, substrates, and energy flows. An ecosystem is not just a list of species; it is a dynamic network of energy and matter transfers.

**Systems thinking** means understanding that the behavior of a system emerges from the interactions among its parts — and that changing one part can ripple through the whole system in unexpected ways. Biologists use two especially important concepts from systems theory:

- **Feedback loops:** A circular causal pathway in which a system's output influences its own input. *Negative feedback* dampens deviation from a set point (e.g., thermoregulation, blood glucose regulation). *Positive feedback* amplifies a signal (e.g., nerve action potentials, labor contractions during childbirth).
- **Emergent properties:** Characteristics of a system that its individual components do not possess. Life itself is an emergent property — no single molecule is alive, yet the ordered interaction of molecules in a cell produces a living system.

**Models in science** are simplified representations of complex phenomena. A model is never a perfect replica of reality — it is a tool for generating predictions that can be tested. Models in biology range from conceptual diagrams (the fluid mosaic model of the cell membrane) to mathematical equations (the Hardy-Weinberg equilibrium equations) to physical structures (the Watson-Crick double helix model). The value of a model is judged by its predictive power: does it correctly predict what we observe when we run new experiments?

!!! mascot-tip "Gregor's Tip"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Gregor tip"/>
    On college placement free-response questions, you will often be asked to "use a model to predict" or "identify a limitation of this model." The key is to recognize that all models are simplifications. A limitation is something the model leaves out or gets wrong — for example, the Hardy-Weinberg model assumes no mutation, random mating, and infinite population size. Real populations violate all three assumptions, which is exactly why populations evolve!

---

## Part 2: Atomic Chemistry — The Building Blocks of Life

### Atomic Structure

Every substance in the universe — every protein, every lipid, every nucleotide — is made of **atoms**. An atom is the smallest unit of an element that retains the chemical properties of that element. Understanding atomic structure is essential for understanding how atoms bond to form the biological molecules that make life possible.

The atom consists of three subatomic particles:

| Particle | Location | Charge | Relative Mass |
|----------|----------|--------|---------------|
| Proton | Nucleus | +1 | 1 amu |
| Neutron | Nucleus | 0 | 1 amu |
| Electron | Electron shells | −1 | ~0 (negligible) |

The **atomic number** equals the number of protons in the nucleus — this number uniquely identifies the element. The **mass number** equals the total number of protons plus neutrons. **Isotopes** are atoms of the same element with different numbers of neutrons (and therefore different mass numbers). Some isotopes are radioactive, emitting particles or energy as the nucleus decays; radioactive isotopes are widely used in biological research (e.g., carbon-14 dating, radioactive tracing of metabolic pathways).

Electrons occupy discrete **electron shells** (also called energy levels) surrounding the nucleus. The first shell holds up to 2 electrons; the second and third shells hold up to 8 electrons each. The outermost occupied shell is called the **valence shell**, and the electrons in it — **valence electrons** — determine the chemical behavior of the atom. An atom with a full valence shell (like helium or neon) is chemically inert. Atoms with incomplete valence shells form chemical bonds by sharing or transferring electrons to achieve a more stable configuration.

#### Diagram: Atomic Structure Explorer MicroSim

<iframe src="../../sims/atomic-structure-explorer/main.html" width="100%" height="540" scrolling="no"></iframe>

*[View Fullscreen](../../sims/atomic-structure-explorer/main.html)*

<details markdown="1">
<summary>Atomic Structure Explorer MicroSim</summary>
Type: microsim
**sim-id:** atomic-structure-explorer<br/>
**Library:** p5.js<br/>
**Status:** Complete

Bloom Level: Understand (L2)
Bloom Verb: explain
Learning Objective: Students will explain the relationship between an element's atomic number, electron configuration, valence electrons, and its bonding behavior in biological molecules.

Instructional Rationale: An Understand/explain objective is best served by an interactive model where students can toggle between the six biologically important elements and see how the electron arrangement changes, making the link between structure and chemical behavior explicit and visual.

Canvas layout:
- Left panel (450 px): Atom diagram showing concentric circular electron shells around a nucleus. Electrons shown as colored dots; nucleus labeled with element symbol, atomic number, and mass number. Shell capacities labeled (shell 1: max 2; shell 2: max 8; shell 3: max 8).
- Right panel (250 px): Information panel showing element name, symbol, atomic number, mass number, number of valence electrons, and a 2–3 sentence description of the element's biological role.

Interactive controls:
- Element selector buttons for the six main elements of life: H, C, N, O, P, S
- Toggle button: "Show valence electrons only" — dims inner shell electrons and highlights outer shell
- Toggle button: "Show bonding capacity" — displays a count of how many covalent bonds this element typically forms

Atom diagrams for each element:
- H: 1 proton, 1 electron in shell 1 (1 valence electron, forms 1 bond)
- C: 6 protons, 6 electrons (2 in shell 1, 4 in shell 2; 4 valence electrons, forms 4 bonds)
- N: 7 protons, 7 electrons (2 in shell 1, 5 in shell 2; 5 valence electrons, forms 3 bonds)
- O: 8 protons, 8 electrons (2 in shell 1, 6 in shell 2; 6 valence electrons, forms 2 bonds)
- P: 15 protons, 15 electrons (2 in shell 1, 8 in shell 2, 5 in shell 3; 5 valence electrons)
- S: 16 protons, 16 electrons (2, 8, 6; 6 valence electrons, forms 2 bonds typically)

Color scheme:
- Nucleus: warm orange
- Shell 1 electrons: light blue
- Shell 2 electrons: medium blue
- Shell 3 electrons: dark blue
- Valence electron highlight: bright yellow with glow
- Background: white

Must be fully responsive. Electron shell radii scale proportionally to canvas width.

Information panel biological role text:
- H: "Hydrogen is the simplest and most abundant element in the universe. In biology, it forms covalent bonds with carbon in organic molecules and participates in hydrogen bonding, which is central to water's unique properties and DNA base pairing."
- C: "Carbon's four valence electrons allow it to form four stable covalent bonds, making it the structural backbone of all organic molecules. Carbon can bond to itself repeatedly, forming chains, rings, and branched structures of virtually unlimited complexity."
- N: "Nitrogen is found in every amino acid (as the amino group, −NH₂) and in every nucleotide base in DNA and RNA. Its three valence electrons available for bonding contribute to the directionality and specificity of nitrogen-containing functional groups."
- O: "Oxygen's high electronegativity makes it a strong electron-puller in covalent bonds, generating the polarity that gives water its cohesive and solvent properties. Oxygen is central to cellular respiration as the final electron acceptor in the electron transport chain."
- P: "Phosphorus forms the phosphate backbone of DNA and RNA and is the central atom of ATP, the cell's primary energy currency. The high-energy bonds in ATP store and release energy to power cellular work."
- S: "Sulfur appears in two amino acids — cysteine and methionine — and forms disulfide bridges (S–S bonds) between cysteine residues that help stabilize the three-dimensional structure of many proteins."
</details>

---

### The Elements of Life

Although the periodic table contains over 100 elements, life on Earth is built from a surprisingly small set. Approximately 96% of the mass of living organisms consists of just four elements, with a handful more contributing most of the remaining 4%.

| Element | Symbol | % of Human Body Mass | Primary Biological Role |
|---------|--------|----------------------|-------------------------|
| Oxygen | O | ~65% | Water, cellular respiration, organic molecules |
| Carbon | C | ~18% | Backbone of all organic molecules |
| Hydrogen | H | ~10% | Water, organic molecules, energy carriers (NADH, FADH₂) |
| Nitrogen | N | ~3% | Amino acids, nucleotide bases, ATP |
| Phosphorus | P | ~1% | DNA/RNA backbone, ATP, phospholipids |
| Sulfur | S | ~0.3% | Amino acids (cysteine, methionine), enzyme active sites |
| Calcium, Potassium, Sodium, Chlorine, Magnesium, Iron | Various | ~1.7% total | Signaling, nerve conduction, hemoglobin, chlorophyll |

The mnemonic **CHONPS** (Carbon, Hydrogen, Oxygen, Nitrogen, Phosphorus, Sulfur) summarizes the six most biologically critical elements. Carbon's unique ability to form four stable covalent bonds with itself and other atoms is the chemical foundation of **organic chemistry** — the chemistry of carbon-containing compounds — and, by extension, the molecular basis of life.

### Chemical Bonds: How Atoms Connect

Atoms form bonds because doing so gives them a more stable electron configuration — specifically, a full valence shell. The nature of the bond depends on whether electrons are **transferred** or **shared** between atoms, and whether sharing is **equal** or **unequal**. These distinctions produce the three major categories of bonds in biology: ionic, covalent, and hydrogen bonds.

| Bond Type | Nature of Interaction | Relative Strength | Biological Examples |
|-----------|----------------------|-------------------|---------------------|
| Ionic bond | Electron transfer; attraction between ions | Strong in dry conditions; weak in water | $\ce{NaCl}$ in salt; $\ce{Na+}$ and $\ce{Cl-}$ ions in cells |
| Covalent bond (nonpolar) | Equal sharing of electrons | Very strong | C–C and C–H bonds in hydrocarbons; fatty acid tails |
| Covalent bond (polar) | Unequal sharing of electrons | Very strong | O–H in water $\ce{H2O}$; N–H in amino acids |
| Hydrogen bond | Electrostatic attraction between $\delta+$ H and $\delta-$ atom | Weak individually; strong in aggregate | DNA base pairing; water cohesion; protein secondary structure |
| Van der Waals forces | Induced dipole attractions | Very weak individually | Hydrophobic core packing in proteins; gecko toe adhesion |

### Ionic Bonds

An **ionic bond** forms when one atom transfers one or more electrons to another atom, creating oppositely charged particles called **ions**. The atom that loses electrons becomes a positively charged **cation** (e.g., $\ce{Na+}$); the atom that gains electrons becomes a negatively charged **anion** (e.g., $\ce{Cl-}$). The electrostatic attraction between cation and anion constitutes the ionic bond.

Consider sodium chloride (table salt):

$$\ce{Na -> Na+ + e-}$$

$$\ce{Cl + e- -> Cl-}$$

$$\ce{Na+ + Cl- -> NaCl}$$

Sodium has one valence electron that it "wants" to lose (giving it a full second shell); chlorine has seven valence electrons and "wants" to gain one (completing its third shell). The resulting ions are both more stable than the original neutral atoms.

In the dry crystal lattice, ionic bonds are extremely strong — $\ce{NaCl}$ has a melting point of 801°C. In aqueous solution, however, water molecules surround and separate the ions through **hydration**, dramatically weakening the ionic interaction. This is why biological ionic compounds readily dissociate in the cell's aqueous environment, producing free ions that carry electric charge and mediate nerve impulses, enzyme activity, and osmotic balance.

### Covalent Bonds: Sharing Electrons

A **covalent bond** forms when two atoms share one or more pairs of electrons. Covalent bonds are the strongest bonds in biological systems — they typically require temperatures well above 200°C or the action of specific enzymes to break. They form the stable scaffolding of all organic molecules.

**Bond polarity** depends on the relative **electronegativity** of the bonded atoms — electronegativity being a measure of how strongly an atom attracts electrons toward itself. When two atoms of similar electronegativity share electrons (e.g., $\ce{C-C}$, $\ce{C-H}$), the sharing is approximately equal, producing a **nonpolar covalent bond** with no significant charge separation. When atoms of different electronegativity share electrons (e.g., $\ce{O-H}$, $\ce{N-H}$), the more electronegative atom draws the shared electrons closer, creating partial charges: $\delta+$ on the less electronegative atom and $\delta-$ on the more electronegative atom. This is a **polar covalent bond**.

Electronegativity values increase moving right and up on the periodic table. Oxygen (3.5) and nitrogen (3.0) are highly electronegative; carbon (2.5) and hydrogen (2.1) are less so. This difference is what makes water — with its two polar $\ce{O-H}$ bonds — such a remarkable solvent. The partial charges on water molecules allow them to form hydrogen bonds with each other and with other polar molecules, giving water its exceptional properties: high specific heat, high heat of vaporization, cohesion, adhesion, and solvent capacity.

### Hydrogen Bonds: Life's Essential Weak Force

A **hydrogen bond** is an electrostatic attraction between a hydrogen atom that is covalently bonded to an electronegative atom (O, N, or F) and a neighboring electronegative atom. The hydrogen carries a partial positive charge ($\delta+$); the nearby electronegative atom carries a partial negative charge ($\delta-$). The attraction between these partial charges is the hydrogen bond.

Hydrogen bonds are individually weak — approximately 20 times weaker than a covalent bond — but collectively powerful. In liquid water, each molecule can form up to four hydrogen bonds simultaneously (as both donor and acceptor). This extensive network of hydrogen bonds is responsible for water's unusually high boiling point, surface tension, and cohesion — all of which are biologically critical.

Hydrogen bonds are also indispensable to the structure of macromolecules:

- **DNA:** Complementary base pairs are held together by hydrogen bonds — A–T pairs have two hydrogen bonds; G–C pairs have three. The specificity of these base-pairing interactions is the molecular basis of genetic information storage and replication.
- **Proteins:** Hydrogen bonds between backbone amide ($\ce{N-H}$) and carbonyl ($\ce{C=O}$) groups stabilize the $\alpha$-helix and $\beta$-sheet secondary structures.
- **Enzymes and substrates:** Hydrogen bonds contribute to the specificity of enzyme-substrate interactions in the active site.

### Van der Waals Forces

**Van der Waals forces** (also called London dispersion forces) arise from transient, induced dipoles. Even in nonpolar molecules, the constant motion of electrons creates momentary, fleeting regions of slight positive and negative charge. These transient dipoles can induce complementary dipoles in neighboring atoms or molecules, generating a brief attractive force.

Van der Waals forces are the weakest of all molecular interactions — each individual interaction is negligible. Their biological significance comes from the principle that **complementary molecular surfaces** can generate large numbers of simultaneous van der Waals contacts. When a protein folds, the nonpolar side chains in its interior pack together tightly; the sum of thousands of van der Waals contacts provides substantial stabilization of the folded structure. Similarly, when a substrate fits precisely into an enzyme's active site, van der Waals forces complement hydrogen bonds and ionic interactions to produce the tight, specific binding required for catalysis.

#### Diagram: Chemical Bond Visualizer

<iframe src="../../sims/chemical-bond-visualizer/main.html" width="100%" height="540" scrolling="no"></iframe>

*[View Fullscreen](../../sims/chemical-bond-visualizer/main.html)*

<details markdown="1">
<summary>Chemical Bond Visualizer</summary>
Type: infographic
**sim-id:** chemical-bond-visualizer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Level: Analyze (L4)
Bloom Verb: compare
Learning Objective: Students will compare and contrast ionic, polar covalent, nonpolar covalent, hydrogen, and van der Waals bonds by examining electron distribution, relative strength, and biological examples for each bond type.

Purpose: Present all five bond types side by side in an interactive comparison panel. Clicking each bond type reveals an animated molecule example and a summary card showing electron distribution, bond strength, and biological relevance.

Layout: Five equal-width columns, one per bond type. Each column has:
1. Bond type name (large header text)
2. Small animated molecular diagram (see below)
3. Strength indicator bar (visual relative scale)
4. "Click for examples" button

Molecular diagram animations (per column):
- Ionic bond: Na+ and Cl- ions shown as circles; electron dot moves from Na to Cl; both ions labeled with charge
- Nonpolar covalent: Two C atoms sharing two electrons; electron cloud shown as symmetric oval; no partial charges
- Polar covalent: H2O molecule; electron cloud pulled toward O; δ+ on H atoms, δ− on O; bond angle ~104.5°
- Hydrogen bond: Two water molecules side by side; dashed blue line between δ+ H of one molecule and δ− O of the other
- Van der Waals: Two nonpolar molecules (shown as ovals); flickering electron distribution suggests induced dipoles; faint attraction arrow

Strength indicator bars (relative scale, same unit):
- Ionic: 100 (in dry conditions) / 5 (in water) — show both
- Nonpolar covalent: 95
- Polar covalent: 90
- Hydrogen bond: 15
- Van der Waals: 2

Summary card (shown on click):
- Bond type name
- Electron behavior (transferred / equally shared / unequally shared / electrostatic / induced dipole)
- Strength range (kcal/mol, approximate)
- Biological examples (2–3 bullet points)

Color scheme:
- Ionic column: orange (#FF9800)
- Nonpolar covalent: gray (#757575)
- Polar covalent: blue (#1565C0)
- Hydrogen bond: light blue (#4FC3F7)
- Van der Waals: light green (#81C784)
- Background: white; cards on light cream (#FFFDE7)

Interactive behavior:
- Clicking any column highlights it and displays the summary card below the diagram
- Hovering a column border shows a brief tooltip: "Click to explore [bond type]"
- "Compare two bonds" button: select any two columns; a 2-column comparison table appears below

Responsive: columns stack vertically (one per row) when canvas width < 600 px.
</details>

---

## Chapter Summary

### Key Takeaways

This chapter established the conceptual and chemical foundation for everything that follows in college placement Biology. The following points summarize the most important ideas:

**Scientific Foundations:**

- The scientific method is an iterative cycle, not a linear sequence; results generate new hypotheses.
- A well-formed hypothesis is falsifiable, specific, and mechanistically grounded.
- Controlled experiments require an independent variable, a dependent variable, controlled variables, a control group, and replication.
- Standard deviation measures data variability; its formula is $s = \sqrt{\sum(x_i - \bar{x})^2 / (n-1)}$.
- The chi-square test ($\chi^2 = \sum (O-E)^2/E$) determines whether observed counts differ significantly from expected counts; the critical value at $p = 0.05$ for $df = 1$ is 3.84.
- Graphs must have labeled axes (with units), titles, and error bars where data variability is important.
- Systems thinking reveals emergent properties and feedback loops that cannot be understood by studying components in isolation.
- Models are simplified representations that generate testable predictions; all models have limitations.

**Atomic Chemistry:**

- Atoms consist of protons and neutrons in the nucleus, with electrons in shells; the valence shell determines bonding behavior.
- The six elements of life — **CHONPS** — account for approximately 98% of living matter by mass.
- Ionic bonds involve electron transfer and are weakened in aqueous solution; they produce ions that conduct electricity and regulate osmosis.
- Covalent bonds involve electron sharing; nonpolar bonds (equal sharing) and polar bonds (unequal sharing) differ in charge distribution and biological behavior.
- Hydrogen bonds are individually weak but collectively stabilize water structure, DNA base pairing, and protein secondary structure.
- Van der Waals forces arise from transient induced dipoles and contribute to protein folding and enzyme-substrate specificity through complementary surface packing.

!!! mascot-celebration "Excellent Work!"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Gregor celebrating"/>
    You've just built the analytical and chemical foundation that underlies every remaining chapter in this course. The scientific method will guide how you design and evaluate experiments. Standard deviation and chi-square will appear again in Unit 5 when we analyze genetic crosses. Covalent bonds, hydrogen bonds, and van der Waals forces will show up in virtually every unit — in water, in macromolecules, in enzymes, in DNA. Every concept we covered here is a tool you'll reach for again. Well done, investigators — onward!

---

??? question "Self-Check: What type of bond holds together the two strands of a DNA double helix?"
    The two strands of DNA are held together by **hydrogen bonds** between complementary nitrogenous bases: adenine (A) pairs with thymine (T) via two hydrogen bonds, and guanine (G) pairs with cytosine (C) via three hydrogen bonds. The individual strands are held together internally by covalent bonds in the sugar-phosphate backbone. This distinction matters enormously for DNA replication: hydrogen bonds are weak enough to be "unzipped" by helicase enzymes without breaking the covalent backbone.

??? question "Self-Check: In a chi-square test of a 3:1 genetic ratio with 400 total offspring, what are the expected counts for dominant and recessive phenotypes?"
    For a 3:1 ratio with 400 total offspring:
    Expected dominant = 400 × 3/4 = **300**
    Expected recessive = 400 × 1/4 = **100**
    These are the $E$ values you would use in the formula $\chi^2 = \sum (O-E)^2/E$.

[See Annotated References](./references.md)
