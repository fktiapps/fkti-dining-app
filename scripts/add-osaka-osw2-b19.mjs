// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first — worker osw2, batch 19 (lane: Tabelog id mod 4 = 1).
//   + ピッツェリア エイト Pizzeria Eight (stone-oven pizzeria in Minami-Horie; lunch with salad bar and popovers)
//   + #702 CAFE&DINER なんばパークス店 (living-room-style café and diner on Namba Parks 7F; cheese fondue, set meals)
//   + 鮨 奏 Sushi Kanade (Edomae omakase at a hinoki counter behind Hotel Nikko, from ¥13,000)
//   + pound house 心斎橋店 (cake café by Shinsaibashi Stn: whole cakes, parfaits, soft serve)
//   Skipped (lane order):
//   - 老舗お好み焼き 大阪ぼてぢゅう 本店 27014601 — same-concept branch of a chain in data: osaka_botejyu_honten_dotonbori
//     ("ぼてぢゅう本店 道頓堀"); per the coordinator.
//   - 炭火とワイン なんば店 27108145 — chain: the official site links shop pages for namba, tennoji, kyoto, fuyacho and hanare
//     (sumibitowine.com, read 2026-11-02); 5 shops.
//   - 魚匠 銀平 心斎橋店 27000845 — chain: the shop's official site lists sister shops 銀平 和歌山本店, 北新地店, KITTE丸の内店, 三宮店 and
//     グランフロント大阪 (ginpei-shinsaibashi.com, read 2026-11-02); 6 shops with this one.
//   Chain check of the four kept:
//   - Pizzeria Eight: one shop (Tabelog).
//   - #702 CAFE&DINER: one #702 seen (Tabelog; TableCheck); the operator site (sld-inc.com) gave no readable shop list. None in data.
//   - Sushi Kanade: one shop (Tabelog).
//   - pound house: the official site's keywords name Horie and Shinsaibashi; a June 2026 diner visited a limited Myakumyaku café at
//     the annex. Small group at most; none in data.
//   None is in data/osaka.json (grep by name, romaji and address, 2026-11-02). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw2-19');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27014601', 'Chain in data: 大阪ぼてぢゅう 本店 is the same okonomiyaki brand as osaka_botejyu_honten_dotonbori.');
skip('27108145', 'Chain: 炭火とワイン has five shops (namba, tennoji, kyoto, fuyacho, hanare; sumibitowine.com).');
skip('27000845', 'Chain: 魚匠 銀平 has six shops incl. 和歌山本店, 北新地, KITTE丸の内, 三宮, グランフロント大阪 (ginpei-shinsaibashi.com).');

// ================================================================ ピッツェリア エイト
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27094029/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const H = day(['11:00', '23:00']);
  put({
    id: 'osaka_pizzeria_eight_minamihorie', name: 'ピッツェリア エイト (Pizzeria Eight)', category: 'OMNI',
    lat: 34.670826, lng: 135.492722, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a stone-oven pizzeria with pasta and unlimited popovers at lunch (Tabelog; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a cheese-less marinara pizza and a salad bar exist, but no vegan options are described.',
    hours_raw: 'Daily 11:00–23:00 (last food order 22:00, drinks 22:30); open year-round (Tabelog). Reservations taken; tables may be released 15 minutes after the booking time without a call (Tabelog). ¥330 seat charge per person after 17:00 and a one-drink minimum at night (Tabelog; September 2026 review). Cards, transport IC and other e-money, QR incl. Alipay. Half the room can be hired for 20 or more (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Minami-Horie 1-25-12 (Nishi-ku) — 5 min from Sakuragawa Stn exit 5; 7 min from Yotsubashi Stn',
    cuisine: 'Italian with pizza from a stone oven: king burrata pizza with a whole house-made burrata, cheese-less marinara, Margherita with buffalo mozzarella, quattro formaggi with honey; roasts of domestic beef round, Tokachi beef, Yamagata pork shoulder, chicken and lamb, BBQ spare ribs, tuna-cheek tomato stew (Tabelog menu, July 2026) · lunch: a main with all-you-can-eat salad bar, drink bar and popovers with syrup and whipped butter (reviews) · glass wines; all-you-can-drink courses from ¥4,000',
    website: TB, gmaps: gm('ピッツェリア エイト 南堀江'), menu_url: M,
    notes: "[Italian · Minami-Horie, stone-oven pizza and popover lunches] A stylish, busy pizzeria in Minami-Horie, open since 2016, baking pizza in a stone oven from 11 AM to 11 PM. Lunch is the draw: pick a main and get an all-you-can-eat salad bar, drinks and warm popovers with honey or whipped butter, under ¥2,000. At night it turns to pizza, roasts and wine, with a seat charge after 5 PM. Diners in 2026 praise the popovers, the cheese-and-honey pizzas and the service; one found the roast beef middling and the food a 3 to 3.5. It is a little hard to find.",
    chef_bio: { chef_name: null, roles: ['Kitchen staff unnamed (Tabelog)'], origin: null, background: 'Per Tabelog, Pizzeria Eight serves stylish, authentic Italian at reasonable prices, starting from pizzas baked in a special stone oven; opened 14 September 2016.', philosophy: null, specialty: 'Stone-oven pizza; popover lunch.',
      anecdotes: [
        { text: '"On weekdays, if you order a main dish, you can enjoy unlimited popovers, along with free syrup and whipped butter." — August 2026.', source: R + 'B526336086/' },
        { text: '"The combination of cheese and honey is incredible!" — September 2026.', source: R + 'B536139218/' },
        { text: '"First, I would rate the food between 3 and 3.5." — October 2026.', source: R + 'B232796285/' },
      ],
      japanese_sources_summary: '日本語の情報源は未確認。食べログ (英語版): ピッツェリア エイト、西区南堀江1-25-12、桜川駅5番出口から徒歩5分、2016年9月14日オープン、毎日11:00〜23:00、年中無休、17時以降は座席料330円、20名以上で半分貸切、特製の石窯で焼く本格ピザ、手頃なイタリアン、飲み放題付きコース4,000円〜。メニュー (2026年7月): キングブッラータのピザ、チーズなしのマリナーラ、水牛モッツァレラのマルゲリータ、国産牛ももや十勝牛のロースト、山形豚の肩ロース、骨付きスペアリブ、まぐろのほほ肉のトマト煮。口コミ (2026年8月〜10月): ランチはメインにサラダバー、ドリンクバー、ポップオーバー食べ放題、はちみつとホイップバター、チーズとはちみつのピザ、グラスワイン、夜はチャージとワンドリンク制、サービスが良い、料理は3〜3.5という声、少しわかりにくい場所。',
      confidence: 'medium', sources: [TB, M, R + 'B232796285/', R + 'B414225301/', R + 'B475948905/', R + 'B494432268/', R + 'B526336086/', R + 'B534280997/', R + 'B534996521/', R + 'B535426055/', R + 'B535528517/', R + 'B536139218/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区南堀江1-25-12',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with a July 2026 menu; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区南堀江一丁目25番12号 (go) 4m. Nearest record is about 120 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [M, TB],
    price_note: 'Tabelog menu last updated July 2026, tax included; ¥330 seat charge after 17:00. Lunch under ¥2,000 with salad bar and drinks (September 2026). Diners report ¥1,000–4,999 a head.', last_checked: TODAY, items: [
      it('', '', 'King burrata pizza (tomato)', '¥2,187', 'Pizza', 'no', 'no', 'House-made burrata.', 'burrata_pizza'),
      it('', '', 'Cheese-less marinara', '¥1,087', 'Pizza', 'no', 'no', 'Garlic, anchovy, oregano (Tabelog menu).', 'marinara'),
      it('', '', 'Garlic Tokachi beef roast beef', '¥1,967', 'Main', 'ask', 'no', 'Light size ¥1,417.', 'roast_beef'),
      it('', '', 'BBQ bone-in pork spare ribs', '¥1,747', 'Main', 'ask', 'no', '', 'spare_ribs'),
    ] }, {
    cuisine: '石窯で焼くピザのイタリアン: 手作りのブッラータをまるごとのせたキングブッラータ、チーズなしのマリナーラ、水牛モッツァレラのマルゲリータ、はちみつのクアトロ・フォルマッジ。国産牛もも、十勝牛、山形豚の肩ロース、鶏、ラムのロースト、BBQスペアリブ、まぐろのほほ肉のトマト煮 (食べログのメニュー、2026年7月)・ランチはメインにサラダバー、ドリンクバー、シロップとホイップバターのポップオーバーが食べ放題 (口コミ)・グラスワイン、飲み放題付きコース4,000円〜',
    neighborhood: '西区南堀江1-25-12。桜川駅5番出口から徒歩5分、四ツ橋駅から徒歩7分',
    gf_detail: 'グルテンフリーではありません。石窯ピザの店で、パスタもあり、ランチはポップオーバー食べ放題 (食べログ、口コミ)。',
    vegan_detail: 'ヴィーガンではありません。チーズなしのマリナーラやサラダバーはあるが、ヴィーガンの選択肢の説明はない。',
    notes: '[イタリアン・南堀江、石窯ピザとポップオーバーのランチ] 南堀江の2016年からのおしゃれでにぎやかなピッツェリアで、朝11時から夜11時まで石窯でピザを焼く。人気はランチで、メインを選ぶとサラダバー、ドリンク、温かいポップオーバー (はちみつかホイップバター) が食べ放題、2,000円以下。夜はピザ、ロースト、ワインで、17時以降は座席料。2026年の客はポップオーバー、チーズとはちみつのピザ、サービスを褒める。ローストビーフは普通で料理は3〜3.5という客も。場所は少しわかりにくい。',
  });
}

// ================================================================ #702 CAFE&DINER なんばパークス店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27079121/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const TC = 'https://www.tablecheck.com/shops/702cafe-diner/reserve';
  const H = day(['11:00', '23:00']);
  put({
    id: 'osaka_702_cafe_diner_namba_parks', name: '#702 CAFE&DINER なんばパークス店 (#702 CAFE&DINER Namba Parks)', category: 'OMNI',
    lat: 34.661593, lng: 135.502334, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Set meals, rice bowls, omurice and loco moco sit beside pizza, pies and cheese fondue with bread (Tabelog menu; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: no vegan options are described; the set meals and bowls are meat and fish.',
    hours_raw: 'Daily 11:00–23:00 (last order 22:00); closing days follow Namba Parks (Tabelog). Reservations online, the same day until 8:00; no phone bookings (TableCheck). Lunch menu until 17:00, about ¥100 more at night (October 2026 review). Cards (VISA, JCB, AMEX, Diners), transport IC and other e-money; no QR. 146 seats with sofas; non-smoking; private hire for over 50 (Tabelog). In autumn 2026 part of the room was a Kamen Rider collaboration café (October 2026 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nambanaka 2-10-70, Namba Parks 7F (Naniwa-ku) — direct from Nankai Namba central and south gates',
    cuisine: 'Café and diner like a living room: weekly set meal, chicken nanban with house tartare, avocado-negitoro bowl, taco rice with soft-boiled egg, loco moco and soft omurice with demi-glace (Tabelog menu, 2023; reviews), pizza, all-you-can-eat cheese fondue plan, pies such as berry custard, royal milk tea and jar drinks · garden view on the 7th floor',
    website: TC, gmaps: gm('#702 CAFE&DINER なんばパークス'), menu_url: M,
    notes: "[Café · Namba Parks 7F, set meals and fondue by the roof garden] A big, dim, sofa-filled café and diner on the 7th floor of Namba Parks, open since 2014, looking out on the roof garden. Lunch (served until 5 PM) is set meals such as chicken nanban, taco rice and demi-glace omurice; at night, cheese fondue and pizza with drinks. Diners in 2026 like the space, the value and the calm light; several found operations shaky — a reservation not recognised, drinks and dishes arriving at different times. Booking is online only.",
    chef_bio: { chef_name: null, roles: ['Staff unnamed (Tabelog)'], origin: null, background: 'Per Tabelog, a relaxing space "like visiting a living room" with plenty of sofa seating, recommended for birthday parties and group dates, with an all-you-can-eat cheese fondue plan; opened 19 June 2014. TableCheck says bookings are online only.', philosophy: null, specialty: 'Set meals; cheese fondue.',
      anecdotes: [
        { text: '"I enjoyed my meal while overlooking the garden on the 7th floor of Namba Parks." — October 2026, chicken nanban set.', source: R + 'B538249822/' },
        { text: '"Perhaps because it was a reservation, the staff didn’t seem to recognize it, and I had to wait..." — September 2026.', source: R + 'B535473888/' },
        { text: '"The only downside was that the drink and pie were served at different times." — August 2026.', source: R + 'B534245683/' },
      ],
      japanese_sources_summary: '日本語の情報源は未確認。TableCheck: 702 CAFE&DINER なんばパークス店、なんばパークス7F、予約優先 (オンラインのみ)、当日のWEB予約は朝8時まで、電話予約は受け付けない。食べログ (英語版): #702 CAFE&DINER なんばパークス店、難波中2-10-70 なんばパークス 7F、南海なんば駅中央口・南口直結、2014年6月19日オープン、毎日11:00〜23:00 (L.O.22:00)、なんばパークスの休みに準ずる、146席、禁煙、50名以上の貸切、リビングのようなくつろぎの空間、ソファ席、チーズフォンデュ食べ放題。メニュー (2023年): 週替わり定食、自家製タルタルのチキン南蛮定食、アボカドネギトロ丼、温玉のスパイシータコライス、デミグラスのロコモコとオムライス。口コミ (2026年8月〜11月): 17時までのランチ、夜は約100円高い、庭を見ながら、ベリーカスタードパイ、チーズフォンデュとピザ、仮面ライダーのコラボエリア、予約が伝わっておらず待たされた・飲み物と料理が別々に来たという声。',
      confidence: 'medium', sources: [TB, M, TC, R + 'B511665520/', R + 'B534245683/', R + 'B534512752/', R + 'B534851602/', R + 'B535473888/', R + 'B536535346/', R + 'B536788584/', R + 'B538249822/', R + 'B538315581/', R + 'B538526912/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Online booking only (TableCheck). No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中2-10-70 なんばパークス 7F',
    existence: { status: 'confirmed', checked: TODAY, note: 'TableCheck booking page and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (kept: inside Namba Parks; GSI 大阪府大阪市浪速区難波中二丁目10番70号 (go) gives the complex point 134 m away). Nearest record (osaka_pancake_and_books_namba_parks, "…なんばパークス 4F") is about 22 m away, so not stacked; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [M, TB, R + 'B538249822/'],
    price_note: 'Tabelog menu last updated July 2023; October 2026 lunch: chicken nanban set ¥1,200, about ¥100 more at night. Diners report ¥1,000–4,999 a head.', last_checked: TODAY, items: [
      it('', '', 'Chicken nanban set meal with house tartare', '¥1,200', 'Set meals', 'no', 'no', 'October 2026 lunch.', 'chicken_nanban'),
      it('', '', 'Spicy taco rice with soft-boiled egg', '', 'Rice', 'ask', 'no', 'Menu 2023: ¥1,350.', 'taco_rice'),
      it('', '', 'Soft omurice with demi-glace', '', 'Rice', 'no', 'no', 'Menu 2023: ¥1,350.', 'omurice'),
      it('', '', 'Cheese fondue (all-you-can-eat plan)', '', 'Plans', 'no', 'no', 'Booking plan.', 'cheese_fondue'),
    ] }, {
    cuisine: 'リビングのようなカフェ&ダイナー: 週替わり定食、自家製タルタルのチキン南蛮、アボカドネギトロ丼、温玉のタコライス、デミグラスのロコモコとふわとろオムライス (食べログのメニュー、2023年、口コミ)、ピザ、チーズフォンデュ食べ放題のプラン、ベリーカスタードなどのパイ、ロイヤルミルクティー、ジャードリンク・7階の庭の眺め',
    neighborhood: '浪速区難波中2-10-70 なんばパークス 7F。南海なんば駅中央口・南口直結',
    gf_detail: '要確認。グルテンの情報なし。定食、丼、オムライス、ロコモコのほか、ピザ、パイ、パンのチーズフォンデュもある (食べログのメニュー、口コミ)。',
    vegan_detail: 'ヴィーガンではありません。ヴィーガンの選択肢の説明はなく、定食や丼は肉と魚。',
    notes: '[カフェ・なんばパークス7階、屋上庭園そばの定食とフォンデュ] なんばパークス7階、屋上庭園を望む薄暗くソファの多い大きなカフェ&ダイナーで、2014年から。ランチ (17時まで) はチキン南蛮、タコライス、デミグラスのオムライスなどの定食、夜はチーズフォンデュやピザとお酒。2026年の客は空間、お得さ、落ち着いた照明を褒める。一方、予約が伝わっていなかった、飲み物と料理が別々に来たなど、運営がぎこちないという声も何人か。予約はオンラインのみ。',
  });
}

// ================================================================ 鮨 奏
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27132517/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '14:00'], ['17:00', '23:00']); const E = day(['11:30', '14:00'], ['16:00', '23:00']);
  put({
    id: 'osaka_sushi_kanade_nishishinsaibashi', name: '鮨 奏 (Sushi Kanade)', category: 'OMNI',
    lat: 34.674085, lng: 135.49935, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. An omakase of sushi, sashimi and small dishes with soy-based seasoning; tempura is listed among the categories (Tabelog).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an Edomae sushi counter.',
    hours_raw: 'Mon–Fri 11:30–14:00 and 17:00–23:00; Sat, Sun and holidays 11:30–14:00 and 16:00–23:00; irregular closing days (Tabelog). Reservations taken; same-day cancellations and reductions charged; no phone cancellations outside opening hours; no perfume, please; children are seated in a private room (Tabelog). 10% service charge, no table charge. Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR. 22 seats at a hinoki counter and private rooms for 2 and 4; air purifiers in every room (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishi-Shinsaibashi 1-10-3, エースビル 2F, behind Hotel Nikko Osaka — 1 min from Shinsaibashi Stn exit 8',
    cuisine: 'Edomae sushi omakase at a hinoki counter: seasonal nigiri with tuna from Toyosu\'s Yamako (Tabelog), starters, sashimi such as katsuo tataki, an ikura rice bowl, aori-ika, sea bream, Mt. Fuji salmon, chawanmushi and tamago (2026 reviews) · omakase from ¥13,000 (excluding tax) and a shorter course around ¥9,000; lunch courses',
    website: TB, gmaps: gm('鮨 奏 西心斎橋'), menu_url: TB,
    notes: "[Sushi · Nishi-Shinsaibashi, omakase behind Hotel Nikko] A sushi counter of hinoki wood on the second floor of a building behind Hotel Nikko Osaka, a minute from Shinsaibashi Station, opened in December 2022, with private rooms for small groups. The omakase starts at ¥13,000 before tax and the 10% service charge, with tuna from Toyosu's Yamako and nigiri served on glass. Diners in 2026 praise the elegant room, the presentation and the head chef's hospitality; one August pair found the sushi not worth ¥18,000 and was unsure of returning, and a regular noted lunch prices have risen. The building has two parts; enter the rear one.",
    chef_bio: { chef_name: null, roles: ['Head chef unnamed (Tabelog; reviews)'], origin: null, background: 'Per Tabelog, the house serves nigiri of seasonal ingredients including tuna from Yamako at Toyosu, at a hinoki counter or in private rooms, for everyday meals or entertaining; opened 1 December 2022. An October 2026 diner singles out the head chef\'s hospitality.', philosophy: null, specialty: 'Edomae omakase with Yamako tuna.',
      anecdotes: [
        { text: '"The counter made of high-quality cypress wood exudes a sense of luxury." — April 2026, ¥13,000 omakase.', source: R + 'B527303355/' },
        { text: '"However, I was disappointed with the quality of the sushi." — August 2026, ¥18,000 course.', source: R + 'B533116920/' },
        { text: '"Due to recent price increases, the lunch course was more expensive than during my previous visit." — October 2026, second visit.', source: R + 'B476949211/' },
        { text: '"The sushi, beautifully arranged in glass dishes, was visually stunning" — October 2026, lunch.', source: R + 'B537895703/' },
      ],
      japanese_sources_summary: '日本語の情報源は未確認。食べログ (英語版): 鮨 奏、西心斎橋1-10-3 エースビル 2F、心斎橋駅8番出口から徒歩1分、2022年12月1日オープン、平日11:30〜14:00・17:00〜23:00、土日祝11:30〜14:00・16:00〜23:00、不定休、サービス料10%、22席、檜のカウンターと2名・4名の個室、空気清浄機、香水は控えて、子ども連れは個室へ、当日キャンセルは料金あり、豊洲やま幸のまぐろ、おまかせ13,000円〜。口コミ (2026年4月〜10月): ホテル日航の裏、ビルが2棟に分かれていて迷った、檜のカウンター、おまかせ13,000円 (税別)、9,000円のコース、さわら、ひらめ、いくら丼、あおりいか、真鯛、富士山サーモン、ガラスの器、大将のもてなし、ランチは値上がり、18,000円のコースでは寿司の質が物足りないという声。',
      confidence: 'medium', sources: [TB, R + 'B476949211/', R + 'B527251815/', R + 'B527303355/', R + 'B529458632/', R + 'B529521373/', R + 'B530415373/', R + 'B530929883/', R + 'B532286401/', R + 'B533116920/', R + 'B537895703/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter omakase; no perfume (Tabelog). No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋1-10-3 エースビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋一丁目10番3号 (go) 3m. Same building as 作一 (osaka_sakuichi_honten, "…エースビル 3F・4F", 4 m from GSI) and ままごとや (osaka_mamagotoya_nishishinsaibashi, 5F), so this pin is set about 7–10 m from both to avoid stacking; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B529458632/', R + 'B532286401/'],
    price_note: 'No Tabelog menu; prices from 2026 reviews, before the 10% service charge. Diners report ¥8,000–14,999 a head; a pair paid ¥18,000 each in August 2026.', last_checked: TODAY, items: [
      it('', '', 'Omakase course (excluding tax)', '¥13,000', 'Courses', 'ask', 'no', 'April–June 2026.', 'omakase'),
      it('', '', 'Shorter sushi course', '¥9,000', 'Courses', 'ask', 'no', 'June 2026.', 'sushi_course'),
    ] }, {
    cuisine: '檜のカウンターの江戸前寿司のおまかせ: 豊洲やま幸のまぐろなど季節のにぎり (食べログ)、前菜、かつおのたたきなどの刺身、いくら丼、あおりいか、真鯛、富士山サーモン、茶碗蒸し、玉子 (2026年の口コミ)・おまかせ13,000円 (税別)〜、約9,000円の短めのコース、ランチのコース',
    neighborhood: '西心斎橋1-10-3 エースビル 2F、ホテル日航大阪の裏。心斎橋駅8番出口から徒歩1分',
    gf_detail: '要確認。グルテンの情報なし。寿司、刺身、小皿のおまかせでしょうゆ系の味付け、食べログのジャンルには天ぷらもある。',
    vegan_detail: 'ヴィーガンではありません。江戸前寿司のカウンター。',
    notes: '[寿司・西心斎橋、ホテル日航裏のおまかせ] 心斎橋駅から1分、ホテル日航大阪の裏のビル2階にある檜のカウンターの寿司店で、2022年12月オープン、少人数の個室もある。おまかせは税・サービス料10%別で13,000円から、豊洲やま幸のまぐろを使い、にぎりはガラスの器で出す。2026年の客は上品な空間、盛り付け、大将のもてなしを褒める。8月の2人は18,000円のコースに見合う寿司ではなく再訪は迷うと書き、常連はランチが値上がりしたと書く。ビルは2棟に分かれているので奥の棟へ。',
  });
}

// ================================================================ pound house 心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27009629/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const SITE = 'http://www.pound-house.com';
  const W = day(['11:00', '22:00']); const F = day(['11:00', '23:00']);
  put({
    id: 'osaka_pound_house_shinsaibashi', name: 'pound house 心斎橋店 (pound house Shinsaibashi)', category: 'OMNI',
    lat: 34.673641, lng: 135.502396, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a cake shop of shortcakes, tarts, pies, crêpes and pancakes (Tabelog menu).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cakes made with fresh cream, soft serve and parfaits (Tabelog).',
    hours_raw: 'Sun–Thu and holidays 11:00–22:00; Fri, Sat and the day before a holiday 11:00–23:00; may close early; open year-round (Tabelog). Third-floor seats only 11:00–19:30. Reservations taken; whole cakes with message plates can be ordered the same day (August 2026 review). Cards (VISA, Master, AMEX); no e-money or QR. 82 seats over three floors; a designated smoking area, e-cigarettes at tables on weekdays only (Tabelog). Takeout cakes slightly cheaper.',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: F, 5: F, 6: W }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-18-17 — 1 min from Shinsaibashi Stn exit 5',
    cuisine: 'Cake café: over ten cakes with lightly sweetened fresh cream (strawberry shortcake, berry tart, pistachio chocolate, gâteau chocolat, Basque cheesecake, Mont Blanc, mille-feuille crêpe, apple pie), parfaits (chocolate banana, matcha, mango), rich soft serve, pancakes, pound cakes and baked goods to take away; birthday, portrait and wedding cakes to order (Tabelog menu, June 2026; reviews) · cake sets with drinks; lunch dishes',
    website: SITE, gmaps: gm('pound house 心斎橋'), menu_url: M,
    notes: "[Sweets · Higashi-Shinsaibashi, cakes, parfaits and soft serve] A three-floor cake café a minute from Shinsaibashi Station with a glass-fronted ground floor and a showcase of more than ten cakes made with lightly sweetened cream, plus parfaits, rich soft serve and pancakes. It is a go-to for birthday cakes: 4-inch cakes with message plates can be ready the same day. Diners in 2026 praise the chocolate tart, the Basque cheesecake, the pistachio soft serve and the polite staff; popular cakes sell out at night and seats can be tight. Smoking is allowed in a designated area.",
    chef_bio: { chef_name: null, roles: ['Staff unnamed; an owner mentioned by a June 2026 diner (reviews)'], origin: null, background: 'Per Tabelog, the house recommends cakes of high-quality, lightly sweetened fresh cream and seasonal cakes, and makes portrait and wedding cakes to order. The official site\'s keywords name Horie and Shinsaibashi. A June 2026 diner visited a limited-time Myakumyaku café at the annex.', philosophy: null, specialty: 'Fresh-cream cakes; birthday cakes.',
      anecdotes: [
        { text: '"Throughout the process, the service was exceptionally polite and pleasant, making me feel happy as well." — July 2026, birthday cake.', source: R + 'B519929431/' },
        { text: '"I made a same-day reservation and was able to purchase a 4-inch birthday cake for JPY 3,300, tax included, complete with a message plate!" — August 2026.', source: R + 'B533780283/' },
        { text: '"The chocolate tart I had at POUND HOUSE was rich in chocolate flavor without being too heavy, making it enjoyable until the very last bite." — June 2026.', source: R + 'B530792875/' },
      ],
      japanese_sources_summary: '日本語の情報源は未確認 (公式サイトはキーワードに堀江と心斎橋)。食べログ (英語版): pound house 心斎橋店、東心斎橋1-18-17、心斎橋駅5番出口から徒歩1分、日〜木・祝11:00〜22:00、金・土・祝前日11:00〜23:00、早じまいあり、年中無休、3階は11:00〜19:30のみ、82席 (1階24、2階28、3階30)、喫煙所あり、平日はテーブルで電子たばこ可、甘さ控えめの生クリームのケーキ、季節のケーキ、似顔絵ケーキ、ウエディングケーキ。メニュー (2026年6月): いちごのショートケーキ、ベリーのタルト、ピスタチオショコラ、ガトーショコラ、バスクチーズケーキ、モンブラン、ミルクレープ、アップルパイ、パフェ、ソフトクリーム、パンケーキ。口コミ (2026年6月〜10月): 誕生日ケーキ、4号ケーキがメッセージプレート付きで当日3,300円、チョコタルト、バスクチーズケーキ、ピスタチオのソフトクリーム、ケーキは10種以上、丁寧な接客、夜は人気のケーキが売り切れ、別館の期間限定ミャクミャクカフェ。',
      confidence: 'medium', sources: [TB, M, SITE, R + 'B519929431/', R + 'B520985382/', R + 'B530792875/', R + 'B530803092/', R + 'B531645926/', R + 'B533089828/', R + 'B533710846/', R + 'B533780283/', R + 'B534070526/', R + 'B538056669/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A July 2026 visitor came on locals\' advice during a trip. No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-18-17',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with a June 2026 menu; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目18番17号 (go) 6m. Nearest record (osaka_j_bowl_shinsaibashi, "…東心斎橋1-18-14") is about 23 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [M, TB],
    price_note: 'Tabelog menu last updated June 2026, tax included; takeout slightly cheaper. A 4-inch birthday cake with message plate ¥3,300 (August 2026). Diners report under ¥1,000–3,999.', last_checked: TODAY, items: [
      it('', '', 'Strawberry shortcake', '¥940', 'Cakes', 'no', 'no', 'Takeout ¥923.', 'shortcake'),
      it('', '', 'Ultimate Basque cheesecake', '¥880', 'Cakes', 'no', 'no', 'Recommended.', 'basque_cheesecake'),
      it('', '', 'Rich chocolate tart', '¥790', 'Cakes', 'no', 'no', '', 'chocolate_tart'),
      it('', '', 'Rich soft-serve parfait', '¥950', 'Parfaits', 'ask', 'no', 'Recommended.', 'soft_serve_parfait'),
    ] }, {
    cuisine: 'ケーキのカフェ: 甘さ控えめの生クリームのケーキ10種以上 (いちごのショートケーキ、ベリーのタルト、ピスタチオショコラ、ガトーショコラ、バスクチーズケーキ、モンブラン、ミルクレープ、アップルパイ)、パフェ (チョコバナナ、抹茶、マンゴー)、濃厚なソフトクリーム、パンケーキ、持ち帰りのパウンドケーキや焼き菓子、誕生日・似顔絵・ウエディングケーキの注文 (食べログのメニュー、2026年6月、口コミ)・ドリンク付きのケーキセット、ランチの料理',
    neighborhood: '東心斎橋1-18-17。心斎橋駅5番出口から徒歩1分',
    gf_detail: 'グルテンフリーではありません。ショートケーキ、タルト、パイ、クレープ、パンケーキのケーキ店 (食べログのメニュー)。',
    vegan_detail: 'ヴィーガンではありません。生クリームのケーキ、ソフトクリーム、パフェ (食べログ)。',
    notes: '[スイーツ・東心斎橋、ケーキ、パフェ、ソフトクリーム] 心斎橋駅から1分、1階がガラス張りの3階建てのケーキカフェで、甘さ控えめのクリームのケーキが10種以上並ぶショーケースに、パフェ、濃厚なソフトクリーム、パンケーキ。誕生日ケーキの定番で、メッセージプレート付きの4号ケーキが当日でも用意できる。2026年の客はチョコタルト、バスクチーズケーキ、ピスタチオのソフトクリーム、丁寧な接客を褒める。夜は人気のケーキが売り切れ、席が埋まることも。喫煙所あり。',
  });
}

save();
