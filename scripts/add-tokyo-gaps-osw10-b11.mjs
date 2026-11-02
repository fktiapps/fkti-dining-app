// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles) — lane osw10 (circle yotsuya), batch 11.
//   + 花咲き山 Hanasaki Yama (16-seat home-style French bistro run by a couple; ¥1,000 lunches; seafood pot pie at night)
//   + CRUZ BURGERS & CRAFT BEERS (20-seat burger and craft-beer bar, Tabelog Hamburger 100; same building as Hanasaki Yama)
//   + うんてん洋菓子店 四ツ谷店 Unten Yogashi Ten (Okinawa pastry shop's Tokyo café: parfaits, cream puffs, cookies)
//   + 萬屋 おかげさん Yorozuya Okagesan (17-seat omakase izakaya for sake; Tabelog Izakaya 100; reservation only)
//   Chain check. Unten: the company site lists two shops, 豊見城 (Okinawa) and Yotsuya — a small group. Hanasaki Yama,
//   CRUZ and Okagesan: one listing each. Skipped 町田商店 四谷麹町店 13298682 (Machida Shoten, a fast-growing iekei chain;
//   its Yotsuya shop was skipped in osw10 b6).
//   None is in data/tokyo.json (grep by name, Tabelog id and address). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw10-11');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13298682', '町田商店 四谷麹町店 — Machida Shoten, a fast-growing iekei ramen chain; not researched.');

// ================================================================ 花咲き山
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13012131/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:45', '13:30'], ['18:00', '21:00']);
  put({
    id: 'tokyo_hanasaki_yama_yotsuya', name: '花咲き山 (Hanasaki Yama)', category: 'OMNI',
    lat: 35.688083, lng: 139.726448, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Lunch plates include hamburg steak with demi-glace, fresh pasta, chicken cutlet and cream stew, and the dinner signature is a seafood pie baked in a cocotte; nothing gluten-free is described. A September 2025 diner with allergies thought the butter might be blended with margarine.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: every main is meat or seafood with butter, cream or cheese sauces.',
    hours_raw: 'Mon–Fri lunch 11:45–13:30 and dinner 18:00–21:00; closed Saturday, Sunday and holidays (Tabelog). Lunch fills by about 12:15, with a "Full" sign on the door, a 50-minute limit and dishes that sell out (2025–26 reviews). Cash only (Tabelog; September 2026). No service or table charge; children under school age may be refused, and a ¥500 table charge applies to children who do not order; private hire for 10–12 (Tabelog). 16 seats; non-smoking (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Yotsuya Sanei-cho 15-6, オグラビル 1F, on Sanei-dōri toward Yotsuya-sanchome — 6 min from JR Yotsuya Stn (Yotsuya exit); CRUZ Burgers is in the same building',
    cuisine: 'Long-running casual French bistro (2025–26 reviews) · lunch about ¥900–1,100 with salad, soup and rice: the Hanasaki Yama lunch of a small hamburg steak with Japanese mushroom sauce, fresh pasta with salsa and seasonal fruit; daily specials such as demi-glace cheese hamburg, herb-grilled Daisen chicken, chicken cutlet with balsamic, Daisen chicken and mushroom cream stew, scallops and zucchini with mentaiko sauce, omurice with seafood curry sauce (limited servings) · dinner: the signature seafood pie baked in a cocotte (dinner only), apple pie with vanilla ice cream; a menu one 2025 regular found unchanged and still reasonable',
    website: null, gmaps: gm('花咲き山 四谷三栄町'), menu_url: null,
    notes: "[French · Yotsuya, a fairy-tale bistro run by a couple] A storybook little bistro with big windows on Sanei-dōri — one diner compares it to a Studio Ghibli set — run by a couple who cook and serve home-style French. Weekday lunch is the draw: around ¥1,000 for salad, a thick potato-corn soup, rice and a main such as a demi-glace cheese hamburg with a hint of cinnamon, herb-grilled Daisen chicken or the house plate of hamburg, fresh pasta and fruit; portions are modest and the daily specials sell out, so come before 12:15. At dinner the dish to order is the seafood pie baked in a cocotte. One diner with allergies found the butter seemed blended with margarine. Cash only; weekdays only.",
    chef_bio: { chef_name: null, roles: ['Run by a couple (September 2025 review)'], origin: null,
      background: 'No source names the owners. "The couple running the place provided attentive service and cooking" (September 2025); "A refined lady guided me to my table" (September 2025); "a cozy French restaurant that has been around for a long time" (March 2026); a March 2025 diner who had known it for a long time found the dinner menu and prices unchanged, now open on weekdays only.',
      philosophy: null, specialty: 'Lunch plates; seafood pie in a cocotte.',
      anecdotes: [
        { text: '"The seafood pot pie is their specialty and is unforgettable in its deliciousness. It\'s only available during dinner." — March 2025.', source: R + 'B507014337/' },
        { text: '"I expected a regular hamburger, but it had a subtle sweet aroma reminiscent of cinnamon, and it was absolutely delicious." — May 2026, lunch ¥1,000.', source: R + 'B530942799/' },
        { text: '"During my previous visits around 12:15 PM, the door handle had a \'Full\' sign… I finally managed to visit on my third attempt." — August 2026.', source: R + 'B534755747/' },
      ],
      japanese_sources_summary: '食べログ: 花咲き山、フレンチ、四谷三栄町15-6 オグラビル1F、JR四ツ谷駅四ツ谷口から徒歩6分、月〜金11:45〜13:30・18:00〜21:00、土日祝休み、カード・電子マネー・QR不可、サービス料・チャージ料なし、16席、禁煙、未就学児は断る場合あり、注文しない子どもはテーブルチャージ500円。口コミ(2025年3月〜2026年9月): 夫婦で営む、ランチ900〜1,100円 (サラダ、スープ、ご飯付き)、花咲き山ランチ (ハンバーグ、生パスタ、季節の果物)、デミグラスとチーズのハンバーグ、Daisen 鶏の香草焼き、海鮮カレーのオムライス、昼は12時15分ごろ満席、50分制、夜は名物の魚介のココットパイ。',
      confidence: 'medium', sources: [TB, R + 'B503759494/', R + 'B505146063/', R + 'B507014337/', R + 'B513919559/', R + 'B514081107/', R + 'B524238509/', R + 'B524437586/', R + 'B524617270/', R + 'B530942799/', R + 'B534530623/', R + 'B534755747/', R + 'B534798961/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small lunch menu with daily specials; cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_approx: 'block', address_ja: '東京都新宿区四谷三栄町15-6 オグラビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.688083, 139.726448); cross-checked: GSI 東京都新宿区四谷三栄町15番6号 (go) 6m. Same building as CRUZ Burgers (tokyo_cruz_burgers_yotsuya, address_ja "東京都新宿区四谷三栄町15-6 小椋ビル 1F"; オグラ and 小椋 are the same name), 5 m away on Tabelog, so the pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534798961/', R + 'B524238509/', R + 'B513919559/'],
    price_note: 'Lunch prices from 2025–26 reviews.', last_checked: TODAY, items: [
      it('', '', 'Hanasaki Yama lunch: hamburg, fresh pasta, fruit, salad, soup, rice', '¥1,100', 'Lunch', 'no', 'no', 'September 2026 review; ¥950 in March 2025.', 'hanasaki_lunch'),
      it('', '', 'Daily lunch special with salad, soup and rice', '¥1,000', 'Lunch', 'ask', 'no', '2025–26 reviews.', 'daily_lunch'),
      it('', '', 'Seafood pie baked in a cocotte (dinner)', '', 'Dinner', 'no', 'no', 'March 2025 review; price not given.', 'seafood_pie'),
    ] }, {
    cuisine: '長く続く気軽なフレンチのビストロ (2025〜26年の口コミ)・ランチはサラダ、スープ、ご飯付きで900〜1,100円ほど: 小さなハンバーグの和風きのこソース、生パスタのサルサソース、季節の果物の花咲き山ランチ。日替わりは、デミグラスとチーズのハンバーグ、Daisen 鶏の香草焼き、バルサミコのチキンカツ、Daisen 鶏ときのこのクリーム煮、ほたてとズッキーニの明太子ソース、海鮮カレーソースのオムライス (数量限定) など・夜: 名物の魚介のココットパイ (夜だけ)、アップルパイとバニラアイス。2025年の常連によればメニューも値段も昔のまま',
    neighborhood: '四谷三栄町15-6 オグラビル1F、Sanei 通りを四谷三丁目方面へ。JR四ツ谷駅四ツ谷口から徒歩6分。同じビルに CRUZ Burgers',
    gf_detail: '要確認。ランチはデミグラスのハンバーグ、生パスタ、チキンカツ、クリーム煮など、夜の名物はココットのパイ。グルテンフリーの説明はない。2025年9月のアレルギーのある客は、バターにマーガリンが混ざっているように感じたという。',
    vegan_detail: 'ヴィーガンではない。メインはどれも肉か魚介で、バター、クリーム、チーズのソース。',
    notes: '[フレンチ・四谷、夫婦で営むおとぎ話のようなビストロ] Sanei 通りの大きな窓の絵本のような小さなビストロ。スタジオジブリの映画のようだという客も。夫婦が料理と給仕をこなす家庭的なフレンチ。平日のランチがお目当てで、1,000円ほどでサラダ、とろりとしたじゃがいもとコーンのスープ、ご飯に、シナモンがほのかに香るデミグラスとチーズのハンバーグ、Daisen 鶏の香草焼き、ハンバーグと生パスタと果物の店名のプレートなど。量は控えめで日替わりは売り切れるので、12時15分より前に。夜はココットで焼く魚介のパイを。アレルギーのある客はバターにマーガリンが混ざっているようだと感じた。現金のみ、平日のみ。',
  });
}

// ================================================================ CRUZ BURGERS & CRAFT BEERS
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13189090/'; const R = TB + 'dtlrvwlst/'; const MENU = TB + 'dtlmenu/';
  const H = day(['11:30', '15:30'], ['17:30', '21:00']);
  put({
    id: 'tokyo_cruz_burgers_yotsuya', name: 'CRUZ BURGERS & CRAFT BEERS', category: 'OMNI',
    lat: 35.688124, lng: 139.726415, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: burgers on long-fermented wheat buns; nothing gluten-free is listed.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef patties, house-smoked bacon, pulled pork, cheese; the avocado and cheese burger still has a beef patty.',
    hours_raw: 'Mon and Thu–Sun lunch 11:30–15:30 (last order 15:00) and dinner 17:30–21:00 (last order 20:30); closed Tuesday and Wednesday; a short summer break in August (Tabelog). Reservations only for 17:30 onward; one dish and one drink per person; 2-hour limit at dinner; no strollers inside (Tabelog). Lunch fills soon after opening, with a line even on weekdays (October 2026). Order by voice or by smartphone (October 2026). 20 seats (2 at the counter, 18 at tables); non-smoking (Tabelog). Cards, e-money and QR including PayPay (Tabelog).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yotsuya Sanei-cho 15-6, 小椋ビル 1F — 5 min from Yotsuya Stn, 6 min from Yotsuya-sanchome; Hanasaki Yama is in the same building',
    cuisine: '"Tokyo Style Burger": hand-chopped domestic beef patty grilled on lava stone, in a long-fermented French-style bun, with waffle fries; house-smoked bacon from Sasuke, Mochi and Yonezawa pork (Tabelog menu, tax included, updated October 2026) · Noble Bacon Cheese ¥2,380; A·B·C (avocado, bacon, cheese) ¥2,250; bacon cheese ¥1,980; chilli, cheese and jalapeño ¥1,930; teriyaki, cheese and egg with a peanut-spiked teriyaki ¥1,980; avocado and cheese ¥1,780; extras such as a patty ¥660 or bacon ¥350 · weekday lunch set ¥1,680 with fries or coleslaw and a drink (October 2026) · dinner only: BBQ pulled-pork plate for 3–4 with tortillas ¥2,480, grilled noble bacon ¥950; buffalo wings ¥850 · five draft American-style craft beers from Japanese breweries, shakes',
    website: null, gmaps: gm('CRUZ BURGERS 四谷'), menu_url: MENU,
    notes: "[Burgers · Yotsuya, a Tabelog 100 burger and craft-beer bar] A small burger bar on Sanei-dōri, on Tabelog's Hamburger 100 list in 2017–2019, 2021 and 2026, that has drawn longer lines since appearing on a YouTube channel (TV producer Nobuyuki Sakuma recommends the pulled pork). The patty is hand-chopped domestic beef grilled on lava stone, steak-like in texture, in a long-fermented, toasted bun; the bacon is smoked in-house from premium pork. Favourites are the Noble Bacon Cheese, the teriyaki with egg and the dinner-only pulled-pork plate wrapped in tortillas; weekday lunch is a ¥1,680 set with fries or coleslaw and a drink. Five American-style craft beers on draft. A couple of October 2026 diners found the burgers good but not memorable. Closed Tuesdays and Wednesdays.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'No source names the owner or cooks. Tabelog: domestic beef patty hand-chopped and grilled on lava stone; long-fermented French-style bun; house-smoked bacon; five draft beers "carefully selected by the owner from domestic American-style craft breweries"; the pulled-pork plate "Recommended by TV producer Nobuyuki Sakuma". Tabelog Hamburger "Tabelog 100" 2017, 2018, 2019, 2021, 2026.',
      philosophy: null, specialty: 'Noble Bacon Cheese; pulled pork.',
      anecdotes: [
        { text: '"I visited after watching a video by Nobuyuki Sakuma. I had the BBQ Pulled Pork & Cheese Burger… Everything was incredibly delicious!" — October 2026.', source: R + 'B536762459/' },
        { text: '"I was surprised by the meatiness of the patty, which felt like eating steak." — October 2026.', source: R + 'B538394171/' },
        { text: '"They are quite delicious, but there wasn\'t anything that would draw me back for a second visit." — October 2026.', source: R + 'B537095743/' },
      ],
      japanese_sources_summary: '食べログ: CRUZ BURGERS & CRAFT BEERS、ハンバーガー・ビアバー・ダイニングバー、四谷三栄町15-6 小椋ビル1F、四ツ谷駅から徒歩5分、月・木〜日11:30〜15:30 (L.O.15:00)・17:30〜21:00 (L.O.20:30)、火・水休み、予約は17:30以降、1人1品1ドリンク、120分制、ベビーカー不可、20席、禁煙、カード・電子マネー・QR 可、ハンバーガー百名店2017・2018・2019・2021・2026、国産牛の手切りパティを溶岩石で焼く、長時間発酵のフランス風バンズ、自家製スモークベーコン、ノーブルベーコンチーズ2,380円、照り焼きチーズエッグ1,980円、BBQプルドポークプレート2,480円 (夜のみ)、国産のアメリカンスタイルのクラフトビール5種。口コミ(2026年10月): 平日ランチセット1,680円、ステーキのようなパティ、YouTube で紹介されて行列、Nobuyuki Sakuma のおすすめのプルドポーク。',
      confidence: 'medium', sources: [TB, MENU, R + 'B536762459/', R + 'B536986405/', R + 'B537095743/', R + 'B537112600/', R + 'B537225531/', R + 'B537543976/', R + 'B537567869/', R + 'B537624970/', R + 'B538042379/', R + 'B538269494/', R + 'B538394171/', R + 'B538478974/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by voice or by smartphone; set lunch is simple to choose.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '東京都新宿区四谷三栄町15-6 小椋ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (menu updated October 2026, Tabelog 100 2026); reviews dated October 2026.' },
    pin_source: `Tabelog ${TB} (35.688124, 139.726415); cross-checked: GSI 東京都新宿区四谷三栄町15番6号 (go) 6m. Same building as Hanasaki Yama (tokyo_hanasaki_yama_yotsuya, address_ja "東京都新宿区四谷三栄町15-6 オグラビル 1F"), 5 m away on Tabelog, so the pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, R + 'B537112600/'],
    price_note: 'Tabelog menu (tax included, updated October 2026); lunch set from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Noble Bacon Cheese burger with waffle fries', '¥2,380', 'Burgers', 'no', 'no', 'Tabelog menu.', 'noble_bacon'),
      it('', '', 'Bacon cheese burger', '¥1,980', 'Burgers', 'no', 'no', 'Tabelog menu.', 'bacon_cheese'),
      it('', '', 'Teriyaki, cheese and egg burger', '¥1,980', 'Burgers', 'no', 'no', 'Tabelog menu; teriyaki contains peanuts.', 'teriyaki_egg'),
      it('', '', 'Weekday lunch set (burger, fries or coleslaw, drink)', '¥1,680', 'Lunch', 'no', 'no', 'October 2026 review.', 'lunch_set'),
      it('', '', 'BBQ pulled-pork plate for 3–4 (dinner)', '¥2,480', 'Dinner', 'ask', 'no', 'Tabelog menu; served with tortillas.', 'pulled_pork'),
    ] }, {
    cuisine: '「Tokyo Style Burger」: 国産牛の手切りパティを溶岩石で焼き、長時間発酵のフランス風バンズに。ワッフルフライ付き。ベーコンは Sasuke、Mochi、Yonezawa の豚で自家製スモーク (食べログのメニュー、税込み、2026年10月更新)・ノーブルベーコンチーズ2,380円、A・B・C (アボカド、ベーコン、チーズ) 2,250円、ベーコンチーズ1,980円、チリ・チーズ・ハラペーニョ1,930円、ピーナッツ入りの照り焼き・チーズ・エッグ1,980円、アボカドチーズ1,780円、パティ追加660円、ベーコン追加350円など・平日ランチセット1,680円 (フライかコールスローとドリンク) (2026年10月)・夜だけ: 3〜4人前の BBQ プルドポークプレート (トルティーヤ付き) 2,480円、ノーブルベーコンのグリル950円、バッファローウィング850円・国産のアメリカンスタイルのクラフトビール5種を樽で、シェイク',
    neighborhood: '四谷三栄町15-6 小椋ビル1F。四ツ谷駅から徒歩5分、四谷三丁目から6分。同じビルに花咲き山',
    gf_detail: 'グルテンフリーではない。長時間発酵の小麦のバンズのバーガー。グルテンフリーのメニューはない。',
    vegan_detail: 'ヴィーガンではない。牛のパティ、自家製ベーコン、プルドポーク、チーズ。アボカドチーズにも牛のパティ。',
    notes: '[バーガー・四谷、百名店のバーガーとクラフトビール] Sanei 通りの小さなバーガーバー。食べログのハンバーガー百名店に2017〜2019、2021、2026年に選ばれ、YouTube で紹介されてから行列が長くなった (テレビプロデューサーの Nobuyuki Sakuma がプルドポークを推している)。パティは国産牛の手切りで溶岩石焼き、ステーキのような食感で、長時間発酵のバンズはこんがり。ベーコンは上等な豚を自家製でスモーク。人気はノーブルベーコンチーズ、エッグ入りの照り焼き、夜だけのトルティーヤで巻くプルドポークのプレート。平日のランチはフライかコールスローとドリンクのセットで1,680円。アメリカンスタイルのクラフトビールが樽で5種。2026年10月にはおいしいが印象に残らないという声も。火曜・水曜休み。',
  });
}

// ================================================================ うんてん洋菓子店 四ツ谷店
{
  const TB = 'https://tabelog.com/en/tokyo/A1308/A130801/13293454/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://unten.store/';
  const H = day(['11:30', '19:00']);
  put({
    id: 'tokyo_unten_yogashi_yotsuya', name: 'うんてん洋菓子店 四ツ谷店 (Unten Yogashi Ten Yotsuya)', category: 'OMNI',
    lat: 35.683183, lng: 139.727411, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The parfaits layer sponge cake, cookies and meringue, and the case holds cream puffs, croissants and cakes; nothing gluten-free is described.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Some parfaits use a soy-milk cream, but they also hold milk ice cream, sponge and meringue, and no vegan item is named.',
    hours_raw: 'Mon and Thu–Sun (and holidays) 11:30–19:00 (last order 18:30); closed Tuesday and Wednesday, open when those are holidays (Tabelog). No reservations; order and pay at the register, then sit (July 2026). 10 seats at five tables for two; non-smoking (Tabelog). Cards, e-money and QR (Tabelog). Cream puffs can sell out by evening (October 2026). Takeaway cakes, baked goods and cookie tins; LINE notices (2026 reviews). Opened 22 December 2023 (Tabelog).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Wakaba 1-16-7, in a residential lane past the State Guest House — 7 min from Yotsuya Stn',
    cuisine: 'Tokyo shop of an Okinawa pastry maker, with Okinawan fruit and citrus in its sweets (official site; 2026 reviews) · parfaits such as passion fruit ¥1,700, purple sweet potato Mont Blanc with soy-milk cream and shikuwasa jelly ¥1,500, carrot cake, mango and chestnut (2026 reviews) · cakes: passion-fruit shortcake ¥980, carrot cake with peanut cream ("Carroppy") ¥780, purple sweet potato Mont Blanc ¥770, cheesecake; cream puffs, seasonal mango cream puff (2026 reviews) · baked goods and "Meguru" cookies made with sugarcane fibre left after pressing (official site); mini breads such as salt bread and brown-sugar croissant warmed for eating in · coffee ¥680, Kinkawa black tea ¥850, shikuwasa lemonade, brown-sugar matcha latte',
    website: SITE, gmaps: gm('うんてん洋菓子店 四ツ谷'), menu_url: null,
    notes: "[Sweets · Yotsuya, an Okinawan pastry café in the backstreets] The Tokyo outpost of an Okinawa pastry shop, tucked into a residential lane a short walk past the State Guest House, with ten seats for eating in. Its idea is sweets that make everyone glad, down to cookies baked with the sugarcane fibre left after juicing. The parfaits are the reason to sit down: passion fruit layered with crunchy and juicy textures, or a purple sweet potato Mont Blanc with soy-milk cream and shikuwasa jelly, alongside a carrot cake with peanut cream and a passion-fruit shortcake. Cream puffs sell out by evening. 2026 diners praise the warm, smiling staff; one found the air conditioning strong. Order at the register; closed Tuesdays and Wednesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 22 December 2023 (Tabelog); the second shop of ペストリーうんてん, whose other shop is in 豊見城, Okinawa (official site).',
      background: 'Official site (unten.store): ペストリーうんてん makes sweets on the concept of "「うれしい」がめぐるお菓子", caring for health and the environment; its Meguru cookies use sugarcane left after juicing, which would otherwise be burned; shops in 豊見城市平良76-1 (Okinawa) and 若葉1-16-7 (Yotsuya); an online shop and a farm page. No source names the bakers.',
      philosophy: '"「うれしい」がめぐるお菓子" — sweets that pass happiness around, to growers and eaters alike (official site).', specialty: 'Parfaits; carrot cake with peanut cream; cream puffs.',
      anecdotes: [
        { text: '"The top layer of soy milk cream was subtly sweet, with a strong soy milk flavor… there were fine shikuwasa jelly pieces mixed in." — September 2026, purple sweet potato Mont Blanc parfait ¥1,500.', source: R + 'B529545586/' },
        { text: '"The air conditioning inside was quite strong… for someone like me who gets cold easily, having a light cardigan might be a good idea." — July 2026.', source: R + 'B531128433/' },
        { text: '"I was surprised by such warm hospitality for just a takeout customer." — October 2026.', source: R + 'B538093376/' },
      ],
      japanese_sources_summary: '公式サイト (unten.store): ペストリーうんてん、「うれしい」がめぐるお菓子がコンセプト、身体や環境にも配慮、めぐるクッキーには搾汁後のサトウキビ、豊見城店 (沖縄県豊見城市平良76-1) と四ツ谷店 (新宿区若葉1-16-7)、オンラインショップ。食べログ: うんてん洋菓子店 四ツ谷店、洋菓子・カフェ、若葉1-16-7、四ツ谷駅から徒歩7分、月・木〜日・祝11:30〜19:00 (L.O.18:30)、火・水休み (祝日は営業)、予約不可、10席、禁煙、カード・電子マネー・QR 可、テイクアウト、2023年12月22日オープン。口コミ(2026年6月〜10月): パッションフルーツのパフェ1,700円、紅芋のモンブランパフェ1,500円 (豆乳クリーム、シークヮーサーのジュレ)、キャロットケーキ780円、パッションフルーツのショートケーキ980円、シュークリーム、めぐるクッキー、レジで注文して先に会計、スタッフが親切、冷房が強め。',
      confidence: 'medium', sources: [SITE, TB, R + 'B502845394/', R + 'B511371783/', R + 'B525957354/', R + 'B529545586/', R + 'B531128433/', R + 'B531646413/', R + 'B531690929/', R + 'B532452935/', R + 'B535106672/', R + 'B535519641/', R + 'B538093376/', R + 'B538158025/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order and pay at the counter, then sit; friendly staff.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区若葉1-16-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (2026 notices) and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.683183, 139.727411); cross-checked: GSI 東京都新宿区若葉一丁目16番地 (lot) 47m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B531128433/', R + 'B529545586/', R + 'B532452935/'],
    price_note: 'Prices from June–September 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('', '', 'Passion fruit parfait', '¥1,700', 'Parfaits', 'ask', 'ask', 'July 2026 review.', 'passion_parfait'),
      it('', '', 'Purple sweet potato Mont Blanc parfait', '¥1,500', 'Parfaits', 'ask', 'ask', 'September 2026 review.', 'beniimo_parfait'),
      it('', '', 'Carrot cake with peanut cream', '¥780', 'Cakes', 'ask', 'ask', 'July 2026 review.', 'carrot_cake'),
      it('', '', 'Passion fruit shortcake', '¥980', 'Cakes', 'no', 'no', 'July 2026 review.', 'passion_shortcake'),
      it('', '', 'Blended coffee', '¥680', 'Drinks', '', '', 'September 2026 review.', 'coffee'),
    ] }, {
    cuisine: '沖縄の洋菓子店の東京の店。沖縄の果物や柑橘を使ったお菓子 (公式サイト、2026年の口コミ)・パフェ: パッションフルーツ1,700円、豆乳クリームとシークヮーサーのジュレの紅芋モンブラン1,500円、キャロットケーキ、マンゴーと栗など (2026年の口コミ)・ケーキ: パッションフルーツのショートケーキ980円、ピーナッツクリームのキャロットケーキ (キャロピー) 780円、紅芋のモンブラン770円、チーズケーキ。シュークリーム、季節のマンゴーのシュークリーム (2026年の口コミ)・焼き菓子と搾汁後のサトウキビを使った「めぐるクッキー」(公式サイト)。塩パンや黒糖クロワッサンのミニパンは店内なら温めてくれる・コーヒー680円、Kinkawa の紅茶850円、シークヮーサーのレモネード、黒糖抹茶ラテ',
    neighborhood: '若葉1-16-7、Geihinkan の先の住宅街の路地。四ツ谷駅から徒歩7分',
    gf_detail: '要確認。パフェにはスポンジ、クッキー、メレンゲが入り、ケースにはシュークリーム、クロワッサン、ケーキ。グルテンフリーの説明はない。',
    vegan_detail: '要確認。豆乳クリームを使うパフェもあるが、ミルクアイス、スポンジ、メレンゲも入り、ヴィーガンの品は書かれていない。',
    notes: '[甘味・四谷、路地裏の沖縄の洋菓子カフェ] Geihinkan の先の住宅街の路地にある、沖縄の洋菓子店の東京の店。店内は10席。みんなが嬉しくなるお菓子がテーマで、搾汁後のサトウキビを生地に入れたクッキーまである。座って食べるならパフェ: 食感が次々に変わるパッションフルーツ、豆乳クリームとシークヮーサーのジュレの紅芋モンブラン。ピーナッツクリームのキャロットケーキやパッションフルーツのショートケーキも。シュークリームは夕方には売り切れることも。2026年の客は笑顔の温かいスタッフを褒めていて、冷房が強いと感じた人も。レジで注文、火曜・水曜休み。',
  });
}

// ================================================================ 萬屋 おかげさん
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130903/13025617/'; const R = TB + 'dtlrvwlst/'; const PARTY = TB + 'party/'; const SITE = 'http://www.okagesan.net';
  const H = day(['18:00', '22:00']);
  put({
    id: 'tokyo_yorozuya_okagesan_yotsuya', name: '萬屋 おかげさん (Yorozuya Okagesan)', category: 'OMNI',
    lat: 35.6877, lng: 139.725064, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking: the shop asks guests to state allergies and dislikes when reserving (Tabelog, quoting its website). The omakase is dashi-led fish cooking with soy-based seasonings, satsuma-age and an okara dish; nothing gluten-free is described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-centred omakase built on dashi.',
    hours_raw: 'Tue–Sat from 18:00, last entry 19:00, closing about 22:00; closed Sunday, Monday and holidays (Tabelog). Reservation only, by the shop (no travel agencies); single diners only on the day and not when only a table for two is free; the shop calls the day before to confirm; cancellation fee (Tabelog). Often fully booked; walk-ins turned away (May and July 2026). Chef\'s-choice course only, ¥8,000 + tax (¥8,800) since 1 October 2025, with optional extras; most guests add dishes, and with drinks the bill is about ¥14,000 (Tabelog). 17 seats: 7 at the counter, 10 at tables; non-smoking (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'by_reservation',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yotsuya 2-10, 松本館 B1F — 6 min from Yotsuya-sanchome Stn, 7 min from Yotsuya Stn',
    cuisine: 'Omakase izakaya built around Japanese sake (Tabelog; 2026 reviews) · the chef\'s-choice course ¥8,800 with optional additions ordered in advance ("request menu"): e.g. dadacha edamame from Tsuruoka, warm asparagus in dashi, fresh junsai with grated daikon and ponzu, sashimi such as live mako karei and hook-caught katsuo seared over charcoal, kinmedai with karasumi, aji namero with shiso and nori, okara with sakura shrimp, corn satsuma-age, simmered anago, pickled or grilled sawara; always finished with a soft salt rice ball (2026 reviews) · sake chosen to suit each dish, with a choice of cups; brands such as Kuzuryu, Nabeshima, Kikusui and Junmai Daiginjo bottlings (January–July 2026)',
    website: SITE, gmaps: gm('萬屋 おかげさん 四谷'), menu_url: null,
    notes: "[Izakaya · Yotsuya, a sake lover's omakase in a basement] A 17-seat basement izakaya near Yotsuya-sanchome, on Tabelog's Izakaya 100 list four times, that runs only on reservations and a chef's-choice course (¥8,800 plus whatever you add, about ¥14,000 with drinks). Dishes come one after another to go with sake: seasonal greens in dashi, sashimi such as kinmedai under karasumi or charcoal-seared katsuo, aji namero, okara with sakura shrimp, simmered anago, and always, at the end, a soft salt rice ball that diners rave about. The staff choose sake to match and let you pick your cup. The owner greets each table, and regulars book the counter privately. One February 2026 diner found nothing on the menu remarkable but praised the care. Book well ahead; closed Sundays, Mondays and holidays.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'No source names the owner. Reviews: "the owner personally came to greet us" (April 2026); "the owner greeted each of us individually while handing out business cards. A lively female staff member carefully explained the course details written on the blackboard" (July 2026); "reflecting the warm personality of the owner" (June 2026). Tabelog: Izakaya "Tabelog 100" 2021, 2022; Izakaya EAST "Tabelog 100" 2024, 2025; chef\'s-choice course only, ¥8,000 + tax from 1 October 2025 (quoting the shop\'s website).',
      philosophy: null, specialty: 'Omakase with sake; salt rice ball.',
      anecdotes: [
        { text: '"Don\'t underestimate the simple salt rice ball served at the end. It was incredibly soft and fluffy, completely changing my perception of rice balls." — April 2026.', source: R + 'B526945204/' },
        { text: '"I really appreciate that they change the ochoko (sake cups) for each type of sake." — March 2026.', source: R + 'B525458361/' },
        { text: '"While there isn\'t anything particularly noteworthy on the menu, every detail of the service is handled with care." — February 2026.', source: R + 'B523239855/' },
      ],
      japanese_sources_summary: '食べログ: 萬屋 おかげさん、居酒屋、四谷2-10 松本館B1F、四谷三丁目駅から徒歩6分、四ツ谷駅7分、火〜土18:00〜 (最終入店19:00)、日月祝休み、完全予約制 (旅行会社経由は不可)、1名の予約は当日のみ、前日に確認の電話、キャンセル料あり、17席 (カウンター7、テーブル10)、禁煙、カード可、居酒屋百名店2021・2022、居酒屋 EAST 百名店2024・2025、おまかせコースのみ、2025年10月1日から8,000円 (税込8,800円)、追加料理と飲み物で14,000円ほど、アレルギーは予約時に。口コミ(2026年1月〜9月): 日本酒に合う料理が次々、Tsuruoka のだだちゃ豆、じゅんさい、金目鯛とからすみ、あじのなめろう、桜えびのおから、締めの塩むすび、お猪口を選べる、店主が席ごとにあいさつ、いつも満席。',
      confidence: 'medium', sources: [TB, PARTY, SITE, R + 'B27583532/', R + 'B40431369/', R + 'B494909050/', R + 'B523239855/', R + 'B525458361/', R + 'B526241048/', R + 'B526945204/', R + 'B527381430/', R + 'B530621225/', R + 'B532896561/', R + 'B533001271/', R + 'B535493401/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set course only, explained from a blackboard; staff choose the sake.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区四谷2-10 松本館 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (Izakaya EAST 100 2025); reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.687700, 139.725064); cross-checked: GSI 東京都新宿区四谷二丁目10番地 (lot) 35m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, PARTY],
    price_note: 'Course price from the Tabelog listing (quoting the shop\'s website), from 1 October 2025.', last_checked: TODAY, items: [
      it('', '', 'Chef\'s-choice course (omakase)', '¥8,800', 'Course', 'ask', 'no', 'Tabelog; extras and drinks bring it to about ¥14,000.', 'omakase'),
    ] }, {
    cuisine: '日本酒を軸にしたおまかせの居酒屋 (食べログ、2026年の口コミ)・おまかせコース8,800円に、事前に頼む追加の「リクエストメニュー」: たとえば Tsuruoka のだだちゃ豆、アスパラの温かいおひたし、生じゅんさいのおろしポン酢、活けのまこがれいや炭火で炙った一本釣りのかつおなどの刺身、金目鯛のからすみのせ、大葉と海苔のあじのなめろう、桜えびのおから、とうもろこしのさつま揚げ、穴子の煮物、さわらの漬けや焼き物。締めはいつもふんわりした塩むすび (2026年の口コミ)・料理ごとに選ぶ日本酒、お猪口も選べる。Kuzuryu、Nabeshima、Kikusui、純米大吟醸など (2026年1〜7月)',
    neighborhood: '四谷2-10 松本館B1F。四谷三丁目駅から徒歩6分、四ツ谷駅から7分',
    gf_detail: '予約時に要確認: アレルギーや苦手なものは予約時に伝えるよう店が案内している (食べログ、店のサイトの引用)。おまかせは出汁が基本の魚料理で醤油の味付け、さつま揚げやおからも。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではない。出汁を使う魚中心のおまかせ。',
    notes: '[居酒屋・四谷、地下の日本酒好きのおまかせ] 四谷三丁目近くの地下にある17席の居酒屋。食べログの居酒屋百名店に4回選ばれ、予約制でおまかせのコースだけ (8,800円に追加分、飲み物込みで14,000円ほど)。日本酒に合わせて料理が次々に出る: 季節の青菜のおひたし、からすみをのせた金目鯛や炭火で炙ったかつおの刺身、あじのなめろう、桜えびのおから、穴子の煮物、そして最後には客が絶賛するふんわりした塩むすび。日本酒は料理に合わせてスタッフが選び、お猪口も選べる。店主は席ごとにあいさつに来て、常連はカウンターを貸し切ることも。2026年2月の客は料理に特別なものはないが細やかな心配りがいいと書いた。早めに予約を。日曜・月曜・祝日休み。',
  });
}

save();
