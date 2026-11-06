// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 8.
//   + MENYA EDITION 木屋町店 (late-night Kyoto back-fat shoyu ramen on Nishi-Kiyamachi, open to 7:00; core list)
//   + 寿し小松 Sushi Komatsu (tuna-wholesaler sushi counter by Nishiki Market; core list)
//   + 室町 唯 Muromachi Yui (前田一光's 10-seat kaiseki counter on Oshikoji; notable list)
//   + 研覃 ほりべ Kentan Horibe (堀部努's Kyoto kaiseki in a Nishikikoji townhouse, Michelin one star 9 years; notable list)
//   Picked 2026-11-05 after batch 7 was integrated. `queue.mjs kyoto-missed next core 200`: MENYA EDITION 木屋町店 26041879
//   and 寿し小松 26034229 (the first two lane-1 ids). `next notable 200`: 京都和久傳 26000863 skipped (Wakuden group already
//   in data); 室町 唯 26033257; 研覃 ほりべ 26028283. None of the four is in data/kyoto.json: grep by name (EDITION,
//   小松/Komatsu, 室町 唯, ほりべ/Horibe/研覃) and address (北車屋町272, 高宮町594, 金吹町459, 天神山町273) found none.
//   Groups: MENYA EDITION has at least one other shop (a reviewer's "Edition near Shichijo Station", June 2026), none in data;
//   寿し小松 has a Kyoto Station shop (June 2026 review), none in data — both small groups, drafted.
//   Ramen: MENYA EDITION is drafted WITHOUT a ramen block — the reviews do not give broth clarity, and they contradict
//   each other on noodle firmness ("thin yet chewy", January 2026; "uniquely soft", April 2026).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-8');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26000863', '京都和久傳: one of the Wakuden group\'s ryotei, a same-concept house of a brand already in data — kyoto_muromachi_wakuden (室町和久傳) chef_bio.background: "The official site lists the group\'s other ryotei (Kodaiji Wakuden, Kyoto Wakuden), soba and other restaurants, and gift shops in Kyoto, Tokyo and Nagoya."');

// ================================================================ MENYA EDITION 木屋町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26041879/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '07:00']);
  put({
    id: 'kyoto_menya_edition_kiyamachi', name: 'MENYA EDITION 木屋町店 (MENYA EDITION Kiyamachi)', category: 'OMNI',
    lat: 35.006979, lng: 135.770167, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles in a soy-sauce broth; fried rice, gyoza and kara-age on the side (Tabelog shop text; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: back-fat soy-sauce ramen with chashu; the broth has animal flavours (Tabelog shop text; March 2026).',
    hours_raw: '18:00–7:00, every day (Tabelog); the shop recommends 18:00–24:00 (Tabelog shop text). No reservations; groups of eight have been seated without a wait (Tabelog; March 2026). 24 table seats, more than the entrance suggests, down a narrow passage (Tabelog; March and June 2026). Non-smoking; children welcome; photo menu (Tabelog). Cards, transport IC and other e-money, PayPay (Tabelog). On Nishi-Kiyamachi south of Rokkaku, ground floor of 第二観光ビル; 5 min walk from Sanjo Stn (Tabelog). Opened 30 September 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishi-Kiyamachi south of Rokkaku — 5 min walk from Sanjo Stn',
    cuisine: 'Kyoto back-fat shoyu ramen, served until morning (Tabelog shop text) · back-fat shoyu ramen ¥980, with Kujo negi, chashu, menma and nori; chopped garlic +¥30 (September 2026) · "Dark Side", a black burnt-soy shoyu ramen with a smoky garlic note, about ¥850 (June 2026) · reviewers liken the "white" bowl to Daiichi Asahi and the "black" to Shin-Fukusaikan (March 2026) · Edilou ramen (May 2026) · Kiyamachi-only black fried rice; gyoza, chashu appetiser, kara-age (ramen and kara-age combo ¥1,710) (Tabelog shop text; 2026 reviews) · highballs and beer',
    website: null, gmaps: gm('MENYA EDITION 木屋町店'), menu_url: TB,
    notes: "[Ramen · Kiyamachi, Kyoto shoyu until 7 a.m.] A café-like ramen shop on Nishi-Kiyamachi open from 18:00 until 7:00, for the end of a night out: classic Kyoto back-fat shoyu ramen (¥980) with a pile of Kujo negi, and the pitch-black \"Dark Side\" of burnt soy and garlic. Reviewers find the broth lighter and gentler than it looks; one disliked the coarsely cut onions. Kiyamachi-only black fried rice and kara-age on the side. More seats lie beyond a narrow passage; groups fit. Cards and PayPay. A second shop is near Shichijo Station.",
    chef_bio: { chef_name: null, roles: ['Young staff, some from abroad (March 2026); no one is named'], origin: null,
      background: 'Per the Tabelog shop text: traditional back-fat shoyu ramen, open until 7 a.m.; "The Dark Side" has the highest repeat rate; Kiyamachi-exclusive black fried rice. Opened 30 September 2024 (Tabelog). A June 2026 reviewer had eaten at the Edition near Shichijo Station and noted the Kiyamachi shop’s name in romaji; a March 2026 reviewer read it as an independent brand designed with inbound visitors in mind and found prices a little high for the style.',
      philosophy: null, specialty: 'Back-fat shoyu ramen; Dark Side black shoyu ramen.',
      anecdotes: [
        { text: '"The broth was surprisingly light and refreshing, with a good balance of sweetness, rather than being overly rich." The same diner found the green onions thick and harsh. — March 2026.', source: R + 'B524723119/' },
        { text: '"The menu features two styles of ramen: the \'white\' reminiscent of Daiichi Asahi and the \'black\' that evokes Shin Fukusaikan." — March 2026.', source: R + 'B525085939/' },
        { text: '"I also tried the black broth, which had a burnt garlic flavor and a smoky taste. I preferred this broth." — March 2026.', source: R + 'B525247763/' },
        { text: '"There was a narrow passage with a disorganized arrangement of a refrigerator and alcohol. There were a few tables in the back" — June 2026.', source: R + 'B530140558/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ラーメン、中京区西木屋町通六角下る北車屋町272-1 第二観光ビル1F、三条駅から徒歩5分、毎日18:00〜翌7:00、予約不可、24席 (テーブル)、禁煙、子供可、写真メニュー、カード・交通系IC・PayPay 可、2024年9月30日オープン、店舗紹介: 伝統の背脂醤油ラーメン、朝7時まで、リピート率の高い「ダークサイド」、木屋町限定の黒チャーハン。口コミ (2026年1〜9月、英語): 背脂醤油ラーメン980円、刻みにんにく30円、ダークサイド850円ほど、九条ねぎ、チャーシュー、メンマ、のり、白は Daiichi Asahi、黒は Shin Fukusaikan のよう、唐揚げセット1,710円、餃子、狭い通路の奥のテーブル、七条駅近くの店。',
      confidence: 'medium', sources: [TB, R + 'B521691943/', R + 'B524239785/', R + 'B524723119/', R + 'B525085939/', R + 'B525247763/', R + 'B525525850/', R + 'B526578094/', R + 'B530140558/', R + 'B535908765/', R + 'B536015545/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Photo menu; walk in late at night; cards and PayPay accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区西木屋町通六角下る北車屋町272-1 第二観光ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (staff-maintained); reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.006979, 135.770167); cross-checked: GSI 京都府京都市中京区北車屋町272番地 (lot) 24 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535908765/', R + 'B530140558/', R + 'B536015545/'],
    price_note: 'No menu read; prices from June and September 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('', '', 'Back-fat shoyu ramen', '¥980', 'Ramen', 'no', 'no', 'September 2026.', 'seabura_shoyu'),
      it('', '', 'Dark Side (black shoyu ramen)', '¥850', 'Ramen', 'no', 'no', 'About, June 2026.', 'dark_side'),
      it('', '', 'Ramen and kara-age combo', '¥1,710', 'Sets', 'no', 'no', 'September 2026.', 'karaage_combo'),
      it('', '', 'Chopped garlic', '¥30', 'Toppings', '', '', 'September 2026.', 'garlic'),
    ] }, {
    cuisine: '朝まで出す京都の背脂醤油ラーメン (食べログの店舗紹介)・背脂醤油ラーメン980円、九条ねぎ、チャーシュー、メンマ、のり、刻みにんにく30円 (2026年9月)・焦がし醤油とにんにくのスモーキーな黒い醤油ラーメン「ダークサイド」850円ほど (2026年6月)・口コミは白を Daiichi Asahi、黒を Shin Fukusaikan になぞらえる (2026年3月)・Edilou ラーメン (2026年5月)・木屋町限定の黒チャーハン、餃子、チャーシューのおつまみ、唐揚げ (ラーメンと唐揚げのセット1,710円) (食べログの店舗紹介、2026年の口コミ)・ハイボール、ビール',
    neighborhood: '六角の南の西木屋町。三条駅から徒歩5分',
    gf_detail: '実際にはグルテンフリーではない。醤油のスープに小麦の麺。チャーハン、餃子、唐揚げも (食べログの店舗紹介、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。チャーシューの背脂醤油ラーメンで、スープに動物系の旨み (食べログの店舗紹介、2026年3月)。',
    notes: '[ラーメン・木屋町、朝7時までの京都の醤油] 西木屋町の、夜18時から朝7時まで開くカフェのようなラーメン屋。飲んだ後の締めに: 九条ねぎたっぷりの京都らしい背脂醤油ラーメン (980円) と、焦がし醤油とにんにくの真っ黒な「ダークサイド」。見た目よりスープは軽くやさしいとの声が多く、ねぎの切り方が粗いと書いた客も。木屋町限定の黒チャーハンや唐揚げも。狭い通路の奥にも席があり、グループも入れる。カード・PayPay 可。七条駅の近くにも店がある。',
  });
}

// ================================================================ 寿し小松
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26034229/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '21:00']);
  put({
    id: 'kyoto_sushi_komatsu_nishiki', name: '寿し小松 (Sushi Komatsu)', category: 'OMNI',
    lat: 35.005329, lng: 135.765011, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sushi and sashimi with soy sauce, plus tempura, fried taro and grilled dishes; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a tuna and seafood sushi counter; red miso soup with lunch (2026 reviews).',
    hours_raw: '11:30–21:00 (last order 20:30), without a break; closed Thursday (Tabelog). The lunch menu runs until 14:00 (April 2026); quiet mid-afternoon, so good for a daytime drink (July 2026; Tabelog shop text). Reservations accepted (Tabelog; August 2026). 14 counter seats; non-smoking; children welcome, with a kids’ menu (Tabelog). Cards, transport IC, iD and PayPay (Tabelog). On Tominokoji just north of Nishiki Market, easy to miss; 3 min walk from Kawaramachi Stn (Hankyu) (Tabelog; 2026 reviews). Opened 20 April 2020 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Tominokoji just north of Nishiki Market — 3 min walk from Kawaramachi Stn',
    cuisine: 'Sushi and seafood izakaya run by a wholesaler that supplies Kyoto restaurants, known for wild fresh bluefin tuna (Tabelog shop text) · lunch: 10-piece sushi set with a negitoro roll and red miso soup, about ¥2,200 (April 2026) · rare tuna cuts as sashimi — eye, brain, others — and grilled tuna collar; tuna-belly sashimi; toro-taku (2026 reviews) · assorted sashimi, fresh oysters, saba sushi, sea urchin and squid salad, tempura (white fish, corn, clam), fried taro, chawanmushi, uzaku (2026 reviews) · Kyoto and other Japanese sakes, shochu (Tabelog)',
    website: null, gmaps: gm('寿し小松 京都 錦'), menu_url: null,
    notes: "[Sushi · Nishiki Market, a tuna wholesaler's counter] A 14-seat sushi counter tucked just north of Nishiki Market, run by a seafood wholesaler and open straight through from 11:30 to 21:00 — handy for a late lunch or an afternoon drink. Tuna is the thing: rare cuts such as the eye and brain as sashimi, grilled collar, toro-taku. The lunch set of 10 nigiri with a negitoro roll is about ¥2,200; dinners with sake run ¥8,000–15,000. Friendly chefs chat at the counter; one who once worked in America talks with foreign customers. Closed Thursday.",
    chef_bio: { chef_name: null, roles: ['Sushi chefs (unnamed in the sources)'], origin: null,
      background: 'Per the Tabelog shop text: next to Nishiki Market, using domestic ingredients and fresh tuna, operated by a wholesaler connected to many well-known Kyoto restaurants. Opened 20 April 2020 (Tabelog). A July 2026 diner heard a chef mention working in America, chatting with foreign customers; a September 2026 diner says it is run by the same tuna wholesaler as Sushi Noboru in the central market, with several experienced chefs at the counter; a June 2026 diner learned it is the same as the Sushi Komatsu at Kyoto Station.',
      philosophy: null, specialty: 'Rare tuna cuts; grilled tuna collar.',
      anecdotes: [
        { text: '"I caused a bit of trouble by accidentally spilling the red miso soup, creating a sea of red miso on the counter... They kindly brought me another cup of red miso soup." — April 2026.', source: R + 'B526261178/' },
        { text: '"There were four types available, and while all were delicious due to their rarity, one piece from the back of the eye had a slight odor, so be cautious." The same diner found the rice a little loose that day. — July 2026.', source: R + 'B495473905/' },
        { text: '"While I can\'t recommend many places in Nishiki Market due to their high prices, I can at least suggest this one." — April 2026.', source: R + 'B530002221/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 海鮮・寿司・居酒屋、中京区富小路通錦上ル高宮町594、阪急河原町駅から徒歩3分、11:30〜21:00 (L.O. 20:30)、木曜休み、予約可、14席 (カウンター)、禁煙、子供可・キッズメニュー、カード・交通系IC・iD・PayPay 可、2020年4月20日オープン、店舗紹介: 錦市場のすぐそば、国産の食材、天然本生マグロ、京都の名店に卸す問屋が営む、昼飲み、京都の地酒と全国の銘酒。口コミ (2026年4〜10月、英語): 昼の寿司10貫とねぎとろ巻き2,200円ほど、マグロの珍しい部位 (目、頭)、カマ焼き、とろたく、刺身の盛り合わせ、生牡蠣、鯖寿司、天ぷら、茶碗蒸し、うざく、京都駅にも寿し小松、アメリカで働いた職人。',
      confidence: 'medium', sources: [TB, R + 'B495473905/', R + 'B526261178/', R + 'B529943368/', R + 'B530002221/', R + 'B530300033/', R + 'B530895501/', R + 'B533906453/', R + 'B534132848/', R + 'B535039852/', R + 'B538517622/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Friendly counter chefs; open all day; cards and PayPay accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区富小路通錦上ル高宮町594',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (staff-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005329, 135.765011); cross-checked: GSI 京都府京都市中京区高宮町594番地 (lot) 28 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B526261178/'],
    price_note: 'No menu read; lunch price from an April 2026 review; dinner bills ¥8,000–15,000 in 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch: 10 pieces of nigiri, negitoro roll, red miso soup', '¥2,200', 'Lunch', 'ask', 'no', 'About, April 2026; until 14:00.', 'lunch_10'),
      it('', '', 'Rare tuna cuts sashimi', '', 'Tuna', 'ask', 'no', '', 'rare_tuna'),
      it('', '', 'Grilled tuna collar', '', 'Tuna', 'ask', 'no', '', 'tuna_kama'),
    ] }, {
    cuisine: '京都の飲食店に卸す問屋が営む、天然本生マグロが自慢の寿司と海鮮の居酒屋 (食べログの店舗紹介)・昼: 寿司10貫にねぎとろ巻きと赤だし、2,200円ほど (2026年4月)・目や頭などのマグロの珍しい部位の刺身、マグロのカマ焼き、大トロの刺身、とろたく (2026年の口コミ)・刺身の盛り合わせ、生牡蠣、鯖寿司、ウニとイカのサラダ、天ぷら (白身、とうもろこし、貝)、里芋の揚げ物、茶碗蒸し、うざく (2026年の口コミ)・京都と全国の日本酒、焼酎 (食べログ)',
    neighborhood: '錦市場のすぐ北の富小路通。河原町駅から徒歩3分',
    gf_detail: '要確認。醤油で食べる寿司と刺身に、天ぷら、里芋の揚げ物、焼き物。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。マグロと魚介の寿司のカウンターで、昼は赤だし付き (2026年の口コミ)。',
    notes: '[寿司・錦市場、マグロ問屋のカウンター] 錦市場のすぐ北に隠れた14席の寿司のカウンター。魚の問屋が営み、11時半から21時まで通しで開くので、遅い昼や昼飲みにも。主役はマグロ: 目や頭など珍しい部位の刺身、カマ焼き、とろたく。昼の寿司10貫とねぎとろ巻きは2,200円ほど、夜はお酒と1人8,000〜15,000円ほど。気さくな職人が話しかけてくれ、アメリカで働いたことのある職人は海外の客とも話す。木曜休み。',
  });
}

// ================================================================ 室町 唯
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26033257/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://muromachi-yui.jp/';
  const H = day(['17:00', '20:30']);
  put({
    id: 'kyoto_muromachi_yui', name: '室町 唯 (Muromachi Yui)', category: 'MOM_AND_POP',
    lat: 35.012215, lng: 135.758609, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A single omakase kaiseki course with dashi-based soups, sushi, tempura and grilled dishes; no gluten information (official site; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a kaiseki of fish, shellfish, crab and dashi (2025–2026 reviews).',
    hours_raw: '17:00–20:30 (last entry); closed Wednesday (official site; Tabelog). Reservation only, by the day before; by phone or web (official site; Tabelog). One omakase course (Tabelog shop text), ¥30,000 at a first visit (July 2025; August 2026). 10 seats at a curved counter looking onto a garden; the room can be hired for up to 20; designated smoking area (Tabelog; February 2026). Cards (VISA, Master, JCB, AMEX, Diners) (Tabelog). In a townhouse on Oshikoji-dori west of Karasuma; 3 min walk from Karasuma Oike Stn exit 2 (Tabelog). Opened 15 December 2019 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Oshikoji-dori west of Karasuma — 3 min walk from Karasuma Oike Stn',
    cuisine: 'One omakase kaiseki course of the day from ingredients bought at the market each morning and fish from Tango ports (official site; Tabelog shop text) · ¥30,000 (July 2025; August 2026) · e.g. red sea urchin with abalone, hairy-crab shinjo, ayu with its bones fried crisp, hamo carved at the counter (July 2025); hoba sushi and hairy crab — the chef is from Gifu — and clay-pot Omi rice (June 2026); corn wrapped round prawns as tempura (August 2026) · the rice comes with about nine to ten side dishes to eat as you like — chirimen, nameko, nori, karasumi, iwana roe (2026 reviews) · sake chosen for the food, including vintages; seasonal Kyoto sencha (official site); wine, by the owner’s choice (June 2026)',
    website: SITE, gmaps: gm('室町 唯 京都'), menu_url: null,
    notes: "[Kaiseki · Karasuma Oike, 前田一光's counter by a garden] A 10-seat curved counter in a townhouse on quiet Oshikoji, facing a garden, where 前田一光 — born in Gifu to a restaurant family — serves one omakase kaiseki a night (about ¥30,000) built from that morning's market and Tango fish: playful dishes like corn-wrapped prawn tempura, then clay-pot rice with nine or ten side dishes to graze. Reviewers describe it as holding two Michelin stars. Book by the day before; last entry 20:30; closed Wednesday.",
    chef_bio: { chef_name: '前田一光 (Kazuteru Maeda)', roles: ['Owner (店主, official site)'], origin: 'Nakatsugawa, Gifu (official site)',
      background: 'Per the official site: 前田一光 (MAEDA KAZUTERU) was born in Nakatsugawa, Gifu, and grew up in the kitchen of the restaurant run by a parent ("料理屋を営む父親のもと"); after high school, trained in Kyoto aiming to equal that father; became owner of 室町 唯 in December 2019. The site describes visits to the market every morning, daily contact with Tango fishing ports, a counter built so guests watch the cooking, and a garden view. Reviewers in June–August 2026 say the restaurant holds two Michelin stars; a June 2026 reviewer describes a head chef and a wine-loving owner who joined guests for a drink, and says regulars sometimes bring their own wine.',
      philosophy: 'Per the official site: "唯一無二の食事を目指して" — food that can only be had here; nothing used that the kitchen is not satisfied with; menus not bound by convention.',
      specialty: 'Omakase kaiseki; clay-pot rice with many side dishes.',
      anecdotes: [
        { text: '"What stood out the most was the variety of about 9 different accompaniments for the rice, all available for unlimited servings." — February 2026.', source: R + 'B524761708/' },
        { text: '"I was lucky that there was a large supply of tuna caught by a customer, so we could have unlimited servings of tuna rice bowl." — June 2026.', source: R + 'B529423383/' },
        { text: '"They wrapped the shrimp in the corn after steaming and cooling it, then tempura-fried it, which created an interesting texture." — August 2026.', source: R + 'B534131014/' },
        { text: '"The chef is from Gifu, so we enjoyed Hoba Sushi and plenty of hairy crab." — June 2026.', source: R + 'B529650373/' },
      ],
      japanese_sources_summary: '公式サイト (muromachi-yui.jp): 京都烏丸御池の会席料理店、17:00〜20:30 (最終入店)、水曜定休、完全予約制、唯一無二の食事を目指して、市場に毎朝通い最高の食材だけを仕入れ、丹後の漁港と毎朝連絡、既成概念に捉われない献立、カウンター中心の内装と庭、季節に合わせた煎茶、ビンテージも含む日本酒、店主 前田一光 (MAEDA KAZUTERU): 岐阜県中津川市生まれ、料理屋を営む父親のもと幼少期から調理場に入る、高校卒業後に京都で修行、2019年12月に室町 唯の店主に就任。食べログ (店舗会員): 日本料理、中京区押小路通烏丸西入金吹町459、烏丸御池駅2番出口から徒歩3分、完全予約制 (前日まで)、おまかせコースのみ、10席 (カウンター)、貸切20名まで、カード可、2019年12月15日オープン。口コミ (2025年7月〜2026年9月、英語): コース30,000円、ミシュラン二つ星、ご飯のお供9〜10種、朴葉寿司、毛蟹、とうもろこしで巻いた海老の天ぷら、庭の見える曲線のカウンター。',
      confidence: 'medium', sources: [TB, SITE, R + 'B431628065/', R + 'B500529953/', R + 'B514080424/', R + 'B523749342/', R + 'B524761708/', R + 'B526134185/', R + 'B529423383/', R + 'B529650373/', R + 'B534131014/', R + 'B534964921/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book by the day before; one omakase course at a counter; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区押小路通烏丸西入金吹町459',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing (staff-maintained); reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.012215, 135.758609); cross-checked: GSI 京都府京都市中京区金吹町459番地 (lot) 50 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B514080424/', R + 'B534131014/'],
    price_note: 'No menu prices published; course price from July 2025 and August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omakase kaiseki course', '¥30,000', 'Dinner course', 'ask', 'no', 'July 2025; August 2026.', 'omakase'),
    ] }, {
    cuisine: '毎朝の市場と丹後の漁港の魚で作る、その日のおまかせ会席一本 (公式サイト、食べログの店舗紹介)・30,000円 (2025年7月、2026年8月)・たとえば赤ウニと鮑、毛蟹のしんじょう、骨をせんべいにした鮎、目の前でおろす鱧 (2025年7月)、岐阜出身の料理人の朴葉寿司と毛蟹、土鍋で炊いた Omi rice (2026年6月)、とうもろこしで巻いた海老の天ぷら (2026年8月)・ご飯には好きなだけ食べられるお供が9〜10種: ちりめん、なめこ、のり、カラスミ、岩魚の卵 (2026年の口コミ)・料理に合わせた日本酒 (ビンテージも)、季節の京都の煎茶 (公式サイト)、店主が選ぶワイン (2026年6月)',
    neighborhood: '烏丸の西の押小路通。烏丸御池駅から徒歩3分',
    gf_detail: '要確認。だしの椀、寿司、天ぷら、焼き物のおまかせ会席一本。グルテンの情報はない (公式サイト、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、貝、蟹、だしの会席 (2025〜2026年の口コミ)。',
    notes: '[会席・烏丸御池、庭を望む前田一光のカウンター] 静かな押小路の町家、庭に面した10席の曲線のカウンター。料理屋の家に生まれた岐阜出身の前田一光が、毎朝の市場と丹後の魚で一晩にひとつのおまかせ会席 (30,000円ほど) を出す。とうもろこしで巻いた海老の天ぷらなど遊び心のある料理のあと、土鍋ご飯に好きなだけ食べられるお供が9〜10種。口コミではミシュラン二つ星。前日までに予約、最終入店20時半、水曜休み。',
  });
}

// ================================================================ 研覃 ほりべ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26028283/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.kyoto-horibe.com/';
  const L = ['11:30', '14:00'], D = ['18:00', '22:00'];
  put({
    id: 'kyoto_kentan_horibe', name: '研覃 ほりべ (Kentan Horibe)', category: 'MOM_AND_POP',
    lat: 35.005073, lng: 135.757021, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto kaiseki of dashi-based soups, mackerel sushi, sashimi with soy-based dips, grilled and fried fish, simmered beef and rice with tsukudani; no gluten information (official site; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses are built on fish, soft-shelled turtle, Omi beef and dashi (2025–2026 reviews).',
    hours_raw: 'Lunch 11:30–12:30 last entry, closes 14:00; dinner 18:00–19:30 last entry, closes 22:00; closed Tuesday; reservation required (official site; Tabelog gives slightly different last entries). Phone bookings 14:00–17:00, or TableCheck; changes or cancellations by phone at least three days ahead; cancellation fees 25% two days before, 50% the day before, 100% on the day (official site). Even when Tabelog shows full, seats may be free by phone or the website (Tabelog). Dress code: no sweatpants, jeans, shorts or sandals; cover tattoos; no strong perfume (Tabelog). Children below elementary school age only in private rooms (Tabelog). 14 seats at a counter and tables, plus private rooms for 4–6 with a room charge of 10–20% of the food (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), no e-money or QR (Tabelog). In a townhouse on Nishikikoji west of Muromachi; 4 min walk from Shijo Stn / Karasuma Stn exits 22 and 24 (official site). Opened here 10 December 2016 (Tabelog).',
    hours: { 0: [L, D], 2: [L, D], 3: [L, D], 4: [L, D], 5: [L, D], 6: [L, D] }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishikikoji-dori west of Muromachi, in a townhouse — 4 min walk from Shijo Stn',
    cuisine: 'Kyoto cuisine built on the five flavours, five colours and five methods, in a townhouse with a small garden (Tabelog shop text) · lunch ¥12,000 and dinner ¥25,000 including tax and service (official site); Tabelog also lists "limited courses for foreign guests" at ¥15,000 for lunch (cash only) and ¥28,000 for dinner, seats not selectable, no children · a September 2026 lunch: grated-yam tofu with shrimp, soft-shelled turtle soup with egg tofu, Akashi sea bream, grilled bonito with sesame, fried hamo with Joyo figs, Omi beef with wasabi vinegar, Tango rice with hamo tsukudani, sudachi-champagne sorbet · seasonal hassun in a basket, cedar-plank grilled sawara, mackerel sushi, kue soup (2025 reviews) · sake such as Tsuru no Tomo, Kirin and Sapporo beer, champagne (2026 reviews) · New Year osechi to order (official site)',
    website: SITE, gmaps: gm('研覃 ほりべ 京都'), menu_url: SITE,
    notes: "[Kaiseki · Shijo Karasuma, 堀部努's Kyoto cuisine] A townhouse kaiseki restaurant on Nishikikoji with a small garden, a counter and private rooms, where 堀部努 — who cooked in Gion, at Gion Horibe, before moving here — serves monthly Kyoto courses: soft-shelled turtle soup, sea bream from Akashi, fried hamo with figs, a hassun in a basket. Lunch ¥12,000, dinner ¥25,000, tax and service included; Tabelog also sells pricier \"courses for foreign guests\". Michelin one star nine years running, per its site. Dress smartly; closed Tuesday.",
    chef_bio: { chef_name: '堀部 努 (Tsutomu Horibe)', roles: ['Owner-chef (店主, official site)'], origin: null,
      background: 'Per the official site: 研覃 (けんたん) means to pursue and explore deeply and to cultivate oneself; the owner signs as 店主 堀部 努; site news marks a Michelin one star for nine years running (July 2026) and the restaurant’s twentieth anniversary (August 2026). A September 2026 reviewer names the chef as Tsutomu Horibe, who honed skills in Gion and at "Gion Horibe" before moving to Karasuma; Tabelog dates this site from 10 December 2016. A November 2025 regular notes foreign guests at lunch; a July 2026 reviewer says the owner-chef and staff always seem to enjoy their work.',
      philosophy: 'Per the official site: to serve the world through cooking for the guest’s "delicious!", and to grow as people.',
      specialty: 'Seasonal Kyoto kaiseki; hassun; soft-shelled turtle soup.',
      anecdotes: [
        { text: '"Upon entering, the owner personally greeted us, and there was a natural warmth in the way the dishes were presented." — November 2025.', source: R + 'B488494456/' },
        { text: '"I asked about it, and they told me they grind the conger twice—a truly labor-intensive dish." — of the hamo surinagashi, August 2026.', source: R + 'B534635988/' },
        { text: '"The owner-chef and the staff always seemed to be enjoying their work, which left a lasting impression." — July 2026.', source: R + 'B518573761/' },
        { text: 'A November 2025 group of five paid ¥12,000 each for lunch plus a 5% private-room fee and found the hospitality worth it.', source: R + 'B422986395/' },
      ],
 japanese_sources_summary: '公式サイト (kyoto-horibe.com): 研覃 (けんたん) とは「深ク深ク追求スル、探求スル。又自分自身ヲ耕シ研鑽スル」という意、店主 堀部 努、昼餉12,000円・夕餉25,000円 (税・サ込)、昼11時30分〜12時30分 (最終入店) 14時閉店、夜18時00分〜19時30分 (最終入店) 22時閉店、火曜定休、電話予約は14時〜17時、TableCheck、キャンセル料 (2日前25%、前日50%、当日100%)、一つ星9年連続 (2026年7月)、二十周年 (2026年8月)、おせち、四条駅・烏丸駅22番・24番出口から徒歩4分。食べログ (店舗会員): 日本料理・海鮮・創作、中京区錦小路通室町西入ル天神山町273、外国人のお客様限定コース 昼15,000円 (現金のみ)・夜28,000円、ドレスコード、タトゥーは隠す、未就学児は個室のみ、14席、個室あり (個室料10〜20%)、カード可、2016年12月10日オープン、店舗紹介: 京都の五味・五色・五法、町家と坪庭。口コミ (2025年11月〜2026年9月、英語): 祇園時代からの名店、すっぽんと玉子豆腐の椀、Akashi の鯛、鱧の揚げ物と Joyo のいちじく、Omi beef、Tango のお米、八寸、杉板焼き。',
      confidence: 'medium', sources: [TB, SITE, R + 'B282490823/', R + 'B422986395/', R + 'B488494456/', R + 'B514795713/', R + 'B516972788/', R + 'B518573761/', R + 'B525094138/', R + 'B526858315/', R + 'B534635988/', R + 'B536708178/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead (phone 14:00–17:00 or TableCheck); smart dress; Tabelog sells separate, pricier courses for foreign guests.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区錦小路通室町西入ル天神山町273',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (2026 news) and Tabelog listing (staff-maintained); reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.005073, 135.757021); cross-checked: GSI 京都府京都市中京区天神山町273番地 (lot) 35 m; kyoto_india_gate_biryani is 29 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, TB],
    price_note: 'Official site (tax and service included); foreign-guest courses from Tabelog.', last_checked: TODAY, items: [
      it('昼餉', '', 'Lunch course', '¥12,000', 'Lunch', 'ask', 'no', 'Tax and service included.', 'lunch'),
      it('夕餉', '', 'Dinner course', '¥25,000', 'Dinner', 'ask', 'no', 'Tax and service included.', 'dinner'),
      it('', '', 'Limited course for foreign guests, lunch (cash only)', '¥15,000', 'Lunch', 'ask', 'no', 'Tabelog.', 'foreign_lunch'),
      it('', '', 'Limited course for foreign guests, dinner', '¥28,000', 'Dinner', 'ask', 'no', 'Tabelog.', 'foreign_dinner'),
    ] }, {
 cuisine: '京都の五味・五色・五法の料理、坪庭のある町家で (食べログの店舗紹介)・昼餉12,000円、夕餉25,000円、税・サ込 (公式サイト)。食べログには「外国人のお客様限定コース」昼15,000円 (現金のみ)、夜28,000円もあり、席の指定不可、子供不可・2026年9月の昼: つくね芋の豆腐と海老、すっぽんの椀と玉子豆腐、Akashi の鯛、胡麻の鰹のたたき、鱧の揚げ物と Joyo のいちじく、Omi beef のわさび酢、Tango のお米と鱧の佃煮、すだちとシャンパンのソルベ・籠の八寸、さわらの杉板焼き、鯖寿司、クエの椀 (2025年の口コミ)・日本酒 (Tsuru no Tomo など)、キリンとサッポロのビール、シャンパン (2026年の口コミ)・正月のおせち (公式サイト)',
    neighborhood: '室町の西の錦小路通の町家。四条駅から徒歩4分',
    gf_detail: '要確認。だしの椀、鯖寿司、醤油の付けだれの刺身、焼き魚や揚げ物、牛肉の煮物、佃煮のご飯の京料理の会席。グルテンの情報はない (公式サイト、2025〜2026年の口コミ)。',
 vegan_detail: 'ヴィーガン不可。魚、すっぽん、Omi beef、だしの会席 (2025〜2026年の口コミ)。',
 notes: '[会席・四条烏丸、堀部努の京料理] 錦小路の坪庭のある町家の会席料理。カウンターと個室。祇園の Gion Horibe から移った堀部努が、月替わりの京料理を出す: すっぽんの椀、Akashi の鯛、鱧の揚げ物といちじく、籠の八寸。昼12,000円、夜25,000円、税・サ込。食べログでは別に高めの「外国人のお客様限定コース」も。サイトによればミシュラン一つ星9年連続。服装はきちんと。火曜休み。',
  });
}

save();
