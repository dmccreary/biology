# Fermentation Pathway Refactor Plan

## Purpose
Document how the current all-in-one Fermentation Pathways MicroSim will be split into three focused sims to reduce cognitive overload while keeping the original version as a case study.

## Current State (Case Study)
- `docs/sims/fermentation-pathways/` remains unchanged and serves as the “cognitive overload” exemplar.
- Concepts captured in `concepts-covered.md` demonstrate the scope that prompted the refactor.

## New MicroSim Targets

### 1. Lactic Acid Fermentation Explorer
- **Directory**: `docs/sims/lactic-fermentation-explorer/`
- **Purpose**: Single-path focus on glycolysis → lactate, emphasizing NADH recycling during oxygen debt.
- **Planned Concepts/Elements**:
  - Title, subtitle, and short instruction banner
  - Four-stage flow: Glucose intake, Glycolysis (2 ATP + 2 NADH), Pyruvate pool, Lactate formation
  - NADH → NAD+ arc with tooltip
  - Waste badge (“Lactate exported / Cori cycle”) and ATP tally (net 2 ATP)
  - Organism chips: Muscle cells, Red blood cells, Lactobacillus (each with fun fact)
  - Mode strip showing “Oxygen Debt” vs “Oxygen Restored”
  - Controls: Start/Pause Simulation, Reset, “Show Oxygen Restored” toggle, Auto-step speed slider
  - Step narration (4 steps) and progress indicator

### 2. Alcoholic Fermentation Explorer
- **Directory**: `docs/sims/alcoholic-fermentation-explorer/`
- **Purpose**: Focus on yeast/plant anaerobic pathway with CO2 emphasis.
- **Planned Concepts/Elements**:
  - Title + instruction banner
  - Flow: Glucose, Glycolysis (2 ATP + 2 NADH), Pyruvate, Acetaldehyde + CO2, Ethanol production
  - CO2 bubble counter and indicator text
  - NADH → NAD+ arc showing electron donation to acetaldehyde
  - Waste badge (“Ethanol + CO2”), ATP tally (net 2 ATP)
  - Organism chips: Baker’s yeast, Brewer’s yeast, Flooded plant tissue (fun facts)
  - “Fermentation tank status” strip (Anaerobic vs Aerated)
  - Controls: Start/Pause, Reset, “Show CO2 Trace” toggle, Auto-step slider
  - Step narration (4–5 steps) and progress indicator

### 3. Fermentation Comparison Matrix
- **Directory**: `docs/sims/fermentation-comparison-matrix/`
- **Purpose**: Contrast lactic vs alcoholic pathways after students master each individually.
- **Planned Concepts/Elements**:
  - Two-column responsive grid (Lactic vs Alcoholic) with rows: Location/organisms, Waste products, Gas release, ATP yield, NAD+ recycling notes
  - Interactive “Reveal/Hide” buttons so students uncover rows sequentially
  - Quick quiz mode: drag feature labels onto the correct column (e.g., “Produces CO2 bubbles”, “Occurs in muscle cells”)
  - Highlight color legend matching the first two sims
  - Controls: Start Comparison, Reset Grid, “Enter Quiz Mode” toggle
  - Optional mini-narration summarizing key differences once all rows are revealed

## Development Steps
1. **Scaffold** three new directories (main.html, index.md, metadata.json) reusing current templates.
2. **Extract** relevant concept subsets from `concepts-covered.md` into each new sim’s documentation.
3. **Implement** each MicroSim sequentially, following the lactic → alcoholic → comparison order.
4. **Cross-link** each sim’s index page to the others plus the cognitive-overload case study.
5. **Add** log updates upon completion of each sim; update `docs/sims/TODO.md` or equivalent tracking.

## Cognitive Load Mitigation Strategies
- Segmentation (three shorter sims) and progressive disclosure of visuals/labels.
- Consistent color coding and glossary to reduce re-learning.
- Optional info popovers instead of always-on text blocks.
- Step narration capped to 4–5 items for the single-path sims; matrix uses revealable rows instead of dense text.

This plan keeps the legacy MicroSim intact while charting a clear path toward three learner-friendly experiences.
