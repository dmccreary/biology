# Agent Notes

## MicroSim Production Standards

- When generating any p5.js MicroSim, ALWAYS read `/Users/danmccreary/Documents/ws/claude-skills/skills/microsim-generator/references/p5-guide.md` first and follow every requirement from the microsim-generator skill. This guide defines the canvas layout, responsive control positioning, accessibility description, and validation checklist our sims must meet.
- Shared superscript helpers live in `docs/src/shared-js/superscript-text.js`. Include that script before your MicroSim’s JS (e.g., `<script src="../../src/shared-js/superscript-text.js"></script>`) and call `SuperscriptText.drawSuperscriptText()` / `convertSuperscriptOption()` whenever you need polished exponents like `I^A` or `I^B` in p5.js or vanilla canvas contexts.
- **Always re-read the SKILL.md file before running any skill.** Every time a skill is invoked (quiz-generator, faq-generator, microsim-generator, etc.), open its `SKILL.md` to refresh the exact instructions, formats, and quality checks before generating outputs.
- MkDocs can ignore one-off prompt/plan files by using the `exclude_docs` multiline string in `mkdocs.yml`. The current configuration lists the MicroSim image-prompt markdown files so `mkdocs build` doesn’t warn about them being outside `nav`. Add future exclusions to that block (keep the YAML literal format).

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

- `docs/sims/diagram-architecture/diagram.js` is our reference implementation for complex biology diagrams (leader lines, multiple layouts, quiz mode, edit tools).
- Before adding bespoke logic to a new MicroSim, check this file for reusable patterns (marker rendering, label management, confetti animation). Extending this architecture keeps controls, animations, and accessibility consistent across the course.
