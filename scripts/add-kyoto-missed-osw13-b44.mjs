// Kyoto priority (kyoto-missed), worker osw13, batch 44 — lane: Tabelog id mod 6 = 0.
// Core: 天ぷら 東山 (Tempura TOHZAN), ぎをん 津崎. Notable: ホーフベッカライ エーデッガー・タックス 京都店, ATELIER PAGES KYOTO.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-44');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26038674', 'chain: BIGOLI 京都本店 is the flagship of BIGOLI, a Bolognese brand that licenses its menu to member shops — bigoli.jp lists shops in Tokyo (Marunouchi, Yurakucho, Akasaka, Setagaya), Kobe (three) and Chino, Nagano; a chain’s flagship counts as the chain (Greg ruling 2026-11-02)');
skip('26037084', 'large parent: CICON by NOHGA HOTEL is run by 株式会社MOTHERS (Tabelog’s website link is mothersgroup.jp/shop/cicon.html), a multi-brand restaurant company with shops in Tokyo, Fukuoka and Kyoto (TATA, CHICAMA, CANTERA, PEP, MORETHAN and others); sub-brand of a large parent');

// ================================================================ 天ぷら 東山 (Tempura TOHZAN)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26031396/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['17:30', '22:00']);
  put({
    id: 'kyoto_tempura_tohzan', name: '天ぷら 東山 (Tempura TOHZAN)', category: 'OMNI',
    lat: 35.010288, lng: 135.769201, cuisine_type: 'tempura',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a tempura counter — wheat-batter tempura with dipping sauce, kakiage and tendon (2023–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: shrimp and cuttlefish tempura, a dashi dipping sauce and red miso soup (2023–2026 reviews).',
    hours_raw: 'Tabelog: daily 11:30–14:00 and 17:30–22:00 (L.O. 21:30); irregular closures; lunch courses by reservation only; dinner courses must be booked by 21:00 the day before. Service charge 10% at dinner (Tabelog; Japanese original 「１０％（ディナー）」). 12 counter seats; non-smoking; English menu; cards, no e-money or QR (Tabelog). Opened 19 September 2018 (Tabelog). A January 2025 diner notes the name is read "Tohzan", not "Higashiyama".',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi-Oike, second floor — 3 min walk from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Tempura counter, fried and explained piece by piece · lunch tempura set meals (regular and premium) with rice, red miso soup and pickles; lunch courses such as the "Hiei" with kakiage tencha or tendon to finish (2023–2024 reviews) · dinner courses including the "Tohzan" course: four appetizers, about ten tempura with matcha salt, salt with rice flour or dipping sauce, then kakiage, rice, miso soup, pickles and dessert (2024–2025 reviews) · shrimp, cuttlefish, corn, okra, sweet potato, eggplant, taro (2023–2024 reviews)',
    website: null, gmaps: gm('天ぷら 東山 TOHZAN 河原町御池'), menu_url: null,
    notes: '[Tempura · Kawaramachi-Oike, twelve-seat counter] A twelve-seat tempura counter upstairs by Kyoto City Hall, run by a couple with a little help: the chef fries shrimp, corn and seasonal vegetables to order and explains how to eat each. Lunch sets are good value; dinner is a course ending in kakiage on rice or tencha. Diners like the chatty chef; others found the decor and background music in need of work (2024–2025) and, in April 2026, service so-so — no one offered more tea. 10% service at dinner.',
    chef_bio: { chef_name: null, roles: ['Chef (not named); a June 2024 diner writes the restaurant "is run by a couple and their staff"'], origin: null,
      background: 'Opened 19 September 2018 (Tabelog). Reviewers from 2023 to 2026 describe a counter where the chef fries each piece in front of guests and explains how to eat it; a July 2025 diner saw the chef handling everything alone at a busy dinner, and an April 2026 diner saw two people working the counter.',
      philosophy: null,
      specialty: 'Tempura courses; kakiage tencha or tendon to finish.',
      anecdotes: [
        { text: '"The chef seems to fry tempura as naturally as breathing." — October 2024.', source: R + 'B495529614/' },
        { text: '"If the background music were selected by a professional, I believe this would become the best restaurant." — July 2024.', source: R + 'B488484228/' },
        { text: '"They didn’t even ask if we wanted a refill for our tea, so I don’t think I’ll be coming back." — April 2026.', source: R + 'B526810641/' },
        { text: 'A July 2025 family brought a child to try real tempura and enjoyed the chef’s funny stories; the tempura bowl was the best they had ever eaten.', source: R + 'B509579426/' },
      ],
      japanese_sources_summary: '食べログ: 天ぷら 東山 (Tempura TOHZAN)、天ぷら・天丼・日本料理、中京区河原町御池下ル下丸屋町401 福三ビル2F、京都市役所前駅から徒歩約3分、毎日 11:30〜14:00・17:30〜22:00 (L.O. 21:30)、不定休、昼のコースは予約制、コースは前日21時までに予約、サービス料10% (ディナー)、12席、禁煙、英語メニュー、カード可、2018年9月19日オープン。口コミ (2023年8月〜2026年4月、英語): 夫婦とスタッフで営む店、ランチの天ぷら定食 (並・上)、「比叡」のコース、〆はかき揚げの天茶か天丼、「東山」のコース、前菜4品と天ぷら10種ほど、抹茶塩・米粉の塩・天つゆ、海老、紋甲いか、とうもろこし、オクラ、さつまいも、茄子、里芋、読みは「とうざん」、店主が気さく、内装やBGMはもう少しという声、お茶のおかわりを聞かれなかったという声。',
      confidence: 'medium', sources: [TB, R + 'B470828447/', R + 'B473992860/', R + 'B480273260/', R + 'B486901374/', R + 'B488484228/', R + 'B495529614/', R + 'B498828321/', R + 'B509579426/', R + 'B525444182/', R + 'B526810641/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); the chef explains each piece; book dinner courses by 21:00 the day before.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区河原町御池下ル下丸屋町401 福三ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB} (35.010288, 135.769201); cross-checked: GSI 京都府京都市中京区下丸屋町401番地 (lot) 45m; kyoto_seven_embers_hilton 20 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No prices published; reviewers spent ¥2,000–3,999 at lunch and ¥6,000–7,999 at dinner (2023–2026).', last_checked: TODAY, items: [
      it('', '', 'Tempura set meal (lunch, regular or premium)', '', 'Lunch', 'no', 'no', 'Price not given.', 'tempura_teishoku'),
      it('', '', 'Tohzan course (dinner)', '', 'Dinner', 'no', 'no', 'Price not given; 10% service.', 'course'),
    ] }, {
    cuisine: '一品ずつ揚げて説明する天ぷらのカウンター・昼の天ぷら定食 (並・上) とご飯、赤だし、香の物、〆にかき揚げの天茶か天丼を選ぶ「比叡」などのランチコース (2023〜2024年の口コミ)・「東山」コースなどの夜のコース: 前菜4品、天ぷら10種ほどを抹茶塩、米粉の塩、天つゆで、かき揚げ、ご飯、味噌汁、香の物、デザート (2024〜2025年の口コミ)・海老、紋甲いか、とうもろこし、オクラ、さつまいも、茄子、里芋 (2023〜2024年の口コミ)',
    neighborhood: '河原町御池、ビルの2階。京都市役所前駅から徒歩3分',
    gf_detail: 'グルテンフリーではない: 小麦の衣の天ぷらに天つゆ、かき揚げ、天丼の店 (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 海老やいかの天ぷら、だしの天つゆ、赤だし (2023〜2026年の口コミ)。',
    notes: '[天ぷら・河原町御池、カウンター12席] 市役所近くのビルの2階、夫婦とスタッフで営むカウンター12席の天ぷら屋。店主が海老、とうもろこし、季節の野菜を目の前で揚げ、一品ずつ食べ方を説明する。昼の定食は値打ちで、夜はかき揚げの天丼か天茶で〆るコース。話好きの店主が好評な一方、内装やBGMはもう少し (2024〜2025年)、お茶のおかわりを聞かれずサービスは普通 (2026年4月) という声も。夜はサービス料10%。',
  });
}

// ================================================================ ぎをん 津崎
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26016900/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '13:30'], ['18:00', '22:00']);
  put({
    id: 'kyoto_gion_tsuzaki', name: 'ぎをん 津崎 (Gion Tsuzaki)', category: 'OMNI',
    lat: 35.005525, lng: 135.777352, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; a sushi and à la carte menu with simmered dishes, tempura in the winter fugu course and red miso soup (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sushi, sashimi, fugu, shrimp and dashi-simmered dishes (2024–2026 reviews).',
    hours_raw: 'Tabelog: Mon–Sat 12:00–13:30 (lunch by reservation only) and 18:00–22:00; closed Sunday. A daily otoshi from ¥500 is charged (Tabelog; Japanese original 「つきだし 500円～ ※日替わり」). BYO allowed at ¥2,000 per bottle (Tabelog). 13 seats: 7 at the counter, 6 at sunken tables; smoking allowed (Tabelog), e-cigarettes too (August 2026); cards and e-money, no QR (Tabelog). Opened 24 June 2010 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, Shinbashi-dori east of Hanamikoji — 3 min walk from the north gate of Yasaka Shrine',
    cuisine: 'Neighbourhood sushi in Gion, by course or à la carte · omakase nigiri courses, then favourites to order; sashimi, simmered dishes, the day’s grilled dish, red miso soup with egg (2024–2026 reviews) · seen: engawa of sea bream and flounder, dancing shrimp with fried heads, grilled fin, uni, ikura, funazushi (2024–2026 reviews) · winter fugu course with sashimi, tempura, hot pot and zosui (December 2024) · lunch seafood chirashi ¥2,000 (August 2023) · a sake list regulars praise (2026 reviews)',
    website: null, gmaps: gm('ぎをん 津崎 新橋通'), menu_url: null,
    notes: '[Sushi · Gion Shinbashi, relaxed and smoking-friendly] A thirteen-seat sushi shop near Yasaka Shrine that regulars call welcoming rather than formal: omakase nigiri, then whatever you like à la carte — dancing shrimp, engawa, funazushi — with a strong sake list and fugu in winter. Families return every Obon; one regular has been 27 times. Smoking and e-cigarettes allowed. ¥500+ otoshi. Lunch by reservation; closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner, chef and hostess at the counter (2024–2026 reviews); not named'], origin: null,
      background: 'Opened 24 June 2010 (Tabelog). Reviewers from 2024 to 2026 describe a friendly chef, owner and hostess, a counter and sunken tables, à la carte ordering beside courses, and a sake list chosen with care; a June 2025 regular on a 27th visit was glad to see the couple again.',
      philosophy: null,
      specialty: 'Omakase nigiri; à la carte sushi with sake; winter fugu.',
      anecdotes: [
        { text: 'A family returns every Obon; in August 2026 they tried the rare funazushi with sake.', source: R + 'B464952427/' },
        { text: '"They also allow electronic cigarettes, so if you\'re looking for a sushi restaurant where you can smoke, I highly recommend this place." — August 2026.', source: R + 'B532889187/' },
        { text: 'A December 2024 guest’s friend quietly ordered dancing shrimp, still moving, followed by their fried heads; the bill came to about ¥10,000 each with drinks.', source: R + 'B83132785/' },
      ],
      japanese_sources_summary: '食べログ: ぎをん 津崎、寿司・日本料理・海鮮、東山区新橋通り花見小路東入ル、八坂神社北門から徒歩3分、月〜土 12:00〜13:30 (昼は予約のみ)・18:00〜22:00、日曜休み、つきだし500円〜 (日替わり)、持ち込み1本2,000円、13席 (カウンター7、掘りごたつ6)、喫煙可、カード・電子マネー可、QR不可、2010年6月24日オープン。口コミ (2023年8月〜2026年8月、英語): おまかせ握りのコースとアラカルト、鯛と平目のえんがわ、踊り海老と頭の唐揚げ、ひれ焼き、雲丹、いくら、鮒寿司、冬のふぐのコース (造り、天ぷら、鍋、雑炊)、昼の海鮮ちらし2,000円 (2023年)、日本酒の品揃え、大将と女将と店主が気さく、毎年お盆に来る家族、27回目の常連、電子たばこも可。',
      confidence: 'medium', sources: [TB, R + 'B432178350/', R + 'B458210888/', R + 'B464952427/', R + 'B469989228/', R + 'B492145170/', R + 'B498084728/', R + 'B517917072/', R + 'B520150627/', R + 'B532889187/', R + 'B83132785/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order from the menu at the counter or take the omakase; book ahead on busy days.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区新橋通り花見小路東入ル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.005525, 135.777292) moved 6 m east to (35.005525, 135.777352): the Tabelog point was 4.4 m from kyoto_sushi_no_kura; now 9.7 m from it; the address has no lot number and GSI returns only 東山区 (ward level); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B469989228/'],
    price_note: 'Otoshi from Tabelog; chirashi price from an August 2023 review.', last_checked: TODAY, items: [
      it('つきだし', 'tsukidashi', 'Daily otoshi (charged per guest)', 'from ¥500', 'Charge', 'ask', 'no', 'Tabelog.', 'otoshi'),
      it('', '', 'Seafood chirashi sushi (lunch)', '¥2,000', 'Lunch', 'ask', 'no', 'August 2023.', 'chirashi'),
    ] }, {
    cuisine: 'コースかアラカルトの祇園の街の寿司屋・おまかせの握りのコースの後に好みで追加、お造り、炊き合わせ、日替わりの焼き物、玉子入りの赤だし (2024〜2026年の口コミ)・これまでの品: 鯛と平目のえんがわ、踊り海老と頭の唐揚げ、ひれ焼き、雲丹、いくら、鮒寿司 (2024〜2026年の口コミ)・冬のふぐのコース: 造り、天ぷら、鍋、雑炊 (2024年12月)・昼の海鮮ちらし2,000円 (2023年8月)・常連が褒める日本酒の品揃え (2026年の口コミ)',
    neighborhood: '祇園、花見小路の東の新橋通。八坂神社北門から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。寿司とアラカルトで、炊き合わせ、冬のふぐのコースの天ぷら、赤だしもある (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 寿司、お造り、ふぐ、海老、だしの炊き合わせ (2024〜2026年の口コミ)。',
    notes: '[寿司・祇園新橋、気取らず喫煙可] 八坂神社近くの13席の寿司屋で、常連は格式ばらず居心地がいいと言う。おまかせの握りの後は踊り海老、えんがわ、鮒寿司などを好きに頼め、日本酒が充実、冬はふぐ。毎年お盆に来る家族、27回通う常連も。喫煙も電子たばこも可。つきだし500円〜。昼は予約のみ。日曜休み。',
  });
}

// ================================================================ ホーフベッカライ エーデッガー・タックス 京都店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26034816/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://edegger-tax.jp/';
  const ABOUT = 'https://edegger-tax.jp/about-us/';
  const H = day(['10:00', '18:00']);
  put({
    id: 'kyoto_edegger_tax_okazaki', name: 'ホーフベッカライ エーデッガー・タックス 京都店 (Hofbäckerei Edegger-Tax Kyoto)', category: 'MOM_AND_POP',
    lat: 35.013164, lng: 135.779718, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: an Austrian bakery of wheat and rye breads, pretzels, croissants and cakes (official site; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: butter croissants and Danishes, cream-filled cornets, Sachertorte with cream (2026 reviews); ask about plain breads such as pretzels or rye.',
    hours_raw: 'Official site and Tabelog: 10:00–18:00; closed Wednesday and Thursday. Products can be reserved; café seats cannot (Tabelog). Take-out is paid first, drinks ordered at the table (October 2026); breads often sell out by lunchtime on holidays (October 2026). Café with a terrace; non-smoking; parking for four cars; cards, e-money and QR (Tabelog). No service charge listed on Tabelog. Opened 19 September 2020 (Tabelog).',
    hours: { 0: H, 1: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Okazaki — 411 m from Higashiyama Stn',
    cuisine: 'Austrian court bakery and café: the Kyoto shop of Graz’s Hofbäckerei Edegger-Tax, founded 1569 (official site) · Handkaiser rolls, pretzel ¥250, Hand-Kaiser with sesame ¥240, rye wholegrain ¥600, croissant ¥360 (September 2026), Kipferl, Salzstangerl, Vollkornbrot · Sachertorte, Kaiserkugelhupf, Sissi Busserl, chestnut tart, Mont Blanc, cornet with whipped cream, Danishes · café drinks on the terrace (official site; 2026 reviews)',
    website: SITE, gmaps: gm('エーデッガー・タックス 京都 岡崎'), menu_url: SITE + 'eshop/',
    notes: '[Austrian bakery-café · Okazaki] The Japanese shop of a Graz court bakery founded in 1569, whose eighth-generation owner entrusted its recipes to a Vienna-trained Japanese baker. Handkaiser rolls, pretzels, rye bread and a giant cream cornet to take away, or Sachertorte and chestnut tart on the terrace. Breads sell out early on holidays. Closed Wednesday and Thursday.',
    chef_bio: { chef_name: '野澤 孝彦 (のざわ・たかひこ, per the official site)', roles: ['Chef of the Japanese shop, entrusted with the recipes by Robert Edegger (official site)'], origin: 'Born 1972 in 埼玉県上尾市 (official site).',
      background: 'Per the official site: Hofbäckerei Edegger-Tax in Graz, founded in 1569, held the Habsburg court warrant; the eighth-generation owner Robert Edegger, in charge since 1992, entrusted the recipes to 野澤 孝彦 and opened the Japanese shop, "from Graz to Kyoto". 野澤 was drawn to Austrian culture through piano lessons, went to Vienna at 22 and trained at the café houses Oberlaa and L. Heiner, learned bread-making at Wandinger in southern Germany, opened Neues in Japan in 1999 and received the recipes from Robert Edegger in 2012. A September 2026 diner remembers the shop near Mansei-bashi in Tokyo and writes that it has moved twice. Opened in Kyoto on 19 September 2020 (Tabelog).',
      philosophy: 'Official site: 「いまを生きる伝統」 — a living tradition, not mere repetition.',
      specialty: 'Handkaiser; Sachertorte; Kipferl and pretzels.',
      anecdotes: [
        { text: 'A September 2026 visitor recognised the shop from Mansei-bashi in Tokyo years ago, and found it had moved twice before settling in Kyoto.', source: R + 'B535981649/' },
        { text: '"The Lauren... it\'s about 14 cm long! This is the biggest and longest cornet I\'ve ever seen!" — September 2026.', source: R + 'B535198095/' },
        { text: 'On a three-day weekend in October 2026 most of the bread was gone by lunchtime; the diner had cake on the terrace instead.', source: R + 'B537381142/' },
      ],
      japanese_sources_summary: '公式サイト (edegger-tax.jp): ホーフベッカライ エーデッガー・タックス、皇帝も愛したパン、王家御用達、1569年創業のグラーツ最古のベーカリー、ハプスブルク帝国の皇帝も認めた、8代目店主ロベルト・エーデッガー氏がウィーンで修行した菓子職人の野澤孝彦シェフに秘伝の技とレシピを託し日本店を開く、グラーツから京都へ、「いまを生きる伝統」、野澤 孝彦 (のざわ・たかひこ) は1972年埼玉県上尾市生まれ、ピアノをきっかけにオーストリア文化に興味、22歳でウィーンへ、Oberlaa・L. Heiner で修行、南ドイツの Wandinger で製パン、1999年に Neues を開業、2012年にレシピを伝授される、ハンドカイザー、キプフェル、ザルツシュタンゲル、クグロフ、カイザークグロフ、ザッハトルテ、シシーブッセル、左京区岡崎成勝寺町3-2、10:00〜18:00、水木定休。食べログ: パン・ケーキ、2020年9月19日オープン、商品の予約は可、席の予約は不可、テラス、駐車場4台、カード・電子マネー・QR可。口コミ (2025年9月〜2026年11月、英語): プレッツェル250円、ハンドカイザー胡麻240円、ライ麦全粒粉600円、クロワッサン360円、14cmのコルネ、デニッシュ、ザッハトルテ、栗のタルト、モンブラン、休日は昼までにパンが売り切れ、東京の万世橋近くから2度移転、客の半分ほどは海外から。',
      confidence: 'medium', sources: [TB, SITE, ABOUT, R + 'B481728897/', R + 'B501807645/', R + 'B535198095/', R + 'B535981649/', R + 'B536016342/', R + 'B536148936/', R + 'B536426653/', R + 'B537381142/', R + 'B537962428/', R + 'B538005351/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pick breads at the counter and pay first; drinks ordered at the table; about half the customers were from overseas (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市左京区岡崎成勝寺町3-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.013164, 135.779718); GSI 京都府京都市左京区岡崎成勝寺町 (town only, lot 3-2 not found) 220m, so the pin stays on the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536016342/'],
    price_note: 'Prices from a September 2026 receipt (tax excluded).', last_checked: TODAY, items: [
      it('ブレッツェル', '', 'Pretzel (Brezel)', '¥250', 'Bread', 'no', 'ask', '', 'pretzel'),
      it('ハンドカイザー', '', 'Handkaiser roll, sesame', '¥240', 'Bread', 'no', 'ask', '', 'roll'),
      it('', '', 'Rye wholegrain bread (Roggenvollkorn)', '¥600', 'Bread', 'no', 'ask', '', 'rye'),
      it('クロワッサン', '', 'Croissant', '¥360', 'Bread', 'no', 'no', '', 'croissant'),
      it('ザッハトルテ', '', 'Sachertorte', '', 'Cake', 'no', 'no', 'Price not given.', 'cake'),
    ] }, {
    cuisine: 'オーストリアの王家御用達のベーカリーとカフェ: 1569年創業のグラーツのホーフベッカライ エーデッガー・タックスの京都店 (公式サイト)・ハンドカイザー、ブレッツェル250円、胡麻のハンドカイザー240円、ライ麦全粒粉600円、クロワッサン360円 (2026年9月)、キプフェル、ザルツシュタンゲル、全粒粉パン・ザッハトルテ、カイザークグロフ、シシーブッセル、栗のタルト、モンブラン、ホイップのコルネ、デニッシュ・テラスでカフェも (公式サイト、2026年の口コミ)',
    neighborhood: '岡崎。東山駅から411m',
    gf_detail: 'グルテンフリーではない: 小麦やライ麦のパン、ブレッツェル、クロワッサン、ケーキのオーストリアのベーカリー (公式サイト、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: バターのクロワッサンやデニッシュ、クリームのコルネ、クリームを添えるザッハトルテ (2026年の口コミ)。ブレッツェルやライ麦パンなどは要確認。',
    notes: '[オーストリアのベーカリーカフェ・岡崎] 1569年創業のグラーツの王家御用達ベーカリーの日本店で、8代目店主がウィーンで修行した日本人の職人にレシピを託した。ハンドカイザー、ブレッツェル、ライ麦パン、大きなクリームのコルネを持ち帰りで、テラスではザッハトルテや栗のタルトを。休日はパンが早く売り切れる。水木休み。',
  });
}

// ================================================================ ATELIER PAGES KYOTO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26039802/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://atelier-pages.com/';
  const H = day(['10:00', '18:00']);
  put({
    id: 'kyoto_atelier_pages', name: 'ATELIER PAGES KYOTO (アトリエ パージュ 京都)', category: 'OMNI',
    lat: 35.010722, lng: 135.769718, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Financiers, croissants, canelés and cakes are wheat; the gelato and chocolates may suit, but no gluten information is given (official site; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Butter financiers, croissants and cheesecake are not vegan; some gelato flavours (cacao, coconut) may be dairy-free — no information given (official site; 2026 reviews).',
    hours_raw: 'Tabelog: Thu–Tue 10:00–18:00; closed Wednesday; hours may change. Cashless payment only — cards, IC cards and QR (Tabelog). Take-out by mobile order (official site). A booking-only café upstairs opened in February 2024 and a May 2024 notice paused it; the site still links café booking, and a September 2026 diner found the café crowded at weekends. No service charge listed on Tabelog. Opened 20 July 2023 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi-Oike, above Kyoto Shiyakusho-mae Stn — 94 m from the station',
    cuisine: 'Pâtisserie, gelato and chocolate from the chef of Paris’s Restaurant Pages (official site) · financiers (classic and chocolate), chocolates of Nicolas Berger couverture, gelato (chocolate 82%, Colombia 100%, seasonal fruit with fromage blanc, coffee) (official site) · canelé, Basque cheesecake, croissants and croffins ¥450, mango-coconut croissant ¥1,500, hojicha pudding (2026 reviews)',
    website: SITE, gmaps: gm('ATELIER PAGES KYOTO 下丸屋町'), menu_url: 'https://shop-atelier-pages.com/',
    notes: '[Pâtisserie & gelato · Kawaramachi-Oike] The Kyoto atelier of Ryuji Teshima, whose Restaurant Pages in Paris holds a Michelin star: AOP-butter financiers best warmed at home, chocolates, and gelato that diners say tastes of the fruit and cacao itself, to take away or eat in. Reviewers rave about the gelato and Basque cheesecake; one found the canelé and financier milder than hoped. Cashless only. Closed Wednesday.',
    chef_bio: { chef_name: '手島 竜司 (Ryuji Teshima, per the official site)', roles: ['Owner-chef of RESTAURANT PAGES in Paris, whose products this atelier sells (official site)'], origin: 'From 熊本県 (official site).',
      background: 'Per the official site: began training at 19 in a French restaurant in Kumamoto, qualified as a sommelier at 23, moved to France at 26 and trained at starred restaurants including the then three-star Lucas Carton in Paris; studied meat at Boucherie Hugo Desnoyer and produce at Terroir d’Avenir; opened RESTAURANT PAGES near the Arc de Triomphe in the 16th arrondissement in 2014 at 37; named "Grand Chef de Demain" by Gault&Millau in 2015 and opened the wine bar 116 next door; one Michelin star in 2016, held eight years running; appointed a goodwill ambassador of Kumamoto in 2016; opened ATELIER PAGES KYOTO in July 2023.',
      philosophy: 'Official site: an atelier for Paris and Kyoto, two cities of layered history, bringing "new esprit" from a Japanese chef shaped in France.',
      specialty: 'Financiers; gelato; chocolates.',
      anecdotes: [
        { text: 'An August 2026 "lunch refugee" turned away from two closed restaurants ended up with a ¥1,500 mango-coconut croissant filled with mango, coconut cream and mango pudding — "a delightful calorie bomb".', source: R + 'B470781121/' },
        { text: '"It wasn\'t just a rich chocolate flavor; it truly highlighted the fruity acidity of the cacao itself." — August 2026, on the cacao gelato.', source: R + 'B534690036/' },
        { text: 'An October 2026 diner found the croffins sugary and less generously filled than in the video.', source: R + 'B538490134/' },
      ],
      japanese_sources_summary: '公式サイト (atelier-pages.com): ATELIER PAGES、パリと京都に共通する歴史を重ねた街のアトリエ、手島 竜司 (Ryuji Teshima) は熊本県出身、19歳から熊本のフランス料理店で修行、23歳でソムリエ、26歳で渡仏、当時三ツ星の LUCAS CARTON などで修行、BOUCHERIE HUGO DESNOYER と TERROIR D’AVENIR で学ぶ、2014年37歳でパリ16区に RESTAURANT PAGES、2015年ゴーミヨ「未来の巨匠」、隣に BAR A VIN「116」、2016年にミシュラン一つ星 (8年連続)、熊本親善大使、2023年7月 ATELIER PAGES KYOTO オープン、ニコラ・ベルジェのクーベルチュールのショコラ、ジェラート (ショコラ フェルテ82%、ショコラ コロンビア100%、季節のフルーツ＋フロマージュブラン、コーヒー)、AOP バターのフィナンシェ (クラシック、ショコラ)、モバイルオーダー、2階カフェは予約制 (2024年2月に開店、5月に一時休止の告知)。食べログ: 洋菓子・ジェラート・チョコレート、中京区下丸屋町412-3、木〜火 10:00〜18:00、水曜休み、キャッシュレスのみ、2023年7月20日オープン。口コミ (2026年8月〜11月、英語): ジェラート、フィナンシェ、カヌレ、バスクチーズケーキ、クロワッサン、クロッフル450円、マンゴーとココナッツのクロワッサン1,500円、ほうじ茶プリン、週末のカフェは混む、カヌレやフィナンシェは好みが分かれる。',
      confidence: 'medium', sources: [TB, SITE, R + 'B470781121/', R + 'B533135891/', R + 'B534235556/', R + 'B534653986/', R + 'B534690036/', R + 'B536332374/', R + 'B537199036/', R + 'B537208899/', R + 'B538490134/', R + 'B538657021/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter or by mobile order; cashless only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区下丸屋町412-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.010722, 135.769718); GSI 京都府京都市中京区下丸屋町412-3 matched only a different 下丸屋町 (town level, about 1.4 km west), so it cannot confirm the lot; the pin stays on the Tabelog point, 94 m from Kyoto Shiyakusho-mae Stn as Tabelog says; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538490134/', R + 'B470781121/'],
    price_note: 'Prices from 2026 reviews; the official site sells online without listing shop prices.', last_checked: TODAY, items: [
      it('', '', 'Croffin (caramel almond or lemon)', '¥450', 'Pastry', 'no', 'no', 'October 2026.', 'croffin'),
      it('', '', 'Mango-coconut croissant', '¥1,500', 'Pastry', 'no', 'no', 'August 2026.', 'croissant'),
      it('', '', 'Financier (classic or chocolate)', '', 'Baked goods', 'no', 'no', 'Price not given.', 'financier'),
      it('', '', 'Gelato', '', 'Gelato', 'ask', 'ask', 'Price not given.', 'gelato'),
    ] }, {
    cuisine: 'パリの Restaurant Pages のシェフの洋菓子、ジェラート、チョコレート (公式サイト)・フィナンシェ (クラシック、ショコラ)、ニコラ・ベルジェのクーベルチュールのショコラ、ジェラート (ショコラ フェルテ82%、コロンビア100%、季節のフルーツとフロマージュブラン、コーヒー) (公式サイト)・カヌレ、バスクチーズケーキ、クロワッサンやクロッフル450円、マンゴーとココナッツのクロワッサン1,500円、ほうじ茶プリン (2026年の口コミ)',
    neighborhood: '河原町御池、京都市役所前駅の上。駅から94m',
    gf_detail: '要確認。フィナンシェ、クロワッサン、カヌレ、ケーキは小麦。ジェラートやショコラは合うかもしれないが、グルテンの情報はない (公式サイト、2026年の口コミ)。',
    vegan_detail: '要確認。バターのフィナンシェ、クロワッサン、チーズケーキはヴィーガンではない。カカオやココナッツのジェラートは乳不使用かもしれないが情報なし (公式サイト、2026年の口コミ)。',
    notes: '[洋菓子・ジェラート・河原町御池] パリでミシュラン一つ星の Restaurant Pages の手島竜司シェフの京都のアトリエ。AOP バターのフィナンシェ (家で温めて)、ショコラ、果物やカカオそのものの味がすると評判のジェラートを持ち帰りかイートインで。ジェラートとバスクチーズケーキが絶賛され、カヌレやフィナンシェは期待より穏やかという声も。キャッシュレスのみ。水曜休み。',
  });
}

save();
