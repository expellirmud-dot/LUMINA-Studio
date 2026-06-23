# TASK-021

## Objective
Add a reusable Playwright-based evidence capture script for LUMINA desktop and mobile screenshots/slow-scroll videos.

## Requirements
- Target URL default: `https://lumina-studio-iota-ten.vercel.app`
- Allow override via `LUMINA_CAPTURE_URL`
- Task folder default: `TASK-020B`
- Allow override via `LUMINA_CAPTURE_TASK`
- Store output only under `.runtime-captures/lumina/<TASK-ID>/`
- Capture desktop (1440x900) & mobile (390x844): above-fold, full-page, and slow-scroll `.webm`
- Use slow scroll and waits so images/animations load properly
- Do not commit `.runtime-captures/`
