// Generates the Tokyo GF/vegan QC workflow: an adversarial "disprove-the-label" pass
// (REVIEW_PROTOCOL.md step 3) over every dedicated/high GF place + strong vegan positives.
// Each target gets an Opus agent whose ONLY job is to REFUTE the label. Output kept[] ->
// data/_tokyo_qc.json -> apply-tokyo-qc.mjs (auto-downgrades + Greg sign-off worklist).
import fs from 'fs';
const d = JSON.parse(fs.readFileSync('data/tokyo.json', 'utf8'));

// Priority per REVIEW_PROTOCOL: (1) dedicated/high GF, (2) options GF, (4) vegan full.
const targets = d.places.filter(p =>
  ['dedicated', 'high', 'options'].includes(p.gf_confidence) ||
  ['full'].includes(p.vegan_status)
).map(p => ({
  id: p.id, name: p.name, cuisine: p.cuisine || '', neighborhood: p.neighborhood || '',
  gf_confidence: p.gf_confidence, gf_detail: (p.gf_detail || '').slice(0, 600),
  vegan_status: p.vegan_status, vegan_detail: (p.vegan_detail || '').slice(0, 400),
  website: p.website || '', sources: (p.chef_bio?.sources || []).slice(0, 5),
}));

const QC_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    verdict: { type: 'string', enum: ['keep', 'downgrade'] },
    recommended_gf_confidence: { type: 'string', enum: ['dedicated', 'high', 'options', 'ask', 'no'] },
    recommended_vegan_status: { type: 'string', enum: ['full', 'options', 'limited', 'ask', 'no'] },
    reasoning: { type: 'string' },
    red_flags: { type: 'array', items: { type: 'string' } },
    disconfirming_evidence: { type: 'array', items: { type: 'object', additionalProperties: false, properties: { text: { type: 'string' }, source: { type: 'string' } }, required: ['text'] } },
    sources: { type: 'array', items: { type: 'string' } },
    needs_greg: { type: 'boolean' },
  },
  required: ['verdict', 'recommended_gf_confidence', 'recommended_vegan_status', 'reasoning', 'red_flags', 'needs_greg'],
};

const script = `export const meta = {
  name: 'tokyo-gf-qc',
  description: 'Adversarial disprove-the-label GF/vegan QC over Tokyo dedicated/high/options + vegan positives (Opus)',
  phases: [{ title: 'Adversarial audit' }],
}
const TARGETS = ${JSON.stringify(targets)};
const QC_SCHEMA = ${JSON.stringify(QC_SCHEMA)};

const auditPrompt = t => \`You are the ADVERSARIAL gluten-free/vegan safety adjudicator for a celiac-first dining app. Your ONLY job is to TRY TO DISPROVE the current label. PRESUME IT IS WRONG until the evidence survives. A false "safe" can send a celiac child to the ER; a false "ask" only makes them double-check — the costs are NOT equal, so when in doubt, DOWNGRADE.

SHOP: \${t.name} | cuisine: \${t.cuisine} | area: \${t.neighborhood}\${t.website ? ' | site: ' + t.website : ''}
CURRENT GF LABEL: \${t.gf_confidence} — \${t.gf_detail}
CURRENT VEGAN LABEL: \${t.vegan_status} — \${t.vegan_detail}
Known sources: \${(t.sources || []).join(', ') || '(none on record)'}

Search the live web hard for DISCONFIRMATION (WebSearch then WebFetch): "got glutened at \${t.name}", negative celiac/coeliac reviews, wheat soy sauce / wheat in the tare or broth, shared fryer, no allergen protocol, a review saying they got sick, menu changes, closure. Also check FindMeGlutenFree / HappyCow celiac reviews and the shop's own site.

Apply the EVIDENCE BAR (REVIEW_PROTOCOL):
• 'dedicated' requires the shop's OWN explicit GF/celiac claim AND >=1 independent celiac-grade corroboration. Missing either -> cannot be dedicated.
• 'high' requires >=2 independent credible sources of real GF handling. A SINGLE source can NEVER support dedicated/high.
• Wheat-central cuisine (ramen/udon/tempura/most soba/tonkatsu) with no explicit GF accommodation is 'no' or 'ask' — NEVER 'options'.
• Vegan: hidden dashi/katsuo/bonito/egg/honey means downgrade.

Return: verdict keep|downgrade; recommended_gf_confidence + recommended_vegan_status (your conservative call — may equal current if it truly survives); reasoning; red_flags[]; disconfirming_evidence[{text,source}]; sources[] you actually read; needs_greg=true if it retains dedicated/high (those require Greg's final human gate).\`;

phase('Adversarial audit')
const out = (await parallel(TARGETS.map(t => () =>
  agent(auditPrompt(t), { label: 'qc:' + t.name.slice(0, 16), phase: 'Adversarial audit', schema: QC_SCHEMA, model: 'opus' })
    .then(r => r ? { id: t.id, name: t.name, cuisine: t.cuisine, current_gf: t.gf_confidence, current_vegan: t.vegan_status, ...r } : null).catch(() => null)))).filter(Boolean)
log('QC audited: ' + out.length + ' / ' + TARGETS.length)
return { counts: { targets: TARGETS.length, audited: out.length }, kept: out }
`;
fs.writeFileSync('scripts/tokyo-qc-workflow.js', script);
console.log(`wrote scripts/tokyo-qc-workflow.js | QC targets: ${targets.length} |`, JSON.stringify(targets.reduce((a, t) => (a[t.gf_confidence] = (a[t.gf_confidence] || 0) + 1, a), {})));
