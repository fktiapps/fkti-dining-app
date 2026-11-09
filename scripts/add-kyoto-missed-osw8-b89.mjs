// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 89 (2026-11-08).
//   + ASTARTE (coffee and pastry café from 7:30, Sanjo-Muromachi; rest)
//   + 茄子おやじ 花レ Nasuoyaji HanaRe (Kyoto second shop of Shimokitazawa's Nasu Oyaji curry; rest)
//   + 創作割烹 おおたに Sosaku Kappou Ootani (ten-seat creative kappo, Oshikoji-Takakura; rest)
//   + バー タウザー Bar Towser (eight-seat whisky bar, Kawabata-Nijo; rest)
//   + 烏丸五条 じげん Karasuma Gojo Jigen (day-drinking kappo izakaya moved from Shijo-Omiya; rest)
//   Rest list (mod 6 = 1) after batch 88, nearest-first — skipped:
//   - バー ケラー 26026765: members-only bar — non-members only with a member (Tabelog remark). Flagged: skipped by analogy
//     with the guests-only-inn ruling; draftable if the coordinator prefers.
//   - パティスリー・サダハル・アオキ・パリ 烏丸御池店 26037373: chain — Paris patissier with Japanese shops in Marunouchi,
//     Tokyo Midtown, Lazona Kawasaki, Karuizawa, Kisarazu and Kyoto (search results, 2026-11-08); also a retail cake shop.
//   - 西村鮮魚店 26006401: no review dated 2025–26 (latest October 2024).
//   - Lili Ciel 26044945: retail food shop (Greg 11-07 ruling) — bakery with a small eat-in; not historic (opened 2026 on the
//     site of Liberté) and no sourced GF or vegan options.
//   - 三井ガーデンホテル 京都新町 別邸 26024737: big-chain hotel (Greg 11-08) — Mitsui Garden Hotels.
//   Brand check: queue-status.jsonl, than.co.jp/brands and the 株式会社WILL brands (かに銀, トリサカナ, The Churrasco, 鮨 五天五)
//   checked for every brand — none matches. 茄子おやじ: the Shimokitazawa original plus this shop (Tabelog), neither in data.
//   じげん is run by 株式会社じげん (NTA invoice register). None of the five is in data (main 8dafb07b, hidden records included).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-89');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260202/26026765/', 'members-only bar: non-members may enter only with a member (Tabelog remark) — skipped by analogy with the guests-only-inn ruling; flagged for the coordinator');
skip('https://tabelog.com/en/kyoto/A2601/A260202/26037373/', 'chain: パティスリー・サダハル・アオキ・パリ — shops in Marunouchi, Tokyo Midtown, Lazona Kawasaki, Karuizawa, Kisarazu and Kyoto; also a retail cake shop');
skip('https://tabelog.com/en/kyoto/A2601/A260202/26006401/', 'no review dated 2025–26 (latest October 2024)');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26044945/', 'retail food shop (Greg 11-07 ruling): bakery with a small eat-in, opened 2026 on the site of Liberté; not historic, no sourced GF or vegan options');
skip('https://tabelog.com/en/kyoto/A2601/A260202/26024737/', 'big-chain hotel (Greg 11-08): Mitsui Garden Hotel Kyoto Shinmachi Bettei');

// ================================================================ ASTARTE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26041549/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://www.kyoto-astarte.com/';
  const H = day(['07:30', '15:00']);
  put({
    id: 'kyoto_astarte_karasuma', name: 'ASTARTE (Coffee & Pastry)', category: 'OMNI',
    lat: 35.008438827522454, lng: 135.75841925876387, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: a bakery café of muffins, scones, tarts, banana bread and toast; no gluten-free bakes mentioned (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee and tea are plant-based, but bakes, toasts and lattes use butter, egg, cheese or milk; no plant milk mentioned (2026 reviews).',
    hours_raw: 'Tuesday–Sunday 7:30–15:00; closed Monday; hours may change (Tabelog). No reservations (Tabelog). Cards, e-money and QR (Tabelog). Counter seats and tables at the back; non-smoking; take-out (Tabelog; June–July 2026). A glass-fronted café behind a small car park, just east of the Sanjo-Muromachi crossing (July 2026). 5 min walk from Karasuma-Oike Stn.',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sanjo-Muromachi, near Karasuma-Oike',
    cuisine: 'Coffee and pastry café open for breakfast (2026 reviews) · ham, egg and cheese toast ¥600, butter toast ¥450 — add a muffin for ¥100; ham and cheese croissant sandwich ¥450 (March–October 2026) · muffins ¥500 such as lemon white chocolate, caramel walnut and orange peel; chocolate scone ¥500; fig and maple, American cherry and pineapple tarts; banana bread (March–October 2026) · Americano, cappuccino, latte, matcha latte ¥700, white peach Earl Grey (June–October 2026) · about ¥1,000–2,000 (Tabelog)',
    website: WEB, gmaps: gm('ASTARTE 京都 御倉町'), menu_url: null,
    notes: '[Café · Sanjo-Muromachi, from 7:30] A sleek glass-and-concrete café for an early breakfast: thick ham-and-egg toast with a muffin for ¥100 more, a counter of colourful muffins, seasonal fruit tarts and good coffee or peach Earl Grey. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Baristas and bakers (unnamed)'], origin: null,
      background: 'Per reviewers: ASTARTE COFFEE & PASTRY, a stylish café near Karasuma-Oike that fills up soon after its 7:30 opening, known for muffins and fruit tarts and for kind, attentive staff (2026 reviews).',
      philosophy: null, specialty: 'Muffins; fruit tarts.',
      anecdotes: [
        { text: 'A September 2026 regular, who counts it among favourite Kyoto cafés, found the figs on the fig and maple tart unusually juicy.', source: R + 'B522750951/' },
        { text: 'An October 2026 sightseer hunting for coffee at 7:30 a.m. puzzled over a muffin costing ¥500 alone but ¥100 with toast.', source: R + 'B537635318/' },
        { text: 'A March 2026 visitor found it busy straight after the early opening, and paired thick toast with a caramel walnut muffin.', source: R + 'B526777747/' },
      ],
      japanese_sources_summary: '食べログ: カフェ、中京区御倉町68-1 プリオール烏丸三条 1F、烏丸御池駅から徒歩5分ほど、火〜日 7:30〜15:00、月曜休み、予約不可、カード・電子マネー・QR 可、禁煙、公式サイトあり。口コミ (2026年3〜10月、英語): ASTARTE COFFEE & PASTRY、朝7時半から、ハムエッグチーズトースト600円、バタートースト450円 (マフィンを100円で追加)、ハムチーズのクロワッサンサンド450円、マフィン500円 (レモンホワイトチョコ、キャラメルくるみ、オレンジピール)、チョコスコーン500円、いちじくとメープル・アメリカンチェリー・パイナップルのタルト、バナナブレッド、抹茶ラテ700円、白桃のアールグレイ、ガラス張りの外観とコンクリートのカウンター、親切なスタッフ。',
      confidence: 'medium', sources: [TB, R + 'B522750951/', R + 'B526777747/', R + 'B531114011/', R + 'B533015866/', R + 'B534437482/', R + 'B534920120/', R + 'B535317134/', R + 'B536898940/', R + 'B537635318/', R + 'B538535346/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter; cards and QR; take-out.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区御倉町68-1 プリオール烏丸三条 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.008439, 135.758419); cross-checked: GSI 京都府京都市中京区御倉町68番地 (lot) 33 m; nearest existing record 16.6 m (kyoto_comida_latina_costa); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B526777747/', R + 'B537635318/', R + 'B538535346/'],
    price_note: 'Prices from March and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ham, egg and cheese toast', '¥600', 'Breakfast', 'no', 'no', 'March 2026; muffin +¥100.', 'toast'),
      it('', '', 'Muffin', '¥500', 'Bakes', 'no', 'no', 'October 2026.', 'muffin'),
      it('', '', 'Matcha latte', '¥700', 'Drinks', 'ask', 'no', 'March 2026.', 'matcha'),
    ] }, {
    cuisine: '朝から開くコーヒーと焼き菓子のカフェ (2026年の口コミ)・ハムエッグチーズトースト600円、バタートースト450円 (マフィンを100円で追加)、ハムチーズのクロワッサンサンド450円 (2026年3〜10月)・レモンホワイトチョコ、キャラメルくるみ、オレンジピールなどのマフィン500円、チョコスコーン500円、いちじくとメープル・アメリカンチェリー・パイナップルのタルト、バナナブレッド (2026年3〜10月)・アメリカーノ、カプチーノ、ラテ、抹茶ラテ700円、白桃のアールグレイ (2026年6〜10月)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '三条室町、烏丸御池の近く',
    gf_detail: 'グルテンフリー不可。マフィン、スコーン、タルト、バナナブレッド、トーストの焼き菓子のカフェ。グルテンフリーの記載はない (2026年の口コミ)。',
    vegan_detail: '要確認。ブラックコーヒーと紅茶は植物性だが、焼き菓子、トースト、ラテはバター、卵、チーズ、牛乳。植物性ミルクの記載はない (2026年の口コミ)。',
    notes: '[カフェ・三条室町、7時半から] ガラスとコンクリートのしゃれたカフェで朝ごはん。厚いハムエッグトーストに100円でマフィン、色とりどりのマフィン、季節の果物のタルト、おいしいコーヒーや白桃のアールグレイ。月曜休み。',
  });
}

// ================================================================ 茄子おやじ 花レ Nasuoyaji HanaRe
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26041063/'; const R = TB + 'dtlrvwlst/';
  const H = day(['08:00', '22:30']);
  put({
    id: 'kyoto_nasuoyaji_hanare', name: '茄子おやじ 花レ (Nasuoyaji HanaRe)', category: 'OMNI',
    lat: 35.008079158427364, lng: 135.75794206759446, cuisine_type: 'curry',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: European-style curry roux and katsu curry; no gluten-free roux mentioned (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the curry base is made with minced pork, with beef, pork and chicken toppings (2026 reviews).',
    hours_raw: 'Daily including holidays 8:00–22:30 (last order 22:00) (Tabelog). Reservations accepted (Tabelog). Cards, e-money and QR (Tabelog). 22 seats at the counter and tables; non-smoking; wheelchair accessible; children welcome; bicycle parking (Tabelog). Queues at peak times (September 2026). A stylish room lined with records, in a former bistro; 5 min walk from Karasuma-Oike Stn (Tabelog; September 2026). Opened 10 April 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sanjo-Muromachi, near Karasuma-Oike',
    cuisine: 'European-style curry from over 20 spices, onions sautéed for 10 hours and fruit — “curry you won’t tire of every day” — the first second shop of Nasu Oyaji, Shimokitazawa’s oldest curry house (Tabelog) · special curry of beef, pork, chicken and vegetables; tender braised beef curry; katsu curry; a minced-pork base with add-on toppings (September–October 2026) · coffee and a dessert set; breakfast from 8:00 (Tabelog; September 2026) · about ¥1,000–3,000 (Tabelog)',
    website: null, gmaps: gm('茄子おやじ 花レ'), menu_url: TB + 'dtlmenu/',
    notes: '[Curry · Sanjo-Muromachi, 8:00–22:30] The Kyoto offshoot of a veteran Shimokitazawa curry house: rich European-style curry of 20-plus spices and long-cooked onion, with tender beef or the all-in special, in a calm, record-lined room with coffee and desserts. Open daily, from breakfast to late.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog: Nasu Oyaji is the oldest curry shop in Shimokitazawa, Tokyo, and HanaRe, opened 10 April 2024, is its first second shop, serving European-style curry arranged its own way, with selected music and coffee. Reviewers in 2026 describe a stylish room in a former bistro, lined with records.',
      philosophy: 'Curry you won’t tire of even if you eat it every day (Tabelog).', specialty: 'Special curry; beef curry.',
      anecdotes: [
        { text: 'A September 2026 Silver Week diner got the last counter seat at 1:30 p.m. for a beef curry simmered until tender, as a queue formed behind.', source: R + 'B483370830/' },
        { text: 'A September 2026 regular passing on another shop’s daily special warned that the thin-looking plate is more filling than it seems.', source: R + 'B493458862/' },
        { text: 'A September 2026 diner who remembered the space as a bistro noticed the counter seats had barely changed.', source: R + 'B537597778/' },
      ],
      japanese_sources_summary: '食べログ: カレー、中京区室町通三条下る烏帽子屋町485、烏丸御池駅から徒歩5分 (駐輪場あり)、毎日 (祝日も) 8:00〜22:30 (L.O.22:00)、予約可、カード・電子マネー・QR 可、22席、カウンター、禁煙、車いす可、子ども可、朝食あり、2024年4月10日開店、紹介文 (英訳): 下北沢で一番古いカレー店「茄子おやじ」の初の2号店、20種以上のスパイスと10時間炒めた玉ねぎと果物の欧風カレー、「毎日食べても飽きないカレー」、選んだ音楽とコーヒー。口コミ (2026年9〜10月、英語): 牛・豚・鶏・野菜のスペシャル、やわらかいビーフカレー、カツカレー、豚ひき肉のベース、デザートセット、レコードの並ぶおしゃれな店内、もとはビストロ。',
      confidence: 'medium', sources: [TB, R + 'B483370830/', R + 'B493458862/', R + 'B535365311/', R + 'B535387847/', R + 'B535425721/', R + 'B535527737/', R + 'B535945404/', R + 'B535968317/', R + 'B537597778/', R + 'B538422335/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter and tables; cards and QR; queues at lunch.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区室町通三条下る烏帽子屋町485',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.008079, 135.757942); cross-checked: GSI 京都府京都市中京区烏帽子屋町485番地 (lot) 18 m; nearest existing record 35.5 m (kyoto_matsusaka_gyu_whats_muromachi); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535387847/'],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Special curry (beef, pork, chicken, vegetables)', '', 'Curry', 'no', 'no', 'September 2026.', 'special'),
      it('', '', 'Beef curry', '', 'Curry', 'no', 'no', 'September 2026.', 'beef'),
    ] }, {
    cuisine: '下北沢で一番古いカレー店「茄子おやじ」の初の2号店、20種以上のスパイスと10時間炒めた玉ねぎと果物の欧風カレー、「毎日食べても飽きないカレー」(食べログ)・牛・豚・鶏・野菜のスペシャルカレー、やわらかいビーフカレー、カツカレー、豚ひき肉のベースにトッピング (2026年9〜10月)・コーヒーとデザートセット、朝8時から (食べログ、2026年9月)・1,000〜3,000円ほど (食べログ)',
    neighborhood: '三条室町、烏丸御池の近く',
    gf_detail: 'グルテンフリー不可。欧風カレーのルウとカツカレー。グルテンフリーのルウの記載はない (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。カレーのベースは豚ひき肉、牛・豚・鶏のトッピング (2026年の口コミ)。',
    notes: '[カレー・三条室町、8時〜22時半] 下北沢の老舗カレー店の京都の店。20種以上のスパイスとじっくり炒めた玉ねぎのコクのある欧風カレーに、やわらかい牛肉や全部のせのスペシャル。レコードの並ぶ落ち着いた店でコーヒーやデザートも。毎日、朝から夜まで。',
  });
}

// ================================================================ 創作割烹 おおたに Sosaku Kappou Ootani
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26036563/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['16:00', '23:00']); const WE = day(['12:00', '23:00']);
  put({
    id: 'kyoto_sosaku_kappou_ootani', name: '創作割烹 おおたに (Sosaku Kappou Ootani)', category: 'OMNI',
    lat: 35.01218175786582, lng: 135.7624622004331, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi with salt, grilled fish and crab may suit, but simmered dishes, dashimaki and sauces use soy (2022–2026 reviews). The chef cooks to order — ask. No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-led kappo with meat dishes and dashi (Tabelog; 2022–2026 reviews).',
    hours_raw: 'Monday–Friday 16:00–23:00 (last order 22:00); Saturday and Sunday 12:00–23:00; closing days not fixed, often Wednesday (Tabelog). Wednesday is left out of the hours. Reservations accepted; courses on booking, otherwise à la carte (Tabelog; July 2025). Cards (VISA, Master, JCB, AMEX, Diners) and QR (PayPay, d Barai, Rakuten Pay); no e-money (Tabelog). 10 seats at a small counter and table, plus a private room for 4; non-smoking (Tabelog; 2024 reviews). 6 min walk from Karasuma-Oike Stn. Opened 8 October 2021 (Tabelog).',
    hours: { 0: WD, 1: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Oshikoji-Takakura',
    cuisine: 'Casual creative kappo of seasonal fish, à la carte or by course, with dishes that suit sake and wine (2022–2026 reviews) · sashimi of tuna, squid with salt, sea urchin and striped jack; grilled gurnard and guchi; crab; hamo in summer (March 2024–August 2026) · egg-yolk-vinegar potato salad, dashimaki, bagna càuda, grilled aubergine, a tender meat dish (July 2024–July 2025) · about 30 sakes, many rare labels (March 2024; August 2026) · about ¥8,000–15,000 (Tabelog; 2025–2026 reviews)',
    website: null, gmaps: gm('創作割烹 おおたに 押小路'), menu_url: null,
    notes: '[Creative kappo · Oshikoji-Takakura] A homely ten-seat counter where a young owner-chef cooks seasonal fish with flair — salt-dressed squid, grilled gurnard, hamo — plus a famous potato salad, with some 30 sakes to match. Bib Gourmand per reviewers. Book; often closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)', 'Owner’s wife (front of house)'], origin: null,
      background: 'Per reviewers: opened 8 October 2021 (Tabelog) and listed as a Michelin Bib Gourmand in the 2023 guide (November 2022 review); a young chef who used to be a carpenter (August 2024) cooks and pours single-handed, with the chef’s wife welcoming guests at a cosy counter where regulars chat (July 2024; August 2025).',
      philosophy: null, specialty: 'Seasonal sashimi; potato salad with egg-yolk vinegar.',
      anecdotes: [
        { text: 'An August 2024 solo diner hunting for fish wandered in and later heard the owner had been a carpenter — and thanked the career change.', source: R + 'B489765334/' },
        { text: 'A March 2024 guest was steered to eat the squid with salt to bring out its sweetness, with fresh wasabi.', source: R + 'B480868881/' },
        { text: 'Five old school friends celebrated a promotion over sashimi, crab and grilled guchi in June 2026.', source: R + 'B530248975/' },
      ],
      japanese_sources_summary: '食べログ: 創作料理、中京区押小路高倉東入る竹屋町145、烏丸御池駅から徒歩6分ほど、月〜金 16:00〜23:00 (L.O.22:00)、土・日 12:00〜23:00、不定休 (水曜休みが多い)、予約可、カード (VISA・Master・JCB・AMEX・Diners)・QR (PayPay・d払い・楽天ペイ) 可、電子マネー不可、10席、4名の個室、禁煙、2021年10月8日開店。口コミ (2022年11月〜2026年8月、英語): 2023年のミシュランのビブグルマン、元大工の若い店主、夫婦で営む、カウンターで常連と会話、コースは予約で、ほかは一品料理、まぐろ・いか (塩で)・うに・しまあじの刺身、ほうぼうやぐちの焼き物、かに、鱧、卵黄酢のポテトサラダ、だし巻き、バーニャカウダ、焼きなす、肉料理、日本酒30種ほど、珍しい銘柄。',
      confidence: 'medium', sources: [TB, R + 'B457119944/', R + 'B460606920/', R + 'B480868881/', R + 'B488617385/', R + 'B489765334/', R + 'B490627090/', R + 'B510574752/', R + 'B525379343/', R + 'B530248975/', R + 'B534618829/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; book; cards and QR.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区押小路高倉東入る竹屋町145',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through August 2026.' },
    pin_source: `Tabelog ${TB} (35.012182, 135.762462); cross-checked: GSI 京都府京都市中京区竹屋町145番地 (lot) 31 m; nearest existing record 21.0 m (kyoto_oshikoji_okada); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B510574752/'],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Sashimi platter', '', 'Fish', 'ask', 'no', 'July 2025.', 'sashimi'),
      it('', '', 'Potato salad with egg-yolk vinegar', '', 'Small dishes', 'ask', 'no', 'July 2025.', 'potatosalad'),
    ] }, {
    cuisine: '旬の魚の気軽な創作割烹、一品料理かコースで、日本酒にもワインにも合う料理 (2022〜2026年の口コミ)・まぐろ、塩でいただくいか、うに、しまあじの刺身、ほうぼうやぐちの焼き物、かに、夏の鱧 (2024年3月〜2026年8月)・卵黄酢のポテトサラダ、だし巻き、バーニャカウダ、焼きなす、やわらかい肉料理 (2024年7月〜2025年7月)・珍しい銘柄の多い日本酒30種ほど (2024年3月、2026年8月)・8,000〜15,000円ほど (食べログ、2025〜2026年の口コミ)',
    neighborhood: '押小路高倉',
    gf_detail: '要確認。塩の刺身、焼き魚、かには合う可能性があるが、煮物、だし巻き、たれは醤油 (2022〜2026年の口コミ)。注文ごとに作る店なので相談を。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。魚が中心の割烹で、肉料理とだしも (食べログ、2022〜2026年の口コミ)。',
    notes: '[創作割烹・押小路高倉] 家庭的なカウンター10席で若い店主が旬の魚を腕よく (塩のいか、ほうぼうの焼き物、鱧)、名物のポテトサラダ、合わせる日本酒は30種ほど。口コミではビブグルマン。予約を、水曜休みが多い。',
  });
}

// ================================================================ バー タウザー Bar Towser
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26028655/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_bar_towser', name: 'バー タウザー (Bar Towser)', category: 'OMNI',
    lat: 35.013237177868426, lng: 135.77277105043652, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A whisky and cocktail bar; no food or gluten information in the sources (2020–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Whisky, champagne and cocktails; no food or vegan information in the sources (2020–2026 reviews).',
    hours_raw: 'Open until 2:00; closed Tuesday; hours may change (Tabelog). Tabelog gives no opening time, so no daily hours are listed — reviewers describe evening visits after work (July 2025). Reservations accepted; the bar can be booked whole for a group of 8 (Tabelog; November 2022). Cards (JCB, AMEX, Diners); no e-money (Tabelog). 8 counter seats; smoking allowed (Tabelog). From about ¥4,400 (July 2023). Nijo Building 1F, Kawabata-Nijo; opened 24 October 2016 (Tabelog).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawabata-Nijo',
    cuisine: 'Whisky-focused bar with a deep and unusual bottle list, including magnum bottlings, guided by the master’s recommendations (2020–2025 reviews) · highballs, cocktails, champagne; tastes of rarer whiskies offered (2022–2025 reviews) · careful glassware; classical and jazz playing (May 2023; May 2024) · about ¥4,000–6,000 (2023–2025 reviews)',
    website: null, gmaps: gm('バー タウザー 京都 二条'), menu_url: null,
    notes: '[Whisky bar · Kawabata-Nijo, late] A quiet eight-seat bar for whisky lovers: tell the master your taste and get thoughtful pours from a big, unusual selection, plus highballs and cocktails, with jazz in the background. Smoking allowed. Closed Tuesday.',
    chef_bio: { chef_name: 'Fujibayashi (master)', roles: ['Master / bartender'], origin: null,
      background: 'Per reviewers: run by a calm, kind master named Fujibayashi (October 2020), who came from K6 (May 2023); opened 24 October 2016 (Tabelog), known for whisky knowledge shared gently and for recommending pours to suit each guest (2023–2025).',
      philosophy: null, specialty: 'Whisky by recommendation.',
      anecdotes: [
        { text: 'An October 2020 visitor turned away from another bar ended up here with a Harper highball on a coaster with a black cat.', source: R + 'B432385740/' },
        { text: 'A November 2022 business party of eight, sent by a bar master in Nagoya, had the whole bar to themselves.', source: R + 'B456650070/' },
        { text: 'A neighbour who drops in after work let the master choose the whiskies, after starting with champagne (July 2025).', source: R + 'B511164001/' },
      ],
      japanese_sources_summary: '食べログ: バー、左京区二条通川端東入孫橋町7-4 二条ビル 1F、営業は深夜2時まで (開店時刻の記載なし)、火曜休み、予約可、カード (JCB・AMEX・Diners) 可、電子マネー不可、8席、喫煙可、貸切可、2016年10月24日開店。口コミ (2020年2月〜2026年9月、英語): ウイスキーが中心、マグナムのウイスキー、ハイボール、カクテル、シャンパン、Fujibayashi というマスター (2020年10月)、K6 出身のマスター (2023年5月)、好みを伝えると選んでくれる、グラスへのこだわり、クラシックやジャズ、4,400円ほどから (2023年7月)。',
      confidence: 'low', sources: [TB, R + 'B432385740/', R + 'B450786874/', R + 'B456650070/', R + 'B465718703/', R + 'B468131458/', R + 'B485424585/', R + 'B485765273/', R + 'B511164001/', R + 'B534944232/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Eight seats; smoking allowed; tell the master your taste.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市左京区二条通川端東入孫橋町7-4 二条ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.013237, 135.772771); cross-checked: GSI 京都府京都市左京区孫橋町7番地 (lot) 63 m; nearest existing record 21.9 m (kyoto_mont_kawabata_nijo); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B432385740/'],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Highball', '', 'Drinks', 'ask', 'ask', 'October 2020; May 2023.', 'highball'),
    ] }, {
    cuisine: 'マスターのおすすめで味わう、珍しい銘柄やマグナムも並ぶウイスキー中心のバー (2020〜2025年の口コミ)・ハイボール、カクテル、シャンパン、珍しいウイスキーの試し飲み (2022〜2025年の口コミ)・グラスへのこだわり、クラシックやジャズ (2023年5月、2024年5月)・4,000〜6,000円ほど (2023〜2025年の口コミ)',
    neighborhood: '川端二条',
    gf_detail: '要確認。ウイスキーとカクテルのバー。料理やグルテンの情報はない (2020〜2026年の口コミ)。',
    vegan_detail: '要確認。ウイスキー、シャンパン、カクテル。料理やヴィーガンの情報はない (2020〜2026年の口コミ)。',
    notes: '[ウイスキーのバー・川端二条、深夜まで] ウイスキー好きのための静かな8席のバー。好みを伝えると、珍しい銘柄の多い棚からマスターがていねいに選んでくれる。ハイボールやカクテルも、ジャズが流れる。喫煙可。火曜休み。',
  });
}

// ================================================================ 烏丸五条 じげん Karasuma Gojo Jigen
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26044585/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '21:00']);
  put({
    id: 'kyoto_karasuma_gojo_jigen', name: '烏丸五条 じげん (Karasuma Gojo Jigen)', category: 'OMNI',
    lat: 34.99742361787402, lng: 135.7587871302866, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi and some grilled dishes may suit, but tempura, satsuma-age, ponzu and dashi dishes involve wheat or soy (2026 reviews). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, wagyu and dashi-based dishes, though vegetables feature (Tabelog; 2026 reviews).',
    hours_raw: 'Tuesday–Saturday and holidays 12:00–21:00, all day; closed Monday and Sunday (not fixed); evenings can be extended to about 22:00 if you call by the day before (Tabelog). House rules (Tabelog): only guests who can communicate in Japanese; groups of two or more; one drink each; evening bookings only if someone in the group drinks alcohol; no strong perfume. Charges: one-drink system; ¥500 otoshi for à la carte only; courses include the seat charge (Tabelog original ワンドリンク制・単品の方のみお通し代500円 コースは席料込み). Reservations accepted (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 12 seats: counter and a private room for 4–6 across a small courtyard; non-smoking (Tabelog; May 2026). No sign outside (July–September 2026). Opened 5 March 2026 after moving from Shijo-Omiya (Tabelog; April 2026). 2 min walk from Gojo Stn.',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Karasuma-Gojo',
    cuisine: 'Grown-up kappo izakaya for day drinking, with seasonal fish, vegetables and meat from noon (Tabelog; 2026 reviews) · lunch drinking set of seven dishes ¥2,800 + tax (Tabelog); limited lunch with a drink ¥3,300; lunch gozen with eight kinds of sashimi; 7-dish lunch omakase (April–September 2026) · lotus-root sesame tofu, homemade satsuma-age, wagyu tataki with ponzu, dashimaki, corn, ayu and white-shrimp tempura, firefly squid, sea pineapple, Kyoto pickles (April–June 2026) · kamameshi of sea bream or seasonal fillings, clay-pot rice of octopus and young ginger (April–May 2026) · a strong sake list · about ¥3,000–8,000 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('烏丸五条 じげん'), menu_url: TB + 'dtlmenu/',
    notes: '[Day-drinking kappo · Karasuma-Gojo, Japanese only] A signless, polished izakaya open from noon, moved from Shijo-Omiya: lotus-root sesame tofu, homemade satsuma-age, sashimi and kamameshi with fine sake, as a good-value lunch set or à la carte. House rules: Japanese speakers only, two or more, one drink each. Closed Sun–Mon.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)', 'Partner (front of house)'], origin: null,
      background: 'Per Tabelog and reviewers: run by 株式会社じげん (NTA invoice register), a long-loved Shijo-Omiya restaurant that moved to Karasuma-Gojo and reopened on 5 March 2026, now serving straight through from noon; a young couple runs it, seats few guests, and keeps no sign outside (April–September 2026).',
      philosophy: null, specialty: 'Lotus-root sesame tofu; homemade satsuma-age; kamameshi.',
      anecdotes: [
        { text: 'An April 2026 regular from the Shijo-Omiya days, on a third day-drinking stop, could not choose between the sea bream and seasonal kamameshi — so had both.', source: R + 'B526488080/' },
        { text: 'A May 2026 guest called the lotus-root sesame tofu possibly the best ever, along with fluffy homemade satsuma-age.', source: R + 'B528646632/' },
        { text: 'A local in July 2026 heard the owners had moved to avoid foreign tourists and keep no sign out front.', source: R + 'B532368266/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・日本料理・野菜料理、下京区高砂町370 1F、地下鉄五条駅から徒歩2分、火〜土・祝日 12:00〜21:00、月・日休み (不定)、前日までの電話で夜は22時ごろまで延長可、日本語で意思疎通できる方のみ、2名以上、ワンドリンク制、夜はお酒を飲む方がいる場合のみ予約可、強い香水は控えて、ワンドリンク制・単品の方のみお通し代500円 コースは席料込み、カード (VISA・Master・JCB・AMEX・Diners) 可、電子マネー・QR 不可、12席、4〜6名の個室、禁煙、2026年3月5日開店、四条大宮から移転、昼飲みの7品の盛り合わせ2,800円 (税別)。インボイス登録は株式会社じげん (国税庁)。口コミ (2026年4〜9月、英語): 看板のない店、若い夫婦で営む、中庭を通る個室、限定の昼3,300円 (1ドリンク付き)、刺身8種の昼の御膳、昼のおまかせ7品、れんこんの胡麻豆腐、自家製のさつま揚げ、和牛のたたきのポン酢、だし巻き、とうもろこし・鮎・白えびの天ぷら、ほたるいか、ほや、京漬物、鯛と季節の釜飯、たこと新生姜の土鍋ごはん、日本酒が豊富。',
      confidence: 'medium', sources: [TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=1130001044453', R + 'B526488080/', R + 'B526900623/', R + 'B527156879/', R + 'B527587832/', R + 'B527707116/', R + 'B528646632/', R + 'B529061299/', R + 'B529309237/', R + 'B532368266/', R + 'B535870295/'] },
    cultural_comfort: { level: 'japanese', note: 'Japanese speakers only; groups of two or more; one drink each; ¥500 otoshi à la carte.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区高砂町370 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reopened here 5 March 2026; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (34.997424, 135.758787); cross-checked: GSI 京都府京都市下京区高砂町370番地 (lot) 44 m; nearest existing record 36.2 m (kyoto_manjuji_hakuran); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B527587832/'],
    price_note: 'Prices from Tabelog and an April 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Lunch drinking set, 7 dishes', '¥2,800', 'Lunch', 'ask', 'no', 'Tabelog; plus tax.', 'hirunomi'),
      it('', '', 'Limited lunch with one drink', '¥3,300', 'Lunch', 'ask', 'no', 'April 2026.', 'lunch'),
      it('', '', 'Lotus-root sesame tofu', '', 'Small dishes', 'ask', 'ask', 'May 2026.', 'gomadofu'),
    ] }, {
    cuisine: '昼から旬の魚、野菜、肉で飲める大人の割烹居酒屋 (食べログ、2026年の口コミ)・昼飲みの7品の盛り合わせ2,800円 (税別) (食べログ)、1ドリンク付きの限定の昼3,300円、刺身8種の昼の御膳、昼のおまかせ7品 (2026年4〜9月)・れんこんの胡麻豆腐、自家製のさつま揚げ、和牛のたたきのポン酢、だし巻き、とうもろこし・鮎・白えびの天ぷら、ほたるいか、ほや、京漬物 (2026年4〜6月)・鯛や季節の釜飯、たこと新生姜の土鍋ごはん (2026年4〜5月)・日本酒が豊富・3,000〜8,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '烏丸五条',
    gf_detail: '要確認。刺身や一部の焼き物は合う可能性があるが、天ぷら、さつま揚げ、ポン酢、だしの料理は小麦や醤油 (2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。魚、和牛、だしの料理。野菜料理もある (食べログ、2026年の口コミ)。',
    notes: '[昼飲みの割烹・烏丸五条、日本語のみ] 四条大宮から移った看板のない落ち着いた居酒屋、昼12時から通しで。れんこんの胡麻豆腐、自家製さつま揚げ、刺身、釜飯に上等の日本酒を、お得な昼のセットか一品で。店のルール: 日本語で話せる方のみ、2名以上、ワンドリンク制。日・月休み。',
  });
}

save();
