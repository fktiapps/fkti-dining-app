// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 41.
//   + 日本料理と日本酒 惠史 Satoshi (charcoal-grill Japanese cooking and sake by a former Wakuden head chef, Nijo)
//   + 京 聖護院 早起亭うどん Hayaokitei Udon (6 am udon beside a noodle factory, Shogoin)
//   + 馬肉料理専門店 馬野郎 Umayaro (horse-meat specialist open late, Kiyamachi Shijo)
//   + 中国菜 燕燕 Enen (Chinese home cooking and dim sum, Teramachi Imadegawa)
//   Same-name counts first, per brand or operator (2026-11-06): 惠史 — one; the owner left Wakuden in 2016 and opened
//   independently in 2020 (official site), so not a Wakuden sub-brand. 早起亭 — one. 馬野郎 — Tabelog lists this shop and
//   馬肉酒場 金山 馬野郎 in Nagoya — two, drafted. 燕燕 — one in Kyoto (another Enen in Hakodate is unrelated).
//   Taken on 2026-11-06: `next core 200` (lane) gave 惠史 26034412 and 早起亭 26024926; `next notable 200` (lane) gave
//   馬野郎 26020996 and 燕燕 26000500. None is in data/kyoto.json: grep by name and address (宮木町471-2, 聖護院蓮華蔵町9,
//   西紙屋町368-1 SAKIZOビル, 大原口町211) found none.
//   Service charges per Tabelog's Japanese original: 惠史 「サービス料一律5％、20時以降の入店は10%頂戴いたします。」;
//   馬野郎 「お通し代 400円」; 燕燕 「なし」 (Tabelog’s English wrongly says one may be added); 早起亭 none listed.
//   No halal claims; no owner deaths in the sources.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-41');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 惠史
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26034412/'; const R = TB + 'dtlrvwlst/';
  const OF = 'https://www.kyoto-satoshi.com/';
  const H = day(['12:00', '14:00'], ['17:30', '23:00']);
  put({
    id: 'kyoto_nihonshu_satoshi', name: '日本料理と日本酒 惠史 (Satoshi)', category: 'OMNI',
    lat: 35.009576, lng: 135.754338, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kaiseki-style courses with miso-cured and soy-seasoned dishes, sashimi, and charcoal-grilled seafood (official site; 2025–26 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Japanese kitchen built on katsuo dashi, with charcoal-grilled Ise lobster, eel and fish (official site; 2025–26 reviews).',
    hours_raw: 'Lunch 12:00–14:00 (reservation only, last entry 13:00), dinner 17:30–23:00 (last entry 21:00); closed irregularly (official site; Tabelog). Reservations accepted; cancellations the day before or on the day cost ¥10,000 per person, or 100% of a kaiseki course, also for reduced numbers (official site). Service charge 5%, or 10% for arrivals after 20:00 (Tabelog, Japanese text: 「サービス料一律5％、20時以降の入店は10%頂戴いたします。」). Cards (VISA, Master); no e-money or QR (Tabelog). 11 seats: a 7-seat counter and a table for 4; private hire for 5 or more (official site). Non-smoking; children welcome — give ages when booking (Tabelog). In a renovated old house on Ogawa south of Aneyakoji; 5 min from Karasuma Oike and Nijojo-mae Stns (Tabelog; January 2025). Opened June 2020 (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ogawa Aneyakoji, between Nijojo-mae and Karasuma Oike — 5 min from Karasuma Oike Stn',
    cuisine: 'Japanese cooking and sake: seasonal produce such as Ise lobster, eel and Kyoto vegetables grilled on a dedicated hearth over binchotan, with red miso soup made from the lobster shells (official site) · every sake in the shop can be bought to take home (official site) · omakase three-course meals ¥5,500 (April 2025) and ¥6,000 (November 2025), opening with many small appetizers — fuki miso, miso-cured egg and tofu, saba heshiko — then sashimi and soup (2025–26 reviews) · à la carte such as grilled fugu (November 2025) · sake events: an all-you-can-drink of 15 sakes including Aramasa with a mini kaiseki ¥13,000 (August 2025); Fukushima produce and sake (January and March 2026) · drinks are pricey — small beer ¥1,300, highballs from ¥1,200 (January 2025)',
    website: OF, gmaps: gm('日本料理と日本酒 惠史 京都'), menu_url: OF,
    notes: '[Japanese cuisine and sake · Nijo, a former Wakuden head chef’s counter] An 11-seat renovated townhouse where the owner, 17 years at Wakuden, cooks almost single-handed: a run of small sake snacks, sashimi, and seasonal fish, Ise lobster or eel over binchotan, from a ¥5,500 three-course omakase. Strong on sake, with frequent sake events; drinks are pricey and late arrivals pay 10% service. Strict cancellation fees.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed on the site’s pages read; "Tomofumi Hoshina" in a January 2025 review), formerly head chef of Murasakino Wakuden’s bento kitchen (official site)'], origin: null,
      background: 'Per the official site (店主紹介): born 28 June 1975; worked at 鶴清 from 1997 and joined Wakuden in April 1999, rising through the grill, the cutting board and the simmering station at Kyoto Wakuden in Kyoto Isetan, then becoming head chef of the Murasakino Wakuden bento workshop in the owner’s thirties, with further kaiseki work at Kodaiji, Nagoya and Osaka Wakuden; left in September 2016 after 17 years and opened 日本料理と日本酒 惠史 in June 2020. Some furniture and tableware date from the Edo period.',
      philosophy: 'To work worthy of the Wakuden name, in gratitude to the okami and seniors there (official site).', specialty: 'Charcoal-grilled seasonal dishes; sake.',
      anecdotes: [
        { text: 'An April 2025 first-timer was impressed by the variety of appetizers and how well the chef ran almost everything alone, with international staff and guests.', source: R + 'B504262041/' },
        { text: 'A January 2026 regular came for a Fukushima recovery dinner, for which the owner travelled to Fukushima to source the ingredients.', source: R + 'B509217196/' },
        { text: 'An April 2025 couple found some starters a bit salty and the five slices of seared kinmedai sashimi a little slight for the ¥5,500 course.', source: R + 'B504930842/' },
      ],
      japanese_sources_summary: '公式サイト: 古民家を改装した隠れ家、日本料理と日本酒 惠史 (さとし)、伊勢海老・鰻・京野菜などを専用の炉と備長炭で焼く炭焼料理、伊勢海老の殻の赤だし、店内の日本酒はすべて購入可、江戸時代からの家具や器、店主は老舗料亭 和久傳で料理長も務めた (1975年生まれ、1997年鶴清、1999〜2016年 和久傳、京都和久傳、紫野和久傳の弁当工房の料理長、高台寺・名古屋・大阪の和久傳)、2020年6月開業、12:00〜14:00 (予約のみ)・17:30〜23:00、不定休、11席 (カウンター7、テーブル4)、前日・当日キャンセルは一人一万円、懐石は100%。食べログ: サービス料一律5%、20時以降の入店は10%、カード (VISA・Master)。口コミ (2025年1月〜2026年3月、英語): おまかせ3品5,500円・6,000円、蕗味噌、味噌漬けの卵や豆腐、鯖のへしこ、焼き河豚、日本酒の飲み放題13,000円 (新政など15種)、福島の食材と酒の会、飲み物は高め。',
      confidence: 'high', sources: [TB, OF, OF + 'staff', OF + 'shop', R + 'B500156776/', R + 'B504262041/', R + 'B504930842/', R + 'B505668451/', R + 'B509217196/', R + 'B512911619/', R + 'B513427946/', R + 'B513464959/', R + 'B515993543/', R + 'B517673900/', R + 'B520224818/', R + 'B524446647/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead (cancellation fees apply); counter seats watch the cooking. International staff and guests (April 2025). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区宮木町小川通姉小路下ル471-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through March 2026.' },
    pin_source: `Tabelog ${TB} (35.009576, 135.754338); cross-checked: GSI 京都府京都市中京区宮木町471番地 (lot) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B504930842/', R + 'B517673900/', R + 'B512911619/', R + 'B500156776/'],
    price_note: 'Prices from 2025 reviews; 5% service (10% after 20:00).', last_checked: TODAY, items: [
      it('', '', 'Omakase three-course meal', '¥5,500', 'Courses', 'ask', 'no', 'April 2025; ¥6,000 in November 2025.', 'omakase3'),
      it('', '', 'Sake all-you-can-drink event with mini kaiseki', '¥13,000', 'Events', 'ask', 'no', 'August 2025.', 'sake_event'),
      it('', '', 'Beer, small bottle', '¥1,300', 'Drinks', 'no', 'ask', 'January 2025.', 'beer'),
      it('', '', 'Charcoal-grilled Ise lobster', '', 'Grill', 'ask', 'no', 'Official site.', 'ise_ebi'),
    ] }, {
    cuisine: '日本料理と日本酒: 伊勢海老、鰻、京野菜など旬の食材を専用の炉と備長炭で焼く。伊勢海老は殻の赤だしも (公式サイト)・店の日本酒はすべて購入可 (公式サイト)・おまかせ3品5,500円 (2025年4月)・6,000円 (2025年11月)。蕗味噌、味噌漬けの卵や豆腐、鯖のへしこなど多くの先付から刺身、椀へ (2025〜2026年の口コミ)・焼き河豚などの単品 (2025年11月)・日本酒の会: 新政など15種の飲み放題とミニ懐石13,000円 (2025年8月)、福島の食材と酒 (2026年1月・3月)・飲み物は高め: 小瓶のビール1,300円、ハイボール1,200円から (2025年1月)',
    neighborhood: '小川姉小路、二条城前と烏丸御池の間。烏丸御池駅から徒歩5分',
    gf_detail: '要確認。味噌漬けや醤油の料理、刺身、炭火焼きの魚介の会席風のコース (公式サイト、2025〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。鰹出汁の日本料理で、炭火焼きの伊勢海老、鰻、魚 (公式サイト、2025〜2026年の口コミ)。',
    notes: '[日本料理と日本酒・二条、和久傳出身の店主のカウンター] 古民家を改装した11席。和久傳で17年働いた店主がほぼ一人で、酒の肴の先付、刺身、備長炭で焼く旬の魚や伊勢海老、鰻を出す。おまかせ3品5,500円から。日本酒が充実し、酒の会も多い。飲み物は高めで、20時以降の入店はサービス料10%。キャンセル料は厳しめ。',
  });
}

// ================================================================ 早起亭うどん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26024926/'; const R = TB + 'dtlrvwlst/';
  const H = day(['06:00', '13:00']);
  put({
    id: 'kyoto_hayaokitei_udon', name: '京 聖護院 早起亭うどん (Hayaokitei Udon)', category: 'OMNI',
    lat: 35.015309, lng: 135.777009, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat udon from the neighbouring noodle factory; tempura (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: udon in dashi broth; egg, kamaboko and shrimp tempura toppings (2025–26 reviews). The vegetable tempura udon still comes in dashi (January 2026).',
    hours_raw: '6:00–13:00; closed Wednesday (Tabelog). Holiday hours vary and are posted on Tabelog (September 2026). Reservations accepted (Tabelog). CASH ONLY — no cards, e-money or QR (Tabelog). Self-service: order at the counter, collect your bowl, pay at the counter (February 2026). 12 table seats in a simple space beside the noodle factory, partly enclosed with plastic sheeting, plus outdoor tables (Tabelog; January–February 2026). Non-smoking; children welcome; 2 parking spaces, tight (Tabelog; April 2026). Beside 谷口製麺所 in Shogoin; 5 min from the Higashiyama Nijo bus stop, 8 min from Jingu-Marutamachi Stn (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shogoin, beside a noodle factory — 5 min from Higashiyama Nijo bus stop',
    cuisine: 'Morning udon from the noodle factory next door, made with water drawn from 70 m underground (November 2025) · okachan udon with egg ¥600; kitsune, tempura and shippoku udon ¥700; curry udon ¥800 (Tabelog) · nabeyaki udon (December 2025), vegetable tempura udon (January 2026) · oke udon or cold udon with dipping sauce — up to three servings for ¥1,000, with green onion, kinpira, shrimp tempura, kitsune and kamaboko (July and September 2026) · soft noodles that firm up when served cold (November 2025; August 2026)',
    website: 'https://sakyokita-kyoto.mypl.net/shop/00000347424/', gmaps: gm('早起亭うどん 聖護院'), menu_url: TB,
    notes: '[Udon · Shogoin, breakfast udon from 6 am] A plastic-curtained shed beside a Shogoin noodle factory serving udon from 6:00: kitsune, tempura or curry udon for ¥600–800, and cold tub udon — up to three servings for ¥1,000. Soft noodles in a gentle broth; order, collect and pay yourself. Popular with early travellers, cyclists and walkers. Cash only; closed Wednesday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: an udon shop in a simple space beside 谷口製麺所 (Taniguchi noodle factory). A November 2025 review says the noodles and broth are made with water from a well 70 m beneath the factory.',
      philosophy: null, specialty: 'Morning udon; cold oke udon.',
      anecdotes: [
        { text: 'A February 2026 traveller off an overnight bus came at 6:30 and chose an outside table to wake up.', source: R + 'B523589211/' },
        { text: 'A December 2025 regular shared the room with a cycling tour, elderly couples out for a morning walk and office workers.', source: R + 'B516693966/' },
        { text: 'A November 2025 visitor found the thin, very soft noodles not to personal taste.', source: R + 'B520013832/' },
      ],
      japanese_sources_summary: '食べログ: うどん・日本料理・天ぷら、左京区聖護院蓮華蔵町9 谷口製麺所脇・簡易スペース、東山二条バス停から徒歩約5分、6:00〜13:00、水曜休み、予約可、現金のみ、テーブル12席、禁煙、子供可、駐車場2台、おかあちゃんうどん (卵とじ) 600円、きつね・天ぷら・しっぽくうどん各700円、カレーうどん800円。口コミ (2025年11月〜2026年9月、英語): 製麺所の地下70mの井戸水、鍋焼きうどん、野菜天ぷらうどん、桶うどん・冷たいつけうどん (3玉まで1,000円)、セルフサービス、柔らかい麺、早朝の旅行者に人気。',
      confidence: 'medium', sources: [TB, R + 'B138416022/', R + 'B516693966/', R + 'B517916136/', R + 'B518112939/', R + 'B520013832/', R + 'B520454245/', R + 'B523589211/', R + 'B525261969/', R + 'B525486217/', R + 'B525563453/', R + 'B532302917/', R + 'B536624565/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by saying the dish at the counter, collect it yourself, pay in cash. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区聖護院蓮華蔵町9 谷口製麺所脇・簡易スペース',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (with September 2026 holiday hours); reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.015309, 135.777009); cross-checked: GSI 京都府京都市左京区聖護院蓮華蔵町9番地 (lot) 51m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B536624565/'],
    price_note: 'Prices from Tabelog remarks and September 2026.', last_checked: TODAY, items: [
      it('', '', 'Okachan udon (egg)', '¥600', 'Udon', 'no', 'no', 'Tabelog.', 'okachan_udon'),
      it('', '', 'Kitsune udon', '¥700', 'Udon', 'no', 'no', 'Tabelog.', 'kitsune_udon'),
      it('', '', 'Tempura udon', '¥700', 'Udon', 'no', 'no', 'Tabelog; November 2025.', 'tempura_udon'),
      it('', '', 'Curry udon', '¥800', 'Udon', 'no', 'no', 'Tabelog.', 'curry_udon'),
      it('', '', 'Oke udon (up to 3 servings)', '¥1,000', 'Udon', 'no', 'no', 'July and September 2026.', 'oke_udon'),
    ] }, {
    cuisine: '隣の製麺所の地下70mの井戸水で作る朝のうどん (2025年11月)・おかあちゃんうどん (卵とじ) 600円、きつね・天ぷら・しっぽくうどん700円、カレーうどん800円 (食べログ)・鍋焼きうどん (2025年12月)、野菜の天ぷらうどん (2026年1月)・桶うどんや冷たいつけうどんは3玉まで1,000円、ねぎ、きんぴら、海老天、きつね、かまぼこ付き (2026年7月・9月)・柔らかい麺で、冷たいとこしが出る (2025年11月、2026年8月)',
    neighborhood: '聖護院、製麺所の脇。東山二条バス停から徒歩5分',
    gf_detail: 'グルテンフリーではない。隣の製麺所の小麦のうどんと天ぷら (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。出汁のうどんに卵、かまぼこ、海老天 (2025〜2026年の口コミ)。野菜の天ぷらうどんも出汁 (2026年1月)。',
    notes: '[うどん・聖護院、朝6時からのうどん] 聖護院の製麺所の脇、ビニールで囲った小屋で朝6時からうどんを出す。きつね、天ぷら、カレーうどんが600〜800円、冷たい桶うどんは3玉まで1,000円。柔らかい麺とやさしい出汁。注文、受け取り、会計はセルフで。早朝の旅行者やサイクリスト、散歩の人に人気。現金のみ、水曜休み。',
  });
}

// ================================================================ 馬野郎
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26020996/'; const R = TB + 'dtlrvwlst/';
  const A = day(['16:30', '01:00']); const B = day(['16:30', '03:00']);
  put({
    id: 'kyoto_baniku_umayaro', name: '馬肉料理専門店 馬野郎 (Umayaro)', category: 'OMNI',
    lat: 35.004813, lng: 135.770335, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Horse sashimi with a sweet soy, yukhoe, yakiniku with sauces, sakura nabe, bibimbap (2026 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a horse-meat specialist — sashimi, liver, yakiniku and hot pot (2026 reviews).',
    hours_raw: '16:30–1:00; Fri, Sat and days before holidays 16:30–3:00; open almost every day (Tabelog). Reservations accepted, best made early for Fri–Sat (Tabelog). Appetizer charge ¥400 (Tabelog, Japanese text: 「お通し代 400円」). Cards, e-money and QR (Tabelog). 56 seats, cramped (Tabelog; August 2026). Smoking allowed at all seats (Tabelog; August 2026). 1F of SAKIZOビル north of Shijo on Kiyamachi; 2 min from Kyoto Kawaramachi Stn (Tabelog). Opened 21 September 2012 (Tabelog). Busy nights can stretch the young staff (October 2026).',
    hours: { 0: A, 1: A, 2: A, 3: A, 4: B, 5: B, 6: A }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi north of Shijo — 2 min from Kyoto Kawaramachi Stn',
    cuisine: 'Horse meat in every form (Tabelog) · assorted horse sashimi of five cuts, raw liver, yukhoe and a yukhoe rice bowl (July–October 2026) · horse yakiniku with staff advice on cuts and doneness; the Sakura yakiniku course and sakura nabe (June and September 2026) · bibimbap, homemade butter, a sweet-potato dessert (September–October 2026) · a raw egg on request for rice with the sweet sashimi soy (July 2026) · soft-drink all-you-can-drink ¥600 (August 2026)',
    website: null, gmaps: gm('馬肉料理専門店 馬野郎 木屋町'), menu_url: TB + 'dtlmenu/',
    notes: '[Horse meat · Kiyamachi Shijo, sashimi to yakiniku until late] A lively, smoky horse-meat specialist off Kiyamachi: mixed horse sashimi, sweet raw liver, yukhoe bowls, horse yakiniku and sakura nabe, with friendly young staff who explain the cuts. Open to 1:00, or 3:00 at weekends; smoking at every seat; ¥400 appetizer charge. Book for Friday and Saturday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a horse-meat specialist (yakiniku, shabu-shabu, horse dishes) opened 21 September 2012. Tabelog also lists 馬肉酒場 金山 馬野郎 in Nagoya. An August 2026 reviewer chose it as a regular entry in Tabelog’s top-100 lists that allows smoking at all seats.',
      philosophy: null, specialty: 'Assorted horse sashimi; horse liver.',
      anecdotes: [
        { text: 'A June 2026 group booked the Sakura yakiniku course, saw the sakura nabe next door, asked to switch, and were happily allowed to.', source: R + 'B530792827/' },
        { text: 'An August 2026 diner liked the assorted sashimi so much it was ordered twice, with different cuts the second time.', source: R + 'B534590156/' },
        { text: 'An October 2026 diner found the sashimi assortment underwhelming but the horse liver outstanding.', source: R + 'B537708710/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉・しゃぶしゃぶ・馬肉料理、中京区四条通木屋町二筋上ル西紙屋町368-1 SAKIZOビル 1F、京都河原町駅から徒歩2分、16:30〜翌1:00 (金土・祝前日は翌3:00まで)、ほぼ無休、予約可、お通し代400円、カード・電子マネー・QR 可、56席、全席喫煙可、2012年9月21日オープン、名古屋に 馬肉酒場 金山 馬野郎。口コミ (2026年6月〜10月、英語): 馬刺し5種盛り、生レバー、ユッケとユッケ丼、馬焼肉、さくら鍋、桜焼肉コース、ビビンバ、自家製バター、さつまいものデザート、ソフトドリンク飲み放題600円、若い店員が親切、席が狭い。',
      confidence: 'medium', sources: [TB, R + 'B495434352/', R + 'B524220156/', R + 'B530792827/', R + 'B534000414/', R + 'B534053567/', R + 'B534590156/', R + 'B535942134/', R + 'B535999737/', R + 'B537338523/', R + 'B537662006/', R + 'B537670400/', R + 'B537708710/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain the cuts and how to cook each one (September 2026); smoking at all seats; ¥400 appetizer charge. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区四条通木屋町二筋上ル西紙屋町368-1 SAKIZOビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004813, 135.770335); cross-checked: GSI 京都府京都市中京区紙屋町368番地 (lot; GSI does not find 西紙屋町) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534053567/', TB],
    price_note: 'One drinks price from August 2026; ¥400 appetizer (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Assorted horse sashimi (5 cuts)', '', 'Sashimi', 'ask', 'no', '2026 reviews.', 'basashi'),
      it('', '', 'Horse yukhoe rice bowl', '', 'Rice', 'ask', 'no', 'August 2026.', 'yukke_don'),
      it('', '', 'Sakura nabe', '', 'Hot pot', 'ask', 'no', 'June 2026.', 'sakura_nabe'),
      it('', '', 'Soft-drink all-you-can-drink', '¥600', 'Drinks', '', 'vegan', 'August 2026.', 'soft_nomihodai'),
      it('', '', 'Appetizer charge', '¥400', 'Charge', '', '', 'Tabelog.', 'otoshi'),
    ] }, {
    cuisine: 'あらゆる形の馬肉 (食べログ)・馬刺し5種盛り、生レバー、ユッケとユッケ丼 (2026年7月〜10月)・部位と焼き加減を教えてくれる馬焼肉、桜焼肉コースとさくら鍋 (2026年6月・9月)・ビビンバ、自家製バター、さつまいものデザート (2026年9月〜10月)・頼めば生卵も出て、甘い刺身醤油で卵かけご飯に (2026年7月)・ソフトドリンクの飲み放題600円 (2026年8月)',
    neighborhood: '四条の北の木屋町。京都河原町駅から徒歩2分',
    gf_detail: '要確認。甘い醤油の馬刺し、ユッケ、たれの焼肉、さくら鍋、ビビンバ (2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。馬肉の専門店 (刺身、レバー、焼肉、鍋) (2026年の口コミ)。',
    notes: '[馬肉・木屋町四条、刺身から焼肉まで夜遅くまで] 木屋町の脇の賑やかな馬肉の専門店。馬刺しの盛り合わせ、甘い生レバー、ユッケ丼、馬焼肉、さくら鍋を、部位を説明してくれる若い店員が出す。翌1時まで (週末は3時まで)、全席喫煙可、お通し400円。金土は予約を。',
  });
}

// ================================================================ 中国菜 燕燕
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26000500/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '14:30'], ['17:00', '22:00']);
  put({
    id: 'kyoto_chinese_enen', name: '中国菜 燕燕 (Chinese Sai Enen)', category: 'OMNI',
    lat: 35.02929, lng: 135.767202, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free as a menu: dim sum, spring rolls, sesame balls, kara-age, ramen (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, chicken, crab, egg and shrimp dishes (2026 reviews).',
    hours_raw: '11:00–14:30 and 17:00–22:00 (last order food 21:30, drinks 22:00); closed Thursday, at New Year and over the Chinese Spring Festival — call for details (Tabelog). Reservations accepted, and dinner fills up (Tabelog; September–October 2026). No service charge (Tabelog, Japanese text: 「なし」; Tabelog’s English wrongly says one may be added). No cards or e-money; PayPay accepted (Tabelog; October 2026). 42 seats at tables; non-smoking; children and strollers welcome (Tabelog). On Imadegawa west of Teramachi, facing north, near Doshisha University and the Imperial Palace; 6 min from Demachiyanagi Stn (Tabelog; November 2026).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Teramachi Imadegawa, across from the Imperial Palace — 6 min from Demachiyanagi Stn',
    cuisine: 'Over 50 dishes of Shanghai, Guangdong, Beijing and Sichuan home cooking from a chef who was head chef at a four-star hotel in China (September 2026) · lunch: daily special set ¥1,100 with free rice refills — mapo tofu, stir-fried yellow chives and pork (October–November 2026); dim sum set ¥1,980 with handmade shrimp shumai (September 2026); seasonal lunch course; fried rice set (September 2026) · dinner: Taiwanese century egg, mouth-watering chicken, tomato and egg, crab omelette, black-vinegar sweet and sour pork, spicy fried rice, medicinal hot-pot ramen (2026 reviews) · tea served in place of water (November 2026)',
    website: null, gmaps: gm('中国菜 燕燕 今出川'), menu_url: TB + 'dtlmenu/',
    notes: '[Chinese · Teramachi Imadegawa, a hotel chef’s home cooking] A calm neighbourhood Chinese restaurant by the Imperial Palace, cooking over 50 dishes from Shanghai to Sichuan with real spices: a ¥1,100 daily lunch set (mapo tofu, yellow chives and pork), a ¥1,980 dim sum set, and century egg, sweet and sour pork and spicy fried rice at night. Book dinner; cash or PayPay. Closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed), formerly head chef at a four-star hotel in China (September 2026)'], origin: null,
      background: 'Per a September 2026 review: the chef was formerly head chef at a four-star hotel in China and offers over 50 dishes of Shanghai, Guangdong, Beijing and Sichuan home cooking with authentic spices. Tabelog notes closures at New Year and over the Chinese Spring Festival.',
      philosophy: null, specialty: 'Mapo tofu; dim sum.',
      anecdotes: [
        { text: 'A November 2026 visitor was served tea instead of water by a staff member in a cute outfit, and had the ¥1,100 daily mapo tofu set with a rice refill.', source: R + 'B538472410/' },
        { text: 'An October 2026 regular always orders the Taiwanese century egg and noticed new and off-menu dishes.', source: R + 'B488635298/' },
        { text: 'A September 2026 family was glad to have booked during the holiday week — it was full.', source: R + 'B535902285/' },
      ],
      japanese_sources_summary: '食べログ: 中華料理・飲茶、上京区今出川通寺町西入ル大原口町211 1F、出町柳駅から徒歩6分、11:00〜14:30・17:00〜22:00、木曜休み、年末年始と春節は休み、予約可、サービス料なし、カード不可・PayPay 可、42席、禁煙、子供可。口コミ (2026年9月〜11月、英語): 中国の四つ星ホテルの料理長だった料理人、上海・広東・北京・四川の家庭料理50品以上、日替わりランチ1,100円 (ご飯おかわり可)、点心セット1,980円、ピータン、よだれ鶏、トマトと卵、かに玉、黒酢の酢豚、麻婆豆腐、韮黄と豚肉の炒め、薬膳鍋のラーメン、お茶が出る、夜は満席も。',
      confidence: 'medium', sources: [TB, R + 'B488635298/', R + 'B535056572/', R + 'B535584382/', R + 'B535821654/', R + 'B535902285/', R + 'B536085255/', R + 'B536554994/', R + 'B537059125/', R + 'B537126508/', R + 'B538452752/', R + 'B538472410/', R + 'B538544991/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order the daily set at lunch or à la carte at night; cash or PayPay. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市上京区今出川通寺町西入ル大原口町211 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.029290, 135.767202); cross-checked: GSI 京都府京都市上京区大原口町 (town only; no lot match) 32m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538472410/', R + 'B535056572/'],
    price_note: 'Prices from September and November 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Daily special lunch set', '¥1,100', 'Lunch', 'ask', 'no', 'November 2026.', 'daily_lunch'),
      it('', '', 'Dim sum lunch set', '¥1,980', 'Lunch', 'no', 'no', 'September 2026.', 'dimsum_set'),
      it('', '', 'Mapo tofu', '', 'Dishes', 'ask', 'no', 'October–November 2026.', 'mapo_tofu'),
      it('', '', 'Taiwanese century egg', '', 'Dishes', 'ask', 'no', 'September–October 2026.', 'century_egg'),
    ] }, {
    cuisine: '中国の四つ星ホテルの料理長だった料理人の、上海・広東・北京・四川の家庭料理50品以上 (2026年9月)・昼: 日替わりのセット1,100円 (ご飯おかわり可、麻婆豆腐や韮黄と豚肉の炒め) (2026年10月〜11月)、手作りの海老焼売の点心セット1,980円 (2026年9月)、季節の昼のコース、炒飯のセット (2026年9月)・夜: ピータン、よだれ鶏、トマトと卵、かに玉、黒酢の酢豚、辛い炒飯、薬膳鍋のラーメン (2026年の口コミ)・水の代わりにお茶 (2026年11月)',
    neighborhood: '寺町今出川、御所の向かい。出町柳駅から徒歩6分',
    gf_detail: 'グルテンフリーではない。点心、春巻き、ごま団子、唐揚げ、ラーメン (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚、鶏、蟹、卵、海老の料理 (2026年の口コミ)。',
    notes: '[中華・寺町今出川、ホテル出身の料理人の家庭料理] 御所近くの落ち着いた町の中華。本場の香辛料で上海から四川まで50品以上: 昼は1,100円の日替わり (麻婆豆腐、韮黄と豚肉)、1,980円の点心セット、夜はピータン、黒酢の酢豚、辛い炒飯など。夜は予約を。現金か PayPay。木曜休み。',
  });
}

save();
