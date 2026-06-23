# Model Matrix

## Default local model

```text
gemini-3-flash-preview
```

Use this by default on this machine.

It has been verified locally with:

```text
Environment: playwright
Task: Open example.com and tell me the heading
Result: The heading shown on example.com is "Example Domain".
```

## Original repo default model

```text
gemini-2.5-computer-use-preview-10-2025
```

This is the default model in the original reference implementation, but on the current free-tier key/project it returned:

```text
429 RESOURCE_EXHAUSTED
generate_content_free_tier_requests, limit: 0, model: computer-use-preview
generate_content_free_tier_input_token_count, limit: 0, model: computer-use-preview
```

Interpretation:

The installation is likely correct, but the current API project/key has no free-tier quota for the Computer Use Preview model.

Do not reinstall Python, Playwright, or the repository just because of this error.

## Practical model policy

Use this order:

```text
1. gemini-3-flash-preview
2. gemini-2.5-computer-use-preview-10-2025 only when quota/billing is available
3. Other Gemini preview/pro models only as explicitly scoped experiments
```

## Model-neutral meaning

This skill is model-neutral in the operational sense:

- Any worker/model can read this skill.
- Any worker/model can learn where the runtime is.
- Any worker/model can run the CLI command through a terminal if it has tool access.
- The actual browser-control action quality still depends on the model selected inside the runtime.

This skill does not magically turn an unsupported model into a native Computer Use model.

## Do not randomly swap model names

Do not assume a normal text model can replace a computer-use capable model.

If a model cannot produce the tool/action structure expected by the runtime, the agent may:

- produce prose only
- fail to call browser functions
- click inaccurately
- loop
- stop without a final result

## Current recommendations

For routine local testing:

```powershell
.\.venv\Scripts\python.exe main.py --query "Open example.com and tell me what heading is shown on the page" --env playwright --model gemini-3-flash-preview
```

For original Computer Use Preview testing:

```powershell
.\.venv\Scripts\python.exe main.py --query "Open example.com and tell me what heading is shown on the page" --env playwright --model gemini-2.5-computer-use-preview-10-2025
```

Only use the original model if a quota-enabled or billing-enabled Google project is available.