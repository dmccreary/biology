# Graph Viewer Visibility Toggle Speedup

**Date:** 2026-03-20
**Sim:** `docs/sims/graph-viewer/`
**Result:** ~10–20 second toggle time → sub-second

---

## Problem

The learning graph viewer had extremely slow category checkbox toggling:

- "Uncheck All" took ~10 seconds
- Checking a single category (e.g., Scientific Foundations) after unchecking all took ~20 seconds

The graph has 375 nodes and 764 edges — larger than the typical 200-concept graph the viewer was originally designed for.

---

## Root Cause: Per-Item DataSet Updates

The `updateVisibility()` function was calling `nodes.update()` and `edges.update()` **once per node and once per edge** inside `forEach` loops:

```javascript
// SLOW — 375 individual redraws
allNodes.forEach(node => {
    nodes.update({
        id: node.id,
        hidden: !isVisible
    });
});

// SLOW — 764 individual redraws
allEdges.forEach(edge => {
    edges.update({
        id: edge.id || `${edge.from}-${edge.to}`,
        hidden: !isVisible
    });
});
```

Each call to `vis.DataSet.update()` with a single object triggers a full internal redraw event in vis-network. With 375 + 764 = **1,139 individual update calls**, each toggle fired 1,139 full redraws of the canvas.

The same bug existed in `highlightNode()`, which also called `nodes.update()` once per node (375 calls), plus another 375 calls in the reset timeout.

---

## Fix: Batch Updates with Array Argument

`vis.DataSet.update()` accepts either a single object **or an array of objects**. When called with an array, it applies all changes in a single internal transaction and fires exactly **one** redraw event.

```javascript
// FAST — 1 redraw for all 375 nodes
nodes.update(allNodes.map(node => ({
    id: node.id,
    hidden: !visibleGroups.has(node.group)
})));

// FAST — 1 redraw for all 764 edges
edges.update(allEdges.map(edge => ({
    id: edge.id || `${edge.from}-${edge.to}`,
    hidden: !(visibleNodeIds.has(edge.from) && visibleNodeIds.has(edge.to))
})));
```

**Total redraws reduced from 1,139 → 2** for every visibility toggle.

The `highlightNode()` function also got a secondary fix: converted `allConnected.includes(node.id)` (O(n) linear scan per node = O(n²) total) to `connectedSet.has(node.id)` (O(1) Set lookup):

```javascript
// Also fixed: O(n²) → O(n) for connected node lookup
const connectedSet = new Set(allConnected);
nodes.update(allNodes.map(node => ({
    id: node.id,
    opacity: connectedSet.has(node.id) ? 1 : 0.3
})));
```

---

## Files Changed

- `docs/sims/graph-viewer/script.js` — `updateVisibility()` and `highlightNode()`

---

## Performance Summary

| Operation | Before | After |
|-----------|--------|-------|
| Uncheck All (375 nodes + 764 edges hidden) | ~10 sec | <1 sec |
| Check one category after Uncheck All | ~20 sec | <1 sec |
| Node highlight on click | slow | instant |
| Redraws per toggle | 1,139 | 2 |

---

## Lesson Learned

**Always pass arrays to `vis.DataSet.update()` when updating multiple items.** The API accepts both a single object and an array — but only the array form batches into a single redraw. This is a non-obvious API behavior that is easy to get wrong when writing forEach loops.

This pattern must be used in all future graph viewer installs, especially for courses with 200+ concepts. The fix has been propagated to the `book-installer` skill reference so all future installations use batched updates by default.

---

## Rule for Future MicroSims Using vis-network

> Any time you update `hidden`, `opacity`, `color`, or any other property on multiple vis-network nodes or edges, always collect the changes into an array and call `dataSet.update(array)` once — never call `dataSet.update(object)` inside a loop.

---

## Follow-up Feature: Loading Message (2026-03-20)

**User response: "perfect!"** — strongly positive, user confirmed it works as expected.

Added a "Loading concepts and edges..." message centered in the graph drawing area that stays visible through the physics stabilization phase and disappears automatically when the graph is ready.

### Implementation

Three parts must work together:

1. **`main.html`** — static `<div id="loading-message">` inside `.graph-container`, after `#network`, so it exists before any JS runs (no flicker on slow connections)
2. **`local.css`** — `position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 20` — the `z-index: 20` is critical; without it the vis-network canvas renders on top and hides the text entirely
3. **`script.js`** — removed via `network.once('stabilizationIterationsDone', ...)` rather than immediately after `initializeNetwork()` — keeping it visible through the physics settling phase, which is the part users actually wait for on large graphs

### Why `stabilizationIterationsDone` and not earlier

On localhost, `fetch()` completes in under 10ms. Removing the message at fetch-complete means it flashes for a fraction of a second and users never see it. The stabilization phase (up to 1,000 iterations) takes 2–5 seconds even on fast machines for a 375-node graph — that is the meaningful wait users experience.

### Propagated to skill

All three changes (HTML, CSS, JS) added to `book-installer/references/learning-graph-viewer.md` so future installs include the loading message by default.
