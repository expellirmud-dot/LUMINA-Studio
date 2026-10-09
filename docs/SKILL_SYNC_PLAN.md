# LUMINA Skill Location Policy

Updated: 2026-10-08
Status: **SINGLE-SOURCE MODE**

The old mirror/synchronization model is retired.

## Canonical Directory

`D:\lumina-studio\.agents\skills\`

There is one physical copy of each active project skill.

## No Mirror Policy

Do not create project skill copies under:
- `D:\lumina-studio\skills\`
- `D:\lumina-studio\.agent\skills\`
- `D:\lumina-studio\.gemini\skills\`
- `D:\lumina-studio\.opencode\skills\`

Do not use copy-sync scripts for project skills.

If Gemini, OpenCode, another CLI, or an editor gains a configurable skill search path, point it at `.agents/skills/`. If a tool cannot consume the canonical directory, stop and document the compatibility issue before introducing any adapter or link.

## Adding a Skill

1. Create or install the skill under `.agents/skills/<skill-name>/`.
2. Ensure the entry file is exactly `SKILL.md`.
3. Reject same-name nesting such as `<skill-name>/<skill-name>/`.
4. Update `docs/SKILL_SOURCE_REGISTRY.md`.
5. Add a profile to `.ai/SKILL_PROFILES.md` only when project-specific execution guidance is useful.
6. Validate Git status and active path references.

## Updating a Skill

Edit the canonical copy directly under `.agents/skills/`. There is no downstream mirror step.

## Removing a Skill

Removal is destructive and requires explicit Owner approval. Create a backup/evidence record before deletion.

## Historical Data

Old backups, archived task reports, and legacy documentation may contain previous `skills/`, `.agent/skills/`, `.gemini/skills/`, or `.opencode/skills/` paths. Those references are historical only.
