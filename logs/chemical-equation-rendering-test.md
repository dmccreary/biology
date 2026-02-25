# Chemical Equation Rendering — Design Decision Log

**Date:** 2026-02-25
**Status:** Confirmed working, user verified
**Topic:** MathJax + mhchem delimiter strategy for AP Biology intelligent textbook

---

## Decision Summary

**Use `$...$` (inline) and `$$...$$` (block) delimiters exclusively in all markdown content files. Never use backslash notation (`\(...\)` or `\[...\]`) in `.md` files.**

---

## Problem Statement

AP Biology requires two categories of mathematical notation:

1. **Standard math** — equations such as Hardy-Weinberg ($p^2 + 2pq + q^2 = 1$), Michaelis-Menten kinetics, logistic growth, and free energy ($\Delta G = \Delta H - T\Delta S$)
2. **Chemical notation** — molecular formulas, balanced reactions, equilibrium arrows, and ionic species that appear throughout all 8 AP Biology units

The challenge is that MkDocs Material uses Python-Markdown, which processes the document before MathJax receives it. Writing backslash delimiters (`\[`, `\(`) directly in markdown creates a fragile pipeline: Python-Markdown may interpret `\[` as an escaped bracket and emit a literal `[`, which MathJax never sees. Chemistry formulas that include square brackets — such as the iron complex `[Fe(CN)6]^{3-}` or the bicarbonate ion `[HCO3-]` — are especially vulnerable because they look like Markdown link syntax `[text](url)` to the parser.

---

## Solution: pymdownx.arithmatex as a Pre-Processing Shield

The `pymdownx.arithmatex` extension (configured with `generic: true` in `mkdocs.yml`) solves the problem by intercepting `$...$` and `$$...$$` delimiters **before** Python-Markdown processes the document body. The math content is wrapped in protected spans and divs, converted to backslash form internally, and then handed to MathJax:

```
Author writes      arithmatex intercepts    MathJax receives
─────────────      ─────────────────────    ────────────────
$\ce{H2O}$    →   <span class=             →   \(\ce{H2O}\)
                   "arithmatex">
                   \(\ce{H2O}\)</span>
```

Because arithmatex wraps the content before Markdown link parsing occurs, any `[]` or `()` inside a chemical formula is never seen as link syntax.

The backslash delimiters in `mathjax-config.js` are what MathJax ultimately receives — they are never written by hand. This distinction is what makes the approach safe and what makes the "never write backslash in markdown" rule absolute rather than a mere preference.

---

## mhchem Package

Standard MathJax does not include `\ce{}` (chemical equation notation) by default. The `mhchem` package must be explicitly loaded. This required two additions to `docs/js/mathjax-config.js`:

```javascript
window.MathJax = {
  loader: {
    load: ['[tex]/mhchem']
  },
  tex: {
    packages: {'[+]': ['mhchem']},
    inlineMath: [['\\(', '\\)']],
    displayMath: [['\\[', '\\]']]
  }
};
```

The full `tex-chtml.js` bundle (already loaded via CDN in `mkdocs.yml`) includes the mhchem extension — it only needs to be declared, not separately fetched.

`mhchem` provides the `\ce{}` command, which handles:
- Automatic subscripting: `\ce{H2O}` → H₂O (no `_` needed)
- Reaction arrows: `->`, `<=>`, `<->`
- Conditions above/below arrows: `->[\text{light}]`
- Ion charges: `\ce{Fe^{3+}}`, `\ce{OH-}`
- Isotopes, radicals, and complex ions

---

## Test Coverage

The test page `docs/learning-graph/chemical-equation-tests.md` covers the 10 most common AP Biology equations, selected to exercise every rendering feature:

| Equation | Primary feature tested |
|---|---|
| Photosynthesis | `\ce{}` with conditions above arrow |
| Cellular respiration | `\ce{}` with embedded text |
| ATP hydrolysis | Mixed `\ce{}` and `$\Delta G$` on same line |
| Water ionization / pH | Negative exponents, `\log`, ion charges |
| Carbonic acid buffer | Double equilibrium `<=>`, Henderson-Hasselbalch fraction |
| NAD⁺/NADH redox | Electron notation, half-reactions |
| Glycolysis net | Multi-compound `\ce{}` with subscripts |
| Lactic acid fermentation | Pyruvate ↔ lactate interconversion |
| Nitrogen fixation | Large integer coefficients, ATP in `\ce{}` |
| Michaelis-Menten | Mixed `\ce{}` rate constants + `\frac{}{}`, `V_{\max}` |

---

## Authoring Rules Encoded in CLAUDE.md

The following rules were added to `CLAUDE.md` for all future chapter content generation:

1. **Always use `$...$` for inline math and `$$...$$` for block math.**
2. **Always use `$\ce{...}$` for chemical formulas and reactions.**
3. **Never write `\(...\)` or `\[...\]` directly in any `.md` file.**
4. **Never use plain text subscripts** — write `$\ce{CO2}$`, not `CO2`.

These rules are categorized as a "Critical Rule" with a ⚠️ warning in CLAUDE.md to ensure future AI-generated chapter content respects them.

---

## Outcome

User confirmed the design works correctly. The test page renders all 10 equations cleanly, including equilibrium arrows, ion charges, conditions above arrows, Greek letters, and fractions. The rendering checklist at the bottom of the test page provides a quick visual verification reference for future development.
