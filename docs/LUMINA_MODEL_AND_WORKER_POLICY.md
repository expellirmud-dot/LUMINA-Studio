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
* Skill source: `D:\lumina-studio\skills`
* Serena/CodeGraph project: `D:\lumina-studio`
* Evidence capture script: `tools/capture-lumina-evidence.mjs`
* Runtime evidence folder: `.runtime-captures/`
* Task packet folder: `.tasks/`

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

## 6. Controller / Worker Rules

**Controller:**
* defines scope
* defines allowed/forbidden files
* sets risk level
* reviews evidence
* decides commit readiness

**Worker:**
* executes only approved task packet
* does not expand scope
* reports commands and results
* does not commit unless owner approves
* stops on scope drift

**Owner:**
* approves scope
* approves commit
* decides when paid models or runtime automation are allowed

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
6. Owner approves commit.
7. Commit with explicit files only.
