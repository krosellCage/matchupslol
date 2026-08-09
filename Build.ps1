# Build.ps1 - inline the datasets into one self-contained file.
#
# The source keeps data and markup separate so the datasets stay editable.
# Deployment prefers a single file: one request, works from file://, and it
# can be dropped anywhere including hosts that only accept one page.
#
#   .\Build.ps1            -> dist\index.html

param([string]$OutDir = "$PSScriptRoot\dist")

$ErrorActionPreference = 'Stop'

$html = Get-Content "$PSScriptRoot\index.html" -Raw

# Swap each <script src="data/..."></script> for the file's actual contents.
# Matching the tag itself rather than the surrounding markup means this does
# not care about line endings or how the file happens to be formatted.
$found = 0
$html = [regex]::Replace($html, '<script src="(data/[^"]+)"></script>', {
    param($m)
    $rel = $m.Groups[1].Value -replace '/', '\'
    $path = Join-Path $PSScriptRoot $rel
    if (-not (Test-Path $path)) { throw "missing dataset: $rel" }
    $script:found++
    "<script>`n" + (Get-Content $path -Raw) + "`n</script>"
})

if ($found -eq 0) { throw 'no dataset <script src> tags found in index.html' }

if (-not (Test-Path $OutDir)) { New-Item -ItemType Directory $OutDir | Out-Null }
$out = Join-Path $OutDir 'index.html'
Set-Content $out -Value $html -Encoding UTF8

# Verify against the DATA, not against a variable name the app also mentions.
$check = Get-Content $out -Raw
if ($check -match '<script src=')        { throw 'a dataset reference survived - inlining failed' }
if ($check -notmatch 'LANE_JUNGLE\s*=\s*\{') { throw 'dataset assignment missing from output' }
$rows = ([regex]::Matches($check, '\["[^"]+","[^"]+","(favoured|even|careful|hard)"')).Count
if ($rows -lt 100) { throw "only $rows matchup rows made it into the build" }

$kb = [math]::Round((Get-Item $out).Length / 1KB, 1)
Write-Host "built $out  ($kb KB, $found dataset(s), $rows matchups)" -ForegroundColor Green
