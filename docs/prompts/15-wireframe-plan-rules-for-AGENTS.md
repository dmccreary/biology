# Adding a Wireframe Plan Step

!!! prompt
    Add a new set of rules to the AGENTS.md file.  These rules govern the
    planning that must be done before you generate a p5.js layout.  The
    rules should be executed after you have a high-level plan for a new
    p5.js microsim, but before you place items on the canvas.  
    
    The ruleset
    should be titled "Wireframe Plan".  In the Wireframe Plan you will create
    a series of rectangles that represent the items you will place on the
    canvas.  Start with the title. You should be able to calculate the margin
    above the title and the height of the title text.  From this you can draw
    a rectangle wireframe of the title.  Once this is done you know you can't
    create other elements that will cover the title rectangle.  The title is
    placed relative to the top of the canvas and there are no responsive rules
    to worry about.  Next, place the key non-control elements in the drawing
    region.  Estimate the height and width of each element and remember that
    the items should be placed so that as the width of the canvas changes,
    the items will be repositioned relative to the canvas width.  In general,
    the canvas height will be fixed by the iframe height.  Next, create a plan
    for all the controls in the control region below the drawing region.  For
    simulations place a "Start/Pause" button in the lower left corner. Place
    all label/value pairs to the left of the sliders.  Create a rectangle
    for each control and their label/value pairs.  Finally, verify that each
    wireframe rectangle will not overlap other wireframe rectangles for any
    width between 450 px and 1200 px.
    Use variable sized fonts when needed.
    Once you have the wireframe plan done, indicate to the user that there are
    no overlapping regions in the wireframe but save the wireframe design so
    that if there are problems the user can ask to see the wireframe design.
    Make sure that each rectangle in the wireframe design has a different
    color and a clear name so you can have a precise conversations about the
    wireframe design.
  
  Use aliceblue for the background of the drawing area
  and white for the background of the control area.  If these requirements
  are not clear, ask me questions.  The goal is to minimize the probability
  that there will be overlapping regions which has been the biggest problem
  with designs in the past. You can view the microsim logs to see this.

## Wireframe Plan

After drafting a high-level concept for any new p5.js MicroSim,
pause before coding and build a "Wireframe Plan" consisting of 
labeled rectangles that represent every canvas element.

Begin with the title: calculate its top margin and text height,
sketch a rectangle for it relative to the top edge (no responsive rules needed), 
and treat that rect as reserved space before placing other components.

Lay out every non-control element in the drawing region next; estimate 
each rectangle's width and height, assume the overall canvas height is 
fixed by the iframe, and position elements so their
horizontal alignment updates with canvas width changes.

Sketch the control region (white background) below the drawing
region (aliceblue background): add a Start/Pause button anchored
to the lower-left corner for simulations, draw rectangles for eve
ry control plus its label/value pair (labels/values always to the
left of their sliders), and ensure each rectangle uses a distinct
color and name for clear reference.

When the wireframe is complete, validate that no rectangles overlap 
for any canvas width between 450 px and 1200 px, adjusting font sizes as needed, 
and record the plan so it can be shared later if troubleshooting is required.

Always inform the user that the wireframe regions do not overlap before 
moving on to implementation, and keep the saved wireframe plan handy 
for follow-up questions