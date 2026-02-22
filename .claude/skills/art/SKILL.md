---
name: art
description: Visual content system for blog posts, business content, and professional communications. Four workflows - (1) Blog Headers (editorial images for articles), (2) Infographics (data visualizations and stats), (3) Editorial Illustrations (abstract metaphorical images), (4) Technical Diagrams (system architecture and flowcharts). USE WHEN user requests any visual content - 'visualize', 'create image', 'blog header', 'infographic', 'diagram', 'illustration', 'chart'.
---

# Art - Visual Content System

Creates professional visuals for blog posts, business content, and professional communications using OpenRouter image models.

**Four Core Workflows:**
1. **Blog Headers** - Editorial images for articles and newsletters
2. **Infographics** - Data visualizations, stats cards, and visual data
3. **Editorial Illustrations** - Abstract metaphorical images for concepts
4. **Technical Diagrams** - System diagrams, flowcharts, and architecture visuals

## Routing: Which Workflow to Use?

### **Blog Headers** -> `workflows/blog-headers.md`
**When to use:**
- User says 'blog header', 'article image', 'newsletter header'
- User says 'create header for this post', 'featured image'
- Need editorial-quality image for blog or newsletter
- Abstract visual metaphor for article content

**Key:** Professional editorial header images, 16:9 landscape format

### **Infographics** -> `workflows/infographics.md`
**When to use:**
- User says 'infographic', 'visualize this data', 'stats card'
- User says 'create chart', 'data visualization', 'illustrated stat'
- Need to present data or statistics visually
- "By the numbers" style visuals

**Key:** Data-driven visuals with clear hierarchy and visual appeal

### **Editorial Illustrations** -> `workflows/editorial-illustrations.md`
**When to use:**
- User says 'illustration', 'abstract image', 'visual metaphor'
- User says 'create art for this concept', 'illustrate this idea'
- Need conceptual image representing an abstract idea
- Visual storytelling for complex concepts

**Key:** Abstract, conceptual imagery that captures essence of ideas

### **Technical Diagrams** -> `workflows/technical-diagrams.md`
**When to use:**
- User says 'diagram', 'flowchart', 'architecture diagram'
- User says 'system diagram', 'process flow', 'show the architecture'
- Need to explain technical systems or processes
- Software architecture, data flows, system relationships

**Key:** Clear technical diagrams with labels and structure

## Quick Decision Tree

```
What does user need?

-- Header image for blog/newsletter? -> Blog Headers
-- Data visualization or stats? -> Infographics
-- Abstract concept illustration? -> Editorial Illustrations
-- Technical system or process diagram? -> Technical Diagrams
```

## Environment Setup

The CLI tool loads API keys from `~/.claude/.env`. Required key:
- `OPENROUTER_API_KEY` - For OpenRouter image generation

You can verify your key is set:
```bash
echo $OPENROUTER_API_KEY
```

## Available OpenRouter Image Models

Common image generation models on OpenRouter:
- **Google Gemini** - High quality, good for all content types
- **OpenAI DALL-E 3** - High quality, good for editorial content
- **Flux models** - High quality for illustrations
- **Stable Diffusion variants** - Flexible, cost-effective

Check current models at: https://openrouter.ai/models?output_modalities=image

## Default Generation Workflow

All workflows follow this pattern:

### Step 1: Understand the Content
Read or analyze the content that needs visualization

### Step 2: Choose the Right Workflow
Use the routing logic above to select the appropriate workflow

### Step 3: Follow the Workflow
Execute the specific workflow steps (see workflow files)

### Step 4: Generate the Image
Use the CLI tool with appropriate prompt and settings

### Step 5: Validate
Check that the generated image meets requirements

## File Structure

```
art/
-- SKILL.md                         # This file (routing + overview)
-- workflows/
|   -- blog-headers.md              # Blog header workflow
|   -- infographics.md              # Data visualization workflow
|   -- editorial-illustrations.md   # Abstract illustration workflow
|   -- technical-diagrams.md        # Technical diagram workflow
-- tools/
    -- generate-image.ts            # CLI tool for OpenRouter generation
```

## CLI Tool Usage

### Basic Usage

```bash
bun run .claude/skills/art/tools/generate-image.ts \
  --model "google/gemini-3-pro-image-preview" \
  --prompt "Editorial header image..." \
  --size "1792x1024" \
  --output /tmp/header.png
```

### Parameters

- `--model` - OpenRouter model ID (use "google/gemini-3-pro-image-preview")
- `--prompt` - Image generation prompt
- `--size` - Image dimensions (model-dependent)
- `--output` - Output file path
- `--quality` - Quality setting (optional, model-dependent)

See `tools/generate-image.ts` for complete documentation.

## Style Guidelines

### General Principles

1. **Professional Quality** - Editorial-grade images suitable for publication
2. **Clear Communication** - Visuals should enhance understanding
3. **Brand Consistency** - Maintain consistent style across images
4. **Appropriate Tone** - Match visual style to content context

### Color Palette Recommendations

For professional business content:
- **Primary:** Deep blues, professional neutrals
- **Accent:** Purposeful use of brand colors
- **Background:** Clean whites, subtle grays, soft tones

For creative/editorial content:
- **Primary:** Bold but balanced colors
- **Accent:** Complementary color pairings
- **Background:** Supports focus without distraction

## Common Prompting Patterns

### For Blog Headers (16:9)
```
Professional editorial header image for [topic].
Style: Modern, clean, editorial quality.
Format: 16:9 landscape, suitable for blog header.
Tone: [professional/creative/technical].
[Specific visual elements or metaphors].
```

### For Infographics
```
Clean infographic showing [data/concept].
Style: Modern data visualization, clear hierarchy.
Include: [specific data points or visual elements].
Color palette: [professional/brand colors].
Format: Clear, readable, visually engaging.
```

### For Editorial Illustrations
```
Abstract editorial illustration representing [concept].
Style: Metaphorical, conceptual, sophisticated.
Visual metaphor: [describe the metaphor].
Tone: [thoughtful/bold/contemplative].
```

### For Technical Diagrams
```
Technical diagram showing [system/process].
Style: Clean, professional, easy to understand.
Include: [components, relationships, flow].
Format: Clear labels, logical layout.
```

## Tips for Best Results

1. **Be Specific** - Clear prompts produce better results
2. **Iterate** - Don't expect perfection on first try
3. **Model Selection** - Different models excel at different styles
4. **Context Matters** - Include context about where image will be used
5. **Review Generated Images** - Always validate before use
