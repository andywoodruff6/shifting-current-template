# Editorial Illustrations Workflow

**Create hand-drawn, sketch-style metaphorical images representing concepts and ideas**

Generates conceptual illustrations in a hand-drawn sketch style with line work and strategic accent colors.

## Purpose

Editorial illustrations transform abstract concepts into visual form with an approachable, human quality. They should:
- Capture the essence of an idea visually
- Balance professional clarity with human warmth
- Be thought-provoking and memorable
- Communicate meaning without literal representation
- Feel hand-crafted and authentic, not overly polished

**Difference from Blog Headers:**
- **Blog Headers:** Support specific article, provide context
- **Editorial Illustrations:** Standalone conceptual art, more abstract

**Visual Style:**
Hand-drawn, sketch-like illustrations with black line work and strategic use of accent colors. Choose accent colors that fit your brand or the concept being illustrated.

## Workflow Steps

### Step 1: Understand the Concept

Deeply analyze the concept or idea to be illustrated:

**Key Questions:**

1. **What is the core concept?**
   - What is the fundamental idea or theme?
   - Can you summarize it in one sentence?

2. **What are the key attributes?**
   - What characteristics define this concept?
   - What makes it unique or notable?

3. **What feelings does it evoke?**
   - What emotions are associated with this concept?
   - What mood should the illustration convey?

4. **What's the context?**
   - Where will this be used?
   - Who is the audience?
   - What's the intended message?

**Techniques for Understanding:**
- Read related content thoroughly
- Identify recurring themes
- Look for natural metaphors in the text
- Consider opposite concepts for contrast
- Think about physical manifestations of abstract ideas

### Step 2: Develop Visual Metaphor

Translate the abstract concept into visual form through metaphor:

**Metaphor Development Process:**

#### A. Identify Metaphor Candidates

**Physical Objects:**
- What physical objects embody this concept?
- Example: Growth -> tree, sprout, mountain
- Example: Connection -> threads, networks, bridges

**Actions/Processes:**
- What actions represent this concept?
- Example: Transformation -> metamorphosis, flowing water
- Example: Collaboration -> hands building, puzzle pieces

**Natural Phenomena:**
- What natural occurrences mirror this concept?
- Example: Change -> seasons, tides, weather
- Example: Emergence -> sunrise, blooming flowers

**Spatial Relationships:**
- How might space represent this concept?
- Example: Hierarchy -> layers, stairs, mountains
- Example: Complexity -> mazes, tangles, webs

#### B. Select the Strongest Metaphor

Choose based on:
- **Clarity:** Is the connection intuitive?
- **Originality:** Has this been overused?
- **Visual Interest:** Will it be compelling to look at?
- **Emotional Resonance:** Does it evoke the right feeling?

#### C. Refine the Concept

**Bad (too vague):**
"Something representing growth"

**Good (specific):**
"A small sapling growing through a crack in concrete, symbolizing growth through adversity"

**Better (even more specific):**
"Young tree breaking through urban concrete, leaves reaching toward light, representing organic growth overcoming systemic barriers"

### Step 3: Define the Visual Style

**Default Style: Hand-Drawn Sketch**

All editorial illustrations use this consistent style approach:

**Core Characteristics:**
- Hand-drawn, sketch-like line work in black
- Organic, slightly imperfect lines (not perfectly geometric)
- Human, approachable quality - feels hand-crafted
- Clean but authentic, not overly polished
- Minimalist approach with strategic color accents

**Color System:**
- **Primary**: Black (#000000) for all line work
- **Accent 1**: Choose a primary accent color for key highlights (e.g., a warm tone like orange, red, or gold)
- **Accent 2**: Choose a secondary accent for balance (e.g., a cool tone like teal, blue, or green)
- **Background**: White or light neutral
- Strategic, intentional color placement (not overused)

**Tip:** Pick accent colors that match your brand or the mood of the concept. Warm colors (orange, red) convey energy and action. Cool colors (teal, blue) convey calm and trust.

**Visual Quality:**
- Balance between professional and human
- Clear communication with warmth
- Sketch-like without being rough or unprofessional
- Line-focused with minimal fills
- Varying line weights for depth and emphasis

### Step 4: Construct the Prompt

Build a comprehensive prompt:

```
Hand-drawn editorial illustration in sketch style representing the concept of [CONCEPT].

CONCEPT & MEANING:
[1-2 sentences explaining what the illustration represents]
[The deeper meaning or message to convey]

VISUAL METAPHOR:
[Specific description of your visual metaphor]
[What elements are present and how they relate]
[How the metaphor communicates the concept]

ARTISTIC STYLE:
- Hand-drawn, sketch-like illustration style
- Black line work with organic, slightly imperfect lines
- Human, approachable quality - not perfectly geometric or polished
- Clean but hand-crafted feeling
- Minimalist with strategic use of accent colors
- Professional yet warm and authentic

COLOR PALETTE:
- Primary: Black (#000000) for all line work and main illustrations
- Accent 1: [Your chosen primary accent color with hex] for key highlights
- Accent 2: [Your chosen secondary accent color with hex] for balance
- Background: White or light neutral
- Strategic color placement - use sparingly for maximum impact
- [Specify which elements get which accent color and why]

COMPOSITION:
- [Describe the arrangement and focal points]
- [Balance, symmetry, or dynamic tension]
- [How elements relate spatially]
- [Where accent colors draw the eye]

LINE QUALITY:
- Hand-drawn appearance with organic variation
- Lines should feel sketched, not perfectly straight or smooth
- Varying line weights for depth and emphasis
- Crosshatching or parallel lines for texture/shading if needed
- Imperfect but intentional

MOOD & ATMOSPHERE:
[Describe the emotional tone]
[Balance professional clarity with human warmth]
[What the viewer should feel when seeing this]

CRITICAL REQUIREMENTS:
- Sketch-like, hand-drawn quality (NOT polished vector art)
- Black line work as foundation
- Accent colors used strategically, not everywhere
- Professional but approachable
- Clear and communicative
- Thought-provoking and memorable
- [Aspect ratio: square, landscape, portrait]

NO TEXT or labels in the image - visual communication only.
```

### Step 5: Generate the Illustration

```bash
bun run .claude/skills/art/tools/generate-image.ts \
  --model "google/gemini-3-pro-image-preview" \
  --prompt "[YOUR PROMPT]" \
  --size "[SIZE]" \
  --output "[OUTPUT_PATH]"
```

**Size Options:**
- Square artwork: `1024x1024`
- Landscape: `1792x1024`
- Portrait: `1024x1792` (if supported)

### Step 6: Review and Evaluate

**Conceptual Quality:**
- [ ] Captures the essence of the concept
- [ ] Visual metaphor is clear (or intriguingly ambiguous)
- [ ] Thought-provoking and memorable
- [ ] Emotionally resonant

**Artistic Quality:**
- [ ] Hand-drawn, sketch-like aesthetic (not over-polished)
- [ ] Strong composition
- [ ] Effective use of accent colors
- [ ] Appropriate level of abstraction

**Evaluation Questions:**
1. Does this make you think?
2. Is it memorable?
3. Could you describe the metaphor to someone?
4. Does it work without explanation?
5. Would you be proud to publish this?

**If validation fails:**
- Adjust prompt for more specificity or different approach
- Try different model for alternative interpretation
- Regenerate and re-evaluate

### Step 7: Save and Document

**Naming Convention:**
```
[project]-illustration-[concept-slug]-[version]-[date].png

Examples:
blog-illustration-growth-v1-20250125.png
newsletter-illustration-transformation-v2-20250125.png
```

**Save Location:**
- Default: `04_Assets/illustrations/`
- Project-specific: `02_Projects/[project-name]/assets/`

## Tips for Success

### Concept Development
- Spend time understanding the concept deeply
- Don't settle for first metaphor - brainstorm multiple options
- Keep it simple enough for hand-drawn style

### Visual Metaphor Selection
- Balance clarity with sophistication
- Avoid cliches (light bulbs for ideas, etc.)
- Test if metaphor works without explanation
- Ensure metaphor works well in sketch-style line drawing

### Hand-Drawn Style
- Emphasize the sketch aesthetic in your prompts
- Be clear about "NOT polished vector art"
- Request organic, imperfect lines explicitly
- Specify varying line weights for depth

### Color Usage
- Use accent colors strategically, not everywhere
- Assign meaning to each color choice
- Less is more - sparse color creates impact
- Black line work should dominate
- Background should stay neutral

### Prompt Crafting
- Be specific about line quality and imperfections
- Describe mood balancing professional and approachable
- Include technical details (line weights, hatching, etc.)
- Always specify your accent colors and their purpose

## Quick Reference

**Command Template:**
```bash
bun run .claude/skills/art/tools/generate-image.ts \
  --model "google/gemini-3-pro-image-preview" \
  --prompt "YOUR HAND-DRAWN EDITORIAL ILLUSTRATION PROMPT" \
  --size "1024x1024" \
  --output "04_Assets/illustrations/[concept]-v[n]-[date].png"
```

**Essential Prompt Elements:**
- Hand-drawn sketch style aesthetic
- Black line work with organic imperfection
- Two accent colors (your choice) used strategically
- Strategic color placement with meaning
- Line quality guidance (varying weights, sketchy)
- Balance professional and approachable
