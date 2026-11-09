// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 76.
//   Queue run from the osw2 worktree, 2026-11-08. Rest tier, nearest-first (queue.mjs kyoto-missed next rest 2000, lane ids by distance).
//   Rest rule: at least one 2025–26 review and enough sourced detail. Days the sources do not state are left out of hours.
//   - ごちそう焼むすび おにまる 三条河原町店 — chain (株式会社マリノ; shops across Japan and 24 abroad)
//   + 京ねぎ焼 木屋町店 Kyo Negiyaki (late-night negiyaki counter on Kiyamachi; formerly the Kiyamachi branch of おほーつく in Nishinokyo,
//     which is not in data — a small local pair, drafted on its own evidence)
//   + 喫茶デリカ Kissa Delica (Showa-style kissaten at Takakura-Shijo; not デリカKYK, which 26019335 skipped as a chain)
//   - 越前 若狭家 三条店 — chain (若狭家: Kawaramachi, Sanjo, Namba and Shinjuku Kabukicho shops)
//   - 西谷堂 新京極店 — retail food shop (Greg 11-07 ruling): a branch of a wagashi shop whose main shop is 26018915
//   - HAPPY STAND KYOTO — no 2025–26 review (rest rule)
//   - 磯丸水産 河原町三条店 — large parent: SFP Holdings, as its 五の五 shop (26039358)
//   + 割烹いがらし Kappo Igarashi (Gion kappo since 1979, second generation, with a sommelier)
//   + 舞扇 Maisen (Gion kappo in a machiya down an alley; fugu, hamo and crab courses)
//   None of the drafted shops is in data/kyoto.json, hidden records included: grep by id, name and address. Brand names grepped in
//   queue-status.jsonl: rulings followed for デリカKYK (not the same shop) and SFP.
//   Service charges: いがらし 10% (Tabelog; official site "サ別").
//   Pins: Tabelog /en/ point, cross-checked with GSI; 喫茶デリカ moved ~6 m to clear 炭火焼肉 おやけ (3 m, likely the same building); each
//   9 m+ from every pin on main, hidden records included.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-76');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26040483', 'ごちそう焼むすび おにまる 三条河原町店: chain — おにまる (株式会社マリノ, Nagoya) has shops in Kyoto, Tokyo, Kobe, Nagoya and elsewhere, and 24 overseas including Los Angeles (press releases, 2026)');
skip('26004831', '越前 若狭家 三条店: chain — 若狭家 seafood-bowl shops in Kawaramachi, Sanjo, Namba (Osaka) and Shinjuku Kabukicho (web listings; an October 2022 review notes several locations)');
skip('26023089', '西谷堂 新京極店: retail food shop (Greg 11-07 ruling) — a branch of a wagashi shop; the 1892 founding comes from one review and family succession is not sourced; the main shop (26018915, Imadegawa) is the place to decide');
skip('26033967', '磯丸水産 河原町三条店: large parent — 磯丸水産 is an SFP Holdings chain; same group ruling as 五の五 河原町三条店 (26039358)');
skip('26030481', 'HAPPY STAND KYOTO: no 2025–26 review — the latest of 25 Tabelog reviews is from 2024 (rest rule)');

// ================================================================ 京ねぎ焼 木屋町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26007105/'; const R = TB + 'dtlrvwlst/';
  const A = day(['18:00', '03:00']), B = day(['18:00', '04:00']);
  put({
    id: 'kyoto_kyo_negiyaki_kiyamachi', name: '京ねぎ焼 木屋町店 (Kyo Negiyaki Kiyamachi)', category: 'OMNI',
    lat: 35.00847381787075, lng: 135.7705730103899, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: negiyaki is made with wheat batter, tenkasu and sauce (October 2026 review).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the negiyaki has beef tendon, chikuwa, egg and bonito flakes (October 2026 review).',
    hours_raw: '18:00–03:00 Sunday–Friday; 18:00–04:00 Saturday (Tabelog). Cash only (Tabelog; October 2026). About 30 seats: a counter of about 10 and tables; smoking allowed (Tabelog). Takeaway negiyaki, and takeaway draft beer ¥500 (August and October 2026). On Kiyamachi south of Sanjo, between Chao Chao Gyoza and Ramen Miyoshi (Tabelog; December 2021).',
    hours: { 0: A, 1: A, 2: A, 3: A, 4: A, 5: B, 6: A }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Kiyamachi, south of Sanjo',
    cuisine: 'Negiyaki only — thin dashi batter with Kujo green onions, chikuwa, konnyaku, sauced Omi beef tendon and an egg, finished with sauce, bonito and aonori; ¥880 (October 2026) · solo set of draft beer, negiyaki and a small beef-tendon teppan dish ¥1,760 (October 2026) · suji-yaki, dashimaki, ika with garlic, bacon and eggs ¥400 (2024–2026) · sake ¥500, large bottle of Sapporo Lager ¥800 (2026)',
    website: null, gmaps: gm('京ねぎ焼 木屋町店'), menu_url: TB,
    notes: "[Negiyaki · Kiyamachi south of Sanjo, open till 3–4 am] A small cash-only teppan counter making one thing well: Kyoto negiyaki of Kujo green onions, beef tendon and konnyaku in a thin dashi batter. The ¥1,760 solo set adds a draft beer and a tendon side. Open late every night.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'A December 2021 reviewer writes that the shop had been on Kiyamachi for about 15 years, first as the Kiyamachi branch of the okonomiyaki shop おほーつく in Nishinokyo and recently renamed 京ねぎ焼, serving only negiyaki. Reviewers (2021–2026) describe a friendly owner who cooks and talks at the counter, sometimes alone.',
      philosophy: null,
      specialty: 'Negiyaki with beef tendon and konnyaku.',
      anecdotes: [
        { text: 'A September 2025 business traveller had the solo set, then ika with garlic and dashimaki, and three beers.', source: R + 'B514550504/' },
        { text: 'An August 2026 second-stop guest paid ¥900 for bacon and eggs with a glass of sake.', source: R + 'B534548936/' },
        { text: 'An October 2026 diner watched the negiyaki built layer by layer on the teppan.', source: R + 'B536737445/' },
      ],
      japanese_sources_summary: '食べログ: 京ねぎ焼 木屋町店、お好み焼き、京都市中京区木屋町通三条下ル石屋町117 1F、日〜金 18:00〜翌3:00、土 18:00〜翌4:00、カード・電子マネー不可、30席 (カウンター10席ほどとテーブル)、喫煙可。口コミ (2017〜2026年、英語): 木屋町で15年ほど、西ノ京のお好み焼き「おほーつく」の木屋町店から「京ねぎ焼」に改名しねぎ焼き専門に (2021年12月)、九条ねぎ、ちくわ、こんにゃく、近江牛のすじ、卵、だしの効いた薄い生地、ねぎ焼き880円、おひとりさまセット (生ビール、ねぎ焼き、小すじ焼き) 1,760円、すじ焼き、だし巻き、イカのガーリック、ベーコンエッグ400円、日本酒500円、瓶ビール大800円、持ち帰りの生ビール500円、現金のみ、気さくな店主、ひとりで切り盛りする日も。',
      confidence: 'low', sources: [TB, R + 'B446281614/', R + 'B467512773/', R + 'B496096873/', R + 'B514550504/', R + 'B534548936/', R + 'B536737445/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; counter; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区木屋町通三条下ル石屋町117 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.008474, 135.770573); cross-checked: GSI 京都府京都市中京区石屋町117番地 (lot) 32m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536737445/', R + 'B534548936/'],
    price_note: 'Prices from August and October 2026 reviews; cash only.', last_checked: TODAY, items: [
      it('', '', 'Negiyaki (Kujo green onion, beef tendon, konnyaku)', '¥880', 'Negiyaki', 'no', 'no', '', 'negiyaki'),
      it('', '', 'Solo set: draft beer, negiyaki, small beef-tendon dish', '¥1,760', 'Sets', 'no', 'no', '', 'solo_set'),
      it('', '', 'Bacon and eggs', '¥400', 'Teppan', 'ask', 'no', '', 'bacon_eggs'),
    ] }, {
    cuisine: 'ねぎ焼きのみ。だしの効いた薄い生地に九条ねぎ、ちくわ、こんにゃく、たれをからめた近江牛のすじ、卵、仕上げにソース、かつお節、青のり。880円 (2026年10月)・生ビール、ねぎ焼き、小さなすじ焼きのおひとりさまセット1,760円 (2026年10月)・すじ焼き、だし巻き、イカのガーリック、ベーコンエッグ400円 (2024〜2026年)・日本酒500円、サッポロラガーの大瓶800円 (2026年)',
    neighborhood: '木屋町、三条の南',
    gf_detail: 'グルテンフリー不可。小麦の生地、天かす、ソースを使うねぎ焼き (2026年10月の口コミ)。',
    vegan_detail: 'ヴィーガン不可。牛すじ、ちくわ、卵、かつお節入りのねぎ焼き (2026年10月の口コミ)。',
    notes: '[ねぎ焼き・木屋町の三条下ル、深夜3〜4時まで] 現金のみの小さな鉄板のカウンター。九条ねぎ、牛すじ、こんにゃくを薄いだしの生地で焼く京都のねぎ焼き一本。1,760円のおひとりさまセットは生ビールとすじ焼き付き。毎晩遅くまで。',
  });
}

// ================================================================ 喫茶デリカ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26005509/'; const R = TB + 'dtlrvwlst/';
  const H = day(['09:00', '18:00']);
  put({
    id: 'kyoto_kissa_delica_takakura', name: '喫茶デリカ (Kissa Delica)', category: 'OMNI',
    lat: 35.004497, lng: 135.762757, cuisine_type: 'kissaten',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: the food is curry, spaghetti, pizza, sandwiches and cake; drinks only (reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Coffee and a wide range of teas; the food uses egg, cheese and meat (reviews).',
    hours_raw: '09:00–18:00; closed Wednesday (Tabelog). Cash only — no cards, e-money or QR (Tabelog). 44 seats on the second floor: a smoking section and a few non-smoking tables by the window, plus private rooms for 2–6 (5 or more); children welcome (Tabelog; 2025–2026 reviews). Reservations taken (Tabelog). At Takakura and Shijo, by the Daimaru Nishinotoin exit and close to Nishiki Market (Tabelog; 2025 reviews).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Takakura at Shijo, near Nishiki Market',
    cuisine: 'Showa-style kissaten with a long tea list (2025–2026 reviews) · baked curry with egg and cheese ¥1,150; curry set with salad and a drink ¥1,300 (September 2025; April 2026) · meat-sauce spaghetti set; Delica pizza on a homemade crust with ham and egg (2025) · café au lait ¥600, iced tea ¥580; black tea and pudding (October 2025; October 2026) · breakfast served (June 2025)',
    website: null, gmaps: gm('喫茶デリカ 高倉四条'), menu_url: TB,
    notes: "[Kissaten · Takakura-Shijo, Showa café with a tea list] A roomy upstairs coffee shop by Nishiki Market with teas from around the world, bubbling baked curry with egg (¥1,150), meat-sauce spaghetti and homemade pizza. Cash only; smoking section with a few non-smoking tables by the window. Closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Staff not named'], origin: null,
      background: 'Reviewers (2024–2026) describe a nostalgic Showa-era kissaten on a second floor at Takakura-Shijo, with handmade food, quick service, generous portions and a family-run feel.',
      philosophy: null,
      specialty: 'Baked curry; teas.',
      anecdotes: [
        { text: 'An August 2025 diner had the baked curry set and was kept in water by a kind older woman at the counter.', source: R + 'B513048228/' },
        { text: 'An October 2025 visitor followed the street sign promising teas from around the world.', source: R + 'B515167022/' },
        { text: 'An April 2026 regular stops in before work for a ¥1,300 curry set.', source: R + 'B526917671/' },
      ],
      japanese_sources_summary: '食べログ: 喫茶デリカ、喫茶店・洋食・ケーキ、京都市中京区高倉通四条上ル帯屋町578、9:00〜18:00、水曜定休、カード・電子マネー・QR決済不可、44席 (喫煙席が多く、窓際に禁煙のテーブル)、個室 (2〜6名、5名以上)、子供可、予約可。口コミ (2024〜2026年、英語): 2階の昔ながらの喫茶店、錦市場や大丸西洞院口の近く、世界の紅茶、卵とチーズの焼きカレー1,150円、サラダとドリンク付きのカレーセット1,300円、ミートスパゲティのセット、自家製生地のデリカピザ (ハムと卵)、カフェオレ600円、アイスティー580円、紅茶とプリン、モーニング、手作りの料理、量が多い、家族経営のような雰囲気。',
      confidence: 'low', sources: [TB, R + 'B507896344/', R + 'B511516498/', R + 'B513048228/', R + 'B513094672/', R + 'B513382420/', R + 'B515167022/', R + 'B526917671/', R + 'B536875427/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; mostly smoking seats.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区高倉通四条上ル帯屋町578',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026. A May 2025 review on the page describes a café at Namba Station and is not used.' },
    pin_source: `Tabelog ${TB} (35.004497, 135.762691), offset ~6m to clear 炭火焼肉 おやけ (3m, likely the same building); cross-checked: GSI 京都府京都市中京区帯屋町578番地 (lot) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B513094672/', R + 'B515167022/', R + 'B526917671/'],
    price_note: 'Prices from 2025–2026 reviews; cash only.', last_checked: TODAY, items: [
      it('', '', 'Baked curry with egg', '¥1,150', 'Food', 'no', 'no', 'September 2025.', 'yaki_curry'),
      it('', '', 'Curry set with salad and a drink', '¥1,300', 'Food', 'no', 'no', 'April 2026.', 'curry_set'),
      it('', '', 'Café au lait', '¥600', 'Drinks', 'gf', 'no', 'October 2025.', 'cafe_au_lait'),
      it('', '', 'Iced tea', '¥580', 'Drinks', 'gf', 'vegan', 'October 2025.', 'iced_tea'),
    ] }, {
    cuisine: '紅茶の種類が多い昭和の喫茶店 (2025〜2026年の口コミ)・卵とチーズの焼きカレー1,150円、サラダとドリンク付きのカレーセット1,300円 (2025年9月、2026年4月)・ミートスパゲティのセット、自家製生地のデリカピザ (ハムと卵) (2025年)・カフェオレ600円、アイスティー580円、紅茶とプリン (2025年10月、2026年10月)・モーニングも (2025年6月)',
    neighborhood: '高倉四条、錦市場の近く',
    gf_detail: 'グルテンフリー不可。食べ物はカレー、スパゲティ、ピザ、サンド、ケーキ。飲み物のみ可 (口コミ)。',
    vegan_detail: '要確認。コーヒーと多くの紅茶。食べ物は卵、チーズ、肉を使う (口コミ)。',
    notes: '[喫茶・高倉四条、紅茶の多い昭和の喫茶] 錦市場近くの広い2階の喫茶店。世界の紅茶、ぐつぐつの卵入り焼きカレー (1,150円)、ミートスパゲティ、自家製生地のピザ。現金のみ、喫煙席が中心で窓際に禁煙のテーブル。水曜休み。',
  });
}

// ================================================================ 割烹いがらし
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26003091/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kappouigarashi.com/';
  const H = day(['12:00', '14:00'], ['17:00', '21:00']);
  put({
    id: 'kyoto_kappo_igarashi_gion', name: '割烹いがらし (Kappo Igarashi)', category: 'OMNI',
    lat: 35.00332673707016, lng: 135.77532487917284, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kappo and Kyoto kaiseki with dashi and soy, tempura and cream croquettes among the dishes; tell the restaurant about allergies when booking (Tabelog; official site).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-led kappo with suppon and dashi (official site).',
    hours_raw: 'Lunch 12:00 (last order 13:30), for two or more booked by the day before; dinner 17:00 (last order 20:00); closed Sunday (official site; Tabelog). Allergies to be given when booking (Tabelog). Cards accepted; no e-money or QR; 10% service (Tabelog; course prices on the official site are before service). 31 seats: an 11-seat L-shaped counter, tatami rooms and tables; private rooms for 2 to 20; all seats non-smoking with a smoking area; children welcome in private rooms only (Tabelog). On the south side of Gion off Hanamikoji (Tabelog; official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, south of Shijo off Hanamikoji',
    cuisine: 'Counter kappo in Gion since 1979: order à la carte by talking with the chef, or take a Kyoto kaiseki course in the tatami rooms (official site) · omakase kaiseki of about 8, 9 or 10 dishes ¥16,500, ¥19,800, ¥22,000; lunch course from ¥14,300 (tax in, service extra; official site) · sashimi of 5–7 wild fish a day, guji, suppon hot pot (a long-time speciality), funazushi, homemade karasumi, whale bacon, fugu milt (official site) · dobin-mushi with matsutake and eel, ayu with roe grilled 40 minutes, mackerel sushi (October 2026); cream croquettes, fried lily bulb (2024–2025) · 30–50 wines chosen by the sommelier, no list, plus sake and shochu (official site)',
    website: SITE, gmaps: gm('割烹いがらし 祇園'), menu_url: SITE + 'menu/',
    notes: "[Kappo · Gion south, second-generation counter since 1979] A Gion kappo where a brother and sister born in Gion host alongside the taisho and okami: talk your way through wild-fish sashimi, guji, suppon hot pot and funazushi at the L-shaped counter, with wines picked by the sommelier sister. Kaiseki courses from ¥16,500; closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Second-generation young master (若主人)', 'Sommelier (the young master’s elder sister)'], origin: 'Gion, Kyoto (official site)',
      background: 'Founded in 1979 (official site; September 2024 review). The taisho and okami, who know the ways of the hanamachi, are joined by a brother and sister born and raised in Gion, as young master and sommelier (official site); an October 2022 reviewer heard the current owner is the second generation.',
      philosophy: 'Build each course from ingredients at the peak of the season, and cook to each guest’s taste at the counter, including dishes not on the menu (official site).',
      specialty: 'Counter kappo; suppon hot pot.',
      anecdotes: [
        { text: 'A September 2024 guest was told by the owner that newcomers are always welcome, despite the exclusive air.', source: R + 'B492039185/' },
        { text: 'A January 2025 regular was lucky to find oden on the counter that day.', source: R + 'B498946994/' },
        { text: 'An October 2026 matsutake hunter finished with funazushi, thick mackerel sushi and red miso soup.', source: R + 'B524810814/' },
      ],
      japanese_sources_summary: '公式サイト: 割烹いがらし、京都祇園で40年、1979年創業、花街の粋を知る大将・女将とともに祇園で生まれ育った姉弟が若主人・ソムリエとしておもてなし、カウンターの一品料理とお座敷の京会席、京都市東山区祇園町南側570-125、ランチ12:00〜13:30 (L.O.、2名から前日までに要予約)、ディナー17:00〜20:00 (L.O.)、日曜定休、おまかせ京会席 8品前後16,500円・9品前後19,800円・10品前後22,000円 (税込、サ別)、ランチのコース14,300円から、瀬戸内や日本海の天然鮮魚の御造り (5〜7種)、ぐじ、長年の名物のすっぽん鍋 (長崎・島原産)、ふなずし、自家製からすみ、くじらベーコン、ふぐ白子焼、ワインはソムリエ資格を持つ若主人の姉が選ぶ30〜50種 (リストなし)、カウンター割烹でワインを味わう会。食べログ: 割烹いがらし、日本料理、カード可、電子マネー・QR決済不可、サービス料10%、31席 (カウンター11席、座敷16席、テーブル4席)、個室 (2〜20名)、全席禁煙 (喫煙所あり)、子供は個室のみ、予約時にアレルギーを。口コミ (2013〜2026年、英語): 2代目、L字の木のカウンター、常連とホテルのコンシェルジュ経由の海外客、松茸と鰻の土瓶蒸し、40分焼く子持ち鮎、ふなずし、鯖寿司と赤だし、クリームコロッケ、百合根の揚げ物、のどぐろと和牛のステーキ、13,000円のコース (2024年)、おでんの日も、初めての客も歓迎。',
      confidence: 'medium', sources: [SITE, SITE + 'course/', SITE + 'menu/', SITE + 'drink/', SITE + 'info/', TB, R + 'B455924651/', R + 'B486058165/', R + 'B492039185/', R + 'B498946994/', R + 'B499322632/', R + 'B509235519/', R + 'B524810814/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter ordering by conversation; lunch needs booking the day before; 10% service.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町南側570-125',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003327, 135.775325); cross-checked: GSI 京都府京都市東山区祇園町南側570番地 (lot) 123m (a very large lot); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE + 'course/', SITE + 'menu/'],
    price_note: 'Course prices from the official site (November 2026), tax included, service extra.', last_checked: TODAY, items: [
      it('おまかせ京会席 8品前後', '', 'Omakase Kyoto kaiseki, about 8 dishes', '¥16,500', 'Courses', 'ask', 'no', 'Service extra.', 'kaiseki8'),
      it('おまかせ京会席 9品前後', '', 'Omakase Kyoto kaiseki, about 9 dishes', '¥19,800', 'Courses', 'ask', 'no', 'Service extra.', 'kaiseki9'),
      it('おまかせ京会席 10品前後', '', 'Omakase Kyoto kaiseki, about 10 dishes', '¥22,000', 'Courses', 'ask', 'no', 'Service extra.', 'kaiseki10'),
      it('ランチ コース', '', 'Lunch course (two or more, book the day before)', '¥14,300', 'Courses', 'ask', 'no', 'From; service extra.', 'lunch'),
      it('すっぽん鍋', '', 'Suppon hot pot', '', 'À la carte', 'ask', 'no', 'Shimabara suppon.', 'suppon'),
    ] }, {
    cuisine: '1979年から祇園のカウンター割烹。大将と話しながら一品料理を、またはお座敷で京会席のコースを (公式サイト)・おまかせ京会席は8品前後16,500円、9品前後19,800円、10品前後22,000円、ランチのコースは14,300円から (税込、サ別、公式サイト)・5〜7種の天然鮮魚の御造り、ぐじ、長年の名物のすっぽん鍋、ふなずし、自家製からすみ、くじらベーコン、ふぐ白子焼 (公式サイト)・松茸と鰻の土瓶蒸し、40分焼く子持ち鮎、鯖寿司 (2026年10月)、クリームコロッケ、百合根の揚げ物 (2024〜2025年)・ソムリエが選ぶ30〜50種のワイン (リストなし)、日本酒と焼酎 (公式サイト)',
    neighborhood: '祇園、四条の南、花見小路の近く',
    gf_detail: '要確認。出汁と醤油の割烹と京会席。天ぷらやクリームコロッケも。アレルギーは予約時に伝える (食べログ、公式サイト)。',
    vegan_detail: 'ヴィーガン不可。魚が中心で、すっぽんや出汁も使う割烹 (公式サイト)。',
    notes: '[割烹・祇園の南、1979年からの2代目のカウンター] 祇園で生まれ育った姉弟が大将・女将とともにもてなす祇園の割烹。L字のカウンターで話しながら、天然魚の御造り、ぐじ、すっぽん鍋、ふなずしを、ワインはソムリエの姉が選ぶ。京会席は16,500円から、日曜休み。',
  });
}

// ================================================================ 舞扇
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26018781/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '23:00']);
  put({
    id: 'kyoto_maisen_gion_shinmonzen', name: '舞扇 (Maisen)', category: 'OMNI',
    lat: 35.00621358787342, lng: 135.77440965036442, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kappo courses with fugu, hamo shabu-shabu, crab and beef hot pots, zosui to finish; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fugu, hamo, crab and beef courses (reviews).',
    hours_raw: '17:30–23:00 Monday–Saturday; closed Sunday (Tabelog). Reservations taken (Tabelog). Cards (JCB, AMEX) accepted; no e-money or QR (Tabelog). Counter, tatami and private rooms; non-smoking throughout (Tabelog; December 2023). A renovated machiya down a narrow alley off Shinmonzen, past Tatsumi Shrine; look for the noren and sign (Tabelog; 2023–2024 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion Shinmonzen, near Tatsumi Shrine',
    cuisine: 'Kappo courses in a Gion machiya (reviews) · winter fugu courses and crab (December 2023; March 2024; January 2026) · summer hamo shabu-shabu (2024; July 2025) · thick-cut beef shabu-shabu and steak in the hot pot; zosui to finish (2023) · about ¥20,000–40,000 a head (Tabelog reviews)',
    website: null, gmaps: gm('舞扇 祇園 新門前'), menu_url: TB,
    notes: "[Kappo · Gion Shinmonzen, machiya down an alley] A renovated machiya at the end of a narrow Gion alley serving seasonal courses — fugu and crab in winter, hamo shabu-shabu in summer — with counter seats and private tatami rooms. Book ahead; closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Chef not named'], origin: null,
      background: 'Reviewers (2004–2026) describe a kappo in a renovated Gion machiya reached through a narrow alley, with a clean, calm dining room, a counter facing the kitchen and private rooms; a January 2026 guest heard it has been used for film shoots.',
      philosophy: null,
      specialty: 'Seasonal fugu and hamo courses.',
      anecdotes: [
        { text: 'An August 2023 family party of seven found the steak added to the hot pot the surprise of the night.', source: R + 'B469404790/' },
        { text: 'A March 2024 group of colleagues had the fugu course and planned a summer return for hamo shabu-shabu.', source: R + 'B481153236/' },
        { text: 'A January 2026 party in a private room had crab and fugu.', source: R + 'B476216660/' },
      ],
      japanese_sources_summary: '食べログ: 舞扇、日本料理、京都市東山区新門前通大和大路東入西之町232-2、月〜土 17:30〜23:00、日曜定休、予約可、カード可 (JCB、AMEX)、電子マネー・QR決済不可、個室あり、カウンター・座敷、隠れ家、一軒家。口コミ (2004〜2026年、英語): 細い路地の奥の町家を改装した割烹、辰巳神社の近く、冬はふぐのコースと蟹、夏は鱧しゃぶ、厚切りの牛しゃぶ、鍋にステーキ、締めの雑炊、全面禁煙、個室、撮影に使われたことも、1人20,000〜40,000円ほど。',
      confidence: 'low', sources: [TB, R + 'B469404790/', R + 'B474587013/', R + 'B476216660/', R + 'B481153236/', R + 'B509825263/'] },
    cultural_comfort: { level: 'japanese', note: 'Book ahead; hard to find down an alley.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区新門前通大和大路東入西之町232-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through January 2026.' },
    pin_source: `Tabelog ${TB} (35.006214, 135.774410); cross-checked: GSI 京都府京都市東山区西之町232番地 (lot) 58m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No published prices; Tabelog reviews report ¥20,000–40,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Fugu course (winter)', '', 'Courses', 'ask', 'no', '', 'fugu'),
      it('', '', 'Hamo shabu-shabu course (summer)', '', 'Courses', 'ask', 'no', '', 'hamo'),
    ] }, {
    cuisine: '祇園の町家の割烹のコース (口コミ)・冬はふぐのコースと蟹 (2023年12月、2024年3月、2026年1月)・夏は鱧しゃぶ (2024年、2025年7月)・厚切りの牛しゃぶ、鍋にステーキ、締めの雑炊 (2023年)・1人20,000〜40,000円ほど (食べログの口コミ)',
    neighborhood: '祇園新門前、辰巳神社の近く',
    gf_detail: '要確認。ふぐ、鱧しゃぶ、蟹、牛の鍋のコース、締めの雑炊。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。ふぐ、鱧、蟹、牛のコース (口コミ)。',
    notes: '[割烹・祇園新門前、路地の奥の町家] 細い路地の奥の町家を改装した割烹。冬はふぐと蟹、夏は鱧しゃぶの季節のコースを、カウンターと座敷の個室で。予約を、日曜休み。',
  });
}

save();
