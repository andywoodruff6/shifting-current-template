# Technical Diagrams Workflow

**Create system architecture, flowcharts, and technical process visualizations**

Generates clear, professional technical diagrams for explaining systems, architectures, processes, and technical concepts.

## Purpose

Technical diagrams make complex systems and processes understandable. They should:
- Clearly communicate technical information
- Show relationships and flows between components
- Be accurate and technically correct
- Balance detail with clarity
- Be professional and presentation-ready

## Workflow Steps

### Step 1: Define the Technical Subject

Identify what needs to be diagrammed:

**Common Technical Diagram Types:**

1. **System Architecture**
   - Software/application architecture
   - Infrastructure diagrams
   - Network topology
   - Service/microservice layouts

2. **Process Flows**
   - Workflows and procedures
   - Decision trees
   - State machines
   - Algorithmic processes

3. **Data Flows**
   - Data pipelines
   - Information flow between systems
   - API interactions
   - Data transformations

4. **Component Relationships**
   - Module dependencies
   - Class/object relationships
   - Integration patterns
   - System interactions

**Gather Information:**
- What systems/components are involved?
- How do they relate or interact?
- What's the flow or process?
- What level of detail is appropriate?
- Who is the audience? (Technical depth needed)
- What's the purpose? (Documentation, presentation, teaching)

### Step 2: Plan the Diagram Structure

#### Identify Components

List all elements that need to be shown:

**For System Architecture:**
- Services/applications
- Databases
- APIs/interfaces
- External systems
- Users/clients
- Infrastructure

**For Process Flows:**
- Process steps
- Decision points
- Inputs/outputs
- Actors/roles
- Start/end points

**For Data Flows:**
- Data sources
- Processing steps
- Storage locations
- Transformations
- Destinations

#### Define Relationships

**Relationship Types:**
- Direct connections (A calls B)
- Data flows (data from A to B)
- Dependencies (A depends on B)
- Hierarchies (A contains B)
- Sequences (A then B then C)
- Conditions (if X then A else B)

#### Choose Layout Approach

**Hierarchical:** Top-down or left-right flow, parent-child relationships
**Sequential:** Step-by-step processes, timelines
**Network/Graph:** Interconnected components, complex systems
**Layered:** Horizontal layers (n-tier), vertical swim lanes

### Step 3: Determine Visual Style

#### Style Options

**A. Clean Professional Diagrams**
- Simple shapes (boxes, circles, diamonds)
- Clear lines and connectors
- Best for formal documentation and specs

**B. Hand-Drawn Style**
- Sketch-like appearance, whiteboard aesthetic
- Casual but clear
- Best for blog posts, explanatory content, educational materials

**C. Modern Illustrated**
- Stylized icons and components
- Vibrant colors, visual appeal
- Best for marketing, public presentations

### Step 4: Construct the Prompt

```
Professional technical diagram showing [SYSTEM/PROCESS].

PURPOSE:
[What this diagram is for and who will use it]

DIAGRAM TYPE: [Architecture / Process Flow / Data Flow / Component Diagram]

COMPONENTS TO SHOW:
[List all components/elements]
Component 1: [name and brief description]
Component 2: [name and brief description]
...

RELATIONSHIPS/CONNECTIONS:
[Describe how components connect]
- [Component A] -> [Component B]: [type of connection]
...

FLOW/PROCESS:
[If applicable, describe the sequence]
1. [Step/Stage 1]
2. [Step/Stage 2]
...

LAYOUT & STRUCTURE:
- [Hierarchical / Sequential / Network / Layered] layout
- [Top-to-bottom / Left-to-right / Radial] orientation
- [Grouping or organization of elements]

VISUAL STYLE:
- [Clean Professional / Hand-Drawn Sketch / Modern Illustrated]
- Technical diagram quality
- Clear and readable

COLOR CODING:
[If using color to distinguish types]
- [Component Type 1]: [color]
- [Component Type 2]: [color]
- Connections: [color for arrows/lines]
- Background: [background color]

LABELS & TEXT:
- All components clearly labeled
- Connection types labeled if needed
- Readable font size
- Professional typography

MOOD: Clear, organized, professional, technical, systematic

CRITICAL REQUIREMENTS:
- All components must be clearly shown
- Relationships/flows must be obvious
- Labels must be readable
- Technically accurate
- Professional diagram quality
```

### Step 5: Generate the Diagram

```bash
bun run .claude/skills/art/tools/generate-image.ts \
  --model "google/gemini-3-pro-image-preview" \
  --prompt "[YOUR PROMPT]" \
  --size "[SIZE]" \
  --output "[OUTPUT_PATH]"
```

**Model Recommendations:**

| Diagram Type | Recommended Model | Rationale |
|--------------|-------------------|-----------|
| **Clean/Professional** | `google/gemini-3-pro-image-preview` | Excellent at structured diagrams with labels |
| **Hand-Drawn Style** | `black-forest-labs/flux-1.1-pro` | Excellent for sketch aesthetics |
| **Complex Systems** | `google/gemini-3-pro-image-preview` | Handles complexity well |

**Size Recommendations:**
- Landscape diagrams: `1792x1024` (16:9)
- Square diagrams: `1024x1024` (1:1)
- Presentation: `1920x1080`

### Step 6: Review and Validate

**Technical Accuracy:**
- [ ] All components shown correctly
- [ ] Relationships/flows accurate
- [ ] No missing elements
- [ ] Matches intended architecture/process

**Clarity & Readability:**
- [ ] Components clearly distinguishable
- [ ] Labels readable
- [ ] Flow/connections obvious
- [ ] Not too cluttered
- [ ] Visual hierarchy clear

**Professional Quality:**
- [ ] Clean, professional appearance
- [ ] Consistent styling
- [ ] Good use of space
- [ ] Suitable for intended context

**If validation fails:**
1. Identify specific issues
2. Clarify ambiguous parts in prompt
3. Simplify if too complex
4. Regenerate and re-validate

### Step 7: Save and Document

**Naming Convention:**
```
[project]-diagram-[system-name]-[type]-[date].png

Examples:
app-diagram-platform-architecture-20250125.png
project-diagram-data-flow-20250125.png
```

**Save Location:**
- Documentation: `02_Projects/[project-name]/docs/`
- Assets: `04_Assets/diagrams/`

## Tips for Success

### Planning
- Start simple, add complexity only if needed
- Know your audience's technical level
- Focus on what's important to communicate

### Clarity
- One diagram, one purpose
- Avoid information overload
- Use consistent notation
- Label clearly and completely

### Visual Design
- Group related components
- Use whitespace effectively
- Consistent sizing and styling
- Color code purposefully, not decoratively

### Prompt Writing
- List every component explicitly
- Describe all relationships
- Specify layout clearly

## Quick Reference

**Command Template:**
```bash
bun run .claude/skills/art/tools/generate-image.ts \
  --model "google/gemini-3-pro-image-preview" \
  --prompt "YOUR DETAILED TECHNICAL DIAGRAM PROMPT" \
  --size "1792x1024" \
  --output "04_Assets/diagrams/[system]-[type]-[date].png"
```
