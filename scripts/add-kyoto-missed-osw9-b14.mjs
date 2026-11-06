// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 14.
//   + トレイントレイン Train Train (wine izakaya south of Kyoto City Hall: lunch sets, small plates, ~200 French wines)  [core]
//   + いづう Izuu (Gion saba-zushi house founded 1781; eat-in tables and takeaway)                               [core]
//   + RESTAURANT KOGA (French in a 120-year-old machiya on Ogawa-dori; opened 2025)                              [notable]
//   + NISHITOMIYA (croquette and wine bar by the Shirakawa at Sanjo)                                             [notable]
//   Same-name counts first: トレイントレイン 1; いづう — 2 in our crawls (本店 26000585, ジェイアール京都伊勢丹店 26040722)
//   and 3 shops on its own site (本店, 大丸京都店, ジェイアール京都伊勢丹店), none in data — a small group, so the main shop
//   is drafted; RESTAURANT KOGA 1 (KOGASHI 天神橋筋六丁目店 in the Osaka crawl is a different name); NISHITOMIYA 1.
//   Taken in queue order on 2026-11-05: core 26037191, 26000585; notable 26042447, then 26023295 水暉 (passed over, see
//   the report: a restaurant inside The Ritz-Carlton Kyoto, whose dining is covered by vm_the_ritz_carlton_kyoto),
//   26000585 (already taken as core), 26036585. None of the four is in data/kyoto.json by name or address.
//   Pins: Tabelog points, no record within 41 m. いづう's GSI result is a different town (八坂上町), so loc_approx 'single'.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-14');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ トレイントレイン
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26037191/'; const R = TB + 'dtlrvwlst/';
  const L = ['11:30', '14:00'], D = ['17:30', '22:30'];
  put({
    id: 'kyoto_train_train', name: 'トレイントレイン (Train Train)', category: 'OMNI',
    lat: 35.007818, lng: 135.766523, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pasta, gratin, fritto, bread with the lunch sets; no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A vegetable appetizer platter is offered, but an October 2026 reviewer says the assortment is seasoned with dashi; most mains are fish or meat (Tabelog; 2026 reviews).',
    hours_raw: 'Tue–Sat 11:30–14:00 and 17:30–22:30; Sun 12:00–17:00 (café until 17:00); closed Monday (Tabelog). Bookings online; by phone for more than 9 people or after 21:00; at a full lunch, tables are limited to 90 minutes (Tabelog). 20 seats (4 at the counter); non-smoking; children welcome, strollers stored rather than brought in; cards (VISA, Master, JCB, AMEX, Diners), no e-money or QR (Tabelog). 5 min from Kyoto Shiyakusho-mae Stn (Tabelog).',
    hours: { 1: day(L, D), 2: day(L, D), 3: day(L, D), 4: day(L, D), 5: day(L, D), 6: day(['12:00', '17:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'South of Kyoto City Hall — 5 min from Kyoto Shiyakusho-mae Stn, 10 min from Kawaramachi',
    cuisine: 'Wine bar and izakaya with French, Italian and Japanese plates that change daily: about eight small plates such as marinated mushrooms and pork rillettes, salads and fried dishes, mains like beef sirloin steak and meat-sauce spaghetti; lunch sets of a main with bread, soup and a drink; a cellar of about 200 bottles, mainly French, and about 10 wines by the glass (Tabelog) · vegetable and meat appetizer platters (mixed on request), squid-ink "black Neapolitan" pasta, gratin of salmon and Kamo eggplant, itoyori and mussels simmered in Kyoto dashi, rare-fried sawara, braised pork belly with lentils, hashed beef, pudding (2026 reviews)',
    website: null, gmaps: gm('トレイントレイン 京都 海老屋町'), menu_url: TB + 'dtlmenu/',
    notes: "[Wine izakaya · south of Kyoto City Hall] A stylish 20-seat bar for wine and food, with plates that change daily — French, Italian and Japanese — and staff who pour by the glass after asking what you like. Lunch sets around ¥2,000; dinner around ¥6,000–8,000. Booking advised: it fills up even on weekdays. Closed Monday.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed in the sources)'], origin: null,
      background: 'Opened 2 February 2022 (Tabelog). Per the operator: dishes change daily with the fresh ingredients — fish such as flounder and sea bream, chicken and beef; about 200 bottles in the cellar, mainly French.',
      philosophy: null, specialty: 'Small plates with wine; black Neapolitan pasta.',
      anecdotes: [
        { text: 'An October 2026 diner found the owner\'s passion for wine plain in the detailed explanations, and moved from glasses to two bottles.', source: R + 'B536942339/' },
        { text: 'A reviewer who mixed up the booking date by a day was still served with care — October 2026.', source: R + 'B537006431/' },
        { text: 'A lunch with an extra glass of wine (¥500) and the pudding (¥500) came to ¥2,900 — October 2026.', source: R + 'B537483704/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): トレイントレイン、居酒屋・バル・ワインバー、中京区海老屋町327、京都市役所前駅から徒歩5分、火〜土 11:30〜14:00・17:30〜22:30、日 12:00〜17:00 (カフェ)、月曜休み、20席 (カウンター4席)、禁煙、カード可、2022年2月2日オープン、日替わりの前菜からメインまで (フレンチ、イタリアン、和)、ワインは仏中心に約200本、グラス約10種。口コミ (2026年6〜10月、英語): 前菜盛り合わせ (野菜と肉を混ぜてくれる)、黒いナポリタン (イカ墨)、鮭と賀茂なすのグラタン、いとよりとムール貝の煮込み、鰆のレア揚げ、豚バラとレンズ豆の煮込み、ハッシュドビーフ、プリン。',
      confidence: 'medium', sources: [TB, R + 'B530951323/', R + 'B536942339/', R + 'B536947703/', R + 'B537006431/', R + 'B537441986/', R + 'B537483704/', R + 'B537542273/', R + 'B537951797/', R + 'B538038246/', R + 'B538402126/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book online; tell the staff what wine you like.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区海老屋町327',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007818, 135.766523); cross-checked: GSI 京都府京都市中京区海老屋町327番地 (lot) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537483704/', R + 'B536947703/'],
    price_note: 'No priced menu read; prices from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Glass of wine added to lunch', '¥500', 'Lunch', '', 'ask', 'October 2026 review.', 'lunch_wine'),
      it('', '', 'Pudding', '¥500', 'Dessert', 'ask', 'no', 'October 2026 review.', 'pudding'),
      it('', '', 'Braised pork belly with lentils (lunch)', '', 'Lunch', 'ask', 'no', 'October 2026 review.', 'pork_lentils'),
    ] }, {
    cuisine: '日替わりのフレンチ、イタリアン、和の皿のワインバー兼居酒屋: マッシュルームのマリネや豚のリエットなど8種ほどの小皿、サラダや揚げ物、牛サーロインステーキやミートソースのスパゲッティなどのメイン。昼はメインにパン、スープ、ドリンクのセット。仏中心に約200本のセラーとグラス約10種 (食べログ)・野菜と肉の前菜盛り合わせ (混ぜてもらえる)、イカ墨の黒いナポリタン、鮭と賀茂なすのグラタン、京都の出汁で煮たいとよりとムール貝、鰆のレア揚げ、豚バラとレンズ豆の煮込み、ハッシュドビーフ、プリン (2026年の口コミ)',
    neighborhood: '京都市役所の南。京都市役所前駅から徒歩5分、河原町から10分',
    gf_detail: '要確認。パスタ、グラタン、フリット、ランチのパン。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: '要確認。野菜の前菜盛り合わせはあるが、2026年10月の口コミでは盛り合わせに出汁が効いているとあり、メインの多くは魚か肉 (食べログ、2026年の口コミ)。',
    notes: '[ワイン居酒屋・京都市役所の南] 20席のおしゃれなワインと料理の店。日替わりのフレンチ、イタリアン、和の皿に、好みを聞いてグラスワインを選んでくれる。昼のセットは2千円前後、夜は6千〜8千円ほど。平日も埋まるので予約がおすすめ。月曜休み。',
  });
}

// ================================================================ いづう
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000585/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.izuu.jp/'; const EAT = SITE + 'eating'; const EN = SITE + 'english';
  const H = day(['11:00', '22:00']);
  put({
    id: 'kyoto_izuu', name: 'いづう (Izuu)', category: 'OMNI',
    lat: 35.004855, lng: 135.77451, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pressed sushi of vinegared mackerel wrapped in kombu; grilled-anago sushi is sauced, and the sushi rice and seasonings are not described (official site; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: mackerel, sea bream, conger eel and other fish sushi (official site).',
    hours_raw: '11:00–22:00 (last order 21:30); Sundays and holidays to 21:00 (last order 20:30); closed Tuesday, but open on holidays and some event days, announced on Instagram (official site; Tabelog). Eat-in seats cannot be booked; takeaway saba-zushi can be reserved by phone from 8:00, other orders online (Tabelog). 16 seats at four tables of four; non-smoking; the only soft drink is oolong tea; cards, IC cards and PayPay (Tabelog). 5 min from Gion-Shijo Stn exit 7 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: day(['11:00', '21:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion north of Shijo (Yasaka-shinchi) — 5 min from Gion-Shijo Stn',
    cuisine: 'Kyoto pressed sushi, above all saba sugata-zushi: fatty chub mackerel from Japanese waters on a house rice blend, wrapped in Hokkaido kombu (official site) · eat-in menu, 4 pieces unless noted: saba sugata-zushi ¥2,200, kodai suzume-zushi ¥1,980, amadai sugata-zushi ¥4,400, tai-zushi ¥1,980, hamo sugata-zushi (summer) ¥5,060, grilled-anago sushi ¥1,760, futomaki ¥1,760, Kyo-chirashi ¥3,300, mushi-zushi (winter) ¥3,300, Kyo-zushi assortment ¥3,960 (official site) · reviewers also had a limited set comparing yesterday\'s and today\'s saba (¥2,500), sea bream with yuzu in bamboo leaf (¥495), and a "Gion Flavor" set with a clear soup (¥3,190) (2026 reviews) · takeaway and nationwide delivery (official site)',
    website: SITE, gmaps: gm('いづう 祇園 鯖姿寿司'), menu_url: EAT,
    notes: "[Saba-zushi · Gion, since 1781] The old Gion house for Kyoto's mackerel pressed sushi, in a machiya with a white noren: four pieces of saba sugata-zushi wrapped in kombu (¥2,200) at one of four tables, or boxed to take away. Try the set comparing yesterday's and today's saba. No bookings for the tables; some reviewers find it pricey for the portion. Closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Family business (no person named for today)'], origin: null,
      background: 'Per the official site: founded in 1781 (Tenmei 1) by the first-generation いづみや卯兵衛 ("Izumiya Uhe" on the English site). Besides this main shop there are counters at Daimaru Kyoto and JR Kyoto Isetan, and the sushi is sold at several department stores and Kyoto Station.',
      philosophy: null, specialty: 'Saba sugata-zushi.',
      anecdotes: [
        { text: 'A September 2026 visitor learned that the large straw sandals on display are where the ajari monk changes footwear.', source: R + 'B534850311/' },
        { text: 'An October 2026 visitor came because a late grandparent had loved the saba-zushi, and the chef shared stories of the shop\'s history.', source: R + 'B538011487/' },
        { text: 'A September 2026 reviewer found both assortments "quite small" for the price; a November 2026 regular "couldn\'t help but laugh at the prices".', source: R + 'B536358439/' },
      ],
      japanese_sources_summary: '公式サイト (izuu.jp): いづう、天明元年 (1781年) に初代いづみや卯兵衛が創業、京名物 鯖姿寿司、鯖は日本近海の脂がのった真鯖、いづう特選米、寿司全体を包む昆布は北海道産、本店 東山区八坂新地清本町367、11:00〜22:00 (日祝〜21:00)、火曜休み (祝日・行事の日は営業)、お召し上がり処 (税込): 鯖姿寿司2,200円、小鯛の雀寿司1,980円、甘鯛姿寿司4,400円、鯛寿司1,980円、鱧姿寿司 (夏季) 5,060円、焼穴子寿司1,760円、太巻き寿司1,760円、京ちらし寿司3,300円、蒸し寿司 (冬季) 3,300円、京寿司盛合せ3,960円、大丸京都店とジェイアール京都伊勢丹店。食べログ: 予約不可 (持ち帰りの鯖姿寿司のみ8時から電話予約)、16席 (4人席4卓)、ソフトドリンクは烏龍茶のみ、カード・電子マネー・PayPay 可。口コミ (2026年8〜11月、英語): 昨日と今日の鯖の食べ比べ、柚子の香る鯛の笹巻き寿司、吸い物付きの盛り合わせ、阿闍梨のわらじ。',
      confidence: 'high', sources: [TB, SITE, EAT, EN, R + 'B533107146/', R + 'B534850311/', R + 'B535643334/', R + 'B536139740/', R + 'B536245837/', R + 'B536358439/', R + 'B536992114/', R + 'B537140333/', R + 'B538011487/', R + 'B538583817/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Walk in for a table (no bookings); takeaway by phone or online. A September 2026 reviewer heard staff serving in fluent English.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区八坂新地清本町367',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.004855, 135.774510); cross-checked: GSI matched only a different town (京都府京都市東山区八坂上町), so loc_approx 'single'; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'high', sources: [EAT],
    price_note: 'Main-shop eat-in prices from the official site, tax included (read 2026-11-05).', last_checked: TODAY, items: [
      it('鯖姿寿司', 'saba sugata-zushi', 'Whole-mackerel pressed sushi (4 pieces)', '¥2,200', 'Sushi', 'ask', 'no', '', 'saba_sugata'),
      it('小鯛の雀寿司', 'kodai no suzume-zushi', 'Small sea bream "sparrow" sushi (4 pieces)', '¥1,980', 'Sushi', 'ask', 'no', '', 'kodai_suzume'),
      it('甘鯛姿寿司', 'amadai sugata-zushi', 'Tilefish pressed sushi (4 pieces)', '¥4,400', 'Sushi', 'ask', 'no', '', 'amadai_sugata'),
      it('鯛寿司', 'tai-zushi', 'Sea bream sushi (4 pieces)', '¥1,980', 'Sushi', 'ask', 'no', '', 'tai_zushi'),
      it('鱧姿寿司', 'hamo sugata-zushi', 'Pike-conger pressed sushi (4 pieces, summer)', '¥5,060', 'Sushi', 'ask', 'no', '', 'hamo_sugata'),
      it('焼穴子寿司', 'yaki-anago-zushi', 'Grilled conger-eel sushi (4 pieces)', '¥1,760', 'Sushi', 'ask', 'no', '', 'yaki_anago'),
      it('太巻き寿司', 'futomaki-zushi', 'Thick roll (4 pieces)', '¥1,760', 'Sushi', 'ask', 'ask', '', 'futomaki'),
      it('京ちらし寿司', 'Kyo-chirashi-zushi', 'Kyoto chirashi sushi', '¥3,300', 'Sushi', 'ask', 'no', '', 'kyo_chirashi'),
      it('蒸し寿司', 'mushi-zushi', 'Steamed sushi (winter)', '¥3,300', 'Sushi', 'ask', 'no', '', 'mushi_zushi'),
      it('京寿司盛合せ', 'Kyo-zushi moriawase', 'Kyoto sushi assortment', '¥3,960', 'Sushi', 'ask', 'no', '', 'kyo_moriawase'),
    ] }, {
    cuisine: '京の押し寿司、なかでも鯖姿寿司: 日本近海の脂ののった真鯖といづう特選米を北海道産の昆布で包む (公式サイト)・お召し上がり処 (特記なしは4貫): 鯖姿寿司2,200円、小鯛の雀寿司1,980円、甘鯛姿寿司4,400円、鯛寿司1,980円、鱧姿寿司 (夏季) 5,060円、焼穴子寿司1,760円、太巻き寿司1,760円、京ちらし寿司3,300円、蒸し寿司 (冬季) 3,300円、京寿司盛合せ3,960円 (公式サイト)・口コミには数量限定の昨日と今日の鯖の食べ比べ (2,500円)、柚子の香る鯛の笹巻き寿司 (495円)、吸い物付きの Gion Flavor のセット (3,190円) も (2026年の口コミ)・持ち帰りと全国配送 (公式サイト)',
    neighborhood: '四条の北の祇園 (八坂新地)。祇園四条駅から徒歩5分',
    gf_detail: '要確認。酢で締めた鯖を昆布で包む押し寿司。焼穴子寿司はたれ付きで、すし飯や調味料の説明はない (公式サイト、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鯖、鯛、穴子など魚の寿司 (公式サイト)。',
    notes: '[鯖寿司・祇園、1781年創業] 白いのれんの町家にある、京の鯖寿司の老舗。昆布で包んだ鯖姿寿司4貫 (2,200円) を4卓のテーブルで食べるか、持ち帰りで。昨日と今日の鯖の食べ比べもおすすめ。席の予約はできない。量の割に高いと感じる口コミもある。火曜休み。',
  });
}

// ================================================================ RESTAURANT KOGA
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26042447/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://koga-kyoto.jp/'; const EN = SITE + 'english/';
  const H = day(['12:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_restaurant_koga', name: 'RESTAURANT KOGA', category: 'OMNI',
    lat: 35.03019, lng: 135.754331, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. The restaurant asks for allergies and restrictions at booking and may decline bookings that rule out much of what it cooks with, naming wheat, egg, dairy, butter, olive oil and nuts (official site).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: "ベジタリアン、ビーガンの対応は出来かねます" — vegetarian and vegan requests cannot be met (official site; Tabelog).',
    hours_raw: 'Lunch 12:00 (last order 13:00); dinner 18:00 (last order 19:30 — the site gives 19:00 in one place); closed Tuesday and Wednesday, with some special openings (official site; Tabelog). Bookings online (TableCheck) or by phone; 100% charge for same-day cancellation (Tabelog). Lunch course ¥12,000, dinner course ¥22,000, tax included, plus 10% service (official site). 32 seats: tables for 16 and a private room for up to 16; wheelchair accessible; English menu and English-speaking staff; sommelier; BYO allowed; no very casual clothes such as men\'s shorts and sandals; children welcome if able to eat the adult menu; cards incl. UnionPay (Tabelog). 8 min west of Imadegawa Stn along Imadegawa-dori (Tabelog).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ogawa-dori north of Imadegawa, west of the Imperial Palace — 8 min from Imadegawa Stn',
    cuisine: 'French omakase in a renovated 120-year-old machiya: lunch 8–10 dishes ¥12,000, dinner 10–12 dishes ¥22,000 (official site) · signature warm salad of 30-plus vegetables picked that morning; seafood sent direct; a cellar for up to 3,000 bottles, mainly French (Tabelog) · 2026 reviews: corn dog with crab cream or fond de veau and duck, squid and sardine tarts, scallops with zucchini and saffron, spicy fish beignet, Kyoto Mochi pork with Kita Akari gnocchi, chicken with cep sauce, pigeon, a soufflé baked to order, freshly baked financier · wine pairing 60 ml ¥8,000 or 30 ml ¥6,000 (October 2026 review)',
    website: SITE, gmaps: gm('RESTAURANT KOGA 京都 中小川町'), menu_url: SITE,
    notes: "[French · Ogawa-dori near the Imperial Palace, Michelin one star per reviewers] Chef 古賀 隆稚 (Koga Ryuji) — once deputy head chef at Le Cinq in Paris and later head chef at the Four Seasons Hotel Kyoto — opened this French restaurant in a renovated machiya in 2025. Omakase only: lunch ¥12,000, dinner ¥22,000, plus 10%. English menu and staff; no vegan or vegetarian meals. Closed Tuesday and Wednesday.",
    chef_bio: { chef_name: '古賀 隆稚 (Koga Ryuji)', roles: ['Chef'], origin: 'Fukuoka Prefecture (official site).',
      background: 'Per the official site: after École Tsuji\'s school in France and training in regional France, worked from 2006 at Joël Robuchon (Ebisu), then in France at Le Chabichou (Courchevel), Villa Archange (Cannes), Ledoyen (Paris) and as sous-chef at a one-star restaurant; from 2016 the first Japanese deputy head chef, also developing menus, at Le Cinq (Hôtel George V, Paris) under Christian Le Squer; back in Japan in 2019 as head chef at the Four Seasons Hotel Kyoto. RED U-35 bronze egg 2013 and silver egg 2014 and 2015. Opened KOGA on 9 January 2025 (Tabelog). An October 2026 reviewer writes that it holds one Michelin star in the 2026 Kyoto-Osaka guide.',
      philosophy: 'Per the official site: a restaurant as a "総合芸術" (total art) of space, service and cuisine; respect for every ingredient and its producer; combining ingredients like a perfumer combines scents.',
      specialty: 'Warm salad of 30-plus vegetables; soufflé baked to order.',
      anecdotes: [
        { text: 'A September 2026 return guest asked about each dish and the chef "openly shared everything I was curious about".', source: R + 'B528006958/' },
        { text: 'An August 2026 diner\'s one complaint: the cheese in the little pizza was hot enough to burn two tongues.', source: R + 'B534683709/' },
        { text: 'A fifth-time guest in October 2026 praised the "cuisson" and that past dishes are tracked so each visit brings something new.', source: R + 'B530486937/' },
      ],
      japanese_sources_summary: '公式サイト (koga-kyoto.jp): RESTAURANT KOGA、シェフ 古賀 隆稚 (KOGA RYUJI)、福岡県生まれ、エコール辻フランス校卒業後フランスの地方にて研修、2006年よりジョエル・ロブション (恵比寿)、Le Chabichou、Villa Archange、Ledoyen、2016年 Le Cinq でクリスチャン ルスケール氏のもと日本人で初めての副料理長兼メニュー開発、2019年帰国後フォーシーズンズホテル京都料理長、空間・サービス・料理がひとつになって完成する総合芸術、ランチ12,000円・ディナー22,000円 (税込、サービス料10%)、Lunch 12:00〜13:00 L.O.、Dinner 18:00〜19:30 L.O.、毎週火・水曜休み、ベジタリアン・ビーガンの対応は出来かねます。食べログ: フレンチ、上京区小川通今出川上ル中小川町230、築120年の町家を改装、32席・個室16名、ソムリエ、英語メニュー、持ち込み可、2025年1月9日オープン、当日キャンセル100%。口コミ (2026年8〜10月、英語): 温野菜のサラダ、焼き立てのスフレ、ミシュラン一つ星 (2026年版)、ペアリング60ml 8,000円・30ml 6,000円。',
      confidence: 'high', sources: [TB, SITE, EN, R + 'B528006958/', R + 'B530486937/', R + 'B534253355/', R + 'B534388559/', R + 'B534683709/', R + 'B535161784/', R + 'B536010325/', R + 'B536803358/', R + 'B536968884/', R + 'B537116746/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (Tabelog); book ahead; smart casual.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区小川通今出川上ル中小川町230',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (Christmas 2026 menu posted) and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.030190, 135.754331); cross-checked: GSI 京都府京都市上京区中小川町230番地 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'high', sources: [SITE, EN],
    price_note: 'Course prices from the official site, tax included, plus 10% service (read 2026-11-05).', last_checked: TODAY, items: [
      it('', '', 'Lunch omakase course (8–10 dishes incl. dessert)', '¥12,000', 'Courses', 'ask', 'no', 'Plus 10% service.', 'lunch_course'),
      it('', '', 'Dinner omakase course (10–12 dishes incl. dessert)', '¥22,000', 'Courses', 'ask', 'no', 'Plus 10% service.', 'dinner_course'),
      it('', '', 'Wine pairing, 60 ml pours', '¥8,000', 'Drinks', '', '', 'October 2026 review; 30 ml pours ¥6,000.', 'pairing'),
    ] }, {
    cuisine: '築120年の町家を改装したフレンチのおまかせ: 昼8〜10品12,000円、夜10〜12品22,000円 (公式サイト)・看板は朝採りの30種以上の野菜の温サラダ、産地直送の魚介、仏中心に最大3,000本のワインセラー (食べログ)・2026年の口コミ: 蟹クリームやフォン・ド・ヴォーと鴨のコーンドッグ、イカと鰯のタルト、帆立とズッキーニのサフランソース、魚のスパイシーなベニエ、Kyoto Mochi pork とキタアカリのニョッキ、セップ茸ソースの鶏、鳩、焼き立てのスフレ、焼き立てのフィナンシェ・ワインペアリング60ml 8,000円、30ml 6,000円 (2026年10月の口コミ)',
    neighborhood: '今出川の北の小川通、御所の西。今出川駅から徒歩8分',
    gf_detail: '予約時に要確認。予約時にアレルギーや食材制限を伝える必要があり、小麦、卵、乳製品、バター、オリーブオイル、ナッツ類など多く使う食材が避けられる場合は予約を断ることがある (公式サイト)。',
    vegan_detail: 'ヴィーガン不可。「ベジタリアン、ビーガンの対応は出来かねます」(公式サイト、食べログ)。',
    notes: '[フレンチ・御所に近い小川通、口コミではミシュラン一つ星] パリの Le Cinq で副料理長、のちにフォーシーズンズホテル京都の料理長を務めた古賀 隆稚シェフが、2025年に町家を改装して開いたフレンチ。おまかせのみで昼12,000円、夜22,000円、+10%。英語メニューと英語を話すスタッフあり、ベジタリアンとヴィーガンは不可。火・水曜休み。',
  });
}

// ================================================================ NISHITOMIYA
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26036585/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_nishitomiya', name: 'NISHITOMIYA', category: 'OMNI',
    lat: 35.009024, lng: 135.78184, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: the draw is breaded, fried croquettes, served with bread at lunch (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: croquettes with butter, blue cheese or octopus, and appetizer platters with ham and salmon (2026 reviews).',
    hours_raw: '12:00–14:00 and 18:00–22:00 every day; closing days not fixed; takeaway croquettes from 12:00 until sold out (Tabelog). Lunch can be booked only for 12:00 (Tabelog). Evenings it runs as a bar, so order a drink (June 2026). Cash only (Tabelog; May 2026). 20 seats incl. a counter; non-smoking; on the ground floor of an apartment building — do not wait inside the building or park bicycles there (Tabelog). 5 min from Higashiyama Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Sanjo-Shirakawa, by the Shirakawa canal — 5 min from Higashiyama Stn',
    cuisine: 'Croquette and wine bar: croquettes fried to order — plain, blue cheese, Nara-pickle with lemon peel, Galician-style octopus, and seasonal ones such as spring cabbage with Parmigiano (2026 reviews) · lunch: two croquettes with an appetizer and salad platter and bread, ¥1,800 (July and October 2026; ¥1,700 in April 2026, ¥1,600 in March 2025), croquette burger · evenings: blackboard dishes with wine, including natural wine (2025–26 reviews) · takeaway croquettes (Tabelog)',
    website: 'http://nishitomiya.com/', gmaps: gm('NISHITOMIYA 京都 三条白川'), menu_url: null,
    notes: "[Croquettes & wine · Sanjo-Shirakawa] A small bar by the Shirakawa canal built around croquettes fried to order — plain, blue cheese, octopus — with wine. Lunch is two croquettes with a full appetizer platter and bread (¥1,800); evenings are for drinking. Lunch bookings only for 12:00; cash only; takeaway croquettes too.",
    chef_bio: { chef_name: null, roles: ['Operator unnamed in the sources'], origin: null,
      background: 'A croquette-focused bar listed on Tabelog with reviews from 2024; an October 2026 reviewer came after seeing it on the TV show "Life\'s Restaurant" with Go Naito.',
      philosophy: null, specialty: 'Croquettes; blue-cheese croquette.',
      anecdotes: [
        { text: 'One of two white wines had too much sediment, so the staff suggested a different one — May 2026.', source: R + 'B450088273/' },
        { text: 'A reviewer got a lunch booking only on the third try: once full, once closed on an evening drop-in — October 2026.', source: R + 'B536714833/' },
        { text: 'A July 2026 lunch-goer liked the crisp coating but missed having sauce for the croquettes.', source: R + 'B533737777/' },
      ],
      japanese_sources_summary: '食べログ: NISHITOMIYA、バル・ダイニングバー・コロッケ、東山区西町126 ビスタ三条白川 1F 南側、東山駅から徒歩5分、12:00〜14:00・18:00〜22:00、不定休、テイクアウト12:00〜売り切れまで、ランチの予約は12時のみ、20席、禁煙、カード・電子マネー・QR 不可、マンションの1階のため建物内で待たない・自転車を止めない。口コミ (2025年3月〜2026年10月、英語): コロッケ (プレーン、ブルーチーズ、奈良漬けとレモンピール、ガリシア風タコ、春キャベツとパルミジャーノ)、前菜盛り合わせとコロッケのランチ1,800円、夜はバーで酒の注文が必要、現金のみ、自然派ワイン。',
      confidence: 'medium', sources: [TB, R + 'B450088273/', R + 'B521194040/', R + 'B525961324/', R + 'B528652388/', R + 'B531671829/', R + 'B533737777/', R + 'B534498621/', R + 'B535882568/', R + 'B536714833/', R + 'B537623177/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book the 12:00 lunch; cash only; order a drink in the evening.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区西町126 ビスタ三条白川 1F 南側',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026. The listed website (nishitomiya.com) failed with an expired certificate on 2026-11-05.' },
    pin_source: `Tabelog ${TB} (35.009024, 135.781840); cross-checked: GSI 京都府京都市東山区西町126番地 (lot) 41m; 42 m from kyoto_higashiyama_tsukasa (西町127); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533737777/', R + 'B536714833/'],
    price_note: 'No menu read; lunch price from July and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch: two croquettes with appetizer and salad platter, bread', '¥1,800', 'Lunch', 'no', 'no', 'July and October 2026 reviews.', 'croquette_lunch'),
      it('', '', 'Blue cheese croquette', '', 'Croquettes', 'no', 'no', '', 'blue_cheese_croquette'),
      it('', '', 'Galician-style octopus croquette', '', 'Croquettes', 'no', 'no', '', 'octopus_croquette'),
    ] }, {
    cuisine: 'コロッケとワインのバー: 注文ごとに揚げるコロッケ。プレーン、ブルーチーズ、奈良漬けとレモンピール、ガリシア風タコ、春キャベツとパルミジャーノなどの季節のもの (2026年の口コミ)・昼: コロッケ2個に前菜とサラダの盛り合わせ、パンで1,800円 (2026年7月と10月。2026年4月は1,700円、2025年3月は1,600円)、コロッケバーガー・夜: 黒板の料理とワイン、自然派ワインも (2025〜26年の口コミ)・コロッケの持ち帰り (食べログ)',
    neighborhood: '白川沿いの三条白川。東山駅から徒歩5分',
    gf_detail: '実際にはグルテンフリー不可。看板は衣をつけて揚げるコロッケで、昼はパン付き (2026年の口コミ)。',
    vegan_detail: '実際にはヴィーガン不可。バター、ブルーチーズ、タコのコロッケ、ハムやサーモンの入る前菜盛り合わせ (2026年の口コミ)。',
    notes: '[コロッケとワイン・三条白川] 白川沿いの小さなバーで、注文ごとに揚げるコロッケ (プレーン、ブルーチーズ、タコなど) とワイン。昼はコロッケ2個に前菜の盛り合わせとパン (1,800円)、夜は酒の店。昼の予約は12時のみ、現金のみ、コロッケの持ち帰りも。',
  });
}

save();
