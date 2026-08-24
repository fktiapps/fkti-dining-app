// The safety vocabulary, in one place, with a validating writer.
//
// WHY THIS EXISTS
// The tier -> label map was copy-pasted into 27 scripts plus index.html, and it had
// already drifted three ways: 'Dedicated gluten-free' vs 'Dedicated · celiac-safe',
// and 'GF — ask' vs 'GF — ask staff'. The five-key evidence list was duplicated the
// same 27 times. sync-diet-labels.mjs was repairing the drift on every rebuild,
// which worked, but repairing a bug every run is not the same as not having it.
//
// The bigger reason is setTier(). Four separate times, a pass wrote a verdict AND its
// justification into the same field:
//     gf_confidence: "options — and NOT higher, on the operator's own words"
// Exact-enum consumers silently do nothing with that. Exact-enum FILTERS match no
// dial, so the restaurant is simply ABSENT from the app — no exception, no log line,
// no lint failure at the time. Validating at the WRITE SITE is the only place this
// can be caught, because by the time it is in the file there is nothing to catch.
//
// Use setTier() for anything that assigns a tier. Read the maps from here rather
// than declaring your own.

import fs from 'node:fs';
import path from 'node:path';

// ---------------------------------------------------------------- vocabulary

// Protocol order: most confident first. REVIEW_PROTOCOL.md is the authority.
export const GF_TIERS = ['dedicated', 'high', 'options', 'ask', 'no'];
export const VEGAN_TIERS = ['full', 'options', 'limited', 'ask', 'no'];

// The canonical label strings. These are what the data actually holds and what
// index.html derives — the app no longer reads the stored label as a source of
// truth, but plenty of other things still do.
export const GF_LABEL = {
  dedicated: 'Dedicated gluten-free', high: 'Strong GF focus',
  options: 'Some GF options', ask: 'GF — ask', no: 'Not gluten-free',
};
export const VEGAN_LABEL = {
  full: 'Fully vegan', options: 'Some vegan options',
  limited: 'Limited vegan', ask: 'Vegan — ask', no: 'Not vegan',
};

// Cautiousness rank, for "align the twins to the more cautious tier" comparisons.
// Higher = a more permissive claim = more dangerous if wrong.
//
// NOTE the deliberate tie: for vegan, `limited` and `options` are both 2. They
// describe different things ("a few dishes" vs "little on offer"), not different
// amounts of the same thing, so ordering them would invent a fact. Carried over
// from flag-divergent-duplicates.mjs, which got this right first.
export const GF_RANK = { no: 0, ask: 1, options: 2, high: 3, dedicated: 4 };
export const VEGAN_RANK = { no: 0, ask: 1, limited: 2, options: 2, full: 3 };

// The five keys under place.safety that hold {text, source} findings.
export const EVIDENCE_KEYS = [
  'gf_cross_contamination', 'soy_sauce_wheat', 'vegan_cross_contact',
  'staff_allergy_handling', 'positives',
];

// The subset that is GF evidence by construction. vegan_cross_contact is NOT here,
// but see REVIEW_PROTOCOL.md: a vegan finding that names broth, dashi, tare, miso,
// seasoning or sauce IS gluten evidence, because Japanese 出汁 is usually built from
// 白だし/めんつゆ/だし醤油 and those are soy sauce, and soy sauce is wheat by default.
export const GF_EVIDENCE_KEYS = ['gf_cross_contamination', 'soy_sauce_wheat'];

// Everything a tier field needs, keyed by the field name itself.
export const TIER_FIELDS = {
  gf_confidence: { tiers: GF_TIERS, labels: GF_LABEL, rank: GF_RANK, labelField: 'gf_label', axis: 'gf' },
  vegan_status: { tiers: VEGAN_TIERS, labels: VEGAN_LABEL, rank: VEGAN_RANK, labelField: 'vegan_label', axis: 'vegan' },
};

const spec = field => {
  const s = TIER_FIELDS[field];
  if (!s) throw new Error(`lib-tiers: "${field}" is not a tier field (expected ${Object.keys(TIER_FIELDS).join(' or ')})`);
  return s;
};

// ---------------------------------------------------------------- reading

export const isTier = (field, value) => spec(field).tiers.includes(value);
export const labelFor = (field, value) => spec(field).labels[value];
export const rankOf = (field, value) => spec(field).rank[value];

/** The more cautious of two tiers. Ties return `a`. */
export function moreCautious(field, a, b) {
  const { rank } = spec(field);
  if (!(a in rank)) return b;
  if (!(b in rank)) return a;
  return rank[a] <= rank[b] ? a : b;
}

/**
 * Parse, then validate — never simply reject.
 *
 * Agents write the verdict and then explain it in the same field. A rejected verdict
 * throws away the research AND leaves the record wrong, so take the leading token if
 * it is a valid tier and hand the rest back as a note for a *_note field.
 * normalize-sweep-tiers.mjs is the original implementation of this rule.
 *
 * Returns { tier, note } — tier is null if nothing usable was found.
 */
export function parseTier(field, raw) {
  const { tiers } = spec(field);
  if (typeof raw !== 'string') return { tier: null, note: '' };
  const trimmed = raw.trim();
  if (tiers.includes(trimmed)) return { tier: trimmed, note: '' };
  const lower = trimmed.toLowerCase();
  // Longest match first so "options" is not shadowed by a shorter sibling.
  for (const t of [...tiers].sort((a, b) => b.length - a.length)) {
    if (lower === t || lower.startsWith(t + ' ') || lower.startsWith(t + ',')
        || lower.startsWith(t + ' —') || lower.startsWith(t + ' -') || lower.startsWith(t + ':')) {
      return { tier: t, note: trimmed.slice(t.length).replace(/^[\s,:—-]+/, '') };
    }
  }
  return { tier: null, note: trimmed };
}

// ---------------------------------------------------------------- the gate

let _rejections = null;
const rejections = () => {
  if (_rejections) return _rejections;
  try {
    const j = JSON.parse(fs.readFileSync('data/_gate_rejections.json', 'utf8'));
    _rejections = j.rejections || [];
  } catch { _rejections = []; }
  return _rejections;
};

/**
 * The owner sign-off governing `field` on this record, or null.
 *
 * 55 of the 115 sign-offs predate the `field` key. They are all GF: their `to` is
 * `dedicated` or `high` in 46 cases (values that exist only on the GF axis), zero
 * are vegan-only values, and the nine that carry an ambiguous `to` give GF reasons
 * — celiac corroboration, 工房に小麦を持ち込まない, seasoning cross-contact. They came
 * out of the REVIEW_PROTOCOL pass-3 adversarial GF review, which is GF-only by
 * construction. So a missing `field` means gf_confidence.
 */
export function signoffFor(record, field) {
  const s = record?.safety?.owner_signoff;
  if (s && (s.field || 'gf_confidence') === field) return s;
  // A record can be ruled on TWICE, on different axes, and safety.owner_signoff holds
  // exactly one object — so the second ruling displaces the first. owner_signoff_log is
  // the append-only record of all of them, and a guard that reads only the live object
  // silently loses whichever decision came first.
  //
  // 味農家 is the case: two duplicate records were signed off separately, one on
  // gf_confidence and one on vegan_status, and merging them left the GF ruling visible
  // only in the log. enforce-cited-claims read the live object, saw a vegan sign-off,
  // concluded there was no GF ruling, and put the tier back to "ask".
  const log = record?.safety?.owner_signoff_log;
  if (!Array.isArray(log)) return null;
  const hits = log.filter(x => (x.field || 'gf_confidence') === field);
  // Latest by date wins, matching "his most recent ruling on this axis stands".
  return hits.sort((a, b) => String(a.date || '').localeCompare(String(b.date || ''))).pop() || null;
}

/** The gate rejection governing this id+field, or null. */
export function rejectionFor(record, field) {
  return rejections().find(r => r.id === record?.id && r.field === field) || null;
}

// ---------------------------------------------------------------- the audit log

// Every tier write lands here, so that "which pass moved this record?" is a grep
// instead of a bisect.
//
// Four passes were silently overwriting Greg's human gate, and each had a locally
// defensible rule: fix-menu-promotions ("the detail text wins"), flag-divergent-
// duplicates ("align twins to the more cautious tier"), enforce-cited-claims ("a
// disproven claim beats a sign-off"), merge-tokyo3-enrich ("re-merge from scratch,
// therefore idempotent, therefore the last word"). They were invisible because they
// left no marker the linter read. This is that marker.
//
// Truncated by rebuild.mjs at the start of each run, so it describes ONE rebuild.
// Gitignored: it is a diagnostic, regenerable, and would otherwise churn every diff.
const LOG = 'data/_tier_writes.jsonl';
const SCRIPT = path.basename(process.argv[1] || 'unknown');
let buffer = [];
let flushed = false;

const flush = () => {
  if (flushed || !buffer.length) return;
  flushed = true;
  try {
    fs.mkdirSync(path.dirname(LOG), { recursive: true });
    fs.appendFileSync(LOG, buffer.map(e => JSON.stringify(e)).join('\n') + '\n');
  } catch { /* a diagnostic must never take the pipeline down */ }
  buffer = [];
};
// Buffered, because a full rebuild writes thousands of tiers and one appendFileSync
// per write is slow enough to notice on a pipeline that already takes 5-8 minutes.
process.on('exit', flush);
for (const sig of ['SIGINT', 'SIGTERM']) process.on(sig, () => { flush(); process.exit(130); });

/** Read back this run's log. Used by lint-data.mjs. */
export function readTierWrites() {
  flush();
  try {
    return fs.readFileSync(LOG, 'utf8').split('\n').filter(Boolean).map(l => {
      try { return JSON.parse(l); } catch { return null; }
    }).filter(Boolean);
  } catch { return []; }
}

// ---------------------------------------------------------------- the writer

/**
 * Assign a tier. The ONLY supported way to write gf_confidence or vegan_status.
 *
 * Validates against the enum and throws on anything else — prose in a tier field is
 * how a restaurant vanishes from the app without an error anywhere. Keeps the stored
 * label in step. Records the write, and flags it if it contradicts the human gate.
 *
 * This does NOT refuse a gate-contradicting write. It cannot: apply-owner-signoff and
 * apply-gate-tranche exist precisely to write gated fields, and several enforcement
 * passes are RIGHT to hold a signed-off record down when a claim is later disproven.
 * Deciding which is which is Greg's job. The job here is to make sure the decision is
 * never made invisibly — so it is logged, and lint-data.mjs reports it by name.
 *
 * @returns {boolean} true if the record changed.
 */
export function setTier(record, field, value, { by = SCRIPT, why = '' } = {}) {
  const { labels, labelField } = spec(field);

  if (!isTier(field, value)) {
    const parsed = parseTier(field, value);
    const hint = parsed.tier
      ? ` Did you mean "${parsed.tier}"? Use parseTier() to split the verdict from its explanation, and keep the explanation in a *_note field.`
      : '';
    throw new Error(
      `lib-tiers: ${JSON.stringify(value)} is not a valid ${field}.\n` +
      `  Valid: ${spec(field).tiers.join(' | ')}\n` +
      `  Record: ${record?.id || '(no id)'} ${record?.name || ''}\n` +
      `  A malformed tier does not error at read time — it matches no filter and the` +
      ` record disappears from the app.${hint}`);
  }

  const from = record[field];
  if (from === value && record[labelField] === labels[value]) return false;

  record[field] = value;
  record[labelField] = labels[value];

  if (from !== value) {
    const so = signoffFor(record, field);
    const rj = rejectionFor(record, field);
    buffer.push({
      ts: new Date().toISOString(), script: SCRIPT, id: record?.id, name: record?.name,
      field, from: from ?? null, to: value, by, why,
      // `to` is absent on a handful of older sign-offs; nothing to contradict then.
      contradicts_signoff: !!(so && so.to && so.to !== value),
      signoff_to: so?.to ?? null,
      contradicts_rejection: !!(rj && rj.keep && rj.keep !== value),
      rejection_keep: rj?.keep ?? null,
    });
  }
  return true;
}

/** Bring a stored label back in step with its tier. Returns true if it changed. */
export function syncLabel(record, field) {
  const { labels, labelField } = spec(field);
  const want = labels[record[field]];
  if (!want || record[labelField] === want) return false;
  record[labelField] = want;
  return true;
}
