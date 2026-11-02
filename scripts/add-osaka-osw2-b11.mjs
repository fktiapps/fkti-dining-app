// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first — worker osw2, batch 11 (lane: Tabelog id mod 4 = 1).
//   Taken by id on the coordinator's instruction, after Greg's 2026-11-02 ruling that sister concepts are not chains
//   (both were skipped as chains in osw2-10):
//   + MONDAY VIBES COFFEE (all-day café and Italian bar a minute from Namba Stn, from 7 AM; a café of the 十忠八九 group)
//   + ムーラン MOULiN (riverside restaurant & café with a terrace beer garden on the Dotonbori River at Canal Terrace Horie; Balnibarbi)
//   Then from the lane:
//   + ワインとチーズと旨い肴のBAR à VIN 徳蔵 心斎橋 Tokuzo (wine bistro of a wine importer since 1983; beef stew, blue-cheese ham cutlet)
//   + 料理屋 新町壱丁目 Shinmachi Itchome (Italian in Shinmachi with stone-oven pizza and a 13-item appetizer platter; Il Piatto's sister shop)
//   Chain check:
//   - MONDAY VIBES COFFEE: one of ten shops of the 十忠八九 group (株式会社オーゼットカンパニー; lit.link/10chu89; Tabelog "10 locations
//     in total"). The group shops in data are an izakaya (osaka_minami_no_jucchu_hakku_namba) and a robata
//     (osaka_naniwa_robata_toyo_kobayashi_namba): a sister concept, drafted as its own shop under the ruling.
//   - MOULiN: run by 株式会社バルニバービ (© line of moulin715.com), which runs many different concepts; its securities report lists
//     one ムーラン, opened July 2008 in Minamihorie with Osaka City (edinetdb.jp text of the report, read 2026-11-02). No other ムーラン found.
//   - Tokuzo: one restaurant of a wine importer, beside the importer's wine shop (wine-ya.co.jp).
//   - Shinmachi Itchome: the 2-shop Il Piatto group (ilpiatto.info); イルピアット is in data (osaka_il_piatto_higashishinsaibashi,
//     name "イルピアット (Il Piatto)"). A different brand and room (a 10-seat late-night bar vs a 24-seat Italian with lunch and a stone
//     oven), drafted as a sister concept; flagged.
//   Queue order: 27001689 and 27014925 came next in the lane after osw2-10; 27140321 (銀座おのでら) is next.
//   None is in data/osaka.json (grep by name, romaji and address, 2026-11-02). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('osaka', TODAY, 'osw2-11');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ MONDAY VIBES COFFEE
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27146377/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const SITE = 'https://lit.link/10chu89';
  const H = day(['07:00', '21:00']);
  put({
    id: 'osaka_monday_vibes_coffee_namba', name: 'MONDAY VIBES COFFEE', category: 'OMNI',
    lat: 34.666702, lng: 135.500092, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Much of the menu is bread, croissants, French toast, pancakes, pasta and churros (Tabelog menu; reviews); the meat and fish dishes are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: no vegan options are described; the café dishes carry egg, bacon, ham, salmon, cheese or butter, and the bar menu is meat and fish (Tabelog menu).',
    hours_raw: 'Daily 7:00–21:00, as café and bar (Tabelog); closed 14:00–16:30 on 13 November 2026 for maintenance. Online booking for bar use and courses only; café guests walk in or call. Café use limited to 90 minutes, bar use to 2 hours. Bar use carries a ¥330 charge (Tabelog); an October 2026 diner paid ¥400 for the bar appetizer. Orders by QR code via LINE (October 2026). Cards (incl. UnionPay), transport IC and other e-money, PayPay. 41 seats; non-smoking; free Wi-Fi and power outlets (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 4-1-2, 三信ビル 1F — 1 min from Namba Stn (Midosuji Line), Osaka-Namba (Kintetsu) and Nankai Namba',
    cuisine: 'All-day café and Italian bar: breakfast from 7 AM (butter-toast sets, eggs Benedict, smash-croissant open sandwiches, croque-monsieur and croque-madame, sausage-egg French toast, whipped-butter pancakes), then pasta, beef-tongue stew, roast duck in red wine, whole-fish acqua pazza, fish and chips, carpaccio, salumi and small plates at night (Tabelog menu, October 2026; reviews) · coffee, espresso, lattes, smoothies, frappés; beer, highballs, wine, cocktails; takeout and delivery',
    website: SITE, gmaps: gm('MONDAY VIBES COFFEE なんば'), menu_url: M,
    notes: "[Café · Namba, café by day and Italian bar by night] A café and Italian bar a minute from Namba Station, opened January 2025 by the ten-shop 十忠八九 group, open from 7 AM to 9 PM every day. Mornings bring breakfast sets, eggs Benedict, smash-croissant open sandwiches and French toast; from midday it turns into an Italian bar with pasta, beef-tongue stew and acqua pazza. Diners in October 2026 praise the stylish wood-toned room, the brunch dishes and the bar food; one breakfast set came with lukewarm soup, cold bread and an undressed salad, and another diner found the restroom freezing. An early-opening stop for night-bus arrivals, with Wi-Fi and outlets; an October 2026 diner found it full of young people and visitors from abroad. Tabelog lists an English, Chinese and Korean menu.",
    chef_bio: { chef_name: null, roles: ['Shop staff unnamed; a shop of the 十忠八九 group (株式会社オーゼットカンパニー; lit.link)'], origin: null, background: 'The 十忠八九 group page (lit.link) lists ten shops in Osaka (Fukushima, Namba, Umeda) and Tokyo (Takadanobaba): tavern, sushi, yoshoku and café formats, MONDAY VIBES COFFEE among them. The group\'s stated concept is shops "a little better than just right": "more than an izakaya, less than a ryoriya; more than a café or bar, less than a restaurant". Tabelog gives the opening as 24 January 2025.', philosophy: '"Create a new standard for the casual dining scene" (group page).', specialty: 'All-day brunch and Italian bar food.',
      anecdotes: [
        { text: '"The early morning hours are great for night bus travelers, and I was the first customer." — October 2026, whipped-butter pancakes.', source: R + 'B537528397/' },
        { text: '"I was excited by how it looked, but unfortunately, the soup was lukewarm, the bread was cold and the butter wouldn’t melt, and the salad didn’t have any dressing on it." — October 2026, breakfast set.', source: R + 'B536800630/' },
        { text: '"They were so delicious that I switched from the café to the bar, where I had beef stew and fish and chips, along with some champagne, which was delightful." — October 2026.', source: R + 'B537241737/' },
        { text: '"It was filled with young people and international visitors." — October 2026.', source: R + 'B538200149/' },
      ],
      japanese_sources_summary: '十忠八九グループ (株式会社オーゼットカンパニー、lit.link): 店舗は魚屋 十忠八九 (福島)、みなみの十忠八九 (難波)、お初の十忠八九 (梅田)、福島呑場ヒンジ (福島)、浪速炉ばた 東洋小噺 (難波)、なにわ寿し 本店 (難波)、二階の洋品店 (福島)、生ハムとPIZZA。86ストア (難波)、MONDAY VIBES COFFEE (難波)、本酒場 満丸 東店 (高田馬場)、酒場・寿司・洋食・カフェの業態、ビジョン「カジュアルな飲食シーンの新しい基準を作る」、コンセプト「丁度いい、より、もうちょっとだけいい店」「居酒屋以上、料理屋未満」「カフェ・バル以上、レストラン未満」。食べログ (店舗会員、英語版): 難波4-1-2 三信ビル 1F、2025年1月24日オープン、毎日7:00〜21:00、カフェとイタリアンバル、バル利用はチャージ330円、カフェは90分・バルは2時間、41席、禁煙、Wi-Fi・電源、多言語メニュー (英語・中国語・韓国語)、グループ全10店。メニュー (2026年10月): 牛タンの低温調理シチュー、鴨のロースト赤ワインソース、鯛と魚介のアクアパッツァ、エッグベネディクト、クロックムッシュ、クロックマダム、ソーセージエッグのフレンチトースト、前菜盛り合わせ、生ハムとサラミ。口コミ (2026年9月〜10月): 朝7時から、夜行バスの客にも便利、エッグベネディクト、フレンチトースト、ホイップバターのパンケーキ、ペペロンチーノ、QRコードとLINEで注文、朝食セットのスープがぬるくパンが冷たかったという声、トイレが寒いという声、若い人と外国からの客が多い。',
      confidence: 'medium', sources: [TB, M, SITE, R + 'B536504332/', R + 'B536800630/', R + 'B537241737/', R + 'B537349043/', R + 'B537528397/', R + 'B537991322/', R + 'B538114427/', R + 'B538170975/', R + 'B538200149/', R + 'B538252166/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists a multilingual menu (English, Simplified Chinese, Korean) with photos and a digital menu; orders by QR code. No evidence on English-speaking staff.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波4-1-2 三信ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with a November 2026 notice and October 2026 menu; reviews dated through October 2026; listed on the group page.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波四丁目1番2号 (go) 8m. Nearest records (osaka_kushiage_harusai_namba, "…難波4-2-16") are about 30 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [M, TB],
    price_note: 'Tabelog menu last updated October 2026; prices with tax shown. Breakfast sets from about ¥1,000 (October 2026 review). ¥330 charge for bar use. Diners report ¥1,000–4,999 a head.', last_checked: TODAY, items: [
      it('', '', 'Eggs Benedict on English muffin, bacon or smoked salmon', '¥1,518', 'Signature', 'no', 'no', '', 'eggs_benedict'),
      it('', '', 'Sausage-egg French toast', '¥1,958', 'Signature', 'no', 'no', 'Half size ¥1,628.', 'french_toast'),
      it('', '', 'Croque-monsieur, ham and Gruyère', '¥1,518', 'Signature', 'no', 'no', '', 'croque_monsieur'),
      it('', '', 'Low-temperature beef-tongue stew', '¥2,178', 'Signature', 'ask', 'no', '', 'beef_tongue_stew'),
      it('', '', 'Sea bream and seafood acqua pazza, whole fish', '¥2,838', 'Signature', 'ask', 'no', 'Half ¥1,738.', 'acqua_pazza'),
    ] }, {
    cuisine: '一日中のカフェとイタリアンバル: 朝7時からの朝食 (バタートーストのセット、エッグベネディクト、クロワッサンのオープンサンド、クロックムッシュ、クロックマダム、ソーセージエッグのフレンチトースト、ホイップバターのパンケーキ)、昼からはパスタ、牛タンのシチュー、鴨のロースト赤ワインソース、鯛のアクアパッツァ、フィッシュ&チップス、カルパッチョ、生ハムとサラミ、小皿 (食べログのメニュー、2026年10月、口コミ)・コーヒー、エスプレッソ、ラテ、スムージー、フラッペ、ビール、ハイボール、ワイン、カクテル、テイクアウト、デリバリー',
    neighborhood: '難波4-1-2 三信ビル 1F。なんば駅 (御堂筋線)、大阪難波駅 (近鉄)、南海なんば駅から徒歩1分',
    gf_detail: '要確認。グルテンの情報なし。パン、クロワッサン、フレンチトースト、パンケーキ、パスタ、チュロスが多い (食べログのメニュー、口コミ)。肉や魚の皿の説明はない。',
    vegan_detail: 'ヴィーガンではありません。ヴィーガンの選択肢の説明はなく、カフェの皿は卵、ベーコン、ハム、サーモン、チーズ、バター入り、バルのメニューは肉と魚 (食べログのメニュー)。',
    notes: '[カフェ・難波、昼はカフェ、夜はイタリアンバル] なんば駅から1分のカフェ&イタリアンバルで、2025年1月に10店の十忠八九グループが開いた。毎日朝7時から夜9時まで。朝は朝食セット、エッグベネディクト、クロワッサンのオープンサンド、フレンチトースト。昼からはパスタ、牛タンのシチュー、アクアパッツァのイタリアンバルに。2026年10月の客は、木目のおしゃれな店内、ブランチの皿、バルの料理を褒める。一方、朝食セットのスープがぬるく、パンが冷たく、サラダにドレッシングがなかったという客も、トイレが寒かったという客も。夜行バスで着いた朝にも使え、Wi-Fiと電源もある。2026年10月の客は、若い人と外国からの客でいっぱいだったと書く。食べログでは英語・中国語・韓国語のメニューがあるとしている。',
  });
}

// ================================================================ ムーラン MOULiN
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27017005/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const SITE = 'http://www.moulin715.com/'; const IR = 'https://edinetdb.jp/company/E31815/text';
  const H = day(['09:00', '23:00']);
  put({
    id: 'osaka_moulin_minamihorie', name: 'ムーラン (MOULiN)', category: 'OMNI',
    lat: 34.66938, lng: 135.496292, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The menu mixes pasta, bread, lasagna, cutlets and fried dishes with charcoal-grilled meats, carpaccio and salads (Tabelog menu); nothing is stated about wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: no vegan options are described; the menu is built on meat, fish, cheese and cream (Tabelog menu).',
    hours_raw: 'Daily 9:00–23:00: morning 9:00–11:00 (last order), lunch 11:00–15:00 (last order), dinner 17:00–22:00 (last order), café 9:00–22:30 (last order); open year-round (Tabelog). The official site gives lunch 11:00–15:00, dinner 17:00–22:00 and café 11:00–22:30 (last orders), close 23:00, with no morning. Reservations taken, not for café use; 90 minutes per table; changes or cancellations at least two days ahead; one drink per person after 17:00 (Tabelog). No service charge. Cards (VISA, Master, JCB, AMEX, Diners) and transport IC and other e-money; no QR payment. 200 seats: 102 inside, 98 on the riverside terrace; non-smoking inside, smoking allowed on the terrace; private room for up to 30; wheelchair accessible; free Wi-Fi (Tabelog). Orders by QR code (October 2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Minamihorie 1-5-26, Canal Terrace 1F, on the Dotonbori River — 2 min from Yotsubashi Stn; 5 min from Namba Stn (Midosuji Line)',
    cuisine: 'Riverside restaurant and café with Italian cooking and charcoal grilling: starters, carpaccio, cheese, ajillo with baguette from Toyonaka Loaf Bakery, pasta (vongole, Awaji beef lasagna, Genovese, porcini cream), veal cotoletta, spare ribs, charcoal-grilled Awaji beef, Yumi pork, Awaodori chicken, lamb and black wagyu (Tabelog menu, January 2026) · weekly "Moulin lunch", pasta and hamburg lunches; morning; café cakes such as Basque cheesecake, chiffon cake and a large cream puff (reviews) · terrace BBQ and beer garden with all-you-can-drink plans; party plans; about 80 all-you-can-drink choices (official site; Tabelog)',
    website: SITE, gmaps: gm('ムーラン 南堀江'), menu_url: M,
    notes: "[Italian · Minamihorie, riverside terrace on the Dotonbori River] A big glass-walled restaurant and café at Canal Terrace Horie, opened July 2008 by Balnibarbi with Osaka City as the company's first waterside restaurant, and run under a permit to use the Dotonbori River waterside. Open from 9 AM to 11 PM: morning, a weekly lunch plate, café cakes, charcoal-grilled meat at night, and in summer a terrace beer garden with all-you-can-eat-and-drink, where small sightseeing boats pass by. Diners in 2026 enjoy the calm away from central Namba and the terrace breeze; a September 2026 repeat visitor found the beer-garden spare ribs now served off the bone and the food less careful than two years earlier. The room also hosts weddings and parties of up to 400 standing.",
    chef_bio: { chef_name: null, roles: ['Kitchen staff unnamed; a restaurant of 株式会社バルニバービ (official site)'], origin: null, background: 'Per Balnibarbi\'s securities report (text on edinetdb.jp), the company opened the restaurant & café ムーラン in Minamihorie, Nishi-ku, in July 2008 in partnership with Osaka City, starting its waterside restaurant development; the report describes it as a restaurant & café run under a permit to use the waterside of the Dotonbori River at Canal Terrace, with barbecue among its uses. The official site shows the © of BALNIBARBI Co.Ltd.', philosophy: '"Enjoy dinner with the night view" (official site).', specialty: 'Riverside terrace; charcoal-grilled meat; summer beer garden.',
      anecdotes: [
        { text: '"When I visited about two years ago, the spare ribs were juicy and delicious with the bone still attached, but this time they were served cut off the bone, which diminished the flavor." — September 2026, terrace buffet.', source: R + 'B488967978/' },
        { text: '"Located by the river, this place has a unique atmosphere with small tourist boats passing by." — September 2026, beer garden.', source: R + 'B535207456/' },
        { text: '"Although it\'s located in Namba, which is usually chaotic with tourists, this place is a bit away from the center, making it quite peaceful." — October 2026, café.', source: R + 'B417905792/' },
        { text: '"It was my first time eating a cream puff that you cut with a knife, and it was delicious." — October 2026.', source: R + 'B537629617/' },
      ],
      japanese_sources_summary: '公式サイト: なんば・南堀江のレストラン、夜景を楽しみながらディナーを、Restaurant & CAFÉ MOULiN、最大400名 (立食) の貸切、BBQとビアガーデンの120分飲み放題プラン、歓送迎会のパーティープラン、三陸・常磐うみうまフェア (2026年2月)、大阪市西区南堀江1-5-26 キャナルテラス 1F、毎日 LUNCH 11:00〜15:00 (L.O.)、DINNER 17:00〜22:00 (L.O.)、CAFE 11:00〜22:30 (L.O.)、CLOSE 23:00、©BALNIBARBI Co.Ltd.。バルニバービの有価証券報告書 (edinetdb.jp): 2008年7月に大阪市西区南堀江に大阪市と連携しレストラン&カフェ「ムーラン」をオープンし水辺のレストラン開発を開始、ムーランはキャナルテラスで道頓堀川の水辺利用許可を得て運営、バーベキューなど。食べログ (店舗会員、英語版): 毎日9:00〜23:00 (モーニング9:00〜11:00 L.O.)、200席 (店内102、テラス98)、テラスは喫煙可、30名までの個室、カフェは予約不可、17時以降はワンドリンク制。メニュー (2026年1月): 炭火焼き (Awaji 牛、Yumi pork、Awaodori chicken、ラム、黒毛和牛)、パスタ、Awaji 牛のラザニア、仔牛のコトレッタ、Toyonaka の Loaf Bakery のバゲットのアヒージョ。口コミ (2026年9月〜10月): テラスのビアガーデン食べ放題4,000円、観光船が通る川辺、ムーランランチ、バスクチーズケーキ、シフォンケーキ、ナイフで切るシュークリーム、QRコードで注文、スペアリブが骨なしになり雑になったという声も。',
      confidence: 'medium', sources: [TB, M, SITE, IR, R + 'B417905792/', R + 'B488967978/', R + 'B535207456/', R + 'B536293561/', R + 'B536550742/', R + 'B536683388/', R + 'B537021652/', R + 'B537189066/', R + 'B537629617/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Orders by QR code (2026 reviews). No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区南堀江1-5-26 キャナルテラス 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with 2026 plans and shop-maintained (corporate-member) Tabelog listing with a January 2026 menu; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区南堀江一丁目5番26号 (go) 14m. Same complex as 堀江ブルー (osaka_horie_blue_minamihorie, "…南堀江1-5-26 キャナルテラス堀江 東棟 2F"), whose pin is about 35 m from this one, so the two are not stacked; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [M, TB],
    price_note: 'Tabelog menu last updated January 2026, tax included; no service charge. Terrace beer-garden buffet with all-you-can-drink ¥4,000 (September 2026 reviews). Diners report ¥1,000–4,999 a head.', last_checked: TODAY, items: [
      it('', '', 'Assorted charcoal-grilled meat, three kinds', '¥3,450', 'Charcoal grill', 'ask', 'no', 'Recommended.', 'charcoal_grill_platter'),
      it('', '', 'Awaji beef lasagna', '¥1,450', 'Pasta', 'no', 'no', '', 'lasagna'),
      it('', '', 'Moulin salad with fresh fish and raspberry dressing', '¥1,500', 'Starters', 'ask', 'no', 'Recommended.', 'moulin_salad'),
      it('', '', 'Yumi pork spare ribs carbonnade', '¥1,700', 'Main', 'ask', 'no', '', 'spare_ribs'),
      it('', '', 'Shrimp and mushroom ajillo with baguette', '¥980', 'Starters', 'no', 'no', 'Baguette from Toyonaka Loaf Bakery.', 'ajillo'),
    ] }, {
    cuisine: 'イタリアンと炭火焼きの川辺のレストラン&カフェ: 前菜、カルパッチョ、チーズ、Toyonaka の Loaf Bakery のバゲットとアヒージョ、パスタ (ボンゴレ、Awaji 牛のラザニア、ジェノベーゼ、ポルチーニのクリーム)、仔牛のコトレッタ、スペアリブ、炭火焼きの Awaji 牛・Yumi pork・Awaodori chicken・ラム・黒毛和牛 (食べログのメニュー、2026年1月)・週替わりのムーランランチ、パスタやハンバーグのランチ、モーニング、バスクチーズケーキ、シフォンケーキ、大きなシュークリームなどのケーキ (口コミ)・テラスのBBQとビアガーデン、飲み放題プラン、パーティープラン、約80種の飲み放題 (公式サイト、食べログ)',
    neighborhood: '南堀江1-5-26 キャナルテラス 1F、道頓堀川沿い。四ツ橋駅から徒歩2分、なんば駅 (御堂筋線) から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。パスタ、パン、ラザニア、カツレツ、揚げ物と、炭火焼きの肉、カルパッチョ、サラダが混在 (食べログのメニュー)。小麦の説明はない。',
    vegan_detail: 'ヴィーガンではありません。ヴィーガンの選択肢の説明はなく、メニューは肉、魚、チーズ、クリームが中心 (食べログのメニュー)。',
    notes: '[イタリアン・南堀江、道頓堀川沿いのテラス] キャナルテラス堀江にあるガラス張りの大きなレストラン&カフェで、2008年7月にバルニバービが大阪市と連携し、同社初の水辺のレストランとして開いた。道頓堀川の水辺利用許可を得て運営している。朝9時から夜11時まで、モーニング、週替わりのランチ、カフェのケーキ、夜は炭火焼き、夏はテラスで食べ飲み放題のビアガーデン。観光船が川を通っていく。2026年の客は、なんばの中心から少し離れた落ち着きとテラスの風を楽しむ。2026年9月に再訪した客は、ビアガーデンのスペアリブが骨なしになり、2年前より料理が雑になったと感じた。結婚式や立食400名までのパーティーにも使われる。',
  });
}

// ================================================================ ワインとチーズと旨い肴のBAR à VIN 徳蔵 心斎橋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27001689/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const SITE = 'https://wine-ya.co.jp/';
  const W = day(['12:00', '22:00']); const F = day(['12:00', '23:00']); const S = day(['12:00', '21:00']);
  put({
    id: 'osaka_bar_a_vin_tokuzo_shinsaibashi', name: 'ワインとチーズと旨い肴のBAR à VIN 徳蔵 心斎橋 (Tokuzo Shinsaibashi)', category: 'OMNI',
    lat: 34.675919, lng: 135.501984, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Signature dishes include the blue-cheese ham cutlet, sardine cutlet, spring rolls, quiche and pasta, beside the beef stew, carpaccio and cheese (Tabelog menu; official site); nothing is stated about wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: no vegan options are described; the menu is built on cheese, meat and seafood (official site; Tabelog menu).',
    hours_raw: 'Mon–Thu 12:00–22:00; Fri, Sat and the day before a holiday 12:00–23:00; Sun and holidays 12:00–21:00 (Tabelog). Reservations recommended; 2 hours per table; a no-show is assumed after 15 minutes late (Tabelog); same-day cancellations may be charged in full (official site). No service charge. Cards (VISA, Master, JCB, AMEX, Diners), PayPay, d Barai; no e-money. 47 seats (24 table, 23 counter-table) over two floors, a semi-private room behind frosted glass, the second floor for up to 20 privately; non-smoking (Tabelog; official site). Bottles from the adjoining wine shop can be brought in for a ¥2,000 corkage (official site). Ordering by barcode (October 2026 review).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: F, 5: F, 6: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Minamisemba 3-5-26 — 2 min from Shinsaibashi Stn (Midosuji Line)',
    cuisine: 'Wine bistro of a wine importer: over 40 wines by the glass and over 100 labels, unfiltered unheated "nama" wine bottled at the company\'s own plant in Yamanashi, all-you-can-drink plans (official site; Tabelog) · the 40-year beef stew in red wine, blue-cheese ham cutlet, directly imported cheeses, escargots, Norwegian salmon marinade, assorted appetizers, monthly seasonal dishes rich in Italian vegetables (November 2026: crab and shungiku quiche, lamb and mussels in tomato, eel and beef spring rolls, cod milt ajillo, white-fish caldoso), pasta, desserts (official site; Tabelog menu, October 2026)',
    website: SITE, gmaps: gm('BAR à VIN 徳蔵 心斎橋'), menu_url: M,
    notes: "[Wine bistro · Shinsaibashi, a wine importer's restaurant since 1983] A wine bistro two minutes from Shinsaibashi Station, run directly by a wine importer and open since 1983, with a bright, flower-decked ground floor and a darker second floor for fine wine and courses. Over 40 wines come by the glass, unfiltered wine is bottled for the house in Yamanashi, and bottles from the wine shop next door can be opened for a corkage fee. The beef stew, made the same way for 40 years, survives every change of the shop's name and look, and over 80% of tables order the blue-cheese ham cutlet. Diners in 2026 praise the cheese, the wine range and the prices; some found the blue cheese strong, the liver pâté dry, the chairs hard or a smell in the room.",
    chef_bio: { chef_name: null, roles: ['Chef unnamed, "trained at numerous restaurants" (official site)'], origin: null, background: 'Per the official site, 徳蔵 (とくぞう) is a long-established wine restaurant founded in 1983 and run directly by a wine importer; the company bottles wine at its own plant in Yamanashi and runs the wine shop next door, with about 2,000 wines. The beef stew has been made for 40 years and can use red wine freely "because this is a shop run directly by a wine trading company". Tabelog speaks of a predecessor, "Wainya", loved as an izakaya-style restaurant; a September 2026 regular notes that the name and look have changed several times.', philosophy: '"We always want guests to taste many wines at reasonable prices" (official site).', specialty: 'Beef stew of 40 years; blue-cheese ham cutlet; wine by the glass.',
      anecdotes: [
        { text: '"The name and appearance have changed several times, but it remains a classic." — September 2026, second visit.', source: R + 'B450904756/' },
        { text: '"I heard the ham cutlet is famous, so I ordered it, but it had blue cheese inside, which was quite strong for my taste." — September 2026.', source: R + 'B536592577/' },
        { text: '"The biggest disappointment was the liver pâté. It lacked moisture" — October 2026, all-you-can-drink plan.', source: R + 'B537167272/' },
        { text: '"The beef stew, sardine cutlet, pasta, and chocolate cake were all excellent, and the all-you-can-drink wine menu was impressive." — October 2026, retirement party.', source: R + 'B537531603/' },
      ],
      japanese_sources_summary: '公式サイト: ワインとチーズと旨い肴のBAR à VIN 徳蔵 とくぞう 心斎橋、ワインインポーターが経営する創業1983年の老舗レストラン、グラスワイン常時40種以上・常時100種類以上の銘柄、隣のワインショップから持ち込み料2,000円で持ち込み可 (約2,000種)、山梨県の自社工場でボトリングした無濾過・非加熱の生ワイン、1階は生花で彩る明るくカジュアルな空間、2階は高級ワインとコース料理のシックな空間 (TOKUZO FIFTYS)、数々のレストランで修行を積んだシェフ、40年の伝統の特製ビーフシチュー (ワイン商社直営だから赤ワインを惜しげもなく)、直輸入チーズ、11月の旬菜 (仔羊とムール貝のトマト煮込み、真鯛昆布締めと洋ナシのカルパッチョ、紅ズワイカニと春菊のキッシュ、うなぎと牛肉の春巻き、かきとベーコンのカツレツ、タラ白子のアヒージョ、鰆の味噌漬け)、ブルーチーズをはさんだハムカツ、エスカルゴ、ノルウェー産サーモンマリネ、当日キャンセルは全額の場合あり。食べログ (店舗会員、英語版): 1983年10月3日オープン、月〜木12:00〜22:00、金・土・祝前日12:00〜23:00、日・祝12:00〜21:00、47席、2時間制、前身は居酒屋風の「Wainya」、ハムカツの注文率8割以上。口コミ (2026年2月〜10月): ビーフシチューは名前が変わっても同じ味、チーズの質、グラスワインの種類、ブルーチーズが強い、レバーパテが乾いていた、椅子が硬い、店内のにおい、バーコードで注文、飲み放題。',
      confidence: 'medium', sources: [TB, M, SITE, R + 'B450904756/', R + 'B523379935/', R + 'B535507584/', R + 'B535896176/', R + 'B536592577/', R + 'B536856392/', R + 'B537167272/', R + 'B537531603/', R + 'B538193508/', R + 'B538463653/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ordering by barcode (October 2026). No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場3-5-26',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with a November 2026 seasonal menu and shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場三丁目5番26号 (go) 1m. Nearest record 麺屋 よしかわ (osaka_menya_yoshikawa_minamisenba, "…南船場3-5-27 アルファ心斎橋 1F", a different building) is about 14 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [M, SITE, TB],
    price_note: 'Tabelog menu last updated October 2026 and official site (November 2026), tax included; no service charge. Diners report ¥1,000–5,999 a head; a September 2026 couple paid ¥8,800 for lunch with four glasses of wine each.', last_checked: TODAY, items: [
      it('', '', 'Traditional beef stew', '¥1,800', 'Signature', 'ask', 'no', 'Half ¥900.', 'beef_stew'),
      it('', '', 'Blue-cheese ham cutlet', '¥730', 'Signature', 'no', 'no', 'Ordered by over 80% of tables.', 'ham_cutlet'),
      it('', '', 'Burgundy-style escargots', '¥990', 'À la carte', 'ask', 'no', '', 'escargot'),
      it('紅ズワイカニと春菊、キノコのキッシュ', '', 'Red snow crab, shungiku and mushroom quiche', '¥880', 'November 2026', 'no', 'no', 'Seasonal.', 'crab_quiche'),
      it('タラ白子と旬野菜のアヒージョ', '', 'Cod milt and seasonal vegetable ajillo', '¥1,600', 'November 2026', 'ask', 'no', 'Seasonal.', 'shirako_ajillo'),
    ] }, {
    cuisine: 'ワインインポーター直営のワインビストロ: グラスワイン40種以上、100種類以上の銘柄、山梨県の自社工場でボトリングした無濾過・非加熱の生ワイン、飲み放題 (公式サイト、食べログ)・40年の伝統のビーフシチュー、ブルーチーズをはさんだハムカツ、直輸入チーズ、エスカルゴ、ノルウェー産サーモンマリネ、前菜盛り合わせ、イタリア野菜たっぷりの毎月の旬菜 (2026年11月: 紅ズワイカニと春菊のキッシュ、仔羊とムール貝のトマト煮込み、うなぎと牛肉の春巻き、タラ白子のアヒージョ、白身魚のカルドソ)、パスタ、デザート (公式サイト、食べログのメニュー、2026年10月)',
    neighborhood: '南船場3-5-26。心斎橋駅 (御堂筋線) から徒歩2分',
    gf_detail: '要確認。グルテンの情報なし。名物はブルーチーズのハムカツ、イワシのカツ、春巻き、キッシュ、パスタで、ビーフシチュー、カルパッチョ、チーズもある (食べログのメニュー、公式サイト)。小麦の説明はない。',
    vegan_detail: 'ヴィーガンではありません。ヴィーガンの選択肢の説明はなく、メニューはチーズ、肉、魚介が中心 (公式サイト、食べログのメニュー)。',
    notes: '[ワインビストロ・心斎橋、1983年からのワインインポーターの店] 心斎橋駅から2分、ワインインポーターが直営する1983年創業のワインビストロ。1階は生花で彩る明るい空間、2階は高級ワインとコース料理のシックな空間。グラスワインは40種以上、山梨で店のためにボトリングする無濾過ワインもあり、隣のワインショップのボトルは持ち込み料で開けてもらえる。40年同じ作り方のビーフシチューは店名や見た目が何度変わっても残り、ブルーチーズのハムカツは8割以上の客が頼む。2026年の客はチーズ、ワインの種類、値段を褒める。ブルーチーズが強い、レバーパテが乾いていた、椅子が硬い、店内のにおいが気になったという声も。',
  });
}

// ================================================================ 料理屋 新町壱丁目
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27014925/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const SITE = 'http://www.ilpiatto.info/shinmachi/'; const GROUP = 'http://www.ilpiatto.info/';
  const H = day(['11:30', '14:00'], ['18:00', '23:00']);
  put({
    id: 'osaka_shinmachi_itchome', name: '料理屋 新町壱丁目 (Shinmachi Itchome)', category: 'OMNI',
    lat: 34.676796, lng: 135.495697, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: an Italian built on handmade pasta and stone-oven pizza (official site; Tabelog), with bread charged per person (Tabelog). Fish, meat and carpaccio exist, but nothing is stated about wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: no vegan options are described; the appetizer platter, pastas and pizzas use meat, seafood and cheese (Tabelog menu).',
    hours_raw: 'Daily lunch 11:30–14:00 (last order 14:00) and dinner 18:00–23:00 (last food order 22:00, drinks 22:30); no closing days; closed 31 December and 1 January, 16:00–22:00 on 2–5 January (official site; Tabelog). Reservations taken; the room fills at 18:00 opening (2026 reviews). ¥400 per person for bread (Tabelog); a September 2026 diner got two small pieces and only on request. Cards (VISA, Master, JCB, AMEX, Diners), e-money and QR accepted. 24 seats (8 counter, 16 table); non-smoking since April 2020 (official site; Tabelog). Everything can be taken out (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinmachi 1-20-6, 打上ビルⅡ 1F — 3 min from Yotsubashi Stn exit 2; 5 min from Nishi-Ohashi Stn exit 2',
    cuisine: 'Italian with handmade pasta cut to order and stone-oven pizza baked at over 400 °C (Tabelog), fish from Kyushu and Shikoku, meat dishes, about 60 wines chosen by the sommelier (official site; Tabelog) · a 13-item appetizer platter (soft-shell crab mousse, octopus and black-olive marinade, eel quiche, chicken-liver pâté, roast pork, coppa romana, Gorgonzola cheesecake, fruit and mascarpone in prosciutto); pastas such as tomato carbonara, Genovese, seafood cream; pizzas from Margherita to Bismarck and quattro formaggi; zuppa di pesce, lamb chops (Tabelog menu, September 2025) · lunch of amuse-bouche, soup and a pasta, pizza or meat main (reviews)',
    website: SITE, gmaps: gm('料理屋 新町壱丁目'), menu_url: M,
    notes: "[Italian · Shinmachi, stone-oven pizza and a 13-item appetizer platter] A 24-seat Italian on a side street off Yotsubashi-suji, open since May 2008, the sister shop of the 10-seat Il Piatto in Higashi-Shinsaibashi; the two make up the Il Piatto group. The draw is the platter of 13 small appetizers, then stone-oven pizza, handmade pasta and fish from Kyushu and Shikoku, with wines chosen by the house sommelier. Lunch regulars come for the daily pasta with amuse-bouche and soup. The room fills right at 18:00 opening. Most 2026 diners rave about the appetizer platter; some found the portions one bite each, the pasta sauce heavy or the drinks pricey, and one was charged ¥400 for two small pieces of bread.",
    chef_bio: { chef_name: null, roles: ['Kitchen staff unnamed; a sommelier on staff (official site)'], origin: null, background: 'Per ilpiatto.info, the Il Piatto group has two shops around Shinsaibashi: イルピアット in Higashi-Shinsaibashi (10 seats, open until 2 AM, a hideaway Italian) and 料理屋 新町壱丁目 for banquets and parties; both offer the signature appetizer platter, carbonara described as the house\'s origin, and wines suggested by a sommelier on staff. The Shinmachi page says the fish comes from Kyushu and Shikoku. Tabelog gives the opening as 2 May 2008.', philosophy: '"Authentic Italian, from handmade pasta to pizza baked in the stone oven" (official site).', specialty: 'Thirteen-item appetizer platter; stone-oven pizza.',
      anecdotes: [
        { text: '"As soon as the doors opened at 6 PM, the place was packed in no time!" — September 2026, first visit.', source: R + 'B535081509/' },
        { text: '"The main pasta dish alone is satisfying, but it’s a bonus that it comes with an amuse-bouche and soup at this price." — October 2026, lunch regular.', source: R + 'B527004898/' },
        { text: '"In the end, we ended up paying JPY 400 for just two small pieces of bread." — September 2026.', source: R + 'B536272841/' },
        { text: '"The marinated octopus in the appetizer platter was so good that I ordered it again." — October 2026.', source: R + 'B537273425/' },
      ],
      japanese_sources_summary: '公式サイト (ilpiatto.info): 大阪心斎橋を中心に2店舗展開するイルピアットグループ、名物前菜盛合せ、お店の原点のカルボナーラ、宴会やパーティーなら新町壱丁目店、隠れ家イタリアンならイルピアット 東心斎橋店 (10席、17:00〜翌2:00)、各店にソムリエ。料理屋 新町壱丁目のページ: 手作りパスタと石窯で焼き上げたピザの本格イタリアン、仕入れにこだわった魚と肉、九州・四国から取り寄せる魚、ソムリエが厳選するワイン、焼きたてのピザは持ち帰り可、全品テイクアウト可、2020年4月1日から店内全面禁煙、ランチ11:30〜14:00 (L.O.)、ディナー18:00〜23:00 (L.O.22:30)、無休。食べログ (店舗会員、英語版): 2008年5月2日オープン、24席、パン代1人400円、400度以上の石窯、注文ごとに切る手打ちパスタ、ワイン約60種、年末年始の営業時間。メニュー (2025年9月): 前菜13種盛り合わせ1,730円、ピザ、パスタ、ズッパ・ディ・ペッシェ、ラムチョップ。口コミ (2026年9月〜10月): 18時の開店ですぐ満席、前菜盛り合わせ、タコのマリネ、日替わりパスタのランチ、パン代400円で小さなパン2切れだったという声、ソースが重い・飲み物が高めという声も。',
      confidence: 'medium', sources: [TB, M, SITE, GROUP, R + 'B527004898/', R + 'B535081509/', R + 'B536230788/', R + 'B536272841/', R + 'B536394380/', R + 'B537220865/', R + 'B537273425/', R + 'B538038434/', R + 'B538067921/', R + 'B538183154/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町1-20-6 打上ビルⅡ 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and shop-maintained (corporate-member) Tabelog listing with year-end 2026 hours; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目20番6号 (go) 1m. Nearest record (osaka_yakitori_toki_shinmachi, "…新町1-20-3 1F", a different building) is about 17 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [M, TB],
    price_note: 'Tabelog menu last updated September 2025, tax included; ¥400 per person for bread. Diners report ¥1,000–1,999 at lunch and ¥4,000–7,999 at dinner.', last_checked: TODAY, items: [
      it('', '', 'Assorted platter of 13 appetizers, per person', '¥1,730', 'Antipasti', 'ask', 'no', 'Recommended.', 'antipasto_misto'),
      it('', '', 'Stone-oven pizza Bismarck (tomato, mozzarella, soft-boiled egg, bacon)', '¥1,840', 'Pizza', 'no', 'no', '', 'pizza_bismarck'),
      it('', '', 'Pizza Margherita', '¥1,610', 'Pizza', 'no', 'no', '', 'margherita'),
      it('', '', 'Linguine Genovese', '¥1,730', 'Pasta', 'no', 'no', '', 'genovese'),
      it('', '', 'Zuppa di pesce', '¥3,080', 'Fish', 'ask', 'no', '', 'zuppa_di_pesce'),
    ] }, {
    cuisine: '注文ごとに切る手打ちパスタと400度以上で焼く石窯ピザのイタリアン (食べログ)。九州・四国から取り寄せる魚、肉料理、ソムリエが選ぶ約60種のワイン (公式サイト、食べログ)・前菜13種の盛り合わせ (ソフトシェルクラブのムース、タコと黒オリーブのマリネ、うなぎのキッシュ、鶏レバーのパテ、ローストポーク、コッパ・ロマーナ、ゴルゴンゾーラのチーズケーキ風、果物とマスカルポーネの生ハム巻き)、トマト風味のカルボナーラ、ジェノベーゼ、魚介のクリームなどのパスタ、マルゲリータからビスマルク、クアトロ・フォルマッジまでのピザ、ズッパ・ディ・ペッシェ、ラムチョップ (食べログのメニュー、2025年9月)・ランチはアミューズ、スープとパスタ、ピザ、肉のメイン (口コミ)',
    neighborhood: '新町1-20-6 打上ビルⅡ 1F。四ツ橋駅2番出口から徒歩3分、西大橋駅2番出口から徒歩5分',
    gf_detail: 'グルテンフリーではありません。手作りパスタと石窯ピザが中心のイタリアン (公式サイト、食べログ) で、パン代が1人ずつかかる (食べログ)。魚、肉、カルパッチョもあるが、小麦の説明はない。',
    vegan_detail: 'ヴィーガンではありません。ヴィーガンの選択肢の説明はなく、前菜、パスタ、ピザは肉、魚介、チーズを使う (食べログのメニュー)。',
    notes: '[イタリアン・新町、石窯ピザと前菜13種の盛り合わせ] 四ツ橋筋から一本入った24席のイタリアンで、2008年5月オープン。東心斎橋の10席のイルピアットの姉妹店で、2店でイルピアットグループ。名物は13種の小さな前菜の盛り合わせで、石窯ピザ、手打ちパスタ、九州・四国の魚が続き、ワインはソムリエが選ぶ。ランチはアミューズとスープ付きの日替わりパスタが目当ての常連も。18時の開店ですぐ満席になる。2026年の客の多くは前菜の盛り合わせを絶賛。一方、どれもひと口ずつ、パスタのソースが重い、飲み物が高めという声や、パン代400円で小さなパン2切れだったという声も。',
  });
}

save();
