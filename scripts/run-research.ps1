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

# A Windows toast, so a broken queue is seen instead of found a month later. Best effort.
function Show-Toast([string]$title, [string]$body) {
    try {
        [Windows.UI.Notifications.ToastNotificationManager, Windows.UI.Notifications, ContentType = WindowsRuntime] | Out-Null
        [Windows.Data.Xml.Dom.XmlDocument, Windows.Data.Xml.Dom.XmlDocument, ContentType = WindowsRuntime] | Out-Null
        $esc = { param($s) [Security.SecurityElement]::Escape($s) }
        $xml = New-Object Windows.Data.Xml.Dom.XmlDocument
        $xml.LoadXml("<toast><visual><binding template='ToastGeneric'><text>$(& $esc $title)</text><text>$(& $esc $body)</text></binding></visual></toast>")
        $app = '{1AC14E77-02E7-4E5D-B744-2EB1AE5198B7}\WindowsPowerShell\v1.0\powershell.exe'
        [Windows.UI.Notifications.ToastNotificationManager]::CreateToastNotifier($app).Show(
            [Windows.UI.Notifications.ToastNotification]::new($xml))
    } catch { }
}

# Cheap check first. Empty queue: no log file, no Claude, nothing.
# 'Continue' around the native call: under 'Stop', PS 5.1 turned wrangler's first stderr line
# into a terminating error, so an expired Cloudflare login (Oct 27 -> Nov 25, 2026) killed the
# script BEFORE it could log, the task still showed result 0, and a request waited a month.
$CheckErrors = Join-Path $Work 'check-errors.log'
$Failing     = Join-Path $Work 'check-failing.txt'
$ErrorActionPreference = 'Continue'
$check = & node scripts/research-queue.mjs check 2>&1 | ForEach-Object { "$_" } | Out-String
$ErrorActionPreference = 'Stop'
if ($check -notmatch 'queued:\s*(\d+)') {
    "$Stamp check failed: $check" | Out-File $CheckErrors -Encoding utf8 -Append
    # Toast once per failure streak, then a reminder every 6 hours - not every 5 minutes.
    $remind = -not (Test-Path $Failing) -or ((Get-Date) - (Get-Item $Failing).LastWriteTime).TotalHours -ge 6
    if ($remind) {
        $why = 'see check-errors.log in %LOCALAPPDATA%\dcd-research'
        if ($check -match 'Not logged in|auth token has expired|CLOUDFLARE_API_TOKEN') { $why = 'Cloudflare login expired - run: npx wrangler login' }
        Show-Toast 'DCD research queue cannot read requests' $why
        $Stamp | Out-File $Failing
    }
    exit 1
}
if (Test-Path $Failing) {
    "$Stamp check OK again" | Out-File $CheckErrors -Encoding utf8 -Append
    Remove-Item $Failing -Force
}
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
    Log "=== exit $code at $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss') ==="
} finally {
    Remove-Item $Lock -Force -ErrorAction SilentlyContinue
}
