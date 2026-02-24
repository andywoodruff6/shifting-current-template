# Meeting Notes Prompt

Copy everything below the line into your AI chat. Replace the `[BRACKETED]` sections.

---

## The Prompt

```
I need you to process a meeting transcript into structured notes.

Here is the transcript:

[PASTE YOUR TRANSCRIPT HERE — or say "read the file at 01_Capture/meetings/filename.txt"]

Additional context: [OPTIONAL — meeting title, attendee names, or special focus areas. Delete this line if none.]

Please produce the following:

## Meeting Notes

**Date:** [today's date]
**Title:** [generate from content, or use the title I provided above]
**Attendees:** [list everyone who spoke, with full first and last names]

## Action Items
- [ ] [Action item 1 — who is responsible, deadline if mentioned]
- [ ] [Action item 2]

## Decisions
1. [Decision made, with brief rationale]
2. [Decision made]

## Discussion Notes
[Organized summary of what was discussed, by topic. Include key facts, questions raised, suggestions made, and who made them.]

After generating the notes, save them as a new file:
- File name: YYYY-MM-DD [Meeting Title].md
- Location: 02_Projects/Meetings/

Then for each attendee, check if they have a file in 03_Archives/People/:
- If yes, add a new entry under "Past Interactions" with today's date and a one-line summary of their participation
- If no file exists, create one with their name and this meeting as their first interaction
```

## When to Use

- After any meeting you recorded (voice memo, Zoom recording, etc.)
- When you have rough notes you want structured
- Works with transcripts from any source (Otter.ai, Mac Whisper, manual notes)

## Tips

- If the AI only has first names from the transcript, it will ask you for full names — have those ready
- You can add instructions like "Focus on technical decisions" or "This was a standup — keep it brief"
- The more context you give, the better the output
