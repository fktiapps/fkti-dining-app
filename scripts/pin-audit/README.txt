Two-source pin audit (2026-09-28). Each script takes a WORK DIR (outside the repo — caches hold
Google coordinates, which Maps Platform terms allow only as a 30-day cache; never commit them).
Run from the repo root, in order:
  node scripts/pin-audit/harvest.mjs  <work>          -> all.json (Tabelog ids per record)
  node scripts/pin-audit/fetchall.mjs <work>          -> tbcache.jsonl   (Tabelog /en/ geo + JA address)
  node scripts/pin-audit/osmall.mjs   <work>          -> osmcache.jsonl  (Nominatim, 1 req/s)
  node scripts/pin-audit/siteaddr.mjs <work>          -> sitecache.jsonl (shop-site addresses)
  GOOGLE_MAPS_KEY=... node scripts/pin-audit/google.mjs <work> [--limit=N]  (100/day on the demo key)
  node scripts/pin-audit/reconcile.mjs <work> [--apply]  -> decisions.json; --apply writes city files
Then: build-payload.mjs, bump-build.mjs, lint-data.mjs, smoke-app.mjs.
harvest.mjs must be run from the repo root (it imports ./scripts/lib-city.mjs relative to cwd).
google.mjs currently queries ALL visible places; for the daily queue, filter to decisions.json
entries with decision in review_big_move|conflict|single_keep|no_source|weak_single first.
