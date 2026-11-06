// Kyoto "what did we miss" pass (kyoto-missed) — lane osw13 (Tabelog id mod 6 = 0), batch 36.
// Kyoto priority (Greg, 2026-11-05): 2 shops from `next core`, 2 from `next notable`, lane only; same-name count first.
//   core:    + キチ・キチ Kichi Kichi (Pontocho yoshoku of the "Happy Omurice" show, since 1978)
//            + cantina arco カンティーナ アルコ (southern-Italian trattoria on Takoyakushi, since 2014)
//   notable: + 京都 鮨ノ蔵 Kyoto Sushi no Kura (8-seat Gion omakase, sister of Sapporo's Sushi no Kura, 2024)
//            - 400℃ PIZZA KYOTO 26043840 skipped (chain: six shops and a stated aim of 10+)
//            + 御所 岩さき Gosho Iwasaki (one-chef kaiseki counter south of the Imperial Palace; Michelin one star)
//   None of the four added is in data/kyoto.json: grep by name (キチ/Kichi — hits are とん吉 and a kitchen-seat line —
//   カンティーナ/Cantina, 鮨ノ蔵, 岩さき/Iwasaki — hits are other chefs named Iwasaki) and address (材木町185-4, 油屋町145,
//   林下町434, 大津町660) found none. Same-name counts: キチキチ 1; カンティーナ アルコ 1 (other カンティーナ shops are
//   unrelated names); 鮨ノ蔵 2 (Sapporo main shop and this Kyoto shop, per reviews); 御所 岩さき 1 (岩さき亭 and 西天満
//   岩さき in the crawls are different businesses). Pins: GSI only (no OSM). No new pin within 3 m of another.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-36');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26043840', '400℃ PIZZA KYOTO: a chain — 400℃ PIZZA (株式会社ヨンヒャクド) has Okayama, Kagurazaka, Shinagawa, Shimokitazawa, Kyoto and Hakata shops (PR Times, 2026), states an aim of 10+ shops, and a November 2026 review notes it "seems to be turning into a chain"');

// ================================================================ キチ・キチ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000226/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kichikichi.com';
  const WD = day(['17:00', '21:00']); const WE = day(['12:00', '14:00'], ['17:00', '21:00']);
  put({
    id: 'kyoto_kichi_kichi', name: 'キチ・キチ (Kichi Kichi)', category: 'MOM_AND_POP',
    lat: 35.00733, lng: 135.77082, cuisine_type: 'yoshoku',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information; the omurice comes with a house demi-glace and there are cream croquettes (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the signature is an omurice of egg over chicken rice, with cream croquettes and chicken poêlé on the menu (2024–2026 reviews), though Tabelog lists vegetarian options.',
    hours_raw: 'Tabelog: Tuesday–Friday 17:00–21:00; Saturday, Sunday and holidays 12:00–14:00 and 17:00–21:00; closed Monday. Reservation only, through the official website; seating is limited to one hour and late arrivals are cancelled (Tabelog). Online booking opens at 9:00 for lunch and 13:00 for dinner and filled within three minutes for a January 2025 diner. 16 seats: 8 at the counter, 8 in booths; non-smoking; children welcome; English menu (Tabelog). Cards, IC and QR payments (Tabelog). Opened 2 December 1978 (Tabelog). Down an alley south of Sanjo between Kiyamachi and Pontocho; 5 min walk from Keihan Sanjo Stn (Tabelog; reviews).',
    hours: { 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Off Kiyamachi south of Sanjo — 5 min walk from Keihan Sanjo Stn',
    cuisine: 'Kyoto yoshoku since 1978, world-famous for the master’s "Happy Omurice" performance (official site; Tabelog) · omurice — a soft omelette slit open over ketchup chicken rice and finished with house demi-glace at the counter — ¥2,700 (March 2021), ¥3,000 (January–February 2026) · soup of the day (corn), cream croquette, chicken poêlé · sake, shochu, wine, cocktails (2024–2026 reviews; Tabelog)',
    website: SITE, gmaps: gm('キチキチ オムライス 京都'), menu_url: TB,
    notes: "[Yoshoku · Kiyamachi-Sanjo, the omurice show] A 16-seat counter yoshoku down an alley near Pontocho, open since 1978, made world-famous by its master's 'Happy Omurice' — the omelette flipped, slit and spread over ketchup rice with a flourish, demi-glace on top, and the room singing along. Omurice ¥3,000 (2026); soup and cream croquettes too. Booking online only, and slots go within minutes; one-hour sittings, mostly overseas guests. One February 2026 diner found ¥3,000 a lot unless you count the show. Closed Monday.",
    chef_bio: { chef_name: 'Motokichi Yukimura (幸村元吉)', roles: ['Master (マスター), per the official site'], origin: null,
      background: 'The official site names the master as 幸村 元吉 (Motokichi Yukimura) and is titled "オムライスで世界をHappyに!" ("making the world Happy with omurice"), with a fan club, music and overseas omurice events listed in its news. Tabelog: born in Kyoto in 1978 (opening day 2 December 1978), a western-style restaurant pursuing its own style, built on the idea that being able to order what you want, when you want, in the amount you want is the gateway to deliciousness. Reviewers describe videos viewed more than 100 million times, a visit by the King of Malaysia (January 2025) and fame in Taiwan (October 2024).',
      philosophy: 'Per Tabelog: "May the feelings of both the cooks and the diners be in perfect harmony."',
      specialty: 'Happy Omurice.',
      anecdotes: [
        { text: '"In the end, everyone, including the customers, sang the omurice song together with great enthusiasm!" — June 2024.', source: R + 'B487553617/' },
        { text: 'A diner who learned omurice from Kichi Kichi’s YouTube saved up and travelled from Nagaoka to eat it — August 2024.', source: R + 'B493913528/' },
        { text: 'A February 2026 diner, the only Japanese guest, found the ¥3,000 omurice delicious but pricey without the show.', source: R + 'B522797584/' },
      ],
      japanese_sources_summary: '公式サイト (kichikichi.com): ザ・洋食屋・キチキチ、オムライスで世界をHappyに!、マスター (幸村 元吉)、ファンクラブ、音楽のリリース、海外のオムライスイベント、予約ページ。食べログ: 洋食、中京区三条先斗町下ル材木町185-4、火〜金 17:00〜21:00、土日祝 12:00〜14:00・17:00〜21:00、月曜休み、完全予約制 (公式サイトから)、1時間制、遅刻は自動キャンセル、16席 (カウンター8、ボックス8)、禁煙、子供可、英語メニュー、ベジタリアンメニューあり、カード・電子マネー・QR 可、1978年12月2日オープン、食べたいときに食べたいものを食べたい量だけ注文できることが美味しさの入口。口コミ (2021年3月〜2026年2月、英語): オムライス2,700円 (2021年)・3,000円 (2026年)、マスターのパフォーマンス、デミグラスソース、クリームコロッケ、チキンのポワレ、オムライスの歌、ネット予約は昼9時・夜13時開始で数分で満席、海外からの客が多い。',
      confidence: 'medium', sources: [TB, SITE, R + 'B425635195/', R + 'B487553617/', R + 'B493913528/', R + 'B494279772/', R + 'B499282026/', R + 'B500316909/', R + 'B502605569/', R + 'B511002796/', R + 'B516338216/', R + 'B522797584/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog) and an English booking site; book online the moment slots open; one-hour seating.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三条先斗町下ル材木町185-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through February 2026.' },
    pin_source: `Tabelog ${TB} (35.007288, 135.770821), set 5 m north so as not to sit on kyoto_star_bar (材木町185-5 per its address_ja; 4 m from the Tabelog point); cross-checked: GSI 京都府京都市中京区材木町185番地 (lot) 36m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B522797584/'],
    price_note: 'No published menu text; omurice price from January–February 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omurice (Happy Omurice)', '¥3,000', 'Mains', 'ask', 'no', 'February 2026.', 'omurice'),
      it('', '', 'Cream croquette', '', 'Plates', 'no', 'no', '', 'cream_croquette'),
    ] }, {
    cuisine: 'マスターの「ハッピーオムライス」のパフォーマンスで世界に知られる、1978年からの京都の洋食屋 (公式サイト、食べログ)・オムライス: やわらかいオムレツをケチャップのチキンライスの上で切り開き、カウンターで自家製のデミグラスをかける、2,700円 (2021年3月)、3,000円 (2026年1〜2月)・日替わりのスープ (コーン)、クリームコロッケ、チキンのポワレ・日本酒、焼酎、ワイン、カクテル (2024〜2026年の口コミ、食べログ)',
    neighborhood: '三条の南、木屋町から入った路地。京阪三条駅から徒歩5分',
    gf_detail: '予約時に要確認。グルテンの情報はない。オムライスには自家製のデミグラス、クリームコロッケもある (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 名物は卵とチキンライスのオムライスで、クリームコロッケやチキンのポワレもある (2024〜2026年の口コミ)。食べログにはベジタリアンメニューありとある。',
    notes: '[洋食・木屋町三条、オムライスのショー] 先斗町近くの路地の16席の洋食屋、1978年から。マスターの「ハッピーオムライス」で世界に知られ、オムレツを返して切り開き、ケチャップライスの上に広げてデミグラスをかけ、最後は店中で歌う。オムライス3,000円 (2026年)、スープやクリームコロッケも。予約は公式サイトのみで、枠は数分で埋まる。1時間制、客の多くは海外から。2026年2月の客はショー抜きでは3,000円は高いと感じた。月曜休み。',
  });
}

// ================================================================ cantina arco
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26024718/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://favori.mond.jp/';
  const H = day(['14:00', '16:30'], ['18:00', '24:30']);
  put({
    id: 'kyoto_cantina_arco', name: 'cantina arco (カンティーナ アルコ)', category: 'OMNI',
    lat: 35.006307, lng: 135.765239, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; pasta, bruschetta, croquettes and fried cutlets are central, beside carpaccio, caprese and fish dishes (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options, but most dishes use cheese (braided mozzarella), cured meat, anchovy colatura or fish (2026 reviews).',
    hours_raw: 'Tabelog: 14:00–16:30 (last order 16:30) and 18:00–0:30 (last order 0:30); closed Wednesday and one longer break a month. Bookings taken, by phone for parties of 13 or more and for the sharing course; often full, so book (2026 reviews). Sharing course ¥6,000 for groups (3 antipasti, 2 pastas, main, mini dessert; May 2026). 40 seats with counter and tables, one private room for 4, private hire 20–50; non-smoking; children and strollers welcome; sommelier (Tabelog). Cards, no e-money (Tabelog). Opened 20 October 2014 (Tabelog). On the ground floor of the 洋燈館 west of Takoyakushi-Fuyacho; 5 min walk from Kawaramachi or Karasuma stations (Tabelog; 2017 review).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Takoyakushi west of Fuyacho — 5 min walk from Kawaramachi Stn',
    cuisine: 'Southern-Italian (Sicilian) trattoria cooking and Italian wine (2026 reviews) · antipasti: treccia caprese (braided buffalo mozzarella, a house specialty), carpaccio with house anchovy colatura, house bottarga, octopus and potato salad, prosciutto and salami, four-plate antipasto set · pasta: spaghetti with sardines and pine nuts, lemon spaghetti "Arco style", large fusilli with pistachio, orecchiette with meatball tomato sauce, spicy tomato pasta · mains: lamb or beef cutlet, 150 g red-beef steak, aqua pazza, zuppa di pesce · group sharing course ¥6,000 · wine by the decanter, bottles (2026 reviews)',
    website: SITE, gmaps: gm('cantina arco 京都'), menu_url: TB,
    notes: "[Italian · Takoyakushi-Fuyacho, a Sicilian-minded trattoria] A 40-seat trattoria in an old building west of Takoyakushi-Fuyacho, open from afternoon until after midnight: braided buffalo-mozzarella caprese, carpaccio with house colatura, Sicilian sardine-and-pine-nut spaghetti, lemon pasta, crisp cutlets and decanted Italian wine. Courses for groups at ¥6,000; most come à la carte. Busy in the evenings — book. Closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed) with training in Italy, per a May 2026 review'], origin: null,
      background: 'Reviewers in 2026 describe an Italian inspired by southern-Italian taverns, run by an owner-chef with training experience in Italy (May 2026); a June 2026 diner heard the owner-chef had worked at Antico in Ichijoji, and another praised the female owner. Tabelog gives the opening day as 20 October 2014. A 2017 diner already singled out the braided buffalo mozzarella as rare in Japan.',
      philosophy: null,
      specialty: 'Treccia caprese; sardine and pine-nut spaghetti.',
      anecdotes: [
        { text: '"They don’t use any strange seasonings, and you can really taste the natural flavors of the organic ingredients." — June 2026.', source: R + 'B529882493/' },
        { text: 'An August 2026 diner who came without the phone-only course was steered by the staff through the menu and given a drink at the end anyway.', source: R + 'B534407179/' },
        { text: '"I’m glad I could come here just before my training in Italy starts tomorrow." — June 2026.', source: R + 'B530348160/' },
      ],
      japanese_sources_summary: '食べログ: イタリアン・パスタ・バル、中京区油屋町145 洋燈館 1F、14:00〜16:30・18:00〜24:30 (L.O.)、水曜休み、月1回の連休、予約可 (13名以上は電話)、40席、個室 (4名)、貸切20〜50名、禁煙、子連れ・ベビーカー可、ソムリエ、ベジタリアンメニューあり、カード可、電子マネー不可、2014年10月20日オープン。口コミ (2017年4月、2026年5月〜10月、英語): 南イタリアの居酒屋のような店、イタリアで修業したオーナーシェフ、一乗寺のアンティーコ出身、女性のオーナー、トレッチャのカプレーゼ、自家製コラトゥーラのカルパッチョ、自家製からすみ、鰯と松の実のスパゲッティ、レモンのパスタ、ピスタチオのフジッリ、ミートボールのオレキエッテ、カツレツ、アクアパッツァ、6,000円のシェアコース、デキャンタのワイン。',
      confidence: 'medium', sources: [TB, R + 'B263305634/', R + 'B528265655/', R + 'B528348398/', R + 'B529882493/', R + 'B530348160/', R + 'B531818062/', R + 'B532090493/', R + 'B534407179/', R + 'B535106202/', R + 'B537650226/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'À la carte trattoria with staff who recommend dishes; book for evenings.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区油屋町145 洋燈館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.006307, 135.765239); cross-checked: GSI 京都府京都市中京区油屋町145番地 (lot) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528348398/'],
    price_note: 'No published menu; the course price is from a May 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Sharing course for groups (3 antipasti, 2 pastas, main, mini dessert)', '¥6,000', 'Courses', 'ask', 'ask', 'May 2026; book by phone.', 'sharing_course'),
      it('', '', 'Spaghetti with sardines and pine nuts', '', 'Pasta', 'no', 'no', '', 'sardine_pasta'),
      it('', '', 'Treccia caprese (braided buffalo mozzarella)', '', 'Antipasti', 'ask', 'no', '', 'treccia_caprese'),
    ] }, {
    cuisine: '南イタリア (シチリア) のトラットリアの料理とイタリアワイン (2026年の口コミ)・前菜: トレッチャのカプレーゼ (編んだ水牛のモッツァレラ、名物)、自家製コラトゥーラのカルパッチョ、自家製からすみ、蛸とじゃがいものサラダ、生ハムとサラミ、前菜4種盛り・パスタ: 鰯と松の実のスパゲッティ、アルコ風レモンのスパゲッティ、ピスタチオの大きなフジッリ、ミートボールのトマトソースのオレキエッテ、辛いトマトのパスタ・メイン: 仔羊や牛のカツレツ、赤身の牛ステーキ150g、アクアパッツァ、ズッパ・ディ・ペッシェ・グループ向けのシェアコース6,000円・デキャンタやボトルのワイン (2026年の口コミ)',
    neighborhood: '麩屋町の西の蛸薬師。河原町駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報はない。パスタ、ブルスケッタ、コロッケ、カツレツが中心で、カルパッチョ、カプレーゼ、魚料理もある (2026年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあるが、ほとんどの料理にチーズ (編んだモッツァレラ)、生ハム、コラトゥーラ、魚を使う (2026年の口コミ)。',
    notes: '[イタリアン・蛸薬師麩屋町、シチリアの心のトラットリア] 蛸薬師麩屋町の西、古い建物の40席のトラットリア。午後から深夜過ぎまで営業。編んだ水牛のモッツァレラのカプレーゼ、自家製コラトゥーラのカルパッチョ、シチリアの鰯と松の実のスパゲッティ、レモンのパスタ、カリッとしたカツレツ、デキャンタのイタリアワイン。グループには6,000円のコース、多くはアラカルトで。夜は混むので予約を。水曜休み。',
  });
}

// ================================================================ 京都 鮨ノ蔵
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26040978/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'kyoto_sushi_no_kura', name: '京都 鮨ノ蔵 (Kyoto Sushi no Kura)', category: 'OMNI',
    lat: 35.005537, lng: 135.777246, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking: one chef’s-choice course whose ingredients and cooking cannot be changed; allergies and religious restrictions must be raised in advance, not on the day, and the full fee is charged if a guest cannot eat (Tabelog).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish omakase of small dishes, nigiri, hand rolls and fish-bone miso soup, with no changes to ingredients (Tabelog; 2026 reviews).',
    hours_raw: 'Tabelog: Tuesday–Sunday 18:00–23:00, closed Monday. Reservation only; two-hour seating; 15 minutes late counts as a cancellation; a smaller party on the day is still charged for the booked number (Tabelog). Omakase only, no changes; allergies or religious restrictions must be raised in advance (Tabelog). Courses ¥22,000–24,000; an eel and crab course ¥33,000 (April and September 2026). No service charge except 10% over 31 December–3 January (Tabelog). 8 counter seats; non-smoking; BYO; children only if they can eat the adult course (Tabelog). Cards, no e-money or QR (Tabelog). Opened 26 March 2024 (Tabelog). EXIT祇園 1F; about 10 min walk from Gion-Shijo Stn (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashiyama, east of Gion — 10 min walk from Gion-Shijo Stn',
    cuisine: 'Hokkaido-sourced sushi omakase from the Kyoto sister of Sapporo’s Sushi no Kura, with red-vinegar rice in Kyoto (rice vinegar in Sapporo) (2026 reviews) · about seven small dishes — pea-clam dashi, grilled flatfish, firefly squid, hairy-crab cream, marinated oysters, herring roe with cream cheese, house karasumi — then about ten nigiri (kinmedai, spear squid, kohada, botan shrimp, smoked nodoguro, akami and chu-toro, Hokkaido uni), hand rolls, fish-bone miso soup and dessert · omakase ¥22,000–24,000; eel and crab course ¥33,000 · rare sake by the glass, unpriced on the list (2025–2026 reviews)',
    website: TB, gmaps: gm('京都 鮨ノ蔵 祇園'), menu_url: TB,
    notes: "[Sushi · Gion-Higashiyama, Hokkaido fish on red-vinegar rice] An eight-seat counter, opened March 2024 as the Kyoto sister of Sapporo's hard-to-book Sushi no Kura: a single omakase of about seven Hokkaido-led small dishes — herring roe with cream cheese, hairy-crab cream — then ten or so nigiri on mild red-vinegar rice, hand rolls and fish-bone miso soup, for ¥22,000–24,000. The chef speaks English to overseas guests. No changes to the course; reservation only. Tue–Sun evenings.",
    chef_bio: { chef_name: null, roles: ['Head chef (named only in a machine-translated review)'], origin: null,
      background: 'Reviewers in 2026 describe the shop as a sister of the Sapporo restaurant Sushi no Kura, produced by its chef, with Hokkaido ingredients, red-vinegar rice in Kyoto against rice vinegar in Sapporo (May 2026), and a friendly head chef who speaks English with overseas guests (August 2025; September 2026). A September 2026 review names the producer and the chef at the counter, but only in English translation, so the names are not used here. Tabelog gives the opening day as 26 March 2024.',
      philosophy: null,
      specialty: 'Omakase of Hokkaido fish; smoked nodoguro nigiri.',
      anecdotes: [
        { text: '"I feel like the chef\'s English skills are improving more and more, haha." — August 2025.', source: R + 'B482856959/' },
        { text: 'A March 2026 diner wished the staff were a bit more cheerful.', source: R + 'B508665687/' },
        { text: 'A diner who visits almost monthly loves the delicately scored squid and the smoked nodoguro, and hopes the "quick drink set" of five small plates returns — June 2026.', source: R + 'B531363326/' },
      ],
      japanese_sources_summary: '食べログ: 寿司、東山区林下町434 EXIT祇園 1F、火〜日 18:00〜23:00、月曜休み、完全予約制、2時間制、15分以上の遅刻はキャンセル扱い、当日の人数減でも予約人数分を請求、おまかせのみで食材・調理法の変更不可、アレルギーや宗教上の制限は事前に相談、当日の申告は不可、サービス料・チャージなし (年末年始は10%)、カウンター8席、禁煙、持ち込み可、大人と同じコースを食べられない子供は不可、カード可、2024年3月26日オープン。口コミ (2024年11月〜2026年10月、英語): 札幌の鮨ノ蔵の姉妹店、北海道の食材、京都は赤酢・札幌は米酢、おまかせ22,000〜24,000円、鰻と蟹のコース33,000円、つまみ7品ほど、数の子とクリームチーズ、毛蟹のクリーム、炙りののどぐろ、北海道の雲丹、手巻き、あら汁の味噌汁、大将は英語で会話。',
      confidence: 'medium', sources: [TB, R + 'B482856959/', R + 'B508665687/', R + 'B517036499/', R + 'B522385421/', R + 'B524449959/', R + 'B531363326/', R + 'B532820759/', R + 'B535728679/', R + 'B536751719/', R + 'B537270364/'] },
    cultural_comfort: { level: 'english', note: 'The chef speaks English with overseas guests (2025–2026 reviews); omakase only, booked ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区林下町434 EXIT祇園 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005537, 135.777246); cross-checked: GSI 京都府京都市東山区林下町434番地 (lot) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B482856959/', R + 'B536751719/'],
    price_note: 'No published menu; course prices from April and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omakase', '¥22,000–24,000', 'Omakase', 'ask', 'no', 'April–September 2026.', 'omakase'),
      it('', '', 'Eel and crab omakase', '¥33,000', 'Omakase', 'ask', 'no', 'April 2026.', 'eel_crab_omakase'),
    ] }, {
    cuisine: '札幌の鮨ノ蔵の京都の姉妹店の、北海道の食材のおまかせ。京都は赤酢のシャリ (札幌は米酢) (2026年の口コミ)・つまみ7品ほど: 青柳のだし、炙りの鮃、ほたるいか、毛蟹のクリーム、漬け牡蠣、数の子とクリームチーズ、自家製からすみ・握り10貫ほど (金目鯛、ヤリイカ、こはだ、ぼたん海老、炙りののどぐろ、赤身と中トロ、北海道の雲丹)、手巻き、あら汁の味噌汁、デザート・おまかせ22,000〜24,000円、鰻と蟹のコース33,000円・値段の書かれていない珍しい日本酒 (2025〜2026年の口コミ)',
    neighborhood: '祇園の東の東山。祇園四条駅から徒歩10分',
    gf_detail: '予約時に要確認: 食材や調理法を変えられないおまかせのみで、アレルギーや宗教上の制限は当日ではなく事前に相談、食べられなくても全額がかかる (食べログ)。',
    vegan_detail: 'ヴィーガン不可: つまみ、握り、手巻き、あら汁の味噌汁の魚のおまかせで、食材の変更はできない (食べログ、2026年の口コミ)。',
    notes: '[寿司・祇園東山、赤酢のシャリに北海道の魚] 予約の取りにくい札幌の鮨ノ蔵の京都の姉妹店として、2024年3月に開いたカウンター8席の店。数の子とクリームチーズや毛蟹のクリームなど北海道中心のつまみ7品ほど、まろやかな赤酢のシャリの握り10貫ほど、手巻き、あら汁で22,000〜24,000円。大将は海外からの客と英語で話す。コースの変更不可、完全予約制。火〜日の夜。',
  });
}

// ================================================================ 御所 岩さき
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26036676/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.gosho-iwasaki.com/';
  const H = day(['12:00', '14:00'], ['18:00', '21:00']);
  put({
    id: 'kyoto_gosho_iwasaki', name: '御所 岩さき (Gosho Iwasaki)', category: 'MOM_AND_POP',
    lat: 35.016896, lng: 135.761834, cuisine_type: 'kaiseki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the restaurant says it cannot accommodate gluten-free diets and asks such guests not to come (Tabelog).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a dashi-based kaiseki of fish, crab, shellfish, duck or beef hot pot; the restaurant cannot accommodate fish, shellfish or mollusc allergies (Tabelog; 2024–2026 reviews).',
    hours_raw: 'Tabelog: lunch from 12:00 and dinner from 18:00 (all guests start together), closed Wednesday. Bookings online or by phone; mention allergies when booking; gluten-free diets and fish, shellfish or mollusc allergies cannot be accommodated; cancellation or change on the day is charged in full (Tabelog). Omakase course ¥23,100 (official site); lunch courses ¥11,000–11,500 (2023–2024 reviews). Service charge 5% (Tabelog). 8 seats: 6 at the counter, 2 at a table; non-smoking; school-age children (Tabelog). Cards, no e-money or QR (Tabelog). The chef works alone (2024–2026 reviews). Just south of Marutamachi-dori; 3 min walk from Marutamachi Stn (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'South of the Imperial Palace, just south of Marutamachi — 3 min walk from Marutamachi Stn',
    cuisine: 'Seasonal Kyoto kaiseki served at a small counter, never repeating a menu for a returning guest (official site) · omakase ¥23,100 (official site); lunch ¥11,000–11,500 (2023–2024) · dishes seen: crab with Tosa-vinegar jelly, homemade karasumi mochi, abalone with egg-yolk vinegar, sesame tofu in white miso, sashimi of guji and sea bream, hamo and matsutake, grilled managatsuo, duck or beef-loin hot pot, kamadaki rice with pickles and mentaiko (2022–2026 reviews) · Japanese sake under ¥1,000 a gō (April 2025)',
    website: SITE, gmaps: gm('御所 岩さき 京都'), menu_url: SITE,
    notes: "[Kaiseki · south of the Imperial Palace, one chef, eight seats] An eight-seat kaiseki counter near the Imperial Palace where the chef, trained at Wakuden and Gion Maruyama and once head chef at the inn Hiiragiya, cooks and serves alone, never giving a returning guest the same menu: crab in Tosa-vinegar jelly, karasumi mochi, a seasonal soup, hot pot, kamadaki rice. Omakase ¥23,100; Michelin one star (Michelin Guide Kyoto Osaka 2025). No gluten-free; no fish or shellfish allergies. Closed Wednesday.",
    chef_bio: { chef_name: '岩崎義則', roles: ['Owner-chef (店主), per the official site'], origin: null,
      background: 'Per the official site: drawn to cooking by an elder brother who was a cook, the owner trained at the Kyoto ryotei 和久傳 and 祇園丸山 and served as head chef at the inn 京の宿 柊家, then opened 御所 岩さき near the Imperial Palace in 2007 (Heisei 19); following the inn custom of changing the menu for guests staying several nights, the chef never serves the same menu twice; one Michelin star in the Michelin Guide Kyoto Osaka 2025. A 2025 review says the restaurant moved from near Karasuma Oike and reopened here in 2021; reviewers in 2024–2026 note the chef runs everything alone.',
      philosophy: 'Per the official site: "旬に寄り添い、心を満たす" — staying close to the season to satisfy the heart; a once-in-a-lifetime menu each visit.',
      specialty: 'Seasonal kaiseki omakase; kamadaki rice.',
      anecdotes: [
        { text: 'An October 2024 guest asked about New Year osechi; the chef said that, working alone, osechi could not be made that year.', source: R + 'B452476665/' },
        { text: '"Within four seconds of arriving, crab was served." — April 2025.', source: R + 'B504950729/' },
        { text: 'A December 2023 guest who booked through another site paid almost ¥5,000 more for the same course than on Tabelog.', source: R + 'B475949572/' },
      ],
      japanese_sources_summary: '公式サイト (gosho-iwasaki.com): 京都市・丸太町、御所南エリアの日本料理店「御所 岩さき (ごしょ いわさき)」、旬の食材の繊細な会席料理をコースで、京都御所や二条城から徒歩圏内、一期一会の献立 (一度来た客に同じものは出さない)、「旬に寄り添い、心を満たす」、店主 岩崎義則: 料理人の兄の影響で料理人を志す、和久傳・祇園丸山で修業、京の宿 柊家で料理長、平成19年に京都御所近くで独立、旅館のもてなしに倣い同じ献立は出さない、ミシュランガイド京都・大阪2025で一つ星、おまかせコース23,100円 (税込)。食べログ: 日本料理、中京区間之町通丸太町下ル東側大津町660、昼12:00・夜18:00一斉スタート、水曜休み、アレルギーは予約時に、グルテンフリーと魚・甲殻類・軟体類のアレルギーは対応不可、当日のキャンセル・変更は100%、サービス料5%、8席 (カウンター6、テーブル2)、禁煙、小学生以上、カード可。口コミ (2022年12月〜2026年9月、英語): 昼のコース11,000〜11,500円、蟹の土佐酢ジュレ、からすみ餅、鮑、胡麻豆腐の白味噌仕立て、ぐじ、鱧と松茸、鴨や牛ロースの鍋、釜炊きご飯、店主ひとりで営業、2021年に烏丸御池近くから移転。',
      confidence: 'medium', sources: [TB, SITE, R + 'B452476665/', R + 'B458840394/', R + 'B462785800/', R + 'B474940018/', R + 'B475949572/', R + 'B498479447/', R + 'B504950729/', R + 'B510774632/', R + 'B516139052/', R + 'B535895725/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set kaiseki with a single start time; dishes explained clearly for overseas guests (October 2025); book ahead.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区間之町通丸太町下ル東側大津町660',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through September 2026; Michelin one star (2025 guide).' },
    pin_source: `Tabelog ${TB} (35.016896, 135.761834); cross-checked: GSI 京都府京都市中京区大津町660番地 (lot) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, R + 'B462785800/'],
    price_note: 'Omakase price from the official site; lunch price from 2023–2024 reviews.', last_checked: TODAY, items: [
      it('おまかせコース', '', 'Omakase course', '¥23,100', 'Course', 'no', 'no', 'Tax included.', 'omakase'),
      it('', '', 'Lunch course', '¥11,000–11,500', 'Lunch', 'no', 'no', '2023–2024.', 'lunch_course'),
    ] }, {
    cuisine: '一度来た客に同じ献立は出さない、小さなカウンターの季節の京会席 (公式サイト)・おまかせ23,100円 (公式サイト)、昼11,000〜11,500円 (2023〜2024年)・これまでの料理: 蟹の土佐酢ジュレ、自家製からすみ餅、鮑の黄身酢、胡麻豆腐の白味噌仕立て、ぐじと鯛のお造り、鱧と松茸、まながつおの焼き物、鴨や牛ロースの鍋、釜炊きご飯と香の物と明太子 (2022〜2026年の口コミ)・日本酒は1合1,000円以下 (2025年4月)',
    neighborhood: '御所の南、丸太町の南の間之町通。丸太町駅から徒歩3分',
    gf_detail: 'グルテンフリーではない: グルテンフリーには対応できず、そうした客の来店は控えるよう店が案内している (食べログ)。',
    vegan_detail: 'ヴィーガン不可: 魚、蟹、貝、鴨や牛の鍋のだしの会席で、魚・甲殻類・軟体類のアレルギーにも対応できない (食べログ、2024〜2026年の口コミ)。',
    notes: '[会席・御所南、料理人ひとり、8席] 御所近くの8席の会席のカウンター。和久傳と祇園丸山で修業し、柊家で料理長を務めた店主がひとりで料理も給仕もこなし、同じ客に同じ献立は出さない。蟹の土佐酢ジュレ、からすみ餅、季節のお椀、鍋、釜炊きご飯。おまかせ23,100円。ミシュランガイド京都・大阪2025で一つ星。グルテンフリー不可、魚介のアレルギー不可。水曜休み。',
  });
}

save();
