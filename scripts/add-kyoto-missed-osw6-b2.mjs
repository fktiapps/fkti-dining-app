// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 2.
//   + Au point de rendez-vous (canelé, parfait and lunch-plate café behind Kawaramachi OPA; since May 2022)
//   + イタリア食堂イスコ Trattoria ISUQO (40-seat late-night trattoria by Kyoto Kawaramachi Stn)
//   + ひいらぎ亭 Hiiragi Tei (Omi jidori yakitori in front of Chion-in; Izakaya WEST Tabelog 100 2024–2026)
//   + スパイスチャンバー SPICE CHAMBER (keema-only curry counter at Shijo Karasuma, since 2010; Curry WEST Tabelog 100 2026)
//   Taken on 2026-11-05 from `queue.mjs kyoto-missed next core 200` (Au point 26037712, ISUQO 26033368: the first two
//   with id mod 6 = 4 after batch 1) and `next notable 200` (Hiiragi Tei 26031016, SPICE CHAMBER 26015938).
//   None is in data/kyoto.json: grep by name (rendez/ランデヴー, イスコ/ISUQO, ひいらぎ/Hiiragi, スパイスチャンバー/Spice
//   Chamber) and address (中之町575/丸仲ビル, 市之町239/招徳ビル, 石橋町306, 白楽天町502/福井ビル) found none.
//   Chain check: all four are single shops. Au point is run by the owner of the French restaurant Le cadeau (rurubu),
//   a different format, not in data/kyoto.json.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-2');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ Au point de rendez-vous
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26037712/'; const R = TB + 'dtlrvwlst/';
  const RURUBU = 'https://rurubu.jp/andmore/article/22189';
  const H = day(['12:00', '19:00']);
  put({
    id: 'kyoto_au_point_de_rendez_vous', name: 'Au point de rendez-vous', category: 'OMNI',
    lat: 35.004719, lng: 135.768361, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Canelés, pies, quiche, lasagna, financiers and parfaits with sponge, granola or rusk are wheat-based; the menu has also listed buckwheat galettes (2024 review), but no gluten information is published (2024–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Parfaits and cakes use cream, cream cheese, ice cream and meringue, and the açaí bowl comes with yogurt; no vegan item is described (2024–26 reviews).',
    hours_raw: '12:00–19:00; closed Thursday and on irregular days, announced on Instagram (Tabelog). Reservations are taken (Tabelog); in 2024 a reviewer booked by Instagram DM, and the shop then said it would take only same-day bookings from August 2024. A 2024 article listed a morning service from 8:00 and hours to 21:00 (rurubu, September 2024); Tabelog’s current hours are used here. 10 seats: a counter for 2 and tables for 4, 3 and 2, plus a few terrace seats; non-smoking; cards and PayPay (Tabelog). On the back street (Ura-Teramachi) opposite the back of Kawaramachi OPA, 1 min from Kyoto Kawaramachi Stn (Tabelog; 2024–26 reviews).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ura-Teramachi behind Kawaramachi OPA — 1 min from Kyoto Kawaramachi Stn',
    cuisine: 'Small café of French pastries, parfaits and lunch plates, begun as a baked-goods shop (rurubu, 2024) · 京カヌレ canelés, of which 300 sold in a single day, per a 2025 reviewer (tall canelé ¥400, September 2025) and financiers to take away · seasonal parfaits with a drink ¥2,500, e.g. Mio Shizuku strawberry (March 2026) and three kinds of fig with tea jelly (September 2026), with the making shown to the diner (2025–26) · seasonal cake with a drink ¥1,500, topped with a butterfly tuile (2025) · French-style açaí bowl in a plant-pot bowl ¥1,600, +¥300 for a drink (2024) · lunch plates with vegetables and a drink, under ¥1,500 (June 2026): pie with porcini cream, quiche, shrimp gratin pie, chicken nanban with cold tomato soup · café latte ¥600',
    website: null, gmaps: gm('Au point de rendez-vous 京都 河原町'), menu_url: null,
    notes: "[Pâtisserie café · Kawaramachi, canelés and parfaits on a back street] A 10-seat café on the quiet street behind Kawaramachi OPA, run by the owner of the French restaurant Le cadeau. It began with baked goods — the canelé is the thing to take away — and now makes tall seasonal parfaits (strawberry in spring, figs in autumn, ¥2,500 with a drink), cakes crowned with a butterfly tuile, and lunch plates of pie or quiche with plenty of vegetables (under ¥1,500 with a drink in 2026). You may get to watch your parfait being made. 12:00–19:00, closed Thursday; check Instagram for extra closures.",
    chef_bio: { chef_name: null, roles: ['Owner, who runs the French restaurant Le cadeau (unnamed in the sources read)'], origin: null,
      background: 'Per rurubu (September 2024): the owner runs the French restaurant Le cadeau, which serves a late-night dessert course to one booked party at a time; Au point de rendez-vous started by selling baked goods and now serves parfaits and lunch; the 2024 açaí bowl was overseen by the Le cadeau chef. A December 2022 reviewer says the shop opened in May 2022 and that its Christmas dessert course was supervised by "Chef Imoto", with pastry chef Kaede and staff member Kokoro each devising a plate; a July 2024 reviewer quotes the shop calling itself the "sister store of a Michelin-listed establishment". A 2025 reviewer mentions a "Canelé Day" on the 21st of each month and occasional cooking classes.',
      philosophy: null, specialty: 'Canelés; seasonal parfaits; butterfly-tuile cakes.',
      anecdotes: [
        { text: '"I even got to see how it was made, which was so exciting!" (of the fig parfait) — September 2026.', source: R + 'B486778312/' },
        { text: '"The female staff member was very warm and welcoming" — June 2026.', source: R + 'B530122208/' },
        { text: '"The bowl was actually a plant pot, so when I lifted it, acai spilled out everywhere!" — July 2024.', source: R + 'B488992754/' },
        { text: 'A 2025 reviewer was told the canelé is so popular that 300 sold in a single day.', source: R + 'B522431037/' },
      ],
      japanese_sources_summary: 'るるぶ&more (2024年9月更新): Au point de rendez-vous (おー ぽわん どぅ らんでゔー)、オーナーが営むフランス料理店「Le cadeau」は営業後の深夜24時から1組限定の予約制のデザートコース、焼き菓子の販売から始まり今はパフェやランチも、看板は京カヌレ、2024年のアサイーボウル、モーニング (2024年8月から)。食べログ: スイーツ・カフェ、中京区中之町575 丸仲ビル 1F、京都河原町駅から約1分、12:00〜19:00、木曜と不定休 (Instagram で告知)、予約可、10席、禁煙、カード・PayPay 可。口コミ (2022〜2026年、英語): 2022年5月開店、カヌレ、パフェ (いちご、いちじく) ドリンク付き2,500円、季節のケーキ1,500円、アサイーボウル1,600円、ランチプレート (パイ、キッシュ、チキン南蛮) 1,500円以下、蝶のチュイール。',
      confidence: 'medium', sources: [TB, RURUBU, R + 'B458394964/', R + 'B484124195/', R + 'B486778312/', R + 'B488992754/', R + 'B489197297/', R + 'B501274739/', R + 'B509661600/', R + 'B522431037/', R + 'B523143043/', R + 'B530122208/', R + 'B534012434/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small seated café; cards and PayPay; check Instagram for closures.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区中之町575 丸仲ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.004719, 135.768361); cross-checked: GSI 京都府京都市中京区中之町575番地 (lot) 28m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B486778312/', R + 'B522431037/', R + 'B530122208/', R + 'B458394964/'],
    price_note: 'No price list read; prices from 2024–2026 reviews, dated per item; parfaits change with the season.', last_checked: TODAY, items: [
      it('', '', 'Seasonal parfait with a drink', '¥2,500', 'Parfaits', 'no', 'no', 'March and September 2026.', 'seasonal_parfait'),
      it('', '', 'Seasonal cake with a drink', '¥1,500', 'Cakes', 'no', 'no', 'July and September 2025.', 'seasonal_cake'),
      it('', '', 'Canelé (tall)', '¥400', 'Baked goods', 'no', 'no', 'September 2025.', 'canele'),
      it('', '', 'Lunch plate (pie, quiche or chicken nanban) with a drink', 'under ¥1,500', 'Lunch', 'no', 'no', 'June 2026.', 'lunch_plate'),
      it('', '', 'Açaí bowl (+¥300 with a drink)', '¥1,600', 'Café', 'ask', 'no', 'June 2024.', 'acai_bowl'),
      it('', '', 'Café latte', '¥600', 'Drinks', '', '', 'September 2025.', 'cafe_latte'),
    ] }, {
    cuisine: 'フランス菓子、パフェ、ランチプレートの小さなカフェ。焼き菓子の販売から始まった (るるぶ、2024年)・京カヌレ (2025年の口コミでは1日300個売れた日も、トールのカヌレ400円、2025年9月)、フィナンシェなどの持ち帰り・季節のパフェ (ドリンク付き2,500円)、例えば Mio Shizuku のいちご (2026年3月)、3種のいちじくとお茶のゼリー (2026年9月)、作る様子を見せてくれる (2025〜2026年)・蝶のチュイールをのせた季節のケーキ (ドリンク付き1,500円、2025年)・植木鉢の器のフランス風アサイーボウル1,600円、ドリンク +300円 (2024年)・野菜たっぷりのランチプレート (ドリンク付きで1,500円以下、2026年6月): ポルチーニクリームのパイ、キッシュ、海老グラタンパイ、冷たいトマトスープ付きのチキン南蛮・カフェラテ600円',
    neighborhood: '河原町 OPA の裏、裏寺町。京都河原町駅から徒歩1分',
    gf_detail: '要確認。カヌレ、パイ、キッシュ、ラザニア、フィナンシェ、スポンジやグラノーラやラスクを使うパフェは小麦が中心。そば粉のガレットがあった時期もある (2024年の口コミ) が、グルテンの情報は公開されていない (2024〜2026年の口コミ)。',
    vegan_detail: '要確認。パフェやケーキに生クリーム、クリームチーズ、アイスクリーム、メレンゲを使い、アサイーボウルにはヨーグルト。ヴィーガンの品は書かれていない (2024〜2026年の口コミ)。',
    notes: '[パティスリーカフェ・河原町、裏通りのカヌレとパフェ] 河原町 OPA の裏の静かな通りにある10席のカフェ。フランス料理店 Le cadeau のオーナーの店。焼き菓子から始まり、持ち帰りはカヌレが定番。今は季節の背の高いパフェ (春はいちご、秋はいちじく、ドリンク付き2,500円)、蝶のチュイールをのせたケーキ、パイやキッシュに野菜たっぷりのランチプレート (2026年はドリンク付きで1,500円以下) も。パフェを作る様子を見せてくれることも。12時〜19時、木曜休み。臨時休業は Instagram で確認を。',
  });
}

// ================================================================ イタリア食堂イスコ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26033368/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '24:00']);
  put({
    id: 'kyoto_trattoria_isuqo', name: 'イタリア食堂イスコ (Trattoria ISUQO)', category: 'OMNI',
    lat: 35.002220, lng: 135.769722, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pizza and spaghetti (Barilla No. 3) are the core; steak, salads, carpaccio and ajillo are also on the menu, but no gluten information is published (Tabelog; 2024–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and the shop says it cares about vegetables, but no vegan dish is described; most dishes carry ham, seafood, chicken or cheese (Tabelog; 2024–26 reviews).',
    hours_raw: '18:00–24:00; closed Thursday (Tabelog). Reservations accepted; all-you-can-drink courses from ¥5,000; private hire for 20–50 people (Tabelog). One drink per person required (May 2024). Friday is "Wine Day" with wine at ¥700 (Tabelog). 40 seats, counter and sofa seating, a large central table; smoking allowed (Tabelog; a June 2025 diner welcomed it, an April 2024 diner saw no smokers); cards (VISA, Master, JCB, AMEX), e-money and QR payments; free Wi-Fi (Tabelog). 2nd floor of the 招徳ビル, 2 min walk from Kyoto Kawaramachi Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'South of Shijo, west of Kawaramachi — 2 min walk from Kyoto Kawaramachi Stn',
    cuisine: 'Casual trattoria aiming to be "neither too cheap nor too expensive" (Tabelog) · thin-crust pizza from a 500 °C oven (meat sauce, prosciutto, anchovy) · spaghetti with Barilla No. 3, the house chili-and-sansho spaghetti, shirasu and Kujo-negi garlic spaghetti, seafood pasta · antipasto platter (smoked salmon, potato salad, prosciutto, olives), Spanish tortilla, carpaccio, ajillo, mussels in spicy tomato, fried squid · grilled steak with mustard, chicken neck, gizzards, fried chicken with yuzu pepper · Friday wine ¥700; free-flow courses from ¥5,000 (Tabelog; 2024–26 reviews)',
    website: null, gmaps: gm('イタリア食堂イスコ 京都'), menu_url: null,
    notes: "[Trattoria · Kawaramachi, pizza and pasta until midnight] A 40-seat second-floor trattoria a couple of minutes from Kawaramachi Station, done in bright blue walls and sofas, open 18:00 to midnight. Thin, crisp pizza from a 500 °C oven, the house spaghetti with chili and sansho, a mixed antipasto plate and a steak with mustard are what reviewers order; Friday is wine day at ¥700 a glass. Built for groups: free-flow courses from ¥5,000 and private hire for up to 50. One drink per person; smoking allowed. Closed Thursday.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed in the sources)'], origin: null,
      background: 'Run by a company (a corporate invoice registrant, Tabelog). Per the shop’s own Tabelog text: seasonal Kyoto ingredients, authentic crisp pizza and a signature chili-and-sansho spaghetti at reasonable prices; banquets, after-parties and weddings for up to 40 guests.',
      philosophy: 'Per Tabelog (the shop’s own text): an adult hideaway offering "the perfect satisfaction that’s neither too cheap nor too expensive."',
      specialty: 'Pizza; chili-and-sansho spaghetti.',
      anecdotes: [
        { text: '"As soon as I opened the door, I was greeted by cute blue wallpaper and blue sofas." — March 2026.', source: R + 'B523511786/' },
        { text: '"The garlic in the pasta was intense, and the thin pasta with extra garlic was fantastic!" — March 2026.', source: R + 'B523511786/' },
        { text: '"The server was calm and helpful, providing good advice when we were unsure between the two flavors of mussels." — September 2024.', source: R + 'B492636655/' },
        { text: 'A May 2024 diner notes a one-drink-per-person rule.', source: R + 'B485855939/' },
      ],
      japanese_sources_summary: '食べログ: イタリアン・ピザ・ステーキ、下京区市之町239-1 招徳ビル 2F、京都河原町駅から徒歩2分、18:00〜24:00、木曜休み、予約可、40席、貸切20〜50名、喫煙可、カード・電子マネー・QR 可、ベジタリアンメニューあり、500℃のピザ窯で焼くピッツァ、バリラ No.3 の細いスパゲッティ、唐辛子と山椒のスパゲッティ、毎週金曜はワイン700円、飲み放題コース5,000円から。口コミ (2024〜2026年、英語): 青い壁とソファ、前菜盛り合わせ、トルティージャ、ムール貝、ステーキ、しらすと九条ねぎのパスタ、1ドリンク制。',
      confidence: 'low', sources: [TB, R + 'B483353434/', R + 'B485855939/', R + 'B488263190/', R + 'B491549271/', R + 'B491726530/', R + 'B492636655/', R + 'B494608737/', R + 'B505440032/', R + 'B508544442/', R + 'B508565706/', R + 'B523511786/', R + 'B524974049/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order from the menu; one drink per person; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区市之町239-1 招徳ビル 2F',
    existence: { status: 'probable', checked: TODAY, note: 'Tabelog listing kept by the shop (corporate member); newest reviews dated March 2026.' },
    pin_source: `Tabelog ${TB} (35.002220, 135.769722); GSI matches only the town 京都府京都市下京区市之町 (town) 64 m away (GSI only this round, no OSM); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B494608737/', R + 'B505440032/'],
    price_note: 'No prices read except Friday wine and the course floor (Tabelog); items from 2024–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Pizza (meat sauce, prosciutto, anchovy)', '', 'Pizza', 'no', 'no', '', 'pizza'),
      it('', '', 'Chili and sansho spaghetti (house signature)', '', 'Pasta', 'no', 'ask', 'Tabelog.', 'chili_sansho_spaghetti'),
      it('', '', 'Antipasto platter', '', 'Antipasti', 'ask', 'no', 'October 2024.', 'antipasto'),
      it('', '', 'Steak with mustard', '', 'Meat', 'ask', 'no', 'October 2024.', 'steak'),
      it('', '', 'Glass of wine (Fridays)', '¥700', 'Drinks', '', '', 'Tabelog.', 'friday_wine'),
      it('', '', 'All-you-can-drink course', 'from ¥5,000', 'Course', 'ask', 'no', 'Tabelog.', 'nomihodai_course'),
    ] }, {
    cuisine: '「安すぎず高すぎない」満足を掲げる気軽なトラットリア (食べログ)・500℃の窯で焼く薄いピッツァ (ミートソース、生ハム、アンチョビ)・バリラ No.3 のスパゲッティ、名物の唐辛子と山椒のスパゲッティ、しらすと九条ねぎのガーリックスパゲッティ、魚介のパスタ・前菜盛り合わせ (スモークサーモン、ポテトサラダ、生ハム、オリーブ)、トルティージャ、カルパッチョ、アヒージョ、ムール貝のピリ辛トマト煮、イカフライ・マスタードのステーキ、せせり、砂肝、柚子胡椒の唐揚げ・金曜はワイン700円、飲み放題コース5,000円から (食べログ、2024〜2026年の口コミ)',
    neighborhood: '四条の南、河原町の西。京都河原町駅から徒歩2分',
    gf_detail: '要確認。ピッツァとスパゲッティ (バリラ No.3) が中心で、ステーキ、サラダ、カルパッチョ、アヒージョもあるが、グルテンの情報は公開されていない (食べログ、2024〜2026年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあり、野菜にこだわるとしているが、ヴィーガンの料理は書かれていない。多くの料理に生ハム、魚介、鶏肉、チーズを使う (食べログ、2024〜2026年の口コミ)。',
    notes: '[トラットリア・河原町、深夜0時までのピッツァとパスタ] 京都河原町駅から2分、2階にある40席のトラットリア。青い壁とソファの店内で、18時から0時まで。500℃の窯で焼く薄くパリッとしたピッツァ、名物の唐辛子と山椒のスパゲッティ、前菜盛り合わせ、マスタードのステーキが定番で、金曜はワインが1杯700円。宴会向けで、飲み放題コースは5,000円から、貸切は50名まで。1ドリンク制、喫煙可。木曜休み。',
  });
}

// ================================================================ ひいらぎ亭
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26031016/'; const R = TB + 'dtlrvwlst/';
  const EPC = 'https://www.enprimeurclub.com/restaurants/hiiragitei-kyoto-restaurant';
  const H = day(['17:30', '23:00']);
  put({
    id: 'kyoto_hiiragi_tei', name: 'ひいらぎ亭 (Hiiragi Tei)', category: 'OMNI',
    lat: 35.006655, lng: 135.777941, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yakitori comes with salt, wasabi or tare; the thigh tataki is served with a slightly sweet soy sauce, and the menu also has nyumen, shiso rolls and bacon-cheese skewers; no gluten information (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken shop; even the grilled shiitake and green chili come with bonito flakes or dashi (2026 reviews).',
    hours_raw: '17:30–23:00 (last order 22:00) Monday, Thursday–Sunday and holidays; closed Tuesday and Wednesday; lunch 12:00–14:00 once a month (Tabelog). Reservations accepted; the owner cooks alone, so orders can take time at busy moments (Tabelog). Tables may be booked in two-hour slots (18:00–20:00, September 2026). Cover charge ¥1,000 for the starters (otoshi), which have included potato salad, shijimi clam soup and chicken with jelly (Tabelog; 2025–26 reviews). 20 seats: 10 at the counter downstairs and 10 at tables upstairs (private for up to 10) (Tabelog). Non-smoking; cards (VISA, Master, JCB, AMEX, Diners), no e-money or QR (Tabelog). Easy to miss from the street (August 2026). By the Chion-in-mae bus stop on Higashioji-dori; about 15 min walk from Sanjo, Gion-Shijo or Higashiyama Stn (Tabelog).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashioji-dori in front of Chion-in — by the Chion-in-mae bus stop',
    cuisine: 'Yakitori and chicken dishes from Omi (Shiga) jidori chicken (2026 reviews) · thigh and breast tataki: charcoal-seared skin, a pink centre, onion, green onion and ginger with a slightly sweet soy sauce · large skewers: white liver ("premium"), back liver, chōchin, seseri, bonjiri, wings, hinedori (old hen), cartilage · shiso rolls, bacon-cheese, pork shin with grated wasabi · grilled shiitake, maitake with sudachi, green chili with bonito flakes · obanzai on the counter, steamed chicken with sansho sauce, aged-potato fries · to finish: karasumi egg rice, nyumen · sake by omakase, shochu, highballs, wine (2025–26 reviews)',
    website: null, gmaps: gm('ひいらぎ亭 知恩院前'), menu_url: null,
    notes: "[Yakitori · Chion-in, Omi jidori on the counter] A 20-seat yakitori shop on Higashioji-dori in front of Chion-in, where the owner grills Shiga's Omi jidori alone at the counter downstairs (tables upstairs). Start with the thigh tataki — seared over charcoal, pink inside, with a slightly sweet soy — then move to big skewers: the creamy white liver is the one people talk about, along with back liver, bonjiri and the old-hen hinedori. A ¥1,000 starter charge brings small dishes such as shijimi soup. Most 2026 reviewers spent ¥8,000–15,000 a head. Book ahead; tables may be limited to two hours. Closed Tuesday and Wednesday.",
    chef_bio: { chef_name: null, roles: ['Owner-chef, who cooks alone (unnamed in the sources read)'], origin: null,
      background: 'Per Tabelog (the shop’s own note): the owner cooks alone, so orders can take longer when busy. Reviewers in August–September 2026 describe the chicken as Omi jidori from Shiga. Tabelog Izakaya WEST "Tabelog 100" 2024, 2025, 2026; En Primeur Club lists a 2024 Michelin Bib Gourmand (page last reviewed September 2026).',
      philosophy: null, specialty: 'Thigh tataki; white liver skewers.',
      anecdotes: [
        { text: '"After finishing our meal, the owner always bows and sees us off with a smile." — March 2026.', source: R + 'B512347904/' },
        { text: 'A September 2026 diner was booked for 18:00–20:00 and could not order more at the end because the table had another reservation.', source: R + 'B536137164/' },
        { text: '"The yakitori portions were generally large, especially the white liver, which was the biggest I’ve ever seen!" — October 2026.', source: R + 'B537979281/' },
        { text: 'An August 2026 diner found each cartilage skewer quite pricey and the overall price range a bit high.', source: R + 'B533661398/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・焼鳥・鳥料理、東山区知恩院前石橋町306-6、知恩院前バス停すぐ、月・木〜日・祝 17:30〜23:00 (L.O. 22:00)、火・水休み、月1回 12:00〜14:00 のランチ、予約可、一人で調理しているため混雑時は提供に時間がかかる、付き出し代1,000円、20席 (カウンター10、2階テーブル10)、個室10名まで、禁煙、カード可、電子マネー・QR 不可、居酒屋 WEST 百名店 2024・2025・2026。En Primeur Club: 2024年ミシュラン ビブグルマン。口コミ (2025〜2026年、英語): Omi の地鶏、もものたたき、白肝の串焼き、背肝、ちょうちん、ぼんじり、手羽、ひね鶏、しじみの味噌汁、おばんざい、からすみ卵ご飯、にゅうめん、日本酒のおまかせ、1人8,000〜15,000円、2時間制。',
      confidence: 'medium', sources: [TB, EPC, R + 'B512347904/', R + 'B533661398/', R + 'B533826476/', R + 'B533976734/', R + 'B534499780/', R + 'B534629527/', R + 'B536137164/', R + 'B536800563/', R + 'B537557614/', R + 'B537623020/', R + 'B537979281/', R + 'B538650201/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; a ¥1,000 starter charge applies; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区知恩院前石橋町306-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026; Izakaya WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.006655, 135.777941); cross-checked: GSI 京都府京都市東山区石橋町306番地 (lot) 1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B537557614/', R + 'B538650201/'],
    price_note: 'No price list read; the cover charge is from Tabelog, and most 2026 reviewers spent ¥8,000–15,000 a head.', last_checked: TODAY, items: [
      it('付き出し', '', 'Starters (cover charge)', '¥1,000', 'Starters', 'ask', 'no', 'Tabelog.', 'otoshi'),
      it('', '', 'Chicken thigh tataki', '', 'Chicken', 'ask', 'no', 'Slightly sweet soy sauce.', 'momo_tataki'),
      it('白肝の串焼き', '', 'White liver skewer', '', 'Yakitori', 'ask', 'no', 'October 2026.', 'shirogimo'),
      it('', '', 'Bonjiri skewer', '', 'Yakitori', 'ask', 'no', '', 'bonjiri'),
      it('', '', 'Karasumi egg rice', '', 'Rice', 'ask', 'no', 'October 2026.', 'karasumi_tamago_gohan'),
    ] }, {
    cuisine: 'Omi (滋賀) の地鶏の焼鳥と鶏料理 (2026年の口コミ)・もも・むねのたたき: 炭火で炙った皮と淡いピンクの中、玉ねぎ、ねぎ、生姜、やや甘い醤油・大ぶりの串: 白肝の串焼き、背肝、ちょうちん、せせり、ぼんじり、手羽、ひね鶏、軟骨・しそ巻き、ベーコンチーズ、豚すねのおろしわさび・焼き椎茸、すだちの舞茸、かつお節の青唐辛子・カウンターのおばんざい、山椒だれの蒸し鶏、熟成じゃがいものフライ・締めにからすみ卵ご飯、にゅうめん・日本酒のおまかせ、焼酎、ハイボール、ワイン (2025〜2026年の口コミ)',
    neighborhood: '知恩院前の東大路通。知恩院前バス停すぐ',
    gf_detail: '要確認。焼鳥は塩、わさび、たれ。たたきはやや甘い醤油で、にゅうめん、しそ巻き、ベーコンチーズもある。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏の店で、焼き椎茸や青唐辛子にもかつお節や出汁を使う (2026年の口コミ)。',
    notes: '[焼鳥・知恩院前、カウンターの Omi の地鶏] 知恩院前の東大路通にある20席の焼鳥店。1階のカウンターで店主が一人で滋賀の Omi の地鶏を焼く (2階はテーブル)。まずはもものたたき。炭火で炙り中はピンク、やや甘い醤油で。続いて大ぶりの串で、話題はとろりとした白肝、ほかに背肝、ぼんじり、ひね鶏。付き出し代1,000円でしじみの味噌汁などの小皿が出る。2026年の口コミでは1人8,000〜15,000円ほどが多い。予約がおすすめで、テーブルは2時間制のことも。火曜・水曜休み。',
  });
}

// ================================================================ スパイスチャンバー
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26015938/'; const R = TB + 'dtlrvwlst/';
  const SERAI = 'https://serai.jp/tour/1043405';
  const L = ['11:30', '15:00'];
  put({
    id: 'kyoto_spice_chamber', name: 'スパイスチャンバー (SPICE CHAMBER)', category: 'MOM_AND_POP',
    lat: 35.002342, lng: 135.758058, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The keema is made from onions, tomatoes, minced meat and a 17-spice mix tempered in the pan (Serai, 2021) and served on rice with grilled vegetables, achaar and pickles; no gluten information is published.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the only food is keema curry of beef and pork or of chicken (2026 reviews).',
    hours_raw: 'Lunch 11:30–15:00 Tuesday–Saturday; dinner 18:00–21:00 Tuesday only; closed Sunday and Monday (Tabelog). No reservations (Tabelog): a queue forms before opening (7th in line 10 min before opening on a September 2026 holiday; 5 ahead at 11:35 on an October 2026 weekday), with a 4-person bench outside. Each plate is stir-fried to order, so it takes 15–25 minutes (September–October 2026). Beef and pork can sell out (September 2026). 14 seats (6 at the counter, up to 8 at tables); non-smoking; cash only (Tabelog). In the Muromachi wholesale streets, 2 min from Exit 26 of Shijo / Karasuma Stn (Tabelog; October 2026).',
    hours: { 1: day(L, ['18:00', '21:00']), 2: day(L), 3: day(L), 4: day(L), 5: day(L) }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Muromachi south of Ayanokoji — 2 min from Shijo Stn Exit 26',
    cuisine: 'Spice-curry counter with one dish: keema curry (Serai, 2021), now in two kinds, beef and pork or chicken (2026 reviews) · stir-fried to order with a 17-spice mix (Serai, 2021); quite spicy, topped with fried and grilled eggplant, shishito, pumpkin and king oyster mushroom, a crunchy umeboshi in the middle, with homemade pickles · beef and pork keema with pickles: small (170 g rice) ¥1,350, medium (250 g) ¥1,500, large (320 g) ¥1,700 (September 2026); another September 2026 reviewer and an October 2026 reviewer paid ¥1,400 for a small · extras: onion achaar, yogurt, extra pickles, cheese +¥200 · mango juice ¥450, guava juice, Heartland and Kirin Classic Lager beer (2026 reviews)',
    website: null, gmaps: gm('スパイスチャンバー 京都 四条'), menu_url: null,
    notes: "[Curry · Shijo Karasuma, one keema, very spicy] A 14-seat curry counter in the Muromachi back streets that serves a single dish: keema curry, beef and pork or chicken, stir-fried to order with a 17-spice mix, topped with grilled vegetables and an umeboshi, with homemade pickles and optional onion achaar. Expect real heat — staff warn that everything is spicy — and a 15–25 minute wait for your plate. Plates from about ¥1,350–1,700 in 2026, cash only. Queue from before 11:30; lunch Tuesday to Saturday, plus Tuesday dinner.",
    chef_bio: { chef_name: '阿蘓慎太郎', roles: ['Owner (店主), per Serai (October 2021)'], origin: 'Yamagata Prefecture (Serai, 2021)',
      background: 'Per Serai (October 2021): the owner, 阿蘓慎太郎, is from Yamagata Prefecture and lived in Tokyo, Osaka and Kyoto; before the shop, worked in promotion at a record company in Osaka, then took an early-retirement offer to become a curry cook and opened SPICE CHAMBER in 2010. The owner’s CDs, used for the shop’s music, line up beside the spice jars. The name translates as "spice room". The shop was in the 2021 Michelin Guide’s curry Bib Gourmand (Serai, 2021). Tabelog Curry WEST "Tabelog 100" 2019, 2020, 2023, 2024, 2026.',
      philosophy: null, specialty: 'Keema curry (beef and pork, or chicken).',
      anecdotes: [
        { text: '"The owner has great communication skills" — September 2026.', source: R + 'B535615358/' },
        { text: '"Since they sauté the ingredients after the order is placed, it took about 25 minutes for my dish to be served." — September 2026.', source: R + 'B536078837/' },
        { text: '"At the center of the dish was a pickled plum, specifically a crunchy type, evoking nostalgic memories of old bento lunches." — September 2026.', source: R + 'B536924984/' },
        { text: 'An October 2026 diner found the curry sauce a little scant, while calling it tasty.', source: R + 'B537795489/' },
      ],
      japanese_sources_summary: 'サライ.jp (2021年10月): 店主は阿蘓慎太郎さん、山形県出身、東京、大阪、京都と移り住み2010年に SPICE CHAMBER をオープン、大阪でレコード会社の宣伝担当、早期退職の募集を機にカレー職人に転身、フードメニューはキーマカレー1種類、17種類のミックススパイス、店内の BGM の CD がスパイスの瓶の横に並ぶ、「スパイスの部屋」、2021年版ミシュラン カレー部門ビブグルマン。食べログ: カレー・インドカレー、下京区室町綾小路下る白楽天町502番地 福井ビル1F、四条駅26番出口から徒歩2分、火 11:30〜15:00・18:00〜21:00、水〜土 11:30〜15:00、日・月休み、予約不可、14席 (カウンター6、テーブル最大8)、禁煙、カード・電子マネー・QR 不可、カレー WEST 百名店 2019・2020・2023・2024・2026。口コミ (2026年8〜10月、英語): 牛豚キーマとチキンキーマ、小1,350円・中1,500円・大1,700円 (別の口コミでは小1,400円)、チーズ +200円、アチャール、ヨーグルト、ピクルス、梅干し、開店前の行列、注文後に炒めるので15〜25分。',
      confidence: 'medium', sources: [TB, SERAI, R + 'B534115383/', R + 'B535289408/', R + 'B535615358/', R + 'B536078837/', R + 'B536460222/', R + 'B536583398/', R + 'B536625266/', R + 'B536636260/', R + 'B536924984/', R + 'B537778319/', R + 'B537795489/', R + 'B538440311/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Queue outside, order at the seat; staff explain the spice level; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区室町綾小路下る白楽天町502番地 福井ビル1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; Curry WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.002342, 135.758058); cross-checked: GSI 京都府京都市下京区白楽天町502番地 (lot) 51m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536078837/', R + 'B537778319/', R + 'B534115383/'],
    price_note: 'Prices from September–October 2026 reviews, which disagree on the small beef-and-pork plate (¥1,350 in one, ¥1,400 in two).', last_checked: TODAY, items: [
      it('', '', 'Beef and pork keema curry with pickles, small / medium / large', '¥1,350 / ¥1,500 / ¥1,700', 'Curry', 'ask', 'no', 'September 2026; others paid ¥1,400 for a small (September, October 2026).', 'beef_pork_keema'),
      it('', '', 'Chicken keema curry with pickles', '', 'Curry', 'ask', 'no', '2026 reviews.', 'chicken_keema'),
      it('', '', 'Cheese topping', '+¥200', 'Extras', 'no', 'no', 'October 2026.', 'cheese'),
      it('', '', 'Onion achaar', '', 'Extras', 'ask', 'ask', '', 'achaar'),
      it('', '', 'Mango juice', '¥450', 'Drinks', '', '', 'October 2026.', 'mango_juice'),
    ] }, {
    cuisine: 'キーマカレー1種類のスパイスカレーの店 (サライ、2021年)。今は牛豚とチキンの2種 (2026年の口コミ)・注文後に17種類のミックススパイスで炒める (サライ、2021年)。辛さはしっかり。揚げ焼きの茄子、ししとう、かぼちゃ、エリンギをのせ、真ん中にカリカリの梅干し、自家製のピクルス添え・牛豚キーマ (ピクルス付き): 小 (ご飯170g) 1,350円、中 (250g) 1,500円、大 (320g) 1,700円 (2026年9月)。2026年9月と10月の別の口コミでは小1,400円・追加: 玉ねぎのアチャール、ヨーグルト、ピクルス大盛り、チーズ +200円・マンゴージュース450円、グァバジュース、ビール (Heartland、Kirin Classic Lager) (2026年の口コミ)',
    neighborhood: '綾小路の南の室町通。四条駅26番出口から徒歩2分',
    gf_detail: '要確認。キーマは玉ねぎ、トマト、挽肉と、鍋でテンパリングした17種類のミックススパイスで作り (サライ、2021年)、ご飯に焼き野菜、アチャール、ピクルスを添える。グルテンの情報は公開されていない。',
    vegan_detail: 'ヴィーガン不可。料理は牛豚かチキンのキーマカレーのみ (2026年の口コミ)。',
    notes: '[カレー・四条烏丸、辛いキーマ一筋] 室町の路地にある14席のカレーの店。料理はキーマカレーだけで、牛豚かチキンを注文ごとに17種類のスパイスで炒め、焼き野菜と梅干しをのせ、自家製ピクルスと好みで玉ねぎのアチャール。辛さは本格的で、どれも辛いと店が先に伝える。皿が出るまで15〜25分。2026年は1皿1,350〜1,700円ほど、現金のみ。11時半の開店前から行列。昼は火〜土、夜は火曜のみ。',
  });
}

save();
