// Find unsubstantiated medical claims repeated from a restaurant's own marketing.
//
// A shard-5 shop advertises that its cooking oil prevents cancer and dementia. That
// belongs nowhere near this app: the readers are people managing a real medical
// condition, and an app they trust for "is this safe to eat" must not also be a
// channel for a soba shop's health copy. Repeating it with attribution does not
// help — the reader sees the claim, not the citation.
//
// Only the reader-facing prose is scanned. A shop's allergy statement is a
// different thing entirely and must survive: 「グルテンフリー」 and 「小麦アレルギー対応」
// are the evidence this app runs on, so the patterns below name diseases and
// therapeutic effects, never allergens.
//
//   node scripts/flag-health-claims.mjs
import fs from 'node:fs';
import { CITIES, readCity } from './lib-city.mjs';

const PATTERNS = [
  // disease and therapeutic-effect claims, JA and EN
  /(がん|癌|ガン)(予防|に効く|を防)/,
  /(認知症|アルツハイマー|糖尿病|高血圧|動脈硬化|コレステロール)(予防|改善|に効く|を下げ|を防)/,
  /(免疫力|代謝)(アップ|向上|を高め)/,
  /(デトックス|アンチエイジング|若返り|痩せ|ダイエット効果|美肌効果)/,
  /(薬効|効能|健康効果|治癒|治療効果)/,
  /\b(prevents?|cures?|treats?|heals?)\s+(cancer|dementia|alzheimer|diabetes|hypertension)/i,
  /\b(anti[- ]?aging|detox(ifying|ification)?|immune[- ]boost|boosts? immunity)\b/i,
  /\b(medicinal|therapeutic|health)\s+(benefit|effect|propert)/i,
];

// Reader-facing prose only. Safety evidence fields are the app's job and are left alone.
const FIELDS = ['cuisine', 'notes', 'cultural_comfort', 'gf_detail', 'vegan_detail', 'enrich_note'];

const hits = [];
for (const city of CITIES) {
  for (const r of readCity(city).places) {
    const texts = [];
    for (const f of FIELDS) if (typeof r[f] === 'string') texts.push([f, r[f]]);
    if (r.chef_bio) for (const [k, v] of Object.entries(r.chef_bio))
      if (typeof v === 'string') texts.push([`chef_bio.${k}`, v]);
    for (const [field, text] of texts)
      for (const p of PATTERNS) {
        const m = text.match(p);
        if (!m) continue;
        const i = Math.max(0, text.indexOf(m[0]) - 45);
        hits.push({ city, id: r.id, name: r.name, field, match: m[0],
          context: text.slice(i, i + 150).replace(/\s+/g, ' ') });
        break;
      }
  }
}

fs.writeFileSync('data/_health_claims.json', JSON.stringify(hits, null, 1));
console.log(`${hits.length} possible health claim(s) in reader-facing text\n`);
for (const h of hits)
  console.log(`  ${h.city}/${h.id}  [${h.field}]  «${h.match}»\n    ...${h.context}...\n`);
console.log('report -> data/_health_claims.json');
