param(
    [switch]$Apply
)

$ErrorActionPreference = "Stop"

$RepoPath = "D:\lumina-studio"
$Stamp = Get-Date -Format "yyyyMMdd-HHmmss"
$BackupRoot = Join-Path $RepoPath "backups\read-first-alignment-$Stamp"
$ReportPath = Join-Path $RepoPath "reports\read-first-alignment-report-$Stamp.md"

$Report = @()

function Add-Report {
    param([string]$Message)
    $script:Report += $Message
    Write-Host $Message
}

function Backup-File {
    param([string]$RelativePath)

    $Source = Join-Path $RepoPath $RelativePath
    if (!(Test-Path $Source)) {
        Add-Report "MISSING backup source: $RelativePath"
        return
    }

    $Target = Join-Path $BackupRoot $RelativePath
    $TargetDir = Split-Path $Target -Parent

    if ($Apply) {
        New-Item -ItemType Directory -Path $TargetDir -Force | Out-Null
        Copy-Item $Source $Target -Force
        Add-Report "BACKUP: $RelativePath -> $Target"
    } else {
        Add-Report "DRY-RUN backup: $RelativePath -> $Target"
    }
}

function Ensure-Directory {
    param([string]$RelativePath)

    $Path = Join-Path $RepoPath $RelativePath

    if (Test-Path $Path) {
        Add-Report "SKIP existing dir: $RelativePath"
        return
    }

    if ($Apply) {
        New-Item -ItemType Directory -Path $Path -Force | Out-Null
        Add-Report "CREATE dir: $RelativePath"
    } else {
        Add-Report "DRY-RUN create dir: $RelativePath"
    }
}

function Ensure-File {
    param(
        [string]$RelativePath,
        [string]$Content
    )

    $Path = Join-Path $RepoPath $RelativePath

    if (Test-Path $Path) {
        Add-Report "SKIP existing file: $RelativePath"
        return
    }

    $Dir = Split-Path $Path -Parent

    if ($Apply) {
        New-Item -ItemType Directory -Path $Dir -Force | Out-Null
        Set-Content -Path $Path -Value $Content -Encoding UTF8
        Add-Report "CREATE file: $RelativePath"
    } else {
        Add-Report "DRY-RUN create file: $RelativePath"
    }
}

function Replace-InFile {
    param(
        [string]$RelativePath,
        [string]$Find,
        [string]$Replace
    )

    $Path = Join-Path $RepoPath $RelativePath

    if (!(Test-Path $Path)) {
        Add-Report "MISSING file for replace: $RelativePath"
        return
    }

    $Content = Get-Content $Path -Raw

    if ($Content -notlike "*$Find*") {
        Add-Report "SKIP pattern not found in $RelativePath : $Find"
        return
    }

    if ($Apply) {
        $NewContent = $Content.Replace($Find, $Replace)
        Set-Content -Path $Path -Value $NewContent -Encoding UTF8
        Add-Report "REPLACE in $RelativePath : $Find -> $Replace"
    } else {
        Add-Report "DRY-RUN replace in $RelativePath : $Find -> $Replace"
    }
}

function Ensure-LineAfterMarker {
    param(
        [string]$RelativePath,
        [string]$Line,
        [string]$Marker
    )

    $Path = Join-Path $RepoPath $RelativePath

    if (!(Test-Path $Path)) {
        Add-Report "MISSING file for line insert: $RelativePath"
        return
    }

    $Content = Get-Content $Path -Raw

    if ($Content -like "*$Line*") {
        Add-Report "SKIP existing line in $RelativePath : $Line"
        return
    }

    if ($Content -notlike "*$Marker*") {
        Add-Report "MARKER not found in $RelativePath : $Marker"
        return
    }

    if ($Apply) {
        $NewContent = $Content.Replace($Marker, "$Marker`r`n- $Line")
        Set-Content -Path $Path -Value $NewContent -Encoding UTF8
        Add-Report "INSERT line in $RelativePath : $Line"
    } else {
        Add-Report "DRY-RUN insert line in $RelativePath : $Line"
    }
}

function Append-BlockIfMissing {
    param(
        [string]$RelativePath,
        [string]$Marker,
        [string]$Block
    )

    $Path = Join-Path $RepoPath $RelativePath

    if (!(Test-Path $Path)) {
        Add-Report "MISSING file for append: $RelativePath"
        return
    }

    $Content = Get-Content $Path -Raw

    if ($Content -like "*$Marker*") {
        Add-Report "SKIP existing block in $RelativePath : $Marker"
        return
    }

    if ($Apply) {
        Add-Content -Path $Path -Value "`r`n$Block" -Encoding UTF8
        Add-Report "APPEND block in $RelativePath : $Marker"
    } else {
        Add-Report "DRY-RUN append block in $RelativePath : $Marker"
    }
}

Write-Host "LUMINA Agent Read-First Alignment Fix"
Write-Host "Mode:" $(if ($Apply) { "APPLY" } else { "DRY-RUN" })
Write-Host ""

# Backup important files
$ImportantFiles = @(
    "AGENTS.md",
    "GEMINI.md",
    "PROJECT_RULES.md",
    "skills\LUMINA_Frontend-Visual-Design\SKILL.md",
    "skills\LUMINA_STARTUP\references\startup-read-first-files.md"
)

foreach ($File in $ImportantFiles) {
    Backup-File $File
}

# 1. Fix skill.md -> SKILL.md
Replace-InFile "AGENTS.md" "skills/LUMINA_STARTUP/skill.md" "skills/LUMINA_STARTUP/SKILL.md"
Replace-InFile "AGENTS.md" "skills/LUMINA_REVIEW_CHECKLIST/skill.md" "skills/LUMINA_REVIEW_CHECKLIST/SKILL.md"
Replace-InFile "GEMINI.md" "skills/LUMINA_STARTUP/skill.md" "skills/LUMINA_STARTUP/SKILL.md"

# 2. Add LUMINA_CONFIG_SYSTEM.md to read-first
Ensure-LineAfterMarker "AGENTS.md" "LUMINA_CONFIG_SYSTEM.md" "- PROJECT_RULES.md"
Ensure-LineAfterMarker "GEMINI.md" "LUMINA_CONFIG_SYSTEM.md" "1. Read AI_HANDOFF.md"

# Startup reference file may already exist from 3-level upgrade
if (Test-Path (Join-Path $RepoPath "skills\LUMINA_STARTUP\references\startup-read-first-files.md")) {
    Ensure-LineAfterMarker "skills\LUMINA_STARTUP\references\startup-read-first-files.md" "LUMINA_CONFIG_SYSTEM.md" "- PROJECT_RULES.md"
} else {
    Ensure-File "skills\LUMINA_STARTUP\references\startup-read-first-files.md" @"
# LUMINA Startup Read-First Files

Before implementation, read:

- PROJECT_RULES.md
- LUMINA_CONFIG_SYSTEM.md
- AI_HANDOFF.md
- reports/implementation_report.md
- reports/visual_audit.md
- .mcp/serena.md
- .mcp/codegraph.md
- skills/LUMINA_STARTUP/SKILL.md

Run:

- git status --short

Do not implement before startup report is complete.
"@
}

# 3. Create .ai/SKILL_PROFILES.md if missing
Ensure-Directory ".ai"

Ensure-File ".ai\SKILL_PROFILES.md" @"
# LUMINA Skill Profiles

Purpose: define execution behavior for each LUMINA skill.

## Global Rules

- Filesystem is source of truth.
- Read-first must complete before implementation.
- Do not expand scope without explicit user approval.
- Do not implement proposed improvements unless explicitly approved.
- If lint or build fails, stop and report exact output unless explicitly allowed to fix.

---

## LUMINA_STARTUP

mode: read-first
implementation_allowed: false
proposal_allowed: true
strictness: high

Use at the beginning of every LUMINA task.

---

## LUMINA_BOOTSTRAP

mode: project-boundary
implementation_allowed: limited
proposal_allowed: limited
strictness: high

Use to confirm Phase 1 scope and forbidden expansion.

---

## LUMINA_CONFIG_CHANGE

mode: config-first implementation
implementation_allowed: true
proposal_allowed: limited
strictness: high

Allowed files by default:

- src/config/*
- AI_HANDOFF.md
- reports/implementation_report.md
- reports/visual_audit.md

Do not edit JSX/layout code unless config wiring is broken or explicitly approved.

---

## LUMINA_ART_DIRECTION

mode: concept-only
implementation_allowed: false
proposal_allowed: true
strictness: medium

Do not write production code.

---

## LUMINA_Frontend-Visual-Design

mode: visual-design guidance
implementation_allowed: limited
proposal_allowed: true
strictness: high

Prefer simplest sufficient implementation. Avoid effects that compete with photography.

---

## LUMINA_VISUAL_REVIEW

mode: review-only
implementation_allowed: false
proposal_allowed: true
strictness: high

Return scorecard and recommendations only.

---

## LUMINA_REVIEW_CHECKLIST

mode: final-review
implementation_allowed: false
proposal_allowed: false
strictness: very-high

Use before approval, merge, or deployment.

---

## LUMINA_REPORTING

mode: reporting
implementation_allowed: true
proposal_allowed: false
strictness: high

Update required reports after successful task completion.

---

## LUMINA_DEPLOYMENT

mode: deployment
implementation_allowed: limited
proposal_allowed: false
strictness: very-high

Run lint and build before deploy. Do not deploy production unless explicitly approved.
"@

# 4. Rename skill frontmatter name to avoid global conflict
Replace-InFile "skills\LUMINA_Frontend-Visual-Design\SKILL.md" "name: frontend-visual-design" "name: lumina-frontend-visual-design"
Replace-InFile "skills\LUMINA_Frontend-Visual-Design\SKILL.md" "description: Frontend visual design guidance for landing pages, marketing websites, portfolio sites, SaaS interfaces, UI components, motion systems, and visual review. Use when a task involves frontend design, visual refinement, motion design, or design review and the work should prioritize clarity, accessibility, performance, and maintainability." "description: LUMINA-specific frontend visual design guidance for premium editorial photography landing page, portfolio sections, motion discipline, visual review, and config-driven UI refinement."

# 5. Add locked rules to PROJECT_RULES.md
Append-BlockIfMissing "PROJECT_RULES.md" "## Current Locked Rules" @"
## Current Locked Rules

- Hero Status: FROZEN.
- Further Hero redesign requires explicit user approval.
- Use the existing config system for content, image, visual token, motion, service, navigation, contact, and portfolio changes.
- Do not re-implement the config system unless it is missing or broken.
- Motion must support photography and must never become the subject.
- Photography remains the primary visual identity.
- Avoid heavy optical overlays, heavy glassmorphism, large cursor spotlights, WebGL, Three.js, and Canvas in production.
"@

# 6. Create runtime test script
Ensure-File "scripts\test-lumina-worker-read-first.ps1" @"
param(
    [string]`$RepoPath = "D:\lumina-studio"
)

`$ErrorActionPreference = "Stop"

Write-Host "LUMINA Worker Read-First Runtime Test"
Write-Host "RepoPath: `$RepoPath"
Write-Host ""

$requiredFiles = @(
    "PROJECT_RULES.md",
    "LUMINA_CONFIG_SYSTEM.md",
    "AI_HANDOFF.md",
    "reports\implementation_report.md",
    "reports\visual_audit.md",
    "skills\LUMINA_STARTUP\SKILL.md",
    "skills\LUMINA_REVIEW_CHECKLIST\SKILL.md",
    ".ai\SKILL_PROFILES.md",
    ".mcp\serena.md",
    ".mcp\codegraph.md",
    ".serena",
    "GEMINI.md",
    "AGENTS.md"
)

Write-Host "Required read-first files:"
foreach (`$rel in `$requiredFiles) {
    `$path = Join-Path `$RepoPath `$rel
    if (Test-Path `$path) {
        Write-Host "OK: `$rel"
    } else {
        Write-Host "MISSING: `$rel"
    }
}

Write-Host ""
Write-Host "Skill directories:"
`$skillsPath = Join-Path `$RepoPath "skills"
if (Test-Path `$skillsPath) {
    Get-ChildItem `$skillsPath -Directory | Select-Object -ExpandProperty Name
} else {
    Write-Host "MISSING: skills directory"
}

Write-Host ""
Write-Host "Frontend visual design skill name:"
`$frontendSkill = Join-Path `$RepoPath "skills\LUMINA_Frontend-Visual-Design\SKILL.md"
if (Test-Path `$frontendSkill) {
    Select-String -Path `$frontendSkill -Pattern "^name:" | ForEach-Object { `$_.Line }
} else {
    Write-Host "MISSING: `$frontendSkill"
}

Write-Host ""
Write-Host "Git status:"
Push-Location `$RepoPath
try {
    git status --short
} finally {
    Pop-Location
}
"@

# Report
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