// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 9.
//   + 錦 活鮨 Nishiki Katsuzushi (temari sushi by Nishiki Market; since 2025)                              [core]
//   + d'or (French bistro and crêpes south of Shijo, Gion; since 2021)                                     [core]
//   + 亀屋清永 Kameya Kiyonaga (wagashi house founded 1617 by Yasaka Shrine; seijō kankidan)                [notable]
//   + 恒屋伝助 Tsune Ya Densuke (à la carte kappo izakaya south of the Imperial Palace; bear hot pot)        [notable]
//   - 汸臼庵 京都錦本店 26015855 skipped (chain, 5 shops)
//   Taken in queue order on 2026-11-05 from `queue.mjs kyoto-missed next core 200` (lane ids 26042189, 26015855
//   skipped, 26036429) and `next notable 200` (26005883, 26003771). None of the four drafted is in data/kyoto.json:
//   grep by name (活鮨/Katsuzushi, d'or, 亀屋清永/Kiyonaga — only 亀屋良永, a different shop — 恒屋/Densuke) and address
//   (高宮町594, 博多町63, 祇園町南側534, 観音町84) found none. 錦 活鮨: no tie found to osaka_izumisano_katsu_zushi_grand_front
//   ("大阪泉佐野港 活鮨"), whose record names no operator or sister shop; a web search found no operator for 錦 活鮨.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-9');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26015855', '汸臼庵 京都錦本店: chain — the operator\'s site (houkyuuan.com) lists 5 shops: 京都錦本店, 有馬温泉店, 由布院店, 城崎温泉店 and 京都清水寺 森陶器館店');

// ================================================================ 錦 活鮨
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26042189/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00'], ['17:00', '21:00']);
  put({
    id: 'kyoto_nishiki_katsuzushi', name: '錦 活鮨 (Nishiki Katsuzushi)', category: 'OMNI',
    lat: 35.005243, lng: 135.76503, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Temari sushi with sauces and condiments, inari, tempura and red miso soup; no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the sets are fish temari sushi with tempura and miso soup; a few pieces (lotus root, yuba, inari) are plant-based but come in mixed sets (2026 reviews).',
    hours_raw: '11:00–15:00 (last order 15:00) and 17:00–21:00 (last order 20:00), every day (Tabelog). Bookings taken (Tabelog). 20 seats: 16 at the counter facing the kitchen, one table for four; non-smoking; English menu; cards only, no e-money or QR (Tabelog). Just off the Nishiki Market arcade; near Kyoto Kawaramachi and Karasuma Stn (Tabelog; April 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Just off Nishiki Market — 5 min from Kyoto Kawaramachi Stn',
    cuisine: 'Temari sushi — bite-size round sushi said to have been made for maiko — with seafood from Nishiki Market, and about 30 local sakes incl. a house sake from a Joyo brewery (Tabelog) · 12-piece temari sets, e.g. lotus root, yuba, mixed rice, sea bream, sea bass, flounder, cuttlefish, salmon, tuna, shrimp, inari and ikura, with 12 condiments to try; with three obanzai, three tempura or three sashimi, red miso soup, matcha parfait and tea; sushi lunch ¥3,600 (March–April 2026)',
    website: null, gmaps: gm('錦 活鮨 京都'), menu_url: null,
    notes: "[Temari sushi · Nishiki Market] A bright counter just off the Nishiki Market arcade, opened in 2025, serving temari sushi — small round pieces said to have been made for maiko — in sets of twelve with tempura or obanzai and miso soup (lunch about ¥3,600). Pretty and photogenic; reviewers split between delighted and underwhelmed by the taste and service. Open daily; English menu.",
    chef_bio: { chef_name: null, roles: ['Operator unnamed in the sources'], origin: null,
      background: 'Opened 23 January 2025 (Tabelog). Per the operator’s Tabelog text: a pioneer of the temari-sushi trend, with seafood from Nishiki Market and an original sake.',
      philosophy: null, specialty: '12-piece temari sushi set.',
      anecdotes: [
        { text: 'An April 2026 diner was surprised to find mostly Japanese customers rather than tourists, and noted the format may have changed recently.', source: R + 'B522845003/' },
        { text: 'A March 2026 evening diner found more than half the guests from overseas, the portions small, the taste unremarkable at over ¥3,000, and the staff unfriendly.', source: R + 'B525831319/' },
        { text: 'A May 2026 reviewer could not hear the softly spoken staff and noted dust on the counter bottles.', source: R + 'B527444006/' },
        { text: 'A family of four generations was completely satisfied — August 2026.', source: R + 'B534646120/' },
      ],
      japanese_sources_summary: '食べログ: 錦 活鮨、寿司・日本料理・天ぷら、中京区高宮町594-2、毎日 11:00〜15:00・17:00〜21:00 (L.O. 20:00)、予約可、20席 (カウンター16、4人掛けテーブル1)、禁煙、英語メニュー、カード可、電子マネー・QR 不可、2025年1月23日オープン、錦市場の魚介の手まり寿司、地酒約30種とオリジナルの日本酒。口コミ (2026年3〜8月、英語): 手まり寿司12貫、おばんざい・天ぷら・刺身の3種、赤だし、抹茶パフェ、寿司ランチ3,600円、12種の薬味、評価は分かれる。',
      confidence: 'medium', sources: [TB, R + 'B522845003/', R + 'B524942849/', R + 'B525106890/', R + 'B525126163/', R + 'B525831319/', R + 'B526047599/', R + 'B527444006/', R + 'B528998711/', R + 'B532089593/', R + 'B534646120/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); counter seats; cards only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区高宮町594-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (operator text); reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.005243, 135.765030); cross-checked: GSI 京都府京都市中京区高宮町594番地 (lot) 37m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525126163/'],
    price_note: 'No menu read; lunch price from a March 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Sushi lunch: 12 temari sushi with sides', '¥3,600', 'Lunch', 'ask', 'no', 'March 2026.', 'temari_lunch'),
    ] }, {
    cuisine: '舞妓さんのために作られたといわれる一口大の手まり寿司を、錦市場の魚介で。地酒約30種と Joyo の酒蔵のオリジナル日本酒 (食べログ)・手まり寿司12貫のセット (れんこん、湯葉、本日の混ぜご飯、鯛、すずき、ひらめ、いか、サーモン、まぐろ、海老、いなり、いくら)、12種の薬味。おばんざい3種、天ぷら3種、刺身3種のいずれか、赤だし、抹茶パフェ、お茶。寿司ランチ3,600円 (2026年3〜4月)',
    neighborhood: '錦市場のアーケードのすぐ脇。京都河原町駅から徒歩5分',
    gf_detail: '要確認。タレや薬味の手まり寿司、いなり、天ぷら、赤だし。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。セットは魚の手まり寿司に天ぷらと味噌汁。れんこん、湯葉、いなりなど植物性の貫もあるがセットに混ざる (2026年の口コミ)。',
    notes: '[手まり寿司・錦市場] 錦市場のアーケードのすぐ脇の明るいカウンターで、2025年開店。舞妓さんのために作られたといわれる小さな丸い手まり寿司を12貫、天ぷらやおばんざい、味噌汁とセットで (昼は3,600円ほど)。見た目はかわいらしく、味と接客の評価は分かれる。毎日営業、英語メニューあり。',
  });
}

// ================================================================ d'or
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26036429/'; const R = TB + 'dtlrvwlst/';
  const H = day(['14:00', '23:00']);
  put({
    id: 'kyoto_dor_gion', name: "d'or", category: 'MOM_AND_POP',
    lat: 35.001674, lng: 135.772717, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. French à la carte plus galettes and crêpes, canelés and spring rolls; no gluten information, and the galette flour is not described (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: charcuterie, duck, venison and lobster dishes, and crêpes with butter and cream (2025–26 reviews).',
    hours_raw: '14:00–23:00 every day; closing days not fixed (Tabelog). Bookings via TableCheck (September 2026); also used as a café for crêpes and galettes (May 2026). 8 counter seats facing a crêpe station, plus table seats upstairs by reservation; designated smoking area; cards, e-money and PayPay (Tabelog; 2026 reviews). In an alley south of Shijo near Dango-bashi, toward Miyagawa-cho; 5 min from Gion-Shijo Stn (Tabelog; 2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'An alley south of Shijo near Dango-bashi, toward Miyagawa-cho — 5 min from Gion-Shijo Stn',
    cuisine: 'French à la carte and courses with crêpes and galettes from a counter crêpe station; the chef has a pastry background (2025–26 reviews) · charcuterie platter, duck ham, crisp spring rolls, venison with crisp potatoes, a course with lobster · galette with blue cheese · crêpes: Calpis fermented butter and sugar; citron with lemon, butter and white pepper; seasonal strawberry or white peach; with fresh cream and house caramel · canelés (to take home with the course), bear-shaped monaka, house caramel ice cream · champagne by the glass and wines chosen to the dishes (2025–26 reviews)',
    website: null, gmaps: gm("d'or 京都 博多町"), menu_url: null,
    notes: "[French & crêpes · south of Shijo near Dango-bashi] A small French counter in a Gion back alley, opened in 2021, where a pastry-trained chef cooks bistro plates — charcuterie, duck ham, venison — and then makes crêpes and galettes at a station in front of you: lemon-butter-white-pepper citron, Calpis-butter sugar, seasonal fruit. Champagne by the glass; also good just for crêpes. Open 14:00–23:00; book on TableCheck.",
    chef_bio: { chef_name: 'Sakane', roles: ['Chef ("Chef Sakane" in an August 2026 review); pastry background (August 2026 review)'], origin: null,
      background: 'Opened 19 May 2021 (Tabelog). Per 2026 reviews: the chef comes from pastry, so the desserts are a strength, and a crêpe station sits at the counter.',
      philosophy: null, specialty: 'Crêpes and galettes; charcuterie.',
      anecdotes: [
        { text: 'A five-time visitor’s favourite is the crêpe with Calpis fermented butter and sugar — August 2026.', source: R + 'B494952302/' },
        { text: 'A December 2025 family birthday ended with canelés, a bear-shaped monaka and a strawberry crêpe, then a second, citron crêpe.', source: R + 'B521424362/' },
        { text: 'At the end of a March 2026 course the canelé was boxed to take home.', source: R + 'B524765442/' },
      ],
      japanese_sources_summary: '食べログ: d\'or、フレンチ、東山区博多町63-2、京阪祇園四条駅から徒歩5分、毎日 14:00〜23:00、不定休、予約可、8席、2階にテーブル席 (要予約)、分煙、カード・電子マネー・PayPay 可、2021年5月19日オープン。口コミ (2025年12月〜2026年9月、英語): パティシエ出身のシェフ、カウンターのクレープ台、シャルキュトリー、鴨のハム、春巻き、鹿、ブルーチーズのガレット、カルピス発酵バターのクレープ、シトロンのクレープ、カヌレ、自家製キャラメルアイス、グラスのシャンパーニュ、TableCheck で予約。',
      confidence: 'medium', sources: [TB, R + 'B494952302/', R + 'B521055193/', R + 'B521424362/', R + 'B524765442/', R + 'B526138644/', R + 'B529053024/', R + 'B530386466/', R + 'B534164418/', R + 'B535988706/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book on TableCheck; counter seats; drop in for crêpes in the afternoon.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区博多町63-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.001674, 135.772717); cross-checked: GSI 京都府京都市東山区博多町63番地 (lot) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B494952302/', R + 'B535988706/'],
    price_note: 'No menu or prices read; reviewers paid about ¥10,000–15,000 a head at dinner (2026).', last_checked: TODAY, items: [
      it('', '', 'Crêpe with Calpis fermented butter and sugar', '', 'Crêpes', 'no', 'no', '', 'calpis_butter_crepe'),
      it('', '', 'Citron crêpe (lemon, butter, white pepper)', '', 'Crêpes', 'no', 'no', '', 'citron_crepe'),
      it('', '', 'Galette with blue cheese', '', 'Galettes', 'ask', 'no', '', 'blue_cheese_galette'),
      it('', '', 'Charcuterie platter', '', 'Starters', 'ask', 'no', '', 'charcuterie'),
    ] }, {
    cuisine: 'フレンチのアラカルトとコースに、カウンターのクレープ台で焼くクレープとガレット。シェフはパティシエ出身 (2025〜26年の口コミ)・シャルキュトリーの盛り合わせ、鴨のハム、パリッとした春巻き、カリカリのポテトを添えた鹿、ロブスターを使ったコース・ブルーチーズのガレット・クレープ: カルピス発酵バターと砂糖、レモン・バター・白胡椒のシトロン、季節の苺や白桃、生クリームと自家製キャラメル・カヌレ (コースの最後に持ち帰り)、くま形の最中、自家製キャラメルアイス・グラスのシャンパーニュと料理に合わせたワイン (2025〜26年の口コミ)',
    neighborhood: '四条の南、団栗橋近くの路地、宮川町方面。祇園四条駅から徒歩5分',
    gf_detail: '要確認。フレンチのアラカルトのほか、ガレット、クレープ、カヌレ、春巻き。グルテンの情報はなく、ガレットの粉の説明もない (2025〜26年の口コミ)。',
    vegan_detail: '実際にはヴィーガン不可。シャルキュトリー、鴨、鹿、ロブスターの料理、バターとクリームのクレープ (2025〜26年の口コミ)。',
    notes: '[フレンチとクレープ・四条団栗橋近く] 祇園の路地にある小さなフレンチのカウンターで、2021年開店。パティシエ出身のシェフがシャルキュトリー、鴨のハム、鹿などのビストロ料理を作り、最後は目の前のクレープ台でクレープやガレットを焼く: レモン・バター・白胡椒のシトロン、カルピスバターと砂糖、季節の果物。グラスのシャンパーニュも。クレープだけでも利用できる。14時〜23時、TableCheck で予約。',
  });
}

// ================================================================ 亀屋清永
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26005883/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.kameyakiyonaga.co.jp/'; const HIST = SITE + 'history.html'; const STORE = SITE + 'store.html';
  const H = day(['08:30', '17:00']);
  put({
    id: 'kyoto_kameya_kiyonaga', name: '亀屋清永 (Kameya Kiyonaga)', category: 'OMNI',
    lat: 35.00304, lng: 135.776946, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The signature seijō kankidan is a rice- and wheat-flour dough fried in sesame oil (an October 2026 review), and the shop lists wheat flour among its main ingredients (official notice); other sweets are bean paste and chestnut, with no ingredient list published.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Bean-paste and fried sweets such as the seijō kankidan may suit, but no ingredient list is published, and the dorayaki and kintsuba are not described (official site; 2026 reviews).',
    hours_raw: '8:30–17:00; closed Wednesday and some other days — in November 2026 also the 12th and 19th (Thursdays) (official site). Tabelog gives 8:30–17:30. Takeaway shop; orders by phone or the online shop for delivery (official site). Cards, e-money and QR (Tabelog). On the south side of the stone steps below Yasaka Shrine — face the west gate and turn right without crossing Higashioji-dori (official site); 460 m from Gion-Shijo Stn (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Below the steps of Yasaka Shrine, Gion — 8 min from Gion-Shijo Stn',
    cuisine: 'Kyoto confectioner since 1617, supplier to many temples and shrines (official site) · seijō kankidan, a Tang-style "karakudamono" sweet from the Nara period: a drawstring-pouch shape of rice- and wheat-flour dough around bean paste scented with seven spices, fried in sesame oil (¥750 for one, ¥1,620 for two in October 2026) · buto (餢飳, a fried sweet) · Kyoto kintsuba 吟角 (¥518), 栗くり (¥205), dorayaki, seasonal jō-namagashi such as 山苞 (official site; 2026 reviews)',
    website: SITE, gmaps: gm('亀屋清永 祇園'), menu_url: SITE + 'year01.html',
    notes: "[Wagashi · Gion, a confectioner since 1617] A Kyoto sweets house founded in 1617, now facing Yasaka Shrine's west gate, that has supplied temples and shrines for centuries. Its signature, the seijō kankidan, is a Nara-period Tang sweet — a hard, pouch-shaped dough of rice and wheat flour around spiced bean paste, fried in sesame oil (¥750 each). Also kintsuba, chestnut sweets and seasonal fresh sweets. Closed Wednesday and some Thursdays.",
    chef_bio: { chef_name: null, roles: ['Operator: 亀屋清永 (company); no person named'], origin: null,
      background: 'Per the official history page: founded, by tradition, in 1617 (Genna 3), living at Teramachi-Sanjo with the trade name 亀屋冶兵衛 before taking the name 亀屋清永; listed in 1842 among the confectioners supplying the Imperial Palace; the seijō kankidan descends from the Tang confections brought by envoys in the Nara period and is called the root of Kyoto sweets. Tabelog Japanese-sweets WEST "Tabelog 100" 2026. In October–November 2026 the shop sold its seijō kankidan and buto at the 78th Shōsōin exhibition in Nara (official site).',
      philosophy: null, specialty: 'Seijō kankidan; buto.',
      anecdotes: [
        { text: 'Plaques inside show supply to Chion-in, Yasaka Shrine, Enryaku-ji and Nanzen-ji — October 2026.', source: R + 'B537976500/' },
        { text: 'The staff suggested a freshly made dorayaki alongside the kankidan — October 2026.', source: R + 'B536688837/' },
        { text: 'At 16:00 on a Saturday the choice of fresh sweets was limited — October 2026.', source: R + 'B536800544/' },
      ],
      japanese_sources_summary: '公式サイト (kameyakiyonaga.co.jp): 京御菓子司 亀屋清永、創業は元和3年 (1617年) と伝わる、寺町三条北入に住み当時の屋号は亀屋冶兵衛、のちに亀屋清永、天保13年 (1842年) の御所巻物、清浄歓喜団は奈良時代に遣唐使が伝えた唐菓子で京菓子のルーツ、多くの寺社仏閣の御用達、本店は八坂神社西楼門の前 (東山区祇園石段下南)、8:30〜17:00、毎週水曜定休 (その他不定休、2026年11月は4・11・12・18・19・25日)、清浄歓喜団と餢飳、京きんつば「吟角」、栗くり、季節の和菓子、オンラインショップ、主原料は砂糖・小豆・小麦粉・ごま油 (2024年の価格改定のお知らせ)、第78回正倉院展での特別販売。食べログ: 和菓子、祇園石段下南側534、月火木〜日 8:30〜17:30、水曜休み、カード・電子マネー・QR 可、和菓子・甘味処 WEST 百名店 2026。口コミ (2026年9〜10月、英語): 清浄歓喜団1個750円・2個1,620円、吟角518円、栗くり205円、どら焼き、寺社の御用達の札。',
      confidence: 'medium', sources: [TB, SITE, HIST, STORE, R + 'B535719484/', R + 'B536342084/', R + 'B536468375/', R + 'B536656772/', R + 'B536688837/', R + 'B536748466/', R + 'B536800544/', R + 'B537218306/', R + 'B537976500/', R + 'B538409390/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small shop counter; staff suggest sweets; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園石段下南側534',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (October 2026 notice) and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003040, 135.776946); cross-checked: GSI 京都府京都市東山区祇園町南側534番地 (lot) 45m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538409390/', R + 'B537976500/', R + 'B536800544/'],
    price_note: 'No price list read; prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('清浄歓喜団', '', 'Seijō kankidan, one piece', '¥750', 'Ancient sweets', 'no', 'ask', 'October 2026; two for ¥1,620.', 'seijo_kankidan'),
      it('吟角', '', 'Kyoto kintsuba "Ginkaku"', '¥518', 'Wagashi', 'ask', 'ask', 'October 2026.', 'ginkaku'),
      it('栗くり', '', 'Kuri kuri (chestnut sweet)', '¥205', 'Wagashi', 'ask', 'ask', 'October 2026.', 'kuri_kuri'),
      it('餢飳', '', 'Buto (fried sweet)', '', 'Ancient sweets', 'ask', 'ask', '', 'buso'),
    ] }, {
    cuisine: '1617年創業の京御菓子司、多くの寺社の御用達 (公式サイト)・清浄歓喜団: 奈良時代に伝わった唐菓子。米粉と小麦粉の生地で七種の香りのこしあんを巾着形に包み、ごま油で揚げる (2026年10月 1個750円、2個1,620円)・餢飳・京きんつば 吟角 (518円)、栗くり (205円)、どら焼き、山苞など季節の上生菓子 (公式サイト、2026年の口コミ)',
    neighborhood: '八坂神社の石段下、祇園。祇園四条駅から徒歩8分',
    gf_detail: '要確認。看板の清浄歓喜団は米粉と小麦粉の生地をごま油で揚げたもの (2026年10月の口コミ)、主原料に小麦粉を挙げている (公式のお知らせ)。ほかの菓子はあんや栗で、原材料の一覧は公開されていない。',
    vegan_detail: '要確認。清浄歓喜団などのあんや揚げ菓子は合うかもしれないが、原材料の一覧は公開されておらず、どら焼きやきんつばの説明もない (公式サイト、2026年の口コミ)。',
    notes: '[和菓子・祇園、1617年創業の菓子司] 1617年創業と伝わる京菓子の店で、今は八坂神社の西楼門の前にあり、長く寺社に菓子を納めてきた。看板の清浄歓喜団は奈良時代の唐菓子で、米粉と小麦粉の固い巾着形の生地に香りのこしあんを包み、ごま油で揚げる (1個750円)。きんつば、栗の菓子、季節の上生菓子も。水曜と一部の木曜休み。',
  });
}

// ================================================================ 恒屋伝助
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26003771/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://tsuneyadensuke.com/';
  const H = day(['17:30', '22:30']);
  put({
    id: 'kyoto_tsuneya_densuke', name: '恒屋伝助 (Tsune Ya Densuke)', category: 'OMNI',
    lat: 35.013573, lng: 135.763208, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Over a hundred à la carte dishes — sashimi, grilled fish, saba sushi, tempura, fried conger and whale, miso dengaku, bear hot pot; no gluten information (official site; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: the menu centres on seasonal fish, wagyu and bear, with dashi-based cooking (official site; 2026 reviews).',
    hours_raw: 'Monday–Saturday 17:30–22:30; closed Sunday and twice more a month — in November 2026 the Thursdays and Sundays plus the 23rd (official site). Tabelog gives 17:00–22:30, closed Thursday and Sunday. Bookings by phone; popular, so book early (official site; September 2026). The menu shows no prices; bills about ¥10,000–20,000 a head (2026 reviews). No children under junior-high age (Tabelog). 14 seats: 5 at the counter, tables and one private room with a sunken kotatsu; non-smoking; JCB, AMEX and Diners only (Tabelog; April 2026). On the corner of Sakaimachi and Nijo; 7 min from Marutamachi or Karasuma Oike Stn (official site).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sakaimachi-Nijo corner, south of the Imperial Palace — 7 min from Karasuma Oike Stn',
    cuisine: 'Kappo izakaya with no courses: over a hundred à la carte dishes of seasonal fish and vegetables, traditional kappo and creative plates (official site) · the signature sashimi platter (bone crackers and fish-bone red miso soup sometimes follow) · grilled shirokuji (white amadai), charcoal-grilled wagyu, thick saba sushi (to take away with a day’s notice), bear hot pot, bear stewed with sansho in spring (official site; 2026 reviews) · hamo shabu with matsutake and porridge, fried conger, fried whale, Kamo eggplant dengaku, white shrimp, gratin, noodles to finish · seasonal sake (2026 reviews)',
    website: SITE, gmaps: gm('恒屋伝助 京都'), menu_url: SITE,
    notes: "[Kappo izakaya · south of the Imperial Palace, a hundred dishes and bear hot pot] A small izakaya on a quiet corner near the palace, open about 25 years, with no set courses: pick from over a hundred seasonal dishes — a famous sashimi platter, shirokuji, thick saba sushi, hamo shabu, and its rare bear hot pot. No prices on the menu; expect ¥10,000–20,000 with sake. Book ahead. No children under junior-high age. Closed Sunday and some Thursdays.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; the official site says the owner chooses the ingredients)'], origin: null,
      background: 'Per the official site: in its 25th year, with the owner choosing seasonal fish and vegetables; all dishes à la carte, from traditional kappo to creative cooking; the website opened in June 2025. Tabelog Izakaya WEST "Tabelog 100" 2024.',
      philosophy: 'Per the official site: "自分の好きなものを好きなだけ食べていただきたい" — eat what you like, as much as you like.',
      specialty: 'Sashimi platter; bear hot pot; saba sushi.',
      anecdotes: [
        { text: 'Wanting sake, a July 2026 guest had the sashimi platter cut from ten kinds to five by the owner; the bill came to about ¥15,000 as expected.', source: R + 'B533056421/' },
        { text: 'After the sashimi, a fish-bone cracker and red miso soup from the bones arrived unasked — September 2026.', source: R + 'B535583956/' },
        { text: 'A September 2026 diner was nervous at the counter because the menu shows no prices.', source: R + 'B536584257/' },
      ],
      japanese_sources_summary: '公式サイト (tsuneyadensuke.com): 京都の本格割烹居酒屋 恒屋伝助、創業25年、店主が四季の魚介や野菜を厳選、コースではなく全て一品料理、百を超す逸品、白ぐじ焼、和牛炭火焼き、鯖寿司 (持ち帰りは前日までに予約)、熊鍋、造り盛り合わせ、中京区観音町84 堺町二条の角、丸太町駅・烏丸御池駅から徒歩約7分、月〜土 17:30〜22:30、日曜定休、月二回不定休、2026年11月の休み (1・5・8・12・15・19・23・26・29日)。食べログ: 居酒屋・海鮮・日本料理、月火水金土 17:00〜22:30、木・日休み、中学生未満入店不可、14席 (カウンター5、テーブル10)、個室、禁煙、カード (JCB・AMEX・Diners)、居酒屋 WEST 百名店 2024。口コミ (2026年4〜9月、英語): 値段の書かれていないメニュー、刺身盛り合わせ、熊肉と花山椒、鱧しゃぶと松茸、鯨の唐揚げ、賀茂なすの田楽、鯖寿司。',
      confidence: 'medium', sources: [TB, SITE, R + 'B369276232/', R + 'B489873367/', R + 'B526735440/', R + 'B533045890/', R + 'B533048266/', R + 'B533056421/', R + 'B535376320/', R + 'B535583956/', R + 'B536511719/', R + 'B536584257/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No prices on the menu, so ask; book by phone; JCB, AMEX or Diners only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区観音町84',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (November 2026 notice) and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.013573, 135.763208); cross-checked: GSI 京都府京都市中京区観音町84番地 (lot) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [SITE],
    price_note: 'The menu shows no prices; reviewers paid about ¥10,000–20,000 a head (2026).', last_checked: TODAY, items: [
      it('造り盛り合わせ', '', 'Seasonal sashimi platter', '', 'Sashimi', 'ask', 'no', '', 'sashimi_platter'),
      it('熊鍋', '', 'Bear hot pot', '', 'Hot pot', 'ask', 'no', '', 'kuma_nabe'),
      it('鯖寿司', '', 'Saba sushi', '', 'À la carte', 'ask', 'no', 'Takeaway with a day’s notice.', 'saba_zushi'),
      it('白くじ焼', '', 'Grilled shirokuji (white amadai)', '', 'Grilled', 'ask', 'no', '', 'shirokuji_yaki'),
    ] }, {
    cuisine: 'コースのない割烹居酒屋。旬の魚介と野菜の一品料理が百種以上、伝統の割烹料理と創作料理 (公式サイト)・看板の造り盛り合わせ (骨せんべいやあらの赤だしが出ることも)・白ぐじ焼、和牛の炭火焼き、肉厚の鯖寿司 (持ち帰りは前日までに予約)、熊鍋、春は熊肉と花山椒の煮物 (公式サイト、2026年の口コミ)・鱧しゃぶと松茸、締めの雑炊、穴子の唐揚げ、鯨の唐揚げ、賀茂なすの田楽、白えび、グラタン、締めの麺・季節の日本酒 (2026年の口コミ)',
    neighborhood: '御所の南、堺町二条の角。烏丸御池駅から徒歩7分',
    gf_detail: '要確認。百を超す一品料理: 刺身、焼き魚、鯖寿司、天ぷら、穴子や鯨の唐揚げ、味噌の田楽、熊鍋。グルテンの情報はない (公式サイト、2026年の口コミ)。',
    vegan_detail: '実際にはヴィーガン不可。旬の魚、和牛、熊肉と出汁の料理が中心 (公式サイト、2026年の口コミ)。',
    notes: '[割烹居酒屋・御所南、百の一品と熊鍋] 御所に近い静かな角にある小さな居酒屋で、創業25年。コースはなく、百を超す旬の一品から選ぶ: 名物の刺身盛り合わせ、白ぐじ、肉厚の鯖寿司、鱧しゃぶ、珍しい熊鍋。メニューに値段はなく、酒を飲んで1人1万〜2万円ほど。予約を。中学生未満は入店不可。日曜と一部の木曜休み。',
  });
}

save();
