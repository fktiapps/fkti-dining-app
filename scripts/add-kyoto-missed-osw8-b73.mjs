// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 73.
//   + ステーキ割烹すえよし Steak Kappou Sueyoshi (nine-seat teppanyaki counter in Gion, 28 years; rest)
//   + 珈琲とカヌレ 京都店 Coffee to Cannele (canelé café open from 7:30, near Kyoto Shiyakusho-mae; rest)
//   + 祇園 つじや Gion Tsujia (couple-run omakase in a Gion back alley; rest)
//   + 祇園ほそみ Gion Hosomi (creative Japanese and nabe off Hanamikoji; rest)
//   Rest list (mod 6 = 1) after batch 72, nearest-first — skipped:
//   - 御所飴本舗 26014567: non-restaurant retail — a candy shop (Kyoto ame) on Sanjo.
//   - 御料理 茅乃舎 京都分店 26044873: large parent — 茅乃舎 of 久原本家 (same call as 26031126).
//   - ゆとりの空間 大丸京都店 26000737: chain — a Tabelog name search (2026-11-07) lists Yutori no Kukan shops at Hibiya,
//     Daimaru Kobe, Daimaru Sapporo, Daimaru Kyoto, Tsuruya and Yamagataya.
//   Brand check: queue-status.jsonl grepped for すえよし, 珈琲とカヌレ, つじや, ほそみ. The つじや hits are the 炭火串焼つじや
//   chain (26020272, 26025219) — a different business; 祇園 つじや is a single reservation-only Japanese restaurant run by a
//   couple. 珈琲とカヌレ: a Tabelog name search shows one other Coffee to Cannele (Aichi) — two same-name shops, drafted and
//   flagged. None of the four is in data/kyoto.json (main 6234b7ff, hidden records included) by name or address.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-73');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260202/26014567/', 'non-restaurant retail: 御所飴本舗 is a Kyoto candy shop (reviews 2023–2026 describe buying candy as gifts)');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26044873/', 'large parent: 茅乃舎 is a brand of 久原本家 (Kubara Honke); same call as 26031126');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26000737/', 'chain: ゆとりの空間 — a Tabelog name search (2026-11-07) lists shops at Hibiya, Daimaru Kobe, Daimaru Sapporo, Daimaru Kyoto, Tsuruya and Yamagataya');

// ================================================================ ステーキ割烹すえよし Steak Kappou Sueyoshi
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26006623/'; const R = TB + 'dtlrvwlst/'; const WEB = 'http://gion-steak.com/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_steak_kappou_sueyoshi', name: 'ステーキ割烹すえよし (Steak Kappou Sueyoshi)', category: 'OMNI',
    lat: 35.00515948046991, lng: 135.7757193618682, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Teppan-grilled wagyu, lobster, abalone and vegetables with house salt are naturally wheat-free, but garlic rice and sauces may use soy; no gluten information (Tabelog; 2012–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu, lobster and abalone courses (Tabelog).',
    hours_raw: 'Monday–Saturday 17:00–24:00 (last order 23:00); closed Sunday and holidays (Tabelog). Reservations accepted, with a contactable phone number (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). Nine seats at the counter; private hire up to 20 (Tabelog). Non-smoking, smoking allowed on private hire (Tabelog). English menu; wheelchair accessible; birthday plates; bring-your-own drinks possible (Tabelog). 10 min walk from Gion-Shijo Stn exit 7 (Tabelog). In its 28th year (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion north side',
    cuisine: 'Teppanyaki counter of A5 wagyu, live lobster, fresh abalone and seasonal Kyoto vegetables, with a monthly course and a pair course (Tabelog) · sirloin and tenderloin, Maine lobster grilled on the teppan, finished with garlic rice; pumpkin soup and house salt (2012–2026 reviews) · about ¥10,000–30,000 (Tabelog; 2023–2026 reviews)',
    website: WEB, gmaps: gm('ステーキ割烹すえよし 祇園'), menu_url: null,
    notes: '[Teppanyaki · Gion, 9-seat counter] A quiet, homely Gion teppan counter in its 28th year: A5 wagyu sirloin and fillet, live lobster and abalone grilled in front of you with Kyoto vegetables and house salt, ending in garlic rice. English menu. Dinner only; closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Teppan chef (unnamed)', 'Staff'], origin: null,
      background: 'Per Tabelog: a teppanyaki hideaway in Gion with a warm, homely atmosphere, in its 28th year, serving A5 wagyu, live lobster, abalone and seasonal Kyoto vegetables at a nine-seat counter. A July 2023 reviewer came on the recommendation of a Michelin concierge.',
      philosophy: 'Quality ingredients without pretence (Tabelog).', specialty: 'A5 wagyu steak; garlic rice.',
      anecdotes: [
        { text: 'An October 2026 regular, back after a few years, was welcomed with the usual smiles and spent the evening talking about The Tale of Genji.', source: R + 'B537231812/' },
        { text: 'A July 2023 diner, sent by a Michelin concierge, had Maine lobster, sirloin and tenderloin, and garlic rice to finish.', source: R + 'B468726980/' },
        { text: 'A March 2023 guest found the reasonably priced course average, with no standout dish.', source: R + 'B461580972/' },
      ],
      japanese_sources_summary: '食べログ: ステーキ・鉄板焼き・創作料理、東山区祇園町北側377、京阪祇園四条駅7番出口から徒歩10分、月〜土 17:00〜24:00 (L.O.23:00)、日・祝休み、予約可 (連絡のつく電話番号で)、カード可、電子マネー・QR 不可、カウンター9席、20名まで貸切可、禁煙 (貸切時は喫煙可)、英語メニュー、車椅子可、誕生日プレート、飲み物の持ち込み可、28年目、A5和牛、活けオマール海老、鮑、京野菜、今月のおすすめコースとペアコース。口コミ (2012年9月〜2026年10月、英語): サーロインとヒレ、鉄板で焼くオマール海老、締めのガーリックライス、かぼちゃのスープ、自家製の塩 (2026年9月)、ミシュランのコンシェルジュに勧められた (2023年7月)、平凡だったとの声 (2023年3月)、久しぶりでも笑顔で迎えてくれた (2026年10月)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B113146774/', R + 'B222369491/', R + 'B461580972/', R + 'B468726980/', R + 'B485753143/', R + 'B536472036/', R + 'B537231812/'] },
    cultural_comfort: { level: 'english', note: 'English menu; counter teppanyaki; wheelchair accessible; cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町北側377',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005159, 135.775719); GSI resolves 祇園町北側377 only to the ward, so the Tabelog pin is kept; nearest existing record 5.0 m (kyoto_gion_ashida); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Monthly recommended course', '', 'Courses', 'ask', 'no', 'Tabelog.', 'course'),
      it('', '', 'Garlic rice', '', 'Rice', 'ask', 'no', '2016; 2023.', 'garlic_rice'),
    ] }, {
    cuisine: 'A5和牛、活けオマール海老、鮑、季節の京野菜の鉄板焼きのカウンター、今月のコースとペアコース (食べログ)・サーロインとヒレ、鉄板で焼くオマール海老、締めのガーリックライス、かぼちゃのスープと自家製の塩 (2012〜2026年の口コミ)・10,000〜30,000円ほど (食べログ、2023〜2026年の口コミ)',
    neighborhood: '祇園北側',
    gf_detail: '要確認。鉄板焼きの和牛、海老、鮑、野菜と自家製の塩は小麦を使わないが、ガーリックライスやたれに醤油の可能性。グルテンの情報はない (食べログ、2012〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。和牛、オマール海老、鮑のコース (食べログ)。',
    notes: '[鉄板焼き・祇園、カウンター9席] 28年目の、静かで家庭的な祇園の鉄板のカウンター。A5和牛のサーロインとヒレ、活けオマール海老や鮑を京野菜と自家製の塩で目の前で焼き、ガーリックライスで締め。英語メニューあり。夜のみ、日曜休み。',
  });
}

// ================================================================ 珈琲とカヌレ 京都店 Coffee to Cannele
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26040037/'; const R = TB + 'dtlrvwlst/';
  const H = day(['07:30', '19:00']);
  put({
    id: 'kyoto_coffee_to_cannele', name: '珈琲とカヌレ 京都店 (Coffee to Cannele)', category: 'OMNI',
    lat: 35.00903318786913, lng: 135.76658627039842, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: canelés, toast breakfasts and curry (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: canelés, bacon and eggs, beef curry with cheese (2026 reviews).',
    hours_raw: 'Tuesday–Sunday 7:30–19:00; closed Monday; hours may change (Tabelog). Breakfast first; canelés are served from later in the morning (October 2026). Reservations accepted (Tabelog). Cards, e-money and QR (Tabelog). Non-smoking (Tabelog). Just south of Kyoto City Hall; 5 min walk from Kyoto Shiyakusho-mae Stn (Tabelog; July 2026). Opened 8 September 2023 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kyoto Shiyakusho-mae, south of City Hall',
    cuisine: 'Early-opening café of canelés and coffee (2026 reviews) · breakfast plates such as "Sunrise" bacon and eggs or toast, with an Americano (September–October 2026) · lunch of house beef curry, a baked cheese curry with grilled vegetables, beef tendon curry, with a canelé and coffee jelly in the set (July and October 2026) · bite-size canelés in many flavours, e.g. hojicha and caramel ¥480, chocolate coconut; yuzu tea ¥550, yuzu soda, matcha latte; ¥100 off as a set (August–October 2026) · about ¥1,000–2,000 (Tabelog)',
    website: null, gmaps: gm('珈琲とカヌレ 京都店'), menu_url: null,
    notes: '[Café · near Kyoto City Hall, from 7:30] A small café that opens early for bacon-and-egg breakfasts, serves house beef curry at lunch and, from late morning, a counter of crisp, custardy canelés — hojicha and caramel, chocolate coconut — with coffee or yuzu tea. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a café opened 8 September 2023 south of Kyoto City Hall, with a sister listing of the same name in Aichi. Reviewers in 2026 describe canelés, breakfast from 7:30 and curry at lunch, with kind staff.',
      philosophy: null, specialty: 'Canelés; beef curry.',
      anecdotes: [
        { text: 'A September 2026 traveller began a first morning in Kyoto here with the "Sunrise" bacon and eggs and an Americano.', source: R + 'B534821030/' },
        { text: 'An October 2026 visitor came for canelés at breakfast time and learned the canelés come out later, so had breakfast instead.', source: R + 'B537389522/' },
        { text: 'An August 2026 guest found the hojicha-and-caramel canelé crunchy outside and slightly rare in the middle.', source: R + 'B533492606/' },
      ],
      japanese_sources_summary: '食べログ: カフェ、中京区丸屋町318-1、地下鉄市役所前駅から徒歩5分、火〜日 7:30〜19:00、月曜休み、予約可、カード・電子マネー・QR 可、禁煙、2023年9月8日開店。口コミ (2026年7月〜10月、英語): 市役所の南、いろいろな味のひと口カヌレ (ほうじ茶とキャラメル480円、チョコココナッツ)、ゆず茶550円、セットで100円引き、ゆずソーダ、抹茶ラテ、朝食 (ベーコンエッグのプレート、トースト、アメリカーノ)、カヌレは朝は出ず後から (2026年10月)、材料切れでトーストの朝食ができなかった日も (2026年9月)、昼は自家製のビーフカレー、チーズ焼きカレー、牛すじカレー、セットにカヌレとコーヒーゼリー、親切な店員。',
      confidence: 'medium', sources: [TB, R + 'B532229409/', R + 'B533492181/', R + 'B533492606/', R + 'B534821030/', R + 'B536571601/', R + 'B537389522/', R + 'B537410715/', R + 'B537581722/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Opens 7:30; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区丸屋町318-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009033, 135.766586); cross-checked: GSI 京都府京都市中京区丸屋町318番地 (lot) 34 m; nearest existing record 7.0 m (kyoto_mimasuya_okudohan, 318-3); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533492606/'],
    price_note: 'Prices from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Hojicha and caramel canelé', '¥480', 'Canelés', 'no', 'no', 'August 2026.', 'hojicha_canele'),
      it('', '', 'Yuzu tea', '¥550', 'Drinks', 'ask', 'ask', 'August 2026; ¥100 off as a set.', 'yuzu_tea'),
    ] }, {
    cuisine: 'カヌレとコーヒーの朝早くから開くカフェ (2026年の口コミ)・「サンライズ」のベーコンエッグやトーストの朝食とアメリカーノ (2026年9〜10月)・昼は自家製ビーフカレー、季節の焼き野菜のチーズ焼きカレー、牛すじカレー、セットにカヌレとコーヒーゼリー (2026年7・10月)・いろいろな味のひと口カヌレ (ほうじ茶とキャラメル480円、チョコココナッツ)、ゆず茶550円、ゆずソーダ、抹茶ラテ、セットで100円引き (2026年8〜10月)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '市役所前、市役所の南',
    gf_detail: 'グルテンフリー不可。カヌレ、トーストの朝食、カレー (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。カヌレ、ベーコンエッグ、チーズのビーフカレー (2026年の口コミ)。',
    notes: '[カフェ・市役所のそば、7時半から] 朝早くからベーコンエッグの朝食、昼は自家製ビーフカレー、昼前からは外はカリッと中はしっとりのカヌレ (ほうじ茶とキャラメル、チョコココナッツなど) をコーヒーやゆず茶で。月曜休み。',
  });
}

// ================================================================ 祇園 つじや Gion Tsujia
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26032891/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:30'], ['17:00', '23:00']);
  put({
    id: 'kyoto_gion_tsujia', name: '祇園 つじや (Gion Tsujia)', category: 'OMNI',
    lat: 35.0054275078743, lng: 135.7756358803556, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Omakase of sashimi, saba sushi, grilled dishes and clay-pot rice with soy; preferences can be sent ahead (January 2022). No gluten information (2021–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, crab, bear and wild boar (2021–2025 reviews).',
    hours_raw: 'Daily 12:00–14:30 (last order 12:30) and 17:00–23:00 (last order 20:00); closing days irregular (Tabelog). Reservation only; 100% cancellation fee on the day (Tabelog). Service charge 5% (Tabelog original サ－ビス料5％). Cards (JCB, AMEX); no e-money or QR (Tabelog). Eight counter seats and one private room for 8 upstairs (Tabelog; November 2022). Non-smoking; smoking in the garden (Tabelog). No noren or sign — the shop will collect lost guests from a nearby convenience store if called (December 2021; November 2022). Moved within Gion in August 2019 (August 2023).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion north side, back alley',
    cuisine: 'Omakase Japanese cuisine at a counter (Tabelog; 2021–2026 reviews) · lunch course ¥10,000 and dinner ¥16,000 before tax (August 2023) · daikon and abalone with liver soy, saba sushi, sashimi, grilled dishes, crab in winter, bear and wild-boar hot pot; a choice of clay-pot rice to finish, e.g. Biwa trout or bear rice (+¥1,500); New Year white-miso ozoni (2021–2025 reviews) · a wide sake list (February 2025) · about ¥15,000–30,000 (Tabelog; 2023–2025 reviews)',
    website: null, gmaps: gm('祇園 つじや'), menu_url: null,
    notes: '[Omakase · Gion back alley, 8 seats] An unsigned house down a Gion alley where a chatty chef and partner serve generous omakase: abalone with liver soy, saba sushi, seasonal fish, crab or even bear and boar hot pot in winter, then a choice of clay-pot rice. Reservation only; 5% service; ring if lost.',
    chef_bio: { chef_name: null, roles: ['Chef-owner (husband)', 'Partner (wife)'], origin: 'Gifu (July 2024 review)',
      background: 'Per reviewers: a young couple runs this reservation-only restaurant (January and November 2022), which moved within Gion in August 2019 (August 2023). A July 2024 reviewer describes a cheerful owner from Gifu who loves to talk; a February 2025 reviewer says the owner trained at Okami.',
      philosophy: null, specialty: 'Saba sushi; clay-pot rice.',
      anecdotes: [
        { text: 'A December 2021 guest notes there is no noren: call, and someone comes to fetch you from the nearby convenience store.', source: R + 'B444839807/' },
        { text: 'A February 2025 diner finished with bear rice cooked with seasonal ingredients for ¥1,500 more, after a course so generous it was hard to finish.', source: R + 'B502209657/' },
        { text: 'An August 2023 regular marked the fourth anniversary of the move within Gion and ordered two extra rice dishes alone.', source: R + 'B432139165/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、東山区祇園町北側347-51、毎日 12:00〜14:30 (L.O.12:30)、17:00〜23:00 (L.O.20:00)、不定休、完全予約制、当日キャンセルは100%、サービス料5%、カード (JCB・AMEX) 可、電子マネー・QR 不可、カウンター8席と個室1室 (8名)、禁煙 (庭で喫煙可)。口コミ (2021年12月〜2026年10月、英語): 暖簾も看板もない路地の店で迷ったら電話すると近くのコンビニまで迎えに来てくれる、若い夫婦で営む、2019年8月に祇園の中で移転 (2023年8月)、昼のコース10,000円・夜16,000円 (税別、2023年8月)、大根と鮑の肝醤油、鯖寿司、刺身、焼物、冬の蟹、熊や猪の鍋、締めの土鍋ご飯を選べる (琵琶湖のマス、熊のご飯 +1,500円)、正月の白味噌の雑煮、日本酒の種類が多い、岐阜出身の話好きの店主 (2024年7月)、Okami で修業 (2025年2月)。',
      confidence: 'medium', sources: [TB, R + 'B432139165/', R + 'B444839807/', R + 'B445459351/', R + 'B456924333/', R + 'B489057982/', R + 'B489373563/', R + 'B502209657/', R + 'B536766062/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only; no sign — call if lost; 5% service; cards (JCB, AMEX).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側347-51',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005428, 135.775636); GSI resolves only the large 347 block (72 m), so the Tabelog pin is kept; nearest existing record 23.8 m (kyoto_kappo_umetsu_gion); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B432139165/'],
    price_note: 'Prices from an August 2023 review, before tax.', last_checked: TODAY, items: [
      it('', '', 'Lunch course', '¥10,000', 'Courses', 'ask', 'no', 'August 2023; before tax.', 'lunch'),
      it('', '', 'Dinner course', '¥16,000', 'Courses', 'ask', 'no', 'August 2023; before tax.', 'dinner'),
    ] }, {
    cuisine: 'カウンターのおまかせの日本料理 (食べログ、2021〜2026年の口コミ)・昼のコース10,000円、夜16,000円、税別 (2023年8月)・大根と鮑の肝醤油、鯖寿司、刺身、焼物、冬の蟹、熊や猪の鍋、締めは選べる土鍋ご飯 (琵琶湖のマス、熊のご飯 +1,500円など)、正月の白味噌の雑煮 (2021〜2025年の口コミ)・豊富な日本酒 (2025年2月)・15,000〜30,000円ほど (食べログ、2023〜2025年の口コミ)',
    neighborhood: '祇園北側、路地',
    gf_detail: '要確認。刺身、鯖寿司、焼物、土鍋ご飯などのおまかせで醤油を使う。好みは事前に伝えられる (2022年1月)。グルテンの情報はない (2021〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、蟹、熊、猪 (2021〜2025年の口コミ)。',
    notes: '[おまかせ・祇園の路地、8席] 祇園の路地の看板のない一軒で、話好きの店主と奥さんが出すボリュームのあるおまかせ。鮑の肝醤油、鯖寿司、季節の魚、冬は蟹や熊、猪の鍋、最後に選べる土鍋ご飯。完全予約制、サービス料5%、迷ったら電話を。',
  });
}

// ================================================================ 祇園ほそみ Gion Hosomi
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26018965/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_gion_hosomi', name: '祇園ほそみ (Gion Hosomi)', category: 'OMNI',
    lat: 35.000832265878365, lng: 135.7752911479681, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Obanzai, sashimi, hot pots and tempura, with soy and miso; no gluten information (2017–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, fugu, chicken and dashi (2017–2025 reviews).',
    hours_raw: 'Monday and Wednesday–Sunday 17:00–24:00; closed Tuesday; hours may change (Tabelog). Reservations accepted and advised — it seats only three or four groups (Tabelog; August 2023). The menu shows no prices (September 2025). Cards (VISA, Master, JCB, AMEX, Diners) and e-money (Tabelog). 14 seats: 6 at the counter and two tatami rooms for 4 (Tabelog). Non-smoking (Tabelog). Run by a quiet owner with two women (September 2025). 1F of Deparu Gion, south on Hanamikoji, opposite the Gion Hanamachi art museum and near Yasui Konpiragu (Tabelog; September 2025).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Hanamikoji south, near Yasui Konpiragu',
    cuisine: 'Small Gion restaurant of obanzai, creative Kyoto dishes and nabe, à la carte or omakase (Tabelog; 2023–2026 reviews) · sashimi of tuna, sea bream, hamachi and hamo; agedashi with fig, conger and okra; sautéed sea bream; obanzai (August 2023; September 2025) · earlier favourites: sake-lees hot pot, oden, saikyo-miso black cod, chikuzen-ni, seasonal tempura, fugu, sukiyaki (2012–2019 reviews) · about ¥5,000–9,000 (Tabelog; 2025–2026 reviews)',
    website: null, gmaps: gm('祇園ほそみ'), menu_url: null,
    notes: '[Kyoto dishes and nabe · Hanamikoji south] A small, calm Gion counter and two tatami rooms where a quiet chef sends out obanzai, seasonal sashimi and creative Kyoto plates, by omakase or à la carte, with hot pots in the cold months. Book ahead — only three or four groups fit. Prices are not on the menu. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Chef-owner (unnamed)', 'Staff'], origin: null,
      background: 'Per Tabelog: a 14-seat restaurant of Japanese, creative and nabe cooking on the south side of Hanamikoji. Reviewers since 2012 describe good value, many local regulars and a young chef; in September 2025, a quiet owner working with two women.',
      philosophy: null, specialty: 'Obanzai; seasonal omakase.',
      anecdotes: [
        { text: 'An August 2023 guest celebrated a sister\'s wedding here on the omakase: tuna, sea bream, hamachi and hamo sashimi, then agedashi of fig and conger.', source: R + 'B490243013/' },
        { text: 'A September 2025 party of three, sent by a Kyoto friend, shared obanzai but steered clear of costlier dishes because the menu shows no prices, and left smelling of the kitchen.', source: R + 'B515025695/' },
        { text: 'A November 2024 diner found it welcoming and full of locals, with creative dishes from unusual Kyoto ingredients.', source: R + 'B507210893/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理・創作料理・鍋、東山区花見小路下ル小松町560-10 デパール祇園1F、月・水〜日 17:00〜24:00、火曜休み、予約可、カード (VISA・Master・JCB・AMEX・Diners)・電子マネー可、14席 (カウンター6、座敷4名×2)、禁煙。口コミ (2012年11月〜2026年8月、英語): Gion Hanamachi art museum の向かい、Yasui Konpiragu の近く、3〜4組でいっぱい、コースとアラカルト、まぐろ・鯛・はまち・鱧の刺身、無花果と穴子とオクラの揚げ出し、鯛のソテー、おばんざい、以前は粕汁の鍋、おでん、銀だらの西京焼き、筑前煮、季節の天ぷら、ふぐ、すき焼き、物静かな店主と女性2人 (2025年9月)、メニューに値段がない (2025年9月)、換気が弱く服ににおいがついた (2025年9月)、地元の常連が多い (2024年11月)、会社の会食に (2026年8月)。',
      confidence: 'medium', sources: [TB, R + 'B112517083/', R + 'B116475321/', R + 'B413263232/', R + 'B478416081/', R + 'B490243013/', R + 'B507210893/', R + 'B515025695/', R + 'B534451858/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; prices not on the menu; cards and IC.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区花見小路下ル小松町560-10 デパール祇園1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through August 2026.' },
    pin_source: `Tabelog ${TB} (35.000832, 135.775291); GSI resolves only the large 小松町560 block (134 m), so the Tabelog pin is kept; nearest existing record 53.5 m (kyoto_sobaya_takehana, 560-2); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B490243013/'],
    price_note: 'No item prices in the sources; the menu lists none.', last_checked: TODAY, items: [
      it('', '', 'Omakase', '', 'Courses', 'ask', 'no', 'August 2023.', 'omakase'),
      it('', '', 'Obanzai', '', 'Small plates', 'ask', 'no', 'September 2025.', 'obanzai'),
    ] }, {
    cuisine: 'おばんざい、創作の京料理、鍋の祇園の小さな店、アラカルトかおまかせ (食べログ、2023〜2026年の口コミ)・まぐろ、鯛、はまち、鱧の刺身、無花果と穴子とオクラの揚げ出し、鯛のソテー、おばんざい (2023年8月、2025年9月)・以前の人気は粕汁の鍋、おでん、銀だらの西京焼き、筑前煮、季節の天ぷら、ふぐ、すき焼き (2012〜2019年の口コミ)・5,000〜9,000円ほど (食べログ、2025〜2026年の口コミ)',
    neighborhood: '花見小路の南、Yasui Konpiragu のそば',
    gf_detail: '要確認。おばんざい、刺身、鍋、天ぷらで醤油と味噌を使う。グルテンの情報はない (2017〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、ふぐ、鶏、だし (2017〜2025年の口コミ)。',
    notes: '[京料理と鍋・花見小路の南] 祇園の小さなカウンターと座敷2つで、物静かな料理人がおばんざい、季節の刺身、創作の京料理をおまかせかアラカルトで、寒い時期は鍋も。3〜4組で満席なので予約を。メニューに値段はない。火曜休み。',
  });
}

save();
