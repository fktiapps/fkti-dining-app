// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 18.
//   + ノスタルジア Nostalgia (basement bar by City Hall, a "Uchoten Kazoku" pilgrimage spot; core list)
//   + オステリア イタリアーナ セブン・エンバーズ Osteria Italiana Seven Embers (Hilton Kyoto's Southern Italian; core list)
//   + ル・キャトーズィエム le 14e (steak bistro at Kawaramachi Marutamachi since 2013; notable list)
//   + 仁王門 無為 Niomon Mui (à la carte counter kappo by Niomon-dori; notable list)
//   Picked 2026-11-05 after batch 17. `queue.mjs kyoto-missed next core 200`: ノスタルジア 26001931, セブン・エンバーズ
//   26041843. `next notable 200`: 炭焼うな富士 大丸京都別邸 26039719 (skipped, chain), ル・キャトーズィエム 26021911,
//   仁王門 無為 26036035. Same-name check first: no other ノスタルジア, セブン・エンバーズ, キャトーズィエム or 無為 in our
//   crawls. None of the four is in data/kyoto.json: grep by name and address (下丸屋町406 B1F, 下丸屋町416, 伊勢屋町393,
//   新丸太町41) found none — 下丸屋町406 also holds 焼鳥 ひさどり (kyoto_yakitori_hisadori, 3F of the same building).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-18');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26039719', '炭焼うな富士 大丸京都別邸: a branch of the Nagoya eel chain 炭焼 うな富士 (run by 株式会社かぶらや) — our crawls hold 4 same-name shops (26039719, 27146873, 27155712, 27156897) and the web lists the Nagoya 本店, 名駅店, 名古屋駅太閤口店 and 有楽町店 besides, 5+ same-name shops (Greg, 2026-11-05).');

// ================================================================ ノスタルジア
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26001931/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '26:00']);
  put({
    id: 'kyoto_nostalgia_bar', name: 'ノスタルジア (Nostalgia)', category: 'OMNI',
    lat: 35.009960, lng: 135.768786, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Bar food such as omurice, canapés and smoked duck; no gluten information (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options, but the dishes reviewers name — omurice, anchovy-butter canapés, smoked duck — are not vegan (Tabelog; 2025–2026 reviews).',
    hours_raw: 'Daily 17:00–2:00 (food last order 23:00, drinks 1:59); closed only on 1 January (Tabelog). Reservations accepted; same-day by phone (Tabelog). A charge of ¥330 per person (Tabelog original: 330円 under service charge and fees). 32 seats: 8 at the counter, 10 at tables, 14 on sofas, some semi-private; smoking allowed; free Wi-Fi, but phone signal is weak underground (Tabelog; March–April 2026). Cards (Tabelog). Basement (B1F) of グリントランドビル on Kawaramachi north of Sanjo, down the stairs by the sign; 1 min walk from Kyoto Shiyakusho-mae Stn (Tabelog; March 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi north of Sanjo, basement — 1 min walk from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Dining bar of old bottles, vintage glasses and seasonal fresh-fruit cocktails, with food — the house recommends the omurice (Tabelog) · drinks tied to Tomihiko Morimi\'s novel "The Eccentric Family" (Uchoten Kazoku): "fake Denki Bran", Akadama port wine, "Benten" sparkling cocktail with gold flakes (2025–2026 reviews) · martinis, soft drinks too (2026 reviews) · omurice, smoked duck, anchovy-butter canapés (2025–2026 reviews) · all-you-can-drink plans (Tabelog) · bills about ¥4,000–6,000 (Tabelog; 2025–2026 reviews)',
    website: null, gmaps: gm('ノスタルジア 河原町三条 京都'), menu_url: null,
    notes: '[Bar · Kawaramachi Sanjo, a basement for Morimi fans] A dim, old-fashioned basement bar on Kawaramachi near City Hall, open nightly until 2 am, that has become a pilgrimage stop for fans of Tomihiko Morimi\'s "The Eccentric Family": order the "fake Denki Bran" and you may be shown the fans\' message book, a signed card and given a postcard. Beyond that, good martinis, fresh-fruit cocktails, and an omurice and smoked duck that surprise. ¥330 charge per person; smoking allowed; weak phone signal.',
    chef_bio: { chef_name: null, roles: ['Owner and bar staff (unnamed)'], origin: null,
      background: 'Per Tabelog: named for the wish to capture the charm of the good old days in space, service and drinks; a bar that also serves food, open from 17:00 until late, featuring old bottles, vintage glassware and "Uchoten Kazoku" (The Eccentric Family). Reviewers in 2025–2026 describe a guestbook for fans of the novelist Tomihiko Morimi, a signed card from the author, anime postcards for guests, artful ice and attentive service.',
      philosophy: 'The charm of the good old days, in the space, service and drinks (Tabelog).', specialty: '"Fake Denki Bran"; omurice; fresh-fruit cocktails.',
      anecdotes: [
        { text: 'A September 2025 guest who ordered the Akadama drinks was asked "Are you a fan?" and given a postcard on the way out.', source: R + 'B513948606/' },
        { text: 'A September 2026 visitor came on a "pilgrimage to the sacred site of Uchoten Kazoku", was allowed to photograph the author\'s signed card and a bottle of fake Denki Bran, and found the omurice and smoked duck "surprisingly authentic".', source: R + 'B536856999/' },
        { text: '"It\'s located in the basement, so the signal is poor and it\'s hard to connect to the internet." — March 2026.', source: R + 'B524319796/' },
      ],
      japanese_sources_summary: '食べログ: ダイニングバー・イタリアン・バル、中京区河原町三条上ル下丸屋町406 グリントランドビルB1F、市役所前駅から徒歩1分、毎日 17:00〜翌2:00 (料理L.O.23:00、ドリンクL.O.1:59)、1月1日のみ休み、予約可、330円 (サービス料・チャージ欄)、32席 (カウンター8、テーブル10、ソファ14)、喫煙可、Wi-Fi、カード可、昔の良さを空間・サービス・品で表した店、おすすめはオムライス、季節のフルーツカクテル、オールドボトル、ヴィンテージグラス、「Uchoten Kazoku」、ベジタリアン対応あり。口コミ (2025年7月〜2026年10月、英語): Tomihiko Morimi ファンの聖地、Gisei Denki Bran、Akadama、Benten、メッセージ帳、サイン色紙、ポストカード、マティーニ、スモークダック、アンチョビバターのカナッペ、地下で電波が弱い。',
      confidence: 'medium', sources: [TB, R + 'B509808199/', R + 'B513948606/', R + 'B520597457/', R + 'B524319796/', R + 'B524944020/', R + 'B527257211/', R + 'B532165861/', R + 'B536584045/', R + 'B536856999/', R + 'B538054740/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Basement bar; ¥330 charge per person; smoking allowed; weak phone signal; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町三条上ル下丸屋町406 グリントランドビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.010043, 135.768786) lies 3.2 m from kyoto_yakitori_hisadori (3F of the same building, 下丸屋町406); pin moved 9 m south to (35.009960, 135.768786), 6 m from Hisadori; GSI 京都府京都市中京区下丸屋町406番地 (lot) cross-checked for that record; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B524944020/'],
    price_note: 'No menu prices read; ¥330 per-person charge (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Charge', '¥330', 'Charge', 'ask', 'ask', 'Per person (Tabelog).', 'charge'),
      it('', '', '"Fake Denki Bran" (Gisei Denki Bran)', '', 'Drinks', 'ask', 'ask', 'From "The Eccentric Family".', 'gisei_denki_bran'),
      it('', '', 'Omurice', '', 'Food', 'ask', 'no', 'House recommendation (Tabelog).', 'omurice'),
    ] }, {
    cuisine: 'オールドボトル、ヴィンテージグラス、季節のフルーツカクテルのダイニングバー。料理もあり、おすすめはオムライス (食べログ)・Tomihiko Morimi の小説「Uchoten Kazoku」にちなむ酒: Gisei Denki Bran、Akadama のポートワイン、金箔の浮かぶスパークリングのカクテル「Benten」 (2025〜2026年の口コミ)・マティーニ、ソフトドリンクも (2026年の口コミ)・オムライス、スモークダック、アンチョビバターのカナッペ (2025〜2026年の口コミ)・飲み放題プラン (食べログ)・会計は4,000〜6,000円ほど (食べログ、2025〜2026年の口コミ)',
    neighborhood: '三条の北、河原町通の地下。市役所前駅から徒歩1分',
    gf_detail: '要確認。オムライス、カナッペ、スモークダックなどのバーの料理。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアン対応ありとあるが、口コミに出る料理 (オムライス、アンチョビバターのカナッペ、スモークダック) はヴィーガンではない (食べログ、2025〜2026年の口コミ)。',
    notes: '[バー・河原町三条、Morimi ファンの地下] 市役所近くの河原町通、昔ながらの薄暗い地下のバー。毎晩深夜2時まで。Tomihiko Morimi の「Uchoten Kazoku」のファンの聖地になっていて、Gisei Denki Bran を頼むとファンのメッセージ帳やサイン色紙を見せてもらえ、ポストカードをもらえることも。マティーニやフルーツカクテル、意外に本格的なオムライスとスモークダックも。チャージ1人330円、喫煙可、電波が弱い。',
  });
}

// ================================================================ オステリア イタリアーナ セブン・エンバーズ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26041843/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:30'], ['17:30', '22:00']);
  put({
    id: 'kyoto_seven_embers_hilton', name: 'オステリア イタリアーナ セブン・エンバーズ (Osteria Italiana Seven Embers)', category: 'OMNI',
    lat: 35.010111, lng: 135.769166, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Southern Italian menu of wood-fired pizza, handmade pasta, bread and tiramisu; no gluten information (Tabelog; 2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options, but courses centre on cheese, seafood, pork ragù, beef and steak (Tabelog; 2025–2026 reviews).',
    hours_raw: 'Daily 11:30–14:30 (last order 14:00) and 17:30–22:00 (last order 21:30) (Tabelog). Reservations accepted (Tabelog). Prices include tax and service (Tabelog original 表示料金には税金・サービス料が含まれております). Lunch course about ¥4,500 (November 2025); dinner course ¥7,500 (December 2025). 64 seats; non-smoking (hotel smoking area); wheelchair accessible; children welcome, kids\' menu (Tabelog). Cards incl. UnionPay (Tabelog). English menu with photos and English-speaking staff (Tabelog). Hotel parking ¥350 per 30 min, 2 hours for ¥500 when spending ¥3,000 (Tabelog). Ground floor of Hilton Kyoto, Kawaramachi north of Sanjo; 2 min walk from Kyoto Shiyakusho-mae Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Hilton Kyoto, Kawaramachi north of Sanjo — 2 min walk from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Southern Italian osteria of Hilton Kyoto, by chef Mariangela Ruggero: family recipes, naturally leavened pizza from a wood-fired oven, handmade pasta and seasonal local ingredients (Tabelog) · lunch course of antipasti, pasta and dessert, about ¥4,500 (November 2025); dinner course ¥7,500 (December 2025) · e.g. Southern Italian antipasti with Awaji cheese, cavatelli with Kyotanba pork ragù (December 2025); Omi beef Bolognese, tiramisu (2026 reviews) · bistecca of about 1 kg, T-bone steak, Margherita (December 2025; September 2026) · bread with olive oil served freely (2026 reviews) · Italian craft beer and wine (2026 reviews)',
    website: null, gmaps: gm('セブン・エンバーズ ヒルトン京都'), menu_url: null,
    notes: '[Italian · Hilton Kyoto, Southern Italian family cooking] The Hilton Kyoto\'s ground-floor osteria, where chef Mariangela Ruggero cooks the food of Southern Italy from family recipes: wood-fired pizza, handmade cavatelli with Kyotanba pork ragù, Omi beef Bolognese, a big tiramisu and kilo-scale bistecca or T-bone. Lunch courses about ¥4,500, dinner ¥7,500, tax and service included. Open kitchen, relaxed for a hotel, family-friendly; English spoken. Open daily.',
    chef_bio: { chef_name: 'Mariangela Ruggero', roles: ['Chef'], origin: null,
      background: 'Per Tabelog: the Italian restaurant of Hilton Kyoto, with cooking by chef Mariangela Ruggero, honoured by the Italian government as an "Ambassador of UNESCO World Heritage Italian Cuisine"; recipes handed down from the nonna, naturally leavened wood-fired pizza and handmade pasta. A December 2025 reviewer described the dinner course as the warm flavours of Puglia, with the chef\'s grandmother\'s ragù.',
      philosophy: 'Warmth and passion of Italy; recipes passed down from the nonna (Tabelog).', specialty: 'Wood-fired pizza; cavatelli with pork ragù.',
      anecdotes: [
        { text: 'A December 2025 diner, unable to forget a bistecca eaten in Italy, ordered the 1-kilo steak here — Australian beef, delicious for the price but a little sinewy.', source: R + 'B518860702/' },
        { text: '"The bread was served continuously, and we enjoyed it with delicious olive oil and salt." — February 2026.', source: R + 'B521787753/' },
        { text: 'A July 2026 couple celebrating a silver anniversary filled up on pasta and pizza before the main course.', source: R + 'B532034197/' },
      ],
      japanese_sources_summary: '食べログ: イタリアン、中京区下丸屋町416 ヒルトン京都1F、市役所前駅から徒歩2分、毎日 11:30〜14:30 (L.O.14:00)・17:30〜22:00 (L.O.21:30)、予約可、表示料金は税・サービス料込み、64席、禁煙、車椅子可、子ども可・キッズメニュー、カード可 (銀聯も)、英語メニュー・英語のスタッフ、駐車場あり、シェフ Mariangela Ruggero (イタリア政府から "Ambassador of UNESCO World Heritage Italian Cuisine" に)、祖母から受け継ぐレシピ、薪窯の天然酵母ピッツァ、手打ちパスタ、旬の地元食材。口コミ (2025年11月〜2026年9月、英語): ランチコース4,500円ほど、ディナーコース7,500円、南イタリアの前菜盛り合わせ、Kyotanba の豚のラグーのカヴァテッリ、Omi beef のボロネーゼ、ティラミス、1kg のビステッカ、Tボーンステーキ、マルゲリータ、パンとオリーブオイルはおかわり自由。',
      confidence: 'medium', sources: [TB, R + 'B517663294/', R + 'B518860702/', R + 'B521787753/', R + 'B524360997/', R + 'B527934800/', R + 'B528100361/', R + 'B529103676/', R + 'B530418049/', R + 'B532034197/', R + 'B536337073/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (Tabelog); prices include tax and service; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区下丸屋町416 ヒルトン京都 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.010111, 135.769166); cross-checked: GSI 京都府京都市中京区下丸屋町416番地 (lot) 34 m; kyoto_yakitori_hisadori is 35 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B517663294/', R + 'B524360997/'],
    price_note: 'No menu read; course prices from November and December 2025 reviews; tax and service included.', last_checked: TODAY, items: [
      it('', '', 'Lunch course', '¥4,500', 'Lunch', 'no', 'ask', 'November 2025.', 'lunch_course'),
      it('', '', 'Dinner course', '¥7,500', 'Dinner', 'no', 'ask', 'December 2025.', 'dinner_course'),
      it('', '', 'Cavatelli with Kyotanba pork ragù', '', 'Pasta', 'no', 'no', 'December 2025.', 'cavatelli'),
      it('', '', 'Margherita (wood-fired)', '', 'Pizza', 'no', 'no', 'September 2026.', 'margherita'),
    ] }, {
    cuisine: 'ヒルトン京都の南イタリアのオステリア、シェフは Mariangela Ruggero: 家族のレシピ、薪窯で焼く天然酵母のピッツァ、手打ちパスタ、旬の地元食材 (食べログ)・前菜、パスタ、デザートのランチコースは4,500円ほど (2025年11月)、ディナーコース7,500円 (2025年12月)・例: Awaji のチーズを使った南イタリアの前菜、Kyotanba の豚のラグーのカヴァテッリ (2025年12月)、Omi beef のボロネーゼ、ティラミス (2026年の口コミ)・約1kg のビステッカ、Tボーンステーキ、マルゲリータ (2025年12月、2026年9月)・パンとオリーブオイルはおかわり自由 (2026年の口コミ)・イタリアのクラフトビールとワイン (2026年の口コミ)',
    neighborhood: 'ヒルトン京都、三条の北の河原町通。市役所前駅から徒歩2分',
    gf_detail: '要確認。薪窯のピッツァ、手打ちパスタ、パン、ティラミスの南イタリア料理。グルテンの情報はない (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアン対応ありとあるが、コースはチーズ、魚介、豚のラグー、牛肉、ステーキが中心 (食べログ、2025〜2026年の口コミ)。',
    notes: '[イタリアン・ヒルトン京都、南イタリアの家庭の味] ヒルトン京都の1階のオステリア。シェフ Mariangela Ruggero が家族のレシピで南イタリアの料理を作る: 薪窯のピッツァ、Kyotanba の豚のラグーの手打ちカヴァテッリ、Omi beef のボロネーゼ、大きなティラミス、1kg のビステッカや Tボーン。ランチコースは4,500円ほど、ディナーは7,500円で、税・サービス料込み。オープンキッチンでホテルにしては気取らず、家族連れにも。英語可。無休。',
  });
}

// ================================================================ ル・キャトーズィエム
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26021911/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['18:00', '23:00']); const SA = day(['17:00', '23:00']);
  put({
    id: 'kyoto_le_14e_marutamachi', name: 'ル・キャトーズィエム (le 14e)', category: 'MOM_AND_POP',
    lat: 35.017167, lng: 135.768834, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Steaks pan-cooked and served with salt and fries or potatoes, alongside bread, salads, pâté and charcuterie; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a steak bistro — wagyu by the 100 g, duck confit, pâté, charcuterie and cheese-topped salads (2025–2026 reviews).',
    hours_raw: 'Monday, Tuesday, Thursday and Friday 18:00–23:00; Saturday and holidays 17:00–23:00; last order 21:00; closed Wednesday and Sunday; hours may change (Tabelog). Reservations accepted (Tabelog) — book well ahead, two Saturday sittings (April 2025). Cash only — no cards, e-money or QR (Tabelog). 10 seats: 6 at tables, 4 at the counter, up a steep staircase (Tabelog; February 2026). Takeaway by reservation since March 2020 (Tabelog). Second floor of ポガンビル on Kawaramachi near Marutamachi; 1 min walk from the Kawaramachi Marutamachi bus stop, 5 min from Jingu-Marutamachi Stn (Tabelog). Opened 20 February 2013 (Tabelog).',
    hours: { 0: WK, 1: WK, 3: WK, 4: WK, 5: SA }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Kawaramachi Marutamachi, 2nd floor — 5 min walk from Jingu-Marutamachi Stn',
    cuisine: 'French steak bistro: the day\'s cuts of wagyu and other rare beef, shown at the table and chosen by origin, cut and weight (110 g to 300 g+), at about ¥3,000 per 100 g, pan-cooked in the French manner and served with salt and fries or potatoes (2025–2026 reviews) · e.g. Yamagata Keisan black wagyu ribeye, Kaku wagyu, strip loin, inner thigh, outside skirt (2025–2026 reviews) · burrata with fresh tomato ¥2,700, Hokkaido duck leg confit ¥2,800, pasture-raised pork pâté ¥1,800 (July 2025) · "foodie salad" loaded with charcuterie, marinated ishidai, salami, a strawberry nougat-glacé-style dessert (2025–2026 reviews) · wine by the glass (Tabelog; 2025–2026 reviews)',
    website: null, gmaps: gm('ル・キャトーズィエム 京都 河原町丸太町'), menu_url: null,
    notes: '[Steak bistro · Kawaramachi Marutamachi, beef by the 100 g] A ten-seat French bistro up a steep stair at Kawaramachi Marutamachi, opened in 2013 by chef Shigeno Makoto, once of a Roppongi wine bar: the day\'s wagyu cuts are brought to the table, you choose origin, cut and weight at about ¥3,000 per 100 g, and the steak comes pan-cooked, salted, with fries. Burrata, duck confit, a charcuterie-heavy salad and glass wines round it out. French spoken. Cash only. Book well ahead. Closed Wednesday and Sunday.',
    chef_bio: { chef_name: 'Shigeno Makoto (as written on Tabelog)', roles: ['Owner-chef', 'Staff'], origin: null,
      background: 'Per Tabelog: "This small restaurant was opened by Chef Shigeno Makoto, who also worked as the chef at Wine Bar Shozui in Roppongi"; opened 20 February 2013. Reviewers describe a chef fluent in French (June 2025), a taste for Black music (November 2025), staff explaining the cuts and origins before cooking (July 2026), and a steak technique "that resembles frying", served with salt (November 2025).',
      philosophy: null, specialty: 'Wagyu by the 100 g, pan-cooked; burrata.',
      anecdotes: [
        { text: 'A June 2025 diner\'s French friend, long unable to get a booking, was delighted to finally eat here — and impressed by the chef\'s French.', source: R + 'B508592037/' },
        { text: 'A September 2026 visitor had wanted to come since seeing it in a Kansai meat magazine ten years earlier, as a student without the money.', source: R + 'B535158379/' },
        { text: '"I totally relate to the chef\'s taste in black music." — November 2025.', source: R + 'B517364670/' },
        { text: 'A February 2026 guest felt it was "still too early" — the sirloin came within ten minutes, faster than the bistecca the guest had expected.', source: R + 'B522865859/' },
      ],
      japanese_sources_summary: '食べログ: ビストロ・ステーキ、上京区伊勢屋町393-3 ポガンビル2F、神宮丸太町駅から徒歩5分、河原町丸太町バス停から徒歩1分、月・火・木・金 18:00〜23:00、土・祝 17:00〜23:00、L.O.21:00、水・日休み、予約可、現金のみ、10席 (テーブル6、カウンター4)、2020年3月からテイクアウト (予約制)、2013年2月20日オープン、六本木のワインバー Shozui のシェフだった Shigeno Makoto が開いた店。口コミ (2025年4月〜2026年9月、英語): 肉を見せて産地・部位・量を選ぶ、100g 3,000円ほど、フランス式に焼いて塩で、フライドポテト、Yamagata Keisan の黒毛和牛のリブロース、ブッラータ2,700円、鴨のコンフィ2,800円、パテ1,800円、シャルキュトリーのサラダ、シェフはフランス語が堪能、急な階段。',
      confidence: 'medium', sources: [TB, R + 'B507957139/', R + 'B508592037/', R + 'B514202623/', R + 'B517364670/', R + 'B522865859/', R + 'B525744039/', R + 'B535156448/', R + 'B535158379/', R + 'B535462161/', R + 'B58949305/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; book well ahead; choose your cut and weight at the table; steep stairs.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区伊勢屋町393-3 ポガンビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.017167, 135.768834); cross-checked: GSI 京都府京都市上京区伊勢屋町393番地 (lot) 22 m; vm_kamogawa_bakery_kyoto_ho is 53 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B58949305/', R + 'B514202623/'],
    price_note: 'No menu read; prices from July and September 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Wagyu steak, per 100 g (cut and origin of the day)', '¥3,000', 'Steak', 'ask', 'no', 'July–November 2025.', 'steak_100g'),
      it('', '', 'Burrata with fresh tomato', '¥2,700', 'Starters', 'ask', 'no', 'July 2025.', 'burrata'),
      it('', '', 'Hokkaido duck leg confit', '¥2,800', 'Mains', 'ask', 'no', 'July 2025.', 'confit'),
      it('', '', 'Pasture-raised pork pâté', '¥1,800', 'Starters', 'ask', 'no', 'July 2025.', 'pate'),
    ] }, {
    cuisine: 'フレンチのステーキビストロ: その日の和牛などの珍しい牛肉を席に見せ、産地・部位・量 (110g〜300g以上) を選ぶ、100g 3,000円ほど、フランス式に焼いて塩で、フライドポテトかじゃがいも添え (2025〜2026年の口コミ)・例: Yamagata Keisan の黒毛和牛のリブロース、Kaku wagyu、ロース、内もも、ハラミ (2025〜2026年の口コミ)・フレッシュトマトとブッラータ2,700円、Hokkaido の鴨もものコンフィ2,800円、放牧豚のパテ1,800円 (2025年7月)・シャルキュトリーたっぷりの「Foodie Salad」、いしだいのマリネ、サラミ、苺のヌガーグラッセ風のデザート (2025〜2026年の口コミ)・グラスワイン (食べログ、2025〜2026年の口コミ)',
    neighborhood: '河原町丸太町、ビル2階。神宮丸太町駅から徒歩5分',
    gf_detail: '要確認。塩で食べるフライパン焼きのステーキにフライドポテトやじゃがいも、パン、サラダ、パテ、シャルキュトリー。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。100g 単位の和牛、鴨のコンフィ、パテ、シャルキュトリー、チーズをのせたサラダのステーキビストロ (2025〜2026年の口コミ)。',
    notes: '[ステーキビストロ・河原町丸太町、100g 単位の和牛] 河原町丸太町の急な階段を上がった10席のフレンチビストロ。六本木のワインバーのシェフだった Shigeno Makoto が2013年に開いた。その日の和牛を席に持ってきて、産地・部位・量を選ぶと (100g 3,000円ほど)、フライパンで焼いて塩とフライドポテトで出てくる。ブッラータ、鴨のコンフィ、シャルキュトリーのサラダ、グラスワインも。フランス語可。現金のみ。早めに予約を。水・日休み。',
  });
}

// ================================================================ 仁王門 無為
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26036035/'; const R = TB + 'dtlrvwlst/'; const IG = 'https://www.instagram.com/nioumon.mui/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_niomon_mui', name: '仁王門 無為 (Niomon Mui)', category: 'OMNI',
    lat: 35.011874, lng: 135.773192, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. À la carte kappo with tempura, crab spring rolls, ponzu, simmered and grilled dishes and red miso soup; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-focused kappo of sashimi, grilled fish, eel, duck, Murazawa beef and dashi dishes (Tabelog; 2025–2026 reviews).',
    hours_raw: 'Monday to Saturday 17:00–23:00, last seating 21:30; closed Sunday, open on holidays (Tabelog). Reservations accepted, same-day too — call if online shows full (Tabelog; November 2025). Seat-only bookings choose dishes on the day; seat-only bookings are not accepted for guests coming from overseas (Tabelog). No children under elementary-school age (Tabelog). The menu shows no prices (March and May 2026); reviewers spent ¥15,000–49,999. 8 counter seats; private hire up to 20; non-smoking; BYO possible (Tabelog). Cards (Tabelog). On Niomon-dori near Chomyo-ji; 4 min walk from Sanjo Stn (Keihan), 5 min from Kyoto Shiyakusho-mae (Tabelog). Opened 21 July 2021 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Niomon-dori near Chomyo-ji — 4 min walk from Sanjo Stn',
    cuisine: 'Counter kappo serving dishes one at a time, à la carte or as a course, cooked to each guest\'s taste from the season\'s ingredients — charcoal grilling and tempura, Murazawa beef from southern Nagano, sake flights (Tabelog) · a start of three small dishes, then à la carte (November 2025; March 2026) · e.g. grilled yellowtail, grouper and squid, ankimo with ponzu (October 2025); shirako, tuna, squid and sea urchin, crab and yellow-leek spring rolls, grilled sea bream with scales (November 2025); grilled duck, buri daikon, straw-grilled yellowtail (January 2026); uzaku (March 2026); red miso soup with a soft egg, grilled ayu, hamo (May–August 2026) · sake and wine (Tabelog)',
    website: IG, gmaps: gm('仁王門 無為 京都'), menu_url: null,
    notes: '[Kappo · Niomon-dori, à la carte at the counter] An eight-seat counter near Chomyo-ji and the Kamo river where two cooks serve Kyoto dishes one by one, à la carte: three small starters, then whatever you fancy — straw-grilled yellowtail, crab spring rolls, scaled sea bream, uzaku, charcoal-grilled ayu — with Murazawa beef and sake flights. Open late, last seating 21:30. The menu shows no prices; one May 2026 guest found the bill about ¥10,000 over expectations. No under-6s. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)', 'A second, younger cook'], origin: null,
      background: 'Per Tabelog: a traditional kappo near Chomyo-ji, known for its Niomon gate statues by Unkei; dishes are not pre-set but prepared from seasonal ingredients to the guest\'s preference and served individually; opened 21 July 2021. Reviewers in 2025–2026 describe a relaxed, kind owner who takes requests, a second cook at the grill, and a shop "run by just two people" (May 2026).',
      philosophy: 'Seasonal ingredients cooked the way each guest prefers, served individually (Tabelog).', specialty: 'À la carte kappo; charcoal grilling; Murazawa beef.',
      anecdotes: [
        { text: 'An October 2025 regular opened four bottles of wine over the evening, pairing an Alsace Riesling with ankimo in ponzu.', source: R + 'B516085938/' },
        { text: '"The absence of prices on the menu allowed me to enjoy my meal freely, driven by curiosity." — March 2026.', source: R + 'B524727305/' },
        { text: 'A May 2026 guest titled the review "Not worth the price": the food was good, but with no prices listed, the bill came to about ¥10,000 more than expected.', source: R + 'B527686561/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、左京区新丸太町41-1、京阪三条駅から徒歩4分、市役所前駅から徒歩5分、月〜土 17:00〜23:00 (最終入店21:30)、日曜休み (祝日は営業)、予約可、席のみの予約は当日に料理を選ぶ、海外からの客の席のみ予約は不可、未就学児不可、8席 (カウンター)、貸切20名まで、禁煙、持ち込み可、カード可、2021年7月21日オープン、Unkei 作の仁王像の門で知られる Chomyo-ji の近く、炭火焼と天ぷら、Southern Nagano の Murazawa beef、日本酒の飲み比べ。口コミ (2025年10月〜2026年8月、英語): 突き出し3品のあとアラカルト、ぶりの藁焼き、蟹と黄ニラの春巻き、鯛の鱗焼き、白子、うざく、赤だし、鮎、鱧、二人で営む、値段の表示がなく予想より1万円ほど高かったとの声 (2026年5月)。',
      confidence: 'medium', sources: [TB, IG, R + 'B445443254/', R + 'B516085938/', R + 'B517329945/', R + 'B519776862/', R + 'B524703346/', R + 'B524727305/', R + 'B527686561/', R + 'B530077238/', R + 'B533871011/', R + 'B534816929/'] },
    cultural_comfort: { level: 'relay', note: 'Seat-only bookings are not accepted for guests from overseas — book a course or ask a hotel to call; no prices shown; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区新丸太町41-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.011874, 135.773192); cross-checked: GSI 京都府京都市左京区新丸太町41番地 (lot) 92 m; kyoto_akagakiya is 124 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B517329945/', R + 'B445443254/'],
    price_note: 'The menu shows no prices (2026 reviews); bills ¥15,000–49,999.', last_checked: TODAY, items: [
      it('', '', 'Straw-grilled yellowtail', '', 'Grilled', 'ask', 'no', 'January 2026.', 'buri_warayaki'),
      it('', '', 'Crab and yellow-leek spring rolls', '', 'Fried', 'no', 'no', 'November 2025.', 'kani_harumaki'),
      it('', '', 'Uzaku (eel and cucumber in vinegar)', '', 'Small dishes', 'ask', 'no', 'March 2026.', 'uzaku'),
    ] }, {
    cuisine: '旬の食材を客の好みに合わせ、一品ずつアラカルトかコースで出すカウンター割烹。炭火焼と天ぷら、Southern Nagano の Murazawa beef、日本酒の飲み比べ (食べログ)・はじめに小皿3品、あとはアラカルト (2025年11月、2026年3月)・例: ぶり・grouper・いかの焼き物、あん肝ポン酢 (2025年10月)、白子、まぐろ・いか・うに、蟹と黄ニラの春巻き、鯛の鱗焼き (2025年11月)、鴨の焼き物、ぶり大根、ぶりの藁焼き (2026年1月)、うざく (2026年3月)、半熟卵の赤だし、鮎の塩焼き、鱧 (2026年5月〜8月)・日本酒、ワイン (食べログ)',
    neighborhood: '仁王門通、Chomyo-ji の近く。三条駅から徒歩4分',
    gf_detail: '要確認。天ぷら、蟹の春巻き、ポン酢、煮物と焼き物、赤だしのアラカルトの割烹。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。お造り、焼き魚、鰻、鴨、Murazawa beef、だしの料理の魚中心の割烹 (食べログ、2025〜2026年の口コミ)。',
    notes: '[割烹・仁王門通、カウンターでアラカルト] Chomyo-ji と鴨川の近くのカウンター8席。二人で京料理を一品ずつ、アラカルトで出す: 小皿3品のあと、ぶりの藁焼き、蟹の春巻き、鯛の鱗焼き、うざく、炭火の鮎など好きなものを、Murazawa beef や日本酒の飲み比べとともに。夜遅くまで、最終入店21:30。品書きに値段はなく、2026年5月の客は予想より1万円ほど高かったと書いている。未就学児不可。日曜休み。',
  });
}

save();
