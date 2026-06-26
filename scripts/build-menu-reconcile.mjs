// Reconcile place-level GF/VEGAN from the menu pass, MEAL-BASED (Greg, 2026-06-25):
// "options" means a celiac/vegan can get a real MEAL here — not a few tokens (rice + tea).
// A substantial GF/vegan DISH (main/donburi/set/curry…) clears it; sides/drinks/sweets don't.
// Resets from a saved baseline first so it's idempotent + re-tunable. Upgrade-only.
// SAFETY: GF caps at "options" — never dedicated/high (the Celiac-safe filter keeps only those).
// Usage: node scripts/build-menu-reconcile.mjs <city>
import fs from 'fs';
const city = process.argv[2];
if (!city) throw new Error('usage: node scripts/build-menu-reconcile.mjs <city>');
const d = JSON.parse(fs.readFileSync(`data/${city}.json`, 'utf8'));
const menus = JSON.parse(fs.readFileSync(`data/${city}_menus.json`, 'utf8'));
const byId = new Map(d.places.map(p => [p.id, p]));
function ser(v){if(v===null)return 'null';if(Array.isArray(v))return '['+v.map(ser).join(', ')+']';if(typeof v==='object')return '{'+Object.entries(v).map(([k,val])=>JSON.stringify(k)+': '+ser(val)).join(', ')+'}';return JSON.stringify(v);}

// baseline (pre-reconcile diet fields) so re-runs derive cleanly
const baseFile = `data/_diet_baseline_${city}.json`;
let base;
if (fs.existsSync(baseFile)) base = JSON.parse(fs.readFileSync(baseFile, 'utf8'));
else { base = {}; for (const p of d.places) base[p.id] = { gf_confidence: p.gf_confidence, gf_label: p.gf_label, gf_detail: p.gf_detail, vegan_status: p.vegan_status, vegan_label: p.vegan_label, vegan_detail: p.vegan_detail }; fs.writeFileSync(baseFile, JSON.stringify(base)); }
for (const p of d.places) { const b = base[p.id]; if (b) Object.assign(p, { gf_confidence: b.gf_confidence, gf_label: b.gf_label, gf_detail: b.gf_detail, vegan_status: b.vegan_status, vegan_label: b.vegan_label, vegan_detail: b.vegan_detail }); }

const vrank = { no: 0, ask: 1, limited: 2, options: 3, full: 4 };
const vlabel = { full: 'Fully vegan', options: 'Vegan options', limited: 'Limited vegan options', ask: 'Vegan — ask', no: 'Not vegan' };

// "Is this menu item a real MEAL?" — a substantial dish, not a side/drink/sweet/plain-rice.
const MEAL = /main|entree|course|set\b|teishoku|定食|丼|donburi|rice bowl|curry|カレー|hot ?pot|nabe|鍋|grill|teppan|鉄板|焼|主菜|おかず|lunch|dinner|noodle|麺|ramen|そば|うどん|soba|udon|pasta|burger|sandwich|plate|sushi|寿司|鮨|bento|弁当|定番|ご飯もの|gohan/i;
const PERIPH = /drink|beverage|ドリンク|コーヒー|珈琲|coffee|\btea\b|茶|dessert|sweets|デザート|甘味|スイーツ|パフェ|cake|ケーキ|\bside|サイド|小鉢|副菜|pickle|漬|appetiz|前菜|snack|topping|トッピング|salad|サラダ/i;
const TRIV = /^(plain |steamed )?rice$|^白米|^白?ご?はん$|^ライス$|^ご?はん$|^tea$|water|^水$|edamame|枝豆|oolong|烏龍|miso soup|味噌汁|^pickles?$/i;
const isMeal = it => {
  if (PERIPH.test(it.section || '')) return false;
  if (TRIV.test((it.en || '').trim()) || TRIV.test((it.ja || '').trim())) return false;
  return MEAL.test(it.section || '') || MEAL.test(((it.en || '') + ' ' + (it.ja || '')));
};

let vUp = [], gUp = [];
for (const [id, m] of Object.entries(menus)) {
  const p = byId.get(id); if (!p) continue;
  const items = m.items || [];
  const gfMeals = items.filter(i => i.gf === 'gf' && isMeal(i)).length;
  const vgMeals = items.filter(i => i.vegan === 'vegan' && isMeal(i)).length;
  const vgItems = items.filter(i => i.vegan === 'vegan').length;
  const gfItems = items.filter(i => i.gf === 'gf').length;
  Object.assign(p, { menu_gf_meals: gfMeals, menu_vegan_meals: vgMeals, menu_gf_count: gfItems, menu_vegan_count: vgItems });

  // VEGAN: a vegan MEAL → options; vegan items but no full meal (can graze) → limited.
  let vt = vgMeals >= 1 ? 'options' : (vgItems >= 2 ? 'limited' : null);
  if (vt && (vrank[p.vegan_status] ?? 0) < vrank[vt]) {
    const was = p.vegan_status; p.vegan_status = vt; p.vegan_label = vlabel[vt];
    p.vegan_detail = (p.vegan_detail || '') + ` (Menu review: ${vgMeals} vegan meal${vgMeals === 1 ? '' : 's'}${vt === 'limited' ? `; ${vgItems} vegan items but no full main` : ''}.)`;
    vUp.push(`${was} → ${vt}  [${vgMeals} meals / ${vgItems} items]  ${p.name}`);
  }
  // GF: a real GF MEAL → "options" (cap). Tokens (rice+tea) don't count. Never celiac-safe from menu.
  if (gfMeals >= 1 && ['no', 'ask'].includes(p.gf_confidence)) {
    const was = p.gf_confidence; p.gf_confidence = 'options'; p.gf_label = 'Some GF options';
    p.gf_detail = (p.gf_detail || '') + ` (Menu review: ${gfMeals} gluten-free meal option${gfMeals === 1 ? '' : 's'} on the documented menu — but the kitchen is NOT certified GF; confirm cross-contamination, and for grilled/teppan items ask for a freshly-cleaned grill; if you can't be sure it's clean, don't risk it.)`;
    gUp.push(`${was} → options  [${gfMeals} GF meals]  ${p.name}`);
  }
}
fs.writeFileSync(`data/${city}.json`, ser(d));
for (const f of ['sw.js', 'index.html']) { let s = fs.readFileSync(f, 'utf8'); const mm = s.match(/dcd-v(\d+)/); if (mm) s = s.split(`dcd-v${mm[1]}`).join(`dcd-v${Number(mm[1]) + 1}`); fs.writeFileSync(f, s); }
console.log(`${city}: vegan upgraded ${vUp.length}, GF→options ${gUp.length} (meal-based; reset from baseline; GF capped at "options"). SW bumped.`);
console.log('VEGAN:'); vUp.forEach(u => console.log('  ' + u));
console.log('GF→options:'); gUp.forEach(u => console.log('  ' + u));
