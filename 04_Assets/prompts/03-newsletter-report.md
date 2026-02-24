# Newsletter / Report Builder Prompt

Turns raw content into a polished, formatted newsletter or report. Works for weekly updates, client reports, team newsletters — anything with recurring sections.

Copy everything below the line into your AI chat. Replace the `[BRACKETED]` sections.

---

## The Prompt

```
I need you to build a professional newsletter/report from my raw content below.

**Newsletter name:** [e.g., "Weekly Team Update", "Client Report", "Project Digest"]
**Audience:** [who reads this — e.g., "my team", "clients", "stakeholders"]
**Tone:** [professional / casual-professional / conversational — pick one]

Here is my raw content, organized by section:

## [Section 1 Name — e.g., "Updates"]
[Paste raw notes, bullet points, or details for this section]

## [Section 2 Name — e.g., "Metrics"]
[Paste numbers, stats, data points]

## [Section 3 Name — e.g., "News"]
[Paste links, updates, announcements]

## [Section 4 Name — e.g., "Tips / Spotlight"]
[Paste tips, highlights, shoutouts]

---

Please:
1. Transform each section into polished, professional copy
2. Lead each section with the most important item
3. Keep paragraphs short (2-4 sentences) and scannable
4. Format numbers properly (1,000 not 1000)
5. Include any links I provided
6. Suggest 3 catchy title options for the newsletter (3-6 words each, based on the content themes)

Save the final newsletter to: 02_Projects/[newsletter-name]/[YYYY-MM-DD].md
```

## Setting Up a Recurring Newsletter

To make this repeatable:

1. **Create a template** in `99_Templates/` with your standard sections
2. **Each week**, copy the template to `01_Capture/` and fill in raw content as the week goes on
3. **On newsletter day**, paste the filled template into the prompt above
4. **Save the output** to your projects folder

## Example Weekly Template

Save this to `99_Templates/weekly-update-template.md`:

```markdown
# Weekly Update Data — [DATE]

## Wins This Week
[What went well? Accomplishments, milestones, completed work]

## Key Numbers
[Metrics, stats, performance data relevant to your audience]

## Coming Up
[What's planned for next week? Deadlines, milestones, events]

## Quick Hits
[Short items: links, tips, shoutouts, things worth sharing]
```

## Tips

- **Capture throughout the week.** Don't try to remember everything on newsletter day. Add to your template file whenever something happens.
- **Sections are flexible.** Use whatever sections make sense for your newsletter. The AI adapts.
- **Keep raw content messy.** Bullet points, half-sentences, pasted links — the AI cleans it up. That's the point.
