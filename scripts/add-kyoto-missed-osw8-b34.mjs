// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 34.
//   + 澄吉 Sumiyoshi (Japanese-wine izakaya-bistro by Karasuma Oike, part of a small group with 両川; core list)
//   + Le Cadeau (one-man French counter-less dining room near Jingu-Marutamachi; core list)
//   + イカリヤ食堂 Ikariya Shokudo (riverside bistro in a machiya on Kiyamachi, kawadoko in summer; notable list)
//   + 焼肉牛匠 新 Yakiniku Gyusho Shin (Omi beef yakiniku in a Gion townhouse; notable list)
//   Picked 2026-11-06 after batch 33. `queue.mjs kyoto-missed next core 200`, mod 6 = 1: 26041687, 26023087, 26026909 were
//   skipped in batch 30; 澄吉 26029087, Le Cadeau 26033161. `next notable 200`: 26023579 and 26041687 skipped earlier;
//   イカリヤ食堂 26017765, 焼肉牛匠 新 26036119. Same-name check, same brand or operator only: one 澄吉 (a November 2026
//   review says it belongs to the group of 両川, which is not in data); one Le Cadeau; イカリヤ: 4 concepts in our crawls
//   (イカリヤ食堂, チンクエ イカリヤ, イカリヤ365, イカリヤベイカ京都) — under 5, and the one in data (kyo_ikariya_beika)
//   is a different concept, a rice-flour baumkuchen shop, so イカリヤ食堂 is drafted as a sister concept; one 焼肉牛匠 新.
//   None of the four is in data/kyoto.json: grep by name and address (蛸薬師町291-3, 末丸町541-25, 斎藤町138-2,
//   末吉町95-5) found none.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-34');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 澄吉 Sumiyoshi
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26029087/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '21:30']);
  put({
    id: 'kyoto_sumiyoshi_karasuma_oike', name: '澄吉 (Sumiyoshi)', category: 'OMNI',
    lat: 35.012328, lng: 135.757749, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A changing menu of skewers with wine sauces, doteyaki with demi-glace and Hatcho miso, gnocchi, spring rolls and baguette; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: liver, skirt steak, salsiccia, mussels, beef tendon and omelette dominate the menu (2025–2026 reviews).',
    hours_raw: 'Tuesday–Sunday 17:00–21:30 (food last order 21:00); closed Monday and some irregular days (Tabelog). Reservations accepted, same day if seats are free (Tabelog); a solo walk-in may find it full (January 2026). A ¥500 otoshi of salad (Tabelog original 付き出し（サラダ）500円でご提供させていただきます。). 12 seats; private hire up to 20; non-smoking inside, smoke outside (Tabelog). Cards, e-money and QR (Tabelog). On Muromachi-Oshikoji, northwest of Karasuma Oike; 5 min walk from Karasuma Oike Stn exit 2 (Tabelog; December 2025).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Northwest of Karasuma Oike — 5 min walk from Karasuma Oike Stn',
    cuisine: 'Izakaya-bistro of Japanese wine, with the owner matching bottles to the dishes (December 2025) · signature doteyaki made with demi-glace and Hatcho miso, potato gnocchi (December 2025) · skewers with a red- or white-wine sauce (April 2025); assorted appetisers incl. a new, very smooth liver, Korean snacks and kimchi, mussels, a large omelette, outside skirt steak, salsiccia (May–September 2026); beef-tendon stew, spring rolls, mountain jellyfish, braised dishes from the sister restaurant 両川 (May and November 2026) · Japanese wines such as Zao Woody Farm Petit Manseng; sake, whisky, makgeolli, limoncello soda (2026 reviews) · about ¥4,000–8,000 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('澄吉 京都 烏丸御池 ワイン'), menu_url: null,
    notes: '[Japanese wine izakaya · Karasuma Oike northwest] A twelve-seat, homely wine izakaya devoted to Japanese wines, poured with pairing tips from the owner: doteyaki in demi-glace and Hatcho miso, gnocchi, skewers with wine sauces, kimchi and Korean snacks, skirt steak and dishes sent over from sister shops nearby. Guests stay for hours and come back the next night. A ¥500 salad otoshi. Evenings; closed Monday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), who selects Japanese wines and suggests pairings', 'Part of a small group with the restaurant 両川 (November 2026 review)'], origin: null,
      background: 'Per Tabelog: an izakaya, pasta and wine bar by Karasuma Oike; registered as an official listing by the shop. A January 2026 reviewer writes that the restaurant paused after the previous owner died and has been revived by the current owner, with a creative use of spices; reviewers say dishes and drinks come from sister shops nearby (January 2026), and that it belongs to the 両川 group (November 2026).',
      philosophy: 'Japanese wine matched to the food (December 2025 review).', specialty: 'Doteyaki with demi-glace and Hatcho miso; Japanese wine.',
      anecdotes: [
        { text: 'A September 2026 guest, remembered from an earlier event visit down to the outfit worn, meant to stop for a quick bite and stayed six hours.', source: R + 'B535216236/' },
        { text: 'A January 2026 solo traveller, turned away elsewhere, phoned around until a counter seat came free here, and ended the night with whisky at the regulars\' bar nearby.', source: R + 'B521806074/' },
        { text: 'A January 2026 visitor found a 2018 Petit Manseng from Zao Woody Farm here, and came back the following night.', source: R + 'B521857700/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・パスタ・ワインバー、中京区蛸薬師町291-3、烏丸御池駅2番出口から徒歩5分、二条城前駅2番出口から徒歩10分、火〜日 17:00〜21:30 (料理L.O.21:00)、月曜定休 (ほか不定休)、予約可 (当日も空きがあれば)、付き出し (サラダ) 500円、12席、貸切20名まで、店内禁煙 (外で喫煙)、カード・電子マネー・QR 可。口コミ (2022年8月〜2026年11月、英語): 日本ワインの店、店主がワインを合わせる、名物のどて焼き (デミグラスと八丁味噌)、じゃがいものニョッキ、赤か白のワインソースの串、前菜の盛り合わせ (レバー)、韓国のつまみとキムチ、ムール貝、オムレツ、ハラミ、サルシッチャ、牛すじの煮込み、春巻き、山くらげ、両川の煮込み、Zao Woody Farm の Petit Manseng、日本酒、ウイスキー、マッコリ、前の店主が亡くなったあと今の店主が再開 (2026年1月の口コミ)、両川のグループ。',
      confidence: 'medium', sources: [TB, R + 'B345138614/', R + 'B458191059/', R + 'B479007063/', R + 'B504861477/', R + 'B518432077/', R + 'B521806074/', R + 'B521857700/', R + 'B527469172/', R + 'B535216236/', R + 'B538465621/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ask the owner for wine pairings; ¥500 salad otoshi; book ahead; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区蛸薬師町291-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; reviews through November 2026.' },
    pin_source: `Tabelog ${TB} (35.012328, 135.757749); cross-checked: GSI 京都府京都市中京区蛸薬師町291番地 (lot) 64 m; nearest Kyoto record 46 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No item prices read; ¥500 salad otoshi; about ¥4,000–8,000 (Tabelog; 2026 reviews).', last_checked: TODAY, items: [
      it('', '', 'Doteyaki with demi-glace and Hatcho miso', '', 'Signature', 'ask', 'no', 'December 2025.', 'doteyaki'),
      it('', '', 'Salad otoshi', '¥500', 'Otoshi', 'ask', 'ask', 'Tabelog.', 'otoshi'),
    ] }, {
    cuisine: '日本ワインの居酒屋ビストロ、店主が料理に合うワインを選ぶ (2025年12月)・名物のデミグラスと八丁味噌のどて焼き、じゃがいものニョッキ (2025年12月)・赤か白のワインソースの串 (2025年4月)、なめらかなレバーの入った前菜の盛り合わせ、韓国のつまみとキムチ、ムール貝、大きなオムレツ、ハラミ、サルシッチャ (2026年5〜9月)、牛すじの煮込み、春巻き、山くらげ、姉妹店の両川の煮込み (2026年5月・11月)・Zao Woody Farm の Petit Mansengなどの日本ワイン、日本酒、ウイスキー、マッコリ、リモンチェッロソーダ (2026年の口コミ)・4,000〜8,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '烏丸御池の北西。烏丸御池駅から徒歩5分',
    gf_detail: '要確認。ワインソースの串、デミグラスと八丁味噌のどて焼き、ニョッキ、春巻き、バゲットなど替わるメニュー。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。レバー、ハラミ、サルシッチャ、ムール貝、牛すじ、オムレツが中心 (2025〜2026年の口コミ)。',
    notes: '[日本ワインの居酒屋・烏丸御池の北西] 日本ワインに力を入れる12席の家庭的なワイン居酒屋。店主が料理に合わせて注ぐ: デミグラスと八丁味噌のどて焼き、ニョッキ、ワインソースの串、キムチや韓国のつまみ、ハラミ、近くの姉妹店から届く料理も。何時間も居座り、翌晩また来る客も。付き出しのサラダ500円。夜のみ、月曜休み。',
  });
}

// ================================================================ Le Cadeau
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26033161/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_le_cadeau_marutamachi', name: 'Le Cadeau', category: 'OMNI',
    lat: 35.016546, lng: 135.770244, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking: the restaurant asks to be told of allergies in advance and may not manage on the day (Tabelog); a 2025 guest found allergy requests well handled. Courses include pies, pound cake and bread (2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: set courses of venison, pork, wagyu, fish and shellfish, with dairy desserts (2025–2026 reviews).',
    hours_raw: 'Friday–Wednesday lunch 12:00–15:00 (last order 13:00) and dinner 18:00–22:00 (last order 20:00); a late-night dessert course 0:00–1:30; closed Thursday (Tabelog). Reservation only; tell the restaurant about allergies when booking (Tabelog). Courses: lunch ¥7,500 or ¥12,100, dinner ¥12,100, late-night dessert course ¥5,500, tax included, plus a 10% service charge (Tabelog original サービス料10％). 12 table seats; private hire up to 20; non-smoking (Tabelog). Cards; no e-money or QR (Tabelog). 1F of the ミックマック building; 5 min walk from Jingu-Marutamachi Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'West of Jingu-Marutamachi — 5 min walk from Jingu-Marutamachi Stn',
    cuisine: 'Creative French set courses changing with the seasons, by an owner-chef (Tabelog; 2025–2026 reviews) · lunch ¥7,500 or ¥12,100, dinner ¥12,100, late-night dessert course ¥5,500, plus 10% service (Tabelog) · e.g. amuse-bouches of venison blood with apple-cinnamon pie, or scrambled egg under truffle; mackerel, whelk and gribiche; ayu, clams and bouillabaisse; Basque pork with purple mustard; coconut, pineapple and lemongrass (February–July 2025) · Ezo venison, a tom yum-style seafood broth, eggplant and chicken mille-feuille, pan-seared Spanish mackerel, wagyu with cheek (+¥1,500) (December 2025–September 2026) · a pound cake to finish, as the name "the gift" suggests; birthday plates (2025–2026 reviews)',
    website: null, gmaps: gm('Le Cadeau フレンチ 京都 末丸町'), menu_url: null,
    notes: '[French · near Jingu-Marutamachi, one chef, twelve seats] A calm twelve-seat French dining room where the owner-chef cooks and serves every course alone, with uncanny timing: seasonal, inventive plates such as venison-blood pie, ayu with bouillabaisse, Ezo venison or wagyu with cheek, ending with the house pound cake — and a late-night dessert course after midnight. Lunch from ¥7,500, dinner ¥12,100, plus 10% service. Reservation only; closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), who cooks and serves alone (June 2025 review)'], origin: null,
      background: 'Per Tabelog: a reservation-only French restaurant "to enjoy with all five senses", with lunch, dinner and a late-night dessert course; registered as an official listing by the shop. A June 2025 reviewer writes that the owner-chef manages everything from cooking to serving alone, with warm, attentive service; a July 2025 guest was given an explanation of the name and a photo as a parting gift.',
      philosophy: 'A French restaurant to enjoy with all five senses (Tabelog).', specialty: 'Seasonal course; pound cake.',
      anecdotes: [
        { text: 'A July 2025 couple left with an explanation of the restaurant\'s name and a photo as a gift.', source: R + 'B510006782/' },
        { text: 'A December 2025 lunch guest wondered how the timing of every dish could be so perfect.', source: R + 'B518382020/' },
        { text: 'For a daughter\'s birthday in February 2025 the staff handled allergy questions with care.', source: R + 'B501835055/' },
      ],
      japanese_sources_summary: '食べログ: フレンチ・洋食、中京区末丸町541-25 ミックマックビル 1F、京阪神宮丸太町駅から徒歩5分、地下鉄市役所前駅から徒歩10分、金〜水 12:00〜15:00 (L.O.13:00)・18:00〜22:00 (L.O.20:00)、深夜のデザートコース 0:00〜1:30、木曜定休、完全予約制、アレルギーは事前に知らせる (当日は対応できない場合あり)、ランチ7,500円・12,100円、ディナー12,100円、デザートコース5,500円 (税込、別にサービス料10%)、12席 (テーブル)、貸切20名まで、禁煙、カード可、電子マネー・QR 不可、五感で楽しむフレンチ。口コミ (2025年2月〜2026年9月、英語): オーナーシェフが一人で調理も接客も、鹿の血とりんごとシナモンのパイ、トリュフのスクランブルエッグ、鯖とつぶ貝のグリビッシュ、鮎と蛤のブイヤベース、バスク豚、ココナッツとパイナップルとレモングラス、Ezo の鹿、トムヤムクンのようなスープ、茄子と鶏のミルフィーユ、鰆のポワレ、和牛と頬肉 (+1,500円)、パウンドケーキ、誕生日のプレート、アレルギーへの丁寧な対応。',
      confidence: 'medium', sources: [TB, R + 'B501064872/', R + 'B501835055/', R + 'B502394042/', R + 'B508624409/', R + 'B510006782/', R + 'B518382020/', R + 'B525228171/', R + 'B530410935/', R + 'B533031437/', R + 'B536116767/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only; state allergies when booking; set courses; 10% service; cards.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Asks guests to state allergies when booking; may not manage same-day requests (Tabelog).', 'A February 2025 guest found allergy questions handled attentively (review).'] },
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区末丸町541-25 ミックマックビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.016546, 135.770244); cross-checked: GSI 京都府京都市中京区末丸町541番地 (lot) 11 m; nearest Kyoto record 91 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from Tabelog, tax included, plus 10% service.', last_checked: TODAY, items: [
      it('', '', 'Lunch course', '¥7,500', 'Lunch', 'ask', 'no', 'Also a ¥12,100 lunch.', 'lunch_course'),
      it('', '', 'Dinner course', '¥12,100', 'Dinner', 'ask', 'no', '', 'dinner_course'),
      it('', '', 'Late-night dessert course (0:00–1:30)', '¥5,500', 'Dessert', 'no', 'no', '', 'dessert_course'),
    ] }, {
    cuisine: 'オーナーシェフの季節で替わる創作フレンチのコース (食べログ、2025〜2026年の口コミ)・ランチ7,500円か12,100円、ディナー12,100円、深夜のデザートコース5,500円、別にサービス料10% (食べログ)・例: 鹿の血とりんごとシナモンのパイ、トリュフをのせたスクランブルエッグのアミューズ、鯖とつぶ貝のグリビッシュ、鮎と蛤のブイヤベース、バスク豚と紫のマスタード、ココナッツとパイナップルとレモングラス (2025年2〜7月)・Ezo の鹿、トムヤムクンのような魚介のスープ、茄子と鶏のミルフィーユ、鰆のポワレ、和牛と頬肉 (+1,500円) (2025年12月〜2026年9月)・店名「贈り物」にちなむ締めのパウンドケーキ、誕生日のプレート (2025〜2026年の口コミ)',
    neighborhood: '神宮丸太町の西。神宮丸太町駅から徒歩5分',
    gf_detail: '要確認。アレルギーは予約時に伝えるよう店が求めていて、当日は対応できない場合がある (食べログ)。2025年の客はアレルギーの相談に丁寧に応じてもらったと書いている。コースにパイ、パウンドケーキ、パン (2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鹿、豚、和牛、魚介のコースに、乳製品のデザート (2025〜2026年の口コミ)。',
    notes: '[フレンチ・神宮丸太町、シェフ一人の12席] 落ち着いた12席のフレンチ。オーナーシェフが一人で調理も接客もこなし、皿を出す間合いが見事。季節の創作の皿 (鹿の血のパイ、鮎とブイヤベース、Ezo の鹿や和牛と頬肉) に、締めは店のパウンドケーキ。深夜0時からのデザートコースも。ランチ7,500円から、ディナー12,100円、別にサービス料10%。完全予約制、木曜休み。',
  });
}

// ================================================================ イカリヤ食堂 Ikariya Shokudo
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26017765/'; const R = TB + 'dtlrvwlst/';
  const L = ['12:00', '14:30']; const LW = ['11:30', '14:30']; const D = ['17:30', '22:00'];
  put({
    id: 'kyoto_ikariya_shokudo_kiyamachi', name: 'イカリヤ食堂 (Ikariya Shokudo)', category: 'OMNI',
    lat: 35.001951, lng: 135.770281, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A bistro menu of soufflé-like cocotte, pasta, tarts and bread alongside charcoal-grilled confit and steak; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken confit, beef, cheese cocotte and fish dominate the courses (2026 reviews).',
    hours_raw: 'Tuesday–Thursday 12:00–14:30 and 17:30–22:00; Friday 17:30–22:00; Saturday–Sunday 11:30–14:30 and 17:30–22:00; last orders an hour before; closed Monday (open on holiday Mondays, closed the next weekday) (Tabelog). Reservations accepted and advised — book early for the riverside seats (Tabelog; August–September 2026). A dinner seat charge of ¥500 indoors or ¥800 on the kawadoko (Tabelog original ディナータイムのみ店内席500円/人 川床席800円/人). 36 table seats over two floors, plus an open-air kawadoko over the Kamo River in season; non-smoking (Tabelog; 2026 reviews). Cards, e-money and PayPay (Tabelog). A renovated machiya over 100 years old on Kiyamachi south of Donguri-bashi — look for the blue flag with an anchor; 5 min walk from Kyoto-Kawaramachi Stn (Tabelog; September 2026).',
    hours: { 1: day(L, D), 2: day(L, D), 3: day(L, D), 4: day(D), 5: day(LW, D), 6: day(LW, D) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi south of Donguri-bashi, on the Kamo River — 5 min walk from Kawaramachi Stn',
    cuisine: 'Casual French and Italian bistro of charcoal-grilled confit and wine, with riverside kawadoko dining in summer (Tabelog; 2026 reviews) · lunch course about ¥2,800 with appetisers and a choice of pasta or meat, e.g. Bolognese or charcoal-grilled chicken confit with white beans and spicy tomato; dessert +¥500 (August–September 2026) · the signature cocotte, a cheese soufflé baked in a pot (September–November 2026) · dinner: the Ikariya basic course, or à la carte such as sanma and shimeji pasta, beef outside skirt, five-nut tart (August–November 2026) · draft beer, roasted-green-tea gin and tonic, wine (November 2026) · lunch ¥2,000–4,000, dinner ¥6,000–8,000 (Tabelog)',
    website: null, gmaps: gm('イカリヤ食堂 京都 木屋町'), menu_url: null,
    notes: '[Bistro · Kiyamachi by the Kamo River, kawadoko in summer] A cosy two-floor bistro in a hundred-year-old machiya between Kiyamachi and the Kamo River, under a blue anchor flag: a cheese-soufflé cocotte, charcoal-grilled chicken confit, pasta and fair-priced courses, with river views upstairs and an open-air kawadoko in summer (expect the odd insect). Lunch from about ¥2,800; a ¥500 or ¥800 seat charge at dinner. Book ahead. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Kitchen and service staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a charcoal-grilled confit and wine bistro on Kiyamachi, with seats indoors and on the riverside kawadoko; registered as an official listing by the operator. Reviewers in 2026 note that Ikariya has several locations, and that this one is a renovated machiya over 100 years old on the Kamo River (September 2026).',
      philosophy: null, specialty: 'Cocotte; charcoal-grilled chicken confit.',
      anecdotes: [
        { text: 'An August 2026 kawadoko diner warned that insects land on the plates outdoors, and suggested indoor seats for the squeamish.', source: R + 'B534374080/' },
        { text: 'On a rainy September 2026 day the staff moved a riverside booking to a window table upstairs.', source: R + 'B536556290/' },
        { text: 'A September 2026 couple dined on the kawadoko under the moon while the next table celebrated a birthday.', source: R + 'B536297797/' },
      ],
      japanese_sources_summary: '食べログ: フレンチ・ビストロ、下京区木屋町団栗橋下ル斎藤町138-2、京阪祇園四条駅から徒歩7分、阪急京都河原町駅から徒歩5分、高瀬川沿いの木屋町通を南へ、青い旗と錨のマーク、火〜木 12:00〜14:30・17:30〜22:00、金 17:30〜22:00、土日 11:30〜14:30・17:30〜22:00、月曜定休 (祝日は営業し翌平日休み)、予約可、ディナーのみ店内席500円/人・川床席800円/人、36席、貸切可、禁煙、オープンテラス、カード・電子マネー・PayPay 可、炭火焼きのコンフィとワイン。口コミ (2026年8月〜11月、英語): 鴨川沿い、築100年以上の町家、2階の窓際の席、夏の川床、虫が来ることも、ランチのコース2,800円ほど (前菜、パスタか肉、ボロネーゼ、鶏のコンフィと白いんげん豆)、デザート+500円、名物のココット (チーズのスフレ)、イカリヤの基本のコース、秋刀魚としめじのパスタ、牛ハラミ、5種のナッツのタルト、ほうじ茶のジントニック、誕生日のプレート。',
      confidence: 'medium', sources: [TB, R + 'B534374080/', R + 'B534710180/', R + 'B534823258/', R + 'B535441345/', R + 'B535833440/', R + 'B536297797/', R + 'B536556290/', R + 'B537645365/', R + 'B538323633/', R + 'B538476208/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead (kawadoko in summer); dinner seat charge ¥500/¥800; cards, IC and PayPay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区木屋町団栗橋下ル斎藤町138-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; reviews through November 2026.' },
    pin_source: `Tabelog ${TB} (35.001951, 135.770281); cross-checked: GSI 京都府京都市下京区斎藤町138番地 (lot) 8 m; kyoto_toriyasa is 14 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536556290/', TB],
    price_note: 'Lunch price from a September 2026 review; dinner seat charges from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Lunch course (appetisers, pasta or meat)', '¥2,800', 'Lunch', 'no', 'no', 'About; September 2026.', 'lunch_course'),
      it('', '', 'Dessert added to the lunch course', '+¥500', 'Lunch', 'ask', 'no', 'September 2026.', 'dessert_add'),
      it('', '', 'Cocotte (cheese soufflé)', '', 'Signature', 'ask', 'no', 'November 2026.', 'cocotte'),
    ] }, {
    cuisine: '炭火焼きのコンフィとワインのカジュアルなフレンチ・イタリアンのビストロ、夏は川床 (食べログ、2026年の口コミ)・ランチのコースは2,800円ほど、前菜とパスタか肉、例: ボロネーゼ、鶏のコンフィの炭火焼きと白いんげん豆とスパイシーなトマト、デザート+500円 (2026年8〜9月)・名物のココット、鍋で焼くチーズのスフレ (2026年9〜11月)・夜はイカリヤの基本のコースか、秋刀魚としめじのパスタ、牛ハラミ、5種のナッツのタルトなどのアラカルト (2026年8〜11月)・生ビール、ほうじ茶のジントニック、ワイン (2026年11月)・昼2,000〜4,000円、夜6,000〜8,000円 (食べログ)',
    neighborhood: '団栗橋の南の木屋町、鴨川沿い。河原町駅から徒歩5分',
    gf_detail: '要確認。スフレのようなココット、パスタ、タルト、パンと、炭火焼きのコンフィやステーキのビストロのメニュー。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏のコンフィ、牛肉、チーズのココット、魚が中心のコース (2026年の口コミ)。',
    notes: '[ビストロ・鴨川沿いの木屋町、夏は川床] 木屋町と鴨川の間、築100年の町家の2階建ての居心地のいいビストロ。青い錨の旗が目印。チーズのスフレのココット、鶏のコンフィの炭火焼き、パスタ、手頃なコース。2階からは川が見え、夏は川床 (虫が来ることも)。ランチは2,800円ほどから、ディナーは席料500円か800円。予約を。月曜休み。',
  });
}

// ================================================================ 焼肉牛匠 新 Yakiniku Gyusho Shin
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26036119/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['18:00', '23:00']); const WE = day(['11:30', '15:00'], ['18:00', '23:00']);
  put({
    id: 'kyoto_yakiniku_gyusho_shin_gion', name: '焼肉牛匠 新 (Yakiniku Gyusho Shin)', category: 'OMNI',
    lat: 35.005062, lng: 135.773925, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Write allergies in the booking comments (Tabelog); grilled Omi beef with various seasonings, cold noodles and beef-tendon curry; no gluten information (Tabelog; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an Omi beef yakiniku restaurant; raw meat and raw fish may be served (Tabelog).',
    hours_raw: 'Monday–Friday 18:00–23:00; Saturday, Sunday and holidays 11:30–15:00 (last order 14:00) and 18:00–23:00; food last order 22:00, drinks 22:30; irregular closing days (Tabelog). Reservations accepted; write allergies and preferences in the comments; raw meat or raw fish may be used (Tabelog). A private-room fee of ¥1,100 per room at dinner (Tabelog). 40 seats: a 12-seat counter on the 1F facing a dry-garden display, and private rooms for 2–8 upstairs; smoking allowed only in 2F private rooms at dinner (Tabelog; July 2026). Cards, e-money and QR incl. Alipay and WeChat Pay (Tabelog). A Kyoto townhouse on a Gion street of bars and clubs; 2 min walk from Gion-Shijo Stn (Tabelog; July 2026).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, Sueyoshi-cho — 2 min walk from Gion-Shijo Stn',
    cuisine: 'Omi beef yakiniku specialising in lean cuts, in a Gion townhouse (Tabelog) · courses such as "Tatsumi" at lunch and "Shimizu" at dinner, with fresh-vegetable appetisers that change each visit, Omi beef grilled over charcoal by the chef at the counter, and clay-pot rice with small sides to finish (June–September 2026) · à la carte: yukhoe with egg yolk, meat sashimi, wagyu tongue, outside skirt, Omi beef chateaubriand, beef-tendon curry, sudachi cold noodles (December 2025–October 2026) · fresh lemon squash, wine (2026 reviews) · lunch about ¥3,000–4,000, dinner ¥10,000–20,000 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('焼肉牛匠 新 祇園'), menu_url: null,
    notes: '[Yakiniku · Gion townhouse, Omi beef] Omi beef yakiniku in a Gion townhouse: a counter facing a raked-sand garden where the chef grills over charcoal and coaches you on doneness, and private rooms upstairs. Courses open with fresh-vegetable plates and end with clay-pot rice; à la carte runs to yukhoe, tongue, chateaubriand and sudachi cold noodles. Prices feel high to some, and one guest found the cuts fatty. Lunch on weekends; dinner nightly.',
    chef_bio: { chef_name: null, roles: ['Chef at the counter grill (unnamed) and staff'], origin: null,
      background: 'Per Tabelog: a Gion Kyoto-townhouse yakiniku specialising in lean Omi beef; registered as an official listing by the shop. Reviewers in 2026 describe a counter where the chef grills over charcoal and advises on cooking (July 2026), private rooms upstairs, and courses whose appetisers change with each visit (September 2026).',
      philosophy: 'Lean Omi beef (Tabelog).', specialty: 'Omi beef; sudachi cold noodles.',
      anecdotes: [
        { text: 'A July 2026 diner was uneasy walking down a street of cabaret clubs, then found a calm counter facing a dry-landscape garden of raked sand.', source: R + 'B531293835/' },
        { text: 'A July 2026 business diner found many cuts fatty and the à la carte prices high, perhaps lifted by inbound demand.', source: R + 'B532673140/' },
        { text: 'For a November 2026 birthday the closing plate was an assortment of fruit "resembling a work of art".', source: R + 'B538737601/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉・日本料理・牛料理、東山区末吉町95-5、京阪祇園四条駅から徒歩2分、月〜金 18:00〜23:00、土日祝 11:30〜15:00 (L.O.14:00)・18:00〜23:00、料理L.O.22:00、ドリンクL.O.22:30、不定休、予約可 (アレルギーや好みはコメント欄に、生肉や生魚を使う場合あり)、ディナーの個室料1室1,100円、40席 (カウンター12、個室)、ディナーは2階の個室のみ喫煙可、カード・電子マネー・QR 可、近江牛の赤身専門、祇園の京町家の焼肉。口コミ (2025年12月〜2026年11月、英語): 1階はカウンター、2階は個室、枯山水のような砂紋、シェフが炭火で焼いて焼き加減を教える、コース (昼の「Tatsumi」、夜の「Shimizu」)、野菜の前菜、近江牛、土鍋ご飯、ユッケ、肉刺し、和牛タン、ハラミ、近江牛シャトーブリアン、牛すじカレー、すだちの冷麺、生レモンスカッシュ、ワイン、脂が多いとの声、値段が高めとの声、誕生日のフルーツのプレート。',
      confidence: 'medium', sources: [TB, R + 'B527082768/', R + 'B531211741/', R + 'B531293835/', R + 'B532673140/', R + 'B533352084/', R + 'B536058967/', R + 'B536341542/', R + 'B536757168/', R + 'B538398751/', R + 'B538737601/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book online and note allergies; chef grills at the counter; ¥1,100 private-room fee at dinner; cards, IC and QR.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Asks guests to write allergies and food preferences in the booking comments; raw meat or raw fish may be used (Tabelog).'] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区末吉町95-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; reviews through November 2026.' },
    pin_source: `Tabelog ${TB} (35.005062, 135.773925); cross-checked: GSI 京都府京都市東山区末吉町95番地 (lot) 28 m; kyoto_oogami_gion is 17 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B538398751/'],
    price_note: 'No item prices read; private-room fee ¥1,100 at dinner (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Omi beef chateaubriand', '', 'Beef', 'ask', 'no', 'October 2026.', 'chateaubriand'),
      it('', '', 'Yukhoe (raw beef with egg yolk)', '', 'Beef', 'ask', 'no', 'Raw meat; July 2026.', 'yukhoe'),
      it('', '', 'Sudachi cold noodles', '', 'Noodles', 'no', 'no', 'Can be split for two; December 2025.', 'sudachi_reimen'),
    ] }, {
    cuisine: '祇園の町家の、赤身の近江牛の焼肉 (食べログ)・昼の「Tatsumi」、夜の「Shimizu」などのコース: 来るたびに替わる野菜の前菜、カウンターでシェフが炭火で焼く近江牛、締めは土鍋ご飯と小鉢 (2026年6〜9月)・アラカルト: 卵黄のユッケ、肉刺し、和牛タン、ハラミ、近江牛シャトーブリアン、牛すじカレー、すだちの冷麺 (2025年12月〜2026年10月)・生レモンスカッシュ、ワイン (2026年の口コミ)・昼3,000〜4,000円、夜10,000〜20,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '祇園、末吉町。祇園四条駅から徒歩2分',
    gf_detail: '要確認。アレルギーは予約のコメント欄に (食べログ)。さまざまな味付けの近江牛の焼肉、冷麺、牛すじカレー。グルテンの情報はない (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。近江牛の焼肉店で、生肉や生魚を使うことがある (食べログ)。',
    notes: '[焼肉・祇園の町家、近江牛] 祇園の町家の近江牛の焼肉。砂紋の庭に向かうカウンターではシェフが炭火で焼き、焼き加減を教えてくれる。2階は個室。コースは野菜の前菜で始まり土鍋ご飯で締める。アラカルトはユッケ、タン、シャトーブリアン、すだちの冷麺など。値段が高めと感じる人や、脂が多いと感じた客もいる。昼は土日のみ、夜は毎日。',
  });
}

save();
