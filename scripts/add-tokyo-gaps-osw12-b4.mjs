// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles), circle `ueno`, lane osw12, batch 4.
//   + 全席個室居酒屋 食べ放題 かなで 上野本店 Kanade (all-private-room, all-you-can-eat-and-drink izakaya; opened July 2022)
//   + 伊豆の味 そうだら Izu no Aji Soudara (17-seat Shizuoka black-oden izakaya run by one owner; opened June 2022)
//   + 中国料理 喜羊門 上野店 Kiyomon (northern Chinese, charcoal-roast lamb leg carved at the table; opened September 2018)
//   + すし処 漁美 上野店 Sushidokoro Isaribi (10-seat Edomae sushi counter, moved from 亀有 in 2024)
// Chain check. Kanade: 上野本店 plus a Tennoji shop (gurunavi page titles in search results; not opened) — two shops, kept.
//   Soudara: one shop. Kiyomon: gurunavi lists 中国料理 喜羊門 上野店 and a 中国料理 喜羊門 near Yushima Stn (search results;
//   not opened) — two shops, kept. Isaribi: one shop, run by 株式会社時流定石 (newscast.jp release, 23 October 2025).
//   (ファイヤーチキン 上野入谷店 13268713 is next in the queue: its own site lists 上野入谷店 and 菊川店 and recruits franchisees.)
// Dedupe: none is in data/tokyo.json by name, Tabelog id or address (上野4-8-9, 上野6-6-4, 上野2-12-1, 東上野2-2-9); no placeholder
//   at those addresses. Kiyomon (上野2-12-1 セントラル21ビル) is a different building from Nobuchan (tokyo_nobuchan_ueno,
//   address_ja "東京都台東区上野2-12-4 レインボータワービル 1F").
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw12-4');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 全席個室居酒屋 食べ放題 かなで 上野本店
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13273005/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['16:00', '23:30']); const WE = day(['11:00', '23:30']);
  put({
    id: 'tokyo_kanade_ueno', name: '全席個室居酒屋 食べ放題 かなで 上野本店 (Kanade)', category: 'OMNI',
    lat: 35.709749, lng: 139.773938, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: all-you-can-eat courses built on tempura, kara-age, sushi with sweet sauces, yakitori, motsunabe, fried rice and cake; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tuna, yellowtail, meat sushi, yakitori and oden courses. Tabelog\'s listing ticks "vegetarian options" and "halal options" but names no dish.',
    hours_raw: 'Daily 11:00–16:00 and 16:00–23:30 (last order 23:00); open all year. Weekday lunch only by reservation for groups of four or more; Sat, Sun and holidays open from 11:00 (Tabelog). Same-day reservations welcome. 96 seats, all in private rooms for 2 to 80. Heated-tobacco area only. Cards, e-money and QR (including Alipay and WeChat Pay). School-age children welcome, at adult course prices. Opened 1 July 2022 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ueno 4-chōme, 3F of a building near Ameyoko — 2 min from JR Ueno Stn; 1 min from Keisei Ueno Stn',
    cuisine: 'All-private-room izakaya built around all-you-can-eat-and-drink courses (Tabelog, coupon prices, tax included): 150-item course with tuna, yellowtail, sushi and yakitori, 3-hour drinks ¥4,000 (listed ¥5,000); 140-item course with meat sushi, motsunabe and charcoal yakitori, 2.5-hour drinks ¥3,500 (¥4,500); 160-item course with tuna, yellowtail and beef tongue ¥5,000 (¥6,000) · tuna described on the listing both as "directly from Tsukiji Market" and as seafood "direct from Toyosu" · dishes in 2026 reviews: edamame, smashed cucumber with seafood, seafood salad, five-kind sashimi, seafood and vegetable tempura, oden, grilled black-wagyu skirt, meat sushi (duck, roast beef), chicken hot pot, kara-age, fried rice, cake',
    website: null, gmaps: gm('かなで 上野本店 上野4-8-9'), menu_url: TB + 'dtlmenu/',
    notes: "[Izakaya · Ueno, all-you-can-eat in private rooms by Ameyoko] A third-floor izakaya two minutes from Ueno Station where every table is a private room with a door, from two-seat rooms to a hall for 80. It runs on all-you-can-eat-and-drink courses from ¥3,500: tuna and yellowtail, sushi, seared meat sushi, charcoal-grilled yakitori, motsunabe and oden, with 2.5 to 3 hours of drinks. Diners in September and October 2026 liked the private rooms, quick early dishes and the five-kind sashimi, tempura and black-wagyu skirt; others found the highballs weak, the entrance hard to find, and that new orders wait until the last ones are finished; drinks can be slow at weekend peaks. Same-day bookings taken.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 July 2022 (Tabelog)', background: 'A corporate-member Tabelog listing; no source names the operator or chef.', philosophy: null, specialty: 'All-you-can-eat tuna, sushi and yakitori courses; private rooms.',
      anecdotes: [
        { text: '"We enjoyed a fantastic all-you-can-eat and drink course featuring a wide variety of dishes, including edamame, salad, oden, sashimi, sushi, tempura, and grilled Wagyu outside skirt." — October 2026, second visit.', source: R + 'B533914290/' },
        { text: '"There were moments during peak weekend hours when it took a bit longer to order drinks and dishes. However, the staff\'s response during calls was bright and courteous." — October 2026.', source: R + 'B537798707/' },
        { text: '"It\'s an all-you-can-eat and all-you-can-drink place, but you have to finish your initial order before you can add more… The drinks, especially the highballs, were a bit weak." — October 2026.', source: R + 'B538413567/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 全席個室居酒屋 食べ放題 かなで 上野本店、上野4-8-9 3F B、JR上野駅から徒歩2分、京成上野駅から徒歩1分、毎日11:00〜16:00・16:00〜23:30 (L.O.23:00)、年中無休、平日の昼は4名以上の予約のみ、当日予約可、96席 (全席個室、2〜80名)、加熱式たばこのみの喫煙所、カード・電子マネー・QR可、小学生以上の子ども可 (コースは大人と同料金)、2022年7月1日オープン、まぐろ・寿司・炭火焼き鳥の150品食べ飲み放題 (3時間) 4,000円、肉寿司・もつ鍋・炭火焼き鳥の140品 (2.5時間) 3,500円、まぐろ・ぶり・牛タンの160品5,000円 (クーポン価格)、まぐろはTsukiji Market 直送とも Toyosu 直送とも書かれている。口コミ(2026年9月〜10月): 個室でまわりを気にせず話せる、枝豆、たたききゅうりと魚介、海鮮サラダ、刺身5種、天ぷら、おでん、黒毛和牛のハラミ、鴨やローストビーフの肉寿司、鶏鍋、唐揚げ、チャーハン、ケーキ、ハイボールが薄い、入口がわかりにくい、前の注文を食べ終えないと追加できない、週末の混む時間は注文が遅れる。',
      confidence: 'medium', sources: [TB, R + 'B514552446/', R + 'B533914290/', R + 'B535165200/', R + 'B535165438/', R + 'B535505433/', R + 'B536420438/', R + 'B536471548/', R + 'B537798707/', R + 'B538413567/', R + 'B538488590/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by calling staff to the private room; no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区上野4-8-9 3F B',
    existence: { status: 'confirmed', checked: TODAY, note: 'Corporate-member Tabelog listing; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区上野四丁目8番9号 (go) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from the Tabelog listing (coupon prices, tax included; list prices in the notes).', last_checked: TODAY, items: [
      it('', '', '150-item all-you-can-eat course (tuna, yellowtail, sushi, yakitori), 3-hour drinks', '¥4,000', 'Course', 'no', 'no', 'Tabelog; listed ¥5,000.', 'course_150'),
      it('', '', '140-item all-you-can-eat course (meat sushi, motsunabe, yakitori), 2.5-hour drinks', '¥3,500', 'Course', 'no', 'no', 'Tabelog; listed ¥4,500.', 'course_140'),
      it('', '', '160-item all-you-can-eat course (tuna, yellowtail, beef tongue), 3-hour drinks', '¥5,000', 'Course', 'no', 'no', 'Tabelog; listed ¥6,000.', 'course_160'),
    ] }, {
    cuisine: '食べ飲み放題のコースが中心の全席個室の居酒屋 (食べログ、クーポン価格、税込み): まぐろ、ぶり、寿司、焼き鳥の150品のコース、3時間飲み放題4,000円 (通常5,000円)、肉寿司、もつ鍋、炭火焼き鳥の140品、2.5時間飲み放題3,500円 (4,500円)、まぐろ、ぶり、牛タンの160品5,000円 (6,000円)・まぐろは店の紹介で「Tsukiji Market 直送」とも「Toyosu 直送」とも書かれている・2026年の口コミに出てくる料理: 枝豆、たたききゅうりと魚介、海鮮サラダ、刺身5種、魚介と野菜の天ぷら、おでん、黒毛和牛のハラミ、肉寿司 (鴨、ローストビーフ)、鶏鍋、唐揚げ、チャーハン、ケーキ',
    neighborhood: '上野四丁目、Ameyoko 近くのビルの3階。JR上野駅から徒歩2分、京成上野駅から徒歩1分',
    gf_detail: 'グルテンフリーではありません。食べ放題のコースは天ぷら、唐揚げ、甘いたれの寿司、焼き鳥、もつ鍋、チャーハン、ケーキなど。グルテンフリーの説明はありません。',
    vegan_detail: 'ヴィーガンではありません。まぐろ、ぶり、肉寿司、焼き鳥、おでんのコース。食べログには「ベジタリアンメニューあり」「ハラールメニューあり」の印があるが、料理名は書かれていません。',
    notes: '[居酒屋・上野、Ameyoko そばの個室で食べ放題] 上野駅から2分、ビルの3階にある居酒屋で、2人用から80名の広間まで全席が扉付きの個室。中心は3,500円からの食べ飲み放題のコースで、まぐろとぶり、寿司、炙りの肉寿司、炭火の焼き鳥、もつ鍋、おでんに2.5〜3時間の飲み放題が付く。2026年9月〜10月の口コミでは個室、最初の料理の早さ、刺身5種、天ぷら、黒毛和牛のハラミが好評。一方でハイボールが薄い、入口がわかりにくい、前の注文を食べ終えないと追加できない、週末の混む時間は飲み物が遅いという声も。当日予約可。',
  });
}

// ================================================================ 伊豆の味 そうだら
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13273189/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://izunoaji-soudara.jp';
  const D = day(['17:00', '23:00']);
  put({
    id: 'tokyo_izu_no_aji_soudara_ueno', name: '伊豆の味 そうだら (Izu no Aji Soudara)', category: 'OMNI',
    lat: 35.708835, lng: 139.775905, cuisine_type: 'oden',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the Shizuoka oden is simmered in one pot of tamari-soy and beef-tendon broth that also holds chikuwa-bu, kuruma-fu and other wheat-based items, and the menu has tempura (sakura-shrimp kakiage) and fried black hanpen.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the oden broth is made with beef tendon and finished with fish powder and bonito flakes; the rest of the menu is fish, beef, venison and chicken.',
    hours_raw: 'Mon–Sat 17:00–23:00; closed Sundays and holidays (Tabelog). Reservations taken, including for one; two-person table bookings may be moved to the counter. Table charge ¥300. 17 seats: a 5-seat counter and two tables for six (Tabelog); full with about 15–16 people in October 2026. Non-smoking. Cards, e-money and PayPay. Children welcome. Run by one person, so service can be slow when full (October 2026 reviews). Opened 20 June 2022 (Tabelog). The official site (izunoaji-soudara.jp) did not load on 1 November 2026.',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ueno 6-chōme, DUKEビル 2F, on the Ameyoko side — 1 min from Ueno-Okachimachi Stn exit A8; 3 min from JR Okachimachi Stn',
    cuisine: 'Shizuoka cooking and local sake: black Shizuoka oden in a dark, sweet broth of tamari soy and beef tendon, topped with fish powder (Tabelog; reviews) · oden ¥220 a piece — daikon (three days in the pot), beef tendon, egg, chikuwa-bu, black hanpen, shirataki knots, konnyaku, ganmo, chikuwa, white hanpen, atsuage, grilled tofu, naruto, kombu; mochi kinchaku ¥250; kuruma-fu ¥480 on the menu (about ¥450 in an October 2026 review); truffle cabbage roll ¥480; platters of 3/5/7 ¥660/¥1,100/¥1,470; oden chazuke ¥690 (Tabelog menu, June 2025) · Izu beef, Izu venison, dried kinmedai and Ito himono, sakura-shrimp kakiage, raw shirasu in the sashimi, shirasu ajillo, pickled wasabi stems, a wasabi rice bowl to finish · Izu no Aji course with five oden, himono and wasabi bowl ¥3,500 (Tabelog) · Shizuoka sake (Isojiman, Kaiun, Eikawa, Masayuki), green-tea highball, mikan liqueur',
    website: SITE, gmaps: gm('伊豆の味 そうだら 上野6-6-4'), menu_url: TB + 'dtlmenu/',
    notes: "[Oden · Okachimachi, Shizuoka black oden from a one-person counter] A small second-floor izakaya by Ameyoko, with a wooden counter and handmade tables, where one owner cooks food from Shizuoka and Izu. The draw is Shizuoka oden: dark from tamari soy and beef tendon, sweet and gentle rather than salty, dusted with fish powder, at ¥220 a piece (daikon, beef tendon, black hanpen, chikuwa-bu and more). Around it come Izu beef and venison, fresh shirasu in the sashimi, sakura-shrimp kakiage, dried kinmedai, pickled wasabi stems and a wasabi rice bowl, with Shizuoka sakes and a green-tea highball. Diners in October 2026 found the owner quiet at first but warm and careful; with one person cooking, service slows when the 17 seats fill. A ¥3,500 course covers the classics. Closed Sundays and holidays.",
    chef_bio: { chef_name: null, roles: ['Owner, runs the shop alone (October 2026 reviews)'], origin: 'Opened 20 June 2022 (Tabelog)', background: 'Tabelog\'s listing (corporate member) describes the shop as serving ingredients and local sake from Shizuoka Prefecture. October 2026 reviews say one owner runs it alone ("managed by a single chef"; "The owner runs the place by himself"; "Despite being run by a single person"). No source names the owner.', philosophy: null, specialty: 'Shizuoka black oden; Izu ingredients.',
      anecdotes: [
        { text: '"The cozy restaurant had five counter seats and two tables, managed by a single chef. After about 30 minutes, two groups arrived, and after 60 minutes, the place was fully booked." — October 2026, first visit.', source: R + 'B536744745/' },
        { text: '"The signature Oden is reasonably priced at JPY 220 per skewer, with unique options like rolled cabbage and carum (a type of wheat gluten) priced around JPY 450." — October 2026.', source: R + 'B537240819/' },
        { text: '"The Shizuoka oden, despite its dark color, had a surprisingly mild and gentle flavor… I also added pickled wasabi stems and grilled black hanpen." — October 2026.', source: R + 'B537404773/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 伊豆の味 そうだら、上野6-6-4 DUKEビル 2F、御徒町駅から徒歩3分、月〜土17:00〜23:00、日祝休み、お通し代300円、17席 (カウンター5、6名のテーブル2)、禁煙、カード・電子マネー・PayPay 可、子ども可、2022年6月20日オープン、Shizuoka の食材と地酒、名物は Shizuoka おでん (見た目は黒いが甘く濃いだし)、牛すじ、黒はんぺん、大根、Isojiman などの地酒、Izu の牛肉と鹿肉、コース3,500円。メニュー (2025年6月): おでん各220円 (大根は3日、ほかは2日かけて仕込む)、もち巾着250円、車麩480円、トリュフ香るロールキャベツ480円、盛り合わせ3本660円・5本1,100円・7本1,470円、おでん茶漬け690円、だしはたまり醤油と牛すじ。口コミ(2026年10月): 店主が一人で切り盛り、最初は無愛想に見えたが丁寧で帰りには笑顔、刺身の盛り合わせ (たこ、かつお、たちうお、まぐろ、生しらす、こはだ)、魚粉とかつお節、牛すじ、車麩 (約450円という人も)、おでん茶漬け、わさび丼、緑茶ハイ、桜えびのかき揚げ、しらすのアヒージョ、わさび漬け、黒はんぺんのフライ、金目鯛の干物、Izu 牛の炙り、みかん酒、一人なので満席だと提供が遅い。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B536744745/', R + 'B537073668/', R + 'B537083676/', R + 'B537240819/', R + 'B537404773/', R + 'B537410465/', R + 'B537416822/', R + 'B537422227/', R + 'B538037949/', R + 'B538351575/'] },
    cultural_comfort: { level: 'japanese', note: 'One owner runs the counter; no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都台東区上野6-6-4 DUKEビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Corporate-member Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区上野六丁目6番4号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'dtlmenu/', R + 'B537240819/', TB],
    price_note: 'Prices from the Tabelog menu (updated 5 June 2025, tax included) and October 2026 reviews; table charge ¥300.', last_checked: TODAY, items: [
      it('', '', 'Shizuoka oden, per piece (daikon, beef tendon, black hanpen and more)', '¥220', 'Oden', 'no', 'no', 'Tabelog menu; ¥220 in an October 2026 review.', 'oden_piece'),
      it('', '', 'Shizuoka oden platter, 5 pieces', '¥1,100', 'Oden', 'no', 'no', 'Tabelog menu; 3 pieces ¥660, 7 ¥1,470.', 'oden_5'),
      it('', '', 'Kuruma-fu (wheat-gluten ring) oden', '¥480', 'Oden', 'no', 'no', 'Tabelog menu (2025); about ¥450 in an October 2026 review.', 'kurumafu'),
      it('', '', 'Shizuoka oden chazuke', '¥690', 'Rice', 'no', 'no', 'Tabelog menu.', 'oden_chazuke'),
      it('', '', 'Izu no Aji course: five oden, himono, wasabi rice bowl and more', '¥3,500', 'Course', 'no', 'no', 'Tabelog.', 'course'),
    ] }, {
    cuisine: 'Shizuoka の料理と地酒: たまり醤油と牛すじの黒く甘いだしで煮て魚粉をかける Shizuoka おでん (食べログ、口コミ)・おでん1個220円: 大根 (3日かけて仕込む)、牛すじ、玉子、ちくわぶ、黒はんぺん、結びしらたき、こんにゃく、がんも、ちくわ、白はんぺん、厚揚げ、焼き豆腐、なると、昆布。もち巾着250円、車麩はメニューで480円 (2026年10月の口コミでは約450円)、トリュフ香るロールキャベツ480円、盛り合わせ3本660円・5本1,100円・7本1,470円、おでん茶漬け690円 (食べログのメニュー、2025年6月)・Izu の牛肉と鹿肉、金目鯛と Ito の干物、桜えびのかき揚げ、刺身に生しらす、しらすのアヒージョ、わさび漬け、締めのわさび丼・おでん5種、干物、わさび丼の「伊豆の味コース」3,500円 (食べログ)・Shizuoka の地酒 (Isojiman、Kaiun、Eikawa、Masayuki)、緑茶ハイ、みかん酒',
    neighborhood: '上野六丁目、DUKEビル 2F、Ameyoko 側。上野御徒町駅A8出口から徒歩1分、JR御徒町駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。Shizuoka おでんはたまり醤油と牛すじのだしの一つの鍋で煮て、ちくわぶや車麩など小麦の具も入る。桜えびのかき揚げや黒はんぺんのフライもある。',
    vegan_detail: 'ヴィーガンではありません。おでんのだしは牛すじを使い、魚粉とかつお節をかける。ほかの料理も魚、牛肉、鹿肉、鶏。',
    notes: '[おでん・御徒町、店主一人のカウンターの Shizuoka 黒おでん] Ameyoko そばの2階の小さな居酒屋で、木のカウンターと手作りのテーブル。店主が一人で Shizuoka と伊豆の料理を作る。目当ては Shizuoka おでんで、たまり醤油と牛すじで黒いが、しょっぱくなく甘くやさしい味。魚粉をかけて1個220円 (大根、牛すじ、黒はんぺん、ちくわぶなど)。ほかに Izu の牛肉と鹿肉、刺身の生しらす、桜えびのかき揚げ、金目鯛の干物、わさび漬け、締めのわさび丼、Shizuoka の地酒や緑茶ハイ。2026年10月の口コミでは、店主は最初は無口だが温かく丁寧で、一人で作るので17席が埋まると提供は遅くなる。定番がそろう3,500円のコースも。日曜・祝日休み。',
  });
}

// ================================================================ 中国料理 喜羊門 上野店
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13225970/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '15:00'], ['17:00', '23:00']);
  put({
    id: 'tokyo_kiyomon_ueno', name: '中国料理 喜羊門 上野店 (Kiyomon)', category: 'OMNI',
    lat: 35.709672, lng: 139.773098, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The roast lamb leg and grilled lamb are seasoned with spices, but nothing is described as gluten-free; the menu also has meat pies, stir-fries and dressed cold dishes whose sauces are not described.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog\'s listing ticks "vegetarian options", and the menu (2022) lists cold vegetable dishes such as celery and ginkgo salad, black-vinegar wood-ear mushrooms, garlic broccoli and cucumber, shredded potato and dried-tofu salad, but their dressings are not described; the kitchen is built around lamb.',
    hours_raw: 'Daily 11:00–15:00 and 17:00–23:00 (last order 22:15); open all year (Tabelog). Reservations taken; order the roast lamb leg when booking, as it can sell out (August 2026). A service charge on à la carte orders, none on courses; courses are paid in cash only (Tabelog). 90 seats with a room for 8; non-smoking, but the room gets smoky from table grilling (September 2026). Cards (including UnionPay), PayPay, Rakuten Pay, Alipay, WeChat Pay; no e-money. Children welcome. English and Chinese menus with photos. Opened 21 September 2018 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ueno 2-chōme, セントラル21ビル 5F, at the corner by Ueno Park — 3 min from JR Ueno Stn Shinobazu exit',
    cuisine: 'Northern Chinese cooking from a chef from Jilin Province, centred on lamb (Tabelog) · whole lamb leg roasted over charcoal, shown at the table, then carved and finished on the table grill — enough for three or four (November 2025; order ahead) · lamb shoulder with ribs, tongue and heart, rabbit, sausages, meat pies (2025–2026 reviews) · lunch sets with salad, soup, almond tofu and a drink: weekly lunch such as liver and chive stir-fry ¥900, cumin lamb ¥1,300; lamb soup with offal ¥1,200 (July–September 2026) · cold dishes ¥790–1,490 on the Tabelog menu (2022) · Chinese spirits · all-you-can-drink courses for 4 to 90',
    website: null, gmaps: gm('中国料理 喜羊門 上野店 上野2-12-1'), menu_url: TB + 'dtlmenu/',
    notes: "[Chinese · Ueno, charcoal-roast lamb leg on the fifth floor] A big, designer-furnished room on the fifth floor of a corner building by Ueno Park, with city views, cooking northern Chinese food from a chef from Jilin Province. The star is a whole lamb leg roasted over charcoal: it is brought out for a photo, carved at the table and finished on the grill, crisp outside, juicy and barely gamey inside, and big enough for three or four. It sells out, so order it when you book (August 2026). There is also lamb shoulder, tongue and heart, rabbit, sausages, meat pies and cold dishes; at lunch, huge cumin-lamb (¥1,300) or weekly ¥900 sets come with salad, soup, almond tofu and a drink. Expect smoke from the grills. Course bills are cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 21 September 2018 (Tabelog)', background: 'Per Tabelog\'s listing (corporate member), the recipes come from a chef from Jilin Province, and the room uses wallpaper and chairs by a well-known designer. No source names the chef or operator.', philosophy: '"Enjoy the performance of cutting right in front of the customer" (Tabelog).', specialty: 'Charcoal-roast lamb leg; cumin lamb.',
      anecdotes: [
        { text: '"We ordered the lamb leg, which is featured in the cover photo. Just look at this!… The presentation is impressive, and you definitely want to enjoy it right in front of you." — November 2025.', source: R + 'B517854644/' },
        { text: '"I was looking forward to trying the lamb leg, but it seemed to be sold out for the day… The staff mentioned, \'You should have ordered it when making the reservation…\'" — August 2026.', source: R + 'B517854644/' },
        { text: '"I ordered the liver and bean sprout stir-fry from the weekly lunch special for JPY 900, while my friend chose the cumin stir-fried lamb for JPY 1300. Both dishes were incredibly generous." — July 2026.', source: R + 'B529223759/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 中国料理 喜羊門 上野店、上野2-12-1 セントラル21ビル 5F、JR上野駅不忍口から徒歩3分、毎日11:00〜15:00・17:00〜23:00 (L.O.22:15)、年中無休、サービス料あり (コースはなし)、コースの支払いは現金のみ、90席、8名の個室、禁煙、カード (銀聯も)・PayPay・楽天ペイ・Alipay・WeChat Pay 可、子ども可、英語・中国語の写真付きメニュー、2018年9月21日オープン、Jilin 出身の料理人のレシピ、目の前で切り分けるパフォーマンス、有名デザイナーの壁紙と椅子。メニュー (2022年): 冷菜790〜1,490円 (セロリと銀杏、黒酢のきくらげ、にんにくのブロッコリーやきゅうり、じゃがいもの細切り、干し豆腐のサラダなど)。口コミ(2025年9月〜2026年10月): 炭火の羊のもも焼きは外がカリッと中はジューシーで臭みがない、3〜4人分の大きさ、写真のあとで切り分ける、予約のときに頼まないと売り切れる、羊の肩とあばら、タンやハツ、うさぎ、ソーセージ、肉のパイ、ランチは週替わり900円 (レバーの炒め物) やクミンの羊炒め1,300円 (サラダ、スープ、杏仁豆腐、ドリンク付き)、羊のスープ1,200円、焼くと煙で服ににおいがつく、上野の眺め。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B514210425/', R + 'B517854644/', R + 'B529223759/', R + 'B532639012/', R + 'B533493061/', R + 'B535063695/', R + 'B535514595/', R + 'B535747158/', R + 'B536416389/', R + 'B537992529/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists an English menu with photos; staff carve and grill the lamb at the table.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区上野2-12-1 セントラル21ビル 5F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Corporate-member Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区上野二丁目12番1号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B529223759/', R + 'B533493061/', TB + 'dtlmenu/'],
    price_note: 'Lunch prices from July–September 2026 reviews; cold dishes from the Tabelog menu (updated 27 September 2022, tax included).', last_checked: TODAY, items: [
      it('', '', 'Charcoal-roast lamb leg, carved at the table (serves 3–4)', '', 'Lamb', 'ask', 'no', 'Reviews 2025–2026; order when booking.', 'lamb_leg'),
      it('', '', 'Cumin stir-fried lamb lunch set', '¥1,300', 'Lunch', 'ask', 'no', 'July and September 2026.', 'cumin_lamb'),
      it('', '', 'Weekly lunch set (e.g. liver and chive stir-fry)', '¥900', 'Lunch', 'ask', 'no', 'July 2026.', 'weekly_lunch'),
      it('', '', 'Lamb soup with offal', '¥1,200', 'Lunch', 'ask', 'no', 'August 2026.', 'lamb_soup'),
      it('', '', 'Celery and ginkgo salad', '¥890', 'Cold dishes', 'ask', 'ask', 'Tabelog menu, 2022.', 'celery_ginkgo'),
    ] }, {
    cuisine: 'Jilin 出身の料理人による羊肉が中心の中国北方の料理 (食べログ)・炭火で焼く羊のもも丸ごと。席で見せてから切り分け、テーブルの網で仕上げる。3〜4人分 (2025年11月、予約時に注文を)・あばら付きの羊の肩、タン、ハツ、うさぎ、ソーセージ、肉のパイ (2025〜2026年の口コミ)・サラダ、スープ、杏仁豆腐、ドリンク付きのランチ: レバーとにらの炒め物などの週替わり900円、クミンの羊炒め1,300円、もつ入りの羊のスープ1,200円 (2026年7月〜9月)・冷菜は790〜1,490円 (食べログのメニュー、2022年)・中国の酒・4〜90名の飲み放題付きコース',
    neighborhood: '上野二丁目、セントラル21ビル 5F、上野公園そばの角。JR上野駅不忍口から徒歩3分',
    gf_detail: '要確認。羊のもも焼きや羊の焼き物はスパイスで味付けするが、グルテンフリーの説明はありません。肉のパイ、炒め物、たれの中身が書かれていない冷菜もある。',
    vegan_detail: '要確認。食べログには「ベジタリアンメニューあり」の印があり、メニュー (2022年) にはセロリと銀杏のサラダ、黒酢のきくらげ、にんにくのブロッコリーやきゅうり、じゃがいもの細切り、干し豆腐のサラダなどの冷菜があるが、たれの中身は書かれていません。店は羊肉が中心。',
    notes: '[中華・上野、5階で炭火の羊のもも焼き] 上野公園そばの角のビルの5階、有名デザイナーの内装の広い店で、街の眺めもいい。Jilin 出身の料理人の中国北方の料理を出す。主役は炭火で焼く羊のもも丸ごとで、写真用に運ばれてから席で切り分け、網で仕上げる。外はカリッと中はジューシーで臭みが少なく、3〜4人分の大きさ。売り切れるので予約のときに頼むこと (2026年8月)。羊の肩、タン、ハツ、うさぎ、ソーセージ、肉のパイ、冷菜も。昼はクミンの羊炒め (1,300円) や週替わり900円の大盛りのセットに、サラダ、スープ、杏仁豆腐、ドリンクが付く。焼くので煙が出る。コースの支払いは現金のみ。',
  });
}

// ================================================================ すし処 漁美 上野店
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13300688/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://sushidokoro-isaribi.jp/'; const PR = 'https://newscast.jp/news/3500886';
  const D = day(['12:00', '14:00'], ['18:00', '22:00']);
  put({
    id: 'tokyo_sushidokoro_isaribi_ueno', name: 'すし処 漁美 上野店 (Sushidokoro Isaribi)', category: 'MOM_AND_POP',
    lat: 35.709525, lng: 139.781851, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nigiri and sashimi may suit if soy sauce and tsume are swapped, but nothing is described as gluten-free; courses include small dishes and tempura (shiso-wrapped white fish, September 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an Edomae sushi omakase; the starters use fish and dashi (siphon dashi, dobin-mushi).',
    hours_raw: 'Daily 12:00–14:00 and 18:00–22:00; closing days vary (Tabelog). Reservations taken; a booking is cancelled if you have not arrived or called 15 minutes after the time. 10 counter seats; private hire for 8–14. Service charge 10% at dinner (included in dinner courses). Non-smoking. Cards (including UnionPay), e-money and PayPay. Children only if able to manage the full course; please avoid strong perfume (Tabelog). Menus in English, Chinese and Korean. Opened in Ueno on 11 October 2024 (Tabelog), after 11 years in 亀有 (press release, October 2025).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Ueno 2-chōme, 川島ビル 1F, on a quiet stretch of Kiyosubashi Street — 2 min from Inaricho Stn; 4 min from Shin-Okachimachi Stn',
    cuisine: 'Edomae sushi with natural bluefin tuna from a Toyosu wholesaler (Tabelog gives the name as "Yama Ko" and "Yamakou"), fish aged for umami, and local sake chosen by a sake-sommelier owner (Tabelog; press release) · lunch: seasonal omakase of 12 nigiri with a small dish, tamagoyaki, soup and dessert ¥5,500 (April–August 2026) · dinner: 15-piece seasonal omakase with small dishes ¥12,100; 12 nigiri with a mini kaiseki of 25 items ¥18,150; the same with five-sake pairing and free-flow drinks ¥24,200 (Tabelog, tax and service included); the October 2025 press release gave dinner "from ¥16,000" · a birthday course with sparklers and music (July 2026)',
    website: SITE, gmaps: gm('すし処 漁美 上野店 東上野2-2-9'), menu_url: null,
    notes: "[Sushi · Inaricho, a ten-seat counter from a 35-year sushi chef] A quiet ten-seat counter between Inaricho and Shin-Okachimachi, which moved here in October 2024 after eleven years in 亀有. The owner, 小野口精准, has made sushi for 35 years and holds a sake-sommelier qualification; the shop's course text says the chef trained in Ginza, Akasaka, Roppongi and Kansai. Natural bluefin tuna comes from a Toyosu wholesaler, other fish are aged, and the lunch omakase of 12 nigiri with a small dish, chestnut tamagoyaki, soup and dessert is ¥5,500; dinner courses run ¥12,100–24,200 with sake pairings. Diners in 2026 praised the chef's warm, chatty hospitality and the tuna and uni; one August 2026 lunch guest left disappointed. Birthdays get sparklers and music.",
    chef_bio: { chef_name: '小野口精准', roles: ['Owner and sushi chef; sake sommelier (kikisake-shi) (press release, 23 October 2025)', 'Representative director of 株式会社時流定石, which runs the shop (press release)'], origin: null,
      background: 'A sushi chef for 35 years (press release; Tabelog course text). Tabelog\'s course text says the techniques were honed in Ginza, Akasaka, Roppongi and Kansai. The shop ran in 亀有 for 11 years and moved to Ueno in 2024 (press release); Tabelog gives 11 October 2024 as the Ueno opening day. In October 2025 the shop marked one year in Ueno with an "all-inclusive sushi experience" offered through Makuake (press release). The press release gives the owner\'s name in kana as おのぐちせいじ; no romaji is given.',
      philosophy: '"The ingredients are aged to maximize their umami flavor and are served at the perfect moment" (Tabelog).', specialty: 'Bluefin tuna nigiri; sake pairing.',
      anecdotes: [
        { text: '"This sushi restaurant feels more like a cozy, welcoming place rather than a high-end sushi spot… What stands out the most is the overflowing hospitality." — July 2026.', source: R + 'B532251616/' },
        { text: '"I think the value for JPY 5500 is excellent. It includes 12 pieces of sushi, an appetizer, tamagoyaki (Japanese omelet), miso soup, and dessert. The tamagoyaki was sweet and delicious, with chestnuts mixed in." — July 2026.', source: R + 'B532799741/' },
        { text: '"I had high expectations since it included sea urchin, but it seems I may have set my hopes too high… There were some concerns, so I might refrain from visiting again." — August 2026.', source: R + 'B534325689/' },
      ],
      japanese_sources_summary: 'プレスリリース (newscast.jp、2025年10月23日): 株式会社時流定石 (台東区、代表取締役 小野口精准、2015年11月設立) が運営する「すし処 漁美 (いさりび)」、東京・亀有で11年にわたり愛され、2024年に上野へ移転、上野移転1周年記念に Makuake で“オールインクルーシブ鮨体験”、寿司職人歴35年・利き酒師の店主 小野口精准 (おのぐちせいじ)、ランチ5,500円〜／夜は16,000円〜。食べログ (店舗会員): 東上野2-2-9 川島ビル 1F、稲荷町駅から徒歩2分、毎日12:00〜14:00・18:00〜22:00、定休日は変動、カウンター10席、ディナーはサービス料10%、禁煙、カード・電子マネー・PayPay 可、2024年10月11日オープン、Toyosu の仲卸の天然本まぐろ、熟成させた魚、利き酒師が選ぶ地酒、夜の旬のおまかせ握り15貫12,100円、握り12貫と旬の小会席25品18,150円、地酒5種のペアリング付き24,200円、Ginza・Akasaka・Roppongi・Kansai で修業した35年の技。口コミ(2026年2月〜9月): 昼の旬のおまかせ握り5,500円 (12貫、小鉢、玉子焼き、汁、甘味)、栗入りの玉子焼き、まぐろとうに、話し好きで温かい大将、誕生日の花火と音楽、8月には期待外れだったという声。',
      confidence: 'medium', sources: [TB, SITE, PR, R + 'B501421629/', R + 'B522583885/', R + 'B526163089/', R + 'B527703364/', R + 'B528178412/', R + 'B531573083/', R + 'B532251616/', R + 'B532799741/', R + 'B534325689/', R + 'B534787742/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists menus in English, Chinese and Korean; the chef talks with guests at the counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区東上野2-2-9 川島ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Corporate-member Tabelog listing; press release of 23 October 2025; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区東上野二丁目2番9号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B532799741/', PR],
    price_note: 'Dinner course prices from the Tabelog listing (tax and service included); lunch price from 2026 reviews. The October 2025 press release gave lunch from ¥5,500 and dinner from ¥16,000.', last_checked: TODAY, items: [
      it('', '', 'Lunch seasonal omakase: 12 nigiri, small dish, tamagoyaki, soup, dessert', '¥5,500', 'Lunch', 'ask', 'no', 'April–August 2026 reviews; press release (October 2025).', 'lunch_omakase'),
      it('', '', 'Dinner: 15-piece seasonal omakase nigiri with small dishes', '¥12,100', 'Dinner', 'ask', 'no', 'Tabelog.', 'dinner_15'),
      it('', '', 'Dinner: 12 nigiri with a seasonal mini kaiseki (25 items)', '¥18,150', 'Dinner', 'ask', 'no', 'Tabelog.', 'dinner_kaiseki'),
      it('', '', 'Dinner with five-sake pairing and free-flow drinks', '¥24,200', 'Dinner', 'ask', 'no', 'Tabelog.', 'dinner_pairing'),
    ] }, {
    cuisine: 'Toyosu の仲卸の天然本まぐろ (食べログの英訳では "Yama Ko"・"Yamakou")、旨みを引き出す熟成の魚、利き酒師の店主が選ぶ地酒の江戸前寿司 (食べログ、プレスリリース)・昼: 握り12貫に小鉢、玉子焼き、汁、甘味の旬のおまかせ5,500円 (2026年4月〜8月)・夜: 小鉢付きの旬のおまかせ握り15貫12,100円、握り12貫と旬の小会席25品18,150円、それに地酒5種のペアリングと飲み放題が付いて24,200円 (食べログ、税・サービス料込み)。2025年10月のプレスリリースでは夜は「16,000円〜」・誕生日のコースは花火と音楽付き (2026年7月)',
    neighborhood: '東上野二丁目、川島ビル 1F、Kiyosubashi Street の静かな一角。稲荷町駅から徒歩2分、新御徒町駅から徒歩4分',
    gf_detail: '要確認。握りや刺身は醤油やツメを替えれば合うかもしれないが、グルテンフリーの説明はありません。コースには小鉢や天ぷら (大葉で巻いた白身魚、2026年9月) もある。',
    vegan_detail: 'ヴィーガンではありません。江戸前寿司のおまかせで、先付も魚とだし (サイフォンのだし、土瓶蒸し)。',
    notes: '[寿司・稲荷町、寿司職人歴35年の10席のカウンター] 稲荷町と新御徒町の間にある静かな10席のカウンターで、亀有で11年続いたあと2024年10月にここへ移った。店主の小野口精准さんは寿司職人歴35年の利き酒師で、店のコースの説明では Ginza、Akasaka、Roppongi、Kansai で修業したという。天然本まぐろは Toyosu の仲卸から、ほかの魚は熟成させて出す。昼のおまかせは握り12貫に小鉢、栗入りの玉子焼き、汁、甘味で5,500円。夜のコースは12,100〜24,200円で地酒のペアリングも。2026年の口コミでは大将の温かく話し好きなもてなしと、まぐろやうにが好評。2026年8月には昼に期待外れだったという人も。誕生日は花火と音楽で祝う。',
  });
}

save();
