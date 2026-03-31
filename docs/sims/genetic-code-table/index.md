---
title: Genetic Code Table Explorer
description: Interactive codon lookup table color-coded by amino acid property (hydrophobic, polar, positive, negative, stop) with mRNA translation input, random sequence generation, and point mutation simulation.
image: /sims/genetic-code-table/genetic-code-table.png
og:image: /sims/genetic-code-table/genetic-code-table.png
twitter:image: /sims/genetic-code-table/genetic-code-table.png
social:
   cards: false
quality_score: 0
---

# Genetic Code Table Explorer

<iframe src="main.html" height="520px" width="100%" scrolling="no"></iframe>

[View Genetic Code Table Explorer Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

This interactive genetic code table displays all 64 codons organized by first, second, and third base position. Each codon cell is color-coded by amino acid property: blue for hydrophobic, green for polar uncharged, red for positively charged, purple for negatively charged, and dark red for stop codons. Students can hover over any codon to see the amino acid name, abbreviation, and property classification. An mRNA input field translates sequences in real time, and "Random" and "Mutate" buttons let students explore how single nucleotide changes affect the resulting protein.

## How to Use

1. **Hover over any codon cell** in the table to see detailed information about the amino acid it encodes.
2. **Type an mRNA sequence** (using A, U, G, C) in the input field to see the translated amino acid sequence appear below.
3. **Click "Random"** to generate a random mRNA sequence and observe the translation.
4. **Click "Mutate"** to introduce a single random point mutation in the current sequence — watch how one nucleotide change can alter (or preserve) the protein.
5. **Read the property counts** to see the composition of hydrophobic, polar, charged, and stop codons in your translated sequence.

## Lesson Plan

### Grade Level
9-12 (college placement Biology)

### Duration
10-15 minutes

### Prerequisites
- Understanding of DNA and RNA nucleotide bases (A, U, G, C)
- Knowledge of the central dogma (DNA → mRNA → protein)
- Familiarity with codons as triplets of nucleotides

### Activities

1. **Exploration** (5 min): Hover over codons in each row. Notice that codons starting with U tend to encode hydrophobic amino acids. Find the start codon (AUG) and all three stop codons.
2. **Guided Practice** (5 min): Type `AUGUUUAAAGCUUGA` into the input field. Identify each amino acid. Then click "Mutate" three times and record which mutations are silent (synonymous) vs. which change the amino acid (nonsynonymous).
3. **Assessment** (5 min): Explain why the genetic code is described as "degenerate" (redundant). Use the table to find an amino acid encoded by six different codons and one encoded by only one codon.

### Assessment
- Can students use the codon table to translate a short mRNA sequence into amino acids?
- Can students explain why some point mutations are silent while others change the protein?
- Can students identify the start codon, stop codons, and the concept of codon degeneracy?

## References

1. [Genetic code - Wikipedia](https://en.wikipedia.org/wiki/Genetic_code)
2. [Codon usage bias - Wikipedia](https://en.wikipedia.org/wiki/Codon_usage_bias)
3. [Point mutation - Wikipedia](https://en.wikipedia.org/wiki/Point_mutation)
