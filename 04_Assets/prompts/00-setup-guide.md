# Setup Guide: Augment + Obsidian

How to connect your AI assistant to your knowledge vault.

## The Idea

Your Obsidian vault is a folder of files. Your AI assistant (Augment) can read and edit files in any folder you open in VS Code. By opening your vault in VS Code, your AI can see everything in your knowledge system — notes, projects, people files, meeting notes — and work with it.

**Two windows, one folder:**
- **Obsidian** — for reading, browsing, and visual navigation of your notes
- **VS Code + Augment** — for AI-powered work (processing, organizing, creating)

Both point at the same folder. Changes in one appear in the other.

## Initial Setup

### 1. Open your vault folder in VS Code

```
File > Open Folder > [select your vault folder]
```

Your vault's file tree appears in VS Code's sidebar. Augment can now see all of it.

### 2. Test the connection

In Augment's chat panel, type:
```
Read the file at 04_Assets/workshop-roadmap.md and summarize it.
```

If it works, your AI can see your vault. You're ready.

### 3. Orient to the prompt templates

Browse to `04_Assets/prompts/` in either Obsidian or VS Code. These are your five workflows:

1. **Meeting Notes** — transcript to structured notes
2. **Visual Content** — AI writes image prompts for you
3. **Newsletter / Report** — raw content to polished output
4. **Knowledge Capture** — organize and file information
5. **Daily Kickoff** — AI reviews your vault and helps plan your day

## Daily Workflow

1. Open Obsidian (for reading and browsing)
2. Open VS Code with the same vault folder (for AI work)
3. When you need the AI, open the prompt template, copy it, paste into Augment chat
4. The AI reads and writes files in your vault directly

## Tips

- **You can ask the AI to read any file.** Just say "read the file at [path]" and it will.
- **The AI can create new files.** Ask it to save notes, create meeting files, update people records.
- **Obsidian auto-refreshes.** When the AI creates or edits a file through VS Code, it appears in Obsidian automatically.
- **Start simple.** Try the Meeting Notes prompt first with a real transcript. That's the fastest way to see the value.
