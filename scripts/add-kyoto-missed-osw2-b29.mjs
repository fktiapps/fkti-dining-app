// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 29.
//   Queue run from the osw2 worktree, 2026-11-06.
//   core (queue.mjs kyoto-missed next core 200, lane ids in order):
//   + 喫茶 六花 Kissa Rokka (hand-drip kissa near Higashiyama-Sanjo, moved from Shirakawa)
//   + 蕎麦手打ち たか橋 Soba Teuchi Takahashi (hand-made juwari soba in a former Gojo teahouse building; since 2021)
//   notable (queue.mjs kyoto-missed next notable 200, lane ids in order):
//   + 若松家酒店 Wakamatsuya Sakaten (sake shop by day, reservation-only seafood hot-pot nights; near Kyoto Station)
//   + 酒呑気 びんご Sakenonki Bingo (busy townhouse izakaya off Nishikikoji; since 2020) — 株式会社Atari, which lists four concepts
//     (酒呑気びんご, 六角ace, 酒ﾉみつぼし, ageru.); a small local group, drafted and flagged.
//   None of the four is in data/kyoto.json: grep by id, name (六花/Rokka — 六花亭, 媽媽菜館 六花 and a Tokyo 六花 are unrelated —
//   たか橋/Takahashi, 若松家/Wakamatsuya, びんご/Bingo) and address (稲荷町南組577-4, 平居町23, 西境町166, 西錦小路266) found none.
//   Same-name counts (same brand or operator): one listing each.
//   Service charges: none listed on Tabelog for any of the four.
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-29');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 喫茶 六花
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000343/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.kissa-rokka.com/';
  const H = day(['11:00', '18:00']);
  put({
    id: 'kyoto_kissa_rokka', name: '喫茶 六花 (Kissa Rokka)', category: 'OMNI',
    lat: 35.00737411787383, lng: 135.77803982037358, cuisine_type: 'kissaten',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a café menu of toast, sandwiches, quiche, tarts and French toast (June 2026 review).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A daily vegetable-soup lunch is offered, but nothing vegan is marked (June 2026 review).',
    hours_raw: '11:00–18:00; closed Tuesday and Wednesday (official site; Tabelog). Cash only — no cards, e-money or QR (Tabelog; June 2026). No service charge listed (Tabelog). 20 seats at tables, with red velvet sofas and chairs and a view of a small garden; non-smoking; quiet, with no background music (Tabelog; 2025–2026 reviews). On a lane behind a white brick wall about 5 min from Higashiyama Stn (262 m), near Higashiyama-Sanjo; moved here from Shirakawa (Tabelog; August 2025).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Higashiyama-Sanjo — 262 m from Higashiyama Stn',
    cuisine: 'Kissa with hand-drip coffee, one cup at a time (official site) · June 2026 menu: daily lunch ¥1,350 (e.g. mapo tofu set), quiche lunch ¥1,400, seasonal vegetable-soup lunch ¥1,400, curry rice ¥1,400, sandwiches from ¥1,300, butter toast ¥400, French toast ¥950, cake of the day from ¥700 (mostly tarts), Rokka parfait ¥1,200, hot coffee ¥650, apple juice ¥650 · also egg sandwich, hōjicha milk tea, banana milk (2025–2026 reviews)',
    website: SITE, gmaps: gm('喫茶 六花 東山'), menu_url: TB,
    notes: "[Kissa · Higashiyama-Sanjo, a quiet hand-drip coffee room] A calm, homely kissa behind a white brick wall a few minutes from Higashiyama Station, with red velvet seats, pretty tableware and a little garden. Coffee is hand-dripped cup by cup; lunch runs to quiche, soup or a daily plate (about ¥1,350–1,400), and tea time to fruit tarts, French toast and parfaits. Mostly locals, no music. Cash only. Closed Tuesday and Wednesday.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Per the official site: coffee hand-dripped carefully one cup at a time; site copyright from 2016. Tabelog notes a move from the Amenity Shirakawa building in Shirakawa to the present address.',
      philosophy: null,
      specialty: 'Hand-drip coffee with a fruit tart.',
      anecdotes: [
        { text: 'A June 2026 lunch guest was asked on arrival to confirm having cash, as payment is cash only.', source: R + 'B106114745/' },
        { text: 'An October 2025 visitor liked the café’s teacups so much that one went home with the visitor.', source: R + 'B515205024/' },
        { text: 'An April 2025 pair stopped in after cherry-blossom viewing at Maruyama Park for coffee and a kumquat and orange tart.', source: R + 'B504355674/' },
      ],
      japanese_sources_summary: '公式サイト (kissa-rokka.com): 喫茶 六花 (ROKKA)、京都・東山三条、コーヒーは一杯ずつハンドドリップで丁寧に、東山区稲荷町南組577-4、11:00〜18:00、火曜・水曜定休。食べログ: 喫茶店・カフェ、東山駅から262m、カード・電子マネー・QR 不可、20席 (4人席1、2人席8)、禁煙、白川のアメニティ白川1階から移転。口コミ (2025〜2026年、英語): 日替わりランチ1,350円、キッシュランチ1,400円、季節の野菜スープランチ1,400円、カレー1,400円、サンドイッチ1,300円〜、バタートースト400円、フレンチトースト950円、ケーキ700円〜 (タルトが中心)、六花パフェ1,200円、ホットコーヒー650円、現金のみ、BGM なし、赤いビロードの椅子、小さな庭。',
      confidence: 'medium', sources: [TB, SITE, R + 'B106114745/', R + 'B501460151/', R + 'B503811290/', R + 'B504107889/', R + 'B504355674/', R + 'B511684944/', R + 'B513492412/', R + 'B515205024/', R + 'B515923989/', R + 'B524782326/', R + 'B525288057/', R + 'B530277383/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; a quiet room favoured by locals.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区稲荷町南組577-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.007374, 135.77804); cross-checked: GSI 京都府京都市東山区稲荷町南組577番地 (lot) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B106114745/'],
    price_note: 'Menu and prices from a June 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Daily lunch', '¥1,350', 'Lunch', 'ask', 'ask', '', 'daily_lunch'),
      it('', '', 'Quiche lunch', '¥1,400', 'Lunch', 'no', 'no', '', 'quiche_lunch'),
      it('', '', 'Seasonal vegetable soup lunch', '¥1,400', 'Lunch', 'ask', 'ask', '', 'soup_lunch'),
      it('', '', 'Curry rice', '¥1,400', 'Lunch', 'ask', 'ask', '', 'curry'),
      it('', '', 'French toast', '¥950', 'Café', 'no', 'no', '', 'french_toast'),
      it('', '', 'Hot coffee (hand drip)', '¥650', 'Drinks', '', 'ask', '', 'coffee'),
    ] }, {
    cuisine: '一杯ずつハンドドリップで淹れるコーヒーの喫茶 (公式サイト)・2026年6月のメニュー: 日替わりランチ1,350円 (たとえば麻婆豆腐の定食)、キッシュランチ1,400円、季節の野菜スープランチ1,400円、カレーライス1,400円、サンドイッチ1,300円〜、バタートースト400円、フレンチトースト950円、本日のケーキ700円〜 (タルトが中心)、六花パフェ1,200円、ホットコーヒー650円、りんごジュース650円・ほかに玉子サンド、ほうじ茶ミルクティー、バナナミルク (2025〜2026年の口コミ)',
    neighborhood: '東山三条。東山駅から262m',
    gf_detail: 'グルテンフリー不可。トースト、サンドイッチ、キッシュ、タルト、フレンチトーストのカフェメニュー (2026年6月の口コミ)。',
    vegan_detail: '要確認。季節の野菜スープのランチはあるが、ヴィーガンの表示はない (2026年6月の口コミ)。',
    notes: '[喫茶・東山三条、静かなハンドドリップの喫茶] 東山駅から数分、白いレンガの塀の奥の、落ち着いた家庭的な喫茶。赤いビロードの椅子、かわいい器、小さな庭。コーヒーは一杯ずつハンドドリップ。昼はキッシュやスープ、日替わり (1,350〜1,400円ほど)、お茶の時間は果物のタルト、フレンチトースト、パフェ。客は地元の人が多く、BGM はなし。現金のみ。火水休み。',
  });
}

// ================================================================ 蕎麦手打ち たか橋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26036163/'; const R = TB + 'dtlrvwlst/';
  const L = day(['11:30', '15:00']); const LD = day(['11:30', '15:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_soba_teuchi_takahashi', name: '蕎麦手打ち たか橋 (Soba Teuchi Takahashi)', category: 'OMNI',
    lat: 34.99497041787794, lng: 135.76619228025663, cuisine_type: 'udon_soba',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The soba is juwari (100% buckwheat), but it comes with dipping sauce, and the sets include tempura and mackerel sushi; no gluten information is published (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based dipping sauce, with tempura, chicken and mackerel sushi on the sets (2026 reviews).',
    hours_raw: 'Lunch 11:30–15:00 (last order 14:30) daily except Wednesday and the 2nd and 4th Tuesday; dinner 18:00–22:00 (last order 20:30) Thursday–Saturday (Tabelog). Bookings via Tabelog; tables are few, so book (March 2026). No service charge listed (Tabelog). 38 seats over two floors of tatami rooms with tables, shoes off; a private room for 11–20 on the 1st floor; steep stairs and high entrance steps — not wheelchair accessible (Tabelog; June 2026). Cards, transit IC and other e-money, and QR including PayPay, Alipay and WeChat Pay (Tabelog). In a renovated Showa-era former teahouse (ochaya) in the old Gojo district by the Takase River, 256 m from Kiyomizu-Gojo Stn (Tabelog; 2026 reviews). Opened 27 May 2021 (Tabelog).',
    hours: { 0: L, 1: L, 3: LD, 4: LD, 5: LD, 6: L }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gojo, by the Takase River — 256 m from Kiyomizu-Gojo Stn',
    cuisine: 'Hand-made juwari (100% buckwheat) soba and seasonal Kyoto dishes from cooks trained in Gion (Tabelog) · monthly soba from different regions, e.g. Suwa (Nagano), Higashikagura (Hokkaido), Kagoshima and Yosano (Kyoto); a tasting of three zaru soba ¥1,500 (October–November 2026) · lunch sets A and B with mackerel sushi or soba-gaki dengaku; seasonal tempura zaru; a "salaryman set" with seasonal rice; free soba-yu and buckwheat mini doughnuts (2026 reviews) · evening set of soba-mae (three appetizers, two sashimi, chicken tempura) and soba ¥3,000 · nine-dish soba kaiseki ¥5,000, ¥7,500 with 90 minutes of drinks (Tabelog, tax included)',
    website: null, gmaps: gm('蕎麦手打ち たか橋 五条'), menu_url: TB,
    notes: "[Soba · Gojo, juwari soba in an old teahouse] A hand-made soba house in a Showa-era former teahouse by the Takase River, where you take your shoes off and eat in small tatami rooms. Each month brings 100% buckwheat soba from three regions — taste all three side by side for ¥1,500, with salt. Lunch sets add mackerel sushi or soba-gaki; Thursday to Saturday evenings bring soba-mae snacks and soba kaiseki. Service can be slow when busy. Closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Cooks trained in Gion (Tabelog); not named; the invoice is registered to an individual proprietor'], origin: null,
      background: 'Per Tabelog’s official introduction: authentic hand-made soba and creative Japanese food by cooks trained in Gion, in a historic building at Gojo-Kawaramachi; 100% buckwheat soba; seasonal Kyoto ingredients for the dinner courses. Opened 27 May 2021 (Tabelog); a May 2026 reviewer saw its 5th-anniversary sticker. An October 2026 reviewer says the owner serves slightly smaller soba so guests can also enjoy seasonal dishes.',
      philosophy: 'Per an October 2026 review: the owner wants guests to enjoy seasonal dishes as well as soba.',
      specialty: 'Three-region juwari zaru soba tasting.',
      anecdotes: [
        { text: 'A March 2026 diner recommended eating the juwari soba with salt to taste the buckwheat itself.', source: R + 'B525052519/' },
        { text: 'A June 2026 guest with a cane needed help with the high steps at the entrance and reports the inside is not wheelchair accessible.', source: R + 'B530115584/' },
        { text: 'A March 2026 diner waited about 30 minutes for food on a busy day.', source: R + 'B525214361/' },
      ],
      japanese_sources_summary: '食べログ: 蕎麦手打ち たか橋、そば、下京区平居町23、清水五条駅から256m、昼11:30〜15:00 (L.O. 14:30、水曜と第2・4火曜休み)、夜は木〜土18:00〜22:00 (L.O. 20:30)、38席、1階に11〜20名の個室、禁煙、カード・電子マネー・QR 可、2021年5月27日オープン、インボイス登録は個人事業者。公式紹介: 五条河原町の歴史ある建物、祇園で修業した職人の本格手打ちそばと創作和食、十割そば、夜は京都の季節の食材のコース。コース: 秋のそば懐石9品5,000円、90分飲み放題付き7,500円、たか橋の夜定食3,000円 (税込)。口コミ (2026年3〜11月、英語): 元お茶屋の建物、靴を脱いで上がる、Suwa (Nagano)、Higashikagura (Hokkaido)、Yosano (Kyoto) などの十割ざるそば3種の食べ比べ1,500円、鯖寿司、そばがき田楽、そば湯とそば粉のミニドーナツ、車椅子不可。',
      confidence: 'medium', sources: [TB, R + 'B525052519/', R + 'B525214361/', R + 'B525327223/', R + 'B527197554/', R + 'B527991696/', R + 'B530115584/', R + 'B530372665/', R + 'B531744285/', R + 'B534724270/', R + 'B536083841/', R + 'B538060447/', R + 'B538713369/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Many overseas guests; shoes off; steep stairs.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区平居町23',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with bookable courses; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (34.99497, 135.766192); cross-checked: GSI 京都府京都市下京区平居町23番地 (lot) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B538060447/', R + 'B527991696/'],
    price_note: 'Course prices from Tabelog (tax included); the tasting from October–November 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Three-region juwari zaru soba tasting', '¥1,500', 'Soba', 'ask', 'no', '', 'zaru_three'),
      it('', '', 'Evening set: soba-mae appetizers, sashimi, chicken tempura and soba', '¥3,000', 'Dinner', 'no', 'no', '', 'evening_set'),
      it('', '', 'Nine-dish soba kaiseki', '¥5,000', 'Dinner', 'ask', 'no', 'Limited to 10 groups a day.', 'soba_kaiseki'),
      it('', '', 'Soba kaiseki with 90 minutes of drinks', '¥7,500', 'Dinner', 'ask', 'no', '', 'soba_kaiseki_drinks'),
    ] }, {
    cuisine: '祇園で修業した職人の手打ちの十割そばと京都の季節料理 (食べログ)・月替わりで産地の違うそば、たとえば Suwa (Nagano)、Higashikagura (Hokkaido)、Kagoshima、Yosano (Kyoto)。ざるそば3種の食べ比べ1,500円 (2026年10〜11月)・鯖寿司やそばがき田楽の付く昼のセット A と B、季節の天ざる、季節のご飯の Salaryman Set、そば湯とそば粉のミニドーナツはサービス (2026年の口コミ)・そば前 (前菜3種、お造り2種、鶏の天ぷら) とそばの夜の定食3,000円・9品のそば懐石5,000円、90分飲み放題付き7,500円 (食べログ、税込)',
    neighborhood: '五条、高瀬川沿い。清水五条駅から256m',
    gf_detail: '要確認。そばは十割だが、つゆを付け、セットには天ぷらや鯖寿司も。グルテンの情報は公開されていない (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。出汁のつゆで、セットには天ぷら、鶏、鯖寿司も (2026年の口コミ)。',
    notes: '[そば・五条、元お茶屋の十割そば] 高瀬川沿いの昭和の元お茶屋を改装した手打ちそばの店。靴を脱いで小さな座敷でいただく。毎月3つの産地の十割そばがそろい、並べて食べ比べて1,500円、塩でも。昼のセットには鯖寿司やそばがき、木〜土の夜はそば前とそば懐石。混むと提供が遅いことも。水曜休み。',
  });
}

// ================================================================ 若松家酒店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26016525/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '22:00']);
  put({
    id: 'kyoto_wakamatsuya_sakaten', name: '若松家酒店 (Wakamatsuya Sakaten)', category: 'OMNI',
    lat: 34.98910774787912, lng: 135.758200630203, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seafood omakase and hot pots (fugu, hamo, sea bream) with ponzu and other seasonings; no gluten information is published (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood hot-pot courses (2025–2026 reviews).',
    hours_raw: 'Evenings 18:00–22:00, Monday–Saturday; closed Sunday and holidays (Tabelog). By day a sake shop; at night a reservation-only seafood hot-pot omakase. Very hard to book: Friday nights about six months out, and the winter fugu season months to over half a year ahead (February and September 2026). Drinks are self-service from the shop’s fridges and shelves at retail prices — tell the owner what you take; totals of about ¥12,000–15,000 a head with drinks are reported (2025–2026 reviews). Cash only — no cards, e-money or QR (Tabelog). No service charge listed (Tabelog). 20 seats; private hire possible; smoking allowed per Tabelog. On Shichijo-dori west of Karasuma, 438 m from Kyoto Stn, in a Showa-retro room (Tabelog; 2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shichijo-Karasuma — 438 m from Kyoto Stn',
    cuisine: 'Sake shop’s seafood omakase built around a seasonal hot pot, served on big platters (2025–2026 reviews) · winter fugu courses (tetchiri, fugu skin, grilled fugu) with sashimi and abalone; spring sea-bream shabu-shabu with sweetfish tsukudani and young bamboo shoots; summer hamo hot pot with head, liver and roe in the broth; sweetfish and duck hot pot; crab or grouper depending on the catch · sake at retail prices from the shop (2025–2026 reviews)',
    website: null, gmaps: gm('若松家酒店 七条烏丸'), menu_url: TB,
    notes: "[Izakaya · near Kyoto Station, a sake shop's secret hot-pot nights] A neighbourhood sake shop on Shichijo-dori that turns, by reservation only, into a Showa-retro room of seafood feasts: big platters of sashimi and abalone, then the season's hot pot — fugu in winter, sea bream in spring, hamo in summer. Help yourself to sake and beer from the shop fridges at retail prices and tell the owner. About ¥12,000–15,000 all in. Booked months ahead; cash only. Closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner not named; the shop is run as a sake retailer by day (reviews)'], origin: null,
      background: 'Per 2025–2026 reviews: a local sake shop near Kyoto Station that runs reservation-only seafood hot-pot evenings for regulars; drinks are sold at shop prices and taken from the fridges self-service; the course changes with the season’s fish.',
      philosophy: null,
      specialty: 'Seasonal seafood hot pot — fugu, sea bream, hamo.',
      anecdotes: [
        { text: 'A November 2025 regular was messaged the day before to choose between crab and grouper, depending on the catch.', source: R + 'B429412214/' },
        { text: 'A May 2026 party stood up to photograph each large platter on arrival.', source: R + 'B529754900/' },
        { text: 'A December 2025 first-timer got in only through a cancellation.', source: R + 'B518652159/' },
      ],
      japanese_sources_summary: '食べログ: 若松家酒店、居酒屋・鍋、下京区七条通烏丸西入ル西境町166、京都駅から438m、月〜土18:00〜22:00、日祝定休、カード・電子マネー・QR 不可、20席、貸切可、喫煙可。口コミ (2025〜2026年、英語): 昼は酒屋、夜は予約制の海鮮の鍋のおまかせ、酒は小売価格で冷蔵庫からセルフ、店主に申告、冬のてっちりなど河豚づくし、春の鯛しゃぶ、夏の鱧鍋、鮎と鴨の鍋、蟹かクエ、金曜は半年待ち、冬は数か月〜半年以上前に予約、飲んで1人12,000〜15,000円ほど、昭和レトロの店内。',
      confidence: 'medium', sources: [TB, R + 'B429412214/', R + 'B442522508/', R + 'B501772181/', R + 'B510996742/', R + 'B515514030/', R + 'B516501493/', R + 'B518652159/', R + 'B523724124/', R + 'B528098637/', R + 'B529754900/', R + 'B530067926/', R + 'B536894402/'] },
    cultural_comfort: { level: 'japanese', note: 'Reservation-only and booked months ahead; cash only; self-service drinks.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区七条通烏丸西入ル西境町166',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (34.989108, 135.758201); cross-checked: GSI 京都府京都市下京区西境町166番地 (lot) 39m; 7m from kyoto_koryouri_takaya; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B501772181/', R + 'B515514030/', R + 'B442522508/'],
    price_note: 'From 2025–2026 reviews; no menu or prices published.', last_checked: TODAY, items: [
      it('', '', 'Winter fugu course (tetchiri)', '', 'Course', 'ask', 'no', 'Winter.', 'fugu'),
      it('', '', 'Sea-bream shabu-shabu course', '', 'Course', 'ask', 'no', 'Spring.', 'tai_shabu'),
      it('', '', 'Hamo hot pot course', '', 'Course', 'ask', 'no', 'Summer.', 'hamo_nabe'),
    ] }, {
    cuisine: '酒屋の海鮮のおまかせで、季節の鍋が中心、大皿で出す (2025〜2026年の口コミ)・冬は河豚づくし (てっちり、皮、焼き河豚) とお造りや鮑・春は鯛しゃぶと鮎の佃煮、若い筍・夏は頭や肝、子まで入れた鱧鍋・鮎と鴨の鍋・その日の入荷で蟹かクエ・酒は店の小売価格で (2025〜2026年の口コミ)',
    neighborhood: '七条烏丸。京都駅から438m',
    gf_detail: '要確認。ポン酢などで食べる海鮮のおまかせと鍋 (河豚、鱧、鯛)。グルテンの情報は公開されていない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。海鮮の鍋のコース (2025〜2026年の口コミ)。',
    notes: '[居酒屋・京都駅近く、酒屋の予約制の鍋の夜] 七条通の町の酒屋が、予約制の夜だけ昭和レトロな海鮮の宴の場になる。大皿のお造りや鮑のあとに季節の鍋: 冬は河豚、春は鯛、夏は鱧。酒やビールは店の冷蔵庫から小売価格でセルフ、店主に申告。飲んで12,000〜15,000円ほど。予約は数か月先まで埋まる。現金のみ。日曜休み。',
  });
}

// ================================================================ 酒呑気 びんご
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26035047/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kyoto-atari.co/shop/21/'; const GROUP = 'https://kyoto-atari.co/';
  const H = day(['16:00', '23:00']);
  put({
    id: 'kyoto_sakenonki_bingo', name: '酒呑気 びんご (Sakenonki Bingo)', category: 'OMNI',
    lat: 35.0049010978685, lng: 135.7563754203638, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Simmered niku-dofu, sesame-miso sea bream, croquettes, spring rolls and akashiyaki; no gluten information is published (Tabelog; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A meat- and fish-led izakaya menu with a few vegetable dishes such as fried eggplant and myoga; nothing vegan is marked (2026 reviews).',
    hours_raw: '16:00–23:00 daily (last order food 22:00, drinks 22:30) (Tabelog). Reservations essential — walk-ins are often turned away (August–October 2026). No service charge listed (Tabelog). 34 seats including a counter, in a renovated townhouse; non-smoking; cards (including UnionPay), transit IC, iD, QUICPay and QR including PayPay, Alipay and WeChat Pay (Tabelog; 2026 reviews). Off Nishikikoji west of Karasuma, about 10 min from Karasuma or Shijo Stn (Tabelog). Opened 4 September 2020 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishikikoji west of Karasuma — 10 min from Karasuma Stn',
    cuisine: 'Tokyo-style popular sakaba with Kyoto warmth (operator site) · signature niku-dofu of beef tendon and tofu, tanteki, sesame-miso sea bream; "drinking bottles" to mix at your own strength (Tabelog) · e.g. pork belly wrapped in lettuce, beef tongue, corned-beef potato salad, chorizo spring rolls, yam-and-octopus akashiyaki, unagi tamago, fried eggplant and myoga, peach mascarpone, "Tira Miso", coarse-ground ginger drinks; a wide sake list (2026 reviews)',
    website: SITE, gmaps: gm('酒呑気 びんご 西錦小路'), menu_url: TB,
    notes: "[Izakaya · Nishikikoji, a lively townhouse sakaba] A buzzing, booking-only izakaya in an old townhouse west of Karasuma, with a cheerful crew at the counter. Order the famous niku-dofu (beef tendon and tofu), sesame-miso sea bream and pork belly wrapped in lettuce, then make your own highballs from a bottle at the strength you like. Good-value and strongly seasoned, built for drinking. Open daily from 16:00; book ahead.",
    chef_bio: { chef_name: null, roles: ['Run by 株式会社Atari (operator site); no chef named'], origin: null,
      background: 'Per the operator’s site: 株式会社Atari runs four Kyoto sakaba — 酒呑気びんご, the neo-bistro 六角ace, 酒ﾉみつぼし and ageru. — and describes びんご as a Tokyo-style popular sakaba blended with Kyoto warmth. Per Tabelog’s official introduction: a casual pub whose concept is "connecting people". Opened 4 September 2020 (Tabelog); a September 2026 reviewer attended its sixth-anniversary menu.',
      philosophy: 'Per Tabelog’s official introduction: "connecting people".',
      specialty: 'Niku-dofu; sesame-miso sea bream.',
      anecdotes: [
        { text: 'A September 2026 regular on a sixth visit ate from a special anniversary menu of maki sushi, crab cream croquettes and pudding.', source: R + 'B513208515/' },
        { text: 'An August 2026 couple saw walk-ins turned away and advise booking.', source: R + 'B534014978/' },
        { text: 'A September 2026 guest at a 16:00 holiday slot found a sister shop’s card in the restroom.', source: R + 'B536082490/' },
      ],
      japanese_sources_summary: '株式会社Atari (kyoto-atari.co): 酒呑気びんご、六角ace、酒ﾉみつぼし、ageru. の4店、びんごは東京仕込みの大衆酒場スタイルと京都らしい温もり、名物の肉豆腐や創作アテ。食べログ: 居酒屋、中京区西錦小路266、烏丸駅・四条駅から徒歩10分、16:00〜23:00 (料理L.O. 22:00、ドリンクL.O. 22:30)、34席、禁煙、カード・電子マネー・QR 可、2020年9月4日オープン、公式紹介: 「人と人をつなぐ」、名物の肉豆腐、Tanteki、鯛のごま味噌、好みの濃さで割って飲めるボトル。口コミ (2026年、英語): 京町家を改装、予約必須、豚バラのレタス巻き、牛タン、コンビーフのポテサラ、チョリソーの春巻、明石焼、Unagi Tamago、茄子と茗荷の揚げ浸し、桃のマスカルポーネ、6周年の特別メニュー。',
      confidence: 'medium', sources: [TB, SITE, GROUP, R + 'B513208515/', R + 'B527807106/', R + 'B531752219/', R + 'B534014978/', R + 'B534624476/', R + 'B536082490/', R + 'B536129777/', R + 'B536511762/', R + 'B537224577/', R + 'B537320485/', R + 'B537422675/', R + 'B538673676/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; friendly counter staff.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区西錦小路266',
    existence: { status: 'confirmed', checked: TODAY, note: 'Operator site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004901, 135.756375); cross-checked: GSI 京都府京都市中京区西錦小路町266番地 (lot) 20m; 20m from kyr_men_bistro_nakano; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B536511762/', R + 'B536082490/'],
    price_note: 'Dishes from Tabelog and 2026 reviews; no prices published.', last_checked: TODAY, items: [
      it('肉豆腐', '', 'Niku-dofu of beef tendon and tofu', '', 'Signature', 'ask', 'no', '', 'niku_dofu'),
      it('', '', 'Sesame-miso sea bream', '', 'Signature', 'ask', 'no', '', 'tai_gomamiso'),
      it('', '', 'Pork belly wrapped in lettuce', '', 'Dishes', 'ask', 'no', '', 'butabara_lettuce'),
      it('', '', 'Corned-beef potato salad', '', 'Dishes', 'ask', 'no', '', 'potesala'),
    ] }, {
    cuisine: '京都らしい温もりの東京仕込みの大衆酒場 (運営会社サイト)・名物は牛すじと豆腐の肉豆腐、Tanteki、鯛のごま味噌。好みの濃さで割って飲めるボトル (食べログ)・例: 豚バラのレタス巻き、牛タン、コンビーフのポテトサラダ、チョリソーの春巻、長芋とたこの明石焼、鰻と玉子の一品 (Unagi Tamago)、茄子と茗荷の揚げ浸し、桃のマスカルポーネ、Tira Miso、粗挽き生姜のドリンク。日本酒も豊富 (2026年の口コミ)',
    neighborhood: '烏丸の西の錦小路。烏丸駅から徒歩10分',
    gf_detail: '要確認。煮込みの肉豆腐、鯛のごま味噌、コロッケ、春巻、明石焼など。グルテンの情報は公開されていない (食べログ、2026年の口コミ)。',
    vegan_detail: '要確認。肉と魚が中心の居酒屋で、茄子と茗荷の揚げ浸しなど野菜の料理も少しある。ヴィーガンの表示はない (2026年の口コミ)。',
    notes: '[居酒屋・錦小路、にぎやかな町家の酒場] 烏丸の西の古い町家の、予約必須のにぎやかな居酒屋。カウンターには元気なスタッフ。名物の肉豆腐 (牛すじと豆腐)、鯛のごま味噌、豚バラのレタス巻きを頼み、ボトルから好みの濃さでハイボールを作る。手頃で味はしっかり、飲むための料理。毎日16時から。予約を。',
  });
}

save();
