# Japanese in the English app: furigana + English gloss

Greg, 2026-10-29: English-mode text throughout the app mixes in Japanese (dish names, menu
notes, Japanese-source summaries, store names). The average user does not read Japanese. In the
English app every bit of Japanese keeps its Japanese, gains furigana, and gains an English
translation. The Japanese app is unchanged.

Decisions (Greg, 2026-10-29):
- **Display: ruby + gloss.** Furigana over the Japanese, English after it in muted text. Where
  the sentence already explains the term ("Bonito flakes (鰹節)", "天ぷら (Tempura)", a name
  followed by its romaji), furigana only.
- **Name readings: only when sourced.** Shop, person and place names get no dictionary reading.
  Their English is the romaji the record itself gives, or nothing.
- **Rollout: Himeji pilot first**, then city by city.

## How it works

- `scripts/gloss/lib.mjs`: the rules. A *run* is a stretch of Japanese inside an English
  string. A string that is mostly Japanese is one unit (full translation underneath). Prices
  (`649円`) are left to a rule in the app (→ ¥649). `WORD_READINGS` holds reviewed readings that
  beat the kuromoji dictionary (米粉 = こめこ, 処 = どころ, …) and names to leave unread (`''`).
- `data/gloss/en.json`: the reviewed glossary, one entry per run:
  `{ en, name?, nor?, r?, furi? }` (see `build.mjs` for the meaning of each).
- `data/gloss/covered.json`: cities whose every run must be glossed. Lint fails otherwise.
- `data/gloss/en-<city>.json`: what the app fetches, built per city.
- `index.html` (search `JG_RUN`): one MutationObserver redraws Japanese text in English mode
  after any render. `data-ja-keep` opts an element out; `data-jg-nogloss` keeps furigana but
  drops the English (used where English already sits next to it).

## Adding a city, or after a sweep batch adds Japanese

```
node scripts/gloss/extract.mjs <city>     # → data/gloss/_worklist.tsv (+ .json)
# review each line: write data/gloss/_chunks/<city>-NNN.json entries
node scripts/gloss/merge.mjs
node scripts/gloss/build.mjs              # fails if a covered city still has gaps
```

Review rules: check every reading (kuromoji misreads food words, see the tests); a name gets
`name: true` and the record's own romaji or `null`; when unsure of a reading use `nor: true`;
person names in translated passages become their role or "[name]" (no guessed romaji, and the
privacy rules forbid naming them anyway).

## Known limits

- Readings inside long translated passages come from kuromoji plus the overrides. Himeji's
  1,651 distinct word readings were reviewed once as a list, which caught 15 errors. Context
  can still pick the wrong reading for a word with several.
- Translating legacy text surfaces privacy problems the Japanese already had (staff origin,
  family, awards, celebrity mentions). The translations stay faithful apart from person names.
  Cleaning the source text is a separate decision for Greg.
