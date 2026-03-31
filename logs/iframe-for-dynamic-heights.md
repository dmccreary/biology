# Iframe Auto-Resize for Dynamic Heights

**Date:** 2026-03-31

## Problem

Diagram overlay MicroSims using `shared-libs/diagram.js` have content heights
that vary with viewport width (the image and label panel scale responsively).
Fixed iframe heights in chapter embeds and sim index pages led to two problems:

1. **Too tall at narrow widths** — wasted whitespace below the content
2. **Too short at wide widths** — infobox text clipped at the bottom

The Playwright iframe-height tester (`microsim-iframe-tester` skill) also
gave inflated suggestions because it measured at a fixed 800px viewport width,
which didn't match the typical ~700px MkDocs Material content column.

## Root Cause

The `height="NNN"` attribute on `<iframe>` tags is a static value set at
authoring time. Responsive MicroSims change their content height at runtime
based on the container width, so no single static value works at all widths.

Additionally, the infobox starts empty (short) and expands when the user
hovers over a label. The longest description + AP tip can add 100–200px
that wasn't accounted for in the initial iframe height.

## Solution: postMessage Auto-Resize

A two-part system using the browser's `postMessage` API:

### 1. Sender (diagram.js)

Added a `reportHeight()` method to the `DiagramSim` class:

- **Worst-case measurement**: Temporarily populates the infobox with the
  longest callout's label + description + ap_tip, shows the `infobox-content`
  container, measures `document.body.scrollHeight`, then restores the original
  infobox state. This happens synchronously so users never see the flash.
- **Safety margin**: Adds 30px to the measured height.
- **No-op in fullscreen**: Skips when `window.self === window.top`.
- **Called on init and resize**: Runs after `init()` completes and on every
  `ResizeObserver` callback (which fires when the viewport width changes).

### 2. Receiver (extra.js)

Added a `message` event listener to the parent page:

```javascript
window.addEventListener('message', function (event) {
    if (!event.data || event.data.type !== 'microsim-resize') return;
    var iframes = document.querySelectorAll('iframe');
    for (var i = 0; i < iframes.length; i++) {
        if (iframes[i].contentWindow === event.source) {
            iframes[i].style.height = event.data.height + 'px';
            break;
        }
    }
});
```

Matches `event.source` to the correct iframe's `contentWindow` — no IDs or
naming conventions needed. The existing `height="NNN"` attributes in the HTML
remain as fallbacks shown while the sim loads.

## Additional Changes

### Controls moved below image

Moved the Explore/Quiz `#controls` div from above `#layout` to between
`#layout` and `#infobox` in all 16 diagram overlay sims. This gives the
diagram image maximum vertical space and places mode buttons where users
expect them after viewing the diagram.

### Iframe tester skill improvements

Updated `microsim-iframe-tester` to:
- Use 700px viewport width (was 800px) to match MkDocs content column
- Detect `// CANVAS_HEIGHT = N` comments in JS files as authoritative height
- Document responsive sim caveats in skill.md

### Feedback-loop-simulator fix

Fixed the feedback-loop-simulator (p5.js sim with dynamic canvas height) to
use fixed `drawHeight` when running inside an iframe and responsive height
only in fullscreen mode. Added `const inIframe = (window.self !== window.top)`
guard in `enforceDrawHeight()`.

### Teachers Guide

Generated a comprehensive teachers guide at `docs/teachers-guide/index.md`
covering all textbook features, classroom usage tips, licensing, customization,
and analytics.

## Files Changed

### Core infrastructure
- `docs/js/extra.js` — Added postMessage listener for iframe auto-resize
- `docs/sims/shared-libs/diagram.js` — Added `reportHeight()` method with
  worst-case infobox measurement

### Diagram sim main.html (controls moved below image) — 16 files
- `docs/sims/animal-cell/main.html`
- `docs/sims/cell-junctions-explorer/main.html`
- `docs/sims/cell-membrane/main.html`
- `docs/sims/chloroplast/main.html`
- `docs/sims/cytoskeleton-explorer/main.html`
- `docs/sims/dna-double-helix/main.html`
- `docs/sims/endomembrane-system/main.html`
- `docs/sims/meiosis-stages/main.html`
- `docs/sims/mitochondria/main.html`
- `docs/sims/mitosis-stage-explorer/main.html`
- `docs/sims/neuron-structure/main.html`
- `docs/sims/plant-cell/main.html`
- `docs/sims/prokaryote-eukaryote-comparison/main.html`
- `docs/sims/replication-fork/main.html`
- `docs/sims/signal-transduction-pathway/main.html`
- `docs/sims/sodium-potassium-pump/main.html`

### Iframe height fixes (from Playwright tester)
- `docs/sims/cell-cycle-phases/index.md`
- `docs/sims/ecological-succession/index.md`
- `docs/sims/eukaryotic-gene-regulation/index.md`
- `docs/sims/feedback-loop-simulator/index.md`
- `docs/sims/genetic-code-table/index.md`
- `docs/chapters/09-cell-signaling-and-feedback/index.md`
- `docs/chapters/10-cell-cycle-mitosis-and-cancer/index.md`
- `docs/chapters/13-central-dogma-replication-and-protein-synthesis/index.md`
- `docs/chapters/14-mutations-gene-regulation-and-biotechnology/index.md`
- `docs/chapters/19-community-ecology-and-species-interactions/index.md`

### Feedback-loop-simulator
- `docs/sims/feedback-loop-simulator/feedback-loop-simulator.js`

### New content
- `docs/teachers-guide/index.md`

## Outcome

All 16 diagram overlay sims now auto-resize their iframes to exactly fit
their content at any viewport width. The static `height` attributes serve
as initial fallbacks during page load, then get overridden by the measured
height once the sim renders. No more clipped infoboxes or wasted whitespace.

## Future Work

- Create `shared-libs/iframe-resize.js` as an opt-in script for p5.js sims
  that also have dynamic heights (like the feedback-loop-simulator)
- Consider having p5.js sims call `reportHeightToParent()` from `setup()`
  and `windowResized()` using the same postMessage protocol
