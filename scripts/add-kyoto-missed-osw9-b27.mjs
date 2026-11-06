// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 27.
//   + らーめん錦 Ramen Nishiki (sea-bream-broth ramen and sea-bream rice on Shinbashi east of Yamato-oji)     [core]
//   + 魚屋に毛の生えたようなお店 京都つりや Kyoto Tsuriya (angler-owner's fish izakaya in Sanjo Shokusai Roji) [core]
//   + ラ・クラシック La KLASSIQUE (Shimogamo patisserie by Shimogamo Shrine: lemon cake, glass parfaits)      [notable]
//   + とんかつ一番 Tonkatsu Ichiban (old tonkatsu and yoshoku house west of Kyoto Station; Bib Gourmand 2021) [notable]
//   - 建仁寺 祇園 丸山 26001725 skipped (same-concept branch of kyoto_gion_maruyama)
//   - 挽肉と米 京都 26038349 skipped (same-concept branch of tokyo_hikiniku_to_come_shibuya)
//   - 食ばぁー 楽味 26033093 skipped (no reviews in 2025–26)
//   Same-name counts first (same brand or operator): らーめん錦 1; つりや 1 (海鮮串焼き専門店 まつりや is another
//   business); 丸山 — 建仁寺 祇園 丸山 and 祇園 丸山 (in data); 挽肉と米 — 京都 here, 渋谷 in data/tokyo.json;
//   楽味 (Gion Sasaki group) — 祇園楽味 and 鮨 楽味 in data, 食ばぁー 楽味 here, 楽味 京都 at JR Kyoto Isetan in
//   our crawl; ラ・クラシック 1; とんかつ一番 — Tabelog\'s remark names a sister, "Tonkatsu Ichiban 2deux" in Awaza,
//   Osaka; none in data, a small group, drafted.
//   Taken in queue order on 2026-11-05: core 26031161, 26037023; notable 26001725 (skip), 26038349 (skip),
//   26031191, 26033093 (skip), 26002247. None of the four drafted is in data/kyoto.json by name; らーめん錦 shares
//   橋本町416 with kyoto_kyoya_kiyomizu_gion_shinbashi (10.3 m apart) and つりや shares 三条食彩ろぉじ (道祐町135-1)
//   with kyoto_ofuro_sanjo and kyoto_bushido_sanjo — different shops.
//   Service charges checked against Tabelog's Japanese original: つりや "サービス料、チャージなしで突き出しあり"; the
//   others have no section.
//   らーめん錦 has no ramen block: the six ramen dimensions are not all sourced.
//   Pins: つりや's Tabelog point is 3.7 m from ChIJezBqHpMJAWARi5BFOEhNolk (Telaviv), so moved ~6.7 m south.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-27');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26001725', '建仁寺 祇園 丸山: a same-concept branch of a brand already in data — kyoto_gion_maruyama (祇園 丸山), the same kaiseki house\'s name');
skip('26038349', '挽肉と米 京都: a same-concept branch of a brand already in data — tokyo_hikiniku_to_come_shibuya (挽肉と米 渋谷, in data/tokyo.json)');
skip('26033093', '食ばぁー 楽味: no reviews in 2025–26 — the newest of the ten Tabelog reviews fetched is dated June 2024 (Gion Sasaki group bar next to kyoto_gion_rakumi)');

// ================================================================ らーめん錦
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26031161/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.ramen-nishiki.com/';
  const W = day(['11:00', '15:00'], ['18:00', '23:00']);
  put({
    id: 'kyoto_ramen_nishiki', name: 'らーめん錦 (Ramen Nishiki)', category: 'OMNI',
    lat: 35.005808, lng: 135.776329, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: ramen with noodles made in-house (June 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sea-bream broth, grilled sea bream and chashu (2025–26 reviews).',
    hours_raw: 'Tue–Sat 11:00–15:00 and 18:00–23:00; Sun 11:00–16:00; closed Monday (Tabelog). No bookings (Tabelog). Counter seats; non-smoking; cards, IC cards and QR (Tabelog). Often busy with overseas visitors (2025 reviews). On Shinbashi-dori east of Yamato-oji, just west of the crossing near Chion-in (Tabelog; July 2026).',
    hours: { 1: W, 2: W, 3: W, 4: W, 5: W, 6: day(['11:00', '16:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinbashi-dori, Gion — 6 min from Sanjo-Keihan Stn',
    cuisine: 'Ramen on a clear or white sea-bream broth, with a slice of sea bream grilled to order, thin negi and rare chashu; noodles made in-house; shio ramen ¥1,400 (July 2026); yuzu ramen; sea-bream rice to finish, or as ochazuke with the leftover broth; the "Nishiki gozen" set (2025–26 reviews)',
    website: SITE, gmaps: gm('らーめん錦 祇園'), menu_url: SITE,
    notes: "[Ramen · Gion Shinbashi] A stylish counter that looks more like a Japanese restaurant, serving light, clear sea-bream-broth ramen topped with sea bream grilled to order — about ¥1,400 — and sea-bream rice you can finish as ochazuke. Open to 23:00 Tue–Sat; closed Monday.",
    chef_bio: { chef_name: null, roles: ['Operator unnamed in the sources; one person managing everything per a May 2026 reviewer'], origin: null,
      background: 'Opened 21 August 2018 (Tabelog). A November 2026 regular of nineteen visits calls it "the best in Kyoto"; a June 2026 reviewer notes the noodles are all handmade in the shop.',
      philosophy: null, specialty: 'Sea-bream broth ramen; sea-bream rice.',
      anecdotes: [
        { text: 'A June 2025 regular found the small shop crowded with foreign tourists who "tend to linger and chat" after eating, slowing turnover — "It\'s not a café, after all."', source: R + 'B507956313/' },
        { text: 'A July 2025 diner found the sea-bream flavour present but the broth relying on seasoning rather than "the delicate essence of natural ingredients".', source: R + 'B509756837/' },
        { text: 'A May 2026 regular docked a star because the restroom soap was not refilled — understandable "with just one person managing everything".', source: R + 'B530071853/' },
      ],
      japanese_sources_summary: '食べログ: らーめん錦、ラーメン・日本料理、東山区新橋通大和大路通東入2橋本町416、三条京阪駅から439m、火〜土 11:00〜15:00・18:00〜23:00、日 11:00〜16:00、月曜休み、予約不可、カウンター、禁煙、カード・電子マネー・QR 可、2018年8月21日オープン。口コミ (2025年6月〜2026年11月、英語): 鯛出汁の清湯と白湯のラーメン、注文ごとに焼く鯛、レアチャーシュー、自家製麺、塩ラーメン1,400円、柚子ラーメン、鯛めし、残ったスープでお茶漬け、錦御膳、海外の客が多い、一人で切り盛り。',
      confidence: 'medium', sources: [TB, SITE, R + 'B434543510/', R + 'B507956313/', R + 'B509756837/', R + 'B516871759/', R + 'B517638604/', R + 'B518573120/', R + 'B529450048/', R + 'B530071853/', R + 'B530970648/', R + 'B533033753/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Walk in; busy with overseas visitors (2025 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区新橋通大和大路通東入2橋本町416',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.005808, 135.776329); cross-checked: GSI 京都府京都市東山区橋本町416番地 (lot) 45m; 10.3 m from kyoto_kyoya_kiyomizu_gion_shinbashi (also 橋本町416); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533033753/'],
    price_note: 'No menu read; shio ramen price from a July 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Shio ramen (sea-bream broth)', '¥1,400', 'Ramen', 'no', 'no', 'July 2026 review.', 'shio_ramen'),
      it('', '', 'Sea-bream rice', '', 'Rice', 'ask', 'no', '', 'taimeshi'),
    ] }, {
    cuisine: '鯛の清湯か白湯のスープに、注文ごとに焼く鯛の切り身、細ねぎ、レアチャーシューをのせたラーメン。麺は自家製。塩ラーメン1,400円 (2026年7月)、柚子ラーメン、締めの鯛めし (残ったスープでお茶漬けにも)、錦御膳 (2025〜26年の口コミ)',
    neighborhood: '祇園の新橋通。三条京阪駅から徒歩6分',
    gf_detail: 'グルテンフリー不可。自家製麺のラーメン (2026年6月)。',
    vegan_detail: 'ヴィーガン不可。鯛のスープ、焼いた鯛、チャーシュー (2025〜26年の口コミ)。',
    notes: '[ラーメン・祇園新橋] ラーメン店というより割烹のようなおしゃれなカウンターで、注文ごとに焼いた鯛をのせた澄んだ鯛出汁のラーメン (1,400円ほど) と、お茶漬けにもできる鯛めし。火〜土は23時まで、月曜休み。',
  });
}

// ================================================================ 魚屋に毛の生えたようなお店 京都つりや
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26037023/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '23:30']);
  put({
    id: 'kyoto_tsuriya_sanjo', name: '魚屋に毛の生えたようなお店 京都つりや (Kyoto Tsuriya)', category: 'OMNI',
    lat: 35.00823, lng: 135.763307, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi with two house soy sauces, simmered fish, tempura and fried dishes; no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish izakaya with chicken and game too (2026 reviews).',
    hours_raw: 'Wed–Sun 17:30–23:30 (last order 23:00); closed Monday, and Tuesday "for fishing trips" (Tabelog). Bookings taken, also on Tabelog; seating type not guaranteed; two-hour limit (Tabelog; May 2026). Service charge: none — Tabelog\'s Japanese original: "サービス料、チャージなしで突き出しあり" (no service or cover charge, a starter is served). Smoking allowed; no children; 16 seats (6 counter, 10 table) plus the 2nd floor for up to 13; cards, IC cards and QR (Tabelog). Down an alley in 三条食彩ろぉじ off Sanjo, near Sakaimachi (Tabelog; 2026 reviews).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sanjo near Sakaimachi, in an alley — 6 min from Karasuma-Oike Stn',
    cuisine: 'Fish izakaya of the owner\'s own catches and market fish, à la carte only: thick-cut sashimi served with two chosen soy sauces (or sesame oil and salt), simmered fish, braised yellowtail with daikon as the free starter, octopus, kanpachi, grilled sawara, squid with the tentacles as tempura, oysters, cold noodles and rice dishes; chicken and game too; a blackboard says anything can be prepared (Tabelog; 2026 reviews) · sake such as Isojiman, wine and cocktails',
    website: null, gmaps: gm('京都つりや 三条'), menu_url: null,
    notes: "[Fish izakaya · Sanjo, in an alley] A self-styled \"fishmonger with a little extra\" run by a keen angler, closed Tuesdays for fishing trips: thick-cut sashimi in huge portions, simmered fish and a generous free starter, with no service or cover charge. About ¥4,000–6,000; cramped but fun. Smoking allowed; no children. Closed Mon–Tue.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; a fishing enthusiast per an August 2026 reviewer)'], origin: null,
      background: 'Per the operator: fresh-caught fish served as sashimi with two selected soy sauces; closed on Tuesdays for fishing trips. An August 2026 reviewer found the shop full of fishing information.',
      philosophy: null, specialty: 'Thick-cut sashimi.',
      anecdotes: [
        { text: 'A September 2026 diner found the sashimi generous but "not particularly exceptional; it was just average".', source: R + 'B535013594/' },
        { text: 'A September 2026 couple were surprised there was no service or cover charge — and that the free starter was a large simmered fish.', source: R + 'B535473875/' },
        { text: 'An October 2026 guest ordered octopus sashimi and asked, "How many servings is this?"', source: R + 'B537514394/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 魚屋に毛の生えたようなお店 京都つりや、海鮮・牡蠣・居酒屋、中京区道祐町135-1 三条食彩ろぉじ ほとけのざの舗、烏丸御池駅・烏丸駅から徒歩6分、水〜日 17:30〜23:30 (L.O. 23:00)、月・火休み (火曜は釣りのため)、2時間制、サービス料、チャージなしで突き出しあり、16席 (カウンター6、テーブル10)、2階は13名まで、喫煙可、子供不可、カード・電子マネー・QR 可、釣りたての刺身を2種の醤油で。口コミ (2026年4〜10月、英語): 厚切りの刺身、ぶり大根の突き出し、ごま油と塩、蛸、カンパチ、鰆の焼き物、ゲソの天ぷら、アラカルトのみ、黒板に何でも作れます、店主は釣り好き、席は狭め。',
      confidence: 'medium', sources: [TB, R + 'B469572959/', R + 'B529021239/', R + 'B529618700/', R + 'B529865148/', R + 'B530911718/', R + 'B532543010/', R + 'B534184654/', R + 'B535013594/', R + 'B535473875/', R + 'B537514394/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; two-hour limit; smoking allowed; adults only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区道祐町135-1 三条食彩ろぉじ ほとけのざの舗',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.008290, 135.763307), moved ~6.7 m south to 35.008230 because ChIJezBqHpMJAWARi5BFOEhNolk (Telaviv) is pinned 3.7 m from the Tabelog point; cross-checked: GSI 京都府京都市中京区道祐町135番地 (lot) 33m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No menu or prices read; no service or cover charge per Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Sashimi (single fish, thick-cut)', '', 'Sashimi', 'ask', 'no', '', 'sashimi'),
      it('', '', 'Free starter (e.g. braised yellowtail and daikon)', '', 'Starters', 'ask', 'no', 'No cover charge.', 'tsukidashi'),
    ] }, {
    cuisine: '店主の釣った魚と市場の魚の居酒屋、アラカルトのみ: 選んだ2種の醤油 (またはごま油と塩) で食べる厚切りの刺身、煮付け、無料の突き出しのぶり大根、蛸、カンパチ、鰆の焼き物、イカとゲソの天ぷら、牡蠣、冷麺やご飯もの。鶏やジビエも。黒板には「何でも作れます」(食べログ、2026年の口コミ)・日本酒は Isojiman など、ワイン、カクテル',
    neighborhood: '堺町近くの三条、路地の奥。烏丸御池駅から徒歩6分',
    gf_detail: '要確認。2種の醤油の刺身、煮付け、天ぷら、揚げ物。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚の居酒屋で、鶏やジビエも (2026年の口コミ)。',
    notes: '[魚の居酒屋・三条の路地] 「魚屋に毛の生えたような」と名乗る、釣り好きの店主の店で、火曜は釣りで休み。厚切りで量の多い刺身、煮付け、たっぷりの無料の突き出しで、サービス料やチャージはなし。4千〜6千円ほど、席は狭いがにぎやか。喫煙可、子供不可。月・火曜休み。',
  });
}

// ================================================================ ラ・クラシック
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26031191/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:30', '17:00']);
  put({
    id: 'kyoto_la_klassique', name: 'ラ・クラシック (La KLASSIQUE)', category: 'MOM_AND_POP',
    lat: 35.036662, lng: 135.771229, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: cakes, sablés, cookies, éclairs and tarts (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cream, butter and egg throughout (2026 reviews).',
    hours_raw: 'Tue–Sat 10:30–17:00; closed Sunday and Monday, open on holidays (Tabelog). Bookings taken (Tabelog). Eat-in seats and takeaway; the lemon cake sells out early at weekends and needs refrigerating (June 2026). Cards, IC cards, QR and PayPay; non-smoking (Tabelog). By Shimogamo Shrine — 1 min from the Tadasu-no-mori bus stop, 11 min from Demachiyanagi Stn (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shimogamo, by Shimogamo Shrine — Tadasu-no-mori bus stop',
    cuisine: 'Classical French pâtisserie: strawberry shortcake, iced lemon cake (the specialty), gâteau melon, a Japanese-citrus tart, caramel éclair, cream puffs, salted sablés, "piglet" lemon cookies in a gift tin (2026 reviews) · seasonal glass desserts — cherry blossom and Kyoto strawberry ¥2,750 (April 2026), melon with mint meringue (May 2026) (2026 reviews)',
    website: null, gmaps: gm('ラ・クラシック 下鴨'), menu_url: null,
    notes: "[Patisserie · Shimogamo Shrine] A classical pâtisserie by Shimogamo Shrine whose glazed lemon cake sells out at weekends; seasonal glass parfaits (cherry blossom, melon) draw queues on release. Cakes from under ¥1,000; parfaits about ¥2,750. Gift tins of cookies. Closed Sunday and Monday.",
    chef_bio: { chef_name: 'Masaya Kato (romaji, per a May 2026 review)', roles: ['Pâtissier-owner, per a May 2026 reviewer'], origin: null,
      background: 'Opened 30 August 2018 (Tabelog). A May 2026 reviewer writes that it is run by Masaya Kato, formerly of the noted pâtisserie "Au Grenier d\'Or".',
      philosophy: null, specialty: 'Lemon cake; seasonal glass desserts.',
      anecdotes: [
        { text: 'A repeat buyer in April 2026 always ends up getting a shortcake for themself when buying a gift.', source: R + 'B508088459/' },
        { text: 'On a weekday in April 2026 only about four cakes were left in the case — baked goods are the main focus.', source: R + 'B525852769/' },
        { text: 'A May 2026 visitor came on the release day of the melon glass dessert after seeing it on Instagram.', source: R + 'B523810559/' },
      ],
      japanese_sources_summary: '食べログ: ラ・クラシック (La KLASSIQUE)、ケーキ・カフェ・洋菓子、左京区下鴨森本町13-9 糺の森ビル本館1階、市バス「糺の森」から徒歩1分、出町柳駅から徒歩約11分、火〜土 10:30〜17:00、日・月曜休み (祝日は営業)、予約可、テイクアウト、カード・電子マネー・QR・PayPay 可、2018年8月30日オープン。口コミ (2026年1〜10月、英語): ショートケーキ、レモンケーキ (週末は早く売り切れ、要冷蔵)、ガトーメロン、和柑橘のタルト、キャラメルのエクレア、シュークリーム、塩気のあるサブレ、子豚のレモンクッキーの缶、桜と京都の苺のグラスデザート2,750円、メロンとミントのメレンゲ、Au Grenier d\'Or 出身の Masaya Kato。',
      confidence: 'medium', sources: [TB, R + 'B508088459/', R + 'B522707362/', R + 'B523810559/', R + 'B524510067/', R + 'B525852769/', R + 'B528192423/', R + 'B528310713/', R + 'B529229228/', R + 'B533084804/', R + 'B537013920/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Go early at weekends for the lemon cake.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区下鴨森本町13-9 糺の森ビル本館1階',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.036662, 135.771229); cross-checked: GSI 京都府京都市左京区下鴨森本町13番地 (lot) 110m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B522707362/'],
    price_note: 'No price list read; glass-dessert price from an April 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Seasonal glass dessert (cherry blossom and Kyoto strawberry)', '¥2,750', 'Desserts', 'no', 'no', 'April 2026 review.', 'glass_dessert'),
      it('', '', 'Lemon cake', '', 'Cakes', 'no', 'no', 'Sells out early at weekends.', 'lemon_cake'),
    ] }, {
    cuisine: 'クラシックなフランス菓子: 苺のショートケーキ、看板のレモンケーキ、ガトーメロン、和柑橘のタルト、キャラメルのエクレア、シュークリーム、塩気のあるサブレ、缶入りの子豚のレモンクッキー (2026年の口コミ)・季節のグラスデザート: 桜と京都の苺2,750円 (2026年4月)、メロンとミントのメレンゲ (2026年5月) (2026年の口コミ)',
    neighborhood: '下鴨神社のそばの下鴨。市バス糺の森から',
    gf_detail: '実際にはグルテンフリー不可。ケーキ、サブレ、クッキー、エクレア、タルト (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。クリーム、バター、卵 (2026年の口コミ)。',
    notes: '[パティスリー・下鴨神社] 下鴨神社そばのクラシックなパティスリー。グラスのかかったレモンケーキは週末早くに売り切れ、季節のグラスパフェ (桜、メロン) は発売日に人が集まる。ケーキは1,000円以下から、パフェは2,750円ほど。クッキー缶も。日・月曜休み。',
  });
}

// ================================================================ とんかつ一番
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26002247/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.tonkatsuichiban.com/';
  const H = day(['11:30', '14:00'], ['17:00', '20:30']);
  put({
    id: 'kyoto_tonkatsu_ichiban', name: 'とんかつ一番 (Tonkatsu Ichiban)', category: 'OMNI',
    lat: 34.988247, lng: 135.750042, cuisine_type: 'katsu',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: breaded, fried cutlets with demi-glace sauce (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork cutlets and katsudon (2026 reviews).',
    hours_raw: '11:30–14:00 and 17:00–20:30 (last order 20:00); closed Tuesday, holidays, and the 2nd and 4th Wednesdays (open when a holiday) (Tabelog). No bookings; queues at busy times, menus handed out while waiting (Tabelog; 2026 reviews). No cards or e-money; PayPay, d Barai, Rakuten Pay (Tabelog). 35 seats: 4 at the counter, three tables, a tatami room upstairs; children welcome; takeaway (Tabelog). In a quiet street of machiya about 15 min west of Kyoto Station, 5 min from the Omiya-Shichijo bus stop, near To-ji (Tabelog; 2026 reviews).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'West of Kyoto Station near To-ji — Omiya-Shichijo bus stop',
    cuisine: 'Old-style tonkatsu and yoshoku with a house demi-glace: loin tonkatsu 180 g, fillet 100 g set, katsudon of Yonezawa pork (large ¥1,510), the signature tonkatsu rice set; Kyoto-style miso soup with sansho, potato salad (2026 reviews) · Michelin Bib Gourmand, Kyoto-Osaka 2021 (Tabelog)',
    website: SITE, gmaps: gm('とんかつ一番 京都 徹宝町'), menu_url: null,
    notes: "[Tonkatsu · west of Kyoto Station] A long-established neighbourhood tonkatsu house in a quiet machiya street, Bib Gourmand in 2021: crisp-yet-soft cutlets drowned in a house demi-glace, katsudon, and a Kyoto miso soup with sansho. About ¥1,500–2,500; queues common, often many overseas visitors. No cards (QR pay ok). Closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Operator unnamed in the sources'], origin: null,
      background: 'Tabelog gives the opening date as 18 November 1949; a November 2026 reviewer writes it was founded in 1960. Tabelog\'s remark names a sister, "Tonkatsu Ichiban 2deux" in Awaza, Osaka. Bib Gourmand in the Michelin Guide Kyoto-Osaka + Okayama 2021 (Tabelog).',
      philosophy: null, specialty: 'Tonkatsu with demi-glace.',
      anecdotes: [
        { text: 'A September 2026 diner waiting outside found that everyone in the queue but one person was from overseas.', source: R + 'B535566363/' },
        { text: 'A September 2026 visitor found the food decent but the price and service speed off-putting, and wished water were left on the table.', source: R + 'B537009208/' },
        { text: 'An August 2026 diner likened it to a home-cooked meal from a skilled mother, "no offense to the professionals".', source: R + 'B533740883/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): とんかつ一番、とんかつ・洋食・居酒屋、下京区黒門通木津屋橋上る徹宝町403、京都駅から徒歩約15分、市バス大宮七条から徒歩約5分、11:30〜14:00・17:00〜20:30 (L.O. 20:00)、火曜・祝日休み、第2・4水曜休み (祝日は営業)、予約不可、カード・電子マネー不可・QR 可、35席 (カウンター4、テーブル3、2階座敷)、子供可、テイクアウト、開業1949年11月18日、大阪・阿波座のとんかつ一番 2deux、ミシュランガイド京都・大阪+岡山2021 ビブグルマン。口コミ (2026年4〜11月、英語): ロースかつ180g、ヒレ100gの定食、米沢豚のかつ丼大1,510円、デミグラスソース、山椒の京風味噌汁、ポテトサラダ、1960年創業との記述、海外の客が多い。',
      confidence: 'medium', sources: [TB, SITE, R + 'B483616901/', R + 'B533740883/', R + 'B534132788/', R + 'B535566363/', R + 'B536772296/', R + 'B537009208/', R + 'B537155587/', R + 'B537478181/', R + 'B537543667/', R + 'B538732919/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Queue; no cards (QR pay ok); many overseas visitors (2026 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区黒門通木津屋橋上る徹宝町403',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (34.988247, 135.750042); cross-checked: GSI 京都府京都市下京区徹宝町403番地 (lot) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537543667/'],
    price_note: 'No menu read; katsudon price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Katsudon, large (Yonezawa pork)', '¥1,510', 'Rice', 'no', 'no', 'October 2026 review.', 'katsudon'),
      it('', '', 'Loin tonkatsu set with demi-glace', '', 'Sets', 'no', 'no', '', 'rosu_katsu'),
    ] }, {
    cuisine: '自家製デミグラスの昔ながらのとんかつと洋食: ロースかつ180g、ヒレ100gの定食、Yonezawa 豚のかつ丼 (大1,510円)、看板のとんかつライス。山椒の京風味噌汁、ポテトサラダ (2026年の口コミ)・ミシュラン京都・大阪2021 ビブグルマン (食べログ)',
    neighborhood: '京都駅の西、東寺の近く。大宮七条バス停から',
    gf_detail: 'グルテンフリー不可。衣をつけて揚げたカツとデミグラスソース (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚カツとかつ丼 (2026年の口コミ)。',
    notes: '[とんかつ・京都駅の西] 町家の並ぶ静かな通りの老舗のとんかつ屋で、2021年にビブグルマン。サクッとしてやわらかいカツに自家製デミグラスをたっぷり、かつ丼、山椒の京風味噌汁も。1,500〜2,500円ほど。行列が多く海外の客も多い。カード不可 (QR 決済可)。火曜休み。',
  });
}

save();
