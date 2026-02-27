# Buffer Action Simulator — Design Decision Log

**Date:** 2026-02-27
**Sim:** `docs/sims/buffer-action-simulator/`
**Status:** Complete

## Overview

Interactive p5.js MicroSim comparing pH response of pure water vs. bicarbonate buffer when strong acid (HCl) or strong base (NaOH) is added. Bloom level: Analyze (L4).

## Key Design Decisions

### 1. Non-Linear Slider Mapping (Cubic Power Curve)

**Problem:** Pure water has zero buffering capacity. A linear slider mapping (1 mmol HCl in 1L water = pH 3) caused the pH to cliff-drop from 7 to 3 on the slightest slider movement — terrible UX.

**Solution:** Cubic power curve: `moles = (slider/200)^3 * 0.1`. The first half of the slider covers 0–12.5 mmol with gradual changes; the full range reaches 100 mmol for buffer exhaustion. Slider has 200 steps for finer control at low values.

**Lesson learned:** Any MicroSim controlling a logarithmic quantity (pH, concentration, dB) should use non-linear slider mapping. This pattern was added to CLAUDE.md for all future sims.

### 2. One-At-A-Time Acid/Base Sliders

Two sliders (HCl and NaOH) with mutual exclusion: moving one resets the other to zero. This avoids confusing net-acid calculations and keeps the graph axis label unambiguous.

### 3. Mode Selector Ordering

Dropdown order: Water Only (default) → Buffer Only → Both. Starting with the simpler system lets students observe pure water's dramatic pH sensitivity first, then compare with the buffer. This follows progressive disclosure principles.

### 4. Henderson-Hasselbalch Buffer Model

Bicarbonate buffer modeled with:
- pKa = 6.1 (carbonic acid)
- Initial [HCO₃⁻] = 24 mmol/L (physiological)
- 20:1 ratio [HCO₃⁻]/[H₂CO₃] giving initial pH 7.4
- Buffer capacity exhaustion at ~50 mmol, after which excess acid/base dominates

### 5. Graph X-Axis Uses Actual Mmol Values

X-axis tick marks at 0, 5, 10, 25, 50, 100 mmol (not linear slider positions) so students read real chemical quantities. The green shaded buffering zone and red dashed exhaustion line at 50 mmol provide clear visual landmarks.

### 6. Beaker Color Feedback

Liquid color shifts continuously: red (pH 0) → yellow (pH 7) → blue (pH 14) via `lerpColor()`. Provides immediate visual feedback reinforcing the numerical pH display.

## Layout Adjustments

- Beakers moved down 15px from initial position to avoid title overlap
- Drawing height increased from 430 to 455px to accommodate spacing
- Graph bottom moved up 10px for x-axis label padding
- Control height set to 90px for 2 slider rows + mode selector

## Files

- `buffer-action-simulator.js` — 310 lines, all p5.js logic
- `main.html` — 19-line HTML shell (pre-existing scaffolding)
- `index.md` — MkDocs page with iframe (pre-existing scaffolding, needs content update)

## Standards Followed

- p5-guide.md patterns: `updateCanvasSize()`, native `createSlider()`/`createSelect()`, `aliceblue`/`silver` border, `noStroke()` before `text()`
- Named colors throughout (no hex in JS)
- Responsive width via container query
