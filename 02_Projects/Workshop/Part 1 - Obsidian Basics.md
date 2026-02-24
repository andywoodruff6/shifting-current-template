---
tags:
aliases:
Links:
  - "[[Workshop Roadmap]]"
date_created: "[[2026-02-24]]"
---
# Part 1 - Obsidian Basics
---

Before we touch AI, let's get comfortable with the tool you'll use every day.

## Links

The most powerful feature in Obsidian. Type `[[` and start typing a name — Obsidian will find or create a link to another note.

- `[[Jane Smith]]` — links to Jane's personnel file
- `[[2026-02-25]]` — links to that day's daily note
- `[[Q1 Budget Review]]` — links to a project or meeting note

Links create a web of connections. Over time, your vault becomes a map of everything you know and everyone you work with.

**Try it now:** Create a new note, type `[[` and link to this file.

## Templates

Templates save you from creating the same structure over and over.

This vault comes with two templates in `99_Templates/`:
- **Basic Template** — frontmatter + title, good for any new note
- **Daily Note Template** — date-tagged daily note with a tasks section

**To use a template:**
1. Create a new note (Ctrl/Cmd + N)
2. Open the command palette (Ctrl/Cmd + P)
3. Type "Insert template"
4. Select the template you want

Daily notes are pre-configured — click the calendar icon in the left sidebar to create today's note automatically.

## Tasks

Any line starting with `- [ ]` becomes a trackable task in Obsidian.

```markdown
- [ ] Follow up with Sarah about the Q2 budget
- [ ] Send the updated proposal to the team
- [x] Review the meeting notes from Monday
```

The Tasks plugin (already installed) lets you query tasks across your entire vault. Your Daily Note Template includes a task query that shows all open tasks — so your daily note becomes your task dashboard.

**Try it now:** Open a daily note and add a task with `- [ ] My first task`.
