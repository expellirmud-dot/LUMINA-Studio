# Git Hygiene

## Runtime repository

The runtime repository should remain local external tooling:

```text
D:\ai-tools\computer-use-preview
```

Do not move the runtime repository into `.ai\skills`.

Recommended `.gitignore` entry in the main STT repo:

```gitignore
# Local external browser-control runtime
computer-use-preview/
```

## Skill wrapper

The wrapper skill may be committed if the user wants future agents/workers to share this knowledge:

```text
.ai/skills/computer-use-runtime-bridge/SKILL.md
.ai/skills/computer-use-runtime-bridge/references/
.ai/skills/computer-use-runtime-bridge/templates/
.ai/skills/computer-use-runtime-bridge/scripts/
```

## Never commit

```text
.env
*.env
API keys
Browser sessions
Screenshots containing private data
Logs containing secrets
Downloaded browser binaries
Virtual environments
```

## Pre-commit checks

Before commit, run:

```powershell
Set-Location D:\lumina-studio

git status --short

git diff -- skills\computer-use-runtime-bridge

git diff -- .gitignore
```

Confirm:

```text
[ ] computer-use-preview/ is ignored or not staged.
[ ] .env is not staged.
[ ] No API key appears in diffs.
[ ] Skill files only contain paths, commands, and generic placeholders.
[ ] No unrelated website files are modified.
```

## Recommended layout

```text
D:\lumina-studio
├─ computer-use-preview\                  # external runtime repo, gitignored
└─ skills\
   └─ computer-use-runtime-bridge\
      ├─ SKILL.md
      ├─ references\
      ├─ templates\
      └─ scripts\
```

## If old skill folder exists

If this old folder exists:

```text
D:\lumina-studio\skills\computer-use-preview
```

Do not delete immediately until the new skill has been verified.

After verification, either:

- archive it, or
- remove it if fully replaced by `computer-use-runtime-bridge`.

Avoid duplicate active skills with overlapping descriptions because workers may load the wrong one.