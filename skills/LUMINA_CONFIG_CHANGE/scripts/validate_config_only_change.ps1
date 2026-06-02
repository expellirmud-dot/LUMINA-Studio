param(
    [string]$RepoPath = "D:\lumina-studio"
)

Push-Location $RepoPath
try {
    Write-Host "Changed files:"
    git diff --name-only

    Write-Host ""
    Write-Host "Non-config changed files:"
    git diff --name-only |
        Where-Object {
            $_ -notmatch "^src/config/" -and
            $_ -notmatch "^AI_HANDOFF.md$" -and
            $_ -notmatch "^reports/"
        }
} finally {
    Pop-Location
}
