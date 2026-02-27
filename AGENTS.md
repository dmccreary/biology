# Agent Notes

## MicroSim Production Standards

- When generating any p5.js MicroSim, ALWAYS read `/Users/danmccreary/Documents/ws/claude-skills/skills/microsim-generator/references/p5-guide.md` first and follow every requirement from the microsim-generator skill. This guide defines the canvas layout, responsive control positioning, accessibility description, and validation checklist our sims must meet.

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

