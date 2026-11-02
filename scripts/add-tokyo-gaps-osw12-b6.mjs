// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles), circle `ueno`, lane osw12, batch 6.
//   + Kotetsu (13-seat wine-and-cheese bar by Ueno Stn Iriya exit; Kobe beef tendon stew; opened 2019)
//   + 純米酒専門 粋酔 上野店 Junmaishu Senmon Suisui (junmai sake from all 47 prefectures; by Shitaya Shrine; opened 2013)
//   + キエチュード Quietude (18-seat French restaurant run by chef Eiro Araki and the chef's wife; opened 2015) — MOM_AND_POP
//   + プティ ボヌール Petit Bonheur (16-seat French-Italian bistro with horse-meat dishes and natural wines; opened 2012)
// Skipped (see skip()): 純米酒舗 上野 猩々 (closing 28 Nov 2026 to relocate), 天海 上野駅前店 (坊's group chain),
//   鳥物語 上野店 (chain), 焼肉ここから 上野アメ横店 (chain).
// Chain check. Kotetsu: one shop. Suisui: Ueno plus a Nihonbashi shop (Tabelog remarks link 13169597) — two shops, kept.
//   Quietude: one shop. Petit Bonheur: one shop.
// Dedupe: none is in data/tokyo.json by name, Tabelog id or address (上野7-8-23, 東上野3-35-9, 東上野3-35-1, 東上野1-15-1).
//   Quietude's 鈴木ビル (東上野3-35-1) is not coucou!'s (tokyo_coucou_wine_bar_higashiueno, address_ja "東京都台東区東上野3-25-2
//   鈴木ビル 1F"): different street numbers.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw12-6');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13298569', 'closing: 純米酒舗 上野 猩々 — Tabelog notice "Scheduled to close on November 28, 2026" because the building is to be demolished; the shop plans to relocate and will announce the new address on social media. Revisit after the move.');
skip('13308838', 'chain: 天海 上野駅前店 is run by 有限会社坊\'s (its website bou-zu.com, linked from the Tabelog listing), which describes itself as "FC含めグループ100店舗出店中" with shops in Aichi, Gifu, Mie, Shizuoka, Shiga, Kyoto and Tokyo — a rapidly expanding chain.');
skip('13264534', 'chain: 鳥物語 上野店 is one of several 鳥物語 private-room yakitori izakaya — gurunavi lists 渋谷店, 川崎店 and 錦糸町 (page titles in search results, not opened).');
skip('13305781', 'chain: 焼肉ここから 上野アメ横店 is one of several 焼肉ここから shops — 錦糸町本店, 浜松町店, 高知店 (Tabelog 39006267) and others in search results (not opened).');

// ================================================================ Kotetsu
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13235611/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:00', '23:30']); const S = day(['17:00', '22:00']);
  put({
    id: 'tokyo_kotetsu_ueno', name: 'Kotetsu', category: 'OMNI',
    lat: 35.714033, lng: 139.779096, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Cheese, cured meats, roast duck, salad and the Kobe beef tendon stew are on the menu, but nothing is described as gluten-free; courses come with all-you-can-eat baguette, pasta and pizza.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Carrot râpé, the salad of the day and French fries are on the course menus, but how they are made is not stated; most dishes are cheese, ham, salami, sausage or beef.',
    hours_raw: 'Mon–Fri 17:00–23:30 (last order 23:00); Sat and the day before a holiday 17:00–22:00 (last order 21:30); closed Sundays, except when Monday is a holiday (then open Sunday and closed Monday); other closures possible (Tabelog). Reservations taken. No service or table charge. 13 seats: a 5-seat counter and two tables for four (Tabelog); a June 2025 diner counted a counter for four. Smoking allowed (2024–2025 reviews mention it too). Cards, e-money and PayPay. English menu. Opened 15 June 2019 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: S }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ueno 7-chōme, ground floor of サットンプレイスホテル, on Showa Street toward Uguisudani — 2 min from JR Ueno Stn Iriya exit',
    cuisine: 'Wine-and-cheese bar with over 30 wines chosen by a sommelier and craft beers (Tabelog) · signature Kobe beef tendon stewed and topped with cheese and a soft-boiled egg; shrimp and octopus ajillo with baguette; cheese platter; Camembert dip; pizza and pasta · courses with all-you-can-drink (Tabelog, coupon prices, tax included): Kotetsu course of 11 dishes, 2 hours, ¥3,600 (listed ¥4,600); autumn course of 12 dishes ¥3,800; monthly course of 13 dishes, 2.5 hours with sparkling wine ¥4,800 — each with prosciutto, salami, roast duck, carrot râpé, two cheeses, salad, sausage, pasta and all-you-can-eat baguette · reviewers paid ¥3,700 (June 2025) and ¥3,500 (August 2025) for all-you-can-drink courses · drinks about ¥600 (September 2026)',
    website: null, gmaps: gm('Kotetsu 上野7-8-23 サットンプレイスホテル'), menu_url: TB + 'dtlmenu/',
    notes: "[Wine bar · Ueno, cheese and Kobe beef tendon by the Iriya exit] A small wine-and-cheese bar on the ground floor of a hotel on Showa Street, two minutes from Ueno Station's Iriya exit and away from the crowds. A sommelier picks over 30 wines, with craft beer and sparkling wine in the all-you-can-drink courses. The house dish is Kobe beef tendon stewed and topped with melted cheese and a soft-boiled egg, eaten with bottomless baguette; there are also shrimp and octopus ajillo, cheese platters, Camembert dip, pizza and pasta. Courses with two hours of drinks run about ¥3,500–4,800. Reviewers call it good value rather than fancy; one September 2026 diner watched the master cook and serve while keeping an eye on every table. Smoking is allowed.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 June 2019 (Tabelog)', background: 'A corporate-member Tabelog listing describing a wine-and-cheese shop curated by a sommelier. A September 2026 review mentions "the master cooking and serving". No source names the owner.', philosophy: null, specialty: 'Kobe beef tendon stew with cheese; ajillo; cheese.',
      anecdotes: [
        { text: '"I enjoyed the all-you-can-drink course, which includes sparkling wine and craft beer. The platter featured prosciutto, Iberico pork salami, roasted duck, carrot rapé, and two types of cheese." — March 2025.', source: R + 'B503019282/' },
        { text: '"However, since it\'s a smoking establishment, it was a bit tough for me as someone who isn\'t fond of smoke." — June 2025, ¥3,700 course.', source: R + 'B508605744/' },
        { text: '"It was reassuring to see the master cooking and serving while attentively monitoring our pace." — September 2026.', source: R + 'B535064165/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): Kotetsu、上野7-8-23 サットンプレイスホテル 1F、JR上野駅入谷口から徒歩2分、月〜金17:00〜23:30 (L.O.23:00)、土・祝前日17:00〜22:00、日曜休み (月曜が祝日なら日曜営業・月曜休み)、サービス料・チャージなし、13席 (カウンター5、4名のテーブル2)、喫煙可、カード・電子マネー・PayPay 可、英語メニュー、2019年6月15日オープン、ソムリエが選ぶワイン30種以上とクラフトビール、名物はKobe 牛すじの煮込み (チーズと半熟卵のせ)、アヒージョ、チーズの盛り合わせ、ピザとパスタ、飲み放題付きコース: Kotetsu コース11品2時間3,600円 (通常4,600円)、秋の12品3,800円、月替わりの13品2.5時間4,800円。口コミ(2024年9月〜2026年9月): 鴨の燻製、海老とたこのアヒージョ、生ハム、イベリコ豚のサラミ、キャロットラペ、チーズ2種、ソーセージ、ペペロンチーノ、3,700円 (2025年6月) と3,500円 (2025年8月) の飲み放題コース、喫煙可でたばこが苦手な人にはつらい、高級感はないが手頃、ドリンク600円、カマンベールのディップ、マスターが料理と接客をこなす。',
      confidence: 'medium', sources: [TB, R + 'B494214054/', R + 'B501960450/', R + 'B503019282/', R + 'B508605744/', R + 'B511773843/', R + 'B515138723/', R + 'B519523792/', R + 'B528628638/', R + 'B535064165/', R + 'B535606710/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists an English menu; small counter and two tables.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区上野7-8-23 サットンプレイスホテル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Corporate-member Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区上野七丁目8番23号 (go) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B508605744/', R + 'B511773843/'],
    price_note: 'Course prices from the Tabelog listing (coupon prices, tax included) and 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Kotetsu course: 11 dishes with Kobe beef tendon stew, 2-hour drinks', '¥3,600', 'Course', 'no', 'no', 'Tabelog (listed ¥4,600); ¥3,700 in a June 2025 review, ¥3,500 in August 2025.', 'kotetsu_course'),
      it('', '', 'Monthly course: 13 dishes, beef tendon stew or shrimp ajillo, 2.5-hour drinks with sparkling wine', '¥4,800', 'Course', 'no', 'no', 'Tabelog (listed ¥5,800).', 'monthly_course'),
      it('', '', 'Kobe beef tendon stew with cheese and soft-boiled egg', '', 'Dishes', 'ask', 'no', 'Tabelog; May 2026 review.', 'beef_tendon'),
      it('', '', 'Shrimp and octopus ajillo with baguette', '', 'Dishes', 'no', 'no', 'September 2024 and May 2026 reviews.', 'ajillo'),
    ] }, {
    cuisine: 'ソムリエが選ぶ30種以上のワインとクラフトビールのワインとチーズの店 (食べログ)・名物はKobe 牛すじの煮込みにチーズと半熟卵、海老とたこのアヒージョとバゲット、チーズの盛り合わせ、カマンベールのディップ、ピザとパスタ・飲み放題付きコース (食べログ、クーポン価格、税込み): Kotetsu コース11品2時間3,600円 (通常4,600円)、秋の12品3,800円、スパークリング付き2.5時間の月替わり13品4,800円。どれも生ハム、サラミ、鴨のロースト、キャロットラペ、チーズ2種、サラダ、ソーセージ、パスタ、バゲット食べ放題付き・口コミでは飲み放題コースが3,700円 (2025年6月)、3,500円 (2025年8月)・ドリンクは約600円 (2026年9月)',
    neighborhood: '上野七丁目、サットンプレイスホテルの1階、Showa Street の Uguisudani 寄り。JR上野駅入谷口から徒歩2分',
    gf_detail: '要確認。チーズ、生ハム類、鴨のロースト、サラダ、Kobe 牛すじの煮込みはあるが、グルテンフリーの説明はありません。コースにはバゲット食べ放題、パスタ、ピザが付く。',
    vegan_detail: '要確認。コースにはキャロットラペ、日替わりのサラダ、フライドポテトがあるが、作り方は書かれていません。ほとんどの料理はチーズ、ハム、サラミ、ソーセージ、牛肉。',
    notes: '[ワインバー・上野、入谷口そばのチーズとKobe 牛すじ] Showa Street のホテルの1階、上野駅入谷口から2分、にぎわいから少し離れた小さなワインとチーズの店。ソムリエが30種以上のワインを選び、飲み放題のコースにはクラフトビールやスパークリングワインも。名物はKobe 牛すじの煮込みにとろけるチーズと半熟卵をのせた一皿で、バゲットはおかわり自由。ほかに海老とたこのアヒージョ、チーズの盛り合わせ、カマンベールのディップ、ピザ、パスタ。2時間飲み放題付きのコースは約3,500〜4,800円。口コミでは高級感より手頃さの店という評価で、2026年9月にはマスターが料理と接客をこなしながら各テーブルのペースに気を配っていたという声。喫煙可。',
  });
}

// ================================================================ 純米酒専門 粋酔 上野店
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13161267/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:00', '22:30']); const S = day(['17:00', '22:00']);
  put({
    id: 'tokyo_junmaishu_suisui_ueno', name: '純米酒専門 粋酔 上野店 (Junmaishu Senmon Suisui)', category: 'OMNI',
    lat: 35.711412, lng: 139.781165, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The course text invites guests to phone ahead about allergies, and sashimi is on the menu, but nothing is described as gluten-free; the food includes kara-age and deep-fried tofu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sake bar with a seafood kitchen (morning-market fish, bluefin tuna sashimi, kara-age). Tabelog\'s listing ticks "vegetarian options" but names no dish.',
    hours_raw: 'Mon–Fri 17:00–22:30; Sat and the day before a holiday 17:00–22:00; closed Sundays and holidays (Tabelog). Reservations taken; a May 2026 diner waited over 30 minutes past the booking time and cites a cancellation fee of ¥10,000 a head. Appetizer charge ¥550 (none with banquet courses). 38 table seats with semi-private areas for 6–12 behind roll screens. Non-smoking. Cards (including UnionPay), e-money and QR (including Alipay and WeChat Pay). Children welcome, kids\' menu. Opened 23 October 2013 (Tabelog). Not inside atré Ueno: about 8 minutes\' walk along Asakusa-dori, just before the red torii of Shitaya Shrine (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Ueno 3-chōme, アドレ上野 1F, by Shitaya Shrine — 2 min from Inaricho Stn; 8 min from JR Ueno Stn Asakusa exit',
    cuisine: 'Junmai sake from all 47 prefectures, chosen by a sake-sommelier manager, with seafood from the morning market (Tabelog) · the listing gives "over 130 types" in one place and "over 150 varieties" in another; a May 2026 reviewer counted 180 on the all-you-can-drink list · courses with all-you-can-drink: autumn fresh-catch course with 150 minutes of premium and daily sake ¥7,700 (listed ¥8,800); Mon–Thu course with 120 minutes ¥6,600 (Tabelog, tax included) · reviewers paid ¥4,800 for 180 minutes of all-you-can-drink plus snacks (May 2026) and ¥5,000 for a 90-minute course (July 2026) · bluefin tuna sashimi, quail eggs, young-chicken kara-age, deep-fried tofu (2026 reviews) · sake poured from isshobin bottles at the table',
    website: null, gmaps: gm('純米酒専門 粋酔 上野店 東上野3-35-9'), menu_url: TB + 'dtlmenu/',
    notes: "[Sake bar · Higashi-Ueno, junmai from every prefecture by Shitaya Shrine] A sake-lovers' izakaya on Asakusa-dori by the red torii of Shitaya Shrine, open since 2013, pouring only junmai sake from all 47 prefectures — over 130 on one count, 150 on another, 180 on a 2026 reviewer's all-you-can-drink list — chosen by a sake-sommelier manager, with morning-market fish to go with it. Many come for an all-you-can-drink plan or course (about ¥4,800–7,700); staff pour from big isshobin bottles and help newcomers choose. Diners in 2026 loved comparing regional sakes and the tuna sashimi; warn that cups are filled to the brim. One May 2026 group waited over 30 minutes past their booking and was told there was no seat. A sister shop is in Nihonbashi. Closed Sundays and holidays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 23 October 2013 (Tabelog)', background: 'Per Tabelog\'s listing (corporate member), the manager is a certified sake sommelier who selects the junmai sakes. The listing\'s remarks point to a Nihonbashi shop (Tabelog 13169597). The listing\'s English introduction gives the name as "Junmai Shu Senmon Ikisui", while its name field reads "Suisui". No source names the operator or staff.', philosophy: '"We take pride in having the best selection of local sake in Tokyo!" (Tabelog).', specialty: 'Junmai sake from 47 prefectures; all-you-can-drink sake.',
      anecdotes: [
        { text: '"Ordered: All-you-can-drink 180 types of Japanese sake for 4,800 JPY. We also had 3 snacks per person… It was around 8,000 JPY, but we were extremely satisfied." — May 2026.', source: R + 'B529272492/' },
        { text: '"With sake from all 47 prefectures available, we enjoyed picking out drinks from our hometown breweries and trying new ones we had never tasted before." — August 2026, ¥6,600 course.', source: R + 'B534739067/' },
        { text: '"Unfortunately, I ended up waiting outside for over 30 minutes past my reservation time… the cancellation policy (JPY 10,000 per person) made me hesitate." — May 2026.', source: R + 'B480409308/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 純米酒専門 粋酔 上野店、東上野3-35-9 アドレ上野 1F、稲荷町駅から129m、JR上野駅浅草口から Asakusa-dori を8分、Shitaya Shrine の赤い鳥居の手前 (atré Ueno の中ではない)、月〜金17:00〜22:30、土・祝前日17:00〜22:00、日祝休み、お通し代550円 (宴会コースは不要)、38席 (すべてテーブル)、6〜12名のロールスクリーンの半個室、禁煙、カード・電子マネー・QR可、子ども可、キッズメニュー、2013年10月23日オープン、Hokkaido から Okinawa まで47都道府県の純米酒、利き酒師の店長が選ぶ130種以上 (別の箇所では150種以上)、朝市場の鮮魚、150分飲み放題付きの秋の鮮魚コース7,700円 (通常8,800円)、月〜木限定の120分コース6,600円、苦手な食材やアレルギーは電話で相談、Nihonbashi にも店がある。口コミ(2026年5月〜10月): 180種の日本酒飲み放題4,800円とつまみ3品で約8,000円、本まぐろの刺身、うずらの卵、90分の飲み放題コース5,000円、若鶏の唐揚げ、厚揚げ、一升瓶がどのテーブルにも、なみなみ注がれる、予約時間から30分以上待たされ席がなかったという声 (キャンセル料は1人1万円)。',
      confidence: 'medium', sources: [TB, 'https://tabelog.com/tokyo/A1302/A130202/13169597/', R + 'B480409308/', R + 'B528652513/', R + 'B528719542/', R + 'B529272492/', R + 'B531113577/', R + 'B531440371/', R + 'B532916190/', R + 'B534739067/', R + 'B537964959/', R + 'B538342852/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff help choose sake (2026 reviews); no English menu is listed.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Tabelog course text: "If you have any dislikes or allergies regarding the course menu, please feel free to contact us by phone."'] },
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区東上野3-35-9 アドレ上野 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Corporate-member Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区東上野三丁目35番9号 (go) 9m; Quietude (this batch, 東上野3-35-1) is 30 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B529272492/', R + 'B532916190/'],
    price_note: 'Course prices from the Tabelog listing (coupon prices, tax included) and 2026 reviews; appetizer charge ¥550.', last_checked: TODAY, items: [
      it('', '', 'Autumn fresh-catch course with 150 minutes of all-you-can-drink sake', '¥7,700', 'Course', 'ask', 'no', 'Tabelog (listed ¥8,800); 120 minutes on Fri, Sat and before holidays.', 'course_7700'),
      it('', '', 'Mon–Thu course with 120 minutes of all-you-can-drink sake', '¥6,600', 'Course', 'ask', 'no', 'Tabelog; August 2026 review.', 'course_6600'),
      it('', '', 'All-you-can-drink sake, 180 minutes', '¥4,800', 'Drinks', 'ask', 'ask', 'May 2026 review; snacks extra.', 'nomihodai_180'),
    ] }, {
    cuisine: '利き酒師の店長が選ぶ47都道府県の純米酒と、朝市場の魚 (食べログ)・食べログの紹介では「130種以上」とも「150種以上」とも書かれ、2026年5月の口コミでは飲み放題に180種・飲み放題付きコース: 150分のプレミアム・日替わりの日本酒付き秋の鮮魚コース7,700円 (通常8,800円)、月〜木の120分コース6,600円 (食べログ、税込み)・口コミでは180分の飲み放題4,800円とつまみ (2026年5月)、90分のコース5,000円 (2026年7月)・本まぐろの刺身、うずらの卵、若鶏の唐揚げ、厚揚げ (2026年の口コミ)・テーブルで一升瓶から注ぐ',
    neighborhood: '東上野三丁目、アドレ上野 1F、Shitaya Shrine のそば。稲荷町駅から徒歩2分、JR上野駅浅草口から徒歩8分',
    gf_detail: '要確認。コースの説明には苦手な食材やアレルギーは電話で相談とあり、刺身もあるが、グルテンフリーの説明はありません。唐揚げや厚揚げもある。',
    vegan_detail: 'ヴィーガンではありません。魚介の料理の日本酒の店 (朝市場の魚、本まぐろの刺身、唐揚げ)。食べログには「ベジタリアンメニューあり」の印があるが、料理名は書かれていません。',
    notes: '[日本酒・東上野、Shitaya Shrine そばの全国の純米酒] Asakusa-dori 沿い、Shitaya Shrine の赤い鳥居のそばにある日本酒好きの居酒屋で、2013年から。47都道府県の純米酒だけを置き、数は130種以上とも150種以上とも、2026年の口コミでは飲み放題に180種。利き酒師の店長が選び、朝市場の魚を合わせる。飲み放題やコース (約4,800〜7,700円) が人気で、店員が一升瓶から注ぎ、初めての人にも選び方を教えてくれる。2026年の口コミでは地方の酒の飲み比べや本まぐろの刺身が好評で、なみなみ注がれるので注意という声も。2026年5月には予約時間から30分以上待たされ、席がないと言われたグループもいた。Nihonbashi に姉妹店。日曜・祝日休み。',
  });
}

// ================================================================ キエチュード
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13182283/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.alaquietude.com';
  const D = day(['12:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'tokyo_quietude_inaricho', name: 'キエチュード (Quietude)', category: 'MOM_AND_POP',
    lat: 35.711153, lng: 139.781257, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. The menu changes with the day\'s ingredients and allergies can be given by email with the reservation (March 2026 review), but nothing is described as gluten-free; courses include bread, puff-pastry amuse-bouches, gougères, a herb-crumb chicken and tarte tatin.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: set courses of fish and meat with butter and cream sauces; dislikes are asked about at the table (September 2026), but no vegan course is offered.',
    hours_raw: 'Lunch 12:00–15:00 and dinner 18:00–22:00; closed Wednesdays (Tabelog). Online reservations only through the restaurant\'s website; phones may go unanswered during service. Lunch: Menu A or Menu B, one drink each required; booking means Menu B (June 2026 review caption). Dinner is a single course, with a 10% service charge. 18 seats: 6 at the counter, 12 at tables. Non-smoking. Cards (Tabelog says no e-money or QR; a June 2026 lunch guest paid by PayPay). Children welcome; a kids\' plate for children of about 5 by reservation a day ahead. BYO wine possible (Tabelog; July 2026 review). Opened 10 May 2015 (Tabelog).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Ueno 3-chōme, 鈴木ビル 1F, in front of Shitaya Shrine — 2 min from Inaricho Stn; 6 min from JR Ueno Stn',
    cuisine: 'French cooking from seasonal produce across Japan, from Hokkaido to Kumamoto; the menu changes monthly (Tabelog; reviews) · lunch Menu A: salad of Aichi shirasu and Kumamoto vegetables, herb-crumb chicken with demi-glace and butter rice, petit dessert — ¥1,650 (March and June 2026; ¥1,500 in another June 2026 review) · lunch Menu B with fish and meat: ¥4,400 (March and May 2026), ¥4,800 (October 2026) · dinner course about ¥10,000 (May 2026), plus 10% service; Christmas course ¥16,500 (23–26 December) · dishes in 2026: marinated sakura shrimp, sawara with black maitake, Hokkaido pork with demi-glace and ratatouille, turtle soup, sweetfish with burnt butter, venison, tarte tatin, lemon soufflé, peach and pistachio · wines by the glass and many non-alcoholic drinks',
    website: SITE, gmaps: gm('キエチュード 東上野3-35-1'), menu_url: null,
    notes: "[French · Inaricho, a chef-and-wife restaurant facing Shitaya Shrine] A small French restaurant across from Shitaya Shrine, open since 2015, with an open kitchen, a six-seat counter and a few tables. The chef, Eiro Araki, is from Kumamoto, trained at Hiramatsu and Esquisse and abroad (Tabelog lists France, Canada and Morocco), and runs the room with the chef's wife; the name means peace of mind. Seasonal produce from Hokkaido to Kumamoto turns up as a salad of Aichi shirasu and Kumamoto vegetables, sawara with black maitake, roast pork with demi-glace, and desserts such as peach and pistachio or lemon soufflé. Lunch runs from about ¥1,500–1,650 (a salad, chicken with butter rice and a small dessert) to ¥4,400–4,800 with fish and meat; dinner is one course of about ¥10,000. Many diners in 2026 called it superb value; one May 2026 dinner guest found service painfully slow. Families welcome; book on the website.",
    chef_bio: { chef_name: 'Eiro Araki', roles: ['Owner-chef (Tabelog: "Chef Araki, the owner")', 'Runs the restaurant with the chef\'s wife (October 2026 review)'], origin: 'Kumamoto Prefecture (May 2026 review)',
      background: 'Tabelog\'s listing (corporate member): Chef Araki honed skills in Japan, France, Canada and Morocco before opening the restaurant in 2015. A May 2026 review names the chef "Eiro Araki, originally from Kumamoto Prefecture", who trained at establishments such as Hiramatsu and Esquisse and worked in Europe. An October 2026 review: "The restaurant is run by a chef and his wife."', philosophy: '"Enjoy your meal with peace of mind in a calming atmosphere" — Quiétude means peace of mind in French (Tabelog).', specialty: 'Seasonal French courses; desserts.',
      anecdotes: [
        { text: '"They offer two lunch courses: MENU A for JPY 1650, which is reasonably priced for a casual lunch, and MENU B for JPY 4400, allowing you to enjoy both fish and meat as the main dishes." — March 2026.', source: R + 'B525526661/' },
        { text: '"Chef Eiro Araki, originally from Kumamoto Prefecture, honed his skills at establishments like \'Hiramatsu\' and \'Esquisse\'… the service was incredibly slow." — May 2026, dinner.', source: R + 'B528798116/' },
        { text: '"The chef personally asked each group about their drink preferences and any dislikes, and we all started almost simultaneously." — September 2026, weekday lunch.', source: R + 'B536143582/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): キエチュード、東上野3-35-1 鈴木ビル1F、稲荷町駅から徒歩2分、JR上野駅 Showa-dori 口から徒歩6分、12:00〜15:00・18:00〜22:00、水曜休み、ディナーはコースのみでサービス料10%、18席 (カウンター6、テーブル12)、禁煙、カード可 (電子マネー・QRは不可)、子ども可 (5歳くらい向けのお子様プレートは前日までに予約)、持ち込み可、ネット予約は公式サイトのみ、2015年5月10日オープン、オーナーシェフの Araki は日本、フランス、カナダ、モロッコで修業、クリスマスコース16,500円 (12月23〜26日)。口コミ(2026年3月〜10月): Menu A 1,650円 (6月には1,500円という人も)、Menu B 4,400円 (10月は4,800円)、1ドリンク制、予約すると Menu B、愛知県しらすと熊本野菜のサラダ、チキンの香草パン粉焼き 特製デミグラスソースとバターライス、鰆と黒舞茸のロースト、桜えびのマリネ、Hokkaido の豚のデミグラスソースとラタトゥイユ、タートルスープ、鮎の焦がしバター、鹿のソテー、タルトタタン、レモンのスフレ、桃とピスタチオ、アレルギーは予約時にメールで、シェフは Kumamoto 出身で Hiramatsu や Esquisse で修業 (2026年5月の口コミ)、夜の提供がとても遅かったという声、シェフと奥さんで営む店、PayPay で払ったという人も。',
      confidence: 'medium', sources: [TB, SITE, R + 'B525254696/', R + 'B525526661/', R + 'B528787756/', R + 'B528790326/', R + 'B528798116/', R + 'B530878787/', R + 'B531981417/', R + 'B533957519/', R + 'B536143582/', R + 'B537660315/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book on the website; the chef asks about dislikes at the start.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Allergies can be sent by email with the website reservation (March 2026 review); the chef asks each table about dislikes (September 2026 review).'] },
    mom_and_pop: true, loc_precise: true, address_ja: '東京都台東区東上野3-35-1 鈴木ビル1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Corporate-member Tabelog listing (Christmas 2026 course posted); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区東上野三丁目35番1号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B525526661/', R + 'B530878787/', R + 'B537660315/', TB],
    price_note: 'Prices from 2026 reviews and the Tabelog listing (tax included); dinner adds 10% service; one drink per person at lunch.', last_checked: TODAY, items: [
      it('', '', 'Lunch Menu A: shirasu and vegetable salad, herb-crumb chicken with demi-glace and butter rice, petit dessert', '¥1,650', 'Lunch', 'no', 'no', 'March and June 2026; ¥1,500 in another June 2026 review.', 'menu_a'),
      it('', '', 'Lunch Menu B: appetizers, fish, meat, dessert', '¥4,400', 'Lunch', 'ask', 'no', 'March and May 2026; ¥4,800 in October 2026.', 'menu_b'),
      it('', '', 'Dinner course', '', 'Dinner', 'ask', 'no', 'About ¥10,000 in May 2026; plus 10% service.', 'dinner'),
      it('', '', 'Christmas dinner course (23–26 December)', '¥16,500', 'Dinner', 'ask', 'no', 'Tabelog.', 'christmas'),
    ] }, {
    cuisine: 'Hokkaido から熊本まで各地の旬の食材のフランス料理。料理は月替わり (食べログ、口コミ)・昼の Menu A: 愛知県しらすと熊本野菜のサラダ、チキンの香草パン粉焼き 特製デミグラスソースとバターライス、プチデザートで1,650円 (2026年3月・6月。6月の別の口コミでは1,500円)・魚と肉の Menu B: 4,400円 (2026年3月・5月)、4,800円 (2026年10月)・夜はコース約1万円 (2026年5月) にサービス料10%、クリスマスコース16,500円 (12月23〜26日)・2026年の料理: 桜えびのマリネ、鰆と黒舞茸、Hokkaido の豚のデミグラスソースとラタトゥイユ、タートルスープ、鮎の焦がしバター、鹿、タルトタタン、レモンのスフレ、桃とピスタチオ・グラスワインとノンアルコールの飲み物も多い',
    neighborhood: '東上野三丁目、鈴木ビル1F、Shitaya Shrine の前。稲荷町駅から徒歩2分、JR上野駅から徒歩6分',
    gf_detail: '予約時に要確認。料理はその日の食材で変わり、アレルギーは予約のときにメールで伝えられる (2026年3月の口コミ) が、グルテンフリーの説明はありません。コースにはパン、パイ生地のアミューズ、グジェール、チキンの香草パン粉焼き、タルトタタンもある。',
    vegan_detail: 'ヴィーガンではありません。魚と肉にバターやクリームのソースのコース。苦手なものは席で聞いてくれる (2026年9月) が、ヴィーガンのコースはありません。',
    notes: '[フレンチ・稲荷町、Shitaya Shrine の前のシェフと奥さんの店] Shitaya Shrine の向かい、2015年からの小さなフレンチで、オープンキッチンに6席のカウンターといくつかのテーブル。シェフの Eiro Araki さんは Kumamoto 出身で、Hiramatsu や Esquisse、海外 (食べログではフランス、カナダ、モロッコ) で修業し、奥さんと店を営む。店名はフランス語で心の安らぎ。Hokkaido から熊本までの旬の食材が、愛知県しらすと熊本野菜のサラダ、鰆と黒舞茸、デミグラスソースの豚のロースト、桃とピスタチオやレモンのスフレのデザートなどになる。昼は約1,500〜1,650円 (サラダ、チキンとバターライス、小さなデザート) から魚と肉の4,400〜4,800円まで、夜は約1万円のコースのみ。2026年は値段以上という声が多い一方、5月の夜には提供がとても遅かったという人も。家族連れ歓迎、予約は公式サイトで。',
  });
}

// ================================================================ プティ ボヌール
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13138118/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:45', '14:00'], ['18:00', '23:00']); const S = day(['18:00', '22:00']);
  put({
    id: 'tokyo_petit_bonheur_higashiueno', name: 'プティ ボヌール (Petit Bonheur)', category: 'OMNI',
    lat: 35.708395, lng: 139.777074, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Horse sashimi, horse tartare, salads and marinated mushrooms are on the menu, but nothing is described as gluten-free; lunch is pasta, and the horse sashimi comes with a sweet soy sauce.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A vegetable tomato spaghetti (Ortolana) and marinated mushrooms are on the menu, but how they are made is not stated; the kitchen is known for horse meat, charcuterie and seafood.',
    hours_raw: 'Mon–Fri 11:45–14:00 (last order 13:30) and 18:00–23:00 (food last order 21:30); Sat 18:00–22:00; closed Sundays; hours may vary (Tabelog). Reservations taken; 2-hour limit at busy dinners; bookings over 15 minutes late may be cancelled. Lunch payment cash or PayPay only; cards (VISA, Master, JCB, AMEX) and Rakuten Pay otherwise (Tabelog). Coperto (service charge) 10%. 16 seats: 4 at the counter, 12 at tables. Non-smoking, with a smoking space. Opened 8 March 2012 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: S }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Ueno 1-chōme, near Showa-dori and the Okachimachi yakiniku streets — 2 min from Naka-Okachimachi Stn; 5 min from JR Okachimachi Stn',
    cuisine: 'French-Italian bistro dishes from a French-trained chef with overseas and Michelin-starred experience, made without chemical seasonings or additives, plus horse meat (Tabelog) · horse sashimi and fillet with sweet soy sauce and horseradish, horse tartare with baguette (2025–2026 reviews) · seasonal plates such as corn mousse, white asparagus and horse mackerel mille-feuille, sardine jelly, pâté de campagne, hachis parmentier, gnocchi, Gorgonzola soufflé, karasumi aglio e olio · lunch pasta sets with salad and a drink: ¥1,200 (October 2025), ¥1,300 (December 2025; Ortolana large, August 2026) · natural and organic wines; bottles from about ¥3,000 (May 2026)',
    website: null, gmaps: gm('プティ ボヌール 東上野1-15-1'), menu_url: TB + 'dtlmenu/',
    notes: "[Bistro · Okachimachi, horse meat and natural wine in a tiny room] A 16-seat French-Italian bistro tucked between Okachimachi's yakiniku streets and Showa-dori, open since 2012. A French-cuisine chef with overseas training and Michelin-starred experience cooks without chemical seasonings; horse meat is the house speciality — thick, tender horse sashimi or cubed fillet with sweet soy, or a tartare with baguette — alongside seasonal plates, pâté and thin, firm pasta. The walls are lined with natural and organic wines, a door is hidden in the wine shelf, and even the restroom doubles as a bottle display. Weekday lunch is a ¥1,200–1,300 pasta set with salad and a drink (cash or PayPay only) and fills up. In July 2026 one chef and one server ran the room; a 10% coperto applies. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 8 March 2012 (Tabelog)', background: 'Per Tabelog\'s listing (corporate member), the dishes are by a French chef with overseas training and experience at Michelin-starred restaurants, with no chemical seasonings or additives. A July 2026 review: "The restaurant is run by just one chef and a server." A March 2026 review mentions "the owner". No source names the chef or owner.', philosophy: 'Bringing out the natural flavours of ingredients, all-natural and additive-free (Tabelog).', specialty: 'Horse sashimi and tartare; pasta.',
      anecdotes: [
        { text: '"Since they specialize in horse meat, I ordered the fillet of sashimi, which was moist, tender, and delicious without any strong flavor… Considering the portion sizes and the service charge, it might be on the pricier side." — May 2026.', source: R + 'B527746997/' },
        { text: '"The restaurant is run by just one chef and a server, making it a cozy spot. It feels like a French bistro in a private house." — July 2026.', source: R + 'B531428802/' },
        { text: '"The prosciutto was a bit disappointing. It was a fresh pink color that seemed under-aged." — August 2026.', source: R + 'B534944383/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): プティ ボヌール、東上野1-15-1、仲御徒町駅から徒歩2分、月〜金11:45〜14:00 (L.O.13:30)・18:00〜23:00 (料理L.O.21:30)、土18:00〜22:00、日曜休み、営業時間は変わることあり、コペルト10%、16席 (カウンター4、テーブル12)、禁煙 (喫煙スペースあり)、ランチは現金と PayPay のみ、2012年3月8日オープン、海外修業とミシュランの星付きの店の経験があるフレンチのシェフ、化学調味料・添加物を使わない、馬刺し、自然派やオーガニックのワイン。口コミ(2025年10月〜2026年8月): マッシュルームのマリネ、馬肉のタルタル、ゴルゴンゾーラのスフレ、からすみのペペロンチーノ、昼のパスタセット1,200円・1,300円 (サラダとドリンク付き)、馬刺しと馬ヒレは甘い醤油と西洋わさび、ホワイトアスパラガス、アマトリチャーナ、ボトルは約3,000円から、いわしのジュレ、パテ・ド・カンパーニュ、アシ・パルマンティエ、とうもろこしのムース、ワイン棚のような隠し扉、シェフ1人とサービス1人、オルトラーナ、ニョッキ、生ハムは物足りなかったという声。',
      confidence: 'medium', sources: [TB, R + 'B514887404/', R + 'B515124835/', R + 'B519484736/', R + 'B526283751/', R + 'B527746997/', R + 'B529042780/', R + 'B530516167/', R + 'B531428802/', R + 'B534094688/', R + 'B534944383/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small room; lunch payment cash or PayPay only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区東上野1-15-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Corporate-member Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区東上野一丁目15番1号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B515124835/', R + 'B519484736/', R + 'B534094688/'],
    price_note: 'Lunch prices from October 2025–August 2026 reviews; 10% coperto.', last_checked: TODAY, items: [
      it('', '', 'Lunch pasta set with salad and drink (e.g. seaweed and pancetta tomato spaghetti)', '¥1,200', 'Lunch', 'no', 'no', 'October 2025; ¥1,300 in December 2025.', 'lunch_pasta'),
      it('', '', 'Ortolana vegetable tomato spaghetti, large, lunch set', '¥1,300', 'Lunch', 'no', 'ask', 'August 2026.', 'ortolana'),
      it('', '', 'Horse sashimi (fillet) with sweet soy and horseradish', '', 'Horse meat', 'ask', 'no', '2026 reviews.', 'basashi'),
      it('', '', 'Horse tartare with baguette', '', 'Horse meat', 'no', 'no', 'October 2025 and June 2026 reviews.', 'horse_tartare'),
    ] }, {
    cuisine: '海外とミシュランの星付きの店で経験を積んだフレンチのシェフのフランス・イタリアのビストロ料理。化学調味料・添加物を使わず、馬肉も (食べログ)・甘い醤油と西洋わさびの馬刺しや馬ヒレ、バゲットを添えた馬肉のタルタル (2025〜2026年の口コミ)・季節の皿: とうもろこしのムース、ホワイトアスパラガスとあじのミルフィーユ、いわしのジュレ、パテ・ド・カンパーニュ、アシ・パルマンティエ、ニョッキ、ゴルゴンゾーラのスフレ、からすみのペペロンチーノ・サラダとドリンク付きの昼のパスタセット: 1,200円 (2025年10月)、1,300円 (2025年12月、オルトラーナ大盛り2026年8月)・自然派やオーガニックのワイン、ボトルは約3,000円から (2026年5月)',
    neighborhood: '東上野一丁目、Showa-dori と御徒町の焼肉街の近く。仲御徒町駅から徒歩2分、JR御徒町駅から徒歩5分',
    gf_detail: '要確認。馬刺し、馬肉のタルタル、サラダ、マッシュルームのマリネはあるが、グルテンフリーの説明はありません。昼はパスタで、馬刺しには甘い醤油が付く。',
    vegan_detail: '要確認。野菜のトマトのスパゲッティ (オルトラーナ) やマッシュルームのマリネはあるが、作り方は書かれていません。馬肉、シャルキュトリー、魚介が中心の店。',
    notes: '[ビストロ・御徒町、小さな店で馬肉と自然派ワイン] 御徒町の焼肉街と Showa-dori の間にある16席のフランス・イタリアのビストロで、2012年から。海外やミシュランの星付きの店で経験を積んだフレンチのシェフが化学調味料を使わずに作る。名物は馬肉で、厚切りでやわらかい馬刺しや角切りのヒレを甘い醤油で、またはバゲットとタルタルで。ほかに季節の皿、パテ、細くて歯ごたえのあるパスタ。壁には自然派やオーガニックのワインが並び、ワイン棚の隠し扉があり、トイレまでボトルの棚を兼ねる。平日の昼はサラダとドリンク付きのパスタセットが1,200〜1,300円 (現金か PayPay のみ) で、店はにぎわう。2026年7月はシェフ1人とサービス1人の店。コペルト10%。日曜休み。',
  });
}

save();
