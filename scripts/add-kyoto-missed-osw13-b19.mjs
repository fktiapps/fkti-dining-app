// Kyoto "what did we miss" pass (kyoto-missed, notable phase) — lane osw13, batch 19.
//   + 喫茶葦島 Kissa Ashijima (fifth-floor house-roast coffee room at Sanjo-Kawaramachi; since 2010)
//   + en boca Kyoto エンボカ 京都 (wood-oven vegetable pizza in a machiya; Kyoto branch of a Karuizawa original; since 2010)
//   + 呑小路 やま岸 Nominokoji Yamagishi (山岸隆博's open-kitchen izakaya of the Kyoto Yamagishi group; since 2022)
//   + ルーデンス LUDENS (medicinal-herb Italian in an old townhouse near Nijo; since 2017)
//   - passed over ベンジャミンステーキハウス 京都 26031586 (not fetched or skipped here; see the batch report).
//   Taken from `queue.mjs kyoto-missed next notable 80` on 2026-11-02 (the first five, minus Benjamin).
//   None of the four is in data/kyoto.json: grep by name (葦島/Ashijima, エンボカ/en boca, やま岸/Yamagishi,
//   ルーデンス/Ludens) and address (大黒町37 文明堂ビル, 池須町406, 下白山町293-3, 夷町560-8) found nothing.
//   Group checks (working line, 2026-11-02):
//     - Ashijima: 喫茶葦島 plus 葦島珈琲 (Takashimaya café), 葦 (takeaway) and das (café) — four outlets (official site).
//     - en boca: Kyoto branch of a Karuizawa original; a Yoyogi-Uehara branch has closed (2026 reviews).
//     - 呑小路 やま岸: two same-concept shops (Kyoto, Ginza) in a group of eight different concepts, one of which,
//       焼肉やまちゃん, is in data as its own sister concept (official shop list). Small groups: draft one each.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-19');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 喫茶葦島
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26015997/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://ashijimacoffee.com/';
  const WD = day(['12:00', '21:00']); const TUE = day(['12:00', '17:00']); const WE = day(['11:00', '21:00']);
  put({
    id: 'kyoto_kissa_ashijima', name: '喫茶葦島 (Kissa Ashijima)', category: 'OMNI',
    lat: 35.008671, lng: 135.769321, cuisine_type: 'kissaten',
    gf_confidence: 'options', gf_label: 'Some GF options', gf_detail: 'The Sanjo cheesecake is made with rice flour and described as gluten-free (October 2026 review), and Tabelog lists gluten-free options and allergy information; staff ask about allergies when you order (October 2026). Other cakes and the curry are not described — ask.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee and tea suit; the cakes are dairy cheesecakes and chocolate cakes, and the curry has meat (2026 reviews).',
    hours_raw: 'Mon, Wed, Thu, Fri 12:00–21:00 (last order 20:30); Tue 12:00–17:00 (last order 16:30); Sat and Sun 11:00–21:00 (last order 20:30) (official site; Tabelog). No reservations (official site). 20 seats: a counter of 8 and two tables of 6 (Tabelog). Non-smoking; wheelchair accessible (Tabelog). Cards, QUICPay, PayPay and Alipay (Tabelog). Decaf available; the only food is curry (Tabelog). Fifth floor of the Bunmeido building at the south-east corner of Sanjo-Kawaramachi; 4 min from Kyoto Shiyakusho-mae Stn (official site; Tabelog). Opened 15 May 2010 (Tabelog).',
    hours: { 0: WD, 1: TUE, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sanjo-Kawaramachi, fifth floor of the 文明堂ビル on the south-east corner — 4 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Coffee roasted in-house over direct flame in small batches, brewed cup by cup, with cakes chosen to pair (official site; 2026 reviews) · examples: Ashijima Blend ¥880; the house medium-roast "Hyakunen Coffee"; Mocha G1; Mandheling Aceh ¥1,200; iced café latte · cakes ¥750: the gluten-free Sanjo cheesecake of rice flour, a half-frozen Asamiya sencha cheesecake, cinnamon chocolate cake, matcha cheesecake · curry, the only meal · iced milk tea, decaf · diners spend about ¥1,000–1,999',
    website: SITE, gmaps: gm('喫茶葦島'), menu_url: null,
    notes: "[Kissaten · Sanjo-Kawaramachi, a calm coffee room above the crowds] Take the lift to the fifth floor of a busy Sanjo-dori building and step into a white, jazz-playing room hung with wire art made for the café by Koichiro Tokumochi. The coffee is roasted in-house over direct flame and brewed cup by cup: the Ashijima Blend or the house medium-roast \"Hyakunen Coffee\", with a cake chosen to match — the rice-flour Sanjo cheesecake is gluten-free. Staff ask about allergies and serve with bar-like polish. Coffee and cake about ¥1,600; no reservations; open daily.",
    chef_bio: { chef_name: null, roles: ['Owner-roaster; not named in the sources read'], origin: null,
      background: 'Per the official site: coffee roasted in small batches on a direct-flame roaster to suit every taste, from bitter to acidic to strong; the group runs 喫茶葦島, 葦島珈琲 (a café in Kyoto Takashimaya S.C.), the takeaway shop 葦 and the café das, and sells beans and cheesecakes online. An October 2026 review notes wire art by Koichiro Tokumochi made for the café. Tabelog Kissaten "Tabelog 100" 2021, 2022, 2026; opened 15 May 2010.',
      philosophy: 'Coffee that pursues the beans\' own flavour, in a calming space (official site).', specialty: 'House-roast coffee; Sanjo cheesecake.',
      anecdotes: [
        { text: '"Only high-quality domestic ingredients, including rice flour, are used to carefully express the goodness of the materials. It is gluten-free." — October 2026, the Sanjo cheesecake.', source: R + 'B528638826/' },
        { text: '"The staff kindly checked for any allergies." — October 2026.', source: R + 'B538101663/' },
        { text: '"Although Sanjo is a lively street, once you reach the 5th floor, a tranquil space unfolds" — September 2026.', source: R + 'B536297445/' },
      ],
      japanese_sources_summary: '公式サイト (ashijimacoffee.com): 葦島珈琲、自家焙煎珈琲と厳選スイーツ、直火式焙煎機で少量ずつ焙煎、喫茶葦島・葦島珈琲 (京都髙島屋 S.C.)・葦 (テイクアウト専門)・das (カフェ)、喫茶葦島は平日12:00〜21:00 (L.O.20:30)、火曜12:00〜17:00 (L.O.16:30)、土日11:00〜21:00 (L.O.20:30)、予約不可、中京区大黒町37 文明堂ビル5階。食べログ: 喫茶店・カフェ・ケーキ、20席 (カウンター8、テーブル6×2)、禁煙、車椅子可、カード・QUICPay・PayPay・Alipay 可、アレルギー表示・グルテンフリー対応、デカフェあり、食事はカレーのみ、2010年5月15日オープン、喫茶店百名店 2021・2022・2026。口コミ (2026年9〜10月、英語): 米粉のグルテンフリーの Sanjo cheesecake、Hyakunen Coffee、店のためのワイヤーアート、アレルギーの確認。',
      confidence: 'medium', sources: [SITE, TB, R + 'B444247607/', R + 'B485301994/', R + 'B528638826/', R + 'B535839572/', R + 'B536297445/', R + 'B536572427/', R + 'B537186221/', R + 'B537243299/', R + 'B538101663/', R + 'B538223940/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the table; staff ask about allergies.' },
    safety: { ...SAFETY0,
      gf_cross_contamination: [{ text: 'No source describes how the gluten-free cheesecake is made or stored alongside the wheat cakes; the curry is not described. Celiac diners should ask.', source: R + 'B528638826/', verified: TODAY }],
      staff_allergy_handling: [{ text: 'Staff checked for allergies when taking the order (October 2026); Tabelog lists allergy information and gluten-free options.', source: R + 'B538101663/', verified: TODAY }],
      positives: [{ text: 'The Sanjo cheesecake is made with domestic ingredients including rice flour and is described as gluten-free (October 2026).', source: R + 'B528638826/', verified: TODAY }] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三条通河原町東入大黒町37 文明堂ビル 5F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with current hours; reviews dated through October 2026; Kissaten Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.008671, 135.769321); cross-checked: GSI 京都府京都市中京区大黒町37番地 (lot) 38m; vm_yasai_dining_kusushi 24 m and mp_rokuyosha_chikaten_rokuy 26 m away — not stacked; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538101663/', R + 'B528638826/'],
    price_note: 'No price list read; prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ashijima Blend coffee', '¥880', 'Coffee', '', '', 'October 2026.', 'blend'),
      it('', '', 'Mandheling', '¥1,200', 'Coffee', '', '', 'October 2026.', 'mandheling'),
      it('', '', 'Sanjo cheesecake (rice flour, gluten-free)', '¥750', 'Cakes', 'gf', 'no', 'October 2026; described as gluten-free.', 'sanjo_cheesecake'),
      it('', '', 'Cinnamon chocolate cake', '¥750', 'Cakes', 'ask', 'ask', 'October 2026.', 'cinnamon_choc'),
    ] }, {
    cuisine: '直火式の焙煎機で少量ずつ自家焙煎し、一杯ずつ淹れる珈琲と、合わせて選ぶケーキ (公式サイト、2026年の口コミ)・例: Ashijima Blend 880円、開店以来の中煎りの「Hyakunen Coffee」、モカ G1、マンデリン・アチェ1,200円、アイスカフェラテ・ケーキ750円: 米粉のグルテンフリーの Sanjo cheesecake、半解凍の Asamiya の煎茶のチーズケーキ、シナモンショコラ、抹茶のチーズケーキ・食事はカレーだけ・アイスミルクティー、デカフェ・予算は約1,000〜1,999円',
    neighborhood: '三条河原町、交差点の南東角の文明堂ビルの5階。京都市役所前駅から徒歩4分',
    gf_detail: 'Sanjo cheesecake は米粉で作るグルテンフリー (2026年10月の口コミ)、食べログにもグルテンフリー対応とアレルギー表示あり。注文時にアレルギーを確認してくれる (2026年10月)。ほかのケーキやカレーは説明がないので要確認。',
    vegan_detail: '要確認。ブラックの珈琲や紅茶は合う。ケーキは乳製品のチーズケーキやショコラ、カレーには肉 (2026年の口コミ)。',
    notes: '[喫茶・三条河原町、喧騒の上の静かな珈琲の部屋] にぎやかな三条通のビルをエレベーターで5階へ上がると、ジャズの流れる白い空間に、店のために作られた Koichiro Tokumochi のワイヤーアート。直火で自家焙煎し一杯ずつ淹れる珈琲は、Ashijima Blend や中煎りの「Hyakunen Coffee」を、合わせて選ぶケーキと。米粉の Sanjo cheesecake はグルテンフリー。アレルギーを確認してくれ、接客はバーのように洗練。珈琲とケーキで1,600円ほど。予約不可、毎日営業。',
  });
}

// ================================================================ en boca Kyoto
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26017525/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.enboca.jp/';
  const D = day(['17:00', '22:00']); const L = day(['11:30', '15:00']);
  put({
    id: 'kyoto_en_boca', name: 'en boca Kyoto (エンボカ 京都)', category: 'OMNI',
    lat: 35.007076, lng: 135.755124, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pizza is the focus (wheat dough), but the oven-roasted vegetable platters, prosciutto and salads are popular starters (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Oven-roasted vegetables are a signature, and the lotus-root pizza with pesto is made without cheese (September 2026); pesto may contain cheese, so check.',
    hours_raw: 'Dinner 17:00–22:00 (last food order 21:00) on Mon, Thu and Fri; lunch 11:30–15:00 (last food order 14:00) on Sat and Sun; closed Tuesday and Wednesday (Tabelog). Reservations recommended; call before coming without one; same-day cancellation ¥3,000 (Tabelog). Lunch courses for two or more, à la carte also possible (September–October 2026). One drink per person at dinner (Tabelog). 6 counter seats in front of the wood oven and 27 at tables; private hire for 20–50 (Tabelog). Non-smoking (Tabelog). Cards, IC cards and PayPay (Tabelog). 7 min from Karasuma Stn (Tabelog). Opened 12 December 2010 (Tabelog).',
    hours: { 0: D, 3: D, 4: D, 5: L, 6: L }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishinotoin-dori south of Rokkaku, a high-ceilinged renovated machiya — 7 min from Karasuma Stn',
    cuisine: 'Wood-oven pizza topped with Japanese seasonal vegetables, and oven-roasted vegetable platters, in a renovated machiya (2026 reviews) · the popular lotus-root pizza with pesto; beef tendon and burdock; Manganji pepper and chirimen sansho; eggplant; autumn salmon and sanma; Margherita; quattro formaggi; dessert pizza; half-and-half to share (2026 reviews) · roast vegetables such as pumpkin, Kamiyama shiitake, zucchini, eggplant and sweet potato; Jamón Serrano and Iberico; octopus terrine; caprese · lunch course of appetisers, roast vegetables, soup, pizza and dessert (October 2026) · wine, sake, cocktails · diners spend about ¥3,000–7,999',
    website: SITE, gmaps: gm('エンボカ 京都'), menu_url: null,
    notes: "[Pizza · Karasuma, vegetable pizza from a wood oven] The Kyoto branch of a pizzeria from Karuizawa, in a high-ceilinged, softly lit renovated townhouse. Sit at the counter in front of the wood-fired oven and watch dough stretched and slid in a metre away. Start with the platter of oven-roasted vegetables — the zucchini drips juice — then share half-and-half pizzas: the cult lotus root with pesto (no cheese), beef tendon and burdock, or Manganji pepper with chirimen sansho. Lunch at weekends, dinner Monday, Thursday and Friday; book ahead. About ¥4,000–6,000 a head.",
    chef_bio: { chef_name: null, roles: ['Branch of en boca; no person is named in the sources'], origin: null,
      background: 'Per 2026 reviews: the Kyoto branch of a pizzeria whose main shop is in Karuizawa; a Yoyogi-Uehara branch in Tokyo has closed; set in a renovated machiya with a wood-fired oven. Tabelog Pizza "Tabelog 100" 2017–2019, 2021, 2023, 2025; opened 12 December 2010.',
      philosophy: null, specialty: 'Lotus-root pizza; oven-roasted vegetables.',
      anecdotes: [
        { text: '"Even though it was a pizza without cheese, the dough was surprisingly tasty" — September 2026, the lotus-root half.', source: R + 'B536144262/' },
        { text: '"Right in front of me, the wood crackles and burns, and I watched as they added logs to the oven" — October 2026, at the counter.', source: R + 'B536777815/' },
        { text: '"It is the Kyoto branch of a place that has its main store in Karuizawa." — September 2026.', source: R + 'B536240128/' },
      ],
      japanese_sources_summary: '食べログ: エンボカ 京都 (en boca Kyoto)、ピザ・野菜料理・肉料理、中京区西洞院六角下ル池須町406、烏丸駅から徒歩7分、月・木・金 17:00〜22:00 (L.O.21:00)、土・日 11:30〜15:00 (L.O.14:00)、火・水休み、予約可 (当日キャンセルは3,000円)、予約なしの場合は電話を、ディナーは1ドリンク制、カウンター6席・テーブル27席、貸切20〜50名、カード・交通系 IC・PayPay 可、2010年12月12日オープン、ピザ百名店 2017〜2019・2021・2023・2025。口コミ (2026年8〜10月、英語): 軽井沢が本店、町家を改装、薪窯、蓮根のピザ、窯焼き野菜、ハーフ&ハーフ。',
      confidence: 'medium', sources: [TB, R + 'B534686590/', R + 'B535187674/', R + 'B535857412/', R + 'B536084702/', R + 'B536144262/', R + 'B536215557/', R + 'B536240128/', R + 'B536729286/', R + 'B536777815/', R + 'B538109090/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'À la carte or a lunch course; half-and-half pizzas to share.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区西洞院六角下ル池須町406',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007076, 135.755124); cross-checked: GSI 京都府京都市中京区池須町406番地 (lot) 38m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No price list read; diners spend about ¥3,000–7,999 (2026 reviews).', last_checked: TODAY, items: [
      it('', '', 'Lotus-root pizza with pesto (no cheese)', '', 'Pizza', 'no', 'ask', '2026 reviews.', 'lotus_pizza'),
      it('', '', 'Oven-roasted vegetable platter', '', 'Starters', 'ask', 'ask', '2026 reviews.', 'roast_veg'),
      it('', '', 'Lunch course (weekends, two or more)', '', 'Course', 'ask', 'ask', 'September–October 2026.', 'lunch_course'),
    ] }, {
    cuisine: '改装した町家で、日本の旬の野菜をのせた薪窯のピザと窯焼き野菜の盛り合わせ (2026年の口コミ)・人気の蓮根とジェノベーゼのピザ、牛すじとごぼう、万願寺唐辛子とちりめん山椒、茄子、秋鮭とさんま、マルゲリータ、クアトロフォルマッジ、デザートピザ、ハーフ&ハーフで分けて (2026年の口コミ)・かぼちゃ、Kamiyama の椎茸、ズッキーニ、茄子、さつまいもなどの窯焼き野菜、ハモン・セラーノとイベリコ、たこのテリーヌ、カプレーゼ・前菜、窯焼き野菜、スープ、ピザ、デザートのランチコース (2026年10月)・ワイン、日本酒、カクテル・予算は約3,000〜7,999円',
    neighborhood: '六角の南の西洞院通、天井の高い改装町家。烏丸駅から徒歩7分',
    gf_detail: '要確認。中心は小麦の生地のピザだが、窯焼き野菜の盛り合わせ、生ハム、サラダも人気 (2026年の口コミ)。',
    vegan_detail: '要確認。窯焼き野菜が名物で、蓮根とジェノベーゼのピザはチーズなし (2026年9月)。ジェノベーゼにチーズが入る場合もあるので確認を。',
    notes: '[ピザ・烏丸、薪窯の野菜のピザ] 軽井沢が本店のピッツェリアの京都店。天井の高い、ほの暗い改装町家。薪窯の前のカウンターなら、1メートル先で生地をのばして窯に入れるのが見える。まず窯焼き野菜の盛り合わせ (ズッキーニは汁があふれる)、それからハーフ&ハーフのピザを分けて: 名物の蓮根とジェノベーゼ (チーズなし)、牛すじとごぼう、万願寺唐辛子とちりめん山椒。週末は昼、月・木・金は夜。予約を。1人4,000〜6,000円ほど。',
  });
}

// ================================================================ 呑小路 やま岸
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26037932/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.tominokoji-yamagishi.com/shoplist/nominokojiyamagishi/';
  put({
    id: 'kyoto_nominokoji_yamagishi', name: '呑小路 やま岸 (Nominokoji Yamagishi)', category: 'MOM_AND_POP',
    lat: 35.009745, lng: 135.765626, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A Japanese izakaya with soy- and miso-based dishes, fried items and shumai; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi, fish and meat throughout (2026 reviews).',
    hours_raw: 'From 16:00, Mon, Tue, Thu–Sat and holidays, last food order 23:30 (Tabelog says 16:00–23:30); Sunday is listed with a last food order of 23:00 but no opening time; closed Wednesday and irregularly (Tabelog). Because Sunday has no opening time and the closing time after last order is not given, no hours are stored. Reservations accepted, by phone or online; more than an hour late counts as a cancellation (Tabelog). A course of four omakase dishes for ¥8,800, then à la carte; the menu shows no prices (October 2026). 12 seats: a counter of 10 and a table for 2 (Tabelog). Non-smoking (Tabelog). Cards (Tabelog). 5 min from Kyoto Shiyakusho-mae Stn (Tabelog). Opened 28 July 2022 (Tabelog).',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Near Kyoto City Hall, south of Oike — 5 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'The casual, open-kitchen izakaya of Tomikoji Yamagishi: ingredients chosen by 山岸隆博, cooked with kappo technique (official site) · start with four omakase dishes (¥8,800, October 2026), then order freely: appetiser, sashimi, a main and a vegetable dish · 2026: steamed lotus root with white miso; sea bream and tuna; Densuke anago; ikura rice; grilled Spanish mackerel with miso; white sesame tofu with figs and chestnuts; fried Matsutake; oden; mackerel sushi; shrimp mayonnaise; shumai; simmered fried tofu with Kujo negi · wide sake list and wine · diners spend about ¥10,000–19,999',
    website: SITE, gmaps: gm('呑小路 やま岸'), menu_url: null,
    notes: "[Izakaya · City Hall, the casual side of a celebrated kappo] The open-kitchen izakaya of Kyoto's Tomikoji Yamagishi: ten counter seats where you start with four omakase dishes (¥8,800) and then order whatever you like — grilled Densuke anago, ikura rice, Spanish mackerel with miso, fried Matsutake, autumn oden, shumai. The sake list is long and the staff will scale portions for a light appetite. Many guests are from overseas. The menu shows no prices, so ask before ordering wine by the glass. About ¥10,000–19,999 with drinks; open late; closed Wednesdays.",
    chef_bio: { chef_name: '山岸隆博 (owner of the Kyoto Yamagishi group; official site; no romaji in a source)', roles: ['Owner of the group; selects the ingredients (official site)'], origin: null,
      background: 'Per the official site: "a gourmet izakaya produced by Tomikoji Yamagishi", à la carte, with real ingredients chosen by 山岸隆博 and craftsmen\'s technique in an open kitchen; the group lists 富小路やま岸, 呑小路やま岸, 二条やま岸, 祇園やま岸, 焼肉やまちゃん (kyoto_yakiniku_yamachan) and 饗宴 in Kyoto, and 銀座 呑小路やま岸 and 富小路やま岸 麻布台ヒルズ in Tokyo. Tabelog: opened 28 July 2022; Izakaya WEST "Tabelog 100" 2024–2026.',
      philosophy: 'Eat what you like, as much as you like, without ceremony (official site).', specialty: 'Omakase starters; anago; oden in season.',
      anecdotes: [
        { text: '"they adjusted the amount of oden for me and even grilled just one piece of meat" — October 2026.', source: R + 'B537342424/' },
        { text: '"Wow, there were so many foreign customers!" — October 2026.', source: R + 'B537342424/' },
        { text: '"This restaurant doesn’t list prices on the menu for food or drinks!" — October 2026.', source: R + 'B538010451/' },
      ],
      japanese_sources_summary: '公式サイト (tominokoji-yamagishi.com): 呑小路やま岸、富小路やま岸が手掛ける美食の居酒屋、アラカルトで好きなものを好きなだけ、山岸隆博の目利きの素材と職人の技法、オープンキッチン、予算15,000〜19,999円、店舗一覧: 富小路やま岸、呑小路やま岸、二条やま岸、祇園やま岸、焼肉やまちゃん、饗宴、銀座 呑小路やま岸、富小路やま岸 麻布台ヒルズ。食べログ: 居酒屋、中京区下白山町293-3、京都市役所前駅から徒歩約5分、月・火・木〜土・祝 16:00〜23:30、日曜は L.O.23:00、水曜と不定休、予約可、1時間以上の遅れはキャンセル扱い、12席 (カウンター10、テーブル2)、カード可、2022年7月28日オープン、居酒屋 WEST 百名店 2024〜2026。口コミ (2026年7〜10月、英語): おまかせ4品8,800円、穴子、松茸のフライ、おでん、値段のない品書き、海外の客が多い。',
      confidence: 'medium', sources: [SITE, 'https://www.tominokoji-yamagishi.com/shoplist/', TB, R + 'B527589334/', R + 'B532146986/', R + 'B535752576/', R + 'B535816149/', R + 'B535929365/', R + 'B537278962/', R + 'B537342424/', R + 'B537929674/', R + 'B538010451/', R + 'B538186646/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Four set dishes then à la carte; no prices on the menu, so ask.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区下白山町293-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Group official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009745, 135.765626); cross-checked: GSI 京都府京都市中京区下白山町293番地 (lot) 44m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537342424/'],
    price_note: 'The menu shows no prices; the four-dish start from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Four omakase dishes to start', '¥8,800', 'Course', 'ask', 'no', 'October 2026.', 'omakase4'),
      it('', '', 'Oden (autumn–winter)', '', 'À la carte', 'ask', 'no', 'October 2026.', 'oden'),
    ] }, {
    cuisine: '富小路やま岸のカジュアルなオープンキッチンの居酒屋: 山岸隆博の目利きの素材を割烹の技で (公式サイト)・まずおまかせ4品 (8,800円、2026年10月)、あとは自由に: 先付、お造り、主菜、野菜の一品・2026年: 白味噌の蓮根蒸し、鯛とマグロ、Densuke の穴子、いくらご飯、鰆の味噌焼き、無花果と栗の白胡麻豆腐、松茸のフライ、おでん、鯖寿司、海老マヨ、焼売、Kujo ねぎと油揚げの煮物・日本酒が豊富、ワイン・予算は約10,000〜19,999円',
    neighborhood: '京都市役所の近く、御池の南。京都市役所前駅から徒歩5分',
    gf_detail: '要確認。醤油や味噌の料理、揚げ物、焼売のある和の居酒屋。グルテンの情報なし (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。出汁、魚、肉が基本 (2026年の口コミ)。',
    notes: '[居酒屋・市役所前、名割烹の気軽な顔] 京都の富小路やま岸のオープンキッチンの居酒屋。カウンター10席で、まずおまかせ4品 (8,800円)、あとは好きなものを: Densuke の穴子の焼き物、いくらご飯、鰆の味噌焼き、松茸のフライ、秋のおでん、焼売。日本酒の品ぞろえが豊富で、少食なら量を加減してくれる。海外の客が多い。品書きに値段がないので、グラスワインなどは頼む前に確認を。飲み物込みで10,000〜19,999円ほど、夜遅くまで、水曜休み。',
  });
}

// ================================================================ ルーデンス
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26029857/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://ludens-kyoto.net/';
  const H = day(['12:00', '15:00'], ['18:00', '21:30']);
  put({
    id: 'kyoto_ludens', name: 'ルーデンス (LUDENS)', category: 'MOM_AND_POP',
    lat: 35.014569, lng: 135.761798, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Italian courses with ravioli and risotto alongside medicinal soups and vegetable plates; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Vegetable-rich medicinal courses, but prosciutto and meat appear (2026 reviews).',
    hours_raw: 'Lunch from 12:00 and dinner from 18:00 or 19:00, everyone starting together (official site; Tabelog); Tabelog gives Tue–Sat 12:00–15:00 and 18:00–21:30, closed Monday. The official site gives Sunday and Monday as closing days. A medicinal breakfast (Sat 7:00–9:00, Sun 8:00–11:00 per Tabelog; ¥2,800 in September 2026) is temporarily unavailable from 11 October 2026 (September 2026 review). Reservation only; online bookings are confirmed by phone; lunch takes about 2 hours, dinner about 2.5 (Tabelog). Chef\'s counter "田淵薬膳研究所": a seasonal course matched to your condition, lunch from 13:00 and dinner from 20:00 when counter seats are free (official site). Cards (Tabelog). 6 min from Marutamachi Stn (Tabelog). Opened 19 September 2017 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '間之町通 north of Nijo, near a street once lined with herbal-medicine wholesalers — 6 min from Marutamachi Stn',
    cuisine: 'Italian-based "innovative fusion" with medicinal herbs and nourishing ingredients (official site) · a seasonal wellness course: medicinal soup, herbal soup, spiced appetisers, root vegetables, ravioli, chestnut risotto (October 2026); herbs and spices ground at the table to suit your condition (October 2026) · chef\'s counter 田淵薬膳研究所: a "seasonal yojo course" opening with a medicinal tea, four amuse-bouches, a vegetable plate and medicinal soup plus à la carte (official site) · wine, medicinal liqueurs and herbal drinks (official site) · spices to take home (August 2026)',
    website: SITE, gmaps: gm('ルーデンス 京都'), menu_url: null,
    notes: "[Italian · Marutamachi, medicinal-herb Italian] On a street near Nijo once lined with herbal-medicine wholesalers, a renovated townhouse serves Italian food built around nourishing, yakuzen-style ingredients: a medicinal soup to start, a plate of vegetables, ravioli, a chestnut risotto, with herbs and spices you grind at the table to suit how you feel. At the chef's counter, 田淵薬膳研究所, chef 田淵 — a qualified practitioner of Japanese-Chinese medicinal cooking — tailors a seasonal course to the day's condition. Diners praise the detailed explanations and warm send-off. Booking only; closed Mondays (and Sundays per the official site); the popular breakfast is paused from 11 October 2026.",
    chef_bio: { chef_name: '田淵 (surname only; official site: "和漢薬膳食医の田淵シェフ"; no romaji in a source)', roles: ['Chef at the 田淵薬膳研究所 counter; a 和漢薬膳食医 (official site)'], origin: null,
      background: 'Per the official site: the name echoes "Ristorante", from ristorare, "to restore with food and rest"; Nijo-dori to the south once thrived with herbal-medicine wholesalers, a history the restaurant carries on with medicinal cooking; Italian-based courses rich in nourishing ingredients; a mail-order medicinal hot-pot set with a soup kept going for eight years, Kyoto Ohara vegetables and Miyagi "kampo" beef. Tabelog: opened 19 September 2017; Italian WEST "Tabelog 100" 2025.',
      philosophy: 'A place to relieve daily fatigue and restore energy (official site).', specialty: 'Seasonal medicinal course; medicinal soups.',
      anecdotes: [
        { text: '"According to the seasonal changes and my health, I was able to grind various medicinal herbs and spices (Chinese medicinal ingredients) that were blended into the dish." — October 2026.', source: R + 'B537929644/' },
        { text: '"I also appreciated being able to take home the spices used in the dishes to enjoy at home." — August 2026.', source: R + 'B533961348/' },
        { text: '"*Please note that breakfast will be temporarily unavailable from October 11, 2026." — September 2026.', source: R + 'B538394768/' },
      ],
      japanese_sources_summary: '公式サイト (ludens-kyoto.net): 薬膳イタリアン LUDENS、心と身体が喜ぶ素材を活かしたイノベーティブ・フュージョン、Ristorante の語源 Ristorare は「食事や休養で元気を回復させる」、南の二条通はかつて薬種問屋で栄えた街、イタリア料理をベースに滋養のある食材のコース、シェフズカウンター「田淵薬膳研究所」では和漢薬膳食医の田淵シェフが体調に合わせた「季節の養生コース」、ランチ13時〜・ディナー20時〜 (カウンターに空きがある場合)、薬膳茶から、アミューズ4種と野菜プレートと薬膳スープ、薬酒やハーブのドリンク、お取り寄せの養生鍋セット、昼12:00一斉スタート、夜18:00・19:00一斉スタート、日曜・月曜定休。食べログ: イタリアン・イノベーティブ、中京区間之町通二条上ル夷町560-8、丸太町駅から徒歩6分、予約のみ、昼は約2時間・夜は約2.5時間、2017年9月19日オープン、イタリアン WEST 百名店 2025。口コミ (2026年8〜10月、英語): 薬膳イタリアン、その場で挽くスパイス、薬膳の朝食は2026年10月11日から休止、丁寧な説明と見送り。',
      confidence: 'medium', sources: [SITE, TB, R + 'B514783033/', R + 'B533961348/', R + 'B535052324/', R + 'B535329579/', R + 'B535556538/', R + 'B535623828/', R + 'B537929644/', R + 'B538265186/', R + 'B538394768/', R + 'B538490604/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses explained dish by dish; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区間之町通二条上ル夷町560-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site; reviews dated through October 2026 (breakfast paused from 11 October 2026).' },
    pin_source: `Tabelog ${TB} (35.014569, 135.761798); cross-checked: GSI 京都府京都市中京区夷町560番地 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538394768/'],
    price_note: 'No price list read; diners report ¥15,000–19,999 at dinner; breakfast ¥2,800 (September 2026, now paused).', last_checked: TODAY, items: [
      it('', '', 'Seasonal wellness course (lunch or dinner)', '', 'Course', 'ask', 'ask', 'October 2026.', 'wellness_course'),
      it('', '', 'Medicinal breakfast set (paused from 11 Oct 2026)', '¥2,800', 'Breakfast', 'ask', 'ask', 'September 2026.', 'breakfast'),
    ] }, {
    cuisine: 'イタリア料理をベースに薬膳や滋養のある食材を使う「イノベーティブ・フュージョン」(公式サイト)・季節の養生コース: 薬膳スープ、ハーブのスープ、スパイスの前菜、根菜、ラビオリ、栗のリゾット (2026年10月)、体調に合わせてその場で生薬やスパイスを挽く (2026年10月)・シェフズカウンター「田淵薬膳研究所」: 薬膳茶から始まる「季節の養生コース」、アミューズ4種、野菜プレート、薬膳スープとアラカルト (公式サイト)・ワイン、薬酒、ハーブのドリンク (公式サイト)・スパイスのお持ち帰りも (2026年8月)',
    neighborhood: '二条の北の間之町通。かつて薬種問屋が並んだ界隈。丸太町駅から徒歩6分',
    gf_detail: '予約時に要確認。ラビオリやリゾットのあるイタリアンのコースに薬膳スープや野菜のプレート。グルテンの情報なし (2026年の口コミ)。',
    vegan_detail: '要確認。野菜の多い薬膳のコースだが、生ハムや肉も出る (2026年の口コミ)。',
    notes: '[イタリアン・丸太町、薬膳のイタリアン] かつて薬種問屋が並んだ二条近くの通りの改装町家で、滋養のある薬膳の食材を軸にしたイタリアン: 薬膳スープに始まり、野菜のプレート、ラビオリ、栗のリゾット、体調に合わせてその場で挽く生薬やスパイス。シェフズカウンター「田淵薬膳研究所」では和漢薬膳食医の田淵シェフがその日の体調に合わせたコースを出す。丁寧な説明と温かい見送りが好評。予約のみ、月曜休み (公式サイトでは日曜も)、人気の朝食は2026年10月11日から休止。',
  });
}

save();
