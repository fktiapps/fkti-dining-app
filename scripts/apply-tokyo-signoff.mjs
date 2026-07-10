// Apply Greg's final human gate on the 8 retained dedicated/high GF places (REVIEW_PROTOCOL step 4).
// Keeps get an owner-signoff stamp; downgrades get relabeled + a reason recorded. Bumps SW,
// updates GF_REVIEW_SIGNOFF_TOKYO.md with the resolution.
import fs from 'fs';
const d = JSON.parse(fs.readFileSync('data/tokyo.json', 'utf8'));
const byId = new Map(d.places.map(p => [p.id, p]));
const DATE = '2026-07-08';
const gfLabel = g => ({ dedicated: 'Dedicated gluten-free', high: 'Strong GF focus', options: 'Some GF options', ask: 'GF — ask', no: 'Not gluten-free' }[g] || 'Ask');

const KEEP = ['tokyo_biossa', 'tokyo_shochiku_en_cafe', 'tokyo_otaco_otako_chiffon_cake', 'tokyo_rice_hack_gluten_free_ba', 'tokyo_lavoro', 'tokyo_fleur_de_sarrasin'];
const DOWNGRADE = [
  { id: 'tokyo_marugoto_vegan_dining_as', to: 'options', reason: 'Owner gate: staff themselves say they cannot guarantee against seasoning cross-contact, and gluten-containing beer is served on premises — too much residual risk to present as top-tier to a celiac child.' },
  { id: 'tokyo_daughter_boutique_tokyo', to: 'options', reason: 'Owner gate: no independent celiac-grade corroboration (the one "celiac" review was a mismatch to a different shop) and the operation is primarily an online/wholesale workshop, so the top tier is not warranted despite the all-rice-flour claim.' },
];

const changed = [];
for (const id of KEEP) {
  const p = byId.get(id); if (!p) { console.log('!! missing', id); continue; }
  p.safety = p.safety || {};
  p.safety.owner_signoff = { decision: 'keep', tier: p.gf_confidence, by: 'Greg', date: DATE };
  p.safety.last_checked = DATE;
  changed.push(`KEEP  ${p.gf_confidence.padEnd(9)} ${p.name.split(' (')[0]}`);
}
for (const { id, to, reason } of DOWNGRADE) {
  const p = byId.get(id); if (!p) { console.log('!! missing', id); continue; }
  const from = p.gf_confidence;
  p.gf_confidence = to; p.gf_label = gfLabel(to);
  p.gf_detail = `[Owner review ${DATE}: GF downgraded ${from}→${to}. ${reason}] ${p.gf_detail || ''}`.trim();
  p.safety = p.safety || {};
  p.safety.owner_signoff = { decision: 'downgrade', from, to, reason, by: 'Greg', date: DATE };
  p.safety.last_checked = DATE;
  changed.push(`DOWN  ${from}→${to} ${p.name.split(' (')[0]}`);
}

function ser(v) { if (v === null) return 'null'; if (Array.isArray(v)) return '[' + v.map(ser).join(', ') + ']'; if (typeof v === 'object') return '{' + Object.entries(v).map(([k, val]) => JSON.stringify(k) + ': ' + ser(val)).join(', ') + '}'; return JSON.stringify(v); }
fs.writeFileSync('data/tokyo.json', ser(d));

// Prepend a resolution block to the worklist.
let md = fs.readFileSync('GF_REVIEW_SIGNOFF_TOKYO.md', 'utf8');
if (!md.includes('OWNER SIGN-OFF (resolved')) {
  const block = `## ✅ OWNER SIGN-OFF (resolved ${DATE} · Greg)\n\n`
    + `Final human gate applied to the 8 retained dedicated/high GF places:\n\n`
    + `**Kept at their tier (6):** BIOSSA (dedicated), 松竹圓カフェ (dedicated), otaco (dedicated), RICE HACK (dedicated), LA VORO (high), Fleur de Sarrasin (high).\n\n`
    + `**Downgraded to \`options\` (2):**\n`
    + `- まるごとVegan Dining Asakusa — staff can't guarantee seasoning cross-contact; gluten beer on premises.\n`
    + `- Daughter Boutique — no independent celiac corroboration; online/wholesale workshop.\n\n`
    + `The app floor (confirm with the kitchen + show the card) still stands on every place, including the 6 kept top-tier.\n\n---\n\n`;
  md = md.replace(/^(# GF SAFETY REVIEW[^\n]*\n[^\n]*\n\n)/, `$1${block}`);
  fs.writeFileSync('GF_REVIEW_SIGNOFF_TOKYO.md', md);
}

// bump SW (generic)
let swv = '?';
for (const f of ['sw.js']) { let s = fs.readFileSync(f, 'utf8'); const m = s.match(/dcd-v(\d+)/); if (m) { swv = Number(m[1]) + 1; s = s.split(`dcd-v${m[1]}`).join(`dcd-v${swv}`); fs.writeFileSync(f, s); } }
console.log('Owner sign-off applied:'); for (const c of changed) console.log('  ' + c);
console.log('SW -> dcd-v' + swv);
