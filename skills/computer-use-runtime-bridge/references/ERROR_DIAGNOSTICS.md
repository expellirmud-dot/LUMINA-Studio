# Error Diagnostics

Use this file before reinstalling anything.

## 1. Destination path already exists

Pattern:

```text
fatal: destination path 'computer-use-preview' already exists and is not an empty directory.
```

Meaning:

The repository already exists.

Action:

```powershell
Set-Location D:\ai-tools\computer-use-preview
git status
```

Do not clone again unless the user explicitly wants to delete and reinstall.

## 2. Playwright Chromium / headless shell missing

Pattern:

```text
Executable doesn't exist at ... ms-playwright\chromium_headless_shell-...\chrome-win\headless_shell.exe
Looks like Playwright was just installed or updated.
Please run: playwright install
```

Fix:

```powershell
Set-Location D:\ai-tools\computer-use-preview

.\.venv\Scripts\python.exe -m playwright install chromium
```

Do not recreate the virtual environment for this.

## 3. Chrome already installed

Pattern:

```text
ATTENTION: "chrome" is already installed on the system!
```

Meaning:

Chrome channel already exists. This is usually not fatal.

If the runtime needs Playwright’s Chromium/headless shell, run:

```powershell
.\.venv\Scripts\python.exe -m playwright install chromium
```

Do not use `--force chrome` unless Chrome channel itself is broken.

## 4. API key and Vertex AI conflict

Pattern:

```text
ValueError: Project/location and API key are mutually exclusive in the client initializer.
```

Meaning:

Both Gemini Developer API key mode and Vertex AI project/location mode are set.

Fix for Gemini Developer API mode:

```powershell
Set-Location D:\ai-tools\computer-use-preview

Remove-Item Env:USE_VERTEXAI -ErrorAction SilentlyContinue
Remove-Item Env:VERTEXAI_PROJECT -ErrorAction SilentlyContinue
Remove-Item Env:VERTEXAI_LOCATION -ErrorAction SilentlyContinue

notepad .env
```

Keep only:

```env
GEMINI_API_KEY=your_key_here
```

Do not print the real key.

## 5. Quota error for original Computer Use Preview model

Pattern:

```text
429 RESOURCE_EXHAUSTED
generate_content_free_tier_requests, limit: 0, model: computer-use-preview
generate_content_free_tier_input_token_count, limit: 0, model: computer-use-preview
```

Meaning:

The current Google API key/project has no free-tier quota for the original Computer Use Preview model.

Action:

```powershell
Set-Location D:\ai-tools\computer-use-preview

.\.venv\Scripts\python.exe main.py --query "Open example.com and tell me what heading is shown on the page" --env playwright --model gemini-3-flash-preview
```

Do not reinstall the repo, dependencies, or Playwright for this error.

## 6. CAPTCHA / safety confirmation

Pattern:

```text
Safety service requires explicit confirmation!
I am about to interact with a CAPTCHA. Would you like me to proceed?
Do you wish to proceed? [Yes]/[No]
```

Default action:

```text
No
```

Do not bypass CAPTCHA.

Avoid Google search as a first smoke test. Use `https://example.com` or the user’s own test site.

## 7. AFC warning

Pattern:

```text
Tools at indices [1] are not compatible with automatic function calling (AFC). AFC is disabled.
```

Current interpretation:

This is usually a warning if function calls still appear, such as:

```text
open_web_browser
navigate
type_text_at
click_at
```

Continue if the agent produces function calls and final output.

Treat it as a failure only if there are no function calls, no browser action, or no final result.

## 8. Native dropdown problems

Some OS-native `<select>` dropdowns may not appear correctly in Playwright screenshots.

Preferred workaround:

```text
Use Browserbase mode if available.
```

Alternative:

A scoped custom select renderer can be injected, but do not modify runtime code unless the task explicitly scopes that change.

## 9. Diagnostic order

Follow this order:

```text
1. Confirm runtime path exists.
2. Confirm venv Python exists.
3. Confirm .env exists without printing secrets.
4. Clear conflicting Vertex variables if using GEMINI_API_KEY.
5. Install Playwright Chromium.
6. Run gemini-3-flash-preview smoke test against example.com.
7. Only then consider source-code changes.
```