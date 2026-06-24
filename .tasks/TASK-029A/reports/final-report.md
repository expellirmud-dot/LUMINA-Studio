# Final Report: Update LUMINA Controller and CLI Routing Policy

## Files Read
- `AGENTS.md`
- `AI_HANDOFF.md`
- `docs/CONTEXT_INDEX.md`
- `docs/LUMINA_MODEL_AND_WORKER_POLICY.md`
- `docs/SKILL_SOURCE_REGISTRY.md`

## Files Changed
- `AGENTS.md`
- `docs/LUMINA_MODEL_AND_WORKER_POLICY.md`
- `.tasks/TASK-029A/task.md`
- `.tasks/TASK-029A/status.md`
- `.tasks/TASK-029A/reports/final-report.md`

## Exact Routing Changes
1. Added **Goal Execution Contract** to `AGENTS.md` clarifying primary (Codex GPT-5.4) and fallback (AntiGravity / AGY Gemini 3.1 Pro Low/High) controllers, preserving GPT-5.5 as the architecture/art direction gate.
2. Added **Controller-specific CLI Routing** to `AGENTS.md`:
   - Codex may call OpenCode, AGY, and Gemini CLIs.
   - AntiGravity must use Gemini CLI only; OpenCode is forbidden for AntiGravity.
3. Updated `docs/LUMINA_MODEL_AND_WORKER_POLICY.md` Section 4 (Model Routing) to formalize CLI permissions and explicitly detail AntiGravity's role as fallback controller and Gemini CLI as the preferred worker path under it.

## Validation Commands
```powershell
git diff --check
git status --short
```

## Recommended Commit Command
```powershell
git add AGENTS.md docs/LUMINA_MODEL_AND_WORKER_POLICY.md .tasks/TASK-029A/
git commit -m "docs: update LUMINA controller and CLI routing policy"
git status --short
```
