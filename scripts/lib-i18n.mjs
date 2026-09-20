import fs from 'fs';

// The fixed, small enum-driven label set — translated once, carefully, reused everywhere.
// These are NOT per-record content; every place in the app uses one of these 5+5 values.
export const GF_LABEL_JA = {
  'Not gluten-free': 'グルテンフリーではありません',
  'GF — ask': 'グルテンフリー可 — 要相談',
  'Some GF options': 'グルテンフリーの選択肢あり',
  'Strong GF focus': 'グルテンフリーに積極的に対応',
  'Dedicated gluten-free': '専用グルテンフリー対応',
};

export const VEGAN_LABEL_JA = {
  'Not vegan': 'ヴィーガンではありません',
  'Vegan — ask': 'ヴィーガン可 — 要相談',
  'Limited vegan': 'ヴィーガンの選択肢は限定的',
  'Some vegan options': 'ヴィーガンの選択肢あり',
  'Fully vegan': '完全ヴィーガン対応',
};

export function langPath(city, lang) {
  return `data/${city}.${lang}.json`;
}

export function readLang(city, lang) {
  const p = langPath(city, lang);
  if (!fs.existsSync(p)) return {};
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

export function writeLang(city, lang, data) {
  fs.writeFileSync(langPath(city, lang), JSON.stringify(data, null, 1));
}

// Merge translated fields for one place into the overlay, without disturbing entries
// for other places already present in the file.
export function mergePlace(overlay, placeId, translated) {
  overlay[placeId] = { ...(overlay[placeId] || {}), ...translated };
}
