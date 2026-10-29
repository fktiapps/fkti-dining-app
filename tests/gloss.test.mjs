// Tests for the English-mode Japanese gloss (docs/ja-gloss.md).
//
// The build (scripts/gloss/lib.mjs RUN) decides which stretches of Japanese get a glossary
// entry; the app (index.html JG_RUN) decides which stretches it looks up. If the two patterns
// drift, the app silently stops finding entries the build made. That cannot be seen in the
// data, so it is tested here. The reading overrides are tested because each one exists to
// correct a dictionary reading that was wrong in context.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { RUN, PRICE, isJapaneseString, furiOf, initTokenizer } from '../scripts/gloss/lib.mjs';

test('the app and the build split Japanese runs with the same pattern', () => {
  const app = fs.readFileSync('index.html', 'utf8').match(/const JG_RUN=\/(.*?)\/g;/);
  assert.ok(app, 'JG_RUN not found in index.html');
  assert.equal(app[1], RUN.source);
});

test('prices are left to the app rule, not the glossary', () => {
  for (const p of ['649円', '1,200円～', '円', '約1,320円']) assert.ok(PRICE.test(p), p);
  assert.ok(!PRICE.test('円卓'));
});

test('a mostly-Japanese string is one unit; Japanese inside English is not', () => {
  assert.ok(isJapaneseString('小麦・乳。ケーキ土台に小麦の可能性。'));
  assert.ok(!isJapaneseString('MIL bake (米粉専門店ミルベイク)'));
  assert.ok(!isJapaneseString('Bonito flakes (鰹節) are a primary topping'));
});

test('reviewed readings win over the dictionary', async () => {
  await initTokenizer();
  const read = t => furiOf(t).furi.map(([s, r]) => r ? `${s}(${r})` : s).join('');
  assert.equal(read('米粉'), '米粉(こめこ)');             // kuromoji: 米 = "America"
  assert.equal(read('豆乳'), '豆乳(とうにゅう)');         // not split by the 乳 override
  assert.equal(read('小麦・乳・卵'), '小麦(こむぎ)・乳(にゅう)・卵(たまご)');
  assert.equal(read('9月28日'), '9月(がつ)28日(にち)');   // counters after a number
  assert.equal(read('手打蕎麦処'), '手打(てうち)蕎麦(そば)処(どころ)');
});

test('names get no guessed reading', async () => {
  await initTokenizer();
  const [[surface, reading]] = furiOf('姫路市').furi;
  assert.equal(surface, '姫路市');
  assert.equal(reading, '');
});
