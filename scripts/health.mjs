#!/usr/bin/env node
/**
 * Quick wiring check against a deployed site (no cost — no web search spent).
 * Usage: npm run health -- https://your-app.pages.dev
 */
const base = process.argv[2];
if (!base) {
  console.error('Usage: npm run health -- https://your-app.pages.dev');
  process.exit(1);
}
const url = base.replace(/\/$/, '') + '/api/health?check=key';
try {
  const r = await fetch(url);
  const j = await r.json();
  console.log(JSON.stringify(j, null, 2));
  if (j.ready && j.key_valid) {
    console.log('\n✅ Ready — key authenticates and KV is bound.');
  } else {
    console.log(`\n⚠️  Not ready yet:  mistral_key=${j.mistral_key}  kv_bound=${j.kv_bound}  kv_rw=${j.kv_rw}  key_valid=${j.key_valid}`);
    console.log('   Fixes: bad key → re-set the secret; kv_rw false → binding must be named exactly SUMMARIES, then redeploy.');
  }
} catch (e) {
  console.error('Request failed:', e.message);
  process.exit(1);
}
