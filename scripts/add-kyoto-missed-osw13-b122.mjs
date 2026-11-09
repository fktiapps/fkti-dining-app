// Kyoto priority (kyoto-missed), worker osw13, batch 122 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: クリスタル, そば処 志な乃, アッローロ ミオ, マルニカフェ. Brands checked against queue-status, data/kyoto.json, than.co.jp/brands and 株式会社WILL (none match).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-122');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26043006', 'big-chain hotel venue (Greg 11-08 ruling): 牛飯五帖 is the ground-floor restaurant of 変なホテル京都五条 (Tabelog address), serving the hotel breakfast buffet and a public lunch; its invoice number T4180001106436 is registered to 株式会社ヒューマンテーブル of Nagoya (NTA registry)');
skip('26039238', 'chain: LIBERTE PATISSERIE BOULANGERIE 京都清水店 — a branch of the Paris bakery brand Liberté (Paris shops, Kichijoji, Kyoto); same ruling as リベルテ 京都店 26031295');

// ================================================================ クリスタル
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26028912/'; const R = TB + 'dtlrvwlst/';
  const A = ['11:00', '17:00'], B = ['11:00', '17:30'];
  put({
    id: 'kyoto_crystal_kawaramachi', name: 'クリスタル (Crystal)', category: 'OMNI',
    lat: 35.015483, lng: 135.770215, cuisine_type: 'kissaten',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: lunch plates of fried mackerel, cutlets, hamburg steak with demi-glace and miso soup (2017–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: daily lunches of salmon, mackerel, meat tofu, hamburg steak and cutlets (2017–2026 reviews).',
    hours_raw: 'Tabelog: Mon–Thu, Sun and public holidays 11:00–17:00; Fri–Sat 11:00–17:30; hours may change. Reservations taken. Cards; no e-money or QR codes. Parking. A Showa-era café-lounge attached to a long-established school-trip inn, with its own street entrance on Kawaramachi-dori east of Takeyamachi; box sofas and a disco ball, and the room connects to the inn lobby. Hard to spot from the street (October 2026). 6 min from Jingu-Marutamachi.',
    hours: { 0: [A], 1: [A], 2: [A], 3: [A], 4: [B], 5: [B], 6: [A] }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi-dori by Takeyamachi — 6 min from Jingu-Marutamachi',
    cuisine: 'A retro lounge-café in a school-trip inn serving big, cheap daily lunch plates to local workers (Tabelog; 2017–2026 reviews) · daily lunch ¥900, e.g. salmon sashimi, fried mackerel and meat tofu with salad, rice and miso soup; large rice free (October 2025) · grilled salmon with salmon sashimi; kinpira (August 2023) · hamburg lunch with demi-glace and a generous salad (October 2026) · a meat plate of cutlets and hamburg steak (May 2017)',
    website: null, gmaps: gm('クリスタル 河原町 竹屋町 喫茶'), menu_url: null,
    notes: '[Kissaten · Kawaramachi-Takeyamachi, a Showa lounge in a school-trip inn] A time-capsule café attached to an old school-trip inn — box sofas, a disco ball, inn guests drifting in from the lobby — serving hearty ¥900 lunch plates of fish or hamburg steak with salad and miso soup. Under ¥1,000. Easy to miss from the street.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Reviewers describe a lounge-style restaurant attached to a long-established school-trip inn, with a separate street entrance and a retro Showa interior that has not changed (2017, October 2026); a May 2017 visitor saw female staff in uniform and a bar counter, and guessed it turns into a lounge for inn guests in the evening. The inn\'s name is given differently by reviewers and is not confirmed here.',
      philosophy: null,
      specialty: 'Daily lunch plates.',
      anecdotes: [
        { text: 'October 2025: "I had the daily special lunch for JPY 900, which included salmon sashimi, fried mackerel, and meat tofu, along with salad, rice, and miso soup… All of this for just JPY 900!"', source: R + 'B515399232/' },
        { text: 'October 2026: "The seating features box sofas, and a disco ball hangs from the ceiling, suggesting it might transform into a lounge at night."', source: R + 'B538730098/' },
      ],
      japanese_sources_summary: '食べログ: クリスタル、喫茶店・カフェ、中京区河原町通竹屋町東入ル、神宮丸太町から348m、月〜木・日・祝日11:00〜17:00、金・土11:00〜17:30、予約可、カード可、電子マネー・QR不可、駐車場あり。口コミ (2017年5月〜2026年11月、英語): 修学旅行の老舗旅館に併設の昭和の喫茶ラウンジ、通りに面した入口、ボックスソファとミラーボール、旅館のロビーとつながる、日替わりランチ900円 (鮭の刺身、さばのフライ、肉豆腐、サラダ、ご飯、みそ汁、大盛り無料、2025年10月)、ハンバーグランチ (2026年10月)、2017年はカツとハンバーグの肉の盛り合わせ800円。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B264661521', 'B470376821', 'B515399232', 'B537406755', 'B538730098'])) },
    cultural_comfort: { level: 'japanese', note: 'Retro lunch lounge; set lunches.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区河原町通竹屋町東入ル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated October 2025 and October–November 2026.' },
    pin_source: `Tabelog ${TB} (35.015483, 135.770215); address is a street direction (河原町通竹屋町東入ル) with no lot — GSI matches only 中京区, so approximate; nearest pin kyoto_kappo_harada 59.5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B515399232/', R + 'B538730098/'],
    price_note: 'Lunch price from an October 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Daily lunch (fish, small dishes, rice, miso soup)', '¥900', 'Set meal', 'no', 'no', 'October 2025; large rice free.', 'higawari_lunch'),
      it('', '', 'Hamburg lunch', '', 'Set meal', 'no', 'no', 'October 2026.', 'hamburg_lunch'),
    ] }, {
    cuisine: '修学旅行の旅館の中のレトロなラウンジ喫茶。地元の勤め人向けのボリュームのある手頃な日替わりランチ (食べログ、2017〜2026年の口コミ)・日替わりランチ900円、例えば鮭の刺身、さばのフライ、肉豆腐にサラダ、ご飯、みそ汁、ご飯大盛り無料 (2025年10月)・焼き鮭と鮭の刺身、きんぴら (2023年8月)・デミグラスのハンバーグランチ、サラダたっぷり (2026年10月)・カツとハンバーグの肉の盛り合わせ (2017年5月)',
    neighborhood: '河原町通、竹屋町付近。神宮丸太町から徒歩6分',
    gf_detail: 'グルテンフリーではない: さばのフライ、カツ、デミグラスのハンバーグ、みそ汁のランチ (2017〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 鮭、さば、肉豆腐、ハンバーグ、カツの日替わりランチ (2017〜2026年の口コミ)。',
    notes: '[喫茶店・河原町竹屋町、修学旅行の旅館の昭和のラウンジ] 古い修学旅行の旅館に併設された時が止まったような喫茶。ボックスソファにミラーボール、ロビーから旅館の客もやって来る。魚やハンバーグにサラダとみそ汁がつく900円のランチはボリュームたっぷり。1,000円未満。通りからは見落としやすい。',
  });
}

// ================================================================ そば処 志な乃
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26036628/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '20:00']);
  put({
    id: 'kyoto_soba_shinano', name: 'そば処 志な乃 (Soba-dokoro Shinano)', category: 'OMNI',
    lat: 35.013526, lng: 135.777209, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat udon, soba in soy-based broth, and tempura on most bowls (2024–2026 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi broths, egg-topped bowls, oyakodon and shrimp tempura (2024–2026 reviews).',
    hours_raw: 'Tabelog: Tue–Sun 11:00–20:00; closed Monday; hours may change. No reservations; a queue can form at lunch (November 2026). Cash only. Counter seating; non-smoking; parking (the lot has moved — December 2025). Free delivery nearby in a wooden carrier (December 2025). On Nijo-dori toward Okazaki, in the Imperial Okazaki building, 491 m from Higashiyama Station.',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nijo-dori near Okazaki — 491 m from Higashiyama',
    cuisine: 'A cheerful neighbourhood soba and udon shop marking 50 years, known for pale Sarashina-style soba and egg-topped rice bowls (Tabelog; 2024–2026 reviews) · tempura soba or udon ¥1,200 — two shrimp, shiso and nori tempura, spinach (November 2026) · tamago-toji udon with yuzu ¥800 (November 2026) · tempura with egg over soba or rice (March 2026) · oyakodon with green onion; kitsune-don; abutama-don (fried tofu and egg) (December 2025 – February 2026) · tororo soba; tanuki udon; zaru soba; soba and tempura set (2026)',
    website: null, gmaps: gm('そば処 志な乃 二条'), menu_url: null,
    notes: '[Soba · Nijo-Okazaki, a 50-year neighbourhood noodle shop] A busy local soba-ya with a warm welcome: pale Sarashina soba or udon with freshly fried tempura (¥1,200), silky egg-drop udon (¥800) and rich egg-topped rice bowls. Cash only. Lunch queues. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'A regular writes that the shop celebrated its 50th anniversary and was refurbished (November 2026); a March 2026 visitor remembers it about 20 years ago beneath an apartment building that is now a supermarket, before it moved across the street. Reviewers praise a cheerful, kind owner and staff who greet guests loudly and give children sweets (December 2025).',
      philosophy: null,
      specialty: 'Sarashina-style soba; egg rice bowls.',
      anecdotes: [
        { text: 'December 2025: "While many people tend to order the tempura soba, I highly recommend the Kitsune Don and Abutama Don… For those living nearby, you can order delivery for free. They bring it in a traditional food carrier."', source: R + 'B518741453/' },
        { text: 'February 2026: "The Tanuki Udon featured larger pieces of deep-fried tofu… I personally think it would be better if the pieces were smaller and the sweetness toned down a bit."', source: R + 'B522011045/' },
        { text: 'November 2026: "The udon noodles were a bit softer than I expected, lacking some chewiness."', source: R + 'B538791667/' },
      ],
      japanese_sources_summary: '食べログ: そば処 志な乃、そば、左京区二条通り高倉正往寺町462-2 インペリアル岡崎1F、東山から491m、火〜日11:00〜20:00、月曜休み、予約不可、現金のみ、禁煙、カウンター、駐車場あり。口コミ (2024年9月〜2026年11月、英語): 50周年 (2026年11月)、20年前は向かいのマンションの下にあった (2026年3月)、白い更科そば、天ぷらそば・天ぷらうどん1,200円 (海老2尾、しそ、のり、ほうれん草)、玉子とじうどん800円、天ぷらの玉子とじ、親子丼、きつね丼、あぶ玉丼、とろろそば、たぬきうどん、近所は無料の出前、昼は行列、たぬきの揚げが甘すぎるとの声 (2026年2月)、うどんが柔らかいとの声 (2026年11月)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B498849819', 'B518741453', 'B519554142', 'B521329333', 'B522011045', 'B523868962', 'B524045304', 'B529673871', 'B536775048', 'B538772682', 'B538791667'])) },
    cultural_comfort: { level: 'japanese', note: 'Busy local soba shop; cash only.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区二条通り高倉正往寺町462-2 インペリアル岡崎1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated December 2025 to November 2026.' },
    pin_source: `Tabelog ${TB} (35.013526, 135.777209); GSI lot 京都府京都市左京区正往寺町462番地 about 75m away; nearest pin kyoto_cha_to_koji_tsukiakari 16.4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B498849819/', R + 'B538772682/', R + 'B538791667/'],
    price_note: 'Prices from November 2026 reviews (tax incl.).', last_checked: TODAY, items: [
      it('', '', 'Tempura soba', '¥1,200', 'Noodles', 'no', 'no', 'November 2026.', 'tempura_soba'),
      it('', '', 'Tamago-toji udon', '¥800', 'Noodles', 'no', 'no', 'November 2026.', 'tamagotoji_udon'),
      it('', '', 'Oyakodon', '', 'Rice', 'ask', 'no', 'February 2026.', 'oyakodon'),
      it('', '', 'Kitsune-don', '', 'Rice', 'ask', 'no', 'December 2025.', 'kitsune_don'),
    ] }, {
    cuisine: '50周年を迎えた明るい町のそば・うどん屋。白い更科そばと卵の丼で知られる (食べログ、2024〜2026年の口コミ)・天ぷらそば・天ぷらうどん1,200円、海老2尾、しそとのりの天ぷら、ほうれん草 (2026年11月)・柚子の香る玉子とじうどん800円 (2026年11月)・天ぷらの玉子とじのそばや丼 (2026年3月)・ねぎの親子丼、きつね丼、あぶ玉丼 (2025年12月〜2026年2月)・とろろそば、たぬきうどん、ざるそば、そばと天ぷらの盛り合わせ (2026年)',
    neighborhood: '二条通、岡崎の近く。東山から491m',
    gf_detail: 'グルテンフリーではない: 小麦のうどん、しょうゆのつゆのそば、ほとんどの品に天ぷら (2024〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可: だしのつゆ、卵の丼、親子丼、海老の天ぷら (2024〜2026年の口コミ)。',
    notes: '[そば・二条岡崎、50年の町のそば屋] 元気な声で迎えてくれる地元のにぎやかなそば屋。白い更科そばやうどんに揚げたての天ぷら (1,200円)、なめらかな玉子とじうどん (800円)、卵たっぷりの丼。現金のみ。昼は行列。月曜休み。',
  });
}

// ================================================================ アッローロ ミオ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26033724/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'kyoto_alloro_mio', name: 'アッローロ ミオ (Alloro Mio)', category: 'OMNI',
    lat: 35.015705, lng: 135.768772, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: pici, pappardelle and other pastas, gnocchi and a crepe gratin (2024–2026 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Tuscan meat dishes — charcuterie, venison hamburg, wild-boar and meat ragùs, tripe, pork, chicken (2024–2026 reviews).',
    hours_raw: 'Tabelog: Mon, Tue, Thu–Sun 18:00–23:00 (L.O. 22:00); closed Wednesday. Reservations taken, by phone or online; often full (September 2026). Cards: AMEX only (Tabelog). No e-money. 16 seats: 10 at tables, 6 at the counter. Non-smoking. Half portions possible (October 2026). Shared dishes are plated individually for groups (2024–2025). On Kawaramachi-dori north of Takeyamachi, 7–8 min from Jingu-Marutamachi or Kyoto Shiyakusho-mae.',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi-dori north of Takeyamachi — 7 min from Jingu-Marutamachi',
    cuisine: 'A small Tuscan trattoria with a generous assorted-appetizer plate, handmade pici and a much-loved venison hamburg steak (Tabelog; 2023–2026 reviews) · assorted appetizers: charcuterie, salad, carpaccio and cold dishes, served per person (2024–2026) · venison hamburg steak with lemon (2024–2025) · pici with pork-cheek ragù; pappardelle with Tuscan meat sauce; wild-boar ragù; carrettiera tomato spaghetti; sweetfish spaghetti (2024–2026) · honeycomb tripe in tomato; porcini omelette; bone-in pork shoulder; ricotta and spinach crepe gratin (2024) · Awa-odori chicken risotto; lemon and cheese risotto; mussels; fried sweetfish; roast beef (2025–2026) · Earl Grey panna cotta; cheesecake; gelato · wine by the carafe',
    website: null, gmaps: gm('アッローロ ミオ 京都'), menu_url: TB + 'dtlmenu/',
    notes: '[Tuscan Italian · Kawaramachi-Marutamachi, a 16-seat trattoria] A friendly little Tuscan place: start with the lavish appetizer plate, then thick handmade pici, wild-boar ragù or the venison hamburg steak, with carafe wine. About ¥4,000–8,000. Books up — reserve. AMEX only for cards. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null,
      background: 'Reviewers (2023–2026) describe a chef they enjoy chatting with at the counter and attentive staff who explain availability by phone. Criticisms: long gaps between dishes for a large group (May 2025), a "bit overpriced" feeling (June 2025) and an average squid gnocchi.',
      philosophy: null,
      specialty: 'Tuscan pasta; venison hamburg steak.',
      anecdotes: [
        { text: 'October 2025: "The balance of acidity, sweetness, and richness in the tomatoes was simply outstanding!… My partner was surprised by how luxurious the appetizers were, even considering the price."', source: R + 'B516021215/' },
        { text: 'May 2025: "We ordered an assorted platter of appetizers, four types of pasta, and a risotto to share, and to our surprise, each dish was served individually!… the intervals between the dishes were a bit long."', source: R + 'B506049373/' },
        { text: 'September 2026: "The mussels were incredibly plump and fluffy—I\'ve never had such delicious mussels before."', source: R + 'B535486429/' },
      ],
      japanese_sources_summary: '食べログ: アッローロ ミオ、イタリアン・ハンバーグ・パスタ、中京区河原町通竹屋町上る大文字町242-4、京都市役所前から徒歩8分、月・火・木〜日18:00〜23:00 (L.O.22:00)、水曜休み、予約可、16席 (テーブル10・カウンター6)、禁煙、カードはAMEXのみ、電子マネー不可、ワインにこだわる。口コミ (2023年3月〜2026年10月、英語): トスカーナ料理、前菜の盛り合わせ (1人ずつ盛り付け)、鹿肉のハンバーグ、豚ほほ肉のラグーのピチ、トスカーナのミートソースのパッパルデッレ、猪のラグー、トリッパ、ポルチーニのオムレツ、Awa-odoriの鶏のリゾット、ムール貝、鮎のスパゲッティ、アールグレイのパンナコッタ、ハーフサイズ可、料理の間隔が長いとの声 (2025年5月)、少し高いとの声 (2025年6月)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B463166406', 'B477875726', 'B480177211', 'B497660223', 'B498064410', 'B506049373', 'B508576258', 'B516021215', 'B525300970', 'B535486429', 'B537326735'])) },
    cultural_comfort: { level: 'friendly', note: 'Small trattoria; book ahead; AMEX is the only card listed.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区河原町通竹屋町上る大文字町242-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated 2025 to October 2026.' },
    pin_source: `Tabelog ${TB} (35.015705, 135.768772); GSI matched a different 大文字町242 about 1.8km away (wrong-town match), so approximate; the Tabelog point sits on Kawaramachi-dori north of Takeyamachi as the address says; nearest pin kyoto_nikumon_kawaramachi 12.4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B498064410/', R + 'B516021215/', R + 'B525300970/'],
    price_note: 'No dish prices given; about ¥4,000–8,000 per person (2024–2026 reviews).', last_checked: TODAY, items: [
      it('', '', 'Assorted appetizers', '', 'Antipasti', 'ask', 'no', '2024–2026.', 'antipasto_misto'),
      it('', '', 'Venison hamburg steak', '', 'Main', 'ask', 'no', '2024–2025.', 'venison_hamburg'),
      it('', '', 'Pici with pork-cheek ragù', '', 'Pasta', 'no', 'no', 'March 2026.', 'pici_ragu'),
      it('', '', 'Pappardelle with Tuscan meat sauce', '', 'Pasta', 'no', 'no', 'December 2024.', 'pappardelle'),
      it('', '', 'Mussels', '', 'Seafood', 'ask', 'no', 'September 2026.', 'mussels'),
    ] }, {
    cuisine: '豪華な前菜の盛り合わせ、手打ちのピチ、評判の鹿肉のハンバーグの小さなトスカーナ料理店 (食べログ、2023〜2026年の口コミ)・前菜の盛り合わせ: シャルキュトリー、サラダ、カルパッチョ、冷菜、1人ずつ盛り付け (2024〜2026年)・レモンを添えた鹿肉のハンバーグ (2024〜2025年)・豚ほほ肉のラグーのピチ、トスカーナのミートソースのパッパルデッレ、猪のラグー、トマトのカレッティエラ、鮎のスパゲッティ (2024〜2026年)・トリッパのトマト煮、ポルチーニのオムレツ、骨付き豚肩肉のグリル、リコッタとほうれん草のクレープのグラタン (2024年)・Awa-odoriの鶏のリゾット、レモンとチーズのリゾット、ムール貝、鮎のフライ、ローストビーフ (2025〜2026年)・アールグレイのパンナコッタ、チーズケーキ、ジェラート・カラフェのワイン',
    neighborhood: '河原町通、竹屋町の北。神宮丸太町から徒歩7分',
    gf_detail: 'グルテンフリーではない: ピチ、パッパルデッレなどのパスタ、ニョッキ、クレープのグラタン (2024〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可: シャルキュトリー、鹿肉のハンバーグ、猪や肉のラグー、トリッパ、豚、鶏などトスカーナの肉料理 (2024〜2026年の口コミ)。',
    notes: '[トスカーナ料理・河原町丸太町、16席のトラットリア] 気さくな小さなトスカーナ料理店。まず豪華な前菜の盛り合わせ、次に太い手打ちのピチ、猪のラグー、鹿肉のハンバーグを、カラフェのワインで。4,000〜8,000円ほど。満席になりやすいので予約を。カードはAMEXのみ。水曜休み。',
  });
}

// ================================================================ マルニカフェ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26022810/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '16:00']);
  put({
    id: 'kyoto_maruni_cafe', name: 'マルニカフェ (Maruni Cafe)', category: 'OMNI',
    lat: 34.996517, lng: 135.756613, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Summer kakigori is shaved ice with homemade fruit syrups, shiratama and ice cream, but toppings such as rare-cheese sauce and Earl Grey jelly are not described; the autumn–winter taiyaki are wheat batter (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: most kakigori are milk-based (milk syrups, condensed milk, vanilla ice cream, rare-cheese sauce), and the taiyaki come with cream cheese, cream and butter (2025–2026 reviews).',
    hours_raw: 'Tabelog: Tue–Sat 11:30–16:00; closed Sunday and Monday, plus irregular days. Seasonal menu: kakigori only from July to September; taiyaki desserts in autumn and winter (from October and again in February); a lunch menu at other times (September 2026). In peak summer you must sign the paper list at the door from 9:00 on the day for a time slot — people queue from 7–8 am; the 2026 sign-up period ended on 8 September. One drink per person (October 2026). Cash only. No service charge (「なし」, Tabelog Japanese original). 30 seats including a counter; non-smoking. 2nd floor of the Tsukuru building on Gojo-dori west of Shinmachi, 250 m from Gojo exit 2.',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Gojo-dori west of Shinmachi — 250 m from Gojo',
    cuisine: 'A 2nd-floor café famous for summer kakigori with homemade fruit syrups and whole fresh fruit, and plated taiyaki desserts in the cooler months (Tabelog; 2025–2026 reviews) · peach milk vanilla kakigori ¥2,200 (¥200 less without ice cream), with shiratama (July–September 2026) · fig royal-milk-tea kakigori ¥2,000, with rare cheese ¥2,200; Shine Muscat vanilla ¥2,500 (August–September 2026) · Uji matcha with ice cream ¥1,700 (September 2025); Uji kintoki milk; Miyazaki mango; strawberry (2026) · autumn taiyaki plates: apple with caramelised apple, almonds and ice cream; sweet potato and cream cheese (October 2026) · tea and wine',
    website: null, gmaps: gm('マルニカフェ 五条'), menu_url: null,
    notes: '[Kakigori café · Gojo-Shinmachi, peach shaved ice and plated taiyaki] One of Kyoto\'s cult shaved-ice spots: fluffy kakigori piled with whole peaches, figs or Shine Muscat and homemade syrups (¥1,700–2,500), July–September only; plated taiyaki desserts in autumn and winter. In summer, sign the list at the door from 9 am. One drink each. Cash only. Closed Sun and Mon.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Regulars (2025–2026) describe calm music, pleasant service and an owner who suggests tea with the taiyaki (October 2026). In July–August it is near impossible to get in without signing up early; quieter from mid-September. One August 2026 diner found the fig milk-tea version weak, and another ran out of syrup before the ice.',
      philosophy: null,
      specialty: 'Fruit kakigori; plated taiyaki desserts.',
      anecdotes: [
        { text: 'August 2026: "There are no online reservations; you write your name on a reservation sheet in front of the cafe starting at 9 AM on the day of your visit. A friend of mine lined up around 7 AM and secured the first reservation slot for 2 PM."', source: R + 'B534197571/' },
        { text: 'October 2026: "This time, we have apple taiyaki… The owner mentioned that this taiyaki pairs well with tea… Please note that there is a one-drink minimum!"', source: R + 'B495863065/' },
        { text: 'August 2026: "Unfortunately, the figs were just fresh ones on top, and the royal milk tea was quite weak."', source: R + 'B535116054/' },
      ],
      japanese_sources_summary: '食べログ: マルニカフェ、カフェ・たい焼き・大判焼き、下京区五条通新町西入西錺屋町25 つくるビル2F、地下鉄五条駅2番出口から西へ約250m、火〜土11:30〜16:00、日・月休み、不定休、予約は当日9時から店頭で記入、カード・電子マネー・QR不可、サービス料「なし」、30席、禁煙。口コミ (2025年9月〜2026年10月、英語): かき氷は7〜9月のみ、夏は朝から店頭の用紙に記名 (2026年は9月8日まで)、桃ミルクバニラ2,200円、いちじくロイヤルミルクティー2,000円、シャインマスカットバニラ2,500円、宇治抹茶1,700円、マンゴー、いちご、秋冬はりんごやさつまいもとクリームチーズのたい焼きの皿、ワンドリンク制、現金のみ、いちじくのミルクティーは味が薄いとの声 (2026年8月)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B482899519', 'B495863065', 'B510484459', 'B514578312', 'B534197571', 'B534226149', 'B534758566', 'B534905579', 'B534974203', 'B535116054', 'B536096880', 'B91295524'])) },
    cultural_comfort: { level: 'friendly', note: 'Summer: sign the list at the door from 9 am; one drink each; cash only.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区五条通新町西入西錺屋町25 つくるビル2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.996517, 135.756613); GSI lot 京都府京都市下京区西錺屋町25番地 about 39m away; nearest pin kyoto_coffee_oshokuji_open 148.1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B482899519/', R + 'B534974203/', R + 'B514578312/'],
    price_note: 'Kakigori prices from September 2025 – September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Peach milk vanilla kakigori', '¥2,200', 'Kakigori', 'ask', 'no', 'July–September 2026; ¥200 less without ice cream.', 'peach_kakigori'),
      it('', '', 'Fig royal-milk-tea kakigori', '¥2,000', 'Kakigori', 'ask', 'no', 'August–September 2026.', 'fig_kakigori'),
      it('', '', 'Shine Muscat vanilla kakigori', '¥2,500', 'Kakigori', 'ask', 'no', 'September 2026.', 'muscat_kakigori'),
      it('', '', 'Uji matcha kakigori with ice cream', '¥1,700', 'Kakigori', 'ask', 'no', 'September 2025.', 'matcha_kakigori'),
      it('', '', 'Apple taiyaki plate', '', 'Dessert', 'no', 'no', 'October 2026.', 'apple_taiyaki'),
    ] }, {
    cuisine: '自家製のフルーツシロップと丸ごとの果物の夏のかき氷と、涼しい季節の皿盛りのたい焼きで有名な2階のカフェ (食べログ、2025〜2026年の口コミ)・桃ミルクバニラのかき氷2,200円 (アイスなしは200円引き)、白玉のせ (2026年7〜9月)・いちじくロイヤルミルクティー2,000円、レアチーズ付き2,200円、シャインマスカットバニラ2,500円 (2026年8〜9月)・宇治抹茶とアイス1,700円 (2025年9月)、宇治金時ミルク、宮崎のマンゴー、いちご (2026年)・秋のたい焼きの皿: りんご (キャラメリゼのりんご、アーモンド、アイス)、さつまいもとクリームチーズ (2026年10月)・紅茶とワイン',
    neighborhood: '五条通、新町の西。五条から250m',
    gf_detail: '要確認: 夏のかき氷は氷に自家製の果物のシロップ、白玉、アイスだが、レアチーズのソースやアールグレイのゼリーなどの説明はない。秋冬のたい焼きは小麦の生地 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: かき氷の多くはミルク系 (ミルクシロップ、練乳、バニラアイス、レアチーズのソース)、たい焼きにはクリームチーズ、クリーム、バター (2025〜2026年の口コミ)。',
    notes: '[かき氷カフェ・五条新町、桃のかき氷と皿盛りのたい焼き] 京都屈指の人気かき氷の店。ふわふわの氷に丸ごとの桃、いちじく、シャインマスカットと自家製シロップ (1,700〜2,500円)、7〜9月のみ。秋冬は皿盛りのたい焼き。夏は朝9時から店頭の用紙に記名を。ワンドリンク制。現金のみ。日・月休み。',
  });
}

save();
