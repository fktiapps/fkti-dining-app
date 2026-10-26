// Ginza Station half-mile sweep (805 m), batch 96 — all-genre phase (all OMNI).
//   + 資生堂パーラー 銀座本店 (Shiseido Parlour's flagship restaurant, 4F–5F)
//   + 銀座みゆき館 銀座5丁目店 (classic Ginza café; open to 22:00–23:00)
//   + おそば 照庵 銀座 (late-night soba and oden house, est. 2011)
//   + 上野精養軒 松屋銀座店 (Ueno Seiyōken's branch in Matsuya Ginza)
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ 資生堂パーラー 銀座本店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13004938/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:30', '21:30']);
  put({
    id: 'tokyo_shiseido_parlour_ginza_honten', name: '資生堂パーラー 銀座本店 (Shiseido Parlour Ginza)', category: 'OMNI',
    lat: 35.668587, lng: 139.761911,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Classic yōshoku: omurice, beef and pork curry, lobster, courses with confit and desserts (chocolate cake, parfaits); sauces and roux are not described, and no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: omurice, beef and pork curry, lobster, tuna confit.',
    hours_raw: 'Tue–Sun 11:30–21:30 (L.O. 20:30); closed Mondays (open on holiday Mondays) (Tabelog). 10% service charge.',
    hours: { 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Tokyo Ginza Shiseido Bldg 4F–5F, Ginza 8-chōme — 5 min from Shimbashi Stn',
    cuisine: 'Shiseido Parlour’s flagship yōshoku restaurant · omurice (¥3,000) with sauce poured at the table · beef and pork curry with condiments · Course A ¥8,500 · parfaits', cuisine_type: 'yoshoku',
    website: 'https://parlour.shiseido.co.jp/shoplist/restaurantginza/', gmaps: gm('資生堂パーラー 銀座本店 レストラン'), menu_url: null,
    notes: "[Yōshoku · Shiseido Parlour's flagship dining room] The restaurant floors (4F–5F, 64 seats) of the Tokyo Ginza Shiseido Building, a serene, beautifully designed room for Ginza's classic Western dishes, the kind families pass down through generations. Omurice (¥3,000 in 2026) is packed with chicken, mushrooms and onion under plenty of egg, with the sauce poured at the table and condiments such as fukujinzuke, achar, pickled shallots and mandarin. The beef curry is a standard and the pork curry a quiet favourite. Course A (¥8,500) runs an amuse, tuna confit and more; lobster comes with seasonal vegetables. Desserts include chocolate cake and parfaits. A 4 pm visit walked straight in; 10% service charge.",
    chef_bio: { chef_name: null, roles: [], origin: 'Flagship restaurant of Shiseido Parlour (Tabelog listing name)', background: 'Shiseido Parlour (parlour.shiseido.co.jp).', philosophy: null, specialty: 'Omurice; curry.',
      anecdotes: [
        { text: '"I ordered the Omurice for JPY 3,000. The Omurice comes with condiments: Fukujinzuke, Achaar, pickled shallots, and mandarin oranges. The sauce is poured over the Omurice right in front of you." — October 2026.', source: R + 'B537739138/' },
        { text: '"I chose Course A for JPY 8,500… Appetizer: Tuna Confit… The tuna was moist and released a wonderful flavor and aroma." — October 2026.', source: R + 'B537123908/' },
      ],
      japanese_sources_summary: '食べログ: 資生堂パーラー 銀座本店(レストラン)、銀座8-8-3 東京銀座資生堂ビル4F・5F、新橋駅銀座口徒歩5分・銀座駅A2出口徒歩7分、64席(8名個室)、火〜日11:30〜21:30(L.O. 20:30)、月休(祝日は営業)、サービス料10%、車椅子可、公式サイト parlour.shiseido.co.jp。2026年10月の口コミ: コースA 8,500円(アミューズ、マグロのコンフィ)、オマール海老と野菜ときのこ、かぼちゃ、ショコラのケーキ、パフェ、親から子へ伝えたいビーフカレーとポークカレー、オムライス3,000円(福神漬・アチャール・エシャロット漬・みかんの薬味、ソースは目の前でかける、鶏肉・きのこ・玉ねぎのチキンライス)、16時ごろはすんなり入れた。',
      confidence: 'medium', sources: [TB, R + 'B537739138/', R + 'B537123908/', R + 'B537642582/', R + 'B537287528/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Elegant but relaxed.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座8-8-3 東京銀座資生堂ビル 4F・5F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座八丁目8番3号 (go) 10m; OSM Shiseido node/2950138182 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537739138/', R + 'B537123908/'],
    price_note: 'Prices from October 2026 reviews; plus 10% service.', last_checked: TODAY, items: [
      it('オムライス', 'omuraisu', 'Omurice with condiments, sauce poured at the table', '¥3,000', 'Mains', 'ask', 'no', 'October 2026.', 'omurice'),
      it('ビーフカレー', '', 'Beef curry', '', 'Mains', 'ask', 'no', '', 'beef_curry'),
      it('ポークカレー', '', 'Pork curry', '', 'Mains', 'ask', 'no', 'October 2026.', 'pork_curry'),
      it('コースA', '', 'Course A (amuse, tuna confit, …)', '¥8,500', 'Courses', 'ask', 'no', 'October 2026.', 'course_a'),
    ] }, {
    cuisine: '資生堂パーラーの旗艦レストランの洋食・目の前でソースをかけるオムライス(3,000円)・薬味付きのビーフカレーとポークカレー・コースA 8,500円・パフェ',
    neighborhood: '東京銀座資生堂ビル4F・5F、銀座八丁目。新橋駅から徒歩5分',
    gf_detail: '要確認。オムライス、ビーフやポークのカレー、オマール海老、コンフィやデザート(ショコラのケーキ、パフェ)のコースなどの古典的な洋食。ソースやルウの中身、グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。オムライス、ビーフやポークのカレー、オマール海老、マグロのコンフィ。',
    notes: '[洋食・資生堂パーラーの旗艦ダイニング] 東京銀座資生堂ビルのレストランフロア(4F・5F、64席)。美しく設えた静かな空間で、親から子へと伝えたくなる銀座の古典的な洋食を出します。オムライス(2026年は3,000円)は鶏肉、きのこ、玉ねぎのチキンライスをたっぷりの卵で包み、ソースは目の前でかけ、福神漬、アチャール、エシャロット漬、みかんの薬味付き。ビーフカレーは定番、ポークカレーも隠れた人気。コースA(8,500円)はアミューズ、マグロのコンフィなど、オマール海老には季節の野菜。デザートはショコラのケーキやパフェ。16時ごろはすんなり入れた例も。サービス料10%。',
  });
}

// ================================================================ 銀座みゆき館 銀座5丁目店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13011561/'; const R = TB + 'dtlrvwlst/';
  const early = day(['11:30', '22:00']); const late = day(['11:30', '23:00']);
  put({
    id: 'tokyo_cafe_ginza_miyukikan_5chome', name: '銀座みゆき館 銀座5丁目店 (Café de Ginza Miyukikan)', category: 'OMNI',
    lat: 35.670173, lng: 139.765888,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a cake café (Mont Blanc, apple chiboust) with yōshoku; coffee is the only item named without wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cream cakes and café au lait; black coffee is the plant-only option named.',
    hours_raw: 'Mon, Tue and Sun 11:30–22:00; Wed–Sat 11:30–23:00 (Tabelog; may change). No reservations. Designated smoking area.',
    hours: { 0: early, 1: early, 2: late, 3: late, 4: late, 5: late, 6: early }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 5-chōme, Prince Bldg 1F, on Suzuran-dōri — 3 min from Ginza Stn exit B7',
    cuisine: 'Classic Ginza café · carefully brewed coffee in elegant cups · seasonal Mont Blanc and apple chiboust · open to 22:00–23:00 · window view toward Mitsukoshi', cuisine_type: 'kissaten',
    website: 'http://cafe-ginza-miyukikan.com/', gmaps: gm('銀座みゆき館 銀座5丁目店'), menu_url: null,
    notes: "[Café · Miyukikan, the late-opening Ginza classic] A 60-seat café on the ground floor of the Prince Building off Suzuran-dōri, unchanged in its classic elegance while Ginza changes around it. Regulars come for carefully brewed hot coffee with a pleasant bitterness, served in elegant cups, and for seasonal cakes. The autumn picks are a chestnut Mont Blanc and an apple chiboust with a crisp caramelised top. It stays open to 22:00, or 23:00 Wednesday to Saturday, so late evenings are quiet with little waiting, and window seats look toward Ginza Mitsukoshi. No reservations; there is a designated smoking area.",
    chef_bio: { chef_name: null, roles: [], origin: 'Ginza 5-chōme branch (Tabelog listing name)', background: 'No source names the operator.', philosophy: null, specialty: 'Coffee; seasonal cakes.',
      anecdotes: [
        { text: '"The cream was wonderfully smooth, the top was perfectly caramelized and crispy, and the apple aroma was delightful… From the window, I enjoyed the nostalgic view of Ginza Mitsukoshi." — October 2026, apple chiboust.', source: R + 'B538052020/' },
        { text: '"I appreciate that this place is open late on weekdays. It\'s relatively quiet during the later hours." — September 2026, Mont Blanc.', source: R + 'B538026426/' },
      ],
      japanese_sources_summary: '食べログ: 銀座みゆき館 銀座5丁目店、銀座5-10-1 プリンスビル1F、銀座駅B7出口徒歩3分、60席、月・火・日11:30〜22:00、水〜土11:30〜23:00、予約不可、分煙(喫煙所あり)、テイクアウト可、公式サイト cafe-ginza-miyukikan.com。2026年の口コミ: 変わらない上品で古典的な雰囲気、すずらん通りの喧騒を忘れる、丁寧に淹れたホットコーヒー、アイスカフェオレ、上品なモンブラン、平日も夜遅くまで開いていて遅い時間は静か、栗のモンブランとりんごのシブースト(キャラメリゼした表面)、上品なカップ、窓から銀座三越が見える。',
      confidence: 'medium', sources: [TB, R + 'B538052020/', R + 'B538026426/', R + 'B42422297/', R + 'B534474667/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No reservations; quieter late.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座5-10-1 プリンスビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座五丁目10番1号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538052020/'],
    price_note: 'No prices captured; spend ¥1,000–4,000 in reviews.', last_checked: TODAY, items: [
      it('りんごのシブースト', '', 'Apple chiboust (autumn)', '', 'Cakes', 'no', 'no', 'October 2026.', 'chiboust'),
      it('栗のモンブラン', '', 'Chestnut Mont Blanc (autumn)', '', 'Cakes', 'no', 'no', '', 'mont_blanc'),
      it('ホットコーヒー', '', 'Hot coffee', '', 'Drinks', 'ask', 'vegan', 'September 2026.', 'coffee'),
    ] }, {
    cuisine: '銀座の古典的な喫茶・丁寧に淹れたコーヒーを上品なカップで・季節のモンブランとりんごのシブースト・22〜23時まで・窓から三越方面',
    neighborhood: '銀座五丁目、すずらん通りのプリンスビル1F。銀座駅B7出口から徒歩3分',
    gf_detail: 'グルテンフリーではありません。ケーキ(モンブラン、シブースト)と洋食の喫茶店で、小麦を含まないと分かるのはコーヒーだけ。',
    vegan_detail: 'ヴィーガンではありません。クリームのケーキとカフェオレ。植物性だけと分かるのはブラックコーヒー。',
    notes: '[喫茶・夜遅くまで開く銀座の定番みゆき館] すずらん通りそば、プリンスビル1階の60席の喫茶店。銀座の街が変わっても古典的な上品さは変わりません。常連の目当ては心地よい苦みの丁寧に淹れたホットコーヒーと季節のケーキで、上品なカップで出てきます。秋は栗のモンブランと、表面をパリッとキャラメリゼしたりんごのシブースト。22時(水〜土は23時)まで開いているので夜は静かで待たずに入れ、窓際の席からは銀座三越方面が見えます。予約不可、喫煙所あり。',
  });
}

// ================================================================ おそば 照庵 銀座
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13133616/'; const R = TB + 'dtlrvwlst/';
  const d = day(['17:30', '02:30']);
  put({
    id: 'tokyo_osoba_shoan_ginza', name: 'おそば 照庵 銀座 (Osoba Shoan)', category: 'OMNI',
    lat: 35.670242, lng: 139.760029,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura, ten-don, fried squid and katsu-don sit beside seiro soba whose buckwheat ratio is not stated; the tsuyu and oden broth are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: oden in dashi, bonito, squid, tsukune, nikudōfu.',
    hours_raw: 'Mon–Fri 17:30–02:30; closed Sat, Sun and holidays (Tabelog; may change). Service charge 15% (Tabelog) and a late-night surcharge (October 2026 review).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 7-chōme (7-2-12), near Corridor-gai — 5 min from Ginza Stn',
    cuisine: 'Late-night soba izakaya since 2011 · seiro and kuro (black) seiro · oden from a handmade copper pot at the L-shaped counter · tempura, dashimaki · picked sake', cuisine_type: 'udon_soba',
    website: null, gmaps: gm('おそば 照庵 銀座'), menu_url: null,
    notes: "[Soba · oden and soba until 2:30 am] A soba house open since 2011 with an 8-seat L-shaped counter around a handmade copper oden pot, 30 seats upstairs, a private room and a tatami room. It runs weekday nights until 2:30 am, a rarity at this level. Drinkers start with oden in a much-praised broth, squid sashimi, corn tempura, nikudōfu, vinegared tuna, dashimaki (¥1,200) or bonito, with sake such as Nabeshima. They finish with silky seiro soba or the black kuro seiro when it's on, or a ten-don. Service is warm. It's not cheap: dinner runs ¥6,000–15,000 with a 15% service charge and a late-night surcharge.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 7 November 2011 (Tabelog)', background: 'No source names the owner.', philosophy: null, specialty: 'Seiro and kuro seiro; oden.',
      anecdotes: [
        { text: '"The L-shaped counter has 8 seats and there is a second floor. The handmade copper oden pot installed in the counter is truly impressive." — October 2026.', source: R + 'B536904133/' },
        { text: '"I was looking forward to the black soba for the finale, but they didn\'t have it that day, so I went with the regular seiro. It was incredibly smooth." — July 2026.', source: R + 'B532486815/' },
      ],
      japanese_sources_summary: '食べログ: おそば 照庵 銀座、銀座7-2-12、60席(カウンター8、2階30、6名個室1、8名座敷1、掘りごたつ)、月〜金17:30〜翌2:30、土日祝休、サービス料15%、日本酒・焼酎にこだわり、飲み放題は16時以降に店長へ、2011年11月7日開店。2026年の口コミ: 深夜まで開いている、そば、天丼、イカの天ぷら、おでん、生姜で食べる鰹、イカ刺し、とうもろこしの天ぷら、肉豆腐、マグロの酢締め、せいろ(黒せいろはない日も)、鍋島、L字カウンター8席と2階、手作りの銅のおでん鍋、だし巻き1,200円、つくね440円、温かい接客、深夜料金が少しかかる、せいろと黒せいろに月2回通う。',
      confidence: 'medium', sources: [TB, R + 'B536904133/', R + 'B532486815/', R + 'B530067999/', R + 'B537715111/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book the counter; late-night surcharge.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-2-12',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目2番12号 (go) 2m; OSM 照庵 node/2019136827 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536904133/'],
    price_note: 'Prices from an October 2026 review (tax incl.); 15% service and late-night surcharge extra.', last_checked: TODAY, items: [
      it('せいろ', 'seiro', 'Seiro soba', '', 'Soba', 'no', 'ask', '', 'seiro'),
      it('黒せいろ', 'kuro seiro', 'Black (kuro) seiro soba', '', 'Soba', 'no', 'ask', 'Not every day.', 'kuro_seiro'),
      it('おでん', 'oden', 'Oden from the copper pot', '', 'Small plates', 'ask', 'no', '', 'oden'),
      it('だし巻き玉子', '', 'Dashimaki tamago', '¥1,200', 'Small plates', 'ask', 'no', 'October 2026.', 'dashimaki'),
      it('つくね', 'tsukune', 'Tsukune', '¥440', 'Small plates', 'ask', 'no', 'October 2026.', 'tsukune'),
    ] }, {
    cuisine: '2011年からの深夜のそば居酒屋・せいろと黒せいろ・L字カウンターの手作りの銅鍋のおでん・天ぷら、だし巻き・厳選の日本酒',
    neighborhood: '銀座七丁目(7-2-12)、コリドー街そば。銀座駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。天ぷら、天丼、イカの天ぷら、カツ丼に、割合の書かれていないせいろ。つゆとおでんのだしも書かれていません。',
    vegan_detail: 'ヴィーガンではありません。だしのおでん、鰹、イカ、つくね、肉豆腐。',
    notes: '[そば・深夜2時半までおでんとそば] 2011年開店、手作りの銅のおでん鍋を囲むL字カウンター8席に2階の30席、個室と座敷もあるそば店。平日は深夜2時半まで開いていて、この水準では貴重です。飲む人はまず評判のだしのおでん、イカ刺し、とうもろこしの天ぷら、肉豆腐、マグロの酢締め、だし巻き(1,200円)、鰹などを鍋島などの日本酒とともに。締めはなめらかなせいろか、ある日には黒せいろ、または天丼。接客は温かい。ただし安くはなく、夜は6,000〜15,000円にサービス料15%と深夜料金がかかります。',
  });
}

// ================================================================ 上野精養軒 松屋銀座店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13014925/'; const R = TB + 'dtlrvwlst/';
  const ms = day(['11:00', '22:00']);
  put({
    id: 'tokyo_ueno_seiyoken_matsuya_ginza', name: '上野精養軒 松屋銀座店 (Ueno Seiyoken Matsuya Ginza)', category: 'OMNI',
    lat: 35.672175, lng: 139.766307,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: crab cream croquettes, demi-glace hamburg and beef stew.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef hamburg, beef stew, crab croquettes.',
    hours_raw: 'Mon–Sat 11:00–22:00 (L.O. 21:00); Sun and the last day of long holidays 11:00–21:30 (L.O. 20:30); closures follow Matsuya Ginza (Tabelog).',
    hours: { 0: ms, 1: ms, 2: ms, 3: ms, 4: ms, 5: ms, 6: day(['11:00', '21:30']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Matsuya Ginza main store 8F restaurant floor, Ginza 3-chōme — connected to Ginza Stn',
    cuisine: 'Branch of Ueno Seiyōken (est. 1872) · beef hamburg in demi-glace with vegetables · crab cream croquettes · beef stew · kids’ menu and baby chairs', cuisine_type: 'yoshoku',
    website: 'https://www.seiyoken.co.jp/restaurant/ginza/index.html', gmaps: gm('上野精養軒 松屋銀座店'), menu_url: null,
    notes: "[Yōshoku · Ueno Seiyōken on the Matsuya restaurant floor] The Ginza branch of Ueno Seiyōken, the 1872 pioneer of Western cooking in Japan, on Matsuya's eighth floor: a small entrance opening onto 50 spacious, comfortable seats. The draw is the classic beef hamburg in a refined demi-glace, thick and coarse-ground, with broccoli, carrot and potato. Crab cream croquettes and beef stew are the other standards; one regular found the croquette batter thick. Family-friendly, with a kids' menu, baby chairs and room for strollers. One diner found online slots that couldn't actually be booked. Lunch about ¥2,000–3,000.",
    chef_bio: { chef_name: null, roles: [], origin: 'Branch of Ueno Seiyōken, established 1872 (September 2026 review)', background: 'Multi-shop (seiyoken.co.jp).', philosophy: null, specialty: 'Demi-glace hamburg; beef stew.',
      anecdotes: [
        { text: '"The hamburger steak that was served to me was thick and perfectly shaped. It was accompanied by broccoli, carrots, and potatoes… The coarsely ground meat provided a delightful graininess." — August 2026.', source: R + 'B534496426/' },
        { text: '"I noticed there were available slots online, but I was unable to make a reservation. It would be helpful if unavailable time slots were not displayed." — October 2026.', source: R + 'B537478647/' },
      ],
      japanese_sources_summary: '食べログ: 上野精養軒 松屋銀座店、銀座3-6-1 松屋銀座本店8F、銀座駅直結徒歩3分、50席、月〜土11:00〜22:00(L.O. 21:00)、日・連休最終日11:00〜21:30(L.O. 20:30)、不定休(松屋銀座に準ずる)、子ども可・お子様メニュー・ベビーチェア・ベビーカー可、公式サイト seiyoken.co.jp。2026年の口コミ: 1872年創業の日本のフランス料理の草分けの銀座店、かにクリームコロッケは衣が厚い、レトルトのビーフシチュー1,080円(持ち帰り)、デミグラスの牛肉ハンバーグ(厚く粗挽き、ブロッコリー・人参・じゃがいも)、入口は小さいが席は広く快適、ネット予約で空き表示があっても予約できなかった。',
      confidence: 'medium', sources: [TB, R + 'B534496426/', R + 'B537478647/', R + 'B534348048/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Department-store restaurant floor; family-friendly.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座3-6-1 松屋銀座 本店 8F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; GSI 東京都中央区銀座三丁目6番1号 (go) is 91m off for the large Matsuya block, so the Tabelog pin is kept; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534496426/', R + 'B534348048/'],
    price_note: 'Only a takeaway price captured; lunch ¥2,000–3,000 in reviews.', last_checked: TODAY, items: [
      it('牛肉ハンバーグ デミグラスソース', '', 'Beef hamburg with demi-glace', '', 'Mains', 'no', 'no', 'August 2026.', 'hamburg'),
      it('かにクリームコロッケ', '', 'Crab cream croquettes', '', 'Mains', 'no', 'no', '', 'crab_croquette'),
      it('ビーフシチュー(レトルト)', '', 'Beef stew, retort pack to take away', '¥1,080', 'Takeaway', 'no', 'no', 'September 2026, tax incl.', 'stew_retort'),
    ] }, {
    cuisine: '1872年創業の上野精養軒の支店・デミグラスソースの牛肉ハンバーグと野菜・かにクリームコロッケ・ビーフシチュー・お子様メニューとベビーチェア',
    neighborhood: '松屋銀座本店8Fのレストラン街、銀座三丁目。銀座駅直結',
    gf_detail: 'グルテンフリーではありません。かにクリームコロッケ、デミグラスのハンバーグ、ビーフシチュー。',
    vegan_detail: 'ヴィーガンではありません。牛肉のハンバーグ、ビーフシチュー、かにのコロッケ。',
    notes: '[洋食・松屋のレストラン街の上野精養軒] 1872年創業、日本の西洋料理の草分けである上野精養軒の銀座店で、松屋の8階。入口は小さいものの中は広く快適な50席です。目当ては上品なデミグラスソースの古典的な牛肉ハンバーグで、厚く粗挽き、ブロッコリー、人参、じゃがいもが添えられます。かにクリームコロッケとビーフシチューも定番ですが、コロッケの衣が厚いという常連も。お子様メニュー、ベビーチェア、ベビーカー可で家族向き。ネット予約で空き枠が表示されても予約できなかったという声も。昼は2,000〜3,000円ほど。',
  });
}

save();
