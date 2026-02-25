---
title: Chemical Equation Rendering Pipeline
description: Interactive workflow diagram showing how markdown files are sequentially processed to render chemical equations and mathematical notation in MkDocs Material with MathJax and mhchem.
---

# Chemical Equation Rendering Pipeline

<iframe src="main.html" width="100%" height="1850px" scrolling="no"></iframe>

[Open Full Screen](main.html){ .md-button }

## Overview

This diagram traces the complete pipeline that transforms `$\ce{H2O}$` written
in a generated markdown file into a beautifully typeset chemical formula in the browser.
The pipeline begins with `CLAUDE.md` — the project rulebook that instructs the
`chapter-content-generator` skill to use dollar notation exclusively — and then
passes through five processing layers: Python extension, build, browser loading,
and MathJax rendering.

Hover over each node to read a detailed explanation of that step.

## Pipeline Steps

1. **CLAUDE.md prerequisite** — Must specify the dollar notation rule; instructs the content generator to never use backslash notation
2. **chapter-content-generator skill** — Reads `CLAUDE.md` and generates `.md` content using `$...$` and `$\ce{...}$`
3. **arithmatex intercepts** — `pymdownx.arithmatex` captures `$` delimiters before Python-Markdown runs
4. **Protected spans** — Math content is wrapped in `<span class="arithmatex">` and converted to `\(...\)` internally
5. **Python-Markdown runs** — Processes headings, links, lists with math content safely isolated
6. **MkDocs assembles** — Builds the full HTML page with all CSS and JS references
7. **Browser loads** — Page loads with equations as unrendered protected spans
8. **mathjax-config.js** — Declares the `mhchem` package and sets delimiters; must load before the CDN bundle
9. **MathJax CDN** — Full `tex-chtml.js` bundle loads (full bundle required for mhchem)
10. **DOM scan** — MathJax finds all `\(...\)` and `\[...\]` spans queued for typesetting
11. **mhchem extension** — Processes `\ce{...}` into proper chemical notation with subscripts, arrows, and charges
12. **Rendered output** — Final typeset equations and chemical formulas appear to the reader

## Key Design Decision

The `pymdownx.arithmatex` extension (with `generic: true`) acts as a protective
shield. By intercepting `$` delimiters before Python-Markdown processes the
document, it prevents the Markdown parser from misinterpreting chemical formulas
that contain `[]` or `()` — which look identical to Markdown link syntax.

**The rule:** Always write `$` and `$$` in markdown. Never write `\(...\)` or
`\[...\]` directly in `.md` files.

This rule must be encoded in `CLAUDE.md` so the `chapter-content-generator` skill
enforces it automatically. Without the explicit instruction in `CLAUDE.md`, an AI
content generator defaults to backslash notation, which breaks the pipeline.
