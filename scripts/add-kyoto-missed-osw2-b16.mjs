// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 16.
//   core (queue.mjs kyoto-missed next core 200, 2026-11-05, first two lane ids):
//   + 宮川町ほった Miyagawacho Hotta (8-seat counter of a Gion Sasaki alumnus in Miyagawacho; Michelin one star 2026 per reviews)
//   + オステリア・コチネッラ Osteria Coccinella (osteria and wine bar in a townhouse off Bukkoji-dori)
//   notable (queue.mjs kyoto-missed next notable 200, first two lane ids):
//   + monk (wood-fired pizza and vegetables on the Philosopher’s Path, chef 今井 義浩)
//   + SCALAE (Italian on the 2nd floor of THE THOUSAND KYOTO)
//   None is in data/kyoto.json: grep by id, name (ほった/Hotta, コチネッラ/Coccinella, monk, SCALAE/スカーラエ) and address
//   (宮川筋6-359, 新開町397, 浄土寺下南田町147, 東塩小路町570) found none.
//   Same-name counts (Samboa ruling): each is one listing in the Tabelog crawl. SCALAE is a restaurant of the hotel THE THOUSAND KYOTO,
//   run by 京阪ホテルズ＆リゾーツ株式会社 (Keihan group) — a hotel restaurant, not a chain brand; drafted and flagged.
//   Service charges checked against Tabelog’s Japanese original: ほった — the English page says a service charge is added, but the
//   original reads なし (TableCheck lists course prices "Svc & tax incl."); コチネッラ — 300円; SCALAE — サービス料15% (confirmed by
//   the hotel’s press release); monk — none listed.
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-16');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 宮川町ほった
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26039499/'; const R = TB + 'dtlrvwlst/';
  const MICH = 'https://guide.michelin.com/jp/ja/kyoto-region/kyoto/restaurant/miyagawacho-hotta'; const TC = 'https://www.tablecheck.com/miyagawacho-hotta';
  const INV = 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=7810191347359';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_miyagawacho_hotta', name: '宮川町ほった (Miyagawacho Hotta)', category: 'MOM_AND_POP',
    lat: 34.998385, lng: 135.770009, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. An omakase of Kyoto cooking with dashi, soy and miso, plus a beef cutlet sandwich, somen, a mini ramen and nama-fu in some seasons; no gluten information is published (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-led omakase with dashi, beef cutlet, eel and crab (2026 reviews).',
    hours_raw: '17:00–23:00 Monday to Saturday, last entry 20:30; closed Sunday and irregularly (Tabelog); the Michelin Guide gives Tuesday–Saturday 17:00–23:00, closed Monday and Sunday. Reservation only; the phone may go unanswered during service (Tabelog); one omakase with everyone starting together (March 2026). Omakase ¥26,400 or ¥28,600, service and tax included (TableCheck). Tabelog’s English page says a service charge is added, but its Japanese original reads なし. 8 counter seats; private hire up to 20; non-smoking; wheelchair accessible; junior-high age and up; cards and QR (PayPay, Alipay, WeChat Pay and others), no e-money (Tabelog). English menu; sommelier; BYO; take-away beef cutlet sandwich (Tabelog; 2026 reviews). On the stone-paved Miyagawa-suji among teahouses; 4 min from Kiyomizu-Gojo Stn (Tabelog; Michelin Guide). Opened 14 June 2023 (Tabelog; a July 2026 reviewer says 2022).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Miyagawa-suji in the Miyagawacho geisha quarter — 4 min from Kiyomizu-Gojo Stn',
    cuisine: 'Kyoto omakase mixing tradition and play at an eight-seat counter (Michelin Guide; 2026 reviews) · omakase ¥26,400 or ¥28,600 (TableCheck) · winter: Yamaguchi tiger-fugu broth with grilled fins, house karasumi over rice, fugu milt with balsamic and black truffle, crab rice cooked like fried rice (January–February 2026) · spring: soy-milk soup with white asparagus and karasumi, firefly squid, clams and bamboo shoot, flounder with sesame (March 2026) · summer: corn soup with coffee jelly, sea urchin and squid with Handa somen, charcoal-grilled ayu soup, hamo, abalone with liver sauce, eel donabe rice (July 2026) · the signature fillet beef cutlet sandwich, also to take away · a mini seafood ramen, mochi pizza, tamago-kake-gohan (2026 reviews) · sake and wine chosen by the sommelier chef',
    website: null, gmaps: gm('宮川町ほった 宮川筋'), menu_url: TC,
    notes: "[Kaiseki · Miyagawacho, a playful Kyoto counter] An eight-seat counter on Miyagawacho's stone-paved lane of teahouses, run by a chef-sommelier who trained at Gion Sasaki. The omakase (about ¥26,400–28,600) moves from classic Kyoto dishes — fugu broth over grilled fins, house karasumi on rice, hamo and ayu in summer — to playful turns such as fugu milt with truffle, a mini seafood ramen and the signature fillet beef cutlet sandwich, before donabe rice. Diners in May 2026 found the entrance full of flowers for a new Michelin star. Everyone starts together; book ahead. Closed Sunday.",
    chef_bio: { chef_name: '堀田 功雄', roles: ['Owner-chef and sommelier (the invoice holder)'], origin: null,
      background: 'The invoice register lists an individual, 堀田 功雄, for the shop’s invoice number. Per 2026 reviewers: the chef trained at Gion Sasaki (January and March 2026); a July 2026 reviewer adds that the chef is a sommelier and ran Sasaki’s sister restaurant BAR Kappo before going independent. Reviewers in May and July 2026 report a first Michelin star in the 2026 guide; the Michelin Guide page praises the unconventional flow with a beef cutlet and the owner’s handiwork. Opened 14 June 2023 (Tabelog).',
      philosophy: 'Per the Michelin Guide: cooking not bound by formality, with ideas that look unconventional at first — "格式に縛られない料理".',
      specialty: 'Fillet beef cutlet sandwich; house karasumi; seasonal donabe rice.',
      anecdotes: [
        { text: 'Two diners in May 2026 found the entrance full of flowers celebrating a new Michelin star.', source: R + 'B527625280/' },
        { text: 'A January 2026 guest watched the chef grill tiger-fugu fins over charcoal and pour fugu dashi over grilled nama-fu.', source: R + 'B521887611/' },
        { text: 'A March 2026 diner found the cold first soup’s aftertaste lacking and the dishes tasty but unsurprising, liking the mochi pizza best.', source: R + 'B526632752/' },
      ],
      japanese_sources_summary: 'ミシュランガイド: 宮川町 ほった、日本料理、¥¥¥、東山区宮川筋6-359-4、火〜土 17:00–23:00、月・日休み、歌舞練場のある宮川町、石畳の筋にお茶屋や置屋、型破りと思える発想、ありきたりではない流れにビフカツを組み込む、格式に縛られない料理、頼もしい店主の手仕事。TableCheck: おまかせコース26,400円・28,600円 (サービス料・税込)、カウンター席。食べログ: 日本料理、完全予約制、月〜土 17:00〜23:00 (最終入店20:30)、日曜・不定休、サービス料なし、8席 (カウンター)、貸切20名まで、禁煙、車椅子可、中学生以上、カード・QR 可、英語メニュー、ソムリエ、持ち込み可、テイクアウト、2023年6月14日オープン、インボイス: 堀田 功雄 (個人)。口コミ (2026年1〜9月、英語): Gion Sasaki で修業、BAR Kappo、ミシュラン一つ星 (2026年)、ビフカツサンド。',
      confidence: 'medium', sources: [TB, MICH, TC, INV, R + 'B521742066/', R + 'B521821673/', R + 'B521887611/', R + 'B522028140/', R + 'B524036803/', R + 'B526484153/', R + 'B526632752/', R + 'B527625280/', R + 'B528346278/', R + 'B531398709/', R + 'B532482847/', R + 'B536559022/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); booking only; everyone starts together.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区宮川筋6-359-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Michelin Guide, TableCheck and Tabelog listings; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (34.998385, 135.770009); cross-checked: GSI 京都府京都市東山区宮川筋六丁目359番地 (lot) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TC],
    price_note: 'TableCheck (service and tax included).', last_checked: TODAY, items: [
      it('おまかせコース', 'omakase', 'Omakase course', '¥26,400', 'Course', 'ask', 'no', 'Also ¥28,600; varies with supply.', 'omakase'),
    ] }, {
    cuisine: '8席のカウンターで伝統と遊び心をまぜた京都のおまかせ (ミシュランガイド、2026年の口コミ)・おまかせコース26,400円か28,600円 (TableCheck)・冬: Yamaguchi のとらふぐのだしと焼いたひれ、自家製からすみのご飯、ふぐ白子のバルサミコと黒トリュフ、炒飯のように仕立てた蟹ご飯 (2026年1〜2月)・春: 白アスパラとからすみの豆乳のスープ、ホタルイカ、蛤と筍、ヒラメの胡麻 (2026年3月)・夏: コーヒーゼリーのコーンスープ、雲丹とイカの Handa 素麺、炭火の鮎のスープ、鱧、鮑の肝ソース、鰻の土鍋ご飯 (2026年7月)・名物のヒレのビフカツサンド、持ち帰りも・魚介のミニラーメン、餅のピザ、卵かけご飯 (2026年の口コミ)・ソムリエの店主が選ぶ日本酒とワイン',
    neighborhood: '花街の宮川町の宮川筋。清水五条駅から徒歩4分',
    gf_detail: '予約時に要確認。だし、醤油、味噌の京料理のおまかせに、ビフカツサンド、素麺、ミニラーメン、季節によって生麩も。グルテンの情報は公開されていない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚が中心のおまかせで、だし、ビフカツ、鰻、蟹 (2026年の口コミ)。',
    notes: '[日本料理・宮川町、遊び心のある京都のカウンター] 宮川町の石畳のお茶屋の筋にある8席のカウンター。Gion Sasaki で修業したソムリエでもある店主の店。おまかせ (26,400〜28,600円ほど) は、ふぐのだしと焼きひれ、自家製からすみのご飯、夏の鱧や鮎など王道の京料理から、ふぐ白子のトリュフ、魚介のミニラーメン、名物のヒレのビフカツサンドなど遊び心のある皿へ進み、最後は土鍋ご飯。2026年5月には新しいミシュランの星を祝う花が入口にあふれていたという。一斉スタートで予約を。日曜休み。',
  });
}

// ================================================================ オステリア・コチネッラ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26020401/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.coccinella77.com/'; const MENU = SITE + 'menu'; const SHOP = SITE + 'shop';
  const H = day(['18:00', '23:30']);
  put({
    id: 'kyoto_osteria_coccinella', name: 'オステリア・コチネッラ (Osteria Coccinella)', category: 'MOM_AND_POP',
    lat: 35.001254, lng: 135.763168, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pasta is the core of the menu (four or five a night); starters such as carpaccio, terrines and cheese may suit, but no gluten information is published (official menu).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, meat and cheese starters, meat ragù pasta and mains; a garlic peperoncino or tomato pomodoro pasta is on the sample menu, but no ingredient list is published (official menu).',
    hours_raw: '18:00–23:30 (last order 23:00) Tuesday to Sunday; holidays 18:00–23:00 (last order 22:30); closed Monday, plus a run of days off once a month (Tabelog; official site; the official shop page lists Tuesday–Thursday). Table charge ¥300 (Tabelog’s Japanese original: 300円). Bookings taken; also welcome as a second-stop wine bar (official site). Seats: 21 per the official site (12 at tables, 9 at the counter), 19 per Tabelog; non-smoking. Cards: the official site says not accepted, Tabelog lists cards and PayPay. In a renovated townhouse on Takakura-dori east of Bukkoji; 5 min from Shijo or Hankyu Karasuma Stn (official site).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Takakura-dori by Bukkoji, south of Shijo-Karasuma — 5 min from Shijo Stn',
    cuisine: 'À la carte osteria with about 500 wines (official site) · starters, about ten a night, e.g. wild yellowtail carpaccio ¥1,400, oysters in lemon butter ¥1,400, figs with sheep’s feta ¥1,400, lamb or shamo terrine ¥900, country pâté of Daisen pork ¥700, chicken terrines ¥600–700, pig’s trotter jelly ¥600, cheese from Via Zabbio ¥1,400 · pasta, four or five a night, e.g. Oe-farm tomato pomodoro ¥1,300, Spanish garlic peperoncino ¥1,200, carbonara ¥1,300, squid-ink bavettine ¥1,500, red snow crab arrabbiata fettuccine ¥1,800, lamb cacio e pepe ¥1,800, Kuroge wagyu brisket bolognese ¥1,800, Challans duck ragù ¥1,800 (official menu) · house ham of Yonezawa pork, buri tataki with fermented vegetables, trout carpaccio ¥1,500, Iberico pork red-wine pasta ¥1,800, bear bolognese (2024–26 reviews)',
    website: SITE, gmaps: gm('オステリア コチネッラ 高倉通'), menu_url: MENU,
    notes: "[Italian · Shijo-Karasuma, pasta and 500 wines in a townhouse] A wood-warm osteria in a renovated townhouse off Bukkoji-dori, where the owner-chef cooks simple Italian dishes with a twist — about ten starters of terrines, carpaccio and cheese, then four or five pastas from a ¥1,200 garlic peperoncino to lamb cacio e pepe or duck ragù — with some 500 wines to choose from. Regulars call it a pasta place worth returning to; one found it a bit salty. Fine as a second-stop wine bar. ¥300 table charge. Closed Monday.",
    chef_bio: { chef_name: '森山 雅彦', roles: ['Owner-chef (店主, official site; the invoice holder)'], origin: null,
      background: 'The official site signs its greeting 店主 森山 雅彦, and the invoice register lists the same individual. Per the official site: a renovated townhouse full of warm wood, carefully chosen ingredients served simply with small accents, and about 500 wines in stock, chosen to the guest’s wishes. A July 2025 reviewer praises the chef’s skill as a solo operator.',
      philosophy: 'Per the official site: simple dishes with new pairings and small arrangements, and dishes where the ingredients’ own dashi comes through.',
      specialty: 'Seasonal pasta; terrines; wine.',
      anecdotes: [
        { text: 'A July 2025 regular, on a fifth-plus visit, found the octopus with black hummus left the diner wondering how its umami was made.', source: R + 'B512140794/' },
        { text: 'A March 2024 diner found the food a bit salty and hoped it could be toned down.', source: R + 'B481845994/' },
        { text: 'A January 2026 diner liked the duck pâté, which a child also enjoyed, but felt hesitant to bring the family, accepting the shop has its own policy.', source: R + 'B520132290/' },
      ],
      japanese_sources_summary: '公式サイト (coccinella77.com): 京都市下京区のイタリアン Osteria Coccinella、町屋を改装した木のぬくもり溢れる店内、厳選した食材をシンプルにちょっとしたアクセント、ワインは500本以上、二軒目のワインバーとしても、店主 森山 雅彦、メニュー (一例): 前菜約10品 (天然ブリのカルパッチョ1,400円、牡蠣のソテー レモンバターソース1,400円、イチジクと羊のフェタチーズ1,400円、仔羊のテリーヌ・軍鶏のテリーヌ900円、大山豚うで肉の田舎風パテ700円)、パスタ4〜5品 (大江農園のトマト ポモドーロ1,300円、スペイン産にんにくペペロンチーノ1,200円、カルボナーラ1,300円、紅ズワイガニのアラビアータ1,800円、仔羊のカチョエペペ1,800円、黒毛和牛ブリスケのボロネーゼ1,800円、シャラン鴨のラグー1,800円)、下京区高倉通仏光寺東入ル新開町397-2、18:00〜23:30 (L.O. 23:00)、月曜定休 (月1回連休)、21席 (テーブル12、カウンター9)、クレジットカード利用不可。食べログ: イタリアン・ワインバー・バル、火〜日 18:00〜23:30、祝日 18:00〜23:00、チャージ300円、19席、禁煙、カード・PayPay 可、インボイス: 森山 雅彦 (個人)。口コミ (2024〜2026年、英語)。',
      confidence: 'medium', sources: [TB, SITE, MENU, SHOP, R + 'B469987282/', R + 'B480201701/', R + 'B481845994/', R + 'B488867250/', R + 'B495504433/', R + 'B495806388/', R + 'B512140794/', R + 'B518780479/', R + 'B520132290/', R + 'B526375261/', R + 'B536188448/'] },
    cultural_comfort: { level: 'konnichiwa', note: '¥300 table charge; card acceptance differs between sources — bring cash.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区高倉通仏光寺東入ル新開町397-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.001254, 135.763168); cross-checked: GSI 京都府京都市下京区新開町397番地 (lot) 83m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Official site sample menu (undated); dishes change.', last_checked: TODAY, items: [
      it('天然ブリのカルパッチョ', '', 'Wild yellowtail carpaccio with seasonal salad', '¥1,400', 'Starters', 'ask', 'no', '', 'buri_carpaccio'),
      it('大江農園のトマト ポモドーロスパゲッティ', '', 'Oe-farm tomato pomodoro spaghetti', '¥1,300', 'Pasta', 'no', 'ask', '', 'pomodoro'),
      it('仔羊 カチョエペペスパゲッティ', '', 'Lamb cacio e pepe spaghetti', '¥1,800', 'Pasta', 'no', 'no', '', 'lamb_cacio'),
      it('シャラン鴨のラグー スパッカテッレ', '', 'Challans duck ragù spaccatelle', '¥1,800', 'Pasta', 'no', 'no', '', 'duck_ragu'),
    ] }, {
    cuisine: '約500本のワインとアラカルトのオステリア (公式サイト)・前菜は毎晩約10品、例: 天然ブリのカルパッチョ1,400円、牡蠣のソテー レモンバターソース1,400円、イチジクと羊のフェタチーズ1,400円、仔羊や軍鶏のテリーヌ900円、大山豚うで肉の田舎風パテ700円、鶏のテリーヌ600〜700円、豚足と豚すね肉の煮こごり600円、ヴィアザビオのチーズ盛り合わせ1,400円・パスタは4〜5品、例: 大江農園のトマト ポモドーロ1,300円、スペイン産にんにくペペロンチーノ1,200円、カルボナーラ1,300円、イカスミのバヴェッティーネ1,500円、紅ズワイガニのアラビアータ フェットチーネ1,800円、仔羊のカチョエペペ1,800円、黒毛和牛ブリスケのボロネーゼ1,800円、シャラン鴨のラグー1,800円 (公式メニュー)・Yonezawa の豚の自家製ハム、ブリのたたきと発酵野菜、マスのカルパッチョ1,500円、イベリコ豚の赤ワイン煮のパスタ1,800円、熊のボロネーゼ (2024〜2026年の口コミ)',
    neighborhood: '四条烏丸の南、仏光寺の高倉通。四条駅から徒歩5分',
    gf_detail: '要確認。メニューの中心はパスタ (毎晩4〜5品)。カルパッチョ、テリーヌ、チーズなど合いそうな前菜もあるが、グルテンの情報は公開されていない (公式メニュー)。',
    vegan_detail: 'ヴィーガン不可。魚、肉、チーズの前菜、肉のラグーのパスタやメイン。にんにくのペペロンチーノやトマトのポモドーロもメニュー例にあるが、原材料は公開されていない (公式メニュー)。',
    notes: '[イタリアン・四条烏丸、町家のパスタと500本のワイン] 仏光寺通近くの町家を改装した木のぬくもりのあるオステリア。店主がシンプルなイタリア料理にひとひねりを加える。テリーヌ、カルパッチョ、チーズなど約10品の前菜に、1,200円のにんにくのペペロンチーノから仔羊のカチョエペペや鴨のラグーまで4〜5品のパスタ、約500本のワインから選べる。常連はまた来たくなるパスタの店と言い、少ししょっぱいという声も。二軒目のワインバーとしても。チャージ300円。月曜休み。',
  });
}

// ================================================================ monk
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26026737/'; const R = TB + 'dtlrvwlst/';
  const YS = 'https://yousakana.jp/monk/'; const SITE = 'http://restaurant-monk.com/';
  const H = day(['17:00', '20:30']);
  put({
    id: 'kyoto_monk_philosophers_path', name: 'monk', category: 'MOM_AND_POP',
    lat: 35.023166, lng: 135.795759, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the course opens and ends with wood-fired pizza of Japanese wheat and natural yeast (2023–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The cooking is centred on vegetables from Ohara farms, but the course also has fish, meat, cheese and dairy desserts; no vegan course is published (yousakana.jp; 2023–26 reviews).',
    hours_raw: 'Dinner from 17:30, last order 20:30; closed Monday (yousakana.jp, the restaurant’s own text); Tabelog gives 17:00–20:30 Tuesday to Saturday, closed Monday and Sunday. One omakase course built from the day’s ingredients, ¥15,400 (March and July 2026). Book well ahead — a March 2026 diner booked two months out; mostly overseas guests (2024–26 reviews). 14 seats: 6 at the counter facing the wood-fired oven and two tables for four; non-smoking; JCB, AMEX and Diners cards (Tabelog; March 2026). A detached house on the Philosopher’s Path near Ginkakuji; about 1.7 km from Keage Stn, narrow streets for cars (Tabelog; June 2024). Opened December 2015 (October 2023 review).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Philosopher’s Path near Ginkakuji — about 25 min walk from Keage Stn',
    cuisine: 'Omakase of the day’s ingredients cooked in a wood-fired oven, with pizza as the main (yousakana.jp) · ¥15,400 (2026) · begins with a soup and a plain "suyaki" pizza of Japanese wheat and natural yeast with Parmigiano and olive oil · wood-roasted Ohara vegetables, sashimi or fish with seasonal greens, Noto fruit tomatoes · ends with half-and-half pizzas chosen from about six, e.g. shirasu, wild venison ragù with sansho, bamboo shoot, mushroom, shungiku, Yoshida-farm cheese, margherita · desserts such as honey and dill, dill granita, sake-lees mousse (2023–26 reviews) · natural wines, house syrup drinks',
    website: SITE, gmaps: gm('monk 哲学の道 浄土寺'), menu_url: YS,
    notes: "[Italian · Philosopher's Path, wood-fired vegetables and pizza] A fourteen-seat restaurant in a house on the Philosopher's Path, where chef 今井 義浩 (Imai) cooks nearly everything in a wood-fired oven: a plain dough 'suyaki' pizza to start, then vegetables picked up each morning from Ohara farms, fish and seasonal plates, and a closing half-and-half pizza such as shirasu or venison ragù with sansho. One course, about ¥15,400; counter seats face the fire. Featured on Netflix's Chef's Table, it is booked months ahead, mostly by overseas guests. Closed Monday.",
    chef_bio: { chef_name: '今井 義浩', roles: ['Owner-chef (pizza maker)'], origin: null,
      background: 'Per the restaurant’s own text (on yousakana.jp): a small restaurant on the Philosopher’s Path cooking simple food over live fire, with pizza from the wood-fired oven as the main dish; every morning the chef visits farms in the mountains of Ohara and markets around Kyoto. Tabelog notes the owner-chef paused in January 2020 to focus on writing and reopened in March 2020. Reviewers note the opening in December 2015, training at renowned restaurants abroad including one in Denmark and in California (October 2023), and a Netflix Chef’s Table episode (2024). Tabelog Italian WEST "Tabelog 100" 2025 (Tabelog).',
      philosophy: 'Per the restaurant: "Is it possible to express the beauty and the life of the vegetable; to invoke such feelings as the sunlight, the moisture of the soil, the blowing of the wind?"',
      specialty: 'Wood-fired pizza; Ohara vegetables from the oven.',
      anecdotes: [
        { text: 'A June 2026 regular on a twelfth visit comes with the diner’s mother every season, loving a honey-and-dill dessert.', source: R + 'B473716539/' },
        { text: 'An April 2024 diner joined an American colleague who had booked after watching Chef’s Table; everyone else in the room was from overseas.', source: R + 'B483563981/' },
        { text: 'A June 2024 diner drove up and nearly got stuck in the narrow streets, advising a nearby coin park instead.', source: R + 'B486716612/' },
      ],
      japanese_sources_summary: 'yousakana.jp (店の紹介と店自身の文章): 京都・哲学の道、薪窯のレストラン monk、料理人 (ピザ職人) の今井義浩さん、毎日畑や市場から仕入れた食材を薪窯で、住所 左京区浄土寺下南田町147、17:30〜20:30 (L.O)、その日の食材によるお任せ、定休 月曜、電話 075-748-1154、メインにはピザ、毎日畑や市場から仕入れた食材 (英語の文では毎朝 Ohara の畑と京都の市場へ)。食べログ: イタリアン・ピザ、火〜土 17:00〜20:30、月・日休み、カード (JCB・AMEX・Diners)、禁煙、店主は2020年1月から執筆のため休業し3月に再開、イタリアン WEST 百名店 2025。口コミ (2023〜2026年、英語): コース15,400円、2015年12月開店、Chef’s Table、カウンター6席とテーブル2卓、素焼きのピザ、Ohara の野菜、ハーフ&ハーフのピザ。',
      confidence: 'medium', sources: [TB, YS, SITE, R + 'B472437830/', R + 'B473716539/', R + 'B476654784/', R + 'B483563981/', R + 'B486716612/', R + 'B490764194/', R + 'B517301088/', R + 'B524743729/', R + 'B532278158/', R + 'B532280766/', R + 'B537313364/'] },
    cultural_comfort: { level: 'english', note: 'Mostly overseas guests and some foreign staff (2024 reviews); book months ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区浄土寺下南田町147',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and the restaurant’s text on yousakana.jp; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.023166, 135.795759); cross-checked: GSI 京都府京都市左京区浄土寺下南田町147番地 (lot) 35m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B524743729/', R + 'B532278158/'],
    price_note: 'Course price from March and July 2026 reviews.', last_checked: TODAY, items: [
      it('', 'omakase', 'Wood-fired omakase course with pizza', '¥15,400', 'Course', 'no', 'ask', 'March and July 2026.', 'course'),
    ] }, {
    cuisine: 'その日の食材を薪窯で料理するお任せで、メインはピザ (yousakana.jp)・15,400円 (2026年)・最初はスープと、国産小麦と天然酵母の生地にパルミジャーノとオリーブオイルだけの素焼きのピザ・Ohara の野菜の薪窯焼き、刺身や魚と季節の青菜、Noto のフルーツトマト・最後は約6種から選ぶハーフ&ハーフのピザ: しらす、山椒の鹿のラグー、筍、きのこ、春菊、Yoshida farm のチーズ、マルゲリータなど・はちみつとディル、ディルのグラニテ、酒粕のムースなどのデザート (2023〜2026年の口コミ)・自然派ワイン、自家製シロップのドリンク',
    neighborhood: '銀閣寺に近い哲学の道。蹴上駅から徒歩約25分',
    gf_detail: 'グルテンフリーではない。コースは国産小麦と天然酵母の薪窯のピザで始まり、ピザで終わる (2023〜2026年の口コミ)。',
    vegan_detail: '要確認。Ohara の農家の野菜が中心だが、魚、肉、チーズ、乳製品のデザートもある。ヴィーガンのコースは公開されていない (yousakana.jp、2023〜2026年の口コミ)。',
    notes: '[イタリアン・哲学の道、薪窯の野菜とピザ] 哲学の道沿いの一軒家にある14席のレストラン。今井義浩シェフがほぼすべてを薪窯で料理する。最初は生地だけの素焼きのピザ、毎朝 Ohara の畑から仕入れる野菜、魚や季節の皿、最後はしらすや山椒の効いた鹿のラグーなどハーフ&ハーフのピザ。コースは1つで15,400円ほど、カウンターは窯の火の前。Netflix の Chef’s Table で紹介され、数か月先まで予約が埋まり、客は海外からが中心。月曜休み。',
  });
}

// ================================================================ SCALAE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26031801/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.keihanhotels-resorts.co.jp/the-thousand-kyoto/restaurants/scalae/';
  const PR1 = 'https://www.keihan.co.jp/corporate/info/release/assets/260903_the-thousand-kyoto.pdf';
  const PR2 = 'https://www.keihan.co.jp/corporate/info/release/assets/260911_the-thousand-kyoto.pdf';
  const CORP = 'https://www.houjin-bangou.nta.go.jp/henkorireki-johoto.html?selHouzinNo=8130001019457';
  const H = day(['11:30', '15:30'], ['17:30', '21:30']);
  put({
    id: 'kyoto_scalae_the_thousand', name: 'SCALAE (スカーラエ, THE THOUSAND KYOTO)', category: 'OMNI',
    lat: 34.986479, lng: 135.761561, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking — the hotel asks guests with food allergies to tell staff in advance (press release). Courses include pasta, bread, gnocchi and breaded mains (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask in advance. Courses use meat, fish, ham and dairy; no vegan course is published (2026 reviews; press releases).',
    hours_raw: 'Breakfast 7:00–10:00 (last order), lunch 11:30–15:30 (last order 14:30), dinner 17:30–21:30 (last orders: course 20:00, à la carte 20:30, drinks 21:00); closed Wednesday (except holidays) (hotel press releases, September 2026; Tabelog). Service charge 15% of the pre-tax total from 1 April 2025 (Tabelog’s Japanese original: サービス料15％; also in the hotel’s release). Cancellation 100% from two days before (Tabelog). 110 seats with 3 private rooms (room fee ¥11,000); non-smoking; cards, e-money and QR; hotel parking (Tabelog; press release). Non-alcoholic tea pairing available (May 2026). On the 2nd floor of THE THOUSAND KYOTO, up the hotel’s grand staircase; 2 min east of JR Kyoto Stn, via underground exit 5 (Tabelog; September 2026).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'THE THOUSAND KYOTO, east of Kyoto Station — 2 min from JR Kyoto Stn',
    cuisine: 'Hotel Italian of seasonal courses with sommelier-team pairings (press releases; 2026 reviews) · lunch course "Stelo" (August 2026): prosciutto and peach amuse, corn carbonara, spaghettini with Kamo eggplant, myoga and fried white fish in white miso, the day’s fried fish with garden tomato sauce, Japanese-beef hamburg, zuppa inglese · gnocchi fritto, pork cotoletta with roasted pear (October 2026); summer truffle pasta in a ¥10,000 seven-course lunch (July 2026) · wine pairings by a team led by the hotel’s beverage director, a World’s Best Sommelier semi-finalist; non-alcoholic tea pairing · Christmas 2026 sommelier dinner ¥120,000 with seven drinks; LE TRABE × SCALAE collaboration 29–31 January 2027, ¥28,000 (press releases)',
    website: SITE, gmaps: gm('SCALAE THE THOUSAND KYOTO'), menu_url: SITE,
    notes: "[Italian · Kyoto Station, hotel Italian up the grand staircase] The Italian restaurant of THE THOUSAND KYOTO, two minutes from Kyoto Station, reached up the hotel's grand staircase. Chef Kenta Shibahara, born in Kyoto and trained at a Michelin-starred restaurant in Naples, cooks seasonal courses that play with texture — corn 'carbonara', Kamo eggplant spaghettini with white miso — paired by a sommelier team known for competition results. Lunch courses are the easy way in; 15% service on top. 110 seats and private rooms; closed Wednesday.",
    chef_bio: { chef_name: '芝原 健太 (Kenta Shibahara)', roles: ['料理長 (head chef) of SCALAE; operator 京阪ホテルズ＆リゾーツ株式会社'], origin: 'Kyoto (press release).',
      background: 'Per the hotel’s September 2026 press release: 芝原 健太, born in Kyoto, went to Italy in 2009 and learned European technique at a Michelin-starred ristorante in Naples, then became SCALAE’s chef at THE THOUSAND KYOTO in 2021, building the cooking on “素材自然回帰” — conveying each producer’s thoughts and philosophy to the diner. The hotel is the Keihan group’s flagship; the invoice number belongs to 京阪ホテルズ＆リゾーツ株式会社 (NTA corporate-number site). Its sommelier team is led by the beverage director 岩田 渉 (A.S.I. World’s Best Sommelier semi-finalist, fifth in 2023) and chef-sommelier 沖中 亮真 (press release). Tabelog Italian WEST "Tabelog 100" 2023 (Tabelog).',
      philosophy: 'Per the press release: "素材自然回帰" — a return to the ingredient and its producer, seeking flavour rooted in harmony.',
      specialty: 'Seasonal Italian courses with wine or tea pairings.',
      anecdotes: [
        { text: 'A May 2026 lunch guest chose a non-alcoholic tea pairing, each tea matched to a dish.', source: R + 'B528264156/' },
        { text: 'A July 2026 diner was frustrated that the drink menu was slow and nobody explained the bread, olive oil or refills.', source: R + 'B531679621/' },
        { text: 'A May 2026 diner found the drinks pricey and wished for more reasonable options.', source: R + 'B529244303/' },
      ],
      japanese_sources_summary: '京阪ホテルズ＆リゾーツのプレスリリース (2026年9月): THE THOUSAND KYOTO 2階 イタリア料理「SCALAE (スカーラエ)」、京阪グループのフラッグシップホテル、料理長 芝原 健太 (京都生まれ、2009年に渡伊、ナポリのミシュラン星付きリストランテで修業、2021年にシェフ就任、素材自然回帰)、LE TRABE × SCALAE 2027 (2027年1月29〜31日、28,000円、サービス料15%と消費税込み)、Christmas Dinner (2026年12月19日、120,000円、ペアリング7銘柄)、シェフソムリエ 沖中 亮真、ビバレッジディレクター 岩田 渉、営業時間 朝食7:00〜10:00 (L.O.)・ランチ11:30〜15:30 (14:30 L.O.)・ディナー17:30〜21:30 (コース20:00、アラカルト20:30、ドリンク21:00 L.O.)、水曜定休、110席 (個室3室)、食物アレルギーは事前にスタッフへ。食べログ: イタリアン・ワインバー、下京区東塩小路町570 THE THOUSAND KYOTO 2F、JR京都駅中央口から東へ徒歩約2分、サービス料15% (2025年4月1日から税抜の15%)、キャンセル料 2日前から100%、個室料11,000円、カード・電子マネー・QR 可、インボイス T8130001019457 (京阪ホテルズ＆リゾーツ株式会社)、イタリアン WEST 百名店 2023。口コミ (2026年5〜10月、英語)。',
      confidence: 'medium', sources: [TB, SITE, PR1, PR2, CORP, R + 'B508144707/', R + 'B526884570/', R + 'B527307304/', R + 'B528264156/', R + 'B529244303/', R + 'B530113197/', R + 'B531173298/', R + 'B531679621/', R + 'B534161682/', R + 'B534933003/', R + 'B537350530/'] },
    cultural_comfort: { level: 'english', note: 'Hotel restaurant; 15% service; cancellation fees from two days before.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区東塩小路町570 THE THOUSAND KYOTO 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Hotel press releases (September 2026) and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.986479, 135.761561); cross-checked: GSI 京都府京都市下京区東塩小路町570番地 (lot) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531173298/', PR1],
    price_note: 'Course prices from a July 2026 review and the September 2026 press release; 15% service extra unless stated.', last_checked: TODAY, items: [
      it('', '', 'Seven-course lunch', '¥10,000', 'Lunch', 'ask', 'ask', 'July 2026 review.', 'lunch_course'),
      it('', '', 'LE TRABE × SCALAE 2027 collaboration course', '¥28,000', 'Event', 'ask', 'ask', '29–31 January 2027; service and tax included.', 'le_trabe'),
    ] }, {
    cuisine: 'ソムリエチームのペアリングと季節のコースのホテルのイタリアン (プレスリリース、2026年の口コミ)・ランチコース「Stelo」(2026年8月): 生ハムと桃のアミューズ、とうもろこしのカルボナーラ、賀茂茄子と茗荷と白身魚のフライのスパゲッティーニ (白味噌)、本日の魚のフライと菜園風トマトソース、和牛のハンバーグ、ズッパ・イングレーゼ・ニョッキのフリット、梨のローストを添えた豚のコトレッタ (2026年10月)、7品で10,000円のランチの夏トリュフのパスタ (2026年7月)・世界最優秀ソムリエコンクール準決勝進出のビバレッジディレクターが率いるチームのワインペアリング、ノンアルコールのお茶のペアリング・2026年のクリスマスのソムリエディナー120,000円 (7銘柄)、LE TRABE × SCALAE (2027年1月29〜31日、28,000円) (プレスリリース)',
    neighborhood: '京都駅の東、THE THOUSAND KYOTO。JR京都駅から徒歩2分',
    gf_detail: '予約時に要確認。食物アレルギーは事前にスタッフへ、とホテルは案内している (プレスリリース)。コースにはパスタ、パン、ニョッキ、パン粉の衣のメインが入る (2026年の口コミ)。',
    vegan_detail: '事前に要確認。コースは肉、魚、ハム、乳製品を使い、ヴィーガンのコースは公開されていない (2026年の口コミ、プレスリリース)。',
    notes: '[イタリアン・京都駅、大階段を上るホテルのイタリアン] 京都駅から徒歩2分の THE THOUSAND KYOTO のイタリア料理店。ホテルの大階段を上った2階。京都生まれでナポリのミシュラン星付き店で修業した芝原健太シェフが、とうもろこしの「カルボナーラ」や白味噌の賀茂茄子のスパゲッティーニなど食感で遊ぶ季節のコースを作り、コンクールで実績のあるソムリエチームがペアリングする。気軽に試すならランチのコースで、サービス料15%が別。110席と個室。水曜休み。',
  });
}

save();
