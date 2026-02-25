---
title: Chemical Equation Rendering Pipeline
description: Interactive workflow diagram showing how markdown files are sequentially processed to render chemical equations and mathematical notation in MkDocs Material with MathJax and mhchem.
---

# Chemical Equation Rendering Pipeline

<iframe src="main.html" width="100%" height="1650px" scrolling="no"></iframe>

[Open Full Screen](main.html){ .md-button }

## Overview

This diagram traces the complete pipeline that transforms `$\ce{H2O}$` written
in a markdown file into a beautifully typeset chemical formula in the browser.
The pipeline passes through five distinct layers: authoring, Python extension,
build, browser loading, and MathJax rendering.

Hover over each node to read a detailed explanation of that step.

## Pipeline Steps

1. **Author writes .md** — Content is created using `$...$` and `$$...$$` delimiters
2. **arithmatex intercepts** — `pymdownx.arithmatex` captures `$` delimiters before Python-Markdown runs
3. **Protected spans** — Math content is wrapped in `<span class="arithmatex">` and converted to `\(...\)` internally
4. **Python-Markdown runs** — Processes headings, links, lists with math content safely isolated
5. **MkDocs assembles** — Builds the full HTML page with all CSS and JS references
6. **Browser loads** — Page loads with equations as unrendered protected spans
7. **mathjax-config.js** — Declares the `mhchem` package and sets delimiters; must load before the CDN bundle
8. **MathJax CDN** — Full `tex-chtml.js` bundle loads (full bundle required for mhchem)
9. **DOM scan** — MathJax finds all `\(...\)` and `\[...\]` spans queued for typesetting
10. **mhchem extension** — Processes `\ce{...}` into proper chemical notation with subscripts, arrows, and charges
11. **Rendered output** — Final typeset equations and chemical formulas appear to the reader

## Key Design Decision

The `pymdownx.arithmatex` extension (with `generic: true`) acts as a protective
shield. By intercepting `$` delimiters before Python-Markdown processes the
document, it prevents the Markdown parser from misinterpreting chemical formulas
that contain `[]` or `()` — which look identical to Markdown link syntax.

**The rule:** Always write `$` and `$$` in markdown. Never write `\(...\)` or
`\[...\]` directly in `.md` files.
