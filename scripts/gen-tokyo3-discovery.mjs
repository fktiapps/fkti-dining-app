// Neighborhood-scale discovery for the expanded Tokyo (five 3-mile circles ≈ all central Tokyo).
// Sweeps ~50 central-Tokyo neighborhoods × 6 layers via Haiku WebSearch agents. Sharded so each
// shard is one Workflow launch (args = a shard of angles). Verify + build reuse the tokyo pipeline.
// Writes: scripts/tokyo3-discover-workflow.js, data/_tokyo3_shards.json (the args to launch with).
import fs from 'fs';

// Neighborhoods covering the union of the 5 circles (Tokyo Stn / Asakusa / Shibuya / Suidōbashi / Shinjuku).
const NBH = [
  '東京駅 丸の内', '日本橋', '銀座', '八重洲 京橋', '築地', '人形町 茅場町', '神田', '秋葉原', '御茶ノ水', '神保町',
  '上野', '御徒町 湯島', '浅草', '合羽橋 田原町', '蔵前', '浅草橋', '両国', '錦糸町', '清澄白河', '門前仲町',
  '後楽園 水道橋', '飯田橋', '神楽坂', '本郷', '根津 千駄木', '白山 春日',
  '新宿', '新宿三丁目', '四谷', '市ヶ谷', '大久保 新大久保', '高田馬場', '早稲田', '東中野', '代々木', '中野',
  '渋谷', '原宿', '表参道 青山', '恵比寿', '代官山', '中目黒', '広尾', '六本木', '赤坂', '麻布十番', '神泉 池尻',
  '新橋', '虎ノ門', '目黒',
];
const LAYERS = [
  a => `${a} 東京 グルテンフリー 対応 レストラン 食べログ`,
  a => `${a} 東京 ヴィーガン ベジタリアン カフェ 食べログ`,
  a => `${a} 東京 ラーメン つけ麺 まぜそば 名店 食べログ`,
  a => `${a} 東京 老舗 個人店 食堂 定食 名店 食べログ`,
  a => `${a} 東京 蕎麦 天ぷら 郷土料理 名物 食べログ`,
  a => `${a} Tokyo restaurant gluten free vegan celiac`,
];

// Build angles = every neighborhood × layer, tagged with the neighborhood for prompt context.
const allAngles = [];
for (const nb of NBH) for (const L of LAYERS) allAngles.push({ nb, q: L(nb) });

// Shard into groups so each Workflow launch is bounded/resumable.
const SHARD_NBH = 6; // neighborhoods per shard → 36 angles/shard
const shards = [];
for (let i = 0; i < NBH.length; i += SHARD_NBH) {
  const nbs = NBH.slice(i, i + SHARD_NBH);
  const angles = allAngles.filter(a => nbs.includes(a.nb));
  shards.push({ shard: shards.length, nbs, angles });
}

const DISCOVERY_SCHEMA = { type: 'object', additionalProperties: false, properties: { candidates: { type: 'array', items: { type: 'object', additionalProperties: false, properties: { name_ja: { type: 'string' }, area: { type: 'string' }, cuisine: { type: 'string' }, tabelog_url: { type: 'string' } }, required: ['name_ja', 'area', 'cuisine', 'tabelog_url'] } } }, required: ['candidates'] };

const script = `export const meta = {
  name: 'tokyo3-discover',
  description: 'Neighborhood-scale central-Tokyo dining discovery (Haiku); args = { shard, angles }',
  phases: [{ title: 'Discover' }],
}
const DISCOVERY_SCHEMA = ${JSON.stringify(DISCOVERY_SCHEMA)};
const norm = s => (s || '').replace(/[\\s　・（）()「」、,.。\\-本店店]/g, '').toLowerCase();
const A = (typeof args === 'string' ? JSON.parse(args) : args) || {};
const ANGLES = A.angles || [];

const prompt = (nb, q) => \`Find genuinely notable DINING spots in the \${nb} area of central Tokyo. Prefer: gluten-free-friendly, vegan/vegetarian/shōjin, celebrated ramen/tsukemen, and beloved mom-&-pop / old-guard local places, plus signature local specialties. Search the web: \${q}
Stay within walking distance of \${nb} (central Tokyo). Return up to 8 places.
For each: name_ja (exact Japanese name), area (district + nearest station), cuisine, tabelog_url (if seen, else "").\`;

phase('Discover')
const out = (await parallel(ANGLES.map((a, i) =>
  () => agent(prompt(a.nb, a.q), { label: 's' + A.shard + ' ' + a.nb.slice(0,6) + ' #' + i, phase: 'Discover', schema: DISCOVERY_SCHEMA, model: 'haiku' })
    .then(r => (r && r.candidates) || []).catch(() => [])))).flat();

// dedupe within the shard
const seen = new Set(), cands = [];
for (const c of out) { const k = norm(c.name_ja); if (!k || seen.has(k)) continue; seen.add(k); cands.push(c); }
log('shard ' + A.shard + ': ' + ANGLES.length + ' angles → ' + cands.length + ' unique candidates');
return { shard: A.shard, count: cands.length, candidates: cands };
`;
fs.writeFileSync('scripts/tokyo3-discover-workflow.js', script);
fs.writeFileSync('data/_tokyo3_shards.json', JSON.stringify(shards.map(s => ({ shard: s.shard, nbs: s.nbs, angles: s.angles })), null, 1));
console.log(`wrote tokyo3-discover-workflow.js | ${NBH.length} neighborhoods × ${LAYERS.length} layers = ${allAngles.length} angles → ${shards.length} shards (${SHARD_NBH} nbh each)`);
shards.forEach(s => console.log(`  shard ${s.shard}: ${s.nbs.join(' / ')} (${s.angles.length} angles)`));
