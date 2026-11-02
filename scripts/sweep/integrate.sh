#!/usr/bin/env bash
# Integrate one reviewed worker batch into main (docs/osaka-workers.md, docs/sweep-streams.md).
# Run from the main repo AFTER reading the draft against its sources. Every gate must pass before the
# commit and push; any failure stops here with nothing committed.
#   scripts/sweep/integrate.sh <worktree> <sweep> <script basename> <data city> "<log line>" "<commit subject>" [readings.json]
# readings.json (optional): {"key": "reading", ...} added to CITY_READINGS.<data city> in scripts/gloss/lib.mjs.
set -euo pipefail
WT=$1; SWEEP=$2; SCRIPT=$3; CITY=$4; LOGLINE=$5; SUBJECT=$6; READ=${7:-}
cd /c/pf/fkti-dining
S=${INTEG_SCRATCH:-/tmp}
FL='tier-write|tier writes|lib-tiers.test|Test Shop|went against the human gate'

cp "$WT/scripts/$SCRIPT" scripts/
mkdir -p data/gloss/_chunks
cp "$WT"/handoff/*.json data/gloss/_chunks/ 2>/dev/null || true
# shop folders the worker fetched (gitignored; kept so the record can be re-checked)
for d in "$WT/scripts/sweep/$SWEEP/work/shops/"*; do [ -d "$d" ] && [ ! -d "scripts/sweep/$SWEEP/work/shops/$(basename "$d")" ] && mkdir -p "scripts/sweep/$SWEEP/work/shops" && cp -r "$d" "scripts/sweep/$SWEEP/work/shops/" || true; done
node --check "scripts/$SCRIPT"
# no new stacked pins (< 3 m apart): workers kept putting two shops in one building on one point
# (the checker exits 1 whenever any stacked pair exists, and legacy pairs do; only the count matters here)
STK0=$(node scripts/check-stacked-pins.mjs "$CITY" | tail -1 || true)
node "scripts/$SCRIPT" | tail -6
STK1=$(node scripts/check-stacked-pins.mjs "$CITY" | tail -1 || true)
[ "$STK0" = "$STK1" ] || { echo "new stacked pin: $STK0 -> $STK1"; node scripts/check-stacked-pins.mjs "$CITY" | tail -8; exit 1; }
# sweeps push past the old city edges (Umeda, 2026-11-01): keep manifest bounds fitted to the data
node scripts/fit-bounds.mjs --grow > /dev/null
# Greg 2026-11-02: open_late = closes after 22:00
node scripts/apply-open-late.mjs > /dev/null
node scripts/gloss/merge.mjs
if [ -n "$READ" ]; then node scripts/gloss/add-readings.mjs "$CITY" "$READ"; fi
node scripts/gloss/extract.mjs "$CITY" 2>&1 | tail -2
node scripts/gloss/build.mjs > /dev/null
node scripts/build-payload.mjs > /dev/null
node scripts/bump-build.mjs > /dev/null
node scripts/lint-data.mjs 2>&1 | grep -vE "$FL" > "$S/lint_integ.txt" || true
diff "$S/lint_now.txt" "$S/lint_integ.txt"
npm test 2>&1 | grep -q "ℹ fail 0"
timeout 280 node scripts/smoke-app.mjs 2>&1 | tail -1 | grep -q PASS
echo "$LOGLINE" >> docs/osaka-sweep.md
git add "scripts/$SCRIPT" scripts/gloss/lib.mjs data docs sw.js index.html "scripts/sweep/$SWEEP"
git commit -q -m "$SUBJECT

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
git push -q origin main
git log --oneline -1
