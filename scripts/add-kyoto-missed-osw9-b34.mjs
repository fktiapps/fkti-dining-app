// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 34.
//   + ギャルソン クレープ Creperie GARCON (galettes and crisp caramel crepes near Yasui Konpira Shrine; since 2015)   [core]
//   + おばんざいと野菜 内儀家 Kamiya (obanzai and sansho dishes from its own farm, Kiyamachi; since 2008)          [core]
//   + 西角 Saikaku (Kyoto cuisine counter by the Demachi shopping street; guji cooked your way)                   [notable]
//   + お弐かいSECOND Onikai SECOND (simmered Kyoto vegetables and clay-pot rice near Karasuma Oike; 2026)       [notable]
//   - 囲炉裏茶屋 ななころびやおき 祇園八坂店 — Tabelog has put the listing on hold: "the closure period … is
//     undetermined, or it may have relocated or permanently closed".
//   - キムカツ 京都烏丸店 — chain: the official site lists Ebisu, Ariake, Sendai, Sannomiya (Deli's), Bangkok and
//     Shanghai shops besides Kyoto.
//   Same-name counts first (same brand or operator): GARCON 1; 内儀家 1 (its neighbour at 上樵木町496,
//   kyoto_togiya_kiyamachi_oike, names a different sister shop; no link found); 西角 1; お弐かい — reviewers place it
//   in the 五十家 (Isoya) group with the original お弐かい in Kawaramachi; neither お弐かい is in data, and the
//   integrator ruled 五十家 a local group whose sister concepts are drafted.
//   Taken in queue order on 2026-11-06: core (26039165 skip), (26000747 skip), 26025449, 26006483; notable 26000303,
//   26044883. None drafted is in data/kyoto.json by name or address.
//   Service charges checked against Tabelog's Japanese original: 内儀家 「お通し代 あり」; the others have no section
//   (西角's own site: the course price plus consumption tax only).
//   Pins: 内儀家's address matches only to town level, so loc_precise false; it is 8.7 m from kyoto_mughal_kiyamachi.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-34');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26039165', 'listing on hold: Tabelog says the closure period is undetermined, or it may have relocated or permanently closed, operational status unconfirmed');
skip('26000747', 'chain: キムカツ lists Ebisu (flagship), Ariake, Sendai, Sannomiya Deli\'s, Bangkok and Shanghai shops besides Kyoto (kimukatsu.com)');

// ================================================================ ギャルソン クレープ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26025449/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '18:00']);
  put({
    id: 'kyoto_creperie_garcon', name: 'ギャルソン クレープ (Creperie GARCON)', category: 'OMNI',
    lat: 34.999238, lng: 135.777185, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Savoury galettes and sweet crepes; the batters are not described, and crepe batter is usually wheat (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: butter, caramel, cheese, ham and egg (2025–26 reviews).',
    hours_raw: 'Tue, Wed, Fri–Sun 11:30–18:00; closed Mon and Thu; hours may change (Tabelog) — a July 2026 regular found it open by 10:30, opening as soon as everything was ready. No bookings; one order per person; no photos of the interior (menu and food photos are fine) (Tabelog). Cash only (Tabelog). 10 table seats in a long, narrow room; one crepe is cooked at a time, so it takes a while (Tabelog; July 2026 review). Near Yasui Konpira Shrine; 675 m from Gion-Shijo Stn (Tabelog; 2026 reviews).',
    hours: { 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'By Yasui Konpira Shrine, between Gion and Kiyomizu',
    cuisine: 'Crisp, fragrant galettes and crepes, toppings laid on top rather than wrapped: omakase galette with prosciutto, camembert, salad and fig; ham, cheese and mushroom galette; crepes with homemade caramel sauce, chocolate-orange with walnuts, fig and banana caramel, apple compote in January, seasonal fruit such as pineapple; fresh melon with caramel ¥1,780 and fresh lemon, sugar and butter (July 2026); crepes from over ¥1,000 (January 2026); coffee, cider, plum juice, a glass of wine (2025–26 reviews)',
    website: null, gmaps: gm('ギャルソン クレープ 京都'), menu_url: null,
    notes: "[Crêperie · by Yasui Konpira Shrine] A narrow, European-style crêperie where galettes and crepes come crisp and fragrant, one at a time: prosciutto-camembert-fig galette, then a crepe with house caramel or seasonal fruit. About ¥1,500–2,500. Cash only; no bookings; one order each. Closed Mon and Thu.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Opened 10 April 2015 (Tabelog). A June 2026 diner felt it was run like a family business.',
      philosophy: null, specialty: 'Crisp galettes; caramel crepes.',
      anecdotes: [
        { text: 'A January 2026 galette eater wished the savoury galettes were warmer and the egg cooked longer, and preferred the banana-caramel dessert.', source: R + 'B520146926/' },
        { text: 'In June 2026 the long room was full of Western tourists and some arrivals were turned away.', source: R + 'B532468264/' },
        { text: 'An October 2025 regular about to move away came once more for the fig caramel crepe, minus the banana.', source: R + 'B519116390/' },
      ],
      japanese_sources_summary: '食べログ: ギャルソン クレープ (Creperie GARCON)、クレープ・ガレット・カフェ、東山区下弁天町53-3、祇園四条駅から675m、火水金土日 11:30〜18:00、月木休み、予約不可、カード・電子マネー・QR 不可、テーブル10席、禁煙、2015年4月10日オープン、注文はお一人様一品、店内の撮影不可 (メニューと料理は可)。口コミ (2025年10月〜2026年7月、英語): Yasui Konpira Shrine の近く、パリッと香ばしい生地、生ハム・カマンベール・いちじくのガレット、自家製キャラメルソースのクレープ、チョコとオレンジ、いちじくとバナナ、1月のりんごのコンポート、生メロンのキャラメル1,780円、生レモンのシュガーバター、クレープは千円超から、一枚ずつ焼くので時間がかかる、欧米の観光客で満席の日も。',
      confidence: 'medium', sources: [TB, R + 'B194028190/', R + 'B515334448/', R + 'B519116390/', R + 'B520146926/', R + 'B523649919/', R + 'B525032935/', R + 'B530912811/', R + 'B531158646/', R + 'B531470535/', R + 'B532468264/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Menu displayed outside; no interior photos; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区下弁天町53-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (34.999238, 135.777185); cross-checked: GSI 京都府京都市東山区下弁天町53番地 (lot) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525032935/'],
    price_note: 'No menu read; prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Fresh melon crepe with caramel sauce (seasonal)', '¥1,780', 'Crepes', 'ask', 'no', 'July 2026 review.', 'melon_caramel'),
      it('', '', 'Omakase galette (prosciutto, camembert, salad, fig)', '', 'Galettes', 'ask', 'no', 'July 2026 review.', 'omakase_galette'),
      it('', '', 'Crepe with homemade caramel sauce', '', 'Crepes', 'ask', 'no', 'July 2026 review.', 'caramel_crepe'),
    ] }, {
    cuisine: '具を包まずにのせる、パリッと香ばしいガレットとクレープ: 生ハム、カマンベール、サラダ、いちじくのおまかせガレット、ハム・チーズ・きのこのガレット。自家製キャラメルソース、チョコとオレンジにくるみ、いちじくとバナナのキャラメル、1月のりんごのコンポート、パイナップルなど季節の果物のクレープ。生メロンのキャラメル1,780円、生レモンのシュガーバター (2026年7月)、クレープは千円超から (2026年1月)。コーヒー、シードル、梅ジュース、グラスワイン (2025〜26年の口コミ)',
    neighborhood: '祇園と清水の間、Yasui Konpira Shrine のそば',
    gf_detail: '要確認。ガレットとクレープで、生地の粉の説明はない。クレープ生地はふつう小麦 (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。バター、キャラメル、チーズ、ハム、卵 (2025〜26年の口コミ)。',
    notes: '[クレープリー・Yasui Konpira Shrine のそば] 細長いヨーロッパ風のクレープリー。ガレットもクレープも一枚ずつパリッと香ばしく焼く。生ハム・カマンベール・いちじくのガレットの後に、自家製キャラメルや季節の果物のクレープを。1,500〜2,500円ほど。現金のみ。予約不可、一人一品。月木休み。',
  });
}

// ================================================================ おばんざいと野菜 内儀家
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26006483/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kamiyakyoto.wixsite.com/kamiya';
  const H = day(['17:00', '21:00']);
  put({
    id: 'kyoto_obanzai_to_yasai_kamiya', name: 'おばんざいと野菜 内儀家 (Obanzai to Yasai Kamiya)', category: 'OMNI',
    lat: 35.011882, lng: 135.770675, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Obanzai and grilled dishes with soy-based seasoning; dumplings and salt yakisoba are wheat (2022–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Vegetables lead, but obanzai and oden use dashi and there is chicken (Tabelog; 2022–26 reviews).',
    hours_raw: '17:00–21:00; closed Tuesday; may close early without notice; see the website for closures (Tabelog). Bookings by phone or e-mail; a cancellation fee applies to no-shows (Tabelog). Charge: Tabelog\'s Japanese original says 「お通し代 あり」 — an appetizer charge. No cards; PayPay (Tabelog; official site). English menu (Tabelog). Children generally not allowed (Tabelog). 14 seats: 10 at the counter, 4 at tables; all non-smoking (official site). The shop notes its Tabelog page is not kept up to date. On the Kiyamachi riverside lane; 2 min from Kyoto Shiyakusho-mae Stn exit 2, 3 min from Sanjo Keihan (Tabelog; official site).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi — 2 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Obanzai and Kyoto vegetables with sansho from the shop\'s own pesticide-free farm, using mainly produce from Miyama (official site): assorted obanzai, lotus-root and beef kinpira with sansho, grilled Miyama chicken, sansho uni tofu, grilled inari with Kujo green onion, yuzu inari, chicken with yuzu pepper, salt yakisoba, dumplings with tsukune, oden; sansho highballs; red sansho "Miyama Ruby" and sansho pepper to take home (official site; 2022–26 reviews)',
    website: SITE, gmaps: gm('おばんざいと野菜 内儀家'), menu_url: SITE,
    notes: "[Obanzai & sansho · Kiyamachi] A small adult counter bar on the Kiyamachi lane, with a tiny garden, built around sansho from its own farm: obanzai platters, grilled Miyama chicken, kinpira and highballs all tingling with it, and extra sansho on the table. About ¥4,000–8,000. Evenings only; cash or PayPay; closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Opened 25 January 2008 (Tabelog). Per the official site: a small, quiet adult drinking spot where one can unwind alone after work or sightseeing; sansho grown without pesticides on its own farm, and ingredients mainly from Miyama, Kyoto.',
      philosophy: 'Sansho dishes for their fresh aroma and distinctive tingle (official site).',
      specialty: 'Sansho dishes; obanzai.',
      anecdotes: [
        { text: 'A December 2025 diner praised dishes that gently bring out the ingredients, and above all the sansho ones.', source: R + 'B529580057/' },
        { text: 'An August 2026 traveller found the room homey and had fun adding the extra sansho on the table.', source: R + 'B536476557/' },
        { text: 'A February 2024 visitor went home with the red sansho and sansho pepper as souvenirs.', source: R + 'B484368075/' },
      ],
      japanese_sources_summary: '公式サイト: 内儀家 (かみや)、高瀬川沿い、上木屋町の閑静な佇まい、仕事帰りや観光後に一人でもほっと一息つける小さな大人の酒処、自家農園で無農薬栽培の山椒を使った山椒料理、京都・美山産を中心とした食材、全席禁煙、クレジットカード不可・PayPay 可、赤山椒「美山のルビー」の通販。食べログ: おばんざいと野菜 内儀家、居酒屋・野菜料理・焼き鳥、中京区木屋町通二条下ル上樵木町495-1 伊藤ビル1F、17:00〜21:00、火曜休み、お通し代あり、カウンター10席・テーブル4席、英語メニュー、子供は原則不可、メール予約可、無断キャンセルはキャンセル料、2008年1月25日オープン、食べログの情報は更新していない。口コミ (2022年2月〜2026年8月、英語): おばんざい盛り合わせ、山椒のきんぴら、美山の地鶏、山椒ハイボール、山椒の雲丹豆腐、焼き稲荷、卓上の山椒。',
      confidence: 'medium', sources: [TB, SITE, R + 'B446296675/', R + 'B484368075/', R + 'B494102831/', R + 'B500984158/', R + 'B529580057/', R + 'B536476557/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); counter seating; adults.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区木屋町通二条下ル上樵木町495-1 伊藤ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and the official site; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.011882, 135.770675); GSI matched only the town (京都府京都市中京区上樵木町), so loc_precise false; 8.7 m from kyoto_mughal_kiyamachi, 10.5 m from kyoto_togiya_kiyamachi_oike (next door at 496); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B446296675/', R + 'B484368075/'],
    price_note: 'No menu or item prices read; dishes from reviews (2022–26).', last_checked: TODAY, items: [
      it('', '', 'Omakase assorted obanzai', '', 'Obanzai', 'ask', 'ask', 'February 2022 and October 2024 reviews.', 'obanzai_moriawase'),
      it('', '', 'Grilled Miyama chicken with sansho', '', 'Grilled', 'ask', 'no', 'February 2022 and 2024 reviews.', 'miyama_chicken'),
      it('', '', 'Sansho highball', '', 'Drinks', 'ask', 'ask', 'February 2022 review.', 'sansho_highball'),
    ] }, {
    cuisine: '自家農園の無農薬の山椒と、美山産を中心とした京野菜のおばんざい (公式サイト): おばんざい盛り合わせ、山椒をきかせた蓮根と牛肉のきんぴら、美山の地鶏の焼き物、山椒の雲丹豆腐、Kujo ねぎの焼き稲荷、柚子の稲荷、鶏の柚子胡椒和え、塩焼きそば、つくねの餃子、おでん。山椒ハイボール。赤山椒「美山のルビー」や山椒胡椒の持ち帰り (公式サイト、2022〜26年の口コミ)',
    neighborhood: '木屋町。京都市役所前駅から徒歩2分',
    gf_detail: '要確認。醤油で味付けしたおばんざいや焼き物。餃子や塩焼きそばは小麦 (2022〜26年の口コミ)。',
    vegan_detail: '要確認。野菜が中心だが、おばんざいやおでんは出汁を使い、鶏もある (食べログ、2022〜26年の口コミ)。',
    notes: '[おばんざいと山椒・木屋町] 高瀬川沿いの小さな大人のカウンターの酒処。自家農園の山椒が主役で、おばんざいの盛り合わせ、美山の地鶏、きんぴら、ハイボールまで山椒がピリリ。卓上にも山椒。4千〜8千円ほど。夜のみ。現金か PayPay。火曜休み。',
  });
}

// ================================================================ 西角
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26000303/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.kyoto-saikaku.com/';
  const L = ['12:00', '13:30']; const D = ['17:00', '22:00'];
  put({
    id: 'kyoto_saikaku_demachi', name: '西角 (Saikaku)', category: 'OMNI',
    lat: 35.030116, lng: 135.768975, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Dashi-based Kyoto cooking with soy, tempura and cha soba; no gluten information (2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish-centred Kyoto cuisine in dashi (2024–26 reviews).',
    hours_raw: 'Lunch Mon, Tue, Fri, Sun 12:00–13:30, booked by the day before; dinner Mon, Tue, Thu–Sun 17:00–22:00 (last order 21:00); closed Wednesday and the 3rd Tuesday (Tabelog). The official site gives 17:00–21:00. Bookings by phone; "a small shop — we would be glad if you booked" (official site). Course ¥12,000 or à la carte, plus consumption tax only (official site). Cards (VISA, Master, JCB, AMEX) (Tabelog). Counter, tables and a room with tatami (official site); 20 seats; children welcome (Tabelog). Tabelog lists parking; the official site says there is none, with coin parking in front (the street is one-way northbound). A short way into the Demachi shopping street, about 8 min from Demachiyanagi Stn or 5 min from the nearest city bus stop (official site; April 2024 review).',
    hours: { 0: day(L, D), 1: day(L, D), 3: day(D), 4: day(L, D), 5: day(D), 6: day(L, D) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Demachi shopping street — 8 min from Demachiyanagi Stn',
    cuisine: 'Quiet seasonal Kyoto cuisine, as a ¥12,000 course or à la carte (official site): a seasonal appetizer platter, sashimi of sawara and sea bream, the seasonal steamed dish — chestnut with fish in October, green peas in March — guji (sweet sea bream) cooked as you choose: salt-grilled, sake-steamed, fried, simmered or agedashi; tempura of kuruma prawn, firefly squid and mountain vegetables; hamo in summer; to finish, rice with chirimen-jako and pickles or cha soba, then warabi mochi; a broad sake list (2024–26 reviews)',
    website: SITE, gmaps: gm('西角 出町'), menu_url: SITE + 'menu/',
    notes: "[Kyoto cuisine · Demachi shopping street] A calm little Kyoto restaurant off the Demachi arcade, by counter, table or tatami room: seasonal appetizers, a celebrated steamed dish of the season, and guji cooked whichever way you like. Course ¥12,000 or à la carte, plus tax only. Book ahead; closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed) with the proprietress'], origin: null,
      background: 'Per the official site, running since about 2008 (site copyright 2008–2026); its motto is 「ゆき過ぎず ひかえめに」 — never overdone, always restrained — following Kyoto\'s seasons in nourishing food. A July 2026 diner describes the owner and the hostess.',
      philosophy: 'Restrained cooking that follows the Kyoto seasons (official site).',
      specialty: 'Guji prepared to order; the seasonal steamed dish.',
      anecdotes: [
        { text: 'A September 2025 regular on a third visit had a favourite hotel\'s concierge book it, and likes that it serves à la carte.', source: R + 'B491174686/' },
        { text: 'A party of three in March 2026 shared one guji cooked three ways: head salt-grilled, middle simmered, tail fried.', source: R + 'B524033010/' },
        { text: 'An October 2026 diner ordered the chestnut steamed dish a second time.', source: R + 'B485047841/' },
        { text: 'A July 2026 diner called the owner and the hostess "true gentlemen and ladies".', source: R + 'B532363225/' },
      ],
      japanese_sources_summary: '公式サイト: 御料理 西角、上京区出町桝形、「ゆき過ぎず ひかえめに 京の四季の移ろいを 滋味あふれるお料理とともに」、コース12,000円〜・一品料理 (別途消費税のみ)、17:00〜21:00、毎週水曜・毎月第3火曜休み、カウンター・テーブル・お部屋 (畳、4名まで)、小さい店なので予約を、電話予約、駐車場なし (店の前にコインパーキング、北行き一方通行)、市バス河原町今出川から徒歩約5分、京阪出町柳駅から徒歩約8分。食べログ (店舗会員): 日本料理、上京区今出川通河原町西入ル三芳町134、ランチ (月火金日 12:00〜13:30、前日までに予約)、ディナー 17:00〜22:00、20席、カード可、子供可。口コミ (2023年8月〜2026年10月、英語): 八寸、季節の蒸し物 (栗、えんどう豆)、ぐじを焼き・酒蒸し・揚げ・煮付け・揚げ出しから選ぶ、天ぷら、ちりめんじゃこのご飯か茶そば、わらび餅、日本酒、ご主人と女将。',
      confidence: 'medium', sources: [TB, SITE, SITE + 'menu/', SITE + 'shop/', R + 'B482543421/', R + 'B485047841/', R + 'B491174686/', R + 'B499137104/', R + 'B501914873/', R + 'B524033010/', R + 'B532363225/', R + 'B537845405/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter, tables or a tatami room; book by phone.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区今出川通河原町西入ル三芳町134',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop and the official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.030116, 135.768975); cross-checked: GSI 京都府京都市上京区三芳町134番地 (lot) 43m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [SITE + 'menu/'],
    price_note: 'Course price from the official site, plus consumption tax.', last_checked: TODAY, items: [
      it('コース', '', 'Course', '¥12,000~', 'Courses', 'ask', 'no', 'Official site; plus tax.', 'course'),
      it('ぐじ', 'guji', 'Guji (sweet sea bream), cooked as you choose', '', 'À la carte', 'ask', 'no', '2025–26 reviews.', 'guji'),
    ] }, {
    cuisine: '12,000円のコースか一品料理で味わう静かな季節の京料理 (公式サイト): 季節の八寸、鰆と鯛のお造り、季節の蒸し物 (10月は栗と魚、3月はえんどう豆)、塩焼き・酒蒸し・揚げ・煮付け・揚げ出しから選べるぐじ、車海老やホタルイカや山菜の天ぷら、夏の鱧、締めはちりめんじゃこのご飯と漬物か茶そば、わらび餅、日本酒も豊富 (2024〜26年の口コミ)',
    neighborhood: '出町の商店街。出町柳駅から徒歩8分',
    gf_detail: '要確認。出汁と醤油の京料理、天ぷら、茶そば。グルテンの情報はない (2024〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚が中心の出汁の京料理 (2024〜26年の口コミ)。',
    notes: '[京料理・出町の商店街] 出町の商店街を少し入った、カウンター、テーブル、畳の部屋のある静かな京料理の店。季節の八寸、評判の季節の蒸し物、好みの調理法で出すぐじ。コース12,000円か一品料理で、別途消費税のみ。予約を。水曜休み。',
  });
}

// ================================================================ お弐かいSECOND
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26044883/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_onikai_second', name: 'お弐かいSECOND (Onikai SECOND)', category: 'OMNI',
    lat: 35.009902, lng: 135.758721, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Dashi-simmered vegetables, sashimi with soy, shrimp cutlet and tempura; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: vegetables are simmered in dashi; fish and beef dishes (2026 reviews).',
    hours_raw: '17:00–23:00 daily; closing days vary; hours may change (Tabelog). Bookings via the website or by phone; full from opening on some nights (2026 reviews). Cards, e-money and QR (Tabelog). On the 2nd and 3rd floors of a renovated machiya — look for a small sign and stairs; a counter wraps the kitchen, private rooms upstairs; non-smoking (Tabelog; 2026 reviews). Dishes come in single or two-person portions (2026 reviews). 2 min from Karasuma Oike Stn (Tabelog; September 2026 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'South-east of Karasuma Oike — 2 min from Karasuma Oike Stn',
    cuisine: 'New-style Kyoto izakaya of vegetables in good dashi: the signature simmered vegetables, each seasoned differently (eggplant, Kujo green onion, potato); beef rolls with egg; fresh and fried yuba; sea bream sashimi with shiso-eggplant wasabi soy; eggplant with hamo and ponzu; Kujo green onion and octopus nuta; anago simmered with sansho; shrimp cutlet of 100% shrimp; pear Caesar salad; silver clay-pot rice (salmon and green onion, wasabi greens) finished as chazuke with dashi (2026 reviews)',
    website: null, gmaps: gm('お弐かいSECOND 京都'), menu_url: null,
    notes: "[Kyoto vegetables & dashi · near Karasuma Oike] A young, upbeat counter upstairs in a renovated machiya: dashi-simmered seasonal vegetables, beef rolls with egg, an all-shrimp cutlet and a crisp-bottomed clay-pot rice you finish as chazuke. About ¥4,000–5,000. Daily from 17:00; book, it fills fast.",
    chef_bio: { chef_name: null, roles: ['Young staff (unnamed)'], origin: null,
      background: 'Opened 19 April 2026 (Tabelog). Reviewers place it in the 五十家 (Isoya) group as the second お弐かい, after the Kawaramachi shop (October 2026 reviews).',
      philosophy: null, specialty: 'Simmered vegetables; clay-pot rice.',
      anecdotes: [
        { text: 'A September 2026 diner liked that dishes come as individual portions, so nothing has to be shared, and found it packed from opening.', source: R + 'B535797803/' },
        { text: 'An October 2026 guest who called on spec got a 20:00 seat and found the young staff quick and efficient.', source: R + 'B537223618/' },
        { text: 'A group of four in October 2026 found the Kawaramachi お弐かい menu longer, but everything here just as good.', source: R + 'B537810862/' },
      ],
      japanese_sources_summary: '食べログ: お弐かいSECOND、居酒屋、中京区姉小路通室町東入柿本町411 2F・3F、烏丸御池駅から134m、17:00〜23:00 (定休日不定)、予約可、個室あり、禁煙、カード・電子マネー・QR 可、2026年4月19日オープン。口コミ (2026年9〜10月、英語): 五十家グループ、河原町のお弐かいの2号店、町家の改装、小さな看板と階段、厨房を囲むカウンター、若いスタッフ、名物の炊いた野菜 (なす、Kujo ねぎ、じゃがいも)、牛肉巻きと卵、生湯葉と揚げ湯葉、鯛のお造りに大葉なすのわさび醤油、なすと鱧のポン酢、ねぎとたこのぬた、穴子の山椒煮、海老100%の海老カツ、梨のシーザーサラダ、銀の土鍋ご飯を出汁で茶漬けに、一人前ずつの盛り付け。',
      confidence: 'medium', sources: [TB, R + 'B535797803/', R + 'B536695357/', R + 'B536843626/', R + 'B537151794/', R + 'B537223618/', R + 'B537580747/', R + 'B537810862/', R + 'B538015815/', R + 'B538208767/', R + 'B538773973/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter around the kitchen; staff explain dishes.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区姉小路通室町東入柿本町411 2F・3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009902, 135.758721); cross-checked: GSI 京都府京都市中京区柿本町411番地 (lot) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537580747/', R + 'B538208767/'],
    price_note: 'No menu or item prices read; dishes from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Simmered seasonal vegetables (signature)', '', 'Dishes', 'ask', 'no', 'Dashi-simmered; September 2026 reviews.', 'nimono_yasai'),
      it('', '', 'Shrimp cutlet (100% shrimp)', '', 'Dishes', 'no', 'no', 'September–October 2026 reviews.', 'ebi_katsu'),
      it('', '', 'Clay-pot rice, finished as chazuke', '', 'Rice', 'ask', 'no', 'October 2026 reviews.', 'donabe_gohan'),
    ] }, {
    cuisine: 'よい出汁で野菜を味わう新しい京都の居酒屋: 名物の炊いた野菜は一品ずつ味付けを変える (なす、Kujo ねぎ、じゃがいも)。牛肉巻きと卵、生湯葉と揚げ湯葉、鯛のお造りに大葉となすのわさび醤油、なすと鱧のポン酢、ねぎとたこのぬた、穴子の山椒煮、海老100%の海老カツ、梨のシーザーサラダ、銀の土鍋ご飯 (鮭とねぎ、わさび菜) を出汁で茶漬けに (2026年の口コミ)',
    neighborhood: '烏丸御池の南東。烏丸御池駅から徒歩2分',
    gf_detail: '要確認。出汁で炊いた野菜、醤油のお造り、海老カツ、天ぷら。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。野菜は出汁で炊き、魚や牛肉の料理もある (2026年の口コミ)。',
    notes: '[京野菜と出汁・烏丸御池近く] 改装した町家の2階、若く元気なスタッフのカウンター。出汁で炊いた季節の野菜、卵を添えた牛肉巻き、海老100%のカツ、おこげのできる土鍋ご飯は最後に茶漬けで。4千〜5千円ほど。17時から毎日。すぐ埋まるので予約を。',
  });
}

save();
