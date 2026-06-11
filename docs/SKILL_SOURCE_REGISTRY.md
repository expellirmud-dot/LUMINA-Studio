# LUMINA Skill Source Registry

This registry catalogues all project-local and app-specific agent skills detected in `D:\lumina-studio`. It defines the authoritative source of truth for each skill and flags duplicated or corrupted folders for future synchronization and clean-up.

---

## 1. Skill Folder Status Overview

We audited five folders in the workspace:

*   **`skills/`**: 45 skills (Clean, flat layout. Primary project source of truth).
*   **`.agent/skills/`**: 45 skills (Clean, flat layout. Mirror of primary skills).
*   **`.opencode/skills/`**: 45 skills (Clean, flat layout. Mirror of primary skills).
*   **`.gemini/skills/`**: 44 skills + 1 corrupted subfolder `skills/` containing nested structures.
    *   *Nesting Bug*: `.gemini/skills/skills/` contains 17 nested skills, which in turn holds a `.gemini/skills/skills/skills/` directory with 16 nested folders. This represents a corrupted copy-paste recursive loop.
*   **`.ai/skills/`**: Does not exist (0 folders).

---

## 2. Registry Directory Map

The table below maps all 45 primary skills found in the project root `skills/` and details their active status across all mirror locations.

### Primary Rule
Root `skills/` is **always** the primary source of truth. All others are mirrors or app adapters.

| Skill Name | Path | Duplicated In | Status / Action |
| :--- | :--- | :--- | :--- |
| `LUMINA_ART_DIRECTION` | `skills/LUMINA_ART_DIRECTION/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |
| `LUMINA_BOOTSTRAP` | `skills/LUMINA_BOOTSTRAP/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |
| `LUMINA_CONFIG_CHANGE` | `skills/LUMINA_CONFIG_CHANGE/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |
| `LUMINA_DEPLOYMENT` | `skills/LUMINA_DEPLOYMENT/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |
| `LUMINA_Frontend-Visual-Design` | `skills/LUMINA_Frontend-Visual-Design/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |
| `LUMINA_PHOTO_SELECTION` | `skills/LUMINA_PHOTO_SELECTION/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |
| `LUMINA_REPORTING` | `skills/LUMINA_REPORTING/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |
| `LUMINA_REVIEW_CHECKLIST` | `skills/LUMINA_REVIEW_CHECKLIST/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |
| `LUMINA_STARTUP` | `skills/LUMINA_STARTUP/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |
| `LUMINA_VISUAL_REVIEW` | `skills/LUMINA_VISUAL_REVIEW/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |
| `agent-browser` | `skills/agent-browser/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |
| `agent-run-governance` | `skills/agent-run-governance/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |
| `canvas-design` | `skills/canvas-design/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |
| `certification-governance` | `skills/certification-governance/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |
| `code-analysis-ocumentation-agent` | `skills/code-analysis-ocumentation-agent/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |
| `docx` | `skills/docx/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |
| `entra-agent-id` | `skills/entra-agent-id/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |
| `entra-app-registration` | `skills/entra-app-registration/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |
| `escalation-governance` | `skills/escalation-governance/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |
| `find-skills` | `skills/find-skills/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |
| `frontend-design` | `skills/frontend-design/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |
| `frontend-react-governance` | `skills/frontend-react-governance/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |
| `frontend-visual-design` | `skills/frontend-visual-design/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |
| `governance-platform-domain` | `skills/governance-platform-domain/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |
| `impeccable` | `skills/impeccable/` | `.agent/`, `.opencode/` | `KEEP_AS_SOURCE` / **Missing in `.gemini/`** |
| `impeccable-project-workflow` | `skills/impeccable-project-workflow/` | `.agent/`, `.opencode/` | `KEEP_AS_SOURCE` / **Missing in `.gemini/`** |
| `implementation-governance` | `skills/implementation-governance/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |
| `interaction-design` | `skills/interaction-design/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |
| `mcp-connector-governance` | `skills/mcp-connector-governance/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |
| `microsoft-foundry` | `skills/microsoft-foundry/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |
| `pdf` | `skills/pdf/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |
| `pptx` | `skills/pptx/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |
| `react-polling-review` | `skills/react-polling-review/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |
| `read-first-governance` | `skills/read-first-governance/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |
| `repo-cleanliness-governance` | `skills/repo-cleanliness-governance/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |
| `responsive-design` | `skills/responsive-design/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |
| `review-gate-governance` | `skills/review-gate-governance/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |
| `runtime-console-domain` | `skills/runtime-console-domain/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |
| `serena-repo-intelligence` | `skills/serena-repo-intelligence/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |
| `skill-creator` | `skills/skill-creator/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |
| `tailwind-design-system` | `skills/tailwind-design-system/` | `.agent/`, `.opencode/` | `KEEP_AS_SOURCE` / **Missing in `.gemini/`** |
| `task-state-governance` | `skills/task-state-governance/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |
| `web-artifacts-builder` | `skills/web-artifacts-builder/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |
| `webapp-testing` | `skills/webapp-testing/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |
| `xlsx` | `skills/xlsx/` | `.agent/`, `.gemini/`, `.opencode/` | `KEEP_AS_SOURCE` / Mirrors set to `MIRROR_ONLY` |

---

## 3. Nesting Duplication and Corrupted Directory Warning

> [!CAUTION]
> The path `.gemini/skills/skills/` contains a nested tree that is likely a result of an incorrect sync copy operation:
> *   Folder `.gemini/skills/skills/`: **ARCHIVE_CANDIDATE** (Contains 17 subfolders of duplicate code).
> *   Folder `.gemini/skills/skills/skills/`: **ARCHIVE_CANDIDATE** (Contains 16 subfolders of duplicate code).
> 
> **Action Required**: Do not edit these directories. In the next task (Sync Execution), these nested paths should be safely deleted after user review.
