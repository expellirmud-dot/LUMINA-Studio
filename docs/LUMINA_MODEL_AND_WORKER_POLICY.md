# LUMINA Model and Worker Policy

## 1. Purpose
LUMINA uses AI through a controlled workflow:
* plan first
* capture evidence
* scope narrowly
* execute carefully
* validate visually and technically
* commit only after owner/controller review

## 2. Active Project Context
* Active project: `D:\lumina-studio`
* Skill source: `D:\lumina-studio\.agents\skills`
* Serena/CodeGraph project: `D:\lumina-studio`
* Evidence capture script: `tools/capture-lumina-evidence.mjs`
* Runtime evidence folder: `.runtime-captures/`
* Task packet folder: `.tasks/`
* Owner CLI routing reference: `docs/CLI_WORKER_ROUTING_REFERENCE.md`

## 3. LUMINA Creative Position
The locked LUMINA identity:
* Warm Premium
* Quiet Luxury
* Human Documentary
* Natural / Emotional / Timeless
* People / Family / Relationships / Rituals
* Stories before Portfolio
* UI as invisible canvas
* Photography and feeling first
* Not a generic photographer template
* Not black-gold luxury
* Not effect showcase
* Not a "show everything" portfolio

## 4. Model Routing

**Controller / Task Packet / Review / Goal Orchestration:**
- Primary: Codex GPT-5.4
- Fallback: AntiGravity / AGY Gemini 3.1 Pro Low/High when Codex quota is exhausted

**GPT-5.5:**
- architecture
- art direction
- dashboard/system UI
- identity decisions
- high-risk gates
- final review

**Gemini CLI:**
- worker/reviewer only
- preferred worker path under AntiGravity Controller
- also allowed under Codex Controller
- do not use gemini-3.1-pro-preview
- use only owner-confirmed available models

**OpenCode CLI:**
- allowed under Codex Controller
- allowed in owner-operated foreground terminal
- not allowed under AntiGravity Controller

**AGY CLI:**
- allowed under Codex Controller when useful
- AntiGravity-side Controller/tooling path
- not a replacement for OpenCode worker under AntiGravity


**computer-use-runtime-bridge:**
* optional eyes/reporter
* read-only runtime/browser review support
* not a decision maker
* not an editor
* paid Computer Use models are not default

**agent-browser / Playwright:**
* preferred evidence capture path
* screenshot/video capture
* deterministic browser evidence
* no paid Computer Use required

## 5. Risk Levels

**L0 — Read-only review**
Examples:
* screenshot/video review
* copy critique
* image sequence review
* visual rhythm review
Allowed:
* no file edits

**L1 — Documentation / policy / task packets**
Examples:
* docs
* `.tasks`
* reports
* registry updates
Validation:
* git status

**L2 — Scoped visual/code polish**
Examples:
* typography tuning
* spacing adjustment
* config changes
* image ordering
Validation:
* npm run build
* npm run lint
* capture evidence if visual

**L3 — Motion / responsive / layout-sensitive changes**
Examples:
* hero rhythm
* mobile hero balance
* scroll pacing
* section layout behavior
Requires:
* GPT-5.5 approval before implementation
* before/after evidence

**L4 — Concept / architecture / major redesign**
Examples:
* hero redesign
* new section architecture
* backend, CMS, booking, dashboard
Requires:
* GPT-5.5 only
* owner approval
* no automatic worker execution

## 6. Nexus / CLI Worker Orchestration

Cross-project owner: `D:\tools\nexus-project-continuity\agent_orchestration.json` (`parallel_doctrine`). Live CLI routes come from verified global route owners; this section adds LUMINA-specific execution and review constraints.

**Default:** Nexus is the controller. For each nontrivial LUMINA task, compare direct execution with bounded CLI worker dispatch. Use CLI workers concurrently whenever independent subtasks make total execution faster or materially strengthen validation; do not serialize work that is safe to launch in parallel. Skip dispatch when startup overhead, contention, routing uncertainty, or missing capability makes it slower or unsafe.

**Nexus:** decomposes goals; selects exact live worker/model routes; assigns disjoint scopes and result artifacts; launches independent work in parallel; reconciles worker diffs, evidence and checks; and performs final acceptance. Worker assertions are evidence, never final authority.

**Workers:** execute only the bounded approved packet, do not widen scope or independently make external commitments, and report changed files, checks and limitations. Independent readers/reviewers can run alongside writers.

**Collision rule:** one writer per worktree/file domain (WIP=1), not one global worker. Parallel writers require separate worktrees and controlled Nexus integration. Read-only reviewers/tests may run concurrently where resources do not collide.

**Trust gate:** for security, data integrity, release, production, irreversible or uncertain work, use a separate independent reviewer or Nexus direct verification against canonical repo/runtime evidence. The implementing worker must not be the only reviewer; block integration/external effects if verification fails.

**Authority:** standing delegation for PR review/approve/merge, scoped commit, push, deploy and verified post-merge folder cleanup is owned by `AGENTS.md#Owner Standing Delegation`. No repeated approval is needed, but technical safety and reconciliation gates remain mandatory. Other external commitments still require applicable Owner authority.

## 7. Evidence Policy
* Capture script: `tools/capture-lumina-evidence.mjs`
* Output folder: `.runtime-captures/lumina/<TASK-ID>/`

Rules:
* screenshots/videos are runtime artifacts
* do not commit `.runtime-captures/`
* commit only reports and task packets
* visual changes require before/after capture when relevant

## 8. Validation Policy

For documentation-only:
```powershell
git status --short
```

For website code/config changes:
```powershell
npm run build
npm run lint
git status --short
```

For visual changes:
```powershell
$env:LUMINA_CAPTURE_TASK="<TASK-ID>"
node tools\capture-lumina-evidence.mjs
git status --short
```

## 9. Forbidden by Default
Unless explicitly scoped:
* no backend
* no database
* no CMS
* no booking system
* no dashboard
* no auth
* no payments
* no WebGL / Three.js / Canvas production effect
* no hero redesign
* no heavy optical effects
* no paid Computer Use model
* no runtime screenshots/videos committed
* no `git add .`

## 10. Stop Conditions
Stop and report if:
* git status is unexpectedly dirty
* task touches forbidden files
* worker needs to guess
* visual evidence conflicts with direction
* build/lint fails
* runtime capture fails
* scope expands into redesign
* model/tool cannot be verified
* a paid model/API would be required without owner approval

## 11. Recommended LUMINA Workflow
1. GPT-5.5 defines direction or reviews evidence.
2. Controller creates task packet.
3. Worker executes narrow scope.
4. Build/lint/capture evidence.
5. GPT-5.5 or Controller reviews result.
6. Nexus verifies results independently and resolves blockers.
7. When checks pass, Nexus may commit, merge, push and deploy under the Owner's standing delegation; stage explicit files only.
