// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first — worker osw2, batch 4 (lane: Tabelog id mod 4 = 1).
//   + 大阪 もつ鍋 PLay (wagyu-offal motsu-nabe in Shinsaibashi, walls of PL Gakuen baseball autographs; smoking allowed)
//   + 岡﨑 Okazaki (kaiseki courses of chef 岡﨑 直哉, ex-二番手 at 日本料理 翠; formerly 翠 岡﨑, renamed 1 October 2026)
//   + WAGYU王国 WAGYU Oukoku (Kobe, Matsusaka and Omi beef yakiniku, open to 3 am at weekends; opened December 2025)
//   + ラーメン家 みつ葉 あべの出張所 Ramenya Mitsuba Abeno (foam-topped pork-and-chicken paitan from Nara's Mitsuba, in the Abeno Hoop food hall)
//   Skipped:
//   - 新宿焼肉 牛たんの檸檬 大阪本店 27143533 — fast-growing chain: the operator's PR Times release of July 2026 says the
//     brand, founded in Shinjuku in 2018, has opened in Osaka, Asakusa, Yurakucho, Taipei, Shibuya and Kyoto, Akihabara
//     being its 8th shop (https://prtimes.jp/main/html/rd/p/000000022.000143737.html, read 2026-11-01).
//   - にし家 本店 27000825 — chain in data: the official site (nishiya-shinsaibashi.com) lists its sister shops, among them
//     "蕎麦しゃぶ総本家 浪花そば なんばダイニングメゾン店", which is osaka_naniwa_soba_namba_dining_maison (address_ja
//     "大阪府大阪市中央区難波5-1-18 なんばダイニングメゾン 7F"). Flagship of the group, so the same question as Fukutaro.
//   No ramen block for Mitsuba: richness, clarity, tare strength, noodle firmness and aroma punch have sources, but no source
//   says anything about oil (the nearest is "depth without being heavy"), so per the 2026-11-01 lesson the block is left off.
//   Chain check of the four kept: PLay — one Tabelog listing; Okazaki — one shop (a noren-wake from 日本料理 翠, now 翠 大屋,
//   official site); WAGYU王国 — one shop found (Tabelog, Gurunavi); Mitsuba — five shops (Tomio honten, the second, and three
//   出張所 in Abeno, Kadoma and Mi Nara; official site), none in data, kept as a small group like ル・ピノー.
//   None is in data/osaka.json (grep by name, romaji and address, 2026-11-01). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw2-4');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27143533', 'Chain: 新宿焼肉 牛たんの檸檬 大阪本店 belongs to a fast-growing brand founded in Shinjuku in 2018; its July 2026 PR Times release lists shops in Osaka, Asakusa, Yurakucho, Taipei, Shibuya and Kyoto, with Akihabara the 8th.');
skip('27000825', 'Chain in data: にし家 本店 is the flagship of the group whose official site lists 蕎麦しゃぶ総本家 浪花そば なんばダイニングメゾン店 (osaka_naniwa_soba_namba_dining_maison) among its shops. Flagged to the integrator as a flagship, like Fukutaro honten.');

// ================================================================ 大阪 もつ鍋 PLay
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27094957/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:30']);
  put({
    id: 'osaka_motsunabe_play_shinsaibashi', name: '大阪 もつ鍋 PLay (Osaka Motsu-nabe PLay)', category: 'OMNI',
    lat: 34.674142, lng: 135.501966, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The hot-pot broth is built on soy sauces the shop selects from around Japan (Tabelog), and the usual finishes are champon noodles or udon; the cheese risotto finish uses rice. Nothing is said about wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu-offal hot-pot restaurant; the vegetables and tofu cook in the offal broth.',
    hours_raw: 'Daily 17:00–22:30 (last order 22:00); open on Sundays and holidays when the website shows reservations; irregular closures (Tabelog). Reservations accepted; private hire up to 20 (Tabelog). Smoking allowed (Tabelog; August and October 2026 reviews). Table charge ¥350 per person, not on courses (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), transport IC and other e-money, Rakuten Pay and au PAY (Tabelog). 23 seats: 3 at the counter, 20 at tables; free Wi-Fi, power outlets; English menu; takeout (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashi-suji 1-3-29, 3F of ミヤプラザ心斎橋 — 3 min from Shinsaibashi Stn; easy to miss from the street (September 2026)',
    cuisine: 'Motsu-nabe of fresh wagyu offal with local vegetables in a dashi of soy sauces chosen from around Japan (Tabelog) · broths: the classic soy sauce, soy-based with a punch of garlic (September 2026), or spicy, recommended by staff (October 2026) · in the pot: cabbage, garlic chives, bean sprouts, burdock, enoki and tofu, with extra horumon and fried tofu to add (2026) · signature side: yubiki horumon (blanched offal) with green onion and ponzu (Tabelog; 2026 reviews) · steamed pork, chojyan, motsu jigoku-yaki, honey tomatoes, edamame · finishes: champon noodles, udon, and a cheese risotto with grated cheese and Tabasco (2026) · course ¥6,500 (October 2026); around ¥3,000–5,000 per person à la carte (August–September 2026) · beer, sake, shochu, wine, cocktails',
    website: null, gmaps: gm('大阪 もつ鍋 PLay 心斎橋'), menu_url: TB,
    notes: "[Motsu-nabe · Shinsaibashi, wagyu-offal hot pot under baseball autographs] A small third-floor motsu-nabe room near Shinsaibashi Station, its walls covered in signed memorabilia from PL Gakuen alumni, professional baseball players and comedians (2026 reviews). The offal is wagyu, and diners remark on its freshness and lack of smell; it stays chewy in the pot. Pick the classic soy-sauce broth, with a punch of garlic, or the spicy one, start with the blanched horumon in green-onion ponzu, one diner's MVP and a must for others, then finish the pot two ways: champon noodles or udon, and then a cheese risotto with grated cheese and Tabasco. One regular on a 17th visit (September 2026) still orders both finishes. Smoking is allowed.",
    chef_bio: { chef_name: null, roles: ['Owner and kitchen unnamed in every source read'], origin: null, background: 'Per the Tabelog shop text, a favourite of celebrities and athletes, using premium wagyu offal, locally grown vegetables and a dashi of soy sauces chosen from around Japan. Diners in 2026 describe walls of autographs from PL Gakuen alumni, baseball players and comedians, friendly staff and quick service.', philosophy: null, specialty: 'Wagyu-offal motsu-nabe; blanched horumon with green-onion ponzu; cheese risotto finish.',
      anecdotes: [
        { text: '"With motsu-nabe, if you cook it too long, the fat can render out, and the edible parts shrink. However, the motsu here maintains a satisfying chewiness until the very end." — October 2026.', source: R + 'B521311051/' },
        { text: '"The first dish was the blanched Horumon with green onions and ponzu sauce. It was absolutely amazing!" — October 2026, ¥6,500 course.', source: R + 'B537136383/' },
        { text: '"This time, I tried udon for the first time after the soy sauce hot pot, and it was so good with a nice chewy texture!… And then, from the udon to the cheese risotto." — September 2026, a 17th visit.', source: R + 'B444261011/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員、英語版): Osaka Motsu-nabe PLay (プレイ)、もつ鍋・居酒屋・horumon焼き、心斎橋筋1-3-29 ミヤプラザ心斎橋 3F、心斎橋駅から徒歩3分、毎日17:00〜22:30 (L.O.22:00)、日祝はネット予約がある日のみ営業、不定休、喫煙可、チャージ350円 (コースは除く)、カード・電子マネー・QR可、23席 (カウンター3、テーブル20)、貸切20名まで、Wi-Fi、電源、英語メニュー、テイクアウト。店の説明: 有名人やアスリートも通う、全国から厳選した醤油の特製出汁、新鮮な上質の和牛の horumonと地元の野菜、人気の「Yubiki horumon の negi ponzu」。口コミ(2026年1月〜10月): 醤油ともつ鍋と辛いもつ鍋、にんにくのきいた醤油ベース、キャベツ、ニラ、もやし、ごぼう、えのき、豆腐、horumon と油揚げの追加、Yubiki horumon の negi ponzu、蒸し豚、Chojyan、もつの Jigoku-yaki、はちみつトマト、締めは champon の麺、udon、粉チーズとタバスコのチーズリゾット、コース6,500円、PL Gakuen の OB や野球選手、芸人のサイン、喫煙可、17回通う常連。',
      confidence: 'medium', sources: [TB, R + 'B444261011/', R + 'B521311051/', R + 'B533089989/', R + 'B533594447/', R + 'B534118505/', R + 'B534438043/', R + 'B535154127/', R + 'B536836712/', R + 'B537136383/', R + 'B538207653/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); staff recommend a broth (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋1-3-29 ミヤプラザ心斎橋 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋一丁目3番29号 (go) 17m. Same building as 一蘭 心斎橋店 (osaka_ichiran_shinsaibashi, address_ja "大阪府大阪市中央区心斎橋筋1-3-29 ミヤプラザ心斎橋 1F"), whose pin is about 17 m away, so the two are not stacked; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537136383/', R + 'B534438043/'],
    price_note: 'Only the course price is known (October 2026 review); Tabelog lists no menu prices.', last_checked: TODAY, items: [
      it('', '', 'Course (blanched horumon, side dishes, motsu-nabe, champon finish)', '¥6,500', 'Course', 'ask', 'no', 'October 2026 review.', 'course'),
      it('', '', 'Motsu-nabe, soy sauce or spicy broth', '', 'Hot pot', 'ask', 'no', '2026 reviews.', 'motsunabe'),
      it('', '', 'Blanched horumon with green onion and ponzu', '', 'Side dishes', 'ask', 'no', 'Tabelog; 2026 reviews.', 'yubiki_horumon'),
      it('', '', 'Cheese risotto (finish)', '', 'Finish', 'ask', 'no', '2026 reviews.', 'cheese_risotto'),
    ] }, {
    cuisine: '全国から厳選した醤油の特製出汁で、新鮮な和牛の horumonと地元の野菜を煮るもつ鍋 (食べログ)・スープ: 定番の醤油 (にんにくのきいた醤油ベース、2026年9月)、店がすすめる辛い鍋 (2026年10月)・具はキャベツ、ニラ、もやし、ごぼう、えのき、豆腐、horumon と油揚げの追加も (2026年)・名物はYubiki horumon の negi ponzu (食べログ、2026年の口コミ)・蒸し豚、Chojyan、もつの Jigoku-yaki、はちみつトマト、edamame・締めは champon の麺、udon、粉チーズとタバスコのチーズリゾット (2026年)・コース6,500円 (2026年10月)、アラカルトで1人3,000〜5,000円ほど (2026年8〜9月)・ビール、日本酒、焼酎、ワイン、カクテル',
    neighborhood: '心斎橋筋1-3-29 ミヤプラザ心斎橋 3F。心斎橋駅から徒歩3分、通りからは見落としやすい (2026年9月)',
    gf_detail: '要確認。グルテンの情報なし。鍋の出汁は全国から選んだ醤油がベース (食べログ) で、締めはふつう champon の麺かudon。チーズリゾットは米。小麦についての説明はない。',
    vegan_detail: 'ヴィーガンではありません。和牛の horumonの鍋の店で、野菜や豆腐もhorumonの出汁で煮る。',
    notes: '[もつ鍋・心斎橋、野球のサインに囲まれて和牛のもつ鍋] 心斎橋駅に近いビルの3階の小さなもつ鍋の店で、壁は PL Gakuen の OB、プロ野球選手、芸人のサインでいっぱい (2026年の口コミ)。horumon は和牛で、新鮮で臭みがないと評判、鍋で煮ても最後までぷりっとしている。にんにくのきいた定番の醤油か辛い鍋を選び、まずはある人が MVP と呼び、ほかの人も必ず頼むというYubiki horumon の negi ponzuを。締めは二段で、champon の麺かudon、それから粉チーズとタバスコのチーズリゾット。17回目の常連 (2026年9月) もいまだに両方頼む。喫煙可。',
  });
}

// ================================================================ 岡﨑
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27136381/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.sui-okazaki.com/';
  put({
    id: 'osaka_okazaki_higashishinsaibashi', name: '岡﨑 (Okazaki)', category: 'MOM_AND_POP',
    lat: 34.672251, lng: 135.502498, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. The monthly omakase is classic Japanese cooking built on dashi, with soy sauces served for the sashimi (July 2026); some dishes are wheat-based, such as spring rolls (October 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an omakase of fish, dashi of bonito, and Miyazaki beef (official site).',
    hours_raw: 'Seatings: dinner at 18:00 and 20:30 (no time limit at the table); lunch at 12:00 on Tuesday, Friday and Sunday only, all guests starting together; closed Wednesday (official site; Tabelog). Reservation only, by phone or online (TableCheck, Tabelog); up to 10 guests a booking, private hire 10–20; cancellation 100% from two days before (official site). Service charge 10%, 15% in the private rooms (official site). Cards (VISA, Master, AMEX, JCB, Diners); no e-money (official site). 26 seats: a 10-seat counter, a table for 6, two private rooms with sunken seating; non-smoking, smoking outside (official site; Tabelog). Children only at lunch (Tue, Fri, Sun) and all day on Saturday and Sunday (official site). Opened 11 April 2023 (Tabelog) as 翠 岡﨑; renamed 岡﨑 on 1 October 2026 (official site).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-16-20, 2F of 心斎橋ステージアビル — 3 min from Shinsaibashi Stn exit 6',
    cuisine: 'Japanese omakase changing monthly (prices tax included, plus 10% service; official site, read November 2026): lunch 8 dishes ¥11,000 (Tue, Fri, Sun); dinner 10 dishes ¥19,800 · from the site\'s sample course: a clear soup of white amadai, sesame tofu and mizu, the dashi of two kombu boiled separately with karebushi and tuna flakes; Spanish mackerel and wild mushrooms grilled with the scent of charcoal, straw or firewood; a seasonal hassun, "the lead role of the course"; Miyazaki beef with wild watercress · from reviews: sashimi with several soy sauces, clay-pot rice with corn and shirasu (July 2026), sweetfish wrapped in oboro kombu (May 2026), dinner upgrades to Chateaubriand (June 2026), maitake-and-oyster spring rolls, a fillet steak and matcha with warabi mochi (October 2026 lunch); leftovers of the rice packed to take home · 15–20 sakes, about 50 wines tasted by the chef, one red and one white by the glass (official site) · mail order: hamo or hamo-and-matsutake hot-pot sets in season (official site)',
    website: SITE, gmaps: gm('日本料理 岡﨑 東心斎橋'), menu_url: SITE,
    notes: "[Kaiseki · Higashi-Shinsaibashi, a young chef's monthly omakase] The Japanese restaurant of chef 岡﨑 直哉, who spent five years at 日本料理 翠 (now 翠 大屋), rising to second-in-command, and three and a half as head chef of an Osaka ryotei, before opening here in 2023 as 翠 岡﨑 under a noren-wake from 翠; on 1 October 2026 it dropped 翠 and became simply 岡﨑, at the suggestion of 翠's chef, per a September 2026 diner (official site). A calm second-floor room with a white-wood counter of ten and two private rooms. The monthly omakase is ¥11,000 for eight dishes at lunch (Tuesday, Friday and Sunday only) and ¥19,800 for ten at dinner: a clear soup on a two-kombu dashi, fish grilled over charcoal, straw or firewood, a showpiece hassun, Miyazaki beef, and clay-pot rice so good one July 2026 diner asked for seconds. Diners find the chef friendly and talkative; one thought the grilling still has room to grow, another that a meal ran about three hours (August 2024). Listed in the Michelin Guide's Selected Osaka 2026 (May 2026 review).",
    chef_bio: { chef_name: '岡﨑 直哉', roles: ['Chef and owner (料理人; independent shop, official site)'], origin: null, background: 'Per the official site: interested in cooking from primary school; after high school went to a culinary college, and drawn to Japanese cooking for its expression of the seasons; three and a half years as head chef at a ryotei in Osaka and five years at 日本料理 翠 (now 翠 大屋), becoming second-in-command; opened 翠 岡﨑 in Higashi-Shinsaibashi in 2023 as a noren-wake; renamed 岡﨑 from 1 October 2026. The chef visits shops to pick work by contemporary potters and sometimes commissions dishes for particular courses. A September 2026 diner reports that 翠\'s owner-chef suggested it was time to use the chef\'s own name; a March 2026 diner mentions a one-night collaboration fusing Italian and Japanese cooking. Fish include catches from fisherman Fujimoto in Ehime (May and June 2026). Diners describe a young, confident, friendly chef (2025–2026).', philosophy: '"Only by understanding Japanese cuisine to its roots can new techniques and presentation add meaning"; good seasonal ingredients are taken as given, and the work is in raising them into the shop\'s own dish (official site).', specialty: 'Monthly omakase; two-kombu dashi; hassun; clay-pot rice.',
      anecdotes: [
        { text: '"Starting from October 2026, the name \\"Sui Okazaki\\" will drop the \\"Sui\\" and simply be \\"Okazaki.\\" It seems the head chef, who is the owner of Sui Oya, suggested, \\"It\'s about time you just use your own name.\\"" — September 2026, lunch.', source: R + 'B521414244/' },
        { text: '"The corn and shirasu clay pot rice at the end was so delicious that even after ordering a large portion, I couldn\'t resist asking for a second helping." — July 2026.', source: R + 'B533061102/' },
        { text: '"The owner was friendly and very easy to talk to. I enjoyed the various sights visible from the counter." — July 2025.', source: R + 'B511023212/' },
      ],
      japanese_sources_summary: '公式サイト: 心斎橋の日本料理 岡﨑 (おかざき)、店名変更のご挨拶: 2026年10月1日より「心斎橋 翠 岡﨑」は「岡﨑 (OKAZAKI)」に、「日本料理 翠」から屋号を受け継ぐ形で東心斎橋に独立した日本料理店、伝統を大切にしながら当店独自の料理へ、カウンター席をメインに個室2部屋、料亭や割烹で培った経験、現代作家の器、料理人 岡﨑 直哉: 小学生の頃から料理に興味、高校卒業後に調理師専門学校、大阪の料亭で料理長として3年半、「日本料理 翠 (現・翠 大屋)」で5年修業し二番手に、2023年に暖簾分けの形で「翠 岡﨑」をオープン、2026年「岡﨑」へ。コース (税込、別途サービス料10%): ランチ (火・金・日、12時一斉スタート) 全8品11,000円、ディナー全10品19,800円、月替わり、椀物 (白甘鯛、胡麻豆腐、みずの実、二種類の昆布と枯れ本節・まぐろ節の出汁)、焼物 (鰆、天然茸、炭や藁、薪の香り)、八寸、肉料理 (宮崎牛、天然クレソン)、日本酒15〜20種類、ワイン50種類ほど、グラスワイン赤白1種ずつ、鱧鍋セットや鱧松茸鍋セットの通販。東心斎橋1-16-20 心斎橋ステージアビル 2階、心斎橋駅6番出口から徒歩3分、ディナー第一部18:00〜・第二部20:30〜 (時間制限なし)、ランチは火・金・日12:00〜、水曜休み、26席 (テーブル6、カウンター10、個室10)、個室サービス料15%、子どもはランチと土日終日のみ、予約は最大10名、キャンセルは2日前から100%。食べログ: オープン2023年4月11日、禁煙 (店外で喫煙可)。口コミ(2024年8月〜2026年10月): 翠の大将の弟子、名前の変更は翠の大将のすすめ、Michelin Guide の Selected Osaka 2026、Ehime の漁師 Fujimoto さんの魚、八寸、sashimi に数種類の醤油、とうもろこしと shirasu の土鍋ご飯、舞茸と牡蠣の春巻き、ヘレ、わらび餅、抹茶、ディナーはシャトーブリアン、残ったご飯は持ち帰り、気さくな大将、3時間ほどかかったという声、焼き物はまだ伸びしろという声。',
      confidence: 'medium', sources: [TB, SITE, R + 'B489832866/', R + 'B511023212/', R + 'B519265972/', R + 'B521414244/', R + 'B524933855/', R + 'B531797882/', R + 'B533061102/', R + 'B537417365/', R + 'B538292998/', R + 'B538401846/'] },
    cultural_comfort: { level: 'english', note: 'The official site has an English page and English online booking (TableCheck); the chef talks with guests at the counter (2025–2026).' },
    safety: { ...SAFETY0, staff_allergy_handling: [] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-16-20 心斎橋ステージアビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (renaming notice of 1 October 2026) and shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目16番20号 (go) 14m. Nearest records are at a different house number: あぐー豚しゃぶ 豚家 葵 and 真夜中キッチン うさぎ (osaka_agu_buta_shabu_butaya_aoi, osaka_mayonaka_kitchen_usagi, address_ja "大阪府大阪市中央区東心斎橋1-16-19 日宝周防町会館 1F") about 10 and 16 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Course prices from the official site (tax included, plus 10% service; read November 2026).', last_checked: TODAY, items: [
      it('ランチ 全8品', '', 'Lunch omakase, 8 dishes (Tue, Fri, Sun)', '¥11,000', 'Course', 'ask', 'no', 'Official site.', 'lunch_course'),
      it('ディナー 全10品', '', 'Dinner omakase, 10 dishes', '¥19,800', 'Course', 'ask', 'no', 'Official site.', 'dinner_course'),
    ] }, {
    cuisine: '月替わりの日本料理のおまかせ (税込、別途サービス料10%、公式サイト、2026年11月に確認): ランチ全8品11,000円 (火・金・日)、ディナー全10品19,800円・公式サイトの一例: 白甘鯛、胡麻豆腐、みずの実の椀物 (二種類の昆布を別々に煮出し、枯れ本節とまぐろ節を合わせた出汁)、炭や藁、薪の香りをまとわせて焼く鰆と天然茸、季節を表す「コースの主役」の八寸、宮崎牛と天然クレソン・口コミから: 数種類の醤油で食べる sashimi、とうもろこしと shirasu の土鍋ご飯 (2026年7月)、oboro kombu で巻いた稚鮎 (2026年5月)、ディナーはシャトーブリアンに (2026年6月)、舞茸と牡蠣の春巻き、ヘレ、わらび餅と抹茶 (2026年10月のランチ)、残ったご飯は持ち帰りに・日本酒15〜20種類、大将が試飲して選ぶワイン50種類ほど、グラスワインは赤白1種ずつ (公式サイト)・通販: 季節の鱧鍋や鱧松茸鍋のセット (公式サイト)',
    neighborhood: '東心斎橋1-16-20 心斎橋ステージアビル 2F。心斎橋駅6番出口から徒歩3分',
    gf_detail: '要確認 (予約時に)。グルテンの情報なし。月替わりのおまかせは出汁が基本の日本料理で、刺身には数種類の醤油 (2026年7月)、春巻きのように小麦を使う料理もある (2026年10月)。',
    vegan_detail: 'ヴィーガンではありません。魚、鰹節の出汁、宮崎牛のおまかせ (公式サイト)。',
    notes: '[日本料理・東心斎橋、若い大将の月替わりのおまかせ] 料理人 岡﨑 直哉の日本料理店。「日本料理 翠 (現・翠 大屋)」で5年修業して二番手になり、大阪の料亭で3年半料理長を務めたのち、2023年に翠からの暖簾分けで「翠 岡﨑」として開店。2026年10月1日に翠をはずして「岡﨑」に (公式サイト)、翠の大将のすすめだったとある人 (2026年9月)。2階の落ち着いた店で、白木のカウンター10席と個室2部屋。月替わりのおまかせは、昼 (火・金・日のみ) が8品11,000円、夜が10品19,800円。二種類の昆布の出汁の椀物、炭や藁、薪の香りの焼物、主役の八寸、宮崎牛、そして2026年7月のある人がおかわりした土鍋ご飯。気さくで話しやすい大将という声が多く、焼き物はまだ伸びしろという声や、3時間ほどかかったという声 (2024年8月) も。2026年5月の口コミでは Michelin Guide の Selected Osaka 2026 に掲載。',
  });
}

// ================================================================ WAGYU王国
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27152989/'; const R = TB + 'dtlrvwlst/'; const P = TB + 'party/';
  const W = day(['11:30', '24:00']); const F = day(['11:30', '03:00']);
  put({
    id: 'osaka_wagyu_oukoku_shinsaibashi', name: 'WAGYU王国 (WAGYU Oukoku)', category: 'OMNI',
    lat: 34.671084, lng: 135.50205, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Much of the beef comes with sauce (the Omi beef sudare-yaki is grilled coated in it), and the menu has cold noodles and bibimbap; salt-grilled tongue, shrimp and scallops may be simpler, but nothing is stated.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu yakiniku restaurant; salads, namul, kimchi and lettuce are sides, and the soups are not described.',
    hours_raw: 'Mon–Thu, Sun and holidays 11:30–24:00 (last order 23:30); Fri and Sat 11:30–03:00 (last order 02:30); open all year, hours may change over New Year (Tabelog). Reservations accepted; 2-hour seating; bookings cancelled 15 minutes after the time (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), transport IC and other e-money, and QR including PayPay, Alipay and WeChat Pay (Tabelog). 66 seats at 17 tables over two floors, sofa seats; designated smoking area; free Wi-Fi; hire for 20–50 (Tabelog; October 2026 reviews). Children welcome; call ahead with a stroller (Tabelog). Menus in English, Simplified Chinese and Korean, with photos; ordering by tablet (Tabelog; 2026 reviews). Opened 1 December 2025 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: F, 5: F, 6: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinsaibashi-suji 2-2-31, between Shinsaibashi and Dotonbori — 5 min from Shinsaibashi Stn exit 6 (Midosuji Line)',
    cuisine: 'Yakiniku of Japan\'s "three great wagyu", Kobe, Matsusaka and Omi beef, hand-cut, with a display case of wagyu blocks on the first floor (Tabelog; October 2026) · courses, tax included (Tabelog): Omi beef feast course ¥9,000 (the most booked; Omi beef sudare-yaki and three cuts), Kobe beef premium course ¥20,000 (seared Kobe beef yukhoe, three Kobe cuts), banquet course of 16 dishes ¥3,800 food only or ¥5,500 with drinks; 2-hour all-you-can-drink +¥1,700 · signature: the Kobe beef "tamatebako", four cuts in a box opened in a puff of smoke (Tabelog) · à la carte (October 2026 reviews): Omi beef sudare-yaki ¥3,500–3,580, Matsusaka beef premium lean ¥2,400, Matsusaka beef premium kalbi ¥3,000, Omi beef special loin ¥2,100, special thick-cut tongue steak ¥2,100, premium salted tongue ¥1,600, premium outside skirt ¥1,600, Omi beef special outside skirt ¥2,700, horumon assortment ¥1,400, fresh omasum ¥860, seared Kobe beef yukhoe ¥1,500, Matsusaka beef sirloin sushi ¥1,500, live abalone steak ¥2,980, large shrimp ¥1,280, scallops in butter ¥1,160, stone-grilled bibimbap ¥1,100–1,200, cold noodles ¥990 · lunch "tamatebako" of Kobe, Matsusaka and Omi beef with tongue, salad, soup, rice and kimchi ¥7,500 (October 2026) · Japanese sake, highballs, wine',
    website: null, gmaps: gm('WAGYU王国 心斎橋'), menu_url: P,
    notes: "[Yakiniku · Shinsaibashi, Kobe, Matsusaka and Omi beef side by side, late] A two-floor yakiniku house opened in December 2025 between Shinsaibashi and Dotonbori, with a case of wagyu blocks on show downstairs, built around Japan's three famous brands: Kobe, Matsusaka and Omi beef. The house showpiece is a Kobe beef \"tamatebako\" box of four cuts that opens in a puff of smoke; diners in October 2026 also went for the Omi beef sudare-yaki, large cuts laid side by side and grilled coated in sauce, Matsusaka lean and kalbi, a 1 cm-thick tongue steak and wagyu sushi. Courses start at ¥9,000 (Omi beef) and lunch boxes at ¥7,500; à la carte, a pair ate well for about ¥15,600. Ordering is by tablet, menus come in English, Chinese and Korean, and on a Halloween evening the room was full of overseas visitors. Open to midnight, and to 3 am on Fridays and Saturdays. One October 2026 diner says it is produced by a former Hanshin Tigers player.",
    chef_bio: { chef_name: null, roles: ['Kitchen and operator unnamed; an October 2026 reviewer says the restaurant is produced by a former Hanshin Tigers player'], origin: null, background: 'Opened 1 December 2025 (Tabelog). Per the Tabelog shop text, it offers two of Japan\'s three great wagyu, Omi and Kobe beef; reviewers also order Matsusaka beef (October 2026). A reviewer describes meat hand-cut by skilled staff and a large display case of wagyu on the ground floor; staff keep the grill at the right heat (October 2026).', philosophy: null, specialty: 'Kobe beef tamatebako; Omi beef sudare-yaki; Matsusaka beef lean.',
      anecdotes: [
        { text: '"The Sudare-yaki was surprisingly tender despite its impressive appearance. I couldn\'t resist putting it on rice and enjoying it together." — October 2026.', source: R + 'B536924471/' },
        { text: '"On October 31st, Halloween, I made a reservation for 7:00 PM. The place was packed with many international guests!" — October 2026.', source: R + 'B538395580/' },
        { text: '"The total bill came to JPY 15,620, which was surprisingly affordable considering how much we ate." — October 2026, a pair à la carte.', source: R + 'B537823130/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員、英語版): WAGYU Oukoku (Kobe Beef wagyu House Wagyu Oukoku)、焼肉・horumon・居酒屋、心斎橋筋2-2-31、心斎橋駅6番出口から徒歩5分、月〜木・日・祝11:30〜24:00 (L.O.23:30)、金・土11:30〜翌3:00 (L.O.2:30)、年中無休、2時間制、予約時間から15分でキャンセル、カード・電子マネー・QR (PayPay、Alipay、WeChat Pay など) 可、66席 (テーブル17)、ソファ席、分煙 (喫煙スペース)、Wi-Fi、貸切20〜50名、子ども可、英語・簡体字・韓国語のメニュー、写真付き、デジタルメニュー、オープン2025年12月1日。店の説明: 日本三大和牛のうち近江牛と神戸牛、煙の演出で開ける神戸牛の「Tamatebako」(4部位)、近江牛の3種盛り、ワイン。コース (税込): 近江牛のコース9,000円、神戸牛のコース20,000円、宴会コース16品3,800円 (飲み放題付き5,500円)、飲み放題+1,700円。口コミ(2026年10月): 元 Hanshin Tigers の選手のプロデュース、1階に和牛の塊のショーケース、2階の席、タブレットで注文、近江牛の Sudare-yaki、松阪牛の上赤身と上カルビ、厚切りタンステーキ、上塩タン、ハラミ、horumon 盛り、センマイ、神戸牛の炙り Yukhoe、松阪牛の肉の sushi、活鮑のステーキ、大海老、帆立のバター焼き、石焼 bibimbap、冷麺、ランチの Tamatebako7,500円、2人で15,620円、ハロウィンの夜は海外の客でいっぱい、日本酒、ハイボール、ワイン。',
      confidence: 'medium', sources: [TB, P, R + 'B536924471/', R + 'B536998137/', R + 'B537180215/', R + 'B537236711/', R + 'B537400214/', R + 'B537821188/', R + 'B537823130/', R + 'B537929198/', R + 'B538313585/', R + 'B538395580/'] },
    cultural_comfort: { level: 'english', note: 'Menus in English, Simplified Chinese and Korean with photos; tablet ordering (Tabelog; 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-2-31',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with bookable courses; reviews dated through October 2026. Two October 2026 reviews (B537180215, B537236711) read almost alike.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目2番31号 (go) 3m. しじみラーメン shi43ya (osaka_shijimi_ramen_shi43ya, address_ja "大阪府大阪市中央区心斎橋筋2-2-31 迎賓館ビル 2F") shares the house number; whether it is the same building is not stated, and its pin is about 7 m away, so neither is stacked; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [P, R + 'B537180215/', R + 'B537823130/'],
    price_note: 'Course prices from the shop-maintained Tabelog course pages (tax included); à la carte prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omi beef feast course (sudare-yaki, three Omi beef cuts)', '¥9,000', 'Course', 'ask', 'no', 'Tabelog; the most booked course.', 'omi_course'),
      it('', '', 'Kobe beef premium course', '¥20,000', 'Course', 'ask', 'no', 'Tabelog.', 'kobe_course'),
      it('', '', 'Omi beef sudare-yaki', '¥3,580', 'Wagyu', 'ask', 'no', 'October 2026 reviews (¥3,500–3,580).', 'sudare_yaki'),
      it('', '', 'Matsusaka beef premium lean', '¥2,400', 'Wagyu', 'ask', 'no', 'October 2026 reviews.', 'matsusaka_lean'),
      it('', '', 'Special thick-cut tongue steak', '¥2,100', 'Tongue', 'ask', 'no', 'October 2026 reviews.', 'tongue_steak'),
      it('', '', 'Lunch tamatebako: Kobe, Matsusaka and Omi beef with tongue, salad, soup, rice', '¥7,500', 'Lunch', 'ask', 'no', 'October 2026 review.', 'lunch_tamatebako'),
    ] }, {
    cuisine: '日本三大和牛の神戸牛、松阪牛、近江牛の焼肉。肉は手切りで、1階には和牛の塊のショーケース (食べログ、2026年10月)・コース (税込、食べログ): 近江牛のコース9,000円 (いちばん人気、近江牛の Sudare-yaki と3種盛り)、神戸牛のコース20,000円 (神戸牛の炙り Yukhoe、神戸牛3種盛り)、宴会コース16品 料理のみ3,800円・飲み放題付き5,500円、2時間飲み放題+1,700円・名物: 煙とともに開ける神戸牛の「Tamatebako」、4部位 (食べログ)・アラカルト (2026年10月の口コミ): 近江牛の Sudare-yaki 3,500〜3,580円、松阪牛の上赤身2,400円、松阪牛の上カルビ3,000円、近江牛の特選ロース2,100円、特選厚切りタンステーキ2,100円、上塩タン1,600円、上ハラミ1,600円、近江牛の特選ハラミ2,700円、horumon 盛り1,400円、センマイ860円、神戸牛の炙り Yukhoe 1,500円、松阪牛のサーロインの肉の sushi1,500円、活鮑のステーキ2,980円、大海老1,280円、帆立のバター焼き1,160円、石焼 bibimbap 1,100〜1,200円、冷麺990円・ランチの Tamatebako (神戸牛、松阪牛、近江牛とタン、サラダ、スープ、ご飯、キムチ) 7,500円 (2026年10月)・日本酒、ハイボール、ワイン',
    neighborhood: '心斎橋筋2-2-31、心斎橋と道頓堀のあいだ。心斎橋駅6番出口 (御堂筋線) から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。多くの肉はタレで (近江牛の Sudare-yaki はタレをからめて焼く)、冷麺や bibimbap も。塩のタン、海老、帆立はシンプルかもしれないが、説明はない。',
    vegan_detail: 'ヴィーガンではありません。和牛の焼肉の店で、サラダ、ナムル、キムチ、サンチュはサイド。スープの説明はない。',
    notes: '[焼肉・心斎橋、神戸牛、松阪牛、近江牛を並べて、夜遅くまで] 2025年12月に心斎橋と道頓堀のあいだに開いた2フロアの焼肉店で、1階には和牛の塊のショーケース。日本の三大和牛、神戸牛、松阪牛、近江牛が看板。名物は煙とともに開ける神戸牛の「Tamatebako」(4部位)。2026年10月の口コミでは、大きな肉を並べてタレをからめて焼く近江牛の Sudare-yaki、松阪牛の赤身とカルビ、厚さ1cmのタンステーキ、肉の sushiが人気。コースは近江牛の9,000円から、昼の Tamatebakoは7,500円、アラカルトで2人で15,620円という人も。注文はタブレット、メニューは英語、中国語、韓国語もあり、ハロウィンの夜は海外の客でいっぱいだった。毎日夜12時まで、金・土は朝3時まで。元 Hanshin Tigers の選手のプロデュースという口コミも (2026年10月)。',
  });
}

// ================================================================ ラーメン家 みつ葉 あべの出張所
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270203/27113381/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://mitsuba-ramenya.com/';
  const H = day(['11:00', '23:00']);
  put({
    id: 'osaka_ramenya_mitsuba_abeno', name: 'ラーメン家 みつ葉 あべの出張所 (Ramenya Mitsuba Abeno shucchousho)', category: 'OMNI',
    lat: 34.645066, lng: 135.513639, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: house-made wheat noodles of 100% domestic flour, and the shoyu tare blends four soy sauces (official site).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the broth is pork and chicken bones, the shio tare uses scallop, and the bowls carry chashu and egg (official site).',
    hours_raw: 'Daily 11:00–23:00 (last order 22:30, September 2026 review); irregular closures (official site; Tabelog). A counter in the Hoop Dining Court food hall: order at a touch-panel ticket machine that sends the order to the kitchen, then take a tray to any seat in the shared hall and return your dishes (2026 reviews). A line of about six on one September 2026 visit; no wait after 22:00 (August 2026). Cash, cards, QR and e-money including QUICPay now accepted; it was cash-only before (September and October 2026 reviews). Food-hall seating shared with other stalls (Tabelog lists 400 seats). Opened 13 September 2019 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Abenosuji 1-2-30, あべのHoop B1F food hall — a short walk from Kintetsu Osaka-Abenobashi Stn; reachable under cover from Tennoji Stn through Harukas (December 2025)',
    cuisine: 'Foam-topped paitan ramen from Mitsuba of Tomio, Nara (founded 2011): a broth of domestic pork and chicken bones boiled about 8 hours on a high flame and stirred every 3–5 minutes, served frothed (official site; 2026 reviews) · shio ramen ¥1,100, large ¥1,250, special ¥1,500; shoyu ramen, special ¥1,500; chashu ramen, large ¥1,650 (2026 reviews) · shoyu tare of four soy sauces; shio tare of six salts with plenty of scallop and kombu (official site) · house noodles of 100% domestic wheat at 48% hydration, made daily at the main shop, chewy (official site), medium-thick (2026 reviews) · chashu seared hot then slow-cooked in the oven and hand-cut daily, served rare; menma desalted for a week and lightly seasoned; ajitama of 京たまご eggs (official site) · limited tsukemen, including a "Tsukemen Dive" and a Sichuan tsukemen, up to four servings (2025–2026) · rice ¥290 (September 2026)',
    website: SITE, gmaps: gm('ラーメン家 みつ葉 あべの出張所'), menu_url: SITE + 'menu/',
    notes: "[Ramen · Abeno, Nara's foam paitan in a food hall] The Abeno outpost of Mitsuba, the Nara ramen shop that opened in Tomio in 2011 and placed second nationally in the 2015 Tabelog Ramen Award (official site), here as a counter in the Hoop basement food hall, so you skip the Nara queue. The broth is pork and chicken bones boiled for eight hours and whipped to a foam that one diner compared to a bisque; it is rich and creamy, with a sharp saltiness and black pepper in the shio. Choose shio (six salts, scallop and kombu) or shoyu (four soy sauces), ¥1,100; chewy medium-thick house noodles, a thick slab of rare chashu and a long menma come on top. One regular swears by the chashu ramen and finds it the right finish after a night out. Some October 2026 diners found it monotonous or the chashu underwhelming. Buy at the touch-panel machine, take a tray, sit anywhere in the hall.",
    chef_bio: { chef_name: null, roles: ['Branch staff unnamed; part of ラーメン家 みつ葉 (official site)'], origin: 'Tomio, Nara (the parent shop, official site).', background: 'Per the official site: ラーメン家 みつ葉 opened in Tomio, Nara, in 2011; the second shop, みつ葉 the second, at Horyuji in 2017; this あべの出張所 in Abeno Hoop in 2019; かどま出張所 at LaLaport Kadoma and a ミ・ナーラ出張所 in Nara in 2023. Awards listed on the site: the 2013 rookie grand prix of the magazine 究極のラーメン, 2nd nationwide in the 2015 Tabelog Ramen Award, 15th in 2016. Tabelog opening day 13 September 2019. Reviewers in September 2026 note a switch from cash only to a touch-panel machine with cashless payment.', philosophy: '"The best bowl": boiling-hot soup poured into a heated bowl, chewy house noodles and toppings that take time and care (official site).', specialty: 'Foam-topped pork-and-chicken paitan, shio or shoyu; chashu ramen.',
      anecdotes: [
        { text: '"The espuma-style broth was almost like a bisque. It had depth without being heavy, so I finished it all." — May 2024, shio ramen.', source: R + 'B484520773/' },
        { text: '"The chicken and pork broth was delicious, with a sharp saltiness and black pepper that complemented the rich, creamy soup." — August 2026, special shio ramen.', source: R + 'B533886065/' },
        { text: '"The rich, thick broth clings perfectly to the noodles and is delicious. Even though the flavor is strong, I ended up drinking every last drop of the soup." — July 2026.', source: R + 'B519164019/' },
      ],
      japanese_sources_summary: '公式サイト: ラーメン家 みつ葉、奈良県奈良市富雄元町、泡系、豚骨塩ラーメン、醤油ラーメン、白湯スープ、2011年 奈良の富雄にて創業、2017年 法隆寺に みつ葉 the second、2019年 あべのHoopに みつ葉 あべの出張所、2023年 ららぽーと門真に かどま出張所、ミ・ナーラ出張所。あべの出張所: 阿倍野筋1丁目2-30 B1 Hoop、11時00分〜23時00分、不定休。こだわり: 国産のガラを強火で約8時間、3〜5分おきに撹拌して鶏と豚の旨味を引き出したスープ、国産小麦100%の自家製麺 (加水率48%の多加水麺、もっちり)、醤油は4種類の醤油のブレンド、塩は6種類の塩に貝柱と昆布、チャーシューは表面を高温で焼き内側はオーブンで低温調理、毎日手切り、国産の奴ネギ、短冊メンマを一週間かけて塩抜き、京たまごの味玉。受賞歴: 2013年 雑誌『究極のラーメン』新人賞グランプリ、2015年 食べログ ラーメンアワード ラーメン部門 全国第2位、2016年 全国第15位。メニュー (本店): 豚CHIKIしおラーメン・しょうゆラーメン1,100円、チャーシューメン1,300円。食べログ: Ramenya Mitsuba Abeno shucchousho、あべのHoop B1F、毎日11:00〜23:00、400席 (フードコート)、オープン2019年9月13日。口コミ(2024年5月〜2026年10月): 泡のスープ (エスプーマ、ビスクのよう)、濃厚でクリーミー、鶏と豚、塩はキレのある塩気と黒胡椒、中太の麺、もちもち、レアのチャーシュー、長いメンマ、味玉、塩ラーメン1,100円、大盛り1,250円、スペシャル1,500円、チャーシュー麺大盛り1,650円、ご飯290円、限定の tsukemen、券売機はタッチパネルに、キャッシュレス可、6人ほどの行列 (2026年9月)、単調、チャーシューが物足りないという声も。',
      confidence: 'medium', sources: [TB, SITE, SITE + 'about/', SITE + 'menu/', SITE + 'store-information/', R + 'B454428226/', R + 'B467399897/', R + 'B484520773/', R + 'B494448179/', R + 'B519164019/', R + 'B524941356/', R + 'B533886065/', R + 'B534309217/', R + 'B535088000/', R + 'B535701938/', R + 'B537067826/', R + 'B537567801/', R + 'B538073198/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Touch-panel ticket machine and self-service tray in a food hall (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市阿倍野区阿倍野筋1-2-30 あべのHoop B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site lists the Abeno shop with hours; reviews dated through October 2026 (Tabelog listing not shop-maintained).' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市阿倍野区阿倍野筋一丁目2番30号 (go) 46m (large building). Same food hall as 人類みな辛さがすべて (osaka_jinrui_mina_karasa_ga_subete_abeno_hoop, address_ja "大阪府大阪市阿倍野区阿倍野筋1-2-30 HOOP B1F フードホール") and 麺処 富士山次郎 (osaka_mendokoro_fujiyama_jirou_abeno_hoop), pinned about 6 and 15 m away, so none is stacked; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534309217/', R + 'B454428226/', R + 'B524941356/', R + 'B494448179/'],
    price_note: 'Prices from 2026 reviews of this branch; the official menu shows the Nara main shop.', last_checked: TODAY, items: [
      it('', '', 'Shio ramen', '¥1,100', 'Ramen', 'no', 'no', 'August and October 2026; large ¥1,250 (September 2026).', 'shio_ramen'),
      it('しょうゆラーメンスペシャル', '', 'Shoyu ramen special', '¥1,500', 'Ramen', 'no', 'no', 'September 2026.', 'shoyu_special'),
      it('', '', 'Chashu ramen, large (shoyu)', '¥1,650', 'Ramen', 'no', 'no', 'May 2026.', 'chashu_ramen_large'),
      it('', '', 'Limited tsukemen', '', 'Tsukemen', 'no', 'no', '2025–2026 reviews; up to four servings.', 'tsukemen'),
    ] }, {
    cuisine: '奈良・富雄の「みつ葉」(2011年創業) の泡系の白湯ラーメン: 国産の豚と鶏のガラを強火で約8時間、3〜5分おきに撹拌して炊き、泡立てて出す (公式サイト、2026年の口コミ)・塩ラーメン1,100円、大盛り1,250円、スペシャル1,500円、しょうゆラーメンスペシャル1,500円、チャーシュー麺の大盛り (醤油) 1,650円 (2026年の口コミ)・醤油は4種類の醤油のブレンド、塩は6種類の塩に貝柱と昆布たっぷり (公式サイト)・国産小麦100%、加水率48%の自家製麺 (本店で毎日製麺) でもっちり (公式サイト)、中太 (2026年の口コミ)・チャーシューは表面を高温で焼いてからオーブンで低温調理し毎日手切り、レアで。メンマは一週間かけて塩抜きし薄味に、味玉は京たまご (公式サイト)・限定の tsukemen、「Tsukemen Dive」や四川の tsukemen、4玉まで (2025〜2026年)・ご飯290円 (2026年9月)',
    neighborhood: '阿倍野筋1-2-30 あべのHoop B1F のフードホール。近鉄大阪阿部野橋駅からすぐ、天王寺駅からハルカスを抜けて外に出ずに行ける (2025年12月)',
    gf_detail: 'グルテンフリーではありません。国産小麦100%の自家製麺で、醤油だれは4種類の醤油のブレンド (公式サイト)。',
    vegan_detail: 'ヴィーガンではありません。スープは豚と鶏のガラ、塩だれに貝柱、チャーシューと卵がのる (公式サイト)。',
    notes: '[ラーメン・阿倍野、奈良の泡系白湯をフードホールで] 2011年に奈良の富雄で開き、2015年の食べログ ラーメンアワードで全国2位になった「みつ葉」(公式サイト) のあべの出張所。Hoop の地下のフードホールのカウンターで、奈良の行列に並ばずに食べられる。豚と鶏のガラを8時間炊いて泡立てたスープは、ビスクのようという声も。濃厚でクリーミー、塩はキレのある塩気と黒胡椒。塩 (6種類の塩、貝柱、昆布) か醤油 (4種類の醤油) で1,100円、もちもちの中太の自家製麺に厚いレアのチャーシューと長いメンマ。ある常連のおすすめはチャーシュー麺で、飲んだあとの締めにちょうどいいと。2026年10月には単調、チャーシューが物足りないという声も。タッチパネルの券売機で買い、トレーを持ってホールの好きな席へ。',
  });
}

save();
