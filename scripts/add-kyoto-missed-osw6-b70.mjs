// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 70.
//   + DRINK DRANK 京都六角通り店 (made-to-order fruit smoothies and panini, Rokkaku-dori) — skipped in osw6-69, drafted on the
//     coordinator's ruling: a single brand with four shops, two in Kyoto, under the five-shop line
//   + CLOUD 10 (British-style pub with Guinness and pub food, Yanaginobamba, open to 1 am) — rest
//   + マタモヤ Matamoya (sake bar opened April 2026 near Keihan Sanjo) — rest
//   + クープ・ド・シャンパーニュ Coupe de Champagne (champagne-only bar off Hanamikoji, since 2013) — rest
//   - skip 26039890 肉バル食堂 トリガービーフ (thin listing: no hours or seats on Tabelog)
//   - skip 26003044 ぎをん 西坂 (no review since March 2022)
//   - skip 26025160 米福 京都木屋町 (chain, earlier ruling 26041570)
//   Rest tier, nearest-first from `next rest 2000`. queue-status.jsonl grepped for each brand: 米福 is ruled a chain (26041570);
//   no rulings for DRINK DRANK, トリガービーフ, CLOUD 10, 西坂 or マタモヤ.
//   Same-name counts first (2026-11-07): DRINK DRANK — four (Nara 三条本店, Nara ぽちたまカフェ, Kyoto 清水産寧坂, Kyoto 六角通り;
//   drinkdrank.com, lemongumi Inc.); data has no other DRINK DRANK.
//   CLOUD 10 — one (official site lists no other). マタモヤ — one. クープ・ド・シャンパーニュ — one (the Tokyo "Cave de Champagne DIVIN" is unrelated).
//   None of the three is in data/kyoto.json.
//   Charges per Tabelog's Japanese original: CLOUD 10 「サービス料 チャージ無」; マタモヤ 「旬の旨いお通し 1人様500円 頂戴しており〼」;
//   DRINK DRANK and クープ none listed. No halal claims; no owner deaths; single-review remarks about other diners and staff looks left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-70');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26025160', 'chain: 米福 — Tabelog lists Komefuku tempura and seafood shops in Matsue, Kumamoto, Kyoto, Osaka and Tokyo, already ruled a chain at 26041570 (https://tabelog.com/en/kyoto/A2601/A260201/26025160/).');
skip('26039890', 'thin listing: Tabelog gives no business hours or seat count for 肉バル食堂 トリガービーフ (Movix street), and a 2024 reviewer notes a recent name change — not enough sourced detail to draft (https://tabelog.com/en/kyoto/A2601/A260201/26039890/).');
skip('26003044', 'no 2025–26 review: the latest Tabelog review of ぎをん 西坂 is from March 2022 (https://tabelog.com/en/kyoto/A2601/A260301/26003044/dtlrvwlst/).');

// ================================================================ DRINK DRANK 京都六角通り店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26044978/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://www.drinkdrank.com/';
  const H = day(['11:00', '18:00']);
  put({
    id: 'kyoto_drink_drank_rokkaku', name: 'DRINK DRANK 京都六角通り店 (DRINK DRANK Kyoto Rokkaku-dori)', category: 'OMNI',
    lat: 35.007424, lng: 135.765217, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Fruit smoothies and juices are the core, but panini are baked on site (May 2026); no gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Some smoothies use milk (June 2026), but the peach smoothie was recommended as non-dairy (July 2026) and the mixed juice can be made without milk or sugar (August 2026); panini have mozzarella (May 2026).',
    hours_raw: 'Daily 11:00–18:00; closing days may vary (Tabelog). Cards, e-money and QR (Tabelog). Takeaway, with standing room inside for 2–3 and a park across the street (Tabelog; May 2026). Non-smoking (Tabelog). Ground floor on Rokkaku-dori, facing a park, in the former Hananoki Sandwich shop (Tabelog; May 2026). Opened 1 May 2026 (Tabelog; official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Rokkaku-dori, by the park — Kyoto Shiyakusho-mae / Kawaramachi',
    cuisine: 'Smoothie specialist from Nara (since 1999) using seasonal fruit sent straight from growers (official site; 2026 reviews) · panini ¥650, smoothies ¥750–880, juices ¥600–700, coffee and tea ¥500–650; tomato, mozzarella and basil panini; strawberry smoothie ¥880 (May 2026) · whole-dekopon smoothie (May 2026) · watermelon and melon smoothies; ripe ume smoothie (June 2026) · white peach smoothie ¥880, peeled to order (July and August 2026) · mixed juice, lemon squash (July and August 2026) · persimmon smoothie ¥880 (October 2026)',
    website: SITE, gmaps: gm('DRINK DRANK 六角通り'), menu_url: TB,
    notes: '[Fruit smoothies · Rokkaku-dori, since May 2026] The Kyoto Rokkaku-dori shop of a Nara smoothie specialist founded in 1999: thick, spoonable smoothies of seasonal fruit — peach, melon, dekopon, persimmon — piled with fresh chunks, plus juices and hot-pressed panini. Mostly takeaway, with a park across the street. Ask for no milk or sugar.',
    chef_bio: { chef_name: null, roles: ['Founder (unnamed)'], origin: null,
      background: 'Per the official site and 2026 reviews: DRINK DRANK began in Nara in 1999, after the founder fell for smoothies abroad; a Kiyomizu Sanneizaka shop followed about five years ago and this Rokkaku-dori shop opened on 1 May 2026. Fruit comes directly from growers.',
      philosophy: 'Fruit delivered straight from farmers, carefully prepared, one cup at a time (official site).', specialty: 'Seasonal fruit smoothies.',
      anecdotes: [
        { text: 'An August 2026 passer-by was drawn in by two boxes of peaches on display outside.', source: R + 'B534784749/' },
        { text: 'An August 2026 visitor watched the white peaches being peeled after ordering.', source: R + 'B534976237/' },
        { text: 'A July 2026 visitor was told the peaches that day came from Wakayama, with sources changing through the season.', source: R + 'B532653088/' },
      ],
      japanese_sources_summary: '食べログ・公式サイト: ジューススタンド・スムージー専門店、中京区大黒町88 シルブプレビル 1F、毎日11:00〜18:00、不定休、カード・電子マネー・QR 可、立ち飲みのスペース、テイクアウト、禁煙、2026年5月1日オープン、1999年に奈良で創業、産地の農家から直接届く果物。口コミ (2026年5月〜10月、英語): パニーニ650円、スムージー750〜880円、ジュース600〜700円、デコポン、スイカ、メロン、梅、白桃のスムージー880円、柿のスムージー880円、ミックスジュースは牛乳と砂糖を抜ける、公園の前。',
      confidence: 'medium', sources: [TB, SITE, R + 'B528450323/', R + 'B528922484/', R + 'B530359260/', R + 'B530743215/', R + 'B532653088/', R + 'B532713308/', R + 'B533177808/', R + 'B533375590/', R + 'B534784749/', R + 'B534976237/', R + 'B537547583/'] },
    cultural_comfort: { level: 'none_needed', note: 'Point at the fruit on display; takeaway counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区大黒町88 シルブプレビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007424, 135.765294), offset 7 m west: kyoto_jukusei_sashimi_hitoshio is in the same building (2.3 m away); cross-checked: GSI 京都府京都市中京区大黒町88番地 (lot) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B528450323/', R + 'B534976237/', R + 'B537547583/'],
    price_note: 'Prices from May–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Seasonal fruit smoothie (white peach, persimmon, strawberry …)', '¥750–880', 'Smoothies', 'ask', 'ask', 'Some contain milk; ask. May–October 2026.', 'smoothie'),
      it('', '', 'Fresh juice (mixed juice, lemon squash)', '¥600–700', 'Juices', 'ask', 'ask', 'Mixed juice can skip milk and sugar; August 2026.', 'juice'),
      it('', '', 'Panini (tomato, mozzarella, basil)', '¥650', 'Food', 'no', 'no', 'May 2026.', 'panini'),
    ] }, {
    cuisine: '1999年創業の奈良のスムージー専門店、農家から直接届く旬の果物 (公式サイト、2026年の口コミ)・パニーニ650円、スムージー750〜880円、ジュース600〜700円、コーヒーと紅茶500〜650円、トマトとモッツァレラとバジルのパニーニ、いちごのスムージー880円 (2026年5月)・デコポンまるごとのスムージー (2026年5月)・スイカとメロンのスムージー、完熟梅のスムージー (2026年6月)・注文後にむく白桃のスムージー880円 (2026年7・8月)・ミックスジュース、レモンスカッシュ (2026年7・8月)・柿のスムージー880円 (2026年10月)',
    neighborhood: '六角通、公園の前。京都市役所前・河原町',
    gf_detail: '要確認。果物のスムージーとジュースが中心だが、店で焼くパニーニもある (2026年5月)。グルテンの情報はない。',
    vegan_detail: '要確認。牛乳を使うスムージーもある (2026年6月) が、桃のスムージーは乳製品なしと勧められ (2026年7月)、ミックスジュースは牛乳と砂糖を抜ける (2026年8月)。パニーニはモッツァレラ入り (2026年5月)。',
    notes: '[フルーツスムージー・六角通、2026年5月から] 1999年創業の奈良のスムージー専門店の六角通の店。桃、メロン、デコポン、柿など旬の果物の、スプーンで食べる濃いスムージーに果肉をたっぷり。ジュースと焼きたてのパニーニも。ほぼテイクアウトで、向かいは公園。牛乳や砂糖抜きも相談できる。',
  });
}

// ================================================================ CLOUD 10
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26035630/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://cloud10.club/';
  const WD = day(['17:00', '01:00']); const WE = day(['15:00', '01:00']);
  put({
    id: 'kyoto_cloud10_pub', name: 'CLOUD 10', category: 'OMNI',
    lat: 35.006624, lng: 135.764146, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: fish and chips, pizza, meatball bolognese (official site; 2024–25 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A pub: fries, nuts and edamame appear (December 2024; June 2026), but edamame came with butter; no vegan information.',
    hours_raw: 'Mon–Fri 17:00–1:00; Sat–Sun 15:00–1:00; open all year (Tabelog). Reservations accepted (Tabelog). No service or table charge (Tabelog, Japanese text: 「サービス料 チャージ無」). Cards (VISA, Master, JCB), QUICPay and QR (Tabelog). 33 seats: counter 9, tables 9, and a second-floor party room for 24 with karaoke and a projector (Tabelog). Heated tobacco only in a designated area (Tabelog). All-you-can-drink ¥2,500; with 5 dishes ¥3,500; with 7 dishes ¥4,500 (official site). Yanaginobamba south of Rokkaku, 5 min from Hankyu Karasuma or Kawaramachi (Tabelog). Opened 1 March 2021 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Yanaginobamba, south of Rokkaku — Karasuma / Kawaramachi',
    cuisine: 'British-style pub with beers and whiskies from around the world (official site) · fish and chips with house tartar sauce; chicken and onion ajillo (official site) · Ichiro\'s Malt and Laphroaig highballs, chocolate and mixed nuts (December 2024) · Guinness and fish and chips (December 2024) · meatball bolognese (March 2025) · gin and tonic, Moscow mule, pizza; drinks ¥750 (March 2025) · Setouchi Weizen, Yuzu Lager, charred edamame with butter, fries (June 2026)',
    website: SITE, gmaps: gm('CLOUD 10 京都 柳馬場'), menu_url: TB,
    notes: '[British-style pub · Yanaginobamba, open to 1 am] A two-floor pub off Rokkaku with Guinness on tap, whiskies such as Ichiro\'s Malt, and pub food — fish and chips with house tartar, pizza, meatball bolognese, ajillo — until 1:00, from 15:00 at weekends. No cover charge; drinks around ¥750. The upstairs room with karaoke takes parties of 24.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog and the official site: a British-style pub opened in March 2021 with world beers and whiskies; reviewers describe it as an Irish pub.',
      philosophy: null, specialty: 'Beer and whisky; pub food.',
      anecdotes: [
        { text: 'A March 2025 regular finally tried the meatball bolognese on a last night in Kyoto after long being curious, and wished it had been sooner.', source: R + 'B499383525/' },
        { text: 'A June 2026 business traveller arrived for a third round around midnight and was welcomed warmly.', source: R + 'B529720116/' },
        { text: 'A June 2024 party extended the all-you-can-drink by an hour and was held strictly to the three-hour limit.', source: R + 'B486696610/' },
      ],
      japanese_sources_summary: '食べログ・公式サイト: バー・パブ、中京区柳馬場通六角下る井筒屋町418-1、阪急烏丸駅・河原町駅から徒歩5分、月〜金17:00〜翌1:00、土日15:00〜翌1:00、年中無休、予約可、サービス料・チャージなし、カード・QUICPay・QR 可、33席 (カウンター9、テーブル9、2階貸切24名、カラオケとプロジェクター)、加熱式たばこのみ喫煙可、2021年3月1日オープン、本格的なブリティッシュパブ、世界のビールとウイスキー、自家製タルタルのフィッシュアンドチップス、鶏と玉ねぎのアヒージョ、飲み放題2,500円・料理5品付き3,500円・7品付き4,500円。口コミ (2023年8月〜2026年8月、英語): Guinness、Ichiro’s Malt と Laphroaig のハイボール、ミートボールのボロネーゼ、ピザ、ドリンク750円、枝豆のバター焼き、フライドポテト。',
      confidence: 'medium', sources: [TB, SITE, R + 'B471153026/', R + 'B486696610/', R + 'B498185039/', R + 'B499383525/', R + 'B500929206/', R + 'B503139596/', R + 'B529720116/', R + 'B533882293/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A pub crowd that includes many overseas visitors (2024–25 reviews). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区柳馬場通六角下る井筒屋町418-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.006624, 135.764146); cross-checked: GSI 京都府京都市中京区井筒屋町418番地 (lot) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, R + 'B503139596/'],
    price_note: 'Course prices from the official site (tax included); drink price from March 2025.', last_checked: TODAY, items: [
      it('', '', 'All-you-can-drink', '¥2,500', 'Courses', 'ask', 'ask', 'Official site.', 'nomihodai'),
      it('', '', 'All-you-can-drink with 5 dishes', '¥3,500', 'Courses', 'no', 'ask', 'Official site.', 'nomihodai5'),
      it('', '', 'All-you-can-drink with 7 dishes', '¥4,500', 'Courses', 'no', 'ask', 'Official site.', 'nomihodai7'),
      it('', '', 'Fish and chips', '', 'Food', 'no', 'no', 'House tartar; official site, December 2024.', 'fish_chips'),
      it('', '', 'Cocktails and beers', '¥750', 'Drinks', 'ask', 'ask', 'March 2025.', 'drinks'),
    ] }, {
    cuisine: '世界のビールとウイスキーのブリティッシュパブ (公式サイト)・自家製タルタルのフィッシュアンドチップス、鶏と玉ねぎのアヒージョ (公式サイト)・Ichiro’s Malt と Laphroaig のハイボール、チョコレートとミックスナッツ (2024年12月)・Guinness とフィッシュアンドチップス (2024年12月)・ミートボールのボロネーゼ (2025年3月)・ジントニック、モスコミュール、ピザ、ドリンク750円 (2025年3月)・Setouchi Weizen、Yuzu Lager、焦がし枝豆のバター、フライドポテト (2026年6月)',
    neighborhood: '柳馬場、六角の南。烏丸・河原町',
    gf_detail: 'グルテンフリーではない。フィッシュアンドチップス、ピザ、ミートボールのボロネーゼ (公式サイト、2024〜2025年の口コミ)。',
    vegan_detail: '要確認。パブで、フライドポテト、ナッツ、枝豆がある (2024年12月、2026年6月) が、枝豆はバター。ヴィーガンの情報はない。',
    notes: '[ブリティッシュパブ・柳馬場、深夜1時まで] 六角近くの2フロアのパブ。Guinness、Ichiro’s Malt などのウイスキー、自家製タルタルのフィッシュアンドチップス、ピザ、ミートボールのボロネーゼ、アヒージョを深夜1時まで (土日は15時から)。チャージなし、ドリンクは750円ほど。2階はカラオケ付きで24名まで。',
  });
}

// ================================================================ マタモヤ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26044798/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['18:00', '00:00']); const WE = day(['17:00', '00:00']);
  put({
    id: 'kyoto_matamoya_sanjo', name: 'マタモヤ (Matamoya)', category: 'OMNI',
    lat: 35.008226, lng: 135.770843, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: shumai and fried tofu in the course, with soy-based dishes throughout (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, beef tendon, grilled ham, mentaiko, stingray fin (2026 reviews).',
    hours_raw: 'Tue–Fri 18:00–0:00 (last order 23:30); Sat, Sun and holidays 17:00–0:00; closed Monday (Tabelog). Reservations accepted; a free sashimi platter in your birthday month when booked through Tabelog (Tabelog; September 2026). Appetizer charge ¥500 per person (Tabelog, Japanese text: 「旬の旨いお通し 1人様500円 頂戴しており〼」). Cards (VISA, JCB, AMEX, Diners, UnionPay), e-money and QR (Tabelog). 26 seats: a 6-seat counter and tables for 4 and 6 (Tabelog). Smoking allowed, with five ventilation fans (Tabelog). Wheelchair accessible (Tabelog). Pontocho Matsushimaya Building 2F, Ishiyacho east of Kawaramachi-Sanjo, 2 min from Keihan Sanjo (Tabelog). Opened 15 April 2026; reopened after renewal on 18 April (Tabelog).',
    hours: { 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ishiyacho, east of Kawaramachi-Sanjo — Keihan Sanjo',
    cuisine: 'Sake bar with over 10 carefully chosen sakes from across Japan and good side dishes (Tabelog; April 2026) · crispy fried tofu with yuzu; grill-your-own stingray fin; sakes from Kanagawa, Gunma and Saga (May 2026) · ¥6,000 course with all-you-can-drink: chilled egg tofu, sashimi, beef tendon with daikon, shumai, grilled ham, grilled yam with mentaiko, chicken and mushroom rice, sweet potato ice cream (June 2026) · seven-piece sashimi platter (September 2026)',
    website: null, gmaps: gm('マタモヤ 京都 三条'), menu_url: TB,
    notes: '[Sake bar · Kawaramachi-Sanjo, since 2026] A second-floor sake bar near Keihan Sanjo, opened in April 2026, pouring sakes rarely seen in Kansai with seasonal snacks — yuzu-scented fried tofu, stingray fin you grill yourself, sashimi, beef tendon — and a ¥6,000 course with all-you-can-drink. Good for solo drinking. Closed Monday; smoking allowed.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a sake bar that opened in April 2026 with over 10 sakes from across Japan, for a first stop, one more drink or a last glass.',
      philosophy: null, specialty: 'Japanese sake; seasonal snacks.',
      anecdotes: [
        { text: 'An April 2026 visitor found sakes not often seen in Kansai and staff fun to talk to on a solo night.', source: R + 'B526688249/' },
        { text: 'A June 2026 girls’ night booked the ¥6,000 course and found the room a little too dim to read the menu.', source: R + 'B530782845/' },
        { text: 'A September 2026 visitor showed a driving licence during a birthday month and got a seven-piece sashimi platter free.', source: R + 'B535770508/' },
      ],
      japanese_sources_summary: '食べログ: 日本酒バー・居酒屋、中京区河原町三条下ル東入ル石屋町121 先斗町松嶋屋ビル 2F、京阪三条駅から徒歩2分、火〜金18:00〜24:00 (L.O. 23:30)、土日祝17:00〜24:00、月曜休み、予約可、お通し500円、カード・電子マネー・QR 可、26席、喫煙可 (換気扇5台)、車椅子可、2026年4月15日オープン (4月18日にリニューアルオープン)、全国の日本酒10種以上。口コミ (2026年4月〜9月、英語): 関西では珍しい日本酒、柚子の香りの油揚げ、自分で炙るエイヒレ、飲み放題付きコース6,000円 (玉子豆腐、刺身、牛すじ大根、焼売、ハム焼き、yam の明太焼き、鶏ときのこのご飯、さつまいものアイス)、誕生月は刺身の盛り合わせが無料。',
      confidence: 'medium', sources: [TB, R + 'B526688249/', R + 'B528531371/', R + 'B530782845/', R + 'B535770508/', R + 'B536139429/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter suits solo drinkers; ask staff to pick a sake. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町三条下ル東入ル石屋町121 先斗町松嶋屋ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.008271, 135.770898), offset 7 m south-west: kyoto_cordon_noir_kiyamachi (3F) and kyoto_uotana_fumibun (B1F) are in the same building (1.3 m and 4.5 m away); cross-checked: GSI 京都府京都市中京区石屋町121番地 (lot) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530782845/'],
    price_note: 'Course price from June 2026; ¥500 appetizer charge.', last_checked: TODAY, items: [
      it('', '', 'Course with all-you-can-drink', '¥6,000', 'Courses', 'no', 'no', 'June 2026.', 'course_6000'),
      it('', '', 'Grill-your-own stingray fin', '', 'Snacks', 'ask', 'no', 'May 2026.', 'eihire'),
      it('', '', 'Fried tofu with yuzu', '', 'Snacks', 'ask', 'ask', 'May 2026.', 'aburage'),
    ] }, {
    cuisine: '全国から選んだ10種以上の日本酒とおいしいつまみの日本酒バー (食べログ、2026年4月)・柚子の香りのカリッとした油揚げ、自分で炙るエイヒレ、神奈川・群馬・佐賀の日本酒 (2026年5月)・飲み放題付きの6,000円のコース、冷たい玉子豆腐、刺身、牛すじと大根、焼売、ハム焼き、yam の明太焼き、鶏ときのこのご飯、さつまいものアイス (2026年6月)・7切れの刺身の盛り合わせ (2026年9月)',
    neighborhood: '石屋町、河原町三条の東。京阪三条',
    gf_detail: 'グルテンフリーではない。コースに焼売や油揚げ、醤油を使う料理が多い (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。刺身、牛すじ、ハム焼き、明太子、エイヒレ (2026年の口コミ)。',
    notes: '[日本酒バー・河原町三条、2026年から] 京阪三条近くのビル2階、2026年4月に開いた日本酒バー。関西では珍しい日本酒を、柚子の香りの油揚げ、自分で炙るエイヒレ、刺身、牛すじなど旬のつまみとともに。飲み放題付き6,000円のコースも。ひとり飲みにも。月曜休み、喫煙可。',
  });
}

// ================================================================ クープ・ド・シャンパーニュ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26022370/'; const R = TB + 'dtlrvwlst/';
  const H = day(['19:00', '00:00']);
  put({
    id: 'kyoto_coupe_de_champagne_gion', name: 'クープ・ド・シャンパーニュ (Coupe de Champagne)', category: 'OMNI',
    lat: 35.004326, lng: 135.774894, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A champagne bar; snacks include fresh strawberries, prosciutto and French fries (2024–26 reviews); no gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A champagne bar; seasonal fruit such as strawberries is served with the wine (2024–26 reviews), but no vegan information.',
    hours_raw: 'Mon–Sat 19:00–0:00; closed Sunday; may change (Tabelog). Cards (JCB, AMEX, Diners) and e-money; no QR (Tabelog). Counter seating (Tabelog). No smoking (July 2026). Hanami Kaikan 4F, on the west side of Hanamikoji north of Shijo, 5 min from Gion-Shijo (Tabelog; February 2024). Opened 29 March 2013 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Hanamikoji, north of Shijo — Gion-Shijo',
    cuisine: 'Champagne only — no other wines — with several fine champagnes by the glass, prestige cuvées and rare vintages such as Salon, from glasses to magnums (Tabelog; March and July 2026) · grower blanc de noirs by the bottle; French fries (March 2024) · Kotoka strawberries from Nara as the opening snack; Egly-Ouriet by the glass (February 2024) · prosciutto sliced to order (March 2024) · Kyoto strawberries (March 2026)',
    website: null, gmaps: gm('クープ・ド・シャンパーニュ 祇園'), menu_url: TB,
    notes: '[Champagne bar · Hanamikoji, since 2013] A quiet fourth-floor counter bar off Hanamikoji that pours only champagne — grower bottles, prestige cuvées and rare Salon vintages, with several good ones always open by the glass — alongside seasonal strawberries, freshly sliced prosciutto and fries. Reviewers spend ¥3,000 for a glass or two to ¥15,000 for bottles. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), praised for warm hospitality (March and July 2026)'], origin: null,
      background: 'Per Tabelog: a bar specialising in champagne, opened in March 2013 in Gion.',
      philosophy: null, specialty: 'Champagne by the glass and bottle.',
      anecdotes: [
        { text: 'A July 2026 visitor called it the best champagne bar in Japan for prestige cuvées poured by the glass.', source: R + 'B531309344/' },
        { text: 'A February 2024 visitor was welcomed with Kotoka strawberries and Egly-Ouriet by the glass.', source: R + 'B481368506/' },
        { text: 'A March 2024 diner admired the bar’s slicer and the bubbly-light prosciutto it produced.', source: R + 'B481272083/' },
      ],
      japanese_sources_summary: '食べログ: バー、東山区祇園四条花見小路上ル西側 花見会館 4F、京阪祇園四条駅から徒歩5分、月〜土19:00〜24:00、日曜休み、カード・電子マネー可、QR 不可、カウンター席、2013年3月29日オープン、シャンパーニュ専門のバー。口コミ (2017年4月〜2026年7月、英語): シャンパーニュだけでほかのワインはない、グラスで飲める上質なシャンパーニュ、Salon などの古いヴィンテージ、マグナム、生産者のブラン・ド・ノワール、Kotoka のいちご、Egly-Ouriet、生ハム、フライドポテト、京都のいちご、禁煙、温かいもてなし。',
      confidence: 'medium', sources: [TB, R + 'B90088832/', R + 'B439023366/', R + 'B444495146/', R + 'B450472076/', R + 'B465689853/', R + 'B473041340/', R + 'B481272083/', R + 'B481368506/', R + 'B495344761/', R + 'B524498369/', R + 'B525306254/', R + 'B531309344/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ask what is open by the glass; staff are happy to talk champagne (February 2024). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園四条花見小路上ル西側 花見会館 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.004326, 135.774971), offset 7 m west: kyoto_komorebino_wine_bar is on 1F of the same Hanami Kaikan building (1.2 m away); the address has no lot number, so no GSI lot cross-check — approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No prices in the sources; reviewers report ¥3,000–14,999 per person.', last_checked: TODAY, items: [
      it('', '', 'Champagne by the glass', '', 'Champagne', 'ask', 'ask', '2024–26 reviews.', 'glass'),
      it('', '', 'Seasonal strawberries', '', 'Snacks', 'ask', 'ask', 'February 2024; March 2026.', 'strawberries'),
      it('', '', 'Prosciutto', '', 'Snacks', 'ask', 'no', 'March 2024.', 'prosciutto'),
      it('', '', 'French fries', '', 'Snacks', 'ask', 'ask', 'March 2024.', 'fries'),
    ] }, {
    cuisine: 'シャンパーニュだけでほかのワインはなく、上質なシャンパーニュを常時グラスで数種、プレステージや Salon などの古いヴィンテージ、グラスからマグナムまで (食べログ、2026年3月・7月)・生産者のブラン・ド・ノワールをボトルで、フライドポテト (2024年3月)・最初のつまみは奈良の Kotoka のいちご、グラスの Egly-Ouriet (2024年2月)・その場で切る生ハム (2024年3月)・京都のいちご (2026年3月)',
    neighborhood: '花見小路、四条の北。祇園四条',
    gf_detail: '要確認。シャンパーニュのバーで、つまみはいちご、生ハム、フライドポテト (2024〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認。シャンパーニュのバーで、いちごなど季節の果物が出る (2024〜2026年の口コミ) が、ヴィーガンの情報はない。',
    notes: '[シャンパーニュバー・花見小路、2013年から] 花見小路近くのビル4階の静かなカウンターのバー。シャンパーニュだけを扱い、生産者のボトル、プレステージ、Salon の古いヴィンテージ、常時グラスで飲める上質な数種。季節のいちご、切りたての生ハム、フライドポテトとともに。口コミでは1〜2杯で3,000円、ボトルで15,000円ほど。日曜休み。',
  });
}

save();
