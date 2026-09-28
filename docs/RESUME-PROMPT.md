You are resuming DCD work unattended (Windows task "DCD resume", one-shot). Greg is not present; he has
said not to wait for him on routine work. Work in C:\PF\fkti-dining on branch main.

1. Read the memory index (MEMORY.md) and memory/launch-readiness-list.md, then HANDOFF.txt's top sections.
2. Do NOT touch pins — the nightly Windows task "DCD pin batch" owns them (scripts/pin-audit/).
3. Work the launch list in order, cheapest-and-highest-harm first:
   - Item 5, closed shops: re-scan the cached Tabelog listings for the "Closed" label (tbcache in
     %LOCALAPPDATA%\dcd-pins lists the URLs; the /en/ page has class "closed-label"). A shop only gets
     hidden:'closed' when TWO sources agree (Tabelog label + Google businessStatus, the shop's own site,
     or a dated closure notice). One source -> list it in the commit message, do not hide.
   - Item 2, JA safety text: mechanically compare data/<city>.json gf_detail/vegan_detail against
     data/<city>.ja.json for dropped negations and allergen words (小麦, 大麦, 醤油, 麩, not/no -> ない/ず/不/無).
     Fix clear mistranslations; list anything uncertain for Greg rather than guessing.
4. Rules that bind: fabrication is forbidden; never raise a gf_confidence or vegan_status tier; batch edits,
   then build-payload.mjs, bump-build.mjs, lint-data.mjs (output must not get worse), smoke-app.mjs with
   scripts/static-serve.mjs running; commit with a clear message and push. Update launch-readiness-list.md
   status lines as items move.
5. Keep token use lean — the weekly quota was ~90% on 2026-09-28. Stop cleanly at a committed state.
