# TASK-038 — Editorial Photo Focus (21st.dev reference)

STATUS=IN_PROGRESS
DATE=2026-10-09
OWNER_INTENT=Explore and selectively use 21st.dev Community Components/MCP to improve LUMINA
AUTHORITY=Owner standing delegated development/release workflow

## Goal
Add a restrained, accessible image-focus view for the three Selected Stories photographs, inspired by the Zoomable Image concept on 21st.dev. Preserve the Human Documentary / Quiet Premium style and avoid any new dependency.

## Source and constraints
- https://21st.dev/community/bookmarks/components — public view did not expose account-specific saved items
- https://21st.dev/mcp — catalog/CLI/MCP reference, not mandatory installation
- https://21st.dev/fuma-nama/zoomable-image — concept inspiration only; original implementation is project-owned
- Hero FROZEN; no page section reordering, no new gallery system, no WebGL, no autoplay, no new dependency
- Preserve existing Selected Stories layout, Mini Album, Experience, and /fastwork

## Allowed paths
- app/page.tsx
- app/globals.css
- src/config/content.ts
- src/components/StoryImageFocus.tsx
- .tasks/TASK-038/**
- AI_HANDOFF.md and reports/implementation_report.md on success

## Validation
- React semantics: focusable image trigger, native dialog, Escape dismiss, focus return, accessible labels, backdrop dismiss
- Browser QA 1440x900 and 390x844; inspect images, overflow, JavaScript errors, reduced-motion behavior
- npm ci, lint, build, TypeScript, production audit, diff check
- Protected files unchanged; compare to exact Git HEAD; release only if all gates pass
