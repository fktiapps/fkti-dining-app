// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first — worker osw2, batch 15 (lane: Tabelog id mod 4 = 1).
//   + 魚屋のトラットリア アレグロペッシェ 難波店 Allegro Pesce (seafood trattoria in Ura Namba with fish from the group's own fishmonger; white wine only)
//   + 洋食堂 ホソカワ Yoshokudo Hosokawa (Western-style oden, kushikatsu and yoshoku by JR Namba, open 18:00–05:00)
//   + 和牛と中華料理 けむり屋＆フラワー 大阪なんば本店 Kemuriya & Flower (Cantonese-Sichuan Chinese with wagyu in an Ura Namba alley; about 20 years)
//   + RICHGARDEN 心斎橋本店 (American-style burger shop in Amerikamura since 2013; Grand Slam burger)
//   Skipped (lane order):
//   - 但馬屋 心斎橋 27067045 — chain: the official shop list names six 但馬屋 (梅田, 千里, 東三国, イーマ, 都島, 心斎橋) plus 藤屋 and LUXE
//     (tajima-ya.co.jp/shop, read 2026-11-02); 5+ same-concept shops.
//   - 寿司と天ぷら ニューツルマツ 27116633 — chain: the official site links ニューツルマツ 2 to 7 (new-tsurumatsu-2.com … -7.com) and names
//     上本町ハイハイタウン店 and 心斎橋パルコ店 (new-tsurumatsu.com, read 2026-11-02); 5+ shops.
//   - SAKImoto Bakery ベーカリーカフェ 大阪初號本店 27110885 — chain: the brand's shop list runs across Kanto, Kansai and Kyushu with
//     franchise (FC加盟店) shops such as 和歌山店, 佐賀店, 姫路青山店, 扇町店, 葛西店 (shokupan-sakimoto.com/shop, read 2026-11-02).
//   Chain check of the four kept:
//   - Allegro Pesce: one 魚屋のトラットリア of the レストランバンク group, a sister concept of the Allegro trattorias skipped in osw2-12;
//     no Allegro Pesce in data. Facts come from Tabelog and reviews only (the group's site is not cited).
//   - Hosokawa: one shop; a September 2026 review says it is run by SASAYA Holdings, with a new takoyaki-and-oden concept nearby.
//   - Kemuriya & Flower: the official site names three shops (難波本店, なんば2号店, お初天神店); none in data. Small group: kept; flagged.
//   - RICHGARDEN: Walker+ (2018) says 3 shops in Osaka (incl. 西本町店); none in data. Small group: kept; flagged.
//   None is in data/osaka.json (grep by name, romaji and address, 2026-11-02). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw2-15');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27067045', 'Chain: 但馬屋 has six same-name yakiniku shops in Osaka (tajima-ya.co.jp/shop).');
skip('27116633', 'Chain: ニューツルマツ runs about seven shops (new-tsurumatsu.com links ニューツルマツ 2–7, 上本町, 心斎橋パルコ).');
skip('27110885', 'Chain: SAKImoto Bakery has shops and franchisees across Kanto, Kansai and Kyushu (shokupan-sakimoto.com/shop).');

// ================================================================ 魚屋のトラットリア アレグロペッシェ 難波店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27144165/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const W = day(['16:00', '23:00']); const E = day(['15:00', '23:00']);
  put({
    id: 'osaka_allegro_pesce_namba', name: '魚屋のトラットリア アレグロペッシェ 難波店 (Sakanaya no Trattoria Allegro Pesce Nanba ten)', category: 'OMNI',
    lat: 34.664646, lng: 135.505157, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Carpaccio, aqua pazza and oil stews sit beside pasta, bruschetta, fried zeppole, fish and chips and bread (Tabelog menu); nothing is stated about wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood trattoria; the caponata, pickles and olives are not described.',
    hours_raw: 'Mon–Fri and the days before and after holidays 16:00–23:00; Sat, Sun and holidays 15:00–23:00; irregular closing days posted on Instagram; closed 31 December and 1 January (Tabelog). Reservations taken; seat and birthday-plate requests are answered after review (Tabelog); fully booked on a Friday in October 2026. Cards (VISA, Master, JCB, AMEX, Diners), transport IC and other e-money, PayPay. 43 seats, a private room for 5–6; whole-shop hire for 20–50; non-smoking (Tabelog). Only white (and orange) wine, no red (July and September 2026 reviews).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba Sennichimae 4-35, Ura Namba back alley — 5 min from Namba Stn (Midosuji and Sennichimae lines)',
    cuisine: 'Seafood Italian with fish delivered daily from the group\'s own fishmonger, 魚屋えび蔵 (Tabelog) · carpaccio of the day\'s fish, aqua pazza of whole sea bream with pasta in the leftover broth, sea-urchin cream spaghetti, pescatora bianca with akaza shrimp, squid with liver butter sauce, smoked-cheese frittata, sardine fish and chips, shirasu bruschetta, zeppole, arancini; house bread baked by AC Bagels (Tabelog menu, October 2026; reviews) · white and orange wine chosen by a sommelier; all-you-can-drink courses from ¥5,000',
    website: TB, gmaps: gm('アレグロペッシェ 難波店'), menu_url: M,
    notes: "[Italian · Ura Namba, a fishmonger's trattoria with white wine] A small seafood trattoria hidden in an Ura Namba back alley, opened in September 2024, where the fish comes daily from the group's own fishmonger and the wine list is white (and orange) only. Diners in 2026 go for the carpaccio, oysters, fish and chips, sea-urchin pasta and the whole sea-bream aqua pazza, finished with pasta tossed in the broth. Plates are small and cheap, so groups order many. Two diners who love red wine missed it; one found the tuna carpaccio tiny. Often full at weekends; book ahead.",
    chef_bio: { chef_name: null, roles: ['Kitchen staff unnamed; a sommelier chooses the white wines (Tabelog)'], origin: null, background: 'Per Tabelog, fish comes daily from the group\'s own fishmonger 魚屋えび蔵 ("Uo-ya Ebizo"), and the bread is a special loaf baked by AC Bagels. Tabelog gives the opening as 13 September 2024.', philosophy: '"Fresh and high-quality seasonal fish unique to our own fish shop" (Tabelog).', specialty: 'Carpaccio and aqua pazza of the day\'s fish.',
      anecdotes: [
        { text: '"The food was really good, but surprisingly, being an Italian restaurant, they only had white wine!" — July 2026.', source: R + 'B532600855/' },
        { text: '"The oysters were so tasty that I ended up ordering more." — August 2026, second visit.', source: R + 'B527863054/' },
        { text: '"The tuna carpaccio was honestly quite small, which made me laugh." — September 2026.', source: R + 'B535561085/' },
        { text: '"The sashimi was uniquely prepared to match the flavors of each fish, and it was delicious." — October 2026, farewell party.', source: R + 'B538292167/' },
      ],
      japanese_sources_summary: '日本語の情報源は未確認。食べログ (英語版): 魚屋のトラットリア アレグロペッシェ 難波店、難波千日前4-35、裏なんばの路地の隠れ家、2024年9月13日オープン、自社の魚屋「魚屋えび蔵」から毎日届く魚、ソムリエが選ぶ白ワイン、月〜金・祝前後16:00〜23:00、土日祝15:00〜23:00、不定休 (Instagram で告知)、12月31日と1月1日休み、43席、5〜6名の個室、禁煙、飲み放題付きの宴会コース。メニュー (2026年10月): イタリアンポテサラ、いわしのマリネ、カポナータ、いかのバターソース、スモークチーズのフリッタータ、いわしのフィッシュ&チップス、しらすのブルスケッタ、ゼッポリーネ、アランチーニ、AC Bagels が焼くパン、日替わりの魚のカルパッチョ、うにのクリームスパゲッティ、赤座海老のペスカトーレ・ビアンコ。口コミ (2026年7月〜10月): 牡蠣、鯛のアクアパッツァと残ったスープで締めのパスタ、皿は小さめで安い、白ワインとオレンジワインだけで赤ワインはない、まぐろのカルパッチョは小さかったという声、飲み放題付き5,000円、金曜は満席。',
      confidence: 'medium', sources: [TB, M, R + 'B527863054/', R + 'B532558959/', R + 'B532600855/', R + 'B533069802/', R + 'B533719474/', R + 'B535561085/', R + 'B536301476/', R + 'B537311717/', R + 'B538292167/', R + 'B538374924/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前4-35',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with an October 2026 menu; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前4番35号 (go) 24m. Nearest record AT THE 21 namba (osaka_at_the_21_namba, "…難波千日前4-5") is about 32 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [M, TB],
    price_note: 'Tabelog menu last updated October 2026, tax included. All-you-can-drink course ¥5,000 (October 2026). Diners report ¥3,000–7,999 a head.', last_checked: TODAY, items: [
      it('', '', 'Sea-urchin cream spaghetti', '¥1,848', 'Pasta', 'no', 'no', 'Recommended.', 'uni_cream_pasta'),
      it('', '', 'Pescatora bianca with akaza shrimp, linguine', '¥1,958', 'Pasta', 'no', 'no', 'Recommended.', 'pescatora'),
      it('', '', 'Carpaccio of the day\'s fish', '¥968', 'Carpaccio', 'ask', 'no', 'From ¥968.', 'carpaccio'),
      it('', '', 'Sardine fish and chips', '¥748', 'Warm appetizers', 'no', 'no', 'Recommended.', 'fish_and_chips'),
      it('', '', 'Squid with liver butter sauce', '¥858', 'Warm appetizers', 'ask', 'no', 'Recommended.', 'squid_liver_butter'),
    ] }, {
    cuisine: '自社の魚屋「魚屋えび蔵」から毎日届く魚の魚介のイタリアン (食べログ)・日替わりの魚のカルパッチョ、鯛まるごとのアクアパッツァと残ったスープの締めのパスタ、うにのクリームスパゲッティ、赤座海老のペスカトーレ・ビアンコ、いかの肝バターソース、スモークチーズのフリッタータ、いわしのフィッシュ&チップス、しらすのブルスケッタ、ゼッポリーネ、アランチーニ。パンは AC Bagels が焼く (食べログのメニュー、2026年10月、口コミ)・ソムリエが選ぶ白ワインとオレンジワイン、飲み放題付きコース5,000円〜',
    neighborhood: '難波千日前4-35、裏なんばの路地。なんば駅 (御堂筋線、千日前線) から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。カルパッチョ、アクアパッツァ、オイル煮のほか、パスタ、ブルスケッタ、揚げたゼッポリーネ、フィッシュ&チップス、パンがある (食べログのメニュー)。小麦の説明はない。',
    vegan_detail: 'ヴィーガンではありません。魚介のトラットリアで、カポナータ、ピクルス、オリーブの説明はない。',
    notes: '[イタリアン・裏なんば、魚屋のトラットリアと白ワイン] 裏なんばの路地に隠れた小さな魚介のトラットリアで、2024年9月オープン。魚はグループの魚屋から毎日届き、ワインは白 (とオレンジ) だけ。2026年の客はカルパッチョ、牡蠣、フィッシュ&チップス、うにのパスタ、鯛まるごとのアクアパッツァと、スープを使った締めのパスタを目当てに通う。皿は小さく安いので、何皿も頼むのが向く。赤ワイン好きの客2人は赤がないのを残念がり、まぐろのカルパッチョが小さかったという客も。週末は満席が多いので予約を。',
  });
}

// ================================================================ 洋食堂 ホソカワ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27132913/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const H = day(['18:00', '05:00']);
  put({
    id: 'osaka_yoshokudo_hosokawa_motomachi', name: '洋食堂 ホソカワ (Yoshokudo Hosokawa)', category: 'OMNI',
    lat: 34.665958, lng: 135.496643, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: built on breaded kushikatsu, tempura-style oden toppings, aji fry, pasta and baguette (Tabelog menu; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the oden broth is seafood and vegetable dashi (Tabelog), and the menu is meat and seafood.',
    hours_raw: 'Daily 18:00–05:00 (last order 04:00); open year-round (Tabelog). Reservations taken. ¥418 appetizer charge and a 10% charge after 22:00 (Tabelog). Cards (incl. UnionPay) and PayPay; no e-money. 36 seats: a first-floor counter and second-floor tables; smoking allowed; free Wi-Fi (Tabelog). Orders by smartphone or QR code (September 2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Motomachi 1-3-17 (Naniwa-ku) — 3 min from JR Namba; 5 min from the other Namba stations',
    cuisine: 'Late-night yoshoku bar: Western-style oden in seafood and vegetable dashi (daikon with sea-urchin sauce, truffle-oil egg, trippa arrabbiata), kushikatsu with house Worcestershire sauce (beef menchi, black-pork demi katsu, eel katsu), "rare aji fry" of sashimi-grade horse mackerel, beef-tongue stew, truffle omurice, baked hamburg steak with two sauces, carbonara, ramen-style pasta to finish (Tabelog menu, September 2026; reviews) · house wine; 3-hour all-you-can-drink course',
    website: TB, gmaps: gm('洋食堂 ホソカワ 元町'), menu_url: M,
    notes: "[Yoshoku · Motomachi by JR Namba, oden, kushikatsu and omurice until 5 AM] A small two-floor yoshoku bar three minutes from JR Namba, open from 6 PM to 5 AM, mixing Western-style oden in a seafood-and-vegetable broth with kushikatsu, a rare-cooked aji fry, beef-tongue stew and truffle omurice. Diners in 2026 like the creative dishes and the late hours, handy for the hotels nearby; several found the portions small, which suits ordering many plates. A 10% charge applies after 10 PM, and smoking is allowed. A September 2026 review says it is run by SASAYA Holdings.",
    chef_bio: { chef_name: null, roles: ['Kitchen staff unnamed (Tabelog)'], origin: null, background: 'Per Tabelog, the specialty is Western-style oden in seafood and vegetable dashi, kushikatsu with homemade Worcestershire sauce and a "rare aji fry" of sashimi-grade horse mackerel filleted in house. A September 2026 review says the shop is run by SASAYA Holdings, which has opened a takoyaki-and-oden concept nearby.', philosophy: null, specialty: 'Western-style oden; rare aji fry.',
      anecdotes: [
        { text: '"The truffle omurice in the photo was especially exquisite!" — August 2026.', source: R + 'B535119845/' },
        { text: '"Overall, the portion sizes felt a bit small!" — September 2026.', source: R + 'B535270917/' },
        { text: '"Considering its proximity to the hotel and being open until 5 AM, this price seems reasonable." — September 2026.', source: R + 'B535995164/' },
        { text: '"All the dishes were truly amazing, but the Beef Tongue Stew was particularly exquisite." — September 2026.', source: R + 'B536456236/' },
      ],
      japanese_sources_summary: '日本語の情報源は未確認。食べログ (英語版): 洋食堂 ホソカワ、浪速区元町1-3-17、JR難波駅から徒歩3分、毎日18:00〜翌5:00 (L.O.4:00)、年中無休、お通し418円、22時以降チャージ10%、36席 (1階カウンター、2階テーブル)、喫煙可、Wi-Fi、魚介と野菜の出汁の洋風おでん、自家製ウスターソースの串カツ、2種のソースの焼きハンバーグ、締めのラーメン風パスタ、刺身用のアジをさばくレアアジフライ。メニュー (2026年9月): 洋風おでん (大根のうにソース、トリュフオイルの卵、トリッパのアラビアータ)、牛タンシチュー、串カツ (牛メンチ、黒豚のデミカツ、うなぎカツ)。口コミ (2026年8月〜10月): トリュフのオムライス、牛タンシチュー、カルボナーラ、レアアジフライ、遅くまで開いている、近くのホテルから便利、量は少なめ、スマホやQRコードで注文、3時間飲み放題、SASAYA Holdingsの運営という声。',
      confidence: 'medium', sources: [TB, M, R + 'B534826010/', R + 'B535119845/', R + 'B535230580/', R + 'B535270917/', R + 'B535656507/', R + 'B535833920/', R + 'B535995164/', R + 'B536031936/', R + 'B536456236/', R + 'B537993891/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Orders by smartphone or QR code (2026 reviews). No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区元町1-3-17',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with a September 2026 menu; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区元町一丁目3番17号 (go) 8m. Nearest record (osaka_ramen_ebinomegami, "…元町1-3-12") is about 37 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [M, TB, R + 'B537993891/'],
    price_note: 'Tabelog menu last updated September 2026, tax included; ¥418 appetizer charge; 10% after 22:00. 3-hour all-you-can-drink course ¥5,000 with a coupon (September 2026). Diners report ¥2,000–7,999 a head.', last_checked: TODAY, items: [
      it('', '', 'Western-style oden: daikon with sea-urchin sauce', '¥418', 'Oden', 'ask', 'no', '', 'yofu_oden_daikon'),
      it('', '', 'Rare aji fry (sashimi-grade horse mackerel)', '¥1,320', 'Specialties', 'no', 'no', 'October 2026 review.', 'rare_aji_fry'),
      it('', '', 'Beef-tongue stew (limited)', '¥880', 'Oden', 'ask', 'no', 'Baguette ¥330 extra.', 'tongue_stew'),
      it('', '', 'Black-pork demi katsu skewer', '¥418', 'Kushikatsu', 'no', 'no', '', 'kushikatsu'),
      it('', '', 'Carbonara', '¥1,738', 'Pasta', 'no', 'no', 'October 2026 review.', 'carbonara'),
    ] }, {
    cuisine: '深夜の洋食バル: 魚介と野菜の出汁の洋風おでん (大根のうにソース、トリュフオイルの卵、トリッパのアラビアータ)、自家製ウスターソースの串カツ (牛メンチ、黒豚のデミカツ、うなぎカツ)、刺身用のアジのレアアジフライ、牛タンシチュー、トリュフのオムライス、2種のソースの焼きハンバーグ、カルボナーラ、締めのラーメン風パスタ (食べログのメニュー、2026年9月、口コミ)・ハウスワイン、3時間飲み放題のコース',
    neighborhood: '浪速区元町1-3-17。JR難波駅から徒歩3分、各線なんば駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。衣の串カツ、天ぷら風のおでんの具、アジフライ、パスタ、バゲットが中心 (食べログのメニュー、口コミ)。',
    vegan_detail: 'ヴィーガンではありません。おでんの出汁は魚介と野菜 (食べログ)、メニューは肉と魚介。',
    notes: '[洋食・元町、朝5時までのおでん、串カツ、オムライス] JR難波駅から3分、夜6時から朝5時まで開く2階建ての小さな洋食バル。魚介と野菜の出汁の洋風おでんに、串カツ、レアのアジフライ、牛タンシチュー、トリュフのオムライスを合わせる。2026年の客は創作の皿と遅くまでの営業を褒め、近くのホテルから便利という声も。量は少なめという声が何人かあり、何皿も頼むのに向く。22時以降はチャージ10%、喫煙可。2026年9月の口コミは SASAYA Holdingsの運営としている。',
  });
}

// ================================================================ 和牛と中華料理 けむり屋＆フラワー 大阪なんば本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27041521/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const SITE = 'https://kemuri-ya.com';
  const W = day(['17:00', '23:30']); const E = day(['15:00', '23:30']);
  put({
    id: 'osaka_kemuriya_flower_namba', name: '和牛と中華料理 けむり屋＆フラワー 大阪なんば本店 (Kemuriya & Flower Namba honten)', category: 'OMNI',
    lat: 34.66347, lng: 135.50482, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Dumplings, yakisoba, crepe wraps and sauced stir-fries sit beside carpaccio and cold dishes (Tabelog menu); nothing is stated about wheat or soy sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu and Chinese dishes of meat and seafood; no vegan options are described.',
    hours_raw: 'Mon–Fri 17:00–23:30; Sat, Sun and holidays 15:00–23:30 (last order 23:00); closed 1–2 January; lunch suspended (Tabelog). Reservations taken; final changes by 21:00 the day before. ¥440 table charge, not with courses (Tabelog). Cards (incl. UnionPay) and QR incl. Alipay and WeChat Pay; no e-money. 110 seats on two floors; a party room behind the first-floor kitchen for 15–40 (official site); heated tobacco only in a designated area (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba Sennichimae 6-12, an Ura Namba alley — near Namba and Nippombashi Stns',
    cuisine: 'Cantonese and Sichuan cooking with ingredients sourced by the owner, and wagyu dishes (Tabelog): wagyu tataki yukhoe, Matsusaka beef with foie gras, wagyu mapo tofu, wagyu mala yakisoba, wagyu fried rice, wagyu Peking-duck-style crepes, curry mapo tofu, saliva chicken, bang bang chicken, Hong Kong-style dumplings, braised shark fin, tantanmen to finish (Tabelog menu, November 2025; reviews) · in 2026 the house works with 肉のにれ for Kagoshima black wagyu (official site) · beer, shochu, wine, cocktails, Chinese tea; all-you-can-drink courses from ¥4,500',
    website: SITE, gmaps: gm('けむり屋＆フラワー 大阪なんば本店'), menu_url: M,
    notes: "[Chinese · Ura Namba, wagyu and Chinese cooking in a back alley] A Cantonese-Sichuan restaurant with a wooden, American-bar feel, tucked into a narrow Ura Namba alley where cars cannot pass, the main shop of a three-shop name now 20 years old. Since 2026 it has leaned into wagyu, from wagyu mapo tofu and mala yakisoba to Peking-duck-style crepes. Diners in 2026 praise the assorted appetizers, ebi mayo, the curry mapo tofu and creative takes on sweet and sour pork; one found it a bit pricey. Groups use the second floor and the party room; a September diner noticed many staff from abroad.",
    chef_bio: { chef_name: null, roles: ['Owner unnamed, who sources the ingredients (Tabelog)'], origin: null, background: 'Per the official site, the name has three shops: 難波本店, なんば2号店 (12 years old in 2026) and お初天神店; the main shop marks its 20th anniversary and in 2026 is partnering with 肉のにれ\'s Osaka office to bring in more wagyu, with a Kagoshima black-wagyu campaign; a party room behind the first-floor kitchen opened in December 2024. Per Tabelog, the owner sources the finest ingredients for authentic Cantonese and Sichuan food at reasonable prices, and dishes are available for takeout.', philosophy: '"Authentic Cantonese and Sichuan cuisine at reasonable prices" (Tabelog).', specialty: 'Wagyu Chinese dishes; assorted appetizers.',
      anecdotes: [
        { text: '"The spacious interior is surprisingly large for the narrow alley in front, with a lovely atmosphere reminiscent of an American bar with wooden accents." — October 2026.', source: R + 'B537170134/' },
        { text: '"I particularly liked the curry mapo tofu, which is something I don’t usually eat." — August 2026, group course.', source: R + 'B533388156/' },
        { text: '"While it may be a bit pricey, the intricate dishes were enjoyable from start to finish." — September 2026.', source: R + 'B536513290/' },
      ],
      japanese_sources_summary: '公式サイト: けむり屋＆FLOWER【本格中華】難波本店・なんば2号店・お初天神店、なんば2号店は2026年7月から月〜金17:00〜24:00・土祝と祝前日の日曜15:00〜24:00 (日曜定休、ランチは当面休み)、本店は20周年、2026年は肉のにれ大阪営業所と提携し和牛を多く取り入れ、鹿児島県産黒毛和牛のキャンペーン、2024年12月から本店1階キッチン奥に貸切専用の宴会場 (15〜40名)、なんば2号店は2026年で12周年。食べログ (英語版): 和牛と中華料理 けむり屋＆フラワー 大阪なんば本店、難波千日前6-12、月〜金17:00〜23:30、土日祝15:00〜23:30 (L.O.23:00)、1月1〜2日休み、ランチ休止中、突き出し440円 (コースは除く)、110席、店主が仕入れる食材の本格広東・四川料理、テイクアウト可。メニュー (2025年11月): 和牛のたたきユッケ、松阪牛とフォアグラ、和牛麻婆豆腐、和牛の麻辣焼きそば、和牛チャーハン、和牛の北京ダック風クレープ、よだれ鶏、棒棒鶏、ふかひれの姿煮。口コミ (2026年7月〜10月): 前菜盛り合わせ、エビマヨ、カレー麻婆豆腐、締めの担々麺、酢豚や辛い鶏のひと工夫、木のアメリカンバーのような内装、狭い路地、少し高めという声、外国人スタッフが多いという声。',
      confidence: 'medium', sources: [TB, M, SITE, R + 'B507921430/', R + 'B532712426/', R + 'B533388156/', R + 'B534115786/', R + 'B534331595/', R + 'B535167578/', R + 'B536350214/', R + 'B536513290/', R + 'B537078777/', R + 'B537170134/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pays with Alipay and WeChat Pay (Tabelog); a September 2026 diner noticed many staff from abroad. No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前6-12',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with 2026 news and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前6番12号 (go) 5m. Same lot as ふたはこ (osaka_futahako_kashimin_uranamba, "…難波千日前6-12 旭光荘 1F"), whose pin is 4 m from the GSI point, so this pin is set about 8 m north to avoid stacking; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [M, TB],
    price_note: 'Tabelog menu last updated November 2025, tax included; ¥440 table charge with à la carte. All-you-can-drink courses from ¥4,500. Diners report ¥3,000–5,999 a head.', last_checked: TODAY, items: [
      it('', '', 'Assorted appetizers of the day, five kinds', '¥1,868', 'Appetizers', 'ask', 'no', 'Three kinds ¥1,208.', 'zensai_moriawase'),
      it('', '', 'Wagyu mapo tofu', '¥1,098', 'Today\'s recommendation', 'ask', 'no', '', 'wagyu_mapo'),
      it('', '', 'Wagyu mala yakisoba', '¥1,186', 'Today\'s recommendation', 'no', 'no', '', 'wagyu_mala_yakisoba'),
      it('', '', 'Wagyu fried rice', '¥933', 'Today\'s recommendation', 'ask', 'no', '', 'wagyu_fried_rice'),
      it('', '', 'Braised shark fin', '¥3,958', 'Shark fin', 'ask', 'no', '', 'shark_fin'),
    ] }, {
    cuisine: '店主が仕入れる食材の広東・四川料理と和牛料理 (食べログ): 和牛のたたきユッケ、松阪牛とフォアグラ、和牛麻婆豆腐、和牛の麻辣焼きそば、和牛チャーハン、和牛の北京ダック風クレープ、カレー麻婆豆腐、よだれ鶏、棒棒鶏、香港風の点心、ふかひれの姿煮、締めの担々麺 (食べログのメニュー、2025年11月、口コミ)・2026年は肉のにれと提携し鹿児島県産黒毛和牛 (公式サイト)・ビール、焼酎、ワイン、カクテル、中国茶、飲み放題付きコース4,500円〜',
    neighborhood: '難波千日前6-12、裏なんばの路地。なんば駅、日本橋駅から',
    gf_detail: '要確認。グルテンの情報なし。点心、焼きそば、クレープ、タレの炒め物のほか、カルパッチョや冷菜もある (食べログのメニュー)。小麦やしょうゆの説明はない。',
    vegan_detail: 'ヴィーガンではありません。肉と魚介の和牛と中華料理で、ヴィーガンの選択肢の説明はない。',
    notes: '[中華・裏なんば、路地の和牛と中華] 車の入れない裏なんばの細い路地にある、木のアメリカンバーのような雰囲気の広東・四川料理の店で、3店ある店の本店。2026年で20年。2026年からは和牛に力を入れ、和牛麻婆豆腐、麻辣焼きそば、北京ダック風のクレープなど。2026年の客は前菜盛り合わせ、エビマヨ、カレー麻婆豆腐、ひと工夫した酢豚を褒め、少し高めという声も。グループは2階や宴会場を使う。9月の客は外国人スタッフが多いと書いている。',
  });
}

// ================================================================ RICHGARDEN 心斎橋本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27074245/'; const R = TB + 'dtlrvwlst/';
  const WALKER = 'https://www.walkerplus.com/trend/matome/article/146047/amp/';
  const H = day(['12:00', '22:30']);
  put({
    id: 'osaka_richgarden_shinsaibashi', name: 'RICHGARDEN 心斎橋本店 (RICHGARDEN Shinsaibashi honten)', category: 'OMNI',
    lat: 34.669884, lng: 135.497971, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a hamburger and sandwich shop; burgers come in buns and with fried onions and fries (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef-patty burgers, bacon, cheese and egg sandwiches (reviews); no vegan options are described.',
    hours_raw: 'Daily 12:00–22:30 (last order 22:00); irregular closing days; no lunch reservations (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), e-money and PayPay. 24 seats; non-smoking (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishi-Shinsaibashi 2-13-5, Amerikamura — 5 min from Namba Stn (subway) and Kintetsu Osaka-Namba',
    cuisine: 'American-style burgers and sandwiches: the Grand Slam (thick patty, crispy fried onions, mashed potato; 4th at the Japan Burger Championship 2024, per a review), bacon cheeseburger, mozzarella burger, Mooki burger with bacon jam, golden beef melt cheese egg sandwich, nuggets with a smoky flavour, fries, hamburg steak (reviews) · craft beer at the group (Walker+, 2018)',
    website: TB, gmaps: gm('RICHGARDEN 心斎橋本店'), menu_url: TB,
    notes: "[Burgers · Amerikamura, American diner since 2013] A small American-style burger shop in Amerikamura, open since July 2013, the first shop of a founder who, in the founder's own words, learned burgers from Google and YouTube. The tall Grand Slam with crispy fried onions and mashed potato is the signature; diners in 2026 also order the bacon cheeseburger, the mozzarella burger and the beef-melt egg sandwich. Most call the burgers juicy and hearty; a May 2026 diner was not greeted on entering and found it unremarkable. An October diner found the room full of guests from abroad.",
    chef_bio: { chef_name: '安藤啓示', roles: ['Representative of RICHGARDEN (Walker+, 2018)'], origin: 'Osaka (Walker+, 2018)', background: 'Per Walker+ (May 2018), 安藤啓示, born in Osaka, joined a Nagoya design company after university, quit, and through an acquaintance went to work at a ramen shop, where after a month of learning the cooking and the business 安藤 became the manager; two years later 安藤 came home to Osaka wanting to run a restaurant, saw Harajuku\'s Great Burger in a magazine and decided on burgers. With no burger training, "my burger teachers were Google and YouTube". The article describes three shops in Osaka pairing burgers with craft beer, including the Nishihommachi shop.', philosophy: null, specialty: 'Grand Slam burger.',
      anecdotes: [
        { text: '"This hamburger ranked 4th in Japan at the "Japan Burger Championship 2024."" — September 2026, Grand Slam.', source: R + 'B141558906/' },
        { text: '"However, as soon as I entered the restaurant, no one greeted me, which was a bit disappointing right from the start." — May 2026.', source: R + 'B528243831/' },
        { text: '"The restaurant has an American vibe and is filled with foreign customers!" — October 2026, bacon cheeseburger.', source: R + 'B537570591/' },
        { text: '"With no burger training, my burger teachers were Google and YouTube." — 安藤啓示 to Walker+, May 2018 (translated).', source: WALKER },
      ],
      japanese_sources_summary: 'ウォーカープラス (2018年5月): 大阪で3店舗展開するハンバーガー×クラフトビール店「リッチガーデン」、代表の安藤啓示さん、ハンバーガーの修行経験はなく先生は『Google』と『YouTube』、大阪出身、大学卒業後に名古屋のデザイン会社に就職し退職、知り合いの紹介でラーメン店で働き1か月で作り方と経営を学び店長に、2年後に大阪へ戻り、雑誌で原宿の『グレイトバーガー』を見てハンバーガーに、西本町店。食べログ (英語版): RICHGARDEN 心斎橋本店、西心斎橋2-13-5、2013年7月19日オープン、毎日12:00〜22:30 (L.O.22:00)、不定休、ランチの予約不可、24席、禁煙。口コミ (2026年5月〜10月): グランドスラム (Japan Burger Championship 2024で4位という声、2,100円)、ベーコンチーズバーガー、モッツァレラバーガー、ベーコンジャムのバーガー、ゴールデンビーフメルトチーズエッグサンド1,750円、ナゲット、ハンバーグ、アメリカンな雰囲気、外国からの客が多い、入店時に挨拶がなかったという声。',
      confidence: 'medium', sources: [TB, WALKER, R + 'B103433205/', R + 'B141558906/', R + 'B528243831/', R + 'B528582723/', R + 'B530956988/', R + 'B531191650/', R + 'B531941777/', R + 'B537072279/', R + 'B537570591/', R + 'B538319556/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'An October 2026 diner found the room full of guests from abroad. No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋2-13-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋二丁目13番5号 (go) 9m. Nearest record (osaka_seidako_nishishinsaibashi, "…西心斎橋2-16-7") is about 57 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B528243831/', R + 'B103433205/'],
    price_note: 'No Tabelog menu; prices from reviews (tax included). Diners report ¥2,000–3,999 a head.', last_checked: TODAY, items: [
      it('', '', 'Grand Slam burger', '¥2,100', 'Burgers', 'no', 'no', 'May 2026 review.', 'grand_slam'),
      it('', '', 'Golden beef melt cheese egg sandwich', '¥1,750', 'Sandwiches', 'no', 'no', 'September 2026 review.', 'beef_melt_sand'),
      it('', '', 'Bacon cheeseburger', '', 'Burgers', 'no', 'no', 'October 2026 review.', 'bacon_cheeseburger'),
      it('', '', 'Mozzarella burger', '', 'Burgers', 'no', 'no', 'May 2026 review.', 'mozzarella_burger'),
    ] }, {
    cuisine: 'アメリカンスタイルのハンバーガーとサンドイッチ: グランドスラム (厚いパティ、カリカリのフライドオニオン、マッシュポテト。Japan Burger Championship 2024で4位と口コミ)、ベーコンチーズバーガー、モッツァレラバーガー、ベーコンジャムのバーガー、ゴールデンビーフメルトチーズエッグサンド、スモーキーなナゲット、ポテト、ハンバーグ (口コミ)・クラフトビール (ウォーカープラス、2018年)',
    neighborhood: '西心斎橋2-13-5、アメリカ村。なんば駅 (地下鉄)、近鉄大阪難波駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。ハンバーガーとサンドイッチの店で、バンズ、フライドオニオン、ポテト (口コミ)。',
    vegan_detail: 'ヴィーガンではありません。牛肉パティのバーガー、ベーコン、チーズ、卵のサンド (口コミ)。ヴィーガンの選択肢の説明はない。',
    notes: '[ハンバーガー・アメリカ村、2013年からのアメリカンダイナー] アメリカ村の小さなアメリカンスタイルのハンバーガー店で、2013年7月オープン。代表は「ハンバーガーの先生は Google と YouTube」と語る人で、その1号店。看板はフライドオニオンとマッシュポテトをのせた背の高いグランドスラム。2026年の客はベーコンチーズバーガー、モッツァレラバーガー、ビーフメルトのエッグサンドも頼む。多くはジューシーでボリュームがあると言うが、2026年5月の客は入店時に挨拶がなく、特に印象に残らなかったと書く。10月の客は外国からの客でいっぱいだったと書く。',
  });
}

save();
