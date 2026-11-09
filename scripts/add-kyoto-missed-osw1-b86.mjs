// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 86.
//   + ホワイト ラバー WHITE LOVER (Showa-style café-restaurant lunch by the Kiyomizu-michi bus stop)
//   + 円屋 Enya (charcoal-grill and handmade-soba izakaya off Shijo-Muromachi; sister of 円屋 三条小路店)
//   + Salon de KANBAYASHI 上林春松本店 (tea salon of the Uji tea house founded c. 1560, Higashiyama)
//   - 一休庵, 季節料理鮨しん, 東山 焼肉 ホルモン安東, MATCHA GARDEN 京都八坂, あきなのおやつ: skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26011058 (skipped), 26044628 (skipped),
//   26007152, 26037776 (skipped), 26034092 (skipped), 26035376 (skipped), 26006972, 26025752.
//   queue-status.jsonl grepped for each brand (一休庵, 鮨しん, ホワイト ラバー, 安東, MATCHA GARDEN, あきなの, 円屋, 上林/KANBAYASHI):
//   鮨しん has an earlier ruling (26044629).
//   Data check: none of the three drafted is in data/kyoto.json by name or address. A record “Ikkyu-an (一休庵, Kodai-ji)”
//   (ChIJG60kQMUIAWAR6bBHYQW0VA0) sits 9 m from 一休庵’s Tabelog point — see doubts. 円屋 三条小路店
//   (kyoto_enya_sanjo_koji, Kyoto-Chinese noodles) and 河原町焼肉ホルモン安東 (kyoto_kawaramachi_yakiniku_ando) are in data.
//   Same-name count (same brand or operator only): 円屋 — its own site (enya-kyoto.com) groups this Shijo-Muromachi shop
//   with a Nishiki-Takakura jidori izakaya; with 円屋 三条小路店 a local group of differently themed shops — drafted, flagged.
//   KANBAYASHI — the tea house’s café, with a second salon at 京都・時代祭館 十二十二; one restaurant brand of a tea merchant.
//   ホワイト ラバー — one shop. Large-parent and big-chain-hotel lists checked.
//   Service charges, checked against the Japanese original: 円屋 なし (Tabelog); Salon de KANBAYASHI afternoon tea
//   サービス料別途10％ (own site); none listed for ホワイト ラバー.
//   Other-diner remarks (Greg 2026-11-06): none used.
//   Halal: no operator in this batch claims halal.
//   JA text: 祝日 written in full; no bare 天.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-86');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26011058', '一休庵 (Maruyama Park): already in data — a record “Ikkyu-an (一休庵, Kodai-ji)” (ChIJG60kQMUIAWAR6bBHYQW0VA0) sits 9 m from this Tabelog point; flagged for a check of that record’s description');
skip('26044628', '季節料理鮨しん: same-concept branch of a brand in data — a May 2026 reviewer calls it a new shop of the 鮨しん group (same ruling as 26044629; 錦 鮨しん 本店 is kyoto_nishiki_sushi_shin)');
skip('26037776', '東山 焼肉 ホルモン安東: same-concept branch of a brand in data — 河原町焼肉ホルモン安東 (kyoto_kawaramachi_yakiniku_ando) is in kyoto.json; invoice holder 株式会社ＡＮＤ (Yamashina)');
skip('26034092', 'MATCHA GARDEN 京都八坂: no reviews dated 2025–2026 (latest December 2024)');
skip('26035376', 'retail food shop (Greg 11-07 ruling): あきなのおやつ is a take-away cake and cookie shop (opened 2021); no historic family ownership and no GF or vegan options sourced');

// ================================================================ ホワイト ラバー
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26007152/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:40', '15:30']);
  put({
    id: 'kyoto_white_lover_kiyomizu', name: 'ホワイト ラバー (WHITE LOVER)', category: 'OMNI',
    lat: 34.997559, lng: 135.777255, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: cutlets, curry and shrimp tempura (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork and beef cutlets, chicken curry, teriyaki, shrimp (2026 reviews).',
    hours_raw: '11:40–15:30 daily; hours may change (Tabelog). Cash only: no cards, e-money or QR (Tabelog). 30 seats (Tabelog). Non-smoking (Tabelog). A minute from the Kiyomizu-michi bus stop on Higashioji (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Higashioji at Kiyomizu-michi — 1 min from the bus stop',
    cuisine: 'A Showa-retro café-restaurant lunch at low prices near Kiyomizu-dera (January and October 2026) · chicken curry rice and pork-cutlet set (January 2026) · pork-tenderloin cutlet set; beef-tenderloin cutlet curry (October 2026) · teriyaki and shrimp tempura (November 2026) · most lunches under ¥1,000 (Tabelog)',
    website: null, gmaps: gm('ホワイト ラバー 清水'), menu_url: TB + 'dtlmenu/',
    notes: '[Café lunch · Kiyomizu-michi, Showa retro] An old-fashioned coffee-shop-style lunch spot a minute from the Kiyomizu-michi bus stop, serving cheap cutlet sets, curry and teriyaki — a welcome break from the area’s tourist prices. Reviewers find the owner curt or kind by turns. Cash only; lunch only.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Two reviewers describe the owner as brusque (January and October 2026); a November 2026 reviewer found the owner kind. No operator was found.',
      philosophy: null, specialty: 'Cutlet sets and curry.',
      anecdotes: [
        { text: 'An October 2026 pair, put off by prices near Kiyomizu-dera, found relief here with a pork-tenderloin cutlet set and a beef-cutlet curry.', source: R + 'B537792898/' },
      ],
      japanese_sources_summary: '食べログ: ホワイト ラバー、洋食・カフェ、東山区清水4-140、市バス清水道から徒歩1分、毎日 11:40〜15:30、カード・電子マネー・QR不可、30席、禁煙、昼の予算1,000円未満。口コミ (2026年、英語): 昭和レトロの喫茶店の雰囲気、チキンカレーとトンカツのセット、ヒレカツ定食、牛ヒレカツカレー、照り焼きと海老天ぷら、手頃な値段、店主の接客は無愛想との声と優しいとの声。',
      confidence: 'low', sources: [TB, R + 'B520229719/', R + 'B537792898/', R + 'B538658986/'] },
    cultural_comfort: { level: 'japanese', note: 'Old-style local café; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区清水4-140',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated January to November 2026.' },
    pin_source: `Tabelog ${TB} (34.997559, 135.777255); GSI could place only 清水四丁目; OSM reverse gives 清水二丁目 — kept the Tabelog point, marked approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537792898/'],
    price_note: 'No menu prices found; lunch under ¥1,000 (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Pork-tenderloin cutlet set', '', 'Lunch', 'no', 'no', 'October 2026.', 'hirekatsu'),
      it('', '', 'Beef-tenderloin cutlet curry', '', 'Lunch', 'no', 'no', 'October 2026.', 'katsucurry'),
      it('', '', 'Chicken curry rice', '', 'Lunch', 'ask', 'no', 'January 2026.', 'curry'),
    ] }, {
    cuisine: '清水寺近くの昭和レトロの喫茶店風の手頃な昼食 (2026年1・10月)・チキンカレーライスとトンカツのセット (2026年1月)・ヒレカツ定食、牛ヒレカツカレー (2026年10月)・照り焼きと海老天ぷら (2026年11月)・昼はほぼ1,000円未満 (食べログ)',
    neighborhood: '清水道の東大路。バス停から1分',
    gf_detail: 'グルテンフリーではない。カツ、カレー、海老天ぷら (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。豚と牛のカツ、チキンカレー、照り焼き、海老 (2026年の口コミ)。',
    notes: '[喫茶の昼食・清水道、昭和レトロ] 清水道のバス停から1分、昔ながらの喫茶店風の昼の店。手頃なカツの定食、カレー、照り焼きで、観光地価格からひと息つける。店主の接客は無愛想とも優しいとも。現金のみ、昼のみ。',
  });
}

// ================================================================ 円屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26006972/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.enya-kyoto.com/';
  const H = day(['17:30', '24:00']);
  put({
    id: 'kyoto_enya_shijo_muromachi', name: '円屋 (Enya)', category: 'OMNI',
    lat: 35.004444, lng: 135.757625, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Charcoal-grilled pork, yakitori, sashimi, oden, dashimaki, dumplings and handmade soba to finish; whether the soba contains wheat is not stated (Tabelog; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: black pork, chicken, sashimi and oden in dashi (Tabelog; 2025–2026 reviews).',
    hours_raw: 'Monday–Saturday 17:30–24:00; closed Sunday (Tabelog). No cover charge (Tabelog, original なし). Cards; no e-money or QR (Tabelog). 23 seats: an 11-seat counter and 12 on tatami, more upstairs (Tabelog; November 2025). A red lantern in a lane between Muromachi and Shinmachi north of Shijo, about 3–5 min from Karasuma/Shijo (Tabelog; June and August 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo between Muromachi and Shinmachi — 3 min from Karasuma/Shijo',
    cuisine: 'Rokubaku black pork, handmade soba and seasonal vegetables grilled slowly over binchotan; courses with all-you-can-drink (Tabelog) · assorted yakitori; negima; dashimaki; water dumplings (November 2025) · obanzai platter incl. red konnyaku; sashimi; grilled fish and pork; handmade soba to finish (September 2025) · shabu-shabu salad, meat platter, oden (August 2025) · steamed pork and chicken wings, with salt or sauce (September 2026) · sashimi platter, steamed pork, uzaku, negitoro, grilled collar, the famous stewed okara, young-ayu nanban-zuke (June 2026)',
    website: SITE, gmaps: gm('円屋 四条室町'), menu_url: TB + 'dtlmenu/',
    notes: '[Izakaya · Shijo-Muromachi lane, charcoal grill and soba] A long-loved red-lantern izakaya off Shijo, with an open charcoal grill for black pork and yakitori, a counter full of regulars, good sashimi and obanzai, and handmade soba to finish. Friendly owner; closed Sunday. Flagged: part of a small local group with 円屋 三条小路店.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'The shop’s site describes a charcoal-grill izakaya at Shijo-Muromachi alongside a jidori izakaya at Nishiki-Takakura; 円屋 三条小路店 in our data calls itself the sister of 円屋 near Shijo. Reviewers describe a welcoming owner who shares local tips (August 2026) and many local regulars (November 2025).',
      philosophy: null, specialty: 'Binchotan-grilled black pork; handmade soba.',
      anecdotes: [
        { text: 'An August 2026 couple spotted the red lantern on the way to a convenience store and ended up chatting with the owner and regulars.', source: R + 'B534212710/' },
        { text: 'A September 2026 non-drinker had the steamed pork with rice and pickles, and was talked into the soba.', source: R + 'B535593246/' },
      ],
      japanese_sources_summary: '公式サイト: 四条室町の炭焼と、錦高倉の地鶏が美味しい居酒屋 京都 円屋。食べログ: 円屋、そば・居酒屋、中京区室町と新町の間四条上ル観音堂町454-2、阪急烏丸駅・地下鉄四条駅から西へ徒歩5分、月〜土 17:30〜24:00、日曜定休、チャージなし、カード可、23席 (カウンター11、座敷12)、六白黒豚、手打ちそば、備長炭でじっくり焼く旬の野菜、飲み放題付きコース。口コミ (2025〜2026年、英語): 焼き鳥の盛り合わせ、ねぎま、だし巻き、水餃子、赤こんにゃくのおばんざい、刺身、焼き魚と豚、締めの手打ちそば、しゃぶしゃぶサラダ、おでん、蒸し豚と手羽先、うざく、ねぎとろ、カマ焼き、名物のおから、稚鮎の南蛮漬け、気さくな店主、地元の常連。',
      confidence: 'medium', sources: [TB, SITE, R + 'B511311242/', R + 'B512829447/', R + 'B517610742/', R + 'B517625463/', R + 'B520271626/', R + 'B530915491/', R + 'B533081144/', R + 'B534212710/', R + 'B535593246/', R + 'B536949663/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Local regulars at the counter; no cover charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区室町と新町の間四条上ル観音堂町454-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and own site; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.004444, 135.757625); cross-checked: GSI 京都府京都市中京区観音堂町454番地 (lot) 21m; 鮨 味輝 at 454-4 is 16.7 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B530915491/'],
    price_note: 'No menu prices found; no cover charge.', last_checked: TODAY, items: [
      it('', '', 'Binchotan-grilled black pork', '', 'Grill', 'ask', 'no', 'Tabelog.', 'kurobuta'),
      it('', '', 'Assorted yakitori', '', 'Grill', 'ask', 'no', 'November 2025.', 'yakitori'),
      it('', '', 'Stewed okara', '', 'Small plates', 'ask', 'no', 'June 2026.', 'okara'),
      it('', '', 'Handmade soba (to finish)', '', 'Soba', 'ask', 'no', 'September 2025.', 'soba'),
    ] }, {
    cuisine: '六白黒豚、手打ちそば、備長炭でじっくり焼く旬の野菜。飲み放題付きコースも (食べログ)・焼き鳥の盛り合わせ、ねぎま、だし巻き、水餃子 (2025年11月)・赤こんにゃくのおばんざい盛り合わせ、刺身、焼き魚と豚、締めの手打ちそば (2025年9月)・しゃぶしゃぶサラダ、肉の盛り合わせ、おでん (2025年8月)・塩かたれの蒸し豚と手羽先 (2026年9月)・刺身盛り合わせ、蒸し豚、うざく、ねぎとろ、カマ焼き、名物のおから、稚鮎の南蛮漬け (2026年6月)',
    neighborhood: '四条の北、室町と新町の間。烏丸・四条から徒歩3分',
    gf_detail: '要確認。炭火焼きの豚、焼き鳥、刺身、おでん、だし巻き、水餃子、締めの手打ちそば。そばに小麦が入るかは書かれていない (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。黒豚、鶏、刺身、出汁のおでん (食べログ、2025〜2026年の口コミ)。',
    notes: '[居酒屋・四条室町の路地、炭火と蕎麦] 四条を入った路地の赤提灯の居酒屋。黒豚や焼き鳥を焼く炭火、常連の並ぶカウンター、刺身とおばんざい、締めは手打ちそば。気さくな店主、日曜定休。円屋 三条小路店と同じ地元のグループ (要確認)。',
  });
}

// ================================================================ Salon de KANBAYASHI 上林春松本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26025752/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://salondekanbayashi.com/';
  const H = day(['11:30', '17:00']);
  put({
    id: 'kyoto_salon_de_kanbayashi', name: 'Salon de KANBAYASHI 上林春松本店', category: 'OMNI',
    lat: 34.998907, lng: 135.778756, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Matcha sweets (gateau chocolat, opera, macarons) and a five-tier afternoon tea with savoury Japanese dishes; no gluten information (own site; 2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The plain teas are plant-only, but the sweets and afternoon tea are not described as vegan (own site; 2025–2026 reviews).',
    hours_raw: 'Monday, Wednesday–Sunday and holidays 11:30–17:00; closed Tuesday and on some weekends and holidays (Tabelog). Afternoon tea “京KASANE” ¥5,000 a head plus 10% service, or ¥6,100 plus service in the round-window private room for 1–4 (own site, original サービス料別途10％). Cash only (Tabelog). 30 seats; smoking on the terrace (Tabelog). In a renovated Taisho-era house and storehouse with a large garden, near the Yasaka pagoda, 3 min from the Higashiyama-Yasui bus stop (Tabelog; 2025–2026 reviews). A second salon is at 京都・時代祭館 十二十二 by Heian Shrine (own site).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shimogawara near the Yasaka pagoda — 3 min from Higashiyama-Yasui bus stop',
    cuisine: 'The tea salon of 上林春松本店, an Uji tea house founded around 1560 (own site) · gyokuro and sencha you brew yourself at the table, from ¥1,500, or ¥2,000 with sweets (own site; March 2026) · five-tier afternoon tea “京KASANE” inspired by the Yasaka pagoda, ¥5,000 plus service, about two and a half hours with free-flowing teas (own site; January 2026) · matcha sweets plate with matcha opera and macarons ¥1,800; matcha gateau chocolat using the “Biwa no Shiro” matcha (Tabelog; March and August 2026) · savoury Japanese dishes in the afternoon tea, such as marinated mackerel (September 2025)',
    website: SITE, gmaps: gm('Salon de KANBAYASHI 京都'), menu_url: SITE,
    notes: '[Tea salon · near the Yasaka pagoda, an Uji tea house since c. 1560] The café of the historic Uji tea merchant 上林春松本店, in a renovated Taisho house with a big garden: brew gyokuro or sencha yourself, try matcha sweets, or book the five-tier “京KASANE” afternoon tea (¥5,000 plus 10% service). Cash only; closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Tea salon of 上林春松本店 (staff unnamed)'], origin: 'Uji, Kyoto',
      background: 'The salon’s site says 上林春松本店 was founded in the Eiroku era (around 1560), with 450 years of history as a Uji tea house; the Kanbayashi family served as official tea masters (御茶師), and the house is now led by the 14th-generation 上林春松. Sweets are made by a pastry chef using the house’s teas (Tabelog).',
      philosophy: 'Tea brewed with care from a long-established Uji tea house (Tabelog).', specialty: 'Self-brewed gyokuro; matcha sweets.',
      anecdotes: [
        { text: 'A March 2026 visitor, struck by the building after lunch, went in and was taught to brew gyokuro at the table.', source: R + 'B524889619/' },
        { text: 'A June 2025 guest in a yukata spent two and a half hours over afternoon tea looking out on the 700-tsubo garden.', source: R + 'B509046195/' },
      ],
      japanese_sources_summary: '公式サイト: Salon de KANBAYASHI、上林春松本店は永禄年間 (1560年頃) 創業、450年の歴史を持つ宇治の老舗茶舗、上林家は御茶師、現在は十四代 上林春松、玉露と煎茶を急須で淹れる体験1,500円、選べるドリンクセット2,000円、五段重アフタヌーンティー「京KASANE」1人5,000円 (税込・サービス料別途10%)、丸窓の個室は6,100円、2号店は京都・時代祭館 十二十二。食べログ: 東山区下河原通高台寺塔之前上る金園町400-1、市バス東山安井から徒歩3分、月・水〜日・祝日 11:30〜17:00、火曜定休、カード・電子マネー不可、30席、禁煙 (テラスで喫煙可)、蔵を改装、抹茶「Biwa no Shiro」のガトーショコラ。口コミ (2025〜2026年、英語): 700坪の庭、浴衣でアフタヌーンティー、鯖の酢締め、抹茶のオペラとマカロンの甘味プレート1,800円、玉露「Zuitama」、大正時代の建物、竹林。',
      confidence: 'medium', sources: [TB, SITE, R + 'B509046195/', R + 'B514574986/', R + 'B521606790/', R + 'B523659936/', R + 'B523764966/', R + 'B524889619/', R + 'B534524001/', R + 'B536074268/', R + 'B537635994/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff teach tea brewing; cash only; 10% service on afternoon tea.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区下河原通高台寺塔之前上る金園町400-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Own site and Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (34.998907, 135.778756); cross-checked: GSI 京都府京都市東山区金園町400番地 (lot) 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Prices from the salon’s site and a March 2026 review; afternoon tea plus 10% service.', last_checked: TODAY, items: [
      it('', '', 'Self-brewed gyokuro or sencha', '¥1,500', 'Tea', 'gf', 'vegan', 'Own site.', 'tea'),
      it('', '', 'Drink set with sweets', '¥2,000', 'Tea', 'ask', 'ask', 'Own site.', 'set'),
      it('', '', 'Five-tier afternoon tea “京KASANE” (plus 10% service)', '¥5,000', 'Afternoon tea', 'ask', 'no', 'Own site.', 'kasane'),
      it('', '', 'Matcha sweets plate', '¥1,800', 'Sweets', 'ask', 'ask', 'March 2026.', 'plate'),
    ] }, {
    cuisine: '1560年頃創業の宇治の茶舗、上林春松本店の茶房 (公式サイト)・急須で自分で淹れる玉露や煎茶1,500円、甘味付き2,000円 (公式サイト、2026年3月)・八坂の塔をイメージした五段重アフタヌーンティー「京KASANE」5,000円とサービス料、お茶のフリーフローで約2時間半 (公式サイト、2026年1月)・抹茶のオペラやマカロンの甘味プレート1,800円、抹茶「Biwa no Shiro」のガトーショコラ (食べログ、2026年3・8月)・アフタヌーンティーには鯖の酢締めなど和のセイボリー (2025年9月)',
    neighborhood: '八坂の塔近くの下河原。東山安井バス停から徒歩3分',
    gf_detail: '要確認。抹茶の菓子 (ガトーショコラ、オペラ、マカロン) と和のセイボリーの五段重のアフタヌーンティー。グルテンの情報はない (公式サイト、2025〜2026年の口コミ)。',
    vegan_detail: '要確認。お茶自体は植物性だが、菓子やアフタヌーンティーはヴィーガンとは書かれていない (公式サイト、2025〜2026年の口コミ)。',
    notes: '[茶房・八坂の塔の近く、1560年頃創業の宇治の茶舗] 宇治の老舗茶舗、上林春松本店の茶房。大きな庭のある大正の家を改装し、玉露や煎茶を自分で淹れたり、抹茶の菓子や五段重のアフタヌーンティー「京KASANE」(5,000円とサービス料10%) を楽しめる。現金のみ、火曜定休。',
  });
}

save();
