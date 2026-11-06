// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 31.
//   + フォレスト FOREST (Showa-style yoshoku in the Zest Oike underground mall; waraji katsu; since 2010)        [core]
//   + 洛甘舎 Rakkan Sha (Japanese-Western patisserie south of Karasuma Oike; since 2015)                     [core]
//   + フレンチダイニング トップ オブ キョウト (revolving French restaurant atop the RIHGA Royal Hotel Kyoto)    [notable]
//   + 本マグロと島ごはん ぱなり 京都河原町三条 Panari (bluefin tuna and Okinawan izakaya near Kawaramachi-Sanjo)  [notable]
//   - RABBIT BAGELS 河原町丸太町店 — chain: the official site lists 20+ shops (Kyoto, Osaka, Fukuoka, Sapporo…).
//   - 高台寺 十牛庵 — Hiramatsu Co., Ltd. restaurant (Tabelog remarks cite the "Hiramatsu Standard"): sub-brand of a
//     large parent (Hiramatsu is on the integrator's large-parent list).
//   - KURO KYOTO — restaurant of THE SODOH HIGASHIYAMA KYOTO, run by Plan・Do・See Inc. (20+ hotels, venues and
//     restaurants on its site): skipped as a sub-brand of a large parent — FLAGGED for the coordinator.
//   Same-name counts first (same brand or operator): フォレスト 1; 洛甘舎 2 (本店 and a counter in JR Kyoto Isetan B1F,
//   official site) — none in data, a small group, the main shop drafted; トップ オブ キョウト 1 — another restaurant of
//   the same hotel (kyoto_teppanyaki_aoi_rihga) is in data, but no hotel-wide record covers the hotel's dining; ぱなり 1.
//   Taken in queue order on 2026-11-06: core 26017133, 26026127; notable 26000987, (26037053 skip), (26043389 skip),
//   (26029601 skip), 26012699. None drafted is in data/kyoto.json by name or address.
//   Service charges checked against Tabelog's Japanese original: トップ オブ キョウト 「サービス料15%」; ぱなり
//   「ディナーのみお通し代あり(380円)」; FOREST and 洛甘舎 have no section.
//   Pins: FOREST's Tabelog point is 166 m from the GSI lot (a long underground mall) and ぱなり's address matches only to
//   town level, so both loc_precise false.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-31');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26037053', 'chain: RABBIT BAGELS lists 20+ shops on its official site (rabbitbagels.jp: Kyoto, Osaka, Fukuoka, Sapporo, Tokyo, Kobe, Nara…)');
skip('26029601', 'sub-brand of a large parent: 高台寺 十牛庵 is a Hiramatsu Co., Ltd. restaurant (Tabelog remarks cite the "Hiramatsu Standard")');
skip('26043389', 'sub-brand of a large parent: KURO KYOTO is the restaurant of THE SODOH HIGASHIYAMA KYOTO, run by Plan・Do・See Inc. (20+ hotels, venues and restaurants listed on thesodoh.com) — flagged for review');

// ================================================================ フォレスト FOREST
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26017133/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://zestoike.com/?p=5285';
  const H = day(['11:00', '21:30']);
  put({
    id: 'kyoto_forest_zest_oike', name: 'フォレスト (FOREST)', category: 'OMNI',
    lat: 35.010833, lng: 135.766720, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: breaded cutlets, shrimp tempura and fried sets with demi-glace sauce (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cutlets, hamburg steak and fried meat sets (2026 reviews).',
    hours_raw: '11:00–21:30 (last order 20:00) daily; closed New Year\'s Day (Tabelog). Phone bookings only during weekday 11:30–13:30 and weekend/holiday 11:30–14:30; no online bookings (Tabelog). Zest Oike gives its restaurants\' hours as 11:00–21:00. 13 seats; children and strollers welcome; non-smoking; cards, IC cards and QR payments; free Wi-Fi (Tabelog). In the Zest Oike underground mall, toward the back; 2–3 min from Kyoto Shiyakusho-mae Stn (Tabelog; May 2026 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Zest Oike underground mall — Kyoto Shiyakusho-mae Stn',
    cuisine: 'Showa-style yoshoku: the house "waraji katsu" (a large flat cutlet with demi-glace) ¥1,100 (March 2026), A set of hamburg steak and karaage with rice and soup ¥1,430 (March 2026), beef cutlet ¥1,490 (January 2026), demi-katsu don ¥990 (July 2026), shrimp tempura, the "Forest" sampler set, retro pudding, coffee; an after-meal drink ¥300 with a set (2026 reviews)',
    website: SITE, gmaps: gm('FOREST ゼスト御池'), menu_url: TB + 'dtlmenu/',
    notes: "[Yoshoku · Zest Oike underground mall] An old-style Western diner under Kawaramachi-Oike, known for its big waraji katsu in demi-glace — revived, a reviewer says, from a long-gone Kyoto yoshoku house. Lunch sets around ¥1,000–1,500; retro pudding and coffee in the afternoon. Open daily from 11:00.",
    chef_bio: { chef_name: null, roles: ['Operator unnamed in the sources'], origin: null,
      background: 'Opened 11 December 2010 (Tabelog). An August 2026 reviewer says the waraji katsu revives a dish popular at a long-established Kyoto yoshoku restaurant of the Showa era.',
      philosophy: null, specialty: 'Waraji katsu with demi-glace.',
      anecdotes: [
        { text: 'A March 2026 diner had read reviews calling the rice soft but found it fine — "maybe it depends on who cooks it".', source: R + 'B523582261/' },
        { text: 'Arriving at the 11:00 opening in March 2026, a guest left at noon to find a queue waiting.', source: R + 'B524469644/' },
        { text: 'A self-described grandpa came in October 2026 after an exhibition at Kyocera Cube for waraji katsu and retro pudding.', source: R + 'B537990552/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): FOREST (フォレスト)、洋食、中京区下本能寺前町492-1 ゼスト御池 B1F、京都市役所前駅から徒歩2〜3分、11:00〜21:30 (L.O. 20:00)、元日以外無休、電話予約は平日11:30〜13:30・土日祝11:30〜14:30のみ (ネット予約不可)、13席、子供可、禁煙、カード・電子マネー・QR 可、2010年12月11日オープン。ゼスト御池: レストラン 11:00〜21:00。口コミ (2026年1〜10月、英語): わらじカツ1,100円、ハンバーグと唐揚げのAセット1,430円、ビーフカツ1,490円、デミカツ丼990円、海老天、フォレスト定食、食後の飲み物300円、レトロなプリン、昭和の洋食の復刻。',
      confidence: 'medium', sources: [TB, SITE, R + 'B522045433/', R + 'B523582261/', R + 'B524334980/', R + 'B524469644/', R + 'B524498605/', R + 'B525789475/', R + 'B529365446/', R + 'B531701271/', R + 'B534109561/', R + 'B537990552/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual set-meal diner in a shopping mall.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区下本能寺前町492-1 ゼスト御池 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop and the Zest Oike shop page; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.010833, 135.766720); GSI 京都府京都市中京区下本能寺前町492番地 (lot) 166m — a long underground mall, so loc_precise false; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523582261/', R + 'B524498605/', R + 'B525789475/', R + 'B531701271/'],
    price_note: 'No menu read; prices from 2026 reviews.', last_checked: TODAY, items: [
      it('わらじカツ', 'waraji katsu', 'Waraji katsu (large flat cutlet, demi-glace)', '¥1,100', 'Set meals', 'no', 'no', 'March 2026 review.', 'waraji_katsu'),
      it('', '', 'Set A: hamburg steak and karaage, rice and soup', '¥1,430', 'Set meals', 'no', 'no', 'March 2026 review.', 'set_a'),
      it('', '', 'Beef cutlet with salad', '¥1,490', 'Set meals', 'no', 'no', 'January 2026 review.', 'beef_katsu'),
      it('', '', 'Demi-katsu don with soup', '¥990', 'Rice bowls', 'no', 'no', 'July 2026 review.', 'demi_katsu_don'),
    ] }, {
    cuisine: '昭和の洋食: 名物のわらじカツ (大きく薄いカツにデミグラスソース) 1,100円 (2026年3月)、ハンバーグと唐揚げにご飯とスープのAセット1,430円 (2026年3月)、ビーフカツ1,490円 (2026年1月)、デミカツ丼990円 (2026年7月)、海老天、「フォレスト」の盛り合わせ定食、レトロなプリン、コーヒー。セットの食後の飲み物300円 (2026年の口コミ)',
    neighborhood: 'ゼスト御池の地下街。京都市役所前駅',
    gf_detail: 'グルテンフリー不可。パン粉のカツ、海老天、デミグラスソースの揚げ物の定食 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。カツ、ハンバーグ、肉の揚げ物の定食 (2026年の口コミ)。',
    notes: '[洋食・ゼスト御池の地下街] 地下街の昔ながらの洋食屋。名物はデミグラスソースの大きなわらじカツで、口コミによれば京都の老舗洋食店の味の復刻。ランチの定食は千〜1,500円ほど。午後はレトロなプリンとコーヒーも。11時から毎日営業。',
  });
}

// ================================================================ 洛甘舎
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26026127/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://rakkansha.jp/';
  const H = day(['11:00', '18:00']);
  put({
    id: 'kyoto_rakkansha', name: '洛甘舎 (Rakkan Sha)', category: 'OMNI',
    lat: 35.007412, lng: 135.760975, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: cakes, financiers, cookies, pie and butter sand (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: butter, cream, milk and eggs in the cakes and baked goods (2026 reviews).',
    hours_raw: '11:00–18:00; closed Wednesday (Tabelog). The official site says to check its calendar for hours and closures. No bookings; 6 eat-in seats; one drink per person when eating in (April 2026 review). Cash only — no cards, e-money or QR (Tabelog). Non-smoking. 3–4 min from Karasuma Oike Stn exit 5 (official site; Tabelog). A second counter sells in the JR Kyoto Isetan B1F sweets floor (official site).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'South of Karasuma Oike — 4 min from Karasuma Oike Stn',
    cuisine: 'Patisserie of Japanese ingredients in Western sweets — matcha, wasanbon sugar, kudzu starch (official site): strawberry shortcake, sakura mousse ¥660 with tea ¥484 (April 2026), banana-chestnut pie, peach parfait, Rakkan matcha pudding ¥594 to take away (July 2026), monaka-shell financiers ¥200 each or six for ¥1,200 (October 2026), butter sand with white-bean-paste cookies, cookies and pound cake (2026 reviews)',
    website: SITE, gmaps: gm('洛甘舎 京都'), menu_url: null,
    notes: "[Patisserie & tea · near Karasuma Oike] A bright glass-fronted cake shop with six seats, joining Japanese ingredients and French technique: matcha pudding with wasanbon, butter sand made with white bean paste, financiers in a monaka shell (¥200), and seasonal cakes with tea. Cash only; closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Patisserie team (unnamed)'], origin: null,
      background: 'Opened 19 August 2015 (Tabelog). The official site lists the main shop and a counter in JR Kyoto Isetan; its sweets were chosen as Kyoto City hometown-tax gifts.',
      philosophy: '和魂洋才 (Japanese spirit, Western skill): carefully chosen Japanese ingredients such as matcha, wasanbon and kudzu starch, raised by Western pastry technique (official site).',
      specialty: 'Matcha pudding; monaka financier; butter sand.',
      anecdotes: [
        { text: 'An April 2026 visitor having sakura mousse was given a free bite of matcha terrine.', source: R + 'B527303134/' },
        { text: 'An August 2026 customer noticed quite a few international customers in the small eat-in space.', source: R + 'B534508073/' },
        { text: 'Having bought cookies at the Kyoto Station counter, a visitor found the shop in April 2026 and praised the kind staff.', source: R + 'B526955254/' },
      ],
      japanese_sources_summary: '公式サイト: パティスリー洛甘舎 (らっかんしゃ)、和魂洋才、抹茶・和三盆・吉野本葛などの和素材を洋菓子の技で、本店は中京区三文字町227-1 藤六ビル1F (東洞院六角西北角)、烏丸御池駅5番出口から徒歩3分、営業日はカレンダーで確認、ジェイアール京都伊勢丹 B1F 洋菓子売場にも店、京都市ふるさと納税の返礼品。食べログ (店舗会員): ケーキ・カフェ・スイーツ、11:00〜18:00、水曜休み、予約不可、6席、カード・電子マネー不可、2015年8月19日オープン。口コミ (2026年4〜10月、英語): いちごのショートケーキ、桜のムース660円、紅茶484円、ワンドリンク制、バナナと栗のパイ、桃のパフェ、抹茶プリン594円 (持ち帰り)、最中フィナンシェ1個200円・6個1,200円、白餡入りのバターサンド、海外の客も多い。',
      confidence: 'medium', sources: [TB, SITE, R + 'B526955254/', R + 'B527303134/', R + 'B529170279/', R + 'B534508073/', R + 'B534622328/', R + 'B535506605/', R + 'B535903452/', R + 'B537189473/', R + 'B538004510/', R + 'B538042232/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point at the showcase; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三文字町227-1 藤六ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop and the official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007412, 135.760975); cross-checked: GSI 京都府京都市中京区三文字町227番地 (lot) 64m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527303134/', R + 'B535506605/', R + 'B538042232/'],
    price_note: 'No menu read; prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Sakura mousse', '¥660', 'Cakes', 'no', 'no', 'April 2026 review; seasonal.', 'sakura_mousse'),
      it('', '', 'Rakkan pudding (matcha), take-away', '¥594', 'Take-away', 'ask', 'no', 'Made with wasanbon; July 2026 review.', 'matcha_pudding'),
      it('', '', 'Monaka financier (box of 6 ¥1,200)', '¥200', 'Take-away', 'no', 'no', 'Plain, matcha, raspberry, chocolate; October 2026 review.', 'monaka_financier'),
      it('', '', 'Tea', '¥484', 'Drinks', 'ask', 'ask', 'One drink per person when eating in; April 2026 review.', 'tea'),
    ] }, {
    cuisine: '和素材を洋菓子にするパティスリー。抹茶、和三盆、吉野本葛 (公式サイト): いちごのショートケーキ、桜のムース660円と紅茶484円 (2026年4月)、バナナと栗のパイ、桃のパフェ、持ち帰りの抹茶プリン594円 (2026年7月)、最中の皮のフィナンシェ1個200円・6個1,200円 (2026年10月)、白餡入りのクッキーのバターサンド、クッキーやパウンドケーキ (2026年の口コミ)',
    neighborhood: '東洞院六角、烏丸御池の南。烏丸御池駅から徒歩4分',
    gf_detail: 'グルテンフリー不可。ケーキ、フィナンシェ、クッキー、パイ、バターサンド (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ケーキや焼き菓子にバター、生クリーム、牛乳、卵 (2026年の口コミ)。',
    notes: '[洋菓子と喫茶・烏丸御池近くの東洞院六角] ガラス張りの明るい6席のケーキ屋。和の素材とフランス菓子の技を合わせ、和三盆の抹茶プリン、白餡のバターサンド、最中の皮のフィナンシェ (200円)、季節のケーキと紅茶。現金のみ。水曜休み。',
  });
}

// ================================================================ フレンチダイニング トップ オブ キョウト
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26000987/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.rihga.co.jp/kyoto/restaurant/list/top_of_kyoto';
  const H = day(['07:30', '10:00'], ['12:00', '15:30'], ['17:00', '21:30']);
  put({
    id: 'kyoto_top_of_kyoto_rihga', name: 'フレンチダイニング トップ オブ キョウト (French Dining Top of Kyoto)', category: 'MOM_AND_POP',
    lat: 34.986125, lng: 135.752474, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. French courses with bread and sauces; the hotel asks guests with food allergies to tell staff, and a June 2026 diner said dietary preferences were handled perfectly (official site; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Courses are fish and meat; dietary requests were accommodated for a June 2026 diner (2026 reviews).',
    hours_raw: 'Breakfast 7:30–10:00 (last order 9:30), lunch 12:00–15:30 (last order 14:00), dinner 17:00–21:30 (last order 20:00); weekend and holiday lunch in two sittings, 11:30–13:00 and 13:30–15:00; irregular closures, see the official calendar (official site; Tabelog). Breakfast ¥4,301, lunch from ¥7,000, dinner from ¥14,000, tax and service included (official site). Service charge: 15% — Tabelog\'s Japanese original says 「サービス料15%」. Dress code at dinner: no T-shirts, shorts or sandals. 88 seats, all by the window on a floor that turns 360° in about 90 minutes; two private rooms (2–8 people, extra charge) do not rotate (official site; 2026 reviews). Children welcome; wheelchair accessible; non-smoking; cards (Tabelog). 14F of the RIHGA Royal Hotel Kyoto — change to the restaurant lift on 11F; 7 min walk west of JR Kyoto Stn, or the hotel shuttle bus (official site; August 2026 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'RIHGA Royal Hotel Kyoto, west of Kyoto Station',
    cuisine: 'French courses with a 360° view: lunch from ¥7,000, dinner from ¥14,000 (official site); a seasonal dinner course, the "Manege" lunch course, bouquet-style plates, salmon with edible flowers, chocolate mousse and a whole cake for celebrations (2026 reviews) · set breakfast ¥4,301 with Kyoto vegetables, pork, eggs and pastries, or the hotel curry (official site; June–October 2026 reviews)',
    website: SITE, gmaps: gm('トップ オブ キョウト リーガロイヤルホテル京都'), menu_url: SITE,
    notes: "[Revolving French · RIHGA Royal Hotel Kyoto, by Kyoto Station] Billed as Japan's only revolving observation French restaurant: every table is at the window as the floor turns once in about 90 minutes past Kyoto Tower, Toji and Higashi Honganji. Lunch from ¥7,000, dinner from ¥14,000 (tax and service included); breakfast too. Popular for anniversaries.",
    chef_bio: { chef_name: '石橋 敬太', roles: ['Chef'], origin: null,
      background: 'Per the official site: winner of several cooking competitions, including the 食の都大阪グランプリ; worked at the RIHGA Royal Hotel\'s 「シャンボール」 and was sous-chef at 「ザ レイ」 before becoming chef here; trained in France at 「ジャンフランソワ ピエージュ」 (Paris, two stars) and 「クリストフ バッキエ」 (now La Table du Castellet, three stars).',
      philosophy: 'Seasonal produce and the traditions of French cooking, each plate made with care (official site).',
      specialty: 'Seasonal French courses.',
      anecdotes: [
        { text: 'A June 2026 lunch guest said staff accommodated dietary preferences perfectly.', source: R + 'B530493482/' },
        { text: 'An August 2026 couple took a private lift up for an anniversary dinner and were each given a single rose.', source: R + 'B533844762/' },
        { text: 'A September 2026 private-room lunch dragged to three hours; the diner called staff about three times and felt the room was short-staffed.', source: R + 'B536162266/' },
        { text: 'A July 2026 breakfast guest found the hotel curry, over ¥4,000, just average, and heard the hum of the turning mechanism.', source: R + 'B533954442/' },
      ],
      japanese_sources_summary: '公式サイト (リーガロイヤルホテル京都): ホテル最上階、日本唯一の回転展望フレンチレストラン、14階 (11階で専用エレベータ)、朝食 7:30〜10:00、ランチ 12:00〜15:30、ディナー 17:00〜21:30、不定休、朝食4,301円・ランチ7,000円〜・ディナー14,000円〜 (税・サービス料込)、88席、個室2室 (回転しない、別料金)、ディナーのドレスコード、シェフ 石橋 敬太 (コンクール受賞、シャンボール、ザ レイのスーシェフ、ジャンフランソワ ピエージュ、クリストフ バッキエで研鑽)。食べログ (店舗会員): フレンチ、下京区松明町1 リーガロイヤルホテル京都 14F、サービス料15%、土日祝ランチは2部制、車椅子可、子供可。口コミ (2026年6〜10月、英語): 約90分で一周、Kyoto Tower や Toji、記念日に一輪のバラ、Manege のランチコース、遅いサービスへの不満、朝食のカレーは平凡という声。',
      confidence: 'medium', sources: [TB, SITE, R + 'B530493482/', R + 'B530541213/', R + 'B531265483/', R + 'B533844762/', R + 'B533954442/', R + 'B533956295/', R + 'B534704295/', R + 'B535908361/', R + 'B536162266/', R + 'B537241599/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Large hotel restaurant; the hotel site is in English and other languages; dinner dress code.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区松明町1 リーガロイヤルホテル京都 14F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the restaurant and the hotel\'s official page; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.986125, 135.752474); cross-checked: GSI 京都府京都市下京区松明町1番地 (lot) 17m; 26.3 m from kyoto_teppanyaki_aoi_rihga (same hotel); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [SITE],
    price_note: 'Floors from the official site, tax and service included.', last_checked: TODAY, items: [
      it('朝食', '', 'Breakfast', '¥4,301', 'Courses', 'no', 'no', 'Official site.', 'breakfast'),
      it('ランチ', '', 'Lunch course', '¥7,000~', 'Courses', 'ask', 'ask', 'Official site.', 'lunch_course'),
      it('ディナー', '', 'Dinner course', '¥14,000~', 'Courses', 'ask', 'ask', 'Official site.', 'dinner_course'),
    ] }, {
    cuisine: '360度の眺めとフランス料理のコース: ランチ7,000円〜、ディナー14,000円〜 (公式サイト)。季節のディナーコース、ランチの「Manege」コース、花束のような盛り付け、鮭とエディブルフラワー、チョコレートムース、お祝いのホールケーキ (2026年の口コミ)・朝食は4,301円で京都の野菜や豚肉、卵、パン、またはホテルのカレー (公式サイト、2026年6〜10月の口コミ)',
    neighborhood: '京都駅の西、リーガロイヤルホテル京都',
    gf_detail: '要確認。パンやソースのあるフランス料理のコース。ホテルは食物アレルギーの客に係員への申し出を求めており、2026年6月の客は食事の希望に完璧に応じてもらえたという (公式サイト、2026年の口コミ)。',
    vegan_detail: '要確認。コースは魚と肉。2026年6月の客は食事の希望に応じてもらえた (2026年の口コミ)。',
    notes: '[回転するフレンチ・京都駅そばのリーガロイヤルホテル京都] 日本唯一の回転展望フレンチレストランとうたう店。全席窓際で、床が約90分で一周し、Kyoto Tower や Toji、Higashi Honganji が順に見える。ランチ7,000円〜、ディナー14,000円〜 (税・サービス料込)。朝食も。記念日に人気。',
  });
}

// ================================================================ 本マグロと島ごはん ぱなり 京都河原町三条
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26012699/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '24:00']); const F = day(['12:00', '24:00']);
  put({
    id: 'kyoto_panari_kawaramachi_sanjo', name: '本マグロと島ごはん ぱなり 京都河原町三条 (Honmaguro to Shimagohan Panari)', category: 'OMNI',
    lat: 35.009529, lng: 135.769372, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tuna bowls with sweet soy sauce, Okinawa soba (wheat), spring rolls; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a tuna and Okinawan izakaya (Tabelog; 2026 reviews).',
    hours_raw: 'Mon and Fri 17:00–24:00; Tue–Thu, Sat, Sun and holidays 12:00–24:00; irregular holidays (Tabelog). Bookings online — the phone line was out of order, questions by Instagram DM (Tabelog); seating not guaranteed at busy times. Charge: Tabelog\'s Japanese original says 「ディナーのみお通し代あり(380円)」 — a ¥380 appetizer fee at dinner only. Smoking allowed (Tabelog). Shoes off; counter, sofa seats, sunken kotatsu tables and a loft (Tabelog; September 2026 review). QR ordering and payment (September 2026 review). Cards, IC cards and PayPay (Tabelog). Up a narrow entrance to the 2nd floor on Kawaramachi north of Sanjo; 2 min from Kyoto Shiyakusho-mae Stn (Tabelog; September 2026 review).',
    hours: { 0: D, 1: F, 2: F, 3: F, 4: D, 5: F, 6: F }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi north of Sanjo — 2 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Bluefin tuna from the central market and Okinawan home cooking (Tabelog): lunch mini-bowl sets of two or three kinds — lean tuna, negitoro, seared cheek, poke, sea grapes — with aasa seaweed soup; the Panari bowl and Honmaguro bowl; tuna platters for two or large; shrimp-and-cream-cheese spring rolls, taco salad, goya, mozuku, grilled dried squid, house Okinawa soba and rafute; Orion beer, kiwi sour; lunchtime all-you-can-drink (Tabelog; 2026 reviews)',
    website: 'http://www015.upp.so-net.ne.jp/panari/', gmaps: gm('本マグロと島ごはん ぱなり 京都河原町三条'), menu_url: TB + 'dtlmenu/',
    notes: "[Tuna & Okinawan izakaya · Kawaramachi-Sanjo] A shoes-off upstairs hideaway with sofa seats and kotatsu tables: bluefin tuna bowls with sea grapes at lunch, tuna platters, goya and Okinawa soba with Orion beer at night, open to midnight. Lunch about ¥1,500; dinner ¥4,000–5,000 with a ¥380 appetizer. Smoking allowed.",
    chef_bio: { chef_name: null, roles: ['Operator unnamed in the sources'], origin: null,
      background: 'Per Tabelog: bluefin tuna bought at the central market, house-made Okinawa soba and rafute, and celebration dessert plates with message cards.',
      philosophy: null, specialty: 'Bluefin tuna bowls; Okinawan dishes.',
      anecdotes: [
        { text: 'Arriving at 21:00 after a concert in September 2026, a couple sat with legs stretched at a round kotatsu table; spicy grilled edamame came as the ¥380 appetizer, and the bill for two was ¥8,320.', source: R + 'B501691532/' },
        { text: 'An October 2026 diner found the Honmaguro bowl\'s lean tuna dry and the fatty tuna off-colour and smelly — too poor to eat — while the Panari bowl was fine.', source: R + 'B537766381/' },
        { text: 'In October 2026, when the appetizer turned out to be edamame, staff asked whether a guest wanted to cancel an edamame order.', source: R + 'B537984319/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 本マグロと島ごはん ぱなり 京都河原町三条、居酒屋・沖縄料理・海鮮、中京区河原町通三条上ル恵比寿町534-6 エリゼビル2F、京都市役所前駅から徒歩2分、月金 17:00〜24:00、火水木土日祝 12:00〜24:00、不定休、ディナーのみお通し代380円、40席、喫煙可、中央市場の本マグロ、自家製の沖縄そばとラフテー、昼飲みの飲み放題、ロフト席・ソファ席・掘りごたつ、電話不通のためネット予約・Instagram の DM で問い合わせ。口コミ (2026年9〜10月、英語): ミニ丼2種・3種セット (赤身、ねぎとろ、ほほ肉の炙り、ポキ、海ぶどう)、アーサ汁、マグロの盛り合わせ、ゴーヤー、もずく、QR 注文、靴を脱いで上がる、本マグロ丼の質がひどかったという声。',
      confidence: 'medium', sources: [TB, R + 'B501691532/', R + 'B535049887/', R + 'B535807725/', R + 'B536050824/', R + 'B536498618/', R + 'B536583929/', R + 'B537575985/', R + 'B537766381/', R + 'B537771024/', R + 'B537984319/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR ordering; shoes off; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区河原町通三条上ル恵比寿町534-6 エリゼビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009529, 135.769372); GSI matched only the town (京都府京都市中京区恵比須町), so loc_precise false; 9.0 m from kyoto_istanbul_saray; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B501691532/'],
    price_note: 'No menu read; only the appetizer fee is priced in the sources.', last_checked: TODAY, items: [
      it('お通し', 'otoshi', 'Appetizer (dinner only)', '¥380', 'Charges', 'ask', 'ask', 'Tabelog; grilled spicy edamame in September 2026.', 'otoshi'),
      it('', '', 'Mini tuna bowl set (two or three kinds) with aasa soup', '', 'Lunch', 'ask', 'no', '2026 reviews.', 'mini_don_set'),
    ] }, {
    cuisine: '中央市場の本マグロと沖縄の家庭料理 (食べログ): ランチはミニ丼2種・3種のセット (赤身、ねぎとろ、ほほ肉の炙り、ポキ、海ぶどう) にアーサ汁、ぱなり丼と本マグロ丼、2人前や大盛りのマグロの盛り合わせ、海老とクリームチーズの春巻き、タコサラダ、ゴーヤー、もずく、スルメの炙り、自家製の沖縄そばとラフテー、Orion ビール、キウイサワー、昼の飲み放題 (食べログ、2026年の口コミ)',
    neighborhood: '三条の北の河原町。京都市役所前駅から徒歩2分',
    gf_detail: '要確認。甘い醤油のマグロ丼、沖縄そば (小麦)、春巻き。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。マグロと沖縄料理の居酒屋 (食べログ、2026年の口コミ)。',
    notes: '[マグロと沖縄料理の居酒屋・河原町三条] 靴を脱いで上がる2階の隠れ家で、ソファ席や掘りごたつも。昼は海ぶどうをのせた本マグロの丼、夜はマグロの盛り合わせ、ゴーヤー、沖縄そばに Orion ビール、深夜0時まで。ランチは1,500円ほど、夜は4千〜5千円ほどで、お通し380円。喫煙可。',
  });
}

save();
