# SKILL PROFILES

Skill execution profiles define recommended model behavior per skill.

These profiles do not override project rules.
They guide temperature, top_p, proposal rights, and execution strictness.

Priority order:

1. PROJECT_RULES.md
2. Active Skill
3. TASK_BRIEF.md
4. SKILL_PROFILES.md
5. Model default behavior

---

## LUMINA_STARTUP

Purpose:
Read project state and verify context before work.

Recommended settings:

temperature: 0.0
top_p: 0.2

Permissions:

propose_improvements: false
self_refactor: false
scope_expansion: false
strict_execution: true

---

## LUMINA_CONFIG_CHANGE

Purpose:
Safe config-only changes.

Recommended settings:

temperature: 0.1
top_p: 0.5

Permissions:

propose_improvements: true
implement_unapproved_proposals: false
self_refactor: false
scope_expansion: false

---

## LUMINA_VISUAL_REVIEW

Purpose:
Review hero, contact, portfolio, typography, and mobile visual quality.

Recommended settings:

temperature: 0.4
top_p: 0.9

Permissions:

propose_improvements: true
implement_unapproved_proposals: false
self_refactor: false
scope_expansion: false

---

## LUMINA_REPORTING

Purpose:
Update reports and summarize completed work.

Recommended settings:

temperature: 0.1
top_p: 0.5

Permissions:

propose_improvements: false
self_refactor: false
scope_expansion: false

---

## LUMINA_DEPLOYMENT

Purpose:
Build, lint, deploy, and record production status.

Recommended settings:

temperature: 0.0
top_p: 0.3

Permissions:

propose_improvements: false
self_refactor: false
scope_expansion: false
strict_execution: true

---

## LUMINA_REVIEW_CHECKLIST

Purpose:
Final acceptance review before approval, merge, or deployment.

Recommended settings:

temperature: 0.1
top_p: 0.5

Permissions:

propose_improvements: true
implement_unapproved_proposals: false
self_refactor: false
scope_expansion: false

---

## LUMINA_ART_DIRECTION

Purpose:
Explore visual concepts, 3D ideas, motion ideas, and brand direction.

Recommended settings:

temperature: 0.7
top_p: 1.0

Permissions:

propose_improvements: true
alternative_concepts: true
implement_unapproved_proposals: false
production_code: false

