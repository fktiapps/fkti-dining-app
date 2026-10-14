# Researches "Suggest a place" requests on THIS machine, on Greg's Claude subscription.
#
# Travellers' requests sit in Cloudflare KV (functions/api/research-request.js). This
# runs every few minutes from Scheduled Task "DCD research queue". Each fire costs one
# KV listing (~2s, no Claude) unless there is work - only then does it start a Claude
# run, so a request is picked up within minutes rather than at the next 4-hour tick.
#
#   powershell -ExecutionPolicy Bypass -File C:\pf\fkti-dining-research\scripts\run-research.ps1
#
# Guards: one run at a time (lock file); research-queue.mjs caps requests per day; on a
# session-limit message the next fires stand down until the reset instead of each
# launching Claude to be refused.

$ErrorActionPreference = 'Stop'

$Repo    = 'C:\pf\fkti-dining-research'
$Prompt  = Join-Path $Repo 'docs\RESEARCH-PROMPT.md'
$Work    = Join-Path $env:LOCALAPPDATA 'dcd-research'
$LogDir  = Join-Path $Work 'logs'
$Lock    = Join-Path $Work 'run.lock'
$Blocked = Join-Path $Work 'blocked-until.txt'
$Stamp   = Get-Date -Format 'yyyyMMdd-HHmmss'
$LogFile = Join-Path $LogDir "run-$Stamp.log"

New-Item -ItemType Directory -Force -Path $LogDir | Out-Null

# A run already going? Stale after 3h (a run that died without cleaning up).
if (Test-Path $Lock) {
    if (((Get-Date) - (Get-Item $Lock).LastWriteTime).TotalHours -lt 3) { exit 0 }
    Remove-Item $Lock -Force
}
# Standing down until a session-limit reset?
if (Test-Path $Blocked) {
    $until = [datetime](Get-Content $Blocked -Raw).Trim()
    if ((Get-Date) -lt $until) { exit 0 }
    Remove-Item $Blocked -Force
}

Set-Location $Repo

# Cheap check first. Empty queue: no log file, no Claude, nothing.
$check = & node scripts/research-queue.mjs check 2>&1 | Out-String
if ($check -notmatch 'queued:\s*(\d+)') { "$Stamp check failed: $check" | Out-File (Join-Path $Work 'check-errors.log') -Append; exit 1 }
if ([int]$Matches[1] -eq 0) { exit 0 }

# Keep the last 50 run logs.
Get-ChildItem -Path $LogDir -Filter 'run-*.log' -ErrorAction SilentlyContinue |
    Sort-Object LastWriteTime -Descending | Select-Object -Skip 50 |
    Remove-Item -Force -ErrorAction SilentlyContinue

"$PID $Stamp" | Out-File $Lock
try {
    function Log([string]$m) { $m | Out-File $LogFile -Encoding utf8 -Append }
    Log "=== DCD research run $Stamp ==="
    Log $check.Trim()

    # Start from what is live, with the current prompt. -f: a run that died mid-way may
    # have left edits behind; its per-request add.mjs scripts live in $Work, not here.
    & git fetch -q origin 2>&1 | Out-Null
    & git checkout -q -f --detach origin/main 2>&1 | Out-Null
    Log "worktree at $(& git rev-parse --short HEAD)"

    if (-not $env:GOOGLE_MAPS_KEY) { $env:GOOGLE_MAPS_KEY = [Environment]::GetEnvironmentVariable('GOOGLE_MAPS_KEY','User') }
    $claude = Join-Path $env:USERPROFILE '.local\bin\claude.exe'
    if (-not (Test-Path $claude)) { $claude = 'claude' }

    $out = & $claude -p (Get-Content $Prompt -Raw) `
        --allowedTools 'Bash' 'Read' 'Write' 'Edit' 'Glob' 'Grep' 'WebFetch' 'WebSearch' `
        2>&1 | Tee-Object -FilePath $LogFile -Append
    $code = $LASTEXITCODE
    $joined = ($out | Out-String)

    if ($joined -match "hit your (session|usage) limit") {
        $when = (Get-Date).AddHours(1)
        if ($joined -match 'resets\s+(\d{1,2})(?::(\d{2}))?\s*(am|pm)') {
            $h = [int]$Matches[1]; $mi = 0
            if ($Matches[2]) { $mi = [int]$Matches[2] }
            if ($Matches[3] -eq 'pm' -and $h -lt 12) { $h += 12 }
            if ($Matches[3] -eq 'am' -and $h -eq 12) { $h = 0 }
            $when = (Get-Date).Date.AddHours($h).AddMinutes($mi + 3)
            if ($when -le (Get-Date)) { $when = $when.AddDays(1) }
        }
        $when.ToString('o') | Out-File $Blocked
        Log "session limit - standing down until $($when.ToString('yyyy-MM-dd HH:mm')); requests stay queued"
    }
    Log "=== exit $code at $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss') ==="
} finally {
    Remove-Item $Lock -Force -ErrorAction SilentlyContinue
}
