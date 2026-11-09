// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 98 (2026-11-08).
//   + トラットリ アカーサ ヴェルデ Trattoria Casa Verde (couple-run neighbourhood trattoria, Ryogaemachi-Nijo; rest)
//   + 多加田 Takada (back-alley obanzai izakaya, Shijo-Horikawa; rest)
//   + 酒菜 楽林 Shusai Rakurin (couple-run counter of seasonal cooking and Kyoto sake, Matsubara-Aburakoji; rest)
//   + 京都清水わらび餅 monna (warabi-mochi shop with a terrace, Gojozaka; rest)
//   + BAR&IZAKAYA 室町二條 みのや Minoya (Shinshu soba and sake in a 100-year machiya, Muromachi-Nijo; rest)
//   Rest list (mod 6 = 1) after batch 97, nearest-first — skipped:
//   - 天ぷら割烹矢野 26041567: thin listing (4 reviews).
//   - Wagyu teppanyaki steak house Kiyomizu 創 SOU 26041807: thin listing (1 review).
//   Held for next batch (fetched): 個室焼肉 萬 26037961.
//   Brand check: queue-status.jsonl, than.co.jp/brands and the WILL brands checked — none matches. None of the five is in
//   data (main 8423376d, hidden records included).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-98');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260101/26041567/', 'thin listing: 4 reviews');
skip('https://tabelog.com/en/kyoto/A2601/A260301/26041807/', 'thin listing: 1 review');

// ================================================================ トラットリ アカーサ ヴェルデ Trattoria Casa Verde
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26022685/'; const R = TB + 'dtlrvwlst/';
  const F = day(['12:00', '14:00'], ['18:00', '21:00']); const W = day(['12:00', '14:00']);
  put({
    id: 'kyoto_trattoria_casa_verde', name: 'トラットリ アカーサ ヴェルデ (Trattoria Casa Verde)', category: 'OMNI',
    lat: 35.01354802786377, lng: 135.75875604044947, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF for most dishes: pasta, pizza, doria and gratin (2018–2026 reviews). Grilled buri kama may suit — ask.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Vegetable-rich soups and pizzas appear, but cheese, meat and fish feature widely (2022–2026 reviews).',
    hours_raw: 'Monday, Tuesday and Thursday–Saturday 12:00–14:00 and 18:00–21:00; Wednesday lunch only; closed Sunday; hours may change (Tabelog). Reservations accepted (Tabelog). Cash only — no cards, e-money or QR (Tabelog). 21 seats: a 5-seat counter and four tables of four; non-smoking (Tabelog). Busy with office workers at noon (November 2018). Corner of Nijo and Ryogaemachi; about 5 min walk from Karasuma-Oike Stn (Tabelog; July 2015).',
    hours: { 0: F, 1: F, 2: W, 3: F, 4: F, 5: F }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Ryogaemachi-Nijo',
    cuisine: 'Long-loved, couple-run neighbourhood trattoria with a Showa-retro feel (2019–2026 reviews) · lunch sets: pasta ¥1,200 (January 2024); curry doria ¥980 with salad and minestrone (November 2018); meat doria with minestrone (May 2025) · prosciutto pizza, cheese pizza, gratin, vegetable-packed soup and pizza, spring cabbage and shirasu peperoncino (November 2022–September 2026) · grilled buri kama and good desserts (September 2026) · lunch about ¥1,000–2,000 (2018–2025 reviews)',
    website: null, gmaps: gm('トラットリ アカーサ ヴェルデ 二条'), menu_url: null,
    notes: '[Trattoria · Ryogaemachi-Nijo, cash only] A cosy, old-school neighbourhood Italian run by a husband and wife for years: good-value pasta and doria lunch sets with minestrone, and evening pizzas, gratin, grilled buri kama and homemade desserts. Closed Sunday; Wednesday lunch only.',
    chef_bio: { chef_name: null, roles: ['Owners (a married couple, unnamed)'], origin: null,
      background: 'Per reviewers: a family-run trattoria loved by the neighbourhood for many years, run by a husband and wife (January 2024), with a nostalgic Showa-era atmosphere (September 2019).',
      philosophy: null, specialty: 'Doria lunch sets; pizza.',
      anecdotes: [
        { text: 'A September 2019 diner looking for a late Kyoto dinner found this retro trattoria still open after 9 p.m.', source: R + 'B419906217/' },
        { text: 'A May 2025 regular orders the usual meat doria with minestrone and a glass of wine at lunch.', source: R + 'B496127267/' },
        { text: 'A September 2026 regular finds it amazing every visit, from grilled buri kama to the desserts.', source: R + 'B537316361/' },
      ],
      japanese_sources_summary: '食べログ: イタリアン、中京区東玉屋町492 小西ビル 1F、烏丸御池駅から北へ2本目を西へ、月・火・木〜土 12:00〜14:00、18:00〜21:00、水 12:00〜14:00、日曜休み、予約可、カード・電子マネー・QR 不可、21席 (カウンター5、4人掛け4卓)、禁煙、貸切可。口コミ (2015年7月〜2026年9月、英語): 夫婦で営む長く愛される町のトラットリア、昭和レトロ、昼のパスタ1,200円、カレードリアのセット980円 (サラダとミネストローネ)、ミートドリア、生ハムのピザ、チーズのピザ、グラタン、野菜たっぷりのスープとピザ、春キャベツとしらすのペペロンチーノ、ぶりかまの焼き物、デザート、昼は会社員でにぎわう。',
      confidence: 'medium', sources: [TB, R + 'B115747475/', R + 'B197982432/', R + 'B400392699/', R + 'B419906217/', R + 'B456896747/', R + 'B478565022/', R + 'B479525579/', R + 'B496127267/', R + 'B537316361/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; busy at weekday noon.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区東玉屋町492 小西ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.013548, 135.758756); cross-checked: GSI 京都府京都市中京区東玉屋町492番地 (lot) 17 m; nearest existing record 16.7 m (kyoto_ottimo_ryogaemachi); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B478565022/', R + 'B400392699/'],
    price_note: 'Prices from November 2018 and January 2024 reviews.', last_checked: TODAY, items: [
      it('', '', 'Pasta lunch', '¥1,200', 'Lunch', 'no', 'ask', 'January 2024.', 'pasta'),
      it('', '', 'Curry doria set with salad and minestrone', '¥980', 'Lunch', 'no', 'no', 'November 2018; may have changed.', 'doria'),
    ] }, {
    cuisine: '夫婦で営む昭和レトロの長く愛される町のトラットリア (2019〜2026年の口コミ)・昼のセット: パスタ1,200円 (2024年1月)、サラダとミネストローネのカレードリア980円 (2018年11月)、ミートドリアとミネストローネ (2025年5月)・生ハムのピザ、チーズのピザ、グラタン、野菜たっぷりのスープとピザ、春キャベツとしらすのペペロンチーノ (2022年11月〜2026年9月)・ぶりかまの焼き物とおいしいデザート (2026年9月)・昼1,000〜2,000円ほど (2018〜2025年の口コミ)',
    neighborhood: '両替町二条',
    gf_detail: 'ほとんどグルテンフリー不可。パスタ、ピザ、ドリア、グラタン (2018〜2026年の口コミ)。ぶりかまの焼き物は合う可能性、要確認。',
    vegan_detail: '要確認。野菜たっぷりのスープやピザもあるが、チーズ、肉、魚が多い (2022〜2026年の口コミ)。',
    notes: '[トラットリア・両替町二条、現金のみ] 夫婦で長く営む居心地のよい昔ながらの町のイタリアン。ミネストローネ付きのお得なパスタやドリアの昼、夜はピザ、グラタン、ぶりかま、手作りのデザート。日曜休み、水曜は昼のみ。',
  });
}

// ================================================================ 多加田 Takada
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26010019/'; const R = TB + 'dtlrvwlst/';
  const A = day(['17:30', '22:00']); const B = day(['17:30', '23:00']);
  put({
    id: 'kyoto_takada_shijo_horikawa', name: '多加田 (Takada)', category: 'OMNI',
    lat: 35.00305510786858, lng: 135.75294869034755, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Grilled fish may suit, but simmered obanzai, dashimaki and sauces use soy dashi (2022–2026 reviews). No gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Vegetable obanzai such as simmered pumpkin appear, but are likely cooked in fish dashi; meat and fish dishes too (2024–2026 reviews).',
    hours_raw: 'Tuesday–Thursday and Sunday 17:30–22:00 (last order 21:30); Friday and Saturday 17:30–23:00 (last order 22:30); closed Monday and on two other days a month (not fixed) (Tabelog). Reservations advised — busy early (Tabelog; August 2024). Cards; no e-money (Tabelog). A long, narrow room with a counter at the back; non-smoking (Tabelog; January 2023). In an alley just east of Shijo-Horikawa, about 6 min walk from Hankyu Omiya (February 2024).',
    hours: { 1: A, 2: A, 3: A, 4: B, 5: B, 6: A }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Horikawa',
    cuisine: 'Homey Kyoto obanzai izakaya with a long, seasonal menu, popular with locals and visitors (2022–2026 reviews) · obanzai assortments of three or five, e.g. daikon with chicken tsukune and simmered pumpkin (March–October 2026) · gentle dashimaki, chicken wings, grilled buri kama, sashimi, seasonal Kyoto dishes (November 2022–October 2026) · about ¥4,000–5,000 (Tabelog; 2024–2026 reviews)',
    website: null, gmaps: gm('多加田 四条堀川 おばんざい'), menu_url: null,
    notes: '[Obanzai izakaya · Shijo-Horikawa] A cosy back-alley izakaya for real Kyoto home cooking: a platter of seasonal obanzai, gentle dashimaki, chicken wings and grilled buri kama, with kind staff who explain the dishes. Book. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per reviewers: a genuine obanzai izakaya tucked down an alley off Shijo-Horikawa, with a long seasonal menu and friendly staff who explain each dish, drawing both locals and overseas visitors (2022–2026 reviews).',
      philosophy: null, specialty: 'Obanzai platter; dashimaki.',
      anecdotes: [
        { text: 'A March 2026 first-time visitor to Kyoto had the staff explain each of five obanzai, from daikon with chicken tsukune to simmered pumpkin.', source: R + 'B525177092/' },
        { text: 'A June 2024 diner turned away from a fully booked restaurant wandered the backstreets and landed here.', source: R + 'B489783454/' },
        { text: 'A November 2024 Saturday visitor got a table at 8 p.m. with a quick phone call.', source: R + 'B495500076/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・日本料理、下京区醒ケ井通四条下る高野堂町404、大宮から358m、火〜木・日 17:30〜22:00 (L.O.21:30)、金・土 17:30〜23:00 (L.O.22:30)、月曜休み、月2回不定休、予約可、カード可、電子マネー不可、禁煙。口コミ (2022年11月〜2026年10月、英語): 四条堀川の路地の奥のおばんざいの居酒屋、季節で変わる豊富なメニュー、おばんざい3種や5種 (大根と鶏つくねの炊いたん、かぼちゃの煮物など)、やさしいだし巻き、手羽先、ぶりかまの焼き物、刺身、京の季節料理、親切なスタッフ、地元と海外の客。',
      confidence: 'medium', sources: [TB, R + 'B457095776/', R + 'B459711304/', R + 'B481033852/', R + 'B489783454/', R + 'B490757251/', R + 'B494970084/', R + 'B495500076/', R + 'B523371009/', R + 'B525177092/', R + 'B538587956/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book; staff explain the obanzai.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区醒ケ井通四条下る高野堂町404',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003055, 135.752949); cross-checked: GSI 京都府京都市下京区高野堂町404番地 (lot) 16 m; nearest existing record 52.6 m (kyoto_bungalow_shijo_horikawa); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525177092/'],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Obanzai assortment (5 kinds)', '', 'Obanzai', 'ask', 'ask', 'March 2026.', 'obanzai5'),
      it('', '', 'Dashimaki', '', 'Small dishes', 'ask', 'no', 'October 2026.', 'dashimaki'),
    ] }, {
    cuisine: '季節で変わる豊富なメニューの家庭的な京のおばんざいの居酒屋、地元と海外の客に人気 (2022〜2026年の口コミ)・3種や5種のおばんざい (大根と鶏つくねの炊いたん、かぼちゃの煮物など) (2026年3〜10月)・やさしいだし巻き、手羽先、ぶりかまの焼き物、刺身、京の季節料理 (2022年11月〜2026年10月)・4,000〜5,000円ほど (食べログ、2024〜2026年の口コミ)',
    neighborhood: '四条堀川',
    gf_detail: '要確認。焼き魚は合う可能性があるが、おばんざいの炊いたん、だし巻き、たれは醤油のだし (2022〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認。かぼちゃの煮物など野菜のおばんざいもあるが魚のだしの可能性、肉や魚の料理も (2024〜2026年の口コミ)。',
    notes: '[おばんざいの居酒屋・四条堀川] 路地の奥の居心地のよい居酒屋で本物の京の家庭料理。旬のおばんざいの盛り合わせ、やさしいだし巻き、手羽先、ぶりかま、料理を説明してくれる親切なスタッフ。予約を。月曜休み。',
  });
}

// ================================================================ 酒菜 楽林 Shusai Rakurin
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26037007/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '24:00']);
  put({
    id: 'kyoto_shusai_rakurin', name: '酒菜 楽林 (Shusai Rakurin)', category: 'OMNI',
    lat: 34.99890795787153, lng: 135.75394879030497, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi may suit, but simmered fish, saba sushi and obanzai use soy and dashi (2021–2026 reviews). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-led izakaya with dashi-based dishes (2021–2026 reviews).',
    hours_raw: 'Thursday–Tuesday 18:00–24:00 (last order 23:00); closed Wednesday (Tabelog). Reservations accepted (Tabelog). No cover charge (Tabelog original 無し). Cash only — no cards, e-money or QR (Tabelog). 15 seats: an 8-seat counter and tables for 4 and 3; tatami; non-smoking (Tabelog). Families with children welcome (February 2024). On Matsubara-dori east of Aburakoji, about 12 min walk from Gojo Stn (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Matsubara-Aburakoji',
    cuisine: 'Homey counter of seasonal Japanese cooking and Kyoto sake by a chef of 40 years’ experience (Tabelog) · daily specials of seasonal fish: five-kind sashimi, steamed white fish with daikon, sweet-spicy simmered sea bream head, saba sushi (December 2021–June 2024) · obanzai with Kyoto sake and rare shochu (Tabelog; April 2026) · about ¥4,000–6,000 (Tabelog; 2025–2026 reviews)',
    website: null, gmaps: gm('酒菜 楽林 松原'), menu_url: null,
    notes: '[Izakaya · Matsubara-Aburakoji, cash only] A warm little counter where a veteran chef cooks the day’s fish — sashimi, simmered sea bream, saba sushi — and the chef’s wife keeps the conversation going, with Kyoto sake and rare shochu. Late; closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)', 'Chef’s wife (front of house)'], origin: null,
      background: 'Per Tabelog and reviewers: authentic Japanese cooking by a chef with 40 years’ experience, served with Kyoto sake and rare shochu (Tabelog); the chef and the chef’s wife run the room with easy banter (September 2025), and an April 2026 reviewer describes a Michelin Bib Gourmand listing.',
      philosophy: null, specialty: 'Seasonal fish dishes; saba sushi.',
      anecdotes: [
        { text: 'A December 2021 passer-by saw opening-day flowers before the shop was even on Google Maps, and found excellent saba sushi late at night.', source: R + 'B448717154/' },
        { text: 'A shy February 2024 diner was put at ease by the friendly chef and owner, and plans to return with the family.', source: R + 'B480403624/' },
        { text: 'An April 2026 visitor found it quiet even in cherry-blossom season and enjoyed obanzai with sake.', source: R + 'B525636159/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・日本料理、下京区松原通油小路東入天神前町326、五条駅から徒歩12分ほど、木〜火 18:00〜24:00 (L.O.23:00)、水曜休み、予約可、チャージ無し、カード・電子マネー・QR 不可、15席 (カウンター8、4人と3人のテーブル)、座敷、禁煙、紹介文 (英訳): 料理人歴40年の料理人の本格的な日本料理、季節の日替わり、京の地酒と珍しい焼酎。口コミ (2021年12月〜2026年4月、英語): 鯖寿司、鯛のあら煮、白身魚と大根の蒸し物、刺身5種、店主と奥さんのかけ合い (2025年9月)、子ども連れも歓迎、ビブグルマンとの声 (2026年4月)。',
      confidence: 'medium', sources: [TB, R + 'B448717154/', R + 'B461718348/', R + 'B472591733/', R + 'B480403624/', R + 'B486333197/', R + 'B502407290/', R + 'B514488317/', R + 'B525636159/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; small counter; families welcome.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区松原通油小路東入天神前町326',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through April 2026.' },
    pin_source: `Tabelog ${TB} (34.998908, 135.753949); cross-checked: GSI 京都府京都市下京区天神前町326番地 (lot) 18 m; nearest existing record 50.4 m (kyoto_tateya_shimogyo); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B448717154/'],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Saba sushi', '', 'Fish', 'ask', 'no', 'December 2021.', 'sabazushi'),
      it('', '', 'Simmered sea bream head', '', 'Fish', 'ask', 'no', 'October 2023.', 'arani'),
    ] }, {
    cuisine: '料理人歴40年の料理人の季節の日本料理と京の地酒の家庭的なカウンター (食べログ)・旬の魚の日替わり: 刺身5種、白身魚と大根の蒸し物、甘辛い鯛のあら煮、鯖寿司 (2021年12月〜2024年6月)・おばんざいに京の地酒や珍しい焼酎 (食べログ、2026年4月)・4,000〜6,000円ほど (食べログ、2025〜2026年の口コミ)',
    neighborhood: '松原油小路',
    gf_detail: '要確認。刺身は合う可能性があるが、煮魚、鯖寿司、おばんざいは醤油とだし (2021〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。魚が中心でだしを使う居酒屋 (2021〜2026年の口コミ)。',
    notes: '[居酒屋・松原油小路、現金のみ] ベテランの料理人がその日の魚 (刺身、鯛のあら煮、鯖寿司) を料理し、奥さんとのかけ合いも楽しい温かな小さなカウンター。京の地酒と珍しい焼酎。夜遅くまで、水曜休み。',
  });
}

// ================================================================ 京都清水わらび餅 monna
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26038087/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://kyoto-monna.com/';
  const H = day(['12:00', '17:00']);
  put({
    id: 'kyoto_warabimochi_monna', name: '京都清水わらび餅 monna (Kyoto Kiyomizu Warabi Mochi Monna)', category: 'OMNI',
    lat: 34.994560337882774, lng: 135.7805626202424, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask — promising. Reviewers describe warabi mochi of 100% domestic warabi starch and wasanbon sugar, served with kinako and kuromitsu (August 2022; August 2025), but the shop’s own ingredient list was not checked.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask — promising. Warabi starch, wasanbon, kinako, kuromitsu and matcha are plant-based as described by reviewers; confirm with the shop.',
    hours_raw: 'Thursday–Tuesday 12:00–17:00; closed Wednesday; hours may change (Tabelog). No reservations (Tabelog). Cards and QR; no e-money (Tabelog). No indoor seating — sets are eaten on an outdoor terrace; also takeaway and delivery (2022–2026 reviews). In a quiet residential lane off Gojozaka, a few minutes from Kiyomizu-dera (August 2025; March 2026). Opened 23 July 2022 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gojozaka, below Kiyomizu-dera',
    cuisine: 'Warabi-mochi specialist by a maker trained at a well-known Gion warabi-mochi shop (August 2022) · warabi mochi of 100% domestic warabi starch and wasanbon, with kinako and kuromitsu; matcha warabi mochi; a 7-day chilled version for delivery (August–November 2022) · warabi mochi and matcha sets ¥1,000 on the terrace (March 2026) · summer kakigori in kuromitsu or bancha flavours (August–September 2025) · 12 pieces ¥1,500 to take away (August 2022) · about ¥1,000–2,000 (Tabelog)',
    website: WEB, gmaps: gm('京都清水わらび餅 monna'), menu_url: WEB,
    notes: '[Warabi mochi · Gojozaka, terrace] A hidden warabi-mochi shop in a quiet lane below Kiyomizu-dera: silky mochi of pure warabi starch with kinako and kuromitsu, matcha sets on the terrace, and summer shaved ice. Likely naturally GF and vegan — confirm. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Maker (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: a warabi-mochi shop opened 23 July 2022 by a maker trained at a well-known Gion warabi-mochi shop, making mochi by hand to suit the day’s temperature and humidity, including a version that keeps chilled for seven days (August–November 2022). A reviewer notes a Tabelog Top 100 Sweets WEST listing in 2022 (February 2023).',
      philosophy: 'Handmade in small batches with domestic ingredients (August 2022).', specialty: 'Warabi mochi.',
      anecdotes: [
        { text: 'An Osaka regular in September 2025 stops by on every Kyoto trip, and enjoyed this summer’s kakigori version.', source: R + 'B515030933/' },
        { text: 'An August 2025 visitor found no indoor seating, but a terrace that captures Kyoto’s mood.', source: R + 'B511217403/' },
        { text: 'A March 2026 pair braved the chill outside for warabi mochi and matcha sets, ¥1,000 each.', source: R + 'B524544237/' },
      ],
      japanese_sources_summary: '食べログ: 和菓子、東山区五条橋東6-538-25、清水五条駅から徒歩14分、木〜火 12:00〜17:00、水曜休み、予約不可、カード・QR 可、電子マネー不可、2022年7月23日開店、公式サイトあり。口コミ (2022年8月〜2026年8月、英語): 祇園の有名なわらび餅店で修業した作り手、国産の本わらび粉100%と和三盆、きなこと黒蜜、抹茶のわらび餅、冷蔵で7日もつわらび餅と配送、12個1,500円、テラスでわらび餅と抹茶のセット1,000円、夏のかき氷 (黒蜜、番茶)、店内での飲食はなくテラス席、住宅街の路地。',
      confidence: 'medium', sources: [TB, WEB, R + 'B452968744/', R + 'B457205917/', R + 'B457250528/', R + 'B460606773/', R + 'B511217403/', R + 'B511640084/', R + 'B515030933/', R + 'B524544237/', R + 'B525992674/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Terrace only, no indoor seating; cards and QR.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区五条橋東6-538-25',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews through August 2026.' },
    pin_source: `Tabelog ${TB} (34.994560, 135.780563); GSI 京都府京都市東山区五条橋東六丁目538番地 (lot) is 126 m off — a large lot block on the slope — so the Tabelog pin is kept; nearest existing record 143.3 m (kyoto_cafe_goryukaku); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524544237/', R + 'B452968744/'],
    price_note: 'Prices from August 2022 and March 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Warabi mochi and matcha set', '¥1,000', 'Sets', 'ask', 'ask', 'March 2026.', 'set'),
      it('', '', 'Warabi mochi, 12 pieces (takeaway)', '¥1,500', 'Takeaway', 'ask', 'ask', 'August 2022.', 'box'),
    ] }, {
    cuisine: '祇園の有名店で修業した作り手のわらび餅の専門店 (2022年8月)・国産の本わらび粉100%と和三盆のわらび餅にきなこと黒蜜、抹茶のわらび餅、配送できる冷蔵7日のわらび餅 (2022年8〜11月)・テラスでわらび餅と抹茶のセット1,000円 (2026年3月)・夏は黒蜜や番茶のかき氷 (2025年8〜9月)・持ち帰り12個1,500円 (2022年8月)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '五条坂、清水寺の下',
    gf_detail: '要確認、期待できる。口コミでは国産の本わらび粉100%と和三盆のわらび餅にきなこと黒蜜 (2022年8月、2025年8月)。店の原材料表示は未確認。',
    vegan_detail: '要確認、期待できる。わらび粉、和三盆、きなこ、黒蜜、抹茶は口コミの説明では植物性。店に確認を。',
    notes: '[わらび餅・五条坂、テラス] 清水寺の下の静かな路地の隠れたわらび餅の店。本わらび粉のなめらかなわらび餅にきなこと黒蜜、テラスで抹茶のセット、夏はかき氷。グルテンフリーとヴィーガンの可能性、要確認。水曜休み。',
  });
}

// ================================================================ BAR&IZAKAYA 室町二條 みのや Minoya
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26028991/'; const R = TB + 'dtlrvwlst/';
  const A = day(['17:30', '23:30']); const S = day(['17:30', '22:30']);
  put({
    id: 'kyoto_muromachi_nijo_minoya', name: 'BAR&IZAKAYA 室町二條 みのや (Minoya)', category: 'OMNI',
    lat: 35.01325538786378, lng: 135.75821576044692, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: soba in soy tsuyu (buckwheat ratio not stated) and breaded sauce katsudon (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, trout and dashi-based dishes (2024–2026 reviews).',
    hours_raw: 'Monday–Saturday 17:30–23:30 (last orders food 22:30, drinks 23:00); Sunday 17:30–22:30 (last orders food 22:00, drinks 22:30); closing days not fixed — call ahead; reservations required after 22:00 (Tabelog). Reviewers also describe lunch visits for soba and sauce katsudon (March 2024; July–September 2025), but Tabelog lists no lunch hours. House rules (Tabelog): a minimum order of ¥3,000 per adult at dinner; a 10% late-night charge on bills after 22:00; course cancellations cost 50% the day before and 100% on the day. 29 seats: 22 at tables and 7 at the counter; non-smoking (Tabelog). A 100-year-old machiya with high ceilings and skylights (July 2025; January 2026). 4 min walk from Karasuma-Oike Stn. Opened 20 April 2017 (Tabelog).',
    hours: { 0: A, 1: A, 2: A, 3: A, 4: A, 5: A, 6: S }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Muromachi-Nijo, near Karasuma-Oike',
    cuisine: 'Machiya izakaya and bar of Shinshu (Nagano) food and drink, from an owner with Shinshu roots (September 2024) · Shinshu soba to finish, e.g. spicy green-onion pork dipping soba (January 2026); Nagano-style sauce katsudon (September 2025) · Shinshu dishes such as trout sashimi; Japanese-Western appetisers (June 2025; June 2026) · Shinshu sake and wine, whisky (June 2025) · about ¥4,000–5,000 at night (2025–2026 reviews)',
    website: null, gmaps: gm('室町二條 みのや'), menu_url: null,
    notes: '[Shinshu soba izakaya · Muromachi-Nijo] A century-old machiya with skylights pouring in light, serving Shinshu soba, Nagano sauce katsudon, trout sashimi and Japanese-Western snacks with Nagano sake and wine. ¥3,000 minimum per adult at dinner; 10% late-night charge after 22:00.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: 'Connection to Shinshu (Nagano), per a September 2024 review',
      background: 'Per Tabelog and reviewers: a bar-izakaya opened 20 April 2017 in a renovated Kyoto townhouse said to be over 100 years old, run by an owner with ties to Shinshu who promotes the region’s food and drink, mainly southern Shinshu (September 2024; January 2026).',
      philosophy: null, specialty: 'Shinshu soba; sauce katsudon.',
      anecdotes: [
        { text: 'A September 2025 visitor called the Nagano-style sauce katsudon shockingly good, with a forbidden daytime drink.', source: R + 'B516479793/' },
        { text: 'A June 2025 regular who used to finish nights here with soba found it a little off that day.', source: R + 'B268354096/' },
        { text: 'A June 2026 diner stumbled in and tried rare dishes such as trout sashimi before the soba.', source: R + 'B532293711/' },
      ],
      japanese_sources_summary: '食べログ: バル・そば・バー、中京区室町通二条下ル蛸薬師町270、烏丸御池駅2番出口から北へ240m、月〜土 17:30〜23:30 (L.O.料理22:30、飲み物23:00)、日 17:30〜22:30、不定休 (電話で確認を)、22時以降は要予約、夜は大人1人3,000円以上の注文、22時以降の会計に深夜料金10%、コースのキャンセル料 (前日50%、当日100%)、29席 (テーブル22、カウンター7)、禁煙、2017年4月20日開店。口コミ (2024年3月〜2026年6月、英語): 信州 (主に南信州) にゆかりのある店主、築100年以上の京町家、天窓の光、信州そば、ねぎと豚の辛いつけそば、長野のソースかつ丼、ますの刺身、和洋の前菜、信州の地酒とワイン、ウイスキー、昼の利用も。',
      confidence: 'medium', sources: [TB, R + 'B268354096/', R + 'B482308718/', R + 'B492150952/', R + 'B508621711/', R + 'B510528839/', R + 'B516479793/', R + 'B524026992/', R + 'B524121746/', R + 'B524149976/', R + 'B532293711/'] },
    cultural_comfort: { level: 'konnichiwa', note: '¥3,000 minimum per adult; 10% late-night charge after 22:00; book after 22:00.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区室町通二条下ル蛸薬師町270',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through June 2026.' },
    pin_source: `Tabelog ${TB} (35.013255, 135.758216); cross-checked: GSI 京都府京都市中京区蛸薬師町270番地 (lot) 36 m; nearest existing record 18.2 m (kyoto_zen_kashoin_muromachi); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524121746/', R + 'B516479793/'],
    price_note: 'No exact item prices captured from the sources.', last_checked: TODAY, items: [
      it('', '', 'Spicy green-onion pork dipping soba', '', 'Soba', 'no', 'no', 'January 2026.', 'tsukesoba'),
      it('', '', 'Nagano-style sauce katsudon', '', 'Rice', 'no', 'no', 'September 2025.', 'sauce_katsudon'),
    ] }, {
    cuisine: '信州にゆかりのある店主の、信州の味と酒の町家の居酒屋とバー (2024年9月)・しめの信州そば (ねぎと豚の辛いつけそば、2026年1月)、長野のソースかつ丼 (2025年9月)・ますの刺身などの信州の料理、和洋の前菜 (2025年6月、2026年6月)・信州の地酒とワイン、ウイスキー (2025年6月)・夜4,000〜5,000円ほど (2025〜2026年の口コミ)',
    neighborhood: '室町二条、烏丸御池の近く',
    gf_detail: 'グルテンフリー不可。醤油のつゆのそば (そば粉の割合は記載なし)、衣のソースかつ丼 (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚、ます、だしの料理 (2024〜2026年の口コミ)。',
    notes: '[信州そばの居酒屋・室町二条] 天窓から光の入る築100年の町家で、信州そば、長野のソースかつ丼、ますの刺身、和洋のつまみに信州の地酒とワイン。夜は大人1人3,000円以上、22時以降は深夜料金10%。',
  });
}

save();
