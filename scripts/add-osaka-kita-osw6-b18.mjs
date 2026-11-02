// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), circle umeda, Tabelog id odd; worker osw6, batch 18.
//   + 鮨 彩月 大阪梅田店 Sushi Ayatsuki Osaka Umeda-ten (sushi kaiseki with a sea-urchin tasting, 太融寺町)
//   + 北新地鮨 言 Kitashinchi Sushi Gon (red-vinegar Edomae sushi course, Kitashinchi side of 堂島)
//   + 焼鳥 うなる Yakitori Unaru (binchotan yakitori counter, opened March 2026, Kitashinchi)
//   + 四川料理MITSUBACHI Sichuan MITSUBACHI (Sichuan counter of the U.KAI / IAKU group, Kitashinchi side of 堂島)
//   Picked with `queue.mjs osaka-kita next core 80 umeda` (2026-11-02, after b17): first odd ids 27136899, 27143277,
//   27155163, 27148947. None is in data/osaka.json (grep by id, name and address, 2026-11-02).
//   Chain check: web search found no other Ayatsuki shop (the "大阪梅田店" name notwithstanding) and no group for Unaru;
//   Gon shows no other shop. MITSUBACHI belongs to the group behind U.KAI and IAKU (Tabelog shop text); IAKU is in data
//   (osaka_iaku_kitashinchi) as an innovative French-Italian course, so MITSUBACHI, a Sichuan counter, is a sister concept
//   and drafted (Greg's ruling, 2026-11-02).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('osaka-kita', TODAY, 'osw6-18');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 鮨 彩月 大阪梅田店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27136899/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['18:00', '23:00']), WE = day(['12:00', '15:00'], ['18:00', '23:00']);
  put({
    id: 'osaka_sushi_ayatsuki_umeda', name: '鮨 彩月 大阪梅田店 (Sushi Ayatsuki Osaka Umeda-ten)', category: 'OMNI',
    lat: 34.701455, lng: 135.503541, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sushi with soy-based seasoning, chawanmushi with a thickened sauce, grilled and simmered dishes; write allergies in the booking request (Tabelog).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish and sea-urchin course.',
    hours_raw: 'Mon–Fri 18:00–23:00; Sat, Sun and holidays 12:00–15:00 and 18:00–23:00; open all year (Tabelog). Courses run two hours (Tabelog). Write dislikes or allergies in the booking request (Tabelog). Opened July 1, 2023 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), Alipay, WeChat Pay, UnionPay QR; no e-money (Tabelog). Seats: 13 on Tabelog (9 counter, 4 table) and private rooms for 2–4; a September 2026 diner counted 8 counter seats. Non-smoking; smoking outside the entrance; no strong perfume; school-age children and up (Tabelog). English and Simplified Chinese menus; English-speaking staff (Tabelog). Service charge: Tabelog\'s Japanese field says なし (none); its machine translation says a fee is added.',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Taiyujicho, 大鉄太融寺ビル 6F, in the hotel district off Higashi-dori — 5 min from Umeda Stn',
    cuisine: 'Sushi kaiseki of seasonal fish from across Japan, prepared by simmering, steaming, marinating and grilling, on red-vinegar rice (Tabelog) · courses (Tabelog, tax included): autumn 17-dish course with matsutake chawanmushi, a sea-urchin tasting and foil-baked autumn salmon ¥9,800 (from ¥12,000); 19-dish autumn omakase with octopus shabu-shabu, caviar and a sea-urchin plate ¥14,800 (from ¥17,800); winter 17-dish course with tiger fugu and crab ¥9,800 (from ¥12,000) · an October 2026 course: smoked Spanish mackerel, sea-urchin tasting, matsutake chawanmushi, squid, striped jack, akami, barracuda, red shrimp with kombu and caviar, steamed sushi of salmon and ikura, toro, a bonito roll · a three-urchin tasting, the favourite finished as a gunkan (September 2026); 10-day aged kinmedai (September 2026); smoke-grilled hamo (September 2026)',
    website: null, gmaps: gm('鮨 彩月 大阪梅田店'), menu_url: null,
    notes: "[Sushi · Umeda, Taiyujicho, a sea-urchin tasting on the sixth floor] A hidden sushi-kaiseki room on the sixth floor of a building in the hotel district off Higashi-dori, open since 2023, with an English menu and English-speaking staff. The draw is the seasonal course at ¥9,800 (marked down from ¥12,000): smoke-grilled fish under a lifted lid, a tasting of three sea urchins with your favourite finished as a gunkan, matsutake chawanmushi, aged fish and toro on red-vinegar rice; a ¥14,800 version adds octopus shabu-shabu and caviar. Diners call it high-end sushi at an accessible price; some found the cheaper course light or the salt heavy, and one noted that most guests were from overseas. Open daily, with weekend lunch.",
    chef_bio: { chef_name: null, roles: ['Sushi chefs (unnamed)'], origin: null, background: 'Shop text (Tabelog): traditional preparation, simmering, steaming, pickling and grilling, to bring out natural flavours; seasonal ingredients from across Japan; nigiri, "sakana" and special dishes in a discreet room inside a building; carefully selected ingredients and special red-vinegar rice. Opened July 1, 2023. Instagram @sushi.ayatsuki (September 2026 review).', philosophy: '"The greatest joy is hearing you say \'It was delicious.\'" (Tabelog).', specialty: 'Sea-urchin tasting; sushi kaiseki.',
      anecdotes: [
        { text: '"The three types of sea urchin were served one spoonful at a time, allowing us to enjoy our favorite one last as a gunkan." — September 2026.', source: R + 'B536381980/' },
        { text: '"First, we were served grilled conger eel, and when the lid was opened, smoke billowed out, which was quite fun!" — September 2026.', source: R + 'B536000253/' },
        { text: '"Most of the customers were foreigners." — October 2026.', source: R + 'B536994063/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B485888992/', R + 'B535611631/', R + 'B535965953/', R + 'B536000253/', R + 'B536381980/', R + 'B536861848/', R + 'B536994063/', R + 'B537713417/', R + 'B538179181/', R + 'B538308830/'] },
    cultural_comfort: { level: 'english', note: 'English and Simplified Chinese menus; English-speaking staff (Tabelog). An October 2026 diner found most guests were from overseas.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Asks guests to write dislikes or allergies in the booking request (Tabelog).'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区太融寺町4-2 大鉄太融寺ビル 6F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区太融寺町4番2号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Courses from the Tabelog listing (tax included; campaign prices, regular prices in brackets).', last_checked: TODAY, items: [
      it('', '', 'Autumn course, 17 dishes, with sea-urchin tasting (¥12,000 regular)', '¥9,800', 'Course', 'ask', 'no', 'Tabelog listing; September–October 2026 reviews.', 'autumn_17'),
      it('', '', 'Autumn omakase, 19 dishes, with octopus shabu-shabu and caviar (¥17,800 regular)', '¥14,800', 'Course', 'ask', 'no', 'Tabelog listing.', 'autumn_19'),
      it('', '', 'Winter course, 17 dishes, with tiger fugu and crab (¥12,000 regular)', '¥9,800', 'Course', 'ask', 'no', 'Tabelog listing.', 'winter_17'),
    ] }, {
    cuisine: '全国の旬の魚を煮る、蒸す、漬ける、焼くの仕事で仕上げる鮨懐石、赤酢のシャリ (食べログ)・コース (食べログ、税込): 松茸の茶碗蒸し、ウニの食べ比べ、秋鮭の包み焼きの秋の17品9,800円 (通常12,000円)、タコしゃぶ、キャビア、ウニの皿の秋のおまかせ19品14,800円 (通常17,800円)、とらふぐとカニの冬の17品9,800円 (通常12,000円)・2026年10月のコース: サワラのいぶし焼き、ウニの食べ比べ、松茸の茶碗蒸し、イカ、シマアジ、赤身、カマス、赤海老の昆布締めとキャビア、鮭といくらの蒸し寿司、トロ、カツオの巻物・3種のウニを食べ比べ、好きなものを最後に軍艦で (2026年9月)、10日熟成の金目鯛 (2026年9月)、いぶした鱧 (2026年9月)',
    neighborhood: '太融寺町、東通りから入ったホテル街の大鉄太融寺ビル 6階。梅田駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。醤油の味つけの鮨、あんかけの茶碗蒸し、焼き物や煮物。アレルギーは予約のリクエスト欄に書く (食べログ)。',
    vegan_detail: 'ヴィーガンではありません。魚とウニのコース。',
    notes: '[鮨・梅田太融寺町、6階でウニの食べ比べ] 東通りから入ったホテル街のビルの6階にある隠れ家の鮨懐石の店で、2023年から。英語のメニューと英語を話せるスタッフがいる。目当ては9,800円 (通常12,000円) の季節のコース: ふたを開けると煙が立つ焼き魚、3種のウニの食べ比べで気に入ったものを最後に軍艦に、松茸の茶碗蒸し、熟成した魚とトロを赤酢のシャリで。14,800円のコースはタコしゃぶとキャビアつき。手の届く値段で本格的な鮨という声が多く、安いコースは物足りない、塩がきついという人も、客のほとんどが外国人だったという人も。年中無休、土日祝は昼も。',
  });
}

// ================================================================ 北新地鮨 言
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27143277/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'osaka_kitashinchi_sushi_gon', name: '北新地鮨 言 (Kitashinchi Sushi Gon)', category: 'OMNI',
    lat: 34.696455, lng: 135.497605, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sushi with soy-based seasoning, simmered clam with sweet sauce, saikyo-miso grilled fish and a sauce of egg yolk and ikura.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish course.',
    hours_raw: 'Mon–Sat 17:00–23:00; holidays 18:00–23:00; closed Sundays (Tabelog). Same-day bookings for the course (Tabelog); a regular books by Instagram message (March 2026). Opened July 29, 2024 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), PayPay; no e-money (Tabelog). 15 seats: 7 at the counter and 8 at tables; private room; non-smoking (Tabelog). Basement with stairs only, no lift; children and strollers welcome (Tabelog). Dress code: collared shirt and smart shoes (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kitashinchi side of 堂島, 日宝堂島センター B1F, along a narrow passage at the back of the building — 3–4 min from Kitashinchi Stn',
    cuisine: 'Edomae sushi omakase on rice seasoned with five-year-aged red vinegar and new-crop rice, with seasonal fish, in a casual setting (Tabelog) · Oudo course of 15 items ¥14,900 (Tabelog, tax included); diners paid ¥13,200 (March 2026), ¥13,500 (February 2026) and ¥13,900 for the classic course (August 2026) · an August 2026 course: today\'s sashimi, chilled chawanmushi, toro, marinated akami with mustard, grilled fish, Fukuoka saba, botan shrimp, sea urchin, an eel nori roll, a shirasu bowl, a thick roll, simmered clam, the "nice roll" with an egg-yolk and ikura sauce, tuna-bonito miso soup, dessert · tuna from Maguro Teramoto and Nemuro sea urchin from Marukawa Suisan in a wooden box (May 2026); Densuke anago from Miyagi, saikyo-grilled black cod, Kishiwada fresh shirasu (August 2026)',
    website: null, gmaps: gm('北新地鮨 言 日宝堂島センター'), menu_url: null,
    notes: "[Sushi · Kitashinchi, a red-vinegar omakase in a basement] A fifteen-seat Edomae sushi bar in a Kitashinchi basement, opened in 2024, serving one omakase of about fifteen items on rice seasoned with five-year-aged red vinegar. Diners recall toro and akami from Maguro Teramoto, a wooden box of Nemuro sea urchin, a chilled chawanmushi, simmered clam and the house \"nice roll\" with an egg-yolk and ikura sauce. Tabelog lists the course at ¥14,900; diners have paid ¥13,200–13,900. Most found it excellent value with friendly chefs; one called it izakaya-like and noticed fishy sashimi. Collared shirts and smart shoes are asked for; stairs only.",
    chef_bio: { chef_name: null, roles: ['Sushi chef (unnamed)'], origin: null, background: 'Shop text (Tabelog): Edomae sushi with special rice seasoned with five-year-aged red vinegar and fresh seasonal fish; authentic flavours in a casual atmosphere, focusing on the lingering taste and seasonal essence of each piece. The English shop text calls it "Sushi Gen"; the listing name and reviews say "Gon". Opened July 29, 2024.', philosophy: null, specialty: 'Red-vinegar Edomae omakase; simmered clam.',
      anecdotes: [
        { text: '"I especially love the simmered clams. The Toro-taku roll is exquisite!" — March 2026, a fourth visit.', source: R + 'B518522233/' },
        { text: '"the atmosphere feels more like an izakaya than a sushi restaurant, lacking any sense of luxury." — March 2026.', source: R + 'B523565023/' },
        { text: '"I was particularly surprised by the \'Shime no Nice Roll,\' which I had never tasted before." — August 2026.', source: R + 'B534620200/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B518522233/', R + 'B522571224/', R + 'B523565023/', R + 'B525277180/', R + 'B531537355/', R + 'B533064938/', R + 'B534096045/', R + 'B534620200/', R + 'B535640153/', R + 'B536066809/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Friendly chef at the counter (July 2026); dress code (Tabelog). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂島1-3-9 日宝堂島センター B1F 13',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島一丁目3番 (lot) 33m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B535640153/'],
    price_note: 'The course price differs: ¥14,900 on Tabelog; ¥13,200–13,900 paid by 2026 diners.', last_checked: TODAY, items: [
      it('', '', 'Oudo omakase course, 15 items', '¥14,900', 'Course', 'ask', 'no', 'Tabelog listing; ¥13,200–13,900 in 2026 reviews.', 'oudo_course'),
    ] }, {
    cuisine: '5年熟成の赤酢と新米のシャリ、旬の魚の江戸前鮨のおまかせ、気軽な雰囲気で (食べログ)・Oudo コース15品14,900円 (食べログ、税込)、口コミでは13,200円 (2026年3月)、13,500円 (2026年2月)、定番コース13,900円 (2026年8月)・2026年8月のコース: 本日の刺身、冷たい茶碗蒸し、トロ、からしを添えた赤身の漬け、焼き魚、福岡のサバ、ボタンエビ、ウニ、うなぎの海苔巻き、しらす丼、太巻き、煮はまぐり、卵黄といくらのソースの「ナイス巻き」、まぐろとかつおの味噌汁、デザート・Maguro Teramoto のまぐろと Marukawa Suisan の Nemuro のウニの木箱 (2026年5月)、宮城の Densuke 穴子、銀だらの西京焼き、Kishiwada の生しらす (2026年8月)',
    neighborhood: '堂島の北新地寄り、日宝堂島センター 地下1階、ビルの奥の細い通路沿い。北新地駅から徒歩3〜4分',
    gf_detail: '要確認。グルテンの情報なし。醤油の味つけの鮨、甘いつめの煮はまぐり、西京焼き、卵黄といくらのソース。',
    vegan_detail: 'ヴィーガンではありません。魚のコース。',
    notes: '[鮨・北新地、地下の赤酢のおまかせ] 北新地の地下にある15席の江戸前鮨の店で、2024年オープン。5年熟成の赤酢のシャリで、15品ほどのおまかせを出す。Maguro Teramoto のトロと赤身、木箱の Nemuro のウニ、冷たい茶碗蒸し、煮はまぐり、卵黄といくらのソースの店の名物「ナイス巻き」を覚えている人が多い。食べログではコースは14,900円、口コミでは13,200〜13,900円。お得で大将も気さくという声が多い一方、居酒屋のようで刺身のにおいが気になったという人も。襟つきのシャツときれいな靴で。階段のみ。',
  });
}

// ================================================================ 焼鳥 うなる
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27155163/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '23:00']), WE = day(['16:00', '23:00']);
  put({
    id: 'osaka_yakitori_unaru_kitashinchi', name: '焼鳥 うなる (Yakitori Unaru)', category: 'OMNI',
    lat: 34.697365, lng: 135.500343, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Skewers are seasoned to suit each cut (Tabelog); the course ends with a yakitori rice bowl or chicken-soup chazuke with fried rice balls.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken course; vegetable skewers come within it.',
    hours_raw: 'Mon–Fri 17:00–23:00; Sat, Sun and holidays 16:00–23:00; last order 22:00 (Tabelog). Cashless only: cards (VISA, Master, JCB, AMEX, Diners, UnionPay), IC cards, nanaco, WAON, iD, QUICPay, PayPay (Tabelog). Seat charge ¥660 with an appetizer outside courses (à la carte, omakase skewers or drinks plan alone); guests are seated individually (Tabelog). Opened March 23, 2026 (Tabelog). 13 counter seats; non-smoking; children welcome (Tabelog). English menu and English-speaking staff (Tabelog). Grill smoke can sting the eyes (November 2026).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kitashinchi, 遅ビル 3F — 3 min from Kitashinchi Stn',
    cuisine: 'Hand-skewered yakitori grilled over binchotan, seasoned to suit each cut; popular neck, thigh and wings; 12 sakes, wine and shochu (Tabelog) · courses (Tabelog, tax included): omakase ¥5,500 (thigh tataki, 8 skewers, 2 vegetable skewers, yuzu daikon, chicken soup); full omakase ¥6,600 (thigh sashimi, 10 skewers, 2 vegetable skewers, yuzu daikon, a yakitori rice bowl or chicken-soup chazuke); the full course with all-you-can-drink ¥8,800; omakase skewers 5 for ¥2,400 or 8 for ¥3,600, with an optional drinks plan for ¥2,400 · skewers in October 2026 courses: breast with wasabi, gizzard, knee cartilage, quail egg, cartilage, bonjiri, heart, thigh, breast, wings, neck (furisode), tsukune, eggplant, shishito, white onion · thigh tataki à la carte ¥1,600 (October 2026)',
    website: null, gmaps: gm('焼鳥 うなる 北新地'), menu_url: null,
    notes: "[Yakitori · Kitashinchi, binchotan at a bar-like counter] A thirteen-seat yakitori counter on a Kitashinchi third floor, opened in March 2026, that feels more like a stylish bar, with a spotlight on the binchotan grill. Courses start with rare chicken-thigh tataki and run through ten skewers, from wasabi breast and knee cartilage to heart and neck, with yuzu daikon between, ending in a rich chicken-soup chazuke or a yakitori rice bowl with egg yolk. The ¥8,800 course includes two hours of drinks with twelve sakes; plain courses are ¥5,500 and ¥6,600. Diners praise the timing and the friendly master; grill smoke can sting the eyes. Card or e-money only; English menu.",
    chef_bio: { chef_name: null, roles: ['Master (unnamed) at the grill'], origin: null, background: 'Shop text (Tabelog): casual yakitori to make you "groan" with delight; hand-skewered and grilled over binchotan, seasoned to bring out each cut; three courses, the all-you-can-drink plan at ¥8,800 recommended; 12 sakes always on; a calm counter-only room near the station. Opened March 23, 2026.', philosophy: null, specialty: 'Chicken thigh tataki; chicken-soup chazuke.',
      anecdotes: [
        { text: '"Each skewer was carefully grilled and served just as I finished the previous one!" — October 2026.', source: R + 'B535499582/' },
        { text: '"The master was surprisingly friendly and shared a lot of insights about the dishes." — October 2026.', source: R + 'B537433081/' },
        { text: '"Occasionally, the smoke can be overwhelming and stings the eyes" — November 2026.', source: R + 'B538476815/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B535499582/', R + 'B537433081/', R + 'B537474419/', R + 'B537665320/', R + 'B537684556/', R + 'B537872610/', R + 'B538075095/', R + 'B538208512/', R + 'B538224481/', R + 'B538476815/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (Tabelog).' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曾根崎新地1-8-3 遅ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; opened March 2026; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目8番3号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Courses from the Tabelog listing (tax included); ¥660 seat charge outside courses.', last_checked: TODAY, items: [
      it('', '', 'Omakase course, 13 items', '¥5,500', 'Course', 'ask', 'no', 'Tabelog listing.', 'omakase_5500'),
      it('', '', 'Omakase full course, 15 items', '¥6,600', 'Course', 'ask', 'no', 'Tabelog listing.', 'full_6600'),
      it('', '', 'Omakase full course with 2-hour all-you-can-drink', '¥8,800', 'Course', 'ask', 'no', 'Tabelog listing; October 2026 reviews.', 'full_ayce'),
      it('', '', 'Omakase skewers, 5 pieces', '¥2,400', 'Skewers', 'ask', 'no', 'Tabelog listing.', 'skewers_5'),
    ] }, {
    cuisine: '一本ずつ手で打ち、部位ごとに味つけして備長炭で焼く焼き鳥、人気はネック、もも、手羽、日本酒12種、ワイン、焼酎 (食べログ)・コース (食べログ、税込): おまかせ5,500円 (もものたたき、串8本、野菜串2本、柚子大根、鶏スープ)、おまかせフル6,600円 (ももの刺身、串10本、野菜串2本、柚子大根、焼き鳥丼か鶏スープ茶漬け)、飲み放題つきのフルコース8,800円、おまかせ串は5本2,400円か8本3,600円で、2,400円の飲み放題をつけられる・2026年10月のコースの串: ささみのわさび、砂肝、膝軟骨、うずら、軟骨、ぼんじり、ハツ、もも、むね、手羽、ふりそで、つくね、なす、ししとう、白ねぎ・もものたたきの単品1,600円 (2026年10月)',
    neighborhood: '北新地、遅ビル 3階。北新地駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。串は部位ごとに味つけし (食べログ)、締めは焼き鳥丼か焼きおにぎりの鶏スープ茶漬け。',
    vegan_detail: 'ヴィーガンではありません。鶏のコースで、野菜の串はその中に入る。',
    notes: '[焼き鳥・北新地、バーのようなカウンターで備長炭] 北新地のビルの3階にある13席の焼き鳥のカウンターで、2026年3月オープン。おしゃれなバーのような店で、備長炭の焼き台にスポットライトが当たる。コースはレアのもものたたきから始まり、わさびのささみや膝軟骨からハツやネックまで串10本、合間に柚子大根、締めは濃い鶏スープの茶漬けか卵黄の焼き鳥丼。8,800円のコースは日本酒12種の2時間飲み放題つき、ふつうのコースは5,500円と6,600円。出すタイミングと気さくなマスターが好評で、焼き台の煙が目にしみることも。支払いはカードか電子マネーのみ、英語のメニューあり。',
  });
}

// ================================================================ 四川料理MITSUBACHI
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27148947/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '15:00'], ['18:00', '23:00']), SA = day(['17:00', '23:00']);
  put({
    id: 'osaka_sichuan_mitsubachi', name: '四川料理MITSUBACHI (Sichuan MITSUBACHI)', category: 'OMNI',
    lat: 34.696337, lng: 135.497012, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sichuan dishes in sauces; the menu also has dan dan noodles, shark-fin dumplings and battered yurinchi; tell the shop about allergies (Tabelog).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: mapo tofu with Kagoshima black pork, chicken, shrimp, shark fin.',
    hours_raw: 'Mon–Fri, days before and after holidays 11:30–15:00 (food last order 14:00) and 18:00–23:00 (food last order 22:00); Saturday 17:00–23:00; closed Sundays and holidays (Tabelog). Tell the shop about allergies (Tabelog). Service charge 5% (Tabelog). Lunch often fully booked; book ahead (2026 reviews). Opened May 7, 2025 (Tabelog); lunch began May 12 and dinner May 19, 2025 (May 2025 review). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay); no e-money or QR (Tabelog); an October 2026 diner paid cash. 10 counter seats around an open kitchen; non-smoking; school-age children and up (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kitashinchi side of 堂島, Rich K.BLDG 5F, across from the south side of Dojima Avanza — 5 min from Kitashinchi and Nishi-Umeda Stns',
    cuisine: 'Sichuan cooking in small plates, tradition with new twists and seasonal ingredients, by chefs trained at famous restaurants; wines chosen by a sommelier (Tabelog) · dinner omakase (Tabelog, tax included): Colorful Feast 6 items ¥13,200; Kyoen 8 items ¥16,500; Treasure 9 items ¥19,800 · an August 2026 Kyoen course: jellyfish with caviar, seafood sashimi salad with nuts, free-range chicken with sudachi and green-onion sauce, braised shark fin, Peking duck with fruit, XO stir-fry of shrimp, squid and abalone, mapo tofu with beef tongue, almond tofu · lunch: mapo tofu set with drool chicken, rice and soup refills ¥1,500 (August–October 2026; ¥1,000 at the May 2025 opening); special lunch of three small dishes, yurinchi, shrimp chili, mapo tofu and almond tofu ¥2,200 (March 2026); shrimp chili lunch, dan dan noodles (2025–2026) · mapo tofu with Kagoshima black pork, numbing with real Sichuan pepper (2025–2026)',
    website: null, gmaps: gm('四川料理MITSUBACHI 堂島'), menu_url: null,
    notes: "[Chinese · Kitashinchi, a ten-seat Sichuan counter] A sleek ten-seat Sichuan counter on a fifth floor near Dojima Avanza, opened in 2025 by the group behind the meat restaurant U.KAI and the course restaurant IAKU, where you watch the chefs work the wok. Lunch is the bargain: a ¥1,500 mapo tofu of Kagoshima black pork, numbing and properly spicy, with drool chicken and free rice and soup, or a ¥2,200 spread with shrimp chili and yurinchi; book ahead, as it fills. Dinner is omakase at ¥13,200–19,800 with caviar-topped jellyfish, shark fin, Peking duck and sommelier wines, plus 5% service. One diner found the chef's presence made the room tense.",
    chef_bio: { chef_name: null, roles: ['Chefs (unnamed), trained at famous restaurants (Tabelog)', 'Sommelier (unnamed)'], origin: null, background: 'Shop text (Tabelog): a new Sichuan restaurant in the popular U.KAI and IAKU group in Kitashinchi; creative dishes from seasonal ingredients with a fresh twist on tradition; wines chosen by a sommelier; authentic Chinese cuisine by skilled chefs trained at famous restaurants. Opened May 7, 2025. An August 2026 diner calls it the Chinese branch of the meat-focused U-KAI.', philosophy: 'Sichuan cuisine that harmonises tradition and innovation (Tabelog).', specialty: 'Mapo tofu with Kagoshima black pork.',
      anecdotes: [
        { text: '"You can watch the chef skillfully stir-frying in the Chinese wok right in front of you" — August 2026.', source: R + 'B506986834/' },
        { text: '"Sichuan Mapo Tofu, which was spicy enough to make me sweat—perfect for spice lovers!" — March 2026, the ¥2,200 special lunch.', source: R + 'B524251768/' },
        { text: '"Even though it was just before 1 PM, the place was fully booked, and I had to wait a bit." — October 2026.', source: R + 'B537383936/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B506986834/', R + 'B524251768/', R + 'B534496717/', R + 'B535399390/', R + 'B535798430/', R + 'B536527316/', R + 'B537383936/', R + 'B537753444/', R + 'B538085274/', R + 'B538287382/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter facing the open kitchen (2026). No English evidence found.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Asks guests to mention any allergies (Tabelog).'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂島1-5-36 Rich K.BLDG 5F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島一丁目5番36号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B536527316/', R + 'B524251768/'],
    price_note: 'Dinner courses from the Tabelog listing (tax included); lunch from 2026 reviews; 5% service charge.', last_checked: TODAY, items: [
      it('', '', 'Mapo tofu lunch with drool chicken, rice and soup refills', '¥1,500', 'Lunch', 'ask', 'no', 'August–October 2026 reviews.', 'mapo_lunch'),
      it('', '', 'Special lunch: three small dishes, yurinchi, shrimp chili, mapo tofu, almond tofu', '¥2,200', 'Lunch', 'no', 'no', 'March 2026 review.', 'special_lunch'),
      it('', '', "Chef's omakase Colorful Feast, 6 items", '¥13,200', 'Course', 'ask', 'no', 'Tabelog listing.', 'course_13200'),
      it('', '', "Chef's omakase Kyoen, 8 items", '¥16,500', 'Course', 'ask', 'no', 'Tabelog listing; August 2026 review.', 'course_16500'),
      it('', '', "Chef's omakase Treasure, 9 items", '¥19,800', 'Course', 'ask', 'no', 'Tabelog listing.', 'course_19800'),
    ] }, {
    cuisine: '小皿で出す四川料理、伝統に新しい工夫と旬の食材、名店で修業した料理人、ソムリエが選ぶワイン (食べログ)・夜のおまかせ (食べログ、税込): 6品13,200円、8品16,500円、9品19,800円・2026年8月の8品のコース: キャビアをのせたクラゲ、ナッツの魚介の刺身サラダ、地鶏のすだちとねぎのソース、フカヒレの姿煮、果物を添えた北京ダック、海老、イカ、アワビの XO 醤炒め、牛タンの麻婆豆腐、杏仁豆腐・昼: よだれ鶏つきでご飯とスープがおかわり自由の麻婆豆腐の定食1,500円 (2026年8〜10月、2025年5月の開店時は1,000円)、小皿3種、油淋鶏、エビチリ、麻婆豆腐、杏仁豆腐のスペシャルランチ2,200円 (2026年3月)、エビチリのランチ、担々麺 (2025〜2026年)・鹿児島の黒豚の麻婆豆腐、本物の花椒で痺れる (2025〜2026年)',
    neighborhood: '堂島の北新地寄り、Rich K.BLDG 5階、Dojima Avanza の南側の向かい。北新地駅と西梅田駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。ソースを使う四川料理で、担々麺、フカヒレの蒸し餃子、衣をつけた油淋鶏もある。アレルギーは伝える (食べログ)。',
    vegan_detail: 'ヴィーガンではありません。鹿児島の黒豚の麻婆豆腐、鶏、海老、フカヒレ。',
    notes: '[中華・北新地、10席の四川のカウンター] Dojima Avanza の近くのビルの5階にある、10席のおしゃれな四川料理のカウンターで、肉料理の U.KAI とコースの IAKU のグループが2025年に開いた。目の前で中華鍋をふるうのが見える。お得なのは昼で、1,500円の鹿児島の黒豚の麻婆豆腐はしっかり辛くて痺れ、よだれ鶏つきでご飯とスープはおかわり自由。2,200円ならエビチリと油淋鶏も。すぐ埋まるので予約を。夜は13,200〜19,800円のおまかせで、キャビアのクラゲ、フカヒレ、北京ダック、ソムリエのワイン、サービス料5%。料理人の存在感で店が緊張した雰囲気だったと感じた人も。',
  });
}

save();
