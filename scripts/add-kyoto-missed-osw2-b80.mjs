// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 80.
//   Queue run from the osw2 worktree, 2026-11-08. Rest tier, nearest-first (queue.mjs kyoto-missed next rest 2000, lane ids by distance).
//   Rest rule: at least one 2025–26 review and enough sourced detail. Days the sources do not state are left out of hours.
//   Brands checked against queue-status.jsonl, than.co.jp/brands and 株式会社WILL (will-food.com): none of the drafted shops belongs to either.
//   + 京都嵐山ブルワリー 三条醸造所 Kyoto Arashiyama Brewery (brewpub near Sanjo; 京都嵐山ブルワリー株式会社, single site)
//   + Harmonika (plated-dessert counter by Gojo-Matsubara, run solo by a former French chef)
//   + 割烹 なか川 三条木屋町 Kappo Nakagawa (kaiseki and hamo-shabu since 1973; 有限会社昌栄庵, single shop)
//   + 祇園天ぷら ころも Gion Tempura Koromo (rice-flour, rice-oil tempura courses and eel rice)
//   None of the drafted shops is in data/kyoto.json, hidden records included: grep by id, name and address.
//   Service charges: なか川 10% (Tabelog; official site); ころも 10% (japan-food.guide).
//   Pins: Tabelog /en/ point, cross-checked with GSI; the brewery shares the Airport Building with COVO and three others and is moved ~12 m;
//   Harmonika ~4 m off kyoto_konno_yumiyacho; なか川 ~1.5 m; ころも ~2 m and marked approximate (the 祇園町南側570 lot); each 9 m+ from every pin on
//   main, hidden records included.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-80');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 京都嵐山ブルワリー 三条醸造所
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26040141/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kyoto-arashiyamabrewery.com/';
  const A = day(['15:00', '22:00']), B = day(['12:00', '22:00']);
  put({
    id: 'kyoto_arashiyama_brewery_sanjo', name: '京都嵐山ブルワリー 三条醸造所 (Kyoto Arashiyama Brewery Sanjo)', category: 'OMNI',
    lat: 35.009322, lng: 135.769322, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: house-brewed barley and wheat beers (pale ale, IPA, stout, weizen); snacks such as fries and kara-age (reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Beer, fries and marinated olives; the fries come with shibazuke mayonnaise (reviews).',
    hours_raw: '15:00–22:00 Monday–Friday, holiday eves and the day after a holiday; 12:00–22:00 Saturday, Sunday and holidays; last order 21:30 (Tabelog). Cashless only — cards and e-money (Tabelog). 27 seats and standing room for 35; high tables and a tap counter; non-smoking (Tabelog; May 2026). Airport Building 1F on Kawaramachi north of Sanjo (official site; Tabelog). Opened 13 October 2023 (Tabelog).',
    hours: { 0: A, 1: A, 2: A, 3: A, 4: A, 5: B, 6: B }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi-Sanjo',
    cuisine: 'Brewpub with its brewery behind glass, about seven house beers plus guest taps (official site; 2026 reviews) · house beers ¥1,500 a pint, guest beers ¥1,700; three-beer tasting set ¥2,100 (March and May 2026) · pale ale, American IPA, stout, weizen, Scotch ale and a saison made with ancient rice (2026) · fries with shibazuke mayonnaise, kara-age, marinated olives (2026)',
    website: SITE, gmaps: gm('京都嵐山ブルワリー 三条醸造所'), menu_url: TB,
    notes: "[Brewpub · Kawaramachi-Sanjo, beer brewed on site] A craft brewery and tap room just north of Sanjo, its tanks visible through the glass: around seven house beers from ¥1,500 a pint and a ¥2,100 tasting flight, with fries in shibazuke mayo. Opens 3 pm (noon at weekends); cashless only.",
    chef_bio: { chef_name: null, roles: ['Brewers not named'], origin: null,
      background: 'Kyoto Arashiyama Brewery, Inc., brewing at its Sanjo brewery and brewpub, registered at the same address (official site; NTA invoice register). Opened in October 2023 (Tabelog). Reviewers (2026) describe a busy, international crowd and friendly staff.',
      philosophy: 'Rooted in Kyoto, brewing good beer that people around the world can enjoy with a smile (official site).',
      specialty: 'House-brewed craft beer.',
      anecdotes: [
        { text: 'A March 2026 visitor watched the brewing tanks through the glass over a ¥1,500 pint of IPA.', source: R + 'B494301739/' },
        { text: 'A June 2026 business traveller did two rounds of the three-beer tasting.', source: R + 'B529526432/' },
        { text: 'A September 2026 guest tried a saison made with ancient rice and a stout.', source: R + 'B529714005/' },
      ],
      japanese_sources_summary: '公式サイト: 京都嵐山ブルワリー株式会社、三条醸造所／ブリューパブ、京都市中京区恵比須町534-33、京都に根付き世界中の人に笑顔で味わってもらえるおいしいビールをつくる。食べログ: 京都嵐山ブルワリー 三条醸造所、ビアバー、エアポートビル1F、月〜金・祝前日・祝日の翌日 15:00〜22:00、土日祝 12:00〜22:00 (L.O.21:30)、キャッシュレスのみ (カード・電子マネー)、27席 (立ち飲み35名)、禁煙、2023年10月13日オープン、店内醸造のクラフトビール、インボイス T5130001072723。口コミ (2026年、英語): ガラス越しに醸造タンク、自家醸造7種ほど、パイント1,500円、ゲストビール1,700円、3種の飲み比べ2,100円、ペールエール、IPA、スタウト、ヴァイツェン、スコッチエール、古代米のセゾン、しば漬けマヨのフライドポテト、唐揚げ、オリーブのマリネ、海外の客と外国人スタッフも多い、気さくなスタッフ。',
      confidence: 'medium', sources: [SITE, TB, R + 'B494301739/', R + 'B520852190/', R + 'B521025261/', R + 'B528220959/', R + 'B529526432/', R + 'B529714005/', R + 'B530277082/', R + 'B530422032/', 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=5130001072723'] },
    cultural_comfort: { level: 'english', note: 'International crowd and staff (May 2026); cashless only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区恵比須町534-33 エアポートビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.009391, 135.769423), offset ~12m to clear kyoto_the_cellar_kyoto (1.3m), kyoto_sauna_izakaya_sanjo (4.1m), kyoto_poisson_dor_sanjo (5.4m) and kyoto_italian_sakaba_covo in the same building; cross-checked: GSI 京都府京都市中京区恵比須町534番地 (lot) 28m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B528220959/', R + 'B530277082/'],
    price_note: 'Prices from May 2026 reviews; cashless only.', last_checked: TODAY, items: [
      it('', '', 'House beer, pint', '¥1,500', 'Beer', 'no', 'ask', '', 'pint'),
      it('', '', 'Guest beer, pint', '¥1,700', 'Beer', 'no', 'ask', '', 'guest'),
      it('', '', 'Three-beer tasting set', '¥2,100', 'Beer', 'no', 'ask', '', 'flight'),
    ] }, {
    cuisine: 'ガラス越しに醸造所が見えるブリューパブ。自家醸造7種ほどとゲストビール (公式サイト、2026年の口コミ)・自家醸造はパイント1,500円、ゲストビールは1,700円、3種の飲み比べ2,100円 (2026年3月、5月)・ペールエール、アメリカンIPA、スタウト、ヴァイツェン、スコッチエール、古代米のセゾン (2026年)・しば漬けマヨのフライドポテト、唐揚げ、オリーブのマリネ (2026年)',
    neighborhood: '河原町三条',
    gf_detail: 'グルテンフリー不可。大麦や小麦の自家醸造ビール (ペールエール、IPA、スタウト、ヴァイツェン)。つまみもフライドポテトや唐揚げ (口コミ)。',
    vegan_detail: '要確認。ビール、フライドポテト、オリーブのマリネ。ポテトにはしば漬けマヨ (口コミ)。',
    notes: '[ブリューパブ・河原町三条、店内醸造のビール] 三条のすぐ北の、ガラス越しにタンクが見えるクラフトビールの醸造所とタップルーム。自家醸造7種ほどをパイント1,500円から、飲み比べ2,100円、しば漬けマヨのポテト。15時から (週末は12時)、キャッシュレスのみ。',
  });
}

// ================================================================ Harmonika
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26040831/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '20:30']);
  put({
    id: 'kyoto_harmonika_yumiyacho', name: 'Harmonika', category: 'OMNI',
    lat: 34.998153, lng: 135.772182, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Plated desserts, tarts, crepes and pies, with gelato and sauces; no gluten information is published (reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Plated desserts with fruit, gelato and dairy; no vegan options are described (reviews).',
    hours_raw: '12:00–20:30 Wednesday–Sunday; closed Monday and Tuesday (Tabelog). Cash only; each person orders at least one drink and one dessert (Tabelog original 現金支払いのみ対応。1名につきドリンクとデザートどちらも1品以上の注文が必要。). Desserts are made one by one by the owner, so expect a wait (October 2025); a February 2025 guest phoned ahead to check for seats. Photographs of the menu are not allowed (June 2026). Ground floor of an apartment building on Yamatooji south of Matsubara (Tabelog; February 2025). Opened 19 February 2024 (Tabelog).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Yamatooji, south of Matsubara',
    cuisine: 'Plated desserts and tarts made at the counter by a former French chef (February 2025) · seasonal dessert soups, e.g. rice, chestnut and milk with strawberry; strawberry tart with lime zest (February 2025) · citrus crepe of hassaku and hyuganatsu; sweet potato pie; café latte (January 2026) · small three-dish dessert course topped with house gelato such as hinoki cypress (August 2026) · banana tart and seasonal fruit plates (June 2026)',
    website: 'https://harmonie7.official.ec/', gmaps: gm('Harmonika 京都 弓矢町'), menu_url: null,
    notes: "[Desserts · Yamatooji by Matsubara, plated desserts at the counter] A tiny counter where a former French chef composes plated desserts and tarts to order — strawberry tart with lime, citrus crepes, a three-dish course crowned with hinoki gelato. Cash only; a drink and a dessert each; closed Monday and Tuesday.",
    chef_bio: { chef_name: null, roles: ['Owner-pâtissier, a former French chef (not named)'], origin: null,
      background: 'Opened in February 2024 (Tabelog). Reviewers (2025–2026) describe a former French chef who runs the place solo, making each plated dessert in front of guests and chatting at the counter; by June 2026 a staff member from Osaka had joined.',
      philosophy: null,
      specialty: 'Plated desserts and tarts.',
      anecdotes: [
        { text: 'A February 2025 visitor watched the chef assemble each dessert at the counter and found the conversation part of the show.', source: R + 'B502629641/' },
        { text: 'An October 2025 guest was warned in advance that the solo owner would take time, and did not mind.', source: R + 'B521003868/' },
        { text: 'An August 2026 diner’s favourite on the three-dish course was the cypress gelato.', source: R + 'B532910060/' },
      ],
      japanese_sources_summary: '食べログ: Harmonika、スイーツ・カフェ、京都市東山区大和大路通松原下る弓矢町38、水〜日 12:00〜20:30、月・火定休、現金のみ、1人1ドリンク・1デザート以上の注文、禁煙、2024年2月19日オープン、オンラインショップ (BASE)。口コミ (2024〜2026年、英語): 元フレンチのシェフのアシエットデセールとタルト、オーナーシェフがひとりで切り盛り、目の前で仕上げる、米・栗・ミルクのスープといちご、ライムの香りのいちごのタルト、八朔と日向夏の柑橘のクレープ、さつまいものパイ、カフェラテ、ジェラートをのせた3品の小さなコース (檜のジェラート)、バナナのタルト、メニューの撮影は不可、2026年6月には大阪から来たスタッフも。',
      confidence: 'low', sources: [TB, R + 'B481599787/', R + 'B501393299/', R + 'B502629641/', R + 'B516448845/', R + 'B516459428/', R + 'B521003868/', R + 'B532910060/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; one drink and one dessert each; no menu photos.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区大和大路通松原下る弓矢町38',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026. mom_and_pop: “The owner-chef runs the place solo.” (November 2025 review B516448845).' },
    pin_source: `Tabelog ${TB} (34.998189, 135.772182), offset ~4m to clear kyoto_konno_yumiyacho (5.1m); cross-checked: GSI 京都府京都市東山区弓矢町38番地 (lot) 30m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B516459428/', R + 'B532910060/'],
    price_note: 'No prices given; reviews report about ¥3,000–8,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Plated dessert course (three dishes)', '', 'Desserts', 'ask', 'no', 'August 2026.', 'course'),
      it('', '', 'Seasonal tart', '', 'Desserts', 'no', 'no', '', 'tart'),
      it('', '', 'Citrus crepe', '', 'Desserts', 'no', 'no', 'January 2026.', 'crepe'),
    ] }, {
    cuisine: '元フレンチのシェフがカウンターで仕上げるアシエットデセールとタルト (2025年2月)・季節のデザートスープ、たとえば米・栗・ミルクにいちご、ライムの香りのいちごのタルト (2025年2月)・八朔と日向夏の柑橘のクレープ、さつまいものパイ、カフェラテ (2026年1月)・自家製ジェラートをのせた3品の小さなデザートコース、檜のジェラートなど (2026年8月)・バナナのタルトと季節の果物の皿 (2026年6月)',
    neighborhood: '大和大路、松原の南',
    gf_detail: '要確認。アシエットデセール、タルト、クレープ、パイ、ジェラートとソース。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: '要確認。果物、ジェラート、乳製品を使うデザート。ヴィーガンの選択肢の説明はない (口コミ)。',
    notes: '[デザート・大和大路の松原近く、カウンターのアシエットデセール] 元フレンチのシェフが注文ごとに仕上げるアシエットデセールとタルトの小さなカウンター。ライムのいちごタルト、柑橘のクレープ、檜のジェラートをのせた3品のコース。現金のみ、1人1ドリンク・1デザート、月・火休み。',
  });
}

// ================================================================ 割烹 なか川 三条木屋町
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26029173/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.kappou-nakagawa-sanjo.com/';
  const H = day(['12:00', '14:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_kappo_nakagawa_sanjo_kiyamachi', name: '割烹 なか川 三条木屋町 (Kappo Nakagawa Sanjo Kiyamachi)', category: 'OMNI',
    lat: 35.009277, lng: 135.770628, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kaiseki with dashi, homemade ponzu and ankake, a fried course, hamo shabu-shabu and suppon pots; no gluten information is published (official site).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kaiseki of hamo, fugu, crab and suppon (official site).',
    hours_raw: 'Lunch 12:00–14:00 by reservation only; dinner 17:00–22:00, last entry 20:00; closed Monday (official site; Tabelog). Service charge 10%; a private room for two costs ¥3,000; corkage ¥4,000 per 720 ml bottle, ¥8,000 per 1.8 l (Tabelog). Cards (incl. UnionPay and Discover), PayPay and Rakuten Pay (official site). 20 seats: an 8-seat counter and private rooms for 12; private hire 12–20; non-smoking (official site; Tabelog). Forum Kiyamachi Building B1F, Kiyamachi north of Sanjo (official site). Founded 1973; at this address since June 2017 (official site; Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi, north of Sanjo',
    cuisine: 'Kaiseki from a house founded in 1973 that calls itself the birthplace of hamo shabu-shabu (official site) · omakase kaiseki ¥15,400 (take) and ¥16,500 (matsu) plus 10% service (official site) · hamo kaiseki April to late October ¥12,100 / ¥15,400 / ¥19,800; fugu November–March ¥15,400 / ¥17,600; crab November–March from ¥33,000; suppon ¥15,400–18,700 (official site) · modern touches: ponzu set into sheets, espuma desserts, an own-label sake served supercooled, Japanese wines (official site) · takeaway chirimen sansho and simmered duck loin (official site)',
    website: SITE, gmaps: gm('割烹 なか川 三条木屋町'), menu_url: SITE + 'course.html',
    notes: "[Kaiseki · Kiyamachi north of Sanjo, hamo shabu-shabu since 1973] A basement kappo that claims the invention of hamo shabu-shabu: seasonal kaiseki from ¥15,400, hamo courses in summer, fugu, crab and suppon in winter, with an own-label sake poured supercooled. Counter and private rooms; 10% service; closed Monday.",
    chef_bio: { chef_name: null, roles: ['Chef not named'], origin: null,
      background: 'Founded in 1973 and known as the original home of hamo shabu-shabu (official site); a June 2025 reviewer heard the previous owner worked out how best to prepare hamo. At this Kiyamachi address since June 2017 (Tabelog), run by 有限会社昌栄庵 (NTA invoice register).',
      philosophy: 'Tradition and innovation together: Japanese cooking handed down since 1973, with new techniques and pairings (official site).',
      specialty: 'Hamo shabu-shabu; seasonal kaiseki.',
      anecdotes: [
        { text: 'A February 2024 regular from Kyoto days finished a kaiseki with a suppon hot pot.', source: R + 'B296097520/' },
        { text: 'A June 2025 first-timer to hamo shabu-shabu had it at the place that says it started it.', source: R + 'B508877986/' },
        { text: 'A January 2026 New Year business lunch took one of the wood-panelled private rooms.', source: R + 'B520764669/' },
      ],
      japanese_sources_summary: '公式サイト: 割烹なか川 三条木屋町、昭和48年創業、「鱧しゃぶ」発祥の店、伝統と革新の融合、京都市中京区木屋町通三条上ル上大阪町532-20 フォーラム木屋町ビルB1F、昼12:00〜14:00 (完全予約制)、夜17:00〜22:00 (20:00最終入店)、月曜定休、カード (VISA、Master、AMEX、JCB、Diners、銀聯、Discover)、PayPay・楽天ペイ可、おまかせ会席 (竹) 15,400円、(松) 16,500円 (サービス料10%別)、鱧の会席 (4月〜10月下旬) 12,100円・15,400円・19,800円、河豚 (11月〜3月) 15,400円・17,600円、蟹 (11月〜3月) 33,000円から、鼈 15,400〜18,700円、シート状のポン酢、エスプーマ、過冷却のオリジナル日本酒「なか川」、日本ワイン、ちりめん山椒や鴨ロース煮の通販・持ち帰り、カウンター8席と個室12席。食べログ: 2017年6月1日オープン、サービス料10%、2名で個室利用は個室料3,000円、持ち込み料 (4合瓶4,000円、1升瓶8,000円)、禁煙、インボイス T6130002022858 (有限会社昌栄庵)。口コミ (2018〜2026年、英語): 鱧しゃぶのコース、先代が鱧の調理を研究、毛蟹とすっぽん、わらび餅、すっぽん鍋で締め、木の温かみのある店内と個室。',
      confidence: 'medium', sources: [SITE, SITE + 'concept.html', SITE + 'course.html', SITE + 'english.html', TB, R + 'B296097520/', R + 'B497899410/', R + 'B508877986/', R + 'B520764669/', 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=6130002022858'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English page on the official site; lunch by reservation; 10% service.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区木屋町通三条上ル上大阪町532-20 フォーラム木屋町ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through January 2026.' },
    pin_source: `Tabelog ${TB} (35.009291, 135.770630), offset ~1.5m to clear kyoto_samasama_indonesian (7.7m); cross-checked: GSI 京都府京都市中京区上大阪町532番地 (lot) 74m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE + 'course.html', SITE + 'english.html'],
    price_note: 'Prices from the official site (November 2026), tax included; plus 10% service.', last_checked: TODAY, items: [
      it('おまかせ会席（竹）', '', 'Omakase kaiseki (take)', '¥15,400', 'Courses', 'ask', 'no', '', 'take'),
      it('', '', 'Omakase kaiseki (matsu)', '¥16,500', 'Courses', 'ask', 'no', '', 'matsu'),
      it('', '', 'Hamo kaiseki (April–late October)', '¥12,100', 'Courses', 'ask', 'no', 'From.', 'hamo'),
      it('', '', 'Fugu kaiseki (November–March)', '¥15,400', 'Courses', 'ask', 'no', 'From.', 'fugu'),
      it('', '', 'Suppon kaiseki', '¥15,400', 'Courses', 'ask', 'no', 'From.', 'suppon'),
    ] }, {
    cuisine: '昭和48年創業、「鱧しゃぶ」発祥をうたう店の会席 (公式サイト)・おまかせ会席は竹15,400円、松16,500円、サービス料10%別 (公式サイト)・鱧の会席は4月〜10月下旬で12,100円・15,400円・19,800円、河豚は11月〜3月で15,400円・17,600円、蟹は11月〜3月で33,000円から、鼈は15,400〜18,700円 (公式サイト)・シート状のポン酢、エスプーマの水物、過冷却で出すオリジナルの日本酒、日本ワイン (公式サイト)・ちりめん山椒や鴨ロース煮の持ち帰り (公式サイト)',
    neighborhood: '木屋町、三条の北',
    gf_detail: '要確認。出汁、自家製ポン酢、餡掛け、揚げ物、鱧しゃぶやすっぽんの鍋の会席。グルテンの情報は公開されていない (公式サイト)。',
    vegan_detail: 'ヴィーガン不可。鱧、河豚、蟹、すっぽんの会席 (公式サイト)。',
    notes: '[会席・木屋町の三条北、昭和48年からの鱧しゃぶ] 鱧しゃぶ発祥をうたう地下の割烹。季節の会席は15,400円から、夏は鱧、冬は河豚、蟹、すっぽん、過冷却で注ぐオリジナルの日本酒も。カウンターと個室、サービス料10%、月曜休み。',
  });
}

// ================================================================ 祇園天ぷら ころも
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26038425/'; const R = TB + 'dtlrvwlst/';
  const JFG = 'https://japan-food.guide/restaurants/1777';
  const A = day(['17:00', '22:00']), B = day(['11:30', '15:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_gion_tempura_koromo', name: '祇園天ぷら ころも (Gion Tempura Koromo)', category: 'OMNI',
    lat: 35.002293, lng: 135.776048, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The tempura batter is rice flour fried in rice oil (japan-food.guide listing; 2025 reviews), but courses also include sashimi with soy, simmered dishes and eel rice with tare, and the fryer and sauces are not described — ask which courses can be made wheat-free. Staff were careful about allergies (August 2025).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tempura courses of seafood, with sashimi and eel rice (reviews).',
    hours_raw: 'Dinner 17:00–22:00 (last order 21:30) Monday, Wednesday–Sunday and holidays; lunch 11:30–15:00 (last order 14:30) Saturday, Sunday and holidays only; closed Tuesday (Tabelog). Same-day dinner bookings if seats are free (Tabelog). 10% service on food and drink (japan-food.guide). Cards (incl. UnionPay) and QR payments; no e-money (Tabelog). 22 seats: a ground-floor counter and private rooms for 2–10 upstairs; non-smoking (Tabelog; 2025 reviews). On Gion-machi Minamigawa, about 8 minutes from Gion-Shijo (Tabelog).',
    hours: { 0: A, 2: A, 3: A, 4: A, 5: B, 6: B }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, south of Shijo',
    cuisine: 'A “new style” of tempura in rice flour and rice oil, with Kyoto vegetables and seasonal seafood (japan-food.guide) · courses including 10% service: tasting ¥15,730; Aimi ¥18,150; ultimate ¥21,780; supreme ¥30,250, each ending with the signature eel rice (japan-food.guide) · weekend lunch Koromo Yasaka course of hassun, sashimi, tempura and a signature dish with a drink (August 2025) · oyster with cheese tartare, prosciutto-and-cheese tempura, seaweed-wrapped oyster, crab, shirako (2025) · clay-pot eel rice eaten hitsumabushi-style with wasabi and spring onion, refills offered (2025)',
    website: null, gmaps: gm('祇園天ぷら ころも'), menu_url: JFG,
    notes: "[Tempura · Gion south, rice-flour tempura and eel rice] A Gion tempura counter frying in rice flour and rice oil for a light, crisp coat, with sashimi and hassun in the courses and a clay pot of eel rice to finish. Courses ¥15,730–30,250 including service; weekend lunch; closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Chef not named'], origin: null,
      background: 'A Gion tempura restaurant whose courses are fried by veteran chefs in front of guests (japan-food.guide). Reviewers (2025–2026) describe attentive, smiling staff, careful explanations of each ingredient and a chef who remembers returning guests.',
      philosophy: null,
      specialty: 'Rice-flour tempura; eel rice.',
      anecdotes: [
        { text: 'An April 2025 party in the upstairs private room called the clay-pot eel rice the highlight.', source: R + 'B504354017/' },
        { text: 'An August 2025 family was put at ease by the care taken over allergies.', source: R + 'B511192180/' },
        { text: 'A December 2025 guest on a third visit was remembered by the chef and paired the courses with sake.', source: R + 'B520003450/' },
      ],
      japanese_sources_summary: '食べログ: 祇園天ぷら ころも、天ぷら、京都市東山区祇園町南側570-8、夜は月・水〜金・祝前日 17:00〜22:00 (L.O.21:30)、土日祝は昼11:30〜15:00 (L.O.14:30) と夜17:00〜22:00、火曜定休、ランチは基本的に土日祝のみ、当日の夜の予約も空きがあれば可、カード (銀聯も)・QR決済可、電子マネー不可、22席、個室 (2〜10名)、禁煙。japan-food.guide: 米粉と米油で揚げる新しいスタイルの天ぷら、京野菜と旬の魚介、コースはテイスティング15,730円ほか18,150円、21,780円、30,250円 (サービス料10%込み)、名物のうなぎめし。口コミ (2025〜2026年、英語): 米粉の軽い衣、米油、八寸と刺身付きのコース、牡蠣のチーズタルタル、生ハムとチーズの天ぷら、海苔巻きの牡蠣、蟹、白子、土鍋のうなぎめしをひつまぶし風に、おかわりも、アレルギーへの配慮、2階の個室、シェフが顔を覚えている。',
      confidence: 'medium', sources: [TB, JFG, R + 'B501918503/', R + 'B504354017/', R + 'B507061412/', R + 'B511192180/', R + 'B514144481/', R + 'B515294526/', R + 'B516121489/', R + 'B520003450/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter or private rooms; many overseas guests; 10% service.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町南側570-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog and japan-food.guide listings; reviews dated through 2026.' },
    pin_source: `Tabelog ${TB} (35.002284, 135.776067), offset ~2m to clear kyoto_gion_ryori_toriimoto (7.4m); GSI 京都府京都市東山区祇園町南側570番地 (lot) 237m — a very large lot, so marked approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [JFG],
    price_note: 'Course prices from japan-food.guide (November 2026), tax and 10% service included.', last_checked: TODAY, items: [
      it('', '', 'Tasting course (tempura, eel rice)', '¥15,730', 'Courses', 'ask', 'no', '', 'tasting'),
      it('', '', 'Aimi course', '¥18,150', 'Courses', 'ask', 'no', '', 'aimi'),
      it('', '', 'Ultimate taste course', '¥21,780', 'Courses', 'ask', 'no', '', 'kiwami'),
      it('', '', 'Supreme course', '¥30,250', 'Courses', 'ask', 'no', '', 'supreme'),
    ] }, {
    cuisine: '米粉と米油で揚げる「新しいスタイル」の天ぷら。京野菜と旬の魚介 (japan-food.guide)・コースはサービス料込みでテイスティング15,730円ほか18,150円、21,780円、30,250円、いずれも名物のうなぎめしで締める (japan-food.guide)・週末ランチのコース (Koromo Yasaka) は八寸、刺身、天ぷら、名物に乾杯の一杯 (2025年8月)・牡蠣のチーズタルタル、生ハムとチーズの天ぷら、海苔巻きの牡蠣、蟹、白子 (2025年)・土鍋のうなぎめしをわさびとねぎでひつまぶし風に、おかわりも (2025年)',
    neighborhood: '祇園、四条の南',
    gf_detail: '要確認。天ぷらの衣は米粉、揚げ油は米油 (japan-food.guide、2025年の口コミ)。ただしコースには醤油の刺身、煮物、たれのうなぎめしもあり、揚げ油やたれの説明はないので、小麦を使わずにできるか確認を。アレルギーへの配慮あり (2025年8月)。',
    vegan_detail: 'ヴィーガン不可。魚介の天ぷら、刺身、うなぎめしのコース (口コミ)。',
    notes: '[天ぷら・祇園の四条南、米粉の天ぷらとうなぎめし] 米粉と米油で軽くサクッと揚げる祇園の天ぷらのカウンター。コースには刺身や八寸も、締めは土鍋のうなぎめし。コースはサービス料込みで15,730〜30,250円、週末はランチも、火曜休み。',
  });
}

save();
