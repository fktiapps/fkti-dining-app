// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first — lane osw3 (Tabelog id mod 4 = 2), batch 7.
//   + 食堂ペスカ Shokudo Pesca (Japanese-Italian izakaya off Doguya-suji, sister of PESCA Shinsaibashi; opened 2024)
//   + 浪速炉ばた 東洋小噺 Naniwa Robata Toyo Kobayashi (robata and seafood izakaya by Namba Stn; opened 2025)
//   + Moegi (negiyaki and okonomiyaki in an Ura Namba back alley; opened 2019)
//   + き多や 本店 Kitaya Honten (couple-run bakery in Minami-Senba since 2000; takeaway)
//   - skip 和牛 焼肉 すき焼き 五天五 道頓堀 27151062 (expanding brand; 鮨 五天五 OSAKA already in data)
//   - skip 月化粧 なんば店 27099638 (souvenir-sweets chain of 30+ shops)
//   Lane: the first ids with id mod 4 = 2 in `queue.mjs osaka next notable 80` (2026-11-01, after batch 6):
//   27140654, 27146502, 27113630, 27151062 (skip), 27099638 (skip), 27013306 (last two digits 54, 02, 30, 62, 38, 06:
//   each = 2 mod 4). None is in data/osaka.json (grep by Tabelog id, name, romaji and address).
//   Chain check. Shokudo Pesca: a second concept of PESCA (osaka_pesca_shinsaibashi in data, whose record notes reviews
//   mentioning a Namba branch and 食堂ペスカ); kept as a different concept, as in earlier batches. Toyo Kobayashi: one of ten
//   different concepts in the 十忠八九 group (株式会社オーゼットカンパニー; lit.link/10chu89; PR TIMES on its 10th shop);
//   the only robata, none of the group in data; kept and flagged. Moegi: one shop. Kitaya: the main shop of two (reviews
//   name a second shop nearby). Gotengo: the Dotonbori wagyu shop (opened August 2025, Tabelog), 京都五天五 Karasuma
//   (opened November 2025, per a foodle.pro post seen in search) and 鮨 五天五 OSAKA (osaka_sushi_gotengo_umeda, in data):
//   a brand opening several shops a year under 株式会社WILL, so skipped. 月化粧: the 青木松風庵 group's
//   brand, 27 shops in Osaka/Wakayama and 7 in Nara per its 2026 recruitment pages, so skipped.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw3-7');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27151062', 'Expanding brand: 京都五天五 / 五天五 shops opened in Dotonbori (Aug 2025) and Kyoto Karasuma (Nov 2025) under 株式会社WILL; 鮨 五天五 OSAKA already in data (osaka_sushi_gotengo_umeda)');
skip('27099638', 'Chain: 月化粧 is the 青木松風庵 group brand, 27 shops in Osaka/Wakayama and 7 in Nara (2026 recruitment pages)');

// ================================================================ 食堂ペスカ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27140654/'; const R = TB + 'dtlrvwlst/';
  const H = day(['15:00', '00:00']);
  put({
    id: 'osaka_shokudo_pesca_namba', name: '食堂ペスカ (Shokudo Pesca)', category: 'OMNI',
    lat: 34.663611, lng: 135.503416, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Carpaccio, roast beef, grilled squid and salmon are on the menu beside pasta, tonkatsu, fried shrimp, kadaif rolls and walnut bread; nothing is described as gluten-free.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The shop-maintained Tabelog listing says there are vegetarian options and that the kitchen is particular about vegetables; a stuffed green-pepper appetizer and a caprese appear in reviews, but neither is vegan as described and no vegan dish is named.',
    hours_raw: 'Daily 15:00–24:00 (Tabelog; an older note on the listing names two Monday closures in July). Reservations recommended: fully booked on weekday evenings in September and October 2026, though early walk-ins got in (September 2026). Pairs are usually seated at the 1F counter, larger groups upstairs (September 2026). Cards (VISA, Master, JCB, AMEX, Diners; PIN needed for IC cards) and PayPay; no e-money (Tabelog). 32 seats: a 12-seat counter facing the open kitchen on 1F and tables on 2F; private hire for 20–50; non-smoking; children welcome (Tabelog). Opened 8 April 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba Sennichimae 14-18, 道具屋筋横丁, in a narrow alley off Doguya-suji — 4 min from Namba Stn (Midosuji Line, Nankai)',
    cuisine: 'Japanese-Italian small plates for drinking, from the team behind PESCA (2026 reviews) · e.g. a stuffed raw green-pepper appetizer, prosciutto with fruit and mascarpone, chicken-liver pâté with walnut bread, caprese, fig-wrapped prosciutto, sea-bream carpaccio, tuna tartare, shrimp, shiso and myoga rolled in kadaif, seared spear squid with salt and sudachi, grilled salmon, tripe with root vegetables in white miso, bacon potato salad, taro fries (September–October 2026) · mains: Hirata Farm tonkatsu with truffle salt, wagyu roast-beef "sukiyaki" with egg, pasta with conger eel and karasumi, wagyu pasta, fried shrimp, curry chazuke, a sour-spicy ramen (2026) · a wide drinks list with wine including organic bottles, sake and cocktails · portions are small (several 2026 diners); about ¥4,000–¥8,000 a head (2026)',
    website: null, gmaps: gm('食堂ペスカ 難波'), menu_url: null,
    notes: "[Izakaya · Namba, Japanese-Italian plates from the PESCA team] Down an alley off Doguya-suji that one diner found almost unsettling to walk, a glass-fronted counter facing an open kitchen, with tables upstairs: the second concept from the people behind the Italian restaurant PESCA, open since April 2024. Plates are small and made for drinking: kadaif-wrapped shrimp with shiso and myoga, seared spear squid with sudachi, prosciutto with fruit and mascarpone, tripe in white miso, then the dishes diners name most, a Hirata Farm tonkatsu with truffle salt, a wagyu roast-beef sukiyaki and a pasta of conger eel and karasumi. Wine runs to organic bottles. It fills up most evenings, so book; portions are modest. Open daily from 15:00 to midnight.",
    chef_bio: { chef_name: null, roles: ['Chefs (unnamed), working in an open kitchen (2026 reviews)'], origin: null,
      background: 'Shop-maintained (corporate-member) Tabelog listing; opened 8 April 2024. Diners call it a sister restaurant and new concept of PESCA, the Italian restaurant in Shinsaibashi (osaka_pesca_shinsaibashi; that record notes reviews mentioning a Namba branch and 食堂ペスカ). The listing says the kitchen is particular about vegetables, fish, sake and wine.',
      philosophy: null, specialty: 'Hirata Farm tonkatsu with truffle salt; small Japanese-Italian plates; organic wine.',
      anecdotes: [
        { text: '"It was a bit hard to find, and I almost walked into the sister restaurant, Italian Pesca (laughs)." — September 2026, a first visit.', source: R + 'B536204488/' },
        { text: '"The food was incredibly tasty and satisfying, but I felt bad ordering from the busy staff" — October 2026, tripe and tonkatsu.', source: R + 'B537167637/' },
        { text: '"However, the portions were small, making it less cost-effective for big eaters." — October 2026.', source: R + 'B537581442/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 食堂ペスカ、居酒屋・イタリアン・創作料理、難波千日前14-18 道具屋筋横丁、Namba 駅 (Midosuji Line・Nankai) から徒歩4分、毎日15:00〜24:00、カード・PayPay可、32席 (1階カウンター12、2階テーブル)、貸切20〜50名、禁煙、子ども可、野菜と魚にこだわり、ベジタリアンメニューあり、日本酒とワインにこだわり、2024年4月8日オープン。口コミ(2026年9月〜10月): 姉妹店はイタリアンのペスカ、オープンキッチンの1階カウンター、2階はテーブル、海老 大葉 みょうが カダイフ巻き、炙りヤリイカ塩すだち、生ハムとフルーツとマスカルポーネ、白味噌のトリッパ、Hirata Farm のとんかつ、和牛のローストビーフのすき焼き、鱧とからすみのパスタ、自然派のワイン、平日の夜も予約で満席、量は少なめ。',
      confidence: 'medium', sources: [TB, R + 'B536204488/', R + 'B536250020/', R + 'B536417623/', R + 'B536687118/', R + 'B537167637/', R + 'B537209012/', R + 'B537236189/', R + 'B537581442/', R + 'B537814734/', R + 'B537834338/', R + 'B538223899/', R + 'B538444362/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order from staff at the counter or tables. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前14-18 道具屋筋横丁',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前14番18号 (go) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536204488/', R + 'B538223899/'],
    price_note: 'No menu posted online; dishes from September–October 2026 reviews, unpriced.', last_checked: TODAY, items: [
      it('海老 大葉 みょうが カダイフ巻き', '', 'Shrimp, shiso and myoga rolled in kadaif', '', 'Small plates', 'no', 'no', 'September 2026 (name from the review\'s Japanese caption).', 'kadaif_shrimp'),
      it('炙りヤリイカ塩すだち', '', 'Seared spear squid with salt and sudachi', '', 'Small plates', 'ask', 'no', 'September 2026 (name from the review\'s Japanese caption).', 'yariika'),
      it('', '', 'Hirata Farm tonkatsu with truffle salt', '', 'Mains', 'no', 'no', 'October 2026.', 'tonkatsu'),
      it('', '', 'Wagyu roast-beef sukiyaki with egg', '', 'Mains', 'ask', 'no', 'October 2026.', 'roast_beef_sukiyaki'),
      it('', '', 'Pasta with conger eel and karasumi', '', 'Mains', 'no', 'no', 'September–October 2026.', 'karasumi_pasta'),
    ] }, {
    cuisine: 'ペスカのチームによる和とイタリアンの酒の肴 (2026年の口コミ)・たとえば生のピーマンの肉詰めのお通し、生ハムとフルーツとマスカルポーネ、くるみパンと鶏レバーのパテ、カプレーゼ、いちじくの生ハム巻き、鯛のカルパッチョ、まぐろのタルタル、海老 大葉 みょうが カダイフ巻き、炙りヤリイカ塩すだち、焼きサーモン、白味噌の根菜とトリッパ、ベーコンのポテトサラダ、里芋のフライ (2026年9〜10月)・しっかりしたもの: トリュフ塩のHirata Farm のとんかつ、卵で食べる和牛のローストビーフのすき焼き、鱧とからすみのパスタ、和牛のパスタ、エビフライ、カレー茶漬け、酸辣のラーメン (2026年)・自然派を含むワイン、日本酒、カクテルなど飲み物が豊富・量は少なめ (2026年の複数の口コミ)、1人4,000〜8,000円ほど (2026年)',
    neighborhood: '難波千日前14-18 道具屋筋横丁、Doguya-suji から入った細い路地。Namba 駅 (Midosuji Line・Nankai) から徒歩4分',
    gf_detail: '要確認。グルテンの情報なし。カルパッチョ、ローストビーフ、焼きヤリイカ、サーモンの一方で、パスタ、とんかつ、エビフライ、カダイフ巻き、くるみパンも。グルテンフリーの説明はない。',
    vegan_detail: '要確認。店の食べログにはベジタリアンメニューあり、野菜にこだわりとある。口コミにはピーマンの肉詰めのお通しやカプレーゼが出てくるが、どちらも書かれている限りヴィーガンではなく、ヴィーガンの料理の名前はない。',
    notes: '[居酒屋・難波、ペスカのチームの和とイタリアンの小皿] Doguya-suji から入った、ちょっと不安になるほどの路地の奥 (という声も)。ガラス張りの店にオープンキッチンを囲むカウンター、2階にテーブル。イタリアン PESCA の人たちによる2つめの業態で、2024年4月から。皿は小さめで酒に合わせるもの: 大葉とみょうがの海老のカダイフ巻き、すだちの炙りヤリイカ、生ハムとフルーツとマスカルポーネ、白味噌のトリッパ。口コミで名前が多いのはトリュフ塩のHirata Farm のとんかつ、和牛のローストビーフのすき焼き、鱧とからすみのパスタ。ワインは自然派も。夜はたいてい満席なので予約を。量は控えめ。毎日15時から24時まで。',
  });
}

// ================================================================ 浪速炉ばた 東洋小噺
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27146502/'; const R = TB + 'dtlrvwlst/'; const GROUP = 'https://lit.link/10chu89';
  const H = day(['16:00', '23:00']);
  put({
    id: 'osaka_naniwa_robata_toyo_kobayashi_namba', name: '浪速炉ばた 東洋小噺 (Naniwa Robata Toyo Kobayashi)', category: 'OMNI',
    lat: 34.666434, lng: 135.499506, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sashimi, salt-grilled fish and grilled vegetables are the plainest; tempura, oden, negiyaki and dishes with soy-based sauces are on the same menu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood and robata izakaya; the appetizer was a shijimi clam soup and the oden and grills are fish and meat (October 2026). Grilled edamame and sliced onion appear in reviews.',
    hours_raw: 'Daily 16:00–23:00 (last order 22:30) (Tabelog). Reservations recommended: fully booked at 18:00 on a Saturday and at 21:00 on a Sunday (October–November 2026); seat requests are not guaranteed, two hours at a table when busy, with last orders at 90 minutes (Tabelog; October 2026), and a booking may be cancelled after 15 minutes (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay) and PayPay; no e-money (Tabelog). 35 seats over several floors: a counter by the robata grill on 1F, tatami seating upstairs (October 2026 reviews); private hire up to 20; non-smoking; free Wi-Fi (Tabelog). English, Simplified Chinese and Korean menus, with photos and a digital menu (Tabelog). Opened 10 June 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba 4-2-13 — 30 seconds from Namba Stn (Midosuji Line), 3 min from Osaka-Namba (Kintetsu) and Nankai Namba',
    cuisine: 'Robatayaki and seasonal seafood izakaya (2026 reviews) · sashimi assortments (three kinds, or larger), katsuo tosa-style, seafood yukhoe · the robata: grilled fish of the day (sea bream or yellowtail), kinki, scallops whose juices are finished with a small rice ball, shrimp, pork jowl, chicken neck, grilled edamame · Awaodori chicken grilled with rock salt, rare liver with garlic chives, chikuwa tempura, deep-fried stuffed peppers, seasonal ohitashi, oden while the grill works, negiyaki · a shijimi clam soup as the appetizer (October 2026) · a wide sake and drinks list; hot sake · about ¥3,000–¥6,000 a head; two people with two drinks each paid just over ¥9,000 (October 2026)',
    website: GROUP, gmaps: gm('浪速炉ばた 東洋小噺 難波'), menu_url: null,
    notes: "[Izakaya · Namba, robata and seafood a minute from the station] A lively robatayaki izakaya steps from Namba station, opened in June 2025 by the Osaka 十忠八九 group of seafood izakaya. Sit at the first-floor counter to watch the fish turn over the grill (one couple was sent to a third-floor tatami room and missed it). Diners single out the fresh, thick-cut sashimi, the grilled kinki and fish of the day, and scallops grilled in the shell whose juices come back with a small rice ball; Awaodori chicken with rock salt, rare liver with chives and oden fill the gaps. The drinks list is long and prices fair, but tables are limited to two hours when busy. Menus in English, Chinese and Korean, and on many nights much of the room is overseas guests. Book ahead; open daily 16:00–23:00.",
    chef_bio: { chef_name: null, roles: ['Grill cooks (unnamed)', 'Run by the 十忠八九 group (株式会社オーゼットカンパニー; the group\'s link page)'], origin: null,
      background: 'Per the group\'s link page (lit.link/10chu89, linked from the Tabelog listing): one of ten outlets of the 十忠八九 group, which runs seafood izakaya in Fukushima, Namba and Umeda (魚屋 十忠八九, みなみの十忠八九, お初の十忠八九) as well as なにわ寿し 本店, 二階の洋品店, 生ハムとPIZZA。86ストア and MONDAY VIBES COFFEE, and opened its first Tokyo shop as its tenth (PR TIMES, as summarised in search); this is its only robata. Opened 10 June 2025 (Tabelog). An October 2026 diner names the group "Juchu Hakku". The romaji "Toyo Kobayashi" is Tabelog\'s for the name.',
      philosophy: null, specialty: 'Robata-grilled fish of the day; sashimi; grilled scallops with rice.',
      anecdotes: [
        { text: '"The scallops were incredibly tasty, and they left some juice behind, so make sure to add rice to it at the end! [The staff] even served a small rice ball with it!" — October 2026, a second visit.', source: R + 'B538162286/' },
        { text: '"There\'s a 2-hour limit, with last orders at 1.5 hours." — October 2026, yellowtail of the day.', source: R + 'B536811351/' },
        { text: '"The tatami seating was occupied entirely by international guests, with us being the only Japanese customers" — November 2026, fully booked at 9 PM on a Sunday.', source: R + 'B538481972/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 浪速炉ばた 東洋小噺、居酒屋・海鮮・炉端焼き、難波4-2-13、Namba 駅 (Midosuji Line) から徒歩30秒、毎日16:00〜23:00 (L.O.22:30)、予約可 (混雑時はテーブル2時間、15分過ぎるとキャンセル扱いの場合あり)、カード・PayPay可、35席、貸切20名まで、禁煙、無料Wi-Fi、英語・簡体字・韓国語のメニュー、写真つきメニュー、デジタルメニュー、2025年6月10日オープン、系列店 (なにわ寿し 本店、二階の洋品店、生ハムとPIZZA。86ストア、MONDAY VIBES COFFEE)。十忠八九グループ (lit.link/10chu89): 魚屋 十忠八九、みなみの十忠八九、お初の十忠八九、福島呑場ヒンジ、浪速炉ばた 東洋小噺、なにわ寿し 本店、二階の洋品店、生ハムとPIZZA。86ストア、MONDAY VIBES COFFEE、本酒場 満丸 東店、株式会社オーゼットカンパニー。口コミ(2026年10月〜11月): 炉端の前のカウンター、3階の座敷、刺身の盛り合わせ、本日の焼き魚、キンキ、ホタテと小さなおにぎり、Awaodori の鶏の岩塩焼き、レアなレバーとニラ、ちくわの天ぷら、おでん、しじみ汁のお通し、2時間制、海外からの客が多い夜も。',
      confidence: 'medium', sources: [TB, GROUP, R + 'B536796694/', R + 'B536811351/', R + 'B537458839/', R + 'B537517869/', R + 'B537618854/', R + 'B537707026/', R + 'B537917959/', R + 'B538081645/', R + 'B538162286/', R + 'B538248609/', R + 'B538396699/', R + 'B538481972/'] },
    cultural_comfort: { level: 'english', note: 'English, Chinese and Korean menus with photos, and a digital menu (Tabelog); many overseas guests (October–November 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波4-2-13',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the group\'s link page; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波四丁目2番13号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537707026/', R + 'B538162286/', R + 'B536811351/'],
    price_note: 'No menu posted online; dishes from October–November 2026 reviews, unpriced.', last_checked: TODAY, items: [
      it('', '', 'Sashimi assortment', '', 'Sashimi', 'ask', 'no', 'October–November 2026.', 'sashimi'),
      it('', '', 'Robata-grilled fish of the day (sea bream, yellowtail, kinki)', '', 'Robata', 'ask', 'no', 'October 2026.', 'grilled_fish'),
      it('', '', 'Grilled scallops with a small rice ball for the juices', '', 'Robata', 'ask', 'no', 'October 2026.', 'scallops'),
      it('', '', 'Awaodori chicken grilled with rock salt', '', 'Robata', 'ask', 'no', 'October 2026.', 'awaodori'),
      it('', '', 'Oden assortment', '', 'Small dishes', 'ask', 'no', 'October 2026.', 'oden'),
    ] }, {
    cuisine: '炉端焼きと季節の魚介の居酒屋 (2026年の口コミ)・刺身の盛り合わせ (3種など)、カツオの土佐造り、海鮮のユッケ・炉端: 本日の焼き魚 (鯛やぶり)、キンキ、汁を小さなおにぎりで締めるホタテ、エビ、豚トロ、せせり、焼き枝豆・Awaodori の鶏の岩塩焼き、レアなレバーとニラ、ちくわの天ぷら、ピーマンの肉詰めのフライ、季節のおひたし、焼き上がりを待つ間のおでん、ねぎ焼き・お通しはしじみ汁 (2026年10月)・日本酒など飲み物が豊富、熱燗も・1人3,000〜6,000円ほど、2人で2杯ずつ飲んで9,000円ほど (2026年10月)',
    neighborhood: '難波4-2-13。Namba 駅 (Midosuji Line) から徒歩30秒、Kintetsu と Nankai の Namba 駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。刺身、塩焼きの魚、焼き野菜がいちばんシンプルだが、天ぷら、おでん、ねぎ焼き、醤油ベースのたれの料理も同じメニューにある。',
    vegan_detail: 'ヴィーガンではありません。魚介と炉端の居酒屋で、お通しはしじみ汁、おでんや焼き物は魚と肉 (2026年10月)。口コミには焼き枝豆やオニオンスライスも。',
    notes: '[居酒屋・難波、駅前の炉端と魚介] なんば駅からすぐのにぎやかな炉端焼きの居酒屋で、大阪の海鮮居酒屋グループ十忠八九が2025年6月に開いた。1階のカウンターなら炉端で魚が焼けるのを眺められる (3階の座敷に通されて見られなかった夫婦も)。口コミで名前が挙がるのは、新鮮で厚切りの刺身、キンキと本日の焼き魚、殻ごと焼いて汁を小さなおにぎりで締めるホタテ。Awaodori の鶏の岩塩焼き、ニラとレアなレバー、おでんもある。飲み物が豊富で値段も手ごろだが、混むとテーブルは2時間制。英語、中国語、韓国語のメニューがあり、海外からの客が多い夜も。予約がおすすめ、毎日16時〜23時。',
  });
}

// ================================================================ Moegi
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27113630/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00'], ['18:00', '00:00']);
  put({
    id: 'osaka_moegi_uranamba', name: 'Moegi', category: 'OMNI',
    lat: 34.66359, lng: 135.504782, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: negiyaki, okonomiyaki and yakisoba are wheat-batter and noodle dishes, and the sauce is soy-based (September 2026). Grilled vegetables (lotus root, asparagus, shiitake) are the simplest plates; ask about the seasoning.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The shop-maintained Tabelog listing says there are vegetarian options and that the kitchen is particular about vegetables, and there are grilled lotus root, asparagus and shiitake; but the batter has a dashi flavour (May 2026) and most dishes use pork, beef tendon or seafood.',
    hours_raw: 'Lunch 12:00–15:00 (last order 14:15); dinner 18:00–24:00 (last order 23:00); closed Wednesday (Tabelog). Reservations taken and given priority; walk-ins queue from about 15 minutes before 18:00 (October 2026) and waited 20 minutes on a holiday evening (September 2026); lunch was easier (June and September 2026). The wait for food can be long (September 2026). Cards (VISA, Master, JCB, AMEX, Diners), e-money and QR (PayPay) (Tabelog). 27 seats: 9 at the counter and 18 at tables, several with their own teppan; private hire; non-smoking; takeaway (Tabelog; October 2026). Opened 20 September 2019 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba Sennichimae 7-2, 河原ハイツ 1F, down a back alley in Ura Namba — 5 min from Namba or Nihonbashi Stn',
    cuisine: 'Negiyaki, okonomiyaki and teppanyaki (2026 reviews) · negiyaki, finished with dashi soy sauce rather than sauce (June 2026): beef-tendon negi-suji-yaki ¥1,250 (June and September 2026), seafood negiyaki with squid, shrimp and scallops, a negiyaki mix · okonomiyaki with plenty of cabbage and a fluffy, dashi-flavoured batter (May 2026): buta-tama, the Moegi Special with pork and seafood, bokkake, pork with beef tendon · yakisoba with a bonito-and-dashi flavour, large size available (August 2026); ume, shiso and salt yakisoba ¥1,200; sobameshi · teppan: Kaga lotus root ¥600 (grilled with salt), grilled squid with soy ¥650, horumon ¥1,450, tonpei-yaki ¥850, yam steak, spinach with bacon, bacon-wrapped scallops, Satsuma chicken tataki, garlic rice · a crepe of okonomiyaki batter with sweet bean paste and ice cream (June 2026) · draft and bottled beer (¥700 a medium bottle), Sapporo Lager, a Miyazaki hebesu sour ¥650, sake',
    website: null, gmaps: gm('Moegi 難波千日前 ねぎ焼き'), menu_url: null,
    notes: "[Okonomiyaki · Ura Namba, negiyaki down a back alley] Down an Ura Namba alley that one diner would have turned back from if alone, a cosy wooden room with a counter and tables, several with their own teppan, and a queue at opening time. The house speciality is negiyaki, fluffy and charred, finished with dashi soy sauce instead of thick sauce; the okonomiyaki is cabbage-heavy with a light dashi batter, and the yakisoba leans on bonito rather than sauce, a lighter style that one Sapporo visitor missed. Start with teppan plates (salt-grilled Kaga lotus root, bacon-wrapped scallops, horumon) and end with a crepe of okonomiyaki batter filled with bean paste and ice cream. A comedian, Miki, is said by an October 2026 diner to recommend it. Many guests are overseas visitors, so book for dinner; closed Wednesdays.",
    chef_bio: { chef_name: null, roles: ['Cooks at the teppan (unnamed)'], origin: null,
      background: 'Shop-maintained (corporate-member) Tabelog listing; opened 20 September 2019; the listing says the kitchen is particular about vegetables, fish and sake, and has vegetarian options. No owner or chef is named in the sources read.',
      philosophy: null, specialty: 'Negiyaki with beef tendon; fluffy okonomiyaki; teppan vegetables.',
      anecdotes: [
        { text: '"Dinner service starts at 6:00 PM, and people begin to line up about 15 minutes before opening." — October 2026, a 19th visit.', source: R + 'B462639121/' },
        { text: '"I was told it had a soy sauce flavor, and indeed it did. Hmm, I came all the way from Sapporo to Osaka for a soy sauce flavor..." — September 2026, a holiday evening.', source: R + 'B535970041/' },
        { text: '"It was made with okonomiyaki batter, filled with red bean paste and ice cream." — June 2026, on the dessert crepe.', source: R + 'B530048823/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): Moegi、お好み焼き、難波千日前7-2 河原ハイツ 1F、Namba 駅・Nihonbashi 駅から徒歩5分、昼12:00〜15:00 (L.O.14:15)、夜18:00〜24:00 (L.O.23:00)、水曜休み、予約可、カード・電子マネー・QR可、27席 (カウンター9、テーブル18)、貸切可、禁煙、テイクアウト可、野菜と魚にこだわり、ベジタリアンメニューあり、2019年9月20日オープン。口コミ(2026年5月〜10月): Ura Namba の路地裏、名物のねぎ焼き (ソースではなく出汁醤油)、牛すじのねぎ焼き1,250円、キャベツたっぷりのふわふわのお好み焼き、出汁の効いた生地、かつおと出汁の焼きそば、Kaga のれんこん600円、ホルモン1,450円、とんぺい焼き850円、梅しそ塩焼きそば1,200円、お好み焼きの生地のクレープ (あんことアイス)、開店前から行列、予約優先、海外からの客も多い。',
      confidence: 'medium', sources: [TB, R + 'B462639121/', R + 'B527537618/', R + 'B528420561/', R + 'B529899071/', R + 'B530048823/', R + 'B534663821/', R + 'B535177386/', R + 'B535967364/', R + 'B535970041/', R + 'B536453574/', R + 'B537154024/', R + 'B537165386/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Food cooked on the teppan in front of you; many overseas guests (2026). No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前7-2 河原ハイツ 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前7番2号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B462639121/', R + 'B529899071/', R + 'B530048823/'],
    price_note: 'Prices from May–October 2026 reviews (tax included as reported); no menu posted online.', last_checked: TODAY, items: [
      it('', '', 'Negi-suji-yaki (beef-tendon negiyaki)', '¥1,250', 'Negiyaki', 'no', 'no', 'June and September 2026; dashi soy sauce.', 'negi_suji'),
      it('', '', 'Buta-tama okonomiyaki', '', 'Okonomiyaki', 'no', 'no', 'May 2026.', 'buta_tama'),
      it('', '', 'Ume, shiso and salt yakisoba', '¥1,200', 'Yakisoba', 'no', 'no', 'October 2026.', 'ume_yakisoba'),
      it('', '', 'Kaga lotus root, grilled', '¥600', 'Teppan', 'ask', 'ask', 'October 2026; salt-grilled in August 2026.', 'renkon'),
      it('', '', 'Grilled horumon', '¥1,450', 'Teppan', 'ask', 'no', 'October 2026.', 'horumon'),
    ] }, {
    cuisine: 'ねぎ焼き、お好み焼き、鉄板焼き (2026年の口コミ)・ねぎ焼きはソースではなく出汁醤油で (2026年6月): 牛すじのねぎ焼き1,250円 (2026年6月と9月)、イカ、エビ、ホタテの海鮮のねぎ焼き、ねぎ焼きのミックス・キャベツたっぷりでふわふわの、出汁の効いた生地のお好み焼き (2026年5月): 豚玉、豚と魚介の Moegi Special、ぼっかけ、豚と牛すじ・かつおと出汁の焼きそば、大盛りも (2026年8月)、梅しそ塩焼きそば1,200円、そばめし・鉄板焼き: 塩で焼くKaga のれんこん600円、イカの醤油焼き650円、ホルモン1,450円、とんぺい焼き850円、山芋ステーキ、ほうれん草とベーコン、ホタテのベーコン巻き、Satsuma の鶏のたたき、ガーリックライス・お好み焼きの生地のクレープ (あんことアイス) (2026年6月)・瓶ビール中700円、Sapporo Lager、Miyazaki のへべすサワー650円、日本酒',
    neighborhood: '難波千日前7-2 河原ハイツ 1F、Ura Namba の路地裏。Namba 駅、Nihonbashi 駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。ねぎ焼き、お好み焼き、焼きそばは小麦の生地や麺で、たれは醤油ベース (2026年9月)。焼き野菜 (れんこん、アスパラ、しいたけ) がいちばんシンプル、味付けを確認して。',
    vegan_detail: '要確認。店の食べログにはベジタリアンメニューあり、野菜にこだわりとあり、焼いたれんこん、アスパラ、しいたけもある。ただし生地には出汁の味 (2026年5月)、多くの料理に豚、牛すじ、魚介。',
    notes: '[お好み焼き・Ura Namba、路地裏のねぎ焼き] ひとりなら引き返していたという Ura Namba の路地の奥、カウンターとテーブルの木のぬくもりの店で、鉄板つきのテーブルもあり、開店前から行列。名物はふわっと焦げ目のついたねぎ焼きで、ソースではなく出汁醤油。お好み焼きはキャベツたっぷりで出汁の効いた軽い生地、焼きそばもソースよりかつおの味で、Sapporo から来た人には物足りなかったという声も。鉄板焼き (塩焼きのKaga のれんこん、ホタテのベーコン巻き、ホルモン) から始めて、締めはお好み焼きの生地にあんことアイスを包んだクレープ。2026年10月の口コミではお笑いの Miki さんのおすすめという。海外からの客も多いので夜は予約を。水曜休み。',
  });
}

// ================================================================ き多や 本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27013306/'; const R = TB + 'dtlrvwlst/'; const SITE = 'http://www.kitapan.com/';
  const W = day(['08:00', '17:00']); const S = day(['08:00', '16:00']);
  put({
    id: 'osaka_kitaya_honten_minamisenba', name: 'き多や 本店 (Kitaya Honten)', category: 'OMNI',
    lat: 34.677786, lng: 135.504502, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a wheat bakery (breads, sandwiches, curry bread, French breads; some of the wheat is new-season Tokachi wheat, October 2026). Nothing is described as gluten-free.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Plain breads such as the domestic-wheat French bread may suit, but most breads are filled or enriched (butter, cream, cheese, mentaiko, ham, egg); nothing is labelled vegan.',
    hours_raw: 'Mon–Fri 08:00–17:00; Sat 08:00–16:00; closed Sunday (Tabelog). The official site gives 08:00 until sold out, closed Sundays and holidays; long summer breaks (20 July–17 August 2025 and 19 July–16 August 2026, official site). Takeaway only (Tabelog); coffee can be had outside (September 2026). No cards or e-money; QR accepted (Tabelog). A very small shop, one or two customers at a time (May and June 2026). A free rusk for following the shop on Instagram (June–October 2026); a handwritten monthly newsletter (official site; October 2026).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: S }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 2-8-14, a small house-like shop among office buildings — about 400 m from Nagahoribashi Stn',
    cuisine: 'Handmade everyday breads, a monthly special and lunch boxes (official site; 2026 reviews) · the special curry bread with curry simmered for a day ¥420, a favourite since the shop opened (April 2026) · mentaiko French ¥360, walnut-apple ¥340 with pistachio (May 2026) · aojiso and cheese épi ¥340, peanut-butter bread ¥340, cream bread, anpan, hot dog, black-bean bread, matcha melon bread, potato French, egg sandwich with snap peas (2026) · square loaf ¥420, sold by the slice, and a graham loaf (July–September 2026) · domestic new-wheat French bread from Tokachi wheat ¥247 (October 2026); croissants (sell out early) · bánh mì as a standard, sakura anpan in spring, stollen in winter (official site) · bento boxes with bread and a light cream pasta (October 2026); coffee',
    website: SITE, gmaps: gm('き多や 南船場 パン'), menu_url: null,
    notes: "[Bakery · Minami-Senba, a couple's neighbourhood bakery since 2000] A small, house-like shop among the office blocks of Minami-Senba, so small that customers take turns inside, run by a couple whose warmth regulars mention as much as the bread. A childhood friend of the founder, writing in June 2026, says the founder opened it in 2000 after cooking Spanish food and now runs it with a Spanish spouse. The long-standing star is the curry bread of curry simmered for a day; the mentaiko French is timed to come out mid-morning, and there is a monthly special announced in a handwritten newsletter (bitter-melon curry one summer, sakura anpan in spring, stollen at Christmas). Loaves can be bought by the slice, and following the shop on Instagram gets you a rusk. Opens at 08:00, closes when sold out; closed Sundays and for a month in summer.",
    chef_bio: { chef_name: null, roles: ['Owner-baker and spouse (unnamed): "run by a couple" (October 2026 review)'], origin: null,
      background: 'Per a June 2026 review by a childhood friend of the founder: the bakery started in 2000 when the founder took the plunge; the founder was originally a chef of Spanish cuisine, married a Spaniard, and now runs the shop with that spouse. An April 2026 diner also dates it to 2000 and names a second shop nearby. The official site (kitapan.com) posts a monthly newsletter, "き多パン通信", and lists summer closures. An October 2026 reviewer describes "a small restaurant run by a couple".',
      philosophy: 'Safe, reliable and delicious bread, and a good shop (official site, January 2026 newsletter note).', specialty: 'Special curry bread; mentaiko French; loaves by the slice.',
      anecdotes: [
        { text: '"This bakery started in 2000 when my friend decided to take the plunge. [The founder was] originally a chef specializing in Spanish cuisine" — June 2026, a childhood friend\'s visit.', source: R + 'B530311048/' },
        { text: '"The bread is, of course, delicious, but it\'s the couple\'s charming personality that makes you want to come back to this place." — October 2026, a second visit.', source: R + 'B530947414/' },
        { text: '"When I walked in, [the staff] greeted me with \'Welcome back!\'" — May 2026, returning for the mentaiko French.', source: R + 'B528178654/' },
      ],
      japanese_sources_summary: '公式サイト (kitapan.com): 手づくりパンの店 き多や、心斎橋・南船場・本町でパンを焼いてます、南船場2-8-14、営業時間8:00〜売り切れ次第終了、定休日 日・祝、き多パン通信 (毎月の紙面)、2026年3月にさくらあんぱんとコーヒー、2026年6月はバインミーが定番、2026年7月19日〜8月16日は夏期休暇、2026年9月はゴーヤ×カレー、2026年10月は新小麦、2025年12月にシュトレン、2026年1月「安心、安全はもちろん、美味しいパンづくり、店づくりで励みます」。食べログ: パン・サンドイッチ、月〜金 8:00〜17:00、土 8:00〜16:00、日曜休み、持ち帰りのみ、カード・電子マネー不可、QR可、禁煙。口コミ(2026年4月〜10月): 2000年開業、近くにもう1店、丸一日煮込んだカレーの特製カレーパン420円、明太フランス360円、くるみりんご340円、食パンを1枚から、Tokachi の新小麦のフランスパン247円、Instagram のフォローでラスク、手書きの通信、夫婦で営む店、友人によればスペイン料理のシェフだった創業者がスペイン人の伴侶とともに。',
      confidence: 'medium', sources: [SITE, TB, R + 'B526609764/', R + 'B526682625/', R + 'B528178654/', R + 'B528444362/', R + 'B530233609/', R + 'B530311048/', R + 'B530312055/', R + 'B530947414/', R + 'B533073958/', R + 'B535557799/', R + 'B537403281/', R + 'B538461185/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A very small shop; a June 2026 diner noted many overseas visitors. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区南船場2-8-14',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (monthly newsletter into October 2026) and Tabelog; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場二丁目8番14号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B526609764/', R + 'B528178654/', R + 'B537403281/'],
    price_note: 'Prices from April–October 2026 reviews (tax included as reported); no price list online.', last_checked: TODAY, items: [
      it('', '', 'Special curry bread', '¥420', 'Bread', 'no', 'no', 'April 2026.', 'curry_bread'),
      it('', '', 'Mentaiko French', '¥360', 'Bread', 'no', 'no', 'May 2026; mentaiko butter.', 'mentaiko_france'),
      it('', '', 'Walnut-apple bread', '¥340', 'Bread', 'no', 'ask', 'April–May 2026.', 'walnut_apple'),
      it('', '', 'Square loaf, by the slice', '¥420', 'Bread', 'no', 'ask', 'September 2026.', 'kakushoku'),
      it('', '', 'Domestic new-wheat French bread (Tokachi)', '¥247', 'Bread', 'no', 'ask', 'October 2026.', 'france_pan'),
    ] }, {
    cuisine: '毎日食べたい手づくりのパン、毎月の限定パンとお弁当 (公式サイト、2026年の口コミ)・丸一日煮込んだカレーの特製カレーパン420円、開店以来の人気 (2026年4月)・明太フランス360円、ピスタチオをのせたくるみりんご340円 (2026年5月)・青じそとチーズのエピ340円、ピーナッツバターのパン340円、クリームパン、あんぱん、ホットドッグ、黒豆のパン、抹茶のメロンパン、ポテトフランス、スナップエンドウ入りのたまごサンド (2026年)・1枚から買える角食420円、グラハムの食パン (2026年7〜9月)・Tokachi の新小麦のフランスパン247円 (2026年10月)、クロワッサン (早く売り切れる)・定番のバインミー、春のさくらあんぱん、冬のシュトレン (公式サイト)・パンとクリームパスタのお弁当 (2026年10月)、コーヒー',
    neighborhood: '南船場2-8-14、オフィスビルの間の家のような小さな店。Nagahoribashi 駅から約400m',
    gf_detail: 'グルテンフリーではありません。小麦のパン屋 (パン、サンドイッチ、カレーパン、フランスパン。小麦の一部はTokachi の新小麦、2026年10月)。グルテンフリーの説明はない。',
    vegan_detail: '要確認。国産小麦のフランスパンのようなシンプルなパンは合うかもしれないが、多くはバター、クリーム、チーズ、明太子、ハム、卵を使う具入りや生地。ヴィーガンの表示はない。',
    notes: '[パン・南船場、2000年からの夫婦のパン屋] 南船場のオフィスビルの間にある、家のような小さな店で、中には順番に入るほど。夫婦で営み、パンと同じくらい2人の人柄が好きという声が多い。2026年6月の創業者の幼なじみの口コミでは、スペイン料理のシェフだった創業者が2000年に開き、いまはスペイン人の伴侶とともに営む。昔からの看板は丸一日煮込んだカレーのカレーパン、明太フランスは昼前に焼き上がり、手書きの「き多パン通信」で毎月の限定パンを紹介 (夏のゴーヤ×カレー、春のさくらあんぱん、クリスマスのシュトレン)。食パンは1枚から買え、Instagram をフォローするとラスクがもらえる。朝8時から売り切れまで、日曜と夏の1か月は休み。',
  });
}

save();
