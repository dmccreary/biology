# Chemical Equation Rendering Pipeline — MicroSim Build Log

**Date:** 2026-02-25
**Status:** Complete and working
**Sim path:** `docs/sims/chemical-equation-rendering/`

---

## What Was Built

An interactive Mermaid flowchart MicroSim showing the full pipeline from
`CLAUDE.md` configuration through the `chapter-content-generator` skill,
`pymdownx.arithmatex`, Python-Markdown, MkDocs, and MathJax with the `mhchem`
extension, ending at beautifully rendered chemical equations in the browser.

The sim uses the standard 2/3 + 1/3 layout: Mermaid diagram on the left,
Y-following hover info panel on the right. Hovering any node displays a detailed
explanation of that pipeline step.

---

## Build Steps

1. Ran `/microsim-generator` with the Mermaid pattern to scaffold the sim
2. Wrote the initial Mermaid flowchart with 12 nodes and a danger-zone branch
3. **Mermaid v11 syntax error** — fixed three classes of issues:
   - `\n` in node labels → replaced with `<br/>` (required when `htmlLabels: true`)
   - Backslash sequences (`\\[`, `\\(`, `\\ce{}`) in labels → replaced with plain English
   - Special characters (`$`, `{`, `}`) in labels → removed entirely
4. Removed the DangerCheck/DangerZone branch per user feedback that it made the diagram confusing
5. Added two new nodes at the top: orange `CLAUDE.md` prerequisite node and green `chapter-content-generator` node
6. Iteratively adjusted iframe height: 900px → 1600px → 1650px → 1700px → 1850px

---

## Layout Difficulties

### Legend placement — harder than expected

The legend went through four distinct locations before landing in the right place:

| Iteration | Location | Problem |
|-----------|----------|---------|
| 1 | Bottom of info panel | Pushed far below the visible area |
| 2 | `position: absolute` top-right of diagram panel | Overlapped the Mermaid SVG nodes near the top |
| 3 | `position: absolute` top-right of diagram panel (after `position: relative` on parent) | Diagram panel was 2/3 width so "top-right" was not the far right of the page |
| 4 | Top of info panel, normal flow | Correct — fills the otherwise-empty space at the top of the right column |

The root cause of the confusion: with a 2/3 / 1/3 split layout, "upper right corner" means the top of the right-hand info panel, not the top-right of the diagram panel. The info panel was mostly empty because the hover infobox floated to wherever the mouse was. Placing the legend at the top of the info panel was the natural solution — it fills that space and anchors the right column.

### Bottom infobox clipping — required manual adjustment

The Y-following hover panel clamps its position using:

```javascript
const top = Math.max(8, Math.min(wrapH - panelH - 8, y));
```

Two bugs appeared and were fixed sequentially:

**Bug 1 — `r.height` vs `offsetHeight`:**
`getBoundingClientRect().height` returns the *visible* portion of the element
clipped to the viewport. When the user scrolls to the bottom of a 1790px panel,
`r.height` shrinks to a small number, and `r.height - panelH - 8` goes negative.
Fix: replaced `r.height` with `panelWrap.offsetHeight` (always the full CSS height).

**Bug 2 — residual clipping at bottom:**
Even after the `offsetHeight` fix, the last node's infobox still rendered below
the visible canvas. The bottom buffer of `8px` was not enough to account for the
gap between the bottom of `panelWrap` and the bottom of the iframe. Fixed by
increasing the bottom buffer from `8` to `180` (the user tuned this manually
to `180` after an initial attempt at `108`).

This is a known fragility of the Y-following panel pattern: the correct bottom
buffer value depends on the layout geometry (iframe height, legend height, h3
height, padding) and must be hand-tuned when any of those values change.

---

## Suggestions for Improving mermaid-guide

### 1. Document the `<br/>` requirement explicitly

Mermaid v11 does not support `\n` escape sequences in node labels when using
`htmlLabels: true`. The guide should state:

> **Always use `<br/>` for line breaks in node labels, never `\n`.**

### 2. Add a "forbidden characters in labels" section

Characters that break the Mermaid parser in node labels:
- Backslash sequences: `\\(`, `\\[`, `\\ce{}`
- Dollar signs: `$`, `$$`
- Curly braces: `{`, `}`
- Unescaped parentheses inside `[]` nodes (use `"..."` quoting instead)

The guide should include a quick reference table of safe vs. unsafe characters.

### 3. Provide a standard 2/3 + 1/3 layout template with correct hover panel

The Y-following hover panel pattern has a recurring bug: using
`getBoundingClientRect().height` instead of `offsetHeight` for the clamp
calculation. The guide's boilerplate template should use `offsetHeight` from
the start, and the bottom buffer should be set to a generous default (e.g. `200`)
with a comment explaining it may need tuning:

```javascript
function positionPanel(evt) {
    const r = panelWrap.getBoundingClientRect();
    const panelH = panel.offsetHeight || 120;
    const wrapH = panelWrap.offsetHeight;   // NOT r.height — avoids viewport clipping
    const y = evt.clientY - r.top - 20;
    // Bottom buffer: increase if last-node infobox clips below canvas
    const top = Math.max(8, Math.min(wrapH - panelH - 200, y));
    panel.style.top = `${top}px`;
}
```

### 4. Clarify legend placement for the 2/3 + 1/3 layout

The guide currently doesn't specify where the legend should go in a two-panel
layout. Add a recommendation:

> In a 2/3 diagram + 1/3 info panel layout, place the legend at the **top of
> the info panel** as a normal-flow block (not absolutely positioned). This fills
> the otherwise-empty space above the Y-following hover box and keeps the diagram
> panel uncluttered.

### 5. Add a height-consistency checklist

Three heights must stay in sync when changing diagram size:

| Location | Value | Note |
|----------|-------|------|
| `index.md` iframe `height` attribute | 1850px | What the MkDocs page sees |
| `.container` height in `main.html` CSS | 1840px | 10px less than iframe |
| `#panelWrap` height in `main.html` CSS | 1790px | Accounts for legend + h3 above it |

The guide should note this interdependency and suggest updating all three
together whenever the diagram height changes.

---

## Outcome

The sim renders correctly at 1850px. All 13 nodes have hover descriptions.
The legend sits cleanly at the top of the right panel. The info box follows
the mouse and stays within the visible canvas for all nodes including the
bottom `Render` node.
