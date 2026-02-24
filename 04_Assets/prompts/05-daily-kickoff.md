# Daily Kickoff Prompt

Start your day by having your AI review your vault and help you plan. This replaces the "AI Agent Setup" workflow — your AI assistant IS the agent, and this prompt teaches it how to work with your vault.

Copy everything below the line into your AI chat at the start of your workday.

---

## The Prompt

```
Good morning. Help me plan my day by reviewing my vault:

1. **Check today's daily note** at 01_Capture/[TODAY'S DATE].md
   - Are there any tasks or items already captured?

2. **Scan for open tasks** across the vault
   - Look for unchecked items (- [ ]) in 02_Projects/
   - Look for any items tagged with today's date

3. **Review recent meeting notes** in 02_Projects/Meetings/
   - Any action items assigned to me from the last few days?

4. **Check 01_Capture/ for unprocessed items**
   - Anything sitting in capture that needs to be filed or acted on?

Based on what you find, give me:
- **Top 3 priorities** for today (the most important things to move forward)
- **Quick wins** (things I can knock out in under 15 minutes)
- **Upcoming** (things with deadlines or scheduled dates approaching)

Then create or update today's daily note with this plan.
```

## Making This a Habit

The power of this prompt compounds over time:
- **Week 1:** The AI doesn't know much about your work. Results are basic.
- **Week 4:** Your vault has meeting notes, project files, people files. The AI gives increasingly useful daily briefings.
- **Month 3:** The AI surfaces connections you'd miss. "You have a meeting with Sarah tomorrow — last time you discussed the Q2 budget. Here are your open action items with her."

## Customizing

Add lines to the prompt based on your work:

- **If you manage people:** "Check 03_Archives/People/ for anyone I haven't contacted in over 2 weeks"
- **If you have recurring reports:** "Remind me if it's newsletter day (every Friday)"
- **If you track metrics:** "Pull the latest numbers from 02_Projects/[project]/metrics.md"

## Tips

- **Keep your daily notes in 01_Capture/.** One file per day, named YYYY-MM-DD.md. The AI finds them automatically.
- **The AI gets better as your vault grows.** More notes = more context = better suggestions.
- **You don't need to run this every day.** Use it when you need to get oriented or feel overwhelmed.
