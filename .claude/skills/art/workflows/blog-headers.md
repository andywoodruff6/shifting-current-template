# Blog Headers Workflow

**Create professional editorial header images for blog posts and newsletters**

Generates 16:9 landscape images suitable for blog headers, newsletter featured images, and article hero images.

## Purpose

Blog headers serve as the visual anchor for articles. They should:
- Capture the essence of the article content
- Be professional and editorial-quality
- Work well in 16:9 landscape format
- Be immediately engaging to readers

## Workflow Steps

### Step 1: Analyze the Article Content

Read or receive the article content. Extract key information:

1. **Main Topic** - What is the article about?
2. **Key Themes** - What are the 2-3 main themes or concepts?
3. **Tone** - Professional? Creative? Technical? Inspirational?
4. **Target Audience** - Who is reading this?

**Output:** Clear understanding of the article's core message and tone.

### Step 2: Develop Visual Concept

Based on the content analysis, develop a visual concept:

#### Visual Concept Approaches

**Metaphorical:**
- Use visual metaphor to represent the concept
- Example: Hands building blocks -> collaboration
- Example: Path splitting into different directions -> decision-making

**Abstract/Conceptual:**
- Geometric or abstract representation of themes
- Example: Interconnected nodes -> networks
- Example: Waves or flows -> change/transformation

**Illustrative:**
- Literal but stylized representation
- Example: For creator economy article -> stylized creator tools
- Example: For tech article -> clean tech iconography

**Compositional Elements:**
- Choose 2-3 main visual elements maximum
- Ensure clear focal point
- Plan for 16:9 landscape orientation
- Consider how text overlay might work (title readability)

**Output:** One-sentence description of the visual concept.

### Step 3: Construct the Prompt

Build a comprehensive prompt using this template:

```
Professional editorial header image for a blog post about [TOPIC].

CONTENT CONTEXT:
[1-2 sentence summary of the article]

VISUAL CONCEPT:
[Your visual concept from Step 2]

STYLE REQUIREMENTS:
- Editorial quality suitable for professional blog/newsletter
- Clean, modern design aesthetic
- High visual impact and engagement
- 16:9 landscape format
- Professional color palette [specify colors if brand-specific]
- [Professional/Creative/Technical/Minimal] tone

COMPOSITION:
- Strong focal point
- Room for text overlay in [top third/bottom third/left side]
- Clear visual hierarchy
- Not overly cluttered
- Edge-to-edge design (full bleed)

TECHNICAL:
- High resolution
- Suitable for web display
- Optimized for header placement

MOOD: [Describe the emotional tone - professional, inspiring, thoughtful, bold, etc.]

NO TEXT in the image (text will be added as overlay separately).
```

**Prompt Quality Checklist:**
- [ ] Specific to this article (not generic)
- [ ] Clear visual concept described
- [ ] Style and tone specified
- [ ] Technical requirements included
- [ ] Composition guidance provided
- [ ] Mood/atmosphere defined

### Step 4: Generate the Image

Execute the CLI tool with your prompt:

```bash
bun run .claude/skills/art/tools/generate-image.ts \
  --model "google/gemini-3-pro-image-preview" \
  --prompt "[YOUR PROMPT]" \
  --size "1792x1024" \
  --output "[OUTPUT_PATH]"
```

**Model Recommendations:**

| Use Case | Recommended Model | Rationale |
|----------|-------------------|-----------|
| **All use cases** | `google/gemini-3-pro-image-preview` | High quality, reliable for all editorial content |

**Size Options:**
- Standard header: `1792x1024` (16:9 landscape)
- Square alternative: `1024x1024` (1:1)
- Wider: `2048x1152` (16:9 higher res)

### Step 5: Review and Validate

Open the generated image and validate:

**Must Have:**
- [ ] Professional, editorial quality
- [ ] Clear visual concept
- [ ] Appropriate tone for content
- [ ] 16:9 landscape format
- [ ] High resolution
- [ ] Strong focal point
- [ ] Room for text overlay
- [ ] Not cluttered or busy
- [ ] Colors work well together
- [ ] Engaging and eye-catching

**Must NOT Have:**
- [ ] Text in the image (unless specifically requested)
- [ ] Low quality or pixelated
- [ ] Too busy or cluttered
- [ ] Poor composition
- [ ] Wrong aspect ratio

**If validation fails:**
1. Identify specific issues
2. Adjust prompt accordingly
3. Regenerate
4. Repeat validation

### Step 6: Save and Document

Save the image to appropriate location:

**Naming Convention:**
```
[project]-[topic-slug]-header-[date].png

Examples:
blog-creator-economy-header-20250125.png
newsletter-quarterly-review-header-20250125.png
```

**Save Location:**
- Default: `04_Assets/` in vault
- Project-specific: `02_Projects/[project-name]/assets/`

## Style Guide Examples

### Professional/Business Content

**Color Palette:**
- Primary: Deep blues, grays, professional neutrals
- Accent: Strategic use of brand colors
- Avoid: Overly bright, neon, unprofessional

**Visual Style:**
- Clean, modern, sophisticated
- Clear hierarchy
- Minimalist approach

### Creative/Editorial Content

**Color Palette:**
- Primary: Balanced, editorial colors
- Accent: Purposeful, complementary
- Flexibility for artistic expression

**Visual Style:**
- Editorial illustration style
- Conceptual and metaphorical
- Artistic but accessible

### Technical/Developer Content

**Color Palette:**
- Primary: Tech blues, grays
- Accent: Syntax highlighting inspired
- Clean and systematic

**Visual Style:**
- Technical diagrams elevated to art
- Clean, systematic, organized
- Professional and precise

## Tips for Success

### Content Analysis
- Read the full article, not just the title
- Identify the 1-2 key takeaways
- Understand the emotional tone

### Visual Concepts
- Start simple, can always add complexity
- Think in visual metaphors
- Consider the reader's first impression

### Prompt Writing
- Be specific but not overly prescriptive
- Include context about the content
- Describe the feeling/mood you want
- Specify technical requirements clearly

### Iteration
- First generation is rarely perfect
- Small prompt adjustments can make big differences
- Keep notes on what works

## Quick Reference

**Command Template:**
```bash
bun run .claude/skills/art/tools/generate-image.ts \
  --model "google/gemini-3-pro-image-preview" \
  --prompt "YOUR DETAILED PROMPT HERE" \
  --size "1792x1024" \
  --output "04_Assets/[filename].png"
```

**Key Success Factors:**
- Understand the content deeply
- Clear, specific visual concept
- Detailed but flexible prompt
- Validation before use
- Consistent naming/organization
