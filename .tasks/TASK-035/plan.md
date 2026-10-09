# TASK-035 Plan

1. Record baseline package versions, production audit, Git state, CodeGraph state.
2. Upgrade exactly next and eslint-config-next to 16.4.0 with npm so package-lock remains authoritative.
3. Inspect dependency diff before any further action.
4. Run production npm audit and classify remaining advisories.
5. Run lint, build, and git diff --check.
6. Start a local production server and run bounded Playwright/Puppeteer smoke checks at desktop/mobile widths for / and /fastwork.
7. Write final security-gate report and update rolling handoff/implementation report.
8. Leave changes uncommitted unless Owner explicitly authorizes commit/push.
