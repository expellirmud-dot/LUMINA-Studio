param(
    [switch]$Apply
)

$ErrorActionPreference = "Stop"

$SkillPaths = @(
    "D:\lumina-studio\skills\LUMINA_ART_DIRECTION",
    "D:\lumina-studio\skills\LUMINA_BOOTSTRAP",
    "D:\lumina-studio\skills\LUMINA_CONFIG_CHANGE",
    "D:\lumina-studio\skills\LUMINA_DEPLOYMENT",
    "D:\lumina-studio\skills\LUMINA_Frontend-Visual-Design",
    "D:\lumina-studio\skills\LUMINA_REPORTING",
    "D:\lumina-studio\skills\LUMINA_REVIEW_CHECKLIST",
    "D:\lumina-studio\skills\LUMINA_STARTUP",
    "D:\lumina-studio\skills\LUMINA_VISUAL_REVIEW"
)

$Stamp = Get-Date -Format "yyyyMMdd-HHmmss"
$BackupRoot = "D:\lumina-studio\backups\skills-3level-$Stamp"
$ReportPath = "D:\lumina-studio\reports\skills-3level-upgrade-report-$Stamp.md"
$Report = @()

function Ensure-Dir {
    param([string]$Path)

    if (Test-Path $Path) {
        $script:Report += "SKIP existing dir: $Path"
        return
    }

    if ($Apply) {
        New-Item -ItemType Directory -Path $Path -Force | Out-Null
        $script:Report += "CREATE dir: $Path"
    } else {
        $script:Report += "DRY-RUN create dir: $Path"
    }
}

function Ensure-File {
    param(
        [string]$Path,
        [string]$Content
    )

    if (Test-Path $Path) {
        $script:Report += "SKIP existing file: $Path"
        return
    }

    if ($Apply) {
        $Dir = Split-Path $Path -Parent
        if (!(Test-Path $Dir)) {
            New-Item -ItemType Directory -Path $Dir -Force | Out-Null
        }

        Set-Content -Path $Path -Value $Content -Encoding UTF8
        $script:Report += "CREATE file: $Path"
    } else {
        $script:Report += "DRY-RUN create file: $Path"
    }
}

Write-Host "LUMINA Web Skills 3-Level Upgrade"
Write-Host "Mode:" $(if ($Apply) { "APPLY" } else { "DRY-RUN" })
Write-Host ""

foreach ($SkillPath in $SkillPaths) {
    if (!(Test-Path $SkillPath)) {
        $Report += "MISSING skill path: $SkillPath"
        continue
    }

    $SkillName = Split-Path $SkillPath -Leaf
    $SkillMd = Join-Path $SkillPath "SKILL.md"

    if (!(Test-Path $SkillMd)) {
        $Report += "MISSING SKILL.md: $SkillPath"
        continue
    }

    if ($Apply) {
        $BackupTarget = Join-Path $BackupRoot $SkillName
        New-Item -ItemType Directory -Path $BackupTarget -Force | Out-Null
        Copy-Item $SkillPath $BackupTarget -Recurse -Force
        $Report += "BACKUP: $SkillPath -> $BackupTarget"
    } else {
        $Report += "DRY-RUN backup: $SkillPath -> $BackupRoot\$SkillName"
    }

    switch ($SkillName) {
        "LUMINA_STARTUP" {
            Ensure-Dir "$SkillPath\references"
            Ensure-Dir "$SkillPath\scripts"
            Ensure-Dir "$SkillPath\templates"

            Ensure-File "$SkillPath\references\startup-read-first-files.md" @"
# LUMINA Startup Read-First Files

Before implementation, read:

- PROJECT_RULES.md
- AI_HANDOFF.md
- reports/implementation_report.md
- reports/visual_audit.md
- .mcp/serena.md
- .mcp/codegraph.md

Also inspect config architecture:

- src/config/visual.ts
- src/config/motion.ts
- src/config/content.ts
- src/config/portfolio.ts
- src/config/services.ts
- src/config/navigation.ts
- src/config/contact.ts

Run:

- git status --short

Do not implement before startup report is complete.
"@

            Ensure-File "$SkillPath\templates\startup-report-template.md" @"
# LUMINA Startup Report

## Project State

## Current Phase

## Active Skill Status

## Serena Status

## CodeGraph Status

## Expected Files To Change

## Risk Assessment

## Decision

READY_TO_IMPLEMENT / BLOCKED
"@

            Ensure-File "$SkillPath\scripts\lumina_startup_check.ps1" @"
param(
    [string]`$RepoPath = "D:\lumina-studio"
)

`$required = @(
    "PROJECT_RULES.md",
    "AI_HANDOFF.md",
    "reports\implementation_report.md",
    "reports\visual_audit.md",
    ".mcp\serena.md",
    ".mcp\codegraph.md",
    "src\config\visual.ts",
    "src\config\motion.ts",
    "src\config\content.ts",
    "src\config\portfolio.ts",
    "src\config\services.ts",
    "src\config\navigation.ts",
    "src\config\contact.ts"
)

foreach (`$rel in `$required) {
    `$path = Join-Path `$RepoPath `$rel
    if (Test-Path `$path) {
        Write-Host "OK: `$rel"
    } else {
        Write-Host "MISSING: `$rel"
    }
}

Push-Location `$RepoPath
try {
    git status --short
} finally {
    Pop-Location
}
"@
        }

        "LUMINA_CONFIG_CHANGE" {
            Ensure-Dir "$SkillPath\references"
            Ensure-Dir "$SkillPath\scripts"
            Ensure-Dir "$SkillPath\examples"

            Ensure-File "$SkillPath\references\config-file-map.md" @"
# LUMINA Config File Map

Config-only visual/content changes should prefer:

- src/config/visual.ts
- src/config/typography.ts
- src/config/motion.ts
- src/config/content.ts
- src/config/portfolio.ts
- src/config/services.ts
- src/config/navigation.ts
- src/config/contact.ts

Do not edit JSX/layout code unless config wiring is broken.
"@

            Ensure-File "$SkillPath\references\config-vs-jsx-policy.md" @"
# Config vs JSX Policy

Prefer config changes when the requested change is:

- text/content
- visual token
- motion token
- portfolio data
- service copy
- navigation label/link
- contact detail

Escalate before JSX edits if the task was explicitly config-only.
"@

            Ensure-File "$SkillPath\examples\good_config_only_change.md" @"
# Good Config-Only Change

Task: change hero tagline.

Expected:

- Edit src/config/content.ts
- Do not touch layout components
- Run npm run lint
- Run npm run build
"@

            Ensure-File "$SkillPath\examples\bad_unnecessary_jsx_edit.md" @"
# Bad Unnecessary JSX Edit

Task: change service copy.

Forbidden pattern:

- Edit component JSX directly
- Hardcode text in component
- Bypass existing config files
"@

            Ensure-File "$SkillPath\scripts\validate_config_only_change.ps1" @"
param(
    [string]`$RepoPath = "D:\lumina-studio"
)

Push-Location `$RepoPath
try {
    Write-Host "Changed files:"
    git diff --name-only

    Write-Host ""
    Write-Host "Non-config changed files:"
    git diff --name-only |
        Where-Object {
            `$_ -notmatch "^src/config/" -and
            `$_ -notmatch "^AI_HANDOFF.md$" -and
            `$_ -notmatch "^reports/"
        }
} finally {
    Pop-Location
}
"@
        }

        "LUMINA_Frontend-Visual-Design" {
            Ensure-Dir "$SkillPath\references"
            Ensure-Dir "$SkillPath\examples"
            Ensure-Dir "$SkillPath\templates"

            Ensure-File "$SkillPath\references\frontend-simplicity-ladder.md" @"
# Frontend Simplicity Ladder

Prefer the lightest implementation that satisfies the brief:

1. HTML
2. CSS
3. React components
4. CSS variables
5. CSS animations
6. Framer Motion
7. Three.js

Do not move down the ladder unless the simpler option is insufficient.
"@

            Ensure-File "$SkillPath\references\motion-safety-rules.md" @"
# Motion Safety Rules

Motion must:

- support usability
- reinforce hierarchy
- guide attention
- preserve readability
- respect accessibility
- support prefers-reduced-motion

Motion must not:

- distract from photography
- fight the content
- feel like a tech demo
- reduce mobile clarity
"@

            Ensure-File "$SkillPath\references\visual-design-principles.md" @"
# LUMINA Visual Design Principles

Prefer:

- strong hierarchy
- clear spacing
- intentional typography
- consistent visual language
- purposeful motion
- photography-first composition

Avoid:

- generic AI gradients
- random motion
- unnecessary glassmorphism
- decorative effects that compete with images
- SaaS/dashboard/government visual language
"@

            Ensure-File "$SkillPath\examples\good_editorial_section.md" @"
# Good Editorial Section

A good LUMINA section:

- lets photography remain dominant
- uses quiet typography
- has strong spacing discipline
- uses restrained motion
- feels premium without being decorative-heavy
"@

            Ensure-File "$SkillPath\examples\bad_generic_ai_gradient.md" @"
# Bad Generic AI Gradient

Avoid:

- random neon gradients
- shiny SaaS blobs
- overused glass cards
- motion added only to feel modern
- effects that reduce readability
"@

            Ensure-File "$SkillPath\templates\visual-design-review-template.md" @"
# Frontend Visual Design Review

## User Goal

## Audience

## Visual Direction

## Constraints

## Simplest Sufficient Solution

## Visual Findings

## Motion Findings

## Accessibility Notes

## Performance Notes

## Recommendation
"@
        }

        "LUMINA_ART_DIRECTION" {
            Ensure-Dir "$SkillPath\references"
            Ensure-Dir "$SkillPath\examples"
            Ensure-Dir "$SkillPath\templates"

            Ensure-File "$SkillPath\references\no-production-implementation-policy.md" @"
# No Production Implementation Policy

This skill is for visual exploration only.

Do not:

- write production code
- modify application files
- add dependencies
- implement Three.js
- implement WebGL
- ship experimental motion into production
"@

            Ensure-File "$SkillPath\references\lumina-visual-language.md" @"
# LUMINA Visual Language

Direction:

- luxury editorial photography
- cinematic calm
- Leica-inspired minimalism
- charcoal black
- warm white
- soft gray
- muted gold accent

Avoid:

- SaaS layout
- generic corporate
- government website tone
- dashboard appearance
- template-looking landing page
"@

            Ensure-File "$SkillPath\examples\hero_concept_minimal.md" @"
# Hero Concept: Minimal

## Visual Story

Photography remains the primary identity.

## Motion

Almost still. Subtle opacity or framing only.

## Risk

May feel too quiet if typography and image selection are weak.
"@

            Ensure-File "$SkillPath\examples\hero_concept_gallery_luxury.md" @"
# Hero Concept: Gallery Luxury

## Visual Story

The page behaves like a quiet editorial gallery.

## Motion

Slow image rhythm, restrained transitions, no tech-demo overlays.

## Risk

Image quality and crop discipline must be strong.
"@

            Ensure-File "$SkillPath\templates\art-direction-concept-template.md" @"
# LUMINA Art Direction Concept

## Concept Name

## Visual Story

## Emotional Goal

## Interaction

## Motion Description

## Mobile Suitability

## Complexity

## Performance Risk

## Recommended Technology

## Why It Matches LUMINA

## Final Recommendation

## What Not To Build Yet
"@
        }

        "LUMINA_VISUAL_REVIEW" {
            Ensure-Dir "$SkillPath\references"
            Ensure-Dir "$SkillPath\examples"
            Ensure-Dir "$SkillPath\templates"

            Ensure-File "$SkillPath\references\visual-review-criteria.md" @"
# LUMINA Visual Review Criteria

Review:

- visual hierarchy
- hero focus
- photography priority
- portfolio strength
- brand distinctiveness
- mobile layout
- typography
- image crops
- contact clarity
- footer quality

Score:

- luxury feeling
- readability
- mobile safety
- brand consistency
- contact clarity
"@

            Ensure-File "$SkillPath\references\section-review-map.md" @"
# Section Review Map

Required sections:

- Hero
- Portfolio
- Studio/Profile
- Contact
- Footer
- Mobile layout

Each section must support the premium editorial photography direction.
"@

            Ensure-File "$SkillPath\templates\visual-audit-template.md" @"
# LUMINA Visual Audit

## Overall Impression

## What Works

## What Feels Weak

## What Should Be Removed

## What Should Be Changed Next

## Scores

- Luxury feeling:
- Readability:
- Mobile safety:
- Brand consistency:
- Contact clarity:

## Decision

APPROVED / APPROVED_WITH_NOTES / CHANGES_REQUIRED
"@

            Ensure-File "$SkillPath\examples\changes_required_visual_review.md" @"
# Changes Required Visual Review Example

## Finding

Hero effect competes with photography.

## Risk

The site feels like a tech demo instead of premium editorial photography.

## Required Change

Reduce overlay/motion and restore image priority.
"@
        }

        "LUMINA_REVIEW_CHECKLIST" {
            Ensure-Dir "$SkillPath\references"
            Ensure-Dir "$SkillPath\scripts"
            Ensure-Dir "$SkillPath\templates"

            Ensure-File "$SkillPath\references\forbidden-project-expansion.md" @"
# Forbidden Project Expansion

Do not introduce unless explicitly approved:

- backend
- database
- authentication
- booking
- CMS
- dashboard
- payments
- API routes
- production Three.js
- production WebGL
- unnecessary dependencies
- speculative future architecture
"@

            Ensure-File "$SkillPath\references\config-discipline.md" @"
# Config Discipline

Verify config system remains intact.

Check:

- src/config/visual.ts
- src/config/typography.ts
- src/config/motion.ts
- src/config/content.ts
- src/config/portfolio.ts
- src/config/services.ts
- src/config/navigation.ts
- src/config/contact.ts

Prefer config updates when appropriate.
Avoid hardcoded values unless justified.
"@

            Ensure-File "$SkillPath\templates\final-review-report-template.md" @"
# LUMINA Final Review Report

## Project State

## Task

## Files Reviewed

## Validation Result

## Review Findings

## Risk Level

## Decision

APPROVED / APPROVED_WITH_NOTES / CHANGES_REQUIRED / REJECTED

## Recommended Next Task
"@

            Ensure-File "$SkillPath\scripts\validate_lumina_forbidden_patterns.ps1" @"
param(
    [string]`$RepoPath = "D:\lumina-studio"
)

`$patterns = @(
    "api/",
    "pages/api",
    "app/api",
    "prisma",
    "mongoose",
    "mongodb",
    "supabase",
    "firebase",
    "next-auth",
    "auth",
    "stripe",
    "three",
    "@react-three",
    "webgl",
    "booking",
    "cms",
    "dashboard"
)

Push-Location `$RepoPath
try {
    foreach (`$pattern in `$patterns) {
        Write-Host "Scanning for pattern: `$pattern"
        Get-ChildItem . -Recurse -Include *.js,*.jsx,*.ts,*.tsx,*.json |
            Where-Object { `$_.FullName -notmatch "\\node_modules\\" -and `$_.FullName -notmatch "\\.next\\" } |
            Select-String -Pattern `$pattern -SimpleMatch |
            ForEach-Object {
                "`$(`$_.Path):`$(`$_.LineNumber): `$(`$_.Line)"
            }
    }
} finally {
    Pop-Location
}
"@

            Ensure-File "$SkillPath\scripts\validate_lumina_config_files.ps1" @"
param(
    [string]`$RepoPath = "D:\lumina-studio"
)

`$files = @(
    "src\config\visual.ts",
    "src\config\typography.ts",
    "src\config\motion.ts",
    "src\config\content.ts",
    "src\config\portfolio.ts",
    "src\config\services.ts",
    "src\config\navigation.ts",
    "src\config\contact.ts"
)

foreach (`$rel in `$files) {
    `$path = Join-Path `$RepoPath `$rel
    if (Test-Path `$path) {
        Write-Host "OK: `$rel"
    } else {
        Write-Host "MISSING: `$rel"
    }
}
"@
        }

        "LUMINA_REPORTING" {
            Ensure-Dir "$SkillPath\templates"
            Ensure-Dir "$SkillPath\examples"

            Ensure-File "$SkillPath\templates\implementation-report-template.md" @"
# LUMINA Implementation Report

## Task

## Files Changed

## Summary

## Validation Results

- npm run lint:
- npm run build:

## Risks

## Next Recommended Task
"@

            Ensure-File "$SkillPath\templates\final-response-template.md" @"
# Final Response

## Files Changed

## Summary

## Validation Results

## Risks

## Next Recommended Task
"@

            Ensure-File "$SkillPath\templates\visual-audit-template.md" @"
# Visual Audit

## What Changed

## Visual Impact

## Mobile Impact

## Brand Consistency

## Remaining Risks

## Decision
"@

            Ensure-File "$SkillPath\examples\implementation-report-example.md" @"
# Implementation Report Example

## Task

Adjust hero copy through config.

## Files Changed

- src/config/content.ts
- AI_HANDOFF.md
- reports/implementation_report.md

## Validation Results

- npm run lint: PASS
- npm run build: PASS
"@
        }

        "LUMINA_DEPLOYMENT" {
            Ensure-Dir "$SkillPath\references"
            Ensure-Dir "$SkillPath\scripts"
            Ensure-Dir "$SkillPath\templates"

            Ensure-File "$SkillPath\references\deployment-checklist.md" @"
# LUMINA Deployment Checklist

Before deploy:

- npm run lint
- npm run build

Preview:

- vercel

Production:

- vercel --prod

After production deployment record:

- Production URL
- Deployment status
- Date/time if available

Update:

- AI_HANDOFF.md
- reports/implementation_report.md
"@

            Ensure-File "$SkillPath\templates\deployment-report-template.md" @"
# LUMINA Deployment Report

## Deployment Type

Preview / Production

## Validation

- npm run lint:
- npm run build:

## URL

## Status

## Date/Time

## Notes
"@

            Ensure-File "$SkillPath\scripts\lumina_deploy_preflight.ps1" @"
param(
    [string]`$RepoPath = "D:\lumina-studio"
)

Push-Location `$RepoPath
try {
    npm run lint
    npm run build
} finally {
    Pop-Location
}
"@
        }

        "LUMINA_BOOTSTRAP" {
            Ensure-Dir "$SkillPath\references"
            Ensure-Dir "$SkillPath\scripts"
            Ensure-Dir "$SkillPath\templates"

            Ensure-File "$SkillPath\references\phase-1-boundary.md" @"
# LUMINA Phase 1 Boundary

Allowed:

- single landing page
- hero
- scroll storytelling
- mini gallery
- services
- about
- contact CTA
- footer
- responsive UI
- SEO metadata
- performance optimization
- lightweight CSS animation
- frontend-only component extraction

Forbidden:

- backend
- database
- authentication
- CMS
- booking system
- admin dashboard
- payment system
- client gallery system
- API routes
- unnecessary dependencies
- complex infrastructure
"@

            Ensure-File "$SkillPath\references\brand-direction.md" @"
# LUMINA Brand Direction

Follow:

- luxury editorial photography
- cinematic mood
- Leica-inspired minimalism
- charcoal black
- warm white
- soft gray
- muted gold accent

Avoid:

- SaaS layout
- government style
- generic corporate style
- dashboard appearance
- template-looking landing page
"@

            Ensure-File "$SkillPath\templates\bootstrap-scope-report-template.md" @"
# LUMINA Bootstrap Scope Report

## Current Phase

## Allowed Scope

## Forbidden Scope

## Files Expected To Change

## Validation Plan

## Risk Assessment
"@

            Ensure-File "$SkillPath\scripts\lumina_phase1_boundary_check.ps1" @"
param(
    [string]`$RepoPath = "D:\lumina-studio"
)

Push-Location `$RepoPath
try {
    Write-Host "Changed files:"
    git diff --name-only

    Write-Host ""
    Write-Host "Package dependency changes:"
    git diff -- package.json package-lock.json pnpm-lock.yaml yarn.lock
} finally {
    Pop-Location
}
"@
        }
    }
}

if ($Apply) {
    New-Item -ItemType Directory -Path (Split-Path $ReportPath -Parent) -Force | Out-Null
    $Report | Out-File -FilePath $ReportPath -Encoding UTF8
    Write-Host ""
    Write-Host "Report saved: $ReportPath"
} else {
    Write-Host ""
    Write-Host "DRY-RUN REPORT"
    $Report | ForEach-Object { Write-Host $_ }
}

Write-Host ""
Write-Host "Done."