// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 8.
//   + 斗米庵 Tobei An (Kyoto cuisine down an alley off Nishiki Market; KIRIBAKO lunch box; since 2018)      [core]
//   + 京鴨ひつまぶし かもしぎん Kamoshigin (Uji-duck hitsumabushi and obanzai near Shijo-Tominokoji)         [core]
//   + 祗園245 Gion 245 (Japanese-Italian in a Shinmonzen townhouse; un-skipped by the integrator 2026-11-05)  [notable]
//   + 先斗町しゃぶしゃぶすき焼き きらく Kiraku (wagyu shabu-shabu and sukiyaki on Pontocho; since 2024)      [notable]
//   - 麺や轍 26035073 skipped (same-concept branch of 麺や 轍, already in data)
//   Taken in queue order on 2026-11-05 from `queue.mjs kyoto-missed next core 200` (lane ids 26035073 skipped,
//   26030537, 26039267) and `next notable 200` (26018705 as the integrator asked, then 26041019). None of the four
//   drafted is in data/kyoto.json: grep by name (斗米庵/Tobei, かもしぎん/Kamoshigin, 245, きらく/Kiraku) and address
//   (東魚屋町196, 西大文字町610, 中之町245, 柏屋町169) found none.
//   Group check: しゃぶしゃぶすき焼き きらく has two shops on its operator's brand page (北新地 and 先斗町; RIC2 Inc.,
//   which also runs other brands); the Kitashinchi shop (堂島1-2-7) is not in data/osaka.json — a small group.
//   Pins: Kiraku's GSI match is town-level only (柏屋町), so loc_approx 'single'; nearest other record 10 m.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-8');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26035073', '麺や轍 (Gion, 廿一軒町227): a same-concept branch of a brand already in data — kyoto_menya_wadachi_kiyamachi, name "麺や 轍 木屋町店 (Menya Wadachi Kiyamachi)"');

// ================================================================ 斗米庵
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26030537/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://tobeian.jp/';
  const LD = day(['11:00', '16:00'], ['18:00', '22:00']); const L = day(['11:00', '16:00']);
  put({
    id: 'kyoto_tobeian_nishiki', name: '斗米庵 (Tobei An)', category: 'OMNI',
    lat: 35.005129, lng: 135.765283, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. The cooking is Kyoto cuisine on a bonito-and-kombu dashi with soy sauces made from soybeans and wheat (official site); a September 2026 diner who declared a seafood and shellfish allergy found the broth and menu adjusted.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: every course starts from a bonito-and-kombu dashi, and the courses carry fish and, at dinner, wagyu (official site).',
    hours_raw: 'Lunch 11:00–16:00 (food last order 15:00), Tuesday–Sunday; dinner 18:00–22:00 (food last order 20:00, or 21:00 per the Tabelog remarks), Tuesday–Saturday; closed Monday, the first and third Tuesday and other irregular days (Tabelog). Bookings online or by phone (call before 11:00); seats are assigned by the shop; 15 minutes late without notice cancels the booking with a 100% charge; Tabelog states that foreign nationals must book with advance payment (Tabelog). 18 table seats; no service charge; non-smoking; English menu; cards, IC cards and PayPay (Tabelog). Down a narrow alley entered from Nishiki Market; 5 min from Kawaramachi or Shijo Stn (Tabelog; official site).',
    hours: { 1: LD, 2: LD, 3: LD, 4: LD, 5: LD, 6: L }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Down an alley off Nishiki Market — 5 min from Kyoto Kawaramachi Stn',
    cuisine: 'Kyoto cuisine built on Nishiki Market’s seasonal produce (official site) · lunch: KIRIBAKO 錦, a masu-shaped paulownia box of seasonal dishes — persimmon cup, terrine, sashimi, rolled egg, grilled and simmered dishes, rice and a sweet, with kabuse tea — after a soup, ¥4,600 plus one drink (official site) · dinner: 宵の京錦 八寸, seven courses ¥8,500; 宵の京錦 会席 with wagyu steak, eight courses ¥10,000, plus one drink (official site) · dashi from Nishiki well water with Rishiri and Rausu kombu and bonito; Kotohiki salt from Tango; Suehiro soy sauce; Kokonoe mirin (official site) · take-home yuba chirimen ¥1,600 for 100 g (official site)',
    website: SITE, gmaps: gm('斗米庵 錦市場'), menu_url: SITE,
    notes: "[Kyoto cuisine · Nishiki Market, a quiet room down an alley] A Kyoto-cuisine restaurant hidden down a narrow alley from Nishiki Market, named after one of the art names of the painter Itō Jakuchū, who is closely tied to the market. Lunch is the KIRIBAKO — a paulownia box of a dozen small seasonal dishes from the market, opened at the table (¥4,600 + a drink); dinner is a seven- or eight-course Kyoto meal (¥8,500–10,000). Book ahead; closed Monday and the first and third Tuesday.",
    chef_bio: { chef_name: null, roles: ['Operator unnamed in the sources'], origin: null,
      background: 'Opened 7 April 2018 (Tabelog). Per the official site: the name comes from an art name (別号) of the painter 伊藤若冲, who is closely tied to Nishiki Market; the shop prepares each plate carefully in the spirit of Jakuchū’s detailed brushwork; the dinner courses keep the flow of Kyoto cuisine with a quiet Western aftertaste.',
      philosophy: 'Per the official site: dashi drawn from Nishiki’s spring water and freshly shaved bonito; seasonings chosen with care (Kotohiki salt, Suehiro soy sauce, Kokonoe mirin).',
      specialty: 'KIRIBAKO 錦 lunch box; evening Kyoto courses.',
      anecdotes: [
        { text: 'The paulownia box arrived wreathed in dry-ice mist, and the chef opened the lid — September 2025.', source: R + 'B521513758/' },
        { text: 'A diner who had told the shop of a seafood and shellfish allergy found the broth and menu adjusted — September 2026.', source: R + 'B537722973/' },
        { text: 'An April 2025 reviewer noted the calm inside, off a shopping street "filled with foreign tourists".', source: R + 'B505724302/' },
        { text: 'At the end the staff served tea and chatted — November 2026.', source: R + 'B538657624/' },
      ],
      japanese_sources_summary: '公式サイト (tobeian.jp): 京都錦市場 斗米庵、錦市場の細い路地の奥の京料理の店、店名は錦市場に縁の深い絵師・伊藤若冲の別号から、昼は名物「KIRIBAKO 錦」(柿釜、テリーヌ、造里、玉〆、焼物、温物、ご飯、菓子、やまだしやのかぶせ茶) 4,600円+1ドリンク、夜は「宵の京錦 八寸」全7品8,500円、「宵の京錦 会席」和牛ステーキ付き全8品10,000円 (税込)、錦の名水と削りたてのかつお節の出汁、利尻昆布と羅臼昆布、琴引浜の塩、末廣醤油 (国産大豆・小麦)、九重味淋、お土産の湯葉ちりめん1,600円。食べログ: 日本料理・海鮮、中京区東魚屋町196-1、入口は錦市場の中、火〜土 11:00〜16:00・18:00〜22:00、日・祝 11:00〜16:00、月曜・第1第3火曜休み、18席、サービス料なし、英語メニュー、カード・電子マネー・PayPay 可、2018年4月7日オープン、外国籍のお客様は事前決済での予約。口コミ (2025年4月〜2026年11月、英語): KIRIBAKO、ドライアイスの演出、魚介アレルギーへの対応、もてなし。',
      confidence: 'medium', sources: [TB, SITE, R + 'B505395522/', R + 'B505724302/', R + 'B517087132/', R + 'B519591396/', R + 'B521513758/', R + 'B529529315/', R + 'B531990303/', R + 'B532866331/', R + 'B537722973/', R + 'B538657624/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); book online; foreign visitors book with advance payment.' },
    safety: { ...SAFETY0, staff_allergy_handling: [
      { text: 'A September 2026 diner who declared a seafood and shellfish allergy in advance says the shop "kindly adjusted the broth and menu just for me".', source: R + 'B537722973/', verified: TODAY },
    ], soy_sauce_wheat: [
      { text: 'The official site names its soy sauces (Suehiro usukuchi, koikuchi and tamari) as made from domestic soybeans and wheat.', source: SITE, verified: TODAY },
    ] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区東魚屋町196-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.005129, 135.765283); cross-checked: GSI 京都府京都市中京区東魚屋町196番地 (lot) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Official site prices with tax (read 2026-11-05); one drink per person is required.', last_checked: TODAY, items: [
      it('KIRIBAKO 錦', '', 'KIRIBAKO Nishiki lunch box (soup, a paulownia box of seasonal dishes, rice, sweet, tea)', '¥4,600', 'Lunch', 'ask', 'no', '+1 drink.', 'kiribako_nishiki'),
      it('宵の京錦 八寸', '', 'Evening Kyoto course, 7 dishes', '¥8,500', 'Dinner', 'ask', 'no', '+1 drink.', 'yoi_hassun'),
      it('宵の京錦 会席', '', 'Evening Kyoto course with wagyu steak, 8 dishes', '¥10,000', 'Dinner', 'ask', 'no', '+1 drink.', 'yoi_kaiseki'),
      it('特製無添加錦の湯葉ちりめん', '', 'Yuba chirimen (take-home, 100 g)', '¥1,600', 'Take-home', 'ask', 'no', 'Yuba and jako simmered with salt, mirin and sake (official site).', 'yuba_chirimen'),
    ] }, {
    cuisine: '錦市場の旬を生かした京料理 (公式サイト)・昼: 名物の KIRIBAKO 錦、枡型の桐箱に柿釜、テリーヌ、造里、玉〆、焼物、温物、ご飯、菓子、かぶせ茶、最初に椀物、4,600円+1ドリンク (公式サイト)・夜: 宵の京錦 八寸 全7品8,500円、和牛ステーキ付きの宵の京錦 会席 全8品10,000円、+1ドリンク (公式サイト)・錦の名水と利尻昆布・羅臼昆布、鰹節の出汁、丹後の琴引浜の塩、末廣醤油、九重味淋 (公式サイト)・お土産の湯葉ちりめん100g 1,600円 (公式サイト)',
    neighborhood: '錦市場から入る路地の奥。京都河原町駅から徒歩5分',
    gf_detail: '予約時に要確認。鰹と昆布の出汁と、大豆と小麦の醤油を使う京料理 (公式サイト)。2026年9月、魚介アレルギーを伝えた客には出汁と献立を調整してくれた。',
    vegan_detail: 'ヴィーガン不可。どのコースも鰹と昆布の出汁から始まり、魚と、夜は和牛も入る (公式サイト)。',
    notes: '[京料理・錦市場、路地奥の静かな店] 錦市場から細い路地を入った奥の京料理の店。店名は錦市場に縁の深い絵師・伊藤若冲の別号から。昼は KIRIBAKO で、市場の旬の小皿を桐箱に詰めて席で開ける (4,600円+1ドリンク)。夜は7〜8品の京料理のコース (8,500〜10,000円)。予約がおすすめ。月曜と第1・第3火曜休み。',
  });
}

// ================================================================ 京鴨ひつまぶし かもしぎん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26039267/'; const R = TB + 'dtlrvwlst/';
  const MON = day(['12:00', '14:30'], ['18:00', '21:30']); const H = day(['12:00', '14:00'], ['18:00', '21:30']); const SUN = day(['12:00', '14:00'], ['18:00', '21:00']);
  put({
    id: 'kyoto_kamoshigin', name: '京鴨ひつまぶし かもしぎん (Kyogamo Hitsumabushi Kamoshigin)', category: 'OMNI',
    lat: 35.004331, lng: 135.764788, cuisine_type: 'donburi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The house dish is duck hitsumabushi with a sweet-savory sauce and dashi to pour, and the menu adds soba and obanzai; no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the menu is built on duck, with dashi and seafood from Tango in the obanzai (Tabelog; 2026 reviews).',
    hours_raw: 'Lunch 12:00–14:00 (Monday to 14:30), limited to 30 servings, no bookings; dinner 18:00–21:30 (Sunday to 21:00; food last order 20:15); holidays lunch only; closing days irregular — the calendar is on the shop’s Instagram (Tabelog). Night: starter charge and one-drink minimum; under-15s not admitted in the evening (Tabelog). Each guest orders a rice bowl or soba (May 2026). Cash only (Tabelog). 20 seats; private rooms for 8 and 10–20; non-smoking (Tabelog). Up from Shijo on Tominokoji, 2 min from Hankyu Karasuma or Kawaramachi exit 12 (Tabelog; October 2026).',
    hours: { 0: MON, 1: H, 2: H, 3: H, 4: H, 5: H, 6: SUN }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Tominokoji just north of Shijo — 2 min from Hankyu exit 12',
    cuisine: 'Kyoto duck hitsumabushi and obanzai, using domestic ingredients and Kyoto products where possible (Tabelog) · Kyogamo hitsumabushi from Uji brand duck, eaten plain, with condiments, then with dashi poured over; "Oni Niku Mori" with extra meat (a Mezamashi TV Kyoto-area winning menu); with rich egg ¥2,560 (June 2026) · seasonal soba, cold soba · obanzai of Kyoto vegetables and Tango seafood · duck courses with all-you-can-drink, incl. Peking duck (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('京鴨ひつまぶし かもしぎん'), menu_url: null,
    notes: "[Duck hitsumabushi · Shijo-Tominokoji] A small modern shop just up from Shijo serving hitsumabushi made with Kyoto duck from Uji: tender, ungamey slices on rice, eaten three ways — plain, with condiments, and with dashi poured over (about ¥2,500 at lunch). Evenings add obanzai and duck courses. Lunch is 30 servings, first come; cash only. Reviews are mostly warm, with some complaints about service.",
    chef_bio: { chef_name: null, roles: ['Operator unnamed in the sources'], origin: null,
      background: 'Opened 30 April 2023 (Tabelog). Per the operator’s Tabelog text: all ingredients domestic, Kyoto products where possible; the signature Kyoto duck hitsumabushi uses a brand duck from Uji; obanzai change daily with Kyoto vegetables and Tango seafood.',
      philosophy: null, specialty: 'Kyogamo hitsumabushi.',
      anecdotes: [
        { text: 'A May 2026 pair ordering one rice bowl and one soba was cut off mid-order and told each person must order one or the other; the food was delicious.', source: R + 'B529153812/' },
        { text: 'A July 2026 diner found the chopsticks set carelessly and would not return for the service and price, though the hitsumabushi was good.', source: R + 'B534937028/' },
        { text: 'A September 2026 diner saw a foreign customer turned away while a Japanese customer who came later was let in, and felt uneasy.', source: R + 'B536890807/' },
        { text: 'The yuba udon seen online had been discontinued — June 2026.', source: R + 'B530687511/' },
      ],
      japanese_sources_summary: '食べログ: 京鴨ひつまぶし かもしぎん、居酒屋・おでん・しゃぶしゃぶ、中京区富小路西大文字町610、阪急烏丸駅・京都河原町駅12番出口から徒歩約2分、昼 12:00〜14:00 (月曜は14:30まで、30食限定、予約不可)、夜 18:00〜21:30 (日曜21:00まで、L.O. 料理20:15)、祝日は昼のみ、不定休 (Instagram)、夜はお通しと1ドリンク制、15歳未満は夜の入店不可、現金のみ、20席、個室、禁煙、2023年4月30日オープン、国産食材と京都産、宇治の銘柄鴨「京鴨」のひつまぶし、Tango の魚介と京野菜のおばんざい、Oni Niku Mori のひつまぶし (Mezamashi TV の京都エリアの優勝メニュー)、北京ダックを含む飲み放題付きコース。口コミ (2026年5〜11月、英語): ひつまぶしを3通りで、濃厚卵2,560円、冷たいそば、接客への不満の声も。',
      confidence: 'medium', sources: [TB, R + 'B529153812/', R + 'B529981556/', R + 'B530687511/', R + 'B534191802/', R + 'B534937028/', R + 'B534964986/', R + 'B536488947/', R + 'B536890807/', R + 'B538448841/', R + 'B538536144/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Lunch is first come, 30 servings; one rice bowl or soba per person; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区富小路西大文字町610',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (operator text and courses); reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.004331, 135.764788); cross-checked: GSI 京都府京都市中京区西大文字町610番地 (lot) 19m; 16 m from kyoto_sumika_tomikoji; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530687511/'],
    price_note: 'No menu read; the only price is from a June 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Kyogamo hitsumabushi with rich egg', '¥2,560', 'Rice bowls', 'ask', 'no', 'June 2026.', 'hitsumabushi_egg'),
      it('', '', 'Kyogamo hitsumabushi', '', 'Rice bowls', 'ask', 'no', '', 'kyogamo_hitsumabushi'),
      it('', '', 'Seasonal soba', '', 'Soba', 'ask', 'no', '', 'seasonal_soba'),
    ] }, {
    cuisine: '京鴨のひつまぶしとおばんざい。食材はすべて国産、できるだけ京都産 (食べログ)・宇治の銘柄鴨「京鴨」のひつまぶし: そのまま、薬味で、出汁をかけて。肉増しの Oni Niku Mori (Mezamashi TV の京都エリアの優勝メニュー)、濃厚卵のせ2,560円 (2026年6月)・季節のそば、冷たいそば・京野菜と Tango の魚介のおばんざい・北京ダックを含む鴨料理の飲み放題付きコース (食べログ、2026年の口コミ)',
    neighborhood: '四条のすぐ北の富小路。阪急12番出口から徒歩2分',
    gf_detail: '要確認。看板の鴨のひつまぶしは甘辛いたれと、かける出汁。そばやおばんざいもある。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。メニューは鴨が中心で、おばんざいにも出汁と Tango の魚介を使う (食べログ、2026年の口コミ)。',
    notes: '[鴨のひつまぶし・四条富小路] 四条から少し上がった小さなモダンな店で、宇治の京鴨のひつまぶしを出す。臭みのないやわらかい鴨をご飯にのせ、そのまま、薬味で、出汁をかけての3通りで (昼は2,500円ほど)。夜はおばんざいと鴨のコースも。昼は30食限定で予約不可、現金のみ。口コミは好評が多いが、接客への不満の声もある。',
  });
}

// ================================================================ 祗園245
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26018705/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.gion-245.com/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_gion_245', name: '祗園245 (Gion 245)', category: 'MOM_AND_POP',
    lat: 35.006396, lng: 135.775656, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. A Japanese-Italian course with fresh pasta, risotto, bread and Danish pastry, seasoned with dashi and white miso; no gluten information (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the courses centre on black-wagyu fillet, fish and cheese (Tabelog; 2025–26 reviews).',
    hours_raw: '17:00–23:00; closing days not fixed (Tabelog). Reservation only — by phone, or online where the calendar may differ from real availability (Tabelog). Course with black-wagyu Chateaubriand ¥15,000 with tax (Tabelog); a December 2025 reviewer paid ¥8,000 for a seven-course dinner incl. tax, service and a glass of sparkling wine. 10% service charge; corkage ¥5,000 a bottle (Tabelog). 14 seats: 7–8 at the counter facing the open kitchen, a table area and semi-private rooms; children from elementary-school age; smart casual; English menu and English-speaking staff; non-smoking; cards, e-money and QR (Tabelog; December 2025). On Shinmonzen-dori, the fifth house east of Hanamikoji, north side; 7 min from Gion-Shijo Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinmonzen-dori, just east of Hanamikoji — 7 min from Gion-Shijo Stn',
    cuisine: 'Japanese-Italian courses in a Kyoto townhouse, with seasonal ingredients, Kyoto vegetables and colourful tableware (Tabelog) · dinner course with black-wagyu Chateaubriand main, 8 dishes, ¥15,000 (Tabelog) · dishes in 2025–26 reviews: Amela-tomato and mozzarella caprese with anchovy sauce and white miso, Italian-style chawanmushi, Komoro white-potato soup, risotto, grilled kinmedai, fresh pasta of the day, micro-herb garnishes · champagne, wines and sake; the wine cellar is in a converted air-raid shelter below a glass floor (Tabelog; September–December 2025)',
    website: SITE, gmaps: gm('祇園245 新門前'), menu_url: null,
    notes: "[Japanese-Italian · Shinmonzen, a townhouse with a cellar below] A small Japanese-Italian restaurant in a renovated townhouse on Shinmonzen-dori in Gion: a counter around the open kitchen, a few semi-private rooms, and a wine cellar in an old air-raid shelter seen through the floor. Courses of Kyoto vegetables, fresh pasta and a black-wagyu fillet main (about ¥15,000; cheaper courses reported), cooked by a single chef who explains each dish. Reservation only; smart casual.",
    chef_bio: { chef_name: 'Masakazu Yoshioka', roles: ['Owner-chef (per a December 2025 review)'], origin: null,
      background: 'Per a December 2025 review: owner-chef Masakazu Yoshioka trained at "Kanobiano" after hotel work and then in Europe before going independent. Another December 2025 review says the present chef took over about a year earlier from the previous chef, a long-time restaurant consultant in Hong Kong, keeping the name. In April 2026 a single chef was cooking, so bookings were limited (review). Tabelog Italian WEST "Tabelog 100" 2021, 2023, 2025.',
      philosophy: 'Per the operator’s Tabelog text: a place to eat with peace of mind, with seasonal ingredients and Kyoto vegetables in a Japanese-Italian style.',
      specialty: 'Black-wagyu Chateaubriand course; fresh pasta.',
      anecdotes: [
        { text: '"The wine cellar in the basement is a renovated air raid shelter" — September 2025.', source: R + 'B513052945/' },
        { text: 'A December 2025 diner paid ¥8,000 for seven courses with tax, service and a sparkling toast, and wondered if it was a promotional price.', source: R + 'B520135752/' },
        { text: 'With only one chef, reservations were limited and the dishes explained in detail — April 2026.', source: R + 'B525952447/' },
      ],
      japanese_sources_summary: '公式サイト (gion-245.com): 祗園で味わう、京都ならではのイタリアン。祇園 245。食べログ: イタリアン・フレンチ・ステーキ、東山区智恩院新門前大和大路東入二丁目中之町245-1、新門前通花見小路から東へ5軒目の北側、京阪祇園四条駅から徒歩7分、17:00〜23:00、不定休、完全予約制、14席 (カウンター8、テーブル6)、個室、サービス料10%、持ち込み料1本5,000円、小学生以上、スマートカジュアル、英語メニュー・英語のスタッフ、禁煙、カード・電子マネー・QR 可、黒毛和牛シャトーブリアンがメインのディナーコース全8品15,000円 (税込)、京町家、京野菜、和のイタリアン、イタリアン WEST 百名店 2021・2023・2025。口コミ (2025年9月〜2026年4月、英語): オーナーシェフ Masakazu Yoshioka、Kanobiano、防空壕を改装したワインセラー、Amela トマトのカプレーゼ、生パスタ、7品8,000円のコース、シェフ一人。',
      confidence: 'medium', sources: [TB, SITE, R + 'B512949445/', R + 'B513052945/', R + 'B513311030/', R + 'B518384570/', R + 'B519574175/', R + 'B519903161/', R + 'B520135752/', R + 'B523700784/', R + 'B525952447/', R + 'B526718167/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (Tabelog); reservation only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区智恩院新門前大和大路東入二丁目中之町245-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (operator course list) and official site; reviews dated through April 2026; Italian WEST Tabelog 100 2025.' },
    pin_source: `Tabelog ${TB} (35.006396, 135.775656); cross-checked: GSI 京都府京都市東山区中之町245番地 (lot) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B520135752/'],
    price_note: 'Course price from the Tabelog course list (read 2026-11-05); a December 2025 review reports a ¥8,000 seven-course dinner.', last_checked: TODAY, items: [
      it('', '', 'Dinner course with black-wagyu Chateaubriand, 8 dishes', '¥15,000', 'Courses', 'ask', 'no', 'Plus 10% service per Tabelog.', 'chateaubriand_course'),
      it('', '', 'Seven-course dinner incl. sparkling wine', '¥8,000', 'Courses', 'ask', 'no', 'December 2025 review.', 'seven_course'),
    ] }, {
    cuisine: '京町家で味わう和のイタリアンのコース。旬の素材、京野菜、色とりどりの器 (食べログ)・黒毛和牛シャトーブリアンがメインのディナーコース全8品15,000円 (食べログ)・2025〜26年の口コミに出る料理: Amela トマトとモッツァレラのカプレーゼ (アンチョビソースと白味噌)、イタリア風の茶碗蒸し、Komoro の白いじゃがいものスープ、リゾット、金目鯛の焼き物、日替わりの生パスタ、マイクロハーブ・シャンパン、ワイン、日本酒。ワインセラーは防空壕を改装したもので、ガラスの床から見える (食べログ、2025年9〜12月)',
    neighborhood: '花見小路のすぐ東の新門前通。祇園四条駅から徒歩7分',
    gf_detail: '予約時に要確認。生パスタ、リゾット、パン、デニッシュが出る和のイタリアンのコースで、出汁や白味噌も使う。グルテンの情報はない (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。コースは黒毛和牛のフィレ、魚、チーズが中心 (食べログ、2025〜26年の口コミ)。',
    notes: '[和のイタリアン・新門前、地下にワインセラーのある町家] 祇園の新門前通の町家を改装した小さな和のイタリアン。オープンキッチンを囲むカウンター、半個室、床のガラス越しに見える防空壕を改装したワインセラー。京野菜、生パスタ、黒毛和牛のフィレがメインのコース (15,000円ほど、より安いコースの報告も) を、料理を一皿ずつ説明してくれるシェフが一人で作る。完全予約制、スマートカジュアル。',
  });
}

// ================================================================ 先斗町しゃぶしゃぶすき焼き きらく
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26041019/'; const R = TB + 'dtlrvwlst/';
  const BRAND = 'https://ric2.co.jp/brand/shabushabu-sukiyaki-kiraku';
  const WD = day(['17:00', '24:00']); const WE = day(['12:00', '15:00'], ['17:00', '24:00']);
  put({
    id: 'kyoto_pontocho_kiraku', name: '先斗町しゃぶしゃぶすき焼き きらく (Pontocho Shabushabu Sukiyaki Kiraku)', category: 'OMNI',
    lat: 35.004213, lng: 135.771049, cuisine_type: 'sukiyaki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sukiyaki with a house warishita and shabu-shabu with house ponzu and sesame sauce, finished with Inaniwa udon; no gluten information (official brand page; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the courses are wagyu shabu-shabu or sukiyaki on a kombu broth or with egg (official brand page; 2026 reviews).',
    hours_raw: 'Weekdays and holidays 17:00–24:00 (last order 23:00); Saturday and Sunday also 12:00–15:00 (last order 14:00) (Tabelog). Bookings online or by phone (Tabelog). Shoes off; private and semi-private rooms on the second floor; the staff cook the first meat for you (2026 reviews). No service charge; designated smoking area; cards, IC cards and QR payments; English menu (Tabelog; official brand page). On Pontocho near the Shijo entrance; 2 min from Kyoto Kawaramachi Stn (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho, near the Shijo end — 2 min from Kyoto Kawaramachi Stn',
    cuisine: 'Black-wagyu shabu-shabu and Kansai-style sukiyaki (grilled first), with house-made sauces and warishita, produced by Chef Hasegawa of Gourmandise (official brand page; Tabelog) · Toki course ¥18,500: appetizer, three obanzai, a thick-cut wagyu tenderloin (e.g. Tottori Tamura beef), vegetables, Kobe-beef ribeye and chuck eye, rice and pickles, sesame soy-milk Inaniwa udon, dessert (October–November 2026) · Kawasemi sukiyaki course with A5 wagyu and Kobe beef ¥12,800 (Tabelog) · Suzaku course; weekend lunch (2026 reviews) · sake and shochu (official brand page)',
    website: BRAND, gmaps: gm('先斗町しゃぶしゃぶすき焼き きらく'), menu_url: null,
    notes: "[Shabu-shabu & sukiyaki · Pontocho, wagyu in tatami rooms] A shoes-off wagyu house at the Shijo end of Pontocho, opened in 2024, with tatami private rooms upstairs: shabu-shabu with house ponzu and sesame sauce, or Kansai-style sukiyaki grilled first and dipped in whipped egg, using thick-cut tenderloin and Kobe beef. Courses ¥12,800–18,500; English menu. Open to midnight; weekend lunch. Tabelog Hot Pot 100 2026.",
    chef_bio: { chef_name: null, roles: ['Produced by Chef Hasegawa of Gourmandise (operator text); run by RIC2 Inc.'], origin: null,
      background: 'Opened 1 May 2024 (Tabelog). Per the operator (RIC2 Inc.) brand page: the brand also has 北新地しゃぶしゃぶすき焼き きらく in Osaka; the Pontocho shop is produced by Chef Hasegawa of Gourmandise, with homemade sauces and warishita, and an English menu for visitors. Tabelog Hot Pot "Tabelog 100" 2026.',
      philosophy: null, specialty: 'Toki course; Kansai-style sukiyaki.',
      anecdotes: [
        { text: '"The sukiyaki served with whipped eggs was a refreshing new experience." — October 2026.', source: R + 'B538601149/' },
        { text: 'The first shabu-shabu cut was a thick tenderloin, "typically used for yakiniku" — October 2026.', source: R + 'B538482380/' },
        { text: 'Even on a weekday night there were customers from Japan and abroad — October 2026.', source: R + 'B536933773/' },
      ],
      japanese_sources_summary: '運営会社のブランドページ (ric2.co.jp): しゃぶしゃぶすき焼ききらく、北新地しゃぶしゃぶすき焼き きらく (大阪市北区堂島1-2-7)、先斗町しゃぶしゃぶすき焼き きらく (中京区先斗町通四条上る柏屋町169-2)、グルマンディーズ長谷川シェフ監修、上質な黒毛和牛、タレや割り下は自家製、英語併記のメニュー、人気No.1の朱鷺コース。食べログ: しゃぶしゃぶ・すき焼き・日本料理、平日・祝日 17:00〜24:00 (L.O. 23:00)、土日 12:00〜15:00・17:00〜24:00、30席 (カウンター4、テーブル26)、個室、サービス料なし、分煙、カード・電子マネー・QR 可、2024年5月1日オープン、鍋百名店 2026、Kawasemi のすき焼きコース12,800円 (A5和牛と神戸牛)。口コミ (2026年10〜11月、英語): 朱鷺コース18,500円、自家製ポン酢、厚切りのヒレ、神戸牛、稲庭うどん、泡立てた卵のすき焼き、靴を脱いで2階の個室。',
      confidence: 'medium', sources: [TB, BRAND, R + 'B484496023/', R + 'B505211032/', R + 'B518629267/', R + 'B520735369/', R + 'B536933773/', R + 'B537226866/', R + 'B538277984/', R + 'B538465727/', R + 'B538482380/', R + 'B538601149/'] },
    cultural_comfort: { level: 'english', note: 'English menu (operator); staff cook the first meat; shoes off.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区先斗町通四条上る柏屋町169-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Operator brand page and Tabelog listing; reviews dated through November 2026; Hot Pot Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.004213, 135.771049); cross-checked: GSI 京都府京都市中京区柏屋町 (town) 21m — town-level match only, so loc_approx 'single'; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B518629267/'],
    price_note: 'Kawasemi course from the Tabelog course list (read 2026-11-05); Toki course price from October–November 2026 reviews.', last_checked: TODAY, items: [
      it('朱鷺コース', '', 'Toki course, shabu-shabu or sukiyaki', '¥18,500', 'Courses', 'ask', 'no', 'October–November 2026.', 'toki_course'),
      it('', '', 'Kawasemi sukiyaki course (A5 wagyu and Kobe beef), 9 dishes', '¥12,800', 'Courses', 'ask', 'no', 'Tabelog.', 'kawasemi_course'),
    ] }, {
    cuisine: '黒毛和牛のしゃぶしゃぶと焼いてから仕上げる関西風のすき焼き。タレや割り下は自家製、グルマンディーズ長谷川シェフ監修 (運営会社のページ、食べログ)・朱鷺コース18,500円: 前菜、おばんざい3種、厚切りの和牛ヒレ (Tottori の Tamura beef など)、野菜、神戸牛のリブロースと肩ロース、ご飯と香の物、胡麻豆乳の稲庭うどん、デザート (2026年10〜11月)・A5和牛と神戸牛のすき焼きコース12,800円 (食べログ)・Suzaku コース、週末のランチ (2026年の口コミ)・日本酒と焼酎 (運営会社のページ)',
    neighborhood: '先斗町の四条側の入口近く。京都河原町駅から徒歩2分',
    gf_detail: '要確認。自家製の割り下のすき焼きと、自家製ポン酢・ごまだれのしゃぶしゃぶ、締めは稲庭うどん。グルテンの情報はない (運営会社のページ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。コースは和牛のしゃぶしゃぶ (昆布出汁) かすき焼き (卵) (運営会社のページ、2026年の口コミ)。',
    notes: '[しゃぶしゃぶ・すき焼き・先斗町、畳の個室で和牛] 先斗町の四条側にある、靴を脱いで上がる和牛の店で、2024年開店。2階は畳の個室。自家製ポン酢とごまだれのしゃぶしゃぶ、焼いてから泡立てた卵で食べる関西風のすき焼きで、厚切りのヒレや神戸牛を。コースは12,800〜18,500円、英語メニューあり。深夜0時まで、週末は昼も。鍋百名店 2026。',
  });
}

save();
