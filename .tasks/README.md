# AI Task Packet System

This project uses a file-based task packet system located under the `.tasks/` directory. All task execution, planning, checkpoints, and reports are managed natively in the repository through markdown documents.

## Roles and Responsibilities

*   **Controller / Planner / Decision**: ChatGPT Web (or the user-facing AI architect) directs the high-level plan, approves task completions, and signs off on gate decisions.
*   **Main Executor (Worker)**: The IDE Worker (current agent) executes the implementation steps, edits code, and runs validation commands.
*   **Sub-workers / Helpers / Verifiers**: Terminal tools and specific command-line helpers.
    *   *Preference*: Gemini CLI / OpenCode CLI should be preferred before spinning up IDE sub-agents when tasks can be completed through files and standard terminal commands.

## Task Lifecycle Rules

1.  **Strict Boundaries**: Each task has a dedicated folder under `.tasks/<TASK-ID>/`.
2.  **Part Reporting**: The Worker must document progress and report after completing each task part (defined under `parts/`).
3.  **Owner Review Gates**: The Worker must pause and request approval when entering review gates (Phase A, Phase B, Phase C exit gates).
4.  **No Dashboard**: An external dashboard is not part of the core workflow. Everything is file-driven and stored in Git.
5.  **Default Commit Policy**: Commits are forbidden by default. The default policy is `commit_allowed=false` unless explicitly overridden in the active task brief.

## Terminal & CLI Policy

### Allowed Commands
*   PowerShell (execution and script runs)
*   Git status / Git diff / Git log
*   `npm run build`
*   `npm run lint`
*   Gemini CLI / OpenCode CLI
*   Project-approved validation scripts

### Forbidden Actions
*   Do **NOT** run destructive commands without explicit user/owner approval.
*   Do **NOT** delete unrelated files or folders.
*   Do **NOT** perform auto-deployments.
*   Do **NOT** bypass the final review gate.
*   Do **NOT** run Git commit or Git push unless `commit_allowed=true`.
