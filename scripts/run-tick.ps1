# Fires one unattended menu-research tick on THIS machine.
#
# Why this exists: the DCD menu grinder runs in the cloud, where egress is
# blocked — it has logged `records +0 | egress: none` for 30+ consecutive runs.
# The machine that can actually reach shop websites is this one, and nothing was
# scheduling work on it, so research only happened when Greg poked it by hand.
# The scheduler ran where there was no egress; the egress was where there was no
# scheduler. This closes that gap.
#
# Registered as Scheduled Task "DCD menu tick". Run by hand with:
#     powershell -ExecutionPolicy Bypass -File C:\pf\fkti-dining-arch\scripts\run-tick.ps1

$ErrorActionPreference = 'Stop'

$Repo    = 'C:\pf\fkti-dining-arch'
$Prompt  = Join-Path $Repo 'docs\TICK-PROMPT.md'
$LogDir  = Join-Path $env:LOCALAPPDATA 'dcd-tick'
$Stamp   = Get-Date -Format 'yyyyMMdd-HHmmss'
$LogFile = Join-Path $LogDir "tick-$Stamp.log"

New-Item -ItemType Directory -Force -Path $LogDir | Out-Null

# Keep the last 30 logs; these are for spotting trends, not an archive.
Get-ChildItem -Path $LogDir -Filter 'tick-*.log' -ErrorAction SilentlyContinue |
    Sort-Object LastWriteTime -Descending | Select-Object -Skip 30 |
    Remove-Item -Force -ErrorAction SilentlyContinue

if (-not (Test-Path $Prompt)) { "$Stamp  ABORT: prompt file missing at $Prompt" | Out-File $LogFile -Encoding utf8; exit 1 }

$claude = Join-Path $env:USERPROFILE '.local\bin\claude.exe'
if (-not (Test-Path $claude)) { $claude = 'claude' }

Set-Location $Repo

# Only fire if there is reachable work — a tick that finds nothing should cost
# nothing. menu-todo is the single source of truth; do not reimplement it.
$reachable = -1
try {
    $bysrc = & node scripts/menu-todo.mjs tokyo --by-source 2>&1 | Out-String
    if ($bysrc -match 'reachable now:\s*(\d+)') { $reachable = [int]$Matches[1] }
} catch { }

"=== DCD menu tick $Stamp ===" | Out-File $LogFile -Encoding utf8
"reachable now: $reachable"    | Out-File $LogFile -Encoding utf8 -Append

if ($reachable -eq 0) {
    'nothing reachable left — not firing a run' | Out-File $LogFile -Encoding utf8 -Append
    exit 0
}

$promptText = Get-Content $Prompt -Raw

# --allowedTools rather than --dangerously-skip-permissions: the workspace is
# trusted, so its settings.json allow-list applies, and this stays scoped.
& $claude -p $promptText `
    --allowedTools 'Bash' 'Read' 'Write' 'Edit' 'Glob' 'Grep' 'WebFetch' 'WebSearch' `
    2>&1 | Out-File $LogFile -Encoding utf8 -Append

"=== exit $LASTEXITCODE at $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss') ===" |
    Out-File $LogFile -Encoding utf8 -Append
exit $LASTEXITCODE
