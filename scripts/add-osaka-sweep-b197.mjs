// Osaka sweep (2-mile circle around Dotonbori), batch 197 — name-revisit queue (Greg 2026-10-30: redo the shops
// passed over because the name sounded like a person's), nearest-first.
//   + イタリア料理 小西屋 Italian Ryori Konishiya (Italian with Tango produce, ten years in Shinmachi)
//   + 沖縄麺処 天願 南船場本店 OKIMEN TENGAN Minamisenba honten (Okinawa soba; ramen block; one sister shop in Honmachi)
//   + CARNE asaeda (Mexican izakaya and carne asada steak, Tabelog Asian/Ethnic WEST 100 2026; Shinmachi)
//   + 青地 Aochi (seasonal Japanese à la carte since 2013; Shinmachi by Nishi-Ohashi)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-30';
const { put, skip, save } = openCitySweep('osaka', TODAY, 197);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ イタリア料理 小西屋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27095255/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '22:00']);
  put({
    id: 'osaka_italian_konishiya_shinmachi', name: 'イタリア料理 小西屋 (Italian Ryori Konishiya)', category: 'OMNI',
    lat: 34.676427, lng: 135.495318, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; pasta, pizza, garlic toast and gratin run through the courses, and the menu changes daily, so ask when booking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, shellfish, prosciutto, cheese, chicken and game meat on the courses and à la carte.',
    hours_raw: 'Mon, Wed–Sun 18:00–22:00; closed Tuesday (Tabelog). Lunch suspended from April 2026; hours may vary and open days are announced on social media (Tabelog). Seasonal omakase courses ¥6,500, ¥8,000 and ¥10,000, or à la carte (Tabelog). Reservations accepted; often fully booked (July–August 2026 reviews). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 16 seats: 6 at the counter, 10 at tables; private hire up to 20; non-smoking, smoking area outside; children welcome (Tabelog). Second floor up a narrow staircase (July 2026 review). Rooibos tea served instead of water (Tabelog). Opened 23 September 2016 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi 1-23-9 2F (Nishi-ku) — 3 min from Nishi-Ohashi and Yotsubashi Stns',
    cuisine: 'Casual Italian with fish, organic vegetables and meat sent from Tango, the owner\'s home region (16 seats) · menu changes daily · seasonal omakase courses ¥6,500, ¥8,000, ¥10,000 · à la carte: carpaccio of four fish with purées and pickles, chilled pasta (smoked salmon, shrimp, shirasu, grilled eggplant, fresh tomato purée; pesto with myoga), clam pasta, meat-sauce pasta, chicken gratin, pizza, wild boar, prosciutto and cheese platter, rock oysters, sea urchin · wine chosen by the owner, by the glass or bottle · draft Sapporo',
    website: 'http://www.italian-konishiya.jp/', gmaps: gm('イタリア料理 小西屋 新町'), menu_url: null,
    notes: "[Italian · Shinmachi, a ten-year-old upstairs Italian with produce from Tango] A wood-lined second-floor room up a narrow staircase near Nishi-Ohashi, open since 2016, that cooks with fish, organic vegetables and meat sent from Tango, the owner's home region, and changes the menu with each day's delivery. From the counter you can watch the single chef at work; tables suit the courses (¥6,500 to ¥10,000): a September 2026 ¥6,500 course ran from a heart-shaped mousse and tuna with pickles through pizza, pasta with bottarga, grilled shimaaji and a dessert plate of panna cotta, pineapple sorbet and Shine Muscat grapes. À la carte, a four-time diner rates the summer chilled pasta with pesto and myoga above everything; there are also clam pasta and chicken gratin. The owner chooses the wines. It's often full, so book; lunch stopped in April 2026.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Italian restaurant that opened on 23 September 2016 (Tabelog); a repeat diner heard it was the tenth anniversary in 2026 (August 2026 review). Fish, organic vegetables and meat come straight from Tango, the owner\'s home region; the owner chooses the wines (Tabelog, shop-provided). One chef runs the kitchen (July 2026 review). A repeat diner mentions playing with the owner\'s daughter (August 2025 review).', philosophy: 'Seasonal Italian built on the day\'s ingredients from Tango, so the dishes differ visit to visit (Tabelog, shop-provided).', specialty: 'Chilled pasta; seasonal omakase courses.',
      anecdotes: [
        { text: '"Among everything, the cold pasta with pesto was exceptionally delicious! The slightly thinner pasta had a smooth texture, and combined with ingredients like myoga, it had a refreshing summer flavor!" — August 2026, fourth visit.', source: R + 'B487683156/' },
        { text: '"When dessert arrived, I honestly expected just a small gelato, but I was astonished by the beautifully crafted dessert that was served." — September 2026, ¥6,500 course.', source: R + 'B536261764/' },
      ],
      japanese_sources_summary: '食べログ: イタリア料理 小西屋、大阪市西区新町1-23-9 2F、西大橋駅・四ツ橋駅から徒歩3分、月・水〜日18:00〜22:00、火曜休み、2026年4月からランチは休止、営業日はSNSで告知、季節のおまかせコース6500円・8000円・10000円、カード・PayPay可、電子マネー不可、16席 (カウンター6、テーブル10)、貸切20名まで、禁煙 (外に喫煙所)、子供可、水の代わりにルイボスティー、オープン日2016年9月23日。店の紹介: オーナーの地元 Tango から直送の鮮魚、有機野菜、肉、仕入れで変わる日替わりのメニュー、オーナーが選ぶワイン、記念日のサプライズ。口コミ(2025年8月〜2026年10月): 10周年、シェフ一人の厨房、4種の魚のカルパッチョ、冷製パスタ (燻製サーモン、海老、shirasu、焼き茄子、トマトのピュレ。ジェノベーゼと myoga)、あさりのパスタ、ミートソース、チキングラタン、ピザ、猪、生ハムとチーズ、岩牡蠣、ウニ、6500円のコース (ハートのムース、マグロとピクルス、ガーリックトースト、からすみのパスタ、shimaajiのグリル、パンナコッタとパイナップルのソルベとシャインマスカット)、Tanba の野菜の盛り合わせ、いつも満席、狭い階段の2階、オーナーの娘さんと遊んだという常連、メニューにないピザを作ってくれた。',
      confidence: 'medium', sources: [TB, R + 'B487683156/', R + 'B531157163/', R + 'B533023910/', R + 'B533086077/', R + 'B536261764/', R + 'B537091004/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; dinner only from April 2026 (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町1-23-9 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目23番9号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B533086077/', R + 'B487683156/'],
    price_note: 'Course prices from the Tabelog listing.', last_checked: TODAY, items: [
      it('', '', 'Seasonal omakase course', '¥6,500', 'Course', 'ask', 'no', 'Tabelog listing; a September 2026 diner had it with all-you-can-drink.', 'course6500'),
      it('', '', 'Seasonal omakase course', '¥8,000', 'Course', 'ask', 'no', 'Tabelog listing.', 'course8000'),
      it('', '', 'Seasonal omakase course', '¥10,000', 'Course', 'ask', 'no', 'Tabelog listing.', 'course10000'),
      it('', '', 'Chilled pasta (seasonal)', '', 'Pasta', 'no', 'no', 'July–August 2026.', 'cold_pasta'),
      it('', '', 'Clam pasta', '', 'Pasta', 'no', 'no', 'August 2026.', 'vongole'),
      it('', '', 'Chicken gratin', '', 'À la carte', 'ask', 'no', 'July 2026.', 'gratin'),
    ] }, {
    cuisine: 'オーナーの地元 Tango から届く魚、有機野菜、肉の気軽なイタリアン (16席)・メニューは日替わり・季節のおまかせコース6500円、8000円、10000円・アラカルト: 4種の魚のカルパッチョ (ピュレとピクルス)、冷製パスタ (燻製サーモン、海老、shirasu、焼き茄子、フレッシュトマトのピュレ。ジェノベーゼと myoga)、あさりのパスタ、ミートソースのパスタ、チキングラタン、ピザ、猪、生ハムとチーズの盛り合わせ、岩牡蠣、ウニ・オーナーが選ぶワイン、グラスでもボトルでも・サッポロの生ビール',
    neighborhood: '西区新町1-23-9 2F。西大橋駅・四ツ橋駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。コースにはパスタ、ピザ、ガーリックトースト、グラタンがあり、メニューは日替わりなので予約のときに確認を。',
    vegan_detail: 'ヴィーガンではありません。コースにもアラカルトにも魚、貝、生ハム、チーズ、鶏、ジビエ。',
    notes: '[イタリアン・新町、Tango の食材で10年、2階のイタリアン] 西大橋の近く、狭い階段を上がった2階の木のぬくもりのある店で、2016年から。オーナーの地元 Tango から届く魚、有機野菜、肉を使い、その日の仕入れでメニューが変わる。カウンターからはシェフが一人で料理するのが見え、コース (6500円〜10000円) はテーブルで。2026年9月の6500円のコースは、ハートのムースとマグロのピクルス添えに始まり、ピザ、からすみのパスタ、shimaajiのグリル、パンナコッタとパイナップルのソルベとシャインマスカットのデザートまで。アラカルトでは、4回目の来店の人がジェノベーゼと myogaの夏の冷製パスタをいちばんに挙げる。あさりのパスタやチキングラタンも。ワインはオーナーが選ぶ。いつも満席に近いので予約を。ランチは2026年4月から休止。',
  });
}

// ================================================================ 沖縄麺処 天願 南船場本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27141727/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00']);
  put({
    id: 'osaka_okimen_tengan_minamisenba', name: '沖縄麺処 天願 南船場本店 (OKIMEN TENGAN Minamisenba honten)', category: 'OMNI',
    lat: 34.677839, lng: 135.505328, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: Okinawa soba is a wheat noodle.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: bonito, niboshi and clam broth; pork toppings; Spam in the onigiri.',
    hours_raw: 'Mon–Sat and public holidays 11:00–15:00 (last order 15:00); closed Sunday and the 2nd and 4th Saturdays; closes early when the soup runs out; other irregular closures, check Instagram (Tabelog). No reservations (Tabelog). No cards or e-money; PayPay accepted (Tabelog). 10 counter seats; non-smoking (Tabelog). Children and strollers welcome; easier to get in after 13:00 (Tabelog). English menu with photos (Tabelog). Lines at weekday lunch; staff take orders from the line and the bowl comes soon after sitting (August and October 2026 reviews). Opened 17 April 2024 (Tabelog); a sister shop in Honmachi marked its first anniversary in December 2025 (review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minamisenba 2-8-2, Miyamoto Bldg 1F — 5 min from Nagahoribashi Stn, 10 min from Sakaisuji-Honmachi Stn',
    cuisine: 'Okinawa soba specialist (10 counter seats) · clear golden broth of katsuobushi, kombu, niboshi and dried clams with two Okinawan salts and a splash of awamori · flat, medium-thick noodles developed with a noodle factory · Tengan soba ¥1,200 (grilled three-layer pork belly and salt-simmered cartilage soki) · salt cartilage soki soba ¥950 · back-fat topping ¥100 · summer chilled Churaumi soba ¥980 · aosa seaweed soba · small jushi (Okinawan mixed rice) ¥200, with mozuku vinegar · Po-Tama onigiri (Spam and omelet) half ¥200, ¥150 at lunch · fresh shredded ginger, kamaboko, tied kombu · koregusu and yuzu kosho on the counter',
    website: null, gmaps: gm('沖縄麺処 天願 南船場本店'), menu_url: null,
    notes: "[Okinawa soba · Minamisenba, a lunch counter with a line of office workers] A ten-seat counter in Minamisenba's office blocks that opened in 2024 as the area's first Okinawa soba specialist, and now often has a line at weekday lunch. The shop takes the broth seriously: katsuobushi and kombu with niboshi, dried clams, two kinds of Okinawan salt and a splash of awamori, poured clear and golden over flat, medium-thick noodles worked out with a noodle factory. Fresh shredded ginger stands in for the usual pickled kind. The big bowl is the Tengan soba (¥1,200), with crisp-grilled three-layer pork and tender salt-simmered cartilage soki; the salt soki soba (¥950) is the everyday order, and one diner on a 71st visit still adds the ¥100 back fat. In summer there's a chilled Churaumi soba. Add a small jushi or a Po-Tama onigiri, and season with koregusu or yuzu kosho from the counter. Lunch only, no cards (PayPay is fine), and it closes when the soup runs out. A second shop runs in Honmachi.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Okinawa soba shop that opened on 17 April 2024 as the first Okinawa soba specialist in Minamisenba (Tabelog, shop-provided); the Honmachi branch marked its first anniversary in December 2025 (review). A diner chatted with the owner in July 2024 (review).', philosophy: 'Serious about broth and noodles: noodles researched with the noodle factory down to blend and size; broth of katsuobushi and kombu with two kinds of Okinawan salt, dried clams and a splash of awamori (Tabelog, shop-provided).', specialty: 'Tengan soba; salt cartilage soki soba.',
      anecdotes: [
        { text: '"The broth is light yet rich in umami, and the addition of back fat enhances its deliciousness. The noodles are special flat, medium-thick noodles with a smooth texture…" — October 2026, 71st visit, Tengan Soba ¥1,200 with back fat ¥100.', source: R + 'B483482580/' },
        { text: '"The bonito broth was rich and flavorful... and instead of pickled ginger, [the shop] used fresh shredded ginger, which was a nice touch!" — September 2026.', source: R + 'B536505231/' },
      ],
      japanese_sources_summary: '食べログ: 沖縄麺処 天願 南船場本店、大阪市中央区南船場2-8-2 宮本ビル 1F、長堀橋駅から徒歩5分、堺筋本町駅から徒歩10分、月〜土・祝日11:00〜15:00 (L.O. 15:00)、日曜と第2・第4土曜休み、スープがなくなり次第終了、ほかに不定休あり (インスタで確認)、予約不可、カード・電子マネー不可、PayPay可、10席 (カウンター)、禁煙、子供・ベビーカー可、13時以降は入りやすい、英語メニューと写真つきメニューあり、オープン日2024年4月17日。店の紹介: 南船場初の沖縄そば専門店、だしと麺にこだわり、製麺所で配合から太さまで研究した麺、かつお節と昆布に沖縄の塩2種と干し貝、awamori を少し、澄んだ黄金色のスープ。口コミ(2024年4月〜2026年10月): Tengan soba 1200円 (三枚肉と塩軟骨の Soki)、塩軟骨の Soki soba 950円、背脂100円、夏限定の冷たい Churaumi soba 980円、Aasa soba、小さい jushi200円とmozuku の酢の物、Po-Tama のおにぎり (スパムと薄焼き卵) ハーフ200円、ランチは150円、平打ちの中太麺、生の千切りしょうが、かまぼこ、結び昆布、卓上のkoregusu と yuzu kosho、平日の昼は会社員の行列、並んでいる間に注文を取る、本町店の1周年 (2025年12月)。',
      confidence: 'medium', sources: [TB, R + 'B483482580/', R + 'B486541517/', R + 'B532840436/', R + 'B533688191/', R + 'B534688355/', R + 'B536505231/'] },
    ramen: {
      broth_base: ['gyokai', 'shellfish'], broth_texture: 'chintan', tare: ['shio'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'medium', shape: 'flat', hydration: null, handmade: false, notes: 'Flat, medium-thick Okinawa soba noodles developed with a noodle factory (Tabelog; 2026 reviews).' },
      regional_style: ['Okinawa soba'], sub_genre: ['other'],
      signature_bowl: 'Tengan soba, three-layer pork and salt cartilage soki, ¥1,200 (October 2026).',
      chashu: 'Grilled, slightly sweet three-layer pork belly and salt-simmered cartilage soki (October 2026).',
      notable_toppings: ['soki', 'three-layer pork', 'fresh ginger', 'kamaboko', 'kombu', 'back fat (optional)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Bonito and clam broth; pork.' },
      pantheon: 'Minamisenba\'s Okinawa soba counter: a clear katsuo, kombu and clam broth with Okinawan salt and awamori, flat noodles, and soki that falls off the cartilage.',
      profile: { richness: 2, oiliness: 2, clarity: 5, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B483482580/', '"The broth is light yet rich in umami" (October 2026).'],
        oiliness: [TB, 'A clear dashi broth; back fat is an optional ¥100 topping (' + R + 'B483482580/) — placed low.'],
        clarity: [TB, '"The clear, golden soup pairs perfectly with the noodles."'],
        tare_strength: [R + 'B483482580/', '"A delicious umami flavor with just the right amount of saltiness" (August 2026) — mid-scale.'],
        noodle_firmness: [R + 'B533688191/', '"The noodles had a great texture" — mid-scale.'],
        aroma_punch: [R + 'B536505231/', '"The bonito broth was rich and flavorful"; fresh shredded ginger — mid-scale.'],
      },
      confidence: 'medium', sources: [TB, R + 'B483482580/', R + 'B533688191/', R + 'B536505231/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu with photos; no cards, PayPay accepted (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場2-8-2 宮本ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場二丁目8番2号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B483482580/'],
    price_note: 'Prices from a repeat diner\'s January–October 2026 visits.', last_checked: TODAY, items: [
      it('', '', 'Tengan soba (three-layer pork and salt cartilage soki)', '¥1,200', 'Okinawa soba', 'no', 'no', 'October 2026.', 'tengan_soba'),
      it('', '', 'Salt cartilage soki soba', '¥950', 'Okinawa soba', 'no', 'no', 'October 2026.', 'soki_soba'),
      it('', '', 'Chilled Churaumi soba (summer)', '¥980', 'Okinawa soba', 'no', 'no', 'July–August 2026.', 'churaumi'),
      it('', '', 'Back-fat topping', '¥100', 'Toppings', '', 'no', 'October 2026.', 'seabura'),
      it('', '', 'Small jushi (Okinawan mixed rice)', '¥200', 'Sides', 'ask', 'no', 'October 2026.', 'jushi'),
      it('', '', 'Po-Tama onigiri, half (Spam and omelet)', '¥200', 'Sides', 'ask', 'no', 'January 2026; ¥150 at lunch.', 'potama'),
    ] }, {
    cuisine: '沖縄そばの専門店 (カウンター10席)・かつお節、昆布、煮干し、干し貝に沖縄の塩2種とawamori を少し、澄んだ黄金色のスープ・製麺所と研究した平打ちの中太麺・Tengan soba 1200円 (焼いた三枚肉と塩軟骨の Soki)・塩軟骨の Soki soba 950円・背脂トッピング100円・夏の冷たい Churaumi soba 980円・Aasa soba・小さい jushi200円、mozuku の酢の物つき・Po-Tama のおにぎり (スパムと薄焼き卵) ハーフ200円、ランチは150円・生の千切りしょうが、かまぼこ、結び昆布・卓上にkoregusu と yuzu kosho',
    neighborhood: '中央区南船場2-8-2 宮本ビル 1F。長堀橋駅から徒歩5分、堺筋本町駅から徒歩10分',
    gf_detail: 'グルテンフリーではありません。沖縄そばは小麦の麺。',
    vegan_detail: 'ヴィーガンではありません。かつお、煮干し、貝のスープ、豚肉のトッピング、おにぎりにスパム。',
    notes: '[沖縄そば・南船場、会社員が並ぶ昼のカウンター] 南船場のオフィス街にある10席のカウンターで、2024年に南船場初の沖縄そば専門店として開店し、今は平日の昼によく行列ができる。だしへのこだわりは本気で、かつお節と昆布に煮干し、干し貝、沖縄の塩2種、awamori を少し。澄んだ黄金色のスープに、製麺所と作り上げた平打ちの中太麺。紅しょうがの代わりに生の千切りしょうが。いちばん豪華なのはTengan soba  (1200円) で、香ばしく焼いた三枚肉とやわらかい塩軟骨の Soki。ふだんの一杯は塩軟骨の Soki soba  (950円) で、71回目の来店でも100円の背脂を足す人も。夏は冷たい Churaumi soba。小さい jushiや Po-Tama のおにぎりを添えて、卓上の koregusu や yuzu kosho で味を変えて。昼だけ、カードは使えず (PayPayは可)、スープがなくなれば終わり。本町にもう一軒ある。',
  });
}

// ================================================================ CARNE asaeda
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27124311/'; const R = TB + 'dtlrvwlst/';
  const W = day(['18:00', '23:00']); const SA = day(['15:00', '23:00']); const SU = day(['15:00', '22:00']);
  put({
    id: 'osaka_carne_asaeda_shinmachi', name: 'CARNE asaeda', category: 'OMNI',
    lat: 34.677873, lng: 135.497649, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; tortillas, quesadillas, nachos, salsas and a curry are on the menu, and nothing says which tortillas are corn, so ask.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef and lamb steaks, chicken, gizzards, chili con carne and cheese throughout.',
    hours_raw: 'Mon, Tue, Thu, Fri, public holidays and the days before and after 18:00–23:00 (food L.O. 22:00, drinks 22:30); Sat 15:00–23:00 (L.O. 22:00/22:30); Sun 15:00–22:00 (L.O. 21:00/21:30); closed Wednesday (Tabelog). Reservations accepted; full on an October 2026 night. The shop asks that guests drink alcohol, and no children (heated-tobacco smoking area) (Tabelog). No cards or e-money; PayPay and Rakuten Pay (Tabelog). Service charge ¥200 per person (Tabelog). 20 seats, 30 standing; private hire up to 20 (Tabelog). English menu (Tabelog). Tabelog Asian/Ethnic WEST Top 100, 2026. Opened 22 June 2021 (Tabelog).',
    hours: { 0: W, 1: W, 3: W, 4: W, 5: SA, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi 1-2-5 (Nishi-ku) — 5 min north of Yotsubashi Stn, 6 min from Shinsaibashi Stn',
    cuisine: 'Mexican izakaya and lean-meat steak (20 seats) · signature carne asada: rare lean steak with tortillas, house salsa, chili con carne, jalapeño pickles and mashed potato · beef and lamb steaks from ¥3,000; courses from ¥6,000 (Tabelog); red-meat and lamb sirloin-cap course with all-you-can-drink ¥7,000 (October 2026), with tacos and a curry to finish · quesadilla (chili cheese) · pulled-chicken nachos · guacamole · spiced beans with sansho, spicy takuan, salt potato salad · shibire chicken with house sansho sauce · spiced chicken gizzards · ethnic salad · tequila, michelada, margarita soda, cardamom shochu · drinks from ¥400',
    website: null, gmaps: gm('CARNE asaeda 新町'), menu_url: null,
    notes: "[Mexican · Shinmachi, a carne-asada izakaya on Tabelog's 2026 ethnic Top 100] A glass-fronted cantina with a big sign and cacti outside, north of Yotsubashi, playing Latin music, that made Tabelog's Asian/Ethnic WEST Top 100 in 2026. The star is the carne asada: lean steak cooked rare, eaten on its own first, then wrapped in a tortilla with chili con carne, jalapeño pickles, mashed potato and fresh salsa. Around it, Mexican-izakaya plates with a Japanese streak: spiced beans with sansho, spicy takuan, shibire chicken in a sansho sauce, chili-cheese quesadilla, pulled-chicken nachos. The October 2026 course (¥7,000 with all-you-can-drink) pairs red-meat and lamb steaks and ends with a curry. One diner found the menu short for a long stay and suggests it as one stop on a crawl. Drinkers only, no children, PayPay rather than cards.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Mexican and steak izakaya that opened on 22 June 2021; Tabelog Asian/Ethnic WEST Top 100, 2026 (Tabelog).', philosophy: 'Lean-meat steaks, beef and lamb, with a twist on Mexican carne asada; Latin music and tequila for gatherings with friends (Tabelog, shop-provided).', specialty: 'Carne asada with tortillas; quesadillas; nachos.',
      anecdotes: [
        { text: '"The slightly rare, juicy red meat steak is grilled to perfection. First, I savored the meat on its own, then wrapped it in a tortilla with chili con carne, jalapeño pickles, mashed potatoes, and fresh salsa." — October 2026, Carne Asada.', source: R + 'B536741996/' },
        { text: '"I booked the assorted platter course featuring red meat steak and lamb sirloin cap, along with an all-you-can-drink option for JPY 7000… the curry that came out at the end was rich and delicious." — October 2026.', source: R + 'B538003632/' },
      ],
      japanese_sources_summary: '食べログ: CARNE asaeda、大阪市西区新町1-2-5、四ツ橋駅から北へ徒歩5分、心斎橋駅から徒歩6分、月・火・木・金・祝日・祝前日・祝後日18:00〜23:00 (L.O. 料理22:00、ドリンク22:30)、土15:00〜23:00、日15:00〜22:00 (L.O. 料理21:00、ドリンク21:30)、水曜休み、予約可、お酒を飲む方のみ、受動喫煙防止のため子供不可 (加熱式たばこの喫煙スペース)、カード・電子マネー不可、PayPay・楽天ペイ可、サービス料200円、20席 (立ち飲み30名)、貸切20名まで、英語メニューあり、食べログ アジア・エスニック WEST 百名店 2026、オープン日2021年6月22日。店の紹介: 牛と羊の赤身ステーキ、看板はカルネアサダ、トルティーヤとオリジナルのサルサとチリコンカン、ラテン音楽、テキーラ、ワカモレ、ナチョス、ケサディーヤ、ドリンク400円から、ステーキ3000円から、コース6000円から。口コミ(2026年9月〜10月): 大きな看板とサボテンのガラス張りの店、レアの赤身のカルネアサダとトルティーヤ、チリコンカン、ハラペーニョのピクルス、マッシュポテト、サルサ、sansho のスパイスビーンズ、スパイシーな takuan、sansho のソースのShibire Chicken、エスニックサラダ、チリチーズのケサディーヤ、プルドチキンのナチョス、スパイスの砂肝、ミチェラーダ、カルダモン焼酎、塩のポテトサラダ、赤身と羊のステーキのコース飲み放題つき7000円と締めのカレー、メニューが少なめという声、満席の夜も。',
      confidence: 'medium', sources: [TB, R + 'B536278533/', R + 'B536741996/', R + 'B537684231/', R + 'B537847822/', R + 'B538003632/', R + 'B538052624/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu; adults who drink only; PayPay, no cards (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町1-2-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目2番5号 (go) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B538003632/', R + 'B536741996/'],
    price_note: 'Course price from an October 2026 review; steak and course floors from the Tabelog listing.', last_checked: TODAY, items: [
      it('', '', 'Carne asada (steak, sides, tortillas)', 'from ¥3,000', 'Steak', 'ask', 'no', 'Tabelog listing ("steak from ¥3,000"); October 2026.', 'carne_asada'),
      it('', '', 'Red-meat and lamb sirloin-cap steak course with all-you-can-drink', '¥7,000', 'Course', 'ask', 'no', 'October 2026.', 'course'),
      it('', '', 'Quesadilla (chili cheese)', '', 'Mexican', 'ask', 'no', 'September–October 2026.', 'quesadilla'),
      it('', '', 'Pulled-chicken nachos', '', 'Mexican', 'ask', 'no', 'October 2026.', 'nachos'),
      it('', '', 'Shibire chicken with house sansho sauce', '', 'Small plates', 'ask', 'no', 'October 2026.', 'shibire'),
    ] }, {
    cuisine: 'メキシコ料理の居酒屋と赤身のステーキ (20席)・看板のカルネアサダ: レアの赤身のステーキにトルティーヤ、自家製サルサ、チリコンカン、ハラペーニョのピクルス、マッシュポテト・牛と羊のステーキ3000円から、コース6000円から (食べログ)・赤身と羊のステーキのコース、飲み放題つき7000円 (2026年10月)、タコスと締めのカレー・チリチーズのケサディーヤ・プルドチキンのナチョス・ワカモレ・sansho のスパイスビーンズ、スパイシーな takuan、塩のポテトサラダ・sansho のソースのShibire Chicken・スパイスの砂肝・エスニックサラダ・テキーラ、ミチェラーダ、マルガリータソーダ、カルダモン焼酎・ドリンク400円から',
    neighborhood: '西区新町1-2-5。四ツ橋駅から北へ徒歩5分、心斎橋駅から徒歩6分',
    gf_detail: '要確認。グルテンの情報なし。トルティーヤ、ケサディーヤ、ナチョス、サルサ、カレーがあり、トルティーヤがコーンかどうかの記載もないので確認を。',
    vegan_detail: 'ヴィーガンではありません。牛と羊のステーキ、鶏、砂肝、チリコンカン、チーズが中心。',
    notes: '[メキシコ料理・新町、食べログ エスニック百名店2026のカルネアサダの居酒屋] 四ツ橋の北、大きな看板とサボテンが目印のガラス張りの店で、ラテン音楽が流れ、2026年の食べログ アジア・エスニック WEST 百名店に選ばれた。主役はカルネアサダ。レアに焼いた赤身のステーキをまずはそのまま、それからトルティーヤでチリコンカン、ハラペーニョのピクルス、マッシュポテト、サルサと包んで。まわりには和の味も混ざるメキシカンの居酒屋の皿。sansho のスパイスビーンズ、スパイシーな takuan、sansho のソースのShibire Chicken、チリチーズのケサディーヤ、プルドチキンのナチョス。2026年10月のコース (飲み放題つき7000円) は赤身と羊のステーキで、締めはカレー。長居にはメニューが少なめで、はしごの一軒にという声も。お酒を飲む大人だけ、子供は不可、カードではなく PayPay。',
  });
}

// ================================================================ 青地
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27072189/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.aochi.info/';
  const MO = day(['17:00', '22:30']); const D = day(['17:00', '23:00']);
  put({
    id: 'osaka_aochi_shinmachi', name: '青地 (Aochi)', category: 'OMNI',
    lat: 34.676396, lng: 135.494074, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; simmered dishes, teriyaki, saikyo-yaki and soy-sauce glazes are usually soy-seasoned, and there are tempura, kara-age and katsu, so ask.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-led Japanese menu built on dashi, with chicken, duck and wagyu.',
    hours_raw: 'Mon 17:00–22:30; Thu–Sun 17:00–23:00; closed Tuesday and Wednesday (Tabelog; Tue–Wed closing since May 2022 per the shop site); closed over the New Year holidays (Tabelog). Reservations accepted and recommended; often full with regulars (January–October 2026 reviews). Cards (VISA, Master); no e-money or QR (Tabelog). 10% service charge (Tabelog). 16 seats: 8 at the counter, 8 at tables (Tabelog; the shop site says a 9-seat counter and two tables of four); non-smoking; children welcome; BYO drinks allowed (Tabelog). Opened 12 March 2013 (shop site; Tabelog).',
    hours: { 0: MO, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi 1-30-6, Daiichi Goda Bldg 1F (Nishi-ku) — north up Naniwa-suji from the Nishi-Ohashi crossing, then east at the second corner, about 3 min from Nishi-Ohashi Stn exit 2',
    cuisine: 'Seasonal Japanese à la carte at a counter and tables (16 seats) · long menu that changes with the day\'s stock; examples from the shop site: Akashi wild sea bream sashimi, Chiba bonito sashimi or tataki, hamo with plum, aori squid, hairy crab with sanbaizu, Kamo eggplant simmered with myoga, lotus-root manju, celery nuta, grilled extra-thick asparagus, simmered rockfish, gindara saikyo-yaki, anago kabayaki, young ayu tempura, Tajima chicken salt-grilled or fried, bite-size wagyu fillet katsu, natto zosui, anago rice · from 2026 reviews: matsutake dobin-mushi, bamboo shoots simmered in dashi, kizushi, raw oysters, sashimi, shishamo, mentaiko with karasumi, white sesame and celery salad, grilled duck with island garlic, seasonal tempura · sake, shochu, wine',
    website: SITE, gmaps: gm('青地 新町 和食'), menu_url: SITE + 'food.html',
    notes: "[Japanese · Shinmachi by Nishi-Ohashi, a regulars' counter for seasonal small dishes since 2013] A bright, clean Japanese restaurant a few minutes from Nishi-Ohashi Station, open since 2013, which sets out to serve seasonal food in a homely room without fuss. The menu is long and moves with the market: sashimi that one diner calls the highlight, kizushi that won another over at first bite, bamboo shoots simmered in dashi in spring, eggplant in summer, matsutake dobin-mushi in autumn, and plenty of small plates for sake, such as mentaiko with a little karasumi, or a white sesame and celery salad. Finish with the natto zosui, which a first-timer went home wanting to cook. Regulars, many older and local, keep it full, so book; one diner who waited was phoned the moment a table came free. Tabelog puts dinner at about ¥8,000–15,000 a head, plus 10% service.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Japanese restaurant that opened on 12 March 2013 (shop site). Diners mention both a chef and an owner (January 2026 review).', philosophy: '"Delicious dishes made with the ingredients of each season, enjoyed casually in a homely atmosphere" (shop site, translated).', specialty: 'Seasonal sashimi and small dishes; natto zosui.',
      anecdotes: [
        { text: '"I made a reservation for 7 PM, and [the shop] called me as soon as a table was available, so I rushed over. The owner apologized for the wait, but honestly, I was grateful for the call!" — May 2026, third visit.', source: R + 'B521065036/' },
        { text: '"I was also intrigued by the natto zosui (natto rice porridge) and decided to order it, and it was fantastic! I plan to try making it at home." — January 2026, first visit.', source: R + 'B524313296/' },
      ],
      japanese_sources_summary: '店のサイト: 和食の店 青地、四季折々の旬の食材を使った美味しいお料理をアットホームな雰囲気の中で気軽に、2013年3月12日開店、2022年5月から火・水曜定休、カウンター9席と4人掛けテーブル2卓、西大橋交差点よりなにわ筋を北へ二つ目の辻を東へ入った北側、西大橋駅2番出口より徒歩約3分。お料理の例: 明石の天然真鯛造り、千葉県産かつおの造り・叩き、はもの焼霜造り・落とし梅肉、あおりいかの造り、毛ガニ三杯酢、賀茂茄子みょうが煮、れんこんまんじゅう、セロリのぬたあえ、極太アスパラの塩焼、メバルの煮付け、銀だらの西京焼、穴子のかば焼、稚鮎の天ぷら・唐揚、但馬どりの塩焼・唐揚、一口和牛ヒレカツ、納豆ぞうすい、穴子めし、その日の仕入れ状況により価格の変動あり。食べログ: 大阪市西区新町1-30-6 第一合田ビル 1F、月17:00〜22:30、木〜日17:00〜23:00、火・水曜休み、年末年始休み、予約可、カード (VISA、Master) 可、電子マネー・QR不可、サービス料10%、16席 (カウンター8、テーブル8)、禁煙、子供可、持ち込み可、オープン日2013年3月12日。口コミ(2026年1月〜10月): いつも常連でいっぱい、年配の常連も、松茸の dobin-mushi、夏の茄子、shishamo、鶏、筍のだし煮、kizushi、生牡蠣、刺身、karasumi を少し合わせた mentaiko、白ごまとセロリのサラダ、島にんにくを添えた鴨の焼き物、雑炊、納豆ぞうすい、手ごろな季節の天ぷら、日本酒が豊富、席が空いたら電話をくれた、シェフもオーナーも感じがいい、一人8000円〜15000円ほど (食べログ)。',
      confidence: 'medium', sources: [SITE, SITE + 'food.html', TB, R + 'B521065036/', R + 'B521391760/', R + 'B521950543/', R + 'B522568625/', R + 'B524313296/', R + 'B534639336/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; Japanese menu, a regulars\' room (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町1-30-6 第一合田ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated January–October 2026; shop site live.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目30番6号 (go) 5m; OSM 青地 node/9236956428 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE + 'food.html', R + 'B521065036/', R + 'B524313296/'],
    price_note: 'The shop menu page lists prices but says they change with the day\'s stock; no prices recorded here.', last_checked: TODAY, items: [
      it('明石の天然真鯛造り', '', 'Akashi wild sea bream sashimi', '', 'Sashimi', 'ask', 'no', 'Shop site menu (undated).', 'tai'),
      it('納豆ぞうすい', '', 'Natto zosui', '', 'Rice', 'ask', 'no', 'Shop site menu; January 2026.', 'natto_zosui'),
      it('', '', 'Matsutake dobin-mushi', '', 'Seasonal', 'ask', 'no', 'October 2026.', 'dobinmushi'),
      it('', '', 'Seasonal tempura', '', 'Fried', 'no', 'no', 'August 2026.', 'tempura'),
      it('一口和牛ヒレカツ', '', 'Bite-size wagyu fillet katsu', '', 'Meat', 'no', 'no', 'Shop site menu (undated).', 'hirekatsu'),
    ] }, {
    cuisine: 'カウンターとテーブルの旬の和食のアラカルト (16席)・その日の仕入れで変わる豊富なメニュー。店のサイトの例: 明石の天然真鯛造り、千葉県産かつおの造り・叩き、はもの焼霜造り・落とし梅肉、あおりいかの造り、毛ガニ三杯酢、賀茂茄子みょうが煮、れんこんまんじゅう、セロリのぬたあえ、極太アスパラの塩焼、メバルの煮付け、銀だらの西京焼、穴子のかば焼、稚鮎の天ぷら、但馬どりの塩焼・唐揚、一口和牛ヒレカツ、納豆ぞうすい、穴子めし・2026年の口コミから: 松茸の dobin-mushi、筍のだし煮、kizushi、生牡蠣、刺身、shishamo、karasumi を合わせた mentaiko、白ごまとセロリのサラダ、島にんにくを添えた鴨、季節の天ぷら・日本酒、焼酎、ワイン',
    neighborhood: '西区新町1-30-6 第一合田ビル 1F。西大橋交差点からなにわ筋を北へ、二つ目の辻を東へ入った北側。西大橋駅2番出口から徒歩約3分',
    gf_detail: '要確認。グルテンの情報なし。煮物、照焼、西京焼、たれ焼きはふつう醤油で味つけし、天ぷら、唐揚、カツもあるので確認を。',
    vegan_detail: 'ヴィーガンではありません。だしを使う魚中心の和食で、鶏、鴨、和牛も。',
    notes: '[和食・新町、西大橋の近く、2013年からの常連の集まる旬の一品の店] 西大橋駅から数分の明るく清潔な和食の店で、2013年から。四季折々の旬の食材の料理を、アットホームな雰囲気で気軽に、という店。メニューは豊富で市場とともに変わる。いちばんは刺身という声、ひと口で納得したというkizushi、春は筍のだし煮、夏は茄子、秋は松茸の dobin-mushi。karasumi を少し合わせた mentaikoや白ごまとセロリのサラダなど、日本酒に合う小皿もたくさん。締めは納豆ぞうすいで、初めての人が家でも作ってみたくなったというほど。年配の地元の常連が多く、いつも満席に近いので予約を。待っていた人には席が空いた瞬間に電話をくれたという声も。食べログでは一人8000円〜15000円ほど、サービス料10%。',
  });
}

save();
