# Capability Test

## Part A: Skill Integrity Check
- `skills/computer-use-runtime-bridge/SKILL.md` exists: **YES**
- references folder exists: **YES**
- templates folder exists: **YES**
- no active default instruction points to `D:\stt_typing`: **YES**
- active project path is `D:\lumina-studio`: **YES**
- skill role says it is primary LUMINA runtime review bridge: **YES**

## Part B: Safe Runtime Readiness Check
- **NPM Scripts Available:** `dev`, `build`, `start`, `lint`
- **Exist Check:**
  - `dev` (next dev) exists: **YES**
  - `build` (next build) exists: **YES**
  - `lint` (eslint) exists: **YES**
- **Documentation Readiness:** The documentation provides clear guidelines, commands, and expectations for using the bridge in future runtime/browser reviews.
- **Future Live Review Command:**
  To start the local runtime bridge and issue a command:
  ```powershell
  Set-Location D:\ai-tools\computer-use-preview
  .\.venv\Scripts\python.exe main.py --query "Open http://localhost:3000 and visually review the homepage" --env playwright --model gemini-3-flash-preview
  ```
