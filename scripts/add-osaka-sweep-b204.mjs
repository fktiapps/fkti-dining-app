// Osaka sweep (2-mile circle around Dotonbori), batch 204 — mom-and-pop phase (≤20 seats, 30+ reviews), nearest-first past ~1 km.
//   - 上等カレーBR 日本橋店 Jotou Curry BR Nipponbashi ten — skipped: chain (Jotou Curry, 38 shops, run by Tokusho Co.)
//   + ハワイアン食堂 HALE Hawaiian Shokudo HALE (custom poke bowls since 2019; Hakuromachi)
//   + 廣井堂 Hiroi Do (wagashi shop founded 1877, run by a married couple; Shinmachi)
//   + ミリアバーガー milia burger (build-your-own burgers since 2016; same building as Hiroi Do)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-30';
const { put, skip, save } = openCitySweep('osaka', TODAY, 204);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 上等カレーBR 日本橋店 (skip)
skip('27074306', '上等カレーBR 日本橋店 (Jotou Curry BR Nipponbashi ten): chain branch — Jotou Curry is a 38-shop chain run by 得正株式会社 (honichi.com curry-chain report, June 2025: "上等カレー（得正株式会社）：38店舗"); a March 2026 Tabelog review (B526256126) says "This is a chain restaurant called \'Jotou Curry\'"; a second branch, 上等カレー 大阪なんば店, is also in shops.jsonl');

// ================================================================ ハワイアン食堂 HALE
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27113190/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://hawaiisukiyane.com/menu/%e3%83%8f%e3%83%af%e3%82%a4%e3%82%a2%e3%83%b3%e9%a3%9f%e5%a0%82hale/';
  const MENU = 'https://hawaiisukiyane.com/menu/%E3%83%8F%E3%83%AF%E3%82%A4%E3%82%A2%E3%83%B3%E9%A3%9F%E5%A0%82hale%E3%83%A1%E3%83%8B%E3%83%A5%E3%83%BC/';
  const CO = 'https://hawaiisukiyane.com/%e4%bc%9a%e7%a4%be%e6%a6%82%e8%a6%81/';
  const WD = day(['11:00', '19:00']); const SA = day(['11:00', '16:00']);
  put({
    id: 'osaka_hawaiian_shokudo_hale_hakuromachi', name: 'ハワイアン食堂 HALE (Hawaiian Shokudo HALE)', category: 'OMNI',
    lat: 34.678307, lng: 135.507126, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the poke bowls can sit on rice or salad, but the house sauce is soy-based (soy sauce, sesame oil, garlic oil) and the menu has fried calamari, salmon and cheese, so ask about the sauces and the fryer.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A poke bowl can be built on a salad base with vegetable sides (avocado, edamame, tomato, seaweed), but every main reported is fish or meat and the salads come with miso soup; ask whether a plant-based main and sauce are possible.',
    hours_raw: 'Weekdays 11:00–19:00 (last order 18:30); Saturday and holidays 11:00–16:00 (last order 15:30); closed Sunday (shop site). Tabelog lists Mon–Fri 11:00–18:30 and Sat 11:00–15:30. No reservations (Tabelog); a March 2026 diner found it full at weekday lunch. Cards (VISA, Master, JCB, AMEX, Diners), transit IC cards, iD, QUICPay, PayPay; no service charge (Tabelog). 20 seats per Tabelog (listed as 13 inside and 10 on the terrace); non-smoking; dogs allowed on the terrace; children and strollers welcome; English menu (Tabelog). Takeout, delivery (Uber Eats) and smartphone pre-order (shop site). Opened 2 September 2019 (Tabelog). Run by Hawaiisukiyane Co., which also runs the 3POKE OSAKA, SUNNY ISLAND SURF and Hawaiian 8 Market shops (company site).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Hakuromachi 1-8-12 — 5 min walk from Sakaisuji-Hommachi and Nagahoribashi Stns',
    cuisine: 'Hawaiian diner and café built around custom poke bowls (20 seats incl. terrace) · tick an order sheet: one base (multigrain rice, salad greens, or half and half), two mains, four sides, one sauce, one topping; extras cost more · e.g. tuna and salmon, salmon and roast beef; avocado, tomato, tobiko, edamame, egg yolk; house sauce of soy sauce, sesame oil and garlic oil · Original poke bowl ¥1,150, Classic poke bowl ¥1,100, loco moco ¥1,170, mochiko chicken plate ¥1,080, garlic shrimp plate ¥1,400, açaí bowl ¥1,550, ahi poke ¥870 (shop menu) · fried calamari, salmon fry, cheese fry, nachos · customizable salads with miso soup · Kona coffee ¥820, guava and pineapple juice, Kona and Budweiser bottled beer · a seasonal poke each month',
    website: 'https://hawaiisukiyane.com/', gmaps: gm('ハワイアン食堂 HALE 博労町'), menu_url: MENU,
    notes: "[Hawaiian · Hakuromachi, build-your-own poke bowls] A bright, wood-toned Hawaiian café between Sakaisuji-Hommachi and Nagahoribashi that has served custom poke bowls since 2019 and bills itself as the first in Osaka to do so. You tick an order sheet: a base of multigrain rice, salad or half and half, two mains such as tuna, salmon or tender roast beef, four sides like avocado, tobiko, edamame and egg yolk, then a sauce; extras push the bill up (one diner reached ¥1,350 in April 2025 and remembers when it was under ¥1,000). Beyond poke there is loco moco, garlic shrimp tender enough to eat shells and all, crisp mochiko chicken and a fruit-heavy açaí bowl, plus a terrace where dogs are welcome. Seating is limited, so weekday lunch can fill up; no reservations.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Hawaiian diner that opened on 2 September 2019 (Tabelog), billed by the shop as Osaka\'s first custom poke bowl specialist (Tabelog, shop-provided). Run by Hawaiisukiyane Co. (ハワイ好きやね株式会社, founded January 2025), which also runs two 3POKE OSAKA shops, SUNNY ISLAND SURF and Hawaiian 8 Market; the company site calls HALE "ここが、はじまりのポキ。" (company site, read October 2026).', philosophy: 'Choose-your-own poke with more than 10,000 combinations and a new seasonal poke each month (Tabelog, shop-provided).', specialty: 'Custom poke bowls; garlic shrimp; mochiko chicken; açaí bowl.',
      anecdotes: [
        { text: '"The garlic shrimp was so tender that you could eat the shells, and the garlic flavor was strong, making it a great accompaniment to rice." — March 2026, Original Poke Bowl, Garlic Shrimp Plate, Mochiko Chicken and fries.', source: R + 'B526294202/' },
        { text: '"The Poké Bowl with additional ingredients costs JPY 1350. It used to be under JPY 1000 not long ago." — April 2025.', source: R + 'B505485073/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ハワイアン食堂 HALE、大阪市中央区博労町1-8-12 エスライズ堺筋本町、長堀橋駅・堺筋本町駅から徒歩5分、予約不可、カード・交通系IC・iD・QUICPay・PayPay可、サービス料なし、20席 (店内13、テラス10)、禁煙、テラスは犬可、子供可、英語メニュー、テイクアウト・デリバリー、オープン日2019年9月2日、大阪初のカスタムポキ専門店、1万通り以上、毎月の季節限定ポキ。公式サイト: ハワイアン食堂HALE (ハワイアンショクドウハレ)、平日11:00〜19:00 (L.O 18:30)、土曜・祝日11:00〜16:00 (L.O 15:30)、日曜定休、Uber Eats とスマホの事前注文、メニュー: オリジナルポキボウル1150円、クラシックポキボウル1100円、ロコモコ1170円、もちこチキンプレート1080円、ガーリックシュリンププレート1400円、アサイーボウル1550円、アヒポキ870円、KONAコーヒー820円。運営はハワイ好きやね株式会社 (2025年1月設立、3POKEOSAKA、SUNNYISLANDSURF、Hawaiian８Market も)。口コミ(2025年4月〜2026年6月): 注文シートで選ぶ、ベース1・メイン2・サイド4・ソース1・トッピング1、追加は別料金、雑穀米、サラダ、ハーフ、まぐろ、サーモン、ローストビーフ、アボカド、トマト、とびこ、卵黄、枝豆、醤油・ごま油・ガーリックオイルのソース、殻ごと食べられるガーリックシュリンプ、もちこチキン、ロコモコ、サラダに味噌汁、平日の昼は満席のことも、席は少なめ。',
      confidence: 'medium', sources: [TB, SITE, MENU, CO, R + 'B504291734/', R + 'B505485073/', R + 'B521214354/', R + 'B526294202/', R + 'B526840987/', R + 'B529326359/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu per Tabelog; order by ticking a sheet; no reservations (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区博労町1-8-12 エスライズ堺筋本町',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing current; shop site menu current; reviews dated April 2025–June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区博労町一丁目8番12号 (go) 19m; OSM node/8574992019 「Hale Hawaiian Restaurant」 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, R + 'B521214354/', R + 'B526294202/'],
    price_note: 'Prices from the shop site menu, read October 2026 (tax included).', last_checked: TODAY, items: [
      it('オリジナルポキボウル', '', 'Original poke bowl (build your own)', '¥1,150', 'Poke', 'ask', 'ask', 'Shop menu; extras cost more.', 'poke_original'),
      it('クラシックポキボウル', '', 'Classic poke bowl', '¥1,100', 'Poke', 'ask', 'no', 'Shop menu.', 'poke_classic'),
      it('ロコモコ', '', 'Loco moco', '¥1,170', 'Plates', 'ask', 'no', 'Shop menu.', 'locomoco'),
      it('ガーリックシュリンププレート', '', 'Garlic shrimp plate', '¥1,400', 'Plates', 'ask', 'no', 'Shop menu.', 'garlicshrimp'),
      it('もちこチキン', '', 'Mochiko chicken', '¥860', 'Plates', 'ask', 'no', 'Shop menu; plate ¥1,080.', 'mochiko'),
      it('アサイーボウル', '', 'Açaí bowl', '¥1,550', 'Sweets', 'ask', 'ask', 'Shop menu; with granola and coconut (January 2026).', 'acai'),
    ] }, {
    cuisine: 'カスタムのポキボウルが中心のハワイアン食堂とカフェ (テラス含め20席)・注文シートで選ぶ: ベース1 (雑穀米、サラダ、ハーフ)、メイン2、サイド4、ソース1、トッピング1、追加は別料金・例: まぐろとサーモン、サーモンとローストビーフ、アボカド、トマト、とびこ、枝豆、卵黄、醤油・ごま油・ガーリックオイルのソース・オリジナルポキボウル1150円、クラシックポキボウル1100円、ロコモコ1170円、もちこチキンプレート1080円、ガーリックシュリンププレート1400円、アサイーボウル1550円、アヒポキ870円 (店のメニュー)・カラマリフライ、サーモンフライ、チーズフライ、ナチョス・選べるサラダに味噌汁・KONAコーヒー820円、グアバとパインのジュース、KONAとバドワイザーの瓶ビール・毎月の季節限定ポキ',
    neighborhood: '博労町1-8-12 エスライズ堺筋本町。堺筋本町駅・長堀橋駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。ポキボウルはごはんかサラダを選べるが、ソースは醤油ベース (醤油、ごま油、ガーリックオイル) で、カラマリやサーモン、チーズのフライもあるので、ソースと揚げ油について確認を。',
    vegan_detail: '要確認。サラダのベースと野菜のサイド (アボカド、枝豆、トマト、海藻) で作れるが、口コミのメインはどれも魚か肉で、サラダには味噌汁がつく。植物性のメインとソースができるか確認を。',
    notes: '[ハワイアン・博労町、自分で選ぶポキボウル] 堺筋本町と長堀橋のあいだにある、木を基調にした明るいハワイアンカフェ。2019年からカスタムのポキボウルを出し、大阪初をうたう。注文シートにチェックして、雑穀米かサラダかハーフのベース、まぐろ、サーモン、やわらかいローストビーフなどのメイン2つ、アボカド、とびこ、枝豆、卵黄などのサイド4つ、ソースを選ぶ。追加すると高くなり、2025年4月に1350円になった人は、少し前まで1000円以下だったと振り返る。ポキのほかにロコモコ、殻ごと食べられるほどやわらかいガーリックシュリンプ、カリッとしたもちこチキン、フルーツたっぷりのアサイーボウルも。テラスは犬も歓迎。席が少ないので平日の昼は満席のことも。予約はできない。',
  });
}

// ================================================================ 廣井堂
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27012449/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.osaka-hiroido.com/';
  const CAT = 'https://www.osaka-hiroido.com/%E3%82%AB%E3%82%BF%E3%83%AD%E3%82%B0';
  const KURI = 'https://www.osaka-hiroido.com/%E6%A0%97%E3%82%80%E3%81%97%E7%BE%8A%E7%BE%B9%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6';
  const H = day(['09:00', '18:00']);
  put({
    id: 'osaka_wagashi_hiroido_shinmachi', name: '廣井堂 (Hiroi Do)', category: 'MOM_AND_POP',
    lat: 34.677648, lng: 135.494603, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; many sweets are rice-based (daifuku, mochi, dango), but fu manju is made with wheat gluten, the baked sweets, pies and dorayaki are wheat-based, and the chestnut steamed yokan recipe is not stated. Ask about each sweet.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Much of the range is bean paste, rice and agar, but some sweets use egg-yolk bean paste, condensed milk, cream cheese, honey or butter and cream; ask about each sweet.',
    hours_raw: 'Tue–Sat 9:00–18:00; closed Sunday, Monday and holidays, plus some irregular days; hours can shift on event days (Tabelog; shop site). Mainly takeout with 2 seats; non-smoking (Tabelog). Reservations taken by phone even for a single sweet; fresh sweets (namagashi) are sold by reservation (Tabelog; shop catalog). Payment: Tabelog lists QR only, no cards; the shop site lists cash, PayPay, Osaka premium vouchers and VISA, Mastercard, JCB, AMEX. Chestnut steamed yokan (栗むし羊羹) is seasonal: in 2026 from 21 September to late December, handed over from about 11:00, reservation only, no same-day sales, chilled shipping available (shop site). Founded in Meiji 10 (1877) (shop site).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi 1-17-8, 1F (same building as milia burger) — 258 m from Nishi-Ohashi Stn; about 15 min on foot from Shinsaibashi Stn',
    cuisine: 'Wagashi (Japanese sweets) shop founded 1877, mostly takeout (2 seats) · signature: chestnut steamed yokan of hand-peeled, house-candied domestic chestnuts in Hokkaido azuki koshian, autumn only — half ¥3,000, whole ¥5,900 (2026) · monaka with filling and shell made fresh: 夕霧もなか (Yūgiri monaka, tsubuan) ¥200, bear-shaped honey cream cheese monaka ¥300 · fresh sweets from ¥220 in season: daifuku, sakura mochi, kashiwa mochi, tsukimi dango wrapped Osaka-style around bean paste, pumpkin steamed manju, yuzu manju · summer chilled sweets: 笑わず餅 (Warawazu mochi), fu manju, matcha azuki, fruit kanten with watermelon and melon, mizu manju · baked sweets, chestnut manju, wakaayu, seasonal pies, senbei · dorayaki with fresh cream, butter and a choice of smooth or chunky bean paste (June 2026 review) · sekihan on the 1st and 15th',
    website: SITE, gmaps: gm('廣井堂 新町'), menu_url: CAT,
    notes: "[Wagashi · Shinmachi, a 150-year-old sweets shop run by a couple] A small Japanese-sweets shop founded in 1877 in Shinmachi, a former geisha district; the shop's sign survived the wartime fires and the shop was revived after the war. Today a married couple makes and sells everything, which is why the famous autumn chestnut steamed yokan (hand-peeled chestnuts, Hokkaido bean paste, ¥3,000 for a half) is reservation-only and gone by late December. Year-round there is Yūgiri monaka with the shell kept crisp until you buy it and a bear-shaped honey cream cheese monaka; in summer Warawazu mochi (somewhere between water yokan and mochi), bouncy mizu manju, fu manju and a fruit kanten where the watermelon is still crunchy; in September Osaka-style moon-viewing dango. One diner calls the cream-and-butter dorayaki the best ever. In August 2026 a diner waited behind a couple of customers. Closed Sunday and Monday.",
    chef_bio: { chef_name: '小澤康雄・小澤ゆう子', roles: ['Owners (a married couple), who make and sell the sweets'], origin: null, background: 'The shop was founded in Meiji 10 (1877) in Shinmachi, once a hanamachi; the signboard escaped the wartime fires and, "like a baton passed to the third generation", let 御菓子司 廣井堂 be revived after the war. It is now run by the married couple 小澤康雄 and 小澤ゆう子, and the couple make and sell everything (shop site, read October 2026: "小澤康雄・小澤ゆう子 夫婦にて"; the chestnut yokan page says the two make and sell everything, so mass production is hard).', philosophy: 'A small shop aiming for taste and service that please each customer; a writer once described it as "変わりゆく町の変わらない味" (the unchanging taste of a changing town) (shop site).', specialty: 'Chestnut steamed yokan; Yūgiri monaka; honey cream cheese monaka; Warawazu mochi.',
      anecdotes: [
        { text: '"The firm texture of the monaka shell, which isn\'t soggy, pairs beautifully with the refined sweetness of the filling… The owner\'s service was exceptional." — August 2025, Yūgiri Monaka to take away.', source: R + 'B511069770/' },
        { text: '"The watermelon is crunchy, and the other fruits don\'t feel mushy at all; you can really tell they were just peeled!" — September 2025, fruit kanten.', source: R + 'B513547351/' },
      ],
      japanese_sources_summary: '公式サイト: 御菓子屋 廣井堂、明治十年創業、かつて花街だった新町、店の上の看板が戦火を逃れ、戦後「御菓子司 廣井堂」を再生、小澤康雄・小澤ゆう子 夫婦、ふたりで製造販売、「変わりゆく町の変わらない味」、大阪府大阪市西区新町1丁目17-8 ハイネス新町公園1F、火曜日〜土曜日9時〜18時。栗むし羊羹: 国産大栗を自家製で皮むきから炊いて蜜漬け、北海道産小豆こし餡、2026年は9月21日から12月後半まで、11時ごろから渡す、予約は電話か店頭、当日販売なし、冷蔵4日、半本3000円 (箱入り3250円)、一本5900円 (箱入り6200円)、現金・PayPay・プレミアム商品券・カード可、クール便で発送。カタログ: 生菓子220円から (一つから予約で)、大福餅、花びら餅、うぐいす餅、いちご大福、さくら餅、草もち、かしわ餅、ちまき、月見だんご、かぼちゃのむしまんじゅう、柚子まんじゅう、焼き菓子 (季の彩菓、梅の香、菊からくさ、栗まんじゅう、いも黄金、若鮎)、パイ、五色煎餅、格子煎餅、冷菓 (笑わず餅、麩まんじゅう、抹茶小豆、ふるーつ寒天、水まんじゅう)、棹菓子 (しんまち、栗羊羹、柿羊羹、柚子羊羹)、夕霧もなか200円、はちみつクリームチーズもなか300円、赤飯は毎月1日・15日、6月16日の和菓子の日に感謝祭。食べログ: 火〜土9:00〜18:00、日曜・月曜・祝日休み、不定休あり、一つから予約可、カード・電子マネー不可、QR可、2席、禁煙、テイクアウト。口コミ(2025年8月〜2026年10月): 皮がしけない夕霧もなか、店主の接客、スイカがシャキッとしたフルーツ寒天、笑わず餅、抹茶小豆、水まんじゅう、生クリームとバターの dorayaki、クマの形のはちみつクリームチーズもなか、麩まんじゅう、若鮎、大阪式の月見だんご、数人待ち。',
      confidence: 'medium', sources: [TB, SITE, CAT, KURI, R + 'B511069770/', R + 'B513547351/', R + 'B529359213/', R + 'B530118205/', R + 'B530216265/', R + 'B533596123/', R + 'B536330824/', R + 'B538084897/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Takeout counter; reserve the chestnut yokan and fresh sweets by phone (2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_approx: 'block', address_ja: '大阪府大阪市西区新町1-17-8 ハイネス新町公園 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; shop site posted news in October 2026; reviews dated August 2025–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目17番8号 (go) 9m; OSM node/6699750785 「廣井堂」 1m. Same building and floor as ミリアバーガー (osaka_milia_burger_shinmachi; both shop sites give 新町1-17-8 ハイネス新町公園 1F), whose Tabelog point is about 12 m away, so the pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [CAT, KURI],
    price_note: 'Prices from the shop site (2026 chestnut yokan page; catalog).', last_checked: TODAY, items: [
      it('栗むし羊羹（半本）', '', 'Chestnut steamed yokan, half (autumn, reservation only)', '¥3,000', 'Seasonal', 'ask', 'ask', 'Shop site, 2026; ¥3,250 boxed; whole ¥5,900.', 'kurimushi'),
      it('夕霧もなか', 'Yūgiri monaka', 'Yūgiri monaka (tsubuan)', '¥200', 'Monaka', 'ask', 'ask', 'Shop catalog.', 'yugiri'),
      it('はちみつクリームチーズもなか', '', 'Honey cream cheese monaka', '¥300', 'Monaka', 'ask', 'no', 'Shop catalog.', 'honeycheese'),
      it('笑わず餅', 'Warawazu mochi', 'Warawazu mochi (summer)', '', 'Chilled sweets', 'ask', 'ask', 'Shop catalog; June and August 2026 reviews.', 'warawazu'),
      it('麩まんじゅう', '', 'Fu manju (wheat-gluten dumpling, summer)', '', 'Chilled sweets', 'no', 'ask', 'Shop catalog; August 2026 review.', 'fumanju'),
      it('', '', 'Dorayaki with fresh cream and butter', '', 'Sweets', 'no', 'no', 'June 2026 review.', 'dorayaki'),
    ] }, {
    cuisine: '1877年創業の和菓子屋、ほぼ持ち帰り (2席)・看板は秋だけの栗むし羊羹、国産大栗を自家製で皮むきから炊いて蜜漬けし北海道産小豆のこし餡で、半本3000円、一本5900円 (2026年)・あんと皮を作り立てで売る最中: 夕霧もなか (粒餡) 200円、クマの形のはちみつクリームチーズもなか300円・季節の生菓子220円から: 大福餅、さくら餅、かしわ餅、あんを包んだ大阪風の月見だんご、かぼちゃのむしまんじゅう、柚子まんじゅう・夏の冷菓: 笑わず餅、麩まんじゅう、抹茶小豆、スイカとメロンのふるーつ寒天、水まんじゅう・焼き菓子、栗まんじゅう、若鮎、季節のパイ、煎餅・生クリームとバター入りで、こしあんか粒あんを選べる dorayaki (2026年6月の口コミ)・毎月1日と15日は赤飯',
    neighborhood: '新町1-17-8 ハイネス新町公園 1F (ミリアバーガーと同じ建物)。西大橋駅から258m、心斎橋駅から歩いて15分ほど',
    gf_detail: '要確認。グルテンの情報なし。大福や餅、だんごなど米の菓子が多いが、麩まんじゅうは麩を使い、焼き菓子やパイ、dorayaki は小麦の生地。栗むし羊羹の材料は書かれていない。一つずつ確認を。',
    vegan_detail: '要確認。あん、米、寒天の菓子が多いが、黄味あん、練乳、クリームチーズ、はちみつ、バターと生クリームを使うものもある。一つずつ確認を。',
    notes: '[和菓子・新町、夫婦で営む150年近い菓子屋] かつて花街だった新町で1877年に創業した小さな和菓子屋。店の看板は戦火を逃れ、店は戦後に再生した。今は夫婦ふたりですべて作って売るので、名物の秋の栗むし羊羹 (手で皮をむいた栗と北海道の小豆のあん、半本3000円) は予約のみで、12月後半には終わる。一年中あるのは、買うときまで皮がしけない夕霧もなかと、クマの形のはちみつクリームチーズもなか。夏は水ようかんと餅のあいだのような笑わず餅、ぷるんとした水まんじゅう、麩まんじゅう、スイカがシャキッとしたふるーつ寒天。9月は大阪風の月見だんご。生クリームとバターの dorayaki を今までで一番という人も。2026年8月には数人待ちだったという声も。日曜と月曜は休み。',
  });
}

// ================================================================ ミリアバーガー
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27092782/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://miliaburger.com/';
  const TW = day(['11:00', '18:00']); const TS = day(['11:00', '21:00']); const SU = day(['11:00', '17:00']);
  put({
    id: 'osaka_milia_burger_shinmachi', name: 'ミリアバーガー (milia burger)', category: 'OMNI',
    lat: 34.677747, lng: 135.494656, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Any burger can swap the bun for lettuce (shop site), but the ten house-made sauces, teriyaki and the shared grill and fryer are not described; ask before ordering.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the three proteins are a beef patty, pork rib and chicken leg (shop site).',
    hours_raw: 'Tue–Wed 11:00–18:00; Thu–Sat 11:00–21:00; Sun and holidays 11:00–17:00; last order 30 minutes before closing; closed Monday (shop site; Tabelog). Reservations accepted; whole-shop hire possible (Tabelog). Dogs no longer allowed inside except for takeout (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), transit IC cards, iD, QUICPay, PayPay (Tabelog). 17 seats: counter, sofas and an open terrace; power outlets; non-smoking; children and strollers welcome; no parking (Tabelog; shop site). Takeout and Uber Eats. Drinks-only visits welcome; cocktails (Tabelog). Opened 16 June 2016 (Tabelog).',
    hours: { 1: TW, 2: TW, 3: TS, 4: TS, 5: TS, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi 1-17-8, 1F (same building as Hiroi Do) — 5 min walk from Yotsubashi and Nishi-Ohashi Stns',
    cuisine: 'Build-your-own burger shop (17 seats incl. terrace) · bun: brown, white or whole wheat, or lettuce instead of a bun · meat: beef patty, pork rib or chicken leg · ten house-made sauces · pick three vegetables (shop site) · set burgers: ABC Burger ¥1,668 (July 2026), Tex-Mex Burger with avocado, cheese, meat sauce and jalapeños ¥1,668 (May 2026), bacon cheeseburger ¥1,496 (February 2025), cheeseburger with salad and fries, teriyaki burger, truffle burger · coarse-ground patty with chunks, served rare · fries and drink set +¥590, thin black-pepper fries · buffalo wings ¥716 · nuggets, hot dogs · fresh lemon squash, cocktails',
    website: SITE, gmaps: gm('ミリアバーガー 新町'), menu_url: SITE,
    notes: "[Burgers · Shinmachi, choose every layer] A calm, café-like burger shop in the stylish Shinmachi area that opened in 2016 billing itself as Japan's first custom-burger specialist. Pick a brown, white or whole-wheat bun (or lettuce instead), a beef patty, pork rib or chicken leg, one of ten house-made sauces and three vegetables, or order a set burger like the Tex-Mex with avocado and jalapeños or the ABC. Diners single out the patty: coarse-ground with steak-like chunks, cooked rare and juicy enough to soak the bun. The owner explained the menu to one first-time diner in May 2026. One diner found it pricey for the size. Sofas and a terrace; open until 9 pm Thursday to Saturday, and fine for just a drink.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Custom-burger shop that opened on 16 June 2016, billed by the shop as Japan\'s first custom burger specialty shop (Tabelog, shop-provided). Diners mention the owner explaining the menu (May and July 2026 reviews).', philosophy: 'Build your own burger: 1.2 million combinations per the shop site (Tabelog\'s shop text says 13.5 million), all sauces made in-house (shop site).', specialty: 'Custom burgers; chunky rare-cooked patties.',
      anecdotes: [
        { text: '"Upon entering, the owner kindly explained the menu… the original Tex-Mex Burger for JPY 1,668… The meat sauce tied everything together beautifully, with a delightful kick from the jalapeños." — May 2026.', source: R + 'B526433404/' },
        { text: '"Inside the coarsely ground meat, there are tender chunks, providing a texture close to steak… The meat is cooked rare." — July 2026, ABC Burger ¥1,668.', source: R + 'B500369977/' },
      ],
      japanese_sources_summary: '公式サイト: milia burger (ミリアバーガー)、選んでつくる、120万通りのハンバーガーのお店、バンズはブラウン・ホワイト・全粒粉の3種類とバンズ無しのレタスも、お肉はビーフパティ・ポークリブ・チキンレッグ、ソースは全て自家製の10種類、野菜は3種類を選ぶ、大阪府大阪市西区新町1-17-8 ハイネス新町公園1階、火〜水11:00-18:00、木〜土11:00-21:00、日曜・祝日11:00-17:00、ラストオーダーは閉店30分前、月曜定休、駐車場なし、Uber Eats。食べログ (店舗会員): 予約可、貸切可、テイクアウト以外は犬不可に、四ツ橋駅・西大橋駅から徒歩5分、カード・交通系IC・iD・QUICPay・PayPay可、17席、カウンター・ソファ・テラス・電源、禁煙、子供可、カクテル、ドリンクだけでも、ポテト・ナゲット・ホットドッグ、オープン日2016年6月16日、日本初のカスタムバーガー専門店。口コミ(2025年2月〜2026年8月): ABCバーガー1,668円、Tex-Mex Burger 1,668円、ベーコンチーズバーガー1,496円、ポテトとドリンクのセット+590円、バッファローウイング716円、粗挽きでかたまりのある肉、レア、店主がメニューを説明、teriyaki burger、truffle burger、サラダとポテトつきのチーズバーガー、値段のわりに量が物足りないという声も。',
      confidence: 'medium', sources: [TB, SITE, R + 'B500369977/', R + 'B526433404/', R + 'B527841534/', R + 'B528348014/', R + 'B532002000/', R + 'B532880899/', R + 'B534374519/', R + 'B535894625/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Build-your-own order; the owner explained it to a first-timer; cards accepted (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市西区新町1-17-8 ハイネス新町公園 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing current; shop site hours current; reviews dated May–August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目17番8号 (go) 16m. Same building and floor as 廣井堂 (osaka_wagashi_hiroido_shinmachi; both shop sites give 新町1-17-8 ハイネス新町公園 1F), whose Tabelog point is about 12 m away, so the pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B500369977/', R + 'B526433404/'],
    price_note: 'Prices from reviews dated February 2025–July 2026.', last_checked: TODAY, items: [
      it('ABCバーガー', '', 'ABC Burger', '¥1,668', 'Burgers', 'ask', 'no', 'July 2026.', 'abc'),
      it('', '', 'Tex-Mex Burger (avocado, cheese, meat sauce, jalapeños)', '¥1,668', 'Burgers', 'ask', 'no', 'May 2026.', 'texmex'),
      it('', '', 'Bacon cheeseburger', '¥1,496', 'Burgers', 'ask', 'no', 'February 2025.', 'baconcheese'),
      it('', '', 'Custom burger (bun or lettuce, meat, sauce, three vegetables)', '', 'Burgers', 'ask', 'no', 'Shop site.', 'custom'),
      it('', '', 'Fries and drink set', '+¥590', 'Sides', 'ask', 'ask', 'May 2026.', 'set'),
      it('', '', 'Buffalo wings', '¥716', 'Sides', 'ask', 'no', 'July 2026.', 'wings'),
    ] }, {
    cuisine: '選んでつくるハンバーガーの店 (テラス含め17席)・バンズはブラウン、ホワイト、全粒粉、またはバンズ無しのレタス・肉はビーフパティ、ポークリブ、チキンレッグ・自家製ソース10種類・野菜を3種類選ぶ (公式サイト)・定番: ABCバーガー1668円 (2026年7月)、アボカド、チーズ、ミートソース、ハラペーニョの Tex-Mex Burger 1668円 (2026年5月)、ベーコンチーズバーガー1496円 (2025年2月)、サラダとポテトつきのチーズバーガー、teriyaki burger、truffle burger・粗挽きでかたまりのあるパティ、レアの焼き加減・ポテトとドリンクのセット+590円、黒こしょうの細いポテト・バッファローウイング716円・ナゲット、ホットドッグ・フレッシュレモンスカッシュ、カクテル',
    neighborhood: '新町1-17-8 ハイネス新町公園 1F (廣井堂と同じ建物)。四ツ橋駅・西大橋駅から徒歩5分',
    gf_detail: '要確認。どのバーガーもバンズをレタスに替えられる (公式サイト) が、自家製の10種類のソースや teriyaki、鉄板やフライヤーの共用については書かれていない。注文の前に確認を。',
    vegan_detail: 'ヴィーガンではありません。肉はビーフパティ、ポークリブ、チキンレッグの3種類 (公式サイト)。',
    notes: '[ハンバーガー・新町、すべての層を選ぶ] おしゃれな新町の、落ち着いたカフェのようなハンバーガーの店で、2016年に日本初のカスタムバーガー専門店として開店。ブラウン、ホワイト、全粒粉のバンズ (またはレタス)、ビーフパティ、ポークリブ、チキンレッグ、自家製のソース10種類、野菜3種類を選ぶか、アボカドとハラペーニョの Tex-Mex Burger や ABCバーガーなどの定番を頼む。口コミが挙げるのはパティで、粗挽きにステーキのようなかたまりが入り、レアに焼いて、バンズにしみるほど肉汁が出る。2026年5月の初めての人には店主がメニューを説明してくれた。量のわりに高いという声も。ソファとテラスがあり、木〜土は21時まで、ドリンクだけでも。',
  });
}

save();
