# Scientific Method Sim — Adapted to Biology Examples

**Date:** 2026-02-26 10:09:19
**File modified:** `docs/sims/scientific-method/script.js`

## Summary

Replaced all physics-based examples in the Scientific Method interactive diagram
with a single coherent biology example: the effect of temperature on catalase
activity (potato extract + H₂O₂). This experiment is a standard AP Biology lab
investigation and directly connects to Chapter 1 concepts (controlled experiments,
independent/dependent variables, standard deviation, graph construction).

## Changes Made

| Location | Old Content | New Content |
|----------|-------------|-------------|
| Line 3 (comment) | `physics examples` | `biology examples` |
| Start → example | Ball rolling on surfaces | Student observes potato catalase bubbling; asks about temperature effect |
| Research → example | Friction and kinetic energy | Enzyme structure, active site theory, hydrogen bond denaturation |
| Hypothesis → example | Smoother surface = farther ball | "If temp > 40°C, catalase activity decreases because active site denatures" |
| Design → example | Steel ball on 5 surfaces | 5 temperatures (0–80°C), O₂ bubble height as DV, 3 trials per temp |
| Conduct → example | Distance on glass, tile, carpet… | Bubble heights ± SD: 0°C(11±2), 25°C(37±3), 37°C(54±4), 60°C(19±5), 80°C(3±1) |
| Analyze → example | Bar graph, 8× distance difference | Line graph with error bars; peak at 37°C; non-overlapping bars suggest significance |
| Decision1 → example | Smoother = farther, supports friction hypothesis | Activity peaked at 37°C, fell sharply above 60°C; error bars support significance |
| Accept → example | Friction reduces kinetic energy | Catalase peaks at 37°C; nearly abolished at 80°C — denaturation confirmed |
| Revise → example | Tile worse than wood → hardness hypothesis | 0°C unexpectedly high → revise to bell-curve optimal temperature model |
| Communicate → example | Basic lab report outline | Full AP lab report with SD table, error-bar graph, structural biology context |
| Decision2 → example | Ball mass, inclined surfaces, humidity | pH effect, substrate concentration, liver vs. potato optimal temperatures |
| End → example | Air resistance curiosity | New pH experiment designed, holding temperature constant at 37°C |
| `defaultInfo.description` | "…see a physics example" | "…see a biology example" |
| `updateInfobox()` label | `Physics Example:` | `Biology Example:` |

## Biology Example Thread

All 12 nodes tell a single continuous story:

> A student observing potato catalase activity raises a question about temperature.
> After researching enzyme denaturation, they form a hypothesis, design a controlled
> experiment across five temperatures, collect quantitative data with replication,
> plot a line graph with error bars, and confirm that catalase peaks at 37°C — body
> temperature — and is abolished at 80°C. The investigation raises new questions
> about pH and substrate concentration, launching the next experimental cycle.

## AP Biology Connections

- **Controlled experiments** — 5 temperature levels, same potato/H₂O₂ batch, 3 trials
- **Independent/dependent variables** — temperature (IV), bubble height (DV)
- **Standard deviation** — reported as ±SD for each group
- **Graph construction** — line graph with error bars, non-overlapping bars = significance
- **Enzyme structure** — active site, denaturation, optimal temperature (Unit 3 preview)
- **Quantitative reasoning** — data compared to hypothesis with statistical justification
