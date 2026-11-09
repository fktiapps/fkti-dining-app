// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 88 (2026-11-08).
//   + 京・清水 しげもり Kyo Shimizu Shigemori (udon and curry udon below Kiyomizu-dera; rest)
//   + 麩屋町 103 Fuyacho 103 (creative oden counter, formerly Fuyacho Une no; rest)
//   + 京ゆば 三田久 清水店 Kyo Yuba Mitakyu (first restaurant of a family yuba maker of about 100 years; rest)
//   + 五黄の寅 Go no Tora (charcoal grill, obanzai and sake, Shijo-Karasuma; rest)
//   Rest list (mod 6 = 1) after batch 87, nearest-first — skipped:
//   - 御所南 鮨ひろ 26045329: thin listing (2 reviews).
//   - パティスリー ドゥ ジェニアル 26007535: retail food shop (Greg 11-07 ruling) — takeaway-only cake shop; no sourced founding
//     history (site shows only ©2017) and no sourced GF or vegan options.
//   - 四五＝ノ 四条烏丸店 26044333: sub-brand of a large multi-brand group — 四五＝ノ（しのごの）四条烏丸店 is on than.co.jp/brands.
//   Brand check: queue-status.jsonl and than.co.jp/brands (2026-11-08) checked for every brand — only 四五＝ノ is THAN's.
//   五黄の寅 is run by 株式会社ＡＦＬＯ・ＸＬ (NTA invoice register, Kyoto). 三田久 is the family yuba maker's own shop
//   (makuake.com/project/mitakyu). しげもり and 麩屋町 103: no other shops found. None of the four is in data (main 5c5d643a,
//   hidden records included) by name and address; 麩屋町 103 shares its building with kyoto_isil_isil_fuyacho and
//   kyoto_tsukune_seisakujo (other units).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-88');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260202/26045329/', 'thin listing: 2 reviews');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26007535/', 'retail food shop (Greg 11-07 ruling): takeaway-only cake shop; no sourced founding history and no sourced GF or vegan options');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26044333/', 'sub-brand of a large multi-brand group: 四五＝ノ（しのごの）四条烏丸店 is listed on than.co.jp/brands (株式会社THAN)');

// ================================================================ 京・清水 しげもり Kyo Shimizu Shigemori
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26016397/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00'], ['17:00', '20:00']);
  put({
    id: 'kyoto_shimizu_shigemori', name: '京・清水 しげもり (Kyo Shimizu Shigemori)', category: 'OMNI',
    lat: 34.996578754466086, lng: 135.7770282593477, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: wheat udon in a soy-dashi broth, curry roux and soba (Tabelog; 2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi broths, meat curry udon, chicken and egg dishes (2024–2026 reviews).',
    hours_raw: 'Thursday–Tuesday and holidays 11:00–15:00 (last order 14:40) and 17:00–20:00 (last order 19:20); closed Wednesday, which may change when Wednesday is a holiday (Tabelog). Open on New Year’s Day with an earlier last order (January 2025). Reservations accepted (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), WAON and PayPay (Tabelog). 52 seats incl. counter and tatami; non-smoking with a smoking space outside; children welcome; multilingual menu (Tabelog; December 2024). Kiyomizu 4-chome, 300 m north of the Gojozaka bus stop (Tabelog). Opened 29 December 2009 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyomizu 4-chome, below Kiyomizu-dera',
    cuisine: 'Sanuki udon made Kyoto-style, with a house curry roux and meat (Tabelog) · curry niku udon (most popular), fresh-yuba ankake udon, egg udon, wild-vegetable udon, mochi udon, chicken nanban udon (December 2024–August 2026) · chilled yamakake soba ¥1,100, mini hiyashi soba; tamago-don, oyakodon, kayaku rice, mentaiko rice ¥400 (¥200 in a set) (January–October 2026) · about ¥1,000–2,000 (Tabelog)',
    website: null, gmaps: gm('京・清水 しげもり'), menu_url: TB + 'dtlmenu/',
    notes: '[Udon · below Kiyomizu-dera] A roomy udon house on the walk down from Kiyomizu-dera: Kyoto-style Sanuki noodles in a rich dashi, the popular curry niku udon and fresh-yuba ankake udon, with kayaku or mentaiko rice in a set. Counter seats for solo diners. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog: an udon shop opened 29 December 2009 in Kiyomizu 4-chome, serving Sanuki udon prepared Kyoto-style with a curry roux and meat made to its own recipe. Reviewers in 2024–2026 describe a rich broth, chewy noodles and many visitors from abroad.',
      philosophy: null, specialty: 'Curry niku udon; fresh-yuba ankake udon.',
      anecdotes: [
        { text: 'A New Year’s Day 2025 visitor, cold from a shrine visit after the midnight bells, warmed up with the curry niku udon and thanked the staff for working through the holiday.', source: R + 'B498543597/' },
        { text: 'A June 2026 lunch guest found the mentaiko rice, ¥200 in a set, outshone the chicken nanban udon.', source: R + 'B530486028/' },
        { text: 'A January 2026 visitor walking to the station to dodge the bus queue waited about 15 minutes, then had mochi udon for New Year.', source: R + 'B520886007/' },
      ],
      japanese_sources_summary: '食べログ: うどん・カレーうどん・親子丼、東山区清水4-182-4 ライオンズマンション清水 1F、市バス五条坂から北へ300m、木〜火・祝日 11:00〜15:00 (L.O.14:40)、17:00〜20:00 (L.O.19:20)、水曜休み (祝日の場合は変更あり)、予約可、カード (VISA・Master・JCB・AMEX・Diners)・WAON・PayPay 可、52席、カウンター・座敷、禁煙 (店外に喫煙所)、子ども可、2009年12月29日開店、紹介文 (英訳): 京風に仕立てた讃岐うどん、独自のカレールウと肉の「カレー肉うどん」。口コミ (2024年12月〜2026年10月、英語): ゆば、カレー、卵のうどん、山菜うどん、もちのうどん、鶏南蛮うどん、生ゆばのあんかけうどん、冷やしやまかけそば1,100円、玉子丼、親子丼、かやくご飯、明太子ご飯 (単品400円、セット200円)、多言語のメニュー、海外の客も多い。',
      confidence: 'medium', sources: [TB, R + 'B496810464/', R + 'B498543597/', R + 'B514225344/', R + 'B520246621/', R + 'B520886007/', R + 'B525208087/', R + 'B527988384/', R + 'B530486028/', R + 'B533878336/', R + 'B538089336/'] },
    cultural_comfort: { level: 'english', note: 'Multilingual menu; counter seats; cards and PayPay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区清水4-182-4 ライオンズマンション清水 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (34.996579, 135.777028); cross-checked: GSI 京都府京都市東山区清水四丁目182番地 (lot) 76 m; nearest existing record 48.3 m (kyoto_smile_burger_kiyomizudera); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538089336/', R + 'B530486028/'],
    price_note: 'Prices from June and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Curry niku udon', '', 'Udon', 'no', 'no', 'January 2025; the most popular dish.', 'curryniku'),
      it('', '', 'Chilled yamakake soba', '¥1,100', 'Soba', 'no', 'no', 'October 2026.', 'yamakake'),
      it('', '', 'Mentaiko rice', '¥400', 'Rice', 'ask', 'no', 'June 2026; ¥200 in a set.', 'mentaiko'),
    ] }, {
    cuisine: '京風に仕立てた讃岐うどん、独自のカレールウと肉 (食べログ)・一番人気のカレー肉うどん、生ゆばのあんかけうどん、卵のうどん、山菜うどん、もちのうどん、鶏南蛮うどん (2024年12月〜2026年8月)・冷やしやまかけそば1,100円、ミニ冷やしそば、玉子丼、親子丼、かやくご飯、明太子ご飯400円 (セットで200円) (2026年1〜10月)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '清水4丁目、清水寺の下',
    gf_detail: 'グルテンフリー不可。小麦のうどんに醤油のだし、カレールウ、そば (食べログ、2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。だしのつゆ、肉のカレーうどん、鶏や卵の料理 (2024〜2026年の口コミ)。',
    notes: '[うどん・清水寺の下] 清水寺からの帰り道の広いうどん屋。濃いだしの京風の讃岐うどん、人気のカレー肉うどんや生ゆばのあんかけうどんに、かやくご飯や明太子ご飯のセット。一人でもカウンターで。水曜休み。',
  });
}

// ================================================================ 麩屋町 103 Fuyacho 103
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26039311/'; const R = TB + 'dtlrvwlst/';
  const H = day(['08:30', '11:00'], ['17:30', '23:00']);
  put({
    id: 'kyoto_fuyacho_103', name: '麩屋町 103 (Fuyacho 103)', category: 'OMNI',
    lat: 35.012847, lng: 135.766063, cuisine_type: 'oden',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Oden of daikon, octopus and egg in dashi may suit, but fish cakes, croquettes and spring rolls contain wheat, and the broth and dishes use soy (2025–2026 reviews). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: oden in a fish dashi, meat and seafood dishes (2025–2026 reviews).',
    hours_raw: 'Daily 8:30–11:00 (breakfast, booked at least three days ahead) and from 17:30 to 23:00; closing days not fixed (Tabelog). Reservations accepted; often fully booked (Tabelog; December 2025). Breakfast is a single ¥3,000 set (June 2026). No prices on the evening menu (December 2025). Cards (VISA, Master, JCB, AMEX); no e-money or QR (Tabelog). 20 seats: 12 at the counter and a private room for 4–8; children under junior-high age in the private room (Tabelog). Non-smoking (Tabelog). Room 103 of the Daini Fuyacho Building, hard to find (Tabelog; March 2025). Opened 8 April 2023, formerly Fuyacho Une no (Tabelog; December 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Fuyacho-Oshikoji, near City Hall',
    cuisine: 'Creative oden counter with a carefully made, Kyoto-meets-exotic dashi (2025–2026 reviews) · oden of daikon, octopus, eggs peeled into the pot, dashimaki, kinchaku, sweet potato, noodles, and caciocavallo cheese with meat (January 2025–August 2026) · blackboard specials: fried tofu with fuki-no-to miso, shimaaji, grilled mackerel, sanma spring rolls, chilled chawanmushi, grape and mozzarella salad, meat-sauce croquettes (March 2025–September 2026) · breakfast set ¥3,000: dashimaki, kombu-cured isaki, simmered aubergine, fried tofu with plum, shaved katsuobushi, yuba soup, clay-pot rice, warabi mochi and matcha (June 2026) · dinner about ¥6,000–8,000 (Tabelog)',
    website: null, gmaps: gm('麩屋町 103 おでん'), menu_url: null,
    notes: '[Oden · Fuyacho-Oshikoji] A hidden twelve-seat counter behind an unmarked door in an apartment block: inventive oden in a superb dashi — octopus, egg, caciocavallo and meat — with Italian-leaning small plates, plus a lovely ¥3,000 breakfast if booked three days ahead. Unpriced menu; book.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: opened 8 April 2023, the renamed successor of the popular Fuyacho Une no (December 2025; March 2026); reviewers mention a Michelin Bib Gourmand listing (October–December 2025) and an owner particular about the broth who cooks, mixes drinks and whisks the breakfast matcha (October 2025; June–August 2026).',
      philosophy: null, specialty: 'Creative oden; breakfast set.',
      anecdotes: [
        { text: 'An October 2025 diner watched shell-on eggs simmer in the pot, then get peeled and returned when ordered — a first.', source: R + 'B515189296/' },
        { text: 'A three-time regular in June 2026 returns whenever the craving for the ¥3,000 breakfast, ending in warabi mochi and matcha, comes back.', source: R + 'B520680202/' },
        { text: 'A March 2026 party who used to go to Une no booked the private room under the new name.', source: R + 'B525727720/' },
      ],
      japanese_sources_summary: '食べログ: おでん、中京区麩屋町通押小路上ル尾張町225 第二ふや町ビル 103、市役所前駅から徒歩5〜10分、毎日 朝 8:30〜11:00 (3日前までに要予約)、夜 17:30〜23:00、不定休、予約可、カード (VISA・Master・JCB・AMEX) 可、電子マネー・QR 不可、20席 (カウンター12席、4〜8名の個室)、中学生未満は個室、禁煙、2023年4月8日開店。口コミ (2025年1月〜2026年9月、英語): 旧店名は Fuyacho Une no、ミシュランのビブグルマン、隠れ家、だしの香り、たこ、殻ごと煮て注文後にむく卵、大根、だし巻き、巾着、さつまいも、カチョカヴァロと肉のおでん、黒板のおすすめ (ふきのとう味噌の揚げ豆腐、しまあじ、焼きさば、さんまの春巻き、冷たい茶碗蒸し、ぶどうとモッツァレラ、ミートソースのコロッケ)、値段の表示なし、朝ごはん3,000円 (だし巻き、いさきの昆布じめ、なすの煮物、梅の揚げ豆腐、削りたてのかつお節、ゆばの汁、土鍋ごはん、わらび餅と店主の点てる抹茶)。',
      confidence: 'medium', sources: [TB, R + 'B505134849/', R + 'B508414962/', R + 'B515189296/', R + 'B519974444/', R + 'B520680202/', R + 'B521082882/', R + 'B525727720/', R + 'B530478228/', R + 'B534750644/', R + 'B534752251/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hidden door; no prices on the menu; book (breakfast 3 days ahead).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区麩屋町通押小路上ル尾張町225 第二ふや町ビル 103',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.012847, 135.766008) was 2.9 m from kyoto_isil_isil_fuyacho and 3.1 m from kyoto_tsukune_seisakujo (same building, 1F), so moved 5 m east to (35.012847, 135.766063): now 6.6 m and 6.7 m; GSI 京都府京都市中京区尾張町225番地 (lot) 19 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520680202/'],
    price_note: 'Breakfast price from a June 2026 review; the evening menu has no prices.', last_checked: TODAY, items: [
      it('', '', 'Breakfast set (booked 3 days ahead)', '¥3,000', 'Breakfast', 'ask', 'no', 'June 2026.', 'breakfast'),
      it('', '', 'Caciocavallo and meat oden', '', 'Oden', 'ask', 'no', 'January 2025.', 'caciocavallo'),
    ] }, {
    cuisine: '京都らしくもどこか異国風のだしの創作おでんのカウンター (2025〜2026年の口コミ)・大根、たこ、殻をむいて鍋に戻す卵、だし巻き、巾着、さつまいも、麺、カチョカヴァロと肉のおでん (2025年1月〜2026年8月)・黒板のおすすめ: ふきのとう味噌の揚げ豆腐、しまあじ、焼きさば、さんまの春巻き、冷たい茶碗蒸し、ぶどうとモッツァレラのサラダ、ミートソースのコロッケ (2025年3月〜2026年9月)・朝ごはん3,000円: だし巻き、いさきの昆布じめ、なすの煮物、梅の揚げ豆腐、削りたてのかつお節、ゆばの汁、土鍋ごはん、わらび餅と抹茶 (2026年6月)・夜6,000〜8,000円ほど (食べログ)',
    neighborhood: '麩屋町押小路、市役所の近く',
    gf_detail: '要確認。だしの大根、たこ、卵のおでんは合う可能性があるが、練り物、コロッケ、春巻きは小麦、だしや料理に醤油 (2025〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。魚のだしのおでん、肉と魚介の料理 (2025〜2026年の口コミ)。',
    notes: '[おでん・麩屋町押小路] マンションの中の看板のない扉の奥のカウンター12席。見事なだしの創作おでん (たこ、卵、カチョカヴァロと肉) にイタリアン風の小皿、3日前までの予約で3,000円のすてきな朝ごはんも。値段の表示なし、予約を。',
  });
}

// ================================================================ 京ゆば 三田久 清水店 Kyo Yuba Mitakyu
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26038777/'; const R = TB + 'dtlrvwlst/'; const MK = 'https://www.makuake.com/project/mitakyu/';
  const H = day(['11:00', '17:30']);
  put({
    id: 'kyoto_kyo_yuba_mitakyu_kiyomizu', name: '京ゆば 三田久 清水店 (Kyo Yuba Mitakyu, Kiyomizu)', category: 'OMNI',
    lat: 34.99731526788023, lng: 135.77808955027197, cuisine_type: 'tofu',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yuba is made from soybeans and water, but the maker lists wheat in its sauced yuba products, the yuba rice bowl uses dashi and nama-fu is wheat gluten (makuake.com; 2023–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Plain fresh yuba and soy-milk drinks may suit, but the maker lists mackerel in some yuba products and the dishes come in dashi (makuake.com; 2023–2026 reviews).',
    hours_raw: 'Daily 11:00–17:30; hours may change (Tabelog). The lunch gozen can sell out after lunchtime, leaving the café menu (February 2025). Reservations accepted; the entrance is busy with take-away queues (Tabelog; January 2026). Cards (AMEX per Tabelog). 25 seats: 8 on 1F, 17 on 2F; non-smoking; children welcome (Tabelog). On the slope up to Kiyomizu-dera (April 2026). Opened 23 January 2023 (Tabelog), the yuba maker’s first restaurant and take-away shop (makuake.com).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyomizu 4-chome, on the slope to Kiyomizu-dera',
    cuisine: 'Yuba tasting restaurant of a Kyoto yuba maker, making yuba from domestic soybeans and Kyoto groundwater (makuake.com) · Kyo yuba tasting gozen ¥2,990 of six kinds of yuba — fresh yuba, yuba chirimen, yuba rice bowl in dashi (December 2023–April 2026) · nama-fu tasting of yuzu miso, kuromitsu-kinako and black sesame; matcha soy latte (November 2024–December 2025) · take-away on 1F (January 2026) · lunch about ¥2,000–4,000 (2024–2026 reviews)',
    website: MK, gmaps: gm('京ゆば 三田久 清水店'), menu_url: null,
    notes: '[Yuba · on the slope to Kiyomizu-dera] The first restaurant of a family yuba maker of about a century: a gentle tasting gozen of six yuba, from creamy fresh yuba to a yuba rice bowl, plus nama-fu and soy lattes, upstairs above a busy take-away counter. Open daily.',
    chef_bio: { chef_name: null, roles: ['Kitchen staff (unnamed)'], origin: null,
      background: 'Per the maker’s crowdfunding page: 三田久 has made yuba for about 100 years since the great-grandfather of 三田竜太, the planned fourth-generation head, founded it; the third-generation president runs a small factory near Kyoto Station, and this Kiyomizu shop, with take-away below and a restaurant above, is the business’s first place to eat (makuake.com). Opened 23 January 2023 (Tabelog).',
      philosophy: 'Yuba of carefully chosen domestic soybeans and clean Kyoto groundwater (makuake.com).', specialty: 'Kyo yuba tasting gozen.',
      anecdotes: [
        { text: 'A March 2025 diner tasted six yuba, each served with a photo of the yuba used, and liked the fresh yuba best.', source: R + 'B505177333/' },
        { text: 'A January 2026 guest, recovering from a night out, found the gentle yuba set soothing on the stomach.', source: R + 'B521032600/' },
        { text: 'A December 2025 visitor killed time before lunch with a beer and a trio of nama-fu, preferring the yuzu miso.', source: R + 'B523672474/' },
      ],
      japanese_sources_summary: '食べログ: 豆腐料理・ソフトクリーム、東山区清水4-150-3、毎日 11:00〜17:30、予約可、カード (AMEX)、25席 (1階8席、2階17席)、禁煙、子ども可、2023年1月23日開店。makuake (三田久): 「約100年もの間事業を続けてきました」、「私の曾祖父が創業した」、4代目となる予定の三田竜太、「3代目（現社長）は、私の父」、京都駅近くの町工場、「厳選した国産大豆と京都の清浄な地下水」、清水店は「1階は主にテイクアウト、2階がレストランとなる予定」、アレルゲン表示に小麦・大豆・さばを含む商品あり。口コミ (2023年4月〜2026年4月、英語): 京ゆば食べくらべ御膳2,990円 (6種のゆば、生ゆば、ゆばちりめん、ゆば丼)、生麩の食べくらべ (柚子味噌、黒蜜きなこ、黒ごま)、抹茶の豆乳ラテ、テイクアウトの行列、清水坂の途中。',
      confidence: 'medium', sources: [TB, MK, R + 'B464084839/', R + 'B476394357/', R + 'B495766930/', R + 'B502792708/', R + 'B502935090/', R + 'B505177333/', R + 'B521032600/', R + 'B523672474/', R + 'B525666310/', R + 'B526963387/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book lunch; take-away queue at the door.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区清水4-150-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through April 2026.' },
    pin_source: `Tabelog ${TB} (34.997315, 135.778090); GSI 京都府京都市東山区清水四丁目150番地 (lot) is 102 m off — a large lot block on the slope — so the Tabelog pin is kept; nearest existing record 36.1 m (kyoto_issunboushi_kiyomizu); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525666310/'],
    price_note: 'Price from an April 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Kyo yuba tasting gozen', '¥2,990', 'Set meals', 'ask', 'ask', 'April 2026; six kinds of yuba.', 'gozen'),
      it('', '', 'Nama-fu tasting', '', 'Sweets', 'no', 'ask', 'December 2025; wheat gluten.', 'namafu'),
    ] }, {
    cuisine: '国産大豆と京都の地下水でゆばを作る京のゆば屋のゆば料理の店 (makuake)・6種のゆばの京ゆば食べくらべ御膳2,990円: 生ゆば、ゆばちりめん、だしのゆば丼など (2023年12月〜2026年4月)・柚子味噌、黒蜜きなこ、黒ごまの生麩の食べくらべ、抹茶の豆乳ラテ (2024年11月〜2025年12月)・1階はテイクアウト (2026年1月)・昼2,000〜4,000円ほど (2024〜2026年の口コミ)',
    neighborhood: '清水4丁目、清水坂の途中',
    gf_detail: '要確認。ゆばは大豆と水で作るが、たれ付きのゆば商品に小麦の表示があり、ゆば丼はだし、生麩は小麦のグルテン (makuake、2023〜2026年の口コミ)。',
    vegan_detail: '要確認。生ゆばや豆乳の飲み物は合う可能性があるが、一部のゆば商品にさばの表示があり、料理はだし (makuake、2023〜2026年の口コミ)。',
    notes: '[ゆば・清水坂の途中] 約100年続く家族のゆば屋の初めての飲食の店。クリーミーな生ゆばからゆば丼まで6種のやさしい食べくらべ御膳、生麩や豆乳ラテも。1階はにぎわうテイクアウト、2階で食事。毎日営業。',
  });
}

// ================================================================ 五黄の寅 Go no Tora
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26023483/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://gono-tora.com/index.html';
  const H = day(['15:00', '24:00']);
  put({
    id: 'kyoto_gonotora_shijo', name: '五黄の寅 (Go no Tora)', category: 'OMNI',
    lat: 35.00259326787014, lng: 135.75691948034014, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Salt-grilled skewers and fish may suit, but obanzai and sauces use soy; a June 2026 host chose it for a guest with many food allergies and all went well — tell the staff (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: charcoal-grilled chicken, fish and dashi-based obanzai (Tabelog; 2026 reviews).',
    hours_raw: 'Daily including holidays 15:00–24:00 (last orders food 23:00, drinks 23:30; grilled and fried dishes until about 22:00); closing days not fixed (Tabelog). Reservations accepted; same-day cancellations generally not accepted (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 36 seats: counter, tatami and sunken kotatsu; private hire for 20–50; smoking allowed; wheelchair accessible; free Wi-Fi (Tabelog; June 2026). A big SOU・SOU noren and a tiger mural by the artist Hideki Kimura (Tabelog). Opened 28 March 2014 (Tabelog). Down an alley 3 min from Karasuma Stn.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Karasuma, Ayanokoji',
    cuisine: 'Charcoal grill, obanzai and sake from around Japan in a Japanese-modern room (Tabelog) · five-kind obanzai platter, chicken tataki, grilled neck, big shiitake, seasonal sanma, seared hamo, shibazuke potato salad, mentaiko wrapped in yuba, onion potage (May–October 2026) · Go no Tora course; all-you-can-drink with peach sake; sake such as Sharaku and Saku plus lesser-known Kyoto brews, sherry-cask options (March–May 2026) · about ¥5,000–8,000 (Tabelog; 2026 reviews)',
    website: WEB, gmaps: gm('五黄の寅 四条烏丸'), menu_url: TB + 'dtlmenu/',
    notes: '[Charcoal grill and sake · Shijo-Karasuma, late] Through a big SOU・SOU noren to a tiger mural: charcoal-grilled chicken and fish, inventive obanzai such as shibazuke potato salad, and a deep sake list, open from 15:00 to midnight. Smoking allowed. Same-day cancellations not accepted.',
    chef_bio: { chef_name: null, roles: ['Grill and counter staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a charcoal-grill and obanzai izakaya opened 28 March 2014, run by 株式会社ＡＦＬＯ・ＸＬ (NTA invoice register), with a SOU・SOU noren, a tiger mural by Hideki Kimura, sunken kotatsu and Scandinavian chairs. Reviewers in 2026 praise attentive counter staff and a sake list mixing famous names with little-known Kyoto brews.',
      philosophy: null, specialty: 'Charcoal-grilled dishes; obanzai.',
      anecdotes: [
        { text: 'A June 2026 host with Swedish guests who had many food allergies chose it as a truly Kyoto place, and the guests were delighted.', source: R + 'B530068393/' },
        { text: 'A March 2026 couple celebrating on the Go no Tora course fell for the peach sake on the all-you-can-drink list.', source: R + 'B524159516/' },
        { text: 'A June 2026 counter diner loved the seared hamo and shibazuke potato salad, but had not known smoking was allowed.', source: R + 'B529942072/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・日本酒バー・日本料理、下京区四条町369 コーポ綾小路、烏丸駅から徒歩3分、毎日 (祝日も) 15:00〜24:00 (L.O.料理23:00、飲み物23:30、焼き物・揚げ物は22時ごろまで)、不定休、予約可 (当日のキャンセルは原則不可)、カード (VISA・Master・JCB・AMEX・Diners)・PayPay 可、電子マネー不可、36席、カウンター・座敷・掘りごたつ、貸切20〜50名、喫煙可、車いす可、Wi-Fi、2014年3月28日開店、紹介文 (英訳): SOU・SOU の大きなのれん、Hideki Kimura の虎の壁画、炭火焼とおばんざい。インボイス登録は株式会社ＡＦＬＯ・ＸＬ (国税庁)。口コミ (2026年3〜10月、英語): おばんざい5種、鶏のたたき、ネックの炭火焼、大きなしいたけ、さんま、鱧の炙り、しば漬けのポテトサラダ、明太子のゆば巻き、オニオンポタージュ、五黄の寅コース、飲み放題の桃のお酒、有名銘柄と京都の地酒、アレルギーの多い客も満足 (2026年6月)。',
      confidence: 'medium', sources: [TB, WEB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=1130001051904', R + 'B486432296/', R + 'B524075248/', R + 'B524159516/', R + 'B528391381/', R + 'B528893366/', R + 'B529942072/', R + 'B530068393/', R + 'B530352211/', R + 'B531222727/', R + 'B536050420/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Smoking allowed; no same-day cancellations; cards and PayPay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区四条町369 コーポ綾小路',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002593, 135.756919); cross-checked: GSI 京都府京都市下京区四条町369番地 (lot) 52 m; nearest existing record 17.4 m (kyoto_gohandokoro_yaosada); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529942072/', R + 'B528893366/'],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Shibazuke potato salad', '', 'Obanzai', 'ask', 'no', 'June 2026.', 'potatosalad'),
      it('', '', 'Five-kind obanzai platter', '', 'Obanzai', 'ask', 'ask', 'May 2026.', 'obanzai'),
    ] }, {
    cuisine: '和モダンの店で炭火焼、おばんざい、全国の日本酒 (食べログ)・おばんざい5種盛り、鶏のたたき、ネックの炭火焼、大きなしいたけ、旬のさんま、鱧の炙り、しば漬けのポテトサラダ、明太子のゆば巻き、オニオンポタージュ (2026年5〜10月)・五黄の寅コース、桃のお酒のある飲み放題、Sharaku や Saku などと知られざる京都の地酒、シェリー樽の酒 (2026年3〜5月)・5,000〜8,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '四条烏丸、綾小路',
    gf_detail: '要確認。塩の串や魚は合う可能性があるが、おばんざいやたれは醤油。2026年6月、食物アレルギーの多い客を連れた人が選んで好評だった。スタッフに伝えて (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。炭火焼の鶏や魚、だしのおばんざい (食べログ、2026年の口コミ)。',
    notes: '[炭火焼と日本酒・四条烏丸、深夜まで] SOU・SOU の大きなのれんの先に虎の壁画。炭火焼の鶏や魚、しば漬けのポテトサラダなど工夫のおばんざい、充実の日本酒を15時から深夜0時まで。喫煙可。当日のキャンセル不可。',
  });
}

save();
