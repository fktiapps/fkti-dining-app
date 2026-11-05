// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 1.
//   + 京料理 御旅町田ごと Tagoto (Kyoto-cuisine house founded 1871, on Shijo Otabi-cho since 1945)      [core]
//   + サラダの店 サンチョ 河原町本店 Salad no Mise Sancho (salad-and-grill yoshoku since 1972)          [core]
//   + まっしゅ京都 MASH Kyoto (bakery since 2004; Kyoto-sweet breads; Bread WEST Tabelog 100 2026)      [notable]
//   + レーヌ デ プレ Reine des prés (6-seat French omakase near Marutamachi; since 2012)                 [notable]
//   - 551蓬莱 京都高島屋店 26013473 (chain, skip) · 桐麺 京都高島屋店 26044931 (brand already in data, skip)
//   Taken in queue order on 2026-11-05: `queue.mjs kyoto-missed next core 200` lane ids 26013473, 26044931 (skipped),
//   26000843, 26001323; `next notable 200` lane ids 26006051, 26021417. None is in data/kyoto.json: grep by name
//   (田ごと/Tagoto, サンチョ/Sancho, まっしゅ/MASH, レーヌ/Reine) and address (御旅町34, 燈籠町568, 駒之町537) found none.
//   中之町572 is shared with mp_gyoza_taizo (a gyoza shop, pin 35.004344, 135.768593): Sancho's Tabelog point sits 3 m
//   from it, so Sancho is offset ~6 m north (see its pin_source).
//   Group checks (working line): Tagoto runs 4 restaurants (Shijo honten, Shinjuku Keio, Kyoto Takashimaya, Kyoto Porta
//   soba) per its own history page — a small group; Sancho has 2 (Kawaramachi honten, Fushimi) per its own site.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-1');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26013473', 'chain: 551蓬莱, about 60 shops in six prefectures (same reason as osw8-21 skips 27000813/27080001, 2026-11-02)');
skip('26044931', '桐麺 京都高島屋店: same-concept branch (homemade noodles, Kiridama) of a brand already in data — osaka_ramen_kirimen_tennoji ("らーめん 桐麺 天王寺店"); the Tabelog review list calls it "A Popular Osaka Restaurant"');

// ================================================================ 京料理 御旅町田ごと
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26000843/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kyoto-tagoto.co.jp/'; const HONTEN = SITE + 'honten'; const HIST = SITE + 'history';
  const BRANCH = SITE + 'branch'; const EN = SITE + 'en'; const CO = SITE + 'company';
  const H = day(['11:30', '15:00'], ['17:00', '21:00']);
  put({
    id: 'kyoto_otabicho_tagoto', name: '京料理 御旅町田ごと (Tagoto)', category: 'OMNI',
    lat: 35.003896, lng: 135.7682, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. The operator lists gluten-free, vegan and vegetarian options on Tabelog, and the English page says dietary restrictions and food allergies can be accommodated; but this is Kyoto cuisine built on broth and seasonings, and no gluten-free dish is named (Tabelog; official site).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask in advance. The English page says vegetarian or vegan meals can be provided if the shop is told ahead, and notes that the broth for most dishes is made with bonito; the standard bento, yuba and kaiseki menus include fish (official site; 2026 reviews).',
    hours_raw: 'Lunch 11:30–15:00; dinner 17:00–21:00 (last order 20:00); closed Wednesday and the second Thursday (open on public holidays) (official site; Tabelog). Bookings by phone (toll-free 0120-307-361) or online; a 2-hour stay for lunch and dinner; seat requests (window, quiet room) cannot be taken; changes on the day by phone only (Tabelog). Dishes are decided at booking to cut food waste (Tabelog). The third-floor rooms take only kaiseki of ¥11,000 or more, with a room charge; a service charge applies at lunch and dinner (official site). 108 seats over three floors: tables, sunken kotatsu seats and tatami rooms, up to 32 in the hall; elevator; wheelchair accessible; non-smoking; cards, e-money and QR payments; English menu (Tabelog). 1 min from Hankyu Kyoto Kawaramachi Stn exit 6; partner parking at フヤ町パーキング, 2 hours free for groups spending ¥6,000 or more (official site).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo-dori at Kawaramachi, opposite Takashimaya — 1 min from Kyoto Kawaramachi Stn exit 6',
    cuisine: 'Kyoto cuisine with Kyoto vegetables and seasonal ingredients (official site) · Kōetsu mizusashi bento, served in a copy of a water jar by the early-Edo artist 本阿弥光悦, from ¥4,950; November version with a sea bream and turnip hot pot and sashimi ¥7,700 · yuba course from ¥4,950 · lunch kaiseki ¥7,700 · kaiseki 「うさぎ」 ¥11,000, 「杵」 ¥13,200, 「臼」 ¥16,500, 「鶴」 ¥22,000, drinks and service extra (official site, prices with tax) · tempura soba and kabura-mushi at lunch (February 2026) · house sake (Tabelog)',
    website: SITE, gmaps: gm('京料理 御旅町田ごと'), menu_url: HONTEN,
    notes: "[Kyoto cuisine · Shijo Kawaramachi, a house from 1871] A Kyoto-cuisine restaurant founded in 1871, now in its fifth generation (堀部素久, per the company site) and on Shijo Otabi-cho since moving here from Shinkyogoku after the war. Behind the noren: tables and kotatsu seats downstairs, private rooms and a hall above, a small courtyard garden. The house dish is the Kōetsu mizusashi bento (from ¥4,950), with a yuba course and kaiseki from ¥11,000; English menu, and vegan meals if asked ahead. Lunch 11:30–15:00, dinner to 21:00; closed Wednesday and the second Thursday.",
    chef_bio: { chef_name: '堀部素久', roles: ['Fifth-generation head of the house and representative director of 株式会社田ごと (company site); the kitchen staff are not named'], origin: null,
      background: 'Per the company history page: founded in 1871 (Meiji 4) by 堀部徳兵衛; the second generation renamed the shop from 田毎 to 田ごと in 1938; in 1945, after the war, the shop moved from Shinkyogoku to Shijo Otabi-cho, where it still runs as the Shijo honten; 株式会社田ごと was set up in 1950; the Keio department store shop in Shinjuku opened in 1964; the honten was rebuilt and reopened in 2008; Kyoto Prefecture "Kyoto shinise" award 2013; listed as a provider of seasonal Kyoto vegetables 2014. Today the company runs the Shijo honten, the Shinjuku Keio shop, the Kyoto Takashimaya shop and the Kyoto Porta shop (soba), and sells Kyoto bento at Kyoto Isetan and in Kyoto Station.',
      philosophy: 'Per the official site: to bring out the best of Kyoto vegetables and nature’s ingredients, express the turning seasons, and give the menu life through a Kyoto sense of beauty. Per Tabelog (operator text): "Cherishing a Simple and Pure Heart."',
      specialty: 'Kōetsu mizusashi bento; yuba course; Kyoto kaiseki.',
      anecdotes: [
        { text: '"Nearly 40 years ago, I had my first taste of yuba at this restaurant during a family trip to Kyoto." The reviewer came back for a yuba course and chilled sake — August 2026.', source: R + 'B441296519/' },
        { text: 'A solo diner, put off by the "somewhat intimidating entrance", found staff who said dining alone was fine and seated the reviewer away from larger groups; yuba course ¥5,170 — July 2026.', source: R + 'B531530194/' },
        { text: 'Lunch kaiseki ¥6,600 with hamo sashimi and Kamo eggplant dengaku, finishing with matcha shaved ice; the reviewer usually eats at the Takashimaya branch across the street — July 2026.', source: R + 'B532766897/' },
        { text: 'An April 2026 visitor noted many elderly diners and international visitors, Wi-Fi, a courtyard and staff in traditional dress; Kōetsu mizusashi bento ¥4,840.', source: R + 'B526567058/' },
        { text: 'A September 2026 lunch guest praised the garden-view room but found the wait after the hassun long and the service "somewhat clumsy".', source: R + 'B537667167/' },
      ],
      japanese_sources_summary: '公式サイト (kyoto-tagoto.co.jp): 京料理 御旅町田ごと、下京区四条通寺町東入御旅町34番地、阪急河原町駅6番出口から東へ約10メートル、ご昼食11:30〜15:00、ご夕食17:00〜21:00 (L.O20:00)、定休日 水曜日・第2木曜日 (祝日を除く)、霜月の光悦水指弁当 (鯛かぶら鍋とお造り付) 税込7,700円、光悦水指弁当 税込4,950円〜、ゆば料理 税込4,950円〜、お昼の会席 税込7,700円、会席「うさぎ」11,000円・「杵」13,200円・「臼」16,500円・「鶴」22,000円 (税込、飲み物・サービス料別)、3階のお座敷は11,000円以上の会席で別途お部屋代。歴史: 明治4年 (1871年) 初代 堀部徳兵衛、昭和13年「田毎」から田ごとに改名、昭和20年 新京極から四条御旅町に移転、昭和25年 株式会社田ごと設立、昭和39年 新宿京王百貨店に「田ごと光悦舗」、平成20年 本店新装開店、平成25年 京都老舗表彰、五代目 堀部素久 (代表取締役)、現在は四条本店・新宿京王店・京都高島屋店・京都ポルタ店。英語ページ: ベジタリアン・ヴィーガン料理は事前連絡で対応、ほとんどの料理の出汁は鰹。食べログ: 京料理、108席、個室あり、カード・電子マネー・QR 可、英語メニュー、英語・中国語のスタッフ、ヴィーガン・ベジタリアン・グルテンフリーのオプション (店舗情報)。口コミ (2026年1〜9月、英語): ゆば料理、光悦水指弁当、昼の会席、天ぷらそば、かぶら蒸し。',
      confidence: 'medium', sources: [TB, SITE, HONTEN, HIST, BRANCH, EN, CO, R + 'B441296519/', R + 'B520862550/', R + 'B521930704/', R + 'B522214405/', R + 'B526567058/', R + 'B531530194/', R + 'B532766897/', R + 'B537667167/'] },
    cultural_comfort: { level: 'english', note: 'English page and English menu; Tabelog lists English- and Chinese-speaking staff. Book by phone or online.' },
    safety: { ...SAFETY0, staff_allergy_handling: [
      { text: 'The English page says: "We can accommodate special requests, food preferences and dietary restrictions, including children\'s menus and food allergies. Please note that the broth used for most of our dishes is made with bonito (fish)." It also says vegetarian or vegan meals can be provided with advance notice.', source: EN, verified: TODAY },
    ] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区四条通寺町東入御旅町34',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (November 2026 menu) and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.003896, 135.768200); cross-checked: GSI 京都府京都市下京区御旅町34番地 (lot) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [HONTEN, R + 'B531530194/', R + 'B532766897/'],
    price_note: 'Official site prices with tax (service charge extra), read 2026-11-05. Reviewers paid less in 2026: yuba course ¥5,170 and lunch kaiseki ¥6,600 (July 2026), Kōetsu bento ¥4,840 (April 2026).', last_checked: TODAY, items: [
      it('霜月の光悦水指弁当 (鯛かぶら鍋とお造り付)', '', 'November Kōetsu mizusashi bento with sea bream and turnip hot pot and sashimi', '¥7,700', 'Bento', 'ask', 'no', 'November only.', 'koetsu_bento_november'),
      it('光悦水指弁当', '', 'Kōetsu mizusashi bento', '¥4,950~', 'Bento', 'ask', 'no', '', 'koetsu_bento'),
      it('ゆば料理', '', 'Yuba course', '¥4,950~', 'Courses', 'ask', 'ask', 'Broth is bonito-based unless a vegan meal is asked for ahead.', 'yuba_course'),
      it('お昼の会席', '', 'Lunch kaiseki', '¥7,700', 'Courses', 'ask', 'no', 'Lunch only.', 'lunch_kaiseki'),
      it('会席「うさぎ」', '', 'Kaiseki course 「うさぎ」', '¥11,000', 'Kaiseki', 'ask', 'no', 'Drinks and service extra.', 'kaiseki_usagi'),
      it('会席「杵」', '', 'Kaiseki course 「杵」', '¥13,200', 'Kaiseki', 'ask', 'no', '', 'kaiseki_kine'),
      it('会席「臼」', '', 'Kaiseki course 「臼」', '¥16,500', 'Kaiseki', 'ask', 'no', '', 'kaiseki_usu'),
      it('会席「鶴」', '', 'Kaiseki course 「鶴」', '¥22,000', 'Kaiseki', 'ask', 'no', '', 'kaiseki_tsuru'),
    ] }, {
    cuisine: '京野菜と季節の素材の京料理 (公式サイト)・江戸初期の本阿弥光悦の水指を写した器の光悦水指弁当、税込4,950円〜、11月は鯛かぶら鍋とお造り付きで7,700円・ゆば料理 4,950円〜・お昼の会席 7,700円・会席「うさぎ」11,000円、「杵」13,200円、「臼」16,500円、「鶴」22,000円、飲み物・サービス料別 (公式サイト、税込)・昼の天ぷらそばとかぶら蒸し (2026年2月)・オリジナルの日本酒 (食べログ)',
    neighborhood: '四条通の河原町、高島屋の向かい。京都河原町駅6番出口から徒歩1分',
    gf_detail: '予約時に要確認。食べログの店舗情報にはグルテンフリー・ヴィーガン・ベジタリアンのオプションがあり、英語ページには食事制限や食物アレルギーに対応できるとある。ただし出汁と調味料が土台の京料理で、グルテンフリーの料理名は挙がっていない (食べログ、公式サイト)。',
    vegan_detail: '事前に要確認。英語ページには、前もって伝えればベジタリアンやヴィーガンの料理を用意できるとあり、ほとんどの料理の出汁は鰹とも書く。通常の弁当、ゆば料理、会席には魚が入る (公式サイト、2026年の口コミ)。',
    notes: '[京料理・四条河原町、明治4年創業] 1871年創業の京料理店。現在は五代目 (会社概要によれば堀部素久)。戦後に新京極から移った四条御旅町で営む。暖簾の奥は1階にテーブル席と掘りごたつ席、上の階に個室と大広間、小さな坪庭。名物は光悦水指弁当 (4,950円〜)、ほかにゆば料理、会席は11,000円から。英語メニューがあり、ヴィーガン料理は事前に頼めば用意できる。昼11時半〜15時、夜は21時まで。水曜と第2木曜休み。',
  });
}

// ================================================================ サラダの店 サンチョ 河原町本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26001323/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://sancho.co.jp/'; const STORE = SITE + 'store/kawaramachi/'; const LUNCH = STORE + 'lunch/';
  const MENU = STORE + 'menu01/'; const CAL = SITE + 'info/7493/'; const PRICE = SITE + 'info/7985/';
  const HIST = SITE + 'store/%e3%82%b5%e3%83%b3%e3%83%81%e3%83%a7%e3%81%ab%e3%81%a4%e3%81%84%e3%81%a6/';
  const H = day(['11:30', '15:30'], ['17:00', '22:00']);
  put({
    id: 'kyoto_salad_sancho_kawaramachi', name: 'サラダの店 サンチョ 河原町本店 (Salad no Mise Sancho Kawaramachi Honten)', category: 'OMNI',
    lat: 35.00442, lng: 135.768606, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: the grills are fried shrimp, chicken and beef cutlets, minced cutlets, crab-cream croquettes and teriyaki steak, served with rice or a roll; no gluten information (official menu).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Every grill is meat, seafood or egg; the green salad (six vegetables, house dressing ¥750) and the fresh fruit juices are the plant-based items, but the dressing ingredients are not published, and reviewers mention a homemade mayonnaise (official menu; April 2026).',
    hours_raw: '11:30–22:00 (last order 21:00), basically closed 15:30–17:00; lunch menu 11:30–15:30 (official site). Closed Wednesday, plus two extra closing days a month, mostly Tuesdays; the 2026 calendar lists 10 and 24 November, 8 and 22 December, and 30 December–6 January (official site). No bookings; queues of 30 minutes to over an hour are usual, and a reviewer advises joining by about 14:45 for lunch (2026 reviews). Takeaway grills, salads and dressings; dressings ship nationwide (official site). 20 seats (8 counter, 12 table); non-smoking; cash only (Tabelog). 50 m north of Shijo-Kawaramachi, beside Mizuho Bank (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Just north of Shijo-Kawaramachi, beside Mizuho Bank — 1 min from Kyoto Kawaramachi Stn',
    cuisine: 'Salad shop and western-style grill since 1972; every grill comes with a six-vegetable green salad in the house dressing (official site) · weekday lunch with salad and rice or a roll: omelette and crab-cream croquette ¥1,200, teriyaki steak and croquette ¥1,480 (+¥150 for a fresh juice) · weekend lunch with fresh juice: A ¥1,400, B (hamburg steak, croquette, fried shrimp) ¥1,600, C (teriyaki steak, croquette, fried shrimp) ¥1,880 · teriyaki steak and salad ¥1,880, handmade hamburg steak ¥1,330, demi-glace hamburg ¥1,560, shiso chicken cutlet with cheese ¥1,390 · Select set ¥2,880 · about 18 salads from ¥750 · fresh banana, lemon, pineapple and seasonal fruit juices · house dressings ¥650 a bottle (official menu, prices with tax)',
    website: SITE, gmaps: gm('サラダの店 サンチョ 河原町本店'), menu_url: MENU,
    notes: "[Yoshoku · Shijo-Kawaramachi, salads and teriyaki steak since 1972] A small white-walled western-style diner off Shijo that opened in 1972 as a salad specialist: every grill — teriyaki steak, hamburg steak, crab-cream croquettes, fried shrimp — comes with a big, crisp six-vegetable salad in the house dressing, and the lunch sets add rice or a roll and a fresh fruit juice. Weekday lunch from ¥1,200; teriyaki steak with salad ¥1,880. Twenty seats and no bookings, so expect a queue. Cash only; closed Wednesday and two other days a month.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; the site carries an "owner diary"); run by サンチョ株式会社'], origin: null,
      background: 'Per the shop history page: opened in 1972 (Showa 47) as a salad specialist at the present Kawaramachi honten, as an individual business; became サンチョ株式会社 in 1975; opened a Fushimi branch in 1980 and later other branches; featured in non-no (1979) and other magazines; from 1991 grew its own organic rice and from 1994 bought direct from organic farmers. Today the site lists two shops, the Kawaramachi honten and Fushimi. The company marked its 54th year in September 2026 (owner diary).',
      philosophy: 'Per the official site: carefully chosen fresh vegetables and additive-free ingredients, to serve food that is as kind to the body and as tasty as possible; the crispness of the salad unchanged since 1972.',
      specialty: 'Green salad with house dressing; teriyaki steak; lunch sets with fresh juice.',
      anecdotes: [
        { text: '"I\'ve been a fan of this gem since a friend took me here over 30 years ago." — August 2026.', source: R + 'B534712649/' },
        { text: 'An August 2026 visitor advised lining up by about 14:45 for lunch, as a first-round miss can mean an hour in the sun, and wished the shop handed out tickets; the staff were friendly and cheerful.', source: R + 'B535422371/' },
        { text: 'B lunch ¥1,600 after a wait of about 1 hour 10 minutes from before noon — September 2026.', source: R + 'B535883478/' },
        { text: 'On the weekday lunch, skipping the salad takes ¥200 off; the reviewer kept it — September 2026.', source: R + 'B536062060/' },
        { text: 'Juice was being made from freshly cut fruit, a diner saw — October 2026.', source: R + 'B537313435/' },
      ],
      japanese_sources_summary: '公式サイト (sancho.co.jp): 1972年にサラダの専門店としてオープン、厳選した新鮮な野菜と添加物を使用していない素材、6種類の野菜のグリーンサラダと自家製ドレッシングを全てのグリルに、約18種のサラダ、河原町店 11:30〜22:00 (21:00ラストオーダー、15:30〜17:00は基本的にクローズ)、水曜定休・月2回は連休、中京区裏寺町通四条上ル中之町572。平日ランチ: オムコロランチ1,200円、照り玉バーグランチ1,250円、フライランチ1,300円、テリコロランチ1,480円、ミックスランチ1,230円、ミニジュースセット+150円。土日ランチ (本日の生ジュース付き): Aランチ1,400円、Bランチ1,600円、Cランチ1,880円。照焼ステーキとサラダ1,880円、手作りハンバーグとサラダ1,330円、デミグラスハンバーグとサラダ1,560円、セレクトセット2,880円、グリーンサラダ750円、自家製ドレッシング各650円 (税込)。2026年5月1日から照焼用牛肉とワインの価格改定。2026年の臨時休業日 (11月10日・24日、12月8日・22日、12月30日〜1月6日)。サンチョの歩み: 昭和47年 個人の店として開店、昭和50年 サンチョ株式会社、昭和55年 伏見支店。食べログ: 洋食・ハンバーグ・ステーキ、20席 (カウンター8、テーブル12)、予約不可、カード・電子マネー・QR 不可、禁煙。口コミ (2026年4〜10月、英語): 行列30分〜1時間超、照焼ステーキ、生ジュース、サラダ。',
      confidence: 'medium', sources: [TB, SITE, STORE, LUNCH, MENU, CAL, PRICE, HIST, R + 'B512010420/', R + 'B528340896/', R + 'B534074396/', R + 'B534712649/', R + 'B535422371/', R + 'B535883478/', R + 'B535910209/', R + 'B536062060/', R + 'B537313435/', R + 'B538535718/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Queue outside (no bookings); a counter suits solo diners; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区裏寺町通四条上ル中之町572',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (October 2026 calendar) and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004366, 135.768606), moved ~6 m north to 35.004420 because mp_gyoza_taizo (same lot, 中之町572) is pinned 3 m from the Tabelog point; cross-checked: GSI 京都府京都市中京区中之町572番地 (lot) 20m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [LUNCH, MENU, PRICE],
    price_note: 'Official menu pages, prices with tax, read 2026-11-05 (prices of teriyaki beef dishes and wine were raised on 2026-05-01). A September 2026 reviewer paid ¥1,600 for the B lunch, matching the list.', last_checked: TODAY, items: [
      it('オムコロランチ', '', 'Weekday lunch: wakame omelette and shrimp crab-cream croquette, salad, rice or roll', '¥1,200', 'Weekday lunch', 'no', 'no', '', 'omukoro_lunch'),
      it('テリコロランチ', '', 'Weekday lunch: teriyaki steak and crab-cream croquette, salad, rice or roll', '¥1,480', 'Weekday lunch', 'no', 'no', '', 'terikoro_lunch'),
      it('Bランチ', '', 'Weekend lunch B: hamburg steak, crab-cream croquette, fried shrimp, salad, rice or roll, fresh juice', '¥1,600', 'Weekend lunch', 'no', 'no', '', 'b_lunch'),
      it('Cランチ', '', 'Weekend lunch C: teriyaki steak, crab-cream croquette, fried shrimp, salad, rice or roll, fresh juice', '¥1,880', 'Weekend lunch', 'no', 'no', '', 'c_lunch'),
      it('照焼ステーキとサラダ', '', 'Teriyaki steak with salad', '¥1,880', 'Grill', 'no', 'no', '', 'teriyaki_steak'),
      it('手作りハンバーグ(200g)とサラダ', '', 'Handmade hamburg steak (200 g) with salad', '¥1,330', 'Grill', 'no', 'no', 'Ketchup-based cocktail sauce.', 'hamburg'),
      it('グリーンサラダ', '', 'Green salad with the original dressing', '¥750', 'Salad', 'ask', 'ask', 'Dressing ingredients not published.', 'green_salad'),
      it('自家製ドレッシング', '', 'House dressing, one bottle (takeaway)', '¥650', 'Takeaway', 'ask', 'ask', 'Original, vegetable, lemon or sesame Japanese-style.', 'dressing_bottle'),
    ] }, {
    cuisine: '1972年からのサラダの店で洋食のグリル。どのグリルにも6種類の野菜のグリーンサラダと自家製ドレッシングが付く (公式サイト)・平日ランチ (サラダ、ライスかロールパン付き): オムコロランチ1,200円、テリコロランチ1,480円 (+150円で生ジュース)・土日ランチ (生ジュース付き): A 1,400円、B (ハンバーグ、カニクリームコロッケ、エビフライ) 1,600円、C (照焼ステーキ、カニクリームコロッケ、エビフライ) 1,880円・照焼ステーキとサラダ1,880円、手作りハンバーグ1,330円、デミグラスハンバーグ1,560円、しそとチーズのチキンカツ1,390円・セレクトセット2,880円・サラダ約18種、750円から・バナナ、レモン、パインなど季節の生ジュース・自家製ドレッシング1本650円 (公式メニュー、税込)',
    neighborhood: '四条河原町のすぐ北の裏寺町。京都河原町駅から徒歩1分',
    gf_detail: '実際にはグルテンフリーではない。グリルはエビフライ、チキンカツ、ビーフカツ、ミンチカツ、カニクリームコロッケ、照焼ステーキで、ライスかロールパンが付く。グルテンの情報はない (公式メニュー)。',
    vegan_detail: '要確認。グリルはどれも肉、魚介、卵。植物性なのはグリーンサラダ (6種の野菜、自家製ドレッシング、750円) と生ジュースだが、ドレッシングの原材料は公開されておらず、自家製マヨネーズに触れる口コミもある (公式メニュー、2026年4月)。',
    notes: '[洋食・四条河原町、1972年からのサラダと照焼ステーキ] 四条のすぐ北、白い壁の小さな洋食店。1972年にサラダの専門店として開店し、照焼ステーキ、ハンバーグ、カニクリームコロッケ、エビフライなどのグリルに、シャキシャキの6種の野菜のサラダと自家製ドレッシングがたっぷり付く。ランチはライスかロールパンと生ジュース付き。平日ランチは1,200円から、照焼ステーキとサラダは1,880円。20席で予約不可なので行列は覚悟。現金のみ。水曜と月2回ほか休み。',
  });
}

// ================================================================ まっしゅ京都
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26006051/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.mashkyoto.com/'; const RURUBU = 'https://rurubu.jp/andmore/article/19749';
  const H = day(['08:00', '19:30']);
  put({
    id: 'kyoto_mash_kyoto', name: 'まっしゅ京都 (MASH Kyoto)', category: 'MOM_AND_POP',
    lat: 34.999828, lng: 135.761075, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a wheat bakery — baguettes, pain de mie, croissants, filled buns and sandwiches (official site; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Many breads carry cream, cheese, bacon or egg; plain loaves such as the long-fermented baguette may suit, but no ingredient list is published (official site; 2026 reviews).',
    hours_raw: '8:00–19:30, Monday and Thursday to Sunday; closed Tuesday and Wednesday (Tabelog; official site). Closes when sold out (2023 article); reviewers in September–October 2026 found most shelves empty by 9:30–11:00, so go early. Takeaway only, with no café corner or eat-in (Tabelog); the shop’s own site, last updated in 2017, still lists a second-floor café, Cafe 8 huit. Cards accepted (Tabelog). East of Karasuma on Takatsuji-dori, just south of the corner by the Nikko Princess hotel; 4 min from Shijo Stn (Tabelog; 2023 article). Narrow street: no stopping by car (Tabelog).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Takatsuji, a short walk east of Karasuma — 4 min from Shijo Stn',
    cuisine: 'Bakery in a renovated old house, opened 2004, with Kyoto-sweet-style buns (Tabelog; 2023 article) · 藤壷 Fujitsubo, a matcha anpan (¥410 in October 2026) · 花のいろは。, a purple-sweet-potato anpan with a violet on top · 六条御息所, black-cocoa dough with strawberry and raspberry jam and custard · 粽あんぱん shaped like a chimaki · にぬき sandwich of hard-boiled egg, cheese and ham (official site; 2023 article) · long-fermented baguette and épi; shio-koji dough breads (official site) · croissant ¥280, pain de mie ¥290, tandoori chicken bread ¥370, shio-koji bacon ¥290, Kujo-negi and bacon bake, croque monsieur, curry bread, lemon cream sweet wrapped in bamboo leaf (2026 reviews)',
    website: SITE, gmaps: gm('まっしゅ京都 東洞院高辻'), menu_url: null,
    notes: "[Bakery · Karasuma-Takatsuji, breads like Kyoto sweets] A bakery in a renovated old house near Karasuma-Takatsuji, opened in 2004 by the owner-baker 増野, who trained in Paris before coming home to Kyoto. It is known for buns made to look like wagashi: the green matcha anpan 藤壷 (Fujitsubo), the purple-potato 花のいろは。 with a violet on top, and the jam-and-custard 六条御息所 — plus a long-fermented baguette and generous croissants (¥280). Most shelves are empty by mid-morning. Takeaway only; cards accepted; closed Tuesday and Wednesday. Bread WEST Tabelog 100, 2020, 2022 and 2026.",
    chef_bio: { chef_name: '増野', roles: ['Owner-baker (ルルブ article, updated July 2023)'], origin: 'Kyoto (the article says the shop opened in the owner\'s home town).',
      background: 'Per a ルルブ article (updated 29 July 2023): the owner-baker found the fun of bread at a Japanese bakery, decided to become a baker, went to Paris to train because "if I aim for it, I have to know the real thing", and after training opened the shop in home-town Kyoto; the building is a renovated old house. Opened 25 March 2004 (Tabelog). Tabelog Bread WEST "Tabelog 100" 2020, 2022, 2026.',
      philosophy: 'Per the official site: "パンを探究する毎日" — every day spent exploring bread; per the 2023 article, the owner wanted to make "interesting breads that feel like Kyoto".',
      specialty: '藤壷 (Fujitsubo) matcha anpan; 花のいろは。; long-fermented baguette.',
      anecdotes: [
        { text: 'Arriving around 11:00, a September 2026 reviewer found about 80% sold out; the Fujitsubo had no noticeable matcha flavour, though the red bean filling was tasty, and the bread itself was "just average in both texture and flavor".', source: R + 'B536140643/' },
        { text: '"I was surprised by the size of the croissant." At ¥280 it was "a great price" — September 2026.', source: R + 'B536586888/' },
        { text: 'A lemon cream sweet came wrapped in bamboo leaves, "making a striking presentation" — October 2026.', source: R + 'B460934699/' },
        { text: 'At 9:30 most items were sold out; the Kujo-negi and bacon bake and a croque monsieur were being finished in the back — September 2026.', source: R + 'B536679181/' },
      ],
      japanese_sources_summary: '公式サイト (mashkyoto.com、2017年まで更新): ブランジュリーまっしゅ京都、京都四条烏丸近く東洞院高辻、8:00am〜7:30pm、火・水曜定休、2F「Cafe 8 huit」(12:00〜18:30頃)、長時間低温熟成発酵のフランスパン (バゲット、エピ、ブール)、塩糀種の小物フランス、京菓子パン: 紫芋のあんぱん「花のいろは。」、抹茶のあんぱん「藤壷-fujitsubo」、桜型のメロンパン。ルルブ (2023年7月29日更新): オーナー兼ブーランジェの増野さん、日本のベーカリーでパンのおもしろさに触れ、フランス・パリで修行、地元の京都で開店、古民家を改築した建物、「京都らしい、おもしろいパンを作りたい」、花のいろは299円、粽あんぱん275円、藤壺297円、六条御息所297円 (ブラックココアの生地にいちごジャム・ラズベリージャム・カスタードクリーム)、にぬき318円、売り切れ次第終了。食べログ: パン・サンドイッチ・スイーツ、下京区東洞院通高辻下る燈籠町568、月・木〜日 8:00〜19:30、火・水休み、テイクアウトのみ (イートインなし)、カード可、2004年3月25日オープン、パン WEST 百名店 2020・2022・2026。口コミ (2026年9〜10月、英語): 早い時間に売り切れ、藤壷410円、クロワッサン280円、食パン290円、タンドリーチキン370円、塩糀ベーコン290円。',
      confidence: 'medium', sources: [TB, SITE, RURUBU, R + 'B460934699/', R + 'B535988765/', R + 'B536133521/', R + 'B536140643/', R + 'B536586888/', R + 'B536679181/', R + 'B537046312/', R + 'B537297311/', R + 'B537556145/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Self-serve bakery; point and pay at the counter; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区東洞院通高辻下る燈籠町568',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; Bread WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (34.999828, 135.761075); cross-checked: GSI 京都府京都市下京区燈籠町568番地 (lot) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537556145/', R + 'B536586888/', R + 'B535988765/'],
    price_note: 'No current price list read; prices from September–October 2026 reviews. A July 2023 article listed 花のいろは ¥299, 粽あんぱん ¥275, 藤壺 ¥297, 六条御息所 ¥297, にぬき ¥318.', last_checked: TODAY, items: [
      it('藤壷', 'Fujitsubo', 'Fujitsubo matcha anpan', '¥410', 'Kyoto-sweet breads', 'no', 'ask', 'October 2026.', 'fujitsubo'),
      it('', '', 'Croissant', '¥280', 'Bread', 'no', 'no', 'September 2026.', 'croissant'),
      it('', '', 'Pain de mie', '¥290', 'Bread', 'no', 'ask', 'September 2026.', 'pain_de_mie'),
      it('', '', 'Tandoori chicken bread', '¥370', 'Savoury breads', 'no', 'no', 'September 2026.', 'tandoori_chicken'),
      it('', '', 'Shio-koji bacon', '¥290', 'Savoury breads', 'no', 'no', 'With mustard; October 2026.', 'shio_koji_bacon'),
    ] }, {
    cuisine: '古民家を改築したパン屋、2004年開店、京菓子のような菓子パン (食べログ、2023年の記事)・抹茶のあんぱん 藤壷 (2026年10月 410円)・スミレをのせた紫芋のあんぱん 花のいろは。・ブラックココアの生地にいちごとラズベリーのジャムとカスタードの六条御息所・粽の形の粽あんぱん・固ゆで卵、チーズ、ハムのにぬき (公式サイト、2023年の記事)・長時間低温熟成のバゲットとエピ、塩糀種のパン (公式サイト)・クロワッサン280円、食パン290円、タンドリーチキン370円、塩糀ベーコン290円、九条ねぎとベーコンの焼き物、クロックムッシュ、カレーパン、笹の葉で包んだレモンクリームの菓子 (2026年の口コミ)',
    neighborhood: '烏丸に近い東洞院通、高辻の南。四条駅から徒歩4分',
    gf_detail: 'グルテンフリーではない。小麦のパン屋で、バゲット、食パン、クロワッサン、具入りのパン、サンドイッチ (公式サイト、2026年の口コミ)。',
    vegan_detail: '要確認。多くのパンにクリーム、チーズ、ベーコン、卵を使う。長時間熟成のバゲットなどシンプルなパンは合うかもしれないが、原材料の一覧は公開されていない (公式サイト、2026年の口コミ)。',
    notes: '[パン・烏丸高辻、京菓子のようなパン] 東洞院通の古民家を改築したパン屋。パリで修行したオーナー兼ブーランジェの増野さんが、地元の京都で2004年に開いた。和菓子のような菓子パンで知られ、緑の抹茶あんぱん 藤壷、スミレをのせた紫芋の 花のいろは。、ジャムとカスタードの 六条御息所 など。長時間熟成のバゲットや大きなクロワッサン (280円) も。午前中に棚の多くが空になる。テイクアウトのみ、カード可、火・水曜休み。パン WEST 百名店 2020・2022・2026。',
  });
}

// ================================================================ レーヌ デ プレ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26021417/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://reine-des-pres.com/'; const MICH = 'https://guide.michelin.com/jp/ja/kyoto-region/kyoto/restaurant/reine-des-pres';
  const H = day(['11:30', '15:00'], ['18:00', '23:00']);
  put({
    id: 'kyoto_reine_des_pres', name: 'レーヌ デ プレ (Reine des prés)', category: 'MOM_AND_POP',
    lat: 35.017285, lng: 135.769815, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. A single omakase course with bread (ciabatta, baguette), pastry desserts and butter or wine sauces; the shop asks guests to state allergies and disliked ingredients in advance and cannot change the menu on the day (Tabelog; 2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the omakase course is built on fish, shellfish, meat, foie gras, consommé and egg, and the menu is not changed on the day (Tabelog; 2025–26 reviews).',
    hours_raw: 'Lunch 11:30 (last entry 12:00); dinner 18:00 (last entry 19:00); Tabelog gives 11:30–15:00 and 18:00–23:00. Closed Wednesday and the second and third Thursday (may vary); summer break 16–22 August 2026 (official site; Tabelog). Reservation only, by phone, at least two days ahead (same day sometimes possible); 100% cancellation charge from three days before; overseas guests book through Pocket Concierge (official site). Allergies and dislikes must be told in advance (Tabelog). Lunch course ¥11,000, dinner ¥22,000, plus 10% service; wine pairing ¥10,000 (tasting) or ¥16,000 (standard) (official site). Dress code: smart casual, no shorts, short trousers or beach sandals; children from middle-school age, younger only for private bookings (official site; Tabelog). 6 seats; private hire for about 8; non-smoking; cards accepted (official site; Tabelog). 3 min walk from Jingu-Marutamachi Stn (official site).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'A quiet street south of Marutamachi, west of the Kamo River — 3 min from Jingu-Marutamachi Stn',
    cuisine: 'Six-seat French omakase: "ingredients × heat × simplicity", at most three ingredients on a plate, served on Kiyomizu-ware made with the artists (official site; Michelin Guide) · lunch course ¥11,000, dinner ¥22,000 (official site) · signatures in 2026 reviews: tomato consommé in a matcha bowl, 師へのオマージュ (Homage to the Master: egg yolk in its shell with maple syrup and sherry vinegar), 遊びゴコロ (Playful Spirit) small plates, "Premium Pumpkin" ice cream with pumpkin soup, ciabatta kept warm on a hot stone, Mimasaka venison with Manganji pepper stuffed with foie gras, low-temperature Kagoshima black wagyu · tea chosen by scent from about six · over 200 wines chosen by the sommelier-qualified chef (Tabelog)',
    website: SITE, gmaps: gm('レーヌデプレ 京都 駒之町'), menu_url: SITE,
    notes: "[French · Marutamachi, six seats and three ingredients a plate] A six-seat French restaurant on a quiet street near Jingu-Marutamachi, opened in 2012, with wood and stone like a chef's home and dishes on Kiyomizu-ware made with the artists. Only an omakase course: ingredients picked from producers, gently cooked at low temperature, no more than three on a plate — the egg 'Homage to the Master' with maple syrup, a tomato consommé drunk from a matcha bowl, venison with foie-gras-stuffed Manganji pepper. Lunch ¥11,000, dinner ¥22,000 (+10%). Book by phone two days ahead (overseas guests via Pocket Concierge); smart casual. Closed Wednesday and the second and third Thursday.",
    chef_bio: { chef_name: 'Akai', roles: ['Chef ("Chef Akai" in a February 2026 review); sommelier-qualified (official site)'], origin: null,
      background: 'Opened 26 November 2012 (Tabelog). Per the operator’s Tabelog text: 13 consecutive years in the Michelin Guide and 7 in Gault & Millau; Tabelog French WEST "Tabelog 100" 2021, 2023, 2025. Per the official site: the chef visits producers, buys directly, and works with ceramic artists on one-of-a-kind dishes; suppliers named in 2026 news include 桃里庵 peaches from Okayama, asparagus from ジェットファーム長谷川 and あいち鴨 duck from Toyohashi; in October 2026 the restaurant held its first curry event at じんぐうみち, an event space by Heian Shrine.',
      philosophy: 'Per the official site: "素材 × 火入れ × シンプル" — share the vegetables and ingredients producers have raised with care, cook them with the heat the chef has in mind, and finish them as simply as possible with a sense of the season. Per the Michelin Guide: no more than three ingredients on a plate, so a diner can tell what is on the plate.',
      specialty: 'Omakase course; 師へのオマージュ egg; tomato consommé.',
      anecdotes: [
        { text: 'The chef came to the table to explain an approach of blending the essence of Japanese cuisine with French technique, for "depth" beyond immediate deliciousness — January 2026.', source: R + 'B521328580/' },
        { text: 'For tea, six test tubes were set out to smell before choosing — January 2026.', source: R + 'B521328580/' },
        { text: '"Served in a matcha bowl, you drink it just like enjoying a cup of matcha." (the tomato consommé) — September 2026; the same reviewer found the drink menu "a bit too small to read".', source: R + 'B535859302/' },
        { text: 'A solo lunch guest talked with the serving staff about the tableware and Kyoto — September 2026.', source: R + 'B534788150/' },
      ],
      japanese_sources_summary: '公式サイト (reine-des-pres.com): 素材はすべて自ら選びとった上質なもの、仕上げは極上のシンプル、おまかせコースのみ、ランチ11,000円・ディナー22,000円 (税込、サービス料10%別)、ワインペアリング デギュスタシオン10,000円・スタンダード16,000円、ソムリエの資格を持つシェフ、コンセプト「素材×火入れ×シンプル」、作家さんと唯一無二の器、予約は電話 (075-223-2337)、2日前完全予約制、キャンセルは3日前から100%、ドレスコード (短パン、ふくらはぎより短いパンツ、ビーチサンダル等は不可)、上京区中町通丸太町下ル駒之町537-1、京阪神宮丸太町から徒歩3分、ランチ11:30〜12:00 (L.O)、ディナー18:00〜19:00 (L.O)、水曜・第2第3木曜休み (変動あり)、6席、貸切8人、海外の方は Pocket Concierge から予約、お知らせ: 8月16〜22日夏季休暇、岡山 桃里庵の桃、ジェットファーム長谷川の夏アスパラ、あいち鴨、じんぐうみちでのカレーイベント。ミシュランガイド: シェフのテーマは素材、火入れ、シンプル、一皿の食材は三つまで、清水焼の器。食べログ: フレンチ・創作料理・イノベーティブ、予約のみ、6席、カード可、サービス料10%、2012年11月26日オープン、フレンチ WEST 百名店 2021・2023・2025、アレルギーと苦手な食材は事前に、中学生以上。口コミ (2025年10月〜2026年9月、英語): トマトのコンソメ、師へのオマージュ、遊びゴコロ、プレミアムかぼちゃ、ジビエ、試験管のお茶、Akai シェフ。',
      confidence: 'medium', sources: [TB, SITE, MICH, R + 'B500765063/', R + 'B516484141/', R + 'B518916824/', R + 'B519809967/', R + 'B521328580/', R + 'B523026538/', R + 'B533171731/', R + 'B533345396/', R + 'B534788150/', R + 'B535859302/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book by phone two days ahead, or via Pocket Concierge from overseas; tell allergies when booking; smart casual.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区中町通丸太町下ル駒之町537-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (news through September 2026, November 2026 calendar) and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.017285, 135.769815); cross-checked: GSI 京都府京都市上京区駒之町537番地 (lot) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Official site prices with tax, service 10% extra, read 2026-11-05. Course content changes daily; dishes named are from 2025–26 reviews.', last_checked: TODAY, items: [
      it('ランチ おまかせコース', '', 'Lunch omakase course', '¥11,000', 'Courses', 'ask', 'no', 'Plus 10% service.', 'lunch_omakase'),
      it('ディナー おまかせコース', '', 'Dinner omakase course', '¥22,000', 'Courses', 'ask', 'no', 'Plus 10% service.', 'dinner_omakase'),
      it('ワインペアリング デギュスタシオン', '', 'Wine pairing, tasting (30 cc pours)', '¥10,000', 'Drinks', '', '', '', 'pairing_degustation'),
      it('ワインペアリング スタンダード', '', 'Wine pairing, standard', '¥16,000', 'Drinks', '', '', '', 'pairing_standard'),
    ] }, {
    cuisine: '6席のフレンチのおまかせ。「素材×火入れ×シンプル」、一皿の食材は三つまで、作家さんと作る清水焼の器 (公式サイト、ミシュランガイド)・ランチ11,000円、ディナー22,000円 (公式サイト)・2026年の口コミに出る料理: 抹茶碗のトマトのコンソメ、殻に入れた卵黄にメープルシロップとシェリービネガーの 師へのオマージュ、遊びゴコロ の小皿、かぼちゃのアイスにかぼちゃのスープの "Premium Pumpkin"、熱した石で温めるチャバタ、Mimasaka の鹿と フォアグラを詰めた Manganji とうがらし、低温で焼いた Kagoshima の黒毛和牛・香りで選ぶ約6種のお茶・ソムリエの資格を持つシェフが選ぶ200種以上のワイン (食べログ)',
    neighborhood: '丸太町の南の中町通、鴨川の西。神宮丸太町駅から徒歩3分',
    gf_detail: '予約時に要確認。おまかせコース1本で、パン (チャバタ、バゲット)、生地を使うデザート、バターやワインのソースが出る。アレルギーと苦手な食材は事前に伝える必要があり、当日のメニュー変更はできない (食べログ、2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。おまかせコースは魚、貝、肉、フォアグラ、コンソメ、卵が中心で、当日のメニュー変更はない (食べログ、2025〜26年の口コミ)。',
    notes: '[フレンチ・丸太町、6席と一皿三つの食材] 神宮丸太町に近い静かな通りの6席のフレンチ。2012年開店、木と石のシェフの家のような空間で、器は作家さんと作る清水焼。料理はおまかせコースのみで、生産者から選んだ素材を低温でやさしく火入れし、一皿の食材は三つまで。メープルシロップの卵 師へのオマージュ、抹茶碗で飲むトマトのコンソメ、フォアグラを詰めた Manganji とうがらしと鹿など。ランチ11,000円、ディナー22,000円 (サービス料10%別)。電話で2日前までに予約 (海外からは Pocket Concierge)、服装はスマートカジュアル。水曜と第2・第3木曜休み。',
  });
}

save();
