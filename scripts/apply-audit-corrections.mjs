// Targeted corrections for factual errors the adversarial pass surfaced.
// These are not tier changes (apply-gf-audit.mjs did those) — they are places
// where the record TEXT still asserts something the evidence disproves, or links
// somewhere it must not.
import fs from 'node:fs';
import { readCity, writeCity } from './lib-city.mjs';

const DATE = '2026-08-19';
const edits = [];
const find = (places, q) => places.filter(p => p.name.includes(q));

// ---------------------------------------------------------------- NARA
{
  const j = readCity('nara');
  for (const r of find(j.places, 'PUKKU')) {
    // The record claimed "No wheat is baked on premises". PUKKU's own minne
    // ingredient listing shows 薄力粉 in its cookies, galettes and butter-sand
    // cookies, and its tins declare 卵・乳・小麦・くるみ. Wheat is baked daily
    // in the same small kitchen as the rice-flour chiffon.
    r.gf_detail = r.gf_detail.replace(
      /No wheat is baked on premises, so cross-contact risk from flour is low; however/,
      'Wheat IS baked on the premises — the shop’s own ingredient listing shows 薄力粉 in its cookies, galettes bretonnes and butter-sand cookies, and its tins declare 卵・乳・小麦・くるみ — so flour cross-contact is a live risk in this small kitchen. The GF wording is scoped to the chiffon dough only. In addition,');
    r.gf_detail = r.gf_detail.replace(/ hence high rather than dedicated\./, ' hence options.');
    edits.push('nara/PUKKU: removed false "no wheat baked on premises" claim');
  }
  writeCity('nara', j);
}

// ---------------------------------------------------------------- NAGANO
{
  const j = readCity('nagano');
  for (const r of find(j.places, 'いろは堂')) {
    // The only record in the whole dataset carrying a GF tier above "ask" on an
    // entirely empty safety block: no cross-contamination finding, no soy-sauce
    // finding, no staff-handling note, no positives, no website. Its own gf_detail
    // asks the reader to "confirm which items are the GF version" — which is the
    // definition of "ask", not "options".
    //
    // An oyaki shop is exactly where this matters. The wheat dough is worked on the
    // same board and steamed in the same steamer as anything else; "offers a
    // gluten-free option" from an unsourced note tells a celiac nothing about
    // whether it is safe for them. Downgrades are always safe (REVIEW_PROTOCOL.md:
    // a false "safe" can glutenate a kid, a false "ask" makes them double-check),
    // so this drops until someone can evidence it.
    if (r.gf_confidence === 'options') {
      r.gf_confidence = 'ask';
      r.gf_label = 'GF — ask';
      r.gf_detail = `[Downgraded ${DATE}] No evidence behind the previous "some GF options" label — ` +
        'the record carried no cross-contamination finding, no soy-sauce finding, no staff-handling ' +
        'note and no source of any kind. ' + r.gf_detail +
        ' Oyaki dough is worked and steamed alongside wheat dough, so treat the GF item as unverified ' +
        'until the shop confirms how it is made and kept separate.';
      edits.push('nagano/いろは堂: gf options -> ask (tier rested on no evidence at all)');
    }
  }
  writeCity('nagano', j);
}

// ---------------------------------------------------------------- KANAZAWA
{
  const j = readCity('kanazawa');
  for (const r of find(j.places, 'Conconto')) {
    r.gf_detail = r.gf_detail.replace(
      /A fully plant-based patisserie and cafe that makes every item from rice flour, beans and other plant ingredients — no wheat is used or baked anywhere on site\./,
      'A rice-flour patisserie and cafe. The 2017 all-plant, 7-allergen-free description below is SUPERSEDED: the shop’s own 2025-10-02 PR Times release announces an 「Oishii糀スイーツ」 line built with 脱脂粉乳, 生クリーム and 卵, so dairy and egg are now handled in that kitchen.');
    r.gf_detail = r.gf_detail.replace(
      /Because wheat, buckwheat and peanuts are never present in the kitchen, cross-contact risk is very low; still worth confirming with staff on the day for the most sensitive celiacs\./,
      'That kitchen no longer excludes all seven designated allergens, so the "nothing risky is ever present" inference no longer holds. Confirm the specific item with staff.');
    // vegan_status "full" is now factually wrong
    if (r.vegan_status === 'full') {
      r.vegan_status = 'options';
      r.vegan_label = 'Some vegan options';
      r.vegan_detail = `[Corrected ${DATE}] No longer fully vegan: the shop's own 2025-10-02 release introduces an 「Oishii糀スイーツ」 range using 脱脂粉乳 (skim milk powder), 生クリーム (cream) and 卵 (egg). The original rice-and-bean range appears to continue, so vegan items exist — but the menu as a whole is not vegan. Ask which line an item belongs to. ` + r.vegan_detail;
      edits.push('kanazawa/Conconto: vegan_status full -> options (dairy + egg range added 2025)');
    }
    edits.push('kanazawa/Conconto: removed superseded "no wheat anywhere on site" claim');
  }
  writeCity('kanazawa', j);
}

// ---------------------------------------------------------------- KYOTO
{
  const j = readCity('kyoto');

  for (const r of find(j.places, 'Senza X')) {
    // www.senza-x.com lapsed and now serves a Korean gambling site (verified:
    // <html lang="ko">, title 토토사이트...). Never link it from the app.
    r.website = '';
    r.notes = `[${DATE}] Reported 休業 (closed indefinitely, staff shortage) on Tabelog, and the former official domain senza-x.com has lapsed — it now hosts an unrelated Korean gambling site and must not be linked. Verify the shop has reopened before relying on this entry. ` + (r.notes || '');
    edits.push('kyoto/Senza X: cleared hijacked lapsed domain + closure note');
  }

  for (const r of find(j.places, 'Toshoan')) {
    // The 2026-07-02 audit flagged that nothing inside the record distinguished
    // this rice-flour confectionery from a same-romaji soba house.
    if (!r.name.includes('都松庵')) { r.name = '都松庵 (Toshoan)'; edits.push('kyoto/Toshoan: added 都松庵 kanji so the record is self-disambiguating'); }
    if (!r.website) { r.website = 'https://www.toshoan.com/'; edits.push('kyoto/Toshoan: added official website'); }
  }

  // Vegan Restaurant F and 菜食料理エッフェ are one business ~12m apart, same site.
  const dupes = j.places.filter(p => /naturale-f\.com/.test(p.website || ''));
  if (dupes.length === 2) {
    dupes.sort((a, b) => JSON.stringify(b).length - JSON.stringify(a).length);
    const [keep, drop] = dupes;
    for (const [k, v] of Object.entries(drop)) {
      const empty = keep[k] === null || keep[k] === undefined || keep[k] === '' ||
        (Array.isArray(keep[k]) && !keep[k].length);
      if (empty && v) keep[k] = v;
    }
    if (!keep.name.includes('エッフェ')) keep.name = '菜食料理エッフェ / Vegan Restaurant F';
    keep.gf_detail = `[${DATE}] The shop's own site states 「肉、魚、乳製品、卵、白砂糖、パスタ用古代小麦粉以外の小麦粉は不使用です」 — i.e. no wheat flour EXCEPT the ancient-wheat (spelt) flour used for the pasta. Spelt contains gluten, so the pasta is not celiac-safe. ` + (keep.gf_detail || '');
    j.places = j.places.filter(p => p.id !== drop.id);
    edits.push(`kyoto: merged duplicate ${drop.id} into ${keep.id} (菜食料理エッフェ / Vegan Restaurant F) + spelt-pasta warning`);
  }
  writeCity('kyoto', j);
}

// ---------------------------------------------------------------- HIMEJI
{
  const j = readCity('himeji');
  for (const r of find(j.places, 'Miel')) {
    if (r.website && r.website.includes('miel-yakigashi.com')) {
      r.website = 'https://lumierellc.net/lumieres-sweets/';   // verified live; old domain fails DNS
      edits.push('himeji/Miel: replaced dead domain with live operator page');
    }
  }
  writeCity('himeji', j);
}

// ---------------------------------------------------------------- NAGOYA
{
  const j = readCity('nagoya');
  for (const r of find(j.places, 'Creperiz')) {
    r.website = 'https://www.instagram.com/creperiz_sta.nagoya/';   // only official channel
    r.notes = `[${DATE}] The 大須 shop has closed; the stand is 移転準備中 toward the Nagoya Station area with no confirmed address or reopening date, and its Instagram has been quiet since Feb 2025. Confirm it exists before travelling. ` + (r.notes || '');
    edits.push('nagoya/Creperiz: pointed website at the only official channel + relocation note');
  }
  writeCity('nagoya', j);
}

// ---------------------------------------------------- closures and stale claims
// Surfaced by the menu research pass. A closure is flagged, not deleted: the
// evidence is a shop Instagram bio that cannot be re-read programmatically, so a
// prominent warning is honest where a silent deletion would be an unverifiable
// judgement. The GF downgrade applies immediately — more caution is always safe.
{
  const j = readCity('hiroshima');
  let dirty = false;

  const tamaru = j.places.find(r => r.id === 'hiro_vegan_fruits_cafe_tamaru');
  if (tamaru && tamaru.hours_status !== 'closed') {
    tamaru.hours_status = 'closed';
    tamaru.notes = `[${DATE}] REPORTED PERMANENTLY CLOSED on 2024-03-03. The branch's own Instagram bio reads 「2024年３月3日閉店いたしました」 and Tabelog carries a 掲載保留 (listing suspended) banner. Verify before travelling; the parent TAMARU fruit business continues elsewhere. ` + (tamaru.notes || '');
    edits.push('hiroshima/Vegan Fruits Cafe Tamaru: marked closed (reported 2024-03-03)');
    dirty = true;
  }

  const lente = j.places.find(r => r.id === 'hiro_cafe_lente');
  if (lente && lente.gf_confidence === 'options') {
    lente.gf_confidence = 'ask';
    lente.gf_label = 'GF — ask';
    lente.gf_detail = `[Downgraded ${DATE}: options→ask] The 2019 press describing a gluten-free risotto is contradicted by a FindMeGlutenFree reviewer (~Aug 2026) who reports speaking to the chef and being told he no longer provides gluten-free food. The risotto is also miso-based with the miso unnamed, and the shop is absent from a Feb-2026 Miyajima gluten-free roundup that lists only confirmed shops. ` + (lente.gf_detail || '');
    edits.push('hiroshima/Cafe Lente: GF options→ask (2019 GF claim contradicted by a 2026 first-hand report)');
    dirty = true;
  }

  if (dirty) writeCity('hiroshima', j);
}

// A dead official domain on a record that still links it.
{
  const j = readCity('kyoto');
  let dirty = false;
  for (const r of j.places) {
    if (!String(r.website || '').includes('5w-kyoto.com')) continue;
    r.website = '';
    r.notes = `[${DATE}] Official domain 5w-kyoto.com no longer resolves; link removed. ` + (r.notes || '');
    edits.push(`kyoto/${r.name.split(' (')[0]}: cleared dead domain 5w-kyoto.com`);
    dirty = true;
  }
  if (dirty) writeCity('kyoto', j);
}

// ---------------------------------------------------- wrong / dead websites
// Found during the menu pass and re-verified here: one record links a DIFFERENT
// business, two link domains that no longer resolve. A link to the wrong
// restaurant is worse than no link — it shows a stranger's menu and hours.
const BAD_SITES = [
  { city: 'nagoya', match: 'WOK',
    was: 'r.goope.jp/wok',
    to: 'https://www.instagram.com/wok_nagoya/',
    why: 'the linked site is a different WOK restaurant in 東京都武蔵村山市伊奈平, verified by its own address line. The Nagoya shop (西区城北町, opened June 2026) has no website; Instagram is its only channel.' },
  { city: 'nara', match: '楽夢菜',
    was: 'ramuna.jp',
    to: '',
    why: 'ramuna.jp no longer resolves (DNS failure).' },
  { city: 'kanazawa', match: 'てんてん',
    was: 'tenten-bou7.com',
    to: '',
    why: 'tenten-bou7.com no longer resolves (DNS failure), and no evidence of trading in 2026 was found — the shop is reservation-only and its published menu has not changed since 2015. Confirm it is still open before relying on this entry.' },
];
for (const b of BAD_SITES) {
  const j = readCity(b.city);
  let dirty = false;
  for (const r of j.places) {
    if (!r.name.includes(b.match)) continue;
    if (!String(r.website || '').includes(b.was)) continue;
    r.website = b.to;
    r.notes = `[${DATE}] Website corrected: ${b.why} ` + (r.notes || '');
    edits.push(`${b.city}/${r.name.split(' (')[0]}: ${b.to ? 'repointed' : 'cleared'} website (${b.was})`);
    dirty = true;
  }
  if (dirty) writeCity(b.city, j);
}

// ---------------------------------------------------- lapsed / hijacked domains
// scripts/check-links.mjs found restaurant domains that have lapsed and now serve
// gambling sites. Linking these from the app would send a user looking for a
// menu to an unrelated betting page, so they are cleared, not just flagged.
const HIJACKED = {
  tokyo: [['peacetable-vegan.com', 'now serves a Russian gambling-affiliate site']],
  nara:  [['hibimurakami.com',     'now serves an Indonesian gambling site']],
};
for (const [city, list] of Object.entries(HIJACKED)) {
  const j = readCity(city);
  let dirty = false;
  for (const r of j.places)
    for (const [host, what] of list)
      for (const f of ['website', 'menu_url'])
        if (r[f] && r[f].includes(host)) {
          r[f] = '';
          r.notes = `[${DATE}] Former official domain ${host} has lapsed and ${what}; the link was removed. Verify the business is still trading. ` + (r.notes || '');
          edits.push(`${city}/${r.name.split(' (')[0]}: cleared hijacked domain ${host}`);
          dirty = true;
        }
  if (dirty) writeCity(city, j);
}

console.log(edits.length + ' corrections applied:');
edits.forEach(e => console.log('  - ' + e));
