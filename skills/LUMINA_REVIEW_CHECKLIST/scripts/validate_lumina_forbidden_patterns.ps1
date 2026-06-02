param(
    [string]$RepoPath = "D:\lumina-studio"
)

$patterns = @(
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

Push-Location $RepoPath
try {
    foreach ($pattern in $patterns) {
        Write-Host "Scanning for pattern: $pattern"
        Get-ChildItem . -Recurse -Include *.js,*.jsx,*.ts,*.tsx,*.json |
            Where-Object { $_.FullName -notmatch "\\node_modules\\" -and $_.FullName -notmatch "\\.next\\" } |
            Select-String -Pattern $pattern -SimpleMatch |
            ForEach-Object {
                "$($_.Path):$($_.LineNumber): $($_.Line)"
            }
    }
} finally {
    Pop-Location
}
