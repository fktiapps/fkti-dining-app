// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 84.
//   + ビストロ ル・サンジュ Bistro Le Saint-Jou (one-man counter bistro near Gojo-Takakura)
//   + 花こま Hana Koma (owner-run okonomiyaki house between Kodai-ji and Kiyomizu)
//   + 温石 左近太郎 本店 Onjaku Sakontaro (Kyoto kaiseki in a former ryokan on Kamikiyamachi; tied to たん熊北店 per a review)
//   - 水徳 本店, 京都和牛すき焼きしゃぶしゃぶ 富之上 祇園八坂店, 有喜屋 ホテルオークラ京都店, HUB 四条烏丸店, ホテルオークラ京都,
//     26ダイニング 京都市役所ててまち店, 串八 烏丸店, 京纏菓子 cacoto, YOLOs: skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26024666 (skipped), 26044676 (skipped),
//   26009306 (skipped), 26003690 (skipped), 26026970, 26007122 (skipped), 26044742 (skipped), 26003180 (skipped),
//   26028842 (skipped), 26023118, 26041400 (skipped), 26002088.
//   queue-status.jsonl grepped for each brand (水徳, 富之上, 有喜屋, HUB, ル・サンジュ, オークラ, 26ダイニング, 串八, cacoto, 花こま,
//   YOLOs, 左近太郎/たん熊): earlier rulings for 富之上 (26043996, 26044845) and HUB (26028425).
//   Data check: none of the three drafted is in data/kyoto.json by name or address. 26ダイニング COCON KARASUMA店 and the
//   たん熊北店 本店 are in data.
//   Same-name count (same brand or operator only): 左近太郎 — invoice holder 株式会社左近太郎 (Nanzenji, NTA register); a
//   January 2026 reviewer says it belongs to the group of 熊魚菴 たん熊北店, a local Kyoto group of differently named shops —
//   drafted as a sister concept, flagged. ル・サンジュ, 花こま — one shop each. Large-parent and big-chain-hotel lists checked.
//   Service charges: none listed on Tabelog for the three drafted.
//   Other-diner remarks (Greg 2026-11-06): none used.
//   Retail rule (Greg 2026-11-07): cacoto and YOLOs re-checked — neither is shown as particularly historic AND
//   family-owned with sourced succession, and neither lists GF or vegan options; skipped.
//   Halal: no operator in this batch claims halal.
//   JA text: 祝日 written in full; no bare 天.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-84');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26024666', '水徳 本店: no reviews dated 2025–2026 (latest May 2023); a take-out shop');
skip('26044676', '京都和牛すき焼きしゃぶしゃぶ 富之上 祇園八坂店: same-concept branch of a brand in data — same ruling as 26043996 (富之上 祇園本店 is in data)');
skip('26009306', 'large parent: Hotel Okura hotel — 有喜屋 ホテルオークラ京都店 is inside ホテルオークラ京都 (big-chain-hotel rule, Greg 2026-11-08)');
skip('26003690', 'chain: HUB (same as 26028425)');
skip('26007122', 'ホテルオークラ京都: a hotel listing, not a restaurant, and a big-chain hotel (Greg 2026-11-08)');
skip('26044742', '26ダイニング 京都市役所ててまち店: brand already in data — 26ダイニング COCON KARASUMA店 (kyoto_26_dining_cocon_karasuma) is in kyoto.json; both run by よーじやフードサービス株式会社 (own site 26dining-kyoto.com)');
skip('26003180', '串八 烏丸店: chain — 株式会社串八’s site (kushihachi.co.jp) says it runs ten 串八 restaurants in and around Kyoto');
skip('26028842', 'retail food shop (Greg 11-07 ruling): 京纏菓子 cacoto sells boxed “kimono” petit cakes and shakes to take away; a 2025 review says the business began as a costume-rental shop in 1897, but family succession is not sourced and no GF or vegan options are listed');
skip('26041400', 'retail food shop (Greg 11-07 ruling): YOLOs is a food select shop (bread, mustard and deli from other makers); no historic family ownership and no GF or vegan options sourced');

// ================================================================ ビストロ ル・サンジュ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26026970/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:00', '23:00']);
  put({
    id: 'kyoto_bistro_le_saint_jou', name: 'ビストロ ル・サンジュ (Bistro Le Saint-Jou)', category: 'OMNI',
    lat: 34.997775, lng: 135.761487, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pâté, fried and grilled dishes, pasta, beef stew and homemade bread; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pâté, ayu, carpaccio, beef stew and cheesecake (2025 reviews).',
    hours_raw: '16:00–23:00; closed on irregular days (Tabelog). The owner works alone — call ahead (April 2025). Cards: JCB, AMEX and Diners; no e-money or QR (Tabelog). About 8–10 counter seats facing an open kitchen (Tabelog; October 2025). Non-smoking (Tabelog). On Manjuji-dori west of Takakura, 4 min from Gojo (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Manjuji-dori near Takakura — 4 min from Gojo',
    cuisine: 'A homely counter bistro: creative French served on Japanese tableware with chopsticks, cooked in front of you (October 2025) · half portions so you can try many — pâté, fried and grilled dishes, pasta, beef stew (April 2025) · boned ayu with balsamic sauce; carpaccio; potato salad; cheesecake (May 2025) · courses with all-you-can-eat homemade bread, baked fresh between dishes (October and December 2025) · playful plates such as carrot karamu-cho alongside classic French (May 2026)',
    website: null, gmaps: gm('ビストロ ル・サンジュ 五条'), menu_url: TB + 'dtlmenu/',
    notes: '[Bistro · Gojo-Takakura, a one-man counter] A tiny counter bistro where the friendly owner cooks everything alone in a spotless open kitchen: half portions of pâté, grilled ayu, pasta and beef stew, or a course with bread baked fresh between dishes. Book by phone.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Reviewers say the owner runs the bistro single-handed (April and October 2025), describe a friendly, cheerful chef (May and September 2025) and an open kitchen kept spotless (May 2026).',
      philosophy: null, specialty: 'Half-portion bistro dishes; homemade bread.',
      anecdotes: [
        { text: 'A May 2025 regular found the chef disappointed not to have the Toyama fish for the carpaccio that day — and still loved it.', source: R + 'B501992186/' },
        { text: 'At an October 2025 birthday dinner the party were the only guests, and the homemade bread proved impossible to stop eating.', source: R + 'B520306005/' },
      ],
      japanese_sources_summary: '食べログ: ビストロ ル・サンジュ、フレンチ、下京区万寿寺通高倉西入万寿寺中之町68、地下鉄五条駅から徒歩約4分、16:00〜23:00、不定休、カードはJCB・AMEX・Diners、10席、禁煙。口コミ (2025〜2026年、英語): 店主が一人で営む、電話してから、カウンターのみ、目の前で調理、ハーフポーションでいろいろ (パテ、揚げ物、焼き物、パスタ、ビーフシチュー)、骨を抜いた鮎とバルサミコソース、カルパッチョ、ポテトサラダ、チーズケーキ、和食器と箸で出す創作フレンチのコース、料理ごとに焼く自家製パンのおかわり自由、人参のカラムーチョ、清潔なオープンキッチン。',
      confidence: 'medium', sources: [TB, R + 'B501992186/', R + 'B505997852/', R + 'B512978921/', R + 'B518089179/', R + 'B520306005/', R + 'B528178710/', R + 'B533788319/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One-person counter; call ahead.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区万寿寺通高倉西入万寿寺中之町68',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (34.997775, 135.761487); cross-checked: GSI 京都府京都市下京区万寿寺中之町68番地 (lot) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B505997852/', R + 'B501992186/'],
    price_note: 'No menu prices found.', last_checked: TODAY, items: [
      it('', '', 'Pâté (half portion available)', '', 'À la carte', 'ask', 'no', 'April 2025.', 'pate'),
      it('', '', 'Boned ayu with balsamic sauce', '', 'À la carte', 'ask', 'no', 'May 2025.', 'ayu'),
      it('', '', 'Beef stew', '', 'À la carte', 'ask', 'no', 'April 2025.', 'stew'),
      it('', '', 'Course with homemade bread', '', 'Courses', 'no', 'no', 'October 2025.', 'course'),
    ] }, {
    cuisine: '和食器と箸で出す創作フレンチ、目の前で作る家庭的なカウンターのビストロ (2025年10月)・ハーフポーションでいろいろ: パテ、揚げ物、焼き物、パスタ、ビーフシチュー (2025年4月)・骨を抜いた鮎とバルサミコソース、カルパッチョ、ポテトサラダ、チーズケーキ (2025年5月)・料理の合間に焼く自家製パンがおかわり自由のコース (2025年10・12月)・人参のカラムーチョのような遊びのある皿と本格フレンチ (2026年5月)',
    neighborhood: '高倉近くの万寿寺通。五条から徒歩4分',
    gf_detail: '要確認。パテ、揚げ物、焼き物、パスタ、ビーフシチュー、自家製パン。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。パテ、鮎、カルパッチョ、ビーフシチュー、チーズケーキ (2025年の口コミ)。',
    notes: '[ビストロ・五条高倉、一人で営むカウンター] 気さくな店主が清潔なオープンキッチンで一人で作る小さなカウンターのビストロ。パテ、鮎の焼き物、パスタ、ビーフシチューをハーフポーションで、または料理の合間に焼くパンのコースで。電話で予約を。',
  });
}

// ================================================================ 花こま
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26023118/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '19:00']);
  put({
    id: 'kyoto_hana_koma_okonomiyaki', name: '花こま (Hana Koma)', category: 'OMNI',
    lat: 34.999353, lng: 135.777968, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: okonomiyaki and yakisoba (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork okonomiyaki, mixed okonomiyaki and yakisoba, chicken gizzards (2026 reviews).',
    hours_raw: 'Monday, Wednesday–Sunday 11:00–19:00; closed Tuesday; hours may change (Tabelog). Reservations accepted (Tabelog). Cards: JCB, Diners and UnionPay; PayPay (Tabelog). 40 seats: tables for 6 and 4 and three tatami tables for 4 (Tabelog). In the quiet streets between Kodai-ji and Kiyomizu-dera, about 10 min from Keihan Gion-Shijo (Tabelog; April 2026).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashiyama between Kodai-ji and Kiyomizu — 10 min from Keihan Gion-Shijo',
    cuisine: 'Okonomiyaki and yakisoba at local prices in a Showa-era room (2026 reviews) · mixed okonomiyaki ¥800, green-onion topping ¥100 (April 2026) · buta-tama; mixed yakisoba (May 2026) · okonomiyaki with green beans; chicken gizzards; beer (July 2026) · about ¥1,000 a head with a drink (April 2026)',
    website: null, gmaps: gm('花こま お好み焼き 東山'), menu_url: TB + 'dtlmenu/',
    notes: '[Okonomiyaki · Higashiyama near Kodai-ji, owner-run] A homely, Showa-feeling okonomiyaki house in the quiet lanes between Kodai-ji and Kiyomizu, run by a cheerful owner alone — mixed okonomiyaki from ¥800, buta-tama and yakisoba at prices free of tourist mark-ups. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'An April 2026 reviewer writes that a cheerful owner runs the place alone, giving it a homely feel.',
      philosophy: null, specialty: 'Mixed okonomiyaki.',
      anecdotes: [
        { text: 'An April 2026 visitor, hungry after a long day of walking near Kiyomizu, stopped for a ¥800 mixed okonomiyaki with extra green onion.', source: R + 'B526109667/' },
        { text: 'A July 2026 diner was surprised to find green beans in the okonomiyaki — and liked it.', source: R + 'B536750910/' },
      ],
      japanese_sources_summary: '食べログ: 花こま、お好み焼き、東山区下弁天町58-1、京阪祇園四条駅から徒歩10分、月・水〜日 11:00〜19:00、火曜定休、予約可、カードはJCB・Diners・UnionPay、PayPay可、40席 (6人テーブル1、4人テーブル2、座敷4人3)。口コミ (2026年、英語): 明るい店主が一人で営む家庭的な店、ミックスお好み焼き800円とねぎ100円、豚玉、ミックス焼きそば、いんげん入りのお好み焼き、砂肝、ビール、飲み物込みで1,000円、昭和の雰囲気、観光地価格ではない。',
      confidence: 'medium', sources: [TB, R + 'B526109667/', R + 'B527680181/', R + 'B528121261/', R + 'B536750910/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Homely and cheap; PayPay accepted.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区下弁天町58-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (34.999353, 135.777968); cross-checked: GSI 京都府京都市東山区下弁天町58番地 (lot) 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B526109667/'],
    price_note: 'Prices from an April 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Mixed okonomiyaki', '¥800', 'Okonomiyaki', 'no', 'no', 'April 2026.', 'mix'),
      it('', '', 'Green-onion topping', '¥100', 'Toppings', '', '', 'April 2026.', 'negi'),
      it('豚玉', 'butatama', 'Pork okonomiyaki', '', 'Okonomiyaki', 'no', 'no', 'May 2026.', 'butatama'),
      it('ミックス焼きそば', 'mikkusu yakisoba', 'Mixed yakisoba', '', 'Yakisoba', 'no', 'no', 'May 2026.', 'yakisoba'),
    ] }, {
    cuisine: '昭和の雰囲気の店で地元価格のお好み焼きと焼きそば (2026年の口コミ)・ミックスお好み焼き800円、ねぎトッピング100円 (2026年4月)・豚玉、ミックス焼きそば (2026年5月)・いんげん入りのお好み焼き、砂肝、ビール (2026年7月)・飲み物込みで1人約1,000円 (2026年4月)',
    neighborhood: '高台寺と清水の間の東山。京阪祇園四条から徒歩10分',
    gf_detail: 'グルテンフリーではない。お好み焼きと焼きそば (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。豚玉、ミックスのお好み焼きと焼きそば、砂肝 (2026年の口コミ)。',
    notes: '[お好み焼き・高台寺近くの東山、店主が一人で] 高台寺と清水の間の静かな路地にある、昭和の雰囲気の家庭的なお好み焼き屋。明るい店主が一人で営み、ミックスは800円から、豚玉や焼きそばも観光地価格ではない。火曜定休。',
  });
}

// ================================================================ 温石 左近太郎 本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26002088/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['11:30', '15:00'], ['17:00', '22:00']); const SU = day(['11:30', '15:00'], ['17:00', '21:00']);
  put({
    id: 'kyoto_onjaku_sakontaro_honten', name: '温石 左近太郎 本店 (Onjaku Sakontaro)', category: 'OMNI',
    lat: 35.011966, lng: 135.770765, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto kaiseki courses with hot pots, seasonal fish, Wagyu and Kyoto vegetables; no gluten information (Tabelog; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kaiseki of fish, black Wagyu and hot pots in dashi (Tabelog; 2025–2026 reviews).',
    hours_raw: 'Monday, Thursday–Saturday and days before holidays 11:30–15:00 and 17:00–22:00; Sunday and holidays 11:30–15:00 and 17:00–21:00; closed Tuesday and Wednesday, though it may open on request (Tabelog). Lunch by reservation only, weekday limited lunches (Tabelog). Cards; no e-money or QR (Tabelog). 56 seats in private rooms for 2 to 30, renovated from a century-old ryokan (Tabelog; January 2026). Down a long corridor from an alley off Kiyamachi by the Takase river, north of Oike, 3 min from Kyoto Shiyakusho-mae (Tabelog; 2025 reviews).',
    hours: { 0: WK, 3: WK, 4: WK, 5: WK, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kamikiyamachi north of Oike, by the Takase — 3 min from Kyoto Shiyakusho-mae',
    cuisine: 'Kyoto kaiseki of seasonal fish, black Wagyu and Kyoto vegetables in a machiya renovated from a century-old ryokan (Tabelog) · courses ¥8,000–11,000 on Tabelog · a rich mushroom hot pot (September 2025) · seasonal courses for celebrations and business dinners in private rooms (2025–2026) · all-you-can-drink with four sakes incl. Eikun; corn rice to finish (August 2026)',
    website: null, gmaps: gm('温石 左近太郎 本店'), menu_url: TB + 'dtlmenu/',
    notes: '[Kyoto kaiseki · Kamikiyamachi, a former ryokan] A calm kaiseki house reached down a long corridor off Kiyamachi, in a century-old former ryokan by the Takase river, with private rooms for 2 to 30: seasonal fish, black Wagyu and Kyoto vegetables in courses of about ¥8,000–11,000, and sake plans for groups. Closed Tuesday and Wednesday. Flagged: tied to the たん熊北店 group per a review.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Tabelog’s invoice number T8130001026429 is registered to 株式会社左近太郎 of Sakyo-ku (NTA register). A January 2026 reviewer says the restaurant belongs to the same group as 熊魚菴 たん熊北店. Reviewers praise well-timed, polite service (July 2025, August 2026).',
      philosophy: null, specialty: 'Kyoto kaiseki.',
      anecdotes: [
        { text: 'A July 2025 guest was led down a long corridor to a calm upstairs room hung with a Gion Matsuri decoration.', source: R + 'B509963482/' },
        { text: 'A September 2025 family drank every drop of the rich mushroom hot-pot broth.', source: R + 'B513594570/' },
      ],
      japanese_sources_summary: '食べログ: 温石 左近太郎 本店、日本料理・海鮮・鍋、中京区木屋町御池上ル樵木町494-1、地下鉄京都市役所前駅2番出口から徒歩3分、月・木〜土・祝前日 11:30〜15:00、17:00〜22:00、日・祝日 11:30〜15:00、17:00〜21:00、火・水定休 (応相談)、昼は予約のみ、カード可、56席、個室あり、築100年の元旅館を改装した京町家、鮮魚、黒毛和牛、京野菜、コース8,000〜11,000円、適格請求書 T8130001026429 (株式会社左近太郎)。口コミ (2025〜2026年、英語): 長い通路、2階の個室、祇園祭の飾り、茸の鍋、熊魚菴 たん熊北店と同じグループ、2〜30名の個室、接待や祝いの席、英勲など4種の日本酒の飲み放題、締めのとうもろこしご飯。',
      confidence: 'medium', sources: [TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=8130001026429', R + 'B509963482/', R + 'B513594570/', R + 'B517449336/', R + 'B523057746/', R + 'B523361578/', R + 'B525309498/', R + 'B529579244/', R + 'B531657724/', R + 'B534198021/', R + 'B534215465/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Private rooms; lunch by reservation.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区木屋町御池上ル樵木町494-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.011966, 135.770765); GSI could place only the ward; OSM reverse gives 木屋町通, 西生洲町, not 樵木町 — kept the Tabelog point, marked approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Course prices from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Kaiseki course', '¥8,000–11,000', 'Courses', 'ask', 'no', 'Tabelog.', 'course'),
      it('', '', 'Mushroom hot pot (in course)', '', 'Courses', 'ask', 'no', 'September 2025.', 'kinoko'),
    ] }, {
    cuisine: '築100年の元旅館を改装した京町家で、鮮魚、黒毛和牛、京野菜の京懐石 (食べログ)・食べログのコースは8,000〜11,000円・濃い出汁の茸の鍋 (2025年9月)・個室での祝いや接待の季節のコース (2025〜2026年)・英勲など4種の日本酒の飲み放題、締めのとうもろこしご飯 (2026年8月)',
    neighborhood: '御池の北の上木屋町、高瀬川沿い。京都市役所前から徒歩3分',
    gf_detail: '要確認。鍋、旬の魚、和牛、京野菜の京懐石。グルテンの情報はない (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。魚、黒毛和牛、出汁の鍋の会席 (食べログ、2025〜2026年の口コミ)。',
    notes: '[京懐石・上木屋町、元旅館] 木屋町の路地から長い通路を進む、高瀬川沿いの築100年の元旅館。2〜30名の個室で、旬の魚、黒毛和牛、京野菜のコース (約8,000〜11,000円)、団体には日本酒のプランも。火・水定休。口コミではたん熊北店のグループ (要確認)。',
  });
}

save();
