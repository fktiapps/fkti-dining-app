// Ginza Station half-mile sweep (805 m), batch 50 — small non-Japanese places with 2026 reviews.
//   + INOLTRE (Italian a minute from Ginza crossing, opened 2017 by owner Haru Naruse, formerly of Vini Italiano Osei → MOM_AND_POP)
//   + Neo Maestro (bistro; owner-chef is a certified master bartender, unnamed → OMNI)
//   + マルコナ (Spanish since 2005; owner cooks to order, unnamed → OMNI)
//   + トロワフレーシュ (oven-roast steak since 2011; owner not named → OMNI)
// Skipped: 719銀座 (opened March 2026; no reviews yet). ろばた 銀座本店 is a "honten" (branches) → later as OMNI.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);

// ================================================================ INOLTRE
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13212315/'; const R = TB + 'dtlrvwlst/';
  const d = day(['18:00', '23:00']), ld = day(['11:30', '14:00'], ['18:00', '23:00']);
  put({
    id: 'tokyo_inoltre_ginza5', name: 'INOLTRE (イノルトレ)', category: 'MOM_AND_POP',
    lat: 35.67158, lng: 139.762914,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: an Italian menu of pastas (spaghettini, venison and wild-boar pasta) with bread; risotto and prosciutto are also served, but no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: prosciutto, beef, venison, wild boar and firefly-squid pastas.',
    hours_raw: 'Tue–Fri 11:30–14:00 (L.O. 13:30) and 18:00–23:00 (L.O. 22:00); Mon and Sat dinner only; closed Sundays and holidays (Tabelog). ¥500 seating charge. Cards and d Barai accepted.',
    hours: { 0: d, 1: ld, 2: ld, 3: ld, 4: ld, 5: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 5-chōme, Nishigo Bldg 5F (turn at the Hermès building on Harumi-dōri) — 1 min from Ginza Stn',
    cuisine: 'Owner-run Italian with about 250 wines · prosciutto sliced to order, seasonal pasta · ¥1,500 lunch spaghettini', cuisine_type: 'other',
    website: null, gmaps: gm('INOLTRE 銀座5-4-15 西五ビル'), menu_url: null,
    notes: "[Mom & Pop · the wine-lovers' Italian] A cosy 19-seat Italian restaurant on the fifth floor of a Ginza 5-chōme building, a minute from Ginza crossing, opened in July 2017. Its Tabelog text says owner Haru Naruse cooks here and previously won over wine lovers at Vini Italiano Osei. Expect seasonal à la carte dishes from domestic ingredients and about 250 wines, mostly Italian. The one-sheet menu changes with the season. 2026 diners mention prosciutto sliced in front of you, a risotto made to the guest's taste, pasta with Toyama firefly squid, and a venison and wild-boar pasta. Lunch runs Tuesday to Friday, for example a beef-and-mushroom spaghettini with salad and bread for ¥1,500. Dinner is about ¥10,000–15,000, with a ¥500 seating charge. The building also houses 一㐂 (4F) and other restaurants.",
    chef_bio: { chef_name: 'Haru Naruse (owner)', roles: ['owner'], origin: 'Opened 4 July 2017 (Tabelog); the owner previously ran Vini Italiano Osei', background: 'Tabelog shop text names owner Haru Naruse as the cook, known to wine lovers from the previous restaurant.', philosophy: '"We continue to offer a comfortable escape from the everyday, just as before." (Tabelog)', specialty: 'Seasonal pasta; Italian wine.',
      anecdotes: [
        { text: '"Experience exquisite Italian cuisine crafted by owner Haru Naruse, who captivated many wine lovers at the previous location \'Vini Italiano Osei.\'" — Tabelog shop text.', source: TB },
        { text: '"The prosciutto was sliced right in front of us, allowing us to enjoy it fresh." — May 2026.', source: R + 'B528627091/' },
        { text: '"The pasta featured seasonal firefly squid from Toyama, while another pasta was creatively prepared with venison and wild boar." — April 2026.', source: R + 'B525549072/' },
      ],
      japanese_sources_summary: '食べログ: INOLTRE、銀座5-4-15 西五ビル5F、銀座駅から徒歩1分(晴海通りのエルメスの角を曲がる)、19席、火〜金11:30〜14:00・18:00〜23:00、月土は夜のみ、日祝休、2017年7月4日開店、席料500円、カード・d払い可。店舗紹介(英文): オーナーの Haru Naruse が料理を担当、前店「Vini Italiano Osei」でワイン好きを魅了、国産食材の季節のアラカルト、イタリアを中心に約250種のワイン。2026年の口コミ: 一枚の品書き、目の前で切る生ハム、好みに合わせたリゾット、富山の蛍烏賊のパスタ、鹿と猪のパスタ、ランチの牛肉と茸のスパゲッティーニ1,500円(サラダとパン付き)、夜1〜1.5万円。',
      confidence: 'medium', sources: [TB, R + 'B525549072/', R + 'B528627091/', R + 'B529979847/', R + 'B534811075/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small, calm room; one-sheet seasonal menu; ¥500 seating charge.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [{ text: 'Risotto made to suit the guest\'s preferences.', source: R + 'B528627091/' }], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: true, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座5-4-15 西五ビル 5F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated April–May 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: OSM node 11917843769 「イノルトレ」 4m; GSI 東京都中央区銀座五丁目4番15号 (go) 6m; same building as 一㐂 (4F); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534811075/', R + 'B525549072/'],
    price_note: 'Lunch price from a May 2026 review.', last_checked: TODAY, items: [
      it('牛肉と茸のスパゲッティーニ(ランチ)', '', 'Beef and mushroom spaghettini with salad and bread (lunch)', '¥1,500', 'Lunch', 'no', 'no', '2026.', 'lunch_pasta'),
      it('生ハム', 'nama hamu', 'Prosciutto sliced to order', '', 'Starters', 'ask', 'no', '', 'prosciutto'),
      it('リゾット', 'rizotto', 'Risotto made to taste', '', 'Primi', 'ask', 'ask', '', 'risotto'),
    ] }, {
    cuisine: 'オーナーの店のイタリアン・約250種のワイン・目の前で切る生ハムと季節のパスタ・ランチのスパゲッティーニ1,500円',
    neighborhood: '銀座五丁目、西五ビル5F(晴海通りのエルメスの角を曲がる)。銀座駅から徒歩1分',
    gf_detail: '実際上グルテンフリーではありません。スパゲッティーニや鹿と猪のパスタなどのイタリアンにパン。リゾットや生ハムもありますが、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: 'ヴィーガンではありません。生ハム、牛肉、鹿、猪、蛍烏賊のパスタ。',
    notes: '[個人店・ワイン好きのイタリアン] 銀座の交差点から1分、ビル5階の19席の居心地のよいイタリアンで、2017年7月開店。食べログの店舗紹介によれば、前店「Vini Italiano Osei」でワイン好きを魅了したオーナーの Haru Naruse が料理を作ります。国産の上質な食材の季節のアラカルトに、イタリアを中心に約250種のワイン。品書きは季節で替わる一枚の紙。2026年の口コミでは、目の前で切る生ハム、好みに合わせて作るリゾット、富山の蛍烏賊のパスタ、鹿と猪のパスタなど。ランチは火〜金で、サラダとパン付きの牛肉と茸のスパゲッティーニが1,500円など。夜は1〜1.5万円ほどで席料500円。同じビルの4階には一㐂なども入っています。',
  });
}

// ================================================================ Neo Maestro
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13265640/'; const R = TB + 'dtlrvwlst/';
  const a = day(['11:30', '23:59']);
  put({
    id: 'tokyo_neo_maestro_ginza7', name: 'Neo Maestro (ネオ マエストロ)', category: 'OMNI',
    lat: 35.668294, lng: 139.762771,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: lunch is a daily pasta, a meat plate with rice, or a gratin; dinner is French bistro dishes. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: chicken and meat plates, fish, gratin.',
    hours_raw: 'Daily 11:30–24:00; closed irregularly (Tabelog). Cards, IC and QR (incl. Alipay, WeChat Pay) accepted.',
    hours: { 0: a, 1: a, 2: a, 3: a, 4: a, 5: a, 6: a }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 7-chōme, Daini Yanagiya Bldg B1F next to Komoro Soba — 1 min from GINZA SIX',
    cuisine: 'Basement French bistro · ¥1,000 one-plate or daily-pasta lunch · cocktails by the owner-chef, a master bartender', cuisine_type: 'french',
    website: null, gmaps: gm('Neo Maestro 銀座7-10-12 第二柳屋ビル'), menu_url: null,
    notes: "[Bistro · ¥1,000 lunch and the bartender-chef] An 18-seat basement bistro next to Komoro Soba, a minute from GINZA SIX, with private rooms. Its Tabelog text says the owner-chef holds a master-bartender certification and makes original cocktails from seasonal fruit, or to your taste. Lunch is one of Ginza's bargains at ¥1,000: a one-plate meal, a single daily pasta, the day's meat dish or a gratin. In 2026 the chicken came well sauced over rice. Dinner covers amuse-bouche, cold appetizers, pan-seared fish, the day's meat and a dessert platter, at about ¥5,000–6,000. One diner found service slow on a fully booked night, when one person was handling the room.",
    chef_bio: { chef_name: null, roles: ['owner-chef (master bartender)'], origin: 'Ginza 7-chōme basement; opening date not found in a source read', background: 'Tabelog says the owner-chef has a master-bartender certification; no source names them.', philosophy: null, specialty: 'Original cocktails; daily pasta.',
      anecdotes: [
        { text: '"Our pride and joy are the diverse cocktails crafted by our owner-chef, who has a master bartender certification." — Tabelog shop text.', source: TB },
        { text: '"They offer only one type of pasta each day… Lunch is priced at just JPY 1,000." — July 2026.', source: R + 'B530988672/' },
      ],
      japanese_sources_summary: '食べログ: Neo Maestro、銀座7-10-12 第二柳屋ビルB1F、新橋駅・銀座駅から徒歩5分、18席・個室、毎日11:30〜24:00、不定休、カード・IC・QR(Alipay・WeChat Pay)可、夜5,000〜6,000円・昼2,000〜3,000円。店舗紹介(英文): マスターバーテンダーの資格を持つオーナーシェフのカクテル、アミューズ・冷前菜・鮮魚のポワレ・本日の肉料理・デザート盛り合わせ。2026年の口コミ: 小諸そばの隣の地下、昼はワンプレート・日替わりパスタ1種・肉料理・グラタンが1,000円、ソースが美味しい鶏肉、満席の日は提供が遅い、スタッフ1人。',
      confidence: 'low', sources: [TB, R + 'B530988672/', R + 'B529369828/', R + 'B537254942/', R + 'B535518370/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cheap, quick lunch; dinner can be slow when full. Cocktails made to taste.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-10-12 第二柳屋ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目10番12号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530988672/', R + 'B529369828/'],
    price_note: 'Lunch price from June–July 2026 reviews.', last_checked: TODAY, items: [
      it('日替わりパスタ(ランチ)', 'higawari pasuta', 'Daily pasta (lunch)', '¥1,000', 'Lunch', 'no', 'ask', '2026.', 'daily_pasta'),
      it('ワンプレートランチ', 'wan pureeto ranchi', 'One-plate lunch (e.g. chicken with rice)', '¥1,000', 'Lunch', 'ask', 'no', '2026.', 'one_plate'),
      it('オリジナルカクテル', 'orijinaru kakuteru', 'Original seasonal-fruit cocktail', '', 'Drinks', 'ask', 'ask', '', 'cocktail'),
    ] }, {
    cuisine: '地下のフレンチビストロ・1,000円のワンプレートや日替わりパスタのランチ・マスターバーテンダーのオーナーシェフのカクテル',
    neighborhood: '銀座七丁目、小諸そば隣の第二柳屋ビルB1F。GINZA SIXから徒歩1分',
    gf_detail: '実際上グルテンフリーではありません。昼は日替わりパスタ、ご飯付きの肉のプレート、グラタン、夜はフレンチのビストロ料理。グルテンフリーの選択肢は記載がありません。',
    vegan_detail: '記述上はヴィーガンではありません。鶏や肉のプレート、魚、グラタン。',
    notes: '[ビストロ・1,000円ランチとバーテンダーのシェフ] GINZA SIXから1分、小諸そばの隣のビル地下、個室もある18席のビストロ。食べログによれば、オーナーシェフはマスターバーテンダーの資格を持ち、季節の果物のオリジナルカクテルや好みに合わせたカクテルを作ります。昼は銀座では貴重な1,000円で、ワンプレート、1日1種の日替わりパスタ、本日の肉料理かグラタン。2026年はソースのよく絡んだ鶏肉がご飯に合うと好評。夜はアミューズ、冷前菜、鮮魚のポワレ、本日の肉料理、デザートの盛り合わせで5,000〜6,000円ほど。満席の夜はひとりで回していて提供が遅かったとの声も。',
  });
}

// ================================================================ マルコナ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13020763/'; const R = TB + 'dtlrvwlst/';
  const d = day(['17:00', '23:00']);
  put({
    id: 'tokyo_marcona_ginza8', name: 'マルコナ (Marcona)', category: 'OMNI',
    lat: 35.668415, lng: 139.761189,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Spanish dishes such as seafood paella, ajillo, prosciutto and an appetizer platter; no source describes bread or a gluten-free option.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood paella, prosciutto, ajillo and cheese.',
    hours_raw: 'Mon–Sat 17:00–23:00 (food L.O. 22:00); Saturdays by reservation only; closed Sundays and holidays (Tabelog). Cards accepted.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 8-chōme, Chūō Hayashi Bldg 2F — 3–4 min from Shimbashi Stn',
    cuisine: 'Spanish bar-restaurant since 2005 · seafood paella and prosciutto · cooked to order by the owner', cuisine_type: 'other',
    website: null, gmaps: gm('マルコナ 銀座8-7-7 中央林ビル'), menu_url: null,
    notes: "[Spanish · paella in a Ginza 8-chōme bar] A small, bar-like Spanish restaurant on a Ginza 8-chōme second floor, open since August 2005. The owner cooks each dish to order, according to a February 2026 diner. Guests come for prosciutto, which one diner called the best they had ever eaten, and a seafood paella topped with prawns. They also order ajillo, an appetizer platter, and raisins on the branch with cheese, with Spanish wine. It suits a pre-concert supper near Sumitomo Life Hall. Saturday is by reservation only. About ¥6,000–10,000 a head.",
    chef_bio: { chef_name: null, roles: ['owner-cook'], origin: 'Opened 9 August 2005 (Tabelog)', background: 'A 2026 reviewer says the owner prepares each dish to order; no source names the owner.', philosophy: null, specialty: 'Seafood paella; prosciutto.',
      anecdotes: [
        { text: '"The owner prepares each dish fresh upon ordering, ensuring everything is served at its best." — February 2026.', source: R + 'B525794721/' },
        { text: '"The prosciutto was incredibly flavorful, getting better with every bite—definitely the best I\'ve ever had." — June 2026.', source: R + 'B530557066/' },
      ],
      japanese_sources_summary: '食べログ: マルコナ、銀座8-7-7 中央林ビル2F、新橋駅から徒歩3〜4分、18席、月〜土17:00〜23:00、土は予約のみ、日祝休、2005年8月9日開店、カード可。2026年の口コミ: バーのような雰囲気のスペイン料理、オーナーが注文ごとに調理、生ハム、海老をのせた魚介のパエリア、アヒージョ、前菜の盛り合わせ、枝付きレーズンとチーズ、住友生命ホールでのコンサート前に、6,000〜10,000円。',
      confidence: 'low', sources: [TB, R + 'B525794721/', R + 'B530557066/', R + 'B533082933/', R + 'B523336935/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small and bar-like; Saturdays by reservation only.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座8-7-7 中央林ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated February–August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座八丁目7番7号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525794721/', R + 'B530557066/'],
    price_note: 'No prices captured; reviewers spend ¥6,000–10,000.', last_checked: TODAY, items: [
      it('魚介のパエリア', 'gyokai no paeria', 'Seafood paella', '', 'Mains', 'ask', 'no', '', 'paella'),
      it('生ハム', 'nama hamu', 'Prosciutto', '', 'Tapas', 'ask', 'no', '', 'prosciutto'),
      it('アヒージョ', 'ahiijo', 'Ajillo', '', 'Tapas', 'ask', 'ask', '', 'ajillo'),
    ] }, {
    cuisine: '2005年からのスペイン料理のバル・魚介のパエリアと生ハム・オーナーが注文ごとに調理',
    neighborhood: '銀座八丁目、中央林ビル2F。新橋駅から徒歩3〜4分',
    gf_detail: '要確認。魚介のパエリア、アヒージョ、生ハム、前菜の盛り合わせなどのスペイン料理。パンやグルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。魚介のパエリア、生ハム、アヒージョ、チーズ。',
    notes: '[スペイン・銀座8丁目のバルのパエリア] 銀座8丁目のビル2階、2005年8月開店のバーのような小さなスペイン料理店で、2026年2月の口コミによればオーナーが注文ごとに料理を作ります。お目当ては「今まで食べた中で一番」という声もある生ハムと、海老をのせた魚介のパエリア。アヒージョ、前菜の盛り合わせ、枝付きレーズンとチーズをスペインワインと。住友生命ホールでのコンサート前の食事にも。土曜は予約のみ。1人6,000〜10,000円ほど。',
  });
}

// ================================================================ トロワフレーシュ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13130978/'; const R = TB + 'dtlrvwlst/';
  const d = day(['17:00', '22:00']);
  put({
    id: 'tokyo_trois_fleches_ginza8', name: 'トロワフレーシュ (TROIS FLÈCHES)', category: 'OMNI',
    lat: 35.669719, lng: 139.759607,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A steak restaurant with oven-roasted beef chosen by cut and weight, plus a long list of appetizers (oysters, bonito, abalone, porcini) and desserts; no source describes sauces or a gluten-free option.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef, oysters, abalone and fish.',
    hours_raw: 'Mon–Sat 17:00–22:00; closed Sundays and holidays (Tabelog). Non-alcoholic sparkling wine available. Cards and d Barai accepted.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 8-chōme, Ginza Takamoto Bldg 2F at the end of the alley by Hotel The Celestine Ginza — 4 min from Shimbashi Stn',
    cuisine: 'Oven-roast steak since 2011 · choose cut and grams (tenderloin, sirloin, aged female beef) · many daily appetizers', cuisine_type: 'other',
    website: null, gmaps: gm('トロワフレーシュ 銀座8-2-8 銀座高本ビル'), menu_url: null,
    notes: "[Steak · choose your cut and weight] An 18-seat steak restaurant on a second floor at the end of an alley by Hotel The Celestine Ginza, open since July 2011. Diners pick several of the day's appetizers, such as fresh oysters, bonito, sweetfish, abalone, porcini, soft roe and turnip. Then they choose the meat by cut and weight, oven-roasted: tenderloin, sirloin, strip loin, sirloin cap and aged female beef, around 150–200 g each, sometimes with an egg-yolk sauce. Desserts include pudding and fig brûlée. Regulars of 8 and 18 visits book it for business dinners. Non-alcoholic sparkling wine is available. Expect ¥30,000–80,000 a head.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 25 July 2011 (Tabelog)', background: 'No source names the owner or chef.', philosophy: null, specialty: 'Oven-roast steak by the gram.',
      anecdotes: [
        { text: '"For the main course, we shared three types of meat, around 150g each: Strip loin, Sirloin cap, and aged female beef. The oven-roasted meat was absolutely fantastic!" — August 2026.', source: R + 'B533012573/' },
        { text: '"I was able to customize the portion of my main meat to my liking." — July 2026.', source: R + 'B531945910/' },
      ],
      japanese_sources_summary: '食べログ: トロワフレーシュ、銀座8-2-8 銀座高本ビル2F(ホテル ザ セレスティン銀座横の路地の奥)、新橋駅から徒歩4分、18席、月〜土17:00〜22:00、日祝休、2011年7月25日開店、カード・d払い可、3〜4万円。2026年の口コミ: 日替わりの豊富な前菜(生牡蠣、鰹、鮎、鮑、ポルチーニ、白子、蕪)、部位とグラムを選ぶオーブン焼きのステーキ(ヒレ、サーロイン、ストリップロイン、イチボ、熟成した雌牛)、卵黄のソース、プリン、無花果のブリュレ、ノンアルコールのスパークリング、接待に、18回・8回通う常連、3〜8万円。',
      confidence: 'low', sources: [TB, R + 'B533012573/', R + 'B531945910/', R + 'B365782930/', R + 'B493596488/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; suits business dinners; portion sizes chosen by weight.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [{ text: 'Main meat portion chosen by weight to suit the guest.', source: R + 'B531945910/' }], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座8-2-8 銀座高本ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座八丁目2番8号 (go) 33m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533012573/', R + 'B365782930/'],
    price_note: 'No prices captured; reviewers spend ¥30,000–80,000.', last_checked: TODAY, items: [
      it('ステーキ(部位・グラム選択)', 'suteeki', 'Oven-roast steak by cut and weight', '', 'Mains', 'ask', 'no', '', 'steak'),
      it('日替わりの前菜', 'higawari no zensai', 'Daily appetizers (oysters, bonito, abalone, porcini…)', '', 'Starters', 'ask', 'no', '', 'appetizers'),
    ] }, {
    cuisine: '2011年からのオーブン焼きステーキ・部位とグラムを選ぶ(ヒレ、サーロイン、熟成した雌牛)・豊富な日替わり前菜',
    neighborhood: '銀座八丁目、ホテル ザ セレスティン銀座横の路地の奥の銀座高本ビル2F。新橋駅から徒歩4分',
    gf_detail: '要確認。部位と重さを選ぶオーブン焼きのステーキと、生牡蠣・鰹・鮑・ポルチーニなどの豊富な前菜とデザート。ソースやグルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。牛肉、牡蠣、鮑、魚。',
    notes: '[ステーキ・部位と重さを選ぶ] ホテル ザ セレスティン銀座横の路地の奥、ビル2階の18席のステーキ店で、2011年7月開店。まず日替わりの前菜から数品(生牡蠣、鰹、鮎、鮑、ポルチーニ、白子、蕪など)、続いて肉を部位と重さで選び、オーブンで焼き上げます。ヒレ、サーロイン、ストリップロイン、イチボ、熟成した雌牛などを各150〜200gほど、卵黄のソースで出ることも。デザートはプリンや無花果のブリュレ。8回・18回通う常連は接待に使います。ノンアルコールのスパークリングもあり。予算は1人3〜8万円ほど。',
  });
}

save();
