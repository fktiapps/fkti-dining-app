// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 107.
//   + ふる里 (Showa-style izakaya on the 3rd floor above Hankyu Omiya Station, Shijo-Omiya; open to 01:20) — rest
//   + マーク (café-cafeteria in a renovated house south of Kyoto University Hospital; ¥900 daily set; since 2003) — rest
//   + 中華美食店 中光園 (Chinese lunch shop east of Kyoto Station, by the 塩小路高倉 bus stop; ¥950–1,200 sets) — rest
//   + SiZUK-サケノシズク (sake shop with a standing kaku-uchi counter on Shichijo near Kyoto Station; since 2022) — rest
//   - サラサ３ (26026924): skipped — same-concept branch of the さらさ cafés already in data (kyoto_sarasa_kayukoji).
//   - 珈琲館 京都東本願寺前店 (26020642): skipped — chain.
//   - コミュニティー ストア トゥーシー (26028610): skipped — too thin to verify.
//   - Ayatana (26039986), MAYFAIR (26033188): skipped — venues in big-chain hotels (Dusit Thani Kyoto; The Westin Miyako Kyoto).
//   Rest tier, nearest-first from `next rest 2000` in this lane (core and notable have nothing left). Fetched by this worker
//   with fetchshop.mjs (Tabelog /en/, 3 s between requests); ふる里 was already in this worktree's work/shops.
//   Dedupe (2026-11-26): none of the four is in data/kyoto.json (name, Tabelog id, address) or in another worker's pending
//   script (osw1-b108, osw13-b136, osw2-b97, osw9-b102).
//   Chain / group checks: ふる里, マーク and 中光園 are single shops (Tabelog; 中光園's own blog). SiZUK is run by HUG PROJECT＆Co. LLC
//   (official site); no other shop found; the director's MASU PROJECT is an events project (Sake World, 2024).
//   Romaji: none for ふる里, マーク or 中光園 — Tabelog's English listing names (Furusato, mArk, Chuka Bishoku Ten Chukoen) are not a
//   source; names stay in kana/kanji with whole-string gloss entries. SiZUK is written in Latin letters by the shop (sizuk.net), and
//   its reading さけのしずく comes from rurubu.jp. The director's name Kazuma Sasaki is from the human-written Sake World interview
//   (2024), which gives no kanji, so it stays Latin in JA text. 中光園's cook 彭 is given with the shop's own reading (ホウ).
//   No halal claims; no owner deaths; no posting bans. Remarks about other diners left out (single reviews only).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-26';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-107');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ ふる里
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26009446/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '01:20']);
  put({
    id: 'kyoto_furusato_shijo_omiya', name: 'ふる里', category: 'OMNI',
    lat: 35.003903, lng: 135.749441, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: no gluten-free claim. The board has many fried dishes and tempura — fried shrimp, kara-age, whitebait and conger-eel tempura, fried sweet shrimp — as well as sashimi and grilled fish (2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Vegan — ask: no vegan claim. The menu leans to seafood and meat, and the ¥300 appetizer served to everyone was a chilled conger-eel dish in July 2026; reviewers also had spicy pickled eggplant, aged pickles and a celery salad, ingredients not stated (2026 reviews).',
    hours_raw: 'Every day 17:00–01:20; closed the first and third Sundays of the month; hours may change (Tabelog). Reservations taken (Tabelog); reviewers advise phoning ahead — the shop was full by 18:00 in January 2026 and fully booked in March 2026, early-evening bookings are hard to get and there is no time limit, so the shop calls back when a seat frees up (December 2025); a 22:45 booking was welcomed in October 2026. Cash only: no cards, e-money or QR (Tabelog). Appetizer charge ¥300 (Tabelog: 「お通し300円」). 26 seats: 10 at the counter, 16 on tatami; private hire possible; smoking allowed; no parking (Tabelog). On the 3rd floor of 鳥居ビル, by lift, directly connected to Exit 3 of Hankyu Omiya Station (Tabelog; February 2024 and December 2025 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Shijo-Omiya — above Hankyu Omiya Station, Exit 3',
    cuisine: 'Showa-style izakaya with a long whiteboard of seafood, fried dishes and snacks (December 2025) · seafood platter of about 11 kinds, two pieces each, ¥1,800 (December 2025) · kombu-cured flounder, whitebait tempura, butterbur miso, miso-grilled Spanish mackerel and whale bacon (April 2026) · conger-eel tempura and pork kimchi, some dishes in half portions (May 2026); conger-eel tempura and celery salad (July 2026) · octopus sashimi, fried sweet shrimp, bitter gourd and tuna salad, aged pickles (July 2026) · yokowa (young bluefin) sashimi, spicy pickled eggplant, kara-age (September 2026) · fried shrimp with plenty of tartar sauce, potato salad, yakitori (September 2026) · Neapolitan spaghetti, popular on a December 2025 night · drinks: sake, shochu, wine and cocktails (Tabelog); fresh-fruit cocktails made with a whole fruit — kiwi, persimmon, pomegranate — kiwi ¥900, or as juice (December 2025); house sours (January 2026); fresh tomato highball (October 2026) · about ¥3,000–6,000 a head (Tabelog average; 2025–26 reviews)',
    website: null, gmaps: gm('ふる里 京都 下京区四条通大宮東入立中町478 鳥居ビル 3F'), menu_url: null,
    notes: '[Izakaya · Shijo-Omiya] A retro Showa-era izakaya up a lift on the 3rd floor right above Hankyu Omiya Station: a long whiteboard of fresh sashimi (an 11-kind platter for ¥1,800 in 2025), tempura, fried shrimp and seasonal small plates, plus whole-fruit cocktails and a tomato highball. Popular and often full — phone ahead. Cash only; open to 01:20; closed the 1st and 3rd Sunday.',
    chef_bio: { chef_name: null, roles: ['owner and proprietress (2026 reviews)'], origin: null,
      background: 'A long-established Kyoto izakaya, in a July 2026 reviewer’s words, with a retro, Showa feel (February 2024, May and September 2026). A regular who made at least four visits in 2026 writes of the warm smiles and chat of the owner and the proprietress, who make it feel like coming home (July 2026). An April 2026 diner watched three staff serve a nearly full room quickly; a July 2026 diner found the staff kind. A February 2026 diner found a woman on the staff — perhaps the owner, the reviewer guessed — quite unfriendly, and the chef much kinder, while praising the food and prices and noting many repeat customers.',
      philosophy: null, specialty: 'Seasonal sashimi and fried dishes from a long whiteboard; whole-fruit cocktails.',
      anecdotes: [
        { text: 'A September 2026 regular at the counter saw the diner alongside with a beautifully plated yokowa sashimi, ordered the same, and was glad of it.', source: R + 'B529231522/' },
        { text: 'A May 2026 regular got a little loud after a few drinks and was asked to keep it down — and took it as a sign of being a regular.', source: R + 'B529231522/' },
        { text: 'An October 2026 diner booked for 22:45 after work, was welcomed warmly, and called the fresh tomato highball the best in Japan.', source: R + 'B538393411/' },
      ],
      japanese_sources_summary: '食べログ: ふる里、居酒屋、阪急大宮駅すぐ、毎日17:00〜翌1:20、第1・第3日曜休み、予約可、カード・電子マネー・QR 不可、お通し300円、26席 (カウンター10席、座敷16席)、喫煙可、駐車場なし。口コミ (2023年3月〜2026年10月、英語): 昭和レトロな居酒屋、ホワイトボードの品書き、刺身盛り合わせ1,800円、果物を丸ごと使ったフルーツカクテル、トマトハイボール、電話予約がおすすめ。',
      confidence: 'medium', sources: [TB, R + 'B520255754/', R + 'B520733876/', R + 'B522546981/', R + 'B524798124/', R + 'B528135788/', R + 'B529152210/', R + 'B529231522/', R + 'B532227486/', R + 'B535222975/', R + 'B538393411/'] },
    cultural_comfort: { level: 'japanese', note: 'No English evidence found; the menu is a handwritten whiteboard that one reviewer found hard to read (December 2025), and Tabelog warns phone service may be Japanese only. Booking is by phone.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区四条通大宮東入立中町478 鳥居ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003903, 135.749441); GSI 立中町478 (lot) 35.003841, 135.749527, about 10 m; nearest pin kyoto_yuba_kameya_honke at 54 m; not cross-checked with OSM (worker, no OSM this round); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520255754/', TB],
    price_note: 'No published menu; whiteboard prices from reviews (December 2025) and the Tabelog appetizer charge.', last_checked: TODAY, items: [
      it('', '', 'Seafood platter (about 11 kinds, two pieces each)', '¥1,800', 'Sashimi', 'ask', 'no', 'December 2025.', 'sashimi_moriawase'),
      it('', '', 'Kiwi cocktail (whole fresh fruit)', '¥900', 'Drinks', 'ask', 'ask', 'December 2025; can be made as juice.', 'kiwi_cocktail'),
      it('お通し', '', 'Appetizer (cover charge)', '¥300', 'Appetizer', 'ask', 'ask', 'Tabelog.', 'otoshi'),
    ] }, {
    cuisine: '昭和レトロな居酒屋。ホワイトボードには魚介、揚げ物、つまみがびっしり (2025年12月)・約11種類を2切れずつの刺身盛り合わせ1,800円 (2025年12月)・ヒラメの昆布締め、しらすの天ぷら、ふき味噌、サワラの西京焼き、くじらベーコン (2026年4月)・ハモの天ぷらと豚キムチ、ハーフサイズの料理も (2026年5月)、ハモの天ぷらとセロリのサラダ (2026年7月)・タコの刺身、甘エビの唐揚げ、ゴーヤとツナのサラダ、古漬け (2026年7月)・ヨコワの刺身、なすの辛子漬け、唐揚げ (2026年9月)・タルタルたっぷりのエビフライ、ポテトサラダ、焼き鳥 (2026年9月)・2025年12月の夜にはナポリタンを頼む客が多かった・飲み物: 日本酒、焼酎、ワイン、カクテル (食べログ)。果物を丸ごと使ったフルーツカクテル (キウイ、柿、ザクロ)、キウイは900円、ジュースにもできる (2025年12月)、オリジナルのサワー (2026年1月)、生トマトのハイボール (2026年10月)・ひとり3,000〜6,000円ほど (食べログの平均、2025〜2026年の口コミ)',
    neighborhood: '四条大宮。阪急大宮駅3番出口の上',
    gf_detail: 'GF — 要確認。グルテンフリーの記載なし。ホワイトボードにはエビフライ、唐揚げ、しらすやハモの天ぷら、甘エビの唐揚げなど揚げ物が多く、刺身や焼き魚もある (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン — 要確認。ヴィーガンの記載なし。料理は魚介と肉が中心で、全員に出るお通し (300円) は2026年7月にはハモの冷たい一品。なすの辛子漬け、古漬け、セロリのサラダも口コミに出てくるが、材料は記載なし (2026年の口コミ)。',
    notes: '[居酒屋・四条大宮] 阪急大宮駅のすぐ上、ビルの3階にエレベーターで上がる昭和レトロな居酒屋。ホワイトボードにずらりと並ぶ新鮮な刺身 (2025年は11種盛り1,800円)、天ぷら、エビフライ、季節の小皿に、果物丸ごとのカクテルやトマトハイボール。人気でよく満席なので電話予約を。現金のみ。翌1:20まで。第1・第3日曜休み。',
  });
}

// ================================================================ マーク
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26000116/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:00', '20:00']);
  put({
    id: 'kyoto_mark_shogoin', name: 'マーク', category: 'OMNI',
    lat: 35.018009, lng: 135.777623, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: no gluten-free claim. Daily sets often include fried chicken, croquettes or tempura-style broccoli, and the menu has pasta, pita sandwiches and scones (2023–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Vegan — ask: no vegan claim. The daily set changes each day and usually centres on meat or seafood with an egg-and-cheese omelette; a soy-milk soup came with corn and egg (July 2024). Vegetable side dishes and salads are plentiful, ingredients not stated (2023–26 reviews).',
    hours_raw: 'Monday–Saturday 11:00–20:00 (last order 19:00), Sunday 11:00–17:00 (last order 16:00); closing days not fixed (Tabelog). Tabelog also notes that reservations can be made until 15:00 on the day (courses a day ahead) and that it then opens until 23:00 (last order 22:00); a June 2025 diner was told the shop mainly serves lunch and takes dinner by reservation only, with a 7-dish omakase course for ¥3,000 including tax and dessert. Lunch fills soon after noon and daily-set dishes can sell out by about 13:00 (July 2023, April 2024). Cards (AMEX), e-money and QR accepted (Tabelog); PayPay (March 2023). No service charge (Tabelog). 32 seats on two floors, sofas upstairs; private hire for 20–50; smoking allowed; no parking (Tabelog; 2024–25 reviews). Opened 8 August 2003 (Tabelog). Under 5 minutes’ walk east of Jingu-Marutamachi Station, 1 minute from the “Kumano Shrine” city bus stop (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W, 6: day(['11:00', '17:00']) }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shogoin, south of Kyoto University Hospital — behind Kumano Shrine',
    cuisine: 'Café-cafeteria with an Asian-leaning menu (July 2024) and a big daily set · daily set ¥900, lunch and evening (November 2023 to August 2025): three side dishes on one plate with salad, soup, rice and pickles — e.g. miso katsu, namul and an okra-enoki omelette (November 2023); bacon steak, namul and a chikuwa-cheese omelette (July 2023); fried chicken, clam and vermicelli salad and a mushroom-cheese omelette (January 2024); pork shabu, shrimp mayo and a green-bean cheese omelette (September 2024); beef stir-fry, a mushroom-cheese omelette and broccoli tempura with smoked mayonnaise (December 2025) · rice portions are large; ask for less, or a large serving at no extra cost (2023–24) · green curry ¥950 with Japanese rice (March 2023); Indonesian-style soboro rice (2024); beef and goya stir-fry with Shaoxing wine (April 2024); pita sandwich with beef, tomato and cheese (April 2024); ostrich sashimi on the menu (January 2024) · “today’s snack”: melon parfait ¥650 (July 2023), blue-cheese tart (November 2023); scones with coffee or royal milk tea (January 2024, October 2025) · dinner by reservation: 7-dish omakase course ¥3,000 with dessert — three appetizers (vegetable ajillo, shumai with myoga, seared bonito), goya champuru, large fried shrimp and sausage, shrimp fried rice with egg soup, fruit (June 2025) · sake, shochu, wine and cocktails (Tabelog); a row of Western spirits on the shelves (October 2026)',
    website: null, gmaps: gm('マーク 京都 左京区聖護院川原町35'), menu_url: null,
    notes: '[Café · Shogoin, near Kyoto University Hospital] A spacious, stylish café in a renovated old house on the lane south of Kyoto University Hospital, open since 2003: a ¥900 daily set of three side dishes, salad, soup and a big bowl of rice, Asian-leaning rice plates and curries, scones and parfaits, with sofas upstairs. Dinner courses by reservation. Cards and QR accepted.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 8 August 2003 (Tabelog). Reviewers describe a café renovated from an old traditional house (June 2025), roomier inside than it looks, with a high-ceilinged second floor and large sofas (April 2024, October 2025), relaxed background music (2023–25), and staff who adjust the rice to each diner (July 2024). A June 2025 family was greeted “we’ve been expecting you” for a private party, and the staff said researchers from the nearby hospital labs come for lunch and book dinners. An October 2026 diner saw many staff and visitors from Kyoto University Hospital.',
      philosophy: null, specialty: 'Daily set of three dishes; Asian-leaning rice plates.',
      anecdotes: [
        { text: 'A November 2023 diner asked for a little less rice and still got a mountain of it — then heard the staff double-check “a little less, right?” before it came out.', source: R + 'B129359910/' },
        { text: 'At a June 2025 private family dinner, the children made a game of guessing the titles of the unusual background music.', source: R + 'B508625109/' },
      ],
      japanese_sources_summary: '食べログ: マーク、カフェ・食堂、京阪神宮丸太町駅から東へ徒歩5分以内、市バスの熊野神社のバス停から徒歩1分、月〜土11:00〜20:00 (LO19:00)、日曜11:00〜17:00 (LO16:00)、不定休、当日15時までの予約で23:00 (LO22:00) まで営業 (コースは前日まで)、カード (AMEX)・電子マネー・QR 可、サービス料なし、32席、貸切20〜50名、喫煙可、駐車場なし、オープン2003年8月8日。口コミ (2021年4月〜2026年10月、英語): 900円の日替わり定食、ご飯は大盛り、グリーンカレー950円、インドネシア風そぼろご飯、メロンパフェ650円、夜は予約制の7品のおまかせコース3,000円、京大病院の近く。',
      confidence: 'medium', sources: [TB, R + 'B129359910/', R + 'B462705421/', R + 'B477602795/', R + 'B483070306/', R + 'B488002768/', R + 'B492127943/', R + 'B508131195/', R + 'B508625109/', R + 'B512255895/', R + 'B514929553/', R + 'B518544783/', R + 'B538355442/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No English evidence found; Tabelog warns phone service may be Japanese only. Order the daily set and say if you want less rice.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区聖護院川原町35',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.018009, 135.777623); GSI 聖護院川原町35 (lot) 35.017792, 135.777191, about 46 m; nearest pins kyoto_kitchen_kujira 26 m and kyoto_botan_shogoin 27 m (different addresses, 聖護院山王町); not cross-checked with OSM (worker, no OSM this round); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B477602795/', R + 'B462705421/', R + 'B508625109/', R + 'B129359910/'],
    price_note: 'No published menu; review prices (2023–25).', last_checked: TODAY, items: [
      it('', '', 'Daily set (three dishes, salad, soup, rice, pickles)', '¥900', 'Set meal', 'ask', 'ask', 'Lunch and evening, 2023–25.', 'daily_set'),
      it('', '', 'Green curry', '¥950', 'Curry', 'ask', 'ask', 'March 2023.', 'green_curry'),
      it('', '', 'Melon parfait (today’s snack)', '¥650', 'Dessert', 'ask', 'no', 'July 2023; with vanilla ice cream, jelly and biscuits.', 'melon_parfait'),
      it('', '', 'Omakase dinner course, 7 dishes with dessert', '¥3,000', 'Course', 'ask', 'ask', 'June 2025, tax included; by reservation.', 'omakase_course'),
    ] }, {
    cuisine: 'アジア寄りのメニュー (2024年7月) と、ボリュームのある日替わり定食のカフェ食堂・日替わり定食900円、昼も夜も (2023年11月〜2025年8月): おかず3品をワンプレートに、サラダ、スープ、ご飯、漬物付き。例: 味噌カツ、ナムル、オクラとえのきのオムレツ (2023年11月)、ベーコンステーキ、ナムル、ちくわチーズオムレツ (2023年7月)、唐揚げ、あさりと春雨のサラダ、きのこチーズオムレツ (2024年1月)、豚しゃぶ、エビマヨ、いんげんのチーズオムレツ (2024年9月)、牛肉の炒め物、きのこチーズオムレツ、ブロッコリーの天ぷらと燻製マヨネーズ (2025年12月)・ご飯は多め。少なめにも、無料で大盛りにもできる (2023〜2024年)・グリーンカレー950円、タイ米ではなく日本の米 (2023年3月)、インドネシア風そぼろご飯 (2024年)、牛肉とゴーヤの紹興酒炒め (2024年4月)、牛肉・トマト・チーズのピタサンド (2024年4月)、メニューにはダチョウの刺身も (2024年1月)・「本日のおやつ」: メロンパフェ650円 (2023年7月)、ブルーチーズのタルト (2023年11月)。スコーンとコーヒーやロイヤルミルクティー (2024年1月、2025年10月)・夜は予約制: デザート付き7品のおまかせコース3,000円。前菜3品 (野菜たっぷりのアヒージョ、みょうがをのせた焼売、カツオのたたき)、ゴーヤチャンプルー、大きなエビフライとソーセージ、エビチャーハンと卵スープ、果物 (2025年6月)・日本酒、焼酎、ワイン、カクテル (食べログ)。棚には洋酒のボトルが並ぶ (2026年10月)',
    neighborhood: '聖護院、京大病院の南。熊野神社の裏',
    gf_detail: 'GF — 要確認。グルテンフリーの記載なし。日替わり定食には唐揚げ、コロッケ、ブロッコリーの天ぷらなどがよく入り、パスタ、ピタサンド、スコーンもある (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン — 要確認。ヴィーガンの記載なし。日替わり定食は日によって替わり、たいてい肉か魚介に卵とチーズのオムレツ。豆乳スープにはコーンと卵 (2024年7月)。野菜のおかずやサラダは多いが、材料は記載なし (2023〜2026年の口コミ)。',
    notes: '[カフェ・聖護院、京大病院の近く] 京大病院の南の路地、古い町家を改装した広くておしゃれなカフェ。2003年から。おかず3品にサラダ、スープ、山盛りのご飯の日替わり定食900円、アジア寄りのご飯ものやカレー、スコーンやパフェ。2階にはソファ席。夜は予約制のコース。カード・QR 可。',
  });
}

// ================================================================ 中華美食店 中光園
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26017180/'; const R = TB + 'dtlrvwlst/';
  const BLOG = 'http://chukabisyoku.blog.fc2.com/', NEWS = BLOG + 'blog-entry-1.html', HELLO = BLOG + 'blog-entry-2.html', COOK = BLOG + 'blog-entry-3.html', SHOP = BLOG + 'blog-entry-4.html';
  const L = day(['11:00', '14:00']);
  put({
    id: 'kyoto_chukoen_shiokoji', name: '中華美食店 中光園', category: 'OMNI',
    lat: 34.987429, lng: 135.76360, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: no gluten-free claim. Ramen, Tianjin noodles and dandan noodles are wheat noodles, the set side dishes have included dumplings and chijimi, and yurinchi and kara-age are fried (2019–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the set soup is a chicken-stock and egg soup, and the mains reviewers describe are meat or egg dishes — sweet-and-sour pork, yurinchi, crab omelette, Tianjin rice (2019–26 reviews). No vegan claim.',
    hours_raw: 'Lunch only, 11:00–14:00; closed Wednesday and Saturday (shop’s blog notice: open again from 1 April 2025; Tabelog the same, open on public holidays). The blog notice also says the Chinese head chef is absent for the time being, so the shop asks guests to come for set meals, ramen and fried rice at lunch (set ¥1,200, ramen and fried rice ¥950 each). Order and pay at the register first, then take a cup and sit; rice refills free (May 2025, 2019). Banquets by reservation; private hire for 4 or more; bookings on closing days negotiable (Tabelog; blog). Seats: 20 (Tabelog); up to 16, 5 tables and 4 at the counter (blog). Tabelog marks it non-smoking; the blog’s shop page says smoking allowed. No cards; e-money and QR accepted (Tabelog). No parking; the pay car park north of the shop closed at the end of February 2024, bicycles and motorbikes can stop in front (blog). The 塩小路高倉 city bus stop is right in front (buses 16, 205, 81, special 81); 15 minutes’ walk from Kyoto Station, 441 m from Keihan Shichijo (blog; Tabelog).',
    hours: { 0: L, 1: L, 3: L, 4: L, 6: L }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'East of Kyoto Station — by the 塩小路高倉 bus stop',
    cuisine: 'Neighbourhood Chinese lunch shop: set meals, ramen and fried rice · blog (2025): set meal ¥1,200, ramen and fried rice ¥950 each · the blog’s menu notes: hot but generous Sichuan tantanmen, and for those who don’t like heat soy-sauce chuka soba, dongpo-pork noodles and chashu noodles; casual dishes up to elaborate banquet cooking, Sichuan, Shanghai, Beijing and Cantonese · reviews: daily set of crab omelette with added dandan noodles ¥950, free rice refills (March 2019); “extremely spicy, but delicious” (August 2017) · sweet-and-sour pork ¥950, +¥40 for the set of soup, rice, kimchi, a kara-age and steamed-chicken salad and dessert (2023, May 2024), with water dumplings and chijimi (April 2024); one price of ¥990 for every set, with dim sum and a stir-fry as the two small dishes (November 2023) · Tianjin noodles with thick, fluffy egg (November 2023); Tianjin rice, a generous portion (October 2026) · yurinchi set, large crispy chicken pieces, the large rice at no extra cost (May 2025); ramen with half rice (March 2026)',
    website: BLOG, gmaps: gm('中華美食店 中光園 京都 下京区上之町18-16'), menu_url: null,
    notes: '[Chinese · east of Kyoto Station] A homely Chinese lunch shop by the 塩小路高倉 bus stop, 15 minutes’ walk east of Kyoto Station: order and pay at the register, then sweet-and-sour pork, yurinchi or Tianjin rice as a set with soup, small dishes and free rice refills (about ¥950–1,200). Lunch only, 11:00–14:00; closed Wednesday and Saturday.',
    chef_bio: { chef_name: null, roles: ['cook 彭 (ホウ), per the shop’s blog — absent for now (2025 notice)'], origin: null,
      background: 'The shop’s blog: it reopened after a renewal on 7 October 2011 as a Chinese restaurant with a new cook holding a national special-grade licence and over 20 years’ experience, while keeping the old 中光園 dishes for limited periods. The cook, 彭 (ホウ), is from Chongqing in Sichuan, is good at spicy food and eats it too, adjusts sweetness and heat to each guest, and also cooks Shanghai, Beijing and Cantonese dishes. The shop closed from 7 May 2022 and reopened on 1 March 2023 in a changed format; a later notice says it has been open since 1 April 2025, lunch only, with the Chinese head chef absent for the time being (blog). Reviewers: the owner asked how the meal was and invited a family back (May 2025); every staff member was relieved when a diner came back for a bag left behind, which the shop had kept safe (March 2026); a June 2023 diner found everything cold, and a May 2025 diner’s rice went cold while the yurinchi was still cooking.',
      philosophy: 'Adjusts sweetness and spice to each guest’s taste (shop’s blog).', specialty: 'Set meals — sweet-and-sour pork, yurinchi, Tianjin rice; Sichuan tantanmen (blog).',
      anecdotes: [
        { text: 'In March 2026 a diner left a bag behind, realised on the bus, phoned, and came back to find it kept safe and all the staff relieved.', source: R + 'B523900755/' },
        { text: 'A May 2025 family ordered a large yurinchi set to share with the child and were surprised the price stayed the same.', source: R + 'B507298122/' },
      ],
      japanese_sources_summary: '店のブログ (中華美食店　中光園ホームページ): 2025年4月1日より営業、開店11:00〜14:00、定休日は水曜・土曜、当分は中国人料理長が不在、定食1200円、ラーメン・チャーハン各950円。2024年: 店舗北側の有料駐車場が2月末で閉鎖。2022年5月7日から休み、2023年3月1日に形態を変えて再開。2011年10月7日にリニューアルオープン、20年以上の調理経験を持つ国家認定特級の新しいコック。四川坦々麺、醤油ベースの中華そば、東坡肉麺、叉焼麺。料理人「彭 (ホウ)」は四川の重慶市出身、辛い料理が得意、お客様の好みに合わせて甘辛を調節、上海料理・北京料理・広東料理も。席数最大16席 (テーブル5、カウンター4)、喫煙可、4名以上で貸切可、京都駅から徒歩15分、店正面に市バス「塩小路高倉」。食べログ: 中華美食店 中光園、中華料理、月・火・木・金・日・祝日 11:00〜14:00、水・土休み、20席、禁煙、カード不可、電子マネー・QR 可。口コミ (2017年5月〜2026年10月、英語): 酢豚定食、油淋鶏定食、天津飯、天津麺、ご飯おかわり無料、先にレジで注文と支払い。',
      confidence: 'medium', sources: [TB, BLOG, NEWS, HELLO, COOK, SHOP, R + 'B285907591/', R + 'B412827010/', R + 'B467463218/', R + 'B483866002/', R + 'B506733265/', R + 'B507298122/', R + 'B523900755/', R + 'B524506903/', R + 'B526624334/', R + 'B537886537/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No English evidence found; the blog is in Japanese and Tabelog warns phone service may be Japanese only. Order and pay at the register before sitting down.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区上之町18-16',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop’s blog notice of reopening from 1 April 2025; Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.987429, 135.763600); GSI 上之町18 (lot) 34.987034, 135.763336, about 50 m; nearest pin mp_yamamoto_manbo at 89 m; not cross-checked with OSM (worker, no OSM this round); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [NEWS, R + 'B483866002/', R + 'B526624334/'],
    price_note: 'Shop’s blog notice (2025); lower set prices in 2023–24 reviews (¥990).', last_checked: TODAY, items: [
      it('定食', '', 'Set meal', '¥1,200', 'Set meal', 'ask', 'no', 'Blog, 2025.', 'teishoku'),
      it('ラーメン', '', 'Ramen', '¥950', 'Noodles', 'no', 'no', 'Blog, 2025.', 'ramen'),
      it('チャーハン', '', 'Fried rice', '¥950', 'Rice', 'ask', 'no', 'Blog, 2025.', 'chahan'),
      it('', '', 'Sweet-and-sour pork', '¥950', 'Main', 'ask', 'no', 'April 2024; +¥40 as a set.', 'subuta'),
    ] }, {
    cuisine: '定食、ラーメン、チャーハンの町の中華のお昼の店・ブログ (2025年): 定食1200円、ラーメン・チャーハン各950円・ブログの料理紹介: 辛いけれどボリュームたっぷりの四川坦々麺。辛いのが苦手なら醤油ベースの中華そば、東坡肉麺、叉焼麺。庶民的な中華から手間をかけた高級中華まで、四川・上海・北京・広東・口コミ: かに玉の日替わり定食に担々麺を足して950円、ご飯おかわり無料 (2019年3月)。「とても辛いがおいしい」 (2017年8月)・酢豚950円、＋40円でスープ、ご飯、キムチ、唐揚げと蒸し鶏のサラダ、デザートのセットに (2023年、2024年5月)、水餃子とチヂミも (2024年4月)。定食はどれも990円、小鉢は点心と炒め物の2品 (2023年11月)・厚くふわふわの卵の天津麺 (2023年11月)、量の多い天津飯 (2026年10月)・油淋鶏定食、大きなカリッとした鶏肉、ご飯の大盛りも同じ値段 (2025年5月)。ラーメンと半チャン (2026年3月)',
    neighborhood: '塩小路高倉、京都駅の東',
    gf_detail: 'GF — 要確認。グルテンフリーの記載なし。ラーメン、天津麺、担々麺は小麦の麺。定食の小鉢には餃子やチヂミが付いたことがあり、油淋鶏や唐揚げは揚げ物 (2019〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。定食のスープは鶏がらと卵のスープで、口コミに出てくる主菜は酢豚、油淋鶏、かに玉、天津飯など肉や卵の料理 (2019〜2026年の口コミ)。ヴィーガンの記載なし。',
    notes: '[中華・塩小路高倉、京都駅の近く] 市バス「塩小路高倉」の目の前、京都駅から東へ徒歩15分の家庭的な中華のお昼の店。先にレジで注文と支払いをして、酢豚、油淋鶏、天津飯などをスープ、小鉢、おかわり自由のご飯付きの定食で (950〜1,200円ほど)。昼のみ11:00〜14:00。水曜・土曜休み。',
  });
}

// ================================================================ SiZUK-サケノシズク
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26038606/'; const R = TB + 'dtlrvwlst/';
  const HP = 'https://sizuk.net', IG = 'https://www.instagram.com/sizuk_sake/';
  const SW = 'https://en.sakeworld.jp/special/20240307-sakenosizuk/', RURUBU = 'https://rurubu.jp/andmore/spot/80132933';
  const H = day(['15:00', '24:00']);
  put({
    id: 'kyoto_sizuk_shichijo', name: 'SiZUK-サケノシズク (SiZUK)', category: 'OMNI',
    lat: 34.989333, lng: 135.758076, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: no gluten-free claim. Mostly sake and shochu, with small snacks such as heshiko, grilled ray fin, plum kelp and meat-miso peppers (2025–26 reviews); craft beer is also sold (August 2026). How the snacks are seasoned is not stated.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Vegan — ask: no vegan claim. Snacks reviewers had are mostly fish or meat — heshiko, ray fin, meat miso — with a Kyoto eggplant dish in December 2025; ingredients not stated.',
    hours_raw: 'Tuesday–Sunday 15:00–24:00; closed Monday (official site; Tabelog; rurubu). Earlier hours were 11:00–20:00, to 24:00 on Fridays and Saturdays (Sake World, 2024), and a December 2025 reviewer notes it used to open at 11:00. A “senbero” deal until 18:00 (October 2026). A standing bar (Tabelog category). Reservations taken; take-out (Tabelog); bottles to take home (2025–26 reviews). Cards (AMEX), e-money and QR accepted; non-smoking; no parking (Tabelog). Opened November 2022 (Sake World). About 5 minutes from the Karasuma exit of JR Kyoto Station, on Shichijo-dori (Tabelog; December 2025 review).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shichijo-Karasuma — 5 min from Kyoto Stn',
    cuisine: 'Sake shop with a standing kaku-uchi counter (official site: 「國酒専門店」, kaku-uchi style) · about 80 sakes bought directly from 15 partner breweries, rotated by season, in 720 ml bottles; taste a glass before you buy (Sake World, 2024) · tasting flights: two for ¥1,000 or three for ¥1,300, chosen by the staff to your taste (December 2025); three-sake flight ¥1,300 (August and November 2026) — tell the owner what you like (November 2026) · sakes from Kyoto, Fukushima, Yamaguchi and elsewhere, seasonal limited releases (December 2025); three from Kyoto’s Joyo series, including a 2025 test brew (August 2026); a sparkling nigori (November 2026) · also craft gin, vodka and beer, and shochu (August 2026; December 2025) · snacks: meat-miso crispy peppers ¥500 (August 2026); assorted snacks ¥1,300 — plum kelp, grilled ray fin, grilled saba heshiko (November 2026); grilled ray fin (January 2026); a Kyoto eggplant dish (December 2025) · about ¥1,000–4,000 a head (Tabelog average; 2025–26 reviews)',
    website: HP, gmaps: gm('SiZUK サケノシズク 京都 下京区西境町162'), menu_url: null,
    notes: '[Sake bar · Shichijo, near Kyoto Station] A stylish neon-lit sake shop on Shichijo-dori, five minutes from Kyoto Station, with a standing counter: tell the staff what you like and get a flight of three sakes for ¥1,300, with small snacks like heshiko and grilled ray fin, then buy a bottle of your favourite to take home. Open 15:00–24:00; closed Monday.',
    chef_bio: { chef_name: 'Kazuma Sasaki', roles: ['Director (Sake World, 2024)'], origin: null,
      background: 'Sake World (2024): director Kazuma Sasaki worked for about 15 years in Kyoto restaurants, started the MASU PROJECT to spread sake culture, takes part in the nationwide Sake Go-Around event held with Sake Day, visits every brewery the shop buys from, and opened SiZUK in November 2022 as a place where people can meet over sake; the director’s family runs a tuna shop at the Kyoto City Central Market, the source of some seasonal snacks; the shop holds sake events and study groups. The official site names the operator as HUG PROJECT＆Co. LLC. Reviewers describe a young owner (December 2025), an owner who picks sakes to each guest’s taste (October 2025, November 2026), knowledgeable staff (December 2025), a modern, neon-lit room with a slope leading inside (October 2025, November 2026), and many regulars who were friendly to a first-timer (November 2026).',
      philosophy: '“We want to create a place where you can meet people for drinks” (Sake World, 2024).', specialty: 'Staff-chosen sake flights; bottles to take home.',
      anecdotes: [
        { text: 'An August 2026 visitor asked for local sakes and got a flight from one Kyoto brewery, liked the 2025 test brew best, and bought a bottle of it on the way out.', source: R + 'B533955961/' },
        { text: 'A June 2026 visitor with time to kill before leaving Kyoto Station had the bar almost alone and was told the crowd usually comes in the evening.', source: R + 'B535114330/' },
      ],
      japanese_sources_summary: '公式サイト (sizuk.net): SiZUK-サケノシズクは京都市下京区の國酒専門店、角打ちスタイルも提供、15:00-24:00、定休日月曜日、HUG PROJECT＆Co. LLC.、Instagram sizuk_sake。るるぶ: SiZUK-サケノシズク (さけのしずく)、七条烏丸に立つスタイリッシュな酒屋、15時〜翌0時、月曜休み。食べログ: SiZUK、日本酒バー・立ち飲み、火〜日15:00〜24:00、月曜休み、予約可、テイクアウト可、カード (AMEX)・電子マネー・QR 可、禁煙。Sake World (2024年、英語): ディレクター Kazuma Sasaki、2022年11月オープン、15の蔵から約80種類。口コミ (2023年9月〜2026年11月、英語): 3種の飲み比べ1,300円、店主が好みに合わせて選ぶ、へしこやエイヒレのつまみ、18時までのせんべろ。',
      confidence: 'medium', sources: [TB, HP, IG, SW, RURUBU, R + 'B459880693/', R + 'B515925053/', R + 'B519068656/', R + 'B522363432/', R + 'B522419562/', R + 'B526301608/', R + 'B533955961/', R + 'B535114330/', R + 'B537877571/', R + 'B539088637/', R + 'B539268917/', R + 'B539832133/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'The official site has a line of English and an English-language Sake World interview covers the shop; no English service reported. Staff choose sakes from your stated preferences.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区西境町162',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (hours, address); Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (34.989333, 135.758076); GSI 西境町162 (lot) 34.989372, 135.757935, about 14 m; the same lot as kyoto_sakesora (address_ja 「京都府京都市下京区西境町162 日々是好日 1F 東」), whose pin is 8 m away — SiZUK’s sources do not name a building, so the Tabelog point is kept (not stacked); not cross-checked with OSM (worker, no OSM this round); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B519068656/', R + 'B533955961/', R + 'B539268917/'],
    price_note: 'No published menu; review prices (December 2025 to November 2026).', last_checked: TODAY, items: [
      it('', '', 'Sake tasting flight, three kinds', '¥1,300', 'Drinks', 'ask', 'ask', '2025–26; two kinds ¥1,000 (December 2025).', 'tasting_3'),
      it('', '', 'Meat-miso crispy peppers', '¥500', 'Snacks', 'ask', 'no', 'August 2026.', 'nikumiso_peppers'),
      it('', '', 'Assorted snacks: plum kelp, grilled ray fin, grilled saba heshiko', '¥1,300', 'Snacks', 'ask', 'no', 'November 2026.', 'assorted_snacks'),
    ] }, {
    cuisine: '角打ちの立ち飲みカウンターがある酒屋 (公式サイト: 「國酒専門店」、角打ちスタイル)・15の取引先の蔵から直接仕入れる約80種類を季節ごとに入れ替え、720mlの瓶で。買う前に1杯から試飲できる (Sake World、2024年)・飲み比べ: 2種1,000円、3種1,300円、好みに合わせて店の人が選ぶ (2025年12月)。3種の飲み比べ1,300円 (2026年8月・11月)、好みを伝えると店主が選んでくれる (2026年11月)・京都、福島、山口などの日本酒、季節限定の酒 (2025年12月)。京都の Joyo シリーズ3種、2025年の試験醸造酒も (2026年8月)。スパークリングのにごり酒 (2026年11月)・クラフトジン、ウォッカ、ビール、焼酎も (2026年8月、2025年12月)・つまみ: 肉味噌のパリパリピーマン500円 (2026年8月)、おすすめのつまみ盛り合わせ1,300円 (梅昆布、エイヒレ焼き、サバのへしこ焼き、2026年11月)、エイヒレ焼き (2026年1月)、京なすの一品 (2025年12月)・ひとり1,000〜4,000円ほど (食べログの平均、2025〜2026年の口コミ)',
    neighborhood: '七条烏丸。京都駅から徒歩5分',
    gf_detail: 'GF — 要確認。グルテンフリーの記載なし。日本酒と焼酎が中心で、つまみはへしこ、エイヒレ焼き、梅昆布、肉味噌のピーマンなど (2025〜2026年の口コミ)。クラフトビールも販売 (2026年8月)。つまみの味付けは記載なし。',
    vegan_detail: 'ヴィーガン — 要確認。ヴィーガンの記載なし。口コミに出てくるつまみはへしこ、エイヒレ、肉味噌など魚や肉が中心で、2025年12月には京なすの一品。材料は記載なし。',
    notes: '[日本酒バー・七条、京都駅の近く] 京都駅から徒歩5分、七条通のネオンがおしゃれな酒屋の立ち飲みカウンター。好みを伝えると3種の飲み比べを1,300円で選んでくれて、へしこやエイヒレなどのつまみと一緒に。気に入った酒は瓶で持ち帰れる。15:00〜24:00、月曜休み。',
  });
}

// ================================================================ skips
skip('26026924', 'same-concept branch of a brand already in data: サラサ３ is one of the さらさ cafés of 株式会社サラサ (kyoto_sarasa_kayukoji, background: 「The company now runs さらさ西陣 (in a former public bath), さらさ花遊小路, さらさ3, サラサケーキ工房 and CLAMP COFFEE」).');
skip('26020642', 'chain: 珈琲館 京都東本願寺前店 is a branch of the coffee-shop chain 珈琲館 (珈琲館 渋谷店 is in Tokyo data; same call as the osw9-72 skip of 26042693).');
skip('26028610', 'too thin to verify: コミュニティー ストア トゥーシー is a select shop and gallery with a coffee counter (t-o-s-e-e.jp; Tabelog); only one 2025–26 review (May 2026, an iced coffee ¥600), the rest from 2017–2021.');
skip('26039986', 'big-chain hotel venue (Greg 11-08 ruling): Ayatana is the Thai restaurant of Dusit Thani Kyoto (Tabelog address 「デュシタニ京都」, "Hotel restaurant" tag, website dusit.com), a hotel of Dusit International — same call as 26040049 (osw8-104) and 26040378 (osw13-133).');
skip('26033188', 'big-chain hotel venue (Greg 11-08 ruling): MAYFAIR is the tea lounge on the 2nd floor of The Westin Miyako Kyoto (Tabelog highlights, "Hotel restaurant" tag); Westin is a Marriott International brand, and the hotel’s 洛空 record (kyoto_westin_miyako_raku) is hidden as chain-hotel.');

save();
