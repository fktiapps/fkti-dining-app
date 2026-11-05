// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 2.
//   core (queue.mjs kyoto-missed next core 200, 2026-11-05, first two ids in the lane):
//   + 炭焼 やないの Sumiyaki Yanaino (charcoal fish and pork-roll skewers in Ura-Teramachi; since 2020)
//   + だいあん 河原町木屋町店 Diane (Kiyamachi izakaya known for all-you-can-eat shrimp shabu-shabu)
//   notable (queue.mjs kyoto-missed next notable 200, first two ids in the lane):
//   + RESTAURANT hidamarino (chef ますむら's French by Shijo Karasuma, wine and Kyoto-tea pairings)
//   + カフェ 火裏蓮花 Cafe Karirenge (curry and cakes in a ~150-year-old machiya down an alley)
//   None is in data/kyoto.json: grep by id, name (やないの/Yanaino, だいあん/Diane, hidamarino/ヒダマリーノ,
//   火裏蓮花/カリレンゲ/Karirenge) and address (裏寺町607, 紙屋町674, 高材木町218, 柳八幡町74) found none.
//   Group check: だいあん 河原町木屋町店 is run by 株式会社ＣＲＯＷＮ (Sakai, Osaka; invoice T9120001167719, NTA
//   corporate-number site); web searches (Gurunavi, Hot Pepper) found no other だいあん shop, so drafted.
//   hidamarino has one sister shop, komorebino natural wine bar (Tabelog), a different format: drafted.
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-2');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 炭焼 やないの
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26035017/'; const R = TB + 'dtlrvwlst/';
  const MENU = TB + 'dtlmenu/'; const DRINK = TB + 'dtlmenu/drink/';
  const INV = 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=5810987310522';
  const H = day(['16:00', '22:30']); const SUN = day(['15:00', '22:00']);
  put({
    id: 'kyoto_sumiyaki_yanaino', name: '炭焼 やないの (Sumiyaki Yanaino)', category: 'MOM_AND_POP',
    lat: 35.004800, lng: 135.767944, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Skewers are mostly salted, but the menu also has ponzu, soy-marinated and fried dishes (chikuwa tempura, kara-age) and oyster soy sauce; no gluten information is published (Tabelog menu, May 2026).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Fish and pork skewers make up most of the menu; vegetable skewers (lotus root, ginkgo, broad beans, zucchini) appear in 2025–26 reviews, but their seasoning is not stated.',
    hours_raw: '16:00–22:30 Monday, Tuesday, Wednesday, Friday and Saturday; 15:00–22:00 Sunday; closed Thursday and on some other days (Tabelog). Bookings taken; parties over two hours by arrangement; the 2nd-floor tatami room seats 5–8 and can be booked (Tabelog). 16 seats (8 at the counter, 8 on tatami); smoking allowed at the seats (Tabelog; January and August 2026); cards, no e-money or QR (Tabelog). English menu (Tabelog). Hard to find: a December 2025 diner phoned and staff came out to guide the way. 3 min walk from Hankyu Kyoto Kawaramachi Stn (Tabelog). Opened 12 November 2020 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: SUN }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ura-Teramachi just north of Shijo — 3 min from Kyoto Kawaramachi Stn',
    cuisine: 'Charcoal-grill izakaya of fish and pork skewers rather than chicken (a January 2026 diner notes that no yakitori is served) · skewers from one piece: kombu-cured mackerel ¥420, seasonal pork rolls ¥350, shishamo ¥280, salmon belly ¥300, kuruma prawn ¥420, oyster with sudachi ponzu ¥420, spicy cod roe ¥330, Kyotanba highland pork steak ¥350 · sashimi such as flounder ¥1,400, amberjack ¥1,300, yokowa ¥1,200 · smoked-mackerel macaroni salad ¥580, house-stuffed chikuwa tempura ¥600, chicken-breast chashu ¥750, salted kara-age ¥750, Stuffed Squid from Kesennuma ¥800, namero of the day’s fish ¥880 · tatami-iwashi ¥400, dried red sea bream ¥1,200 · egg-yolk rice ¥500, Yanaino Two-Color Rice Bowl ¥1,580, shijimi soup ¥380 (Tabelog menu, May 2026) · pork rolled with Kujo green onion, shiso or lettuce (2025–26 reviews) · homemade pickled sours (mandarin, ginger, myoga) ¥650, draft beer ¥600, many sakes by the glass (Tabelog drink menu, May 2026)',
    website: null, gmaps: gm('炭焼 やないの 京都 裏寺町'), menu_url: MENU,
    notes: "[Izakaya · Ura-Teramachi, charcoal skewers of fish and pork] A small charcoal-grill izakaya down Ura-Teramachi, with eight counter seats in front of the grill and a tatami room upstairs. The skewers are fish and pork, not chicken: kombu-cured mackerel, oysters with sudachi ponzu, kuruma prawn, and pork rolled round seasonal vegetables — Kujo green onion, shiso, lettuce. The smoked-mackerel macaroni salad is the house's must-order, and the sashimi comes with generous wasabi and ginger. Skewers from ¥280; a May 2026 table found the value excellent, a June 2026 pair paid ¥13,000 for a light meal. Smoking is allowed. Closed Thursday.",
    chef_bio: { chef_name: '木村 高行', roles: ['Owner (the invoice holder)'], origin: null,
      background: 'The invoice register lists an individual, 木村 高行, as the holder of the shop’s invoice number (registered 1 October 2023). Opened 12 November 2020 (Tabelog). Staff explain the dishes in detail (December 2025).',
      philosophy: null, specialty: 'Pork-roll skewers; kombu-cured mackerel skewer; smoked-mackerel macaroni salad.',
      anecdotes: [
        { text: 'A December 2025 diner could not find the door, phoned, and was met outside by the staff.', source: R + 'B519937362/' },
        { text: 'A January 2026 diner liked the food but left early because of smokers, and was seated by the cold entrance with only one other group in.', source: R + 'B520280331/' },
        { text: 'A May 2026 diner noted generous wasabi and ginger with the sashimi, and tonteki served with mustard.', source: R + 'B529851225/' },
      ],
      japanese_sources_summary: '食べログ: 串焼き・居酒屋・魚介料理、中京区裏寺町607-18、阪急「河原町」駅から約3分、月・火・水・金・土 16:00〜22:30、日 15:00〜22:00、木曜休み・不定休、予約可、2階の座敷 (5〜8名) 予約可、16席 (カウンター8、座敷8)、喫煙可、カード可・電子マネー・QR 不可、英語メニューあり、2020年11月12日オープン、メニュー (英語版、2026年5月更新): 鯖 (昆布〆) 420円、季節の豚巻き350円、子持ちししゃも280円、鮭ハラス300円、車海老420円、牡蠣 (すだちポン酢) 420円、明太子330円、Kyotanba highland pork のトンテキ350円、刺身、鯖のスモークのマカロニサラダ580円、ちくわの天ぷら600円、鶏むね肉のチャーシュー750円、塩唐揚げ750円、海鮮なめろう880円、たたみいわし400円、卵黄ご飯500円、しじみ汁380円、自家製漬け込みサワー650円。インボイス登録: 木村 高行 (個人)。口コミ (2025年12月〜2026年10月、英語): Kujo ねぎ・大葉・レタスの豚巻き、キンミヤ自家製漬け込みサワー、みょうがサワー、焼き鳥はない、席で喫煙可。',
      confidence: 'medium', sources: [TB, MENU, DRINK, INV, R + 'B518492354/', R + 'B519816187/', R + 'B519937362/', R + 'B520280331/', R + 'B520513854/', R + 'B527346775/', R + 'B527808999/', R + 'B529851225/', R + 'B530981380/', R + 'B533884580/', R + 'B533944145/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu available; phone if you cannot find the door; smoking is allowed inside.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区裏寺町607-18',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with menu updated May 2026; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004800, 135.767966), moved ~2 m west so it sits about 6 m from Pelgag (ChIJc2AXFs0JAWARGffpYkznMu8, same lot 裏寺町607番地, 4.2 m on the Tabelog points); cross-checked: GSI 京都府京都市中京区裏寺町607番地 (lot) 29m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, DRINK],
    price_note: 'Tabelog menu, last updated 2 May 2026 (prices including tax); skewers priced per piece.', last_checked: TODAY, items: [
      it('', '', 'Kombu-cured mackerel skewer', '¥420', 'Skewers', 'ask', 'no', '', 'saba_skewer'),
      it('', '', 'Seasonal pork-roll skewer', '¥350', 'Skewers', 'ask', 'no', '', 'buta_maki'),
      it('', '', 'Oyster skewer with sudachi ponzu', '¥420', 'Skewers', 'ask', 'no', 'Ponzu.', 'oyster_skewer'),
      it('', '', 'Kuruma prawn skewer', '¥420', 'Skewers', 'ask', 'no', 'Salt.', 'kuruma_ebi'),
      it('', '', 'Smoked-mackerel macaroni salad', '¥580', 'Small dishes', 'no', 'no', 'Wheat pasta.', 'mackerel_macaroni'),
      it('', '', 'Chikuwa tempura (house fish paste)', '¥600', 'Small dishes', 'no', 'no', 'Batter.', 'chikuwa_ten'),
      it('', '', 'Salted chicken kara-age', '¥750', 'Small dishes', 'no', 'no', '', 'shio_karaage'),
      it('', '', 'Shijimi clam soup', '¥380', 'Rice', 'ask', 'no', '', 'shijimi'),
    ] }, {
    cuisine: '鶏ではなく魚と豚の串の炭焼きの居酒屋 (2026年1月の口コミ: 焼き鳥はない)・串は1本から: 鯖 (昆布〆) 420円、季節の豚巻き350円、子持ちししゃも280円、鮭ハラス300円、車海老420円、すだちポン酢の牡蠣420円、明太子330円、Kyotanba highland pork のトンテキ350円・刺身は flounder 1,400円、amberjack 1,300円、ヨコワ1,200円など・鯖のスモークのマカロニサラダ580円、自家製すり身のちくわの天ぷら600円、鶏むね肉のチャーシュー750円、塩唐揚げ750円、Kesennuma の Stuffed Squid 800円、その日の魚のなめろう880円・たたみいわし400円、真鯛の干物1,200円・卵黄ご飯500円、Yanaino Two-Color Rice Bowl 1,580円、しじみ汁380円 (食べログのメニュー、2026年5月)・Kujo ねぎ、大葉、レタスの豚巻き (2025〜2026年の口コミ)・みかん、生姜、みょうがの自家製漬け込みサワー650円、生ビール600円、日本酒も多い (食べログのドリンクメニュー、2026年5月)',
    neighborhood: '四条のすぐ北の裏寺町。京都河原町駅から徒歩3分',
    gf_detail: '要確認。串はほぼ塩だが、ポン酢や醤油の料理、揚げ物 (ちくわの天ぷら、唐揚げ)、牡蠣醤油もある。グルテンの情報は公開されていない (食べログのメニュー、2026年5月)。',
    vegan_detail: '要確認。串の大半は魚と豚。野菜の串 (れんこん、銀杏、そら豆、ズッキーニ) も口コミにあるが、味付けはわからない (2025〜2026年の口コミ)。',
    notes: '[居酒屋・裏寺町、魚と豚の炭火串] 裏寺町の小さな炭火焼きの居酒屋。焼き場の前にカウンター8席、2階に座敷。串は鶏ではなく魚と豚で、昆布〆の鯖、すだちポン酢の牡蠣、車海老、Kujo ねぎや大葉、レタスなど季節の野菜を巻いた豚巻き。鯖のスモークのマカロニサラダは店の一押しで、刺身にはわさびと生姜がたっぷり。串は280円から。2026年5月の客はコスパがよいと書き、6月の2人は軽めの食事で13,000円だった。席で喫煙可。木曜休み。',
  });
}

// ================================================================ だいあん 河原町木屋町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26025021/'; const R = TB + 'dtlrvwlst/';
  const MENU = TB + 'dtlmenu/'; const GN = 'https://r.gnavi.co.jp/kc1h209/';
  const CORP = 'https://www.houjin-bangou.nta.go.jp/henkorireki-johoto.html?selHouzinNo=9120001167719';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_diane_kawaramachi_kiyamachi', name: 'だいあん 河原町木屋町店 (Diane Kawaramachi Kiyamachi)', category: 'OMNI',
    lat: 35.005250, lng: 135.770424, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The draw is a shrimp shabu-shabu hot pot finished with ramen noodles; the menu also has tempura, fried nama-fu, soy-sauce dishes and Sushi Dogs; no gluten information is published (Tabelog menu, February 2025; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options, and the Kyoto dishes include yudofu, sesame tofu, yuba sashimi, grilled eggplant with miso and Kyoto-vegetable tempura, but no dish is marked vegan and the hot-pot broth is made from shrimp heads (Tabelog; 2026 reviews).',
    hours_raw: '17:00–23:00 every day, last order 22:30 (Tabelog; a Gurunavi page dated October 2023 gave 17:00–24:00). People wait at the door for the 17:00 opening (May 2026). Two-hour seating limit, cut to 1 h 30 when busy; the all-you-can-eat shrimp shabu-shabu takes orders for 60 minutes, and reviewers say staff do not announce the end (May 2026). Seat-only bookings need an order of ¥6,000 or more; table charge ¥330 (¥550 from 26 December to 5 January) (Tabelog). 56 seats over two floors, with private rooms for 4 to 30+; non-smoking; cards (VISA, Master, JCB, AMEX, UnionPay), no e-money or QR (Tabelog). Seats look over the Takase River (Gurunavi). 3 min walk from Kawaramachi Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi by the Takase River — 3 min from Kyoto Kawaramachi Stn',
    cuisine: 'Large Kiyamachi izakaya of sushi, tempura and Kyoto dishes, known on social media for all-you-can-eat shrimp shabu-shabu (2026 reviews) · shrimp shabu-shabu: 8–10 head-on shrimp each to start, eaten raw or swished in a broth that deepens with the shrimp heads, finished with ramen; ¥5,980 (May 2026), ¥4,980 (September 2025) · dashimaki topped with ikura ¥968 · Sushi Dogs (sea urchin and green onion ¥858, negitoro and caviar ¥638, salmon and ikura ¥693) · Kyoto dishes: two-colour nama-fu dengaku ¥638, sesame tofu ¥638, yuba sashimi ¥748, Kyoto yudofu ¥858, Kyoto-vegetable tempura ¥1,078; tempura from ¥300 (Tabelog menu, February 2025) · five-kind sashimi ¥1,518, scallops in butter soy ¥968 (September 2025) · free highball until 18:00 and ¥199 lemon sour until 19:00 (May 2026)',
    website: null, gmaps: gm('だいあん 河原町木屋町'), menu_url: MENU,
    notes: "[Izakaya · Kiyamachi, all-you-can-eat shrimp shabu-shabu] A two-floor izakaya on Kiyamachi with windows over the Takase River, popular for its all-you-can-eat shrimp shabu-shabu (¥5,980 in May 2026): big head-on shrimp to eat raw or swish in a broth that grows richer with every head, then ramen in the broth to finish. Ordering stops after 60 minutes, and reviewers say no one warns you, so order early. Reviewers praise the shrimp; some found the side dishes average and, in May–June 2026, the floor sticky. The menu also runs to Kyoto dishes — yudofu, yuba, nama-fu dengaku — and Sushi Dogs. Daily 17:00–23:00.",
    chef_bio: { chef_name: null, roles: ['Run by 株式会社ＣＲＯＷＮ (Sakai, Osaka; invoice T9120001167719); no person is named'], origin: null,
      background: 'The invoice number on Tabelog (T9120001167719) belongs to 株式会社ＣＲＯＷＮ, head office in Sakai, Osaka (NTA corporate-number site). Gurunavi describes the shop as a 個室居酒屋 centred on Kyoto cuisine, with seats overlooking the Takase River and semi-private rooms. No other だいあん shop was found on Gurunavi or Hot Pepper.',
      philosophy: null, specialty: 'All-you-can-eat shrimp shabu-shabu; dashimaki with ikura.',
      anecdotes: [
        { text: 'A May 2026 diner warns that all-you-can-eat orders stop after 60 minutes with no announcement, so order plenty early.', source: R + 'B513293142/' },
        { text: 'A May 2026 diner found the floor consistently sticky and the end of the all-you-can-eat unannounced; a June 2026 diner also noticed a sticky floor but found the staff "very friendly and welcoming".', source: R + 'B527862590/' },
        { text: 'A September 2026 diner wished for disposable gloves or napkins for pulling off the shrimp heads.', source: R + 'B536496614/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・海鮮・寿司、中京区紙屋町674-5、河原町駅から徒歩3分、毎日 17:00〜23:00 (L.O. 22:30)、年中無休、予約可 (席のみの予約は6,000円以上の注文)、お通し330円、12月26日〜1月5日はチャージ550円、通常2時間制 (混雑時は1時間半)、56席 (1階16、2階40)、個室あり、禁煙、カード可・電子マネー・QR 不可、ベジタリアンメニューあり、インボイス T9120001167719、メニュー (英語版、2025年2月更新): いくらのせだし巻き968円、Sushi Dog、二色の生麩田楽638円、胡麻豆腐638円、湯葉刺し748円、京湯豆腐858円、京野菜の天ぷら盛り合わせ1,078円、天ぷら300円から。国税庁法人番号公表サイト: 株式会社ＣＲＯＷＮ (大阪府堺市)。ぐるなび: 個室居酒屋 だいあん 河原町木屋町、京料理中心、高瀬川を眺められる席、半個室。口コミ (2025年9月〜2026年11月、英語): 海老しゃぶ食べ放題5,980円 (2025年9月は4,980円)、生でも食べられる海老、海老の頭の出汁、締めのラーメン、注文は60分まで。',
      confidence: 'medium', sources: [TB, MENU, GN, CORP, R + 'B503410355/', R + 'B513293142/', R + 'B525300598/', R + 'B526326299/', R + 'B527862590/', R + 'B528491203/', R + 'B530114746/', R + 'B531588730/', R + 'B536492548/', R + 'B536496614/', R + 'B538204945/', R + 'B538658757/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book the shrimp shabu-shabu ahead; order freely early, as the all-you-can-eat closes after 60 minutes without warning.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区紙屋町674-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.005250, 135.770424); cross-checked: GSI 京都府京都市中京区紙屋町674番地 (lot) 87m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, R + 'B503410355/', R + 'B513293142/'],
    price_note: 'Tabelog menu last updated February 2025 (prices including tax); shrimp shabu-shabu price from May 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'All-you-can-eat shrimp shabu-shabu', '¥5,980', 'Hot pot', 'ask', 'no', 'May 2026; ¥4,980 in September 2025; ramen to finish.', 'ebi_shabu'),
      it('', '', 'Dashimaki topped with ikura', '¥968', 'Kyoto dishes', 'ask', 'no', '', 'dashimaki_ikura'),
      it('', '', 'Sea urchin and green onion Sushi Dog', '¥858', 'Sushi', 'ask', 'no', '', 'sushi_dog_uni'),
      it('', '', 'Two-colour nama-fu dengaku', '¥638', 'Kyoto dishes', 'no', 'ask', 'Nama-fu is wheat gluten.', 'namafu_dengaku'),
      it('', '', 'Sesame tofu with wasabi soy sauce', '¥638', 'Kyoto dishes', 'ask', 'ask', '', 'goma_tofu'),
      it('', '', 'Kyoto yudofu', '¥858', 'Kyoto dishes', 'ask', 'ask', '', 'yudofu'),
      it('', '', 'Kyoto-vegetable tempura platter', '¥1,078', 'Tempura', 'no', 'ask', 'Batter.', 'kyoyasai_tempura'),
    ] }, {
    cuisine: '寿司、天ぷら、京料理の木屋町の大きな居酒屋。SNS で知られる海老しゃぶの食べ放題が名物 (2026年の口コミ)・海老しゃぶ: 1人8〜10尾の頭付きの海老から始まり、生でも、海老の頭で濃くなる出汁にくぐらせても。締めはラーメン。5,980円 (2026年5月)、4,980円 (2025年9月)・いくらのせだし巻き968円・Sushi Dog (うにとねぎ858円、ねぎとろとキャビア638円、サーモンといくら693円)・京料理: 二色の生麩田楽638円、胡麻豆腐638円、湯葉刺し748円、京湯豆腐858円、京野菜の天ぷら盛り合わせ1,078円、天ぷらは300円から (食べログのメニュー、2025年2月)・刺身5種盛り1,518円、ホタテのバター醤油焼き968円 (2025年9月)・18時までハイボール無料、19時までレモンサワー199円 (2026年5月)',
    neighborhood: '高瀬川沿いの木屋町。京都河原町駅から徒歩3分',
    gf_detail: '要確認。名物は海老しゃぶの鍋で締めはラーメン。ほかに天ぷら、生麩の揚げ物、醤油の料理、Sushi Dog。グルテンの情報は公開されていない (食べログのメニュー、2025年2月、2026年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあり、京料理には湯豆腐、胡麻豆腐、湯葉刺し、なすの味噌焼き、京野菜の天ぷらもあるが、ヴィーガンと書かれた料理はなく、鍋の出汁は海老の頭 (食べログ、2026年の口コミ)。',
    notes: '[居酒屋・木屋町、海老しゃぶの食べ放題] 高瀬川を望む窓のある木屋町の2フロアの居酒屋。海老しゃぶの食べ放題 (2026年5月は5,980円) が人気で、頭付きの大きな海老を生で、または頭を入れるほど濃くなる出汁にくぐらせて食べ、締めはその出汁でラーメン。注文は60分で終わるが知らせはないと口コミにあるので、早めに頼むとよい。海老は好評だが、一品料理は普通、床がべたつくという声も (2026年5〜6月)。湯豆腐、湯葉、生麩田楽などの京料理や Sushi Dog もある。毎日17時〜23時。',
  });
}

// ================================================================ RESTAURANT hidamarino
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26026551/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.hidamarino.com/'; const ABOUT = SITE + 'about.html'; const MENU = SITE + 'menu.php';
  const TEA = SITE + 'tea-pairing.html'; const WINE = SITE + 'wine-pairing.html'; const COURSE = TB + 'party/';
  const H = day(['12:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_hidamarino', name: 'RESTAURANT hidamarino (レストランヒダマリーノ)', category: 'MOM_AND_POP',
    lat: 35.003009, lng: 135.762408, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask by phone when booking: the shop asks guests to tell the chef about allergies by phone, and menu changes may cost extra (Tabelog). Courses include the house baguette, foie gras with pain d’épices and wine sauces (official menu; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask when booking; no vegetarian or vegan course is published. Courses are built on fish, duck, foie gras, egg and dairy (official menu; 2026 reviews).',
    hours_raw: 'Lunch 12:00–15:00 (last order 13:00) and dinner 18:00–22:00 (last order 19:30); closed Wednesday (official site). Tabelog gives lunch 12:00–14:30 with last order 12:30, and irregular closures. Booking only: lunch by the day before, dinner by reservation; one drink per guest at both; lunch is cash only (Tabelog). Schoolchildren order one course; a dish can be made smaller (Tabelog). 16 seats (6 at the counter, 10 at tables), table area can be hired for about 10; wheelchair users asked to tell the shop ahead; non-smoking; cards at dinner (Tabelog). 1 min from exit 15 of Hankyu Karasuma Stn (official site; Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Just south of Shijo, east of Karasuma — 1 min from exit 15 of Hankyu Karasuma Stn',
    cuisine: 'Chef ますむら’s French cooking with wine or Kyoto-tea pairings; the house aims for a "round taste" with the five tastes in balance (official site) · lunch "W main" course of 7 dishes with fish and meat ¥7,700 (July and October 2026) · dinner omakase of 10 dishes ¥13,200 (Tabelog) · a short dinner course on the official site: oeuf à la coque, yokowa mi-cuit, hidamarino baguette, sautéed foie gras with pain d’épices, steamed sawara with white-wine sauce, roast duckling with Madeira sauce, dessert, coffee or tea · July 2026 lunch: egg yolk at 115 °C with eggplant and duck ragù in the shell, pepper mousse with Nemuro sea urchin, Kenken bonito with beets, gazpacho with fried young sweetfish, a baguette rubbed with garlic and tomato at the table, Gotō sea bream, Kyoto duck breast · pairings (before tax and the 10% service charge): Kyoto tea, 4 teas including gyokuro, ¥4,000; wine 4 glasses ¥4,000, 6 glasses ¥6,000, 8 glasses ¥7,800 (official site)',
    website: SITE, gmaps: gm('RESTAURANT hidamarino 京都 四条烏丸'), menu_url: MENU,
    notes: "[French · Shijo Karasuma, French with a Kyoto-tea pairing] A narrow, wood-lined French restaurant a minute from Karasuma Station, where chef ますむら cooks in front of a six-seat counter with two assistants. The house's aim is a 'round taste', the five tastes in balance, matched with wine or with a pairing of four Kyoto teas including gyokuro. Dishes mix French technique and Japanese ingredients: a warm egg yolk served in the shell, sea urchin over pepper mousse, Kyoto duck — and a baguette rubbed with raw garlic and tomato by hand at the table. Lunch 'W main' course ¥7,700; dinner omakase ¥13,200. Booking only, lunch by the day before (cash only at lunch). Closed Wednesday.",
    chef_bio: { chef_name: 'ますむら', roles: ['Chef (official site signature: "シェフ ますむら"); reviews mention a chef and two assistants (August 2026) and a "friendly owner" (October 2026)'], origin: null,
      background: 'Per the official site: RESTAURANT hidamarino was born in Kyoto in October 2014 (Tabelog gives the opening day as 10 October 2015). Sister shop: komorebino natural wine bar near Gion-Shijo (Tabelog). Tabelog French WEST "Tabelog 100" 2023 and 2025.',
      philosophy: 'Per the official site: a "round" taste, like a sphere, with the five tastes (sweet, salty, sour, bitter, umami) in balance and flavour and texture in harmony; pairings with wine or fine Kyoto tea built mainly on "harmony" (同調), since a marriage most often happens when taste and aroma suit each other.',
      specialty: 'Kyoto-tea pairing; the hidamarino baguette; egg in the shell.',
      anecdotes: [
        { text: '"The dish where you spread raw garlic on the baguette with your hands was innovative and surprising. Just be prepared for your hands to smell!" — October 2026.', source: R + 'B537324031/' },
        { text: 'A September 2026 diner tried a tea pairing for the first time and found it suited the cooking well.', source: R + 'B535359959/' },
        { text: 'An August 2026 couple sat next to guests from overseas who were having the pairings, and ordered pairings too.', source: R + 'B533882950/' },
      ],
      japanese_sources_summary: '公式サイト (hidamarino.com): RESTAURANT hidamarino は2014年10月に京都で誕生、五味 (甘味・塩味・酸味・苦味・うま味) のバランスが整い、風味と食感が調和した球体のような「まるい味」、ワインや京銘茶とのペアリング、「同調」が基本、シェフ ますむら、下京区高倉通四条下る高材木町218、阪急烏丸駅15番出口を出てすぐ、Lunch 12:00〜15:00 (L.O 13:00)、Dinner 18:00〜22:00 (L.O 19:30)、水曜定休日、京銘茶のペアリング4,000円 (玉露など4種)、ワインペアリング4杯4,000円・6杯6,000円・SP 8杯7,800円 (税抜、サービス料10%別)、ショートコース: ウッフ・ア・ラ・コック、ヨコワのミキュイ、hidamarinoバゲット、フォアグラのソテーパンデピス、鰆の蒸し焼き 白ワインソース、仔鴨ロースト マデラソース。食べログ: フレンチ・創作、16席 (カウンター6、テーブル10)、ランチは前日までの予約・現金のみ、ディナーは予約のみ、1人1ドリンク、アレルギーは電話でシェフに、2015年10月10日オープン、姉妹店 komorebino natural wine bar、ディナーのおまかせ10品13,200円、フレンチ WEST 百名店 2023・2025。口コミ (2026年6〜10月、英語): W メインのランチ7,700円、ティーペアリング、手でにんにくをこするバゲット。',
      confidence: 'medium', sources: [TB, SITE, ABOUT, MENU, TEA, WINE, COURSE, R + 'B373257096/', R + 'B531288258/', R + 'B533240892/', R + 'B533882950/', R + 'B535359959/', R + 'B536151359/', R + 'B537324031/', R + 'B537867571/', R + 'B538566669/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead (lunch by the day before); tell the chef about allergies by phone; lunch is cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区高倉通四条下ル高材木町218 レックスTSUBAKIビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003009, 135.762408); cross-checked: GSI 京都府京都市下京区高材木町218番地 (lot) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [COURSE, TEA, WINE, R + 'B531288258/'],
    price_note: 'Dinner course from the Tabelog course page; lunch price from July and October 2026 reviews; pairings from the official site (before tax and 10% service).', last_checked: TODAY, items: [
      it('', '', 'Lunch "W main" course (7 dishes, fish and meat)', '¥7,700', 'Course', 'ask', 'ask', 'July and October 2026.', 'lunch_w_main'),
      it('', '', 'Dinner chef’s omakase (10 dishes)', '¥13,200', 'Course', 'ask', 'ask', '', 'dinner_omakase'),
      it('京銘茶のペアリング', '', 'Kyoto tea pairing (4 teas incl. gyokuro)', '¥4,000', 'Pairing', '', '', 'Before tax and service.', 'tea_pairing'),
      it('ワインペアリング6', '', 'Wine pairing, 6 glasses', '¥6,000', 'Pairing', '', '', 'Before tax and service.', 'wine_pairing_6'),
    ] }, {
    cuisine: 'ますむらシェフのフレンチを、ワインか京銘茶のペアリングで。五味のバランスが整った「まるい味」を目指す (公式サイト)・ランチは魚と肉の「W メイン」7品7,700円 (2026年7月・10月)・ディナーはおまかせ10品13,200円 (食べログ)・公式サイトのショートコース: ウッフ・ア・ラ・コック、ヨコワのミキュイ、hidamarinoバゲット、フォアグラのソテーパンデピス、鰆の蒸し焼き 白ワインソース、仔鴨ロースト マデラソース、デザート、コーヒーか紅茶・2026年7月のランチ: 殻に入った115℃の卵黄となすと鴨のラグー、bell pepper のムースと Nemuro のうに、Kenken bonito とビーツ、稚鮎のフリットをのせたガスパチョ、テーブルでにんにくとトマトをこするバゲット、Gotō の鯛、京都の鴨胸肉・ペアリング (税抜、サービス料10%別): 玉露など4種の京銘茶4,000円、ワイン4杯4,000円・6杯6,000円・8杯7,800円 (公式サイト)',
    neighborhood: '四条のすぐ南、烏丸の東。阪急烏丸駅15番出口から徒歩1分',
    gf_detail: '予約時に電話で要確認。アレルギーは電話でシェフに伝えるよう店は案内しており、メニューの変更は追加料金のことがある (食べログ)。コースにはバゲット、パンデピスのフォアグラ、ワインのソースが入る (公式メニュー、2026年の口コミ)。',
    vegan_detail: '予約時に要確認。ベジタリアンやヴィーガンのコースは載っていない。コースは魚、鴨、フォアグラ、卵、乳製品が中心 (公式メニュー、2026年の口コミ)。',
    notes: '[フレンチ・四条烏丸、京銘茶のペアリングのフレンチ] 烏丸駅から1分、木を使った細長いフレンチ。ますむらシェフがカウンター6席の前で料理し、2人のアシスタントが付く。五味のバランスが整った「まるい味」を目指し、ワインか、玉露など4種の京銘茶のペアリングを合わせる。料理はフランスの技と日本の食材の組み合わせで、殻に入った温かい卵黄、bell pepper のムースにうに、京都の鴨、そしてテーブルで手で生のにんにくとトマトをこすりつけるバゲット。ランチの「W メイン」7,700円、ディナーのおまかせ13,200円。完全予約制で、ランチは前日まで (ランチは現金のみ)。水曜休み。',
  });
}

// ================================================================ カフェ 火裏蓮花
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26004189/'; const R = TB + 'dtlrvwlst/';
  const RURUBU = 'https://rurubu.jp/andmore/article/23878';
  const H = day(['12:00', '18:00']);
  put({
    id: 'kyoto_cafe_karirenge', name: 'カフェ 火裏蓮花 (Cafe Karirenge)', category: 'OMNI',
    lat: 35.010191, lng: 135.764325, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Lunch is chicken curry; the sweets are cakes (chiffon, cheesecake with a cookie base, matcha milk cake, a Mont Blanc on chocolate cake) and a parfait with cornflakes and arare; no gluten information is published (rurubu, October 2025; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The curries are chicken (butter chicken and spicy chicken) and most sweets use cream, ice cream or cheese; summer shaved ice comes with citrus syrup (August 2026); no ingredient list is published (2026 reviews).',
    hours_raw: '12:00–18:00 (last order 17:00), Monday, Thursday to Sunday and holidays; closed Tuesday and Wednesday; other closures are posted on Instagram (Tabelog; rurubu, October 2025). Shaved ice from 13:30 (Tabelog). No reservations; queue without blocking the doors of the neighbouring houses (Tabelog). Full at lunch on weekends; weekday afternoons can be quiet (August–October 2026); popular items such as the coffee-jelly ice cream can sell out (August 2026). 19 seats; non-smoking; no cards, PayPay accepted; free Wi-Fi; children welcome (Tabelog). At the end of a narrow alley off Yanagibaba-dori, about 5–6 min from Karasuma Oike or Kyoto Shiyakusho-mae Stn (Tabelog; rurubu).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Alley off Yanagibaba-dori between Oike and Sanjo — 6 min from Karasuma Oike Stn',
    cuisine: 'Curry and cake café in a machiya of nearly 150 years, once the home of the first owner (rurubu, October 2025) · chicken curry ¥1,380; a two-curry plate of butter chicken and spicy chicken (October 2026) · まったりお抹茶ミルクケーキ (Uji matcha milk cake) ¥820, 大人のブルーチーズケーキ ¥950 · 珈琲党のための炭焼珈琲ゼリーアイスパフェ, charcoal-roast coffee jelly over vanilla ice cream with arare and nuts, with a mini coffee, ¥1,400 (rurubu, October 2025; September 2026) · seasonal cakes, e.g. fig rare cheesecake, Earl Grey chiffon with figs, Mont Blanc (October 2026) · summer けづり氷 (shaved ice), e.g. citrus (rurubu; August 2026) · 黒蜜ジンジャーラテ ¥720, six house-made drinks, coffee, wine (rurubu; Tabelog)',
    website: null, gmaps: gm('カフェ 火裏蓮花 京都'), menu_url: null,
    notes: "[Café · Karasuma Oike, curry and cake in an alley machiya] A café at the end of a narrow alley near Karasuma Oike, in a townhouse of nearly 150 years that was once the first owner's home: wooden lattice, a small garden, and the sound of a 水琴窟 (water-harp) from the speakers. Lunch is chicken curry, served on the owner's favourite 小鹿田焼 (Onta ware) or antique Western plates; afterwards, cakes like the matcha milk cake or the blue-cheese cake, or the coffee-jelly parfait made for coffee lovers (¥1,400). Shaved ice in summer from 13:30. No bookings; queue quietly in the alley. 12:00–18:00, closed Tuesday and Wednesday; PayPay, no cards.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed in the sources)'], origin: null,
      background: 'Per rurubu (updated 18 October 2025): a Kyoto machiya of nearly 150 years, originally the home of the first owner; the owner, who loves small things, chose the objects on the shelves, and uses favourite Onta ware (小鹿田焼, from Oita) and antique Western plates for the curry; the speakers play the sound of a 水琴窟. An October 2026 reviewer writes that the name refers to a Chinese saying about a flower that blooms beautifully and strongly even in fire, in adversity. Tabelog Cafe "Tabelog 100" 2021, 2022 and Cafe WEST 2025.',
      philosophy: null, specialty: 'Chicken curry; charcoal-roast coffee-jelly parfait; cakes.',
      anecdotes: [
        { text: 'A September 2026 diner waiting for the opening was kindly invited in with "We are already open."', source: R + 'B44970064/' },
        { text: 'A September 2026 diner who roasts coffee at home found the coffee-jelly parfait less striking than its "for coffee lovers" name, the handle-less cup too hot to hold and the music a little loud.', source: R + 'B535666711/' },
        { text: 'An October 2026 diner was disappointed that the Mont Blanc was a Mont Blanc top on a chocolate cake, but praised the staff and the coffee.', source: R + 'B538369753/' },
        { text: '"A group of foreigners came in and started chatting loudly, which felt a bit out of place for the ambiance." — October 2026.', source: R + 'B538557404/' },
      ],
      japanese_sources_summary: 'るるぶ&more. (2025年10月18日更新): 静かな住宅街の路地裏の京町家カフェ、築150年近くの町家はもとは初代オーナーの自宅、小物好きのオーナーが選んだ雑貨、スピーカーから流れる水琴窟の音色、カレー皿は大分の小鹿田焼 (おんたやき) やアンティークの洋皿、地下鉄烏丸御池駅と京都市役所前駅から徒歩5分ほど、チキンカレー1,380円、まったりお抹茶ミルクケーキ820円、珈琲党のための炭焼珈琲ゼリーアイスパフェ1,400円、大人のブルーチーズケーキ950円、黒蜜ジンジャーラテ720円、夏季限定のけづり氷、手作りドリンク6種、12〜18時 (17時LO)、火・水曜休み。食べログ: カフェ・カレー・ケーキ、中京区柳馬場通姉小路上ル柳八幡町74-4、月・木〜日・祝 12:00〜18:00、火・水休み、かき氷は13:30から、休みは Instagram で、予約不可、近隣の玄関をふさがずに並ぶ、19席、カード不可・PayPay 可、カフェ百名店 2021・2022、カフェ WEST 百名店 2025。口コミ (2026年8〜10月、英語): バターチキンとスパイシーチキンのあいがけカレー、珈琲ゼリーのパフェ、いちじくのレアチーズケーキ、アールグレイのシフォン、モンブラン。',
      confidence: 'medium', sources: [TB, RURUBU, R + 'B44970064/', R + 'B534314184/', R + 'B534658413/', R + 'B535211810/', R + 'B535596724/', R + 'B535666711/', R + 'B536972700/', R + 'B537246336/', R + 'B537275116/', R + 'B537807623/', R + 'B538369753/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No bookings; queue quietly in the alley; pay by cash or PayPay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区柳馬場通姉小路上ル柳八幡町74-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; rurubu article updated October 2025.' },
    pin_source: `Tabelog ${TB} (35.010191, 135.764325); cross-checked: GSI 京都府京都市中京区柳八幡町74番地 (lot) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [RURUBU, R + 'B535211810/'],
    price_note: 'Prices from rurubu (updated 18 October 2025); the parfait price matches a September 2026 review.', last_checked: TODAY, items: [
      it('チキンカレー', '', 'Chicken curry', '¥1,380', 'Lunch', 'ask', 'no', '', 'chicken_curry'),
      it('まったりお抹茶ミルクケーキ', '', 'Matcha milk cake', '¥820', 'Cakes', 'no', 'no', '', 'matcha_milk_cake'),
      it('大人のブルーチーズケーキ', '', 'Blue-cheese cake', '¥950', 'Cakes', 'ask', 'no', '', 'blue_cheese_cake'),
      it('珈琲党のための炭焼珈琲ゼリーアイスパフェ', '', 'Charcoal-roast coffee-jelly ice cream parfait', '¥1,400', 'Sweets', 'no', 'no', 'Cornflakes; with a mini coffee.', 'coffee_jelly_parfait'),
      it('黒蜜ジンジャーラテ', '', 'Kuromitsu ginger latte', '¥720', 'Drinks', '', '', '', 'ginger_latte'),
    ] }, {
    cuisine: '築150年近く、もとは初代オーナーの自宅だった町家のカレーとケーキのカフェ (るるぶ&more.、2025年10月)・チキンカレー1,380円。バターチキンとスパイシーチキンのあいがけ (2026年10月)・まったりお抹茶ミルクケーキ820円、大人のブルーチーズケーキ950円・珈琲党のための炭焼珈琲ゼリーアイスパフェ: バニラアイスに炭焼珈琲のゼリー、あられ、ナッツ、ミニコーヒー付きで1,400円 (るるぶ&more.、2025年10月、2026年9月)・季節のケーキ、例えばいちじくのレアチーズケーキ、いちじくのアールグレイのシフォン、モンブラン (2026年10月)・夏のけづり氷、柑橘など (るるぶ&more.、2026年8月)・黒蜜ジンジャーラテ720円、手作りドリンク6種、コーヒー、ワイン (るるぶ&more.、食べログ)',
    neighborhood: '御池と三条の間、柳馬場通の路地。烏丸御池駅から徒歩6分',
    gf_detail: '要確認。ランチはチキンカレー、甘いものはケーキ (シフォン、クッキー生地のチーズケーキ、抹茶ミルクケーキ、チョコレートケーキにのせたモンブラン) と、コーンフレークとあられのパフェ。グルテンの情報は公開されていない (るるぶ&more.、2025年10月、2026年の口コミ)。',
    vegan_detail: '要確認。カレーは鶏 (バターチキンとスパイシーチキン) で、甘いものの多くはクリーム、アイス、チーズを使う。夏は柑橘のかき氷もある (2026年8月)。原材料は公開されていない (2026年の口コミ)。',
    notes: '[カフェ・烏丸御池、路地奥の町家のカレーとケーキ] 烏丸御池の近く、細い路地の奥のカフェ。築150年近く、もとは初代オーナーの自宅だった町家で、格子、小さな庭、スピーカーから水琴窟の音色。ランチのチキンカレーは、オーナーが好きな小鹿田焼やアンティークの洋皿で。食後は抹茶ミルクケーキ、ブルーチーズケーキ、珈琲党のための珈琲ゼリーのパフェ (1,400円) を。夏は13時半からかき氷。予約不可、路地では静かに並ぶ。12時〜18時、火・水曜休み。PayPay 可、カード不可。',
  });
}

save();
