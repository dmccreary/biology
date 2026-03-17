---
title: Chi-Square Test Calculator
description: Interactive step-by-step calculator for the chi-square statistical test, showing all computation stages and an accept/reject decision for college placement Biology genetic cross data.
image: /sims/chi-square-calculator/chi-square-calculator.png
og:image: /sims/chi-square-calculator/chi-square-calculator.png
twitter:image: /sims/chi-square-calculator/chi-square-calculator.png
social:
   cards: false
---

# Chi-Square Test Calculator

<iframe src="main.html" height="875" width="100%" scrolling="no"></iframe>

[View Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

This calculator walks students through every computational stage of the
chi-square (χ²) statistical test — the primary tool college placement Biology uses to evaluate
whether observed genetic cross results match Mendelian expected ratios.
Students enter their own observed counts, choose an expected ratio (3:1, 1:2:1,
or 9:3:3:1), and watch the step-by-step table populate with O, E, (O−E),
(O−E)², and (O−E)²/E values before revealing the χ² total, critical value
comparison, and a color-coded accept/reject verdict.

## How to Use

1. **Choose an expected ratio** from the dropdown (default: 3:1 monohybrid dominant).
2. **Enter observed counts** in the blue input cells — expected counts update automatically.
3. Click **Calculate χ²** to reveal the full step-by-step calculation and decision.
4. Check **Show worked explanation** for a plain-language narrative of the result.
5. Click **Reset** to restore the default values and try a new scenario.
6. Switch ratios (1:2:1 or 9:3:3:1) to practice dihybrid and codominant crosses.

## Key Concepts

| Term | Meaning |
|------|---------|
| **Observed (O)** | The actual counts from your experiment |
| **Expected (E)** | Counts predicted by the Mendelian ratio, scaled to your sample size |
| **(O − E)² / E** | Each category's contribution to the χ² statistic |
| **χ² statistic** | Sum of all (O − E)² / E values |
| **Degrees of freedom (df)** | Number of categories minus one |
| **Critical value** | The χ² threshold at p = 0.05; exceeding it → reject null hypothesis |

## Iframe Embed Code

```html
<iframe src="https://dmccreary.github.io/biology/sims/chi-square-calculator/main.html"
        height="560"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level

9–12 (college placement Biology, Unit 1 and Unit 5)

### Duration

20–30 minutes

### Prerequisites

- Understanding of Mendelian inheritance and phenotypic ratios
- Familiarity with mean and basic descriptive statistics
- Ability to read and interpret a simple data table

### Learning Objective

Students will calculate the chi-square statistic from observed and expected
genetic cross data, compare the result to a critical value table, and determine
whether to reject the null hypothesis.

### Activities

1. **Launch** (3 min): Open the calculator with default values (290 dominant,
   110 recessive, 3:1 ratio). Before clicking Calculate, ask students:
   *"Do these numbers look close to the expected 300:100 split? How would you
   decide if the difference is 'too big' to be chance?"*

2. **Guided walkthrough — 3:1** (7 min): Click Calculate χ² together. Walk
   through each column in the step-by-step table, pausing at (O−E)²/E to
   discuss why we square the difference. Point out the highlighted row in the
   critical value table. Read the verdict aloud.

3. **Student practice — modify values** (5 min): Have students change the
   observed counts to something clearly non-Mendelian (e.g., 350 dominant,
   50 recessive) and recalculate. Ask: *"What changed? Why did the verdict flip?"*

4. **Switch to 9:3:3:1** (7 min): Select the dihybrid ratio. Discuss why df
   increases to 3 and why the critical value rises to 7.82. Have students enter
   realistic dihybrid counts and interpret the result.

5. **Worked explanation** (3 min): Check the "Show worked explanation" box.
   Have students compare the narrative to their own interpretation. Discuss
   what "fail to reject the null hypothesis" means — it does **not** mean the
   hypothesis is proven true.

### Assessment

- Given a table of observed dihybrid cross results, students calculate χ² by
  hand and verify using the sim.
- Explain in one sentence why a large χ² value leads to rejecting the null
  hypothesis.
- Describe what degrees of freedom represents in a chi-square test.
- Predict whether changing the sample size (N) while keeping the same proportions
  will change the χ² value, and test the prediction using the calculator.

### Common Misconceptions

- **"Fail to reject = accept the hypothesis"** — failure to reject only means
  the data are consistent with the null; it does not prove Mendelian ratios.
- **"Bigger sample always gives the same χ²"** — doubling N while keeping
  proportions constant doubles χ², making it easier to detect real deviations.
- **"df = number of categories"** — degrees of freedom is categories **minus one**.

## References

1. [Chi-Squared Test — Wikipedia](https://en.wikipedia.org/wiki/Chi-squared_test)
2. [Mendelian Inheritance — Wikipedia](https://en.wikipedia.org/wiki/Mendelian_inheritance)
3. [college placement Biology Course and Exam Description — College Board](https://apcentral.collegeboard.org/courses/ap-biology)
