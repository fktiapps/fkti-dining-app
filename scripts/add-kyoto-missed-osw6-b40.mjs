// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 40.
//   + 両川 RYOSEN (dashi-led small restaurant behind the Manga Museum; Yutaka Matsushige’s favourite, Karasuma Oike)
//   + Restaurant 信 Restaurant Shin (couple-run French with Kyoto farm vegetables, Teramachi Takeyamachi)
//   + 京料理 先斗町 富美家 Kyoryori Pontocho Fumiya (Kyoto cuisine and yuba with a kawadoko, Pontocho)
//   + 先斗町 四季 よし菜 Pontocho Shiki Yoshina (Kyoto kaiseki and tofu with a kawadoko; no bookings from outside Japan —
//     listed per Greg's 2026-11-05 ruling, policy quoted, flagged)
//   Same-name counts first, per brand or operator (2026-11-06): 両川 — one. Restaurant 信 — one (data's 富小路 信 is a
//   different restaurant). 富美家 — one; the udon shops 冨美家 (Nishiki and elsewhere) are a different business. よし菜 — one.
//   Taken on 2026-11-06: `next core 200` (lane) gave 両川 26002120 and Restaurant 信 26018374; `next notable 200` (lane) gave
//   富美家 26002618 and よし菜 26000704. None is in data/kyoto.json: grep by name and address (蛸薬師町293, 久遠院前町667-1 —
//   shared with kyoto_takeyamachi_mita — 先斗町歌舞練場南隣, 若松町141-1) found none.
//   Service charges per Tabelog's Japanese original: Restaurant 信 「サービス料、チャージ料なし」; 富美家 「ディナー:10%
//   ランチ:なし 共に床席料は頂いておりません。」; よし菜 「サービス料５％頂いております。※コース料金には含まれております。」;
//   両川 none in the charge field, but its reservation notes (English) say ¥200 is added to the course fee. No halal claims;
//   no owner deaths in the sources.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-40');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 両川
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26002120/'; const R = TB + 'dtlrvwlst/';
  const OF = 'http://ryosen-kyoto.jp/';
  const MO = day(['18:00', '22:00']); const WK = day(['11:30', '13:30'], ['18:00', '22:00']); const SA = day(['17:00', '22:00']);
  put({
    id: 'kyoto_ryosen', name: '両川 (RYOSEN)', category: 'OMNI',
    lat: 35.012219, lng: 135.757842, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Dashi and soy-seasoned dishes, a kombu soy for sashimi, mapo tofu and pasta at lunch (2026 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cooking built on dashi, with mackerel, eel, beef and chicken. The course has included a vegan tom yum soup (September and October 2026), so ask.',
    hours_raw: 'Lunch Tue–Fri 11:30–13:30, no lunch reservations; dinner Mon–Fri 18:00–22:00, Sat, holidays and the days before and after holidays 17:00–22:00; closed Sunday, and dinner is closed on the 1st and 3rd Monday; may close early when food runs out (Tabelog). Dinner is hard to book — reserve through the website, Ikkyu or Instagram (March and June 2026); call for parties of 5 or more (Tabelog). Tabelog’s reservation notes say ¥200 is added to the course fee as a service charge. Cards, e-money and QR (Tabelog). 14 seats: tables for 8, a counter for 6 (Tabelog). Non-smoking; children 10 and over only (Tabelog). Dish photos may not be posted on social media (September 2026). In a townhouse on Oshikoji west of Muromachi, behind the Kyoto International Manga Museum; 225 m from Karasuma Oike Stn (Tabelog). Opened 25 November 2004 (Tabelog).',
    hours: { 0: MO, 1: WK, 2: WK, 3: WK, 4: WK, 5: SA }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Oshikoji Muromachi, behind the Manga Museum — 225 m from Karasuma Oike Stn',
    cuisine: 'Simmered dishes and seasonal cooking built on a carefully made dashi, with sake and wine (Tabelog, shop text; March 2026) · the "Netflix course" of dishes from the show — chicken and vegetable soup, kanpachi sashimi with house kombu soy, the signature stew, squid with yomogi miso, a vegan tom yum, eel, beef, RYOSEN mapo tofu, simmered mackerel — about ¥9,000 (July and October 2026) · saba-ni (simmered mackerel), praised by the actor Yutaka Matsushige (February 2026) · weekday lunch: oyakodon set, curry with obanzai sides (April–October 2026) · Japanese sake and craft beer (October 2026)',
    website: OF, gmaps: gm('両川 RYOSEN 京都 押小路'), menu_url: OF,
    notes: '[Small kitchen · Karasuma Oike, the actor’s Kyoto favourite] A townhouse restaurant behind the Manga Museum where the owner explains every dashi: simmered mackerel, kanpachi with kombu soy, mapo tofu and a vegan tom yum on a course of about ¥9,000. Long a favourite of the actor Yutaka Matsushige, who brought it to a Netflix series, so dinner is hard to book; weekday lunch (oyakodon, curry) is walk-in. Over-10s only; closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), who explains the dashi at the table (March 2026)'], origin: null,
      background: 'Per Tabelog (shop text): a small restaurant in a townhouse on Oshikoji Muromachi, open since 2004, prizing its simmered dishes and seasonal cooking with sake and wine. Reviews from February–October 2026 say it is a long-time favourite of the actor 松重豊 (Yutaka Matsushige), who featured it on a Netflix series; a June 2026 review says the actor has been coming since the owner’s mother ran a small restaurant called "Ichiraku".',
      philosophy: null, specialty: 'Simmered dishes; dashi; saba-ni.',
      anecdotes: [
        { text: 'A March 2026 couple was served a dashi vegetable soup while the owner explained how the dashi is made.', source: R + 'B524200177/' },
        { text: 'A September 2026 diner asked about social media and was told the menu may be posted but not the dishes; the vegan tom yum, made after much trial and error, impressed.', source: R + 'B535216369/' },
        { text: 'An eighth-visit regular in September 2026 brought colleagues and finally got the simmered dish again; in July the same regular had a Doyo-no-Ushi eel bento.', source: R + 'B513580088/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・日本料理、中京区室町通押小路西入ル蛸薬師町293、烏丸御池駅から225m、昼 火〜金11:30〜13:30 (予約不可)、夜 月〜金18:00〜22:00・土祝17:00〜22:00、日曜休み、夜は第1・第3月曜休み、予約はコース料金に200円のサービス料 (英訳)、カード・電子マネー・QR 可、14席、禁煙、10歳以上、2004年11月25日オープン、炊き物と季節の料理、日本酒とワイン。口コミ (2026年2月〜10月、英語): 松重豊が長年通う店、Netflix の番組、Netflix コース約9,000円 (鶏と野菜のスープ、カンパチの刺身と昆布醤油、看板の煮込み、いかのよもぎ味噌、ヴィーガンのトムヤム、鰻、牛肉、麻婆豆腐、鯖の煮付け)、鯖煮、昼の親子丼やカレー、出汁を説明する店主、料理の写真の SNS 投稿は不可。',
      confidence: 'medium', sources: [TB, OF, R + 'B513580088/', R + 'B523319559/', R + 'B524200177/', R + 'B527183808/', R + 'B529882822/', R + 'B530483201/', R + 'B532054460/', R + 'B535216369/', R + 'B535324523/', R + 'B536764291/', R + 'B537442647/', R + 'B538367338/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book dinner well ahead online or via Instagram; lunch is walk-in on weekdays; children 10 and over. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区室町通押小路西入ル蛸薬師町293',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.012219, 135.757842); cross-checked: GSI 京都府京都市中京区蛸薬師町293番地 (lot) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536764291/', R + 'B532054460/'],
    price_note: 'Course price about ¥9,000 (October 2026); ¥200 course surcharge (Tabelog notes).', last_checked: TODAY, items: [
      it('', '', 'Netflix course', '¥9,000', 'Dinner', 'ask', 'no', 'About ¥9,000 (October 2026).', 'netflix_course'),
      it('', '', 'Saba-ni (simmered mackerel)', '', 'Dinner', 'ask', 'no', 'February and October 2026.', 'saba_ni'),
      it('', '', 'Oyakodon set', '', 'Lunch', 'ask', 'no', 'April and June 2026.', 'oyakodon'),
      it('', '', 'Vegan tom yum (in the course)', '', 'Dinner', 'ask', 'ask', 'September–October 2026.', 'vegan_tomyum'),
    ] }, {
    cuisine: '丁寧にとった出汁の炊き物と季節の料理を日本酒やワインと (食べログの店の紹介、2026年3月)・番組の料理を出す「Netflix コース」: 鶏と野菜のスープ、自家製昆布醤油のカンパチの刺身、看板の煮込み、いかのよもぎ味噌、ヴィーガンのトムヤム、鰻、牛肉、両川の麻婆豆腐、鯖の煮付けで約9,000円 (2026年7月・10月)・松重豊が絶賛した鯖煮 (2026年2月)・平日の昼: 親子丼のセット、おばんざい付きのカレー (2026年4月〜10月)・日本酒とクラフトビール (2026年10月)',
    neighborhood: '押小路室町、マンガミュージアムの裏。烏丸御池駅から225m',
    gf_detail: '要確認。出汁と醤油の料理、刺身の昆布醤油、麻婆豆腐、昼はパスタも (2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。出汁が基本で、鯖、鰻、牛肉、鶏も。コースにヴィーガンのトムヤムが入ったこともある (2026年9月・10月) ので相談を。',
    notes: '[小さな料理屋・烏丸御池、俳優が通う京都の店] マンガミュージアム裏の町家の店。店主が出汁を説明しながら、鯖の煮付け、昆布醤油のカンパチ、麻婆豆腐、ヴィーガンのトムヤムなど約9,000円のコースを出す。俳優の松重豊が長年通い、Netflix の番組でも紹介したため夜は予約困難。平日の昼 (親子丼、カレー) は予約なしで。10歳以上、日曜休み。',
  });
}

// ================================================================ Restaurant 信
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26018374/'; const R = TB + 'dtlrvwlst/';
  const OF = 'http://www.kyoto-shin.jp/';
  const H = day(['11:30', '14:30'], ['18:00', '21:00']);
  put({
    id: 'kyoto_restaurant_shin', name: 'Restaurant 信 (Restaurant Shin)', category: 'OMNI',
    lat: 35.016074, lng: 135.767199, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. French courses opening with a mini burger, with sauces, mousses and plated desserts (2025–26 reviews); no gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Vegetable-led courses from contracted Kyoto farms, but fish and meat mains and dairy desserts (2025–26 reviews).',
    hours_raw: 'Lunch 11:30–14:30, dinner 18:00–21:00; closed Monday; open over New Year (Tabelog). Reservations accepted, and dinner can be hard to book (Tabelog; May 2025). No service or cover charge (Tabelog, Japanese text: 「サービス料、チャージ料なし」). Cards, Rakuten Edy and QR (Tabelog). 12 seats; non-smoking (Tabelog). Children, a kids menu and strollers welcome (Tabelog). In a machiya-style room on Teramachi south of Takeyamachi, near the Imperial Palace; 8 min from Jingu-Marutamachi Stn (Tabelog; October 2026). Opened 18 July 2011 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Teramachi Takeyamachi, by the Imperial Palace — 8 min from Jingu-Marutamachi Stn',
    cuisine: 'French cooking around freshly picked organic Kyoto vegetables (Tabelog, shop text) — pesticide-free produce from contracted farms in Sonobe (October 2026) · courses that open with a mini burger amuse-bouche (2025–26 reviews) · lunch with a double main of fish and meat (November 2025); chef’s recommended dinner course and anniversary courses (June 2025) · fish and mussels with sakura-shrimp mousse and ratatouille (March 2026) · a dessert where warm sauce melts a white-chocolate dome over fruit (August 2025) · caffeine-free drinks on request (March 2026)',
    website: OF, gmaps: gm('Restaurant 信 京都 寺町'), menu_url: OF,
    notes: '[French · Teramachi by the Imperial Palace, a couple’s 12-seat room] A warm little French restaurant in a white-and-wood machiya, run by a couple, cooking pesticide-free vegetables from Sonobe farms into colourful courses — a mini-burger amuse, sakura-shrimp mousse, a melting white-chocolate dessert. Lunch and dinner courses suit anniversaries; children welcome. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed), running the restaurant with a partner as a couple (April 2026)'], origin: null,
      background: 'Per the official site: not a high-end image of French dining but a warm, comfortable French restaurant full of the chef’s care for ingredients, flavour and hospitality. Per Tabelog: opened 18 July 2011. An October 2026 review notes pesticide-free vegetables from contracted farms in Sonobe; an April 2026 review describes it as run by a couple.',
      philosophy: 'Special encounters through ingredients, flavour and hospitality (official site).', specialty: 'Vegetable-led French courses.',
      anecdotes: [
        { text: 'An April 2026 couple celebrated a wedding anniversary at a place passed many times without realising it was French.', source: R + 'B527723198/' },
        { text: 'A March 2026 party arrived very late, and the staff stayed calm and even arranged caffeine-free drinks.', source: R + 'B523629911/' },
        { text: 'A May 2025 family found out only afterwards that it is hard to book, and enjoyed every dish.', source: R + 'B512921030/' },
      ],
      japanese_sources_summary: '公式サイト: 高級フレンチのイメージではなく、素材、味、おもてなしにシェフの想いがあふれる温かく心地よいフレンチ。食べログ: フレンチ・ヨーロッパ料理・野菜料理、中京区寺町竹屋町下る久遠院前町667-1、神宮丸太町駅から徒歩8分、昼11:30〜14:30・夜18:00〜21:00、月曜休み、予約可、サービス料・チャージ料なし、カード・楽天Edy・QR 可、12席、禁煙、子供可・キッズメニュー、2011年7月18日オープン、京都の採れたての有機野菜。口コミ (2025年5月〜2026年10月、英語): ミニバーガーのアミューズ、魚と肉のダブルメインの昼のコース、記念日コース、桜海老のムースと魚とムール貝、ラタトゥイユ、白いチョコレートが溶けるデザート、園部の契約農家の無農薬野菜、夫婦で営む、予約が取りにくい。',
      confidence: 'medium', sources: [TB, OF, R + 'B509350192/', R + 'B510170897/', R + 'B511744192/', R + 'B512921030/', R + 'B515721305/', R + 'B520731978/', R + 'B522201375/', R + 'B522258445/', R + 'B523629911/', R + 'B527723198/', R + 'B537655590/', R + 'B538159662/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a lunch or dinner course; family-friendly with a kids menu. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区寺町竹屋町下る久遠院前町667-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.016119, 135.767199); cross-checked: GSI 京都府京都市中京区久遠院前町667番地 (lot) 58m; offset 5 m south of the Tabelog point because kyoto_takeyamachi_mita shares 667-1 and sat 3.1 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B522258445/', R + 'B510170897/'],
    price_note: 'No item prices found; Tabelog’s average budget is ¥15,000–19,999 at dinner and ¥8,000–9,999 at lunch.', last_checked: TODAY, items: [
      it('', '', 'Lunch course (fish and meat mains)', '', 'Lunch', 'ask', 'no', 'November 2025.', 'lunch_course'),
      it('', '', 'Chef’s recommended dinner course', '', 'Dinner', 'ask', 'no', 'June 2025.', 'dinner_course'),
      it('', '', 'Anniversary course', '', 'Dinner', 'ask', 'no', 'June 2025.', 'anniversary_course'),
    ] }, {
    cuisine: '採れたての京都の有機野菜のフランス料理 (食べログの店の紹介)。園部の契約農家の無農薬野菜 (2026年10月)・ミニバーガーのアミューズから始まるコース (2025〜2026年の口コミ)・魚と肉のダブルメインの昼のコース (2025年11月)、シェフおすすめのディナーや記念日のコース (2025年6月)・桜海老のムースの魚とムール貝、ラタトゥイユ (2026年3月)・温かいソースで白いチョコレートが溶けるデザート (2025年8月)・カフェインレスの飲み物にも対応 (2026年3月)',
    neighborhood: '寺町竹屋町、御所の近く。神宮丸太町駅から徒歩8分',
    gf_detail: '要確認。ミニバーガーから始まるフレンチのコースで、ソース、ムース、デザート (2025〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認。契約農家の野菜が中心だが、メインは魚と肉、デザートに乳製品 (2025〜2026年の口コミ)。',
    notes: '[フレンチ・御所近くの寺町、夫婦の12席] 白と木の町家風の小さなフレンチ。夫婦で営み、園部の契約農家の無農薬野菜を色鮮やかなコースに (ミニバーガーのアミューズ、桜海老のムース、白いチョコレートが溶けるデザート)。昼も夜もコースで記念日向き。子供も歓迎。月曜休み。',
  });
}

// ================================================================ 京料理 先斗町 富美家
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26002618/'; const R = TB + 'dtlrvwlst/';
  const OF = 'http://www.pontocho-fumiya.co.jp/';
  const H = day(['11:30', '15:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_pontocho_fumiya', name: '京料理 先斗町 富美家 (Kyoryori Pontocho Fumiya)', category: 'OMNI',
    lat: 35.007759, lng: 135.771107, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto kaiseki with tofu and yuba dishes, hamo and ayu, soy-based broths (2026 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based Kyoto cooking with hamo, ayu, sashimi and beef; even the soy-milk yuba hot pot comes in a course (2026 reviews).',
    hours_raw: 'Lunch 11:30–15:00 (last order 14:30), dinner 17:00–23:00 (last order food 22:00, drinks 22:30); open daily May–September, irregular closures October–April; open over New Year (Tabelog; official site). Kawadoko (river-terrace) seating from 1 May, moved indoors in rain (official site). Reservations by phone or online; the cheapest course is often the Tabelog plan (September 2026). Service charge 10% at dinner, none at lunch, and no kawadoko seat charge (Tabelog, Japanese text: 「ディナー:10% ランチ:なし 共に床席料は頂いておりません。」). Cards; no e-money or QR (Tabelog). 40 seats with private rooms; smoking in the courtyard only (Tabelog). Two doors south of the Pontocho Kaburenjo on the Shijo side; 5 min from Sanjo, Gion-Shijo and Kawaramachi Stns (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'seasonal',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho, by the Kaburenjo — 5 min from Sanjo Stn',
    cuisine: 'Kyoto cuisine and tofu dishes on Pontocho, with kawadoko dining over the Kamo River from May (Tabelog; official site) · soy-milk yuba hot-pot lunch set ¥5,500 (April 2026) · hamo courses — hamo shabu-shabu, grilled ayu (May–September 2026); kawadoko course (June 2026) · a lunch with a tasting of three sakes (May 2026) · a Tabelog-booked course with a drink, sashimi and meat ¥8,800 (September 2026) · lunch around ¥5,000 (September 2026)',
    website: OF, gmaps: gm('京料理 先斗町 富美家'), menu_url: TB + 'dtlmenu/',
    notes: '[Kyoto cuisine · Pontocho, yuba and hamo by the Kamo River] An old Pontocho house next to the Kaburenjo with a summer kawadoko and window rooms over the Kamo River: yuba hot pot, hamo shabu-shabu, grilled ayu and Kyoto kaiseki, from about ¥5,000 at lunch. Reviews are mixed — the setting wins, but some September 2026 diners found insects on the terrace, little hamo and patchy service. 10% service at dinner only.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per the official site: a Pontocho Kyoto-cuisine restaurant with a summer kawadoko, open over New Year, which notes on its site a 75th anniversary (year not stated). Per Tabelog: Kyoto cuisine and tofu dishes, two doors south of the Pontocho Kaburenjo.',
      philosophy: null, specialty: 'Yuba hot pot; hamo dishes; kawadoko dining.',
      anecdotes: [
        { text: 'An August 2026 visitor was led to a private second-floor room with the Kamo River right in front for a hamo lunch.', source: R + 'B533209765/' },
        { text: 'A September 2026 diner asked to move indoors because of insects on the terrace, and found little hamo in a hamo course.', source: R + 'B535595095/' },
        { text: 'An August 2026 diner watched the staff mop the terrace dry when the rain stopped so the kawadoko could open.', source: R + 'B535008612/' },
      ],
      japanese_sources_summary: '公式サイト: 京都 先斗町 富美家 (川床・納涼床)、5月1日から納涼川床、雨天は店内、年末年始も営業、75周年 (年の記載なし)、ネットと電話で予約。食べログ: 日本料理・豆腐料理、中京区先斗町歌舞練場南隣2軒目、三条駅などから徒歩5分、昼11:30〜15:00・夜17:00〜23:00、5〜9月は無休、10〜4月は不定休、予約可、ディナーはサービス料10%、ランチはなし、床席料なし、カード可、40席、個室、喫煙は中庭。口コミ (2026年3月〜9月、英語): 豆乳湯葉鍋の昼のセット5,500円、鱧のしゃぶしゃぶ、焼いた鮎、川床のコース、日本酒3種の飲み比べ、食べログ予約の8,800円のコース、鴨川の眺め、虫や鱧が少ないとの不満も。',
      confidence: 'medium', sources: [TB, OF, R + 'B525296380/', R + 'B526125100/', R + 'B527660278/', R + 'B528586859/', R + 'B528861408/', R + 'B530842608/', R + 'B532996783/', R + 'B533209765/', R + 'B535008612/', R + 'B535291746/', R + 'B535595095/', R + 'B536125134/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a course (the kawadoko in season); ask for a river-view room. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区先斗町歌舞練場南隣2軒目',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.007759, 135.771107); the address gives no lot number ("two doors south of the Kaburenjo"), so not GSI-checked; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B526125100/', R + 'B536125134/'],
    price_note: 'Prices from April and September 2026 reviews; 10% service at dinner (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Soy-milk yuba hot-pot lunch set', '¥5,500', 'Lunch', 'ask', 'no', 'Limited time (April 2026).', 'yuba_nabe'),
      it('', '', 'Tabelog course (drink, sashimi, meat)', '¥8,800', 'Dinner', 'ask', 'no', 'September 2026.', 'tabelog_course'),
      it('', '', 'Hamo course', '', 'Seasonal', 'ask', 'no', 'Summer 2026.', 'hamo_course'),
    ] }, {
    cuisine: '先斗町の京料理と豆腐料理。5月からは鴨川の川床も (食べログ、公式サイト)・豆乳湯葉鍋の昼のセット5,500円 (2026年4月)・鱧のコース (鱧しゃぶ、焼いた鮎) (2026年5月〜9月)、川床のコース (2026年6月)・日本酒3種の飲み比べ付きの昼 (2026年5月)・食べログ予約の、飲み物、刺身、肉の入る8,800円のコース (2026年9月)・昼は約5,000円 (2026年9月)',
    neighborhood: '先斗町、歌舞練場の隣。三条駅から徒歩5分',
    gf_detail: '要確認。豆腐や湯葉、鱧や鮎、醤油の出汁の京料理 (2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。鱧、鮎、刺身、牛肉の出汁の京料理。豆乳湯葉鍋もコースで出る (2026年の口コミ)。',
    notes: '[京料理・先斗町、鴨川のそばで湯葉と鱧] 歌舞練場の隣、夏は川床、鴨川を望む部屋のある先斗町の店。湯葉鍋、鱧しゃぶ、焼いた鮎、京会席を、昼は約5,000円から。口コミは賛否があり、眺めは好評だが、2026年9月には川床の虫、鱧が少ない、接客がいまひとつとの声も。サービス料は夜のみ10%。',
  });
}

// ================================================================ 先斗町 四季 よし菜
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000704/'; const R = TB + 'dtlrvwlst/';
  const OF = 'http://yoshina.net/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_pontocho_shiki_yoshina', name: '先斗町 四季 よし菜 (Pontocho Shiki Yoshina)', category: 'OMNI',
    lat: 35.006782, lng: 135.771241, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto-style kaiseki with tofu, yuba, dengaku and obanzai (2026 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based kaiseki with hamo, ayu and fish (2026 reviews); tofu and yuba dishes are part of courses.',
    hours_raw: 'BOOKINGS FROM OUTSIDE JAPAN ARE NOT ACCEPTED. The official site says: 「日本国外からまたはホテルの電話番号や直接ご連絡の取れないお電話番号、メールアドレスでのご予約は出来ません。日本語のみ対応可」 — no reservations from outside Japan, or from hotel phone numbers or numbers and emails that cannot be reached directly; Japanese only. Dinner 17:00–23:00 (last order 22:15); special lunches 12:30–14:30 on set days, for 4 or more, courses only, booked 3 days ahead; closed irregularly — see the official site (Tabelog; official site). Phone bookings 13:00–15:00 (Tabelog). Kaiseki and the winter hot-pot course need booking 3 days ahead (official site). Seat requests (river view, private room for two, terrace position) are not taken (Tabelog). Kawadoko from May to 15 October, indoors in bad weather (Tabelog). Service charge 5%, included in course prices (Tabelog, Japanese text: 「サービス料５％頂いております。※コース料金には含まれております。」). Cards, e-money and QR incl. Alipay and WeChat Pay (Tabelog). 60 seats: counter, tables, private rooms, an 11-seat kawadoko (Tabelog). Entirely non-smoking; children under 10 by arrangement (Tabelog). Fourth house past Pontocho Park toward Sanjo, river side; 5 min from Sanjo Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho, by Pontocho Park — 5 min from Sanjo Stn',
    cuisine: 'Kyoto-style kaiseki with a monthly menu, and a winter hot-pot course (official site) · seasonal courses with hamo, ayu and dengaku (August 2026) · tofu, yuba, fish and obanzai dishes with Kyoto sake (September 2026) · a counter where the chefs cook in front of you (August and September 2026) · kawadoko dining over the Kamo River from May to mid-October (Tabelog; 2026 reviews)',
    website: OF, gmaps: gm('先斗町 四季 よし菜'), menu_url: OF,
    notes: '[Kyoto kaiseki · Pontocho, tofu and a river terrace — no bookings from outside Japan] A Pontocho house with a live-kitchen counter, private rooms and a kawadoko over the Kamo River, serving monthly Kyoto kaiseki, tofu and yuba dishes and a winter hot pot. The official site states that it does not accept reservations from outside Japan or from hotel phone numbers, and handles bookings in Japanese only. Dinner from 17:00.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per the official site and Tabelog: a Pontocho Kyoto-cuisine restaurant with a kawadoko, monthly Kyoto-style kaiseki and a winter hot-pot course; it does not take reservations from outside Japan or from hotel phone numbers, and bookings are in Japanese only.',
      philosophy: null, specialty: 'Kyoto-style kaiseki; tofu and yuba.',
      anecdotes: [
        { text: 'An August 2026 diner enjoyed the stylish chef’s live cooking at the counter and found the prices reasonable for the setting.', source: R + 'B533206193/' },
        { text: 'A September 2026 group caught in rain on the terrace were quickly brought umbrellas by the staff, and the rain soon stopped.', source: R + 'B536161315/' },
        { text: 'A September 2026 party had a seating mix-up on a kawadoko booking, and the staff moved the party to the terrace.', source: R + 'B535462982/' },
      ],
      japanese_sources_summary: '公式サイト: 京風会席 (月替わり、3日前までに予約)、冬季限定のお鍋のコース、日にち限定の昼の特別営業 (4名から、コースのみ、3日前までに予約)、日本国外からまたはホテルの電話番号や直接連絡の取れない電話番号・メールアドレスでの予約は不可、日本語のみ対応。食べログ: 日本料理・居酒屋、中京区先斗町通三条下ル2若松町141-1、三条駅から徒歩約5分、17:00〜23:00 (L.O. 22:15)、昼12:30〜14:30 (予約のみ)、不定休、電話予約は13:00〜15:00、席の指定不可、川床は5月〜10月15日、サービス料5% (コース料金に含む)、カード・電子マネー・QR 可、60席 (川床11席)、全面禁煙、10歳未満は要相談。口コミ (2026年8月〜10月、英語): 鱧、鮎、田楽の季節のコース、豆腐、湯葉、おばんざい、目の前で料理するカウンター、川床、雨の日に傘を出してくれた。',
      confidence: 'medium', sources: [TB, OF, R + 'B533206193/', R + 'B533443187/', R + 'B533719359/', R + 'B534395234/', R + 'B535462982/', R + 'B535681827/', R + 'B536066493/', R + 'B536161315/', R + 'B536385384/', R + 'B537233042/', R + 'B537293631/', R + 'B538394331/'] },
    cultural_comfort: { level: 'japanese', note: 'The shop does not accept bookings from outside Japan or from hotel phone numbers, and handles reservations in Japanese only (official site) — book from a Japanese phone number, in Japanese, between 13:00 and 15:00.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町通三条下ル2若松町141-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.006782, 135.771241); cross-checked: GSI 京都府京都市中京区若松町141番地 (lot) 44m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [OF],
    price_note: 'No item prices found; Tabelog’s average budget is ¥6,000–7,999; 5% service included in course prices.', last_checked: TODAY, items: [
      it('', '', 'Kyoto-style kaiseki (monthly)', '', 'Dinner', 'ask', 'no', 'Book 3 days ahead (official site).', 'kyofu_kaiseki'),
      it('', '', 'Winter hot-pot course', '', 'Seasonal', 'ask', 'no', 'Book 3 days ahead (official site).', 'nabe_course'),
    ] }, {
    cuisine: '月替わりの京風会席と冬季限定のお鍋のコース (公式サイト)・鱧、鮎、田楽の季節のコース (2026年8月)・豆腐、湯葉、魚、おばんざいを京都の地酒と (2026年9月)・目の前で料理人が調理するカウンター (2026年8月・9月)・5月〜10月中旬は鴨川の川床 (食べログ、2026年の口コミ)',
    neighborhood: '先斗町、先斗町公園のそば。三条駅から徒歩5分',
    gf_detail: '要確認。豆腐、湯葉、田楽、おばんざいの入る京風の会席 (2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。鱧、鮎、魚の出汁の会席 (2026年の口コミ)。豆腐や湯葉もコースの一品。',
    notes: '[京会席・先斗町、豆腐と川床 — 日本国外からの予約は不可] 料理人が目の前で調理するカウンター、個室、鴨川の川床のある先斗町の店。月替わりの京風会席、豆腐や湯葉、冬は鍋のコース。公式サイトによると、日本国外やホテルの電話番号からの予約は受け付けず、予約は日本語のみ。夜は17時から。',
  });
}

save();
