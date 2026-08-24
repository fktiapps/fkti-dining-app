// Collapse annotation blocks that were prepended once per rebuild.
//
// Two passes prepended a bracketed note to gf_detail/vegan_detail with no guard, and
// the pipeline is routinely run over data it has already processed. So the notes
// accumulated a copy every time:
//
//   enforce-cited-claims.mjs   [Held at "ask" <date>] The description below was not …
//   apply-owner-signoff.mjs    [Owner review <date>: GF ask→high. <reason>]
//
// 菓子屋 藤ノ宮 carried SIXTY-NINE copies of the pair in its gf_detail — 39,470
// characters, of which about 38,900 were the same two paragraphs over and over. This
// is not an internal field: index.html renders gf_detail straight into the detail
// panel, so a reader met the same warning sixty-nine times before reaching the
// description it was introducing.
//
// Both passes are guarded now, which stops the growth. It does not heal what is
// already there: those records sit at "ask", and enforce-cited-claims skips records
// already at "ask", so the write path never touches them again.
//
// The rule here: walk the LEADING bracketed blocks, keep the first occurrence of each
// distinct one in order, drop exact repeats, leave the remaining prose untouched. Only
// exact duplicates are removed — two genuinely different owner notes both survive.
//
//   node scripts/dedupe-detail-banners.mjs [--apply]

import { CITIES, readCity, writeCity } from './lib-city.mjs';

const APPLY = process.argv.includes('--apply');
const FIELDS = ['gf_detail', 'vegan_detail'];

// A block is "[...]" plus whatever prose follows it up to the next "[". That keeps the
// banner sentence attached to the bracket that introduces it, so the pair is deduped
// as one unit rather than leaving orphaned sentences behind.
const BLOCK = /^(\[[^\]]*\][^[]*)/;

// The block walk alone is not enough. A block is "[...]" plus the prose up to the next
// "[", so the LAST copy of a banner swallows the real description and is therefore
// never equal to the earlier copies — めん馬鹿一代 kept two identical banners for exactly
// that reason. These are the fixed, machine-generated sentences, so collapse them by
// their own text first and let the block walk handle everything else.
const BANNERS = [
  /\[Held at "ask" \d{4}-\d{2}-\d{2}\] The description below was not traceable to any source, so the GF label is held down until it is\.\s*/g,
  /\[Held at "some vegan options" \d{4}-\d{2}-\d{2}\] The "fully vegan" label was contradicted by this record's own cited sources\.\s*/g,
];

function collapse(text) {
  let t = String(text || '');

  // Keep the FIRST occurrence of each generated banner, drop the rest.
  for (const re of BANNERS) {
    const hits = t.match(re);
    if (!hits || hits.length < 2) continue;
    t = t.replace(re, '');
    t = hits[0] + t.replace(/^\s+/, '');
  }

  let rest = t, seen = new Set(), kept = [], m;
  while ((m = BLOCK.exec(rest))) {
    const block = m[1];
    const key = block.trim();
    if (!seen.has(key)) { seen.add(key); kept.push(block); }
    rest = rest.slice(block.length);
  }
  return (kept.join('') + rest).replace(/\s+/g, ' ').trim();
}

let touched = 0, saved = 0;
const worst = [];

for (const city of CITIES) {
  const j = readCity(city);
  let dirty = false;
  for (const r of j.places) {
    for (const f of FIELDS) {
      const before = String(r[f] || '');
      if (!before) continue;
      const after = collapse(before);
      if (after === before) continue;
      const copies = (before.match(/\[/g) || []).length - (after.match(/\[/g) || []).length;
      worst.push({ city, name: String(r.name).slice(0, 30), field: f,
                   was: before.length, now: after.length, removed: copies });
      if (APPLY) r[f] = after;
      touched++; saved += before.length - after.length; dirty = true;
    }
  }
  if (dirty && APPLY) writeCity(city, j);
}

worst.sort((a, b) => (b.was - b.now) - (a.was - a.now));
console.log(`${touched} field(s) carried duplicated annotation blocks; ${(saved / 1024).toFixed(0)}KB of repeated text removed\n`);
for (const w of worst.slice(0, 10))
  console.log(`  ${w.city}/${w.name.padEnd(32)} ${w.field.padEnd(13)} ${String(w.was).padStart(6)} -> ${String(w.now).padStart(5)} chars (${w.removed} repeated block(s))`);
if (worst.length > 10) console.log(`  … ${worst.length - 10} more`);
if (!APPLY) console.log('\nDRY RUN — nothing written. Re-run with --apply.');
