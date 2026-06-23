# Integration Patterns

## Preferred integration style

Use subprocess isolation.

Do not import the runtime directly into STT core code unless explicitly scoped.

Keep browser-control runtime separate from STT typing runtime.

## Async Python subprocess wrapper

```python
import asyncio
import os
from pathlib import Path

COMPUTER_USE_DIR = Path(r"D:\ai-tools\computer-use-preview")
COMPUTER_USE_PYTHON = COMPUTER_USE_DIR / ".venv" / "Scripts" / "python.exe"

async def run_computer_use(
    query: str,
    *,
    model: str = "gemini-3-flash-preview",
    env_name: str = "playwright",
    initial_url: str | None = None,
) -> dict:
    if not COMPUTER_USE_DIR.exists():
        return {
            "status": "error",
            "message": f"Missing Computer Use runtime: {COMPUTER_USE_DIR}",
        }

    if not COMPUTER_USE_PYTHON.exists():
        return {
            "status": "error",
            "message": f"Missing Computer Use venv Python: {COMPUTER_USE_PYTHON}",
        }

    command = [
        str(COMPUTER_USE_PYTHON),
        "main.py",
        f"--query={query}",
        f"--env={env_name}",
        f"--model={model}",
    ]

    if initial_url:
        command.append(f"--initial_url={initial_url}")

    env = os.environ.copy()

    process = await asyncio.create_subprocess_exec(
        *command,
        cwd=str(COMPUTER_USE_DIR),
        env=env,
        stdout=asyncio.subprocess.PIPE,
        stderr=asyncio.subprocess.PIPE,
    )

    stdout, stderr = await process.communicate()

    return {
        "status": "success" if process.returncode == 0 else "error",
        "returncode": process.returncode,
        "stdout": stdout.decode("utf-8", errors="replace"),
        "stderr": stderr.decode("utf-8", errors="replace"),
    }
```

## Integration rules

- Keep model configurable.
- Default to `gemini-3-flash-preview`.
- Keep the runtime path configurable if possible.
- Do not hardcode API keys.
- Do not print full environment variables.
- Do not expose `.env`.
- Do not log secrets.
- Add explicit allow/deny gates before high-risk actions.
- Do not couple this to STT runtime behavior without a scoped task.

## Suggested result schema

```python
{
    "status": "success" | "error",
    "returncode": int,
    "stdout": str,
    "stderr": str,
}
```

## Suggested safety gate

Before running against a site, classify the task:

```text
LOW: public page inspection, example.com smoke test, local test site
MEDIUM: web form testing with dummy data
HIGH: login, financial, government, irreversible changes, real data
```

For HIGH tasks:

```text
Do not run final action automatically.
Prepare an operator checklist instead.
```

## Do not use for normal STT work

Do not call browser automation from:

- audio recognition loops
- paste loops
- correction dictionary loading
- window command routing
- hotkey hooks
- normal STT runtime paths

unless the user explicitly scopes an integration.