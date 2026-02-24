---
tags:
aliases:
Links:
  - "[[Workshop Roadmap]]"
date_created: "[[2026-02-24]]"
---
# Part 5 - Build Your Own Workflows
---

Here's the real power: you're not limited to the five built-in workflows.

Your AI assistant can build new workflows for you. Just describe what you need.

## The Pattern

Every workflow follows the same structure:

1. **Describe the input** — what you have (a CSV, an email thread, meeting notes, a messy document)
2. **Describe the output** — what you want (a formatted report, a summary, a set of tasks, an organized note)
3. **Describe where it goes** — which vault folder should the result live in
4. **Let the AI build the prompt** — it writes the reusable template for you

## Example

> *"I get a weekly sales report as a CSV. I want to paste it in and get a formatted summary with the top 5 accounts, any accounts that dropped more than 10%, and a one-paragraph executive summary. Save it to 02_Projects/Sales/weekly-reports/"*

The AI will create that workflow. Save the prompt to `04_Assets/prompts/` and it's reusable every week.

## More Ideas

- **Email digest** — paste a batch of emails, get a prioritized summary with action items
- **Competitor research** — paste articles or notes, get a structured comparison
- **Onboarding doc** — describe a process, get a step-by-step guide formatted for a new hire
- **Weekly standup prep** — AI scans your recent notes and drafts your standup update
- **Client brief** — pull from meeting notes and people files to generate a pre-meeting brief

## The Point

You don't need to code. You don't need to understand APIs. You describe the workflow in plain English, and the AI builds it. Over time, your vault fills with workflows tailored to exactly how you work.

Every time you find yourself doing the same thing twice, ask: *"Can I turn this into a prompt?"* The answer is almost always yes.
