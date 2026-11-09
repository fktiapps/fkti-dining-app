// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 96 (2026-11-08).
//   + Wine&Highball つちや Wine & Highball Tsuchiya (bar with home cooking, by Gojo Stn; rest)
//   + おばん菜いち好 Obanzai Ichiyoshi (suppon, game and obanzai counter, Aburakoji-Shijo; rest)
//   + コーヒーテンイシハラ Coffee Ten Ishihara (old-fashioned machiya kissa near Matsubara; rest)
//   + 京 笑びす家 Kyo Ebisuya (tuna rice bowls, Ebisugawa-Takakura; rest)
//   Rest list (mod 6 = 1) after batch 95, nearest-first — skipped:
//   - 関東屋 26014879: no review dated 2025–26 (latest March 2021); a miso shop.
//   - 寿司一品 和奏 26044879: thin listing (2 reviews).
//   - 石野味噌 26028511: thin listing (3 reviews).
//   - 寺小屋本舗 清水店 26038213: large parent — 寺子屋本舗 is a brand of 株式会社寺子屋 (as ruled for 26037502, 26007071).
//   - カフェ＆バー エディション アート＆デザインファーム 26031235: thin listing (2 reviews).
//   Brand check: queue-status.jsonl, than.co.jp/brands and the WILL brands checked — none matches. None of the four is in data
//   (main 3844163f, hidden records included).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-96');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260202/26014879/', 'no review dated 2025–26 (latest March 2021): 関東屋, a miso shop');
skip('https://tabelog.com/en/kyoto/A2601/A260301/26044879/', 'thin listing: 2 reviews');
skip('https://tabelog.com/en/kyoto/A2601/A260101/26028511/', 'thin listing: 3 reviews');
skip('https://tabelog.com/en/kyoto/A2601/A260301/26038213/', 'large parent: 寺子屋本舗 is a brand of 株式会社寺子屋 (140 directly run shops), as ruled for 26037502 and 26007071');
skip('https://tabelog.com/en/kyoto/A2601/A260302/26031235/', 'thin listing: 2 reviews');

// ================================================================ Wine&Highball つちや
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26026285/'; const R = TB + 'dtlrvwlst/';
  const H = day(['19:00', '25:00']);
  put({
    id: 'kyoto_wine_highball_tsuchiya', name: 'Wine&Highball つちや (Wine & Highball Tsuchiya)', category: 'OMNI',
    lat: 34.99417248787618, lng: 135.75907245025354, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A bar of wine, whisky and sherry; home-cooked food such as omurice, a burger and a cream-cheese pâté is not described for gluten (2024–2025 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Drinks-led; the vegetable jelly may suit, but most food includes egg, meat or cheese (2024–2025 reviews).',
    hours_raw: 'Tuesday–Saturday 19:00–1:00 (last order 0:30); Monday 19:00–1:00, drinks only (no food); closed Sunday and one Monday a month, so Monday is left out of the hours (Tabelog). Reservations accepted (Tabelog). Cover charge ¥300 (Tabelog original チャージ料 ￥300-). Cards (VISA, Master, JCB, AMEX, Diners) (Tabelog). 14 seats: 6 at the counter, 8 at tables; non-smoking, with a smoking area outside; wheelchair access (Tabelog). A wood-lined, café-like room on a quiet residential street, 1 min walk from Gojo Stn exit 8 (Tabelog; February 2019).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gojo-Karasuma, Suwa-cho',
    cuisine: 'Relaxed bar of wine, rare whiskies, sherry and highballs, with home-cooked food (2016–2025 reviews) · highballs made with a whisky chosen from many — including aged Japanese whiskies; sherry singled out (August 2024; October 2025) · omurice ¥1,100, all food homemade (September 2024); vegetable jelly, cream-cheese pâté and a burger with egg and beef patty (December 2025) · wasanbon sweets as the starter (August 2024) · about ¥3,000–5,000 (Tabelog; 2024–2025 reviews)',
    website: null, gmaps: gm('Wine&Highball つちや 五条'), menu_url: null,
    notes: '[Bar · by Gojo Stn, late] A calm, wood-lined bar near Gojo station with a big range of wines, rare whiskies and sherry, and real home cooking — omurice, burgers, pâté — until late. ¥300 cover. Closed Sunday; Mondays drinks only.',
    chef_bio: { chef_name: null, roles: ['Master (bar)', 'Madam (kitchen)'], origin: null,
      background: 'Per reviewers: a bar where the master, deeply passionate about drinks, picks whiskies and wines to suit (February 2019; August 2024), and the madam makes all the food by hand (September 2024); it also hosts small concerts (December 2025).',
      philosophy: null, specialty: 'Highballs; homemade omurice.',
      anecdotes: [
        { text: 'A hungry September 2024 regular phoned before 11 p.m. to check the omurice was still on, then paired it with a stronger whisky highball.', source: R + 'B465137887/' },
        { text: 'A February 2019 first-timer, worried on a dark residential street, spotted the bright sign and found a welcoming wooden room.', source: R + 'B411637096/' },
        { text: 'A December 2025 guest came for a mini concert and enjoyed vegetable jelly, pâté and a hearty burger.', source: R + 'B518482190/' },
      ],
      japanese_sources_summary: '食べログ: バー・ワインバー、下京区諏訪町通六条上ル上柳町220-5、五条駅8番出口から徒歩1分、火〜土 19:00〜25:00 (L.O.24:30)、月 19:00〜25:00 (飲み物のみ)、日曜と月に1回の月曜休み、予約可、チャージ料 ￥300-、カード (VISA・Master・JCB・AMEX・Diners) 可、14席 (カウンター6、テーブル8)、禁煙 (店外に喫煙所)、車いす可。口コミ (2016年3月〜2025年12月、英語): 木の落ち着いた店内、ワイン、珍しいウイスキー、シェリー、ハイボール、お酒への情熱の深いマスター、料理はすべてマダムの手作り (オムライス1,100円、野菜のゼリー、クリームチーズのパテ、卵と牛肉のパティのバーガー)、お通しに和三盆、ミニコンサート (2025年12月)。',
      confidence: 'low', sources: [TB, R + 'B142366810/', R + 'B411637096/', R + 'B465137887/', R + 'B490418574/', R + 'B509348325/', R + 'B515942758/', R + 'B518482190/'] },
    cultural_comfort: { level: 'konnichiwa', note: '¥300 cover; Mondays drinks only; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区諏訪町通六条上ル上柳町220-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through December 2025.' },
    pin_source: `Tabelog ${TB} (34.994172, 135.759072); cross-checked: GSI 京都府京都市下京区上柳町220番地 (lot) 10 m; nearest existing record 76.7 m (kyoto_new_taiho); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B465137887/'],
    price_note: 'Price from a September 2024 review.', last_checked: TODAY, items: [
      it('', '', 'Omurice', '¥1,100', 'Food', 'ask', 'no', 'September 2024.', 'omurice'),
      it('', '', 'Highball (whisky of your choice)', '', 'Drinks', 'ask', 'ask', 'August–September 2024.', 'highball'),
    ] }, {
    cuisine: 'ワイン、珍しいウイスキー、シェリー、ハイボールと手作りの料理のくつろげるバー (2016〜2025年の口コミ)・多くの中から選ぶウイスキーのハイボール (熟成の国産ウイスキーも)、シェリー (2024年8月、2025年10月)・すべて手作りの料理、オムライス1,100円 (2024年9月)、野菜のゼリー、クリームチーズのパテ、卵と牛肉のパティのバーガー (2025年12月)・お通しは和三盆 (2024年8月)・3,000〜5,000円ほど (食べログ、2024〜2025年の口コミ)',
    neighborhood: '五条烏丸、諏訪町',
    gf_detail: '要確認。ワイン、ウイスキー、シェリーのバー。オムライス、バーガー、パテなどの手作りの料理にグルテンの説明はない (2024〜2025年の口コミ)。',
    vegan_detail: '要確認。お酒が中心。野菜のゼリーは合う可能性があるが、料理の多くは卵、肉、チーズ (2024〜2025年の口コミ)。',
    notes: '[バー・五条駅すぐ、深夜まで] 五条駅近くの木の落ち着いたバー。ワイン、珍しいウイスキー、シェリーが豊富で、オムライスやバーガー、パテなど本物の手料理も深夜まで。チャージ300円。日曜休み、月曜は飲み物のみ。',
  });
}

// ================================================================ おばん菜いち好 Obanzai Ichiyoshi
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26023189/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_obanzai_ichiyoshi', name: 'おばん菜いち好 (Obanzai Ichiyoshi)', category: 'OMNI',
    lat: 35.00419433786812, lng: 135.7537825603585, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi and hamo yubiki may suit, but suppon and botan nabe broths, nuta and obanzai use soy, and tempura is battered (2021–2026 reviews). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: soft-shell turtle, wild boar, fish and dashi-based obanzai (2021–2026 reviews).',
    hours_raw: 'Thursday–Tuesday 17:00–24:00; Wednesday closed but open by reservation (Tabelog). Reservations accepted (Tabelog). No service charge (Tabelog original なし). Cash only — no cards (Tabelog). 10 counter seats; smoking allowed (Tabelog). Just north of Shijo on Aburakoji-dori; 7 min walk from Shijo/Karasuma or Omiya Stn (Tabelog; March 2024).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Aburakoji-Shijo',
    cuisine: 'Ten-seat counter of obanzai and seasonal fish, known for suppon (soft-shell turtle) and game (2021–2026 reviews) · suppon nabe; botan nabe of wild boar (December 2023–July 2026) · lavish appetiser trio; sashimi of octopus, scallop, hamo, white squid and Kyoto beef; hamo yubiki; scallop nuta; corn tempura; fried chestnuts and ginkgo; prosciutto and fig (September 2022–July 2026) · seasonal hamo, bamboo shoots, eel sashimi (July 2024; May 2026) · about ¥3,000–8,000 (Tabelog; 2023–2026 reviews)',
    website: null, gmaps: gm('おばん菜いち好 油小路'), menu_url: null,
    notes: '[Obanzai and suppon · Aburakoji-Shijo, cash only] A small counter where a ryotei-trained chef serves generous appetisers, seasonal sashimi and hamo, and rich suppon or wild-boar hot pots, with sake and shochu. Smoking allowed. Wednesdays by booking only.',
    chef_bio: { chef_name: 'Ichinose', roles: ['Owner-chef'], origin: null,
      background: 'Per reviewers: chef Ichinose trained at a well-known restaurant in Arashiyama and served as head chef in Gion before running this counter (September 2022); a dog-loving, charming host (March–July 2024) whose suppon draws first-timers (March 2024; May 2026).',
      philosophy: null, specialty: 'Suppon nabe; obanzai.',
      anecdotes: [
        { text: 'A September 2022 visitor flown in from Iwate could not have the nabe that night, so chef Ichinose sent the guest off with a glass of habu sake.', source: R + 'B455481425/' },
        { text: 'A March 2024 solo diner, whose friends shied away from turtle, finally tried suppon nabe here and recommends it for first-timers.', source: R + 'B481579464/' },
        { text: 'A July 2024 visitor found the hamo sold out and got eel sashimi instead.', source: R + 'B488859784/' },
      ],
      japanese_sources_summary: '食べログ: すっぽん・日本料理・居酒屋、京都市油小路四条上ル藤本町555-3、四条駅・烏丸駅や大宮駅から徒歩7分、木〜火 17:00〜24:00、水曜休み (予約で営業)、予約可、サービス料なし、カード不可、カウンター10席、喫煙可。口コミ (2021年11月〜2026年7月、英語): 嵐山の名店で修業し祇園で料理長を務めた Ichinose さん (2022年9月)、すっぽん鍋、ぼたん鍋 (いのしし)、豪華なお通し3品、たこ・帆立・鱧・白いか・京都牛の刺身、鱧の湯引き、帆立のぬた、とうもろこしの天ぷら、栗と銀杏の揚げ物、生ハムといちじく、筍、うなぎの刺身、犬好きの店主。',
      confidence: 'medium', sources: [TB, R + 'B449627278/', R + 'B455481425/', R + 'B477274574/', R + 'B477714193/', R + 'B481579464/', R + 'B482574815/', R + 'B488859784/', R + 'B491261249/', R + 'B510132762/', R + 'B532109256/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; ten counter seats; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市油小路四条上ル藤本町555-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through July 2026.' },
    pin_source: `Tabelog ${TB} (35.004194, 135.753783); Tabelog omits the ward; GSI 京都府京都市中京区藤本町555番地 (lot) 26.6 m; nearest existing record 69.7 m (kyoto_yakiniku_daisuke); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B481579464/'],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Suppon nabe (soft-shell turtle hot pot)', '', 'Hot pot', 'ask', 'no', 'March 2024; May 2026.', 'suppon'),
      it('', '', 'Botan nabe (wild boar hot pot)', '', 'Hot pot', 'ask', 'no', 'January 2024.', 'botan'),
    ] }, {
    cuisine: 'すっぽんとジビエで知られるおばんざいと旬の魚のカウンター10席 (2021〜2026年の口コミ)・すっぽん鍋、いのししのぼたん鍋 (2023年12月〜2026年7月)・豪華なお通し3品、たこ・帆立・鱧・白いか・京都牛の刺身、鱧の湯引き、帆立のぬた、とうもろこしの天ぷら、栗と銀杏の揚げ物、生ハムといちじく (2022年9月〜2026年7月)・旬の鱧、筍、うなぎの刺身 (2024年7月、2026年5月)・3,000〜8,000円ほど (食べログ、2023〜2026年の口コミ)',
    neighborhood: '油小路四条',
    gf_detail: '要確認。刺身や鱧の湯引きは合う可能性があるが、すっぽんやぼたん鍋のだし、ぬた、おばんざいは醤油、天ぷらは衣 (2021〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。すっぽん、いのしし、魚、だしのおばんざい (2021〜2026年の口コミ)。',
    notes: '[おばんざいとすっぽん・油小路四条、現金のみ] 料亭で修業した料理人の小さなカウンター。たっぷりのお通し、旬の刺身と鱧、濃厚なすっぽん鍋やぼたん鍋を日本酒や焼酎と。喫煙可。水曜は予約のみ。',
  });
}

// ================================================================ コーヒーテンイシハラ Coffee Ten Ishihara
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26023795/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '16:00']);
  put({
    id: 'kyoto_coffee_ten_ishihara', name: 'コーヒーテンイシハラ (Coffee Ten Ishihara)', category: 'OMNI',
    lat: 34.99880994787181, lng: 135.75460618030354, cuisine_type: 'kissaten',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF for food: toast and sandwiches; coffee itself is fine (2016–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee is plant-based; lattes, café au lait and cheese toast use dairy (2016–2026 reviews).',
    hours_raw: 'Thursday–Monday 11:00–16:00; closed Tuesday and Wednesday; hours may change (Tabelog). No reservations (Tabelog). Cash only — no cards or e-money (Tabelog). 20 seats: a counter of about seven and three tables of four; non-smoking (Tabelog; February 2023). An unassuming machiya near the Matsubara shopping street, easy to miss (July 2016; September 2019). About 15 min walk from Gojo Stn.',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Matsubara shopping street area',
    cuisine: 'Old-style neighbourhood kissa in a machiya, with coffee brewed carefully by the master (2016–2026 reviews) · blend coffee (¥300 in 2018, ¥500 in January 2026); iced café latte ¥380; café au lait ¥450 (2018–2026 reviews) · butter toast, cheese toast and sandwiches (2016–2022 reviews) · under ¥1,000 (Tabelog)',
    website: null, gmaps: gm('コーヒーテンイシハラ'), menu_url: null,
    notes: '[Kissa · near Matsubara shopping street, cash only] A quiet, nostalgic machiya coffee shop with blue chairs, where regulars just say “please” and the master brews each cup — with butter or cheese toast for a slow break. Closed Tuesday and Wednesday.',
    chef_bio: { chef_name: null, roles: ['Master (unnamed)'], origin: null,
      background: 'Per reviewers: a long-standing local kissa in a townhouse, where the master brews each coffee with care and regulars from the neighbourhood come in the mornings (2016–2026 reviews).',
      philosophy: null, specialty: 'Blend coffee; toast.',
      anecdotes: [
        { text: 'An April 2022 visitor watched regulars order by just saying “please”, and remembered being bored at a café like this as a child.', source: R + 'B448555657/' },
        { text: 'A January 2024 guest loved the café au lait and the blue chairs.', source: R + 'B478173313/' },
        { text: 'A January 2026 visitor with time to spare found a nostalgic yet clean, dignified room for a ¥500 blend.', source: R + 'B521966805/' },
      ],
      japanese_sources_summary: '食べログ: 喫茶店、下京区天神前町341、五条駅から徒歩15分、木〜月 11:00〜16:00、火・水休み、予約不可、カード・電子マネー不可、20席 (カウンター、4人掛け3卓)、禁煙。口コミ (2016年7月〜2026年1月、英語): 松原商店街の近くの町家の喫茶店、マスターのていねいなコーヒー、ブレンド (2018年300円、2026年1月500円)、アイスカフェラテ380円、カフェオレ450円、バタートースト、チーズトースト、サンドイッチ、青い椅子、常連の多い落ち着いた店。',
      confidence: 'low', sources: [TB, R + 'B214768689/', R + 'B324124307/', R + 'B419581087/', R + 'B429367714/', R + 'B439917991/', R + 'B448555657/', R + 'B460366628/', R + 'B469049806/', R + 'B478173313/', R + 'B521966805/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; quiet local kissa.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区天神前町341',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; latest review January 2026.' },
    pin_source: `Tabelog ${TB} (34.998810, 135.754606); cross-checked: GSI 京都府京都市下京区天神前町341番地 (lot) 24 m; nearest existing record 13.7 m (kyoto_kappou_kita_tenmusu); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B521966805/', R + 'B478173313/'],
    price_note: 'Prices from January 2024 and January 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Blend coffee', '¥500', 'Coffee', 'ask', 'vegan', 'January 2026.', 'blend'),
      it('', '', 'Café au lait', '¥450', 'Coffee', 'ask', 'no', 'January 2024.', 'aulait'),
    ] }, {
    cuisine: 'マスターがていねいにいれる町家の昔ながらの喫茶店 (2016〜2026年の口コミ)・ブレンド (2018年300円、2026年1月500円)、アイスカフェラテ380円、カフェオレ450円 (2018〜2026年の口コミ)・バタートースト、チーズトースト、サンドイッチ (2016〜2022年の口コミ)・1,000円未満 (食べログ)',
    neighborhood: '松原商店街のあたり',
    gf_detail: '料理はグルテンフリー不可。トーストとサンドイッチ。コーヒーは問題なし (2016〜2026年の口コミ)。',
    vegan_detail: '要確認。ブラックコーヒーは植物性。ラテ、カフェオレ、チーズトーストは乳製品 (2016〜2026年の口コミ)。',
    notes: '[喫茶店・松原商店街の近く、現金のみ] 青い椅子の静かで懐かしい町家の喫茶店。常連は「お願いします」でマスターがいれる一杯、バタートーストやチーズトーストでのんびり。火・水休み。',
  });
}

// ================================================================ 京 笑びす家 Kyo Ebisuya
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26033371/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '18:00']);
  put({
    id: 'kyoto_kyo_ebisuya_maguro', name: '京 笑びす家 (Kyo Ebisuya)', category: 'OMNI',
    lat: 35.01483951786401, lng: 135.76211957046016, cuisine_type: 'donburi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tuna on vinegared rice may suit, but the marinade and special sauce likely use soy; curry udon is wheat (2023–2026 reviews). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tuna rice bowls (2023–2026 reviews).',
    hours_raw: 'Thursday–Tuesday 11:00–18:00; closed Wednesday; hours may change (Tabelog). No reservations (Tabelog). Cash only — no cards, e-money or QR (Tabelog). Counter seats; calm room, good for solo lunch (January 2023; July 2026). Ebisugawa-dori near Takakura, next to a crêperie; 4 min walk from Marutamachi Stn.',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Ebisugawa-Takakura, Goshominami',
    cuisine: 'Tuna rice-bowl specialist using tuna sent direct from Shimizu port (April 2026) · tuna bowl in three styles — negitoro, marinated akami, or a two-kind platter of akami and bintoro (May 2026); regular ¥1,100 (January 2023); large tuna-bowl set ¥1,800 (January 2025) · negitoro bowl set with kasu-jiru ¥1,400 (January 2025); set with curry udon (March 2025) · vinegared rice with a small side such as pumpkin salad (October 2024) · about ¥1,000–2,000 (Tabelog)',
    website: null, gmaps: gm('京 笑びす家 夷川'), menu_url: null,
    notes: '[Tuna bowls · Ebisugawa-Takakura, cash only] A calm little counter for tuna donburi with fish from Shimizu port: marinated akami, fatty bintoro or negitoro on vinegared rice, with kasu-jiru or curry udon sets. Great value for a solo lunch. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per reviewers: a small tuna-bowl shop on Ebisugawa-dori, using tuna sent direct from Shimizu port (April 2026), with regulars returning year after year for the same bowl (October 2024; July 2025).',
      philosophy: null, specialty: 'Tuna rice bowl.',
      anecdotes: [
        { text: 'An October 2024 regular returned a year later and ordered the same bowl again, this time with a pumpkin salad on the side.', source: R + 'B472740177/' },
        { text: 'A July 2025 diner came back after a first visit with a friend in April, hooked on how gently the tuna pairs with the vinegared rice.', source: R + 'B510227991/' },
        { text: 'A January 2023 diner went half-and-half with bintoro to keep the bowl from being one-note.', source: R + 'B457450388/' },
      ],
      japanese_sources_summary: '食べログ: 海鮮丼・食堂、中京区山中町552、丸太町駅から301m、木〜火 11:00〜18:00、水曜休み、予約不可、カード・電子マネー・QR 不可。口コミ (2022年12月〜2026年7月、英語): 清水港から直送のまぐろ (2026年4月)、ねぎとろ・漬けの赤身・赤身とびんとろの2種盛りのまぐろ丼、並1,100円 (2023年1月)、大盛りのまぐろ丼セット1,800円 (2025年1月)、粕汁付きのねぎとろ丼セット1,400円、カレーうどんのセット、酢飯、小鉢 (かぼちゃのサラダ)、カウンター、一人でも落ち着く。',
      confidence: 'medium', sources: [TB, R + 'B430629810/', R + 'B457450388/', R + 'B459582171/', R + 'B472740177/', R + 'B499099331/', R + 'B504991197/', R + 'B510227991/', R + 'B526662798/', R + 'B530121807/', R + 'B532756966/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; counter; no reservations.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区山中町552',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through July 2026.' },
    pin_source: `Tabelog ${TB} (35.014840, 135.762120); cross-checked: GSI 京都府京都市中京区山中町552番地 (lot) 10 m; nearest existing record 20.5 m (kyoto_neuf_creperie); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B499099331/', R + 'B430629810/'],
    price_note: 'Prices from January 2023 and January 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tuna rice bowl set (large)', '¥1,800', 'Bowls', 'ask', 'no', 'January 2025.', 'maguro_l'),
      it('', '', 'Negitoro bowl set with kasu-jiru', '¥1,400', 'Bowls', 'ask', 'no', 'January 2025.', 'negitoro'),
      it('', '', 'Tuna rice bowl (regular)', '¥1,100', 'Bowls', 'ask', 'no', 'January 2023.', 'maguro'),
    ] }, {
    cuisine: '清水港直送のまぐろの丼の専門店 (2026年4月)・ねぎとろ、漬けの赤身、赤身とびんとろの2種盛りの3種のまぐろ丼 (2026年5月)、並1,100円 (2023年1月)、大盛りのまぐろ丼セット1,800円 (2025年1月)・粕汁付きのねぎとろ丼セット1,400円 (2025年1月)、カレーうどんのセット (2025年3月)・酢飯に小鉢 (かぼちゃのサラダなど) (2024年10月)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '夷川高倉、御所南',
    gf_detail: '要確認。酢飯のまぐろは合う可能性があるが、漬けや特製のたれは醤油、カレーうどんは小麦 (2023〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。まぐろの丼 (2023〜2026年の口コミ)。',
    notes: '[まぐろ丼・夷川高倉、現金のみ] 清水港のまぐろの丼の落ち着いた小さなカウンター。漬けの赤身、脂ののったびんとろ、ねぎとろを酢飯にのせ、粕汁やカレーうどんのセットも。一人の昼にお得。水曜休み。',
  });
}

save();
