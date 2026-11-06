// Kyoto priority (kyoto-missed), worker osw13, batch 45 — lane: Tabelog id mod 6 = 0.
// Core: 日常茶飯, ひゃくてんまんてん. Notable: バイタルサイン, くずし理.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-45');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 日常茶飯
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26022510/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00'], ['18:00', '21:00']);
  put({
    id: 'kyoto_nichijo_sahan', name: '日常茶飯 (Nichijo Sahan)', category: 'OMNI',
    lat: 35.008534, lng: 135.762659, cuisine_type: 'shokudo',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; one set meal of the day with simmered dishes in soy-based sauces, miso soup, rice and pickles (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the day’s main has been chicken meatballs, minced-meat sauce or marinated horse mackerel, with miso soup (2026 reviews).',
    hours_raw: 'Tabelog: Thu–Tue 12:00–15:00 and 18:00–21:00; closed Wednesday; hours may change. No reservations; queues of up to 30–45 minutes at busy times (June and October 2026). 18 seats: tables, a sofa for 4–5, a small counter; third floor of a building, hard to find (2026 reviews). Smoking area; no smoking at lunch (Tabelog). Cash only — no cards, e-money or QR (Tabelog). No service charge listed on Tabelog.',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Sanjo-Takakura, third floor — about 7–10 min walk from Karasuma Oike Stn',
    cuisine: 'One-man set-meal café: a single "one soup, three dishes" set of the day, ¥1,000, with five-grain brown rice or seasoned rice, miso soup and pickles; a bigger portion for a little more at lunch (2026 reviews) · mains seen: thick fried tofu with minced-meat sauce and simmered daikon, chicken meatballs with fried tofu, marinated small horse mackerel; sides of lotus-root and konnyaku kinpira, onion salad, vinegared pumpkin (2026 reviews) · sake, shochu, wine (Tabelog)',
    website: null, gmaps: gm('日常茶飯 三条高倉 白鳥ビル'), menu_url: null,
    notes: '[Set meals · Sanjo-Takakura, one man and one soup, three dishes] Up three floors among antiques, a quiet owner cooks and serves alone: one ¥1,000 set a day — a simmered main, two small sides, brown rice, miso soup, pickles — gentle, vegetable-rich Kyoto home cooking that diners call nourishing. Expect a wait at noon and in the evening. A hot May 2026 day with only a fan was uncomfortable. Cash only. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner, cooking and serving alone (August 2026: "run by a quiet gentleman, operating solo")'], origin: null,
      background: 'Reviewers in 2026 describe a café on the third floor of a building near Sanjo-Takakura, furnished with antiques and vintage pieces, where one person runs everything and serves a single daily set of one soup and three dishes for ¥1,000.',
      philosophy: null,
      specialty: 'Ichiju-sansai set of the day.',
      anecdotes: [
        { text: 'A March 2026 diner who could not find the place at night was walked to the door by a staff member from a nearby okonomiyaki shop.', source: R + 'B524017761/' },
        { text: 'Turned away at 6:30 pm in June 2026, a diner came back 45 minutes later; on leaving, the diner received an apology for the earlier brusque welcome.', source: R + 'B530052292/' },
        { text: '"It was a bit warm that day, and despite having air conditioning, only a fan was on, making it somewhat uncomfortable." — May 2026.', source: R + 'B528007622/' },
      ],
      japanese_sources_summary: '食べログ: 日常茶飯、カフェ・食堂、中京区枡屋町55 三条高倉白鳥ビル3F、烏丸御池駅から徒歩約10分、木〜火 12:00〜15:00・18:00〜21:00、水曜休み、予約不可、18席 (テーブル8、ソファ4〜5、カウンター6)、分煙 (昼は禁煙)、カード・電子マネー・QR不可。口コミ (2026年3月〜10月、英語): 一汁三菜の日替わり定食1,000円、五穀米や炊き込みご飯、味噌汁、漬物、昼は大盛り可、厚揚げのそぼろあんと大根、鶏つくねと厚揚げ、小鯵の南蛮漬け、蓮根とこんにゃくのきんぴら、オニオンサラダ、骨董に囲まれた店内、物静かな店主が一人で営業、昼も夜も待つことがある、暑い日に扇風機だけだったという声。',
      confidence: 'medium', sources: [TB, R + 'B524017761/', R + 'B528007622/', R + 'B529288219/', R + 'B529545187/', R + 'B529720812/', R + 'B530052292/', R + 'B530880470/', R + 'B532964188/', R + 'B535835973/', R + 'B537839655/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One set meal, so no menu to read; queue at busy times; cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区枡屋町55 三条高倉白鳥ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.008534, 135.762659); cross-checked: GSI 京都府京都市中京区桝屋町55番地 (lot) 23m; ひゃくてんまんてん (this batch) 25 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B528007622/', R + 'B537839655/'],
    price_note: 'Price from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'One soup, three dishes set of the day', '¥1,000', 'Set', 'ask', 'no', 'Larger portion extra at lunch.', 'teishoku'),
    ] }, {
    cuisine: '一人で営む定食の店: 日替わりの一汁三菜の定食一つ、1,000円、五穀米や炊き込みご飯、味噌汁、漬物、昼は追加料金で大盛り (2026年の口コミ)・これまでの主菜: 厚揚げのそぼろあんと炊いた大根、鶏つくねと厚揚げ、小鯵の南蛮漬け、小鉢は蓮根とこんにゃくのきんぴら、オニオンサラダ、南瓜の酢の物 (2026年の口コミ)・日本酒、焼酎、ワイン (食べログ)',
    neighborhood: '三条高倉、ビルの3階。烏丸御池駅から徒歩7〜10分',
    gf_detail: '要確認。グルテンの情報なし。醤油の味付けの煮物、味噌汁、ご飯、漬物の日替わり定食 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 主菜は鶏つくね、そぼろあん、小鯵の南蛮漬けなどで、味噌汁もつく (2026年の口コミ)。',
    notes: '[定食・三条高倉、一人で一汁三菜] 骨董に囲まれたビルの3階で、物静かな店主が一人で作り一人で出す。日替わりの1,000円の定食一つだけで、煮物の主菜に小鉢二つ、玄米、味噌汁、漬物の、やさしく野菜たっぷりの京の家庭料理。昼も夜も待つことがある。2026年5月の暑い日は扇風機だけで暑かったという声も。現金のみ。水曜休み。',
  });
}

// ================================================================ ひゃくてんまんてん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26003190/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['11:00', '22:30']); const SU = day(['11:00', '19:00']);
  put({
    id: 'kyoto_hyakuten_manten', name: 'ひゃくてんまんてん (Hyakuten Manten)', category: 'OMNI',
    lat: 35.008527, lng: 135.762385, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat ramen noodles in a thick curry broth; curry rice made with a roux (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the curry broth is built on dashi and the ramen comes with chashu (2026 reviews).',
    hours_raw: 'Tabelog: Mon–Sat 11:00–22:30; Sun and holidays 11:00–19:00. Bookings taken; banquets for two or more from ¥4,000; private hire for 25–36. 36 seats: 12 at the counter, 24 at tables. Smoking allowed (Tabelog). No cards (Tabelog). No service charge listed on Tabelog. Weekday sets until 14:00 come with rice or a mini curry (Tabelog).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: WK, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Sanjo-Takakura, on the south side of the Museum of Kyoto, upstairs — 3 min walk from Karasuma Oike Stn',
    cuisine: 'Curry-ramen diner and izakaya · signature curry ramen in a thick, spiced broth with thin noodles, chashu, green onion and bean sprouts — ¥780 on Tabelog, ¥1,100 in October 2026 · homemade curry rice simmered two days with 38 spices, ¥680 (Tabelog) · daily sets of shoyu or miso ramen with a mini curry; curry udon; rice set ¥200 with kimchi (2026 reviews) · banquets from ¥4,000 (Tabelog)',
    website: null, gmaps: gm('ひゃくてんまんてん 三条高倉 くらしハウス'), menu_url: null,
    notes: '[Curry ramen · Sanjo-Takakura, an old-style diner] Up the stairs beside the Museum of Kyoto, a nostalgic diner known for curry ramen: a thick, dashi-rich curry broth clinging to thin noodles, with fukujinzuke to stir in and rice for the last of the soup. Daily sets pair shoyu or miso ramen with a mini curry. Regulars love it; one found the noodles unremarkable. Open late on weekdays. Smoking allowed; no cards.',
    chef_bio: { chef_name: null, roles: ['Owner who makes the curry daily (Tabelog); not named'], origin: null,
      background: 'Tabelog says the owner makes the curry every day, simmering it for two days with 38 spices, and describes a bright, nostalgic diner for everyone from solo diners to families, with banquets for regulars. A September 2026 reviewer calls it a long-established ramen shop; an October 2026 diner was greeted by two friendly women and noticed a noodle-making machine by the second-floor entrance.',
      philosophy: null,
      specialty: 'Curry ramen; curry rice.',
      anecdotes: [
        { text: '"I had known for years that this place served curry ramen, but I was always hesitant to step inside due to the unassuming entrance." — October 2026.', source: R + 'B538203740/' },
        { text: '"The noodles were unremarkable, but the curry broth was classic and well-prepared." — September 2026.', source: R + 'B536555530/' },
        { text: 'A curry-ramen regular tried the daily miso ramen and mini curry set in November 2026 and found a new favourite.', source: R + 'B535153297/' },
      ],
      japanese_sources_summary: '食べログ: ひゃくてんまんてん、ラーメン・カレー・居酒屋、中京区三条高倉西入ル京都文化博物館南側 くらしハウス2F、烏丸御池駅から徒歩3分、月〜土 11:00〜22:30、日・祝 11:00〜19:00、予約可、宴会は2名から4,000円〜、貸切25〜36名、36席 (カウンター12、テーブル24)、喫煙可、カード不可、店主が毎日作る38種のスパイスで2日煮込んだカレーライス680円、一番人気のカレーラーメン780円、平日14時までのセットはライスかミニカレー付き。口コミ (2025年11月〜2026年11月、英語): カレーラーメン1,100円 (2026年10月)、ライスセット200円とキムチ、細麺、チャーシュー、ねぎ、もやし、福神漬け、日替わりの醤油や味噌ラーメンとミニカレーのセット、カレーうどん、老舗、昭和の食堂のような雰囲気、二人の女性スタッフ、2階入口に製麺機、麺は普通という声。',
      confidence: 'medium', sources: [TB, R + 'B533510157/', R + 'B534652535/', R + 'B535153297/', R + 'B535179255/', R + 'B535185094/', R + 'B535244501/', R + 'B535428185/', R + 'B536555530/', R + 'B537703942/', R + 'B538203740/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter or table; cash only; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区三条高倉西入ル京都文化博物館南側 くらしハウス２Ｆ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.008527, 135.762385); the address has no lot number and GSI returns only 中京区 (ward level), so the pin stays on the Tabelog point; 日常茶飯 (this batch) 25 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B538203740/'],
    price_note: 'Tabelog’s introduction gives older prices; an October 2026 review gives ¥1,100 for curry ramen.', last_checked: TODAY, items: [
      it('', '', 'Curry ramen', '¥1,100', 'Ramen', 'no', 'no', 'October 2026; ¥780 on Tabelog.', 'curry_ramen'),
      it('', '', 'Curry rice', '¥680', 'Curry', 'no', 'no', 'Tabelog.', 'curry_rice'),
      it('', '', 'Rice set', '¥200', 'Side', 'ask', 'ask', 'October 2026.', 'rice'),
    ] }, {
    cuisine: 'カレーラーメンの食堂と居酒屋・名物のカレーラーメンはスパイスの効いたとろみのあるつゆに細麺、チャーシュー、ねぎ、もやし。食べログでは780円、2026年10月は1,100円・店主手作りの38種のスパイスで2日煮込むカレーライス680円 (食べログ)・醤油や味噌ラーメンとミニカレーの日替わりセット、カレーうどん、キムチ付きのライスセット200円 (2026年の口コミ)・宴会4,000円から (食べログ)',
    neighborhood: '三条高倉、京都文化博物館の南側の2階。烏丸御池駅から徒歩3分',
    gf_detail: 'グルテンフリーではない: 小麦のラーメンにとろみのあるカレーのつゆ、ルウのカレーライス (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: カレーのつゆはだしがベースで、ラーメンにはチャーシュー (2026年の口コミ)。',
    notes: '[カレーラーメン・三条高倉、昔ながらの食堂] 京都文化博物館の横の階段を上った懐かしい食堂。名物はだしの効いたとろみのあるカレーのつゆが細麺に絡むカレーラーメンで、福神漬けを入れ、残ったつゆにはご飯を。日替わりで醤油や味噌ラーメンとミニカレーのセットも。常連に愛され、麺は普通という声も。平日は夜遅くまで。喫煙可、カード不可。',
  });
}

// ================================================================ バイタルサイン
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26025654/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:30']);
  put({
    id: 'kyoto_vital_sign', name: 'バイタルサイン (Vital Sign)', category: 'OMNI',
    lat: 35.002384, lng: 135.769992, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; vegetable plates sit beside pasta, couscous salad and pâté (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Vegetables lead — Kamo eggplant steak, hummus, grilled zucchini, herb salads — but many plates add fish, oysters, prosciutto, duck or pork (2025–2026 reviews).',
    hours_raw: 'Tabelog: Mon–Sat 18:00–23:30; closed Sunday; hours may change. Bookings taken; Instagram bookings at least two days ahead; urgent matters by phone (Tabelog). A 3% fee is added when paying by card (Tabelog; Japanese original 「クレジット使用時、手数料3%上乗せ」); no e-money or QR. 23 seats including a counter; non-smoking inside, ashtray under the eaves outside (Tabelog). Opened 1 April 2015 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'A quiet alley near Shijo-Kawaramachi, close to the Kamo River — 199 m from Kyoto Kawaramachi Stn',
    cuisine: 'Creative vegetable dishes and natural wine, mostly Italian in style, with organic vegetables from Shizuhara and Tango (2026 reviews) · seen: Kamo eggplant steak, hummus, grilled zucchini, herb salad of okra and moringa on couscous, sansho pâté, bonito carpaccio, oysters with turnip and turnip-green sauce on yuzu spaghetti, chestnut cream pasta with mushrooms and chicken, duck with red-wine sauce, roast pork with red wine and miso, red-shrimp américaine, white miso with prosciutto and Shine Muscat (2025–2026 reviews) · desserts such as jasmine-tea tiramisu, chamomile-jelly panna cotta, affogato (2026 reviews) · natural wine, Belgian beer, non-alcoholic cocktails (2025–2026 reviews)',
    website: 'http://baitarusain.tumblr.com/', gmaps: gm('バイタルサイン 船頭町 京都'), menu_url: null,
    notes: '[Vegetables & natural wine · Shijo-Kawaramachi back alley] A dim, minimal room in a quiet alley off Kawaramachi where one chef cooks generous, inventive plates from organic Shizuhara and Tango vegetables — Kamo eggplant steak, oysters with turnip-green sauce on yuzu spaghetti, sansho pâté — to go with natural wine. With one cook, plates come slowly but well timed. 3% extra on cards. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Chef who cooks alone (February 2026: "the chef prepares everything by himself"); not named'], origin: null,
      background: 'Opened 1 April 2015 (Tabelog). A February 2026 regular on a fourth visit describes organic vegetables from Kyoto’s Shizuhara and Tango, natural wines and non-alcoholic cocktails, all cooked by one chef; an April 2026 diner describes a concrete-toned, dimly lit, minimalist room.',
      philosophy: null,
      specialty: 'Vegetable plates; natural wine.',
      anecdotes: [
        { text: '"The serving speed was slow, but they timed it perfectly with the meal." — May 2026.', source: R + 'B527755999/' },
        { text: 'A February 2026 regular still remembers the oysters with turnip and turnip-green sauce on yuzu spaghetti.', source: R + 'B524891247/' },
        { text: '"The assorted appetizers were packed with vegetables, so if you\'re craving fish, you might want to choose the carpaccio instead." — October 2026.', source: R + 'B538120017/' },
      ],
      japanese_sources_summary: '食べログ: バイタルサイン、野菜料理・創作料理・ワインバー、下京区船頭町235、京都河原町駅から199m、月〜土 18:00〜23:30、日曜休み、予約可 (Instagram からは2日前まで)、急ぎは電話、カード利用は手数料3%上乗せ、電子マネー・QR不可、23席、店内禁煙 (店外の軒下に灰皿)、2015年4月1日オープン。口コミ (2025年10月〜2026年10月、英語): Shizuhara と Tango の有機野菜、ナチュールワイン、ノンアルコールカクテル、料理人が一人で作る、賀茂茄子のステーキ、フムス、ズッキーニのグリル、オクラとモリンガとクスクスのハーブサラダ、山椒のパテ、鰹のカルパッチョ、牡蠣と蕪と蕪の葉のソースの柚子のスパゲッティ、栗のクリームパスタ、鴨の赤ワインソース、豚のロースト、赤海老のアメリケーヌ、白味噌と生ハムとシャインマスカット、ジャスミン茶のティラミス、カモミールのパンナコッタ、アフォガート、提供はゆっくり、静かな路地の薄暗くミニマルな店内。',
      confidence: 'medium', sources: [TB, R + 'B514686921/', R + 'B517007545/', R + 'B524891247/', R + 'B526486073/', R + 'B527335254/', R + 'B527755999/', R + 'B527881435/', R + 'B528888313/', R + 'B534097145/', R + 'B538120017/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'À la carte at the counter or tables; book ahead, by Instagram two days in advance.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区船頭町235',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002384, 135.769992); cross-checked: GSI 京都府京都市下京区船頭町235番地 (lot) 18m; kyoto_takasegawa_maki 27 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No prices published; reviewers spent ¥3,000–9,999 a head (2025–2026).', last_checked: TODAY, items: [
      it('', '', 'Seasonal vegetable plates (à la carte)', '', 'Food', 'ask', 'ask', 'Price not given.', 'vegetables'),
      it('', '', 'Natural wine by the glass', '', 'Drink', 'ask', 'ask', 'Price not given.', 'wine'),
    ] }, {
    cuisine: 'Shizuhara と Tango の有機野菜を使ったイタリアン寄りの創作野菜料理とナチュールワイン (2026年の口コミ)・これまでの料理: 賀茂茄子のステーキ、フムス、ズッキーニのグリル、オクラとモリンガのクスクスのハーブサラダ、山椒のパテ、鰹のカルパッチョ、牡蠣と蕪と蕪の葉のソースの柚子のスパゲッティ、栗のクリームパスタ、鴨の赤ワインソース、赤ワインと味噌の豚のロースト、赤海老のアメリケーヌ、白味噌と生ハムとシャインマスカット (2025〜2026年の口コミ)・ジャスミン茶のティラミス、カモミールのパンナコッタ、アフォガートなどのデザート (2026年の口コミ)・ナチュールワイン、ベルギービール、ノンアルコールカクテル (2025〜2026年の口コミ)',
    neighborhood: '四条河原町近く、鴨川のそばの静かな路地。京都河原町駅から199m',
    gf_detail: '要確認。グルテンの情報なし。野菜料理のほかパスタ、クスクスのサラダ、パテもある (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。賀茂茄子のステーキ、フムス、ズッキーニのグリル、ハーブサラダなど野菜が主役だが、魚、牡蠣、生ハム、鴨、豚を合わせる皿も多い (2025〜2026年の口コミ)。',
    notes: '[野菜とナチュールワイン・四条河原町の路地] 河原町の静かな路地の薄暗くミニマルな店で、料理人が一人で Shizuhara と Tango の有機野菜を使った量たっぷりの創作料理を作る。賀茂茄子のステーキ、牡蠣と蕪の葉のソースの柚子のスパゲッティ、山椒のパテにナチュールワイン。一人なので提供はゆっくりだがタイミングはいい。カードは3%上乗せ。日曜休み。',
  });
}

// ================================================================ くずし理
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26036520/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.kuzushi-kotowari.com/';
  const H = day(['18:00', '22:30']);
  put({
    id: 'kyoto_kuzushi_kotowari', name: 'くずし理 (Kuzushi Kotowari)', category: 'OMNI',
    lat: 34.997630, lng: 135.763446, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information; the course uses house-made soy sauces, tempura (hamo, soft roe) and a foie-gras sushi with a ginger-pork style sauce (official site; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish and meat course on dashi from bonito, vegetables and fish (official site).',
    hours_raw: 'Tabelog: Thu–Tue and holidays 18:00–22:30; closed Wednesday and the last day of each month, plus irregular days. One course a night, ¥8,800 tax included, starting together at 18:00 (official site; December 2024); foie-gras sushi ¥800 extra (Tabelog). A ¥300 charge applies if no drink is ordered (Tabelog; Japanese original 「ドリンクのご注文がない場合は、チャージ料として300円(税込)頂戴いたします。」). Bookings by phone or TableCheck (official site). 16 seats: 10 at the counter, a tatami room upstairs for up to 6; non-smoking; children welcome if counted for the adult course; please avoid strong perfume (Tabelog). Cards and PayPay. Opened 1 October 2021 (official site; Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Between Shijo and Gojo — 10 min walk from Gojo Stn and Kiyomizu-Gojo Stn',
    cuisine: '"Kuzushi kappo": creative Japanese with Western touches, one monthly course of about eight dishes for ¥8,800 (official site) · sakizuke, five small appetizers, a soup, sashimi with house-made vegetable soy sauces (grilled-corn soy with flounder), a main "kuzushi" dish, a vinegared course, rice and dessert (official site) · seen: hamo tempura with green-plum purée, asparagus and isaki in clam broth with truffle oil, Kamo eggplant dengaku with grilled-ayu sauce, buri and turnip, soft-roe tempura, guji rice, sakura-shrimp mochi in white miso, cold dashi chazuke with jelly (official site; 2024–2026 reviews) · foie-gras sushi ¥800 (Tabelog)',
    website: SITE, gmaps: gm('くずし理 俵屋町 京都'), menu_url: SITE,
    notes: '[Creative kappo · Shijo-Gojo, one course at six] A ten-seat counter that sets out to "break down" stiff kappo: one ¥8,800 monthly course at 18:00, mixing Japanese technique with Western touches — sashimi with house vegetable soy sauces, hamo tempura with green-plum purée, guji rice — plus the much-ordered foie-gras sushi. Diners call it remarkable value and the service relaxed. ¥300 charge without a drink; no strong perfume. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef from Mie (official site: 生まれ故郷である三重); not named. A July 2025 diner found it run by three men.'], origin: 'Mie Prefecture, per the official site (「生まれ故郷である三重産をはじめ」).',
      background: 'Per the official site: opened in October 2021 near Gojo Station aiming to be an everyday kappo, breaking down the formal image of kappo in both mood and food for younger diners; one reasonably priced ¥8,800 course; traditional Japanese technique with Western elements; the name’s 理 recalls 北大路魯山人’s saying that cooking is measuring the principle of things; ingredients from the owner’s home of Mie and from Kyoto (vegetables, hamo, ayu); dashi from bonito, vegetables and fish used by dish; house-made soy sauces blended with seasonal vegetable sauces; antique and contemporary tableware chosen by season.',
      philosophy: 'Official site: 崩しつつも細部まで妥協しない本格和食 — breaking down the stiffness of kappo while never compromising on detail.',
      specialty: 'Monthly ¥8,800 course; foie-gras sushi; house vegetable soy sauces.',
      anecdotes: [
        { text: 'A December 2024 guest who arrived early found the owner hanging the noren and was invited in; by 18:00 nine guests had arrived for the single seating.', source: R + 'B498334206/' },
        { text: '"Given the quality, it felt a bit too affordable, which made me a little worried." — January 2025.', source: R + 'B514861711/' },
        { text: 'A November 2026 regular on a third visit wondered whether the sudachi and crab on the sesame tofu were really needed.', source: R + 'B506380848/' },
      ],
      japanese_sources_summary: '公式サイト (kuzushi-kotowari.com): くずし理 (くずしことわり)、日常使いのできる割烹を目指し2021年10月に五条駅近くに開店、割烹の格式高く堅苦しいイメージを雰囲気と料理の両面から崩したい、若い人にも気軽に、お品書きは8,800円のディナーコース一つ、伝統的な日本料理の技法に洋食の要素、店名の「理」は北大路魯山人の「料理とは、理を料ること」から、毎月変わるコース、生まれ故郷である三重産をはじめ京野菜、ハモ、鮎、出汁は鰹や野菜や魚から、造りや前菜の手作り醤油に野菜のソース、骨董と現代作家の器、先付 (ハモの天ぷらと青梅のすり流し)、前菜5種、椀 (あさり出汁のアスパラとイサキ、トリュフオイル)、造り (ヒラメに焼きとうもろこし醤油)、くずし (賀茂茄子の田楽に焼き鮎の餡)、酢の物 (アコウの昆布締め)、2025年12月30日〜2026年1月7日は年末年始休み、TableCheck で予約。食べログ: 日本料理・海鮮、下京区万寿寺通堺町東入俵屋町239-2、木〜火・祝 18:00〜22:30、水曜と毎月末日休み、不定休、ドリンクの注文がない場合はチャージ料300円 (税込)、16席 (カウンター10、座敷6)、禁煙、子供は大人と同じコースなら可、香水など強い香りは控えて、カード・PayPay 可、追加のフォアグラ寿司800円、2021年10月1日オープン。口コミ (2024年10月〜2026年11月、英語): 18時一斉スタート、8,800円のコース、フォアグラの握り、酢のジュレ、鯛と春菊と柚子のたれ、白子の天ぷら、ぐじのご飯、桜海老の餅と白味噌、冷たい出汁茶漬け、男性3人で営む、値段の割に安すぎて心配になるほど。',
      confidence: 'medium', sources: [TB, SITE, R + 'B494531907/', R + 'B498334206/', R + 'B503493918/', R + 'B506380848/', R + 'B508277111/', R + 'B509800129/', R + 'B514281466/', R + 'B514861711/', R + 'B516096026/', R + 'B536359263/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One course at a single 18:00 start, each dish explained (September 2026); book ahead; avoid strong perfume.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区万寿寺通堺町東入俵屋町239-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (34.997630, 135.763446); cross-checked: GSI 京都府京都市下京区俵屋町239番地 (lot) 60m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, TB],
    price_note: 'Course price from the official site (tax included); foie-gras sushi from Tabelog.', last_checked: TODAY, items: [
      it('月替わりコース', '', 'Monthly course', '¥8,800', 'Course', 'ask', 'no', 'Tax included.', 'course'),
      it('', '', 'Foie-gras sushi (extra)', '¥800', 'Extra', 'ask', 'no', 'Tabelog.', 'sushi'),
      it('', '', 'Charge if no drink is ordered', '¥300', 'Charge', 'ask', 'ask', 'Tabelog.', 'cover'),
    ] }, {
    cuisine: '「くずし割烹」: 洋の要素を加えた独創的な和食で、毎月替わる8品ほどのコース一つ、8,800円 (公式サイト)・先付、前菜5種、椀、野菜のソースを合わせた手作り醤油のお造り (ヒラメに焼きとうもろこし醤油)、主役の「くずし」、酢の物、ご飯、デザート (公式サイト)・これまでの料理: ハモの天ぷらと青梅のすり流し、あさり出汁のアスパラとイサキにトリュフオイル、賀茂茄子の田楽に焼き鮎の餡、ぶりと蕪、白子の天ぷら、ぐじのご飯、桜海老の餅の白味噌仕立て、冷たい出汁茶漬けとジュレ (公式サイト、2024〜2026年の口コミ)・フォアグラ寿司800円 (食べログ)',
    neighborhood: '四条と五条の間の万寿寺通。五条駅・清水五条駅から徒歩10分',
    gf_detail: '予約時に要確認。グルテンの情報なし。コースには手作りの醤油、天ぷら (鱧、白子)、生姜焼き風のたれのフォアグラ寿司がある (公式サイト、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 鰹、野菜、魚からとる出汁の、魚と肉のコース (公式サイト)。',
    notes: '[くずし割烹・四条〜五条、18時のコース一本] 堅苦しい割烹を「崩す」カウンター10席の店。毎月替わる8,800円のコースを18時に一斉に始め、和の技法に洋の要素を加える。野菜のソースの手作り醤油のお造り、ハモの天ぷらと青梅のすり流し、ぐじのご飯、追加で人気のフォアグラ寿司。値段の割に驚くほどの内容で、接客も気さくという声。ドリンクなしは300円、強い香水は不可。水曜休み。',
  });
}

save();
