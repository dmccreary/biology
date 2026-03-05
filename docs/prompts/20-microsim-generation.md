# MicroSim Generation Prompt

!!! prompt
    Look at the file @docs/sims/TODO.md file.  Select a Microsim that has not been
    started.  The scaffolding files such as index.md, main.html and metadata.json will
    be present in the @docs/sims directory.  The javascript file will not be there.
    Your task is to do the following:

    1. Create a sample layout of the user interface elements in the microsim.  Place
    the elements in wireframe.html using SVG rects.  Place horizontal arrows in the
    `rect`s that will changes as the width of the microsim changes.  Note that the height
    will be fixed.
        1. Make the drawing area on top of the controls area
        1. Make the background of the drawing area aliceblue
        1. Make the background of the control area white
        1. Place a silver border around both areas so the designer can verify the sizes
        1. Place the title centered at the top
        1. Place the other drawing elements under the title
        1. Place the controls in the controls area
        1. Generate the wireframe.html file with clear names and details about every region with a name, every label, value and control
        1. Open the wireframe.html file in the browser for the user to see.  Remember they are running `mkdocs serve`
        1. Review the layout with the user
        1. Generate the javascript file to populate each region of the wireframe
        1. Update the wireframe as you need to putting a focus on estimating the height and width of each region
        1. Calculate the total height needed by the microsim and update the iframe height in the index.md file