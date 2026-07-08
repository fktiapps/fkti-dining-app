// Apply the Tokyo adversarial QC (data/_tokyo_qc.json) to data/tokyo.json.
// Auto-DOWNGRADES apply immediately (more caution is always safe); never auto-UPGRADES
// (a retained dedicated/high requires Greg's human gate). Records disconfirming evidence on
// the place. Writes GF_REVIEW_SIGNOFF_TOKYO.md (the Greg worklist) + bumps SW.
import fs from 'fs';
const audits = JSON.parse(fs.readFileSync('data/_tokyo_qc.json', 'utf8'));
const d = JSON.parse(fs.readFileSync('data/tokyo.json', 'utf8'));
const byId = new Map(d.places.map(p => [p.id, p]));

const GF_RANK = { no: 0, ask: 1, options: 2, high: 3, dedicated: 4 };
const VG_RANK = { no: 0, ask: 1, limited: 2, options: 3, full: 4 };
const gfLabel = g => ({ dedicated: 'Dedicated gluten-free', high: 'Strong GF focus', options: 'Some GF options', ask: 'GF — ask', no: 'Not gluten-free' }[g] || 'Ask');
const veganLabel = v => ({ full: 'Fully vegan', options: 'Vegan options', limited: 'Limited vegan options', ask: 'Vegan — ask', no: 'Not vegan' }[v] || 'Ask');
const arr = a => Array.isArray(a) ? a : [];

const downgrades = [], keeps = [], unmatched = [];
for (const a of audits) {
  const p = byId.get(a.id);
  if (!p) { unmatched.push(a.id); continue; }
  // clamp: applied rank = min(current, recommended) — QC can only hold or downgrade.
  const curGf = p.gf_confidence, recGf = a.recommended_gf_confidence;
  const appliedGf = GF_RANK[recGf] < GF_RANK[curGf] ? recGf : curGf;
  const curVg = p.vegan_status, recVg = a.recommended_vegan_status;
  const appliedVg = VG_RANK[recVg] < VG_RANK[curVg] ? recVg : curVg;

  const changed = appliedGf !== curGf || appliedVg !== curVg;
  const disconf = arr(a.disconfirming_evidence).filter(x => x && x.text).map(x => ({ text: x.text, source: x.source || '' }));

  if (appliedGf !== curGf) {
    p.gf_confidence = appliedGf; p.gf_label = gfLabel(appliedGf);
    // record the disconfirming evidence on the safety record so the caretaker can re-audit.
    p.safety = p.safety || {}; p.safety.gf_cross_contamination = arr(p.safety.gf_cross_contamination).concat(disconf);
    downgrades.push({ ...a, from: curGf, to: appliedGf, dim: 'gf' });
  }
  if (appliedVg !== curVg) {
    p.vegan_status = appliedVg; p.vegan_label = veganLabel(appliedVg);
    downgrades.push({ ...a, from: curVg, to: appliedVg, dim: 'vegan' });
  }
  if (changed) { p.safety = p.safety || {}; p.safety.last_checked = '2026-07-08'; }

  // KEEPs that retain dedicated/high need Greg's gate.
  if (['dedicated', 'high'].includes(p.gf_confidence)) keeps.push({ ...a, applied_gf: p.gf_confidence, applied_vegan: p.vegan_status });
}

function ser(v) { if (v === null) return 'null'; if (Array.isArray(v)) return '[' + v.map(ser).join(', ') + ']'; if (typeof v === 'object') return '{' + Object.entries(v).map(([k, val]) => JSON.stringify(k) + ': ' + ser(val)).join(', ') + '}'; return JSON.stringify(v); }
fs.writeFileSync('data/tokyo.json', ser(d));

// Write the Greg sign-off worklist.
const esc = s => (s || '').replace(/\n+/g, ' ').trim();
let md = `# GF SAFETY REVIEW — TOKYO — GREG SIGN-OFF WORKLIST\n`;
md += `Generated 2026-07-08 · protocol: REVIEW_PROTOCOL.md (adversarial "disprove-the-label" pass)\n\n`;
md += `**${audits.length} GF-positive / vegan-positive places audited. ${downgrades.length} auto-downgrades applied (committed). ${keeps.length} retained dedicated/high — listed below for your final gate.**\n\n`;
md += `Per protocol, auto-downgrades apply immediately (more caution is always safe). KEEPs need your sign-off because a retained dedicated/high is the only way the app can over-promise. Nothing here says "just go" — the app floor (confirm with the kitchen + show the card) still stands on every one.\n\n---\n\n`;
md += `## ⬇ Auto-downgrades applied (${downgrades.length})\n\n`;
if (!downgrades.length) md += `_None — every positive label survived the adversarial pass._\n\n`;
for (const g of downgrades) {
  md += `- **${g.name}** — ${g.dim.toUpperCase()} \`${g.from}\` → \`${g.to}\`. ${esc(g.reasoning)}\n`;
  if (arr(g.red_flags).length) md += `  - Red flags: ${g.red_flags.map(esc).join('; ')}\n`;
}
md += `\n---\n\n## ⚠ Retained dedicated/high — needs your eyes (${keeps.length})\n\n`;
if (!keeps.length) md += `_None retained at dedicated/high after the adversarial pass._\n\n`;
for (const k of keeps) {
  md += `### ${k.name} — **${k.applied_gf}** GF / **${k.applied_vegan}** vegan\n`;
  md += `${esc(k.reasoning)}\n\n`;
  if (arr(k.red_flags).length) { md += `Residual flags:\n`; for (const f of k.red_flags) md += `- ${esc(f)}\n`; md += `\n`; }
  if (arr(k.sources).length) md += `Sources: ${k.sources.join(' · ')}\n\n`;
}
fs.writeFileSync('GF_REVIEW_SIGNOFF_TOKYO.md', md);

// bump SW (generic)
let swv = '?';
for (const f of ['sw.js', 'index.html']) { let s = fs.readFileSync(f, 'utf8'); const m = s.match(/dcd-v(\d+)/); if (m) { swv = Number(m[1]) + 1; s = s.split(`dcd-v${m[1]}`).join(`dcd-v${swv}`); fs.writeFileSync(f, s); } }
console.log(`QC applied: ${audits.length} audited | ${downgrades.length} downgrades | ${keeps.length} retained dedicated/high | unmatched: ${unmatched.length ? unmatched : 'none'} | SW -> dcd-v${swv}`);
console.log('downgrades:', downgrades.map(g => `${g.name}:${g.dim} ${g.from}->${g.to}`).slice(0, 30));
