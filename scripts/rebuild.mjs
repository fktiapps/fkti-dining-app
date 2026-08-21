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
  ['merge-tokyo-enrich-verdicts.mjs', 'apply enrich coords + names; hide unverifiable records', ['--apply']],
  // Second dedupe pass: applying the enrich names can REVEAL a duplicate the first
  // pass could not see. かんだまつや and 神田まつや 本店 were the same shop listed twice
  // by the sweep, in kana and in kanji, and only became detectable once the rename
  // made the names identical — at which point they also share coordinates exactly.
  ['merge-dupes.mjs',                 'collapse duplicates the renames just revealed'],
  ['merge-ramen.mjs',                 'merge researched ramen blocks (schema-validated)'],
  ['merge-menus.mjs',                 'merge researched menus + derived menu flags'],
  ['backfill-signoff-2026-07-02.mjs', 'record the 2026-07-02 audit on its records'],
  ['apply-gf-audit.mjs',              'apply adversarial pass-3 verdicts'],
  ['apply-owner-signoff.mjs',         "RE-ASSERT Greg's human gate (must follow the audit)"],
  ['fix-stale-sources.mjs',           'repoint the moved GF-guide citations (after the audit re-adds them)'],
  ['fix-source-independence.mjs',     'mark first-party and relay citations'],
  ['fix-city-assignment.mjs',         'flag records filed under the wrong city'],
  ['apply-audit-corrections.mjs',     'fix the factual errors the audit surfaced'],
  // Second pass: the merge steps above introduce cuisine_type slugs coined by the
  // research agents (teishoku, tonteki, tonkatsu), which the first pass ran too
  // early to see. Idempotent, so running it twice costs nothing and stops a raw
  // slug reaching the filter chips.
  ['normalize-cuisine.mjs',           're-map slugs introduced by the merge steps', ['--lenient']],
  ['quarantine-orphan-menus.mjs',      'pull menus whose record was deduped away', ['--apply']],
  // Must follow every tier-setting pass. A GF label above "ask" that cites nothing
  // gets held down until a source is attached — see the script header.
  // Must precede enforce-cited-claims: it is what marks a claim unsupported, and
  // that mark is what the enforcement acts on.
  // After merge-menus, before the tier passes: an item that is vegan AND made of
  // wheat gluten is the one place where the two diet layers cross badly.
  ['flag-vegan-gluten-traps.mjs',     'flag vegan menu items made of wheat gluten', ['--apply']],
  // After merge-menus: it reads the shop's own researched menu as evidence against
  // the shop's own diet label.
  ['flag-bare-root-citations.mjs',    'mark safety claims cited to a guide front page', ['--apply']],
  ['fix-menu-promotions.mjs',         'hold down diet labels that contradict their own detail text', ['--apply']],
  ['flag-vegan-contradictions.mjs',   'hold down "fully vegan" contradicted by the menu', ['--apply']],
  ['flag-borrowed-evidence.mjs',      "flag records citing another shop's evidence", ['--apply']],
  ['apply-cite-verdicts.mjs',         'apply citation-verification verdicts to claims', ['--apply']],
  ['enforce-cited-claims.mjs',        'hold down GF labels that cite no source', ['--apply']],
  ['fit-bounds.mjs',                  'fit manifest bounds to actual coverage'],
  ['gen-underrated-queue.mjs',        'collect upgrade recommendations for the human gate'],
  ['gen-signoff-worklist.mjs',        'regenerate GF_REVIEW_SIGNOFF.md from the data'],
  // Last, because it hashes the shipped files and must see their final state. The
  // service worker keys every cache off VERSION, so without this a returning user
  // keeps serving the old city data no matter how many times we deploy.
  // Warn-only: the enrichment reads restaurants' own marketing, and some of it makes
  // medical claims. This app is used by people managing a real medical condition —
  // it must not become a channel for a soba shop's cancer-prevention copy.
  ['flag-health-claims.mjs',          'surface medical claims picked up from shop marketing'],
  ['bump-build.mjs',                  'bump the SW cache version iff shipped content changed'],
];

const run = (script, args = []) => {
  try {
    return execFileSync(process.execPath, [`scripts/${script}`, ...args], { encoding: 'utf8' });
  } catch (e) {
    process.stdout.write((e.stdout || '') + (e.stderr || ''));
    console.error(`\n[FAIL] ${script}`);
    process.exit(1);
  }
};

for (const [script, why, args] of STEPS) {
  console.log(`\n>> ${script} - ${why}`);
  process.stdout.write(run(script, args).split('\n').slice(-6).join('\n'));
}

console.log('\n>> lint-data.mjs - verify');
try {
  process.stdout.write(execFileSync(process.execPath, ['scripts/lint-data.mjs'], { encoding: 'utf8' }));
} catch (e) {
  process.stdout.write((e.stdout || '') + (e.stderr || ''));
  process.exit(1);
}
