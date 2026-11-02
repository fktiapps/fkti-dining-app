// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first; worker osw1 (lane: Tabelog id mod 4 = 0), batch 9.
//   + イタリアン チャイナバル村塾 Italian Chainabaru Sonjuku (Italian and Chinese by a former hotel chef, by Doguyasuji, 2024)
//   + 難波 ちょうつがひ Choutsugahi (9th-floor Japanese with window pair seats over Namba, Operation Factory, 2024)
//   + 串カツ しろたや 道頓堀本店 Kushi Katsu Shirotaya (kushikatsu owned by the competitive eater Giant Shirata, 2009)
//   + 炭火焼き鳥 鶏尽 Sumibi Yakitori Torijin (Yamato-chicken yakitori, sister of Kamojin, open to 2 a.m.)
//   - skip 27121780 しじみ 炊き肉 くにき 難波店 and 27111772 しじみ 炊き肉 くにき: Kuniki chain of Sasaya Company, five shops
//     (Namba, Shinsaibashi, Higashi-Umeda, Hankyu Umeda, Nishi-Umeda; Tabelog remarks, sasaya-company.jp).
//   Lane: mod-4 = 0 ids in `queue.mjs osaka next notable 160` after batch 8: 27121780 (skip), 27139200, 27142384, 27041896,
//   27111772 (skip), 27105556.
//   Chain check: Sonjuku has one sister bar in Yotsubashi (Tabelog); ちょうつがひ is an Operation Factory restaurant like
//   osaka_kouroan_namba (b6; a reviewer calls this "the Nanba location"); Shirotaya has two shops (道頓堀本店, 南海通り店,
//   shirotaya.com); Torijin is one of four sister shops near Namba with Kamojin (osaka_sumibi_yakitori_kamojin_namba), kept on the
//   group-of-four precedent. None is in data/osaka.json (grep by name, romaji and address, 2026-11-01).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw1-9');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27121780', 'しじみ 炊き肉 くにき 難波店: Kuniki chain of Sasaya Company with five shops (Namba, Shinsaibashi, Higashi-Umeda, Hankyu Umeda, Nishi-Umeda per the Tabelog remarks; sasaya-company.jp).');
skip('27111772', 'しじみ 炊き肉 くにき: Kuniki chain of Sasaya Company with five shops (see 27121780).');

// ================================================================ イタリアン チャイナバル村塾
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27139200/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '24:00']); const WE = day(['12:00', '24:00']);
  put({
    id: 'osaka_sonjuku_namba', name: 'イタリアン チャイナバル村塾 (Italian Chainabaru Sonjuku)', category: 'OMNI',
    lat: 34.66358, lng: 135.503396, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Italian and Chinese dishes with pizza, spring rolls, shrimp tempura, fried chicken and soy-based sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu, foie gras, pork, shrimp and chicken dishes.',
    hours_raw: 'Mon–Fri 17:00–24:00; Sat, Sun and holidays 12:00–24:00 (weekend lunch since June 2026); closed over New Year (Tabelog). Reservations accepted; seating type and a time limit depend on how busy it is; one drink per person (Tabelog). Table charge ¥300 for à la carte, none with a course; menu prices before tax (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), PayPay and Rakuten Pay; no e-money (Tabelog). 46 seats: an 8-seat counter and a table for 6 on 1F, 32 at tables on 2F; private hire for 20–50; heated tobacco only in a designated area (Tabelog). Behind a noren in a back alley, easy to miss (October 2026). Opened 1 February 2024 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba-Sennichimae 14-18, 道具屋筋横丁 1F — 2 min from Nankai Namba Stn, 4 min from Namba (Midosuji Line)',
    cuisine: 'Italian and Chinese cooking by a former hotel chef, live at the counter (Tabelog) · domestic-beef hamburg steak Rossini style with foie gras ¥990 (limited, Tabelog); a 10 cm black-wagyu spring roll ¥490 each (Tabelog); prices before tax · dishes in 2026 reviews: shrimp chili, braised pork belly, shrimp and broccoli in leek-ginger sauce, octopus carpaccio, jellyfish, spicy gizzard in Shaoxing, cucumber and zha cai salad, roast beef and grilled camembert salad, shrimp tempura in sweet chili sauce with eggplant and mochi, keema-curry pizza with honey, Cantonese mapo tofu over rice, fried rice, shrimp mayonnaise, sweet-and-sour pork · all-you-can-drink course ¥4,980 (October 2026); a lunch course at weekends (October 2026) · "jabunomi" sparkling wine overflowing into a hinoki masu ¥500 (Tabelog); Shaoxing wine and wine',
    website: null, gmaps: gm('イタリアン チャイナバル村塾 難波'), menu_url: null,
    notes: "[Italian and Chinese · Namba-Sennichimae, a hotel chef's bar] A two-floor bar behind a noren in a back alley off Doguyasuji, where a former hotel chef cooks Italian and Chinese side by side at the counter, so a table can share keema-curry pizza with honey and Cantonese mapo tofu. The house draws are value: a domestic-beef hamburg Rossini style with foie gras for ¥990 and a fat black-wagyu spring roll for ¥490 (before tax), and sparkling wine poured until it overflows into a hinoki box for ¥500. Courses with all-you-can-drink were ¥4,980 in October 2026, and the staff surprised one table with an unrequested birthday plate. Busy even on weekdays, so book. Weekend lunch from noon.",
    chef_bio: { chef_name: null, roles: ['Former hotel chef (unnamed; Tabelog)'], origin: null, background: 'Shop-maintained Tabelog listing: authentic Chinese and Italian cooking by a chef formerly at a famous hotel, cooked live at the counter, with a semi-private second floor; a sister of a wa-French bar in Yotsubashi, which supplies the foie gras dishes. Opened 1 February 2024.', philosophy: null, specialty: 'Hamburg Rossini; wagyu spring roll; mapo tofu.',
      anecdotes: [
        { text: '"Although I hadn\'t mentioned it was a birthday celebration, the staff noticed and surprised us by serving the dessert on a birthday plate" — October 2026, a course.', source: R + 'B537343173/' },
        { text: '"I tried the limited menu item, Domestic Beef Hamburg Steak Rossini style. It was topped with foie gras, yet it was affordable and absolutely delicious!" — October 2026.', source: R + 'B537198337/' },
        { text: '"The entrance, exuding a calm Japanese atmosphere, left a strong impression." — October 2026.', source: R + 'B538446193/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): イタリアン チャイナバル村塾、イタリアン・中華・バル、大阪市中央区難波千日前14-18 道具屋筋横丁 1F、南海なんば駅から徒歩2分、月〜金17:00〜24:00、土・日・祝12:00〜24:00 (2026年6月から週末は昼から)、年末年始休み、予約可、ワンドリンク制、アラカルトのみお通し300円、価格は税抜、カード・PayPay・楽天ペイ可、46席 (1階カウンター8と6名のテーブル、2階テーブル32)、貸切20〜50名、加熱式たばこのみの喫煙スペース、2024年2月1日オープン。店の紹介 (英訳): 元有名ホテルのシェフの本格的な中華とイタリアン、カウンターでライブ感、2階は半個室、四ツ橋の和フレンチバーの姉妹店、国産牛ハンバーグのロッシーニ風990円、黒毛和牛の春巻490円、ひのきの升にあふれるスパークリングワイン500円。口コミ(2026年9月〜10月): エビチリ、豚の角煮、砂肝の紹興酒の辛い漬け、ローストビーフとカマンベールのサラダ、エビ天のチリソース、キーマカレーのピザとはちみつ、広東風の麻婆豆腐ご飯、チャーハン、エビマヨ、酢豚、飲み放題つきコース4,980円、頼んでいない誕生日のプレート、平日も満席、裏通りでわかりにくい。',
      confidence: 'medium', sources: [TB, R + 'B497139555/', R + 'B499775994/', R + 'B510555872/', R + 'B537094881/', R + 'B537198337/', R + 'B537343173/', R + 'B537351516/', R + 'B537518634/', R + 'B537634246/', R + 'B538446193/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A busy bar with counter and tables; courses and à la carte (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前14-18 道具屋筋横丁 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前14番18号 (go) 9m. Neighbours in data at other house numbers (14-13, 14-26, 14-3); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B499775994/'],
    price_note: 'Prices from the Tabelog listing (before tax) and an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Domestic-beef hamburg steak Rossini style (foie gras), limited', '¥990', 'Dishes', 'ask', 'no', 'Tabelog listing (before tax).', 'hamburg_rossini'),
      it('', '', 'Black-wagyu spring roll (10 cm), each', '¥490', 'Dishes', 'no', 'no', 'Tabelog listing (before tax).', 'wagyu_harumaki'),
      it('', '', 'Overflowing sparkling wine in a hinoki masu', '¥500', 'Drinks', '', '', 'Tabelog listing.', 'jabunomi_sparkling'),
      it('', '', 'Course with all-you-can-drink', '¥4,980', 'Courses', 'ask', 'no', 'October 2026 review.', 'nomihodai_course'),
    ] }, {
    cuisine: '元ホテルのシェフがカウンターで作るイタリアンと中華 (食べログ)・国産牛ハンバーグのロッシーニ風 (フォアグラ) 990円 (限定、食べログ)、10cmの黒毛和牛の春巻1本490円 (食べログ)、価格は税抜・2026年の口コミの料理: エビチリ、豚の角煮、エビとブロッコリーのねぎ生姜ソース、タコのカルパッチョ、くらげ、砂肝の紹興酒の辛い漬け、きゅうりとザーサイのサラダ、ローストビーフと焼きカマンベールのサラダ、エビとなすともちの天ぷらの甘辛チリソース、はちみつのキーマカレーのピザ、広東風の麻婆豆腐ご飯、チャーハン、エビマヨ、酢豚・飲み放題つきコース4,980円 (2026年10月)。週末はランチのコースも (2026年10月)・ひのきの升にあふれるスパークリングワイン500円 (食べログ)。紹興酒とワイン',
    neighborhood: '難波千日前14-18、道具屋筋横丁の1階。南海なんば駅から徒歩2分、地下鉄なんば駅から徒歩4分',
    gf_detail: '要確認。グルテンの情報なし。イタリアンと中華で、ピザ、春巻、エビの天ぷら、唐揚げ、醤油ベースのソースも。',
    vegan_detail: 'ヴィーガンではありません。和牛、フォアグラ、豚、エビ、鶏の料理。',
    notes: '[イタリアン・中華・難波千日前、元ホテルのシェフのバル] 道具屋筋わきの裏通り、のれんの奥にある2フロアのバルで、元ホテルのシェフがカウンターでイタリアンと中華を並べて作る。同じテーブルではちみつのキーマカレーのピザと広東風の麻婆豆腐を分け合える。名物はお得なもので、フォアグラのせの国産牛ハンバーグのロッシーニ風990円、太い黒毛和牛の春巻490円 (税抜)、ひのきの升にあふれるまで注ぐスパークリングワイン500円。2026年10月は飲み放題つきのコースが4,980円で、頼んでいないのに誕生日のプレートで祝ってくれたテーブルも。平日も混むので予約を。週末は昼12時から。',
  });
}

// ================================================================ 難波 ちょうつがひ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27142384/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.opefac.com/restaurant/n_choutsugai/';
  const H = day(['11:00', '15:30'], ['17:00', '23:00']);
  put({
    id: 'osaka_choutsugahi_namba', name: '難波 ちょうつがひ (Choutsugahi)', category: 'OMNI',
    lat: 34.664681, lng: 135.499276, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. Lunch boxes include tempura, fried oysters and miso dishes, and dinner courses sushi with soy sauce and hot pots in dashi.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Japanese cooking in dashi with fish, wagyu and seafood.',
    hours_raw: 'Daily 11:00–15:30 (last order 14:30) and 17:00–23:00 (food last order 22:00, drinks 22:30); phone enquiries 15:00–22:00 (Tabelog; official site). Reservations accepted, through TableCheck (official site); no same-day lunch bookings, and lunch fills from 11:00 (October 2026). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 54 seats, all paired side by side facing the windows; non-smoking (Tabelog). Rice and miso soup refills at lunch; ordering by QR code (October 2026). Opened 21 May 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nambanaka 1-6-8, 9F (top floor) of the Osaka Metroなんばビル — direct from Namba Stn exit 6, 2 min from Nankai Namba',
    cuisine: 'Seasonal Japanese cooking and red-vinegar sushi on a top floor with a night view, every seat a sofa for two facing the window (Tabelog; official site) · lunch box of one soup and several small dishes, with house fresh tofu and miso soup of Daigen miso, rice and miso soup refills (Tabelog; October 2026): the limited box (20 a day) of Saikyo-miso autumn salmon, tempura of autumn vegetables and sea bream with fried oysters, and seared Omi-beef sushi was ¥2,380 on weekdays and ¥2,480 at weekends (October 2026); a beef and fried-oyster lunch (October 2026) · dinner course (October 2026): salmon-roe and avocado tartare on a rice cracker, seared Omi-beef sushi, toro-taku hand roll, yellowtail and sea bream in golden dashi, rare-fried salmon, six-second grilled wagyu shabu-shabu, Omi roast beef over rice with maitake, and a birthday cake · anniversary courses with a whole cake (official site) · winter à la carte: winter yellowtail, milt, snow crab, fugu (official site) · twelve birthstone cocktails, one for each month, and Japanese-style sours (Tabelog)',
    website: SITE, gmaps: gm('難波 ちょうつがひ'), menu_url: SITE,
    notes: "[Japanese · Namba, a night view for two] A Japanese restaurant on the top floor of a Namba office tower, straight up from subway exit 6, where every seat is a sofa for two facing the windows over the city, built for dates and anniversaries; run by Operation Factory, like Kouroan nearby. Lunch is the popular slot and fills from 11:00: a box of small dishes, house-made fresh tofu and Daigen-miso soup with refills, with Saikyo-miso salmon, tempura and seared Omi-beef sushi as the mains (¥2,380 on weekdays in October 2026). In the evening, courses run from Omi-beef sushi and a toro-taku hand roll to fish in golden dashi and wagyu shabu-shabu grilled six seconds, with a cocktail for your birth month; anniversary courses come with a whole cake. Book the window row ahead; one diner found the reception curt (October 2026).",
    chef_bio: { chef_name: null, roles: ['Kitchen and service staff (unnamed)'], origin: null, background: 'Per the official site (Operation Factory): "a first for Namba, a space for two only floating in the night sky", pair sofas with a sense of privacy, Japanese cuisine as courses or à la carte, anniversary courses with a whole cake, bookings through TableCheck. Tabelog: red-vinegar sushi by artisans, a lunch of one soup and many dishes with fresh tofu of half-day shelf life and Daigen miso soup, twelve birthstone cocktails; opened 21 May 2024. Operation Factory also runs 鮨和食 紅炉庵 なんば (osaka_kouroan_namba); an October 2026 diner calls this "the Nanba location".', philosophy: null, specialty: 'Window pair seats; seared Omi-beef sushi; Japanese lunch box.',
      anecdotes: [
        { text: '"I made a reservation online the night before, so the front row by the window was fully booked. However, even sitting in the second row, we could still enjoy the beautiful night view." — October 2026, a Sunday date.', source: R + 'B536864934/' },
        { text: '"The miso soup, rich in dashi flavor, was so good that I had a second serving from the small bowl." — October 2026, beef and fried-oyster lunch.', source: R + 'B537344574/' },
        { text: '"The birthday cake was cut into two pieces by the staff, and it was fluffy with plenty of cream" — October 2026, a dinner course.', source: R + 'B537792973/' },
      ],
      japanese_sources_summary: '公式サイト (Operation Factory): 難波 ちょうつがひ、ランチ11:00〜15:30 (L.O.14:30)、ディナー17:00〜23:00 (L.O.22:00)、大阪市プレミアム商品券対応、「なんば初、夜空に浮かぶ2名専用空間」、個室感のあるペアソファー、日本料理をコースや単品で、「難波の夜景を二人占めする、大人の記念日和食」、ホールケーキつきの記念日コース、11・12月のメニューは寒鰤・白子・ずわい蟹・ふぐ、予約は TableCheck。食べログ (店舗会員): 大阪市浪速区難波中1-6-8 Osaka Metroなんばビル 9F、地下鉄なんば駅6番出口直結、毎日営業、電話は15時〜22時、カード・PayPay 可、54席、全席が窓に向いたペア席、禁煙、2024年5月21日オープン、職人の赤酢の寿司、一汁多菜のランチと半日しか日持ちしない生豆腐と Daigen の味噌のみそ汁、誕生石の12種のカクテル。口コミ(2026年10月): 1日20食の限定のお弁当 (Saikyo 味噌の秋鮭の焼き物、秋野菜と鯛の天ぷらとカキフライ、Omi の牛の炙り寿司) 平日2,380円・土日祝2,480円、ご飯とみそ汁のおかわり、QR で注文、当日のランチ予約は不可、窓ぎわの席は早めの予約を、Omi の牛の炙り寿司、トロたく手巻き、黄金だしの鍋、6秒の和牛の焼きしゃぶ、記念日のケーキ、受付の対応が冷たかったという声。',
      confidence: 'medium', sources: [TB, SITE, R + 'B536864934/', R + 'B536885644/', R + 'B536942431/', R + 'B537101898/', R + 'B537196152/', R + 'B537344574/', R + 'B537409669/', R + 'B537792973/', R + 'B538054898/', R + 'B538085882/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR-code ordering; set lunches and courses booked online (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中1-6-8 Osaka Metroなんばビル 9F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and operator site with winter 2026 menus; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中一丁目6番8号 (go) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538054898/', R + 'B537101898/'],
    price_note: 'Lunch-box prices from October 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('', '', 'Limited lunch box: one soup, seven dishes, three mains (weekdays; ¥2,480 at weekends)', '¥2,380', 'Lunch', 'no', 'no', 'October 2026 reviews.', 'kuutai_lunch'),
      it('', '', 'Seared Omi-beef sushi', '', 'Courses', 'ask', 'no', 'October 2026 reviews.', 'omi_aburi_sushi'),
      it('', '', 'Birthstone cocktail', '', 'Drinks', '', '', 'Tabelog listing.', 'birthstone_cocktail'),
    ] }, {
    cuisine: '夜景の見える最上階の季節の日本料理と赤酢の寿司、全席が窓に向いた2人用のソファ (食べログ、公式サイト)・一汁多菜のお弁当、自家製の生豆腐と Daigen の味噌のみそ汁、ご飯とみそ汁はおかわりできる (食べログ、2026年10月): Saikyo 味噌の秋鮭の焼き物、秋野菜と鯛の天ぷらとカキフライ、Omi の牛の炙り寿司がメインの1日20食の限定のお弁当は平日2,380円、土日祝2,480円 (2026年10月)。牛肉とカキフライのランチも (2026年10月)・夜のコース (2026年10月): おせんべいにのせたいくらとアボカドのタルタル、Omi の牛の炙り寿司、トロたく手巻き、黄金だしのぶりと鯛の鍋、秋鮭のレアフライ、6秒の和牛の焼きしゃぶ、Omi の牛のローストビーフと舞茸のバター醤油ご飯、誕生日のケーキ・ホールケーキつきの記念日コース (公式サイト)・冬のアラカルト: 寒鰤、白子、ずわい蟹、ふぐ (公式サイト)・誕生石の12種のカクテルと和風のサワー (食べログ)',
    neighborhood: '難波中1-6-8、Osaka Metroなんばビルの9階 (最上階)。地下鉄なんば駅6番出口直結、南海なんば駅から徒歩2分',
    gf_detail: '予約時に要確認。グルテンの情報なし。お弁当には天ぷら、カキフライ、味噌の料理、夜のコースには醤油で食べる寿司やだしの鍋が入る。',
    vegan_detail: 'ヴィーガンではありません。だしを使い、魚、和牛、魚介の日本料理。',
    notes: '[日本料理・なんば、2人で見る夜景] 地下鉄の6番出口から直結のなんばのオフィスビルの最上階にある日本料理の店で、全席が窓に向いた2人用のソファ。デートや記念日のための店で、近くの紅炉庵と同じ Operation Factory の運営。人気は11時から埋まるランチで、小鉢の並ぶお弁当に自家製の生豆腐、Daigen の味噌のみそ汁はおかわりでき、メインは Saikyo 味噌の秋鮭の焼き物、天ぷら、Omi の牛の炙り寿司 (2026年10月は平日2,380円)。夜は Omi の牛の寿司とトロたく手巻きから、黄金だしの魚、6秒焼く和牛の焼きしゃぶまでのコースで、生まれ月のカクテルも。記念日コースにはホールケーキ。窓ぎわの席は早めに予約を。受付の対応が冷たかったという人も (2026年10月)。',
  });
}

// ================================================================ 串カツ しろたや 道頓堀本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27041896/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.shirotaya.com/';
  const H = day(['12:00', '16:00'], ['17:00', '23:00']);
  put({
    id: 'osaka_kushikatsu_shirotaya_dotonbori', name: '串カツ しろたや 道頓堀本店 (Kushi Katsu Shirotaya)', category: 'OMNI',
    lat: 34.668473, lng: 135.502547, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: kushikatsu in a fine wheat-crumb batter, shared sauce, and fried desserts; no gluten-free option described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fried in a blend of animal and vegetable oil (Tabelog), with beef, pork and seafood skewers.',
    hours_raw: 'Daily 12:00–16:00 (last order 15:30) and 17:00–23:00 (food last order 22:00, drinks 22:30); closed on some days (Tabelog). Reservations accepted, but online seats are limited at weekends and none are taken on very busy days such as long weekends; a queue forms before opening (Tabelog; September–October 2026). Cards, IC cards and other e-money, and QR payments including PayPay, Alipay and WeChat Pay (Tabelog). 42 seats, mostly counter around an open kitchen, plus tables; non-smoking; English and photo menus; children and strollers welcome (Tabelog). Opened 19 July 2009 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Dotonbori 1-7-21, 3F of the 中座くいだおれビル on Dotonbori — 5 min from Namba or Nippombashi',
    cuisine: 'Osaka kushikatsu in a light batter "like powder snow", fried in a blend of animal and vegetable oil, with a house sauce for one dip (Tabelog); a reviewer notes rice oil (September 2026) · classic and creative skewers: beef, plump shrimp, lotus root, onion, myoga, eggplant, asparagus, quail eggs, mochi, scallops, a "giant takoyaki" skewer, and a Yukimi Daifuku ice-cream skewer for dessert (Tabelog; 2026 reviews) · dote-yaki, kimchi, Awaji octopus kara-age, Shirotaya and Healthy sets (2026 reviews) · "Shirotaya Ultimate Course" ¥4,500, all you can eat and drink of most of the menu (Tabelog) · beer in a giant mug, a "Giant Sour" (Tabelog; September 2026) · bottles of the sauce to take home (official site)',
    website: SITE, gmaps: gm('串カツ しろたや 道頓堀本店'), menu_url: null,
    notes: "[Kushikatsu · Dotonbori, Giant Shirata's place] A bright third-floor kushikatsu counter in the Kuidaore building on Dotonbori, owned by the competitive eater Giant Shirata, 195 cm tall per the listing, who is often there in person greeting guests and posing for photos (September–October 2026). The batter is fine and light 'like powder snow', the skewers are large (lotus root, myoga, asparagus, quail eggs, plump shrimp), and the house sauce is the one-dip kind; finish with a fried Yukimi Daifuku. The ¥4,500 Ultimate Course is all you can eat and drink of most of the menu, and the beer comes in a giant mug. Diners call it relaxed and tourist-friendly; one found the beef thin. Queues form before 12:00 and 17:00; English menu.",
    chef_bio: { chef_name: null, roles: ['Owner: Giant Shirata, competitive eater (Tabelog)', 'Kitchen and counter staff (unnamed)'], origin: null, background: 'Shop-maintained Tabelog listing: owned by the food fighter "Giant Shirata"; the owner "stands at 195cm tall"; batter like powdered snow, a carefully blended oil and a sauce that brings out each ingredient; opened 19 July 2009. The official site lists two shops, 道頓堀本店 and 南海通り店, and sells the sauce in souvenir sizes. Diners in September and October 2026 saw the owner serving customers and posing for photos; one remembered watching the owner on TV as a child.', philosophy: null, specialty: 'Kushikatsu with a powder-snow batter; Yukimi Daifuku kushikatsu.',
      anecdotes: [
        { text: '"To my surprise, Giant Shirata, who I used to see on TV as a child, was serving customers!" — September 2026.', source: R + 'B536043880/' },
        { text: '"In the end, the Yukimi Daifuku Kushi Katsu was so good that I ended up having two!" — October 2026.', source: R + 'B536723514/' },
        { text: '"The large kushi katsu is fried to perfection using rice oil. Especially, the sauce here is delicious." — September 2026.', source: R + 'B537742505/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 串カツ しろたや 道頓堀本店、串揚げ・居酒屋、大阪市中央区道頓堀1-7-21 中座くいだおれビル 3F、毎日12:00〜16:00 (L.O.15:30)・17:00〜23:00 (料理L.O.22:00)、不定休、予約可 (週末はネットの枠が少ない、連休などの混雑日は予約不可)、カード・電子マネー・QR可、42席 (カウンター多め、テーブル)、貸切20〜50名、禁煙、英語メニュー、写真つきメニュー、子ども・ベビーカー可、2009年7月19日オープン。店の紹介 (英訳): フードファイターの Giant Shirata の店、粉雪のような秘伝の衣、動物性と植物性をブレンドした油、二度づけ禁止のソース、Giant Takoyaki や Yukimi Daifuku の串カツ、ほぼ全品食べ飲み放題の「Shirotaya Ultimate Course」4,500円、ジャンボジョッキのビール、身長195cmのオーナー。公式サイト: 道頓堀本店と南海通り店、お土産サイズのソース。口コミ(2026年9月〜10月): オーナーが店に立っていて写真も、開店前に10〜15人の行列、大きな串、れんこん、みょうが、なす、アスパラ、うずら、ぷりぷりのエビ、どて焼き、キムチ、Awaji のタコの唐揚げ、米油で揚げるという声、牛串が薄いという声、観光客にもやさしい雰囲気。',
      confidence: 'medium', sources: [TB, SITE, R + 'B535332473/', R + 'B536043880/', R + 'B536277650/', R + 'B536456653/', R + 'B536723514/', R + 'B537610722/', R + 'B537742505/', R + 'B537923146/', R + 'B538104397/', R + 'B538495187/'] },
    cultural_comfort: { level: 'english', note: 'English and photo menus (Tabelog); diners call it tourist-friendly (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市中央区道頓堀1-7-21 中座くいだおれビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀一丁目7番21号 (go) 24m. PIVOT BASE (osaka_pivot_base_dotonbori) is on 1F of the same building (中座くいだおれビル) with a pin about 16 m away, so this pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Course price from the Tabelog listing; no per-skewer prices in the sources read.', last_checked: TODAY, items: [
      it('', '', 'Shirotaya Ultimate Course (all you can eat and drink)', '¥4,500', 'Courses', 'no', 'no', 'Tabelog listing.', 'kiwami_course'),
      it('', '', 'Yukimi Daifuku kushikatsu (dessert)', '', 'Skewers', 'no', 'no', 'Tabelog; October 2026.', 'yukimi_daifuku_kushi'),
      it('', '', 'Lotus root skewer', '', 'Skewers', 'no', 'no', 'September and October 2026 reviews.', 'renkon_kushi'),
    ] }, {
    cuisine: '粉雪のような軽い衣を、動物性と植物性をブレンドした油で揚げる大阪の串カツ、ソースは二度づけ禁止 (食べログ)。米油で揚げるという口コミも (2026年9月)・定番と創作の串: 牛、ぷりぷりのエビ、れんこん、玉ねぎ、みょうが、なす、アスパラ、うずらの卵、もち、ホタテ、「Giant Takoyaki」の串、デザートは Yukimi Daifuku の串カツ (食べログ、2026年の口コミ)・どて焼き、キムチ、Awaji のタコの唐揚げ、Shirotaya Set と Healthy Set (2026年の口コミ)・ほぼ全品の食べ飲み放題「Shirotaya Ultimate Course」4,500円 (食べログ)・ジャンボジョッキのビール、「Giant Sour」(食べログ、2026年9月)・持ち帰りのソースのボトル (公式サイト)',
    neighborhood: '道頓堀1-7-21、道頓堀の中座くいだおれビルの3階。なんば駅、日本橋駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の細かい衣の串カツ、共用のソース、揚げたデザートも。グルテンフリーの選択肢の説明はない。',
    vegan_detail: 'ヴィーガンではありません。動物性と植物性をブレンドした油で揚げ (食べログ)、牛、豚、魚介の串も。',
    notes: '[串カツ・道頓堀、Giant Shirata の店] 道頓堀の中座くいだおれビルの3階にある明るい串カツのカウンターで、オーナーはフードファイターの Giant Shirata (食べログによると身長195cm)。店によく立っていて、客を迎えて写真にも応じてくれる (2026年9月〜10月)。衣は「粉雪のよう」に細かく軽く、串は大きめ (れんこん、みょうが、アスパラ、うずら、ぷりぷりのエビ)、ソースは二度づけ禁止。締めは揚げた Yukimi Daifuku で。4,500円の Ultimate Course はほぼ全品が食べ飲み放題で、ビールはジャンボジョッキ。気軽で観光客にもやさしいという声、牛串が薄いという人も。12時と17時の開店前には行列。英語メニューあり。',
  });
}

// ================================================================ 炭火焼き鳥 鶏尽
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27105556/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '02:00']); const WE = day(['12:00', '02:00']);
  put({
    id: 'osaka_sumibi_yakitori_torijin_namba', name: '炭火焼き鳥 鶏尽 (Sumibi Yakitori Torijin)', category: 'OMNI',
    lat: 34.665421, lng: 135.504563, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Skewers are seasoned with sauce, salt, olive oil or salted kelp; chicken sashimi comes with sweet soy sauce, and the menu has kara-age and oyakodon.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken-only menu (Tabelog), though Tabelog lists vegetarian options and seasonal grilled vegetables.',
    hours_raw: 'Mon–Fri and the days before and after holidays 17:00–02:00; Sat, Sun and holidays 12:00–02:00; last order 01:30; open year-round (Tabelog). Reservations by phone from 15:00 (Tabelog); a same-day booking at 16:00 worked in August 2026. Table charge ¥385 (Tabelog). Cards, IC cards and other e-money, and QR payments including PayPay, Alipay and WeChat Pay (Tabelog). 60 seats over two floors, a counter and private rooms for 2, 4, 6 and 10, with tatami; non-smoking, ashtrays outside; English, traditional and simplified Chinese and Korean menus (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba-Sennichimae 2-21, south of the Nankai-dori arcade — 3 min from Kintetsu Nippombashi or Namba (Midosuji Line)',
    cuisine: 'Chicken only, no beef or pork: yakitori of Nara\'s Yamato chicken over Kishu binchotan, 21 cuts each grilled and seasoned its own way, with sauce, salt, olive oil or salted kelp (Tabelog) · assorted Yamato chicken sashimi of five cuts (gizzard, breast, heart, liver with sesame oil, tenderloin) with sweet soy sauce and wasabi, ¥1,380 (October 2026; ¥1,518 in another October 2026 review) · skewers: special tsukune ¥350, back liver ¥340, liver ¥300, bonjiri ¥300 (October 2026) · grilled cheese from Yoshida Farm in Okayama wrapped in nori ¥780, kara-age with grated daikon and ponzu ¥780 (October 2026) · zaru tofu with olive oil and salt, yuba-wrapped century egg (August 2026) · "torofuwa" oyakodon of grilled thigh under meringue-light egg in bonito-kelp dashi (Tabelog) · seasonal grilled vegetables (Tabelog) · sake such as Kirakucho (August 2026) · table charge ¥385',
    website: null, gmaps: gm('炭火焼き鳥 鶏尽 難波'), menu_url: null,
    notes: "[Yakitori · Sennichimae, chicken only until 2 a.m.] A two-floor yakitori house south of the Nankai-dori arcade that serves chicken and nothing else: Nara's Yamato chicken grilled over Kishu binchotan in 21 cuts, each with its own seasoning, sometimes olive oil or salted kelp instead of sauce. Start with the five-cut chicken sashimi (raw chicken is served here), then the special tsukune (¥350) and skewers of back liver and bonjiri for around ¥300, and finish with the fluffy 'torofuwa' oyakodon. It belongs to the same small group as Kamojin around the corner, opens at noon at weekends, and stays open until 2 a.m. nightly. Most 2026 diners found it juicy and good value; one solo diner thought it average (September 2026). Menus in English, Chinese and Korean.",
    chef_bio: { chef_name: null, roles: ['Grill staff (unnamed)'], origin: null, background: 'Shop-maintained Tabelog listing: chicken-only cooking that explores each part, Yamato chicken from Nara over Kishu binchotan of ubame oak, 21 kinds of yakitori; sister shops nearby: Kamojin (osaka_sumibi_yakitori_kamojin_namba in data), Ojijin and Sumiyaki Shoten Yo Namba, the group\'s first shop.', philosophy: '"Seriously, carefully, and slowly" over charcoal (Tabelog).', specialty: 'Yamato chicken yakitori; chicken sashimi; torofuwa oyakodon.',
      anecdotes: [
        { text: '"The Special Tsukune (JPY 350) was absolutely exquisite, and the skewers of back liver (JPY 340), liver (JPY 300), and bonjiri (JPY 300) were all incredibly tasty." — October 2026.', source: R + 'B538193043/' },
        { text: '"I expected the century egg to be simply wrapped in yuba, but it was rolled up with various ingredients like daikon, Kujo green onions, and pickled vegetables" — August 2026, solo at the counter.', source: R + 'B534337308/' },
        { text: '"Each cut was completely free of any odor, fresh, and I was able to savor the unique textures and flavors with salt and condiments." — October 2026, the chicken sashimi.', source: R + 'B537889349/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 炭火焼き鳥 鶏尽、焼き鳥・居酒屋、大阪市中央区難波千日前2-21、南海通り商店街の南、近鉄日本橋駅から徒歩3分、月〜金・祝前日・祝後日17:00〜翌2:00、土・日・祝12:00〜翌2:00 (L.O.1:30)、年中無休、予約の電話は15時から、先付け385円 (税込)、カード・電子マネー・QR可、60席 (1・2階)、カウンター、2・4・6・10名の個室、座敷、禁煙 (店の外に灰皿)、英語・中国語 (繁体字・簡体字)・韓国語のメニュー、ベジタリアンメニューあり、姉妹店に 鴨尽、Ojijin、Sumiyaki Shoten Yo Namba。店の紹介 (英訳): Nara の Yamato の鶏を Kishu binchotan で、焼き鳥は全21種、部位ごとに焼き方と味つけ、オリーブオイルや塩昆布も、牛と豚はなく鶏だけ、名物の Torofuwa oyakodon (かつおと昆布のだし)。口コミ(2026年8月〜10月): Yamato の鶏の刺身5種盛り1,380円 (別の口コミでは1,518円)、特製つくね350円、背肝340円、レバー300円、bonjiri 300円、Okayama の Yoshida Farm のチーズの焼き物780円、唐揚げのおろしポン酢780円、zaru 豆腐、ピータンの湯葉巻き、お通し、ジューシーな焼き鳥、普通だったという声。',
      confidence: 'medium', sources: [TB, R + 'B534337308/', R + 'B534534067/', R + 'B534916687/', R + 'B536441751/', R + 'B536958186/', R + 'B537889349/', R + 'B538055321/', R + 'B538171893/', R + 'B538193043/'] },
    cultural_comfort: { level: 'english', note: 'Menus in English, Chinese and Korean (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前2-21',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前2番21号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538193043/', R + 'B538171893/'],
    price_note: 'Prices from October 2026 reviews; the sashimi platter is ¥1,380 in one and ¥1,518 in the other (likely before and after tax).', last_checked: TODAY, items: [
      it('', '', 'Yamato chicken sashimi, five cuts (raw)', '¥1,380', 'Chicken', 'ask', 'no', 'October 2026 reviews.', 'torisashi_5'),
      it('', '', 'Special tsukune', '¥350', 'Skewers', 'ask', 'no', 'October 2026 review.', 'tokusei_tsukune'),
      it('', '', 'Bonjiri skewer', '¥300', 'Skewers', 'ask', 'no', 'October 2026 review.', 'bonjiri'),
      it('', '', 'Kara-age with grated daikon and ponzu', '¥780', 'Dishes', 'no', 'no', 'October 2026 review.', 'karaage_oroshi'),
    ] }, {
    cuisine: '牛も豚もない鶏だけのメニュー: Nara の Yamato の鶏を Kishu binchotan で焼く焼き鳥は21種、部位ごとに焼き方と味つけを変え、タレや塩のほかオリーブオイルや塩昆布も (食べログ)・Yamato の鶏の刺身5種盛り (砂肝、むね、ハツ、ごま油のレバー、ささみ) を甘い醤油とわさびで、1,380円 (2026年10月。別の10月の口コミでは1,518円)・串: 特製つくね350円、背肝340円、レバー300円、bonjiri 300円 (2026年10月)・Okayama の Yoshida Farm のチーズをのりで巻いた焼き物780円、唐揚げのおろしポン酢780円 (2026年10月)・オリーブオイルと塩の zaru 豆腐、ピータンの湯葉巻き (2026年8月)・焼いたももをメレンゲのようにふわふわの卵でとじ、かつおと昆布のだしで仕上げる「Torofuwa oyakodon」(食べログ)・季節の焼き野菜 (食べログ)・Kirakucho などの日本酒 (2026年8月)・先付け385円',
    neighborhood: '難波千日前2-21、南海通り商店街の南。近鉄日本橋駅、地下鉄なんば駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。串はタレ、塩、オリーブオイル、塩昆布で味つけし、鶏の刺身には甘い醤油、メニューには唐揚げや親子丼も。',
    vegan_detail: 'ヴィーガンではありません。鶏だけのメニュー (食べログ)。食べログにはベジタリアンメニューありとあり、季節の焼き野菜もある。',
    notes: '[焼き鳥・千日前、夜2時まで鶏だけ] 南海通り商店街の南の2フロアの焼き鳥の店で、出すのは鶏だけ。Nara の Yamato の鶏を Kishu binchotan で21の部位に分けて焼き、それぞれ味つけを変えて、タレの代わりにオリーブオイルや塩昆布のことも。まずは5種の鶏の刺身 (生の鶏肉を出す店)、それから特製つくね (350円)、300円前後の背肝や bonjiri、締めはふわふわの「Torofuwa oyakodon」。近くの鴨尽と同じ小さなグループの店で、週末は昼12時から、毎晩夜2時まで。2026年の口コミではジューシーでお得という声が多く、一人で来た人は普通だったそう (2026年9月)。英語、中国語、韓国語のメニューあり。',
  });
}

save();
