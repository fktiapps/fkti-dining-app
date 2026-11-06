// Kyoto priority (kyoto-missed), worker osw13, batch 48 — lane: Tabelog id mod 6 = 0.
// Core: 鮨割烹 味幸, チェネッタ バルバ. Notable: 京洛焼肉やぶ, クレーム デ ラ クレーム 京都本店.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-48');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26029278', 'brand already in data: 甘党茶屋 梅園 三条寺町店 is a same-concept branch of 梅園, whose 河原町店 is kyoto_umezono_kawaramachi; the crawl also lists 梅園 清水店 and 梅園おやつ JR京都伊勢丹店');

// ================================================================ 鮨割烹 味幸
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26036610/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_sushi_kappou_miyuki', name: '鮨割烹 味幸 (Sushi Kappou Miyuki)', category: 'OMNI',
    lat: 34.995823, lng: 135.769344, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information; Edomae nigiri on red-vinegar rice, already seasoned, with simmered conger eel and small dishes (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi course of fish, monkfish liver, sea urchin and toro (2024–2026 reviews).',
    hours_raw: 'Tabelog: daily 12:00–14:00 (lunch starts at 12:00) and 18:00–22:00 (dinner bookings 18:00–20:00). Reservation only; phone bookings 12:00–17:00; 7 or more by phone; tell the shop if you are late. Tabelog’s note for overseas guests, in its own words: "After making a reservation, please call the restaurant from your accommodation to ensure a smooth visit." No service charge: Tabelog’s English page says a service fee is added, but the Japanese original says 「なし」. 6 counter seats; non-smoking; children welcome; cards, no e-money or QR (Tabelog). Formerly called 鮨 えび奈 (Tabelog). Opened 23 October 2021 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gojo, just east of the Gojo bridge — 1 min walk from Kiyomizu-Gojo Stn, exit 4',
    cuisine: 'Edomae sushi with small dishes at a six-seat counter · lunch course ¥6,500 (July 2025; June and October 2026); dinner course of about 17 dishes, 6 appetizers and 8 nigiri (July 2026) · nigiri on red-vinegar rice, already seasoned (2025–2026 reviews) · regulars’ standbys: toro-taku roll, ankimo wrapped in nori, sea-urchin rice; also smoked tuna, sawara sashimi with house onion sauce, simmered conger eel and isaki (2024–2026 reviews) · a wide sake list (July 2025)',
    website: null, gmaps: gm('鮨割烹 味幸 清水五条'), menu_url: null,
    notes: '[Sushi · Kiyomizu-Gojo, one chef and six seats] A six-seat Edomae counter a minute from Kiyomizu-Gojo Station, where the chef — once a long-time izakaya master in Tokyo — works alone, chatting easily and seeing guests out to the door. Lunch is a ¥6,500 course of nigiri on red-vinegar rice with the much-loved toro-taku and nori-wrapped ankimo; dinner runs to about 17 dishes. Reviewers found the pieces large and the course a little samey. Overseas guests are asked to phone from their hotel after booking.',
    chef_bio: { chef_name: null, roles: ['Chef who runs the restaurant alone (May 2025: "The chef, who runs the restaurant alone"); not named'], origin: null,
      background: 'Opened 23 October 2021 (Tabelog), formerly under the name 鮨 えび奈 (Tabelog). A June 2025 reviewer writes that the chef spent many years as an izakaya master in Tokyo; reviewers in 2025–2026 describe a chef working alone, friendly and easy to talk to, who sees guests off at the entrance.',
      philosophy: null,
      specialty: 'Toro-taku; nori-wrapped ankimo; sea-urchin rice.',
      anecdotes: [
        { text: 'For a late Mother’s Day lunch in May 2025, the chef suggested less rice for an elderly mother and set the platter within easy reach.', source: R + 'B506767076/' },
        { text: '"The sushi pieces are relatively large, which is a matter of preference, but personally, I felt they could have been a bit smaller." — November 2024.', source: R + 'B498854153/' },
        { text: 'A June 2026 lunch guest was seen out to the entrance by the chef.', source: R + 'B530242873/' },
      ],
      japanese_sources_summary: '食べログ: 鮨割烹 味幸 (旧店名 鮨 えび奈)、寿司・日本料理、東山区五条通大橋東入東橋詰町13 アーバイン京都清水五条1F、清水五条駅4番出口から徒歩1分、毎日 12:00〜14:00 (昼は12時スタート)・18:00〜22:00 (夜の予約は18〜20時)、完全予約制、電話予約は12:00〜17:00、7名以上は電話で相談、海外のお客様へ: 予約後に宿泊先から店に電話を、サービス料は日本語原文で「なし」(英語版の記載は誤訳)、カウンター6席、禁煙、子供可、カード可、電子マネー・QR不可、2021年10月23日オープン。口コミ (2024年11月〜2026年10月、英語): 昼のコース6,500円、夜は17品ほど (前菜6品と握り8貫)、赤酢のシャリ、味付き握り、トロたく、海苔巻きのあん肝、雲丹ご飯、燻製の鮪、鰆のお造りと自家製玉ねぎソース、煮穴子とイサキ、日本酒の品揃え、大将が一人で営む、東京で長く居酒屋の主人だった、気さくで見送ってくれる、握りが大きめ、コースが単調という声。',
      confidence: 'medium', sources: [TB, R + 'B498854153/', R + 'B506767076/', R + 'B509018026/', R + 'B509531486/', R + 'B518506930/', R + 'B530242873/', R + 'B531219761/', R + 'B533440069/', R + 'B537566764/', R + 'B537913362/'] },
    cultural_comfort: { level: 'relay', note: 'Tabelog asks overseas guests: "After making a reservation, please call the restaurant from your accommodation to ensure a smooth visit." Phone bookings 12:00–17:00.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区五条通大橋東入東橋詰町13 アーバイン京都清水五条 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.995823, 135.769344); cross-checked: GSI 京都府京都市東山区東橋詰町13番地 (lot) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B509531486/', R + 'B537566764/'],
    price_note: 'Lunch price from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch course (nigiri and small dishes)', '¥6,500', 'Lunch', 'ask', 'no', 'July 2025 to October 2026.', 'lunch_course'),
      it('', '', 'Dinner course, about 17 dishes', '', 'Dinner', 'ask', 'no', 'Price not given (July 2026).', 'course'),
    ] }, {
    cuisine: 'カウンター6席の江戸前寿司と一品・昼のコース6,500円 (2025年7月、2026年6月・10月)、夜は前菜6品と握り8貫など17品ほどのコース (2026年7月)・赤酢のシャリ、味付きの握り (2025〜2026年の口コミ)・常連の定番: トロたく、海苔巻きのあん肝、雲丹ご飯、ほかに燻製の鮪、鰆のお造りと自家製の玉ねぎソース、煮穴子とイサキ (2024〜2026年の口コミ)・日本酒の品揃え (2025年7月)',
    neighborhood: '五条大橋の東。清水五条駅4番出口から徒歩1分',
    gf_detail: '予約時に要確認。グルテンの情報なし。味付きの赤酢のシャリの江戸前握りに、煮穴子や一品 (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 魚、あん肝、雲丹、トロの寿司のコース (2024〜2026年の口コミ)。',
    notes: '[寿司・清水五条、大将一人でカウンター6席] 清水五条駅から1分のカウンター6席の江戸前寿司。東京で長く居酒屋の主人だった大将が一人で切り盛りし、気さくに話して入口まで見送ってくれる。昼は6,500円のコースで、赤酢のシャリの握りと人気のトロたく、海苔巻きのあん肝、夜は17品ほど。握りが大きめ、コースがやや単調という声も。海外からの客は予約後に宿泊先から電話するよう案内している。',
  });
}

// ================================================================ チェネッタ バルバ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26026050/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.cenettabarba.com';
  const CHEF = 'http://www.cenettabarba.com/chef';
  const H = day(['12:00', '14:30'], ['18:00', '23:00']);
  put({
    id: 'kyoto_cenetta_barba', name: 'チェネッタ バルバ (Cenetta Barba)', category: 'MOM_AND_POP',
    lat: 35.000290, lng: 135.760214, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; pasta, risotto and homemade focaccia are central (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Vegetables come from the Ohara morning market (official site), but the menu leans on meat, cheese and whitebait (2025–2026 reviews).',
    hours_raw: 'Tabelog: Wed–Mon 12:00–14:30 and 18:00–23:00 (L.O. 21:00); closed Tuesday and about two irregular days a month. Lunch is a set course of seasonal dishes; dinner is Roman cooking à la carte (Tabelog; official site). No service charge and no cover (Tabelog; Japanese original 「サービス料なし、お通し代なし」). 19 seats with a counter; non-smoking; cards (JCB, AMEX) and e-money (Tabelog). Opened 10 July 2015 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Near Karasuma, south of Shijo — 5 min walk from Hankyu Karasuma Stn and Shijo Stn',
    cuisine: 'Two faces: a seasonal lunch course, Roman trattoria cooking à la carte at night (official site) · lunch course ¥4,500 (August 2026) · seen: truffle omelette, assorted antipasti for two, shirasu and shiso Genovese, porcini or gorgonzola risotto, sakura-shrimp and ginger risotto, Roman carbonara and amatriciana, bucatini, bottarga orecchiette, veal scaloppine with Marsala, herb-roast lamb, Ezo venison with black-garlic sauce, beef cheek in red wine, homemade focaccia and ginger ale, tiramisu, caramel sorbet (2025–2026 reviews) · Michelin Bib Gourmand, Kyoto 2016–2021 (official site)',
    website: SITE, gmaps: gm('Cenetta Barba 匂天神町'), menu_url: SITE + '/menu',
    notes: '[Italian · south of Shijo, Roman trattoria at night] A nineteen-seat restaurant south of Shijo: a delicate seasonal lunch course by day, robust Roman trattoria cooking à la carte by night — truffle omelette, carbonara, amatriciana, porcini risotto, lamb and venison. Vegetables come from the Ohara morning market. Bib Gourmand 2016–2021. A diner found the ¥4,500 lunch a bit pricey and was unsure if bread refills were free. No service charge or cover. Closed Tuesday.',
    chef_bio: { chef_name: '藤田 紘一 (FUJITA Kohichi, per the official site)', roles: ['Owner-chef (official site: CUOCCO / chef)'], origin: 'Born 1978 in Kyoto (official site).',
      background: 'Per the official site: found the joy of cooking in a part-time restaurant job as a student, joined an Italian restaurant, became its head chef at 27 and held the post for ten years; before going independent travelled through Italy, renting a monthly apartment in Rome; opened Cenetta Barba in 2015 with Roman cooking at its core, a ristorante at lunch and à la carte at night, at 烏丸高辻; buys fresh vegetables and fruit at the Ohara morning market; Michelin Guide Kyoto Bib Gourmand five years running, 2016–2021. The name: cena (supper) and barba (beard, from the roots of field vegetables) (official site).',
      philosophy: 'Official site: local produce for local tables, the spirit of Italian cooking; an easy, happy meal with friends and family.',
      specialty: 'Roman pasta; porcini risotto; truffle omelette.',
      anecdotes: [
        { text: 'A group has held its Christmas and year-end lunch here every December (December 2025).', source: R + 'B457530838/' },
        { text: 'An August 2026 solo diner noticed the next table was offered more bread but not the diner — "I wasn\'t sure if refills were complimentary" — and found the ¥4,500 lunch a bit expensive.', source: R + 'B348070124/' },
        { text: '"Both the neighbors and the people behind us were speaking foreign languages ... It feels like being overseas right in front of the station." — October 2025.', source: R + 'B515578001/' },
      ],
      japanese_sources_summary: '公式サイト (cenettabarba.com): Cenetta Barba、イタリア語で cena は夕食、barba はひげ (畑のイメージのひげ根)、友達や家族との気楽なご飯、昼は季節感を大切にした繊細なコース、夜は肉料理中心の骨太なローマの下町料理をアラカルトで、シェフ 藤田 紘一 (FUJITA Kohichi) は1978年京都生まれ、学生時代のアルバイトで料理の楽しさに目覚めイタリア料理店に就職、27歳で料理長、10年務める、独立前にローマなどイタリア各地を旅しマンスリーアパートで暮らす、2015年にローマ料理を主軸にした Cenetta Barba を烏丸高辻に開店、地産地消、京都大原の朝市で野菜や果物を仕入れる、ミシュランガイド京都ビブグルマン2016〜2021年に5年連続。食べログ: イタリアン・バル、下京区高辻通東入ル匂天神町642、水〜月 12:00〜14:30・18:00〜23:00 (L.O. 21:00)、火曜と月2回ほど不定休、サービス料なし・お通し代なし、19席、禁煙、カード (JCB・AMEX)・電子マネー可、2015年7月10日オープン。口コミ (2024年12月〜2026年8月、英語): 昼のコース4,500円、トリュフのオムレツ、前菜の盛り合わせ、しらすと大葉のジェノヴェーゼ、ポルチーニやゴルゴンゾーラのリゾット、桜海老と生姜のリゾット、ローマ風カルボナーラとアマトリチャーナ、ブカティーニ、からすみのオレキエッテ、仔牛のマルサラ、仔羊のハーブロースト、蝦夷鹿の黒にんにくソース、牛頬肉の赤ワイン煮、自家製フォカッチャとジンジャーエール、ティラミス、毎年12月の忘年会、隣の席は外国語ばかり、昼はやや高い、パンのおかわりを聞かれなかったという声。',
      confidence: 'medium', sources: [TB, SITE, CHEF, R + 'B348070124/', R + 'B457530838/', R + 'B515578001/', R + 'B523301389/', R + 'B524537212/', R + 'B525228900/', R + 'B526888879/', R + 'B526927776/', R + 'B530399515/', R + 'B532198333/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'À la carte at dinner, one course at lunch; staff attentive without fuss (August 2026); book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区高辻通東入ル匂天神町642',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.000290, 135.760214); cross-checked: GSI 京都府京都市下京区匂天神町642番地 (lot) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B348070124/'],
    price_note: 'Lunch course price from an August 2026 review; dinner is à la carte.', last_checked: TODAY, items: [
      it('', '', 'Lunch course of seasonal dishes', '¥4,500', 'Lunch', 'ask', 'ask', 'August 2026.', 'lunch_course'),
      it('', '', 'Truffle omelette (dinner, à la carte)', '', 'Dinner', 'ask', 'no', 'Price not given.', 'omelette'),
    ] }, {
    cuisine: '昼は季節のコース、夜はアラカルトのローマの下町料理 (公式サイト)・昼のコース4,500円 (2026年8月)・これまでの料理: トリュフのオムレツ、2人前の前菜の盛り合わせ、しらすと大葉のジェノヴェーゼ、ポルチーニやゴルゴンゾーラのリゾット、桜海老と生姜のリゾット、ローマ風カルボナーラとアマトリチャーナ、ブカティーニ、からすみのオレキエッテ、仔牛のマルサラソース、仔羊のハーブロースト、Ezo の鹿の黒にんにくソース、牛頬肉の赤ワイン煮、自家製フォカッチャとジンジャーエール、ティラミス、キャラメルのソルベ (2025〜2026年の口コミ)・ミシュランガイド京都ビブグルマン2016〜2021年 (公式サイト)',
    neighborhood: '烏丸高辻、四条の南。阪急烏丸駅・四条駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。パスタ、リゾット、自家製フォカッチャが中心 (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。野菜は大原の朝市から仕入れる (公式サイト) が、料理は肉、チーズ、しらすが多い (2025〜2026年の口コミ)。',
    notes: '[イタリアン・烏丸高辻、夜はローマの下町料理] 四条の南の19席の店で、昼は繊細な季節のコース、夜はトリュフのオムレツ、カルボナーラ、アマトリチャーナ、ポルチーニのリゾット、仔羊や鹿など骨太なローマ料理をアラカルトで。野菜は大原の朝市から。ビブグルマン2016〜2021年。4,500円の昼はやや高い、パンのおかわりが無料かわからなかったという声も。サービス料・お通し代なし。火曜休み。',
  });
}

// ================================================================ 京洛焼肉やぶ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26041584/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '02:00']);
  put({
    id: 'kyoto_keiraku_yakiniku_yabu', name: '京洛焼肉やぶ (Kyoraku Yakiniku Yabu)', category: 'OMNI',
    lat: 35.005145, lng: 135.770328, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; yakiniku with sauces, a sukiyaki-style sauce, cold noodles and garlic rice (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu and offal yakiniku (2026 reviews).',
    hours_raw: 'Tabelog: daily 17:00–02:00. Bookings taken; seating limited to 120 minutes; walk-ins may wait (November 2026). No service charge: Tabelog’s English page says a service fee is added, but the Japanese original says 「無し」. 29 seats: a counter of 11 and five tables; designated smoking area; children welcome; cards, e-money and QR (Tabelog). Orders by QR code (October 2026). Opened 15 August 2024; a second shop, 京洛焼肉やぶ 西院店, opened on 18 October 2026 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Kawaramachi — 1 min walk from Kyoto Kawaramachi Stn',
    cuisine: 'Late-night yakiniku of black wagyu and fresh offal at fair prices · signature wagyu aburi tataki: grill a thick block, the staff dip it in sauce and slice it (2026 reviews) · fresh outside skirt ("legendary fresh outside skirt" ¥1,639), salted tongue under green onion, premium loin and kalbi, special fresh liver, sirloin-cap shabu with sukiyaki sauce, grilled shabu with grated daikon, yukhoe, horumon (2026 reviews) · assorted kimchi ¥858, namul ¥660, choregi salad, beef-tendon stew to start, cold noodles, garlic rice (2026 reviews) · about ¥5,000–6,000 a head with drinks (2026 reviews)',
    website: 'https://www.tiktok.com/@kyorakuyakinku.yabu', gmaps: gm('京洛焼肉やぶ 紙屋町'), menu_url: null,
    notes: '[Yakiniku · Shijo-Kawaramachi, open till 2 am] A busy, clean yakiniku a minute from Kawaramachi Station, open until 2 am, known for value: the signature wagyu aburi tataki — grill a thick block, the staff slice it — fresh outside skirt, tongue under a heap of green onion, and cold noodles to finish, for about ¥5,000–6,000 a head. Book ahead; two-hour seating. A second shop opened in Saiin in October 2026.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 15 August 2024 (Tabelog). Tabelog announces a second shop, 京洛焼肉やぶ 西院店, opened on 18 October 2026, serving high-quality black wagyu and fresh offal at reasonable prices. Reviewers in 2026 describe a long room with a counter at the front and tables behind, lively on weekdays, with QR-code ordering.',
      philosophy: 'Tabelog: high-quality black wagyu and fresh offal at reasonable prices, for after-work meals or gatherings with family and friends.',
      specialty: 'Wagyu aburi tataki; fresh outside skirt.',
      anecdotes: [
        { text: 'A solo diner at 9 pm on a weekday in October 2026 found a quiet street outside but a lively room within.', source: R + 'B538216995/' },
        { text: '"Enjoying such a wide selection of meats along with drinks for under JPY 6,000 per person was quite astonishing." — October 2026.', source: R + 'B537765575/' },
        { text: 'A rainy weekday in November 2026 let one diner walk in without a booking — "What a stroke of luck!"', source: R + 'B538710261/' },
      ],
      japanese_sources_summary: '食べログ: 京洛焼肉やぶ、焼肉・ホルモン・居酒屋、中京区紙屋町356-2 フィル・パーク四条河原町1F、四条河原町駅から徒歩1分、毎日 17:00〜翌2:00、予約可、120分制、サービス料は日本語原文で「無し」(英語版の記載は誤訳)、29席 (カウンター11、2名テーブル1、4名テーブル4)、分煙、子供可、カード・電子マネー・QR可、2024年8月15日オープン、2026年10月18日に西院店オープン (黒毛和牛と新鮮なホルモンをリーズナブルに)、TikTok。口コミ (2026年9月〜11月、英語): 和牛炙りたたき (塊を焼き、スタッフがタレにくぐらせて切る)、生ハラミ (伝説の生ハラミ1,639円)、ねぎたっぷりの塩タン、上ロース、上カルビ、特選生レバー、イチボのしゃぶ焼き (すき焼き風のタレ)、おろしの焼きしゃぶ、ユッケ、ホルモン、キムチ盛り合わせ858円、ナムル660円、チョレギサラダ、お通しの牛すじ煮込み、冷麺、ガーリックライス、QRコードで注文、1人5,000〜6,000円ほど、予約がおすすめ。',
      confidence: 'medium', sources: [TB, R + 'B535274891/', R + 'B537661036/', R + 'B537717844/', R + 'B537749248/', R + 'B537765575/', R + 'B538061712/', R + 'B538216995/', R + 'B538334363/', R + 'B538366643/', R + 'B538710261/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by QR code; staff slice the tataki for you; book ahead for evenings.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区紙屋町356-2 フィル・パーク四条河原町 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.005145, 135.770328); cross-checked: GSI 京都府京都市中京区紙屋町356番地 (lot) 18m; kyoto_diane_kawaramachi_kiyamachi 15 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538216995/'],
    price_note: 'Prices from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Legendary fresh outside skirt', '¥1,639', 'Meat', 'ask', 'no', 'October 2026.', 'harami'),
      it('', '', 'Assorted kimchi (4 kinds)', '¥858', 'Side', 'ask', 'ask', 'October 2026.', 'kimchi'),
      it('', '', 'Assorted namul', '¥660', 'Side', 'ask', 'ask', 'October 2026.', 'namul'),
      it('', '', 'Wagyu aburi tataki', '', 'Meat', 'ask', 'no', 'Price not given.', 'tataki'),
    ] }, {
    cuisine: '黒毛和牛と新鮮なホルモンをリーズナブルに出す深夜までの焼肉・名物の和牛炙りたたき: 塊を焼くとスタッフがタレにくぐらせて切ってくれる (2026年の口コミ)・生ハラミ (「伝説の生ハラミ」1,639円)、ねぎたっぷりの塩タン、上ロース、上カルビ、特選生レバー、すき焼き風のタレのイチボのしゃぶ焼き、おろしの焼きしゃぶ、ユッケ、ホルモン (2026年の口コミ)・キムチ盛り合わせ858円、ナムル660円、チョレギサラダ、お通しの牛すじ煮込み、冷麺、ガーリックライス (2026年の口コミ)・飲み物込みで1人5,000〜6,000円ほど (2026年の口コミ)',
    neighborhood: '四条河原町。京都河原町駅から徒歩1分',
    gf_detail: '要確認。グルテンの情報なし。タレの焼肉、すき焼き風のタレ、冷麺、ガーリックライス (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 和牛とホルモンの焼肉 (2026年の口コミ)。',
    notes: '[焼肉・四条河原町、深夜2時まで] 河原町駅から1分、深夜2時まで開くにぎやかで清潔な焼肉屋。値打ちで評判で、名物の和牛炙りたたき (塊を焼くとスタッフが切ってくれる)、生ハラミ、ねぎたっぷりの塩タン、〆の冷麺で1人5,000〜6,000円ほど。予約がおすすめ、2時間制。2026年10月に西院店も開店。',
  });
}

// ================================================================ クレーム デ ラ クレーム 京都本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26033334/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.cremedelacreme.co.jp/';
  const CO = 'https://www.cremedelacreme.co.jp/company/';
  const H = day(['11:00', '18:30']);
  put({
    id: 'kyoto_creme_de_la_creme', name: 'クレーム デ ラ クレーム 京都本店 (Crème de la Crème Kyoto)', category: 'OMNI',
    lat: 35.009645, lng: 135.760979, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a cream-puff shop — wheat choux pastry, egg tarts and baked sweets; the white-miso choux also contains wheat gluten (fu) (June 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: custard of 茶乃月 eggs, fresh cream, Jersey cream (official site; 2026 reviews).',
    hours_raw: 'Official site (shortened hours for now): shop 11:00–18:30; café 11:00–18:15 (L.O. 17:45) — the café is listed as 11:00–17:30 (L.O. 17:00) on weekdays and to 18:15 at weekends and holidays; no fixed holiday, temporary closures on Instagram. Tabelog: 11:00–19:30 (L.O. 19:00), closed Tuesday. No reservations. 18 café seats with sofas; non-smoking; cards (VISA, Master), no e-money or QR (Tabelog). No service charge listed on Tabelog. Opened 11 November 2019 (Tabelog); the Roppongi Hills shop has closed (official site; June 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Just north of Sanjo — 4 min walk from Karasuma Oike Stn',
    cuisine: 'Cream-puff specialist with a café, run by the Kyoto confectioner 石田老舗 (official site) · Crème de la Crème ¥430, Chanotsuki-egg custard choux ¥380, Jersey cream and Chanotsuki custard ¥460, chocolat ¥400, swan choux ¥440, Kyoto white-miso choux with fu, egg tart, seasonal choux (2026 reviews; official site) · café: peach cream-puff parfait ¥2,970, original teas (2026 reviews) · ice cream, baked sweets, chocolate, gifts (official site)',
    website: SITE, gmaps: gm('クレーム デ ラ クレーム 京都本店'), menu_url: SITE + 'products/',
    notes: '[Cream puffs & café · Karasuma-Oike] A yellow-and-blue cream-puff shop and café near Sanjo from the Meiji-era Kyoto confectioner 石田老舗: custard choux made with Kyoto 茶乃月 eggs, a swan choux, a white-miso choux seen on TV, and towering peach parfaits in the café. Now its only shop since Roppongi closed. Good choux sell out by mid-afternoon; a September 2026 visitor found them pricey. Hours have been shortened — check before going.',
    chef_bio: { chef_name: null, roles: ['Made by specialist pâtissiers (official site); run by 株式会社石田老舗'], origin: null,
      background: 'Per the official site: 株式会社石田老舗, founded 1871 (Meiji 4), president 石田宏次 (sixth generation), about 105 staff, makes and wholesales baked sweets and runs this cream-puff shop; the Kyoto main shop has a café; the Roppongi Hills shop has closed. Opened 11 November 2019 (Tabelog). A June 2026 regular says this is now the only place to buy these cream puffs.',
      philosophy: 'Official site: carefully chosen ingredients and the craft of hand-finished work by specialist pâtissiers.',
      specialty: 'Chanotsuki-egg custard choux; swan choux; white-miso choux.',
      anecdotes: [
        { text: 'A September 2026 visitor arriving at 3 pm found only a few choux left; lunchtime would have been better.', source: R + 'B536530698/' },
        { text: '"They were incredibly delicious! But a bit pricey!" — September 2026.', source: R + 'B536204667/' },
        { text: 'A parent who wanted a parfait settled for a cream puff when the child wanted to go home — and was amazed (September 2026).', source: R + 'B536080167/' },
      ],
      japanese_sources_summary: '公式サイト (cremedelacreme.co.jp): クレーム デ ラ クレーム、京都のシュークリーム専門店、京都本店は当面営業時間短縮 (SHOP 11:00〜18:30、CAFE 11:00〜18:15 L.O. 17:45、平日 CAFE 11:00〜17:30 L.O. 17:00 の表記も)、定休日なし (臨時休業は Instagram)、六本木ヒルズ店閉店、京たまご「茶乃月」のカスタードシュークリーム、季節限定シュークリーム、和スイーツ、焼菓子、チョコレート、ギフト、専門のパティシエの手作り、中京区東洞院通三条上ル曇華院前町449 CASA LOTUS 1F、烏丸御池駅から徒歩4分。会社概要: 株式会社 石田老舗、1871年 (明治4年) 創業、代表取締役社長 石田宏次 (六代目)、社員105名、焼き菓子製造卸とシュークリーム専門店運営。食べログ: シュークリーム・カフェ・ケーキ、11:00〜19:30 (L.O. 19:00)、火曜休み、予約不可、18席、禁煙、カード (VISA・Master)、2019年11月11日オープン。口コミ (2025年8月〜2026年10月、英語): クレーム デ ラ クレーム430円、茶乃月たまごのカスタード380円、ジャージークリームと茶乃月カスタード460円、ショコラ400円、白鳥のシュー440円、京の白味噌シュー (生麩入り)、エッグタルト、桃のシュークリームパフェ2,970円、オリジナルティー、午後には売り切れが多い、高いという声、六本木の店が閉まりここだけに。',
      confidence: 'medium', sources: [TB, SITE, CO, R + 'B490777293/', R + 'B533016052/', R + 'B533851483/', R + 'B534816118/', R + 'B536080167/', R + 'B536204667/', R + 'B536530698/', R + 'B536646785/', R + 'B536679315/', R + 'B536947277/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Choose from the showcase; café seats at the back; no bookings.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区東洞院通三条上ル曇華院前町449 CASA LOTUS 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009645, 135.760979); cross-checked: GSI 京都府京都市中京区曇華院前町449番地 (lot) 64m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536646785/', R + 'B536947277/', R + 'B534816118/'],
    price_note: 'Prices from 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('クレーム デ ラ クレーム', '', 'Crème de la Crème choux', '¥430', 'Choux', 'no', 'no', 'September 2026.', 'cream_puff'),
      it('茶乃月たまごのカスタードシュークリーム', '', 'Chanotsuki-egg custard choux', '¥380', 'Choux', 'no', 'no', 'September 2026.', 'cream_puff'),
      it('', '', 'Swan choux', '¥440', 'Choux', 'no', 'no', 'October 2026.', 'cream_puff'),
      it('', '', 'Peach cream-puff parfait (café)', '¥2,970', 'Café', 'no', 'no', 'August 2026.', 'parfait'),
    ] }, {
    cuisine: '京都の菓子の老舗、石田老舗が営むシュークリーム専門店とカフェ (公式サイト)・クレーム デ ラ クレーム430円、茶乃月たまごのカスタード380円、ジャージークリームと茶乃月カスタード460円、ショコラ400円、白鳥のシュー440円、生麩入りの京の白味噌シュー、エッグタルト、季節のシュー (2026年の口コミ、公式サイト)・カフェ: 桃のシュークリームパフェ2,970円、オリジナルティー (2026年の口コミ)・アイス、焼菓子、チョコレート、ギフト (公式サイト)',
    neighborhood: '三条の北の東洞院通。烏丸御池駅から徒歩4分',
    gf_detail: 'グルテンフリーではない: 小麦のシュー生地、エッグタルト、焼菓子のシュークリーム専門店で、白味噌シューには生麩も入る (2026年6月)。',
    vegan_detail: 'ヴィーガン不可: 茶乃月の卵のカスタード、生クリーム、ジャージークリーム (公式サイト、2026年の口コミ)。',
    notes: '[シュークリームとカフェ・烏丸御池] 三条の北の黄色と青の店で、明治創業の京都の菓子屋 石田老舗が営むシュークリーム専門店とカフェ。京たまご茶乃月のカスタードのシュー、白鳥のシュー、テレビで紹介された白味噌シュー、カフェではボリュームのある桃のパフェ。六本木の店が閉まり今はここだけ。人気のシューは午後には売り切れることが多く、高いという声も。営業時間短縮中なので確認を。',
  });
}

save();
