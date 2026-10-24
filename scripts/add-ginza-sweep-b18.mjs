// Ginza Station half-mile sweep (805 m), batch 18 — mom-and-pop discovery: heritage yōshoku. Researched 2026-10-24.
//   + キッチン大正軒 (butcher-run set-meal counter in the Kōtsū Kaikan; owner Takahashi Fusa per Mynavi 2017 → MOM_AND_POP)
//   + 南蛮 銀圓亭 (Carioca Co., a family company since 1933, 3rd-generation president Hoshihara Takashi; 5 shops → OMNI)
//   + 銀之塔 (stew and gratin only since 1955, in a converted storehouse) · レストランあづま (yōshoku since 1946)
// Discovery: Tabelog /en/ yoshoku + soba area lists (A130101/02/03) crawled with geo (scratchpad mp_cache.jsonl; 433 in
// radius, 79 yōshoku/soba not in the app). No named owner found for 銀之塔, あづま, みかわや, 早川 → not mom-and-pop.
// Sources: Mynavi (2017), GINZA OFFICIAL interview (2015.09), macaroni (2023), shop sites, Tabelog /en/ + 2026 reviews.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);

// ================================================================ キッチン大正軒
{
  const MY = 'https://news.mynavi.jp/article/20171110-taisyoken/';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130102/13054085/'; const R = TB + 'dtlrvwlst/';
  const ld = day(['11:00', '14:30'], ['17:30', '20:00']);
  put({
    id: 'tokyo_kitchen_taishoken_yurakucho', name: 'キッチン大正軒 (Kitchen Taishōken)', category: 'MOM_AND_POP',
    lat: 35.675186, lng: 139.764341,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. A fry counter: tonkatsu, menchi, ham cutlet and sasami fried in fresh breadcrumbs (wheat), ginger pork in a soy-based tare, and Worcestershire and soy sauce on the table. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. Meat-led set meals from a butcher-run kitchen: ginger pork, hamburg, menchi katsu, ham cutlet, beef cutlet, plus fried shrimp and horse mackerel.',
    hours_raw: 'Mon, Tue, Thu, Fri 11:00–14:30 and 17:30–20:00; Wed dinner only 17:30–20:00; Sat 11:00–15:00; closed Sundays and holidays. Dinner is irregular, so phone ahead (Tabelog). Cash only; you order and pay while queueing.',
    hours: { 0: ld, 1: ld, 2: day(['17:30', '20:00']), 3: ld, 4: ld, 5: day(['11:00', '15:00']) }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Yūrakuchō 2-chōme, Tokyo Kōtsū Kaikan B1F side alley — by Yūrakuchō Stn',
    cuisine: 'Butcher-run yōshoku set meals · ginger pork, hamburg and fries in any combination', cuisine_type: 'yoshoku',
    website: null, gmaps: gm('キッチン大正軒 東京交通会館'), menu_url: null,
    notes: "[Mom & Pop · butcher's set meals] A thirteen-seat counter in the basement food alley of the Tokyo Kōtsū Kaikan (built 1963), run by a butcher's business and opened about forty years before 2017. Mynavi's 2017 feature met the owner, Takahashi Fusa, who serves the room herself. Tonkatsu came first; about 2007 the menu was reworked into combination sets: ginger pork cut from the same domestic loin as the tonkatsu, hamburg, menchi katsu, beef cutlet, scotch egg, sasami, aji fry and fried shrimp, any two together. Add-on fries cost a few hundred yen, and a ham cutlet was ¥100 in 2017. In 2026 sets run about ¥1,200–1,300, there are chairs outside for the queue, and staff take your order and cash in line, so food arrives as you sit. Lunch sells out of hamburg by mid-afternoon.",
    chef_bio: {
      chef_name: '高橋扶佐 (Takahashi Fusa, owner — as of 2017)', roles: ['owner'],
      origin: 'Tokyo Kōtsū Kaikan B1F; opened about 40 years before 2017 as a butcher\'s restaurant',
      background: 'Mynavi (November 2017) describes a long-running shop run directly by a butcher (肉屋さん直営), with owner Takahashi Fusa serving front of house; the menu was reworked about ten years before that article. 2026 diners still describe it as butcher-born; none names the current owner.',
      philosophy: null,
      specialty: 'Ginger pork with a choice of fry; menchi katsu; sasami fry.',
      anecdotes: [
        { text: '「しょうが焼きとフライの組み合わせはよく出ますね。若い人だけじゃなくて年配の方もよく食べていらっしゃいますよ」 — owner Takahashi Fusa, 2017.', source: MY },
        { text: 'Ginger pork uses the same domestic pork loin as the tonkatsu, with plenty of fat "because many customers like it".', source: MY },
        { text: '"Since this place originated from a butcher shop, the quality of the meat is excellent." — October 2026, ginger pork with menchi katsu for ¥1,200.', source: R + 'B537487814/' },
      ],
      japanese_sources_summary: 'マイナビニュース(2017.11.10): キッチン大正軒、昭和38年開業の東京交通会館の地下飲食街、肉屋さん直営で40年ほど前にオープン、開店当初はとんかつ・ひれかつ中心、10年前にリニューアル、店主・高橋扶佐さん、しょうが焼きとササミフライ定食1,050円、メンチカツ250円・アジフライ200円・ハムカツ100円の追加、国産ロース。食べログ: 13席、月火木金11:00〜14:30・17:30〜20:00、水は夜のみ、土11:00〜15:00、日祝休、夜は不定期、現金のみ。2026年の口コミ: しょうが焼きメンチ定食1,200円、B定食1,200円、並んでいる間に注文と前払い、ハンバーグは売り切れることも。',
      confidence: 'medium', sources: [MY, TB, R + 'B537487814/', R + 'B537458754/', R + 'B537240031/', R + 'B537118603/'],
    },
    cultural_comfort: { level: 'japanese', note: 'Queue (chairs outside, overflow from the opposite corner); order and pay cash to staff in line. Counter only.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Sasami fry coated in fresh breadcrumbs (生パン粉); every main is a breaded fry or tare-grilled pork.', source: MY }],
      soy_sauce_wheat: [{ text: 'Pork grilled with tare; Worcestershire sauce and soy sauce on the table.', source: MY }],
      vegan_cross_contact: [{ text: 'Ginger pork, hamburg and menchi from a butcher-run kitchen.', source: R + 'B537487814/' }],
      staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    mom_and_pop: true, loc_precise: true, address_ja: '〒100-0006 東京都千代田区有楽町2-10-1 東京交通会館 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都千代田区有楽町二丁目10番 (lot) 26m; OSM node 6303385985 「キッチン大正軒」 26m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MY, R + 'B537487814/', R + 'B537458754/', R + 'B537856913/'],
    price_note: 'Add-on prices from the 2017 article; set prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('しょうが焼きとメンチ定食', 'shougayaki to menchi teishoku', 'Ginger pork and menchi katsu set', '¥1,200', 'Set', 'no', 'no', 'October 2026.', 'ginger_pork_menchi'),
      it('B定食', 'bii teishoku', 'B set meal', '¥1,200', 'Set', 'no', 'no', 'October 2026.', 'b_set'),
      it('', '', 'Aji fry, fried shrimp, ham cutlet and menchi with large rice', '¥1,300', 'Set', 'no', 'no', 'October 2026.', 'fry_combo'),
      it('ハンバーグ', 'hanbaagu', 'Hamburg', '', 'Mains', 'no', 'no', 'Can sell out by mid-afternoon.', 'hamburg'),
      it('ササミフライ', 'sasami furai', 'Chicken-tender fry', '', 'Mains', 'no', 'no', '', 'sasami_fry'),
      it('メンチカツ(追加)', 'menchi katsu', 'Menchi katsu, add-on', '¥250', 'Add-ons', 'no', 'no', '2017 price.', 'menchi_addon'),
      it('ハムカツ(追加)', 'hamu katsu', 'Ham cutlet, add-on', '¥100', 'Add-ons', 'no', 'no', '2017 price.', 'hamkatsu_addon'),
      it('スコッチエッグ定食', 'sukocchi eggu teishoku', 'Scotch egg set', '', 'Set', 'no', 'no', '', 'scotch_egg_set'),
    ] }, {
    cuisine: '肉屋直営の洋食定食・しょうが焼き・ハンバーグ・フライを自由に組み合わせ',
    neighborhood: '有楽町二丁目、東京交通会館B1Fの路地。有楽町駅すぐ',
    gf_detail: 'グルテンフリーではありません。揚げ物の店で、とんかつ・メンチ・ハムカツ・ササミは生パン粉(小麦)、しょうが焼きは醤油ベースのタレ、卓上にウスターソースと醤油。グルテンフリーの選択肢はありません。',
    vegan_detail: 'ヴィーガンではありません。肉屋直営の肉中心の定食で、しょうが焼き、ハンバーグ、メンチカツ、ハムカツ、ビーフかつ、エビフライ・アジフライも。',
    notes: '[個人店・肉屋の定食] 東京交通会館(1963年開業)の地下飲食街にあるカウンター13席の店で、肉屋さん直営、2017年時点で開店から40年ほど。2017年のマイナビの取材では店主の高橋扶佐さんが自ら接客していました。開店当初はとんかつ中心で、2007年ごろに組み合わせ定食に。とんかつと同じ国産ロースのしょうが焼き、ハンバーグ、メンチカツ、ビーフかつ、スコッチエッグ、ササミ、アジフライ、エビフライから2品を選べ、追加のフライは数百円(2017年はハムカツ100円)。2026年の定食は1,200〜1,300円ほど。外に待ち用の椅子があり、並んでいる間に注文と支払いを済ませるので、座るとすぐ料理が出ます。昼過ぎにはハンバーグが売り切れることも。',
  });
}

// ================================================================ 南蛮 銀圓亭
{
  const GJ = 'https://www.ginza.jp/?p=3953'; const OWN = 'http://nambanginentei.com/';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13002305/'; const R = TB + 'dtlrvwlst/';
  const a = day(['11:30', '14:30'], ['17:00', '21:30']);
  put({
    id: 'tokyo_nanban_ginentei', name: '南蛮 銀圓亭 (Nanban Ginentei)', category: 'OMNI',
    lat: 35.671414, lng: 139.7631,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. Classic yōshoku: demi-glace beef stew and curry (demi-glace is normally thickened with a wheat roux), beef cutlet, gratin and hayashi rice. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. Beef stew, beef cutlet, tongue stew, prawn gratin and a beef demi-glace curry.',
    hours_raw: 'Mon–Sat 11:30–14:30 (L.O. 13:00) and 17:00–21:30 (L.O. 19:30); closed Sundays and holidays (Tabelog). Cards accepted.',
    hours: { 0: a, 1: a, 2: a, 3: a, 4: a, 5: a }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 5-chōme, Carioca Bldg 7F, off Namiki-dōri — near Ginza Stn',
    cuisine: 'Old-Ginza yōshoku · beef stew, beef cutlet, demi-glace curry, gratin · lunch and dinner courses', cuisine_type: 'yoshoku',
    website: OWN, gmaps: gm('南蛮 銀圓亭 カリオカビル'), menu_url: null,
    notes: "[Yōshoku · family company since 1933] The Western-food restaurant of 株式会社カリオカ, a Ginza family business founded in 1933 by the grandfather of today's president, Hoshihara Takashi, as a café serving Brazilian coffee, hence 'Carioca'. In a 2015 interview he said Ginentei had marked 45 years; the company also runs bars in the same building and shops in Yokohama, five in all. It moved from Ginza 6-14-2 to the seventh floor of the Carioca Building, and the lift opens straight into a quiet room. The 'Nanban' in the name reflects the founders' aim of introducing foreign culture. Signatures: beef stew, beef cutlet, tongue stew, prawn gratin, hayashi rice, and an unusual demi-glace 'curry rice' with chunks of beef over rice tossed with red pepper. Beef-stew course about ¥6,800 (2026).",
    chef_bio: {
      chef_name: null, roles: ['restaurant of 株式会社カリオカ (president 星原隆志 Hoshihara Takashi, 3rd generation)'],
      origin: 'Company founded 1933 (Shōwa 8) in Ginza; Ginentei about 45 years old in 2015',
      background: 'Hoshihara Takashi, a former hotelier in Hawaii, came back to take over his father\'s business about 2008 (seven years before the 2015 interview). His grandfather opened a café in Ginza; his father expanded into French, Italian, patisserie and even an early Thai restaurant.',
      philosophy: '店名に「南蛮」とありますが、外国からの舶来文化を日本に紹介することが目標だった — the name reflects introducing foreign food culture.',
      specialty: 'Beef stew; beef cutlet; demi-glace curry rice; prawn gratin.',
      anecdotes: [
        { text: '「カリオカは祖父の代で開業しまして、始めは喫茶店やバーよりスタートしました。当時はブラジル産のコーヒーを出していましたので、"リオ"にかけて、カリオカと名づけた」', source: GJ },
        { text: 'A regular (nine visits) craves its curry rice, which "resembles hayashi rice", built on demi-glace with beef and onions over pink rice with red pepper.', source: R + 'B443980157/' },
      ],
      japanese_sources_summary: 'GINZA OFFICIAL(高嶋ちさ子対談、2015年9月): 株式会社カリオカ代表取締役社長・星原隆志さん、南蛮銀圓亭は創業45周年、カリオカは昭和8(1933)年創業、祖父が銀座で喫茶店を開業(ブラジル産コーヒー)、父の代で拡大、銀座に南蛮銀圓亭と同じビルのバー2店、横浜に3店の計5店舗、ハワイのホテルマンを辞め7年前に帰国。メニュー: ビーフカツレツ、車海老のグラタン、牛舌シチュー。食べログ: 銀座5-4-8 カリオカビル7F(銀座6-14-2から移転)、50席、月〜土11:30〜14:30・17:00〜21:30、日祝休。2026年の口コミ: ビーフシチューのコース約6,800円、カレーライス、ビーフカツ、ハヤシライス。',
      confidence: 'medium', sources: [GJ, OWN, TB, R + 'B107376085/', R + 'B443980157/', R + 'B534574014/', R + 'B535785926/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'A calm, formal dining room; reservations advised, especially at weekend lunch. Cards accepted.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Beef cutlet (breaded and fried) on the menu.', source: R + 'B534574014/' }],
      soy_sauce_wheat: [{ text: 'Curry built on a rich demi-glace sauce.', source: R + 'B443980157/' }],
      vegan_cross_contact: [{ text: 'Beef stew, tongue stew, prawn gratin.', source: GJ }],
      staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座5-4-8 カリオカビル 7F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座五丁目4番8号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B107376085/', R + 'B443980157/', R + 'B534574014/', R + 'B535785926/'],
    price_note: 'No menu read. One course price from an August 2026 review.', last_checked: TODAY, items: [
      it('ビーフシチューセット', 'biifu shichuu setto', 'Beef stew course (appetiser, salad, soup, stew, rice, dessert, coffee)', '¥6,800', 'Course', 'no', 'no', 'About ¥6,800, August 2026.', 'beef_stew_course'),
      it('ビーフカツレツ', 'biifu katsuretsu', 'Beef cutlet', '', 'Mains', 'no', 'no', '', 'beef_cutlet'),
      it('カレーライス', 'karee raisu', 'Demi-glace curry rice', '', 'Mains', 'no', 'no', '', 'curry_rice'),
      it('ハヤシライス', 'hayashi raisu', 'Hayashi rice', '', 'Mains', 'no', 'no', '', 'hayashi_rice'),
      it('牛舌シチュー', 'gyuutan shichuu', 'Tongue stew', '', 'Mains', 'no', 'no', '', 'tongue_stew'),
      it('車海老のグラタン', 'kuruma ebi no guratan', 'Prawn gratin', '', 'Mains', 'no', 'no', '', 'prawn_gratin'),
    ] }, {
    cuisine: '銀座の老舗洋食・ビーフシチュー・ビーフカツ・デミグラスのカレー・グラタン・昼夜のコース',
    neighborhood: '銀座五丁目、並木通り近くのカリオカビル7F。銀座駅近く',
    gf_detail: 'グルテンフリーではありません。デミグラスのビーフシチューやカレー(デミグラスは通常小麦のルーでとろみをつけます)、ビーフカツ、グラタン、ハヤシライスなど昔ながらの洋食です。グルテンフリーの選択肢はありません。',
    vegan_detail: 'ヴィーガンではありません。ビーフシチュー、ビーフカツ、牛舌シチュー、車海老のグラタン、牛肉のデミグラスカレー。',
    notes: '[洋食・1933年創業の家族経営の会社] 銀座の家族経営の会社、株式会社カリオカの洋食店。1933年に現社長・星原隆志さんの祖父が、ブラジル産コーヒーを出す喫茶店として創業したのが始まりで、社名の由来もそこから。2015年のインタビューでは銀圓亭は創業45年、同じビルのバーや横浜の店と合わせて5店舗とのこと。銀座6-14-2からカリオカビル7階へ移転し、エレベーターの扉が開くとすぐ静かな店内です。店名の「南蛮」には舶来文化を伝える思いが込められています。名物はビーフシチュー、ビーフカツレツ、牛舌シチュー、車海老のグラタン、ハヤシライス、そして赤ピーマン入りのご飯に牛肉ゴロゴロのデミグラスをかけた独特のカレーライス。ビーフシチューのコースは約6,800円(2026年)。',
  });
}

// ================================================================ 銀之塔
{
  const MC = 'https://macaro-ni.jp/121580?page=2'; const OWN = 'https://gin-no-tou.com/';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13002320/'; const R = TB + 'dtlrvwlst/';
  const a = day(['11:30', '20:00']);
  put({
    id: 'tokyo_gin_no_tou', name: '銀之塔 (Gin no Tō)', category: 'OMNI',
    lat: 35.669361, lng: 139.768796,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. The only dishes are stew and gratin: the gratin is a white sauce, normally made with wheat flour, and the stew\'s thickening is not described. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. Beef stew and beef-and-tongue stew, and a gratin with white sauce and Parmesan. The side dishes are pickles, namasu and kinpira.',
    hours_raw: 'Daily 11:30–20:00 (L.O. 19:30), on shortened hours; closed 30 December–3 January (Tabelog). Cards accepted. Prices revised from 1 September 2026.',
    hours: { 0: a, 1: a, 2: a, 3: a, 4: a, 5: a, 6: a }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 4-chōme, behind Kabuki-za — close to Higashi-Ginza Stn exit 3',
    cuisine: 'Stew and gratin only since 1955 · served in earthenware pots · converted storehouse', cuisine_type: 'yoshoku',
    website: OWN, gmaps: gm('銀之塔 銀座4-13-6'), menu_url: null,
    notes: "[Yōshoku · stew and gratin since 1955] A stew house that opened in 1955 behind the Kabuki-za, long loved by actors, in an old storehouse-like building: sliding door, two tables and tatami to the right, polished stairs to more rooms. For seventy years the menu has been only stew and gratin. The stew comes in an earthenware pot, rich yet clean, which one diner calls Japanese cuisine. Sets include three small dishes (pickles, namasu, kinpira) and rice with free refills; the gratin is creamy white sauce browned with Parmesan, and the mini set pairs stew with a smaller gratin. Beef stew ¥3,300, beef and tongue ¥3,500 (October 2026, after a September price revision). Reserve the day before and you get a sorbet.",
    chef_bio: {
      chef_name: null, roles: ['stew restaurant (operator not named)'],
      origin: 'Opened 1955 (macaroni, 2023); Ginza 4-13-6',
      background: 'macaroni describes it as a 1955 stew specialist near Kabuki-za, loved by many actors, whose menu has been only stew and gratin since opening. No source names the owner.',
      philosophy: '創業から現在に至るまでメニューはシチューとグラタンのみで、変わらぬ味を守り続けています.',
      specialty: 'Beef stew; mixed beef-and-tongue stew; gratin.',
      anecdotes: [
        { text: '"I dare say, Ginzotou\'s Beef Stew is Japanese Cuisine" — behind the Kabuki-za, through the sliding door of an old house like a traditional storehouse, to the tatami seats.', source: R + 'B537961759/' },
        { text: 'A Kabukiza poster on the wall; "the perfect dining spot before watching a Kabuki performance."', source: R + 'B537378646/' },
      ],
      japanese_sources_summary: 'macaroni(2023.3): 「銀之塔」は1955年開店のシチュー専門店、昭和風情の店構え、歌舞伎座近くで役者に愛される、創業からメニューはシチューとグラタンのみ、土鍋のシチュー、パルメザンのグラタン、ミニセット。食べログ: 銀座4-13-6、74席、毎日11:30〜20:00(時短営業)、12/30〜1/3休、2026年9月1日から価格改定。2026年10月の口コミ: ビーフシチュー3,300円、ビーフ&タン3,500円、小鉢3品、ご飯おかわり自由、前日予約でシャーベット。',
      confidence: 'medium', sources: [MC, OWN, TB, R + 'B537961759/', R + 'B537540497/', R + 'B537850093/', R + 'B58498299/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Shoes off for the tatami seats; a short menu (stew or gratin). Reserve the day before for a free sorbet.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Gratin with creamy white sauce baked with Parmesan.', source: MC }],
      soy_sauce_wheat: [],
      vegan_cross_contact: [{ text: 'Beef and tongue stews in earthenware pots.', source: MC }],
      staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座4-13-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog price-revision notice (September 2026); reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座四丁目13番6号 (go) 6m; OSM node 6314744385 「銀之塔別館」 17m; ${TODAY}`,
  }, { verified: 'partial', confidence: 'medium', sources: [MC, R + 'B58498299/', R + 'B537540497/', R + 'B537850093/'],
    price_note: 'The menu is only stew and gratin (macaroni 2023). Prices from October 2026 reviews, after the September 2026 revision.', last_checked: TODAY, items: [
      it('ビーフシチュー', 'biifu shichuu', 'Beef stew (3 small dishes, rice with refills)', '¥3,300', 'Stew', 'no', 'no', 'October 2026.', 'beef_stew'),
      it('ミックスシチュー(ビーフ&タン)', 'mikkusu shichuu', 'Mixed stew, beef and tongue', '¥3,500', 'Stew', 'no', 'no', 'October 2026.', 'mixed_stew'),
      it('グラタン', 'guratan', 'Gratin (white sauce, Parmesan)', '', 'Gratin', 'no', 'no', '', 'gratin'),
      it('ミニセット', 'mini setto', 'Mini set: stew with a small gratin', '', 'Set', 'no', 'no', '', 'mini_set'),
    ] }, {
    cuisine: '1955年からシチューとグラタンだけ・土鍋で提供・蔵を改造した建物',
    neighborhood: '銀座四丁目、歌舞伎座の裏手。東銀座駅3番出口すぐ',
    gf_detail: 'グルテンフリーではありません。メニューはシチューとグラタンのみで、グラタンのホワイトソースは通常小麦粉を使い、シチューのとろみの付け方は書かれていません。グルテンフリーの選択肢はありません。',
    vegan_detail: 'ヴィーガンではありません。ビーフやビーフ&タンのシチューと、ホワイトソースとパルメザンのグラタン。小鉢は漬物・なます・きんぴら。',
    notes: '[洋食・1955年からシチューとグラタン] 歌舞伎座の裏手で1955年に開店し、役者にも愛されてきたシチューの店。蔵のような古い建物で、引き戸を開けると右にテーブル2卓と座敷、磨かれた階段の上にも部屋があります。70年間メニューはシチューとグラタンだけ。土鍋のシチューはコクがあるのにすっきりで、「日本料理」と評する客も。セットには小鉢3品(漬物・なます・きんぴら)とおかわり自由のご飯が付き、グラタンはパルメザンを焼き付けたクリーミーなホワイトソース。ミニセットはシチューと小さめのグラタン。ビーフシチュー3,300円、ビーフ&タン3,500円(2026年10月、9月の価格改定後)。前日までに予約するとシャーベットのサービスがあります。',
  });
}

// ================================================================ レストランあづま
{
  const OWN = 'https://ginza-restaurant-azuma.com';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13002548/'; const R = TB + 'dtlrvwlst/';
  const a = day(['11:20', '21:00']);
  put({
    id: 'tokyo_restaurant_azuma_ginza', name: 'レストランあづま (Restaurant Azuma)', category: 'OMNI',
    lat: 35.670394, lng: 139.762709,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. Town yōshoku: the house-sauce jūjū-yaki, hamburg, pork cutlet, Neapolitan and omurice. Cutlets are breaded, and the sauces are not described. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. Pork, beef and egg dishes throughout: jūjū-yaki, hamburg, omurice, pork cutlet; the soup is a beef bouillon.',
    hours_raw: 'Daily 11:20–21:00 (L.O. 20:30, Sundays and holidays 20:10); 30 December and 3 January to 16:00; closed 31 December–2 January (Tabelog). Seat reservations carry a ¥350 charge and a two-hour limit (shop site). Cards, IC and QR accepted.',
    hours: { 0: a, 1: a, 2: a, 3: a, 4: a, 5: a, 6: a }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 6-chōme, Nishiroku Bldg 1F and basement — near Ginza Stn',
    cuisine: 'Town yōshoku since 1946 · jūjū-yaki with house sauce · omurice · grown-ups\' kids\' lunch', cuisine_type: 'yoshoku',
    website: OWN, gmaps: gm('レストランあづま 銀座6-7-6'), menu_url: OWN,
    notes: "[Yōshoku · since 1946] A town Western-food restaurant founded in 1946, with seating down into the basement. The dish that has been on the menu since the start is jūjū-yaki, sizzling and served in a house-made sauce; one 2026 diner's speciality order was grilled mochi-buta pork. Also on the menu are runny omurice, hamburg, Neapolitan, tonkatsu, a pork 'jambalaya' of ketchup rice with a cutlet (¥1,650 in 2026), fried rice, and an 'adult's kids' lunch' of hamburg and Neapolitan under a flag. Lunch with rice and soup from ¥1,400 (shop site). Drinking-party courses too. A regular notes the Shinjuku branch has closed, leaving this one.",
    chef_bio: {
      chef_name: null, roles: ['yōshoku restaurant (operator not named)'],
      origin: 'Opened 1 April 1946 (Tabelog); a Shinjuku branch has since closed (2026 review)',
      background: 'The shop site calls it a yōshoku restaurant founded in 1946 serving the jūjū-yaki it has served since opening. No source names the owner.',
      philosophy: null,
      specialty: 'Jūjū-yaki with house sauce; omurice; Azuma spaghetti.',
      anecdotes: [
        { text: '「創業当初からのメニューで自家製ソースが大人気"じゅうじゅう焼"はぜひ味わっていただきたい逸品！」', source: OWN },
        { text: 'A diner back after about 25 years ordered the famous jūjū-yaki again.', source: R + 'B537663831/' },
        { text: '"With the Shinjuku branch now closed, this Ginza location is truly a gem" — and staff still set dishes down "quite intense and thrilling".', source: R + 'B67487861/' },
      ],
      japanese_sources_summary: '公式(ginza-restaurant-azuma.com): 1946年創業の洋食屋、創業当初からの"じゅうじゅう焼"(自家製ソース)、オムライス、ハンバーグ、大人のお子様ランチ、とんかつ、チャーハン、ヒレ和風、ランチはごはん・スープ付きで1,400円より、席予約はチャージ350円・2時間制。食べログ: 1946年4月1日開店、45席、毎日11:20〜21:00、カード・交通系IC・QR可。2026年の口コミ: もち豚のじゅうじゅう焼、ポークジャンバラヤ1,650円、オムライス、ナポリタン、大人のお子様ランチ風1,500円、地下席、新宿店は閉店。',
      confidence: 'medium', sources: [OWN, TB, R + 'B537663831/', R + 'B67487861/', R + 'B537184716/', R + 'B536580253/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual town yōshoku with seats on two levels; all payment types. Brisk service.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Pork cutlet with a light coating on the jambalaya.', source: R + 'B537184716/' }],
      soy_sauce_wheat: [{ text: 'Jūjū-yaki with a house-made sauce (recipe not published).', source: OWN }],
      vegan_cross_contact: [{ text: 'Soup made from beef bouillon.', source: R + 'B537184716/' }],
      staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-7-6 西六ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop site live; Tabelog reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目7番6号 (go) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [OWN, R + 'B537184716/', R + 'B67487861/', R + 'B536580253/'],
    price_note: 'Lunch from ¥1,400 per the shop site; dish prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('じゅうじゅう焼', 'juujuu yaki', 'Jūjū-yaki (sizzling grill, house sauce)', '', 'Mains', 'no', 'no', 'On the menu since 1946.', 'juujuu_yaki'),
      it('オムライス', 'omuraisu', 'Omurice', '', 'Mains', 'no', 'no', '', 'omurice'),
      it('ポークジャンバラヤ', 'pooku janbaraya', 'Pork jambalaya (ketchup rice, cutlet, soup)', '¥1,650', 'Mains', 'no', 'no', 'October 2026.', 'pork_jambalaya'),
      it('', '', "Grown-ups' kids' lunch (hamburg and Neapolitan)", '¥1,500', 'Mains', 'no', 'no', 'October 2026.', 'adult_kids_lunch'),
      it('ハンバーグ', 'hanbaagu', 'Hamburg', '', 'Mains', 'no', 'no', '', 'hamburg'),
      it('とんかつ', 'tonkatsu', 'Tonkatsu', '', 'Mains', 'no', 'no', '', 'tonkatsu'),
      it('', '', 'Lunch set with rice and soup', '¥1,400', 'Lunch', 'no', 'no', 'From ¥1,400 (shop site).', 'lunch_set'),
    ] }, {
    cuisine: '1946年創業の街の洋食・自家製ソースのじゅうじゅう焼・オムライス・大人のお子様ランチ',
    neighborhood: '銀座六丁目、西六ビル1F・地下。銀座駅近く',
    gf_detail: 'グルテンフリーではありません。街の洋食で、自家製ソースのじゅうじゅう焼、ハンバーグ、とんかつ、ナポリタン、オムライスなど。かつは衣付きで、ソースの中身は書かれていません。グルテンフリーの選択肢はありません。',
    vegan_detail: 'ヴィーガンではありません。じゅうじゅう焼、ハンバーグ、オムライス、とんかつと豚・牛・卵の料理ばかりで、スープは牛のブイヨンです。',
    notes: '[洋食・1946年創業] 1946年創業の街の洋食屋で、地下にも席があります。創業以来の名物は自家製ソースのじゅうじゅう焼で、2026年の口コミでは名物としてもち豚の焼き物が頼まれています。とろとろ卵のオムライス、ハンバーグ、ナポリタン、とんかつ、ケチャップライスにカツをのせたポークジャンバラヤ(2026年で1,650円)、チャーハン、旗の立った「大人のお子様ランチ」も。ランチはご飯・スープ付きで1,400円から(公式)。宴会コースもあります。常連によれば新宿店は閉店し、今はここだけ。',
  });
}

save();
