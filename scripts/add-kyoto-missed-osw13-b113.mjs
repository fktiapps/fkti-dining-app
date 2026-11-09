// Kyoto priority (kyoto-missed), worker osw13, batch 113 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: オーガニックレストラン 海, 菊乃井 肉 雲収, 波ぎ茶寮, スパイス居酒屋 スバビハニ 京都市役所前店.
// Brands checked against than.co.jp/brands (none match).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-113');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26012760', 'too thin to verify: Bar 織籠 has no Tabelog review dated 2025–26 — the newest with text is from 2019 ("Expensive"); a 2022 review has no text');
skip('26000454', 'guests-only inn (content ruling 11-05): 柊家 別館 is the annex ryokan of 柊家 (in data as kyoto_hiiragiya_ryokan); every review is of dinner and breakfast served in guest rooms as part of an overnight stay');

// ================================================================ オーガニックレストラン 海
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26000178/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:30', '22:30']);
  put({
    id: 'kyoto_organic_restaurant_umi', name: 'オーガニックレストラン 海 (Organic Restaurant Umi)', category: 'OMNI',
    lat: 35.013016, lng: 135.768756, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: an organic seafood izakaya with soy-seasoned dishes, salted fish innards and fried food (2018–2026 reviews); wheat-free soy sauce is not mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-centred menu — live-fish sashimi, grilled sea bream, salted squid and fish innards (2018–2026 reviews). Organic vegetable dishes such as sesame-dressed green beans exist (2021) — ask.',
    hours_raw: 'Tabelog: daily 16:30–22:30 (L.O. 22:00; also noted "from 17:00"); closed on irregular days. Reservations taken; private hire by phone. No credit cards (Tabelog) — cash. 28 seats. Non-smoking; children welcome. 1st floor of the アソルティビル on the west side of Kawaramachi just south of Nijo, 3 min from Kyoto Shiyakusho-mae.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Kawaramachi south of Nijo, west side — 3 min walk from Kyoto Shiyakusho-mae',
    cuisine: 'An all-organic seafood izakaya — organic vegetables, seasonings, frying oil and sake, with binchotan grilling and fish from its own tank (Tabelog; 2018–2026 reviews) · mackerel sashimi; live black pomfret with its liver; conger eel and scorpion fish (July 2020) · salted oysters; ayu innards; vinegared vegetable starter (September 2020) · smoked conger eel; salted baby cuttlefish; sea cucumber; sesame-dressed organic green beans; grilled sea bream (September 2021) · live flounder sashimi; appetizer and sake pairing set (April 2023) · organic sake; organic beer from a can (2020)',
    website: null, gmaps: gm('オーガニックレストラン 海 河原町二条'), menu_url: TB + 'dtlmenu/',
    notes: '[Organic seafood izakaya · Kawaramachi-Nijo, a fish-tank kitchen] A serious little izakaya where everything is organic — vegetables, seasonings, oil, even the sake — and the owner drives in fish from Maizuru for live sashimi, charcoal grilling and salty sake snacks. Pricey but praised; about ¥6,000–9,000. Cash only.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Reviewers describe a particular owner who serves organic sake and sources live fish himself — a July 2024 reviewer says he personally brings seafood from Maizuru, and a July 2020 reviewer heard of a fish tank in the basement. Criticism: pricey (2018–2024); several dishes very salty (September 2021).',
      philosophy: 'Everything organic, including seasonings and frying oil (Tabelog).',
      specialty: 'Live-fish sashimi; organic sake; binchotan-grilled fish.',
      anecdotes: [
        { text: 'July 2024: "The owner personally delivers fresh seafood all the way from Maizuru to Kawaramachi, showcasing their serious commitment."', source: R + 'B487938324/' },
        { text: 'February 2026: "The vegetables were surprisingly delicious, each one incredibly sweet with a rich flavor that deepens with every bite."', source: R + 'B523448769/' },
      ],
      japanese_sources_summary: '食べログ: オーガニックレストラン 海、魚介料理・居酒屋・鍋、中京区河原町二条下ル一之船入町347 アソルティビル1F、京都市役所前駅から徒歩3分 (河原町二条を下がった西側)、毎日16:30〜22:30 (L.O.22:00、17時からとの記載も)、不定休、予約可、カード不可、28席、禁煙、子供可、調味料まですべてオーガニック、備長炭で焼き、オーガニックの油で揚げる、朝獲れの魚と有機米の日本酒。口コミ (2018年9月〜2026年2月、英語): 鯖の刺身、生きたマナガツオと肝、鱧、カサゴ (2020年7月)、牡蠣の塩辛、うるか、野菜の酢の物 (2020年9月)、鱧の燻製、ちびイカの塩辛、なまこ、有機いんげんの胡麻和え、鯛の塩焼き (2021年9月)、活け平目の刺身、お通しと日本酒のセット (2023年4月)、舞鶴から店主自ら魚を運ぶ (2024年7月)、地下に生け簀 (2020年7月)、値段は高め、塩辛い料理が多いとの声 (2021年9月)。',
      confidence: 'medium', sources: [TB].concat(rv(R, ['B384141309', 'B428884041', 'B430491049', 'B441147510', 'B441354416', 'B466182883', 'B487938324', 'B523448769'])) },
    cultural_comfort: { level: 'japanese', note: 'Cash only; pricey; children welcome.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区河原町二条下ル一之船入町347 アソルティビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with a review dated February 2026.' },
    pin_source: `Tabelog ${TB} (35.013016, 135.768756); GSI resolves only the town 京都府京都市中京区一之船入町, about 115m away — marked approximate; nearest pin kyr_kanton_ryori_hosen 49m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B466182883/'],
    price_note: 'No item prices; reviewers spent ¥2,000–9,999.', last_checked: TODAY, items: [
      it('', '', 'Live-fish sashimi (e.g. flounder, mackerel)', null, 'Sashimi', 'ask', 'no', 'July 2020; April 2023.', 'live_sashimi'),
      it('', '', 'Appetizer and sake pairing set', null, 'Set', 'ask', 'no', 'April 2023.', 'sake_pairing'),
      it('', '', 'Grilled sea bream', null, 'Grill', 'ask', 'no', 'September 2021.', 'tai_shioyaki'),
    ] }, {
    cuisine: '有機野菜、調味料、揚げ油、日本酒まですべてオーガニックの魚介の居酒屋。備長炭で焼き、生け簀の魚も (食べログ、2018〜2026年の口コミ)・鯖の刺身、生きたマナガツオと肝、conger eel、カサゴ (2020年7月)・牡蠣の塩辛、鮎のうるか、野菜の酢の物のお通し (2020年9月)・conger eelの燻製、小イカの塩辛、なまこ、有機いんげんの胡麻和え、鯛の塩焼き (2021年9月)・活け平目の刺身、お通しと日本酒のセット (2023年4月)・オーガニックの日本酒、缶のオーガニックビール (2020年)',
    neighborhood: '二条の南、河原町の西側。京都市役所前から徒歩3分',
    gf_detail: 'グルテンフリーではない: しょうゆ味の料理、魚の内臓の塩辛、揚げ物のあるオーガニックの魚介の居酒屋 (2018〜2026年の口コミ)。小麦不使用のしょうゆの記載はない。',
    vegan_detail: 'ヴィーガン不可: 活け魚の刺身、鯛の塩焼き、イカの塩辛、魚の内臓など魚中心 (2018〜2026年の口コミ)。有機いんげんの胡麻和えなど野菜の料理もあり (2021年)、要確認。',
    notes: '[オーガニックの魚介居酒屋・河原町二条、生け簀のある店] 野菜、調味料、油、日本酒まですべてオーガニックの本格的な居酒屋。店主が舞鶴から運ぶ魚を活け造り、炭火焼き、塩辛の酒肴で。高めだが評判、6,000〜9,000円ほど。現金のみ。',
  });
}

// ================================================================ 菊乃井 肉 雲収
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26042748/'; const R = TB + 'dtlrvwlst/';
  const H = day(['15:00', '19:30']);
  put({
    id: 'kyoto_kikunoi_niku_unshu', name: '菊乃井 肉 雲収 (Kikunoi Niku Unshu)', category: 'OMNI',
    lat: 34.999975, lng: 135.779676, cuisine_type: 'kaiseki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a kaiseki-style beef course with sauces, soy, curry and a parfait (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Chateaubriand course with seafood starters (2025–2026 reviews).',
    hours_raw: 'Tabelog: Mon, Thu–Sun 15:00–19:30; closed Tuesday and Wednesday; hours may change. Reservation only. No children. Cards. Non-smoking. One course only — ¥30,000 (June 2025), ¥33,000 (September 2025). Upstairs from 菊乃井 鮨 青 on Shimogawara-dori (September 2025 review).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'by_reservation',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shimogawara-dori, Higashiyama — 812m from Gion-Shijo',
    cuisine: 'Kikunoi\'s beef restaurant: one kaiseki-style course built around charcoal-grilled Chateaubriand (Tabelog; 2025–2026 reviews) · course ¥30,000–33,000: green-soybean tofu, kiku-decorated sushi, hairy crab and scallop, Akashi sea bream, grilled ayu; Chateaubriand of Kagoshima Kuroge wagyu with salt and with sauce; ochazuke with beef tsukudani; "Unshu" curry; red-miso soup; Shine Muscat parfait (September 2025) · sea-urchin tofu, beef-tongue yamato-ni, hamo, fried Kamo eggplant soup, mango-wasabi sorbet (July 2026) · strawberry-wasabi sorbet, Densuke anago soup, Ohara-me steamed bamboo shoots (April 2026)',
    website: 'https://kikunoi-niku-unshuu.com/', gmaps: gm('菊乃井 肉 雲収'), menu_url: TB + 'dtlmenu/',
    notes: '[Wagyu kaiseki · Shimogawara-dori, Kikunoi\'s beef counter] The famous kaiseki house\'s meat restaurant, upstairs from its sushi bar: a single seasonal course of Kikunoi starters around charcoal-grilled Chateaubriand, eaten with salt and then sauce, finished with beef ochazuke and curry. About ¥33,000. Reservation only; no children. Closed Tuesday and Wednesday.',
    chef_bio: { chef_name: null, roles: ['Kikunoi group (a reviewer met "Chef Murata")'], origin: null,
      background: 'A meat restaurant of the Kyoto kaiseki house 菊乃井 (kyoto_kikunoi_honten and kyoto_kikunoi_sushi_ao are already in data); a September 2025 reviewer found it on the floor above Sushi Ao. An April 2026 reviewer enjoyed talking with "Chef Murata" (romaji as given). A May 2025 reviewer saw a regular served a salt-free course. Criticism: a June 2025 reviewer felt the starter outshone the rest and was unsure what the restaurant was aiming for.',
      philosophy: 'Kyoto cooking techniques applied to carefully chosen meat (July 2026 review).',
      specialty: 'Chateaubriand course; beef ochazuke; Unshu curry.',
      anecdotes: [
        { text: 'September 2025: "Today\'s meat was Chateaubriand made from Kagoshima Prefecture\'s black-haired Wagyu. We first enjoyed it with wasabi, salt, soy sauce, and lemon salt paste."', source: R + 'B514258843/' },
        { text: 'June 2025: "The only option is a course priced at JPY 30,000 per person… I wasn\'t quite sure what the restaurant was aiming for."', source: R + 'B509283682/' },
      ],
      japanese_sources_summary: '食べログ: 菊乃井 肉 雲収、日本料理、東山区下河原通463-30、祇園四条から812m、月・木〜日15:00〜19:30、火・水曜休み、営業時間は変更の可能性あり、完全予約制、子供不可、カード可、禁煙、公式サイト kikunoi-niku-unshuu.com。口コミ (2025年2月〜2026年7月、英語・日本語): コースのみ30,000円 (2025年6月)・33,000円 (2025年9月)、鮨 青の2階 (2025年9月)、枝豆の豆腐、菊飾りの寿司、毛蟹と帆立、Akashiの鯛、鮎、鹿児島の黒毛和牛のシャトーブリアンを塩とたれで、牛の佃煮の茶漬け、雲収カレー、赤だし、シャインマスカットのパフェ、雲丹豆腐、牛タン大和煮、鱧落とし (2026年7月)、塩抜きのコースを頼む常連 (2025年5月)、Murataという料理人との会話 (2026年4月)、狙いがよくわからないとの声 (2025年6月)。',
      confidence: 'medium', sources: [TB, 'https://kikunoi-niku-unshuu.com/'].concat(rv(R, ['B509283682', 'B514087695', 'B514258843', 'B514885535', 'B525613662', 'B525677514', 'B531218501', 'B531509001'])) },
    cultural_comfort: { level: 'japanese', note: 'Reservation only; one course; no children.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['A May 2025 reviewer saw a regular served a salt-free version of the course.'] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区下河原通463-30',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated April and July 2026.' },
    pin_source: `Tabelog ${TB} (34.999921, 135.779676) sits 1.7m from kyoto_kikunoi_sushi_ao (same building, 下河原通463-30), so moved about 6m north to (34.999975, 135.779676), at least 7.4m from every pin; GSI lot 京都府京都市東山区下河原町463番地 about 110m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B514258843/', R + 'B509283682/'],
    price_note: 'Course price from June and September 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chateaubriand kaiseki course (only option)', '¥33,000', 'Course', 'no', 'no', 'June and September 2025.', 'unshu_course'),
    ] }, {
    cuisine: '菊乃井の肉料理の店。炭火焼きのシャトーブリアンを中心にした会席仕立てのコース一本 (食べログ、2025〜2026年の口コミ)・コース30,000〜33,000円: 枝豆の豆腐、菊飾りの寿司、毛蟹と帆立、Akashiの鯛、鮎の塩焼き、鹿児島の黒毛和牛のシャトーブリアンを塩とたれで、牛の佃煮の茶漬け、「雲収カレー」、赤だし、シャインマスカットのパフェ (2025年9月)・雲丹豆腐、牛タンの大和煮、鱧落とし、Kamoなすの揚げ椀、マンゴーとわさびのソルベ (2026年7月)・いちごとわさびのソルベ、Densuke穴子の椀、Oharameのたけのこ蒸し (2026年4月)',
    neighborhood: '東山の下河原通。祇園四条から812m',
    gf_detail: 'グルテンフリーではない: たれ、しょうゆ、カレー、パフェのある会席仕立ての牛肉のコース (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 魚介の前菜とシャトーブリアンのコース (2025〜2026年の口コミ)。',
    notes: '[和牛の会席・下河原通、菊乃井の肉料理] 名料亭菊乃井の肉の店で、鮨 青の2階。菊乃井の前菜に炭火焼きのシャトーブリアンを塩とたれで、締めは牛の茶漬けとカレーの季節のコース一本。33,000円ほど。完全予約制、子供不可。火・水曜休み。',
  });
}

// ================================================================ 波ぎ茶寮
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26003382/'; const R = TB + 'dtlrvwlst/';
  const L = day(['11:30', '15:00']); const F = day(['09:00', '17:00']);
  put({
    id: 'kyoto_hagi_saryo', name: '波ぎ茶寮 (Hagi Saryo)', category: 'OMNI',
    lat: 35.000162, lng: 135.779823, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soba and udon in soy-based broth, tempura soba and curry udon (2024–2026 reviews); no 100% buckwheat noodles mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: herring, duck, chicken and anago soba in dashi (2024–2026 reviews).',
    hours_raw: 'Tabelog: Mon, Tue, Wed, Sat, Sun 11:30–15:00; Fri 9:00–17:00; closed Thursday. No reservations; queues move quickly (January 2026). No credit cards (Tabelog) — cash. 40 seats: tables and tatami (not sunken) looking onto a garden with a koi pond. Non-smoking. On Shimogawara by Kodaiji, between Kiyomizu-dera and Gion (2024–2026 reviews).',
    hours: { 0: L, 1: L, 2: L, 4: F, 5: L, 6: L }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shimogawara by Kodaiji, between Gion and Kiyomizu-dera — 811m from Gion-Shijo',
    cuisine: 'A traditional soba and udon house with a koi-pond garden near Kodaiji (Tabelog; 2024–2026 reviews) · nishin (herring) soba ¥1,250; mushroom mizore soba ¥1,350 (February 2026) · anago tempura soba about ¥1,300 (October 2025) · duck soba, chicken soba, tempura soba, sansai soba, yuba udon, curry udon (2024–2026) · sets with fried rice or seasoned rice (2025–2026) · chilled chicken soba in summer (July 2026) · seiro soba and tempura (August 2026)',
    website: 'http://www.eonet.ne.jp/~kyoto-hagi/index.html', gmaps: gm('波ぎ茶寮 高台寺'), menu_url: TB + 'dtlmenu/',
    notes: '[Soba & udon · Kodaiji on Shimogawara, a garden-view noodle house] A reasonably priced, old-fashioned noodle house between Gion and Kiyomizu where you eat herring soba, yuba udon or tempura soba looking out on a garden pond with koi — about ¥1,250–1,500. Cash only. Lunch only (Friday 9–17); closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Reviewers describe experienced, efficient staff, a homely, traditional feel, many overseas visitors and prices below the nearby slopes (2024–2026). Criticism: no hand towels (August 2025); a broth a little light (October 2025; February 2026).',
      philosophy: null,
      specialty: 'Nishin soba; garden view.',
      anecdotes: [
        { text: 'April 2025: "From the seat where we took off our shoes, we had a lovely view of the beautiful garden, complete with koi swimming in the pond."', source: R + 'B506316856/' },
        { text: 'January 2026: "In recent years, many restaurants in this area have catered to inbound tourists with their pricing and menu, but this place felt like a traditional Kyoto restaurant, which was reassuring."', source: R + 'B520061751/' },
      ],
      japanese_sources_summary: '食べログ: 波ぎ茶寮、そば・うどん、東山区下河原町463-24、祇園四条から811m、月・火・水・土・日11:30〜15:00、金9:00〜17:00、木曜休み、予約不可、カード不可、40席、個室あり、禁煙。口コミ (2024年11月〜2026年8月、英語・日本語): 高台寺近く、鯉の泳ぐ池の庭、にしんそば1,250円、きのこみぞれそば1,350円 (2026年2月)、穴子の天ぷらそば約1,300円 (2025年10月)、鴨そば、かしわそば、天ぷらそば、山菜そば、湯葉うどん、カレーうどん、焼き飯や炊き込みご飯のセット、夏の冷やしかしわそば、せいろそばと天ぷら、手際のよい店員、海外の客が多い、おしぼりがない (2025年8月)、だしがやや薄いとの声。',
      confidence: 'medium', sources: [TB].concat(rv(R, ['B496248323', 'B506316856', 'B512042773', 'B514960513', 'B516707398', 'B520061751', 'B522565104', 'B523020036', 'B523227302', 'B527827685', 'B531635106', 'B533453713'])) },
    cultural_comfort: { level: 'some_english', note: 'Many overseas visitors (2025–2026); cash only; shoes off for tatami seats.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区下河原町463-24',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated April, July and August 2026.' },
    pin_source: `Tabelog ${TB} (35.000162, 135.779823); GSI lot 京都府京都市東山区下河原町463番地 about 92m away; nearest pin kyoto_kikunoi_sushi_ao 31m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523227302/', R + 'B514960513/'],
    price_note: 'Prices from October 2025 and February 2026 reviews; cash only.', last_checked: TODAY, items: [
      it('', '', 'Nishin (herring) soba', '¥1,250', 'Soba', 'no', 'no', 'February 2026.', 'nishin_soba'),
      it('', '', 'Mushroom mizore soba', '¥1,350', 'Soba', 'no', 'no', 'February 2026.', 'kinoko_mizore_soba'),
      it('', '', 'Anago tempura soba', null, 'Soba', 'no', 'no', 'October 2025.', 'anago_ten_soba'),
      it('', '', 'Yuba udon set', null, 'Udon', 'no', 'no', 'January 2026.', 'yuba_udon'),
    ] }, {
    cuisine: '高台寺近くの、鯉の池の庭がある昔ながらのそば・うどん屋 (食べログ、2024〜2026年の口コミ)・にしんそば1,250円、きのこみぞれそば1,350円 (2026年2月)・穴子の天ぷらそば約1,300円 (2025年10月)・鴨そば、かしわそば、天ぷらそば、山菜そば、湯葉うどん、カレーうどん (2024〜2026年)・焼き飯や炊き込みご飯のセット (2025〜2026年)・夏の冷やしかしわそば (2026年7月)・せいろそばと天ぷら (2026年8月)',
    neighborhood: '祇園と清水寺の間、高台寺そばの下河原。祇園四条から811m',
    gf_detail: 'グルテンフリーではない: しょうゆベースのつゆのそば・うどん、天ぷらそば、カレーうどん (2024〜2026年の口コミ)。十割そばの記載はない。',
    vegan_detail: 'ヴィーガン不可: だしのにしんそば、鴨そば、かしわそば、穴子そば (2024〜2026年の口コミ)。',
    notes: '[そば・うどん・高台寺そばの下河原、庭を眺める麺の店] 祇園と清水の間の、手頃で昔ながらの麺の店。にしんそば、湯葉うどん、天ぷらそばを鯉の泳ぐ庭の池を眺めながら、1,250〜1,500円ほど。現金のみ。昼のみ (金曜は9〜17時)、木曜休み。',
  });
}

// ================================================================ スパイス居酒屋 スバビハニ 京都市役所前店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26042688/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_subabibani_shiyakusho', name: 'スパイス居酒屋 スバビハニ 京都市役所前店 (Subabibani)', category: 'OMNI',
    lat: 35.013064, lng: 135.76851, cuisine_type: 'curry',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: Indian and Nepali curries with very large naan, samosa and fried snacks (2025–2026 reviews). Basmati rice can replace naan (January 2026) — ask about the curries.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: dal curry, vegetable curry and an eggplant-and-potato daily curry appear in reviews (2026), but cream, ghee and yogurt in the sauces were not described.',
    hours_raw: 'Tabelog lists no hours — reviewers ate both lunch and dinner (2025–2026), so check before visiting. Cards accepted. 2nd floor of the 河二ビル on Nijo-dori just west of Kawaramachi, with large windows; about 5 min north of Kyoto Shiyakusho-mae (2026 reviews). Opened in 2025 (a July 2025 reviewer says "this year"). Discount coupons sometimes on the 1st floor (July 2025). One of at least four スバビハニ shops in our crawls (丸太町, 四条大宮, リサーチパーク前).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nijo-Kawaramachi, west side — 5 min walk from Kyoto Shiyakusho-mae',
    cuisine: 'An Indian–Nepali curry house and "spice izakaya" with giant naan, spice levels to choose and Indian beer and whisky (Tabelog; July 2025–October 2026 reviews) · A lunch with daily curry and drink ¥950 (April 2026) · VIP dinner set ¥2,200: two curries, naan or basmati rice, tandoori chicken, kebab, salad, dessert, drink (January 2026) · McDowell\'s No. 1 whisky ¥600 · plain naan refill +¥100 (November 2025) · chicken tikka; keema; mutton, pork, seafood and garlic-chicken curries; Kashmiri and onion naan; biryani; samosa (2025–2026) · all-you-can-drink (December 2025)',
    website: null, gmaps: gm('スバビハニ 京都市役所前店'), menu_url: TB + 'dtlmenu/',
    notes: '[Indian–Nepali curry · Nijo-Kawaramachi, a bright second-floor spice izakaya] A cheerful upstairs curry house with big windows: table-sized naan, curries at your chosen heat, lunch sets from ¥950 and a ¥2,200 dinner set with tandoori chicken and Kingfisher. Hours not listed — check ahead.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'A July 2025 reviewer calls it a branch of an Asian dining chain opened that year; our crawls hold four スバビハニ shops. Reviewers describe young, polite, uniformed staff who check the spice level, and prices a little below average. Criticism: flavors similar to other Indo-Nepali shops (January and May 2026).',
      philosophy: null,
      specialty: 'Giant naan; curry sets; Indian beer and whisky.',
      anecdotes: [
        { text: 'October 2026: "It was so large that it not only overflowed from the plate but also occupied half the table, resembling a freshly baked work of art."', source: R + 'B538319661/' },
        { text: 'July 2025: "This Asian dining chain opened this year on the second floor of a building near Teramachi Street, behind Kyoto City Hall."', source: R + 'B511513532/' },
      ],
      japanese_sources_summary: '食べログ: スパイス居酒屋 スバビハニ 京都市役所前店、アジア・エスニック、中京区二条通河原町西入榎木町87 河二ビル2F、京都市役所前から233m、営業時間の記載なし、カード可。口コミ (2025年7月〜2026年10月、英語): 2025年オープンのアジアンダイニングのチェーン店との記載、大きなナン、辛さを選べるカレー、Aランチ950円 (2026年4月)、VIPセット2,200円 (2026年1月)、マクダウェルズNo.1 600円、ナンのおかわり+100円、チキンティッカ、キーマ、マトン、ポーク、シーフード、ガーリックチキンのカレー、カシミールナン、オニオンナン、ビリヤニ、サモサ、飲み放題、丁寧な若いスタッフ。食べログの同名店: 丸太町店、四条大宮店、リサーチパーク前店。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B510417550', 'B511513532', 'B517301284', 'B519742553', 'B520069386', 'B520194348', 'B521733599', 'B525841458', 'B525989314', 'B528802106', 'B538319661'])) },
    cultural_comfort: { level: 'some_english', note: 'Staff speak limited Japanese (January 2026); hours not listed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区二条通河原町西入榎木町87 河二ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated April, May and October 2026.' },
    pin_source: `Tabelog ${TB} (35.013064, 135.76851); GSI lot 京都府京都市中京区榎木町87番地 about 70m away; nearest pin kyr_kanton_ryori_hosen 51m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520194348/', R + 'B525989314/'],
    price_note: 'Prices from January and April 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'A lunch (daily curry, naan, drink)', '¥950', 'Lunch', 'no', 'ask', 'April 2026.', 'a_lunch'),
      it('', '', 'VIP dinner set', '¥2,200', 'Set', 'no', 'no', 'January 2026.', 'vip_set'),
      it('', '', 'Dal curry', null, 'Curry', 'ask', 'ask', 'April 2026.', 'dal_curry'),
    ] }, {
    cuisine: '大きなナン、選べる辛さ、インドのビールとウイスキーのインド・ネパールのカレー店兼「スパイス居酒屋」(食べログ、2025年7月〜2026年10月の口コミ)・日替わりカレーとドリンクのAランチ950円 (2026年4月)・カレー2種、ナンかバスマティライス、タンドリーチキン、ケバブ、サラダ、デザート、ドリンクのVIPセット2,200円 (2026年1月)・マクダウェルズNo.1 600円・プレーンナンのおかわり+100円 (2025年11月)・チキンティッカ、キーマ、マトン、ポーク、シーフード、ガーリックチキンのカレー、カシミールナン、オニオンナン、ビリヤニ、サモサ (2025〜2026年)・飲み放題 (2025年12月)',
    neighborhood: '二条河原町の西側。京都市役所前から徒歩5分',
    gf_detail: 'グルテンフリーではない: とても大きなナン、サモサ、揚げ物のインド・ネパールのカレー (2025〜2026年の口コミ)。ナンをバスマティライスにもできる (2026年1月)、カレーは要確認。',
    vegan_detail: '要確認: ダルカレー、野菜カレー、なすとじゃがいもの日替わりカレーが口コミに出る (2026年) が、クリーム、ギー、ヨーグルトの使用は書かれていない。',
    notes: '[インド・ネパールのカレー・二条河原町、明るい2階のスパイス居酒屋] 大きな窓のある陽気な2階のカレー店。テーブルほどの大きなナン、好みの辛さのカレー、950円からのランチ、タンドリーチキンとキングフィッシャー付きの2,200円の夜のセット。営業時間の記載がないので事前に確認を。',
  });
}

save();
