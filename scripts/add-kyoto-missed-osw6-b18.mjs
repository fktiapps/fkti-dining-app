// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 18.
//   + 魚棚ふみ文 Uotana Fumibun (basement kappo-izakaya of Akashi seafood, Sanjo Kiyamachi)
//   + 酒蔵 SHUKURA (sake bar by the Pontocho Kaburenjo)
//   + 二条有恒 Nijo Aritsune ("adult izakaya" of à la carte Kyoto dishes, Nijo Teramachi)
//   + 南禅寺参道 菊水 Nanzenji Sando Kikusui (Italian at a garden ryokan by Nanzen-ji)
//   - skip 26044732 The WAGYU BURGER by PANGA (chain)
//   - skip 26029588 レストランひらまつ 高台寺 (sub-brand of a large parent)
//   - skip 26039830 wabiya (sub-brand of a large parent)
//   Same-name counts first (2026-11-05): ふみ文 — one; SHUKURA (酒蔵) — one (other Kyoto "sakagura" hits are unrelated
//   Fushimi shops); 有恒 — one; 南禅寺参道 菊水 — one (other 菊水 hits are a fu shop, a minshuku and a Gion shop).
//   PANGA — Tabelog lists Yakiniku Panga Shin-Okachimachi honten, Wagyu Yakiniku Panga Ueno and Asakusa, Wagyu Sukiyaki Panga
//   Asakusa, Wagyu Panga Gion Shijo, Wagyu Sukiyaki Kyoto Panga and the burger shop: 5+ → chain.
//   Taken on 2026-11-05: `next core 200` gave 魚棚ふみ文 26003326 and SHUKURA 26022286; `next notable 200` gave PANGA,
//   ひらまつ 高台寺 and wabiya (all skipped), then 二条有恒 26026084 and 南禅寺参道 菊水 26028346.
//   None is in data/kyoto.json: grep by name and address (石屋町121 松嶋屋ビル, 石屋町122-4, 丁子屋町694-3, 南禅寺福地町31)
//   found none. Service charges per Tabelog's Japanese original: SHUKURA 「1000円（お一人様あたり）」; 二条有恒
//   「サービス料・チャージ共に無し」; 菊水 「個室利用料：11,000円/室」 (private room fee, no service charge listed); ふみ文 none listed.
//   No shop asks diners not to post it; no remarks on anyone's looks are recorded.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-18');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26044732', 'chain: PANGA (from Yakiniku Panga, Tokyo, 1999, per the brand page) has 5+ shops on Tabelog — Yakiniku Panga Shin-Okachimachi honten, Wagyu Yakiniku Panga Ueno and Asakusa, Wagyu Sukiyaki Panga Asakusa, Wagyu Panga Gion Shijo, Wagyu Sukiyaki Kyoto Panga, and this burger shop.');
skip('26029588', 'sub-brand of a large parent: レストランひらまつ is the restaurant brand of the listed company Hiramatsu, which runs many restaurants and hotels nationwide.');
skip('26039830', 'sub-brand of a large parent: the official site (takatsuji.wabiya.com) gives the operator as 株式会社ロマンライフ (Roman Life Inc., the Malebranche confectionery company), which also runs 侘家古暦堂 and 菓子wabiya. Note for the coordinator: 菓子wabiya 西花見小路店 (kyoto_kashi_wabiya_nishihanamikoji) is already in data under the same operator.');

// ================================================================ 魚棚ふみ文
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26003326/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:00', '22:00']);
  put({
    id: 'kyoto_uotana_fumibun', name: '魚棚ふみ文 (Uotana Fumibun)', category: 'OMNI',
    lat: 35.008311, lng: 135.770902, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A long menu of sashimi, simmered and grilled dishes alongside tempura, kushikatsu and croquettes; soy and dashi throughout (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood kappo-izakaya; even the vegetable dishes come in dashi or white-miso dressings (2025–26 reviews). Tabelog’s vegetarian tick is not evidence.',
    hours_raw: '16:00–22:00 (last order 21:30), open year-round (Tabelog). Reservations accepted (Tabelog); it fills up by early evening (May 2026). À la carte from a long menu, or courses (2025 reviews). 34 seats: 8 at the counter, 6 on a raised tatami area, 20 at tables; private hire up to 23 (Tabelog). Smoking area for heated tobacco outside (Tabelog). Cards and QR; no e-money (Tabelog). In the basement of a building between Kiyamachi and Pontocho, behind a heavy door; 3 min from Sanjo Stn (Tabelog; May 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sanjo Kiyamachi, by Pontocho — 3 min from Sanjo Stn',
    cuisine: 'Kyoto kappo-izakaya of seafood brought daily from Akashi port, with about 40 sakes from around Japan, 30 shochu and Tanba wine (Tabelog, shop text) · signature grilled Akashi anago (Tabelog; 2025–26 reviews) · Akashi octopus as sashimi or tempura, sea bream simmered in soy, saury sashimi, steamed shirako with kombu, kabura-mushi, bamboo shoots with mitsuba and white miso, shishamo, shrimp with grated yam (2025–26 reviews) · dashi-rolled omelette served in broth "like Akashi-yaki", homemade croquettes with black beans, beef kushikatsu, sakura motsu-ni, eel roll, tenderloin steak (2025–26 reviews) · sake served with a tag naming the brand (March 2025) · bills about ¥5,000–15,000 a head (2025–26 reviews)',
    website: null, gmaps: gm('魚棚ふみ文 先斗町'), menu_url: TB + 'dtlmenu/',
    notes: "[Kappo-izakaya · Sanjo Kiyamachi, Akashi seafood down the stairs] A basement kappo-izakaya behind a heavy door between Kiyamachi and Pontocho, open more than 30 years. Seafood comes daily from Akashi: the grilled anago is the signature, with octopus as sashimi or tempura, simmered sea bream and a dashi omelette in broth. The long menu runs from seasonal small plates to croquettes and kushikatsu, with about 40 sakes. Opens at 16:00 daily; book for the evening.",
    chef_bio: { chef_name: null, roles: ['Owner and chef (unnamed); a younger owner also serves (May 2026)'], origin: null,
      background: 'An August 2026 reviewer says the restaurant has over 30 years of history; an October 2025 reviewer says the dishes are now cooked by a chef who took over from the previous owner. A July 2025 regular praises the chef and the owner; a May 2026 diner was served by "the owner and the young owner".',
      philosophy: null, specialty: 'Grilled Akashi anago; seasonal small plates.',
      anecdotes: [
        { text: 'A May 2025 diner had several dishes arrive at once, so the grilled anago went cold.', source: R + 'B505894827/' },
        { text: 'An August 2025 diner returned to a restaurant a late father used to visit, for the sea bream simmered in soy.', source: R + 'B512410660/' },
        { text: 'A December 2025 diner found the course a bit pricey but the staff lively and welcoming.', source: R + 'B519714401/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理・居酒屋、中京区三条木屋町石屋町121 先斗町松嶋屋ビル B1F、三条駅から徒歩3分、16:00〜22:00 (L.O. 21:30)、年中無休、予約可、34席 (カウンター8、小上がり6、テーブル20)、貸切可 (23名まで)、屋外に加熱式たばこの喫煙所、カード・QR 可、Akashi の港から毎日届く魚、全国の地酒40種・焼酎30種、Tanba のワイン、名物は Akashi の焼き穴子。口コミ (2025年3月〜2026年8月、英語): 地下の隠れ家、30年以上、先代から継いだ料理人、Akashi の蛸、鯛のあら炊き、だし巻き、黒豆のコロッケ、かぶら蒸し、料理が一度に来て冷めたという声。',
      confidence: 'medium', sources: [TB, R + 'B503153919/', R + 'B505894827/', R + 'B510675479/', R + 'B512410660/', R + 'B515013590/', R + 'B517782413/', R + 'B519714401/', R + 'B521815612/', R + 'B527590992/', R + 'B527664480/', R + 'B532956694/', R + 'B533823391/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Long Japanese menu, order à la carte or a course; book for evenings; cards and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三条木屋町石屋町121 先斗町松嶋屋ビル Ｂ１Ｆ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.008311, 135.770902); cross-checked: GSI 京都府京都市中京区石屋町121番地 (lot) 4m; 7.7 m from kyoto_shukura_pontocho (石屋町122-4); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532956694/', TB],
    price_note: 'No item prices found; reviews give bills of about ¥5,000–15,000 a head (2025–26).', last_checked: TODAY, items: [
      it('', '', 'Grilled Akashi anago', '', 'Grilled', 'ask', 'no', 'Tabelog; August 2026.', 'yaki_anago'),
      it('', '', 'Akashi octopus tempura', '', 'Fried', 'no', 'no', 'May 2025.', 'tako_tempura'),
      it('', '', 'Dashi-rolled omelette in broth', '', 'Small plates', 'ask', 'no', 'September 2025.', 'dashimaki'),
    ] }, {
    cuisine: 'Akashi の港から毎日届く魚の京の割烹居酒屋。全国の地酒約40種、焼酎30種、Tanba のワイン (食べログの店の紹介)・名物は Akashi の焼き穴子 (食べログ、2025〜2026年の口コミ)・Akashi の蛸の刺身や天ぷら、鯛のあら炊き、秋刀魚の刺身、白子の昆布蒸し、かぶら蒸し、筍と三つ葉の白味噌和え、ししゃも、海老の山かけ (2025〜2026年の口コミ)・明石焼きのように出汁に浸しただし巻き、黒豆入りの自家製コロッケ、牛の串カツ、さくらもつ煮、う巻き、ヒレステーキ (2025〜2026年の口コミ)・日本酒には銘柄の札が付く (2025年3月)・1人約5,000〜15,000円 (2025〜2026年の口コミ)',
    neighborhood: '三条木屋町、先斗町の近く。三条駅から徒歩3分',
    gf_detail: '要確認。刺身、煮物、焼き物のほか、天ぷら、串カツ、コロッケもある長いメニュー。醤油と出汁を広く使う (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚介の割烹居酒屋で、野菜料理も出汁や白味噌で和える (2025〜2026年の口コミ)。食べログのベジタリアン表示は根拠にならない。',
    notes: '[割烹居酒屋・三条木屋町、階段の下の Akashi の魚] 木屋町と先斗町の間、重い扉の地下の割烹居酒屋で、30年以上続く。魚は Akashi から毎日届き、名物は焼き穴子。蛸の刺身や天ぷら、鯛のあら炊き、出汁に浸しただし巻きも。季節の小鉢からコロッケや串カツまでメニューは長く、日本酒は約40種。毎日16時から、夜は予約を。',
  });
}

// ================================================================ SHUKURA
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26022286/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['18:00', '01:00']); const WE = day(['16:00', '01:00']);
  put({
    id: 'kyoto_shukura_pontocho', name: '酒蔵 (SHUKURA)', category: 'OMNI',
    lat: 35.008313, lng: 135.770986, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sake is generally gluten-free, but the snacks include oden, soba and grilled heshiko with soy-based seasonings (2023–25 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A sake bar; the snacks include fish (heshiko), clams, oden and soba in broth (2023–25 reviews).',
    hours_raw: 'Mon–Fri 18:00–1:00, Sat, Sun and holidays 16:00–1:00 (last order 0:30); closed irregularly (Tabelog). Reservations accepted, advised for the 14 seats — 6 at the counter, 2 tables (Tabelog; August 2025). Seat charge ¥1,000 a person (Tabelog, Japanese text: 「1000円（お一人様あたり）」). Non-smoking, ashtray at the entrance (Tabelog). Cards, IC cards and e-money (Tabelog). By the Pontocho Kaburenjo theatre at the Sanjo end; 3 min from Sanjo Stn (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho by the Kaburenjo, Sanjo end — 3 min from Sanjo Stn',
    cuisine: 'Sake bar with 60–70 sakes at any time — chilled, warmed, nigori, sparkling and aged — centred on Kyoto, Shiga and local sake from around Japan (Tabelog, shop text) · tasting sets, e.g. three Kyoto and Shiga sakes of 80 ml for ¥2,000 (August 2023) · the master or staff choose to your taste (2024–26 reviews) · snacks: grilled heshiko ¥800 (August 2023), oden, clams steamed in sake, thick fried tofu, soba to finish (2024–25 reviews) · seat charge ¥1,000 (Tabelog)',
    website: 'http://bar-shukura.com/', gmaps: gm('SHUKURA 日本酒バー 先斗町'), menu_url: null,
    notes: "[Sake bar · Pontocho, sixty sakes by the Kaburenjo] A small wooden sake bar at the Sanjo end of Pontocho with 60–70 sakes on hand, from Kyoto and Shiga breweries to summer and aged bottles. Tell the master or staff what you like and get a pour to match, or take a three-glass tasting set; snacks run from grilled heshiko and oden to a bowl of soba to finish. ¥1,000 seat charge. Open to 1:00, from 16:00 at weekends; a good second or last stop.",
    chef_bio: { chef_name: null, roles: ['Master and staff (unnamed)'], origin: null,
      background: 'Reviewers describe a master who explains and chooses sake (September 2024, February 2025, August 2026) and knowledgeable staff (February 2024); an August 2023 visitor heard the place had been open 11 years and that the owner also runs a nearby bar.',
      philosophy: null, specialty: 'Kyoto and Shiga sake; tasting sets.',
      anecdotes: [
        { text: 'An August 2023 visitor had the Kyoto & Shiga set of three 80 ml pours for ¥2,000 and grilled heshiko for ¥800; the bill came to ¥6,900.', source: R + 'B470401868/' },
        { text: 'A seven-time regular finishes with the bar’s soba, a lighter end than ramen (August 2025).', source: R + 'B420838713/' },
        { text: 'An April 2025 diner felt the area has changed over the years and the bar now seems mostly frequented by visitors from abroad.', source: R + 'B505578887/' },
      ],
      japanese_sources_summary: '食べログ: バー・日本酒バー・ダイニングバー、中京区木屋町三条下ル石屋町122-4、三条駅から徒歩約3分、月〜金 18:00〜翌1:00、土日祝 16:00〜翌1:00 (L.O. 0:30)、不定休、予約可、14席 (カウンター6、テーブル8)、チャージ1人1,000円、禁煙 (入口に灰皿)、カード・電子マネー可、先斗町の Kaburenjo の近く、日本酒は常時60〜70種 (冷酒、燗酒、にごり、スパークリング、古酒)、京都・滋賀と全国の地酒。口コミ (2023年8月〜2026年8月、英語): 京都・滋賀の3種飲み比べ2,000円、へしこ焼き800円、おでん、酒蒸し、締めの蕎麦、マスターが好みに合わせて選ぶ、11年続く店という声 (2023年)。',
      confidence: 'medium', sources: [TB, R + 'B420838713/', R + 'B470401868/', R + 'B481277255/', R + 'B481738261/', R + 'B491298610/', R + 'B493504976/', R + 'B503803975/', R + 'B505578887/', R + 'B511495780/', R + 'B518692793/', R + 'B521314728/', R + 'B533612599/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Say what sake you like and let the staff choose; ¥1,000 seat charge; cards and IC cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区木屋町三条下ル石屋町122-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.008313, 135.770986); cross-checked: GSI 京都府京都市中京区石屋町122番地 (lot) 5m; 7.7 m from kyoto_uotana_fumibun (石屋町121); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B470401868/', TB],
    price_note: 'Prices from an August 2023 review (may have changed); seat charge from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Kyoto & Shiga sake tasting (3 × 80 ml)', '¥2,000', 'Sake', '', 'vegan', 'August 2023.', 'sake_flight'),
      it('', '', 'Grilled heshiko', '¥800', 'Snacks', 'ask', 'no', 'August 2023.', 'heshiko'),
      it('', '', 'Seat charge (per person)', '¥1,000', 'Charge', '', '', 'Tabelog.', 'seat_charge'),
    ] }, {
    cuisine: '冷酒、燗酒、にごり、スパークリング、古酒など常時60〜70種、京都・滋賀を中心に全国の地酒をそろえる日本酒バー (食べログの店の紹介)・飲み比べセット、たとえば京都と滋賀の3種80ml ずつで2,000円 (2023年8月)・マスターやスタッフが好みに合わせて選ぶ (2024〜2026年の口コミ)・つまみ: へしこ焼き800円 (2023年8月)、おでん、貝の酒蒸し、厚揚げ、締めの蕎麦 (2024〜2025年の口コミ)・チャージ1,000円 (食べログ)',
    neighborhood: '先斗町の三条側、Kaburenjo の近く。三条駅から徒歩3分',
    gf_detail: '要確認。日本酒は一般にグルテンを含まないが、つまみにはおでん、蕎麦、醤油を使うへしこ焼きなどがある (2023〜2025年の口コミ)。',
    vegan_detail: '要確認。日本酒バーで、つまみにはへしこ、貝、おでん、出汁の蕎麦がある (2023〜2025年の口コミ)。',
    notes: '[日本酒バー・先斗町、Kaburenjo そばの60種] 先斗町の三条側の、木の内装の小さな日本酒バー。京都や滋賀の蔵から夏酒や古酒まで常時60〜70種。好みを伝えればマスターやスタッフが選んでくれ、3種の飲み比べも。つまみはへしこ焼き、おでん、締めの蕎麦まで。チャージ1,000円。翌1時まで、週末は16時から。2軒目や締めに。',
  });
}

// ================================================================ 二条有恒
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26026084/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:00', '23:00']); const S = day(['17:00', '21:30']);
  put({
    id: 'kyoto_nijo_aritsune', name: '二条有恒 (Nijo Aritsune)', category: 'OMNI',
    lat: 35.013749, lng: 135.766769, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. À la carte Japanese dishes with soy and dashi, including crab cream croquettes, a beef cutlet sandwich and fried horse mackerel (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, shellfish, chicken and beef dishes with dashi (2025–26 reviews).',
    hours_raw: 'Tue–Sat 17:00–23:00 (last entry 21:00, last order 22:00); Sun 17:00–21:30 (last entry 20:00); closed Monday and two consecutive days a month (Tabelog). Reservations accepted; phone 12:00–16:00, as calls may go unanswered during service; ask even on days marked unavailable (Tabelog). No service charge or cover (Tabelog, Japanese text: 「サービス料・チャージ共に無し」). The menu shows no prices; reviewers spent about ¥15,000–20,000 a head (2026 reviews). 22 seats: a 10-seat counter, a table and private rooms for 4 and 6 (Tabelog). Non-smoking; cards, no e-money or QR (Tabelog). Near Nijo-Teramachi; 3 min from Kyoto Shiyakusho-mae Stn (Tabelog; April 2026). Opened 18 August 2015 (Tabelog).',
    hours: { 1: W, 2: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nijo-Teramachi — 3 min from Kyoto Shiyakusho-mae Stn',
    cuisine: '"Adult izakaya" of à la carte Kyoto dishes close to kaiseki, with charcoal grilling, sake and wine (Tabelog, shop text; 2026 reviews) · signatures: karasumi mochi and crab cream croquettes (August 2026) · charcoal-grilled seasonal fish — sweetfish, guji, hamo, eel — half-cooked fried horse mackerel, hairy crab, Kyoto Akadori chicken, tsukune with egg yolk, grilled scallops (2026 reviews) · beef cutlet sandwich, also to take away (July and November 2026) · eel rice bowl, yaki-onigiri, rice with chirimen sansho and karasumi (2026 reviews) · no prices on the menu; about ¥15,000–20,000 a head (2026 reviews)',
    website: 'http://aritsune.jp', gmaps: gm('二条有恒'), menu_url: null,
    notes: "[Kappo-izakaya · Nijo Teramachi, build your own kaiseki] A grown-up izakaya near Nijo-Teramachi where you assemble your own course from a long, seasonal à la carte list — karasumi mochi and crab cream croquettes are the signatures, with charcoal-grilled fish, hairy crab and a beef cutlet sandwich you can take home. The menu has no prices; expect about ¥15,000–20,000, with no service charge. One March 2026 diner found the service slow. Closed Monday; book by phone 12:00–16:00.",
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed); a new chef since the previous owner left (August 2026 review)'], origin: null,
      background: 'Per Tabelog (the shop’s own text): the name means "to keep changing in order to remain the same"; an adult izakaya of carefully chosen ingredients and charcoal grilling, opened 18 August 2015. An August 2026 reviewer heard that the previous owner had left the year before to open a Kyoto restaurant in Milan, and wished the current chef well; reviewers describe the head chef as approachable (November 2025, September 2026).',
      philosophy: 'Per Tabelog (the shop’s own text): "to keep changing in order to remain the same."',
      specialty: 'Karasumi mochi; crab cream croquette.',
      anecdotes: [
        { text: 'A March 2026 diner found drinks and dishes so slow it was hard to order more.', source: R + 'B524829157/' },
        { text: 'A May 2026 diner liked the food but not the glass of white wine, and found the prices on the high side.', source: R + 'B528076781/' },
        { text: 'A July 2026 diner, already full, had the beef cutlet sandwich packed to eat on the Shinkansen.', source: R + 'B531516341/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理・居酒屋、中京区二条寺町西入丁子屋町694-3、京都市役所前駅から徒歩3分、火〜土 17:00〜23:00 (最終入店21:00、L.O. 22:00)、日 17:00〜21:30 (最終入店20:00)、月曜と月に2連休、電話は12:00〜16:00に、サービス料・チャージ共に無し、22席 (カウンター10席、個室)、禁煙、カード可、2015年8月18日オープン、店名には変わらないために変わり続けるという意味。口コミ (2025年11月〜2026年11月、英語): 品書きに値段がない、1人約15,000〜20,000円、からすみ餅と蟹クリームコロッケが名物、炭火の焼き魚、毛蟹、ビーフカツサンドの持ち帰り、先代は前年にミラノで京料理の店を開いたという声、提供が遅いという声。',
      confidence: 'medium', sources: [TB, R + 'B480331344/', R + 'B505166124/', R + 'B517683682/', R + 'B518272076/', R + 'B522178531/', R + 'B524829157/', R + 'B524910823/', R + 'B527638615/', R + 'B528076781/', R + 'B531516341/', R + 'B536217120/', R + 'B538494069/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order à la carte from a Japanese menu without prices; staff help; book by phone 12:00–16:00.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区二条寺町西入丁子屋町694-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.013749, 135.766769); GSI resolves only the town 京都府京都市中京区丁子屋町 (1 m away), so the pin stays on the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527638615/', R + 'B480331344/'],
    price_note: 'The menu shows no prices; 2026 reviews give about ¥15,000–20,000 a head. No service charge (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Karasumi mochi', '', 'Signature', 'ask', 'no', 'August 2026.', 'karasumi_mochi'),
      it('', '', 'Crab cream croquette', '', 'Signature', 'no', 'no', '2026 reviews.', 'kani_cream_korokke'),
      it('', '', 'Beef cutlet sandwich (also to take away)', '', 'À la carte', 'no', 'no', 'July and November 2026.', 'beef_katsu_sando'),
    ] }, {
    cuisine: '懐石に近い京料理をアラカルトで出す「大人の居酒屋」。炭火焼き、日本酒とワイン (食べログの店の紹介、2026年の口コミ)・名物はからすみ餅と蟹クリームコロッケ (2026年8月)・炭火で焼く季節の魚 (鮎、ぐじ、鱧、鰻)、半生の鯵フライ、毛蟹、Kyoto Akadori の鶏、卵黄のつくね、帆立の焼き物 (2026年の口コミ)・ビーフカツサンド、持ち帰りも (2026年7月・11月)・鰻丼、焼きおにぎり、ちりめん山椒とからすみのご飯 (2026年の口コミ)・品書きに値段はなく、1人約15,000〜20,000円 (2026年の口コミ)',
    neighborhood: '二条寺町の近く。京都市役所前駅から徒歩3分',
    gf_detail: '要確認。醤油と出汁のアラカルトの和食で、蟹クリームコロッケ、ビーフカツサンド、鯵フライもある (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、貝、鶏、牛の料理と出汁 (2025〜2026年の口コミ)。',
    notes: '[割烹居酒屋・二条寺町、自分で組む懐石] 二条寺町近くの大人の居酒屋。季節のアラカルトから好きな皿を選んで自分のコースを組む。名物はからすみ餅と蟹クリームコロッケ、炭火の焼き魚、毛蟹、持ち帰れるビーフカツサンドも。品書きに値段はなく、1人15,000〜20,000円ほど、サービス料なし。2026年3月の客は提供が遅いと書く。月曜休み、電話は12時〜16時に。',
  });
}

// ================================================================ 南禅寺参道 菊水
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26028346/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '16:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_nanzenji_sando_kikusui', name: '南禅寺参道 菊水 (Nanzenji Sando Kikusui)', category: 'OMNI',
    lat: 35.010468, lng: 135.789251, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Italian courses with handmade pasta and house bread (Tabelog; 2026 reviews). No gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Vegetable-rich Italian courses, but with seafood, meat and dairy, e.g. sea urchin pasta and chestnut tiramisu (2026 reviews).',
    hours_raw: 'Lunch 12:00–16:00 (last food order 13:30), dinner 18:00–22:00 (last food order 20:00), open year-round (Tabelog). Reservations accepted; cancellation 20% three or two days before, 50% the day before, 100% on the day (Tabelog). Private rooms for up to 6 and 16 at ¥11,000 a room (Tabelog, Japanese text: 「個室利用料：11,000円/室」). 26 seats in the dining room and two private rooms, overlooking the garden (Tabelog; 2026 reviews). Cards and PayPay (Tabelog). Five parking spaces (Tabelog). On the approach to Nanzen-ji; 260 m from Keage Stn (Tabelog). Opened 11 June 2018 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nanzen-ji approach — 260 m from Keage Stn',
    cuisine: 'Italian with local terroir at a "cooking ryokan" with a rare garden by the seventh-generation Ogawa Jihei (official site; Tabelog) · handmade pasta by a chef with experience in Italian three-star restaurants; over 100 wines chosen by a sommelier (Tabelog, shop text) · lunch Italian course of 8 dishes ¥11,000 plus drinks (November 2025) · sea urchin pasta, chestnut tiramisu, house bread (October 2026) · Japanese dishes too — a yudofu kaiseki (Tabelog review) — afternoon tea (April 2026) and a children’s plate (September 2026) · champagne and sake (2026 reviews)',
    website: 'http://kyoto-kikusui.com/', gmaps: gm('南禅寺参道 菊水'), menu_url: TB + 'dtlmenu/',
    notes: "[Italian · Nanzen-ji, a ryokan garden by Ogawa Jihei] A traditional inn on the approach to Nanzen-ji that serves Italian cooking to visitors as well as guests, in a dining room and private rooms looking onto a garden by the seventh-generation Ogawa Jihei. Courses of seasonal Kyoto produce with handmade pasta — an eight-dish lunch was ¥11,000 in 2025 — and a sommelier's list of 100-plus wines. Staff have taken guests’ photos in the garden. Private rooms ¥11,000 extra. Open daily.",
    chef_bio: { chef_name: null, roles: ['Hotel restaurant; chef unnamed (Tabelog: experience in Italian three-star restaurants)'], origin: null,
      background: 'Per the official site: a "cooking ryokan" — neither restaurant nor inn — serving Italian made with seasonal ingredients from around Kyoto, around a rare garden by the seventh-generation Ogawa Jihei. Per Tabelog (the shop’s own text): a ryokan by Nanzen-ji with authentic Italian by chefs with experience in Italian three-star restaurants, and wines chosen by a sommelier; opened 11 June 2018.',
      philosophy: null, specialty: 'Italian courses; handmade pasta.',
      anecdotes: [
        { text: 'A May 2026 diner celebrating Mother’s Day was photographed in the lit garden by the staff after dinner.', source: R + 'B528986083/' },
        { text: 'An October 2026 diner liked the recommended sea urchin pasta but might skip the pasta next time; the chestnut tiramisu was the best dish.', source: R + 'B536782909/' },
        { text: 'An April 2026 family, joined by an unexpected extra guest, were accommodated with à la carte dishes.', source: R + 'B511599726/' },
      ],
      japanese_sources_summary: '公式サイト (kyoto-kikusui.com): 京都東山の和食・洋食を愉しむ料理旅館、七代目小川治兵衛の希少な庭、レストランでもない旅館でもない「料理旅館」、京都近郊のテロワールの旬の食材のイタリアン。食べログ: 旅館・イタリアン、左京区南禅寺福地町31、蹴上駅から260m、昼 12:00〜16:00 (料理 L.O. 13:30)、夜 18:00〜22:00 (料理 L.O. 20:00)、年中無休、予約可、キャンセル料 3日前・2日前20%、前日50%、当日100%、個室利用料11,000円/室、26席 (個室6名・16名)、カード・PayPay 可、駐車場5台、2018年6月11日オープン、手打ちパスタ、イタリアの三つ星で経験を積んだシェフ、ソムリエが選ぶ100種以上のワイン。口コミ (2025年11月〜2026年10月、英語): 昼のイタリアン8品11,000円 (2025年11月)、庭を望む個室、雲丹のパスタ、栗のティラミス、アフタヌーンティー、子ども用プレート。',
      confidence: 'medium', sources: [TB, 'http://kyoto-kikusui.com/', R + 'B511599726/', R + 'B527428842/', R + 'B527496417/', R + 'B528986083/', R + 'B530426704/', R + 'B536278679/', R + 'B536411439/', R + 'B536591227/', R + 'B536782909/', R + 'B536862120/', R + 'B537372883/', R + 'B537623631/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a course online; private garden-view rooms extra; cards and PayPay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区南禅寺福地町31',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.010468, 135.789251); cross-checked: GSI 京都府京都市左京区南禅寺福地町31番地 (lot) 35m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Lunch course price from a November 2025 review shown on Tabelog; private room fee from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Lunch Italian course (8 dishes)', '¥11,000', 'Lunch', 'ask', 'ask', 'November 2025; drinks extra.', 'lunch_course'),
      it('', '', 'Private room fee (per room)', '¥11,000', 'Charge', '', '', 'Tabelog.', 'private_room_fee'),
    ] }, {
    cuisine: '七代目小川治兵衛の希少な庭のある「料理旅館」の、近郊のテロワールのイタリアン (公式サイト、食べログ)・イタリアの三つ星で経験を積んだシェフの手打ちパスタ、ソムリエが選ぶ100種以上のワイン (食べログの店の紹介)・昼のイタリアン8品11,000円と飲み物 (2025年11月)・雲丹のパスタ、栗のティラミス、自家製パン (2026年10月)・和食も (湯豆腐の懐石、食べログの口コミ)、アフタヌーンティー (2026年4月)、子ども用プレート (2026年9月)・シャンパーニュと日本酒 (2026年の口コミ)',
    neighborhood: '南禅寺の参道。蹴上駅から260m',
    gf_detail: '要確認。手打ちパスタと自家製パンのイタリアンのコース (食べログ、2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認。野菜の多いイタリアンのコースだが、雲丹のパスタや栗のティラミスなど魚介、肉、乳製品も使う (2026年の口コミ)。',
    notes: '[イタリアン・南禅寺、小川治兵衛の庭の料理旅館] 南禅寺の参道の料理旅館で、泊まらなくてもイタリアンが食べられる。七代目小川治兵衛の庭を望む食堂と個室で、京都の旬の食材と手打ちパスタのコース。2025年の昼の8品は11,000円、ソムリエの100種以上のワインも。食後に庭で写真を撮ってくれることも。個室は11,000円の別料金。年中無休。',
  });
}

save();
