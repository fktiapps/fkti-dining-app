// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 51.
//   Queue run from the osw2 worktree, 2026-11-07.
//   core (queue.mjs kyoto-missed next core 200, lane ids in order):
//   + タピオカベリーズ Bubble Tea Berries (tapioca drinks and crêpes in the Kyoto Tower Sando food hall)
//   + 酒とこおり ばんくす Sake to Koori Banks (savoury kakigori bar in a townhouse near Gojo-Omiya)
//   notable (queue.mjs kyoto-missed next notable 200, lane ids in order):
//   + o・mo・ya 東洞院 (creative French in a 1905 townhouse off Shijo-Karasuma) — 株式会社ザックエンタープライズ, a Kyoto family
//     company (since 1977) running SECOND HOUSE, o・mo・ya and others; a local multi-name group; no o・mo・ya in data.
//   - ラーメン こがね家 京都拉麺小路店 — skipped: chain (seven shops on the official site).
//   + シャム Siam (Thai-curry specialist near Enmachi) — sister of タイカレーラーメン シャム, already in data (a different concept).
//   None of the four is in data/kyoto.json: grep by id, name and address found none.
//   Service charges: none listed (o・mo・ya Tabelog original text: なし).
//   Remarks about other diners kept only where several reviews agree.
//   Pins: Tabelog /en/ point, cross-checked with GSI only; stacked pins re-checked against current main.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-51');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26038419', 'ラーメン こがね家 京都拉麺小路店: a chain — the official site (koganeya-jmtc3.com, read 2026-11-07) lists seven shops: 明石総本店, 京都拉麺小路店, 上海 高島屋店, 神戸学園都市駅前店, ゆめタウン姫路店, 上海久光中心店 and 上海大悦城店');

// ================================================================ タピオカベリーズ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26028879/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '23:00']);
  put({
    id: 'kyoto_bubble_tea_berries', name: 'タピオカベリーズ (Bubble Tea Berries)', category: 'OMNI',
    lat: 34.98754307646491, lng: 135.75921615466024, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tapioca drinks alongside crêpes and waffles made to order; no gluten information is published (Tabelog; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: milk teas, whipped cream, custard and ice cream (Tabelog; reviews).',
    hours_raw: '11:00–23:00 daily; closing days follow KYOTO TOWER SANDO (Tabelog). No reservations. AMEX card, e-money and QR (Tabelog). A counter stall with 8 seats, plus the food hall seating; drinks and crêpes are made to order, so expect a short wait (April and August 2025). In the Kyoto Tower Sando B1F food hall, 3 min walk from Kyoto Station (Tabelog; March 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kyoto Tower Sando B1F food hall — 3 min walk from Kyoto Station',
    cuisine: 'Tapioca drinks and freshly made sweets (Tabelog) · domestic tapioca — classic black, colourful, or chocolate — with drinks such as homemade Assam milk tea and Kyoto matcha from a long-established shop (Tabelog) · crêpes: banana strawberry cream ¥660 (March 2026), double berry strawberry ¥700 (September 2025), chocolate almond cream, strawberry chocolate banana (2025–2026) · waffles; tapioca açaí bowl; sparkling orange with tapioca (Tabelog; 2025)',
    website: null, gmaps: gm('タピオカベリーズ 京都タワーサンド'), menu_url: TB,
    notes: "[Bubble tea and crêpes · Kyoto Tower Sando food hall] A small stall in the food hall under Kyoto Tower, one of the few non-drinking stops down there: tapioca drinks with domestic pearls and homemade Assam milk tea or Kyoto matcha, plus chewy crêpes heaped with fruit and cream (about ¥700). Made to order, so allow a few minutes. Open daily 11:00–23:00.",
    chef_bio: { chef_name: null, roles: ['Operator not named'], origin: null,
      background: 'Tabelog’s introduction: a dessert shop focused on handmade, freshly made treats, using domestic tapioca and Kyoto matcha from a long-established shop said to date from the Heian period; homemade Assam milk tea; crêpes and waffles.',
      philosophy: null,
      specialty: 'Homemade milk tea with tapioca; crêpes.',
      anecdotes: [
        { text: 'A February 2025 visitor looking for a drink among the food-focused stalls of the food hall found this tapioca shop.', source: R + 'B501166171/' },
        { text: 'An August 2025 diner found the tapioca açaí bowl had melted to lukewarm by the time it was served.', source: R + 'B511787208/' },
        { text: 'An April 2025 parent reported a daughter wanting to work there after meeting the friendly staff.', source: R + 'B505213574/' },
      ],
      japanese_sources_summary: '食べログ: タピオカベリーズ、カフェ・タピオカ、下京区烏丸通七条下ル東塩小路町721-1 KYOTO TOWER SANDO、京都駅から259m、毎日 11:00〜23:00、休みはKYOTO TOWER SANDOに準ずる、予約不可、カード (AMEX)・電子マネー・QR可、8席。公式紹介: 国産タピオカと平安時代創業の老舗の京都抹茶、手作り・焼きたてのデザート専門店、ブラック・カラフル・チョコのタピオカ、アッサム茶葉から淹れる自家製ミルクティー、クレープとワッフル。口コミ (2025〜2026年、英語): バナナいちごクリーム660円、ダブルベリーいちご700円、チョコアーモンドクリーム、いちごチョコバナナ、タピオカアサイーボウル、スパークリングオレンジのタピオカ、注文後に作る、京都タワー地下のフードホール。',
      confidence: 'low', sources: [TB, R + 'B281892890/', R + 'B501166171/', R + 'B505213574/', R + 'B511787208/', R + 'B513530828/', R + 'B513865098/', R + 'B517526297/', R + 'B523894288/', R + 'B524045648/', R + 'B526940833/', R + 'B526945095/', R + 'B527829315/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter; food-hall seating.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区烏丸通七条下ル東塩小路町721-1 KYOTO TOWER SANDO',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (34.987543, 135.759216); cross-checked: GSI 京都府京都市下京区東塩小路町721番地 (lot) 16m; 11m from kyoto_tower_sand_bar and 17m from kyoto_link_tower_sando (same food hall); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523894288/', R + 'B513865098/'],
    price_note: 'Prices from September 2025 and March 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Banana strawberry cream crêpe', '¥660', 'Crêpe', 'no', 'no', 'March 2026.', 'crepe_banana'),
      it('', '', 'Double berry strawberry crêpe', '¥700', 'Crêpe', 'no', 'no', 'September 2025.', 'crepe_berry'),
      it('', '', 'Homemade Assam milk tea with tapioca', '', 'Drink', 'ask', 'no', '', 'milk_tea'),
    ] }, {
    cuisine: 'タピオカドリンクと作りたてのスイーツ (食べログ)・国産タピオカ (ブラック、カラフル、チョコ) に、自家製のアッサムミルクティーや老舗の京都抹茶などのドリンク (食べログ)・クレープ: バナナいちごクリーム660円 (2026年3月)、ダブルベリーいちご700円 (2025年9月)、チョコアーモンドクリーム、いちごチョコバナナ (2025〜2026年)・ワッフル、タピオカアサイーボウル、スパークリングオレンジのタピオカ (食べログ、2025年)',
    neighborhood: '京都タワーサンドB1Fのフードホール。京都駅から徒歩3分',
    gf_detail: '要確認。タピオカドリンクと注文後に作るクレープやワッフル。グルテンの情報は公開されていない (食べログ、口コミ)。',
    vegan_detail: 'ヴィーガン不可。ミルクティー、ホイップクリーム、カスタード、アイス (食べログ、口コミ)。',
    notes: '[タピオカとクレープ・京都タワーサンドのフードホール] 京都タワー地下のフードホールの小さな店で、酒以外で一息つける数少ない一軒。国産タピオカに自家製のアッサムミルクティーや京都抹茶、果物とクリームたっぷりのもちもちのクレープ (700円ほど)。注文後に作るので少し待つ。毎日11:00〜23:00。',
  });
}

// ================================================================ 酒とこおり ばんくす
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26039139/'; const R = TB + 'dtlrvwlst/';
  const IG = 'https://www.instagram.com/banks_kyoto/';
  const H = day(['12:30', '19:00']);
  put({
    id: 'kyoto_sake_to_koori_banks', name: '酒とこおり ばんくす (Sake to Koori Banks)', category: 'OMNI',
    lat: 34.996685237065776, lng: 135.7483057791247, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Savoury and sweet shaved ice with toppings such as pie crust, stew and miso panna cotta; no gluten information is published (reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Most bowls use meat, bacon, cheese or cream, but a May 2026 reviewer says the staff may make bacon-free or meat-free versions on request (reviews).',
    hours_raw: '12:30–19:00 (last order 18:30), Wednesday–Sunday; closed Monday and Tuesday per Tabelog — but a May 2026 reviewer came on a weekday at about 20:00, so check the day’s hours and menu on Instagram @banks_kyoto (Tabelog; May 2026). Bookings via Instagram (August 2025). Cards, e-money and some QR (Tabelog). 16 seats: about 8 at the counter and a table for 4, a terrace; non-smoking; English menu; dog-friendly (Tabelog; August 2024; July 2026). Often one person working, so bowls take time (May 2026). Also offers lodging (January 2025; May 2026). In a renovated townhouse on Ikkanmachi-dori just off Gojo, 7 min walk from Shijo-Omiya and Tambaguchi Stns (Tabelog; July 2026).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gojo-Omiya, Ikkanmachi-dori — 7 min walk from Tambaguchi Stn',
    cuisine: 'Savoury kakigori, "alcohol ice" and seasonal fruit ice, with a daily menu on Instagram (Tabelog) · savoury bowls such as nikujaga ¥1,400 (August 2025), nikujaga meat pie over white-miso panna cotta ¥1,300 (January 2023), peach, cheese and grilled bacon ¥1,600, chilli tomato, cream stew over mashed potato, sweet potato with mitarashi (2023–2026) · sweeter bowls: mandarin and anko cream, grilled custard strawberry, citrus and sansho with mascarpone, tomato-strawberry-bacon (2023–2026) · shochu and cocktails; parfaits (Tabelog; January 2025)',
    website: IG, gmaps: gm('酒とこおり ばんくす'), menu_url: IG,
    notes: "[Kakigori bar · Gojo-Omiya, savoury shaved ice] A chic townhouse bar near Gojo-Omiya shaving ice into unexpected savoury bowls — nikujaga over miso panna cotta, peach with cheese and grilled bacon, cream stew — alongside sweeter citrus-and-sansho or custard-strawberry ice, about ¥1,300–1,600, with cocktails. The daily menu is on Instagram; book there too. Dog-friendly.",
    chef_bio: { chef_name: null, roles: ['Owner not named; also runs a Japanese restaurant in Tokyo (January 2023 review)'], origin: null,
      background: 'Per a February 2023 reviewer, it was a café-bar serving curry, pasta and desserts that switched to kakigori during the pandemic closure; a January 2023 reviewer says the owner, who runs a Japanese restaurant in Tokyo, created the savoury kakigori from that experience. Reviewers (2025–2026) note it also offers lodging. Tabelog’s introduction: kakigori in a Kyoto townhouse — savoury ice, alcohol ice and seasonal fruit ice — with the day’s menu on Instagram.',
      philosophy: null,
      specialty: 'Nikujaga kakigori.',
      anecdotes: [
        { text: 'A May 2026 visitor looking for kakigori at 20:00 on a weekday found it here and watched a large block shaved by hand.', source: R + 'B528883651/' },
        { text: 'A February 2026 diner found mashed potato and apple mousse hidden inside the cream-stew ice.', source: R + 'B523382290/' },
        { text: 'A January 2025 lodging guest expected a basic soft-serve parfait and got a pretty, delicious one.', source: R + 'B500717265/' },
      ],
      japanese_sources_summary: '食べログ: 酒とこおり ばんくす、かき氷・カフェ・バー、下京区下長福寺町276 1F、四条大宮駅・丹波口駅から徒歩7分、水〜日 12:30〜19:00 (L.O. 18:30)、月火定休、予約可、カード・電子マネー・QR可、16席、テラス、禁煙、英語メニュー、子ども可。公式紹介: 京町家でかき氷、おかず氷・お酒の氷・季節の果物の氷、その日のメニューはInstagram。口コミ (2023〜2026年、英語): 肉じゃが1,400円、肉じゃがミートパイ1,300円 (白味噌のパンナコッタ)、桃とチーズと焼きベーコン1,600円、チリトマト、クリームシチュー、さつまいもとみたらし、みかんとあんこクリーム、焼きカスタードいちご、柑橘と山椒とマスカルポーネ、トマトいちごベーコン、パフェ、焼酎とカクテル、元はカレーやパスタのカフェバー、東京で和食店を営む店主、宿泊も、犬連れ可、一貫町通、ひとりで切り盛りの日も、平日夜8時ごろに訪れた口コミ。',
      confidence: 'low', sources: [TB, IG, R + 'B462880840/', R + 'B462880843/', R + 'B462880844/', R + 'B463828042/', R + 'B476571011/', R + 'B490358934/', R + 'B500717265/', R + 'B512005734/', R + 'B512868342/', R + 'B513292018/', R + 'B523382290/', R + 'B528883651/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu; book via Instagram.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区下長福寺町276 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (34.996685, 135.748306); cross-checked: GSI 京都府京都市下京区下長福寺町276番地 (lot) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B512005734/', R + 'B512868342/'],
    price_note: 'Prices from August 2025 reviews; the menu changes daily.', last_checked: TODAY, items: [
      it('', '', 'Nikujaga kakigori', '¥1,400', 'Kakigori', 'ask', 'no', 'August 2025.', 'nikujaga'),
      it('', '', 'Peach, cheese and grilled bacon kakigori', '¥1,600', 'Kakigori', 'ask', 'no', 'August 2025.', 'peach_bacon'),
      it('', '', 'Citrus and sansho kakigori with mascarpone', '', 'Kakigori', 'ask', 'no', 'May 2026.', 'citrus_sansho'),
    ] }, {
    cuisine: 'おかず氷、お酒の氷、季節の果物の氷、その日のメニューはInstagramで (食べログ)・おかず系: 肉じゃが1,400円 (2025年8月)、白味噌のパンナコッタ入りの肉じゃがミートパイ1,300円 (2023年1月)、桃とチーズと焼きベーコン1,600円、チリトマト、マッシュポテト入りのクリームシチュー、さつまいもとみたらし (2023〜2026年)・甘め: みかんとあんこクリーム、焼きカスタードいちご、柑橘と山椒とマスカルポーネ、トマトいちごベーコン (2023〜2026年)・焼酎とカクテル、パフェ (食べログ、2025年1月)',
    neighborhood: '五条大宮、一貫町通。丹波口駅から徒歩7分',
    gf_detail: '要確認。パイ生地、シチュー、味噌のパンナコッタなどをのせたおかず系と甘いかき氷。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: '要確認。多くは肉、ベーコン、チーズ、クリームを使うが、頼めばベーコン抜きや肉抜きにしてくれるかもしれないという口コミ (2026年5月)。',
    notes: '[かき氷バー・五条大宮、おかずかき氷] 五条大宮近くのおしゃれな町家のバー。白味噌パンナコッタ入りの肉じゃが、桃とチーズと焼きベーコン、クリームシチューなど意外なおかず系に、柑橘と山椒や焼きカスタードいちごの甘い氷も。1,300〜1,600円ほど、カクテルも。その日のメニューと予約はInstagramで。犬連れ可。',
  });
}

// ================================================================ o・mo・ya 東洞院
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26006319/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.secondhouse.co.jp/omoya/'; const CO = 'https://www.secondhouse.co.jp/gaiyou.html';
  const H = day(['11:30', '14:30'], ['17:30', '20:30']);
  put({
    id: 'kyoto_omoya_higashinotoin', name: 'o・mo・ya 東洞院 (o・mo・ya Higashinotoin)', category: 'OMNI',
    lat: 35.00643975786899, lng: 135.76097403037613, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Creative French courses mixing Japanese ingredients — fish with sauces, wagyu, desserts; no gluten information is published (Tabelog; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish and wagyu courses (reviews).',
    hours_raw: 'Lunch 11:30 to last order 14:30; dinner 17:30 to last order 20:30; closed Tuesday and the 2nd and 4th Wednesday; holiday hours vary — see the official site (Tabelog). Bookings accepted. No service charge (Tabelog original text: なし). Cards, transport IC, e-money and QR (Tabelog). 67 seats: tables and sunken seats on the ground floor, tables upstairs, a storehouse private room for 5–9 and a tea room; shoes off (Tabelog; July 2026). Through the back of SECOND HOUSE 東洞院店, on Higashinotoin south of Rokkaku, 7 min walk from Shijo-Karasuma (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashinotoin-Rokkaku, near Shijo-Karasuma — 7 min walk',
    cuisine: 'Creative French that blends Japanese and Western flavours, in a 1905 townhouse (Tabelog) · lunch and dinner courses, e.g. a ¥6,500 wagyu course (August and September 2026), a "light" lunch course (August 2026), a recommended wagyu dinner course (May 2026) · dishes such as pan-seared sea bream with green-pea sauce, a strawberry dessert, plenty of summer vegetables (2026 reviews) · each dish explained by staff, with chopsticks offered (May and July 2026)',
    website: SITE, gmaps: gm('o・mo・ya 東洞院'), menu_url: SITE,
    notes: "[Creative French · Higashinotoin near Shijo-Karasuma, a 1905 townhouse] Behind the SECOND HOUSE café, a long, quiet townhouse with a stone path, tatami, a storehouse room and a tea room, serving creative French courses with Japanese touches — sea bream with green-pea sauce, wagyu, pretty desserts — for about ¥4,000–6,500 at lunch, more at dinner. Shoes off; staff explain each dish. Closed Tuesday and the 2nd and 4th Wednesday.",
    chef_bio: { chef_name: null, roles: ['Chef not named; run by 株式会社ザックエンタープライズ (representative 足達 光男)'], origin: null,
      background: 'Per the operator’s site: 株式会社ザックエンタープライズ began in Kyoto in 1977 (company formed 1982) and runs spaghetti & cake SECOND HOUSE (main brand since 1980), the Kyoto-townhouse creative French restaurant o・mo・ya and others; about 70 staff and 250 part-timers. Tabelog’s introduction: a 1905 Kyoto townhouse at Shijo-Karasuma blending Japanese and Western flavours at reasonable prices, courses at lunch and dinner. A September 2026 reviewer has come about five times in 20 years.',
      philosophy: 'Per the operator’s site: handmade, warm cooking in relaxed spaces, every dish and shop made by hand.',
      specialty: 'Creative French courses in a townhouse.',
      anecdotes: [
        { text: 'A July 2026 wedding party was impressed by the seating plan and thoughtfully prepared dishes.', source: R + 'B531102710/' },
        { text: 'An August 2026 lunch guest found the "light" course not light at all.', source: R + 'B534030882/' },
        { text: 'A September 2026 mother and child cooled down on the water-sprinkled stone entrance before a generous starter.', source: R + 'B536249766/' },
      ],
      japanese_sources_summary: '運営会社サイト (secondhouse.co.jp): 株式会社ザックエンタープライズ、京都で1977年創業、町家フレンチのo・mo・yaやspaghetti & cake SECOND HOUSEを展開、1980年創業のメインブランド (約40種のスパゲッティ)、手作りのあたたかみある料理、代表取締役 足達 光男、社員70名・アルバイト250名。食べログ: フレンチ・ビストロ・日本料理、中京区東洞院六角下ル御射山町283、四条烏丸から徒歩7分、セカンドハウス東洞院店の奥へ、月・水〜日・祝 ランチ11:30〜14:30 (L.O.)、ディナー17:30〜20:30 (L.O.)、火曜と第2・第4水曜定休、サービス料なし、カード・電子マネー・QR可、67席 (1階テーブル26・掘りごたつ8、2階テーブル24、蔵の個室9、茶室)、インボイス T4130001006467。公式紹介: 1905年築の京町家、和と洋が融合した創作フレンチを手頃に、昼も夜もコース。口コミ (2026年、英語): 和牛のコース6,500円、ライトコース、鯛のポワレとグリーンピースのソース、いちごのデザート、夏野菜、料理の説明、箸、靴を脱ぐ、石畳の打ち水、20年で5回ほど。',
      confidence: 'medium', sources: [TB, SITE, CO, R + 'B462698811/', R + 'B528958110/', R + 'B530994803/', R + 'B531020252/', R + 'B531102710/', R + 'B532048364/', R + 'B532132620/', R + 'B533730718/', R + 'B534030882/', R + 'B535711984/', R + 'B535776005/', R + 'B536249766/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Shoes off; staff explain each dish (2026 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区東洞院六角下ル御射山町283',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and operator site; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.00644, 135.760974); cross-checked: GSI 京都府京都市中京区御射山町283番地 (lot) 31m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533730718/', R + 'B535711984/'],
    price_note: 'Course price from August–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Wagyu course', '¥6,500', 'Course', 'ask', 'no', 'August–September 2026.', 'wagyu_course'),
      it('', '', 'Light lunch course', '', 'Lunch', 'ask', 'no', 'August 2026.', 'light_course'),
    ] }, {
    cuisine: '1905年築の町家で、和と洋が融合した創作フレンチ (食べログ)・昼も夜もコース、たとえば和牛のコース6,500円 (2026年8月と9月)、ライトコース (2026年8月)、和牛のおすすめディナーコース (2026年5月)・鯛のポワレとグリーンピースのソース、いちごのデザート、夏野菜たっぷりなど (2026年の口コミ)・料理ごとに説明、箸も用意 (2026年5月と7月)',
    neighborhood: '東洞院六角、四条烏丸から徒歩7分',
    gf_detail: '要確認。和の食材を取り入れた創作フレンチのコース、ソースの魚、和牛、デザート。グルテンの情報は公開されていない (食べログ、口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚と和牛のコース (口コミ)。',
    notes: '[創作フレンチ・四条烏丸近くの東洞院、1905年の町家] セカンドハウスの奥の、石畳、畳、蔵の個室、茶室のある静かな長い町家。鯛のグリーンピースソース、和牛、かわいいデザートなど和を取り入れた創作フレンチのコースで、昼は4,000〜6,500円ほど、夜はそれ以上。靴を脱いで、料理はひと皿ずつ説明。火曜と第2・第4水曜休み。',
  });
}

// ================================================================ シャム
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26005131/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.siam-thaicurry.com/';
  const LD = day(['11:30', '15:00'], ['18:00', '21:30']); const L = day(['11:30', '15:00']);
  put({
    id: 'kyoto_siam_thai_curry', name: 'シャム (Siam)', category: 'OMNI',
    lat: 35.01881668785256, lng: 135.73408773051997, cuisine_type: 'thai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Coconut-milk Thai curries from house curry pastes with rice, plus dry curry, salads and fried sides; no gluten information is published (official site; reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. You choose the curry, the filling and the toppings, but the ingredients of the house curry pastes are not published and no vegan option is described (official site; reviews).',
    hours_raw: 'Lunch 11:30–15:00 (last order 14:30) Thursday–Tuesday; dinner 18:00–21:30 (last order 21:00) Thursday–Monday; closed Wednesday; may close early when sold out (Tabelog). Tables are limited to an hour (official site). No reservations. Cards, transport IC, iD, QUICPay and QR (Tabelog). 12 counter seats; non-smoking; English menu; takeout (Tabelog). A September 2026 reviewer heard it will close temporarily to relocate in 2027. 5 min walk from JR Enmachi Stn (Tabelog).',
    hours: { 0: LD, 1: L, 3: LD, 4: LD, 5: LD, 6: LD }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishinokyo, near JR Enmachi Stn — 5 min walk',
    cuisine: 'Kyoto’s first Thai-curry specialist, per the shop: house curry pastes ground from fresh Thai herbs every week (official site) · green, red and "Islam" (massaman, with peanut butter) curries; brown curry 200 g ¥1,300 (October 2025); choose the filling, toppings and rice (200–400 g); chicken green curry with 400 g rice ¥1,450 (May 2026); lunch set with salad and 200 g rice ¥1,120, extra spicy +¥20 (October 2026) · dry curry; evening set with stir-fried minced chicken (August 2026) · vegetable salad ¥250; satsuma-age; coconut pudding (2025) · Thai Select certified (reviews)',
    website: SITE, gmaps: gm('タイカレー シャム 円町'), menu_url: SITE,
    notes: "[Thai curry · Enmachi, a long-loved specialist] A 12-seat counter near Enmachi Station grinding its own pastes from fresh Thai herbs: bright green curry, red, and a peanutty \"Islam\" (massaman) curry, built your way with fillings, toppings and rice by the gram. A lunch set with salad is about ¥1,100. It sells out some days; closed Wednesday. Sister of タイカレーラーメン シャム.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Per the official site: Kyoto’s first Thai-curry specialist, recognised in Thailand, with homemade curry pastes ground from fresh Thai herbs and made weekly to keep the aroma; it later opened the sister shop タイカレーラーメン専門店シャム (kyoto_thai_curry_ramen_siam in data); press in Amakara Techo, Mapple and Tabelog Best Restaurant 2009–2010. Reviewers (2025–2026) say it is Thai Select certified, and a September 2026 reviewer heard of a temporary closure to relocate in 2027.',
      philosophy: 'Per the official site: an authentic taste that Thailand recognises — refreshing heat, mellow coconut milk, fruity sweetness and spice.',
      specialty: 'Green curry.',
      anecdotes: [
        { text: 'An August 2026 visitor walked 30 minutes from Hankyu Nishin Station only to find the curry sold out.', source: R + 'B533803543/' },
        { text: 'A November 2025 diner came back after more than ten years, following a stay in a nearby hospital, for the red chicken curry.', source: R + 'B516575158/' },
        { text: 'An October 2026 regular of over ten years still calls the green curry exquisite.', source: R + 'B537551894/' },
      ],
      japanese_sources_summary: '公式サイト (siam-thaicurry.com): タイカレーレストラン siam シャム、タイが認めた本場の味、京都初のタイカレー専門店、タイの生ハーブをすりつぶした自家製カレーペースト、香りのため1週間ごとに仕込む、グリーンカレー・レッドカレー・イスラムカレー、テイクアウト、1時間までの利用のお願い、昼11:30〜14:30 (L.O. 14:00) に変更、姉妹店「タイカレーラーメン専門店シャム」、あまから手帖・まっぷる・食べログ ベストレストラン2009/2010などに掲載。食べログ: カレー・タイ料理、中京区西ノ京西鹿垣町6 林ビル1F、JR円町駅から徒歩5分、月木金土日 11:30〜15:00・18:00〜21:30、火 11:30〜15:00、水曜定休、売り切れ次第終了、予約不可、カード・電子マネー・QR可、カウンター12席、禁煙、英語メニュー、テイクアウト、インボイス T4810382802637。口コミ (2025〜2026年、英語): タイセレクト認定、ブラウンカレー200g 1,300円、チキングリーンカレーご飯400g 1,450円、サラダ付きランチセット1,120円、激辛+20円、ドライカレー、鶏ひき肉炒めの夜のセット、野菜サラダ250円、さつま揚げ、ココナッツプリン、2027年に移転のため一時休業予定という口コミ、売り切れの日も。',
      confidence: 'medium', sources: [TB, SITE, R + 'B117361177/', R + 'B434193603/', R + 'B515534872/', R + 'B516277869/', R + 'B516575158/', R + 'B526897379/', R + 'B529043854/', R + 'B533142366/', R + 'B533803543/', R + 'B537540963/', R + 'B537551894/', R + 'B537864696/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区西ノ京西鹿垣町6 林ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through October 2026; a relocation is reported for 2027.' },
    pin_source: `Tabelog ${TB} (35.018817, 135.734088); cross-checked: GSI 京都府京都市中京区西ノ京西鹿垣町6番地 (lot) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537551894/', R + 'B529043854/', R + 'B516277869/'],
    price_note: 'Prices from October 2025–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch set: curry with 200 g rice and salad', '¥1,120', 'Curry', 'ask', 'ask', 'October 2026; extra spicy +¥20.', 'lunch_set'),
      it('', '', 'Chicken green curry, 400 g rice', '¥1,450', 'Curry', 'ask', 'no', 'May 2026.', 'green_400'),
      it('', '', 'Brown curry, 200 g rice', '¥1,300', 'Curry', 'ask', 'ask', 'October 2025.', 'brown'),
      it('', '', 'Vegetable salad', '¥250', 'Side', 'ask', 'ask', 'October 2025.', 'salad'),
    ] }, {
    cuisine: '店いわく京都初のタイカレー専門店、タイの生ハーブを毎週すりつぶす自家製カレーペースト (公式サイト)・グリーン、レッド、ピーナッツバターのイスラム (マッサマン) カレー、ブラウンカレー200g 1,300円 (2025年10月)、具、トッピング、ご飯の量 (200〜400g) を選ぶ、チキングリーンカレーご飯400g 1,450円 (2026年5月)、サラダ付きのランチセット ご飯200g 1,120円、激辛+20円 (2026年10月)・ドライカレー、鶏ひき肉炒めの夜のセット (2026年8月)・野菜サラダ250円、さつま揚げ、ココナッツプリン (2025年)・タイセレクト認定 (口コミ)',
    neighborhood: '西ノ京、JR円町駅の近く。徒歩5分',
    gf_detail: '要確認。自家製ペーストのココナッツミルクのタイカレーとご飯、ドライカレー、サラダ、揚げ物。グルテンの情報は公開されていない (公式サイト、口コミ)。',
    vegan_detail: '要確認。カレー、具、トッピングを選べるが、自家製ペーストの原材料は公開されておらず、ヴィーガン対応の説明もない (公式サイト、口コミ)。',
    notes: '[タイカレー・円町、長く愛される専門店] 円町駅近くの12席のカウンター。タイの生ハーブからペーストを自家製し、鮮やかなグリーン、レッド、ピーナッツの「イスラム (マッサマン)」カレーを、具、トッピング、ご飯のグラムを選んで。サラダ付きのランチセットは1,100円ほど。売り切れの日も、水曜休み。タイカレーラーメン シャムの姉妹店。',
  });
}

save();
