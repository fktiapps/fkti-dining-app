// Kyoto "what did we miss" pass (kyoto-missed, notable phase) — lane osw13, batch 15.
//   + 鍵善良房 四条本店 Kagizen Yoshifusa Shijo honten (Gion confectioner since the mid-Edo period; kuzukiri tea room)
//   + grains de vanille グラン・ヴァニーユ (French patisserie with an eat-in room near Karasuma-Oike; since 2011)
//   + DODICI (Italian omakase by chef 尾本寛 and sommelier-manager 中島丈晶 in a house opposite 白山神社; since 2020)
//   + 阿闍梨餅本舗 京菓子司 満月 本店 Mangetsu (the Ajari mochi confectioner's main shop near Hyakumanben)
//   - skipped パティスリーエス 26012808: the takeaway main shop of Patisserie S, whose eat-in salon is already in data
//     (kyoto_patisserie_s_salon, batch 13); same brand and the same cakes, so a branch of a brand already in data.
//   Taken in queue order from `queue.mjs kyoto-missed next notable 80` on 2026-11-02.
//   None of the four is in data/kyoto.json: grep by name (鍵善/Kagizen, ヴァニーユ/Vanille, ドーディチ/DODICI,
//   満月/阿闍梨/Mangetsu) and address (祇園町北側264, 鍵屋町486, 上白山町239, 鞠小路通今出川上ル) found nothing.
//   Group check (working line, 2026-11-02): Kagizen has two same-concept shops (四条本店, 高台寺店) plus ZEN CAFE and a
//   museum (official site) — a small group, draft one; Mangetsu has two own shops (本店, 金閣寺店) per a search result
//   I did not open, plus department-store counters — drafted as a small group. Tabelog URLs from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-15');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26012808', 'パティスリーエス (Patisserie S) main shop: same brand and cakes as kyoto_patisserie_s_salon, already in data (batch 13) — a branch of a brand already in data');

// ================================================================ 鍵善良房 四条本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001887/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.kagizen.co.jp/';
  const H = day(['09:30', '18:00']);
  put({
    id: 'kyoto_kagizen_yoshifusa_shijo', name: '鍵善良房 四条本店 (Kagizen Yoshifusa Shijo honten)', category: 'OMNI',
    lat: 35.003979, lng: 135.774752, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The famous kuzukiri is made from kudzu starch and served with black or white syrup, and warabi mochi comes in kinako; other sweets vary and no ingredient list is published (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Kuzukiri with syrup, warabi mochi and bean-paste sweets; no ingredient list is published (2026 reviews).',
    hours_raw: 'Shop 9:30–18:00; tea room 10:00–18:00 (last order 17:30, earlier when busy); closed Monday, or Tuesday when Monday is a holiday (Tabelog). The official site says its November and December 2026 hours are unchanged. No reservations for the tea room (Tabelog); expect a queue at weekends and peak times, and shared large tables when busy (October 2026 reviews). 62 seats (Tabelog). Non-smoking; wheelchair access (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), WAON and PayPay (Tabelog). On Shijo-dori, 3 min from Gion-Shijo Stn exit 7 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, on Shijo-dori east of the Kamo River, toward Yasaka Shrine — 3 min from Gion-Shijo Stn',
    cuisine: 'Kyoto confectioner of the Yasaka Shrine approach since the mid-Edo period, with a tea room behind the shop (official site; 2026 reviews) · the signature kuzukiri: kudzu noodles made to order, in iced water in a two-tier box, dipped in black or white syrup, ¥1,600 (October 2026) · warabi mochi in kinako; kibi mochi zenzai ¥1,400; hot or cold matcha; hojicha and a small sweet served on arrival (October 2026) · to take away: Kagimochi (firm warabi mochi in kinako) and seasonal wagashi (2026 reviews) · diners spend about ¥1,000–1,999',
    website: SITE, gmaps: gm('鍵善良房 四条本店'), menu_url: null,
    notes: "[Sweets · Gion, the Edo-era kuzukiri house on Shijo-dori] A confectioner that has stood by the approach to Yasaka Shrine since the mid-Edo period. Past the showcase of wagashi is a calm tea room facing a small courtyard, where the house kuzukiri arrives in a two-tier box: glossy kudzu noodles made to order, floating in iced water, to dip in dark kuromitsu or white syrup — light, cool and slippery. Warabi mochi in deep kinako and matcha are the other draws; Kagimochi makes a good gift. No reservations, so expect a short queue at weekends. Around ¥1,600 for kuzukiri. Closed Mondays.",
    chef_bio: { chef_name: null, roles: ['Long-established confectioner; no person is named in the sources'], origin: null,
      background: 'Per the official site: since the mid-Edo period, Kagizen Yoshifusa has walked with Gion beside the gate of Yasaka Shrine; the Shijo honten and the 高台寺店 serve the famous kuzukiri, keeping an Edo tradition, and seasonal wagashi; the company also runs ZEN CAFE and the ZENBI art museum with its shop. Tabelog Sweets "Tabelog 100" 2017, Sweets WEST 2018–2020, 2022 and Japanese sweets WEST 2023, 2026 (Tabelog).',
      philosophy: null, specialty: 'Kuzukiri; Kagimochi.',
      anecdotes: [
        { text: '"The kuzukiri (starch noodles) were light and delicious, especially when dipped in the rich black syrup, making them smooth and slippery." — October 2026.', source: R + 'B434358057/' },
        { text: '"When asked if I wanted black syrup or white syrup, I inquired, “Which one is better?” and was told, “If you like sweet things, black syrup is sweeter.”" — October 2026.', source: R + 'B537792265/' },
        { text: '"On a weekday at 12:15, there was no line." — October 2026; by 12:45 about 15 people were waiting.', source: R + 'B537809367/' },
      ],
      japanese_sources_summary: '公式サイト (kagizen.co.jp): 江戸中期より八坂神社の門前で祇園とともに歩んできた鍵善良房、四条本店や高台寺店では江戸の伝統を守る名物「くずきり」と四季の和菓子、ZEN CAFE、ZENBI 鍵善良房 KAGIZEN ART MUSEUM、ミュージアムショップ Zplus、11月・12月の営業時間に変更なし (2026年10月のお知らせ)。食べログ: 甘味処・和菓子・カフェ、東山区祇園町北側264、菓子販売9:30〜18:00、喫茶10:00〜18:00 (L.O.17:30)、月曜定休 (祝日の場合は翌日)、喫茶は予約不可、62席、カード・WAON・PayPay 可、スイーツ百名店 2017、スイーツ WEST 百名店 2018〜2020・2022、和菓子・甘味処 WEST 百名店 2023・2026。口コミ (2026年10〜11月、英語): くずきり、黒蜜と白蜜、わらび餅、抹茶、Kagimochi、週末の行列。',
      confidence: 'medium', sources: [SITE, TB, R + 'B434358057/', R + 'B537487413/', R + 'B537497027/', R + 'B537792265/', R + 'B537809367/', R + 'B537850083/', R + 'B537939379/', R + 'B538110469/', R + 'B538276716/', R + 'B538459768/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Queue, then order kuzukiri (black or white syrup) at the table; no reservations.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側264',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with October 2026 notices; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.003979, 135.774752); cross-checked: GSI 京都府京都市東山区祇園町北側264番地 (lot) 7m; mp_oito is 43 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537939379/', R + 'B537809367/'],
    price_note: 'No published price list read; prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('くずきり', '', 'Kuzukiri with black or white syrup', '¥1,600', 'Tea room', 'ask', 'ask', 'October 2026.', 'kuzukiri'),
      it('', '', 'Kibi mochi zenzai', '¥1,400', 'Tea room', 'ask', 'ask', 'October 2026.', 'zenzai'),
      it('', '', 'Warabi mochi with kinako', '', 'Tea room', 'ask', 'ask', 'October 2026.', 'warabi_mochi'),
    ] }, {
    cuisine: '江戸中期から八坂神社の門前に続く京菓子の店で、奥に喫茶 (公式サイト、2026年の口コミ)・名物のくずきり: 注文を受けてから作る葛の麺を二段の器の氷水に浮かべ、黒蜜か白蜜で、1,600円 (2026年10月)・きなこのわらび餅、きび餅のぜんざい1,400円、温かい抹茶や冷たい抹茶、席に着くとほうじ茶と小さな和菓子 (2026年10月)・持ち帰り: Kagimochi (硬めのわらび餅にきなこ) と季節の和菓子 (2026年の口コミ)・予算は約1,000〜1,999円',
    neighborhood: '祇園、鴨川の東、八坂神社へ向かう四条通。祇園四条駅から徒歩3分',
    gf_detail: '要確認。名物のくずきりは葛粉で作り黒蜜か白蜜で、わらび餅はきなこ付き。ほかの菓子は品によって異なり、原材料は公開されていない (2026年の口コミ)。',
    vegan_detail: '要確認。蜜のくずきり、わらび餅、餡の菓子。原材料は公開されていない (2026年の口コミ)。',
    notes: '[甘味・祇園、四条通の江戸からのくずきり] 江戸中期から八坂神社の門前に店を構える京菓子の老舗。和菓子のショーケースの奥に小さな中庭に面した静かな喫茶があり、名物のくずきりは二段の器で運ばれる: 注文してから作るつややかな葛の麺が氷水に浮かび、濃い黒蜜か白蜜につけて、軽く冷たくつるりと。きなこたっぷりのわらび餅と抹茶も人気で、Kagimochi はお土産に。予約はできず、週末は少し並ぶ覚悟を。くずきりは1,600円ほど。月曜休み。',
  });
}

// ================================================================ grains de vanille
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26017389/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.grainsdevanille.com/';
  const H = day(['10:30', '18:00']);
  put({
    id: 'kyoto_grains_de_vanille', name: 'grains de vanille (グラン・ヴァニーユ)', category: 'OMNI',
    lat: 35.012692, lng: 135.76184, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. French cakes, pastries and breads, mostly with flour; mousses and a meringue cake are on sale but no ingredient list is published (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Cream, mousse and butter pastries; many cakes contain alcohol, and staff check this at the counter (2026 reviews).',
    hours_raw: '10:30–18:00, café last order 16:30; closed Sunday and Monday (Tabelog); the official site points to Instagram and Facebook for closing days. Cakes sell out through the afternoon (September 2026). Choose at the showcase, pay first, then say takeaway or eat-in (October 2026 reviews). Reservations for cakes in person only, not by phone (Tabelog). 18 seats at tables (Tabelog). Non-smoking (Tabelog). Cash only (Tabelog). Children welcome (Tabelog). 4 min from Karasuma-Oike Stn exit 1 (Tabelog). Opened 6 February 2011 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: '間之町通 south of Nijo, in a narrow lane near Karasuma-Oike — 4 min from Karasuma-Oike Stn',
    cuisine: 'French pâtisserie with about 20 cakes in the case, breads and an eat-in room with a view of the kitchen (official site; 2026 reviews) · cakes ¥880 in 2026: Meringue Groseille, Café Escargot, Marron et Passion, Praline Cassis, Montmorency (pistachio and cherry), Unique (cheese and orange); a Japanese-chestnut Mont Blanc finished to order; caramel cream puff; crème vanille · Sablé Vanille ¥800 · croissants; breads from about ¥300, cakes from about ¥500 (September 2026) · drinks such as seasonal muscat granita ¥750 · diners spend about ¥1,000–2,999',
    website: SITE, gmaps: gm('グラン・ヴァニーユ 京都'), menu_url: null,
    notes: "[Sweets · Karasuma-Oike, Kyoto's patisserie of small, layered cakes] In a narrow lane near Karasuma-Oike, a clean, modern shop whose glass case holds about twenty petite French cakes, many with a touch of alcohol: Marron et Passion, a meringue-and-kirsch Groseille, a Mont Blanc piped to order. Pick at the case, pay, then take a table in the eat-in room with a window onto the kitchen; croissants and breads go home well. Cakes around ¥880; cash only. Closed Sunday and Monday, and the case thins out by late afternoon. An October 2026 regular, who rates the cakes the best in Kyoto, reported hurried, irritable service at the register and showcase, and on two visits saw the owner scold employees loudly enough to be heard across the shop.",
    chef_bio: { chef_name: null, roles: ['Owner-pâtissier; not named in the sources read'], origin: null,
      background: 'Per the official site: the name means "vanilla seeds" in French, chosen to evoke a sweet shop; no fixed concept, but a sense of the season, made for the customer\'s "that was delicious". An October 2026 review says the shop has ties to the pâtissier Idemi Sugino. Tabelog Sweets "Tabelog 100" 2017, Sweets WEST 2018–2020, 2022, 2023, 2026; opened 6 February 2011, eat-in from 1 April 2011 (Tabelog). An October 2026 regular reports hurried, irritable service at the register and showcase and, on two visits, the owner reprimanding employees in a harsh tone heard throughout the store.',
      philosophy: 'No set concept: seasonality, and a customer\'s "that was delicious" (official site).', specialty: 'Petite French cakes; Mont Blanc.',
      anecdotes: [
        { text: '"The French pastries are all petite, yet each one features multiple layers of flavors that are delicate and made with high-quality ingredients" — October 2026.', source: R + 'B538009073/' },
        { text: '"The staff often ask, “Is it okay that it contains alcohol?” when customers choose cakes from the showcase" — October 2026.', source: R + 'B537460020/' },
        { text: '"Personally, I consider this shop to be the highest-rated among Kyoto’s patisseries." — October 2026, a regular who also reported hurried service and, on two visits, the owner scolding employees in front of customers.', source: R + 'B538411050/' },
      ],
      japanese_sources_summary: '公式サイト (grainsdevanille.com): grains de vanille、フランス語でバニラの種という意味のグラン・ヴァニーユ、お菓子屋さんをイメージできるようにこの名前に、コンセプトを作らず季節感を大切に、お客様からの美味しかったの一言の為に、中京区間之町二条下ル鍵屋町486、定休日等はインスタグラムまたはフェイスブックで。食べログ: ケーキ・カフェ、火〜土 10:30〜18:00 (L.O.16:30)、日・月休み、電話予約不可・店頭で予約可、18席、カード不可、2011年2月6日オープン、スイーツ百名店 2017、スイーツ WEST 百名店 2018〜2020・2022・2023・2026。口コミ (2026年9〜10月、英語): 小ぶりで層の重なるケーキ、イートイン、アルコール入りのケーキが多い、慌ただしい接客と、客の前で従業員が叱られる場面を残念がる常連も (2026年10月)。',
      confidence: 'medium', sources: [SITE, TB, R + 'B197438814/', R + 'B536027412/', R + 'B537119221/', R + 'B537446538/', R + 'B537460020/', R + 'B537676236/', R + 'B537926043/', R + 'B538009073/', R + 'B538366754/', R + 'B538411050/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point at the case, pay first, then choose takeaway or eat-in.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区間之町二条下ル鍵屋町486',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026; Sweets WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.012692, 135.761840); cross-checked: GSI 京都府京都市中京区鍵屋町486番地 (lot) 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536027412/', R + 'B537460020/'],
    price_note: 'No published price list; prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Meringue Groseille (meringue and kirsch cream on pastry)', '¥880', 'Cakes', 'ask', 'ask', 'September 2026.', 'groseille'),
      it('', '', 'Marron et Passion (chestnut and passion-fruit mousse)', '¥880', 'Cakes', 'ask', 'ask', 'October 2026.', 'marron_passion'),
      it('', '', 'Sablé Vanille', '¥800', 'Baked goods', 'ask', 'ask', 'September 2026.', 'sable'),
    ] }, {
    cuisine: 'ショーケースに約20種のケーキ、パン、厨房の見えるイートインのあるフランス菓子の店 (公式サイト、2026年の口コミ)・2026年のケーキは880円: Meringue Groseille、Café Escargot、Marron et Passion、Praline Cassis、Montmorency (ピスタチオとさくらんぼ)、Unique (チーズとオレンジ)、注文してから仕上げる和栗のモンブラン、キャラメルのシュークリーム、crème vanille・Sablé Vanille 800円・クロワッサン、パンは約300円から、ケーキは約500円から (2026年9月)・季節のマスカットのグラニテ750円など・予算は約1,000〜2,999円',
    neighborhood: '烏丸御池近く、二条通の南の間之町通の細い路地。烏丸御池駅から徒歩4分',
    gf_detail: '要確認。主に小麦粉を使うフランス菓子、パン。ムースやメレンゲのケーキもあるが、原材料は公開されていない (2026年の口コミ)。',
    vegan_detail: '要確認。クリーム、ムース、バターのお菓子。アルコール入りのケーキが多く、店頭で確認される (2026年の口コミ)。',
    notes: '[スイーツ・烏丸御池、小さく層の重なるケーキの店] 烏丸御池近くの細い路地の、清潔でモダンな店。ガラスケースには約20種の小ぶりなフランス菓子が並び、アルコールの効いたものも多い: Marron et Passion、メレンゲとキルシュの Groseille、注文してから仕上げるモンブラン。ケースで選んで会計し、厨房の見えるイートインの席へ。クロワッサンやパンは持ち帰りに。ケーキは880円ほど、現金のみ。日・月曜休み、夕方にはケースが寂しくなる。2026年10月の常連はケーキを京都一と評価しつつ、レジやショーケースの前の接客が慌ただしく苛立って見えること、2度の来店で店主が従業員を店内に響く声で叱るのを見たことを残念がっている。',
  });
}

// ================================================================ DODICI
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26035328/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://dodici-kyoto.jp/'; const ABOUT = 'https://dodici-kyoto.jp/about';
  const LUNCH = 'https://dodici-kyoto.jp/menu/lunch'; const DINNER = 'https://dodici-kyoto.jp/menu/dinner';
  const L = ['12:00', '15:00']; const D = ['18:00', '22:00'];
  const H = day(L, D);
  put({
    id: 'kyoto_dodici', name: 'DODICI (ドーディチ)', category: 'MOM_AND_POP',
    lat: 35.011877, lng: 135.765677, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking: courses include house-made tagliatelle and other pasta, bread and fried dishes; allergies must be stated precisely when booking, no changes on the day, and some bookings may be declined if the restrictions are many (official site).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: set courses of fish, eel, Omi beef, pork and venison (official site).',
    hours_raw: 'Lunch 12:00–15:00 (last entry 13:00) and dinner from 18:00 (last entry 19:00), Tue–Sat and public holidays; closed Sunday and Monday (official site; Tabelog). Dinner closing: Tabelog says 22:00; the official site footer says 20:00. Reservation only, online or by phone, by the day before (official site); a 17:30 start can be arranged (official site). All-omakase: lunch ¥11,000 (8 dishes), dinner ¥19,800 (10 dishes), tax included, plus 10% service; the menu changes monthly (official site). About 500 wines and a pairing by the manager-sommelier (official site). 20 seats, private rooms for 2–8 (Tabelog). Non-smoking (Tabelog). Cards, e-money and QR (Tabelog). 2 min from Kyoto Shiyakusho-mae Stn (Tabelog). Opened 12 December 2020 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '麩屋町通 north of Oike, opposite 白山神社 — 2 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Italian omakase that changes every month — "DODICI" means twelve — using organic vegetables from 石割農園, duck and venison from 亀岡, and Omi beef from 中川畜産 (official site) · lunch ¥11,000 (8 dishes), dinner ¥19,800 (10 dishes), tax included, +10% service (official site) · sample autumn dinner: flounder carpaccio with lotus root and ginkgo; ginger consommé with winter melon; charcoal-grilled wild eel risotto with ume; foie gras flan; baked barracuda with a bagna cauda of house fish sauce; venison roast with grape sauce; Matsutake and surf clam spaghetti; pear soup; fig kataifi (official site) · 2026 reviews: a welcome of cold-brewed hojicha in the ground-floor lounge; a self-rolled piadina; Kyoto red chicken; olive-oil ice cream · about 500 wines; pairings',
    website: SITE, gmaps: gm('DODICI 京都'), menu_url: DINNER,
    notes: "[Italian · City Hall, a monthly-changing omakase in a luxe townhouse] Opposite the small shrine 白山神社, guests start with cold-brewed hojicha in a garden-view lounge before going up to a high-ceilinged dining room in gold, silver and navy. Head chef 尾本寛, who has cooked Italian food for over thirty years and went to Italy at 28, sends out a course that changes every month with Kyoto vegetables, venison, Omi beef and charcoal-grilled eel; manager 中島丈晶, a sommelier certified in two countries, pairs from about 500 wines. 2026 reviewers call it Michelin-starred. Lunch ¥11,000, dinner ¥19,800, plus 10%; book by the day before.",
    chef_bio: { chef_name: '尾本寛 (head chef; official site; no romaji in a source)', roles: ['Head chef (official site: "料理長 尾本寛")', 'Manager and sommelier 中島丈晶 (official site: JSA and AIS certified)'], origin: null,
      background: 'Per the official site: the head chef has cooked Italian food for over thirty years, went to Italy at 28 and lists a one-starred and a two-starred ristorante there; the manager trained at famous Kyoto restaurants and holds sommelier qualifications in two countries; the concept is "overwhelming hospitality and Kyoto\'s finest Italian cooking in a luxurious space"; the name means twelve, for a menu that changes each month. 2026 reviews call it Michelin one-starred. Tabelog: opened 12 December 2020; Italian WEST "Tabelog 100" 2025.',
      philosophy: 'Bring out each ingredient\'s own flavour, and let guests find something new every month (official site).', specialty: 'Monthly Italian omakase; eel risotto with ume.',
      anecdotes: [
        { text: '"Upon entering, I was served cold, water-extracted hojicha in the stylish waiting room on the first floor." — August 2026.', source: R + 'B534219914/' },
        { text: '"The explanation of the Italian wines was thorough, making it easy for someone like me, who isn\'t well-versed in wine, to understand." — August 2026.', source: R + 'B533919787/' },
        { text: '"The menu only listed the ingredients instead of the dish names, making it fun to imagine what each plate would look like as we waited." — September 2026.', source: R + 'B536034462/' },
      ],
      japanese_sources_summary: '公式サイト (dodici-kyoto.jp): 「ラグジュアリーな空間で圧倒的なホスピタリティと京都随一のイタリア料理を」、ゴールド・シルバー・ダークネイビーの内装、イタリア料理歴30年越えの料理長 尾本寛 (28歳で渡伊、リストランテ ドラーダ、リストランテ ペルッベッリーニ)、支配人 中島丈晶 (JSA・AIS 認定ソムリエ)、DODICI はイタリア語で12、毎月コースを変更、石割農園の無農薬野菜、亀岡の京鴨や鹿肉、中川畜産の近江牛、約500本のワイン、ランチ11,000円 (全8品)、ディナー19,800円 (全10品)、税込・サービス料別、アレルギーは予約時に、当日の変更不可、予約は前日まで、麩屋町通御池上ル上白山町239 白山神社前、ランチ12:00〜 (13:00最終入店)、ディナー18:00〜20:00 (19:00最終入店)、日・月定休。食べログ: イタリアン、火〜土・祝 12:00〜15:00・18:00〜22:00、予約のみ、20席、個室2〜8名、サービス料10%、2020年12月12日オープン、イタリアン WEST 百名店 2025。口コミ (2026年3〜10月、英語): 1階の待合で水出しのほうじ茶、2階の高い天井、ワインの丁寧な説明、ミシュラン一つ星。',
      confidence: 'high', sources: [SITE, ABOUT, LUNCH, DINNER, TB, R + 'B524394663/', R + 'B533919787/', R + 'B534141867/', R + 'B534219914/', R + 'B534820841/', R + 'B535569943/', R + 'B535582962/', R + 'B536034462/', R + 'B536726177/', R + 'B538292541/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set omakase; the official site has an English page; online booking.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区麩屋町通御池上ル上白山町239 白山神社前',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with current menus; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.011877, 135.765677); cross-checked: GSI 京都府京都市中京区上白山町239番地 (lot) 53m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'high', sources: [LUNCH, DINNER],
    price_note: 'Official menu pages (tax included, service extra; read November 2026); dishes change monthly.', last_checked: TODAY, items: [
      it('ランチメニュー', '', 'Lunch omakase, 8 dishes', '¥11,000', 'Course', 'ask', 'no', 'Official site; +10% service.', 'lunch'),
      it('ディナーメニュー', '', 'Dinner omakase, 10 dishes', '¥19,800', 'Course', 'ask', 'no', 'Official site; +10% service.', 'dinner'),
    ] }, {
    cuisine: '毎月変わるイタリアンのおまかせ。「DODICI」は12の意味。石割農園の無農薬野菜、亀岡の京鴨や鹿肉、中川畜産の近江牛 (公式サイト)・ランチ11,000円 (全8品)、ディナー19,800円 (全10品)、税込、別途サービス料10% (公式サイト)・秋のディナーの一例: 平目のカルパッチョ 蓮根やルーコラ・銀杏、生姜風味のコンソメスープ 冬瓜と九条葱、炭火で焼いた天然鰻の梅リゾット、フォアグラのフラン、江戸前カマスのオーブン焼き 自家製魚醤のバーニャカウダ、鹿肉のロティ 葡萄のソース、岩手県産松茸とホッキ貝のアーリオオーリオスパゲッティ、和梨の冷製スープ、イチジクのカダイフ揚げ (公式サイト)・2026年の口コミ: 1階のラウンジで水出しのほうじ茶、自分で巻くピアディーナ、京都の赤鶏、オリーブオイルのアイス・約500本のワイン、ペアリング',
    neighborhood: '御池の北の麩屋町通、白山神社の向かい。京都市役所前駅から徒歩2分',
    gf_detail: '予約時に要確認。自家製タリアテッレなどのパスタ、パン、揚げ物がある。アレルギーは予約時に正確に伝え、当日の変更は不可、制限が多いと予約を断られる場合も (公式サイト)。',
    vegan_detail: 'ヴィーガンではありません。魚、鰻、近江牛、豚、鹿のコース (公式サイト)。',
    notes: '[イタリアン・市役所前、町家の豪華な空間で毎月変わるおまかせ] 小さな白山神社の向かい、庭の見える1階のラウンジで水出しのほうじ茶をいただき、金・銀・紺の天井の高い2階のダイニングへ。イタリア料理歴30年を超え28歳で渡伊した料理長の尾本寛さんが、京野菜、亀岡の鹿、近江牛、炭火焼きの鰻で毎月変わるコースを出し、2か国のソムリエ資格を持つ支配人の中島丈晶さんが約500本のワインから合わせる。2026年の口コミではミシュランの星付き。昼11,000円、夜19,800円に10%。予約は前日まで。',
  });
}

// ================================================================ 満月 本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26003917/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.ajyarimochi.com/';
  const H = day(['09:00', '18:00']);
  put({
    id: 'kyoto_mangetsu_ajari_mochi_honten', name: '阿闍梨餅本舗 京菓子司 満月 本店 (Mangetsu Honten)', category: 'OMNI',
    lat: 35.030062, lng: 135.778054, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No ingredient list was read; the 阿闍梨餅 is a chewy skin around bean paste (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No ingredient list was read (2026 reviews).',
    hours_raw: '9:00–18:00 daily, closing early if sold out; closed some Wednesdays (Tabelog). Mostly takeaway, with a few benches; at the main shop the 阿闍梨餅 can be had warm and freshly made (2026 reviews). Shelf life 5 days (Tabelog). Phone 075-791-4121; reservations accepted (Tabelog). Cash only (Tabelog). Parking in front (Tabelog). 4 min from the Hyakumanben bus stop, 7 min from Demachiyanagi Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: '鞠小路通 north of Imadegawa, near Hyakumanben — 7 min from Demachiyanagi Stn',
    cuisine: 'Kyoto confectioner of the 阿闍梨餅: a moist, chewy skin around sweet red bean paste (official site; 2026 reviews) · a pack of five about ¥700 (October 2026) · also 蜜漬京納言, 京銘菓最中 and 眞菓満月 (official site); the 満月 sweet, white bean paste in a firm pastry, sold for a limited time (October 2026) · warm, freshly made 阿闍梨餅 at the main shop (September–October 2026)',
    website: SITE, gmaps: gm('阿闍梨餅本舗 満月 本店'), menu_url: null,
    notes: "[Sweets · Hyakumanben, the home of 阿闍梨餅] The main shop of the confectioner behind one of Kyoto's best-known gifts, the 阿闍梨餅: a soft, chewy round of skin wrapped around just-sweet red bean paste. It is sold at Kyoto Station and department stores, but here you can ask for one warm and freshly made and eat it on a bench, which 2026 visitors say is chewier and better. A pack of five is about ¥700 and keeps five days. Open daily 9:00–18:00 (some Wednesdays closed), closing early when sold out; cash only.",
    chef_bio: { chef_name: null, roles: ['Long-established confectioner; no person is named in the sources'], origin: null,
      background: 'Per the official site: 阿闍梨餅本舗 京菓子司 満月, making the registered 京銘菓 阿闍梨餅, 蜜漬京納言, 京銘菓最中 and 眞菓満月. 2026 reviews describe a shop dating from the late Edo period and the 阿闍梨餅 as created in Taisho 12 (1923) in honour of the monks of Mount Hiei; the sweets are also sold at Kyoto department stores. Tabelog Sweets WEST "Tabelog 100" 2018–2020, 2022 and Japanese sweets WEST 2023, 2026 (Tabelog).',
      philosophy: null, specialty: 'Ajari mochi (阿闍梨餅).',
      anecdotes: [
        { text: '"The Ajari Mochi from the main store is almost freshly made, so it’s still slightly warm and has a nice fluffy texture." — October 2026.', source: R + 'B126518416/' },
        { text: '"As soon as you order, they bring you a warm one right away." — September 2026.', source: R + 'B525699214/' },
        { text: '"I purchased a pack of five for about JPY 700 as a gift for my family. The shelf life is five days." — October 2026.', source: R + 'B536911012/' },
      ],
      japanese_sources_summary: '公式サイト (ajyarimochi.com): 阿闍梨餅本舗 京菓子司 満月、取扱商品は京銘菓阿闍梨餅 (登録商標)、蜜漬京納言、京銘菓最中、眞菓満月。食べログ: 和菓子、左京区鞠小路通今出川上ル、9:00〜18:00、売り切れ次第閉店、一部の水曜休み、ベンチ数席、持ち帰り、阿闍梨餅の賞味期限は5日、カード不可、駐車場あり、スイーツ WEST 百名店 2018〜2020・2022、和菓子・甘味処 WEST 百名店 2023・2026。口コミ (2026年9〜10月、英語): 本店では温かい作りたての阿闍梨餅、5個入り約700円、期間限定の満月。',
      confidence: 'medium', sources: [SITE, TB, R + 'B126518416/', R + 'B525699214/', R + 'B536397372/', R + 'B536839900/', R + 'B536911012/', R + 'B537317580/', R + 'B538415867/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point and buy; ask for a warm one to eat on the spot.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市左京区鞠小路通今出川上ル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; official site live.' },
    pin_source: `Tabelog ${TB} (35.030062, 135.778054); the sourced address has no lot number, so GSI could not confirm a lot — pin stays on the Tabelog point; ChIJDZ2kzlsIAWARoehkRpr5unQ is 42 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536911012/'],
    price_note: 'No price list read; from an October 2026 review.', last_checked: TODAY, items: [
      it('阿闍梨餅', '', 'Ajari mochi, pack of 5', '¥700', 'Sweets', 'ask', 'ask', 'October 2026, about ¥700.', 'ajari_mochi_5'),
    ] }, {
    cuisine: '阿闍梨餅の京菓子司: しっとりもちもちの生地で甘さ控えめの粒餡を包む (公式サイト、2026年の口コミ)・5個入り約700円 (2026年10月)・ほかに蜜漬京納言、京銘菓最中、眞菓満月 (公式サイト)、期間限定の満月は硬めの生地に白餡 (2026年10月)・本店では温かい作りたての阿闍梨餅も (2026年9〜10月)',
    neighborhood: '百万遍近く、今出川通の北の鞠小路通。出町柳駅から徒歩7分',
    gf_detail: '要確認。原材料は読めていない。阿闍梨餅はもちもちの生地で餡を包む (2026年の口コミ)。',
    vegan_detail: '要確認。原材料は読めていない (2026年の口コミ)。',
    notes: '[和菓子・百万遍、阿闍梨餅の本店] 京都で指折りのお土産、阿闍梨餅の本店。柔らかくもちもちの生地で甘さ控えめの餡を包む。京都駅や百貨店でも買えるが、ここでは温かい作りたてを頼んでベンチで食べられ、2026年の口コミではもっちり感が違うという声。5個入り約700円、日持ちは5日。毎日9時〜18時 (一部の水曜休み)、売り切れ次第閉店、現金のみ。',
  });
}

save();
