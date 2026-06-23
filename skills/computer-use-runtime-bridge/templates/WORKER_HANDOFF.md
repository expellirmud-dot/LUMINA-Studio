# Worker Handoff: Computer Use Runtime Bridge

## READ-FIRST / ACTIVE PROJECT CONTEXT

```text
READ-FIRST / ACTIVE PROJECT CONTEXT
Read-first-lumina
Active project: D:\lumina-studio
Active Serena CodeGraph: D:\lumina-studio
Computer Use runtime: D:\ai-tools\computer-use-preview
Computer Use bridge skill: D:\lumina-studio\skills\computer-use-runtime-bridge
Default working model: gemini-3-flash-preview
```

## Goal

Use the existing local `computer-use-preview` runtime through its own virtual environment.

## Hard constraints

- Do not move the runtime repo into `.ai\skills`.
- Do not expose `.env` or API keys.
- Do not modify STT runtime behavior unless explicitly scoped.
- Prefer `gemini-3-flash-preview` for local tests.
- Use `gemini-2.5-computer-use-preview-10-2025` only when quota/billing is available.
- Do not bypass CAPTCHA.
- Do not automate final submission on high-risk systems.
- Record commands and results in the task report.

## Default command

```powershell
Set-Location D:\ai-tools\computer-use-preview

.\.venv\Scripts\python.exe main.py --query "Open example.com and tell me what heading is shown on the page" --env playwright --model gemini-3-flash-preview
```

## Expected result

```text
The heading shown on example.com is "Example Domain".
```

## References to read only if needed

```text
references\COMMANDS_WINDOWS.md
references\MODEL_MATRIX.md
references\ERROR_DIAGNOSTICS.md
references\SAFETY_RULES.md
references\INTEGRATION_PATTERNS.md
references\GIT_HYGIENE.md
```

## Report required

Use:

```text
templates\STATUS_REPORT.md
```