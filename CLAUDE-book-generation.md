# CLAUDE-book-generation.md

These are rules that were important when generating
a new textbook, but are not important when we are
focusing on high-quality MicroSim developments.

## Build Process

Use `mkdocs build` to check the `mkdocs.yml` file is valid.

Use `mkdocs gh-deploy` to publish the website to GitHub pages.

Assume the user is running `mkdocs serve` in a separate shell.

## Configuration (`mkdocs.yml`)

Key settings:
- Theme: MkDocs Material, primary color `green`
- No `navigation.tabs` — this book uses side navigation only (never add `navigation.tabs`)
- Math: MathJax via external CDN + `docs/js/mathjax-config.js`
- Social plugin enabled (requires Cairo system library)
- `watch: [docs, mkdocs.yml]` for live reload

## Learning Graph Data (`docs/learning-graph/`)

Two canonical data files drive the interactive graph viewer:
- `learning-graph.csv` — edges as `from,to` concept pairs
- `learning-graph.json` — vis-network format with `nodes`, `edges`, and `metadata` elements

Supporting analysis pages (Python scripts in same directory): `analyze-graph.py`, `csv-to-json.py`, `taxonomy-distribution.py`, `add-taxonomy.py`, `validate-learning-graph.py`.

## Token Efficiency: Prefer Serial Over Parallel Processing

These skills target teachers on the **Claude Pro plan**, which has a **five-hour
budget of only ~200K tokens**. Teachers are **not sensitive to run times** — a task
that takes 3 minutes instead of 1 minute is fine, but a task that burns 84K tokens
instead of 48K means they can do fewer tasks before hitting their ceiling.

Always default to serial processing (one Task agent) unless the user explicitly
requests speed or parallel execution. Each parallel Task agent costs ~12K tokens
in startup overhead (system prompt + tool descriptions). Four parallel agents waste
~36K tokens on overhead alone — that's 18% of a Pro user's entire five-hour budget
spent on nothing but agent startups.

Before launching parallel agents, ask: "Does the user need this faster, or cheaper?"
The answer for teachers is almost always cheaper. See
`logs/glossary-generation-very-inefficient.md` for the full post-mortem.

---

## Learning Mascot: Gregor the Tree Frog

### Character Overview

- **Name**: Gregor (after Gregor Mendel, father of genetics)
- **Species**: Tree Frog
- **Personality**: Curious and scientifically enthusiastic when introducing concepts; warm and encouraging when material gets difficult
- **Catchphrase**: "Let's investigate!"
- **Visual**: Small, round-bodied lime-green tree frog with large golden eyes, cream-white underbelly, white lab coat, and a round magnifying glass

### Voice Characteristics

- Uses clear, precise scientific language appropriate for AP-level high school students
- Frames biology as an active investigation ("Let's investigate!", "What does the evidence tell us?")
- Normalizes difficulty: "This is one of the trickiest concepts in AP Biology — that's completely normal"
- Celebrates connections between units: "Notice how this connects back to what we saw in Unit 3"
- Refers to students as "investigators" or "scientists"
- Signature phrases: "Let's investigate!", "What does the evidence tell us?", "You're closer than you think!", "The answer is hiding in plain sight"

### Placement Rules

| Context | Admonition Type | Frequency |
|---------|----------------|-----------|
| General note / sidebar | `mascot-neutral` | As needed |
| Chapter opening | `mascot-welcome` | Every chapter (required) |
| Major concept introduction | `mascot-thinking` | 2–3 per chapter |
| AP exam strategy / memory tip | `mascot-tip` | As needed |
| Common misconception | `mascot-warning` | As needed |
| End of major section | `mascot-celebration` | 1 per chapter |
| Difficult content (e.g., Hardy-Weinberg, ETC) | `mascot-encourage` | Where students typically struggle |

### Do's

- Use Gregor to introduce new topics warmly at chapter openings
- Include the catchphrase "Let's investigate!" in the welcome admonition
- Keep Gregor's dialogue brief: 1–4 sentences maximum
- Use `mascot-thinking` for Big Ideas connections across units
- Use `mascot-warning` for the most common AP exam misconceptions

### Don'ts

- Do **not** use Gregor more than **5–6 times per chapter**
- Do **not** stack Gregor admonitions back-to-back
- Do **not** use Gregor purely decoratively (every appearance must add value)
- Do **not** change Gregor's personality or voice between chapters
- Do **not** use Gregor for routine content that needs no special emphasis

### Admonition Syntax Reference

```markdown
!!! mascot-neutral "A Note from Gregor"
    General notes, sidebars, or any context without a specific tone.

!!! mascot-welcome "Gregor Welcomes You!"
    Welcome text here. Always include "Let's investigate!" in the welcome.

!!! mascot-thinking "Key Insight"
    A critical conceptual connection or big-picture observation.

!!! mascot-tip "Gregor's Tip"
    An AP exam strategy, memory trick, or problem-solving shortcut.

!!! mascot-warning "Common Mistake"
    A frequent misconception or error students make on the AP exam.

!!! mascot-celebration "Excellent Work!"
    Acknowledgment of completing a difficult section or mastering a concept.

!!! mascot-encourage "You've Got This!"
    Encouragement before or during a challenging section.
```

To include Gregor's image inside an admonition body:

```markdown
!!! mascot-welcome "Gregor Welcomes You!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Gregor welcomes you">
    Welcome text here...
```

Image paths are relative to the rendered page depth — use `../../img/mascot/` from pages two levels deep (e.g., `docs/learning-graph/`), or `../img/mascot/` from one level deep.
