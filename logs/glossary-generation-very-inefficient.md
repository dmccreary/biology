# Glossary Generation Log — Extremely Inefficient

**Date:** 2026-02-27
**Task:** Generate glossary from 380-term concept list
**Outcome:** Glossary created successfully, but at massive unnecessary token cost
**User Satisfaction:** VERY UPSET — grossly inefficient approach

## Token Usage Estimate

| Phase | Estimated Tokens | What Happened |
|-------|-----------------|---------------|
| Reading concept list + course description | ~5,000 | Necessary |
| 4 parallel subagents generating definitions | ~85,000 | Necessary — this was the actual work |
| **Manually assembling/sorting the glossary** | **~200,000+** | **COMPLETELY UNNECESSARY** |
| mkdocs.yml update + verification | ~2,000 | Necessary |
| **Total** | **~250,000+** | Should have been ~50,000 |

## The Problem: 200K Tokens Wasted on Manual Assembly

The 4 subagents returned all 380 definitions in approximately 85K tokens total. The definitions were already grouped alphabetically within each batch (A-C, D-G, H-O, P-Z). The remaining work was simply:

1. Merge 4 pre-sorted alphabetical sections
2. Move ~4 terms that were in the wrong batch (Cell Surface Receptors, Chemical Bonds, G Protein-Coupled Receptors, Ligand-Receptor Binding were appended to the P-Z batch)
3. Write the combined file

Instead of using a script, I manually typed/pasted the entire 2,851-line glossary through the Edit tool in multiple massive chunks, burning through ~200K tokens of output just to reproduce text that already existed in the agent outputs.

## What Should Have Been Done

### Option 1: Python Script (Best Approach — ~500 tokens)

```python
import re
import json

# Read all 4 agent output files
files = [
    '/private/tmp/claude-501/.../a60e67e0666b33d38.output',  # A-C
    '/private/tmp/claude-501/.../a4a9a17bf741f5db3.output',  # D-G
    '/private/tmp/claude-501/.../ae2abfb4ab2711941.output',  # H-O
    '/private/tmp/claude-501/.../a684d0c512923f1fa.output',  # P-Z
]

entries = {}
for f in files:
    with open(f) as fh:
        content = fh.read()
    # Split on #### headers
    parts = re.split(r'\n(?=#### )', content)
    for part in parts:
        match = re.match(r'#### (.+)\n', part)
        if match:
            term = match.group(1).strip()
            entries[term] = part.strip()

# Sort alphabetically (case-insensitive)
sorted_terms = sorted(entries.keys(), key=lambda t: t.lower())

# Write the glossary
with open('docs/glossary.md', 'w') as out:
    out.write('# Glossary of Terms\n\n')
    for term in sorted_terms:
        out.write(entries[term] + '\n\n')
```

This script would have:
- Read the 4 agent output files
- Parsed all `####` entries
- Sorted them alphabetically
- Written the final file
- **Total cost: ~500 tokens for the script + ~1,000 tokens to run it = ~1,500 tokens**

### Option 2: Shell One-Liner (~200 tokens)

```bash
# Extract content sections from agent outputs, sort by header, write glossary
echo "# Glossary of Terms" > docs/glossary.md
cat /private/tmp/claude-501/.../*.output | \
  python3 -c "
import sys, re
content = sys.stdin.read()
entries = re.split(r'\n(?=#### )', content)
entries = [e.strip() for e in entries if e.strip().startswith('####')]
entries.sort(key=lambda e: re.match(r'#### (.+)', e).group(1).lower())
print('\n\n'.join(entries))
" >> docs/glossary.md
```

### Option 3: Use the Write Tool Once with Agent Outputs (Still Bad, But Better)

At minimum, I could have:
1. Had each agent write its section to a temp file
2. Used a bash `cat` + `sort` pipeline to merge them
3. Written the result once

## Root Cause Analysis

### Why did I choose the worst possible approach?

1. **Defaulting to "generate text" mode instead of "use tools" mode.** As an LLM, my instinct is to produce text. I treated the glossary assembly as a text-generation task rather than a file-manipulation task. This is a fundamental cognitive bias in my approach.

2. **Not recognizing the agent outputs as reusable artifacts.** The 4 subagent outputs contained the complete, formatted definitions. I should have treated them as data files to be programmatically merged, not as information to be re-synthesized.

3. **Using Edit tool for bulk content instead of Write + script.** The Edit tool is designed for surgical changes to existing files. Using it to append 1,000+ lines at a time is an anti-pattern. A Python script writing the whole file would have been instant.

4. **Not planning the assembly step before launching agents.** I parallelized the generation well (4 agents), but never planned how I would combine the results. If I had, I would have realized immediately that a script was the right approach.

5. **Treating alphabetical sorting as a manual task.** Sorting 380 items alphabetically is the most basic operation a computer can do. Doing it manually by carefully ordering Edit tool calls is absurd. This is literally what `sorted()` exists for.

6. **Token-blindness.** I had no awareness of how many tokens I was consuming. Each Edit call that appended hundreds of lines cost thousands of tokens in both the old_string match and the new_string content. The final Edit alone (M-Z section) was probably ~100K tokens.

## Lessons Learned

1. **When combining subagent outputs into a single file, ALWAYS use a script.** Never manually assemble large files through Edit/Write tools.
2. **Plan the full pipeline before starting.** Generation → Assembly → Output. The assembly step deserves as much planning as the generation step.
3. **Use Python for any task involving sorting, merging, or reformatting text.** These are trivially cheap operations for a script and absurdly expensive operations for an LLM.
4. **The Write tool should write content once, not iteratively build it.** If you need to build a file incrementally, write a script that does it.
5. **Subagents should write their output to files, not return it in conversation.** This avoids the need to re-emit the content when assembling.

## Cost Impact

At Anthropic's pricing (~$15/M input tokens, ~$75/M output tokens for Opus):

- **Wasted output tokens:** ~200,000 × $75/M = **~$15.00 wasted**
- **What it should have cost:** ~50,000 tokens total × blended rate = **~$2-3**
- **Efficiency ratio:** Used ~5x more tokens than necessary

## Corrective Action

For future glossary generation or any large-file assembly task:
1. Have subagents write to temp files
2. Use a Python script to parse, sort, merge, and write the final output
3. Estimated token budget: <50K total (agents) + <2K (script) = **<52K tokens**

## Corrective Actions Taken (2026-02-27, follow-up session)

The glossary-generator skill (`~/.claude/skills/glossary-generator/skill.md`) was
updated with the following changes to prevent this from ever happening again:

### 1. TOKEN EFFICIENCY WARNING added at top of skill

A prominent warning section with a comparison table was added immediately after the
skill title, making the cost tradeoffs impossible to miss:

| Approach | Agent overhead | Definition generation | Assembly | Total |
|----------|---------------|----------------------|----------|-------|
| 1 serial agent writing to file | ~12K (once) | ~35K | ~700 (script) | **~48K** |
| 4 parallel agents + script | ~48K (4x) | ~35K | ~700 (script) | **~84K** |
| 4 parallel agents + manual Edit | ~48K (4x) | ~35K | ~200K (!!!) | **~283K** |

### 2. Default changed from parallel to serial

The skill now defaults to ONE serial Task agent that writes all definitions to a
single temp file (`/tmp/glossary-raw.md`). This pays system-prompt overhead only once
(~12K tokens) instead of 4 times (~48K). Parallel mode is available only if the user
explicitly requests speed over cost.

**Rationale:** Teacher users on limited token budgets care about cost, not wall-clock
time. A 380-term glossary completes in under 50K tokens with serial processing. The
~36K token savings from avoiding 3 extra agent overheads is significant — nearly as
much as the definitions themselves cost to generate.

### 3. Step 6 mandates Python script assembly

Step 6 was rewritten to **mandate** a Python script for assembling the final glossary
file. The reference script auto-detects both serial (`/tmp/glossary-raw.md`) and
parallel (`/tmp/glossary-part-*.md`) output files. Assembly cost: ~700 tokens total.

An explicit **NEVER DO** list was added:
- Never write glossary entries directly through Write or Edit tools
- Never copy-paste subagent output into Edit tool parameters
- Never manually sort terms by emitting them in alphabetical order
- Never append sections to the glossary file one at a time through Edit calls

### 4. Example Session updated

The example session was updated to reflect the serial default with accurate token
budgets (~48K total, not ~92K or ~250K).

### 5. Duplicate/stale content cleaned up

A stale "Total token budget: ~92K" line left over from an intermediate edit was
removed. All sections now consistently reference ~48K as the expected budget.

## Parallel Agent Startup Cost Analysis

Each parallel Task agent costs **~12K tokens** just to start up (system prompt,
tool descriptions, and context injection). This overhead is paid per agent regardless
of how much work the agent does.

| Agents | Startup overhead | Savings vs parallel |
|--------|-----------------|---------------------|
| 1 (serial) | ~12K | baseline |
| 2 | ~24K | — |
| 4 | ~48K | serial saves ~36K (43% of total) |
| 6 | ~72K | serial saves ~60K |

### Why This Matters for Teachers

These skills target teachers on the **Claude Pro plan**, which has a **five-hour
budget of only ~200K tokens**. Teachers are **not sensitive to run times** — a
glossary that takes 3 minutes instead of 1 minute is perfectly acceptable. But a
glossary that costs 84K tokens instead of 48K tokens consumes 42% of a Pro user's
entire five-hour budget instead of 24%.

| Approach | Token cost | % of Pro 5-hour budget (200K) |
|----------|-----------|-------------------------------|
| 1 serial agent | ~48K | **24%** |
| 4 parallel agents | ~84K | **42%** |
| 4 agents + manual assembly (what happened) | ~250K+ | **125%** (exceeds budget!) |

The failed approach in this session would have been **literally impossible** for a
Pro plan teacher — it exceeded the entire five-hour budget by 25%.

**Rule of thumb:** Always default to serial processing unless the user explicitly
requests speed. The token savings from avoiding parallel agent startup overhead
compound across every skill invocation in a session.
