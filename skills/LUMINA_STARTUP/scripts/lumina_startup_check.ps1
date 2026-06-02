param(
    [string]$RepoPath = "D:\lumina-studio"
)

$required = @(
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

foreach ($rel in $required) {
    $path = Join-Path $RepoPath $rel
    if (Test-Path $path) {
        Write-Host "OK: $rel"
    } else {
        Write-Host "MISSING: $rel"
    }
}

Push-Location $RepoPath
try {
    git status --short
} finally {
    Pop-Location
}
