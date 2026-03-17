# Comparative Anatomy Explorer — Big Win

**Date:** 2026-02-28
**Sim:** `docs/sims/comparative-anatomy/`
**Status:** User is VERY happy with the result

## Summary

The Comparative Anatomy Explorer MicroSim was a major success story demonstrating that **text-to-image generated anatomical illustrations with a p5.js interactive overlay** are far superior to **pure p5.js polygon rendering** for biological diagrams.

## What Happened

### Attempt 1: Pure p5.js rendering (failed)

The first implementation drew all five vertebrate forelimbs (human, whale, bat, dog, bird) using p5.js polygon shapes with color-coded bone groups. The result was geometrically correct but **visually unrecognizable** — the user could not identify which animal was which. Simplified polygons simply cannot convey the anatomical detail needed for a biology textbook illustration (muscle contours, membrane textures, feather outlines, flipper shapes, etc.).

### Attempt 2: Text-to-image + p5.js overlay (big win)

1. Created a detailed image generation prompt (`image-prompt.md`) specifying:
   - Five equal vertical panels, one species per panel
   - Exact bone colors (humerus red, radius blue, ulna dark blue, carpals green, phalanges yellow)
   - Detailed anatomical descriptions for each species forelimb
   - No text/labels in the image (overlay adds all interactivity)
   - Clean biological textbook illustration style

2. User ran the prompt through a text-to-image generator → produced `forelimbs.png` with **clearly recognizable, beautifully rendered** forelimbs for all five species with precise color-coded bones.

3. Rewrote `comparative-anatomy.js` to:
   - Load `forelimbs.png` as a background image
   - Divide it into 5 equal columns (one per species)
   - Column hover: dims other columns, highlights hovered species, shows description + college placement tip in infobox below
   - Quiz mode: classification quiz for homologous/analogous/vestigial pairs
   - No per-bone hover needed — column-level hover is sufficient and cleaner

4. Cropped vertical whitespace from the generated image using Python/PIL.

## Key Lesson

**For anatomical and biological structure diagrams, always use text-to-image generation for the illustration and p5.js only for the interactive overlay.** Pure p5.js polygon rendering cannot produce the visual fidelity needed for recognizable anatomy. The hybrid approach gives you:

- **Beautiful, recognizable illustrations** from the image generator
- **Full interactivity** (hover, quiz, highlight) from the p5.js overlay
- **Clean separation** — image in a PNG, interactivity in JS, data in the code

## Files

| File | Role |
|------|------|
| `forelimbs.png` | Text-to-image generated illustration (1536×686 after crop) |
| `image-prompt.md` | Detailed prompt used to generate the image |
| `comparative-anatomy.js` | p5.js overlay with column hover + quiz mode |
| `main.html` | HTML shell loading p5.js and the JS file |

## Approach for Future Anatomy MicroSims

When a MicroSim requires rendering biological structures (organs, cells, skeletal anatomy, molecular structures, organisms):

1. Write a detailed `image-prompt.md` with exact colors, layout, and spatial requirements
2. Generate the illustration using a text-to-image model
3. Crop whitespace with `PIL`/`sips`
4. Write a p5.js overlay that loads the image and adds hover/click interactivity
5. Use column or region-based hit detection (not per-pixel)
