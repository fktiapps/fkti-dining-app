# Nightly Google pin batch — no Claude involved. Registered as Windows task "DCD pin batch" (03:30).
# Spends the day's Google quota (100 SearchText) on the worst unsettled pins, re-decides every pin
# against the frozen pre-audit baseline, and pushes to main ONLY if lint and the smoke test pass.
# Google coordinates are never stored (confirm-only). Caches: %LOCALAPPDATA%\dcd-pins (30-day rule
# applies to googlecache.jsonl — the task deletes Google cache lines older than 30 days).
$ErrorActionPreference = 'Continue'
$repo = 'C:\PF\fkti-dining'
$work = Join-Path $env:LOCALAPPDATA 'dcd-pins'
$log  = Join-Path $work ("run-" + (Get-Date -Format 'yyyyMMdd-HHmmss') + '.log')
function Log($m) { "$(Get-Date -Format s) $m" | Tee-Object -FilePath $log -Append }
function Abort($m) { Log "ABORT: $m"; git -C $repo checkout -- data/ index.html sw.js 2>&1 | Out-Null; exit 1 }

Set-Location $repo
if (-not $env:GOOGLE_MAPS_KEY) { $env:GOOGLE_MAPS_KEY = [Environment]::GetEnvironmentVariable('GOOGLE_MAPS_KEY','User') }
if (Test-Path 'data\.rebuild.lock') { Abort 'rebuild lock held' }
if ((git status --porcelain -- data index.html sw.js) -ne $null) { Abort 'working tree has uncommitted data changes; not touching it' }
git pull -q 2>&1 | Out-Null

# 30-day retention for Google results (Maps Platform terms)
$gc = Join-Path $work 'googlecache.jsonl'; $stamp = Join-Path $work 'googlecache.started'
if (-not (Test-Path $stamp)) { Get-Date -Format s | Set-Content $stamp }
if ((Test-Path $gc) -and ((Get-Date) - [datetime](Get-Content $stamp) -gt [timespan]::FromDays(29))) {
  Remove-Item $gc; Get-Date -Format s | Set-Content $stamp; Log 'Google cache expired and deleted (30-day rule)' }

node scripts/pin-audit/google.mjs $work 2>&1 | ForEach-Object { Log $_ }
node scripts/pin-audit/reconcile.mjs $work --apply 2>&1 | ForEach-Object { Log $_ }
if ((git status --porcelain -- data) -eq $null) { Log 'no pin changes'; exit 0 }

node scripts/build-payload.mjs 2>&1 | Select-Object -Last 1 | ForEach-Object { Log $_ }
node scripts/bump-build.mjs 2>&1 | Select-Object -First 1 | ForEach-Object { Log $_ }
node scripts/lint-data.mjs *> (Join-Path $work 'lint-last.txt'); if ($LASTEXITCODE -ne 0) { Abort 'lint failed' }

$srv = Start-Process node -ArgumentList 'scripts/static-serve.mjs' -PassThru -WindowStyle Hidden
Start-Sleep 3
$smoke = node scripts/smoke-app.mjs 2>&1 | Select-Object -Last 1
Stop-Process -Id $srv.Id -Force -ErrorAction SilentlyContinue
Log "smoke: $smoke"
if ($smoke -notmatch '^PASS') { Abort 'smoke test failed' }

$counts = (Get-Content (Join-Path $work 'reconcile-summary.txt') -ErrorAction SilentlyContinue) -join ' '
git add data index.html sw.js 2>&1 | Out-Null
git commit -q -m "Pins: nightly Google batch $(Get-Date -Format yyyy-MM-dd)`n`n$counts`n`nAutomated by scripts/pin-audit/run-nightly.ps1 (Google confirm-only; lint + smoke passed)." 2>&1 | Out-Null
git push -q origin main 2>&1 | ForEach-Object { Log $_ }
Log "pushed $(git log --oneline -1)"
