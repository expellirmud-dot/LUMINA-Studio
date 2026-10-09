# Changelog

## 2026-06-15 — Improved safety and packaging

- Tightened `SKILL.md` around authority order, execution modes, and output requirements.
- Split detailed safety/state guidance into references to reduce loaded context.
- Added a skill-specific README and worker prompt template.
- Rewrote report templates with evidence-grade fields and missing-state handling.
- Hardened scripts with clearer interactive-session failure messages, safer fallback behavior, and no `.pyc` artifacts.
- Preserved the core project rule: controlled harness first, manual live preparation only as fallback, screenshots not committed by default.
