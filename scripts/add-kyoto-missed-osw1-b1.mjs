// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 1.
//   + 小林酒店 Kobayashi Saketen (bottle-shop-style standing bar in the Kayukoji alley off Shinkyogoku; since December 2023)
//   + さらさ花遊小路 Sarasa Kayu Koji (two-floor townhouse café of the Kyoto café company SARASA; since 2007)
//   + maison de frouge (strawberry-only patisserie and café near Karasuma Oike; Sweets WEST Tabelog 100 2023, 2026)
//   + ザ・コモン・ワン・バー・キョウト The Common One Bar Kyoto (cocktail bar in a Gion Shinbashi machiya; Bar Tabelog 100 2022)
//   - サロン・ド・ロワイヤル 京都店 (26021798): skipped as a chain (15 shops on the company's own shop page).
//   Picked on 2026-11-05: 2 from `queue.mjs kyoto-missed next core 200` (26040602, 26005388: the first two with id mod 6 = 2)
//   and 2 from `next notable 200` (26021798 skipped, then 26023508, 26016560). None is in data/kyoto.json: grep by name
//   (小林酒店/Kobayashi Saketen, さらさ/Sarasa, フルージュ/Frouge, コモン/Common One, Finlandia, 何生館) and address
//   (中之町565-1, 中之町565-13, 三文字町201, 元吉町46) found none. Kobayashi Saketen and Sarasa share the 中之町565 block
//   (Tabelog points about 23 m apart). Tabelog URLs copied from each listing.txt line 1.
//   Group checks (working line): SARASA inc runs 5 shops of 3 formats — cafés さらさ西陣, さらさ花遊小路, さらさ3, plus
//   サラサケーキ工房 (cake workshop) and CLAMP COFFEE (roaster) — 3 same-concept cafés, none in data: a small group, drafted.
//   K-stage runs 4 bars and a tea-and-cocktail room, each a different concept (sister concepts): drafted.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-1');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26021798', 'サロン・ド・ロワイヤル 京都店 (Salon de Royal Kyoto ten): a chain — the company page https://www.s-royal.com/kyoto-shopcafe/ lists 15 shops (陸前高田店, 盛岡フェザン店, 藤崎仙台店, エスパル仙台店, 銀座店, 横浜高島屋店, 三番街店, 北浜店, 工場直営店エコショコラ, LA PECAN 近鉄阿部野橋店, 京都店, ジェイアール京都伊勢丹店, 嵐山店, 鶴屋百貨店, 山形屋（鹿児島）店), checked 2026-11-05');

// ================================================================ 小林酒店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26040602/'; const R = TB + 'dtlrvwlst/';
  const H1 = day(['15:00', '24:00']); const H2 = day(['13:00', '24:00']);
  put({
    id: 'kyoto_kobayashi_saketen', name: '小林酒店 (Kobayashi Saketen)', category: 'OMNI',
    lat: 35.004101, lng: 135.767732, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A drinks-first bar: canned craft beer (one made with rice), sake, wine, gin and cocktails, with small plates such as fried spring rolls and baguette with dip; no gluten information (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Most snacks use fish, chicken or cheese (mackerel spring rolls, steamed chicken, a cheese platter); no vegan information (2025–2026 reviews).',
    hours_raw: 'Mon–Thu 15:00–24:00; Fri–Sun 13:00–24:00 (Tabelog; the same hours in an August 2025 review). No reservations (Tabelog). 15 seats; non-smoking; cards, e-money and QR payments listed (Tabelog), though an April 2026 reviewer noted that PayPay is not accepted. A standing counter is outside and seats are inside (September 2026). Opened 19 December 2023 (Tabelog). 88 m from Kyoto Kawaramachi Stn (Tabelog).',
    hours: { 0: H1, 1: H1, 2: H1, 3: H1, 4: H2, 5: H2, 6: H2 }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kayukoji alley off Shinkyogoku, north of Shijo — 88 m from Kyoto Kawaramachi Stn',
    cuisine: 'Standing bar laid out like a liquor shop: pick a bottle or can from the fridges and drink it there (2025–2026 reviews) · canned craft beer, e.g. a collaboration beer of the shop, KITSUNE (a light lager made with Omi Koshihikari rice), Habakari-san from Kyoto ¥1,200, HINO from Shiga ¥1,260 · Japanese sake, wine, local dry gin (Nozawa Onsen Dry Gin), cocktails · small plates: fried spring rolls with mackerel and tomato ¥660, steamed chicken, an assorted three-snack platter, baguette and dip; an August 2025 review describes creative obanzai with seasonal fish from Nishiki Market and vegetables from Ohara (2025–2026 reviews)',
    website: null, gmaps: gm('小林酒店 京都 新京極'), menu_url: null,
    notes: '[Standing bar · Kawaramachi, a fridge of craft beer and gin] A modern take on the liquor shop that lets you drink on the premises, in the Kayukoji alley a few steps from Kyoto Kawaramachi Stn: choose a can or bottle from the refrigerated cases — craft beer, sake, wine, a strong line of Japanese craft gin — and drink at the standing counter outside or the seats inside; the owner brings the glass, printed with the shop emblem. Staff will suggest easy-drinking picks. Snacks are small and inventive (mackerel-and-tomato spring rolls ¥660). Reviewers call it stylish but pricey for a standing bar (¥1,200–1,260 a can in September 2026); one 2025 visitor was disappointed by the service. Open to midnight daily, from 13:00 at weekends.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed in the sources)'], origin: null,
      background: 'Tabelog lists the shop as a corporate member, opened on 19 December 2023. An August 2025 review describes it as a modern sake shop that blends liquor sales with standing-bar culture, with music playing.',
      philosophy: null, specialty: 'Craft gin and canned craft beer from the fridge; mackerel-and-tomato spring rolls.',
      anecdotes: [
        { text: '"Once you select your drink and take a seat, the owner brings you a glass, complete with the Kobayashi Saketen emblem." — September 2026.', source: R + 'B536643774/' },
        { text: '"I was a bit overwhelmed by the variety, but the staff kindly came over to recommend some options that were easy to drink" — August 2025.', source: R + 'B512999487/' },
        { text: 'A September 2026 visitor arrived at about 14:00 on a public holiday as the first customer; several groups followed, one staff member was running the whole room, and the reviewer judged the drinks the reason to come rather than the snacks.', source: R + 'B536014542/' },
        { text: 'An April 2025 visitor, drawn by the local dry gin, found the service and the food aimed at inbound tourists and below expectations; the staff could not describe the cheese platter.', source: R + 'B505538746/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): 小林酒店、立ち飲み、中京区新京極通四条上る中之町565-1、京都河原町駅から88m、月〜木 15:00〜24:00、金〜日 13:00〜24:00、予約不可、15席、個室なし、禁煙、カード・電子マネー・QR 可、2023年12月19日オープン。口コミ (2025〜2026年、英語): 冷蔵ケースから選ぶ缶のクラフトビール、日本酒、ワイン、クラフトジン、カクテル、外に立ち飲みのカウンター、店内に席、サバとトマトの揚げ春巻き660円、蒸し鶏、3種の盛り合わせ、京都の「はばかりさん」1,200円、滋賀の「HINO」1,260円、PayPay 不可 (2026年4月)。',
      confidence: 'medium', sources: [TB, R + 'B505538746/', R + 'B508802007/', R + 'B512999487/', R + 'B515827248/', R + 'B520018820/', R + 'B523916619/', R + 'B526980209/', R + 'B535131900/', R + 'B536014542/', R + 'B536643774/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pick your drink from the fridge and order at the counter; staff explain the drinks when asked; cards accepted (PayPay not, April 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区新京極通四条上る中之町565-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with official (corporate member) information; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.004101, 135.767732); cross-checked: GSI 京都府京都市中京区中之町565番地 (lot) 26m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536643774/', R + 'B505538746/', R + 'B512999487/'],
    price_note: 'No menu read; prices from April 2025 and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Fried spring rolls with mackerel and tomato', '¥660', 'Snacks', 'no', 'no', 'September 2026.', 'mackerel_spring_rolls'),
      it('', '', 'Assorted platter', '¥1,100', 'Snacks', 'ask', 'ask', 'April 2025.', 'assorted_platter'),
      it('はばかりさん', '', 'Habakari-san (a drink from Kyoto, from the fridge)', '¥1,200', 'Drinks', '', '', 'September 2026.', 'habakari_san'),
      it('', '', 'HINO (a drink from Shiga, from the fridge)', '¥1,260', 'Drinks', '', '', 'September 2026.', 'hino'),
    ] }, {
    cuisine: '酒屋のような造りの立ち飲み。冷蔵ケースから瓶や缶を選んでその場で飲む (2025〜2026年の口コミ)・缶のクラフトビール: 店のコラボビール、KITSUNE (Omi Koshihikari の米を使った軽いラガー)、京都の「はばかりさん」1,200円、滋賀の「HINO」1,260円・日本酒、ワイン、地元のドライジン (Nozawa Onsen Dry Gin)、カクテル・つまみ: サバとトマトの揚げ春巻き660円、蒸し鶏、3種の盛り合わせ、バゲットとディップ。2025年8月の口コミは Nishiki Market の旬の魚と Ohara の野菜の創作おばんざいとも書く (2025〜2026年の口コミ)',
    neighborhood: '新京極から入る花遊小路、四条の北。京都河原町駅から88m',
    gf_detail: '要確認。飲み物が主役の店で、缶のクラフトビール (米を使ったものもある)、日本酒、ワイン、ジン、カクテルに、揚げ春巻きやバゲットとディップなどの小皿。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。つまみの多くは魚、鶏、チーズを使う (サバの春巻き、蒸し鶏、チーズの盛り合わせ)。ヴィーガンの情報はない (2025〜2026年の口コミ)。',
    notes: '[立ち飲み・河原町、クラフトビールとジンの冷蔵ケース] 京都河原町駅のすぐ近く、花遊小路にある今風の角打ち。冷蔵ケースからクラフトビール、日本酒、ワイン、充実した国産クラフトジンを選び、外の立ち飲みカウンターか店内の席で飲む。グラスは店主が持ってきてくれ、店の紋入り。飲みやすい一本をスタッフが勧めてくれる。つまみは小さく凝ったもの (サバとトマトの揚げ春巻き660円)。おしゃれだが立ち飲みにしては高め (2026年9月は1缶1,200〜1,260円) との声、2025年には接客に失望したという訪問者も。毎日24時まで、週末は13時から。',
  });
}

// ================================================================ さらさ花遊小路
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26005388/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.cafe-sarasa.com/'; const SHOP = SITE + 'shop/kayukoji.html'; const CO = SITE + 'company/';
  const H = day(['12:00', '22:00']);
  put({
    id: 'kyoto_sarasa_kayukoji', name: 'さらさ花遊小路 (Sarasa Kayu Koji)', category: 'OMNI',
    lat: 35.00399, lng: 135.767535, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Lunch plates lean on fried food — kara-age, tonkatsu, chicken katsu with demi-glace — next to curry, dry curry, taco rice and cakes; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and a focus on vegetables, but the reviewed plates are meat-based and the desserts use cream and cheese; no vegan menu is published (Tabelog; 2026 reviews).',
    hours_raw: '12:00–22:00, closed Wednesday (official site; Tabelog). Lunch 12:00–15:00, coffee only 15:00–18:00, dinner 18:00–22:00; last order food 21:00, drinks 21:30 (Tabelog). Bookings by phone only (Tabelog note of 29 May 2026); a queue can form at opening, so booking is advised (August, October 2026). 90-minute seating limit (August 2026 on a public holiday; October 2026). Orders by QR code (August 2026); water is self-service (August 2026). 60 seats over two floors (10 counter, 18 sofa, 32 table); non-smoking, with a smoking area in the ground-floor courtyard; cash only — no cards, e-money or QR payments (Tabelog). 1 min from Hankyu Kawaramachi Stn exit 6 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kayukoji alley off Shinkyogoku, north of Shijo — 1 min from Kawaramachi Stn exit 6',
    cuisine: 'Café by day, a place for a drink and food at night (official site), with international dishes, house-made cakes and freshly roasted coffee (Tabelog) · lunch plate about ¥1,350 (October 2026) · daily lunch sets ¥1,280, e.g. pork chinjao rosu, chili-style chicken kara-age (October 2026) · chicken curry ¥1,100, drink set +¥300 (August 2026) · kara-age plate, tonkatsu, chicken katsu set, taco rice, dry curry with cheese and egg, chicken steak with onion sauce (rice extra), carrot croquette (2026 reviews) · spiced chai parfait ¥750, caramel cheesecake, pumpkin cheesecake, double chocolate cake · coffee, iced coffee; beer, wine, shochu, cocktails (official site; Tabelog)',
    website: SHOP, gmaps: gm('さらさ花遊小路 京都'), menu_url: null,
    notes: '[Café · Kawaramachi, a two-floor townhouse café down an alley] Through a narrow entrance in the Kayukoji alley, a few steps from Kawaramachi Stn, the room opens into a surprisingly large old wooden house with heavy beams, retro counter seats downstairs, roomy table seating upstairs, and rows of manga on display. Lunch is generous plates at about ¥1,280–1,350 (kara-age, curry, taco rice), afternoons are coffee and house cakes, and at night it turns to drinks and small plates until 22:00. A line forms at noon, so phone ahead; seating is 90 minutes. Part of SARASA, a Kyoto café company dating from 1984; this shop opened in 2007. Cash only; closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Run by 株式会社サラサ (SARASA inc), representative director 尾崎 友哉 (official site); no kitchen staff are named'], origin: null,
      background: 'Per the official company page: SARASA opened in December 1984 on the first floor up of "wood inn", a converted kimono shop at Tominokoji Sanjo; a second shop followed at Nishijin in 2000 and サラサ3 in 2005; in October 2007 the main shop moved from Tominokoji Sanjo to Shinkyogoku Shijo-agaru and opened as this Kayukoji shop (Tabelog gives the opening as 6 November 2007). 尾崎 joined in 2008; a new company, 株式会社サラサ, took over the running in April 2026. The company now runs さらさ西陣 (in a former public bath), さらさ花遊小路, さらさ3, サラサケーキ工房 and CLAMP COFFEE. Tabelog\'s introduction says the name comes from sarasa, a fabric that spread from the Middle East along the Silk Road.',
      philosophy: 'Per the official company page: the thing the company values most is kindness (親切心) toward everyone it deals with, from staff and suppliers to local customers and visitors to Kyoto.',
      specialty: 'Lunch plates; house-made cakes; coffee.',
      anecdotes: [
        { text: '"The meal included kara-age and tonkatsu with a sweet sauce. Since it gets busy, I recommend making a reservation." — August 2026.', source: R + 'B533640504/' },
        { text: 'An August 2026 reviewer came for the carrot croquette, found it sold out, and had the chai parfait instead: chai panna cotta under vanilla ice cream and whipped cream.', source: R + 'B533837383/' },
        { text: 'An August 2026 visitor who liked the company\'s other shops found the chicken katsu set over-fried and drenched in demi-glace and left most of it.', source: R + 'B533614969/' },
        { text: '"I arrived a few minutes before opening, and there was already a line, but I managed to get in during the first round." — October 2026.', source: R + 'B537699491/' },
      ],
      japanese_sources_summary: '公式サイト (cafe-sarasa.com): さらさ花遊小路「昼はコーヒー、夜は誰かと一杯。」、12:00〜22:00、水曜定休、中京区新京極通四条上る中之町565-13、株式会社サラサ (代表取締役 尾崎 友哉)、運営店舗はさらさ西陣、さらさ花遊小路、さらさ3、サラサケーキ工房、CLAMP COFFEE。沿革: 1984年12月 富小路三条の「wood inn」2階にサラサ開店、2000年 西陣店、2005年 サラサ3、2007年10月 本店を新京極四条上ルへ移転しサラサ花遊小路店開店、2008年 尾崎入社、2026年4月 新会社「株式会社サラサ」。食べログ: カフェ・洋食・創作料理、ランチ12:00〜15:00、喫茶のみ15:00〜18:00、ディナー18:00〜22:00、水曜休み、電話予約のみ、60席、中庭に喫煙所、カード・電子マネー・QR 不可、ベジタリアンメニューあり、2007年11月6日オープン。口コミ (2026年8〜10月、英語): 日替わりランチ1,280円、チキンカレー1,100円、チャイパフェ750円、唐揚げ、タコライス、90分制、QR 注文。',
      confidence: 'medium', sources: [TB, SITE, SHOP, CO, R + 'B533614969/', R + 'B533640504/', R + 'B533837383/', R + 'B534207802/', R + 'B534365158/', R + 'B535314427/', R + 'B535316170/', R + 'B536720175/', R + 'B536962950/', R + 'B537699491/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by QR code; menu with photos; phone to book; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区新京極通四条上る中之町565-13',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (company history to April 2026) and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003990, 135.767535); cross-checked: GSI 京都府京都市中京区中之町565番地 (lot) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533837383/', R + 'B536962950/', R + 'B537699491/'],
    price_note: 'No menu read; prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Daily lunch set (e.g. pork chinjao rosu, chili-style chicken kara-age)', '¥1,280', 'Lunch', 'ask', 'no', 'October 2026.', 'daily_lunch'),
      it('', '', 'Lunch plate', '¥1,350', 'Lunch', 'ask', 'ask', 'October 2026; the reviewer was not sure of the price.', 'lunch_plate'),
      it('', '', 'Chicken curry', '¥1,100', 'Lunch', 'ask', 'no', 'August 2026; egg or cheese topping, salad or soup extra.', 'chicken_curry'),
      it('', '', 'Drink set', '+¥300', 'Drinks', '', '', 'August 2026.', 'drink_set'),
      it('', '', 'Special chai parfait with spices', '¥750', 'Desserts', 'no', 'no', 'August 2026; cornflakes at the bottom.', 'chai_parfait'),
    ] }, {
    cuisine: '昼はカフェ、夜は一杯と食事の店 (公式サイト)。各国料理、自家製ケーキ、焙煎したてのコーヒー (食べログ)・ランチプレート約1,350円 (2026年10月)・日替わりランチ1,280円、たとえば豚こまのチンジャオロース、チキンのチリ風唐揚げ (2026年10月)・チキンカレー1,100円、ドリンクセット+300円 (2026年8月)・唐揚げのプレート、とんかつ、チキンカツのセット、タコライス、チーズと卵のドライカレー、オニオンソースのチキンステーキ (ご飯は別料金)、にんじんのコロッケ (2026年の口コミ)・スパイスのチャイパフェ750円、キャラメルチーズケーキ、かぼちゃのチーズケーキ、ダブルチョコレートケーキ・コーヒー、アイスコーヒー、ビール、ワイン、焼酎、カクテル (公式サイト、食べログ)',
    neighborhood: '新京極から入る花遊小路、四条の北。河原町駅6番出口から徒歩1分',
    gf_detail: '要確認。ランチは唐揚げ、とんかつ、デミグラスのチキンカツなど揚げ物が多く、ほかにカレー、ドライカレー、タコライス、ケーキ。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。食べログはベジタリアンメニューありと野菜へのこだわりを載せるが、口コミの料理は肉が中心で、デザートはクリームやチーズを使う。ヴィーガンのメニューは公開されていない (食べログ、2026年の口コミ)。',
    notes: '[カフェ・河原町、路地奥の2階建ての町家カフェ] 河原町駅のすぐそば、花遊小路の狭い入口を入ると、太い梁の古い木造家屋が思いのほか広く、1階はレトロなカウンター、2階はゆったりしたテーブル席、漫画がずらりと並ぶ。昼は1,280〜1,350円ほどのボリュームあるランチ (唐揚げ、カレー、タコライス)、午後はコーヒーと自家製ケーキ、夜は22時までお酒とアテ。12時には行列ができるので電話予約がおすすめ、席は90分制。1984年からの京都のカフェ会社サラサの店で、ここは2007年開店。現金のみ、水曜休み。',
  });
}

// ================================================================ maison de frouge
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26023508/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://ichigonoomise.com/'; const PROFILE = SITE + 'profile/'; const CAKES = SITE + 'product/cakes.html'; const CO = SITE + 'company/';
  const H = day(['11:00', '17:00']);
  put({
    id: 'kyoto_maison_de_frouge', name: 'メゾン ド フルージュ (maison de frouge)', category: 'MOM_AND_POP',
    lat: 35.008409, lng: 135.760963, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: the range is shortcake, mille-feuille, tarts, roll cake, financiers and madeleines; no gluten-free item is listed (official site; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the cakes are built on whipped cream, eggs, butter and cheese (shortcake, pudding, cheesecake, mousse) (official site; 2026 reviews).',
    hours_raw: '11:00–17:00 every day, open all year (Tabelog). No reservations for the café or for holding cakes; pay first when buying in the shop; phone orders need a bank transfer in advance (Tabelog). 9 seats; the eat-in seats can be full (October 2026). Non-smoking; credit cards accepted, no e-money or QR payments (Tabelog). Children welcome (Tabelog). 3 min walk from Karasuma Oike Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashinotoin-dori south of Sanjo — 3 min walk from Karasuma Oike Stn',
    cuisine: 'Patisserie and small café that makes only strawberry sweets, from fully ripe strawberries sent from farms across Japan, a different variety each day (official site) · premium strawberry shortcake ¥1,430 on the official list; ¥1,450 plus tax (October 2026) and ¥1,595 eaten in (September 2026) · strawberry mille-feuille ¥1,078, two per person, tied with a ribbon cut with small scissors · strawberry tart ¥1,430 · strawberry and rhubarb cheese tart ¥902 · strawberry cheesecake ¥880 · roll cake ¥702 · tea and berry mousse ¥858 · strawberry pudding ¥418 (official site, undated prices) · strawberry trifle ¥380 plus tax (October 2026) · strawberry financier, raspberry marshmallow, raspberry and pistachio madeleine · wild berry tea ¥880, iced café latte ¥990 (September 2026)',
    website: SITE, gmaps: gm('メゾン・ド・フルージュ 京都 三文字町'), menu_url: CAKES,
    notes: '[Strawberry sweets · Karasuma Oike, a strawberry-only patisserie] A small white-and-brown shop off Sanjo where every cake is a strawberry cake. Founder Mika Watabe was working in fashion design when a friend brought round some remarkably good strawberries; the visit to the grower behind them led to the first shop in 2003. Fully ripe berries now come straight from farms around Japan, a different variety each day. The premium shortcake (about ¥1,450–1,595) layers strawberries inside and on top; the mille-feuille comes tied with a ribbon you snip with tiny scissors. Nine café seats, no bookings; 11:00–17:00 every day. Prices are high, as reviewers note.',
    chef_bio: { chef_name: 'Mika Watabe (渡部美佳)', roles: ['Founder (official site profile: Mika Watabe)', 'Representative director of 株式会社ミュウ, the operating company (official company page: 代表取締役 渡部美佳)'], origin: 'Lives in Kyoto City (official site).',
      background: 'Per the official site: while working in fashion planning and design, Watabe was so moved by strawberries a friend introduced that the shop for strawberry sweets opened in 2003; the farm that grew those berries became a contract grower, sending only berries ripened in the field. The site credits Watabe with more than 100 recipes across Japanese, Western and Chinese sweets, appearances on TV, in magazines and at events, and work as an adviser on strawberry breeding for agricultural research bodies. Company history: opened in April 2003 on Senbon-dori in Kamigyo-ku; moved to Sanjo, Nakagyo-ku, in March 2014 (Tabelog: 9 March 2014); the company was set up in March 2013, has a strawberry laboratory and production atelier in Okayama Prefecture, and lists 株式会社三越伊勢丹, 株式会社大丸松坂屋百貨店, 株式会社高島屋 and 株式会社阪急阪神百貨店 as trading partners. Tabelog Sweets WEST "Tabelog 100" 2023 and 2026.',
      philosophy: 'Per the official site: to change how strawberries are distributed in Japan — avoiding the early picking used for market looks, buying fully ripe berries from farms each time, and simplifying packing so growers spend less — so that customers can taste truly good strawberries.',
      specialty: 'Premium strawberry shortcake; strawberry mille-feuille.',
      anecdotes: [
        { text: 'A September 2026 visitor noted that, ten days earlier, the shortcake had been ranked first in its category in a poll of 10,000 Kansai residents on the TV show "Chachai-re Monday"; even the restroom had strawberry decorations.', source: R + 'B536741842/' },
        { text: '"You cut the ribbon with the adorable little scissors provided." — the strawberry mille-feuille, made with strawberries from Shiga, October 2026.', source: R + 'B537050888/' },
        { text: 'An October 2026 reviewer described the shortcake as four layers of strawberries between the sponge, and the strawberry trifle as made from the cake trimmings left from other cakes, at a much lower price.', source: R + 'B537022304/' },
        { text: 'A September 2026 visitor passed over the shortcake at over ¥1,500 and had the limited strawberry-caramel and lemon-cream pudding (¥780) with wild berry tea instead.', source: R + 'B536481562/' },
      ],
      japanese_sources_summary: '公式サイト (ichigonoomise.com): メゾン・ド・フルージュ 苺のお店、渡部美佳 (Mika Watabe)、服飾の企画デザインの仕事をしていた頃に友人から紹介されたいちごのおいしさに感動し2003年に開業、契約農家から畑で完熟したいちごを直送、100種類以上のレシピ、京都市在住、農業研究機関へのいちご開発のアドバイザー、苺の流通を変えたい。生菓子: 苺のプレミアムショートケーキ1,430円、苺のミルフィーユ1,078円 (お一人様2個まで)、苺のタルト1,430円、苺とルバーブのフロマージュタルト902円、苺のチーズケーキ880円、苺のロールケーキ702円、紅茶とベリーのムース858円、苺のプリン418円。会社概要: 株式会社ミュウ、代表取締役 渡部美佳、2013年3月設立、中京区東洞院通三条下ル三文字町201 1F、苺研究所・製造アトリエは岡山県英田郡西粟倉村、2003年4月 上京区千本通りで開業、2014年3月 中京区三条へ移転、取引先は三越伊勢丹、大丸松坂屋、高島屋、阪急阪神百貨店。食べログ: ケーキ・カフェ、11:00〜17:00 年中無休、予約不可、9席、カード可、2014年3月9日オープン、スイーツ WEST 百名店 2023・2026。',
      confidence: 'medium', sources: [TB, SITE, PROFILE, CAKES, CO, R + 'B535586370/', R + 'B535952677/', R + 'B536131065/', R + 'B536143966/', R + 'B536231541/', R + 'B536481562/', R + 'B536741842/', R + 'B537022304/', R + 'B537050888/', R + 'B537556394/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Choose at the showcase and pay first; café seats are first come; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区東洞院通三条下ル三文字町201 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (news to September 2026) and Tabelog listing; reviews dated through October 2026; Sweets WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.008409, 135.760963); cross-checked: GSI 京都府京都市中京区三文字町201番地 (lot) 50m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [CAKES, R + 'B536741842/', R + 'B537556394/', R + 'B536481562/'],
    price_note: 'Official cake list (undated); the site adds that eat-in is taxed at 10%. Reviews: shortcake ¥1,450 plus tax (October 2026), ¥1,595 eaten in (September 2026).', last_checked: TODAY, items: [
      it('苺のプレミアムショートケーキ', '', 'Premium strawberry shortcake', '¥1,430', 'Cakes', 'no', 'no', 'Official list; ¥1,595 eaten in, September 2026.', 'premium_shortcake'),
      it('苺のミルフィーユ', '', 'Strawberry mille-feuille', '¥1,078', 'Cakes', 'no', 'no', 'Two per person.', 'mille_feuille'),
      it('苺のタルト', '', 'Strawberry tart', '¥1,430', 'Cakes', 'no', 'no', '', 'strawberry_tart'),
      it('苺とルバーブのフロマージュタルト', '', 'Strawberry and rhubarb cheese tart', '¥902', 'Cakes', 'no', 'no', '', 'rhubarb_cheese_tart'),
      it('苺のチーズケーキ', '', 'Strawberry cheesecake', '¥880', 'Cakes', 'no', 'no', '', 'strawberry_cheesecake'),
      it('苺のロールケーキ', '', 'Strawberry roll cake', '¥702', 'Cakes', 'no', 'no', '', 'roll_cake'),
      it('紅茶とベリーのムース', '', 'Tea and berry mousse', '¥858', 'Cakes', 'ask', 'no', '', 'tea_berry_mousse'),
      it('苺のプリン', '', 'Strawberry pudding', '¥418', 'Cakes', 'ask', 'no', 'Not available in September 2026.', 'strawberry_pudding'),
      it('', '', 'Iced café latte', '¥990', 'Drinks', '', '', 'September 2026.', 'iced_cafe_latte'),
    ] }, {
    cuisine: '苺のお菓子だけを作るパティスリーと小さなカフェ。全国の農家から届く完熟の苺で、品種は日ごとに替わる (公式サイト)・苺のプレミアムショートケーキ: 公式の一覧では1,430円、2026年10月は1,450円+税、2026年9月の店内飲食で1,595円・苺のミルフィーユ1,078円 (お一人様2個まで)、リボンを小さなはさみで切って食べる・苺のタルト1,430円・苺とルバーブのフロマージュタルト902円・苺のチーズケーキ880円・苺のロールケーキ702円・紅茶とベリーのムース858円・苺のプリン418円 (公式サイト、価格の日付なし)・苺のトライフル380円+税 (2026年10月)・苺のフィナンシェ、フランボワーズのマシュマロ、フランボワーズとピスタチオのマドレーヌ・ワイルドベリーティー880円、アイスカフェラテ990円 (2026年9月)',
    neighborhood: '三条の南の東洞院通。烏丸御池駅から徒歩3分',
    gf_detail: '実際にはグルテンフリーではない。ショートケーキ、ミルフィーユ、タルト、ロールケーキ、フィナンシェ、マドレーヌが中心で、グルテンフリーの品は載っていない (公式サイト、2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。ケーキは生クリーム、卵、バター、チーズが基本 (ショートケーキ、プリン、チーズケーキ、ムース) (公式サイト、2026年の口コミ)。',
    notes: '[苺のお菓子・烏丸御池、苺だけのパティスリー] 三条の近く、白と茶の小さな店で、ケーキはすべて苺のケーキ。創業者の渡部美佳 (Mika Watabe) は服飾の企画デザインの仕事をしていた頃、友人に紹介された苺のおいしさに感動し、その農家を訪ねたことから2003年に最初の店を開いた。今は全国の農家から完熟の苺が直送され、品種は日ごとに替わる。プレミアムショートケーキ (約1,450〜1,595円) は中にも上にも苺、ミルフィーユはリボンを小さなはさみで切って食べる。カフェは9席で予約不可、毎日11時〜17時。口コミのとおり値段は高め。',
  });
}

// ================================================================ The Common One Bar Kyoto
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26016560/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://k-stage.jp/the_common_one_bar.html'; const CO = 'https://k-stage.jp/company.html';
  const H = day(['18:00', '02:00']);
  put({
    id: 'kyoto_common_one_bar', name: 'ザ・コモン・ワン・バー・キョウト (The Common One Bar Kyoto)', category: 'OMNI',
    lat: 35.006069, lng: 135.773305, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A cocktail and whisky bar; beer-based drinks such as the Red Eye contain gluten, and no gluten information is published (official site; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Cocktails are made with fresh seasonal fruit; there is a snack selection with no vegan information (official site; 2026 reviews).',
    hours_raw: '18:00–02:00 every day, last order 01:30 (official site; Tabelog). Cover charge ¥1,100 per person; the private rooms are by reservation at ¥1,700 per person (official site). Reservations taken (Tabelog). 25 seats: a counter, sofas and tatami private rooms for 4 and 6; smoking allowed; JCB, AMEX and Diners cards, no e-money or QR payments (Tabelog). Opened 23 August 2010 (Tabelog). About 5 min walk from Gion-Shijo or Sanjo Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion Shinbashi by the Shirakawa, off Yamatooji — 5 min walk from Gion-Shijo Stn',
    cuisine: 'Cocktail and whisky bar in a renovated Gion machiya with a garden behind the counter (official site; 2026 reviews) · cocktails with seasonal fresh fruit, e.g. plum, kiwi (July 2026) · classics: Martini with Tanqueray and Noilly Prat, Rob Roy with The Balvenie 12, gin and tonic, Jack Rose, mojito, piña colada, Red Eye with Heartland beer, Bull-Dog · single malts as highballs or shots (Glen Moray, GlenDronach, Ardbeg, Glenmorangie), Calvados soda, vermouth · flavoured vodkas · non-alcoholic cocktails and lower-strength drinks on request (2026 reviews) · two drinks and the cover came to ¥4,700 (May 2026)',
    website: SITE, gmaps: gm('The Common One Bar Kyoto 祇園'), menu_url: null,
    notes: '[Bar · Gion Shinbashi, a hidden machiya cocktail bar] Off a stone-paved Gion lane by the Shirakawa, a dark gate you might not take for an entrance leads down a lit stone path to a century-old townhouse: tatami private rooms along the corridor, then a high-ceilinged room with a one-slab counter facing a glowing back bar and an illuminated garden. Seasonal fresh-fruit cocktails and well-made classics (Martini, Rob Roy), plenty of single malt, and non-alcoholic or lighter drinks on request. Cover ¥1,100; two drinks with cover ¥4,700 in May 2026. Open nightly 18:00–02:00. A sister bar of Gion\'s FINLANDIA BAR.',
    chef_bio: { chef_name: null, roles: ['Run by 株式会社ケイ・ステージ (K-stage), representative 世古昌弘 (official company page); a July 2026 review calls it one of five establishments run by bartender Seko'], origin: null,
      background: 'Per the official company page: K-stage took over ぎをん FINLANDIA BAR (opened 1982 as the sister of a Finnish restaurant, FINLANDIA, from 1976) in 2002; in August 2010 it opened 何生館, a base for Japanese culture in a Gion Shinbashi townhouse more than 100 years old that belonged to a relative of one of the managers, and The Common One Bar Kyoto inside it. Sister venues: The Northern Lights Corner on Kayukoji (2013), Turquoise Bar at Kiyamachi Shijo (2016 as TurQuois Bar 2), and CLASSIC TEA & COCKTAILS ぎをん新橋 何生庵 in the same building (2021). A related company, アルコ・ノルディック株式会社 (2023), imports a Finnish vodka (コスケンコルヴァ). Tabelog Bar "Tabelog 100" 2022.',
      philosophy: null, specialty: 'Seasonal fresh-fruit cocktails; classic cocktails; single malt.',
      anecdotes: [
        { text: '"You enter through a dark gate that you might not even realize is the entrance, and as you follow the lights on the stone path, you arrive at a bar that feels like a grand residence." — May 2026.', source: R + 'B527595608/' },
        { text: 'A February 2026 group booked a private tatami room; the bar prepared non-alcoholic cocktails for the members who do not drink.', source: R + 'B517133430/' },
        { text: 'A July 2026 reviewer, celebrating an 80th birthday in a tatami room, watched the 80-year-old and a 79-year-old enjoy shots.', source: R + 'B517133430/' },
        { text: 'A June 2026 regular notes there was a period when the customers were mostly visitors from abroad, and that the crowd has recently become more mixed.', source: R + 'B402928084/' },
      ],
      japanese_sources_summary: '公式サイト (k-stage.jp): ザ・コモン・ワン・バー・キョウト、白川の石畳から路地を入った別世界、一枚板のカウンター、季節のフルーツのカクテル、ウイスキー、ワイン、チャージ1,100円、個室は予約制で1,700円、18:00〜02:00 (L.o. 01:30)、東山区新橋通大和大路東入元吉町46番地 何生館内。会社概要: 株式会社ケイ・ステージ、代表者 世古昌弘、2002年 ぎをん FINLANDIA BAR の経営権を引き継ぐ、2010年8月 祇園白川に築百年以上の町屋を改装した何生館を開館し同時にバーを開業、2013年 The Northern Lights Corner、2016年 TurQuois Bar 2 (のち Turquoise Bar)、2021年 何生庵、2023年 アルコ・ノルディック設立 (コスケンコルヴァ・ウォッカの輸入)。食べログ: バー、25席、個室 (4人・6人)、喫煙可、カード (JCB・AMEX・Diners)、2010年8月23日オープン、ぎをん FINLANDIA BAR の姉妹店、バー百名店 2022。口コミ (2026年、英語): 季節のフルーツのカクテル、マティーニ、ロブロイ、シングルモルト、ノンアルコールのカクテル、2杯とチャージで4,700円 (2026年5月)。',
      confidence: 'medium', sources: [TB, SITE, CO, R + 'B402928084/', R + 'B517133430/', R + 'B527318533/', R + 'B527595608/', R + 'B528273201/', R + 'B530654284/', R + 'B531350386/', R + 'B531567967/', R + 'B532312634/', R + 'B536434291/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Walk in through the gate and down the path; a staff member may come out to greet you (June 2026); cover charge; smoking allowed; cards (JCB, AMEX, Diners).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区新橋通大和大路東入元吉町46 何生館内',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (K-stage, © 2025) and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.006069, 135.773305); cross-checked: GSI 京都府京都市東山区元吉町46番地 (lot) 45m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [SITE, R + 'B527595608/'],
    price_note: 'Charges from the official site; no drinks price list read; the May 2026 bill is from a review.', last_checked: TODAY, items: [
      it('チャージ', '', 'Cover charge, per person', '¥1,100', 'Charges', '', '', 'Official site.', 'cover_charge'),
      it('個室', '', 'Private room, per person (by reservation)', '¥1,700', 'Charges', '', '', 'Official site.', 'private_room'),
      it('', '', 'Two cocktails (Martini, Rob Roy) with cover', '¥4,700', 'Drinks', '', '', 'May 2026, tax included.', 'two_drinks_with_cover'),
    ] }, {
    cuisine: '祇園の町家を改装したカクテルとウイスキーのバー。カウンターの奥に庭 (公式サイト、2026年の口コミ)・季節の生のフルーツのカクテル、たとえば梅、キウイ (2026年7月)・クラシック: Tanqueray と Noilly Prat のマティーニ、The Balvenie 12年のロブロイ、ジントニック、ジャックローズ、モヒート、ピニャコラーダ、ハートランドのレッドアイ、ブルドッグ・シングルモルトをハイボールやショットで (Glen Moray、GlenDronach、Ardbeg、Glenmorangie)、カルヴァドスソーダ、ベルモット・フレーバーウォッカ・頼めばノンアルコールのカクテルや弱めの一杯も (2026年の口コミ)・2杯とチャージで4,700円 (2026年5月)',
    neighborhood: '白川沿いの祇園新橋、大和大路の東。祇園四条駅から徒歩5分',
    gf_detail: '要確認。カクテルとウイスキーのバーで、レッドアイなどビールを使う飲み物はグルテンを含む。グルテンの情報は公開されていない (公式サイト、2026年の口コミ)。',
    vegan_detail: '要確認。カクテルは季節の生のフルーツで作る。つまみもあるがヴィーガンの情報はない (公式サイト、2026年の口コミ)。',
    notes: '[バー・祇園新橋、隠れ家の町家カクテルバー] 白川近くの祇園の石畳の路地、入口とは気づきにくい暗い門をくぐり、灯りのともる石の小道を進むと築百年を超える町家。廊下沿いに畳の個室、奥は天井の高い部屋で、一枚板のカウンターが輝くバックバーと照らされた小さな庭に向く。季節の生のフルーツのカクテルと丁寧なクラシック (マティーニ、ロブロイ)、シングルモルトも豊富で、ノンアルコールや弱めの一杯も頼める。チャージ1,100円、2026年5月は2杯とチャージで4,700円。毎晩18時〜翌2時。祇園の FINLANDIA BAR の姉妹店。',
  });
}

save();
