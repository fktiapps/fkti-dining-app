// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 54.
//   + Bar fish (aquarium bar with no menu, below Pontocho; rest)
//   + 京・黒桜 Kyo Kurozakura (A5 wagyu yakiniku on Kiyamachi; rest)
//   + 立ち呑み 賀花 Gabana (Kyoto-sake standing bar beside a Nishiki pickle shop; rest)
//   + ホルモン処 じゃまん Horumon Dokoro Jaman (late-night horumon yakiniku off Kiyamachi; rest)
//   Rest list (mod 6 = 1) after batch 53, nearest-first — skipped:
//   - どんぐり 四条寺町店 26021995: chain — five どんぐり shops in our crawls (and 26005291 already skipped).
//   - 先斗町 和牛焼肉 花京本舗 26033977: thin — no reviews.
//   - バーローライフ 0009 26023507: thin — four reviews.
//   - スターバックス コーヒー 京阪祇園四条駅店 26027785: chain.
//   Same-name check for the picks, same brand or operator only: Bar fish — one. 黒桜 — two in our crawls (京・黒桜 and 黒桜
//   八条口店) — drafted. 賀花 — one; the operator page (takakuraya.jp, opened 2026-11-07) lists 錦・高倉屋, 賀花, 裏寺 百練,
//   先斗町 百練, 焼肉 お富 and HAPPY STAND KYOTO — a small group of different concepts, drafted. じゃまん — one; じゃまん縁 in
//   Gion is in our crawls with no link found. None of the four is in data/kyoto.json by name or address (鍋屋町220 FORUM木屋町
//   先斗町ビル BF — かしわ 木屋町店 and 一品香 in data are other shops on the same lot; 鍋屋町211-2; 東大文字町289-2;
//   備前島町309-1).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-54');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260201/26021995/', 'chain: five どんぐり shops in our crawls');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26033977/', 'thin: no reviews');
skip('https://tabelog.com/en/kyoto/A2601/A260101/26023507/', 'thin: four reviews');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26027785/', 'chain: Starbucks');

// ================================================================ Bar fish
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26014867/'; const R = TB + 'dtlrvwlst/';
  const H = day(['20:00', '29:00']);
  put({
    id: 'kyoto_bar_fish_pontocho', name: 'バー フィッシュ (Bar fish)', category: 'OMNI',
    lat: 35.00449463787343, lng: 135.77104947034942, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A cocktail and whisky bar with no menu — drinks are made to request; no food or gluten information (2019–2025 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Drinks only in the reviews; cocktails made to request (2019–2025 reviews).',
    hours_raw: 'Daily 20:00–5:00; open all year; hours may change (Tabelog). Reservations accepted (Tabelog). No menu or price list — ask for what you like; a charge of ¥220 per person (April 2025). Cards (JCB, AMEX, Diners); no e-money or QR (Tabelog). 25 seats: a counter and sofa tables; smoking allowed (Tabelog; 2022–2025 reviews). Down the stairs to the basement of the FORUM Kiyamachi-Pontocho building, near the south end of Pontocho (Tabelog; 2022–2024 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'South end of Pontocho, near Shijo — basement bar',
    cuisine: 'Aquarium bar lit in blue and purple, with tanks of Asian arowanas, African cichlids, soft-shelled turtles and a frog (2022–2024 reviews) · no menu: whisky highballs and cocktails made to order or left to the bartender, no Japanese sake (2024 reviews) · about ¥1,000–4,000 (Tabelog; 2024–2025 reviews)',
    website: null, gmaps: gm('Bar fish 先斗町'), menu_url: null,
    notes: '[Bar · Pontocho, an aquarium underground] A dim basement bar near Pontocho\'s south end where arowanas, cichlids and soft-shelled turtles swim in tanks around the sofas. There is no menu or price list: ask for a highball or a cocktail to your taste — reviewers found it reasonably priced, with a small seat charge. One found the bartender\'s choice cocktails watery. Smoking allowed; open till 5 a.m.',
    chef_bio: { chef_name: null, roles: ['Bartender (unnamed)'], origin: null,
      background: 'Per Tabelog: a bar of 25 seats open 20:00–5:00 all year. Reviewers from 2019 to 2025 describe a dim aquarium bar with no menu, where the bartender makes drinks to request and keeps a respectful distance.',
      philosophy: null, specialty: 'Cocktails to order.',
      anecdotes: [
        { text: 'A September 2024 visitor asked for a lemon sour the bar did not stock and was made a lemon-sour-style cocktail instead.', source: R + 'B493667181/' },
        { text: 'A September 2024 guest let the staff choose the cocktails, which were easy to drink but a bit watery; there is no Japanese sake.', source: R + 'B491727654/' },
        { text: 'An April 2025 visitor nervous about the missing price list found it very reasonable, with a ¥220 charge per person.', source: R + 'B504425756/' },
      ],
      japanese_sources_summary: '食べログ: バー、中京区鍋屋町220 FORUM木屋町先斗町ビル BF、祇園四条から134m、毎日 20:00〜翌5:00、年中無休、営業時間は変わることあり、予約可、カード (JCB・AMEX・Diners) 可、電子マネー・QR 不可、25席、カウンターとソファ、喫煙可。口コミ (2018年7月〜2025年4月、英語): 先斗町の入口近く、地下への階段、水槽だらけのアクアリウムバー、アジアアロワナ、アフリカンシクリッド、スッポン、カエル、青や紫の薄暗い照明、メニューと値段表なし、好みを伝えて作ってもらう、ハイボール、カクテル、日本酒なし、チャージ1人220円 (2025年4月)、お任せのカクテルが少し薄かったとの声 (2024年9月)、入りにくい入口。',
      confidence: 'medium', sources: [TB, R + 'B369681733/', R + 'B451283991/', R + 'B458931479/', R + 'B479692460/', R + 'B487404116/', R + 'B491727654/', R + 'B493496114/', R + 'B493667181/', R + 'B504425756/', R + 'B517349285/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No menu — ask for what you like; small seat charge; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区鍋屋町220 FORUM木屋町先斗町ビルBF',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through April 2025.' },
    pin_source: `Tabelog ${TB} (35.004495, 135.771049); cross-checked: GSI 京都府京都市中京区鍋屋町220番地 (lot) 25 m; nearest Kyoto record 9.4 m away (kyoto_ippin_ko_pontocho, 220-5); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B504425756/'],
    price_note: 'No menu; the seat charge is from an April 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Seat charge (per person)', '¥220', 'Charge', 'gf', 'vegan', 'April 2025.', 'charge'),
      it('', '', 'Cocktail made to request', '', 'Drinks', 'ask', 'ask', '2024 reviews.', 'cocktail'),
    ] }, {
    cuisine: '青や紫の照明に、アジアアロワナ、アフリカンシクリッド、スッポン、カエルの水槽が並ぶアクアリウムバー (2022〜2024年の口コミ)・メニューなし: ウイスキーのハイボールや好み、またはお任せのカクテル、日本酒はない (2024年の口コミ)・1,000〜4,000円ほど (食べログ、2024〜2025年の口コミ)',
    neighborhood: '四条近くの先斗町の南の入口、地下のバー',
    gf_detail: '要確認。メニューのないカクテルとウイスキーのバーで、注文に応じて作る。食べ物やグルテンの情報はない (2019〜2025年の口コミ)。',
    vegan_detail: '要確認。口コミは飲み物のみ。カクテルは注文に応じて作る (2019〜2025年の口コミ)。',
    notes: '[バー・先斗町、地下の水族館] 先斗町の南の入口近くの薄暗い地下のバー。ソファのまわりの水槽でアロワナ、シクリッド、スッポンが泳ぐ。メニューも値段表もなく、ハイボールや好みのカクテルを頼む。口コミでは値段は手ごろで、少額のチャージあり。お任せのカクテルが薄いと感じた客も。喫煙可、朝5時まで。',
  });
}

// ================================================================ 京・黒桜 Kyo Kurozakura
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26026573/'; const R = TB + 'dtlrvwlst/'; const WEB = 'http://kiyamachi-kurozakura.com/';
  const H = day(['12:00', '15:00'], ['16:00', '23:00']);
  put({
    id: 'kyoto_kyo_kurozakura_kiyamachi', name: '京・黒桜 (Kyo Kurozakura)', category: 'OMNI',
    lat: 35.00502563787301, lng: 135.77078600035497, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: yakiniku with sauces, kalbi rice bowls, kimchi and namul (2022–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu yakiniku restaurant (2022–2026 reviews).',
    hours_raw: 'Daily 12:00–15:00 (last order 14:00) and 16:00–23:00 (last order 22:00); irregular closing days (Tabelog). Reservations accepted; courses for 2 or more, bookable until noon on the day; same-day cancellations are charged (Tabelog; October 2024). Cards, e-money and QR (Tabelog). 62 seats with private and semi-private rooms (Tabelog). Orders by smartphone QR code (September 2024). On Kiyamachi north of Shijo; 2 min walk from Kawaramachi and Gion-Shijo Stns (Tabelog). Opened 5 January 2016 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi north of Shijo — 2 min walk from Kawaramachi Stn',
    cuisine: 'A5 wagyu yakiniku in a calm room with private and semi-private rooms (2022–2026 reviews) · courses: Miyazaki A5 beef (February 2025); an all-you-can-eat-and-drink course ¥9,500 with liver and nira, a "drinkable" kalbi, tongue and rare A5 cuts (February 2026); an anniversary course with a meat cake ¥9,900 (June 2023) · à la carte: yukhoe, raw beef tongue, special harami, sirloin steak ¥8,800, ribeye ¥6,900 (2022–2026 reviews) · lunch from ¥1,200, e.g. a pork kalbi bowl with salad and namul (July 2026) · lunch about ¥1,000–2,000, dinner about ¥5,000–10,000 (Tabelog; 2024–2026 reviews)',
    website: WEB, gmaps: gm('京・黒桜 木屋町'), menu_url: null,
    notes: '[Yakiniku · Kiyamachi, A5 wagyu] A calm Kiyamachi yakiniku with private rooms, serving A5 and Miyazaki wagyu: yukhoe, raw tongue, harami and good-value courses up to an all-you-can-eat-and-drink set, plus a ¥1,200 lunch bowl. Some found the all-you-can-drink sake poor, the QR menu confusing, or one strip loin a little off-smelling. Lunch and dinner daily.',
    chef_bio: { chef_name: null, roles: ['Manager and staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a yakiniku and izakaya opened 5 January 2016 on Kiyamachi with a website at kiyamachi-kurozakura.com; a sister shop, Kurozakura Hachijoguchi, appears in our crawls. Reviewers describe a manager and staff attentive at company banquets (June 2023).',
      philosophy: null, specialty: 'A5 wagyu courses.',
      anecdotes: [
        { text: 'A February 2026 diner called the liver and garlic chives on the ¥9,500 all-you-can-eat-and-drink course the best ever.', source: R + 'B526564419/' },
        { text: 'A June 2024 guest found the all-you-can-drink sake tasted like shochu, even after reordering.', source: R + 'B486761763/' },
        { text: 'An October 2026 group after bowling noticed a slight odour in the thinly sliced strip loin.', source: R + 'B537819827/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉・バーベキュー・居酒屋、中京区鍋屋町211-2、阪急河原町駅・京阪祇園四条駅から徒歩2分、毎日 12:00〜15:00 (L.O.14:00)、16:00〜23:00 (L.O.22:00)、不定休、予約可 (コースは2名から、当日12時まで、当日キャンセルは料金がかかる)、カード・電子マネー・QR 可、62席、個室・半個室、2016年1月5日開店。口コミ (2022年4月〜2026年10月、英語): A5の和牛、宮崎牛のコース、9,500円の食べ放題・飲み放題コース、レバニラ、飲めるカルビ、記念日の肉ケーキ付きコース9,900円、ユッケ、生のタン、特選ハラミ、サーロインステーキ8,800円、リブロース6,900円、昼は1,200円から (豚カルビ丼、サラダ、もやしナムル)、QRコードでスマホ注文、飲み放題の日本酒が焼酎のようだったとの声 (2024年6月)、メニューがわかりにくいとの声 (2024年9月)、ロースに少し臭みがあったとの声 (2026年10月)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B468560912/', R + 'B486761763/', R + 'B489717007/', R + 'B492128911/', R + 'B494613726/', R + 'B498227145/', R + 'B500857722/', R + 'B526564419/', R + 'B531067948/', R + 'B537819827/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR smartphone ordering; private rooms; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区鍋屋町211-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and website; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005026, 135.770786); cross-checked: GSI 京都府京都市中京区鍋屋町211番地 (lot) 8 m; nearest Kyoto record 9.3 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B526564419/', R + 'B531067948/', R + 'B468560912/'],
    price_note: 'Prices from June 2023, February 2026 and July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'All-you-can-eat-and-drink course', '¥9,500', 'Courses', 'no', 'no', 'February 2026.', 'tabehodai'),
      it('', '', 'Anniversary course with meat cake', '¥9,900', 'Courses', 'no', 'no', 'June 2023.', 'anniversary'),
      it('', '', 'Sirloin steak', '¥8,800', 'À la carte', 'ask', 'no', 'July 2026.', 'sirloin'),
      it('', '', 'Lunch: pork kalbi bowl with salad and namul', '¥1,200', 'Lunch', 'no', 'no', 'July 2026.', 'lunch_kalbi'),
    ] }, {
    cuisine: '個室・半個室のある落ち着いた店のA5和牛の焼肉 (2022〜2026年の口コミ)・コース: 宮崎のA5牛 (2025年2月)、レバニラ、飲めるカルビ、タン、希少なA5の部位の食べ放題・飲み放題コース9,500円 (2026年2月)、肉ケーキ付きの記念日コース9,900円 (2023年6月)・単品: ユッケ、生のタン、特選ハラミ、サーロインステーキ8,800円、リブロース6,900円 (2022〜2026年の口コミ)・昼は1,200円から、例: サラダとナムル付きの豚カルビ丼 (2026年7月)・昼1,000〜2,000円ほど、夜5,000〜10,000円ほど (食べログ、2024〜2026年の口コミ)',
    neighborhood: '四条の北の木屋町。河原町駅から徒歩2分',
    gf_detail: 'グルテンフリー不可。たれの焼肉、カルビ丼、キムチ、ナムル (2022〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。和牛の焼肉の店 (2022〜2026年の口コミ)。',
    notes: '[焼肉・木屋町、A5和牛] 個室のある木屋町の落ち着いた焼肉の店。A5や宮崎の和牛を、ユッケ、生のタン、ハラミ、食べ放題・飲み放題までのお得なコースで。1,200円の昼の丼も。飲み放題の日本酒がよくない、QRのメニューがわかりにくい、ロースに少し臭みがあったという声も。昼も夜も毎日。',
  });
}

// ================================================================ 立ち呑み 賀花 Gabana
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26026813/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://takakuraya.jp/shops/';
  const H = day(['11:00', '20:00']);
  put({
    id: 'kyoto_tachinomi_gabana_nishiki', name: '立ち呑み 賀花 (Gabana)', category: 'OMNI',
    lat: 35.004979896726404, lng: 135.76664484599632, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto pickles such as suguki, mizunasu and nukazuke, grilled firefly squid, salted salmon and shuto with sake and beer; no gluten information (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The pickle platters look plant-based, but some pickles use dashi (taru-dashi suguki); no ingredient information (2025–2026 reviews).',
    hours_raw: 'Daily 11:00–20:00, last order 19:30; hours may change (Tabelog). The operator page gives 11:30–20:00, closed over New Year (takakuraya.jp). Food can sell out before closing (August 2026). No reservations (Tabelog). Cards and QR; no e-money (Tabelog). Standing counter and a small table area, open to the arcade; smoking allowed (Tabelog; March 2025). In Nishiki Market at the Teramachi end, next door to the pickle shop Nishiki Takakuraya; 2 min walk from Hankyu Kawaramachi Stn (Tabelog; operator page). Opened 1 November 2015 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishiki Market, Teramachi end — 2 min walk from Kawaramachi Stn',
    cuisine: 'Standing bar of Kyoto sake and pickles from the shop next door (operator page; 2025–2026 reviews) · Kyoto-only sake, e.g. Sawaya Matsumoto junmai ¥600, Kamikura junmai nama genshu; draft beer ¥400–500; Riku highball ¥500 (2025–2026 reviews) · pickle platters, taru-dashi suguki ¥500, mizunasu, Chinese-cabbage nukazuke; grilled firefly squid, salted salmon, shuto (2025–2026 reviews) · hot sake 2 go with a pickle platter ¥1,600 (March 2025) · about ¥1,000–2,000 (Tabelog)',
    website: WEB, gmaps: gm('立ち呑み 賀花 錦市場'), menu_url: null,
    notes: '[Standing bar · Nishiki Market, sake and pickles] A cheap, open-fronted standing bar beside a Nishiki pickle shop: Kyoto-only sake from about ¥600 and draft beer from ¥400, with plates of freshly made pickles — suguki, mizunasu — grilled firefly squid and salted salmon, to Showa-era songs. Open from late morning; food can sell out near closing. Smoking allowed.',
    chef_bio: { chef_name: null, roles: ['Bar staff (unnamed)'], origin: null,
      background: 'Per the operator page: a standing bar beside Nishiki Takakuraya, the Kyoto pickle shop, for freshly made pickles and local sake from around Kyoto (できたてのお漬物と錦市場の賑わいを肴に、京都各地の地酒をお楽しみください). The same operator lists four more shops, among them HAPPY STAND KYOTO. Opened 1 November 2015 (Tabelog).',
      philosophy: 'Freshly made pickles with Kyoto sake (operator page).', specialty: 'Pickle platters; Kyoto sake.',
      anecdotes: [
        { text: 'A March 2025 group drawn in on the way elsewhere found the menu claiming "probably the cheapest in the world" and the taru-dashi suguki delicious.', source: R + 'B509004267/' },
        { text: 'A February 2025 Kyoto local had not eaten suguki since childhood and found it as good as ever.', source: R + 'B502207491/' },
        { text: 'An August 2026 visitor arriving just before closing found the food sold out apart from a pickle platter.', source: R + 'B533576182/' },
      ],
      japanese_sources_summary: '食べログ: 立ち飲み・日本酒バー、中京区錦小路通寺町東大文字町289-2、阪急京都河原町駅から徒歩2分、毎日 11:00〜20:00 (L.O.19:30)、予約不可、カード・QR 可、電子マネー不可、喫煙可、テイクアウト可、2015年11月1日開店。運営ページ: 「錦・高倉屋」の隣の立ち飲み店、できたてのお漬物と錦市場の賑わいを肴に京都各地の地酒を、11:30〜20:00、年末年始休み。口コミ (2025年1月〜2026年8月、英語): 京都の酒のみ、Sawaya Matsumoto の純米600円、Kamikura の純米生原酒、生ビール400〜500円、Riku のハイボール500円、漬物の盛り合わせ、樽出しすぐき500円、水なす、白菜のぬか漬け、焼きほたるいか、塩鮭、酒盗、熱燗2合と漬物の盛り合わせで1,600円、昭和の音楽、閉店前は料理が売り切れ (2026年8月)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B501886251/', R + 'B502207491/', R + 'B502587893/', R + 'B506305629/', R + 'B509004267/', R + 'B510089023/', R + 'B512706759/', R + 'B523875616/', R + 'B527800558/', R + 'B533576182/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Standing only; some signs in other languages (February 2025); smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区錦小路通寺町東大文字町289-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and operator page; reviews through August 2026.' },
    pin_source: `Tabelog ${TB} (35.004980, 135.766645); cross-checked: GSI 京都府京都市中京区東大文字町289番地 (lot) 58 m; nearest Kyoto record 22 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B509004267/', R + 'B502207491/'],
    price_note: 'Prices from February and March 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Kyoto junmai sake (glass)', '¥600', 'Sake', 'gf', 'vegan', 'March 2025.', 'junmai'),
      it('', '', 'Taru-dashi suguki', '¥500', 'Pickles', 'ask', 'ask', 'March 2025.', 'suguki'),
      it('', '', 'Draft beer', '¥400', 'Drinks', 'no', 'vegan', 'February 2025.', 'beer'),
    ] }, {
    cuisine: '隣の店の漬物と京都の酒の立ち飲み (運営ページ、2025〜2026年の口コミ)・京都の酒のみ、例: Sawaya Matsumoto の純米600円、Kamikura の純米生原酒、生ビール400〜500円、Riku のハイボール500円 (2025〜2026年の口コミ)・漬物の盛り合わせ、樽出しすぐき500円、水なす、白菜のぬか漬け、焼きほたるいか、塩鮭、酒盗 (2025〜2026年の口コミ)・熱燗2合と漬物の盛り合わせで1,600円 (2025年3月)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '錦市場の寺町側。河原町駅から徒歩2分',
    gf_detail: '要確認。すぐき、水なす、ぬか漬けなどの京漬物、焼きほたるいか、塩鮭、酒盗に酒やビール。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。漬物の盛り合わせは植物性に見えるが、だしを使う漬物もある (樽出しすぐき)。材料の情報はない (2025〜2026年の口コミ)。',
    notes: '[立ち飲み・錦市場、酒と漬物] 錦の漬物店の隣の、表に開いた安い立ち飲み。600円ほどからの京都の酒と400円からの生ビールに、すぐきや水なすなどできたての漬物、焼きほたるいか、塩鮭を、昭和の歌を聴きながら。昼前から開いていて、閉店近くは料理が売り切れることも。喫煙可。',
  });
}

// ================================================================ ホルモン処 じゃまん Jaman
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26034913/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '27:00']);
  put({
    id: 'kyoto_horumon_jaman_kawaramachi', name: 'ホルモン処 じゃまん (Horumon Dokoro Jaman)', category: 'OMNI',
    lat: 35.006042, lng: 135.769835, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: yakiniku with sauces, sukiyaki-style beef, Korean cold noodles (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a horumon and yakiniku restaurant (2025–2026 reviews).',
    hours_raw: 'Daily 18:00–3:00; irregular closing days; closed 31 December and 1 January (Tabelog). Last orders around 2:00 (September 2026). Reservations accepted, online too; busy late — full at 22:00 on a Monday (Tabelog; August 2026). No charge (Tabelog original なし). Cards; no e-money or QR (Tabelog). 38 seats: 26 at tables, 12 at the counter; a space on the 3F for groups of 10 or more (Tabelog; October 2026). Designated smoking area per Tabelog; a reviewer says smoking is allowed inside (April 2026). In an alley between Kawaramachi and Kiyamachi; moved here on 18 November 2020 (Tabelog; July 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Between Kawaramachi and Kiyamachi, north of Shijo — alley shop',
    cuisine: 'Horumon and yakiniku open till 3 a.m., with a wine cellar to choose bottles from (2025–2026 reviews) · horumon: ago (jaw) ¥400, tetchan, omasum, mountain-chain tripe, trachea, liver; chicken sashimi (2025–2026 reviews) · beef: thick-cut and thin-sliced tongue, Angus harami grilled whole then sliced, kalbi, yukhoe, sukiyaki-style beef (2025–2026 reviews) · negi salad; Korean cold noodles to finish; red wine ¥500 (2025–2026 reviews) · about ¥4,000–6,000 (Tabelog; 2025–2026 reviews)',
    website: null, gmaps: gm('ホルモン処 じゃまん 河原町'), menu_url: null,
    notes: '[Horumon yakiniku · between Kawaramachi and Kiyamachi, till 3 a.m.] A roomy late-night horumon shop in an alley, busy past midnight: cheap jaw meat and tetchan, thick tongue, a whole Angus harami, chicken sashimi and cold noodles, with bottles from a wine cellar. Counter for solo diners, an upper floor for groups. Smoking allowed at least in part.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a horumon yakiniku shop that moved to its present address on 18 November 2020. Reviewers in 2025–2026 describe a long-running late-night shop, more spacious after the move, with a wine cellar.',
      philosophy: null, specialty: 'Ago (jaw meat); Angus harami.',
      anecdotes: [
        { text: 'A February 2025 regular from before the move finds the new shop more spacious and clean, and orders the ago every time.', source: R + 'B501844734/' },
        { text: 'A January 2026 diner was struck by the Angus harami, so large it is grilled whole and then sliced.', source: R + 'B522147694/' },
        { text: 'An October 2026 work party used the hidden third-floor space for groups of 10 or more and was told drinks could be brought in.', source: R + 'B538453087/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉・ホルモン・居酒屋、中京区備前島町309-1、河原町駅が最寄り、毎日 18:00〜翌3:00、不定休、12月31日・1月1日休み、予約可、チャージなし、カード可、電子マネー・QR 不可、38席 (テーブル26、カウンター12)、分煙、2020年11月18日移転。口コミ (2025年2月〜2026年10月、英語): 河原町通と木屋町通の間の路地、移転後は広くきれい、深夜も満席、ワインセラーからボトルを選べる、アゴ肉400円、テッチャン、センマイ、ウルテ、レバー、鶏刺し、厚切りタン、薄切りタン、アンガスのハラミ、カルビ、ユッケ、すき焼き風、ねぎサラダ、冷麺、赤ワイン500円、店内喫煙可との声 (2026年4月)、10名以上は3階の席、飲み物の持ち込み可との声 (2026年10月)。',
      confidence: 'medium', sources: [TB, R + 'B501844734/', R + 'B503939820/', R + 'B508652956/', R + 'B509304321/', R + 'B519144434/', R + 'B522147694/', R + 'B527962903/', R + 'B533655719/', R + 'B535770857/', R + 'B538453087/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter for solo diners; open late; cards only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区備前島町309-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.006096, 135.769835); cross-checked: GSI 京都府京都市中京区備前島町309番地 (lot) 24 m; nearest Kyoto record 63 m away; ${TODAY}`,
  }, { verified: 'Moved about 6 m south by the integrator (2026-11-07) off kyoto_motsuden_kawaramachi (same building 309-1, 2F), whose Tabelog point is 1.8 m away. provisional', confidence: 'low', sources: [R + 'B535770857/'],
    price_note: 'Prices from a September 2026 review (before tax).', last_checked: TODAY, items: [
      it('', '', 'Ago (jaw meat)', '¥400', 'Horumon', 'ask', 'no', 'September 2026.', 'ago'),
      it('', '', 'Red wine (glass)', '¥500', 'Drinks', 'gf', 'ask', 'September 2026.', 'red_wine'),
    ] }, {
    cuisine: 'ワインセラーからボトルを選べる、深夜3時までのホルモンと焼肉の店 (2025〜2026年の口コミ)・ホルモン: アゴ肉400円、テッチャン、センマイ、ウルテ、レバー、鶏刺し (2025〜2026年の口コミ)・牛: 厚切りと薄切りのタン、丸ごと焼いて切るアンガスのハラミ、カルビ、ユッケ、すき焼き風 (2025〜2026年の口コミ)・ねぎサラダ、締めに冷麺、赤ワイン500円 (2025〜2026年の口コミ)・4,000〜6,000円ほど (食べログ、2025〜2026年の口コミ)',
    neighborhood: '四条の北、河原町通と木屋町通の間の路地',
    gf_detail: 'グルテンフリー不可。たれの焼肉、すき焼き風の牛肉、冷麺 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ホルモンと焼肉の店 (2025〜2026年の口コミ)。',
    notes: '[ホルモン焼肉・河原町と木屋町の間、深夜3時まで] 路地の広い深夜のホルモンの店で、0時過ぎもにぎわう。安いアゴ肉やテッチャン、厚切りタン、丸ごとのアンガスのハラミ、鶏刺し、冷麺を、ワインセラーのボトルとともに。1人はカウンター、団体は上の階へ。少なくとも一部は喫煙可。',
  });
}

save();
