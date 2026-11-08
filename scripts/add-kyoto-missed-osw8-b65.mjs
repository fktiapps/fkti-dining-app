// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 65.
//   + 大衆酒場 メモリー Taishu Sakaba Memory (cheap afternoon-to-night tavern by Nishiki Market; rest)
//   + お出汁と日本酒 せつ Setsu (dashi-led lunch sets and oden izakaya, Yanaginobanba alley; rest)
//   + 冨美家 錦店 Fumiya Nishiki (Kyoto udon in Nishiki Market, 80+ years; rest)
//   + 酒・海鮮 二代目政次郎 Nidaime Masajiro (robata and hot-pot izakaya, Kiyamachi-Sanjo; rest)
//   Rest list (mod 6 = 1) after batch 64, nearest-first — skipped:
//   - 祇園 緑寿庵清水 26032771: brand already in data (緑寿庵清水, kyoto_ryokujuan_shimizu).
//   - 土井志ば漬本舗 祇園店 26017693: branch of the large brand house 土井志ば漬本舗 (pickle buffet at lunch); same call as 26026058 (osw1-36).
//   - 夜市散歩 台湾屋台酒場 26045377: thin listing, 6 reviews.
//   Brand check: queue-status.jsonl grepped for every crawl id of each name (メモリー, せつ, 冨美家, 政次郎) — no earlier skip
//   or done entries. Same-name check, same brand or operator only: メモリー — one. せつ — one. 冨美家 — one in our crawls; its
//   own site (kyoto-fumiya.co.jp, opened 2026-11-07) names a 錦店 and a 本店 — small, drafted. 政次郎 — one. None is in
//   data/kyoto.json (main b5789f05) by name or address (八百屋町538-1; 井筒屋町421; 中魚屋町493; 材木町176-3 ダイコービル 3F —
//   Restaurant MUNI in data shares the building).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-65');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260301/26032771/', 'brand already in data: 緑寿庵清水 (kyoto_ryokujuan_shimizu)');
skip('https://tabelog.com/en/kyoto/A2601/A260301/26017693/', '土井志ば漬本舗 祇園店: a branch of a large brand house — the pickle maker 土井志ば漬本舗 (Doi Shibazuke Honpo), seven or more shops in Kyoto; its restaurant sub-brand 竈炊き立てごはん 土井 was skipped as a large-parent branch (26026058, osw1-36). Tabelog reviews (2023–2026) describe an eat-in pickle buffet with rice and miso soup at lunch, so not plain retail');
skip('https://tabelog.com/en/kyoto/A2601/A260202/26045377/', 'thin listing: 6 reviews');

// ================================================================ 大衆酒場 メモリー Taishu Sakaba Memory
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26039935/'; const R = TB + 'dtlrvwlst/';
  const W = day(['14:00', '23:00']); const F = day(['14:00', '24:00']);
  put({
    id: 'kyoto_taishu_sakaba_memory', name: '大衆酒場 メモリー (Taishu Sakaba Memory)', category: 'OMNI',
    lat: 35.00474388787078, lng: 135.76321615035744, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: soft-bone karaage, fries, grilled chikuwa and stews with soy (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish and offal tavern (2025–2026 reviews).',
    hours_raw: 'Monday–Thursday 14:00–23:00 (last orders food 22:30, drinks 22:45); Friday–Saturday 14:00–24:00 (last orders 23:30 and 23:45); closed Sunday; banquets outside hours by arrangement (Tabelog). Reservations accepted (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 41 seats; non-smoking; ordering by phone QR (Tabelog; April 2026). Near Nishiki Market, between Teramachi and Karasuma; 5 min walk from Shijo or Hankyu Karasuma Stn (Tabelog; February 2025). Opened 31 July 2023 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: F, 5: F }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'By Nishiki Market, between Teramachi and Karasuma',
    cuisine: 'Cheap, cheerful tavern open from 14:00, with a ¥1,000 senbero set and all-you-can-drink from 30 minutes (2025–2026 reviews) · aji with plenty of green onion, meat tofu, octopus and salmon marinade, gatsu pon, soft-bone karaage, stews, grilled chikuwa, ume kombu, fries; free beans from the second visit (2025–2026 reviews) · about ¥1,000–5,000 (Tabelog; 2025–2026 reviews)',
    website: null, gmaps: gm('大衆酒場 メモリー 錦'), menu_url: null,
    notes: '[Tavern · by Nishiki Market, from 2 p.m.] A friendly, cheap tavern a step from Nishiki Market, open from mid-afternoon: a ¥1,000 senbero set of a drink and two small plates, all-you-can-drink from 30 minutes, and favourites like aji heaped with green onion, meat tofu and soft-bone karaage. Order by phone; food can be slow when busy. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a tavern of 41 seats opened 31 July 2023 near Nishiki Market. Reviewers in 2025–2026 describe cheerful staff, low prices and many regulars.',
      philosophy: null, specialty: 'Senbero set; aji with green onion.',
      anecdotes: [
        { text: 'A February 2025 visitor was told the side dish of beans is free from the second visit, and enjoyed plenty.', source: R + 'B501026384/' },
        { text: 'A December 2025 diner found a table here when everywhere else was full at year end; the food took a while but was good.', source: R + 'B519929894/' },
        { text: 'An October 2026 regular orders the ¥1,000 senbero set every time, choosing the stew and ume kombu.', source: R + 'B536394195/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・海鮮・ホルモン、中京区八百屋町538-1、地下鉄四条駅・阪急烏丸駅から徒歩5分、月〜木 14:00〜23:00 (L.O.フード22:30、ドリンク22:45)、金・土 14:00〜24:00 (L.O.23:30・23:45)、日曜休み、時間外の宴会は相談可、予約可、カード (VISA・Master・JCB・AMEX・Diners)・PayPay 可、電子マネー不可、41席、禁煙、2023年7月31日開店。口コミ (2025年2月〜2026年11月、英語): 錦市場の近く、昼から飲める、1,000円のせんべろセット、30分からの飲み放題、ねぎたっぷりの鯵、肉豆腐、たことサーモンのマリネ、ガツポン、なんこつ唐揚げ、煮込み、焼きちくわ、梅昆布、フライドポテト、2回目からお豆のつまみが無料、スマホで注文、明るい店員、混むと料理が遅いとの声 (2025年12月)。',
      confidence: 'medium', sources: [TB, R + 'B501026384/', R + 'B508718483/', R + 'B519929894/', R + 'B525518521/', R + 'B525524896/', R + 'B536334406/', R + 'B536394195/', R + 'B536459369/', R + 'B538127848/', R + 'B538365446/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Phone ordering; cheap sets; cards and PayPay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区八百屋町538-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through November 2026.' },
    pin_source: `Tabelog ${TB} (35.004744, 135.763216); cross-checked: GSI 京都府京都市中京区八百屋町538番地 (lot) 44 m; nearest existing record on main b5789f05 31.8 m (kyoto_hanasaki_nishiki); 冨美家 錦店 (this batch) is 21.5 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536334406/'],
    price_note: 'Price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Senbero set (a drink and two small plates)', '¥1,000', 'Sets', 'no', 'no', 'October 2026.', 'senbero'),
      it('', '', 'Aji with green onion', '', 'Fish', 'ask', 'no', '2025–2026 reviews.', 'aji_negi'),
    ] }, {
    cuisine: '14時から開いている安く明るい酒場。1,000円のせんべろセット、30分からの飲み放題 (2025〜2026年の口コミ)・ねぎたっぷりの鯵、肉豆腐、たことサーモンのマリネ、ガツポン、なんこつ唐揚げ、煮込み、焼きちくわ、梅昆布、フライドポテト、2回目からお豆が無料 (2025〜2026年の口コミ)・1,000〜5,000円ほど (食べログ、2025〜2026年の口コミ)',
    neighborhood: '錦市場のそば、寺町と烏丸の間',
    gf_detail: 'グルテンフリー不可。なんこつ唐揚げ、フライドポテト、焼きちくわ、醤油の煮込み (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚とホルモンの酒場 (2025〜2026年の口コミ)。',
    notes: '[酒場・錦市場のそば、14時から] 錦市場のすぐそばの気さくで安い酒場。昼過ぎから開いていて、1杯と小皿2品の1,000円のせんべろセット、30分からの飲み放題、ねぎたっぷりの鯵、肉豆腐、なんこつ唐揚げが人気。注文はスマホで、混むと料理が遅いことも。日曜休み。',
  });
}

// ================================================================ お出汁と日本酒 せつ Setsu
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26039425/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://www.odashitonihonshusetsu.com/';
  const H = day(['12:00', '14:00'], ['18:00', '23:30']);
  put({
    id: 'kyoto_odashi_nihonshu_setsu', name: 'お出汁と日本酒 せつ (Setsu)', category: 'OMNI',
    lat: 35.00651064786999, lng: 135.76425870037457, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Dashi-led cooking — oden, dashimaki, simmered fish, sashimi, grilled fish — but also tempura; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based oden and fish dishes (2025–2026 reviews).',
    hours_raw: 'Daily 12:00–14:00 and 18:00–23:30 (last order 23:00); irregular closing days (Tabelog). Reservations accepted (Tabelog). A charge of ¥600 incl. tax for seat-only bookings, none with a course (Tabelog original 600円(税込)※席のみ予約時のため、コース予約ではお取りしません。). Cards, e-money and PayPay (Tabelog). 30 seats; non-smoking at lunch, a designated smoking area otherwise (Tabelog). Can be run by one person at lunch (February 2026). Hidden in a narrow alley off Yanaginobanba north of Nishiki Market, its name not visible from the street; 5 min walk from Hankyu Karasuma Stn (Tabelog; October 2026). Opened 1 May 2023 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Yanaginobanba north of Nishiki Market — alley shop',
    cuisine: 'Izakaya built around dashi and Japanese sake, with lunch sets by day (Tabelog; 2025–2026 reviews) · lunch sets: beef tendon and daikon ¥1,350, miso-marinated grilled salmon ¥1,200, simmered flounder ¥1,200, pork tongue with negi salt (November 2025–October 2026) · evenings: oden in a rich broth, dashimaki, sashimi, katsuo tataki, sanma carpaccio, tempura, tofu salad; courses with or without all-you-can-drink; kamameshi (Tabelog; 2026 reviews) · lunch about ¥1,000–2,000, dinner about ¥4,000–6,000 (Tabelog)',
    website: WEB, gmaps: gm('お出汁と日本酒 せつ'), menu_url: null,
    notes: '[Dashi izakaya · Yanaginobanba off Nishiki, alley] A hidden alley izakaya devoted to dashi and sake: good-value lunch sets — beef tendon and daikon, miso-grilled salmon, simmered flounder — and at night oden, dashimaki, sashimi and seasonal fish dishes. Hard to find from the street. ¥600 charge for seat-only bookings at night.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)', 'Staff'], origin: null,
      background: 'Per Tabelog: an izakaya of oden and kamameshi, opened 1 May 2023, with a website at odashitonihonshusetsu.com. A February 2026 lunch guest found one person doing both cooking and serving.',
      philosophy: 'Dashi and Japanese sake (shop name).', specialty: 'Oden; beef tendon and daikon set.',
      anecdotes: [
        { text: 'A February 2026 weekday lunch guest had the miso-marinated silver salmon set for ¥1,200, served quickly though one person was cooking and serving.', source: R + 'B529293455/' },
        { text: 'An October 2026 visitor noted the shop name cannot be seen from Yanaginobanba, making it hard to find alone.', source: R + 'B536874658/' },
        { text: 'A September 2026 diner liked the dashi in the oden and omelette but found the room short-staffed.', source: R + 'B536142423/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・おでん・釜飯、中京区井筒屋町421、阪急烏丸駅から徒歩5分、毎日 12:00〜14:00、18:00〜23:30 (L.O.23:00)、不定休、予約可、席のみ予約は600円 (税込、コース予約ではかからない)、カード・電子マネー・PayPay 可、30席、昼は全席禁煙、分煙、2023年5月1日開店、公式サイトあり。口コミ (2025年11月〜2026年10月、英語): 柳馬場から入った細い路地の奥、店名が通りから見えない、昼の定食 (牛すじ大根1,350円、銀鮭の西京焼き1,200円、かれいの煮付け1,200円、豚タンのねぎ塩)、夜はだしの効いたおでん、だし巻き、刺身、かつおのたたき、さんまのカルパッチョ、天ぷら、豆腐サラダ、飲み放題あり・なしのコース、昼は1人で営業していたとの声、店員が少ないとの声 (2026年9月)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B467671761/', R + 'B479256842/', R + 'B524169746/', R + 'B529293455/', R + 'B531745329/', R + 'B535916120/', R + 'B536142423/', R + 'B536874658/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hidden alley; ¥600 seat-only charge at night; cards, IC and PayPay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区井筒屋町421',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and website; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.006511, 135.764259); cross-checked: GSI 京都府京都市中京区井筒屋町421番地 (lot) 33 m; nearest existing record 41.7 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B479256842/', R + 'B529293455/'],
    price_note: 'Prices from February and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Beef tendon and daikon lunch set', '¥1,350', 'Lunch', 'ask', 'no', 'October 2026.', 'gyusuji'),
      it('', '', 'Miso-marinated silver salmon lunch set', '¥1,200', 'Lunch', 'ask', 'no', 'February 2026.', 'saikyo'),
      it('', '', 'Simmered flounder lunch set', '¥1,200', 'Lunch', 'ask', 'no', 'October 2026.', 'karei'),
    ] }, {
    cuisine: 'だしと日本酒が中心の居酒屋、昼は定食 (食べログ、2025〜2026年の口コミ)・昼の定食: 牛すじ大根1,350円、銀鮭の西京焼き1,200円、かれいの煮付け1,200円、豚タンのねぎ塩 (2025年11月〜2026年10月)・夜: 濃いだしのおでん、だし巻き、刺身、かつおのたたき、さんまのカルパッチョ、天ぷら、豆腐サラダ、飲み放題あり・なしのコース、釜飯 (食べログ、2026年の口コミ)・昼1,000〜2,000円ほど、夜4,000〜6,000円ほど (食べログ)',
    neighborhood: '錦市場の北の柳馬場、路地の店',
    gf_detail: '要確認。おでん、だし巻き、煮魚、刺身、焼き魚などだし中心だが天ぷらも。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。だしのおでんと魚の料理 (2025〜2026年の口コミ)。',
    notes: '[だしの居酒屋・錦の北の柳馬場、路地] だしと日本酒の路地の隠れた居酒屋。牛すじ大根、銀鮭の西京焼き、かれいの煮付けなどお得な昼の定食、夜はおでん、だし巻き、刺身、季節の魚。通りから見つけにくい。夜の席のみの予約は600円。',
  });
}

// ================================================================ 冨美家 錦店 Fumiya Nishiki
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26032351/'; const R = TB + 'dtlrvwlst/'; const WEB = 'http://www.kyoto-fumiya.co.jp/';
  const H = day(['11:00', '17:30']);
  put({
    id: 'kyoto_fumiya_nishiki', name: '冨美家 錦店 (Fumiya Nishiki)', category: 'OMNI',
    lat: 35.00493668787067, lng: 135.76323374035937, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: wheat udon, shrimp and chicken tempura (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi broth, egg, shrimp and chicken (2026 reviews).',
    hours_raw: 'Daily 11:00–17:30; closed 1–2 January; hours may change (Tabelog). No reservations; queues at lunch from about 11:00, quieter mid-afternoon (Tabelog; July–September 2026). Cards (JCB, AMEX), e-money and QR; non-smoking (Tabelog). Counter seating (Tabelog). In Nishiki Market west of Sakaimachi (Tabelog). The company\'s main shop was temporarily closed in July 2026 (July 2026 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishiki Market, west of Sakaimachi',
    cuisine: 'Kyoto udon of soft, thin noodles in dashi from a Nishiki business of over 80 years (official site; 2026 reviews) · the signature Fumiya nabe — nabeyaki udon with shrimp tempura, simmered shiitake, egg, green onion and mochi; shrimp tempura nabeyaki ¥1,320; with a chicken tempura set ¥1,760; Tanba chicken nabeyaki (May–September 2026) · tori-ten ankake udon ¥990, tanuki and curry udon, small rice-bowl sets; two house shichimi, red with aonori and black (July–September 2026) · about ¥1,000–2,000 (Tabelog; 2026 reviews)',
    website: WEB, gmaps: gm('冨美家 錦店'), menu_url: null,
    notes: '[Udon · Nishiki Market] A long-established Nishiki udon house serving soft Kyoto-style noodles in gentle dashi: the signature Fumiya nabe of shrimp tempura, shiitake, egg and mochi bubbling in its pot, tori-ten ankake udon and curry udon, with two house shichimi to finish. Queues at lunch; go mid-afternoon. Daytime only.',
    chef_bio: { chef_name: null, roles: ['Kitchen and counter staff (unnamed)'], origin: null,
      background: 'Per the official site: 冨美家, trading in Nishiki Market for more than 80 years, makes Kyoto udon with dashi and soft noodles, and sells its Fumiya nabe and other products; the site names a Nishiki shop and a main shop. A July 2026 reviewer found the main shop temporarily closed.',
      philosophy: 'Dashi-focused Kyoto udon with soft noodles (official site).', specialty: 'Fumiya nabe (nabeyaki udon).',
      anecdotes: [
        { text: 'A July 2026 regular, finding the main shop still closed, came to Nishiki for the tori-ten ankake udon (¥990) and tried both house shichimi.', source: R + 'B532830173/' },
        { text: 'A July 2026 visitor noted lines from around 11:00 at lunch.', source: R + 'B532334080/' },
        { text: 'A May 2026 regular comes alone for the Fumiya nabe, as the reviewer’s husband rarely goes to udon places.', source: R + 'B494916094/' },
      ],
      japanese_sources_summary: '食べログ: うどん、中京区錦小路通堺町西入中魚屋町493、毎日 11:00〜17:30、1月1・2日休み、営業時間は変わることあり、予約不可、カード (JCB・AMEX)・電子マネー・QR 可、禁煙、カウンター。公式サイト: 錦市場で80年以上、だしとやわらかい麺の京うどん、冨美家鍋、錦店と本店。口コミ (2026年5月〜9月、英語): やさしいだし、細くやわらかい京うどん、名物の冨美家鍋 (海老天、椎茸の含め煮、卵、ねぎ、餅)、海老天鍋焼きうどん1,320円、鶏天付きのセット1,760円、丹波鶏の鍋焼き、鶏天あんかけうどん990円、たぬき、カレーうどん、小丼のセット、赤 (青のり) と黒のオリジナル七味、昼は11時ごろから行列、午後は入りやすい、本店は休業中との声 (2026年7月)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B469664173/', R + 'B494916094/', R + 'B529075686/', R + 'B532334080/', R + 'B532830173/', R + 'B532970909/', R + 'B534180529/', R + 'B535800691/', R + 'B536117863/', R + 'B536398485/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter udon shop; queues at lunch; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区錦小路通堺町西入中魚屋町493',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.004937, 135.763234); cross-checked: GSI 京都府京都市中京区中魚屋町493番地 (lot) 29 m; nearest existing record 14.8 m (kyoto_jintora_nishiki, 494); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534180529/', R + 'B529075686/', R + 'B532830173/'],
    price_note: 'Prices from May–August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Shrimp tempura nabeyaki udon', '¥1,320', 'Udon', 'no', 'no', 'August 2026.', 'nabeyaki'),
      it('', '', 'Shrimp tempura nabeyaki with chicken tempura set', '¥1,760', 'Sets', 'no', 'no', 'May 2026.', 'nabeyaki_set'),
      it('', '', 'Tori-ten ankake udon', '¥990', 'Udon', 'no', 'no', 'July 2026.', 'toriten_ankake'),
    ] }, {
    cuisine: '錦で80年以上の店の、だしと細くやわらかい麺の京うどん (公式サイト、2026年の口コミ)・名物の冨美家鍋: 海老天、椎茸の含め煮、卵、ねぎ、餅の鍋焼きうどん、海老天鍋焼き1,320円、鶏天付きのセット1,760円、丹波鶏の鍋焼き (2026年5〜9月)・鶏天あんかけうどん990円、たぬき、カレーうどん、小丼のセット、赤 (青のり) と黒の自家製七味 (2026年7〜9月)・1,000〜2,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '錦市場、堺町の西',
    gf_detail: 'グルテンフリー不可。小麦のうどん、海老天と鶏天 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。だし、卵、海老、鶏肉 (2026年の口コミ)。',
    notes: '[うどん・錦市場] 錦の老舗のうどん屋で、やさしいだしにやわらかい京うどん。海老天、椎茸、卵、餅が鍋で煮えたつ名物の冨美家鍋、鶏天あんかけうどん、カレーうどん、仕上げに2種の自家製七味。昼は行列なので午後がおすすめ。昼間のみ。',
  });
}

// 酒・海鮮 二代目政次郎 drafted by the worker; converted to a skip by the integrator: newest review is October 2024, below the 2025–26 bar.
skip('https://tabelog.com/en/kyoto/A2601/A260201/26009503/', 'no review dated 2025–26 (latest October 2024); opens on irregular days since April 2024');
save();
