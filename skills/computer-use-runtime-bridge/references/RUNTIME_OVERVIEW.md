# Runtime Overview

## Purpose

The local `computer-use-preview` runtime is a browser-control reference implementation. It accepts a natural-language query, opens or controls a browser, observes page state, asks a Gemini model to decide browser actions, and executes those actions through an environment such as Playwright or Browserbase.

This bridge skill is model-neutral. It does not mean every model has native computer-use ability. It means workers can consistently locate and call the installed runtime.

## Installed runtime

```text
D:\ai-tools\computer-use-preview
```

## Skill wrapper

```text
D:\lumina-studio\skills\computer-use-runtime-bridge
```

## Runtime entry points

```text
D:\ai-tools\computer-use-preview\.venv\Scripts\python.exe
D:\ai-tools\computer-use-preview\main.py
```

## Supported environments recorded from the repository

```text
playwright
browserbase
```

`playwright` runs a local browser.

`browserbase` runs through Browserbase and requires Browserbase credentials.

## Main CLI pattern

```powershell
.\.venv\Scripts\python.exe main.py --query "<natural-language browser task>" --env playwright --model gemini-3-flash-preview
```

## Important CLI arguments

```text
--query           Required. Natural-language task for the browser agent.
--env             Browser environment. Use playwright or browserbase.
--initial_url     Optional. Initial page loaded by the browser.
--highlight_mouse Optional. Visual debugging helper for Playwright.
--model           Optional. Gemini model name.
```

## Important environment variables

```text
GEMINI_API_KEY             Required for Gemini Developer API mode.
USE_VERTEXAI               Use only for Vertex AI mode.
VERTEXAI_PROJECT           Required only for Vertex AI mode.
VERTEXAI_LOCATION          Required only for Vertex AI mode.
BROWSERBASE_API_KEY        Required only for Browserbase mode.
BROWSERBASE_PROJECT_ID     Required only for Browserbase mode.
```

## Current verified local behavior

The local runtime has been verified with:

```text
Environment: playwright
Model: gemini-3-flash-preview
Test page: example.com
Final answer: The heading shown on example.com is "Example Domain".
```

The default repo model `gemini-2.5-computer-use-preview-10-2025` reached the API successfully but failed on the current key/project with a free-tier quota error where the model quota was `limit: 0`.

## Runtime pipeline

```text
PowerShell
→ local .venv Python
→ main.py
→ Playwright or Browserbase
→ Gemini model
→ browser function calls
→ browser observation
→ final answer
```

## Skill design rule

Keep `SKILL.md` short. Store detailed commands, diagnostics, safety policy, integration patterns, and report templates in Level 3 reference files.