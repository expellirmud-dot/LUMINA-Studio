# LUMINA PHASE GATE WORKFLOW

## Purpose

This workflow prevents uncontrolled task drift.

Agents must not create task chains such as:

* 10A
* 10B
* 10C
* 10.1A
* 10.1B
* 10.1C

Instead, every feature must move through only three phase gates:

* Phase A — Brief / Scope Lock
* Phase B — Implementation Candidate
* Phase C — QA / Decision / Freeze

---\n\n## Project Identity Check (Mandatory)\n\nThis check must be executed before any file creation, modification, validation, build, commit, or QA activity.\n\n### Required Reads\n\nAgents must read:\n\n* AGENTS.md\n* GEMINI.md\n* AI_HANDOFF.md\n\n### Verification\n\nDetermine and report:\n\n* Current Project Name\n* Current Phase\n* Current Branch (if available)\n* Current Task ID\n\n### Required Output\n\nAgents must explicitly report:\n\nProject: <project name>\n\nPhase: <phase>\n\nTask: <task id>\n\nResult: PASS / FAIL\n\n### Mismatch Rule\n\nIf:\n\nDetected Project != Target Project\n\nResult:\n\nSTOP\n\nDo not:\n\n* create files\n* modify files\n* run lint\n* run build\n* run tests\n* run commits\n* run pushes\n\nAsk user for confirmation.\n\n### Example\n\nTarget Project:\nLUMINA Studio\n\nDetected Project:\ncitizen_portal\n\nResult:\nFAIL\n\nAction:\nSTOP and request confirmation.\n\n### Phase Gate Dependency\n\nProject Identity Check must pass before:\n\n* Phase A\n* Phase B\n* Phase C\n\nNo phase may begin without a PASS result.\n\n---

## Phase A — Brief / Scope Lock

### Goal

Define exactly what should be built and what must not be touched.

### Allowed Work

* Read current project state
* Read AGENTS.md
* Read GEMINI.md
* Read .ai/ARCHITECTURE_STATE.md
* Read .ai/SKILL_PROFILES.md
* Read AI_HANDOFF.md
* Read relevant skill files
* Read Serena / CodeGraph notes
* Propose scope
* Propose allowed files
* Propose forbidden files
* Propose validation plan
* Create a task brief

### Required Output

Create one brief file:

.ai/tasks/<TASK_ID>/BRIEF.md

The brief must include:

* Task ID
* Objective
* Current phase
* Required read-first files
* Serena check
* CodeGraph check
* Allowed files
* Forbidden files
* Exact implementation requirements
* Validation required
* Stop conditions
* Expected report
* User approval requirement

### Forbidden Work

During Phase A, do not:

* Modify application code
* Modify CSS
* Modify config
* Modify components
* Install dependencies
* Run implementation
* Commit changes
* Start a new feature
* Rename the task
* Split the task into multiple unapproved subtasks

### Exit Criteria

Phase A is complete only when:

* BRIEF.md exists
* Scope is clear
* Allowed files are listed
* Forbidden files are listed
* Stop conditions are listed
* User explicitly approves moving to Phase B

### If Important Design Judgment Is Needed

If the task involves:

* premium visual direction
* interaction feel
* photography curation
* motion quality
* major UX judgment
* brand lock decision

then the agent must stop and tell the user:

“Please have GPT-5.5 review the current visual/state before implementation.”

After GPT-5.5 review, update BRIEF.md before continuing.

---

## Phase B — Implementation Candidate

### Goal

Implement only what Phase A approved.

This is not final approval.

This is a candidate implementation.

### Required Read First

Before coding, read:

* .ai/tasks/<TASK_ID>/BRIEF.md
* AGENTS.md
* GEMINI.md
* .ai/ARCHITECTURE_STATE.md
* AI_HANDOFF.md
* relevant skill files
* .mcp/serena.md
* .mcp/codegraph.md

### Allowed Work

Only edit files listed in BRIEF.md.

### Forbidden Work

Do not:

* Edit files outside allowed list
* Add dependencies
* Expand architecture
* Add backend
* Add database
* Add auth
* Add CMS
* Add dashboard
* Add API routes
* Add Three.js / WebGL / Canvas unless explicitly approved
* Improve unrelated sections
* Fix unrelated issues without approval
* Continue after validation failure

### Required Validation

Run only the validation defined in BRIEF.md.

Usually:

* npm run lint
* npm run build

For documentation-only tasks:

* git status --short

### Stop Conditions

Stop immediately if:

* lint fails
* build fails
* forbidden file must be edited
* dependency is required
* task needs design judgment
* implementation requires architecture change
* output differs from BRIEF.md
* stale context appears

### Required Output

Create:

.ai/tasks/<TASK_ID>/REPORT.md

The report must include:

* Files changed
* What was implemented
* Validation result
* Scope check
* Deviations from brief
* Risks
* Recommendation
* Next phase readiness

### Git Diff Requirement

After implementation and validation, run:

git status --short
git diff --stat

Report the result.

Do not commit unless the brief explicitly allows commit after pass.

### Exit Criteria

Phase B is complete only when:

* Implementation is done
* Validation passes
* REPORT.md exists
* git status/diff summary is reported
* User approves moving to Phase C

---

## Phase C — QA / Decision / Freeze

### Goal

Review the candidate implementation and decide:

* KEEP
* TUNE
* REVERT
* FREEZE

### Required Read First

Read:

* .ai/tasks/<TASK_ID>/BRIEF.md
* .ai/tasks/<TASK_ID>/REPORT.md
* relevant screenshots
* reports/visual_audit.md
* reports/implementation_report.md
* AI_HANDOFF.md

### QA Types

Choose only what the brief requires:

* Visual QA
* Screenshot QA
* Mobile QA
* Performance QA
* Accessibility QA
* Reduced-motion QA
* Build/lint verification
* Git diff review

### Required Output

Create:

.ai/tasks/<TASK_ID>/QA.md

QA.md must include:

* Evidence reviewed
* PASS / FAIL per criterion
* Visual observations
* Technical observations
* Risks
* Decision

### Decision Rules

KEEP:

* Candidate meets objective
* No blocker
* Visual direction fits LUMINA

TUNE:

* Candidate is directionally correct
* Needs small adjustment
* Must create a new brief update before tuning

REVERT:

* Candidate fails core objective
* Visual quality is worse
* It distracts from photography
* It becomes tech demo

FREEZE:

* Candidate is approved
* No further change allowed without explicit user approval

### Commit / Git Requirement

If decision is KEEP or FREEZE:

Run:

git status --short
git diff --stat

If only expected files changed:

git add <approved files>
git commit -m "<TASK_ID> <short description>"
git push

If unexpected files changed:

Stop and report.

### Required Documentation Updates

For KEEP or FREEZE, update:

* AI_HANDOFF.md
* reports/implementation_report.md
* .ai/ARCHITECTURE_STATE.md if architecture or art direction lock changed

### Exit Criteria

Phase C is complete only when:

* QA.md exists
* Decision is recorded
* Approved docs are updated
* Commit/push is complete if approved
* Next task is explicitly named

---

## Global Rules

### One Task, One Folder

Every task must live in:

.ai/tasks/<TASK_ID>/

with:

* BRIEF.md
* REPORT.md
* QA.md

Optional:

* screenshots/
* notes.md

### No Uncontrolled Subtasks

Do not create:

* TASK-A
* TASK-B
* TASK-C
* TASK-1.1
* TASK-1.2

unless user explicitly approves.

If the task is too large, stop and ask the user to split it.

### Source of Truth

Filesystem is source of truth.

If Serena or CodeGraph disagree with filesystem:

* report mismatch
* trust filesystem
* do not proceed until user confirms if mismatch is major

### Stale Context Rule

If output contains unrelated context such as:

* other projects
* old tasks
* unrelated database terms
* unrelated backend discussions
* non-LUMINA content

stop immediately and mark task contaminated.

### 5.5 Review Rule

Require GPT-5.5 review before implementation when:

* visual style is being changed
* interaction behavior is being changed
* photography selection changes
* hero section changes
* brand tone changes
* architecture changes
* QA gives conflicting results
* AI proposes a “cool” effect

The agent must tell the user:

“This requires GPT-5.5 review before implementation.”

After review, update BRIEF.md.

### Current LUMINA Art Direction Lock

Approved:

* Photography first
* Cinematic Sequence
* Reactive Light Frame
* Editorial Breathing Frame Premium candidate
* Editorial Minimalism
* Server Component page wrapper
* Client Component only for hero interaction
* Config-driven visual variants

Rejected:

* Lens Light Sweep as default
* Heavy optical overlays
* Hero focus blur-in
* Heavy glassmorphism
* Large cursor spotlight
* Tech demo motion
* WebGL / Three.js / Canvas for Phase 1

Core Principle:

Photography First.
Motion Supports Photography.
Motion Must Never Become The Subject.
