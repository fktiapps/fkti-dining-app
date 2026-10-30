// Osaka sweep (2-mile circle around Dotonbori), batch 205 — mom-and-pop queue (≤20 seats, 30+ reviews), nearest-first past ~1 km.
//   + 餅匠しづく 新町店 Mochisho Shizuku Shinmachi ten (mochi and wagashi from pesticide-free ingredients; Tabelog Wagashi WEST 100 2026; Shinmachi)
//     Chain check: three shops (Shinmachi, the Kishiwada shop with the workshop, Ashiya 『上』) per mochi-shizuku.jp — a small
//     maker, not a fast-growing chain; nothing under しづく/Shizuku in data/osaka.json except an unrelated sushi bar.
//   + SPICE STAND TONGARI (one-person spice-curry counter by day, dining bar by night, opened January 2025; Shinmachi)
//   + Bistro Sifflet (organic-vegetable French bistro and natural wine, one person runs the room and kitchen; Shinmachi)
//   + vege eats (weekday salad bar with in-house hydroponic lettuce and rice-flour breads; Hakurocho)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-30';
const { put, skip, save } = openCitySweep('osaka', TODAY, 205);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 餅匠しづく 新町店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27024632/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://mochi-shizuku.jp/'; const KASHI = SITE + 'kashi/'; const SEASON = SITE + 'season/'; const ACCESS = SITE + 'access/';
  const KANRO = SITE + '2026/10/15/10%e6%9c%88%e3%80%80%e8%8c%b6%e5%af%ae%e3%80%8e%e7%94%98%e9%9c%b2%e3%80%8f%e3%81%ae%e3%81%94%e4%ba%88%e7%b4%84/';
  const RENO = SITE + '2026/01/20/%e6%96%b0%e7%94%ba%e5%ba%97%e3%80%80%e6%94%b9%e8%a3%85%e3%81%ae%e3%81%8a%e7%9f%a5%e3%82%89%e3%81%9b/';
  const H = day(['10:30', '18:00']);
  put({
    id: 'osaka_mochisho_shizuku_shinmachi', name: '餅匠しづく 新町店 (Mochisho Shizuku Shinmachi ten)', category: 'OMNI',
    lat: 34.677613, lng: 135.494337, cuisine_type: 'sweets',
    gf_confidence: 'options', gf_label: 'Some GF options', gf_detail: 'Some options, by the shop\'s own ingredient lists: the Shinmachi classics (black-bean mochi, kusa mochi, raspberry daifuku, kuro mochi, monaka, chestnut daifuku, shigure, kurumi mochi) list glutinous rice, rice flour, mochi flour, potato starch, beans, sugar, salt and fruit, and no wheat. The shop makes no gluten-free claim and says nothing about cross-contact, and the Kanro tea-room course includes savoury mochi dishes that are not listed, so ask at the counter.',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'Some options, by the shop\'s own ingredient lists: black-bean mochi, kusa mochi, raspberry daifuku, kuro mochi, monaka, chestnut daifuku, shigure, kurumi mochi, chestnut chakin and ginkgo daifuku list only plant ingredients. Not vegan: the Mont Blanc (fresh cream, October 2026 review), fruit daifuku with cream, the Kishiwada-shop sweets made with honey, and the Kanro course (a mochi soup with crab, October 2026 review).',
    hours_raw: 'Daily: shop 10:30–18:00; open year-round, closures announced on the website (mochi-shizuku.jp; Tabelog). Tea room "Kanro" (甘露), opened in the renovated shop in 2026: by reservation, two seatings a day at 13:00 and 15:00, a pairing course of sweets, mochi dishes and tea ¥6,600 per person including tax, sake or a non-alcoholic drink extra; book by phone or through the online shop (prepaid online), no cancellations, walk-ins if a seat is free; junior-high age and up only; mention allergies when booking (shop notice, 15 October 2026). The old casual eat-in café is gone (October 2026 reviews); about six chairs outside (October 2026 review). Cards (VISA, JCB, AMEX, Diners); no e-money or QR (Tabelog). 8 counter seats listed; non-smoking; wheelchair access (Tabelog). Renamed from 日月餅 on 1 July 2011 (Tabelog). Tabelog Sweets WEST 100 2018–2020 and 2022; Wagashi WEST 100 2023 and 2026.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi 1-17-17, Shinmachi House 1F, south of Utsubo Park — 4 min from Nishi-Ohashi Stn (Exit 2), 7 min from Yotsubashi Stn',
    cuisine: 'Mochi and wagashi from naturally farmed, pesticide-free rice, beans and sugar, mochi pounded daily (8 seats) · classics: black-bean mochi with Tanba black beans salt-boiled every morning, kusa mochi, raspberry daifuku coloured with beets, kuro mochi with hemp charcoal, monaka you fill yourself, chestnut daifuku, shigure, kurumi mochi with edamame or soybean paste · seasonal: chestnut chakin, Japanese-chestnut Mont Blanc, fruit daifuku (Shine Muscat, peach, hozuki, strawberry), ginkgo daifuku, matcha soy-au-lait, "Gastronomic Herb" jelly with Kajitani Farm edible flowers, warabi mochi, mizu yokan · kakigori (September 2026) · tea room Kanro: reserved pairing course ¥6,600',
    website: SITE, gmaps: gm('餅匠しづく 新町店'), menu_url: KASHI,
    notes: "[Wagashi · Shinmachi, mochi from pesticide-free ingredients in a gallery-like shop] A wagashi maker that pounds its mochi daily in a sunken machine made more than 30 years ago and in use since the previous generation, and uses naturally farmed, pesticide-free glutinous rice, azuki, rice flour and sugar from contract growers across western Japan, testing each new harvest for radiation. The Shinmachi shop, renovated in 2026, looks like a concrete art gallery, with sweets laid out like jewels. The signature is the black-bean mochi, studded with big Tanba beans salt-boiled every morning around smooth bean paste; around it run a beet-red raspberry daifuku with white bean paste and rum, chestnut chakin and a pure-chestnut Mont Blanc in autumn, and fruit daifuku through the year. Behind a low crawl-through door the shop opened Kanro, a dim, quiet tea room serving a reserved four-course pairing of sweets and mochi dishes, a drink matched to each; an October 2026 guest had a crystal-like jelly with azuki tea, a hozuki daifuku, a mochi soup topped with crab and a chestnut kinton, then a Panama coffee cloth-dripped by the owner. Prices run high; popular items sell out, so go early. The owner, 石田, invites questions about the growers.",
    chef_bio: { chef_name: '石田', roles: ['Owner (店主, per mochi-shizuku.jp)'], origin: null, background: 'Wagashi maker with shops in Shinmachi (renamed from 日月餅 to Mochisho Shizuku on 1 July 2011, Tabelog), Kishiwada (where the workshop is) and Ashiya (『上』); the mochi machine has been used since the previous generation (shop website). The Shinmachi tea room ran for eighteen years before the January 2026 renovation (shop notice, 20 January 2026). The tea room Kanro opened in the renovated shop (shop notices, October 2026).', philosophy: 'Sweets as "the chief of a hundred medicines": naturally farmed, pesticide-free ingredients from contract growers, harvests tested for radiation each year; best mochi from "human plus machine" (shop website). Kanro is a "mountain retreat in the city", a designed quiet (shop notice, 15 October 2026).', specialty: 'Black-bean mochi with Tanba black beans; raspberry daifuku; seasonal chestnut sweets.',
      anecdotes: [
        { text: '"The surface of the mochi is dotted with black beans, which are the finest quality from Tanba, Hyogo Prefecture, and are boiled in salt every morning at the shop." — October 2026, takeout.', source: R + 'B537439157/' },
        { text: '"As I bent down to pass through a charming door in the corner, I was greeted by a dimly lit, minimalist space." — October 2026, the Kanro course.', source: R + 'B503364466/' },
      ],
      japanese_sources_summary: '食べログ: 餅匠しづく 新町店 (旧店名 日月餅、2011年7月1日に改名)、大阪市西区新町1-17-17 新町ハウス 1F、西大橋駅2番出口から徒歩4分、四ツ橋駅から徒歩7分、毎日10:30〜18:00、年中無休、カード可、電子マネー・QR不可、8席 (カウンターのみ)、禁煙、車椅子可、食べログ スイーツ WEST 百名店 2018・2019・2020・2022、和菓子・甘味処 WEST 百名店 2023・2026。店のサイト: 新町店・岸和田店 (工房)・芦屋『上』の3店、販売10:30〜18:00、茶寮13:00〜17:30、無休 (休みはお知らせ)、店主の石田、先代から使う埋め込み式の餅つき機、餅米・小豆・米粉・餅粉・砂糖・雑穀は自然農法・無農薬栽培、毎年1〜2月に放射能測定、黒豆餅 (毎朝丹波の黒豆を塩茹で)、草餅、フランボワーズ大福 (ビーツの赤)、黒餅 (麻炭)、最中、栗大福、しぐれ、くるみ餅、栗茶巾、ぎんなん大福、抹茶ソイオーレ (豆乳生クリーム)、2026年1月19日に十八年続いた茶寮を閉じて改装、改装中は milia burger の軒先で仮店舗、茶寮『甘露』は躙口のある予約制の茶寮、1日2席 (13時・15時)、甘味と餅料理とお茶のペアリングコース6600円、日本酒かノンアルコールの飲み物は別料金、中学生以上、アレルギーは予約時に。口コミ(2026年9月〜10月): 美術館のようなコンクリートの店内、宝石のような生菓子、栗大福、栗茶巾、和栗のモンブラン (生クリーム)、フランボワーズ大福、ほおずきの大福、シャインマスカットの大福、Gastronomic Herb (Kajitani Farm の食用花)、わらび餅、水羊羹、甘露のコースは結晶のようなゼリー状のお菓子と小豆茶、ほおずきの大福、蟹をのせた餅の椀、栗きんとん、店主がネルドリップで淹れるパナマのコーヒー、イートインは終わり、外に椅子が6脚ほど、値段は高め、売り切れもあるので早めに。',
      confidence: 'medium', sources: [TB, SITE, KASHI, SEASON, ACCESS, KANRO, RENO, R + 'B454210761/', R + 'B503364466/', R + 'B536875447/', R + 'B537439157/', R + 'B537607528/', R + 'B537707588/', R + 'B537728963/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point and buy at the counter; the shop site has an English page, phone is Japanese only; Kanro must be booked (2026).' },
    safety: { ...SAFETY0, positives: [
      { text: 'Shop ingredient lists for the Shinmachi and both-shop classics name glutinous rice, rice flour, mochi flour, potato starch, beans, sugar, salt, fruit and rum — no wheat (mochi-shizuku.jp classics page, read 2026-10-30). No gluten-free claim and no cross-contact information.', source: KASHI },
      { text: 'Chestnut chakin lists only chestnut and sugar; ginkgo daifuku lists mochi, azuki, sugar, ginkgo and salt (mochi-shizuku.jp seasonal page, read 2026-10-30).', source: SEASON },
    ], staff_allergy_handling: [
      { text: 'Kanro tea room: tell the shop about allergies when booking (shop notice, 15 October 2026).', source: KANRO },
    ] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町1-17-17 新町ハウス 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026; shop notices dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目17番17号 (go) 26m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [KASHI, SEASON, KANRO, R + 'B454210761/', R + 'B536875447/'],
    price_note: 'Prices from September 2026 reviews (kusa mochi January 2026); Kanro from the shop notice of 15 October 2026.', last_checked: TODAY, items: [
      it('黒豆餅', '', 'Black-bean mochi (Tanba black beans, koshi-an)', '¥410', 'Classics', 'ask', 'vegan', 'Ingredients per the shop: glutinous rice, azuki, sugar, black beans, salt. ¥410 in a September 2026 review ("Kuro Mame Daifuku").', 'kuromame'),
      it('フランボワーズ大福', '', 'Raspberry daifuku (beet-coloured mochi, white bean paste, rum)', '¥480', 'Classics', 'ask', 'vegan', 'Ingredients per the shop include rice flour, mochi flour and rum. September 2026.', 'framboise'),
      it('草餅', '', 'Kusa mochi (mugwort)', '¥346', 'Classics', 'ask', 'vegan', 'Ingredients per the shop: glutinous rice, azuki, sugar, mugwort, salt. January 2026.', 'kusamochi'),
      it('栗茶巾', '', 'Chestnut chakin (autumn)', '¥496', 'Seasonal', 'ask', 'vegan', 'Ingredients per the shop: chestnut, sugar. September 2026.', 'kurichakin'),
      it('', '', 'Japanese-chestnut Mont Blanc (seasonal)', '', 'Seasonal', 'ask', 'no', 'Fresh cream (October 2026 review).', 'montblanc'),
      it('甘露', '', 'Kanro tea-room pairing course (reservation)', '¥6,600', 'Tea room', 'ask', 'no', 'Two seatings a day; drinks extra; included a mochi soup with crab (October 2026 review).', 'kanro'),
    ] }, {
    cuisine: '自然農法・無農薬の餅米、小豆、砂糖でつくる餅と和菓子、毎日搗く餅 (8席)・定番: 毎朝塩茹でする丹波の黒豆の黒豆餅、草餅、ビーツで赤く染めたフランボワーズ大福、麻炭の黒餅、自分で餡を詰める最中、栗大福、しぐれ、枝豆か大豆の餡のくるみ餅・季節: 栗茶巾、和栗のモンブラン、果物の大福 (シャインマスカット、桃、ほおずき、いちご)、ぎんなん大福、抹茶ソイオーレ、Kajitani Farm の食用花の Gastronomic Herb、わらび餅、水羊羹・かき氷 (2026年9月)・茶寮『甘露』: 予約制のペアリングコース6600円',
    neighborhood: '新町1-17-17 新町ハウス 1F、Utsubo Park の南。西大橋駅2番出口から徒歩4分、四ツ橋駅から徒歩7分',
    gf_detail: '店の素材表示では、新町店の定番 (黒豆餅、草餅、フランボワーズ大福、黒餅、最中、栗大福、しぐれ、くるみ餅) は餅米、米粉、餅粉、片栗、豆、砂糖、塩、果物で、小麦の記載なし。ただしグルテンフリーの表示や混入の情報はなく、甘露のコースの餅料理は素材が載っていないので、店頭で確認を。',
    vegan_detail: '店の素材表示では、黒豆餅、草餅、フランボワーズ大福、黒餅、最中、栗大福、しぐれ、くるみ餅、栗茶巾、ぎんなん大福は植物性の素材のみ。モンブラン (生クリーム、2026年10月の口コミ)、クリーム入りの果物の大福、蜂蜜を使う岸和田店のお菓子、甘露のコース (蟹をのせた餅の椀、2026年10月の口コミ) はヴィーガンではありません。',
    notes: '[和菓子・新町、無農薬の素材の餅、ギャラリーのような店] 先代から使う30年以上前の埋め込み式の機械で毎日餅を搗く和菓子屋。餅米、小豆、米粉、砂糖は西日本の契約農家の自然農法・無農薬栽培のもので、毎年新物の放射能測定もしている。2026年に改装した新町店はコンクリートの美術館のようで、お菓子が宝石のように並ぶ。看板は黒豆餅で、毎朝塩茹でする大粒の丹波の黒豆が、なめらかな漉し餡を包む餅にちりばめられている。ほかにビーツで赤く染めた白あんとラム酒のフランボワーズ大福、秋の栗茶巾と栗だけのモンブラン、一年を通して果物の大福。小さな躙口の奥には、店が新しく開いた茶寮『甘露』。薄暗く静かな空間で、予約制の甘味と餅料理の4品のコースに、それぞれ飲み物を合わせる。2026年10月には、結晶のようなゼリー状のお菓子と小豆茶、ほおずきの大福、蟹をのせた餅の椀、栗きんとん、最後に店主がネルドリップで淹れるパナマのコーヒー。値段は高め、人気の品は売り切れるので早めに。店主の石田さんは、生産者について問い合わせを受けている。',
  });
}

// ================================================================ SPICE STAND TONGARI
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27146697/'; const R = TB + 'dtlrvwlst/';
  const F = day(['11:00', '15:00'], ['17:00', '22:00']); const S = day(['11:00', '15:00']);
  put({
    id: 'osaka_spice_stand_tongari_shinmachi', name: 'SPICE STAND TONGARI', category: 'OMNI',
    lat: 34.678949, lng: 135.495841, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the shop pairs spice curry with a European-style curry, both on a dashi base, and the evening menu has fried dishes and pasta.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the curries are made on dashi and built around beef, chicken, pork, venison and duck.',
    hours_raw: 'Mon, Wed–Sat 11:00–15:00 and 17:00–22:00; Sun 11:00–15:00; closed Tuesday; some evenings closed irregularly (Tabelog). Lunch reservations only for the 11:00 opening; late arrivals may lose the seat to people waiting (Tabelog; an August 2026 diner arrived 2–3 minutes late and waited 30 minutes outside). Evening table charge ¥500, waived with a drink (Tabelog; June 2026 review). Order by QR code on your phone (2026 reviews). Cards (VISA, Master, JCB, AMEX), iD, QUICPay, PayPay, d Barai, au PAY, Alipay, WeChat Pay (Tabelog). 7 counter seats; heated tobacco only, evenings only; children welcome, mini curry for kids; English menu (Tabelog). Opened 8 January 2025 (Tabelog).',
    hours: { 0: F, 2: F, 3: F, 4: F, 5: F, 6: S }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi 1-14-2, near the Orix Theater — 5 min from Hommachi Stn, 8 min from Nishi-Ohashi Stn',
    cuisine: 'Spice curry counter by day, dining bar by night (7 seats) · two-curry plates: Tongari beef keema with sour chicken (yogurt-tart), beef keema with pork, coconut pork belly, venison keema with sour butter duck · spice taco rice · Tongari rice in sizes named after mountains, from Tenpozan to Everest · fresh vegetables, achar, nuts, fukujinzuke and rakkyo on the plate; spice level to order · evenings: spiced small plates, fried dishes, pasta, rice dishes, fried Tajima chicken · shochu, wine, cocktails',
    website: null, gmaps: gm('SPICE STAND TONGARI 新町'), menu_url: null,
    notes: "[Curry · Shinmachi, a seven-seat spice-curry counter that turns dining bar at night] A small brick-walled counter with a natural-wood bar near the Orix Theater, run by one person, that opened in January 2025. Lunch is spice curry on a dashi base, usually two to a plate: the Tongari beef keema with its rich, spicy broth beside a yogurt-tart sour chicken, or rotating partners such as coconut pork belly, and lately game, with venison keema and a mild sour-butter duck. The plate comes heaped with fresh vegetables, achar, nuts and, unusually for spice curry, fukujinzuke and rakkyo. Rice sizes are named after mountains, from Osaka's tiny Tenpozan up to Everest. Order on your phone by QR code; a LINE sign-up gets a free pickled-egg topping. At night it becomes a dining bar with spiced snacks and fried Tajima chicken; a drink waives the ¥500 table charge. Lunch bookings are for 11:00 only, and the seat goes to the queue if you're late.",
    chef_bio: { chef_name: null, roles: ['Cook and owner (a one-person operation, per a March 2026 review)'], origin: null, background: 'Spice-curry counter and dining bar that opened on 8 January 2025 (Tabelog).', philosophy: 'Authentic spice curry from carefully chosen ingredients at lunch, spiced dishes with drinks at night (Tabelog, shop-provided).', specialty: 'Tongari beef keema; two-curry plates on a dashi base.',
      anecdotes: [
        { text: '"You can choose the amount of rice, with the smallest portion named \'Tenpozan\' and the largest \'Everest.\'" — September 2026, venison keema and sour butter duck curry.', source: R + 'B535529392/' },
        { text: '"It\'s interesting to see fukujinzuke (pickled vegetables) and rakkyo (pickled shallots) as toppings, which is rare for spice curry." — June 2026, beef keema and pork, ¥1,550.', source: R + 'B530887228/' },
      ],
      japanese_sources_summary: '食べログ: SPICE STAND TONGARI、大阪市西区新町1-14-2、本町駅から徒歩5分、西大橋駅から徒歩8分、月・水〜土11:00〜15:00・17:00〜22:00、日曜11:00〜15:00、火曜休み、夜は不定休あり、ランチの予約は11:00のみ、夜はチャージ料ありでドリンク注文で無料、カード・iD・QUICPay・PayPay・d払い・au PAY・Alipay・WeChat Pay可、7席 (カウンターのみ)、夜のみ加熱式たばこ可、子供可、子供用のミニカレー、英語メニュー、オープン日2025年1月8日。店の紹介: スパイスカレーと欧風カレーのあいがけ、どちらもだしベース、夜はおつまみ、揚げ物、パスタ、ご飯もの、Tajima の鶏の揚げ物。口コミ(2026年3月〜10月): ひとりで営業、QRコードで注文、Tongari の牛肉のキーマと sour chicken 1450円、牛肉のキーマと豚、ココナッツの豚バラ1550円、鹿キーマと sour butter の鴨、スパイスのタコライス、ご飯の量は Tenpozan から Everest まで山の名前、生野菜、アチャール、ナッツ、福神漬とらっきょう、LINE 登録で卵のトッピング、夜のテーブルチャージ500円はドリンクで無料、11時の予約に遅れて30分、外で待った、ジビエのカレーの看板。',
      confidence: 'medium', sources: [TB, R + 'B523803982/', R + 'B524508592/', R + 'B525777267/', R + 'B530887228/', R + 'B534791091/', R + 'B535529392/', R + 'B536743488/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); order by QR code on your phone (2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市西区新町1-14-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated March–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目14番2号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B524508592/', R + 'B530887228/', R + 'B535529392/', R + 'B534791091/'],
    price_note: 'Prices from March and June 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tongari beef keema & sour chicken', '¥1,450', 'Curry', 'ask', 'no', 'March 2026; spice level to order.', 'keema_chicken'),
      it('', '', 'Beef keema & pork with coconut pork belly', '¥1,550', 'Curry', 'ask', 'no', 'June 2026.', 'keema_pork'),
      it('', '', 'Venison keema & sour butter duck', '', 'Curry', 'ask', 'no', 'September 2026.', 'venison_duck'),
      it('', '', 'Spice taco rice', '', 'Curry', 'ask', 'no', 'August 2026.', 'tacorice'),
    ] }, {
    cuisine: '昼はスパイスカレー、夜はダイニングバーのカウンター (7席)・カレー2種のあいがけ: Tongari の牛肉のキーマとヨーグルトの酸味の sour chicken、牛肉のキーマと豚、ココナッツの豚バラ、鹿キーマと sour butter の鴨・スパイスのタコライス・ご飯の量は山の名前で Tenpozan から Everest まで・生野菜、アチャール、ナッツ、福神漬、らっきょう、辛さは選べる・夜: スパイスのおつまみ、揚げ物、パスタ、ご飯もの、Tajima の鶏の揚げ物・焼酎、ワイン、カクテル',
    neighborhood: '新町1-14-2、Orix Theater の近く。本町駅から徒歩5分、西大橋駅から徒歩8分',
    gf_detail: '要確認。グルテンの情報なし。スパイスカレーと欧風カレーはどちらもだしベースで、夜は揚げ物やパスタも。',
    vegan_detail: 'ヴィーガンではありません。カレーはだしベースで、牛、鶏、豚、鹿、鴨が中心。',
    notes: '[カレー・新町、昼はスパイスカレー、夜はダイニングバーの7席のカウンター] Orix Theater の近く、レンガの壁と木のカウンターの小さな店を、ひとりで切り盛りする。2025年1月オープン。昼はだしベースのスパイスカレーで、たいてい2種のあいがけ。濃いスパイスの Tongari の牛肉のキーマに、ヨーグルトの酸味の sour chicken。相方はココナッツの豚バラなどで入れ替わり、最近は鹿キーマとまろやかな sour butter の鴨のジビエも。皿には生野菜、アチャール、ナッツ、スパイスカレーにはめずらしい福神漬とらっきょうがたっぷり。ご飯の量は山の名前で、大阪の低い Tenpozan から Everest まで。注文はスマホでQRコードから。LINE 登録で卵のトッピングが無料に。夜はスパイスのおつまみや Tajima の鶏の揚げ物のダイニングバーになり、テーブルチャージ500円はドリンクを頼めば無料。昼の予約は11時のみで、遅れると並んでいる人が先に。',
  });
}

// ================================================================ Bistro Sifflet
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27103511/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '24:00']); const L1 = day(['11:30', '14:00'], ['18:00', '24:00']); const L2 = day(['11:30', '14:30'], ['18:00', '24:00']);
  put({
    id: 'osaka_bistro_sifflet_shinmachi', name: 'Bistro Sifflet', category: 'OMNI',
    lat: 34.678985, lng: 135.495739, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The shop says it may not be able to accommodate allergies; courses include bread, a pâté en croûte and sauced meats.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses centre on pork, beef, salmon, yellowtail and tuna, with eggs.',
    hours_raw: 'Mon and Wed 18:00–24:00; Tue, Thu, Fri 11:30–14:00 (last order 13:30) and 18:00–24:00; Sat, Sun and holidays 11:30–14:30 (last order 13:00) and 18:00–24:00; dinner last order 22:30; closing days not fixed (Tabelog). Reservations accepted; no strong perfume; the shop may not be able to handle allergies (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 20 seats including a counter; non-smoking; wheelchair access; sommelier (Tabelog). One person runs the room and the kitchen, so service is unhurried (April, July, August, October 2026 reviews). Opened 2 March 2018 (Tabelog).',
    hours: { 0: D, 1: L1, 2: D, 3: L1, 4: L1, 5: L2, 6: L2 }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinmachi 1-14-43, next to the Orix Theater — 4 min from Hommachi Stn, 7 min from Nishi-Ohashi Stn',
    cuisine: 'French bistro and natural-wine bar, hearty cooking with organic vegetables from partner farms (20 seats) · dinner: tasting menu ¥7,700, prix fixe ¥5,500, wine pairing ¥4,400, plenty of à la carte and a bar menu (prosciutto, risotto) · lunch courses ¥2,100 to ¥4,400 · examples: Niçoise salad, marinated asparagus with poached egg, Mita pork simmered with white beans and Madeira sauce, US Prime outside-skirt steak frites, kombu-cured salmon, sous-vide pork tenderloin, Mita pork pâté en croûte, pan-seared yellowtail with tomato sauce, hamburg steak, chilled pumpkin soup, peach compote, cheesecake · house breads · natural wines by the glass',
    website: null, gmaps: gm('Bistro Sifflet 新町'), menu_url: null,
    notes: "[French · Shinmachi, a one-person bistro of big plates and natural wine] A casual French bistro beside the Orix Theater, open since 2018, that cooks hearty dishes from organic vegetables grown by partner farms and pours natural wine chosen by the sommelier and chef. One person runs both the room and the kitchen, so plan on a long, relaxed meal; diners call the service warm and the explanations careful. Portions are generous: a thick Mita pork pâté en croûte, Mita pork with white beans in Madeira sauce, skirt steak with fries, crisp-skinned yellowtail, with house breads one diner asked to have refilled. Dinner is a ¥7,700 tasting menu, a ¥5,500 prix fixe or à la carte; lunch courses run ¥2,100 to ¥4,400 and fill by noon on Saturdays, so book. Leave the strong perfume at home.",
    chef_bio: { chef_name: null, roles: ['Owner (runs the restaurant alone, per April and August 2026 reviews)'], origin: null, background: 'French bistro and wine bar that opened on 2 March 2018 (Tabelog).', philosophy: 'Hearty French cooking with organic vegetables from partner farms, paired with natural wines (Tabelog, shop-provided).', specialty: 'Mita pork dishes; pâté en croûte; natural-wine pairings.',
      anecdotes: [
        { text: '"The Mita pork pâté was surprisingly generous in portion, about 2 cm thick, packed with meat." — August 2026, lunch B course ¥2,100.', source: R + 'B534470729/' },
        { text: '"Despite being a one-person operation, the service was efficient and heartfelt, which impressed me greatly." — October 2026, lunch.', source: R + 'B537583536/' },
      ],
      japanese_sources_summary: '食べログ: Bistro Sifflet、大阪市西区新町1-14-43、本町駅 (四つ橋線) から徒歩4分、四ツ橋駅から徒歩6分、西大橋駅から徒歩7分、月・水18:00〜24:00、火・木・金11:30〜14:00・18:00〜24:00、土日祝11:30〜14:30・18:00〜24:00、ディナーL.O. 22:30、不定休、予約可、強い香水は控えて、アレルギーには対応できないことも、カード可、電子マネー・QR不可、20席、禁煙、車椅子可、ソムリエあり、オープン日2018年3月2日。店の紹介: 提携農家の有機野菜のボリュームある料理と自然派ワイン、テイスティングコース7700円、プリフィックス5500円、アラカルトも。口コミ(2025年11月〜2026年10月): ひとりで営業、ゆったり、7杯のペアリング4400円、ニース風サラダ、アスパラのマリネ、Mita の豚と白いんげん豆の煮込みとマデイラソース、US プライムのハラミのステーキとフリット、昆布締めのサーモン、豚ヒレの低温調理、Mita の豚のパテ・アン・クルート、ブリのポワレとトマトソース、ハンバーグ、冷たいかぼちゃのスープ、桃のコンポート (+300円)、チーズケーキ、ランチは2100円〜4400円、パンのおかわり、Orix Theater の隣、土曜は12時にほぼ満席。',
      confidence: 'medium', sources: [TB, R + 'B517744970/', R + 'B524520844/', R + 'B526380359/', R + 'B529666592/', R + 'B532296807/', R + 'B534470729/', R + 'B537583536/', R + 'B538205485/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book by phone; one person serves, so allow time (2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市西区新町1-14-43',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated November 2025–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目14番43号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B524520844/', R + 'B526380359/', R + 'B532296807/', R + 'B534470729/'],
    price_note: 'Dinner courses from the Tabelog listing; lunch prices from April, July and August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Dinner tasting menu', '¥7,700', 'Dinner course', 'ask', 'no', 'Tabelog listing; March 2026 review: amuse, soup, appetizer, main, dessert, coffee.', 'tasting'),
      it('', '', 'Dinner prix fixe', '¥5,500', 'Dinner course', 'ask', 'no', 'Tabelog listing.', 'prixfixe'),
      it('', '', 'Lunch B course (appetizer and main)', '¥2,100', 'Lunch', 'ask', 'no', 'August 2026.', 'lunch_b'),
      it('', '', 'Lunch 3-dish course', '¥3,800', 'Lunch', 'ask', 'no', 'April 2026.', 'lunch3'),
      it('', '', 'Mita pork pâté en croûte', '', 'Appetizer', 'no', 'no', 'August 2026.', 'pate'),
    ] }, {
    cuisine: '提携農家の有機野菜を使ったボリュームあるフレンチのビストロと自然派ワインのバー (20席)・夜: テイスティングコース7700円、プリフィックス5500円、ペアリング4400円、アラカルトとバーメニュー (生ハム、リゾット) も豊富・ランチコース2100円〜4400円・例: ニース風サラダ、アスパラのマリネとポーチドエッグ、Mita の豚と白いんげん豆の煮込みとマデイラソース、US プライムのハラミのステーキとフリット、昆布締めのサーモン、豚ヒレの低温調理、Mita の豚のパテ・アン・クルート、ブリのポワレとトマトソース、ハンバーグ、冷たいかぼちゃのスープ、桃のコンポート、チーズケーキ・自家製のパン・グラスの自然派ワイン',
    neighborhood: '新町1-14-43、Orix Theater の隣。本町駅から徒歩4分、西大橋駅から徒歩7分',
    gf_detail: '要確認。アレルギーには対応できないこともあると店。コースにはパン、パテ・アン・クルート、ソースの肉料理も。',
    vegan_detail: 'ヴィーガンではありません。コースは豚、牛、サーモン、ブリ、ツナが中心で、卵も。',
    notes: '[フレンチ・新町、ひとりで営むボリュームのビストロと自然派ワイン] Orix Theater の隣で2018年から続く気取らないフレンチのビストロ。提携農家の有機野菜でボリュームのある料理をつくり、ソムリエとシェフが選んだ自然派ワインを出す。サービスも料理もひとりなので、ゆったりした食事のつもりで。対応はあたたかく説明もていねいという声。量はたっぷりで、厚い Mita の豚のパテ・アン・クルート、Mita の豚と白いんげん豆のマデイラソース、ハラミのステーキとフリット、皮のパリッとしたブリ、おかわりを頼んだ人もいる自家製のパン。夜はテイスティングコース7700円、プリフィックス5500円かアラカルト。ランチコースは2100円〜4400円で、土曜は昼にはほぼ満席なので予約を。強い香水は控えて。',
  });
}

// ================================================================ vege eats
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27125979/'; const R = TB + 'dtlrvwlst/';
  const H = day(['09:00', '19:00']);
  put({
    id: 'osaka_vege_eats_hakurocho', name: 'vege eats', category: 'OMNI',
    lat: 34.678721, lng: 135.508442, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Reviewers describe the bread that comes with the salad bar as gluten-free rice-flour bread (April, August, October 2026), but the shop makes no gluten-free claim, the same choice includes garlic French bread, and the self-serve bar also holds pasta, macaroni and fried onions.',
    vegan_status: 'limited', vegan_label: 'Limited vegan', vegan_detail: 'Limited, and not a vegetarian shop despite the name: the self-serve bar mixes plain vegetables (lettuce grown in-house, tomatoes, broccoli, cucumber, edamame, seaweed, okara salad, multigrain rice, oatmeal, olive oil) with salad chicken, ham, boiled eggs, tuna, crab sticks and fish (2025–2026 reviews). Dressings and breads are not described as vegan.',
    hours_raw: 'Mon–Fri 9:00–19:00; closed Saturday, Sunday, holidays, Obon and New Year (Tabelog). Breakfast (to 10:30): salad bar with a self-service drink included (2026 reviews). Busy from about 12:00 with nearby office workers; many take out (2026 reviews). Cards (VISA, Master), PayPay, d Barai (Tabelog); a September 2026 diner also paid by Rakuten Pay. 10 seats listed (counter and tables), plus terrace seats per the shop; power outlets at the counter, free microwave (Tabelog; 2026 reviews). Opened 11 October 2021 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Hakurocho 1-5-15 — 3–5 min from Sakaisuji-Hommachi Stn (Exit 3), toward Nagahoribashi',
    cuisine: 'Salad bar and sandwich shop with vegetables direct from farmers and lettuce grown in-house by indoor, pesticide-free hydroponics (10 seats) · fill-a-cup salad bar, S ¥550 or L ¥880, as long as the lid closes, one bread included · bar items change daily: lettuce, tomatoes, broccoli, edamame, seaweed, kinpira, okara salad, sweet-potato salad, potato salad with shibazuke, carrot rapée, caponata, multigrain rice, oatmeal, pasta, salad chicken, roast ham, boiled eggs, crab-stick seafood salad · breads: rice-flour muffins and steamed breads (blueberry, mango, pumpkin, brown sugar, cheese), pound cake, garlic French bread · sandwiches and bento · cold-brew coffee, tea, juice; homemade sweets',
    website: null, gmaps: gm('vege eats 博労町'), menu_url: null,
    notes: "[Café · Hakurocho, a weekday fill-your-cup salad bar] A stylish, clean weekday salad shop between Sakaisuji-Hommachi and Nagahoribashi that grows its own lettuce hydroponically indoors and buys the rest of its vegetables straight from farmers. Grab a cup at the door and fill it from the self-serve bar for ¥550 (small) or ¥880 (large) — anything goes as long as the lid shuts, and one regular says the small one makes two meals. The spread changes daily: vegetables, okara and sweet-potato salads, kinpira, caponata, multigrain rice and pasta, with salad chicken, roast ham and boiled eggs for protein. A rice-flour muffin or steamed bread comes with it, and before 10:30 a drink is included. It is a vegetable shop, not a vegetarian one: meat, fish and eggs share the bar. Crowded from noon with office workers; Utsubo Park is a walk away for a picnic.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Salad and sandwich shop that opened on 11 October 2021 (Tabelog); vegetables bought direct from farmers and lettuce grown in-house (Tabelog, shop-provided; March 2026 review).', philosophy: 'Fresh salads and filling sandwiches from farm-direct and home-grown vegetables; homemade sweets and drinks that bring out natural sweetness (Tabelog, shop-provided).', specialty: 'Fill-a-cup salad bar; rice-flour breads.',
      anecdotes: [
        { text: '"Today\'s bread is gluten-free pumpkin bread made from rice flour, with a hint of sweetness and the essence of the ingredients." — August 2026, salad bar.', source: R + 'B526544795/' },
        { text: '"Be aware that if the lid doesn\'t close, there\'s an additional charge of JPY 150." — March 2026, breakfast salad bar ¥550.', source: R + 'B524856240/' },
      ],
      japanese_sources_summary: '食べログ: vege eats、大阪市中央区博労町1-5-15、堺筋本町駅から徒歩5分、月〜金9:00〜19:00、土日祝・お盆・年末年始休み、予約可、カード (VISA、Master)・PayPay・d払い可、電子マネー不可、10席、禁煙、オープン日2021年10月11日。店の紹介: サラダとサンドイッチの専門店、野菜は農家から直接仕入れ、自家栽培も、サラダバー、自家製のスイーツとドリンク、イートインとテラス席。口コミ(2025年7月〜2026年10月): カップに詰め放題のサラダバー S 550円・L 880円、ふたが閉まらないと+150円、パンが1つ付く、10時半までは朝食でドリンク付き、ドリンク追加120円、屋内で無農薬の水耕栽培のレタス、葉野菜、トマト、ブロッコリー、枝豆、海藻、きんぴら、おからサラダ、さつまいもサラダ、柴漬けのポテトサラダ、キャロットラペ、カポナータ、雑穀米、オートミール、パスタ、サラダチキン、ローストハム、ゆで卵、カニカマの海鮮サラダ、米粉のマフィンや蒸しパン (グルテンフリーという声)、パウンドケーキ、ガーリックフランスパン、ツナサラダのサンドイッチ、水出しコーヒー、12時からは近くの会社員で混む、持ち帰りが多い、Utsubo Park でピクニックも。',
      confidence: 'medium', sources: [TB, R + 'B510864121/', R + 'B518877016/', R + 'B524250035/', R + 'B524856240/', R + 'B526544795/', R + 'B530154618/', R + 'B530154971/', R + 'B535611586/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Self-serve: take a cup at the entrance, fill it, pay at the register (2026).' },
    safety: { ...SAFETY0, positives: [
      { text: 'Reviewers describe the included bread as gluten-free rice-flour bread (brown sugar, pumpkin) — October and August 2026; not a shop statement.', source: R + 'B526544795/' },
    ], gf_cross_contamination: [
      { text: 'The bread choice also includes garlic French bread, and the shared self-serve bar holds pasta (March–April 2026 reviews).', source: R + 'B524250035/' },
      { text: 'Macaroni and fried onions on the self-serve bar (June 2026 review).', source: R + 'B530154971/' },
    ], vegan_cross_contact: [
      { text: 'Chicken, ham, boiled eggs and seafood salad sit on the same self-serve bar as the vegetables (2026 reviews).', source: R + 'B526544795/' },
    ] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区博労町1-5-15',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July 2025–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区博労町一丁目5番15号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B524856240/', R + 'B526544795/', R + 'B530154618/', R + 'B518877016/'],
    price_note: 'Prices from March–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Salad bar, small cup (one bread included)', '¥550', 'Salad bar', 'ask', 'ask', 'March–September 2026; +¥150 if the lid will not close.', 'salad_s'),
      it('', '', 'Salad bar, large cup (one bread included)', '¥880', 'Salad bar', 'ask', 'ask', 'March–April 2026.', 'salad_l'),
      it('', '', 'Breakfast salad bar with drink (to 10:30)', '¥550', 'Salad bar', 'ask', 'ask', 'September 2026; ¥500 in some March–April 2026 reviews.', 'breakfast'),
      it('', '', 'Rice-flour bread or muffin (with the salad bar)', '', 'Bread', 'ask', 'ask', 'Reviewers call it gluten-free (2026); flavours change daily.', 'riceflour_bread'),
      it('', '', 'Tuna salad sandwich with mini salad', '', 'Sandwiches', 'no', 'no', 'December 2025.', 'tuna_sand'),
    ] }, {
    cuisine: '農家から直接仕入れる野菜と、屋内の無農薬水耕栽培で自家栽培するレタスのサラダバーとサンドイッチの店 (10席)・カップに詰め放題のサラダバー、S 550円・L 880円、ふたが閉まればOK、パンが1つ付く・日替わり: レタス、トマト、ブロッコリー、枝豆、海藻、きんぴら、おからサラダ、さつまいもサラダ、柴漬けのポテトサラダ、キャロットラペ、カポナータ、雑穀米、オートミール、パスタ、サラダチキン、ローストハム、ゆで卵、カニカマの海鮮サラダ・パン: 米粉のマフィンや蒸しパン (ブルーベリー、マンゴー、かぼちゃ、黒糖、チーズ)、パウンドケーキ、ガーリックフランスパン・サンドイッチ、弁当・水出しコーヒー、紅茶、ジュース、自家製のスイーツ',
    neighborhood: '博労町1-5-15。堺筋本町駅3番出口から徒歩3〜5分、長堀橋方面',
    gf_detail: '要確認。サラダバーに付くパンは米粉のグルテンフリーのパンだという口コミ (2026年4月、8月、10月) があるが、店はグルテンフリーをうたっていない。同じ選択肢にガーリックフランスパンもあり、セルフのバーにはパスタ、マカロニ、フライドオニオンも。',
    vegan_detail: '限られます。店名とちがってベジタリアンの店ではありません。セルフのバーには自家栽培のレタス、トマト、ブロッコリー、きゅうり、枝豆、海藻、おからサラダ、雑穀米、オートミール、オリーブオイルなどの野菜と、サラダチキン、ハム、ゆで卵、ツナ、カニカマ、魚が並ぶ (2025〜2026年の口コミ)。ドレッシングやパンがヴィーガンかどうかの情報はなし。',
    notes: '[カフェ・博労町、平日のカップ詰め放題のサラダバー] 堺筋本町と長堀橋のあいだにあるおしゃれで清潔な平日だけのサラダの店。レタスは屋内の水耕栽培で自家栽培し、ほかの野菜は農家から直接仕入れる。入口でカップを取り、セルフのバーから好きなだけ詰めて S 550円、L 880円。ふたが閉まれば何でもOKで、S でも2食分になるという声も。中身は日替わりで、野菜、おからやさつまいものサラダ、きんぴら、カポナータ、雑穀米、パスタに、たんぱく質はサラダチキン、ローストハム、ゆで卵。米粉のマフィンか蒸しパンが付き、10時半までならドリンクも。野菜の店であって、ベジタリアンの店ではない。肉、魚、卵も同じバーに並ぶ。昼12時からは会社員で混み、持ち帰りも多く、Utsubo Park まで歩いてピクニックも。',
  });
}

save();
