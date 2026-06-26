import fs from 'fs';
const d = JSON.parse(fs.readFileSync('data/kyoto.json', 'utf8'));

// Controlled cuisine vocabulary. Ordered rules — first match wins (specific first).
const RULES = [
  ['unagi',      /unagi|鰻|eel|うなぎ/i],
  ['sushi',      /sushi|寿司|鮨|conveyor/i],
  ['katsu',      /tonkatsu|とんかつ|katsudon|カツ|cutlet/i],
  ['tempura',    /tempura|天ぷら|天麩羅/i],
  ['yakitori',   /yakitori|焼き鳥|焼鳥|kushiyaki|kushikatsu|kushiage|串揚|串焼/i],
  ['okonomiyaki',/okonomiyaki|お好み焼|鉄板|teppan|まんぼ/i],
  ['oden',       /oden|おでん|関東煮/i],
  ['gyoza',      /gyoza|餃子|ぎょうざ|ギョーザ/i],
  ['tofu',       /豆腐|tofu|湯葉|yuba/i],
  ['ramen',      /ramen|ラーメン|中華そば|町中華|中華料理|chinese|chūka|chuka/i],
  ['udon_soba',  /soba|udon|そば|うどん|蕎麦/i],
  ['shojin',     /shojin|shōjin|精進|temple|buddhist/i],
  ['kaiseki',    /kaiseki|会席|懐石|kapp[oōう]|割烹|京料理|kyoto cuisine/i],
  ['kissaten',   /kissaten|喫茶|純喫茶|coffee|caf[eé]|珈琲|pancake|パンケーキ/i],
  ['yoshoku',    /yoshoku|yōshoku|洋食|western|hamburg|ハンバーグ|オムライス|グリル|grill|bistro|フレンチ|french|italian|pasta|カレー|curry/i],
  ['obanzai',    /obanzai|おばんざい|home-?style|家庭料理/i],
  ['donburi',    /donburi|丼|どんぶり|rice bowl/i],
  ['izakaya',    /izakaya|居酒屋|sake bar|日本酒バー/i],
  ['shokudo',    /shokud|食堂|定食|teishoku|diner|cafeteria|canteen|麺類/i],
  ['sweets',     /sweets|bakery|パン|ケーキ|dessert|パフェ|chocolat|sweet/i],
];

const LABELS = {
  udon_soba:'Udon / Soba', ramen:'Ramen / Chūka', donburi:'Donburi', shokudo:'Shokudō',
  katsu:'Tonkatsu / Katsu', tempura:'Tempura', kaiseki:'Kaiseki / Kappō', sushi:'Sushi',
  yakitori:'Yakitori / Kushiyaki', okonomiyaki:'Okonomiyaki / Teppan', gyoza:'Gyoza',
  unagi:'Unagi', curry:'Curry', kissaten:'Kissaten', yoshoku:'Yōshoku', obanzai:'Obanzai',
  izakaya:'Izakaya', tofu:'Tofu / Yuba', shojin:'Shōjin', sweets:'Sweets / Bakery',
  oden:'Oden', other:'Other',
};

function classify(p) {
  const hay = `${p.cuisine || ''} ${p.name || ''}`;
  for (const [type, re] of RULES) if (re.test(hay)) return type;
  // category fallback for places whose cuisine text didn't match a keyword
  if (p.category === 'SHOJIN') return 'shojin';
  // dedicated vegan/veg with no cuisine keyword → 'other' (their dietary category carries them)
  return 'other';
}

const dist = {};
const others = [];
for (const p of d.places) {
  p.cuisine_type = classify(p);
  dist[p.cuisine_type] = (dist[p.cuisine_type] || 0) + 1;
  if (p.cuisine_type === 'other') others.push(`${p.name}  [${p.category}]  cuisine="${p.cuisine}"`);
}

// compact serializer (uniform, matches the "{"k": v}" style used throughout)
function ser(v) {
  if (v === null) return 'null';
  if (Array.isArray(v)) return '[' + v.map(ser).join(', ') + ']';
  if (typeof v === 'object') return '{' + Object.entries(v).map(([k, val]) => JSON.stringify(k) + ': ' + ser(val)).join(', ') + '}';
  return JSON.stringify(v);
}
fs.writeFileSync('data/kyoto.json', ser(d));

// re-validate
const check = JSON.parse(fs.readFileSync('data/kyoto.json', 'utf8'));
console.log('places:', check.places.length, '| all have cuisine_type:', check.places.every(p => p.cuisine_type));
console.log('distribution:');
Object.entries(dist).sort((a, b) => b[1] - a[1]).forEach(([k, n]) => console.log(`  ${String(n).padStart(3)}  ${LABELS[k]} (${k})`));
console.log('\n"Other" (' + others.length + ') — need review:');
others.forEach(o => console.log('  ' + o));
fs.writeFileSync('scripts/cuisine-labels.json', JSON.stringify(LABELS, null, 1));
