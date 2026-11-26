// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 105
// (drafted 2026-11-08, finished and re-verified 2026-11-26 against main 699d62cf: all five listings re-fetched, open, not in data).
//   + OSTERIA K. OZAKI (Italian above 喫茶ハットリ, Shijo-Omiya; rest)
//   + 京うまれ ごはん日和 (Kyoto-sourced set meals and obanzai, Karasuma-Marutamachi; rest) — romaji dropped (Tabelog machine name)
//   + ご馳家 (wagyu and creative izakaya near Kyoto Station; rest) — romaji dropped (Tabelog machine name)
//   + 乾杯酒場 アホウどり 聖護院店 (budget student yakitori izakaya, Kumano Shrine; rest) — romaji dropped (Tabelog machine name)
//   + L'aparté (modern French by a French chef, near Nishi Hongan-ji; rest)
//   Rest list (mod 6 = 1) after batch 104, nearest-first — skipped:
//   - ALA HOTEL KYOTO 26038033: hotel breakfast buffet; every review is from a staying guest and Tabelog lists no hours or public
//     access — a hotel meal for staying guests.
//   - マクドナルド 烏丸丸太町店 26021473: chain.
//   - LAWSON 烏丸七条店 26032441: chain (convenience store).
//   - 中国料理 星ヶ岡 26008987: inside Kyoto Tokyu Hotel — big-chain hotel.
//   - RYOKAN GINKAKU KYOTO 26044459: thin listing (2 reviews).
//   Brand check: queue-status.jsonl, than.co.jp/brands and the WILL brands checked — none matches. アホウどり is a local group
//   (株式会社アホウプロジェクト, ahou.co.jp/shop): four アホウどり shops (北野白梅町, 京大前, 同志社前, 聖護院) plus a karaage takeaway —
//   under five same-brand shops, none in data. 京うまれ: the official site lists only this shop. None of the five is in data
//   (main 699d62cf, hidden records included). アホウプロジェクト re-checked 2026-11-26: still four アホウどり shops; its site says it
//   aims to expand to student districts nationwide (全国の学生街へ展開することを目指しています) — no shop count announced; flagged.
//   D0 = the 2026-11-08 draft date, kept for pin cross-checks not redone; TODAY marks facts re-verified 2026-11-26.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const D0 = '2026-11-08';
const TODAY = '2026-11-26';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-105');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260101/26038033/', 'hotel breakfast buffet for staying guests: every review is from a hotel guest; no hours or public access listed');
skip('https://tabelog.com/en/kyoto/A2601/A260202/26021473/', 'chain: マクドナルド');
skip('https://tabelog.com/en/kyoto/A2601/A260101/26032441/', 'chain: LAWSON convenience store');
skip('https://tabelog.com/en/kyoto/A2601/A260203/26008987/', 'inside Kyoto Tokyu Hotel — big-chain hotel');
skip('https://tabelog.com/en/kyoto/A2601/A260101/26044459/', 'thin listing: 2 reviews');

// ================================================================ OSTERIA K. OZAKI
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26026993/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '24:00']);
  put({
    id: 'kyoto_osteria_k_ozaki', name: 'OSTERIA K. OZAKI', category: 'OMNI',
    lat: 35.00307111786738, lng: 135.74919732035036, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Carpaccio, clams in white wine and meat dishes may suit, but homemade pasta, pizza and crostini contain wheat; no gluten information (2019–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Some vegetable appetisers (sweet potato, broccoli) appear, but most dishes use seafood, meat or cheese (2019–2025 reviews).',
    hours_raw: '18:00–24:00 (last order 23:00); closing days not fixed (Tabelog). Reservations accepted (Tabelog). No service or cover charge (Tabelog original サービス料・チャージともなし). Cards and QR (Tabelog). 18 seats; non-smoking; private hire possible (Tabelog). On the second floor of 喫茶ハットリ, facing the Shijo-Omiya rotary by Hankyu Omiya Stn; moved here in February 2019 (Tabelog; 2019 reviews). Instagram @osteria_k.ozaki (June 2023 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Omiya',
    cuisine: 'Casual wine osteria with spacious tables and big windows over the Omiya rotary (2019–2025 reviews) · omakase course of appetisers, chewy homemade pasta, main and dessert; pâté appetiser; carpaccio (March and July 2025) · assorted six appetisers; Amatriciana; four-cheese cream pasta; clams in white wine; octopus arrabbiata; homemade salsiccia; scallop carpaccio; seafood ragù (2019–2023) · early-evening wine and six-appetiser set about ¥900–980 (2019; may have changed) · about ¥4,000–6,000 (Tabelog)',
    website: 'http://www.osteria-ozaki.com/', gmaps: gm('OSTERIA K. OZAKI 四条大宮'), menu_url: null,
    notes: '[Italian · Shijo-Omiya] A relaxed upstairs osteria with sunset views over the Omiya rotary: an omakase course with chewy homemade pasta, or carpaccio, clams and salsiccia with white wine. No charge; open to midnight.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: an Italian osteria that moved in February 2019 from a counter shop to the second floor of 喫茶ハットリ at Shijo-Omiya; the chef often comes out to the dining room (2019 reviews).',
      philosophy: null, specialty: 'Homemade pasta; omakase appetisers.',
      anecdotes: [
        { text: 'A July 2025 diner, full to the brim after the omakase course, singled out the pâté and the very chewy pasta.', source: R + 'B510815385/' },
        { text: 'A July 2022 solo visitor who does not drink at all finally came in after work and felt healed by the food and care.', source: R + 'B451713248/' },
        { text: 'An August 2019 guest took a window seat to watch the sunset over the Omiya rotary.', source: R + 'B419930841/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・イタリアン、下京区大宮通四条下ル四条大宮町18 喫茶ハットリ2F、阪急大宮駅すぐ、18:00〜24:00 (L.O.23:00)、不定休、予約可、サービス料・チャージともなし、カード・QR 可、18席、禁煙、貸切可、2019年2月23日開店 (移転)。口コミ (2019年〜2026年5月、英語): 四条大宮のロータリーに面した喫茶の2階、広いテーブル席と大きな窓、おまかせのコース (前菜、もちもちの自家製パスタ、メイン、デザート)、パテ、カルパッチョ、6種の前菜盛り合わせ、アマトリチャーナ、4種のチーズのクリーム、あさりの白ワイン蒸し、たこのアラビアータ、自家製サルシッチャ、ほたてのカルパッチョ、魚介のラグー、早い時間のワインと前菜のセット (2019年、900〜980円)。',
      confidence: 'medium', sources: [TB, R + 'B412549854/', R + 'B412637790/', R + 'B414971461/', R + 'B419930841/', R + 'B451713248/', R + 'B467606960/', R + 'B479426196/', R + 'B504806554/', R + 'B510815385/', R + 'B527409155/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No service or cover charge; cards and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区大宮通四条下ル四条大宮町18 喫茶ハットリ2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing re-fetched 2026-11-26 (no closure notice); reviews March and July 2025, May 2026.' },
    pin_source: `Tabelog ${TB} (35.003071, 135.749197); cross-checked: GSI 京都府京都市下京区四条大宮町18番地 (lot) 6 m; same building as kyoto_hattory_shijo_omiya (8.9 m); kyoto_ramen_kyoryu_omiya 7.0 m; ${D0}; neighbour distances re-checked against main ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B510815385/'],
    price_note: 'No current item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Omakase course (appetisers, homemade pasta, main, dessert)', '', 'Courses', 'no', 'no', 'July 2025.', 'omakase'),
      it('', '', 'Carpaccio', '', 'Appetisers', 'ask', 'no', 'March 2025.', 'carpaccio'),
    ] }, {
    cuisine: '大宮のロータリーを見下ろす大きな窓と広いテーブルの気軽なワインのオステリア (2019〜2025年の口コミ)・前菜、もちもちの自家製パスタ、メイン、デザートのおまかせコース、パテ、カルパッチョ (2025年3月、7月)・6種の前菜盛り合わせ、アマトリチャーナ、4種のチーズのクリームパスタ、あさりの白ワイン蒸し、たこのアラビアータ、自家製サルシッチャ、ほたてのカルパッチョ、魚介のラグー (2019〜2023年)・早い時間のワインと6種の前菜のセット900〜980円ほど (2019年、変わっている可能性あり)・4,000〜6,000円ほど (食べログ)',
    neighborhood: '四条大宮',
    gf_detail: '要確認。カルパッチョ、あさりの白ワイン蒸し、肉料理は合う可能性があるが、自家製パスタ、ピザ、クロスティーニは小麦。グルテンの情報はない (2019〜2026年の口コミ)。',
    vegan_detail: '要確認。さつまいもやブロッコリーの前菜もあるが、多くは魚介、肉、チーズを使う (2019〜2025年の口コミ)。',
    notes: '[イタリアン・四条大宮] 大宮のロータリーに沈む夕日が見える、2階のくつろげるオステリア。もちもちの自家製パスタのおまかせコース、またはカルパッチョ、あさり、サルシッチャに白ワイン。チャージなし、24時まで。',
  });
}

// ================================================================ 京うまれ ごはん日和
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26028337/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://kyoumare-gohanbiyori.com/';
  const W = day(['11:30', '22:00']); const E = day(['08:00', '11:00'], ['11:30', '22:00']);
  put({
    id: 'kyoto_kyoumare_gohan_biyori', name: '京うまれ ごはん日和', category: 'OMNI',
    lat: 35.0176474578613, lng: 135.75918627049057, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Rice, grilled fish and some obanzai may suit, but katsu, tempura, nanban and dashi-and-soy dishes contain wheat; sauces are made in-house; no gluten information (official site; 2024–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Kyoto vegetable obanzai are chosen from a showcase, but most sets centre on meat or fish and dashi (official site; 2025–2026 reviews).',
    hours_raw: '11:30–22:00 (last order 21:00); breakfast menu Saturday, Sunday and holidays 8:00–11:00 (last order 10:30), bookable; irregular closures (official site). Tabelog lists 11:30–21:30. No reservations for meals (Tabelog). No service charge (Tabelog original なし). Cards and transport IC (Tabelog). 30 seats, mostly counter; non-smoking (Tabelog). Obanzai by weight and fresh bento to take away (official site). At Karasuma-Marutamachi, by Marutamachi Stn exit 2 (official site; August 2026 review). The official site names the shop 京うまれ 烏丸丸太町店. Opened 1 November 2016 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Karasuma-Marutamachi',
    cuisine: 'Set-meal and obanzai shop of Kyoto-sourced ingredients — 京の肉 wagyu, 京の都もち豚 pork, 丹波あじわい鶏 chicken, Kyoto Koshihikari and Kyoto vegetables —with all sauces and dressings made in-house (official site) · obanzai set: one main and three or four sides of choice ¥1,300–1,480 (June 2025; August 2026) · oyakodon of Tanba chicken and eggs ¥1,150 (September 2026); chicken nanban set ¥1,680 (January 2026); mochi-pork loin katsu-don ¥1,280 (April 2025); shrimp tempura and fillet cutlet set; daily lunch specials; sencha ice cream; coffee ¥100 after a meal (2025–2026) · about ¥1,000–2,000 (Tabelog)',
    website: WEB, gmaps: gm('京うまれ 烏丸丸太町店'), menu_url: WEB,
    notes: '[Obanzai set meals · Karasuma-Marutamachi] A counter set-meal shop by Marutamachi Station: pick a main and Kyoto-vegetable obanzai from the showcase, or try the Tanba-chicken oyakodon — all from Kyoto-grown ingredients. Weekend breakfast; take-away bento too.',
    chef_bio: { chef_name: null, roles: ['Kitchen team (unnamed)'], origin: null,
      background: 'Per the official site and Tabelog: an obanzai and set-meal shop opened November 2016, committed to eating local — Kyoto beef, pork, chicken, rice and market vegetables bought each morning — with a bento and by-weight deli counter. Most reviewers (2024–2026) are happy; an April 2025 diner found the katsu-don average, and a February 2026 diner found the pork chop average and already cold.',
      philosophy: '地のものを地で食す — eat local food locally (official site).', specialty: 'Obanzai set; oyakodon.',
      anecdotes: [
        { text: 'An August 2026 visitor just before 7 p.m. chose Kamo eggplant dengaku, marinated smoked salmon and chicken neck with ponzu, and loved each one.', source: R + 'B533908674/' },
        { text: 'A March 2025 diner who missed the sold-out Kujo green-onion oyakodon found joy in a sencha ice cream with real tea leaves.', source: R + 'B504061998/' },
        { text: 'A November 2025 regular praised the plump shrimp tempura and juicy fillet cutlet fried in fresh oil.', source: R + 'B516649065/' },
      ],
      japanese_sources_summary: '公式サイト: 京都でうまれたおばんざいのお店「京うまれ」、地産地消、京の肉、京の都もち豚、丹波あじわい鶏、京都産コシヒカリ、毎朝市場から仕入れる京野菜、ソースやドレッシングも店で手作り、店内飲食、お惣菜の量り売り、できたて弁当のテイクアウト、上京区烏丸通丸太町上る春日町434、11:30〜22:00 (L.O.21:00)、不定休、土日・祝日のみ8:00〜11:00 (L.O.10:30) 朝食、朝食は予約可。食べログ: 日本料理、11:30〜21:30、予約不可、サービス料なし、カード・交通系IC 可、30席、禁煙、2016年11月1日開店。口コミ (2024年12月〜2026年9月、英語): おばんざいセット (主菜1品と副菜3〜4品) 1,300〜1,480円、親子丼1,150円、チキン南蛮定食1,680円、かつ丼1,280円、えび天とヒレかつの定食、日替わり、煎茶のアイス、食後のコーヒー100円。',
      confidence: 'medium', sources: [WEB, TB, R + 'B497592740/', R + 'B504061998/', R + 'B505548889/', R + 'B507736115/', R + 'B507766947/', R + 'B516649065/', R + 'B520164532/', R + 'B522269560/', R + 'B533908674/', R + 'B536060685/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Choose obanzai from the showcase by pointing; cards and IC.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区烏丸通丸太町上る春日町434-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog re-fetched 2026-11-26 (no closure notice); reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.017647, 135.759186); cross-checked: GSI 京都府京都市上京区春日町434番地 (lot) 41 m; nearest existing record 74.3 m (kyoto_marutamachi_junidanya); ${D0}; neighbour distances re-checked against main ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536060685/', R + 'B533908674/', R + 'B520164532/'],
    price_note: 'Prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Obanzai set (one main, four sides, rice, miso soup)', '¥1,480', 'Sets', 'ask', 'ask', 'August 2026.', 'obanzai_set'),
      it('', '', 'Oyakodon (Tanba chicken and eggs) with miso soup', '¥1,150', 'Rice bowls', 'no', 'no', 'September 2026.', 'oyakodon'),
      it('', '', 'Chicken nanban set (Tanba Ajiwai chicken)', '¥1,680', 'Sets', 'no', 'no', 'January 2026.', 'nanban'),
    ] }, {
    cuisine: '京の肉、京の都もち豚、丹波あじわい鶏、京都産コシヒカリ、京野菜など京都産の素材で、ソースやドレッシングも手作りの定食とおばんざいの店 (公式サイト)・おばんざいセット: 主菜1品と好きな副菜3〜4品で1,300〜1,480円 (2025年6月、2026年8月)・丹波の鶏と卵の親子丼1,150円 (2026年9月)、チキン南蛮定食1,680円 (2026年1月)、もち豚ロースのかつ丼1,280円 (2025年4月)、えび天とヒレかつの定食、日替わり、煎茶のアイス、食後のコーヒー100円 (2025〜2026年)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '烏丸丸太町',
    gf_detail: '要確認。ご飯、焼き魚、一部のおばんざいは合う可能性があるが、かつ、天ぷら、南蛮、だしと醤油の料理は小麦。たれは店の手作り。グルテンの情報はない (公式サイト、2024〜2026年の口コミ)。',
    vegan_detail: '要確認。ショーケースから京野菜のおばんざいを選べるが、セットの多くは肉や魚とだしが中心 (公式サイト、2025〜2026年の口コミ)。',
    notes: '[おばんざい定食・烏丸丸太町] 丸太町駅そばのカウンターの定食屋。ショーケースから主菜と京野菜のおばんざいを選ぶか、丹波の鶏の親子丼を。どれも京都産の素材。土日は朝食も、弁当のテイクアウトも。',
  });
}

// ================================================================ ご馳家
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26002315/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['17:30', '24:00']);
  put({
    id: 'kyoto_gochiya_shiokoji', name: 'ご馳家', category: 'OMNI',
    lat: 34.988468707880514, lng: 135.76133448019434, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Salt-grilled wagyu, kalbi and horse sashimi may suit, but shrimp mayo is battered, wings are soy-glazed and pizza and pasta contain wheat; no gluten information (2023–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: a meat-focused izakaya; only sides such as fries and fresh spring rolls appear (2023–2026 reviews).',
    hours_raw: 'Daily 11:30–14:00 and 17:30–24:00; closed over the New Year (Tabelog). Reservations accepted — the shop always calls back to confirm (Tabelog). Charge ¥300 (Tabelog service charge and fee, original 300円). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay) and QR (PayPay, d Barai); no e-money (Tabelog). 50 seats with sofas and sunken seating; smoking allowed; private hire for 20–50; wheelchair access (Tabelog). 1F 三ツ林ビル, 3–5 min walk from Kyoto Station (Tabelog; 2025–2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashinotoin-Shichijo, near Kyoto Station',
    cuisine: 'Meat-focused creative izakaya with A5 wagyu at reasonable prices, popular for parties (Tabelog) · wagyu kalbi; three cuts of izakaya-style steak; salt and yuzu-kosho steak; ribeye; beef tongue; assorted horse sashimi (2024–2026) · carpaccio, fresh spring rolls, fried cartilage, garlic gizzard, Nagoya-style wings, shrimp mayo, yam and mentaiko gratin, potato salad; pizza and pasta; good-value wines; all-you-can-drink courses (2023–2025) · about ¥3,000–6,000 (Tabelog)',
    website: null, gmaps: gm('ご馳家 京都駅 塩小路町'), menu_url: TB + 'dtlmenu/',
    notes: '[Meat izakaya · near Kyoto Station] A roomy party izakaya three minutes from the station for wagyu kalbi, A5 steaks and horse sashimi with fairly priced wine. Reviews are mixed on service and upkeep (2023–2026). Smoking allowed; ¥300 charge.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: a long-running creative izakaya near Kyoto Station — a March 2026 guest returned after 16 years — centred on A5 wagyu and party courses. Several reviewers (2023–2026) praise the kalbi and steaks but mention slow or brusque service, and two (January and April 2025) mention cleanliness concerns (insects; a sticky floor), while a September 2025 diner found the interior clean. A December 2023 diner found the horse meat, tongue and ribeye gristly, and a July 2024 diner found a metal fragment in the ribeye, which staff said came from the grill and returned the same dish cold without an apology.',
      philosophy: null, specialty: 'Wagyu kalbi; A5 steak.',
      anecdotes: [
        { text: 'A March 2026 guest returning after 16 years found the kalbi incredibly delicious.', source: R + 'B524197677/' },
        { text: 'A March 2026 weekday diner liked trying three kinds of reasonably priced izakaya steak with beer.', source: R + 'B525754099/' },
        { text: 'A September 2025 smoker was glad to light up over carpaccio, horse sashimi and garlic gizzard.', source: R + 'B517551044/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・創作料理・焼肉、下京区東洞院通り七条下ル塩小路町520 三ツ林ビル 1F、毎日 11:30〜14:00、17:30〜24:00、年末年始休み、予約可 (店から確認の電話)、チャージ300円、カード (VISA・Master・JCB・AMEX・Diners・銀聯)・QR (PayPay・d払い) 可、電子マネー不可、50席、ソファ席・掘りごたつ、喫煙可、20〜50名で貸切可、車いす可、紹介文: A5ランクの和牛と厳選素材の創作料理、宴会向け。口コミ (2023年〜2026年3月、英語): 和牛カルビ、3種のステーキ、塩とゆずこしょうのステーキ、リブロース、牛タン、馬刺しの盛り合わせ、カルパッチョ、生春巻き、軟骨の唐揚げ、砂ずりのガーリック炒め、名古屋風の手羽先、えびマヨ、長芋と明太子のグラタン、ポテトサラダ、ピザとパスタ、手頃なワイン、飲み放題のコース。接客や清潔さに不満の口コミもある (2023〜2025年)。',
      confidence: 'medium', sources: [TB, R + 'B468369640/', R + 'B477581066/', R + 'B486444172/', R + 'B489949312/', R + 'B496764764/', R + 'B500339565/', R + 'B505495652/', R + 'B517551044/', R + 'B524197677/', R + 'B525754099/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Smoking allowed; ¥300 charge; the shop calls to confirm bookings.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区東洞院通り七条下ル塩小路町520 三ツ林ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing re-fetched 2026-11-26 (no closure notice); reviews through March 2026.' },
    pin_source: `Tabelog ${TB} (34.988469, 135.761334); cross-checked: GSI 京都府京都市下京区塩小路町520番地 (lot) 39 m; nearest existing record 70.1 m (kyoto_tachinomi_inaseya); ${D0}; neighbour distances re-checked against main ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B496764764/', R + 'B525754099/'],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Wagyu kalbi', '', 'Meat', 'ask', 'no', 'November 2024; March 2026.', 'kalbi'),
      it('', '', 'Steak (three cuts)', '', 'Meat', 'ask', 'no', 'March 2026.', 'steak'),
    ] }, {
    cuisine: 'A5の和牛を手頃に出す、宴会に人気の肉の創作居酒屋 (食べログ)・和牛カルビ、居酒屋風の3種のステーキ、塩とゆずこしょうのステーキ、リブロース、牛タン、馬刺しの盛り合わせ (2024〜2026年)・カルパッチョ、生春巻き、軟骨の唐揚げ、砂ずりのガーリック炒め、名古屋風の手羽先、えびマヨ、長芋と明太子のグラタン、ポテトサラダ、ピザとパスタ、手頃なワイン、飲み放題のコース (2023〜2025年)・3,000〜6,000円ほど (食べログ)',
    neighborhood: '東洞院七条、京都駅の近く',
    gf_detail: '要確認。塩焼きの和牛、カルビ、馬刺しは合う可能性があるが、えびマヨは衣、手羽先は醤油だれ、ピザとパスタは小麦。グルテンの情報はない (2023〜2026年の口コミ)。',
    vegan_detail: '実質ヴィーガン不可。肉中心の居酒屋で、ポテトや生春巻きなどの副菜のみ (2023〜2026年の口コミ)。',
    notes: '[肉の居酒屋・京都駅の近く] 駅から3分の広い宴会向けの居酒屋。和牛カルビ、A5のステーキ、馬刺しに手頃なワイン。接客や店内の手入れは口コミで賛否あり (2023〜2026年)。喫煙可、チャージ300円。',
  });
}

// ================================================================ 乾杯酒場 アホウどり 聖護院店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26031277/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://ahou.co.jp/shop/';
  const H = day(['17:00', '25:00']);
  put({
    id: 'kyoto_ahoudori_shogoin', name: '乾杯酒場 アホウどり 聖護院店', category: 'OMNI',
    lat: 35.017539337867674, lng: 135.77898358047563, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Salt yakitori may suit, but tare, fried skewers, fried cartilage and glazed wings involve wheat or soy; no gluten information (2023–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Charcoal-grilled vegetables, cabbage and smashed cucumber appear, but the menu centres on chicken (official site; 2023–2026 reviews).',
    hours_raw: 'Daily 17:00–1:00 (last order 0:00); summer and New Year breaks (official site; Tabelog). Reservations accepted; seats booked online may differ on arrival (Tabelog). Seat charge ¥330 including tax (Tabelog original お席代 330円（税込）); a March 2026 reviewer found menu prices shown before tax. No late-night surcharge (Tabelog). Cards, e-money and QR including Alipay and WeChat Pay (Tabelog). Ordering by smartphone (December 2025). 37 seats per Tabelog (1F 9 counter, 6 table, a private room; 2F 24 table); the official site gives 47 seats (1F 9 counter, 8 table, a private room; 2F 14 table). Non-smoking (official site); non-smoking with a smoking space (Tabelog). On Marutamachi-dori right by the Kumano Shrine bus stop, 8 min walk from Jingu-Marutamachi Stn (Tabelog). Opened 5 September 2018 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kumano Shrine, Shogoin',
    cuisine: 'Lively budget yakitori izakaya aimed at students “who can come twice a week”, run by the local company 株式会社アホウプロジェクト (official site; Tabelog) · charcoal yakitori and charcoal-grilled vegetables; a good sake list (official site) · draft beer ¥290, highball ¥99, giblet stew ¥199; same-day à-la-carte all-you-can-drink (Tabelog; October 2026) · assorted yakitori, liver and neck; sweet-spicy wings; potato salad with soft-boiled egg; dashimaki; tsukune with egg; aburi yangnyeom cheese chicken on a sizzling plate; seasonal limited dishes such as duck salt ramen (2023–2026) · about ¥2,000–3,000 (Tabelog)',
    website: WEB, gmaps: gm('アホウどり 聖護院店'), menu_url: null,
    notes: '[Yakitori izakaya · by Kumano Shrine, to 1:00] A lively, friendly student-priced yakitori bar where the staff shout “kanpai” with every beer: ¥99 highballs, charcoal skewers, sweet-spicy wings and dashimaki. ¥330 seat charge; prices may be shown before tax.',
    chef_bio: { chef_name: null, roles: ['Young staff team (unnamed)'], origin: null,
      background: 'Per the official site and Tabelog: one of four アホウどり yakitori bars that 株式会社アホウプロジェクト runs in Kyoto’s student districts, opened September 2018; the company says it won first place nationally at 居酒屋甲子園 and aims to expand to student districts across Japan; its site describes the Shogoin shop as relaxed, known for charcoal yakitori, grilled vegetables and sake. Reviewers (2023–2026) praise the friendly young staff and prices; a May 2025 diner found the food average, and a January 2026 diner waited about 30 minutes for food and drinks on a fully booked night.',
      philosophy: 'A yakitori bar students can visit twice a week (official site; Tabelog).', specialty: 'Charcoal yakitori; chicken wings.',
      anecdotes: [
        { text: 'A May 2025 second-stop drinker was startled when the whole staff cheered “Kanpai!” as the beer arrived.', source: R + 'B507791814/' },
        { text: 'An October 2026 passer-by was lured in by ¥99 highballs and ¥199 giblet stew on the sign.', source: R + 'B538416820/' },
        { text: 'A January 2026 pair catching up rated the chicken liver and neck skewers and the wings especially highly.', source: R + 'B514939833/' },
        { text: 'A November 2026 diner praised the service and the oden daikon, perfectly soaked in flavour.', source: R + 'B539941117/' },
      ],
      japanese_sources_summary: '公式サイト (株式会社アホウプロジェクト): 京都の学生街で「週2で通いたくなる焼鳥屋アホウどり」を運営、居酒屋甲子園で全国1位、店舗は北野白梅町店、京大前店、同志社前店、聖護院店と、からあげのテイクアウト店。聖護院店: 左京区聖護院山王町16-28、17:00〜25:00 (L.O.24:00)、定休日なし (夏季・年末年始休暇あり)、47席、各種キャッシュレス、全席禁煙、炭火焼き鳥と炭火野菜、日本酒も豊富、落ち着いた雰囲気。食べログ: 焼き鳥・居酒屋、17:00〜翌1:00 (L.O.0:00)、予約可、お席代330円 (税込)、深夜料金なし、カード・電子マネー・QR 可、37席、禁煙 (喫煙スペースあり)、生ビール290円、ハイボール99円、2018年9月5日開店。口コミ (2023年〜2026年11月、英語): 学生向けの値段、乾杯の掛け声、スマホで注文、焼き鳥の盛り合わせ、レバーとせせり、甘辛の手羽先、半熟卵のポテトサラダ、だし巻き、月見つくね、ヤンニョムチキン、季節の限定メニュー、税抜き表示 (2026年3月)、料理と飲み物に30分ほど待った (2026年1月、満席)、おでんの大根 (2026年11月)。公式サイト: 全国の学生街へ展開することを目指している。',
      confidence: 'medium', sources: [WEB, 'https://ahou.co.jp', TB, R + 'B465949458/', R + 'B482668294/', R + 'B483729921/', R + 'B507791814/', R + 'B514939833/', R + 'B519629743/', R + 'B520934209/', R + 'B523957814/', R + 'B535890600/', R + 'B538416820/', R + 'B539941117/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by smartphone; ¥330 seat charge; prices may be pre-tax.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区聖護院山王町16-28',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog re-fetched 2026-11-26 (no closure notice); reviews through November 2026.' },
    pin_source: `Tabelog ${TB} (35.017539, 135.778984); cross-checked: GSI 京都府京都市左京区聖護院山王町16番地 (lot) 45 m; nearest existing record 13.0 m (vm_arash_s_kitchen); ${D0}; neighbour distances re-checked against main ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538416820/', TB],
    price_note: 'Prices from Tabelog and an October 2026 review; menu prices may be before tax.', last_checked: TODAY, items: [
      it('', '', 'Highball', '¥99', 'Drinks', 'ask', 'vegan', 'Tabelog; October 2026.', 'highball'),
      it('', '', 'Draft beer', '¥290', 'Drinks', 'no', 'vegan', 'Tabelog.', 'beer'),
      it('', '', 'Chicken giblet stew', '¥199', 'Small dishes', 'no', 'no', 'October 2026.', 'giblets'),
    ] }, {
    cuisine: '「学生が週2で通える」がテーマの、地元のアホウプロジェクトのにぎやかで安い焼き鳥の居酒屋 (公式サイト、食べログ)・炭火焼き鳥と炭火野菜、豊富な日本酒 (公式サイト)・生ビール290円、ハイボール99円、もつ煮199円、当日の単品飲み放題 (食べログ、2026年10月)・焼き鳥の盛り合わせ、レバー、せせり、甘辛の手羽先、半熟卵のポテトサラダ、だし巻き、月見つくね、鉄板のヤンニョムチーズチキン、鴨の塩ラーメンなどの季節の限定メニュー (2023〜2026年)・2,000〜3,000円ほど (食べログ)',
    neighborhood: '熊野神社、聖護院',
    gf_detail: '要確認。塩の焼き鳥は合う可能性があるが、たれ、串揚げ、軟骨の唐揚げ、手羽先のたれは小麦や醤油。グルテンの情報はない (2023〜2026年の口コミ)。',
    vegan_detail: '要確認。炭火野菜、キャベツ、たたききゅうりもあるが、鶏が中心 (公式サイト、2023〜2026年の口コミ)。',
    notes: '[焼き鳥居酒屋・熊野神社のそば、1時まで] ビールのたびにスタッフが「乾杯」と叫ぶ、にぎやかで親しみやすい学生価格の焼き鳥。ハイボール99円、炭火の串、甘辛の手羽先、だし巻き。お席代330円、税抜き表示の場合あり。',
  });
}

// ================================================================ L'aparté
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26037901/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://laparte.net/';
  const H = day(['12:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_laparte_nishihonganji', name: 'L’aparté', category: 'MOM_AND_POP',
    lat: 34.99275973707005, lng: 135.75389737908114, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Allergies and restrictions must be stated when booking, and requests on the day may not be possible (Tabelog). No gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask when booking: dietary and religious restrictions are requested in advance (Tabelog); courses include duck, pork, octopus and fish (2022–2024 reviews).',
    hours_raw: 'Tuesday–Saturday and holidays: lunch 12:00–15:00 (last seating 13:00), dinner 18:00–22:00 (last seating 19:00); closed Sunday and Monday, but open on the Sunday before a Monday holiday (Tabelog). Reservations: state allergies, dislikes and religious restrictions (or “none”) when booking; one course per person; call if arriving early (Tabelog). Courses only, no à la carte; guests arriving before opening may have to wait; a booking may be cancelled if the party is 30 minutes late without contact; the menu can change on the day (official site, 2026-11-26). Service charge 10%, no cover (Tabelog original サービス料10%、チャージ料金なし). Cards and iD/QUICPay; no QR (Tabelog). 10 seats, counter by the open kitchen and tables; non-smoking (Tabelog; 2022 reviews). Down an alley near Nishi Hongan-ji; coin parking to the west (2022; September 2024). Opened 10 July 2022 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishi Hongan-ji, Gojo',
    cuisine: 'Modern French by a French chef, blending Japanese ingredients and techniques into colourful, playful courses (Tabelog; 2022–2026 reviews) · Heritage ¥8,000 including tax (three hors d’oeuvres, main, dessert, coffee or tea) and Menu Aparté ¥15,000 including tax (amuse-bouche, two starters, fish, meat, main, two desserts); cheese plate +¥1,500; free anniversary chocolate plate (official site, 2026-11-26) · Heritage lunch ¥8,000 before tax, e.g. corn vichyssoise, green beans amandine, sanma with Dijon (September 2024 review) · five-course lunch ¥9,680 including tax and service (October 2022) · dishes named like riddles on an origami menu: “8” of octopus with adzuki beans and Bigorre pancetta; Ohmi duck with Kujo leek confit (July 2023) · all wines by the glass poured by Coravin (December 2022); wine pairings chosen by the chef (official site; October 2026) · lunch about ¥8,000–15,000, dinner about ¥10,000–30,000 (Tabelog; reviews)',
    website: WEB, gmaps: gm("L'aparté 京都 西若松町"), menu_url: null,
    notes: '[French · near Nishi Hongan-ji, 10 seats] A casual neighbourhood bistro where a Loire-born chef with 11 years under Alain Ducasse cooks witty, colourful courses with Japanese ingredients; the chef’s wife hosts. State allergies when booking. 10% service; closed Sunday and Monday.',
    chef_bio: { chef_name: 'Anthony Bâcle', roles: ['Owner-chef'], origin: 'Loire region, France (born 1985)',
      background: 'Per the official site: born in 1985 in the Loire region of France; after culinary school in France, worked in Michelin-starred restaurants in Paris, Osaka and New York, then became executive chef at ヴォヤージュ in Macau and at ブノア京都 in Kiyomizu; left Alain Ducasse after 11 years to open L’aparté (French for a private aside) in July 2022; also known for house-made bread and baked sweets. Per reviewers: trained at Alain Chapel and also worked at Benoit in Osaka (October 2022). The chef’s wife, a Japanese designer who loves wine, hosts and chooses the wines with the chef; a second chef completes the team of three (October and December 2022 reviews). Reviewers differ on the chef’s Japanese: fluent (October 2022), somewhat limited (December 2022). Most reviews are warm; an October 2023 diner found the portions small and the dishes not to taste, a December 2022 diner found some wines cheap-tasting, and an October 2026 diner felt the price high for the casual setting.',
      philosophy: 'Respect for the roots and fundamentals of French cooking, blended with local ingredients and techniques (Tabelog).', specialty: 'Modern French courses.',
      anecdotes: [
        { text: 'A July 2023 diner decoded the riddle-like menu — “8” was octopus, after its legs.', source: R + 'B467393426/' },
        { text: 'Guests on the first anniversary in July 2023 were poured champagne on the house and loved the origami menu.', source: R + 'B468619578/' },
        { text: 'An October 2022 lunch began with fresh carrot juice poured by the chef in front of the open kitchen.', source: R + 'B455769656/' },
      ],
      japanese_sources_summary: '食べログ: フレンチ・ビストロ、下京区西若松町247-3、火〜土・祝日 12:00〜15:00 (最終入店13:00)、18:00〜22:00 (最終入店19:00)、日・月休み (月曜祝日の場合は前日の日曜営業)、予約時にアレルギー・苦手・宗教上食べられない物を記入 (なければ「なし」)、当日の要望は対応できない場合あり、1人1コース、サービス料10%、チャージ料金なし、カード・iD・QUICPay 可、QR 不可、10席、禁煙、2022年7月10日開店、紹介文 (英訳): 日本を愛するフランス人シェフのモダンフレンチ。公式サイト: オーナーシェフ Anthony Bâcle (アントニー・バックル)、1985年フランス・ロワール地方出身、パリ・大阪・ニューヨークのミシュラン星付きレストラン、マカオの「ヴォヤージュ」と「ブノア京都」でエグゼクティブシェフ、アラン・デュカスのもとで11年、2022年7月開店、自家製のパンや焼き菓子、コースのみ、Heritage 8,000円・Menu Aparté 15,000円 (税込)。口コミ (2022年〜2026年10月、英語): シェフは Alain Chapel で修業し Alain Ducasse のグループで世界各地 (マカオなど) のあと Benoit (大阪、京都)、デザイナーの妻がホステス、西本願寺近くの路地、オープンキッチンのカウンター、折り紙のメニュー、なぞなぞのような料理名、たこの「8」、近江の鴨と九条ねぎ、Heritage のランチ8,000円 (税別)、5品のランチ9,680円 (税・サ込み)、Coravin のグラスワイン、ペアリング。',
      confidence: 'medium', sources: [TB, WEB, WEB + 'about/', WEB + 'menu/', R + 'B455769656/', R + 'B457908510/', R + 'B467393426/', R + 'B468619578/', R + 'B474895797/', R + 'B483474052/', R + 'B489053187/', R + 'B491513682/', R + 'B491622438/', R + 'B537049028/'] },
    cultural_comfort: { level: 'english', note: 'French chef; the official menu is in Japanese and English; state dietary needs when booking.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Allergies, dislikes and religious restrictions requested at booking; same-day requests may not be accommodated (Tabelog).'] },
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区西若松町247-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog re-fetched 2026-11-26 (no closure notice); review October 2026.' },
    pin_source: `Tabelog ${TB} (34.992760, 135.753897); cross-checked: GSI 京都府京都市下京区西若松町247番地 (lot) 22 m; nearest existing record 122.5 m (kyr_ginjo_ramen_kubota); ${D0}; neighbour distances re-checked against main ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [WEB + 'menu/', R + 'B491622438/'],
    price_note: 'Official site prices (2026-11-26), including tax; service charge 10% (Tabelog). A September 2024 review gave Heritage as ¥8,000 before tax.', last_checked: TODAY, items: [
      it('', '', 'Heritage (three hors d’oeuvres, main, dessert, coffee or tea)', '¥8,000', 'Courses', 'ask', 'ask', 'Official site, including tax.', 'heritage'),
      it('', '', 'Menu Aparté (amuse-bouche, two starters, fish, meat, main, two desserts)', '¥15,000', 'Courses', 'ask', 'ask', 'Official site, including tax.', 'aparte'),
      it('', '', 'Cheese plate (added before dessert)', '+¥1,500', 'Extras', 'ask', 'no', 'Official site, including tax.', 'cheese'),
    ] }, {
    cuisine: '日本の素材と技法を取り入れた、フランス人シェフの色鮮やかで遊び心のあるモダンフレンチ (食べログ、2022〜2026年の口コミ)・Heritage 8,000円 (税込: オードブル3種、メイン、デザート、コーヒーか紅茶) と Menu Aparté 15,000円 (税込: アミューズ、前菜2品、魚料理、肉料理、メイン、デザート2品)、チーズの追加1,500円、記念日のチョコプレート無料 (公式サイト、2026年11月)・Heritage のランチ8,000円 (税別、2024年9月の口コミ): 黄色いとうもろこしの冷製ヴィシソワーズ、さやいんげんのアマンディーヌ、さんまとディジョンマスタード (2024年9月)・税・サ込みの5品のランチ9,680円 (2022年10月)・折り紙のメニューになぞなぞのような料理名: たこと小豆とビゴール豚のパンチェッタの「8」、近江の鴨と九条ねぎのコンフィ (2023年7月)・グラスワインはすべて Coravin で (2022年12月)、シェフが選ぶワインのペアリング (公式サイト、2026年10月)・昼8,000〜15,000円ほど、夜10,000〜30,000円ほど (食べログ、口コミ)',
    neighborhood: '西本願寺、五条',
    gf_detail: '要確認。アレルギーや制限は予約時に伝える必要があり、当日の要望は対応できない場合がある (食べログ)。グルテンの情報はない。',
    vegan_detail: '要確認。食事の制限や宗教上の制限は予約時に (食べログ)。コースには鴨、豚、たこ、魚 (2022〜2024年の口コミ)。',
    notes: '[フレンチ・西本願寺の近く、10席] Alain Ducasse のもとで11年研鑽を積んだロワール出身のシェフが、日本の素材で機知に富んだ色鮮やかなコースを出す気軽なビストロ。ホステスはシェフの妻。アレルギーは予約時に。サービス料10%、日・月休み。',
  });
}

save();
