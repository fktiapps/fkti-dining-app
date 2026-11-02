// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), circle umeda, Tabelog id odd; worker osw6, batch 25.
//   + すしと和 望月 Sushi to Wa Mochizuki (8-seat red-vinegar sushi by a chef from Japanese cuisine, 堂島 3-chome)
//   + 小麦や Komugi Ya (Sanuki-style udon from 7:30 am and katsudon, Fukushima 6-chome)
//   + メルシー Mealthy (dietitian-supervised healthy lunch plates with vegan and gluten-free choices, Fukushima 6-chome)
//   + 居酒屋 ときため Izakaya Tokitame (obanzai and seafood izakaya, Fukushima 6-chome)
//   Picked with `queue.mjs osaka-kita next core 80 umeda` (2026-11-02, after b24): first odd ids 27137819, 27024263,
//   27120489, 27117007. None is in data/osaka.json (grep by id, name and address, 2026-11-02).
//   Chain check: Mochizuki is the chef's own shop after leaving 寿司 赤酢 (February 2025 review), not a branch; Komugi Ya,
//   Mealthy and Tokitame show no other shop. Komugi Ya and Mealthy share 福島6-8-21; their Tabelog points are about 4 m apart
//   and both match GSI at go level, so neither pin is stacked.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('osaka-kita', TODAY, 'osw6-25');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ すしと和 望月
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270108/27137819/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'osaka_sushi_to_wa_mochizuki', name: 'すしと和 望月 (Sushi to Wa Mochizuki)', category: 'OMNI',
    lat: 34.696517, lng: 135.491352, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sushi with the shop\'s own blend of red vinegar and soy sauce; Japanese dishes such as matsukasa-age and chawanmushi; udon for children.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish course.',
    hours_raw: 'Daily except Wednesday 18:00–23:00 (food last order 22:00); closed Wednesdays (Tabelog). Weekend lunch from 12:00 by reservation (Tabelog; 2024–2025 reviews). Reservation only; groups of 6 or more by phone (Tabelog). Opened August 8, 2023 at this address (Tabelog); the chef earlier worked at Sushi Akazu and at a previous location (2025 reviews). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 8 counter seats; non-smoking (Tabelog). Children welcome, with free udon and children\'s sets; surprise cakes on request (Tabelog). All-you-can-drink with the course (June 2025).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '堂島 3-chome, マツヤビル 2F, down a small alley between Kitashinchi and Fukushima — about 10 min from JR Fukushima and Kitashinchi Stns',
    cuisine: 'Sushi of fish chosen from across Japan on the shop\'s own red-vinegar rice and soy sauce, with dishes from a chef trained in Japanese cuisine; sake tasted by the owner (Tabelog) · courses (Tabelog, tax included): omakase ¥19,800; weekend lunch of special nigiri and a mini seafood bowl ¥10,000 · omakase prices diners paid: ¥15,000 (February 2025), ¥16,500 (December 2025) · dishes in reviews: seared bonito with mustard, shirako, chawanmushi with shirako and seko-crab sauce, aori ika, sawara, shima aji, grilled tachiuo, akagai, kuruma ebi, Himi buri, saba (November 2024); sea-urchin rice and matsukasa-age (May 2025); surf clam, fluffy anago, chutoro and otoro (June 2025); kinmedai with white sauce, ankimo (December 2025)',
    website: null, gmaps: gm('すしと和 望月 堂島'), menu_url: null,
    notes: "[Sushi · between Kitashinchi and Fukushima, red-vinegar sushi from a kappo cook] An eight-seat sushi counter up a small alley between Kitashinchi and Fukushima, opened in 2023 by Chef Mochizuki after leaving Sushi Akazu, with a background in Japanese cuisine that shows in the side dishes: shirako chawanmushi with crab sauce, matsukasa-age, sea-urchin rice. The nigiri sit on a red-vinegar rice with a house soy sauce. The omakase is listed at ¥19,800, though diners have paid ¥15,000–16,500, and there is a weekend lunch at ¥10,000. Families are welcome, with free udon for children. Closed Wednesdays.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (reviewers say "Mr. Mochizuki")'], origin: null, background: 'Shop text (Tabelog): fish chosen from all over Japan with a unique blend of red vinegar and soy sauce; dishes by a chef with a background in traditional Japanese cuisine; seasonal omakase; sake the owner tastes personally. Opened August 8, 2023. Reviews: "A restaurant by Chef Mochizuki, independent from Sushi Akazu" (February 2025); a diner who knew the previous location (May 2025); a background in Japanese cuisine shows in both the sushi and the side dishes (December 2025).', philosophy: null, specialty: 'Red-vinegar sushi; Japanese side dishes.',
      anecdotes: [
        { text: '"The appetizer was bonito, lightly seared and served with mustard." — February 2025.', source: R + 'B501650019/' },
        { text: '"The sea urchin mixed rice and Matsukasa-age were dishes I could have eaten endlessly." — May 2025.', source: R + 'B507048186/' },
        { text: '"The sushi is primarily made with red vinegar, giving it a slightly stronger flavor." — September 2026.', source: R + 'B536619002/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B474938847/', R + 'B496659113/', R + 'B501650019/', R + 'B502794411/', R + 'B507048186/', R + 'B508529283/', R + 'B516937212/', R + 'B518300701/', R + 'B518312897/', R + 'B536619002/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Friendly chef at the counter (2025–2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂島3-3-3 マツヤビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島三丁目3番3号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Courses from the Tabelog listing (tax included); diners paid ¥15,000–16,500 for the omakase in 2025.', last_checked: TODAY, items: [
      it('', '', 'Omakase course', '¥19,800', 'Course', 'ask', 'no', 'Tabelog listing; ¥15,000–16,500 in 2025 reviews.', 'omakase'),
      it('', '', 'Weekend lunch: special nigiri and mini seafood bowl', '¥10,000', 'Lunch', 'ask', 'no', 'Tabelog listing.', 'weekend_lunch'),
    ] }, {
    cuisine: '全国から選ぶ魚を店の赤酢のシャリと醤油で、和食出身の料理人の一品料理、店主が試飲して選ぶ日本酒 (食べログ)・コース (食べログ、税込): おまかせ19,800円、週末の昼の特選握りとミニ海鮮丼10,000円・口コミで払ったおまかせの値段: 15,000円 (2025年2月)、16,500円 (2025年12月)・口コミの料理: カツオのたたきとからし、白子、白子とセコガニのあんの茶碗蒸し、アオリイカ、サワラ、シマアジ、太刀魚の海苔焼き、赤貝、車海老、Himi のブリ、サバ (2024年11月)、ウニの混ぜご飯と松笠揚げ (2025年5月)、ホッキ貝、ふわふわの穴子、中トロと大トロ (2025年6月)、白いソースの金目鯛、あん肝 (2025年12月)',
    neighborhood: '堂島3丁目、北新地と福島の間の細い路地のマツヤビル 2階。JR福島駅と北新地駅から徒歩10分ほど',
    gf_detail: '要確認。グルテンの情報なし。店の赤酢と醤油の鮨、松笠揚げや茶碗蒸しなどの和の料理、子ども用のうどん。',
    vegan_detail: 'ヴィーガンではありません。魚のコース。',
    notes: '[鮨・北新地と福島の間、割烹出身の赤酢の鮨] 北新地と福島の間の細い路地にある8席の鮨のカウンターで、2023年に Mochizuki さんが Sushi Akazu から独立して開いた。和食の経験が一品料理に生きていて、白子の茶碗蒸しのカニのあん、松笠揚げ、ウニのご飯など。握りは赤酢のシャリと店の醤油で。おまかせは食べログでは19,800円、口コミでは15,000〜16,500円、週末の昼は10,000円。子ども連れも歓迎で、子どもにはうどんが無料。水曜休み。',
  });
}

// ================================================================ 小麦や
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270108/27024263/'; const R = TB + 'dtlrvwlst/';
  const H = day(['07:30', '10:00'], ['10:55', '15:00']);
  put({
    id: 'osaka_komugi_ya_fukushima', name: '小麦や (Komugi Ya)', category: 'OMNI',
    lat: 34.69947, lng: 135.488183, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat udon, tempura and breaded katsudon.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: bonito-forward broth; beef, chicken and egg toppings.',
    hours_raw: 'Mon–Fri 7:30–10:00 (breakfast) and 10:55–15:00; closed Saturdays, Sundays and holidays; hours may change (Tabelog). No reservations (Tabelog). Cash or PayPay; no cards or e-money (Tabelog). 14 counter seats; no smoking 11:30–14:00, separate smoking times otherwise (Tabelog). Lunch queues of about five, rarely over 10 minutes (2026). One woman ran the shop alone at breakfast (August and October 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Fukushima 6-chome, toward Umeda from JR Fukushima — 3 min from JR Fukushima Stn',
    cuisine: 'Sanuki-style udon boiled to order, firm and chewy, thick or thin (thin only at breakfast); donburi and curry (Tabelog; 2026) · the house katsudon with soft egg, often with a mini udon (2019; July 2026) · cold bukkake udon: beef and vegetable tempura ¥950, large +¥50 (August 2026); chicken tempura (June, October 2026) · breakfast from 7:30: kake udon with tamago kake gohan ¥580 (October 2026); meat soup, meat sukiyaki and a tamago don (2024–2026) · a bonito-forward broth',
    website: null, gmaps: gm('小麦や 福島6-8-21'), menu_url: null,
    notes: "[Udon · Fukushima, udon from 7:30 am] A fourteen-seat udon counter by JR Fukushima Station that opens for breakfast at 7:30, one of the few non-chain places in Osaka to do so, with kake udon and an egg-over-rice set for ¥580. The Sanuki-style noodles are boiled to order and properly chewy, the broth leans on bonito, and the tempura is fried fresh: the beef-and-vegetable bukkake is the cold favourite at ¥950, and the katsudon has fans of its own. Lunch brings a short queue of office workers. One woman ran the counter alone on recent mornings; cash or PayPay only; weekdays only.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), a woman who runs mornings alone (2026 reviews)'], origin: null, background: 'Reviews: the woman owner was working alone at breakfast (August 2026); "It\'s run by just one mother" (October 2026); a long-running lunch favourite since at least 2019 (July 2026). The Tabelog listing is not shop-maintained.', philosophy: null, specialty: 'Bukkake udon; katsudon.',
      anecdotes: [
        { text: '"The taste was absolutely delicious." — August 2026, on udon boiled and tempura fried to order.', source: R + 'B533514572/' },
        { text: '"It\'s true that there are few places in Osaka that serve breakfast outside of chain restaurants." — October 2026.', source: R + 'B537469971/' },
        { text: '"The Katsudon was just as tasty as I remembered." — July 2026.', source: R + 'B198663204/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B198663204/', R + 'B481054422/', R + 'B526335205/', R + 'B530224728/', R + 'B532065489/', R + 'B533514572/', R + 'B534265000/', R + 'B534295170/', R + 'B537001487/', R + 'B537469971/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter-only local shop (2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市福島区福島6-8-21',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (not shop-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市福島区福島六丁目8番21号 (go) 2m; same address as osaka_mealthy_fukushima (about 4 m apart); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534265000/', R + 'B537469971/'],
    price_note: 'Prices from August and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Beef and vegetable tempura bukkake udon (cold)', '¥950', 'Udon', 'no', 'no', 'August 2026 review; large +¥50.', 'beef_veg_bukkake'),
      it('', '', 'Breakfast: kake udon and tamago kake gohan', '¥580', 'Breakfast', 'no', 'no', 'October 2026 review.', 'breakfast_set'),
      it('', '', 'Katsudon', '', 'Donburi', 'no', 'no', '2019 and July 2026 reviews.', 'katsudon'),
    ] }, {
    cuisine: '注文を受けてからゆでる讃岐風のコシのあるうどん、太麺か細麺 (朝は細麺のみ)、丼とカレー (食べログ、2026年)・店の名物のカツ丼はとろとろの卵で、ミニうどんとよく合わせる (2019年、2026年7月)・冷たいぶっかけ: 肉と野菜天ぶっかけ950円、大盛り+50円 (2026年8月)、とり天 (2026年6月、10月)・7時30分からの朝: かけうどんと卵かけご飯で580円 (2026年10月)、肉吸い、肉すき、玉子丼 (2024〜2026年)・かつお節の効いただし',
    neighborhood: '福島6丁目、JR福島駅から梅田方面へ。JR福島駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。小麦のうどん、天ぷら、パン粉のカツ丼。',
    vegan_detail: 'ヴィーガンではありません。かつお節の効いただし、牛肉、鶏、卵のトッピング。',
    notes: '[うどん・福島、朝7時半からのうどん] JR福島駅のそばにある14席のうどんのカウンターで、朝7時30分から開く、大阪ではチェーン店以外にめずらしい朝ごはんの店。かけうどんと卵かけご飯で580円。讃岐風の麺は注文を受けてからゆでてしっかりコシがあり、だしはかつお節が効き、天ぷらは揚げたて。冷たい肉と野菜天ぶっかけ950円がいちばん人気で、カツ丼にもファンが多い。昼は会社員が少し並ぶ。最近の朝は女性がひとりで切り盛りしている。現金か PayPay のみ、平日のみ。',
  });
}

// ================================================================ メルシー
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270108/27120489/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://www.mealthy-hukushima.com/';
  const H = day(['11:00', '14:30']);
  put({
    id: 'osaka_mealthy_fukushima', name: 'メルシー (Mealthy)', category: 'MOM_AND_POP',
    lat: 34.699431, lng: 135.48818, cuisine_type: 'shokudo',
    gf_confidence: 'options', gf_label: 'Some GF options', gf_detail: 'Some GF options: the official menu marks the immunity-boost plate, a spicy dry curry, as gluten-free (¥1,700). Other plates include fried tatsuta mackerel and croquettes; cross-contact is not described, so ask.',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'Some vegan options: a Vegan Plate of two croquettes in a Buddha bowl (¥1,900), also as a takeaway Vegan Bowl (official site). Other plates use chicken, mackerel and pork.',
    hours_raw: 'Mon–Fri 11:00–14:30 (last order 14:00); closed Saturdays, Sundays and holidays, with special openings once or twice a month announced on Instagram (Tabelog; official site). No table reservations on weekdays; bento and takeout by phone or Instagram message until 9:00 the same day (Tabelog). No cover charge (Tabelog). Cards, iD, QUICPay, QR codes (Tabelog). 13 seats: 5 at the counter and tables for 2, 2 and 4; non-smoking; children welcome; takeout and delivery (Tabelog). Self-serve rooibos tea and a small green juice with the meal (December 2025; February 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Fukushima 6-chome, アイミーハウス 1F — 5 min from JR Fukushima Stn, 10 min from JR Osaka Stn (Sakurabashi exit)',
    cuisine: 'Healthy lunch plates supervised by a registered dietitian and food specialist, with seasonal vegetables (Tabelog; official site) · plates (official site, tax included): monthly plate ¥1,700; beauty plate of steamed chicken with spicy tartar ¥1,700; gut-health plate of agedashi tofu and tatsuta-fried mackerel with vegetable ankake ¥1,700; Vegan Plate, a two-croquette Buddha bowl ¥1,900; immunity-boost plate, a gluten-free spicy dry curry ¥1,700; body-building plate of minced and teriyaki chicken over rice ¥1,700; the same as takeaway bento and bowls; seasonal fruit smoothie ¥700 (¥600 in a set) · brown rice or mixed-grain rice, five small sides and miso soup (2025–2026) · monthly specials such as mentaiko tororo napa-cabbage hot pot (February 2026), salmon and root-vegetable gratin with soy milk (December 2025), tsukimi hamburg steak (September 2026) · the beauty plate rose from ¥1,400 to ¥1,700 (February 2026)',
    website: WEB, gmaps: gm('Mealthy メルシー 福島'), menu_url: WEB,
    notes: "[Healthy lunch · Fukushima, dietitian-designed plates with vegan and GF choices] A thirteen-seat weekday lunch spot near JR Fukushima whose plates are designed with a registered dietitian: a main, five small sides, miso soup and brown or mixed-grain rice, with a shot of green juice first and rooibos on tap. The menu marks a gluten-free spicy dry curry and offers a Vegan Plate, a Buddha bowl with two croquettes, alongside beauty, gut-health and protein plates and a monthly special. Plates are ¥1,700 (vegan ¥1,900); bento for takeaway can be ordered by Instagram message. Regulars come every month; there can be a short queue after 1 pm.",
    chef_bio: { chef_name: '立花真由美 (representative of the operating company)', roles: ['Representative 立花真由美 (official site)', 'A registered dietitian and food specialist who supervise the menu (Tabelog)', 'Manager and staff (unnamed, February 2026)'], origin: null, background: 'Official site: Mealthy, run by Diversity Co. (representative 立花真由美), "helping protect health and beauty from within", using seasonal vegetables and balanced nutrition; a news post describes it as a healthy-food shop using organic vegetables, and the shop has supervised a kitchen-car menu. Tabelog: "Healthy, Delicious, Merci!", with plates supervised by a nutritionist and food specialist.', philosophy: '"Healthy, Delicious, Merci!" (Tabelog).', specialty: 'Vegan Plate; gluten-free dry curry; monthly plate.',
      anecdotes: [
        { text: '"The tea served was rooibos, and it was self-serve with unlimited refills—what a delight!" — December 2025.', source: R + 'B519248460/' },
        { text: '"The gratin is made with soy milk, and it has no strong aftertaste, just rich and creamy." — December 2025.', source: R + 'B519248460/' },
        { text: '"the price has increased from JPY 1,400 to JPY 1,700 due to rising costs." — February 2026.', source: R + 'B522630066/' },
      ],
      japanese_sources_summary: '公式サイト: Mealthy、ダイバーシティー株式会社 (代表 立花真由美) が運営、季節の野菜と栄養バランスにこだわる。メニューは月替わり、美肌、腸活、ヴィーガン (2種のコロッケのブッダボウル1,900円)、免疫力アップ (こく旨スパイシードライカレー、グルテンフリー)、身体作りの各プレート、ほかは1,700円、テイクアウトも同じ内容。ランチ11:00〜14:30 (L.O.14:00)、土日祝休み。',
      confidence: 'medium', sources: [TB, WEB, R + 'B506802404/', R + 'B506915617/', R + 'B511239443/', R + 'B516103276/', R + 'B516252960/', R + 'B517425802/', R + 'B519248460/', R + 'B522630066/', R + 'B524407189/', R + 'B528829197/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Menu with photos and detailed dish descriptions (Tabelog; December 2025). No English evidence found.' },
    safety: { ...SAFETY0, positives: [{ text: 'The official menu labels the immunity-boost plate, a spicy dry curry, "グルテンフリー" (gluten-free), ¥1,700; cross-contact is not described.', source: WEB }, { text: 'The official menu lists a Vegan Plate, a two-croquette Buddha bowl, ¥1,900, and a takeaway Vegan Bowl.', source: WEB }] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市福島区福島6-8-21 アイミーハウス 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市福島区福島六丁目8番21号 (go) 5m; same address as osaka_komugi_ya_fukushima (about 4 m apart); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'high', sources: [WEB],
    price_note: 'From the official site (tax included).', last_checked: TODAY, items: [
      it('ヴィーガンプレート', '', 'Vegan Plate: two-croquette Buddha bowl', '¥1,900', 'Plates', 'ask', 'vegan', 'Official site.', 'vegan_plate'),
      it('免疫力アッププレート', '', 'Immunity-boost plate: spicy dry curry, labelled gluten-free', '¥1,700', 'Plates', 'gf', 'no', 'Official site; GF by the shop\'s label, cross-contact not described.', 'gf_curry'),
      it('美肌プレート', '', 'Beauty plate: steamed chicken with spicy tartar', '¥1,700', 'Plates', 'ask', 'no', 'Official site.', 'beauty_plate'),
      it('腸活プレート', '', 'Gut-health plate: agedashi tofu and tatsuta-fried mackerel', '¥1,700', 'Plates', 'no', 'no', 'Official site.', 'gut_plate'),
      it('月替わりプレート', '', 'Monthly plate', '¥1,700', 'Plates', 'ask', 'no', 'Official site.', 'monthly_plate'),
    ] }, {
    cuisine: '管理栄養士とフードスペシャリストが監修する、季節の野菜のヘルシーなランチのプレート (食べログ、公式サイト)・プレート (公式サイト、税込): 月替わり1,700円、美肌 (やわらか蒸し鶏のスパイシータルタルソース) 1,700円、腸活 (揚出し豆腐と鯖の竜田揚げ、たっぷり野菜あんかけ) 1,700円、ヴィーガン (2種のコロッケのブッダボウル) 1,900円、免疫力アップ (こく旨スパイシードライカレー、グルテンフリー) 1,700円、身体作り (鶏ミンチと鶏照り焼き丼) 1,700円、テイクアウトの弁当とボウルも同じ内容、旬のフルーツスムージー700円 (セット割600円)・玄米か雑穀米、小鉢5品、味噌汁 (2025〜2026年)・月替わり: 明太とろろの白菜のミルフィーユ鍋 (2026年2月)、鮭と根菜の豆乳グラタン (2025年12月)、月見ハンバーグ (2026年9月)・美肌プレートは1,400円から1,700円に値上げ (2026年2月)',
    neighborhood: '福島6丁目、アイミーハウス 1階。JR福島駅から徒歩5分、JR大阪駅桜橋口から10分',
    gf_detail: 'グルテンフリーのメニューあり: 公式のメニューで免疫力アッププレートのスパイシードライカレーにグルテンフリーと表示 (1,700円)。ほかのプレートには鯖の竜田揚げやコロッケがあり、混入については書かれていないので確認を。',
    vegan_detail: 'ヴィーガンのメニューあり: 2種のコロッケのブッダボウルのヴィーガンプレート (1,900円)、テイクアウトのヴィーガンボウルも (公式サイト)。ほかのプレートは鶏、鯖、豚。',
    notes: '[ヘルシーランチ・福島、ヴィーガンとグルテンフリーも選べる管理栄養士のプレート] JR福島駅の近くにある13席の平日のランチの店で、管理栄養士が監修するプレート: 主菜、小鉢5品、味噌汁、玄米か雑穀米、最初に小さな青汁、ルイボスティーはセルフでおかわり自由。メニューにはグルテンフリーと表示したスパイシードライカレーと、2種のコロッケのブッダボウルのヴィーガンプレートがあり、ほかに美肌、腸活、身体作りのプレートと月替わり。プレートは1,700円 (ヴィーガンは1,900円)、テイクアウトの弁当は Instagram のメッセージでも予約できる。毎月通う常連が多く、13時過ぎは少し並ぶことも。',
  });
}

// ================================================================ 居酒屋 ときため
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270108/27117007/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:30', '24:00']), SU = day(['16:30', '23:00']);
  put({
    id: 'osaka_izakaya_tokitame', name: '居酒屋 ときため (Izakaya Tokitame)', category: 'OMNI',
    lat: 34.699933, lng: 135.487928, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Menu includes tempura, fried eggplant, tako chijimi and ponzu dishes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood and dashi-based obanzai; cucumber and myoga with salted kombu appears among the small dishes.',
    hours_raw: 'Mon, Tue, Thu, Fri, Sat 17:30–24:00 (food last order 22:30, drinks 23:30); Sun and holidays 16:30–23:00 (food last order 21:30); closed Wednesdays and about one other day a month; hours may change (Tabelog). Often fully booked; same-day bookings may get a call back if a seat frees up (February 2026). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 18 seats: 8 at the counter, 10 at tables; non-smoking (Tabelog).',
    hours: { 0: WD, 1: WD, 3: WD, 4: WD, 5: WD, 6: SU }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Fukushima 6-chome, レジオン福島 — 5 min from JR Fukushima Stn',
    cuisine: 'A wide-ranging izakaya menu of obanzai, sashimi and seasonal dishes, with sake, shochu and wine (Tabelog; 2026 reviews) · obanzai platter; sashimi; thick fried tofu; cucumber and myoga with salted kombu; chicken liver simmered with ginger; mackerel sushi to finish (July 2026) · seasonal hamo and young ayu (July 2026); grilled bluefin tuna tataki with grated daikon and ponzu, hamo tempura, tako chijimi (June–August 2026) · shirasu fried with ume as the appetizer, fried eggplant, hairy crab picked from the shell, sashimi platter (September 2026); baked shellfish and grilled fish (September 2026) · sansho soda with imo shochu; Matsuno Tsukasa sake (2026) · about ¥5,000–15,000 a head (2026)',
    website: null, gmaps: gm('居酒屋 ときため 福島'), menu_url: null,
    notes: "[Izakaya · Fukushima, the reliable obanzai izakaya] An eighteen-seat izakaya near JR Fukushima that diners call the place to go when in doubt: a long menu where everything lands, from an obanzai platter and thick fried tofu to seared bluefin tataki, hamo tempura, hairy crab and a mackerel sushi to finish. Seasonal fish like hamo and young ayu appear in summer, sake runs to Matsuno Tsukasa, and a sansho soda can be made with imo shochu. One diner notes it has been in the Michelin Guide yet stays unpretentious and reasonable. Book ahead; closed Wednesdays.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'Reviews (2026): consistently high-quality dishes across a broad menu; attentive but not intrusive service; an October 2026 diner says restaurants featured in the Michelin Guide often struggle afterward but this one stays unpretentious and reasonably priced (the diner\'s remark). The Tabelog listing is not shop-maintained.', philosophy: null, specialty: 'Obanzai platter; mackerel sushi.',
      anecdotes: [
        { text: '"I always order the final touch, the mackerel sushi!" — July 2026.', source: R + 'B455338184/' },
        { text: '"The standout was definitely the Grilled Tuna Tataki. The smoky aroma was prominent" — August 2026.', source: R + 'B529520908/' },
        { text: '"if I\'m ever in doubt in Fukushima, this is definitely the place to go. No mistakes here!" — August 2026.', source: R + 'B534342907/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B455338184/', R + 'B522938741/', R + 'B529520908/', R + 'B533227823/', R + 'B534342907/', R + 'B534492302/', R + 'B536120941/', R + 'B536474337/', R + 'B536875483/', R + 'B538014044/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter and tables; attentive service (2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市福島区福島6-9-17 レジオン福島',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (not shop-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市福島区福島六丁目9番17号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B455338184/', R + 'B529520908/'],
    price_note: 'No menu prices in the sources; diners spent about ¥5,000–15,000 a head (2026).', last_checked: TODAY, items: [
      it('', '', 'Obanzai platter', '', 'Small dishes', 'ask', 'no', 'July 2026 review.', 'obanzai'),
      it('', '', 'Grilled bluefin tuna tataki with grated daikon and ponzu', '', 'Fish', 'ask', 'no', 'June and August 2026 reviews.', 'tuna_tataki'),
      it('', '', 'Mackerel sushi', '', 'Rice', 'ask', 'no', 'July 2026 review.', 'saba_zushi'),
    ] }, {
    cuisine: 'おばんざい、刺身、旬の料理の品数の多い居酒屋、日本酒、焼酎、ワイン (食べログ、2026年の口コミ)・おばんざいの盛り合わせ、刺身、厚揚げ、きゅうりとみょうがの塩昆布和え、鶏レバーの生姜煮、締めのさば寿司 (2026年7月)・旬の鱧と稚鮎 (2026年7月)、本マグロの炙りたたきのおろしポン酢、鱧の天ぷら、たこチヂミ (2026年6〜8月)・お通しのしらすの梅肉揚げ、揚げなす、身をほぐした毛ガニ、刺身の盛り合わせ (2026年9月)、貝の焼き物、焼き魚 (2026年9月)・芋焼酎でも作れる山椒のソーダ割り、Matsuno Tsukasa (2026年)・1人5,000〜15,000円ほど (2026年)',
    neighborhood: '福島6丁目、レジオン福島。JR福島駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。天ぷら、揚げなす、たこチヂミ、ポン酢の料理がある。',
    vegan_detail: 'ヴィーガンではありません。魚介とだしのおばんざいで、きゅうりとみょうがの塩昆布和えもある。',
    notes: '[居酒屋・福島、迷ったらここのおばんざいの居酒屋] JR福島駅の近くにある18席の居酒屋で、迷ったらここという声が多い。品数が多くどれを頼んでも外れがなく、おばんざいの盛り合わせや厚揚げから、本マグロの炙りたたき、鱧の天ぷら、毛ガニ、締めのさば寿司まで。夏は鱧や稚鮎、日本酒は Matsuno Tsukasa、山椒のソーダ割りは芋焼酎でも。ミシュランガイドに載ったのに気取らず手ごろという声も。予約がおすすめ、水曜休み。',
  });
}

save();
