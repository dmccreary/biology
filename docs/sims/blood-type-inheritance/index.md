---
title: Blood Type Inheritance Explorer
description: Interactive p5.js MicroSim for blood type inheritance explorer.
image: /sims/blood-type-inheritance/blood-type-inheritance.png
og:image: /sims/blood-type-inheritance/blood-type-inheritance.png
twitter:image: /sims/blood-type-inheritance/blood-type-inheritance.png
social:
   cards: false
quality_score: 0
---

# Blood Type Inheritance Explorer

<iframe src="main.html" height="782px" width="100%" scrolling="no"></iframe>

[Run the Blood Type Inheritance Explorer MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

This MicroSim visualizes the ABO blood type system, which combines multiple alleles ($I^A$, $I^B$, $i$) and codominance. Students select each parent’s phenotype, specify a genotype when needed, and the tool instantly populates a 2×2 Punnett square, antigen descriptions, and phenotype probability bars. Hovering over any square reveals the genotype, phenotype, and antibody profile, helping learners connect genetic combinations to transfusion compatibility.

## How to Use

1. Choose each parent’s phenotype from the left-hand dropdowns. If a phenotype has more than one genotype (e.g., Type A), a second dropdown lets you choose between homozygous and heterozygous options.  
2. Watch the Punnett square update automatically. Hover over any cell to read the explanatory tooltip about that genotype.  
3. Use the probability bars at the bottom to summarize offspring outcomes, and click “Random Parents” to generate practice scenarios. Encourage students to justify their answers verbally before revealing hover details.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/biology/sims/blood-type-inheritance/main.html"
        height="782px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level
11–12 (High School AP/advanced Biology)

### Duration
20–25 minutes (can expand with practice problems)

### Prerequisites
- Mendelian monohybrid Punnett squares
- Vocabulary: allele, phenotype, genotype, homozygous, heterozygous, codominance
- Awareness that ABO blood groups involve multiple alleles ($I^A$, $I^B$, $i$)

### Activities

1. **Engage (5 min)**  
   - Display the MicroSim with the default A × B parents. Ask students to predict the offspring phenotypes before touching the controls.  
   - Reveal the probability bars and have students compare predictions with the visual summary.

2. **Explore (8 min)**  
   - In pairs, students use the dropdowns to test all four parent phenotype combinations.  
   - They record which crosses require specifying a genotype (e.g., Type A being $I^A I^A$ or $I^A i$) and how each choice changes the Punnett square.  
   - Encourage use of the “Random Parents” button to generate surprise challenges and verbalize reasoning before hovering to confirm.

3. **Explain (7 min)**  
   - Facilitate a class debrief: highlight how codominance is shown when both $I^A$ and $I^B$ alleles appear (AB phenotype).  
   - Demonstrate a real case (e.g., an AB parent with an O parent) and ask students which blood types could **not** result. Use the antigen info panel to connect genotype to transfusion compatibility.

4. **Extend (Optional homework)**  
   - Provide short forensic or transfusion scenarios and have students screenshot the MicroSim configuration that supports their answer.  
   - Challenge students to design a “mystery parent” problem where the phenotype is known but genotype must be deduced by observing offspring probabilities.

### Assessment
- Quick exit ticket: Provide two parent phenotypes and ask students to submit a screenshot of the Punnett square plus a sentence explaining the probability of each phenotype.  
- Formative questioning while circulating: “Why does Type O only appear when both parents contribute `i`?”  
- Optional graded task: Students use the MicroSim to justify blood donation compatibility statements (e.g., “Can a Type AB patient receive Type O blood?”) referencing antigen info displayed in the panel.

## References

1. College Board. *college placement Biology Course and Exam Description* (2024). Multiple-allele inheritance expectations.  
2. American Red Cross. [Understanding ABO Blood Groups](https://www.redcrossblood.org/donate-blood/blood-types.html).  
3. Campbell, Reece et al. *Campbell Biology* (12th ed.). Pearson.
