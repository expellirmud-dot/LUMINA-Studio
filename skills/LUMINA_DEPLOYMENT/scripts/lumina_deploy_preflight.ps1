param(
    [string]$RepoPath = "D:\lumina-studio"
)

Push-Location $RepoPath
try {
    npm run lint
    npm run build
} finally {
    Pop-Location
}
