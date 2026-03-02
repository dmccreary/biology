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
