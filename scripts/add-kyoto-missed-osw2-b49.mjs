// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 49.
//   Queue run from the osw2 worktree, 2026-11-07.
//   core (queue.mjs kyoto-missed next core 200, lane ids in order):
//   + 純豆腐太閤 Sundubu Taiko (sundubu-jjigae shop east of Kyoto Station; since 2020)
//   - 京 to 串 to 揚 和紋 — skipped: sub-brand of a large parent (株式会社THAN, 26 brands / 60 shops).
//   + 接方来 京都タワー店 Seppourai Kyoto Tower (Kyoto-vegetable izakaya in the Kyoto Tower building) — invoice 株式会社黛 (Kyoto);
//     two 接方来 shops (this and 京都駅ビル店); a local group, drafted as with other local multi-shop operators.
//   notable (queue.mjs kyoto-missed next notable 200, lane ids in order):
//   - 梅園 清水店 — skipped: chain (five 梅園 shops on the official site).
//   - 焼肉 弘商店 京都駅西 — skipped: chain (弘 group).
//   - ごはんや一芯 京都 — skipped: a branch of a multi-city group (FOODGATE, Tokyo; four 一芯 shops); flagged.
//   + 京都ダイニング正義 Kyoto Dining Masayoshi (wagyu sukiyaki and steak in a 150-year-old townhouse off Kawaramachi-Sanjo; since 2016)
//   + 京都焼肉 enen 先斗町本店 Kyoto Yakiniku enen Pontocho (A5 wagyu yakiniku in Pontocho; since 2020) — 株式会社ｅｎｅｎ (invoice),
//     two shops (this and 京都餃子enen 祇園本店).
//   None of the four is in data/kyoto.json: grep by id, name and address found none.
//   Service charges: 太閤 ¥600 per person per 15 min past closing (Tabelog); enen none; 正義 none (Tabelog original text: なし);
//   none listed for 接方来.
//   Remarks about other diners kept only where several reviews agree.
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-49');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26041413', '京 to 串 to 揚 和紋: a sub-brand of a large parent — Tabelog names than.co.jp, whose brand page (read 2026-11-07) gives 株式会社THAN with 26 brands and 60 shops, including 原価ビストロ チーズプラス (23 shops)');
skip('26001861', '梅園 清水店: a chain — the official site (umezono-kyoto.com, read 2026-11-07) lists 河原町店, 清水店, 三条寺町店, 梅園 oyatsu and 西武池袋店; 梅園 河原町店 is already in data');
skip('26034639', '焼肉 弘商店 京都駅西: a chain — the 弘 group site (yakiniku-hiro.com/shop, read 2026-11-07) lists eight 京の焼肉処 弘 shops (千本三条本店, 三条木屋町店, 京都駅前店, 八条口店, 京都タワーサンド店, 西院店, 四条木屋町店, 山科駅前店) plus 京やきにく 弘 and 焼肉 弘商店; our crawl has three 弘商店 shops');
skip('26031213', 'ごはんや一芯 京都: a branch of a multi-city group — Tabelog names foodgate.net; FOODGATE (Tokyo) lists four ごはんや一芯 shops (代官山, 梅田, 京都六角, 神戸) among about twelve shops of six brands in Tokyo, Osaka, Kobe, Hiroshima and Kyoto (foodgate.net/shop, read 2026-11-07) — not a local group; flagged for the coordinator');

// ================================================================ 純豆腐太閤
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26033859/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '14:00'], ['17:30', '21:00']); const WE = day(['11:30', '14:30'], ['17:30', '21:30']);
  put({
    id: 'kyoto_sundubu_taiko', name: '純豆腐太閤 (Sundubu Taiko)', category: 'OMNI',
    lat: 34.98704388788248, lng: 135.76466087017764, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sundubu jjigae on a beef-bone broth, stone-pot bibimbap, chijimi and jeon, japchae and cold noodles; no gluten information is published (Tabelog; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the sundubu broth is beef-bone with seafood (Tabelog; reviews).',
    hours_raw: 'Lunch 11:30–14:00 weekdays (last order 13:15), 11:30–14:30 at weekends and holidays; dinner 17:30–21:00 weekdays (last order 20:15), 17:30–21:30 at weekends and holidays; irregular closures (Tabelog). Bookings until 20:00, by phone for seat requests (Tabelog). ¥600 per person per 15 minutes for seats used past closing (Tabelog). Cards accepted; no e-money or QR (Tabelog). 19 seats: a 5-seat counter and five tables; non-smoking; wheelchair accessible; English menu; paper aprons provided (Tabelog; September 2024). 7 min walk from Kyoto Station and Keihan Shichijo Stn (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sujin, east of Kyoto Station — 7 min walk',
    cuisine: 'Korean soft-tofu stew specialist: homemade sundubu jjigae on a beef-bone broth with chosen chilli, seafood-rich, spice adjustable over ten levels, with toppings such as tteokbokki (Tabelog; 2024–2026 reviews) · lunch: sundubu with rice and three daily sides (kimchi, namul) ¥980–1,080; stone-pot bibimbap with soup ¥1,150 (October 2024); half-and-half sundubu and bibimbap (September 2026) · chijimi, chive-and-cheese jeon, japchae, namul platter, Korean cold noodles (2025–2026) · omakase course for 2–6 with +¥1,200 hour of free-flow; Chamisul soju; lagers and craft beer (Tabelog)',
    website: null, gmaps: gm('純豆腐太閤 京都駅'), menu_url: TB,
    notes: "[Korean · east of Kyoto Station, bubbling sundubu] A cosy sundubu shop a short walk east of Kyoto Station, run by a friendly young owner: soft tofu bubbling in a rich beef-bone and seafood broth, spice to your level, with rice and kimchi for about ¥1,000 at lunch. Stone-pot bibimbap, crisp chijimi and japchae round it out; paper aprons supplied. Closing is early (21:00).",
    chef_bio: { chef_name: null, roles: ['Owner not named; a young owner (September 2026); sometimes the manager runs the room alone (May 2026)'], origin: null,
      background: 'Opened 29 January 2020 (Tabelog). Tabelog’s introduction: a casual sundubu specialist for solo diners, homemade sundubu jjigae with a rich beef-bone broth simmered with selected chillies, toppings to build your own bowl, paper aprons, lagers and craft beer, and courses with all-you-can-drink.',
      philosophy: null,
      specialty: 'Sundubu jjigae.',
      anecdotes: [
        { text: 'A September 2026 visitor’s online booking failed; the young owner explained the booking site was no longer in use and found a table anyway.', source: R + 'B536585269/' },
        { text: 'An October 2024 diner was not asked for a spice level, got the standard, and started sweating.', source: R + 'B494855195/' },
        { text: 'A February 2026 office worker found the sundubu less fiery than it looked, with a tangy edge.', source: R + 'B509753952/' },
      ],
      japanese_sources_summary: '食べログ: 純豆腐太閤、韓国料理・冷麺・居酒屋、下京区上之町14-2 崇仁市営住宅61棟103、京都駅と京阪七条駅から徒歩7分、平日 11:30〜14:00 (L.O. 13:15)・17:30〜21:00 (L.O. 20:15)、土日祝 11:30〜14:30・17:30〜21:30、不定休、予約は20時まで、営業時間外の席の利用は15分ごとに1名600円、カード可、電子マネー・QR不可、19席 (カウンター5、テーブル)、禁煙、車椅子可、英語メニュー、2020年1月29日オープン。公式紹介: おひとりさまにも、牛骨スープとこだわりの唐辛子の自家製スンドゥブチゲ、トッピング、紙エプロン、ラガーとクラフトビール、飲み放題付きコース、チャミスル、おまかせコース (2〜6名、60分飲み放題+1,200円)。口コミ (2024〜2026年、英語): スンドゥブ定食980〜1,080円 (ご飯と小皿3品)、石焼ビビンバ1,150円、辛さ10段階、トッポギのトッピング、チヂミ、ニラとチーズのチヂミ、チャプチェ、ナムル、冷麺、ハーフ&ハーフ、若い店主、店長がひとりの日も。',
      confidence: 'medium', sources: [TB, R + 'B493141268/', R + 'B493294227/', R + 'B493455658/', R + 'B493507296/', R + 'B494855195/', R + 'B500150045/', R + 'B509753952/', R + 'B528613322/', R + 'B529070302/', R + 'B529873553/', R + 'B536585269/', R + 'B538252420/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区上之町14-2 崇仁市営住宅 61棟 103',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.987044, 135.764661); cross-checked: GSI 京都府京都市下京区上之町14番地 (lot) 55m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B494855195/', R + 'B493507296/'],
    price_note: 'Prices from October 2024 reviews.', last_checked: TODAY, items: [
      it('', '', 'Sundubu jjigae with rice and three sides', '¥1,080', 'Lunch', 'ask', 'no', '¥980 in another October 2024 review.', 'sundubu'),
      it('', '', 'Stone-pot bibimbap with soup', '¥1,150', 'Lunch', 'ask', 'no', 'October 2024.', 'bibimbap'),
      it('', '', 'Chijimi (Korean pancake)', '', 'Dishes', 'no', 'ask', '', 'chijimi'),
    ] }, {
    cuisine: 'スンドゥブの専門店: こだわりの唐辛子と牛骨スープの自家製スンドゥブチゲ、海鮮たっぷり、辛さは10段階、トッポギなどのトッピング (食べログ、2024〜2026年の口コミ)・昼: ご飯と日替わりの小皿3品 (キムチ、ナムル) 付きのスンドゥブ980〜1,080円、スープ付きの石焼ビビンバ1,150円 (2024年10月)、スンドゥブとビビンバのハーフ&ハーフ (2026年9月)・チヂミ、ニラとチーズのチヂミ、チャプチェ、ナムルの盛り合わせ、冷麺 (2025〜2026年)・2〜6名のおまかせコースと1時間飲み放題+1,200円、チャミスル、ラガーとクラフトビール (食べログ)',
    neighborhood: '崇仁、京都駅の東。徒歩7分',
    gf_detail: '要確認。牛骨スープのスンドゥブチゲ、石焼ビビンバ、チヂミ、チャプチェ、冷麺。グルテンの情報は公開されていない (食べログ、口コミ)。',
    vegan_detail: 'ヴィーガン不可。スンドゥブのスープは牛骨と海鮮 (食べログ、口コミ)。',
    notes: '[韓国料理・京都駅の東、ぐつぐつのスンドゥブ] 京都駅から東へ少し歩いた居心地のいいスンドゥブの店。気さくな若い店主が営む。濃厚な牛骨と海鮮のスープにぐつぐつの豆腐、辛さは好みで、昼はご飯とキムチ付きで1,000円ほど。石焼ビビンバ、カリッとしたチヂミ、チャプチェも。紙エプロンあり。閉店は早め (21時)。',
  });
}

// ================================================================ 接方来 京都タワー店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26000481/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://seppourai-kyototower.com/'; const INV = 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=8130001022725';
  const A = day(['17:00', '23:30']); const S = day(['17:00', '23:00']);
  put({
    id: 'kyoto_seppourai_kyoto_tower', name: '接方来 京都タワー店 (Seppourai Kyoto Tower)', category: 'OMNI',
    lat: 34.987598854469205, lng: 135.7595706782045, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto-vegetable dishes with nama-fu (wheat gluten), yuba, tofu, tempura and cutlets; no gluten information is published (Tabelog; reviews).',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'Tabelog lists vegan and vegetarian options, and an October 2026 diner with a vegetarian colleague found vegetarian, vegan and English menus; dashi and cross-contact are not described (Tabelog; October 2026).',
    hours_raw: 'Dinner only: 17:00–23:30 (last order 22:45), Sunday to 23:00 (last order 22:15); open every day; lunch only at the Kyoto Station Building shop (Tabelog). Bookings accepted — not for overseas guests via Tabelog; after 19:00 a 5–10 minute wait is possible; no-shows after 30 minutes are cancelled (Tabelog). Cards, transport IC, e-money and QR (Tabelog). 114 seats with a counter, sunken seats and semi-private rooms; non-smoking with a smoking room (Tabelog). Entrance from outside on Karasuma-dori, between Starbucks and Matsumoto Kiyoshi, not from inside Kyoto Tower; 2F of the Kyoto Tower building, 3 min walk from Kyoto Station (Tabelog; several 2026 reviews).',
    hours: { 0: A, 1: A, 2: A, 3: A, 4: A, 5: A, 6: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kyoto Tower building, 2F — 3 min walk from Kyoto Station',
    cuisine: 'Creative Kyoto cuisine built on Kyoto vegetables, nama-fu and yuba (Tabelog) · seasonal obanzai basket; Kyoto mizuna and shrimp yuba rolls; oboro tofu; vegetable tempura; pork cutlet stuffed with green onion; chilled shabu-shabu salad of kuroge wagyu; summer jelly dishes (2026 reviews) · Kyoto-vegetable courses such as the autumn course ¥4,300; Kibune course (2026) · Kyoto matcha beer, original drinks, non-alcoholic cocktails (2026 reviews; Tabelog)',
    website: SITE, gmaps: gm('接方来 京都タワー店'), menu_url: SITE,
    notes: "[Izakaya · Kyoto Tower building, Kyoto vegetables] A calm, roomy izakaya on the 2nd floor of the Kyoto Tower building (enter from the street, between Starbucks and Matsumoto Kiyoshi) serving Kyoto vegetables, yuba and nama-fu: an obanzai basket, yuba rolls, vegetable tempura and seasonal courses from about ¥4,300. Vegetarian and vegan menus. Semi-private rooms; open till 23:30 daily.",
    chef_bio: { chef_name: null, roles: ['Chefs not named; operated by 株式会社黛 (invoice register)'], origin: null,
      background: 'Tabelog’s introduction: creative Kyoto cuisine by skilled chefs using seasonal Kyoto vegetables, nama-fu and yuba, with a seasonal obanzai basket; a sister shop in the Kyoto Station Building serves lunch. The qualified-invoice holder is 株式会社黛 of Nakagyo, Kyoto (NTA).',
      philosophy: null,
      specialty: 'Kyoto-vegetable obanzai basket.',
      anecdotes: [
        { text: 'An October 2026 diner with a vegetarian colleague found everything but the tsukune vegetable-based, with vegetarian, vegan and English menus.', source: R + 'B538228077/' },
        { text: 'An August 2026 business guest got lost at the Kyoto Tower doors before finding the street entrance by Starbucks.', source: R + 'B534222600/' },
        { text: 'A July 2026 traveller found the Station Building shop full and came here, noting another guest had gone to the wrong branch.', source: R + 'B531212714/' },
      ],
      japanese_sources_summary: '食べログ: 接方来 京都タワー店、居酒屋・野菜料理・豆腐料理、下京区烏丸通七条下ル東塩小路町721-1 京都タワービル2F、京都駅から徒歩3分、京都タワービルの中からは入れない、烏丸通のスターバックスとマツモトキヨシの間の入口、月〜土・祝前日 17:00〜23:30 (L.O. 22:45)、日 17:00〜23:00 (L.O. 22:15)、無休、ランチは京都駅ビル店のみ、海外の方の食べログ予約は不可、19時以降は5〜10分待つことも、30分遅れで連絡がなければキャンセル、カード・電子マネー・QR可、114席、半個室、掘りごたつ、禁煙 (喫煙室あり)、ヴィーガン・ベジタリアン対応、インボイス T8130001022725 (株式会社黛)。公式紹介: 季節の京野菜、生麩、湯葉の創作京料理、「旬のおばんざい籠盛り」、SNS映えのオリジナルドリンク。口コミ (2026年、英語): 京水菜と海老の湯葉巻き、黒毛和牛の冷しゃぶサラダ、おぼろ豆腐、野菜の天ぷら、ねぎ入りのとんかつ、夏のジュレ、秋の京野菜コース4,300円、貴船コース、京都限定の抹茶ビール、ノンアルコールカクテル、半個室、ベジタリアン・ヴィーガン・英語のメニュー。',
      confidence: 'medium', sources: [TB, SITE, INV, R + 'B529838515/', R + 'B531020580/', R + 'B531212714/', R + 'B531275916/', R + 'B533168259/', R + 'B534222600/', R + 'B534391844/', R + 'B536715288/', R + 'B537179242/', R + 'B537469706/', R + 'B537972263/', R + 'B538228077/'] },
    cultural_comfort: { level: 'english', note: 'English, vegetarian and vegan menus (October 2026 review).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区烏丸通七条下ル東塩小路町721-1 京都タワービル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with online booking; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.987599, 135.759571); cross-checked: GSI 京都府京都市下京区東塩小路町721番地 (lot) 19m; 9m from kyoto_gihan_hajimedo_tower_sando (same building, B1); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537972263/'],
    price_note: 'Course price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Autumn Kyoto-vegetable course', '¥4,300', 'Course', 'ask', 'ask', 'October 2026.', 'course'),
      it('', '', 'Seasonal obanzai basket', '', 'Dishes', 'ask', 'ask', 'Signature (Tabelog).', 'obanzai_kago'),
      it('', '', 'Kyoto mizuna and shrimp yuba rolls', '', 'Dishes', 'ask', 'no', '', 'yuba_maki'),
    ] }, {
    cuisine: '京野菜、生麩、湯葉の創作京料理 (食べログ)・旬のおばんざい籠盛り、京水菜と海老の湯葉巻き、おぼろ豆腐、野菜の天ぷら、ねぎ入りのとんかつ、黒毛和牛の冷しゃぶサラダ、夏のジュレ (2026年の口コミ)・秋の京野菜コース4,300円などのコース、貴船コース (2026年)・京都の抹茶ビール、オリジナルドリンク、ノンアルコールカクテル (2026年の口コミ、食べログ)',
    neighborhood: '京都タワービル2階。京都駅から徒歩3分',
    gf_detail: '要確認。生麩、湯葉、豆腐、天ぷら、カツなどの京野菜料理。グルテンの情報は公開されていない (食べログ、口コミ)。',
    vegan_detail: '食べログではヴィーガン・ベジタリアン対応、2026年10月の口コミではベジタリアン、ヴィーガン、英語のメニューがあった。出汁や交差接触の説明はない (食べログ、2026年10月)。',
    notes: '[居酒屋・京都タワービル、京野菜] 京都タワービル2階 (入口はスターバックスとマツモトキヨシの間の外から) の、落ち着いた広い居酒屋。京野菜、湯葉、生麩で、おばんざいの籠盛り、湯葉巻き、野菜の天ぷら、4,300円ほどからの季節のコース。ベジタリアンとヴィーガンのメニューも。半個室、毎日23時半まで。',
  });
}

// ================================================================ 京都ダイニング正義
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26027397/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://dining-masayoshi.com/';
  const H = day(['11:00', '22:00']);
  put({
    id: 'kyoto_dining_masayoshi', name: '京都ダイニング正義 (Kyoto Dining Masayoshi)', category: 'OMNI',
    lat: 35.008480131157896, lng: 135.76969415381666, cuisine_type: 'sukiyaki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Wagyu sukiyaki in a sweet soy broth with nama-fu, steaks with several sauces, shabu-shabu and roast-beef bento; no gluten information is published (Tabelog; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu sukiyaki and steak house (official site).',
    hours_raw: '11:00–22:00 daily (last food order 21:30) (official site; Tabelog). Bookings by phone or online; no lunch bookings for the weekday steak set (September 2026). No service charge (Tabelog original text: なし). Cards and PayPay (Tabelog). 44 seats: an 8-seat counter and tables on the ground floor, semi-private and private rooms upstairs for 2–20; non-smoking; children welcome (Tabelog). In a renovated 150-year-old townhouse on Ryoma-dori, one street south of Sanjo, behind Rokuyosha; 5 min walk from Keihan Sanjo Stn (official site; August 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi-Sanjo, Ryoma-dori — 5 min walk from Keihan Sanjo Stn',
    cuisine: 'Kuroge wagyu bought whole, in a renovated 150-year-old townhouse (official site) · weekday steak lunch ¥1,200 with 150 g of beef, rice, salad and a side, garlic chips or butter and about six sauces (August–September 2026); outside-skirt steak lunch (October 2026) · sukiyaki courses: kuroge wagyu ¥5,800 (September 2026), Matsusaka beef course, with grated yam as well as egg for dipping (2026 reviews) · Kyoto-style shabu-shabu of Matsusaka beef and Japanese pork in a special broth; teppan steaks à la carte (Tabelog) · private-room lunch bento of wagyu sukiyaki and ichibo roast beef on sushi rice (Tabelog) · sake, shochu and wine',
    website: SITE, gmaps: gm('京都ダイニング正義 龍馬通'), menu_url: TB + 'dtlmenu/',
    notes: "[Wagyu sukiyaki and steak · Kawaramachi-Sanjo, a 150-year-old townhouse] A stylishly renovated machiya with a little garden on Ryoma-dori behind Rokuyosha: steaks on the teppan downstairs, sukiyaki in private rooms upstairs. Whole-carcass kuroge wagyu; the sukiyaki comes with grated yam as well as egg (courses about ¥5,800, Matsusaka higher). A weekday steak lunch for about ¥1,200 fills by 11:30. Open daily 11:00–22:00.",
    chef_bio: { chef_name: null, roles: ['Chef and owner not named'], origin: null,
      background: 'Opened 1 May 2016 (Tabelog). Per the official site: a Kyoto dining room on Ryoma-dori in a renovated 150-year-old townhouse mixing Japanese and Western antiques; kuroge wagyu chosen by craftsmen and bought as whole animals, served in private rooms.',
      philosophy: 'Per the official site: whole-animal purchasing for fine marbling and the meat’s true depth of flavour, served the way each guest likes it.',
      specialty: 'Kuroge wagyu sukiyaki.',
      anecdotes: [
        { text: 'A September 2026 lunch guest returning after years found every seat taken at 11:30 for the ¥1,200 steak.', source: R + 'B535228958/' },
        { text: 'A September 2026 diner dipped sukiyaki in grated yam for the first time and might prefer it to egg.', source: R + 'B536441643/' },
        { text: 'An October 2026 lunch guest in the food trade was served ten minutes after later arrivals.', source: R + 'B538230308/' },
      ],
      japanese_sources_summary: '公式サイト (dining-masayoshi.com): 京都ダイニング 正義、京都河原町より徒歩圏内、三条通より1本南の竜馬通、築150年の京町家をリノベート、和とアンティーク、一頭買い黒毛和牛と築150年京町家、個室で味わう極上の刻、職人が厳選した黒毛和牛を一頭買い、中京区河原町三条下ル大黒町45、11:00〜22:00 (L.O. 21:30)。食べログ: ステーキ・日本料理・すき焼き、京阪三条駅・市役所前駅から徒歩5分、毎日 11:00〜22:00、サービス料なし、カード・PayPay可、44席 (カウンター8、テーブル16、半個室20)、個室2〜20名、禁煙、子ども可、2016年5月1日オープン。公式紹介: 黒毛和牛のすき焼きコース (3種の肉から)、松阪牛と国産豚の京風しゃぶしゃぶ、個室限定の和牛錦弁当 (すき焼きとイチボのローストビーフ、酢飯)。口コミ (2026年、英語): 六曜社の裏、小さな庭、平日のステーキランチ1,200円 (150g、ご飯、サラダ、小鉢、ソース6種ほど)、ハラミステーキのランチ、黒毛和牛のすき焼きコース5,800円、松阪牛のコース、とろろで食べるすき焼き、1階は鉄板焼き、2階の個室。',
      confidence: 'medium', sources: [TB, SITE, R + 'B534879251/', R + 'B535170886/', R + 'B535228958/', R + 'B536043331/', R + 'B536043486/', R + 'B536121400/', R + 'B536256524/', R + 'B536441643/', R + 'B537296720/', R + 'B537502139/', R + 'B538230308/', R + 'B538707092/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Private rooms upstairs; online booking.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町龍馬通東入大黒町45',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.00848, 135.769694); cross-checked: GSI 京都府京都市中京区大黒町45番地 (lot) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536121400/', R + 'B536043331/'],
    price_note: 'Prices from September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Weekday steak lunch (150 g, rice, salad, side)', '¥1,200', 'Lunch', 'ask', 'no', 'Weekdays only.', 'steak_lunch'),
      it('', '', 'Kuroge wagyu sukiyaki course', '¥5,800', 'Course', 'ask', 'no', 'September 2026.', 'sukiyaki_course'),
      it('', '', 'Matsusaka beef course', '', 'Course', 'ask', 'no', 'October 2026.', 'matsusaka'),
    ] }, {
    cuisine: '一頭買いの黒毛和牛を、築150年の京町家をリノベートした店で (公式サイト)・平日のステーキランチ1,200円 (肉150g、ご飯、サラダ、小鉢、ガーリックチップかバター、ソース6種ほど) (2026年8〜9月)、ハラミステーキのランチ (2026年10月)・すき焼きのコース: 黒毛和牛5,800円 (2026年9月)、松阪牛のコース、卵のほかとろろでも (2026年の口コミ)・松阪牛と国産豚の京風しゃぶしゃぶ、アラカルトの鉄板ステーキ (食べログ)・個室のランチの和牛錦弁当 (すき焼きとイチボのローストビーフ、酢飯) (食べログ)・日本酒、焼酎、ワイン',
    neighborhood: '河原町三条、竜馬通。京阪三条駅から徒歩5分',
    gf_detail: '要確認。甘い醤油の割下で生麩も入る和牛のすき焼き、ソースを選ぶステーキ、しゃぶしゃぶ、ローストビーフの弁当。グルテンの情報は公開されていない (食べログ、口コミ)。',
    vegan_detail: 'ヴィーガン不可。和牛のすき焼きとステーキの店 (公式サイト)。',
    notes: '[和牛すき焼きとステーキ・河原町三条、築150年の町家] 六曜社裏の竜馬通の、小さな庭のあるおしゃれに改装した町家。1階は鉄板のステーキ、2階の個室ですき焼き。一頭買いの黒毛和牛で、すき焼きは卵のほかとろろでも (コース5,800円ほど、松阪牛はそれ以上)。平日のステーキランチ1,200円ほどは11時半に満席に。毎日11:00〜22:00。',
  });
}

// ================================================================ 京都焼肉 enen 先斗町本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26034057/'; const R = TB + 'dtlrvwlst/';
  const INV = 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=1120901030677';
  const WD = day(['17:00', '22:00']); const WE = day(['11:00', '14:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_yakiniku_enen_pontocho', name: '京都焼肉 enen 先斗町本店 (Kyoto Yakiniku enen Pontocho)', category: 'OMNI',
    lat: 35.005173537067634, lng: 135.7710488791945, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yakiniku with sauces, yukhoe, wagyu temari sushi, cheese bibimbap and rice bowls; no gluten information is published (Tabelog; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu yakiniku house (Tabelog).',
    hours_raw: 'Dinner 17:00–22:00 (last order 21:30) daily; lunch 11:00–14:00 on Saturdays, Sundays and holidays; closed 1 January (Tabelog; July 2026). Bookings recommended — few seats (October 2026); birthday cakes by phone only (Tabelog). No cover charge (Tabelog). Cards, e-money and PayPay (Tabelog). 36 seats over two floors, with counter and sofa seats; non-smoking with a smoking area outside; wheelchair accessible; free Wi-Fi (Tabelog; August 2026). On Pontocho, 2 min walk from Kawaramachi and Gion-Shijo Stns (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Pontocho — 2 min walk from Kawaramachi Stn',
    cuisine: 'A5 kuroge wagyu yakiniku with a French touch (Tabelog) · signature kuroge wagyu temari sushi (Tabelog) · green-onion tongue ¥1,408, thick outside skirt ¥1,408, special wagyu outside skirt ¥2,068, assorted wagyu trimmings ¥1,700, napa kimchi ¥650 (January 2026); six-kind platter; yukhoe; tataki; cheese bibimbap; three courses (2026) · weekend lunch: yukhoe-don or steak-don tasting set ¥1,980 each, large +¥100 (April and October 2026) · draught beer ¥750, Kyushu lemon sour ¥650 (January 2026)',
    website: 'https://akr4692349315.owst.jp/', gmaps: gm('京都焼肉 enen 先斗町'), menu_url: TB + 'dtlmenu/',
    notes: "[Yakiniku · Pontocho, A5 wagyu with flair] A stylish two-floor yakiniku house on Pontocho serving A5 kuroge wagyu at fair prices with a French-leaning touch — wagyu temari sushi, yukhoe, thick tongue and skirt. Weekend lunch brings yukhoe and steak rice-bowl tasting sets (about ¥2,000). Dinner about ¥5,000–10,000. Book ahead; closed only on New Year's Day.",
    chef_bio: { chef_name: null, roles: ['Chef not named; 株式会社ｅｎｅｎ (invoice register)'], origin: null,
      background: 'Opened 8 March 2020 (Tabelog). Tabelog’s introduction: A5 kuroge wagyu with a French twist, popular with women, two shops in Kyoto city; signature kuroge wagyu temari sushi; lunch tasting series of yukhoe-don, steak-don and sukiyaki. The qualified-invoice holder is 株式会社ｅｎｅｎ of Shimogyo, Kyoto (NTA); our crawl also lists 京都餃子enen 祇園本店.',
      philosophy: 'Per Tabelog’s introduction: to lower the threshold of Pontocho with quality beef at reasonable prices.',
      specialty: 'Kuroge wagyu temari sushi.',
      anecdotes: [
        { text: 'A February 2026 diner took the salad’s white topping for cheese; it was white wasabi, very hot.', source: R + 'B522225367/' },
        { text: 'A May 2026 first-timer was shown how to eat each cut but wished the staff would grill the best meat.', source: R + 'B530877328/' },
        { text: 'A repeat October 2026 guest on a date always orders the tongue, yukhoe and meat sushi.', source: R + 'B536757078/' },
      ],
      japanese_sources_summary: '食べログ: 京都焼肉 enen 先斗町本店、焼肉・ホルモン・韓国料理、中京区鍋屋町209-13、阪急京都河原町駅・京阪祇園四条駅から徒歩2分、平日 17:00〜22:00 (L.O. 21:30)、土日祝 11:00〜14:00・17:00〜22:00、元日休み、誕生日ケーキの予約は電話のみ、チャージ料なし、カード・電子マネー・PayPay可、36席、禁煙 (外に喫煙所)、車椅子可、Wi-Fi、2020年3月8日オープン、インボイス T1120901030677 (株式会社ｅｎｅｎ)。公式紹介: 女性に人気、フレンチの要素を取り入れたA5黒毛和牛の焼肉、京都市内に2店舗、名物の黒毛和牛手まり寿司、ユッケ丼・ステーキ丼・すき焼きの食べ比べのランチ、先斗町の敷居を下げる。口コミ (2026年、英語): 追いネギタン1,408円、厚切りハラミ1,408円、特選和牛ハラミ2,068円、和牛切り落とし盛り1,700円、白菜キムチ650円、生ビール750円、九州レモンサワー650円、6種盛り、ユッケ、タタキ、チーズビビンバ、コース3種、ユッケ丼・ステーキ丼の食べ比べ1,980円、大盛り+100円、2階席、席数は少なめ。',
      confidence: 'medium', sources: [TB, INV, R + 'B520164942/', R + 'B522225367/', R + 'B523158779/', R + 'B524019903/', R + 'B525166323/', R + 'B525525093/', R + 'B530039682/', R + 'B530877328/', R + 'B532003686/', R + 'B534476535/', R + 'B536757078/', R + 'B538040416/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; staff explain the cuts.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区鍋屋町209-13',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with online booking; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005174, 135.771049); cross-checked: GSI 京都府京都市中京区鍋屋町209番地 (lot) 31m; 8m from kyoto_mamehachi_pontocho; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B520164942/', R + 'B525525093/'],
    price_note: 'Prices from January and April 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Green-onion beef tongue', '¥1,408', 'Yakiniku', 'ask', 'no', 'January 2026.', 'negi_tan'),
      it('', '', 'Special wagyu outside skirt', '¥2,068', 'Yakiniku', 'ask', 'no', 'January 2026.', 'harami'),
      it('', '', 'Assorted wagyu trimmings', '¥1,700', 'Yakiniku', 'ask', 'no', 'January 2026.', 'kirioto'),
      it('', '', 'Weekend lunch: yukhoe-don tasting set', '¥1,980', 'Lunch', 'ask', 'no', 'April 2026.', 'yukke_don'),
      it('', '', 'Weekend lunch: steak-don tasting set', '¥1,980', 'Lunch', 'ask', 'no', 'April 2026.', 'steak_don'),
    ] }, {
    cuisine: 'フレンチの要素を取り入れたA5黒毛和牛の焼肉 (食べログ)・名物の黒毛和牛手まり寿司 (食べログ)・追いネギタン1,408円、厚切りハラミ1,408円、特選和牛ハラミ2,068円、和牛切り落とし盛り1,700円、白菜キムチ650円 (2026年1月)、6種盛り、ユッケ、タタキ、チーズビビンバ、コース3種 (2026年)・週末の昼: ユッケ丼かステーキ丼の食べ比べ各1,980円、大盛り+100円 (2026年4月と10月)・生ビール750円、九州レモンサワー650円 (2026年1月)',
    neighborhood: '先斗町。河原町駅から徒歩2分',
    gf_detail: '要確認。タレの焼肉、ユッケ、和牛の手まり寿司、チーズビビンバ、丼。グルテンの情報は公開されていない (食べログ、口コミ)。',
    vegan_detail: 'ヴィーガン不可。和牛の焼肉店 (食べログ)。',
    notes: '[焼肉・先斗町、A5和牛にひと工夫] 先斗町のおしゃれな2階建ての焼肉店。A5黒毛和牛を手頃に、フレンチ寄りのひと工夫で。和牛の手まり寿司、ユッケ、厚切りタンやハラミ。週末の昼はユッケ丼とステーキ丼の食べ比べ (2,000円ほど)。夜は5,000〜10,000円ほど。予約がおすすめ、休みは元日のみ。',
  });
}

save();
