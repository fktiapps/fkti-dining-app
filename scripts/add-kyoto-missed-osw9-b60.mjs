// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 60.
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   + ごはんや嬉々 Gohan ya Kiki (basement obanzai-and-sake izakaya run by two women; about nine years)
//   + 将月 河原町店 Shogetsu (okonomiyaki and teppan izakaya; 3 shops — Ichijoji, Fukakusa, Kawaramachi)
//   - お酒の美術館 御幸町店 — chain (株式会社NBG; 110 shops by April 2025)
//   - 津之喜酒舗 — too thin to verify (one 2025–26 review)
//   + テッポー Teppo (old-style Gion yakiniku and horumon counter)
//   + バリバリインドネシア Baribari Indonesia (Indonesian kitchen in Gion, about 21 years)
//   Same-name counts first (data and queue-status.jsonl): none for any; no earlier rulings. 将月 — three shops per a
//   September 2026 review and HotPepper; none in data; drafted one.
//   None drafted is in data/kyoto.json by name or address.
//   Service charges checked against Tabelog's Japanese original: 将月 「席のみご予約の際は必ず、お一人様1ドリンク
//   1フードご注文お願いいたします。(小学生以下は除く)」 (an order minimum, no charge); the other three have no section.
//   Pins (checked against main fb7ef956): テッポー — address has no lot ("大和町 花七軒"), loc_precise false; no offsets.
//   Ruling applied: other-diner remarks only where several reviews agree (regulars at 嬉々 and テッポー).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-60');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26035481', 'chain: お酒の美術館 (株式会社NBG) — 110 shops by April 2025, from a first shop in 2017 (company seminar listing; ASCII, August 2024: 94th shop)');
skip('26013377', 'too thin to verify: one 2025–26 review');

// ================================================================ ごはんや嬉々
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26030891/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:30', '23:00']);
  put({
    id: 'kyoto_gohanya_kiki', name: 'ごはんや嬉々 (Gohan ya Kiki)', category: 'OMNI',
    lat: 35.004631, lng: 135.765075, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Obanzai and oden, but fried rice, butter sautés and soy-seasoned dishes are on the menu (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken, shellfish and dashi-based obanzai and oden (2025–26 reviews).',
    hours_raw: 'Daily 17:30–23:00; irregular closures (Tabelog). Bookings taken; courses must be booked by phone the day before (Tabelog). Cards and e-money; no QR (Tabelog). 30 seats — counter, tables, sunken seating and a private tatami room for up to 20; non-smoking with a smoking space; wheelchair accessible (Tabelog; May 2025 review). Run by two women; regulars fill the counter, several 2025 reviewers note. In a basement at 西大文字町, about 5 min from Hankyu Kawaramachi and Karasuma Stns (Tabelog; May 2025 review).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo, between Kawaramachi and Karasuma — basement',
    cuisine: 'Kyoto obanzai, oden and sake (2025–26 reviews): an assorted obanzai platter, potato salad, oden, grilled chicken thigh with sansho, new-onion steak and whelk sautéed in butter, the omakase fried rice to finish; Kyoto sakes chosen to your taste, with a monthly pairing selection (2025–26 reviews)',
    website: null, gmaps: gm('ごはんや嬉々 西大文字町'), menu_url: null,
    notes: "[Obanzai & sake · Shijo basement] A friendly basement izakaya run by two women, popular with regulars: obanzai and oden, grilled chicken with sansho and a memorable omakase fried rice to finish, with Kyoto sake picked to your taste. About ¥5,000–8,000. Book courses the day before.",
    chef_bio: { chef_name: null, roles: ['Two women owners (unnamed)'], origin: null,
      background: 'Run by two women (May and November 2025 reviews). A June 2026 diner had first come when it opened about nine years earlier.',
      philosophy: null, specialty: 'Obanzai; omakase fried rice.',
      anecdotes: [
        { text: 'A solo woman diner in November 2025 described a preferred sake style and was poured a Kyoto sake that matched it exactly; the omakase fried rice was a surprise.', source: R + 'B518132678/' },
        { text: 'A March 2025 regular remembered the homemade fried rice at the end above all.', source: R + 'B504158867/' },
        { text: 'A February 2026 diner found the food a little salty and had an uncomfortable experience not described in detail.', source: R + 'B525412448/' },
      ],
      japanese_sources_summary: '食べログ: ごはんや嬉々、居酒屋・日本料理、中京区西大文字町605 松風第2ビル B1、阪急河原町駅・烏丸駅から徒歩5分、毎日 17:30〜23:00、不定休、予約可 (コースは前日までに電話)、カード・電子マネー可、QR 不可、30席 (カウンター、テーブル、掘りごたつ、20名までの座敷の個室)、禁煙 (喫煙スペースあり)、車椅子可、日本酒にこだわる。口コミ (2025年3月〜2026年6月、英語): 女性二人で営む、常連がカウンターに多い、おばんざいの盛り合わせ、ポテトサラダ、おでん、鶏ももの山椒焼き、新玉ねぎのステーキやつぶ貝のバター炒め、締めのおまかせ炒飯、好みに合わせて選ぶ京都の日本酒、毎月替わる合わせの酒、開店から約9年、塩辛めという声。',
      confidence: 'medium', sources: [TB, R + 'B504158867/', R + 'B505314034/', R + 'B506263640/', R + 'B518132678/', R + 'B525412448/', R + 'B530922775/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small basement; regulars at the counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区西大文字町605 松風第2ビル B1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.004631, 135.765075); cross-checked: GSI 京都府京都市中京区西大文字町605番地 (lot) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B518132678/'],
    price_note: 'No prices read.', last_checked: TODAY, items: [
      it('', '', 'Obanzai platter', '', 'Obanzai', 'ask', 'no', '2025 reviews.', 'obanzai'),
      it('', '', 'Omakase fried rice', '', 'To finish', 'ask', 'no', 'March and November 2025 reviews.', 'chahan'),
    ] }, {
    cuisine: '京のおばんざい、おでん、日本酒 (2025〜26年の口コミ): おばんざいの盛り合わせ、ポテトサラダ、おでん、鶏ももの山椒焼き、新玉ねぎのステーキやつぶ貝のバター炒め、締めのおまかせ炒飯。好みに合わせて選ぶ京都の日本酒、毎月替わる合わせの酒 (2025〜26年の口コミ)',
    neighborhood: '四条、河原町と烏丸の間。地下',
    gf_detail: '要確認。おばんざいやおでんもあるが、炒飯、バター炒め、醤油の味付けもある (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏、貝、だしのおばんざいとおでん (2025〜26年の口コミ)。',
    notes: '[おばんざいと日本酒・四条の地下] 女性二人で営む、常連の多い気さくな地下の居酒屋。おばんざいとおでん、山椒の鶏焼き、締めの記憶に残るおまかせ炒飯を、好みで選んでくれる京都の日本酒と。5千〜8千円ほど。コースは前日までに予約。',
  });
}

// ================================================================ 将月 河原町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26004071/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:00', '23:30']); const E = day(['11:30', '15:00'], ['17:00', '23:30']);
  put({
    id: 'kyoto_shogetsu_kawaramachi', name: '将月 河原町店 (Shogetsu, Kawaramachi)', category: 'OMNI',
    lat: 35.006858, lng: 135.768919, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: okonomiyaki, yakisoba and monjayaki batter and noodles (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, egg, shrimp and offal teppan dishes (2025–26 reviews).',
    hours_raw: 'Mon–Fri 17:00–23:30; Sat, Sun and holidays 11:30–15:00 and 17:00–23:30; last order 30 min before; may close at 22:00; open year-round (Tabelog). Bookings taken; courses for 4 or more (Tabelog). Order minimum: Tabelog\'s Japanese original says 「席のみご予約の際は必ず、お一人様1ドリンク1フードご注文お願いいたします。(小学生以下は除く)」 — with a seat-only booking, one drink and one food each, under-13s excepted. Cards and PayPay; no e-money (Tabelog). Self-service water (September 2025 review). Spacious, with many tables and celebrity signed photos; on the 2nd floor of an older building in the covered Kawaramachi arcade, 5 min from Keihan Sanjo Stn (Tabelog; 2025–26 reviews).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi arcade south of Rokkaku — 5 min from Sanjo Stn',
    cuisine: 'Okonomiyaki and teppan izakaya dishes (2025–26 reviews): the special "Shogetsu-yaki" okonomiyaki, modern-yaki, monjayaki in a big bowl, spicy jumbo yakisoba with thick chewy noodles, tonpei-yaki, cheese omelette, garlic, pork-shabu salad, horumon mix ¥900 (September 2026), buttered shrimp, pork toro with ponzu, buttered mushrooms, grilled squid; a 10-dish course with all-you-can-drink ¥3,500 for 4+ (July 2026)',
    website: null, gmaps: gm('将月 河原町店'), menu_url: TB + 'dtlmenu/',
    notes: "[Okonomiyaki & teppan · Kawaramachi] A big, busy second-floor okonomiyaki house in the Kawaramachi arcade, one of three 将月: thick-noodle yakisoba, monjayaki, the special Shogetsu-yaki and teppan snacks, with an all-you-can-drink course from ¥3,500. About ¥2,000–4,000. Open daily; weekend lunch.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'One of three 将月 shops, with Ichijoji and Fukakusa (September 2026 review; HotPepper).',
      philosophy: null, specialty: 'Yakisoba; okonomiyaki.',
      anecdotes: [
        { text: 'A regular in October 2026 filled up on spicy jumbo yakisoba, a cheese omelette and pork-shabu salad with all-you-can-drink, and never got to the okonomiyaki.', source: R + 'B463131498/' },
        { text: 'A July 2026 group of four had a 10-dish course with okonomiyaki, yakisoba and three hours of drinks for ¥3,500 each.', source: R + 'B488959850/' },
        { text: 'A solo business traveller in November 2025 came for the thick, chewy yakisoba, despite the older building.', source: R + 'B522897107/' },
      ],
      japanese_sources_summary: '食べログ: 将月 河原町店、お好み焼き・鉄板焼き・居酒屋、中京区河原町通六角下ル西側山崎町256 リジョーネビル 2F、京阪三条駅から徒歩5分、月〜金 17:00〜23:30、土日祝 11:30〜15:00・17:00〜23:30 (22時閉店の場合あり)、無休、予約可 (コースは4名から)、席のみ予約は1ドリンク1フード、カード・PayPay 可、電子マネー不可、河原町のアーケード内。ホットペッパー: 深草店。口コミ (2025年8月〜2026年10月、英語): 一乗寺・深草・河原町の3店舗、特製の Shogetsu-yaki、モダン焼、大きな器のもんじゃ、太麺の辛いジャンボ焼きそば、とんぺい焼き、チーズオムレツ、ガーリック、豚しゃぶサラダ、ホルモンミックス900円、海老バター、豚トロのポン酢、きのこのバター焼き、いか焼き、10品と飲み放題のコース3,500円、水はセルフ、有名人のサイン、古いビルの2階。',
      confidence: 'medium', sources: [TB, 'https://www.hotpepper.jp/strJ000019265/', R + 'B463131498/', R + 'B471392398/', R + 'B488959850/', R + 'B512832387/', R + 'B513663286/', R + 'B520178375/', R + 'B522897107/', R + 'B527333325/', R + 'B531698279/', R + 'B536418375/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order minimum on seat bookings; staff cook or you finish at the table.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町通六角下ル西側山崎町256 リジョーネビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.006858, 135.768919); cross-checked: GSI 京都府京都市中京区山崎町256番地 (lot) 35m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B488959850/', R + 'B471392398/'],
    price_note: 'Prices from July and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Course of 10 dishes with all-you-can-drink (4+)', '¥3,500', 'Courses', 'no', 'no', 'July 2026 review.', 'course'),
      it('', '', 'Horumon mix', '¥900', 'Teppan', 'ask', 'no', 'September 2026 review.', 'horumon_mix'),
    ] }, {
    cuisine: 'お好み焼きと鉄板の居酒屋料理 (2025〜26年の口コミ): 特製の「Shogetsu-yaki」、モダン焼、大きな器のもんじゃ焼き、太くもちもちの麺の辛いジャンボ焼きそば、とんぺい焼き、チーズオムレツ、ガーリック、豚しゃぶサラダ、ホルモンミックス900円 (2026年9月)、海老のバター焼き、豚トロのポン酢、きのこのバター焼き、いか焼き。4名からの10品と飲み放題のコース3,500円 (2026年7月)',
    neighborhood: '六角の南の河原町のアーケード。三条駅から徒歩5分',
    gf_detail: 'グルテンフリー不可。お好み焼き、焼きそば、もんじゃの生地と麺 (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚、卵、海老、ホルモンの鉄板料理 (2025〜26年の口コミ)。',
    notes: '[お好み焼きと鉄板・河原町] 河原町のアーケードの2階の、広くにぎやかなお好み焼き店。京都に3店ある将月の一つ。太麺の焼きそば、もんじゃ、特製の Shogetsu-yaki、鉄板のつまみ、飲み放題のコースは3,500円から。2千〜4千円ほど。無休、週末は昼も。',
  });
}

// ================================================================ テッポー
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26013245/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '25:00']);
  put({
    id: 'kyoto_teppo_gion', name: 'テッポー (Teppo)', category: 'OMNI',
    lat: 35.002891, lng: 135.77296, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Cuts can be had with salt instead of sauce, but chige and marinated dishes are on the menu (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef and offal yakiniku counter (2025–26 reviews).',
    hours_raw: 'Tue–Sun 18:00–1:00; closed Monday (open on holidays); hours may change (Tabelog). Bookings taken (Tabelog). Cards and QR; no e-money (Tabelog). A small counter and tables for four; smoking allowed; a TV (Tabelog; August 2025 and July 2026 reviews). Lively with regulars around a charismatic owner, several 2025–26 reviewers note. In 花七軒 on Yamatooji south of Shijo, near Gion-Shijo Stn (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Yamatooji south of Shijo, Gion — near Gion-Shijo Stn',
    cuisine: 'Old-style yakiniku and horumon with the day\'s best cuts chosen by the owner (2025–26 reviews): tongue sashimi raw or lightly grilled, sliced tongue, yukhoe, outside skirt and liver with sauce or salt, horumon, kimchi, a hangover-curing chige; omakase on request; bottled beer',
    website: null, gmaps: gm('テッポー 祇園 焼肉'), menu_url: null,
    notes: "[Yakiniku & horumon · Gion] A cosy, sign-covered old-town yakiniku counter run by a stylish, charismatic owner who picks the day's best cuts: tongue sashimi, yukhoe, outside skirt with salt or sauce, horumon and a famous chige. About ¥6,000–15,000. Open till 1:00; smoking allowed; closed Monday.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'A long-running neighbourhood yakiniku in Gion (2024–26 reviews); reviewers describe a stylish, friendly owner who chooses the meat of the day (August 2025, July 2026).',
      philosophy: null, specialty: 'Tongue sashimi; chige.',
      anecdotes: [
        { text: 'A regular of four visits by August 2025 praised the tongue sashimi, raw or lightly grilled, seasoned only with salt and pepper.', source: R + 'B474892346/' },
        { text: 'An August 2025 diner chose the omakase and was asked about preferences first.', source: R + 'B512425418/' },
        { text: 'A July 2026 diner recommends the chige as a hangover cure.', source: R + 'B533205622/' },
      ],
      japanese_sources_summary: '食べログ: テッポー、ホルモン、東山区大和大路通四条下ル大和町 花七軒、祇園四条駅から117m、火〜日 18:00〜翌1:00、月曜休み (祝日は営業)、予約可、カード・QR 可、電子マネー不可、喫煙可、カウンター。口コミ (2025年1月〜2026年10月、英語): その日の肉を選ぶおしゃれで人気の店主、タン刺し (生でも軽く炙っても)、薄切りタン、ユッケ、ハラミ、レバー (たれか塩)、ホルモン、キムチ、二日酔いに効くチゲ、おまかせ、瓶ビール、カウンターと4名テーブル、看板の多い昔ながらの店内、常連でにぎわう、テレビ。',
      confidence: 'medium', sources: [TB, R + 'B474892346/', R + 'B501934229/', R + 'B512425418/', R + 'B514987340/', R + 'B532079796/', R + 'B533205622/', R + 'B535942628/', R + 'B537222090/'] },
    cultural_comfort: { level: 'japanese', note: 'Regulars\' counter; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区大和大路通四条下ル大和町 花七軒',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002891, 135.772960); the address has no lot number (大和町 花七軒), so not lot-checked; the point is on Yamatooji south of Shijo as the address says; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B474892346/', R + 'B533205622/'],
    price_note: 'No prices read.', last_checked: TODAY, items: [
      it('', '', 'Tongue sashimi', '', 'Meat', 'ask', 'no', 'August 2025 review.', 'tan_sashi'),
      it('', '', 'Chige', '', 'Soup', 'no', 'no', 'July 2026 review.', 'chige'),
    ] }, {
    cuisine: '店主がその日のよい部位を選ぶ昔ながらの焼肉とホルモン (2025〜26年の口コミ): 生でも軽く炙ってもよいタン刺し、薄切りタン、ユッケ、たれか塩のハラミとレバー、ホルモン、キムチ、二日酔いに効くチゲ。おまかせも。瓶ビール',
    neighborhood: '祇園、四条の南の大和大路。祇園四条駅の近く',
    gf_detail: '要確認。塩で頼める部位もあるが、チゲやたれの料理もある (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。牛肉とホルモンの焼肉のカウンター (2025〜26年の口コミ)。',
    notes: '[焼肉とホルモン・祇園] 看板だらけの昔ながらの小さな焼肉のカウンター。おしゃれで人気の店主がその日のよい肉を選ぶ。タン刺し、ユッケ、塩かたれのハラミ、ホルモン、評判のチゲ。6千〜1万5千円ほど。深夜1時まで。喫煙可。月曜休み。',
  });
}

// ================================================================ バリバリインドネシア
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000681/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:00', '22:00']); const E = day(['13:00', '15:30'], ['18:00', '22:00']);
  put({
    id: 'kyoto_baribari_indonesia_gion', name: 'バリバリインドネシア (Baribari Indonesia)', category: 'OMNI',
    lat: 35.004013, lng: 135.773017, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Rice dishes such as nasi goreng; sauces and ingredients are not described (2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A long Indonesian menu with dish descriptions; vegetable dishes not detailed (2025–26 reviews).',
    hours_raw: 'Wed–Fri 17:00–22:00; Sat and Sun 13:00–15:30 and 18:00–22:00; closed Monday and Tuesday; hours may change (Tabelog). Bookings taken (Tabelog). Cash only — no cards or e-money (Tabelog). 25 seats: a shoes-off counter and tatami seating plus tables; smoking allowed; kitchen smoke can drift into the seats (Tabelog; November 2025 and July 2026 reviews). On the 3rd floor of the 岩橋ビル on Yamatooji north of Shijo, a little hard to find (Tabelog; April 2025 and July 2026 reviews).',
    hours: { 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Yamatooji north of Shijo, Gion — 3F',
    cuisine: 'Indonesian home cooking with a long, described menu (2025–26 reviews): nasi goreng, many à la carte dishes to share, teh botol jasmine tea served in a clay pot',
    website: null, gmaps: gm('バリバリインドネシア 祇園'), menu_url: null,
    notes: "[Indonesian · Gion] A casual, long-running Indonesian kitchen on a third floor in Gion, with a shoes-off counter: addictive nasi goreng and a long menu of dishes to share, with clay-pot jasmine tea. About ¥2,000–3,000. Cash only; smoking allowed; closed Monday and Tuesday.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Open about 21 years, per a May 2026 reviewer, who also saw many Indonesian students among the guests.',
      philosophy: null, specialty: 'Nasi goreng.',
      anecdotes: [
        { text: 'An April 2025 visitor found the third-floor room bustling and the menu\'s short descriptions a help in choosing.', source: R + 'B505279730/' },
        { text: 'After trying Indonesian food at the Expo, a November 2025 group shared dishes and teh botol in a clay pot.', source: R + 'B516924826/' },
        { text: 'A July 2026 diner loved the nasi goreng but was teary from kitchen smoke at the counter.', source: R + 'B534496630/' },
      ],
      japanese_sources_summary: '食べログ: バリバリインドネシア、インドネシア料理、東山区大和大路通四条上ル廿一軒町227 岩橋ビル 3F、祇園四条駅から112m、水〜金 17:00〜22:00、土日 13:00〜15:30・18:00〜22:00、月火休み、予約可、カード・電子マネー不可、25席 (カウンター、座敷)、喫煙可。口コミ (2025年4月〜2026年7月、英語): 説明付きの多いメニュー、ナシゴレン、土の器の Teh Botol (ジャスミン茶)、靴を脱ぐカウンター、テーブル席、厨房の煙が流れることも、約21年、ビルが見つけにくい。',
      confidence: 'low', sources: [TB, R + 'B505279730/', R + 'B516924826/', R + 'B534496630/', R + 'B90263574/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Shoes-off counter; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区大和大路通四条上ル廿一軒町227 岩橋ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.004013, 135.773017); cross-checked: GSI 京都府京都市東山区廿一軒町227番地 (lot) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534496630/'],
    price_note: 'No prices read.', last_checked: TODAY, items: [
      it('', '', 'Nasi goreng', '', 'Rice', 'ask', 'ask', 'July 2026 review.', 'nasi_goreng'),
      it('', '', 'Teh botol (jasmine tea)', '', 'Drinks', 'ask', 'ask', 'November 2025 review.', 'teh_botol'),
    ] }, {
    cuisine: '説明付きの長いメニューのインドネシアの家庭料理 (2025〜26年の口コミ): ナシゴレン、分け合う単品料理、土の器で出すジャスミン茶の Teh Botol',
    neighborhood: '祇園、四条の北の大和大路。3F',
    gf_detail: '要確認。ナシゴレンなど米の料理だが、たれや材料の説明はない (2025〜26年の口コミ)。',
    vegan_detail: '要確認。インドネシア料理の長いメニューに説明があるが、野菜料理の詳細はない (2025〜26年の口コミ)。',
    notes: '[インドネシア料理・祇園] 祇園のビルの3階の、気軽で長く続くインドネシア料理店。靴を脱ぐカウンター。やみつきのナシゴレンや分け合う料理に土の器のジャスミン茶。2千〜3千円ほど。現金のみ。喫煙可。月火休み。',
  });
}

save();
