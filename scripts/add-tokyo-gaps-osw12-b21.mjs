// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles), circle `ueno`, lane osw12, batch 21.
//   + ホルモン青木 上野店 Horumon Aoki (12-seat horumon yakiniku in Yushima; branch of the Kameido original)
//   + AJILLO 上野店 (ajillo bar with table-top induction pots, from mid-afternoon to late night; opened 2023)
//   + 点心すや Tenshin Suya (stylish dim-sum bar by Uguisudani South Exit; house citrus sours)
//   + ささのや Sasanoya (smoky standing yakitori/motsuyaki bar by Uguisudani South Exit; skewers about ¥100)
// Undecided (no put, no skip): あさが家 13307245, まつり屋 上野本店 13284227, ビアバックス 上野店 13247943 (no shop count found).
// Chain check (with Greg's 2026-11-02 rulings and the working line of 4 or fewer shops). Horumon Aoki: four shops known —
//   亀戸本店, 赤羽 (opened September 2022), 上野, 下北沢 (Tabelog 赤羽 page); a second search found no fifth → drafted per
//   the coordinator. AJILLO: four shops (上野, 中野, 神田西口, 下北沢; Tabelog remarks), a sister brand of Alvino and CONBU
//   (both in data) → drafted per the coordinator. Tenshin Suya, Sasanoya: one shop each found.
// Dedupe: none is in data/tokyo.json by name, Tabelog id or address. Tenshin Suya (UDBASE 101) and Sasanoya share the lot
//   根岸1-3-20; Suya keeps its Tabelog point and Sasanoya is offset to ~6 m from it (the Tabelog points were 4 m apart).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw12-21');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ ホルモン青木 上野店
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13236362/'; const R = TB + 'dtlrvwlst/';
  const AK = 'https://tabelog.com/en/tokyo/A1323/A132305/13275748/';
  const W = day(['16:00', '22:30']); const E = day(['12:00', '22:30']);
  put({
    id: 'tokyo_horumon_aoki_ueno', name: 'ホルモン青木 上野店 (Horumon Aoki)', category: 'OMNI',
    lat: 35.708172, lng: 139.772339, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: some cuts are salt-seasoned, but others come with garlic-soy seasoning; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a horumon (offal) and beef yakiniku restaurant.',
    hours_raw: 'Mon–Fri 16:00–22:30; Sat, Sun and holidays 12:00–22:30; last order 22:00 (Tabelog). Weekday happy hour 16:00–18:00 with highballs, chūhai and oolong-hai at ¥110. Reservations taken (Tabelog online slots; a same-day phone booking worked in October 2026); late arrivals may lose the table, and busy times may mean a smaller table. 12 seats; small and smoky (2026 reviews). Non-smoking. Cards and PayPay; no e-money. Children welcome.',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yushima 3-chōme (Bunkyō), ルドーム 1F — 2 min from Ueno-Okachimachi / Ueno-Hirokoji',
    cuisine: 'Horumon and beef yakiniku, a branch of the Kameido original (Tabelog 赤羽 page) · menu (Tabelog, October 2026): small intestine, uterus, cartilage ¥605; pork cheek in garlic soy, head meat, pork breast ¥660; abomasum, beef heart ¥715; tongue base ¥825; house seared roast pork ¥750; Aoki kalbi ¥1,430; fresh loin ¥1,375; beef tongue ¥1,595, with green onion and salt ¥1,705 · 2026 reviews: liver, top tripe, omasum sashimi, tsurami, strip loin, ribeye, outside skirt, tail soup, rice; Hoppy',
    website: null, gmaps: gm('ホルモン青木 上野店'), menu_url: TB + 'dtlmenu/',
    notes: "[Horumon yakiniku · Ueno-Hirokoji, Kameido's offal grill in a 12-seat room] The Ueno branch of Kameido's well-known Horumon Aoki: a tiny, busy, smoky room on the Yushima side of Ueno-Hirokoji where you grill offal and beef over the table. The horumon is the point — small intestine, uterus, heart, tripe, omasum sashimi, tongue base — but the Aoki kalbi, loin and tongue are just as praised. Expect about ¥4,000–6,000 a head with drinks, less with the weekday 16:00–18:00 happy hour (¥110 highballs). Book ahead, or call on the day; your clothes will smell of smoke. Non-meat dishes are few.",
    chef_bio: { chef_name: null, roles: [], origin: 'Branch of ホルモン青木 亀戸本店; other branches in 赤羽 (opened September 2022) and 下北沢 (Tabelog 赤羽 page).', background: 'Tabelog official listing. No source names the owner or cooks.', philosophy: null, specialty: 'Horumon; Aoki kalbi.',
      anecdotes: [
        { text: '"The Aoki Kalbi is a must-try dish, and on this occasion, it was even more delicious than usual, so I ordered an extra plate." — June 2026.', source: R + 'B520435769/' },
        { text: '"The interior can be smoky, so be prepared for your clothes to smell a bit! Haha." — October 2026.', source: R + 'B537396867/' },
        { text: '"While the selection of non-meat and non-horumon dishes seemed a bit limited, I would definitely consider coming back." — October 2026.', source: R + 'B537733205/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): ホルモン青木 上野店、文京区湯島3-41-1 ルドーム 1F、上野御徒町駅から徒歩2分、月〜金16:00〜22:30、土日祝12:00〜22:30 (L.O.22:00)、平日16:00〜18:00はハイボール・酎ハイ・ウーロンハイ110円、予約可、12席、禁煙、カード・PayPay可。食べログ (赤羽支店): 亀戸の名店「ホルモン青木」の支店で、上野、下北沢にも。メニュー (2026年10月): シマチョウ・コブクロ・ナンコツ605円、豚カシラのにんにく醤油660円、ギアラ・ハツ715円、タンモト825円、自家製炙りチャーシュー750円、青木カルビ1,430円、生ロース1,375円、牛タン1,595円、ねぎ塩タン1,705円。口コミ (2026年2〜10月): ホルモンも肉もおいしい、一人4,000〜6,000円、煙たい、肉とホルモン以外の料理は少なめ。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', AK, R + 'B520435769/', R + 'B533898828/', R + 'B534923744/', R + 'B535295540/', R + 'B536406486/', R + 'B537396867/', R + 'B537733205/', R + 'B537773705/', R + 'B537881325/', R + 'B538106581/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small grill-your-own room; no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都文京区湯島3-41-1 ルドーム 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing (menu updated October 2026); reviews dated February–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都文京区湯島三丁目41番1号 (go) 7m; ${TODAY}`,
  }, { verified: 'partial', confidence: 'medium', sources: [TB + 'dtlmenu/'],
    price_note: 'Prices from the Tabelog menu (updated 30 October 2026, tax included).', last_checked: TODAY, items: [
      it('', '', 'Small intestine (shimachō)', '¥605', 'Horumon', 'ask', 'no', 'Tabelog menu, October 2026.', 'shimacho'),
      it('', '', 'Beef heart', '¥715', 'Horumon', 'ask', 'no', 'Tabelog menu, October 2026.', 'hatsu'),
      it('', '', 'Tongue base', '¥825', 'Horumon', 'ask', 'no', 'Tabelog menu, October 2026.', 'tanmoto'),
      it('', '', 'Aoki kalbi', '¥1,430', 'Beef', 'ask', 'no', 'Tabelog menu, October 2026.', 'aoki_kalbi'),
      it('', '', 'Fresh loin', '¥1,375', 'Beef', 'ask', 'no', 'Tabelog menu, October 2026.', 'nama_rosu'),
      it('', '', 'Beef tongue with green onion and salt', '¥1,705', 'Beef', 'ask', 'no', 'Tabelog menu, October 2026.', 'negishio_tan'),
    ] }, {
    cuisine: '亀戸の本店の支店のホルモンと牛の焼肉 (食べログ 赤羽支店のページ)・メニュー (食べログ、2026年10月): シマチョウ、コブクロ、ナンコツ605円、豚カシラのにんにく醤油、カシラ、豚トロ660円、ギアラ、ハツ715円、タンモト825円、自家製炙りチャーシュー750円、青木カルビ1,430円、生ロース1,375円、牛タン1,595円、ねぎ塩タン1,705円・2026年の口コミ: レバー、上ミノ、センマイ刺し、ツラミ、サーロイン、リブロース、ハラミ、テールスープ、ご飯、ホッピー',
    neighborhood: '湯島三丁目 (文京区)、ルドーム 1F。上野御徒町駅・上野広小路駅から徒歩2分',
    gf_detail: 'グルテンフリーは要確認。塩味の部位もありますが、にんにく醤油の味付けのものもあり、グルテンフリーの説明はありません。',
    vegan_detail: 'ヴィーガンではありません。ホルモンと牛肉の焼肉店。',
    notes: '[ホルモン焼肉・上野広小路、12席の亀戸のホルモン] 亀戸の有名店ホルモン青木の上野店。上野広小路の湯島側にある、小さくにぎやかで煙たい店で、テーブルでホルモンと牛肉を焼きます。主役はホルモン (シマチョウ、コブクロ、ハツ、ミノ、センマイ刺し、タンモト) ですが、青木カルビ、ロース、タンも同じくらい好評。予算はドリンク込みで一人約4,000〜6,000円、平日16:00〜18:00のハッピーアワー (ハイボール110円) ならさらにお得。予約か当日の電話がおすすめ、服は煙のにおいがつきます。肉以外の料理は少なめ。',
  });
}

// ================================================================ AJILLO 上野店
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13289512/'; const R = TB + 'dtlrvwlst/';
  const W = day(['14:00', '01:00']); const F = day(['14:00', '03:00']); const S = day(['14:00', '23:30']);
  put({
    id: 'tokyo_ajillo_ueno_yushima', name: 'AJILLO 上野店 (AJILLO Ueno)', category: 'OMNI',
    lat: 35.708199, lng: 139.772018, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: ajillo itself is oil and ingredients, but it is eaten with baguette or gnocchi, and pasta and fried dishes share the kitchen; nothing is described as gluten-free.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Vegan — ask: vegetables such as broccoli and asparagus can go into the ajillo, but the oils include bonito-flake and shirasu versions and nothing is marked vegan.',
    hours_raw: 'Mon–Thu 14:00–1:00 (last order 0:30); Fri–Sat 14:00–3:00 (last order 2:30); Sun and holidays 14:00–23:30 (last order 23:00); hours changed from April 2026; closing days not fixed (Tabelog). Reservations recommended — fully booked on an October 2026 Saturday night. One-drink policy and ¥500 cover, waived for course bookings; ID may be checked for alcohol. Order by QR code (October 2026). 18 seats with counter and standing bar; private hire for 20–50. Heated-tobacco smoking area. Cards, e-money and QR. Opened 29 September 2023.',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: F, 5: F, 6: S }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Yushima 3-chōme (Bunkyō), 大島薬局ビル 1F — 2 min from Exit A3 of Ueno-Hirokoji / Ueno-Okachimachi / Naka-Okachimachi; 3 min from Yushima',
    cuisine: 'Ajillo specialist from the group behind Alvino and CONBU: pick an oil (four kinds, e.g. bonito-flake dashi, herb and shirasu) and ingredients, and cook it yourself on an induction heater at the table, with baguette or gnocchi to dip (2026 reviews) · all-you-can-eat ajillo course with set ingredients and baguette, then free orders; other courses include pasta, salad and dessert (October 2026) · menu (Tabelog, May 2025): basil and prosciutto Genovese ¥1,380, burrata caprese ¥1,200, drunken red shrimp ¥480, snow-crab frittata ¥900, vongole ¥1,300, bolognese ¥1,300, raw oysters ¥550, liver pâté ¥520, onion velouté ¥800, ajillo ingredients such as asparagus ¥360 and broccoli ¥400 · wine by the glass',
    website: null, gmaps: gm('AJILLO 上野店 湯島3-41-3'), menu_url: TB + 'dtlmenu/',
    notes: "[Ajillo bar · Ueno-Hirokoji, build-your-own ajillo from 2 pm to late] A lively little bar in Yushima, from the team behind Alvino and CONBU, where each table gets an induction heater and you make your own ajillo: choose one of four oils — the bonito-flake dashi oil is the house recommendation — then add shrimp, mussels, broccoli, mushrooms and more, and mop it up with baguette. There is an all-you-can-eat ajillo course, plus carpaccios, pasta and wine. It opens at 2 pm for daytime drinking and runs to 1 am (3 am Fridays and Saturdays). Book for evenings; when it is packed, dishes can be slow — one October 2026 diner waited over 40 minutes for garlic shrimp.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 29 September 2023 (Tabelog)', background: 'Per the Alvino and CONBU Tabelog remarks, the same group runs AJILLO in Ueno, Nakano, Kanda Nishiguchi and Shimokitazawa, plus Alvino, CONBU, Bistronomie Avin and others. No source names the chef.', philosophy: null, specialty: 'Self-cooked ajillo; bonito-dashi oil.',
      anecdotes: [
        { text: '"It\'s a unique restaurant specializing in ajillo, where each table is equipped with an induction heater, allowing you to enjoy your favorite ajillo." — October 2026.', source: R + 'B537406881/' },
        { text: '"I tried the dish with herbs. It was refreshing and light, yet packed with the umami of shirasu (whitebait)." — October 2026.', source: R + 'B519219518/' },
        { text: '"It was quite busy, so I understand the delay, but it took over 40 minutes for the garlic shrimp to arrive" — October 2026.', source: R + 'B519219518/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): AJILLO 上野店、文京区湯島3-41-3 大島薬局ビル 1F、上野広小路駅・上野御徒町駅・仲御徒町駅A3出口から徒歩2分、湯島駅から3分、月〜木14:00〜翌1:00、金土14:00〜翌3:00、日祝14:00〜23:30 (2026年4月から)、不定休、予約可、1ドリンク制・お通し500円 (コース予約は不要)、18席、立ち飲みカウンター、加熱式たばこの喫煙所、カード・電子マネー・QR可、2023年9月29日オープン。メニュー (2025年5月): バジルと生ハムのジェノベーゼ1,380円、ブッラータのカプレーゼ1,200円、ズワイガニのフリッタータ900円、ボロネーゼ1,300円、生ガキ550円、アヒージョの具 (アスパラ360円、ブロッコリー400円)。口コミ (2026年10月): 各テーブルのIHで自分で作るアヒージョ、4種のオイル (おすすめはかつお節)、バゲットやニョッキ、アヒージョ食べ放題のコース、QRコード注文、土曜の夜は満席、混むとガーリックシュリンプに40分以上。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B513817481/', R + 'B519219518/', R + 'B536897135/', R + 'B537128451/', R + 'B537406881/', R + 'B537706285/', R + 'B537720447/', R + 'B537826484/', R + 'B537853790/', R + 'B538125389/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR-code ordering; lively; no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都文京区湯島3-41-3 大島薬局ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都文京区湯島三丁目41番3号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB + 'dtlmenu/'],
    price_note: 'Prices from the Tabelog menu (updated May 2025); ¥500 cover outside courses.', last_checked: TODAY, items: [
      it('', '', 'Ajillo ingredient: broccoli', '¥400', 'Ajillo', 'ask', 'ask', 'Tabelog menu, May 2025.', 'ajillo_broccoli'),
      it('', '', 'Burrata caprese', '¥1,200', 'Appetizers', 'ask', 'no', 'Tabelog menu, May 2025.', 'burrata_caprese'),
      it('', '', 'Homemade bolognese', '¥1,300', 'Pasta', 'no', 'no', 'Tabelog menu, May 2025.', 'bolognese'),
      it('', '', 'Raw oysters with shallot vinegar', '¥550', 'Appetizers', 'ask', 'no', 'Tabelog menu, May 2025.', 'raw_oysters'),
    ] }, {
    cuisine: 'Alvino や CONBU のグループのアヒージョ専門店: 4種のオイル (かつお節のだし、ハーブとしらすなど) と具を選び、テーブルのIHで自分で作って、バゲットやニョッキで (2026年の口コミ)・決まった具とバゲットのあと好きに注文できるアヒージョ食べ放題のコース、パスタ、サラダ、デザート付きのコースも (2026年10月)・メニュー (食べログ、2025年5月): バジルと生ハムのジェノベーゼ1,380円、ブッラータのカプレーゼ1,200円、赤海老の紹興酒漬け480円、ズワイガニのフリッタータ900円、ボンゴレ1,300円、ボロネーゼ1,300円、生ガキ550円、レバーパテ520円、玉ねぎのヴルーテ800円、アヒージョの具はアスパラ360円、ブロッコリー400円など・グラスワイン',
    neighborhood: '湯島三丁目 (文京区)、大島薬局ビル 1F。上野広小路駅・上野御徒町駅・仲御徒町駅A3出口から徒歩2分、湯島駅から3分',
    gf_detail: 'グルテンフリーは要確認。アヒージョはオイルと具ですが、バゲットやニョッキと一緒に食べ、パスタや揚げ物も同じ厨房。グルテンフリーの説明はありません。',
    vegan_detail: 'ヴィーガンは要確認。ブロッコリーやアスパラなど野菜もアヒージョにできますが、オイルにはかつお節やしらすのものもあり、ヴィーガンの表示はありません。',
    notes: '[アヒージョバー・上野広小路、昼2時から深夜までの自分で作るアヒージョ] Alvino や CONBU のチームによる湯島のにぎやかな小さなバーで、各テーブルにIHがあり、自分でアヒージョを作ります。4種のオイルから選び (おすすめはかつお節のだしのオイル)、海老、ムール貝、ブロッコリー、きのこなどを入れて、バゲットで。アヒージョ食べ放題のコースもあり、カルパッチョ、パスタ、ワインも。昼の2時から昼飲みでき、深夜1時まで (金土は3時まで)。夜は予約を。混むと料理が遅く、2026年10月にはガーリックシュリンプに40分以上待ったという声も。',
  });
}

// ================================================================ 点心すや
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131104/13274917/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:00', '23:00']);
  put({
    id: 'tokyo_tenshin_suya_uguisudani', name: '点心すや (Tenshin Suya)', category: 'OMNI',
    lat: 35.720889, lng: 139.779835, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: dim sum in wheat wrappers (gyoza, shumai, xiaolongbao, wontons, spring rolls) with soy-based sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, shrimp, chicken, duck and beef dishes; no vegan dish is named.',
    hours_raw: 'Tue–Sat 17:00–23:00 (last order 21:30); Sun 13:00–20:00 (last order 18:30); closed Mondays and some other days — check Instagram (Tabelog). Reservations taken; courses served once the whole party arrives; cancellation charges apply. Children generally not accepted. Charge ¥300 per person. 15 seats (5 at the counter, 10 at tables); semi-private rooms for 6–10. Non-smoking (ashtrays outside). Cards, transport IC and QR. No all-you-can-drink.',
    hours: { 1: W, 2: W, 3: W, 4: W, 5: W, 6: day(['13:00', '20:00']) }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Negishi 1-chōme, UDBASE 101 — 1 min from JR Uguisudani South Exit; 6 min from Iriya',
    cuisine: 'Creative Chinese dim sum with natural wine and house citrus sours (Tabelog) · dim sum ¥680 each (Tabelog menu, October 2026): homemade chewy pan-fried gyoza, steamed pork shumai, xiaolongbao, shrimp wontons, pork and cumin spring rolls, daikon mochi, char siu sesame balls · larger plates: braised beef cheek ¥2,880, spicy seafood with fried breadcrumbs ¥2,400, yu-lin chicken ¥1,700, chilli shrimp ¥1,800, assorted appetizers ¥1,500, roast duck ¥780, red-bean chawanmushi ¥746 · "Mankitsu" set of popular dishes; lu rou fan to finish (2026 reviews) · craft gin, natural wine, fruit-liqueur sours, non-alcoholic sours',
    website: null, gmaps: gm('点心すや 根岸1-3-20'), menu_url: TB + 'dtlmenu/',
    notes: "[Dim sum bar · Uguisudani, homemade dumplings and citrus sours] A stylish little dim-sum bar a minute from Uguisudani's South Exit, more Sangenjaya than Uguisudani, with a counter up front and tables at the back. The dumplings are made in-house — chewy pan-fried gyoza with a crisp base, shumai, xiaolongbao, water dumplings — at ¥680 a plate, alongside bigger plates such as braised beef cheek and yu-lin chicken, and a shelf of house citrus sours and natural wines (some sours alcohol-free). Staff explain the menu and pace the dishes well. Tabelog puts dinner at about ¥6,000–8,000 a head. One August 2026 diner, hoping for a gyoza feast, found it more of a date spot. Closed Mondays; no children.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Tabelog official listing; an August 2026 review quotes the owner on the gyoza. No source names the owner or cooks.', philosophy: null, specialty: 'Homemade dim sum; house citrus sours.',
      anecdotes: [
        { text: '"The \'Homemade, Chewy Pan-Fried Gyoza\' is steamed and then pan-fried in a Chinese wok." — August 2026, Mankitsu set.', source: R + 'B532698294/' },
        { text: '"What left the biggest impression on me was the water dumplings. The chewy skin and the burst of flavor inside were exquisite" — November 2026.', source: R + 'B538447039/' },
        { text: '"While the food was delicious, perhaps I had set my expectations too high, which left me feeling a bit underwhelmed." — August 2026.', source: R + 'B535509162/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): 点心すや、根岸1-3-20 UDBASE 101、JR鶯谷駅南口から徒歩1分、入谷駅から6分、火〜土17:00〜23:00 (L.O.21:30)、日13:00〜20:00 (L.O.18:30)、月曜休み (ほか不定休、Instagramで案内)、予約可、子ども連れの予約は原則不可、チャージ300円、15席 (カウンター5、テーブル10)、半個室あり、禁煙 (店の前に灰皿)、カード・交通系IC・QR可、飲み放題なし。メニュー (2026年10月): 点心は各680円 (焼き餃子、焼売、小籠包、海老ワンタン、クミンの春巻き、大根餅、ごま団子)、牛ほほ肉の煮込み2,880円、油淋鶏1,700円、エビチリ1,800円、前菜盛り合わせ1,500円。口コミ (2026年7〜11月): もちもちの自家製焼き餃子、水餃子、自家製の柑橘サワー、自然派ワイン、クラフトジン、ノンアルのサワー、おしゃれな店内、魯肉飯、期待が高すぎたという声も。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B532006043/', R + 'B532698294/', R + 'B534642049/', R + 'B534910523/', R + 'B535324610/', R + 'B535509162/', R + 'B535959977/', R + 'B536248481/', R + 'B538222638/', R + 'B538447039/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain the menu in detail; no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区根岸1-3-20 UDBASE 101',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing (menu updated October 2026); reviews dated July–November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区根岸一丁目3番20号 (go) 6m; same lot as Sasanoya (tokyo_sasanoya_uguisudani), ~6 m apart; ${TODAY}`,
  }, { verified: 'partial', confidence: 'medium', sources: [TB + 'dtlmenu/'],
    price_note: 'Prices from the Tabelog menu (updated October 2026, tax included); ¥300 charge.', last_checked: TODAY, items: [
      it('', '', 'Homemade chewy pan-fried gyoza', '¥680', 'Dim sum', 'no', 'no', 'Tabelog menu, October 2026.', 'yaki_gyoza'),
      it('', '', 'Steamed pork shumai', '¥680', 'Dim sum', 'no', 'no', 'Tabelog menu, October 2026.', 'shumai'),
      it('', '', 'Xiaolongbao', '¥680', 'Dim sum', 'no', 'no', 'Tabelog menu, October 2026.', 'xiaolongbao'),
      it('', '', 'Daikon mochi', '¥680', 'Dim sum', 'ask', 'ask', 'Tabelog menu, October 2026.', 'daikon_mochi'),
      it('', '', 'Braised beef cheek', '¥2,880', 'Mains', 'ask', 'no', 'Tabelog menu, October 2026.', 'beef_cheek'),
      it('', '', 'Yu-lin chicken with herb sauce', '¥1,700', 'Mains', 'no', 'no', 'Tabelog menu, October 2026.', 'yurinchi'),
    ] }, {
    cuisine: '自然派ワインや自家製の柑橘サワーと楽しむ創作中華の点心 (食べログ)・点心は各680円 (食べログのメニュー、2026年10月): もちもちの自家製焼き餃子、蒸し焼売、小籠包、海老ワンタン、豚とクミンの春巻き、大根餅、チャーシューのごま団子・大皿: 牛ほほ肉の煮込み2,880円、海鮮のパン粉揚げ辛味炒め2,400円、油淋鶏1,700円、エビチリ1,800円、前菜盛り合わせ1,500円、ローストダック780円、あんこの茶碗蒸し746円・人気料理の「満喫セット」、締めは魯肉飯 (2026年の口コミ)・クラフトジン、自然派ワイン、果実酒のサワー、ノンアルのサワー',
    neighborhood: '根岸一丁目、UDBASE 101。JR鶯谷駅南口から徒歩1分、入谷駅から6分',
    gf_detail: 'グルテンフリーではありません。小麦の皮の点心 (餃子、焼売、小籠包、ワンタン、春巻き) に醤油ベースのたれ。',
    vegan_detail: 'ヴィーガンではありません。豚、海老、鶏、鴨、牛の料理。ヴィーガンの料理名はありません。',
    notes: '[点心バー・鶯谷、自家製の点心と柑橘サワー] 鶯谷駅南口から1分の、鶯谷というより三軒茶屋のようなおしゃれで小さな点心のバー。手前にカウンター、奥にテーブル。点心は自家製で、底がカリッとしたもちもちの焼き餃子、焼売、小籠包、水餃子など1皿680円。牛ほほ肉の煮込みや油淋鶏などの大皿もあり、自家製の柑橘サワーや自然派ワインが並びます (ノンアルのサワーも)。スタッフの説明や料理を出すタイミングが丁寧。食べログの目安では夜は一人約6,000〜8,000円。2026年8月には餃子をたっぷり食べたかった人が、デート向きの店だったという声も。月曜休み、子どもは不可。',
  });
}

// ================================================================ ささのや
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131104/13012238/'; const R = TB + 'dtlrvwlst/';
  const W = day(['15:00', '22:00']);
  put({
    id: 'tokyo_sasanoya_uguisudani', name: 'ささのや (Sasanoya)', category: 'OMNI',
    lat: 35.72094, lng: 139.77987, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: skewers come with salt or a self-serve tare; the tare is not described; no gluten-free statement.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken and pork offal skewers; green onion and garlic skewers exist but share the grill and tare.',
    hours_raw: 'Mon 15:30–22:00; Tue–Sat 15:00–22:00; closed Sundays and holidays (Tabelog; may change). No reservations; a crowd often waits outside before opening; tell the staff how many, then take the standing counter or a shared table at the back. Popular skewers sell out by evening (October 2026). No appetizer charge, seated or standing. Cash only. 14 seats plus standing. Smoking allowed. Take-away skewers.',
    hours: { 0: day(['15:30', '22:00']), 1: W, 2: W, 3: W, 4: W, 5: W }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Negishi 1-chōme, by the overpass — 2 min from JR Uguisudani South Exit (turn left)',
    cuisine: 'Old-school standing yakitori and motsuyaki bar (reviews) · most skewers about ¥100 (October 2026): kashira, shiro, tori, tsukune, tongue, liver, heart, green onion, garlic, wiener · sauce skewers come pre-grilled on a tray and you help yourself to tare; salt skewers are grilled to order, three at a time · winter motsu stew; onion salad; pickles ¥400 · nigori sake ¥320, chilled sake, shōchū',
    website: null, gmaps: gm('ささのや 鶯谷'), menu_url: null,
    notes: "[Yakitori · Uguisudani, a smoky Showa-era standing bar] A smoke-filled, Showa-era yakitori and motsuyaki bar by the overpass at Uguisudani's South Exit, where people queue before the 15:00 opening. Most skewers are about ¥100: kashira and shiro, chicken, tsukune and offal, with sauce skewers waiting on a grill tray (help yourself to the tare) and salt ones grilled to order, three at a time. Drink cheap sake or shōchū at the standing counter or share a table at the back. Staff explain the system to first-timers. No appetizer charge, cash only, smoking allowed; popular skewers run out by evening; closed Sundays and holidays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Tabelog listing. No source names the owner.', philosophy: null, specialty: 'Motsuyaki and yakitori skewers at about ¥100.',
      anecdotes: [
        { text: '"The salt must be ordered in a minimum of three skewers from the staff, while the sauce is served on a grill, allowing you to take as much as you like from the container onto your plate." — October 2026.', source: R + 'B523088293/' },
        { text: '"Most skewers are around JPY 100 each. Affordable, delicious, and straightforward." — October 2026.', source: R + 'B537823579/' },
        { text: '"It\'s a standing-only grilled offal restaurant, so it\'s easy to spot the crowd gathered outside." — October 2026.', source: R + 'B536746243/' },
      ],
      japanese_sources_summary: '食べログ: ささのや、根岸1-3-20、JR鶯谷駅南口から左へ、跨線橋の横、徒歩2分、月15:30〜22:00、火〜土15:00〜22:00、日祝休み、予約不可、お通し代なし (座っても立ち飲みでも)、カード・電子マネー・QR不可、14席、立ち飲み、喫煙可、焼き鳥の持ち帰り可。口コミ (2026年8〜10月): 串はほとんど100円前後、カシラ、シロ、とり、つくね、タン、レバー、ハツ、ねぎ、にんにく、ウインナー、タレは焼き台の串を取りタレは自分で、塩は3本から注文、開店前から行列、煙たい昭和の雰囲気、にごり320円、お新香400円、冬のもつ煮、夜には串が売り切れることも。',
      confidence: 'medium', sources: [TB, R + 'B383416771/', R + 'B523088293/', R + 'B536746243/', R + 'B536800682/', R + 'B537429004/', R + 'B537754850/', R + 'B537823579/', R + 'B537826893/', R + 'B538110298/', R + 'B538215442/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain the system to first-timers (October 2026); cash only; smoky.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区根岸1-3-20',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区根岸一丁目3番20号 (go) 12m; offset ~6 m from Tenshin Suya (tokyo_tenshin_suya_uguisudani, same lot, UDBASE 101); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537823579/', R + 'B383416771/'],
    price_note: 'Prices from October 2026 reviews; most skewers about ¥100.', last_checked: TODAY, items: [
      it('', '', 'Skewers (kashira, shiro, tsukune and others), each', 'about ¥100', 'Skewers', 'ask', 'no', 'October 2026.', 'kushi'),
      it('', '', 'Pickles (oshinko)', '¥400', 'Sides', 'ask', 'ask', 'October 2026.', 'oshinko'),
      it('', '', 'Nigori sake', '¥320', 'Drinks', 'ask', 'ask', 'October 2026.', 'nigori'),
    ] }, {
    cuisine: '昔ながらの立ち飲みの焼き鳥・もつ焼きの店 (口コミ)・串はほとんど約100円 (2026年10月): カシラ、シロ、とり、つくね、タン、レバー、ハツ、ねぎ、にんにく、ウインナー・タレの串は焼き台に並び、タレは自分で。塩は3本ずつ注文して焼いてもらう・冬のもつ煮、オニオンスライス、お新香400円・にごり320円、冷酒、焼酎',
    neighborhood: '根岸一丁目、跨線橋のそば。JR鶯谷駅南口から左へ徒歩2分',
    gf_detail: 'グルテンフリーは要確認。串は塩かセルフのタレで、タレの説明はありません。グルテンフリーの説明もありません。',
    vegan_detail: 'ヴィーガンではありません。鶏と豚のもつの串。ねぎやにんにくの串もありますが、同じ焼き台とタレ。',
    notes: '[焼き鳥・鶯谷、煙もうもうの昭和の立ち飲み] 鶯谷駅南口の跨線橋そばにある、煙が立ちこめる昭和の焼き鳥・もつ焼きの店で、15時の開店前から行列。串はほとんど約100円: カシラやシロ、とり、つくね、もつなど。タレの串は焼き台に並び (タレは自分で)、塩は3本ずつ注文して焼いてもらいます。立ち飲みのカウンターか奥の相席のテーブルで安い日本酒や焼酎を。初めてならスタッフが仕組みを説明してくれます。お通しなし、現金のみ、喫煙可。人気の串は夜には売り切れ、日曜・祝日休み。',
  });
}

save();
