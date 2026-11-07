// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 58.
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   - Tricoh — too thin to verify (one 2025–26 review with text)
//   - ザ・ヴイアールルーム・キョート — no 2025–26 reviews (latest March 2023)
//   + まんざら亭 先斗町店 Manzara Tei (Kyoto obanzai izakaya in Pontocho; 株式会社ステップ)
//   + Japanese Whisky Bar seven KYOTO (Japanese-whisky bar off Pontocho)
//   + SILK (pound-cake specialist on Gokomachi; since 2022)
//   - 鳴門鯛焼本舗 祇園四条店 — chain
//   - The RIVER Kyoto Gion — no 2025–26 reviews (latest August 2016)
//   - 食酒活彩 多茂利 — too thin to verify (one reviewer's one-line notes in 2025–26)
//   + りゅう庵 Ryu An (wagyu yakiniku by the Kamo River at Gion-Shijo)
//   Same-name counts first: まんざら亭 0 — 株式会社ステップ (Kyoto, founded 1988) also runs まんざら亭 錦店 and ぎをん まんざら;
//   a March 2026 reviewer had been to other shops of the chain; none in data; a local group, drafted (FLAGGED if 5+);
//   seven 0; SILK 0 (one permanent shop plus pop-up events); りゅう庵 0.
//   None drafted is in data/kyoto.json by name or address.
//   Service charges checked against Tabelog's Japanese original: りゅう庵 「なし」; the other three have no section.
//   Pins checked against main 770f5582; no offsets needed.
//   Ruling applied: single-review remarks about other diners left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-58');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26013893', 'too thin to verify: one 2025–26 review with text (July 2025) and one empty (December 2025)');
skip('26030687', 'no 2025–26 reviews: latest March 2023');
skip('26038499', 'chain: 鳴門鯛焼本舗');
skip('26023007', 'no 2025–26 reviews: latest August 2016');
skip('26016371', 'too thin to verify: 2025–26 coverage is one reviewer\'s one-line notes (June 2025–March 2026)');

// ================================================================ まんざら亭 先斗町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26000957/'; const R = TB + 'dtlrvwlst/';
  const PR = 'https://webtan.impress.co.jp/r/prtimes/items/000000001.000161795';
  const D = day(['17:00', '23:00']);
  put({
    id: 'kyoto_manzaratei_pontocho', name: 'まんざら亭 先斗町店 (Manzara Tei, Pontocho)', category: 'OMNI',
    lat: 35.006085, lng: 135.771019, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Obanzai, sashimi and grilled fish, but nama-fu (wheat gluten), udon and soy- or miso-seasoned dishes are on the menu (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, duck and dashi-based Kyoto dishes (2026 reviews).',
    hours_raw: 'Daily 17:00–23:00 (last orders food 22:00, drinks 22:30); irregular closures (Tabelog). Bookings taken; walk-ins seated when there is room (Tabelog; March and May 2026 reviews). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 50 seats (up to 70) — counter, tables and a second-floor tatami room; non-smoking (Tabelog; June 2026 review). In Pontocho north of Shijo, 5 min from Hankyu Kawaramachi and Keihan Gion-Shijo Stns (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho, north of Shijo — 5 min from Kawaramachi Stn',
    cuisine: 'Kyoto obanzai and seasonal dishes with Kyoto sake (2026 reviews): assorted "omazai" plates of 3 or 5 kinds (5 for ¥2,000 — duck breast, hamo with new onion, octopus, jako with manganji peppers; extra duck ¥950, June 2026), aburi heshiko, sashimi for two, hamo sashimi, Kamo eggplant agedashi, furofuki daikon, daikon cake, Saikyo-grilled fish, nama-fu dengaku, saba sushi, Kyoto pickles, chirimen-jako rice and udon to finish, ice cream; Yamazaki umeshu soda, Kyoto white wine; courses and all-you-can-drink (Tabelog)',
    website: null, gmaps: gm('まんざら亭 先斗町店'), menu_url: TB + 'dtlmenu/',
    notes: "[Kyoto obanzai · Pontocho] A calm, non-smoking Pontocho izakaya from a Kyoto group: small plates of Kyoto obanzai, aburi heshiko, hamo and Kamo eggplant in summer, Saikyo-grilled fish and saba sushi with plenty of Kyoto sake, at a counter or upstairs on tatami. About ¥4,000–6,000.",
    chef_bio: { chef_name: null, roles: ['Restaurant of 株式会社ステップ (no person named)'], origin: null,
      background: 'Run by 株式会社ステップ of Kyoto, founded in 1988, which also runs まんざら亭 錦店 and ぎをん まんざら (PR TIMES release; Gurunavi). A March 2026 reviewer had been to other shops of the chain before this one.',
      philosophy: null, specialty: 'Obanzai; Kyoto sake.',
      anecdotes: [
        { text: 'A January 2026 couple seated by the window had aburi heshiko, sashimi for two, furofuki daikon and three kinds of "omazai", and found the portions small enough for a first or last stop.', source: R + 'B522134475/' },
        { text: 'Kept in Kyoto by a double typhoon in June 2026, a family with three small children called ahead and found the second-floor tatami room otherwise empty; the children loved the duck breast.', source: R + 'B531384007/' },
        { text: 'A solo June 2026 diner marked summer with hamo sashimi and Kamo eggplant agedashi over a draft beer.', source: R + 'B530049746/' },
      ],
      japanese_sources_summary: '食べログ: まんざら亭 先斗町店、居酒屋・日本料理・海鮮、中京区下樵木町198-1、阪急河原町駅・京阪祇園四条駅から徒歩5分、毎日 17:00〜23:00 (料理 L.O. 22:00、ドリンク L.O. 22:30)、不定休、予約可、カード・PayPay 可、電子マネー不可、50席 (最大70名、テーブル・カウンター・座敷)、禁煙、日本酒・ワインにこだわる、コース、飲み放題。PR TIMES: 株式会社ステップ (京都市、1988年設立) がまんざら亭を運営。ぐるなび: 錦店、ぎをん まんざら。口コミ (2026年1〜6月、英語): Omazai 3種・5種 (5種2,000円、鴨ロース、鱧と新玉ねぎ、たこ、じゃこと万願寺)、鴨の追加950円、へしこの炙り、刺身の盛り合わせ、鱧の落とし、賀茂なすの揚げ出し、ふろふき大根、大根餅、西京焼き、生麩田楽、鯖寿司、京漬物、ちりめんじゃこご飯、締めのうどん、Yamazaki 梅酒のソーダ、京都の白ワイン、2階の座敷、同じチェーンの他の店という声。',
      confidence: 'medium', sources: [TB, PR, 'https://r.gnavi.co.jp/k121703/', R + 'B521355890/', R + 'B522134475/', R + 'B523435478/', R + 'B526858120/', R + 'B527899469/', R + 'B530049746/', R + 'B530169225/', R + 'B531384007/', R + 'B531653780/', R + 'B532341956/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter or tatami; staff welcome walk-ins when there is room.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区下樵木町198-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.006085, 135.771019); cross-checked: GSI 京都府京都市中京区下樵木町198番地 (lot) 30m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531384007/'],
    price_note: 'Prices from a June 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Assorted "omazai" (5 kinds)', '¥2,000', 'Obanzai', 'ask', 'no', 'June 2026 review.', 'omazai'),
      it('', '', 'Duck breast (extra)', '¥950', 'Dishes', 'ask', 'no', 'June 2026 review.', 'kamo_rosu'),
    ] }, {
    cuisine: '京都の日本酒と楽しむおばんざいと季節の料理 (2026年の口コミ): 3種か5種の「Omazai」の盛り合わせ (5種2,000円、鴨ロース、鱧と新玉ねぎ、たこ、じゃこと万願寺とうがらし、鴨の追加950円、2026年6月)、へしこの炙り、二人前の刺身、鱧の落とし、Kamo なすの揚げ出し、ふろふき大根、大根餅、西京焼き、生麩田楽、鯖寿司、京漬物、締めのちりめんじゃこご飯やうどん、アイス。Yamazaki 梅酒のソーダ、京都の白ワイン。コースと飲み放題 (食べログ)',
    neighborhood: '先斗町、四条の北。河原町駅から徒歩5分',
    gf_detail: '要確認。おばんざい、刺身、焼き魚だが、生麩 (小麦)、うどん、醤油や味噌の味付けもある (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、鴨、だしの京料理 (2026年の口コミ)。',
    notes: '[おばんざい・先斗町] 京都のグループの、落ち着いた禁煙の先斗町の居酒屋。京のおばんざいの小皿、へしこの炙り、夏は鱧と Kamo なす、西京焼きや鯖寿司を京都の日本酒と、カウンターか2階の座敷で。4千〜6千円ほど。',
  });
}

// ================================================================ Japanese Whisky Bar seven KYOTO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26043797/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '26:00']);
  put({
    id: 'kyoto_japanese_whisky_bar_seven', name: 'Japanese Whisky Bar seven KYOTO', category: 'OMNI',
    lat: 35.00621, lng: 135.770789, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A whisky bar; no food described (2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A whisky bar; no food described (2025–26 reviews).',
    hours_raw: 'Tue–Sun and holidays 17:00–2:00 (last order 1:30); closed Monday (Tabelog). Bookings taken, though rarely needed (Tabelog; February 2026 review). Cards, QUICPay and QR (Tabelog). 24 places — an L-shaped counter of 12, tables for 8, 4 standing; non-smoking (Tabelog; August 2026 review). Prices run a little high (February 2026 review). Tucked into an alley behind a hotel off Pontocho, about 5 min from Gion-Shijo, Kawaramachi and Sanjo Stns (Tabelog; August 2026 review).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho, north of Shijo — 5 min from Gion-Shijo Stn',
    cuisine: 'Japanese whisky only — more than 300 bottlings from Yamazaki, Hakushu and Hibiki to discontinued rarities, with tasting sets by age (February 2026): Hakushu 12 ¥3,200 and discontinued Taketsuru 17 ¥5,000 (February 2026); a three-Yamazaki tasting (non-age, 12, 18) ¥9,000 (April 2026); served in glasses with a Mount Fuji image (2025–26 reviews)',
    website: null, gmaps: gm('Japanese Whisky Bar seven KYOTO'), menu_url: null,
    notes: "[Japanese whisky bar · Pontocho] A bright, friendly bar off Pontocho pouring only Japanese whisky — 300-plus bottlings, rare and discontinued ones included, and tasting flights such as three Yamazakis for ¥9,000. Staff recommend by taste. About ¥4,000–10,000. Open till 2:00; closed Monday.",
    chef_bio: { chef_name: null, roles: ['Master and staff (unnamed)'], origin: null,
      background: 'A Japanese-whisky bar reviewed from October 2025 (Tabelog).',
      philosophy: null, specialty: 'Japanese whisky tasting sets.',
      anecdotes: [
        { text: 'A brandy lover in April 2026 was won over to whisky by the ¥9,000 tasting of three Yamazakis.', source: R + 'B534280554/' },
        { text: 'A March 2026 visitor talked whisky with the friendly master and was given a kimono-fabric coaster as a souvenir.', source: R + 'B526397254/' },
        { text: 'A February 2026 visitor tried Hakushu 12 straight and on the rocks and the discontinued Taketsuru 17.', source: R + 'B523461249/' },
      ],
      japanese_sources_summary: '食べログ: Japanese Whisky Bar seven KYOTO、バー、中京区下樵木町196、京阪祇園四条駅・阪急河原町駅・京阪三条駅から徒歩5分、火〜日・祝 17:00〜翌2:00 (L.O. 1:30)、月曜休み、予約可、カード・QUICPay・QR 可、24席 (カウンター12、テーブル8、立ち4)、禁煙。口コミ (2025年10月〜2026年8月、英語): 300種以上の日本のウイスキー、Yamazaki・Hakushu・Hibiki から終売の希少品まで、年数別の飲み比べ、Hakushu 12年3,200円、終売の Taketsuru 17年5,000円、Yamazaki 3種の飲み比べ9,000円、富士山の絵の入ったグラス、着物の生地のコースター、気さくなマスター、好みを伝えると勧めてくれる、ホテルの裏の路地、少し高めという声。',
      confidence: 'medium', sources: [TB, R + 'B515772393/', R + 'B523461249/', R + 'B526397254/', R + 'B534280554/', R + 'B535390264/'] },
    cultural_comfort: { level: 'english', note: 'Staff guide by taste; many overseas guests.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区下樵木町196',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.006210, 135.770789); cross-checked: GSI 京都府京都市中京区下樵木町196番地 (lot) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534280554/', R + 'B523461249/'],
    price_note: 'Prices from February and April 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Yamazaki tasting (non-age, 12, 18)', '¥9,000', 'Whisky', 'ask', 'ask', 'April 2026 review.', 'yamazaki_flight'),
      it('', '', 'Hakushu 12 (glass)', '¥3,200', 'Whisky', 'ask', 'ask', 'February 2026 review.', 'hakushu12'),
    ] }, {
    cuisine: '日本のウイスキーだけ。Yamazaki、Hakushu、Hibiki から終売の希少品まで300種以上、年数別の飲み比べも (2026年2月): Hakushu 12年3,200円、終売の Taketsuru 17年5,000円 (2026年2月)、Yamazaki 3種 (ノンエイジ、12年、18年) の飲み比べ9,000円 (2026年4月)。富士山の絵の入ったグラス (2025〜26年の口コミ)',
    neighborhood: '先斗町、四条の北。祇園四条駅から徒歩5分',
    gf_detail: '要確認。ウイスキーのバーで、食べ物の説明はない (2025〜26年の口コミ)。',
    vegan_detail: '要確認。ウイスキーのバーで、食べ物の説明はない (2025〜26年の口コミ)。',
    notes: '[日本のウイスキーのバー・先斗町] 先斗町の路地の、明るく気さくなバー。日本のウイスキーだけを300種以上、終売の希少品も揃え、Yamazaki 3種で9,000円などの飲み比べも。好みを伝えれば勧めてくれる。4千〜1万円ほど。深夜2時まで。月曜休み。',
  });
}

// ================================================================ SILK
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26037515/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://silk-kyoto.com/';
  const D = day(['10:00', '18:30']);
  put({
    id: 'kyoto_silk_pound_cake', name: 'SILK (Kyoto Pound Cake Silk)', category: 'OMNI',
    lat: 35.005934, lng: 135.766422, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat pound cakes (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: butter-rich pound cakes, some with cheese (reviews).',
    hours_raw: '10:00–18:30; closed Tuesday, open on holidays (official site; Tabelog). Takeaway only (official site). Bookings taken (Tabelog). Cards, e-money and QR (Tabelog). Also an online shop and pop-up counters at department stores around Japan (official site). On Gokomachi south of Takoyakushi, near Nishiki Market, about 5 min from Hankyu Kawaramachi Stn (official site).',
    hours: { 0: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gokomachi near Nishiki Market — 5 min from Kawaramachi Stn',
    cuisine: 'Pound cakes in large, small and cut sizes (2023–26 reviews): the signature Lemon Sweet with a sugar glaze, browned butter and lemon ¥1,400 (January 2025); mini cakes such as blueberry cheese ¥486, pistachio and cherry ¥562 and honey lemon ¥497 (March 2025); vanilla, hojicha, Kyoto matcha with bean paste, apple in winter, sakura in spring (April 2026); a premium chestnut and roasted sweet-potato cake in a paulownia box (2024)',
    website: SITE, gmaps: gm('SILK パウンドケーキ 御幸町'), menu_url: null,
    notes: "[Pound cake · Gokomachi] A takeaway pound-cake specialist near Nishiki Market with an arched door: glazed Lemon Sweet, mini cakes of pistachio-cherry or blueberry-cheese around ¥500, and seasonal sakura or apple, in pretty Kyoto gift bags. Closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Shop staff (unnamed)'], origin: null,
      background: 'Opened 29 April 2022 (Tabelog). The official site lists this Gokomachi main shop as the only permanent shop, with an online shop and pop-up events at department stores across Japan.',
      philosophy: 'Pound cakes pursuing a smooth, rich sweetness, for a luxurious moment (official site).',
      specialty: 'Lemon Sweet.',
      anecdotes: [
        { text: 'A March 2025 visitor thought the shopfront looked like a nail salon, then chose blueberry, pistachio and lemon mini cakes from more than ten kinds.', source: R + 'B507774265/' },
        { text: 'An April 2026 buyer of three cakes, including a spring Sakura Pound, was taken with the Kyoto-styled shopping bag.', source: R + 'B531890055/' },
        { text: 'A January 2025 reviewer found the Lemon Sweet\'s glaze stronger than its lemon.', source: R + 'B498862411/' },
      ],
      japanese_sources_summary: '公式サイト: 京都パウンドケーキ専門店シルク御幸町本店、中京区御幸町通蛸薬師下る船屋町370、10:00〜18:30、火曜休み (祝日は営業)、テイクアウト、オンラインショップ、全国の百貨店などの催事。食べログ: SILK、ケーキ、予約可、カード・電子マネー・QR 可、2022年4月29日オープン。口コミ (2023年5月〜2026年4月、英語): レモンスウィート1,400円 (焦がしバターとレモン、糖衣)、ミニのブルーベリーチーズ486円・ピスタチオとチェリー562円・はちみつレモン497円、バニラ、ほうじ茶、京抹茶とあん、冬のりんご、春の桜、桐箱の栗と焼き芋のプレミアム、10種以上、京都らしい紙袋。',
      confidence: 'medium', sources: [TB, SITE, R + 'B498862411/', R + 'B499782060/', R + 'B506804467/', R + 'B507774265/', R + 'B517371744/', R + 'B531890055/', R + 'B490013544/', R + 'B471566086/'] },
    cultural_comfort: { level: 'none_needed', note: 'Takeaway counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区御幸町通蛸薬師下ル船屋町370',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB} (35.005934, 135.766422); cross-checked: GSI 京都府京都市中京区船屋町370番地 (lot) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B498862411/', R + 'B507774265/'],
    price_note: 'Prices from January and March 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lemon Sweet pound cake', '¥1,400', 'Pound cakes', 'no', 'no', 'January 2025 review.', 'lemon_sweet'),
      it('', '', 'Mini pound cake (pistachio and cherry)', '¥562', 'Pound cakes', 'no', 'no', 'March 2025 review.', 'mini_pistachio'),
    ] }, {
    cuisine: '大・小・カットのパウンドケーキ (2023〜26年の口コミ): 看板の糖衣と焦がしバターとレモンの Lemon Sweet 1,400円 (2025年1月)、ミニのブルーベリーチーズ486円、ピスタチオとチェリー562円、はちみつレモン497円 (2025年3月)、バニラ、ほうじ茶、あんの京抹茶、冬のりんご、春の桜 (2026年4月)、桐箱の栗と焼き芋のプレミアムなケーキ (2024年)',
    neighborhood: '錦市場の近くの御幸町。河原町駅から徒歩5分',
    gf_detail: 'グルテンフリー不可。小麦のパウンドケーキ (口コミ)。',
    vegan_detail: 'ヴィーガン不可。バターたっぷりのパウンドケーキ、チーズのものも (口コミ)。',
    notes: '[パウンドケーキ・御幸町] 錦市場近くの、アーチの扉の持ち帰りのパウンドケーキ専門店。糖衣の Lemon Sweet、ピスタチオとチェリーやブルーベリーチーズのミニが500円ほど、季節の桜やりんごも。京都らしい紙袋で贈り物にも。火曜休み。',
  });
}

// ================================================================ りゅう庵
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26023217/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.gion-ryuan.com/';
  const W = day(['11:30', '14:00'], ['17:00', '22:30']); const E = day(['11:30', '15:00'], ['17:00', '22:30']);
  put({
    id: 'kyoto_ryuan_gion_shijo', name: 'りゅう庵 (Ryu An)', category: 'OMNI',
    lat: 35.004948, lng: 135.772435, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Grilled wagyu with salt or ponzu is possible, but sauces, a hamburg steak and soups are on the menu (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu yakiniku restaurant (2025–26 reviews).',
    hours_raw: 'Mon–Wed and Fri 11:30–14:00 and 17:00–22:30; Sat and Sun 11:30–15:00 and 17:00–22:30; holidays 11:30–15:00 and 17:00–22:00; closed Thursday (Tabelog). Lunch walk-ins at weekends and holidays; weekday lunch by booking (Tabelog). Service charge: Tabelog\'s Japanese original says 「なし」 (none). Cards, e-money and PayPay (Tabelog). 30 seats with semi-private and private rooms for 2 to 20; non-smoking (Tabelog; January and February 2026 reviews). On Kawabata just north of Shijo, 1 min from Keihan Gion-Shijo Stn exit 9 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawabata-Shijo, by the Kamo River — 1 min from Gion-Shijo Stn',
    cuisine: 'Wagyu yakiniku, including Kobe and Omi beef (2025–26 reviews): at lunch, a yaki-shabu set with rice, soup, pickles, salad and dessert ¥1,600 (June 2025), a grilled-meat set and a limited raw hamburg steak (five a day, January 2026); at night tongue in three to five cuts, outside skirt, short rib, zabuton, liver in a hot stone pot, yukhoe, Kobe beef carpaccio, tongue soup, a special Kobe and Omi set with chateaubriand for +¥3,000 (January 2026), courses around ¥25,000 (October 2026)',
    website: SITE, gmaps: gm('りゅう庵 祇園四条 焼肉'), menu_url: TB + 'dtlmenu/',
    notes: "[Wagyu yakiniku · Gion-Shijo] A calm yakiniku of private and semi-private rooms by the Kamo River at Gion-Shijo: good-value yaki-shabu lunches around ¥1,600 and, at night, Kobe and Omi wagyu — tongue in several cuts, chateaubriand, stone-pot liver — from about ¥10,000. Closed Thursday.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'A Gion-Shijo yakiniku restaurant (official site; Tabelog) whose menu opens by promising "the best meat of your life" (October 2026 review).',
      philosophy: null, specialty: 'Kobe and Omi wagyu; tongue.',
      anecdotes: [
        { text: 'Starting a meat trip in January 2026, a diner had the Kobe and Omi special set and added a thick Omi chateaubriand for ¥3,000.', source: R + 'B520102143/' },
        { text: 'A January 2026 lunch guest caught one of the five daily raw hamburg steaks, tender enough to eat with a spoon.', source: R + 'B521412348/' },
        { text: 'An October 2026 diner called the ¥25,000 course not expensive, from Kobe beef carpaccio to three cuts of tongue.', source: R + 'B537980333/' },
      ],
      japanese_sources_summary: '食べログ: りゅう庵、焼肉・日本料理・居酒屋、東山区川端四条上ル常盤町169、京阪祇園四条駅9番出口から徒歩1分、月〜水・金 11:30〜14:00・17:00〜22:30、土日 11:30〜15:00・17:00〜22:30、祝日 11:30〜15:00・17:00〜22:00、木曜休み、平日の昼は予約制、サービス料なし、カード・電子マネー・PayPay 可、30席、個室 (2〜20名)、禁煙。口コミ (2025年3月〜2026年10月、英語): 昼の焼きしゃぶ定食1,600円 (ご飯、汁、漬物、サラダ、小鉢、デザート)、焼肉の定食、1日5食の生ハンバーグ、神戸牛と近江牛の特選盛りとシャトーブリアン +3,000円、石鍋のレバー、ざぶとん、5種のタン、神戸牛のカルパッチョ、タンのスープ、約25,000円のコース、半個室。',
      confidence: 'medium', sources: [TB, SITE, R + 'B467293356/', R + 'B503201750/', R + 'B504192986/', R + 'B516293662/', R + 'B520102143/', R + 'B521412348/', R + 'B523042952/', R + 'B523695017/', R + 'B527811720/', R + 'B537980333/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Private rooms; menu can be confusing at first.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区川端四条上ル常盤町169',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004948, 135.772435); cross-checked: GSI 京都府京都市東山区常盤町169番地 (lot) 32m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B467293356/', R + 'B520102143/'],
    price_note: 'Prices from June 2025 and January 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Yaki-shabu lunch set', '¥1,600', 'Lunch', 'ask', 'no', 'June 2025 review.', 'yakishabu_lunch'),
      it('', '', 'Chateaubriand (add-on to the special set)', '+¥3,000', 'Dinner', 'ask', 'no', 'January 2026 review.', 'chateaubriand'),
    ] }, {
    cuisine: '神戸牛や近江牛の和牛の焼肉 (2025〜26年の口コミ): 昼はご飯・汁・漬物・サラダ・デザート付きの焼きしゃぶの定食1,600円 (2025年6月)、焼肉の定食、1日5食の生ハンバーグ (2026年1月)。夜は3〜5種のタン、ハラミ、カルビ、ざぶとん、石鍋のレバー、ユッケ、神戸牛のカルパッチョ、タンのスープ、シャトーブリアン +3,000円の神戸牛と近江牛の特選盛り (2026年1月)、約25,000円のコース (2026年10月)',
    neighborhood: '川端四条、鴨川のそば。祇園四条駅から徒歩1分',
    gf_detail: '要確認。塩やポン酢で焼く和牛もあるが、たれ、ハンバーグ、スープもある (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。和牛の焼肉店 (2025〜26年の口コミ)。',
    notes: '[和牛焼肉・祇園四条] 祇園四条の鴨川のそばの、個室と半個室の落ち着いた焼肉店。昼は1,600円ほどの焼きしゃぶの定食、夜は神戸牛や近江牛のタンの食べ比べ、シャトーブリアン、石鍋のレバーで1万円ほどから。木曜休み。',
  });
}

save();
