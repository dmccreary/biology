---
title: Blood Type Explorer
description: Quick calculator that lets students explore which ABO blood types can result from different parental combinations.
image: /sims/blood-type-explorer/blood-type-explorer.png
quality_score: 0
---

# Blood Type Explorer

<iframe src="main.html" height="680px" width="100%" scrolling="no"></iframe>

[Open the MicroSim in a new tab](main.html){ .md-button .md-button--primary }

## About This MicroSim

This lightweight calculator focuses on ABO inheritance patterns. Students select a mother’s and father’s phenotype (A, B, AB, O) plus their Rh factor, then click **Calculate Possible Types** to see which child phenotypes are predicted by simplified dominance rules (A and B dominant over O, codominant with each other). The Rh dropdowns are present so learners remember that ABO and Rh are inherited separately—teachers can extend discussion even though this prototype only displays ABO outcomes.

## How to Use

1. Choose the maternal and paternal ABO types using the dropdowns.  
2. (Optional) Set Rh values to prompt discussion about positive/negative inheritance.  
3. Click **Calculate Possible Types**. The result panel lists all possible child phenotypes (A, B, AB, O).  
4. Challenge students to justify each output using Punnett squares or allele notations (e.g., $I^A i$ × $I^B i$).

## Iframe Embed Code

```html
<iframe src="https://dmccreary.github.io/biology/sims/blood-type-explorer/main.html"
        height="520px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level
Grades 9–11 biology (intro genetics) or health science

### Duration
15 minutes (extendable with follow-up problems)

### Prerequisites
- Basic understanding of alleles and dominance
- Ability to interpret simple Punnett squares
- Vocabulary: phenotype vs. genotype, codominance, recessive

### Learning Objectives
- Determine possible offspring ABO phenotypes from specified parent phenotypes.
- Explain why Type O offspring require both parents to contribute the recessive allele.
- Differentiate between ABO inheritance and the Rh factor despite sharing clinical relevance.

### Lesson Sequence

1. **Engage (3 min)**  
   - Display the MicroSim and ask: “If one parent is Type AB and the other is Type O, which blood types could their child have?” Collect predictions before pressing the button.  
   - Emphasize that we’re treating Rh separately—note the dropdowns but explain they are placeholders to remind us of the second gene system.

2. **Explore (6 min)**  
   - Students work in pairs. Each pair selects three different parental combinations (e.g., A × A, A × B, O × B) and records the reported child phenotypes.  
   - Encourage them to sketch quick Punnett squares to justify each outcome. They should mark whether the MicroSim output matches their reasoning.

3. **Explain (4 min)**  
   - Whole-class debrief: Why does AB × AB never produce Type O? How does O × O constrain outcomes?  
   - Discuss where the simplified model falls short (e.g., Rh not calculated, genotype ambiguity within phenotype categories) and how that informs real-world blood typing or paternity questions.

4. **Extend (2+ min)**  
   - Assign a quick “mystery case” where students must identify at least one parental phenotype pair that could create a specified child phenotype ratio.  
   - Optionally, have them research how Rh inheritance differs and note how the UI could be expanded to include it.

### Assessment Ideas
- Exit slip: Provide a parent combination (e.g., Type B × Type O) and ask students to list possible child phenotypes plus the minimum allele contributions required.  
- Quick poll while running the MicroSim: “Can two Type B parents produce a Type A child?” Students answer, then verify with the tool and explain the logic.  
- Homework extension: Students capture screenshots of the MicroSim outputs that support their written explanations for a set of practice problems.

## References

1. American Red Cross. *Blood Types Explained* (2024).  
2. College Board AP Biology CED, Unit 5: Genetics.  
3. Mayo Clinic. [Blood Types: What They Mean and Why They Matter](https://www.mayoclinic.org/).
