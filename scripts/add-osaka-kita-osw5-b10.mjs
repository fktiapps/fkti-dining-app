// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle umeda; worker osw5 (lane: Tabelog id even), batch 10.
//   + イタメシヤSUGU Itameshiya Sugu (one-person Italian counter in Kitashinchi, pasta lunches, open to 5:00, since 2024)
//   + IAKU (eight-seat innovative counter in Kitashinchi; Tabelog French WEST 100 2025)
//   + たこ焼き酒場 ん Takoyaki Sakaba N (takoyaki and teppan bar in a former snack bar, since 2023)
//   + なにわ天ぷら 維心 Naniwa Tempura Ishin (tempura with champagne, Tabelog Tempura 100 2022 and 2023, since 2016)
//   Chain check: Sugu: one shop. IAKU: one shop; "produced by" the U.KAI owner per a September 2026 review. Takoyaki Sakaba N: one shop
//   (a reviewer wondered about a namesake in Fukushima; no source confirms a link). Ishin: one shop (ishin-ryo.com). None is in
//   data/osaka.json (grep by id, name and address, 2026-11-02). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw5-10');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ イタメシヤSUGU
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27143566/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:00', '15:00'], ['18:00', '05:00']); const S = day(['18:00', '23:00']);
  put({
    id: 'osaka_itameshiya_sugu_kitashinchi', name: 'イタメシヤSUGU (Itameshiya Sugu)', category: 'OMNI',
    lat: 34.697831, lng: 135.498383, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Pasta, pizza, bread with the ajillo, fried yam and quiche; bagna cauda vegetables and carpaccio are the plainer dishes, but nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Italian dishes with cheese, cream, cured meat and seafood; the lunch starters include oysters and roast duck.',
    hours_raw: 'Weekdays and the days before and after a holiday 11:00–15:00 (last order 14:30) and 18:00–5:00 (last order 4:00); Saturdays 18:00–23:00 (last order food 22:00, drinks 22:30); closed Sundays, and Mondays that are holidays (Tabelog). Reservations accepted, lunch included; whole-shop hire by phone; 10% late-night charge after 22:00 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog); one lunch diner paid cash (October 2026). 17 seats: a counter of 9, tables for 2 and 6; smoking allowed (Tabelog), non-smoking at lunch per an October 2026 diner. Run by one person at lunch, so there may be a wait (October 2026). Opened 17 June 2024 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: S }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '曾根崎新地1-9-15, GOTS永楽町2号館 — 2 min from Kitashinchi Stn',
    cuisine: 'Italian with the motto "affordable and delicious", from starters to pasta, with plenty of red, white and sparkling wine (Tabelog) · pasta lunch from ¥1,500 with a bagna cauda of roasted vegetables and a plate of starters (ratatouille, potato salad, roast duck, carpaccio, quiche, oysters), three pastas a day, e.g. shrimp and basil genovese, squid and nori peperoncino, scallop and gorgonzola cream, fresh fish and shiso genovese (October 2026); homemade mentaiko-cream tagliatelle ¥1,980 (April 2026); a premium lunch course · evening: prosciutto and strawberry with burrata, oysters with Kujo green onion in garlic oil, seafood carpaccio, Quattro Formaggi, fried yam with truffle, Caesar salad, carbonara, trippa, cheesecake, sangria (April–September 2026) · courses: party plan with pizza and pasta ¥3,980; Special course of six dishes ¥4,980; Premium course ¥5,980; two hours of drinks +¥2,200 (Tabelog, tax included)',
    website: null, gmaps: gm('イタメシヤSUGU 北新地'), menu_url: null,
    notes: "[Italian · Kitashinchi, a late-night Italian counter] A small, tiled-counter Italian restaurant in Kitashinchi, open since 2024 at lunch and then from 18:00 until 5:00 on weekdays, with the motto \"affordable and delicious\". The pasta lunch is the bargain: from ¥1,500 you get a bagna cauda of roasted vegetables, a plate of starters that may include oysters or roast duck, and one of three daily pastas, sometimes homemade tagliatelle (2026). At night the counter fills with wine drinkers over prosciutto with burrata and strawberries, oysters in garlic oil, fried yam with truffle and Quattro Formaggi, or courses from ¥3,980. One person cooks at lunch, so expect a short wait; one diner found it hard to get water on a busy night (September 2026). A 10% late-night charge applies after 22:00, and smoking is allowed in the evening.",
    chef_bio: { chef_name: null, roles: ['Owner-cook (unnamed)'], origin: null, background: 'Per the shop-maintained Tabelog listing: authentic Italian with the motto "affordable and delicious", from appetizers to pasta, open until 5:00; opened 17 June 2024. An April 2026 diner learned "the owner wants customers to enjoy a lot of food"; an October 2026 diner notes "it\'s a one-person operation" at lunch.', philosophy: '"Affordable and Delicious" (Tabelog).', specialty: 'Pasta lunch with bagna cauda; fried yam with truffle.',
      anecdotes: [
        { text: '"I expected a typical green salad with lettuce, but it turned out to be a delicious roasted vegetable bagna cauda!" — April 2026, homemade mentaiko cream pasta for JPY 1,980.', source: R + 'B526684005/' },
        { text: '"I was pleasantly surprised to find not only vegetables but also oysters among the appetizers, making it great value to have two side dishes at this price." — October 2026, pasta lunch from JPY 1,500.', source: R + 'B537328574/' },
        { text: '"The fried potatoes with yam and truffle were amazing." — April 2026; a surprise cake requested on the day came with a decorated plate.', source: R + 'B526717906/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): イタメシヤSUGU、イタリアン・バル、大阪市北区曾根崎新地1-9-15 GOTS永楽町2号館、北新地駅から徒歩2分、平日・祝前日・祝後日11:00〜15:00 (L.O.14:30)、18:00〜翌5:00 (L.O.4:00)、土18:00〜23:00、日曜休み、月曜が祝日の場合は休み、予約可、22時以降は深夜料金10%、カード可、電子マネー・QR 不可、17席 (カウンター9、2名と6名のテーブル)、喫煙可、2024年6月17日オープン、「安くて美味しい」がモットー、前菜からパスタまで、赤・白・スパークリングのワイン、パーティープラン3,980円、Special 6品4,980円、Premium 5,980円、2時間飲み放題2,200円。口コミ(2026年4月〜10月): パスタランチ1,500円から (焼き野菜のバーニャカウダ、前菜の盛り合わせ、3種のパスタ)、エビとバジルのジェノベーゼ、イカと海苔の和風ペペロンチーノ、ホタテのゴルゴンゾーラクリーム、鮮魚としそのジェノベーゼ、自家製の明太クリームのタリアテッレ1,980円、生ハムといちごのブッラータチーズ、カキと Kujo ねぎのガーリックオイル、海鮮のカルパッチョ、クワトロフォルマッジ、長芋のフライとトリュフ、シーザーサラダ、カルボナーラ、トリッパ、チーズケーキ、サングリア、サプライズのケーキ、ランチはひとりで営業、忙しい夜に水がもらえなかったという声。',
      confidence: 'medium', sources: [TB, R + 'B526067657/', R + 'B526684005/', R + 'B526717906/', R + 'B528644461/', R + 'B528700445/', R + 'B529655682/', R + 'B529828061/', R + 'B535003947/', R + 'B537328574/', R + 'B538195359/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter, pasta lunch chosen from three daily pastas (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市北区曾根崎新地1-9-15 GOTS永楽町2号館',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目9番15号 (go) 11m. osaka_takano_ya_kitashinchi (address_ja "大阪府大阪市北区曾根崎新地1-9-15") shares the lot, with its pin 12 m away, so the two do not stack and both stay precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B537328574/', R + 'B526684005/'],
    price_note: 'Courses from the Tabelog listing (tax included); lunch prices from April and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Pasta lunch with bagna cauda and starters', '¥1,500', 'Lunch', 'no', 'no', 'October 2026 ("from").', 'pasta_lunch'),
      it('', '', 'Homemade mentaiko cream tagliatelle (lunch)', '¥1,980', 'Lunch', 'no', 'no', 'April 2026.', 'mentaiko_pasta'),
      it('', '', 'Fried yam with truffle', '', 'Small plates', 'ask', 'ask', 'April and June 2026.', 'nagaimo_fry'),
      it('', '', 'Special course, six dishes', '¥4,980', 'Courses', 'no', 'no', 'Tabelog.', 'special_course'),
    ] }, {
    cuisine: '「安くて美味しい」がモットーの、前菜からパスタまでのイタリアン、赤・白・スパークリングのワイン (食べログ)・パスタランチは1,500円から、焼き野菜のバーニャカウダと前菜の盛り合わせ (ラタトゥイユ、ポテトサラダ、鴨のロースト、カルパッチョ、キッシュ、カキ) に、日替わり3種のパスタ、たとえばエビとバジルのジェノベーゼ、イカと海苔の和風ペペロンチーノ、ホタテのゴルゴンゾーラクリーム、鮮魚としそのジェノベーゼ (2026年10月)。自家製の明太クリームのタリアテッレ1,980円 (2026年4月)、プレミアムランチも・夜: 生ハムといちごとブッラータ、カキと Kujo ねぎのガーリックオイル、海鮮のカルパッチョ、クワトロフォルマッジ、長芋のフライとトリュフ、シーザーサラダ、カルボナーラ、トリッパ、チーズケーキ、サングリア (2026年4月〜9月)・コース: ピッツァとパスタのパーティープラン3,980円、6品の Special コース4,980円、Premium コース5,980円、2時間飲み放題2,200円 (食べログ、税込)',
    neighborhood: '曾根崎新地1-9-15、GOTS永楽町2号館。北新地駅から徒歩2分',
    gf_detail: '要確認。グルテンの情報なし。パスタ、ピッツァ、アヒージョのパン、長芋のフライ、キッシュ。バーニャカウダの野菜やカルパッチョはシンプルだが、グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。チーズ、クリーム、生ハム、魚介のイタリアンで、ランチの前菜にもカキや鴨のローストが入る。',
    notes: '[イタリアン・北新地、深夜までのイタリアンのカウンター] 北新地のタイルのカウンターの小さなイタリアンで、2024年から。平日は昼と、夜18時から朝5時まで開いていて、モットーは「安くて美味しい」。お得なのはパスタランチで、1,500円から、焼き野菜のバーニャカウダ、カキや鴨のローストが入ることもある前菜の盛り合わせ、日替わり3種のパスタ (自家製のタリアテッレのことも) がつく (2026年)。夜はワインを飲む客でカウンターが埋まり、生ハムとブッラータといちご、カキのガーリックオイル、長芋のフライとトリュフ、クワトロフォルマッジ、3,980円からのコースも。昼はひとりで作っているので少し待つことも。忙しい夜に水がもらえなかったという声も (2026年9月)。22時以降は深夜料金10%、夜は喫煙可。',
  });
}

// ================================================================ IAKU
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27130596/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '22:00']); const L = day(['12:00', '15:00']);
  put({
    id: 'osaka_iaku_kitashinchi', name: 'IAKU', category: 'OMNI',
    lat: 34.697479, lng: 135.496736, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. One course with a fillet katsu sandwich, brioche, tempura of conger eel, cold noodles and sauces; allergies or dislikes affecting two or more dishes may mean the booking is refused, and same-day requests cannot be met (Tabelog).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: one course of wagyu, seafood, caviar, lobster and dashi.',
    hours_raw: 'Dinner Tue, Wed, Fri from 18:00; lunch Thu and Sat from 12:00; closed Sunday and Monday, though sometimes open on Mondays; open on holidays that fall Tuesday to Saturday (Tabelog). The course listings give lunch 12:00–14:00 and dinner 18:00–23:30. Reservation only, by the day before; everyone starts together, enter from five minutes before, late arrivals are served at the same pace (Tabelog). Cancellation: 50% from three days before, 100% from the day before (Tabelog). Service fee ¥1,100 a head, including mineral water (Tabelog). Cards (VISA, Master, JCB, AMEX); no e-money or QR (Tabelog). Eight counter seats, whole-shop hire up to 10; non-smoking; children 10 and over who can eat the adult course, smaller children only with whole-shop hire (Tabelog). Opened 1 September 2022 (Tabelog).',
    hours: { 1: D, 2: D, 3: L, 4: D, 5: L }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '曽根崎新地1-3-30, room 606B on 6F of 北新地KOHDAビル — 3 min from Kitashinchi Stn exit 11-21 and from Nishi-Umeda Stn',
    cuisine: 'One course crossing French, Italian and Japanese technique, built on rare ingredients, with drinks pairings (Tabelog) · IAKU course of ten dishes ¥23,100 including service; with a Japanese-chestnut Basque cheesecake to take home ¥26,340; lunch course of seven of its dishes ¥13,200 (Tabelog, tax included) · autumn 2026 courses: the signature Kagoshima black-wagyu fillet katsu roll to open, bonito or bluefin tartare with caviar and a yurinchi-sauce jelly on brioche, chawanmushi of lotus root (Kadoma), surf clam and sea urchin, sweetfish-pâté bisque or vichyssoise, cold noodles with hamo or hamo tempura with sudachi, Akashi sawara or grouper with saffron sauce, fillet steak with summer truffle and daikoku shimeji, Shine Muscat with stracciatella or burrata, lobster and matsutake rice, peach compote with homemade strawberry ice cream, a French blend tea (August–October 2026) · wine pairing, including two reds for one dish (September 2026)',
    website: null, gmaps: gm('IAKU 北新地'), menu_url: null,
    notes: "[Innovative · Kitashinchi, an eight-seat cross-genre counter] An eight-seat counter on a sixth floor in Kitashinchi, opened in 2022 and named a Tabelog French WEST 100 in 2025, where one course mixes French, Italian and Japanese technique around big, rich ingredients; a September 2026 diner says it is produced by Yuka Hattori of U.KAI. Everyone starts together, after the cook shows the day's cuts of wagyu, matsutake and lobster. The course opens with its signature, a Kagoshima wagyu fillet katsu sandwich, then caviar tartare on brioche, a sea-urchin chawanmushi, cold noodles with hamo, fish in saffron sauce, truffled fillet steak and a clay-pot rice of lobster and matsutake (autumn 2026). Diners call the portions generous. Lunch is ¥13,200 and dinner ¥23,100, the dinner price including service; give allergies when booking, not on the day.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)', 'Producer: Yuka Hattori of U.KAI (per a September 2026 review)'], origin: null, background: 'Per the shop-maintained Tabelog listing: "beyond the boundaries of genre", dishes using techniques of French, Italian and Japanese cuisine; a dish of wild vegetables raw, boiled, grilled and fried; drinks pairings; Tabelog French WEST 100 2025; opened 1 September 2022. A September 2026 diner calls it "a casual innovative restaurant produced by Yuka Hattori from U.KAI".', philosophy: '"Beyond the boundaries of genre" (Tabelog).', specialty: 'Wagyu fillet katsu roll; lobster and matsutake rice.',
      anecdotes: [
        { text: '"Before the meal began, I was shown the large cuts of meat, matsutake mushrooms, and lobster that would be used in the course, which really whetted my appetite!" — September 2026, lunch with wine pairing.', source: R + 'B536957930/' },
        { text: '"For instance, two different red wines were paired with a single dish, showcasing a unique approach that is hard to find elsewhere." — September 2026.', source: R + 'B536957930/' },
        { text: '"We started with the classic Kagoshima black-haired Wagyu fillet katsu roll, which was so tender that I finished it in one bite." — September 2026, a second visit after two and a half years.', source: R + 'B480791995/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): IAKU、イノベーティブ・フレンチ・イタリアン、大阪市北区曽根崎新地1-3-30 北新地KOHDAビル6階606B号室、JR 北新地駅 (11-21出口) から徒歩3分、西梅田駅から3分、火・水・金18:00〜、木・土12:00〜、日・月休み (月曜は営業することも)、火〜土の祝日は営業、前日までの完全予約制、一斉スタート、キャンセル料 (3日前から50%、前日から100%)、サービス料1,100円 (ミネラルウォーター込み)、アレルギーや苦手な食材がコースの2品以上にかかる場合は予約を断ることも、当日のアレルギーの申し出には対応できない、カード可、電子マネー・QR 不可、カウンター8席、貸切10名まで、禁煙、10歳以上で大人と同じコースが食べられる子ども、2022年9月1日オープン、ジャンルにとらわれない料理、フレンチ・イタリアン・和食の技法、山菜を生・ゆで・焼き・揚げで、ドリンクペアリング、IAKU コース10品23,100円 (サービス料込み)、和栗のバスクチーズケーキの持ち帰りつき26,340円、ランチコース13,200円、食べログ フレンチ WEST 百名店 2025。口コミ(2026年8月〜10月): Kagoshima の黒毛和牛ヒレカツロール、カツオやマグロとキャビアのタルタルと Yurinchi ソースのジュレ、Kadoma のレンコンとホッキ貝とウニの茶碗蒸し、鮎のパテのビスク、ハモの冷麺、すだち、Akashi のサワラやハタとサフランソース、夏トリュフのヒレステーキ、Daikoku しめじ、シャインマスカットとストラチャテッラ、オマール海老と松茸の土鍋ごはん、桃のコンポートと自家製いちごアイス、フランスのお茶、ワインペアリング (1皿に赤2種)、U.KAI の Yuka Hattori がプロデュース、量が多い。',
      confidence: 'medium', sources: [TB, R + 'B480791995/', R + 'B534476854/', R + 'B535265280/', R + 'B535352006/', R + 'B536201330/', R + 'B536625351/', R + 'B536698089/', R + 'B536712189/', R + 'B536957930/', R + 'B537141933/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One course with a simultaneous start, reservation only (Tabelog). No English evidence found.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Tabelog listing: bookings may be declined if allergies or dislikes affect two or more course items; allergy requests on the day cannot be met.'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎新地1-3-30 北新地KOHDAビル6階606B号室',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目3番30号 (go) 23m; no other record within 25 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B536625351/'],
    price_note: 'Course prices from the Tabelog listing (tax included; dinner includes service); an October 2026 review matches the ¥13,200 lunch.', last_checked: TODAY, items: [
      it('', '', 'IAKU course, ten dishes (service included)', '¥23,100', 'Course', 'ask', 'no', 'Tabelog.', 'iaku_course'),
      it('', '', 'IAKU lunch course, seven dishes', '¥13,200', 'Course', 'ask', 'no', 'Tabelog; October 2026.', 'iaku_lunch'),
      it('', '', 'Wagyu fillet katsu roll (course opener)', '', 'Course', 'no', 'no', 'August–October 2026.', 'hire_katsu_roll'),
    ] }, {
    cuisine: 'フレンチ、イタリアン、和食の技法をまたぐコースひとつ、希少な食材とドリンクのペアリング (食べログ)・10品の IAKU コース23,100円 (サービス料込み)、和栗のバスクチーズケーキの持ち帰りつき26,340円、そのうち7品のランチコース13,200円 (食べログ、税込)・2026年秋のコース: はじめに看板の Kagoshima の黒毛和牛ヒレカツロール、ブリオッシュにのせたカツオやマグロとキャビアのタルタルと Yurinchi ソースのジュレ、Kadoma のレンコンとホッキ貝とウニの茶碗蒸し、鮎のパテのビスクやヴィシソワーズ、ハモの冷麺やハモの天ぷらとすだち、Akashi のサワラやハタのサフランソース、夏トリュフのヒレステーキとDaikoku しめじ、シャインマスカットとストラチャテッラやブッラータ、オマール海老と松茸のごはん、桃のコンポートと自家製いちごアイス、フランスのブレンドティー (2026年8月〜10月)・ワインペアリング、1皿に赤2種も (2026年9月)',
    neighborhood: '曽根崎新地1-3-30、北新地KOHDAビルの6階606B号室。北新地駅11-21出口と西梅田駅から徒歩3分',
    gf_detail: '予約時に要確認。グルテンの情報なし。コースにヒレカツサンド、ブリオッシュ、ハモの天ぷら、冷麺、ソースがある。アレルギーや苦手な食材がコースの2品以上にかかると予約を断ることがあり、当日の申し出には対応できない (食べログ)。',
    vegan_detail: 'ヴィーガンではありません。和牛、魚介、キャビア、オマール海老、だしのコースひとつ。',
    notes: '[イノベーティブ・北新地、8席のジャンルをこえたカウンター] 北新地のビルの6階にある8席のカウンターで、2022年に開き、2025年に食べログ フレンチ WEST 百名店。フレンチ、イタリアン、和食の技法を合わせ、大きく豪華な食材のコースをひとつ出す。2026年9月の口コミでは、U.KAI の Yuka Hattori のプロデュースだそう。全員一斉に始まり、最初にその日の和牛、松茸、オマール海老を見せてくれる。看板の Kagoshima の和牛ヒレカツサンドに始まり、ブリオッシュにのせたキャビアのタルタル、ウニの茶碗蒸し、ハモの冷麺、サフランソースの魚、トリュフのヒレステーキ、オマール海老と松茸の土鍋ごはん (2026年秋)。量が多いという声。ランチ13,200円、ディナー23,100円 (サービス料込み)。アレルギーは当日ではなく予約時に。',
  });
}

// ================================================================ たこ焼き酒場 ん
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27139038/'; const R = TB + 'dtlrvwlst/';
  const W = day(['18:00', '03:00']); const S = day(['18:00', '23:00']);
  put({
    id: 'osaka_takoyaki_sakaba_n_kitashinchi', name: 'たこ焼き酒場 ん (Takoyaki Sakaba N)', category: 'OMNI',
    lat: 34.697639, lng: 135.497914, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: takoyaki, okonomiyaki, negiyaki and akashiyaki are wheat-batter dishes; teppan meats and vegetables are also cooked on the shared griddle.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: takoyaki is octopus in a dashi batter; teppan dishes of beef, pork and seafood.',
    hours_raw: 'Mon–Fri 18:00–3:00 (last order 2:00); Sat 18:00–23:00 (last order 22:00); closed Sundays and holidays (Tabelog). Reservations accepted; whole-shop hire (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 14 seats: a counter of 6 and two tables of 4; smoking allowed (Tabelog). Third floor up a flight of stairs with a handrail (July 2024). Opened 10 October 2023 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '曽根崎新地1-5-31, 3F of JMビル — about 3 min from Kitashinchi Stn',
    cuisine: 'Takoyaki made with a rich dashi and teppan dishes of seasonal ingredients, with a large range of Japanese whisky at fair prices (Tabelog) · takoyaki, with salt among the options, and limited-time varieties (2024–26); an all-you-can-eat option where you make takoyaki yourself at a griddle on the table (October 2026) · okonomiyaki, buta-tama, negiyaki, akashiyaki (July 2024) · teppan: beef thigh, thick beef tongue, shrimp, scallop and asparagus, grilled vegetables (shiitake, manganji pepper, lotus root), dashimaki, garlic rice (2024–25) · a soft-boiled quail egg as the starter (2024–25)',
    website: null, gmaps: gm('たこ焼き酒場 ん 北新地'), menu_url: null,
    notes: "[Takoyaki · Kitashinchi, a takoyaki bar in an old snack bar] A small takoyaki and teppan bar up a flight of stairs in a Kitashinchi building, opened in October 2023 in what still looks like a retro snack bar, with sofa seats and takoyaki-shaped decor. Takoyaki made with a rich dashi come in several kinds, with salt among them and limited-time versions, alongside okonomiyaki, akashiyaki and teppan plates of beef tongue, seafood and vegetables, ending with garlic rice, and there is a cheap list of Japanese whisky. Regulars praise the soft-boiled quail-egg starter and a friendly owner; one October 2026 group cooked takoyaki at the table grill, all you can eat. Open until 3:00 on weekdays; smoking is allowed.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed) and staff'], origin: null, background: 'Per the shop-maintained Tabelog listing: takoyaki with a rich dashi and teppan dishes of seasonal ingredients, a large range of Japanese whisky, "a cozy retro interior open late into the night"; opened 10 October 2023. A November 2024 diner thought it had been a retro snack bar or lounge; a November 2025 diner calls the owner friendly.', philosophy: null, specialty: 'Takoyaki; teppan beef tongue.',
      anecdotes: [
        { text: '"Enjoying different types of takoyaki while chatting with friends is truly the best part of Osaka\'s B-class gourmet scene." — October 2026, with a friend from Tokyo; an all-you-can-eat option lets you cook takoyaki at the table.', source: R + 'B537246586/' },
        { text: '"The soft-boiled quail egg appetizer was incredibly delicious!!" — December 2025, a sixth stop on a business trip.', source: R + 'B519205122/' },
        { text: '"Inside, you can still feel the remnants of a snack bar or lounge, making it quite a unique space for a takoyaki izakaya." — November 2024.', source: R + 'B497421270/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): たこ焼き酒場 ん、たこ焼き・お好み焼き・居酒屋、大阪市北区曽根崎新地1-5-31 JMビル 3F、北新地駅から徒歩約3分、月〜金18:00〜翌3:00 (L.O.2:00)、土18:00〜23:00 (L.O.22:00)、日・祝休み、予約可、貸切可、カード可、電子マネー・QR 不可、14席 (カウンター6、4名のテーブル2)、喫煙可、2023年10月10日オープン、濃いだしのたこ焼き、季節の食材の鉄板焼き、手頃なジャパニーズウイスキー、レトロな隠れ家。口コミ(2024年7月〜2026年10月): たこ焼き (塩も)、期間限定のたこ焼き、テーブルで自分で焼くたこ焼きの食べ放題、お好み焼き、豚玉、ねぎ焼き、akashiyaki、牛ももとタンの鉄板焼き、エビとホタテとアスパラの炒め、焼き野菜 (しいたけ、Manganji のとうがらし、レンコン)、だし巻き、ガーリックライス、お通しの半熟うずら卵、スナックのような内装、3階まで階段、気さくな店主。',
      confidence: 'medium', sources: [TB, R + 'B489140553/', R + 'B489390880/', R + 'B494174684/', R + 'B497421270/', R + 'B501847449/', R + 'B517000692/', R + 'B519096619/', R + 'B519205122/', R + 'B534624557/', R + 'B537246586/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter and tables up a flight of stairs; smoking allowed (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市北区曽根崎新地1-5-31 JMビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目5番31号 (go) 4m. Same building as osaka_teppanyaki_hanaui_kitashinchi (address_ja "大阪府大阪市北区曽根崎新地1-5-31 JMビル B1F"), whose pin is about 5 m away, so this pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B537246586/'],
    price_note: 'No prices in the sources read.', last_checked: TODAY, items: [
      it('', '', 'Takoyaki (with salt, among others)', '', 'Takoyaki', 'no', 'no', '2024–26 reviews.', 'takoyaki'),
      it('', '', 'All-you-can-eat takoyaki, cooked yourself at the table', '', 'Takoyaki', 'no', 'no', 'October 2026.', 'takoyaki_tabehodai'),
      it('', '', 'Thick beef tongue on the teppan', '', 'Teppan', 'ask', 'no', 'November 2025.', 'gyutan'),
      it('', '', 'Garlic rice', '', 'Teppan', 'ask', 'no', 'November 2025.', 'garlic_rice'),
    ] }, {
    cuisine: '濃いだしのたこ焼きと、季節の食材の鉄板焼き、手頃なジャパニーズウイスキーがたくさん (食べログ)・たこ焼き (塩も)、期間限定のたこ焼きも (2024〜26年)。テーブルの焼き台で自分で焼くたこ焼きの食べ放題も (2026年10月)・お好み焼き、豚玉、ねぎ焼き、akashiyaki (2024年7月)・鉄板: 牛もも、厚切りの牛タン、エビとホタテとアスパラ、焼き野菜 (しいたけ、Manganji のとうがらし、レンコン)、だし巻き、ガーリックライス (2024〜25年)・お通しは半熟のうずら卵 (2024〜25年)',
    neighborhood: '曽根崎新地1-5-31、JMビルの3階。北新地駅から徒歩約3分',
    gf_detail: 'グルテンフリーではありません。たこ焼き、お好み焼き、ねぎ焼き、akashiyakiは小麦の生地。鉄板の肉や野菜も同じ鉄板で焼く。',
    vegan_detail: 'ヴィーガンではありません。たこ焼きはタコとだしの生地、鉄板焼きは牛肉、豚肉、魚介。',
    notes: '[たこ焼き・北新地、昔のスナックのたこ焼きバー] 北新地のビルの階段を上がった小さなたこ焼きと鉄板のバーで、2023年10月に開いた。今もレトロなスナックのような店内で、ソファー席とたこ焼きの形の飾り。濃いだしのたこ焼きは塩や期間限定の味もあり、お好み焼き、akashiyaki、牛タンや魚介や野菜の鉄板焼き、締めのガーリックライスも。ジャパニーズウイスキーが手頃に飲める。お通しの半熟うずら卵と気さくな店主が好評で、2026年10月にはテーブルの焼き台で自分でたこ焼きを焼く食べ放題を楽しんだグループも。平日は3時まで、喫煙可。',
  });
}

// ================================================================ なにわ天ぷら 維心
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27095310/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://ishin-ryo.com/';
  const D = ['18:00', '22:30'], L = ['12:00', '14:00'];
  put({
    id: 'osaka_naniwa_tempura_ishin_kitashinchi', name: 'なにわ天ぷら 維心 (Naniwa Tempura Ishin)', category: 'OMNI',
    lat: 34.697501, lng: 135.497197, cuisine_type: 'tempura',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a tempura counter; every course is battered and fried, with tempura bowls and tencha to finish.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood, beef and vegetable tempura from shared oil, egg-and-truffle rice, dashi.',
    hours_raw: 'Lunch Tue–Sat 12:00–14:00 (last order 13:30), course only, booked at least two days ahead (Tabelog; the official site says the day before); dinner Mon–Sat 18:00–22:30 (last order 22:00) per the official site, while Tabelog lists dinner on Monday only; closed Sundays and holidays (Tabelog; official site). Dinner for two or more from 18:00; online booking until 17:00 on the day, then by phone; full charge for same-day cancellation (Tabelog). Service charge 5% at dinner only (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay) and PayPay; no e-money (Tabelog). 13 seats: a counter of 7 and sunken-kotatsu private rooms for 4 to 7; non-smoking; sommelier (Tabelog). Opened 10 November 2016 (Tabelog).',
    hours: { 0: day(D), 1: day(L, D), 2: day(L, D), 3: day(L, D), 4: day(L, D), 5: day(L, D) }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '曽根崎新地1-3-36, 3F of 竹新ビル, on the narrow lane between Kitashinchi\'s main and upper streets near a florist — 2 min from Kitashinchi Stn',
    cuisine: 'Tempura of seasonal seafood and vegetables, Osaka produce among them, fried in rare cottonseed oil, with champagne chosen by a sommelier (Tabelog) · courses (Tabelog, tax included): short course of tempura and a rice dish ¥8,000; seasonal omakase of starters, eight tempura, a seasonal dish, a choice of rice (truffle tamago-kake-gohan, tendon, tencha or salt tendon) and dessert ¥12,000; premium course with shrimp, scallop, abalone, beef and caviar tempura and crab chawanmushi or fugu ¥15,000 · signature finish: truffle tamago-kake-gohan shaved at the table, or sea-urchin TKG (2026) · in 2026 reviews: live young sweetfish shown before frying, spring wild vegetables, asparagus, corn, sweet shrimp, foie gras sautéed then wrapped in beef and fried (September 2026), mini tendon · TV features in 2018 (official site)',
    website: SITE, gmaps: gm('なにわ天ぷら 維心 北新地'), menu_url: SITE,
    notes: "[Tempura · Kitashinchi, tempura and champagne] A tempura counter on a third floor down a narrow Kitashinchi lane, opened in 2016 and on Tabelog's Tempura 100 lists for 2022 and 2023, built on pairing tempura with champagne chosen by its sommelier. Seasonal seafood and vegetables, Osaka produce included, are fried in cottonseed oil; in spring and summer the chef shows you live young sweetfish before frying them. The finish everyone talks about is tamago-kake-gohan with truffle shaved over it at the counter, or with sea urchin. Courses run ¥8,000 at lunch to ¥15,000, with a 5% service charge at dinner only. One regular on a 31st visit singled out a foie gras wrapped in beef and fried (September 2026). There are also sunken-kotatsu private rooms.",
    chef_bio: { chef_name: '畑島 亮 (named on the official site; romaji not given)', roles: ['Name signed under the official site\'s greeting (role not stated)', 'Sommelier on staff (Tabelog)'], origin: null, background: 'Per the official site (ishin-ryo.com, read 2026-11-02): なにわ天ぷら 維心, champagne chosen by a sommelier to go with the world of Ishin; TV features in 2018 (モモコのOH！ソレ！み〜よ！, おはよう朝日です, よ〜いドン！). Per Tabelog: tempura of seasonal vegetables and seafood fried in rare cottonseed oil, Osaka ingredients, signature truffle tamago-kake-gohan, 10th anniversary, Tabelog Tempura 100 2022 and 2023; opened 10 November 2016.', philosophy: '"A new combination" of Osaka-sourced tempura and champagne (Tabelog).', specialty: 'Truffle tamago-kake-gohan; tempura with champagne.',
      anecdotes: [
        { text: '"The truffle egg over rice served at the end is always exceptional... I even want to pick up the truffles that fall outside the bowl when they are shaved." — February 2026.', source: R + 'B512354956/' },
        { text: '"To finish, we had the truffle egg over rice and the sea urchin egg over rice." — April 2026, the seasonal omakase; live young sweetfish were shown before frying.', source: R + 'B244800958/' },
        { text: '"The foie gras is first sautéed to a certain degree, then wrapped in beef and deep-fried at a high temperature." — September 2026, a 30th visit.', source: R + 'B236630206/' },
      ],
      japanese_sources_summary: '公式サイト: なにわ天ぷら 維心、大阪市北区曽根崎新地1-3-36 竹新ビル3階、ランチ12:00〜14:00 (前日までの予約)、ディナー18:00〜22:30、日・祝休み、ソムリエ厳選のシャンパンとともに維心の世界観を、畑島 亮、テレビ放映歴 (2018年: モモコのOH！ソレ！み〜よ！、おはよう朝日です、よ〜いドン！)。食べログ (店舗会員): 天ぷら、北新地駅から徒歩2分、北新地の本通りと上通りのあいだの細い道、花屋の近く、月18:00〜22:30、火〜土12:00〜14:00、日・祝休み、ディナーは2名から18時より、当日17時まではネット予約、それ以降は電話、当日キャンセルは全額、ディナーのみサービス料5%、ランチはコースのみ2日前までに予約、カード・PayPay 可、電子マネー不可、13席 (カウンター7、掘りごたつの個室)、禁煙、ソムリエ、2016年11月10日オープン、10周年、希少な綿実油で揚げる、名物はトリュフの卵かけごはん、ウニの卵かけごはん、シャンパンと天ぷらのペアリング、大阪の食材、食べログ 天ぷら 百名店 2022・2023、天ぷらショートコース8,000円、季節のおまかせ12,000円、上質な食材のコース15,000円。口コミ(2026年1月〜10月): 生きた稚鮎を見せてから揚げる、山菜、アスパラ、とうもろこし、甘エビ、牛で包んだフォアグラの天ぷら、トリュフの卵かけごはん、ウニの卵かけごはん、ミニ天丼、ソムリエおすすめのシャンパン、掘りごたつの個室、31回通う常連。',
      confidence: 'medium', sources: [TB, SITE, R + 'B236630206/', R + 'B244800958/', R + 'B317069336/', R + 'B512354956/', R + 'B521825941/', R + 'B525509847/', R + 'B530939311/', R + 'B533324494/', R + 'B534079999/', R + 'B537374116/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter tempura courses with a sommelier; book ahead for lunch (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎新地1-3-36 竹新ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目3番36号 (go) 11m; nearest other records osaka_le_comptoir_champagne_shokudo (1-3-37, 15 m) and osaka_sushi_sogoro_kitashinchi (1-3-32, 18 m), at different addresses; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B525509847/', R + 'B521825941/'],
    price_note: 'Course prices from the Tabelog listing (tax included; 5% service at dinner); 2026 reviews match ¥8,000 and ¥12,000.', last_checked: TODAY, items: [
      it('', '', 'Short tempura course', '¥8,000', 'Courses', 'no', 'no', 'Tabelog; June 2026.', 'short_course'),
      it('', '', 'Seasonal omakase course', '¥12,000', 'Courses', 'no', 'no', 'Tabelog; April 2026.', 'omakase'),
      it('', '', 'Premium-ingredient course', '¥15,000', 'Courses', 'no', 'no', 'Tabelog.', 'premium_course'),
      it('', '', 'Truffle tamago-kake-gohan (course finish)', '', 'Courses', 'ask', 'no', 'Tabelog; 2026.', 'truffle_tkg'),
    ] }, {
    cuisine: '大阪の食材も使う季節の魚介と野菜の天ぷらを、希少な綿実油で揚げ、ソムリエが選ぶシャンパンとともに (食べログ)・コース (食べログ、税込): 天ぷらとごはんのショートコース8,000円、前菜、天ぷら8種、季節の一品、選べるごはん (トリュフの卵かけごはん、天丼、天茶、塩天丼) とデザートの季節のおまかせ12,000円、エビ、ホタテ、アワビ、牛肉、キャビアの天ぷらとカニの茶碗蒸しかふぐの上質な食材のコース15,000円・名物の締め: カウンターでトリュフを削る卵かけごはん、またはウニの卵かけごはん (2026年)・2026年の口コミ: 揚げる前に見せる生きた稚鮎、春の山菜、アスパラ、とうもろこし、甘エビ、ソテーして牛で包んで揚げたフォアグラ (2026年9月)、ミニ天丼・2018年にテレビで紹介 (公式サイト)',
    neighborhood: '曽根崎新地1-3-36、竹新ビルの3階。北新地の本通りと上通りのあいだの細い道、花屋の近く。北新地駅から徒歩2分',
    gf_detail: 'グルテンフリーではありません。天ぷらのカウンターで、どのコースも衣をつけて揚げ、締めは天丼や天茶。',
    vegan_detail: 'ヴィーガンではありません。魚介、牛肉、野菜の天ぷらを同じ油で揚げ、卵かけごはんやだしもある。',
    notes: '[天ぷら・北新地、天ぷらとシャンパン] 北新地の細い道のビルの3階にある天ぷらのカウンターで、2016年に開き、2022年と2023年に食べログ 天ぷら 百名店。ソムリエが選ぶシャンパンと天ぷらを合わせるのが店の柱。季節の魚介と野菜、大阪の食材も綿実油で揚げ、春から夏は生きた稚鮎を見せてから揚げてくれる。だれもが話す締めは、カウンターでトリュフを削る卵かけごはん、またはウニの卵かけごはん。コースは昼の8,000円から15,000円まで、夜のみサービス料5%。31回通う常連は、牛で包んで揚げたフォアグラが印象に残ったそう (2026年9月)。掘りごたつの個室もある。',
  });
}

save();
