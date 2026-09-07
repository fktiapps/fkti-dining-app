# Fires one unattended menu-research tick on THIS machine.
#
# Why this exists: the DCD grinder runs in the cloud, where egress is blocked -
# it logged `records +0 | egress: none` for 30+ consecutive runs. The machine
# that can actually reach shop websites is this one, and nothing was scheduling
# work on it, so research only happened when Greg poked it by hand. The scheduler
# ran where there was no egress; the egress was where there was no scheduler.
#
# Registered as Scheduled Task "DCD menu tick" (every 4h). Run by hand with:
#     powershell -ExecutionPolicy Bypass -File C:\pf\fkti-dining-arch\scripts\run-tick.ps1
#
# SESSION LIMIT: on 2026-09-06/07, seven of eight fires died in ~2s on
# "You've hit your session limit - resets 2am". A 4-hourly cadence has no idea
# where the account's reset window falls, so it burned six slots a day to hit one
# open one. This script now reads that message, parses the reset time, and arms a
# one-shot task "DCD menu tick retry" for just after it - so a blocked fire costs
# nothing and the next run lands when budget actually exists.

$ErrorActionPreference = 'Stop'

$Repo    = 'C:\pf\fkti-dining-arch'
$Prompt  = Join-Path $Repo 'docs\TICK-PROMPT.md'
$LogDir  = Join-Path $env:LOCALAPPDATA 'dcd-tick'
$Stamp   = Get-Date -Format 'yyyyMMdd-HHmmss'
$LogFile = Join-Path $LogDir "tick-$Stamp.log"
$Self    = $MyInvocation.MyCommand.Path

New-Item -ItemType Directory -Force -Path $LogDir | Out-Null

# Keep the last 30 logs; these are for spotting trends, not an archive.
Get-ChildItem -Path $LogDir -Filter 'tick-*.log' -ErrorAction SilentlyContinue |
    Sort-Object LastWriteTime -Descending | Select-Object -Skip 30 |
    Remove-Item -Force -ErrorAction SilentlyContinue

function Log([string]$m) { $m | Out-File $LogFile -Encoding utf8 -Append }

if (-not (Test-Path $Prompt)) { Log "ABORT: prompt file missing at $Prompt"; exit 1 }

$claude = Join-Path $env:USERPROFILE '.local\bin\claude.exe'
if (-not (Test-Path $claude)) { $claude = 'claude' }

Set-Location $Repo

"=== DCD menu tick $Stamp ===" | Out-File $LogFile -Encoding utf8

# Only fire if there is reachable work - a tick that finds nothing costs nothing.
# menu-todo is the single source of truth; do not reimplement it.
$reachable = -1
try {
    $bysrc = & node scripts/menu-todo.mjs tokyo --by-source 2>&1 | Out-String
    if ($bysrc -match 'reachable now:\s*(\d+)') { $reachable = [int]$Matches[1] }
} catch { }
Log "reachable now: $reachable"

if ($reachable -eq 0) { Log 'nothing reachable left - not firing a run'; exit 0 }

$promptText = Get-Content $Prompt -Raw

# Tee rather than pipe straight to a file: this streams the run into the log as it
# happens (so a run in flight is watchable) AND captures it for the limit check.
# --allowedTools rather than --dangerously-skip-permissions: the workspace is
# trusted, so its settings.json allow-list applies, and this stays scoped.
$out = & $claude -p $promptText `
    --allowedTools 'Bash' 'Read' 'Write' 'Edit' 'Glob' 'Grep' 'WebFetch' 'WebSearch' `
    2>&1 | Tee-Object -FilePath $LogFile -Append
$code = $LASTEXITCODE

$joined = ($out | Out-String)

# --- session-limit detection and re-arm -------------------------------------
if ($joined -match "hit your (session|usage) limit") {
    $when = $null
    # e.g. "resets 2am (America/New_York)" or "resets 10:30pm"
    if ($joined -match 'resets\s+(\d{1,2})(?::(\d{2}))?\s*(am|pm)') {
        $h = [int]$Matches[1]; $mi = 0
        if ($Matches[2]) { $mi = [int]$Matches[2] }
        if ($Matches[3] -eq 'pm' -and $h -lt 12) { $h += 12 }
        if ($Matches[3] -eq 'am' -and $h -eq 12) { $h = 0 }
        $when = (Get-Date).Date.AddHours($h).AddMinutes($mi)
        if ($when -le (Get-Date)) { $when = $when.AddDays(1) }
        $when = $when.AddMinutes(3)   # small buffer past the reset
    }
    if (-not $when) { $when = (Get-Date).AddHours(1) }   # unparseable: try again in an hour

    try {
        $a = New-ScheduledTaskAction -Execute 'powershell.exe' `
             -Argument "-NoProfile -ExecutionPolicy Bypass -File `"$Self`"" -WorkingDirectory $Repo
        $t = New-ScheduledTaskTrigger -Once -At $when
        $p = New-ScheduledTaskPrincipal -UserId "$env:USERDOMAIN\$env:USERNAME" -LogonType Interactive -RunLevel Limited
        $s = New-ScheduledTaskSettingsSet -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries `
             -StartWhenAvailable -ExecutionTimeLimit (New-TimeSpan -Hours 3) -MultipleInstances IgnoreNew
        Register-ScheduledTask -TaskName 'DCD menu tick retry' -Action $a -Trigger $t -Principal $p `
             -Settings $s -Description 'One-shot retry armed by run-tick.ps1 after a session-limit block.' -Force | Out-Null
        Log "session limit hit - armed 'DCD menu tick retry' for $($when.ToString('yyyy-MM-dd HH:mm'))"
    } catch {
        Log "session limit hit - FAILED to arm retry: $_"
    }
    Log "=== exit $code (limit) at $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss') ==="
    exit 0   # a blocked fire is not a failure; the retry is armed
}

Log "=== exit $code at $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss') ==="
exit $code
