# Quiz Generation Quality Report

Generated: 2026-07-21
Execution Mode: Serial (2 agents — first agent completed chapters 4-13 before a
transient API connection error; a second agent completed chapters 14-20)

## Overall Statistics

- **Total Chapters:** 20
- **Chapters with Quizzes (this run):** 17 (chapters 4-20; chapters 1-3 already had quizzes)
- **Total New Questions:** 170
- **Avg Questions per Chapter:** 10

## Per-Chapter Summary (Chapters 4-20)

| Chapter | Questions | Answer Distribution (A/B/C/D) |
|---------|-----------|--------------------------------|
| 4. Cell Organization and Organelles | 10 | 3/3/2/2 |
| 5. Cell Membranes and Transport | 10 | 3/2/3/2 |
| 6. Thermodynamics and Enzyme Kinetics | 10 | 2/3/2/3 |
| 7. Photosynthesis | 10 | 3/2/2/3 |
| 8. Cellular Respiration and Fermentation | 10 | 3/2/3/2 |
| 9. Cell Signaling and Feedback | 10 | 3/2/2/3 |
| 10. The Cell Cycle, Mitosis, and Cancer | 10 | 3/2/2/3 |
| 11. Meiosis and Mendelian Genetics | 10 | 3/2/2/3 |
| 12. Non-Mendelian and Chromosomal Genetics | 10 | 3/2/3/2 |
| 13. The Central Dogma | 10 | 2/3/2/3 |
| 14. Mutations, Gene Regulation, and Biotechnology | 10 | 2/3/3/2 |
| 15. Evidence for Evolution | 10 | 3/2/3/2 |
| 16. Population Genetics and Hardy-Weinberg | 10 | 2/2/3/3 |
| 17. Speciation, Phylogenetics, and Macroevolution | 10 | 2/2/3/3 |
| 18. Population Ecology and Life History | 10 | 2/2/3/3 |
| 19. Community Ecology and Species Interactions | 10 | 2/3/2/3 |
| 20. Ecosystem Ecology and Conservation | 10 | 3/3/2/2 |

## Answer Balance (Chapters 4-20 Combined)

- A: 25.9% (44/170)
- B: 23.5% (40/170)
- C: 24.7% (42/170)
- D: 25.9% (44/170)

**Answer Balance Score:** Excellent — all options within the 20-30% target band.

## Bloom's Taxonomy Distribution

- Chapters 4-13 (intermediate tier): targeted 25% Remember / 30% Understand / 30% Apply / 15% Analyze
- Chapters 14-20 (advanced tier): targeted 15% Remember / 20% Understand / 25% Apply / 25% Analyze / 10% Evaluate / 5% Create; per-chapter counts came in at approximately 1-2 Remember, 2 Understand, 3 Apply, 2 Analyze, 1 Evaluate, 1 Create, matching the target distribution.
- Chapter 16 (Hardy-Weinberg) includes a quantitative p² + 2pq + q² = 1 calculation question.
- Chapter 17 includes a cladogram-construction Create-level question.
- Chapter 18 includes logistic-growth and mark-recapture quantitative Apply questions.
- Chapter 20 includes a ten-percent-rule quantitative Apply question.

## Format Validation

- All 17 new quiz.md files use the required format: level-4 question headers,
  `<div class="upper-alpha" markdown>` option lists, and `??? question "Show Answer"`
  admonitions with a **Concept Tested:** line.
- No "all of the above" / "none of the above" options were used.
- No broken "See:" links were introduced (links omitted entirely per instruction,
  since concept-page anchors could not be verified).
- `mkdocs build` completed successfully with the updated navigation; the only
  warnings were pre-existing unrelated TODO.md sim pages not in the nav.

## Navigation

`mkdocs.yml` updated to add a `Quiz:` entry under each of chapters 4-20, matching
the existing pattern used for chapters 1-3.
