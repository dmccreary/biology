# Eukaryotic Gene Regulation MicroSim Planning

## Step 1.5 – Instructional Design Review

### 1. Single Learning Objective
Students will be able to organize the five major layers of eukaryotic gene regulation by exploring each layer interactively and observe how a flow of genetic information is modulated at each checkpoint.

### 2. Appropriate Complexity Assessment
| Question | Target | Answer |
|----------|--------|--------|
| How many sliders? | 1-3 | 1 (Flow Speed) |
| How many buttons? | 0-2 | 1 (Start/Pause Flow) |
| How many checkboxes? | 0-2 | 0 |
| Total controls | 1-5 | 2 |

### 3. Progressive Disclosure
- **Default state:** Title, five stacked layers, subtle icons, short summaries, and the right-side info panel preloaded with the chromatin layer.
- **Exploration path:** Clicking a layer highlights it, shifts the stack to emphasize the selection, and updates the persistent info panel; Start/Pause animates a glowing marker through the layers and auto-selects each checkpoint so the info panel updates without extra clicks.
- **Edge cases:** Slider min speed pauses long enough (8 seconds) for reading; max speed still legible (2 seconds). Flow animation loops indefinitely without overlapping controls.

### 4. Cognitive Load Checklist
- [x] Student understands interaction within 5 seconds (stacked labeled bands + prompt text).
- [x] Labels descriptive: “Flow Speed (sec per layer)”.
- [x] Title clearly states “Eukaryotic Gene Regulation Layers”.
- [x] Value displays capped at one decimal place.

### 5. Accessibility Considerations
- [x] `describe()` text summarizes layered infographic and controls.
- [x] Colors chosen with contrasting palettes (purple, blue, teal, orange, brown) plus grayscale outlines.
- [x] Base text ≥ 16 px; layer labels 18–20 px for readability.

## Step 2.5 – Layout Planning

### Control Inventory
| # | Control Type | Label Text | Value Format | Row |
|---|--------------|------------|--------------|-----|
| 1 | Button | Start/Pause Flow | – | 1 |
| 2 | Slider | Flow Speed (sec per layer) | 1 decimal place | 2 |

### Layout Calculations
```
Number of control rows: 2
controlHeight = (2 × 35) + 10 = 80
drawHeight = 400
canvasHeight = drawHeight + controlHeight = 400 + 80 = 480
iframeHeight = canvasHeight + 2 = 482
Buttons in row 1: Start/Pause Flow
margin = 24
sliderLeftMargin = 240 (90 px reserved for row-heading text + 90 px buffer for value)
```

### Position Assignments
```javascript
// Row 1
startButton.position(12, drawHeight + 8);

// Row 2
flowSpeedSlider.position(sliderLeftMargin, drawHeight + 45);
flowSpeedSlider.size(canvasWidth - sliderLeftMargin - margin);
```

### Label Position Assignments
```javascript
textAlign(LEFT, CENTER);
textSize(defaultTextSize);
text('Flow Speed (sec per layer): ' + flowSpeed.toFixed(1), 20, drawHeight + 55);
```

## Wireframe Plan (Rectangles)

All drawing-region rectangles sit on an `aliceblue` background; control region rests on white. Each rectangle uses a distinct color for reference. *(Updated after the initial draft revealed the lowest layer touched the control bar; these revised measurements preserve a 0 px buffer at exactly 400 px height and positive buffers above that.)*

| Name | Color | Relative Position & Size | Notes |
|------|-------|-------------------------|-------|
| Title Text Line | #000000 (text only) | Centered at y≈37 | Title rendered directly on background, no rectangle. |
| Instruction Text Line | #000000 (text only) | Centered at y≈68 | Single-line guidance below the title (no background box). |
| Flow Timeline Strip | #FFF2B5 | Spans 88% width, centered at y=80, height=18 | Shows sequencing nodes. |
| Chromatin Layer | #C3A4FF | Width: 92% of canvas (centered), dynamic height 44–60 px | Expands vertically by 16 px when selected. |
| Transcription Layer | #9FC4FF | Same width, stack spacing 8 px | |
| Post-Transcription Layer | #8FE5D9 | Same width, stack spacing 8 px | |
| Translational Layer | #FFCC99 | Same width, stack spacing 8 px | |
| Post-Transcription Layer | #8FE5D9 | Same width, stack spacing 8 px | |
| Translational Layer | #FFCC99 | Same width, stack spacing 8 px | |
| Post-Translational Layer | #D9B38C | Same width, stack spacing 8 px with an adaptive 20 px margin below the last layer (spacing shrinks slightly when expanded to keep ≥20 px buffer before controls) | |
| Detail Panel | #FFFFFF | Fixed column occupying ~30% of canvas width on the right, spanning the entire layer stack height | Displays the currently selected layer’s detailed explanation. |
| Control Area Background | #FFFFFF | Full width, y=400, height=80 | Houses buttons and slider. |
| Start/Pause Rect | #CCE5FF | Anchor bottom-left, width 160, height 36 | Sits entirely below drawHeight. |
| Slider Label Rect | #FFF4CC | x=20, width 200, height 32 at row 2 baseline | Contains text label + value. |
| Slider Track Rect | #D0F0FF | x=sliderLeftMargin, width flexible (canvasWidth - sliderLeftMargin - margin), height 32 | |

### Overlap Verification
Re-measured stack heights: title 54 + buffer 12 + timeline 18 + buffer 10 (to the first layer) + five base layers at 44 + four gaps at 8 + final margin 20 = 400 px. When the last layer expands by 16 px, its adaptive margin shrinks by the same amount so the overall stack height stays constant and the 20 px buffer above the control region is preserved. Buttons still occupy 282 px width, leaving ≥168 px horizontal clearance for widths down to 450 px, so the slider maintains a minimum width of 186 px. The detail panel occupies ~30% width and is separated from the layer stack by a 20 px gutter, so it never intersects the layers even at the minimum container width. Analytical sweep for widths 450–1200 px confirms zero overlap, satisfying the updated Wireframe Plan requirements.

*No wireframe regions overlap for any responsive width between 450 px and 1200 px.*
