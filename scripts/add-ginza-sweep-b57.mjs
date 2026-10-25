// Ginza Station half-mile sweep (805 m), batch 57 — next four from the non-Japanese filter (all OMNI).
//   + ローマイヤレストラン 銀座店 (Lohmeyer brand, est. 1925 per Tabelog; roast beef, German beer, hamburg lunches)
//   + バール・エ・リストランテ・タブリエ (grill-and-Italian on a 6th floor; relocated, reviews reset)
//   + 雲仙 銀座店 (kushiage branch of Unzen, founded 1950; a Kitashinchi Unzen exists per a 2026 review)
//   + Wine Bar ぶしょん (basement wine bar with a cellar and a sommelier "madam"; owner not named)
// Skipped: Ken Adonis 13183242 (2026 visit has no text), Dining Bar GINZA 1986 13284632 (one two-line 2026 review),
// Salon de bar ajito 13276377 (last review 2024).
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ ローマイヤレストラン 銀座店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13231957/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:30', '15:00'], ['17:30', '22:00']);
  put({
    id: 'tokyo_lohmeyer_restaurant_ginza5', name: 'ローマイヤレストラン 銀座店 (Romaier Restaurant Ginza)', category: 'OMNI',
    lat: 35.670251, lng: 139.765169,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: German beer, sausages and demi-glace or red-wine hamburg steaks with bread or rice; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: roast beef, sausages, pork knuckle and hamburg steaks.',
    hours_raw: 'Mon–Sat 11:30–15:00 and 17:30–22:00; closed Sundays, holidays and over New Year (Tabelog). Black-Wagyu roast-beef lunch set by reservation. No service charge. Cards and PayPay accepted.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 5-chōme, Ginza Azuma Bldg 2F — 2 min from Ginza Stn exit A5',
    cuisine: 'German-style roast-beef restaurant (Lohmeyer, est. 1925) · German beer · ¥1,300–1,500 hamburg lunches', cuisine_type: 'other',
    website: 'http://www.lohmeyer.co.jp/', gmaps: gm('ローマイヤレストラン 銀座店 銀座5-9-17'), menu_url: null,
    notes: "[German · roast beef and beer] A 30-seat second-floor restaurant of the Lohmeyer brand, which Tabelog dates to 1925, with a nostalgic feel and a private room for five or six. Roast beef is the house specialty, served with German beers and sommelier-chosen wines. Weekday lunches start at ¥1,300. In 2026 diners had a demi-glace hamburg steak with rice, consommé, salad and a drink for ¥1,500, and weekly or daily specials such as a red-wine-braised hamburg for ¥1,400 with bread or rice and coffee. A ¥5,000 black-Wagyu roast-beef lunch is by reservation. At night there are free-flow courses with fish carpaccio and sausages, plus Schweinshaxe (pork knuckle) to order. About ¥6,000–8,000 at dinner.",
    chef_bio: { chef_name: null, roles: [], origin: 'Lohmeyer brand established 1925 (Tabelog); this branch opened 22 March 2019', background: 'Company-run (lohmeyer.co.jp).', philosophy: null, specialty: 'Roast beef.',
      anecdotes: [
        { text: '"I ordered the Hamburg Steak with demi-glace sauce, which came with rice, consomme soup, salad, and a drink for JPY 1500." — August 2026.', source: R + 'B534538637/' },
        { text: '"The photo shows the Schweinshaxe that I ordered as an extra. It’s pork knuckle, and I was amazed by the unique texture." — August 2026.', source: R + 'B533632536/' },
      ],
      japanese_sources_summary: '食べログ: ローマイヤレストラン 銀座店、銀座5-9-17 銀座あづまビル2F、銀座駅A5出口から徒歩2分、30席、個室(5〜6名)あり、月〜土11:30〜15:00・17:30〜22:00、日祝・年末年始休、サービス料なし、カード・PayPay可、2019年3月22日開店、公式サイト lohmeyer.co.jp。店の紹介: 1925年創業、名物のローストビーフ、ドイツビールとソムリエが選ぶワイン、黒毛和牛ローストビーフのランチ5,000円(予約制)、クリスマスコース9,800円。2026年の口コミ: ランチは1,300円から、デミグラスのハンバーグ1,500円(ライス・コンソメ・サラダ・ドリンク付き)、週替わりの赤ワイン煮込みハンバーグ1,400円、日替わりハンバーグ1,400円、飲み放題コースに鮮魚のカルパッチョとソーセージ、シュバイネハクセ。',
      confidence: 'medium', sources: [TB, R + 'B534538637/', R + 'B537797216/', R + 'B538008143/', R + 'B533632536/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Relaxed; walk-ins fine at lunch.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座5-9-17 銀座あづまビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (Christmas 2026 plan); reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座五丁目9番17号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B534538637/', R + 'B537797216/'],
    price_note: 'Lunch prices from August–October 2026 reviews; set prices from Tabelog (tax incl.).', last_checked: TODAY, items: [
      it('ハンバーグ デミグラスソース', 'hanbaagu demigurasu soosu', 'Hamburg steak with demi-glace, rice, consommé, salad and drink (lunch)', '¥1,500', 'Lunch', 'no', 'no', 'August 2026.', 'hamburg_demi'),
      it('赤ワイン煮込みハンバーグ', 'akawain nikomi hanbaagu', 'Red-wine-braised hamburg with salad, soup, bread or rice, coffee (weekly lunch)', '¥1,400', 'Lunch', 'no', 'no', 'October 2026.', 'hamburg_redwine'),
      it('黒毛和牛ローストビーフのスペシャルランチ', '', 'Black-Wagyu roast-beef special lunch set (reservation only)', '¥5,000', 'Lunch', 'ask', 'no', 'Tabelog.', 'roast_beef_lunch'),
    ] }, {
    cuisine: 'ドイツ風のローストビーフの店(ローマイヤ、1925年創業)・ドイツビール・1,300〜1,500円のハンバーグランチ',
    neighborhood: '銀座五丁目、銀座あづまビル2F。銀座駅A5出口から徒歩2分',
    gf_detail: '実際上グルテンフリーではありません。ドイツビール、ソーセージ、デミグラスや赤ワイン煮込みのハンバーグにパンかライス。グルテンフリーの選択肢は記載がありません。',
    vegan_detail: 'ヴィーガンではありません。ローストビーフ、ソーセージ、シュバイネハクセ、ハンバーグ。',
    notes: '[ドイツ料理・ローストビーフとビール] 食べログによれば1925年創業のローマイヤの、懐かしい雰囲気の2階30席の店で、5〜6名の個室も。名物はローストビーフで、ドイツビールやソムリエが選ぶワインと。平日のランチは1,300円から。2026年の客は、ライス・コンソメ・サラダ・ドリンク付きのデミグラスハンバーグ1,500円や、パンかライスとコーヒー付きの赤ワイン煮込みハンバーグ1,400円などの週替わり・日替わりを。黒毛和牛ローストビーフのランチ5,000円は予約制。夜は鮮魚のカルパッチョやソーセージの飲み放題コースに、追加でシュバイネハクセ(豚すね肉)も。夜は6,000〜8,000円ほど。',
  });
}

// ================================================================ バール・エ・リストランテ・タブリエ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13259806/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:30', '15:00'], ['17:30', '22:30']);
  put({
    id: 'tokyo_tablier_ginza3', name: 'バール・エ・リストランテ・タブリエ (Bar Le e Ristorante Tablier)', category: 'OMNI',
    lat: 35.673124, lng: 139.765524,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: courses centre on pasta (snow-crab tomato cream, black-truffle carbonara, porcini aglio e olio); no gluten-free option is mentioned. Staff ask about allergies when you book (2026 review).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: caviar, crab and sea-urchin pastas, A5 Yamagata beef and lamb; a vegetable bagna cauda is on the menu.',
    hours_raw: 'Mon–Fri 11:30–15:00 (L.O. 14:30) and 17:30–22:30 (food L.O. 21:00); Sat and holidays 12:00–15:30 and 17:30–22:00; closed Sundays (Tabelog — one September 2026 diner reports a Sunday lunch). ¥550 cover. Cards, e-money and QR accepted (e-money at lunch only).',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: day(['12:00', '15:30'], ['17:30', '22:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 3-chōme, Ginza Morita Bldg 6F — 2 min from Ginza Stn exit A9 or Ginza-itchōme exit 5',
    cuisine: 'Grill and Italian · ¥5,000 course with caviar and snow-crab pasta and A5 Yamagata beef · lunch courses about ¥4,000', cuisine_type: 'other',
    website: null, gmaps: gm('タブリエ 銀座3-3-6 銀座モリタビル'), menu_url: null,
    notes: "[Italian and grill · 6th floor in Ginza 3-chōme] A calm 30-seat Italian on a sixth floor, mostly tables, with window-side semi-private booths and a private room for four (10% room charge). It recently relocated, so its Tabelog reviews were reset. A popular ¥5,000 course is limited to three groups a day. In September 2026 it opened with a sparkling-wine toast and a caviar carpaccio. Pastas included snow-crab tomato cream and porcini with prosciutto, and the main was grilled A5 Yamagata beef with black-truffle sauce, followed by sorbet and panna cotta. A full lunch course runs about ¥4,000, and sea-urchin pasta also appears. Staff ask about allergies and dislikes when you book. Glasses of wine start at ¥850. Cover ¥550; one diner was surprised by an extra charge on an after-dinner drink.",
    chef_bio: { chef_name: null, roles: [], origin: 'Ginza 3-chōme (relocated; reviews reset)', background: 'No source names the owner or chef.', philosophy: null, specialty: 'Grill and pasta.',
      anecdotes: [
        { text: '"When making the reservation, they kindly inquired about any dislikes or allergies, which made me feel very comfortable inviting my guest." — September 2026.', source: R + 'B535988357/' },
        { text: '"The snow crab pasta had a generous amount of rich sauce that was delicious." — September 2026.', source: R + 'B535711410/' },
      ],
      japanese_sources_summary: '食べログ: バール・エ・リストランテ・タブリエ、銀座3-3-6 銀座モリタビル6F、銀座駅A9出口・銀座一丁目駅5番出口から徒歩2分、30席(テーブル26・カウンター4)、4名の個室(室料10%)と窓際の半個室、平日11:30〜15:00・17:30〜22:30、土祝12:00〜15:30・17:30〜22:00、日休、コペルト550円、移転のため評価・口コミはリセット。店の紹介: グリルとイタリアン、A5山形牛、ズワイガニのパスタ、黒トリュフのカルボナーラ、ポルチーニ、天使の海老や仔羊のグリル、野菜のバーニャカウダ、グラスワイン850円から。2026年9月の口コミ: 1日3組限定5,000円のコース(スパークリングで乾杯、キャビアのカルパッチョ、ズワイガニのトマトクリーム、ポルチーニと生ハムのペペロンチーノ、山形牛のグリル)、予約時にアレルギーを確認、ランチコース約4,000円、雲丹のパスタ。',
      confidence: 'medium', sources: [TB, R + 'B535711410/', R + 'B535988357/', R + 'B535821052/', R + 'B536308466/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; allergies asked at booking; check drink prices.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [{ text: 'Staff asked about dislikes and allergies when the booking was made.', source: R + 'B535988357/' }], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座3-3-6 銀座モリタビル 6F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (relocated); reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座三丁目3番6号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535711410/', R + 'B535988357/', R + 'B535821052/'],
    price_note: 'Course prices from September 2026 reviews; glass price from Tabelog.', last_checked: TODAY, items: [
      it('カジュアルプラン(1日3組限定)', '', 'Casual Plan course: sparkling toast, caviar, snow-crab pasta, A5 Yamagata beef (3 groups a day)', '¥5,000', 'Courses', 'no', 'no', 'September 2026; plus ¥550 cover.', 'casual_plan'),
      it('ランチコース', 'ranchi koosu', 'Full lunch course: appetizers, pasta, main, dessert and drink', '¥4,000', 'Lunch', 'no', 'no', 'About ¥4,000, September 2026.', 'lunch_course'),
      it('グラスワイン', '', 'Wine by the glass', '¥850〜', 'Drinks', 'gf', 'ask', 'Tabelog.', 'glass_wine'),
    ] }, {
    cuisine: 'グリルとイタリアン・キャビアとズワイガニのパスタ、A5山形牛の5,000円コース・ランチコース約4,000円',
    neighborhood: '銀座三丁目、銀座モリタビル6F。銀座駅A9出口・銀座一丁目駅5番出口から徒歩2分',
    gf_detail: '実際上グルテンフリーではありません。コースの中心はパスタ(ズワイガニのトマトクリーム、黒トリュフのカルボナーラ、ポルチーニのペペロンチーノ)で、グルテンフリーの選択肢は記載がありません。予約時にアレルギーを確認してくれます(2026年の口コミ)。',
    vegan_detail: '記述上はヴィーガンではありません。キャビア、カニ、雲丹のパスタ、A5山形牛、仔羊。野菜のバーニャカウダはあります。',
    notes: '[イタリアンとグリル・銀座三丁目の6階] テーブル中心の落ち着いた30席のイタリアンで、窓際の半個室と4名の個室(室料10%)も。移転したばかりで、食べログの口コミはリセットされています。人気は1日3組限定の5,000円のコースで、2026年9月はスパークリングワインの乾杯とキャビアのカルパッチョに始まり、パスタはズワイガニのトマトクリームとポルチーニと生ハムのペペロンチーノ、メインはA5山形牛のグリルの黒トリュフソース、デザートにソルベとパンナコッタ。ランチのフルコースは約4,000円で、雲丹のパスタも。予約時にアレルギーや苦手なものを確認してくれます。グラスワインは850円から。コペルト550円。食後のドリンクに追加料金がかかって驚いたという声も。',
  });
}

// ================================================================ 雲仙 銀座店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13109252/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:30', '15:00'], ['17:30', '23:00']);
  put({
    id: 'tokyo_unzen_kushiage_ginza2', name: '雲仙 銀座店', category: 'OMNI',
    lat: 35.673653, lng: 139.767161,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: kushiage — skewers coated in batter and deep-fried, served with sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: skewers of Wagyu, shrimp, crab claw and salmon with ikura; vegetable skewers such as asparagus share the same batter and fryer.',
    hours_raw: 'Daily 11:30–15:00 (L.O. 14:00) and 17:30–23:00 (L.O. 22:00); closed only over New Year (Tabelog). Cards, e-money and QR accepted.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 2-chōme, Ginza Treasure Bldg 10F — 1 min from Ginza-itchōme Stn, 2 min from Ginza Stn A12/A13',
    cuisine: 'Creative kushiage, one skewer at a time · Unzen since 1950 · 10-skewer lunch ¥3,300 · 100+ wines', cuisine_type: 'katsu',
    website: 'http://www.unzen.com/', gmaps: gm('雲仙 銀座店 銀座2-6-5 銀座トレシャス'), menu_url: null,
    notes: "[Kushiage · tenth floor, since 1950] The Ginza branch of Unzen, a kushiage house founded in 1950 with another shop in Osaka's Kitashinchi. It sits on a tenth floor with counter seats, window sofas and private rooms for four to eight. Seasonal skewers come one at a time in a light, non-greasy batter, each set down in front of a recommended sauce. 2026 diners singled out the New Caledonian angel shrimp, green asparagus and the miso soup. After a 20-skewer course you can reorder favourites before dessert. Lunch is a 10-skewer set with a drink for about ¥3,300. Prices are on the high side, about ¥700–1,200 a skewer for premium items, and one diner was served two of a skewer when ordering one, so confirm quantities. More than 100 wines are stocked.",
    chef_bio: { chef_name: null, roles: [], origin: 'Unzen founded 1950 (Tabelog); this branch opened 16 April 2010', background: 'Multi-branch kushiage house.', philosophy: null, specialty: 'Kushiage with matched sauces.',
      anecdotes: [
        { text: '"Each skewer comes with a different sauce, and they are placed in recommended positions upon serving, making it easy to enjoy without confusion." — January 2026.', source: R + 'B524723404/' },
        { text: '"The skewers are creatively crafted, highlighting the ingredients… The miso soup is also delicious." — September 2026, lunch.', source: R + 'B524030486/' },
      ],
      japanese_sources_summary: '食べログ: 雲仙 銀座店、銀座2-6-5 銀座トレシャス10F、銀座一丁目駅から徒歩1分、28席、半個室(4名)・個室(8名)、毎日11:30〜15:00・17:30〜23:00、年末年始のみ休、カード・電子マネー・QR可、2010年4月16日開店、公式サイト unzen.com。店の紹介: 1950年創業の「雲仙」、季節の食材の創作串揚げを一本ずつ、窓際のソファ席、世界のワイン100種以上、週末の串カツ10本と飲み放題6,900円。口コミ: 2026年1月は20本のコース、ニューカレドニアの天使の海老とグリーンアスパラ、軽い衣、串ごとに違うソースを推奨の位置に、追加注文も可。2026年9月はランチ、味噌汁も美味しい、北新地の雲仙にも言及。2025年: 和牛1,000円、海老・カニ爪1,200円、鮭といくら700円、ランチは10本とドリンクで3,300円、1本頼んだら2本出てきたとの声。',
      confidence: 'medium', sources: [TB, R + 'B524723404/', R + 'B524030486/', R + 'B508763130/', R + 'B515424969/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter service; confirm skewer quantities when ordering.' },
    safety: { dedicated_fryer: false, gf_cross_contamination: [{ text: 'Every skewer is battered and deep-fried.', source: R + 'B524723404/' }], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座2-6-5 銀座トレシャス 10F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (weekend plan to 30 November); reviews dated January and September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座二丁目6番5号 (go) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B508763130/', R + 'B524723404/'],
    price_note: 'Skewer and lunch prices from a June 2025 review; weekend plan from Tabelog (tax incl.).', last_checked: TODAY, items: [
      it('串揚げ20本セット', 'kushiage nijuppon setto', '20-skewer kushiage set', '', 'Courses', 'no', 'no', '', 'set20'),
      it('ランチ 串揚げ10本とドリンク', '', 'Lunch: 10 skewers and a drink', '¥3,300', 'Lunch', 'no', 'no', '2025.', 'lunch10'),
      it('串カツ10本と飲み放題(2時間)', '', 'Weekend dinner: 10 kushikatsu, rice, dessert and 2-hour free-flow (2+ people)', '¥6,900', 'Courses', 'no', 'no', 'Tabelog, to 30 November.', 'weekend_plan'),
    ] }, {
    cuisine: '一本ずつ出す創作串揚げ・1950年創業の雲仙・ランチ10本3,300円・ワイン100種以上',
    neighborhood: '銀座二丁目、銀座トレシャス10F。銀座一丁目駅から徒歩1分、銀座駅A12・A13出口から2分',
    gf_detail: 'グルテンフリーではありません。衣をつけて揚げる串揚げで、ソースで食べます。',
    vegan_detail: 'ヴィーガンではありません。和牛、海老、カニ爪、鮭といくらなど。アスパラなどの野菜の串も同じ衣と油です。',
    notes: '[串揚げ・10階、1950年創業] 1950年創業の串揚げ「雲仙」の銀座店で、大阪・北新地にも店があります。10階にあり、カウンター、窓際のソファ席、4〜8名の個室。季節の串を一本ずつ、軽くて油っぽくない衣で揚げ、推奨のソースの前に置いてくれます。2026年の客が挙げたのはニューカレドニアの天使の海老、グリーンアスパラ、味噌汁。20本のコースのあと、デザートの前に好きな串を追加できます。昼は10本とドリンクのセットで3,300円ほど。高級な串は1本700〜1,200円ほどと高め。1本頼んだら2本出てきたという声もあるので、本数は確認を。ワインは100種以上。',
  });
}

// ================================================================ Wine Bar ぶしょん
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13009514/'; const R = TB + 'dtlrvwlst/';
  const d = day(['17:00', '23:59']);
  put({
    id: 'tokyo_wine_bar_bushon_ginza5', name: 'Wine Bar ぶしょん (Wine Bar Bushon)', category: 'OMNI',
    lat: 35.669975, lng: 139.764835,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A wine bar with courses and à la carte food served with bread; no source describes the dishes or a gluten-free option.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No source describes the food in enough detail to judge.',
    hours_raw: 'Mon–Sat 17:00–24:00; closed Sundays and holidays (Tabelog; may change). Cards and d Barai accepted. Designated smoking area.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 5-chōme, Nakamura Bldg B2F — 2 min from Ginza Stn exit A3',
    cuisine: 'Basement wine bar with a cellar · deep wine list, mostly over ¥10,000 a bottle · courses or à la carte', cuisine_type: 'other',
    website: null, gmaps: gm('Wine Bar ぶしょん 銀座5-9-13 中村ビル'), menu_url: null,
    notes: "[Wine bar · second basement] A spacious, lively 30-seat wine bar two floors underground, lined with a wine cellar and with a nostalgic tavern feel. The draw is the long, historic wine list, mostly bottles over ¥10,000, poured into good glasses. A stylish sommelier 'madam' runs the floor. Many listed wines are sold out, so ask what's available. You can order a course or à la carte, but 2025–26 reviewers call the food the weak point. About ¥15,000–20,000 a head with wine.",
    chef_bio: { chef_name: null, roles: [], origin: 'Ginza 5-chōme; opening date not given', background: 'No source names the owner; a 2026 reviewer describes a sommelier "madam".', philosophy: null, specialty: 'Wine list.',
      anecdotes: [
        { text: '"The sommelier, a stylish madam, left a strong impression on me. The wine list reflects a rich history with a variety of selections." — April 2026.', source: R + 'B530736698/' },
        { text: '"The wine is delicious, and even the glasses served are of good quality. However, the food is disappointing." — August 2026.', source: R + 'B534920367/' },
      ],
      japanese_sources_summary: '食べログ: Wine Bar ぶしょん(ワインバー・ブション)、銀座5-9-13 中村ビルB2F、銀座駅A3出口から徒歩2分、30席、月〜土17:00〜24:00、日祝休、カード・d払い可、分煙、ライブ演奏、持ち込み可。口コミ: ワインセラーに囲まれた地下のワインバー、コースもアラカルトも、2026年4月は懐かしい酒場の雰囲気でおしゃれなマダムのソムリエ、歴史を感じるワインリストだが品切れも多い、2026年8月はワインとグラスは良いが料理は物足りない、1万円以上のワインが中心、15,000〜20,000円。',
      confidence: 'low', sources: [TB, R + 'B530736698/', R + 'B534920367/', R + 'B518999963/', R + 'B520370986/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Wine-first; ask which listed bottles are in stock.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座5-9-13 中村ビル B2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated April and August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座五丁目9番13号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534920367/'],
    price_note: 'No prices captured; bottles mostly over ¥10,000 (August 2026 review).', last_checked: TODAY, items: [
      it('コース', 'koosu', 'Food course (several price levels)', '', 'Courses', 'ask', 'ask', '', 'course'),
    ] }, {
    cuisine: 'ワインセラーのある地下のワインバー・1万円以上が中心の充実したワインリスト・コースもアラカルトも',
    neighborhood: '銀座五丁目、中村ビルB2F。銀座駅A3出口から徒歩2分',
    gf_detail: '要確認。コースもアラカルトもあり、パンも出るワインバーで、料理の内容やグルテンフリーの対応は書かれていません。',
    vegan_detail: '要確認。料理について判断できるほどの記述がありません。',
    notes: '[ワインバー・地下2階] 地下2階、ワインセラーに囲まれた懐かしい酒場の雰囲気の広くにぎやかな30席のワインバー。魅力は歴史を感じる充実したワインリストで、1万円以上のボトルが中心、グラスも上質。フロアにはおしゃれなマダムのソムリエ。リストには品切れも多いので、あるものを聞くのが確実。コースもアラカルトもありますが、2025〜26年の口コミでは料理が弱点との声。ワイン込みで1人15,000〜20,000円ほど。',
  });
}

save();
