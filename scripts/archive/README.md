# Retired scripts

Kept for the historical record, not for running. Nothing here is reachable from
`scripts/rebuild.mjs` or `package.json`, and nothing here should be revived
without reading why it was retired.

**`*-workflow.js` and `gen-*-workflow.mjs`** — the fleet pattern. These spawned
~190 agents per city and produced most of the dataset. handoff.txt retires them
explicitly: Greg moved off Max specifically to stop paying for this, so on a Pro
budget it is not a tool that exists. The *harvest* lesson survives (if a batch
hangs on 1 of N, stop it and harvest the completed per-agent .jsonl files); the
dispatch pattern does not.

**`tokyo-verify-shard-*.js`** — 28 one-shot shard runners from the citation
verification sweep. Shards are now generated on demand; see
`scripts/gen-cite-verify-shards.mjs` and `scripts/agent-status.mjs`.

**`tokyo3-enrich-batch.js`** — one-shot batch driver for the Tokyo deep-enrich pass.

One-shot city builders (`build-nara.mjs`, `build-kanazawa.mjs`, …) and the
`gen-*`/`harvest-*` helpers deliberately stayed in `scripts/`: they are the record
of how each city was assembled and are occasionally re-read, even though they are
not re-run.
