// Build the pass-3 adversarial worklist: every dedicated/high GF record that is
// NOT already covered by a sign-off doc (GF_REVIEW_SIGNOFF.md / _TOKYO.md).
import fs from 'node:fs';

const CITIES = ['kyoto','tokyo','nara','kanazawa','hiroshima','nagoya','nagano','toba','himeji'];
const norm = s => String(s).toLowerCase().replace(/[^a-z0-9　-鿿]/g, '');

// names already carried through a sign-off doc
const docs = ['GF_REVIEW_SIGNOFF.md', 'GF_REVIEW_SIGNOFF_TOKYO.md']
  .filter(f => fs.existsSync(f))
  .map(f => fs.readFileSync(f, 'utf8')).join('\n');
const audited = [...docs.matchAll(/^### (.+?)(?: [—|-] |\s*\|)/gm)].map(m => norm(m[1].trim()));

function isAudited(name) {
  const n = norm(name);
  return audited.some(h => h.length > 3 && (n.includes(h) || h.includes(n)));
}

const out = [];
for (const city of CITIES) {
  const j = JSON.parse(fs.readFileSync(`data/${city}.json`, 'utf8'));
  for (const r of j.places) {
    if (!['dedicated', 'high'].includes(r.gf_confidence)) continue;
    if (r.safety?.owner_signoff?.decision) continue;   // already gated
    if (isAudited(r.name)) continue;
    const srcs = new Set([
      ...(r.chef_bio?.sources || []),
      ...Object.values(r.safety || {}).flatMap(v => Array.isArray(v) ? v.map(x => x.source) : []),
      r.website, r.menu_url,
    ].filter(Boolean));
    out.push({
      city, id: r.id, name: r.name,
      tier: r.gf_confidence,
      cuisine: r.cuisine, cuisine_type: r.cuisine_type,
      gf_label: r.gf_label,
      gf_detail: r.gf_detail,
      vegan_status: r.vegan_status,
      neighborhood: r.neighborhood,
      website: r.website || null,
      sources: [...srcs],
      evidence: {
        gf_cross_contamination: r.safety?.gf_cross_contamination || [],
        soy_sauce_wheat: r.safety?.soy_sauce_wheat || [],
        staff_allergy_handling: r.safety?.staff_allergy_handling || [],
        positives: r.safety?.positives || [],
      },
    });
  }
}
// highest stakes first: dedicated before high, then cities with zero audit coverage
const zeroCov = new Set(['hiroshima','nagano','toba']);
out.sort((a,b) =>
  (zeroCov.has(b.city) - zeroCov.has(a.city)) ||
  ((a.tier === 'dedicated' ? 0 : 1) - (b.tier === 'dedicated' ? 0 : 1)) ||
  a.city.localeCompare(b.city));

fs.writeFileSync('data/_gf_audit_worklist.json', JSON.stringify(out, null, 1));
const byCity = out.reduce((m,r) => (m[r.city] = (m[r.city]||0)+1, m), {});
console.log(`worklist: ${out.length} records`);
console.log(byCity);
