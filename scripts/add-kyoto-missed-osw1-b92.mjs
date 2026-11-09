// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 92.
//   + 酒房菜々 Shubo Nana (one-person, Showa-style red-lantern izakaya in a Shimogyo side alley)
//   + 一保堂茶舗 京都本店 Ippodo Chaho Kyoto honten (tea merchant since 1717 with the Kaboku tea room, Teramachi-Nijo)
//   + Viva takka (Italian bar with teppan meats and choose-your-own pasta near Karasuma-Oike, opened July 2026)
//   - 京都御所南 串かつ凡, サウナの梅湯, しかしわがし 古都店: skipped (coordinator rulings and reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26043464 (skipped), 26031242 (skipped),
//   26039600 (skipped), 26030684, 26031878, 26045468. Next in lane: 26032424 ワインとハイボール ふじ屋, 26013680 喫茶ポッポ.
//   queue-status.jsonl grepped for each brand (串かつ凡, 梅湯, しかしわがし, 菜々, 一保堂, takka, 団らん): no earlier rulings.
//   Data check (current main, hidden included): none of the three drafted is in data/kyoto.json by Tabelog id, name, site
//   or address.
//   Same-name count: 酒房菜々 — one shop. 一保堂茶舗 — one family tea company; the Kyoto main shop with its tea room, other
//   shops and department-store counters elsewhere (own site) — not 5+ same-concept restaurants; drafted, flagged.
//   Viva takka — a September 2026 reviewer calls it the third shop after 京酒場 団らん (Saiin) and ネオ酒場 団らん
//   (Nishioji): a small local group of differently named shops — drafted, flagged; operator not found.
//   Service charges, checked against the Japanese original: none listed.
//   Other-diner remarks (Greg 2026-11-06): none used.
//   Halal: no operator in this batch claims halal certification.
//   JA text: 祝日 written in full; no bare 天.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-92');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26043464', '京都御所南 串かつ凡: non-local multi-brand group — Fモトアキラ株式会社 runs 串かつ凡 in Osaka, Ginza and Paris plus other brands (kitchen-dan.jp; coordinator ruling 2026-11-08, same footing as ITOH DINING)');
skip('26031242', 'サウナの梅湯: not a place to eat — a public bathhouse and sauna (entry ¥450); no restaurant');
skip('26039600', 'しかしわがし 古都店: retail food shop (Greg 11-07 ruling) — a wagashi and daifuku shop opened 2023 with no historic family ownership or GF/vegan options sourced; also no reviews dated 2025–2026 (latest November 2024)');

// ================================================================ 酒房菜々
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26030684/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_shubo_nana_yatacho', name: '酒房菜々 (Shubo Nana)', category: 'OMNI',
    lat: 35.002715, lng: 135.755596, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Obanzai, sashimi, salt-grilled wagyu, tamagoyaki and fried chicken; no gluten information (2025 review).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, wagyu, chicken, duck and egg dishes (2025 review).',
    hours_raw: 'Monday–Saturday and the days before and after public holidays 17:00–22:00; closed Sunday and public holidays; closed 28 December–4 January (Tabelog). Cards: VISA, Master, JCB, AMEX; no e-money or QR (Tabelog). 16 seats (Tabelog). Non-smoking (Tabelog). A red lantern in a narrow side alley (February 2025; September 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shimogyo — a narrow side alley',
    cuisine: 'A Showa-retro red-lantern izakaya (February 2025; September 2026) · five-kind obanzai starter; sashimi platter with excellent wasabi pickles; salt-grilled wagyu; tamagoyaki; fried chicken; duck on the menu (February 2025)',
    website: null, gmaps: gm('酒房菜々 京都'), menu_url: TB,
    notes: '[Izakaya · back-alley red lantern, run single-handed] A small, old-school red-lantern izakaya down a quiet side alley, where the owner cooks and serves alone: obanzai, sashimi, salt-grilled wagyu, tamagoyaki and fried chicken, with easy conversation at the counter. Closed Sunday and holidays.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; runs it alone)'], origin: null,
      background: 'A February 2025 reviewer describes a one-person operation, with a friendly, chatty owner cooking efficiently. No operator was found.',
      philosophy: null, specialty: 'Obanzai and sashimi.',
      anecdotes: [
        { text: 'A February 2025 group on a second round found it quiet while the main streets were packed, and chatted with a fellow guest from Kanagawa.', source: R + 'B502174478/' },
      ],
      japanese_sources_summary: '食べログ: 酒房菜々、居酒屋、下京区矢田町114-2、月〜土・祝日の前日・祝日の翌日 17:00〜22:00、日曜・祝日定休、年末年始 12月28日〜1月4日休み、カード可 (VISA・Master・JCB・AMEX)、電子マネー・QR不可、16席、禁煙。口コミ (2025〜2026年、英語): 昭和レトロ、路地の赤提灯、店主一人で切り盛り、気さくな店主、おばんざい5種、刺身の盛り合わせとわさび漬け、和牛の塩焼き、玉子焼き、唐揚げ、鴨もある。',
      confidence: 'low', sources: [TB, R + 'B502174478/', R + 'B535614398/'] },
    cultural_comfort: { level: 'japanese', note: 'Tiny local izakaya run single-handed.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区矢田町114-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated February 2025 and September 2026.' },
    pin_source: `Tabelog ${TB} (35.002715, 135.755596); cross-checked: GSI 京都府京都市下京区矢田町114番地 (lot) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B502174478/'],
    price_note: 'No prices found; budget ¥3,000–¥3,999 (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Obanzai, five kinds', '', 'Small plates', 'ask', 'no', 'February 2025.', 'obanzai'),
      it('', '', 'Sashimi platter', '', 'Sashimi', 'ask', 'no', 'February 2025.', 'sashimi'),
      it('', '', 'Salt-grilled wagyu', '', 'Grill', 'ask', 'no', 'February 2025.', 'wagyu'),
      it('', '', 'Fried chicken', '', 'Small plates', 'no', 'no', 'February 2025.', 'karaage'),
    ] }, {
    cuisine: '昭和レトロの赤提灯の居酒屋 (2025年2月、2026年9月)・おばんざい5種、わさび漬けが絶品の刺身の盛り合わせ、和牛の塩焼き、玉子焼き、唐揚げ、鴨もある (2025年2月)',
    neighborhood: '下京区。細い路地の中',
    gf_detail: '要確認。おばんざい、刺身、和牛の塩焼き、玉子焼き、唐揚げ。グルテンの情報はない (2025年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。刺身、和牛、鶏、鴨、卵の料理 (2025年の口コミ)。',
    notes: '[居酒屋・路地の赤提灯、店主一人の店] 静かな路地の小さな昔ながらの赤提灯。店主が一人で作って出す、おばんざい、刺身、和牛の塩焼き、玉子焼き、唐揚げ。カウンターでの会話も気軽。日曜・祝日定休。',
  });
}

// ================================================================ 一保堂茶舗 京都本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26031878/'; const R = TB + 'dtlrvwlst/';
  const STORE = 'https://www.ippodo-tea.co.jp/pages/store-kyoto'; const ABOUT = 'https://www.ippodo-tea.co.jp/pages/about';
  const H = day(['10:00', '17:00']);
  put({
    id: 'kyoto_ippodo_honten_kaboku', name: '一保堂茶舗 京都本店 (Ippodo Chaho Kyoto honten)', category: 'OMNI',
    lat: 35.014473, lng: 135.767425, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Teas in the Kaboku tea room come with a Japanese sweet chosen from a box of about four kinds; no ingredient information for the sweets (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Matcha, gyokuro, sencha and hojicha are plant-only, but the accompanying wagashi are not described as vegan (2026 reviews).',
    hours_raw: 'Shop and Kaboku tea room 10:00–17:00 (tea room last orders 16:30); closed the second Wednesday of each month and over New Year (own site; Tabelog). Cards and e-money; no QR (Tabelog). Non-smoking; parking (Tabelog). Takeaway drinks for strolling (own site). Tea-brewing classes upstairs (own site; Tabelog). Product prices revised in October and November 2026 (own site). On Teramachi-dori north of Nijo, about 6 min on foot from Kyoto-Shiyakusho-mae (own site; August 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Teramachi-dori north of Nijo — 6 min from Kyoto-Shiyakusho-mae',
    cuisine: 'The main shop and tea room of a Kyoto tea merchant founded in 1717 (own site) · Kaboku tea room, opened 1995: back room, counter seats and a room looking onto Teramachi-dori (own site) · usucha “Kyogoku no Mukashi” with a choice of wagashi ¥1,760 (August 2026) · koicha, gyokuro and hojicha, each with a sweet (October 2026) · cold matcha option (September 2026) · takeaway hojicha and “Frozen Uji Shimizu” (August and September 2026) · tea leaves: Kyoto-only special sencha 90 g ¥3,402; “Masaike no O” 80 g ¥1,296; kukicha ¥1,188; iri-bancha (July and September 2026)',
    website: STORE, gmaps: gm('一保堂茶舗 京都本店'), menu_url: STORE,
    notes: '[Tea room · Teramachi-Nijo, tea merchant since 1717] The historic main shop of Ippodo, in business since 1717, with its Kaboku tea room beside the sales floor: matcha, gyokuro or hojicha brewed for you and served with a seasonal sweet, plus takeaway drinks and tea leaves to buy. Busy with visitors; staff explain the teas. Closed second Wednesdays. Flagged: one family company with other shops and department-store counters.',
    chef_bio: { chef_name: null, roles: ['Tea merchant (staff unnamed)'], origin: 'Kyoto',
      background: 'Founded in 1717 as the tea and pottery shop 近江屋 by 渡辺利兵衛 (reading not sourced) from 近江; given the name 一保堂 by 山階宮 (reading not sourced) in 1846; moved to the present Teramachi-Nijo site after the shop burned in 1864; turned from tea exporter to retailer in the Taisho era; the Kaboku tea room opened in 1995 with four tables. The site says successive heads of the house have carried the shop on (own site).',
      philosophy: 'The name means “to keep to tea alone” (own site).', specialty: 'Matcha, gyokuro and hojicha.',
      anecdotes: [
        { text: 'A September 2026 visitor buying for a tea-loving friend in America was walked through gyokuro and sencha by a staff member and left with several teas.', source: R + 'B535553296/' },
        { text: 'An October 2026 family tried koicha, gyokuro and hojicha in the tea room, each served with a sweet.', source: R + 'B536577578/' },
      ],
      japanese_sources_summary: '公式サイト: 一保堂茶舗 京都本店／喫茶室 嘉木、10:00〜17:00 (喫茶L.O. 16:30)、毎月第2水曜定休、年末年始は別営業、テイクアウトあり、喫茶室は奥の間・カウンター席・寺町の間、2階でお茶の教室、2026年10月・11月に価格改定。歩み: 享保2年 (1717) 近江出身の渡辺利兵衛が「近江屋」を創業、弘化3年 (1846) 山階宮より「一保堂」の屋号を賜る、元治元年 (1864) 蛤御門の変で焼失後に寺町通二条上ルの現在地へ、明治は輸出問屋、大正に小売へ、昭和27年 阪神百貨店へ出店、平成7年 (1995) 喫茶室 嘉木オープン、代々の当主が店を受け継ぐ。食べログ: 中京区二条上ル常盤木町52、カード・電子マネー可、QR不可、禁煙。口コミ (2026年、英語): 薄茶「Kyogoku no Mukashi」と和菓子1,760円、濃茶、玉露、ほうじ茶、冷たい抹茶、テイクアウトのほうじ茶と「Frozen Uji Shimizu」、本店限定の Special Sencha 90g 3,402円、「Masaike no O」80g 1,296円、くき茶1,188円、いり番茶。',
      confidence: 'medium', sources: [STORE, ABOUT, TB, R + 'B530595537/', R + 'B531359262/', R + 'B532813056/', R + 'B534120705/', R + 'B535112869/', R + 'B535553296/', R + 'B535817362/', R + 'B536577578/'] },
    cultural_comfort: { level: 'english', note: 'Many overseas visitors; staff explain the teas.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区寺町通二条上ル常盤木町52',
    existence: { status: 'confirmed', checked: TODAY, note: 'Own site and Tabelog listing; reviews dated June to October 2026.' },
    pin_source: `Tabelog ${TB} (35.014473, 135.767425); cross-checked: GSI 京都府京都市中京区常盤木町52番地 (lot) 48m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [STORE, R + 'B532813056/', R + 'B535553296/'],
    price_note: 'Prices from 2026 reviews, before the October–November 2026 price revision (own site).', last_checked: TODAY, items: [
      it('', '', 'Usucha “Kyogoku no Mukashi” with a wagashi', '¥1,760', 'Tea room', 'ask', 'ask', 'August 2026.', 'usucha'),
      it('', '', 'Koicha with a sweet', '', 'Tea room', 'ask', 'ask', 'October 2026.', 'koicha'),
      it('', '', 'Gyokuro with a sweet', '', 'Tea room', 'ask', 'ask', 'October 2026.', 'gyokuro'),
      it('', '', 'Iri-bancha tea leaves (takeaway)', '', 'Tea leaves', 'ask', 'ask', 'July and August 2026.', 'iribancha'),
    ] }, {
    cuisine: '1717年創業の京都の茶舗の本店と喫茶室 (公式サイト)・1995年開設の喫茶室 嘉木: 奥の間、カウンター席、寺町通を望む寺町の間 (公式サイト)・薄茶「Kyogoku no Mukashi」と選べる和菓子1,760円 (2026年8月)・濃茶、玉露、ほうじ茶、それぞれ甘味付き (2026年10月)・冷たい抹茶も (2026年9月)・テイクアウトのほうじ茶と「Frozen Uji Shimizu」(2026年8・9月)・茶葉: 本店限定の Special Sencha 90g 3,402円、「Masaike no O」80g 1,296円、くき茶1,188円、いり番茶 (2026年7・9月)',
    neighborhood: '寺町通二条上ル。京都市役所前から徒歩6分',
    gf_detail: '要確認。喫茶室嘉木のお茶には4種ほどの箱から選ぶ和菓子が付く。和菓子の原材料の情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。抹茶、玉露、煎茶、ほうじ茶は植物性だが、付く和菓子はヴィーガンとは書かれていない (2026年の口コミ)。',
    notes: '[喫茶室・寺町二条、1717年創業の茶舗] 1717年創業の一保堂の本店で、売り場の隣に喫茶室 嘉木がある。抹茶、玉露、ほうじ茶を淹れてもらい季節の和菓子とともに。テイクアウトのドリンクや茶葉も買える。訪日客で賑わい、スタッフがお茶を説明してくれる。毎月第2水曜定休。ほかに店舗や百貨店の売り場もある同じ家の会社 (要確認)。',
  });
}

// ================================================================ Viva takka
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26045468/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_viva_takka_karasuma_oike', name: 'Viva takka', category: 'OMNI',
    lat: 35.010254, lng: 135.758216, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pasta, lasagna, pizza, focaccia, fried gnocco and a salmon cutlet, alongside teppan-grilled meats and salads; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Organic vegetables from Ishii Farm and a build-your-own pasta with a choice of sauce and vegetables, but nothing is described as vegan (2026 reviews).',
    hours_raw: 'Daily incl. public holidays: lunch 11:30–15:00 (last orders 14:30), dinner 17:00–23:00 (last orders 22:30) (Tabelog). Opened 22 July 2026 (Tabelog). Cards, e-money and QR incl. Alipay and WeChat Pay (Tabelog). 24 seats incl. counter and sofa seats; standing parties up to 40 (Tabelog). Non-smoking, smoking area outside; wheelchair accessible (Tabelog). Near Karasuma-Oike station (August and September 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Muromachi south of Oike — near Karasuma-Oike station',
    cuisine: 'A creative Italian bar with organic vegetables from Ishii Farm and teppan-grilled meats (July 2026) · pasta lunch ¥1,400–1,600 with appetizers, salad and bread, three sauces to choose from, smaller portions on request (July–September 2026) · assorted appetizers ¥1,500; prosciutto ¥1,100 with fried gnocco ¥500; rare salmon cutlet ¥1,300 (September 2026) · platter of three meats incl. venison; build-your-own pasta; pizza (October 2026) · sea bream and eggplant tartare; fig and mascarpone (November 2026)',
    website: null, gmaps: gm('Viva takka 京都'), menu_url: TB,
    notes: '[Italian bar · Karasuma-Oike, opened 2026] A casual Italian bar near Karasuma-Oike: pasta lunches from ¥1,400 with a choice of sauce, and in the evening teppan-grilled meat platters, creative small plates with organic vegetables and build-your-own pasta, with wine and cocktails. Open daily. Flagged: third shop of a small local group (京酒場 団らん, ネオ酒場 団らん); operator not found.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Opened on 22 July 2026 (Tabelog). A September 2026 reviewer calls it the third shop after the izakaya 京酒場 団らん in Saiin and ネオ酒場 団らん on Nishioji. No operator was found.',
      philosophy: null, specialty: 'Teppan-grilled meat platters; choose-your-own pasta.',
      anecdotes: [
        { text: 'An October 2026 diner was surprised to find venison alongside beef and pork on the three-meat platter, and enjoyed picking every element of a custom pasta.', source: R + 'B537899808/' },
      ],
      japanese_sources_summary: '食べログ: Viva takka、イタリアン、中京区室町通御池下る円福寺町342-1 VOISE21ビル 1F、毎日 11:30〜15:00 (L.O. 14:30)・17:00〜23:00 (L.O. 22:30)、2026年7月22日オープン、カード・電子マネー・QR (Alipay、WeChat Pay含む) 可、24席、立食40名、禁煙 (店外に喫煙所)、車椅子可。口コミ (2026年、英語): Ishii Farm の有機野菜と鉄板焼きの肉の創作イタリアンバル、パスタランチ1,400〜1,600円 (前菜、サラダ、パン、3種のソースから選ぶ)、前菜の盛り合わせ1,500円、生ハム1,100円とニョッコフリット500円、レアサーモンカツ1,300円、鹿肉入りの3種の肉の盛り合わせ、カスタムパスタ、ピザ、鯛と茄子のタルタル、イチジクとマスカルポーネ、京酒場 団らん (西院)・ネオ酒場 団らん (西大路) に続く3店舗目。',
      confidence: 'low', sources: [TB, R + 'B532735456/', R + 'B532912738/', R + 'B533095066/', R + 'B534938272/', R + 'B535863522/', R + 'B536720615/', R + 'B537899808/', R + 'B538558826/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual; many payment options incl. Alipay and WeChat Pay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区室町通御池下る円福寺町342-1 VOISE21ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; opened July 2026; reviews dated July to November 2026.' },
    pin_source: `Tabelog ${TB} (35.010254, 135.758216); cross-checked: GSI 京都府京都市中京区円福寺町342番地 (lot) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536720615/', R + 'B532735456/'],
    price_note: 'Prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Pasta lunch with appetizers, salad and bread', '¥1,400', 'Lunch', 'no', 'ask', 'July and August 2026; ¥1,600 with a drink (September 2026).', 'pasta_lunch'),
      it('', '', 'Assorted appetizers', '¥1,500', 'Starters', 'ask', 'ask', 'September 2026.', 'antipasti'),
      it('', '', 'Prosciutto with fried gnocco', '¥1,600', 'Starters', 'no', 'no', 'September 2026: ¥1,100 + ¥500.', 'prosciutto'),
      it('', '', 'Rare salmon cutlet', '¥1,300', 'Mains', 'no', 'no', 'September 2026.', 'salmon'),
      it('', '', 'Three-meat platter (beef, pork, venison)', '', 'Teppan', 'ask', 'no', 'October 2026.', 'carne_misto'),
    ] }, {
    cuisine: 'Ishii Farm の有機野菜と鉄板焼きの肉の創作イタリアンバル (2026年7月)・パスタランチ1,400〜1,600円、前菜・サラダ・パン付き、3種のソースから選べ、少なめも可 (2026年7〜9月)・前菜の盛り合わせ1,500円、生ハム1,100円とニョッコフリット500円、レアサーモンカツ1,300円 (2026年9月)・鹿肉入りの3種の肉の盛り合わせ、カスタムパスタ、ピザ (2026年10月)・鯛と茄子のタルタル、イチジクとマスカルポーネ (2026年11月)',
    neighborhood: '御池の南、室町通。烏丸御池駅の近く',
    gf_detail: '要確認。パスタ、ラザニア、ピザ、フォカッチャ、ニョッコフリット、サーモンカツに、鉄板焼きの肉やサラダ。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。Ishii Farm の有機野菜や、ソースと野菜を選べるパスタがあるが、ヴィーガンと書かれた品はない (2026年の口コミ)。',
    notes: '[イタリアンバル・烏丸御池、2026年開店] 烏丸御池近くの気軽なイタリアンバル。昼はソースを選べる1,400円からのパスタランチ、夜は鉄板焼きの肉の盛り合わせ、有機野菜の創作小皿、具材を選べるパスタを、ワインやカクテルとともに。毎日営業。地元の小さなグループ (京酒場 団らん、ネオ酒場 団らん) の3店舗目 (要確認)。運営会社は不明。',
  });
}

save();
