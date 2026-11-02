// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles) — lane osw10 (circle yotsuya), batch 2.
//   + a La Bouteille (wine bistro since 2017, B1F under Yoshinoya on Shinjuku-dōri; prix-fixe French, owner-sommelier)
//   + おでんやden Odenya den (U-shaped 15-seat oden counter since 1992, Nakagawa Bldg B1F; weekdays only, closed August)
//   + ↑↑↓↓←→←→BABA "Uramen" (underground izakaya opened Oct 2025, sister of 四ツ谷 Balkan upstairs; open to midnight)
//   + ビストロ モンブレ montbellet (12-seat bistro, same B1F as a La Bouteille; fish lunch from ¥1,350, chef + one server)
//   Chain check. a La Bouteille: one shop (official site), opened after 新宿西口 Un Verre. Odenya den: one shop, open since
//   1992 (Tabelog). BABA: reviews and the listing call it a sister of "Balkan" on the floor above (a web search showed one
//   四ツ谷 Balkan listing, no group); two shops, not a chain. montbellet: one Tabelog listing, no branch found.
//   Skipped ゴンチャ アトレ四谷店 13296188 (Gong cha, a national bubble-tea chain), the first queue entry.
//   None is in data/tokyo.json (grep by name, Tabelog id and address; batch 1's four Yotsuya records are at 四谷1-4 and 1-7).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw10-2');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13296188', 'ゴンチャ アトレ四谷店 — Gong cha, a national bubble-tea chain; not researched.');

// ================================================================ a La Bouteille
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13210314/'; const R = TB + 'dtlrvwlst/';
  const MENU = TB + 'dtlmenu/'; const PARTY = TB + 'party/';
  const SITE = 'http://alabouteille.com/'; const ABOUT = SITE + 'free/about-us'; const SMENU = SITE + 'menu'; const NEWS9 = SITE + 'info/6830602';
  const H = day(['12:00', '14:00'], ['17:00', '23:00']);
  put({
    id: 'tokyo_a_la_bouteille_yotsuya', name: 'a La Bouteille (アラブテイユ)', category: 'OMNI',
    lat: 35.686359, lng: 139.728697, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Nothing is said about gluten; the courses open with a black-truffle madeleine and bread (a ¥550 charge), and pastry-wrapped dishes (sea bass in pastry, pâté en croûte, venison in pastry) are house classics (official site; 2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask when booking. The signature terrine is made from pesticide-free vegetables from a Kiyosato grower, with vegetable sauces, but one 2026 version came with a sour-cream sauce; the rest of the prix-fixe is fish, meat and game. A non-alcoholic pairing is offered (official site).',
    hours_raw: 'Mon–Sat dinner 17:00–23:00 (last food order 21:30, drinks 22:00); lunch 12:00–14:00 (last order 13:00) only when booked at least two days ahead; closed Sunday and over New Year (Tabelog; the official site gives the same hours, last order 22:00). Reservations advised; groups of four or more without one may be turned away; arriving 30 minutes late without word cancels the booking; courses cancelled on the day are charged in full (Tabelog). Amuse and bread charge ¥550 (Tabelog). The shop may refuse guests with strong fragrance, the very drunk, or those who want only tap water with dinner; school-age children only if they eat the same menu as adults (Tabelog). 20 seats: 4 at the counter, 16 at tables and sofa seats; hire for up to 20; non-smoking (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), e-money and PayPay (Tabelog). Opened 12 July 2017 (Tabelog; the site marked its 9th anniversary on 12 July 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yotsuya 1-8-14, Yotsuya Itchome Bldg B1F, on Shinjuku-dōri below Yoshinoya — 1 min from Exit 2 of Yotsuya Stn (Namboku Line), 3 min from JR Yotsuya Stn; montbellet is on the same basement floor',
    cuisine: 'Wine bistro: prix-fixe French from named Japanese producers, wine bar for a second stop (official site) · seasonal prix-fixe dinner, 5 courses ¥6,050; lunch course (4 dishes) ¥3,850, by reservation; chef\'s group course ¥9,900; 9th-anniversary course July 2026 ¥12,500 plus tax (Tabelog; official site) · supplements in June 2026: Hokkaido uni and carrot mousse +¥1,650, Kirishima beef +¥3,850; wine pairing 4 glasses of 60 ml ¥4,950; free-flow plan ¥9,350 (May 2026) · signatures: black-truffle madeleine, terrine of the week\'s pesticide-free vegetables from Gori-san in Kiyosato, sea bass stuffed with scallop mousse wrapped in Greek vine leaves and pastry with beurre blanc (on the menu since opening), game bought straight from hunters, e.g. Hokkaido Ezo venison (official site; 2025–26 reviews) · à la carte (tax included, updated August 2026): vegetable terrine ¥1,320, pâté en croûte ¥1,320, escargots ¥1,375, Hiroshi Ojima\'s Japanese prosciutto ¥2,420, Kaluga caviar 10 g ¥7,150, Kirishima beef steak ¥10,340 (for two), nougat glacé ¥825 · about 100 wines, mostly French, chosen by season (Greek and Basque in summer, Loire and Alsace in spring); non-alcoholic pairings; flannel-drip coffee (official site)',
    website: SITE, gmaps: gm('a La Bouteille 四谷1-8-14'), menu_url: SMENU,
    notes: "[French · Yotsuya, a basement wine bistro under Yoshinoya] Down the stairs below the Yoshinoya on Shinjuku-dōri, a 20-seat bistro opened in 2017 that the shop says is a bistro for a first stop and a wine bar for a second. The cooking is prix-fixe French built on producers the staff have gone to meet: a mosaic terrine of the week's pesticide-free vegetables from Gori-san in Kiyosato, nerve-killed fish from Ishinomaki and Ise-Shima, game bought straight from hunters, and a sea bass in vine leaves and pastry with beurre blanc that has been on the menu since opening. Dinner starts with a black-truffle madeleine; the 5-course menu is ¥6,050, but supplements and a wine pairing can more than double it. About 100 wines, mostly French, and the owner-sommelier's pairings drew praise in 2026, with Greek Robola, a 100-year-old sherry with abalone and non-alcoholic pairings. Diners in 2025–26 call it a hidden spot that feels like a corner of Paris; solo guests eat at the counter, and one June 2026 diner heard that performers from Kioi Hall come here. Lunch only by booking; closed Sundays; ¥550 bread charge.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened July 2017 (official site; Tabelog: 12 July 2017).',
      background: 'The official site says the shop opened in July 2017 "新宿西口Un Verreを経て" (after Un Verre at Shinjuku west exit), and calls the pâté de campagne refined in the way of "老舗レストラン出身のシェフ" (a chef from a long-established restaurant). The staff visit producers and buy only what they judge good, so they can pass on the producer\'s character and story; game comes direct from hunters, such as 儀間さん of Ashoro, Hokkaido, who sends only neck-shot deer; vegetables weekly from ゴリーさん in Kiyosato; prosciutto from 尾島博 (Hiroshi Ojima), maker since 1977 (official site; Tabelog menu). A June 2026 diner writes that "the owner kindly explained everything" and an August 2026 diner credits "pairings by the owner-sommelier". The site also sells the chef\'s French deli dishes online and a French osechi box (2026). No source names the chef or owner.',
      philosophy: '"ワインも食材もこだわり、生産者の想いを伝える店でありながら、どこか気楽に" — particular about wine and ingredients, passing on the producers\' feelings, yet somehow relaxed; a place where adults can take their time (official site).', specialty: 'Kiyosato vegetable terrine; sea bass in vine leaves and pastry; game from hunters.',
      anecdotes: [
        { text: '"I hear that performers and conductors from Kioi Hall often visit this place. Indeed, there were many signatures on the walls." — June 2026, post-concert gathering.', source: R + 'B529365017/' },
        { text: '"The suggested pairings were exceptional, especially the rare sherry with the abalone, which was the highlight." — December 2025, anniversary dinner.', source: R + 'B538071013/' },
        { text: '"I thought it was really affordable when I made the reservation, but after choosing the beef option and adding a wine pairing course, it ended up being quite a bit more expensive than I expected." — March 2026.', source: R + 'B525022371/' },
      ],
      japanese_sources_summary: '公式サイト (alabouteille.com): à La Bouteille、四ツ谷駅徒歩1分のビストロ、新宿通り沿い吉野家さんの地下一階、四谷1-8-14 四谷一丁目ビルB1、2017年7月に新宿西口Un Verreを経て新規オープン、1軒目はビストロ、2軒目はワインバー、料理はプリフィックスコース、ワインはペアリングかボトルを提案、営業17:00〜23:00、ランチ12:00〜14:00は予約がある日のみ、L.O.22:00、日曜・年末年始休み、禁煙、ワインはフランスを中心に約100種類、季節でギリシャやバスク、ロワールやアルザス、ノンアルコールのペアリング、生産者に会いに行く、宮城県石巻・高知県須崎・三重県伊勢志摩などの神経締めの鮮魚、スズキのパイ包み焼き ブールブランソース (オープン当初から)、ジビエは猟師さんと直接取引 (足寄町の儀間さんはネックショットのみ)、山梨県清里産ゴリーさんの季節野菜のテリーヌ、尾島博さんの生ハム、老舗レストラン出身のシェフ、ネルドリップのコーヒー、2026年7月12日に9周年、9周年コース12,500円 (税別)、シェフの惣菜のネットショップ、フレンチお節。食べログ (店舗会員): 月〜土、アミューズ&パン代550円、20席 (カウンター4、テーブル16)、プリフィックス5品6,050円、ランチ4品3,850円。口コミ(2025年12月〜2026年10月): トリュフのマドレーヌ、清里の野菜のテリーヌ、ペアリング4杯4,950円、オーナーソムリエ、カウンターでひとりの客も。',
      confidence: 'medium', sources: [SITE, ABOUT, SMENU, NEWS9, TB, MENU, PARTY, R + 'B521446182/', R + 'B523379260/', R + 'B525022371/', R + 'B528417197/', R + 'B529365017/', R + 'B531153639/', R + 'B534061091/', R + 'B535508687/', R + 'B537329487/', R + 'B538071013/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Prix-fixe choices explained at the table; the sommelier pairs wine by budget and taste.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '東京都新宿区四谷1-8-14 四谷一丁目ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (9th-anniversary notice July 2026) and shop-maintained Tabelog listing (menu updated August 2026); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.686359, 139.728697); cross-checked: GSI 東京都新宿区四谷一丁目8番地 (lot) 48m. Same basement as montbellet (tokyo_montbellet_yotsuya, address_ja "東京都新宿区四谷1-8-14 B1F"; both listings place it under the Yoshinoya), whose Tabelog point is 7 m away, so the pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, PARTY, NEWS9, R + 'B531153639/'],
    price_note: 'Tabelog menu and courses (tax included, updated August 2026); supplements and pairing from a June 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Seasonal prix-fixe dinner, 5 courses', '¥6,050', 'Course', 'ask', 'ask', 'Tabelog.', 'prix_fixe'),
      it('', '', 'Lunch course, 4 dishes (by reservation)', '¥3,850', 'Course', 'ask', 'ask', 'Tabelog.', 'lunch_course'),
      it('山梨県清里産 ゴリーさんの季節野菜のテリーヌ', '', 'Terrine of seasonal vegetables from Gori-san in Kiyosato, two sauces', '¥1,320', 'Appetizers', 'ask', 'ask', 'Tabelog menu; official site.', 'vegetable_terrine'),
      it('', '', 'Pâté en croûte of Ibaraki SPF pork and veal', '¥1,320', 'Appetizers', 'no', 'no', 'Tabelog menu.', 'pate_en_croute'),
      it('', '', 'Hiroshi Ojima\'s Japanese prosciutto', '¥2,420', 'Appetizers', 'ask', 'no', 'Tabelog menu.', 'ojima_prosciutto'),
      it('', '', 'Wine pairing, 4 glasses of 60 ml', '¥4,950', 'Drinks', '', '', 'June 2026 review.', 'wine_pairing'),
      it('', '', 'Amuse and bread charge', '¥550', 'Charge', 'no', 'ask', 'Tabelog.', 'bread_charge'),
    ] }, {
    cuisine: 'ワインのビストロ。名前のわかる国内の生産者の食材でプリフィックスのフレンチ、2軒目はワインバーとして (公式サイト)・季節のプリフィックスディナー5品6,050円、ランチコース (4品) 3,850円は予約制、シェフおまかせのグループコース9,900円、2026年7月の9周年コース12,500円 (税別) (食べログ、公式サイト)・2026年6月の追加料金: Hokkaido のウニと人参のムース +1,650円、Kirishima の牛 +3,850円、ワインのペアリング60ml 4杯4,950円、飲み放題プラン9,350円 (2026年5月)・名物: 黒トリュフのマドレーヌ、清里のゴリーさんの無農薬の季節野菜のテリーヌ、ホタテのムースを詰めギリシャの葡萄の葉とパイで包んだスズキのブールブランソース (オープン当初から)、猟師さんと直接取引するジビエ、たとえば Hokkaido の Ezo 鹿 (公式サイト、2025〜26年の口コミ)・アラカルト (税込み、2026年8月更新): 野菜のテリーヌ1,320円、パテ・アン・クルート1,320円、エスカルゴ1,375円、尾島博さんの生ハム2,420円、Kaluga のキャビア10g 7,150円、Kirishima の牛のステーキ10,340円 (2人分)、ヌガーグラッセ825円・ワインはフランスを中心に約100種類、季節で選ぶ (夏はギリシャやバスク、春はロワールやアルザス)。ノンアルコールのペアリング、ネルドリップのコーヒー (公式サイト)',
    neighborhood: '四谷1-8-14 四谷一丁目ビルB1F、新宿通り沿いの吉野家の地下。南北線四ツ谷駅2番出口から徒歩1分、JR四ツ谷駅から3分。同じ地下にモンブレ',
    gf_detail: '予約時に要確認。グルテンの説明はない。コースは黒トリュフのマドレーヌとパン (550円のチャージ) で始まり、パイ包みの料理 (スズキのパイ包み焼き、パテ・アン・クルート、鹿のパイ包み) が店の定番 (公式サイト、2025〜26年の口コミ)。',
    vegan_detail: '予約時に要確認。名物のテリーヌは清里の生産者の無農薬野菜で野菜のソースを添えるが、2026年のあるテリーヌにはサワークリームのソース。プリフィックスのほかの皿は魚、肉、ジビエ。ノンアルコールのペアリングはある (公式サイト)。',
    notes: '[フレンチ・四谷、吉野家の地下のワインビストロ] 新宿通りの吉野家の地下へ階段を下りたところにある、2017年開業の20席のビストロ。店いわく1軒目はビストロ、2軒目はワインバー。料理はスタッフが会いに行った生産者の食材で組むプリフィックスのフレンチで、清里のゴリーさんの無農薬野菜をモザイクにしたテリーヌ、石巻や伊勢志摩の神経締めの魚、猟師さんから直接届くジビエ、オープン当初からあるスズキの葡萄の葉とパイ包み焼きのブールブランソース。夜は黒トリュフのマドレーヌから始まる。5品で6,050円だが、追加料金とワインのペアリングで倍以上になることも。ワインはフランスを中心に約100種類で、2026年にはオーナーソムリエのペアリングが好評。ギリシャの Robola、アワビに合わせた100年以上前のシェリー、ノンアルコールのペアリングも。2025〜26年の口コミでは Paris の一角のような隠れ家との声、カウンターでひとりで食事をする客もいる。2026年6月の客は Kioi Hall の演奏家たちが通うと聞いたという。ランチは予約のみ、日曜休み、パン代550円。',
  });
}

// ================================================================ おでんやden
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13004334/'; const R = TB + 'dtlrvwlst/'; const MENU = TB + 'dtlmenu/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'tokyo_odenya_den_yotsuya', name: 'おでんやden (Odenya den)', category: 'OMNI',
    lat: 35.686527, lng: 139.728759, cuisine_type: 'oden',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nothing is said about the broth\'s seasoning; chikuwabu (a wheat-dough tube), fish cakes, wheat gluten (nama-fu) and the noodle and ramen finishes contain wheat. Plain items such as daikon, egg, konnyaku and tomato simmer in the same pot.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: everything simmers in one dashi broth, alongside beef tendon, beef tongue, fish cakes and oysters.',
    hours_raw: 'Mon–Fri 18:00–23:00; closed Saturday, Sunday and holidays, over New Year, and for the whole of August (Tabelog). Reservations taken; diners phone ahead for a seat (November 2025, January 2026) and call it hard to book (February 2026). No appetizer (otoshi) charge per the listing, though a December 2025 diner found an unexplained ¥500 added to the bill. 15 seats at a U-shaped counter around the pot; hire for up to 20; smoking allowed (Tabelog). The toilet is on the third floor of the building, in an empty, dark floor (November 2025). Cards (VISA, Master, JCB, AMEX, Diners), e-money and QR (Tabelog). Takeaway (Tabelog). Opened 24 February 1992 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yotsuya 1-8, Nakagawa Bldg B1F, on Shinmichi-dōri — 2 min from JR and Namboku Line Yotsuya Stn; ↑↑↓↓←→←→BABA is in the same basement',
    cuisine: 'Oden counter with a gentle, clear dashi (2025–26 reviews) · classics: daikon, egg, konnyaku, chikuwabu, potato, taro, octopus, beef tendon; made to order (10–15 minutes in the pot): house tsukune and ganmodoki, conger-eel chikuwa, fresh yuba, nama-fu, koya-dofu, a fukuro of five vegetables and three mushrooms, steamed onion, blanched cherry tomatoes, Camembert, fried mochi, beef tongue (Tabelog menu, last updated 2010: items ¥200–400, beef tongue ¥900; 2025–26 reviews) · also oysters, whelk and a soft-boiled egg (2025–26 reviews) · sides: fried ginkgo nuts (half portion possible), Saikyo-grilled black cod, dried komai from Akkeshi; finishes of dashi chazuke, dashi noodles, a lemon ramen and okonomiyaki (Tabelog menu; 2025–26 reviews) · ginger and mustard sauces on the counter · Japanese sake by the glass, a wide list (September 2026)',
    website: null, gmaps: gm('おでんやden 四谷1-8 中川ビル'), menu_url: MENU,
    notes: "[Oden · Yotsuya, a basement oden counter since 1992] A small basement room on Shinmichi-dōri with one U-shaped counter for 15 around the oden pots, open on weekday evenings since 1992. The broth is gentle and clear; one September 2026 diner drank every drop. Beside the classics (daikon, soft-boiled egg, konnyaku, beef tendon) come pieces that go into the pot when ordered and take 10 to 15 minutes: thick beef tongue, house tsukune and ganmodoki, fresh yuba, cherry tomatoes, Camembert, steamed onion, fried mochi, oysters in season, and a fukuro of vegetables and mushrooms. A diner on a fourth visit in December 2025 called it the best of the year and watched two cooks work the left and right pots. Finish with a lemon ramen or dashi chazuke. Calm rather than loud, good alone or with a friend; book or phone ahead. Closed weekends and all of August; smoking is allowed, and the toilet is up on an empty third floor.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 24 February 1992 (Tabelog).',
      background: 'No source names the owner or cooks. A December 2025 diner, on a fourth visit, wrote of "these two chefs" working different pots on the right and left and wondered whether the shop is family-run; nothing confirms it. Corporate-member Tabelog listing; its menu was last updated in 2010.',
      philosophy: null, specialty: 'Oden in a gentle dashi; beef tongue and made-to-order pieces.',
      anecdotes: [
        { text: '"How do they make the soft-boiled egg so delicious? And the oysters and octopus skewers are just amazing… The combination of these two chefs is truly unique." — December 2025.', source: R + 'B504231458/' },
        { text: '"I called around 5:30 PM. They had availability from 6:30 to 7:30 PM, so I decided to go… The koya tofu, mock goose, tsukune, and lemon ramen are definitely on my repeat list!" — November 2025.', source: R + 'B517906839/' },
        { text: '"The restroom is located on the third floor of the same building, in a tenant space that is currently unused, which can be quite intimidating (laughs)." — November 2025.', source: R + 'B517409880/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): おでんやden、おでん、四谷1-8 中川ビルB1F、JR・南北線四ツ谷駅から徒歩2分、丸ノ内線3分、月〜金18:00〜23:00、土日祝休み、年末年始と8月1日〜31日は休み、予約可、お通し代なし、15席 (カウンター)、喫煙可、カード・電子マネー・QR 可、テイクアウト、1992年2月24日オープン、メニュー (2010年更新): 大根、ちくわぶ、玉子、こんにゃくなど200円、牛すじ400円、注文してから鍋に入れる種 (10〜15分)、牛タン900円。口コミ(2025年11月〜2026年9月): U字のカウンター、やさしい出汁、牛タン、ミニトマト、カマンベール、揚げ餅、牡蠣、つぶ貝、ゆば、レモンラーメン、お好み焼き、生姜と辛子のたれ、2人の料理人、予約が取りにくい、日本酒の種類が多い、トイレは3階、会計に500円が加わったという声。',
      confidence: 'medium', sources: [TB, MENU, R + 'B375020502/', R + 'B504231458/', R + 'B517409880/', R + 'B517906839/', R + 'B518666005/', R + 'B522790446/', R + 'B525289263/', R + 'B530911275/', R + 'B536565486/', R + 'B536979173/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter seating around the pot; point at the pieces you want or ask for recommendations.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '東京都新宿区四谷1-8 中川ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.686527, 139.728759); cross-checked: GSI 東京都新宿区四谷一丁目8番地 (lot) 51m. Same building and floor as ↑↑↓↓←→←→BABA (tokyo_uramen_baba_yotsuya, address_ja "東京都新宿区四谷1-8 中川ビル B1F"), whose Tabelog point is 4 m away, so the pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [MENU, R + 'B517906839/', R + 'B517409880/'],
    price_note: 'Prices from the Tabelog menu, last updated 2010 (tax status unclear); likely changed. Items confirmed on the menu by 2025–26 reviews.', last_checked: TODAY, items: [
      it('', '', 'Oden: daikon', '¥200', 'Oden', 'ask', 'no', 'Tabelog menu (2010).', 'daikon'),
      it('', '', 'Oden: egg', '¥200', 'Oden', 'ask', 'no', 'Tabelog menu (2010).', 'egg'),
      it('', '', 'Oden: beef tendon', '¥400', 'Oden', 'ask', 'no', 'Tabelog menu (2010).', 'beef_tendon'),
      it('', '', 'Oden: beef tongue (made to order)', '¥900', 'Oden', 'ask', 'no', 'Tabelog menu (2010); thick and tender (November 2025, January 2026).', 'beef_tongue'),
      it('', '', 'Oden: Camembert (made to order)', '¥300', 'Oden', 'ask', 'no', 'Tabelog menu (2010).', 'camembert'),
      it('', '', 'Fried ginkgo nuts (half ¥400)', '¥800', 'Sides', 'ask', 'ask', 'Tabelog menu (2010).', 'ginkgo'),
    ] }, {
    cuisine: 'やさしく澄んだ出汁のおでんのカウンター (2025〜26年の口コミ)・定番: 大根、卵、こんにゃく、ちくわぶ、じゃがいも、里芋、たこ、牛すじ。注文してから鍋に入れる種 (10〜15分): 自家製のつくねとがんもどき、穴子のちくわ、生ゆば、生麩、高野豆腐、5種の野菜と3種のきのこの福袋、蒸し玉ねぎ、湯むきのミニトマト、カマンベール、揚げ餅、牛タン (食べログのメニュー、2010年更新: 種200〜400円、牛タン900円。2025〜26年の口コミ)・牡蠣、つぶ貝、半熟卵も (2025〜26年の口コミ)・一品: 銀杏の素揚げ (ハーフあり)、銀だらの西京焼き、Akkeshi の komai の丸干し。締めは出汁茶漬け、出汁そば、レモンラーメン、お好み焼き (食べログのメニュー、2025〜26年の口コミ)・カウンターに生姜と辛子のたれ・日本酒はグラスで、種類が多い (2026年9月)',
    neighborhood: '四谷1-8 中川ビルB1F、新道通り。JR・南北線四ツ谷駅から徒歩2分。同じ地下に↑↑↓↓←→←→BABA',
    gf_detail: '要確認。出汁の味付けについての説明はない。ちくわぶ、練り物、生麩、締めの麺やラーメンには小麦。大根、卵、こんにゃく、トマトなども同じ鍋で煮る。',
    vegan_detail: 'ヴィーガンではない。すべてひとつの出汁で、牛すじ、牛タン、練り物、牡蠣と一緒に煮る。',
    notes: '[おでん・四谷、1992年からの地下のおでんカウンター] 新道通りの地下の小さな店に、おでん鍋を囲むU字のカウンターが15席。1992年から平日の夜だけ開いている。出汁はやさしく澄んでいて、2026年9月の客は最後の一滴まで飲み干した。大根、半熟卵、こんにゃく、牛すじといった定番のほかに、注文してから鍋に入れて10〜15分かかる種もある: 厚い牛タン、自家製のつくねとがんもどき、生ゆば、ミニトマト、カマンベール、蒸し玉ねぎ、揚げ餅、季節の牡蠣、野菜ときのこの福袋。2025年12月に4回目の来店をした客は今年一番と書き、2人の料理人が左右の鍋を使い分けるのに見入った。締めはレモンラーメンか出汁茶漬け。にぎやかというより落ち着いた店で、ひとりでも友人とでも。予約か電話を。土日と8月は休み。喫煙可で、トイレは空きフロアの3階。',
  });
}

// ================================================================ ↑↑↓↓←→←→BABA
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13314230/'; const R = TB + 'dtlrvwlst/';
  const MENU = TB + 'dtlmenu/'; const PARTY = TB + 'party/';
  const W = day(['15:00', '24:00']); const E = day(['12:00', '24:00']);
  put({
    id: 'tokyo_uramen_baba_yotsuya', name: '↑↑↓↓←→←→BABA (Uramen)', category: 'OMNI',
    lat: 35.686498, lng: 139.728728, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No allergy information. Much of the menu is fried or wheat-based (chicken nanban, tempura, spring rolls, shumai, ramen), and sashimi comes with a sweet Kyushu soy sauce (June 2026); salt-koji tomato and mozzarella, raw oysters and the 15-grain rice balls may be easier to check.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The "salad for energy", nukazuke pickles, chilled tofu with condiments and the nagaimo sansho fries are the likeliest plant dishes, but the small starter on one July 2026 visit was fish with pickled cucumber, and the omelette is made with dashi.',
    hours_raw: 'Mon–Fri 15:00–24:00; Sat, Sun and holidays 12:00–24:00; last orders food 23:00, drinks 23:30 (Tabelog). Happy hour until 18:00 (June 2026 review). Reservations taken; table-only bookings, a 2-hour drinks plan ¥2,200 and party courses with 2 hours of drinks ¥5,000–6,000 (Tabelog). No sign outside: the pink door is down the stairs to the left of Balkan (June and September 2026 reviews). 16 seats per Tabelog (about 14 per a July 2026 reviewer), hire for up to 20; smoking allowed (Tabelog). Cards, e-money and QR including PayPay, Alipay and WeChat Pay (Tabelog). Opened 27 October 2025 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Yotsuya 1-8, Nakagawa Bldg B1F, on Shinmichi-dōri — 2 min from Yotsuya Stn; Odenya den is in the same basement, Balkan upstairs',
    cuisine: '"Longevity and prosperity" izakaya with a light, health-minded menu (Tabelog; menu prices tax included, updated March 2026) · four signatures: Gozo Roppu, a plate of several kinds of offal ¥1,628; dashi-maki omelette heaped with roe ¥968; meat shumai ¥528; three-kind sashimi ¥858 (seared bonito, yellowtail, sweet shrimp in 2026) · chicken nanban with shibazuke tartar ¥979 (half ¥748); nagaimo sansho fries ¥583; yodare chicken with Sichuan pepper ¥660; oyster mapo tofu ¥1,078; beef sirloin yukhoe ¥1,408; Iberico pork in salt koji ¥1,320; raw oysters ¥437; squid with green chilli and shottsuru ¥528 · 15-grain rice balls ¥682; "sinful" rich ramen ¥1,078; seafood fried rice ¥1,100; chestnut catalana ¥660 · sake from Kyushu and elsewhere, gari lemon sour, tea cocktails (2026 reviews)',
    website: null, gmaps: gm('↑↑↓↓←→←→BABA 四谷 中川ビル'), menu_url: MENU,
    notes: "[Izakaya · Yotsuya, a hidden basement sister of Balkan] No sign, just a pink door down the stairs to the left of Balkan, its sister bar upstairs: an exposed-concrete basement for about 16 that opened in October 2025 under a name written in arrows, which Tabelog romanises as \"Uramen\". The theme is longevity and prosperity, meaning lighter izakaya cooking: the Gozo Roppu offal plate, a dashi omelette under a heap of roe, chicken nanban with shibazuke tartar sauce, nagaimo fries with sansho, oyster mapo tofu, Sichuan-numbing yodare chicken, sashimi with sweet Kyushu soy sauce, and rice balls of 15 grains. 2026 diners found it good value at about ¥4,000 a head and popular with groups of women, and used for birthday plates and a wedding celebration. One June 2026 group found the service and the toilet lacking. Open from 15:00 on weekdays and noon at weekends to midnight; smoking allowed.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 27 October 2025 (Tabelog).',
      background: 'No source names the owner or cooks. Reviews call it a sister restaurant of "Yotsuya Balkans" / "Chijou no Balkans" on the floor above (May, June, August and September 2026), and an August 2026 diner was served "by the same staff from the sister restaurant". Corporate-member Tabelog listing: "We focus on urban health cuisine with the theme of \'longevity and prosperity\'… dishes that are gentle on the body while still being izakaya-style."',
      philosophy: '"Longevity and prosperity": healthy, beautifully served izakaya food (Tabelog).', specialty: 'Gozo Roppu offal plate; chicken nanban with shibazuke tartar; dashi-maki omelette.',
      anecdotes: [
        { text: '"There\'s no sign outside, but when I was a bit lost nearby, a staff member noticed and kindly approached me." — May 2026, about ¥4,000 per person.', source: R + 'B528532785/' },
        { text: '"If you go to the first floor where the sister restaurant, Balkans, is located, you can find our pink door by going down the stairs on the left side." — June 2026, ¥6,000 drinks course.', source: R + 'B530527552/' },
        { text: '"Above all, the chocolate message plate was absolutely lovely!" — August 2026.', source: R + 'B533924886/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ↑↑↓↓←→←→BABA (Uramen)、居酒屋・焼き鳥・魚介、四谷1-8 中川ビルB1F、四ツ谷駅から徒歩2分、月〜金15:00〜24:00、土日祝12:00〜24:00 (L.O. 料理23:00、ドリンク23:30)、16席、喫煙可、カード・電子マネー・QR 可、2025年10月27日オープン、テーマは「長寿と繁栄」、四大名物は Gozo Roppu 1,628円、出汁巻き玉子968円、肉焼売528円、鮮魚3点盛り858円、チキン南蛮979円、長芋の山椒フライ583円、牡蠣麻婆豆腐1,078円、2時間飲み放題付きコース5,000〜6,000円。口コミ(2026年5月〜10月): 看板のない地下、上の階の Balkan の姉妹店、ピンクの扉、柴漬けのタルタルのチキン南蛮、Kyushu の甘い刺身醤油、ハッピーアワーは18時まで、メッセージプレート、一人4,000円ほど。',
      confidence: 'medium', sources: [TB, MENU, PARTY, R + 'B528532785/', R + 'B528771098/', R + 'B529328185/', R + 'B529331411/', R + 'B530527552/', R + 'B530855395/', R + 'B532581591/', R + 'B533924886/', R + 'B535730498/', R + 'B537028570/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hard to find (no sign; pink door down the stairs); order from the menu at the table.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '東京都新宿区四谷1-8 中川ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing (menu updated March 2026, year-end courses posted); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.686498, 139.728728); cross-checked: GSI 東京都新宿区四谷一丁目8番地 (lot) 48m. Same building and floor as Odenya den (tokyo_odenya_den_yotsuya, address_ja "東京都新宿区四谷1-8 中川ビル B1F"), whose Tabelog point is 4 m away, so the pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, PARTY],
    price_note: 'Prices from the Tabelog menu (tax included, updated March 2026) and course page.', last_checked: TODAY, items: [
      it('', 'Gozo Roppu', 'Gozo Roppu: assorted offal plate', '¥1,628', 'Signatures', 'ask', 'no', 'Tabelog menu.', 'gozo_roppu'),
      it('', '', 'Dashi-maki omelette with roe', '¥968', 'Signatures', 'ask', 'no', 'Tabelog menu.', 'dashimaki'),
      it('', '', 'Three-kind fresh fish platter (2 or more)', '¥858', 'Signatures', 'ask', 'no', 'Tabelog menu; July 2026 review.', 'sashimi_3'),
      it('', '', 'Chicken nanban with shibazuke tartar', '¥979', 'Fried', 'no', 'no', 'Tabelog menu; half ¥748.', 'chicken_nanban'),
      it('', '', 'Nagaimo sansho fries', '¥583', 'Fried', 'ask', 'ask', 'Tabelog menu.', 'nagaimo_fries'),
      it('', '', 'Oyster mapo tofu', '¥1,078', 'Mains', 'ask', 'no', 'Tabelog menu.', 'oyster_mapo'),
      it('', '', 'Takumi course, 8 dishes, 2 hours of drinks', '¥5,000', 'Course', 'no', 'no', 'Tabelog (discounted from ¥6,000).', 'takumi_course'),
    ] }, {
    cuisine: '「長寿と繁栄」がテーマの、軽めで体を気づかう居酒屋 (食べログ。値段は税込み、2026年3月更新)・四大名物: 数種類のもつを盛った Gozo Roppu 1,628円、魚卵をたっぷりのせた出汁巻き玉子968円、肉焼売528円、鮮魚3点盛り858円 (2026年はかつおのたたき、ぶり、甘えび)・柴漬けのタルタルのチキン南蛮979円 (ハーフ748円)、長芋の山椒フライ583円、花椒のよだれ鶏660円、牡蠣の麻婆豆腐1,078円、牛サーロインのユッケ1,408円、イベリコ豚の塩麹焼き1,320円、生牡蠣437円、イカの青唐しょっつる528円・15穀米のおにぎり682円、濃厚な「罪深い」ラーメン1,078円、海鮮チャーハン1,100円、栗のカタラーナ660円・Kyushu などの日本酒、ガリのレモンサワー、お茶のカクテル (2026年の口コミ)',
    neighborhood: '四谷1-8 中川ビルB1F、新道通り。四ツ谷駅から徒歩2分。同じ地下におでんやden、上の階に Balkan',
    gf_detail: '要確認。アレルギーの案内はない。メニューは揚げ物や小麦を使うものが多く (チキン南蛮、天ぷら、春巻き、焼売、ラーメン)、刺身には Kyushu の甘い醤油 (2026年6月)。塩麹のトマトとモッツァレラ、生牡蠣、15穀米のおにぎりは確認しやすいかも。',
    vegan_detail: '要確認。植物性でいけそうなのは元気が出るサラダ、ぬか漬け、薬味の冷奴、長芋の山椒フライ。ただし2026年7月のお通しは魚ときゅうりの漬物で、出汁巻き玉子には出汁。',
    notes: '[居酒屋・四谷、Balkan の地下の隠れた姉妹店] 看板はなく、姉妹店の Balkan の左の階段を下りるとピンクの扉。打ちっぱなしのコンクリートの地下に16席ほど、2025年10月オープン。店名は矢印で書き、食べログのローマ字表記は「Uramen」。テーマは長寿と繁栄で、居酒屋料理を軽めに: もつの盛り合わせ Gozo Roppu、魚卵をのせた出汁巻き玉子、柴漬けのタルタルのチキン南蛮、山椒をきかせた長芋のフライ、牡蠣の麻婆豆腐、花椒でしびれるよだれ鶏、Kyushu の甘い醤油で食べる刺身、15穀米のおにぎり。2026年の口コミでは一人4,000円ほどで満足、女性のグループに人気で、誕生日のプレートや結婚祝いの席にも。2026年6月のあるグループは接客とトイレに不満を書いている。平日は15時、週末は正午から深夜0時まで。喫煙可。',
  });
}

// ================================================================ ビストロ モンブレ
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13258629/'; const R = TB + 'dtlrvwlst/';
  const L = day(['11:30', '14:00'], ['18:00', '23:00']);
  put({
    id: 'tokyo_montbellet_yotsuya', name: 'ビストロ モンブレ (montbellet)', category: 'OMNI',
    lat: 35.686419, lng: 139.728669, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nothing is said about gluten; lunches come with bread or rice (your choice), and the menu includes a seafood gratin, Genovese pasta, pâté de campagne and cakes.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Mains are fish, duck, venison or beef tongue, with butter sauces such as beurre blanc and caper butter; the small vegetable starters (ratatouille, carrot salad, paprika mousse) are the only plant-led dishes named.',
    hours_raw: 'Mon–Sat lunch 11:30–14:00 (last order 13:30), dinner 18:00–23:00 (last order 21:30); closed Sunday; generally open for lunch and dinner on holidays (Tabelog). Cash only: no cards, e-money or QR (Tabelog). Reservations taken; lunch fills fast, so arrive around 11:30 or just before 12:30 (December 2025, August 2026). 12 seats at about three tables; hire up to 15 seated or 30 standing; non-smoking (Tabelog; February and June 2026 reviews). Opened 23 April 2021 (Tabelog).',
    hours: { 0: L, 1: L, 2: L, 3: L, 4: L, 5: L }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Yotsuya 1-8-14 B1F, below the Yoshinoya facing the Yotsuya-mitsuke intersection — 2 min from Yotsuya Stn; a La Bouteille is on the same basement floor',
    cuisine: 'Small neighbourhood bistro · lunch: fish of the week (sea bream with porcini sauce or beurre blanc, sea bass with caper butter) or seafood gratin, with three small starters (soup such as sweet-potato or chilled pumpkin, pâté de campagne, carrot or pumpkin salad, ratatouille), bread or rice: ¥1,350 (December 2025), ¥1,500 (August–September 2026); dessert ¥400 (tea chiffon cake, castagna, tiramisu); iced coffee ¥300 · dinner: ¥5,500 course (snow-crab soup, starters, Genovese pasta, duck, rum-raisin dessert; June 2026) or à la carte: snow-crab flan, white liver mousse, paprika mousse, seafood gratin, Ezo venison steak, beef tongue in red wine, duck in red wine, rum-raisin nougat glacé; homemade sangria (2025–26 reviews)',
    website: null, gmaps: gm('ビストロ モンブレ 四谷1-8-14'), menu_url: null,
    notes: "[French · Yotsuya, a three-table bistro run by a cook and a talker] Down flower-lined stairs below the Yoshinoya at the Yotsuya-mitsuke crossing, a 12-seat bistro opened in 2021 and run, as diners describe it, by a shy chef in the kitchen and a front-of-house server whose fast, comic explanations of every dish become part of the meal. Lunch is the bargain: the fish of the week, crisp-skinned sea bream or sea bass with porcini, beurre blanc or caper-butter sauce, after a soup and two small starters, for ¥1,350–1,500, with cakes at ¥400; on one August 2026 day it was full by 11:45. At night there is a ¥5,500 course or dishes such as snow-crab flan, the paprika mousse and liver pâté one repeat diner always orders, a carefully browned seafood gratin, Ezo venison and beef tongue braised in red wine. A February 2026 diner called it the local bistro worth keeping secret and paid about ¥6,000 with two drinks. Cash only; closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 23 April 2021 (Tabelog).',
      background: 'No source names the chef or owner. "The service staff, with their strong personalities, and the shy chef make a great team" (February 2026); "the restaurant is run by a dedicated team of the front-of-house staff and the chef" (August 2026). The corporate-member listing gives the shop\'s motto as bringing happiness to everyone it connects with.',
      philosophy: 'Bringing happiness to everyone it connects with, enriching their hearts (Tabelog, machine-translated).', specialty: 'Fish lunch; seafood gratin; paprika mousse and liver pâté.',
      anecdotes: [
        { text: '"At first, I felt a bit overwhelmed by the staff\'s enthusiastic chatter, but it gradually became entertaining, and by the end, I found myself engaging with them." — February 2026, dinner, just over ¥6,000 per person.', source: R + 'B523170361/' },
        { text: '"I ordered the weekly fish lunch, which featured grilled Madai with beurre blanc sauce for JPY 1500… As always, the staff provided a detailed explanation of the ingredients, even if they spoke quickly." — August 2026.', source: R + 'B502511451/' },
        { text: '"I arrived right on time for opening. By around 11:45, the place was already fully booked." — August 2026.', source: R + 'B533651765/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ビストロ モンブレ (montbellet)、ビストロ・ダイニングバー、四谷1-8-14 B1F、四谷見附交差点から見て牛丼チェーンのビルの地下、四ツ谷駅から徒歩2分、月〜土11:30〜14:00 (L.O.13:30)・18:00〜23:00 (L.O.21:30)、日曜休み、祝日はおおむね営業、カード・電子マネー・QR 不可、12席、禁煙、2021年4月23日オープン。口コミ(2025年7月〜2026年9月): 週替わりの魚のランチ1,350〜1,500円 (鯛やスズキ、ポルチーニやブールブラン)、前菜3品とスープ、パンかライス、デザート400円、夜の5,500円のコース、ズワイガニのフラン、パプリカのムース、レバーのパテ、シーフードグラタン、Ezo 鹿、牛タンの赤ワイン煮、ラムレーズンのヌガーグラッセ、早口でユーモアのある説明、シャイなシェフ、テーブル3つほど、昼は11:45に満席。',
      confidence: 'medium', sources: [TB, R + 'B502511451/', R + 'B509872036/', R + 'B517146550/', R + 'B519237842/', R + 'B520830047/', R + 'B523170361/', R + 'B524581007/', R + 'B529762341/', R + 'B533300737/', R + 'B533651765/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Each dish is explained at length and quickly (August 2026); cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '東京都新宿区四谷1-8-14 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.686419, 139.728669); cross-checked: GSI 東京都新宿区四谷一丁目8番地 (lot) 44m. Same basement as a La Bouteille (tokyo_a_la_bouteille_yotsuya, address_ja "東京都新宿区四谷1-8-14 四谷一丁目ビル B1F"; both below the Yoshinoya), 7 m away, so the pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B519237842/', R + 'B502511451/', R + 'B520830047/', R + 'B529762341/'],
    price_note: 'Prices from 2025–26 reviews; Tabelog lists no menu.', last_checked: TODAY, items: [
      it('', '', 'Fish lunch of the week with three starters and bread or rice', '¥1,500', 'Lunch', 'ask', 'no', 'August–September 2026; ¥1,350 in December 2025.', 'fish_lunch'),
      it('', '', 'Fish lunch with dessert', '¥1,900', 'Lunch', 'ask', 'no', 'January 2026 review.', 'fish_lunch_dessert'),
      it('', '', 'Dessert of the day (e.g. tea chiffon cake)', '¥400', 'Desserts', 'no', 'no', 'September 2026 review.', 'dessert'),
      it('', '', 'Dinner course', '¥5,500', 'Course', 'ask', 'no', 'June 2026 review.', 'dinner_course'),
    ] }, {
    cuisine: '小さな街のビストロ・ランチ: 週替わりの魚 (鯛のポルチーニソースやブールブラン、スズキのケッパーバター) かシーフードグラタンに、小さな前菜3品 (さつまいもや冷たいかぼちゃのスープ、パテ・ド・カンパーニュ、人参やかぼちゃのサラダ、ラタトゥイユ)、パンかライス: 1,350円 (2025年12月)、1,500円 (2026年8〜9月)。デザート400円 (紅茶のシフォンケーキ、castagna、ティラミス)、アイスコーヒー300円・夜: 5,500円のコース (ズワイガニのスープ、前菜、ジェノベーゼのパスタ、鴨、ラムレーズンのデザート。2026年6月) かアラカルト: ズワイガニのフラン、白レバーのムース、パプリカのムース、シーフードグラタン、Ezo 鹿のステーキ、牛タンの赤ワイン煮、鴨の赤ワインソテー、ラムレーズンのヌガーグラッセ。自家製サングリア (2025〜26年の口コミ)',
    neighborhood: '四谷1-8-14 B1F、四谷見附の交差点に面した吉野家の地下。四ツ谷駅から徒歩2分。同じ地下に a La Bouteille',
    gf_detail: '要確認。グルテンの説明はない。ランチはパンかライスを選べる。シーフードグラタン、ジェノベーゼのパスタ、パテ・ド・カンパーニュ、ケーキも。',
    vegan_detail: '要確認。メインは魚、鴨、鹿、牛タンで、ブールブランやケッパーバターなどバターのソース。植物性が中心なのは小さな野菜の前菜 (ラタトゥイユ、人参のサラダ、パプリカのムース) くらい。',
    notes: '[フレンチ・四谷、料理人と話し手の3卓のビストロ] 四谷見附の交差点の吉野家の地下、花で飾られた階段を下りた2021年開業の12席のビストロ。口コミによれば、厨房のシャイなシェフと、すべての皿を早口でおもしろく説明するホールのスタッフの2人で切り盛りし、その説明も食事の楽しみ。お得なのはランチで、スープと小さな前菜2品のあとに週替わりの魚 (皮のパリッとした鯛やスズキにポルチーニ、ブールブラン、ケッパーバター) が1,350〜1,500円、ケーキは400円。2026年8月のある日は11時45分に満席。夜は5,500円のコースか、ズワイガニのフラン、2回目の客がいつも頼むというパプリカのムースとレバーのパテ、焼き色の美しいシーフードグラタン、Ezo 鹿、牛タンの赤ワイン煮など。2026年2月の客は秘密にしておきたい街のビストロと呼び、飲み物2杯で6,000円ほど。現金のみ、日曜休み。',
  });
}

save();
