// Osaka sweep (2-mile circle around Dotonbori), REST phase; worker osw1 (lane: Tabelog id mod 4 = 0), batch 22.
//   + 明陽軒 Meiyo Ken (sea-urchin shabu-shabu and sukiyaki in private rooms over the Dotonbori river, since 1928)
//   + 串カツ居酒屋 風太 Kushi Katsu Izakaya Futa (owner-run kushikatsu izakaya full of cats, Nishi-Shinsaibashi, 2019)
//   + 寿司としゃぶしゃぶ･すき焼き食べ放題 HOT POT LAB 心斎橋難波店 (all-you-can-eat sushi and two-broth hot pot, 2026)
//   + 久壷庵 Shabushabu Kyukoan (Kobe beef shabu-shabu above its sister steakhouse Oxon)
//   - skip(): 海底撈火鍋 難波店 (chain), uzu (no reviews).
//   Lane: `queue.mjs osaka next rest 600`, mod-4 = 0, in order: 27157996 六美麻辣湯 and 27158476 よいもど (still undecided),
//   27000376 +, 27153952 skip, 27111744 +, 27071860 skip, 27155888 +, 27098560 パイレーツオブオオサカ left undecided (a
//   private-charter BBQ cruise boarding at Rose Port in Nakanoshima Park; the Dotonbori address is not where you eat, so a pin
//   there would mislead — for the coordinator to decide), 27016192 +.
//   Chain check for the four kept: 明陽軒, 風太 and 久壷庵 are each the only shop of the name in shops.jsonl; HOT POT LAB has
//   two shops (this and a 難波店 on gnavi). 久壷庵's sister steakhouse Oxon (osaka_steak_wine_oxon_nishishinsaibashi) is in data;
//   a different format. None of the four is in data.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw1-22');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27153952', 'Chain: 海底撈火鍋 (Haidilao), an international hot-pot chain; another Japanese branch in Ueno, Tokyo (13260566) is in shops.jsonl.');
skip('27071860', 'No Tabelog reviews; nothing to source a dining record from.');

// ================================================================ 明陽軒
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27000376/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'osaka_meiyoken_soemoncho', name: '明陽軒 (Meiyo Ken)', category: 'OMNI',
    lat: 34.669334, lng: 135.503456, cuisine_type: 'sukiyaki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Courses include tempura, a white sauce and a sukiyaki in a secret sauce; the uni broth is made with soy milk.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sea-urchin and seafood shabu-shabu and beef sukiyaki.',
    hours_raw: 'Mon–Sat 17:00–22:00 (last order 21:30); closed Sunday (Tabelog). Reservations accepted; at most two course types per group (Tabelog); hard to book at busy times (March 2024). Service charge 15% (Tabelog). Cards; no e-money or QR (Tabelog). 35 seats: a counter and private rooms for 2–18, tatami and sunken seating, some with windows over the Dotonbori river (Tabelog; March 2024, November 2025, August 2026). Non-smoking (Tabelog). Founded in 1928 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Soemoncho 4-4, on the Dotonbori river — 5 min from Nippombashi Stn exit 2, 7 min from Namba and Shinsaibashi',
    cuisine: 'Long-established Japanese restaurant of Soemoncho, founded 1928 (Tabelog) · signature uni shabu-shabu: seafood such as red snapper and swordfish dipped in a rich sea-urchin broth blended with soy milk, finished as uni rice porridge (Tabelog; 2023–2026 reviews) · seafood uni shabu-shabu course ¥8,855 (Tabelog); a ¥10,000 course with three appetizers, tempura with mountain vegetables, uni shabu-shabu, porridge and dessert came to ¥11,000 a head in March 2025 · sukiyaki in a secret sauce, cooked at the table in an 18-karat gold pot by kimono-clad staff (Tabelog; March 2024) · grilled seasonal fish, vichyssoise, conger eel tempura, fried cod milt, seafood in white sauce, cheese pudding (2023–2024 reviews) · sake from the 350-year-old Imanishi brewery, and mizore-zake (Tabelog; May 2024)',
    website: null, gmaps: gm('明陽軒 宗右衛門町'), menu_url: null,
    notes: "[Sukiyaki and shabu-shabu · Soemoncho, uni shabu by the river] A Soemoncho restaurant founded in 1928, with a calm, old-inn feel and private rooms whose windows look over the Dotonbori river and its passing boats. The dish to come for is uni shabu-shabu: seafood swished through a sea-urchin broth made creamy with soy milk, ending in an uni rice porridge diners rave about. The seafood uni shabu course is ¥8,855 on Tabelog; a ¥10,000 course with tempura came to ¥11,000 a head in March 2025, and Tabelog lists a 15% service charge. Sukiyaki is cooked at the table in a gold pot. Book ahead; closed Sundays.",
    chef_bio: { chef_name: null, roles: ['Kitchen and kimono-clad room staff (unnamed)'], origin: null, background: 'Shop-maintained Tabelog listing: established in 1928, a long-standing Japanese restaurant in Soemoncho; signature uni shabu with fresh seafood in a special uni broth; sukiyaki with a secret sauce in a custom 18-karat gold pot; private rooms except the counter; sake from the Imanishi brewery.', philosophy: null, specialty: 'Uni shabu-shabu; sukiyaki in a gold pot.',
      anecdotes: [
        { text: '"The sea urchin shabu-shabu is blended with soy milk, resulting in a creamy yet rich flavor, and it doesn’t feel heavy even with the final rice porridge." — November 2023.', source: R + 'B475362478/' },
        { text: '"We had a riverside view with charming private rooms where boats passed by frequently. It truly felt like Osaka!" — November 2025.', source: R + 'B517453326/' },
        { text: '"The course price was reasonable. 11,000 JPY per person." — March 2025, the ¥10,000 course.', source: R + 'B502959268/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 明陽軒、しゃぶしゃぶ・すき焼き、大阪市中央区宗右衛門町4-4、なんば駅14番出口・心斎橋駅6番出口から徒歩7分、日本橋駅2番出口から5分、月〜土17:00〜22:00 (L.O.21:30)、日曜休み、予約可 (コースは1組2種まで)、サービス料15%、カード可、電子マネー・QR 不可、35席、2〜18名の個室、座敷、掘りごたつ、禁煙。店の紹介 (英訳): 1928年創業の宗右衛門町の老舗の日本料理、名物のうにしゃぶ (毎日仕入れる魚介を特製のうにのだしで)、秘伝のたれのすき焼きを18金の特注の鍋で、カウンター以外は個室、Imanishi 酒造の日本酒、海鮮うにしゃぶのコース8,855円。口コミ(2023年11月〜2026年8月): 豆乳を合わせたうにのだし、鯛やめかじき、うに雑炊、10,000円のコースは1人11,000円 (2025年3月、先付3種、山菜の天ぷら)、着物の女性が焼くすき焼き、季節の焼き魚、ビシソワーズ、穴子の天ぷら、たらの白子の揚げ物、魚介のクリーム煮、チーズプリン、みぞれ酒、道頓堀川と船の見える個室、予約が取りにくい。',
      confidence: 'medium', sources: [TB, R + 'B475362478/', R + 'B478232327/', R + 'B482044762/', R + 'B486530775/', R + 'B488048209/', R + 'B502959268/', R + 'B505449818/', R + 'B517453326/', R + 'B530222468/', R + 'B534068758/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Course dining in private rooms with staff serving; no English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区宗右衛門町4-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区宗右衛門町4番4号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B502959268/'],
    price_note: 'Course price from the Tabelog listing and a March 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Seafood uni shabu-shabu course', '¥8,855', 'Courses', 'ask', 'no', 'Tabelog listing.', 'uni_shabu_course'),
      it('', '', 'Course with tempura and uni shabu-shabu', '¥10,000', 'Courses', 'ask', 'no', 'March 2025 review (¥11,000 a head with charges).', 'course_10000'),
      it('', '', 'Sukiyaki in a gold pot', '', 'Sukiyaki', 'ask', 'no', 'Tabelog; March 2024.', 'sukiyaki'),
    ] }, {
    cuisine: '1928年創業の宗右衛門町の老舗の日本料理 (食べログ)・名物のうにしゃぶ: 鯛やめかじきなどの魚介を、豆乳を合わせた濃厚なうにのだしにくぐらせ、締めはうに雑炊 (食べログ、2023〜2026年の口コミ)・海鮮うにしゃぶのコース8,855円 (食べログ)。先付3種、山菜の天ぷら、うにしゃぶ、雑炊、デザートの10,000円のコースは2025年3月に1人11,000円・秘伝のたれのすき焼きを、着物の店の人がテーブルで18金の鍋で (食べログ、2024年3月)・季節の焼き魚、ビシソワーズ、穴子の天ぷら、たらの白子の揚げ物、魚介のクリーム煮、チーズプリン (2023〜2024年の口コミ)・創業350年の Imanishi 酒造の日本酒、みぞれ酒 (食べログ、2024年5月)',
    neighborhood: '宗右衛門町4-4、道頓堀川沿い。日本橋駅2番出口から5分、なんば・心斎橋から7分',
    gf_detail: '要確認。グルテンの情報なし。コースには天ぷら、クリーム煮、秘伝のたれのすき焼きがあり、うにのだしには豆乳を使う。',
    vegan_detail: 'ヴィーガンではありません。うにと魚介のしゃぶしゃぶと牛のすき焼き。',
    notes: '[すき焼き・しゃぶしゃぶ・宗右衛門町、川沿いのうにしゃぶ] 1928年創業の宗右衛門町の店で、古い旅館のような落ち着きがあり、個室の窓からは道頓堀川と行き交う船が見える。目当てはうにしゃぶで、豆乳でまろやかにしたうにのだしに魚介をくぐらせ、締めのうに雑炊が絶品という声が多い。食べログの海鮮うにしゃぶのコースは8,855円、2025年3月には天ぷらつきの10,000円のコースが1人11,000円に。食べログではサービス料15%。すき焼きはテーブルで金の鍋で。予約がおすすめで、日曜休み。',
  });
}

// ================================================================ 串カツ居酒屋 風太
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27111744/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kushikatsu-futa.com';
  const H = day(['18:00', '23:00']);
  put({
    id: 'osaka_kushikatsu_futa_nishishinsaibashi', name: '串カツ居酒屋 風太 (Kushi Katsu Izakaya Futa)', category: 'OMNI',
    lat: 34.669484, lng: 135.49969, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: kushikatsu is battered and fried.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat and seafood kushikatsu.',
    hours_raw: 'Mon–Sat and holidays 18:00–23:00 (last order 22:30); closed Sunday, but open on Sundays of long weekends; other irregular closures (Tabelog). Reservations accepted (Tabelog). Starter ¥330 (Tabelog). Cards and PayPay; no e-money (Tabelog). 22 seats: 6 at the counter and 16 at tables, with sunken seating; shoes off at the entrance (Tabelog; June 2026). Smoking allowed (Tabelog). Opened 5 March 2019 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishi-Shinsaibashi 2-4-8, 大㐂ビル 5F — 3 min from Namba Stn',
    cuisine: 'Kushikatsu izakaya: light, crisp skewers with a mildly sweet sauce; assorted platters; unusual skewers such as a paw-shaped kushikatsu, mitarashi dango and pudding as dessert skewers (2019–2026 reviews) · the "Nyan-yakko" cold tofu stamped with a cat, part of each order going to a cat-rescue group (March 2023, July 2025) · Japanese dishes and drinks (Tabelog)',
    website: SITE, gmaps: gm('串カツ居酒屋 風太 西心斎橋'), menu_url: null,
    notes: "[Kushikatsu · Nishi-Shinsaibashi, a cat lover's skewer bar] A small kushikatsu izakaya on the fifth floor of a building three minutes from Namba, run by a cat-loving owner and filled with cat figurines and plush toys. Shoes come off at the door, and you sit at a sunken counter or tables. The skewers are light and not greasy, with a gently sweet sauce; beyond the classics there are novelties like a paw-shaped kushikatsu, mitarashi dango and pudding. Order the Nyan-yakko, cold tofu stamped with a cat, which helps a cat-rescue group. Easy for solo diners. Smoking allowed; closed Sundays.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), described as a cat lover who runs the shop (July 2025, February 2026 reviews)'], origin: null, background: 'Tabelog: kushiage, izakaya and Japanese cuisine on 5F of the 大㐂ビル, opened 5 March 2019; website kushikatsu-futa.com. Reviews: "a kushi katsu izakaya run by a cat-loving owner" (July 2025); a friendly owner (June 2019); cat goods throughout.', philosophy: null, specialty: 'Kushikatsu; Nyan-yakko.',
      anecdotes: [
        { text: '"This is a kushi katsu izakaya run by a cat-loving owner. It\'s affordable and delicious, and for cat lovers, it\'s a paradise filled with cat-themed merchandise." — July 2025.', source: R + 'B480392713/' },
        { text: '"The beloved \'nyanyakko\' dish allows you to contribute to a cat rescue organization with each bite" — March 2023.', source: R + 'B462612544/' },
        { text: '"Upon entering, I took off my shoes as is customary. The seating was at a counter that resembled a sunken kotatsu." — June 2026.', source: R + 'B530735623/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 串カツ居酒屋 風太、串揚げ・居酒屋・日本料理、大阪市中央区西心斎橋2-4-8 大㐂ビル 5F、なんば駅から徒歩3分、月〜土・祝18:00〜23:00 (L.O.22:30)、日曜休み (連休の日曜は営業)、不定休、予約可、お突き出し330円、カード・PayPay 可、電子マネー不可、22席 (カウンター6、テーブル16)、喫煙可、2019年3月5日オープン。口コミ(2019年6月〜2026年6月): 猫好きの店主がやっている串カツの居酒屋、猫のグッズやぬいぐるみ、靴を脱いで上がる、掘りごたつのカウンター、油っぽくない軽い衣、甘めのソース、串カツの盛り合わせ、肉球の形の串カツ、みたらし団子の串カツ、デザートのプリンの串、猫の焼き印の「にゃんやっこ」(猫の保護団体への寄付になる)、ひとりでも入りやすい。',
      confidence: 'medium', sources: [TB, SITE, R + 'B416431140/', R + 'B418863381/', R + 'B462612544/', R + 'B477351920/', R + 'B480392713/', R + 'B522151756/', R + 'B530735623/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small owner-run counter; no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_approx: 'block', address_ja: '大阪府大阪市中央区西心斎橋2-4-8 大㐂ビル 5F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and website; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋二丁目4番8号 (go) 7m. Same building as HOT POT LAB 心斎橋難波店 (osaka_hot_pot_lab_shinsaibashi_namba, this batch, 2F; Tabelog points 10 m apart), so both pins are block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B462612544/', R + 'B480392713/'],
    price_note: 'No dated prices in the sources read; starter charge ¥330 (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Assorted kushikatsu', '', 'Kushikatsu', 'no', 'no', 'March 2023 review.', 'kushi_moriawase'),
      it('', '', 'Nyan-yakko (cat-stamped cold tofu)', '', 'Small dishes', 'ask', 'ask', 'March 2023 and July 2025 reviews.', 'nyanyakko'),
      it('', '', 'Mitarashi dango kushikatsu', '', 'Kushikatsu', 'no', 'no', 'December 2023 review.', 'mitarashi_kushi'),
    ] }, {
    cuisine: '串カツの居酒屋: 油っぽくない軽い衣と甘めのソース、盛り合わせ、肉球の形の串カツ、みたらし団子、デザートのプリンの串などの変わり種 (2019〜2026年の口コミ)・猫の焼き印の冷奴「にゃんやっこ」は猫の保護団体への寄付になる (2023年3月、2025年7月)・日本料理と飲み物 (食べログ)',
    neighborhood: '西心斎橋2-4-8、大㐂ビル5階。なんば駅から3分',
    gf_detail: 'グルテンフリーではありません。串カツは衣の揚げ物。',
    vegan_detail: 'ヴィーガンではありません。肉と魚介の串カツ。',
    notes: '[串カツ・西心斎橋、猫好きの串カツの店] なんばから3分のビルの5階の小さな串カツの居酒屋で、猫好きの店主がやっていて、店じゅうに猫の置物やぬいぐるみ。入口で靴を脱ぎ、掘りごたつのカウンターかテーブルへ。串は軽く油っぽくなく、ソースはやさしい甘さ。定番のほかに肉球の形の串カツ、みたらし団子、プリンなどの変わり種も。猫の焼き印の冷奴「にゃんやっこ」は猫の保護団体の支援になる。ひとりでも入りやすい。喫煙可、日曜休み。',
  });
}

// ================================================================ HOT POT LAB 心斎橋難波店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27155888/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '24:00']);
  put({
    id: 'osaka_hot_pot_lab_shinsaibashi_namba', name: '寿司としゃぶしゃぶ･すき焼き食べ放題 HOT POT LAB 心斎橋難波店', category: 'OMNI',
    lat: 34.669574, lng: 135.499701, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Ten broths and thirty sauces and condiments are offered; Tabelog lists vegetarian options.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and there is a vegetable buffet, but the broths include chicken, sukiyaki and other stocks.',
    hours_raw: 'Daily 12:00–24:00 (last orders 23:00 food, 23:30 drinks) (Tabelog). Reservations accepted; a two-hour limit when busy; seat requests best made by phone (Tabelog). Cards (VISA, Master, JCB, Diners); no e-money or QR (Tabelog). 49 seats, sofas, private rooms for 2 and for 10–20; non-smoking; wheelchair accessible (Tabelog). Children under primary-school age half price, preschoolers free (Tabelog). No cash register; online booking discount (October 2026). Opened 10 June 2026 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishi-Shinsaibashi 2-4-8, 大㐂ビル 2F — 2 min from Namba Stn exit 25',
    cuisine: 'All-you-can-eat sushi with shabu-shabu or sukiyaki in a stylish room: pick two of ten broths (chicken salt, sukiyaki, spicy mala, kombu, chicken paitan, sesame soy milk …), mix ten house sauces and thirty condiments, with a vegetable buffet in every course (Tabelog; October 2026) · courses ¥5,500, ¥6,000 and ¥7,000 after online discounts (from ¥6,000–7,500) (Tabelog); a 73-item sushi and shabu-shabu/sukiyaki course ¥7,000 (regular ¥8,000) with all-you-can-drink +¥1,500 (October 2026); a ¥6,000 lunch (October 2026) · sushi such as ikura gunkan and medium-fatty tuna; a crab hot pot course (October 2026)',
    website: null, gmaps: gm('HOT POT LAB 心斎橋難波店'), menu_url: null,
    notes: "[Hot pot · Nishi-Shinsaibashi, all-you-can-eat sushi and shabu-shabu] A new (June 2026) all-you-can-eat on the second floor of a building two minutes from Namba exit 25, unusually smart for the genre, with sofa seats and no cash register. Pick two of ten broths, from chicken salt to spicy mala or sesame soy milk, build sauces from a counter of thirty condiments, and eat as much shabu-shabu, sukiyaki and sushi as you like, with a vegetable buffet. Courses run ¥5,500–7,000 with online discounts; drinks are ¥1,500 more. Every October 2026 reviewer was positive and praised the sushi, but all ten reviews come from one month just after opening.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'Shop-maintained Tabelog listing: luxurious all-you-can-eat in a refined modern Japanese space; sushi and meat of quality beyond all-you-can-eat expectations; two of ten broths, ten homemade sauces and thirty condiments; vegetable buffet in all courses; opened 10 June 2026. A second HOT POT LAB, 難波店, is on gnavi.', philosophy: null, specialty: 'Two-broth hot pot with all-you-can-eat sushi.',
      anecdotes: [
        { text: '"The quality of the sushi was surprisingly high for an all-you-can-eat place." — October 2026.', source: R + 'B537506231/' },
        { text: '"I was particularly surprised by the innovative concept of having no cash register!" — October 2026.', source: R + 'B538097642/' },
        { text: '"For the hot pot, you can choose 2 out of 10 different broths" — October 2026, the ¥7,000 course with an online discount.', source: R + 'B537508633/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 寿司としゃぶしゃぶ･すき焼き食べ放題 HOT POT LAB 心斎橋難波店、しゃぶしゃぶ・すき焼き・寿司、大阪市中央区西心斎橋2-4-8 大㐂ビル 2F、なんば駅25番出口から徒歩2分、毎日12:00〜24:00 (料理L.O.23:00、ドリンクL.O.23:30)、予約可 (混雑時は2時間制)、カード可、電子マネー・QR 不可、49席、個室、禁煙、車いす可、ベジタリアンメニューあり、子どもは半額・未就学児は無料、2026年6月10日オープン、コースはネット予約で5,500円、6,000円、7,000円。店の紹介 (英訳): 食べ放題のイメージを変えるおしゃれな和の空間、こだわりの寿司と肉、10種のだしから2つ、自家製のたれ10種と薬味30種、全コースに野菜のビュッフェ。口コミ(2026年10月): 鶏塩、すき焼き、麻辣、昆布、鶏白湯、ごま豆乳などのだし、いくらの軍艦や中トロの寿司、73品の食べ放題7,000円 (通常8,000円)、飲み放題1,500円、昼の6,000円のコース、かに鍋のコース、レジがない。',
      confidence: 'low', sources: [TB, R + 'B537506231/', R + 'B537508578/', R + 'B537508633/', R + 'B537754757/', R + 'B537799886/', R + 'B538032122/', R + 'B538097642/', R + 'B538133858/', R + 'B538335291/', R + 'B538494635/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Course ordering and self-service sauce bar; no English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市中央区西心斎橋2-4-8 大㐂ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; opened June 2026; reviews all from October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋二丁目4番8号 (go) 17m. Same building as 串カツ居酒屋 風太 (osaka_kushikatsu_futa_nishishinsaibashi, this batch, 5F; Tabelog points 10 m apart), so both pins are block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B537508633/'],
    price_note: 'Course prices from the Tabelog listing (online discounts) and an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'All-you-can-eat course (online price, from)', '¥5,500', 'Courses', 'ask', 'ask', 'Tabelog listing.', 'tabehodai_5500'),
      it('', '', 'Sushi and shabu-shabu/sukiyaki all-you-can-eat (73 items)', '¥7,000', 'Courses', 'ask', 'no', 'October 2026 review (regular ¥8,000).', 'tabehodai_73'),
      it('', '', 'All-you-can-drink (with a course)', '¥1,500', 'Drinks', 'ask', 'ask', 'October 2026 review.', 'nomihodai'),
    ] }, {
    cuisine: 'おしゃれな店で寿司としゃぶしゃぶかすき焼きの食べ放題: 10種のだし (鶏塩、すき焼き、麻辣、昆布、鶏白湯、ごま豆乳など) から2つを選び、自家製のたれ10種と薬味30種で合わせ、全コースに野菜のビュッフェ (食べログ、2026年10月)・コースはネット予約の割引で5,500円、6,000円、7,000円 (通常6,000〜7,500円) (食べログ)。寿司としゃぶしゃぶ・すき焼きの73品の食べ放題7,000円 (通常8,000円)、飲み放題は1,500円追加 (2026年10月)。昼の6,000円のコース (2026年10月)・いくらの軍艦や中トロの寿司、かに鍋のコース (2026年10月)',
    neighborhood: '西心斎橋2-4-8、大㐂ビル2階。なんば駅25番出口から2分',
    gf_detail: '要確認。グルテンの情報なし。だしは10種、たれと薬味は30種あり、食べログにはベジタリアンメニューありとある。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあり野菜のビュッフェもあるが、だしには鶏やすき焼きなどがある。',
    notes: '[鍋・西心斎橋、寿司としゃぶしゃぶの食べ放題] 2026年6月にできた、なんば駅25番出口から2分のビルの2階の食べ放題の店で、食べ放題らしくないおしゃれな店にはソファー席があり、レジもない。10種のだしから2つ (鶏塩から麻辣、ごま豆乳まで) を選び、30種の薬味でたれを作って、しゃぶしゃぶ、すき焼き、寿司を好きなだけ。野菜はビュッフェ。コースはネット予約の割引で5,500〜7,000円、飲み放題は1,500円追加。2026年10月の口コミはどれも好評で寿司の評価が高いが、10件すべてがオープン直後の同じ月のもの。',
  });
}

// ================================================================ 久壷庵
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27016192/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.oxon.jp/kyuukoan/index.html';
  const H = day(['17:00', '22:00']);
  put({
    id: 'osaka_shabushabu_kyukoan', name: '久壷庵 (Shabushabu Kyukoan)', category: 'OMNI',
    lat: 34.669903, lng: 135.499811, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Shabu-shabu comes with ponzu and sesame sauce; the vegetables include nama-fu (wheat gluten).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Kobe beef shabu-shabu.',
    hours_raw: 'Mon–Sat and the days around holidays 17:00–22:00; closed Sundays and holidays; New Year closure (Tabelog). Reservations accepted; call for groups over 12 (Tabelog). Service charge 10%; private rooms ¥6,050 per group (Tabelog). Cards; no e-money or QR (Tabelog). 28 seats: an L-shaped counter, tatami and sunken-seat private rooms for 6–20, a tea room at the back (Tabelog; July 2018, March 2026). Designated smoking area (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishi-Shinsaibashi 2-3-9, オクソンビル 2F, just west of Midosuji — 3 min from Namba Stn',
    cuisine: 'Long-established high-end shabu-shabu and Japanese cuisine above Steak & Wine Oxon, which has the same owner (March 2026) · simple shabu-shabu course ¥11,000: seasonal starters, then shabu-shabu of Kobe beef sirloin from a heifer with rare vegetables, real shiitake, Yoshino kuzu, nama-fu and yuba, ponzu and a rich sesame sauce, rice porridge and dessert (March 2026) · kombu broth, wagyu and Kobe beef shabu-shabu courses, pork shabu-shabu (2018–2019 reviews)',
    website: SITE, gmaps: gm('久壷庵 しゃぶしゃぶ 西心斎橋'), menu_url: null,
    notes: "[Shabu-shabu · Nishi-Shinsaibashi, Kobe beef above the steakhouse] A long-established, quietly luxurious shabu-shabu room on the second floor of the Oxon building just west of Midosuji, above the steakhouse that shares its owner. Sit at the L-shaped counter, with fine hina dolls on the back shelf in March, or book a tatami room. The ¥11,000 shabu-shabu course in March 2026 ran from seasonal starters to Kobe heifer sirloin with uncommon vegetables, Yoshino kuzu, nama-fu and yuba, ponzu and sesame sauce, and rice porridge. Most reviews date from 2018–2019, with one in 2026; expect 10% service and a room charge for private rooms. Closed Sundays and holidays.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; also runs Steak & Wine Oxon) and kitchen staff'], origin: null, background: 'Tabelog: shabu-shabu and Japanese cuisine on 2F of the Oxon building. Reviews: on the second floor of the Oxon Group, known for high-end steak (April 2019); above Steak & Wine Oxon, managed by the same owner (March 2026); a long-established high-end shabu-shabu restaurant (March 2026). Sister: osaka_steak_wine_oxon_nishishinsaibashi.', philosophy: null, specialty: 'Kobe beef shabu-shabu.',
      anecdotes: [
        { text: '"It’s situated above \'Steak & Wine Oxon,\' which is managed by the same owner." — March 2026.', source: R + 'B524164601/' },
        { text: '"I ordered the simple shabu-shabu course for JPY 11,000. From the very first dish, it was vibrant and seasonal." — March 2026.', source: R + 'B524164601/' },
        { text: '"The broth made from kombu kelp, the Wagyu beef, the vegetables, and the sauce all reflect a remarkable dedication to quality." — April 2019.', source: R + 'B414114291/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 久壷庵、しゃぶしゃぶ・日本料理、大阪市中央区西心斎橋2-3-9 オクソンビル2F、なんば駅から徒歩3分、月〜土・祝前後17:00〜22:00、日祝休み、年末年始休み、予約可 (12名以上は電話)、サービス料10%、個室料6,050円、カード可、電子マネー・QR 不可、28席、6〜20名の個室、座敷、掘りごたつ、分煙。口コミ(2018年7月〜2026年3月): 1階のステーキの店オクソンと同じ経営、御堂筋の西のビルの2階、L字のカウンター、奥に茶室、雛人形、11,000円のしゃぶしゃぶのコース (季節の前菜、神戸牛のメスのサーロイン、珍しい野菜、しいたけ、Yoshino のくず、生麩、湯葉、ポン酢とごまだれ、雑炊、デザート)、昆布のだし、豚しゃぶ、老舗の高級店。',
      confidence: 'low', sources: [TB, SITE, R + 'B524164601/', R + 'B414114291/', R + 'B412054191/', R + 'B365386984/', R + 'B369985065/', R + 'B416231944/', R + 'B463832960/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter and private-room course dining; no English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市中央区西心斎橋2-3-9 オクソンビル2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; a March 2026 review confirms it is open; most other reviews are from 2018–2019.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋二丁目3番9号 (go) 9m. Same building as its sister steakhouse osaka_steak_wine_oxon_nishishinsaibashi (address_ja "大阪府大阪市中央区西心斎橋2-3-9 オクソンビル 1F"), pinned 4 m away, so this pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524164601/', TB],
    price_note: 'One dated price from a March 2026 review; service and room charges from the Tabelog listing.', last_checked: TODAY, items: [
      it('', '', 'Shabu-shabu course with Kobe beef sirloin', '¥11,000', 'Courses', 'no', 'no', 'March 2026 review.', 'kobe_shabu_course'),
    ] }, {
    cuisine: '同じ経営のステーキの店オクソンの上の、老舗の高級なしゃぶしゃぶと日本料理 (2026年3月)・11,000円のしゃぶしゃぶのコース: 季節の前菜、神戸牛のメスのサーロインのしゃぶしゃぶと珍しい野菜、しいたけ、Yoshino のくず、生麩、湯葉、ポン酢と濃厚なごまだれ、雑炊、デザート (2026年3月)・昆布のだし、和牛や神戸牛のしゃぶしゃぶのコース、豚しゃぶ (2018〜2019年の口コミ)',
    neighborhood: '西心斎橋2-3-9、オクソンビル2階、御堂筋のすぐ西。なんば駅から3分',
    gf_detail: '要確認。グルテンの情報なし。しゃぶしゃぶはポン酢とごまだれで、野菜には生麩 (小麦のグルテン) も入る。',
    vegan_detail: 'ヴィーガンではありません。神戸牛のしゃぶしゃぶ。',
    notes: '[しゃぶしゃぶ・西心斎橋、ステーキの店の上の神戸牛] 御堂筋のすぐ西のオクソンビルの2階の、老舗の落ち着いた高級なしゃぶしゃぶの店で、同じ経営のステーキの店の上にある。L字のカウンター (3月は奥の棚に立派な雛人形) か座敷の個室で。2026年3月の11,000円のしゃぶしゃぶのコースは、季節の前菜から、神戸牛のメスのサーロインと珍しい野菜、Yoshino のくず、生麩、湯葉、ポン酢とごまだれ、雑炊まで。口コミの多くは2018〜2019年で、2026年は1件。サービス料10%、個室は部屋代が別。日祝休み。',
  });
}

save();
