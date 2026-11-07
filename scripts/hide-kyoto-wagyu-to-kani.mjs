// 2026-11-07: 和牛とカニ 三条河原町店 is run by 株式会社ジョージーズ (Osaka), which also runs the 和牛と豚 chain
// (7 shops, skipped in osw1-61). Link: 和牛と豚 三条河原町店's invoice T2120001206037 is ジョージーズ (NTA register);
// en-gage.net/george_saiyo/ lists 和牛とカニ, 和牛と豚 and 和牛と豚…そしてカニ as its brands; careermap.jp/corporations/117343
// gives 15 shops across Osaka, Kyoto, Nara and Tokyo. 11 shops share the 和牛と… name (4 + 7) under one non-local
// multi-brand operator = chain (same reading as the 千葉 / 新 / 益市 groups). Checked by osw1 for osw1-63.
import { readCity, writeCity } from './lib-city.mjs';
const c = readCity('kyoto');
const p = c.places.find(p => p.id === 'kyoto_wagyu_to_kani_sanjo');
if (!p) throw new Error('not found');
p.hidden = 'chain';
writeCity('kyoto', c);
console.log('hidden', p.id);
