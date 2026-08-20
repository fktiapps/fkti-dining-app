#!/usr/bin/env node
/**
 * Flag records that carry no evidence trail at all.
 *
 * A record with ZERO sources, no Google place_id and a neighbourhood-centroid pin
 * cannot be checked by anyone — not by a reader, not by a later pass. That is a
 * structural fact about the record, and it is worth marking.
 *
 * It is NOT a claim that the shop is fictional. A deep-enrich agent that
 * researched twelve such records per-shop could confirm only four, found one in
 * the wrong prefecture and could not locate six — but twelve is not a basis for
 * judging 355, and the twelve it saw were all from the shojin niche.
 *
 * DO NOT try to settle this with a bulk web search. That was attempted here and
 * the method was invalid: searching Yahoo for "<name> 東京" and looking for the
 * name beside a restaurant-directory domain returned CONFIRMED for four out of
 * four deliberately invented shop names. Generic Japanese shop names appear in
 * unrelated results and directory domains appear in any food search. Existence
 * has to be established per record, against the actual address.
 *
 *   node scripts/flag-unsourced.mjs [--write]
 */
import fs from 'node:fs';
import { CITIES, readCity, writeCity } from './lib-city.mjs';

const WRITE = process.argv.includes('--write');

const srcCount = r => {
  const s = new Set([...(r.chef_bio?.sources || []), r.website, r.menu_url].filter(Boolean));
  for (const f of ['gf_cross_contamination', 'soy_sauce_wheat', 'vegan_cross_contact', 'staff_allergy_handling', 'positives'])
    for (const e of (r.safety?.[f]) || []) if (e.source) s.add(e.source);
  return s.size;
};

let flagged = 0, cleared = 0;
const rows = [];

for (const city of CITIES) {
  const j = readCity(city);
  let dirty = false;
  for (const r of j.places) {
    const unsourced = srcCount(r) === 0 && !/query_place_id=/.test(r.gmaps || '');
    if (unsourced) {
      if (!r.unsourced) {
        r.unsourced = {
          date: new Date().toISOString().slice(0, 10),
          note: 'No source, no Google place_id and an approximate pin — nothing on this record can be verified by a reader. Confirm the business exists and fix the coordinates before relying on it.',
        };
        flagged++; dirty = true;
      }
      rows.push(`${city}\t${r.category}\t${r.name.split(' (')[0].slice(0, 40)}`);
    } else if (r.unsourced) { delete r.unsourced; cleared++; dirty = true; }
  }
  if (WRITE && dirty) writeCity(city, j);
}

const byCity = rows.reduce((m, r) => (m[r.split('\t')[0]] = (m[r.split('\t')[0]] || 0) + 1, m), {});
console.log(`${rows.length} record(s) with no verifiable evidence trail`);
console.log(byCity);
console.log(WRITE ? `\nflagged ${flagged}, cleared ${cleared}` : '\n(dry run — pass --write to apply)');
fs.writeFileSync('data/_unsourced.tsv', rows.join('\n'));
