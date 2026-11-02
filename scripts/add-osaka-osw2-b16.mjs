// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first — worker osw2, batch 16 (lane: Tabelog id mod 4 = 1).
//   + なにわ寿し 本店 Naniwa Zushi (casual sushi izakaya by Namba Stn, opened October 2025; the 十忠八九 group's sushi shop)
//   + 焼肉 ホルモン 鍵矢 YAKINIKU KAGIYA (basement yakiniku in Higashi-Shinsaibashi: fresh offal, A5 wagyu, thick tongue; open to 3 AM)
//   + 魚と炭と鉄板と ととと Tototo (seafood izakaya with straw-fire "warayaki", charcoal and teppan cooking and local sake)
//   Skipped (lane order):
//   - 博多もつ鍋大山 心斎橋店 27040981 — chain: おおやま "has 21 shops nationwide", reaching Tokyo, Osaka and Aichi (gltjp.com entry for
//     博多もつ鍋 おおやま 本店, checked by the venue; read 2026-11-02).
//   - 日本一の串かつ 横綱 難波南海通り店 27143345 — chain (5+): 新世界本店 (株式会社HASSIN press release, April 2021), 通天閣店
//     (gltjp.com/ja/directory/item/14543), 難波南海通り店 (r.gnavi.co.jp/b5ym7h460000), 難波南海通り別館 (r.gnavi.co.jp/kefs804),
//     梅田東通り店 (r.gnavi.co.jp/rspea19t0000); per the coordinator's batch-16 review.
//   - 元祖串かつ だるま なんば本店 27012813 — chain: the official location list names about eighteen だるま shops (なんば本店, 道頓堀店,
//     心斎橋店, 法善寺店, 通天閣店, 新世界総本店, KITTE大阪店 …; kushikatu-daruma.com/location, read 2026-11-02). The だるま in data
//     (osaka_shisen_tantanmen_daruma_senba) is an unrelated tantanmen shop.
//   Chain check of the three kept:
//   - Naniwa Zushi: one of ten 十忠八九 group shops (Tabelog: "Juchu Hakkyu Group - 10 Locations in Total"); the group's only なにわ寿し.
//     Group shops in data are other concepts (an izakaya, a robata, a café: osaka_minami_no_jucchu_hakku_namba,
//     osaka_naniwa_robata_toyo_kobayashi_namba, osaka_monday_vibes_coffee_namba) — a sister concept under the 2026-11-02 ruling.
//   - Kagiya: one shop (Tabelog).
//   - Tototo: one shop (Tabelog).
//   None is in data/osaka.json (grep by name, romaji and address, 2026-11-02). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw2-16');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27040981', 'Chain: 博多もつ鍋 おおやま has 21 shops nationwide (gltjp.com entry for the main shop).');
skip('27012813', 'Chain: 串かつ だるま has about eighteen shops (kushikatu-daruma.com/location).');
skip('27143345', 'Chain: 日本一の串かつ 横綱 (株式会社HASSIN) has 5+ shops: 新世界本店 (HASSIN press release, 2021), 通天閣店 (gltjp.com/ja/directory/item/14543), 難波南海通り店 (r.gnavi.co.jp/b5ym7h460000), 難波南海通り別館 (r.gnavi.co.jp/kefs804) and 梅田東通り店 (r.gnavi.co.jp/rspea19t0000).');

// ================================================================ なにわ寿し 本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27151469/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const GROUP = 'https://lit.link/10chu89';
  const H = day(['12:00', '22:00']);
  put({
    id: 'osaka_naniwa_zushi_honten_namba', name: 'なにわ寿し 本店 (Naniwa Zushi Honten)', category: 'OMNI',
    lat: 34.666336, lng: 135.498856, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sushi is brushed with soy sauce (October 2026 review), and the menu also has hand rolls, fried and simmered dishes and hot pot (Tabelog menu).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi and seafood izakaya; no vegan options are described.',
    hours_raw: 'Daily 12:00–22:00 (last order 21:30); closed over the year-end and New Year (Tabelog). Reservations taken, counter seats included; 2-hour limit when busy; large groups by phone (Tabelog; October 2026 reviews). Market fish ordered by voice, the rest by QR code or phone (October 2026 reviews). Cards (incl. UnionPay), transport IC and other e-money, PayPay. 57 seats over three floors (counter on the first; tables on the second and third); non-smoking (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 4-8-8 — 2 min from Namba Stn (Midosuji Line), Osaka-Namba (Kintetsu) and Nankai Namba',
    cuisine: 'Casual Osaka-style sushi izakaya with fish from the market (Tabelog): nigiri priced per two pieces from ¥110 (Tabelog menu, October 2026), sashimi, hand rolls, seasonal items such as cod milt ponzu and gunkan, tiger-fugu sashimi and nigiri, simmered fish head; a signature chawanmushi the size of a ramen bowl; crab-miso tofu; chirashi lunch with red miso soup (reviews) · banquet courses ¥2,000–5,500 with sashimi and hot pot',
    website: TB, gmaps: gm('なにわ寿し 本店 難波'), menu_url: M,
    notes: "[Sushi · Namba, cheap two-piece nigiri by the station] A casual three-floor sushi izakaya two minutes from Namba Station, opened in October 2025 by the ten-shop 十忠八九 group and open from noon. Nigiri come two to a plate at low prices, brushed with soy sauce, and diners in October 2026 come back for the fresh fish, the crab-miso tofu and a chawanmushi served in a bowl the size of a ramen bowl. Unlike many cheap sushi places it takes bookings, counter included. Ordering mixes voice for the day's market fish and QR or phone for the rest; an October diner found the staff bright and cheerful.",
    chef_bio: { chef_name: null, roles: ['Sushi staff unnamed; a shop of the 十忠八九 group (Tabelog; group page)'], origin: null, background: 'Per Tabelog, the shop serves market-fresh seafood as sushi and seasonal dishes on the main street of the entertainment district, opened on 10 October 2025, and belongs to the 十忠八九 group of ten shops. The group page (lit.link) lists なにわ寿し 本店 in Namba among its shops.', philosophy: null, specialty: 'Two-piece nigiri; giant chawanmushi.',
      anecdotes: [
        { text: '"While there are many places in Osaka with reasonably priced sushi and large portions, the biggest advantage of this restaurant is that you can make a reservation." — October 2026, fourth visit.', source: R + 'B520542937/' },
        { text: '"The signature chawanmushi (savory egg custard) is surprisingly served in a ramen bowl size." — October 2026.', source: R + 'B537927187/' },
        { text: '"Applying soy sauce with a brush is a unique experience that you don’t find everywhere, adding a special touch!" — October 2026.', source: R + 'B538220720/' },
        { text: '"It\'s affordable, quick, and delicious! The staff were bright and cheerful." — October 2026.', source: R + 'B538140517/' },
      ],
      japanese_sources_summary: '十忠八九グループ (lit.link): なにわ寿し 本店 (難波) を含む10店。食べログ (英語版): なにわ寿し 本店、難波4-8-8、各線なんば駅から徒歩2分、2025年10月10日オープン、毎日12:00〜22:00 (L.O.21:30)、年末年始休み、57席、禁煙、市場直送の魚の大阪寿司と季節の料理、昼飲み、2・3階にテーブルと団体席、宴会コース2,000〜5,500円 (刺身、鍋)、十忠八九グループ全10店。メニュー (2026年10月): にぎりは2貫で110円〜、白子ポン酢、白子の軍艦、とらふぐの刺身とにぎり、てっぴ、明太なめこの手巻き、あら煮。口コミ (2026年10月〜11月): 2貫ずつの大きなネタ、かつおのたたき、ラーメン鉢ほどの名物の茶碗蒸し、蟹味噌豆腐、ちらし寿司と赤だしのランチ、刷毛でしょうゆを塗る、市場直送の魚は口頭、ほかはQRコード、予約できるのが強み、スタッフが明るくてきぱき。',
      confidence: 'medium', sources: [TB, M, GROUP, R + 'B515744421/', R + 'B519892493/', R + 'B520542937/', R + 'B536726886/', R + 'B537143556/', R + 'B537210964/', R + 'B537927187/', R + 'B538140517/', R + 'B538220720/', R + 'B538509415/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Orders by QR code or phone, market fish by voice (October 2026). No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波4-8-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with an October 2026 menu; reviews dated through November 2026; listed on the group page.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波四丁目8番8号 (go) 7m. Nearest record (osaka_rakuraku_za_namba, "…難波4-8-11", a different building) is about 16 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [M, TB],
    price_note: 'Tabelog menu last updated October 2026; nigiri priced per two pieces. Diners report ¥1,000–7,999 a head.', last_checked: TODAY, items: [
      it('', '', 'Nigiri of shirasu and kaiware or Matsumae-zuke, two pieces', '¥187', 'Nigiri', 'ask', 'no', 'Cheapest nigiri band ¥110.', 'nigiri'),
      it('', '', 'Tiger-fugu sashimi', '¥1,298', 'Seasonal', 'ask', 'no', 'Autumn 2026.', 'tessa'),
      it('', '', 'Cod milt gunkan, two pieces', '¥1,628', 'Seasonal', 'ask', 'no', 'Autumn 2026.', 'shirako_gunkan'),
    ] }, {
    cuisine: '市場直送の魚の気軽な大阪寿司の居酒屋 (食べログ): にぎりは2貫で110円から (食べログのメニュー、2026年10月)、刺身、手巻き、白子ポン酢や軍艦などの季節のもの、とらふぐの刺身とにぎり、あら煮。ラーメン鉢ほどの名物の茶碗蒸し、蟹味噌豆腐、赤だし付きのちらし寿司のランチ (口コミ)・刺身と鍋の宴会コース2,000〜5,500円',
    neighborhood: '難波4-8-8。なんば駅 (御堂筋線)、大阪難波駅 (近鉄)、南海なんば駅から徒歩2分',
    gf_detail: '要確認。グルテンの情報なし。寿司には刷毛でしょうゆを塗る (2026年10月の口コミ)。手巻き、揚げ物、煮付け、鍋もある (食べログのメニュー)。',
    vegan_detail: 'ヴィーガンではありません。寿司と魚介の居酒屋で、ヴィーガンの選択肢の説明はない。',
    notes: '[寿司・難波、駅近の安い2貫にぎり] なんば駅から2分、10店の十忠八九グループが2025年10月に開いた3階建ての気軽な寿司居酒屋で、昼12時から開く。にぎりは2貫ずつで安く、刷毛でしょうゆを塗って出す。2026年10月の客は新鮮な魚、蟹味噌豆腐、ラーメン鉢ほどの茶碗蒸しを目当てに通う。安い寿司屋には珍しくカウンターも予約できる。注文は市場直送の魚は口頭、ほかはQRコードやスマホで、スタッフは明るいという声も。',
  });
}

// ================================================================ 焼肉 ホルモン 鍵矢
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27115265/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const W = day(['17:00', '03:00']); const S = day(['17:00', '23:30']);
  put({
    id: 'osaka_yakiniku_kagiya_higashishinsaibashi', name: '焼肉 ホルモン 鍵矢 (YAKINIKU KAGIYA)', category: 'OMNI',
    lat: 34.674511, lng: 135.503403, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Meats come with salt or sauce, the raw dishes with sweet soy or chojang, and the menu has kasu udon (Tabelog menu; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakiniku and offal restaurant; kimchi and kakuteki are sides and are not described.',
    hours_raw: 'Mon–Sat 17:00–03:00 (last food order 02:00, drinks 02:30); Sun 17:00–23:30 (last order 23:00); closed over the year-end and New Year (Tabelog). Reservations taken; 2-hour seating, last order 30 minutes before the end (Tabelog). A service charge is added (Tabelog). Cards, transport IC and other e-money, QR incl. Alipay and WeChat Pay. 39 table seats (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-12-14, ZELKOVAビル B1F — 3 min from Shinsaibashi and Nagahoribashi Stns',
    cuisine: 'Yakiniku of fresh offal and A5 black wagyu at reasonable prices, "a yakiniku restaurant favoured by other yakiniku shops" (Tabelog): heart sashimi, raw omasum with chojang, seared yukhoe, beef-tongue yukhoe, thick-cut and toro tongue, outside skirt by the 100 g, about 20 kinds of offal (techan, akasen, korikori, liver), seared liver, yaki-shabu dipped in egg, kasu udon (Tabelog menu, September 2026; reviews) · about 80 drinks; all-you-can-drink courses',
    website: TB, gmaps: gm('焼肉 ホルモン 鍵矢 東心斎橋'), menu_url: M,
    notes: "[Yakiniku · Higashi-Shinsaibashi, fresh offal and thick tongue until 3 AM] A basement yakiniku three minutes from Shinsaibashi Station, open since December 2019, serving fresh offal and A5 wagyu chosen by the owner, with about twenty cuts of horumon, heart sashimi and very thick tongue. Regulars call it one of the best yakiniku in Minami and love the grilled liver and salted cuts; a September and an October 2026 diner, by contrast, found the staff unsmiling and the portions small, and neither planned to return. Open until 3 AM except Sundays.",
    chef_bio: { chef_name: null, roles: ['Owner unnamed, who selects the meat (reviews; Tabelog)'], origin: null, background: 'Per Tabelog, the catchphrase is "quality at a great price", with fresh offal and A5 black wagyu every day, custom cuts and about 80 drinks; opened 10 December 2019. An August 2026 regular has come since it opened.', philosophy: '"Quality at a great price" (Tabelog).', specialty: 'Fresh offal; thick-cut tongue; A5 wagyu yukhoe.',
      anecdotes: [
        { text: '"Considering the deliciousness, value for money, and variety, this is the first place I would call when I want to have yakiniku in Minami." — August 2026, third visit.', source: R + 'B470078637/' },
        { text: '"I\'ve been a fan since it opened and have been coming back ever since." — August 2026.', source: R + 'B534618687/' },
        { text: '"However, the quality of service was lacking." — September 2026.', source: R + 'B536036071/' },
        { text: '"I was surprised that the meat portions were quite small overall!" — October 2026.', source: R + 'B538182402/' },
      ],
      japanese_sources_summary: '日本語の情報源は未確認。食べログ (英語版): 焼肉 ホルモン 鍵矢、東心斎橋1-12-14 ZELKOVAビル B1F、心斎橋駅・長堀橋駅から徒歩3分、2019年12月10日オープン、月〜土17:00〜翌3:00、日17:00〜23:30、年末年始休み、2時間制、サービス料あり、39席、「良いものをお値打ちに」、新鮮なホルモンとA5黒毛和牛、焼肉店も通う焼肉店、ドリンク約80種。メニュー (2026年9月): ハツ刺し、生センマイ (自家製チョジャン)、炙りユッケ風、牛タンユッケ、タン、上タン、厚切りタン、厚切りトロタン、ハラミ、上ハラミ。口コミ (2025年5月〜2026年10月): ミナミで3本の指に入る、開店から通う常連、レバー焼き、ハラミ、リブロース、ホルモン約20種 (テッチャン、アカセン、コリコリ、レバー)、焼きしゃぶを卵で、厚切りタン、店員に笑顔がない・量が少ないという声もあり再訪しないという客も (9月、10月)。',
      confidence: 'medium', sources: [TB, M, R + 'B470078637/', R + 'B533362145/', R + 'B533408553/', R + 'B533515766/', R + 'B534144301/', R + 'B534227802/', R + 'B534618687/', R + 'B536036071/', R + 'B536359295/', R + 'B538182402/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pays with Alipay and WeChat Pay (Tabelog). No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-12-14 ZELKOVAビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with a September 2026 menu; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目12番14号 (go) 5m. Nearest record (osaka_hong_kong_kaisen_yumcha_shinsaibashi, "…東心斎橋1-12-17", a different building) is about 18 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [M, TB],
    price_note: 'Tabelog menu last updated September 2026, tax included; a service charge is added. Diners report ¥4,000–14,999 a head.', last_checked: TODAY, items: [
      it('', '', 'Thick-cut tongue', '¥1,628', 'Tongue', 'ask', 'no', 'Salted green onion +¥180.', 'thick_tongue'),
      it('', '', 'Heart sashimi with sweet soy', '¥822', 'Raw dishes', 'no', 'no', '', 'hatsu_sashi'),
      it('', '', 'Beef-tongue yukhoe', '¥1,537', 'Raw dishes', 'ask', 'no', '', 'tongue_yukhoe'),
      it('', '', 'Outside skirt (salt or sauce)', '¥1,298', 'Outside skirt', 'ask', 'no', 'Premium ¥1,738.', 'harami'),
    ] }, {
    cuisine: '新鮮なホルモンとA5黒毛和牛をお値打ちに出す焼肉店、「焼肉店も通う焼肉店」(食べログ): ハツ刺し、チョジャンで食べる生センマイ、炙りユッケ、牛タンユッケ、厚切りタンとトロタン、100g単位のハラミ、約20種のホルモン (テッチャン、アカセン、コリコリ、レバー)、炙りレバー、卵で食べる焼きしゃぶ、かすうどん (食べログのメニュー、2026年9月、口コミ)・ドリンク約80種、飲み放題付きコース',
    neighborhood: '東心斎橋1-12-14 ZELKOVAビル B1F。心斎橋駅・長堀橋駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。肉は塩かタレ、生ものは甘いしょうゆやチョジャンで、かすうどんもある (食べログのメニュー、口コミ)。',
    vegan_detail: 'ヴィーガンではありません。焼肉とホルモンの店で、キムチやカクテキはサイド。説明はない。',
    notes: '[焼肉・東心斎橋、朝3時までの新鮮なホルモンと厚切りタン] 心斎橋駅から3分、2019年12月オープンの地下の焼肉店。店主が選ぶ新鮮なホルモンとA5和牛を出し、ホルモンは約20種、ハツ刺し、とても厚いタン。常連はミナミでも指折りの焼肉と呼び、レバー焼きや塩の部位を愛する。一方、2026年9月と10月の客は店員に笑顔がなく量も少ないと感じ、再訪はないと書く。日曜以外は朝3時まで。',
  });
}

// ================================================================ 魚と炭と鉄板と ととと
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27137333/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const H = day(['17:00', '23:30']);
  put({
    id: 'osaka_sakana_sumi_teppan_tototo', name: '魚と炭と鉄板と ととと (Sakana to Sumi to Teppan to Tototo)', category: 'OMNI',
    lat: 34.670181, lng: 135.502258, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Straw-grilled and charcoal-grilled fish, sashimi and clay-pot rice sit beside tempura and teppan dishes (Tabelog menu; reviews); sauces are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood izakaya; no vegan options are described.',
    hours_raw: 'Daily 17:00–23:30 (last food order 22:30); closing days may vary (Tabelog). Reservations taken; tables may not be held more than 30 minutes late without a call (Tabelog). No service charge. Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR. 32 seats: 16 at the counter, 16 at partitioned tables; no smoking at tables, a smoking area inside (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinsaibashisuji 2-3-2, クイーンズコートビル本館 103 — 3 min from Namba Stn; 5 min from Shinsaibashi Stn',
    cuisine: 'Seafood izakaya by skilled Japanese-cuisine cooks: the signature warayaki, fish seared over a blazing straw fire in front of the counter (bonito, "Kenkensuke" bonito, Spanish mackerel, local chicken), aged sashimi, charcoal-grilled fish, teppan dishes, oden with yuzu, clay-pot rice such as matsutake and sea bream (Tabelog; reviews) · fish by origin from the menu (Aomori bluefin, Nagasaki swordtip squid and nodoguro, Hokkaido uni, Awaji hamo) served several ways (Tabelog menu, 2025) · over 20 premium local sakes; omakase courses from ¥9,800',
    website: TB, gmaps: gm('魚と炭と鉄板と ととと 心斎橋筋'), menu_url: M,
    notes: "[Izakaya · Shinsaibashi-suji, straw-fire seafood and local sake] A grown-up seafood izakaya in the Queens Court building on Shinsaibashi-suji, opened in July 2023, where the show is warayaki: bonito and other fish seared over a burst of straw flame in front of the wooden counter. Aged sashimi, charcoal-grilled fish, teppan dishes and clay-pot rice follow, with over twenty local sakes. Diners in October 2026 call it a hidden gem and note it was named a Tabelog Hot Restaurant two years running; most take the ¥9,800 omakase course, which changes daily.",
    chef_bio: { chef_name: null, roles: ['Japanese-cuisine cooks, unnamed (Tabelog)'], origin: null, background: 'Per Tabelog, dishes are made by skilled Japanese-cuisine cooks from carefully selected ingredients, the specialty being warayaki of "Kenkensuke" bonito and local chicken; opened 20 July 2023. Two October 2026 reviews say it was chosen as a Tabelog "Hot Restaurant", one says for two consecutive years.', philosophy: null, specialty: 'Warayaki (straw-fire searing) of bonito.',
      anecdotes: [
        { text: '"Flames rising right in front of me during the straw-grilling performance." — October 2026, omakase course.', source: R + 'B538147600/' },
        { text: '"The squid, in particular, had an astonishingly creamy texture that was both sweet and unforgettable—definitely a must-try!" — October 2026.', source: R + 'B537122872/' },
        { text: '"From the counter seats, which exude warmth from the wood, you can watch the cooking process, making for an exciting dining experience." — October 2026.', source: R + 'B537808556/' },
      ],
      japanese_sources_summary: '日本語の情報源は未確認。食べログ (英語版): 魚と炭と鉄板と ととと、心斎橋筋2-3-2 クイーンズコートビル本館 103、なんば駅から徒歩3分、2023年7月20日オープン、毎日17:00〜23:30 (L.O.22:30)、不定休、32席 (カウンター16、仕切りのあるテーブル16)、テーブルは禁煙で店内に喫煙所、サービス料なし、名物は藁焼き (Kenkensuke のかつおや地鶏)、和食の職人の創作料理、20種以上の地酒、おまかせ上コース9,800円 (日替わり)。メニュー (2025年10月): 刺身とにぎり、青森の本まぐろ、長崎の剣先いかとのどぐろ、北海道のうに、淡路のはも、千葉の金目鯛、鴨ロースの煮込み、炭火焼きの明太子。口コミ (2026年10月): 藁焼きのかつおとさわら、炎が目の前で上がる、熟成の刺身、とろりと甘いいか、柚子の香るおでん、土鍋の松茸と鯛、木のカウンターから調理が見える、食べログのホットレストラン (2年連続という声も)、おまかせコース9,800〜9,900円。',
      confidence: 'medium', sources: [TB, M, R + 'B536872501/', R + 'B537110378/', R + 'B537122872/', R + 'B537231666/', R + 'B537247332/', R + 'B537808556/', R + 'B538147600/', R + 'B538393460/', R + 'B538395411/', R + 'B538442639/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-3-2 クイーンズコートビル本館 103',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目3番2号 (go) 15m. Same building as 鮨 あかす (osaka_sushi_akasu_shinsaibashi, "…クイーンズコートビル 本館 2F"), whose pin is about 21 m from this one, so not stacked; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [M, TB, R + 'B538442639/'],
    price_note: 'Tabelog menu last updated October 2025; many fish are priced by the day. Omakase courses ¥9,800–9,900 (October 2026). Diners report ¥3,000–14,999 a head.', last_checked: TODAY, items: [
      it('', '', 'Omakase course (changes daily)', '¥9,800', 'Courses', 'ask', 'no', 'October 2026; another diner paid ¥9,900 for the premium course.', 'omakase_course'),
      it('', '', 'Omakase sashimi, 5 nigiri', '¥3,000', 'Sashimi or sushi', 'ask', 'no', 'Menu 2025.', 'sashimi_nigiri'),
      it('', '', 'Straw-grilled bonito (warayaki)', '', 'Specialty', 'ask', 'no', 'Price not listed.', 'warayaki'),
      it('', '', 'Charcoal-grilled mentaiko with grated daikon', '¥1,000', 'Small dishes', 'ask', 'no', 'Menu 2025.', 'yaki_mentaiko'),
    ] }, {
    cuisine: '和食の職人による魚の居酒屋: 名物はカウンターの前で藁の炎であぶる藁焼き (かつお、Kenkensuke のかつお、さわら、地鶏)、熟成の刺身、炭火焼きの魚、鉄板料理、柚子の香るおでん、松茸や鯛の土鍋ごはん (食べログ、口コミ)・産地ごとの魚 (青森の本まぐろ、長崎の剣先いかとのどぐろ、北海道のうに、淡路のはも) をいろいろな食べ方で (食べログのメニュー、2025年)・20種以上の地酒、おまかせコース9,800円〜',
    neighborhood: '心斎橋筋2-3-2 クイーンズコートビル本館 103。なんば駅から徒歩3分、心斎橋駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。藁焼きや炭火焼きの魚、刺身、土鍋ごはんのほか、天ぷらや鉄板料理もある (食べログのメニュー、口コミ)。たれの説明はない。',
    vegan_detail: 'ヴィーガンではありません。魚の居酒屋で、ヴィーガンの選択肢の説明はない。',
    notes: '[居酒屋・心斎橋筋、藁の炎の魚と地酒] 心斎橋筋のクイーンズコートビルにある大人の魚の居酒屋で、2023年7月オープン。見せ場は藁焼きで、木のカウンターの前で藁の炎がぱっと上がり、かつおなどをあぶる。熟成の刺身、炭火焼きの魚、鉄板料理、土鍋ごはんが続き、地酒は20種以上。2026年10月の客は隠れ家と呼び、食べログのホットレストランに2年続けて選ばれたと書く。多くは日替わりの9,800円のおまかせコースを選ぶ。',
  });
}

save();
