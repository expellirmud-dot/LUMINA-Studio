# Worker Prompt Template — STT Windows UI Review

READ-FIRST / ACTIVE PROJECT CONTEXT

- Active project: `D:\lumina-studio`
- Active project skill source: `D:\lumina-studio\skills`
- Active Serena/CodeGraph project: `D:\lumina-studio`
- Official Python runner: `python.exe`
- Skill: `windows-ui-review-runtime`

Mode: READ-ONLY REVIEW or WORKER ONLY
Execution level: L0 for existing screenshot review, L1 for skill docs/template edit, L2 only for scoped skill script maintenance.

Required READ-FIRST:

1. `PROJECT_RULES.md`
2. `AGENTS.md`
3. `README.md`
4. `docs\AI Project Workflow Policy.md`
5. `.ai\skills\windows-ui-review-runtime\SKILL.md`
6. `.ai\skills\windows-ui-review-runtime\references\SAFE_WORKFLOW_AND_BOUNDARIES.md`
7. `.ai\skills\windows-ui-review-runtime\references\STT_UI_STATES.md`
8. Current `.tasks\<TASK-ID>\` packet

Scope:

- Review/capture/report STT UI evidence only.
- No runtime behavior changes.
- No exploratory clicking.
- No commit unless explicitly approved.

Allowed files:

- `.ai\skills\windows-ui-review-runtime\**` only if the task is skill maintenance.
- `.tasks\<TASK-ID>\reports\**` for reports.
- `.tasks\<TASK-ID>\status.md` and `qa-checklist.md` if the task packet allows status updates.

Forbidden files:

- `STT_auto_paste.py`
- `app\**`
- `tests\**` unless explicitly scoped
- `corrections\**`
- Global skill folders
- Runtime screenshot PNGs in git, unless owner explicitly approves

Required reporting:

- Changed files
- Commands run
- Exit codes
- Captured states and missing states
- Scope compliance
- Forbidden files touched: yes/no
- Live/manual runtime test performed: yes/no
- Ready for owner review: yes/no
