$ErrorActionPreference='Stop'

$pagePath='app/page.tsx'
$page=Get-Content -Raw $pagePath
if ($page -notmatch 'MiniAlbum') {
  $page=$page.Replace('import Image from "next/image";', 'import Image from "next/image";' + [Environment]::NewLine + 'import { MiniAlbum } from "../src/components/MiniAlbum";')
}
$pattern='(?s)          <div className="moments-grid">.*?          </div>\r?\n        </section>'
$replacement='          <MiniAlbum images={momentImagesConfig} />' + [Environment]::NewLine + '        </section>'
$matches=[regex]::Matches($page,$pattern)
if ($matches.Count -ne 1) { throw "Expected 1 moments-grid block, found $($matches.Count)" }
$page=[regex]::Replace($page,$pattern,$replacement,1)
[System.IO.File]::WriteAllText((Resolve-Path $pagePath),$page,[System.Text.UTF8Encoding]::new($false))

$configPath='src/config/portfolio.ts'
$config=Get-Content -Raw $configPath
$momentPattern='(?s)export const momentImagesConfig = \[.*?\];\s*$'
$momentReplacement=@'
export const momentImagesConfig = [
  {
    src: "/images/portfolio/phra-louis-v1/PTO-13.jpg",
    path: "/images/portfolio/phra-louis-v1/PTO-13.jpg",
    alt: "Ceremonial offerings prepared before an ordination ritual",
    position: "50% 50%",
  },
  {
    src: "/images/portfolio/phra-louis-v1/PTO-101.jpg",
    path: "/images/portfolio/phra-louis-v1/PTO-101.jpg",
    alt: "Family members taking part in the hair-cutting ritual before ordination",
    position: "50% 50%",
  },
  {
    src: "/images/portfolio/phra-louis-v1/PTO-250.jpg",
    path: "/images/portfolio/phra-louis-v1/PTO-250.jpg",
    alt: "A newly ordained man sharing a ceremonial offering with elders",
    position: "52% 52%",
  },
  {
    src: "/images/portfolio/phra-louis-v1/PTO-296.jpg",
    path: "/images/portfolio/phra-louis-v1/PTO-296.jpg",
    alt: "A quiet water-blessing gesture shared with family during ordination",
    position: "54% 58%",
  },
  {
    src: "/images/portfolio/phra-louis-v1/PTO-318.jpg",
    path: "/images/portfolio/phra-louis-v1/PTO-318.jpg",
    alt: "A quiet portrait of the ordinand near the temple doorway",
    position: "50% 42%",
  },
];
'@
$matches=[regex]::Matches($config,$momentPattern)
if ($matches.Count -ne 1) { throw "Expected 1 momentImagesConfig block, found $($matches.Count)" }
$config=[regex]::Replace($config,$momentPattern,[System.Text.RegularExpressions.MatchEvaluator]{ param($m) $momentReplacement },1)
[System.IO.File]::WriteAllText((Resolve-Path $configPath),$config,[System.Text.UTF8Encoding]::new($false))

Write-Host 'page/config updated'
