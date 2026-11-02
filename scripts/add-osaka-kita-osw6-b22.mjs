// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), circle umeda, Tabelog id odd; worker osw6, batch 22.
//   + 梅田 ふぐ乃介 泳ぎふぐ 鱧料理専門店 Umeda Fugu no Suke (wholesaler-run fugu, hamo and crab house near Ohatsu Tenjin)
//   + 北新地たゆたゆ 本店 Kitashinchi Tayutayu Honten (Kanto-style yakiton over binchotan, Kitashinchi side of 堂島)
//   + ふぐ料理 前 Fugu Ryori Mae (fugu with an in-house tank, Kitashinchi side of 堂島)
//   + 串しゃぶ 菜彩 Kushi Shabu Saisai (skewered shabu-shabu of Toyooka vegetables, Kitashinchi)
//   Picked with `queue.mjs osaka-kita next core 80 umeda` (2026-11-02, after b21): first odd ids 27093647, 27050149,
//   27121861, 27097533. None is in data/osaka.json (grep by id, name and address, 2026-11-02).
//   Chain check: Tayutayu has a second shop, Kitashinchi Tayutayu DX (堂島1-5-35; web search), and a September 2026 diner
//   says Kawabata Co. runs "several locations throughout Osaka"; none is in data and no fast expansion was found, so the
//   Honten is drafted (flagged in the report). Fugu no Suke is wholesaler-run with no other shop found (web search); Mae
//   and Saisai show no other shop.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('osaka-kita', TODAY, 'osw6-22');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 梅田 ふぐ乃介
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27093647/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:00', '23:00']);
  put({
    id: 'osaka_umeda_fugu_no_suke', name: '梅田 ふぐ乃介 泳ぎふぐ 鱧料理専門店 (Umeda Fugu no Suke Oyogi Fugu Hamo Ryori Senmon Ten)', category: 'OMNI',
    lat: 34.699522, lng: 135.503365, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: courses include fugu kara-age, soft-roe tempura and hamo tempura; ponzu with the sashimi and hot pot.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fugu, hamo and crab courses.',
    hours_raw: 'Mon, Wed–Sun and holidays 16:00–23:00 (last order 22:30); closed Tuesdays (Tabelog). The same listing also says closing days are not fixed, closed only on January 1. December to mid-January 12:00–23:00; December 31–January 3 12:00–20:00 (Tabelog). Same-day cancellations charged in full (Tabelog). Appetizer charge ¥400 (Tabelog). Opened July 15, 2016 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), PayPay; no e-money (Tabelog). 50 seats, all at sunken horigotatsu tables with semi-private rooms; banquets up to 55; wheelchair accessible; smoking allowed (Tabelog; January 2026).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sonezaki, ステージレオパードビル 1F, near Ohatsu Tenjin — 7 min from Higashi-Umeda Stn',
    cuisine: 'Fugu, hamo and crab run by a fugu wholesaler: live tiger fugu from the tank as tessa and tecchiri at reasonable prices; snow crab (Tabelog) · courses (Tabelog, tax included): Ninosuke 7 dishes with teppanyaki and grilled fugu ¥8,228; Fugu no Suke 8 dishes ¥9,328; fugu and crab 9 dishes ¥9,680; 120-minute all-you-can-drink +¥2,000 before tax · snow crab feast course ¥8,778 with all-you-can-drink ¥2,200; soft-roe sashimi and grilled soft roe ¥1,980 each (February 2026) · a full course: skin, sashimi, grilled soft roe, hot pot, grilled fugu, kara-age, soft-roe tempura, zosui, dessert, all-you-can-drink hirezake (February 2026) · hamo course from June: hamo nanban-zuke, tempura, hot pot (2026) · a 10th-anniversary course (October 2026)',
    website: null, gmaps: gm('梅田 ふぐ乃介'), menu_url: null,
    notes: "[Fugu · Umeda, Sonezaki, a wholesaler's fugu house] A fifty-seat fugu restaurant near Ohatsu Tenjin, run by a fugu wholesaler since 2016, with sunken horigotatsu seating throughout and semi-private rooms for groups. Live tiger fugu from the tank goes into tessa, tecchiri, charcoal-grilled fugu and kara-age, with crab courses in winter and hamo from June; courses run about ¥8,200–9,700, and all-you-can-drink can include hirezake. A regular on a tenth visit praises the value; others found the fugu farmed and ordinary, the snow crab frozen, and the sake list short. Smoking is allowed, which bothered one non-smoker.",
    chef_bio: { chef_name: null, roles: ['Chefs (unnamed)', 'Manager (unnamed)'], origin: null, background: 'Shop text (Tabelog): a specialist in fugu, hamo and crab, directly managed by a wholesaler; skilled chefs prepare live tiger fugu from the tanks at reasonable prices; tessa and tecchiri; carefully selected snow crab; spacious horigotatsu seating. Opened July 15, 2016; a 10th-anniversary course in 2026.', philosophy: null, specialty: 'Tecchiri; grilled fugu.',
      anecdotes: [
        { text: '"The aoiara was impressively large, and the fugu that came out was incredibly fresh. It was still wriggling" — January 2025.', source: R + 'B483102851/' },
        { text: '"Although the fugu was farmed rather than wild, I found it to be fresh. As for the taste, it was just as you might expect—average." — January 2026.', source: R + 'B520984265/' },
        { text: '"I also had the snow crab, but it was disappointing to find that it was clearly frozen." — July 2026.', source: R + 'B534066567/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B483102851/', R + 'B485257176/', R + 'B520984265/', R + 'B522139618/', R + 'B522208459/', R + 'B523318884/', R + 'B524206423/', R + 'B532285844/', R + 'B534066567/', R + 'B537160817/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Group-friendly horigotatsu rooms (2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曾根崎1-7-20 ステージレオパードビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎一丁目7番20号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B523318884/'],
    price_note: 'Courses from the Tabelog listing (tax included); extras from a February 2026 review; ¥400 appetizer charge.', last_checked: TODAY, items: [
      it('', '', 'Ninosuke course, 7 dishes, with teppanyaki and grilled fugu', '¥8,228', 'Course', 'no', 'no', 'Tabelog listing.', 'ninosuke'),
      it('', '', 'Fugu no Suke course, 8 dishes', '¥9,328', 'Course', 'no', 'no', 'Tabelog listing.', 'fugunosuke'),
      it('', '', 'Fugu and crab course, 9 dishes', '¥9,680', 'Course', 'no', 'no', 'Tabelog listing.', 'fugu_crab'),
      it('', '', 'Grilled soft roe with sauce', '¥1,980', 'À la carte', 'ask', 'no', 'February 2026 review.', 'grilled_shirako'),
    ] }, {
    cuisine: 'ふぐの問屋が営むふぐ、鱧、カニの専門店: 水槽の活きとらふぐのてっさとてっちりを手ごろな値段で、ズワイガニも (食べログ)・コース (食べログ、税込): 鉄板焼きと焼きふぐの7品のNinosuke コース8,228円、8品のふぐ乃介コース9,328円、ふぐとカニの9品9,680円、120分の飲み放題は税抜2,000円・ズワイガニのコース8,778円、飲み放題2,200円、白子の刺身と焼き白子のたれ各1,980円 (2026年2月)・フルコース: 皮、刺身、焼き白子、鍋、焼きふぐ、唐揚げ、白子の天ぷら、雑炊、デザート、ひれ酒も飲み放題 (2026年2月)・6月からの鱧のコース: 鱧の南蛮漬け、天ぷら、鍋 (2026年)・10周年のコース (2026年10月)',
    neighborhood: '曽根崎、お初天神の近くのステージレオパードビル 1階。東梅田駅から徒歩7分',
    gf_detail: 'グルテンフリーではありません。コースにはふぐの唐揚げ、白子の天ぷら、鱧の天ぷらがあり、刺身と鍋はポン酢で。',
    vegan_detail: 'ヴィーガンではありません。ふぐ、鱧、カニのコース。',
    notes: '[ふぐ・梅田曽根崎、問屋のふぐ料理] お初天神の近くにある50席のふぐ料理の店で、2016年からふぐの問屋が営む。席はすべて掘りごたつで、グループ向けの半個室も。水槽の活きとらふぐをてっさ、てっちり、炭火の焼きふぐ、唐揚げにし、冬はカニ、6月からは鱧のコースも。コースは8,200〜9,700円ほどで、飲み放題にはひれ酒も入る。10回通う常連はお得さをほめ、養殖でふつうの味、ズワイガニは冷凍、日本酒が少ないという声も。喫煙可で、たばこを吸わない人には気になったという声も。',
  });
}

// ================================================================ 北新地たゆたゆ 本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27050149/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '01:00']);
  put({
    id: 'osaka_kitashinchi_tayutayu_honten', name: '北新地たゆたゆ 本店 (Kitashinchi Tayutayu Honten)', category: 'OMNI',
    lat: 34.695995, lng: 135.497671, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Skewers come with salt or a rich sauce; motsu nikomi and tsukune with tare are on the menu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a pork-skewer shop; charcoal-grilled seasonal vegetables are on the menu.',
    hours_raw: 'Mon–Sat 17:00–1:00 (last order 0:00); closed Sundays, and Mondays that are holidays; open on other holidays (Tabelog). Stays may be limited to 2 hours when busy (Tabelog). Appetizer charge ¥550 (Tabelog). Cards (VISA, Master, JCB, AMEX), PayPay; no e-money (Tabelog). 20 seats at tables and the counter (Tabelog). Often fully booked, even on weekdays (August 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kitashinchi side of 堂島, 廣ビル 1F — 5 min from Kitashinchi, Nishi-Umeda and Oebashi Stns',
    cuisine: 'Yakiton, grilled pork skewers, rare in Kansai, over Kishu binchotan; low-temperature-cooked pork "sashimi"; charcoal-grilled seasonal vegetables; over 40 shochu bought direct from distilleries, and sake (Tabelog) · courses (Tabelog, tax included): ¥4,800 with motsu nikomi, five kinds of pork sashimi, five skewers, tsukune and a closing dish; ¥5,800 with Kawachi duck tataki instead of tsukune · Chami-ton, a Kagoshima brand pork, ground fresh (September 2026) · sashimi of gatsu and kobukuro; five-skewer sets of heart, belly, outside skirt, throat, shiro; tsukune with egg yolk and sauce, or with cheese; liver with green-onion salt and sesame oil; grilled tongue; tsukune rice bowl (2026) · a mushroom potage as the appetizer (2026) · Aka boshi; Chita highball; barley shochu Ten no Kokuin pre-mixed with water (2026)',
    website: null, gmaps: gm('北新地たゆたゆ 本店'), menu_url: null,
    notes: "[Yakitori · Kitashinchi, Kanto-style yakiton over binchotan] A twenty-seat yakiton counter in Kitashinchi, the main shop of a small Osaka group that a diner credits with starting the city's yakiton boom about fifteen years ago. Fresh pork skewers are grilled over Kishu binchotan, with a five-kind platter of low-temperature pork sashimi (gatsu, kobukuro and more), liver with green-onion salt, tsukune under egg yolk, and over forty shochu. Courses are ¥4,800 and ¥5,800; à la carte runs about ¥5,000–7,000 with drinks, good value for the area. Often full even on weekdays, open to 1 am; a ¥550 appetizer charge.",
    chef_bio: { chef_name: null, roles: ['Owner (reviewers say "Mr. Kawabata" of Kawabata Co.)', 'Grill staff (unnamed)'], origin: null, background: 'Shop text (Tabelog): yaki-ton, rare in Kansai, focused on freshness and careful preparation; low-temperature pork sashimi; over 40 shochu from distilleries; the name "Tayutayu" means "slowly", so guests can forget the time. A September 2026 diner: run by Mr. Kawabata of Kawabata Co., Ltd., this is the main branch with several locations in Osaka; the owner trained as a Western-cuisine chef and opened a yakiton specialist about 15 years ago, when it was still rare; the shop has been selected for the Michelin Bib Gourmand (the diner\'s account). A second shop, Kitashinchi Tayutayu DX, is at 堂島1-5-35 (web search).', philosophy: '"Tayutayu" means taking your time (Tabelog).', specialty: 'Pork sashimi platter; yakiton.',
      anecdotes: [
        { text: '"The gatsu sashimi was incredibly delicious, reminiscent of roast beef." — August 2026.', source: R + 'B534817301/' },
        { text: '"The sashimi platter and grilled assortment were all delicious without any misses." — September 2026.', source: R + 'B282973913/' },
        { text: '"My personal recommendation is the \'Limited Liver with Green Onion Salt and Sesame Oil.\' ... I ended up ordering it three times (laughs)." — October 2026.', source: R + 'B538200231/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B282973913/', R + 'B534086911/', R + 'B534817301/', R + 'B534963500/', R + 'B536502987/', R + 'B537375215/', R + 'B537584079/', R + 'B537856840/', R + 'B538160934/', R + 'B538200231/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter and tables; staff recommend shochu (2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂島1-4-8 廣ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島一丁目4番8号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Courses from the Tabelog listing (tax included); ¥550 appetizer charge.', last_checked: TODAY, items: [
      it('', '', 'Omakase course: motsu nikomi, pork sashimi ×5, skewers ×5, tsukune, closing dish', '¥4,800', 'Course', 'ask', 'no', 'Tabelog listing.', 'course_4800'),
      it('', '', 'Omakase course with Kawachi duck tataki', '¥5,800', 'Course', 'ask', 'no', 'Tabelog listing.', 'course_5800'),
      it('', '', 'Pork sashimi, five kinds (half portion possible)', '', 'Sashimi', 'ask', 'no', 'Tabelog; September 2026 review.', 'pork_sashimi'),
    ] }, {
    cuisine: '関西ではめずらしいやきとん、Kishu の備長炭で焼く豚の串、低温調理の豚の刺身風、炭火で焼く旬の野菜、蔵元から直接仕入れる焼酎40種以上と日本酒 (食べログ)・コース (食べログ、税込): もつ煮込み、豚の刺身5種盛り、串5本、つくね、締めの4,800円、つくねの代わりにKawachi 鴨のたたきの5,800円・鹿児島のブランド豚 Chami-ton を新鮮なうちに挽く (2026年9月)・ガツとコブクロの刺身、ハツ、バラ、ハラミ、のど、シロの串5本盛り、卵黄とたれのつくね、チーズのつくね、レバーのねぎ塩ごま油、タン焼き、つくね丼 (2026年)・お通しはきのこのポタージュ (2026年)・Aka boshi、Chita のハイボール、麦焼酎 Ten no Kokuin の前割り (2026年)',
    neighborhood: '堂島の北新地寄り、廣ビル 1階。北新地駅、西梅田駅、大江橋駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。串は塩か濃いたれ、もつ煮込みやたれのつくねもある。',
    vegan_detail: 'ヴィーガンではありません。豚の串の店で、炭火の旬の野菜もある。',
    notes: '[焼き鳥・北新地、備長炭の関東風やきとん] 北新地にある20席のやきとんの店で、15年ほど前に大阪のやきとんブームを始めたという小さなグループの本店。新鮮な豚の串をKishu の備長炭で焼き、ガツやコブクロなど5種の低温調理の豚の刺身盛り、レバーのねぎ塩、卵黄をのせたつくね、40種以上の焼酎。コースは4,800円と5,800円、アラカルトなら飲み物込みで5,000〜7,000円ほどで、このあたりではお得。平日も満席になりがち、深夜1時まで、お通し550円。',
  });
}

// ================================================================ ふぐ料理 前
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27121861/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:00', '23:00']);
  put({
    id: 'osaka_fugu_ryori_mae', name: 'ふぐ料理 前 (Fugu Ryori Mae)', category: 'OMNI',
    lat: 34.696036, lng: 135.497946, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: courses include fugu kara-age; ponzu with the skin and hot pot.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fugu course.',
    hours_raw: 'Mon–Sat, holidays and days before and after holidays 11:30–15:00 and 17:00–23:00; closed Sundays and December 31–January 3 (Tabelog). Opened March 1, 2020 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), IC cards, iD, QUICPay; no QR (Tabelog). 18 seats: 6 at the counter, 8 at tables and a private room for 4; non-smoking (Tabelog). Staff prepare and serve the hot pot (2023–2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kitashinchi side of 堂島, 谷安ルナビル 1F, on Kitashinchi Nakadori — 3 min from Kitashinchi Stn exit 11-23',
    cuisine: 'Fugu of over 2 kg, domestic, kept in the shop\'s own tank so it is served all year: tecchiri, kara-age, charcoal-grilled fugu; hirezake and about 8 sakes (Tabelog) · lunch tecchiri course of 6 dishes with tessa, kara-age and zosui ¥6,600 (Tabelog) · dinner tecchiri course ¥15,400 (May 2026), with skin in ponzu and momiji oroshi, seared fugu chunks, sashimi, kara-age, hot pot, zosui, and a fugu-shaped monaka or ice cream (2025–2026) · grilled fugu cooked at the counter (2026) · shirako sake ¥3,000 a glass (December 2023)',
    website: null, gmaps: gm('ふぐ料理 前 堂島'), menu_url: null,
    notes: "[Fugu · Kitashinchi, tecchiri served for you] An eighteen-seat fugu restaurant on Kitashinchi's Nakadori, open since 2020, with a big tank of domestic fugu over 2 kg by the counter, so it serves fugu all year. Staff cook and portion the tecchiri at the table, which regulars like for business dinners and conversation; the course runs from skin in ponzu and thick sashimi to kara-age, charcoal-grilled fugu done at the counter, zosui and a fugu-shaped monaka. Lunch tecchiri is ¥6,600, dinner about ¥15,000; hirezake is the drink. One diner found the dishes repetitive, and a noisy table spoilt one lunch.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), grills at the counter (2026)', 'Staff (unnamed)'], origin: null, background: 'Shop text (Tabelog): domestic fugu over 2 kg as the main ingredient, kept under strict management in the shop\'s own tank so fresh fugu is available all year; tecchiri, kara-age and grilled fugu; hirezake and about 8 sakes. Opened March 1, 2020. Diners: the owner\'s warm smile and hospitality (June 2026); the owner grills fugu at the counter and explains each part (October 2026).', philosophy: 'Freshness and size (Tabelog).', specialty: 'Tecchiri; grilled fugu.',
      anecdotes: [
        { text: '"the staff serves everything, so you can just relax and enjoy your meal." — December 2025.', source: R + 'B475788907/' },
        { text: '"Upon entering, I noticed a large aquarium near the counter with big fugu swimming inside." — September 2026.', source: R + 'B535709412/' },
        { text: '"Even the dessert, a cute monaka shaped like a fugu, was delightful." — May 2026.', source: R + 'B530755033/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B475788907/', R + 'B503400606/', R + 'B517872971/', R + 'B520134043/', R + 'B530755033/', R + 'B530796319/', R + 'B533136186/', R + 'B535356542/', R + 'B535709412/', R + 'B537763707/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff serve the hot pot and explain the cuts (2025–2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂島1-4-6 谷安ルナビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島一丁目4番6号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B530755033/'],
    price_note: 'Lunch course from the Tabelog listing; dinner course from a May 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Lunch tecchiri course, 6 dishes', '¥6,600', 'Lunch', 'no', 'no', 'Tabelog listing.', 'lunch_tecchiri'),
      it('', '', 'Tecchiri course (dinner)', '¥15,400', 'Course', 'no', 'no', 'May 2026 review.', 'dinner_tecchiri'),
    ] }, {
    cuisine: '店の水槽で管理する2kg以上の国産ふぐを一年中: てっちり、唐揚げ、炭火の焼きふぐ、ひれ酒と日本酒8種ほど (食べログ)・昼のてっちりコース6品 (てっさ、唐揚げ、雑炊) 6,600円 (食べログ)・夜のてっちりコース15,400円 (2026年5月)、皮のポン酢ともみじおろし、炙ったふぐ、刺身、唐揚げ、鍋、雑炊、ふぐの形の最中かアイス (2025〜2026年)・カウンターで焼く焼きふぐ (2026年)・白子酒は1杯3,000円 (2023年12月)',
    neighborhood: '堂島の北新地寄り、Kitashinchi Nakadori の谷安ルナビル 1階。北新地駅11-23出口から徒歩3分',
    gf_detail: 'グルテンフリーではありません。コースにはふぐの唐揚げがあり、皮と鍋はポン酢で。',
    vegan_detail: 'ヴィーガンではありません。ふぐのコース。',
    notes: '[ふぐ・北新地、てっちりを取り分けてくれる店] 北新地の中通りにある18席のふぐ料理の店で、2020年から。カウンターのそばの大きな水槽に2kg以上の国産ふぐがいて、一年中ふぐを出す。てっちりは店の人が鍋を作って取り分けてくれるので、接待や会話を楽しみたいときに好評。コースは皮のポン酢、厚い刺身から唐揚げ、カウンターで炭火で焼く焼きふぐ、雑炊、ふぐの形の最中まで。昼のてっちりは6,600円、夜は15,000円ほど、飲み物はひれ酒。料理が単調という声や、ほかの客がうるさかったという昼の声も。',
  });
}

// ================================================================ 串しゃぶ 菜彩
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27097533/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '01:00']);
  put({
    id: 'osaka_kushi_shabu_saisai', name: '串しゃぶ 菜彩 (Kushi Shabu Saisai)', category: 'OMNI',
    lat: 34.696951, lng: 135.500656, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Broths include salt-soy, sukiyaki, Chinese and seasonal ones; the course ends with udon, pho or Tianjin rice; fried dishes too.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: vegetables are wrapped in wagyu or pork, and the broths include clam. Tabelog lists vegetarian options, with no detail.',
    hours_raw: 'Mon–Sat, days before and after holidays 17:00–1:00 (food last order 0:00, drinks 0:30); closed Sundays and holidays (Tabelog). The shop text says it is open until 3 am; the hours list says 1:00. Groups of 7 or more by phone (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), PayPay; no e-money (Tabelog). 29 seats with a counter and private rooms for 2–8; private hire up to 50; smoking allowed (Tabelog). Orders are placed by showing a cube at the table (May 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kitashinchi, 北新地プラザビル 1F, at the back of the building — 1 min from Kitashinchi Stn',
    cuisine: 'Kushi shabu, skewers of domestic vegetables from farmers in Toyooka wrapped in wagyu or mochi pork, cooked in your choice of broth, under the motto "food and medicine are one" (Tabelog) · courses (Tabelog, tax included): food only ¥5,500; with all-you-can-drink ¥7,500; with premium drinks ¥8,000; choose two broths from salt-soy, Chinese soup, clam (+¥300), sukiyaki (+¥200) and two seasonal ones; negi-shabu course of wagyu or mochi pork with green onion · seasonal broths in 2025–2026: negi-shio, chige, lemon, Japanese-style, mala, mapo · obanzai appetizers; curry chicken tulip; Kitashinchi honey sorbet; udon, pho or Tianjin rice to finish (2025–2026) · an all-you-can-drink course ¥6,500 (June 2026)',
    website: null, gmaps: gm('串しゃぶ 菜彩 北新地'), menu_url: null,
    notes: "[Hot pot · Kitashinchi, vegetable skewers in shabu-shabu] A twenty-nine-seat hot-pot shop at the back of a building right by Kitashinchi Station, built around kushi shabu: skewers of vegetables from Toyooka farms wrapped in wagyu or mochi pork, swished in two broths you choose, from clam to mala or lemon. Courses with obanzai, fried dishes and a noodle or rice finish are ¥5,500, or ¥7,500–8,000 with drinks; a curry-spiced chicken tulip is the side to order. Diners like the vegetables and broths; one found the skewers slow to cook and the private room cramped. Private rooms from two; smoking allowed; open to 1 am.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null, background: 'Shop text (Tabelog): "food and medicine are one"; kushi shabu of high-quality domestic vegetables wrapped in wagyu and mochi pork, eaten with flavourful broths; fresh vegetables directly from farmers in Toyooka; private rooms from 2 guests; open until 3 am, 1 minute from Kitashinchi Station. A September 2025 diner was greeted by the owner, an acquaintance.', philosophy: 'Food and medicine are one (Tabelog).', specialty: 'Kushi shabu; curry chicken tulip.',
      anecdotes: [
        { text: '"What I love most about this restaurant is the abundance of vegetables." — June 2026.', source: R + 'B528949758/' },
        { text: '"If you only dip them briefly, the vegetables remain raw, so you have to wait quite a while, which made me question the purpose of the skewers." — May 2025.', source: R + 'B507536634/' },
        { text: '"the jiji clam broth comes with shelled clams, giving it a comforting feel." — February 2026.', source: R + 'B521971034/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B507536634/', R + 'B509021923/', R + 'B514016510/', R + 'B521971034/', R + 'B528949758/', R + 'B530503934/', R + 'B531790261/', R + 'B533230312/', R + 'B535874516/', R + 'B537380631/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by cube at the table (May 2025). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎新地1-7-3 北新地プラザビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目7番3号 (go) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Courses from the Tabelog listing (tax included).', last_checked: TODAY, items: [
      it('', '', 'Kushi shabu standard course, 8 items (food only)', '¥5,500', 'Course', 'ask', 'no', 'Tabelog listing.', 'course_food'),
      it('', '', 'Kushi shabu standard course with all-you-can-drink', '¥7,500', 'Course', 'ask', 'no', 'Tabelog listing.', 'course_ayce'),
      it('', '', 'Kushi shabu standard course with premium all-you-can-drink', '¥8,000', 'Course', 'ask', 'no', 'Tabelog listing.', 'course_premium'),
    ] }, {
    cuisine: '串しゃぶ: Toyooka の農家から直送の国産野菜を和牛かもち豚で巻いた串を、選んだだしで、食事と医療は同じく大切という考え (食べログ)・コース (食べログ、税込): 料理のみ5,500円、飲み放題つき7,500円、プレミアム飲み放題つき8,000円、だしは塩醤油、中華スープ、あさり (+300円)、すき焼き (+200円)、季節の2種から2つ、和牛かもち豚のねぎしゃぶのコースも・2025〜2026年の季節のだし: ねぎ塩、チゲ、レモン、和風、麻辣、麻婆・おばんざいの前菜、カレー味のチューリップ、北新地のはちみつのシャーベット、締めはうどん、フォー、天津飯 (2025〜2026年)・飲み放題つきのコース6,500円 (2026年6月)',
    neighborhood: '北新地、北新地プラザビル 1階の奥。北新地駅から徒歩1分',
    gf_detail: '要確認。グルテンの情報なし。だしは塩醤油、すき焼き、中華、季節のもの、締めはうどん、フォー、天津飯、揚げ物もある。',
    vegan_detail: 'ヴィーガンではありません。野菜は和牛か豚で巻き、だしにはあさりも。食べログにはベジタリアン向けのメニューありとあるが、詳しい説明はない。',
    notes: '[鍋・北新地、野菜の串のしゃぶしゃぶ] 北新地駅のすぐそば、ビルの奥にある29席の鍋の店で、看板は串しゃぶ: Toyooka の農家の野菜を和牛かもち豚で巻いた串を、あさりから麻辣やレモンまで選べる2種のだしにくぐらせる。おばんざい、揚げ物、締めの麺かご飯までのコースは5,500円、飲み放題つきで7,500〜8,000円、サイドにはカレー味のチューリップを。野菜とだしが好評で、串に火が通るのに時間がかかる、個室が狭いという声も。個室は2人から、喫煙可、深夜1時まで。',
  });
}

save();
