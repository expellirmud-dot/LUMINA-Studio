# LUMINA Project Context Index

This document establishes the official index of context files and directories for LUMINA Studio. It acts as the global map for all AI workers, resolving ambiguity regarding file authority, folders, and read order.

---

## 1. Project Source of Truth

The absolute source of truth is the local **filesystem**. If an external index, graph, or tool database (e.g. Serena or CodeGraph) disagrees with the filesystem, the filesystem wins. 

### Authoritative Files
*   **Code & Configuration**: `app/page.tsx`, `app/globals.css`, and configurations under `src/config/`.
*   **Task Management**: Active task packets located under `.tasks/<TASK-ID>/`.
*   **Rules & Governance**: `PROJECT_RULES.md`, `AGENTS.md`, `GEMINI.md`, `docs/LUMINA_MODEL_AND_WORKER_POLICY.md`, and this `docs/CONTEXT_INDEX.md`.
*   **Brand & Design Policies**: `docs/LUMINA_V2_CONSTITUTION.md`, `docs/LUMINA_VISUAL_LANGUAGE.md`, and `docs/HOME_PAGE_BLUEPRINT.md`.

---

## 2. Read-First Order

All AI workers must read files in this exact sequence before executing any task:

1.  **Task Packet**: Read `.tasks/<TASK-ID>/task.md` and `plan.md` to understand the target work and allowed boundaries.
2.  **Meta-Rules**: Read `PROJECT_RULES.md`, `AGENTS.md`, and `docs/CONTEXT_INDEX.md` to confirm phase rules and priority levels.
3.  **Active Progress**: Read `AI_HANDOFF.md` to align on the current project milestones and deployments.
4.  **Brand Lockups**: Read `docs/LUMINA_V2_CONSTITUTION.md`, `docs/LUMINA_VISUAL_LANGUAGE.md`, and `docs/HOME_PAGE_BLUEPRINT.md`.
5.  **Local Task Skills**: Read files under `.tasks/<TASK-ID>/parts/` or relevant local folders under `skills/` (e.g. `LUMINA_STARTUP/SKILL.md`).

---

## 3. Folder Roles

The folders in the project have distinct and non-overlapping roles:

*   **`.tasks/`**: The project-local task packet system. Tracks planning, implementation parts, progress logs, and validation checklists for the active work slice.
*   **`docs/`**: Permanent brand, visual design, layout blueprint, decisions, and context documentation.
*   **`skills/`**: Root project skill directory. This is the **source of truth** for all agent execution rules.
    *   *Web Review Runtime Skills*: `computer-use-runtime-bridge` (available for browser/runtime/computer-use bridge workflows) and `windows-ui-review-runtime` (available for Windows UI / browser visual review workflows) are under `skills/`. They must be used only when a task explicitly requests website/runtime/UI review, and must not become mandatory for every task.
*   **`.ai/`**: Legacy task brief and phase gate folders. Deprecated in favor of `.tasks/` for active task packets.
*   **`.gemini/skills/`, `.opencode/skills/`, `.agent/skills/`**: App-specific **mirrors and adapters** only. They must sync from `skills/`.
*   **`.cursor/`**: Editor settings and workspace-specific AI guidelines (`.cursor/rules/`).
*   **`reports/`**: Logs of build checklists, visual QA inspections, and previous implementation summaries. Historical evidence only.
*   **`repo_memory/`**: High-level repository state memory files. Historical evidence only.

---

## 3.5 Out of Scope Workflows

To prevent mission creep, the following are explicitly declared out of scope for LUMINA:
*   **STT Correction**: STT correction belongs strictly to `D:\stt_typing`, not LUMINA.
*   **Dashboard**: Dashboard is not part of the core workflow for this premium landing page phase.

---

## 4. Source Priority Tiers

To resolve conflicts between context files, all documentation is categorized into five priority tiers:

| Tier | Name | Target Files / Directories |
| :--- | :--- | :--- |
| **Tier 0** | Mandatory Project Truth | `PROJECT_RULES.md`, `AGENTS.md`, `GEMINI.md`, `docs/CONTEXT_INDEX.md`, `docs/LUMINA_MODEL_AND_WORKER_POLICY.md` |
| **Tier 1** | Brand & Product Lock | `docs/LUMINA_V2_CONSTITUTION.md`, `docs/LUMINA_VISUAL_LANGUAGE.md`, `docs/HOME_PAGE_BLUEPRINT.md` |
| **Tier 2** | Project Skills | `skills/` directory (the local source of truth for agent execution rules) |
| **Tier 3** | App-Specific Configs | `src/config/`, `.gemini/`, `.opencode/`, `.agent/` |
| **Tier 4** | Reports, History & Archive | `reports/`, `repo_memory/`, and legacy `.ai/` files |

---

## 5. Conflict Resolution Rules

If two files or instruction folders disagree:
1.  **Tier Priority Wins**: The file in the higher priority tier (closer to Tier 0) always overrides the file in the lower tier.
2.  **Intra-Tier Resolution**:
    *   If `PROJECT_RULES.md` conflicts with `docs/CONTEXT_INDEX.md`, `PROJECT_RULES.md` wins.
    *   If `docs/LUMINA_V2_CONSTITUTION.md` conflicts with `docs/HOME_PAGE_BLUEPRINT.md`, the Constitution wins.
3.  **Path Precedence**: Root-level files and folders override nested app-specific mirrors. For example, `skills/LUMINA_STARTUP/` overrides `.gemini/skills/LUMINA_STARTUP/` and `.agent/skills/LUMINA_STARTUP/`.

---

## 6. Archive Rules

*   Old task reports (under `reports/` or legacy `.ai/tasks/`) and files in `repo_memory/` represent historical evidence and project logs only.
*   They **must not** override current project rules, handoffs, configurations, or brand documents.
*   Legacy files should only be used to understand context, not to dictate active implementation boundaries, unless explicitly referenced by the current task brief.

---

## 7. Per-Task Guidance

*   Every AI worker must be assigned a Task ID.
*   Execution must start from `.tasks/<TASK-ID>/task.md`.
*   All planning details must be written to `.tasks/<TASK-ID>/plan.md`.
*   Progress reports for individual subtask steps must be written to `.tasks/<TASK-ID>/parts/`.
*   The final candidate verification report must be written to `.tasks/<TASK-ID>/reports/final-report.md`.
