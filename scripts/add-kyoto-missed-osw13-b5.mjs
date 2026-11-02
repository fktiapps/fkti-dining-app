// Kyoto "what did we miss" pass (kyoto-missed, notable phase) — lane osw13, batch 5.
//   + 啐啄 つか本 Sottaku Tsukamoto (8-seat Gion kaiseki counter, Tabelog Gold 2024–2026; not taking new reservations)
//   + やまぐち Yamaguchi (referral-only Japanese-Italian of owner-chef Yamaguchi in a Gion townhouse; Tabelog Silver; since 2011)
//   + 中国菜 Guu (6-seat Chinese counter of owner-chef 宮谷要 Kaname Miyatani by Kiyamachi-Nijo; since 2022)
//   + きう Kiu (5-seat creative sushi near Shijo-Karasuma, booked as private sittings; since 2020)
//   The first four entries of `queue.mjs kyoto-missed next notable 80` on 2026-11-01 (after the crawl added more listings).
//   None is in data/kyoto.json: grep by name (つか本/Tsukamoto, やまぐち/Yamaguchi, Guu, きう/Kiu) and by address
//   (570-120, 570-185, 樋之口, 神明町230) found nothing. Nearest records are other shops: kyoto_niku_no_takumi_miyoshi_gion
//   73 m from Yamaguchi (address_ja "…祇園町南側570-15", not 570-185); mp_okazuya_ishikawa 45 m and mp_kuchibashi_modan 69 m
//   from Kiu. Chain check: single restaurants; a 2026 review says Yamaguchi has a sister restaurant in Amanohashidate, and
//   Guu runs a referral-only mail-order dim sum business (official site). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-5');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 啐啄 つか本
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26013373/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '22:00']);
  put({
    id: 'kyoto_sottaku_tsukamoto_gion', name: '啐啄 つか本 (Sottaku Tsukamoto)', category: 'MOM_AND_POP',
    lat: 35.001894, lng: 135.774314, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask through whoever books for you (the shop takes no new reservations). No gluten information; a Japanese course seasoned with soy sauce and miso, with sushi and dashi-based dishes (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a kaiseki course built on dashi, with fish, crab, duck and hamo (2025–2026 reviews).',
    hours_raw: 'Mon, Tue, Thu–Sun 18:00–22:00 (last order 21:00); closed Wednesday (Tabelog). Tabelog says the shop is not accepting new reservations; diners in 2025–2026 came as guests of regulars, and one December 2025 sitting started at 20:30. 8 seats at an L-shaped counter (Tabelog; October 2025 review). No photographs, and the shop prefers that dishes not be described (Tabelog; 2025 reviews). Cash only: no cards, e-money or QR (Tabelog). Non-smoking (Tabelog). Moved here in June 2008 from Pontocho (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Gion, on Nishi-hanamikoji street — about 5–7 min from Gion-Shijo Stn',
    cuisine: 'An omakase kaiseki of simple, ingredient-first Japanese dishes with notably well-balanced sauces and dressings (2025–2026 reviews) · about ¥35,000–37,000 with sake (August and December 2025); diners report ¥30,000–49,999 (Tabelog) · summer 2025: corn with tomato jelly, simmered Awaji octopus, fig and walnut with sesame, charcoal-grilled hamo with salted wasabi and plum, grilled anago sushi, grilled ayu, grilled abalone, clay-pot rice with Manganji peppers · winter 2025: seiko crab, soft roe, duck, crab rice porridge · October 2026: fig and chestnut, pressed mackerel sushi, sea bream sashimi with chrysanthemum and dashi, a soup of Matsutake and hamo · Japanese sake',
    website: TB, gmaps: gm('啐啄 つか本 祇園'), menu_url: null,
    notes: "[Kaiseki · Gion, one of Kyoto's hardest seats] Eight seats at an L-shaped counter on Nishi-hanamikoji, under a framed “Sottaku Dōji”. Chef Tsukamoto cooks quiet, exact Japanese food — figs with sesame, hamo grilled over charcoal, pressed mackerel sushi, a Matsutake and hamo soup — that diners praise for its sauces and dressings rather than show. No photos, no menu talk, cash only. The shop moved here from Pontocho in 2008; one 2025 reviewer lists two Michelin stars from 2011 to 2016. Tabelog Gold 2024–2026. It is not taking new reservations, so the only way in is with a regular.",
    chef_bio: { chef_name: 'Tsukamoto (surname only, from the shop name and an October 2026 review: "Tsukamoto-san"; the given name is not in a source)', roles: ['Owner-chef (2025 reviews: "the owner prefers not to share photos or details about the dishes"; "a chef who has trained at renowned establishments before becoming independent")'], origin: null,
      background: 'Moved in June 2008 from "210-3 Nabeyacho, 2nd Floor, Pontocho-dori" (Tabelog\'s English). An August 2025 reviewer lists Michelin stars: one in 2010, two from 2011 to 2016, and OAD Top Restaurants in Japan 2026 at 499. A framed "Sottaku Dōji" hangs in the room (August 2025). Tabelog Award Silver 2019–2023, Gold 2024–2026; Japanese cuisine WEST "Tabelog 100" 2021, 2023, 2025. Tabelog notes that new reservations are not accepted; a November 2025 diner was invited by a regular.',
      philosophy: null, specialty: 'Ingredient-first kaiseki; sauces and dressings; pressed mackerel sushi.',
      anecdotes: [
        { text: '"Currently, they are not accepting new reservations. I was fortunate to be invited this time." — November 2025.', source: R + 'B519243969/' },
        { text: '"What stood out to me was the deliciousness of the sauces and dressings. They were expertly balanced with acidity." — October 2025.', source: R + 'B517817356/' },
        { text: '"The only dish that felt traditionally Japanese was the Matsutake mushroom and conger eel soup from Koyasan." — October 2026.', source: R + 'B538214019/' },
      ],
      japanese_sources_summary: '食べログ: 啐啄 つか本、日本料理、東山区祇園町南側570-120、月・火・木〜日 18:00〜22:00 (L.O.21:00)、水曜休み、新規の予約は受け付けていない、カウンター8席、カード・電子マネー・QR不可、禁煙、2008年6月に Pontocho の Nabeyacho 210-3 2F から移転、撮影不可、The Tabelog Award Silver 2019〜2023・Gold 2024〜2026、日本料理 WEST 百名店 2021・2023・2025。口コミ (2025年7月〜2026年10月、英語): 常連の招待で、料理の撮影と内容の公開は控えてほしいという方針、ソースや和え衣の酸味のバランス、鯖の押し寿司、Matsutake と hamo の椀。',
      confidence: 'medium', sources: [TB, R + 'B489394832/', R + 'B513163596/', R + 'B517817356/', R + 'B518905117/', R + 'B519243969/', R + 'B519902241/', R + 'B531136649/', R + 'B535688219/', R + 'B538214019/', R + 'B80324620/'] },
    cultural_comfort: { level: 'japanese', note: 'Not taking new reservations: guests come with regulars; no photos; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町南側570-120',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (not shop-maintained); reviews dated through October 2026. No official website found.' },
    pin_source: `Tabelog ${TB} (35.001894, 135.774314); GSI resolves 京都府京都市東山区祇園町南側570番地 (lot, the large 570 block, not 570-120) 191m away, outside 150m, and OSM was not queried (sweep rule: GSI only), so the pin rests on the Tabelog point alone; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B519902241/', R + 'B513163596/'],
    price_note: 'No menu or prices are published; prices are what 2025 diners paid, food and drink together.', last_checked: TODAY, items: [
      it('', '', 'Omakase course with sake (total paid)', '¥35,000', 'Course', 'ask', 'no', 'December 2025; ¥37,000 in August 2025.', 'omakase'),
      it('', '', 'Pressed mackerel sushi (in course)', '', 'Course', 'ask', 'no', 'October 2026.', 'saba_sushi'),
    ] }, {
    cuisine: '素材を生かした素朴で的確な日本料理のおまかせ。ソースや和え衣のバランスが光る (2025〜2026年の口コミ)・酒込みで約35,000〜37,000円 (2025年8月、12月)。口コミの予算は30,000〜49,999円 (食べログ)・2025年夏: とうもろこしとトマトのジュレ、Awaji の蛸の煮物、いちじくと胡桃の胡麻和え、hamo の炭火焼きと塩 wasabi と梅、穴子の焼き寿司、焼いた ayu、焼き鮑、Manganji の唐辛子の土鍋ご飯・2025年冬: seiko 蟹、白子、鴨、蟹の雑炊・2026年10月: いちじくと栗、鯖の押し寿司、菊と出汁を合わせた鯛のお造り、Matsutake と hamo の椀・日本酒',
    neighborhood: '祇園、Nishi-hanamikoji 通り沿い。祇園四条駅から徒歩5〜7分',
    gf_detail: '予約してくれる人を通して要確認 (新規の予約は受け付けていない)。グルテンの情報なし。醤油や味噌で味付けし、寿司や出汁の料理もある日本料理のコース (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。出汁を土台に魚、蟹、鴨、hamo を使う懐石 (2025〜2026年の口コミ)。',
    notes: '[懐石・祇園、京都でも指折りの入りにくい店] Nishi-hanamikoji の L 字のカウンターに8席、壁には「Sottaku Dōji」の額。Tsukamoto さんの料理は静かで的確な日本料理 — いちじくの胡麻和え、炭火の hamo、鯖の押し寿司、Matsutake と hamo の椀 — で、見せ場よりソースや和え衣の味が評判。撮影不可、料理の内容も伏せる方針、現金のみ。2008年に Pontocho から移転。2025年の口コミによれば2011〜2016年にミシュランの二つ星。The Tabelog Award Gold 2024〜2026。新規の予約は受け付けておらず、常連と一緒に行くしかない。',
  });
}

// ================================================================ やまぐち
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26018397/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '21:30']);
  put({
    id: 'kyoto_yamaguchi_gion', name: 'やまぐち (Yamaguchi)', category: 'MOM_AND_POP',
    lat: 35.002575, lng: 135.776507, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking through your referrer. No gluten information; the course has two pasta dishes (chilled capellini, crab carbonara) and a buckwheat-topped starter (2026 reviews). An October 2026 diner noted the course is made without dairy.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an omakase of sea urchin, abalone, caviar, foie gras and beef fillet (Tabelog; 2026 reviews).',
    hours_raw: 'Tue–Sat and the days before and after holidays; counter in two sittings, 17:00–19:00 and 19:30–21:30 (the second may wait briefly to be seated); closed Sunday, Monday and holidays (Tabelog). First-time guests need a referral; ask the shop for details (Tabelog). Dining from ¥46,000 per person including tax, plus 10% service; prices vary with the season (Tabelog). 10 seats at an L-shaped counter after an April 2026 renovation that removed the private rooms; the entrance is now flat, so shoes stay on (Tabelog; October 2026 review). Children negotiable (Tabelog). Non-smoking (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). About 5 min from Gion-Shijo Stn, 15 min by taxi from Kyoto Stn (Tabelog). Opened 2011 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, in a renovated townhouse — about 5 min from Gion-Shijo Stn (Keihan), 3 min from the Gion bus stop',
    cuisine: 'An omakase that blends Japanese and Italian cooking around luxury ingredients — sea urchin, abalone, truffle, caviar, beef fillet — and the seasons (Tabelog) · from ¥46,000 including tax, plus 10% service (Tabelog); course ¥42,000 (September 2026); diners report ¥50,000–79,999 with drinks · October 2026: a crème-brûlée of black fig and foie gras terrine with buckwheat (with Alba white truffle on one night), sea urchin with dried-scallop jelly and cauliflower, kombu-pickled turnip with Spanish mackerel or sweet sea bream and caviar, chilled capellini with sweet shrimp and fruit tomato and bottarga grated as freely as you like (the signature), Ezo abalone steak with Matsutake risotto, charcoal-grilled beef fillet, a crab carbonara made without dairy, chestnut shaved ice · wine pairings by a sommelier',
    website: TB, gmaps: gm('やまぐち 祇園 イタリアン'), menu_url: TB,
    notes: "[Italian · Gion, a referral-only Japanese-Italian counter] A Gion townhouse redone for its 15th year in April 2026 — grey walls, a curved copper ceiling, an L-shaped counter of ten — where chef Yamaguchi, a soba-kaiseki cook turned Italian chef, serves an omakase heavy with luxury: fig and foie gras brûlée, sea urchin, Ezo abalone on Matsutake risotto, beef fillet, and a signature chilled capellini with sweet shrimp under as much bottarga as you can face. Diners in 2026 describe a cheerful chef, jokes with regulars and a brisk pace (one course came in about 90 minutes). First visits need a referral. Tabelog Gold 2020 and Silver every other year since 2019. From ¥46,000 plus service; closed Sundays, Mondays and holidays.",
    chef_bio: { chef_name: 'Yamaguchi (Tabelog: "Tadashi Yamaguchi"; three October 2026 reviews: "Masashi Yamaguchi"; no kanji in a source)', roles: ['Owner-chef (Tabelog: opened Yamaguchi "in 2011 as the owner-chef")'], origin: 'Gifu Prefecture, born 1975 (Tabelog).',
      background: 'Per Tabelog\'s chef section: born in 1975 in Gifu; entered cooking at 18; trained at the soba restaurant "Kihōshi" in Tokyo (an October 2026 review calls it the soba-kaiseki restaurant "Yoshihoshi"), then turned to Italian at Canoviano in Daikanyama, was a founding member of Canoviano Kyoto, and worked at Ristorante t.v.b in Gion before opening Yamaguchi in 2011. The interior was renewed in April 2026 for the 15th anniversary (Tabelog). An October 2026 review adds a sister restaurant, "Kyoto Amanohashidate Hoshiumi", in Amanohashidate from 2024. Reviewers in 2026 describe the chef as cheerful and funny. Tabelog Award Gold 2020, Silver 2019 and 2021–2026; Italian WEST "Tabelog 100" 2021, 2023, 2025.',
      philosophy: 'A "complete referral" style to keep trust with guests; serve the ingredients guests want to eat at that moment (Tabelog).', specialty: 'Chilled capellini with sweet shrimp and bottarga; abalone with Matsutake risotto.',
      anecdotes: [
        { text: '"One unique feature of this restaurant is that it starts with dessert-like items." — October 2026, a third visit.', source: R + 'B512177967/' },
        { text: '"The pace of service is quite fast, with all dishes served within about 90 minutes." — October 2026, first visit with a regular.', source: R + 'B537016969/' },
        { text: '"Chef Yamaguchi brings a lively spirit to the dining experience, often injecting humor into his service." — October 2026.', source: R + 'B538031022/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): やまぐち、イタリアン・イノベーティブ、東山区祇園町南側570-185、火〜土と祝前日・祝後日、カウンターは17:00〜19:00と19:30〜21:30の2部、日・月・祝休み、初めての客は紹介制、1人46,000円〜 (税込、サービス料10%別)、10席、2026年4月に15周年で改装 (個室をなくしてカウンターを10席に、入口はフラットで靴のまま)、子どもは相談、カード可、2011年開業、The Tabelog Award Gold 2020・Silver、イタリアン WEST 百名店 2021・2023・2025。シェフは1975年 Gifu 生まれ、18歳で料理の道へ、東京のそば店で修業後イタリアンへ、Canoviano、Ristorante t.v.b を経て独立。口コミ (2026年9〜10月、英語): いちじくとフォアグラのブリュレ、甘海老の冷製カッペリーニとボッタルガ、Ezo の鮑のステーキと Matsutake のリゾット、乳製品を使わない蟹のカルボナーラ、栗のかき氷、明るく冗談の多いシェフ。',
      confidence: 'medium', sources: [TB, R + 'B493481163/', R + 'B512177967/', R + 'B537016969/', R + 'B537142822/', R + 'B537593222/', R + 'B537790457/', R + 'B537919959/', R + 'B537996845/', R + 'B538031022/', R + 'B538342703/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Referral only for a first visit; one set course at a shared counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町南側570-185',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026. No official website found.' },
    pin_source: `Tabelog ${TB} (35.002575, 135.776507); GSI resolves 京都府京都市東山区祇園町南側570番地 (lot, the large 570 block, not 570-185) 254m away, outside 150m, and OSM was not queried (sweep rule: GSI only), so the pin rests on the Tabelog point alone; kyoto_niku_no_takumi_miyoshi_gion (570-15) is 73m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B493481163/', R + 'B537016969/'],
    price_note: 'Course price from Tabelog (from ¥46,000 including tax, plus 10% service; read November 2026) and a September 2026 review; dishes from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omakase course (from)', '¥46,000', 'Course', 'ask', 'no', 'Tabelog; +10% service.', 'omakase'),
      it('', '', 'Chilled capellini with sweet shrimp, fruit tomato and bottarga (in course)', '', 'Course', 'no', 'no', 'October 2026; the signature.', 'capellini'),
      it('', '', 'Ezo abalone steak with Matsutake risotto (in course)', '', 'Course', 'ask', 'no', 'September–October 2026.', 'abalone_risotto'),
    ] }, {
    cuisine: '和とイタリアンを合わせたおまかせ。雲丹、鮑、トリュフ、キャビア、牛フィレなどの高級食材と季節の味 (食べログ)・1人46,000円〜 (税込、サービス料10%別、食べログ)、コース42,000円 (2026年9月)。口コミの予算は飲み物込みで50,000〜79,999円・2026年10月: 黒いちじくとフォアグラのテリーヌのブリュレにそばの実 (Alba の白トリュフをのせた夜も)、雲丹と干し貝柱のジュレとカリフラワー、kombu で漬けた蕪と鰆や甘鯛とキャビア、甘海老とフルーツトマトの冷製カッペリーニにボッタルガをたっぷり (名物)、Ezo の鮑のステーキと Matsutake のリゾット、炭火の牛フィレ、乳製品を使わない蟹のカルボナーラ、栗のかき氷・ソムリエのワインペアリング',
    neighborhood: '祇園、町家を改装した店。京阪祇園四条駅から徒歩約5分、市バス祇園から徒歩3分',
    gf_detail: '紹介者を通して予約時に要確認。グルテンの情報なし。コースにはパスタが2皿 (冷製カッペリーニ、蟹のカルボナーラ) とそばの実をのせた前菜がある (2026年の口コミ)。2026年10月の口コミでは、コースは乳製品を使わずに作られているという。',
    vegan_detail: 'ヴィーガンではありません。雲丹、鮑、キャビア、フォアグラ、牛フィレのおまかせ (食べログ、2026年の口コミ)。',
    notes: '[イタリアン・祇園、紹介制の和とイタリアンのカウンター] 15周年の2026年4月に改装した祇園の町家 — グレーの壁、曲線の銅の天井、L 字のカウンター10席。そば懐石からイタリアンに転じた Yamaguchi シェフのおまかせは高級食材が惜しみない: いちじくとフォアグラのブリュレ、雲丹、Ezo の鮑と Matsutake のリゾット、牛フィレ、そして名物の甘海老の冷製カッペリーニにボッタルガを好きなだけ。2026年の口コミでは明るいシェフ、常連との冗談、テンポの速さ (約90分で全皿という声も)。初回は紹介が必要。The Tabelog Award Gold 2020、2019年からほかの年は Silver。46,000円〜にサービス料、日・月・祝休み。',
  });
}

// ================================================================ 中国菜 Guu
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26038550/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://guu-kyoto.main.jp/wordpress/';
  put({
    id: 'kyoto_guu_kiyamachi_nijo', name: '中国菜 Guu', category: 'MOM_AND_POP',
    lat: 35.01308, lng: 135.770172, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information; the course is Chinese with dim sum (xiao long bao, shumai, a pastry swan), noodles and Shaoxing-wine and soy-based seasonings (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Chinese course of seafood, Peking duck, beef and pork (2026 reviews).',
    hours_raw: 'Dinner starts at 18:00; lunch from 12:00 for private bookings only; closed Sunday, Monday and irregularly (Tabelog). Reservation only and booked years ahead — 2026 diners were told the next openings are in 2030; for new guests, leftover seats for the following month go first-come by Instagram DM from midnight on the 1st (Tabelog). Same course and price at lunch and dinner (Tabelog). 6 counter seats; whole-shop hire for up to 20 (Tabelog). Non-smoking (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). About 5 min from Kyoto Shiyakusho-mae Stn; next to the Kiyamachi-Nijo police box (Tabelog; September 2026 review). Opened 17 September 2022 (Tabelog).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi-Nijo, on Nijo-dori next to the police box — about 5 min from Kyoto Shiyakusho-mae Stn (Tozai Line)',
    cuisine: 'A monthly Chinese omakase of 8–9 dishes cooked at full flame in an open kitchen, with dim sum made fresh, plus extra orders such as fried rice or mapo tofu (Tabelog) · omakase ¥25,000 (September 2026); a pairing of five drinks ¥8,900 (September 2026); diners report ¥20,000–39,999 · signature: a swan-shaped pastry of potato dough around daikon, honey-cooked apple and blue cheese (Tabelog; 2026 reviews) · 2026: kombu-cured abalone or sea bream with top-grade jellyfish and herb-lemon sauce, char siu with pickled tomato and myoga, freshly steamed shrimp shumai and xiao long bao, Peking duck (breast skin, then back), shark fin, Kagoshima beef fillet, octopus with Sichuan-pepper noodles, a wonton soup with Omi beef offal, Peking duck ramen · a "super high heat" fried rice as an extra · takeaway XO sauce (September 2026)',
    website: SITE, gmaps: gm('中国菜 Guu 京都 二条'), menu_url: TB,
    notes: "[Chinese · Kiyamachi-Nijo, six seats in front of the wok] A Kyoto townhouse beside the Kiyamachi-Nijo police box where six diners watch owner-chef Kaname Miyatani (宮谷要) cook at fierce flame and over clouds of steam, the energy of a Hong Kong kitchen that won the chef over as a teenager. The course changes monthly: a swan of potato pastry around daikon, apple and blue cheese, dim sum steamed to order, Peking duck in two courses, shark fin, and fried rice from the hottest burner in Japan, as one reviewer put it, if you add it. Diners find it light and never greasy. Seats are booked to about 2030; newcomers can try for leftover seats by Instagram DM on the 1st of each month. Tabelog Silver 2026.",
    chef_bio: { chef_name: 'Kaname Miyatani (宮谷要)', roles: ['Owner-chef (official site: "Guuオーナーシェフ　宮谷　要")'], origin: 'Shiga Prefecture, born 1982 (Tabelog chef section).',
      background: 'Per Tabelog\'s chef section: born in 1982 in Shiga; won over by authentic Chinese cooking on a training trip to Guangzhou at 21; returned to China at 26 for a year of training; worked in Shiga and Tokyo while preparing to go independent; founded the company Guu (catering and mail order) in 2020; in 2021 went to Russia as personal chef to Yusaku Maezawa\'s space-travel team, and still travels abroad as a personal chef. The official site\'s greeting says the chef first stepped into a Hong Kong kitchen as a teenager and was captivated by the cooks\' energy, the dim sum, the steam and the roar of the flames. Tabelog Award Bronze 2025, Silver 2026; Chinese WEST "Tabelog 100" 2024, 2026.',
      philosophy: '"Overwhelming dynamism": to cook in front of guests in a space like the Hong Kong kitchen that first captivated the chef, sharing the excitement (official site).', specialty: 'The swan pastry; dim sum steamed to order; Peking duck.',
      anecdotes: [
        { text: '"I finally got to visit after making a reservation two years ago." — September 2026.', source: R + 'B487370828/' },
        { text: '"I hear the next reservation is in 2030, but I definitely want to come back to this place!" — September 2026.', source: R + 'B535573826/' },
        { text: '"The fierce flames and rising steam right in front of me felt like a form of entertainment." — August 2026.', source: R + 'B534361727/' },
      ],
      japanese_sources_summary: '公式サイト (guu-kyoto.main.jp): 中国菜 Guu、圧倒的な躍動感、香港の厨房に10代で初めて足を踏み入れたときに魅了された、料理人の熱量、点心の技術、噴き上がる蒸気、強烈な炎の音、店内はカウンター6席のみ、お客様の目の前で料理を創り上げる、Guu オーナーシェフ 宮谷要、店の情報は主に Instagram で、紹介制の通販 (dim sum Guu)。食べログ: 中国料理、中京区樋之口467-2、ディナー18:00スタート、ランチ12:00は貸切のみ、日・月と不定休、予約のみ、新規の客は毎月1日の0時から翌月の空席を Instagram の DM で先着順、カウンター6席、カード可、2022年9月17日オープン、The Tabelog Award Bronze 2025・Silver 2026、中国料理 WEST 百名店 2024・2026。口コミ (2026年6月、日本語): 木屋町二条近く、6席のカウンター、JAZZ が流れる、目の前で一皿ずつ仕上げるライヴ感、油っこさを感じさせない繊細な味付け、季節のお野菜と海鮮のオードブル (賀茂茄子、帆立、鮑のジュレ)、本鮪の中トロの紹興酒漬けと特級クラゲ、スペシャリティのパイ (大根、ブルーチーズ、リンゴ、ジャガイモのペースト)。',
      confidence: 'medium', sources: [TB, SITE, R + 'B468133082/', R + 'B487370828/', R + 'B530686163/', R + 'B533027920/', R + 'B534361727/', R + 'B534946827/', R + 'B535115424/', R + 'B535573826/', R + 'B536850754/', R + 'B537024986/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Booked years ahead; leftover seats go by Instagram DM on the 1st of each month; one set course at a six-seat counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区樋之口467-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.013080, 135.770172); GSI finds no lot for 樋之口467 and resolves 樋之口町 only to the town (35.013260, 135.769836, about 35m), OSM not queried (sweep rule: GSI only), so the pin rests on the Tabelog point; a September 2026 review places it next to the Kiyamachi-Nijo police box; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536850754/', R + 'B535115424/'],
    price_note: 'No prices on the official site; course and pairing prices from September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omakase course', '¥25,000', 'Course', 'ask', 'no', 'September 2026.', 'omakase'),
      it('', '', 'Pairing of five drinks', '¥8,900', 'Drinks', '', '', 'September 2026.', 'pairing'),
      it('スペシャリティのパイ', '', 'Swan pastry of potato dough, daikon, apple and blue cheese (in course)', '', 'Course', 'no', 'no', 'Signature; June 2026 (Japanese review).', 'swan_pie'),
      it('', '', 'Super-high-heat fried rice (extra)', '', 'Extras', 'ask', 'no', 'August–September 2026.', 'fried_rice'),
    ] }, {
    cuisine: '強火の開放的な厨房で作る月替わりの中国料理のおまかせ8〜9品。点心はできたて。チャーハンや麻婆豆腐の追加も (食べログ)・おまかせ25,000円 (2026年9月)、5種のペアリング8,900円 (2026年9月)。口コミの予算は20,000〜39,999円・名物は白鳥の形のパイで、ジャガイモの生地で大根、蜂蜜で煮たリンゴ、ブルーチーズを包む (食べログ、2026年の口コミ)・2026年: kombu で締めた鮑や鯛と特級クラゲに香草とレモンのソース、チャーシューとトマトとみょうがの甘酢漬け、蒸したての海老焼売と小籠包、北京ダック (胸の皮、次に背)、ふかひれ、Kagoshima の牛フィレ、蛸と花椒の麺、Omi の牛ホルモンのワンタンスープ、北京ダックのラーメン・追加で「超強火」のチャーハン・持ち帰りの XO 醤 (2026年9月)',
    neighborhood: '木屋町二条の交番の隣。地下鉄東西線京都市役所前駅から徒歩約5分',
    gf_detail: '予約時に要確認。グルテンの情報なし。点心 (小籠包、焼売、白鳥のパイ)、麺、紹興酒や醤油を使う中国料理のコース (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。魚介、北京ダック、牛、豚を使う中国料理のコース (2026年の口コミ)。',
    notes: '[中国料理・木屋町二条、中華鍋の前の6席] 木屋町二条の交番の隣の町家で、6人がオーナーシェフ宮谷要さんの調理を目の前で見る。強烈な炎と噴き上がる蒸気は、シェフが10代で魅了された香港の厨房そのもの。コースは月替わり: ジャガイモのパイ生地で大根とリンゴとブルーチーズを包んだ白鳥、注文を受けて蒸す点心、二皿に分けた北京ダック、ふかひれ、追加すれば日本一とも言われる強火で炒めるチャーハン。油っこくなく軽いという声が多い。席は2030年ごろまで埋まっていて、新規は毎月1日に Instagram の DM で翌月の空席を狙う。The Tabelog Award Silver 2026。',
  });
}

// ================================================================ きう
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26034605/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:30']);
  put({
    id: 'kyoto_kiu_shijo_karasuma', name: 'きう (Kiu)', category: 'OMNI',
    lat: 35.002484, lng: 135.762556, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask through whoever books (the shop works mainly by referral). No gluten information; nigiri and small dishes with soy and other seasonings, and a Matsutake tempura coated in crushed rice crackers in autumn (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi omakase of fish and shellfish (2026 reviews).',
    hours_raw: 'Two sittings, from 17:00 and from 20:15, each booked as a private party of 5–6; Tabelog lists 17:00–22:30 every day with irregular closures; a November 2026 diner came for lunch (Tabelog; reviews). Mainly by referral; a few times a year new slots open on Tabelog (Tabelog). More than 15 minutes late counts as a cancellation, and any change to a booking is a cancellation with a fee; no strong perfume (Tabelog). 5 seats, up a flight of stairs (Tabelog; September 2026 review). Non-smoking (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR; service charge 10% (Tabelog). About 5–6 min from Karasuma Stn (Tabelog). Opened 3 July 2020 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo-Karasuma, Shimogyo, second floor — about 5–6 min from Karasuma Stn (Hankyu)',
    cuisine: 'Creative sushi: about six small dishes, then nigiri on soft rice seasoned with white balsamic vinegar (2026 reviews) · diners report ¥40,000–59,999 · September–October 2026 small dishes: bonito with sea grapes or chrysanthemum, Matsutake fried in a crust of crushed kaki-no-tane rice crackers, Awaji hamo shabu-shabu, hairy crab with sea urchin and ginkgo, scallop with spicy daikon and black shichimi, Amakusa sea eel · nigiri: shirohoshi fuedai, sayori, Lake Biwa trout, kohada, lean and fatty tuna, kamatoro, nodoguro with kombu and yuzu pepper, a kanpyo roll; whale bacon in November 2026 · a broad sake list; Inedit beer (September 2026)',
    website: TB, gmaps: gm('きう 寿司 京都 四条烏丸'), menu_url: TB,
    notes: "[Sushi · Shijo-Karasuma, five seats of creative sushi] Up a flight of stairs near Shijo-Karasuma, five seats and two sittings a night, each booked whole by one party. The nigiri sits on soft rice seasoned with white balsamic vinegar, a light touch that diners say lets fish like Lake Biwa trout, sayori and nodoguro shine, after small dishes such as Matsutake fried in crushed rice crackers or hairy crab with sea urchin. The chef's big, warm personality keeps the room loud with laughter, and visiting chefs come to eat. Mostly by referral; Tabelog opens a few new slots a year. Tabelog Silver 2026. Expect ¥40,000–59,999.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed in the listing; a November 2026 reviewer writes "Chef Kuda")'], origin: null,
      background: 'Opened 3 July 2020 (Tabelog). Reviewers in 2026 describe the chef as bright, open-minded and full of character. Two reviewers compare Kiu with Hisada in Okayama (September 2026), and a November 2026 reviewer links the chef with Hisada; the connection is not confirmed by another source. Tabelog Award Silver 2022, 2023, 2025, 2026 and Bronze 2024; Sushi WEST "Tabelog 100" 2021, 2022, 2025.',
      philosophy: null, specialty: 'Nigiri on white-balsamic rice; creative small dishes.',
      anecdotes: [
        { text: '"The sushi rice seasoned with white balsamic vinegar was unique yet light, perfectly complementing the ingredients." — September 2026, a fifth visit.', source: R + 'B436572737/' },
        { text: '"The highlight of my visit was the Matsutake mushroom tempura." — September 2026, a day trip from out of town.', source: R + 'B535226947/' },
        { text: '"The chef\'s bright and open-minded personality was also very appealing." — September 2026, a private gathering.', source: R + 'B535525880/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): きう、寿司・創作料理、下京区神明町230-2 2F、烏丸駅から徒歩5〜6分、1部17:00〜・2部20:15〜 (それぞれ5〜6名の貸切)、不定休、紹介制が中心で年に数回食べログで新規枠、15分以上の遅刻はキャンセル扱い、予約の変更もキャンセル扱いでキャンセル料、香水は控えて、5席、カード可、サービス料10%、2020年7月3日オープン、The Tabelog Award Silver 2022・2023・2025・2026・Bronze 2024、寿司 WEST 百名店 2021・2022・2025。口コミ (2026年7〜11月、英語): 白バルサミコ酢のシャリ、kaki no tane をまぶした Matsutake の揚げ物、hamo しゃぶ、毛蟹と雲丹と銀杏、nodoguro、日本酒が充実、明るく個性的な大将。',
      confidence: 'medium', sources: [TB, R + 'B436572737/', R + 'B515936180/', R + 'B520997810/', R + 'B535226947/', R + 'B535361730/', R + 'B535525880/', R + 'B535589978/', R + 'B536994683/', R + 'B537141203/', R + 'B538452889/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Mostly by referral, booked as a private party of 5–6; one omakase.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区神明町230-2 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through November 2026. No official website found.' },
    pin_source: `Tabelog ${TB} (35.002484, 135.762556); cross-checked: GSI 京都府京都市下京区神明町230番地 (lot) 53m; mp_okazuya_ishikawa is 45m away, a different shop; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B536994683/'],
    price_note: 'No menu or prices are published; diners report ¥40,000–59,999 (Tabelog). Dishes from September–November 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omakase: small dishes and nigiri', '', 'Course', 'ask', 'no', 'Diners report ¥40,000–59,999.', 'omakase'),
      it('', '', 'Matsutake fried in crushed kaki-no-tane (in course, autumn)', '', 'Course', 'no', 'ask', 'September–November 2026.', 'matsutake_kakinotane'),
      it('', '', 'Nodoguro nigiri with kombu and yuzu pepper (in course)', '', 'Nigiri', 'ask', 'no', 'September–October 2026.', 'nodoguro'),
    ] }, {
    cuisine: '創作寿司: 小皿が6品ほど、続いて白バルサミコ酢で味付けした柔らかいシャリの握り (2026年の口コミ)・口コミの予算は40,000〜59,999円・2026年9〜10月の小皿: 鰹と海ぶどうや菊、kaki no tane をまぶして揚げた Matsutake、Awaji の hamo しゃぶ、毛蟹と雲丹と銀杏、帆立と辛味大根と黒 shichimi、Amakusa の穴子・握り: shirohoshi fuedai、sayori、Biwa masu、kohada、赤身とトロ、kamatoro、kombu と yuzu kosho の nodoguro、かんぴょう巻き。2026年11月には鯨のベーコンも・日本酒が充実、Inedit のビールも (2026年9月)',
    neighborhood: '四条烏丸、下京区、2階。阪急烏丸駅から徒歩5〜6分',
    gf_detail: '予約してくれる人を通して要確認 (紹介制が中心)。グルテンの情報なし。醤油などで味付けする握りと小皿で、秋には kaki no tane の衣の Matsutake の揚げ物もある (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。魚介の寿司のおまかせ (2026年の口コミ)。',
    notes: '[寿司・四条烏丸、5席の創作寿司] 四条烏丸近くの階段を上がった5席、一晩2部制でそれぞれ1組の貸切。握りは白バルサミコ酢を合わせた柔らかいシャリで、軽やかさが Biwa masu、sayori、nodoguro などを引き立てるという声。その前に kaki no tane をまぶした Matsutake の揚げ物や毛蟹と雲丹などの小皿。大将の明るく大らかな人柄で店内は笑い声が絶えず、料理人も食べに来る。紹介制が中心で、食べログで年に数回新規枠。The Tabelog Award Silver 2026。予算は40,000〜59,999円。',
  });
}

save();
