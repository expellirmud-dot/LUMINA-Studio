---
name: computer-use-runtime-bridge
description: Use this skill when the user or worker needs browser control, UI automation, Playwright-based computer use, Browserbase execution, website smoke testing, web form flow testing, or diagnostics for the local browser-control runtime installed at D:\ai-tools\computer-use-preview. This is a model-neutral runtime bridge for agents/workers; it does not make unsupported models into native Computer Use models.
---

# Computer Use Runtime Bridge

## Role

This is a wrapper skill for model-neutral browser-control work.

It teaches agents and workers how to use the external runtime installed at:

`D:\ai-tools\computer-use-preview`

This skill folder is not the runtime repository. It is the operating guide that tells other models how to call, test, diagnose, and safely integrate that runtime.

## READ-FIRST / ACTIVE PROJECT CONTEXT

Always preserve this context in task prompts and worker handoffs:

```text
READ-FIRST / ACTIVE PROJECT CONTEXT
Read-first-lumina
Active project: D:\lumina-studio
Active Serena CodeGraph: D:\lumina-studio
Computer Use runtime: D:\ai-tools\computer-use-preview
Computer Use bridge skill: D:\lumina-studio\skills\computer-use-runtime-bridge
Default working model: gemini-3-flash-preview
```

Do not modify LUMINA website behavior unless browser-control integration is explicitly scoped.

## When to use this skill

Use this skill for:

- Browser automation experiments
- Playwright-based browser control
- Gemini Computer Use / browser-agent testing
- Website smoke tests
- Visual webpage inspection
- Web form flow testing
- Computer-use runtime setup or repair
- Quota, `.env`, Playwright, Browserbase, or model diagnostics
- Writing worker handoff instructions for browser-control tasks

Do not use this skill for normal website visual polish, portfolio curation, page building, or unrelated LUMINA behavior unless explicitly scoped.

## Current local facts

Runtime path:

`D:\ai-tools\computer-use-preview`

Runtime Python:

`D:\ai-tools\computer-use-preview\.venv\Scripts\python.exe`

Runtime CLI:

`D:\ai-tools\computer-use-preview\main.py`

Verified working model on this machine:

`gemini-3-flash-preview`

Original repo default model that is blocked on the current free-tier key/project:

`gemini-2.5-computer-use-preview-10-2025`

Verified smoke test result:

```text
Command:
.\.venv\Scripts\python.exe main.py --query "Open example.com and tell me what heading is shown on the page" --env playwright --model gemini-3-flash-preview

Result:
The heading shown on example.com is "Example Domain".
```

## Default action

For local tests, prefer:

```powershell
Set-Location D:\ai-tools\computer-use-preview

.\.venv\Scripts\python.exe main.py --query "Open example.com and tell me what heading is shown on the page" --env playwright --model gemini-3-flash-preview
```

Avoid Google search as a first test because it can trigger CAPTCHA.

## Progressive disclosure / Level 3 references

Load only the reference file needed for the current task.

- For repository purpose, runtime layout, and conceptual overview: `references\RUNTIME_OVERVIEW.md`
- For Windows commands and smoke tests: `references\COMMANDS_WINDOWS.md`
- For model choices and quota behavior: `references\MODEL_MATRIX.md`
- For error diagnosis: `references\ERROR_DIAGNOSTICS.md`
- For safety boundaries: `references\SAFETY_RULES.md`
- For Python subprocess integration: `references\INTEGRATION_PATTERNS.md`
- For Git and secret hygiene: `references\GIT_HYGIENE.md`
- For delegation: `templates\WORKER_HANDOFF.md`
- For reporting: `templates\STATUS_REPORT.md`
- For a reusable local smoke test: `scripts\smoke_test_computer_use.ps1`

## Hard rules

- Do not move the runtime repo into `.ai\skills`.
- Do not store API keys in `SKILL.md` or task files.
- Do not print or commit `.env`.
- Do not reinstall everything for quota errors.
- Do not bypass CAPTCHA.
- Do not automate final submission on high-risk systems.
- For municipal/e-LAAS/financial/government workflows, prepare instructions or data only; the user must perform final submission manually.