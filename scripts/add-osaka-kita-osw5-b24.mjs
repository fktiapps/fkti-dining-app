// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle umeda; worker osw5 (lane: Tabelog id even), batch 24.
//   Ids checked for parity: 27016892, 27135796, 27078442, 27078526 (all even).
//   + かっぽう庵 江上 Kappouan Egami (kappo kaiseki and red-vinegar sushi in 堂島浜, private rooms)
//   + 北新地 ふか Kitashinchi Fuka (eight-seat gyoza omakase in 堂島浜 since 2023, Tabelog Dumplings 100 2024)
//   + 飛牛 Higyu (yakiniku of "Daikokusen" black wagyu in Dojima, open to 4:00, Tabelog Yakiniku/Grill WEST 100 2025-2026)
//   + 鶏豚笑店～さっさ～ Toributa Shoten Sassa (yakitori izakaya of morning-fresh chicken and Yoshiju pork in Doyama)
//   Chain check: 江上: one shop (official site egami.cc); not related to osaka_egami_teppan_higashishinsaibashi (a teppan izakaya). ふか: one
//   shop (official site fuka.works). 飛牛: invoice T7120001213193 → 株式会社ＨＩＧＹＵ (NTA register); an October 2026 reviewer says the group
//   has sister restaurants of other names; one 飛牛. さっさ: one shop.
//   None is in data/osaka.json (grep by id, name and address, 2026-11-02). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw5-24');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ かっぽう庵 江上
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27016892/'; const R = TB + 'dtlrvwlst/';
  const W = day(['18:00', '22:30']);
  put({
    id: 'osaka_kappouan_egami_dojimahama', name: 'かっぽう庵 江上 (Kappouan Egami)', category: 'OMNI',
    lat: 34.695795, lng: 135.497515, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Kaiseki dishes in dashi and soy, fried dishes such as a shrimp cutlet burger, red-vinegar sushi and a beef sukiyaki hotpot course.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood kaiseki, sushi and beef sukiyaki.',
    hours_raw: 'Mon–Fri 18:00–22:30 (last order 22:00); Sat 18:00–22:30 by reservation only; closed Sundays and holidays (Tabelog). Lunch ended on 8 August 2025 (April 2025 diner\'s note). Reservations accepted; ¥500 a head charge (Tabelog). Cards (VISA only); no e-money or QR (Tabelog). 16 seats: a counter of 8 and a private room for 8; smoking allowed (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '堂島浜1-3-22, at the back of the ground floor of ビル堂島タウン — 4 min from Oebashi and Kitashinchi Stns',
    cuisine: 'Kappo kaiseki of seasonal fish and vegetables, with sushi by a chef trained as a sushi craftsman, and sake from around Japan and domestic whisky highballs (Tabelog) · courses (Tabelog, tax included): business-dinner course of ten dishes ¥13,200; "ultimate luxury" course of ten ¥15,400; A5-grade beef sukiyaki hotpot course ¥15,400 · dishes named in 2025–2026: red-vinegar sushi to finish, noresore, small dishes of ayu, a shrimp cutlet burger · lunch until August 2025: a nine-item gozen of grilled fish, two sashimi, fried dishes, meat, dashimaki, potato salad and obanzai, with rice refills and yuzu sorbet, ¥1,100–1,200',
    website: 'http://www.egami.cc/', gmaps: gm('かっぽう庵 江上 堂島浜'), menu_url: null,
    notes: "[Kaiseki · 堂島浜, kappo and red-vinegar sushi] A sixteen-seat kappo restaurant tucked at the back of a Dojima-hama building, with a casual counter and a calm private room, serving seasonal kaiseki that ends in red-vinegar sushi from a chef who trained as a sushi craftsman. Courses run ¥13,200–15,400, including a beef sukiyaki course; the dishes are generous enough that one February 2026 diner left sushi behind. Its once-famous ¥1,200 lunch ended in August 2025. Saturdays by reservation only; smoking is allowed; VISA is the only card.",
    chef_bio: { chef_name: null, roles: ['Chefs (unnamed), one with sushi training', 'staff'], origin: null, background: 'Per the shop-maintained Tabelog listing: kaiseki of seasonal fresh fish and vegetables, sushi by chefs experienced as sushi artisans, sake from various regions, counter and private rooms for anniversaries and business. The official site egami.cc lists the shop (read 2026-11-02).', philosophy: null, specialty: 'Kappo kaiseki with red-vinegar sushi.',
      anecdotes: [
        { text: '"I first discovered this place when I started exploring popular lunch spots in Kitashinchi" — April 2025, a fifth visit; a later note says lunch ended on 8 August 2025.', source: R + 'B431519120/' },
        { text: '"The counter area had the vibe of a casual izakaya, while the private rooms exuded the elegance of a fine dining restaurant." — February 2026.', source: R + 'B522320488/' },
        { text: '"I especially loved the sweetfish small dish and the shrimp cutlet burger!" — June 2026.', source: R + 'B530521500/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): かっぽう庵 江上、日本料理・海鮮・寿司、大阪市北区堂島浜1-3-22 ビル堂島タウン1F、大江橋駅・北新地駅から4分、渡辺橋駅から5分、月〜金18:00〜22:30 (L.O.22:00)、土18:00〜22:30 (予約のみ)、日・祝休み、予約可、ひとり500円、カードは VISA のみ、電子マネー・QR 不可、16席 (カウンター8、8名の個室)、喫煙可、季節の鮮魚と野菜の会席、寿司職人の経験のある料理人の寿司、各地の日本酒と国産ウイスキーのハイボール、接待のコース10品13,200円、極みのコース10品15,400円、A5ランク相当の牛のすき焼き鍋のコース15,400円。公式サイト egami.cc。口コミ(2024年10月〜2026年6月): 2025年8月8日でランチ終了、ランチの特選九品御膳1,100〜1,200円 (焼き魚、刺身2種、揚げ物、肉、だし巻き、ポテトサラダ、おばんざい、ごはんのおかわり、柚子シャーベット)、予約なしでは入れなかった、赤酢の寿司、のれそれ、鮎の小鉢、海老カツバーガー、カウンターは居酒屋風で個室は料亭風、量が多い、半個室。',
      confidence: 'medium', sources: [TB, 'http://www.egami.cc/', R + 'B431519120/', R + 'B471713692/', R + 'B500859346/', R + 'B503847592/', R + 'B507468694/', R + 'B509497927/', R + 'B519415372/', R + 'B522320488/', R + 'B530521500/', R + 'B533011928/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set kaiseki courses; counter or private room (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市北区堂島浜1-3-22 ビル堂島タウン1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the official site; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島浜一丁目3番22号 (go) 12m. 北新地 ふか of this batch (osaka_kitashinchi_fuka_dojimahama, "堂島浜1-3-22 ビル 堂島タウン B1F") is in the same building with its pin about 6 m away, so both pins are block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from the Tabelog listing (tax included).', last_checked: TODAY, items: [
      it('', '', 'Business-dinner course, ten dishes', '¥13,200', 'Courses', 'ask', 'no', 'Tabelog.', 'settai_course'),
      it('', '', '"Ultimate luxury" course, ten dishes', '¥15,400', 'Courses', 'ask', 'no', 'Tabelog.', 'kiwami_course'),
      it('', '', 'A5-grade beef sukiyaki hotpot course', '¥15,400', 'Courses', 'ask', 'no', 'Tabelog.', 'sukiyaki_course'),
    ] }, {
    cuisine: '季節の魚と野菜の割烹会席に、寿司職人の経験のある料理人の寿司、各地の日本酒と国産ウイスキーのハイボール (食べログ)・コース (食べログ、税込): 接待のコース10品13,200円、極みのコース10品15,400円、A5ランク相当の牛のすき焼き鍋のコース15,400円・2025年〜2026年の口コミに出てくる料理: 〆の赤酢の寿司、のれそれ、鮎の小鉢、海老カツバーガー・2025年8月までのランチ: 焼き魚、刺身2種、揚げ物、肉、だし巻き、ポテトサラダ、おばんざいの九品御膳、ごはんのおかわりと柚子シャーベットつきで1,100〜1,200円',
    neighborhood: '堂島浜1-3-22、ビル堂島タウンの1階の奥。大江橋駅・北新地駅から4分',
    gf_detail: '要確認。グルテンの情報なし。だしと醤油の会席、海老カツバーガーなどの揚げ物、赤酢の寿司、牛のすき焼き鍋のコース。',
    vegan_detail: 'ヴィーガンではありません。魚介の会席、寿司、牛のすき焼き。',
    notes: '[懐石・堂島浜、割烹と赤酢の寿司] 堂島浜のビルの1階の奥にある16席の割烹で、気軽なカウンターと落ち着いた個室。季節の会席の最後に、寿司職人の経験のある料理人が赤酢の寿司を握る。コースは13,200〜15,400円で、牛のすき焼きのコースも。量が多く、寿司を残したという声も (2026年2月)。人気だった1,200円のランチは2025年8月で終了。土曜は予約のみ、喫煙可、カードは VISA だけ。',
  });
}

// ================================================================ 北新地 ふか
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27135796/'; const R = TB + 'dtlrvwlst/';
  const OWN = 'https://fuka.works/';
  const W = day(['17:30', '22:30']);
  put({
    id: 'osaka_kitashinchi_fuka_dojimahama', name: '北新地 ふか (Kitashinchi Fuka)', category: 'MOM_AND_POP',
    lat: 34.695744, lng: 135.497529, cuisine_type: 'gyoza',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a gyoza omakase; every course centres on dumpling wrappers, made with vegetables and seaweed but not described as wheat-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fillings of pork, beef, abalone, sardine and Kesennuma shark fin, with broths.',
    hours_raw: 'Mon–Sat in two seatings, 17:30–19:30 and 20:00–22:00; closed Sundays and holidays (Tabelog). Reservation only, by the person dining; four or more and private hire by phone; children only if eating the course (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), e-money and QR accepted (Tabelog). 8 seats at a curved counter; non-smoking (Tabelog; September 2026). No sign outside, only a rusted knife sculpture at the entrance (September 2026). Opened 8 May 2023 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '堂島浜1-3-22, basement of ビル 堂島タウン, unsigned, a rusted knife sculpture at the door — 184 m from Oebashi Stn',
    cuisine: 'Gyoza omakase that rethinks the dumpling through wrapper and filling: wrappers made with vegetables and seaweed, fillings of Mangalica pork, Iga beef strip loin, wild Ezo abalone and more, always including Kesennuma shark fin (Tabelog) · gyoza omakase course ¥17,000; with a drink pairing of wine, sake and Shaoxing ¥27,000; the second seating gets refills of pan-fried gyoza (Tabelog, tax included) · dishes named in September–October 2026: flower gyoza of flower okra with Kada horse mackerel or sardine; a bowl gyoza under Masutomi Shoten shirasu; boiled and pan-fried gyoza; a matsutake gyoza; carefully cooked rice; each dish explained on a card in an envelope · Tabelog Dumplings 100 in 2024',
    website: OWN, gmaps: gm('北新地 ふか 餃子'), menu_url: null,
    notes: "[Gyoza · 堂島浜, a gyoza omakase] An eight-seat curved counter in an unsigned basement in Dojima-hama, open since 2023 and on Tabelog's Dumplings 100 list in 2024, where the chef-owner turns gyoza into a tasting course. Wrappers are made with vegetables and seaweed and filled with Mangalica pork, Iga beef, wild abalone or Kesennuma shark fin, each dish explained on a card in an envelope; the menu has run to around 300 kinds. The omakase is ¥17,000, ¥27,000 with a sommelier's pairing, in two seatings; the second gets refills of pan-fried gyoza. Reservation only.",
    chef_bio: { chef_name: 'Yuuya Kusunoki', roles: ['Owner-chef (spelled "Yuuya Kusunoki" on Tabelog, "Yuya Kusunoki" in a review)', 'sommelier and floor staff'], origin: null, background: 'Per the shop-maintained Tabelog listing: chef Yuuya Kusunoki, "An Unyielding Explorer Living with Gyoza"; over a hundred varieties of gyoza; Mangalica pork, Iga beef, wild Ezo abalone, Kesennuma shark fin; opened 8 May 2023; Tabelog Dumplings 100 in 2024. A September 2026 diner writes that the owner, Yuya Kusunoki, carries on a family legacy, as the parents ran a Chinese restaurant; another counts around 300 kinds of gyoza created. Name given only in Latin letters in the sources read.', philosophy: '"Capturing the essence of ingredients in the format of gyoza" (Tabelog).', specialty: 'Gyoza omakase; Kesennuma shark-fin gyoza.',
      anecdotes: [
        { text: '"The owner greets guests personally, and each dish is accompanied by a detailed description in an envelope, explaining the journey of the gyoza and its unique flavors." — September 2026, the 8 PM seating.', source: R + 'B514661290/' },
        { text: '"The signature dish, the shark fin from Kesennuma, was incredibly delicious" — October 2026, a fifth visit.', source: R + 'B509844968/' },
        { text: '"It was my first visit in three years, and I noticed that a sommelier has joined to offer pairings." — September 2026.', source: R + 'B535222214/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 北新地 ふか、餃子・イノベーティブ、大阪市北区堂島浜1-3-22 ビル 堂島タウン B1F、大江橋駅から184m、月〜土の2部制 (17:30〜19:30、20:00〜22:00)、日・祝休み、予約のみ (来店する本人が予約)、4名以上と貸切は電話、子どもは大人と同じコースのみ、カード・電子マネー・QR 可、カウンター8席、禁煙、2023年5月8日オープン、食べログ 餃子 百名店 2024、皮と餡で餃子を組み立てなおすコース、野菜や海藻の皮、Mangalica の豚、Iga 牛のロース、天然の Ezo アワビ、いつも Kesennuma のフカヒレ、100種以上の餃子、餃子のおまかせコース17,000円、ワイン・日本酒・紹興酒のペアリングつき27,000円、2部は焼き餃子のおかわり、シェフは Yuuya Kusunoki。公式サイト fuka.works。口コミ(2026年9月〜10月): 看板はなく入口に錆びたナイフのオブジェ、曲線のカウンター8席、店主があいさつし封筒に料理の説明、約300種の餃子、花オクラと Kada のアジやイワシの花餃子、Masutomi Shoten のしらすの丼餃子、水餃子と焼き餃子、松茸の餃子、ていねいなごはん、ソムリエのペアリング、店主の Yuya Kusunoki さんの両親は中華料理店、紹興酒1.5杯でコース20,700円。',
      confidence: 'medium', sources: [TB, OWN, R + 'B497737583/', R + 'B509844968/', R + 'B514661290/', R + 'B535222214/', R + 'B535328200/', R + 'B536261947/', R + 'B537233001/', R + 'B537923074/', R + 'B537929093/', R + 'B537990300/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Each dish explained on a card (September 2026); visitors from outside Osaka (October 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市北区堂島浜1-3-22 ビル 堂島タウン B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島浜一丁目3番22号 (go) 18m. かっぽう庵 江上 of this batch (osaka_kappouan_egami_dojimahama, "堂島浜1-3-22 ビル堂島タウン1F") is in the same building with its pin about 6 m away, so both pins are block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from the Tabelog listing (tax included).', last_checked: TODAY, items: [
      it('', '', 'Gyoza omakase course', '¥17,000', 'Courses', 'no', 'no', 'Tabelog; 2026.', 'gyoza_omakase'),
      it('', '', 'Gyoza course with drink pairing', '¥27,000', 'Courses', 'no', 'no', 'Tabelog.', 'gyoza_pairing'),
    ] }, {
    cuisine: '皮と餡で餃子を考えなおす餃子のおまかせ: 野菜や海藻を使った皮に、Mangalica の豚、Iga 牛のロース、天然の Ezo アワビなどの餡、いつも Kesennuma のフカヒレも (食べログ)・餃子のおまかせコース17,000円、ワイン・日本酒・紹興酒のペアリングつき27,000円、2部は焼き餃子のおかわりつき (食べログ、税込)・2026年9月〜10月の口コミに出てくる料理: 花オクラの皮と Kada のアジやイワシの花餃子、Masutomi Shoten のしらすをのせた丼餃子、水餃子と焼き餃子、松茸の餃子、ていねいに炊いたごはん、料理ごとに封筒の説明カード・食べログ 餃子 百名店 2024',
    neighborhood: '堂島浜1-3-22、ビル 堂島タウンの地下、看板なし、入口に錆びたナイフのオブジェ。大江橋駅から184m',
    gf_detail: 'グルテンフリーではありません。餃子のおまかせで、どの料理も餃子の皮が中心。皮には野菜や海藻を使うが、小麦なしという説明はない。',
    vegan_detail: 'ヴィーガンではありません。豚、牛、アワビ、イワシ、Kesennuma のフカヒレの餡と、スープ。',
    notes: '[餃子・堂島浜、餃子のおまかせ] 堂島浜の看板のない地下にある曲線のカウンター8席の店で、2023年から、食べログ 餃子 百名店 2024。店主のシェフが餃子をコース料理にする。野菜や海藻を使った皮に、Mangalica の豚、Iga 牛、天然のアワビ、Kesennuma のフカヒレを包み、料理ごとに封筒の説明カードつき。これまでに約300種の餃子を作ってきた。おまかせは17,000円、ソムリエのペアリングで27,000円、2部制で、2部は焼き餃子のおかわりも。予約のみ。',
  });
}

// ================================================================ 飛牛
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27078442/'; const R = TB + 'dtlrvwlst/';
  const W = day(['18:00', '04:00']); const S = day(['18:00', '01:00']);
  put({
    id: 'osaka_higyu_dojima', name: '飛牛 (Higyu)', category: 'OMNI',
    lat: 34.696383, lng: 135.500088, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Yakiniku with sauces, a sirloin "yaki-shabu" over rice, yukhoe with egg yolk, garlic foil grill, cold noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: black wagyu yakiniku and offal.',
    hours_raw: 'Mon–Fri 18:00–4:00 (last order 3:00); Sat 18:00–1:00 (last order 0:30); closed Sundays and holidays (Tabelog). Reservations accepted (Tabelog). Service charge: Tabelog\'s original text says none ("なし"). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), QUICPay; no QR (Tabelog). 18 seats: a counter of 8 and private rooms of up to 10; smoking allowed (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '堂島1-1-20, 5F of パールプラザビル, on Kitashinchi\'s main street at its eastern end — 3–5 min from Kitashinchi Stn',
    cuisine: 'Yakiniku of "Daikokusen" black wagyu, a brand the shop says is found nowhere else, with sommelier-chosen wines and rice supervised by the eighth-generation Gihei of Kyoto (Tabelog) · signatures: sirloin "yaki-shabu" grilled on one side and laid on rice; the "Sakeru Hire" fillet steak cut at the grill (Tabelog; 2026) · courses (Tabelog, tax included): special black wagyu course of nine ¥13,200; assorted platter course ¥8,800; wagyu fillet shabu-shabu ¥8,800 · dishes named in 2026: chateaubriand, thick tongue, liver, outside skirt and premium skirt, outside-skirt sashimi, yukhoe with egg yolk, kimchi and namul platters, garlic foil grill, half-size cold noodles · Tabelog Yakiniku WEST 100 2025, Grill WEST 100 2026',
    website: null, gmaps: gm('飛牛 北新地 焼肉'), menu_url: null,
    notes: "[Yakiniku · Dojima, Daikokusen wagyu until 4:00] An eighteen-seat yakiniku room on a fifth floor at the east end of Kitashinchi's main street, on Tabelog's WEST 100 lists in 2025 and 2026, open until 4:00 on weekdays. It serves 'Daikokusen' black wagyu in thick cuts: the sirloin yaki-shabu over rice and the 'Sakeru Hire' fillet, cut at the grill by staff, are the showpieces, with chateaubriand, liver and a garlic foil grill. Courses are ¥8,800–13,200, or à la carte; diners find it pricey but worth it. Private rooms for business; smoking allowed.",
    chef_bio: { chef_name: null, roles: ['Kitchen staff and grill staff (unnamed)', 'sommelier'], origin: null, background: 'Per the shop-maintained Tabelog listing: a new brand of black wagyu, "Daikoku Sen Gyuu", sommelier-chosen wines, rice supervised by the eighth-generation Gihei of Kyoto; Tabelog Yakiniku WEST 100 2025 and Grill WEST 100 2026. The Tabelog invoice number T7120001213193 is registered to 株式会社ＨＩＧＹＵ at the same building (NTA invoice register, read 2026-11-02). An October 2026 diner describes it as the high-end yakiniku of a group with sister restaurants such as "Satsuma".', philosophy: null, specialty: 'Sirloin yaki-shabu; Sakeru Hire fillet.',
      anecdotes: [
        { text: '"The Sakeru Filet was grilled by the staff, who cut it into perfect bite-sized pieces with a fork while it cooked on the grill." — August 2026.', source: R + 'B533307846/' },
        { text: '"the sirloin shabu-shabu was fantastic—grill one side well and just sear the other side briefly, then place it on rice." — September 2026.', source: R + 'B535286398/' },
        { text: '"If you can handle the smell, definitely order the garlic foil grilled dish." — September 2026.', source: R + 'B535770920/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 飛牛、焼肉・ホルモン、大阪市北区堂島1-1-20 パールプラザビル 5F、東西線 北新地駅から3〜5分、月〜金18:00〜4:00 (L.O.3:00)、土18:00〜1:00 (L.O.0:30)、日・祝休み、予約可、サービス料なし、カード・QUICPay 可、QR 不可、18席 (カウンター8、10名までの個室)、喫煙可、食べログ 焼肉 WEST 百名店 2025、Grill WEST 百名店 2026、ほかにない黒毛和牛「Daikokusen」、サーロインの焼きしゃぶ、目の前で切る Sakeru Hire、ソムリエが選ぶワイン、Kyoto の Gihei の八代目監修のごはん、特選黒毛和牛コース9品13,200円、盛り合わせのコース8,800円、和牛ヒレのしゃぶしゃぶ8,800円。インボイス登録は株式会社ＨＩＧＹＵ (同じビル)。口コミ(2026年7月〜10月): シャトーブリアン、厚切りのタン、レバー、ハラミと特上ハラミ、ハラミの刺身、卵黄のユッケ、キムチとナムルの盛り合わせ、にんにくのホイル焼き、ハーフの冷麺、肉が大きい、北新地の大通りの東の端、値段は高めだが満足、Satsuma などの系列の高級店という声。',
      confidence: 'medium', sources: [TB, R + 'B532431668/', R + 'B532664562/', R + 'B533307846/', R + 'B534635845/', R + 'B535286398/', R + 'B535683411/', R + 'B535770920/', R + 'B537335136/', R + 'B538041289/', R + 'B538275242/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Courses or à la carte; staff grill the signature cuts (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂島1-1-20 パールプラザビル 5F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島一丁目1番20号 (go) 20m; no other record within 30 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from the Tabelog listing (tax included).', last_checked: TODAY, items: [
      it('', '', 'Special black wagyu course, nine dishes', '¥13,200', 'Courses', 'ask', 'no', 'Tabelog; July 2026.', 'special_course'),
      it('', '', 'Assorted platter course, nine dishes', '¥8,800', 'Courses', 'ask', 'no', 'Tabelog; July 2026.', 'platter_course'),
      it('', '', 'Wagyu fillet shabu-shabu', '¥8,800', 'Courses', 'ask', 'no', 'Tabelog.', 'hire_shabu'),
    ] }, {
    cuisine: 'ほかにないという黒毛和牛「Daikokusen」の焼肉に、ソムリエが選ぶワインと、Kyoto の Gihei の八代目監修のごはん (食べログ)・名物: 片面を焼いてごはんにのせるサーロインの焼きしゃぶ、焼き台で切る「Sakeru Hire」 (食べログ、2026年)・コース (食べログ、税込): 特選黒毛和牛コース9品13,200円、盛り合わせのコース8,800円、和牛ヒレのしゃぶしゃぶ8,800円・2026年の口コミに出てくる料理: シャトーブリアン、厚切りのタン、レバー、ハラミと特上ハラミ、ハラミの刺身、卵黄のユッケ、キムチとナムルの盛り合わせ、にんにくのホイル焼き、ハーフの冷麺・食べログ 焼肉 WEST 百名店 2025、Grill WEST 百名店 2026',
    neighborhood: '堂島1-1-20、パールプラザビルの5階、北新地の大通りの東の端。北新地駅から3〜5分',
    gf_detail: '要確認。グルテンの情報なし。たれの焼肉、ごはんにのせるサーロインの焼きしゃぶ、卵黄のユッケ、にんにくのホイル焼き、冷麺。',
    vegan_detail: 'ヴィーガンではありません。黒毛和牛の焼肉とホルモン。',
    notes: '[焼肉・堂島、朝4時までの Daikokusen の和牛] 北新地の大通りの東の端のビルの5階にある18席の焼肉店で、食べログの WEST 百名店に2025・2026年、平日は朝4時まで。黒毛和牛「Daikokusen」を厚切りで: 名物はごはんにのせるサーロインの焼きしゃぶと、スタッフが焼き台で切る「Sakeru Hire」、シャトーブリアン、レバー、にんにくのホイル焼きも。コースは8,800〜13,200円、アラカルトも。高めだがその価値があるという声。個室で接待にも、喫煙可。',
  });
}

// ================================================================ 鶏豚笑店～さっさ～
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27078526/'; const R = TB + 'dtlrvwlst/';
  const W = day(['18:00', '01:00']);
  put({
    id: 'osaka_toributa_shoten_sassa_doyama', name: '鶏豚笑店～さっさ～ (Toributa Shoten Sassa)', category: 'OMNI',
    lat: 34.703224, lng: 135.504557, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Chicken sashimi, yakitori and pork skewers, chicken steak, fried dishes, kara-age with a sweet-spicy sauce, chicken kamameshi.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken and pork dishes, even the starters.',
    hours_raw: 'Daily except Wednesday 18:00–1:00 (last order food 23:00, drinks 24:00); open on Wednesdays that are holidays or the day before one (Tabelog). Reservations accepted; phone bookings may be seated at a table (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), PayPay (Tabelog). 17 seats: a counter of 7 and tables for 4, 4 and 2; smoking allowed (Tabelog).',
    hours: { 0: W, 1: W, 3: W, 4: W, 5: W, 6: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '堂山町10-17-1, ground floor of H&I堂山ビル, at the far end of Higashi-dori — 5 min from Nakazakicho Stn, 6 min from the Umeda stations',
    cuisine: 'Yakitori izakaya of chicken bought fresh that morning and "Yoshiju" pork, served on "Imakiyaki" ware (as the listing spells it) (Tabelog) · "Adult Sassa" course with two hours of drinks: chicken sashimi platter, skewers, pork steak, fried dishes, chicken kamameshi, cream puff ¥5,500; courses from ¥2,500 (Tabelog; August 2026) · dishes named in 2023–2026: chicken sashimi, liver, tsukune with egg yolk, seseri, stuffed green peppers, breast with yuzu pepper, pork skewers and pork tongue, a chicken rice bowl to finish; starters of simmered wings or sweet-spicy kara-age',
    website: null, gmaps: gm('鶏豚笑店 さっさ 堂山'), menu_url: null,
    notes: "[Yakitori · Doyama, morning-fresh chicken] A seventeen-seat yakitori izakaya at the quiet far end of Higashi-dori, where the owner buys chicken fresh each morning for a sashimi platter, with Yoshiju pork skewers and dishes served on the house pottery. Order the chicken sashimi, the tsukune with egg yolk and a chicken rice bowl; even the starter is chicken. The ¥5,500 course includes two hours of drinks. Diners call it a calm hideaway near Umeda; one in September 2026 found service slow with only two staff. Closed Wednesdays; smoking allowed.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), who handles the chicken', 'one or two staff'], origin: null, background: 'Per the shop-maintained Tabelog listing: fresh chicken bought that morning and handled by the owner, rich "Yoshiju" pork and its tongue, tableware of "Imakiyaki" pottery (also "Imakatsu" on the listing), an adult hideaway in Higashi-Umeda, courses from ¥2,500. Reviews in 2025–2026 describe one or two staff on duty.', philosophy: null, specialty: 'Chicken sashimi; Yoshiju pork skewers.',
      anecdotes: [
        { text: '"What\'s even better is that the appetizer is chicken! It\'s so good!!" — January 2024.', source: R + 'B480944844/' },
        { text: '"Tsukune: Crispy and fragrant on the outside, juicy with meat juices on the inside, wrapped in rich egg yolk—pure happiness!" — June 2026, a business traveller\'s second stop.', source: R + 'B530416401/' },
        { text: '"The photo shows an assorted platter of chicken sashimi, but there were also skewers and pork steak, along with a satisfying chicken kamameshi and a delicious cream puff for dessert." — August 2026, the Adult Sassa course.', source: R + 'B534195680/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 鶏豚笑店～さっさ～、焼き鳥・鍋・居酒屋、大阪市北区堂山町10-17-1 H&I堂山ビル 1F、阪急・御堂筋線梅田駅から6分、JR 大阪駅から8分、中崎町駅から5分、扇町駅から7分、水曜以外18:00〜1:00 (L.O.料理23:00、ドリンク24:00)、水曜休み (祝日と祝前日は営業)、予約可、電話予約はテーブル席のことも、カード・PayPay 可、17席 (カウンター7、テーブル)、喫煙可、朝引きの鶏を店主がさばく、Yoshiju 豚と豚タン、Imakiyaki の器、コースは2,500円から、2時間飲み放題の大人のさっさコース5,500円。口コミ(2023年8月〜2026年9月): お通しも鶏、鶏刺しの盛り合わせ、レバー、卵黄のつくね、せせり、ピーマンの肉詰め、ささみの柚子胡椒、豚串、〆の鶏丼、手羽の煮物、甘辛のからあげ、鶏の釜めし、シュークリーム、東通りの奥、静かな隠れ家、喫煙できる、スタッフがふたりで飲み物が遅かったという声。',
      confidence: 'medium', sources: [TB, R + 'B480944844/', R + 'B486765092/', R + 'B490920361/', R + 'B508962079/', R + 'B519923801/', R + 'B524193542/', R + 'B529318147/', R + 'B530416401/', R + 'B534195680/', R + 'B536139037/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'À la carte or drink-inclusive courses (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂山町10-17-1 H&I堂山ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂山町10番17号 (go) 10m; no other record within 30 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from the Tabelog listing (tax included).', last_checked: TODAY, items: [
      it('', '', '"Adult Sassa" course with two hours of drinks', '¥5,500', 'Courses', 'ask', 'no', 'Tabelog; August 2026.', 'otona_sassa'),
      it('', '', 'Chicken sashimi platter', '', 'À la carte', 'ask', 'no', '2023–2026.', 'torisashi'),
    ] }, {
    cuisine: '朝引きの鶏と「Yoshiju」豚の焼き鳥の居酒屋で、器は Imakiyaki (食べログ)・2時間飲み放題つきの「大人のさっさコース」: 鶏刺しの盛り合わせ、串、豚のステーキ、揚げ物、鶏の釜めし、シュークリームで5,500円、コースは2,500円から (食べログ、2026年8月)・2023年〜2026年の口コミに出てくる料理: 鶏刺し、レバー、卵黄のつくね、せせり、ピーマンの肉詰め、ささみの柚子胡椒、豚串と豚タン、〆の鶏丼。お通しは手羽の煮物や甘辛のからあげ',
    neighborhood: '堂山町10-17-1、H&I堂山ビルの1階、東通りの奥。中崎町駅から5分、梅田の各駅から6分',
    gf_detail: '要確認。グルテンの情報なし。鶏刺し、焼き鳥と豚串、鶏のステーキ、揚げ物、甘辛のからあげ、鶏の釜めし。',
    vegan_detail: 'ヴィーガンではありません。鶏と豚の料理で、お通しも鶏。',
    notes: '[焼鳥・堂山、朝引きの鶏] 東通りの静かな奥にある17席の焼き鳥の居酒屋で、店主が毎朝仕入れる鶏を刺身の盛り合わせに。Yoshiju 豚の串もあり、器は Imakiyaki の焼き物。おすすめは鶏刺し、卵黄のつくね、〆の鶏丼で、お通しまで鶏。2時間飲み放題つきのコースは5,500円。梅田の近くの落ち着いた隠れ家という声が多いが、スタッフがふたりでサービスが遅かったという声も (2026年9月)。水曜休み、喫煙可。',
  });
}

save();
