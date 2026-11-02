// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first — lane osw3 (Tabelog id mod 4 = 2), batch 19.
//   + 黒毛和牛とタンとハラミ 焼肉ごりちゃん 心斎橋店 (Yakiniku Gorichan Shinsaibashi: tongue and harami yakiniku to 07:00)
//   + アルベルゴ カフェ・ミケランジェロ (Albergo Cafe Michelangelo: Daikanyama café's Kansai outpost in the Centara Grand)
//   + 串処 最上 心斎橋店 (Kushi Dokoro Mogami: creative kushikatsu "until you say stop", since 1971)
//   + 道頓堀 治兵衛 (Dotonbori Jihei: fugu and seasonal kaiseki in private rooms over the river)
//   Lane: the first four ids with id mod 4 = 2 in `queue.mjs osaka next notable 80` (2026-11-02, after batch 18):
//   27138286, 27139450, 27001582, 27006186 (last two digits 86, 50, 82, 86: each = 2 mod 4).
//   None is in data/osaka.json (grep by Tabelog id, name, romaji and address).
//   Group checks (working line: 2–4 same-concept shops with none in data = small group, 5+ = chain).
//   Gorichan: Umeda (main), Namba, Fukushima and Shinsaibashi found (reviews; hamoni) — four, none in data; small group.
//   Michelangelo: a licensed second shop of Café Michelangelo in Daikanyama (Tabelog) — two. Mogami: Shinsaibashi (the
//   original), Kitashinchi, Sannomiya (April 2026 review) and Ginza (Gnavi) — four, small group. Jihei: one shop now
//   (an APA Hotel branch is closed on Tabelog).
//   open_late: true only when closing after 22:00.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw3-19');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 焼肉ごりちゃん 心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27138286/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '07:00']);
  put({
    id: 'osaka_yakiniku_gorichan_shinsaibashi', name: '黒毛和牛とタンとハラミ 焼肉ごりちゃん 心斎橋店 (Kuroge Wagyu to Tan to Harami Yakiniku Gorichan Shinsaibashi ten)', category: 'OMNI',
    lat: 34.673666, lng: 135.501799, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Salted tongue with lemon is the plainest; sauce-marinated cuts, ponzu, sukiyaki-style dips, cold noodles and the liver stir-fry are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakiniku restaurant.',
    hours_raw: 'Daily 17:00–07:00 (last orders food 06:00, drinks 06:30); open all year; reservations taken 11:00–08:00 (Tabelog). Lunch ended on 27 June 2026; closed 29 June–15 July 2026 and reopened 16 July 2026 (Tabelog). Reservations recommended, released 15 minutes after the time without notice (Tabelog; August 2026). Cards (VISA, Master, JCB, AMEX, Diners) and QR including Alipay; no e-money (Tabelog). 50 seats; smoking allowed; free Wi-Fi and outlets; wheelchair accessible, by elevator (Tabelog; October 2026). BYO drinks allowed; English and Korean menus with photos and English- and Korean-speaking staff (Tabelog). Opened 10 October 2023 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinsaibashisuji 1-3-13, 茶茶心斎橋ビル 2F — 4 min from Shinsaibashi Stn',
    cuisine: 'Kuroge wagyu, tongue and harami yakiniku (Tabelog) · the Gori Mori set of tongue, tsurami, heart and premium mino; "Gorichan\'s Forest" (Tan no Mori), tongue under a heap of domestic green onion, shiso and sudachi (Tabelog; July–October 2026) · thick-cut tongue; salted tongue ¥1,600 a portion (October 2026, up from ¥1,200); outside skirt; loin, short rib and belly (July–October 2026) · raw dishes: wagyu heart sashimi, omasum sashimi, salted fresh liver; the "Ultimate Horumon" served whole (July 2026) · sirloin truffle sukiyaki, grilled meat dipped in egg and truffle (July–September 2026) · liver and garlic chives stir-fried in garlic butter; kimchi and namul; tororo cold noodles (July–November 2026) · Kakigori-chan shaved ice, a Shinsaibashi-only dessert (Tabelog)',
    website: 'https://www.tiktok.com/@gori.gori4', gmaps: gm('焼肉ごりちゃん 心斎橋店'), menu_url: null,
    notes: "[Yakiniku · Shinsaibashi, tongue and harami until 7 am] A loud, cheerful second-floor yakiniku off Shinsaibashi-suji, one of a few Gorichan shops, open from 17:00 to 7:00 every day. Order the Gori Mori set of tongue, cheek, heart and mino and 'Gorichan’s Forest', tongue buried in green onion, shiso and sudachi, then thick tongue, outside skirt, raw heart or omasum sashimi and the truffle sukiyaki. Staff explain how to eat each dish. Diners in 2026 love the meat and the energy; one found the talkative owner sometimes missed orders, another a loin cut fattier than pictured, and a regular saw the salted tongue rise from ¥1,200 to ¥1,600. Smoking allowed; book ahead.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed) and staff'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: "the best value yakiniku restaurant in Osaka", with black wagyu, tongue and harami; opened 10 October 2023; lunch ended in June 2026 and the shop reopened on 16 July 2026 with hours of 17:00–7:00. 2026 reviews describe a cheerful, talkative owner and manager; a regular has also eaten at the Umeda main shop, another at the Fukushima shop.',
      philosophy: null, specialty: 'Tongue; Gori Mori set; harami.',
      anecdotes: [
        { text: '"The owner talks so much that sometimes orders get missed, but we can just take that as part of the charm!" — July 2026.', source: R + 'B532931840/' },
        { text: '"Each menu item came with a detailed explanation of the recommended way to enjoy it!" — August 2026, thick-cut tongue.', source: R + 'B533348413/' },
        { text: '"I remembered that one serving of salted tongue was JPY 1200 … I found out that the price for one serving of salted tongue has increased to JPY 1600!" — October 2026, a regular.', source: R + 'B537517390/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 黒毛和牛とタンとハラミ 焼肉ごりちゃん 心斎橋店、焼肉・ホルモン・韓国料理、心斎橋筋1-3-13 茶茶心斎橋ビル 2F、Shinsaibashi 駅から徒歩4分、毎日17:00〜7:00 (L.O.料理6:00・ドリンク6:30)、年中無休、予約は11:00〜8:00に受付、2026年6月27日でランチ終了、6月29日〜7月15日休業、7月16日17:00から再開、予約時間から15分で自動キャンセル、カード・QR可、電子マネー不可、50席、喫煙可、Wi-Fi、電源、車椅子可、持ち込み可、英語・韓国語のメニューとスタッフ、2023年10月10日オープン、大阪一コスパのいい焼肉、Gori Mori セット、Gorichan’s Forest、心斎橋店限定の Kakigori-chan。口コミ(2026年7月〜11月): タン、ツラミ、ハツ、上ミノ、ねぎ・大葉・すだちのGorichan’s Forest、厚切りタン、塩タン1人前1,600円 (以前は1,200円)、外ハラミ、ハツ刺し、センマイ刺し、生レバー塩、Ultimate Horumon、サーロインのトリュフすき焼き、ガーリックバターのレバニラ、とろろ冷麺、にぎやかな店主、注文の漏れ、ロースの脂が多いという声も。',
      confidence: 'medium', sources: [TB, R + 'B532386589/', R + 'B532931840/', R + 'B532987747/', R + 'B533012987/', R + 'B533348413/', R + 'B536682030/', R + 'B537386991/', R + 'B537517390/', R + 'B537710095/', R + 'B537810103/', R + 'B537874551/', R + 'B538509612/'] },
    cultural_comfort: { level: 'english', note: 'English and Korean menus with photos, and English- and Korean-speaking staff (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋1-3-13 茶茶心斎橋ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing (reopened 16 July 2026); reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋一丁目3番13号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537517390/'],
    price_note: 'One price from an October 2026 review; no menu online.', last_checked: TODAY, items: [
      it('', 'Gori Mori', 'Gori Mori set (tongue, tsurami, heart, premium mino)', '', 'Signatures', 'ask', 'no', 'July–October 2026.', 'gori_mori'),
      it('', '', 'Tongue under green onion, shiso and sudachi ("Gorichan\'s Forest")', '', 'Signatures', 'ask', 'no', 'July–October 2026.', 'tan_mori'),
      it('', '', 'Salted tongue (one portion)', '¥1,600', 'Beef', 'ask', 'no', 'October 2026 (¥1,200 earlier).', 'shio_tan'),
      it('', '', 'Sirloin truffle sukiyaki', '', 'Beef', 'ask', 'no', 'July–September 2026.', 'truffle_sukiyaki'),
    ] }, {
    cuisine: '黒毛和牛、タン、ハラミの焼肉 (食べログ)・タン、ツラミ、ハツ、上ミノのGori Mori セット。国産のねぎ、大葉、すだちをたっぷりのせたタンの「Gorichan’s Forest」(食べログ、2026年7〜10月)・厚切りタン、塩タン1人前1,600円 (2026年10月、以前は1,200円)、外ハラミ、ロース、カルビ、バラ (2026年7〜10月)・生もの: 和牛のハツ刺し、センマイ刺し、生レバーの塩、塊で出てくる「Ultimate Horumon」(2026年7月)・焼いた肉を卵とトリュフにつけるサーロインのトリュフすき焼き (2026年7〜9月)・ガーリックバターのレバニラ、キムチとナムル、とろろ冷麺 (2026年7〜11月)・心斎橋店限定のかき氷「Kakigori-chan」(食べログ)',
    neighborhood: '心斎橋筋1-3-13 茶茶心斎橋ビル 2F。Shinsaibashi 駅から徒歩4分',
    gf_detail: '要確認。グルテンの情報なし。レモンで食べる塩タンがいちばんシンプル。タレの肉、ポン酢、すき焼きのたれ、冷麺、レバニラの中身は書かれていない。',
    vegan_detail: 'ヴィーガンではありません。焼肉店。',
    notes: '[焼肉・心斎橋、朝7時までのタンとハラミ] 心斎橋筋近くの2階にある、にぎやかで明るい焼肉店で、何軒かあるごりちゃんの1軒。毎日17時から朝7時まで。頼むならタン、ツラミ、ハツ、ミノのGori Mori セットと、ねぎ、大葉、すだちに埋もれたタンの「Gorichan’s Forest」、続いて厚切りタン、外ハラミ、ハツ刺しやセンマイ刺し、トリュフすき焼き。スタッフがそれぞれの食べ方を説明してくれる。2026年の口コミでは肉と活気が大好評で、おしゃべりな店主が注文を忘れることがある、ロースが写真より脂っぽかったという声、塩タンが1,200円から1,600円に上がったという常連の声も。喫煙可、予約がおすすめ。',
  });
}

// ================================================================ アルベルゴ カフェ・ミケランジェロ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27139450/'; const R = TB + 'dtlrvwlst/';
  const H = day(['09:00', '22:30']);
  put({
    id: 'osaka_albergo_cafe_michelangelo_namba', name: 'アルベルゴ カフェ・ミケランジェロ (Albergo Cafe Michelangelo)', category: 'OMNI',
    lat: 34.660144, lng: 135.50252, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Pasta, pinsa (wheat with rice and soybean flour, Tabelog), focaccia and pain au chocolat are wheat-based; the Michelangelo salad and the pudding are where to ask.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Bolognese, carbonara, clams, hamburg steak and custard pudding; the vegetable arrabbiata pasta is the closest, but its ingredients are not described in full.',
    hours_raw: 'Daily 09:00–22:30 (last orders food 21:00, drinks 22:00) (Tabelog). Reservations; 90 minutes at busy times 09:00–17:00 and two hours after 17:00 (Tabelog). Order by QR code (October 2026). At dinner the shop has asked groups to come in even numbers, with smaller pizzas for odd groups (2025). Cards (VISA, Master, JCB, Diners), IC cards, Rakuten Edy, WAON, iD, QUICPay and QR (Tabelog). 80 table seats with a counter and sofas; open terrace; non-smoking; wheelchair accessible (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nambanaka 2-11-50, センタラグランドホテル大阪 1F, next to Namba Parks — 5 min from Nankai Namba Stn through Namba City',
    cuisine: 'Italian café from Daikanyama, with lunch sets, coffee and dinner (Tabelog) · Michelangelo pudding, a classic custard pudding, with coffee; tiramisu (Tabelog; April–October 2026) · lunch: spaghetti set ¥1,650 (Bolognese, vongole bianco, vegetable arrabbiata, carbonara) with seasonal soup and mini salad; pinsa Romana set ¥1,850; Michelangelo salad set ¥1,300 (Tabelog); a pair lunch for two of salad, pizza, pasta, hamburg steak and dessert ¥2,900 (October 2026); dessert set ¥550 (October 2026) · pinsa with a dough of wheat, rice and soybean flour, long-fermented, crisp outside and chewy within (Tabelog; October 2026); basil pasta; focaccia; pain au chocolat (2026) · Italian wine and cocktails; iced café latte (Tabelog; October 2026)',
    website: null, gmaps: gm('アルベルゴ カフェ・ミケランジェロ センタラ'), menu_url: null,
    notes: "[Italian · Namba, Daikanyama's Café Michelangelo in the Centara Grand] The Kansai outpost of Daikanyama's Café Michelangelo, a big, bright café on the ground floor of the Centara Grand Hotel by Namba Parks, open from 9:00 to 22:30. Lunch is good value: pasta or Roman pinsa sets with soup and salad, or a pair lunch for two of salad, pizza, pasta, hamburg steak and dessert for ¥2,900; finish with the house Michelangelo pudding. Diners in 2026 praise the staff and the pinsa; others found the food average, the pudding plainly plated, or the room busy and loud at weekends. Dinner groups have been asked to come in even numbers.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: the popular Café Michelangelo of Daikanyama, Tokyo, opened here as a licensed brand on the first floor of the Centara Grand Hotel Osaka, its first shop in Kansai, serving its classic custard "Michelangelo Pudding"; open 9:00–22:30, connected to Namba Parks. A September 2026 regular notes better phone and table service with more Japanese staff.',
      philosophy: null, specialty: 'Michelangelo pudding; pinsa Romana.',
      anecdotes: [
        { text: '"The Pinsa Romana, made with rice flour, had a crispy exterior and a fluffy interior, making it delicious!" — October 2026, a weekday lunch.', source: R + 'B536640977/' },
        { text: '"Since Michelangelo is known for its pudding, I was eagerly awaiting it, but it was served alone on the plate, which didn\'t look very appealing." — October 2026, spaghetti set ¥1,650.', source: R + 'B537966060/' },
        { text: '"The taste was average—not particularly delicious, but not bad either." — September 2026, a holiday weekend.', source: R + 'B535980515/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): アルベルゴ カフェ・ミケランジェロ、イタリアン・プリン・ダイニングバー、難波中2-11-50 センタラグランドホテル大阪 1F、Nankai Namba 駅から徒歩約5分、毎日9:00〜22:30 (L.O.料理21:00・ドリンク22:00)、予約可、混雑時は9:00〜17:00は90分・17:00以降は2時間、カード・電子マネー・QR可、80席、テラス、禁煙、車椅子可、代官山の人気店 Cafe Michelangelo のライセンスブランドで関西初出店、名物Michelangelo Pudding、ランチのスパゲッティセット1,650円 (ボロネーゼ、ボンゴレ・ビアンコ、彩り野菜のアラビアータ、カルボナーラ、季節のスープとミニサラダ)、ピンサ・ロマーナのセット1,850円 (小麦粉に米粉と大豆粉の生地を長時間発酵)、Michelangelo Salad のセット1,300円。口コミ(2026年4月〜10月): ペアランチ2,900円 (サラダ、ピザ、パスタ、ハンバーグ、デザート)、デザートセット550円、ティラミス、バジルのパスタ、フォカッチャ、パン・オ・ショコラ、QR で注文、プリンの盛り付けが寂しい、味は普通、週末はにぎやかという声も。',
      confidence: 'medium', sources: [TB, R + 'B497628860/', R + 'B527346917/', R + 'B535980515/', R + 'B536640977/', R + 'B536696636/', R + 'B536804627/', R + 'B537223940/', R + 'B537608923/', R + 'B537689466/', R + 'B537966060/', R + 'B538018015/', R + 'B538255930/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR ordering (October 2026); many international guests in the hotel (October 2026). No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中2-11-50 センタラグランドホテル大阪 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中二丁目11番50号 (go) 48m (large hotel site); same-hotel records on the 32F and 33F are about 20 m away, not stacked; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B538018015/', R + 'B537966060/'],
    price_note: 'Lunch set prices from Tabelog (read November 2026), tax included; others from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch spaghetti set with soup and mini salad', '¥1,650', 'Lunch', 'no', 'no', 'Tabelog; October 2026.', 'spaghetti_set'),
      it('', '', 'Lunch pinsa Romana set', '¥1,850', 'Lunch', 'no', 'no', 'Tabelog.', 'pinsa_set'),
      it('', '', 'Lunch Michelangelo salad set', '¥1,300', 'Lunch', 'ask', 'no', 'Tabelog.', 'salad_set'),
      it('', '', 'Pair lunch for two: salad, pizza, pasta, hamburg steak, dessert', '¥2,900', 'Lunch', 'no', 'no', 'October 2026.', 'pair_lunch'),
      it('', '', 'Dessert set', '¥550', 'Desserts', 'ask', 'no', 'October 2026.', 'dessert_set'),
    ] }, {
    cuisine: '代官山発のイタリアンカフェで、ランチセット、コーヒー、ディナー (食べログ)・クラシックなカスタードのMichelangelo Pudding とコーヒー、ティラミス (食べログ、2026年4〜10月)・ランチ: 季節のスープとミニサラダつきのスパゲッティセット1,650円 (ボロネーゼ、ボンゴレ・ビアンコ、彩り野菜のアラビアータ、カルボナーラ)、ピンサ・ロマーナのセット1,850円、Michelangelo Salad のセット1,300円 (食べログ)。サラダ、ピザ、パスタ、ハンバーグ、デザートの2人用ペアランチ2,900円 (2026年10月)、デザートセット550円 (2026年10月)・小麦粉、米粉、大豆粉を長時間発酵させた外はかりっと中はもちっとしたピンサ (食べログ、2026年10月)、バジルのパスタ、フォカッチャ、パン・オ・ショコラ (2026年)・イタリアワインとカクテル、アイスカフェラテ (食べログ、2026年10月)',
    neighborhood: '難波中2-11-50 センタラグランドホテル大阪 1F、Namba Parks の隣。Nankai Namba 駅から Namba City を抜けて徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。パスタ、ピンサ (小麦粉に米粉と大豆粉、食べログ)、フォカッチャ、パン・オ・ショコラは小麦。Michelangelo Salad とプリンから確認を。',
    vegan_detail: 'ヴィーガンではありません。ボロネーゼ、カルボナーラ、アサリ、ハンバーグ、カスタードプリン。いちばん近いのは野菜のアラビアータだが、材料はすべては書かれていない。',
    notes: '[イタリアン・難波、センタラグランドの代官山カフェ・ミケランジェロ] 代官山の Cafe Michelangelo の関西の店で、Namba Parks のそば、センタラグランドホテル大阪の1階にある明るく広いカフェ。朝9時から夜22時30分まで。ランチがお得で、スープとサラダつきのパスタやローマ風ピンサのセット、2人用のサラダ、ピザ、パスタ、ハンバーグ、デザートのペアランチ2,900円。締めは名物のMichelangelo Pudding で。2026年の口コミではスタッフとピンサが好評で、味は普通、プリンの盛り付けが寂しい、週末はにぎやかでうるさいという声も。夜は偶数の人数で来るよう頼まれたこともある。',
  });
}

// ================================================================ 串処 最上 心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27001582/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:00', '23:00']);
  put({
    id: 'osaka_kushi_dokoro_mogami_shinsaibashi', name: '串処 最上 心斎橋店 (Kushi Dokoro Mogami Shinsaibashi ten)', category: 'OMNI',
    lat: 34.670669, lng: 135.502166, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: every course is battered, breaded kushikatsu fried in shared oil.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: skewers of seafood, beef, eel and vegetables in the same fryer; the batter is not described.',
    hours_raw: 'Daily 11:30–15:00 (last orders food 14:00, drinks 14:30) and 17:00–23:00 (last orders food 22:00, drinks 22:30); open all year, including the New Year (Tabelog). Courses only, no à la carte (November 2025): skewers keep coming until you say stop, from 10 skewers ¥5,500 to all 36 ¥13,500 (January 2026); seat-only reservations taken, with at least 10 skewers expected (Tabelog; May 2026); an all-you-can-drink 15-skewer course ¥11,000 (December 2025). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay) and QR including Alipay; no e-money (Tabelog). 54 seats: 22 at a counter round the kitchen, 32 at tables; non-smoking; free Wi-Fi; wheelchair accessible; children welcome, kids menu (Tabelog). Menus in English, Simplified Chinese and Korean (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinsaibashisuji 2-2-10, 新日本三ツ寺ビル 1F — 5 min from exit 6 of Shinsaibashi Stn',
    cuisine: 'Creative kushikatsu (kushiage) served omakase, 36 kinds in order until you say stop (Tabelog; 2025–2026) · courses from 10 skewers ¥5,500 to 36 skewers ¥13,500 (January 2026); a 16-skewer course with live steamed abalone ¥8,600 (March 2026); 15 skewers with all-you-can-drink ¥11,000 (December 2025) · skewers such as fried seaweed topped with ikura, medium-rare shrimp, beef, eel, pumpkin and seafood, two or three at a time straight from the fryer, fried in flower oil, with four sauces and salt (2025–2026) · vegetable sides refilled during the course (October 2025) · sake, shochu and wine (Tabelog)',
    website: 'http://www.kushi-mogami.co.jp', gmaps: gm('串処 最上 心斎橋店'), menu_url: null,
    notes: "[Kushikatsu · Shinsaibashi, the 1971 creative kushiage house] The original Mogami, a polished counter restaurant founded in 1971 that turned kushikatsu into an omakase: chefs fry two or three creative skewers at a time from 36 kinds of sea, mountain and field ingredients, and keep going until you say stop. Expect ikura on fried seaweed, sweet medium-rare shrimp, beef and fluffy eel, with four sauces and salt. Courses run from ¥5,500 for 10 skewers to ¥13,500 for all 36, and the bill often reaches ¥10,000–¥15,000. Diners call it elegant and attentive; one business diner found a drinks course over in 40 minutes with flat highballs. Open daily for lunch and dinner.",
    chef_bio: { chef_name: null, roles: ['Kushikatsu chefs (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: a long-standing taste since 1971; 36 kinds of kushikatsu from fresh sea, mountain, river and field ingredients, fried by chefs with over 20 years\' experience, served until you say stop. Per 2025–2026 reviews: the original location and a pioneer of creative kushikatsu, with branches in Kitashinchi and Sannomiya; fried in flower oil. Gnavi lists a Ginza shop.',
      philosophy: 'Adding elegance to the popular image of kushikatsu (Tabelog).', specialty: 'Omakase creative kushikatsu.',
      anecdotes: [
        { text: '"They bring 2 or 3 types of freshly fried kushi katsu to the table, serving them piping hot." — January 2026, courses from ¥5,500 for 10 to ¥13,500 for 36.', source: R + 'B444963800/' },
        { text: '"The staff informed me, \'We didn\'t receive any abalone today, so we will deduct that cost from your bill.\'" — March 2026, the ¥8,600 abalone course.', source: R + 'B523494623/' },
        { text: '"The speed of serving the skewers in the course was too fast, finishing in about 40 minutes." — March 2026, a business dinner.', source: R + 'B524465629/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 串処 最上 心斎橋店 (もがみ)、串揚げ・居酒屋・日本料理、心斎橋筋2-2-10 新日本三ツ寺ビル 1F、Shinsaibashi 駅6番出口から徒歩5分、毎日11:30〜15:00・17:00〜23:00、年末年始も営業、予約可 (席のみの予約は10本以上)、ストップと言うまで出てくる、カード・QR可、電子マネー不可、54席 (カウンター22、テーブル32)、禁煙、Wi-Fi、車椅子可、子ども可、キッズメニュー、英語・中国語 (簡体字)・韓国語のメニュー、1971年からの味、職人が揚げる36種の串カツ。口コミ(2025年10月〜2026年5月): 創作串揚げの草分けの本店、コースのみ、10本5,500円から36本13,500円、アワビの16本コース8,600円、飲み放題つき15本11,000円、いくらをのせた海苔、ミディアムレアのエビ、牛、鰻、かぼちゃ、花の油、4種のソース、北新地と三宮にも店、提供が早すぎる、ハイボールの炭酸が抜けていたという声も。',
      confidence: 'medium', sources: [TB, 'https://r.gnavi.co.jp/kd8u800/', R + 'B444963800/', R + 'B515619693/', R + 'B517090763/', R + 'B519691894/', R + 'B523494623/', R + 'B523981286/', R + 'B524465629/', R + 'B524569154/', R + 'B526144690/', R + 'B526287814/', R + 'B527377276/', R + 'B529337263/'] },
    cultural_comfort: { level: 'english', note: 'Menus in English, Simplified Chinese and Korean (Tabelog); omakase service.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-2-10 新日本三ツ寺ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目2番10号 (go) 29m; same building as osaka_niku_sakana_sake_yuu_shinsaibashi (3.2 m apart), so set 5 m north of it; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B444963800/', R + 'B523494623/', R + 'B519691894/'],
    price_note: 'Course prices from December 2025–March 2026 reviews (as reported).', last_checked: TODAY, items: [
      it('', '', 'Kushikatsu course, 10 skewers', '¥5,500', 'Courses', 'no', 'no', 'January 2026.', 'course10'),
      it('', '', 'Kushikatsu course, all 36 skewers', '¥13,500', 'Courses', 'no', 'no', 'January 2026.', 'course36'),
      it('', '', 'Mogami 16-skewer course with live steamed abalone', '¥8,600', 'Courses', 'no', 'no', 'March 2026.', 'abalone_course'),
      it('', '', '15-skewer course with all-you-can-drink', '¥11,000', 'Courses', 'no', 'no', 'December 2025.', 'course15_drink'),
    ] }, {
    cuisine: '36種の創作串カツ (串揚げ) をおまかせで、ストップと言うまで順に (食べログ、2025〜2026年)・コースは10本5,500円から36本13,500円 (2026年1月)、活アワビの蒸し焼きが入る16本コース8,600円 (2026年3月)、飲み放題つき15本11,000円 (2025年12月)・いくらをのせた海苔の揚げ物、ミディアムレアのエビ、牛、鰻、かぼちゃ、魚介などの串を揚げたてで2〜3本ずつ、花の油で揚げ、4種のソースと塩で (2025〜2026年)・コース中は野菜をおかわり (2025年10月)・日本酒、焼酎、ワイン (食べログ)',
    neighborhood: '心斎橋筋2-2-10 新日本三ツ寺ビル 1F。Shinsaibashi 駅6番出口から徒歩5分',
    gf_detail: 'グルテンフリーではありません。コースはすべて衣とパン粉の串カツで、同じ油で揚げる。',
    vegan_detail: 'ヴィーガンではありません。魚介、牛、鰻、野菜の串を同じ揚げ油で揚げ、衣の中身は書かれていない。',
    notes: '[串カツ・心斎橋、1971年からの創作串揚げ] 1971年創業の最上の本店で、串カツをおまかせにした洗練されたカウンターの店。海、山、川、畑の36種の食材から職人が創作の串を2〜3本ずつ揚げ、ストップと言うまで続く。いくらをのせた海苔、甘いミディアムレアのエビ、牛、ふわふわの鰻を、4種のソースと塩で。コースは10本5,500円から36本13,500円で、会計は1万〜1万5千円になることが多い。上品で気配りがいいという声が多く、飲み放題のコースが40分で終わりハイボールの炭酸が抜けていたという接待の声も。昼と夜、毎日。',
  });
}

// ================================================================ 道頓堀 治兵衛
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27006186/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '22:30']);
  put({
    id: 'osaka_dotonbori_jihei', name: '道頓堀 治兵衛 (Dotonbori Jihei)', category: 'OMNI',
    lat: 34.668829, lng: 135.499954, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Fugu sashimi with ponzu (usually soy-based) and the hot pot are where to ask; fugu kara-age is floured and fried.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fugu, eel, conger eel, lobster and wagyu dishes and fish-based broths.',
    hours_raw: 'Daily 11:30–22:30 (Tabelog). Lunch menus (Tabelog). Reservations; seasonal fugu and kaiseki courses discounted when booked on Tabelog, up to 50% off, except Fridays and Saturdays in December and 2–3 January (Tabelog; July 2026). Private rooms on the 3rd–5th floors carry a 10% seat charge (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay) and QR including Alipay and WeChat Pay; no e-money (Tabelog). Window seats over the Dotonbori River (Tabelog; July–August 2026); private hire for groups (October 2026); the restroom is in the basement (April 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Dotonbori 2-1-4 — 2 min from exit 25 of Namba Stn (Midosuji Line)',
    cuisine: 'Fugu and seasonal kaiseki in private rooms (Tabelog) · autumn courses with matsutake: "Cosmos" ¥6,050 (fugu sashimi, kara-age, a one-person fugu hot pot, matsutake dobin-mushi, 10 dishes), "Ginkgo" ¥7,150 (12 dishes with blanched fugu skin, tessa, kara-age, chawanmushi, matsutake rice), "Rodan" ¥7,920 (matsutake, wagyu shabu-shabu, fugu, abalone) (Tabelog, read November 2026; list prices ¥8,800–¥12,100) · à la carte fugu sashimi ¥650 and a one-person fugu hot pot ¥4,180; Ise lobster salad ¥3,080 (April 2026) · fugu courses with skin, sashimi, kara-age, tecchiri with milt, an Arima-style simmered dish and zosui (June 2026) · summer courses of conger eel and eel (July–August 2026) · fugu fin sake, hot or chilled (April–October 2026)',
    website: null, gmaps: gm('道頓堀 治兵衛'), menu_url: null,
    notes: "[Fugu · Dotonbori, fugu and seasonal kaiseki over the river] A five-storey fugu restaurant on Dotonbori with private rooms and window seats over the river, where cruise boats pass. It is an easy way into fugu: sashimi with ponzu from ¥650 à la carte, a one-person hot pot, kara-age, and courses through the year, with conger eel and eel in summer and matsutake in autumn, often half-price when booked through Tabelog. Try the fin sake chilled. Diners in 2026 call it good value and the service warm; one found the ingredients not top-grade for the price, one was served stale draft beer, and one expected a shared pot rather than individual burners. Open daily 11:30–22:30.",
    chef_bio: { chef_name: null, roles: ['Kitchen and staff (unnamed); operator 株式会社治兵衞 (invoice registration on Gnavi)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: seasonal delicacies such as matsutake and fugu in private Japanese-style rooms, with seats over the Dotonbori River; special courses with Ise lobster and wagyu in season. Gnavi shows the invoice registrant as 株式会社治兵衞. An APA Hotel branch appears on Tabelog as closed.',
      philosophy: null, specialty: 'Fugu courses; fin sake.',
      anecdotes: [
        { text: '"As we dined, sightseeing cruise boats passed by on the Dotonbori River, allowing us to savor a delightful two hours." — April 2026, a course with wagyu shabu-shabu, abalone and grilled fugu.', source: R + 'B526656583/' },
        { text: '"I was particularly impressed by the Arima simmered dish, which had a rich flavor combining cod, sea bream, and skate" — June 2026, a fugu course with milt.', source: R + 'B530742242/' },
        { text: '"While I could tell that the ingredients weren\'t necessarily top-grade or natural based on the price of the course, I was pleasantly surprised by the quality and variety" — October 2026.', source: R + 'B538445019/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 道頓堀 治兵衛 (じへい)、ふぐ・うなぎ・海鮮、道頓堀2-1-4、Namba 駅25番出口から徒歩2分、毎日11:30〜22:30、予約可、季節のコースは最大50%引き (12月の金土と1月2・3日を除く)、秋は松茸とふぐの会席「Cosmos」6,050円・「Ginkgo」7,150円・「Rodan」7,920円、伊勢海老や和牛の特別コース、3〜5階の個室はお会計の10%の席料、カード・QR可、電子マネー不可、道頓堀川が見える席。口コミ(2026年4月〜10月): てっさ単品650円、ふぐ鍋1人前4,180円、伊勢海老のサラダ3,080円、ひれ酒 (熱燗・冷や)、白子のてっちり、有馬煮、雑炊、夏の鱧と鰻のコース、固形燃料の1人鍋、遊覧船が通る川の眺め、地下のトイレ、生ビールが古かった、素材は最高級ではないという声も。',
      confidence: 'medium', sources: [TB, 'https://r.gnavi.co.jp/k048301/', R + 'B526656583/', R + 'B526978190/', R + 'B527240584/', R + 'B529257983/', R + 'B530742242/', R + 'B532197729/', R + 'B534091603/', R + 'B537373522/', R + 'B537767926/', R + 'B538293576/', R + 'B538346577/', R + 'B538445019/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Alipay and WeChat Pay accepted (Tabelog). No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀2-1-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with autumn 2026 courses; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀二丁目1番4号 (go) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B527240584/'],
    price_note: 'Course prices are Tabelog booking prices (read November 2026), tax included; à la carte prices from April 2026.', last_checked: TODAY, items: [
      it('', 'Cosmos', 'Matsutake and fugu kaiseki "Cosmos" (10 dishes)', '¥6,050', 'Courses', 'ask', 'no', 'Tabelog booking price (list ¥8,800).', 'cosmos'),
      it('', 'Ginkgo', 'Matsutake and fugu kaiseki "Ginkgo" (12 dishes)', '¥7,150', 'Courses', 'ask', 'no', 'Tabelog booking price (list ¥11,000).', 'ginkgo'),
      it('', '', 'Fugu sashimi (à la carte)', '¥650', 'Fugu', 'ask', 'no', 'April 2026.', 'tessa'),
      it('', '', 'Fugu hot pot, one person', '¥4,180', 'Fugu', 'ask', 'no', 'April 2026.', 'tecchiri'),
      it('', '', 'Ise lobster salad', '¥3,080', 'Seafood', 'ask', 'no', 'April 2026.', 'lobster_salad'),
    ] }, {
    cuisine: '個室で味わうふぐと季節の会席 (食べログ)・秋は松茸のコース: 「Cosmos」6,050円 (てっさ、唐揚げ、1人用のふぐ鍋、松茸の土瓶蒸し、10品)、「Ginkgo」7,150円 (皮の湯引き、てっさ、唐揚げ、茶碗蒸し、松茸ご飯の12品)、「Rodan」7,920円 (松茸、和牛しゃぶしゃぶ、ふぐ、アワビ) (食べログ、2026年11月、定価8,800〜12,100円)・単品のてっさ650円、1人前のふぐ鍋4,180円、伊勢海老のサラダ3,080円 (2026年4月)・皮、てっさ、唐揚げ、白子入りのてっちり、有馬煮、雑炊のふぐコース (2026年6月)・夏は鱧と鰻のコース (2026年7〜8月)・ひれ酒は熱燗か冷やで (2026年4〜10月)',
    neighborhood: '道頓堀2-1-4。Namba 駅 (Midosuji Line) 25番出口から徒歩2分',
    gf_detail: '要確認。グルテンの情報なし。ポン酢 (ふつう醤油ベース) のてっさと鍋から確認を。ふぐの唐揚げは粉をつけて揚げる。',
    vegan_detail: 'ヴィーガンではありません。ふぐ、鰻、鱧、伊勢海老、和牛の料理と魚の出汁。',
    notes: '[ふぐ・道頓堀、川を眺めるふぐと季節の会席] 道頓堀の5階建てのふぐ料理店で、個室や川沿いの窓際の席からは遊覧船が見える。ふぐの入り口にちょうどよく、単品のてっさは650円から、1人用の鍋、唐揚げ、季節のコース (夏は鱧と鰻、秋は松茸) は食べログの予約で半額になることも。ひれ酒は冷やもおすすめ。2026年の口コミでは手頃で接客が温かいという声が多く、値段なりで最高級の素材ではない、生ビールが古かった、みんなで囲む鍋ではなく1人用の固形燃料だったという声も。毎日11時30分から22時30分。',
  });
}

save();
