// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle umeda; worker osw5 (lane: Tabelog id even), batch 19.
//   Ids checked for parity: 27105582, 27101726, 27088890, 27114022 (skip), 27148750 (all even).
//   + 鮨いわもと Sushi Iwamoto (eight-seat Edomae counter in Dojima since 2018, sugar-free red-vinegar rice, many overseas guests)
//   + 炭焼きと日本酒 らんぷ Sumiyaki to Nihonshu Ranpu (charcoal-grill izakaya in 兎我野町 with over 170 sakes, since 2017)
//   + 串揚げ タケナカ Kushiage Takenaka (ten-seat kushiage course without sauce in Dojima since 2015; ¥1,300 lunch)
//   + 小料理 才来天 Koryori Sairai Ten (one-chef Kagoshima-flavoured small dishes in Dojima, to 4:00, since 2025)
//   - skipped 寿司 赤酢 27114022: chain already in data (osaka_sushi_akasu_shinsaibashi "寿司 赤酢 心斎橋店", osaka_sushi_akazu_namba_premium).
//   Chain check: いわもと: one shop (official site sushi-iwamoto.com). らんぷ: invoice T7120001217995 → 株式会社ワンダライフ (NTA register), which
//   runs about 20 shops of 20 different concepts per a recruiting page; one らんぷ; 西梅田 らんぷ in data is a ramen shop with no link found.
//   タケナカ: invoice T2810737579023 → 竹中　祐希, an individual (NTA register); one shop. 才来天: invoice T5120001262804 → 株式会社Ｙ二Ｘ
//   (NTA register); one shop.
//   None is in data/osaka.json (grep by id, name and address, 2026-11-02). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw5-19');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27114022', 'chain: 寿司 赤酢, already in data (osaka_sushi_akasu_shinsaibashi, osaka_sushi_akazu_namba_premium)');

// ================================================================ 鮨いわもと
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27105582/'; const R = TB + 'dtlrvwlst/';
  const OWN = 'https://sushi-iwamoto.com/';
  const W = day(['18:00', '22:30']); const SU = day(['12:00', '14:30'], ['18:00', '22:30']);
  put({
    id: 'osaka_sushi_iwamoto_dojima', name: '鮨いわもと (Sushi Iwamoto)', category: 'MOM_AND_POP',
    lat: 34.696425, lng: 135.497680, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The rice is seasoned with red vinegar and salt only (Tabelog), but nigiri are brushed with soy and the course includes a cream dish and a piece of rice-flour bread with abalone liver sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi and seafood omakase with clam soup.',
    hours_raw: 'Dinner in two seatings, entry 18:00 and 20:30 (to 22:30), every day except Wednesday; lunch 12:00–14:30 on Sundays and some Saturdays; closed Wednesdays and some holidays (Tabelog). Reservation only; all diners start together, so call if late (Tabelog). The listing says no service charge; a February 2026 diner was charged 10% on the course. Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 8 seats at a solid hinoki counter; non-smoking; children only if eating a course (Tabelog). Opened 27 April 2018 (Tabelog).',
    hours: { 0: W, 1: W, 3: W, 4: W, 5: W, 6: SU }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '堂島1-3-9, ground floor of 日宝堂島センタービル, near 堂島アバンザ — 3 min from Kitashinchi Stn, 4 min from Nishi-Umeda Stn',
    cuisine: 'Edomae sushi on red-vinegar rice made with red vinegar and salt only, no sugar, at a hinoki counter of rare straight grain (Tabelog) · omakase of seasonal ingredients ¥22,000; Saturday lunch omakase of 15 items ¥12,000; lunch omakase ¥22,000 (Tabelog, tax included) · dishes named in 2026: clam soup, seared bonito sashimi with fresh wasabi, sea bream, a cream dish, sea-urchin rice bowl, abalone with liver sauce and sweet potato with rice-flour bread, chutoro and akami, Spanish mackerel, gari mixed with wakame, an extra-large toro-taku (April–October 2026) · sake recommended with the course (July 2026)',
    website: OWN, gmaps: gm('鮨いわもと 堂島'), menu_url: null,
    notes: "[Sushi · Dojima, red-vinegar omakase popular with visitors] An eight-seat sushi counter of solid hinoki in Dojima, open since 2018 and on Tabelog's Sushi WEST 100 list in 2022, whose chef started in Kyoto kaiseki at 16 and also cooked teppan and meat kappo before sushi. Everyone starts together for a ¥22,000 omakase on rice seasoned only with red vinegar and salt: seared bonito with fresh wasabi, a sea-urchin bowl, abalone with liver sauce mopped up with rice-flour bread, then nigiri. Many diners in 2026 were from overseas; the staff explain dishes in English and there are explanation cards and menus for visitors. Sunday lunch too.",
    chef_bio: { chef_name: '正木美則', roles: ['Head chef (大将)', 'staff'], origin: null, background: 'Per the official site: 大将 正木 美則 entered the culinary world at 16, worked at first-class hotels, ryokan and restaurants, starting with Kyoto kaiseki and training at top shops of sushi, teppan and meat kappo. Per the shop-maintained Tabelog listing: ten years at a top hotel, then ten years at sushi restaurants in Kyoto, Tokyo and Osaka; opened 27 April 2018; Tabelog Sushi WEST 100 in 2022. A July 2026 regular has followed the chef since the chef\'s earlier meat-kaiseki restaurant.', philosophy: '"Our rice is made using only red vinegar and salt, without any sugar at all." (Tabelog)', specialty: 'Red-vinegar Edomae omakase.',
      anecdotes: [
        { text: '"At the start of the meal, our group was the only one with Japanese guests; everyone else was foreign." — February 2026; the staff explained dishes in English.', source: R + 'B523638465/' },
        { text: '"The restaurant has only 8 seats, making it quite cozy, but this actually allowed the staff to provide thoughtful service, which I really appreciated." — May 2026, a left-handed diner served accordingly.', source: R + 'B528633774/' },
        { text: '"I always ask for the extra-large toro-taku, which is incredibly satisfying." — July 2026, a regular.', source: R + 'B534620167/' },
      ],
      japanese_sources_summary: '公式サイト: 鮨いわもと、大阪梅田・北新地の寿司屋、大将 正木 美則、16歳から料理の世界へ、一流ホテル、旅館、飲食店、京懐石から始まり、寿司、鉄板、肉割烹などの一流店で修業。食べログ (店舗会員): 鮨いわもと、寿司・海鮮・日本料理、大阪市北区堂島1-3-9 日宝堂島センタービル 1F、北新地駅から3分、西梅田駅から4分、夜は2部制 (18:00、20:30の一斉スタート)、日曜と土曜の一部は昼12:00から、水曜と祝日の一部休み、予約のみ、サービス料なし、カード可、電子マネー・QR 不可、檜の一枚板のカウンター8席、禁煙、2018年4月27日オープン、食べログ 寿司 WEST 百名店 2022、砂糖を使わず赤酢と塩だけのシャリ、季節のおまかせ22,000円、土曜のおまかせ寿司ランチ15品12,000円。口コミ(2026年2月〜10月): 海外のお客さんが多い、英語で説明、外国人向けの説明カードとメニュー、サービス料10%という声、ハマグリのお椀、カツオの炙りと生わさび、鯛、クリームの料理、ウニ丼、アワビの肝ソースとさつまいもと米粉のパン、中トロと赤身、サワラ、わかめを混ぜたガリ、特大のトロたく、左利きに合わせて出してくれた、以前の肉割烹のころからのファン、大将が無口だったという声。',
      confidence: 'medium', sources: [TB, OWN, R + 'B523638465/', R + 'B525970338/', R + 'B525987770/', R + 'B528231632/', R + 'B528633774/', R + 'B530177250/', R + 'B534620167/', R + 'B537226989/', R + 'B537690490/', R + 'B538277150/'] },
    cultural_comfort: { level: 'english', note: 'February–April 2026 diners report many overseas guests, dishes explained in English, and explanation cards and menus for international visitors.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂島1-3-9 日宝堂島センタービル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島一丁目3番 (lot) 31m; nearest other record osaka_kitashinchi_teppan_ken 15 m away at a different address (堂島1-3-8); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from the Tabelog listing (tax included).', last_checked: TODAY, items: [
      it('', '', 'Omakase course of seasonal ingredients (dinner)', '¥22,000', 'Courses', 'ask', 'no', 'Tabelog; 2026.', 'omakase'),
      it('', '', 'Saturday omakase sushi lunch, 15 items', '¥12,000', 'Lunch', 'ask', 'no', 'Tabelog.', 'sat_lunch'),
    ] }, {
    cuisine: '砂糖を使わず赤酢と塩だけのシャリの江戸前寿司を、柾目の珍しい檜の一枚板のカウンターで (食べログ)・季節のおまかせ22,000円、土曜のおまかせ寿司ランチ15品12,000円、ランチのおまかせ22,000円 (食べログ、税込)・2026年の口コミに出てくる料理: ハマグリのお椀、カツオの炙りと生わさび、鯛、クリームの料理、ウニ丼、アワビの肝ソースとさつまいもと米粉のパン、中トロと赤身、サワラ、わかめを混ぜたガリ、特大のトロたく (2026年4月〜10月)・コースに合わせた日本酒 (2026年7月)',
    neighborhood: '堂島1-3-9、日宝堂島センタービルの1階、堂島アバンザの近く。北新地駅から3分、西梅田駅から4分',
    gf_detail: '要確認。グルテンの情報なし。シャリは赤酢と塩だけ (食べログ) だが、にぎりには醤油をぬり、コースにはクリームの料理やアワビの肝ソースにつける米粉のパンも。',
    vegan_detail: 'ヴィーガンではありません。寿司と魚介のおまかせで、ハマグリのお椀も。',
    notes: '[寿司・堂島、海外の客も多い赤酢のおまかせ] 2018年からの堂島の檜の一枚板のカウンター8席の寿司屋で、食べログ 寿司 WEST 百名店 2022。大将は16歳で京懐石から始め、鉄板や肉割烹も経て寿司へ。全員一斉スタートの22,000円のおまかせで、シャリは赤酢と塩だけ: 生わさびのカツオの炙り、ウニ丼、米粉のパンでぬぐうアワビの肝ソース、それからにぎり。2026年の口コミでは海外からのお客さんが多く、英語での説明や外国人向けの説明カードとメニューも。日曜は昼も。',
  });
}

// ================================================================ 炭焼きと日本酒 らんぷ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27101726/'; const R = TB + 'dtlrvwlst/';
  const W = day(['12:00', '23:00']);
  put({
    id: 'osaka_sumiyaki_nihonshu_ranpu_togano', name: '炭焼きと日本酒 らんぷ (Sumiyaki to Nihonshu Ranpu)', category: 'OMNI',
    lat: 34.701292, lng: 135.503589, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Charcoal-grilled meat and fish, meat sashimi, wagyu sushi, buri daikon, Caesar salad with crackers.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu, chicken and fish dishes. Tabelog ticks "vegetarian options", but none is named.',
    hours_raw: 'Tue–Sun and holidays 12:00–23:00 (last order food 22:15, drinks 22:30); closed Mondays (Tuesday when Monday is a holiday) and 31 December–1 January (Tabelog). Reservations accepted, online at any hour; same-day course bookings possible (June 2026). Seat and starter charge ¥440, not with courses (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), PayPay; no e-money (Tabelog). 50 seats, up to 60 standing; private rooms for 6 and for groups; terrace; smoking allowed throughout, so no one under 20 (Tabelog). Opened 15 November 2017 (Tabelog).',
    hours: { 1: W, 2: W, 3: W, 4: W, 5: W, 6: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '兎我野町11-19, unit 101 of 本社浪速ビル — 5 min from Higashi-Umeda Stn, 8 min from Hankyu Umeda',
    cuisine: 'Izakaya of black wagyu and Yamato chicken grilled over binchotan or served as sashimi, grilled seafood, binchotan tataki and wagyu sushi, with over 170 sakes including Juyondai, Aramasa and Jikon (Tabelog) · courses with two hours of drinks (Tabelog, tax included; ¥500 more from 11 December to 3 January): seasonal course ¥5,000; "Lamp" course of eight dishes with charcoal-grilled wagyu and red-vinegar nigiri ¥6,000 · sashimi platter of fish, wagyu and Satsuma chicken ¥2,170 a head, two or more, by reservation (Tabelog) · dishes named in 2026: a half head of lettuce charcoal-grilled as a Caesar salad, meat sashimi, grilled steak, buri daikon, cheese with crackers, meat nigiri; sake flights, Dewazakura and junmai daiginjo (March–September 2026)',
    website: null, gmaps: gm('炭焼きと日本酒 らんぷ 兎我野町'), menu_url: null,
    notes: "[Izakaya · 兎我野町, binchotan grill and 170 sakes] A large, relaxed izakaya in 兎我野町 east of Umeda, open from noon, built around a binchotan grill and more than 170 sakes, rare labels included, with tasting flights and drink-inclusive courses. Order the meat sashimi and wagyu, the half head of lettuce charred as a Caesar salad, and a buri daikon; the ¥6,000 course with two hours of drinks covers the house hits. Smoking is allowed everywhere, so no one under 20 may enter. One July 2026 diner found the cocktails weak and the premium sakes pricey; most praise the sake list.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'Per the shop-maintained Tabelog listing: wagyu and Yamato chicken grilled over binchotan or served as sashimi, over 170 sakes, all-you-can-drink, sake tastings and lucky draws; opened 15 November 2017. The Tabelog invoice number T7120001217995 is registered to 株式会社ワンダライフ (NTA invoice register, read 2026-11-02).', philosophy: null, specialty: 'Binchotan wagyu; sake list.',
      anecdotes: [
        { text: '"The lettuce is grilled, giving it a unique flavor that you can\'t replicate at home!" — April 2026, the Caesar salad.', source: R + 'B526691580/' },
        { text: '"The grilled steak and meat sashimi at Ranpu are incredibly delicious." — May 2026.', source: R + 'B529312236/' },
        { text: '"It’s likely the best spot in Umeda for Japanese sake, boasting an impressive selection of over 100 varieties." — June 2026.', source: R + 'B529445654/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 炭焼きと日本酒 らんぷ、居酒屋・寿司・日本酒バー、大阪市北区兎我野町11-19 本社浪速ビル 101、東梅田駅から5分、阪急梅田駅から8分、火〜日・祝12:00〜23:00 (L.O.料理22:15、ドリンク22:30)、月曜休み、12月31日と1月1日休み、予約可、チャージとお通しで440円 (コースは不要)、カード・PayPay 可、50席 (立食60名)、個室、テラス、全席喫煙可で20歳未満は入店不可、2017年11月15日オープン、備長炭で焼く黒毛和牛とYamato の鶏、肉刺し、魚介の炭火焼き、和牛の寿司、日本酒170種以上 (Juyondai、Aramasa、Jikon など)、飲み放題、利き酒、2時間飲み放題つきの季節のコース5,000円と8品のらんぷコース6,000円、魚と和牛と Satsuma の鶏の刺身盛り合わせ2,170円。インボイス登録は株式会社ワンダライフ。口コミ(2026年3月〜9月): レタス半玉の炭火焼きシーザーサラダ、肉刺し、ステーキ、ぶり大根、チーズとクラッカー、肉寿司、日本酒の飲み比べ、Dewazakura、当日でもコースの予約ができた、カクテルがうすかったという声、高い日本酒は2,500円ほど。',
      confidence: 'medium', sources: [TB, R + 'B473741125/', R + 'B525161448/', R + 'B526691580/', R + 'B527047464/', R + 'B529312236/', R + 'B529445654/', R + 'B530930375/', R + 'B531571548/', R + 'B532550152/', R + 'B536591777/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Photo and digital menus (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区兎我野町11-19 本社浪速ビル 101',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区兎我野町11番19号 (go) 17m; no other record within 30 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from the Tabelog listing (tax included).', last_checked: TODAY, items: [
      it('', '', 'Lamp course of eight dishes with two hours of drinks', '¥6,000', 'Courses', 'ask', 'no', 'Tabelog.', 'lamp_course'),
      it('', '', 'Seasonal course with two hours of drinks', '¥5,000', 'Courses', 'ask', 'no', 'Tabelog; September 2026.', 'seasonal_course'),
      it('', '', 'Sashimi platter of fish, wagyu and chicken (per person, two or more)', '¥2,170', 'À la carte', 'ask', 'no', 'Tabelog.', 'sashimi_platter'),
    ] }, {
    cuisine: '備長炭で焼くか刺身で出す黒毛和牛とYamato の鶏、魚介の炭火焼き、備長炭のたたき、和牛の寿司に、Juyondai、Aramasa、Jikon など170種以上の日本酒の居酒屋 (食べログ)・2時間飲み放題つきのコース (食べログ、税込、12月11日〜1月3日は500円増し): 季節のコース5,000円、炭火の和牛と赤酢のにぎりの8品の「らんぷコース」6,000円・魚と和牛と Satsuma の鶏の刺身盛り合わせ、ひとり2,170円、2名から予約制 (食べログ)・2026年の口コミに出てくる料理: レタス半玉を炭火で焼いたシーザーサラダ、肉刺し、ステーキ、ぶり大根、チーズとクラッカー、肉寿司。日本酒の飲み比べ、Dewazakura、純米大吟醸 (2026年3月〜9月)',
    neighborhood: '兎我野町11-19、本社浪速ビルの101。東梅田駅から5分、阪急梅田駅から8分',
    gf_detail: '要確認。グルテンの情報なし。炭火焼きの肉と魚、肉刺し、和牛の寿司、ぶり大根、クラッカーつきのシーザーサラダ。',
    vegan_detail: 'ヴィーガンではありません。和牛、鶏、魚の料理。食べログに「ベジタリアンメニューあり」とあるが、料理の名前はない。',
    notes: '[居酒屋・兎我野町、備長炭と170種の日本酒] 梅田の東の兎我野町にある大きなゆったりした居酒屋で、昼から開いている。備長炭の焼き台と、珍しい銘柄もふくむ170種以上の日本酒が中心で、飲み比べや飲み放題つきのコースも。おすすめは肉刺しと和牛、レタス半玉を炭火で焼いたシーザーサラダ、ぶり大根。2時間飲み放題つき6,000円のコースで名物がひととおり。全席喫煙可で、20歳未満は入れない。カクテルがうすく高い日本酒は値が張るという声もある (2026年7月) が、日本酒の品ぞろえをほめる声が多い。',
  });
}

// ================================================================ 串揚げ タケナカ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27088890/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '14:00'], ['18:00', '22:00']); const S = day(['18:00', '22:00']);
  put({
    id: 'osaka_kushiage_takenaka_dojima', name: '串揚げ タケナカ (Kushiage Takenaka)', category: 'MOM_AND_POP',
    lat: 34.696457, lng: 135.498210, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: kushiage in a batter and crumb, with a shrimp toast and a truffle croquette among the dishes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat and seafood skewers and dishes such as a consommé jelly with sea urchin.',
    hours_raw: 'Lunch Mon–Fri 11:30–14:00 (last order 13:30), no bookings; dinner Mon–Sat 18:00–22:00; closed Sundays and holidays (Tabelog). Tell the shop of allergies or dislikes in advance (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), IC cards, Edy, iD, PayPay, d Barai, Rakuten Pay, au PAY (Tabelog). 10 counter seats; non-smoking; from junior-high age (Tabelog). Opened 17 November 2015 (Tabelog). Lunch fills by 11:40 (July 2026).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '堂島1-3-4, basement unit B01 of 谷安ビル on Funadaiku Street — 5 min from Kitashinchi Stn',
    cuisine: 'Kushiage course of Japanese and French ideas, each skewer pre-seasoned with its own topping so no sauce is needed, a Japanese dish and a Western plate among the skewers, clay-pot rice to finish; wine chosen by a sommelier (Tabelog) · courses (Tabelog, tax included): monthly kushiage course of 15 items ¥6,820; "Bamboo" full course of 16 ¥9,680; special omakase of 19 ¥11,880 · dishes named in 2026: consommé jelly with carrot mousse and sea urchin, truffle croquette, shrimp toast; a very thin batter (August–September 2026) · weekday lunch ¥1,300: appetizers, green salad, freshly fried skewers with toppings, rice, miso soup and chai (July–October 2026)',
    website: null, gmaps: gm('串揚げ タケナカ 堂島'), menu_url: null,
    notes: "[Kushiage · Dojima, skewers without sauce] A white, ten-seat kushiage counter in a basement on Kitashinchi's Funadaiku Street, open since 2015, where each skewer comes already seasoned with its own topping, so there is no sauce pot. The batter is thin, and the course weaves in Japanese and French dishes, a consommé jelly with sea urchin, a truffle croquette, a shrimp toast, before clay-pot rice: ¥6,820–11,880. Weekday lunch is a ¥1,300 bargain of appetizers, salad, skewers, rice, miso soup and a chai, full by 11:40. A regular of ten years has been more than thirty times.",
    chef_bio: { chef_name: null, roles: ['Owner (the invoice holder, 竹中祐希)', 'chef and a female staff member'], origin: null, background: 'The Tabelog invoice number T2810737579023 is registered to an individual, 竹中　祐希 (NTA invoice register, read 2026-11-02), whose family name matches the shop name. Per the shop-maintained Tabelog listing: a Japanese-French kushiage course without sauce, a Japanese dish and a Western plate, clay-pot rice, sommelier-chosen wine; opened 17 November 2015.', philosophy: null, specialty: 'Pre-seasoned kushiage course.',
      anecdotes: [
        { text: '"This is my favorite kushiage restaurant, and I\'ve been here over 30 times without even realizing it." — June 2026.', source: R + 'B446546456/' },
        { text: '"At the end, we were served chai… that was a nice surprise!" — July 2026, the weekday lunch.', source: R + 'B531332927/' },
        { text: '"I was surprised by the thin batter. This is a completely different kind of Kushiage." — September 2026, a business trip to Osaka.', source: R + 'B535408620/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 串揚げ タケナカ、串揚げ・日本料理、大阪市北区堂島1-3-4 谷安ビル B01号、北新地の Funadaiku 通りの地下、北新地駅から5分、阪神梅田駅から10分、月〜金11:30〜14:00 (L.O.13:30)、18:00〜22:00、土18:00〜22:00、日・祝休み、ランチは予約不可、苦手な食材やアレルギーは事前に、カード・電子マネー・QR 可、カウンター10席、禁煙、中学生から、2015年11月17日オープン、和と洋の串揚げのコース、ソースをつけない串、和の一品と洋の一皿、土鍋のごはん、ソムリエが選ぶワイン、月替わりの串揚げコース15品6,820円、和洋の全コース16品9,680円、特別おまかせ19品11,880円。インボイス登録は個人の竹中祐希。口コミ(2026年6月〜10月): 30回以上通う常連、10年通う常連、にんじんのムースとウニのコンソメジュレ、トリュフのコロッケ、海老トースト、とても薄い衣、串ごとにちがう薬味、ランチ1,300円 (前菜、グリーンサラダ、揚げたての串、ごはん、みそ汁、チャイ)、11時40分には満席、大将と女性スタッフのもてなし、女性のひとり客も多い。',
      confidence: 'medium', sources: [TB, R + 'B446546456/', R + 'B495257025/', R + 'B531332927/', R + 'B533991246/', R + 'B534068006/', R + 'B534332301/', R + 'B535408620/', R + 'B535446065/', R + 'B536260565/', R + 'B537010564/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses at a counter; a single lunch set (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市北区堂島1-3-4 谷安ビル B01号',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島一丁目3番 (lot) 37m. 小料理 才来天 of this batch (osaka_koryori_sairaiten_dojima, "堂島1-3-4 B1F") is in the same basement with its pin about 8 m away, so both pins are block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B534068006/'],
    price_note: 'Course prices from the Tabelog listing (tax included); lunch from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Weekday kushiage lunch with appetizers, salad, rice, miso soup and chai', '¥1,300', 'Lunch', 'no', 'no', 'July 2026.', 'lunch'),
      it('', '', 'Monthly kushiage course, 15 items', '¥6,820', 'Dinner', 'no', 'no', 'Tabelog.', 'monthly_course'),
      it('', '', '"Bamboo" full course, 16 items', '¥9,680', 'Dinner', 'no', 'no', 'Tabelog.', 'bamboo_course'),
      it('', '', 'Special omakase, 19 items', '¥11,880', 'Dinner', 'no', 'no', 'Tabelog; August 2026.', 'special_omakase'),
    ] }, {
    cuisine: '和とフレンチを合わせた串揚げのコースで、串ごとに薬味で味がついていてソースはいらない。串の合間に和の一品と洋の一皿、〆は土鍋のごはん。ソムリエが選ぶワイン (食べログ)・コース (食べログ、税込): 月替わりの串揚げコース15品6,820円、和洋の全コース16品9,680円、特別おまかせ19品11,880円・2026年の口コミに出てくる料理: にんじんのムースとウニのコンソメジュレ、トリュフのコロッケ、海老トースト。とても薄い衣 (2026年8月〜9月)・平日のランチ1,300円: 前菜、グリーンサラダ、薬味つきの揚げたての串、ごはん、みそ汁、チャイ (2026年7月〜10月)',
    neighborhood: '堂島1-3-4、Funadaiku 通りの谷安ビルの地下 B01号。北新地駅から5分',
    gf_detail: 'グルテンフリーではありません。衣とパン粉の串揚げに、海老トーストやトリュフのコロッケも。',
    vegan_detail: 'ヴィーガンではありません。肉と魚介の串と、ウニのコンソメジュレなどの料理。',
    notes: '[串揚げ・堂島、ソースのいらない串] 2015年からの北新地の Funadaiku 通りの地下にある白いカウンター10席の串揚げの店で、串ごとに薬味で味がついていてソースはない。衣は薄く、コースには和と洋の一皿がはさまる: ウニのコンソメジュレ、トリュフのコロッケ、海老トースト、そして土鍋のごはん。6,820〜11,880円。平日のランチは1,300円とお得で、前菜、サラダ、串、ごはん、みそ汁、チャイ、11時40分には満席。10年通い30回以上という常連も。',
  });
}

// ================================================================ 小料理 才来天
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27148750/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:00', '04:00']); const S = day(['17:00', '23:00']);
  put({
    id: 'osaka_koryori_sairaiten_dojima', name: '小料理 才来天 (Koryori Sairai Ten)', category: 'OMNI',
    lat: 34.696388, lng: 135.498209, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Small dishes in dashi and soy, a black-wagyu cutlet, chicken kara-age and saikyo-miso fish.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, wagyu, venison and dashi dishes.',
    hours_raw: 'Mon–Fri 17:00–4:00 (last order food 3:00, drinks 3:30); Sat 17:00–23:00 (last order 22:00); closed Sundays and holidays (Tabelog). Reservations accepted; à la carte seat bookings come with a few starters (¥3,300–5,500 by season) before 21:00, appetizers only after 21:00 (Tabelog). Service charge 10%; corkage ¥5,000 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), PayPay; no e-money (Tabelog). 16 seats: a counter of 8 and two tables of 4; heated tobacco until 21:00 (Tabelog). Opened 14 April 2025 (Tabelog). One cook, so dishes come at a gentle pace (August 2026).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '堂島1-3-4, basement — 5 min from Kitashinchi Stn',
    cuisine: 'Small seasonal dishes by a young chef from Kagoshima: Kagoshima black wagyu, fish and vegetables sent from the producing areas, and shochu, sake and whisky chosen by the Kyushu-born cooks (Tabelog; 2026) · seasonal omakase of 11 items, meat and fish ¥11,000 (Tabelog, tax included) · dishes named in August–November 2026: appetizers of iwa-mozuku, salted tofu, simmered whelk, black edamame, shungiku with persimmon; three-day-aged kinmedai sashimi; squid with Tosa vinegar; matsutake dobin-mushi; saikyo-miso black cod; roast duck; black-wagyu tataki and cutlet; venison heart sashimi; chicken kara-age; stuffed baby squid with its liver · many imo shochu from Kagoshima; sakes such as Koei-giku (October 2026)',
    website: null, gmaps: gm('小料理 才来天 堂島'), menu_url: null,
    notes: "[Izakaya · Dojima, a young Kagoshima chef's small dishes] A sixteen-seat basement eatery in Dojima, open since April 2025 and until 4:00 on weekdays, run single-handed by a Kagoshima-born chef in the late twenties who trained in Kyoto. Expect kaiseki-trained small dishes with izakaya ease: a run of appetizers such as rock mozuku and salted tofu, three-day-aged kinmedai, matsutake dobin-mushi, saikyo black cod and Kagoshima wagyu, with a long list of imo shochu. The ¥11,000 omakase or à la carte both work; 10% service. With one cook, dishes come slowly, so allow time.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), working alone'], origin: 'Kagoshima (per 2026 reviews)', background: 'Per the shop-maintained Tabelog listing: authentic dishes of seasonal ingredients, Kagoshima black wagyu, seafood and vegetables sent from the regions, shochu, sake and whisky chosen by chefs from Kyushu; opened 14 April 2025. The Tabelog invoice number T5120001262804 is registered to 株式会社Ｙ二Ｘ (NTA invoice register, read 2026-11-02). 2026 reviews describe the owner as a chef in the 20s from Kagoshima, 27 per an October 2026 diner, trained in Kyoto, and running the shop alone.', philosophy: null, specialty: 'Seasonal small dishes; Kagoshima shochu.',
      anecdotes: [
        { text: '"Since it\'s a one-person operation, the pace of the dishes is a bit slow, so it\'s best to visit when you have time." — August 2026.', source: R + 'B534089162/' },
        { text: '"This cozy eatery is run by a talented 27-year-old chef who trained in Kyoto, combining the authenticity of kaiseki cuisine with the casual atmosphere of an izakaya." — October 2026.', source: R + 'B538112361/' },
        { text: '"The sashimi was aged Kinmedai (Golden Eye Snapper) for three days, perfectly complemented by the grated daikon radish." — October 2026.', source: R + 'B538112361/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 小料理 才来天、日本料理・居酒屋・海鮮、大阪市北区堂島1-3-4 B1F、北新地駅から5分、月〜金17:00〜4:00 (L.O.料理3:00、ドリンク3:30)、土17:00〜23:00 (L.O.22:00)、日・祝休み、予約可、席の予約でも先付を数品 (季節で3,300〜5,500円)、21時以降はおつまみのみ、サービス料10%、持ち込み料5,000円、カード・PayPay 可、16席 (カウンター8、4名のテーブル2)、21時までは加熱式たばこ可、2025年4月14日オープン、Kagoshima の黒毛和牛と産地直送の魚介と野菜、Kyushu 出身の料理人が選ぶ焼酎と日本酒とウイスキー、季節のおまかせコース11品11,000円。インボイス登録は株式会社Ｙ二Ｘ。口コミ(2026年8月〜11月): 20代の若い大将、Kagoshima 出身、Kyoto で修業、27歳、ひとりで営業なので料理はゆっくり、岩もずく、塩豆腐、バイ貝の煮物、黒枝豆、春菊と柿、3日熟成のキンメダイの刺身、イカの土佐酢、松茸の土瓶蒸し、銀だらの西京焼き、鴨のロースト、黒毛和牛のたたきとカツ、鹿のハツの刺身、鶏の唐揚げ、小イカの肝詰め、芋焼酎が豊富、中学の先生が訪ねてきた、Koei-giku の日本酒。',
      confidence: 'medium', sources: [TB, R + 'B534089162/', R + 'B534368745/', R + 'B534653972/', R + 'B535632014/', R + 'B536465204/', R + 'B536920790/', R + 'B537535218/', R + 'B537806798/', R + 'B538112361/', R + 'B538491616/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Omakase or à la carte at a counter (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_approx: 'block', address_ja: '大阪府大阪市北区堂島1-3-4 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島一丁目3番 (lot) 42m. 串揚げ タケナカ of this batch (osaka_kushiage_takenaka_dojima, "堂島1-3-4 谷安ビル B01号") is in the same basement with its pin about 8 m away, so both pins are block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Prices from the Tabelog listing (tax included; 10% service extra).', last_checked: TODAY, items: [
      it('', '', 'Seasonal omakase course, 11 items', '¥11,000', 'Courses', 'ask', 'no', 'Tabelog; September 2026.', 'omakase'),
      it('', '', 'À la carte seat booking with starters (before 21:00)', '¥3,300–5,500', 'Charges', 'ask', 'no', 'Tabelog.', 'seat_booking'),
    ] }, {
    cuisine: 'Kagoshima 出身の若い大将の季節の小料理: Kagoshima の黒毛和牛、産地から届く魚と野菜、Kyushu 出身の料理人が選ぶ焼酎、日本酒、ウイスキー (食べログ、2026年)・肉と魚の季節のおまかせ11品11,000円 (食べログ、税込)・2026年8月〜11月の口コミに出てくる料理: 岩もずく、塩豆腐、バイ貝の煮物、黒枝豆、春菊と柿の先付、3日熟成のキンメダイの刺身、イカの土佐酢、松茸の土瓶蒸し、銀だらの西京焼き、鴨のロースト、黒毛和牛のたたきとカツ、鹿のハツの刺身、鶏の唐揚げ、小イカの肝詰め・Kagoshima の芋焼酎が豊富、Koei-giku などの日本酒 (2026年10月)',
    neighborhood: '堂島1-3-4、地下1階。北新地駅から5分',
    gf_detail: '要確認。グルテンの情報なし。だしと醤油の小料理、黒毛和牛のカツ、鶏の唐揚げ、西京焼きの魚。',
    vegan_detail: 'ヴィーガンではありません。魚、和牛、鹿、だしの料理。',
    notes: '[居酒屋・堂島、Kagoshima 出身の若い大将の小料理] 2025年4月からの堂島の地下の16席の店で、平日は朝4時まで。Kyoto で修業した20代後半の Kagoshima 出身の大将がひとりで営む。懐石仕込みの小料理を居酒屋の気軽さで: 岩もずくや塩豆腐などの先付から、3日熟成のキンメダイ、松茸の土瓶蒸し、銀だらの西京焼き、Kagoshima の和牛、芋焼酎も豊富。11,000円のおまかせでもアラカルトでも、サービス料10%。料理人ひとりなので、時間に余裕をもって。',
  });
}

save();
