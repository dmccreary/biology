# Fermentation Comparison Matrix — TODO

## Layout Fixes

- [ ] Text in data cells gets clipped at narrow widths (<700px) — add ellipsis or reduce font size more aggressively
- [ ] Feature column (22%) is too narrow for longer labels like "NAD+ recycling" — consider 25/37.5/37.5 split
- [ ] Row height should expand dynamically based on text content rather than dividing available height evenly
- [ ] Column headers overlap text at very narrow widths — switch to abbreviated headers below ~600px ("Lactic" / "Alcoholic")
- [ ] Add horizontal scroll or stacked mobile layout for screens under 500px
- [ ] Table outer border and rounded corners for a polished look
- [ ] Alternating row colors need more contrast — currently too subtle

## Quiz Mode Redesign

- [ ] Show a visible feedback banner (green for correct, red for incorrect) that slides in from the top and auto-dismisses after 1.5 seconds
- [ ] Add a gold star icon next to each correctly answered question in the quiz progress area
- [ ] Show a running score counter ("3/10 correct") prominently below the question text
- [ ] Incorrect answers should shake the clicked button (CSS-style shake animation via translate oscillation)
- [ ] Add a "Skip" button that reveals the answer and moves to the next question without awarding a point
- [ ] Celebration animation when quiz is complete:
  - Confetti particles (colored circles/rectangles) burst from center and drift downward
  - Large "Congratulations!" text fades in at center
  - Final score displayed prominently ("You scored 8/10!")
  - "Try Again" button to restart the quiz with shuffled question order
- [ ] Shuffle quiz question order on each attempt so repeated plays feel fresh

## Content Improvements

- [ ] Add a "Both Same" column indicator for rows where lactic and alcoholic are identical (location, oxygen, ATP yield)
- [ ] Add tooltip-style popover when hovering a cell in explore mode showing an expanded explanation
- [ ] Write a full lesson plan in index.md (currently all TODOs)
