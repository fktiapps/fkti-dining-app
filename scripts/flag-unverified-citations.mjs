// Mark safety evidence whose quote could not be found on the page it cites.
//
// Reads data/_citation_check.json (produced by verify-citations.mjs) and stamps
// the affected evidence items in place. It does NOT delete them: a miss can mean
// the page was edited, or is rendered client-side, and throwing away a possibly
// true safety note is its own kind of error. What it does is stop the record
// presenting an unverifiable quote as sourced fact.
//
//   node scripts/verify-citations.mjs && node scripts/flag-unverified-citations.mjs
import fs from 'node:fs';
import { CITIES, readCity, writeCity } from './lib-city.mjs';

const DATE = new Date().toISOString().slice(0, 10);
const FIELDS = ['gf_cross_contamination', 'soy_sauce_wheat', 'vegan_cross_contact',
                'staff_allergy_handling', 'positives'];

const report = JSON.parse(fs.readFileSync('data/_citation_check.json', 'utf8'));

// Platforms that render content client-side — a miss there proves nothing.
const CLIENT_RENDERED = /instagram\.com|wixsite\.com|thebase\.in|owst\.jp|facebook\.com|goope\.jp|amebaownd|base\.shop|stores\.jp/;

const key = a => `${a.id}::${a.field}::${a.quote}`;
const flagged = new Map();
for (const a of report.absent) flagged.set(key(a), CLIENT_RENDERED.test(a.url) ? 'inconclusive' : 'absent');

let stamped = 0, inconclusive = 0;
for (const city of CITIES) {
  const j = readCity(city);
  let dirty = false;
  for (const r of j.places) {
    for (const f of FIELDS) {
      for (const e of (r.safety?.[f]) || []) {
        const quotes = [...String(e.text || '').matchAll(/「([^」]{6,})」/g)].map(m => m[1]);
        for (const q of quotes) {
          const verdict = flagged.get(`${r.id}::${f}::${q}`);
          if (!verdict) continue;
          e.citation_check = {
            date: DATE,
            result: verdict,
            note: verdict === 'absent'
              ? 'The quoted text was NOT found on the cited page. Treat this claim as unsourced until re-verified — do not rely on it for a safety decision.'
              : 'Could not verify: the cited page renders its content client-side, so the quote could neither be confirmed nor ruled out.',
          };
          verdict === 'absent' ? stamped++ : inconclusive++;
          dirty = true;
        }
      }
    }
  }
  if (dirty) writeCity(city, j);
}

console.log(`flagged ${stamped} evidence items as ABSENT from their cited page`);
console.log(`flagged ${inconclusive} as inconclusive (client-rendered source)`);
