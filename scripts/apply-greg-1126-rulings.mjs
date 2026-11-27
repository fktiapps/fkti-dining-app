// Greg's answers, 2026-11-26 (asked one by one by the integrator after the 40-batch Kyoto day):
//  Q1 owner names from official records (NTA invoice register, 特商法 legal notice) appear only when another
//     source ties that person to the kitchen. Neither 酒場のはったり nor STYLE COFFEE has one: names removed.
//  Q2 a shop's OWN statement naming a vegan dish is enough for vegan "options": りょうりや○ ask → options.
//     (SOAN already at options on its own menu's Vegan Bún; stays.)
//  Q6 sub-brand of a large parent = chain: ののの 四条河原町店 shares invoice holder 株式会社治元 (66 shops) → hidden.
//  Q7 sourced remarks about a relative are included, attributed: 浜ちゃん's December 2025 photo caption.
// (Q3 any multi-hotel group = big-chain hotel; Q4 count shops, not plans; Q5 on-site eating/drinking = venue —
//  these change worker briefs and pending drafts, not existing records.)
import { readCity, writeCity } from './lib-city.mjs';
import fs from 'node:fs';
const TODAY = '2026-11-26';
const c = readCity('kyoto');
const get = id => { const p = c.places.find(p => p.id === id); if (!p) throw new Error('not found ' + id); return p; };
const swap = (s, from, to) => { if (!s.includes(from)) throw new Error('text not found: ' + from.slice(0, 40)); return s.replace(from, to); };

// Q1
const hat = get('kyoto_sakaba_hattari_fukumoto');
hat.chef_bio.chef_name = null; hat.chef_bio.roles = [];
hat.chef_bio.background = swap(hat.chef_bio.background,
  'the Tabelog invoice number T2810436213180 is registered to 服部 祐介 (NTA register, from 1 January 2025). ', '');
hat.chef_bio.japanese_sources_summary = swap(hat.chef_bio.japanese_sources_summary,
  '、適格請求書の登録番号 T2810436213180 (国税庁の公表サイトでは服部 祐介、2025年1月1日登録)', '');

const sty = get('kyoto_style_coffee_marutamachi');
sty.chef_bio.chef_name = null; sty.chef_bio.roles = [];
sty.chef_bio.background = swap(sty.chef_bio.background,
  "The legal notice of the shop's online store names the business as 黒須工 at the stand's address (official site). ", '');
sty.chef_bio.japanese_sources_summary = swap(sty.chef_bio.japanese_sources_summary,
  '特定商取引法に基づく表記: 事業者の名称 黒須工。', '');

// Q2
const ryo = get('kyoto_ryoriya_en');
ryo.vegan_status = 'options'; ryo.vegan_label = 'Some vegan options';
ryo.vegan_detail = swap(ryo.vegan_detail, 'Vegan — ask: the shop’s own', 'Some vegan options: the shop’s own');
ryo.safety = ryo.safety || {};
ryo.safety.owner_signoff = { decision: 'upgrade', field: 'vegan_status', from: 'ask', to: 'options', by: 'Greg', date: TODAY,
  reason: "Greg 2026-11-26: a shop's own statement naming a vegan dish is enough for 'options' — its Tabelog text says it created a vegan ramen with a kombu broth for vegetarian and vegan guests." };

// Q6
const non = get('kyoto_nonono_shijo_kawaramachi');
non.hidden = 'chain';

// Q7
const ham = get('kyoto_hamachan_rido');
const src = 'https://tabelog.com/en/kyoto/A2601/A260101/26009506/dtlrvwlst/B518749927/';
if (!ham.chef_bio.anecdotes.some(a => a.source === src && /grandchild/.test(a.text)))
  ham.chef_bio.anecdotes.push({ text: "A December 2025 reviewer's photo caption remarks that the owner's grandchild seems to have been an idol.", source: src });

writeCity('kyoto', c);

// JA side of Q2
const jf = 'data/kyoto.ja.json';
const ja = JSON.parse(fs.readFileSync(jf, 'utf8'));
ja.kyoto_ryoriya_en.vegan_detail = swap(ja.kyoto_ryoriya_en.vegan_detail, 'ヴィーガン — 要確認。', 'ヴィーガン — 一部あり。');
fs.writeFileSync(jf, JSON.stringify(ja, null, 1)); // kyoto.ja.json is indent-1 with no trailing newline
console.log('Q1 names removed ×2 | Q2 りょうりや○ vegan options | Q6 ののの hidden chain | Q7 浜ちゃん caption added');
