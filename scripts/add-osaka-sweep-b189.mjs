// Osaka sweep (2-mile circle around Dotonbori), batch 189 — mom phase (≤20 seats, 30+ reviews, nearest-first).
//   + Salon de Thé Plaisir (seasonal fruit parfaits, afternoon tea and pot tea by Minami-Horie Park)
//   + motti.cafe (all-white café: cheese terrine, brownies, seasonal fruit fairs; Namba-naka)
//   + Teppan & Grill R Shinsaibashi (teppanyaki courses with seafood and steak; Shinmachi)
//   + 華うさぎ (tempura bowls at lunch, Japanese courses at night; Minami-Senba)
//   - skip Patisserie Chocolaterie Ordinaire (relocated to Kanazawa, May 2026), カレーやマドラス 難波元町店 (Madras chain branch),
//     ニューベイブ 心斎橋店 (chain already in data)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-29';
const { put, skip, save } = openCitySweep('osaka', TODAY, 189);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ Salon de Thé Plaisir
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27078105/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://plaisir2014.wix.com/s-plaisir-horie';
  const H = day(['12:00', '20:00']);
  put({
    id: 'osaka_salon_de_the_plaisir_minamihorie', name: 'Salon de Thé Plaisir', category: 'OMNI',
    lat: 34.670385, lng: 135.491563, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; parfaits come with crumbles and brûlée, and the afternoon tea includes sandwiches and scones.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: parfaits are built on milk gelato, custard and cream; sandwiches use cream cheese and duck.',
    hours_raw: 'Wed–Sun 12:00–20:00; closed Monday and Tuesday; open on holiday Mondays with the next day off; check Instagram for changes (Tabelog). Reservations accepted (Tabelog). No cards, no e-money and no QR payments (Tabelog). 14 seats, seven tables for two; groups up to 4; non-smoking (Tabelog; September 2026). Every guest, children included, orders at least one food item; parfaits come as a drink set, and drinks over ¥800 cost ¥100 or more extra (September 2026). Opened 24 March 2014 (Tabelog).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Minami-Horie 2-5-19, GATO DM Minami-Horie Kōen-mae 1F (north unit), facing Minami-Horie Park — 5 min from Sakuragawa Stn Exit 5',
    cuisine: 'Salon de thé for seasonal parfaits and tea (14 seats) · seasonal fruit parfaits: Shine Muscat and grape ¥2,600, ¥2,900 with a drink; peach Melba with vanilla and raspberry; melon; blood orange brûlée; ruby grapefruit and pistachio brûlée; strawberry in spring · swap the milk gelato for deep-steamed sencha gelato +¥50 · crepe with pistachio ice cream · afternoon tea set: sandwiches (seared spicy duck pastrami with cream cheese; tomato with cream cheese), a dessert, freshly baked scones and tea · teas served by the pot, such as a kamairi organic black tea',
    website: OWN, gmaps: gm('Salon de The Plaisir 南堀江'), menu_url: null,
    notes: "[Café · seasonal fruit parfaits and pot tea, Minami-Horie] A small European-style tea salon facing Minami-Horie Park, known for elaborate seasonal fruit parfaits: peach Melba with a whole peach in summer, melon, blood orange or ruby grapefruit with brûlée, Shine Muscat and grape in autumn (¥2,600, or ¥2,900 with a drink). One diner swapped in the deep-steamed sencha gelato (+¥50) and found it lighter than matcha. The tea list is long and comes by the pot. For a fuller visit, the afternoon tea set adds sandwiches (the cream cheese is the star for one diner), scones and a dessert; crepes with pistachio ice cream sell out some days. House rules: each guest orders at least one food item, parfaits come as a drink set, and pricier drinks cost extra. One diner found the bowls smaller than in the photos. Cash only; reservations taken; closed Mondays and Tuesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 24 March 2014 (Tabelog).', background: 'Salon de thé serving seasonal parfaits, sandwiches and tea (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Seasonal fruit parfaits; tea by the pot.',
      anecdotes: [
        { text: '"The combination of vanilla ice cream and the tartness of raspberries made for a parfait that was enjoyable until the very last bite." — July 2026, Peach Melba-style Parfait.', source: R + 'B531401407/' },
        { text: '"For an additional JPY 50, I could switch the milk gelato to Deep Steamed Sencha Gelato, and it was exquisite! It felt refreshingly light compared to matcha!" — Strawberry Parfait, 2026.', source: R + 'B447579022/' },
      ],
      japanese_sources_summary: '食べログ: Salon de The Plaisir (サロン・ド・テ・プレジール)、大阪市西区南堀江2-5-19 GATO DM南堀江公園前一階北側店舗、桜川駅5番出口から徒歩5分、水〜日12:00〜20:00、月・火休み (祝日の月曜は営業し翌日休み)、最新はInstagramで、予約可、カード・電子マネー・QR不可、14席 (4名まで)、禁煙、2014年3月24日開店、公式サイトあり。口コミ(2026年6〜9月): 季節のフルーツのパフェ、 Shine Muscat といろいろなぶどうのパフェ2600円・ドリンクつき2900円、桃の Melba 風 (バニラとラズベリー)、メロン、ブラッドオレンジのブリュレ、ルビーグレープフルーツとピスタチオのブリュレ、春はいちご、ミルクのジェラートを深蒸し sencha のジェラートに+50円、ピスタチオのアイスのクレープ (売り切れの日も)、アフタヌーンティーのセット (サンドイッチ、デザート、焼きたてのスコーン、紅茶)、スパイシーな鴨のパストラミとクリームチーズのサンド、トマトとクリームチーズのサンド、ポットで出る紅茶、ひとり1品以上の注文、パフェはドリンクセット、800円を超えるドリンクは追加料金、器は写真より小さめという声、ひとりで切り盛りしている日も。',
      confidence: 'medium', sources: [TB, OWN, R + 'B447579022/', R + 'B490315510/', R + 'B531401407/', R + 'B531679608/', R + 'B534059093/', R + 'B534430249/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One food item per person; parfaits as a drink set; cash only (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区南堀江2丁目5‐19 GATO DM南堀江公園前一階北側店舗',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区南堀江二丁目5番19号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B447579022/', R + 'B531401407/'],
    price_note: 'Prices from a September 2026 review; parfait price may be before tax.', last_checked: TODAY, items: [
      it('', '', 'Shine Muscat and grape parfait', '¥2,600', 'Parfaits', 'ask', 'no', 'September 2026; ¥2,900 with a drink.', 'grape'),
      it('', '', 'Peach Melba-style parfait', '', 'Parfaits', 'ask', 'no', 'July–August 2026, seasonal.', 'peach'),
      it('', '', 'Deep-steamed sencha gelato swap', '+¥50', 'Parfaits', 'ask', 'no', '2026.', 'sencha'),
      it('', '', 'Afternoon tea set', '', 'Sets', 'no', 'no', 'July–August 2026.', 'afternoontea'),
    ] }, {
    cuisine: '季節のパフェと紅茶のサロン・ド・テ (14席)・季節のフルーツのパフェ: Shine Muscat とぶどう2600円、ドリンクつき2900円、バニラとラズベリーの桃の Melba 風、メロン、ブラッドオレンジのブリュレ、ルビーグレープフルーツとピスタチオのブリュレ、春はいちご・ミルクのジェラートを深蒸し sencha のジェラートに+50円・ピスタチオのアイスのクレープ・アフタヌーンティーのセット: サンドイッチ (スパイシーな鴨のパストラミとクリームチーズ、トマトとクリームチーズ)、デザート、焼きたてのスコーン、紅茶・紅茶はポットで',
    neighborhood: '南堀江2-5-19 GATO DM南堀江公園前 1階北側、南堀江公園の前。桜川駅5番出口から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。パフェにはクランブルやブリュレがあり、アフタヌーンティーにはサンドイッチとスコーンがある。',
    vegan_detail: '実質ヴィーガンではありません。パフェはミルクのジェラート、カスタード、クリームが中心で、サンドはクリームチーズや鴨を使う。',
    notes: '[カフェ・南堀江、季節のフルーツのパフェとポットの紅茶] 南堀江公園の前にあるヨーロッパ風の小さなティーサロンで、手の込んだ季節のフルーツのパフェで知られる。夏は丸ごとの桃をのせた桃の Melba 風、メロン、ブラッドオレンジやルビーグレープフルーツのブリュレ、秋は Shine Muscat とぶどう (2600円、ドリンクつき2900円)。ある人は深蒸し sencha のジェラートに替えて (+50円)、抹茶より軽いと。紅茶の種類が多く、ポットで出る。しっかり食べるならアフタヌーンティーのセットで、サンドイッチ (クリームチーズが主役という声)、スコーン、デザートつき。ピスタチオのアイスのクレープは売り切れの日も。ひとり1品以上の注文、パフェはドリンクセット、高めのドリンクは追加料金というルールあり。器は写真より小さめという声も。現金のみ、予約可、月・火休み。',
  });
}

// ================================================================ motti.cafe
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27134253/'; const R = TB + 'dtlrvwlst/';
  const D = day(['09:00', '18:00']); const F = day(['09:00', '20:00']);
  put({
    id: 'osaka_motti_cafe_nambanaka', name: 'motti.cafe', category: 'OMNI',
    lat: 34.661013, lng: 135.49864, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; sweets include terrines, brownies and lemon cake.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: cheese and chocolate terrines, cakes and milk drinks; no vegan item described.',
    hours_raw: 'Daily 9:00–18:00, Friday until 20:00; irregular closing days, check Instagram (Tabelog). No reservations (Tabelog). Cards (VISA, Master, JCB), iD and QR (PayPay, d Barai, Rakuten Pay, au PAY) accepted (Tabelog). 11 seats: 3 at the counter and tables for two; non-smoking (Tabelog). Short waits outside at busy times (August 2026). Opened 20 January 2023 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: F, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba-naka 3-7-8, Namba Regal House — in a residential block about 6 min from Namba',
    cuisine: 'Small all-white café (11 seats) · white chocolate cheese terrine; chocolate terrine; brownie; lemon cake with honey ¥890 during a lemon fair · lemonade ("Aid Lemon") ¥800; strawberry milk soda with fruit pieces; royal milk tea; café au lait · seasonal fruit fairs; a message can be added to an order',
    website: null, gmaps: gm('motti.cafe 難波中'), menu_url: null,
    notes: "[Café · a bright, all-white dessert café, Namba-naka] A tiny, photogenic café on a residential street south of Namba, white from floor to ceiling with rounded tables and chairs. Desserts are the draw: a white chocolate cheese terrine that's refreshingly cheesy with a milky finish, a chocolate terrine and brownies, plus limited fruit fairs such as a lemon month with honey-drizzled lemon cake (¥890) and lemonade (¥800). Drinks include a strawberry milk soda with fruit pieces, royal milk tea and an aromatic café au lait, and a message can be added to an order. Seats are close together and there can be a short wait outside. Open from 9 am, until 8 pm on Fridays; closing days vary.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 20 January 2023 (Tabelog).', background: 'Café (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Cheese terrine; seasonal fruit desserts.',
      anecdotes: [
        { text: '"I ordered the white chocolate cheese terrine, which had a refreshing cheese flavor with a hint of milky white chocolate taste. It was delicious!" — August 2026.', source: R + 'B523601062/' },
        { text: '"On the day I visited, [the café was] holding a lemon fair… The lemon cake, drizzled with honey, was delicious!" — June 2026, Lemon Cake ¥890.', source: R + 'B530438109/' },
      ],
      japanese_sources_summary: '食べログ: motti.cafe、大阪市浪速区難波中3-7-8 難波リーガルハウス、なんばから405m、毎日9:00〜18:00・金曜は20:00まで、定休日は不定 (Instagramで確認)、予約不可、カード (VISA・Master・JCB)・iD・QR (PayPay・d払い・楽天ペイ・au PAY) 可、11席 (カウンター3席、2人用テーブル)、禁煙、2023年1月20日開店。口コミ(2025年8月〜2026年8月): 白で統一した明るい小さなカフェ、丸みのあるテーブルと椅子、ホワイトチョコのチーズテリーヌ、チョコテリーヌ、ブラウニー、レモンのフェアでレモンケーキ890円 (はちみつがけ)・ Aid Lemon 800円、いちごミルクのソーダ、ロイヤルミルクティー、カフェオレ、季節のフルーツのメニュー、メッセージを入れてもらえる、席は少し窮屈という声、外で15分ほど待ったという声。',
      confidence: 'medium', sources: [TB, R + 'B514915828/', R + 'B516394629/', R + 'B523601062/', R + 'B527336178/', R + 'B530438109/', R + 'B537418545/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small café; seats close together (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中3-7-8 難波リーガルハウス',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated April–August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中三丁目7番8号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530438109/', R + 'B523601062/'],
    price_note: 'Prices from a June 2026 review.', last_checked: TODAY, items: [
      it('', '', 'White chocolate cheese terrine', '', 'Sweets', 'ask', 'no', 'August 2026.', 'terrine'),
      it('', '', 'Lemon cake with honey', '¥890', 'Sweets', 'no', 'no', 'June 2026, lemon fair.', 'lemoncake'),
      it('', '', 'Lemonade ("Aid Lemon")', '¥800', 'Drinks', '', '', 'June 2026.', 'lemonade'),
      it('', '', 'Brownie', '', 'Sweets', 'no', 'no', 'August 2026.', 'brownie'),
    ] }, {
    cuisine: '白で統一した小さなカフェ (11席)・ホワイトチョコのチーズテリーヌ、チョコテリーヌ、ブラウニー、レモンのフェアのはちみつがけレモンケーキ890円・ Aid Lemon 800円、果肉入りのいちごミルクのソーダ、ロイヤルミルクティー、カフェオレ・季節のフルーツのフェア、注文にメッセージを入れてもらえる',
    neighborhood: '難波中3-7-8 難波リーガルハウス。なんばから徒歩6分ほどの住宅街',
    gf_detail: '要確認。グルテンの情報なし。テリーヌ、ブラウニー、レモンケーキなど。',
    vegan_detail: '実質ヴィーガンではありません。チーズやチョコのテリーヌ、ケーキ、ミルクのドリンクで、ヴィーガンの記載なし。',
    notes: '[カフェ・難波中、白で統一した明るいデザートのカフェ] なんばの南、住宅街にある写真映えする小さなカフェで、店内は真っ白、丸みのあるテーブルと椅子。目当てはデザートで、チーズのさわやかさにミルキーなホワイトチョコが香るチーズテリーヌ、チョコテリーヌ、ブラウニー。期間限定のフルーツのフェアもあり、レモンの月ははちみつがけのレモンケーキ (890円) と Aid Lemon  (800円)。ドリンクは果肉入りのいちごミルクのソーダ、ロイヤルミルクティー、香りのいいカフェオレなど。注文にメッセージを入れてもらえる。席は近めで、外で少し待つことも。朝9時から、金曜は20時まで。定休日は不定。',
  });
}

// ================================================================ Teppan & Grill R Shinsaibashi
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27079785/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://www.r-teppan-steak.com/';
  const H = day(['12:30', '17:00'], ['18:00', '23:30']);
  put({
    id: 'osaka_teppan_grill_r_shinmachi', name: 'Teppan & Grill R Shinsaibashi', category: 'OMNI',
    lat: 34.676458, lng: 135.496833, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; courses include sauces such as Américaine, garlic rice and dessert; steak can be eaten with just salt.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: teppanyaki courses of beef, lobster, abalone and sashimi.',
    hours_raw: 'Lunch 12:30–17:00 (courses only, reservation online at least three days ahead, groups of two or more); dinner 18:00–23:30 (food last order 21:30); closed Mondays plus two consecutive days each month (Tabelog). Reservations prioritized; counter seats require a course (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay) and PayPay accepted; no e-money (Tabelog). 10% fee for the private room or counter buyout, and 30 December–4 January (Tabelog). 14 seats: 10 at the counter, private sofa room for up to 5; non-smoking (Tabelog). English and Chinese menus; children\'s course by coupon (Tabelog). Opened 16 June 2014 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinmachi 1-7-5, Yotsubashi GTC Bldg 2F — 2 min from Yotsubashi Stn Exit 2',
    cuisine: 'Teppanyaki steak and seafood courses (10 counter seats, private room) · courses priced by the seafood chosen: appetizers such as roast beef; sashimi (itoyori, fatty sea bream with white soy sauce and ginger); lobster with Américaine sauce; abalone cooked at the counter; Chateaubriand on the top course; whisky flambé; garlic rice; white-miso fish soup; dessert · wide wine list; birthday plate on request',
    website: OWN, gmaps: gm('Teppan&grill R 心斎橋 新町'), menu_url: null,
    notes: "[Teppanyaki · seafood and steak courses at the counter, Shinmachi] A second-floor teppanyaki counter two minutes from Yotsubashi Station where seafood gets as much attention as the beef. Courses are priced by the seafood you pick: diners describe sashimi such as itoyori or fatty sea bream with white soy and ginger, lobster in a rich Américaine sauce and abalone cooked in front of you, with a whisky flambé for show; the top course ends on a tender Chateaubriand that one diner ate with just salt, then garlic rice and a gentle white-miso fish soup. Platters are shown before cooking, and each abalone order comes with a decorated shell to take home. Wide wine list. Counter seats are course-only; lunch must be booked online three days ahead. Closed Mondays and two more days a month.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 16 June 2014 (Tabelog).', background: 'Teppanyaki steak and seafood restaurant (Tabelog; 2024–2026 reviews).', philosophy: null, specialty: 'Lobster and abalone teppanyaki; Chateaubriand.',
      anecdotes: [
        { text: '"I had the Chateaubriand this time, which was tender and flavorful, and it was so good that I enjoyed it with just salt. The garlic rice served at the end was simple yet satisfying…" — October 2025.', source: R + 'B486224862/' },
        { text: '"Later, I found out that for each abalone ordered, you receive a sparkling, decorated abalone as a gift from a separate case." — May 2026.', source: R + 'B529454713/' },
      ],
      japanese_sources_summary: '食べログ: ステーキ 鉄板焼き Teppan&grill R 心斎橋、大阪市西区新町1-7-5 Yotsubashi GTCビル 2F、四ツ橋駅2番出口から徒歩2分、ランチ12:30〜17:00 (コースのみ、2名以上、3日前までにネット予約)、ディナー18:00〜23:30 (料理L.O. 21:30)、月曜休みと月に2連休、予約優先、カウンターはコース注文のみ、カード (VISA・Master・JCB・AMEX・Diners・銀聯)・PayPay可、電子マネー不可、個室・カウンター貸切・年末年始は10%、14席 (カウンター10席、5名までのソファの個室)、禁煙、英語・中国語メニュー、子どものコースはクーポンで、2014年6月16日開店、公式サイトあり。口コミ(2024年12月〜2026年5月): 魚介で値段が変わるコース、ローストビーフなどの前菜、 itoyori や脂ののった鯛の sashimi (白醤油と生姜)、ロブスターの Américaine ソース、目の前で焼くアワビ、ウイスキーのフランベ、最上のコースは Chateaubriand  (塩だけで)、ガーリックライス、白味噌と魚のスープ、デザート、焼く前に肉と魚介を大皿で見せてくれる、アワビを頼むと飾りつけた殻をもらえる、ワインが豊富。',
      confidence: 'medium', sources: [TB, OWN, R + 'B486224862/', R + 'B498043535/', R + 'B499757066/', R + 'B500759129/', R + 'B510992039/', R + 'B529454713/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu; book online; counter is course-only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町1-7-5 Yotsubashi GTCビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current with reservations open; latest review dated May 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目7番5号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B486224862/', R + 'B500759129/'],
    price_note: 'Course prices vary with the seafood chosen; reviews put dinner at ¥15,000–29,999 per person.', last_checked: TODAY, items: [
      it('', '', 'Teppanyaki course with lobster and abalone', '', 'Courses', 'ask', 'no', '2025–2026 reviews.', 'course'),
      it('', '', 'Chateaubriand (top course)', '', 'Courses', 'ask', 'no', 'July and October 2025.', 'chateaubriand'),
      it('', '', 'Garlic rice', '', 'Courses', 'ask', 'no', 'October 2025.', 'garlicrice'),
    ] }, {
    cuisine: '鉄板焼きのステーキと魚介のコース (カウンター10席、個室)・魚介で値段が変わるコース: ローストビーフなどの前菜、 itoyori や脂ののった鯛の sashimi (白醤油と生姜)、ロブスターの Américaine ソース、目の前で焼くアワビ、最上のコースは Chateaubriand、ウイスキーのフランベ、ガーリックライス、白味噌と魚のスープ、デザート・ワインが豊富・誕生日のプレートは申し出で',
    neighborhood: '新町1-7-5 Yotsubashi GTCビル 2F。四ツ橋駅2番出口から徒歩2分',
    gf_detail: '要確認。グルテンの情報なし。コースには Américaine などのソース、ガーリックライス、デザートがある。ステーキは塩だけでも食べられる。',
    vegan_detail: 'ヴィーガンではありません。牛肉、ロブスター、アワビ、sashimi の鉄板焼きのコース。',
    notes: '[鉄板焼き・新町、カウンターで魚介とステーキのコース] 四ツ橋駅から2分、ビル2階の鉄板焼きのカウンターで、牛肉と同じくらい魚介に力が入っている。コースは選ぶ魚介で値段が変わり、口コミでは itoyori や脂ののった鯛の sashimi (白醤油と生姜)、濃厚な Américaine ソースのロブスター、目の前で焼くアワビ、見せ場のウイスキーのフランベ。最上のコースはやわらかい Chateaubriand で、塩だけで食べたという人も。締めはガーリックライスとやさしい白味噌の魚のスープ。焼く前に大皿で見せてくれ、アワビを頼むと飾りつけた殻をもらえる。ワインが豊富。カウンターはコースのみ、ランチは3日前までにネット予約。月曜と月に2日休み。',
  });
}

// ================================================================ 華うさぎ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27039265/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://hana-usagi.jp/';
  const WD = day(['11:30', '13:20'], ['18:00', '22:00']); const SA = day(['18:00', '21:00']);
  put({
    id: 'osaka_hana_usagi_minamisenba', name: '華うさぎ (Hana Usagi)', category: 'OMNI',
    lat: 34.677419, lng: 135.502872, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: lunch is tempura bowls and tempura set meals in wheat batter with a soy-based sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: shrimp and chicken tempura, dashi-based sauce and miso soup, fish dishes.',
    hours_raw: 'Mon–Fri lunch 11:30–13:20 (ends when the rice runs out; no lunch reservations) and dinner 18:00–22:00; Saturday dinner 18:00–21:00; closed Sunday and holidays (Tabelog). Courses must be booked by the day before; same-day cancellations are charged in full (Tabelog). ¥550 per person charge for à la carte diners only (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay accepted; no e-money (Tabelog). Pay first at lunch (July 2025). 10 seats: 6 at the counter, one table for 4; smoking allowed (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 3-2-28, Nippo Taiyo Bldg 1F #2, at the back of the building just off Shinsaibashi-suji — 5 min from Shinsaibashi Stn Exit 1',
    cuisine: 'Japanese restaurant for tempura and seasonal courses (10 seats) · lunch: Hana Usagi tempura bowl (2 shrimp, 3 vegetables) ¥700 (June 2025); kakiage bowl ¥800 (July 2025); special tempura bowl A with two shrimp ¥1,000 (January 2026); special tempura set "Matsu"; chicken tempura set with mini sashimi; free large rice; miso soup · dinner: seasonal kaiseki-style courses with fish bought at Kuromon Market; "Koi Usagi" set ¥3,300; sake list',
    website: OWN, gmaps: gm('華うさぎ 南船場'), menu_url: null,
    notes: "[Japanese · tempura bowls at lunch and seasonal courses at night, Minami-Senba] A cozy 10-seat Japanese restaurant hidden at the back of a building just off Shinsaibashi-suji. Weekday lunch is a short run of tempura bowls and set meals, from a ¥700 tempura bowl to a two-shrimp special bowl (¥1,000) with a light batter and a dashi-rich Kansai-style sauce; rice can be made large for free, miso soup comes alongside, and you pay first. Lunch ends when the rice runs out, and one diner saw it fill up soon after noon. At night it becomes a place for seasonal Japanese courses built on fish bought at Kuromon Market, with a good sake list; one diner was served a warming sake-lees soup on a cold night. Courses need booking by the day before; à la carte diners pay a ¥550 charge. Smoking is allowed. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Japanese restaurant serving tempura lunches and seasonal courses (Tabelog; 2025–2026 reviews).', philosophy: 'Seasonal Japanese cooking with fish selected at Kuromon Market (Tabelog listing).', specialty: 'Tempura bowls; seasonal courses.',
      anecdotes: [
        { text: '"The tempura had a light batter that was moist from the oil. The sauce had a refreshing, dashi-rich flavor typical of Kansai cuisine." — January 2026, Special Tempura Rice Bowl A ¥1,000.', source: R + 'B469486665/' },
        { text: '"From the counter seats, I could see that each piece was being fried with care. The tempura was light, and the dipping sauce was a refreshing sweet flavor…" — June 2025, Hana Usagi Tempura Rice Bowl ¥700.', source: R + 'B509850036/' },
      ],
      japanese_sources_summary: '食べログ: 華うさぎ、大阪市中央区南船場3-2-28 日宝タイヨービル 1F2号、心斎橋駅1番出口から徒歩5分、月〜金11:30〜13:20 (ご飯がなくなり次第終了、ランチは予約不可)・18:00〜22:00、土18:00〜21:00、日祝休み、コースは前日までに予約、当日キャンセルは100%、単品のみの方はひとり550円、カード (VISA・Master・JCB・AMEX・Diners)・PayPay可、電子マネー不可、10席 (カウンター6席、テーブル4席)、喫煙可、公式サイトあり。店の紹介: 季節の素材の kaiseki を手ごろに、 Kuromon の市場で選ぶ魚。口コミ(2025年2月〜2026年10月): 華うさぎ天丼 (海老2本と野菜3種) 700円、 kakiage の丼800円、特製天丼A (海老2本) 1000円、特製天ぷら定食「 Matsu」、鶏の天ぷらの定食とミニの sashimi、ご飯の大盛り無料、味噌汁つき、ランチは先払い、軽い衣と出汁の効いた関西風のたれ、少し油っぽかったという声、昼は12時過ぎに満席、夜は「 Koi Usagi」のセット3300円、日本酒が豊富、寒い日に酒粕のスープを出してくれた。',
      confidence: 'medium', sources: [TB, OWN, R + 'B469486665/', R + 'B502553102/', R + 'B509850036/', R + 'B512201248/', R + 'B531874645/', R + 'B95250136/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pay first at lunch; courses by reservation (2025–2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場3-2-28 日宝タイヨービル 1F2号',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場三丁目2番28号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B469486665/', R + 'B509850036/', R + 'B95250136/'],
    price_note: 'Lunch prices from 2025–2026 reviews; prices have risen over time.', last_checked: TODAY, items: [
      it('', '', 'Special tempura bowl A (two shrimp)', '¥1,000', 'Lunch', 'no', 'no', 'January 2026.', 'tendonA'),
      it('', '', 'Hana Usagi tempura bowl', '¥700', 'Lunch', 'no', 'no', 'June 2025.', 'tendon'),
      it('', '', 'Kakiage bowl', '¥800', 'Lunch', 'no', 'no', 'July 2025.', 'kakiage'),
      it('', '', '"Koi Usagi" set', '¥3,300', 'Dinner', 'ask', 'no', 'February 2025.', 'koiusagi'),
    ] }, {
    cuisine: '天ぷらと季節のコースの和食の店 (10席)・ランチ: 華うさぎ天丼 (海老2本と野菜3種) 700円 (2025年6月)、 kakiage の丼800円 (2025年7月)、海老2本の特製天丼A 1000円 (2026年1月)、特製天ぷら定食「 Matsu」、鶏の天ぷらの定食とミニの sashimi、ご飯の大盛り無料、味噌汁・夜: Kuromon の市場で選ぶ魚の季節のコース、「 Koi Usagi」のセット3300円、日本酒',
    neighborhood: '南船場3-2-28 日宝タイヨービル 1F2号、心斎橋筋から少し入ったビルの奥。心斎橋駅1番出口から徒歩5分',
    gf_detail: 'グルテンフリーではありません。ランチは小麦の衣の天丼と天ぷらの定食で、たれも醤油ベース。',
    vegan_detail: '実質ヴィーガンではありません。海老や鶏の天ぷら、出汁のたれと味噌汁、魚料理。',
    notes: '[和食・南船場、昼は天丼、夜は季節のコース] 心斎橋筋から少し入ったビルの奥にある、10席の落ち着いた和食の店。平日の昼は天丼と天ぷらの定食が数種で、700円の天丼から海老2本の特製天丼 (1000円) まで。衣は軽く、出汁の効いた関西風のたれ。ご飯の大盛りは無料、味噌汁つきで、先払い。ご飯がなくなり次第終了で、12時過ぎに満席になったという声も。夜は Kuromon の市場で選んだ魚の季節のコースと日本酒の店になり、寒い日に酒粕のスープを出してもらったという声も。コースは前日までに予約、単品のみの方は550円。喫煙可。日曜休み。',
  });
}

skip('27076593', 'Patisserie Chocolaterie Ordinaire: Osaka shop closed 6 May 2026, relocated to Kanazawa (Tabelog [Relocated]; reviews April–May 2026)');
skip('27036261', 'カレーやマドラス 難波元町店: branch of the Madras curry chain (reviews mention a main branch and other locations)');
skip('27157268', 'ニューベイブ 心斎橋店: chain already in data (ニューベイブ 難波店)');

save();
