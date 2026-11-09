// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 82.
//   + 三條尾張屋 Sanjo Owariya (neighbourhood soba shop on Higashinotoin, curry seiro and tendon sets) — rest
//   - skip 26000524 古都梅 (thin: one 2025–26 review)
//   - skip 26036530 Teastand T (thin: two one-line 2025–26 reviews)
//   + コフレダミティエ Coffret d'Amitie (French bistro lunch sets in a sunken-kotatsu room, Sanjo-Higashinotoin) — rest
//   - skip 26001484 スカイレストラン ピトレスク (Hotel Okura Kyoto)
//   - skip 26044414 COFFEE BASE COCON KARASUMA店 (five or more COFFEE BASE shops)
//   + 京めし処 豚汁専門店しげちゃん Shigechan (tonjiru and onigiri sets inside the Museum of Kyoto) — rest
//   + cafe Prima (tarts from the Gojo Prima pâtisserie, plate lunches, near Shijo-Karasuma) — rest
//   Rest tier, nearest-first from `next rest 2000`. Every brand checked against queue-status.jsonl and the THAN brand list
//   (than.co.jp/brands, read 2026-11-08): no matches and no earlier rulings for 尾張屋, 古都梅, Teastand, コフレ, ピトレスク,
//   COFFEE BASE, しげちゃん or Prima.
//   Same-name counts first (2026-11-08): 三條尾張屋 — one (a January 2026 reviewer says it keeps an Edo-period name; no tie to
//   本家尾張屋 is sourced). コフレダミティエ — one. しげちゃん — one. cafe Prima — the café of the Gojo pâtisserie at'Prima, two shops.
//   COFFEE BASE — Tabelog lists Kanondo, COCON Karasuma, Nashinoki, BnA and Shimogamo in Kyoto plus Meguro in Tokyo.
//   None of the four drafted is in data/kyoto.json.
//   Charges: none listed on Tabelog for the four. No halal claims; no owner deaths; single-review remarks about other diners left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-82');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26000524', 'thin: 古都梅 has a single 2025–26 Tabelog review (April 2025) and its site did not load — not enough current sourced detail to draft (https://tabelog.com/en/kyoto/A2601/A260301/26000524/).');
skip('26036530', 'thin: Teastand T has two 2025–26 reviews, both one-liners about takeaway milk tea — not enough sourced detail to draft (https://tabelog.com/en/kyoto/A2601/A260301/26036530/).');
skip('26001484', 'venue inside a big-chain hotel (Greg 11-08 ruling): スカイレストラン ピトレスク is on the 17th floor of Hotel Okura Kyoto (https://www.hotel.kyoto/okura/restaurant/pittoresque/; https://tabelog.com/en/kyoto/A2601/A260201/26001484/).');
skip('26044414', 'five or more same-name shops: Tabelog lists COFFEE BASE at Kanondo, COCON Karasuma, Nashinoki, BnA and Shimogamo in Kyoto and at Meguro in Tokyo (https://tabelog.com/en/rstLst/?sw=COFFEE+BASE).');

// ================================================================ 三條尾張屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26001136/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '19:00']); const SA = day(['11:00', '15:00']);
  put({
    id: 'kyoto_sanjo_owariya', name: '三條尾張屋 (Sanjo Owariya)', category: 'OMNI',
    lat: 35.0078, lng: 135.76101, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soba and udon in soy-based broth; tendon and tempura sets (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi broth, herring soba, oyakodon, tempura (2025–26 reviews).',
    hours_raw: 'Mon–Fri 11:00–19:00; Sat until about 15:00; closed Sunday and holidays; may change (Tabelog). Often a short queue, with waiting seats inside (January 2026). Soba can sell out early on busy days such as Gion Matsuri parade days (July 2026). Cards (JCB, AMEX, Diners), e-money and QR (Tabelog). 29 seats: tables, a five-seat counter and raised tatami (Tabelog; January and November 2026). Non-smoking (Tabelog). Higashinotoin-dori south of Sanjo, opposite a supermarket, near Rokkakudo (Tabelog; May and July 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: SA }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashinotoin, south of Sanjo — Karasuma Oike',
    cuisine: 'Long-established neighbourhood soba shop with udon and rice-bowl sets · kayaku soba with fluffy egg and shiitake (August 2025) · small kake soba with small tendon (February 2026) · curry seiro — cold soba with a hot curry dip — ¥1,050 (May and November 2026) · herring soba, made with udon when the soba ran out (July 2026) · tempura set, oyakodon, mini soba set (November 2026)',
    website: null, gmaps: gm('三條尾張屋 京都'), menu_url: TB,
    notes: '[Soba · Higashinotoin-Sanjo] A busy, old-style soba shop near Karasuma Oike with tables and raised tatami, known for curry seiro — cold soba with a hot curry dip — plus herring soba, egg-topped kayaku soba and half-size tendon or oyakodon sets. A lively young proprietress; often a short queue. Closed Sunday; Saturdays to about 15:00.',
    chef_bio: { chef_name: null, roles: ['Proprietress (unnamed), described as young and lively (July 2026)'], origin: null,
      background: 'Per reviews: a long-established soba shop near Karasuma Oike; a January 2026 visitor says it preserves an Edo-period name and tradition.',
      philosophy: null, specialty: 'Curry seiro; herring soba.',
      anecdotes: [
        { text: 'On a July 2026 parade day the soba sold out early, and the proprietress welcomed a diner in for herring udon instead.', source: R + 'B532414889/' },
        { text: 'A January 2026 first-timer, curious about the queue seen on every walk past, found waiting seats inside and a lively welcome.', source: R + 'B521065579/' },
        { text: 'A November 2026 diner tried the curry seiro — cold soba, hot curry dip — for ¥1,050.', source: R + 'B538739935/' },
      ],
      japanese_sources_summary: '食べログ: そば、中京区東洞院通三条下ル三文字町216-1、月〜金11:00〜19:00、土曜は15時ごろまで、日曜・祝日休み、カード・電子マネー・QR 可、29席、座敷、禁煙。口コミ (2025年8月〜2026年11月、英語): 江戸時代からの屋号を守る老舗のそば屋、店内に待ち席、ふわふわ卵と椎茸のかやくそば、小のかけそばと小の天丼、カレーせいろ1,050円、にしんそば、祭りの日はそばが早く売り切れ、天ぷら定食、親子丼、ミニそばのセット、若い女将。',
      confidence: 'medium', sources: [TB, R + 'B512798716/', R + 'B520187294/', R + 'B521065579/', R + 'B521122991/', R + 'B522907912/', R + 'B523054379/', R + 'B523391803/', R + 'B524710748/', R + 'B528607324/', R + 'B532414889/', R + 'B538739935/', R + 'B538888663/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Wait on the seats inside if there is a queue; the curry seiro is the house speciality. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区東洞院通三条下ル三文字町216-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.007800, 135.761010); cross-checked: GSI 京都府京都市中京区三文字町216番地 (lot) 26m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538739935/'],
    price_note: 'One price from November 2026; reviewers report ¥1,000–1,999 per person.', last_checked: TODAY, items: [
      it('', '', 'Curry seiro (cold soba, hot curry dip)', '¥1,050', 'Soba', 'no', 'no', 'November 2026.', 'curry_seiro'),
      it('', '', 'Herring soba', '', 'Soba', 'no', 'no', 'July 2026.', 'nishin'),
      it('', '', 'Small kake soba and small tendon', '', 'Sets', 'no', 'no', 'February 2026.', 'kake_tendon'),
    ] }, {
    cuisine: 'うどんや丼のセットもある老舗の町のそば屋・ふわふわ卵と椎茸のかやくそば (2025年8月)・小のかけそばと小の天丼 (2026年2月)・冷たいそばに温かいカレーのつけ汁のカレーせいろ1,050円 (2026年5月・11月)・そばが売り切れてうどんで作ったにしん (2026年7月)・天ぷら定食、親子丼、ミニそばのセット (2026年11月)',
    neighborhood: '東洞院、三条の南。烏丸御池',
    gf_detail: 'グルテンフリーではない。醤油ベースのつゆのそばとうどん、天丼や天ぷらのセット (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。出汁のつゆ、にしんそば、親子丼、天ぷら (2025〜2026年の口コミ)。',
    notes: '[そば・東洞院三条] 烏丸御池近くの、テーブルと座敷のあるにぎやかな昔ながらのそば屋。冷たいそばを温かいカレーのつゆで食べるカレーせいろが名物。にしんそば、卵のかやくそば、小さな天丼や親子丼のセットも。元気な若い女将。行列ができることも。日曜休み、土曜は15時ごろまで。',
  });
}

// ================================================================ コフレダミティエ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26031550/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '21:00']);
  put({
    id: 'kyoto_coffret_damitie', name: 'コフレダミティエ (Coffret d’Amitié)', category: 'OMNI',
    lat: 35.008536, lng: 135.76121, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Lunch sets of fish or meat with soup and dessert; sole meunière and quiche appear (2025–26 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish and meat mains with sauces (2025–26 reviews).',
    hours_raw: 'Mon and Wed–Sun 11:30–21:00; closed Tuesday; may change (Tabelog). Reservations accepted (December 2025). Cash only — no cards, e-money or QR (Tabelog). Seating includes a traditional sunken kotatsu (December 2025; April 2026). ミックナカムラビル 1F, Higashinotoin south of Sanjo, near the Museum of Kyoto (Tabelog; December 2025).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Higashinotoin, south of Sanjo — Karasuma Oike',
    cuisine: 'Cosy French bistro and café known for good-value lunch sets with plenty of vegetables · ¥1,200 set with a choice of five fish or meat mains and dessert: carrot soup, whole grilled flounder with yuzu sauce (December 2025) · soy-milk soup, sautéed mackerel with salad (April 2026) · ¥1,600 course with mushroom quiche, sole meunière with mushroom sauce and grilled vegetables, dessert (August 2026)',
    website: null, gmaps: gm('コフレダミティエ 京都'), menu_url: TB,
    notes: '[French bistro · Higashinotoin-Sanjo] A warm little bistro near the Museum of Kyoto with a sunken-kotatsu seat, serving generous French lunch sets — soup, a choice of five fish or meat mains with lots of vegetables, and dessert — for ¥1,200–1,600, open through to 21:00. Cash only; closed Tuesday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog and reviews: a bistro and café near the Museum of Kyoto, known for consistent lunch sets.',
      philosophy: null, specialty: 'French lunch sets with vegetables.',
      anecdotes: [
        { text: 'A December 2025 group found Christmas tableware and a whole grilled flounder with yuzu sauce in the ¥1,200 lunch.', source: R + 'B518448241/' },
        { text: 'An April 2026 weekday visitor relaxed at the sunken kotatsu over a gentle soy-milk soup and sautéed mackerel.', source: R + 'B526744183/' },
        { text: 'An August 2026 regular praised the steady prices and the sole meunière after the Gion Matsuri.', source: R + 'B526456541/' },
      ],
      japanese_sources_summary: '食べログ: ビストロ・カフェ・ケーキ、中京区東洞院通三条下ル三文字町 ミックナカムラビル 1F、月・水〜日11:30〜21:00、火曜休み、現金のみ。口コミ (2019年1月〜2026年8月、英語): 京都文化博物館の近く、掘りごたつ、魚と肉の5種から選べるメインとデザートの1,200円のランチ、にんじんのスープ、カレイの丸ごと焼き柚子ソース、豆乳スープ、鯖のソテー、きのこのキッシュと舌平目のムニエルの1,600円のコース、野菜たっぷり。',
      confidence: 'medium', sources: [TB, R + 'B407908035/', R + 'B421845071/', R + 'B423430710/', R + 'B427229562/', R + 'B431864083/', R + 'B501251736/', R + 'B518448241/', R + 'B526456541/', R + 'B526744183/', R + 'B536949968/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Bring cash; lunch sets are the easy order. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区東洞院通三条下ル三文字町 ミックナカムラビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.008446, 135.761210), offset 10 m north: kyoto_sushi_zakoya (same Mick Nakamura building, 2F) sat 1.9 m away; cross-checked: GSI 京都府京都市中京区三文字町200番地 (lot, the building's lot per kyoto_sushi_zakoya's Tabelog address) 69m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B518448241/', R + 'B526456541/'],
    price_note: 'Lunch prices from December 2025 to August 2026; cash only.', last_checked: TODAY, items: [
      it('', '', 'Lunch set (choice of five mains, dessert)', '¥1,200', 'Lunch', 'ask', 'no', 'December 2025; April 2026.', 'lunch_1200'),
      it('', '', 'Lunch course with appetizer and dessert', '¥1,600', 'Lunch', 'ask', 'no', 'August 2026.', 'lunch_1600'),
      it('', '', 'Sole meunière with mushroom sauce', '', 'Mains', 'no', 'no', 'August 2026.', 'meuniere'),
    ] }, {
    cuisine: '野菜たっぷりのお得なランチで知られる居心地のよいフレンチのビストロとカフェ・魚と肉の5種から選べるメインとデザートの1,200円のセット、にんじんのスープ、カレイの丸ごと焼き柚子ソース (2025年12月)・豆乳のスープ、鯖のソテーとサラダ (2026年4月)・きのこのキッシュ、きのこソースの舌平目のムニエルと焼き野菜、デザートの1,600円のコース (2026年8月)',
    neighborhood: '東洞院、三条の南。烏丸御池',
    gf_detail: '要確認。魚や肉とスープ、デザートのランチ。舌平目のムニエルやキッシュもある (2025〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。ソースを添えた魚と肉のメイン (2025〜2026年の口コミ)。',
    notes: '[フレンチビストロ・東洞院三条] 京都文化博物館近くの、掘りごたつの席もある温かい小さなビストロ。スープ、魚か肉の5種から選べる野菜たっぷりのメイン、デザートのランチが1,200〜1,600円。21時まで営業。現金のみ。火曜休み。',
  });
}

// ================================================================ 京めし処 豚汁専門店しげちゃん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26041906/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '16:00'], ['17:00', '21:00']);
  put({
    id: 'kyoto_tonjiru_shigechan', name: '京めし処 豚汁専門店しげちゃん (Kyomeshidokoro Tonjiru Senmonten Shigechan)', category: 'OMNI',
    lat: 35.009574, lng: 135.762449, cuisine_type: 'shokudo',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tonjiru (miso pork soup), onigiri and obanzai with soy-based seasoning (2025–26 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork miso soup, offal stew, chawanmushi (2025–26 reviews).',
    hours_raw: 'Tue–Sun and holidays 11:30–16:00 and 17:00–21:00; closed Monday (Tuesday if Monday is a holiday) (Tabelog). Reservation-only all-you-can-drink party course for groups of four or more, one group per day (Tabelog). Fills by noon (October 2025). Cards, e-money and QR incl. Alipay and WeChat Pay (Tabelog). 18 seats: 12 at tables, 6 at the counter (Tabelog). Non-smoking (Tabelog). Inside the Museum of Kyoto, in its row of shops recreating late-Edo townhouses (Tabelog; May 2026). Opened 1 November 2024 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Museum of Kyoto, Sanjo-Takakura — Karasuma Oike',
    cuisine: 'Tonjiru (pork miso soup) specialist with a choice of miso, onigiri and Kyoto obanzai · tonjiru set ¥1,600 with rice, salad, chawanmushi, tofu, pickles and obanzai; five assorted rice balls ¥800; large tonjiru ¥660 (September 2025) · tonjiru and five bite-size onigiri set ¥2,200–2,300; free rice refills (October 2025) · sake-lees soup in place of tonjiru from December to March (December 2025; February 2026) · offal stew set (October 2026) · free extra green onion (October 2026)',
    website: null, gmaps: gm('豚汁専門店しげちゃん 京都文化博物館'), menu_url: TB,
    notes: '[Tonjiru and onigiri · Museum of Kyoto, since 2024] A small set-meal counter in the Museum of Kyoto’s Edo-townhouse arcade, built around hearty pork miso soup with your choice of miso, bite-size onigiri with chosen fillings, and Kyoto obanzai; sake-lees soup in winter. Sets about ¥1,600–2,300, free rice refills. Closed Monday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a tonjiru specialist opened in November 2024 inside the Museum of Kyoto, serving pork miso soup with a choice of miso and dishes of Kyoto ingredients.',
      philosophy: null, specialty: 'Tonjiru; onigiri sets.',
      anecdotes: [
        { text: 'An October 2025 diner arrived at the 11:30 opening as the first guest and watched it fill by noon.', source: R + 'B514985684/' },
        { text: 'A February 2026 museum-goer warmed up with the winter sake-lees soup, rich with vegetables.', source: R + 'B522953373/' },
        { text: 'An October 2026 green-onion lover was delighted that extra onion is free.', source: R + 'B537857811/' },
      ],
      japanese_sources_summary: '食べログ: 食堂・居酒屋・おにぎり、中京区東片町623-1 京都文化博物館、地下鉄烏丸御池駅から徒歩5〜10分、火〜日・祝日11:30〜16:00 と17:00〜21:00、月曜休み (祝日の場合は翌日)、カード・電子マネー・QR 可、18席 (テーブル12、カウンター6)、禁煙、2024年11月1日オープン、味噌を選べる豚汁、京都の食材の料理、1日1組の飲み放題付き宴会コース。口コミ (2025年9月〜2026年10月、英語): 豚汁定食1,600円、おにぎり5種800円、大きな豚汁660円、豚汁とひと口おにぎり5種のセット2,200〜2,300円、ご飯おかわり無料、12〜3月は粕汁、もつ煮込みの定食、ねぎ増量無料。',
      confidence: 'medium', sources: [TB, R + 'B514373447/', R + 'B514678590/', R + 'B514985684/', R + 'B517898333/', R + 'B518476671/', R + 'B522953373/', R + 'B524536660/', R + 'B527627944/', R + 'B530042687/', R + 'B533916210/', R + 'B537190150/', R + 'B537857811/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pick your miso and onigiri fillings; arrive early. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区東片町623-1 京都文化博物館',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009574, 135.762449); cross-checked: GSI 京都府京都市中京区東片町623番地 (lot) 31m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B514373447/', R + 'B514678590/'],
    price_note: 'Prices from September and October 2025.', last_checked: TODAY, items: [
      it('', '', 'Tonjiru set (rice, salad, chawanmushi, tofu, pickles, obanzai)', '¥1,600', 'Sets', 'ask', 'no', 'September 2025.', 'tonjiru_set'),
      it('', '', 'Tonjiru and five bite-size onigiri set', '¥2,200', 'Sets', 'ask', 'no', 'October 2025.', 'onigiri_set'),
      it('', '', 'Five assorted onigiri', '¥800', 'À la carte', 'ask', 'ask', 'September 2025.', 'onigiri5'),
      it('', '', 'Large tonjiru', '¥660', 'À la carte', 'ask', 'no', 'September 2025.', 'tonjiru'),
    ] }, {
    cuisine: '味噌を選べる豚汁の専門店、おにぎりと京のおばんざい・ご飯、サラダ、茶碗蒸し、豆腐、漬物、おばんざい付きの豚汁定食1,600円、おにぎり5種800円、具だくさんの豚汁660円 (2025年9月)・豚汁とひと口おにぎり5種のセット2,200〜2,300円、ご飯おかわり無料 (2025年10月)・12〜3月は豚汁の代わりに粕汁 (2025年12月、2026年2月)・もつ煮込みの定食 (2026年10月)・ねぎ増量無料 (2026年10月)',
    neighborhood: '京都文化博物館、三条高倉。烏丸御池',
    gf_detail: '要確認。醤油で味付けする豚汁、おにぎり、おばんざい (2025〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。豚汁、もつ煮込み、茶碗蒸し (2025〜2026年の口コミ)。',
    notes: '[豚汁とおにぎり・京都文化博物館、2024年から] 京都文化博物館の江戸の町家を再現した一角にある小さな定食の店。味噌を選べる具だくさんの豚汁、具を選べるひと口おにぎり、京のおばんざい。冬は粕汁。定食は1,600〜2,300円ほど、ご飯おかわり無料。月曜休み。',
  });
}

// ================================================================ cafe Prima
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26041036/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://cafeprima-kyoto.com';
  const H = day(['11:30', '23:00']); const SU = day(['17:00', '21:00']);
  put({
    id: 'kyoto_cafe_prima_karasuma', name: 'cafe Prima', category: 'OMNI',
    lat: 35.005313, lng: 135.759317, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tarts, sandwiches, pizza and gratin napolitan (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken plates, beef stew, beef sandwiches and cream tarts (2025–26 reviews).',
    hours_raw: 'Mon–Sat 11:30–23:00 (last order 22:30); Sun and holidays 17:00–21:00 (last order 20:30); irregular closures (Tabelog). Weekday lunch plates 11:30–14:30, with a free drink and soup bar via a LINE coupon (September 2026; January 2026). One drink per person in the evening unless in a set (March 2026). Ordering by QR code (February 2026). Cards (incl. UnionPay), e-money and QR incl. Alipay and WeChat Pay (Tabelog). 26 seats; private hire (Tabelog). Basement of the Sompo Japan Universe Kyoto Building, 1 min from Karasuma station (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Karasuma-dori, north of Nishikikoji — Karasuma / Shijo',
    cuisine: 'Basement café-bar of the Gojo pâtisserie Prima, with its tarts made fresh each morning, plate lunches, steak sandwiches and cocktails (Tabelog; March 2026) · strawberry and berry tart set (December 2025) · gratin-style napolitan plate (January 2026) · apple chiboust; beef stew plate with rice or bread ¥990 (February 2026) · tart cake set ¥950 with Mont Blanc tart; banana tart and cappuccino ¥1,320; beef sandwich about ¥3,000; pizza and cake set (March 2026) · cake set ¥990 (May 2026) · kara-age plate ¥1,100; chicken nanban plate ¥990 (July 2026) · chicken salsa plate; Mont Blanc tart (September 2026) · chicken sauté with duxelles and tomato cream (October 2026)',
    website: SITE, gmaps: gm('cafe Prima 四条烏丸'), menu_url: TB,
    notes: '[Café-bar · Shijo-Karasuma] A basement café by Karasuma station serving tarts baked each morning at the Prima pâtisserie in Gojo — Mont Blanc, apple chiboust, seasonal fruit — plus ¥990–1,100 plate lunches, beef stew, steak sandwiches and pizza, and cocktails into the evening. Cake sets around ¥950–990; weekday lunch drink bar with a LINE coupon.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog and reviews: the café of the Gojo pâtisserie at’Prima, whose pastry chefs supply its tarts each morning.',
      philosophy: null, specialty: 'Fruit tarts; plate lunches.',
      anecdotes: [
        { text: 'A March 2026 visitor came to spend Tabelog points and chose a Mont Blanc tart from the morning delivery.', source: R + 'B525163179/' },
        { text: 'A February 2026 passer-by followed a few taxi drivers down the stairs and found a ¥990 beef stew plate.', source: R + 'B523356741/' },
        { text: 'A December 2025 visitor found most tarts already sold out at the main shop that day.', source: R + 'B519941537/' },
      ],
      japanese_sources_summary: '食べログ・公式サイト: カフェ・肉バル・イタリアン、中京区烏丸通錦小路上ル手洗水町671 損保ジャパンユニバース京都ビル B1F、烏丸駅から徒歩約1分、月〜土11:30〜23:00 (L.O. 22:30)、日・祝日17:00〜21:00 (L.O. 20:30)、不定休、カード・電子マネー・QR 可、26席、五条の本店のパティシエのタルト、プレートのランチ、和牛サンド、ヒレステーキサンド、カクテル。口コミ (2025年12月〜2026年10月、英語): 毎朝五条の at’Prima から届くタルト、モンブランのタルト、りんごのシブースト、タルトのケーキセット950円、ビーフシチューのプレート990円、からあげのプレート1,100円、チキン南蛮990円、グラタン風ナポリタン、ビーフサンド約3,000円、ピザとケーキのセット、LINE のクーポンで平日昼のドリンクバー、夜はワンドリンク制、QR で注文。',
      confidence: 'medium', sources: [TB, SITE, R + 'B507608755/', R + 'B517496290/', R + 'B519941537/', R + 'B521630140/', R + 'B523155656/', R + 'B523356741/', R + 'B524018512/', R + 'B524857647/', R + 'B525163179/', R + 'B525316733/', R + 'B527854286/', R + 'B538221431/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by QR code; one drink each in the evening. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区烏丸通錦小路上ル手洗水町671 損保ジャパンユニバース京都ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005313, 135.759317); cross-checked: GSI 京都府京都市中京区手洗水町671番地 (lot) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B525163179/', R + 'B523356741/', R + 'B507608755/'],
    price_note: 'Prices from February–July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tart cake set (with a drink)', '¥950', 'Cake', 'no', 'no', 'March 2026.', 'tart_set'),
      it('', '', 'Beef stew plate (rice or bread)', '¥990', 'Lunch', 'no', 'no', 'February 2026.', 'beef_stew'),
      it('', '', 'Kara-age plate', '¥1,100', 'Lunch', 'no', 'no', 'July 2026.', 'karaage'),
      it('', '', 'Chicken nanban plate', '¥990', 'Lunch', 'no', 'no', 'July 2026.', 'nanban'),
      it('', '', 'Beef sandwich', '~¥3,000', 'Sandwiches', 'no', 'no', 'March 2026.', 'beef_sando'),
    ] }, {
    cuisine: '五条のパティスリー Prima の毎朝のタルト、プレートのランチ、ステーキサンド、カクテルの地下のカフェバー (食べログ、2026年3月)・いちごとベリーのタルトのセット (2025年12月)・グラタン風ナポリタンのプレート (2026年1月)・りんごのシブースト、ご飯かパンのビーフシチューのプレート990円 (2026年2月)・モンブランのタルトのケーキセット950円、バナナのタルトとカプチーノ1,320円、約3,000円のビーフサンド、ピザとケーキのセット (2026年3月)・ケーキセット990円 (2026年5月)・からあげのプレート1,100円、チキン南蛮のプレート990円 (2026年7月)・チキンのサルサのプレート、モンブランのタルト (2026年9月)・デュクセルとトマトクリームのチキンソテー (2026年10月)',
    neighborhood: '烏丸通、錦小路の北。烏丸・四条',
    gf_detail: 'グルテンフリーではない。タルト、サンドイッチ、ピザ、グラタン風ナポリタン (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。チキンのプレート、ビーフシチュー、ビーフサンド、クリームのタルト (2025〜2026年の口コミ)。',
    notes: '[カフェバー・四条烏丸] 烏丸駅すぐの地下のカフェ。五条のパティスリー Prima で毎朝焼くタルト (モンブラン、りんごのシブースト、季節の果物) に、990〜1,100円のプレートのランチ、ビーフシチュー、ステーキサンド、ピザ、夜はカクテルも。ケーキセットは950〜990円ほど。平日昼は LINE のクーポンでドリンクバー。',
  });
}

save();
