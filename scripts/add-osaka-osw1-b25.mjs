// Osaka sweep (2-mile circle around Dotonbori), CORE list; worker osw1 (lane: Tabelog id mod 4 = 0), batch 25.
//   + ひな鶏唐揚 新次郎 Hinadori Karaage Shinjirou (young-chicken karaage, yakitori, horse sashimi, Higashi-Shinsaibashi, 2010)
//   + 中国料理 桃李 ホテル日航大阪 Chinese Tori (Cantonese with Peking duck in Hotel Nikko Osaka, 3F)
//   + ウイスキー&ワイン シュン Whisky & Wine Shun (creative kushikatsu and a whisky bar in the Swissôtel Nankai lobby, 6F)
//   + 出汁鍋&海鮮の店 門戸 Mondo (dashi hot-pot sets with a vegetable buffet, OCAT mall 5F, 2016)
//   - skip(): 力丸 炉ばた焼 かくれ茶屋 (chain in data).
//   Lane: `queue.mjs osaka next core 600`, mod-4 = 0, in order: 27074812 skip, 27043112 +, 27000856 +, 27014196 +, 27090764 +.
//   Chain check for the four kept: 新次郎, シュン and 門戸 are each the only shop of the name in shops.jsonl. 桃李 is the hotel's own
//   Chinese restaurant; an October 2026 diner says "Chinese Tori has several locations" and shops.jsonl has a 中国料理 桃李 in Kyoto
//   (26001497); the count is unknown, kept as a hotel restaurant (please confirm). None is in data.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw1-25');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27074812', 'Chain already in data: 力丸 炉ばた焼 (osaka 力丸 炉ばた焼 たぬき茶屋 is in data; 11 力丸 shops in shops.jsonl).');

// ================================================================ ひな鶏唐揚 新次郎
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27043112/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'osaka_hinadori_shinjirou_higashishinsaibashi', name: 'ひな鶏唐揚 新次郎 (Hinadori Karaage Shinjirou)', category: 'OMNI',
    lat: 34.673923, lng: 135.502463, cuisine_type: 'yakitori',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the signature is deep-fried young chicken with a crisp coating; yakitori sauce is soy based.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken, horse sashimi and chicken hot pot.',
    hours_raw: 'Tue–Sun and holidays 17:00–23:00 (last orders 22:00 food, 22:30 drinks); closed Monday, or the following Tuesday when Monday is a holiday (Tabelog). Reservations accepted; courses need booking a day ahead (Tabelog; May 2026). Starter ¥385 (Tabelog). Cards, PayPay and d Barai; no e-money (Tabelog). 30 seats: an 8-seat counter facing the grill and tables (Tabelog; September 2025). Families with children welcome (December 2025). Opened 16 June 2010 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-18-20 — 3 min from Shinsaibashi Stn exit 5',
    cuisine: 'Chicken specialist: sashimi, grilled dishes and hot pot (Tabelog; December 2025) · the signature hinadori karaage, half a young chicken deep-fried whole, crisp-skinned and juicy, taking 20–30 minutes, so order it first (August 2025, July 2026) · yakitori: heart, extra-fat heart, thigh, breast, bonjiri, seseri, meat-stuffed lotus root, asparagus wrapped in pork, king oyster, makomo, quail eggs, nagaimo, tomato (July–August 2026) · horse sashimi platter (August 2025, May 2026); cold tofu; chicken hot pot (December 2025) · famous sakes at ¥900–1,000 per 180 ml, such as Tanaka Rokugo (August 2026)',
    website: null, gmaps: gm('ひな鶏唐揚 新次郎 東心斎橋'), menu_url: null,
    notes: "[Yakitori · Higashi-Shinsaibashi, half a young chicken fried whole] A friendly chicken izakaya three minutes from Shinsaibashi, open since 2010, where regulars are greeted by name. The thing to order first is the hinadori karaage, half a young chicken deep-fried whole, which takes 20–30 minutes and arrives crisp-skinned and juicy, each part tasting different. Fill the wait with skewers from the counter grill (heart, bonjiri, seseri, pork-wrapped asparagus), a horse sashimi platter or the gentle chicken hot pot. Sake is a bargain for the area, famous brands at ¥900–1,000 for 180 ml in August 2026. It fills up at weekends; book, and order courses a day ahead. Closed Mondays.",
    chef_bio: { chef_name: null, roles: ['Grill and floor staff (unnamed)'], origin: null, background: 'Tabelog: izakaya, yakitori and mizutaki on Higashi-Shinsaibashi, opened 16 June 2010. Reviews (2025–2026) describe a chicken specialist from sashimi to grill and hot pot, the signature hinadori karaage, and staff who remember regulars.', philosophy: null, specialty: 'Hinadori karaage; yakitori.',
      anecdotes: [
        { text: '"The signature Hinadori Karaage is a generous serving of half a chicken, fried to perfection." — July 2026, a regular\'s eleventh visit.', source: R + 'B459577333/' },
        { text: '"It takes about 20 to 30 minutes to prepare, so I recommend ordering it first." — August 2025.', source: R + 'B512395987/' },
        { text: '"Famous brands are available for JPY 900 to 1000 per 180ml. This is a delight for sake lovers!" — August 2026.', source: R + 'B533202749/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ひな鶏唐揚 新次郎、居酒屋・焼き鳥・水炊き、大阪市中央区東心斎橋1-18-20、心斎橋駅5番出口から徒歩3分、火〜日・祝17:00〜23:00 (料理L.O.22:00、ドリンクL.O.22:30)、月曜休み (祝日なら翌火曜休み)、予約可、お付きだし385円、カード・PayPay・d払い可、電子マネー不可、30席 (カウンター8、テーブル6)、2010年6月16日オープン。口コミ(2025年7月〜2026年8月): 名物のひな鶏の唐揚げは半羽を丸ごと揚げ、20〜30分かかるので最初に注文を、焼き鳥 (ハツ、ハツ脂、もも、むね、ぼんじり、せせり、れんこんの肉詰め、アスパラの豚巻き、エリンギ、まこも、うずら、長いも、トマト)、馬刺しの盛り合わせ、冷奴、鶏の鍋、コースは前日までに予約、日本酒は有名な銘柄が180mlで900〜1,000円、子ども連れも可、常連を覚えてくれるスタッフ。',
      confidence: 'medium', sources: [TB, R + 'B459577333/', R + 'B459860711/', R + 'B512395987/', R + 'B513287076/', R + 'B518424377/', R + 'B519327825/', R + 'B519889316/', R + 'B527731652/', R + 'B533202749/', R + 'B533345774/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter facing the grill; no English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市中央区東心斎橋1-18-20',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目18番20号 (go) 6m. Same lot number as osaka_tori_ryori_torisho_higashishinsaibashi (address_ja "大阪府大阪市中央区東心斎橋1-18-20 アソルティ心斎橋 2F"), pinned 6 m away, so this pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533202749/', R + 'B512395987/'],
    price_note: 'One dated price band (sake) from an August 2026 review; starter charge from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Hinadori karaage (half a young chicken, fried whole)', '', 'Karaage', 'no', 'no', 'August 2025 and July 2026 reviews.', 'hinadori_karaage'),
      it('', '', 'Horse sashimi platter', '', 'Sashimi', 'ask', 'no', 'May 2026 review.', 'basashi'),
      it('', '', 'Sake, 180 ml (famous brands)', '¥900–1,000', 'Drinks', 'ask', 'ask', 'August 2026 review.', 'sake_180'),
    ] }, {
    cuisine: '鶏の専門店: 刺身、焼き物、鍋 (食べログ、2025年12月)・名物のひな鶏の唐揚げは若鶏を半羽丸ごと揚げ、皮はパリッと中はジューシー。20〜30分かかるので最初に注文を (2025年8月、2026年7月)・焼き鳥: ハツ、ハツ脂、もも、むね、ぼんじり、せせり、れんこんの肉詰め、アスパラの豚巻き、エリンギ、まこも、うずら、長いも、トマト (2026年7月〜8月)・馬刺しの盛り合わせ (2025年8月、2026年5月)。冷奴。鶏の鍋 (2025年12月)・有名な銘柄の日本酒が180mlで900〜1,000円、Tanaka Rokugo など (2026年8月)',
    neighborhood: '東心斎橋1-18-20。心斎橋駅5番出口から3分',
    gf_detail: 'グルテンフリーではありません。名物は衣の揚げ物のひな鶏の唐揚げで、焼き鳥のたれは醤油ベース。',
    vegan_detail: 'ヴィーガンではありません。鶏、馬刺し、鶏の鍋。',
    notes: '[焼き鳥・東心斎橋、若鶏の半羽の丸揚げ] 心斎橋から3分の、2010年からの気さくな鶏の居酒屋で、常連は名前で迎えられる。最初に頼むべきはひな鶏の唐揚げで、若鶏を半羽丸ごと揚げ、20〜30分かかるが、皮はパリッと中はジューシーで部位ごとに味が違う。待つ間はカウンターの焼き台の串 (ハツ、ぼんじり、せせり、アスパラの豚巻き)、馬刺しの盛り合わせ、やさしい味の鶏の鍋を。日本酒はこのあたりではお得で、2026年8月は有名な銘柄が180mlで900〜1,000円。週末は満席になるので予約を、コースは前日までに。月曜休み。',
  });
}

// ================================================================ 中国料理 桃李 ホテル日航大阪
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27000856/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.hno.co.jp/restaurant/tohlee.html';
  const D = day(['11:30', '14:30'], ['17:30', '21:00']); const SA = day(['11:30', '14:30'], ['17:30', '21:30']);
  put({
    id: 'osaka_tohlee_hotel_nikko_osaka', name: '中国料理 桃李 ホテル日航大阪 (Chinese Tori)', category: 'OMNI',
    lat: 34.673899, lng: 135.499765, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Cantonese sauces, spring rolls, noodles and dim sum usually contain wheat or soy sauce.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. Courses centre on Peking duck, shark fin and seafood; a vegetable soup noodle appears in one review.',
    hours_raw: 'Sun–Fri and holidays 11:30–14:30 and 17:30–21:00 (last order 20:30); Sat and the day before holidays dinner to 21:30 (last order 21:00); weekend and holiday lunch in two sittings, 11:30–13:00 and 13:15–14:45 (Tabelog). Reservations accepted; cancel by the day before; seat-only bookings exclude other discounts and JAL coupons (Tabelog). Service charge 15% (Tabelog). Cards including UnionPay, e-money and QR payments including Alipay and WeChat Pay (Tabelog). 72 seats, up to about 100, private rooms (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: SA, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishi-Shinsaibashi 1-3-3, Hotel Nikko Osaka 3F — directly connected to Shinsaibashi Stn exit 8',
    cuisine: 'Cantonese cuisine in a "noble and modern" room like a Chinese mansion, built on the idea that food and medicine are one; the head chef has 40 years in Chinese cooking and won a team gold at the World Chinese Cuisine Competition (Tabelog) · Peking duck carved at the table, with a sweet miso diners rave about (May–October 2026) · crab-roe shark fin soup, spring rolls, stir-fried peppers and meat, fried rice, almond tofu (February–October 2026) · lunch courses, a seasonal prix-fixe "May Muran" course, a dinner course choosing 5 of 15 dishes (May and October 2026); a warm dim sum set ¥3,980 in February (February 2026) · aged Shaoxing wine poured at the table from a clay jar (Tabelog)',
    website: SITE, gmaps: gm('中国料理 桃李 ホテル日航大阪'), menu_url: null,
    notes: "[Chinese · Shinsaibashi, Cantonese and Peking duck in Hotel Nikko] The Cantonese restaurant on the third floor of Hotel Nikko Osaka, reached straight from Shinsaibashi Station, in a calm room styled on a Chinese mansion. The draw is Peking duck carved at the table and served with a sweet miso that converts even miso-haters; crab-roe shark fin soup is the other classic. Lunch courses and seasonal dim sum sets (¥3,980 in February 2026) are the gentle way in; dinner courses let you pick five of fifteen dishes. The cooking is mild, in line with its food-as-medicine idea, and some find it merely good for hotel prices. A 15% service charge applies.",
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed) with 40 years of Chinese cooking; gold medal in the team category and silver in individual cold appetizers at the World Chinese Cuisine Competition (Tabelog)'], origin: null, background: 'Shop-maintained Tabelog listing: authentic Cantonese cuisine in a noble, modern space like a Chinese mansion; the head chef values "food and medicine are one" and develops new menus across genres; lunch courses, dinner courses, message plates; aged Shaoxing wine poured from a clay jar. Official page: hno.co.jp/restaurant/tohlee.html. An October 2026 review: "Chinese Tori has several locations".', philosophy: '"Food and medicine are one" (Tabelog).', specialty: 'Peking duck; Cantonese courses.',
      anecdotes: [
        { text: '"The live preparation right in front of me added a special touch, and the crispy, fragrant skin combined with its refined flavor never fails to impress me." — May 2026, the Peking duck.', source: R + 'B502583816/' },
        { text: '"I usually dislike miso, but this one was incredibly delicious!" — August 2026, with the Peking duck at lunch.', source: R + 'B519400303/' },
        { text: '"You could probably find better Chinese food elsewhere without spending a lot at a hotel." — April 2026.', source: R + 'B526998670/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 中国料理 桃李 ホテル日航大阪、中華料理・飲茶、大阪市中央区西心斎橋1-3-3 ホテル日航大阪 3F、心斎橋駅8番出口に直結、日〜金・祝11:30〜14:30・17:30〜21:00 (L.O.20:30)、土・祝前日は夜21:30まで、土日祝の昼は2部制、予約可 (キャンセルは前日まで)、サービス料15%、カード (銀聯も)・電子マネー・QR (Alipay、WeChat Pay も) 可、72席 (最大100名ほど)、個室。店の紹介 (英訳): 中国の邸宅のような気品のあるモダンな空間の本格的な広東料理、中国料理40年の料理長が医食同源を大切に新しいメニューを考える、世界中国料理大会の団体金賞と個人の前菜の銀賞、甕と瓶からテーブルで注ぐ熟成の紹興酒。口コミ(2026年2月〜10月): テーブルで切り分ける北京ダックと甘い味噌、かにの卵のふかひれスープ、春巻き、ピーマンと肉の炒めもの、チャーハン、杏仁豆腐、ランチのコース、プリフィクスのコース、15品から5品を選ぶ夜のコース、2月の温かい点心のセット3,980円、味はやさしい、ホテルの値段にしてはふつうという声、ほかにも店があるという声。',
      confidence: 'medium', sources: [TB, SITE, R + 'B502583816/', R + 'B519400303/', R + 'B522725820/', R + 'B523388816/', R + 'B524978154/', R + 'B526998670/', R + 'B528422513/', R + 'B528866101/', R + 'B538163585/', R + 'B538308042/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hotel restaurant with course service; no English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市中央区西心斎橋1-3-3 ホテル日航大阪 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the hotel site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}, moved 5 m east so it does not stack on osaka_oden_sumiyoshi_nishishinsaibashi (integrator, 2026-11-02); cross-checked: GSI 大阪府大阪市中央区西心斎橋一丁目3番3号 (go) 36m. Same building as osaka_les_celebrites_hotel_nikko (address_ja "西心斎橋1-3-3 ホテル日航大阪 3F", 8 m), osaka_serena_hotel_nikko ("ホテル日航大阪 2F", 6 m) and osaka_oden_sumiyoshi_nishishinsaibashi ("オー・エム・ホテル日航ビル B2F", 1 m), so this pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523388816/', TB],
    price_note: 'One dated price from a February 2026 review; service charge from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Warm dim sum set (February)', '¥3,980', 'Lunch', 'no', 'no', 'February 2026 review.', 'dimsum_set'),
      it('', '', 'Peking duck', '', 'Dishes', 'no', 'no', 'May–October 2026 reviews.', 'peking_duck'),
      it('', '', 'Crab-roe shark fin soup', '', 'Dishes', 'ask', 'no', 'February 2026 review.', 'fukahire_soup'),
    ] }, {
    cuisine: '中国の邸宅のような「気品とモダン」の店の広東料理で、医食同源がテーマ。料理長は中国料理40年、世界中国料理大会の団体金賞 (食べログ)・テーブルで切り分ける北京ダックと、絶賛される甘い味噌 (2026年5月〜10月)・かにの卵のふかひれスープ、春巻き、ピーマンと肉の炒めもの、チャーハン、杏仁豆腐 (2026年2月〜10月)・ランチのコース、季節のプリフィクスのコース、15品から5品を選ぶ夜のコース (2026年5月と10月)。2月の温かい点心のセット3,980円 (2026年2月)・甕からテーブルで注ぐ熟成の紹興酒 (食べログ)',
    neighborhood: '西心斎橋1-3-3、ホテル日航大阪3階。心斎橋駅8番出口に直結',
    gf_detail: '要確認。グルテンの情報なし。広東料理のたれ、春巻き、麺、点心には一般に小麦や醤油を使う。',
    vegan_detail: '要確認。ヴィーガンの情報なし。コースは北京ダック、ふかひれ、魚介が中心で、野菜のスープの麺も口コミに。',
    notes: '[中華・心斎橋、ホテル日航の広東料理と北京ダック] 心斎橋駅から直結のホテル日航大阪3階の広東料理の店で、中国の邸宅のような落ち着いた店内。目当てはテーブルで切り分ける北京ダックと、味噌が苦手な人も夢中になる甘い味噌。かにの卵のふかひれスープも定番。入りやすいのはランチのコースや季節の点心のセット (2026年2月は3,980円) で、夜は15品から5品を選ぶコース。医食同源の考えで味はやさしく、ホテルの値段にしてはふつうという声も。サービス料15%。',
  });
}

// ================================================================ ウイスキー&ワイン シュン
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27014196/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://swissotelnankaiosaka.com/ja/restaurants-and-bars/shun/';
  const WD = day(['17:00', '22:00']); const WE = day(['12:00', '22:00']);
  put({
    id: 'osaka_whisky_wine_shun_swissotel', name: 'ウイスキー&ワイン シュン (Whisky & Wine Shun)', category: 'OMNI',
    lat: 34.663901, lng: 135.501528, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: kushikatsu is battered and fried; staff do adjust for allergies and dislikes on request (April and May 2025).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood and meat kushikatsu; some skewers use dashi.',
    hours_raw: 'Wed–Fri 17:00–22:00; Sat–Sun 12:00–22:00; last order 21:30; closed Monday and Tuesday (Tabelog). Reservations accepted (Tabelog). Prices exclude tax and a 13% service charge (Tabelog). Cards including UnionPay, e-money and PayPay (Tabelog). 35 seats with counter and tables (Tabelog; April 2025). In early 2026 the restaurant dropped its courses for a bar menu of kushikatsu and grills with whisky and wine; it was formerly "Wine & Dine SHUN" (January–February 2026).',
    hours: { 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 5-1-60, Swissôtel Nankai Osaka 6F (lobby floor) — escalator from the Nankai Namba 3F gates',
    cuisine: 'Hotel kushikatsu and whisky-and-wine bar (Tabelog; 2026 reviews) · creative skewers with seasonal ingredients and explained salts: shrimp, truffle rice, konjac, dashi kushikatsu (April 2025–January 2026) · since early 2026 à la carte: shrimp ¥1,100, Brussels sprouts okonomiyaki-style ¥700, scallops ¥850, shishamo ¥600, cheese platter ¥2,800, clam chowder; mini katsu sandwich (February and July 2026) · Japanese whiskies such as Yamazaki and Hakushu, wine from ¥2,500 (February–September 2026) · earlier course menus: fusion course with a corn flan appetizer; stick salad in a glass (2025)',
    website: SITE, gmaps: gm('ウイスキー&ワイン シュン スイスホテル南海大阪'), menu_url: null,
    notes: "[Kushikatsu bar · Namba, skewers and whisky in the Swissôtel lobby] A calm, grown-up bar on the lobby floor of the Swissôtel Nankai, reached by escalator straight from Nankai Namba, serving creative kushikatsu alongside a strong list of Japanese whisky and wine. It used to run kushikatsu courses as Wine & Dine SHUN; since early 2026 it is à la carte, with skewers like shrimp (¥1,100) and scallop (¥850), a cheese platter and clam chowder, a change one regular pointed out. Staff are attentive and adjust for allergies and dislikes. Expect hotel prices plus tax and a 13% service charge. Closed Mondays and Tuesdays; weekend lunch.",
    chef_bio: { chef_name: null, roles: ['Kitchen and bar staff (unnamed)'], origin: null, background: 'Tabelog: kushiage, wine bar and Japanese cuisine on the lobby floor (6F) of Swissôtel Nankai Osaka, directly connected to Namba Station. Reviews: formerly "Wine & Dine SHUN", a wine-focused kushikatsu restaurant with courses (2025); since early 2026 a whisky and wine bar with kushikatsu and kushi-grill dishes and no courses (January–February 2026).', philosophy: null, specialty: 'Creative kushikatsu; Japanese whisky.',
      anecdotes: [
        { text: '"Each skewer comes with detailed explanations of the ingredients and the salt used, showcasing the care put into each dish." — May 2025.', source: R + 'B507825888/' },
        { text: '"Wine & Dine used to be a wine-focused kushikatsu restaurant, but now it feels more like a bar with a great selection of whiskey and wine" — January 2026.', source: R + 'B520464001/' },
        { text: '"The format has changed to a bar menu without courses, featuring skewered fried dishes." — February 2026.', source: R + 'B522073607/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ウイスキー&ワイン シュン、串揚げ・ワインバー・日本料理、大阪市中央区難波5-1-60 スイスホテル南海大阪 6F (ホテルのロビー階)、なんば駅3階の改札から専用のエスカレーターで、水〜金17:00〜22:00、土日12:00〜22:00 (L.O.21:30)、月火休み、予約可、表示価格に税とサービス料13%、カード (銀聯も)・電子マネー・PayPay 可、35席。口コミ(2025年4月〜2026年9月): 以前は「Wine & Dine SHUN」のワイン中心の串カツのコース、季節の素材の創作の串、塩の説明、えび、トリュフのご飯、こんにゃく、だしの串カツ、アレルギーや苦手なものにすぐ対応、2026年初めからコースをやめて串カツと串焼きのバーのメニューに、えび1,100円、芽キャベツのお好み焼き風700円、ほたて850円、ししゃも600円、チーズの盛り合わせ2,800円、クラムチャウダー、ミニカツサンド、Yamazaki や Hakushu などのウイスキー、ワイン2,500円から。',
      confidence: 'medium', sources: [TB, SITE, R + 'B504415228/', R + 'B507825888/', R + 'B508388528/', R + 'B517614943/', R + 'B517780309/', R + 'B520464001/', R + 'B522073607/', R + 'B529222242/', R + 'B531684542/', R + 'B536138291/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hotel bar service; no English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市中央区難波5-1-60 スイスホテル南海大阪 6F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the hotel site; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; GSI 大阪府大阪市中央区難波五丁目1番60号 (go) about 120m — the lot spans Namba CITY and the station. Same building as osaka_table_36_swissotel (address_ja "難波5-1-60 スイスホテル南海大阪 36F", 50 m) and osaka_empress_room_swissotel ("スイスホテル南海大阪 10F", 47 m), so this pin is block-level (Tabelog point); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B522073607/'],
    price_note: 'Prices from a February 2026 review, before tax and the 13% service charge.', last_checked: TODAY, items: [
      it('', '', 'Shrimp kushikatsu', '¥1,100', 'Kushikatsu', 'no', 'no', 'February 2026 review.', 'ebi_kushi'),
      it('', '', 'Scallop kushikatsu', '¥850', 'Kushikatsu', 'no', 'no', 'February 2026 review.', 'hotate_kushi'),
      it('', '', 'Brussels sprouts okonomiyaki-style', '¥700', 'Kushikatsu', 'no', 'no', 'February 2026 review.', 'mekyabetsu'),
      it('', '', 'Cheese platter', '¥2,800', 'Bar', 'ask', 'no', 'February 2026 review.', 'cheese_platter'),
    ] }, {
    cuisine: 'ホテルの串カツとウイスキーとワインのバー (食べログ、2026年の口コミ)・季節の素材の創作の串と、説明つきの塩: えび、トリュフのご飯、こんにゃく、だしの串カツ (2025年4月〜2026年1月)・2026年初めから単品: えび1,100円、芽キャベツのお好み焼き風700円、ほたて850円、ししゃも600円、チーズの盛り合わせ2,800円、クラムチャウダー。ミニカツサンド (2026年2月と7月)・Yamazaki や Hakushu などの日本のウイスキー、ワインは2,500円から (2026年2月〜9月)・以前のコース: とうもろこしのフランの前菜のフュージョンのコース、グラスのスティックサラダ (2025年)',
    neighborhood: '難波5-1-60、スイスホテル南海大阪6階 (ロビー階)。南海なんば駅3階の改札からエスカレーターで',
    gf_detail: 'グルテンフリーではありません。串カツは衣の揚げ物。アレルギーや苦手なものには頼めば対応してくれる (2025年4月と5月)。',
    vegan_detail: 'ヴィーガンではありません。魚介と肉の串カツで、だしを使う串も。',
    notes: '[串カツのバー・なんば、スイスホテルのロビーで串とウイスキー] 南海なんば駅からエスカレーターで直結のスイスホテル南海大阪のロビー階の、落ち着いた大人のバーで、創作の串カツと日本のウイスキーやワインがそろう。以前は Wine & Dine SHUN として串カツのコースを出していたが、2026年初めから単品になり、えび (1,100円)、ほたて (850円)、チーズの盛り合わせ、クラムチャウダーなど。その変化を指摘する常連も。スタッフは気配りがあり、アレルギーや苦手なものに対応してくれる。値段はホテルの価格に税とサービス料13%。月火休み、週末は昼も。',
  });
}

// ================================================================ 出汁鍋&海鮮の店 門戸
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27090764/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://ocat.co.jp/shop/%e9%96%80%e6%88%b8%ef%bc%88%e3%83%a2%e3%83%b3%e3%83%89%ef%bc%89';
  const H = day(['11:00', '15:30'], ['17:00', '21:00']);
  put({
    id: 'osaka_dashinabe_mondo_ocat', name: '出汁鍋&海鮮の店 門戸 (Mondo)', category: 'OMNI',
    lat: 34.667109, lng: 135.495608, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Ten broths (soy, miso, Taiwanese spicy, kombu, yuzu salt …), ponzu, and Chinese noodles or marony to finish.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A big vegetable and mushroom buffet and a kombu broth are offered, but most broths and the sets centre on meat and seafood.',
    hours_raw: 'Daily 11:00–15:30 (lunch last order 14:30–15:00) and 17:00–21:00 (last order 20:00–20:30); closed when OCAT closes, the third Wednesday, 31 December and 1 January (Tabelog). Reservations accepted, by phone 10:30–20:30; under-16s with a guardian (Tabelog). Cards including UnionPay, e-money and QR payments including Alipay (Tabelog). Spacious, easy for solo hot pot (September 2026). Opened 1 March 2016 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minatomachi 1-4-1, OCAT mall 5F — 1 min from JR Namba Stn',
    cuisine: 'Dashi hot pot: choose one of about ten broths (soy, miso, special white miso, Taiwanese spicy, kombu, yuzu salt …; two for a supplement) with a buffet of vegetables, mushrooms, tofu, noodles, rice, quail eggs, soft drinks and ice lollies (September 2025–October 2026) · set meals from about ¥1,200: beef hot-pot set ¥1,380, large ¥1,780; offal (motsunabe) set; mushroom shabu-shabu (September 2025–October 2026) · all-you-can-eat dashi hot pot from ¥2,980; all-you-can-eat black wagyu (August 2026)',
    website: SITE, gmaps: gm('出汁鍋&海鮮の店 門戸 OCAT'), menu_url: null,
    notes: "[Hot pot · JR Namba, dashi nabe with a vegetable buffet] A big, airy hot-pot restaurant on the fifth floor of the OCAT mall by JR Namba, easy for a solo meal. Pick a main (beef, offal, black wagyu, mushrooms) and one of about ten broths, from white miso to Taiwanese spicy or kombu, then help yourself to vegetables, mushrooms, noodles, rice, soft drinks and ice lollies. Set meals run ¥1,200–1,800 at lunch (a beef set was ¥1,380 in October 2026), and all-you-can-eat dashi hot pot starts at ¥2,980. Diners are surprised by the quality for the price; one found the ponzu spicy. Hours follow the mall.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null, background: 'Tabelog: shabu-shabu, izakaya and buffet on OCAT Mall 5F, open 11:00–15:30 and 17:00–21:00, opened 1 March 2016; shop page on ocat.co.jp. Reviews (2025–2026): dashi hot-pot sets with a self-service vegetable and side buffet and about ten broths.', philosophy: null, specialty: 'Dashi hot-pot sets.',
      anecdotes: [
        { text: '"When you order the hot pot, you can enjoy unlimited vegetables, Chinese noodles, rice, and quail eggs." — September 2026, beef hot-pot set (large) ¥1,780.', source: R + 'B535938280/' },
        { text: '"The restaurant has a very spacious interior, allowing for a relaxing solo hot pot experience!" — September 2026.', source: R + 'B536555661/' },
        { text: '"To be honest, I had low expectations for the quality of the meat and other ingredients at an all-you-can-eat place, but I was wrong." — September 2026.', source: R + 'B536134783/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 出汁鍋&海鮮の店 門戸、しゃぶしゃぶ・居酒屋・ビュッフェ、大阪市浪速区湊町1-4-1 OCATモール 5F、JR難波駅から徒歩1分、毎日11:00〜15:30・17:00〜21:00、15:30〜17:00は休み、OCAT の休館日、第3水曜、大みそかと元日は休み、予約可 (電話は10:30〜20:30)、16歳未満は保護者と、カード (銀聯も)・電子マネー・QR (Alipay も) 可、2016年3月1日オープン。口コミ(2025年9月〜2026年10月): 醤油、味噌、特製白味噌、台湾の辛いだし、昆布、柚子塩など10種ほどのだし (2種は追加料金)、野菜、きのこ、豆腐、中華麺、ご飯、うずらの卵、ソフトドリンク、アイスキャンディーが食べ放題、牛鍋の定食1,380円と大盛り1,780円、もつ鍋の定食、きのこのしゃぶしゃぶ、マロニー、だし鍋の食べ放題2,980円から、黒毛和牛の食べ放題、ひとりでも入りやすい広い店、ポン酢が少し辛いという声。',
      confidence: 'medium', sources: [TB, SITE, R + 'B500684571/', R + 'B514178854/', R + 'B518431495/', R + 'B533769968/', R + 'B535628243/', R + 'B535938280/', R + 'B536134783/', R + 'B536555661/', R + 'B537245582/', R + 'B538193181/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Self-service buffet; no English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区湊町1-4-1 OCATモール 5F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the OCAT shop page; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区湊町一丁目4番1号 (go) 43m (OCAT is a large building); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538193181/', R + 'B535938280/', R + 'B533769968/'],
    price_note: 'Prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Beef hot-pot set (vegetable buffet included)', '¥1,380', 'Sets', 'ask', 'no', 'October 2026 review; large ¥1,780 in September 2026.', 'gyunabe_set'),
      it('', '', 'All-you-can-eat dashi hot pot (from)', '¥2,980', 'All-you-can-eat', 'ask', 'no', 'August 2026 review.', 'dashinabe_tabehodai'),
      it('', '', 'Motsunabe set', '', 'Sets', 'ask', 'no', 'September and December 2025 reviews.', 'motsunabe_set'),
    ] }, {
    cuisine: 'だし鍋: 醤油、味噌、特製白味噌、台湾の辛いだし、昆布、柚子塩など10種ほどのだしから1つ (2種は追加料金) を選び、野菜、きのこ、豆腐、麺、ご飯、うずらの卵、ソフトドリンク、アイスキャンディーはビュッフェ (2025年9月〜2026年10月)・定食は1,200円ほどから: 牛鍋の定食1,380円、大盛り1,780円、もつ鍋の定食、きのこのしゃぶしゃぶ (2025年9月〜2026年10月)・だし鍋の食べ放題は2,980円から。黒毛和牛の食べ放題 (2026年8月)',
    neighborhood: '湊町1-4-1、OCAT モール5階。JR難波駅から1分',
    gf_detail: '要確認。グルテンの情報なし。だしは10種 (醤油、味噌、台湾の辛いだし、昆布、柚子塩など)、ポン酢、締めは中華麺やマロニー。',
    vegan_detail: '要確認。野菜ときのこのビュッフェや昆布のだしはあるが、多くのだしや定食は肉と魚介が中心。',
    notes: '[鍋・JR難波、野菜のビュッフェつきのだし鍋] JR難波駅のそばの OCAT モール5階の、広くゆったりした鍋の店で、ひとりでも入りやすい。メイン (牛、もつ、黒毛和牛、きのこ) と、白味噌から台湾の辛いだしや昆布まで10種ほどのだしから1つを選び、野菜、きのこ、麺、ご飯、ソフトドリンク、アイスキャンディーは取り放題。昼の定食は1,200〜1,800円ほど (2026年10月は牛の定食が1,380円)、だし鍋の食べ放題は2,980円から。値段のわりに質が高いと驚く声が多く、ポン酢が辛めという人も。営業は OCAT に準ずる。',
  });
}

save();
