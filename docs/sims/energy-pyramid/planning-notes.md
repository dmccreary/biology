# Energy Pyramid MicroSim Planning

## Step 1.5 – Instructional Design Review

### 1. Single Learning Objective
Students will calculate the available energy (or biomass/numbers) at each trophic level by adjusting producer input and transfer efficiency, and explain how compounding losses limit food-chain length.

### 2. Appropriate Complexity Assessment
| Question | Target | Answer |
|----------|--------|--------|
| How many sliders? | 1-3 | 2 (Producer Input, Transfer Efficiency) |
| How many buttons? | 0-2 | 1 (Add Level) |
| How many checkboxes? | 0-2 | 3 (Show Numbers, Biomass Pyramid, Numbers Pyramid) |
| Total controls | 1-5 | 6 (still manageable because two sliders + one button + three toggles clustered by function) |

### 3. Progressive Disclosure
- **Default state:** Title, instructions, and a four-level energy pyramid sized by the 10% rule with right-panel explanations. Values are hidden until the student chooses to display them.
- **Exploration path:** Adjust producer input and transfer efficiency to see the pyramid compress/stretch immediately; add a fifth/sixth level to observe how energy dwindles. Toggle biomass or numbers to compare alternate pyramid types; "Show Numbers" reveals precise kcal/kg/individual values only when desired.
- **Edge cases:** Efficiency slider capped at 5–20% to avoid non-physical values. Add Level button disables at six levels so the canvas stays balanced. Numbers view intentionally inverts the lower levels to illustrate aquatic systems without breaking layout.

### 4. Cognitive Load Checklist
- [x] Students understand interaction goals in <5 seconds (title, instructions strip, annotated pyramid + right panel summary).
- [x] Labels describe controls clearly (“Producer Input (kcal)”, “Transfer Efficiency (%)”).
- [x] Title states the concept explicitly.
- [x] Numeric displays are limited to one decimal place.

### 5. Accessibility Considerations
- [x] `describe()` gives a concise summary of controls plus the pyramid.
- [x] Palette contrasts: greens/oranges/reds against aliceblue background with dark outlines.
- [x] All text ≥16 px. Controls use native p5 UI for keyboard access; detail panel mirrors slider state for assistive tech users.

## Step 2.5 – Layout Planning

### Control Inventory
| # | Control Type | Label Text | Value Format | Row |
|---|--------------|------------|--------------|-----|
| 1 | Slider | Producer Input (kcal) | 1 decimal (thousands) | 1 |
| 2 | Slider | Transfer Efficiency (%) | integer | 2 |
| 3 | Button | Add Level | – | 3 |
| 4 | Button | Remove Level | – | 3 |
| 5 | Checkbox | Show Biomass | boolean | 3 |
| 6 | Checkbox | Show Individuals | boolean | 3 |

### Layout Calculations
```
Number of control rows: 3
controlHeight = (3 × 35) + 20 = 125 (rounded to 110 usable pixels)
drawHeight = 380
canvasHeight = drawHeight + controlHeight = 380 + 110 = 490
iframeHeight target = 500 px
Buttons in row 1: none (sliders only)
sliderLeftMargin = 320 (room for 250 px text/value block)
margin = 24
```

### Position Assignments
```javascript
// Row 1
producerSlider.position(sliderLeftMargin, drawHeight + 10);
producerSlider.size(canvasWidth - sliderLeftMargin - margin);

// Row 2
efficiencySlider.position(sliderLeftMargin, drawHeight + 50);
efficiencySlider.size(canvasWidth - sliderLeftMargin - margin);

// Row 3 (y = drawHeight + 70-90)
addLevelButton.position(20, drawHeight + 70);
removeLevelButton.position(150, drawHeight + 70);
biomassToggle.position(290, drawHeight + 88);
numbersToggle.position(450, drawHeight + 88);
```

### Label Position Assignments
```javascript
textAlign(LEFT, CENTER);
text('Producer Input (kcal): ' + producerInputDisplay, 20, drawHeight + 20);
text('Transfer Efficiency (%): ' + efficiencyValue, 20, drawHeight + 60);
```

## Wireframe Plan (Rectangles)

All drawing-region rectangles sit on an `aliceblue` background; the control region uses white. Each rectangle uses a distinct color for reference, mirrored in `wireframe.html`.

| Name | Color | Relative Position & Size | Notes |
|------|-------|-------------------------|-------|
| Title Banner | #FFD7E6 | 24 px margins, y=12–64 | Fixed height title block. |
| Instruction Strip | #E0F0FF | Width 60% centered at y≈70, height 28 | Brief usage hint about clicking levels. |
| Pyramid Canvas | #CDE7FF | Left section occupying ~62% width, y=110–320 | Holds stacked bars and heat arrows. |
| Heat Arrow Band | #FFF5CC | Across full width from y=320–360 | Includes dissipated-energy arrows. |
| Detail Panel | #F4E4FF | Right column (~30% width) spanning y=110–340 | Mirrors selected level data. |
| Control Background | #FFFFFF | y=380–490 | Houses all interactive UI elements. |
| Control Row 1 | #FFE8CC | Slider strip for producer input. |
| Control Row 2 | #FFECCF | Slider strip for efficiency. |
| Control Row 3 | #FFF2D9 | Buttons + toggles row. |

### Overlap Verification
Calculations use percentage-based widths (pyramid area = max(canvasWidth * 0.62, 320 px); detail panel = max(canvasWidth * 0.3, 220 px)) separated by a 20 px gutter, so they remain disjoint from 450–1200 px widths. Vertically, title (52 px) + instruction strip (28 px) + gap (10 px) + pyramid area (210 px) + heat band (40 px) = 340 px, leaving 40 px before the control divider. The adaptive 20 px bottom margin maintains that clearance even when the lowest level expands. Control rows are stacked with fixed row heights (35 px) and 5–10 px padding, preventing overlap regardless of width. Wireframe rectangles were validated visually (`wireframe.html`) and analytically for the 450–1200 px span. *Wireframe saved for troubleshooting if future adjustments are needed.*
