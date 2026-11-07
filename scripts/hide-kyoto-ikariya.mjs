// 2026-11-06: IKARIYA KYOTO is one brand run by 株式会社Ludico with six イカリヤ-named shops in Kyoto (イカリヤ食堂, IKARIYA BEIKA,
// イカリヤ365, チンクエ イカリヤ, Le Pain Ikariya, …; atpress.ne.jp/news/545666 and /551719 name Ludico as operator).
// 5+ same-name shops of one brand = chain (Greg 2026-11-05 Samboa ruling); osw13-58 and osw1-47 skipped two of them.
import { readCity, writeCity } from './lib-city.mjs';
const c = readCity('kyoto');
for (const id of ['kyoto_ikariya_shokudo_kiyamachi', 'kyo_ikariya_beika']) {
  const p = c.places.find(p => p.id === id);
  if (!p) throw new Error('not found ' + id);
  p.hidden = 'chain'; console.log('hidden', id);
}
writeCity('kyoto', c);
