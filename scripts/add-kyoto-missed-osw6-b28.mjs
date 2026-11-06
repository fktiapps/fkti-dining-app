// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 28.
//   + 串鉄板ぞろんぱ 室町仏光寺店 Kushi Teppan Zoronpa (teppan-grilled skewers and Italian-leaning dishes, Shijo Muromachi)
//   + PIOPIKO (taco bar and lounge of Ace Hotel Kyoto, menu by Wes Avila)
//   + 四方食店 Shikata Shokuten (standing-bar izakaya in a townhouse, Shijo Karasuma)
//   + Bar MICHIya (late-night bar with seafood dishes, Kiyamachi Sanjo)
//   - skip 26022754 圓徳院アメックスラウンジ (not a public restaurant: a cardholders' lounge)
//   - skip 26034280 Café Kitsuné ShinPuhKan Kyoto (chain / sub-brand of Maison Kitsuné)
//   Same-name counts first, per brand or operator (2026-11-05): ぞろんぱ — three in Kyoto on Tabelog (串鉄板ぞろんぱ 室町仏光寺店,
//   なごみ鉄板ぞろんぱ, ぞろんぱ), none in data: a small group, drafted. PIOPIKO — one; Ace Hotel Kyoto has no hotel-wide
//   record (its other restaurant, KOSA, was drafted in osw6-27). 四方食店 — one. Bar MICHIya — one. Café Kitsuné — Tabelog lists
//   Café Kitsuné Aoyama, Shibuya, Fukuoka and this Kyoto shop, a café brand of Maison Kitsuné with shops abroad.
//   Taken on 2026-11-05: `next core 200` gave the Amex lounge (skip), ぞろんぱ 26030662 and PIOPIKO 26034334; `next notable 200`
//   gave 四方食店 26030980, Café Kitsuné (skip) and Bar MICHIya 26006716. None is in data/kyoto.json: grep by name and address
//   (山王町542, 車屋町245-2 エースホテル京都 2F, 姥柳町190-2, 木屋町三条上ル東側 三条木屋町ビルⅡ) found none.
//   Service charges per Tabelog's Japanese original: ぞろんぱ 「お通し代600円」; PIOPIKO 「サービス料10%（表示価格に含む）」;
//   四方食店 and Bar MICHIya none listed.
//   Greg's 2026-11-05 rulings applied; remarks about foreign guests kept as sourced facts.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-28');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26022754', 'not a public restaurant (flagged for a ruling): the Entoku-in Amex Lounge at Kodai-ji is a cardholders’ lounge — "a tranquil and elegant Amex members-only lounge" (May 2026), free with an AMEX Gold card or higher (December 2025, August 2024), serving tea and sweets; Tabelog lists no seats or payment.');
skip('26034280', 'chain / sub-brand of a large parent brand: Café Kitsuné is the café brand of Maison Kitsuné; Tabelog (https://tabelog.com/en/rstLst/?sw=Cafe%20Kitsune) lists Café Kitsuné Aoyama, Shibuya, Fukuoka and this Kyoto shop, and the brand has cafés abroad.');

// ================================================================ ぞろんぱ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26030662/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '24:00']);
  put({
    id: 'kyoto_kushi_teppan_zoronpa', name: '串鉄板ぞろんぱ 室町仏光寺店 (Kushi Teppan Zoronpa)', category: 'OMNI',
    lat: 35.00108, lng: 135.757966, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Teppan-grilled skewers with sauces, okonomiyaki, pasta, croquettes and fried dishes (2025–26 reviews). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat and seafood skewers on a shared teppan; the starters include dashi dishes (2024–26 reviews).',
    hours_raw: '17:30–24:00 (last order 23:00); closed Thursday, with some extra closures listed on Tabelog (Tabelog). Reservations accepted (Tabelog). Appetizer charge ¥600 (Tabelog, Japanese text: 「お通し代600円」). 28 seats at a counter facing the skewer display, plus private and semi-private rooms; private hire for 20–50 (Tabelog; February 2025). Cards and PayPay, no e-money (Tabelog). On Muromachi south of Bukkoji; 3 min from Shijo Stn (Tabelog). Opened 20 March 2018 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Muromachi Bukkoji — 3 min from Shijo Stn',
    cuisine: 'Over 40 original skewers grilled on a teppan — Japanese, Italian and teppan styles fused, from shrimp chili and ebi-mayo to tandoori chicken — plus market fish and about 100 wines picked by a sommelier (Tabelog, shop text; 2025–26 reviews) · omakase of 3 or 5 skewers, or à la carte, each skewer split in two for sharing (January and October 2025) · sashimi, horse yukhoe, braised beef tendon, non-fried crab cream croquette, cream-cheese-stuffed mushrooms, duck with blueberry sauce, fried shrimp with yam (2024–26 reviews) · okonomiyaki with tartar sauce, yakisoba, garlic rice, pasta made to request (2025–26 reviews) · two people paid ¥17,580 à la carte (January 2025)',
    website: 'https://www.zoronpa.com/muromachi/', gmaps: gm('串鉄板ぞろんぱ 室町仏光寺'), menu_url: TB + 'dtlmenu/',
    notes: "[Teppan skewers · Shijo Muromachi, Japanese-Italian on the griddle] A calm counter south of Shijo where a former Italian cook grills over 40 kinds of skewers on a teppan — ebi-mayo, shrimp chili, tandoori chicken — alongside market sashimi, a tartar-topped okonomiyaki and pasta made to order, with a hundred wines. Skewers come halved for sharing. ¥600 appetizer charge. Open to midnight; closed Thursday.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed), a former Italian cook (January 2025 review)'], origin: null,
      background: 'Per Tabelog (the shop’s own text): Zoronpa’s "new challenge" of skewers grilled on the teppan, fusing Japanese, Italian and teppan cooking, with a sommelier’s wines; opened 20 March 2018. Tabelog lists two other Zoronpa shops in Kyoto; an October 2022 diner noted several branches and rusks sold as souvenirs. A January 2025 diner was told the chef is a former Italian cook.',
      philosophy: null, specialty: 'Teppan-grilled skewers; okonomiyaki.',
      anecdotes: [
        { text: 'A March 2026 regular brought friends from Tokyo and Hyogo, who praised the staff’s hospitality.', source: R + 'B487723222/' },
        { text: 'A February 2025 diner found the crab cream croquette unlike any other — not fried at all.', source: R + 'B501230163/' },
        { text: 'A March 2026 diner asked for a pasta by sauce and ingredients and had it made to order.', source: R + 'B524918087/' },
      ],
      japanese_sources_summary: '食べログ: 串焼き・鉄板焼・海鮮、下京区室町通仏光寺下ル山王町542、四条駅から徒歩3分、17:30〜24:00 (L.O. 23:00)、木曜休み (ほか臨時休業あり)、予約可、お通し代600円、28席 (カウンター、個室、半個室)、貸切20〜50名、カード・PayPay 可、2018年3月20日オープン、40種以上のオリジナルの鉄板串、和とイタリアンと鉄板、ソムリエの約100種のワイン。口コミ (2022年10月〜2026年9月、英語): 海老マヨ、海老チリ、串は半分に切って出す、刺身、馬肉のユッケ、牛すじ、揚げない蟹クリームコロッケ、タルタルのお好み焼き、ガーリックライス、注文に応じたパスタ、イタリアン出身の料理人、京都に数店舗。',
      confidence: 'medium', sources: [TB, 'https://www.zoronpa.com/muromachi/', R + 'B462754033/', R + 'B467052600/', R + 'B477263708/', R + 'B487723222/', R + 'B500998529/', R + 'B501230163/', R + 'B501995854/', R + 'B510384071/', R + 'B511898316/', R + 'B515096619/', R + 'B524918087/', R + 'B536617371/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order skewers à la carte or as an omakase set; ¥600 appetizer charge; cards and PayPay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区室町通仏光寺下ル山王町542',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.001080, 135.757966); cross-checked: GSI 京都府京都市下京区山王町542番地 (lot) 35m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B500998529/', TB],
    price_note: 'No item prices found; two people paid ¥17,580 à la carte (January 2025); ¥600 appetizer charge (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Omakase teppan skewers (3 or 5)', '', 'Skewers', 'ask', 'no', 'January 2025.', 'omakase_kushi'),
      it('', '', 'Tartar okonomiyaki', '', 'Teppan', 'no', 'no', 'September 2026.', 'tartar_okonomiyaki'),
      it('', '', 'Appetizer charge', '¥600', 'Charge', '', '', 'Tabelog.', 'otoshi'),
    ] }, {
    cuisine: '和とイタリアンと鉄板を合わせた40種以上のオリジナルの鉄板串 (海老チリ、海老マヨ、タンドリーチキンなど)、市場の魚、ソムリエが選ぶ約100種のワイン (食べログの店の紹介、2025〜2026年の口コミ)・串は3本か5本のおまかせかアラカルトで、半分に切って出す (2025年1月・10月)・刺身、馬肉のユッケ、牛すじの煮込み、揚げない蟹クリームコロッケ、クリームチーズ入りのマッシュルーム、鴨のブルーベリーソース、海老の山芋揚げ (2024〜2026年の口コミ)・タルタルのお好み焼き、焼きそば、ガーリックライス、注文に合わせたパスタ (2025〜2026年の口コミ)・2人でアラカルト17,580円 (2025年1月)',
    neighborhood: '室町仏光寺。四条駅から徒歩3分',
    gf_detail: '要確認。鉄板で焼く串とソース、お好み焼き、パスタ、コロッケ、揚げ物 (2025〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。肉と魚介の串を同じ鉄板で焼き、お通しにも出汁を使う (2024〜2026年の口コミ)。',
    notes: '[鉄板串・四条室町、和とイタリアンの鉄板] 四条の南の落ち着いたカウンター。イタリアン出身の料理人が40種以上の串を鉄板で焼く (海老マヨ、海老チリ、タンドリーチキン)。市場の刺身、タルタルのお好み焼き、注文に応じたパスタ、100種のワインも。串は半分に切って出すので分けやすい。お通し600円。24時まで、木曜休み。',
  });
}

// ================================================================ PIOPIKO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26034334/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['15:00', '24:00']); const WE = day(['11:30', '24:00']);
  put({
    id: 'kyoto_piopiko_ace_hotel', name: 'PIOPIKO (Ace Hotel Kyoto)', category: 'MOM_AND_POP',
    lat: 35.009643, lng: 135.760264, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tacos on tortillas, burritos, burgers and fries; no gluten information (2024–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Guacamole with tortilla chips is on the menu, but most tacos and mains are meat, seafood or cheese (2026 reviews).',
    hours_raw: 'Mon–Fri and days before holidays 15:00–24:00 (last orders food 23:00, drinks 23:30); Sat, Sun and holidays 11:30–24:00 (Tabelog). Reservations accepted, advised at weekends (Tabelog; September 2026). Prices include a 10% service charge (Tabelog, Japanese text: 「サービス料10%（表示価格に含む）」). Taco Tuesday every Tuesday (Tabelog). 82 seats with a DJ booth and a private room for 8; non-smoking; cards, no e-money or QR (Tabelog). On the mezzanine and lobby level of Ace Hotel Kyoto in the Shinpukan; 1 min from Karasuma Oike Stn exit 6 (Tabelog; November 2026). Opened 11 June 2020 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Karasuma Oike, in Ace Hotel Kyoto — 1 min from Karasuma Oike Stn',
    cuisine: 'Bar and taco lounge with a menu by Los Angeles chef Wes Avila: LA-style Mexican with ingredients from Kyoto and nearby, and tequila and mezcal cocktails (Tabelog, shop text; November 2026) · Taste of Tacos, three kinds, ¥2,600 — e.g. calamari with roasted habanero and tomatillo salsa (November 2026) · prix-fixe lunch taco plate with salad and soup (September–October 2026); burger lunch set with salad, fries and a drink ¥3,000 (Tabelog) · pork burrito in a hot skillet, guacamole with chips, beef tacos (2026 reviews) · course with all-you-can-drink ¥6,000 (October 2026)',
    website: 'https://www.piopiko.com/', gmaps: gm('PIOPIKO エースホテル京都'), menu_url: TB + 'dtlmenu/',
    notes: "[Mexican · Karasuma Oike, LA tacos in the Ace Hotel] The taco bar of Ace Hotel Kyoto, its menu by Los Angeles chef Wes Avila: Kyoto-sourced tacos (a three-taco plate is ¥2,600), skillet burritos, guacamole and tequila or mezcal cocktails in a plant-filled, DJ-booth lounge. Taco Tuesdays; lunch at weekends. Prices include service. Open to midnight.",
    chef_bio: { chef_name: 'Wes Avila', roles: ['Menu supervisor (Los Angeles chef; Tabelog shop text)'], origin: 'Los Angeles',
      background: 'Per Tabelog (the shop’s own text): a bar and taco lounge curated by Wes Avila, who grew up in the diverse food culture of Los Angeles, rooted in traditional American-style Mexican cooking with ingredients from Kyoto and nearby; cocktails by the bar team; opened 11 June 2020. A November 2026 reviewer describes Wes Avila as a Mexican-American chef from LA overseeing the menu.',
      philosophy: 'Per Tabelog (the shop’s own text): "tacos you can only taste here."',
      specialty: 'Tacos; burritos; tequila and mezcal cocktails.',
      anecdotes: [
        { text: 'A September 2026 diner checked the menu showed no coriander, but the burrito came topped with it.', source: R + 'B533003168/' },
        { text: 'A September 2026 group found the room dim and the tables small and cramped, though the food was good.', source: R + 'B535645368/' },
        { text: 'An October 2026 diner felt two older men might feel out of place in a room suited to dates and girls’ nights.', source: R + 'B537833718/' },
      ],
      japanese_sources_summary: '食べログ: メキシコ料理・バー・カフェ、中京区車屋町245-2 エースホテル京都 2F、烏丸御池駅6番出口から徒歩1分、月〜金と祝前日 15:00〜24:00 (L.O. 料理23:00、ドリンク23:30)、土日祝 11:30〜24:00、予約可、サービス料10% (表示価格に含む)、毎週火曜はTaco Tuesday、82席、個室8名、禁煙、カード可、2020年6月11日オープン、Los Angeles 育ちの Wes Avila が監修するバーとタコスのラウンジ、京都近郊の食材、バーガーランチセット3,000円。口コミ (2024年5月〜2026年11月、英語): タコス3種2,600円、タコスプレートのランチ、ブリトー、ワカモレ、テキーラとメスカルのカクテル、飲み放題付きコース6,000円、パクチーが入っていたという声、席が狭いという声。',
      confidence: 'medium', sources: [TB, 'https://www.piopiko.com/', R + 'B533003168/', R + 'B535002033/', R + 'B535645368/', R + 'B535881218/', R + 'B536088236/', R + 'B536296328/', R + 'B536348037/', R + 'B537833718/', R + 'B538092148/', R + 'B538269596/', R + 'B538397639/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hotel bar used by many international travellers; book at weekends; prices include service.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区車屋町245-2 エースホテル京都 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.009643, 135.760264); cross-checked: GSI 京都府京都市中京区車屋町245番地 (lot) 8m; 16 m from kyoto_kosa_ace_hotel in the same hotel; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B535881218/', R + 'B538092148/'],
    price_note: 'Prices from the Tabelog set-menu page and October–November 2026 reviews; service included.', last_checked: TODAY, items: [
      it('', '', 'Taste of Tacos (three kinds)', '¥2,600', 'Tacos', 'ask', 'no', 'November 2026.', 'taste_of_tacos'),
      it('', '', 'Burger lunch set (salad, fries, drink)', '¥3,000', 'Lunch', 'no', 'no', 'Tabelog.', 'burger_lunch'),
      it('', '', 'Course with all-you-can-drink', '¥6,000', 'Course', 'ask', 'no', 'October 2026.', 'course_nomihodai'),
    ] }, {
    cuisine: 'Los Angeles のシェフ Wes Avila が監修するバーとタコスのラウンジ: 京都近郊の食材の LA スタイルのメキシコ料理と、テキーラとメスカルのカクテル (食べログの店の紹介、2026年11月)・タコス3種2,600円 (炙ったハバネロとトマティーヨのサルサのイカのタコスなど、2026年11月)・サラダとスープ付きのタコスプレートのランチ (2026年9〜10月)、サラダ、ポテト、ドリンク付きのバーガーランチセット3,000円 (食べログ)・鉄板の豚のブリトー、ワカモレとチップス、牛肉のタコス (2026年の口コミ)・飲み放題付きコース6,000円 (2026年10月)',
    neighborhood: '烏丸御池、エースホテル京都の中。烏丸御池駅から徒歩1分',
    gf_detail: '要確認。トルティーヤのタコス、ブリトー、バーガー、ポテト。グルテンの情報はない (2024〜2026年の口コミ)。',
    vegan_detail: '要確認。ワカモレとチップスはあるが、多くのタコスと料理は肉、魚介、チーズ入り (2026年の口コミ)。',
    notes: '[メキシコ料理・烏丸御池、エースホテルの LA タコス] エースホテル京都のタコスバー。Los Angeles のシェフ Wes Avila の監修で、京都の食材のタコス (3種で2,600円)、鉄板のブリトー、ワカモレ、テキーラやメスカルのカクテルを、緑と DJ ブースのラウンジで。火曜はTaco Tuesday、週末は昼も。料金はサービス料込み。24時まで。',
  });
}

// ================================================================ 四方食店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26030980/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_shikata_shokuten', name: '四方食店 (Shikata Shokuten)', category: 'OMNI',
    lat: 35.006226, lng: 135.756941, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seasonal plates including a rare-fried horse mackerel and clay-pot rice, with soy and dashi (2026 reviews). No gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Known for its vegetable dishes, but most plates have fish, duck or pork, and dashi is likely (2026 reviews).',
    hours_raw: '17:00–23:00 daily; hours may change (Tabelog). Reservations accepted (Tabelog; October 2026). A small standing area by the entrance and seats further in and upstairs (2026 reviews). Some dishes come in half sizes, at more than half the price (September 2026). Non-smoking; cards, e-money and QR (Tabelog). In a renovated townhouse near Shijo Karasuma, 411 m from Karasuma Stn (Tabelog; August 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo Karasuma — 411 m from Karasuma Stn',
    cuisine: 'Standing bar and izakaya of creative Japanese dishes, vegetables and Japanese sake in a townhouse, with a seasonal menu (2026 reviews) · rare-fried horse mackerel with lemon, salt and tomato soy, the signature (July–October 2026) · grilled mackerel with mashed potatoes, roasted duck with green onion, hamo, seared bonito, summer-vegetable dishes, potato salad, mackerel roll with mizuna (2026 reviews) · clay-pot rice cooked over charcoal — firefly squid and asparagus, yellowtail (May–October 2026) · Ippodo roasted-bancha highball; half-size portions for solo diners (August–September 2026)',
    website: 'https://www.instagram.com/shikata_shokuten', gmaps: gm('四方食店 京都'), menu_url: null,
    notes: "[Standing bar & izakaya · Shijo Karasuma, the rare-fried horse mackerel] A stylish townhouse bar near Shijo Karasuma, standing room at the front and seats behind and upstairs, popular with a young crowd. Order the rare-fried horse mackerel, the roasted duck and a charcoal clay-pot rice, with Kyoto sake or an Ippodo-tea highball; half portions suit solo diners. Some found the young staff unclear on the menu and prices. Daily from 17:00.",
    chef_bio: { chef_name: null, roles: ['Young staff (unnamed)'], origin: null,
      background: 'Reviewers describe a popular, stylish izakaya with a seasonally changing menu and young staff at the counter (July–October 2026).',
      philosophy: null, specialty: 'Rare-fried horse mackerel; clay-pot rice.',
      anecdotes: [
        { text: 'A September 2026 diner listed communication lapses — a drinks list said to be complete that wasn’t, a half-size dish said to be half price that was marked up, and staff who could not explain the bill until a senior stepped in.', source: R + 'B535660134/' },
        { text: 'An October 2026 diner found the value poor, some flavours off and the mackerel roll tough.', source: R + 'B537105714/' },
        { text: 'A September 2026 solo traveller appreciated the half-size portions at the counter.', source: R + 'B536422107/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・立ち飲み・バル、中京区姥柳町190-2、烏丸駅から411m、毎日17:00〜23:00、予約可、禁煙、カード・電子マネー・QR 可。口コミ (2026年5〜10月、英語): 町家の居酒屋、入口に立ち飲み、奥と2階に席、季節で変わる品書き、名物のアジのレアフライ、鯖の焼き物とマッシュポテト、鴨のロースト、鱧、炭火の土鍋ご飯、Ippodo のほうじ番茶ハイボール、ハーフサイズあり、若いスタッフの説明が不十分という声、コスパが悪いという声。',
      confidence: 'medium', sources: [TB, R + 'B528993227/', R + 'B531552929/', R + 'B532957401/', R + 'B534604536/', R + 'B534760897/', R + 'B535660134/', R + 'B536422107/', R + 'B536796411/', R + 'B537105714/', R + 'B537314586/', R + 'B537419362/', R + 'B538399120/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book or stand at the front; half sizes for solo diners; cards, e-money and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区姥柳町190-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and Instagram; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.006226, 135.756941); cross-checked: GSI 京都府京都市中京区姥柳町190番地 (lot) 42m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537419362/'],
    price_note: 'No item prices found; reviews give about ¥3,000–8,000 a head (2026).', last_checked: TODAY, items: [
      it('', '', 'Rare-fried horse mackerel', '', 'Signature', 'no', 'no', 'July–October 2026.', 'aji_rare_fry'),
      it('', '', 'Clay-pot rice (seasonal)', '', 'Rice', 'ask', 'no', 'May–October 2026.', 'donabe_gohan'),
    ] }, {
    cuisine: '町家の立ち飲みと居酒屋。創作の和食、野菜、日本酒、季節で変わる品書き (2026年の口コミ)・名物はアジのレアフライ、レモン、塩、トマト醤油で (2026年7〜10月)・鯖の焼き物とマッシュポテト、鴨のロースト、鱧、鰹のたたき、夏野菜の料理、ポテトサラダ、水菜の鯖巻き (2026年の口コミ)・炭火の土鍋ご飯 (ホタルイカとアスパラ、鰤) (2026年5〜10月)・Ippodo のほうじ番茶ハイボール、一人客向けのハーフサイズ (2026年8〜9月)',
    neighborhood: '四条烏丸。烏丸駅から411m',
    gf_detail: '要確認。アジのレアフライや土鍋ご飯など季節の皿で、醤油と出汁を使う (2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認。野菜料理で知られるが、多くの皿に魚、鴨、豚が入り、出汁も使うとみられる (2026年の口コミ)。',
    notes: '[立ち飲み・居酒屋・四条烏丸、アジのレアフライ] 四条烏丸近くの町家の、おしゃれな店で若い客に人気。入口は立ち飲み、奥と2階に席。名物のアジのレアフライ、鴨のロースト、炭火の土鍋ご飯を、京都の日本酒やIppodo のお茶のハイボールと。ハーフサイズは一人客に便利。若いスタッフのメニューや値段の説明が不十分という声も。毎日17時から。',
  });
}

// ================================================================ Bar MICHIya
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26006716/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '03:00']);
  put({
    id: 'kyoto_bar_michiya', name: 'Bar MICHIya', category: 'OMNI',
    lat: 35.009193, lng: 135.770539, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seafood, pasta, pizza, fried potatoes and satsuma-age alongside oysters and sashimi (2026 reviews). No gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Vegetable dishes such as bagna cauda (with a crab-miso sauce) are offered, but the menu is seafood-led (2026 reviews).',
    hours_raw: '18:00–3:00 (last order 2:00); closed irregularly (Tabelog). Reservations accepted, advised for groups (Tabelog; October 2026). Course ¥3,300 with optional 120-minute all-you-can-drink, and birthday cakes on request (April 2026). 21 seats: 9 at the counter, 12 at tables; private hire up to 20 (Tabelog). Cards, no e-money (Tabelog). On the 4th floor of the Sanjo Kiyamachi Building II at the Sanjo–Kiyamachi corner; 3 min from Sanjo Stn (Tabelog; May 2026). A May 2026 diner heard an interior renovation was planned.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi Sanjo — 3 min from Sanjo Stn',
    cuisine: 'A bar that cooks: market seafood and Italian-leaning dishes with seasonal-fruit cocktails, until 3 a.m. (Tabelog, shop text; 2026 reviews) · fresh oysters all year, e.g. Iwate rock oysters (Tabelog; May 2026) · sashimi such as sakura masu and kombu-cured sea bream, tuna salt tataki, crab miso, bagna cauda with crab-miso sauce, white-wine steamed shellfish, acqua pazza finished as zosui or risotto (2026 reviews) · clam pasta, karasumi pasta, porcini omelette, pizza, homemade satsuma-age, fried potatoes, macaroni salad, duck breast (2026 reviews) · Heartland draft, highballs, Japanese sake on request (2025–26 reviews) · about ¥3,000–8,000 a head (2026 reviews)',
    website: null, gmaps: gm('Bar MICHIya 木屋町'), menu_url: TB + 'dtlmenu/',
    notes: "[Bar with kitchen · Kiyamachi Sanjo, oysters till 3 a.m.] A fourth-floor bar at the Sanjo–Kiyamachi corner that eats like a restaurant: oysters all year, kombu-cured sea bream, bagna cauda with crab miso, acqua pazza finished as risotto, karasumi pasta — with fresh-fruit cocktails or a highball. Good for a second stop or a late dinner. Open 18:00–3:00.",
    chef_bio: { chef_name: null, roles: ['Bartenders and two kitchen staff (unnamed; April 2026 review)'], origin: null,
      background: 'Per Tabelog (the shop’s own text): fresh seafood from the market, Italian dishes with seasonal vegetables, and desserts and cocktails of seasonal fruit. An April 2026 diner saw several bartenders at the counter and two cooks in the kitchen; the chef came out to chat with a May 2026 group.',
      philosophy: null, specialty: 'Oysters; acqua pazza finished as risotto.',
      anecdotes: [
        { text: 'An April 2026 birthday party had a cake at the end and the whole bar celebrated with them.', source: R + 'B526910577/' },
        { text: 'An April 2026 pair walked in at opening without a booking and were given a table until 20:30.', source: R + 'B527983645/' },
        { text: 'A July 2026 group, on a second stop, ordered the sashimi and macaroni salad several times over.', source: R + 'B454655193/' },
      ],
      japanese_sources_summary: '食べログ: バー・バル・居酒屋、中京区木屋町三条上ル東側 三条木屋町ビルⅡ 4F、三条駅から徒歩3分、18:00〜翌3:00 (L.O. 2:00)、不定休、予約可、21席 (カウンター9、テーブル12)、貸切20名まで、カード可、市場の魚介と季節の野菜のイタリアン、季節の果物のカクテルとデザート、アクアパッツァの雑炊、岩牡蠣。口コミ (2025年12月〜2026年10月、英語): 一年中の生牡蠣、桜鱒の刺身、鯛の昆布締め、蟹味噌のバーニャカウダ、あさりのパスタ、からすみのパスタ、自家製のさつま揚げ、ピザ、3,300円のコースと120分の飲み放題、改装の予定という声。',
      confidence: 'medium', sources: [TB, R + 'B454655193/', R + 'B496928253/', R + 'B519421449/', R + 'B525788222/', R + 'B526910577/', R + 'B527903378/', R + 'B527983645/', R + 'B528144931/', R + 'B528509194/', R + 'B529025476/', R + 'B533887957/', R + 'B537161413/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order food and cocktails at the counter or tables; book for groups; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区木屋町三条上ル東側 三条木屋町ビルⅡ 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009193, 135.770539); the address has no lot number and GSI finds no match, so the pin stays on the Tabelog point, at the Sanjo–Kiyamachi corner; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B526910577/'],
    price_note: 'Course price from an April 2026 review; reviews give about ¥3,000–8,000 a head (2026).', last_checked: TODAY, items: [
      it('', '', 'Course (all-you-can-drink 120 min optional)', '¥3,300', 'Course', 'ask', 'no', 'April 2026.', 'course'),
      it('', '', 'Fresh oysters', '', 'Seafood', 'ask', 'no', '2026 reviews.', 'oysters'),
    ] }, {
    cuisine: '料理が自慢のバー: 市場の魚介とイタリアン寄りの料理、季節の果物のカクテル、朝3時まで (食べログの店の紹介、2026年の口コミ)・一年中の生牡蠣 (Iwate の岩牡蠣など) (食べログ、2026年5月)・桜鱒や鯛の昆布締めの刺身、まぐろの塩たたき、蟹味噌、蟹味噌ソースのバーニャカウダ、貝の白ワイン蒸し、雑炊やリゾットで締めるアクアパッツァ (2026年の口コミ)・あさりのパスタ、からすみのパスタ、ポルチーニのオムレツ、ピザ、自家製のさつま揚げ、フライドポテト、マカロニサラダ、鴨の胸肉 (2026年の口コミ)・ハートランドの生、ハイボール、頼めば日本酒も (2025〜2026年の口コミ)・1人約3,000〜8,000円 (2026年の口コミ)',
    neighborhood: '木屋町三条。三条駅から徒歩3分',
    gf_detail: '要確認。魚介、パスタ、ピザ、フライドポテト、さつま揚げ、牡蠣や刺身 (2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認。蟹味噌ソースのバーニャカウダなど野菜料理もあるが、魚介中心 (2026年の口コミ)。',
    notes: '[料理のバー・木屋町三条、朝3時までの牡蠣] 三条木屋町の角のビルの4階、レストランのように食べられるバー。一年中の牡蠣、鯛の昆布締め、蟹味噌のバーニャカウダ、リゾットで締めるアクアパッツァ、からすみのパスタを、果物のカクテルやハイボールと。2軒目にも遅い夕食にも。18時〜翌3時。',
  });
}

save();
