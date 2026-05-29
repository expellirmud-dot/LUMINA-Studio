# MODEL ROLES

## Controller

ChatGPT / GPT-5.5 conversation acts as workflow controller.

Responsibilities:

- define scope
- review status
- write task briefs
- decide next step

## GPT-5.5 Codex

Use for:

- large analysis
- architectural review
- careful implementation
- high-risk changes

## Gemma 4 / Gemini Coding

Use for:

- config changes
- small patches
- task-brief execution

## Gemini 3.5

Use for:

- visual concepts
- 3D ideas
- art direction exploration

Do not let Gemini 3.5 edit production app directly.

## Sonnet

Use only as one-file patch worker.

Rules:

- no planning
- no refactor
- no broad context
- if build fails, stop and report

