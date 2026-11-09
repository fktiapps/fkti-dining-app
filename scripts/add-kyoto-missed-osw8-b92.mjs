// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 92 (2026-11-08).
//   + Ｈｉｉｒａｇｉ Hiiragi (creative yoshoku and wine up a spiral stair, Nijo-Yanaginobamba; rest)
//   + 渡辺屋 Watanabe Ya (Showa yakiniku and motsunabe corner, Oshikoji-Karasuma; rest)
//   + 招楽 Shoraku (couple-run udon shop, Nishinotoin-Bukkoji; rest)
//   + ツキトカゲ新町店 Tsukitokage Shinmachi (tempura and oden izakaya, Sanjo-Shinmachi; rest)
//   Rest list (mod 6 = 1) after batch 91, nearest-first — skipped:
//   - 加藤順漬物店 26013379: retail food shop (Greg 11-07 ruling) — takeaway-only pickle shop; no sourced founding date or
//     family succession, no sourced GF or vegan options.
//   - 三井ガーデンホテル 京都四条 26021521: big-chain hotel (Greg 11-08) — Mitsui Garden Hotels.
//   Held for next batch (fetched): 天ぷら 富美 26040613, 左阿彌 26001343.
//   Brand check: queue-status.jsonl, than.co.jp/brands and the WILL brands checked — none matches. Hiiragi is unrelated to
//   柊家 (kyoto_hiiragiya_ryokan) and ひいらぎ亭 (kyoto_hiiragi_tei). ツキトカゲ has two shops, the Tomikoji yakitori main shop
//   and this one (tsukitokage.com), neither in data. None of the four is in data (main 58030ba4, hidden records included).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-92');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260302/26013379/', 'retail food shop (Greg 11-07 ruling): takeaway-only pickle shop; no sourced founding date or family succession, no sourced GF or vegan options');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26021521/', 'big-chain hotel (Greg 11-08): Mitsui Garden Hotel Kyoto Shijo');

// ================================================================ Ｈｉｉｒａｇｉ Hiiragi
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26042743/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:30'], ['17:30', '22:00']);
  put({
    id: 'kyoto_hiiragi_nijo', name: 'Ｈｉｉｒａｇｉ (Hiiragi)', category: 'OMNI',
    lat: 35.01368981786509, lng: 135.7631859304478, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF for most dishes: cream croquettes, beef cutlet, omurice with demi-glace and fried ayu involve wheat (2025–2026 reviews). Carpaccio and grilled pork may suit — ask.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat, seafood and egg dishes (2025–2026 reviews).',
    hours_raw: 'Monday–Saturday 12:00–14:30 (last order 14:00) and 17:30–22:00 (last order 21:30); closed Sunday (Tabelog). Reservations accepted (Tabelog). The chef cooks alone, so allow time (November 2025). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), IC cards, iD, QUICPay and QR (PayPay, d Barai, au PAY, Alipay) (Tabelog). 20 seats: 8 at the counter, 12 at tables; non-smoking; school-age children welcome; solo diners welcome (Tabelog; January 2026). SD Building 2F, up a narrow spiral staircase; 8 min walk from Karasuma-Oike Stn (Tabelog; November 2025). Opened 17 February 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nijo-Yanaginobamba, Goshominami',
    cuisine: 'Creative Western dishes of seasonal ingredients, with wine and shochu, in a bright room up a spiral stair (Tabelog; 2025–2026 reviews) · lunch of four choices, e.g. beef-tendon demi-glace omurice cut open at the table ¥1,800 with salad (November 2025) · evening: generous assorted appetisers (Spanish omelette with shirasu, roast Sasuke pork ham salad), Seiko crab cream croquettes, grilled Sasuke pork, beef cutlet, squid-ink risotto, sanma carpaccio, fried ayu with a coriander sauce, prosciutto (September 2025–October 2026) · organic wine (September 2025) · lunch about ¥2,000, dinner about ¥6,000–8,000 (Tabelog)',
    website: null, gmaps: gm('Hiiragi 京都 二条 洋食'), menu_url: TB + 'dtlmenu/',
    notes: '[Yoshoku and wine · Nijo-Yanaginobamba] Up a spiral stair to a bright, airy room where a solo chef turns out creative yoshoku — crab cream croquettes, Sasuke pork, beef cutlet, a fluffy demi-glace omurice at lunch — with organic wine. Solo-friendly counter. Closed Sunday.',
    chef_bio: { chef_name: 'Inoue', roles: ['Owner-chef'], origin: null,
      background: 'Per Tabelog and reviewers: a Western-style restaurant opened 17 February 2025 on the second floor of the SD Building, where the chef — named Inoue by a September 2026 regular — runs the kitchen alone (November 2025), cooking seasonal ingredients with care.',
      philosophy: 'Creative Western dishes of seasonal ingredients, carefully prepared (Tabelog).', specialty: 'Crab cream croquettes; omurice.',
      anecdotes: [
        { text: 'A September 2026 regular, back for a girls’ night, was won over again by Chef Inoue’s generous appetiser platter and Seiko crab cream croquettes.', source: R + 'B507859030/' },
        { text: 'A November 2025 lunch guest read a book while the solo chef prepared a beef-tendon demi-glace omurice.', source: R + 'B520013361/' },
        { text: 'A February 2026 solo traveller chose it over a wine bar the night before a sushi booking.', source: R + 'B523791230/' },
      ],
      japanese_sources_summary: '食べログ: バル・洋食・肉料理、中京区二条通柳番場西入観音町85-1 SDビル 2F、烏丸御池駅から徒歩8分、月〜土 12:00〜14:30 (L.O.14:00)、17:30〜22:00 (L.O.21:30)、日曜休み、予約可、カード (VISA・Master・JCB・AMEX・Diners・銀聯)・交通系IC・iD・QUICPay・QR (PayPay・d払い・au PAY・Alipay) 可、20席 (カウンター8、テーブル12)、禁煙、小学生以上可、2025年2月17日開店、紹介文 (英訳): らせん階段を上った大人の隠れ家、旬の食材の創作洋食。口コミ (2025年9月〜2026年10月、英語): シェフの Inoue さん、一人で調理、昼は4種 (牛すじのデミグラスのオムライス1,800円、サラダ付き)、前菜の盛り合わせ (しらすと新玉ねぎのスペイン風オムレツ、Sasuke 豚の自家製ローストハムのサラダ)、せいこがにのクリームコロッケ、Sasuke 豚のグリル、ビーフカツ、イカスミのリゾット、さんまのカルパッチョ、鮎のフライとパクチーのソース、生ハム、オーガニックのワイン。',
      confidence: 'medium', sources: [TB, R + 'B507859030/', R + 'B513622729/', R + 'B517352410/', R + 'B519628756/', R + 'B520013361/', R + 'B520921146/', R + 'B523791230/', R + 'B529542278/', R + 'B530641154/', R + 'B538166428/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Spiral stairs; solo chef — allow time; cards and QR.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区二条通柳番場西入観音町85-1 ＳＤビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.013690, 135.763186); cross-checked: GSI 京都府京都市中京区観音町85番地 (lot) 27 m; nearest existing record 6.9 m (kyoto_neo_pasta_yamauchi, same address); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520013361/'],
    price_note: 'Price from a November 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Beef-tendon demi-glace omurice with salad (lunch)', '¥1,800', 'Lunch', 'no', 'no', 'November 2025.', 'omurice'),
      it('', '', 'Seiko crab cream croquettes', '', 'Mains', 'no', 'no', 'September 2026; seasonal.', 'croquette'),
    ] }, {
    cuisine: 'らせん階段の上の明るい店で、旬の食材の創作洋食にワインや焼酎 (食べログ、2025〜2026年の口コミ)・昼は4種、目の前で切る牛すじのデミグラスのオムライス1,800円 (サラダ付き) (2025年11月)・夜はたっぷりの前菜の盛り合わせ (しらすと新玉ねぎのスペイン風オムレツ、Sasuke 豚のローストハムのサラダ)、せいこがにのクリームコロッケ、Sasuke 豚のグリル、ビーフカツ、イカスミのリゾット、さんまのカルパッチョ、パクチーのソースの鮎のフライ、生ハム (2025年9月〜2026年10月)・オーガニックのワイン (2025年9月)・昼2,000円ほど、夜6,000〜8,000円ほど (食べログ)',
    neighborhood: '二条柳馬場、御所南',
    gf_detail: 'ほとんどグルテンフリー不可。クリームコロッケ、ビーフカツ、デミグラスのオムライス、鮎のフライは小麦 (2025〜2026年の口コミ)。カルパッチョや豚のグリルは合う可能性、要確認。',
    vegan_detail: 'ヴィーガン不可。肉、魚介、卵の料理 (2025〜2026年の口コミ)。',
    notes: '[洋食とワイン・二条柳馬場] らせん階段の上の明るく広い店で、シェフが一人で作る創作洋食 (かにクリームコロッケ、Sasuke 豚、ビーフカツ、昼はふわふわのデミグラスのオムライス) にオーガニックのワイン。一人でもカウンターで。日曜休み。',
  });
}

// ================================================================ 渡辺屋 Watanabe Ya
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26003755/'; const R = TB + 'dtlrvwlst/';
  const W = day(['18:00', '24:00']); const S = day(['17:30', '23:00']);
  put({
    id: 'kyoto_watanabeya_oshikoji', name: '渡辺屋 (Watanabe Ya)', category: 'OMNI',
    lat: 35.01234649954995, lng: 135.76039085954628, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Plain-grilled offal may suit, but sauces and the motsunabe broth likely use soy, and ramen is wheat (2018–2026 reviews). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: yakiniku and beef-offal hot pot (2018–2026 reviews).',
    hours_raw: 'Weekdays 18:00–24:00; Sunday and holidays 17:30–23:00; closed the 1st and 3rd Tuesday; hours may change (Tabelog). Saturday is not stated and Tuesday is closed two weeks a month, so both are left out of the hours. Reservations accepted (Tabelog). Cash only (Tabelog). 12 seats per Tabelog (a May 2025 reviewer counted three tables of four and two of two); smoky, Showa-era room (Tabelog; November 2018). On a corner with a red lantern, 3 min walk from Karasuma-Oike Stn (May 2025).',
    hours: { 0: W, 2: W, 3: W, 4: W, 6: S }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Oshikoji-Karasuma',
    cuisine: 'Small, retro yakiniku and motsunabe house (2017–2026 reviews) · grilled horumon and beef; raw senmai (April 2018) · tecchan-nabe beef-offal hot pot with tofu, finished with ramen and zosui (April 2018–August 2026) · about ¥4,000–6,000 (Tabelog; 2024–2025 reviews)',
    website: null, gmaps: gm('渡辺屋 焼肉 押小路 烏丸'), menu_url: null,
    notes: '[Yakiniku and motsunabe · Oshikoji-Karasuma, cash only] A tiny, smoky Showa-style corner under a red lantern: grill some horumon, then move on to the house motsunabe, finishing with ramen and zosui in the broth. Fills up fast. Cash only.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per reviewers: a long-running, compact yakiniku shop on an Oshikoji corner near Karasuma-Oike, with a nostalgic Showa feel and a motsunabe many prefer to the grill (2017–2026 reviews).',
      philosophy: null, specialty: 'Motsunabe (tecchan-nabe).',
      anecdotes: [
        { text: 'An April 2018 first customer of the night started the tecchan-nabe for two and snacked on raw senmai while it heated.', source: R + 'B270153966/' },
        { text: 'A May 2025 diner who counted 16 seats said it really does fill up, and preferred the motsunabe to the grilled meat.', source: R + 'B505859845/' },
        { text: 'An August 2026 first-timer ended the motsunabe with both ramen and zosui.', source: R + 'B533398764/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉・ホルモン・鍋、中京区押小路通烏丸東入西押小路町109-2、平日 18:00〜24:00、日・祝日 17:30〜23:00、第1・第3火曜休み、予約可、カード不可、12席、子ども可。口コミ (2017年6月〜2026年8月、英語): 角の赤ちょうちん、昭和レトロで煙もくもく、ホルモンと焼肉、生センマイ、てっちゃん鍋 (もつ鍋) と豆腐、しめのラーメンと雑炊、4人掛け3卓と2人掛け2卓で16人 (2025年5月)、すぐ満席。',
      confidence: 'low', sources: [TB, R + 'B270153966/', R + 'B410548741/', R + 'B485833421/', R + 'B497008314/', R + 'B505859845/', R + 'B533398764/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; small and smoky; book.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区押小路通烏丸東入西押小路町109-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through August 2026.' },
    pin_source: `Tabelog ${TB} (35.012346, 135.760391); cross-checked: GSI 京都府京都市中京区西押小路町109番地 (lot) 4 m; nearest existing record 14.8 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533398764/'],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Motsunabe (tecchan-nabe), ramen or zosui to finish', '', 'Hot pot', 'ask', 'no', 'April 2018; August 2026.', 'motsunabe'),
    ] }, {
    cuisine: '小さなレトロの焼肉ともつ鍋の店 (2017〜2026年の口コミ)・ホルモンと牛肉の焼肉、生センマイ (2018年4月)・豆腐の入るてっちゃん鍋 (もつ鍋)、しめはラーメンと雑炊 (2018年4月〜2026年8月)・4,000〜6,000円ほど (食べログ、2024〜2025年の口コミ)',
    neighborhood: '押小路烏丸',
    gf_detail: '要確認。素焼きのホルモンは合う可能性があるが、たれやもつ鍋のつゆは醤油、ラーメンは小麦 (2018〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。焼肉ともつ鍋 (2018〜2026年の口コミ)。',
    notes: '[焼肉ともつ鍋・押小路烏丸、現金のみ] 赤ちょうちんの角の小さな昭和の焼肉店。ホルモンを焼いたら名物のもつ鍋へ、しめはラーメンと雑炊。すぐ満席に。現金のみ。',
  });
}

// ================================================================ 招楽 Shoraku
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26019019/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '14:30']);
  put({
    id: 'kyoto_shoraku_nishinotoin', name: '招楽 (Shoraku)', category: 'OMNI',
    lat: 35.00136763706504, lng: 135.7553088791671, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: wheat udon in dashi, tempura, curry udon (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi broth, meat udon, oyakodon and tempura (2025–2026 reviews).',
    hours_raw: 'Monday and Wednesday–Saturday 11:00–14:30; closed Tuesday and Sunday; hours may change (Tabelog). Lunch only. No reservations; queues, often of overseas visitors, of 20–30 minutes and shared tables (Tabelog; March–August 2026). Cards (AMEX per Tabelog); no e-money or QR. 22 seats at six tables; non-smoking (Tabelog). Run by a couple (March 2026). On Nishinotoin-dori just north of Bukkoji; 7 min walk from Shijo Stn.',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishinotoin-Bukkoji',
    cuisine: 'Neighbourhood udon shop known for its handmade noodles and gentle dashi (2025–2026 reviews) · niku udon with kayaku rice; meat curry udon with fried tofu; nabeyaki udon with plump shrimp; bukkake udon; tempura cold bukkake udon set ¥1,600 (December 2025–August 2026) · mini oyakodon or tamago-don sets (January–May 2026) · about ¥1,000–2,000 (Tabelog)',
    website: null, gmaps: gm('招楽 うどん 西洞院 仏光寺'), menu_url: null,
    notes: '[Udon · Nishinotoin-Bukkoji, lunch only] A small couple-run udon shop with a gentle Kyoto dashi and chewy handmade noodles — niku udon with kayaku rice, nabeyaki, curry udon — and warm, attentive service. Expect a queue. Closed Tuesday and Sunday.',
    chef_bio: { chef_name: null, roles: ['Owners (a couple, unnamed)'], origin: null,
      background: 'Per reviewers: a long-loved lunchtime udon shop run by a couple, praised for warm hospitality and good ingredients, now drawing queues of visitors from abroad (March–August 2026).',
      philosophy: null, specialty: 'Niku udon with kayaku rice.',
      anecdotes: [
        { text: 'A December 2025 retiree travelled back after three years for the niku udon and kayaku rice, calling it the best in Kansai.', source: R + 'B519020357/' },
        { text: 'A March 2026 last-meal-in-Kyoto waited nearly 30 minutes in a queue of overseas visitors and wondered why.', source: R + 'B525388971/' },
        { text: 'A May 2026 regular found the old kara-age and ginger-pork sets gone, and had a mini oyakodon set instead.', source: R + 'B316995216/' },
      ],
      japanese_sources_summary: '食べログ: うどん・そば・丼、下京区西洞院通仏光寺上る綾西洞院町758-2、四条駅から徒歩7分、月・水〜土 11:00〜14:30、火・日休み、予約不可、カード (AMEX) 可、電子マネー・QR 不可、22席 (2人掛け2卓、4人掛け3卓、6人掛け1卓)、禁煙。口コミ (2025年12月〜2026年8月、英語): 夫婦で営む、手打ちうどん、やさしいだし、肉うどんとかやくご飯、肉カレーうどん (お揚げ入り)、鍋焼きうどん、ぶっかけうどん、天ぷらの冷やしぶっかけセット1,600円、ミニ親子丼やミニ玉子丼のセット、海外の客の行列、相席、温かい接客。',
      confidence: 'medium', sources: [TB, R + 'B316995216/', R + 'B519020357/', R + 'B521228567/', R + 'B522866797/', R + 'B524156390/', R + 'B525181633/', R + 'B525388971/', R + 'B526513544/', R + 'B530660597/', R + 'B533946648/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Queue at lunch; shared tables; lunch only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区西洞院通仏光寺上る綾西洞院町758-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through August 2026.' },
    pin_source: `Tabelog ${TB} (35.001368, 135.755309); cross-checked: GSI 京都府京都市下京区綾西洞院町758番地 (lot) 54 m; nearest existing record 71.6 m (kyoto_oomura_nishinotoin); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530660597/'],
    price_note: 'Price from a June 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Tempura cold bukkake udon set', '¥1,600', 'Udon', 'no', 'no', 'June 2026.', 'bukkake'),
      it('', '', 'Niku udon with kayaku rice', '', 'Udon', 'no', 'no', 'December 2025.', 'nikuudon'),
    ] }, {
    cuisine: '手打ちの麺とやさしいだしで知られる町のうどん屋 (2025〜2026年の口コミ)・肉うどんとかやくご飯、お揚げの入る肉カレーうどん、大きなえびの鍋焼きうどん、ぶっかけうどん、天ぷらの冷やしぶっかけセット1,600円 (2025年12月〜2026年8月)・ミニ親子丼やミニ玉子丼のセット (2026年1〜5月)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '西洞院仏光寺',
    gf_detail: 'グルテンフリー不可。だしの小麦のうどん、天ぷら、カレーうどん (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。だしのつゆ、肉うどん、親子丼、天ぷら (2025〜2026年の口コミ)。',
    notes: '[うどん・西洞院仏光寺、昼のみ] 夫婦で営む小さなうどん屋。やさしい京のだしにもちもちの手打ちの麺 (肉うどんとかやくご飯、鍋焼き、カレーうどん)、温かいもてなし。行列を覚悟で。火・日休み。',
  });
}

// ================================================================ ツキトカゲ新町店 Tsukitokage Shinmachi
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26015041/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://tsukitokage.com/shinmachi_top.html';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_tsukitokage_shinmachi', name: 'ツキトカゲ新町店 (Tsukitokage Shinmachi)', category: 'OMNI',
    lat: 35.008989577866025, lng: 135.75674149040483, cuisine_type: 'tempura',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: a tempura izakaya of wheat batter; oden and fish cakes in soy dashi (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood and pork tempura, fish and dashi oden; vegetable tempura shares the fryer (2024–2026 reviews).',
    hours_raw: 'Tuesday–Sunday and holidays 17:00–23:00 (last orders food 22:00, drinks 22:30); closed Monday (Tabelog). Reservations accepted (Tabelog). Cards (JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 49 seats: a 1F counter facing the fryer, tatami and private rooms for 4–8 (Tabelog; February–September 2026). Smoking allowed (Tabelog; April 2025). Take-out (Tabelog). Shinmachi-dori just north of Sanjo; 5 min walk from Karasuma-Oike Stn.',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sanjo-Shinmachi',
    cuisine: 'Tempura and oden izakaya — the Shinmachi shop of ツキトカゲ, whose main shop is a charcoal yakitori bar (tsukitokage.com; 2024–2026 reviews) · tempura fried to order by the piece: shrimp, eggplant, sweet potato, pork fillet, Mongolian squid, chestnut, stuffed lotus root, new onion, red pickled ginger (December 2024–September 2026) · signature fried-tofu starter with yuba-like layers; oden of daikon, egg and atsuage; homemade satsuma-age; nodoguro with salt vinegar; dashimaki; fried rice (January 2025–September 2026) · about ten sakes such as Rokuho (January 2025) · about ¥3,000–5,000 (Tabelog; 2025–2026 reviews)',
    website: WEB, gmaps: gm('ツキトカゲ 新町店'), menu_url: WEB,
    notes: '[Tempura and oden · Sanjo-Shinmachi] A friendly, good-value izakaya where tempura is fried by the piece at the counter — shrimp, lotus root, chestnut — alongside oden, homemade satsuma-age and a signature fried tofu, with plenty of sake. Smoking allowed. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Owner and fry cooks (unnamed)'], origin: null,
      background: 'Per the official site and reviewers: the tempura izakaya of ツキトカゲ, a two-shop name whose main shop serves charcoal yakitori near Tomikoji-Nijo (tsukitokage.com); a friendly owner and a counter where guests watch tempura being fried (October 2025; September 2026).',
      philosophy: null, specialty: 'Tempura by the piece; fried-tofu starter.',
      anecdotes: [
        { text: 'A December 2024 diner who loves red-ginger tempura found it here, with eggplant, for just ¥30.', source: R + 'B497439663/' },
        { text: 'A January 2025 visitor chose it over a nearby oden shop on a cold Friday, drawn by the charming roadside sign.', source: R + 'B500367029/' },
        { text: 'A September 2026 regular brings family and friends to sit at the 1F counter and watch the tempura fried.', source: R + 'B535489551/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・天ぷら、中京区町頭町108 (新町通三条上ル)、烏丸御池駅から徒歩5分、火〜日・祝日 17:00〜23:00 (L.O.料理22:00、飲み物22:30)、月曜休み、予約可、カード (JCB・AMEX・Diners)・PayPay 可、電子マネー不可、49席、4〜8名の個室、座敷、喫煙可、テイクアウト、公式サイトあり。公式サイト: 「炭火焼鳥 ツキトカゲ本店」(二条通富小路東入晴明町672-2) と「天ぷら呑み屋 ツキトカゲ新町店」の2店。口コミ (2024年12月〜2026年9月、英語): 1本ずつ揚げる天ぷら (えび、なす、さつまいも、豚ヒレ、モンゴウイカ、栗、れんこんのはさみ揚げ、新玉ねぎ、紅しょうが)、名物の揚げ豆腐、おでん (大根、卵、厚揚げ)、自家製さつま揚げ、のどぐろ、だし巻き、焼き飯、日本酒10種ほど、気さくな店主、1階のカウンター。',
      confidence: 'medium', sources: [TB, WEB, R + 'B497439663/', R + 'B500367029/', R + 'B502168523/', R + 'B505249635/', R + 'B506045122/', R + 'B517353760/', R + 'B523794787/', R + 'B535042294/', R + 'B535489551/', R + 'B535489774/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter by the fryer; smoking allowed; cards and PayPay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区新町通三条上ル町頭町108',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.008990, 135.756741); cross-checked: GSI 京都府京都市中京区町頭町108番地 (lot) 31 m; nearest existing record 9.5 m (kyoto_souden_temari); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B497439663/'],
    price_note: 'Price from a December 2024 review.', last_checked: TODAY, items: [
      it('', '', 'Eggplant and red-ginger tempura', '¥30', 'Tempura', 'no', 'ask', 'December 2024.', 'beni'),
      it('', '', 'Fried-tofu starter', '', 'Small dishes', 'ask', 'ask', 'September 2026; the signature dish.', 'agedofu'),
    ] }, {
    cuisine: '天ぷらとおでんの居酒屋、炭火焼鳥のツキトカゲ本店の新町の店 (公式サイト、2024〜2026年の口コミ)・1本ずつ揚げる天ぷら: えび、なす、さつまいも、豚ヒレ、モンゴウイカ、栗、れんこんのはさみ揚げ、新玉ねぎ、紅しょうが (2024年12月〜2026年9月)・ゆばのような層の名物の揚げ豆腐、大根・卵・厚揚げのおでん、自家製さつま揚げ、のどぐろの塩酢、だし巻き、焼き飯 (2025年1月〜2026年9月)・Rokuho など日本酒10種ほど (2025年1月)・3,000〜5,000円ほど (食べログ、2025〜2026年の口コミ)',
    neighborhood: '三条新町',
    gf_detail: 'グルテンフリー不可。小麦の衣の天ぷらの居酒屋。おでんや練り物は醤油のだし (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚介や豚の天ぷら、魚のだしのおでん。野菜の天ぷらも同じ油 (2024〜2026年の口コミ)。',
    notes: '[天ぷらとおでん・三条新町] カウンターで1本ずつ揚げる天ぷら (えび、れんこん、栗) に、おでん、自家製さつま揚げ、名物の揚げ豆腐、日本酒もたっぷり。気さくで手ごろ。喫煙可。月曜休み。',
  });
}

save();
