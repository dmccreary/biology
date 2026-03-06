# Concepts Covered in the Fermentation Pathways MicroSim

## Global Layout and Visual Regions
- **Responsive canvas architecture**: The drawing deck (680 px) stacked above the 180 px white control deck establishes the standard MicroSim two-zone layout.
- **Title banner**: Communicates the overall learning goal—comparing fermentation pathways and emphasizing NAD+ recycling.
- **Mode strip**: Displays cellular oxygen status (Anaerobic vs Aerobic) and Electron Transport Chain readiness, reinforcing how environmental conditions regulate fermentation.
- **Parallel pathway panels**: Separate lactic acid and alcoholic fermentation into side-by-side, width-responsive visual pipelines for contrastive learning.
- **Central NAD+ regeneration column**: Highlights the shared biochemical purpose of fermentation—continuously supplying oxidized NAD+ to glycolysis.
- **Step narration bar**: Provides stage summaries, time-ordered storytelling, and a progress indicator for the eight-step instructional sequence.
- **Fun fact and legend band**: Surfaces organism trivia when icons are clicked and explains the color coding (lactic highlight, alcoholic highlight, NADH arc).

## Lactic Acid Fermentation Concepts
- **Stage 1: Glucose (C6H12O6)**: Introduces the fuel molecule entering the cytosol.
- **Stage 2: Glycolysis**: Shows splitting of glucose, net yield of 2 ATP + 2 NADH, and sets the starting point for both pathways.
- **Stage 3: Pyruvate + NADH pool**: Depicts the end products of glycolysis awaiting fate decisions under anaerobic conditions.
- **Stage 4: Lactate formation**: Demonstrates reduction of pyruvate to lactate via NADH -> NAD+ conversion, emphasizing redox balance.
- **Lactic waste badge**: Labels lactate as the exported waste product and connects to systemic processes like the Cori cycle.
- **ATP tally card**: Reinforces that fermentation does not add ATP beyond glycolysis (net 2 ATP per glucose).
- **Organism icons**: Muscle cells, red blood cells, and Lactobacillus represent real-world lactic fermenters; clicking them delivers context-specific trivia.
- **Arrowed flow relationships**: Glucose -> Glycolysis -> Pyruvate -> Lactate arrows visualize electron movement and sequential enzyme activity.
- **NADH curved arrow**: Shows the recycling pathway from NADH back to NAD+, clarifying why fermentation is essential when the ETC stalls.

## Alcoholic Fermentation Concepts
- **Stage 1: Glucose feedstock**: Mirrors the left path, emphasizing shared glycolytic entry.
- **Stage 2: Glycolysis output**: Highlights 2 ATP + 2 NADH creation before fermentation begins.
- **Stage 3: Pyruvate intermediate**: Marks the branching point leading to CO2 release.
- **Stage 4: Acetaldehyde + CO2**: Captures pyruvate decarboxylation, introducing CO2 evolution (visualized with bubbles) and enzyme pyruvate decarboxylase.
- **Stage 5: Ethanol formation**: Shows acetaldehyde accepting electrons from NADH to regenerate NAD+.
- **Alcoholic waste badge**: Labels ethanol + CO2 as waste outputs (bread rising, beverage production, plant survival gas exchange).
- **ATP tally card**: Again stresses the immutable “net 2 ATP” rule under fermentation.
- **Organism icons**: Baker’s yeast, brewer’s yeast, and flooded plant tissue illustrate ecological and industrial contexts; each icon triggers a fun fact.
- **Arrow relationships**: Sequential connectors and NADH arcs trace the electron flow unique to alcoholic fermentation.

## Shared and Comparative Concepts
- **Glycolysis as common entry**: Both columns begin with glycolysis, stressing its universality.
- **NAD+ regeneration hub**: Circular diagram and text describe how both pathways loop oxidized NAD+ back to glycolysis, the central learning objective.
- **NADH <-> NAD+ dynamic**: Indicates reversible redox cycling and links to the central column highlight.
- **Electron Transport Chain dependency**: Mode strip plus anaerobic/aerobic toggle show when fermentation is mandatory versus optional.
- **CO2 release indicator**: Only the alcoholic path shows CO2 bubbles, helping learners differentiate the pathways by gaseous byproduct.
- **Waste removal**: Both badges focus on exported products (lactate vs ethanol+CO2), tying to cellular effects like pH changes or bread rising.
- **ATP budget comparison**: Each panel carries the identical “Net 2 ATP” information to emphasize the energetic limitation of fermentation.
- **Organism trivia relationships**: Clicking icons feeds the fun-fact panel, linking organisms to their fermentation strategy and reinforcing applied biology.
- **Legend relationships**: The legend clarifies visual encoding (magenta = lactic highlight, green = alcoholic highlight, deep magenta = NADH arc), aiding interpretation of the entire drawing area.

## Step-Through Narrative Concepts
1. **Glycolysis splits glucose**: Both pathways share this initial step and energy yield.
2. **Lactic reduction of pyruvate**: Focuses on NADH donating electrons to pyruvate.
3. **Lactate export**: Covers tissue-level consequences and the Cori cycle handoff.
4. **Alcoholic CO2 release**: Explains decarboxylation before reduction.
5. **Ethanol formation**: Details NADH oxidation in yeast/plants.
6. **Organism reliance**: Highlights ecological/industrial dependence on each pathway.
7. **NAD+ loop closure**: Shows recycled NAD+ feeding glycolysis; highlights NAD+ column.
8. **ATP ceiling reminder**: Concludes with the energy limitation message and central-column summary text.

## Controls and Interaction Concepts
- **Start/Pause Simulation button**: Introduces autoplay vs manual progression and enforces “Start Simulation” default requirement.
- **Reset button**: Restores lactic-only focus, anaerobic mode, Step 1, and clears fun facts, underscoring experimental repeatability.
- **Previous/Next buttons**: Permit manual navigation through the eight conceptual steps.
- **Step counter display**: Communicates learner position in the sequence (Step X / 8).
- **Pathway focus dropdown**: Lets the learner isolate lactic, alcoholic, or both pathways—supporting differentiated study.
- **Oxygen mode dropdown**: Switches between anaerobic (ETC off) and aerobic (ETC on), demonstrating condition-dependent reliance on fermentation.
- **Auto Step Delay slider**: Adjusts autoplay tempo (1.0–4.0 s), illustrating control over pacing.
- **Status text**: Indicates whether autoplay is running to prevent confusion and highlight play/pause state.
- **Fun-fact hover/click response**: Clicking organism tiles populates the trivia field while pausing autoplay, reinforcing contextual knowledge.
- **Progress bar**: Visual representation of completion percentage, reinforcing sequencing and providing metacognitive feedback.

## Relationships Across Regions
- **Column alignment**: Lactic column, NAD+ hub, and alcoholic column share vertical alignment, visually linking both pathways through the central purpose.
- **Responsive gutters and widths**: Horizontal arrows in the wireframe demonstrate that the pathways and control deck stretch with iframe width, introducing responsive design as a concept for consistent UX.
- **Color semantics**: Shared palette ties highlights, waste badges, and legends together; students learn to associate colors with fermentation types and data states.
- **Mode strip ↔ controls dependency**: Selecting an oxygen mode updates the mode strip messaging, demonstrating cause-and-effect between control deck inputs and drawing-area outputs.
- **Organism icons ↔ fun fact panel**: Interaction shows the relationship between visual icons and textual content, linking imagery to conceptual takeaways.
- **NADH arcs ↔ central column**: Curved arrows in each pathway direct attention to the central NAD+ role, making the “recycle to glycolysis” relationship explicit.

These concepts collectively ensure that every region, biological term, relationship, and interactive control in the Fermentation Pathways MicroSim is explicitly documented and ready for instructional reference.
