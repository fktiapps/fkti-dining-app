// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo clusters), circle `ningyocho` — lane osw11, batch 1 (core: ramen or ≤20 seats, 30+ reviews, nearest first).
//   + オイスタースタンド 人形町 Oyster Stand Ningyocho (12-seat oyster and wine stand, 4F of the Hashigo-ro dining building)
//   + 東京串カツ かっちゃん 人形町 Tokyo Kushikatsu Kacchan (20-seat bite-size kushikatsu, same floor, since December 2024)
//   + せき亭 Seki Tei (15-seat Aomori/Hachinohe seafood and obanzai izakaya; seafood-bowl lunches; moved here December 2019)
//   + めんのすけ Mennosuke (10-seat counter: garlic-salt "Gifu ramen" of pork, napa cabbage and cabbage; since March 2025)
//   Candidate source. The main repo's tokyo-gaps queue holds no `ningyocho` entries: lists-done.jsonl shows the list crawl of
//   A1302/A130204 and A130203 ended at page 1 with 0 pages (2026-10-30T22:16), so no shop pages exist for this circle. This
//   worker read Tabelog /en/ list pages 1–30 of A1302/A130204 (Ningyocho & Kodenmacho), then fetched the shop pages of the
//   nearest ~30 ("Ningyocho Sta. Nm") with scripts/sweep/lib.mjs parseShop/distOf, and applied queue.mjs's `core` test
//   (vegan/ramen/≤20 seats, ≥30 reviews), nearest first: Oyster Stand 22 m (12 seats, 99 rv), Kacchan 23 m (20 seats, 49 rv),
//   Seki Tei 52 m (15 seats, 96 rv), Mennosuke 55 m (ramen, 10 seats, 287 rv). Nearer non-core shops (CoCo Ichibanya chain,
//   bakery, 22–55-seat izakaya) were passed over by the same test.
//   Dedupe. None is in data/tokyo.json by name (JA or romaji) or by address (日本橋人形町1-19-5, 1-18-6, 2-6-7); the hidden
//   Ningyocho placeholders (tokyo3__121 ぼたん, tokyo3__294 鳥料理 玉ひで, tokyo3_n_134 室次 …) are other shops.
//   Chain check. Oyster Stand: Tabelog links otto2008.com, whose top page shows only 株式会社otto; no other Oyster Stand found.
//   Kacchan: a July 2026 review mentions a sister shop in Toranomon, and a web search shows a "東京串かつ かっちゃん" in
//   Kabukicho's Red Noren-gai; two or three shops, not a fast-growing chain. Seki Tei and Mennosuke: single shops.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw11-1');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const HASHIGORO = 'http://www.hashigoro.jp/shop_guide/detail/scd-000035/';

// ================================================================ オイスタースタンド 人形町
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13286617/'; const R = TB + 'dtlrvwlst/'; const MENU = TB + 'dtlmenu/';
  const H = day(['12:00', '23:00']);
  put({
    id: 'tokyo_oyster_stand_ningyocho', name: 'オイスタースタンド 人形町 (Oyster Stand Ningyocho)', category: 'OMNI',
    lat: 35.686084, lng: 139.782211, cuisine_type: 'oyster',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Raw oysters on the half shell are the plain choice, but nothing on the menu is called gluten-free, and much of it is wheat: fried oysters, aonori zeppole, garlic toast and baguette, the gratin-style grilled oysters, linguine and lasagna. Ask what goes into the oyster cocktails and the grilled-oyster butters and sauces.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. An oyster bar: almost everything is oyster, seafood, cheese or meat. The green salad with house vinaigrette and the French fries are the only plant-based-sounding dishes (the fries\' oil is not described, and fried oysters are on the same menu).',
    hours_raw: 'Daily 12:00–23:00 (last order food 22:15, drinks 22:45) (Tabelog). 12 seats, counter and standing; the venue can be hired for up to 20 (Tabelog). Reservations accepted (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), e-money (transport IC, iD, QUICPay) and QR (PayPay, d Barai, Rakuten Pay, au PAY) (Tabelog). Non-smoking; a smoking area in the building (Tabelog). A February 2026 diner noted a tipping system at the table.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Ningyocho 1-19-5, M\'s Cross Ningyocho (Hashigo-ro dining building) 4F — 1 min from Ningyocho Stn exits A5/A6 (Hibiya Line, Toei Asakusa Line); Tokyo Kushikatsu Kacchan is on the same floor',
    cuisine: 'Oyster stand: raw oysters from around Japan, grilled oysters, oyster pastas and wine (prices from the Tabelog menu, tax included, updated 6 October 2026) · drink-and-two-oysters sets: Moët & Chandon Impérial Brut ¥2,640; Cava ¥2,200; Chablis ¥2,310; Hoegaarden White or a Talisker 10 highball ¥1,980 · raw oysters ¥770 each, 3 for ¥2,200, 5 for ¥3,630; oyster cocktails topped with sea urchin, caviar or ikura ¥990; special platter of three raw oysters and three oyster cocktails ¥4,950 · grilled oysters ¥770 each (herb garlic butter, sea-urchin butter, gratin, tomato cheese, spicy tomato cheese) or 5 assorted ¥3,630 · champagne-steamed oysters and mussels ¥1,540; Galician-style oysters and potatoes ¥935; ajillo of oysters and mushrooms with baguette ¥1,430; fried oysters (3) ¥1,078 · fresh linguine: oysters, fresh tomato and herb oil ¥1,760; sea-urchin cream ¥1,980; oyster and spinach lasagna ¥1,650; beef Bolognese ¥1,760 · salads, Zao cream cheese, Spanish prosciutto, ice cream and sorbet of the day ¥418',
    website: TB, gmaps: gm('オイスタースタンド 人形町'), menu_url: MENU,
    notes: "[Oyster bar · Ningyocho, a 12-seat oyster and champagne stand above the station] A small counter-and-standing oyster bar on the fourth floor of Hashigo-ro, the new M's Cross Ningyocho dining building at the Ningyocho crossing, built for hopping from bar to bar (diners in May 2026 ordered from the Korean place next door too, billed separately). The draw is the set of two raw oysters with a glass: Moët, cava, Chablis, Hoegaarden or a Talisker highball, about ¥2,000–2,600. Staff explain each oyster's origin, and one May 2026 diner tasted them range from bright to creamy; a February 2026 diner asked for oysters from Hokkaido and got them. Beyond raw oysters there are grilled oysters with five toppings, steamed and fried oysters, and fresh-linguine pastas and a lasagna packed with oysters (July 2026). Opinions split: September 2026 diners praised plump, fresh oysters and attentive service, while others in March and June 2026 found the floor nearly empty and the oysters small for the price. Open daily from noon.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; "The owner was friendly", July 2026 review)'], origin: null,
      background: 'Tabelog lists the operator\'s site as otto2008.com, whose top page shows only the company name 株式会社otto. The shop is on the fourth floor of M\'s Cross Ningyocho, a dining building of small bars reviewers call Hashigo-ro (the building\'s own site, hashigoro.jp, titles it ハシゴ楼（エムズクロス人形町）). Tabelog lists 12 seats and a corporate-member page.',
      philosophy: null, specialty: 'Raw oysters from around Japan paired with champagne, wine, beer or whisky; oyster pasta and lasagna.',
      anecdotes: [
        { text: '"Although I couldn\'t normally choose the oysters, I expressed my desire to have the Sapporo oysters from Hokkaido, and [the staff] kindly accommodated my request." — February 2026, sparkling-wine and oyster set.', source: R + 'B523420460/' },
        { text: '"From refreshing flavors to creamy ones reminiscent of milk tea, it was delightful to experience such differences based on their origins." — May 2026, oyster and wine pairing set.', source: R + 'B528244322/' },
        { text: '"The pasta and lasagna were delicious and packed with oysters. The owner was friendly." — July 2026.', source: R + 'B531320763/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): オイスタースタンド 人形町、オイスターバー、中央区日本橋人形町1-19-5 エムズクロス人形町 4F、人形町駅A5・A6出口から徒歩1分、毎日12:00〜23:00 (料理L.O.22:15、ドリンクL.O.22:45)、12席、貸切は20人まで、予約可、カード・電子マネー・QR可、禁煙 (建物に喫煙所)、ホームページ otto2008.com (株式会社otto)。メニュー (2026年10月6日更新、税込み): Moët & Chandon と生牡蠣2個2,640円、Cava と2個2,200円、Chablis と2個2,310円、ビールまたはハイボールと2個1,980円、生牡蠣1個770円、焼き牡蠣1個770円、牡蠣のリングイネ1,760円、牡蠣とほうれん草のラザニア1,650円。ハシゴ楼 (エムズクロス人形町) の4階。口コミ(2026年2月〜9月): 産地の説明が丁寧、Hokkaido の牡蠣を頼めた、隣の韓国料理店のメニューも頼める (会計は別)、パスタとラザニアに牡蠣がたっぷり、店主が気さく、空いていて牡蠣が小さく割高との声も、新鮮でぷりぷりとの声も。',
      confidence: 'medium', sources: [TB, MENU, HASHIGORO, R + 'B523420460/', R + 'B524355407/', R + 'B524707328/', R + 'B526492205/', R + 'B528244322/', R + 'B528814235/', R + 'B530501799/', R + 'B531320763/', R + 'B535873155/', R + 'B535874629/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set menus of oysters plus one drink make ordering simple; staff explain each oyster\'s origin (May 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町1-19-5 エムズクロス人形町 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with a menu updated 6 October 2026; reviews dated February–September 2026.' },
    pin_source: `Tabelog ${TB} (35.686084, 139.782211); cross-checked: GSI 東京都中央区日本橋人形町一丁目19番5号 (go) 7m. Same building and floor as Tokyo Kushikatsu Kacchan (tokyo_kushikatsu_kacchan_ningyocho, address_ja "東京都中央区日本橋人形町1-19-5 エムズクロス人形町 4F"), whose Tabelog point is 8 m away, so the two pins stay apart; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, R + 'B530501799/'],
    price_note: 'Prices from the Tabelog menu (tax included; updated 6 October 2026). A March 2026 diner paid a little less for some dishes (e.g. lasagna ¥1,738, grilled oyster ¥539).', last_checked: TODAY, items: [
      it('', '', 'Moët & Chandon Impérial Brut + 2 raw oysters', '¥2,640', 'Oyster sets', 'ask', 'no', 'Tabelog menu.', 'moet_set'),
      it('', '', 'Cava + 2 raw oysters', '¥2,200', 'Oyster sets', 'ask', 'no', 'Tabelog menu; ¥2,200 in March 2026 too.', 'cava_set'),
      it('', '', 'Raw oyster, 1 piece', '¥770', 'Raw oysters', 'ask', 'no', 'Tabelog menu; 3 for ¥2,200, 5 for ¥3,630.', 'raw_oyster'),
      it('', '', 'Special oyster platter (3 raw oysters, 3 oyster cocktails)', '¥4,950', 'Raw oysters', 'ask', 'no', 'Tabelog menu.', 'oyster_platter'),
      it('', '', 'Grilled oyster, herb garlic butter', '¥770', 'Grilled oysters', 'ask', 'no', 'Tabelog menu; also sea-urchin butter, gratin, tomato cheese.', 'grilled_oyster'),
      it('', '', 'Fried oysters, 3 pieces', '¥1,078', 'Hot appetizers', 'no', 'no', 'Tabelog menu.', 'fried_oysters'),
      it('', '', 'Oyster and spinach lasagna', '¥1,650', 'Pasta', 'no', 'no', 'Tabelog menu.', 'oyster_lasagna'),
      it('', '', 'Linguine with oysters, fresh tomato and herb oil', '¥1,760', 'Pasta', 'no', 'no', 'Tabelog menu; fresh linguine.', 'oyster_linguine'),
      it('', '', 'Green salad with house vinaigrette', '¥880', 'Salad', 'ask', 'ask', 'Tabelog menu.', 'green_salad'),
    ] }, {
    cuisine: '牡蠣のスタンド。全国の生牡蠣、焼き牡蠣、牡蠣のパスタとワイン (値段は食べログのメニュー、税込み、2026年10月6日更新)・ドリンクと生牡蠣2個のセット: Moët & Chandon Impérial Brut 2,640円、Cava 2,200円、Chablis 2,310円、Hoegaarden White または Talisker 10年のハイボール1,980円・生牡蠣1個770円、3個2,200円、5個3,630円。雲丹、キャビア、いくらをのせた牡蠣のカクテル990円。生牡蠣3種と牡蠣のカクテル3種の盛り合わせ4,950円・焼き牡蠣1個770円 (ハーブガーリックバター、雲丹バター、グラタン風、トマトチーズ、ピリ辛トマトチーズ)、5種盛り3,630円・牡蠣とムール貝のシャンパン蒸し1,540円、ガリシア風の牡蠣とじゃがいも935円、牡蠣ときのこのアヒージョ (バゲット付き) 1,430円、カキフライ3個1,078円・生のリングイネ: 牡蠣とフレッシュトマトとハーブオイル1,760円、雲丹のクリーム1,980円、牡蠣とほうれん草のラザニア1,650円、牛肉のボロネーゼ1,760円・サラダ、Zao のクリームチーズ、スペインの生ハム、本日のアイスとソルベ418円',
    neighborhood: '日本橋人形町1-19-5 エムズクロス人形町 (ハシゴ楼) 4F。人形町駅A5・A6出口から徒歩1分 (日比谷線、都営浅草線)。同じフロアに東京串カツ かっちゃん',
    gf_detail: '要確認。殻付きの生牡蠣がいちばん素朴な選択だが、グルテンフリーと書かれた料理はなく、小麦を使うものが多い: カキフライ、青のりのゼッポリーネ、ガーリックトーストとバゲット、グラタン風の焼き牡蠣、リングイネ、ラザニア。牡蠣のカクテルや焼き牡蠣のバターとソースの中身を確認して。',
    vegan_detail: '要確認。牡蠣のバーなので、ほとんどが牡蠣、魚介、チーズ、肉。植物性に見えるのは自家製ヴィネグレットのグリーンサラダとフライドポテトだけ (ポテトの油の説明はなく、メニューにはカキフライも)。',
    notes: '[オイスターバー・人形町、駅の上の12席の牡蠣とシャンパンのスタンド] 人形町の交差点に建った飲食ビル、エムズクロス人形町 (ハシゴ楼) の4階にある、カウンターと立ち飲みの小さな牡蠣のバー。はしご酒向けの造りで、2026年5月の口コミでは隣の韓国料理店の料理も頼めた (会計は別)。看板は生牡蠣2個とグラスのセットで、Moët、Cava、Chablis、Hoegaarden、Talisker のハイボールから選んで2,000〜2,600円ほど。スタッフが牡蠣ごとの産地を説明してくれ、2026年5月の口コミではさっぱりしたものからクリーミーなものまで味の違いを楽しめたという。2026年2月には Hokkaido の牡蠣を頼んで出してもらえた人も。生牡蠣のほかに5種類の焼き牡蠣、蒸し牡蠣、カキフライ、生のリングイネのパスタ、牡蠣がたっぷりのラザニア (2026年7月) も。評価は分かれ、2026年9月にはぷりぷりで新鮮、接客も丁寧との声がある一方、2026年3月と6月にはフロアががらがらで値段の割に牡蠣が小さいとの声も。毎日昼から営業。',
  });
}

// ================================================================ 東京串カツ かっちゃん 人形町
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13304497/'; const R = TB + 'dtlrvwlst/'; const MENU = TB + 'dtlmenu/'; const DRINK = MENU + 'drink/';
  const EVE = day(['17:00', '23:00']); const SAT = day(['12:00', '23:00']); const FRI = day(['12:00', '23:30']); const SUN = day(['12:00', '23:00']);
  put({
    id: 'tokyo_kushikatsu_kacchan_ningyocho', name: '東京串カツ かっちゃん 人形町 (Tokyo Kushikatsu Kacchan Ningyocho)', category: 'OMNI',
    lat: 35.686077, lng: 139.782121, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: kushikatsu are battered and deep-fried (the shop stresses its batter and oil), and every skewer goes through the same fryer.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. There are about ten vegetable skewers (pumpkin, onion, lotus root, asparagus, shiitake, eggplant and others), but the batter and frying oil are not described and the same fryer cooks meat and seafood; the table-side tartar appetizer is quail egg and mayonnaise. Vegetable sides such as salted cabbage, pickled cucumber, edamame and chilled tomato may suit.',
    hours_raw: 'Two sources differ. Tabelog: Mon–Thu 17:00–23:30; Fri–Sat 12:00–23:30; Sun and holidays 12:00–23:00; last order food 22:00, drinks 22:30. The building\'s site (hashigoro.jp): Mon, Wed, Thu, Sat, Sun and holidays 12:00–23:00; Tue 16:00–23:00; Fri 12:00–23:30. The structured hours here are only the times both sources agree on (weekday lunches may or may not be served). A 10% late-night charge applies after 22:00 (Tabelog menu). Appetizer charge ¥440 (Tabelog; July 2026). Fully cashless (building site; July 2026 review): cards incl. UnionPay, e-money and QR incl. Alipay and WeChat Pay (Tabelog). 20 seats: 8 at the counter and 3 tables (Tabelog). Reservations accepted; children and strollers welcome; non-smoking with a smoking area in the building; English menu available (Tabelog). Opened 5 December 2024 (Tabelog).',
    hours: { 0: EVE, 1: EVE, 2: EVE, 3: EVE, 4: FRI, 5: SAT, 6: SUN }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Ningyocho 1-19-5, M\'s Cross Ningyocho (Hashigo-ro dining building) 4F — 1 min from Ningyocho Stn exits A5/A6 (Hibiya Line, Toei Asakusa Line); Oyster Stand is on the same floor',
    cuisine: 'Bite-size kushikatsu from ¥80, about 30 kinds, fried to order in front of the counter (prices from the Tabelog menu, tax included, updated September 2025; checked against July 2026 prices) · vegetables: pumpkin, onion ¥80; garlic, red pickled ginger, long onion, lotus root, baby corn ¥100; asparagus, eggplant ¥120; shiitake ¥140 · seafood: squid, kisu ¥110; shrimp ¥120; tuna ¥200; herring roe on kelp ¥300 · meat: red wiener ¥90; ham cutlet ¥100; pork belly ¥170; pork fillet ¥180; beef skirt ¥190; chicken tartar ¥150 · others: mochi ¥90, quail egg ¥100, Oreo ¥100, cheese-stuffed chikuwa ¥120, mozzarella, Camembert, prosciutto-wrapped avocado ¥150, pork-wrapped tomato ¥140 · 5-skewer set ¥550, 10-skewer set ¥1,100 · sides: Japanese-style potato salad made with taro, dashi and mayonnaise ¥550 (March 2026), salted cabbage ¥450, octopus karaage ¥780, smoked daikon with cream cheese ¥550, somen champuru (October 2026), bulgogi cheese quesadilla (October 2026), Spam rice ball ¥450 · appetizer (¥440): quail egg, mayonnaise and pickled ginger to mix into tartar sauce at the table · regular and spicy sauces; the spicy one comes from Okayama (June 2026) · colourful retro bottle sours, "mega" highballs and beers ¥999',
    website: HASHIGORO, gmaps: gm('東京串カツ かっちゃん 人形町'), menu_url: MENU,
    notes: "[Kushikatsu · Ningyocho, bite-size skewers from ¥80 above the station] A bright, retro-styled kushikatsu bar of 20 seats on the fourth floor of Hashigo-ro, the M's Cross Ningyocho building of small bars at the Ningyocho crossing; it opened in December 2024 and has a sister shop in Toranomon (per a July 2026 review). About thirty kinds of small skewers, from ¥80 for onion or pumpkin up to herring roe on kelp, are fried to order in front of the counter in a light, crisp batter (2026 reviews), and you can order one at a time. The appetizer is a do-it-yourself tartar sauce of quail egg, mayonnaise and pickled ginger to mix at the table; the house also pours a slightly spicy sauce from Okayama. Diners in 2026 singled out asparagus, prosciutto-wrapped avocado, pork-wrapped tomato and a fried Oreo, and a taro potato salad made with dashi. Drinks include colourful bottle sours and ¥999 mega highballs. Most 2026 diners called the prices a bargain; one in October 2026 found the staff unfriendly. Fully cashless; a 10% charge after 22:00.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; "The kind owner also chatted with me", March 2026 review)'], origin: null,
      background: 'Opened 5 December 2024 (Tabelog) in M\'s Cross Ningyocho, a dining building of small bars that the building\'s site calls ハシゴ楼（エムズクロス人形町）; four shops share the fourth floor (May 2026 review). A July 2026 diner heard of a sister shop in Toranomon. Shop-maintained (corporate-member) Tabelog page.',
      philosophy: 'Light, crisp kushikatsu: the shop says it takes care over its batter and oil (Tabelog; building site).', specialty: 'Bite-size kushikatsu from ¥80; mix-it-yourself tartar sauce.',
      anecdotes: [
        { text: '"The appetizer was unique; it was delicious on its own, but when mixed, it transformed into a tartar sauce!" — March 2026, 5-skewer set and bottle sour.', source: R + 'B525098331/' },
        { text: '"When I asked the staff about it, [the staff] mentioned that [the shop uses] a slightly spicy sauce from Okayama." — June 2026.', source: R + 'B529965793/' },
        { text: '"Even though I was alone, I was pleased that I could order kushikatsu starting from just one skewer." — July 2026.', source: R + 'B531265005/' },
      ],
      japanese_sources_summary: 'ハシゴ楼 (エムズクロス人形町) のサイト: 東京串カツ かっちゃん、串カツ、「リーズナブルで美味しい一口串カツ！お仕事終わりのさくっと一杯にもお気軽に」、衣と油にこだわったサクサクの串カツと一品料理、メガジョッキあり、月・水〜木・土日祝12:00〜23:00、火16:00〜23:00、金12:00〜23:30、完全キャッシュレス、中央区日本橋人形町1丁目19-5 (4F)、人形町駅A5・A6出口徒歩1分。食べログ (店舗会員): 一口串カツ80円から、約30種類、月〜木17:00〜23:30、金土12:00〜23:30、日祝12:00〜23:00、お通し代440円、20席 (カウンター8席、テーブル3卓)、子ども可、英語メニューあり、22時以降は深夜料金10%、2024年12月5日オープン。口コミ(2026年3月〜10月、写真の見出しに「からいソース ＆ 普通のソース」): うずらの卵とマヨネーズと紅生姜を混ぜるタルタルのお通し、Okayama のピリ辛ソース、里芋とだしとマヨネーズの和風ポテサラ、アスパラ、生ハム巻きアボカド、豚巻きトマト、Oreo の串カツ、瓶サワー、Toranomon に姉妹店があると聞いた、10月には接客がそっけなかったとの声も。',
      confidence: 'medium', sources: [TB, MENU, DRINK, HASHIGORO, R + 'B525098331/', R + 'B527605406/', R + 'B528154397/', R + 'B529965793/', R + 'B530539123/', R + 'B530636419/', R + 'B531265005/', R + 'B532441096/', R + 'B536836436/', R + 'B537822741/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu available (Tabelog); skewers ordered one at a time from a priced list; fully cashless.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町1-19-5 エムズクロス人形町 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the building\'s shop guide; reviews dated March–October 2026.' },
    pin_source: `Tabelog ${TB} (35.686077, 139.782121); cross-checked: GSI 東京都中央区日本橋人形町一丁目19番5号 (go) 11m. Same building and floor as Oyster Stand (tokyo_oyster_stand_ningyocho, address_ja "東京都中央区日本橋人形町1-19-5 エムズクロス人形町 4F"), whose Tabelog point is 8 m away, so the two pins stay apart; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, DRINK, R + 'B532441096/'],
    price_note: 'Prices from the Tabelog menu (tax included; food updated 22 September 2025); the July 2026 review paid the same for the skewers it lists. A 10% late-night charge applies after 22:00.', last_checked: TODAY, items: [
      it('', '', '5-skewer kushikatsu set', '¥550', 'Kushikatsu', 'no', 'no', 'Tabelog menu.', 'set_5'),
      it('', '', '10-skewer kushikatsu set', '¥1,100', 'Kushikatsu', 'no', 'no', 'Tabelog menu.', 'set_10'),
      it('', '', 'Onion kushikatsu', '¥80', 'Kushikatsu', 'no', 'ask', 'Tabelog menu; batter and oil not described.', 'onion'),
      it('', '', 'Asparagus kushikatsu', '¥120', 'Kushikatsu', 'no', 'ask', 'Tabelog menu; ¥120 in July 2026.', 'asparagus'),
      it('', '', 'Pork fillet kushikatsu', '¥180', 'Kushikatsu', 'no', 'no', 'Tabelog menu; ¥180 in July 2026.', 'pork_fillet'),
      it('', '', 'Prosciutto-wrapped avocado kushikatsu', '¥150', 'Kushikatsu', 'no', 'no', 'Tabelog menu; ¥150 in July 2026.', 'avocado_prosciutto'),
      it('', '', 'Japanese-style potato salad (taro, dashi, mayonnaise)', '¥550', 'Sides', 'ask', 'no', 'Tabelog menu; made with taro, dashi and mayonnaise (March 2026).', 'potato_salad'),
      it('', '', 'Salted cabbage', '¥450', 'Sides', 'ask', 'ask', 'Tabelog menu; ¥450 in July 2026.', 'salted_cabbage'),
      it('', '', 'Appetizer: tartar sauce to mix (quail egg, mayonnaise, pickled ginger)', '¥440', 'Appetizer', 'ask', 'no', 'Tabelog; July 2026.', 'otoshi'),
      it('', '', 'Mega highball', '¥999', 'Drinks', '', '', 'Tabelog drink menu (2.5 times the size).', 'mega_highball'),
    ] }, {
    cuisine: '一口サイズの串カツ80円から、約30種類、カウンターの前で注文ごとに揚げる (値段は食べログのメニュー、税込み、2025年9月更新。2026年7月の値段と一致)・野菜: かぼちゃ、玉ねぎ80円、にんにく、紅生姜、長ねぎ、れんこん、ヤングコーン100円、アスパラ、なす120円、しいたけ140円・魚介: いか、きす110円、えび120円、まぐろ200円、子持ち昆布300円・肉: 赤ウインナー90円、ハムカツ100円、豚バラ170円、豚ヒレ180円、牛ハラミ190円、チキンタルタル150円・そのほか: もち90円、うずら100円、Oreo 100円、ちくわチーズ120円、モッツァレラ、カマンベール、生ハム巻きアボカド150円、豚巻きトマト140円・5本セット550円、10本セット1,100円・一品: 里芋とだしとマヨネーズの和風ポテトサラダ550円 (2026年3月)、塩ダレキャベツ450円、たこの唐揚げ780円、燻製たくあんとクリームチーズ550円、そうめんチャンプルー (2026年10月)、プルコギのチーズケサディーヤ (2026年10月)、スパムのおにぎり450円・お通し (440円): うずらの卵、マヨネーズ、紅生姜を席で混ぜてタルタルソースに・ソースは普通と辛いものの2種類、辛いほうは Okayama のソース (2026年6月)・カラフルなレトロな瓶サワー、999円のメガハイボールやメガビール',
    neighborhood: '日本橋人形町1-19-5 エムズクロス人形町 (ハシゴ楼) 4F。人形町駅A5・A6出口から徒歩1分 (日比谷線、都営浅草線)。同じフロアにオイスタースタンド',
    gf_detail: 'グルテンフリーではない: 串カツは衣をつけて揚げる (店は衣と油にこだわると書く)。どの串も同じ揚げ油を通る。',
    vegan_detail: '要確認。野菜の串は10種類ほど (かぼちゃ、玉ねぎ、れんこん、アスパラ、しいたけ、なすなど) あるが、衣と揚げ油の説明はなく、同じ揚げ油で肉や魚介も揚げる。お通しのタルタルはうずらの卵とマヨネーズ。塩ダレキャベツ、きゅうりの漬物、枝豆、冷やしトマトなどの野菜の一品は合うかもしれない。',
    notes: '[串カツ・人形町、駅の上の80円からの一口串カツ] 人形町の交差点に建った小さな酒場が集まるビル、エムズクロス人形町 (ハシゴ楼) の4階にある、明るくレトロな雰囲気の20席の串カツ酒場。2024年12月に開店し、2026年7月の口コミによれば Toranomon に姉妹店がある。玉ねぎやかぼちゃの80円から子持ち昆布まで約30種類の小ぶりな串を、カウンターの前で注文ごとに軽くサクサクの衣で揚げる (2026年の口コミ)。1本から頼める。お通しはうずらの卵とマヨネーズと紅生姜を席で混ぜて作るタルタルソースで、ソースには Okayama のピリ辛のものも。2026年の口コミで評判なのはアスパラ、生ハム巻きアボカド、豚巻きトマト、揚げた Oreo、里芋とだしで作る和風ポテトサラダ。飲み物はカラフルな瓶サワーや999円のメガハイボール。2026年の多くの客が安さを評価する一方、10月には接客がそっけなかったという声も。完全キャッシュレスで、22時以降は10%の深夜料金。',
  });
}

// ================================================================ せき亭
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13242528/'; const R = TB + 'dtlrvwlst/'; const MENU = TB + 'dtlmenu/';
  const SITE = 'http://sekitei0204.com/'; const SCENE = SITE + 'scene/'; const MOVE = SITE + 'osusume/';
  const MON = day(['16:30', '23:00']); const WK = day(['11:30', '14:00'], ['17:30', '23:00']); const FRI = day(['11:30', '14:00'], ['17:30', '24:00']); const SAT = day(['11:30', '14:00'], ['17:30', '22:00']);
  put({
    id: 'tokyo_seki_tei_ningyocho', name: 'せき亭 (Seki Tei)', category: 'OMNI',
    lat: 35.685864, lng: 139.78244, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi and the lunchtime seafood bowls are the likeliest choices, but they come with soy sauce and the bowls with vinegared rice; nothing is called gluten-free. Much of the menu is fried, simmered or sauced (pork tonkatsu and katsu sandwich, beef cutlet, ham cutlet, miso and "gen-tare" dishes); ask about the senbei-jiru.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A seafood and meat izakaya; the daily obanzai include vegetable dishes (simmered komatsuna and nameko, wakame in vinegar, fried eggplant with yuzu sauce, simmered taro on a 2020 sample list), but the broths are not described, and the lunch broth served with the bowls is made from fish.',
    hours_raw: 'Mon 16:30–23:00 (last order food 22:00, drinks 22:40); Tue–Thu 11:30–14:00 (last order 13:30) and 17:30–23:00 (last order food 22:15, drinks 23:00); Fri lunch the same, dinner 17:30–24:00; Sat 11:30–14:00 and 17:30–22:00 (last order food 21:15); closed Sundays and public holidays (Tabelog). Reservations accepted; phone for bookings after 19:00 (Tabelog). Appetizer charge ¥500 for two small dishes (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 15 seats incl. a counter; can be hired for up to 20 (Tabelog). Tabelog still lists smoking allowed except at lunch, but a September 2026 diner was told it is now non-smoking. Moved here from Nihonbashi-Koamicho and reopened 16 December 2019 (official site notice; Tabelog opening date).',
    hours: { 0: MON, 1: WK, 2: WK, 3: WK, 4: FRI, 5: SAT }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Ningyocho 1-18-6, 日宝人形町ビル 2F, just off the Ningyocho crossing — 1 min from Ningyocho Stn exit A6 (2 min from A5), 5 min from Suitengumae Stn exit 8',
    cuisine: 'Izakaya of Aomori seafood, Aomori local dishes and daily obanzai, with sake · lunch: "service" seafood bowl of about nine kinds of fish and shellfish (tuna, bonito or salmon, yellowtail, negitoro, shirasu, head-on red shrimp, baby scallops in the shell, simmered eel) ¥1,200 in April and September 2026 (one August 2026 diner paid ¥1,300), with miso soup, a small side and free fish broth to turn the rest into chazuke; marinated sea bream and flounder bowl ¥1,200 (June 2026); three-fish marinated bowl ¥1,000 (December 2025) · evening: courses from ¥3,980 before tax (four starters, three kinds of sashimi, a grill, a fry, hot pot and zosui) and a chef\'s omakase course of 6 dishes ¥5,000 tax included (all-you-can-drink +¥2,500 for groups of four or more); after-work "Otsukare-sama set" ¥980 (Tabelog) · menu posted on Tabelog in 2020 (sample, prices may have changed): obanzai ¥450–580 or three for ¥980; Hachinohe mackerel skewer ¥550; Aomori scallop skewer with butter soy ¥480; senbei-jiru ¥580; Towada beef rib grill ¥880; Hachinohe pork steak, tonkatsu and cold shabu-shabu; Aomori-brand wagyu and Shamrock chicken; grilled sea urchin ¥1,200; miso-grilled scallops and sea urchin in the shell ¥980 · local sake from around Japan (more than 20 kinds on the 2020 list), shochu',
    website: SITE, gmaps: gm('せき亭 人形町'), menu_url: MENU,
    notes: "[Izakaya · Ningyocho, Aomori seafood and obanzai upstairs by the crossing] A homely second-floor izakaya of 15 seats just off the Ningyocho crossing, built around fish and produce from Hachinohe in Aomori, and run by a chef from Hachinohe (per an April 2026 review). By day it is known for its \"service\" seafood bowl: about nine kinds of fish and shellfish heaped so high the rice disappears, with head-on red shrimp and baby scallops in the shell, for about ¥1,200, plus a free pot of fish broth to pour over the last of it as chazuke. Arrive before noon; seven people were already in by 11:45 one April 2026 day. At night it is a sake izakaya with daily obanzai, Aomori dishes such as senbei-jiru, Hachinohe mackerel and scallop skewers, and courses from about ¥4,000; a March 2026 diner counted around 100 dishes. Diners praise the value; one in September 2026 found the room worn, with a large TV on. Closed Sundays and holidays.",
    chef_bio: { chef_name: null, roles: ['Chef from Hachinohe, Aomori (unnamed; April 2026 review)', 'Owner (unnamed; picks the sake, Tabelog; official site: menu with the owner\'s own ideas)'], origin: 'Hachinohe, Aomori (the chef, per an April 2026 review)',
      background: 'The official site (last updated 2019) describes 海鮮とおばんざい せき亭 as a seafood and obanzai shop serving fish and ingredients from Hachinohe, Aomori, cooked raw, grilled or simmered, with about ten sakes chosen to match the obanzai and a homely atmosphere. It was first at Nihonbashi-Koamicho 13-3; a notice of 14 December 2019 announced the move to Ningyocho 1-18-6, reopening on 16 December 2019 (Tabelog gives the same opening date). A 2017 post on the site lists Hachinohe mackerel, surf clams and cod arriving from Hachinohe.',
      philosophy: 'Fresh fish from Aomori and seasonal ingredients, standard dishes plus homemade ones with the owner\'s ideas, in a homely room where first-timers feel at ease (official site).', specialty: 'The lunchtime "service" seafood bowl with fish-broth chazuke; Aomori local dishes and obanzai.',
      anecdotes: [
        { text: '"The service seafood rice bowl made by the chef from Hachinohe, Aomori, still felt like a great deal even with the price increase!" — April 2026, ¥1,200 seafood bowl.', source: R + 'B519577606/' },
        { text: '"How many dishes were on the menu? Probably around 100... and I wanted to try about 30 of them!" — March 2026, dinner.', source: R + 'B524459054/' },
        { text: '"You can enjoy the dashi at your preferred timing, so I added it halfway through my meal." — August 2026, seafood bowl ¥1,300.', source: R + 'B534001072/' },
      ],
      japanese_sources_summary: '公式サイト (sekitei0204.com、2016〜2019年): 海鮮とおばんざい せき亭、青森から仕入れる鮮度抜群の魚や旬の食材を使った料理が自慢、「青森県八戸市」の産地鮮魚メニューや食材、生・焼・煮などの調理法、こだわりの日本酒を常時十種類、アットホームな和やかな雰囲気、店主のアイディアが盛り込まれた自家製メニュー、2017年12月に八戸から前沖サバ、ホッキ貝、鱈が入荷、旧店舗は日本橋小網町13-3、2019年12月14日のお知らせで日本橋人形町1-18-6への移転を告知、12月16日 (月) オープン、ランチはご飯・サラダ・せんべい汁付き (2016年)。食べログ (店舗会員): 青森の旬の海鮮とおばんざい、店主が選ぶ地酒、コースは3,980円 (税別) から、おまかせコース6品5,000円 (税込)、お疲れさまセット980円、お通し500円 (2品)、月16:30〜23:00、火〜木11:30〜14:00・17:30〜23:00、金は24:00まで、土11:30〜14:00・17:30〜22:00、日祝休み、15席、日宝人形町ビル 2F、2019年12月16日オープン。口コミ(2025年12月〜2026年9月): サービス海鮮丼1,200円 (2026年4月に200円値上げ、8月には1,300円との声)、魚のだしで海鮮茶漬けに、Hachinohe 出身の料理人、料理は100品ほど、日本酒が豊富、9月には禁煙になっていた、店内に大きなテレビ。',
      confidence: 'medium', sources: [TB, MENU, SITE, SCENE, MOVE, R + 'B519577606/', R + 'B524459054/', R + 'B529980097/', R + 'B530384972/', R + 'B532025102/', R + 'B532485965/', R + 'B534001072/', R + 'B535671077/', R + 'B536529432/', R + 'B536596493/'] },
    cultural_comfort: { level: 'japanese', note: 'A long Japanese izakaya menu of about 100 dishes (March 2026); no English menu is mentioned in any source. At lunch the seafood bowl is the obvious order.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町1-18-6 日宝人形町ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated December 2025–September 2026. The official site has not been updated since 2019 and still names the building 岡野ビル.' },
    pin_source: `Tabelog ${TB} (35.685864, 139.782440); cross-checked: GSI 東京都中央区日本橋人形町一丁目18番6号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, MENU, R + 'B519577606/', R + 'B534001072/', R + 'B536529432/'],
    price_note: 'Lunch prices from 2025–26 reviews; course prices from Tabelog (read November 2026); à la carte prices from the menu posted on Tabelog, last updated August 2020, which may have changed.', last_checked: TODAY, items: [
      it('', '', 'Service seafood bowl, about 9 kinds, with fish-broth chazuke (lunch)', '¥1,200', 'Lunch', 'ask', 'no', 'April and September 2026; ¥1,300 in August 2026.', 'kaisendon'),
      it('', '', 'Marinated sea bream and flounder bowl (lunch)', '¥1,200', 'Lunch', 'ask', 'no', 'June 2026.', 'tai_hirame_don'),
      it('', '', 'Chef\'s omakase course, 6 dishes', '¥5,000', 'Courses', 'ask', 'no', 'Tabelog, tax included; 17:30–21:30.', 'omakase'),
      it('', '', 'Otsukare-sama set (after work)', '¥980', 'Dinner', 'ask', 'ask', 'Tabelog.', 'otsukare_set'),
      it('', '', '3 assorted obanzai', '¥980', 'Obanzai', 'ask', 'ask', 'Tabelog menu (2020); dishes change daily.', 'obanzai_3'),
      it('せんべい汁', '', 'Senbei-jiru (senbei soup)', '¥580', 'Aomori dishes', 'ask', 'no', 'Tabelog menu (2020); the official site lists せんべい汁 with lunch (2016).', 'senbei_jiru'),
      it('', '', 'Hachinohe mackerel skewer, grilled', '¥550', 'Aomori dishes', 'ask', 'no', 'Tabelog menu (2020).', 'saba_skewer'),
      it('', '', 'Miso-grilled shellfish (scallop and sea urchin)', '¥980', 'Aomori dishes', 'ask', 'no', 'Tabelog menu (2020).', 'kaiyaki_miso'),
    ] }, {
    cuisine: '青森の海鮮、青森の郷土料理、日替わりのおばんざいと日本酒の居酒屋・ランチ: 9種類ほどの魚介 (まぐろ、かつおやサーモン、ぶり、ねぎとろ、しらす、頭付きの赤えび、殻付きのベビーホタテ、煮穴子) をのせたサービス海鮮丼は2026年4月と9月に1,200円 (2026年8月には1,300円との声)、味噌汁と小鉢付きで、無料の魚のだしをかけて茶漬けにできる。鯛と平目の漬け丼1,200円 (2026年6月)、三色の漬け丼1,000円 (2025年12月)・夜: コースは3,980円 (税別) から (前菜4品、刺身3種、焼き物、揚げ物、鍋、雑炊)、おまかせコース6品5,000円 (税込、4人以上は飲み放題+2,500円)、仕事帰りの「お疲れさまセット」980円 (食べログ)・2020年に食べログに載ったメニュー (例、値段は変わっているかもしれない): おばんざい450〜580円、3品盛り980円、Hachinohe のサバの串焼き550円、青森のホタテのバター醤油串480円、せんべい汁580円、Towada の牛バラ焼き880円、Hachinohe の豚のステーキ、とんかつ、冷しゃぶ、青森のブランド和牛と Shamrock の鶏、焼き雲丹1,200円、ホタテと雲丹の味噌貝焼き980円・全国の地酒 (2020年の一覧では20種類以上)、焼酎',
    neighborhood: '日本橋人形町1-18-6 日宝人形町ビル 2F、人形町交差点のすぐそば。人形町駅A6出口から徒歩1分 (A5から2分)、水天宮前駅8番出口から徒歩5分',
    gf_detail: '要確認。刺身や昼の海鮮丼がいちばん可能性があるが、醤油を使い、丼は酢飯。グルテンフリーの説明はない。揚げ物、煮物、たれの料理が多い (豚のとんかつやカツサンド、牛カツ、ハムカツ、味噌や Gen-tare の料理)。せんべい汁についても確認を。',
    vegan_detail: '要確認。魚介と肉の居酒屋。日替わりのおばんざいには野菜の料理もある (2020年の例: 小松菜となめこの煮浸し、わかめの酢の物、揚げなすの柚子だれ、里芋の煮物) が、だしの説明はなく、昼の丼に付くだしは魚から取ったもの。',
    notes: '[居酒屋・人形町、交差点そばの2階で青森の海鮮とおばんざい] 人形町の交差点からすぐのビルの2階、15席のアットホームな居酒屋。青森県八戸の魚や食材が中心で、2026年4月の口コミによれば料理人は Hachinohe 出身。昼の名物はサービス海鮮丼で、9種類ほどの魚介がご飯が見えないほど盛られ、頭付きの赤えびや殻付きのベビーホタテものって1,200円ほど。無料の魚のだしをかけて最後は茶漬けに。正午前に着くのがよく、2026年4月のある日は11:45にすでに7人が入っていた。夜は日本酒の居酒屋で、日替わりのおばんざい、せんべい汁、Hachinohe のサバやホタテの串焼きなど青森の料理、4,000円ほどからのコース。2026年3月の口コミでは料理が100品ほどあったという。値段の割に良いという声が多い一方、2026年9月には店内が古びていて大きなテレビがついているとの声も。日曜・祝日休み。',
  });
}

// ================================================================ めんのすけ
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13307236/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:30'], ['17:00', '22:30']);
  put({
    id: 'tokyo_mennosuke_ningyocho', name: 'めんのすけ (Mennosuke)', category: 'OMNI',
    lat: 35.68633, lng: 139.782797, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles, with gyoza and fried rice alongside.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a pork and vegetable broth, with pork belly stir-fried in lard on every bowl.',
    hours_raw: 'Mon–Sat and holidays 11:00–15:30 (last order 15:00) and 17:00–22:30 (last order 22:00); closed Sunday (Tabelog). The shop points to its Google Maps, Instagram and X pages for current hours (Tabelog). No reservations; order by QR code on your phone (2026 reviews). 10 counter seats (Tabelog); a 10-minute wait outside at 11:30 on a September 2026 weekday. Cards, e-money and QR incl. Alipay (Tabelog); a September 2026 diner saw nobody pay cash. Non-smoking (Tabelog). Opened 14 March 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 2-6-7, in a side street off the main road — 30 seconds from Ningyocho Stn exit A3 (Hibiya Line, Toei Asakusa Line)',
    cuisine: 'Single-bowl ramen shop billing itself "original Gifu ramen": a cloudy salt broth drawn from pork, napa cabbage, cabbage and garlic, with pork belly and the vegetables stir-fried in lard and a ball of red chili paste in the middle (2026 reviews) · Gifu ramen ¥950 (September and October 2026); spice level 0–5 (2 is standard) and noodle firmness to order · half-fried-rice set ¥1,300 (August 2026); with spinach ¥1,450 (September 2026); "Manpuku set" of ramen, half fried rice and gyoza (October 2026) · extra vegetables, extra noodles · free boiled bean sprouts (September 2026) and pickled mustard greens (October 2026) on the counter · sake, shochu, wine (Tabelog)',
    website: TB, gmaps: gm('めんのすけ 人形町'), menu_url: null,
    notes: "[Ramen · Ningyocho, garlic-salt \"Gifu ramen\" at a 10-seat counter] A small counter shop a few steps off the main road near Ningyocho station, opened in March 2025, serving what it calls original Gifu ramen. To order (by QR code) the cooks stir-fry pork belly, napa cabbage and cabbage in a pot, add the broth, then the noodles and garlic (October 2026), so the cloudy salt soup tastes of sweet vegetables, pork and a strong hit of garlic, with a ball of red chili paste to stir in at spice level 0 to 5. Diners in 2026 found it lighter than it looks; a Gifu native called it the long-missed taste of home, and an October 2026 diner described it as based on Gifu Tanmen, a local specialty of the Chubu region. Free bean sprouts and pickled mustard greens sit on the counter; most people add the half fried rice set. Expect a short queue at lunch; closed Sundays.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; "the owner was very kind", October 2026 review; the owner\'s words are displayed outside, September 2026 review)'], origin: null,
      background: 'Opened 14 March 2025 (Tabelog). The menu bills the bowl as "original" Gifu ramen; an October 2026 diner wrote that it is based on Gifu Tanmen, a local specialty from the Chubu region found mainly in Aichi and Gifu, and called this the only shop in Tokyo serving such a dish. Per a September 2026 review, the owner\'s words on the shop front stress concentrating the flavours of pork, napa cabbage, cabbage and garlic. Shop-maintained (corporate-member) Tabelog page; 10 counter seats.',
      philosophy: 'Concentrate the flavours of pork, napa cabbage, cabbage and garlic (the owner\'s words on the shop front, per a September 2026 review).', specialty: 'Gifu ramen: garlic-salt pork and vegetable broth with chili paste.',
      anecdotes: [
        { text: '"After moving to Tokyo and completing a full cycle of the zodiac, I found myself craving Gifu tanmen, never imagining I would eat it in Ningyocho, Tokyo!" — October 2026, a reviewer born and raised in Gifu.', source: R + 'B537581327/' },
        { text: '"As I watched the cooking process, I saw [the cooks] stir-frying vegetables and meat in a pot, adding broth, and then mixing in the noodles and garlic." — October 2026, Manpuku set.', source: R + 'B525086714/' },
        { text: '"The restaurant was already full at 11:30 AM on a weekday, and I waited about 10 minutes outside before being seated." — September 2026.', source: R + 'B535730565/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): めんのすけ、ラーメン、中央区日本橋人形町2-6-7、人形町駅A3出口から徒歩30秒、月〜土・祝11:00〜15:30 (L.O.15:00)、17:00〜22:30 (L.O.22:00)、日曜休み、詳しい営業時間は Google マップ、Instagram、X で、予約不可、カウンター10席、カード・電子マネー・QR可、禁煙、2025年3月14日オープン。口コミ(2026年3月〜10月): 豚肉、白菜、キャベツ、にんにくのうまみの塩スープ、白濁、ラードで炒めた豚バラとキャベツ、中央に赤い辛味、辛さは0〜5 (標準は2)、麺の硬さを選べる、やや平たい中細のストレート麺、Gifu ramen 950円、半チャーハンセット1,300円、ほうれん草のトッピングで1,450円、Manpuku set (ラーメン、半チャーハン、餃子)、QRコードで注文、カウンターにもやしと高菜、平日11:30に満席で約10分待ち、店主が親切、Gifu 出身の人が懐かしい味と評価。',
      confidence: 'medium', sources: [TB, R + 'B525086714/', R + 'B534738220/', R + 'B534779062/', R + 'B534945702/', R + 'B535730565/', R + 'B535738073/', R + 'B536640625/', R + 'B537581327/', R + 'B537803037/', R + 'B538398769/'] },
    ramen: {
      broth_base: ['pork', 'vegetable'], broth_texture: 'paitan', tare: ['shio'], aroma_oil: ['lard'], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Slightly flat, smooth and chewy (August 2026); medium-thin and straight (October 2026); on the firm side even at "normal" (September 2026). Firmness to order; extra noodles available.' },
      regional_style: ['Gifu (as the shop bills it: "original Gifu ramen")'], sub_genre: ['tanmen'],
      signature_bowl: 'Gifu ramen — ¥950 (September and October 2026); spice level 0–5, standard 2.',
      chashu: 'No chashu: pork belly stir-fried with the vegetables (September 2026).',
      notable_toppings: ['napa cabbage', 'cabbage', 'pork belly', 'garlic', 'red chili paste', 'free bean sprouts', 'pickled mustard greens', 'spinach (extra)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork broth; pork belly stir-fried in lard.' },
      pantheon: 'A Chubu-style tanmen in central Tokyo: pork, napa cabbage and cabbage stir-fried in lard and simmered into a cloudy garlic-salt broth, a ball of chili paste to dissolve at your chosen heat, and firm medium-thin noodles.',
      profile: { richness: 3, oiliness: 2, clarity: 2, tare_strength: 4, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B537581327/', '"The delicate balance of being light yet rich in flavor"; another: "Although it looks rich, it goes down smoothly with the noodles and feels refreshing" (' + R + 'B525086714/).'],
        oiliness: [R + 'B534779062/', '"The pork and cabbage were stir-fried in lard"; but diners call it "not too heavy" (March 2026, ' + R + 'B525086714/) — placed below the middle.'],
        clarity: [R + 'B534738220/', '"Taking a sip of the cloudy white soup reveals the richness of the pork and the sweetness of the vegetables."'],
        tare_strength: [R + 'B525086714/', '"The saltiness is quite pronounced" (March 2026); "the salty flavor seeped into my tired body" (October 2026).'],
        noodle_firmness: [R + 'B534779062/', '"I ordered the noodles to be normal, but they were still on the firmer side"; "slightly firm and chewy" (' + R + 'B535738073/).'],
        aroma_punch: [R + 'B534738220/', '"Followed by a strong garlic kick"; "a burst of garlic aroma" (' + R + 'B525086714/).'],
      },
      confidence: 'medium', sources: [R + 'B525086714/', R + 'B534738220/', R + 'B534779062/', R + 'B535730565/', R + 'B535738073/', R + 'B536640625/', R + 'B537581327/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by QR code on your phone (2026); choose a spice level 0–5 and noodle firmness.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町2-6-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated March–October 2026.' },
    pin_source: `Tabelog ${TB} (35.686330, 139.782797); cross-checked: GSI 東京都中央区日本橋人形町二丁目6番7号 (go) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534779062/', R + 'B534738220/', R + 'B535738073/', R + 'B536640625/'],
    price_note: 'Prices from August–October 2026 reviews (tax included); Tabelog has no menu.', last_checked: TODAY, items: [
      it('', '', 'Gifu ramen', '¥950', 'Ramen', 'no', 'no', 'September and October 2026.', 'gifu_ramen'),
      it('', '', 'Half-fried-rice set (Gifu ramen + half fried rice)', '¥1,300', 'Sets', 'no', 'no', 'August 2026.', 'han_chahan_set'),
      it('', '', 'Half-fried-rice set with spinach topping', '¥1,450', 'Sets', 'no', 'no', 'September 2026.', 'han_chahan_spinach'),
      it('', '', 'Manpuku set (ramen, half fried rice, gyoza)', '', 'Sets', 'no', 'no', 'October 2026; price not given.', 'manpuku_set'),
    ] }, {
    cuisine: '一杯のラーメンの店で、「元祖 Gifu ramen」と銘打つ: 豚肉、白菜、キャベツ、にんにくから取る白濁した塩スープに、ラードで炒めた豚バラと野菜、中央に赤い辛味の玉 (2026年の口コミ)・Gifu ramen 950円 (2026年9月、10月)。辛さ0〜5 (標準は2) と麺の硬さを選べる・半チャーハンセット1,300円 (2026年8月)、ほうれん草のせ1,450円 (2026年9月)、ラーメンと半チャーハンと餃子の「Manpuku set」(2026年10月)・野菜増し、替え玉・カウンターに無料のゆでもやし (2026年9月) と高菜 (2026年10月)・日本酒、焼酎、ワイン (食べログ)',
    neighborhood: '日本橋人形町2-6-7、大通りから少し入った路地。人形町駅A3出口から徒歩30秒 (日比谷線、都営浅草線)',
    gf_detail: 'グルテンフリーではない: 小麦の麺。餃子とチャーハンも。',
    vegan_detail: 'ヴィーガンではない: 豚肉と野菜のスープで、どの丼にもラードで炒めた豚バラ。',
    notes: '[ラーメン・人形町、10席のカウンターのにんにく塩の「Gifu ramen」] 人形町駅近くの大通りから一歩入った小さなカウンターの店で、2025年3月の開店。「元祖 Gifu ramen」を出す。注文 (QRコード) を受けると鍋で豚バラ、白菜、キャベツを炒め、スープを加え、麺とにんにくを合わせる (2026年10月) ので、白濁した塩スープは野菜の甘み、豚のうまみ、強いにんにくの香り。中央の赤い辛味を溶かし、辛さは0〜5から選ぶ。2026年の口コミでは見た目より軽いとの声が多く、Gifu 出身の人は懐かしい故郷の味と書き、2026年10月の口コミは中部地方の名物 Gifu Tanmen をもとにした一杯だと説明する。カウンターには無料のもやしと高菜があり、多くの客は半チャーハンセットを頼む。昼は少し並ぶことも。日曜休み。',
  });
}

save();
