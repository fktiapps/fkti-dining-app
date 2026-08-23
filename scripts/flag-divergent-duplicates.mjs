// The same shop, twice, with different safety labels.
//
// Found by the borrowed-evidence detector, which kept pairing records with each other:
// 「グルテンフリー ティーズキッチン 上野広小路店」 and 「グルテンフリー T's Kitchen 上野広小路店」 are
// one restaurant written two ways, filed 1.8km apart, sharing 3 of 3 sources. 味農家
// and 味農家（みのや） likewise — and during this sweep one of that pair was moved to
// vegan "options" while its twin stayed "full", so one restaurant now shows a
// traveller two different answers depending on which pin they tap.
//
// Duplicates are not new here; merge-dupes.mjs has collapsed 74 of them. What this
// adds is the DIVERGENCE: a pair that survived deduplication because their names
// differ in script, and whose tiers have since drifted apart. That is worse than
// either a duplicate or a wrong tier alone, because it makes the app self-contradict.
//
// Detection is by shared evidence rather than by name, because the names are exactly
// what deduplication already failed on.
//
// What it does NOT do is merge them. Three attempts at automatic duplicate merging in
// this repo have gone wrong, one of them deleting six real Tokyo shops, so identity
// stays a human decision.
//
// What it DOES do, for pairs whose names match after normalisation, is align both to
// the MORE CAUTIOUS tier. They are one restaurant; one of the two labels is wrong; and
// until somebody says which, the app must not answer the same question two ways
// depending on which pin the reader taps. Aligning down cannot make anyone ill and can
// be undone by the human gate.
//
//   node scripts/flag-divergent-duplicates.mjs [--apply]
import fs from 'node:fs';
import { CITIES, readCity, writeCity } from './lib-city.mjs';

const EV = ['gf_cross_contamination','soy_sauce_wheat','vegan_cross_contact',
            'staff_allergy_handling','positives'];
const url = u => typeof u === 'string' && /^https?:\/\//.test(u);
const srcs = r => {
  const s = new Set();
  for (const f of EV) for (const e of (r.safety?.[f]) || [])
    if (typeof e === 'object' && url(e?.source)) s.add(e.source);
  if (url(r.website)) s.add(r.website);
  return s;
};
// Names that differ only by script, spacing or romanisation are the same name.
const norm = n => String(n).toLowerCase()
  .replace(/[\s　（）()「」【】・･,，.'’]/g, '')
  .replace(/[ぁ-ん]/g, c => String.fromCharCode(c.charCodeAt(0) + 0x60));  // hira -> kata

const APPLY = process.argv.includes('--apply');
const pairs = [];
for (const city of CITIES) {
  const rs = readCity(city).places.filter(r => !r.hidden);
  for (let i = 0; i < rs.length; i++)
    for (let j = i + 1; j < rs.length; j++) {
      const a = rs[i], b = rs[j];
      const sa = srcs(a), sb = srcs(b);
      const shared = [...sa].filter(u => sb.has(u)).length;
      const nameMatch = norm(a.name) === norm(b.name) ||
                        norm(a.name).includes(norm(b.name)) || norm(b.name).includes(norm(a.name));
      // Either a strong name match, or nearly all of one record's evidence is the other's.
      const strong = nameMatch || (shared >= 3 && shared >= Math.min(sa.size, sb.size));
      if (!strong || shared < 2) continue;
      const gfDiff = a.gf_confidence !== b.gf_confidence;
      const vgDiff = a.vegan_status !== b.vegan_status;
      if (!gfDiff && !vgDiff) continue;
      pairs.push({ city, a: { id: a.id, name: a.name, gf: a.gf_confidence, vegan: a.vegan_status },
                   b: { id: b.id, name: b.name, gf: b.gf_confidence, vegan: b.vegan_status },
                   shared, nameMatch });
    }
}

console.log(`${pairs.length} duplicate pair(s) whose safety labels disagree\n`);
for (const p of pairs) {
  console.log(`  ${p.city}  (${p.shared} shared source${p.shared === 1 ? '' : 's'}${p.nameMatch ? ', same name' : ''})`);
  console.log(`    ${p.a.id.padEnd(30)} gf=${String(p.a.gf).padEnd(10)} vegan=${p.a.vegan.padEnd(8)} ${String(p.a.name).slice(0, 34)}`);
  console.log(`    ${p.b.id.padEnd(30)} gf=${String(p.b.gf).padEnd(10)} vegan=${p.b.vegan.padEnd(8)} ${String(p.b.name).slice(0, 34)}\n`);
}
// Align same-name pairs to the more cautious tier.
const GF_RANK = { no: 0, ask: 1, options: 2, high: 3, dedicated: 4 };
const VG_RANK = { no: 0, ask: 1, limited: 2, options: 2, full: 3 };
const GF_LABEL = { dedicated:'Dedicated gluten-free', high:'Strong GF focus',
                   options:'Some GF options', ask:'GF — ask', no:'Not gluten-free' };
const VG_LABEL = { full:'Fully vegan', options:'Some vegan options',
                   limited:'Limited vegan', ask:'Vegan — ask', no:'Not vegan' };
const aligned = [];
if (APPLY) {
  for (const city of CITIES) {
    const j = readCity(city); let dirty = false;
    for (const pr of pairs.filter(x => x.city === city && x.nameMatch)) {
      const A = j.places.find(x => x.id === pr.a.id), B = j.places.find(x => x.id === pr.b.id);
      if (!A || !B) continue;
      // Aligning to the more cautious tier is right when both twins were rated by a
      // machine. It is wrong when Greg has ruled on one of them: he read that shop's
      // evidence and decided, and the existence of a second, staler copy of the same
      // restaurant is not new information about the food. 味農家（みのや） was signed off at
      // "options" and then dragged back to "ask" on every rebuild by its own duplicate.
      // Where a twin carries a sign-off for the axis, that tier wins for BOTH.
      const signedTier = (field) => {
        for (const r of [A, B]) {
          const sg = r.safety?.owner_signoff;
          if (sg?.decision && (sg.field || 'gf_confidence') === field && sg.to) return sg.to;
        }
        return null;
      };
      const gf = signedTier('gf_confidence') ??
        ((GF_RANK[A.gf_confidence] <= GF_RANK[B.gf_confidence]) ? A.gf_confidence : B.gf_confidence);
      const vg = signedTier('vegan_status') ??
        ((VG_RANK[A.vegan_status] <= VG_RANK[B.vegan_status]) ? A.vegan_status : B.vegan_status);
      for (const r of [A, B]) {
        if (r.gf_confidence !== gf) { r.gf_confidence = gf; r.gf_label = GF_LABEL[gf]; dirty = true; }
        if (r.vegan_status !== vg) { r.vegan_status = vg; r.vegan_label = VG_LABEL[vg]; dirty = true; }
        r.duplicate_aligned = { with: r.id === A.id ? B.id : A.id, gf, vegan: vg, date: '2026-08-21',
          note: 'Same shop as the paired record under a different spelling. Both aligned to the ' +
                'more cautious tier so the app does not answer one question two ways. Not merged — ' +
                'identity is a human decision.' };
      }
      aligned.push({ city, ids: [A.id, B.id], gf, vegan: vg });
    }
    if (dirty) writeCity(city, j);
  }
  if (aligned.length) {
    console.log(`
aligned ${aligned.length} same-name pair(s) to the more cautious tier:`);
    aligned.forEach(a => console.log(`  ${a.city}  ${a.ids.join(' + ')}  -> gf=${a.gf} vegan=${a.vegan}`));
  }
}
fs.writeFileSync('data/_divergent_duplicates.json', JSON.stringify(pairs, null, 1));
