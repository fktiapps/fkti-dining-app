#!/usr/bin/env node
/**
 * Pre-warm the AI "Tell me more" cache for a whole city.
 * Calls /api/place-summary for each place, waits for the result (synchronous endpoint),
 * then moves to the next. Handles rate limits by waiting and retrying automatically.
 *
 * ⚠ Do NOT use the app (especially Chef/Owner Story or Tell me more) while this runs.
 *   Both share the same Mistral rate limit. Run it solo, ideally overnight.
 *
 * Usage:
 *   node scripts/prewarm.mjs https://your-app.pages.dev
 *   node scripts/prewarm.mjs https://your-app.pages.dev --city data/kyoto.json
 */
import fs from 'node:fs/promises';
import path from 'node:path';

const args = process.argv.slice(2);
const base = args.find(a => a.startsWith('http'));
const val = f => { const i = args.indexOf(f); return i >= 0 ? args[i + 1] : null; };
const cityFile = val('--city') || 'data/kyoto.json';
const MIN_DELAY = 3000;   // minimum ms between requests (well under 0.83 RPS)
const MAX_RETRIES = 8;    // retry up to 8 times per place before giving up

if (!base) {
  console.error('Usage: node scripts/prewarm.mjs <BASE_URL> [--city data/<city>.json]');
  process.exit(1);
}

const sleep = ms => new Promise(r => setTimeout(r, ms));
const data = JSON.parse(await fs.readFile(path.resolve(cityFile), 'utf8'));
const places = data.places || [];
const cityName = data.city || 'Japan';

console.log(`\nPre-warming ${places.length} places in ${cityName}`);
console.log(`Base: ${base}`);
console.log(`⚠ Do not use the app while this runs — they share the Mistral rate limit.`);
console.log(`  Est. time: ~${Math.ceil(places.length * 30 / 60)} min (30s avg per place)\n`);

let ok = 0, skipped = 0, fail = 0;
const failed = [];

async function warm(p) {
  const u = `${base.replace(/\/$/, '')}/api/place-summary?id=${encodeURIComponent(p.id)}&name=${encodeURIComponent(p.name + ', ' + cityName)}`;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const r = await fetch(u);
      const j = await r.json().catch(() => ({}));

      // Already cached — skip instantly
      if (r.ok && j.wired && !j.error) {
        ok++;
        process.stdout.write('.');
        return;
      }

      // Rate limited — wait the full retry window then try again
      if (j.error === 'rate_limited' || r.status === 429) {
        const waitSecs = Math.max(45, j.retry_after || 45);
        process.stdout.write(`\n⏳ Rate limited on "${p.name}" (attempt ${attempt}/${MAX_RETRIES}). Waiting ${waitSecs}s…`);
        await sleep(waitSecs * 1000 + 5000); // wait + 5s buffer
        process.stdout.write(' retrying.\n');
        continue;
      }

      // Any other error — retry after a short pause
      const msg = j.error || j.detail || `HTTP ${r.status}`;
      if (attempt < MAX_RETRIES) {
        await sleep(5000);
        continue;
      }
      throw new Error(msg);

    } catch (e) {
      if (attempt < MAX_RETRIES) { await sleep(3000); continue; }
      fail++;
      failed.push(`${p.name}: ${e.message}`);
      process.stdout.write('✗');
      return;
    }
  }

  fail++;
  failed.push(`${p.name}: max retries (${MAX_RETRIES}) reached`);
  process.stdout.write('✗');
}

// Single-threaded: one place at a time, wait for each to complete
for (const p of places) {
  await warm(p);
  await sleep(MIN_DELAY); // breathing room between requests
}

console.log(`\n\nDone. ✓ ${ok} cached  ✗ ${fail} failed  of ${places.length} places.`);
if (failed.length) {
  console.log('\nFailures (re-run to retry — cached places are skipped):');
  failed.forEach(f => console.log('  - ' + f));
  console.log('\nTip: re-running is safe and cheap — cached places return instantly.');
}
