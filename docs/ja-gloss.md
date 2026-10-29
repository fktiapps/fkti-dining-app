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
node scripts/gloss/show.mjs r 0 250       # review runs; write data/gloss/_chunks/<city>-NNN.json keyed by the Japanese
node scripts/gloss/show.mjs w 0 200       # whole strings; write {index: en} and convert:
node scripts/gloss/chunk.mjs w map.json <city>-w01
node scripts/gloss/merge.mjs              # merges and DELETES the chunks (en.json is the record)
node scripts/gloss/readings.mjs <city> <reviewed cities>   # every new word reading, to check
# add the city to data/gloss/covered.json
node scripts/gloss/build.mjs              # fails if a covered city still has gaps
```

Review rules: no pronouns for people in the English (Greg's rule); check every reading (kuromoji misreads food words, see the tests); a name gets
`name: true` and the record's own romaji or `null`; when unsure of a reading use `nor: true`;
person names in translated passages keep the name: the romaji a source gives, otherwise the
Japanese name as written (never a guessed reading).

From Osaka on (lib `NAMES_FROM_GLOSSARY`), a city's own name entries (`name: true`, two or more
characters) also stay unread where they recur inside that city's long passages, so 藍丹 or 和人
inside a review summary is not read as dictionary words. Readings in `WORD_READINGS` /
`CITY_READINGS` still win. The earlier cities were reviewed without this and are left as they are.
Osaka's file is about 3.5 MB (782 long passages, each with furigana); the cities before it are
under 0.5 MB.

## Known limits

- Readings inside long translated passages come from kuromoji plus the overrides. Himeji's
  1,651 distinct word readings were reviewed once as a list, which caught 15 errors. Context
  can still pick the wrong reading for a word with several.
