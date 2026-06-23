# Windows Commands

Use PowerShell on Windows.

Do not use Linux commands such as:

```bash
source .venv/bin/activate
```

## Fresh install

```powershell
Set-Location D:\lumina-studio

git clone https://github.com/google-gemini/computer-use-preview.git

Set-Location .\computer-use-preview

py -m venv .venv

.\.venv\Scripts\python.exe -m pip install --upgrade pip

.\.venv\Scripts\python.exe -m pip install -r requirements.txt

.\.venv\Scripts\python.exe -m playwright install chromium

Copy-Item .env.example .env -ErrorAction SilentlyContinue

notepad .env
```

## Repair existing install

If the folder already exists, do not clone again.

```powershell
Set-Location D:\ai-tools\computer-use-preview

git status

.\.venv\Scripts\python.exe -m pip install -r requirements.txt

.\.venv\Scripts\python.exe -m playwright install chromium
```

## Configure `.env`

Open:

```powershell
Set-Location D:\ai-tools\computer-use-preview
notepad .env
```

For Gemini Developer API mode, keep:

```env
GEMINI_API_KEY=your_key_here
```

Do not paste the real key into chat, reports, task files, commits, screenshots, or logs.

Do not combine Gemini API key mode with Vertex AI mode.

If using Gemini API key mode, remove or comment:

```env
# USE_VERTEXAI=true
# VERTEXAI_PROJECT=your-project-id
# VERTEXAI_LOCATION=your-location
```

## Clear stale Vertex variables from the current PowerShell session

```powershell
Remove-Item Env:USE_VERTEXAI -ErrorAction SilentlyContinue
Remove-Item Env:VERTEXAI_PROJECT -ErrorAction SilentlyContinue
Remove-Item Env:VERTEXAI_LOCATION -ErrorAction SilentlyContinue
```

Check only Vertex variable names:

```powershell
Get-ChildItem Env:USE_VERTEXAI,Env:VERTEXAI_PROJECT,Env:VERTEXAI_LOCATION -ErrorAction SilentlyContinue
```

Do not print `GEMINI_API_KEY`.

## Health checks

```powershell
Set-Location D:\ai-tools\computer-use-preview

.\.venv\Scripts\python.exe --version

.\.venv\Scripts\python.exe -m pip show playwright google-genai python-dotenv browserbase

.\.venv\Scripts\python.exe -m playwright install chromium
```

## Recommended smoke test

```powershell
Set-Location D:\ai-tools\computer-use-preview

.\.venv\Scripts\python.exe main.py --query "Open example.com and tell me what heading is shown on the page" --env playwright --model gemini-3-flash-preview
```

Expected final answer:

```text
The heading shown on example.com is "Example Domain".
```

## Start from an initial URL

```powershell
Set-Location D:\ai-tools\computer-use-preview

.\.venv\Scripts\python.exe main.py --query "Describe the visible UI layout of this website" --env playwright --model gemini-3-flash-preview --initial_url "https://example.com"
```

## Mouse-highlight debugging

```powershell
Set-Location D:\ai-tools\computer-use-preview

.\.venv\Scripts\python.exe main.py --query "Open example.com and identify the main heading" --env playwright --model gemini-3-flash-preview --highlight_mouse
```

## Original Computer Use Preview model

Only use when quota/billing is available:

```powershell
Set-Location D:\ai-tools\computer-use-preview

.\.venv\Scripts\python.exe main.py --query "Open example.com and tell me what heading is shown on the page" --env playwright --model gemini-2.5-computer-use-preview-10-2025
```

## Browserbase mode

Requires:

```env
GEMINI_API_KEY=your_google_key
BROWSERBASE_API_KEY=your_browserbase_key
BROWSERBASE_PROJECT_ID=your_browserbase_project_id
```

Run:

```powershell
Set-Location D:\ai-tools\computer-use-preview

.\.venv\Scripts\python.exe main.py --query "Open example.com and tell me what heading is shown on the page" --env browserbase --model gemini-3-flash-preview
```

Use Browserbase when local Playwright cannot capture or operate UI reliably, especially native dropdowns.

## Windows Shell Execution Policy

For validation and test commands, run inside the active terminal.

Do not run `powershell -Command` or `pwsh -Command` from inside an already-running PowerShell terminal.

Prefer direct commands in the active shell. For multi-line PowerShell logic, use:

```powershell
& {
  Set-Location D:\lumina-studio

  $status = git status --short
  if ([string]::IsNullOrWhiteSpace($status)) {
    Write-Host "GIT_STATUS: CLEAN"
  } else {
    Write-Host "GIT_STATUS: DIRTY"
    Write-Host $status
  }

  Write-Host "COMMAND_RESULT: SUCCESS"
}
```

Do not use these unless explicitly required by the task:

* `Start-Process`
* `cmd /c start`
* `powershell -Command`
* `pwsh -Command`
* `pythonw`
* detached shell/window launchers

Reason:

These commands may open a new console window or detached process. AI/worker tools may then misinterpret the original terminal as stalled or broken and may attempt unnecessary environment repairs.

If a command unexpectedly opens another console window, stop and report:

* command used
* which window opened
* whether the original terminal returned
* whether git status --short changed

Do not reinstall Python, recreate the venv, change shell settings, change execution policy, or repair the environment unless explicitly scoped and approved.