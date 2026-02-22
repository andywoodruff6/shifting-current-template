---
name: newsletter
description: Build professional newsletters and reports from structured data. Takes a weekly collection file with sections of raw content (updates, metrics, news, tips) and transforms it into a polished, formatted newsletter or report. Configurable sections and templates. USE WHEN user says 'newsletter', 'weekly report', 'build report', 'create newsletter'.
---

# Newsletter & Report Builder

Build professional newsletters and reports from structured data input. Takes raw content organized by section and transforms it into polished, formatted output.

## Overview

This skill takes a structured data file (markdown) containing raw content for each section and produces a professionally formatted newsletter or report. The process:

1. **Read** the user's data file with section content
2. **Extract** information from each section
3. **Transform** raw content into polished newsletter copy
4. **Generate** a catchy title based on themes
5. **Optionally generate** header artwork via the art skill
6. **Quality check** the final output

## Required Input

The user provides a markdown file containing their raw content organized by sections. Each section contains the information that should appear in that part of the newsletter.

### Default Section Structure

A typical newsletter has 3-5 sections. Here's a common pattern:

```markdown
# Weekly Data File — [Date]

## Updates
[Paste or write product/project updates, improvements, announcements]

## Metrics
[Paste or write key numbers, stats, performance data]

## Industry News
[Links, summaries, partner updates, ecosystem news collected throughout the week]

## Tips & Spotlight
[Creator tips, team spotlights, community contributions, tutorials]
```

**The sections are configurable.** The user can use whatever section names and structure make sense for their newsletter. The skill adapts to what's provided.

## Workflow

### Step 1: Read the Data File

When the user provides their data file:

1. Read the file completely
2. Identify all sections (by `##` headings)
3. Note which sections have content and which are empty
4. Identify any `[[wiki-linked]]` files and read them for source material

**CRITICAL: Read All Wiki-Linked Files First**

Before writing any newsletter content, identify and read all `[[wiki-linked]]` files in the data file:

1. Scan for any `[[wiki-link]]` syntax
2. Use the Read tool to open each linked file
3. Understand the actual content before writing about it
4. **Do not write content based on link text alone — verify the facts**

### Step 2: Extract Information by Section

For each section in the data file, extract the key information:

**From Updates/Announcements sections:**
- Extract improvements, features, announcements
- Translate technical details to reader benefits
- Format as clear, scannable bullet points

**From Metrics/Stats sections:**
- Extract key numbers and data points
- Format with proper number formatting (commas, abbreviations)
- Note trends and highlights

**From News/Ecosystem sections:**
- Pull updates with context
- Include opportunities with deadlines and links
- Feature relevant social posts if included

**From Tips/Spotlight sections:**
- Extract tips with proper attribution
- Process spotlight content
- Pull out key insights and quotes

### Step 3: Build the Newsletter

Transform extracted content into polished newsletter sections:

**For each section:**
1. Write a clear section header (`##`)
2. Lead with the most important or interesting content
3. Use clear, professional language
4. Keep paragraphs concise (2-4 sentences)
5. Include calls-to-action where appropriate
6. Add links and attributions

**Formatting Guidelines:**
- Section headers: `##` for main sections, `###` for subsections
- Bullet points: `-` (not `*`)
- Format large numbers appropriately (1,000 or 1M)
- Include `@` symbols for social media handles
- Keep tone professional but approachable

### Step 4: Generate Newsletter Title

After assembling the content, generate a catchy main title:

**Process:**
1. Review assembled content and identify 2-3 biggest themes
2. Brainstorm 3-4 catchy title options that reflect the themes
3. Present options to the user via **AskUserQuestion**
4. Apply the chosen title

**Good titles are:**
- Short and punchy (3-6 words)
- Thematic — connected to actual content
- Memorable and shareable

**Anti-patterns:**
- Generic titles ("Weekly Update", "This Week")
- Clickbait
- Too long (7+ words)

### Step 5: Generate Header Artwork (Optional)

If the user wants a header image, use the **art skill** (blog-headers workflow):

1. Based on newsletter themes and chosen title, develop a visual concept
2. Construct a prompt following the blog-headers workflow
3. Generate the image:

```bash
bun run .claude/skills/art/tools/generate-image.ts \
  --model "google/gemini-3-pro-image-preview" \
  --prompt "[CONSTRUCTED PROMPT]" \
  --size "1792x1024" \
  --output "04_Assets/newsletter-header-[YYYYMMDD].png"
```

4. Embed in the newsletter using Obsidian syntax: `![[newsletter-header-[YYYYMMDD].png]]`

### Step 6: Handle Missing Information

If sections are empty or incomplete:

- Note which sections are missing content
- Ask the user: "The [section name] section appears empty. Do you have content for it, or should I skip it?"
- Can work with what's available — not all sections need content every issue

### Step 7: Quality Check

Before finalizing:

- [ ] All sections with content are present and formatted
- [ ] Numbers match source information exactly
- [ ] Handles include @ symbols where appropriate
- [ ] Links are included and functional
- [ ] Tone is consistent across sections
- [ ] Calls-to-action are clear
- [ ] Title chosen and applied
- [ ] Header artwork generated (if requested)

## Customizing Your Newsletter

### Defining Your Sections

Create a template file that defines your newsletter's structure. Save it in `99_Templates/`:

```markdown
# [Your Newsletter Name] — Template

## Section 1: [Name]
[What goes here: description of content type]

## Section 2: [Name]
[What goes here: description of content type]

## Section 3: [Name]
[What goes here: description of content type]

## Section 4: [Name]
[What goes here: description of content type]
```

### Weekly Process

1. **Create a new file** from your template each week
2. **Capture content as you go** — add updates, links, metrics throughout the week
3. **On newsletter day**, invoke this skill with your completed data file
4. **Review and publish** the generated newsletter

### Tips for Success

1. **Capture as you go** — Don't try to remember everything on newsletter day
2. **Be specific with metrics** — Include actual numbers, not just descriptions
3. **Credit generously** — Include @handles for people mentioned
4. **Translate technical to human** — Lead with reader benefit, not implementation details
5. **Make actions clear** — Every section should have obvious next steps for readers
6. **Keep it scannable** — Short paragraphs, bullet points, clear headers

## Quick Reference

**Command:**
```
/newsletter [path-to-data-file]
```

**Data File Structure:**
```markdown
# Newsletter Data — [Date]

## [Section 1 Name]
[Raw content]

## [Section 2 Name]
[Raw content]

## [Section 3 Name]
[Raw content]
```

**Output:** Formatted newsletter with title, optional header artwork, and polished sections ready for publishing.

**Key Principles:**
- Professional but approachable tone
- Data-driven but accessible
- Action-oriented with clear calls-to-action
- Consistent formatting across issues
