# Nexus CLI Worker Routing Reference

DOCUMENT_STATUS: OWNER_SAVED_REFERENCE
SAVED_DATE: 2026-10-09
ACTIVE_PROJECT: D:\lumina-studio

## Active Local Context

- Active project path: `D:\lumina-studio`
- Canonical project skill root: `D:\lumina-studio\.agents\skills\`
- Serena / CodeGraph project: `D:\lumina-studio`
- Shared tools root: `D:\tools\`
- Project agent/controller instructions: `D:\lumina-studio\AGENTS.md`

This file preserves the Owner-provided CLI routing note. The command samples below still point to `D:\stt_typing` because they are the source reference/template. Before using them for LUMINA or another repository, change `$projectPath`, `--dir`, and the handoff path to the exact active project/task packet.

## Hermes CLI — Owner-provided reference

The Owner-provided shorthand uses alternatives in-line:

```powershell
$projectPath = "D:\stt_typing"
$promptPath = "<EXACT-WORK-ORDER-HANDOFF-PATH>"
Set-Location -LiteralPath $projectPath
$prompt = Get-Content -Raw -LiteralPath $promptPath

hermes chat `
  --provider "nous" `/kilocode
  --model "meituan/longcat-2.5-preview:free" `/ stepfun/step-3.7-flash:free
  --max-turns "<EXACT_TASK_BUDGET>" `
  --yolo `
  --query $prompt

opencode run `
  --pure `
  --dir "D:\stt_typing" `
  --agent "code-worker" `
  -m "<MODEL>" `
  "Reply exactly: ROUTE_OK. Do not use tools."
```

Known free OpenCode candidate preserved from the Owner note:

- `opencode/muse-spark-1.3-contributor-free`

## Execution Interpretation

The slash forms above are selection shorthand, not literal arguments. For a real dispatch, choose exactly one provider and one model per invocation.

Examples:

```powershell
hermes chat `
  --provider "nous" `
  --model "meituan/longcat-2.5-preview:free" `
  --max-turns "<EXACT_TASK_BUDGET>" `
  --yolo `
  --query $prompt
```

or

```powershell
hermes chat `
  --provider "nous" `
  --model "stepfun/step-3.7-flash:free" `
  --max-turns "<EXACT_TASK_BUDGET>" `
  --yolo `
  --query $prompt
```

If routing through Kilo Code, use the live provider/model IDs exposed by the current Hermes inventory. Do not assume a model ID is valid across providers.

Before dispatch:
- verify the exact active project and task packet;
- verify live model/provider inventory when route health is uncertain;
- load the exact handoff content, not only its path;
- use one runner/provider/model per attempt;
- validate worker claims against repository truth, tests, diff, and runtime evidence;
- do not let a Worker self-expand scope, self-fallback, commit, push, or deploy unless the active packet explicitly grants that authority.

## Source Governance References

The following files are the STT source references supplied by the Owner and remain under `D:\stt_typing`:

- `PROJECT_RULES.md`
- `AGENTS.md`
- `docs\LOOP_CONTRACT.md`
- `docs\AI Project Workflow Policy.md`
- `CLI_WORKER.md`
- `docs\STT_HERMES_CLI_MODEL_ROUTING.md`

For STT work, those live files take precedence over this copied reference. For LUMINA work, use LUMINA's own `PROJECT_RULES.md`, `AGENTS.md`, task packet, and `docs\LUMINA_MODEL_AND_WORKER_POLICY.md`.

## OpenCode Constraint

OpenCode execution must follow the current project/controller policy. In LUMINA, `AGENTS.md` and `docs\LUMINA_MODEL_AND_WORKER_POLICY.md` remain authoritative for when OpenCode is allowed.

## Do Not Treat This File As Route Health Proof

Model catalogs, free routes, quotas, provider availability, and CLI versions can change. Re-check live inventory before real dispatch when the route is not already verified in the current task.
