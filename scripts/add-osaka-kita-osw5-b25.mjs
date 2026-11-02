// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle umeda; worker osw5 (lane: Tabelog id even), batch 25.
//   Ids checked for parity: 27097690 (skip), 27144284, 27155108, 27095726, 27137938 (all even).
//   + ぱとぱと 梅田堂山店 Pato Pato Umeda douyama ten (Italian of Yamato duck and gin in a Doyama basement; second shop of パト梅田)
//   + 串揚げ 心平 梅田店 Kushiage Shinpei Umeda Ten (creative kushiage omakase by a kaiseki-trained owner, since May 2026)
//   + 米増 Yonemasu (eight-seat kaiseki counter in Oyodo-minami, Tabelog Award 2018–2026, cash only)
//   + 鮨 からす 梅田店 Sushi Karasu Umeda ten (black- and red-rice sushi with live squid; Umeda branch of a Juso shop)
//   - skipped かにじぇんぬ 北新地 27097690: chain. A September 2026 PR TIMES release by the QRAUD group (over 20 restaurant brands) says
//     かにじぇんぬ operates in Ginza, Azabu-Juban, Sapporo and Osaka, opened Kanazawa in September 2026 and plans Kyoto Gion — expanding.
//   Chain check: ぱとぱと: invoice T9120001167165 → 株式会社Ａｄａｃｈｉ　Ｇｒｏｕｐ (NTA register); the listing calls it the second shop of
//   "Pato Umeda"; none in data; a small group, kept and flagged. 心平: invoice T7120001236715 → 株式会社ｓｅｃｏｎｄ (NTA register); no other
//   心平 found. 米増: one shop. からす: invoice T2120001214766 → 株式会社ファイブディアライフ (NTA register), the operator of
//   osaka_tora_toriya_ohatsutenjin and osaka_umeda_kani_shokudo (other concepts); October 2026 reviews call this the Umeda branch of a
//   Sushi Karasu popular in Juso; two からす shops, none in data; kept and flagged.
//   None is in data/osaka.json (grep by id, name and address, 2026-11-02). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw5-25');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27097690', 'chain: かにじぇんぬ (QRAUD group), Ginza, Azabu-Juban, Sapporo, Osaka, Kanazawa and Kyoto planned (PR TIMES, September 2026)');

// ================================================================ ぱとぱと 梅田堂山店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27144284/'; const R = TB + 'dtlrvwlst/';
  const W = day(['16:00', '00:00']);
  put({
    id: 'osaka_pato_pato_umeda_doyama', name: 'ぱとぱと 梅田堂山店 (Pato Pato Umeda douyama ten)', category: 'OMNI',
    lat: 34.702506, lng: 135.504692, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Duck dishes alongside pasta, a charcoal-crust Chicago pizza, garlic toast, rare Iberico cutlets and bagna cauda fritters.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog ticks "vegetarian options"; the menu centres on duck and meat, and no vegan dish is named.',
    hours_raw: 'Daily 16:00–24:00 (last order food 23:00, drinks 23:30) (Tabelog). Reservations accepted; starter ¥480 à la carte (Tabelog). Orders after the first drink by QR code on your phone (July 2026). Cards (VISA, Master, JCB, AMEX, Diners), PayPay, d Barai, Rakuten Pay, au PAY, Alipay, WeChat Pay (Tabelog). 32 seats, counter and tables; parties up to 34 seated or 50 standing; heated tobacco only; free Wi-Fi (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W, 6: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '堂山町1-2, basement of R&Eビル, down a staircase to a door that looks like a dead end — 3 min from Higashi-Umeda Stn, 5 min from Umeda Stn',
    cuisine: 'Italian-French bar food around Yamato duck from Nara, with about 50 gins (Tabelog) · courses (Tabelog, tax included): autumn course with Yamato duck, bonito, salmon and ikura, straw grilling ¥4,500 (October–November); "Luxury" course of duck yukhoe, Iberico rare cutlet, pasta, A4 wagyu and duck roast ¥5,000; weekday "P" course with all-you-can-drink ¥3,980; drinks free-flow +¥1,200 · dishes named in 2026: roasted duck breast with red wine sauce and truffle salt, duck loin sashimi with sudachi soy, duck tsukune with cheese, spicy duck skewers, duck sushi with ikura, black-crust Chicago pizza, black wagyu roast beef, eel-and-butter dashimaki, scallops with yuzu sauce, oven-baked bagna cauda fritters, appetizer platter, baked sweet potato with ice cream; No. 3 London Dry Gin and craft-gin ginger ale',
    website: null, gmaps: gm('ぱとぱと 梅田堂山店'), menu_url: null,
    notes: "[Italian · Doyama, duck and gin underground] A stylish wooden basement bar-restaurant in Doyama, the second shop of a duck-and-gin Italian in Umeda, cooking Nara's Yamato duck: roasted breast with red wine and truffle salt, loin sashimi, cheese tsukune, and a black-crust Chicago pizza on the side. About fifty gins line the counter. Courses run ¥3,980–5,000 with drink options; after the first drink you order by phone. Open daily until midnight. One September 2026 diner found the portions small and service cool; others praise the room and food.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed; trained at well-known restaurants after cooking school, per an October 2026 diner)', 'staff'], origin: null, background: 'Per the shop-maintained Tabelog listing: the second location of "Pato Umeda", famous for duck dishes and gin, using Nara Prefecture\'s Yamato duck, and a Chicago pizza. The Tabelog invoice number T9120001167165 is registered to 株式会社Ａｄａｃｈｉ　Ｇｒｏｕｐ (NTA invoice register, read 2026-11-02). An October 2026 diner describes a young chef who trained at renowned restaurants after culinary school.', philosophy: null, specialty: 'Yamato duck; gin.',
      anecdotes: [
        { text: '"The Yamato Duck Loin Sashimi is firm and packed with rich flavor." — July 2026, with No. 3 London Dry Gin.', source: R + 'B531879379/' },
        { text: '"The signature black Chicago pizza features a crust made with charcoal powder, packed with colorful cherry tomatoes and mozzarella." — August 2026.', source: R + 'B534676789/' },
        { text: '"My friend kept ordering the craft gin and ginger ale because it was so good." — September 2026, the ¥4,500 course with drinks.', source: R + 'B535817571/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ぱとぱと 梅田堂山店、イタリアン・パスタ・ピザ、大阪市北区堂山町1-2 R&Eビル B1F、東梅田駅から3分、毎日16:00〜24:00 (L.O.料理23:00、ドリンク23:30)、予約可、単品はお通し480円、カード・QR 可、32席、着席34名・立食50名、加熱式たばこのみ、無料 Wi-Fi、ベジタリアンメニューあり、鴨料理とジンで人気の「Pato Umeda」の2号店、Nara の Yamato 鴨、約50種のジン、シカゴピザ、10〜11月の秋のコース4,500円、Yamato 鴨のユッケやイベリコ豚のレアカツ、パスタ、A4和牛と鴨ロースのローストの贅沢コース5,000円、平日の飲み放題つきPコース3,980円、飲み放題1,200円。インボイス登録は株式会社Ａｄａｃｈｉ　Ｇｒｏｕｐ。口コミ(2026年7月〜10月): 行き止まりのような地下の入口、木の内装、最初の一杯のあとは QR で注文、鴨むねのロースト (赤ワインソースとトリュフ塩)、すだち醤油の鴨ロースの刺身、チーズの鴨つくね、ピリ辛の鴨串、いくらの鴨寿司、炭の生地の黒いシカゴピザ、黒毛和牛のローストビーフ、うなぎとバターのだし巻き、柚子ソースのホタテ、バーニャカウダのフリット、前菜の盛り合わせ、焼き芋とバニラアイス、No. 3 London Dry Gin、クラフトジンのジンジャーエール、量が少なめでサービスがそっけなかったという声、若いシェフ。',
      confidence: 'medium', sources: [TB, R + 'B531878323/', R + 'B531879379/', R + 'B531880671/', R + 'B531881506/', R + 'B531882076/', R + 'B534676789/', R + 'B535817571/', R + 'B537095836/', R + 'B537865853/', R + 'B537960451/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Phone (QR) ordering after the first drink; Alipay and WeChat Pay accepted (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂山町1-2 R&Eビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂山町1番2号 (go) 11m; no other record within 30 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from the Tabelog listing (tax included).', last_checked: TODAY, items: [
      it('', '', 'Autumn course of Yamato duck and autumn ingredients', '¥4,500', 'Courses', 'ask', 'no', 'Tabelog; September 2026.', 'autumn_course'),
      it('', '', '"Luxury" course with duck yukhoe, Iberico cutlet, wagyu and duck roast', '¥5,000', 'Courses', 'ask', 'no', 'Tabelog.', 'luxury_course'),
      it('', '', 'Weekday "P" course with all-you-can-drink', '¥3,980', 'Courses', 'no', 'no', 'Tabelog; October 2026.', 'p_course'),
    ] }, {
    cuisine: 'Nara の Yamato 鴨を中心にしたイタリアンとフレンチのバーの料理に約50種のジン (食べログ)・コース (食べログ、税込): Yamato 鴨、戻りガツオ、秋鮭といくら、わら焼きの秋のコース4,500円 (10〜11月)、鴨のユッケ、イベリコ豚のレアカツ、パスタ、A4和牛と鴨のローストの「贅沢」コース5,000円、平日の飲み放題つき「P」コース3,980円、飲み放題は1,200円追加・2026年の口コミに出てくる料理: 赤ワインソースとトリュフ塩の鴨むねのロースト、すだち醤油の鴨ロースの刺身、チーズの鴨つくね、ピリ辛の鴨串、いくらの鴨寿司、黒い生地のシカゴピザ、黒毛和牛のローストビーフ、うなぎとバターのだし巻き、柚子ソースのホタテ、オーブン焼きのバーニャカウダのフリット、前菜の盛り合わせ、焼き芋とアイス。No. 3 London Dry Gin、クラフトジンのジンジャーエール',
    neighborhood: '堂山町1-2、R&Eビルの地下、階段をおりると行き止まりのようなドア。東梅田駅から3分、梅田駅から5分',
    gf_detail: '要確認。グルテンの情報なし。鴨料理に、パスタ、黒い生地のシカゴピザ、ガーリックトースト、イベリコ豚のレアカツ、バーニャカウダのフリット。',
    vegan_detail: '要確認。食べログに「ベジタリアンメニューあり」とあるが、メニューは鴨と肉が中心で、ヴィーガンの料理の名前はない。',
    notes: '[イタリアン・堂山、地下の鴨とジン] 堂山の地下にあるおしゃれな木の内装のバーレストランで、梅田の鴨とジンのイタリアンの2号店。Nara の Yamato 鴨を、赤ワインとトリュフ塩のむねのロースト、ロースの刺身、チーズのつくねで、黒い生地のシカゴピザも。カウンターにはジンが約50種。コースは3,980〜5,000円で飲み放題も、最初の一杯のあとはスマホで注文。毎日24時まで。量が少なくサービスがそっけなかったという声もある (2026年9月) が、内装と料理をほめる声が多い。',
  });
}

// ================================================================ 串揚げ 心平 梅田店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27155108/'; const R = TB + 'dtlrvwlst/';
  const W = day(['12:00', '16:00'], ['17:00', '23:00']);
  put({
    id: 'osaka_kushiage_shinpei_umeda', name: '串揚げ 心平 梅田店 (Kushiage Shinpei Umeda Ten)', category: 'OMNI',
    lat: 34.703740, lng: 135.504553, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a kushiage omakase of battered and crumbed skewers, including croquettes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: shrimp, wagyu, foie gras, eel and octopus skewers; dashi soy among the dips.',
    hours_raw: 'Tue–Sun and holidays 12:00–16:00 (last order 15:30) and 17:00–23:00 (last order 22:30); closed Mondays, or the next day when Monday is a holiday (Tabelog). Courses only; the stop-system course ends when you say (October 2026). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), IC cards and other e-money, PayPay (Tabelog). 11 counter seats; heated tobacco only (Tabelog). Opened 1 May 2026 (October 2026).',
    hours: { 1: W, 2: W, 3: W, 4: W, 5: W, 6: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '堂山町11-14, ground floor of 那由多ビル — near Nakazakicho Stn',
    cuisine: 'Creative kushiage omakase by an owner with a kaiseki background, using Osaka vegetables and specialties from around Japan, with wine and sake (Tabelog) · courses (Tabelog, tax included): "Yoi" twelve skewers with kuruma shrimp and A5 wagyu fillet ¥4,800; "Tasogare" eighteen with foie gras ¥7,800; "Akatsuki" stop-system from about ten skewers ¥4,500 · skewers named in October–November 2026: sweet shrimp, A5 wagyu with salt or sauce, octopus with pickled ginger, doteyaki, eel rolls, croquettes; dips of house ponzu, dashi soy, mustard-sesame sauce and salt, a sauce pot for each guest',
    website: null, gmaps: gm('串揚げ 心平 梅田店'), menu_url: null,
    notes: "[Kushiage · Doyama, a creative skewer omakase] An eleven-seat kushiage counter in Doyama, opened in May 2026 by an owner trained in kaiseki, frying light-battered skewers of Osaka vegetables and seasonal fish and meat: sweet shrimp, A5 wagyu, octopus with pickled ginger, doteyaki, eel rolls. Choose twelve skewers for ¥4,800, eighteen with foie gras for ¥7,800, or say stop when full; each guest gets a personal sauce pot. Open for lunch too. One October 2026 big eater found the 18-skewer course a little light.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), with kaiseki experience', 'staff'], origin: null, background: 'Per the shop-maintained Tabelog listing: an adult kushiage specialty restaurant whose owner, with experience in kaiseki cuisine, offers playful, creative kushikatsu using local Osaka ingredients and regional specialties, with wine and sake. The Tabelog invoice number T7120001236715 is registered to 株式会社ｓｅｃｏｎｄ (NTA invoice register, read 2026-11-02). An October 2026 diner gives the opening date as 1 May 2026.', philosophy: null, specialty: 'Creative kushiage; Osaka ingredients.',
      anecdotes: [
        { text: '"In particular, the deep-fried octopus with pickled ginger and doteyaki are dishes that truly reflect the essence of Osaka." — October 2026.', source: R + 'B536575163/' },
        { text: '"The eel and croquettes, which are not commonly found in kushiage restaurants, were also very tasty." — October 2026; each guest had a personal sauce pot.', source: R + 'B537712065/' },
        { text: '"However, as a big eater, I found the 8000 JPY course with 18 skewers a bit lacking." — October 2026.', source: R + 'B537858678/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 串揚げ 心平 梅田店、串揚げ・居酒屋・日本料理、大阪市北区堂山町11-14 那由多ビル 1F、火〜日・祝12:00〜16:00 (L.O.15:30)、17:00〜23:00 (L.O.22:30)、月曜休み (祝日の場合は翌日)、カード・電子マネー・PayPay 可、カウンター11席、加熱式たばこのみ、会席出身の店主の遊び心のある創作串揚げ、大阪の地元の食材と各地の名産、ワインと日本酒、車えびと A5和牛ヒレの「Yoi」12品4,800円、フォアグラも入る「Tasogare」18品7,800円、ストップ制の「Akatsuki」約10本から4,500円。インボイス登録は株式会社ｓｅｃｏｎｄ。口コミ(2026年10月〜11月): 2026年5月1日オープン、甘えび、A5和牛 (塩かたれ)、紅しょうがとたこ、どて焼き、うなぎ巻き、コロッケ、自家製ポン酢、だし醤油、からしごまだれ、塩、ひとりずつのソース、大阪の野菜、コースのみ、値段が書いていなくて不安だったという声、量が少し物足りないという声、ランチの12品4,800円。',
      confidence: 'medium', sources: [TB, R + 'B536575163/', R + 'B536667515/', R + 'B536796038/', R + 'B537275052/', R + 'B537513435/', R + 'B537635466/', R + 'B537712065/', R + 'B537858678/', R + 'B538239002/', R + 'B538445888/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter omakase; an October 2026 diner recommends it to travellers for Osaka specialities. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂山町11-14 那由多ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂山町11番14号 (go) 7m; no other record within 30 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from the Tabelog listing (tax included).', last_checked: TODAY, items: [
      it('', '', '"Yoi" course, twelve skewers', '¥4,800', 'Courses', 'no', 'no', 'Tabelog; October–November 2026.', 'yoi'),
      it('', '', '"Tasogare" course, eighteen skewers with foie gras', '¥7,800', 'Courses', 'no', 'no', 'Tabelog.', 'tasogare'),
      it('', '', '"Akatsuki" stop-system course, from about ten skewers', '¥4,500', 'Courses', 'no', 'no', 'Tabelog.', 'akatsuki'),
    ] }, {
    cuisine: '会席出身の店主の創作串揚げのおまかせで、大阪の野菜と各地の名産、ワインと日本酒 (食べログ)・コース (食べログ、税込): 車えびと A5和牛ヒレの12本の「Yoi」4,800円、フォアグラも入る18本の「Tasogare」7,800円、約10本からのストップ制の「Akatsuki」4,500円・2026年10月〜11月の口コミに出てくる串: 甘えび、塩かたれの A5和牛、紅しょうがとたこ、どて焼き、うなぎ巻き、コロッケ。たれは自家製ポン酢、だし醤油、からしごまだれ、塩で、ソースはひとりずつ',
    neighborhood: '堂山町11-14、那由多ビルの1階。中崎町駅の近く',
    gf_detail: 'グルテンフリーではありません。衣とパン粉の串揚げのおまかせで、コロッケも。',
    vegan_detail: 'ヴィーガンではありません。えび、和牛、フォアグラ、うなぎ、たこの串で、たれにはだし醤油も。',
    notes: '[串揚げ・堂山、創作串のおまかせ] 2026年5月に堂山に開いた11席の串揚げのカウンターで、会席出身の店主が大阪の野菜や季節の魚と肉を軽い衣で揚げる: 甘えび、A5和牛、紅しょうがとたこ、どて焼き、うなぎ巻き。12本4,800円、フォアグラ入りの18本7,800円、または満腹になったらストップ。ソースはひとりずつ。昼も営業。よく食べる人には18本では少し物足りなかったという声も (2026年10月)。',
  });
}

// ================================================================ 米増
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270108/27095726/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_yonemasu_oyodo', name: '米増 (Yonemasu)', category: 'MOM_AND_POP',
    lat: 34.703050, lng: 135.487663, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. A monthly kaiseki menu built on dashi and seasonal fish; ask when booking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kaiseki of fish and seafood in dashi.',
    hours_raw: 'Lunch from 14:00 and dinner from 17:30, all guests starting together; closed Wednesdays and Sundays; hours may change (Tabelog). Reservation only, by the day before (Tabelog); openings are posted on Instagram (July 2026). Service charge 10% (Tabelog). Cash only: no cards, e-money or QR (Tabelog). 8 seats at a white-wood counter; non-smoking (Tabelog; September 2026). Photos of the dishes are restricted (September 2026). Opened in 2016 (September 2026).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: '大淀南1-9-16, ground floor of 山彦ビル, by the Oyodo Junior High School South crossing on Naniwa-suji — 7 min from JR Fukushima Stn',
    cuisine: 'Kaiseki at an eight-seat counter, a menu that changes each month with the calendar: the menu card maps where each ingredient comes from (Tabelog; September 2026) · named in 2026: kazunoko from Shari in Hokkaido, ayu from the Takatsu River with tasting comparisons, autumn dishes with hiyaoroshi sake; beer in antique Baccarat glasses · about ¥30,000–40,000 a head per reviews (2026) · Tabelog Award Silver in 2019–2023 and 2025, Bronze in 2018, 2024 and 2026; Japanese cuisine WEST 100 in 2021, 2023 and 2025 (Tabelog)',
    website: null, gmaps: gm('米増 大淀南'), menu_url: null,
    notes: "[Kaiseki · Oyodo-minami, a couple's eight-seat counter] One of Osaka's most decorated kaiseki counters, eight seats in a quiet street near Fukushima, with Tabelog Awards every year since 2018. The chef, who trained at the famous Honkotsuki in Osaka, cooks a monthly menu shaped by the seasons and festivals, its card mapping each ingredient's origin, while the chef's wife hosts in kimono. Lunch starts at 14:00 and dinner at 17:30, everyone together; expect ¥30,000–40,000 with drinks. Book well ahead or watch Instagram for openings; cash only; photos restricted.",
    chef_bio: { chef_name: 'Yoshiyuki Yonemasu', roles: ['Owner-chef (named in a September 2026 review)', 'the owner\'s wife, in kimono, at the counter'], origin: null, background: 'Per a September 2026 diner: chef Yoshiyuki Yonemasu trained under Master Anami at the renowned Honkotsuki ("Honko Getsu") in Osaka and opened in 2016; another September 2026 diner describes the owner, trained at places such as "Honko Getsu" and "Kagaman", talking across the counter with the wife, in kimono. Per the Tabelog listing: Tabelog Award Silver 2019–2023 and 2025, Bronze 2018, 2024 and 2026; Japanese cuisine WEST 100 in 2021, 2023 and 2025; cash only. The name appears only in Latin letters in the sources read.', philosophy: null, specialty: 'Monthly seasonal kaiseki.',
      anecdotes: [
        { text: '"Looking at the map, I feel excited about what kind of dishes I will encounter today." — September 2026, a seventh visit, of the menu card.', source: R + 'B437475810/' },
        { text: '"Due to restrictions on posting photos, I haven\'t shared much about Yonemasu." — August 2026; Takatsu River ayu with tasting comparisons.', source: R + 'B469159071/' },
        { text: '"We started with our usual glass of beer, served in an antique Baccarat glass" — September 2026, a 23rd visit.', source: R + 'B240360107/' },
      ],
      japanese_sources_summary: '食べログ: 米増、日本料理、大阪市北区大淀南1-9-16 山彦ビル 1F、JR 大阪駅から15分、JR 福島駅から7分、なにわ筋の大淀中学南の交差点、昼14:00、夜17:30、水曜と日曜休み、予約のみ (前日まで)、サービス料10%、カード・電子マネー・QR 不可、カウンター8席、禁煙、食べログアワード Silver 2019〜2023・2025、Bronze 2018・2024・2026、日本料理 WEST 百名店 2021・2023・2025。口コミ(2024年3月〜2026年10月): 月ごとの献立、季節の言葉を書いたお品書きと日本地図の産地、Shari の数の子、Takatsu 川の鮎の食べくらべ、ひやおろし、アンティークのバカラのグラスのビール、Honkotsuki で修業、店主と着物の奥さん、2016年オープン、料理の写真は投稿禁止、Instagram で空きを案内、ひとり3〜4万円。',
      confidence: 'medium', sources: [TB, R + 'B240360107/', R + 'B414015746/', R + 'B437475810/', R + 'B458121745/', R + 'B469159071/', R + 'B481424590/', R + 'B515694555/', R + 'B535148754/', R + 'B535430141/', R + 'B538516587/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation-only counter; cash only; photos restricted (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市北区大淀南1-9-16 山彦ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with the 2026 Bronze award; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区大淀南一丁目9番16号 (go) 12m; no other record within 30 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No menu prices in the sources read; reviews report ¥30,000–40,000 a head with drinks; 10% service.', last_checked: TODAY, items: [
      it('', '', 'Monthly kaiseki course', '', 'Courses', 'ask', 'no', 'Tabelog; 2026.', 'kaiseki'),
    ] }, {
    cuisine: '8席のカウンターの懐石で、献立は月ごと、お品書きには食材の産地を日本地図で (食べログ、2026年9月)・2026年の口コミに出てくるもの: Shari の数の子、Takatsu 川の鮎の食べくらべ、秋の料理とひやおろし、アンティークのバカラのグラスのビール・口コミではひとり3〜4万円ほど (2026年)・食べログアワード Silver 2019〜2023・2025、Bronze 2018・2024・2026、日本料理 WEST 百名店 2021・2023・2025 (食べログ)',
    neighborhood: '大淀南1-9-16、山彦ビルの1階、なにわ筋の大淀中学南の交差点のそば。JR 福島駅から7分',
    gf_detail: '要確認。グルテンの情報なし。だしと季節の魚の月替わりの懐石。予約のときに確認を。',
    vegan_detail: 'ヴィーガンではありません。だしの魚と魚介の懐石。',
    notes: '[懐石・大淀南、夫婦の8席のカウンター] 福島の近くの静かな通りにある、大阪でもっとも評価の高い懐石のカウンターのひとつで8席、2018年から毎年食べログアワード。Osaka の Honkotsuki で修業した店主が季節と行事に合わせた月替わりの献立を作り、お品書きには食材の産地の地図。着物の奥さんが迎える。昼は14時、夜は17時半に一斉スタート、飲み物込みで3〜4万円ほど。早めの予約か Instagram の空きを。現金のみ、料理の写真は制限あり。',
  });
}

// ================================================================ 鮨 からす 梅田店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27137938/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:30', '22:00']);
  put({
    id: 'osaka_sushi_karasu_umeda', name: '鮨 からす 梅田店 (Sushi Karasu Umeda ten)', category: 'OMNI',
    lat: 34.704060, lng: 135.504636, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sushi on black squid-ink rice or red-vinegar rice, saikyo-miso fish, squid-leg tempura, chawanmushi.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi and seafood course with live squid.',
    hours_raw: 'Tue–Sun in two seatings, 17:30–19:30 (last order 19:00) and 20:00–22:00 (last order 21:30); closed Mondays and 31 December–4 January (Tabelog). Reservations; cancelled at 15 minutes late without notice (Tabelog). Service charge 10% (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), PayPay, Alipay, WeChat Pay (Tabelog). 8 counter seats; non-smoking; wheelchair accessible (Tabelog).',
    hours: { 1: W, 2: W, 3: W, 4: W, 5: W, 6: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '堂山町12-14, ground floor of 布山ビル — 5 min from the Umeda stations',
    cuisine: 'Sushi on two rices cooked in a high-end rice cooker: black rice (with squid ink) for tuna and fatty fish, red-vinegar rice for white fish, with live squid from the tank (Tabelog; October 2026) · courses (Tabelog, tax included): "Kiwami" of 13 sushi and 8 dishes with live squid ¥12,100; with three local sakes ¥14,300; "Shizu" of 19 items ¥9,900 when squid is off (October 2026) · dishes named in October 2026: squid tentacles with nuta, seared bonito, saikyo-miso sablefish, chawanmushi, a small bowl of uni, crab and ikura, Indian bluefin otoro, Akashi sea bream, Spanish mackerel, marinated mackerel, kawahagi with liver, kinmedai, scallop, swordtip squid, shrimp, eel, whale tongue',
    website: null, gmaps: gm('鮨 からす 梅田店'), menu_url: null,
    notes: "[Sushi · Doyama, black rice and live squid] An eight-seat sushi counter in Doyama, the Umeda branch of a sushi shop popular in Juusan (Juso), known for two rices: black, made with squid ink, for tuna and oily fish, and red-vinegar for white fish. When the tank has squid, it is cut live in front of you, the legs served as tempura or grilled. The ¥12,100 'Kiwami' course brings thirteen pieces and eight dishes; the ¥9,900 'Shizu' course runs to nineteen items. Two seatings, 10% service; Alipay and WeChat Pay accepted.",
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed)', 'staff'], origin: null, background: 'Per the shop-maintained Tabelog listing: seven or eight counter seats designed so guests can watch the cooking, rice made in a high-end rice cooker, black and red rice, live squid. The Tabelog invoice number T2120001214766 is registered to 株式会社ファイブディアライフ (NTA invoice register, read 2026-11-02), which also runs osaka_tora_toriya_ohatsutenjin and osaka_umeda_kani_shokudo. October 2026 diners call it the Umeda branch of a Sushi Karasu that is popular in Juusan.', philosophy: null, specialty: 'Black-rice sushi; live squid.',
      anecdotes: [
        { text: '"With all seats at the counter, it was great to enjoy conversations with the chef and watch the cooking process up close." — October 2026; red rice for white fish, black rice for fatty tuna.', source: R + 'B537507292/' },
        { text: '"I visited the Umeda branch of Sushi Karasu, which has been gaining popularity in Juusan." — October 2026, the Shizu course.', source: R + 'B537657664/' },
        { text: '"Particularly memorable was the grilled sawara sashimi with daikon radish and karasumi." — October 2026.', source: R + 'B538289610/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 鮨 からす 梅田店、寿司・海鮮・かに、大阪市北区堂山町12-14 布山ビル 1F、梅田の各駅から5分、火〜日の2部制 (17:30〜19:30、20:00〜22:00)、月曜休み、12月31日〜1月4日休み、連絡なく15分遅れると自動キャンセル、サービス料10%、カード・PayPay・Alipay・WeChat Pay 可、カウンター8席、禁煙、車いす可、高級炊飯器で炊くシャリ、黒いシャリ (イカスミ) と赤酢のシャリ、活イカ、活イカと寿司13貫と一品8品の「極」12,100円、地酒3種のペアリングつき14,300円。インボイス登録は株式会社ファイブディアライフ (osaka_tora_toriya_ohatsutenjin、osaka_umeda_kani_shokudo と同じ)。口コミ(2026年10月): 白身は赤シャリ、マグロや脂の魚は黒シャリ、生け簀の活イカ、イカのゲソのぬた、カツオのたたき、銀だらの西京焼き、茶碗蒸し、ウニ・カニ・いくらの小丼、インドマグロの大トロ、Akashi の鯛、サワラ、しめさば、肝のカワハギ、キンメダイ、ホタテ、ケンサキイカ、エビ、うなぎ、鯨のさえずり、イカがない日は19品の「静」9,900円、Juusan で人気の鮨からすの梅田店という声。',
      confidence: 'medium', sources: [TB, R + 'B537468553/', R + 'B537507292/', R + 'B537540502/', R + 'B537596791/', R + 'B537627466/', R + 'B537657664/', R + 'B538213896/', R + 'B538289610/', R + 'B538320897/', R + 'B538498470/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter omakase; Alipay and WeChat Pay accepted (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂山町12-14 布山ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂山町12番14号 (go) 3m; no other record within 30 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B537657664/'],
    price_note: 'Course prices from the Tabelog listing (tax included; 10% service extra); the Shizu course from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', '"Kiwami" course: 13 sushi and 8 dishes with live squid', '¥12,100', 'Courses', 'ask', 'no', 'Tabelog.', 'kiwami'),
      it('', '', '"Kiwami" with a three-sake pairing', '¥14,300', 'Courses', 'ask', 'no', 'Tabelog.', 'kiwami_pairing'),
      it('', '', '"Shizu" course, 19 items', '¥9,900', 'Courses', 'ask', 'no', 'October 2026.', 'shizu'),
    ] }, {
    cuisine: '高級炊飯器で炊く2種のシャリの寿司: マグロや脂の魚には黒いシャリ (イカスミ)、白身には赤酢のシャリ、生け簀の活イカも (食べログ、2026年10月)・コース (食べログ、税込): 活イカと寿司13貫と一品8品の「極」12,100円、地酒3種つき14,300円、イカがない日は19品の「静」9,900円 (2026年10月)・2026年10月の口コミに出てくる料理: ゲソのぬた、カツオのたたき、銀だらの西京焼き、茶碗蒸し、ウニ・カニ・いくらの小丼、インドマグロの大トロ、Akashi の鯛、サワラ、しめさば、肝のカワハギ、キンメダイ、ホタテ、ケンサキイカ、エビ、うなぎ、鯨のさえずり',
    neighborhood: '堂山町12-14、布山ビルの1階。梅田の各駅から5分',
    gf_detail: '要確認。グルテンの情報なし。イカスミの黒いシャリか赤酢のシャリの寿司、西京焼き、ゲソの天ぷら、茶碗蒸し。',
    vegan_detail: 'ヴィーガンではありません。活イカのある寿司と魚介のコース。',
    notes: '[寿司・堂山、黒いシャリと活イカ] 堂山の8席の寿司のカウンターで、Juusan で人気の鮨店の梅田店。シャリは2種類で、マグロや脂の魚にはイカスミの黒いシャリ、白身には赤酢のシャリ。生け簀にイカがあれば目の前でさばき、ゲソは天ぷらか塩焼きに。12,100円の「極」は寿司13貫と一品8品、9,900円の「静」は19品。2部制、サービス料10%、Alipay や WeChat Pay も使える。',
  });
}

save();
