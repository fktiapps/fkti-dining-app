// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 55.
//   + 大衆酒場平和 Taishu Sakaba Heiwa (Showa-style meat tavern run by a former sumo wrestler, opened July 2026; rest)
//   + THE GATE HOTEL 京都高瀬川 Lobby Lounge & Bar (hotel lounge with Higashiyama views; hotel-own; rest)
//   + こがら食堂と夜酒場 Kogara Shokudo to Yoru Sakaba (rosé tonkatsu set meals by day, tavern by night; rest)
//   + 祇園饅頭 Gion Manju (takeaway wagashi shop beside Minami-za, founded 1819 per a review; rest)
//   Rest list (mod 6 = 1) after batch 54, nearest-first; no skips this time.
//   Same-name check, same brand or operator only: 平和 — one. THE GATE HOTEL lounge — one in our crawls; a hotel-own lounge
//   of THE GATE HOTEL Kyoto Takasegawa by HULIC (drafted, as hotel restaurants are). こがら — one; こがらや (Osaka) is a
//   different name with no link found. The operator 株式会社UEiQ (press release, opened 2026-11-07) runs a few Kyoto
//   restaurants of different concepts per December 2025 reviews — small group, drafted. 祇園饅頭 — one. None is in
//   data/kyoto.json by name or address (備前島町309-6 — じゃまん and もつ田 in data are at 309-1; 備前島町310-2; 富永町354 —
//   ja!rêve in data is at 354-2, a different shop; 四条通大和大路西入ル).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-55');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 大衆酒場平和 Taishu Sakaba Heiwa
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26044939/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_taishu_sakaba_heiwa', name: '大衆酒場平和 (Taishu Sakaba Heiwa)', category: 'OMNI',
    lat: 35.00612970787197, lng: 135.76971900036685, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: sauced and marinated meats, mentaiko karaage, garlic bean-sprout namul; strong seasonings throughout (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a meat tavern — tongue, horumon, wagyu, pig\'s feet (2026 reviews).',
    hours_raw: 'Daily 17:00–24:00; last orders food 23:30, drinks 23:45 (Tabelog). Reservations accepted and advised — full at 21:00 on a Saturday (Tabelog; September 2026). Cards, e-money and QR (Tabelog). 34 seats: 5 at the counter, 29 at tables, packed close together (Tabelog; August 2026). Smoking allowed (Tabelog; July–September 2026). No draft beer — bottled Sapporo Lager Akaboshi instead (July 2026). Off Takoyakushi east of Kawaramachi; 3 min walk from Kawaramachi Stn (Tabelog). Opened 1 July 2026 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Takoyakushi east of Kawaramachi — 3 min walk from Kawaramachi Stn',
    cuisine: 'Showa-style meat tavern with sumo and pro-wrestling memorabilia, opened July 2026 (Tabelog; 2026 reviews) · fresh heart sashimi, omasum, yukhoe; never-frozen thick-cut tongue in special, premium and regular grades; A5 wagyu strip loin from three slices; a black wagyu tomahawk ¥9,999 — grilled for you or by you (July–September 2026) · mentaiko karaage ¥699, slow-cooked pig\'s feet, kimchi, garlic bean-sprout namul, bone soup, big onigiri, clay-pot rice (July–September 2026) · bottled Sapporo Lager Akaboshi ¥299 (July–September 2026) · about ¥4,000–8,000 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('大衆酒場平和 河原町'), menu_url: null,
    notes: '[Meat tavern · Kawaramachi-Takoyakushi] A lively new Showa-retro meat tavern run by a former sumo wrestler, per reviewers: green benches, sumo and wrestling posters, ¥299 bottles of Sapporo Akaboshi, and fresh heart and omasum sashimi, thick tongue and A5 wagyu, grilled for you. Seasonings are strong and tables tight; smoking is allowed. Book at weekends; till midnight.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; a former sumo wrestler, per reviews)', 'Staff'], origin: null,
      background: 'Per reviews (July–September 2026): a meat tavern opened in July 2026 by an owner described as a former sumo wrestler; a July 2026 reviewer writes that the owner went independent from the Tenmaya Group and chose a "meat tavern" over a yakiniku restaurant. Tabelog gives the opening date as 1 July 2026.',
      philosophy: 'A meat tavern rather than a yakiniku restaurant (July 2026 review).', specialty: 'Thick-cut tongue; heart sashimi.',
      anecdotes: [
        { text: 'A September 2026 diner who doubted a ¥9,999 black wagyu tomahawk could pay took a photo with the owner, who joked, "I feel like a sumo wrestler too!".', source: R + 'B535500898/' },
        { text: 'A July 2026 reviewer was surprised to find the mentaiko karaage looked like chicken-wing gyoza.', source: R + 'B532241019/' },
        { text: 'An August 2026 pair found many dishes seasoned alike and the tables close together — lively, but a lot for those who like quiet.', source: R + 'B534671837/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・焼肉・肉料理、中京区蛸薬師通河原町東入備前島町309-6、京都河原町駅から徒歩3分、毎日 17:00〜24:00 (L.O.フード23:30、ドリンク23:45)、予約可、カード・電子マネー・QR 可、34席 (カウンター5、テーブル29)、喫煙可、2026年7月1日開店。口コミ (2026年7月〜9月、英語): 元力士の店主、Tenmaya Group から独立との声、昭和レトロ、緑のベンチ、プロレスや相撲のグッズ、生ビールなし、サッポロラガー赤星の瓶299円、ハツ刺し、センマイ、ユッケ、冷凍しない厚切りタン (特上・上・並)、A5和牛のロースを3枚から、黒毛和牛のトマホーク9,999円、焼いて出すか自分で焼く、明太子唐揚げ699円、豚足、キムチ、にんにくのもやしナムル、骨のスープ、大きなおにぎり、土鍋ご飯、味付けが似ている・席が近いとの声 (2026年8月)、喫煙可が残念との声 (2026年9月)、土曜21時は満席。',
      confidence: 'medium', sources: [TB, R + 'B531772620/', R + 'B532241019/', R + 'B532675645/', R + 'B534045338/', R + 'B534615110/', R + 'B534671837/', R + 'B535025371/', R + 'B535454172/', R + 'B535500898/', R + 'B535690152/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Lively and close-packed; smoking allowed; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区蛸薬師通河原町東入備前島町309-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; opened July 2026; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.006130, 135.769719); cross-checked: GSI 京都府京都市中京区備前島町309番地 (lot) 26 m; kyoto_motsuden_kawaramachi (309-1) is 10.4 m away and kyoto_horumon_jaman_kawaramachi 14.4 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532241019/', R + 'B535500898/', R + 'B532675645/'],
    price_note: 'Prices from July and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Mentaiko karaage', '¥699', 'Food', 'no', 'no', 'July 2026.', 'mentai_karaage'),
      it('', '', 'Black wagyu tomahawk steak', '¥9,999', 'Meat', 'ask', 'no', 'September 2026.', 'tomahawk'),
      it('', '', 'Sapporo Lager Akaboshi (bottle)', '¥299', 'Drinks', 'no', 'vegan', 'July 2026.', 'akaboshi'),
    ] }, {
    cuisine: '相撲やプロレスのグッズが並ぶ昭和風の肉の酒場、2026年7月開店 (食べログ、2026年の口コミ)・新鮮なハツ刺し、センマイ、ユッケ、冷凍しない厚切りタンを特上・上・並で、A5和牛のロースを3枚から、黒毛和牛のトマホーク9,999円、焼いて出すか自分で焼く (2026年7〜9月)・明太子唐揚げ699円、じっくり煮た豚足、キムチ、にんにくのもやしナムル、骨のスープ、大きなおにぎり、土鍋ご飯 (2026年7〜9月)・サッポロラガー赤星の瓶299円 (2026年7〜9月)・4,000〜8,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '河原町の東の蛸薬師通。河原町駅から徒歩3分',
    gf_detail: 'グルテンフリー不可。たれや味付けの肉、明太子唐揚げ、にんにくのもやしナムル。全体に味が濃い (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。タン、ホルモン、和牛、豚足の肉の酒場 (2026年の口コミ)。',
    notes: '[肉の酒場・河原町蛸薬師] 口コミによれば元力士が営む、にぎやかな新しい昭和レトロの肉の酒場。緑のベンチ、相撲やプロレスのポスター、299円のサッポロ赤星の瓶、新鮮なハツ刺しやセンマイ、厚切りタン、A5和牛を焼いて出してくれる。味は濃いめで席は近く、喫煙可。週末は予約を、深夜0時まで。',
  });
}

// ================================================================ THE GATE HOTEL 京都高瀬川 Lobby Lounge & Bar
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26038873/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://www.gate-hotel.jp/kyoto/rb/lobby.html';
  const H = day(['06:30', '22:30']);
  put({
    id: 'kyoto_gate_hotel_lobby_lounge', name: 'THE GATE HOTEL 京都高瀬川 Lobby Lounge & Bar', category: 'OMNI',
    lat: 35.00597926787227, lng: 135.7703689703649, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Cocktails, wine, whisky and Kyoto craft gin; snacks such as raw chocolate, fries and Kyoto pickles; a clubhouse sandwich; no gluten information (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Drinks and light snacks; no ingredient information (2025–2026 reviews).',
    hours_raw: 'Daily 6:30–22:30 per Tabelog; irregular closing days; hours may change (Tabelog). Reservations accepted (Tabelog). Cards, e-money and QR; non-smoking (Tabelog). Counter, sofas and a terrace on the top floor of the hotel, with views of Higashiyama, the Kamo River and Minami-za (2025–2026 reviews). In the former Rissei Elementary School (1928), now Rissei Garden HULIC Kyoto, off Takoyakushi east of Kawaramachi; 3 min walk from Hankyu Kawaramachi Stn (Tabelog; April 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Takoyakushi east of Kawaramachi — hotel top floor, by the Takase River',
    cuisine: 'Hotel lobby lounge and bar for coffee, daytime drinks and night cocktails with a wide view (2025–2026 reviews) · cocktails such as Viva La Vida with passion fruit; Kyoto craft gins; wine and whisky, e.g. Yamazaki (March–July 2026) · snacks: raw chocolate, fries, Kyoto pickles; a clubhouse sandwich (March and August 2026) · about ¥1,000–4,000 (Tabelog; 2025–2026 reviews)',
    website: WEB, gmaps: gm('THE GATE HOTEL 京都高瀬川 ロビーラウンジ'), menu_url: null,
    notes: '[Hotel lounge · Kawaramachi, top-floor views] The lobby lounge and bar on the top floor of THE GATE HOTEL Kyoto Takasegawa, in a converted 1928 school: sink into a sofa or the terrace for wide views over Higashiyama, the Kamo River and Minami-za, with Kyoto craft gin, cocktails, wine or an afternoon coffee and clubhouse sandwich. Quiet by day, reasonable for a hotel. Open from early morning to 22:30.',
    chef_bio: { chef_name: null, roles: ['Hotel bar and lounge staff (unnamed)'], origin: null,
      background: 'Per the hotel site and reviews: the lobby lounge and bar of THE GATE HOTEL Kyoto Takasegawa by HULIC, on the top floor of a building in the redeveloped former Kyoto City Rissei Elementary School (completed 1928, per an April 2026 reviewer), with a separate hotel restaurant alongside.',
      philosophy: null, specialty: 'Kyoto craft gin; views of Higashiyama.',
      anecdotes: [
        { text: 'An April 2026 reviewer on a tour of retro buildings noted the former Rissei Elementary School, completed in 1928, and the lounge\'s selection of Kyoto craft gin.', source: R + 'B526869117/' },
        { text: 'An August 2026 visitor sent from the fully booked restaurant to the lounge found it nearly empty and quiet on a Sunday afternoon.', source: R + 'B534895260/' },
        { text: 'A July 2026 guest stopped after dinner for Yamazaki on the rocks with the night view of Higashiyama.', source: R + 'B532470085/' },
      ],
      japanese_sources_summary: '食べログ: バー、中京区蛸薬師通河原町東入備前島町310-2 ゲートホテルKYOTO、阪急四条河原町から294m、毎日 6:30〜22:30、不定休、営業時間は変わることあり、予約可、カード・電子マネー・QR 可、禁煙、景色・夜景がよい。口コミ (2025年11月〜2026年9月、英語): 旧 Rissei 小学校 (1928年) を生かした Rissei Garden HULIC Kyoto のホテル最上階、東山・鴨川・南座の眺め、ソファ、テラス、カウンター、カクテル (Viva La Vida)、京都のクラフトジン、ワイン、ウイスキー (Yamazaki)、生チョコ、フライドポテト、京漬物、クラブハウスサンド、昼は静か、ホテルの値段としては手ごろ。',
      confidence: 'medium', sources: [TB, WEB, R + 'B517460201/', R + 'B518439327/', R + 'B521047171/', R + 'B525401067/', R + 'B526869117/', R + 'B532192793/', R + 'B532470085/', R + 'B532490737/', R + 'B534441414/', R + 'B534895260/'] },
    cultural_comfort: { level: 'english', note: 'Hotel lounge; cards, IC and QR; non-smoking.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区蛸薬師通河原町東入備前島町310-2 ゲートホテルKYOTO',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and hotel site; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.005979, 135.770369); cross-checked: GSI 京都府京都市中京区備前島町310番地 (lot) 23 m; nearest Kyoto record 34 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525401067/', R + 'B534441414/'],
    price_note: 'Item names from March and August 2026 reviews; no prices given.', last_checked: TODAY, items: [
      it('', '', 'Viva La Vida (passion-fruit cocktail)', '', 'Cocktails', 'ask', 'ask', 'March 2026.', 'viva_la_vida'),
      it('', '', 'Clubhouse sandwich', '', 'Food', 'no', 'no', 'August 2026.', 'clubhouse'),
    ] }, {
    cuisine: 'コーヒー、昼飲み、夜のカクテルを広い眺めとともに楽しむホテルのロビーラウンジ兼バー (2025〜2026年の口コミ)・パッションフルーツの Viva La Vida などのカクテル、京都のクラフトジン、ワイン、Yamazaki などのウイスキー (2026年3〜7月)・つまみ: 生チョコ、フライドポテト、京漬物、クラブハウスサンド (2026年3月・8月)・1,000〜4,000円ほど (食べログ、2025〜2026年の口コミ)',
    neighborhood: '河原町の東の蛸薬師通、ホテル最上階。高瀬川のそば',
    gf_detail: '要確認。カクテル、ワイン、ウイスキー、京都のクラフトジン。生チョコ、フライドポテト、京漬物などのつまみ、クラブハウスサンド。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。飲み物と軽いつまみ。材料の情報はない (2025〜2026年の口コミ)。',
    notes: '[ホテルのラウンジ・河原町、最上階の眺め] 1928年の小学校を生かした THE GATE HOTEL 京都高瀬川の最上階のロビーラウンジ兼バー。ソファやテラスで東山、鴨川、南座を見渡しながら、京都のクラフトジン、カクテル、ワイン、昼はコーヒーやクラブハウスサンドを。昼は静かで、ホテルとしては手ごろ。早朝から22時半まで。',
  });
}

// ================================================================ こがら食堂と夜酒場 Kogara
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26044249/'; const R = TB + 'dtlrvwlst/'; const PR = 'https://san-tatsu.jp/pressrelease/492970/';
  const A = day(['11:00', '14:30'], ['17:30', '21:30']); const B = day(['11:00', '14:30'], ['17:30', '22:00']);
  put({
    id: 'kyoto_kogara_shokudo_yoru_sakaba', name: 'こがら食堂と夜酒場 (Kogara Shokudo to Yoru Sakaba)', category: 'OMNI',
    lat: 35.0007556501065, lng: 135.7683436765516, cuisine_type: 'katsu',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: breaded tonkatsu and karaage (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork cutlet and fried chicken set meals, served with bonito and kombu dashi (2025–2026 reviews).',
    hours_raw: 'Lunch daily 11:00–14:30; dinner 17:30–21:30, to 22:00 on Thursday and Saturday (Tabelog); the opening press release gave dinner to 22:30 on Friday, Saturday and holiday eves — hours may change (Tabelog; press release). Reservations accepted (Tabelog). Cashless only — cards, e-money, QR and Apple Pay; no cash (Tabelog). Counter and about two tables; non-smoking; self-service water; order by QR code (Tabelog; December 2025 and March 2026). Down a passage beside an apartment building, near ja!rêve, on Kawaramachi south of Bukkoji; 4 min walk from Hankyu Kawaramachi Stn (Tabelog; December 2025). Opened 24 December 2025 (Tabelog; press release).',
    hours: { 0: A, 1: A, 2: A, 3: B, 4: A, 5: B, 6: A }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi south of Bukkoji — 4 min walk from Kawaramachi Stn',
    cuisine: 'Set-meal shop by day and tavern by night, specialising in rosé tonkatsu — pork marinated with red wine and fried slowly at low temperature, eaten with salt, yuzu grated daikon or a pour of bonito-kombu dashi (press release; 2025–2026 reviews) · rosé tonkatsu set ¥1,380; Kuro Kirishima Sanroku pork 150 g ¥1,980, 300 g ¥2,550; Kyoto karaage set of 5 with Kujo negi sauce ¥1,430; half-and-half set ¥1,480; rosé katsu bowl with onsen egg (December 2025–February 2026) · sets with white and brown rice, cabbage, chilled tofu, pickles and miso soup (March 2026) · about ¥1,000–3,000 (Tabelog; 2025–2026 reviews)',
    website: PR, gmaps: gm('こがら食堂と夜酒場'), menu_url: null,
    notes: '[Tonkatsu · Kawaramachi-Bukkoji, hidden down a passage] A small new set-meal shop tucked behind an apartment block, serving pink, low-temperature rosé tonkatsu with salt or a pour of dashi instead of sauce, plus crisp karaage with Kujo negi, over a white-and-brown rice blend — from ¥1,380 at lunch, with drinks at night. Cashless only.',
    chef_bio: { chef_name: null, roles: ['Kitchen and counter staff (unnamed)'], origin: null,
      background: 'Per the opening press release: run by 株式会社UEiQ, a restaurant operator whose fire control was honed making chashu for ramen; opened 24 December 2025 as a set-meal shop for locals by day and a tavern by night; the name comes from 小柄 (こがら, compact, small box) and a wish to stay humble. December 2025 reviewers say UEiQ opened several Kyoto restaurants that year.',
      philosophy: 'Compact and humble — 小柄 (press release).', specialty: 'Rosé tonkatsu with dashi.',
      anecdotes: [
        { text: 'A December 2025 visitor ran into a manager recognised from another of the operator\'s restaurants, and preferred the crisp karaage to the tonkatsu.', source: R + 'B519527995/' },
        { text: 'A February 2026 diner ordered the smallest 150 g Kuro Kirishima Sanroku cutlet and was startled by its size, and by being told to eat it with dashi.', source: R + 'B522076224/' },
        { text: 'A March 2026 weekday-lunch guest found the place empty after 13:00, ordered by QR code and had the set in about seven minutes.', source: R + 'B523830622/' },
      ],
      japanese_sources_summary: '食べログ: とんかつ、下京区河原町通仏光寺下ル富永町354、阪急河原町駅から徒歩4分、昼 毎日 11:00〜14:30、夜 17:30〜21:30 (木・土は22:00まで)、予約可、現金不可 (カード・電子マネー・QR・Apple Pay)、禁煙、カウンター、2025年12月24日開店。プレスリリース: 株式会社UEiQ、ラーメンのチャーシュー作りで培った火入れ、昼は定食屋・夜は酒場、ロゼとんかつ御膳1,380円、からあげ御膳 (5個、九条ねぎだれ) 1,430円、店名は「小柄 (こがら) ＝小箱・コンパクト」と謙虚さから。口コミ (2025年12月〜2026年3月、英語): マンションの奥の通路、赤ワインに漬けて低温で揚げたロゼとんかつ、塩・柚子おろし・かつおと昆布のだしで、Kuro Kirishima Sanroku の豚150g 1,980円・300g 2,550円、合い盛り1,480円、温玉のロゼかつ丼、白米と玄米のブレンド、キャベツ、冷奴、漬物、味噌汁、水はセルフ、QR注文。',
      confidence: 'medium', sources: [TB, PR, R + 'B519527995/', R + 'B519784675/', R + 'B519805423/', R + 'B521002010/', R + 'B521932327/', R + 'B522076224/', R + 'B523441136/', R + 'B523830622/', R + 'B524619747/', R + 'B525371915/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR ordering; cashless only; self-service water.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区河原町通仏光寺下ル富永町354',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and opening press release; reviews through March 2026.' },
    pin_source: `Tabelog ${TB} (35.000756, 135.768344); cross-checked: GSI 京都府京都市下京区富永町354番地 (lot) 57 m; kyoto_ja_reve_dessert_wine (354-2) is 35 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [PR, R + 'B522076224/', R + 'B521932327/'],
    price_note: 'Prices from the December 2025 press release and February 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Rosé tonkatsu set', '¥1,380', 'Sets', 'no', 'no', 'Press release; March 2026.', 'rose_tonkatsu'),
      it('', '', 'Kyoto karaage set (5 pieces, Kujo negi sauce)', '¥1,430', 'Sets', 'no', 'no', 'Press release.', 'karaage'),
      it('', '', 'Kuro Kirishima Sanroku pork rosé tonkatsu set (150 g)', '¥1,980', 'Sets', 'no', 'no', 'February 2026.', 'kurokirishima_150'),
    ] }, {
    cuisine: '昼は定食、夜は酒場のロゼとんかつの店。赤ワインに漬けて低温でじっくり揚げた豚を、塩、柚子おろし、かつおと昆布のだしで (プレスリリース、2025〜2026年の口コミ)・ロゼとんかつ御膳1,380円、Kuro Kirishima Sanroku の豚150g 1,980円・300g 2,550円、九条ねぎだれの京からあげ5個の御膳1,430円、合い盛り1,480円、温玉のロゼかつ丼 (2025年12月〜2026年2月)・白米と玄米のご飯、キャベツ、冷奴、漬物、味噌汁付き (2026年3月)・1,000〜3,000円ほど (食べログ、2025〜2026年の口コミ)',
    neighborhood: '仏光寺の南の河原町通。河原町駅から徒歩4分',
    gf_detail: 'グルテンフリー不可。衣のとんかつと唐揚げ (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。とんかつと唐揚げの定食に、かつおと昆布のだし (2025〜2026年の口コミ)。',
    notes: '[とんかつ・河原町仏光寺、通路の奥] マンションの奥にひっそりある小さな新しい定食屋。低温で揚げたピンクのロゼとんかつを、ソースではなく塩やだしで。九条ねぎのカリッとした唐揚げも、白米と玄米のご飯で。昼は1,380円から、夜はお酒も。キャッシュレスのみ。',
  });
}

// ================================================================ 祇園饅頭 Gion Manju
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26003473/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '17:30']);
  put({
    id: 'kyoto_gion_manju_shijo', name: '祇園饅頭 (Gion Manju)', category: 'OMNI',
    lat: 35.00368814973514, lng: 135.77237429559287, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Rice-flour sweets such as shinko and minazuki, mochi and warabi mochi; no ingredient or gluten information (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Rice flour, red bean, kinako and sugar sweets look plant-based, but no ingredient information (2025–2026 reviews).',
    hours_raw: 'Daily 10:00–17:30; hours may change (Tabelog). Takeaway only — no seating (Tabelog). Cash only: no cards, e-money or QR (Tabelog). Seasonal items sell out, e.g. matcha minazuki and matcha shinko (June and September 2026). On Shijo-dori right next to Minami-za, by Keihan Gion-Shijo Stn exit 6 (Tabelog; 2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shijo-dori beside Minami-za — Gion-Shijo Stn exit 6',
    cuisine: 'Old wagashi shop, founded in 1819 per a July 2026 review, known for shinko · shinko, a chewy rice-flour sweet in nikki (cinnamon), white and matcha ¥190 (July–September 2026) · seasonal sweets: minazuki in white, Hateruma brown sugar and Uji matcha ¥230, kashiwa mochi with miso or red bean paste ¥250, sasa mochi ¥230 (May–July 2026); warabi mochi with kinako; chestnut steamed yokan (2026 reviews) · under ¥1,000 (Tabelog)',
    website: null, gmaps: gm('祇園饅頭 四条'), menu_url: null,
    notes: '[Wagashi · Shijo beside Minami-za, takeaway] A long-established sweets shop next to the Minami-za theatre, popular with theatregoers at the interval: chewy cinnamon shinko, summer minazuki in three flavours, kashiwa mochi with miso bean paste and generously dusted warabi mochi, from about ¥190. One June 2026 buyer found the white minazuki a little too sweet. Takeaway only; cash.',
    chef_bio: { chef_name: null, roles: ['Shop staff (unnamed)'], origin: null,
      background: 'Per reviews (2025–2026): a traditional wagashi shop next to Minami-za on Shijo-dori; a July 2026 reviewer gives its founding as 1819 (Bunsei 2). Known for shinko and monthly seasonal sweets.',
      philosophy: null, specialty: 'Shinko.',
      anecdotes: [
        { text: 'A July 2026 mother and daughter dropped in during the interval of a Minami-za performance for shinko at ¥190.', source: R + 'B532275501/' },
        { text: 'A June 2026 theatregoer found the matcha minazuki sold out and the white one a little too sweet.', source: R + 'B523751440/' },
        { text: 'A May 2026 regular buys the seasonal sweets on every Kawaramachi visit, and favours the kashiwa mochi with miso bean paste.', source: R + 'B517080977/' },
      ],
      japanese_sources_summary: '食べログ: 和菓子、東山区四条通大和大路西入ル、京阪祇園四条駅6番出口すぐ、毎日 10:00〜17:30、営業時間は変わることあり、予約不可、カード・電子マネー・QR 不可、イートインなし、テイクアウト。口コミ (2025年10月〜2026年10月、英語): 南座の隣、1819年 (文政2年) 創業との声、しんこ190円 (にっき・白・抹茶)、水無月230円 (白・Hateruma の黒糖・宇治抹茶)、柏餅250円 (味噌あん・こしあん)、笹餅230円、わらび餅、栗蒸し羊羹、抹茶は売り切れのことも、白の水無月は少し甘すぎたとの声 (2026年6月)。',
      confidence: 'medium', sources: [TB, R + 'B515778975/', R + 'B517080977/', R + 'B523751440/', R + 'B528890983/', R + 'B530141986/', R + 'B531562892/', R + 'B532203534/', R + 'B532275501/', R + 'B536144572/', R + 'B537251480/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Takeaway counter; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区四条通大和大路西入ル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003688, 135.772304) is 1.6 m from kyoto_matsuba_honten, so moved ~6.4 m east along Shijo to 135.772374; the address has no lot number, so loc_precise false; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532275501/', R + 'B517080977/'],
    price_note: 'Prices from May and July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Shinko (nikki, white or matcha)', '¥190', 'Wagashi', 'ask', 'ask', 'July 2026.', 'shinko'),
      it('', '', 'Minazuki (seasonal)', '¥230', 'Wagashi', 'ask', 'ask', 'May 2026.', 'minazuki'),
      it('', '', 'Kashiwa mochi (seasonal)', '¥250', 'Wagashi', 'ask', 'ask', 'May 2026.', 'kashiwa_mochi'),
    ] }, {
    cuisine: '7月の口コミでは1819年創業の、しんこで知られる和菓子の老舗・もちもちの米粉のしんこ、にっき・白・抹茶190円 (2026年7〜9月)・季節の菓子: 白・Hateruma の黒糖・宇治抹茶の水無月230円、味噌あんとこしあんの柏餅250円、笹餅230円 (2026年5〜7月)、きな粉のわらび餅、栗蒸し羊羹 (2026年の口コミ)・1,000円未満 (食べログ)',
    neighborhood: '南座の隣の四条通。祇園四条駅6番出口',
    gf_detail: '要確認。しんこや水無月などの米粉の菓子、餅、わらび餅。材料やグルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。米粉、あんこ、きな粉、砂糖の菓子で植物性に見えるが、材料の情報はない (2025〜2026年の口コミ)。',
    notes: '[和菓子・南座の隣の四条、持ち帰り] 南座の隣の和菓子の老舗で、幕間の客にも人気。もちもちのにっきのしんこ、夏の3種の水無月、味噌あんの柏餅、きな粉たっぷりのわらび餅を190円ほどから。2026年6月の客は白の水無月が少し甘すぎると感じた。持ち帰りのみ、現金。',
  });
}

save();
