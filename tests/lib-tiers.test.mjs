// Tests for the safety vocabulary and the tier writer.
//
// WHY THESE AND NOT OTHERS
// lint-data.mjs already checks the data. What nothing checked was the LOGIC — tier
// precedence, and whether a machine pass can write over a human decision. That is this
// project's recurring failure and it is invisible by nature: four passes were silently
// overwriting Greg's gate, each with a locally defensible rule, and every one of them
// was found by hand after the fact.
//
// So these test the rules, not the records. Run from the repo root:
//     npm test
//
// NOTE: setTier appends to data/_tier_writes.jsonl on process exit, by design. That
// file is a gitignored per-rebuild diagnostic, so tests adding to it is harmless — but
// do not run these while a rebuild is in flight.

import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import {
  GF_TIERS, VEGAN_TIERS, GF_LABEL, VEGAN_LABEL, EVIDENCE_KEYS, GF_EVIDENCE_KEYS,
  GF_RANK, VEGAN_RANK, isTier, labelFor, rankOf, moreCautious, parseTier,
  setTier, syncLabel, signoffFor, rejectionFor,
} from '../scripts/lib-tiers.mjs';

const rec = (over = {}) => ({ id: 't1', name: 'Test Shop', gf_confidence: 'no',
  gf_label: 'Not gluten-free', vegan_status: 'no', vegan_label: 'Not vegan', ...over });

describe('vocabulary', () => {
  test('the enums are exactly what REVIEW_PROTOCOL.md defines', () => {
    assert.deepEqual(GF_TIERS, ['dedicated', 'high', 'options', 'ask', 'no']);
    assert.deepEqual(VEGAN_TIERS, ['full', 'options', 'limited', 'ask', 'no']);
  });

  test('every tier has a label, and no label is shared between two tiers', () => {
    for (const t of GF_TIERS) assert.ok(GF_LABEL[t], `no GF label for ${t}`);
    for (const t of VEGAN_TIERS) assert.ok(VEGAN_LABEL[t], `no vegan label for ${t}`);
    assert.equal(new Set(Object.values(GF_LABEL)).size, GF_TIERS.length);
    assert.equal(new Set(Object.values(VEGAN_LABEL)).size, VEGAN_TIERS.length);
  });

  test('the five evidence keys, and the GF-only subset', () => {
    assert.deepEqual(EVIDENCE_KEYS, ['gf_cross_contamination', 'soy_sauce_wheat',
      'vegan_cross_contact', 'staff_allergy_handling', 'positives']);
    for (const k of GF_EVIDENCE_KEYS) assert.ok(EVIDENCE_KEYS.includes(k));
    // vegan_cross_contact is deliberately NOT in the GF subset. Whether a vegan finding
    // is also GF evidence depends on whether it names dashi/broth/tare — a judgement,
    // not a field, and REVIEW_PROTOCOL.md makes it by hand.
    assert.ok(!GF_EVIDENCE_KEYS.includes('vegan_cross_contact'));
  });
});

describe('setTier — the write gate', () => {
  test('accepts every valid tier on both axes and derives the label', () => {
    for (const t of GF_TIERS) {
      const r = rec();
      setTier(r, 'gf_confidence', t);
      assert.equal(r.gf_confidence, t);
      assert.equal(r.gf_label, GF_LABEL[t]);
    }
    for (const t of VEGAN_TIERS) {
      const r = rec();
      setTier(r, 'vegan_status', t);
      assert.equal(r.vegan_status, t);
      assert.equal(r.vegan_label, VEGAN_LABEL[t]);
    }
  });

  // THE BUG THIS EXISTS FOR. Agents write the verdict and then explain it in the same
  // field. Exact-enum filters then match no dial and the restaurant is simply absent
  // from the app — no exception, no log line, no lint failure at the time. It happened
  // four separate times.
  test('refuses prose in a tier field', () => {
    const r = rec();
    assert.throws(() => setTier(r, 'gf_confidence',
      'options — and NOT higher, on the operator\'s own words'), /not a valid gf_confidence/);
    assert.equal(r.gf_confidence, 'no', 'the record must not be left half-written');
  });

  test('the error names the record and points at parseTier', () => {
    try {
      setTier(rec({ name: 'Almondou' }), 'gf_confidence', 'options, per staff');
      assert.fail('should have thrown');
    } catch (e) {
      assert.match(e.message, /Almondou/);
      assert.match(e.message, /parseTier/);
      assert.match(e.message, /disappears from the app/);
    }
  });

  test('refuses an unknown tier value and an unknown field', () => {
    assert.throws(() => setTier(rec(), 'gf_confidence', 'probably fine'), /not a valid/);
    assert.throws(() => setTier(rec(), 'gf_confidence', ''), /not a valid/);
    assert.throws(() => setTier(rec(), 'gf_conf', 'no'), /not a tier field/);
    // `full` is a vegan tier and must not be accepted on the GF axis.
    assert.throws(() => setTier(rec(), 'gf_confidence', 'full'), /not a valid/);
    assert.throws(() => setTier(rec(), 'vegan_status', 'dedicated'), /not a valid/);
  });

  test('reports whether it changed anything', () => {
    const r = rec();
    assert.equal(setTier(r, 'gf_confidence', 'options'), true);
    assert.equal(setTier(r, 'gf_confidence', 'options'), false, 'no-op must report false');
  });

  test('repairs a label that drifted from its tier, even with no tier change', () => {
    const r = rec({ gf_confidence: 'options', gf_label: 'Fully vegan' });
    assert.equal(setTier(r, 'gf_confidence', 'options'), true);
    assert.equal(r.gf_label, GF_LABEL.options);
  });
});

describe('parseTier — parse, then validate; never simply reject', () => {
  // A rejected verdict throws away the research AND leaves the record wrong.
  test('splits a leading valid tier from its explanation', () => {
    for (const [input, tier, note] of [
      ['options — and NOT higher, per staff', 'options', 'and NOT higher, per staff'],
      ['ask, the kitchen is shared', 'ask', 'the kitchen is shared'],
      ['no: ramen is wheat by definition', 'no', 'ramen is wheat by definition'],
      ['dedicated', 'dedicated', ''],
    ]) {
      const got = parseTier('gf_confidence', input);
      assert.equal(got.tier, tier, input);
      assert.equal(got.note, note, input);
    }
  });

  test('returns no tier when there is nothing usable, keeping the text', () => {
    assert.deepEqual(parseTier('gf_confidence', 'probably fine'), { tier: null, note: 'probably fine' });
    assert.deepEqual(parseTier('gf_confidence', null), { tier: null, note: '' });
  });

  test('does not mistake a longer tier for a shorter one', () => {
    assert.equal(parseTier('vegan_status', 'options for lunch').tier, 'options');
    assert.equal(parseTier('gf_confidence', 'no').tier, 'no');
  });
});

describe('cautiousness ranking', () => {
  test('GF ranks run no < ask < options < high < dedicated', () => {
    assert.ok(GF_RANK.no < GF_RANK.ask);
    assert.ok(GF_RANK.ask < GF_RANK.options);
    assert.ok(GF_RANK.options < GF_RANK.high);
    assert.ok(GF_RANK.high < GF_RANK.dedicated);
  });

  // Deliberate. `limited` and `options` describe different things ("little on offer" vs
  // "a few dishes"), not different amounts of one thing, so ordering them invents a fact.
  test('vegan limited and options are deliberately tied', () => {
    assert.equal(VEGAN_RANK.limited, VEGAN_RANK.options);
  });

  test('moreCautious picks the lower-risk tier both ways round', () => {
    assert.equal(moreCautious('gf_confidence', 'dedicated', 'ask'), 'ask');
    assert.equal(moreCautious('gf_confidence', 'ask', 'dedicated'), 'ask');
    assert.equal(moreCautious('vegan_status', 'full', 'no'), 'no');
  });

  test('helpers agree with the tables', () => {
    assert.equal(labelFor('gf_confidence', 'dedicated'), 'Dedicated gluten-free');
    assert.equal(rankOf('vegan_status', 'full'), VEGAN_RANK.full);
    assert.ok(isTier('gf_confidence', 'high'));
    assert.ok(!isTier('gf_confidence', 'full'));
  });
});

describe('the human gate', () => {
  test('a sign-off is found for the field it names', () => {
    const r = rec({ safety: { owner_signoff: { field: 'vegan_status', to: 'full', by: 'Greg' } } });
    assert.equal(signoffFor(r, 'vegan_status').to, 'full');
    assert.equal(signoffFor(r, 'gf_confidence'), null);
  });

  // 55 of 115 sign-offs predate the `field` key. All are GF: 46 have a `to` of
  // dedicated/high, values that exist only on the GF axis, and none is vegan-only.
  test('a sign-off with no field means gf_confidence', () => {
    const r = rec({ safety: { owner_signoff: { to: 'dedicated', by: 'Greg' } } });
    assert.equal(signoffFor(r, 'gf_confidence').to, 'dedicated');
    assert.equal(signoffFor(r, 'vegan_status'), null);
  });

  // A record can be ruled on TWICE, on different axes, and owner_signoff holds one
  // object — so the second displaces the first. Reading only the live object put 味農家
  // back to "ask" after its two duplicate records were merged.
  test('a ruling displaced into the log is still found', () => {
    const r = rec({ safety: {
      owner_signoff: { field: 'vegan_status', to: 'full', by: 'Greg', date: '2026-08-23' },
      owner_signoff_log: [{ field: 'gf_confidence', to: 'options', by: 'Greg', date: '2026-08-23' }],
    } });
    assert.equal(signoffFor(r, 'vegan_status').to, 'full');
    assert.equal(signoffFor(r, 'gf_confidence').to, 'options', 'the GF ruling must survive');
  });

  test('the latest ruling on an axis wins', () => {
    const r = rec({ safety: { owner_signoff_log: [
      { field: 'gf_confidence', to: 'high', date: '2026-07-02' },
      { field: 'gf_confidence', to: 'options', date: '2026-08-23' },
    ] } });
    assert.equal(signoffFor(r, 'gf_confidence').to, 'options');
  });

  test('no sign-off anywhere returns null rather than throwing', () => {
    assert.equal(signoffFor(rec(), 'gf_confidence'), null);
    assert.equal(signoffFor(null, 'gf_confidence'), null);
    assert.equal(signoffFor(rec({ safety: {} }), 'gf_confidence'), null);
  });

  // The queue regenerates every rebuild, so a refusal that lives only on the record is
  // undone on the next cycle. 杏もん堂 was reverted and re-promoted three times before
  // data/_gate_rejections.json existed.
  test('a real gate rejection is found by id and field', () => {
    const r = rec({ id: 'himeji_almondou' });
    const j = rejectionFor(r, 'gf_confidence');
    assert.ok(j, 'the 杏もん堂 refusal must be readable from the rejections file');
    assert.equal(j.keep, 'no');
    assert.equal(rejectionFor(r, 'vegan_status'), null, 'a refusal binds one axis only');
    assert.equal(rejectionFor(rec({ id: 'not_a_real_id' }), 'gf_confidence'), null);
  });
});

describe('the audit trail', () => {
  test('a write against a sign-off is flagged, and an agreeing write is not', () => {
    const against = rec({ id: 'x1', safety: { owner_signoff: { field: 'gf_confidence', to: 'dedicated', decision: 'keep' } } });
    setTier(against, 'gf_confidence', 'ask', { why: 'test' });
    assert.equal(against.gf_confidence, 'ask', 'setTier must NOT refuse — it records, lint reports');

    const agreeing = rec({ id: 'x2', safety: { owner_signoff: { field: 'gf_confidence', to: 'options', decision: 'keep' } } });
    setTier(agreeing, 'gf_confidence', 'options', { why: 'test' });
    assert.equal(agreeing.gf_confidence, 'options');
  });
});

describe('syncLabel', () => {
  test('brings a stale label back to its tier and reports whether it moved', () => {
    const r = rec({ gf_confidence: 'high', gf_label: 'Not gluten-free' });
    assert.equal(syncLabel(r, 'gf_confidence'), true);
    assert.equal(r.gf_label, GF_LABEL.high);
    assert.equal(syncLabel(r, 'gf_confidence'), false);
  });
});
