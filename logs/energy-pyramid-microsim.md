# Energy Pyramid MicroSim Log

## 2026-03-02
- Re-read the microsim-generator SKILL plus the p5 reference, then reviewed the Chapter 20 specification for the Energy Pyramid Explorer.
- Drafted the Instructional Design review, control inventory, layout calculations, and the rectangle-based Wireframe Plan in `docs/sims/energy-pyramid/planning-notes.md`, explicitly verifying non-overlap for widths 450–1200 px.
- Created `wireframe.html` (SVG) before coding any placements to visualize the title strip, pyramid canvas, detail panel, heat band, and three control rows.
- Implemented `energy-pyramid.js` with responsive stacked bars, adaptive bottom spacing, hover tooltips, right-side detail panel, base-energy & efficiency sliders, Add Level button, and exclusive biomass/numbers toggles that synchronize with the display.
- Updated `index.md`, `metadata.json`, and the iframe height to document usage, lesson plan, and NGSS links.
- Logged this work and verified the MicroSim locally via `main.html` (also queued for mkdocs serve preview).

## 2026-03-03
- Implemented multiple UI refinements requested during review: icons now anchor relative to each band’s right edge, apex/quaternary labels use white text on dark tiers, band text spacing was tuned, and the heat band/pyramid stack were repositioned vertically.
- Simplified the control deck to separate **Add Level** and **Remove Level** buttons (with enable/disable logic) plus two optional toggles (“Show Biomass”, “Show Individuals”). This replaced the earlier three-checkbox scheme (energy/biomass/numbers) and made the baseline energy values always visible while optional overlays use abbreviated units (“ind”).
- Adjusted the interior label logic so energy/biomass/individuals values share a single second line, preventing overwrite of trophic-level names. Additional tweaks included a 20 px adaptive bottom margin and responsive border drawing for QA.
- Logged user feedback that the initial wireframe still allowed overlaps once color fills, instruction strips, and the detail panel were rendered. We corrected this by shifting the stack, widening upper tiers, and validating the wireframe visually plus analytically post-implementation.
- Following final approval, moved the spec from `docs/sims/TODO.md` to `docs/sims/DONE.md` and confirmed the sim renders cleanly in both mkdocs preview and the standalone `main.html`.
