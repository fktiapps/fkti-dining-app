// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 102.
//   + café de 505 (カフェ・ド・ゴマルゴ) (café of the National Museum of Modern Art, Kyoto, Okazaki) — rest
//   + Tato (Spanish bar run by its Spanish owner, Tato, near Jingu-Marutamachi) — rest
//   + astrea coffee (specialty coffee stand with seasonal fruit sandwiches, Shimogyo) — rest
//   + 鴨川製麺所 (Kamogawa Seimenjo) (half-self-service matcha udon shop by Keihan Shichijo) — rest
//   Core and notable tiers have nothing left in this lane (2026-11-26); rest tier, nearest-first from `next rest 2000`.
//   No integrator prefetch this round: fetched by this worker with fetchshop.mjs (Tabelog /en/, 3 s between requests).
//   Chain checks (2026-11-26): Tabelog keyword search finds one ゴマルゴ and one 鴨川製麺所; astrea's own site and Tato's
//   reviews name no other branch. café de 505's operator is not named on the museum page; the Tabelog website link points to
//   kobe505.co.jp (a Kobe domain, 403 on fetch), so the operator's size is unverified — flagged in the report.
//   None of the four is in data/kyoto.json or another worker's pending script.
//   Charges: none listed on Tabelog for the four. No halal claims; no owner deaths; no remarks about other diners beyond
//   the neutral, multi-review note on astrea's overseas visitors.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-26';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-102');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ café de 505
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000914/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.momak.go.jp/Japanese/guide/museumShop.html';
  const H = day(['10:00', '18:00']);
  put({
    id: 'kyoto_cafe_de_505_momak', name: 'café de 505 (カフェ・ド・ゴマルゴ)', category: 'OMNI',
    lat: 35.012314, lng: 135.782032, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: fresh pasta of 100% durum semolina (museum page), sandwiches and bread with the sets (2025–26 reviews). No gluten-free option mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: carbonara with pancetta and egg yolk, bacon tomato pasta, egg sandwiches, ice cream (museum page; 2025–26 reviews). The house soy milk pudding’s other ingredients are not stated; ask.',
    hours_raw: 'Tue–Sun 10:00–18:00; Fridays during special exhibitions 10:00–19:00; last order 30 minutes before closing; closed Monday, and when Monday is a holiday it follows the museum, opening that day and closing the next (museum page, read 2026-11-26). Tabelog lists 10:00–17:30, Tuesday to Sunday. No seat reservations (museum page). No museum ticket needed for the café (museum page; November 2025). Cards (JCB, AMEX, Diners) and QR; no e-money (Tabelog). 40 seats, terrace seats non-smoking (Tabelog). Breakfast 10:00–11:00 (May and September 2026). Busy at lunch and during popular exhibitions (November 2025; November 2026); in May 2026 a reviewer saw groups waiting while the room was about 60% full. Room for strollers and wheelchairs (September 2026).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Okazaki — National Museum of Modern Art',
    cuisine: 'Glass-walled museum café on the Lake Biwa Canal, with fresh pasta made on an Italian pasta machine (museum page) · bacon tomato pasta ¥1,180 and pancetta and fresh mushroom carbonara ¥1,550 (museum page); the carbonara comes bubbling hot on an iron plate with the yolk to stir in (November 2025, August and September 2026) · exhibition menus, e.g. baked cod with mustard and tomato garlic pasta ¥1,880 (November 2026) and Yatsuhashi gelato (September 2026) · breakfast: open sandwich set ¥760, egg salad on warm sesame bread with a drink (May and September 2026) · baked curry with salad (August 2026) · homemade soy milk pudding ¥700, mitsumame with Tokachi azuki ¥750 (museum page) · coffee ¥550, hojicha ¥500 (museum page), yuzu tea with the sets, glass of white wine ¥600 (May 2026)',
    website: SITE, gmaps: gm('café de 505 京都国立近代美術館'), menu_url: TB,
    notes: '[Café · Okazaki] The café on the first floor of the National Museum of Modern Art, by the great torii of Heian Shrine: glass walls and a shaded terrace over the Lake Biwa Canal, fresh pasta, breakfast sets before 11:00 and dishes tied to the current exhibition. No museum ticket needed; closed Monday; no reservations.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'The café of the National Museum of Modern Art, Kyoto: a glass-walled café facing the Lake Biwa Canal with an open terrace, popular in cherry-blossom season for the trees along the canal (museum page).',
      philosophy: null, specialty: 'Fresh pasta of 100% durum semolina from a pasta machine imported from Italy (museum page).',
      anecdotes: [
        { text: 'A November 2025 regular who usually comes for coffee called it the favourite of all museum cafés for its setting, and found cushions laid on the terrace chairs.', source: R + 'B518435105/' },
        { text: 'A September 2026 visitor, tired from a crowded holiday bus, found the café nearly empty before 11:00 and stumbled on the breakfast menu.', source: R + 'B113568700/' },
      ],
      japanese_sources_summary: '京都国立近代美術館公式サイト: café de 505 (カフェ・ド・ゴマルゴ)、琵琶湖疏水に面したガラス張りのカフェ、オープンテラス、観覧チケットなしで利用可、午前10時〜午後6時 (金曜日の企画展開催中は午後7時まで)、ラストオーダーは閉店30分前、月曜休み (祝日の場合は開館に準じて営業し翌日休業)、座席の予約不可、デュラムセモリナ粉100%の生パスタ、ベーコンのトマトソースパスタ1,180円、カルボナーラ仕立て1,550円、自家製豆乳プリン700円、白川〜みつ豆と十勝小豆〜750円、コーヒー550円。食べログ: カフェ、左京区岡崎円勝寺 京都国立近代美術館内、40席。口コミ (2025年11月〜2026年11月、英語): 朝食のオープンサンドセット760円、展覧会コラボメニュー、焼きカレー、白ワイン600円。',
      confidence: 'medium', sources: [SITE, TB, R + 'B113568700/', R + 'B516358825/', R + 'B516410697/', R + 'B518435105/', R + 'B527609770/', R + 'B528232615/', R + 'B533610423/', R + 'B534753976/', R + 'B535607949/', R + 'B539803295/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the table; cards and QR accepted. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区岡崎円勝寺 京都国立近代美術館内',
    existence: { status: 'confirmed', checked: TODAY, note: 'Museum’s official café page; Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.012314, 135.782032); not cross-checked (worker, no OSM this round); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, R + 'B528232615/', R + 'B527609770/', R + 'B539803295/'],
    price_note: 'Museum page prices (date not shown; the page says prices may have changed) and 2026 review prices.', last_checked: TODAY, items: [
      it('ベーコンのトマトソースパスタ', '', 'Bacon tomato sauce pasta', '¥1,180', 'Pasta', 'no', 'no', 'Museum page.', 'bacon_tomato'),
      it('パンチェッタとフレッシュマッシュルームのカルボナーラ仕立て', '', 'Pancetta and fresh mushroom carbonara', '¥1,550', 'Pasta', 'no', 'no', 'Museum page; reviews November 2025 to September 2026.', 'carbonara'),
      it('', '', 'Baked cod with mustard and tomato garlic pasta (exhibition menu)', '¥1,880', 'Pasta', 'no', 'no', 'November 2026; changes with the exhibition.', 'exhibition_pasta'),
      it('', '', 'Open sandwich set (breakfast)', '¥760', 'Breakfast', 'no', 'no', '10:00–11:00; May and September 2026.', 'open_sandwich'),
      it('自家製豆乳プリン', '', 'Homemade soy milk pudding', '¥700', 'Sweets', 'ask', 'ask', 'Museum page.', 'soy_pudding'),
      it('白川～みつ豆と十勝小豆～', '', '白川 (mitsumame with Tokachi azuki)', '¥750', 'Sweets', 'ask', 'ask', 'Museum page; vanilla ice cream and a drink can be added.', 'mitsumame'),
      it('コーヒー', '', 'Coffee', '¥550', 'Drinks', 'gf', 'vegan', 'Museum page.', 'coffee'),
    ] }, {
    cuisine: '琵琶湖疏水に面したガラス張りの美術館のカフェ。イタリアの製麺機で作る生パスタ (美術館公式サイト)・ベーコンのトマトソースパスタ1,180円、パンチェッタとフレッシュマッシュルームのカルボナーラ仕立て1,550円 (公式サイト)。カルボナーラは鉄板で熱々、卵黄を混ぜて (2025年11月、2026年8月・9月)・展覧会メニュー: 鱈のマスタード焼きとトマトガーリックパスタ1,880円 (2026年11月)、八つ橋のジェラート (2026年9月)・朝食: オープンサンドセット760円、温かいごまパンに卵サラダとドリンク (2026年5月・9月)・焼きカレーとサラダ (2026年8月)・自家製豆乳プリン700円、白川〜みつ豆と十勝小豆〜750円 (公式サイト)・コーヒー550円、ほうじ茶500円 (公式サイト)、セットにゆず茶、グラスの白ワイン600円 (2026年5月)',
    neighborhood: '岡崎。京都国立近代美術館',
    gf_detail: 'グルテンフリーではない。デュラムセモリナ粉100%の生パスタ (公式サイト)、サンドイッチ、セットのパン (2025〜2026年の口コミ)。グルテンフリーの品の記載なし。',
    vegan_detail: 'ヴィーガン不可。パンチェッタと卵黄のカルボナーラ、ベーコンのパスタ、卵のサンドイッチ、アイスクリーム (公式サイト、2025〜2026年の口コミ)。自家製豆乳プリンのほかの材料は記載なし。要確認。',
    notes: '[カフェ・岡崎] 平安神宮の大鳥居のそば、京都国立近代美術館の1階のカフェ。ガラス張りで、琵琶湖疏水に面した木陰のテラス、生パスタ、11時までの朝食セット、開催中の展覧会にちなむメニュー。観覧チケット不要、月曜休み、予約不可。',
  });
}

// ================================================================ Tato
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26035210/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_tato_marutamachi', name: 'Tato', category: 'MOM_AND_POP',
    lat: 35.017587, lng: 135.768019, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: no gluten-free claim. Paella, Iberico ham, marinated octopus and Greek salad are on the menu, but so are bread, bread skewers and Spanish crepes (2025 reviews); nothing is said about how dishes are made.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Iberico ham, mussels, sardines, squid with anchovy, spinach gratin, cheesecake (2023–25 reviews). No plant-based dishes mentioned.',
    hours_raw: 'Daily 17:00–22:00; closed irregularly (Tabelog). Reviewers say the opening time is relaxed, so arrive a little after opening (June 2023, September 2025); closures and new dishes are posted on the shop’s Instagram (September 2023). Reservations taken (Tabelog; a September 2023 reviewer booked a weekend evening); private hire from 12 people (July 2025). Visa and PayPay; no e-money (Tabelog). A standing area and tables (September 2025). The owner cooks alone, so orders take time; paella takes a while, so order it early (September 2023, January and May 2024). Formerly near Teramachi / Kawaramachi, it moved to Marutamachi (April 2022, May 2024).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Near Jingu-Marutamachi — Kamigyo',
    cuisine: 'Spanish bar with a menu split into “liquid” and “solid” (June 2022, December 2025) · premium Iberico ham, “Mother’s Spinach Gratin”, steamed mussels, skewers of bread, Iberico ham and “Manjanji Peppers”, “Spanish Crepes that my mom used to make” (dish names as the reviewer lists them), cheesecake, acorn liqueur with milk, cava and wine: ¥22,920 for two with plenty of wine (September 2025) · pinchos, Greek salad, smoked squid with anchovy, a drink called Verano (December 2025) · paella (2023–24) · Iberico ham S ¥1,380, pickled sardines ¥600, marinated octopus (September 2023)',
    website: null, gmaps: gm('Tato スペインバル 京都 上京区 信冨町'), menu_url: TB,
    notes: '[Spanish bar · Marutamachi] A small, lively, cheerful Spanish bar where the Spanish owner, Tato, cooks alone and talks in Kansai dialect; guests from abroad pin their home town on a world map. Iberico ham, home-style dishes such as “Mother’s Spinach Gratin”, and paella if you order early. Evenings from 17:00, opening time relaxed.',
    chef_bio: { chef_name: 'Tato', roles: ['Owner-chef'], origin: 'Spain',
      background: 'Per reviews: a Spanish owner who has lived in Japan for over 20 years (September 2025) and speaks lively Kansai dialect (April 2022, July 2025); the bar was near Teramachi Shopping Street a few years before 2022, then moved to Marutamachi, and started serving coffee after the move (April 2022). Tato runs the place solo (September 2023); in January 2024 a woman also welcomed guests.',
      philosophy: null, specialty: 'Iberico ham, home-style Spanish dishes, paella.',
      anecdotes: [
        { text: 'A September 2023 reviewer: when guests from abroad come in, the owner greets them in their own languages, and anyone who says where they are from puts a pin on the world map.', source: R + 'B479792303/' },
        { text: 'In July 2025, with the room almost to themselves, a group heard Tato’s stories of Spain and Barcelona; the music went down when the talk got deep.', source: R + 'B510902848/' },
        { text: 'A September 2025 pair, after a long night of wine and dishes at ¥22,920 for two, called it the most cheerful restaurant in Kyoto and advised coming as a second stop, the energy runs so high from opening to close.', source: R + 'B514074792/' },
      ],
      japanese_sources_summary: '食べログ: スペイン料理、上京区信冨町317-2、神宮丸太町から391m、毎日17:00〜22:00、不定休、予約可、貸切可、カード (VISA)・QR (PayPay) 可、電子マネー不可。口コミ (2022年4月〜2025年12月、英語): 関西弁で話すスペイン人のオーナー Tato が一人で切り盛り、日本に20年以上、寺町の近くから丸太町に移転、メニューは「リキッド」と「ソリッド」、イベリコ豚の生ハム、「母のほうれん草グラタン」、ムール貝の蒸し煮、パエリア、世界地図にピンを刺す習わし、開店時間はゆるやか、貸切は12名から。',
      confidence: 'medium', sources: [TB, R + 'B456368627/', R + 'B467928445/', R + 'B471543043/', R + 'B477496862/', R + 'B479792303/', R + 'B485943031/', R + 'B510902848/', R + 'B514074792/', R + 'B518419030/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'The Spanish owner chats in Japanese and greets guests from abroad in their own languages (September 2023). Whether that includes English is not stated.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市上京区信冨町317-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through December 2025.' },
    pin_source: `Tabelog ${TB} (35.017587, 135.768019); not cross-checked (worker, no OSM this round); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B471543043/', R + 'B514074792/', R + 'B518419030/'],
    price_note: 'Few prices quoted; the dated ones are from 2023. The menu varies by day (September 2023).', last_checked: TODAY, items: [
      it('', '', 'Iberico ham (S)', '¥1,380', 'Solid', 'ask', 'no', 'September 2023; premium Iberico ham, September 2025.', 'iberico'),
      it('', '', 'Mother’s spinach gratin', '', 'Solid', 'ask', 'no', 'September 2025.', 'spinach_gratin'),
      it('', '', 'Steamed mussels', '', 'Solid', 'ask', 'no', 'September 2025.', 'mussels'),
      it('', '', 'Smoked squid with anchovy', '', 'Solid', 'ask', 'no', 'December 2025.', 'squid_anchovy'),
      it('', '', 'Greek salad', '', 'Solid', 'ask', 'ask', 'June 2023, December 2025.', 'greek_salad'),
      it('', '', 'Paella', '', 'Solid', 'ask', 'no', 'Takes a while; 2023–24.', 'paella'),
      it('', '', 'Spanish crepes', '', 'Solid', 'no', 'no', 'September 2025.', 'crepes'),
    ] }, {
    cuisine: 'メニューが「リキッド」と「ソリッド」に分かれるスペインバル (2022年6月、2025年12月)・上等なイベリコ豚の生ハム、「母のほうれん草グラタン」、ムール貝の蒸し煮、パンとイベリコ豚の生ハムと Manjanji Peppers の串、「母が作っていたスペインのクレープ」(口コミの料理名)、チーズケーキ、どんぐりのリキュールのミルク割り、カバとワイン: たっぷり飲んで2人で22,920円 (2025年9月)・ピンチョス、グリークサラダ、いかの燻製とアンチョビ、Verano という飲み物 (2025年12月)・パエリア (2023〜2024年)・イベリコ豚の生ハムS1,380円、いわしの酢漬け600円、たこのマリネ (2023年9月)',
    neighborhood: '神宮丸太町の近く。上京区',
    gf_detail: 'GF — 要確認。グルテンフリーの記載なし。パエリア、イベリコ豚の生ハム、たこのマリネ、グリークサラダもあるが、パン、パンの串、スペインのクレープも (2025年の口コミ)。調理法の記載なし。',
    vegan_detail: 'ヴィーガン不可。イベリコ豚の生ハム、ムール貝、いわし、いかとアンチョビ、ほうれん草グラタン、チーズケーキ (2023〜2025年の口コミ)。植物性の料理の記載なし。',
    notes: '[スペインバル・丸太町] スペイン人のオーナー Tato が一人で料理し、関西弁で話す、にぎやかで陽気な小さなスペインバル。海外からの客は世界地図に出身地のピンを刺す。イベリコ豚の生ハム、「母のほうれん草グラタン」などの家庭料理、早めに頼めばパエリア。夜17:00から、開店時間はゆるやか。',
  });
}

// ================================================================ astrea coffee
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26032132/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://astreacoffeekyoto.wixsite.com/astrea';
  const H = day(['07:30', '15:00']);
  put({
    id: 'kyoto_astrea_coffee', name: 'astrea coffee', category: 'OMNI',
    lat: 34.998752, lng: 135.752623, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: fruit press sandwiches, granola, brownie and gateau basque (site; 2025–26 reviews). No gluten-free option mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sandwiches with cream cheese, granola with yogurt, brownie with ice cream, milk drinks (site; 2025–26 reviews). No plant milk mentioned.',
    hours_raw: 'Daily 7:30–15:00; closing days may vary (Tabelog; the shop’s site gives 7:30–15:00). Cards and e-money; no QR (Tabelog). Opened 16 March 2019 (Tabelog). A small white room full of plants, with counter seats; few seats inside (May 2026, January 2026); only one seat left at 8:00 on an August 2026 morning. No phone calls or online meetings inside (January 2026). Windows and doors stand wide open, so dress warmly in the cold months (November 2025). Some items are limited in number each day (site). Takeaway coffee too (August and September 2026). Children and dogs seen with their owners (July 2025, August 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Near Shijo-Omiya and Tanbaguchi — Shimogyo',
    cuisine: 'Specialty coffee stand with Australian-style espresso (March 2025) and a seasonal fruit press sandwich series · café latte ¥600 (March 2025), flat white (November 2025, February 2026), cold brew ¥550 (September 2026), espresso soda (July 2026) · fig sandwich with cream cheese (site); fig sandwich and cold brew about ¥1,350 (September 2025) or a little over ¥1,400 (August 2026) · strawberry fruit sandwich (May 2026) · homemade peach granola with a whole peach and yogurt ¥1,500 (July 2026), with peach tea brewed to order (August 2025) · seasonal granolas, gateau basque, brownie with ice cream (site)',
    website: SITE, gmaps: gm('astrea coffee 京都 下京区 橘町'), menu_url: TB,
    notes: '[Coffee · Shijo-Omiya] A small, plant-filled white coffee stand in a quiet back street, open from 7:30: Australian-style espresso, latte art and a seasonal fruit press sandwich (fig, strawberry) or peach granola. Few seats; no calls or laptop meetings.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A specialty coffee stand opened on 16 March 2019 (Tabelog; site). Per reviews: espresso in the Australian style (March 2025); the owner recommends drinks to regulars (September 2025).',
      philosophy: null, specialty: 'Seasonal fruit press sandwiches and homemade granola with whole fruit.',
      anecdotes: [
        { text: 'A regular of six visits comes back every season for the fruit sandwich series: fig in September 2025 and August 2026, peach granola in August 2025 and July 2026, and early-morning coffee in March 2025.', source: R + 'B501523996/' },
        { text: 'A January 2026 visitor on a business trip liked the latte so much that another one went to the manager at the client’s office as a takeaway gift.', source: R + 'B535342878/' },
      ],
      japanese_sources_summary: '食べログ: コーヒースタンド、下京区橘町31-1、毎日7:30〜15:00、定休日は変動あり、カード・電子マネー可、QR不可、カウンター席、オープン日2019年3月16日。公式サイト: astrea coffee kyoto、7:30〜15:00、桃のグラノーラ、いちじくとクリームチーズのサンド、日によって提供数に限り。口コミ (2025年3月〜2026年9月、英語): オーストラリアスタイルのエスプレッソ、カフェラテ600円、コールドブリュー550円、フルーツサンド、桃のグラノーラ1,500円、植物の多い白い店内、席は少なめ、通話やオンライン会議は不可、11月は窓と扉が開いている、接客が物足りなかったとの声 (2025年11月)。',
      confidence: 'medium', sources: [TB, SITE, R + 'B501523996/', R + 'B503411881/', R + 'B510995421/', R + 'B516559187/', R + 'B522551436/', R + 'B531134676/', R + 'B535342878/', R + 'B535931711/', R + 'B536580713/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter; cards and e-money accepted. March and May 2025 reviewers saw many overseas visitors; an August 2026 one saw few. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区橘町31-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; shop’s own site; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (34.998752, 135.752623); not cross-checked (worker, no OSM this round); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, R + 'B501523996/', R + 'B503411881/', R + 'B535931711/'],
    price_note: 'Prices from 2025–26 reviews; fruit items change with the season.', last_checked: TODAY, items: [
      it('', '', 'Café latte', '¥600', 'Drinks', 'gf', 'no', 'March 2025.', 'latte'),
      it('', '', 'Cold brew', '¥550', 'Drinks', 'gf', 'vegan', 'September 2026.', 'cold_brew'),
      it('', '', 'Fig fruit press sandwich (with cream cheese)', '', 'Food', 'no', 'no', 'With cold brew about ¥1,350 (September 2025), a little over ¥1,400 (August 2026).', 'fig_sandwich'),
      it('', '', 'Strawberry fruit sandwich', '', 'Food', 'no', 'no', 'May 2026.', 'strawberry_sandwich'),
      it('', '', 'Homemade peach granola with a whole peach and yogurt', '¥1,500', 'Food', 'no', 'no', 'Limited number; July 2026.', 'peach_granola'),
    ] }, {
    cuisine: 'オーストラリアスタイルのエスプレッソ (2025年3月) と季節のフルーツプレスサンドのコーヒースタンド・カフェラテ600円 (2025年3月)、フラットホワイト (2025年11月、2026年2月)、コールドブリュー550円 (2026年9月)、エスプレッソソーダ (2026年7月)・いちじくとクリームチーズのサンド (公式サイト)。いちじくのサンドとコールドブリューで約1,350円 (2025年9月)、1,400円少し (2026年8月)・いちごのフルーツサンド (2026年5月)・桃を丸ごと使った自家製グラノーラとヨーグルト1,500円 (2026年7月)、注文後にいれるピーチティーと (2025年8月)・季節のグラノーラ、ガトーバスク、ブラウニーとアイスクリーム (公式サイト)',
    neighborhood: '四条大宮と丹波口の近く。下京区',
    gf_detail: 'グルテンフリーではない。フルーツプレスサンド、グラノーラ、ブラウニー、ガトーバスク (公式サイト、2025〜2026年の口コミ)。グルテンフリーの品の記載なし。',
    vegan_detail: 'ヴィーガン不可。クリームチーズのサンド、ヨーグルトのグラノーラ、アイスクリーム添えのブラウニー、ミルクのドリンク (公式サイト、2025〜2026年の口コミ)。植物性ミルクの記載なし。',
    notes: '[コーヒー・四条大宮] 静かな裏通りの、植物の多い小さな白いコーヒースタンド。朝7:30から。オーストラリアスタイルのエスプレッソとラテアート、季節のフルーツプレスサンド (いちじく、いちご) や桃のグラノーラ。席は少なめ、通話やパソコンでの会議は不可。',
  });
}

// ================================================================ 鴨川製麺所
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26034220/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '21:00']);
  put({
    id: 'kyoto_kamogawa_seimenjo', name: '鴨川製麺所 (Kamogawa Seimenjo)', category: 'OMNI',
    lat: 34.989175, lng: 135.768431, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat udon (made with Kyoto matcha), tempura, chuka soba (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: udon broth (dashi base not stated), chicken tempura, chikuwa tempura, chashu on the chuka soba (2026 reviews). Vegetable tempura (pumpkin, sweet potato, eggplant) is on the menu; ask about the broth and the frying oil.',
    hours_raw: 'Daily 11:00–21:00, holidays included (Tabelog). Opened 7 May 2020 (Tabelog). Half self-service: order and pay at the counter, take the udon to your seat, as at Marugame Seimen (August 2026); staff check a table is free before taking the order (November 2026). Reservations, take-out and delivery (Tabelog). All cards, iD and QUICPay, PayPay and WeChat Pay (Tabelog). 36 seats, sofa seats, wheelchair accessible; children and strollers welcome (Tabelog). A 30-second walk east from Keihan Shichijo station (Tabelog); near Sanjusangendo (August 2026). No waiting at weekday lunch (August 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shichijo — by Keihan Shichijo station',
    cuisine: 'Half-self-service udon shop with slightly thin, pale green noodles made with Kyoto matcha and no colouring (Tabelog) · zaru udon ¥650, served ice-cold (July 2026) · kake udon ¥650 with chicken tempura ¥180 (November 2026) · “Isshoukenmen”, a hearty bukkake udon the shop says has been loved for 40 years (Tabelog), with shrimp tempura, large size (July 2026) · sudachi udon (September 2026) · yamakake udon (August 2026) · warm Kujo green onion udon (August 2026) · yuba udon (October and November 2026) · mushroom and grated daikon udon (October 2026) · tempura of pumpkin, sweet potato, eggplant and chikuwa, soft-boiled egg · chuka soba with a mild white broth (July 2026) · draft beer, sake',
    website: null, gmaps: gm('鴨川製麺所 京都 七条'), menu_url: TB,
    notes: '[Udon · Shichijo] A roomy half-self-service udon shop by Keihan Shichijo station, a short walk from Sanjusangendo: thin, chewy udon tinted green with Kyoto matcha, hot or ice-cold, with tempura to add, from ¥650. Open 11:00–21:00 daily; English menu.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 7 May 2020 near Keihan Shichijo station as a half-self-service udon shop built on Kyoto matcha udon (Tabelog).',
      philosophy: 'Per the listing: “Delicious, affordable, and quick!”',
      specialty: 'Matcha udon made with Kyoto matcha, without colouring (Tabelog).',
      anecdotes: [
        { text: 'An August 2026 visitor from Sanjusangendo was greeted “Irasshaimase!” by a staff member from abroad and seen off with “Ookini!”, which felt heartwarming.', source: R + 'B533789291/' },
        { text: 'A September 2026 visitor walking by the river was drawn in by the sign for sudachi udon and found it covered in thin sudachi slices.', source: R + 'B536540799/' },
      ],
      japanese_sources_summary: '食べログ: うどん、東山区七条通り鞘町西入ル日吉町228、京阪七条駅から徒歩30秒、毎日11:00〜21:00、予約可、テイクアウト・デリバリー可、カード・電子マネー・QR可、36席、ソファ席、車いす可、子ども連れ可、英語・簡体字メニュー、英語を話すスタッフ、オープン日2020年5月7日。店の紹介: 京都の抹茶を練り込んだ着色料なしの抹茶うどん、やや細めの麺、40年愛されるぶっかけうどん。口コミ (2026年7月〜11月、英語): ざるうどん650円、かけうどん650円、鶏天180円、すだちうどん、湯葉うどん、山かけうどん、中華そば、注文して先に払いうどんを受け取るセルフ式。',
      confidence: 'medium', sources: [TB, R + 'B531373332/', R + 'B531500200/', R + 'B531773549/', R + 'B533068277/', R + 'B533789291/', R + 'B536540799/', R + 'B537266224/', R + 'B538603358/', R + 'B539509371/', R + 'B539888647/'] },
    cultural_comfort: { level: 'english', note: 'English and Simplified Chinese menus with photos and English-speaking staff (Tabelog); order at the counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区七条通り鞘町西入ル日吉町228',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (with shop-written highlights); reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (34.989175, 135.768431); not cross-checked (worker, no OSM this round); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B531373332/', R + 'B538603358/', R + 'B531500200/'],
    price_note: 'Prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Zaru udon (matcha udon, cold)', '¥650', 'Udon', 'no', 'no', 'July 2026.', 'zaru'),
      it('', '', 'Kake udon', '¥650', 'Udon', 'no', 'no', 'November 2026.', 'kake'),
      it('', '', 'Isshoukenmen tempura bukkake udon', '', 'Udon', 'no', 'no', 'Large size, with shrimp tempura; July 2026.', 'bukkake'),
      it('', '', 'Sudachi udon', '', 'Udon', 'no', 'no', 'September 2026.', 'sudachi'),
      it('', '', 'Yuba udon', '', 'Udon', 'no', 'no', 'October and November 2026.', 'yuba'),
      it('', '', 'Chuka soba (mild broth)', '', 'Noodles', 'no', 'no', 'July 2026.', 'chuka_soba'),
      it('', '', 'Chicken tempura', '¥180', 'Tempura', 'no', 'no', 'November 2026.', 'toriten'),
    ] }, {
    cuisine: '京都の抹茶を練り込んだ着色料なしの、やや細めで淡い緑のうどんの半セルフ店 (食べログ)・ざるうどん650円、キンキンに冷えて (2026年7月)・かけうどん650円と鶏天180円 (2026年11月)・40年愛されると店が紹介するボリュームのあるぶっかけうどん「Isshoukenmen」(食べログ)、えび天で大盛り (2026年7月)・すだちうどん (2026年9月)・山かけうどん (2026年8月)・温かいねぎうどん (2026年8月)・湯葉うどん (2026年10月・11月)・きのこおろしうどん (2026年10月)・かぼちゃ、さつまいも、なす、ちくわの天ぷら、半熟卵・まろやかな白いスープの中華そば (2026年7月)・生ビール、日本酒',
    neighborhood: '七条。京阪七条駅のそば',
    gf_detail: 'グルテンフリーではない。小麦のうどん (京都の抹茶入り)、天ぷら、中華そば (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。うどんのつゆ (だしの原料は記載なし)、鶏天、ちくわ天、中華そばのチャーシュー (2026年の口コミ)。野菜の天ぷら (かぼちゃ、さつまいも、なす) もある。つゆと揚げ油は要確認。',
    notes: '[うどん・七条] 京阪七条駅のそば、三十三間堂から歩いてすぐの広々とした半セルフのうどん店。京都の抹茶で淡い緑の細めでもちもちのうどんを温かくも冷たくも、天ぷらを添えて650円から。毎日11:00〜21:00、英語メニューあり。',
  });
}

save();
