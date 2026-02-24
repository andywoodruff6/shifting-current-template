# Knowledge Capture Prompt

Helps you process and file new information into your vault. Use this when you have notes, articles, ideas, or meeting takeaways that need to be organized.

Copy everything below the line into your AI chat. Replace the `[BRACKETED]` sections.

---

## Process Raw Notes

```
I have some raw notes I need to organize into my vault. Here they are:

[PASTE YOUR RAW NOTES, OR SAY "read the file at 01_Capture/filename.md"]

Please:
1. Identify the main topics or themes
2. For each topic, suggest where it should go in my vault:
   - 01_Capture/ — if it's a quick note or daily item
   - 02_Projects/ — if it's related to an active project
   - 03_Archives/People/ — if it's about a specific person
   - 03_Archives/ — if it's reference material
3. Create the appropriate files with proper formatting:
   - Add frontmatter (tags, date, links)
   - Use clear headings
   - Add [[wiki-links]] to connect related notes
4. If any of this relates to people I work with, update their file in 03_Archives/People/
```

## Capture from an Article or Video

```
I just read/watched something I want to capture. Here's the content:

[PASTE THE ARTICLE, TRANSCRIPT, OR KEY QUOTES — or provide a summary of what you learned]

Source: [URL or title of the source]

Please:
1. Extract the key insights (3-5 bullet points)
2. Note any action items or things I should follow up on
3. Identify connections to my existing notes (check 02_Projects/ for related projects)
4. Save a note to 01_Capture/ with:
   - Source attribution
   - Key insights
   - My potential action items
   - Links to related vault notes
```

## End-of-Day Brain Dump

```
Here's everything on my mind from today:

[WRITE FREELY — tasks, thoughts, things you learned, things you need to do, ideas, frustrations, anything]

Please:
1. Sort this into categories:
   - Action items (things I need to do) — add as tasks with checkboxes
   - Notes (things I learned or observed) — save to today's daily note
   - Ideas (things to explore later) — save to 01_Capture/ with an "idea" tag
   - People updates (things about people I work with) — update their file in 03_Archives/People/
2. Update today's daily note at 01_Capture/[YYYY-MM-DD].md with the organized content
```

## Tips

- **Capture first, organize later.** Dump everything into 01_Capture/ and use this prompt to sort it.
- **The AI can see your vault.** It can check for existing notes on the same topic and link them.
- **Wiki-links are powerful.** `[[Person Name]]` and `[[Project Name]]` create connections in Obsidian automatically.
- **Don't overthink filing.** If you're not sure where something goes, put it in 01_Capture/ and revisit later.
