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
*   **Compatibility summaries (not policy owners)**: `docs/BRAND.md` and `docs/DESIGN.md` remain for legacy tooling, including Impeccable. Locked Tier 1 documents take precedence.

---

## 2. Read-First Order

All AI workers must read files in this exact sequence before executing any task:

1.  **Task Packet**: Read `.tasks/<TASK-ID>/task.md` and `plan.md` to understand the target work and allowed boundaries.
2.  **Meta-Rules**: Read `PROJECT_RULES.md`, `AGENTS.md`, and `docs/CONTEXT_INDEX.md` to confirm phase rules and priority levels.
3.  **Active Progress**: Read `AI_HANDOFF.md` to align on the current project milestones and deployments.
4.  **Brand Lockups**: Read `docs/LUMINA_V2_CONSTITUTION.md`, `docs/LUMINA_VISUAL_LANGUAGE.md`, and `docs/HOME_PAGE_BLUEPRINT.md`.
5.  **Local Task Skills**: Read files under `.tasks/<TASK-ID>/parts/` or relevant local folders under `.agents/skills/` (e.g. `.agents/skills/LUMINA_STARTUP/SKILL.md`).

---

## 3. Folder Roles

The folders in the project have distinct and non-overlapping roles:

*   **`.tasks/`**: The project-local task packet system. Tracks planning, implementation parts, progress logs, and validation checklists for the active work slice.
*   **`docs/`**: Permanent brand, visual design, layout blueprint, decisions, and context documentation.
*   **`.agents/skills/`**: The single physical **source of truth** for all project-local agent skills.
    *   *Web Review Runtime Skills*: `computer-use-runtime-bridge` and `windows-ui-review-runtime` live here and remain opt-in for runtime/UI review tasks.
    *   *Thai Communication Skill*: `thai-language-and-ux-writing` lives here and should be activated when Thai intent, Thai-facing copy, or Thai UX writing materially affects the task.
*   **`.ai/`**: Legacy task brief and phase gate folders. Deprecated in favor of `.tasks/` for active task packets.
*   **`.gemini/`, `.opencode/`, `.agent/`**: Tool-specific configuration/adapters only. They must not contain duplicate project skill trees.
*   **`.cursor/`**: Editor settings and workspace-specific AI guidelines (`.cursor/rules/`).
*   **`reports/`**: Logs of build checklists, visual QA inspections, and previous implementation summaries. Historical evidence only.
*   **ChatGPT Project Instruction handoff (Owner-only UI)**: `D:\project instructure\lumina.txt` is a local editable draft (not synchronized or authoritative UI state). `D:\project instructure\ChatGPT - L.U.M.I.N.A.  Studio.lnk` launches the Owner's Chrome Web App. Nexus can review/update the local draft when instructed, check the 8,000-character limit, and present the exact change; only Owner saves changes in ChatGPT Project settings. Do not infer that shortcut execution changes settings.
*   **External LUMINA worktrees**: `D:\lumina-studio_worktrees\` contains isolated temporary Git worktrees only when separate candidate validation/integration genuinely requires one. Retire each with `git worktree remove` only after verified merge, clean worktree, and preservation of unique data.
*   **External LUMINA recovery backups**: `D:\project_backups\lumina-studio\` contains pre-change recovery snapshots. Keep outside the repo for recovery; audit retention before removal. Do not scatter temporary LUMINA work folders or backups under `D:\tools\`, which is reserved for reusable tools.
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
| **Tier 2** | Project Skills | `.agents/skills/` directory (single project-local source of truth) |
| **Tier 3** | App-Specific Configs | `src/config/`, `.gemini/`, `.opencode/`, `.agent/` configuration only |
| **Tier 4** | Reports, History & Archive | `reports/`, `repo_memory/`, and legacy `.ai/` files |

---

## 5. Conflict Resolution Rules

If two files or instruction folders disagree:
1.  **Tier Priority Wins**: The file in the higher priority tier (closer to Tier 0) always overrides the file in the lower tier.
2.  **Intra-Tier Resolution**:
    *   If `PROJECT_RULES.md` conflicts with `docs/CONTEXT_INDEX.md`, `PROJECT_RULES.md` wins.
    *   If `docs/LUMINA_V2_CONSTITUTION.md` conflicts with `docs/HOME_PAGE_BLUEPRINT.md`, the Constitution wins.
3.  **Skill Path Rule**: Project-local skills are valid only from `.agents/skills/`. If an old mirror/archive disagrees, `.agents/skills/` wins.

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
