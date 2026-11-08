// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 67.
//   + 深夜喫茶/ホール 多聞 Tamon (late-night kissa and event hall, Kiyamachi-Sanjo B1; rest)
//   + 祇をん きらら Gion Kirara (obanzai lunches and Kyoto cuisine on Hanamikoji; rest)
//   + かじ正 Kajisho (Japanese cuisine, Gion south side; rest)
//   + 祇園 羽場 Gion Haba (Omi beef sukiyaki and shabu-shabu with yoshoku, Gion Kiyomoto-cho; rest)
//   Rest list (mod 6 = 1) after batch 66, nearest-first — skipped:
//   - 世界の山ちゃん 三条木屋町店 26017069: chain (nine 世界の山ちゃん shops in our crawls; a Tabelog name search lists eight more in Nagoya).
//   - カプリチョーザ 河原町VOX店 26002417: chain (Tabelog name search lists Capricciosa shops in Osaka, Kawasaki, Makuhari, Saitama, Tokyo, Kobe and more).
//   - 錦 ゆしん 26037109: no review dated 2025–26 (latest May 2023).
//   - 串カツ田中 三条木屋町店 26031253: chain (six 串カツ田中 shops in our crawls; ユニシアホールディングス, same call as 26041554).
//   - 麩屋柳緑 26035891: Tabelog lists no hours and its website (ryu-ryoku.kyoto) did not respond on 2026-11-07; flagged for a revisit.
//   - 焼肉 弘商店 四条高倉 26023225: chain (弘 group, same call as 26016840 / 26034639).
//   - ぎをんまんざら 26000959: chain (まんざら, five or more shops; same call as 26000954 / 26000898).
//   Brand check: queue-status.jsonl grepped for 多聞, きらら, かじ正, 羽場 — no earlier skip or done entries. 多聞's site
//   (tamon-kyoto.com/about, read 2026-11-07) names two sister shops (深夜喫茶しんしんしん, アスタルテ書茶房) run by the same company —
//   a small group, drafted; neither is in data. None of the four is in data/kyoto.json (main 4f1d86c1) by name or address.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-67');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260301/26017069/', 'chain: 世界の山ちゃん — nine shops in our crawls (Kyoto, Tokyo, Osaka) and a Tabelog name search (2026-11-07) lists eight more in Nagoya');
skip('https://tabelog.com/en/kyoto/A2601/A260301/26002417/', 'chain: カプリチョーザ (Capricciosa) — a Tabelog name search (2026-11-07) lists shops in Osaka, Kawasaki, Makuhari, Saitama, Okachimachi, Kobe, Shisui and Shibuya');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26037109/', 'no review dated 2025–26: the newest Tabelog reviews are from May 2023');
skip('https://tabelog.com/en/kyoto/A2601/A260301/26031253/', 'chain: 串カツ田中 — six shops in our crawls; ユニシアホールディングス brand (same call as 26041554)');
skip('https://tabelog.com/en/kyoto/A2601/A260202/26035891/', 'tea shop and café (Minamiyamashiro village tea, 2F counter sweets): Tabelog lists no hours and its website ryu-ryoku.kyoto did not respond on 2026-11-07; one October 2025 review says it is run by the team behind kabura (kyoto_kabura_takoyakushi) — revisit when hours can be sourced');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26023225/', 'chain: 焼肉 弘商店 — 弘 group (yakiniku-hiro.com lists eight 京の焼肉処 弘 shops plus 弘商店 shops); same call as 26016840 and 26034639');
skip('https://tabelog.com/en/kyoto/A2601/A260301/26000959/', 'chain: まんざら — five or more shops in the Kyoto crawl; same call as 26000954 and 26000898');

// ================================================================ 深夜喫茶/ホール 多聞 Tamon
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26040979/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://tamon-kyoto.com/about/';
  const N = day(['18:00', '26:30']); const E = day(['12:00', '26:30']);
  put({
    id: 'kyoto_shinya_kissa_tamon', name: '深夜喫茶/ホール 多聞 (Tamon)', category: 'OMNI',
    lat: 35.008264152921285, lng: 135.77067812387233, cuisine_type: 'kissaten',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: cakes, toast, Neapolitan pasta and hot sandwiches (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee, tea, herbal tea and some cocktails are plant-based; the cakes, sandwiches and lattes contain dairy or egg (2026 reviews).',
    hours_raw: 'Monday and Wednesday–Friday 18:00–2:30; Saturday and Sunday 12:00–2:30; closed Tuesday (Tabelog). A shop notice quoted in an August 2026 review gives 18:00–3:00, weekends and holidays from 12:00. One drink per person (March 2026). Tabelog lists reservations as accepted; the shop notice in the August 2026 review says no reservations. Cards, e-money and QR (Tabelog). 75 seats at counter, tables and sofas; up to 120 for events; a reading room (Tabelog; 2026 reviews). Non-smoking (Tabelog), with a smoking area at the back (August 2026). Self-service water; weak phone signal and no Wi-Fi in the basement (2026 reviews). B1 of the Kyoto Golden Building on Kiyamachi; 4 min walk from Keihan Sanjo Stn (Tabelog; August 2026). Opened 21 March 2024 (Tabelog).',
    hours: { 0: N, 2: N, 3: N, 4: N, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi, just south of Sanjo — basement',
    cuisine: 'Late-night kissa and sometimes event hall (official site) · coffee and tea from ¥800, blend coffee ¥800, iced coffee ¥650–850, rum chai, hot ginger, cocoa, Wiener coffee; beer and highballs from ¥900, gin and tonic, coffee-vodka tonic (official site; 2026 reviews) · gâteau chocolat with liqueur ¥720, spiced cheesecake ¥750, lemon pound cake ¥700, night parfait ¥1,450, anko butter toast ¥600, Neapolitan pasta, tuna melt sandwich, cookies to take away (official site; 2026 reviews) · about ¥1,000–2,000 (Tabelog)',
    website: 'https://tamon-kyoto.com/', gmaps: gm('深夜喫茶 多聞 木屋町'), menu_url: null,
    notes: '[Late-night kissa · Kiyamachi-Sanjo, basement, to 2:30] A big, retro basement café of lace tablecloths, wood and sofas that stays open until 2:30 a.m.: coffee, rum chai and cocktails with spiced cheesecake, gâteau chocolat or a night parfait. A reading room, events on some nights. One drink each. Phone signal is weak downstairs. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per the official site: a night café that is sometimes an event hall, named 多聞 as a place to listen to music, words, conversation and many other sounds; its sister shops are the late-night café しんしんしん in Kitashirakawa and アスタルテ書茶房 at Sanjo-Gokomachi. Opened 21 March 2024 (Tabelog).',
      philosophy: 'A place to listen to the many sounds that resonate together (official site).', specialty: 'Spiced cheesecake; late-night coffee.',
      anecdotes: [
        { text: 'A September 2026 student says that during the previous year a visit here after a part-time job came about three times a week, and that getting a seat is a gamble, easier early in the evening.', source: R + 'B535730002/' },
        { text: 'An April 2026 visitor left after 25 minutes because the basement had no phone signal, despite loving the room.', source: R + 'B526519524/' },
        { text: 'A July 2026 guest found the place through a feature in a free Keihan magazine and enjoyed the Neapolitan pasta.', source: R + 'B532788024/' },
      ],
      japanese_sources_summary: '公式サイト: 夜の喫茶店、ときどきイベントホール、音楽や言葉や話し声などさまざまな音に耳を傾ける場所として「多聞」と名づけた、中京区材木町175 京都ゴールデンビル B1、最寄りは京阪三条駅・阪急京都河原町駅、珈琲・紅茶800円から、洋酒入りガトーショコラ、ナポリタン、ビール・ハイボール900円から、ハーブティー、ラムココア、姉妹店は深夜喫茶しんしんしん (左京区北白川久保田町) とアスタルテ書茶房 (中京区三条御幸町)。食べログ: 喫茶店、月・水〜金 18:00〜翌2:30、土・日 12:00〜翌2:30、火曜休み、予約可、カード・電子マネー・QR 可、75席 (カウンター・テーブル・ソファ、イベント時は最大120名)、禁煙、2024年3月21日開店。口コミ (2026年3月〜11月、英語): ワンドリンク制、スパイスチーズケーキ750円、ガトーショコラ720円、レモンパウンドケーキ700円、夜パフェ1,450円、あんバタートースト600円、ラムチャイ、ブレンドコーヒー800円、ツナのホットサンド、読書室、奥に喫煙所、地下で電波が弱く Wi-Fi はない、予約不可との店の案内 (2026年8月)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B525592138/', R + 'B526519524/', R + 'B529908112/', R + 'B530528230/', R + 'B532476910/', R + 'B532788024/', R + 'B534758190/', R + 'B535730002/', R + 'B537024099/', R + 'B538619620/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One drink each; weak phone signal; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区材木町175 京都ゴールデンビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews through November 2026.' },
    pin_source: `Tabelog ${TB} (35.008264, 135.770678); cross-checked: GSI 京都府京都市中京区材木町175番地 (lot) 7 m; nearest existing record 20.3 m (kyoto_cordon_noir_kiyamachi); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525592138/', R + 'B538619620/'],
    price_note: 'Prices from March and November 2026 reviews, tax included.', last_checked: TODAY, items: [
      it('', '', 'Spiced cheesecake', '¥750', 'Sweets', 'no', 'no', 'March 2026; limited.', 'cheesecake'),
      it('', '', 'Night parfait', '¥1,450', 'Sweets', 'ask', 'no', 'March 2026.', 'parfait'),
      it('', '', 'Hot blend coffee', '¥800', 'Drinks', 'gf', 'vegan', 'November 2026.', 'coffee'),
    ] }, {
    cuisine: '深夜の喫茶店、ときどきイベントホール (公式サイト)・珈琲・紅茶800円から、ブレンドコーヒー800円、アイスコーヒー650〜850円、ラムチャイ、ホットジンジャー、ココア、ウインナーコーヒー、ビールとハイボール900円から、ジントニック、コーヒーウォッカトニック (公式サイト、2026年の口コミ)・洋酒入りガトーショコラ720円、スパイスチーズケーキ750円、レモンパウンドケーキ700円、夜パフェ1,450円、あんバタートースト600円、ナポリタン、ツナのホットサンド、持ち帰りのクッキー (公式サイト、2026年の口コミ)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '三条のすぐ南の木屋町、地下',
    gf_detail: 'グルテンフリー不可。ケーキ、トースト、ナポリタン、ホットサンド (2026年の口コミ)。',
    vegan_detail: '要確認。ブラックコーヒー、紅茶、ハーブティー、一部のカクテルは植物性。ケーキ、サンド、ラテには乳製品や卵 (2026年の口コミ)。',
    notes: '[深夜喫茶・木屋町三条、地下、深夜2時半まで] レースのテーブルクロスと木とソファのレトロで広い地下の喫茶で、深夜2時半まで営業。コーヒー、ラムチャイ、カクテルにスパイスチーズケーキ、ガトーショコラ、夜パフェ。読書室もあり、夜によってはイベントも。ワンドリンク制。地下は電波が弱い。火曜休み。',
  });
}

// ================================================================ 祇をん きらら Gion Kirara
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001367/'; const R = TB + 'dtlrvwlst/'; const WEB = 'http://www.gion-kirara.jp/';
  const H = day(['11:30', '15:00'], ['17:30', '21:00']);
  put({
    id: 'kyoto_gion_kirara', name: '祇をん きらら (Gion Kirara)', category: 'OMNI',
    lat: 35.00198361787621, lng: 135.77476333032146, cuisine_type: 'obanzai',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: tempura with every lunch set, nama-fu, red miso soup and soy-based obanzai (official site; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based obanzai, fish, duck and beef (official site; 2026 reviews).',
    hours_raw: 'Daily 11:30–15:00 (last order 14:00) and 17:30–21:00 (last order 19:30); closing days vary (Tabelog). Reservations accepted and advised; walk-ins without a booking may be sent to queue for a second lunch seating around 12:30 (April and June 2026). Table charge of ¥1,100 incl. tax per person for dinner à la carte only (Tabelog original ディナーのアラカルトのお客様にのみテーブルチャージ料税込1,100円（お一人あたり）). Cards (VISA, Master, JCB, AMEX, Diners) and QR (PayPay, au PAY, Alipay, WeChat Pay); no e-money (Tabelog). 24 seats: a red-lacquered counter of 10, 10 at tables and a sunken-kotatsu table for 4 (official site; Tabelog). Non-smoking; wheelchair accessible; English menu; children welcome (Tabelog). On Hanamikoji, about 5 min south of Shijo (official site). Opened 1 July 2005 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Hanamikoji, south of Shijo',
    cuisine: 'Kyoto cuisine built on obanzai of Kyoto-grown vegetables bought by the head chef, with fish and wagyu from around Japan (official site) · lunch: Irodori gozen ¥2,500 — a dozen-plus seasonal obanzai, tempura, salad, mixed rice and red miso soup on one big plate; Kirara gozen ¥3,500 adds sashimi, grilled fish and yuba (official site; June and August 2026) · dinner courses ¥8,800 (8 dishes), ¥13,200 (9) and ¥16,500 (10), tax incl.; à la carte such as tai-meshi, duck loin, kinmedai simmered, tempura, roast beef (official site; 2026 reviews) · lunch about ¥2,000–4,000, dinner about ¥8,000–10,000 (Tabelog)',
    website: WEB, gmaps: gm('祇をん きらら 花見小路'), menu_url: WEB + 'menu/',
    notes: '[Obanzai and Kyoto cuisine · Hanamikoji] A Hanamikoji favourite for lunch: a big plate of a dozen-plus seasonal obanzai with tempura, salad and seasonal rice for ¥2,500, finished at a red-lacquered counter. Dinner brings Kyoto-vegetable courses and à la carte. Book for lunch — walk-ins queue. One reviewer notes an all-women team in the kitchen and on the floor.',
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed)', 'Cooks and staff'], origin: null,
      background: 'Per the official site: Kyoto cuisine in Gion of "miyako vegetables" grown by Kyoto farmers, bought by the head chef, with fish and wagyu from around the country; courses and à la carte. Opened 1 July 2005 (Tabelog). An August 2026 reviewer notes that all the staff, including the head chef, are women.',
      philosophy: 'Kyoto vegetables and seasonal fish, for courses or a few dishes with a drink (official site).', specialty: 'Irodori gozen obanzai lunch.',
      anecdotes: [
        { text: 'Two first-time diners over sixty in August 2026 had the standard ¥8,800 dinner course and noted that every member of staff, head chef included, is a woman.', source: R + 'B534676982/' },
        { text: 'An April 2026 lunch guest watched queuing walk-ins turned away at opening and told to return around 12:30, when bookings are not taken.', source: R + 'B526624293/' },
        { text: 'A July 2026 diner on the top course was disappointed by an over-salted soup, a sea urchin with an off taste and an overcooked chilled chawanmushi.', source: R + 'B532296935/' },
      ],
      japanese_sources_summary: '公式サイト: 花見小路の石畳を四条通から南へ約5分、京都の農家が育てた都野菜と旬の鮮魚を料理長が自ら仕入れる、おばんざいと一品料理とコース、朱塗りの一枚カウンター10席、テーブル10席、掘りごたつ4名1席、コース8,800円 (8品)・13,200円 (9品)・16,500円 (10品)、税込、彩御膳 (季節のおばんざい十数種類、天ぷら、旬野菜のサラダ、炊き込みご飯、赤出汁)、きらら御膳 (旬のお造り、季節の焼き魚、一品を加える)、鯛めし、鴨ロース、金目鯛の煮付け。食べログ: 日本料理・天ぷら・海鮮、東山区祇園町南側570-232、毎日 11:30〜15:00 (L.O.14:00)、17:30〜21:00 (L.O.19:30)、不定休、予約可、ディナーのアラカルトのみテーブルチャージ1,100円 (税込、一人あたり)、カード・QR 可、電子マネー不可、24席、禁煙、車椅子可、英語メニュー、子ども可、2005年7月1日開店。口コミ (2026年4月〜9月、英語): 彩御膳2,500円、きらら御膳3,500円、予約なしでは12時半ごろに並び直すよう言われたとの声、料理長を含め全員女性のスタッフ (2026年8月)、夜の8,800円のコース、混雑で料理が遅かったとの声 (2026年5月)、最上のコースで椀が塩辛い・雲丹・茶碗蒸しに不満との声 (2026年7月)。',
      confidence: 'medium', sources: [TB, WEB, WEB + 'menu/', R + 'B526624293/', R + 'B526842243/', R + 'B527388532/', R + 'B529267222/', R + 'B530863598/', R + 'B532296935/', R + 'B533360164/', R + 'B534676982/', R + 'B536245855/', R + 'B537355948/'] },
    cultural_comfort: { level: 'english', note: 'English menu; wheelchair accessible; book lunch ahead; ¥1,100 table charge for dinner à la carte only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町南側570-232',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.001984, 135.774763); GSI resolves 祇園町南側570-232 only to the 570 block point (192 m), which it gives for every 570 sub-lot, so the Tabelog pin is kept; nearest existing record 14.5 m (kyoto_obanzai_tsubomi_gion); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [WEB + 'menu/', R + 'B529267222/', R + 'B533360164/'],
    price_note: 'Course prices from the official site (tax incl.); lunch prices from June and August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Irodori gozen (obanzai lunch)', '¥2,500', 'Lunch', 'no', 'no', 'June 2026.', 'irodori'),
      it('', '', 'Kirara gozen (lunch with sashimi and grilled fish)', '¥3,500', 'Lunch', 'no', 'no', 'August 2026.', 'kirara_gozen'),
      it('', '', 'Dinner course (8 dishes)', '¥8,800', 'Courses', 'ask', 'no', 'Official site.', 'course8800'),
    ] }, {
    cuisine: '料理長が自ら仕入れる都野菜のおばんざいを中心に、全国の魚介や和牛の京料理 (公式サイト)・昼: 彩御膳2,500円 (季節のおばんざい十数種類、天ぷら、サラダ、炊き込みご飯、赤出汁を大皿で)、きらら御膳3,500円 (お造り、焼き魚、湯葉が加わる) (公式サイト、2026年6・8月)・夜のコース8,800円 (8品)・13,200円 (9品)・16,500円 (10品)、税込、一品は鯛めし、鴨ロース、金目鯛の煮付け、天ぷら、ローストビーフなど (公式サイト、2026年の口コミ)・昼2,000〜4,000円ほど、夜8,000〜10,000円ほど (食べログ)',
    neighborhood: '四条の南の花見小路',
    gf_detail: 'グルテンフリー不可。昼の御膳にはすべて天ぷら、生麩、赤出汁、醤油のおばんざい (公式サイト、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。だしのおばんざい、魚、鴨、牛肉 (公式サイト、2026年の口コミ)。',
    notes: '[おばんざいと京料理・花見小路] 花見小路の昼の人気店。季節のおばんざい十数種類に天ぷら、サラダ、季節のご飯を大皿に盛った2,500円の御膳を、朱塗りのカウンターで。夜は京野菜のコースや一品料理。昼は予約を、予約なしは並ぶことに。料理長を含め全員女性のスタッフだという口コミも。',
  });
}

// ================================================================ かじ正 Kajisho
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26029393/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://kajisho.com/';
  const H = day(['11:30', '13:00'], ['17:30', '22:00']);
  put({
    id: 'kyoto_kajisho', name: 'かじ正 (Kajisho)', category: 'OMNI',
    lat: 35.002696837070495, lng: 135.77514887916664, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Courses include Goto udon, tempura and croquettes, with soy and miso throughout; no gluten information (2022–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi, fish, duck and pork in every course (2022–2026 reviews).',
    hours_raw: 'Monday, Tuesday and Thursday–Sunday 11:30–13:00 (last order 13:00) and 17:30–22:00 (last order 21:00); closed Wednesday (Tabelog). Bookings through the official website; lunch if booked there by the day before (Tabelog; October 2026). Omakase courses ¥15,000 and ¥20,000, lunch ¥6,000 (official site). Cards (VISA, Master, JCB, AMEX, Diners) (Tabelog). 18 seats: counter and tatami rooms; private rooms (Tabelog; January 2024). Non-smoking (Tabelog). Gion south side, 5 min walk from Gion-Shijo Stn (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion south side, near Hanamikoji',
    cuisine: 'Seasonal Japanese cuisine in Gion; the signature is a fluffy dashimaki made with as much dashi as egg (official site; 2022–2026 reviews) · omakase courses ¥15,000 and ¥20,000, lunch ¥6,000 — sashimi, dashimaki, rice, soup and pickles; à la carte at night (official site; November 2025) · seasonal dishes such as matsutake and hamo dobin-mushi, ayu with roe, duck, ginkgo croquettes, white-miso soup in winter; Goto udon (2022–2026 reviews) · about ¥15,000–30,000 (Tabelog; 2024–2026 reviews)',
    website: WEB, gmaps: gm('かじ正 祇園'), menu_url: WEB,
    notes: '[Japanese cuisine · Gion south side] A warm, small Gion restaurant whose dashimaki — half egg, half dashi — draws regulars back, alongside seasonal courses with Goto udon and matsutake dobin-mushi in autumn. One reviewer says the owner is a former maiko; the team includes women cooks. Book on the website; lunch by the day before. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)', 'Head chef (unnamed)', 'Cooks'], origin: null,
      background: 'Per the official site: a Japanese restaurant on the south side of Gion, drawing out the flavour of seasonal ingredients, best known for its dashimaki. An October 2026 reviewer from the Gion Kobu hanamachi says the owner is a former maiko and praises the head chef and women cooks; a January 2024 reviewer says the owner is from Nagasaki; a July 2025 diner watched the knife work of a woman who has trained since a very young age.',
      philosophy: 'Seasonal dishes that bring out each ingredient quietly (official site).', specialty: 'Dashimaki; Goto udon.',
      anecdotes: [
        { text: 'An October 2026 party from the Gion Kobu hanamachi held a thank-you gathering for veteran geiko here, with matsutake dobin-mushi and second helpings of Goto udon.', source: R + 'B465392520/' },
        { text: 'A January 2024 first-time guest found the owner, from Nagasaki, warmly hospitable, and had the dashimaki made with equal parts egg and dashi.', source: R + 'B477650828/' },
        { text: 'A January 2022 diner, back in the snow, was seen off outside the door despite the cold.', source: R + 'B443427570/' },
      ],
      japanese_sources_summary: '公式サイト: 祇園の南側に佇む日本料理、季節の恵みと素材の持ち味を引き出す料理、ふんわりほどける出汁巻き玉子が看板、地酒、おまかせコース15,000円・20,000円、ランチ6,000円 (造り、出汁巻き、御飯・汁物・香物など)。食べログ: 日本料理、東山区祇園町南側570-127、月・火・木〜日 11:30〜13:00、17:30〜22:00 (L.O.21:00)、水曜休み、予約は公式サイトから、カード可、18席、個室あり、禁煙。口コミ (2020年12月〜2026年10月、英語): 卵と同量のだしの出汁巻き、Goto udon、松茸と鱧の土瓶蒸し、子持ち鮎、鴨、銀杏のコロッケ、冬の白味噌の椀、オーナーは元舞妓 (2026年10月)、長崎出身のオーナー (2024年1月)、女性の料理人、幼い頃から修行した女性の包丁さばき (2025年7月)、前日までに公式サイトで予約すれば昼も可。',
      confidence: 'medium', sources: [TB, WEB, R + 'B432407574/', R + 'B443427570/', R + 'B456132004/', R + 'B465392520/', R + 'B477650828/', R + 'B480953619/', R + 'B509829795/', R + 'B517719856/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book on the website; small Gion counter and tatami rooms; cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町南側570-127',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002697, 135.775149); GSI resolves 祇園町南側570-127 only to the 570 block point (144 m), so the Tabelog pin is kept; kyoto_gion_iwamoto (same lot 570-127) is 5.4 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [WEB],
    price_note: 'Prices from the official site (read 2026-11-07).', last_checked: TODAY, items: [
      it('', '', 'Lunch course', '¥6,000', 'Courses', 'ask', 'no', 'Official site; book by the day before.', 'lunch'),
      it('', '', 'Omakase course', '¥15,000', 'Courses', 'ask', 'no', 'Official site.', 'omakase15000'),
      it('', '', 'Omakase course', '¥20,000', 'Courses', 'ask', 'no', 'Official site.', 'omakase20000'),
    ] }, {
    cuisine: '祇園の季節の日本料理。卵と同じくらいのだしを使うふんわりした出汁巻き玉子が看板 (公式サイト、2022〜2026年の口コミ)・おまかせコース15,000円・20,000円、ランチ6,000円 (造り、出汁巻き、御飯・汁物・香物など)、夜は一品料理も (公式サイト、2025年11月)・松茸と鱧の土瓶蒸し、子持ち鮎、鴨、銀杏のコロッケ、冬の白味噌の椀、Goto udonなど季節の料理 (2022〜2026年の口コミ)・15,000〜30,000円ほど (食べログ、2024〜2026年の口コミ)',
    neighborhood: '祇園の南側、花見小路のそば',
    gf_detail: '要確認。コースにGoto udon、天ぷら、コロッケ。醤油と味噌を使う。グルテンの情報はない (2022〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。どのコースにもだし、魚、鴨、豚肉 (2022〜2026年の口コミ)。',
    notes: '[日本料理・祇園の南側] 卵とだしが半々の出汁巻きを目当てに常連が通う、あたたかな小さい祇園の店。季節のコースにはGoto udon、秋は松茸の土瓶蒸し。オーナーは元舞妓との口コミも (2026年10月)。女性の料理人も。予約は公式サイトから、昼は前日までに。水曜休み。',
  });
}

// ================================================================ 祇園 羽場 Gion Haba
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26031499/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'kyoto_gion_haba', name: '祇園 羽場 (Gion Haba)', category: 'OMNI',
    lat: 35.00543469787402, lng: 135.7747718503563, cuisine_type: 'sukiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: sukiyaki in a soy-based sauce with wheat gluten and udon, and breaded yoshoku — shrimp fry, beef cutlet, croquettes (2023–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an Omi beef sukiyaki and shabu-shabu house with beef-bone broth (Tabelog; 2023–2026 reviews).',
    hours_raw: 'Monday–Saturday 18:00–23:00; closed Sunday and holidays (Tabelog). Reservations accepted and advised (Tabelog; October 2023). Appetizer charge ¥800 (Tabelog original お通し800円). Cards (VISA, Master, JCB, AMEX, Diners); no e-money (Tabelog). 28 seats: 8 at the first-floor counter and two connecting private rooms upstairs, up to 20 (Tabelog). Smoking allowed (Tabelog). Take-away Omi beef fillet cutlet sandwich ¥4,500 and shrimp sandwich ¥3,000 (Tabelog). Down a narrow alley south of Tatsumi-bashi, through the Mame Roku building; 5 min walk from Gion-Shijo Stn (Tabelog). Opened 18 April 2018 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, alley south of Tatsumi-bashi',
    cuisine: 'Sukiyaki and shabu-shabu of A5 Omi beef, with yoshoku (Tabelog) · sukiyaki cooked in the back and brought simmering, finished with udon or rice; shabu-shabu in a beef-bone broth; beef tataki (Tabelog; 2023–2026 reviews) · jumbo natural shrimp fry with house mayonnaise, beef cutlet, crab cream croquette, omurice, fried rice; Omi beef fillet cutlet sandwich to take away ¥4,500 (Tabelog; 2023–2026 reviews) · about ¥10,000–20,000 (Tabelog; 2023–2026 reviews)',
    website: null, gmaps: gm('祇園 羽場'), menu_url: null,
    notes: '[Sukiyaki and shabu-shabu · Gion, Tatsumi-bashi alley] A hidden alley house where a friendly couple serve A5 Omi beef as sukiyaki, cooked for you and kept simmering, or shabu-shabu in beef-bone broth — plus jumbo shrimp fry and a beef cutlet sandwich. Counter downstairs, private rooms upstairs. Smoking allowed. ¥800 appetizer. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Chef (husband)', 'Proprietress (wife, former geiko)'], origin: null,
      background: 'Per Tabelog: opened 18 April 2018 in a narrow alley off Tatsumi-bashi, serving A5 Omi beef shabu-shabu and sukiyaki through special sourcing, with yoshoku such as giant natural shrimp fry and beef cutlet sandwiches. Reviewers in 2023–2026 describe a friendly couple; a January 2026 guest says the wife is a former geiko.',
      philosophy: 'Handmade dishes, careful from ingredients to seasonings (Tabelog).', specialty: 'Omi beef sukiyaki; jumbo shrimp fry.',
      anecdotes: [
        { text: 'A January 2026 guest describes a couple running the room: the wife, a former geiko, with a refined presence, and the husband easy to talk to; ten or so whiskies lined up for highballs.', source: R + 'B521300904/' },
        { text: 'A September 2025 diner appreciated that the sukiyaki is served ready-cooked rather than left to guests.', source: R + 'B513379590/' },
        { text: 'An October 2023 first-time pair arrived at opening and were warmly welcomed by the chef and proprietress, both plainly devoted to regulars.', source: R + 'B472735786/' },
      ],
      japanese_sources_summary: '食べログ: しゃぶしゃぶ・すき焼き・洋食、東山区清本町374-9、巽橋の通りの南の細い路地、ビルの通路を抜けた先、京阪祇園四条駅から徒歩5分、月〜土 18:00〜23:00、日・祝休み、予約可、お通し800円、カード可、電子マネー不可、28席 (1階カウンター8席、2階個室2室で最大20名)、喫煙可、テイクアウトあり (近江牛ヒレカツサンド4,500円、海老サンド3,000円)、2018年4月18日開店、A5ランクの近江牛のしゃぶしゃぶとすき焼き、天然の特大海老フライ。口コミ (2022年11月〜2026年1月、英語): 奥で仕上げて運ばれるすき焼き、締めはうどんかご飯、牛骨のだしのしゃぶしゃぶ、牛のたたき、オムライス、焼き飯、カニクリームコロッケ、ビーフカツ、自家製マヨネーズ、気さくな夫婦の店、奥さんは元芸妓 (2026年1月)、喫煙の客が多かった日も (2022年11月)。',
      confidence: 'medium', sources: [TB, R + 'B456891790/', R + 'B461620031/', R + 'B462373555/', R + 'B472735786/', R + 'B475397089/', R + 'B477497915/', R + 'B481267283/', R + 'B507479164/', R + 'B513379590/', R + 'B521300904/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hidden alley; book ahead; smoking allowed; ¥800 appetizer; cards.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区清本町374-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through January 2026.' },
    pin_source: `Tabelog ${TB} (35.005435, 135.774772); cross-checked: GSI 京都府京都市東山区清本町374番地 (lot) 10 m; nearest existing record 7.0 m (kyoto_gion_daiki, 374-4); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Take-away and appetizer prices from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Omi beef sukiyaki', '', 'Hot pot', 'no', 'no', '2023–2026 reviews.', 'sukiyaki'),
      it('', '', 'Omi beef fillet cutlet sandwich (take-away)', '¥4,500', 'Take-away', 'no', 'no', 'Tabelog.', 'katsusand'),
      it('', '', 'Appetizer charge', '¥800', 'Charge', 'ask', 'no', 'Tabelog.', 'otoshi'),
    ] }, {
    cuisine: 'A5ランクの近江牛のすき焼きとしゃぶしゃぶ、それに洋食 (食べログ)・奥で仕上げて煮えたまま運ばれるすき焼き、締めはうどんかご飯、牛骨のだしのしゃぶしゃぶ、牛のたたき (食べログ、2023〜2026年の口コミ)・自家製マヨネーズの天然特大海老フライ、ビーフカツ、カニクリームコロッケ、オムライス、焼き飯、持ち帰りの近江牛ヒレカツサンド4,500円 (食べログ、2023〜2026年の口コミ)・10,000〜20,000円ほど (食べログ、2023〜2026年の口コミ)',
    neighborhood: '祇園、巽橋の南の路地',
    gf_detail: 'グルテンフリー不可。醤油の割下に麩やうどんのすき焼き、海老フライ、ビーフカツ、コロッケなど衣の洋食 (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。牛骨のだしの近江牛のすき焼きとしゃぶしゃぶの店 (食べログ、2023〜2026年の口コミ)。',
    notes: '[すき焼きとしゃぶしゃぶ・祇園、巽橋の路地] 路地奥の隠れ家で、気さくな夫婦が A5 の近江牛を、仕上げて煮えたまま出すすき焼きや牛骨だしのしゃぶしゃぶで。特大の海老フライやビーフカツサンドも。1階はカウンター、2階は個室。喫煙可。お通し800円。日曜休み。',
  });
}

save();
