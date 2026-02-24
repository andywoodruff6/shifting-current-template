---
tags:
aliases:
Links:
date_created: "[[2026-02-24]]"
---
# Cheat Sheet: Claude Code Building Blocks
---

Claude Code has five types of extensions. Each does something different. Here's what they are and when you'd use them.

## The Five Building Blocks
### Command
**What it is:** A reusable prompt you invoke by typing `/name`
**Analogy:** A saved email template — write it once, use it whenever you need it
**When to use:** Any task you do repeatedly with similar instructions
**Example:** `/meeting-notes` to process a meeting transcript into structured notes

### Skill
**What it is:** A multi-step workflow with logic, structure, and specific steps
**Analogy:** A recipe — ingredients, steps, and expected output
**When to use:** Complex workflows that involve multiple actions in sequence
**Example:** The art skill that generates images by calling an API, selecting a style, and saving the result

### Agent
**What it is:** An AI with specific expertise and a defined role
**Analogy:** A specialist you hire for a specific job
**When to use:** When you need a particular perspective or domain knowledge
**Example:** A "meeting analyst" agent that knows how to extract action items and decisions

### Hook
**What it is:** An automatic trigger that runs when specific events happen
**Analogy:** An email auto-reply rule — "when X happens, do Y"
**When to use:** Automation you want to happen without thinking about it
**Example:** Automatically format a file every time it's saved

### MCP (Model Context Protocol)
**What it is:** A connection to an external tool, API, or service
**Analogy:** A plugin that gives your AI new abilities it didn't have before
**When to use:** When you need your AI to interact with external services
**Example:** Connecting to a calendar API so your AI can check your schedule

## How They Work Together

A typical workflow might combine several:
1. You type a **command** (`/weekly-report`)
2. The command invokes a **skill** (the report-building workflow)
3. The skill uses an **MCP** (to pull data from an external source)
4. A **hook** runs automatically (to format the output)

You don't need to understand all of this on day one. Start with **commands** — they're the simplest and most immediately useful.
