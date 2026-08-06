==================================================
CLI CODING WORKER ROUTING
==================================================

Owner authorizes the Development Controller to dispatch bounded
CLI Coding Workers through Hermes CLI.

The Controller must select exactly one provider and one model
for each foreground invocation.

Primary preferred route:

provider=nous
model=tencent/hy3:free

First fallback route:

provider=opencode-zen
model=deepseek-v4-flash-free

These two routes should be considered first when they are available,
authenticated, healthy, and suitable for the bounded task.

The Controller may choose another approved route from the live inventory
when task characteristics or route health make it more appropriate.

Do not change the global Hermes default provider or model.

==================================================
APPROVED HERMES FREE ROUTES
==================================================

Nous Portal:

provider=nous

Approved models:

- tencent/hy3:free
- poolside/laguna-s-2.1:free
- poolside/laguna-xs-2.1:free
- inclusionai/ling-3.0-flash:free
- stepfun/step-3.7-flash:free

OpenCode Zen:

provider=opencode-zen

Approved models:

- deepseek-v4-flash-free
- ling-3.0-flash-free
- north-mini-code-free
- nemotron-3-ultra-free
- mimo-v2.5-free
- laguna-s-2.1-free

Kilo Code:

provider=kilocode

Approved models:

- kilo-auto/free
- openrouter/free
- poolside/laguna-s-2.1:free
- poolside/laguna-xs-2.1:free
- cohere/north-mini-code:free
- nvidia/nemotron-3-ultra-550b-a55b:free
- nvidia/nemotron-3-super-120b-a12b:free
- inclusionai/ling-3.0-flash:free
- stepfun/step-3.7-flash:free

==================================================
ROUTE SELECTION GUIDANCE
==================================================

Use Nous / tencent/hy3:free first when:

- the task is a bounded code implementation
- the specification is already explicit
- the Worker mainly needs to edit config, copy, image paths, CSS,
  responsive behavior, or straightforward TypeScript
- the task does not require a new architecture or visual-direction decision
- the route is present and healthy in live inventory

Use OpenCode Zen / deepseek-v4-flash-free first fallback when:

- Hy3 is unavailable, rate-limited, capacity-limited,
  or produces a provider-level transient failure
- the task requires stronger code reasoning or repair within an already
  bounded scope
- the Controller has reviewed any valid partial diff before redispatch

Other route guidance:

north-mini-code-free:

- fast, low-risk mechanical changes
- narrow config edits
- simple copy replacement
- small focused repairs

ling-3.0-flash-free:

- broad but straightforward implementation
- multiple related files with clear instructions
- source inspection and routine validation

laguna-s-2.1 or laguna-xs-2.1:

- bounded frontend implementation
- layout and responsive adjustments
- use XS only for smaller, more mechanical seams

nemotron-3-ultra:

- heavier code review
- complex diff inspection
- difficult repair after a smaller Worker result
- do not spend it on trivial text replacement

mimo-v2.5-free:

- optional alternative for implementation or repair
- use only after live availability and task suitability are confirmed

step-3.7-flash:

- bounded multi-file implementation
- useful when the primary routes are unavailable
- must still receive the exact same Worker Handoff constraints

kilo-auto/free and openrouter/free:

- use only when the Controller intentionally authorizes automatic routing
  inside the provider
- do not use when exact model provenance is required
- exact named model routes are preferred for this task

==================================================
LIVE INVENTORY GATE
==================================================

Immediately before each dispatch, verify:

- Hermes CLI is available
- provider exists in the installed version
- exact model appears in live inventory
- authentication is healthy
- worktree is clean
- branch and HEAD match the dispatch record
- Worker Handoff exists and is complete

Required evidence:

HERMES_AVAILABLE=YES
SELECTED_PROVIDER=<exact provider>
SELECTED_MODEL=<exact model>
PROVIDER_AVAILABLE=YES
MODEL_AVAILABLE=YES
AUTH_HEALTHY=YES
LIVE_DISPATCH_HEAD=<current HEAD>
PROCESS_MODE=FOREGROUND

Do not assume a route remains available from an earlier session.

Do not expose credentials, tokens, cookies, device codes,
or authentication secrets in logs or reports.

==================================================
CANONICAL HERMES DISPATCH
==================================================

Primary Hy3 dispatch:

hermes chat `
  --provider "nous" `
  --model "tencent/hy3:free" `
  --max-turns 50 `
  --yolo `
  --query $prompt

First fallback dispatch:

hermes chat `
  --provider "opencode-zen" `
  --model "deepseek-v4-flash-free" `
  --max-turns 50 `
  --yolo `
  --query $prompt

Alternative approved dispatch pattern:

hermes chat `
  --provider "<one-approved-provider>" `
  --model "<one-approved-model>" `
  --max-turns 50 `
  --yolo `
  --query $prompt

Always pass the raw prompt content through `$prompt`.

Never pass the handoff file path itself to `--query`.

Run directly in the active terminal.

Do not use:

- Start-Job
- Start-Process
- manage_task
- schedule
- subagent
- asynchronous or background dispatch

==================================================
FAILOVER POLICY
==================================================

The Worker must not choose its own fallback.

The Controller may change route only after the previous process has settled
and the repository state has been inspected.

Automatic route change is permitted only for:

- QUOTA_EXHAUSTED
- RATE_LIMITED
- CAPACITY_UNAVAILABLE
- PROVIDER_UNAVAILABLE
- PROVIDER_TRANSIENT_FAILURE

Do not change provider or model automatically for:

- AUTH_REQUIRED
- MALFORMED_RESPONSE
- MODEL_PROTOCOL_DEFECT
- MODEL_REASONING_DEFECT
- IMPLEMENTATION_DEFECT
- VALIDATION_FAILED
- SCOPE_VIOLATION
- UNEXPLAINED_FILE_CHANGE

For these cases, the Controller must inspect and decide whether to:

- repair the handoff
- preserve and finish a valid partial diff
- redispatch with a deliberate new route
- complete the bounded repair directly
- stop on a genuine safety condition

AUTO_RETRY_SAME_PROVIDER_MODEL=NO
PROCESS_SETTLEMENT_BEFORE_FALLBACK=YES
PRESERVE_VALID_PARTIAL_DIFF=YES
MAX_ATTEMPTS_PER_BOUNDED_TASK=3

ส่วนคำสั่ง dispatch หลักสำหรับงาน LUMINA รอบนี้จึงเป็น:

hermes chat `
  --provider "nous" `
  --model "tencent/hy3:free" `
  --max-turns 50 `
  --yolo `
  --query $prompt

และ fallback แรก:

hermes chat `
  --provider "opencode-zen" `
  --model "deepseek-v4-flash-free" `
  --max-turns 50 `
  --yolo `
  --query $prompt