// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles) — lane osw10 (circle yotsuya), batch 14.
//   + モヒーニ 四谷店 MOHINI (12-seat tea specialty shop in a house, run solo by a tea-expert owner)
//   + 燕食堂 Tsubame Shokudo (62-seat bistro in a renovated old house at the end of an alley; organic-vegetable lunch plates)
//   + 台湾屋台新台北 Taiwan Yatai Shintaipei (25-seat Taiwanese-Chinese restaurant run by a couple; chuka soba praised by ramen fans)
//   + ミバショウ Mibashou (banana-juice shop with daily hot sandwiches and soup; take-out only since December 2021)
//   Chain check. MOHINI: one listing ("Yotsuya ten"; moved from Akebonobashi in October 2013), no other branch found.
//   Tsubame Shokudo: one listing; not related to Tsubame Grill (the only "Tsubame" in data). Shintaipei: one listing.
//   Mibashou: a second shop, ミバショウ 北千住マルイ, appears in a Time Out Tokyo listing — 2 shops, a small group (drafted).
//   None is in data/tokyo.json (grep by name, Tabelog id and address). No skips: the first four non-data entries.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw10-14');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ モヒーニ 四谷店
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130903/13161719/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '19:00']);
  put({
    id: 'tokyo_mohini_tea_yotsuya', name: 'モヒーニ 四谷店 (MOHINI)', category: 'OMNI',
    lat: 35.686796, lng: 139.72409, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pot tea is the menu; the food is a few cakes and scones, which are wheat-based. Nothing gluten-free is described.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Straight tea is served by the pot; scones come with clotted cream, and milk tea and cheesecake contain dairy.',
    hours_raw: 'Tue–Sun 12:00–19:00; closed Monday (Tabelog). Reservations taken (Tabelog). Cash only: no cards, e-money or QR (Tabelog; a June 2024 diner paid cash after the meal). 12 seats at six 2-seat tables; non-smoking (Tabelog; January 2026). Tea leaves sold to take home, around 140 kinds (February 2026). Moved here from Akebonobashi in October 2013 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Wakaba 1-4, a house down a narrow residential alley off Shinjuku-dōri — 7 min from Yotsuya Stn and from Yotsuya-sanchome Stn',
    cuisine: 'Tea specialty shop: black teas from many gardens and seasons — Chinese to Indian, spring to autumn picks — with an explanation of each on the menu (2025 reviews) · served by the pot, about three cups: house blend "Mohini" ¥630, Safari Kenya ¥630, Uva ¥680, seasonal Sri Lankan estate teas ¥630, Earl Grey, cardamom chai, lotus tea, iced and royal milk teas (2024–26 reviews) · a few cakes: scones with clotted cream and homemade apple jam ¥450, baked cheesecake, seasonal tarts (2023–26 reviews) · certified by the Japan Tea Association (January 2025 review)',
    website: null, gmaps: gm('モヒーニ 四谷店 紅茶'), menu_url: null,
    notes: "[Café · Yotsuya, a one-person tea house in a residential alley] A small tea specialty shop on the ground floor of a house down a quiet alley between Yotsuya and Yotsuya-sanchome, with tea canisters lining the walls, jazz playing and six two-seat tables. The owner runs it alone and loves to talk tea: why it should be hot, why water matters as much as for soba or sake, how to brew and how to crush cardamom for chai at home. Each tea comes in a pot of about three cups that deepen as you go, from ¥630, with small scones and clotted cream on the side; around 140 teas are sold by the leaf. One diner warns that it isn't the place for a silent cup: [the owner] talked tea for 45 minutes. Closed Mondays; cash only.",
    chef_bio: { chef_name: null, roles: ['Owner, runs the shop alone (January 2026 review)'], origin: 'Moved from Akebonobashi to the current location in October 2013 (Tabelog).',
      background: 'No source names the owner. Reviewers describe a very knowledgeable owner with "a philosophical approach" (June 2025) who "runs the shop solo… passionately teaching the best ways to enjoy tea" (January 2026) and explains each tea to guests (December 2025, February 2026). A January 2025 reviewer calls it a shop certified by the Japan Tea Association.',
      philosophy: 'Tea should be served hot; water quality matters as much as for soba, tofu and sake; a pot of three cups because each cup tastes different (2025–26 reviews).', specialty: 'Pot-brewed black tea; scones.',
      anecdotes: [
        { text: '"The owner runs the shop solo, creating a relaxed atmosphere while passionately teaching the best ways to enjoy tea." — January 2026.', source: R + 'B521314780/' },
        { text: '"Just like soba, tofu, and sake, the quality of water is also essential for tea. The reason for the three cups in the pot is that each cup offers a different flavor experience." — December 2025.', source: R + 'B519018282/' },
        { text: '"I stayed for about 45 minutes… It may not be the best spot for those seeking a leisurely tea experience, but for anyone interested in tea discussions, it\'s a must-visit." — February 2024.', source: R + 'B480491124/' },
        { text: '"According to the tea expert owner, tea should definitely be served hot." — February 2026.', source: R + 'B522962275/' },
      ],
      japanese_sources_summary: '食べログ: モヒーニ 四谷店、カフェ・ケーキ、若葉1-4、四ツ谷駅・四谷三丁目駅から徒歩7分、火〜日12:00〜19:00、月曜休み、予約可、カード・電子マネー・QR不可、12席 (2人掛けテーブル6卓)、禁煙、2013年10月に曙橋から移転。口コミ(2023年〜2026年): 住宅街の路地の一軒家、店主が一人で営む紅茶専門店、紅茶はポットで約3杯分、Mohini 630円、Safari Kenya 630円、Uva 680円、Earl Grey、カルダモンのチャイ、ロイヤルミルクティー、スコーンにクロテッドクリームと自家製りんごジャム450円、ベイクドチーズケーキ、季節のタルト、茶葉の販売は約140種類、Japan Tea Association の認定店という記述。',
      confidence: 'medium', sources: [TB, R + 'B280277217/', R + 'B462117333/', R + 'B468756585/', R + 'B480491124/', R + 'B487044380/', R + 'B488470210/', R + 'B500372354/', R + 'B519018282/', R + 'B521314780/', R + 'B522415094/', R + 'B522962275/', R + 'B537758536/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Seated and ordered at the table, pay after; the owner explains teas at length, in Japanese in the reviews.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都新宿区若葉1-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026. The website on the listing (mohini-tea.com) did not respond on ' + TODAY + '.' },
    pin_source: `Tabelog ${TB} (35.686796, 139.72409); cross-checked: GSI 東京都新宿区若葉一丁目4番地 (lot) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B519018282/', R + 'B521314780/', R + 'B522415094/', R + 'B468756585/'],
    price_note: 'Prices from 2023–26 reviews; teas are a pot of about three cups.', last_checked: TODAY, items: [
      it('', '', 'Mohini (house tea), pot', '¥630', 'Tea', 'ask', 'ask', 'December 2025 review (¥580 in July 2023).', 'mohini_tea'),
      it('', '', 'Safari Kenya, pot', '¥630', 'Tea', 'ask', 'ask', 'January 2026 review.', 'safari_kenya'),
      it('', '', 'Uva, pot', '¥680', 'Tea', 'ask', 'ask', 'February 2026 review.', 'uva'),
      it('', '', 'Scone with clotted cream and jam', '¥450', 'Cakes', 'no', 'no', 'February 2026 review (¥400 in July 2024).', 'scone'),
      it('', '', 'Baked cheesecake', '¥400', 'Cakes', 'ask', 'no', 'July 2023 review.', 'cheesecake'),
    ] }, {
    cuisine: '紅茶専門店: 産地や季節の違う紅茶をそろえ、中国からインドまで、春摘みから秋摘みまで、メニューにそれぞれの説明がある (2025年の口コミ)・ポットで約3杯分: Mohini 630円、Safari Kenya 630円、Uva 680円、季節のスリランカの茶園の紅茶630円、Earl Grey、カルダモンのチャイ、ハスの花のお茶、アイスティー、ロイヤルミルクティー (2024〜26年の口コミ)・ケーキは少し: クロテッドクリームと自家製りんごジャムを添えたスコーン450円、ベイクドチーズケーキ、季節のタルト (2023〜26年の口コミ)・Japan Tea Association の認定店 (2025年1月の口コミ)',
    neighborhood: '若葉1-4、新宿通りから入った住宅街の細い路地の一軒家。四ツ谷駅、四谷三丁目駅から徒歩7分',
    gf_detail: '要確認。メニューはポットの紅茶が中心で、食べ物はケーキとスコーンが少しだけで小麦を使う。グルテンフリーの記述はない。',
    vegan_detail: '要確認。ストレートティーはポットで出る。スコーンにはクロテッドクリーム、ミルクティーやチーズケーキには乳製品。',
    notes: '[カフェ・四谷、住宅街の路地の一人で営む紅茶の店] 四ツ谷と四谷三丁目のあいだ、静かな路地の一軒家の1階にある小さな紅茶専門店。壁に茶缶が並び、ジャズが流れ、2人掛けのテーブルが6卓。店主が一人で営み、紅茶の話が大好き。熱いうちに飲むべき理由、そばや酒と同じく水が大事なこと、家での淹れ方やチャイのカルダモンのつぶし方まで教えてくれる。紅茶はポットで約3杯分、杯ごとに味が深まり、630円から。小さなスコーンにクロテッドクリームを添えて。茶葉は約140種類を量り売り。静かにお茶を飲むだけの店ではないという声もあり、45分間紅茶の話を聞いた人も。月曜休み、現金のみ。',
  });
}

// ================================================================ 燕食堂
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130904/13098356/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://tsubameshokudo.com/'; const MENU = SITE + 'menu/'; const PARTY = SITE + 'party/'; const ACCESS = SITE + 'access/';
  const H = day(['11:30', '14:00'], ['18:00', '22:00']);
  put({
    id: 'tokyo_tsubame_shokudo_ichigaya', name: '燕食堂 (Tsubame Shokudo)', category: 'OMNI',
    lat: 35.690525, lng: 139.731952, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Lunch plates come with brown rice (or bread on some sets), but bread is baked in house, dinner includes pasta, and sauces are not described; nothing gluten-free is stated.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. An October 2026 diner had a vegetable-only lunch plate (stewed vegetables, salad, mushrooms, okara and hijiki, brown rice and minestrone-style soup) and called it "almost vegan"; Tabelog lists vegetarian options. Ask about the soup and sauces.',
    hours_raw: 'Mon–Fri lunch 11:30–14:00 (last order 13:30) and dinner 18:00–22:00 (last order 21:30 on Tabelog; food 21:00, drinks 21:30 on the website); closed Saturday, Sunday and holidays, plus Golden Week and Obon (Tabelog; website). Weekends and holidays for private hire only (Tabelog). Reservations taken; the ¥2,500 lunch needs a booking, its upgrades by 20:00 the business day before; 100% fee for same-day course cancellations (website; Tabelog). Phone is easiest 18:00–21:00 (Tabelog). Cards, e-money and QR accepted; à la carte appetizer charge ¥330 (Tabelog). 62 seats over two floors (30 / 32), private rooms for 6 and 8; non-smoking; children welcome (Tabelog). Lunch fills by noon with office workers (2026 reviews). Lunch boxes to take away, by phone (Tabelog). Opened 6 October 2009 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ichigaya Honmura-chō 2-33, the last house at the end of a narrow signposted alley across the moat — 5–7 min from Ichigaya Stn, 8 min from Yotsuya Stn (website directions)',
    cuisine: 'Bistro in a renovated old house (Tabelog: Italian, bistro, wine bar): seasonal dishes from organic and low-pesticide vegetables sent direct from contract farms, including NAO FARM in Shimane; meat — Kirishima pork, Aomori duck, Hokkaido Ezo venison — ground, cured, aged and smoked in house; house-baked natural-yeast bread such as a rye campagne (website) · lunch plate ¥1,200: a daily or weekly main with salad, two vegetable sides, lightly milled brown rice and soup; organic coffee +¥100, mini dessert and coffee +¥300 (website); e.g. mackerel nanban-zuke, pork sauté with a nagaimo-natto-okra sauce, borscht, beef stroganoff, teriyaki yellowtail with sansho, chicken with cheese sauce, a vegetable-only plate (2026 reviews) · ¥2,500 lunch by reservation: fish carpaccio, sides, soup, rice or bread, dessert and coffee with smoked Kirishima pork shoulder, upgrades to fish, Budo beef, Ezo venison or black wagyu +¥1,000–1,500 (website) · dinner: small bistro plates of seasonal vegetables, pasta, meat (venison main ¥3,800 in October 2026), seasonal fruit tarts, gelato; courses with free-flow drinks (website; 2026 reviews) · Japanese wines all by the glass, natural wines, craft beer, cocktails; cheese from the mixed milk of goats and sheep raised on a Hokkaido farm (website)',
    website: SITE, gmaps: gm('燕食堂 市谷本村町'), menu_url: MENU,
    notes: "[Bistro · Ichigaya, a hidden old-house bistro with vegetable-packed lunches] The last house at the end of a narrow alley between Ichigaya and Yotsuya — you won't find it without the sign — renovated into a two-floor bistro with high ceilings, antique chairs and a spiral staircase; the shop says the house was once a writer's bookshop. At lunch office workers queue for the ¥1,200 plate: a daily main such as mackerel nanban-zuke or pork sauté, with salad, vegetable sides, brown rice (refills) and soup, or a vegetable-only version a diner called almost vegan. Dinner is small plates of farm vegetables, house-cured and smoked meats, pasta and Japanese wine by the glass, with free-flow courses for parties. One October 2026 group found it noisy, slow to bring the food menu, small-portioned and pricey, about ¥9,000 a head; another praised the service on a busy day. Weekdays only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 6 October 2009 (Tabelog).',
      background: 'No source names the chef or owner. The website: vegetables direct from contract farms, many of them friends of the chef; all meat prepared in the shop\'s kitchen from grinding, curing and aging to finishing; bread baked in the kitchen; Japanese wines chosen after tasting. The party page describes the building as a renovated house that was a writer\'s bookshop, available for weddings and space hire.',
      philosophy: '"Ingredients whose makers\' faces you can see… dishes that let you feel the four seasons" (website, translated).', specialty: 'Vegetable-heavy lunch plates; house-smoked meats; Japanese wine.',
      anecdotes: [
        { text: '"I ordered the vegetable-only lunch plate… This menu is almost vegan, making it perfect for those looking to reset their bodies or control their calorie intake." — October 2026.', source: R + 'B537080245/' },
        { text: '"If it weren\'t for the sign at the entrance of the alley, I wouldn\'t have found the restaurant since it\'s tucked away at the end of a narrow path." — July 2026.', source: R + 'B531677735/' },
        { text: '"The food was tasty, but the portions were on the smaller side… The total bill for four people came to just over JPY 9000 per person." — October 2026, dinner.', source: R + 'B537336050/' },
      ],
      japanese_sources_summary: '公式サイト: 古民家ビストロ 燕食堂、市谷本村町2-33、市ヶ谷駅から徒歩5分、四ツ谷駅から8分、路地の一番奥の一軒家、ランチ11:30〜14:00 (L.O.13:30)、ディナー18:00〜22:00 (L.O.21:00、ドリンク21:30)、土日祝休み、農家直送の有機・減農薬野菜 (島根県江津市の NAO FARM)、霧島ポーク、青森産鴨肉、北海道産エゾ鹿肉、肉の仕込みから仕上げまで店内で手造り、自家製の天然酵母パン、日本ワインはすべてグラスで、北海道亀田郡の山田農場のガロチーズ、ランチはメイン+サラダ+惣菜2種+三分づき玄米ご飯+スープ1,200円、産地直送2,500円ランチ (要予約)、作家さんの書店をリノベーションした一軒家。食べログ: イタリアン・ビストロ・ワインバー、62席 (1階30・2階32)、個室あり、禁煙、カード・電子マネー・QR可、お通し330円、2009年10月6日オープン。口コミ(2026年): 平日昼は会社員で満席、野菜だけのプレート、ディナーは量が少なめで高めという声。',
      confidence: 'medium', sources: [TB, SITE, MENU, PARTY, ACCESS, SITE + 'wine/', R + 'B524958199/', R + 'B531609307/', R + 'B531677735/', R + 'B533129024/', R + 'B535315452/', R + 'B535586660/', R + 'B535719605/', R + 'B536571341/', R + 'B536945783/', R + 'B537080245/', R + 'B537336050/', R + 'B537827508/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Daily lunch specials; at dinner the staff explain the menu at length (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区市谷本村町2-33',
    existence: { status: 'confirmed', checked: TODAY, note: 'Own website live (hours, menus, access) and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.690525, 139.731952); cross-checked: GSI 東京都新宿区市谷本村町2番33号 (go) 28m. Mibashou (tokyo_mibashou_ichigaya, also 市谷本村町2-33, ART ICHIGAYA #02) has its own Tabelog point 10 m away; the two are separate premises in the same alley, so each keeps its own point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, R + 'B533129024/', R + 'B537336050/'],
    price_note: 'Lunch prices from the website menu page; other prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch plate: main, salad, two sides, brown rice and soup', '¥1,200', 'Lunch', 'ask', 'no', 'Website; daily or weekly main (e.g. borscht set, August 2026).', 'lunch_plate'),
      it('', '', 'Vegetable-only lunch plate', '', 'Lunch', 'ask', 'ask', 'October 2026 review; price not given.', 'veg_plate'),
      it('', '', 'Farm-direct ¥2,500 lunch with smoked Kirishima pork shoulder', '¥2,500', 'Lunch', 'ask', 'no', 'Website; reservation required; upgrades +¥1,000–1,500.', 'lunch_2500'),
      it('', '', 'Organic coffee with lunch', '+¥100', 'Lunch', 'ask', 'ask', 'Website.', 'coffee_addon'),
      it('', '', 'Venison main (dinner)', '¥3,800', 'Dinner', 'ask', 'no', 'October 2026 review.', 'venison'),
    ] }, {
    cuisine: '古民家をリノベーションしたビストロ (食べログ: イタリアン、ビストロ、ワインバー): 契約農家から直送の有機・減農薬野菜 (島根県江津市の NAO FARM など) で四季を感じる料理。霧島ポーク、青森産鴨肉、北海道産エゾ鹿肉を店内で挽き、塩漬けし、熟成させ、燻製に。自家製の天然酵母パンはライ麦のカンパーニュなど (公式サイト)・ランチプレート1,200円: 日替わりか週替わりのメインにサラダ、野菜の惣菜2種、三分づき玄米ご飯、スープ。有機コーヒー +100円、プチデザートと有機コーヒー +300円 (公式サイト)。例えばサバの南蛮漬け、長芋・納豆・オクラのソースのポークソテー、ボルシチ、ビーフストロガノフ、山椒をきかせたブリの照り焼き、チーズソースのチキン、野菜だけのプレート (2026年の口コミ)・要予約の2,500円ランチ: 鮮魚のカルパッチョ、副菜、スープ、ご飯かパン、プチデザートとコーヒーに霧島豚肩ロースの瞬間燻製ロースト。鮮魚、ぶどう牛、蝦夷しか、黒毛和牛へのグレードアップ +1,000〜1,500円 (公式サイト)・ディナー: 季節の産直野菜のビストロ小皿料理、パスタ、肉料理 (2026年10月は鹿肉のメイン3,800円)、季節の果物のタルト、ジェラート。飲み放題付きのコースも (公式サイト、2026年の口コミ)・日本ワインはすべてグラスで、ナチュラルワイン、クラフトビール、カクテル。北海道の山田農場の山羊と羊の混合乳のガロチーズ (公式サイト)',
    neighborhood: '市谷本村町2-33、堀の向こう側、看板のある細い路地の一番奥の一軒家。市ケ谷駅から徒歩5〜7分、四ツ谷駅から8分 (公式サイトの道案内)',
    gf_detail: '要確認。ランチのプレートは玄米ご飯 (セットによってはパンも) だが、パンは店で焼き、ディナーにはパスタもあり、ソースの記述はない。グルテンフリーの記述はない。',
    vegan_detail: '要確認。2026年10月の客は野菜だけのランチプレート (野菜の煮物、サラダ、きのこ、おからとひじき、玄米ご飯、ミネストローネ風のスープ) を「ほぼヴィーガン」と書いている。食べログではベジタリアンメニューあり。スープやソースは確認を。',
    notes: '[ビストロ・市ヶ谷、野菜たっぷりのランチの隠れ家古民家ビストロ] 市ヶ谷と四ツ谷のあいだ、細い路地の一番奥の一軒家。看板がなければ見つからない。天井が高く、アンティークの椅子とらせん階段のある2階建てのビストロに改装され、店によると元は作家さんの書店だった建物。昼は会社員が1,200円のプレートに並ぶ。サバの南蛮漬けやポークソテーなど日替わりのメインに、サラダ、野菜の惣菜、玄米ご飯 (おかわり可)、スープ。野菜だけのプレートは「ほぼヴィーガン」という客も。夜は産直野菜の小皿、自家製の塩漬けや燻製の肉、パスタ、グラスの日本ワイン。宴会には飲み放題のコースも。2026年10月のあるグループはうるさく、料理のメニューが来るのが遅く、量が少なく高い (1人約9,000円) と書いたが、忙しい日のサービスをほめる客も。平日のみ営業。',
  });
}

// ================================================================ 台湾屋台新台北
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130903/13089350/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '14:00'], ['17:00', '22:00']);
  put({
    id: 'tokyo_taiwan_yatai_shintaipei_yotsuya', name: '台湾屋台新台北 (Taiwan Yatai Shintaipei)', category: 'OMNI',
    lat: 35.690955, lng: 139.72838, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles, gyoza and soy-sauce broths and dressings.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken and animal-stock broths, chashu, braised beef and pork, sausage.',
    hours_raw: 'Mon–Fri 11:00–14:00 and 17:00–22:00 (last order 21:30); closed Saturday, Sunday and holidays, though reserved parties are taken on those days (Tabelog). A January 2025 diner found it closed on a weekday. Cash only: no cards, e-money or QR (Tabelog). No service charge (the Tabelog Japanese text says なし; the English machine translation wrongly shows 10%). 25 seats; hire for up to 20 or 20–50; smoking allowed, at lunch too (Tabelog; April 2026). Course dinners with free-flow drinks for groups (May 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Yotsuya Sakamachi 9-7, in the alley from the Ministry of Defense towards Yotsuya — 5 min from Akebonobashi Stn, 8 min from Ichigaya and Yotsuya Stns',
    cuisine: 'Long-running Taiwanese-style Chinese restaurant (2024 reviews) · chuka soba ¥1,000: soy broth with a strong chicken and animal-stock flavour, very thin straight egg noodles (curly on request), chashu, seasoned egg, komatsuna and menma (2024–26 reviews); chicken soba ¥800 (June 2024) · Taiwanese beef noodles ¥1,250, spicy, medium or regular, with braised beef belly; Taiwan yakisoba ¥1,200; dan dan noodles; chilled Chinese noodles ¥1,300 in summer (2024–25 reviews) · fried rice ¥1,000, braised pork rice (lu rou fan), gyoza, Taiwanese sausage, kara-age, mapo tofu; Shaoxing wine; dinner courses with free-flow highballs (2024–26 reviews)',
    website: null, gmaps: gm('台湾屋台新台北 四谷坂町'), menu_url: null,
    notes: "[Chinese · Yotsuya, a couple-run Taiwanese diner that ramen fans make a pilgrimage to] A plain, local Chinese room with a golden fortune-god statue at the back, in the alley between the Ministry of Defense and Yotsuya, run by a couple — \"a father and mother team\", as a regular of years puts it. Ramen enthusiasts call it a holy site: the head of the Ganko Ichijo ramen school praised its chuka soba, a salty, deeply chickeny soy bowl with very thin straight noodles. The Taiwanese menu runs to beef noodles (toned down for Japanese palates unless you ask for more heat), Taiwan yakisoba and dan dan noodles, plus fried rice regulars rave about, gyoza and Taiwanese sausage; groups book course dinners with free-flow highballs. Most dishes are about ¥1,000. Smoking allowed; cash only; weekdays only.",
    chef_bio: { chef_name: null, roles: ['Run by a couple (July 2026 review)'], origin: null,
      background: 'No source names the owners. "A cozy restaurant run by a father and mother team" (July 2026, a regular of years). A November 2024 diner was asked by a friendly woman on staff whether the beef noodles were spicy enough, and was told the heat is toned down for Japanese customers but can make it much spicier. A golden fortune-god statue at the back "suggesting the restaurant\'s Chinese roots" (November 2024). Ramen fans call it a holy site, "loved by the founder of the Ganko Ichijo school and featured in the TRY guide" (May 2024); a November 2025 Japanese review mentions the chuka soba the head of the school raved about.',
      philosophy: null, specialty: 'Chuka soba; Taiwanese beef noodles; fried rice.',
      anecdotes: [
        { text: '"It\'s a cozy restaurant run by a father and mother team. I\'ve lost count of how many times I\'ve visited." — July 2026.', source: R + 'B435989410/' },
        { text: '"When ordering, I was asked if I wanted thin or curly noodles… when I mentioned \'Ganko,\' [the staff] quickly noted, \'Ah, thin noodles, right?\' with a smile." — May 2024.', source: R + 'B486137901/' },
        { text: '"[The woman on staff] explained that they usually tone it down since many Japanese aren\'t fond of spicy food. However, [the woman on staff] also added that if I enjoyed extra heat, they could make it much spicier." — November 2024, Taiwanese beef noodles.', source: R + 'B495362830/' },
      ],
      japanese_sources_summary: '食べログ: 台湾屋台新台北、台湾料理・ラーメン・バー、四谷坂町9-7、曙橋駅から徒歩5分、市ケ谷駅・四ツ谷駅から8分、月〜金11:00〜14:00・17:00〜22:00 (L.O.21:30)、土日祝休み (予約は受付)、カード・電子マネー・QR不可、サービス料なし、25席、喫煙可。口コミ(2024年〜2026年): 夫婦で営む店、中華そば1,000円 (細いストレート麺、縮れ麺も選べる)、一条流がんこラーメン総本家の家元が絶賛した中華そば、台湾の牛肉麺1,250円 (辛さは控えめ、頼めば辛くできる)、台湾焼きそば1,200円、担々麺、冷やし中華1,300円、炒飯1,000円、lu rou fan、gyoza、台湾ソーセージ、紹興酒、飲み放題付きのコース。',
      confidence: 'medium', sources: [TB, R + 'B435989410/', R + 'B486137901/', R + 'B490936459/', R + 'B495362830/', R + 'B499173151/', R + 'B500881559/', R + 'B505015510/', R + 'B508456729/', R + 'B509100506/', R + 'B516894423/', R + 'B527011687/', R + 'B527815062/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Menu posted on the wall; noodle type and spice level asked when ordering; smoking allowed; cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都新宿区四谷坂町9-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.690955, 139.72838); cross-checked: GSI 東京都新宿区四谷坂町9番7号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B527011687/', R + 'B495362830/', R + 'B490936459/', R + 'B516894423/', R + 'B509100506/'],
    price_note: 'Prices from 2024–26 reviews.', last_checked: TODAY, items: [
      it('中華そば', '', 'Chuka soba (soy ramen)', '¥1,000', 'Noodles', 'no', 'no', 'April 2026 review (¥950 in May 2024).', 'chuka_soba'),
      it('', '', 'Taiwanese beef noodles', '¥1,250', 'Noodles', 'no', 'no', 'November 2024 review; spicy, medium or regular.', 'beef_noodles'),
      it('', '', 'Taiwan yakisoba', '¥1,200', 'Noodles', 'no', 'no', 'June 2024 review.', 'taiwan_yakisoba'),
      it('', '', 'Chilled Chinese noodles', '¥1,300', 'Noodles', 'no', 'no', 'June 2025 review.', 'hiyashi_chuka'),
      it('炒飯', '', 'Fried rice', '¥1,000', 'Rice', 'ask', 'no', 'November 2025 review.', 'chahan'),
    ] }, {
    cuisine: '長く続く台湾風の中華料理店 (2024年の口コミ)・中華そば1,000円: 鶏と動物系のだしが強い醤油スープ、極細のストレート卵麺 (縮れ麺も選べる)、チャーシュー、味玉、小松菜、メンマ (2024〜26年の口コミ)。鶏そば800円 (2024年6月)・台湾の牛肉麺1,250円は辛い・やや辛い・普通から選べ、煮込んだ牛肉 (バラ) 入り。台湾焼きそば1,200円、担々麺、夏の冷やし中華1,300円 (2024〜25年の口コミ)・炒飯1,000円、lu rou fan、gyoza、台湾ソーセージ、kara-age、麻婆豆腐。紹興酒。飲み放題でハイボールも飲めるディナーのコース (2024〜26年の口コミ)',
    neighborhood: '四谷坂町9-7、防衛省から四谷へ抜ける路地。曙橋駅から徒歩5分、市ケ谷駅・四ツ谷駅から8分',
    gf_detail: 'グルテンフリーではない。小麦の麺、gyoza、醤油のスープやたれ。',
    vegan_detail: 'ヴィーガンではない。鶏や動物系のスープ、チャーシュー、牛肉や豚肉の煮込み、ソーセージ。',
    notes: '[中華・四谷、ラーメン好きが巡礼する夫婦の台湾料理店] 防衛省と四谷のあいだの路地にある、飾り気のない町の中華の店。奥には金色の福の神の像。夫婦で営み、常連は「お父さんとお母さん」の店と呼ぶ。ラーメン好きには聖地で、一条流がんこラーメン総本家の家元が絶賛した中華そばは、塩気が強く鶏の味が濃い醤油スープに極細のストレート麺。台湾の料理は牛肉麺 (日本人向けに辛さを控えめにしているが、頼めば辛くしてくれる)、台湾焼きそば、担々麺。常連が絶賛する炒飯、gyoza、台湾ソーセージも。グループは飲み放題でハイボールも飲めるコースを予約する。たいていの料理は1,000円前後。喫煙可、現金のみ、平日のみ営業。',
  });
}

// ================================================================ ミバショウ
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130904/13194543/'; const R = TB + 'dtlrvwlst/';
  const H = day(['08:00', '16:00']);
  put({
    id: 'tokyo_mibashou_ichigaya', name: 'ミバショウ (Mibashou)', category: 'OMNI',
    lat: 35.690588, lng: 139.732034, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The banana juice is bananas blended with milk or soy milk (reviews), but toppings include granola and black cookies, and the hot sandwiches are bread. Nothing gluten-free is stated.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Every juice can be made with unsweetened soy milk instead of milk (Tabelog); a November 2021 diner describes the soy version as just frozen banana and soy milk. Check the toppings.',
    hours_raw: 'Mon–Fri 8:00–16:00; closed Saturday, Sunday and holidays (Tabelog). Take-out only since December 2021 (Tabelog; still take-out only in July 2025); 4 counter seats when dine-in ran. Order at a ticket machine; ask the staff for payment other than cash (January 2025). No cards or e-money; QR codes accepted (Tabelog). Stamp card: free toppings at 5 and 10 stamps, a free juice at 15 (April 2024). Daily sandwich and soup posted on Instagram and Twitter the day before (Tabelog). Opened 15 April 2016 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ichigaya Honmura-chō 2-33, ART ICHIGAYA #02, at the back of a narrow residential alley (look for the hanging bunch of bananas) — 3 min from Ichigaya Stn Exit 7, 9 min from Yotsuya Stn',
    cuisine: 'Banana-juice specialty shop: ripe-banana juice ¥350 without ice or sugar, or premium with "Kan-nyuku-oh Gold Premium" bananas ¥500 (Tabelog; 2024 diners paid ¥380 for soy banana juice), with fresh milk or unsweetened soy milk; add vegetables, fruit, granola, yogurt or black cookies from +¥50 (Tabelog; reviews) · homemade hot sandwiches ¥390 and soups ¥350 that change daily, e.g. tuna-and-egg roll with mentaiko sauce; sandwich, soup and juice set ¥1,050 (Tabelog; 2024–25 reviews) · coffee (March 2022)',
    website: null, gmaps: gm('ミバショウ 市谷本村町'), menu_url: null,
    notes: "[Café · Ichigaya, a tiny banana-juice stand down an alley] A five-tsubo banana-juice shop hidden at the back of a residential alley near Ichigaya Station, marked by a bunch of real bananas hanging outside when it's open. Buy a ticket and the juice is blended to order from bananas and milk or soy milk, with no ice or sugar: thick and shake-like for most reviewers, though one 2022 regular found the premium version disappointingly ordinary. Toppings from granola to yogurt, plus a daily homemade hot sandwich and soup make it a quick lunch, and lines form even on rainy days. Take-out only; weekdays 8:00–16:00. Time Out Tokyo lists a second Mibashou shop.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 April 2016 (Tabelog).',
      background: 'No source names the owner. The Tabelog listing, written by the shop, describes a banana-juice specialty shop with homemade hot sandwiches and soups whose daily menu is posted on social media the day before. A March 2022 reviewer explains the name: the Japanese word for banana is "Jitsubashou" (as machine-translated).',
      philosophy: null, specialty: 'Banana juice with milk or soy milk.',
      anecdotes: [
        { text: '"As I got closer, I realized it was a bunch of bananas, a sign indicating that the shop was open." — March 2022.', source: R + 'B446734482/' },
        { text: '"Banana Soy Milk Juice JPY 350. Made with just frozen cut bananas and soy milk, it\'s incredibly rich and creamy." — November 2021.', source: R + 'B444113509/' },
        { text: '"Despite being tucked away, it\'s a popular spot that attracts lines even on rainy days." — May 2025.', source: R + 'B507609259/' },
      ],
      japanese_sources_summary: '食べログ (店舗の紹介): ミバショウ、カフェ・ジューススタンド・サンドイッチ、市谷本村町2-33 ART ICHIGAYA #02、市ケ谷駅7番出口から徒歩3分、四ツ谷駅から9分、月〜金8:00〜16:00、土日祝休み、2021年12月からテイクアウトのみ、カウンター4席、カード・電子マネー不可、QR可、2016年4月15日オープン、バナナジュース専門店、氷も砂糖も使わない完熟バナナ350円、「Kan-nyuku-oh Gold Premium」のプレミアム500円、牛乳か無調整豆乳、野菜や果物のカスタマイズ +50円〜、自家製ホットサンド390円、スープ350円、日替わりはインスタグラムと Twitter で前日に告知。口コミ(2021年〜2025年): 路地の奥、吊るしたバナナが営業中の目印、食券機、スタンプカード、行列。タイムアウト東京に「ミバショウ 北千住マルイ」の記載。',
      confidence: 'medium', sources: [TB, R + 'B427199731/', R + 'B444113509/', R + 'B445433483/', R + 'B446734482/', R + 'B474991549/', R + 'B478200025/', R + 'B482995851/', R + 'B483881291/', R + 'B499719409/', R + 'B507609259/', R + 'B509308632/', R + 'B518189873/', 'https://www.timeout.jp/tokyo/ja/ショッピング/ミバショウ-北千住マルイ'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine at the door; ask staff to pay by QR code.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区市谷本村町2-33 ART ICHIGAYA #02',
    existence: { status: 'probable', checked: TODAY, note: 'Shop-written Tabelog listing with current hours; the newest of the fetched reviews is from July 2025, so no 2026 visit is on record.' },
    pin_source: `Tabelog ${TB} (35.690588, 139.732034); cross-checked: GSI 東京都新宿区市谷本村町2番33号 (go) 21m. Tsubame Shokudo (tokyo_tsubame_shokudo_ichigaya, same lot number 2-33) has its own Tabelog point 10 m away; separate premises in the same alley, so each keeps its own point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B482995851/', R + 'B483881291/'],
    price_note: 'Prices from the Tabelog listing (shop text) and 2024 reviews.', last_checked: TODAY, items: [
      it('', '', 'Banana juice (milk or soy milk)', '¥350', 'Juice', 'ask', 'ask', 'Tabelog listing; soy version ¥380 in an April 2024 review. Vegan only with soy milk.', 'banana_juice'),
      it('', '', 'Premium banana juice', '¥500', 'Juice', 'ask', 'ask', 'Tabelog listing. Vegan only with soy milk.', 'premium_banana_juice'),
      it('', '', 'Topping or customisation', '+¥50', 'Juice', 'ask', 'ask', 'Tabelog listing; April 2024 review.', 'topping'),
      it('', '', 'Daily hot sandwich', '¥390', 'Food', 'no', 'ask', 'Tabelog listing.', 'hot_sandwich'),
      it('', '', 'Daily soup', '¥350', 'Food', 'ask', 'ask', 'Tabelog listing.', 'soup'),
      it('', '', 'Hot sandwich, soup and banana juice set', '¥1,050', 'Food', 'no', 'ask', 'April 2024 review.', 'set'),
    ] }, {
    cuisine: 'バナナジュース専門店: 氷も砂糖も使わない完熟バナナのジュース350円、「Kan-nyuku-oh Gold Premium」のバナナを使ったプレミアム500円 (食べログ。2024年の客は豆乳バナナジュースに380円)。牛乳か無調整豆乳を選ぶ。野菜や果物、グラノーラ、ヨーグルト、黒いクッキーを +50円から追加できる (食べログ、口コミ)・日替わりの自家製ホットサンド390円とスープ350円、例えばツナと卵の海苔巻きに明太子ソース。ホットサンド・スープ・ジュースのセット1,050円 (食べログ、2024〜25年の口コミ)・コーヒー (2022年3月)',
    neighborhood: '市谷本村町2-33 ART ICHIGAYA #02、住宅の並ぶ細い路地の奥 (吊るしたバナナが目印)。市ケ谷駅7番出口から徒歩3分、四ツ谷駅から9分',
    gf_detail: '要確認。バナナジュースはバナナと牛乳か豆乳 (口コミ)。トッピングにはグラノーラや黒いクッキーがあり、ホットサンドはパン。グルテンフリーの記述はない。',
    vegan_detail: '要確認。どのジュースも牛乳の代わりに無調整豆乳で作れる (食べログ)。2021年11月の客は豆乳版を冷凍バナナと豆乳だけと書いている。トッピングは確認を。',
    notes: '[カフェ・市ヶ谷、路地の小さなバナナジュースの店] 市ケ谷駅近く、住宅の並ぶ路地の奥に隠れた5坪のバナナジュースの店。営業中は本物のバナナが吊るしてある。食券を買うと、バナナと牛乳か豆乳だけで、氷も砂糖も入れずに注文ごとにミキサーにかける。多くの人にはシェイクのように濃厚だが、2022年のある常連はプレミアムが思ったより普通だったと書いた。グラノーラからヨーグルトまでのトッピング、日替わりの自家製ホットサンドとスープで手早く昼ごはんにも。雨の日でも行列ができる。テイクアウトのみ、平日8:00〜16:00。タイムアウト東京にはもう1店のミバショウの記載がある。',
  });
}

save();
