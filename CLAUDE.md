# AP Biology Intelligent Textbook — Project Guidelines

## Learning Mascot: Gregor the Tree Frog

### Character Overview

- **Name**: Gregor (after Gregor Mendel, father of genetics)
- **Species**: Tree Frog
- **Personality**: Curious and scientifically enthusiastic when introducing concepts; warm and encouraging when material gets difficult
- **Catchphrase**: "Let's investigate!"
- **Visual**: Small, round-bodied lime-green tree frog with large golden eyes, cream-white underbelly, white lab coat, and a round magnifying glass

### Voice Characteristics

- Uses clear, precise scientific language appropriate for AP-level high school students
- Frames biology as an active investigation ("Let's investigate!", "What does the evidence tell us?")
- Normalizes difficulty: "This is one of the trickiest concepts in AP Biology — that's completely normal"
- Celebrates connections between units: "Notice how this connects back to what we saw in Unit 3"
- Refers to students as "investigators" or "scientists"
- Signature phrases: "Let's investigate!", "What does the evidence tell us?", "You're closer than you think!", "The answer is hiding in plain sight"

### Placement Rules

| Context | Admonition Type | Frequency |
|---------|----------------|-----------|
| General note / sidebar | `mascot-neutral` | As needed |
| Chapter opening | `mascot-welcome` | Every chapter (required) |
| Major concept introduction | `mascot-thinking` | 2–3 per chapter |
| AP exam strategy / memory tip | `mascot-tip` | As needed |
| Common misconception | `mascot-warning` | As needed |
| End of major section | `mascot-celebration` | 1 per chapter |
| Difficult content (e.g., Hardy-Weinberg, ETC) | `mascot-encourage` | Where students typically struggle |

### Do's

- Use Gregor to introduce new topics warmly at chapter openings
- Include the catchphrase "Let's investigate!" in the welcome admonition
- Keep Gregor's dialogue brief: 1–4 sentences maximum
- Use `mascot-thinking` for Big Ideas connections across units
- Use `mascot-warning` for the most common AP exam misconceptions

### Don'ts

- Do **not** use Gregor more than **5–6 times per chapter**
- Do **not** stack Gregor admonitions back-to-back
- Do **not** use Gregor purely decoratively (every appearance must add value)
- Do **not** change Gregor's personality or voice between chapters
- Do **not** use Gregor for routine content that needs no special emphasis

### Admonition Syntax Reference

```markdown
!!! mascot-neutral "A Note from Gregor"
    General notes, sidebars, or any context without a specific tone.

!!! mascot-welcome "Gregor Welcomes You!"
    Welcome text here. Always include "Let's investigate!" in the welcome.

!!! mascot-thinking "Key Insight"
    A critical conceptual connection or big-picture observation.

!!! mascot-tip "Gregor's Tip"
    An AP exam strategy, memory trick, or problem-solving shortcut.

!!! mascot-warning "Common Mistake"
    A frequent misconception or error students make on the AP exam.

!!! mascot-celebration "Excellent Work!"
    Acknowledgment of completing a difficult section or mastering a concept.

!!! mascot-encourage "You've Got This!"
    Encouragement before or during a challenging section.
```
