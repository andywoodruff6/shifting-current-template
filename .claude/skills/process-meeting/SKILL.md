---
name: process-meeting
description: Process meeting transcripts using a senior project manager agent to generate structured notes following a standard meeting notes format, then spawn subagents to update personnel files for each attendee with their participation details.
---

# Meeting Transcript Processor

Process meeting transcripts to generate structured meeting notes and automatically update personnel files for all attendees.

## Overview

This skill performs a comprehensive meeting transcript analysis workflow:

1. **Generate Meeting Notes**: Uses a senior project manager agent to analyze the transcript and create structured notes
2. **Identify Participants**: Extracts attendee information from the transcript and/or existing meeting notes
3. **Update Personnel Files**: Spawns a dedicated subagent for each attendee to update their personnel file with meeting participation details

## Required Input

The user will provide input when invoking this skill via the slash command:

1. **Transcript File Path** (required): A text file (`.txt`, `.md`, or similar) containing the meeting conversation
2. **Additional Instructions** (optional): Any clarifications, preferences, or special handling instructions, such as:
   - Specific output file name or location
   - Attendee clarifications (names, roles, etc.)
   - Meeting context or type (e.g., "This is a team standup")
   - Special focus areas (e.g., "Focus on technical decisions")
   - Any other relevant context

## Workflow

### Step 1: Parse Input and Read the Transcript

First, extract the transcript file path and any additional instructions from the user's input:
- **Transcript file path**: The first argument provided
- **Additional instructions**: Everything after the first argument (may be empty)

Then read the transcript file. The transcript may be:
- A plain text file with speaker labels
- A markdown file with formatted conversation
- A transcription app output (e.g., Mac Whisper, Otter.ai)
- Any text file containing meeting dialogue

Store the additional instructions (if provided) to use throughout the workflow.

### Step 2: Check for Existing Meeting Notes

The user may have already created a meeting notes file with attendees listed. Check for a meeting notes file in `02_Projects/Meetings/` that matches the date or topic of the transcript.

If found, extract the attendees from the "## Attendees" section.

### Step 3: Generate Meeting Notes with Senior PM Agent

Launch a specialized Task agent with the senior project manager role to analyze the transcript. The agent should:

**Task Description**: "Analyze meeting transcript and generate structured notes"

**Agent Instructions**:

```
You are a Senior Project Manager analyzing a meeting transcript. Your task is to provide a structured summary following the format below.

## Meeting Transcript

[INSERT TRANSCRIPT HERE]

## Additional Context & Instructions

[INSERT ADDITIONAL INSTRUCTIONS HERE IF PROVIDED, otherwise write "None provided"]

**Note**: If additional instructions were provided above, follow them throughout your analysis. This may include:
- Focusing on specific topics or decisions
- Identifying specific attendees mentioned
- Using a particular meeting title or format
- Any other special considerations

## Your Analysis Task

Analyze the transcript to identify the following elements:

1. **Action Items**: Look for tasks, assignments, or follow-up actions mentioned during the meeting
   - Look for phrases like "we need to", "someone should", "let's", or people's names followed by a task
   - Pay attention to deadlines or timeframes mentioned
   - Include who is responsible for the action if specified

2. **Decisions**: Identify any choices, agreements, or resolutions made during the meeting
   - Look for phrases like "we've decided", "the conclusion is", "we agree to", or "the final choice is"
   - Include any important context or reasoning behind the decision
   - Note any conditions or caveats attached to the decision

3. **Detailed Notes**: Capture the main points discussed, important information shared, and relevant details
   - Include any important facts, figures, or data mentioned
   - Capture key points from discussions or debates
   - Note any questions raised and their answers
   - Note any suggestions that are raised and who raised them
   - Note any follow up to the suggestions and who raised it

## Output Format

Provide your analysis in the following Markdown format:

## Action Items

1. [First action item]
2. [Second action item]
...

## Decisions

1. [First decision]
2. [Second decision]
...

## Detailed Notes

[Provide a comprehensive summary of the meeting, organized by main topics or chronologically as appropriate]

## Meeting Attendees

Based on the transcript, list all participants you can identify:
- [Name 1]
- [Name 2]
- [Name 3]
...

Ensure your summary is clear, concise, and accurately reflects the content of the meeting transcript.
```

### Step 4: Process Agent Output

Extract the following from the agent's response:
- Action Items section
- Decisions section
- Detailed Notes section
- List of identified attendees

### Step 5: Determine Meeting Metadata

Extract or determine:
- **Meeting Date**: From the transcript file name, content, or ask the user
- **Meeting Title**:
  - First check if the additional instructions specify a title
  - If not specified, generate from the content (e.g., "Team Standup", "Meeting with [Person Name]", etc.)
- **Attendees**:
  - First check if the additional instructions provide attendee names
  - Combine with attendees from existing meeting notes (if any)
  - Add attendees identified by the PM agent
  - Deduplicate the final list
  - **CRITICAL: Verify full names** - Each attendee MUST have both first AND last name

**IMPORTANT - Full Name Requirement**:
- **ALL personnel files MUST use full first and last names** (e.g., "Jane Smith.md", NOT "Jane.md")
- If you only have partial names (first name only, nickname, etc.), you MUST ask the user for clarification before proceeding

**If partial names identified**:
1. List all attendees with incomplete names
2. Ask user: "I identified these attendees but need full names for personnel files: [list]. Please provide full first and last names for each."
3. Wait for user response before proceeding to Step 6

Format the meeting title for the file name: `YYYY-MM-DD Meeting Title.md`

### Step 6: Create Meeting Notes File

Using the Meeting Template format, create a new meeting notes file in `02_Projects/Meetings/` with:

```markdown
---
tags:
  - "#meeting"
Links:
Date Created: "[[YYYY-MM-DD]]"
aliases:
---
# YYYY-MM-DD Meeting Title

## Attendees
- [[First Last]]
- [[First Last]]
- [[First Last]]

## Action Items
```tasks
path includes YYYY-MM-DD Meeting Title.md
```

## Notes

[Insert the content from the PM agent's output, combining Action Items, Decisions, and Detailed Notes sections]

## End
```

**Important Formatting Notes**:
- Use wiki-style links `[[Full Name]]` for all attendee names with BOTH first and last names
- Include the tasks query block for Action Items tracking
- Merge the PM agent's three sections (Action Items, Decisions, and Detailed Notes) into the Notes section
- **CRITICAL**: Never use partial names like `[[Jane]]` — always use full names like `[[Jane Smith]]`

### Step 7: Link Meeting Notes in Today's Daily Note

Find today's daily note in `01_Capture/` (format: `YYYY-MM-DD.md`).

If the daily note doesn't exist, create it using the Daily Note Template format:
```markdown
---
tags:
  - daily-note
Date Created: "[[YYYY-MM-DD]]"
---
# YYYY-MM-DD

## Quick Links


## Notes


## End
```

Add a link to the meeting notes under the "## Quick Links" heading:
```markdown
## Quick Links
- [[YYYY-MM-DD Meeting Title]]
```

### Step 8: Spawn Personnel File Update Subagents

**CRITICAL REQUIREMENT**: You must have FULL first and last names for all attendees before proceeding. If you only have partial names, STOP and ask the user for full names.

For each attendee identified:

1. **CRITICAL: Search for existing personnel file FIRST** using Glob in `03_Archives/People/`
2. **Launch a dedicated Task agent** for each attendee with the following instructions:

**Task Description**: "Update personnel file for [First Last] with meeting participation"

**Agent Instructions**:

```
You are updating the personnel file for [First Last] based on their participation in a meeting.

**CRITICAL NAME REQUIREMENT**: ALL personnel files MUST use full first and last names. Create/update as "[First Last].md".

## Meeting Information
- Meeting Title: [Meeting Title]
- Meeting Date: [YYYY-MM-DD]
- Meeting Notes File: [[Meeting Notes File Name]]

## Your Task

**STEP 1: SEARCH FOR EXISTING PERSONNEL FILE**

BEFORE creating any new file, search for an existing personnel file:

1. Use Glob to search `03_Archives/People/` for files matching this person's FULL name
2. Try multiple search patterns:
   - `03_Archives/People/[First Last].md` (exact full name match)
   - `03_Archives/People/*[First Name]*.md` (first name match)
   - `03_Archives/People/*[Last Name]*.md` (last name match)
3. If ONE file with FULL name matches, use that file
4. If NO files match, create new file with FULL name

**STEP 2: Read the meeting notes** at: 02_Projects/Meetings/[Meeting Notes File Name].md

**STEP 3: Read the existing personnel file (if found) or create new one**

**STEP 4: Analyze [Attendee Name]'s participation** in the meeting:
   - What topics did they discuss?
   - What concerns or issues did they raise?
   - What action items were assigned to them?

**STEP 5: Update the "Past Interactions" section**:
   - Format: `- **[YYYY-MM-DD]**: [Concise description of participation and key points]`

**STEP 6: Update frontmatter appropriately**:
   - Update "Last_Contact" to the meeting date
   - DO NOT change "First_Contact" or "Date Created" if file exists

## Person Template Format (if creating new file)

---
tags:
  - people
  - stakeholder
Date Created: "[[YYYY-MM-DD]]"
Links:
Prefered_Channel:
  - email
Priority:
status:
First_Contact: YYYY-MM-DD
Last_Contact: YYYY-MM-DD
Next_Followup:
---
# [First Last]

## Quick Context


## Communication Notes


## Past Interactions
- **[YYYY-MM-DD]**: [Concise description of participation]


## End
*Last updated: YYYY-MM-DD*
```

### Step 9: Quality Check

Before finalizing, verify:

- [ ] Meeting notes file created in `02_Projects/Meetings/`
- [ ] Meeting notes follow the Meeting Template format
- [ ] All attendees listed with wiki-style links `[[Full First Last]]` using COMPLETE names
- [ ] Action Items, Decisions, and Detailed Notes are properly formatted
- [ ] Daily note exists in `01_Capture/` with link to meeting notes under Quick Links
- [ ] Personnel file subagents launched for each attendee with FULL names
- [ ] Each personnel file has been updated with meeting participation

### Step 10: Summary Report

Provide the user with a summary:

```
Meeting Transcript Processing Complete

Meeting Notes Created:
   - File: 02_Projects/Meetings/YYYY-MM-DD Meeting Title.md
   - Attendees: [Count] identified

Linked in Daily Note:
   - File: 01_Capture/YYYY-MM-DD.md

Personnel Files Updated:
   - [Full Name 1]: [UPDATED/CREATED] - [Brief summary]
   - [Full Name 2]: [UPDATED/CREATED] - [Brief summary]

[Include any notable observations or action items requiring immediate attention]
```

## Using Additional Instructions

The additional instructions parameter provides powerful flexibility:

### Specifying Meeting Title
```
/process-meeting transcript.txt Save as "Q4 2024 Board Review"
```

### Clarifying Attendees
```
/process-meeting transcript.txt Attendees are Jane Smith, Tom Baker, Sarah Lee
```

### Providing Meeting Context
```
/process-meeting transcript.txt This is a team standup. Focus on blockers and action items.
```

### Combining Multiple Instructions
```
/process-meeting transcript.txt Save as "Emergency Planning Call". Attendees are Jane Smith, Tom Baker. Tag with #urgent.
```

## Tips for Success

1. **Full Names Required**: ALL personnel files MUST use full first and last names. If you only have partial names from the transcript, STOP and ask the user.

2. **Search Existing Personnel Files First**: ALWAYS search before creating new ones. Duplicates are a critical error.

3. **Concise Participation Notes**: Keep the Past Interactions entries concise but informative.

4. **Context Preservation**: The Detailed Notes section should preserve enough context that someone reading it later can understand what was discussed without the transcript.

## Quick Reference

**Key Files**:
- Meeting Notes: `02_Projects/Meetings/`
- Daily Notes: `01_Capture/`
- Personnel Files: `03_Archives/People/`

**Agent Roles**:
1. Senior PM Agent - Analyzes transcript, generates structured notes
2. Personnel Update Agents (one per attendee) - Updates individual personnel files

**Output Structure**:
```
Meeting Notes File (in Meetings/)
  |
  Linked in Daily Note (in Capture/)
  |
  Personnel Files Updated (in People/)
```
