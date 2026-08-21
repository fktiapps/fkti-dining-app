// Records that admit, in their own reader-facing text, that they were never verified.
//
// A verification shard found three shops whose gf_detail or notes say the venue "could
// not be verified" or open with "If real, ..." — and which were shipping to travellers
// anyway, with a diet label on top. One carries vegan_status "full" sourced from
// nothing but the words in its own name.
//
// This is the cheapest possible check and the most damning: the dataset already knew.
// Nobody had to fetch a page or read Japanese; the doubt was written down at research
// time and then the record shipped regardless.
//
// Hidden, not deleted, like every other existence finding here.
//
//   node scripts/flag-self-admitted-doubt.mjs [--apply]
import fs from 'node:fs';
import { CITIES, readCity, writeCity } from './lib-city.mjs';

const APPLY = process.argv.includes('--apply');
const DATE = '2026-08-21';

// The subject has to be the VENUE, not a claim about it. A first version matched any
// "could not be verified" and pulled in eight records that say the GF PROTOCOL could
// not be verified, or that staff confirmation could not be obtained — which is honest,
// correct caution about a shop that plainly exists. It would have hidden 浅草 更科天狐,
// which I had queued for an UPGRADE an hour earlier on the strength of its own
// 14-allergen PDF.
//
// So the venue noun must be the thing that failed: "the restaurant itself could not be
// verified", "could not confirm this restaurant exists", "the listing itself". Not
// "those claims could not be verified", not "confirmation from staff, which could not
// be verified here".
// Written as plain regex literals, not strings passed to new RegExp(): a  inside a
// JS string literal is a BACKSPACE character, not a word boundary, and it silently
// disabled every pattern here once already.
const DOUBT = [
  /the (specific |actual )?(restaurant|shop|venue|business|place|listing|cafe|café|store|bakery)( itself)?[^.;]{0,24}could not be verified/i,
  /could not confirm (that )?(this|the) (restaurant|shop|venue|business|place|listing|cafe|café|store|bakery)/i,
  /unable to verify (that )?(this|the) (restaurant|shop|venue|business|place|listing|cafe|café|store|bakery)/i,
  /no evidence (that |this )?(this|the) (restaurant|shop|venue|business|listing) exists/i,
  /(restaurant|shop|venue|business|listing) (itself )?(is |was )?(entirely )?unverifiable/i,
  /if (this is |it is |the shop is |the venue is )real/i,
  /(existence|the venue) (is )?unconfirmed/i,
  /cannot be confirmed to exist/i,
  /実在(が)?(確認|未確認)できな/,
  /存在(が)?確認できな/,
];
// Fields a traveller actually reads.
const FIELDS = ['gf_detail', 'vegan_detail', 'notes', 'cuisine', 'cultural_comfort'];

const hits = [];
for (const city of CITIES) {
  const j = readCity(city);
  let dirty = false;
  for (const r of j.places) {
    if (r.hidden) continue;                       // already out of the app
    let why = null, where = null;
    for (const f of FIELDS) {
      const t = r[f];
      if (typeof t !== 'string') continue;
      for (const rx of DOUBT) {
        const m = t.match(rx);
        if (!m) continue;
        why = m[0]; where = f; break;
      }
      if (why) break;
    }
    if (!why) continue;
    hits.push({ city, id: r.id, name: r.name, field: where, phrase: why,
                gf: r.gf_confidence, vegan: r.vegan_status });
    if (!APPLY) continue;
    r.hidden = 'unverified';
    r.existence = { status: 'self_admitted_unverified', checked: DATE,
      note: `The record's own ${where} says 「${why}」. It was shipping with ` +
            `gf_confidence "${r.gf_confidence}" and vegan_status "${r.vegan_status}" anyway.` };
    dirty = true;
  }
  if (dirty) writeCity(city, j);
}

console.log(`${hits.length} visible record(s) whose own text says they were never verified\n`);
for (const h of hits)
  console.log(`  ${h.city}/${String(h.name).slice(0, 30).padEnd(32)} gf=${String(h.gf).padEnd(10)} vegan=${String(h.vegan).padEnd(8)} [${h.field}] 「${h.phrase}」`);
fs.writeFileSync('data/_self_admitted_doubt.json', JSON.stringify(hits, null, 1));
if (!APPLY && hits.length) console.log('\nDRY RUN — nothing written. Re-run with --apply.');
