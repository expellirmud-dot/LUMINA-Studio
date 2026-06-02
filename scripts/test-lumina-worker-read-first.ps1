param(
    [string]$RepoPath = "D:\lumina-studio"
)

$ErrorActionPreference = "Stop"

Write-Host "LUMINA Worker Read-First Runtime Test"
Write-Host "RepoPath: $RepoPath"
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
    "GEMINI.md",
    "AGENTS.md"
)

Write-Host "Required read-first files:"
foreach ($rel in $requiredFiles) {
    $path = Join-Path $RepoPath $rel
    if (Test-Path $path) {
        Write-Host "OK: $rel"
    } else {
        Write-Host "MISSING: $rel"
    }
}

Write-Host ""
Write-Host "Skill directories:"
$skillsPath = Join-Path $RepoPath "skills"
if (Test-Path $skillsPath) {
    Get-ChildItem $skillsPath -Directory | Select-Object -ExpandProperty Name
} else {
    Write-Host "MISSING: skills directory"
}

Write-Host ""
Write-Host "Frontend visual design skill name:"
$frontendSkill = Join-Path $RepoPath "skills\LUMINA_Frontend-Visual-Design\SKILL.md"
if (Test-Path $frontendSkill) {
    Select-String -Path $frontendSkill -Pattern "^name:" | ForEach-Object { $_.Line }
} else {
    Write-Host "MISSING: $frontendSkill"
}

Write-Host ""
Write-Host "Git status:"
Push-Location $RepoPath
try {
    git status --short
} finally {
    Pop-Location
}
