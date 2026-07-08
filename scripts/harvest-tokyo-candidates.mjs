// Harvest discovery candidates from the 4 per-circle discovery workflows' task output files,
// global-dedup by normalized JA name, and report layer coverage. Writes data/_tokyo_candidates.json.
// Then shard-tokyo-verify.mjs slices it into shards for the 16-wide verify.
import fs from 'fs';
const TASKS = {
  tokyo_asakusa: 'wpqqac4ui', tokyo_shibuya: 'wbii7e25g',
  tokyo_suidobashi: 'wlblp9jb4', tokyo_shinjuku: 'w2isn7y8o',
};
const DIR = '/tmp/claude-0/-home-user-fkti-dining-app/3ad9a1de-30bc-5204-a99e-3293ca1d76eb/tasks';
const norm = s => (s || '').replace(/[\s　・（）()「」、,.。\-〜~！!？?本店店]/g, '').replace(/（.*?）|\(.*?\)/g, '').toLowerCase();

// Layer signal (only for reporting — verify decides the real category).
const LAYER = {
  vegan: /ヴィーガン|ビーガン|vegan|ベジ|veget|プラントベース|plant/i,
  gf: /グルテンフリー|gluten|米粉|celiac|セリアック/i,
  shojin: /精進|普茶|fucha|shojin|shōjin|buddhist|禅/i,
  ramen: /ラーメン|らーめん|ramen|つけ麺|まぜそば|油そば|担々|中華そば/i,
  mom_pop: /老舗|個人店|食堂|定食|甘味|喫茶|est\.|創業|昭和/i,
};

const all = [];
for (const [id, task] of Object.entries(TASKS)) {
  const f = `${DIR}/${task}.output`;
  if (!fs.existsSync(f)) { console.log(`!! missing ${id} (${f})`); continue; }
  const j = JSON.parse(fs.readFileSync(f, 'utf8'));
  const cands = (j.result && j.result.candidates) || [];
  console.log(`${id}: ${cands.length} raw candidates | logs: ${(j.logs || []).slice(-1)[0] || ''}`);
  for (const c of cands) all.push({ ...c, circle: id });
}

// Dedup KEY: Tabelog numeric id when present (collapses romaji-variant names that share a
// listing, e.g. 悦納 / 悦納（えつのう）/ injoy → 13249962), else normalized JA name.
const tabId = u => { const m = (u || '').match(/\/(\d{6,})\/?/); return m ? 't' + m[1] : null; };
const seen = new Map();
for (const c of all) {
  const k = tabId(c.tabelog_url) || ('n' + norm(c.name_ja));
  if (k === 'n') continue;
  if (!seen.has(k)) seen.set(k, c);
  else { const prev = seen.get(k); if (!prev.tabelog_url && c.tabelog_url) seen.set(k, c); }
}
const deduped = [...seen.values()];
const withUrl = deduped.filter(c => c.tabelog_url && /tabelog\.com/.test(c.tabelog_url));

const layerCount = {};
for (const c of deduped) {
  const hay = `${c.name_ja} ${c.cuisine} ${c.area}`;
  for (const [L, re] of Object.entries(LAYER)) if (re.test(hay)) layerCount[L] = (layerCount[L] || 0) + 1;
}

fs.writeFileSync('data/_tokyo_candidates.json', JSON.stringify(deduped, null, 0));
console.log('---');
console.log(`raw: ${all.length} | deduped: ${deduped.length} | with tabelog_url: ${withUrl.length}`);
console.log('layer signal (deduped):', JSON.stringify(layerCount));
console.log('by circle (deduped):', JSON.stringify(deduped.reduce((a, c) => (a[c.circle] = (a[c.circle] || 0) + 1, a), {})));
console.log('wrote data/_tokyo_candidates.json');
