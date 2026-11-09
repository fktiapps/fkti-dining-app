// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 79.
//   Queue run from the osw2 worktree, 2026-11-08. Rest tier, nearest-first (queue.mjs kyoto-missed next rest 2000, lane ids by distance).
//   Rest rule: at least one 2025–26 review and enough sourced detail. Days the sources do not state are left out of hours.
//   Brands checked against queue-status.jsonl and than.co.jp/brands: none of this batch is a THAN brand.
//   - ガトーフェスタ ハラダ 大丸京都店 — chain (株式会社原田: department-store counters nationwide)
//   + 京野菜と串焼き 京あそび Kyo Asobi (Gion yakitori and Kyoto-vegetable skewers; 株式会社京遊, single shop)
//   + ALOK 京都烏丸店 (Indian curry near Nishiki, the Kyoto shop of a Sannomiya restaurant — a two-shop pair)
//   + 神戸牛鉄板ステーキ沙耶香 Kobe Beef Teppan Steak Sayaka (certified Kobe beef teppanyaki; 株式会社SAYAKA)
//   - 和牛 すき焼き 京都五天五 烏丸 — large parent: 株式会社WILL (Osaka), 20+ restaurant brands in Kansai and Tokai
//   - がんこ 三条本店 — chain (がんこ), as 26001132
//   - スターバックス・コーヒー 京都祇園ホテル店 — chain (Starbucks), as 26003270
//   + イタリアン酒場 COVO (Italian bar near Sanjo-Kiyamachi; 株式会社COVO, single shop)
//   None of the drafted shops is in data/kyoto.json, hidden records included: grep by id, name and address.
//   Pins: Tabelog /en/ point, cross-checked with GSI; ALOK (604) and 沙耶香 (605) are neighbours — 沙耶香 moved ~7 m south to clear
//   kyoto_beerman_shijo_karasuma (7.6 m) and ALOK; COVO moved ~10 m to clear three shops in the same Airport Building; each 9 m+ from every
//   pin on main and from each other, hidden records included.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-79');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26023551', 'ガトーフェスタ ハラダ 大丸京都店: chain — 株式会社原田 (Gunma) sells its rusks through its own shops and department-store counters from Hokkaido to Kinki (company recruiting pages; 2025 press release)');
skip('26043489', '和牛 すき焼き 京都五天五 烏丸: large parent — run by 株式会社WILL (invoice T4120001183828, Osaka), whose 20+ brands include 焼肉エイト, 大阪 かに蔵, 京都 かに銀 and 鮨仙酢 across Kansai and Tokai, plus 五天五 shops in Dotonbori and Osaka');
skip('26000949', 'がんこ 三条本店: chain — がんこ; same ruling as がんこ 高瀬川二条苑 (26001132)');
skip('26003271', 'スターバックス・コーヒー 京都祇園ホテル店: chain — Starbucks; same ruling as 26003270');

// ================================================================ 京野菜と串焼き 京あそび
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26032233/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '22:00']);
  put({
    id: 'kyoto_kyo_asobi_gion_kushiyaki', name: '京野菜と串焼き 京あそび (Kyo Asobi)', category: 'OMNI',
    lat: 35.00551862787422, lng: 135.7755455503566, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yakitori and tsukune with tare or salt, grilled Kyoto vegetables, obanzai and fried chicken; no gluten information is published (reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Grilled Kyoto-vegetable skewers are a speciality, but seasonings and dashi are not described (Tabelog; reviews).',
    hours_raw: '17:30–22:00 (last order 21:30) Monday–Saturday, holidays and holiday eves (Tabelog); Sunday is not stated. Lunch sets mainly on Friday–Sunday (January 2025); not in Tabelog’s hours. Phone reservations easier after 16:00 (Tabelog). Cards (incl. UnionPay) and e-money accepted (Tabelog). Otoshi ¥500 (Tabelog); a March 2025 reviewer was charged 10% service. 50 seats: counter, sunken-kotatsu seating and private rooms; designated smoking area (Tabelog; 2025–2026 reviews). Yaohei Building 1F near Tatsumi Shrine, Gion (Tabelog; April 2025). Opened 10 April 2019 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion Shinbashi, near Tatsumi Shrine',
    cuisine: 'Yakitori of Kyo-akajidori and Daisen-jidori chicken, and 108 kinds of colourful tsukune (September 2025) · seasonal Kyoto vegetables grilled on skewers (Tabelog shop text) · tsukune assortment (6) ¥2,380; yakitori assortment (6) ¥2,640; steamed Kyoto vegetables and meat (September 2025) · obanzai lunch tray of about a dozen small dishes with wagyu tataki or chicken; tsukune and obanzai lunch with warabi mochi (2025) · beef tongue; grilled rice-ball chazuke; a strong sake list (2025–2026)',
    website: null, gmaps: gm('京野菜と串焼き 京あそび 祇園'), menu_url: TB,
    notes: "[Yakitori · Gion Shinbashi, Kyoto vegetables and tsukune] A stylish Gion yakitori house by Tatsumi Shrine with counter, sunken-kotatsu and private-room seating: Kyo-akajidori skewers, colourful tsukune and grilled Kyoto vegetables, plus obanzai lunch trays on weekends. ¥500 otoshi.",
    chef_bio: { chef_name: null, roles: ['Chef not named'], origin: null,
      background: 'Opened in April 2019 (Tabelog), run by 株式会社京遊, registered at the shop’s address (NTA invoice register). Reviewers (2025–2026) describe a modern Japanese room with counter, sunken kotatsu and private rooms, popular for birthdays.',
      philosophy: null,
      specialty: 'Tsukune; grilled Kyoto vegetables.',
      anecdotes: [
        { text: 'A January 2025 lunch of five tsukune and ten obanzai finished with warm warabi mochi and ice cream.', source: R + 'B500307799/' },
        { text: 'A September 2025 walk-in ordered six colourful tsukune and six yakitori.', source: R + 'B515428882/' },
        { text: 'A June 2026 vegetable lover marvelled at the size of the grilled vegetables at the counter.', source: R + 'B530517351/' },
      ],
      japanese_sources_summary: '食べログ: 京野菜と串焼き 京あそび、焼き鳥・鍋、京都市東山区橋本町401 八百平ビル1F、月〜土・祝日・祝前日 17:30〜22:00 (L.O.21:30)、電話予約は16時以降がつながりやすい、カード (銀聯も)・電子マネー可、お通し代500円、50席、分煙、2019年4月10日オープン、旬の京野菜の串焼き、インボイス T7130001064173 (株式会社京遊)。口コミ (2025〜2026年、英語): 京赤地どりと大山地鶏の焼き鳥、108種のカラフルなつくね、つくね盛り合わせ6種2,380円、焼き鳥盛り合わせ6種2,640円、京野菜と肉の蒸し物、ランチは金〜日が中心、おばんざいランチ (和牛たたきや鶏)、つくねとおばんざいのランチにわらび餅、牛タン、焼きおにぎりの茶漬け、日本酒が充実、カウンター・掘りごたつ・個室、辰巳神社の近く、誕生日のサプライズ、サービス料10%がついたという声。',
      confidence: 'low', sources: [TB, R + 'B500307799/', R + 'B504060929/', R + 'B504152371/', R + 'B504796861/', R + 'B515428882/', R + 'B522702480/', R + 'B530517351/', R + 'B531092144/', 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=7130001064173'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; ¥500 otoshi.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区橋本町401 八百平ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.005519, 135.775546); cross-checked: GSI 京都府京都市東山区橋本町401番地 (lot) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B515428882/'],
    price_note: 'Prices from a September 2025 review; plus ¥500 otoshi.', last_checked: TODAY, items: [
      it('', '', 'Colourful tsukune assortment (6)', '¥2,380', 'Skewers', 'ask', 'no', '', 'tsukune6'),
      it('', '', 'Yakitori assortment (6)', '¥2,640', 'Skewers', 'ask', 'no', '', 'yakitori6'),
      it('', '', 'Grilled Kyoto vegetable assortment', '', 'Skewers', 'ask', 'ask', '', 'veg'),
    ] }, {
    cuisine: '京赤地どりと大山地鶏の焼き鳥と、108種のカラフルなつくね (2025年9月)・旬の京野菜の串焼き (食べログの店舗紹介)・つくね盛り合わせ6種2,380円、焼き鳥盛り合わせ6種2,640円、京野菜と肉の蒸し物 (2025年9月)・和牛たたきや鶏のおばんざいランチ、つくねとおばんざいのランチにわらび餅 (2025年)・牛タン、焼きおにぎりの茶漬け、充実の日本酒 (2025〜2026年)',
    neighborhood: '祇園新橋、辰巳神社の近く',
    gf_detail: '要確認。たれや塩の焼き鳥とつくね、京野菜の串焼き、おばんざい、唐揚げ。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: '要確認。京野菜の串焼きが名物だが、味付けや出汁の説明はない (食べログ、口コミ)。',
    notes: '[焼き鳥・祇園新橋、京野菜とつくね] 辰巳神社近くのおしゃれな祇園の焼き鳥店。カウンター、掘りごたつ、個室で、京赤地どりの串、カラフルなつくね、京野菜の串焼き、週末はおばんざいのランチも。お通し500円。',
  });
}

// ================================================================ ALOK 京都烏丸店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26032257/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_alok_karasuma', name: 'ALOK 京都烏丸店 (ALOK Kyoto Karasuma)', category: 'OMNI',
    lat: 35.0052260550164, lng: 135.7621262066448, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Curry sets come with naan (wheat); ask about rice and how the curries are thickened (reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A vegetable curry and daily vegetable curries are offered, but ghee, cream and dairy are not described (reviews).',
    hours_raw: '11:00–15:00 and 17:00–23:00 daily (Tabelog). No cards or e-money (Tabelog). 65 seats: a 3-seat counter and tables; non-smoking (Tabelog). Fourth floor of the First Court building off Nishiki, by Hankyu Karasuma; a flag outside marks it; lift available (Tabelog; 2024–2025 reviews). Opened 7 April 2019 as the Kyoto shop of ALOK in Sannomiya, Kobe (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Karasuma, by Nishiki Market',
    cuisine: 'Indian curries and tandoori from a tandoor oven (Tabelog) · lunch sets: student lunch ¥890, B lunch ¥1,050, C lunch with two curries ¥1,150, mini cheese-naan lunch ¥1,050, each with salad and a drink (2024–2025) · about ten curries with chosen spice level — chicken, butter chicken, spinach chicken, mutton, keema, vegetable, a daily special; naan refill (2024–2025) · honey-sweet cheese naan; chicken tikka; mango lassi (2024)',
    website: null, gmaps: gm('ALOK 京都烏丸店'), menu_url: TB,
    notes: "[Indian · Karasuma by Nishiki, curry lunch sets] A cheerful fourth-floor Indian restaurant off Nishiki with good-value lunch sets from ¥890 — choose from about ten curries and a spice level, with naan, salad and a lassi — and tandoori in the evening. Cash only; open daily.",
    chef_bio: { chef_name: null, roles: ['Chef not named'], origin: null,
      background: 'The Kyoto shop of ALOK, an Indian restaurant in Sannomiya, Kobe, opened in April 2019 (Tabelog). Reviewers (2024–2026) describe energetic, friendly staff and a lively room.',
      philosophy: null,
      specialty: 'Curry and naan lunch sets.',
      anecdotes: [
        { text: 'A January 2024 lunch guest had spicy chicken curry with naan, chicken tikka and a mango lassi.', source: R + 'B478819439/' },
        { text: 'An October 2025 regular’s favourite is the spinach chicken.', source: R + 'B514904669/' },
        { text: 'A November 2025 diner had the mini cheese-naan lunch at spice level 3.', source: R + 'B518050280/' },
      ],
      japanese_sources_summary: '食べログ: ALOK 京都烏丸店、インドカレー、京都市中京区西魚屋町604 ファーストコート4F、毎日 11:00〜15:00、17:00〜23:00、カード・電子マネー不可、65席 (カウンター3席、テーブル)、禁煙、2019年4月7日オープン、兵庫・三宮の人気インド料理店ALOKの京都店、タンドール窯。口コミ (2022〜2026年、英語): 学生ランチ890円、Bランチ1,050円、2種のカレーのCランチ1,150円、ミニチーズナンランチ1,050円 (サラダとドリンク付き)、10種ほどのカレーと辛さ選び、チキン、バターチキン、ほうれん草チキン、マトン、キーマ、野菜、日替わり、ナンのおかわり、はちみつ入りのチーズナン、チキンティッカ、マンゴーラッシー、元気で気さくなスタッフ、エレベーターあり。',
      confidence: 'low', sources: [TB, R + 'B478819439/', R + 'B480347618/', R + 'B480961933/', R + 'B490838888/', R + 'B491768177/', R + 'B514904669/', R + 'B518050280/', R + 'B532591093/'] },
    cultural_comfort: { level: 'none_needed', note: 'Set-menu ordering; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区西魚屋町604 ファーストコート 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.005226, 135.762126); cross-checked: GSI 京都府京都市中京区西魚屋町604番地 (lot) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B490838888/', R + 'B491768177/', R + 'B518050280/'],
    price_note: 'Lunch prices from 2024–2025 reviews; cash only.', last_checked: TODAY, items: [
      it('', '', 'Student lunch (curry, naan, salad, drink)', '¥890', 'Lunch', 'no', 'ask', 'August 2024.', 'student'),
      it('', '', 'B lunch (one curry, naan, salad, drink)', '¥1,050', 'Lunch', 'no', 'ask', 'August 2024.', 'lunch_b'),
      it('', '', 'C lunch (two curries, naan, salad, drink)', '¥1,150', 'Lunch', 'no', 'ask', 'September 2024.', 'lunch_c'),
      it('', '', 'Mini cheese-naan lunch', '¥1,050', 'Lunch', 'no', 'no', 'November 2025.', 'cheese_naan'),
    ] }, {
    cuisine: 'タンドール窯のインドカレーとタンドリー料理 (食べログ)・ランチセット: 学生ランチ890円、Bランチ1,050円、2種のカレーのCランチ1,150円、ミニチーズナンランチ1,050円、いずれもサラダとドリンク付き (2024〜2025年)・10種ほどのカレーから辛さを選んで、チキン、バターチキン、ほうれん草チキン、マトン、キーマ、野菜、日替わり、ナンのおかわり (2024〜2025年)・はちみつ入りのチーズナン、チキンティッカ、マンゴーラッシー (2024年)',
    neighborhood: '烏丸、錦市場の近く',
    gf_detail: '要確認。カレーのセットは小麦のナン付き。ライスやカレーのとろみについては確認を (口コミ)。',
    vegan_detail: '要確認。野菜カレーや日替わりの野菜カレーはあるが、ギー、生クリーム、乳製品の説明はない (口コミ)。',
    notes: '[インド料理・烏丸の錦近く、カレーのランチセット] 錦市場近くの4階の元気なインド料理店。ランチは890円から、10種ほどのカレーと辛さを選んでナン、サラダ、ラッシー付き、夜はタンドリーも。現金のみ、無休。',
  });
}

// ================================================================ 神戸牛鉄板ステーキ沙耶香
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26042979/'; const R = TB + 'dtlrvwlst/';
  const TC = 'https://www.tablecheck.com/en/kobebeef-sayaka';
  const PR = 'https://san-tatsu.jp/pressrelease/489076/';
  const H = day(['12:00', '22:00']);
  put({
    id: 'kyoto_kobe_beef_teppan_sayaka', name: '神戸牛鉄板ステーキ沙耶香 (Kobe Beef Teppan Steak Sayaka)', category: 'OMNI',
    lat: 35.005140, lng: 135.762108, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Teppan steak served with rock salt, wasabi and soy-based sauces; sukiyaki, curry and garlic rice on the courses; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Kobe beef specialist (Tabelog).',
    hours_raw: '12:00–22:00 daily (last order 20:30) (Tabelog). One order per person; whole-room bookings by phone (Tabelog). Cards and e-money accepted (Tabelog). 32 seats: counter, tables, semi-private and private rooms for up to 6; non-smoking (Tabelog). ST Building 102 on Nishikikoji west of Takakura, up the steps opposite the Daimaru Nishiki entrance, 2 minutes from Hankyu Karasuma (Tabelog; press release). Opened 20 January 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishiki, by Daimaru',
    cuisine: 'Kobe beef only, at a restaurant certified by the Kobe Beef Distribution Association and licensed to serve it raw: teppan steak, yukhoe, beef sashimi and sushi (Tabelog; press release) · limited Kobe beef lunch ¥5,000 — 100 g lean steak with appetizer, salad and soup (December 2025) · lunch course with Kobe beef nigiri, steak and curry; steak with rock salt, wasabi, soy or aged garlic soy (July 2026) · ¥10,000 course with sirloin cap, roast beef and curry or garlic rice (July 2026) · chef’s omakase dinner with spiny lobster and abalone, sukiyaki, a steak tasting, garlic rice and crème brûlée (December 2025) · Kobe beef sukiyaki (May 2026)',
    website: null, gmaps: gm('神戸牛鉄板ステーキ沙耶香 京都'), menu_url: TC,
    notes: "[Kobe beef teppanyaki · Nishiki by Daimaru, certified Kobe beef] A calm Kobe-beef-only teppan room steps from Nishiki, certified to serve the beef raw: watch the chef sear it at the counter, or try beef sushi and yukhoe. A ¥5,000 steak lunch is the easy way in; courses and sukiyaki in the evening. Open daily.",
    chef_bio: { chef_name: null, roles: ['Owner and teppan chef not named'], origin: null,
      background: 'Opened in January 2025 (Tabelog) by 株式会社SAYAKA as a Kobe beef specialist using only beef certified by the Kobe Beef Distribution Association (press release). A December 2025 reviewer met an owner keen to explain Kobe beef and its certification.',
      philosophy: null,
      specialty: 'Kobe beef teppan steak.',
      anecdotes: [
        { text: 'A December 2025 lunch guest learned from the owner how rare officially certified Kobe beef is.', source: R + 'B523491888/' },
        { text: 'A July 2026 diner tried the steak four ways: rock salt, wasabi, soy and aged garlic soy.', source: R + 'B531644208/' },
        { text: 'A May 2026 visitor came for Kobe beef sukiyaki and planned to return for the teppanyaki.', source: R + 'B529289175/' },
      ],
      japanese_sources_summary: '食べログ: 神戸牛鉄板ステーキ沙耶香、鉄板焼き・ステーキ・洋食、京都市中京区錦小路通高倉西入西魚屋町605 STビル102、毎日 12:00〜22:00 (L.O.20:30)、カード・電子マネー可、32席 (カウンター、テーブル、半個室、6名までの個室)、禁煙、2025年1月20日オープン、1人1オーダー、神戸牛食肉流通協会の認定店、生食の許可を得てユッケ、刺身、寿司も。プレスリリース: 株式会社SAYAKA、ほんまもんの神戸牛のみの専門店、阪急烏丸駅から徒歩2分、大丸錦入口前の階段を上がった目の前。口コミ (2025〜2026年、英語): 神戸牛の限定ランチ5,000円 (赤身ステーキ100g、前菜、サラダ、スープ)、神戸牛の握り、カレー、岩塩・わさび・醤油・熟成にんにく醤油の4種で、10,000円のコースのランプ、おまかせコースの伊勢海老と鮑、すき焼き、ガーリックライス、クレームブリュレ、神戸牛のすき焼き、神戸牛に詳しいオーナー。',
      confidence: 'medium', sources: [TB, TC, PR, R + 'B519761786/', R + 'B519788896/', R + 'B520071842/', R + 'B523491888/', R + 'B529289175/', R + 'B531644208/', R + 'B532109226/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One order per person; book for counter seats.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区錦小路通高倉西入西魚屋町605 STビル 102',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog, TableCheck and press release; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.005197, 135.762076), offset ~7m south to clear kyoto_beerman_shijo_karasuma (7.6m) and ALOK 京都烏丸店 (this batch, 5.5m); cross-checked: GSI 京都府京都市中京区西魚屋町605番地 (lot) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B520071842/', R + 'B532109226/'],
    price_note: 'Prices from December 2025 and July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Limited Kobe beef lunch (100 g lean steak)', '¥5,000', 'Lunch', 'ask', 'no', 'December 2025.', 'lunch'),
      it('', '', 'Kobe beef course', '¥10,000', 'Courses', 'ask', 'no', 'July 2026.', 'course10000'),
      it('', '', 'Kobe beef sukiyaki', '', 'Courses', 'no', 'no', '', 'sukiyaki'),
    ] }, {
    cuisine: '神戸牛食肉流通協会の認定店で、生食の許可も得た神戸牛だけの店。鉄板ステーキ、ユッケ、牛刺し、寿司 (食べログ、プレスリリース)・神戸牛の限定ランチ5,000円、赤身ステーキ100gに前菜、サラダ、スープ (2025年12月)・神戸牛の握り、ステーキ、カレーのランチコース、ステーキは岩塩・わさび・醤油・熟成にんにく醤油で (2026年7月)・ランプとローストビーフ、カレーかガーリックライスの10,000円のコース (2026年7月)・伊勢海老と鮑、すき焼き、ステーキの食べ比べ、ガーリックライス、クレームブリュレのおまかせコース (2025年12月)・神戸牛のすき焼き (2026年5月)',
    neighborhood: '錦、大丸の近く',
    gf_detail: '要確認。岩塩、わさび、醤油系のたれで食べる鉄板ステーキ。コースにすき焼き、カレー、ガーリックライスも。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。神戸牛の専門店 (食べログ)。',
    notes: '[神戸牛の鉄板焼き・大丸近くの錦、認定の神戸牛] 錦から数歩の落ち着いた神戸牛だけの鉄板の店。生食も認定され、カウンターで焼くステーキに牛の寿司やユッケも。入りやすいのは5,000円のステーキランチ、夜はコースやすき焼き。無休。',
  });
}

// ================================================================ イタリアン酒場 COVO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26038233/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.kyoto-covo.com/';
  const H = day(['16:00', '24:00']);
  put({
    id: 'kyoto_italian_sakaba_covo', name: 'イタリアン酒場 COVO (Italian Sakaba COVO)', category: 'OMNI',
    lat: 35.009407, lng: 135.769317, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pasta, bruschetta and fried dishes alongside salads, cheeses, hams and grilled meat; no gluten information is published (official site; reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Smoked broccoli and homemade pickles are on the menu, but most dishes use meat, fish, cheese or egg (official site; reviews).',
    hours_raw: '16:00–24:00 (last food order 23:00, drinks 23:45); closed Tuesday (Tabelog; official site gives 16:00–24:00). Cards (incl. UnionPay) and e-money; no table charge (Tabelog). 32 seats: a 12-seat counter on the ground floor (heated tobacco allowed) and non-smoking tables in the half-basement; private hire for 20–32 (Tabelog; official site). Reservations online (official site; March 2026). Airport Building 1F, a lane off Kawaramachi north of Sanjo (official site). Opened 16 March 2023; renovated by September 2025 (Tabelog; September 2025 review).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi-Sanjo, near Kiyamachi',
    cuisine: 'Italian bar and charcoal-grill meat with cheap wine — bottles from ¥2,500 (official site) · smoked broccoli ¥600; teppan potato salad ¥700; truffle egg ¥500; mackerel rillettes ¥700; pâté de campagne ¥950; COVO salad ¥900; homemade sausage ¥1,000; ajillo from ¥980; clay-pot risotto ¥1,500; grilled meat from ¥2,500 (official site) · Caesar salad with thick bacon and a fried egg; prosciutto platter ¥1,600; gorgonzola ¥800; wagyu shank braised in red wine ¥2,200; squid-ink fettuccine with prawn and scallop ¥1,800; glass of red ¥650; sangria ¥600 (2025–2026) · course with two hours of free drinks ¥6,600 (January 2026)',
    website: SITE, gmaps: gm('イタリアン酒場 COVO 京都'), menu_url: SITE + 'menu.html',
    notes: "[Italian bar · Kawaramachi-Sanjo lane, cheap wine from 4 pm] A lively back-lane Italian bar near Sanjo opening at 4 pm: smoked broccoli, Caesar salad with a fried egg, red-wine-braised wagyu shank and clay-pot risotto, with bottles from ¥2,500. Counter upstairs, tables below; closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Not named'], origin: null,
      background: 'Opened in March 2023 (Tabelog), run by 株式会社COVO, registered at the shop’s address (NTA invoice register). Reviewers (2025–2026) describe a friendly kitchen team and a regular crowd; handy before shows at ROHM Theatre.',
      philosophy: 'A place to drink with friends and leave cheerful, with a reasonable bill (official site).',
      specialty: 'Italian bar plates; charcoal-grilled meat.',
      anecdotes: [
        { text: 'A July 2026 regular always orders the Caesar salad, ajillo, prosciutto and carpaccio.', source: R + 'B501930284/' },
        { text: 'A January 2026 group of thirteen had the ¥6,600 free-drink course and were surprised by the smoked broccoli.', source: R + 'B521439538/' },
        { text: 'An April 2026 pre-concert stop for one drink turned into red-wine-braised wagyu shank.', source: R + 'B526348528/' },
      ],
      japanese_sources_summary: '公式サイト: イタリアン酒場 COVO (コーヴォ)、京都三条・木屋町近くのイタリアンバル、1階はカウンター、半地下はテーブル席、路地裏の隠れ家の肉バル、ボトルワイン2,500円から、16:00〜24:00 (L.O.23:00)、京都市中京区恵比須町534-33 エアポートビル1階西側B号室、ブロッコリーの燻製600円、鉄板焼きポテトサラダ700円、自家製ピクルス500円、トリュフ卵500円、鯖のリエット700円、パテドカンパーニュ950円、ブルスケッタ600円、スモークサーモン800円、COVOサラダ900円、自家製ソーセージ1,000円、アヒージョ980円から、土鍋リゾット1,500円、炭焼きの肉2,500円から。食べログ: 月・水〜日 16:00〜24:00 (料理L.O.23:00、ドリンクL.O.23:45)、火曜定休、カード (銀聯も)・電子マネー可、チャージなし、32席 (カウンター12、テーブル)、カウンターは加熱式たばこ可・テーブルは禁煙、貸切20〜32名、2023年3月16日オープン、インボイス T3130001076602 (株式会社COVO)。口コミ (2025〜2026年、英語): シーザーサラダ、生ハムの盛り合わせ1,600円、ゴルゴンゾーラ800円、和牛すね肉の赤ワイン煮2,200円、イカ墨フェットチーネ1,800円、グラスワイン650円、サングリア600円、飲み放題2時間付きコース6,600円、16時から開いてロームシアターの前に便利。',
      confidence: 'medium', sources: [SITE, SITE + 'menu.html', TB, R + 'B501930284/', R + 'B514219255/', R + 'B515846895/', R + 'B521439538/', R + 'B526321060/', R + 'B526348528/', R + 'B526586213/', 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=3130001076602'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter allows heated tobacco; tables non-smoking.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区恵比須町534-33 エアポートビル 1F B',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.009392, 135.769425), offset ~10m west to clear kyoto_the_cellar_kyoto (1.3m), kyoto_sauna_izakaya_sanjo (4.2m) and kyoto_poisson_dor_sanjo (5.2m) in the same block; cross-checked: GSI 京都府京都市中京区恵比須町534番地 (lot) 28m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE + 'menu.html', R + 'B526348528/'],
    price_note: 'Prices from the official site menu (November 2026) and 2025–2026 reviews.', last_checked: TODAY, items: [
      it('ブロッコリーの燻製', '', 'Smoked broccoli', '¥600', 'Small plates', 'ask', 'ask', '', 'broccoli'),
      it('鉄板焼きポテトサラダ', '', 'Teppan potato salad', '¥700', 'Small plates', 'ask', 'no', '', 'potato'),
      it('パテドカンパーニュ', '', 'Pâté de campagne', '¥950', 'Small plates', 'ask', 'no', '', 'pate'),
      it('土鍋リゾット', '', 'Clay-pot risotto', '¥1,500', 'Mains', 'ask', 'no', '', 'risotto'),
      it('', '', 'Wagyu shank braised in red wine', '¥2,200', 'Mains', 'ask', 'no', 'April 2026.', 'shank'),
    ] }, {
    cuisine: '炭焼きの肉と手ごろなワインのイタリアンバル。ボトルは2,500円から (公式サイト)・ブロッコリーの燻製600円、鉄板焼きポテトサラダ700円、トリュフ卵500円、鯖のリエット700円、パテドカンパーニュ950円、COVOサラダ900円、自家製ソーセージ1,000円、アヒージョ980円から、土鍋リゾット1,500円、炭焼きの肉2,500円から (公式サイト)・ベーコンと半熟卵のシーザーサラダ、生ハムの盛り合わせ1,600円、ゴルゴンゾーラ800円、和牛すね肉の赤ワイン煮2,200円、海老とホタテのイカ墨フェットチーネ1,800円、グラスワイン650円、サングリア600円 (2025〜2026年)・2時間飲み放題付きのコース6,600円 (2026年1月)',
    neighborhood: '河原町三条、木屋町の近く',
    gf_detail: '要確認。パスタ、ブルスケッタ、揚げ物のほか、サラダ、チーズ、生ハム、炭焼きの肉。グルテンの情報は公開されていない (公式サイト、口コミ)。',
    vegan_detail: '要確認。ブロッコリーの燻製や自家製ピクルスはあるが、ほとんどの料理に肉、魚、チーズ、卵を使う (公式サイト、口コミ)。',
    notes: '[イタリアンバル・河原町三条の路地、16時から手ごろなワイン] 三条近くの路地裏のにぎやかなイタリアンバル。16時から、ブロッコリーの燻製、目玉焼きのシーザーサラダ、和牛すね肉の赤ワイン煮、土鍋リゾットに、ボトル2,500円からのワイン。1階カウンター、半地下テーブル、火曜休み。',
  });
}

save();
