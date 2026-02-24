---
tags:
aliases:
Links:
  - "[[Workshop Roadmap]]"
date_created: "[[2026-02-24]]"
---
# Part 2 - Frontmatter and Structure
---

## Frontmatter

Every note in this vault starts with **frontmatter** — the section between the `---` markers at the top:

```yaml
---
tags:
  - meeting
aliases:
Links:
date_created: "[[2026-02-25]]"
---
```

Frontmatter is metadata. It's how Obsidian (and your AI) categorize, filter, and find your notes. Think of it like the label on a filing cabinet — the note is the contents, the frontmatter is the label.

**Common fields:**
- `tags` — categories for filtering (meeting, project, person, idea)
- `Links` — related notes
- `date_created` — when the note was made

## Bases

Obsidian's **Bases** feature lets you create structured views of your notes — like a spreadsheet that pulls from your vault.

### Example: Stakeholder Tracker

Imagine you have people files in `03_Archives/People/` with frontmatter like:

```yaml
---
tags:
  - people
  - stakeholder
First_Contact: 2026-01-15
Last_Contact: 2026-02-20
Priority: high
---
```

A Base can pull all files tagged `stakeholder` into a table view showing name, last contact date, priority — sortable, filterable, and always up to date. No manual spreadsheet maintenance.

**We'll set one up together during the session.**

```base
filters:
  and:
    - file.tags.contains("people")
views:
  - type: table
    name: Table

```

*Base with a filter of: **file.tags.contains("people")*** 