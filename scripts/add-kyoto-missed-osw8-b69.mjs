// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 69.
//   + 蜃氣楼 Shinkirou (obanzai and sake in a Miyagawa-cho machiya; rest)
//   + 脂過多ブラ Abrakadabra (1:00–7:00 ramen in a Gion alley; rest)
//   + びーんず亭 Beans Tei (self-roasting bean shop and coffee stand by Nishiki; rest)
//   + 天ぷらの店 玄 Tempura no Mise Gen (couple-run tempura and tendon counter, Kiyamachi-Sanjo; rest)
//   Rest list (mod 6 = 1) after batch 68, nearest-first — skipped:
//   - 鳴門鯛焼本舗 三条寺町店 26022883: chain (twelve 鳴門鯛焼本舗 shops in our crawls; same call as 26038499, osw9-58).
//   - bar 923 26042149: thin listing, 3 reviews.
//   - あいよっ！ 三条富小路店 26032591: chain (eight あいよっ shops in our Kyoto crawl).
//   Brand check: queue-status.jsonl grepped for 蜃氣楼, 脂過多, びーんず, 天ぷらの店 玄 — no earlier entries. 蜃氣楼 is run by
//   MASTERMIND株式会社 (mrmd.co.jp, read 2026-11-07: shinkiro, haru, misato, toudou, brisket rony; a May 2026 review adds
//   Gyoza Ryo Sho, Uru and Ristorante Miso), the operator of ぎょうざ処 亮昌, already in data — a local group of distinct
//   concepts, drafted as a sister concept and flagged for the coordinator. None is in data/kyoto.json (main bb3f5a44) by name.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-69');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260202/26022883/', 'chain: 鳴門鯛焼本舗 — twelve shops in our crawls (Kyoto, Osaka, Tokyo); same call as 26038499 (osw9-58)');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26042149/', 'thin listing: 3 reviews');
skip('https://tabelog.com/en/kyoto/A2601/A260202/26032591/', 'chain: あいよっ — eight shops in our Kyoto crawl (八条口, 京都駅前七条, 京都駅西, 丸太町府庁前, 出町柳駅, 烏丸蛸薬師, 三条富小路, 二条駅)');

// ================================================================ 蜃氣楼 Shinkirou
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26002501/'; const R = TB + 'dtlrvwlst/'; const WEB = 'http://mrmd.co.jp/shinkiro/';
  const H = day(['11:30', '14:30'], ['17:30', '23:00']);
  put({
    id: 'kyoto_shinkirou_miyagawacho', name: '蜃氣楼 (Shinkirou)', category: 'OMNI',
    lat: 34.99832941787701, lng: 135.76998429028788, cuisine_type: 'obanzai',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: tempura and karaage among the lunch mains, red miso soup and soy-seasoned obanzai (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based obanzai, fish, chicken and duck (Tabelog; 2025–2026 reviews).',
    hours_raw: 'Daily 11:30–14:30 (last order 14:00) and 17:30–23:00 (last order 22:30); closing days irregular (Tabelog). Reservations accepted and advised — walk-ins have been turned away when full (Tabelog; August 2026). Cards (VISA, Master, JCB, AMEX, Diners) and e-money; no QR (Tabelog). 36 seats at counter and tables; two private rooms upstairs for 7–10 each, one tatami, up to 20 for private hire (Tabelog). Shoes off at the entrance (May and August 2026). Non-smoking; ashtray outside (Tabelog). Miyagawa-cho, 3 min walk from Keihan Kiyomizu-Gojo Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Miyagawa-cho, near Kiyomizu-Gojo',
    cuisine: 'Kyoto obanzai and junmai-focused sake in a machiya, with Kyoto vegetables and duck (Tabelog) · lunch one-plate ¥1,800: about twenty obanzai, tofu, rice and red miso soup, plus two of tempura, sashimi, karaage or the daily special such as miso-braised chicken or simmered fish (December 2025–September 2026) · dinner of seasonal Kyoto vegetables and duck dishes with sake; most dishes can be made in a single portion (Tabelog; August 2026) · lunch about ¥1,000–2,000, dinner about ¥4,000–6,000 (Tabelog)',
    website: WEB, gmaps: gm('蜃氣楼 宮川町'), menu_url: null,
    notes: '[Obanzai · Miyagawa-cho machiya] A shoes-off townhouse in the Miyagawa-cho geisha quarter: the ¥1,800 lunch plate brings some twenty little obanzai with your choice of two mains — sashimi, tempura, karaage or the daily special — and evenings pair Kyoto vegetables and duck with junmai sake. Book ahead; walk-ins are often full.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog: an obanzai and sake restaurant in Miyagawa-cho with a second-floor private room. Its website is part of MASTERMIND株式会社, a Kyoto restaurant company; a May 2026 reviewer notes the same group runs Gyoza Ryo Sho and other restaurants. A November 2024 lunch guest saw two people handling cooking and service.',
      philosophy: 'Simple Japanese food with a little finesse, Kyoto vegetables, and junmai sake (Tabelog).', specialty: 'Obanzai lunch plate.',
      anecdotes: [
        { text: 'A May 2026 lunch guest glimpsed a maiko performing upstairs for a group of overseas visitors.', source: R + 'B528989374/' },
        { text: 'An August 2026 solo traveller was told almost every dish could be made for one, and made many requests.', source: R + 'B533357812/' },
        { text: 'An August 2026 couple who booked the day before watched walk-ins turned away for lack of seats.', source: R + 'B533233798/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・郷土料理・海鮮、東山区宮川筋6丁目361、京阪清水五条駅から徒歩3分、毎日 11:30〜14:30 (L.O.14:00)、17:30〜23:00 (L.O.22:30)、不定休、予約可、カード (VISA・Master・JCB・AMEX・Diners)・電子マネー可、QR 不可、36席、2階に個室 (座敷・テーブル各1、7〜10名)、20名まで貸切可、禁煙 (店外に灰皿)、宮川町の京のおばんざいと純米酒中心の日本酒、京野菜と鴨の料理。公式サイト: MASTERMIND株式会社のサイト内。口コミ (2024年11月〜2026年9月、英語): 1,800円のワンプレートランチ (おばんざい約20種、豆腐、ご飯、赤だし、天ぷら・刺身・唐揚げ・日替わりから2品)、日替わりは鶏の味噌煮や魚のあら炊き、靴を脱いで上がる町家、2階で舞妓の舞 (2026年5月)、ほとんどの料理を一人前で頼める (2026年8月)、予約なしの客が入れなかった (2026年8月)、亮昌などを運営するグループの店との声 (2026年5月)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B495722548/', R + 'B522239822/', R + 'B527278214/', R + 'B528989374/', R + 'B529266839/', R + 'B531254596/', R + 'B533233798/', R + 'B533357812/', R + 'B534151312/', R + 'B535743461/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Shoes off; book ahead; cards and IC.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区宮川筋6丁目361',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and operator site; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (34.998329, 135.769984); cross-checked: GSI 京都府京都市東山区宮川筋六丁目361番地 (lot) 6 m; nearest existing record 6.6 m (kyoto_miyagawacho_hotta, 6-359-4); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B495722548/', R + 'B529266839/'],
    price_note: 'Prices from December 2025 and May 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Obanzai lunch plate with two mains', '¥1,800', 'Lunch', 'no', 'no', 'December 2025; May 2026.', 'lunch_plate'),
    ] }, {
    cuisine: '町家で京のおばんざいと純米酒中心の日本酒、京野菜と鴨 (食べログ)・昼は1,800円のワンプレート: おばんざい約20種、豆腐、ご飯、赤だしに、天ぷら・刺身・唐揚げ・日替わり (鶏の味噌煮や魚のあら炊きなど) から2品 (2025年12月〜2026年9月)・夜は季節の京野菜と鴨の料理に日本酒、ほとんどの料理を一人前で (食べログ、2026年8月)・昼1,000〜2,000円ほど、夜4,000〜6,000円ほど (食べログ)',
    neighborhood: '宮川町、清水五条のそば',
    gf_detail: 'グルテンフリー不可。昼のメインに天ぷらと唐揚げ、赤だし、醤油味のおばんざい (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。だしのおばんざい、魚、鶏、鴨 (食べログ、2025〜2026年の口コミ)。',
    notes: '[おばんざい・宮川町の町家] 花街・宮川町の、靴を脱いで上がる町家。1,800円の昼のプレートは約20種の小さなおばんざいに、刺身、天ぷら、唐揚げ、日替わりから2品。夜は京野菜と鴨を純米酒とともに。予約がおすすめで、予約なしは満席のことが多い。',
  });
}

// ================================================================ 脂過多ブラ Abrakadabra
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26041075/'; const R = TB + 'dtlrvwlst/';
  const H = day(['01:00', '07:00']);
  put({
    id: 'kyoto_abrakadabra_gion', name: '脂過多ブラ (Abrakadabra)', category: 'OMNI',
    lat: 35.0053, lng: 135.774934, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: wheat noodles in soy or chicken broth (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken paitan and pork-fat ramen with chashu (2024–2026 reviews).',
    hours_raw: 'Monday–Saturday 1:00–7:00 (late night to morning); closed Sunday and holidays (Tabelog). No reservations (Tabelog). Cash only — no cards, e-money or QR (Tabelog). 20 seats: two counters of 7 and 5, and two tables for 4 (Tabelog). Smoking allowed (Tabelog). At the end of a narrow alley north off Sueyoshi-cho, under a red lantern (Tabelog; September 2026). Opened in early spring 2024 (April 2024).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Gion Kiyomoto-cho, alley off Sueyoshi-cho',
    cuisine: 'After-hours ramen for Gion\'s night crowd, three kinds of bowl (April 2024) · chicken paitan ¥880: thick, creamy, gently salted broth with fried-onion sweetness, straight firm noodles, thin pork chashu, menma and green onion; a light shoyu ramen; the namesake abura soba, with extra fat on request; seasoned egg and menma toppings; Okinawa mozuku on the side (2024–2026 reviews) · beer and shochu (Tabelog; September 2026) · about ¥1,000–2,000 (Tabelog)',
    website: null, gmaps: gm('脂過多ブラ 祇園'), menu_url: null,
    notes: '[Ramen · Gion alley, 1–7 a.m.] A red-lantern ramen bar down a Gion alley that opens at 1 a.m. and serves until 7: a thick chicken paitan, a lighter shoyu bowl and a fat-rich abura soba, the after-drinks stop for the neighbourhood. Ask which bowl is richest — the shoyu is lighter than the name suggests. Cash only; smoking allowed.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: a 20-seat late-night ramen shop in a narrow Gion alley, open from 1:00 to 7:00, that opened in early spring 2024 with three kinds of ramen.',
      philosophy: null, specialty: 'Chicken paitan ramen.',
      anecdotes: [
        { text: 'An April 2024 visitor came just before 6 a.m. for a bowl of chicken paitan at ¥880, suggesting a morning ramen as much as a late-night one.', source: R + 'B483775066/' },
        { text: 'A September 2025 diner found the chicken paitan lukewarm and too salty, and the mozuku plain shop-bought.', source: R + 'B513379820/' },
        { text: 'A September 2026 visitor advises asking which bowls are the rich ones, since the recommendations differed from what the name suggests.', source: R + 'B534900611/' },
      ],
      japanese_sources_summary: '食べログ: ラーメン、東山区八坂新地清本町375、末吉町通から路地を北へ、月〜土 1:00〜7:00、日・祝休み、予約不可、カード・電子マネー・QR 不可、20席 (カウンター7席と5席、4人掛けテーブル2卓)、喫煙可、焼酎あり。口コミ (2024年2月〜2026年9月、英語): 2024年の早春に開店、深夜から朝まで、赤提灯、ラーメンは3種類、鶏白湯880円 (濃厚でなめらか、揚げ玉ねぎ、ストレート麺、チャーシュー、メンマ、ねぎ)、あっさりの醤油ラーメン、脂多めの油そば、味玉、沖縄のもずく、ぬるくしょっぱかったとの声 (2025年9月)、名前のわりにあっさりとの声 (2025年12月)、濃いものを聞いて頼むとよいとの声 (2026年9月)。',
      confidence: 'medium', sources: [TB, R + 'B483331118/', R + 'B483775066/', R + 'B484815394/', R + 'B505091747/', R + 'B513379820/', R + 'B518962459/', R + 'B530057151/', R + 'B534900611/', R + 'B535878615/', R + 'B538017453/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; open 1:00–7:00; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区八坂新地清本町375',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.005349, 135.774934) moved 5.4 m south to (35.005300, 135.774934): the Tabelog point is 2.1 m from kyoto_bar_mousse_gion (same lot, 375 2F); now 7.4 m from it and 9.9 m from kyoto_n_gion_35 (375-2); GSI 京都府京都市東山区清本町375番地 (lot) 9 m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B483775066/'],
    price_note: 'Price from an April 2024 review.', last_checked: TODAY, items: [
      it('', '', 'Chicken paitan ramen', '¥880', 'Ramen', 'no', 'no', 'April 2024.', 'paitan'),
      it('', '', 'Shoyu ramen', '', 'Ramen', 'no', 'no', '2025 reviews.', 'shoyu'),
      it('', '', 'Abura soba (extra fat optional)', '', 'Ramen', 'no', 'no', 'April 2024; March 2025.', 'abura'),
    ] }, {
    cuisine: '祇園の夜の客のための深夜ラーメン、3種類 (2024年4月)・鶏白湯880円: 濃くてなめらかでやさしい塩味、揚げ玉ねぎの甘み、ストレートの硬めの麺、薄切りのチャーシュー、メンマ、ねぎ、あっさりの醤油ラーメン、店名にちなむ油そば (脂増しも可)、味玉とメンマのトッピング、沖縄のもずく (2024〜2026年の口コミ)・ビールと焼酎 (食べログ、2026年9月)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '祇園清本町、末吉町通から入る路地',
    gf_detail: 'グルテンフリー不可。醤油や鶏のスープに小麦の麺 (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏白湯と豚の脂のラーメン、チャーシュー (2024〜2026年の口コミ)。',
    notes: '[ラーメン・祇園の路地、深夜1時〜朝7時] 祇園の路地奥、赤提灯のラーメン店で、深夜1時から朝7時まで。濃厚な鶏白湯、あっさりの醤油、脂たっぷりの油そばで、飲んだあとの締めの店。どれが濃いか聞いて頼むとよく、醤油は名前のわりにあっさり。現金のみ、喫煙可。',
  });
}

// ================================================================ びーんず亭 Beans Tei
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26005477/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://www.beanstei.com/';
  const H = day(['11:00', '19:00']);
  put({
    id: 'kyoto_beans_tei', name: 'びーんず亭 (Beans Tei)', category: 'OMNI',
    lat: 35.00476679383433, lng: 135.76262991147007, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Black coffee only — no food is described (2025–2026 reviews). Plain coffee is gluten-free; ask about anything added.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Black hot and iced coffee only (May 2025; August 2026); plain coffee is plant-based.',
    hours_raw: 'Monday and Thursday–Sunday 11:00–19:00; closed Tuesday and Wednesday (Tabelog); take-away coffee from 12:00 (December 2025). No reservations (Tabelog). Cash only — no cards, e-money or QR (Tabelog). A counter shop of self-roasted beans with a small standing corner; coffee to take away, hot or iced, black, one size (Tabelog; 2025 reviews). Non-smoking (Tabelog). On Takakura just south of Nishikikoji, at the west end of Nishiki Market by Daimaru; 252 m from Karasuma Stn (Tabelog; 2025 reviews).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Takakura by Nishiki Market and Daimaru',
    cuisine: 'Self-roasting bean shop and coffee stand (2025 reviews) · take-away coffee of the day, hot ¥280 or iced ¥380, ¥20 off without a lid (May 2025–June 2026) · beans from blends to single origins, e.g. Rich Honey Blend about ¥800 per 100 g, Mild Blend, Ethiopia Yirgacheffe G2; ground to order; drip bags (2025–2026 reviews) · under ¥1,000 (Tabelog)',
    website: WEB, gmaps: gm('びーんず亭 高倉'), menu_url: null,
    notes: '[Coffee stand · Takakura by Nishiki] A tiny self-roasting bean shop a step from Nishiki Market, with jars of beans along the counter and a strong cup to take away for ¥280 — ¥20 less if you skip the lid. Beans ground to order, from house blends to Ethiopian single origins. Cash only; closed Tuesday and Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)', 'Staff'], origin: null,
      background: 'Per reviewers: a self-roasting coffee bean shop near the Nishiki Market exit and Daimaru, selling blends and single origins with take-away coffee; a December 2025 reviewer had heard it was featured on the NHK programme 72 Hours. An August 2026 regular describes a lively, cheerful owner, often there at weekends and in the evening.',
      philosophy: null, specialty: 'Take-away drip coffee; house blends.',
      anecdotes: [
        { text: 'A June 2025 Sunday visitor learned the iced coffee is ¥20 cheaper without a lid and drank it strolling the neighbourhood.', source: R + 'B508847992/' },
        { text: 'A December 2025 guest arrived ten minutes before take-away began at noon, and watched a steady line buying beans.', source: R + 'B519324416/' },
        { text: 'A July 2026 customer described tastes to the staff and was steered to the Mild Blend, good hot or iced.', source: R + 'B532958778/' },
      ],
      japanese_sources_summary: '食べログ: コーヒースタンド、中京区高倉通錦小路下ル (番地の表示なし)、阪急烏丸駅・地下鉄四条駅、月・木〜日 11:00〜19:00、火・水休み、予約不可、カード・電子マネー・QR 不可、禁煙、テイクアウト、公式サイトあり。口コミ (2025年1月〜2026年8月、英語): 錦市場の出口と大丸のそば、自家焙煎の豆の店、カウンターに豆の大瓶、立ち飲みのコーナー、持ち帰りのコーヒーはホットかアイスのブラックで1サイズ、ホット280円、アイス380円、ふたなしで20円引き、豆はブレンドからシングルオリジンまで (Rich Honey Blend 100g 約800円、Mild Blend、エチオピア イルガチェフェ G2)、挽いてもらえる、ドリップバッグ、持ち帰りは12時から (2025年12月)、NHK の番組で紹介されたとの声、明るい店主 (2026年8月)。',
      confidence: 'medium', sources: [TB, R + 'B444084217/', R + 'B506591218/', R + 'B508061773/', R + 'B508847992/', R + 'B511034678/', R + 'B515090598/', R + 'B519324416/', R + 'B530019350/', R + 'B532958778/', R + 'B534749197/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; counter take-away; quick.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区高倉通錦小路下ル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through August 2026.' },
    pin_source: `Tabelog ${TB} (35.004767, 135.762630); address has no lot number (GSI matches only the ward), so the Tabelog pin is kept; nearest existing record 23.7 m (kyoto_nishiki_daiyasu); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530019350/', R + 'B506591218/', R + 'B511034678/'],
    price_note: 'Prices from May 2025 to June 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Hot coffee to take away', '¥280', 'Coffee', 'gf', 'vegan', 'June 2026; ¥20 off without a lid.', 'hot'),
      it('', '', 'Iced coffee to take away', '¥380', 'Coffee', 'gf', 'vegan', 'May–June 2025.', 'iced'),
      it('', '', 'Rich Honey Blend beans, 100 g', '¥800', 'Beans', 'gf', 'vegan', 'June 2025; about.', 'beans'),
    ] }, {
    cuisine: '自家焙煎の豆の店とコーヒースタンド (2025年の口コミ)・持ち帰りの本日のコーヒー、ホット280円、アイス380円、ふたなしで20円引き (2025年5月〜2026年6月)・ブレンドからシングルオリジンまでの豆、Rich Honey Blend 100g 約800円、Mild Blend、エチオピア イルガチェフェ G2、注文に応じて挽く、ドリップバッグ (2025〜2026年の口コミ)・1,000円未満 (食べログ)',
    neighborhood: '錦市場と大丸のそばの高倉通',
    gf_detail: 'ブラックコーヒーのみで、食べ物の記述はない (2025〜2026年の口コミ)。コーヒーそのものはグルテンフリー。加えるものは確認を。',
    vegan_detail: 'ホットとアイスのブラックコーヒーのみ (2025年5月、2026年8月)。コーヒーそのものは植物性。',
    notes: '[コーヒースタンド・錦のそばの高倉通] 錦市場のすぐそばの小さな自家焙煎の豆の店。カウンターに豆の大瓶が並び、濃いめのコーヒーを持ち帰りで280円、ふたなしなら20円引き。豆はハウスブレンドからエチオピアのシングルオリジンまで、注文に応じて挽いてくれる。現金のみ、火・水休み。',
  });
}

// ================================================================ 天ぷらの店 玄 Tempura no Mise Gen
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26042413/'; const R = TB + 'dtlrvwlst/';
  const L = day(['11:30', '14:30'], ['17:00', '20:30']); const D = day(['17:00', '20:30']);
  put({
    id: 'kyoto_tempura_gen_kiyamachi', name: '天ぷらの店 玄 (Tempura no Mise Gen)', category: 'OMNI',
    lat: 35.008468287870954, lng: 135.77120071038945, cuisine_type: 'tempura',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: wheat-batter tempura over rice with a soy-based sauce (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: shrimp, anago, kisu and scallop tempura, egg, miso soup (2025–2026 reviews).',
    hours_raw: 'Monday, Tuesday and Friday–Sunday 11:30–14:30 and 17:00–20:30; Thursday 17:00–20:30; closed Wednesday (Tabelog). Same prices at lunch and dinner (August 2025). Reservations accepted (Tabelog). Cards and QR (Tabelog; November 2025). Eight counter seats and one table at the back (May and November 2025). 1F of the Oriental Kaikan on Kiyamachi, just over Sanjo Ohashi; 2 min walk from Sanjo Stn (Tabelog; 2025–2026 reviews).',
    hours: { 0: L, 1: L, 3: D, 4: L, 5: L, 6: L }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi-Sanjo, by the Kamo River',
    cuisine: 'Tempura and tendon fried to order at the counter, in oil blended by Kyoto oil shop Yamanaka Aburaten (August 2025) · tendon ¥1,600; special tendon A (two large shrimp, soft egg, maitake, eggplant, nori, peppers) or B (shrimp, sweet potato, lotus root and vegetables) ¥1,980; limited seafood tendon with a whole anago, shrimp, kisu, rare scallop and soft egg ¥3,580; tempura set with matcha salt (May 2025–July 2026) · free large rice and refills of miso soup and Kyoto pickles; extra sauce on request (August–September 2025) · about ¥1,600–3,600 (2025 reviews)',
    website: null, gmaps: gm('天ぷらの店 玄 木屋町'), menu_url: null,
    notes: '[Tempura · Kiyamachi-Sanjo counter] A small counter by the Kamo run by a couple, frying generous tendon to order: two big shrimp and vegetables with a soft egg, or the limited seafood bowl with an anago spilling over the rim. Light batter, free large rice and refills of miso soup and pickles, same price day and night. Closed Wednesday; no Thursday lunch.',
    chef_bio: { chef_name: null, roles: ['Chef and partner (couple, unnamed)'], origin: null,
      background: 'Per reviewers: a tempura counter of about eight seats on Kiyamachi run by a couple (September and October 2025), frying in oil blended by Yamanaka Aburaten, a Kyoto oil shop of nearly 200 years (August 2025), under a large painting by Daruma Shoten (May 2025).',
      philosophy: null, specialty: 'Seafood tendon; special tendon.',
      anecdotes: [
        { text: 'A May 2025 diner took the middle counter seat, facing a large, humorous and slightly eerie painting by Daruma Shoten.', source: R + 'B507176462/' },
        { text: 'An October 2025 guest, there with a parent, found the couple running the counter perfectly in step, the scallops still rare inside.', source: R + 'B516104452/' },
        { text: 'A November 2025 visitor from Kanto found the dipping sauce not sweet enough and the batter thicker than preferred.', source: R + 'B518337728/' },
      ],
      japanese_sources_summary: '食べログ: 天ぷら、中京区木屋町通石屋町126 オリエンタル会館 1F、三条駅から125m、月・火・金〜日 11:30〜14:30、17:00〜20:30、木 17:00〜20:30、水曜休み、予約可、カード・QR 可。口コミ (2025年5月〜2026年7月、英語): 夫婦で営む (2025年9・10月)、カウンター8席ほどと奥にテーブル1卓、Yamanaka Aburaten の油、天丼1,600円、特製天丼 A・B 各1,980円、数量限定の海鮮天丼3,580円 (穴子一本、海老、きす、帆立、半熟卵)、天ぷら定食に抹茶塩、ご飯大盛り無料、味噌汁と漬物のおかわり自由、昼も夜も同じ値段、Daruma Shoten の大きな絵、つゆの甘さが足りず衣が厚めとの声 (2025年11月)。',
      confidence: 'medium', sources: [TB, R + 'B507176462/', R + 'B511312061/', R + 'B511935501/', R + 'B512285176/', R + 'B512913968/', R + 'B514075462/', R + 'B516104452/', R + 'B518337728/', R + 'B522236994/', R + 'B531286205/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; cards and QR; same prices day and night.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区木屋町通石屋町126 オリエンタル会館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through July 2026.' },
    pin_source: `Tabelog ${TB} (35.008468, 135.771201); cross-checked: GSI 京都府京都市中京区石屋町126番地 (lot) 29 m; nearest existing record 23.7 m (kyoto_espresso_yoshidaya); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B507176462/', R + 'B511312061/'],
    price_note: 'Prices from May and August 2025 reviews, tax included.', last_checked: TODAY, items: [
      it('', '', 'Tendon', '¥1,600', 'Tendon', 'no', 'no', 'May 2025.', 'tendon'),
      it('', '', 'Special tendon A or B', '¥1,980', 'Tendon', 'no', 'no', 'August 2025.', 'special'),
      it('', '', 'Seafood tendon (limited)', '¥3,580', 'Tendon', 'no', 'no', 'August 2025.', 'seafood'),
    ] }, {
    cuisine: 'カウンターで揚げたての天ぷらと天丼、京都の油店 Yamanaka Aburaten の油 (2025年8月)・天丼1,600円、特製天丼 A (大海老2尾、半熟卵、舞茸、なす、海苔、ししとう、パプリカ) と B (海老、さつまいも、れんこんなど野菜) 各1,980円、数量限定の海鮮天丼3,580円 (穴子一本、海老、きす、レアの帆立、半熟卵)、抹茶塩の天ぷら定食 (2025年5月〜2026年7月)・ご飯大盛り無料、味噌汁と京漬物のおかわり自由、たれの追加も可 (2025年8〜9月)・1,600〜3,600円ほど (2025年の口コミ)',
    neighborhood: '木屋町三条、鴨川のそば',
    gf_detail: 'グルテンフリー不可。小麦の衣の天ぷらと醤油のたれのご飯 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。海老、穴子、きす、帆立の天ぷら、卵、味噌汁 (2025〜2026年の口コミ)。',
    notes: '[天ぷら・木屋町三条のカウンター] 鴨川そばの、夫婦で営む小さなカウンター。注文ごとに揚げるボリュームの天丼で、大海老2尾と野菜に半熟卵、または穴子が器からはみ出す限定の海鮮天丼。衣は軽く、ご飯大盛り無料、味噌汁と漬物はおかわり自由、昼も夜も同じ値段。水曜休み、木曜は昼なし。',
  });
}

save();
