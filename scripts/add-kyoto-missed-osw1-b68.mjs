// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 68.
//   + 花郷 Hanasato (kaiseki in seven private rooms on Hanamikoji, first-time guests welcome)
//   + ひご久 Higo Hisa (nine-seat Edomae sushi counter by Bukkoji, omakase ¥12,000)
//   + komorebino natural wine bar (natural wine by the glass in Gion, about 600 bottles on the list)
//   + うなぎや花道 京都錦市場店 Unagiya Hanamichi (Kiso three-rivers eel and hitsumabushi off Nishiki market; Osaka company)
//   - esports base e32 三条店, 叙々苑 游玄亭 京都, green RABBIT BAGELS, カフェ・グランマーブル祇園ちから: skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26013104, 26045888 (skipped), 26024396,
//   26029688, 26029874 (skipped), 26044664, 26037974 (skipped), 26030324 (skipped).
//   queue-status.jsonl grepped for each brand (花郷, e32, ひご久, komorebino, 叙々苑/游玄亭, 花道/Taya, RABBIT BAGELS,
//   グランマーブル): only RABBIT BAGELS has an earlier ruling (26037053, osw9-31).
//   None of the four drafted is in data/kyoto.json by name or address (花見小路四条下ル, 東前町402, 富永町123,
//   中魚屋町503). グランマーブル 祇園本店 (kyoto_grand_marble_gion) is in data at the café’s address.
//   Same-name count (same brand or operator only): 花郷 — Tabelog’s name search also shows ステーキ花郷 祇園店 (invoice
//   holder シンエネ商事株式会社, Tokyo) and 花郷 六本木店; no link to this restaurant found, and its operator was not found —
//   drafted and flagged. 花道 — 難波店 and 心斎橋店 share the invoice holder T4120001216810 (株式会社Taya Food Service,
//   Osaka; NTA register); three shops, under the chain line; no other brands of the company found — drafted, flagged as a
//   non-local small group. ひご久, komorebino — one shop each (komorebino株式会社 holds the bar’s invoice). Large-parent
//   list checked.
//   Service charges, checked against the Japanese originals: komorebino ＊チャージ700円 (Tabelog); none listed for the
//   other three.
//   Other-diner remarks (Greg 2026-11-06): three komorebino reviews (February and March 2025, August 2026) say the bar
//   draws many overseas guests — kept, summarised and attributed. Single-review remarks left out.
//   Health: the ひご久 owner’s illness is published on the shop’s own site.
//   Halal: no operator in this batch claims halal.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-68');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26045888', 'esports base e32 三条店: no reviews on Tabelog');
skip('26029874', '叙々苑 游玄亭 京都: chain — Tabelog’s name search lists many 叙々苑 and 游玄亭 shops (Shinjuku, Nishiazabu, Ginza, Akasaka, Omiya, Yokohama, Kobe, Hakata, Osaka and others)');
skip('26037974', 'green RABBIT BAGELS: chain — same ruling as 26037053 (osw9-31): RABBIT BAGELS lists 20+ shops on its official site');
skip('26030324', 'カフェ・グランマーブル祇園ちから: already covered — the upstairs café of グランマーブル 祇園本店 (kyoto_grand_marble_gion), whose record names this café and its French toast and croque-monsieur; same invoice holder T6130001040068 and address 祇園町南側570-238');

// ================================================================ 花郷
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26013104/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://gion-hanasato.com/';
  const H = day(['11:00', '15:30'], ['17:00', '22:00']);
  put({
    id: 'kyoto_gion_hanasato', name: '花郷 (Hanasato)', category: 'OMNI',
    lat: 35.003844, lng: 135.775028, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kaiseki with soups, Saikyo-miso grilled fish, fried courses, tempura-don and duck sukiyaki with noodles; no gluten information (own site; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kaiseki of fish, duck and eel, with clear soups and red-miso soups (own site; 2025 reviews).',
    hours_raw: '11:00–15:30 and 17:00–22:00; closed on irregular days (Tabelog). Reservations accepted (Tabelog). Cards (Tabelog). 70 seats in seven private rooms; one April 2026 diner had a room with chairs rather than tatami (Tabelog; April 2026). Non-smoking (Tabelog). On Hanamikoji just south of Shijo (Tabelog). First-time guests welcome (own site, 一見さん歓迎).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Hanamikoji south of Shijo — about 5 min from Keihan Gion-Shijo',
    cuisine: 'Kyoto kaiseki in private rooms on Hanamikoji (own site) · lunch: kaiseki “Kamogawa” ¥6,050; natural-shrimp tempura-don set, duck hot pot with shrimp-taro croquette, or unaju set, each ¥3,630 (own site) · dinner: kaiseki “Gion” ¥12,100, kaiseki “Maruyama” ¥18,150, duck sukiyaki hot pot ¥12,100 (own site) · hamo-shabu kaiseki ¥18,150, July–August only (own site) · ayu starter, flounder chimaki-zushi in bamboo leaf, Saikyo-miso grilled gurnard (May 2025) · white-miso and turnip soup (February 2025) · kumoko tofu, flounder sashimi, sukiyaki (February 2025) · Kyoto sake list incl. junmai daiginjo by the bottle (own site)',
    website: SITE, gmaps: gm('花郷 花見小路'), menu_url: SITE + 'menu/',
    notes: '[Kaiseki · Hanamikoji, private rooms] A long-standing Hanamikoji restaurant serving Kyoto kaiseki in seven private rooms, with first-time guests welcome: lunch sets from ¥3,630 and a ¥6,050 kaiseki, dinner kaiseki ¥12,100–18,150, and hamo-shabu in high summer. Flagged: the operator was not found.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'The shop’s site calls it a Kyoto kaiseki restaurant on Hanamikoji that welcomes first-time guests. Tabelog’s name search also shows ステーキ花郷 祇園店 (invoice holder シンエネ商事株式会社, Tokyo) and 花郷 六本木店; no link to this restaurant was found, and its operator was not found.',
      philosophy: null, specialty: 'Kaiseki; hamo-shabu in summer.',
      anecdotes: [
        { text: 'A March 2026 diner had a maiko pour drinks and dance between courses.', source: R + 'B525123422/' },
        { text: 'A November 2025 party of four held a reunion over a twelve-course kaiseki in a quiet private room.', source: R + 'B537600931/' },
      ],
      japanese_sources_summary: '公式サイト: 京料理 祇園 花郷、花見小路の一見さん歓迎の懐石料理。昼: 懐石料理【鴨川】6,050円、天然海老天丼・鴨鍋 (海老芋コロッケ付き)・うな重セット 各3,630円。夜: 懐石料理【祇園】12,100円、【円山】18,150円、鴨すき鍋12,100円。夏季限定 (7月〜8月末) 鱧しゃぶ懐石18,150円。純米大吟醸などの日本酒。食べログ: 日本料理、東山区花見小路四条下ル、11:00〜15:30、17:00〜22:00、不定休、カード可、70席 (座敷7室)、個室あり、禁煙。口コミ (2025〜2026年、英語): 鮎の先付、魚のちまき寿司、魴鮄の西京焼き、白味噌と蕪の椀、くもこ豆腐、すき焼き、舞妓さんのお酌と舞、12品の懐石。',
      confidence: 'medium', sources: [TB, SITE, SITE + 'menu/', R + 'B188706390/', R + 'B501218405/', R + 'B507697917/', R + 'B525123422/', R + 'B533844696/', R + 'B537600931/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Private rooms; first-time guests welcome.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区花見小路四条下ル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Own site with current menu; Tabelog reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB} (35.003844, 135.775028); the address has no lot number, so GSI cannot place it; OSM reverse gives 祇園町南側 on Shijo-dori at the Hanamikoji corner, which fits “花見小路四条下ル” but does not fix the door — kept the Tabelog point, marked approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE + 'menu/'],
    price_note: 'Prices from the shop’s site, tax included.', last_checked: TODAY, items: [
      it('懐石料理【鴨川】', 'kaiseki ryori Kamogawa', 'Kaiseki “Kamogawa” (lunch)', '¥6,050', 'Lunch', 'ask', 'no', 'Own site.', 'kamogawa'),
      it('天然海老天丼', 'tennen ebi tendon', 'Natural-shrimp tempura-don set (lunch)', '¥3,630', 'Lunch', 'no', 'no', 'Own site.', 'tendon'),
      it('うな重セット', 'unaju setto', 'Unaju set (lunch)', '¥3,630', 'Lunch', 'ask', 'no', 'Own site.', 'unaju'),
      it('懐石料理【祇園】', 'kaiseki ryori Gion', 'Kaiseki “Gion” (dinner)', '¥12,100', 'Dinner', 'ask', 'no', 'Own site.', 'gion'),
      it('懐石料理【円山】', 'kaiseki ryori Maruyama', 'Kaiseki “Maruyama” (dinner)', '¥18,150', 'Dinner', 'ask', 'no', 'Own site.', 'maruyama'),
      it('鱧しゃぶ懐石', 'hamo shabu kaiseki', 'Hamo-shabu kaiseki (July–August)', '¥18,150', 'Seasonal', 'ask', 'no', 'Own site.', 'hamo'),
    ] }, {
    cuisine: '花見小路の個室で京懐石 (公式サイト)・昼: 懐石料理【鴨川】6,050円、天然海老天丼、海老芋コロッケ付きの鴨鍋、うな重セット 各3,630円 (公式サイト)・夜: 懐石料理【祇園】12,100円、【円山】18,150円、鴨すき鍋12,100円 (公式サイト)・7〜8月限定の鱧しゃぶ懐石18,150円 (公式サイト)・鮎の先付、笹の葉で包んだ魚のちまき寿司、魴鮄の西京焼き (2025年5月)・白味噌と蕪の椀 (2025年2月)・くもこ豆腐、刺身、すき焼き (2025年2月)・京都の純米大吟醸など日本酒のボトル (公式サイト)',
    neighborhood: '四条下ルの花見小路。京阪祇園四条から約5分',
    gf_detail: '要確認。椀物、西京焼き、揚物、天丼、麺で締める鴨すき鍋などの懐石。グルテンの情報はない (公式サイト、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。魚、鴨、鰻の懐石、吸い物や赤出汁 (公式サイト、2025年の口コミ)。',
    notes: '[懐石・花見小路、個室] 花見小路で7つの個室を構える懐石の店。一見さん歓迎。昼は3,630円からのセットと6,050円の懐石、夜は12,100〜18,150円の懐石、夏は鱧しゃぶ。運営会社は不明 (要確認)。',
  });
}

// ================================================================ ひご久
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26024396/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://higohisa.com/';
  const H = day(['18:00', '21:00']);
  put({
    id: 'kyoto_higohisa_bukkoji', name: 'ひご久 (Higo Hisa)', category: 'OMNI',
    lat: 35.001246, lng: 135.763391, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Omakase of a seasonal dish, sashimi, grilled or simmered fish and Edomae sushi with soy sauce on the table; the shop asks guests with allergies to consult in advance (own site; February 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish omakase — sashimi, grilled or simmered fish, sushi, chawanmushi (own site).',
    hours_raw: '18:00–21:00; closed on irregular days (own site). Tabelog lists Monday–Saturday 18:00–21:30, closed Sunday; the shop posts its open days each month (own site, September 2026). Reservations required by the day before; same-day seats only if there is a cancellation (own site). Cards accepted (Tabelog). Nine counter seats in an old row-house by the gate of Bukko-ji, at the end of Sakaimachi (own site). About 5 min from exit 5 of the subway Shijo station (Tabelog). Here since September 2014 (own site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Bukko-ji, at the end of Sakaimachi — 5 min from subway Shijo exit 5',
    cuisine: 'Edomae sushi as an omakase of the day’s fish (own site) · omakase ¥12,000 including tax, varying with the market: a seasonal dish, sashimi, grilled or simmered fish and nigiri (own site) · seasonal touches such as hamo otoshi, salt-grilled ayu, dobin-mushi, chawanmushi and kabura-mushi (own site) · classic nigiri, with soy sauce and small plates on the table; homemade yuzu juice (February 2026) · side dishes after the nigiri (April 2025)',
    website: SITE, gmaps: gm('ひご久 仏光寺'), menu_url: SITE + 'menu/',
    notes: '[Edomae sushi · by Bukko-ji, a nine-seat counter] A nine-seat sushi counter in an old row-house by the gate of Bukko-ji, with a small garden of camellia and maple. The owner trained for 25 years at a Tsukiji Edomae sushi shop and serves a ¥12,000 omakase of the season’s fish — sashimi, a grilled or simmered dish, then nigiri. Book by the day before.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)', 'Okami (unnamed)'], origin: 'Urawa, Saitama (born 1964)',
      background: 'After high school the owner joined an Edomae sushi shop in Tsukiji and trained there for 25 years, then opened in Nishiki market in August 2008. In July 2013 a progressive illness, ossification of the posterior longitudinal ligament, forced the shop to close; told a return was impossible, the owner came back after 14 months and has made sushi at Bukkoji Sakaimachi since September 2014 (own site). The owner and the okami greet guests (own site).',
      philosophy: 'Preparing each booking with the guests’ faces in mind; good conversation across the counter, “sometimes like family, sometimes like friends” (own site).', specialty: 'Edomae sushi omakase.',
      anecdotes: [
        { text: 'The shop thanks the regulars who kept supporting it through the 14 months it was closed (own site).', source: SITE + 'about/' },
        { text: 'A February 2026 diner was glad to find soy sauce on the table to add at will, which many sushi counters no longer offer.', source: R + 'B522597715/' },
      ],
      japanese_sources_summary: '公式サイト: 江戸前寿司 ひご久、下京区仏光寺柳馬場西入東前町402 (堺町仏光寺どんつき)、本山佛光寺の門前の古い長屋、カウンター9席、奥庭の椿と紅葉、店主と女将。店主は1964年埼玉県浦和市生まれ、高校卒業後に築地の江戸前寿司屋で25年修業、2008年8月に錦市場で開店、2013年7月に後縦靭帯骨化症で閉店、1年2ヶ月の闘病の末2014年9月から現在地で再開。おまかせ12,000円 (税込み、2023年3月20日から)、旬の一品・刺身・焼き魚又は煮魚・寿司、鱧のおとし、鮎の塩焼き、土瓶蒸し、茶わん蒸し、かぶら蒸し。18:00〜21:00、不定休、前日までの要予約。食べログ: 寿司、月〜土 18:00〜21:30、日曜定休、カード可。口コミ (2025〜2026年、英語): 江戸前寿司と一品、卓上の醤油と小皿、自家製の柚子ジュース。',
      confidence: 'medium', sources: [TB, SITE, SITE + 'about/', SITE + 'menu/', SITE + 'contact/', SITE + 'news/news-442/', R + 'B506099140/', R + 'B522597715/'] },
    cultural_comfort: { level: 'japanese', note: 'Nine-seat counter; reservations by the day before, by phone, form or Instagram.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区仏光寺柳馬場西入東前町402',
    existence: { status: 'confirmed', checked: TODAY, note: 'Own site with open-day notices through September 2026; Tabelog review dated February 2026.' },
    pin_source: `Tabelog ${TB} (35.001246, 135.763391); cross-checked: GSI 京都府京都市下京区東前町402番地 (lot) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE + 'menu/'],
    price_note: 'Omakase price from the shop’s site (since 20 March 2023), tax included; may vary with the market.', last_checked: TODAY, items: [
      it('おまかせ', 'omakase', 'Omakase (seasonal dish, sashimi, grilled or simmered fish, nigiri)', '¥12,000', 'Omakase', 'ask', 'no', 'Own site.', 'omakase'),
    ] }, {
    cuisine: 'その日の魚でおまかせの江戸前寿司 (公式サイト)・おまかせ12,000円 (税込み、仕入れで上下): 旬の一品、刺身、焼き魚又は煮魚、寿司 (公式サイト)・鱧のおとし、鮎の塩焼き、土瓶蒸し、茶わん蒸し、かぶら蒸しなど季節の品 (公式サイト)・定番のネタの握り、卓上の醤油と小皿、自家製の柚子ジュース (2026年2月)・握りのあとに一品 (2025年4月)',
    neighborhood: '仏光寺の門前、堺町どんつき。地下鉄四条駅5番出口から徒歩5分',
    gf_detail: '要確認。旬の一品、刺身、焼き魚か煮魚、醤油を使う江戸前寿司のおまかせ。アレルギーは事前に相談 (公式サイト、2026年2月)。',
    vegan_detail: 'ヴィーガンではない。刺身、焼き魚か煮魚、寿司、茶わん蒸しの魚のおまかせ (公式サイト)。',
    notes: '[江戸前寿司・仏光寺、カウンター9席] 佛光寺の門前の古い長屋にあるカウンター9席の寿司屋。奥庭に椿と紅葉。築地の江戸前寿司屋で25年修業した店主が、旬の魚で12,000円のおまかせ (刺身、焼き物か煮物、握り) を出す。前日までに予約。',
  });
}

// ================================================================ komorebino natural wine bar
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26029688/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://komorebino.com/index.html';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_komorebino_wine_bar', name: 'komorebino natural wine bar', category: 'OMNI',
    lat: 35.004333, lng: 135.774981, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Mostly wine; snacks are a nuts, raisins, popcorn and chocolate plate, cheese and salsiccia — no gluten information (Tabelog menu).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The nuts, raisins, popcorn and chocolate plate may suit, but nothing is said about ingredients; the other snacks are cheese and sausage (Tabelog menu).',
    hours_raw: '17:00–24:00 daily (L.O. 23:00) (Tabelog). Charge ¥700 (Tabelog, original ＊チャージ700円). Reservations accepted (Tabelog). Cards, IC cards and QR (Tabelog). 15 seats: 7 at the counter and 8 at tables (Tabelog). Non-smoking (Tabelog). On the ground floor of 花見会館 in Tominaga-cho, 4 min from Keihan Gion-Shijo (Tabelog). Opened 6 October 2017 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion Tominaga-cho (花見会館 1F) — 4 min from Keihan Gion-Shijo',
    cuisine: 'Natural wine only, from Japan, France, Italy and elsewhere: a cellar of about 1,000 wines and a list of 599, updated 24 times a year with the solar terms (Tabelog) · many by the glass, poured in small tastes to suit you (June and July 2026) · Japanese natural wines such as Takahiko and DROP from Yamagata (July 2026); Radikon (October 2026); Alsace white and Austrian orange (February 2025) · snacks: nuts, raisins, popcorn and chocolates ¥700; one cheese ¥1,100, three ¥2,750; salsiccia ¥2,000 (Tabelog)',
    website: SITE, gmaps: gm('komorebino natural wine bar'), menu_url: TB + 'dtlmenu/',
    notes: '[Natural wine bar · Gion Tominaga-cho] A 15-seat Gion bar pouring only natural wine — a list of about 600 bottles, refreshed with each of the 24 solar terms, and plenty by the glass, including rare Japanese producers. Staff talk you through the growers; snacks are nuts, cheese and salsiccia. ¥700 charge; open nightly to midnight.',
    chef_bio: { chef_name: null, roles: ['Owner and manager (unnamed)'], origin: null,
      background: 'Run by komorebino株式会社 (NTA register). Reviewers describe a gentle owner and helpful staff (February 2025) and a friendly, knowledgeable manager who helped with the harvest at one of the Yamagata producers poured (July 2026). Several reviewers note that the bar draws many overseas guests (February and March 2025, August 2026).',
      philosophy: 'Matching the wine list to Japan’s 24 solar terms (Tabelog).', specialty: 'Natural wine by the glass.',
      anecdotes: [
        { text: 'A July 2026 visitor’s favourite was a 2023 white from DROP in Yamagata, which the manager had helped harvest.', source: R + 'B533008165/' },
        { text: 'An August 2026 visitor landed a kendama ball on a komorebino-logo kendama and was cheered by the staff.', source: R + 'B534164701/' },
      ],
      japanese_sources_summary: '食べログ: komorebino natural wine bar、ワインバー・ダイニングバー・カフェ、東山区八坂新地富永町123 花見会館 1F、京阪祇園四条駅から徒歩4分、毎日 17:00〜24:00 (L.O.23:00)、チャージ700円、カード・電子マネー・QR可、15席 (カウンター7、テーブル8)、禁煙、2017年10月6日オープン、日本、フランス、イタリアなどの自然派ワインのみ、セラーに約1,000種、リストは599種、二十四節気に合わせて年24回更新、ミックスナッツ・レーズン・ポップコーン・チョコの盛り合わせ700円、チーズ1種1,100円・3種2,750円、サルシッチャ2,000円、適格請求書 T2290001066472 (komorebino株式会社)。口コミ (2025〜2026年、英語): グラスで日本のワイン、Takahiko、山形のDROP、Radikon、海外のお客が多い、ロゴ入りのけん玉。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=2290001066472', R + 'B495099735/', R + 'B503189647/', R + 'B527121173/', R + 'B529251999/', R + 'B533008165/', R + 'B534164701/', R + 'B536697822/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Many overseas guests (several reviews); staff explain the wines; ¥700 charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区八坂新地富永町123 花見会館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004333, 135.774981); cross-checked: GSI 京都府京都市東山区富永町123番地 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'dtlmenu/'],
    price_note: 'Snack prices from Tabelog’s menu, tax included; ¥700 charge.', last_checked: TODAY, items: [
      it('', '', 'Mixed nuts, raisins, popcorn and chocolates', '¥700', 'Snacks', 'ask', 'ask', 'Tabelog.', 'nuts'),
      it('', '', 'Three selected cheeses', '¥2,750', 'Snacks', 'ask', 'no', 'Tabelog.', 'cheese3'),
      it('', '', 'Salsiccia', '¥2,000', 'Snacks', 'ask', 'no', 'Tabelog.', 'salsiccia'),
      it('', '', 'Charge', '¥700', 'Charges', '', '', 'Tabelog.', 'charge'),
    ] }, {
    cuisine: '日本、フランス、イタリアなどの自然派ワインのみ。セラーに約1,000種、リストは599種で、二十四節気に合わせて年24回更新 (食べログ)・グラスワインが多く、好みに合わせて少量ずつ (2026年6・7月)・Takahikoや山形のDROPなど日本の自然派ワイン (2026年7月)、Radikon (2026年10月)、アルザスの白とオーストリアのオレンジ (2025年2月)・つまみ: ナッツ・レーズン・ポップコーン・チョコの盛り合わせ700円、チーズ1種1,100円・3種2,750円、サルシッチャ2,000円 (食べログ)',
    neighborhood: '祇園富永町 (花見会館1階)。京阪祇園四条から徒歩4分',
    gf_detail: '要確認。ほぼワイン。つまみはナッツ・レーズン・ポップコーン・チョコの盛り合わせ、チーズ、サルシッチャ。グルテンの情報はない (食べログのメニュー)。',
    vegan_detail: '要確認。ナッツ・レーズン・ポップコーン・チョコの盛り合わせは合うかもしれないが、材料は書かれていない。ほかはチーズとソーセージ (食べログのメニュー)。',
    notes: '[自然派ワインバー・祇園富永町] 自然派ワインだけを出す祇園の15席のバー。約600本のリストを二十四節気ごとに入れ替え、グラスも多く、日本の希少な造り手も。スタッフが造り手の話をしてくれる。つまみはナッツ、チーズ、サルシッチャ。チャージ700円、毎晩24時まで。',
  });
}

// ================================================================ うなぎや花道 京都錦市場店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26044664/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '16:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_unagiya_hanamichi_nishiki', name: 'うなぎや花道 京都錦市場店 (Unagiya Hanamichi Kyoto Nishiki Market)', category: 'OMNI',
    lat: 35.004982, lng: 135.76295, cuisine_type: 'unagi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Grilled eel with a house tare, unaju, unadon and hitsumabushi finished with dashi; no gluten information (Tabelog menu; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an eel restaurant; the hitsumabushi is finished with dashi (Tabelog menu; 2026 reviews).',
    hours_raw: 'Daily 11:00–16:00 (L.O. 15:00) and 17:00–22:00 (L.O. 21:00) (Tabelog). Reservations accepted (Tabelog). Cards incl. UnionPay, and PayPay; no e-money (Tabelog). 24 seats: a counter in front and small raised tatami seats at the back (Tabelog; September 2026). Heated tobacco allowed at all seats (Tabelog). Down a narrow lane beside a fish shop in Nishiki market, 5 min from Karasuma (Tabelog; October 2026). Opened 25 April 2026 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishiki market, down a lane by a fish shop — 5 min from Karasuma',
    cuisine: 'Eel from the Kiso, Nagara and Ibi rivers (“Kiso three-rivers”), grilled one by one and glazed with a house tare (Tabelog) · hitsumabushi three ways — as it is, with condiments, then with dashi — from ¥4,180 (half eel) to ¥8,400 (one whole Kiso three-rivers eel) (Tabelog; 2026) · oke-mori hitsumabushi platter ¥4,200 a head, two or more (Tabelog) · Hanamichi unadon with two whole eels ¥6,980; overflowing unaju ¥3,980; Kiso three-rivers unaju special premium ¥7,980 (Tabelog; October 2026) · crisp outside and soft inside, finished with a torch; sansho on the table, including freshly grated budo sansho (August–September 2026) · sake and highballs (September 2026)',
    website: null, gmaps: gm('うなぎや花道 京都錦市場店'), menu_url: TB + 'dtlmenu/',
    notes: '[Unagi · Nishiki market, hitsumabushi] A calm wood-lined eel restaurant hidden down a lane beside a Nishiki fish shop, open into the evening. Eel from the Kiso river system is grilled crisp and served as unaju, a two-eel unadon or hitsumabushi finished with dashi, from about ¥4,000 to ¥8,400. Flagged: one of three Hanamichi shops of an Osaka company (the others in Namba and Shinsaibashi).',
    chef_bio: { chef_name: null, roles: ['Grill cooks (unnamed)'], origin: null,
      background: 'The Namba and Shinsaibashi Hanamichi shops share the invoice number T4120001216810, registered to 株式会社Taya Food Service of Osaka (NTA register); no other brands of the company were found. Tabelog’s shop text says each eel is grilled one at a time by skilled cooks.',
      philosophy: '“Meeting an eel is a once-in-a-lifetime encounter” — eel shaped by three rivers (Tabelog).', specialty: 'Kiso three-rivers eel hitsumabushi.',
      anecdotes: [
        { text: 'An October 2026 diner’s premium unaju held an eel so large that the lid would not close.', source: R + 'B537460050/' },
        { text: 'A September 2026 visitor walked past the half-shuttered fish stalls at night to find the place filling up from 5 pm on a weekday.', source: R + 'B536313712/' },
        { text: 'An August 2026 diner loved the eel but found the rice hard in places and packed tight.', source: R + 'B533763996/' },
      ],
      japanese_sources_summary: '食べログ: うなぎや花道 京都錦市場店、うなぎ・日本料理・居酒屋、中京区中魚屋町503 1F、烏丸駅から徒歩5分、毎日 11:00〜16:00 (L.O.15:00)、17:00〜22:00 (L.O.21:00)、カード・PayPay可、24席、加熱式たばこのみ可、2026年4月25日オープン、木曽川・長良川・揖斐川の「木曽三川」の鰻を職人が一枚ずつ焼き、秘伝のたれ、ひつまぶし4,180〜8,400円、桶盛りひつまぶし1人4,200円 (2人前から)、花道うな丼6,980円、はみ出しうな重3,980円。難波店と心斎橋店の適格請求書 T4120001216810 (株式会社Taya Food Service、大阪)。口コミ (2026年、英語): 錦市場の魚屋の横の細道、カウンターと小上がり、バーナーで仕上げる、卓上の山椒とぶどう山椒、蓋が閉まらない特上うな重7,980円。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', 'https://tabelog.com/en/osaka/A2701/A270202/27152814/', 'https://tabelog.com/en/osaka/A2701/A270202/27156594/', 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=4120001216810', R + 'B533649915/', R + 'B533763996/', R + 'B534338076/', R + 'B534745784/', R + 'B536313712/', R + 'B536386527/', R + 'B536514566/', R + 'B536770125/', R + 'B537460050/', R + 'B538540530/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter and small tatami seats; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区中魚屋町503 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004982, 135.76295); cross-checked: GSI 京都府京都市中京区中魚屋町503番地 (lot) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'dtlmenu/'],
    price_note: 'Prices from Tabelog’s menu and October 2026 reviews, tax included.', last_checked: TODAY, items: [
      it('', '', 'Kiso three-rivers eel hitsumabushi, one whole eel', '¥8,400', 'Hitsumabushi', 'ask', 'no', 'Tabelog; October 2026.', 'hitsu1'),
      it('', '', 'Kiso three-rivers eel hitsumabushi, half eel', '¥4,180', 'Hitsumabushi', 'ask', 'no', 'Tabelog.', 'hitsuhalf'),
      it('', '', 'Oke-mori hitsumabushi platter (per person, two or more)', '¥4,200', 'Hitsumabushi', 'ask', 'no', 'Tabelog.', 'oke'),
      it('', '', 'Hanamichi unadon (two whole eels)', '¥6,980', 'Unaju and unadon', 'ask', 'no', 'Tabelog; September 2026.', 'unadon'),
      it('', '', 'Overflowing unaju', '¥3,980', 'Unaju and unadon', 'ask', 'no', 'Tabelog.', 'hamidashi'),
      it('', '', 'Kiso three-rivers unaju special premium (one eel)', '¥7,980', 'Unaju and unadon', 'ask', 'no', 'October 2026.', 'tokujo'),
    ] }, {
    cuisine: '木曽川・長良川・揖斐川の「木曽三川」の鰻を一枚ずつ焼き、秘伝のたれで (食べログ)・そのまま、薬味、出汁の3通りのひつまぶし、半身4,180円から木曽三川の鰻一本8,400円まで (食べログ、2026年)・桶盛りひつまぶし1人4,200円、2人前から (食べログ)・鰻2本の花道うな丼6,980円、はみ出しうな重3,980円、木曽三川の特上うな重7,980円 (食べログ、2026年10月)・外はかりっと中はふわっと、バーナーで仕上げ。卓上に山椒、すりたてのぶどう山椒も (2026年8〜9月)・日本酒とハイボール (2026年9月)',
    neighborhood: '錦市場の魚屋の横の細道。烏丸から徒歩5分',
    gf_detail: '要確認。秘伝のたれの鰻、うな重、うな丼、出汁で締めるひつまぶし。グルテンの情報はない (食べログのメニュー、2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。鰻の店で、ひつまぶしは出汁で締める (食べログのメニュー、2026年の口コミ)。',
    notes: '[うなぎ・錦市場、ひつまぶし] 錦の魚屋の横の細道の奥にある、木の内装の落ち着いた鰻の店。夜も営業。木曽三川の鰻をかりっと焼き、うな重、鰻2本のうな丼、出汁で締めるひつまぶしを約4,000〜8,400円で。大阪の会社の花道3店のひとつ (ほかは難波と心斎橋、要確認)。',
  });
}

save();
