# Infographics Workflow

**Create data visualizations, stats cards, and informational graphics**

Generates clean, professional infographics for presenting data, statistics, processes, and information in visually engaging formats.

## Purpose

Infographics transform complex information into digestible visual content. They should:
- Present data or information clearly and accurately
- Be visually engaging and professional
- Enhance comprehension and retention
- Support narrative or make standalone impact

## Workflow Steps

### Step 1: Define the Information Need

Identify what information needs to be visualized:

**Information Types:**

1. **Statistics/Numbers**
   - Single striking stat
   - Multiple related statistics
   - Comparative data points
   - Percentage breakdowns

2. **Processes/Flows**
   - Step-by-step procedures
   - Workflows or sequences
   - Before/after comparisons
   - Decision trees

3. **Comparisons**
   - Side-by-side contrasts
   - Trend analysis
   - Category breakdowns
   - Performance metrics

4. **Concepts/Frameworks**
   - Mental models
   - Classification systems
   - Relationship diagrams
   - Conceptual hierarchies

**Gather Requirements:**
- What data/information to display?
- What's the key message or insight?
- Who is the audience?
- Where will this be used? (newsletter, presentation, social media)
- Are there brand colors or style guidelines?

### Step 2: Choose Infographic Type

Select the appropriate infographic format:

**Type 1: Stats Card**
Best for single striking statistic or data point. Large, prominent number with supporting context.

**Type 2: Data Visualization**
Best for charts, graphs, multiple data points. Bar charts, pie charts, line graphs with clear labels.

**Type 3: Process Infographic**
Best for step-by-step procedures or workflows. Numbered steps with visual flow indicators.

**Type 4: Comparison Infographic**
Best for contrasting two or more options. Side-by-side or split layout.

**Type 5: Conceptual Infographic**
Best for frameworks, classifications, relationships. Visual organization of concepts.

### Step 3: Plan the Visual Structure

Design the information architecture:

**Visual Hierarchy:**
1. **Primary Focus** - What's the most important element?
2. **Supporting Information** - What context is needed?
3. **Details** - What additional data enhances understanding?

**Layout Considerations:**
- Aspect ratio (square for social, landscape for newsletter)
- Reading flow (left-to-right, top-to-bottom)
- Visual balance
- Whitespace and breathing room

**Color Strategy:**
- Brand colors (if applicable)
- Color coding for categories
- Contrast for readability
- Professional palette

### Step 4: Construct the Prompt

Build a comprehensive prompt using this template:

```
Professional infographic showing [INFORMATION/DATA].

PURPOSE:
[What is this infographic for? Newsletter, presentation, social media?]

DATA/INFORMATION TO DISPLAY:
[List specific data points, stats, steps, or information]
[Be very specific with numbers, percentages, labels]

INFOGRAPHIC TYPE: [Stats Card / Data Visualization / Process / Comparison / Conceptual]

VISUAL STRUCTURE:
[Describe the layout and organization]
[Specify hierarchy - what's most prominent]
[Indicate how information flows or is grouped]

DESIGN STYLE:
- Clean, modern, professional infographic design
- [Minimalist / Illustrative / Data-driven / Creative] aesthetic
- High visual impact and clarity
- [Aspect ratio: square 1:1 / landscape 16:9 / portrait 9:16]

COLOR PALETTE:
- Primary: [color and hex if specific]
- Accent: [color and hex if specific]
- Background: [color and hex if specific]

TYPOGRAPHY/TEXT:
- Large, bold numbers/headers for key stats
- Clear, readable supporting text
- Minimal text, maximum visual impact
- Professional font styling

COMPOSITION:
- Clear visual hierarchy
- Balanced layout
- Appropriate whitespace
- Not cluttered
- Edge-to-edge design (full bleed)

MOOD: [Professional, bold, clean, engaging, data-driven, etc.]

CRITICAL:
- All data must be clearly displayed
- Information must be accurate and readable
- Professional quality suitable for publication
- Color scheme must ensure readability
```

### Step 5: Generate the Image

Execute the CLI tool:

```bash
bun run .claude/skills/art/tools/generate-image.ts \
  --model "google/gemini-3-pro-image-preview" \
  --prompt "[YOUR PROMPT]" \
  --size "[SIZE]" \
  --output "[OUTPUT_PATH]"
```

**Model Recommendations:**

| Use Case | Recommended Model | Size |
|----------|-------------------|------|
| **All use cases** | `google/gemini-3-pro-image-preview` | `1792x1024` (16:9) or `1024x1024` (1:1) |

**Size Recommendations:**
- Newsletter: `1792x1024` (16:9 landscape)
- Social media: `1024x1024` (1:1 square)
- Presentation: `1920x1080` or `1792x1024`

### Step 6: Review and Validate

**Must Have:**
- [ ] All data/information clearly displayed
- [ ] Accurate representation of data
- [ ] Professional, clean design
- [ ] Strong visual hierarchy
- [ ] Good color contrast and readability
- [ ] Appropriate size/aspect ratio
- [ ] Text is readable (not too small)

**Must NOT Have:**
- [ ] Inaccurate data representation
- [ ] Cluttered or confusing layout
- [ ] Poor color choices (readability issues)
- [ ] Text too small to read
- [ ] Misleading visualizations

**Common Issues and Fixes:**

| Issue | Fix |
|-------|-----|
| **Text too small** | Specify "large, bold, readable text" in prompt |
| **Colors clash** | Provide specific hex codes for colors |
| **Too cluttered** | Reduce information, simplify layout |
| **Data unclear** | Be more specific about data display in prompt |

### Step 7: Save and Document

**Naming Convention:**
```
[project]-[type]-[topic]-[date].png

Examples:
newsletter-stats-revenue-20250125.png
report-infographic-growth-metrics-20250125.png
```

**Save Location:**
- Default: `04_Assets/`
- Project-specific: `02_Projects/[project-name]/assets/`

## Tips for Success

### Data Accuracy
- Double-check all numbers and stats
- Ensure data representation is honest
- Avoid misleading visualizations

### Visual Clarity
- Less is more - don't overcrowd
- Strong visual hierarchy guides the eye
- Color coding helps categorization
- Whitespace improves readability

### Prompt Specificity
- Provide exact numbers and data
- Specify colors with hex codes
- Describe layout explicitly
- Include all necessary information

## Quick Reference

**Command Template:**
```bash
bun run .claude/skills/art/tools/generate-image.ts \
  --model "google/gemini-3-pro-image-preview" \
  --prompt "YOUR DETAILED INFOGRAPHIC PROMPT" \
  --size "[1024x1024 or 1792x1024]" \
  --output "04_Assets/[project]-[type]-[topic]-[date].png"
```
