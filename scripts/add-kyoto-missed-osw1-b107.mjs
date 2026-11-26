// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 107.
//   + こばこ商店 (Kobako) (self-roasted single-origin coffee stand in the entry of Guesthouse KOBAKO, Okazaki by Heian Shrine)
//   + ミクスチャー コーヒー スタンド フフフ (mixture coffee stand) (Korean-style coffee stand by Kojinguchi, run by a couple)
//   + 石焼 石庵 京都駅前店 (Isshan, Kyoto Station) (lava-stone chicken grill near Kyoto Station, Safari Group)
//   + 六露 (tea and lunch café among antique tea ware, Okazaki by Heian Shrine)
//   - 杵屋 京都ポルタ店, スターバックス・コーヒー 京都タワー サンド店, セブンイレブン アントレマルシェ京都西口改札内店: chains.
//   Core and notable lists have nothing left in the lane; rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first,
//   lane ids: 26042738 (囲 四条大宮駅前店 — held for Greg, NOT drafted and NOT skipped), 26028830 (うぐいす 京都駅前店 — held
//   for Greg, NOT drafted and NOT skipped), 26013566 (skipped), 26035772, 26038490, 26003276 (skipped), 26000990, 26044328,
//   26033018 (skipped).
//   Data check (current main 55114551, hidden included): none of the four is in data/kyoto.json by Tabelog id, name or address;
//   none is in another worker's pending script (osw6-b105, osw8-b107, osw9-b101 grepped).
//   Romaji rule (integrator 2026-11-26): Tabelog's English names ("Kobako Shoten", "Mixture Coffee Stand Fufufu",
//   "ishiyaki isshan", "Rokuro") are not a source. Kobako: the shop's own site nashinokatachi.com writes KOBAKO (Instagram
//   kobako_coffee_guesthouse). "mixture coffee stand": Leaf Kyoto's article writes the name "mixture coffee stand ㅎ³"
//   (Instagram coffee_huhuhu); the kana フフフ is given no romaji there, so it stays kana. Isshan: the operator's own page
//   gives the kana イッシャン for 石庵. 六露: no source romaji — kanji only, whole-string name gloss.
//   Operator checks: こばこ商店 — one shop, the coffee stand of the guesthouse next door (own site). フフフ — Leaf Kyoto
//   (2023-09-05): opened 2022-11-09 by a Korean-resident couple; a September 2026 reviewer heard of a shop in Namsan, Seoul;
//   no other Japanese shop found. 石庵 — Safari Group (safari-grp.com), a local group of differently named concepts already in
//   data (kyoto_rokkakuya_kyoto, kyoto_kopan_kushiage_pontocho; ruled NOT a large parent, brief 2026-11-05); the group site
//   lists this as the only 石庵 shop. 六露 — one shop found.
//   Service charges: 石庵 cabbage appetizer charged (¥453 / ¥906 in two September 2026 reviews); none listed for the others.
//   Other-diner remarks (Greg 2026-11-06): single-review remarks about other customers left out (こばこ商店 November 2025).
//   Halal: no operator in this batch claims halal certification.
//   JA text: no bare 祝 or 天. Names known only from English sources stay Latin (Bricks Breaker, COYOTE, COGUPRA, Namsan,
//   Seoul, Uji). Coffee-origin countries written in katakana in JA (エチオピア, ニカラグア, コロンビア, ケニア).
//   Pins: Tabelog /en/ ld+json points; no OSM/GSI cross-check this round (integrator runs pincheck). こばこ商店 (40-7) and
//   六露 (40-2) are two lots apart on the same block, ~29 m between the Tabelog points.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-26';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-107');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26013566', '杵屋 京都ポルタ店: chain — Kineya udon (グルメ杵屋)');
skip('26003276', 'スターバックス・コーヒー 京都タワー サンド店: chain — Starbucks');
skip('26033018', 'セブンイレブン アントレマルシェ京都西口改札内店: chain — 7-Eleven convenience store');

// ================================================================ こばこ商店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26035772/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://nashinokatachi.com/';
  const WEBC = 'https://nashinokatachi.com/%e3%82%b3%e3%83%bc%e3%83%92%e3%83%bc%e3%82%b9%e3%82%bf%e3%83%b3%e3%83%89/';
  const H = day(['09:00', '17:00']);
  put({
    id: 'kyoto_kobako_coffee_stand_okazaki', name: 'こばこ商店 (Kobako)', category: 'OMNI',
    lat: 35.015496, lng: 135.78484, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Hand-dripped coffee, with homemade baked goods such as muffins; no gluten information (own site; 2021–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black hand-dripped coffee is the core; milk coffee and baked goods are also sold, with no vegan information.',
    hours_raw: 'Daily 9:00–17:00 (Tabelog, which says hours may change); the shop says its hours are updated daily on Google Maps (own site) — check before going. Mainly takeout: drink at the terrace seats in front, or inside if staying at the guesthouse; dogs and outside food and drink welcome; bicycle parking (own site). Cards and e-money accepted; no QR payments (Tabelog). Non-smoking; no parking (Tabelog). 4 minutes from the Okazakimichi bus stop (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Okazaki — on Okazaki-michi by Heian Shrine',
    cuisine: 'Single-origin green beans roasted in-house, hand-dripped to order (own site; reviews), roasts from light to medium and dark (April 2025), five to choose from (May 2025) · Nicaragua Bendicion ¥600 and a La France pear muffin ¥350 (November 2025) · Ethiopian, medium-dark, ¥500 (April 2025), iced (July 2025) · Colombia El Nogal ¥500 (June 2023), Colombian Black Lime Honey ¥500 (March 2023) · Nicaragua natural Pacamara, Bricks Breaker (November 2026) · milk coffee with Kenyan beans, ¥600 takeout, with a small sweet (October 2021) · homemade baked goods (May 2023) · beans sold over the counter, other kinds aged in a wine cellar (own site)',
    website: WEB, gmaps: gm('こばこ商店 京都 岡崎'), menu_url: WEBC,
    notes: '[Coffee stand · Okazaki by Heian Shrine, self-roasted] A three-tatami entryway of a century-old house, turned into the coffee stand of Guesthouse KOBAKO next door. Single-origin beans roasted in-house and hand-dripped to order, light to dark, from about ¥500, drunk at the seats out front facing the Heian Shrine trees. A quiet, friendly owner; muffins and other baked goods; beans to take home.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'The shop converted the three-tatami entryway of an old house, like the guesthouse about 100 years old, into the coffee stand, and roasts single-origin green beans itself (own site). Reviewers describe an owner who speaks little, which makes for a quiet visit (March 2023), a friendly owner (May 2025), and one who kindly brewed a coffee just before closing (July 2025); a March 2025 reviewer says a couple runs the place.',
      philosophy: null, specialty: 'Hand-dripped single-origin coffee, roasted in-house.',
      anecdotes: [
        { text: 'A May 2023 diner, once unable to tell a top coffee stand from convenience-store coffee, took an iced Colombia to a nearby park and could not wait to sip it on the way.', source: R + 'B465959056/' },
        { text: 'In August 2026 a diner’s partner, who had ordered the dark roast, tasted the diner’s light roast and wished for that one instead.', source: R + 'B533845488/' },
      ],
      japanese_sources_summary: '公式サイト (ゲストハウスこばこ): ゲストハウスは築100年ほどの古民家、コーヒースタンドは同じく築100年の古民家のわずか3畳の玄関口を改装、ゲストハウスこばこの隣、岡崎道通り沿い、シングルオリジンの生豆を自家焙煎、豆は店頭で販売、ほかの豆はワインセラーで熟成、基本はテイクアウトで軒先のテラスや宿泊客は宿の中で飲める、犬連れや飲食物の持ち込み可、自転車置き場あり、営業時間はGoogleマップで毎日更新。食べログ: カフェ、毎日 9:00〜17:00、カード・電子マネー可、QR決済不可、禁煙、駐車場なし、岡崎道バス停から徒歩4分。口コミ (2021〜2026年、英語): 浅煎りから中深煎り・深煎りまで、5種から選べる、ニカラグア Bendicion 600円とラ・フランスのマフィン350円 (2025年11月)、エチオピア500円 (2025年4月)、コロンビア El Nogal 500円 (2023年6月)、ケニアの豆のミルクコーヒー テイクアウト600円、小さな菓子付き (2021年10月)、自家製の焼き菓子、口数の少ない店主、親しみやすい店主、夫婦で営む (2025年3月)、店の外の席から平安神宮の森を眺められる。',
      confidence: 'low', sources: [WEB, WEBC, TB, R + 'B441459590/', R + 'B461874631/', R + 'B465959056/', R + 'B503125862/', R + 'B504279652/', R + 'B506090834/', R + 'B515264637/', R + 'B533845488/', R + 'B538580935/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter; mainly takeout, with a few seats out front.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区岡崎南御所町40-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Own site and Tabelog listing checked 2026-11-26 (no closure badge); reviews dated October 2021 to November 2026.' },
    pin_source: `Tabelog ${TB} (35.0154963, 135.7848404); not cross-checked this round; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B461874631/', R + 'B504279652/'],
    price_note: 'Prices from 2023–2025 reviews; beans change.', last_checked: TODAY, items: [
      it('', '', 'Hand-dripped single-origin coffee (e.g. Nicaragua Bendicion)', '¥600', 'Coffee', 'ask', 'ask', 'November 2025; Ethiopian ¥500 in April 2025.', 'pour_over'),
      it('', '', 'La France pear muffin', '¥350', 'Baked goods', 'ask', 'ask', 'November 2025.', 'muffin'),
    ] }, {
    cuisine: 'シングルオリジンの生豆を自家焙煎し、注文ごとにハンドドリップ (公式サイト、口コミ)、浅煎りから中深煎り・深煎りまで (2025年4月)、5種から選べる (2025年5月)・ニカラグア Bendicion 600円、ラ・フランスのマフィン350円 (2025年11月)・エチオピア 中深煎り500円 (2025年4月)、アイスでも (2025年7月)・コロンビア El Nogal 500円 (2023年6月)、コロンビア Black Lime Honey 500円 (2023年3月)・ニカラグア ナチュラル パカマラ Bricks Breaker (2026年11月)・ケニアの豆のミルクコーヒー、テイクアウト600円、小さな菓子付き (2021年10月)・自家製の焼き菓子 (2023年5月)・豆を店頭で販売、ほかの豆はワインセラーで熟成 (公式サイト)',
    neighborhood: '岡崎、平安神宮そばの岡崎道通り沿い',
    gf_detail: '要確認。ハンドドリップのコーヒーと、マフィンなど自家製の焼き菓子。グルテンの情報はない (公式サイト、2021〜2026年の口コミ)。',
    vegan_detail: '要確認。中心はブラックのハンドドリップのコーヒー。ミルクコーヒーや焼き菓子もあるが、ヴィーガンの情報はない。',
    notes: '[コーヒースタンド・平安神宮そばの岡崎、自家焙煎] 古民家のわずか3畳の玄関口を改装した、隣のゲストハウスこばこのコーヒースタンド。シングルオリジンの豆を自家焙煎し、浅煎りから深煎りまで注文ごとにハンドドリップ、500円ほどから。平安神宮の森を前にした軒先の席で飲める。口数は少なく親しみやすい店主。マフィンなどの焼き菓子や豆の販売も。',
  });
}

// ================================================================ ミクスチャー コーヒー スタンド フフフ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26038490/'; const R = TB + 'dtlrvwlst/';
  const LEAF = 'https://www.leafkyoto.net/en/newstore/230914-kyoto-mixturecoffeestand/';
  const IG = 'https://www.instagram.com/coffee_huhuhu/';
  const H = day(['12:00', '18:00']);
  put({
    id: 'kyoto_korean_coffee_stand_kojinguchi', name: 'ミクスチャー コーヒー スタンド フフフ (mixture coffee stand)', category: 'OMNI',
    lat: 35.021292, lng: 135.769004, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Coffee, juices and lemonade, with soft serve, croffles, Basque cheesecake and a dalgona parfait; no gluten information (Leaf Kyoto 2023; 2024–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Americano and juices appear, but lattes, dalgona coffee, soft serve and cakes are milk- or egg-based; nothing is described as vegan.',
    hours_raw: 'Monday and Wednesday–Sunday 12:00–18:00; closed Tuesday (Tabelog; Leaf Kyoto 2023). No reservations; takeout available (Tabelog). 6 seats, at the counter and benches (Tabelog; April 2024). Cards, e-money and QR payments accepted (Tabelog). Non-smoking; no parking (Tabelog). Enter from Kojinguchi-dori west of Kawaramachi, steps from the Kojinguchi bus stop; about 8 minutes from Jingu-Marutamachi station (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kojinguchi — just west of Kawaramachi, near the Imperial Palace and the Kamo River',
    cuisine: 'Korean-style coffee stand with beans from roasters in Japan and Korea, incl. COYOTE (Kyoto) and COGUPRA (Seoul) (Leaf Kyoto 2023; April 2024) · Korean Americano ¥450, latte ¥600, dalgona parfait ¥650, the house original (Leaf Kyoto 2023) · café latte ¥600, soft serve S ¥200 (April 2024) · dalgona coffee (June 2024; September 2026) · iced coffee with soft serve and Oreo (July 2024) · Basque cheesecake, croffle, café au lait (March 2025) · lemonade ¥500, juices (March 2025) · iced coffee ¥300 (April 2025) · “Korean coffee” iced ¥600, patbingsu ¥700 (August 2025) · hand-dripped light roast (September 2026) · matcha latte, made without sugar on request (November 2026) · Korean goods (Leaf Kyoto 2023) and local crafts at the back (March 2024)',
    website: IG, gmaps: gm('mixture coffee stand 京都 荒神口'), menu_url: LEAF,
    notes: '[Korean-style coffee stand · Kojinguchi by the Imperial Palace] A small black-and-white stand in a renovated townhouse off Kawaramachi, opened in 2022 by a Korean-resident couple to share Korean culture through coffee; the name stands for a mix of countries and cultures. Beans from Kyoto and Seoul roasters, dalgona coffee and a dalgona parfait, patbingsu, croffles and Basque cheesecake. Six seats; most take it away.',
    chef_bio: { chef_name: null, roles: ['Owners (unnamed), a couple'], origin: 'Korean residents of Japan (Leaf Kyoto 2023; April 2024)',
      background: 'Opened on 9 November 2022 by a Korean-resident couple; the name is meant to call up a blend of countries and cultures, like blended coffee (Leaf Kyoto 2023; Tabelog). A March 2024 reviewer found the female manager warm and the shop easy to visit alone; a November 2026 reviewer describes a calm, mature team. A September 2026 reviewer had heard that there is also a shop in Namsan, Seoul. Followers on Instagram could get Korean snacks (June 2024).',
      philosophy: 'To share Korean culture through coffee (Leaf Kyoto 2023; April 2024).', specialty: 'Dalgona coffee and dalgona parfait.',
      anecdotes: [
        { text: 'A March 2025 diner who came for a lemonade recognised the financiers on sale as those of a famous Karasuma-Oike shop known for its lines, here bought without queuing.', source: R + 'B503614665/' },
        { text: 'In March 2026 a diner ordering an iced café latte was handed a small treat with it.', source: R + 'B525123868/' },
      ],
      japanese_sources_summary: 'Leaf Kyoto (2023年9月5日): mixture coffee stand ㅎ³、荒神口、2022年11月9日オープン、在日韓国人の夫婦が営む、コーヒーで韓国の文化を伝えたい、店名は国や文化が混ざり合うブレンドコーヒーのようなイメージ、豆は京都の COYOTE とソウルの COGUPRA から直接仕入れ、韓国のアメリカーノ450円、ラテ600円、看板のダルゴナパフェ650円、韓国のポップな雑貨、12:00〜18:00、火曜定休、Instagram coffee_huhuhu。食べログ: コーヒースタンド、月・水〜日 12:00〜18:00、火曜定休、6席、カード・電子マネー・QR決済可、禁煙、駐車場なし、テイクアウト可、荒神口通から入る、2022年11月9日オープン。口コミ (2024〜2026年、英語): 日本と韓国のロースターの豆、ダルゴナコーヒー、カフェラテ600円、ソフトクリームS 200円、ソフトクリームとオレオのせのアイスコーヒー、白黒のタイルの竜の壁画、ブロックを積んだ壁、カウンターとベンチ、バスクチーズケーキ、クロッフル、カフェオレ、レモネード500円、アイスコーヒー300円、韓国のコーヒー (アイス) 600円、パッピンス700円、浅煎りのハンドドリップ、砂糖なしの抹茶ラテ、奥に地元の雑貨、温かい印象の女性の店長、落ち着いた大人の店、テイクアウトの客が多い、Seoul の Namsan にも店があると聞いた (2026年9月)。',
      confidence: 'low', sources: [LEAF, IG, TB, R + 'B483586235/', R + 'B487751241/', R + 'B489475762/', R + 'B497462414/', R + 'B503375419/', R + 'B503614665/', R + 'B505166780/', R + 'B511273064/', R + 'B525123868/', R + 'B536432590/', R + 'B537675590/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order and pay at the counter; a Korean-themed menu.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市上京区上生洲町211-20',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing checked 2026-11-26 (no closure badge); reviews dated March 2024 to November 2026.' },
    pin_source: `Tabelog ${TB} (35.0212923, 135.7690036); not cross-checked this round; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [LEAF, R + 'B483586235/', R + 'B511273064/'],
    price_note: 'Prices from Leaf Kyoto (2023) and 2024–2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Korean Americano', '¥450', 'Coffee', 'ask', 'ask', 'Leaf Kyoto 2023 (COGUPRA beans).', 'americano'),
      it('', '', 'Café latte', '¥600', 'Coffee', 'ask', 'no', 'Leaf Kyoto 2023; April 2024.', 'cafe_latte'),
      it('', '', 'Dalgona parfait', '¥650', 'Sweets', 'ask', 'no', 'Leaf Kyoto 2023.', 'dalgona_parfait'),
      it('', '', 'Soft serve, small', '¥200', 'Sweets', 'ask', 'no', 'April 2024.', 'soft_serve'),
      it('', '', 'Patbingsu (shaved ice with red beans)', '¥700', 'Sweets', 'ask', 'ask', 'August 2025.', 'patbingsu'),
      it('', '', 'Lemonade', '¥500', 'Drinks', 'ask', 'ask', 'March 2025.', 'lemonade'),
    ] }, {
    cuisine: '日本と韓国のロースターの豆を使う韓国風のコーヒースタンド、京都の COYOTE やソウルの COGUPRA など (Leaf Kyoto 2023年、2024年4月)・韓国のアメリカーノ450円、ラテ600円、看板のダルゴナパフェ650円 (Leaf Kyoto 2023年)・カフェラテ600円、ソフトクリームS 200円 (2024年4月)・ダルゴナコーヒー (2024年6月、2026年9月)・ソフトクリームとオレオのせのアイスコーヒー (2024年7月)・バスクチーズケーキ、クロッフル、カフェオレ (2025年3月)・レモネード500円、ジュース (2025年3月)・アイスコーヒー300円 (2025年4月)・韓国のコーヒー (アイス) 600円、パッピンス700円 (2025年8月)・浅煎りのハンドドリップ (2026年9月)・頼めば砂糖なしの抹茶ラテ (2026年11月)・韓国の雑貨 (Leaf Kyoto 2023年)、奥に地元の雑貨 (2024年3月)',
    neighborhood: '荒神口、河原町通の西。御所と鴨川の近く',
    gf_detail: '要確認。コーヒー、ジュース、レモネードのほか、ソフトクリーム、クロッフル、バスクチーズケーキ、ダルゴナパフェ。グルテンの情報はない (Leaf Kyoto 2023年、2024〜2026年の口コミ)。',
    vegan_detail: '要確認。アメリカーノやジュースはあるが、ラテ、ダルゴナコーヒー、ソフトクリーム、ケーキは乳や卵を使う。ヴィーガンと書かれた品はない。',
    notes: '[韓国風コーヒースタンド・御所近くの荒神口] 河原町通から少し入った、町家を改装した白黒の小さなスタンド。在日韓国人の夫婦が、コーヒーで韓国の文化を伝えようと2022年に開いた。店名は国や文化が混ざり合うイメージ。京都とソウルのロースターの豆、ダルゴナコーヒーやダルゴナパフェ、パッピンス、クロッフル、バスクチーズケーキ。6席で、持ち帰る客が多い。',
  });
}

// ================================================================ 石焼 石庵 京都駅前店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26000990/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://www.safari-grp.com/brands/issian/shops/kyoto/';
  const WEBC = WEB + 'concept/';
  const A = day(['17:30', '22:30']); const B = day(['17:30', '23:00']);
  put({
    id: 'kyoto_isshan_stone_grill_kyoto_station', name: '石焼 石庵 京都駅前店 (Isshan, Kyoto Station)', category: 'OMNI',
    lat: 34.988255, lng: 135.75759, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Chicken marinated in an onion sauce before grilling, with tare and salt sauces, hamburg steak and kamameshi; no gluten information (own site; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Steamed vegetables with a house dip and a spinach salad with crisp onion are on the menu, but nothing is described as vegan; the house is built on chicken and beef.',
    hours_raw: 'Sunday–Thursday 17:30–22:30 (last order 22:00); Friday and Saturday 17:30–23:00 (last order 22:30) (Tabelog; the own site adds public holidays to the later hours). No regular closing day (own site); closed 31 December 2025–2 January 2026 (Tabelog). Reservations by phone or online via Hot Pepper (own site). Cards (VISA, Master, JCB, AMEX) and e-money; PayPay accepted (Tabelog). 72 seats: counter for 8, tables for 24, a horigotatsu tatami room for 24, and a second-floor private room for 13–16 (own site; Tabelog). Non-smoking; no parking (Tabelog). A charged cabbage appetizer (September 2026). 5 minutes’ walk from Kyoto Station (Tabelog).',
    hours: { 0: A, 1: A, 2: A, 3: A, 4: B, 5: B, 6: A }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Near Kyoto Station — 5 minutes on foot',
    cuisine: 'Domestic chicken, dipped in an onion sauce and grilled on Mount Fuji lava stone (own site; September and November 2026) · thigh and neck ¥682, furisode and engawa ¥605, special tsukune ¥748, popular since the start (own site; ¥770 in September 2026) · tenderloin and breast ¥649 (September 2026) · Ishigaki beef hamburg ¥979, homemade smoked bacon ¥1,078, seared beef tongue ¥1,859, wagyu loin yaki-shabu ¥1,749, scallops, prawns, seared shime-saba (own site) · rice from Kikuchi in Kumamoto, cooked to order in about 30 minutes, ¥825 for one (own site; much praised in November 2026), chicken kamameshi ¥1,155 and a bibimbap-style kamameshi (own site; October 2026) · four kinds of steamed vegetables with a house dip ¥1,078 (own site) · recommended set of seafood, five chicken cuts and steamed vegetables, chosen by staff, ¥2,750 for two or more (own site; October 2026) · courses with all-you-can-drink ¥5,500–¥7,115 (own site) · “ultimate” lemon sour ¥715 (own site)',
    website: WEB, gmaps: gm('石焼 石庵 京都駅前店'), menu_url: WEB + 'menu/',
    notes: '[Stone-grilled chicken · near Kyoto Station, Safari Group] A townhouse-style front of black wooden walls and big white lanterns, with a modern Japanese room inside, five minutes from Kyoto Station, where chicken dipped in onion sauce is grilled at the table on Mount Fuji lava stone — mostly by the staff, who grill and cut it for you. Hamburg steak of Ishigaki beef and rice cooked to order are the other draws. Counter, sunken seating and private rooms for groups. Expect smoke on your clothes.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed); operator Safari Group'], origin: null,
      background: 'Run by Safari Group (own site), whose 六角や 京都店 is in the same area (kyoto_rokkakuya_kyoto; Tabelog lists it as a sister shop, with the new 町家のおだいどこ 庵). A September 2026 reviewer writes that the group was founded in 2000 and that its first restaurant was a stone-grilled chicken shop in Kyoto. Reviewers praise the staff who grill and cut everything at the table and the welcome (September and October 2026); others found the service lacking and a hamburg burnt (August 2026), and the staff too controlling — the meat was put on the stone before the toast, and a diner was told not to clean the stone, which staff then scrubbed with meat still on it (two September 2026 reviews).',
      philosophy: 'Lava-stone grilling to bring out the most of the ingredients (own site).', specialty: 'Stone-grilled chicken; rice cooked to order.',
      anecdotes: [
        { text: 'An October 2026 diner, back at a favourite, came after a day at a music festival and, as always, took the staff’s recommended set, then a second helping of neck.', source: R + 'B512862334/' },
        { text: 'A September 2026 diner turned away when it was fully booked came back the next day on the way home and was glad to sit back and talk while the staff grilled.', source: R + 'B536332432/' },
      ],
      japanese_sources_summary: '公式サイト (サファリグループ): 石焼 石庵 (イッシャン) 京都駅前店、JR京都駅から徒歩5分、日〜木 17:30〜22:30、金・土・祝日 17:30〜23:00、定休日なし、富士山の溶岩石を使った石焼は素材の旨味を最大限に引き出す石庵独自の食べ方、国産の厳選鶏肉、熊本の菊池米、もも・せせり682円、ふりそで・えんがわ605円、特製つくね748円 (創業以来の人気商品)、石垣牛のハンバーグ979円、自家製スモークベーコン1,078円、牛タン炙り焼き1,859円、和牛ロースの焼きしゃぶ1,749円、菊池米の銀シャリ825円 (約30分)、鶏釜飯1,155円、こだわり野菜のせいろ蒸し1,078円、おすすめセット2,750円、飲み放題付きコース5,500〜7,115円、究極レモンサワー715円、カウンター8席、テーブル24席、掘りごたつ24席、2階の個室13〜16名、ウェブ予約はホットペッパー。食べログ: 居酒屋・焼き鳥・焼肉、72席、個室あり、禁煙、駐車場なし、カード (VISA、Master、JCB、AMEX)・電子マネー・PayPay 可、2025年12月31日〜2026年1月2日休み、姉妹店に六角や 京都店と町家のおだいどこ 庵。口コミ (2026年、英語): 黒い板壁と白い大きな提灯の町家風の外観、玉ねぎのタレにくぐらせて石で焼く、スタッフが焼いて切ってくれる、おすすめセット、ネック、つくね770円、ささみ・むね649円、柚子の香りの塩ダレ、キャベツのお通し453円 (別の口コミでは906円)、炊きたてのご飯、ハンバーグ、煙が服につく、焼き方の指示が多い、石を掃除しないよう言われた、以前の方がおいしかった、サファリグループは2000年創業。',
      confidence: 'low', sources: [WEB, WEBC, WEB + 'menu/', TB, R + 'B512862334/', R + 'B535063226/', R + 'B536050973/', R + 'B536332432/', R + 'B536502188/', R + 'B536757257/', R + 'B537147604/', R + 'B538621625/', R + 'B538648355/', R + 'B538653634/', R + 'B538826054/', R + 'B539672320/'] },
    cultural_comfort: { level: 'japanese', note: 'Staff grill at the table and give instructions on how to eat; phone bookings may be in Japanese only (Tabelog). Online booking via Hot Pepper.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区東塩小路町693',
    existence: { status: 'confirmed', checked: TODAY, note: 'Own site and Tabelog listing checked 2026-11-26 (no closure badge); reviews dated August 2025 to November 2026.' },
    pin_source: `Tabelog ${TB} (34.988255, 135.7575902); not cross-checked this round; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [WEB + 'menu/', R + 'B536502188/'],
    price_note: 'Prices from the own site menu (tax incl., read 2026-11-26).', last_checked: TODAY, items: [
      it('もも', '', 'Chicken thigh, stone-grilled', '¥682', 'Stone grill', 'ask', 'no', 'Own site; September 2026.', 'chicken_thigh'),
      it('せせり', '', 'Chicken neck, stone-grilled', '¥682', 'Stone grill', 'ask', 'no', 'Own site; September 2026.', 'seseri'),
      it('特製つくね', '', 'Special tsukune', '¥748', 'Stone grill', 'ask', 'no', 'Own site; ¥770 in a September 2026 review.', 'tsukune'),
      it('石垣牛のハンバーグ', '', 'Ishigaki beef hamburg steak', '¥979', 'Stone grill', 'ask', 'no', 'Own site.', 'hamburg'),
      it('菊池米の銀シャリ', '', 'Kikuchi rice cooked to order, for one', '¥825', 'Rice', 'ask', 'ask', 'Own site; about 30 minutes.', 'ginshari'),
      it('菊池米の鶏釜飯', '', 'Chicken kamameshi', '¥1,155', 'Rice', 'ask', 'no', 'Own site; with the rice order.', 'kamameshi'),
      it('おすすめセット', '', 'Recommended set (seafood, chicken, steamed vegetables)', '¥2,750', 'Sets', 'ask', 'no', 'Own site; two or more.', 'recommended_set'),
    ] }, {
    cuisine: '国産の鶏肉を玉ねぎのタレにくぐらせ、富士山の溶岩石で焼く (公式サイト、2026年9・11月)・もも、せせり682円、ふりそで、えんがわ605円、創業以来の人気の特製つくね748円 (公式サイト、2026年9月は770円)・ささみ、むね649円 (2026年9月)・石垣牛のハンバーグ979円、自家製スモークベーコン1,078円、牛タン炙り焼き1,859円、和牛ロースの焼きしゃぶ1,749円、ホタテ、海老、炙りしめ鯖 (公式サイト)・熊本の菊池米を注文ごとに約30分で炊く銀シャリ、1人前825円 (公式サイト、2026年11月の口コミで好評)、鶏釜飯1,155円とビビンバ風の釜飯 (公式サイト、2026年10月)・こだわり野菜のせいろ蒸し 自家製ディップ添え1,078円 (公式サイト)・魚介、鶏5種、蒸し野菜をスタッフが選ぶおすすめセット、2名から2,750円 (公式サイト、2026年10月)・飲み放題付きコース5,500〜7,115円 (公式サイト)・究極レモンサワー715円 (公式サイト)',
    neighborhood: '京都駅の近く、徒歩5分',
    gf_detail: '要確認。鶏肉は玉ねぎのタレにくぐらせて焼き、タレや塩ダレ、ハンバーグ、釜飯もある。グルテンの情報はない (公式サイト、2026年の口コミ)。',
    vegan_detail: '要確認。野菜のせいろ蒸しやほうれん草のサラダはあるが、ヴィーガンと書かれた品はない。中心は鶏肉と牛肉。',
    notes: '[石焼の鶏・京都駅の近く、サファリグループ] 京都駅から徒歩5分、黒い板壁と白い大きな提灯の和モダンな店。玉ねぎのタレにくぐらせた鶏肉を富士山の溶岩石で焼き、ほとんどはスタッフが焼いて切ってくれる。石垣牛のハンバーグと注文ごとに炊くご飯も人気。カウンター、掘りごたつ、個室があり団体にも。煙が服につくとの口コミ。',
  });
}

// ================================================================ 六露
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26044328/'; const R = TB + 'dtlrvwlst/';
  const A = day(['11:00', '15:00']); const S = day(['11:00', '16:00']);
  put({
    id: 'kyoto_antique_tea_cafe_okazaki', name: '六露', category: 'OMNI',
    lat: 35.015754, lng: 135.784845, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Matcha and tea sets with sweets, and lunch sets such as a sake-lees soup set, bonito sashimi and beef bowls; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tea and matcha are the core, but the sweets are not described and the lunches are meat and fish; nothing is described as vegan.',
    hours_raw: 'Monday and Wednesday–Saturday 11:00–15:00; Sunday 11:00–16:00; closed Tuesday (Tabelog, which says hours may change). No reservations; no parking (Tabelog). The antique and modern tableware and tea utensils inside are for sale (February, April and August 2026).',
    hours: { 0: A, 2: A, 3: A, 4: A, 5: A, 6: S }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Okazaki — by Heian Shrine',
    cuisine: 'Tea café among antiques · matcha and sweets set ¥1,500, with a rich matcha terrine, drunk from a tea bowl you pick from the shelf (February 2026) · matcha (August 2026) · a cool Uji tea set with original Uji matcha sweets (September 2026) · tea and sweets set, cold tea (October 2026) · lunch set with sake-lees soup (January 2026) · bonito sashimi set meal, roast beef bowl with salt and wasabi (March 2026) · beef tataki rice bowl (April 2026)',
    website: null, gmaps: gm('六露 京都 岡崎南御所町'), menu_url: TB,
    notes: '[Tea café · Okazaki by Heian Shrine, antiques] A calm machiya café near Heian Shrine, filled with antique tea utensils and tableware that are also for sale. Choose a tea bowl from the shelf for your matcha, with a matcha terrine or other sweets; light lunches of sashimi, beef bowls or sake-lees soup; a view of a well-kept garden. One August 2026 reviewer was on a third visit.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Reviewers describe a machiya-style café where the pottery first suggests a pottery shop (January 2026), tables made from old tea boxes, a little wobbly (March 2026), antique to modern tea ware to try (August 2026), and pieces for sale, some at surprisingly high prices (February 2026). One April 2026 diner came here when the Western-style restaurant next door was too crowded.',
      philosophy: null, specialty: 'Matcha in a tea bowl of your choice.',
      anecdotes: [
        { text: 'A January 2026 diner who loves sake-lees soup ordered the lunch set with it and wished for a second bowl.', source: R + 'B520772837/' },
        { text: 'An August 2026 diner, on a third visit, came back for the matcha and the garden.', source: R + 'B533878899/' },
      ],
      japanese_sources_summary: '食べログ: 六露、カフェ、月・水〜土 11:00〜15:00、日 11:00〜16:00、火曜定休、予約不可、駐車場なし。口コミ (2026年、英語): 町家風のカフェ、古い茶道具や器に囲まれる、器は販売もしていて驚くほど高いものも、棚から好きな茶碗を選んで抹茶、濃厚な抹茶テリーヌの抹茶とお菓子のセット1,500円、粕汁のランチセット、かつおの刺身定食、塩とわさびで食べるローストビーフ丼、牛たたき丼、Uji のお茶の涼やかなセットとオリジナルの抹茶スイーツ、冷たいお茶とお菓子のセット、古い茶箱のテーブル、手入れの行き届いた庭、落ち着いた上品な雰囲気、隣の洋食店が混んでいた (2026年4月)。',
      confidence: 'low', sources: [TB, R + 'B520772837/', R + 'B522172635/', R + 'B525220820/', R + 'B525647172/', R + 'B533878899/', R + 'B535960430/', R + 'B537558113/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Quiet café; staff guide you to a seat and hand over the menu (January 2026); phone may be Japanese only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区岡崎南御所町40-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing checked 2026-11-26 (no closure badge); reviews dated January to October 2026.' },
    pin_source: `Tabelog ${TB} (35.0157541, 135.7848451); not cross-checked this round; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B522172635/', R + 'B525220820/'],
    price_note: 'One price in reviews (February 2026).', last_checked: TODAY, items: [
      it('', '', 'Matcha and sweets set (rich matcha terrine)', '¥1,500', 'Tea', 'ask', 'ask', 'February 2026.', 'matcha_set'),
      it('', '', 'Lunch set with sake-lees soup', '', 'Lunch', 'ask', 'ask', 'January 2026.', 'kasujiru_set'),
      it('', '', 'Bonito sashimi set meal', '', 'Lunch', 'ask', 'no', 'March 2026.', 'katsuo_teishoku'),
      it('', '', 'Roast beef bowl', '', 'Lunch', 'ask', 'no', 'March 2026.', 'roast_beef_don'),
    ] }, {
    cuisine: '骨董に囲まれたお茶のカフェ・濃厚な抹茶テリーヌ付きの抹茶とお菓子のセット1,500円、茶碗は棚から選べる (2026年2月)・抹茶 (2026年8月)・Uji のお茶の涼やかなセットとオリジナルの抹茶スイーツ (2026年9月)・お茶とお菓子のセット、冷たいお茶 (2026年10月)・粕汁のランチセット (2026年1月)・かつおの刺身定食、塩とわさびで食べるローストビーフ丼 (2026年3月)・牛たたき丼 (2026年4月)',
    neighborhood: '岡崎、平安神宮のそば',
    gf_detail: '要確認。抹茶やお茶とお菓子のセット、粕汁のランチセット、かつおの刺身、牛肉の丼。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。中心はお茶と抹茶だが、お菓子の中身は書かれておらず、ランチは肉と魚。ヴィーガンと書かれた品はない。',
    notes: '[お茶のカフェ・平安神宮そばの岡崎、骨董] 平安神宮近くの落ち着いた町家のカフェ。古い茶道具や器が並び、販売もしている。棚から好きな茶碗を選んで抹茶を、抹茶テリーヌなどのお菓子と。刺身や牛肉の丼、粕汁のランチもあり、手入れの行き届いた庭を眺められる。3度目の来店という口コミも (2026年8月)。',
  });
}

save();
