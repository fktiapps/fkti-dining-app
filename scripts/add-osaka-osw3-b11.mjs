// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first — lane osw3 (Tabelog id mod 4 = 2), batch 11.
//   + HILLMAN (the Osaka branch of Singapore's Hillman Restaurant: paper chicken and chili crab; Ura Namba since 2014)
//   + Micasadeco&Cafe (the first shop of the ricotta "dancing pancake" café, opened 2013 near Namba Hatch)
//   + 佐海屋 DINING STAGE Sakaiya Asahi (relocated Namba seafood izakaya known for croquette lunches)
//   + 宮崎郷土料理 どぎゃん 本店 Dogyan Honten (Miyazaki chicken izakaya with Takaida-style ramen; Bakuromachi since 2008)
//   Lane: the first four ids with id mod 4 = 2 in `queue.mjs osaka next notable 80` (2026-11-02, after batch 10):
//   27081638, 27075058, 27033042, 27041482 (last two digits 38, 58, 42, 82: each = 2 mod 4).
//   None is in data/osaka.json (grep by Tabelog id, name, romaji and address).
//   Chain check (Greg's rulings, 2026-11-02). HILLMAN: the only Japanese branch of a Singapore restaurant (a September
//   2026 diner says only Namba and Singapore remain); kept. Micasadeco: the first of four shops (Namba, Tokyo Jingumae,
//   Kyoto, THE PARK in Osaka) over 13 years, with a franchise page; none in data and not fast-growing; kept and flagged.
//   Sakaiya Asahi: one shop, reopened at a new address. Dogyan: this main shop plus a same-concept shop in 立売堀 (Nishi-ku)
//   (dogyan.jp), neither in data; the noodles-and-kakigori sister 麺とかき氷 ドギャン 谷四店 (osaka_men_to_kakigori_dogyan_tanimachi)
//   is a different format, so per the sister-concept ruling this is not a chain skip.
//   Ramen: Dogyan is Tabelog-tagged ramen but is a Miyazaki chicken izakaya serving five ramen; the sources describe two
//   different bowls only in part, so no ramen block (lesson 2026-11-01); cuisine_type yakitori.
//   open_late (Greg, 2026-11-02): true only when the shop closes after 22:00.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw3-11');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ HILLMAN
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27081638/'; const R = TB + 'dtlrvwlst/'; const SITE = 'http://www.hillman-restaurant.com/';
  const WD = day(['16:30', '23:00']); const WE = day(['12:00', '14:30'], ['16:30', '23:00']);
  put({
    id: 'osaka_hillman_namba', name: 'HILLMAN', category: 'OMNI',
    lat: 34.663705, lng: 135.503091, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The paper chicken is marinated in a sauce sent from Singapore (August 2026), and the chili crab, black-pepper prawns, laksa and mantou all use sauces or wheat; steamed chicken and stir-fried greens are where to start asking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Singaporean and Chinese dishes of chicken, crab, prawns and pork; sambal kangkung (water spinach) is made with sambal, which is not described.',
    hours_raw: 'Mon–Fri 16:30–23:00; Sat, Sun and holidays 12:00–14:30 and 16:30–23:00; last orders 14:00 and 22:30 (Tabelog). A weekend and holiday lunch course ¥2,200 (September 2026). Reservations; all-you-can-drink courses and discount deals (2026 reviews). Cards (VISA, Master, JCB, AMEX, Diners), IC cards, e-money and QR (Tabelog). 100 seats, sofas, private rooms for 6–8, private hire for over 50; non-smoking; children and strollers welcome; takeaway (Tabelog). The entrance is on the back street Sen’nichi Jizoson-dori, not the office-building side (August 2026). Opened 6 October 2014 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba Sennichimae 15-16, オクバビル 2F, in Ura Namba — 2 min east of Nankai Namba Stn',
    cuisine: 'Singaporean and Chinese dishes, as at the original Hillman Restaurant in Singapore (2026 reviews) · the signature paper chicken, marinated and cooked in paper, ¥290 a piece; the paper and sauce are sent from the Singapore restaurant (August 2026) · chili crab with prawns or king crab, with fried and steamed mantou ¥130 to mop up the sauce; black-pepper prawns, half ¥1,900; seafood chili combo with blue crab (2026) · bak kut teh of spare ribs simmered with spices and pepper; laksa with chewy noodles; Hillman fried rice; mapo tofu; a hot pot for two (2026) · sambal kangkung (water spinach) half ¥900; steamed chicken with scallion sauce ¥750; cilantro salad, half ¥650; a four-kind appetizer plate over ¥1,200 (2026) · weekend lunch course ¥2,200 with salads, steamed chicken, greens, spring rolls, bak kut teh or laksa, paper chicken and almond jelly (September 2026) · all-you-can-drink courses',
    website: SITE, gmaps: gm('HILLMAN 難波 シンガポール料理'), menu_url: null,
    notes: "[Singaporean · Ura Namba, Hillman's paper chicken in Osaka] The Osaka branch of Singapore's Hillman Restaurant, upstairs on an Ura Namba back street since 2014 (an older Kitashinchi branch has closed, a September 2026 diner notes). The dish to order is the paper chicken, marinated chicken cooked sealed in paper with paper and sauce sent from Singapore, one piece at a time for ¥290. Then chili crab with fried mantou to wipe up the sauce, black-pepper prawns, bak kut teh, laksa and sambal water spinach. The heat is gentler than some expect (October 2026). A roomy, stylish space for groups, with all-you-can-drink courses and a ¥2,200 weekend lunch course. Diners in 2026 were mostly pleased; one found the appetizer plate poor value. Find the entrance from Sen’nichi Jizoson-dori. Open evenings daily, plus weekend lunch.",
    chef_bio: { chef_name: null, roles: ['Manager and kitchen team (unnamed)'], origin: null,
      background: 'Per 2026 reviews: the Osaka branch of Hillman Restaurant in Singapore, known there for paper chicken; the paper and the sauce for it are sent from the Singapore original (the manager, per an August 2026 diner); a former Kitashinchi branch has closed, leaving Namba and Singapore (September 2026). Opened 6 October 2014 (Tabelog). The official site carries little beyond the shop name and booking link.',
      philosophy: null, specialty: 'Paper chicken; chili crab with mantou; bak kut teh.',
      anecdotes: [
        { text: '"I also learned that the paper and sauce are sent from the original restaurant in Singapore." — August 2026, a second visit after first eating the paper chicken in Singapore seven years earlier.', source: R + 'B513051742/' },
        { text: '"The mantou (fried bread) served with the chili crab was especially amazing!" — August 2026.', source: R + 'B534077918/' },
        { text: '"The initial assortment of four appetizers was a bit disappointing for over JPY 1200." — September 2026, a diner who knew the old Kitashinchi branch.', source: R + 'B536817055/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): HILLMAN、シンガポール料理・アジア・エスニック・中華料理、難波千日前15-16 オクバビル 2F、Nankai Namba 駅から東へ徒歩約2分、月〜金 16:30〜23:00 (L.O.22:30)、土日祝 12:00〜14:30 (L.O.14:00)・16:30〜23:00、カード・電子マネー・QR可、100席、個室 (6・8名)、貸切50名以上、禁煙、子ども・ベビーカー可、テイクアウト、2014年10月6日オープン。口コミ(2026年8月〜10月): シンガポールの本店のペーパーチキン、紙とソースは本店から送られてくる、1個290円、チリクラブと揚げ・蒸し饅頭130円、ブラックペッパーのエビ、バクテー、ラクサ、空芯菜のサンバル炒め、葱ソースの蒸し鶏750円、パクチーサラダ、土日祝のランチコース2,200円、飲み放題のコース、入口は Sen’nichi Jizōson-dōri 側、前菜の盛り合わせは割高という声、Kitashinchi にあった店は閉店。',
      confidence: 'medium', sources: [TB, SITE, R + 'B513051742/', R + 'B533838840/', R + 'B534009051/', R + 'B534077918/', R + 'B534135909/', R + 'B535120761/', R + 'B536454198/', R + 'B536817055/', R + 'B536922086/', R + 'B538000749/', R + 'B538283154/', R + 'B538343868/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order à la carte or by course; groups welcome. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前15-16 オクバビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前15番16号 (go) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534077918/', R + 'B534135909/', R + 'B536454198/'],
    price_note: 'Prices from August–September 2026 reviews (tax included as reported).', last_checked: TODAY, items: [
      it('', '', 'Paper chicken (1 piece)', '¥290', 'Signatures', 'ask', 'no', 'August 2026.', 'paper_chicken'),
      it('', '', 'Chili crab with prawns', '', 'Signatures', 'ask', 'no', 'August–October 2026.', 'chili_crab'),
      it('', '', 'Mantou, steamed or fried', '¥130', 'Sides', 'no', 'ask', 'August 2026.', 'mantou'),
      it('', '', 'Black-pepper prawns (half)', '¥1,900', 'Mains', 'ask', 'no', 'August 2026.', 'pepper_prawns'),
      it('', '', 'Weekend lunch course', '¥2,200', 'Lunch', 'ask', 'no', 'September 2026.', 'lunch_course'),
    ] }, {
    cuisine: 'シンガポールの Hillman Restaurant 本店と同じシンガポール料理と中華 (2026年の口コミ)・名物のペーパーチキンは下味をつけた鶏を紙で包んで調理し、1個290円。紙とソースはシンガポールの本店から届く (2026年8月)・チリクラブ (エビやタラバガニ)、ソースをぬぐう揚げ・蒸し饅頭130円、ブラックペッパーのエビ ハーフ1,900円、ワタリガニの海鮮チリ (2026年)・スペアリブをスパイスと胡椒で煮込んだバクテー、もちもちの麺のラクサ、Hillman チャーハン、麻婆豆腐、2人前の鍋 (2026年)・空芯菜のサンバル炒め ハーフ900円、葱ソースの蒸し鶏750円、パクチーサラダ ハーフ650円、1,200円を超える前菜4種盛り (2026年)・土日祝のランチコース2,200円 (サラダ、蒸し鶏、青菜炒め、春巻き、バクテーかラクサ、ペーパーチキン、杏仁豆腐、2026年9月)・飲み放題のコース',
    neighborhood: '難波千日前15-16 オクバビル 2F、Ura Namba。Nankai Namba 駅から東へ徒歩約2分',
    gf_detail: '要確認。グルテンの情報なし。ペーパーチキンはシンガポールから届くソースに漬け (2026年8月)、チリクラブ、ブラックペッパーのエビ、ラクサ、饅頭はどれもソースや小麦を使う。蒸し鶏や青菜炒めから確認を。',
    vegan_detail: 'ヴィーガンではありません。鶏、カニ、エビ、豚のシンガポール料理と中華。空芯菜のサンバル炒めのサンバルの中身は書かれていない。',
    notes: '[シンガポール料理・Ura Namba、ヒルマンのペーパーチキン] シンガポールの Hillman Restaurant の大阪店で、2014年から Ura Namba の路地の2階に。Kitashinchi にあった店は閉店したという (2026年9月の口コミ)。頼むべきは名物のペーパーチキンで、下味をつけた鶏を紙で包んで調理し、紙とソースはシンガポールから届く。1個290円。続いてソースを揚げ饅頭でぬぐうチリクラブ、ブラックペッパーのエビ、バクテー、ラクサ、空芯菜のサンバル炒め。思ったより辛くないという声も (2026年10月)。広くおしゃれな店内は団体にも向き、飲み放題のコースや週末2,200円のランチコースも。2026年の口コミはおおむね好評で、前菜の盛り合わせは割高という声も。入口は Sen’nichi Jizōson-dōri 側。夜は毎日、週末は昼も。',
  });
}

// ================================================================ Micasadeco&Cafe
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27075058/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://micasadecoandcafe.com/'; const NANBA = SITE + 'nanba.html'; const ABOUT = SITE + 'about.html';
  const WD = day(['09:00', '17:00']); const WE = day(['09:00', '18:00']);
  put({
    id: 'osaka_micasadeco_cafe_namba', name: 'Micasadeco&Cafe', category: 'OMNI',
    lat: 34.66834, lng: 135.494386, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Every pancake, toast and pasta is wheat-based; omelette rice, keema curry and salads are where to start asking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: ricotta pancakes, egg dishes and cream-topped seasonal pancakes; no vegan item is listed at this shop.',
    hours_raw: 'Mon–Fri 09:00–17:00 (last order 16:00); Sat, Sun and holidays 09:00–18:00 (last order 17:00); closed 31 December–3 January (official site; Tabelog). Morning menu 09:00–11:00 at this shop only; pancakes and food from 11:00 (official site). Hours may change; check Instagram (Tabelog). No reservations (Tabelog). Order from your phone (July and October 2026); free Wi-Fi; separate bills possible (July 2026). Cards (VISA, Master, JCB, AMEX, Diners), IC cards, e-money and QR (Tabelog). 27 seats with sofas; non-smoking, ashtrays outside; children and strollers welcome; takeaway and delivery (Tabelog). Opened 16 September 2013 (Tabelog), the first shop of the brand (official site).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Saiwaicho 1-2-8, Minatomachi82bld 1F (Naniwa-ku), by Namba Hatch — 3 min from exit 26-B of JR Namba / Osaka-Namba / Namba (Yotsubashi Line)',
    cuisine: 'Pancakes and café food in a "Cool & Cute" room (official site) · the No. 1 ricotta cheese pancake, three fluffy layers made to order that wobble at the table, ¥1,750 (August–September 2026; about 20 minutes, August 2026) · coconut custard pancake; the chewy plain pancake, good cold and for takeaway (official site) · autumn 2026 specials: espresso pancake with cinnamon apple and nuts ¥2,400; pumpkin-pie chewy pancake ¥2,200; seasonal drinks ¥750–¥900 (official site) · food: pasta of Italian sausage and zucchini in lemon cream, mozzarella-tomato pasta, ricotta and smoked salmon salad, truffle omelette rice, spicy keema curry (official site); avocado ricotta toast ¥1,200, croque monsieur ¥1,500, croque madame, eggs Benedict with smoked salmon and avocado ¥1,500, a savoury plate with omelette (2026) · teas ¥600, hojicha latte, matcha latte (2026)',
    website: SITE, gmaps: gm('Micasadeco&Cafe 難波'), menu_url: NANBA,
    notes: "[Café · Namba, the original ricotta \"dancing pancake\"] The first Micasadeco&Cafe, opened in 2013 beside Namba Hatch, where the brand's ricotta pancakes became known as \"dancing pancakes\" for the way the three tall, wobbly layers arrive at the table; the site says the ricotta pancake won three stars at the SARAH Japan Menu Award 2018 for Kansai pancakes. They are made to order (about 20 minutes), light and only lightly sweet, at ¥1,750; there are chewy plain pancakes, seasonal specials, brunch plates and pasta too, and a morning menu here from 9:00. The queues of the pancake boom have gone and you can usually walk in, order from your phone and stay a while. A 2026 regular and others note that nearly all the guests, and some staff, come from overseas, which the site says is the target. Open daytime only, closed over the New Year.",
    chef_bio: { chef_name: null, roles: ['Run by 株式会社インデペンデント (official site)'], origin: null,
      background: 'Per the official site: "Mi casa" is Spanish for "my home" and "Deco" stands for decoration; the first shop opened in Osaka Namba in 2013; the brand now has shops in Osaka (Namba and THE PARK in なノにわ), Tokyo (Jingumae) and Kyoto, and invites franchise enquiries; its theme is "Cool & Cute", aimed at overseas visitors and fashion-minded young people; the ricotta pancake, cooked one at a time after ordering, won three stars, the top rating, in the Kansai pancake section of the SARAH Japan Menu Award 2018 (second half). Opened 16 September 2013 (Tabelog).',
      philosophy: 'A place to feel at home, away from everyday life: "delicious, cute, fun" (official site).', specialty: 'Ricotta cheese pancake; seasonal pancakes.',
      anecdotes: [
        { text: '"When the staff brought them over, the pancakes were wobbling side to side, looking so soft and beautifully pale." — August 2026, a twenty-minute wait.', source: R + 'B533878047/' },
        { text: '"A few years ago, when I visited, there was a huge line due to the pancake craze, and I had to wait every time. But now, it seems the trend has passed" — May 2026.', source: R + 'B527815639/' },
        { text: '"Since it was just before 11 AM on a weekday, the restaurant was mostly filled with foreign customers." — September 2026, a seventh visit.', source: R + 'B483266075/' },
      ],
      japanese_sources_summary: '公式サイト (micasadecoandcafe.com): MICASADECO & CAFE、“Mi casa” はスペイン語で“我が家”、“Deco” は“Decoration”、2013年に1号店の大阪難波店がオープン、テーマは“Cool & Cute”、外国人観光客や Z世代の若者がターゲット、大阪・東京 (神宮前)・京都に店舗、THE PARK (なノにわ) も、フランチャイズの募集、看板は注文後に1枚ずつ焼くふわふわリコッタパンケーキで「踊るパンケーキ」として話題に、SARAH JAPAN MENU AWARD 2018 下半期の関西エリアパンケーキ部門で星3、難波店限定で9:00〜11:00にモーニング、平日9:00〜17:00 (L.O.16:00)、週末9:00〜18:00 (L.O.17:00)、定休日12/31〜1/3、季節のパンケーキ (シナモン香るリンゴとナッツのエスプレッソパンケーキ2,400円、パンプキンパイ風もちもちパンケーキ2,200円)、ココナッツカスタードパンケーキ、もちもちのプレーンパンケーキ、パスタ、トリュフ香る大人のオムライス、キーマカレー。食べログ (店舗会員): パンケーキ・イタリアン・カフェ、浪速区幸町1-2-8 Minatomachi82bld 1F、予約不可、カード・電子マネー・QR可、27席、禁煙、テイクアウト・デリバリー、無料Wi-Fi、2013年9月16日オープン。口コミ(2026年3月〜10月): リコッタパンケーキ1,750円、約20分、スマホで注文、行列のブームは去って並ばずに入れる、客の多くは海外から。',
      confidence: 'medium', sources: [SITE, NANBA, ABOUT, TB, R + 'B483266075/', R + 'B524513311/', R + 'B527815639/', R + 'B530937902/', R + 'B531087588/', R + 'B533878047/', R + 'B536038828/', R + 'B536209831/', R + 'B537379104/', R + 'B537970043/', R + 'B538389487/', R + 'B87999941/'] },
    cultural_comfort: { level: 'english', note: 'The official site has an English page and the brand targets overseas visitors; order by smartphone (July and October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区幸町1-2-8 Minatomachi82bld 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (autumn 2026 menu) and the shop-maintained Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区幸町一丁目2番8号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [NANBA, R + 'B533878047/'],
    price_note: 'Seasonal prices from the official Namba page (read November 2026); others from August 2026 reviews.', last_checked: TODAY, items: [
      it('リコッタチーズのパンケーキ', '', 'Ricotta cheese pancake (three layers)', '¥1,750', 'Pancakes', 'no', 'no', 'Official site (name); August–September 2026 (price).', 'ricotta_pancake'),
      it('シナモン香るリンゴとナッツのエスプレッソパンケーキ', '', 'Espresso pancake with cinnamon apple and nuts (autumn)', '¥2,400', 'Pancakes', 'no', 'no', 'Official site.', 'espresso_pancake'),
      it('パンプキンパイ風もちもちパンケーキ', '', 'Pumpkin-pie chewy pancake (autumn)', '¥2,200', 'Pancakes', 'no', 'no', 'Official site.', 'pumpkin_pancake'),
      it('', '', 'Croque monsieur', '¥1,500', 'Food', 'no', 'no', 'August 2026.', 'croque'),
      it('', '', 'Eggs Benedict with smoked salmon and avocado', '¥1,500', 'Food', 'no', 'no', 'August 2026.', 'benedict'),
    ] }, {
    cuisine: '“Cool & Cute”の店内のパンケーキとカフェごはん (公式サイト)・1番人気のリコッタチーズのパンケーキは注文後に焼くふわふわの3段重ねで、テーブルに来るとぷるぷる揺れる。1,750円 (2026年8〜9月、約20分、2026年8月)・ココナッツカスタードパンケーキ、冷めてもおいしくテイクアウトにも向くもちもちのプレーンパンケーキ (公式サイト)・2026年秋の限定: シナモン香るリンゴとナッツのエスプレッソパンケーキ2,400円、パンプキンパイ風もちもちパンケーキ2,200円、季節のドリンク750円・900円 (公式サイト)・食事: イタリアンソーセージとズッキーニのレモンクリームパスタ、モッツァレラのトマトソースパスタ、リコッタとスモークサーモンのサラダ、トリュフ香る大人のオムライス、キーマカレー (公式サイト)。アボカドとリコッタのトースト1,200円、クロックムッシュ1,500円、クロックマダム、スモークサーモンとアボカドのエッグベネディクト1,500円、オムレツのプレート (2026年)・紅茶600円、ほうじ茶ラテ、抹茶ラテ (2026年)',
    neighborhood: '浪速区幸町1-2-8 Minatomachi82bld 1F、Namba Hatch のそば。JR Namba・Osaka-Namba・Namba (Yotsubashi Line) の26-B出口から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。パンケーキ、トースト、パスタはどれも小麦。オムライス、キーマカレー、サラダから確認を。',
    vegan_detail: 'ヴィーガンではありません。リコッタのパンケーキ、卵料理、クリームをのせた季節のパンケーキで、この店にヴィーガンのメニューはない。',
    notes: '[カフェ・難波、元祖リコッタの「踊るパンケーキ」] 2013年に Namba Hatch のそばに開いた MICASADECO & CAFE の1号店。高いふわふわの3段がぷるぷる揺れて運ばれてくるリコッタパンケーキは「踊るパンケーキ」として話題になり、サイトによれば SARAH JAPAN MENU AWARD 2018 の関西のパンケーキ部門で星3。注文後に焼くので20分ほどかかり、軽く甘さ控えめで1,750円。もちもちのプレーンパンケーキ、季節の限定、ブランチのプレートやパスタもあり、ここでは朝9時からモーニングも。パンケーキブームの行列は去り、今はたいてい待たずに入れ、スマホで注文してゆっくりできる。2026年の口コミでは客もスタッフも海外の人が多いという声が多く、サイトもそれをターゲットとしている。昼だけの営業、年末年始は休み。',
  });
}

// ================================================================ 佐海屋 DINING STAGE Sakaiya Asahi
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27033042/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00'], ['17:00', '22:00']);
  put({
    id: 'osaka_dining_stage_sakaiya_asahi_namba', name: '佐海屋 (DINING STAGE Sakaiya Asahi)', category: 'OMNI',
    lat: 34.664416, lng: 135.499185, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sashimi, grilled fish and dashimaki are the plainest; the signature croquettes, large fried prawns, tempura, fried oysters and the ramen are wheat-based.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood izakaya; the croquettes contain meat (nikujaga) or cream, and the set meals come with fish and miso soup.',
    hours_raw: 'Daily 11:00–15:00 (last order 14:00) and 17:00–22:00 (last orders food 21:00, drinks 21:30); closed over the New Year (Tabelog). Reservations; two hours when busy (Tabelog). Dinner adds a ¥500 appetizer charge (choose two small dishes, October 2026) (Tabelog). Order by tablet; rice and miso soup refills at lunch (2026 reviews). Cards (VISA, Master, JCB, AMEX, Diners), IC cards, iD, QUICPay and QR (Tabelog). 80 seats: 12 at the counter, tables, and a horigotatsu room for 15–20; private hire up to 50; non-smoking; free Wi-Fi (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nambanaka 1-10-4, 南海野村ビル B1F (Naniwa-ku), just southwest across the road from Takashimaya — 30 seconds from subway exit 6, 1 min from Nankai Namba Stn',
    cuisine: 'Seafood izakaya with lunch set meals (2026 reviews) · lunch: croquette set with a fist-sized nikujaga croquette and a seasonal croquette (e.g. spinach cream), large fried-prawn set, grilled mackerel set ¥1,440 with a croquette; the Sakaiya colourful one-plate ¥1,280–¥1,350 (choice of croquette or large fried prawn, with sides such as marinated tuna, dashimaki, salted mackerel, pickles, hijiki and miso soup); daily sets such as rare salmon cutlet, kara-age or tonkatsu (September–October 2026) · dinner: sashimi, large prawn tempura with tartar sauce, fried oysters, steamed clams, firefly squid marinated in soy, chicken-thigh tataki, dashimaki, croquettes, grilled fish, a ramen to finish; courses with all-you-can-drink (2026); a "mega" highball · sake and shochu (Tabelog)',
    website: null, gmaps: gm('DINING STAGE 佐海屋 難波'), menu_url: null,
    notes: "[Izakaya · Namba, the relocated Sakaiya of croquette lunches] A basement seafood izakaya across the road from Takashimaya that many diners know as the old Sakaiya, a popular Namba lunch spot that closed and has reopened here as DINING STAGE Sakaiya Asahi ('the location and owner have moved and reopened', an October 2026 reviewer writes). The fist-sized croquettes are back: nikujaga or a seasonal cream croquette, on a set or a one-plate lunch with many small sides and free refills of rice. At night it is sashimi, big tempura prawns, fried oysters and chicken tataki, with all-you-can-drink courses. Returning regulars are split: some are delighted it survived, others find the lunch smaller and the grilled fish and rice weaker than before (October 2026). Open daily for lunch and dinner.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per 2026 reviews: the former "Sakaiya" in Namba (one diner says in Namba CITY) closed, and the shop reopened at this address as "DINING STAGE Sakaiya Asahi"; an October 2026 diner writes that "the location and owner have moved and reopened"; ordering moved to a tablet; the lunch menu was revamped in October 2026. Shop-maintained (corporate-member) Tabelog listing; no opening date given. The listing says the kitchen is particular about fish, sake and shochu.',
      philosophy: null, specialty: 'Croquette set meals; large fried prawns; seafood.',
      anecdotes: [
        { text: '"It was a shame to see the popular \'Sakaiya\' in Namba CITY close down, but I\'m really glad that \'DINING STAGE Sakaiya Asahi\' has taken over and is thriving under the same name!" — September 2026, croquette set.', source: R + 'B11555233/' },
        { text: '"Astonishing! … It seems the location and owner have moved and reopened, which is an immense joy. However, has the lunch portion size decreased a bit?" — October 2026, large fried-prawn one-plate ¥1,350.', source: R + 'B536584516/' },
        { text: '"I ordered a Mega Highball for the first toast, and I was surprised by its size—I couldn\'t finish it!" — October 2026, an 11th visit.', source: R + 'B511399077/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): DINING STAGE 佐海屋 (Sakaiya Asahi)、居酒屋・海鮮・天ぷら、浪速区難波中1-10-4 南海野村ビル B1F、Takashimaya の南西の道向かい、地下鉄6番出口から30秒、Nankai Namba 駅から徒歩1分、毎日11:00〜15:00 (L.O.14:00)・17:00〜22:00 (L.O.料理21:00・ドリンク21:30)、年末年始休み、予約可、混雑時は2時間、夜はお通し500円、カード・電子マネー・QR可、80席 (カウンター12、テーブル、掘りごたつ15〜20名)、貸切50名まで、禁煙、無料Wi-Fi、魚・日本酒・焼酎にこだわり。口コミ(2026年9月〜10月): 以前の佐海屋が移転して再開、場所とオーナーが移って再開したという声、げんこつほどのコロッケ定食 (肉じゃがコロッケ、季節のクリームコロッケ)、大海老フライ、彩りワンプレート1,280〜1,350円、鯖の塩焼き定食1,440円、ご飯と味噌汁のおかわり、タブレットで注文、お通しは2品選べる、刺身、海老天、カキフライ、鶏ももたたき、締めのラーメン、メガハイボール、量が減った、魚やご飯が前より落ちたという声も。',
      confidence: 'medium', sources: [TB, R + 'B11555233/', R + 'B253119409/', R + 'B511399077/', R + 'B536215582/', R + 'B536584516/', R + 'B537135420/', R + 'B537593332/', R + 'B537648640/', R + 'B537918909/', R + 'B537920042/', R + 'B537992690/', R + 'B538099916/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by tablet; a digital menu (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中1-10-4 南海野村ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中一丁目10番4号 (go) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536584516/', R + 'B537648640/', R + 'B537918909/'],
    price_note: 'Lunch prices from October 2026 reviews (tax included as reported); no menu online.', last_checked: TODAY, items: [
      it('', '', 'Sakaiya colourful one-plate lunch (croquette)', '¥1,280', 'Lunch', 'no', 'no', 'October 2026.', 'one_plate'),
      it('', '', 'One-plate lunch with a large fried prawn', '¥1,350', 'Lunch', 'no', 'no', 'October 2026.', 'prawn_plate'),
      it('', '', 'Grilled mackerel set with a nikujaga croquette', '¥1,440', 'Lunch', 'no', 'no', 'October 2026.', 'mackerel_set'),
      it('', '', 'Croquette set meal (nikujaga and seasonal croquette)', '', 'Lunch', 'no', 'no', 'September 2026.', 'croquette_set'),
    ] }, {
    cuisine: '海鮮居酒屋で昼は定食 (2026年の口コミ)・昼: げんこつほどの肉じゃがコロッケと季節のコロッケ (ほうれん草のクリームなど) のコロッケ定食、大海老フライ定食、コロッケつきの鯖の塩焼き定食1,440円、佐海屋の彩りワンプレート1,280〜1,350円 (コロッケか大海老フライ、まぐろの漬け、だし巻き、塩鯖、漬物、ひじき、味噌汁などの小鉢)、レアサーモンカツ、唐揚げ、とんかつなどの日替わり (2026年9〜10月)・夜: 刺身、タルタルソースの大海老の天ぷら、カキフライ、あさりの酒蒸し、ホタルイカの沖漬け、鶏もものたたき、だし巻き、コロッケ、焼き魚、締めのラーメン、飲み放題つきのコース (2026年)、メガハイボール・日本酒と焼酎 (食べログ)',
    neighborhood: '浪速区難波中1-10-4 南海野村ビル B1F、Takashimaya の南西の道向かい。地下鉄6番出口から30秒、Nankai Namba 駅から徒歩1分',
    gf_detail: '要確認。グルテンの情報なし。刺身、焼き魚、だし巻きがいちばんシンプルで、名物のコロッケ、大海老フライ、天ぷら、カキフライ、ラーメンは小麦を使う。',
    vegan_detail: 'ヴィーガンではありません。海鮮居酒屋で、コロッケは肉 (肉じゃが) かクリーム、定食には魚と味噌汁がつく。',
    notes: '[居酒屋・難波、移転したコロッケ定食の佐海屋] Takashimaya の道向かいの地下にある海鮮居酒屋で、多くの客には難波の昼の人気店だった佐海屋として知られる。いったん閉店し、ここで DINING STAGE Sakaiya Asahi として再開した (場所とオーナーが移って再開したという2026年10月の口コミ)。げんこつほどのコロッケは健在で、肉じゃがや季節のクリームコロッケを定食やワンプレートで、小鉢が多くご飯はおかわりできる。夜は刺身、大きな海老天、カキフライ、鶏のたたき、飲み放題つきのコース。昔からの常連の声は分かれ、再開を喜ぶ人もいれば、昼の量が減り焼き魚やご飯が前より落ちたという人も (2026年10月)。毎日、昼と夜。',
  });
}

// ================================================================ 宮崎郷土料理 どぎゃん 本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27041482/'; const R = TB + 'dtlrvwlst/'; const SITE = 'http://www.dogyan.jp/';
  const WD = day(['11:30', '14:00'], ['17:00', '23:30']); const SA = day(['17:00', '23:00']);
  put({
    id: 'osaka_dogyan_honten_bakuromachi', name: '宮崎郷土料理 どぎゃん 本店 (Miyazaki Regional Cuisine Dogyan Honten)', category: 'OMNI',
    lat: 34.678457, lng: 135.502543, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Charcoal-grilled chicken and chicken sashimi are the plainest; chicken nanban, kara-age, the ramen and the tare dishes are wheat- or soy-based.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Miyazaki chicken izakaya; the ramen broths are chicken and fish based (June 2026).',
    hours_raw: 'Mon–Fri lunch 11:30–14:00 and dinner 17:00–23:30 (last order 23:00); Sat 17:00–23:00 (last order 22:30); closed Sundays and holidays (Tabelog). Lunch is weekdays only; order before 12:00 for a free raw egg or small side (August 2026); rice, miso soup and salad refills (August 2026). Book by the day before, especially on Fridays; a reservation assumes at least ¥2,500 a head, and a no-show after 15 minutes may be cancelled; seat-only or drinks-only bookings carry a ¥350 charge, not on courses (Tabelog). Cards for bills of ¥3,500 (before tax) or more, not with all-you-can-drink or discounts; PayPay and LINE Pay (Tabelog). 38 seats including a raised tatami area for 14; smoking allowed (after 13:00 at lunch, June 2026); up two flights of stairs (October 2026). Order by QR code (2026). Opened 29 September 2008 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Bakuromachi 3-1-13, 戎センタービル 2F, east of Shinsaibashi-suji — 5 min from Shinsaibashi or Honmachi Stn',
    cuisine: 'Miyazaki chicken dishes and ramen (Tabelog shop text; 2026 reviews) · charcoal-grilled thigh of long-raised hens; chicken nanban with tartar (Kimura chicken, April 2026); chicken sashimi platter, to be eaten within 30 minutes; tataki; grilled skin, outside skirt, neck with cheese; meat-wrapped rice balls; spicy tofu steak (Tabelog; 2026) · ramen, five kinds (April 2026): the signature Takaida-style chuka soba, a rich soy sauce on chicken broth with thick noodles, tender chashu and soft menma, ¥900 with extra fat (April 2026); Tsubamesanjo backfat ramen ¥1,000, chicken-bone and niboshi soy broth with thick, flat, wavy whole-wheat noodles, chashu, aosa and onion (June 2026); cold tantan noodles with meat and sesame; kasu ramen (2026) · lunch sets from ¥950 (charcoal-grilled chicken, chicken nanban; August 2026), Miyazaki chicken nanban set ¥1,100 (October 2026), pork shabu yakiniku and kara-age set (September 2026) · courses with two-hour all-you-can-drink ¥5,500–¥6,000, with a mild option for the spicy grilled chicken (Tabelog; May and August 2026) · shochu such as Kuro Kirishima and Iichiko',
    website: SITE, gmaps: gm('宮崎郷土料理 どぎゃん 本店 博労町'), menu_url: null,
    notes: "[Yakitori · Bakuromachi, Miyazaki chicken and a TV-famous ramen] Up two flights of stairs east of Shinsaibashi-suji, a casual Miyazaki izakaya open since 2008, with a counter, tables and a raised tatami area, where smoking is allowed. The draw is Miyazaki chicken: charcoal-grilled thigh of long-raised hens, chicken nanban under tartar sauce, fresh chicken sashimi and tataki. Yet many come for the ramen, five kinds, led by a Takaida-style chuka soba the shop calls its most popular dish (rich soy sauce on chicken broth, thick noodles) and a rare-in-Kansai Tsubamesanjo backfat ramen. Weekday lunch sets from ¥950 come with free refills of rice and miso soup. Diners in 2026 praise the chicken and the ramen; one found the lunch chicken nanban tough and pricey, another the floor greasy. Closed Sundays.",
    chef_bio: { chef_name: null, roles: ['Shop manager and staff (unnamed; the site carries a 店長ブログ)'], origin: null,
      background: 'Per the official site (dogyan.jp): Miyazaki regional cuisine, charcoal yakitori and ramen at this main shop and a shop in 立売堀, Nishi-ku; the same group runs the noodle and kakigori shop 麺とかき氷 ドギャン 谷四店 (osaka_men_to_kakigori_dogyan_tanimachi in data). Per the Tabelog shop text: Miyazaki dishes such as charcoal-grilled thigh of long-raised hens, chicken nanban and meat-wrapped rice balls, plus the Takaida-style chuka soba, featured on TV several times and the most popular dish. Opened 29 September 2008 (Tabelog).',
      philosophy: null, specialty: 'Charcoal-grilled hen thigh; chicken nanban; Takaida-style chuka soba.',
      anecdotes: [
        { text: '"After taking a sip of the broth, I was astonished. It completely surpassed the offerings of a certain well-known Takeda-style chain." — April 2026, Takaida chuka soba with extra fat ¥900.', source: R + 'B526651244/' },
        { text: '"I debated between Takai-da style and Tsubamesanjo style, but opted for the rare Tsubamesanjo style in Kansai." — June 2026, weekday lunch.', source: R + 'B325561254/' },
        { text: '"This chicken cutlet had a good texture but was quite tough." — October 2026, Miyazaki chicken nanban set ¥1,100.', source: R + 'B536755514/' },
      ],
      japanese_sources_summary: '公式サイト (dogyan.jp): 炭火焼鳥・ラーメン 宮崎郷土料理どぎゃん、心斎橋・本町立売堀、本店は中央区博労町3-1-13、立売堀店は西区立売堀1-6-14、麺とかき氷 ドギャン 谷四店 (かき氷専門店)、店長ブログ。食べログ (店舗会員): 焼き鳥・ラーメン・居酒屋、博労町3-1-13 戎センタービル 2F、Shinsaibashi 駅・Honmachi 駅から徒歩5分、月〜金 11:30〜14:00・17:00〜23:30 (L.O.23:00)、土 17:00〜23:00 (L.O.22:30)、日祝休み、予約は前日までに、1人2,500円以上で予約成立、席のみや飲み放題のみの予約はチャージ料350円 (税別)、カードは3,500円 (税別) 以上から、PayPay・LINE Pay可、38席 (小上がり14席)、喫煙可、2008年9月29日オープン、長期飼育の親鶏もも炭火焼き、名物チキン南蛮、肉巻きおにぎり、テレビで何度も紹介された一番人気の「Takaida Chuka Soba」、飲み放題つきの宮崎郷土料理コース5,500〜6,000円。口コミ(2026年4月〜10月): Tsubamesanjo 背脂ラーメン1,000円、Takaida Chuka Soba 背脂増し900円、ラーメンは5種類、冷やし担々麺、粕ラーメン、平日のランチ定食950円から、ご飯・味噌汁・サラダのおかわり、鶏刺し、鶏のたたき、チキン南蛮は固いという声、QR で注文、階段を2回上がる。',
      confidence: 'medium', sources: [SITE, TB, R + 'B325561254/', R + 'B497669232/', R + 'B516017318/', R + 'B526651244/', R + 'B531455783/', R + 'B532845144/', R + 'B533964328/', R + 'B533965353/', R + 'B534413794/', R + 'B534553814/', R + 'B536755514/', R + 'B537904741/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by QR code at the table (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区博労町3-1-13 戎センタービル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with an October booking offer; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区博労町三丁目1番13号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B526651244/', R + 'B325561254/', R + 'B533964328/'],
    price_note: 'Prices from April–October 2026 reviews (tax included as reported); courses from the Tabelog listing.', last_checked: TODAY, items: [
      it('', 'Takaida Chuka Soba', 'Takaida-style chuka soba (extra fat)', '¥900', 'Ramen', 'no', 'no', 'Tabelog shop text (name); April 2026 (price with extra fat).', 'takaida'),
      it('', '', 'Tsubamesanjo backfat ramen', '¥1,000', 'Ramen', 'no', 'no', 'June 2026.', 'tsubamesanjo'),
      it('', '', 'Chicken nanban lunch set', '¥950', 'Lunch', 'no', 'no', 'August 2026; ¥1,100 for the Miyazaki chicken nanban set in October 2026.', 'nanban_set'),
      it('', '', 'Charcoal-grilled thigh of long-raised hen', '', 'Chicken', 'ask', 'no', 'Tabelog shop text; October 2026.', 'oya_dori'),
      it('', '', 'Course with two-hour all-you-can-drink', '¥5,500', 'Courses', 'ask', 'no', 'Tabelog listing; ¥6,000 for the eight-dish course.', 'course'),
    ] }, {
    cuisine: '宮崎の鶏料理とラーメン (食べログの店の紹介、2026年の口コミ)・長期飼育の親鶏ももの炭火焼き、タルタルのチキン南蛮 (Kimura の鶏、2026年4月)、30分以内に食べるよう言われる鶏刺しの盛り合わせ、たたき、皮、外ハラミ、チーズのせせり、肉巻きおにぎり、辛い豆腐ステーキ (食べログ、2026年)・ラーメンは5種類 (2026年4月): 看板の Takaida Chuka Soba は鶏ガラに濃い醤油、太麺、やわらかいチャーシューとメンマ、背脂増しで900円 (2026年4月)。Tsubamesanjo 背脂ラーメン1,000円は鶏ガラと煮干しの醤油スープに全粒粉の太い平打ちのちぢれ麺、チャーシュー、あおさ、玉ねぎ (2026年6月)。肉ゴマの冷やし担々麺、粕ラーメン (2026年)・平日のランチ定食は950円から (炭火焼鳥、チキン南蛮、2026年8月)、宮崎チキン南蛮定食1,100円 (2026年10月)、豚しゃぶ焼肉と唐揚げの定食 (2026年9月)・2時間飲み放題つきのコース5,500〜6,000円、激辛の焼鳥は辛くないものに変更可 (食べログ、2026年5月と8月)・Kuro Kirishima や Iichikoなどの焼酎',
    neighborhood: '博労町3-1-13 戎センタービル 2F、Shinsaibashi-suji の東。Shinsaibashi 駅または Honmachi 駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。炭火焼の鶏と鶏刺しがいちばんシンプルで、チキン南蛮、唐揚げ、ラーメン、タレの料理は小麦や醤油を使う。',
    vegan_detail: 'ヴィーガンではありません。宮崎の鶏の居酒屋で、ラーメンのスープも鶏と魚 (2026年6月)。',
    notes: '[焼き鳥・博労町、宮崎の鶏とテレビで紹介されたラーメン] Shinsaibashi-suji の東、階段を2回上がった先の、2008年からの気軽な宮崎料理の居酒屋。カウンター、テーブル、小上がりがあり、たばこも吸える。目当ては宮崎の鶏: 長期飼育の親鶏ももの炭火焼き、タルタルのチキン南蛮、新鮮な鶏刺しやたたき。それでもラーメン目当ての客も多く、5種類のうち店が一番人気という Takaida Chuka Soba (鶏ガラに濃い醤油、太麺) と、関西では珍しい Tsubamesanjo の背脂ラーメン。平日のランチ定食は950円からでご飯と味噌汁のおかわりつき。2026年の口コミでは鶏とラーメンが好評、昼のチキン南蛮は固くて割高、床がすべるという声も。日曜休み。',
  });
}

save();
