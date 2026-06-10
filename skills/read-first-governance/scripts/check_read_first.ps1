# Check for required read-first files
$requiredFiles = @(
    "repo_memory/project_state.json",
    "repo_memory/architecture_map.md",
    "PROJECT_RULES.md",
    "AI_HANDOFF.md"
)

$missing = @()
foreach ($file in $requiredFiles) {
    if (-not (Test-Path $file)) {
        $missing += $file
    }
}

if ($missing.Count -gt 0) {
    Write-Host "Missing required read-first files: $($missing -join ', ')" -ForegroundColor Red
    exit 1
}

Write-Host "All required read-first files found." -ForegroundColor Green
exit 0
