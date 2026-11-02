// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle shin-osaka; worker osw7 (lane: Tabelog id even), batch 9.
//   + 味悟空 三国店 Aji Goku Mikuni ten (old-style neighbourhood Chinese, ¥900 daily sets, open to 23:30)
//   + 麺屋左衛門 Menya Saemon (whole-chicken chuka soba and tsukemen with homemade noodles, 10 seats, opened 2022)
//   + 喫茶 檸檬の Kissa Lemon-no (café of curry and lemon cakes by Nishinakajima-Minamigata, breakfast from the morning)
//   + 横浜家系ラーメン 天来家 Yokohama Iekei Ramen Tenraiya (iekei tonkotsu shoyu, open 11:00–24:00, opened 2022)
//   - skipped 27128616 油そば 東京油組総本店 新大阪組: chain (人形町組, 市ヶ谷組 and 赤坂見附組 in the tokyo-gaps crawl);
//     27003574 九州らーめん 亀王 西中島店: chain already in data (osaka_ramen_kio_dotonbori, osaka_kyushu_ramen_kio_namba_ngk).
//   Lane check: every id above is even. Taken in queue order (nearest first) after the two chain skips.
//   Chain check: Aji Goku has a second shop by Higashiyodogawa Station (May 2026 review); Tenraiya has a 大正駅前店 in the osaka-kita
//   crawl; two shops each, not chains. Menya Saemon names no other shop. Kissa Lemon-no: its site (lemon-no.com, read 2026-11-02)
//   names only itself ("喫茶 檸檬の 新大阪店"); one September 2026 diner took it to be part of the "neel" café group, which a web
//   search did not confirm, so it is recorded as that diner's impression only. None of the four is in data/osaka.json (grep by id,
//   name and address, 2026-11-02).
//   Ramen blocks: Menya Saemon's reviews never describe oil, and Tenraiya's never describe aroma, so per the 2026-11-01 lesson
//   neither has a ramen block; the bowls are described in cuisine/notes.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw7-9');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27128616', 'chain: 東京油組総本店, with 人形町組, 市ヶ谷組 and 赤坂見附組 in the tokyo-gaps crawl');
skip('27003574', 'chain already in data: Kio / 亀王 ramen (osaka_ramen_kio_dotonbori, osaka_kyushu_ramen_kio_namba_ngk)');

// ================================================================ 味悟空 三国店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27027530/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.ajigoku.com/';
  const W = day(['11:00', '23:30']); const S = day(['11:00', '23:00']);
  put({
    id: 'osaka_ajigoku_mikuni', name: '味悟空 三国店 (Aji Goku Mikuni ten)', category: 'OMNI',
    lat: 34.738948, lng: 135.493568, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: ramen, fried noodles, gyoza and kara-age fill the set meals.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Chinese diner of pork, chicken and shrimp dishes; soups come with egg.',
    hours_raw: 'Mon–Sat 11:00–23:30; Sun and holidays 11:00–23:00; hours may change (Tabelog). Reservations accepted (Tabelog). No cards; e-money and QR payments (Tabelog), PayPay among them (September 2026). Seats at a counter of six and tables, shared at lunch (March 2026); smoking allowed (Tabelog), at lunch too (August 2026); takeaway (Tabelog). Weekday lunch set meals ¥950 instead of ¥1,000 (May 2026).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '西宮原3-2-23 — about 500 m from Higashimikuni Stn (Tabelog), a little away from Higashiyodogawa, Shin-Osaka and Mikuni stations, behind a bright red front (August 2026)',
    cuisine: 'Old-style neighbourhood Chinese, big portions (2026) · daily set ¥900: e.g. grilled pork yakiniku with a rolled omelette, rice and soup (December 2025, March and August 2026), kara-age (May 2026) · set meals ¥1,000, ¥950 at weekday lunch (May 2026): sweet and sour pork, stir-fried vegetables (June 2026); happo ramen with rice ¥930 (May 2026) · fried rice set with two kara-age, cabbage and ramen ¥1,200 (May and August 2026) · Chinese rice bowl with meat and shrimp, soup included, ¥800 (August 2026) · kara-age, six pieces, ¥900 (August 2026) · gyoza set of gyoza, kara-age, kimchi and a draft beer ¥850; katsu curry ¥930 (May 2026) · chili rice set (September 2026) · omurice, curry, fried noodles (April 2026)',
    website: SITE, gmaps: gm('味悟空 三国店 西宮原3-2-23'), menu_url: null,
    notes: "[Chinese · Nishimiyahara, a red-fronted machi-chuka] A well-worn neighbourhood Chinese restaurant behind a bright red front, a short walk from Higashimikuni, packed at lunch with office workers, older locals and everyone in between (2026). The complicated set-meal board rewards pointing at the ¥900 daily set: a heaped plate of grilled pork, a rolled omelette, soup and a large bowl of rice (2025–2026). Around it go happo ramen, a ¥800 Chinese rice bowl full of meat and shrimp, six-piece kara-age, katsu curry and a ¥850 beer set with gyoza and kara-age. Portions are huge; the fried rice gets mixed reviews (2026). Smoking is allowed, even at lunch. Open every day until 23:00 or later; a sister shop stands by Higashiyodogawa Station (May 2026).",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'No shop description on Tabelog; the listing links ajigoku.com. A May 2026 diner notes two locations, "including one in front of Higashiyodogawa Station"; reviewers describe an old-school Showa-era interior (September 2026).', philosophy: null, specialty: '¥900 daily set; kara-age; happo ramen set.',
      anecdotes: [
        { text: '"In local Chinese restaurants like this, regulars tend to order quickly, leaving little time to carefully look over the menu." — March 2026, the daily set of pork yakiniku and rolled omelette for JPY 900.', source: R + 'B523866639/' },
        { text: '"To my surprise, the kara-age came with six pieces!" — August 2026, kara-age for JPY 900.', source: R + 'B533744474/' },
        { text: '"The restaurant has an old-school Showa-era vibe, but I was pleased to find that I could pay with PayPay." — September 2026, the chili rice set.', source: R + 'B536537495/' },
      ],
      japanese_sources_summary: '食べログ: 味悟空 三国店、中華料理、大阪市淀川区西宮原3-2-23、東三国駅から502m、月〜土11:00〜23:30、日・祝11:00〜23:00、予約可、カード不可、電子マネー・QR 可、カウンター6席とテーブル、喫煙可、テイクアウト、サイトは ajigoku.com。口コミ(2023年12月〜2026年9月): 赤い外観、昭和の町中華、昼は相席、日替わり定食900円 (焼肉と卵焼き、kara-age など)、定食1,000円、平日の昼は950円、酢豚、野菜炒め、Happo ラーメンとごはん930円、チャーハンセット1,200円 (kara-age 2個、キャベツ、ラーメン)、中華丼800円 (スープつき)、kara-age 6個900円、gyoza セット850円 (kara-age、キムチ、生ビール)、カツカレー930円、Chili Rice のセット、オムライス、カレー、焼きそば、量が多い、チャーハンは評価が分かれる、昼も喫煙可、PayPay 可、東淀川駅前にも店。',
      confidence: 'medium', sources: [TB, SITE, R + 'B475915940/', R + 'B519430903/', R + 'B523866639/', R + 'B527156268/', R + 'B528419550/', R + 'B528818312/', R + 'B529294420/', R + 'B530942533/', R + 'B533744474/', R + 'B536537495/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A busy local diner with a complicated menu board; the daily set is the easy order. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西宮原3-2-23',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西宮原三丁目2番23号 (go) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B523866639/', R + 'B528419550/', R + 'B533744474/', R + 'B529294420/'],
    price_note: 'Prices from 2026 reviews, each dated in its note.', last_checked: TODAY, items: [
      it('', '', 'Daily set meal', '¥900', 'Sets', 'ask', 'no', 'March and August 2026.', 'higawari'),
      it('', '', 'Happo ramen with rice', '¥930', 'Sets', 'no', 'no', 'May 2026.', 'happo_ramen_set'),
      it('', '', 'Chinese rice bowl with soup', '¥800', 'Rice', 'ask', 'no', 'August 2026.', 'chukadon'),
      it('', '', 'Kara-age (six pieces)', '¥900', 'Fried', 'no', 'no', 'August 2026.', 'karaage'),
      it('', '', 'Gyoza set with kara-age, kimchi and draft beer', '¥850', 'Drinks sets', 'no', 'no', 'May 2026.', 'gyoza_set'),
    ] }, {
    cuisine: '昔ながらの町の中華で量が多い (2026年)・日替わり定食900円: たとえば豚の焼肉と卵焼き、ごはんとスープ (2025年12月、2026年3月と8月)、kara-age (2026年5月)・定食1,000円、平日の昼は950円 (2026年5月): 酢豚、野菜炒め (2026年6月)。Happo ラーメンとごはん930円 (2026年5月)・kara-age 2個、キャベツ、ラーメンつきのチャーハンセット1,200円 (2026年5月と8月)・肉とエビの中華丼、スープつき800円 (2026年8月)・kara-age 6個900円 (2026年8月)・gyoza、kara-age、キムチ、生ビールのセット850円。カツカレー930円 (2026年5月)・Chili Rice のセット (2026年9月)・オムライス、カレー、焼きそば (2026年4月)',
    neighborhood: '西宮原3-2-23。東三国駅から約500m (食べログ)、東淀川、新大阪、三国の駅から少し歩く、真っ赤な外観 (2026年8月)',
    gf_detail: 'グルテンフリーではありません。定食にはラーメン、焼きそば、gyoza、kara-age がならぶ。',
    vegan_detail: 'ヴィーガンではありません。豚、鶏、エビの中華の店で、スープには卵が入る。',
    notes: '[中華・西宮原、赤い外観の町中華] 東三国から少し歩いた、真っ赤な外観の年季の入った町の中華で、昼は会社員から近所のお年寄りまででいっぱい (2026年)。定食の品書きはややこしいので、900円の日替わりを頼むのがかんたん: 豚の焼肉の山盛り、卵焼き、スープ、大盛りのごはん (2025〜2026年)。ほかにHappo ラーメン、肉とエビたっぷりの800円の中華丼、6個の kara-age、カツカレー、gyoza と kara-age の850円のビールセットも。量はとても多い。チャーハンは評価が分かれる (2026年)。昼でも喫煙可。毎日23時ごろまで。東淀川駅の前にも店がある (2026年5月)。',
  });
}

// ================================================================ 麺屋左衛門
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27131478/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '15:00'], ['18:00', '23:00']);
  put({
    id: 'osaka_menya_saemon_nishinakajima', name: '麺屋左衛門 (Menya Saemon)', category: 'OMNI',
    lat: 34.727050, lng: 135.499168, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: homemade wheat noodles in every bowl.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: whole-chicken and chicken-and-seafood broths with rare chashu.',
    hours_raw: 'Daily 11:00–15:00 and 18:00–23:00, until sold out; closing days announced (Tabelog). It began staying open late in 2026 and opens over New Year (August 2026). No reservations; no cards or e-money; PayPay accepted (Tabelog); buy a ticket at the machine, paying by PayPay through a QR code you show the owner (October 2026). 10 counter seats with partitions; non-smoking; children welcome (Tabelog). Bowls take 10–15 minutes (August and October 2026). Opened 1 October 2022 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: '西中島3-20-8, ground floor of 新和ビル — a short walk from Nishinakajima-Minamigata Stn (Tabelog)',
    cuisine: 'Whole-chicken chuka soba with homemade noodles (Tabelog) · Chuka SOBA ¥950: a rich, clear shoyu broth of domestic whole chicken, thin straight noodles, rare chashu and long menma; add the dashi jelly halfway to turn it toward seafood (October 2026; March 2025) · shio chuka soba on a chicken-and-seafood double broth (Tabelog), sweet to one diner, with seasoned egg and dashi jelly (August 2026) · Chicken SOBA, a frothy white broth with a soft-boiled egg (November 2025, August 2026) · spicy chuka soba (October 2026) · chicken paitan tsukemen ¥1,200 with thick noodles, two kinds of rare chashu, spinach and menma (August and October 2026) · kombu-water tsukemen with yuzu kosho and wasabi (August 2026) · cold ramen (August 2026) · rare chashu rice bowl (Tabelog; October 2026) · lemon sour (August 2026)',
    website: null, gmaps: gm('麺屋左衛門 西中島3-20-8'), menu_url: null,
    notes: "[Ramen · Nishinakajima, whole-chicken shoyu and homemade noodles] A 10-seat partitioned counter a minute from Nishinakajima-Minamigata, open since 2022 and run by the owner, usually alone (October 2026). The broth is domestic whole chicken, rich but clear, and the noodles are made in house with a strong wheat flavour (Tabelog). The ¥950 Chuka SOBA is a firm shoyu with thin noodles, rare chashu and long menma; stir in the bonito dashi jelly halfway and it turns toward seafood (October 2026). There is a shio on a chicken-and-seafood broth, a frothy white Chicken SOBA, a spicy one, and a chicken paitan tsukemen with thick noodles (¥1,200). Bowls are made one at a time, so allow 10–15 minutes. Now open late, and through New Year (August 2026).",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), usually working alone'], origin: null, background: 'Per the Tabelog listing: a rich, clear broth from domestically sourced whole chicken, homemade noodles "that have a strong wheat flavor", a shio chuka soba on a chicken-and-seafood double broth, a rare chashu don, and a partitioned counter so solo women diners feel at ease; opened 1 October 2022. An October 2026 diner: "It seems like the owner is usually working alone."', philosophy: null, specialty: 'Chuka SOBA (whole-chicken shoyu) with dashi jelly; chicken paitan tsukemen.',
      anecdotes: [
        { text: '"After eating about half, I was recommended to add the dashi jelly for a flavor change." — October 2026, the Chuka SOBA for JPY 950.', source: R + 'B537698410/' },
        { text: '"The atmosphere is quiet, with no background music, allowing you to fully focus on your ramen." — August 2026, the chicken paitan tsukemen for JPY 1,200.', source: R + 'B501541066/' },
        { text: '"I initially avoided this place thinking it was just another generic chain restaurant, but since they were open late, I decided to give it a try." — August 2026, now a regular.', source: R + 'B534630006/' },
      ],
      japanese_sources_summary: '食べログ: 麺屋左衛門、ラーメン、大阪市淀川区西中島3-20-8 新和ビル 1F、西中島南方駅からすぐ、毎日11:00〜15:00、18:00〜23:00、売り切れまで、休みは告知、予約不可、カード・電子マネー不可、PayPay 可、10席 (カウンター)、禁煙、子ども可、2022年10月1日オープン。店の紹介: 国産の丸鶏から炊いた濃厚で澄んだスープ、小麦の香りの強い自家製麺、鶏と魚介の ふたつのスープの塩中華そば、レアチャーシュー丼、仕切りのあるカウンターで女性ひとりでも。口コミ(2025年3月〜2026年10月): Chuka SOBA 950円 (濃い醤油、細いストレート麺、レアチャーシュー、長いメンマ、途中でだしのジュレを入れると魚介の味に)、塩は甘め、泡立った白い Chicken SOBA、辛い中華そば、鶏白湯つけ麺1,200円 (太麺、レアチャーシュー2種、ほうれん草、メンマ)、昆布水つけ麺に柚子こしょうとわさび、冷たいラーメン、レアチャーシュー丼、レモンサワー、券売機、PayPay は店主に画面を見せる、店主はたいていひとり、10〜15分かかる、夜遅くまで、年末年始も営業、BGM なし。',
      confidence: 'medium', sources: [TB, R + 'B501541066/', R + 'B502976222/', R + 'B533549407/', R + 'B533808357/', R + 'B533933350/', R + 'B534630006/', R + 'B536780073/', R + 'B536924974/', R + 'B537104702/', R + 'B537698410/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; a quiet, partitioned counter; the owner suggests when to add the dashi jelly. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島3-20-8 新和ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with the shop\'s own description; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島三丁目20番8号 (go) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537698410/', R + 'B536924974/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chuka SOBA (whole-chicken shoyu)', '¥950', 'Ramen', 'no', 'no', 'October 2026.', 'chuka_soba'),
      it('', '', 'Shio chuka soba (chicken and seafood)', '', 'Ramen', 'no', 'no', 'August 2026.', 'shio'),
      it('', '', 'Chicken SOBA (white broth)', '', 'Ramen', 'no', 'no', 'August 2026.', 'chicken_soba'),
      it('', '', 'Chicken paitan tsukemen', '¥1,200', 'Tsukemen', 'no', 'no', 'August and October 2026.', 'paitan_tsukemen'),
      it('', '', 'Rare chashu rice bowl', '', 'Rice', 'ask', 'no', 'October 2026.', 'chashu_don'),
    ] }, {
    cuisine: '丸鶏の中華そばと自家製麺 (食べログ)・Chuka SOBA 950円: 国産の丸鶏の濃くて澄んだ醤油のスープ、細いストレート麺、レアチャーシュー、長いメンマ。途中でだしのジュレを入れると魚介の味に (2026年10月、2025年3月)・鶏と魚介の ふたつのスープの塩中華そば (食べログ)。甘めという人も、味玉とだしのジュレ (2026年8月)・泡立った白いスープの Chicken SOBA に半熟卵 (2025年11月、2026年8月)・辛い中華そば (2026年10月)・太麺、レアチャーシュー2種、ほうれん草、メンマの鶏白湯つけ麺1,200円 (2026年8月と10月)・柚子こしょうとわさびの昆布水つけ麺 (2026年8月)・冷たいラーメン (2026年8月)・レアチャーシュー丼 (食べログ、2026年10月)・レモンサワー (2026年8月)',
    neighborhood: '西中島3-20-8、新和ビルの1階。西中島南方駅からすぐ (食べログ)',
    gf_detail: 'グルテンフリーではありません。どの一杯も自家製の小麦の麺。',
    vegan_detail: 'ヴィーガンではありません。丸鶏や鶏と魚介のスープに、レアチャーシュー。',
    notes: '[ラーメン・西中島、丸鶏の醤油と自家製麺] 西中島南方駅から1分の、仕切りのある10席のカウンターの店で、2022年から。店主がたいていひとりで作る (2026年10月)。スープは国産の丸鶏で、濃いのに澄んでいて、麺は小麦の香りの強い自家製 (食べログ)。950円の Chuka SOBA はしっかりした醤油に細麺、レアチャーシュー、長いメンマ。途中でかつおのだしのジュレを入れると魚介の味に変わる (2026年10月)。鶏と魚介のスープの塩、泡立った白い Chicken SOBA、辛い中華そば、太麺の鶏白湯つけ麺 (1,200円) も。一杯ずつ作るので10〜15分みておくこと。今は夜遅くまで、年末年始も営業 (2026年8月)。',
  });
}

// ================================================================ 喫茶 檸檬の
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27128148/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://lemon-no.com/';
  const D = day(['09:30', '20:30']);
  put({
    id: 'osaka_kissa_lemon_no_nishinakajima', name: '喫茶 檸檬の (Kissa Lemon-no)', category: 'OMNI',
    lat: 34.727051, lng: 135.500122, cuisine_type: 'kissaten',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The menu is curry with rice, hamburg steak, pasta, toast and cakes (lemon cake, tarts, cheesecake, shortcake); nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: curries with coconut milk and nuts, hamburg steak, bacon-and-egg toast and dairy cakes; nothing is described as vegan.',
    hours_raw: 'Daily 9:30–20:30; hours may change (Tabelog); breakfast from 10:00 (October 2026). Reservations by phone (Tabelog). Cards (VISA, Master) and PayPay; no e-money (Tabelog). Order and pay at the counter, then sit (August and September 2026). 14 seats plus a terrace seat (August 2026); non-smoking; children, babies and strollers welcome; takeaway (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '西中島3-11-10, ground floor of 新三宝ビル — about 150 m from Nishinakajima-Minamigata Stn (Tabelog)',
    cuisine: 'A café of curry and lemon cakes: "焼きカレーと檸檬ケーキのお店" (shop site) · Kashmir curry with coconut milk and nuts, sweet first and then spicy, in a lunch set with salad and a drink (August 2026) · today\'s hamburg steak set with mini salad and rice ¥1,300 (September 2026); salad bowls and pasta sets (September 2026) · breakfast with a drink, toast and a boiled egg; bacon-and-egg toast (October 2026) · lemon cake, also to take away; lemon tart; light cheesecake; Basque cheesecake; classic pudding; strawberry shortcake (2025–2026) · iced café latte ¥540 (September 2026), black sesame latte, café latte, cold-brew iced coffee (2026)',
    website: SITE, gmaps: gm('喫茶 檸檬の 西中島3-11-10'), menu_url: null,
    notes: "[Café · Nishinakajima, curry and lemon cake] A bright, stylish café a couple of minutes from Nishinakajima-Minamigata, which calls itself a shop of baked curry and lemon cake (site), busy with young women from breakfast on (2026). You order and pay at the counter, then take a plush seat or the small terrace. At lunch the draw is the Kashmir curry, coconut milk and nuts, sweet before it turns spicy, served as a set with a colourful salad and a drink; there are hamburg steak and pasta sets too (2026). The rest of the day belongs to lemon cake (to take home as well), lemon tart, cheesecake and pudding with a latte. Breakfast starts at 10:00 with free toast and a boiled egg (October 2026). One diner took it for part of the neel café group (September 2026).",
    chef_bio: { chef_name: null, roles: ['Café staff (unnamed)'], origin: null, background: 'The shop\'s site (lemon-no.com, read 2026-11-02) names it "喫茶 檸檬の 新大阪店" and calls it "焼きカレーと檸檬ケーキのお店" (a shop of baked curry and lemon cake). A September 2026 diner "realized it\'s part of the neel chain"; the site names no group and a web search found no confirmation, so the link is that diner\'s impression only. Staff are young and friendly (October 2026).', philosophy: null, specialty: 'Kashmir curry; lemon cake.',
      anecdotes: [
        { text: '"The Kashmir Curry has a unique flavor with coconut milk and nuts. … It\'s not just sweet. It\'s not just spicy either." — August 2026, the Kashmir Curry Set.', source: R + 'B534620281/' },
        { text: '"I even bought a Lemon Cake to take home! It was absolutely delicious." — September 2026, with a black sesame latte.', source: R + 'B536504984/' },
        { text: '"The breakfast comes with a drink, toast, and a boiled egg for free, but I wanted something more substantial, so I upgraded to a bacon and egg toast." — October 2026.', source: R + 'B537553953/' },
      ],
      japanese_sources_summary: '食べログ: 喫茶 檸檬の、喫茶店・カレー、大阪市淀川区西中島3-11-10 新三宝ビル 1F、西中島南方駅から154m、毎日9:30〜20:30、電話で予約可、カード (VISA、Master)・PayPay 可、電子マネー不可、14席、禁煙、モーニングあり、テイクアウト、子ども可、ベビーカー可。公式サイト: 喫茶 檸檬の 新大阪店、焼きカレーと檸檬ケーキのお店、COFFEE・CURRY・SWEETS。口コミ(2025年7月〜2026年10月): 先にカウンターで注文して支払い、テラス席、ココナッツミルクとナッツのKashmir カレー (甘くてあとから辛い) のサラダとドリンクのセット、日替わりハンバーグのセット1,300円、サラダボウル、パスタ、モーニングは10時からでドリンクにトーストとゆで卵、ベーコンエッグトースト、レモンケーキ (持ち帰りも)、レモンタルト、チーズケーキ、バスクチーズケーキ、プリン、いちごのショートケーキ、アイスカフェラテ540円、黒ごまラテ、水出しアイスコーヒー、若い女性の客が多い、neel のグループの店だと思った人も。',
      confidence: 'medium', sources: [TB, SITE, R + 'B513078644/', R + 'B534320774/', R + 'B534619311/', R + 'B534620281/', R + 'B534892798/', R + 'B534938172/', R + 'B536413488/', R + 'B536464599/', R + 'B536504984/', R + 'B537553953/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order and pay at the counter before sitting. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島3-11-10 新三宝ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and the shop\'s site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島三丁目11番10号 (go) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534938172/', R + 'B534620281/', R + 'B537553953/'],
    price_note: 'One set price from a September 2026 review; others unpriced.', last_checked: TODAY, items: [
      it('', '', 'Kashmir curry set with salad and drink', '', 'Lunch', 'ask', 'no', 'August 2026.', 'kashmir_curry'),
      it('', '', 'Today\'s hamburg steak set with mini salad and rice', '¥1,300', 'Lunch', 'ask', 'no', 'September 2026.', 'hamburg_set'),
      it('', '', 'Lemon cake', '', 'Sweets', 'no', 'no', 'August and September 2026.', 'lemon_cake'),
      it('', '', 'Breakfast: drink with toast and boiled egg', '', 'Breakfast', 'no', 'no', 'October 2026.', 'morning'),
      it('', '', 'Iced café latte', '¥540', 'Drinks', 'ask', 'no', 'September 2026.', 'iced_latte'),
    ] }, {
    cuisine: 'カレーとレモンケーキの喫茶: 「焼きカレーと檸檬ケーキのお店」(公式サイト)・ココナッツミルクとナッツのKashmir カレー、最初は甘くてあとから辛い、サラダとドリンクのランチセット (2026年8月)・日替わりハンバーグにミニサラダとごはんのセット1,300円 (2026年9月)。サラダボウルとパスタのセット (2026年9月)・モーニング: ドリンクにトーストとゆで卵、ベーコンエッグトースト (2026年10月)・レモンケーキ (持ち帰りも)、レモンタルト、軽いチーズケーキ、バスクチーズケーキ、昔ながらのプリン、いちごのショートケーキ (2025〜2026年)・アイスカフェラテ540円 (2026年9月)、黒ごまラテ、カフェラテ、水出しのアイスコーヒー (2026年)',
    neighborhood: '西中島3-11-10、新三宝ビルの1階。西中島南方駅から約150m (食べログ)',
    gf_detail: '要確認。グルテンの情報なし。メニューはカレーライス、ハンバーグ、パスタ、トースト、ケーキ (レモンケーキ、タルト、チーズケーキ、ショートケーキ) で、グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。ココナッツミルクとナッツのカレー、ハンバーグ、ベーコンエッグのトースト、乳製品のケーキ。ヴィーガンの説明はない。',
    notes: '[喫茶・西中島、カレーとレモンケーキ] 西中島南方駅から2分ほどの明るくおしゃれな喫茶で、焼きカレーとレモンケーキの店を名乗る (公式サイト)。朝から若い女性客でにぎわう (2026年)。カウンターで注文して支払ってから、ふかふかの席か小さなテラス席へ。昼の人気はKashmir カレー: ココナッツミルクとナッツで、甘いと思うとあとから辛い。色あざやかなサラダとドリンクのセットで。ハンバーグやパスタのセットも (2026年)。ほかの時間はレモンケーキ (持ち帰りも)、レモンタルト、チーズケーキ、プリンとラテ。モーニングは10時からで、トーストとゆで卵が無料でつく (2026年10月)。neel のグループの店だと思った人も (2026年9月)。',
  });
}

// ================================================================ 横浜家系ラーメン 天来家
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27132930/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '00:00']);
  put({
    id: 'osaka_tenraiya_nishinakajima', name: '横浜家系ラーメン 天来家 (Yokohama Iekei Ramen Tenraiya)', category: 'OMNI',
    lat: 34.726723, lng: 135.497676, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles; sets add fried rice and kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonkotsu shoyu broth with chashu.',
    hours_raw: 'Daily 11:00–24:00; hours may change (Tabelog). No reservations; cards (AMEX) on Tabelog, while a July 2026 diner says electronic payment and cards are accepted at the ticket machine; no e-money or QR on Tabelog. 18 seats: a counter of about ten and tables (Tabelog; July and September 2026); non-smoking (Tabelog). Opened 21 November 2022 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: '西中島4-2-11, ground floor of コージーコート新大阪 — 2 min from Exit 1 of Nishinakajima-Minamigata Stn (Tabelog)',
    cuisine: 'Yokohama iekei ramen: a rich tonkotsu shoyu with a sharp soy edge, thick chewy noodles, chashu, spinach and nori, with firmness, strength and oil chosen to order (August and September 2026) · MAX ramen ¥1,050 (July 2023); Shio MAX ramen ¥1,250 (August 2026); shio negi ramen ¥1,150 (July 2026); salt tonkotsu with mini fried rice (September 2026); seasoned-egg ramen with rice (February 2026) · half-chahan set ¥1,300 (February 2026); fried rice alone ¥650 (July 2026) · spicy miso, garlic and doubanjiang on the table (September 2026)',
    website: null, gmaps: gm('横浜家系ラーメン 天来家 西中島4-2-11'), menu_url: null,
    notes: "[Ramen · Nishinakajima, Yokohama iekei till midnight] An 18-seat iekei ramen shop two minutes from Nishinakajima-Minamigata, open 11:00 to midnight every day since 2022. The bowl is classic iekei: a rich, oily tonkotsu shoyu with a sharp soy edge, thick chewy noodles, chashu, spinach and nori to wrap rice in, with noodle firmness, strength and oil to order; one diner likened it to Machida Shoten (February 2026), another found it salty (August 2026). The fried rice has its own fans, ordered alone for ¥650 (July 2026), and the half-chahan set is ¥1,300. Spicy miso, garlic and doubanjiang on the counter for a change of flavour. A good late stop after drinks.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'No shop description on Tabelog; opened 21 November 2022 (Tabelog). The osaka-kita crawl also lists 横浜家系ラーメン 天来家 大正駅前店. Reviewers find the staff energetic and friendly (August 2026).', philosophy: null, specialty: 'Iekei tonkotsu shoyu; fried rice.',
      anecdotes: [
        { text: '"When I soaked the seaweed in the broth and wrapped it around rice, it was incredibly delicious!" — July 2026, a first iekei ramen.', source: R + 'B533107294/' },
        { text: '"The balance of the perfect saltiness and the fluffy texture was exquisite." — July 2026, the fried rice on its own for JPY 650.', source: R + 'B531269920/' },
        { text: '"Overall, it felt like a bowl that was relatively close to authentic Yokohama Iekei ramen." — August 2026, the Shio MAX ramen for JPY 1,250.', source: R + 'B468520634/' },
      ],
      japanese_sources_summary: '食べログ: 横浜家系ラーメン 天来家、ラーメン、大阪市淀川区西中島4-2-11 コージーコート新大阪 1F、西中島南方駅1番出口から徒歩2分、毎日11:00〜24:00、予約不可、カード (AMEX) 可、電子マネー・QR 不可、18席 (カウンター10、テーブル)、禁煙、2022年11月21日オープン。口コミ(2023年7月〜2026年9月): 濃いとんこつ醤油にキレのある醤油、太くてもちもちの麺、チャーシュー、ほうれん草、のり、麺のかたさ、味の濃さ、油の量を選べる、MAX ラーメン1,050円、塩 MAX ラーメン1,250円、塩ねぎラーメン1,150円、塩とんこつとミニチャーハン、味玉ラーメンとごはん、半チャンセット1,300円、チャーハン650円、卓上に辛味噌、にんにく、豆板醤、Machida Shoten に似ているという声、しょっぱいという声、元気なスタッフ、券売機は電子決済とカードも使えたという声。',
      confidence: 'medium', sources: [TB, R + 'B468520634/', R + 'B523030315/', R + 'B523292032/', R + 'B531269920/', R + 'B532249590/', R + 'B533107294/', R + 'B533808581/', R + 'B535145644/', R + 'B536208858/', R + 'B536302558/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; choose noodle firmness, strength and oil. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島4-2-11 コージーコート新大阪 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島四丁目2番11号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B468520634/', R + 'B523292032/', R + 'B531269920/', R + 'B532249590/'],
    price_note: 'Prices from 2026 reviews, each dated in its note.', last_checked: TODAY, items: [
      it('', '', 'Shio MAX ramen', '¥1,250', 'Ramen', 'no', 'no', 'August 2026.', 'shio_max'),
      it('', '', 'Shio negi ramen', '¥1,150', 'Ramen', 'no', 'no', 'July 2026.', 'shio_negi'),
      it('', '', 'Half-chahan set', '¥1,300', 'Sets', 'no', 'no', 'February 2026.', 'hanchan'),
      it('', '', 'Fried rice', '¥650', 'Rice', 'ask', 'no', 'July 2026.', 'chahan'),
    ] }, {
    cuisine: '横浜の家系ラーメン: キレのある醤油の濃いとんこつ醤油、太くてもちもちの麺、チャーシュー、ほうれん草、のり。麺のかたさ、味の濃さ、油を選べる (2026年8月と9月)・MAX ラーメン1,050円 (2023年7月)。塩 MAX ラーメン1,250円 (2026年8月)。塩ねぎラーメン1,150円 (2026年7月)。塩とんこつとミニチャーハン (2026年9月)。味玉ラーメンとごはん (2026年2月)・半チャンセット1,300円 (2026年2月)。チャーハンだけなら650円 (2026年7月)・卓上に辛味噌、にんにく、豆板醤 (2026年9月)',
    neighborhood: '西中島4-2-11、コージーコート新大阪の1階。西中島南方駅1番出口から徒歩2分 (食べログ)',
    gf_detail: 'グルテンフリーではありません。太い小麦の麺で、セットにはチャーハンと kara-age。',
    vegan_detail: 'ヴィーガンではありません。とんこつ醤油のスープにチャーシュー。',
    notes: '[ラーメン・西中島、夜12時までの横浜家系] 西中島南方駅から2分の18席の家系ラーメンの店で、2022年から毎日11時から夜12時まで。一杯は王道の家系: 油の多い濃いとんこつ醤油にキレのある醤油、太くてもちもちの麺、チャーシュー、ほうれん草、ごはんを巻くのり。麺のかたさ、濃さ、油を選べる。Machida Shoten に似ているという人も (2026年2月)、しょっぱいという人も (2026年8月)。チャーハンにもファンがいて、単品650円で頼む人も (2026年7月)。半チャンセットは1,300円。卓上の辛味噌、にんにく、豆板醤で味を変えて。飲んだあとの一杯にも。',
  });
}

save();
