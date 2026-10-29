// Shared rules for the English-mode Japanese gloss (docs/ja-gloss.md).
import fs from 'node:fs';
import path from 'node:path';
import kuromoji from 'kuromoji';

// A "run" is a maximal stretch of Japanese script inside an English-mode string. Keep this
// pattern identical to JG_RUN in index.html, or the app will look up runs the build never made.
export const RUN = /[぀-ヿ㐀-鿿ｦ-ﾟ々〆「『（【][぀-ヿ㐀-鿿ｦ-ﾟ々〆　-〿！-～0-9・ー〜～]*/g;

// Fields that are Japanese by design (shown to drivers or kept as the original), or never
// shown in the English app. Matched against the dotted path with array indexes removed.
export const SKIP_FIELD = /(^|\.)(pin_source|address_ja|addr|enrich_note|existence|gf_review|ja|kana|romaji|merged_from|duplicate_aligned|chef_bio_flag|needs_owner_review|dcp|sources|source|url|website|menu_url|gmaps|id)(\.|$)/;

// The English-mode files of a city: the city file and its layers, never the .ja overlay.
export function cityFiles(city) {
  return fs.readdirSync('data').filter(f => f.endsWith('.json') && !f.startsWith('_') && !f.endsWith('.ja.json')
    && (f === `${city}.json` || f.startsWith(`${city}_`)));
}

// A string that is mostly Japanese (at least twice as many Japanese characters as Latin letters) is glossed as
// ONE unit: furigana over the whole string and a full English translation under it. Splitting
// it into runs would cut sentences wherever "100%" or a site name interrupts them.
// Japanese inside an English sentence is glossed run by run.
export function isJapaneseString(v) {
  const ja = (v.match(/[぀-ヿ㐀-鿿ｦ-ﾟ]/g) || []).length;
  const latin = (v.match(/[A-Za-z]/g) || []).length;
  // long summaries that name many sources in romaji still read as Japanese text
  return ja > 0 && (ja >= 2 * latin || (ja >= latin && v.length > 60));
}

// Calls fn(unit, wholeString, fieldPath, isWhole) for every displayed Japanese unit in a parsed
// file: the whole (trimmed) string when it is mostly Japanese, else each run.
export function eachRun(data, fn) {
  (function walk(v, p) {
    if (typeof v === 'string') {
      if (SKIP_FIELD.test(p)) return;
      if (!RUN.test(v)) { RUN.lastIndex = 0; return; }
      RUN.lastIndex = 0;
      if (isJapaneseString(v)) { if (!PRICE.test(v.trim())) fn(v.trim(), v, p, true); return; }
      for (const r of v.match(RUN)) if (HAS_JA.test(r) && !PRICE.test(r)) fn(r, v, p, false);
    } else if (Array.isArray(v)) v.forEach(x => walk(x, p));
    else if (v && typeof v === 'object') for (const k in v) walk(v[k], p ? `${p}.${k}` : k);
  })(data, '');
}

// Prices ("649円", "1,200円～", "円") are glossed by a rule in the app (→ ¥649), not the glossary.
export const PRICE = /^[約]?[0-9０-９,，.]*円[～〜~]?$/;
// A run needs a gloss only if it has kana or kanji of its own; a lone ・ or ー between Latin words does not.
const HAS_JA = /[぀-ゟァ-ヺヽ-ヿ㐀-鿿ｦ-ﾟ]/;

const kata2hira = s => s.replace(/[ァ-ヶ]/g, c => String.fromCharCode(c.charCodeAt(0) - 0x60));
export const HAS_KANJI = /[㐀-鿿々〆]/; // 〆 counts: it needs a reading (しめ)

let tokenizer = null;
export async function initTokenizer() {
  tokenizer ||= await new Promise((res, rej) =>
    kuromoji.builder({ dicPath: path.join('node_modules', 'kuromoji', 'dict') }).build((e, t) => e ? rej(e) : res(t)));
}

// Put the reading over the kanji only: 焼き/やき → [焼,や][き,'']; お造り/おつくり → [お,''][造,つく][り,''].
function okurigana(s, r) {
  let a = 0, b = 0;
  while (a < s.length && a < r.length && !HAS_KANJI.test(s[a]) && kata2hira(s[a]) === r[a]) a++;
  while (b < s.length - a && b < r.length - a && !HAS_KANJI.test(s[s.length - 1 - b]) && kata2hira(s[s.length - 1 - b]) === r[r.length - 1 - b]) b++;
  const out = [];
  if (a) out.push([s.slice(0, a), '']);
  out.push([s.slice(a, s.length - b), r.slice(a, r.length - b)]);
  if (b) out.push([s.slice(s.length - b), '']);
  return out;
}

// Reviewed readings that override kuromoji, longest first. Add a word here when the dictionary
// reads it wrong in context (米粉 is tagged as a proper noun because 米 = "America").
export const WORD_READINGS = {
  '国産米粉': 'こくさんこめこ', '米粉': 'こめこ', '米油': 'こめあぶら', '天日塩': 'てんぴじお',
  '鶏ガラ': 'とりがら', '冷製': 'れいせい', '月商': 'げっしょう', '堪能': 'たんのう', '豆板醤': 'とうばんじゃん', '埋門跡': 'うずみもんあと', '鶏肉': 'とりにく', '地鶏': 'じどり', '親鶏': 'おやどり', '令和': 'れいわ', '既に': 'すでに',
  // names whose reading a record gives (Ikkaku, Hyotei, Grill Tenpei)
  '一鶴': 'いっかく', '瓢亭': 'ひょうてい', '天平': 'てんぺい',
  // names the dictionary reads as ordinary words: leave unread ('')
  '千秋': '', '辰巳': '', '山上': '', '斎': '', '大麦粉': 'おおむぎこ', '九州': 'きゅうしゅう', '牛骨': 'ぎゅうこつ', '白砂糖': 'しろざとう', '生麩': 'なまふ', '車麩': 'くるまぶ', '日本': 'にほん', '自家製麺': 'じかせいめん', '縮れ麺': 'ちぢれめん', '細麺': 'ほそめん', '太麺': 'ふとめん', '豚骨': 'とんこつ', '処': 'どころ', '鶏白湯': 'とりぱいたん', '若鶏': 'わかどり', '練乳': 'れんにゅう', '海老': 'えび', '一汁三菜': 'いちじゅうさんさい', '五葷': 'ごくん', '串揚げ': 'くしあげ', '炭火焼': 'すみびやき', '窯焼き': 'かまやき', 'お米': 'おこめ', '焼あなご': 'やきあなご', '活〆': 'いけじめ', '〆': 'しめ', '唐揚げ': 'からあげ', '雑穀米': 'ざっこくまい', '玄米粉': 'げんまいこ', '薬膳': 'やくぜん', '小麦粉': 'こむぎこ', '小麦': 'こむぎ', '出汁': 'だし', '厚焼き': 'あつやき',
  // 乳 alone is にゅう on allergen lists (小麦・乳・卵); the compounds must come first
  '豆乳': 'とうにゅう', '牛乳': 'ぎゅうにゅう', '乳製品': 'にゅうせいひん', '乳酸菌': 'にゅうさんきん', '乳': 'にゅう',
  // Toba review (2026-10-29)
  '焙煎': 'ばいせん', '旬彩': 'しゅんさい', '明治': 'めいじ', '大正': 'たいしょう', '昭和': 'しょうわ', '平成': 'へいせい', '活魚': 'かつぎょ', '白身魚': 'しろみざかな', '御食事処': 'おしょくじどころ', 'お食事処': 'おしょくじどころ', '大あさり': 'おおあさり', '御食国': 'みけつくに', '真珠粉': 'しんじゅふん', '伊勢海老': 'いせえび', '伊勢えび': 'いせえび', '煮干し': 'にぼし', 'ごはん物': 'ごはんもの', '南館': 'みなみかん', '一膳入魂': 'いちぜんにゅうこん', '焼貝': 'やきがい', '節系': 'ぶしけい', '肝醤油': 'きもじょうゆ', '甘味': 'かんみ', '天津メン': 'てんしんめん', '天津飯': 'てんしんはん', '麻婆飯': 'まーぼーはん', '麻婆': 'まーぼー', '松阪牛': 'まつさかぎゅう', '拉麺': 'らーめん', '牛タン': 'ぎゅうたん', '三方焼': 'さんぽうやき', '三方氷': 'さんぽうごおり', '炙り刺': 'あぶりさし',
  '自家打': 'じかうち', '焙煎所': 'ばいせんじょ', '釜玉': 'かまたま', '紙・木': 'かみ・き', '帆立': 'ほたて', '開き': 'ひらき', '車海老': 'くるまえび', 'ご飯': 'ごはん', '地魚': 'じざかな', '真珠島': 'しんじゅしま', 'さわら刺': 'さわらさし', '粗濾': '',
  // place names whose reading the records give in romaji (Toba, Ise, Shima, Toshijima, Mie, Matsusaka)
  '鳥羽': 'とば', '伊勢': 'いせ', '志摩': 'しま', '答志島': 'とうしじま', '三重': 'みえ', '松阪': 'まつさか',
  // person and shop names inside passages: leave unread
  '藤原徹平': '', '西井崚人': '', '中村謙介': '', '浜口祐志': '', '御木本幸吉': '', '阿波幸': '', '味佐々': '', '樋の山': '', '里中定弘': '',
};
const WORDS_RE = new RegExp(Object.keys(WORD_READINGS).sort((a, b) => b.length - a.length).join('|'), 'g');
// After a number: 9月 = がつ, 28日 = にち, 2025年 = ねん, 3時 = じ (kuromoji splits the digits off).
const COUNTER = { '月': 'がつ', '日': 'にち', '年': 'ねん', '時': 'じ' };

// furi: [[surface, reading], …]. Reading '' where none is needed (kana, punctuation) and —
// per Greg's rule (2026-10-29, "only when sourced") — where kuromoji tags the token as a
// proper noun or does not know it: shop, person and place names often have several
// readings, so a dictionary guess would be a guessed reading. `needs` lists those tokens.
export function furiOf(text) {
  if (!tokenizer) throw new Error('call initTokenizer() first');
  const furi = [], needs = [];
  // split out the reviewed words first, tokenize only what lies between them
  const parts = []; let last = 0, m;
  WORDS_RE.lastIndex = 0;
  while ((m = WORDS_RE.exec(text))) { if (m.index > last) parts.push([text.slice(last, m.index), null]); parts.push([m[0], WORD_READINGS[m[0]]]); last = m.index + m[0].length; }
  if (last < text.length) parts.push([text.slice(last), null]);
  const tokens = [];
  for (const [chunk, reading] of parts) {
    if (reading !== null) tokens.push({ surface_form: chunk, reading, fixed: true });
    else tokens.push(...tokenizer.tokenize(chunk));
  }
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i], s = t.surface_form;
    if (!HAS_KANJI.test(s)) { furi.push([s, '']); continue; }
    if (t.fixed) { furi.push(...(t.reading ? okurigana(s, t.reading) : [[s, '']])); continue; }
    if (COUNTER[s] && i && /[0-9０-９]$/.test(tokens[i - 1].surface_form)) { furi.push([s, COUNTER[s]]); continue; }
    if (t.pos_detail_1 === '固有名詞' || t.word_type === 'UNKNOWN' || !t.reading || t.reading === '*') { furi.push([s, '']); needs.push(s); continue; }
    // a suffix on an unread name (姫路|市, 柊|店) stays unread too: half a reading reads as a mistake
    if (t.pos_detail_1 === '接尾' && i && needs.includes(tokens[i - 1].surface_form)) { furi.push([s, '']); continue; }
    furi.push(...okurigana(s, kata2hira(t.reading)));
  }
  const out = []; // merge neighbouring unread segments so the app emits fewer nodes
  for (const [s, r] of furi) { const last = out[out.length - 1]; if (last && !r && !last[1]) last[0] += s; else out.push([s, r]); }
  return { furi: out, needs };
}

export const GLOSS_SRC = 'data/gloss/en.json';   // hand-reviewed: run → { en, furi?, name? }

export const COVERED = 'data/gloss/covered.json'; // cities whose every run must be glossed (lint)
export const readJson = (f, d) => fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : d;
