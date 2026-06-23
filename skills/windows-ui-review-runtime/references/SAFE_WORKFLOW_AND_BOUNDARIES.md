# Safe Workflow and Execution Boundaries

This document defines the strict operational boundaries and execution rules for the `windows-ui-review-runtime` skill when reviewing the STT desktop application.

## 1. Controlled Harness & Manual Workflows
The primary and required workflow for known full-screen STT layout audit states is the deterministic controlled harness (`capture_controlled_ui_states.py`), run in a foreground interactive terminal. This avoids mouse automation and live exploratory UI navigation.

**Notepad Canvas (Clean Background):**
If evaluating contrast against a white canvas is required:
* Pass the `--open-notepad` flag to `capture_controlled_ui_states.py`.
* The script will open and maximize Notepad automatically before capturing.
* Use `--notepad-wait-seconds N` if Notepad needs more startup time.
* Manual preparation of Notepad is fallback/context only.
* Do not put private text in Notepad, as the entire screen is captured.

**Output Path:**
* Store generated PNGs under `.runtime-captures\windows-ui-review\<TASK-ID>\`.
* Treat PNG screenshots as runtime artifacts.
* Do not commit screenshots by default.
* Task packets should contain reports and references to evidence paths, not raw screenshots, unless the owner explicitly approves.

## 2. Safe Capture/Review Boundary
* Screenshot/window capture is allowed only through the controlled harness, owner-prepared state, or explicit scoped permission.
* No exploratory live UI automation.
* No auto-clicking Settings, Commands, Help, Back, Close, Exit, or app controls.
* No launching STT app automatically unless task explicitly permits it.
* No runtime edits.

## 3. Runtime Bridge Status
* `--open-stt-ui-all` and full live UI preparation remain unproven/blocked.
* Controlled deterministic harness remains primary for known UI states.
* Manual live UI preparation is fallback/context only until a separate approved live action bridge exists.

## 4. CLI Worker Policy Note
* OpenCode works in owner foreground PowerShell / real terminal.
* `agy` is the verified local Antigravity CLI entrypoint on this machine.
* Anti Gravity background invocation of OpenCode is blocked/not reliable.
* Gemini CLI is installed locally, but current individual/free-tier worker use on this machine must not be assumed without re-verifying auth/tier.
* Do not rely on Anti Gravity background task for `opencode run`.
