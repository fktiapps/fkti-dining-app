// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 69.
//   + Wine Bar Verite (seven-seat Burgundy and aged-wine bar with a walk-in cellar, Gion) — rest
//   + ぎをん桃庭 Gion Taotei (additive-free "zashiki Chinese" in a 1917 Hanamikoji teahouse) — rest
//   + 河原町焼肉ホルモン安東 Kawaramachi Yakiniku Horumon Ando (wagyu and horumon yakiniku above Rokuyosha) — rest
//   + 鉄板とお酒 宗や Teppan to Osake Souya (teppan izakaya with a big sake list, open to 3 am, Kawaramachi Matsubara) — rest
//   - skip 26044978 DRINK DRANK 京都六角通り店 (Kyoto outpost of a Nara-based multi-venue group)
//   - skip 26037940 みっふぃーおやつ堂 祇園店 (chain: six shops on Tabelog)
//   Rest tier, nearest-first from `next rest 2000`. queue-status.jsonl grepped for each brand (みっふぃー/ミッフィー, Verite, 桃庭,
//   DRINK DRANK, 安東, 宗や): no earlier rulings.
//   Same-name counts first (2026-11-07): Wine Bar Verite — one.
//   ぎをん桃庭 — one (official site lists no other). ホルモン安東 — four, all in Kyoto (本店, 河原町, 東山, 山科; yakiniku-ando.com),
//   under five, so drafted. DRINK DRANK — four (Nara 三条本店, Nara ぽちたまカフェ, Kyoto 清水産寧坂, Kyoto 六角通り; drinkdrank.com,
//   lemongumi Inc.), based in Nara — skipped on the footing of the ITOH DINING ruling (osw6-67), flagged for the coordinator.
//   鉄板とお酒 宗や — one. None of the drafted four is in data/kyoto.json.
//   Charges per Tabelog's Japanese original: 桃庭 「サービス料10％」; 安東 「なし」; Verite and 宗や none listed. No halal claims; no owner
//   deaths; single-review remarks about other diners and staff looks left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-69');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26037940', 'chain: みっふぃーおやつ堂 — Tabelog lists Gion, Otaru, Kamakura, Dazaifu, Hida-Takayama and Ise shops (https://tabelog.com/en/rstLst/?sw=%E3%81%BF%E3%81%A3%E3%81%B5%E3%81%83%E3%83%BC%E3%81%8A%E3%82%84%E3%81%A4%E5%A0%82).');
skip('26044978', 'non-local multi-venue group: DRINK DRANK is run from Nara (lemongumi Inc.; Nara Sanjo main shop since 1999 and Pochitama Cafe) with two Kyoto outposts, Kiyomizu Sanneizaka and this Rokkaku-dori shop opened May 2026 — same footing as the ITOH DINING ruling (https://www.drinkdrank.com/; https://tabelog.com/en/kyoto/A2601/A260202/26044978/).');

// ================================================================ Wine Bar Verite
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26040850/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '02:00']);
  put({
    id: 'kyoto_wine_bar_verite_gion', name: 'Wine Bar Verite', category: 'OMNI',
    lat: 35.005035, lng: 135.77458, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A wine bar; the sources mention no food at all.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A wine bar; the sources mention no food, and no information on fining agents in the wines.',
    hours_raw: 'Mon–Sat and holidays 18:00–2:00; closed Sunday (Tabelog). Reservations accepted (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 7 counter seats; whole-bar hire for up to 20 (Tabelog). Smoking room inside (Tabelog). Over-18s only (Tabelog). Sommelier (Tabelog). Kiritoshi Building 3F, Kiyomotocho, 5 min from Gion-Shijo (Tabelog). Opened 3 February 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion Kiyomotocho — Gion-Shijo',
    cuisine: 'Wine bar with a large walk-in cellar of wines from around the world, including old vintages (Tabelog) · Burgundy and Champagne picked by the owner (June and August 2025) · Burgundy collection in the walk-in cellar (July 2025) · aged wines as a speciality (August 2026)',
    website: null, gmaps: gm('Wine Bar Verite 祇園'), menu_url: TB,
    notes: '[Wine bar · Gion, since 2024] A seven-seat, wood-lined counter bar on a third floor in Gion with a glass-walled walk-in cellar, run by a young Kyoto-born owner with deep Burgundy knowledge. Champagne, Burgundy and old vintages by recommendation, until 2:00. Reviewers spend ¥10,000 and up. Over-18s only; closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner and sommelier (unnamed); born and raised in Kyoto (June 2025)'], origin: 'Kyoto (June 2025)',
      background: 'Per a June 2025 review: the young owner, born and raised in Kyoto, previously worked at the Gion Kenzo Estate Winery. Opened February 2024 (Tabelog).',
      philosophy: null, specialty: 'Burgundy and aged wines.',
      anecdotes: [
        { text: 'A June 2025 visitor found the owner a little shy but open about a love of Burgundy.', source: R + 'B508918148/' },
        { text: 'A July 2025 visitor enjoyed the owner’s stories from first-hand wine experiences and wanted to stay longer.', source: R + 'B510514459/' },
        { text: 'An August 2026 guest could not follow the niche talk but stayed about six hours.', source: R + 'B534574376/' },
      ],
      japanese_sources_summary: '食べログ: ワインバー、東山区清本町364-5 切通しビル 3F、京阪祇園四条駅から徒歩5分、月〜土・祝18:00〜翌2:00、日曜休み、予約可、カード可、電子マネー・QR 不可、カウンター7席、貸切20名まで、店内に喫煙室、未成年不可、ソムリエ、2024年2月3日オープン、大きなウォークインセラーに世界のワインと古いヴィンテージ。口コミ (2025年6月〜2026年8月、英語): 京都生まれ京都育ちの若い店主は祇園の Kenzo Estate のワイナリーの出身、ブルゴーニュに詳しい、シャンパーニュ、熟成ワイン。',
      confidence: 'low', sources: [TB, R + 'B508918148/', R + 'B510514459/', R + 'B534574376/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Tell the owner what you like and a budget; bottles by recommendation. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区清本町364-5 切通しビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.004985, 135.774580), offset 5.6 m north: kyoto_gion_menya_rinrin is on 1F of the same building (4.6 m away); cross-checked: GSI 京都府京都市東山区清本町364番地 (lot) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No prices in the sources; reviewers report ¥10,000–39,999 per person.', last_checked: TODAY, items: [
      it('', '', 'Wine by recommendation (Burgundy, Champagne, aged vintages)', '', 'Wine', 'ask', 'ask', '2025–26 reviews.', 'wine'),
    ] }, {
    cuisine: '世界のワインと古いヴィンテージをそろえた大きなウォークインセラーのワインバー (食べログ)・店主が選ぶブルゴーニュとシャンパーニュ (2025年6月・8月)・セラーのブルゴーニュのコレクション (2025年7月)・熟成ワインが専門 (2026年8月)',
    neighborhood: '祇園清本町。祇園四条',
    gf_detail: '要確認。ワインバーで、料理の情報はない。',
    vegan_detail: '要確認。ワインバーで料理の情報はなく、ワインの清澄剤の情報もない。',
    notes: '[ワインバー・祇園、2024年から] 祇園のビル3階、木のぬくもりのカウンター7席と、ガラス張りのウォークインセラーのバー。ブルゴーニュに詳しい京都生まれの若い店主が、シャンパーニュ、ブルゴーニュ、古いヴィンテージを薦めてくれる。深夜2時まで。口コミでは1人1万円以上。未成年不可。日曜休み。',
  });
}

// ================================================================ ぎをん桃庭
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001478/'; const R = TB + 'dtlrvwlst/'; const SITE = 'http://gion-taotei.com/';
  const H = day(['11:30', '15:00'], ['17:30', '21:00']);
  put({
    id: 'kyoto_gion_taotei', name: 'ぎをん桃庭 (Gion Taotei)', category: 'OMNI',
    lat: 35.001957, lng: 135.774574, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: noodles and ramen to finish, sweet and sour pork, shrimp chili (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sweet and sour pork, shrimp chili, chicken and tofu stew, jellyfish (2025–26 reviews).',
    hours_raw: 'Tue–Sun 11:30–15:00 (last order 14:00) and 17:30–21:00 (last order 20:00); closed Monday and the second Sunday (the next day if that is a holiday); temporary closures announced on Instagram gion.taotei (official site; Tabelog gives dinner to 22:00 and lunch last order 13:30). Reservations accepted; walk-ins have been seated at lunch (Tabelog; June 2026). Service charge 10% (Tabelog, Japanese text: 「サービス料10％」). Cards, e-money and PayPay (Tabelog). 25 seats: a 5-seat counter and four tatami private rooms with Taisho-era craftsmanship; banquets to 20 (Tabelog). Non-smoking (Tabelog). Maiko can be invited by arrangement (Tabelog). On Hanamikoji, diagonally across from the Kaburenjo (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Hanamikoji, across from the Kaburenjo — Gion-Shijo',
    cuisine: '"Zashiki Chinese" — gentle Chinese cooking without chemical seasonings, served in the tatami rooms of a 1917 teahouse (Tabelog; official site) · sea bream carpaccio, jellyfish, tender chicken stew, shrimp chili, sweet and sour pork with a fruit-juice sauce, noodles and fried rice, almond jelly (November 2025) · ramen to finish (January 2026) · the chicken and tofu stew from Tanizaki\'s story, "Tanizaki soup", stir-fried broccoli rice, homemade almond tofu (January and May 2026) · yurinchi lunch set with ginger soup and mixed white and brown rice (June 2026) · additive-free sauces; almond tofu from real almond kernels (September 2026)',
    website: SITE, gmaps: gm('ぎをん桃庭'), menu_url: TB,
    notes: '[Chinese in a Gion teahouse · Hanamikoji] Gentle, additive-free Chinese cooking served in the tatami rooms of a 1917 Hanamikoji teahouse once frequented by the novelist Junichiro Tanizaki — a chicken and tofu stew from one of the stories, shrimp chili, fruit-sauced sweet and sour pork, and a celebrated homemade almond tofu. Lunch sets by day; maiko can be invited. 10% service; closed Monday.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null,
      background: 'Per Tabelog and the official site: a Chinese restaurant in a roughly 100-year-old machiya, opened as a teahouse in 1917 and frequented by the novelist Junichiro Tanizaki; the four private rooms keep Taisho-era craftsmanship.',
      philosophy: 'Healthy "zashiki Chinese" for every day, made without chemical seasonings (Tabelog).', specialty: 'Additive-free Chinese dishes; almond tofu.',
      anecdotes: [
        { text: 'A November 2025 family celebrated a grandchild’s first-meal ceremony in a large tatami room, beside a framed passage from a Tanizaki novel.', source: R + 'B517846170/' },
        { text: 'A June 2026 solo diner walked in at lunch and was a little overwhelmed to get a whole tatami room alone.', source: R + 'B529672504/' },
        { text: 'A September 2026 diner saw a Gion geiko playing shamisen during the evening.', source: R + 'B535428527/' },
      ],
      japanese_sources_summary: '食べログ・公式サイト: 中国料理、東山区祇園町南側570-120、花見小路の歌舞練場の斜め向かい、火〜日11:30〜15:00 (L.O. 14:00) と17:30〜21:00 (L.O. 20:00)、月曜と第2日曜休み、サービス料10%、カード・電子マネー・PayPay 可、25席 (カウンター5と個室4)、禁煙、舞妓を呼べる、1917年 (大正6年) のお茶屋だった築100年の町家、谷崎潤一郎が通った、化学調味料を使わない「座敷中華」。口コミ (2025年5月〜2026年9月、英語): 鯛のカルパッチョ、くらげ、鶏の煮込み、エビチリ、果汁の酢豚、締めの麺と炒飯とラーメン、谷崎の小説に出てくる鶏と豆腐の煮込み、ブロッコリーの炒飯、自家製の杏仁豆腐、油淋鶏のランチ、白米と玄米。',
      confidence: 'medium', sources: [TB, SITE, R + 'B506093200/', R + 'B517846170/', R + 'B521012601/', R + 'B521845181/', R + 'B528913753/', R + 'B529672504/', R + 'B535428527/', R + 'B535969409/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Tatami rooms; ask when booking about inviting a maiko. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町南側570-120',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.001957, 135.774574); cross-checked: GSI 京都府京都市東山区祇園町南側570番地 (lot) about 180m — a large lot, so approximate; shares the 570-120 address with kyoto_gion_kitazato (25 m apart); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529672504/', R + 'B517846170/'],
    price_note: 'No item prices in the sources; reviewers report about ¥3,000–3,999 at lunch and ¥10,000–29,999 at dinner; 10% service.', last_checked: TODAY, items: [
      it('', '', 'Yurinchi lunch set', '', 'Lunch', 'no', 'no', 'With ginger soup, rice and almond tofu; June 2026.', 'yurinchi_lunch'),
      it('', '', 'Homemade almond tofu', '', 'Dessert', 'ask', 'ask', 'November 2025; May and September 2026.', 'annin'),
      it('', '', 'Shrimp chili', '', 'Mains', 'no', 'no', 'November 2025; May 2026.', 'ebichili'),
      it('', '', 'Sweet and sour pork with fruit-juice sauce', '', 'Mains', 'no', 'no', 'November 2025.', 'subuta'),
    ] }, {
    cuisine: '築100年 (1917年) のお茶屋の座敷で、化学調味料を使わないやさしい「座敷中華」(食べログ、公式サイト)・鯛のカルパッチョ、くらげ、やわらかい鶏の煮込み、エビチリ、果汁のソースの酢豚、締めの麺と炒飯、杏仁豆腐 (2025年11月)・締めのラーメン (2026年1月)・谷崎の小説に出てくる鶏と豆腐の煮込み、Tanizaki スープ、ブロッコリーの炒飯、自家製の杏仁豆腐 (2026年1月・5月)・生姜のスープと白米と玄米の油淋鶏のランチ (2026年6月)・添加物を使わないソース、本物のアーモンドの杏仁豆腐 (2026年9月)',
    neighborhood: '花見小路、歌舞練場の向かい。祇園四条',
    gf_detail: 'グルテンフリーではない。締めの麺やラーメン、酢豚、エビチリ (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。酢豚、エビチリ、鶏と豆腐の煮込み、くらげ (2025〜2026年の口コミ)。',
    notes: '[お茶屋の中国料理・花見小路] 谷崎潤一郎が通った1917年の花見小路のお茶屋の座敷で、化学調味料を使わないやさしい中国料理。小説に出てくる鶏と豆腐の煮込み、エビチリ、果汁のソースの酢豚、評判の自家製の杏仁豆腐。昼はランチ。舞妓を呼ぶこともできる。サービス料10%。月曜休み。',
  });
}

// ================================================================ 河原町焼肉ホルモン安東
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26031190/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://yakiniku-ando.com/';
  const H = day(['17:00', '00:00']);
  put({
    id: 'kyoto_kawaramachi_yakiniku_ando', name: '河原町焼肉ホルモン安東 (Kawaramachi Yakiniku Horumon Ando)', category: 'OMNI',
    lat: 35.00842, lng: 135.769227, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tare-marinated meats, cold noodles and kimchi platters (Tabelog; 2024–26 reviews); salt is offered as an alternative to tare (August 2026), but no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu and horumon yakiniku house; namul and vegetable wraps exist as sides (April 2024).',
    hours_raw: 'Daily 17:00–0:00 (last order 23:00); irregular closures; may close early when stock runs out (Tabelog). A February 2024 diner found it open all day on a Saturday. Reservations accepted, incl. online; Friday walk-ins have been seated (Tabelog; November 2025; August 2026). No service charge (Tabelog, Japanese text: 「なし」). Cards, e-money and QR; ordering by QR code at the table (Tabelog; August 2026). 31 seats: a 7-seat counter and 24 at tables; whole-floor hire for 20–50 (Tabelog). Smoking allowed (Tabelog; March 2024). English menu (Tabelog). Upstairs from the long-established coffee shop Rokuyosha, Kawaramachi south of Sanjo, 4 min from Kyoto Shiyakusho-mae (Tabelog). Opened 1 September 2018 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi, south of Sanjo — Kyoto Shiyakusho-mae',
    cuisine: 'Yakiniku of selected wagyu and fresh horumon, with homemade kimchi, namul, cold noodles and sundubu, a homemade lemon sour, and half portions (Tabelog) · namul platter ¥900, vegetable wraps ¥700, spicy tongue and galbi ¥1,000, hoso ¥980, premium rib ¥1,600, draft beer ¥580 (April 2024) · about five kinds of yukhoe; beef-tendon stew under ¥500 (February 2024) · garlic-chive kimchi; lean wagyu (March 2024; August 2025) · oyster kimchi in season (January 2025) · horumon platters; omasum and heart sashimi; outside skirt (February and March 2026) · tongue ¥2,200 (March 2026)',
    website: SITE, gmaps: gm('河原町焼肉ホルモン安東'), menu_url: TB,
    notes: '[Yakiniku and horumon · Kawaramachi, since 2018] A casual second-floor yakiniku house above the Rokuyosha coffee shop, open to midnight: fresh horumon platters, lean wagyu, tongue, homemade kimchi and namul, and half portions that suit solo diners at the counter. One of four Ando shops in Kyoto. Smoking allowed; English menu; QR ordering.',
    chef_bio: { chef_name: null, roles: ['Manager (unnamed), described as friendly and attentive (August 2026)'], origin: null,
      background: 'Per Tabelog and the official site: a yakiniku and horumon restaurant opened in September 2018, one of four ホルモン安東 shops in Kyoto (main shop, Kawaramachi, Higashiyama and Yamashina).',
      philosophy: null, specialty: 'Horumon; wagyu yakiniku; homemade kimchi.',
      anecdotes: [
        { text: 'An August 2026 diner arrived 20 minutes late for a 10 pm booking and was still welcomed; the manager split the horumon platter into well-matched portions.', source: R + 'B533181465/' },
        { text: 'A February 2026 marathon runner refuelled on a horumon platter and found even the liver to taste.', source: R + 'B522741662/' },
        { text: 'A February 2024 diner rated the beef-tendon stew, under ¥500, the best dish of the night.', source: R + 'B480309396/' },
      ],
      japanese_sources_summary: '食べログ・公式サイト: 焼肉・ホルモン、中京区大黒町40-1 六曜社 2F、地下鉄京都市役所前駅から徒歩4分、毎日17:00〜24:00 (L.O. 23:00)、不定休、仕入れにより早じまいあり、予約可、サービス料なし、カード・電子マネー・QR 可、31席 (カウンター7、テーブル24)、喫煙可、英語メニュー、2018年9月1日オープン、京都に4店 (本店、河原町、東山、山科)、和牛とホルモン、自家製のキムチ、ナムル、冷麺、スンドゥブ、ハーフサイズ。口コミ (2023年7月〜2026年8月、英語): ナムルの盛り合わせ900円、野菜巻き700円、ホソ980円、premium rib 1,600円、ユッケ約5種、牛すじの煮込み、ニラキムチ、牡蠣のキムチ、ホルモンの盛り合わせ、センマイとハツの刺身、ハラミ、タン2,200円、QR で注文、一人焼肉にも。',
      confidence: 'medium', sources: [TB, SITE, R + 'B468280415/', R + 'B480309396/', R + 'B480734199/', R + 'B483155902/', R + 'B517134065/', R + 'B521902115/', R + 'B522741662/', R + 'B523991376/', R + 'B524382690/', R + 'B528677060/', R + 'B533181465/', R + 'B533365025/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu and QR ordering (Tabelog; August 2026); counter seats suit solo diners.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区大黒町40-1 六曜社 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.008420, 135.769227); cross-checked: GSI 京都府京都市中京区大黒町40番地 (lot) 45m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B483155902/', R + 'B524382690/'],
    price_note: 'Prices from April 2024 and March 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Namul platter', '¥900', 'Sides', 'ask', 'ask', 'April 2024.', 'namul'),
      it('', '', 'Vegetable wraps', '¥700', 'Sides', 'ask', 'ask', 'April 2024.', 'yasai_maki'),
      it('', '', 'Hoso (small intestine)', '¥980', 'Horumon', 'ask', 'no', 'April 2024.', 'hoso'),
      it('', '', 'Premium rib', '¥1,600', 'Wagyu', 'ask', 'no', 'April 2024.', 'jo_rib'),
      it('', '', 'Beef tongue', '¥2,200', 'Wagyu', 'ask', 'no', 'March 2026.', 'tan'),
    ] }, {
    cuisine: '厳選した和牛と新鮮なホルモンの焼肉、自家製のキムチ、ナムル、冷麺、スンドゥブ、自家製のレモンサワー、ハーフサイズもある (食べログ)・ナムルの盛り合わせ900円、野菜巻き700円、Umakara tan karubi 1,000円、ホソ980円、premium rib 1,600円、生ビール580円 (2024年4月)・ユッケ約5種、500円以下の牛すじの煮込み (2024年2月)・ニラキムチ、和牛の赤身 (2024年3月、2025年8月)・季節の牡蠣のキムチ (2025年1月)・ホルモンの盛り合わせ、センマイとハツの刺身、ハラミ (2026年2月・3月)・タン2,200円 (2026年3月)',
    neighborhood: '河原町、三条の南。京都市役所前',
    gf_detail: 'グルテンフリーではない。タレの肉、冷麺、キムチの盛り合わせ (食べログ、2024〜2026年の口コミ)。タレの代わりに塩も選べる (2026年8月) が、グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。和牛とホルモンの焼肉店。ナムルや野菜巻きは副菜 (2024年4月)。',
    notes: '[焼肉・ホルモン・河原町、2018年から] 喫茶の六曜社の2階の、深夜0時まで開く気軽な焼肉店。新鮮なホルモンの盛り合わせ、和牛の赤身、タン、自家製のキムチとナムル。ハーフサイズもあり、カウンターで一人焼肉にも。京都に4店ある安東の一つ。喫煙可、英語メニュー、QR で注文。',
  });
}

// ================================================================ 鉄板とお酒 宗や
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26029708/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '03:00']);
  put({
    id: 'kyoto_teppan_osake_souya', name: '鉄板とお酒 宗や (Teppan to Osake Souya)', category: 'OMNI',
    lat: 34.998907, lng: 135.766679, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tonpei-yaki, taro kara-age and other teppan dishes with sauces (2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashimaki, beef tendon, horumon and chicken dishes; many vegetable plates, but with dashi and bonito (2025–26 reviews).',
    hours_raw: 'Daily 18:00–3:00; irregular closures announced on Instagram; hours may change (Tabelog). Reservations by phone only; weekend nights fill up (Tabelog; December 2025; May 2026). Cards and e-money; no QR (Tabelog). 28 seats: a 10-seat counter, 16 at tables and 2 standing (Tabelog). Smoking allowed (Tabelog). Residential street — keep noise down late at night (Tabelog). 1 min from the Kawaramachi Matsubara bus stop, 7 min from Hankyu Kawaramachi (Tabelog). Opened 5 October 2017 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Near Kawaramachi Matsubara — Kawaramachi',
    cuisine: 'Teppan dishes and a large sake list, open until 3 am · potato salad with pickles and okara ¥550, spicy dandan chicken ¥750, dashimaki with Kujo green onion and shirasu ¥800, simmered daikon and beef tendon ¥700, pork-and-cabbage omelette skewers ¥900 (December 2025) · iburigakko with mascarpone, yodare-dori, chicken neck, fluffy tonpei-yaki; Kujo green onion omelette (December 2025) · taro kara-age, yuba and black sesame tofu, horumon with cabbage in garlic soy (November–December 2025) · onion and shiba-zuke salad; daikon and thick fried tofu with shiba-zuke; Amami brown-sugar shochu (February 2026) · stir-fried Kujo green onion and meat with ponzu (May 2026) · ajillo; sake with detailed descriptions (August 2026)',
    website: null, gmaps: gm('鉄板とお酒 宗や'), menu_url: TB,
    notes: '[Teppan and sake · Kawaramachi Matsubara, open to 3 am] A lively little teppan izakaya near Kawaramachi Matsubara, open every night until 3:00, with a menu that changes often: thick dashimaki with Kujo green onion, pork-and-cabbage omelette skewers, yodare-dori, shiba-zuke salads, horumon, and a big, well-described sake list. Weekend nights need a phone booking; smoking allowed.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed) (May 2026)', 'Teppan chef (unnamed) (June 2026)'], origin: null,
      background: 'Per Tabelog: a teppan and sake izakaya opened in October 2017 near Kawaramachi Matsubara.',
      philosophy: null, specialty: 'Teppan dishes; Japanese sake.',
      anecdotes: [
        { text: 'A February 2026 diner was delighted to see shiba-zuke, usually hidden in a bento corner, star in a salad.', source: R + 'B523300045/' },
        { text: 'A December 2025 pair ate to bursting and paid ¥9,000 for two.', source: R + 'B519920145/' },
        { text: 'A June 2026 diner at the counter by the open front enjoyed watching the teppan chef work the spatula.', source: R + 'B533012411/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・鉄板焼き、下京区石不動之町700、河原町松原バス停から徒歩1分、阪急河原町駅から徒歩7分、毎日18:00〜翌3:00、不定休 (Instagram で告知)、電話予約のみ、カード・電子マネー可、QR 不可、28席 (カウンター10、テーブル16、立ち2)、喫煙可、住宅街なので深夜は静かに、2017年10月5日オープン。口コミ (2025年11月〜2026年8月、英語): 深夜3時まで、ポテトサラダ550円、よだれ鶏、Kujo ねぎとしらすのだし巻き800円、大根と牛すじの煮物700円、豚とキャベツの卵の串900円、いぶりがっこのマスカルポーネ、とん平焼き、里芋の唐揚げ、湯葉と黒ごま豆腐、ホルモン、柴漬けのサラダ、奄美の黒糖焼酎、日本酒が充実、アヒージョ、2人で9,000円。',
      confidence: 'medium', sources: [TB, R + 'B518749982/', R + 'B519526939/', R + 'B519920145/', R + 'B520337501/', R + 'B521634993/', R + 'B523300045/', R + 'B525402036/', R + 'B526758889/', R + 'B528665024/', R + 'B528698993/', R + 'B533012411/', R + 'B533539361/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Phone bookings only; staff have checked for seats for people waiting outside (May 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区石不動之町700',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (34.998907, 135.766679); cross-checked: GSI 京都府京都市下京区石不動之町700番地 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B518749982/'],
    price_note: 'Prices from a December 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Dashimaki with Kujo green onion and shirasu', '¥800', 'Teppan and egg', 'ask', 'no', 'With bonito flakes and grated daikon; December 2025.', 'dashimaki'),
      it('', '', 'Pork-and-cabbage omelette skewers (2)', '¥900', 'Teppan and egg', 'no', 'no', 'December 2025.', 'tonpei_kushi'),
      it('', '', 'Spicy dandan chicken', '¥750', 'Small plates', 'ask', 'no', 'December 2025.', 'dandan_chicken'),
      it('', '', 'Simmered daikon and beef tendon', '¥700', 'Small plates', 'ask', 'no', 'December 2025.', 'daikon_suji'),
      it('', '', 'Potato salad with pickles and okara', '¥550', 'Small plates', 'ask', 'ask', 'December 2025.', 'potesara'),
    ] }, {
    cuisine: '深夜3時まで、鉄板料理と充実した日本酒・漬物とおからのポテトサラダ550円、辛い担々の鶏750円、Kujo ねぎとしらすのだし巻き800円、大根と牛すじの煮物700円、豚とキャベツの卵の串2本900円 (2025年12月)・いぶりがっこのマスカルポーネ、よだれ鶏、せせり、ふわふわのとん平焼き、Kujo ねぎの卵焼き (2025年12月)・里芋の唐揚げ、湯葉と黒ごま豆腐、ホルモンと白菜のにんにく醤油 (2025年11〜12月)・玉ねぎと柴漬けのサラダ、大根と厚揚げの柴漬けあえ、奄美の黒糖焼酎 (2026年2月)・Kujo ねぎと肉のポン酢炒め (2026年5月)・アヒージョ、説明の詳しい日本酒 (2026年8月)',
    neighborhood: '河原町松原の近く。河原町',
    gf_detail: 'グルテンフリーではない。とん平焼き、里芋の唐揚げなど、ソースを使う鉄板料理 (2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。だし巻き、牛すじ、ホルモン、鶏料理。野菜の料理は多いが、出汁やかつお節を使う (2025〜2026年の口コミ)。',
    notes: '[鉄板とお酒・河原町松原、深夜3時まで] 河原町松原近くの、毎晩深夜3時まで開くにぎやかな小さな鉄板居酒屋。メニューはよく変わる。分厚い Kujo ねぎのだし巻き、豚とキャベツの卵の串、よだれ鶏、柴漬けのサラダ、ホルモン、説明の詳しい豊富な日本酒。週末の夜は電話予約を。喫煙可。',
  });
}

save();
