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

# Alerts go by email to Greg (he keeps Windows notifications silent). Sent through his Google
# Workspace account with an app password kept in the user env var DCD_ALERT_SMTP_PASS - never in
# the repo. One email per problem, then a reminder every 6 hours; never every 5-minute fire.
$AlertTo  = 'greg@fkti.org'
$AlertLog = Join-Path $Work 'alerts.log'
function Send-Alert([string]$key, [string]$subject, [string]$body) {
    $mark = Join-Path $Work "alert-$key.txt"
    if ((Test-Path $mark) -and ((Get-Date) - (Get-Item $mark).LastWriteTime).TotalHours -lt 6) { return }
    $Stamp | Out-File $mark
    $sent = 'sent'
    try {
        $pass = [Environment]::GetEnvironmentVariable('DCD_ALERT_SMTP_PASS', 'User')
        if (-not $pass) { throw 'DCD_ALERT_SMTP_PASS is not set' }
        $c = New-Object System.Net.Mail.SmtpClient('smtp.gmail.com', 587)
        $c.EnableSsl = $true
        $c.Credentials = New-Object System.Net.NetworkCredential($AlertTo, $pass)
        $c.Send((New-Object System.Net.Mail.MailMessage($AlertTo, $AlertTo, "DCD research queue: $subject",
            "$body`n`nLogs: %LOCALAPPDATA%\dcd-research (check-errors.log, logs\run-*.log)`n-- the DCD research runner on Greg's PC")))
    } catch { $sent = "FAILED: $($_.Exception.Message)" }
    "$Stamp [$key] $subject - email $sent" | Out-File $AlertLog -Encoding utf8 -Append
}
# The problem is gone: forget it, and say so once if an alert went out for it.
function Clear-Alert([string]$key, [string]$subject) {
    $mark = Join-Path $Work "alert-$key.txt"
    if (-not (Test-Path $mark)) { return }
    Remove-Item $mark -Force
    Send-Alert "$key-ok" $subject 'Working again - no action needed.'
    Remove-Item (Join-Path $Work "alert-$key-ok.txt") -Force -ErrorAction SilentlyContinue
}

# Cheap check first. Empty queue: no log file, no Claude, nothing.
# 'Continue' around the native call: under 'Stop', PS 5.1 turned wrangler's first stderr line
# into a terminating error, so an expired Cloudflare login (Oct 27 -> Nov 25, 2026) killed the
# script BEFORE it could log, the task still showed result 0, and a request waited a month.
$CheckErrors = Join-Path $Work 'check-errors.log'
$ErrorActionPreference = 'Continue'
$check = & node scripts/research-queue.mjs check 2>&1 | ForEach-Object { "$_" } | Out-String
$ErrorActionPreference = 'Stop'
if ($check -notmatch 'queued:\s*(\d+)') {
    "$Stamp check failed: $check" | Out-File $CheckErrors -Encoding utf8 -Append
    if ($check -match 'Not logged in|auth token has expired|CLOUDFLARE_API_TOKEN') {
        Send-Alert 'check' 'cannot read requests - Cloudflare login expired' "The runner cannot read travellers' requests: wrangler's Cloudflare login has expired.`n`nFix: in C:\pf\fkti-dining run   npx wrangler login`n(or ask Claude to). Requests stay queued and are picked up within 5 minutes after."
    } else {
        $tail = ($check -split "`n" | Select-Object -Last 15) -join "`n"
        Send-Alert 'check' 'cannot read requests' "The runner's queue check failed:`n`n$tail"
    }
    exit 1
}
$queued = [int]$Matches[1]
Clear-Alert 'check' 'reading requests again'
# A request waiting 6h+ means something else is wrong (a run that keeps failing, the daily cap,
# a long session-limit stand-down). Say so rather than let it sit for a month again.
if ($check -match 'oldest-min:\s*(\d+)' -and [int]$Matches[1] -ge 360) {
    Send-Alert 'stuck' 'a request has waited over 6 hours' "A traveller's request has been waiting $([math]::Round([int]$Matches[1] / 60)) hours.`n`nQueue: $($check.Trim())"
} else { Clear-Alert 'stuck' 'no request waiting over 6 hours now' }
if ($queued -eq 0) { exit 0 }

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

    # Dependencies follow main (the Nov 25 run found kuromoji missing and lint failing).
    # Install only when package-lock.json changed since the last install here.
    $lockHash = (Get-FileHash (Join-Path $Repo 'package-lock.json')).Hash
    $lockSeen = Join-Path $Work 'npm-lock.sha'
    if (-not (Test-Path (Join-Path $Repo 'node_modules')) -or -not (Test-Path $lockSeen) -or
        (Get-Content $lockSeen -Raw).Trim() -ne $lockHash) {
        $ErrorActionPreference = 'Continue'
        & npm install --no-audit --no-fund 2>&1 | ForEach-Object { "$_" } | Out-File $LogFile -Encoding utf8 -Append
        $npmCode = $LASTEXITCODE
        $ErrorActionPreference = 'Stop'
        if ($npmCode -eq 0) { $lockHash | Out-File $lockSeen; Log 'npm install done' } else { Log "npm install FAILED ($npmCode)" }
    }

    if (-not $env:GOOGLE_MAPS_KEY) { $env:GOOGLE_MAPS_KEY = [Environment]::GetEnvironmentVariable('GOOGLE_MAPS_KEY','User') }
    $claude = Join-Path $env:USERPROFILE '.local\bin\claude.exe'
    if (-not (Test-Path $claude)) { $claude = 'claude' }

    # Windows PowerShell 5.1 turns ANY stderr line from a native program into a terminating
    # error under 'Stop' — the first run died on Claude's one-line "workspace not trusted"
    # warning before doing anything. Native output is logged, not judged; the exit code is.
    $ErrorActionPreference = 'Continue'
    # Point Claude at the file instead of passing its text: Windows PowerShell 5.1 re-encodes a
    # native argument in the ANSI codepage (dashes/Japanese -> mojibake) and cuts it at the first
    # double quote. The first real run noticed its prompt ended mid-sentence and said so.
    $out = & $claude -p 'Read docs/RESEARCH-PROMPT.md in full (it is UTF-8) and follow it exactly.' `
        --allowedTools 'Bash' 'Read' 'Write' 'Edit' 'Glob' 'Grep' 'WebFetch' 'WebSearch' `
        2>&1 | ForEach-Object { "$_" } | Tee-Object -FilePath $LogFile -Append
    $code = $LASTEXITCODE
    $ErrorActionPreference = 'Stop'
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
    if ($code -ne 0 -and -not (Test-Path $Blocked)) {
        Send-Alert 'run' 'a research run failed' "Claude exited with code $code. Log: $LogFile`n`nLast lines:`n$(($out | Select-Object -Last 20) -join "`n")"
    }
    Log "=== exit $code at $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss') ==="
} finally {
    Remove-Item $Lock -Force -ErrorAction SilentlyContinue
}
