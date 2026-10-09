param(
    [string]$RepoPath = "D:\lumina-studio"
)

$files = @(
    "src\config\visual.ts",
    "src\config\typography.ts",
    "src\config\motion.ts",
    "src\config\content.ts",
    "src\config\portfolio.ts",
    "src\config\services.ts",
    "src\config\navigation.ts",
    "src\config\contact.ts"
)

foreach ($rel in $files) {
    $path = Join-Path $RepoPath $rel
    if (Test-Path $path) {
        Write-Host "OK: $rel"
    } else {
        Write-Host "MISSING: $rel"
    }
}
