# TASK-033 — .agent Skill Cleanup and Model Update

DOCUMENT_ROLE=DEVELOPMENT_TASK_PACKET
STATUS=IN_PROGRESS
OWNER_AUTHORIZATION=APPROVED_IN_CHAT_2026-10-08
RISK_LEVEL=L2_REPO_MAINTENANCE
COMMIT_ALLOWED=true
PUSH_ALLOWED=false
DEPLOY_ALLOWED=false

## Goal

Clean D:\lumina-studio\.agent\skills without changing LUMINA website behavior.

Owner requests:
- use gemini-3.5-flash-lite instead of gemini-3-flash-preview in computer-use-runtime-bridge
- keep/add gridgeist
- remove duplicated same-name nested skill folders such as frontend-react-governance\frontend-react-governance
- remove some clearly irrelevant skills from the .agent runtime set

## Source-of-truth rule

Root D:\lumina-studio\skills remains primary. Changes to shared skill content must be made there first, then mirrored to .agent.

## Approved destructive scope

A backup of .agent\skills must be created first.

Delete only:
1. verified same-name nested duplicate directories under .agent\skills where top-level and nested SKILL.md are identical
2. clearly non-LUMINA runtime skills from .agent only:
   - docx
   - pdf
   - pptx
   - xlsx
   - entra-agent-id
   - entra-app-registration

Do not delete root source copies of these six skills.

## Other actions

- Promote gridgeist from .agent-only into root skills/gridgeist so it has an authoritative source.
- Update computer-use-runtime-bridge source references to gemini-3.5-flash-lite, then mirror it to .agent.
- Do not touch TASK-032 website prototype files.
