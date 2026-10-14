// Merge duplicate records that plain string matching misses.
//
// The 3-mile sweep re-discovered shops the earlier passes already had but wrote
// their names differently, so the same restaurant sits on the map twice with
// DIFFERENT gf_confidence labels — sometimes a human-gated "dedicated" next to an
// ungated "options" pin a kilometre away.
//
// MATCHING RULE — exact ALIAS equality, and nothing looser.
// Records are named "日本語 (Romaji Reading)" while the light sweep wrote only one
// half, so we compare alias SETS: the part before the parenthetical, each
// slash-separated alternative inside it, and the whole name. Two records match
// when they share an alias exactly.
//
// Two looser rules were tried and both destroyed real data:
//   - substring containment merged 築地食堂源 with 築地食堂源記 (different
//     restaurants) and 麺屋武蔵 with 麺屋武蔵神山 (different branches of a chain);
//   - "same website within 1km" merged every distinct restaurant inside a single
//     hotel (Todaya's coffee shop with its dining room) and four separate shops in
//     Nagoya's Kinshachi Yokocho food street. A shared domain means shared
//     ownership, not shared identity.
//
// SURVIVOR SELECTION is a safety decision: a human-gated record always wins, then
// exact coordinates over a neighbourhood centroid, then depth. The survivor keeps
// its own gf_confidence — an ungated light record must never overwrite a tier Greg
// signed off.
//
//   node scripts/merge-dupes.mjs            # all cities
//   node scripts/merge-dupes.mjs tokyo
//   node scripts/merge-dupes.mjs --dry
import fs from 'node:fs';
import { CITIES, readCity, writeCity } from './lib-city.mjs';

const args = process.argv.slice(2);
const APPLY = !args.includes('--dry');
const cities = args.filter(a => !a.startsWith('--')).length
  ? args.filter(a => !a.startsWith('--')) : CITIES;

const norm = s => String(s).toLowerCase().replace(/[^a-z0-9぀-ヿ一-鿿]/g, '');

function aliases(name) {
  const s = String(name);
  const out = new Set();
  const m = s.match(/^([^（(]*)[（(]([^）)]*)[）)]/);
  if (m) {
    out.add(norm(m[1]));
    // Split ONLY on separators, never on nested brackets.
    //
    // Splitting on brackets was tried to catch "久兵衛 (Kyubei (Toba Kyubei))" and it
    // deleted six real Tokyo shops: "浅草むぎとろ 本店 (Asakusa Mugitoro (Honten))"
    // yielded the standalone alias "honten", and "(… (Suidobashi))" yielded
    // "suidobashi" — branch and district qualifiers that dozens of unrelated shops
    // share. Everything carrying one collapsed into a single group with one
    // survivor. A fragment of a parenthetical is not an identity.
    for (const alt of m[2].split(/[/／・]/)) out.add(norm(alt));
  }
  out.add(norm(s.replace(/[（(].*?[）)]/g, ' ')));
  out.delete('');
  return [...out].filter(a => a.length >= 4);
}

const km = (a, b) => {
  const R = 6371, dLat = (b.lat - a.lat) * Math.PI / 180, dLng = (b.lng - a.lng) * Math.PI / 180;
  const la = a.lat * Math.PI / 180, lb = b.lat * Math.PI / 180;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(la) * Math.cos(lb) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
};

const filled = v => v !== null && v !== undefined && v !== '' &&
  !(Array.isArray(v) && !v.length) &&
  !(typeof v === 'object' && !Array.isArray(v) && !Object.keys(v).length);

function fillFrom(t, d) {
  for (const [k, v] of Object.entries(d)) {
    if (['id', 'gf_confidence', 'gf_label', 'lat', 'lng', 'loc_approx'].includes(k)) continue;
    if (!filled(t[k]) && filled(v)) { t[k] = v; continue; }
    if (v && typeof v === 'object' && !Array.isArray(v) &&
        t[k] && typeof t[k] === 'object' && !Array.isArray(t[k])) fillFrom(t[k], v);
  }
}

// Least permissive first. Used when merging ungated duplicates with different
// tiers — the merge takes the most cautious of them.
const PERMISSIVENESS = { no: 0, ask: 1, options: 2, high: 3, dedicated: 4 };

const score = r => (r.safety?.owner_signoff?.decision ? 1e9 : 0) +
                   (r.loc_approx ? 0 : 1e6) + JSON.stringify(r).length;

// Verified duplicates that no safe heuristic catches. Kept as an explicit, tiny
// list because the alternative — loosening the matcher until it finds them — is
// what deleted six real shops. Each entry is a pair confirmed by identical
// coordinates, identical website AND an identical menu.
const KNOWN_DUPLICATES = [
  { city: 'toba', keep: 'toba_kyubei_toba_kyubei', drop: 'toba_toba_kyubei',
    why: 'same coordinates (34.482834,136.840759), same website, same Tabelog id 24005241, identical 41-item menu' },
  // Shared-Tabelog-listing pairs (launch item A4): same listing, same name, same
  // spot. Chain branches that merely share a listing (UNO, MOON and BACK, GYUMON)
  // are deliberately NOT here.
  { city: 'kyoto', keep: 'ChIJB8bj1TgIAWARYTFb5MDADmo', drop: 'vm_mamezen_tonyu_ramen_senm',
    why: 'A4 2026-10-14: both cite Tabelog 26013352 and sit 3m apart' },
  { city: 'kyoto', keep: 'ChIJxWDbqAGqAWARVFKptreTKe8', drop: 'vm_tenryuji_shigetsu',
    why: 'A4 2026-10-14: both cite Tabelog 26000923 and sit 0m apart, same website' },
  { city: 'kyoto', keep: 'ChIJ_cQoofkHAWARZ3I0NaiOmjg', drop: 'vm_izusen_daijiin_ten',
    why: 'A4 2026-10-14: both cite Tabelog 26001216 and sit 0m apart' },
  { city: 'kyoto', keep: 'ChIJn0VGzaqrAWARfIOzZHUv7m8', drop: 'kyr_ramen_arashiyama_chikuri',
    why: 'A4 2026-10-14: both cite Tabelog 26040503 and sit 0m apart' },
  { city: 'kyoto', keep: 'ChIJt7_M95IIAWAREGx8byEDpY4', drop: 'vm_kerala',
    why: 'A4 2026-10-14: both cite Tabelog 26001489 and sit 0m apart' },
  { city: 'kyoto', keep: 'mp_grill_fukuya_coffee_gril', drop: 'mp_coffee_grill_fukuya',
    why: 'A4 2026-10-14: both cite Tabelog 26004641 and sit 0m apart, same website' },
  { city: 'kyoto', keep: 'kyr_ramen_ya_akihide', drop: 'kyr_akihide',
    why: 'A4 2026-10-14: both cite Tabelog 26002155 and sit 0m apart' },
  { city: 'kyoto', keep: 'kyr_honke_daiichi_asahi_hont', drop: 'kyr_honke_daiichi_asahi_taka',
    why: 'A4 2026-10-14: both cite Tabelog 26000873 and sit 0m apart, same website' },
  { city: 'kyoto', keep: 'kyr_nekomata', drop: 'kyr_abura_soba_nekomata',
    why: 'A4 2026-10-14: both cite Tabelog 26021980 and sit 0m apart, same website' },
  { city: 'kyoto', keep: 'kyr_nekomata', drop: 'kyr_kyo_kiyomizu_abura_soba_',
    why: 'A4 2026-10-14: both cite Tabelog 26021980 and sit 0m apart, same website' },
  { city: 'kyoto', keep: 'kyr_chuugokusai_taihou', drop: 'kyr_chuka_ryori_taiho',
    why: 'A4 2026-10-14: both cite Tabelog 26003254 and sit 0m apart' },
  { city: 'kyoto', keep: 'kyr_chuka_no_sakai_honten', drop: 'kyr_shin_omiya_chuka_no_saka',
    why: 'A4 2026-10-14: both cite Tabelog 26001225 and sit 0m apart' },
  { city: 'kyoto', keep: 'kyr_abura_soba_yumin', drop: 'kyr_yumin',
    why: 'A4 2026-10-14: both cite Tabelog 26043824 and sit 0m apart' },
  { city: 'kyoto', keep: 'kyr_komugi_no_kirameki_kamik', drop: 'kyr_komugi_no_kirameki_komug',
    why: 'A4 2026-10-14: both cite Tabelog 26028251 and sit 0m apart, same website' },
  { city: 'kyoto', keep: 'kyr_houmairou_kyoto_honten', drop: 'kyr_houmairou',
    why: 'A4 2026-10-14: both cite Tabelog 26040920 and sit 0m apart, same website' },
  { city: 'kyoto', keep: 'kyr_kirin_en', drop: 'kyr_kirin_en_2',
    why: 'A4 2026-10-14: both cite Tabelog 26009229 and sit 0m apart, same website' },
  { city: 'kyoto', keep: 'ChIJtzlktVYJAWARAkwEl_5RVrs', drop: 'ChIJRwWv6QUJAWARjodp1fyqj1I',
    why: 'C9 2026-10-14: both resolve to Tabelog 26044524 (くら寿司 京都寺町通 Plus-type store), 0m apart' },
  { city: 'nara', keep: 'nara_gen', drop: 'nara_gen_soba',
    why: 'A4 2026-10-14: both cite Tabelog 29000052 and sit 0m apart, same website' },
  { city: 'kanazawa', keep: 'kz_gyohan', drop: 'kz_kaga_ryori_gyohan',
    why: 'A4 2026-10-14: both cite Tabelog 17000340 and sit 16m apart, same website' },
  { city: 'kanazawa', keep: 'kz_kissa_nobar', drop: 'kz_coffee_dokoro_nobaru',
    why: 'A4 2026-10-14: both cite Tabelog 17004340 and sit 0m apart, same website' },
  { city: 'hiroshima', keep: 'hiro_kissa_saeki_organic_cafe', drop: 'hiro_organic_cafe_kitchen_kis',
    why: 'A4 2026-10-14: both cite Tabelog 34019567 and sit 0m apart' },
  { city: 'hiroshima', keep: 'hiro_kappo_ryokan_oshokuji_ya', drop: 'hiro_yamaichi_bekkan',
    why: 'A4 2026-10-14: both cite Tabelog 34007527 and sit 0m apart, same website' },
  { city: 'hiroshima', keep: 'hiro_shirunashi_tantanmen_mus', drop: 'hiro_shirunashi_tantanmen_mus_2',
    why: 'A4 2026-10-14: both cite Tabelog 34018187 and sit 0m apart, same website' },
  { city: 'hiroshima', keep: 'hiro_chuka_soba_uguisu', drop: 'hiro_uguisu_chuka_soba',
    why: 'A4 2026-10-14: both cite Tabelog 34002177 and sit 0m apart, same website' },
  { city: 'hiroshima', keep: 'hiro_kanna_shizenshoku_restau', drop: 'hiro_shizenshoku_restaurant_k',
    why: 'A4 2026-10-14: both cite Tabelog 34032552 and sit 0m apart' },
  { city: 'hiroshima', keep: 'hiro_wafu_kissa_lawn_tonkatsu', drop: 'hiro_tonkatsu_lawn_lown',
    why: 'A4 2026-10-14: both cite Tabelog 34007814 and sit 0m apart' },
  { city: 'nagoya', keep: 'nagoya_soba_dokoro_kikyo', drop: 'nagoya_kikyo',
    why: 'A4 2026-10-14: both cite Tabelog 23033878 and sit 0m apart, same website' },
  { city: 'nagano', keep: 'nagano_fujikian', drop: 'nagano_fujikian_monzen_sobadoko',
    why: 'A4 2026-10-14: both cite Tabelog 20001418 and sit 31m apart, same website' },
  { city: 'nagano', keep: 'nagano_pa_tisserie_heigoro_hont', drop: 'nagano_patisserie_heigoro_honte',
    why: 'A4 2026-10-14: both cite Tabelog 20015759 and sit 0m apart, same website' },
  { city: 'nagano', keep: 'nagano_togakure_tsukiya_monzen', drop: 'nagano_soba_diner_togakure_tsuk',
    why: 'A4 2026-10-14: both cite Tabelog 20027968 and sit 0m apart' },
  { city: 'himeji', keep: 'himeji_banshu_himeji_honmachi_t', drop: 'himeji_tamagoya',
    why: 'A4 2026-10-14: both cite Tabelog 28014985 and sit 0m apart' },
];

const review = [];
const allSurvivors = new Map();
let grandTotal = 0;

for (const city of cities) {
  const j = readCity(city);
  const places = j.places;
  const parent = new Map(places.map(p => [p.id, p.id]));
  const find = x => { while (parent.get(x) !== x) x = parent.get(x); return x; };
  const union = (a, b) => { const ra = find(a), rb = find(b); if (ra !== rb) parent.set(ra, rb); };

  const alias = new Map(places.map(p => [p.id, aliases(p.name)]));
  for (let i = 0; i < places.length; i++) {
    for (let k = i + 1; k < places.length; k++) {
      const a = places[i], b = places[k];
      const A = alias.get(a.id), B = alias.get(b.id);
      if (!A.some(x => B.includes(x))) continue;
      const d = km(a, b);
      if (d < 2) union(a.id, b.id);
      else review.push({ city, reason: `alias match but ${d.toFixed(1)}km apart`,
                         ids: [a.id, b.id], names: [a.name, b.name] });
    }
  }

  // SIGNAL: an identical menu at the same coordinates.
  //
  // Two records sharing a byte-identical item list of 4+ dishes AND sitting
  // within 50m are the same shop — no two businesses at one address publish the
  // same menu. This catches what exact-alias matching cannot: 「セアブラノ神 壬生本店」
  // vs 「らーめん セアブラノ神 壬生本店」 and 「矢場とん 名古屋城金シャチ横丁店」 vs
  // 「名古屋名物 みそかつ 矢場とん 名古屋城 金シャチ横丁店」, where one record simply
  // carries a descriptive prefix.
  //
  // Unlike every name heuristic tried here, this cannot over-merge: chain
  // branches share a menu but not an address (Ramen Tengu's two shops publish
  // the same list 3.9km apart and are correctly left alone).
  {
    const mp = `data/${city}_menus.json`;
    if (fs.existsSync(mp)) {
      const menus = JSON.parse(fs.readFileSync(mp, 'utf8'));
      const sig = new Map();
      for (const p of places) {
        const items = (menus[p.id] || {}).items || [];
        if (items.length < 4) continue;
        const k = items.map(i => String(i.ja || i.en || '').trim()).sort().join('|');
        if (!sig.has(k)) sig.set(k, []);
        sig.get(k).push(p);
      }
      for (const group of sig.values()) {
        if (group.length < 2) continue;
        for (let i = 0; i < group.length; i++)
          for (let j = i + 1; j < group.length; j++)
            if (km(group[i], group[j]) < 0.05) union(group[i].id, group[j].id);
      }
    }
  }

  // fold in the verified pairs before grouping
  for (const kd of KNOWN_DUPLICATES) {
    if (kd.city !== city) continue;
    const has = id => places.some(p => p.id === id);
    if (has(kd.keep) && has(kd.drop)) union(kd.drop, kd.keep);
  }

  const groups = new Map();
  for (const p of places) {
    const r = find(p.id);
    if (!groups.has(r)) groups.set(r, []);
    groups.get(r).push(p);
  }

  const drop = new Set();
  const survivorOf = new Map();   // droppedId -> survivingId, for re-keying menus
  let merged = 0;
  for (const [, rs] of groups) {
    if (rs.length < 2) continue;
    rs.sort((a, b) => score(b) - score(a));
    const [keep, ...rest] = rs;
    const tierConflict = new Set(rs.map(r => r.gf_confidence)).size > 1;
    for (const d of rest) { fillFrom(keep, d); drop.add(d.id); survivorOf.set(d.id, keep.id); allSurvivors.set(d.id, keep.id); }

    if (tierConflict) {
      const gated = keep.safety?.owner_signoff?.decision;
      const before = keep.gf_confidence;
      // A human gate is final and wins outright. Otherwise adopt the MOST CAUTIOUS
      // tier in the group: the richest record wins the content, but merging must
      // never raise a safety label. A false "safe" costs more than a false "ask",
      // and depth is not evidence about wheat.
      if (!gated) {
        const safest = rs.reduce((a, b) => (PERMISSIVENESS[a.gf_confidence] <= PERMISSIVENESS[b.gf_confidence] ? a : b));
        if (safest.gf_confidence !== before) {
          keep.gf_confidence = safest.gf_confidence;
          keep.gf_label = safest.gf_label;
          keep.gf_detail = safest.gf_detail || keep.gf_detail;
        }
      }
      keep.merge_note = `Merged ${rest.length} duplicate record(s): ` +
        rest.map(d => `${d.id} (${d.gf_confidence})`).join(', ') +
        (gated
          ? `. Kept this record's tier "${keep.gf_confidence}" (human-gated).`
          : before === keep.gf_confidence
            ? `. Tier "${keep.gf_confidence}" was already the most cautious in the group.`
            : `. Tier lowered "${before}" → "${keep.gf_confidence}" — the most cautious in the group, since a merge must never raise a safety label.`);
    }
    merged++;
    console.log(`${city}: ${rs.length} -> ${keep.id} [${keep.gf_confidence}${keep.safety?.owner_signoff?.decision ? ' GATED' : ''}] ${keep.name.slice(0, 42)}`);
    rest.forEach(d => console.log(`      drop ${d.id} [${d.gf_confidence}] ${d.name.slice(0, 36)}`));
  }

  if (APPLY && drop.size) {
    const before = places.length;
    j.places = places.filter(p => !drop.has(p.id));
    writeCity(city, j);
    grandTotal += drop.size;
    console.log(`${city}: ${before} -> ${j.places.length} (${merged} groups merged)\n`);
    // Re-key menus rather than deleting them: the menu belongs to the shop, not
    // to whichever duplicate record happened to hold it. Only drop an entry when
    // the survivor already has its own.
    const mp = `data/${city}_menus.json`;
    if (fs.existsSync(mp)) {
      const m = JSON.parse(fs.readFileSync(mp, 'utf8'));
      let moved = 0, dropped = 0;
      for (const [dropId, keepId] of survivorOf) {
        if (!m[dropId]) continue;
        if (!m[keepId]) { m[keepId] = m[dropId]; moved++; }
        else dropped++;
        delete m[dropId];
      }
      if (moved || dropped) {
        fs.writeFileSync(mp, JSON.stringify(m, null, 1));
        console.log(`${city}: menus re-keyed to survivor ${moved}, redundant dropped ${dropped}`);
      }
    }
  }
}

fs.writeFileSync('data/_dupe_review.json', JSON.stringify(review, null, 1));

// Persist droppedId -> survivingId so LATER pipeline steps can follow a record
// that moved. Research files are keyed by the id that existed when the research
// ran; without this, a menu whose record was merged away is reported unmatched
// and silently not applied.
// Cumulative, not per-run: a merge that happened on an earlier invocation still
// needs to be followable, and the pipeline is idempotent so a later run finds
// nothing left to merge and would otherwise write an empty map.
{
  const f = 'data/_dupe_survivors.json';
  const prev = fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : {};
  const next = { ...prev, ...Object.fromEntries(allSurvivors) };
  // collapse chains: A->B, B->C becomes A->C
  for (const k of Object.keys(next)) {
    let v = next[k], hops = 0;
    while (next[v] && hops++ < 10) v = next[v];
    next[k] = v;
  }
  fs.writeFileSync(f, JSON.stringify(next, null, 1));
}
console.log(`\n${grandTotal} duplicate records removed; ${review.length} far-apart alias matches left for manual review -> data/_dupe_review.json`);
