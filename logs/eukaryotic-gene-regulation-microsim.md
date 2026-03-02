# Eukaryotic Gene Regulation MicroSim Log

## 2026-03-02
- Reviewed the Chapter 14 spec plus the microsim-generator and p5 guides; captured requirements, controls, and layout math.
- Created `docs/sims/eukaryotic-gene-regulation/planning-notes.md` with the instructional design review, control inventory, layout calculations, and the mandated Wireframe Plan. Initial wireframe prevented overlaps but still required later manual tweaks to spacing when the visual design evolved.
- Implemented the new MicroSim JS from scratch (`eukaryotic-gene-regulation.js`) plus refreshed `index.md` and `metadata.json`. Features include responsive stacked layers, detail cards, Start/Pause flow animation, and hover/click behaviors.
- Iterated on layout multiple times: removed hover dependency, replaced per-layer cards with a single persistent detail panel, aligned icons relative to the right edge, widened the Start Flow button, and synchronized the info panel with the flow animation. Added adaptive margins so the post-translational band never collides with controls.
- Recorded that the Wireframe Plan gave a solid baseline but still needed manual adjustments (title spacing, bottom margins, detail-panel gutter) once we saw the live rendering.
- Marked the sim as complete by moving its spec from `docs/sims/TODO.md` to `docs/sims/DONE.md` and incrementing the DONE counter.
