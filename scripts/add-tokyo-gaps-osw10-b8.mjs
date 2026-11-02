// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles) — lane osw10 (circle yotsuya), batch 8.
//   + 支那そば屋 こうや China Soba-ya Koya (60-seat Showa chuka soba and Chinese tavern, since 1983; wonton noodles; NO ramen
//     block: oiliness, clarity and aroma have no source, see report)
//   + 俵コロッケ四ツ谷さくらい Tawara Croquette Yotsuya Sakurai (9-seat croquette counter run by one owner; bento by day,
//     set meals and omakase at night)
//   + 炭火魚 旬彩料理 坂本 Sumibi Sakana Shunsai Ryori Sakamoto (20-seat charcoal-grilled-fish restaurant; ¥1,300 lunch sets)
//   + FISH A WEEK 週一魚 四谷店 (Kikkoman's fish-plate café, its first shop, opened 1 Nov 2022)
//   Chain check. Koya, Sakurai, Sakamoto: one shop each (one Koya review wonders about a link to Tobotobo-tei and another
//   heard of one to Takahashi in Iidabashi; neither confirmed). FISH A WEEK: Kikkoman's press release (2022-10-27) opens the
//   first shop in Yotsuya plus a kitchen car; no other shop found. No skips: the first four non-data entries.
//   None is in data/tokyo.json (grep by name, Tabelog id and address). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw10-8');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 支那そば屋 こうや
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13000840/'; const R = TB + 'dtlrvwlst/';
  const MON = day(['11:30', '21:30']); const TF = day(['11:30', '22:00']); const SAT = day(['11:30', '21:00']);
  put({
    id: 'tokyo_shinasobaya_koya_yotsuya', name: '支那そば屋 こうや (China Soba-ya Koya)', category: 'OMNI',
    lat: 35.68706, lng: 139.727342, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles and wonton wrappers in a soy-based broth; stir-fries and dumplings make up the rest.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat-filled wontons, chashu, horumon and pork stir-fries; the noodle broths are not described as plant-based.',
    hours_raw: 'Mon 11:30–21:30 (last food order 20:55); Tue–Fri 11:30–22:00 (last food order 21:25); Sat 11:30–21:00 (last food order 20:25); closed Sunday; holiday hours on X (@yotsuya_koya) or Google; may close early when ingredients run out (Tabelog). Reservations only for groups of 3 or more, until 19:00; online bookings carry a ¥250 seat fee per person, waived for courses (Tabelog). A short line at weekday lunch (October 2026). 60 seats: a counter of 10 and tables; non-smoking (Tabelog). Cash or PayPay only (Tabelog). Children welcome (Tabelog). Founded 1983; moved a short way after an eviction (October 2026 reviews).',
    hours: { 0: MON, 1: TF, 2: TF, 3: TF, 4: TF, 5: SAT }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yotsuya 1-23, 上野KGビル 1F, down a narrow alley past Shinmichi-dōri — 4 min from Yotsuya Stn',
    cuisine: 'Showa-era chuka soba and Chinese tavern (2026 reviews) · wonton noodles ¥1,250, the house favourite: thin straight or curly noodles in a gentle soy-based broth with big, meaty, ginger-scented wontons; seasoned egg +¥150 (October 2026) · vegetable tantanmen ¥1,300 under a mountain of stir-fried bean sprouts, cabbage, garlic chives, wood ear and pork; a "super spicy" noodle with tomato, lettuce and green beans; chanmen; seasonal miso ramen and cold noodles (2026 reviews) · from 17:00: plate wontons with shredded leek and doubanjiang, assorted simmered dishes, sausage, stir-fried vegetables and horumon, a heaped "adult potato salad"; bottled beer and Shaoxing wine',
    website: null, gmaps: gm('支那そば屋 こうや 四谷'), menu_url: null,
    notes: "[Ramen · Yotsuya, a 1983 chuka-soba tavern down an alley] A lively, old-fashioned noodle and Chinese tavern down a narrow lane beyond Shinmichi-dōri, open since 1983 and moved a short way after an eviction, with a counter of ten and tables for salaryman groups. The bowl people come for is the wonton noodles, ¥1,250: a gentle soy-based broth, thin noodles and big, meaty wontons with a hint of ginger; the vegetable tantanmen arrives under a mountain of stir-fried vegetables, and there is a fiery tomato-and-lettuce noodle for the brave. After 17:00 it turns tavern, with plate wontons in leek and chili bean sauce, simmered dishes, horumon and Shaoxing wine. Some October 2026 diners found the broth light and a few wontons undercooked. Cash or PayPay; groups of three or more can book until 19:00.",
    chef_bio: { chef_name: null, roles: [], origin: 'Founded 1983 ("Founded in 1983, it\'s the long-established \'China Soba-ya Koya\'", October 2026); moved slightly after an eviction (October 2026).',
      background: 'No source names the owner or cooks. Two October 2026 diners guessed at links to other shops (the Iidabashi chuka soba shop Takahashi; the nearby Tobotobo-tei, whose menu looked similar); neither is confirmed. Holiday hours are posted on X (@yotsuya_koya) per Tabelog.',
      philosophy: null, specialty: 'Wonton noodles; plate wontons.',
      anecdotes: [
        { text: '"Upon seeing the bowl that was brought to me, I couldn\'t help but chuckle at the towering height of the vegetables." — October 2026, vegetable tantanmen ¥1,300.', source: R + 'B536970872/' },
        { text: '"Although the restaurant has moved slightly due to a previous eviction, the nostalgic feeling remains unchanged." — October 2026.', source: R + 'B537805764/' },
        { text: '"The broth is quite gentle, and the wontons are packed with filling and have a sturdy wrapper. However, I noticed a few wontons that seemed undercooked." — October 2026.', source: R + 'B537739602/' },
      ],
      japanese_sources_summary: '食べログ: 支那そば屋 こうや、ラーメン・中華料理・居酒屋、四谷1-23 上野KGビル1F、四ツ谷駅から徒歩4分、月11:30〜21:30、火〜金11:30〜22:00、土11:30〜21:00、日曜休み、祝日は X (@yotsuya_koya) で、予約は3名以上で19時まで、ネット予約は席料250円、60席 (カウンター10、テーブル50)、禁煙、カード・電子マネー不可、PayPay 可、子ども可。口コミ(2026年7月〜10月): 1983年創業、立ち退きで少し移転、ワンタン麺1,250円、味玉150円、野菜たっぷりの担々麺1,300円、激辛の麺、皿ワンタン、煮込みの盛り合わせ、ホルモン炒め、紹興酒、スープはやさしい、ワンタンが生煮えだったという声も。',
      confidence: 'medium', sources: [TB, R + 'B17312870/', R + 'B482278473/', R + 'B536970872/', R + 'B537140612/', R + 'B537739602/', R + 'B537805764/', R + 'B537846742/', R + 'B537927907/', R + 'B538242759/', R + 'B538258159/', R + 'B538274154/', R + 'B538475788/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the table; cash or PayPay; a busy Showa-style room.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区四谷1-23 上野KGビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (1,660 reviews); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.687060, 139.727342); cross-checked: GSI 東京都新宿区四谷一丁目23番地 (lot) 27m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538242759/', R + 'B536970872/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Wonton noodles', '¥1,250', 'Noodles', 'no', 'no', 'October 2026 review; seasoned egg +¥150.', 'wonton_men'),
      it('', '', 'Vegetable tantanmen', '¥1,300', 'Noodles', 'no', 'no', 'October 2026 review.', 'yasai_tantanmen'),
      it('', '', 'Plate wontons (from 17:00)', '', 'Small plates', 'no', 'no', 'October 2026 reviews.', 'sara_wonton'),
    ] }, {
    cuisine: '昭和の支那そばと中華の酒場 (2026年の口コミ)・名物はワンタン麺1,250円: やさしい醤油ベースのスープに細麺、生姜の香る肉たっぷりの大きなワンタン。味玉 +150円 (2026年10月)・野菜炒めが山盛りの担々麺1,300円 (もやし、キャベツ、ニラ、きくらげ、豚肉)。トマト、レタス、いんげんの入る激辛の麺、ちゃんめん、季節の味噌ラーメンや冷やし麺 (2026年の口コミ)・17時からは、白髪ねぎと豆板醤の皿ワンタン、煮込みの盛り合わせ、ソーセージ、野菜炒めやホルモン炒め、山盛りの「大人のポテトサラダ」。瓶ビール、紹興酒',
    neighborhood: '四谷1-23 上野KGビル1F、新道通りの先の細い路地。四ツ谷駅から徒歩4分',
    gf_detail: 'グルテンフリーではない。醤油ベースのスープに小麦の麺とワンタンの皮。ほかは炒め物と点心。',
    vegan_detail: 'ヴィーガンではない。肉入りのワンタン、チャーシュー、ホルモン、豚肉の炒め物。麺のスープが植物性という説明はない。',
    notes: '[ラーメン・四谷、路地の1983年からの支那そばの酒場] 新道通りの先の細い路地にある、にぎやかで昔ながらの麺と中華の酒場。1983年創業で、立ち退きで少しだけ移転した。カウンター10席とサラリーマンのグループが囲むテーブル。お目当てはワンタン麺1,250円で、やさしい醤油ベースのスープに細麺、生姜がほのかに香る肉たっぷりの大きなワンタン。野菜の担々麺は炒めた野菜が山盛りで、勇気のある人にはトマトとレタスの激辛の麺も。17時からは酒場になり、ねぎと豆板醤の皿ワンタン、煮込み、ホルモン、紹興酒。2026年10月にはスープが軽い、ワンタンがいくつか生煮えだったという声もある。現金か PayPay。3名以上なら19時まで予約できる。',
  });
}

// ================================================================ 俵コロッケ四ツ谷さくらい
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13226089/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '21:00']);
  put({
    id: 'tokyo_tawara_croquette_sakurai_yotsuya', name: '俵コロッケ四ツ谷さくらい (Tawara Croquette Yotsuya Sakurai)', category: 'OMNI',
    lat: 35.687597, lng: 139.72773, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: breaded croquettes and fries are the whole point (wagyu potato, crab cream, oyster, horse mackerel, shrimp).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: croquettes with wagyu, crab, cream or seafood, and clam miso soup.',
    hours_raw: 'Mon–Sat 10:30 until sold out for takeaway bento; 17:00–21:00 (last order 20:30) for eating in; Saturday by reservation only; closed Sunday and holidays (Tabelog). Lunch is takeaway bento only (2022–24 reviews). 9 seats at a narrow counter and a small table; non-smoking (Tabelog; February 2023). Cash only (Tabelog). Opened August 2018 (November 2021 review).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Yotsuya 1-22-13, on the main road — 3 min from Yotsuya Stn',
    cuisine: 'Croquette shop, takeaway bento by day, set meals and drinks at night · evening set meals with small starters (e.g. kinpira, shibazuke, crab-flavoured omelette, sesame shungiku), rice, clam miso soup and an onsen egg: two or three croquettes, an oyster fry set, fried horse mackerel and shrimp; ¥1,380 (February 2023), ¥1,580 plus tax (October 2024), oyster fry set ¥1,740 (December 2024); a drink set adds beer, sour or highball (April 2025) · croquettes: black wagyu potato, red snow crab cream, seasonal ones such as sea bream with early mikan cream, or bamboo shoot and green pea; house sauce and tartar with pickles · an omakase course of small croquettes and other dishes with sake or wine (2022, September 2025, July 2026) · daytime bento from about ¥500 (2020–22)',
    website: null, gmaps: gm('俵コロッケ四ツ谷さくらい'), menu_url: null,
    notes: "[Yoshoku · Yotsuya, a one-person croquette counter] A tiny nine-seat counter on the main road near Yotsuya Station, opened in 2018 and run single-handed by the owner, who fries to order. By day it sells bento over the counter until they run out; at night it is a cosy croquette bar. The evening sets come with small house starters, rice and a rich clam miso soup around a choice of two or three croquettes — black wagyu potato, red snow crab cream, a seasonal special such as sea bream with mikan — or fried oysters and horse mackerel, and add a drink for a little more. There is also an omakase, a run of bite-sized croquettes and other dishes with sake or wine that a July 2026 group found satisfying. Diners note the owner asking about dislikes and once adding an extra oyster because the first were small. Cash only; book Saturdays.",
    chef_bio: { chef_name: null, roles: ['Owner-chef, working alone (reviews)'], origin: 'Opened August 2018 (November 2021 review).',
      background: 'No source names the owner. "It\'s run by the owner alone" (November 2021); "Although the chef operates solo, the small capacity means you won\'t have to wait long" (September 2025); "the master asked if I had any dislikes… halfway through my meal, the master added an extra oyster fry because [the first ones] were small" (December 2024); "Each dish reflects the owner\'s dedication" (July 2026).',
      philosophy: null, specialty: 'Tawara croquettes; crab cream croquette.',
      anecdotes: [
        { text: '"The Natural Sea Bream with Early Mikan Cream Croquette is a seasonal menu item… As the master said, the cream croquette pairs well with mikan, and it was indeed delicious." — October 2024, three-croquette set with wine.', source: R + 'B494655164/' },
        { text: '"The chef\'s omakase was impressive, with a continuous flow of dishes that left me in awe." — September 2025.', source: R + 'B513376540/' },
        { text: '"I enjoyed the omakase course during my first visit with three friends… the highlight being the Tawara Croquette, which was small and easy to eat." — July 2026.', source: R + 'B532792483/' },
      ],
      japanese_sources_summary: '食べログ: 俵コロッケ四ツ谷さくらい、コロッケ・カレー・弁当、四谷1-22-13、四ツ谷駅から徒歩3分、月〜土10:30〜売り切れまで (テイクアウトのみ)、17:00〜21:00 (L.O.20:30、イートイン)、土曜は予約制、日曜・祝日休み、9席、禁煙、カード・電子マネー・QR不可。口コミ(2020年3月〜2026年7月): 2018年8月オープン、店主ひとりで営む、昼は弁当、夜の定食1,380〜1,740円、黒毛和牛のポテトコロッケ、紅ずわい蟹のクリームコロッケ、季節のコロッケ、牡蠣フライ、しじみの味噌汁、おまかせのコース、日本酒とワイン。',
      confidence: 'medium', sources: [TB, R + 'B422677682/', R + 'B443412051/', R + 'B449970499/', R + 'B462294641/', R + 'B482948240/', R + 'B494655164/', R + 'B502778805/', R + 'B505930063/', R + 'B513376540/', R + 'B523867856/', R + 'B532792483/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter, one person cooking and serving; cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都新宿区四谷1-22-13',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.687597, 139.727730); cross-checked: GSI 東京都新宿区四谷一丁目22番地 (lot) 27m. Mitani (tokyo_sushi_mitani_yotsuya, address_ja "東京都新宿区四谷1-22-1") is 15 m away at a different address; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B494655164/', R + 'B505930063/'],
    price_note: 'Evening set prices from October and December 2024 reviews; likely changed.', last_checked: TODAY, items: [
      it('', '', 'Evening set: three croquettes with starters, rice and miso soup', '¥1,580 + tax', 'Set meals', 'no', 'no', 'October 2024 review.', 'croquette_set'),
      it('', '', 'Oyster fry set', '¥1,740', 'Set meals', 'no', 'no', 'December 2024 review.', 'oyster_set'),
    ] }, {
    cuisine: 'コロッケの店。昼は持ち帰りの弁当、夜は定食とお酒・夜の定食は小鉢 (きんぴら、柴漬け、かに風味の卵焼き、春菊のごまだれなど)、ご飯、しじみの味噌汁、温泉卵付きで、コロッケ2個か3個、牡蠣フライ、あじフライ、えびフライ。1,380円 (2023年2月)、1,580円+税 (2024年10月)、牡蠣フライ定食1,740円 (2024年12月)。ドリンク付きはビール、サワー、ハイボールから (2025年4月)・コロッケ: 黒毛和牛のポテト、紅ずわい蟹のクリーム、季節の鯛と早生みかんのクリームや筍とグリーンピース。自家製ソースとピクルス入りのタルタル・小さなコロッケとほかの料理を日本酒やワインと楽しむおまかせのコース (2022年、2025年9月、2026年7月)・昼の弁当は500円ほどから (2020〜22年)',
    neighborhood: '四谷1-22-13、大通り沿い。四ツ谷駅から徒歩3分',
    gf_detail: 'グルテンフリーではない。主役はパン粉のコロッケとフライ (和牛のポテト、蟹クリーム、牡蠣、あじ、えび)。',
    vegan_detail: 'ヴィーガンではない。和牛、蟹、クリーム、魚介のコロッケに、しじみの味噌汁。',
    notes: '[洋食・四谷、ひとりで営むコロッケのカウンター] 四ツ谷駅近くの大通り沿い、9席の小さなカウンター。2018年開業で、店主がひとりで注文ごとに揚げる。昼は売り切れまで弁当を売り、夜は居心地のいいコロッケの店に。夜の定食は自家製の小鉢、ご飯、濃いしじみの味噌汁に、黒毛和牛のポテト、紅ずわい蟹のクリーム、鯛とみかんなど季節のコロッケを2〜3個、または牡蠣フライやあじフライ。少し足せば飲み物も付く。おまかせのコースもあり、一口サイズのコロッケやほかの料理を日本酒やワインと。2026年7月のグループも満足していた。店主は苦手なものを聞き、牡蠣が小さいからと1個おまけしてくれたこともある。現金のみ、土曜は予約を。',
  });
}

// ================================================================ 炭火魚 旬彩料理 坂本
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13131899/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['17:45', '22:00']);
  put({
    id: 'tokyo_sumibi_sakana_sakamoto_yotsuya', name: '炭火魚 旬彩料理 坂本 (Sumibi Sakana Shunsai Ryori Sakamoto)', category: 'OMNI',
    lat: 35.687478, lng: 139.727588, cuisine_type: 'shokudo',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Plain salt-grilled fish (mackerel) is offered, but many lunch fish are marinated in soy-based "aromatic" sauce or Saikyo miso, the miso soup is red miso, and dinner includes tempura; nothing gluten-free is described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish restaurant; every set is built around grilled fish.',
    hours_raw: 'Mon–Sat lunch 11:30–14:00 and dinner 17:45–22:00; closed Sunday (Tabelog). Lunch often has a line or is full around 13:00 (2025–26 reviews); fish is grilled to order, so it takes a little time (December 2025). Lunch is cash only (May 2026); Tabelog lists cards (VISA, Master, JCB, AMEX) and e-money. A 10% charge is added at dinner (Tabelog). 20 seats: 8 at the counter and tables for up to 4; a semi-private room; non-smoking, no e-cigarettes (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yotsuya 1-23-9, YOK BUILD 1F — 5 min from Yotsuya Stn (Yotsuya exit) along Sanei-dōri',
    cuisine: 'Charcoal-grilled fish and seasonal Japanese cooking (Tabelog) · lunch, daily board: grilled fish set ¥1,300 (black cod or Spanish mackerel in an aromatic marinade, salt-grilled mackerel, salmon in Saikyo miso, horse mackerel), with Akita Komachi rice, red miso soup, two small sides such as chilled tofu with grated daikon and simmered hijiki, pickles and grated daikon (one free refill); sashimi and grilled fish set ¥2,000; negitoro bowl set; rice refill ¥100 (2025–26 reviews) · dinner à la carte: sashimi platter, corn tempura, grilled black cod, ankimo, mozuku; sake such as Fusou Tsuru nigori and Tanigawadake (June 2026)',
    website: null, gmaps: gm('炭火魚 旬彩料理 坂本 四谷'), menu_url: null,
    notes: "[Japanese · Yotsuya, charcoal-grilled fish set lunches] A clean, cheerful 20-seat Japanese restaurant on Sanei-dōri whose lunch one January 2026 diner calls the best grilled-fish set in the area: choose from the day's board — black cod or Spanish mackerel in an aromatic marinade, salt-grilled mackerel, miso-cured salmon — grilled over charcoal to order and served with shiny Akita Komachi rice, red miso soup, small sides and grated daikon you can have refilled, mostly for ¥1,300. Expect a line or a full room by 13:00, and pay cash at lunch. One June 2026 diner found the fish portion small for the price, and the popular miso salmon sells out. At night it is an izakaya-style kitchen with sashimi platters, tempura and sake; a 10% charge applies. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'No source names the owner or cooks; reviews mention a warm "Irasshaimase!" greeting (May 2026) and dishes "well-prepared by the chef" (June 2026). Tabelog gives no opening date.',
      philosophy: null, specialty: 'Charcoal-grilled fish set lunch.',
      anecdotes: [
        { text: '"As the tray was placed in front of me, small dishes were set down one after another—one, two, three, four. At this point, I already knew it would be delicious." — January 2026, grilled black cod.', source: R + 'B522048216/' },
        { text: '"You can get a free refill of grated daikon once… Lunch payment is cash only." — May 2026, grilled Spanish mackerel ¥1,300.', source: R + 'B528973391/' },
        { text: '"Everything was delicious… However, the main fish portion was small. Considering the price of JPY 1300, it might be understandable, but I didn\'t leave feeling full." — June 2026.', source: R + 'B530588976/' },
      ],
      japanese_sources_summary: '食べログ: 炭火魚 旬彩料理 坂本、日本料理、四谷1-23-9 YOK BUILD 1F、四ツ谷駅四ツ谷口からSanei 通りを徒歩5分、月〜土11:30〜14:00・17:45〜22:00、日曜休み、20席 (カウンター8、テーブル3)、半個室あり、禁煙 (電子たばこも不可)、カード・電子マネー可、チャージ10%別途。口コミ(2025年12月〜2026年10月): 炭火の焼き魚定食1,300円 (銀だら、さわら、さば、鮭の西京焼き)、Akita Komachi のご飯、赤だし、小鉢2品、大根おろしは1回おかわり無料、刺身と焼き魚の定食2,000円、ねぎとろ丼、昼は現金のみ、13時ごろは満席、夜は刺身の盛り合わせやとうもろこしの天ぷら。',
      confidence: 'medium', sources: [TB, R + 'B470985058/', R + 'B489639670/', R + 'B518972345/', R + 'B520581824/', R + 'B522048216/', R + 'B522805822/', R + 'B528973391/', R + 'B530322187/', R + 'B530588976/', R + 'B531354593/', R + 'B535810880/', R + 'B537879168/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Lunch menu on a board outside; cash only at lunch.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区四谷1-23-9 YOK BUILD 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.687478, 139.727588); cross-checked: GSI 東京都新宿区四谷一丁目23番地 (lot) 30m. Tawara Croquette Sakurai (tokyo_tawara_croquette_sakurai_yotsuya, address_ja "東京都新宿区四谷1-22-13") is 18 m away at a different address; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B528973391/', R + 'B522805822/', R + 'B530588976/'],
    price_note: 'Lunch prices from 2026 reviews; Tabelog lists no menu.', last_checked: TODAY, items: [
      it('', '', 'Charcoal-grilled fish set (lunch, daily fish)', '¥1,300', 'Lunch', 'ask', 'no', '2025–26 reviews.', 'yakizakana_teishoku'),
      it('', '', 'Sashimi and grilled fish set (lunch)', '¥2,000', 'Lunch', 'ask', 'no', 'February 2026 review.', 'sashimi_yakizakana'),
      it('', '', 'Rice refill', '¥100', 'Lunch', '', '', 'June 2026 review.', 'rice_refill'),
    ] }, {
    cuisine: '炭火の焼き魚と旬の和食 (食べログ)・昼は日替わりの黒板: 焼き魚定食1,300円 (銀だらやさわらの香味漬け、さばの塩焼き、鮭の西京焼き、あじなど)。Akita Komachi のご飯、赤だし、冷奴と大根おろし、ひじき煮などの小鉢2品、漬物、大根おろしは1回おかわり無料。刺身と焼き魚の定食2,000円、ねぎとろ丼の定食、ご飯のおかわり100円 (2025〜26年の口コミ)・夜はアラカルト: 刺身の盛り合わせ、とうもろこしの天ぷら、銀だらの焼き物、あん肝、もずく。日本酒は Fusou Tsuru のにごりや Tanigawadake など (2026年6月)',
    neighborhood: '四谷1-23-9 YOK BUILD 1F。四ツ谷駅四ツ谷口からSanei 通りを徒歩5分',
    gf_detail: '要確認。さばの塩焼きもあるが、昼の魚の多くは醤油ベースの香味漬けや西京味噌、味噌汁は赤だし、夜は天ぷらも。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではない。魚の店で、どの定食も焼き魚が中心。',
    notes: '[和食・四谷、炭火焼き魚の定食] Sanei 通り沿いの清潔で明るい20席の和食店。昼の焼き魚定食は、2026年1月の客がこのあたりで一番と書く。日替わりの黒板から選ぶ: 銀だらやさわらの香味漬け、さばの塩焼き、鮭の西京焼き。注文を受けてから炭火で焼き、つややかなAkita Komachi のご飯、赤だし、小鉢、おかわりできる大根おろしと一緒にほとんど1,300円。13時ごろには行列か満席で、昼は現金のみ。2026年6月の客は値段の割に魚が小さいと感じ、人気の鮭の西京焼きは売り切れることも。夜は刺身の盛り合わせ、天ぷら、日本酒の居酒屋風で、10%のチャージがかかる。日曜休み。',
  });
}

// ================================================================ FISH A WEEK 週一魚 四谷店
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13278486/'; const R = TB + 'dtlrvwlst/'; const PR = 'https://kyodonewsprwire.jp/release/202210278834';
  const H = day(['11:30', '21:00']);
  put({
    id: 'tokyo_fish_a_week_yotsuya', name: 'FISH A WEEK 週一魚 四谷店 (FISH A WEEK Shuuichi Sakana Yotsuya)', category: 'OMNI',
    lat: 35.686866, lng: 139.727115, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free as served: every set comes with mochi-mugi barley rice, and the sauces and marinades (Saikyo miso, teriyaki, curry) are not described as gluten-free. The listing says allergy information is available, so ask what can be swapped.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: every main is fish; the vegetable delis are sold on their own too, but some contain tuna or sakura shrimp.',
    hours_raw: 'Daily 11:30–21:00 (last order 20:30), holidays included; closed over New Year (Tabelog). Reservations, including same-day online bookings at lunch (August 2026); same-day cancellation charged (Tabelog). 13 seats: a counter of 4, three tables for two and three single seats; non-smoking (Tabelog). Cards, e-money and PayPay (Tabelog). Takeaway and delivery (Tabelog; press release). Allergy information available (Tabelog). Opened 1 November 2022 as the first shop of Kikkoman\'s FISH A WEEK service (press release).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yotsuya 2-2-18, VORT四谷 1F, along Koshu-kaido toward Shinjuku — 4 min from Yotsuya Stn',
    cuisine: 'Healthy fish plates from Kikkoman: a fish main, chewy mochi-mugi barley rice and two vegetable delis chosen from four, with soup, eat-in or takeaway (press release; Tabelog) · e.g. tandoori yellow curry with sesame mackerel in coconut milk (¥1,500 with a drink); grilled Spanish mackerel or cod in Saikyo miso with yuzu; teriyaki yellowtail; mahi mahi; herb-grilled sole with soy-milk lemon sauce; a special plate of three fish ¥2,280 (November 2026); plates from about ¥1,250–1,350 (September 2026) · delis such as wood ear and avocado, almond and pumpkin salad, broccoli and green beans, sakura shrimp coleslaw, carrot and tuna salad; chilled mackerel soup or soy-milk soup · spiced rooibos tea, Coedo craft beer, wine',
    website: PR, gmaps: gm('FISH A WEEK 週一魚 四谷'), menu_url: null,
    notes: "[Café · Yotsuya, Kikkoman's fish-plate café] Kikkoman, the soy-sauce maker, opened this small, chic café in November 2022 as the first shop of its FISH A WEEK service, named for the hope that people eat fish at least once a week. Each plate pairs a fish main with chewy mochi-mugi barley rice and two vegetable delis from a daily four: the favourite in autumn 2026 was a tandoori yellow curry topped with a big piece of sesame mackerel, alongside Saikyo-miso Spanish mackerel, cod with yuzu sauce and teriyaki yellowtail. Plates run about ¥1,250–1,500, a three-fish special ¥2,280. Diners call it light, balanced and good value for the area; the rice portion is generous and you can ask for less. Open all day, every day; same-day lunch bookings online.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 November 2022 as the first FISH A WEEK shop (Kikkoman press release, 27 October 2022).',
      background: 'Operated by キッコーマン株式会社. The press release: a food service built on fish, mochi-mugi and vegetables, eat-in, takeaway and delivery, with a kitchen car from late November 2022; named for eating fish at least once a week; uses eco-friendly ingredients and mostly paper or bamboo containers; a partner of the Blue Seafood Guide. No source names the cooks.',
      philosophy: '"おいしく食べていたら、いつのまにか健康的な食生活を実践している" — eat well and, before you know it, you are eating healthily (press release).', specialty: 'Fish plate with mochi-mugi rice and vegetable delis; tandoori mackerel curry.',
      anecdotes: [
        { text: '"Unfortunately, the sesame mackerel dishes were unavailable due to fishing disruptions caused by the typhoon, so I opted for the Mahi Mahi instead." — August 2026.', source: R + 'B533903193/' },
        { text: '"A large piece of mackerel was sitting right on top. I wondered if curry and mackerel would go well together, but it turned out to be surprisingly delicious!" — October 2026.', source: R + 'B537358706/' },
        { text: '"The portion of rice was larger than I expected, and I should have asked for less." — October 2026.', source: R + 'B538202273/' },
      ],
      japanese_sources_summary: 'キッコーマンのプレスリリース (2022年10月27日): 新たな飲食サービス「FISH A WEEK 週一魚 (フィッシュ ア ウィーク しゅういちさかな)」を11月1日に開始、同日第1号店を東京都新宿区四谷にオープン、魚・もち麦・野菜を使ったメニュー、イートイン・テイクアウト・フードデリバリー、11月下旬からキッチンカー、週に一度は魚を食べて欲しいという思い、ブルーシーフードガイドのパートナー、容器は主に紙や竹、四谷店は四谷2-2-18。食べログ: 毎日11:30〜21:00 (L.O.20:30)、年末年始休み、13席、禁煙、カード・電子マネー・PayPay 可、アレルギー表示あり、テイクアウト・デリバリー。口コミ(2026年8月〜11月): ごまさばのタンドリーイエローカレー1,500円 (ドリンク付き)、さわらの西京焼き、ぶりの照り焼き、シイラ、3種の魚の特製プレート2,280円、野菜デリ2品、もち麦ごはん、スパイスルイボスティー。',
      confidence: 'medium', sources: [PR, TB, R + 'B533903193/', R + 'B534629181/', R + 'B534650671/', R + 'B535048252/', R + 'B535157828/', R + 'B535902342/', R + 'B536849390/', R + 'B537055826/', R + 'B537358706/', R + 'B538153287/', R + 'B538202273/', R + 'B538465820/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Build a plate by pointing: main, two delis, rice size, drink.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区四谷2-2-18 VORT四谷 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.686866, 139.727115); cross-checked: GSI 東京都新宿区四谷二丁目2番地 (lot) 49m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538153287/', R + 'B538465820/', R + 'B535048252/'],
    price_note: 'Prices from September–November 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tandoori yellow curry with sesame mackerel, with drink', '¥1,500', 'Plates', 'no', 'no', 'October 2026 review.', 'saba_curry'),
      it('', '', 'Teriyaki yellowtail plate (two delis, barley rice)', '¥1,350', 'Plates', 'no', 'no', 'September 2026 review.', 'buri_plate'),
      it('', '', 'Special plate of three fish and sauces', '¥2,280', 'Plates', 'no', 'no', 'November 2026 review.', 'special_plate'),
    ] }, {
    cuisine: 'キッコーマンの健康的な魚のプレート: 魚のメイン、もちもちのもち麦ごはん、4種から選ぶ野菜デリ2品にスープ。店内でも持ち帰りでも (プレスリリース、食べログ)・たとえばココナッツミルクのごまさばのタンドリーイエローカレー (ドリンク付き1,500円)、さわらや鱈の西京焼きと柚子、ぶりの照り焼き、シイラ、舌平目のハーブ焼き豆乳レモンソース、3種の魚の特製プレート2,280円 (2026年11月)、プレートは1,250〜1,350円ほど (2026年9月)・デリはきくらげとアボカド、アーモンドとかぼちゃのサラダ、ブロッコリーといんげん、桜えびのコールスロー、にんじんとツナのサラダなど。冷たいさばのスープや豆乳のスープ・スパイスルイボスティー、Coedo のクラフトビール、ワイン',
    neighborhood: '四谷2-2-18 VORT四谷 1F、Koshu-kaido を新宿方面へ。四ツ谷駅から徒歩4分',
    gf_detail: 'このままではグルテンフリーではない。どのセットにももち麦ごはんが付き、ソースや漬けだれ (西京味噌、照り焼き、カレー) にグルテンフリーの説明はない。食べログにはアレルギー表示ありとあるので、差し替えを相談して。',
    vegan_detail: 'ヴィーガンではない。メインはすべて魚。野菜デリは単品でも買えるが、ツナや桜えび入りのものも。',
    notes: '[カフェ・四谷、キッコーマンの魚のプレートのカフェ] 醤油メーカーのキッコーマンが2022年11月に開いた、FISH A WEEK の第1号店の小さくおしゃれなカフェ。名前には週に一度は魚を食べてほしいという思いが込められている。プレートは魚のメインにもちもちのもち麦ごはんと、その日の4種から選ぶ野菜デリ2品。2026年秋の人気は大きなごまさばがのったタンドリーイエローカレーで、さわらの西京焼き、鱈の柚子ソース、ぶりの照り焼きも。プレートは1,250〜1,500円ほど、3種の魚の特製プレートは2,280円。軽くてバランスがよく、このあたりでは手ごろという声。ご飯は多めなので少なめも頼める。毎日通しで営業、昼は当日のネット予約もできる。',
  });
}

save();
