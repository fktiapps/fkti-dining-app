// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle umeda; worker osw5 (lane: Tabelog id even), batch 26.
//   Ids checked for parity: 27123996, 27143106, 27146506, 27001318 (all even).
//   + The WAREHOUSE (all-day dining of the Aloft Osaka Dojima hotel: lunch salad bar, craft burgers; a labelled gluten-free menu)
//   + ジャルダン Jardin (Four Seasons Hotel Osaka all-day French bistro: lunch, afternoon tea, dinner, weekend buffet)
//   + YAKITORI DINER THE HICKORY BIRD 梅田店 (Cajun-spiced yakitori in an American-diner room, Banzai-cho)
//   + 洋食 ヨコオ YOKOO (Fukushima yoshoku house since the 1970s; beef cutlet, hamburg, wine)
//   Chain check: WAREHOUSE and Jardin are the restaurants of two single hotels (Marriott's Aloft; Four Seasons); one each. HICKORY BIRD:
//   no other shop found. ヨコオ: the station shop osaka_restaurant_yokoo_noren_meguri_shin_osaka (in data) is a sandwich-and-omurice
//   counter of the same family business, a different format; this is the original restaurant, drafted on its own and flagged.
//   None is in data/osaka.json (grep by id, name and address, 2026-11-02). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw5-26');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ The WAREHOUSE
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27123996/'; const R = TB + 'dtlrvwlst/';
  const OWN = 'https://www.marriott.co.jp/hotels/hotel-information/restaurant/osaal-aloft-osaka-dojima/';
  const W = day(['07:00', '11:00'], ['11:30', '15:00'], ['17:30', '22:00']);
  put({
    id: 'osaka_the_warehouse_aloft_dojima', name: 'The WAREHOUSE', category: 'OMNI',
    lat: 34.695389, lng: 135.495446, cuisine_type: 'other',
    gf_confidence: 'options', gf_label: 'Some GF options',
    gf_detail: 'The restaurant says it offers a gluten-free menu, but gluten-containing dishes are made in the same kitchen, contamination is possible, and it does not recommend the gluten-free menu for people with coeliac disease or severe allergies (Tabelog remarks). The lunch salad bar of vegetables, fruit and marinated salads also has bread. Ask staff which items are on the gluten-free menu.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog ticks "vegetarian options" and "allergy information available"; the lunch salad bar is vegetable-led with dressings and side dishes, but nothing is labelled vegan.',
    hours_raw: 'Daily: breakfast 7:00–11:00 (last order 10:30), lunch 11:30–15:00 (last order 14:00), dinner 17:30–22:00 (last order 21:00) (Tabelog). Reservations accepted (Tabelog). Service charge 10%, no cover (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), IC cards and other e-money, PayPay (Tabelog). 100 seats, up to 160 standing; non-smoking; wheelchair accessible; free Wi-Fi; children and strollers welcome; live music (Tabelog). Opened 28 June 2021 (Tabelog). Strong air conditioning at lunch (October 2026).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W, 6: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '堂島浜2-1-31, ground floor of the Aloft Osaka Dojima hotel — 2 min from Watanabebashi Stn, 3 min from Nishi-Umeda Stn',
    cuisine: 'Hotel all-day dining with a music theme: breakfast, a lunch salad bar, afternoon tea and premium craft burgers at dinner (Tabelog) · lunch salad bar of fresh seasonal vegetables, fruit, more than ten seasoned side dishes, bread, soups, detox juices and coffee or tea, two hours: ¥1,600 weekdays, ¥1,800 weekends and holidays; with dessert ¥2,100; with a welcome drink ¥2,200; main-course sets available (Tabelog; September–October 2026) · dishes named in 2026: roasted Brussels sprouts, cucumber and wakame salad, zucchini with plum, mango pudding, tacos, a cheeseburger, a kakuni burger, chicken curry at lunch',
    website: OWN, gmaps: gm('The WAREHOUSE Aloft 大阪堂島'), menu_url: null,
    notes: "[Hotel dining · Dojima, a salad-bar lunch and burgers] The bright, music-themed restaurant on the ground floor of the Aloft hotel in Dojima, open from breakfast to dinner. Lunch is the draw: two hours of an all-you-can-eat salad bar of seasonal vegetables, fruit, seasoned side dishes, bread, soups and detox juices for ¥1,600 on weekdays; dinner turns to craft burgers. It says it has a gluten-free menu but warns that the kitchen is shared and the menu is not for coeliacs. Many of the staff are from overseas; bring a layer, as the air conditioning runs cold.",
    chef_bio: { chef_name: null, roles: ['Hotel kitchen and floor staff (unnamed)'], origin: null, background: 'Per the shop-maintained Tabelog listing: inside the Aloft Osaka Dojima of the Marriott Bonvoy group, themed as "a social scene for music lovers", with a lunch salad bar, afternoon tea and premium craft burgers; opened 28 June 2021; a gluten-free menu with a cross-contamination warning. September and October 2026 diners note that most staff are from overseas.', philosophy: null, specialty: 'Lunch salad bar; craft burgers.',
      anecdotes: [
        { text: '"I enjoyed a 2-hour salad bar course for JPY 1600." — September 2026.', source: R + 'B536495086/' },
        { text: '"Most of the staff are foreigners, which adds to the atmosphere." — September 2026.', source: R + 'B536507751/' },
        { text: '"The roasted Brussels sprouts were moist and tender, with a spicy seasoning that still allowed the natural sweetness of the vegetables to shine through" — October 2026, a sixth visit.', source: R + 'B515603913/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): The WAREHOUSE、ダイニングバー・サラダ・ハンバーガー、大阪市北区堂島浜2-1-31、西梅田駅から3分、肥後橋駅から4分、北新地駅から5分、渡辺橋駅から2分、毎日7:00〜11:00 (L.O.10:30)、11:30〜15:00 (L.O.14:00)、17:30〜22:00 (L.O.21:00)、予約可、サービス料10%、チャージなし、カード・電子マネー・PayPay 可、100席、立食160名、禁煙、車いす可、無料 Wi-Fi、子ども・ベビーカー可、生演奏、2021年6月28日オープン、Marriott Bonvoy の Aloft 大阪堂島のホテルレストラン、音楽好きのための社交の場、ランチのサラダバー1,600円、デザートつき2,100円、ウェルカムドリンクつき2,200円、アフタヌーンティー、夜はクラフトバーガー、グルテンフリーのメニューはあるが同じ厨房でグルテンをふくむ料理も作るため混入のおそれがあり、セリアック病や重いアレルギーの人にはすすめない。口コミ(2026年9月〜10月): サラダバーは平日1,600円・週末1,800円で2時間、季節の野菜、果物、10種以上の総菜、パン、スープ、デトックスドリンク、コーヒー、芽キャベツのロースト、きゅうりとわかめ、梅のズッキーニ、マンゴープリン、タコス、チーズバーガー、角煮バーガー、ランチのチキンカレー、スタッフの多くは外国の人、冷房が強い、お皿が熱いという声。',
      confidence: 'medium', sources: [TB, OWN, R + 'B515603913/', R + 'B527715789/', R + 'B534894287/', R + 'B536008287/', R + 'B536495086/', R + 'B536507751/', R + 'B536571241/', R + 'B538381553/', R + 'B538399977/', R + 'B538421985/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'An international hotel restaurant; September and October 2026 diners found most staff were from overseas. English service not confirmed in the sources read.' },
    safety: { dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Tabelog remarks (shop-maintained): a gluten-free menu is offered, but gluten-containing dishes are prepared in the same kitchen, contamination is possible, and the gluten-free menu is not recommended for people with coeliac disease or severe allergies.', source: TB }],
      soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [{ text: 'Tabelog lists "allergy information available".', source: TB }],
      positives: [{ text: 'The restaurant states that it offers a gluten-free menu (Tabelog remarks).', source: TB }], confidence: 'medium', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂島浜2-1-31',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the hotel site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島浜二丁目1番31号 (go) 44m; no other record within 30 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B534894287/'],
    price_note: 'Prices from the Tabelog listing (tax included; 10% service); weekday and weekend salad-bar prices from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Lunch salad bar, two hours (weekdays; ¥1,800 weekends)', '¥1,600', 'Lunch', 'ask', 'ask', 'Tabelog; October 2026.', 'salad_bar'),
      it('', '', 'Lunch salad bar with dessert', '¥2,100', 'Lunch', 'ask', 'ask', 'Tabelog.', 'salad_bar_dessert'),
      it('', '', 'Premium craft burger (dinner)', '', 'Dinner', 'no', 'no', 'Tabelog; October 2026.', 'craft_burger'),
    ] }, {
    cuisine: '音楽がテーマのホテルのオールデイダイニング: 朝食、ランチのサラダバー、アフタヌーンティー、夜はプレミアムなクラフトバーガー (食べログ)・ランチのサラダバーは季節の野菜、果物、10種以上の総菜、パン、スープ、デトックスジュース、コーヒーか紅茶で2時間、平日1,600円、週末・祝日1,800円、デザートつき2,100円、ウェルカムドリンクつき2,200円、メインつきのセットも (食べログ、2026年9月〜10月)・2026年の口コミに出てくる料理: 芽キャベツのロースト、きゅうりとわかめのサラダ、梅のズッキーニ、マンゴープリン、タコス、チーズバーガー、角煮バーガー、ランチのチキンカレー',
    neighborhood: '堂島浜2-1-31、Aloft 大阪堂島ホテルの1階。渡辺橋駅から2分、西梅田駅から3分',
    gf_detail: '店によるとグルテンフリーのメニューがあるが、同じ厨房でグルテンをふくむ料理も作るため混入のおそれがあり、セリアック病や重いアレルギーの人にはすすめない (食べログ)。ランチのサラダバーにはパンもある。グルテンフリーのメニューの料理はスタッフに確認を。',
    vegan_detail: '要確認。食べログに「ベジタリアンメニューあり」「アレルギー表示あり」とあり、ランチのサラダバーは野菜が中心だが、ドレッシングや総菜もあり、ヴィーガンの表示はない。',
    notes: '[ホテルダイニング・堂島、サラダバーのランチとバーガー] 堂島の Aloft ホテルの1階にある、音楽がテーマの明るいレストランで、朝食から夜まで。お目当てはランチで、季節の野菜、果物、総菜、パン、スープ、デトックスジュースのサラダバーが2時間食べ放題で平日1,600円。夜はクラフトバーガー。グルテンフリーのメニューがあると店は言うが、厨房は共用でセリアック病の人には向かないと注意している。スタッフには外国の人が多い。冷房が強いので上着を。',
  });
}

// ================================================================ ジャルダン
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27143106/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '14:30'], ['17:30', '21:30']);
  put({
    id: 'osaka_jardin_four_seasons_dojima', name: 'ジャルダン (Jardin)', category: 'OMNI',
    lat: 34.695678, lng: 135.493467, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. French bistro courses with brioche, afternoon tea of pastries and savouries, and a weekend buffet; the restaurant asks diners to state allergies in advance (Tabelog).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog ticks "vegetarian options"; no vegan dish is named, and the restaurant asks for dietary needs in advance.',
    hours_raw: 'Daily 11:30–14:30 (last order 14:00) and 17:30–21:30 (last order 21:00); seats limited to two hours; dinner buffet on Fridays, Saturdays, Sundays and holidays only (Tabelog). Afternoon tea is cheaper after 14:00 on weekdays (August 2026). Reservations accepted; inquiries via the hotel number (Tabelog). Service charge 15% (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 118 seats with a terrace; non-smoking; wheelchair accessible; English-speaking staff; breakfast; free Wi-Fi (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W, 6: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '堂島2-4-32, ground floor of the Four Seasons Hotel Osaka, with a terrace — near Watanabebashi Stn',
    cuisine: 'All-day French bistro of the Four Seasons Hotel Osaka, under big windows with a terrace: seasonal afternoon tea, lunch and dinner courses, weekend dinner buffet (Tabelog) · weekday lunch "plat du jour" set of salad, soup, main and drink ¥3,500; lunch three-course "French gourmet journey" ¥6,200; a ¥7,800 course (Tabelog, tax included); a lunch course themed on Lyon with refillable brioche (September 2026) · afternoon teas: melon ¥6,160 (August 2026); Shine Muscat from September; an anniversary set with a chef from Four Seasons Bangkok, with a melon maritozzo, matcha-peach-yuzu mousse and pecan mousse (August 2026) · free-flow drinks option (September 2026)',
    website: null, gmaps: gm('ジャルダン フォーシーズンズホテル大阪'), menu_url: null,
    notes: "[French · Dojima, the Four Seasons' garden bistro] The all-day French bistro on the ground floor of the Four Seasons Hotel Osaka, airy under tall windows with a terrace for evenings. Lunch runs from a ¥3,500 dish-of-the-day set to regional French courses (one diner's Lyon-themed menu came with refillable brioche); afternoon teas change with the season, melon in August and Shine Muscat in autumn; weekends add a dinner buffet. Seats are held for two hours, and a 15% service charge applies. English is spoken, and one regular noted that early on many staff spoke little Japanese.",
    chef_bio: { chef_name: null, roles: ['Hotel kitchen and floor staff (unnamed)'], origin: null, background: 'Per the shop-maintained Tabelog listing: the all-day dining of the Four Seasons Hotel Osaka, a spacious French bistro with large windows, seasonal afternoon tea, dinner courses and a weekend dinner buffet; English-speaking staff. An August 2026 diner notes the hotel\'s second anniversary with a guest chef from Four Seasons Bangkok at Chao Phraya River.', philosophy: null, specialty: 'French bistro courses; seasonal afternoon tea.',
      anecdotes: [
        { text: '"In the beginning, there were many staff members who couldn\'t speak Japanese, which was challenging, but the service has improved significantly." — August 2026, a regular for afternoon tea.', source: R + 'B490413621/' },
        { text: '"I was looking for a hotel afternoon tea and found that it becomes more affordable after 2 PM on weekdays, so I decided to visit." — August 2026, the melon afternoon tea for JPY 6,160.', source: R + 'B533674212/' },
        { text: '"The brioche, which was available for seconds, was exceptionally delicious." — September 2026, a Lyon-themed lunch course.', source: R + 'B537066113/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ジャルダン、ビストロ・ビュッフェ・カフェ、大阪市北区堂島2-4-32 フォーシーズンズホテル 1F、渡辺橋駅、毎日11:30〜14:30 (L.O.14:00)、17:30〜21:30 (L.O.21:00)、2時間制、ディナービュッフェは金・土・日・祝のみ、予約可、ホテルの代表番号で問い合わせ、サービス料15%、カード可、電子マネー・QR 不可、118席、テラス、禁煙、車いす可、英語を話すスタッフ、朝食、無料 Wi-Fi、ベジタリアンメニューあり、大きな窓のフレンチビストロ、季節のアフタヌーンティー、旬の食材のディナーコース、平日の本日のランチ3品 (サラダ、スープ、メイン、ドリンク) 3,500円、ランチ3品のフランス美食の旅6,200円、7,800円のコース、9月からシャインマスカットのアフタヌーンティー、アレルギーは事前に。口コミ(2026年8月〜10月): メロンのアフタヌーンティー6,160円、平日14時以降はお得、開業2周年でBangkok のフォーシーズンズのシェフとのアフタヌーンティー (メロンのマリトッツォ、抹茶と桃と柚子のムース、ピーカンのムース)、Lyon がテーマのランチ、ブリオッシュのおかわり、フリーフロー、テラス席、はじめは日本語を話せないスタッフが多かったという声、子ども連れや写真を撮る人でにぎやか。',
      confidence: 'medium', sources: [TB, R + 'B490413621/', R + 'B492760336/', R + 'B504856959/', R + 'B527743285/', R + 'B533674212/', R + 'B535055567/', R + 'B535458751/', R + 'B536553527/', R + 'B536804605/', R + 'B537066113/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists English-speaking staff; an August 2026 regular noted that early on many staff spoke little Japanese.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂島2-4-32 フォーシーズンズホテル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島二丁目4番32号 (go) 69m; no other record within 30 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B533674212/'],
    price_note: 'Prices from the Tabelog listing (tax included; 15% service); afternoon tea from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Weekday lunch "plat du jour": salad, soup, main, drink', '¥3,500', 'Lunch', 'ask', 'ask', 'Tabelog.', 'plat_du_jour'),
      it('', '', 'Lunch three courses, "French gourmet journey"', '¥6,200', 'Lunch', 'ask', 'no', 'Tabelog; September 2026.', 'lunch_course'),
      it('', '', 'Seasonal afternoon tea (melon, August 2026)', '¥6,160', 'Afternoon tea', 'no', 'no', 'August 2026.', 'afternoon_tea'),
    ] }, {
    cuisine: '大きな窓とテラスのある、フォーシーズンズホテル大阪のオールデイのフレンチビストロ: 季節のアフタヌーンティー、ランチとディナーのコース、週末のディナービュッフェ (食べログ)・平日のランチ「本日の一皿」(サラダ、スープ、メイン、ドリンク) 3,500円、ランチ3品の「フランス美食の旅」6,200円、7,800円のコース (食べログ、税込)。おかわりできるブリオッシュつきのLyon がテーマのランチ (2026年9月)・アフタヌーンティー: メロン6,160円 (2026年8月)、9月からシャインマスカット、開業記念のBangkok のフォーシーズンズのシェフとの共作 (メロンのマリトッツォ、抹茶と桃と柚子のムース、ピーカンのムース) (2026年8月)・飲み放題も (2026年9月)',
    neighborhood: '堂島2-4-32、フォーシーズンズホテル大阪の1階、テラスあり。渡辺橋駅の近く',
    gf_detail: '要確認。グルテンの情報なし。ブリオッシュのつくフレンチのコース、焼き菓子とセイボリーのアフタヌーンティー、週末のビュッフェ。アレルギーは事前に伝えるよう店が案内している (食べログ)。',
    vegan_detail: '要確認。食べログに「ベジタリアンメニューあり」とあるが、ヴィーガンの料理の名前はなく、食事の制限は事前に伝えるよう店が案内している。',
    notes: '[フレンチ・堂島、フォーシーズンズの庭のビストロ] フォーシーズンズホテル大阪の1階にあるオールデイのフレンチビストロで、高い窓と夕方にうれしいテラス。ランチは3,500円の本日の一皿のセットから、フランスの地方をめぐるコースまで (Lyon がテーマの日はブリオッシュのおかわりつき)。アフタヌーンティーは季節替わりで、8月はメロン、秋はシャインマスカット。週末はディナービュッフェも。席は2時間制、サービス料15%。英語が通じ、はじめは日本語が苦手なスタッフが多かったという常連の声も。',
  });
}

// ================================================================ YAKITORI DINER THE HICKORY BIRD 梅田店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27146506/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:30', '23:00']);
  put({
    id: 'osaka_hickory_bird_umeda_banzaicho', name: 'YAKITORI DINER THE HICKORY BIRD 梅田店', category: 'OMNI',
    lat: 34.704523, lng: 135.504772, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Cajun-spiced and BBQ-sauced yakitori, cornbread, grilled vegetables, tamago-kake-gohan and a Basque cheesecake.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken yakitori diner.',
    hours_raw: 'Mon–Sat, holidays and the day before and after a holiday 17:30–23:00 (last order 22:30); closed Sundays (Tabelog). Reservations accepted, online too (October 2026). Cover ¥498 a head (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), QUICPay, PayPay (Tabelog). 20 seats with a counter, semi-private rooms and a mezzanine for one group; non-smoking; English menu and photo menu (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '万歳町1-8 — 3 min from Nakazakicho Stn',
    cuisine: 'Yakitori meets the American South: Kyoto red chicken in house Cajun spice grilled over charcoal, American-style BBQ sauce, in a Western-saloon room (Tabelog) · courses (Tabelog, tax included): 14 dishes with the signature Cajun chicken ¥4,500; 17 dishes ¥5,500; 14 dishes with two hours of 35 drinks ¥6,700 · start with cornbread, finish with Basque cheesecake (Tabelog) · dishes named in 2026: Cajun chicken, heart, rare cuts that sell out, grilled vegetables, chicken with blue cheese, a teacup tamago-kake-gohan · gins from around the world (Tabelog)',
    website: null, gmaps: gm('HICKORY BIRD 梅田 中崎町'), menu_url: null,
    notes: "[Yakitori · Nakazakicho, Cajun chicken in a saloon] A twenty-seat yakitori diner by Nakazakicho done up like a Western saloon, where Kyoto red chicken is rubbed with house Cajun spices, grilled over charcoal and glazed with an American-style BBQ sauce. Start with cornbread, try the heart and the chicken with blue cheese, finish with a teacup tamago-kake-gohan and the Basque cheesecake. Courses run ¥4,500–6,700; rare cuts sell out. Diners in 2026 praise the friendly owner; the counter is narrow. English menu.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)', 'grill staff'], origin: null, background: 'Per the shop-maintained Tabelog listing: a fusion of Southern American cuisine and charcoal yakitori, Kyoto red chicken with original Cajun spices, American BBQ sauce, cornbread, Basque cheesecake, gins from around the world, a Western-film saloon interior; English menu.', philosophy: null, specialty: 'Cajun chicken; BBQ-sauced yakitori.',
      anecdotes: [
        { text: '"The heart was exceptionally good, possibly the best I\'ve ever had." — August 2026.', source: R + 'B534444007/' },
        { text: '"The Basque cheesecake at the end was so good that I would want to come back just for that!" — September 2026.', source: R + 'B536408678/' },
        { text: '"Even the blue cheese, which I usually dislike, was delightful when paired with the tender chicken!" — October 2026.', source: R + 'B537899980/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): YAKITORI DINER THE HICKORY BIRD 梅田店、焼き鳥・居酒屋、大阪市北区万歳町1-8、中崎町駅から、月〜土・祝・祝前日・祝後日17:30〜23:00 (L.O.22:30)、日曜休み、チャージ498円、カード・QUICPay・PayPay 可、20席、半個室、中二階は1組だけ貸切、禁煙、英語のメニュー、写真のメニュー、アメリカ南部の料理と炭火焼き鳥の融合、Kyoto の赤鶏とオリジナルのケイジャンスパイス、アメリカの BBQ ソース、コーンブレッド、バスクチーズケーキ、世界のジン、西部劇の酒場のような内装、14品4,500円、17品5,500円、2時間35種の飲み放題つき14品6,700円。口コミ(2026年8月〜10月): ケイジャンチキン、ハツ、売り切れる希少部位、焼き野菜、ブルーチーズの鶏、湯のみの卵かけごはん、気さくな店主、カウンターがせまい、板に皿をおかないでと言われたのに店員がおいたという声、ネット予約。',
      confidence: 'medium', sources: [TB, R + 'B534444007/', R + 'B534553067/', R + 'B535263531/', R + 'B536408678/', R + 'B536768958/', R + 'B537226790/', R + 'B537439832/', R + 'B537815468/', R + 'B537899980/', R + 'B538444344/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists an English menu and a photo menu.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区万歳町1-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区万歳町1番8号 (go) 11m; no other record within 30 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from the Tabelog listing (tax included); ¥498 cover.', last_checked: TODAY, items: [
      it('', '', 'Course of 14 dishes with the Cajun chicken', '¥4,500', 'Courses', 'ask', 'no', 'Tabelog.', 'course_14'),
      it('', '', 'Course of 17 dishes', '¥5,500', 'Courses', 'ask', 'no', 'Tabelog.', 'course_17'),
      it('', '', 'Course of 14 dishes with two hours of drinks', '¥6,700', 'Courses', 'ask', 'no', 'Tabelog.', 'course_nomihodai'),
    ] }, {
    cuisine: '焼き鳥とアメリカ南部の出会い: Kyoto の赤鶏にオリジナルのケイジャンスパイスをもみこみ炭火で焼き、アメリカ風の BBQ ソースで、西部の酒場のような店で (食べログ)・コース (食べログ、税込): 名物のケイジャンチキンの14品4,500円、17品5,500円、35種2時間飲み放題つき14品6,700円・はじめはコーンブレッド、〆はバスクチーズケーキ (食べログ)・2026年の口コミに出てくる料理: ケイジャンチキン、ハツ、売り切れる希少部位、焼き野菜、ブルーチーズの鶏、湯のみの卵かけごはん・世界のジン (食べログ)',
    neighborhood: '万歳町1-8。中崎町駅から3分',
    gf_detail: '要確認。グルテンの情報なし。ケイジャンスパイスと BBQ ソースの焼き鳥、コーンブレッド、焼き野菜、卵かけごはん、バスクチーズケーキ。',
    vegan_detail: 'ヴィーガンではありません。鶏の焼き鳥のダイナー。',
    notes: '[焼鳥・中崎町、酒場のケイジャンチキン] 中崎町の近くの西部の酒場のような20席の焼き鳥のダイナーで、Kyoto の赤鶏に自家製のケイジャンスパイスをもみこみ、炭火で焼いてアメリカ風の BBQ ソースで。はじめはコーンブレッド、ハツやブルーチーズの鶏を、〆は湯のみの卵かけごはんとバスクチーズケーキ。コースは4,500〜6,700円、希少部位は売り切れることも。2026年の口コミでは気さくな店主が好評、カウンターはせまい。英語のメニューあり。',
  });
}

// ================================================================ 洋食 ヨコオ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270108/27001318/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '21:30']); const L = day(['11:30', '14:00'], ['18:00', '21:30']);
  put({
    id: 'osaka_yoshoku_yokoo_fukushima', name: '洋食 ヨコオ (YOKOO)', category: 'OMNI',
    lat: 34.700683, lng: 135.487513, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: the signatures are breaded beef cutlet, fried shrimp, cream croquettes, a katsu sandwich and demi-glace sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu hamburg, beef cutlet, fried shrimp, abalone and a demi-glace of veal and chicken stock.',
    hours_raw: 'Mon–Wed 18:00–21:30; Thu, Fri, Sat and holidays 11:30–14:00 (last order 13:30) and 18:00–21:30 (last order food 20:30, drinks 21:00); closed Sundays (Tabelog). Lunch has been reservation-based since the pandemic; walk-ins only at the counter (September 2026; December 2025). ¥500 a head at dinner; 10% service in the private room at dinner (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 16 seats in the dining room, 2 counter seats at lunch, a private room for 8 at dinner; non-smoking; wheelchair accessible (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: L, 4: L, 5: L }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '福島6-14-4 — 5 min from Fukushima Stn',
    cuisine: 'Yoshoku with a French touch, a Fukushima institution of over fifty years: seasonal starters, beef cutlet fried to medium, a hamburg of in-house-ground A4 black wagyu with Awaji onions, demi-glace of wagyu fond de veau with chicken, French wines chosen by a sommelier (Tabelog) · courses (Tabelog, tax included): special course with shrimp, abalone and roast black wagyu ¥8,800; a ¥6,800 course · lunch (Thu–Sat): the "YOKOO set" of beef cutlet, hamburg and fried shrimp with salad, rice and miso soup (2025–2026) · à la carte named in 2025–2026: cream croquettes, the famous katsu sandwich, grilled red snapper or amadai with butter sauce, steak with garlic rice, omurice, appetizer platters',
    website: null, gmaps: gm('洋食 ヨコオ 福島'), menu_url: null,
    notes: "[Yoshoku · Fukushima, a fifty-year house with wine] A white-tablecloth yoshoku restaurant near Fukushima station, open for over fifty years. Order the hamburg of in-house-ground A4 wagyu with Awaji onions, a beef cutlet fried to medium and fried shrimp, all with a deep demi-glace, plus cream croquettes or the katsu sandwich, with a French wine. Lunch (Thursday to Saturday) is the 'YOKOO set' of all three mains; dinner courses run ¥6,800–8,800. Book ahead; its station counter in Shin-Osaka sells the sandwiches and omurice.",
    chef_bio: { chef_name: null, roles: ['Owner ("master"; unnamed)', 'kitchen staff and sommelier'], origin: null, background: 'Per the shop-maintained Tabelog listing: a long-established yoshoku restaurant in Fukushima for over 50 years, combining Western cuisine and French taste; A4 wagyu hamburg, medium-fried beef cutlet, wagyu fond de veau demi-glace; French wines selected by a sommelier. A September 2026 diner notes it has passed down from a grandfather\'s day; a February 2026 diner marks its 50th anniversary. Its Shin-Osaka station branch is osaka_restaurant_yokoo_noren_meguri_shin_osaka (in data).', philosophy: null, specialty: 'Wagyu hamburg; beef cutlet; demi-glace.',
      anecdotes: [
        { text: '"While the streets of Fukushima have transformed into a bustling metropolis, I hope the master\'s smile and the restaurant\'s atmosphere remain unchanged forever." — April 2026, the ¥8,800 special course.', source: R + 'B476866406/' },
        { text: '"I highly recommend the YOKOO set, which includes three main dishes." — May 2026.', source: R + 'B524690582/' },
        { text: '"The restaurant exudes a sense of history with its elegant decor and pristine white tablecloths, creating an atmosphere that assures you of authentic cuisine." — February 2026.', source: R + 'B522535566/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 洋食 ヨコオ、洋食・ビーフカツ・ワインバー、大阪市福島区福島6-14-4、福島駅から5分、月〜水18:00〜21:30、木・金・土・祝11:30〜14:00 (L.O.13:30)、18:00〜21:30 (L.O.料理20:30、ドリンク21:00)、日曜休み、ランチは木・金・土のみ、ディナーはひとり500円、ディナーの個室はサービス料10%、カード可、電子マネー・QR 不可、16席 (ランチはカウンター2席、ディナーは8名の個室)、禁煙、車いす可、福島で50年以上の老舗の洋食、洋食×フレンチ、季節の前菜、ミディアムに揚げるビーフカツ、店で挽いた A4黒毛和牛と Awaji の玉ねぎのハンバーグ、和牛のフォン・ド・ヴォーに鶏を加えたデミグラスソース、ソムリエが選ぶフランスのワイン、エビ・アワビ・黒毛和牛のローストの特別コース8,800円、6,800円のコース。口コミ(2025年12月〜2026年9月): ヨコオセット (ビーフカツ、ハンバーグ、エビフライ)、サラダ、ごはん、みそ汁、クリームコロッケ、名物のカツサンド、甘鯛のバターソース、ガーリックライスのステーキ、オムライス、前菜の盛り合わせ、50周年、祖父の代から続く、ランチはコロナから予約制、白いテーブルクロス、マスターの笑顔。',
      confidence: 'medium', sources: [TB, R + 'B424064693/', R + 'B476866406/', R + 'B518106435/', R + 'B522423099/', R + 'B522535566/', R + 'B522978278/', R + 'B524690582/', R + 'B536602757/', R + 'B92740631/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set lunches and courses; book ahead (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市福島区福島6-14-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市福島区福島六丁目14番4号 (go) 7m; no other record within 30 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from the Tabelog listing (tax included).', last_checked: TODAY, items: [
      it('', '', 'Special course with shrimp, abalone and roast black wagyu', '¥8,800', 'Dinner', 'no', 'no', 'Tabelog; April 2026.', 'special_course'),
      it('', '', 'Dinner course', '¥6,800', 'Dinner', 'no', 'no', 'Tabelog.', 'course_6800'),
      it('', '', '"YOKOO set" lunch: beef cutlet, hamburg and fried shrimp', '', 'Lunch', 'no', 'no', 'May 2026.', 'yokoo_set'),
    ] }, {
    cuisine: 'フレンチの感覚を加えた洋食で、福島で50年以上の老舗: 季節の前菜、ミディアムに揚げるビーフカツ、店で挽いた A4黒毛和牛と Awaji の玉ねぎのハンバーグ、和牛のフォン・ド・ヴォーに鶏を加えたデミグラスソース、ソムリエが選ぶフランスのワイン (食べログ)・コース (食べログ、税込): エビ、アワビ、黒毛和牛のローストの特別コース8,800円、6,800円のコース・ランチ (木〜土): ビーフカツ、ハンバーグ、エビフライの「ヨコオセット」にサラダ、ごはん、みそ汁 (2025年〜2026年)・2025年〜2026年の口コミに出てくるアラカルト: クリームコロッケ、名物のカツサンド、鯛や甘鯛のバターソース、ガーリックライスのステーキ、オムライス、前菜の盛り合わせ',
    neighborhood: '福島6-14-4。福島駅から5分',
    gf_detail: 'グルテンフリーにはしにくい: 名物はパン粉のビーフカツ、エビフライ、クリームコロッケ、カツサンド、デミグラスソース。',
    vegan_detail: 'ヴィーガンではありません。和牛のハンバーグ、ビーフカツ、エビフライ、アワビ、仔牛と鶏のフォンのデミグラスソース。',
    notes: '[洋食・福島、ワインのある50年の洋食店] 福島駅の近くの白いテーブルクロスの洋食店で、50年以上続く。店で挽いた A4和牛と Awaji の玉ねぎのハンバーグ、ミディアムに揚げるビーフカツ、エビフライを深いデミグラスで、クリームコロッケやカツサンドも、フランスのワインと。ランチ (木〜土) は3つのメインの「ヨコオセット」、夜のコースは6,800〜8,800円。予約がおすすめ。新大阪駅の店ではカツサンドやオムライスを売っている。',
  });
}

save();
