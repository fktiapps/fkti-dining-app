LOCAL MENU RESEARCH TICK — Deeply Connected Dining.

You are running unattended on Greg's Windows machine, in the worktree
C:\pf\fkti-dining-arch (NOT C:\pf\fkti-dining). Nobody is watching. Do a large,
useful increment and stop cleanly.

THIS MACHINE IS THE ONLY ENVIRONMENT WITH WORKING NETWORK EGRESS. The cloud
grinder is proxy-blocked and has logged `records +0 | egress: none` for 30+
consecutive runs; it can only harvest and housekeep. Research happens here or
not at all.

=== 1. START ===
    git pull --ff-only origin claude/architecture-phases-1-3

=== 2. WHAT IS LEFT — DO NOT HAND-ROLL THIS QUERY ===
    node scripts/menu-todo.mjs tokyo --by-source

That tool is the single source of truth and it is already correct. Two traps it
exists to avoid, both of which have cost real work:
  - scripts/agent-status.mjs calls a shard done when its output FILE exists. It lies.
  - Testing only "absent from tokyo_menus.json" re-selects HONEST EMPTIES forever.
    A verdict entry, even an empty one, means somebody already looked.
Work the `reachable now` records in the order printed: first_party, then
aggregator, then social_only. SKIP `tabelog_blocked` — Tabelog has served
Cf-Mitigated: challenge (HTTP 403) to this machine since 2026-09-02, so those
records cost a tick and yield a challenge page. They are parked, not abandoned.

=== 3. RESEARCH — GO BIG, IN PARALLEL ===
Aim for 12-20 records, not 3-5. The old "3-5 records then stop" instruction is
stale; Greg asked for large continuous runs.
  - Probe 10-20 shop sites per round: `curl -sL -A 'Mozilla/5.0 (Windows NT 10.0;
    Win64; x64)' ... &` then `wait`. Report code, bytes, and a count of price
    matches, then fetch the promising menu pages in parallel.
  - The shop's OWN site first — the homepage is usually NOT the menu page, so
    follow navigation to /menu or メニュー. WebFetch renders JS sites that curl
    cannot, and gets through some hosts that 403 curl (Retty). PDFs: download and
    `pdftotext -layout`; many are image scans and yield nothing, which is a
    finding, not a failure.
  - EVERY URL YOU ACTUALLY READ GOES IN `sources`.

WRITE THE VERDICT FILE AFTER EVERY SINGLE RECORD into
data/_menu_verdicts/tokyo_sN.json, matching the shard the record belongs to.
Load the file, add one record, rewrite the whole object. NEVER discard records
already there. Twelve agents were killed mid-shard; per-record saving is the only
reason these menus exist. Write records in batches of 6-10 per patch script, and
git commit + push every 15-20 records.

PER RECORD: verified (authoritative|partial|provisional), confidence
(high|medium|low), sources[], price_note, last_checked (today), items[] of
{ ja, romaji, en, price, section, gf, vegan, note, dish_key }.
DIET FLAGS exactly: gf: "gf"|"no"|"ask", vegan: "vegan"|"no"|"ask" ("" if
genuinely unknown). NOT "yes".

=== 4. HARD RULES ===
FABRICATION IS FORBIDDEN — Greg's absolute rule. Only what a source you actually
READ supports. A search snippet is NOT a source you read; use search to LOCATE a
page, then fetch and read it. Never infer a dish, price or diet flag from cuisine
type or from a shop's name. A shop with no findable menu gets items: [] and a
price_note saying so — that is CORRECT and COMPLETE. A low item count is never a
reason to fill anything in. If a source turns out to be a different BRANCH of a
chain, do not use it; say so and record the empty.

Conservative flags: soy sauce is wheat by default (teriyaki, sauces, gyoza,
marinades "no" unless tamari confirmed); ramen/udon/tempura/kara-age/
okonomiyaki/tonkatsu are wheat; even 十割 soba means 打ち粉 and shared water;
麦 is barley and NOT on Japan's statutory allergen list; dashi is usually
白だし/めんつゆ/だし醤油, so a dashi note is BOTH a vegan and a gluten fact;
麸/車麩 is pure wheat gluten and perfectly vegan.

No machine pass may raise a gf_confidence tier — downgrades apply automatically,
upgrades queue for Greg. Never write data/ while data/.rebuild.lock exists.

Keep price_note long only for a genuine trap. Routine items get a sentence.

=== 5. FINISH — NEVER LEAVE UNCOMMITTED WORK ===
    node scripts/merge-menus.mjs --apply
    node scripts/rebuild.mjs          # poll data/.rebuild.lock at its ABSOLUTE path
    npm test                          # expect 24 pass
    node scripts/lint-data.mjs        # expect 108 warnings, 0 errors
If the warning count moved, find out which record caused it before committing —
a diff of the full warning list against HEAD will name it.
Then commit and `git push origin HEAD:claude/architecture-phases-1-3`.
Append one short line to docs/GRINDER-LOG.md.

Report one line at the end: records added, items, coverage per menu-todo. No essay.
