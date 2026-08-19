#!/usr/bin/env node
/**
 * Rebuild the derived state of the dataset from the raw city files.
 *
 * Every step is idempotent, so this can be re-run at any time. It exists so the
 * cleanup is reproducible rather than a sequence of one-off commands, and so the
 * ordering constraints are written down. Order matters in two places:
 *   - dedupe before the enrichment merge, so enrichment lands on the surviving record
 *   - apply the GF audit before regenerating the worklist, so the doc reflects the data
 *
 * Usage: npm run rebuild
 */
import { execFileSync } from 'node:child_process';

const STEPS = [
  ['normalize-cuisine.mjs',           'map cuisine_type onto the UI vocabulary'],
  ['normalize-records.mjs',           'drop junk records, legacy keys, empty dcp'],
  ['dedupe-tokyo.mjs',                'collapse _2/_3 harvest-suffix duplicates'],
  ['merge-dupes.mjs',                 'collapse cross-script duplicates'],
  ['merge-tokyo3-enrich.mjs',         'merge deep-enrich results (tier-gated)'],
  ['backfill-signoff-2026-07-02.mjs', 'record the 2026-07-02 audit on its records'],
  ['apply-gf-audit.mjs',              'apply adversarial pass-3 verdicts'],
  ['apply-owner-signoff.mjs',         "RE-ASSERT Greg's human gate (must follow the audit)"],
  ['fix-stale-sources.mjs',           'repoint the moved GF-guide citations (after the audit re-adds them)'],
  ['fix-source-independence.mjs',     'mark first-party and relay citations'],
  ['fix-city-assignment.mjs',         'flag records filed under the wrong city'],
  ['apply-audit-corrections.mjs',     'fix the factual errors the audit surfaced'],
  ['fit-bounds.mjs',                  'fit manifest bounds to actual coverage'],
  ['gen-signoff-worklist.mjs',        'regenerate GF_REVIEW_SIGNOFF.md from the data'],
];

const run = (script) => {
  try {
    return execFileSync(process.execPath, [`scripts/${script}`], { encoding: 'utf8' });
  } catch (e) {
    process.stdout.write((e.stdout || '') + (e.stderr || ''));
    console.error(`\n[FAIL] ${script}`);
    process.exit(1);
  }
};

for (const [script, why] of STEPS) {
  console.log(`\n>> ${script} - ${why}`);
  process.stdout.write(run(script).split('\n').slice(-6).join('\n'));
}

console.log('\n>> lint-data.mjs - verify');
try {
  process.stdout.write(execFileSync(process.execPath, ['scripts/lint-data.mjs'], { encoding: 'utf8' }));
} catch (e) {
  process.stdout.write((e.stdout || '') + (e.stderr || ''));
  process.exit(1);
}
