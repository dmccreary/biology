# Agent Notes

## MicroSim Production Standards

- When generating any p5.js MicroSim, ALWAYS read `/Users/danmccreary/Documents/ws/claude-skills/skills/microsim-generator/references/p5-guide.md` first and follow every requirement from the microsim-generator skill. This guide defines the canvas layout, responsive control positioning, accessibility description, and validation checklist our sims must meet.
- Shared superscript helpers live in `docs/src/shared-js/superscript-text.js`. Include that script before your MicroSim’s JS (e.g., `<script src="../../src/shared-js/superscript-text.js"></script>`) and call `SuperscriptText.drawSuperscriptText()` / `convertSuperscriptOption()` whenever you need polished exponents like `I^A` or `I^B` in p5.js or vanilla canvas contexts.
- **Always re-read the SKILL.md file before running any skill.** Every time a skill is invoked (quiz-generator, faq-generator, microsim-generator, etc.), open its `SKILL.md` to refresh the exact instructions, formats, and quality checks before generating outputs.
- When asked to generate stories or bios, use the `/Users/danmccreary/.codex/skills/story-generator` skill, following its SKILL.md instructions for readiness checks, story structure, and navigation updates.
- MkDocs can ignore one-off prompt/plan files by using the `exclude_docs` multiline string in `mkdocs.yml`. The current configuration lists the MicroSim image-prompt markdown files so `mkdocs build` doesn’t warn about them being outside `nav`. Add future exclusions to that block (keep the YAML literal format).
- **Never override fonts in MicroSim JavaScript.** The base font-family is defined in each `main.html`. Keep all typography adjustments in CSS/HTML layers so we maintain consistent text rendering across sims.
- All interactive simulations must load in a paused state; the primary control button should initially read **“Start Simulation”** (or context-appropriate equivalent) so autoplay never surprises learners.

## Open Link When Finished Generating a MicroSim

Assume that the user is always running the `mkdocs serve` in a separate shell.

When a new MicroSim has been generated, print the URL of the new MicroSim and open it in Chrome:

```bash
open -a "Google Chrome" "http://127.0.0.1:8000/biology/sims/<sim-name>/"
```

Where `<sim-name>` is the name of the MicroSim you just created.

## Positive Reinforcement Patterns for MicroSims

- **Animal Cell MicroSim (`docs/sims/animal-cell/diagram.js`)** now includes two lightweight celebration hooks you can reuse elsewhere:
  - `showQuickStar()` overlays a bright yellow `★` with “You Got It!” text for one second after each correct quiz response. This keeps the reinforcement short and non-blocking.
  - `launchCelebration()` renders a confetti canvas when `showQuizComplete()` fires, signaling successful completion.
- When building new diagram-based sims, copy these helpers (or import them into a shared module) to ensure students receive immediate positive feedback without interrupting interaction flow.

## Shared Diagram Architecture

- `docs/sims/shared-libs/diagram.js` is our reference implementation for complex biology diagrams (leader lines, multiple layouts, quiz mode, edit tools).
- Before adding bespoke logic to a new MicroSim, check this file for reusable patterns (marker rendering, label management, confetti animation). Extending this architecture keeps controls, animations, and accessibility consistent across the course.

## Wireframe Plan

- After drafting a high-level concept for any new p5.js MicroSim, pause before coding and build a "Wireframe Plan" consisting of labeled rectangles that represent every canvas element.
- Begin with the title: calculate its top margin and text height, sketch a rectangle for it relative to the top edge (no responsive rules needed), and treat that rect as reserved space before placing other components.
- Lay out every non-control element in the drawing region next; estimate each rectangle's width and height, assume the overall canvas height is fixed by the iframe, and position elements so their horizontal alignment updates with canvas width changes.
- Sketch the control region (white background) below the drawing region (aliceblue background): add a Start/Pause button anchored to the lower-left corner for simulations, draw rectangles for every control plus its label/value pair (labels/values always to the left of their sliders), and ensure each rectangle uses a distinct color and name for clear reference.
- When the wireframe is complete, validate that no rectangles overlap for any canvas width between 450 px and 1200 px, adjusting font sizes as needed, and record the plan so it can be shared later if troubleshooting is required.
- Always inform the user that the wireframe regions do not overlap before moving on to implementation, and keep the saved wireframe plan handy for follow-up questions.

## Responsive Two-Panel Layout Pattern

- For split-screen diagrams + graphs (like Feedback Loop Simulator), reserve equal square panels with only 20 px gutters from the iframe edge. Compute each square as `(canvasWidth - margin*2 - gutter) / 2`, enforce matching heights, and let the drawing region height expand so the squares never overlap controls.
- Keep the controls in their own deck below the drawing region; only the diagram/graph squares resize responsively.
- This strategy produced stable behavior across 450 px–1200 px widths—reuse it for any future two-panel MicroSim so both views stay balanced and aligned.

## Lessons Learned

- **Lock specs early.** Agree on panel shapes, control placement, and arrow styling upfront. A quick mockup or annotated screenshot saves multiple iteration loops later.
- **Centralize layout constants.** Keep margins, rotations, and sizing math in a shared config so adjusting values (like arrow offsets or panel heights) happens once.
- **Modularize tricky visuals.** The circular arrows consumed most of the session. Move tangent/arrow helpers to a shared utility so future diagrams reuse the vetted logic.
- **Use reusable control layouts.** Build a declarative control deck (label + element definitions) that auto-positions items, avoiding manual pixel tweaks for every request.
- **Capture snapshots per milestone.** After each layout change, auto-generate visual diffs so requesters can sign off quickly without repeated restarts.
