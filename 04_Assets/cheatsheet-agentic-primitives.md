# Cheat Sheet: The Four Primitives of Agentic Systems
---

Every AI agent — no matter how complex — is built from exactly four things. Understanding these helps you debug problems and get better results.

## The Four Primitives

### 1. Model
**What it is:** The AI brain that does the thinking
**In your system:** Claude (via Claude Code)
**What to know:** Different models have different strengths. Claude is good at reasoning, following complex instructions, and working with code. You don't need to pick a model — Claude Code handles this.

### 2. Context
**What it is:** Everything the AI knows about right now — your files, your conversation history, your instructions
**In your system:** Your Obsidian vault + CLAUDE.md + whatever you've told it in the current conversation
**What to know:** The AI can only work with what it can see. If it gives a bad answer, it might be missing context. Point it to the right files.

### 3. Tools
**What it is:** What the AI can actually *do* — read files, write files, run code, search the web
**In your system:** Built-in tools (Bash, Read, Write, Edit, Search) plus any skills and MCPs you've added
**What to know:** The AI is only as capable as its tools. A skill is just a way of teaching it to use tools in a specific sequence.

### 4. Prompt
**What it is:** The instruction that tells the AI what you want
**In your system:** What you type + system prompts + skill prompts that run behind the scenes
**What to know:** Clear, specific prompts get better results. "Summarize this meeting" works. "Summarize" alone doesn't give the AI enough to work with.

## The Debugging Rule

**When something doesn't work the way you want, it's always one of these four things:**

| Symptom | Likely Cause | Fix |
|---------|-------------|-----|
| AI gives wrong or outdated info | **Context** — it can't see the right files | Point it to the specific file or folder |
| AI says "I can't do that" | **Tools** — it doesn't have the right capability | Check if a skill or MCP needs to be installed |
| AI misunderstands what you want | **Prompt** — your instruction was ambiguous | Be more specific about what you want and in what format |
| AI output quality is poor | **Model** — or more likely, a combination of context + prompt | Add more context and refine your prompt first |

90% of the time, the fix is better **context** or a clearer **prompt**. Start there.
