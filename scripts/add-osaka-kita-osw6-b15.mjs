// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), circle umeda, Tabelog id odd; worker osw6, batch 15.
//   + 西梅田 らんぷ Nishi Umeda Ranpu (pork-and-bonito shoyu ramen, Fukushima 6-chome; no ramen block, see below)
//   + COMMA, 梅田店 Comma Umeda (seventh-floor Italian dining bar with a night view, Doyama)
//   + 串揚げとワイン Ohana 北新地店 Kushiage to Wine Ohana Kitashinchi Ten (creative kushiage and wine, open to 3 am)
//   + 北新地 天婦羅 ぼん次 Kitashinchi Tempura Bonji (tempura counter of the Kushikatsu Bon group; tonkatsu lunch)
//   - 鮨あまと 別邸 北新地 27154601 skipped: a same-concept (sushi) branch of 鮨 あまと, already in data as Sushi Amato Ura Nanba.
//   Picked with `queue.mjs osaka-kita next core 80 umeda` (2026-11-02, after b14): odd ids in order 27098217, 27154601,
//   27130481, 27069587, 27114159. None of the four is in data/osaka.json (grep by id, name and address, 2026-11-02).
//   Chain check: COMMA, 梅田店 is the only COMMA found; COMMA,DOWN is a separate sister brand (web search). Ohana has one
//   same-concept sister, Ohana Kitahama (Tabelog remarks); neither is in data. Bonji is a tempura sister of the Kushikatsu
//   Bon / Kushiage Kitchen Dan kushikatsu shops (Tabelog shop text); a different format and none in data, so drafted.
//   Ranpu: Tabelog genre Ramen, but no source describes broth oiliness or aroma, so the ramen block is left off.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw6-15');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27154601', '鮨あまと 別邸 北新地: same-concept sushi branch of 鮨 あまと, already in data (osaka: Sushi Amato Ura Nanba).');

// ================================================================ 西梅田 らんぷ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270108/27098217/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00'], ['17:00', '22:00']);
  put({
    id: 'osaka_nishi_umeda_ranpu', name: '西梅田 らんぷ (Nishi Umeda Ranpu)', category: 'OMNI',
    lat: 34.700168, lng: 135.489695, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles in a soy-sauce broth; kara-age and gyoza on the side.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork and bonito broth, pork chashu.',
    hours_raw: 'Daily 11:00–15:00 and 17:00–22:00; closing days not fixed, posted on Instagram @lamp.nishiumeda (Tabelog). Opened May 15, 2017 (Tabelog). Ticket machine (October 2026). Cash only: no cards, e-money or QR (Tabelog). 16 seats: 6 at the counter, three tables for 2, one for 4; non-smoking; no reservations (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Fukushima 6-chome, a roadside shop west of Nishi-Umeda — 7–8 min from JR Osaka and Hankyu Umeda',
    cuisine: 'Shoyu ramen of Kagoshima pork and thick-shaved bonito with soy sauces from around Japan; thin noodles of 100% domestic wheat from Menya Teikaku in Kyoto (October 2026) · pork shoyu ramen ¥920, the most popular bowl, ringed with thin flower-shaped chashu, green and white onion (2026 reviews) · seasoned egg +¥100; kara-age set +¥320 (October 2026); rice; gyoza (October 2026) · pork ginger aemen (brothless) with thicker noodles ¥980 (October 2026) · tsukemen (Tabelog; September 2026) · draft beer ¥500 (October 2026) · pepper, gochujang and garlic on the table',
    website: 'https://tkanai1.wixsite.com/mysite-1', gmaps: gm('西梅田 らんぷ 福島6-11-14'), menu_url: null,
    notes: "[Ramen · Fukushima, west of Nishi-Umeda, flower-ring chashu] A sixteen-seat roadside ramen shop a short walk west of Nishi-Umeda, open since 2017. The ¥920 pork shoyu ramen is the one to order: a light but savoury broth of Kagoshima pork and thick-shaved bonito, thin noodles from Kyoto's Menya Teikaku, and tender thin chashu laid round the rim like a flower. Add a seasoned egg, a ¥320 kara-age-and-rice set or gyoza; there is also a ginger-pork aemen and tsukemen. Buy a ticket at the machine; cash only. Weekday lunch at 11 had no queue in October 2026, and diners praise the polite, tidy service.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null, background: 'Opened May 15, 2017 (Tabelog). An October 2026 diner quotes the shop\'s motto, "Bringing light to the city with a bowl of ramen", and describes Kagoshima pork, thick-shaved bonito, soy sauces from across Japan, and noodles of 100% domestic wheat from Menya Teikaku in Kyoto.', philosophy: '"Bringing light to the city with a bowl of ramen" (as quoted, October 2026).', specialty: 'Pork shoyu ramen.',
      anecdotes: [
        { text: '"Although the Pork Shoyu Ramen isn\'t a chashu ramen, I was delighted to find it topped with beautiful flower-shaped chashu." — September 2026.', source: R + 'B535909912/' },
        { text: '"The chashu was beautifully presented, resembling a rafflesia, and the shoyu ramen was light yet rich in flavor." — October 2026.', source: R + 'B537015462/' },
        { text: '"The broth was labeled as pork shoyu, but it had a clear quality and was very tasty." — September 2026.', source: R + 'B536204374/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B535909912/', R + 'B536204374/', R + 'B536225707/', R + 'B537015462/', R + 'B537021668/', R + 'B537035362/', R + 'B537303635/', R + 'B537387731/', R + 'B537710422/', R + 'B537842316/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; attentive staff (2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市福島区福島6-11-14',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市福島区福島六丁目11番14号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537035362/', R + 'B537387731/', R + 'B537710422/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Pork shoyu ramen', '¥920', 'Ramen', 'no', 'no', 'October 2026 reviews.', 'pork_shoyu'),
      it('', '', 'Pork ginger aemen (brothless)', '¥980', 'Ramen', 'no', 'no', 'October 2026 review.', 'ginger_aemen'),
      it('', '', 'Seasoned egg topping', '¥100', 'Toppings', '', 'no', 'October 2026 review.', 'ajitama'),
      it('', '', 'Kara-age set (add-on)', '+¥320', 'Sides', 'no', 'no', 'October 2026 reviews.', 'karaage_set'),
      it('', '', 'Draft beer', '¥500', 'Drinks', 'no', '', 'October 2026 reviews.', 'draft_beer'),
    ] }, {
    cuisine: '鹿児島の豚と厚削りのかつお節、全国の醤油の醤油ラーメン、麺は京都の Menya Teikaku の国産小麦100%の細麺 (2026年10月)・いちばん人気の豚醤油らーめん920円、花のように並べた薄いチャーシュー、青ねぎと白ねぎ (2026年の口コミ)・味玉100円、唐揚げセット+320円 (2026年10月)、ご飯、餃子 (2026年10月)・太めの麺のポークジンジャー和えめん980円 (2026年10月)・つけ麺 (食べログ、2026年9月)・生ビール500円 (2026年10月)・卓上にこしょう、コチュジャン、にんにく',
    neighborhood: '福島6丁目、西梅田の西の道沿い。JR大阪駅と阪急梅田駅から徒歩7〜8分',
    gf_detail: 'グルテンフリーではありません。醤油のスープに小麦の麺、サイドに唐揚げと餃子。',
    vegan_detail: 'ヴィーガンではありません。豚とかつお節のスープ、豚のチャーシュー。',
    notes: '[ラーメン・福島、西梅田の西、花の輪のチャーシュー] 西梅田から少し西の道沿いにある16席のラーメン店で、2017年から。頼むなら920円の豚醤油らーめん: 鹿児島の豚と厚削りのかつお節のあっさりしてうまみのあるスープ、京都の Menya Teikaku の細麺、器のふちに花のように並ぶやわらかい薄切りのチャーシュー。味玉、320円の唐揚げとご飯のセット、餃子も足せて、ポークジンジャーの和えめんやつけ麺も。食券制で現金のみ。2026年10月の平日11時は並ばずに入れ、ていねいで清潔な接客も好評。',
  });
}

// ================================================================ COMMA, 梅田店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27130481/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['12:00', '15:00'], ['17:00', '23:00']), WE = day(['12:00', '17:00'], ['17:00', '23:00']);
  put({
    id: 'osaka_comma_umeda', name: 'COMMA, 梅田店 (Comma Umeda)', category: 'OMNI',
    lat: 34.704697, lng: 135.502794, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Mostly pasta and bread (an all-you-can-eat bruschetta and pasta lunch); steak, roast beef and salads too.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options; nothing vegan is confirmed. Many dishes use cheese, seafood, meat or dashi.',
    hours_raw: 'Mon–Fri 12:00–15:00 (last order 14:00) and 17:00–23:00 (food last order 22:00, drinks 22:30); Sat, Sun and holidays 12:00–17:00 (last order 16:00) and 17:00–23:00; closed December 31 and January 1 (Tabelog). A diner found drinks last call 45 minutes before closing (September 2026). Charge ¥330 per person after 17:00; one drink and one food per person; 1.5-hour limit at busy lunch and café times; December weekends and December 20–30: +¥550 on courses, 10% on à la carte (Tabelog). No preschool children, ages 0–6 (Tabelog). Opened August 3, 2022 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), IC cards, Rakuten Edy, nanaco, WAON, PayPay, Rakuten Pay, au PAY, Alipay, WeChat Pay (Tabelog). 38 seats incl. sofas and couple seats; private hire 20–50; non-smoking (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Doyama, 鳳城ビル 7F with a night view — 3 min from Nakazakicho Stn, 8 min from Umeda Stn exit 11',
    cuisine: 'Italian dining bar of pasta, salads and steak, in a dark room lit by table oil lamps (Tabelog; August 2026) · anniversary course of 8 dishes with a message plate ¥4,500; à la carte all-you-can-drink ¥1,650; lunch of six bruschetta, all-you-can-eat pasta and bread, dessert and tea or coffee ¥2,365 (Tabelog) · an 8-dish course (November 2026): soup of the day, prosciutto and ricotta bruschetta, ikura with egg mayonnaise, Caesar salad, seasonal fish, chuck-eye steak or rare-fried beef, pasta such as beef Bolognese rigatoni or shirasu and mentaiko, tiramisu or Basque cheesecake · dry-ice smoked beef tartare, thick-bacon carbonara, roast beef with mash (October 2026) · seasonal caprese with brûléed figs (September 2026) · lunch pasta sets with salad and soup, e.g. umami-dashi seafood peperoncino; tiramisu ¥700 (September 2026) · cocktails and wine (Tabelog)',
    website: 'https://comma-osaka.owst.jp/', gmaps: gm('COMMA, 梅田店 堂山町'), menu_url: null,
    notes: "[Italian · Umeda, Doyama, a seventh-floor date spot] A dim, sofa-lined Italian dining bar on the seventh floor of a Doyama building, near Nakazakicho, with a night view and oil lamps on the tables. It is built for celebrations: birthday plates with a message, an ¥4,500 eight-dish anniversary course, and all-you-can-drink; at lunch a ¥2,365 deal brings six bruschetta with unlimited pasta and bread. Diners praise the smoked beef tartare under dry ice, the carbonara and the caprese with brûléed figs; a few found the service rushed or uneven and the pasta bland. Expect a ¥330 evening charge, a one-drink-one-dish rule, a young, mostly female crowd, and no children under school age.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'Shop text (Tabelog): a cozy Italian dining bar 5 minutes from Umeda with sofa seating, a stylish design and a night view; surprise message plates for birthdays and anniversaries; an all-you-can-eat bread and bruschetta lunch. Opened August 3, 2022.', philosophy: null, specialty: 'Anniversary course; message plates.',
      anecdotes: [
        { text: '"the momentarily smoked beef tartare, was a showstopper with dry ice creating a smoky effect when the lid was lifted" — October 2026.', source: R + 'B538206756/' },
        { text: '"The interior is quite dark, as you can see from the pictures, with only the oil lamps on the tables providing light." — August 2026.', source: R + 'B536142184/' },
        { text: '"the last call for drinks was 45 minutes before closing, which seemed a bit excessive." — September 2026.', source: R + 'B535455472/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B535230015/', R + 'B535455472/', R + 'B535611642/', R + 'B535839308/', R + 'B536142184/', R + 'B536657659/', R + 'B536660945/', R + 'B537407278/', R + 'B538206756/', R + 'B538419588/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff introduce recommendations (October 2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂山町15-15 鳳城ビル 7F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂山町15番15号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B535230015/'],
    price_note: 'Courses from the Tabelog listing (tax included); ¥330 charge per person after 17:00.', last_checked: TODAY, items: [
      it('', '', 'Anniversary course, 8 dishes, with message plate', '¥4,500', 'Course', 'ask', 'ask', 'Tabelog listing.', 'anniversary_course'),
      it('', '', 'Lunch: six bruschetta, all-you-can-eat pasta and bread, dessert, tea or coffee', '¥2,365', 'Lunch', 'no', 'ask', 'Tabelog listing.', 'bruschetta_lunch'),
      it('', '', 'À la carte all-you-can-drink', '¥1,650', 'Drinks', '', '', 'Tabelog listing.', 'ayce_drinks'),
      it('', '', 'Tiramisu', '¥700', 'Dessert', 'ask', 'no', 'September 2026 review.', 'tiramisu'),
    ] }, {
    cuisine: 'パスタ、サラダ、ステーキのイタリアンのダイニングバー、テーブルのオイルランプだけの暗い店内 (食べログ、2026年8月)・メッセージプレートつきの記念日コース8品4,500円、アラカルトの飲み放題1,650円、ブルスケッタ6種とパスタとパンの食べ放題にデザートとお茶かコーヒーのランチ2,365円 (食べログ)・8品のコース (2026年11月): 本日のスープ、生ハムとリコッタのブルスケッタ、いくらと卵マヨ、シーザーサラダ、旬の魚、チャックアイロールのステーキか国産牛のレアカツ、牛のボロネーゼのリガトーニやしらすと明太子のパスタなど、ティラミスかバスクチーズケーキ・ドライアイスでいぶす牛のタルタル、厚切りベーコンのカルボナーラ、ローストビーフとマッシュポテト (2026年10月)・いちじくをキャラメリゼした季節のカプレーゼ (2026年9月)・サラダとスープつきのランチのパスタ、魚介のうまみだしのペペロンチーノなど、ティラミス700円 (2026年9月)・カクテルとワイン (食べログ)',
    neighborhood: '堂山、夜景の見える鳳城ビル 7階。中崎町駅から徒歩3分、梅田駅11番出口から8分',
    gf_detail: '要確認。グルテンの情報なし。パスタとパンが中心 (ブルスケッタとパスタの食べ放題のランチ)、ステーキ、ローストビーフ、サラダも。',
    vegan_detail: '要確認。食べログにはベジタリアン向けのメニューありとあるが、ヴィーガンの確認はなし。チーズ、魚介、肉、出汁を使う料理が多い。',
    notes: '[イタリアン・梅田堂山、7階のデート向きの店] 中崎町に近い堂山のビルの7階にある、ソファの並ぶ暗めのイタリアンのダイニングバーで、夜景が見え、テーブルにはオイルランプ。お祝い向けの店で、メッセージつきの誕生日プレート、4,500円の8品の記念日コース、飲み放題がある。ランチは2,365円でブルスケッタ6種とパスタとパンの食べ放題。ドライアイスでいぶす牛のタルタル、カルボナーラ、いちじくのカプレーゼが好評の一方、提供が急ぎすぎ、接客にむらがある、パスタの味がうすいという声も。夜は1人330円のチャージ、ワンドリンク・ワンフード制、若い女性客が多く、未就学児は入れない。',
  });
}

// ================================================================ 串揚げとワイン Ohana 北新地店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27069587/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://ohana-kitashinnchi.com/';
  const WD = day(['17:00', '03:00']), SU = day(['17:00', '22:30']);
  put({
    id: 'osaka_ohana_kitashinchi', name: '串揚げとワイン Ohana 北新地店 (Kushiage to Wine Ohana Kitashinchi Ten)', category: 'OMNI',
    lat: 34.697305, lng: 135.49963, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: battered, breaded and deep-fried skewers.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kushiage of seafood, wagyu and pork, and dashi; vegetable skewers are part of the courses.',
    hours_raw: 'Mon–Sat 17:00–3:00 (last order 2:00); Sunday 17:00–22:30 (last order 22:00); closing days not fixed; holiday hours vary (Tabelog). Courses only until 22:00, à la carte after (Tabelog). Courses booked by the day before; anniversary plate ¥1,650 (Tabelog). Opened January 30, 2017 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), PayPay; no e-money (Tabelog). 17 seats: 9 at the counter and private rooms for 4–8, including a second-floor room with a sunken kotatsu (Tabelog; March 2026). Smoking allowed (Tabelog). A sister shop, Ohana Kitahama (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WD, 6: SU }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kitashinchi — 3 min from Kitashinchi Stn, 5 min from Nishi-Umeda Stn',
    cuisine: 'Creative kushiage of fresh seafood, domestic meat and seasonal vegetables, light on fat, with homemade sauces; over twenty wines (Tabelog) · courses (Tabelog, tax included): Omakase STOP from ¥6,600, skewers served from about thirty choices until you say stop; Zei course ¥7,700 with nine skewers such as angel shrimp, special wagyu and natural sea bream; KIWAMI course ¥9,900 with twelve skewers including A5 wagyu · a February 2026 omakase: angel shrimp, simmered daikon wrapped in bacon, sea bream in shiso, tenderloin, asparagus wrapped in pork, chateaubriand and sirloin cap · a ¥9,000 course with all-you-can-drink (March 2026) · course finish of sea-bream dashi chazuke or Inaniwa udon, homemade dessert (July 2026) · dips of salt, ponzu, chuno sauce, spicy mustard sauce and mayonnaise (March 2026)',
    website: WEB, gmaps: gm('串揚げとワイン Ohana 北新地店'), menu_url: null,
    notes: "[Kushikatsu · Kitashinchi, skewers and wine till 3 am] A seventeen-seat creative kushiage bar in Kitashinchi, open since 2017, pairing light, finely battered skewers with over twenty wines. The omakase runs from ¥6,600 and keeps the skewers coming until you say stop: angel shrimp, bacon-wrapped simmered daikon, sea bream in shiso, wagyu chateaubriand. Set courses are ¥7,700 and ¥9,900, with a sea-bream chazuke or Inaniwa udon to finish. Diners single out the attentive, well-paced service and the private rooms, including an upstairs room with a sunken kotatsu, popular for business dinners. Courses only until 10 pm, then à la carte until 3 am; smoking allowed.",
    chef_bio: { chef_name: null, roles: ['Kushiage chefs (unnamed)'], origin: null, background: 'Shop text (Tabelog): seasonal ingredients crafted by skilled artisans; carefully selected fresh seafood, domestic meats and seasonal vegetables; light skewers with reduced fat; homemade sauces and seasonings; over twenty wines with drink recommendations; a refined Japanese-modern room with private rooms for up to 8. Opened January 30, 2017. Sister shop: Ohana Kitahama.', philosophy: 'The marriage of wine and kushiage (Tabelog).', specialty: 'Omakase STOP course; angel shrimp.',
      anecdotes: [
        { text: '"The first skewer is the angel shrimp. The batter is finely textured, and the oil is remarkably light." — February 2026.', source: R + 'B523512170/' },
        { text: '"The second floor features a private room with a sunken kotatsu, which is a nice touch." — March 2026.', source: R + 'B525163323/' },
        { text: '"the selection of all-you-can-drink wine was a bit disappointing, leading us to stick with beer and highballs instead." — March 2026.', source: R + 'B525163323/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, WEB, R + 'B520360581/', R + 'B523512170/', R + 'B524721244/', R + 'B525022697/', R + 'B525163323/', R + 'B530735318/', R + 'B530771716/', R + 'B531772430/', R + 'B531912326/', R + 'B532751785/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Each dish explained; staff recommend wines (2026). No English evidence found.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Omakase STOP course: tell staff about ingredients you avoid or allergies, and alternatives are served (Tabelog course text).'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎新地1-7-16',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目7番16号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Courses from the Tabelog listing (tax included).', last_checked: TODAY, items: [
      it('', '', 'Omakase STOP course (from)', '¥6,600', 'Course', 'no', 'no', 'Tabelog listing.', 'omakase_stop'),
      it('', '', 'Zei course: nine kushiage and dishes', '¥7,700', 'Course', 'no', 'no', 'Tabelog listing.', 'zei_course'),
      it('', '', 'KIWAMI course: twelve kushiage and dishes', '¥9,900', 'Course', 'no', 'no', 'Tabelog listing.', 'kiwami_course'),
      it('', '', 'Anniversary plate', '¥1,650', 'Dessert', '', '', 'Tabelog listing.', 'anniversary_plate'),
    ] }, {
    cuisine: '新鮮な魚介、国産の肉、旬の野菜の脂をおさえた創作串揚げ、自家製のソース、ワインは20種以上 (食べログ)・コース (食べログ、税込): おまかせ STOP コースは6,600円から、30種ほどからストップと言うまで串が出る、Zei コース7,700円は天使の海老、特選和牛、天然鯛など9本、KIWAMI コース9,900円は A5和牛など12本・2026年2月のおまかせ: 天使の海老、大根の煮物のベーコン巻き、鯛のしそ巻き、ヒレ、アスパラの豚巻き、シャトーブリアンとサーロインのかぶり・飲み放題つきの9,000円のコース (2026年3月)・締めは鯛の出汁茶漬けか Inaniwa うどん、自家製デザート (2026年7月)・塩、ポン酢、中濃ソース、辛子ソース、マヨネーズで (2026年3月)',
    neighborhood: '北新地。北新地駅から徒歩3分、西梅田駅から5分',
    gf_detail: 'グルテンフリーではありません。衣をつけて揚げる串揚げ。',
    vegan_detail: 'ヴィーガンではありません。魚介、和牛、豚の串揚げと出汁。コースには野菜の串もある。',
    notes: '[串かつ・北新地、深夜3時まで串とワイン] 北新地にある17席の創作串揚げの店で、2017年から。細かい衣で軽く揚げた串を20種以上のワインと合わせる。おまかせは6,600円からで、ストップと言うまで串が続く: 天使の海老、ベーコンで巻いた煮大根、鯛のしそ巻き、和牛のシャトーブリアン。コースは7,700円と9,900円で、締めは鯛の茶漬けか Inaniwa うどん。ていねいでちょうどいいペースの接客と個室が好評で、2階には掘りごたつの個室もあり、接待によく使われる。22時まではコースのみ、それ以降は深夜3時までアラカルト。喫煙可。',
  });
}

// ================================================================ 北新地 天婦羅 ぼん次
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27114159/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'http://www.kitchen-dan.jp/';
  const D = day(['17:00', '23:00']), LD = day(['12:00', '14:00'], ['17:00', '23:00']);
  put({
    id: 'osaka_tempura_bonji_kitashinchi', name: '北新地 天婦羅 ぼん次 (Kitashinchi Tempura Bonji)', category: 'OMNI',
    lat: 34.696616, lng: 135.497215, cuisine_type: 'tempura',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: battered tempura at dinner and breaded tonkatsu at lunch.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood and wagyu tempura, pork cutlets, dashi.',
    hours_raw: 'Mon–Tue 17:00–23:00; Wed–Sat and holidays 12:00–14:00 (food last order 13:00) and 17:00–23:00 (food last order 21:00, drinks 22:30); closed Sundays and at New Year; Wed–Fri holidays 12:00–14:00 and 17:00–22:30 (Tabelog). A June 2026 diner gives lunch as Wed–Fri 12:00–13:00. Service charge 5% (Tabelog). Elementary-school age and up; no limit on exclusive bookings (Tabelog). Opened October 18, 2019 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), PayPay; no e-money (Tabelog). 10 seats at an L-shaped counter; non-smoking; takeout (Tabelog).',
    hours: { 0: D, 1: D, 2: LD, 3: LD, 4: LD, 5: LD }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kitashinchi side of 堂島, 堂島メリーセンタービル 3F — 1 min from Nishi-Umeda Stn exit C-92, 3 min from Kitashinchi Stn',
    cuisine: 'Tempura from the group behind the kushikatsu shop Kushikatsu Bon, fried in Taihaku sesame oil blended with cottonseed oil: seasonal produce, black-wagyu chateaubriand and fresh seafood; sake and wine (Tabelog) · dinner (Tabelog, tax included): omakase with a stop system, about 8 pieces ¥8,000, 12 ¥12,000, up to about 16; special 12-dish course ¥13,000 with sweet shrimp, chateaubriand, sea urchin and caviar, a choice of three finishes and dessert; ¥14,700 with the Kushikatsu Bon wagyu fillet katsu sandwich · a May 2026 course: squid noodles with sea urchin, live shrimp, Tokushima shiitake, Hakodate cherry salmon in shiso, grunt in aosa, Manji peppers, red scallop with sake lees and cream cheese, A5 chateaubriand with mustard salt, sakura shrimp and broad beans, Hiroshima asparagus, anago, Naruto Kintoki sweet potato, tempura udon, strawberry sorbet · lunch: one pork-cutlet set of Yamagata pork, 100 g loin or rib loin, 20 g tenderloin, a seasonal cream croquette, a seafood fry, rice, miso soup and salad; ¥2,000 until April 2026 then ¥3,000 from May (April 2026), ¥2,200 as an opening promotion against ¥3,000 (June 2026), ¥2,200 (July and September 2026)',
    website: WEB, gmaps: gm('北新地 天婦羅 ぼん次'), menu_url: null,
    notes: "[Tempura · Kitashinchi, a sister of Kushikatsu Bon] A ten-seat L-shaped tempura counter on a third floor near Nishi-Umeda, run by the group behind the Kitashinchi kushikatsu shop Kushikatsu Bon, with big windows and a calm, spacious room. At night the chef fries one piece at a time in a sesame-and-cottonseed blend, from live shrimp and seasonal fish to wagyu chateaubriand and caviar-topped bites, in omakase courses from ¥8,000 that you stop when full. At lunch (Wednesday to Saturday) there is only a pork-cutlet set of Yamagata pork with a croquette and a seafood fry, ¥2,200 in mid-2026, a bargain for Kitashinchi that diners rave about. A 5% service charge applies; children from school age.",
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed) and an apprentice (June 2026)'], origin: null, background: 'Shop text (Tabelog): a tempura specialty restaurant inheriting the skills of the kushikatsu shop "Kushikatsu Bon"; Taihaku sesame oil and cottonseed oil; an L-shaped 10-seat counter; 7th anniversary. Opened October 18, 2019. Sister shops named in courses and reviews: Kushikatsu Bon and Kushiage Kitchen Dan, with an Okinawa Kume branch of Dan announced for late November 2026. An April 2026 diner calls Kushikatsu Bon a Michelin restaurant (the reviewer\'s claim).', philosophy: 'Carefully selected ingredients, oil and temperature (Tabelog).', specialty: 'Omakase tempura; tonkatsu lunch.',
      anecdotes: [
        { text: '"they fry each piece one by one to match my pace. The batter is thin and light" — April 2026.', source: R + 'B526225979/' },
        { text: '"both the head chef and the apprentice were very friendly." — June 2026.', source: R + 'B529890758/' },
        { text: '"With a good variety and decent portion size for JPY 2200, it\'s truly impressive for Osaka!" — September 2026, the pork-cutlet lunch.', source: R + 'B534881901/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, WEB, R + 'B522806832/', R + 'B526225979/', R + 'B527246397/', R + 'B528932552/', R + 'B529890758/', R + 'B530171323/', R + 'B532700168/', R + 'B534398713/', R + 'B534881901/', R + 'B537671390/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter service with each dish explained (June 2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂島1-3-16 堂島メリーセンタービル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島一丁目3番 (lot) 61m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B534881901/'],
    price_note: 'Dinner courses from the Tabelog listing (tax included); lunch from 2026 reviews, whose prices differ; 5% service charge.', last_checked: TODAY, items: [
      it('', '', 'Omakase tempura, about 8 pieces', '¥8,000', 'Dinner', 'no', 'no', 'Tabelog listing.', 'omakase_8'),
      it('', '', 'Omakase tempura, 12 pieces', '¥12,000', 'Dinner', 'no', 'no', 'Tabelog listing.', 'omakase_12'),
      it('', '', 'Special 12-dish course', '¥13,000', 'Dinner', 'no', 'no', 'Tabelog listing.', 'special_12'),
      it('', '', 'Pork-cutlet lunch course', '¥2,200', 'Lunch', 'no', 'no', 'July and September 2026 reviews; ¥2,000–3,000 in other 2026 reviews.', 'katsu_lunch'),
    ] }, {
    cuisine: '串かつの Kushikatsu Bon のグループの天ぷら、Taihaku ごま油と綿実油のブレンドで揚げる旬の食材、黒毛和牛のシャトーブリアン、新鮮な魚介、日本酒とワイン (食べログ)・夜 (食べログ、税込): ストップ制のおまかせ、8品ほど8,000円、12品12,000円、最大16品ほど、甘海老、シャトーブリアン、ウニ、キャビアの特別12品のコース13,000円 (締め3種から選択とデザート)、Kushikatsu Bon の和牛ヒレカツサンドつき14,700円・2026年5月のコース: イカそうめんとウニ、活き海老、徳島のしいたけ、函館の桜鱒のしそ巻き、イサキの aosa、Manji とうがらし、赤貝の酒粕とクリームチーズ、A5のシャトーブリアンのからし塩、桜海老とそら豆、広島のアスパラ、穴子、Naruto Kintoki のさつまいも、天ぷらうどん、いちごのシャーベット・昼はとんかつの定食だけ: 山形の豚、ロースかリブロース100g、ヒレ20g、季節のクリームコロッケ、魚介のフライ、ご飯、味噌汁、サラダ。2026年4月までは2,000円で5月から3,000円 (2026年4月)、オープン記念で3,000円が2,200円 (2026年6月)、2,200円 (2026年7月、9月)',
    neighborhood: '堂島の北新地寄り、堂島メリーセンタービル 3階。西梅田駅C-92出口から徒歩1分、北新地駅から3分',
    gf_detail: 'グルテンフリーではありません。夜は衣をつけた天ぷら、昼はパン粉のとんかつ。',
    vegan_detail: 'ヴィーガンではありません。魚介と和牛の天ぷら、とんかつ、出汁。',
    notes: '[天ぷら・北新地、Kushikatsu Bon の姉妹店] 西梅田駅の近くのビルの3階にある、L字のカウンター10席の天ぷらの店で、北新地の串かつの店 Kushikatsu Bon のグループ。大きな窓のある広く落ち着いた店。夜は料理人がごま油と綿実油のブレンドで1品ずつ揚げ、活き海老や旬の魚から和牛のシャトーブリアンやキャビアをのせた1品まで、おまかせは8,000円からで、満腹になったらストップ。昼 (水〜土) は山形の豚のとんかつにコロッケと魚介のフライがつく定食だけで、2026年の半ばは2,200円、北新地では破格と絶賛されている。サービス料5%、子どもは小学生から。',
  });
}

save();
