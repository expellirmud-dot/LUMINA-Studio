---
name: lumina-config-change
description: Safe protocol for config-only visual changes in LUMINA Studio.
---

# LUMINA CONFIG CHANGE

Use this skill for changes limited to:

- src/config/site.ts
- src/config/images.ts
- src/config/typography.ts
- src/config/visual.ts

Rules:

- Prefer config changes over JSX edits.
- Do not change layout code unless config wiring is broken.
- Do not change images unless task explicitly says so.
- Do not add dependencies.
- Run lint and build after change.

Required validation:

- npm run lint
- npm run build
