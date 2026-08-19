// Regenerate GF_REVIEW_SIGNOFF.md from what is actually in the data.
//
// The old worklist was a hand-written snapshot that drifted: it listed 20 retained
// records while the data had grown to 76 ungated ones, and its verdicts lived only
// in Markdown. This reads the live records instead, so the doc can never again
// disagree with what ships.
import fs from 'node:fs';
import { CITIES, readCity } from './lib-city.mjs';

const TOP = new Set(['dedicated', 'high']);
const TODAY = new Date().toISOString().slice(0, 10);
const CITY_NAME = { kyoto:'Kyoto', tokyo:'Tokyo', nara:'Nara', kanazawa:'Kanazawa',
  hiroshima:'Hiroshima', nagoya:'Nagoya', nagano:'Nagano', toba:'Toba & Ise', himeji:'Himeji' };

const pending = [], gated = [], downgraded = [], priorDowngrades = [];

for (const city of CITIES) {
  for (const r of readCity(city).places) {
    const rev = r.gf_review;
    // separate this pass's downgrades from historical ones so the header count
    // does not silently absorb earlier re-audits
    if (rev?.from && rev?.to && rev.from !== rev.to)
      (rev.date === TODAY ? downgraded : priorDowngrades).push({ city, r, rev });
    if (!TOP.has(r.gf_confidence)) continue;
    (r.safety?.owner_signoff?.decision ? gated : pending).push({ city, r, rev });
  }
}

const esc = s => String(s ?? '').replace(/\r?\n/g, ' ').trim();
const L = [];
L.push('# GF SAFETY REVIEW — GREG SIGN-OFF WORKLIST');
L.push('');
L.push(`Generated ${new Date().toISOString().slice(0,10)} from the live data · protocol: REVIEW_PROTOCOL.md (adversarial "disprove-the-label" pass)`);
L.push('');
L.push(`**${downgraded.length} auto-downgrades applied by this adversarial pass and committed** (plus ${priorDowngrades.length} from earlier re-audits). **${pending.length} records remain at \`dedicated\`/\`high\` and need your gate.** ${gated.length} already gated.`);
L.push('');
L.push('Per protocol §4, auto-downgrades apply immediately — more caution is always safe. The records below need your sign-off because a retained `dedicated`/`high` is the only way this app can over-promise to a celiac. Nothing here says "just go": the app floor (confirm with the kitchen + show the card) still stands on every one.');
L.push('');
L.push('Run `npm run lint` to see the current state at any time; it fails on any top-tier record with no adversarial review recorded.');
L.push('');
L.push('---');
L.push('');

// identity problems first — these are wrong-shop risks, not tier risks
const idBad = pending.concat(downgraded).filter(x => x.rev && x.rev.identity_ok === false);
if (idBad.length) {
  L.push('## ⚠ IDENTITY FLAGS — verify these regardless of tier');
  L.push('');
  for (const { city, r, rev } of idBad)
    L.push(`- **${r.name.split(' (')[0]}** (${CITY_NAME[city]}, now \`${r.gf_confidence}\`): ${esc(rev.identity_note)}`);
  L.push('');
  L.push('---');
  L.push('');
}

for (const city of CITIES) {
  const rows = pending.filter(p => p.city === city);
  if (!rows.length) continue;
  L.push(`## ${CITY_NAME[city]}`);
  L.push('');
  for (const { r, rev } of rows) {
    L.push(`### ${r.name} — **${r.gf_confidence}**`);
    if (rev?.why) L.push(esc(rev.why));
    if (rev?.independent_source_count != null) L.push(`\nIndependent sources supporting GF handling: **${rev.independent_source_count}**`);
    if (rev?.red_flags?.length) {
      L.push('\nResidual flags:');
      rev.red_flags.forEach(f => L.push(`- ${esc(f)}`));
    }
    if (rev?.plain_rice) L.push(`\nPlain rice: ${esc(rev.plain_rice)}`);
    if (rev?.sources?.length) L.push(`\nSources: ${rev.sources.map(esc).join(' · ')}`);
    if (!rev) L.push('_No adversarial review on record — this should not ship at this tier._');
    L.push('');
  }
}

if (downgraded.length) {
  L.push('---');
  L.push('');
  L.push(`## ⬇ Auto-downgrades applied by this pass (${downgraded.length})`);
  L.push('');
  for (const { city, r, rev } of downgraded)
    L.push(`- **${r.name.split(' (')[0]}** (${CITY_NAME[city]}) \`${rev.from}\` → \`${rev.to}\` — ${esc(rev.why).slice(0, 240)}`);
  L.push('');
}

fs.writeFileSync('GF_REVIEW_SIGNOFF.md', L.join('\n'));
console.log(`worklist: ${pending.length} awaiting Greg, ${gated.length} gated, ${downgraded.length} downgrades applied`);
