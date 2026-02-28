---
title: Condensation and Hydrolysis Reaction Simulator
description: Interactive p5.js MicroSim showing how monomers join via condensation (dehydration synthesis) and separate via hydrolysis, with water molecule tracking and energy indicators.
image: /sims/condensation-hydrolysis/condensation-hydrolysis.png
og:image: /sims/condensation-hydrolysis/condensation-hydrolysis.png
twitter:image: /sims/condensation-hydrolysis/condensation-hydrolysis.png
social:
   cards: false
quality_score: 0
---

# Condensation and Hydrolysis Reaction Simulator

<iframe src="main.html" height="532" width="100%" scrolling="no"></iframe>

[Run the Condensation and Hydrolysis Reaction Simulator Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

This simulation demonstrates the two fundamental reactions that build and break biological polymers:

- **Condensation (dehydration synthesis)** — two monomers join together, releasing a water molecule ($\ce{H2O}$). The $\ce{-OH}$ group from one monomer and the $\ce{H-}$ from the other combine to form water. This reaction requires energy input.

- **Hydrolysis** — a water molecule splits and its components ($\ce{-OH}$ and $\ce{H-}$) reattach to the broken bond ends, freeing a monomer. This reaction releases energy.

Students can observe these reactions across three polymer types: polypeptides (amino acids), polysaccharides (glucose units), and polynucleotides (nucleotides).

## How to Use

1. **Select a reaction type** from the dropdown: Polypeptide, Polysaccharide, or Polynucleotide
2. **Click "Add Monomer"** to watch a condensation reaction — observe the red-highlighted atoms that leave to form water
3. **Click "Hydrolyze"** to break the last bond — watch water split and reattach to the freed monomers
4. **Click "Build to 5"** to rapidly build a short polymer chain
5. **Watch the energy indicator** (upper right) to see whether energy is required or released
6. **Track the water counter** to see how many water molecules have been released

## Key Observations

- Each condensation reaction removes one $\ce{H2O}$ and requires energy
- Each hydrolysis reaction consumes one $\ce{H2O}$ and releases energy
- The number of bonds is always one less than the number of monomers
- The same $\ce{-OH}$ and $\ce{H-}$ pattern applies to all three polymer types

## Iframe Embed Code

```html
<iframe src="https://dmccreary.github.io/biology/sims/condensation-hydrolysis/main.html"
        height="532"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level
9-12 (AP Biology)

### Duration
10-15 minutes

### Prerequisites
- Understanding of atoms and chemical bonds
- Familiarity with the concept of monomers and polymers

### Activities

1. **Exploration** (5 min): Students select each reaction type and perform 3-4 condensation reactions, observing which atoms leave to form water.
2. **Guided Practice** (5 min): Students hydrolyze the chain back to individual monomers, noting the energy direction change and water consumption.
3. **Assessment** (5 min): Students answer: "Why is condensation also called dehydration synthesis?" and "Where does the water molecule come from during condensation?"

### Assessment

- Students can identify which atoms ($\ce{-OH}$ and $\ce{H-}$) leave to form water
- Students can explain why condensation requires energy and hydrolysis releases energy
- Students can predict how many water molecules are produced when building a 6-monomer chain

## References

1. [Dehydration synthesis and hydrolysis — Khan Academy](https://www.khanacademy.org/science/biology/macromolecules/synthesis-of-biological-macromolecules/a/dehydration-synthesis-and-hydrolysis)
2. Campbell Biology, 12th Edition — Chapter 5: The Structure and Function of Large Biological Molecules
