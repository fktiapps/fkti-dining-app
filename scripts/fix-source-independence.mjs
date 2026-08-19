// Correct source-independence errors in the safety evidence, and recompute the
// independent-source count from something defensible.
//
// Two problems the adversarial pass found:
//
//  1. nhkomorebi.com ("こもれび") is naco's personal blog — its own navigation reads
//     「プロフィール naco / みちのり弁当」 and she founded みちのり弁当 / みちのり亭. The
//     Michinori records cite it as third-party corroboration; there it is FIRST-PARTY,
//     which is precisely the leg a `dedicated` label needs to come from outside the
//     business. For OTHER shops it cites, the blog is a genuine independent account —
//     though she runs a competing GF business, so it is an industry peer, not a
//     disinterested observer.
//
//  2. ashiya-obentofesta.com is a "グルテンフリー大辞典" content hub bylined 管理人 that
//     relays shop marketing without visiting. It was the sole origin of two records'
//     cross-contamination claims.
//
// The independent_source_count is deliberately NOT recomputed. That number is the
// auditor's judgment about which sources corroborate GF HANDLING; a mechanical
// count of distinct hosts is a different and worse metric — it would score a
// Tabelog listing as corroboration and inflated several thin records when tried.
import { CITIES, readCity, writeCity } from './lib-city.mjs';

const DATE = '2026-08-19';
const FIELDS = ['gf_cross_contamination', 'soy_sauce_wheat', 'vegan_cross_contact',
                'staff_allergy_handling', 'positives'];

const NHK = 'nhkomorebi.com';
const NHK_OWNS = /みちのり|michinori/i;

// Not independent publishers: shop-controlled, or relays that reprint without visiting.
const RELAY = /ashiya-obentofesta\.com|prtimes\.jp|komeko-palette\.com/i;
const SELF = /instagram\.com|facebook\.com|twitter\.com|x\.com|base\.shop|thebase\.in|stores\.jp|amebaownd|shopify/i;

const host = u => { try { return new URL(u).host.replace(/^www\./, ''); } catch { return null; } };

const rev = r => r.gf_review && typeof r.gf_review.independent_source_count === 'number';
const countNhk = r => FIELDS.reduce((n, f) => n + ((r.safety?.[f]) || []).filter(e => String(e.source || '').includes(NHK)).length, 0);

let firstParty = 0, peer = 0, relayMarked = 0, noted = 0;
const log = [];

for (const city of CITIES) {
  const j = readCity(city);
  let dirty = false;

  for (const r of j.places) {
    const nhkIsOwn = NHK_OWNS.test(r.name) || NHK_OWNS.test(r.website || '');

    for (const f of FIELDS) {
      for (const e of (r.safety?.[f]) || []) {
        const src = String(e.source || '');
        if (src.includes(NHK)) {
          e.source_independence = nhkIsOwn
            ? { date: DATE, level: 'first-party',
                note: 'nhkomorebi.com is the blog of naco, who founded みちのり弁当 / みちのり亭. For this business it is the owner writing about her own shop — it does NOT count as independent corroboration.' }
            : { date: DATE, level: 'independent-peer',
                note: 'nhkomorebi.com is an allergy blogger writing about another operator\'s shop, so it is independent here — but she also runs a gluten-free business (みちのり弁当), so treat it as an industry-peer account rather than a disinterested one.' };
          nhkIsOwn ? firstParty++ : peer++;
          dirty = true;
        } else if (RELAY.test(src)) {
          e.source_independence = { date: DATE, level: 'relay',
            note: 'This source reprints shop marketing rather than reporting a visit (a curated hub or a press release). It corroborates that a claim was MADE, not that it was verified.' };
          relayMarked++; dirty = true;
        }
      }
    }

    if (nhkIsOwn && r.chef_bio?.sources?.some(s => String(s).includes(NHK))) {
      r.chef_bio.sources = r.chef_bio.sources.filter(s => !String(s).includes(NHK));
      dirty = true;
    }

    // Deliberately NOT recomputing independent_source_count here. That number is
    // the auditor's judgment about which sources corroborate GF HANDLING; a
    // mechanical count of distinct hosts is not the same thing and inflates it
    // (a Tabelog listing is a distinct host but corroborates nothing about wheat).
    // Where the count was demonstrably wrong, it is corrected by name below.
    if (nhkIsOwn && rev(r)) {
      const n = countNhk(r);
      if (n && !r.gf_review.source_independence_note) {
        r.gf_review.source_independence_note =
          `Independence correction ${DATE}: ${n} citation(s) to nhkomorebi.com were treated as third-party corroboration but are first-party — the blog belongs to this business's founder. The recorded independent_source_count of ${r.gf_review.independent_source_count} is inflated by that much. The label was retained on other evidence (FindMeGlutenFree dedicated listing, co-trip, jouhou.nagoya, TripAdvisor), not on these.`;
        noted++; dirty = true;
        log.push(`${city}/${r.name.split(' (')[0].slice(0, 34)}  ${n} first-party citation(s) flagged as inflating the count`);
      }
    }
  }
  if (dirty) writeCity(city, j);
}

log.sort();
log.forEach(l => console.log('  ' + l));
console.log(`\n${firstParty} first-party citation(s), ${peer} industry-peer, ${relayMarked} relay-marked, ${noted} count-inflation note(s)`);
