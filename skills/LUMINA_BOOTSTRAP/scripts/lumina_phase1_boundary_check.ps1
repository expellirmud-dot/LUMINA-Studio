param(
    [string]$RepoPath = "D:\lumina-studio"
)

Push-Location $RepoPath
try {
    Write-Host "Changed files:"
    git diff --name-only

    Write-Host ""
    Write-Host "Package dependency changes:"
    git diff -- package.json package-lock.json pnpm-lock.yaml yarn.lock
} finally {
    Pop-Location
}
