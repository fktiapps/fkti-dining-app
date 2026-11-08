// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 73.
//   + ラムルーム Lamb Room (unfrozen-lamb Genghis Khan at a neon-lit counter, Takakura-Bukkoji) — rest
//   + ぽうる PAUL (Showa-era Omi beef steakhouse run by a couple, Hanamikoji) — rest
//   + 炭火焼鳥 チャブヤ 高倉店 Chabuya Takakura (charcoal yakitori in a townhouse, Takakura-Bukkoji) — rest
//   + KANA 伸子 Kana Nobuko (late-night negiyaki and okonomiyaki counter off Hanamikoji) — rest
//   - skip 26042212 OGATA at THE SHINMONZEN (hotel tea salon of a Tokyo-based multi-venue group)
//   - skip 26006080 SUGAR HILL KYOTO (no review since February 2020)
//   Rest tier, nearest-first from `next rest 2000`. queue-status.jsonl grepped for each brand (ラムルーム, OGATA, ぽうる, SUGAR HILL,
//   チャブヤ, KANA/伸子): no earlier rulings.
//   Same-name counts first (2026-11-07): ラムルーム — one. ぽうる — one. チャブヤ — one on Tabelog (the original Shijo-Karasuma shop
//   closed in March 2021); its ちゃぶ家グループ runs about six Kyoto shops under different names (チャブヤ, コテツ, MURO, コムロテツヤ,
//   夷川セカンド, 喫茶ジャニー; chabuya-honten.com) — local and under five same-name, so drafted. KANA 伸子 — one; a March 2020
//   review says it is loosely related to 祇園ねぎ焼 かな (in data as Gion Negiyaki Kana Higashi) but under different management —
//   drafted, flagged. None of the four is in data/kyoto.json.
//   Charges per Tabelog's Japanese original: ラムルーム 「チャージ料なし」; KANA 伸子 「なし」; ぽうる and チャブヤ none listed. No halal
//   claims; no owner deaths; single-review remarks about other diners and looks left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-73');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26042212', 'non-local multi-venue group: OGATA at THE SHINMONZEN is the hotel tea salon and shop of OGATA, which a November 2024 reviewer identifies as a branch of a Tokyo-based company — same footing as the ITOH DINING ruling (https://theshinmonzen.com/jp/boutique/ogata/; https://tabelog.com/en/kyoto/A2601/A260301/26042212/dtlrvwlst/B496534538/).');
skip('26006080', 'no 2025–26 review: the latest Tabelog review of SUGAR HILL KYOTO is from February 2020 (https://tabelog.com/en/kyoto/A2601/A260201/26006080/dtlrvwlst/).');

// ================================================================ ラムルーム
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26035816/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'kyoto_lamb_room_takakura', name: 'ラムルーム (Lamb Room)', category: 'OMNI',
    lat: 35.001497, lng: 135.762659, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the set finishes with garlic-chive yakisoba or lamb curry, and the dipping sauce is soy-based (2024–26 reviews); salt is an alternative (May 2024).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a lamb Genghis Khan restaurant; vegetables are cooked in lamb fat (2025 reviews).',
    hours_raw: 'Daily 18:00–23:00 (last order 22:00); irregular closures (Tabelog). Reservations strongly advised — full on weekday evenings (September 2025; April and May 2026). No charge (Tabelog, Japanese text: 「チャージ料なし」). Cards; no e-money or QR (Tabelog). 12 seats: 8 at the counter and two small tables (Tabelog; January 2026). Smoking area as circumstances allow (Tabelog). Takakura-dori north of Bukkoji, 5 min from Shijo or Hankyu Karasuma (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Takakura-dori, north of Bukkoji — Shijo / Karasuma',
    cuisine: 'Genghis Khan of fresh, never-frozen lamb grilled at your seat in individual pans, in a neon-lit, colourful room (Tabelog; 2025 reviews) · set with lamb shoulder, onions and bean sprouts ¥1,980; extra chuck roll ¥1,200; garlic-chive yakisoba to finish (August 2025) · three-kimchi appetizer; Sapporo Black Label in an ice-cold pint (September 2025) · lamb chops (July 2024; September 2025) · yakisoba or lamb curry to finish the set (October 2025; January 2026) · meat cut to order (January 2026)',
    website: null, gmaps: gm('ラムルーム 京都 高倉'), menu_url: TB,
    notes: '[Lamb Genghis Khan · Takakura-Bukkoji] A tiny, neon-lit counter near Shijo-Karasuma serving never-frozen lamb for Genghis Khan, cut to order and grilled on individual domed pans over bean sprouts and onion — a ¥1,980 set for one, lamb chops and shoulder roll to add, and garlic-chive yakisoba or lamb curry to finish. Mild enough for first-timers; a chatty master. Book ahead.',
    chef_bio: { chef_name: null, roles: ['Master/owner (unnamed), friendly and talkative (2024–26 reviews)'], origin: null,
      background: 'Per Tabelog: a Genghis Khan restaurant serving fresh lamb that has never been frozen, mild enough for first-timers.',
      philosophy: null, specialty: 'Fresh-lamb Genghis Khan; garlic-chive yakisoba.',
      anecdotes: [
        { text: 'A May 2024 diner tried lamb with salt for the first time and talked horse racing with the master.', source: R + 'B484997827/' },
        { text: 'An April 2026 regular notes the owner seems pleased when guests add an egg to the yakisoba.', source: R + 'B527248327/' },
        { text: 'A July 2026 regular finds summer the easiest time to book, since grilling at the table is hot work.', source: R + 'B527546710/' },
      ],
      japanese_sources_summary: '食べログ: ジンギスカン・居酒屋、下京区高倉通仏光寺上る西前町377、地下鉄四条駅・阪急烏丸駅から徒歩5分、毎日18:00〜23:00 (L.O. 22:00)、不定休、チャージなし、カード可、電子マネー・QR 不可、12席 (カウンター8、テーブル4)、冷凍しない生ラム。口コミ (2024年5月〜2026年10月、英語): ジンギスカンセット1,980円、chuck roll 追加1,200円、ニラ焼きそば、ラムカレー、ラムチョップ、キムチ3種のお通し、注文後に肉を切る、ネオンの店内、予約必須、気さくなマスター。',
      confidence: 'medium', sources: [TB, R + 'B484997827/', R + 'B488740476/', R + 'B512726329/', R + 'B512960557/', R + 'B513770924/', R + 'B515872823/', R + 'B516673702/', R + 'B521274938/', R + 'B527248327/', R + 'B527546710/', R + 'B534152426/', R + 'B536998076/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order the set (one per person or per two) and add meat. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区高倉通仏光寺上る西前町377',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.001497, 135.762659); cross-checked: GSI 京都府京都市下京区西前町377番地 (lot) 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B512726329/'],
    price_note: 'Prices from an August 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Genghis Khan set (one person)', '¥1,980', 'Sets', 'no', 'no', 'Lamb shoulder, onions, bean sprouts; yakisoba or curry to finish; August 2025.', 'set'),
      it('', '', 'Extra lamb chuck roll', '¥1,200', 'Lamb', 'ask', 'no', 'August 2025.', 'chuck_roll'),
      it('', '', 'Lamb chops', '', 'Lamb', 'ask', 'no', '2024–25 reviews.', 'lamb_chops'),
    ] }, {
    cuisine: 'ネオンが彩るカラフルな店内で、冷凍しない生ラムのジンギスカンを一人ずつの鍋で (食べログ、2025年の口コミ)・肩肉と玉ねぎともやしのセット1,980円、chuck roll 追加1,200円、締めはニラ焼きそば (2025年8月)・キムチ3種のお通し、キンキンのパイントの Sapporo Black Label (2025年9月)・ラムチョップ (2024年7月、2025年9月)・セットの締めは焼きそばかラムカレー (2025年10月、2026年1月)・注文後に肉を切る (2026年1月)',
    neighborhood: '高倉通、仏光寺の北。四条・烏丸',
    gf_detail: 'グルテンフリーではない。セットの締めはニラ焼きそばかラムカレーで、たれは醤油ベース (2024〜2026年の口コミ)。塩でも食べられる (2024年5月)。',
    vegan_detail: 'ヴィーガン不可。ラムのジンギスカン店で、野菜もラムの脂で焼く (2025年の口コミ)。',
    notes: '[ラムのジンギスカン・高倉仏光寺] 四条烏丸近くの、ネオンが光る小さなカウンターの店。冷凍しない生ラムを注文後に切り、一人ずつの鍋でもやしと玉ねぎの上で焼く。1人前1,980円のセット、ラムチョップや chuck roll の追加、締めはニラ焼きそばかラムカレー。初めてでも食べやすい。話好きのマスター。予約を。',
  });
}

// ================================================================ ぽうる
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26003554/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_steak_paul_gion', name: 'ぽうる (PAUL)', category: 'OMNI',
    lat: 35.005095, lng: 135.775429, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Courses of Omi beef sashimi with mustard soy sauce, soup, salad, steak and teriyaki (2024–26 reviews); salt alone suits the steak (April 2023); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an Omi beef steakhouse (2023–26 reviews).',
    hours_raw: 'Mon, Tue and Thu–Sun 17:00–23:00; closed Wednesday; may change (Tabelog). Cards (Tabelog). 20 seats (Tabelog). On Hanamikoji north of Shijo, near Yasaka Shrine (Tabelog; April 2023; February 2026). B course ¥22,000 incl. a glass of wine (June 2025).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Hanamikoji, north of Shijo — Gion-Shijo',
    cuisine: 'Long-established Showa-style steakhouse for A5 Omi beef from Maruki Shoten: tenderloin as steak, beef sashimi, teriyaki or pepper-grilled (June 2025; February 2026) · beef sashimi, soup, vegetables and steak with salt (April 2023) · corn soup, salad, steak with grilled vegetables, vanilla ice cream with fruit (September 2024) · B course with a glass of wine ¥22,000 (June 2025) · raw-beef starter and soup salad before the steak (December 2025)',
    website: null, gmaps: gm('ぽうる 祇園 ステーキ'), menu_url: TB,
    notes: '[Omi beef steakhouse · Hanamikoji, about 70 years] A dim, Showa-era steakhouse on Hanamikoji run by an elderly couple, with a small rock garden behind glass, serving A5 Omi beef tenderloin — first as sweet beef sashimi with mustard soy, then as steak, teriyaki or pepper-grilled. Courses run around ¥20,000–30,000 a head. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Husband-and-wife owners (unnamed) (June 2025; February 2026)'], origin: null,
      background: 'Per reviews: a long-established Gion steakhouse, said to be about 70 years old in February 2026, run by an elderly couple and serving Omi beef from Maruki Shoten.',
      philosophy: null, specialty: 'A5 Omi beef tenderloin; beef sashimi.',
      anecdotes: [
        { text: 'A June 2025 diner noted the proprietress’s calm manner as distinctly Kyoto.', source: R + 'B508770449/' },
        { text: 'A December 2025 regular says the raw beef looks doubtful at first glance but is delicious, and leaves feeling satisfied every time.', source: R + 'B519064313/' },
        { text: 'A February 2026 visitor praised the couple’s warm service and its Gion-style sense of distance.', source: R + 'B521920861/' },
      ],
      japanese_sources_summary: '食べログ: ステーキ、東山区花見小路四条上ル清本町、月・火・木〜日17:00〜23:00、水曜休み、カード可、20席。口コミ (2013年9月〜2026年2月、英語): 創業約70年の昭和の雰囲気のステーキ店、夫婦で営む、奥に石庭、Maruki Shoten の A5 近江牛のヒレ、牛刺し (からし醤油)、ステーキ、照り焼き、胡椒焼き、コーンスープ、サラダ、焼き野菜、バニラアイスと果物、ワイン1杯付き B コース22,000円。',
      confidence: 'medium', sources: [TB, R + 'B117863280/', R + 'B319130874/', R + 'B350714964/', R + 'B362966410/', R + 'B420713278/', R + 'B431741321/', R + 'B463664005/', R + 'B475486138/', R + 'B491549185/', R + 'B508770449/', R + 'B519064313/', R + 'B521920861/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A quiet, old-school room; the couple keep a respectful distance. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区花見小路四条上ル清本町',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through February 2026.' },
    pin_source: `Tabelog ${TB} (35.005095, 135.775352), offset 7 m east: kyoto_fresh_market_gion (清本町358-1 2F) sat 1.7 m away; the address has no lot number, so no GSI lot cross-check — approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B508770449/'],
    price_note: 'One course price from June 2025; reviewers report ¥15,000–29,999 per person.', last_checked: TODAY, items: [
      it('', '', 'B course (with a glass of wine)', '¥22,000', 'Courses', 'ask', 'no', 'Beef sashimi, soup, salad, steak; June 2025.', 'b_course'),
      it('', '', 'Omi beef sashimi', '', 'Starters', 'ask', 'no', 'With mustard soy sauce; 2023–26 reviews.', 'gyusashi'),
      it('', '', 'Omi beef tenderloin steak', '', 'Steak', 'ask', 'no', '2023–26 reviews.', 'steak'),
    ] }, {
    cuisine: 'Maruki Shoten の A5 近江牛を出す昭和の老舗のステーキ店。ヒレをステーキ、牛刺し、照り焼き、胡椒焼きで (2025年6月、2026年2月)・牛刺し、スープ、野菜、塩で食べるステーキ (2023年4月)・コーンスープ、サラダ、焼き野菜のステーキ、バニラアイスと果物 (2024年9月)・ワイン1杯付きの B コース22,000円 (2025年6月)・生の牛肉とスープサラダのあとにステーキ (2025年12月)',
    neighborhood: '花見小路、四条の北。祇園四条',
    gf_detail: '要確認。からし醤油の近江牛の牛刺し、スープ、サラダ、ステーキ、照り焼きのコース (2024〜2026年の口コミ)。ステーキは塩だけでも (2023年4月)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。近江牛のステーキ店 (2023〜2026年の口コミ)。',
    notes: '[近江牛のステーキ・花見小路、約70年] 花見小路の、年配のご夫婦が営む薄暗い昭和のステーキ店。ガラス越しに小さな石庭。A5 の近江牛のヒレを、まず甘い牛刺しをからし醤油で、それからステーキ、照り焼き、胡椒焼きで。コースは1人2〜3万円ほど。水曜休み。',
  });
}

// ================================================================ 炭火焼鳥 チャブヤ 高倉店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26005666/'; const R = TB + 'dtlrvwlst/'; const SITE = 'http://www.chabuya-honten.com/takakura/';
  const H = day(['18:00', '00:00']);
  put({
    id: 'kyoto_chabuya_takakura', name: '炭火焼鳥 チャブヤ 高倉店 (Sumibi Yakitori Chabuya Takakura)', category: 'OMNI',
    lat: 35.001582, lng: 135.762572, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Salt-seasoned skewers such as neck and breast with wasabi are on offer (September 2026), but fried bread, ramen and tare dishes are on the menu; no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken yakitori house; oden in dashi (2025–26 reviews).',
    hours_raw: 'Mon–Sat 18:00–0:00 (last order 23:00); closed Sunday (Tabelog; January 2026). Reservations advised — often full by 18:00, and popular cuts sell out late (Tabelog; October 2025; January and March 2026). Cards; no e-money or QR (Tabelog). 36 seats incl. a counter and private rooms; tables upstairs (Tabelog; October 2025). Non-smoking (Tabelog). A townhouse tucked in from Takakura-dori north of Bukkoji, near Shijo station (Tabelog; official site). Opened 18 October 2010 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Takakura-dori, north of Bukkoji — Shijo / Karasuma',
    cuisine: 'Charcoal yakitori with big skewers and plenty of sides; the sister shop of the original Chabuya (official site; 2025–26 reviews) · omakase skewers by the number; signature tsukune; fried bread to finish (June 2025) · liver, wings, generous tsukune; ramen to finish (October 2025) · negima, tsukune (January 2026) · oden in a light but deep dashi (March 2026; November 2025) · skin and liver (March 2026) · Tsuruhashi kimchi; breast with wasabi; salted neck; shiitake; soft-bone tsukune; fried bread for dessert (September 2026) · blackboard sake picks (November 2025)',
    website: SITE, gmaps: gm('炭火焼鳥 チャブヤ 高倉'), menu_url: TB,
    notes: '[Charcoal yakitori · Takakura-Bukkoji, since 2010] A busy yakitori house in a townhouse off Takakura-dori near Shijo-Karasuma, with big skewers — liver, skin, soft-bone tsukune, salted neck — oden in winter, blackboard sakes, and a sweet fried-bread finish. Full early most nights; book. One November 2025 regular felt portions had shrunk. Closed Sunday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per the official site: the sister shop of the original 炭火焼鳥 ちゃぶや (which closed in March 2021), part of the ちゃぶ家グループ of about six Kyoto shops. Opened October 2010 (Tabelog).',
      philosophy: null, specialty: 'Charcoal yakitori; fried bread to finish.',
      anecdotes: [
        { text: 'A June 2025 diner ordered the fried bread out of curiosity and wanted a second one at once.', source: R + 'B510241804/' },
        { text: 'A March 2026 visitor arrived at 18:00 on a weekday to find it already fully booked, and called the grilling perfect.', source: R + 'B523786161/' },
        { text: 'A November 2025 long-time fan points to the blackboard for the recommended sake.', source: R + 'B531005992/' },
      ],
      japanese_sources_summary: '食べログ・公式サイト: 焼鳥、下京区高倉通佛光寺上ル西前町367-7、月〜土18:00〜24:00、日曜休み、カード可、電子マネー・QR 不可、36席、個室あり、禁煙、2010年10月18日オープン、ちゃぶやの姉妹店 (ちゃぶ家グループ、京都に約6店)。口コミ (2024年10月〜2026年9月、英語): 大ぶりの串、つくね、レバー、手羽、皮、ねぎま、せせり、おでん、締めのラーメン、揚げパン、鶴橋キムチ、黒板の日本酒、人気の部位は売り切れ、早い時間に満席、量が減ったという声も。',
      confidence: 'medium', sources: [TB, SITE, R + 'B494476547/', R + 'B510241804/', R + 'B515808197/', R + 'B517080400/', R + 'B517129718/', R + 'B520123007/', R + 'B521177182/', R + 'B523786161/', R + 'B524662577/', R + 'B525542048/', R + 'B531005992/', R + 'B536952407/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead and arrive early for the popular cuts; check the blackboard for sake. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区高倉通佛光寺上ル西前町367-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.001582, 135.762572); cross-checked: GSI 京都府京都市下京区西前町367番地 (lot) 29m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No item prices in the sources; reviewers report ¥2,000–7,999 per person.', last_checked: TODAY, items: [
      it('', '', 'Omakase skewers', '', 'Yakitori', 'ask', 'no', 'June 2025.', 'omakase'),
      it('', '', 'Tsukune (soft-bone)', '', 'Yakitori', 'ask', 'no', '2025–26 reviews.', 'tsukune'),
      it('', '', 'Fried bread', '', 'To finish', 'no', 'ask', 'June 2025; September 2026.', 'age_pan'),
      it('', '', 'Oden', '', 'Sides', 'ask', 'no', 'Winter; November 2025, March 2026.', 'oden'),
    ] }, {
    cuisine: '大ぶりの串と豊富な一品の炭火焼鳥。ちゃぶやの姉妹店 (公式サイト、2025〜2026年の口コミ)・本数を指定できるおまかせ、名物のつくね、締めの揚げパン (2025年6月)・レバー、手羽、大きなつくね、締めのラーメン (2025年10月)・ねぎま、つくね (2026年1月)・あっさりして奥深い出汁のおでん (2026年3月、2025年11月)・皮とレバー (2026年3月)・鶴橋キムチ、わさびのむね、塩のせせり、椎茸、軟骨つくね、デザートの揚げパン (2026年9月)・黒板のおすすめの日本酒 (2025年11月)',
    neighborhood: '高倉通、仏光寺の北。四条・烏丸',
    gf_detail: '要確認。せせりやわさびのむねなど塩の串もある (2026年9月) が、揚げパン、ラーメン、タレの料理もある。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。鶏の焼鳥店で、おでんは出汁 (2025〜2026年の口コミ)。',
    notes: '[炭火焼鳥・高倉仏光寺、2010年から] 四条烏丸近く、高倉通から入った町家のにぎやかな焼鳥店。レバー、皮、軟骨つくね、塩のせせりなど大ぶりの串、冬はおでん、黒板の日本酒、締めは甘い揚げパン。毎晩早くに満席になるので予約を。量が減ったという2025年11月の声も。日曜休み。',
  });
}

// ================================================================ KANA 伸子
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26020468/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:30', '01:00']);
  put({
    id: 'kyoto_kana_nobuko_gion', name: 'KANA 伸子 (Kana Nobuko)', category: 'OMNI',
    lat: 35.004958, lng: 135.775414, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: negiyaki, okonomiyaki, yakisoba and yaki udon (2013–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef tendon, gizzards, red sausage, chikuwa and dashimaki (2026 reviews).',
    hours_raw: 'Mon–Sat 18:30–1:00; closed Sunday and the second and fourth Mondays; may change (Tabelog; March 2026). Mostly by reservation — walk-ins get in only when seats free up (June 2023). No charge (Tabelog, Japanese text: 「なし」). A small counter (2012 review). In an alley beside the Lawson on Hanamikoji north of Shijo; the sign is often unlit (Tabelog; July 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Hanamikoji, north of Shijo — Gion-Shijo',
    cuisine: 'Negiyaki and okonomiyaki at a small counter · red sausage, grilled gizzards with green onion, yakisoba, okonomiyaki, grilled shiitake (March 2026) · dashimaki; negiyaki (April 2026) · fluffy dashimaki with pickled ginger; chikuwa negiyaki; mixed okonomiyaki (July 2026) · beef-tendon negiyaki; yaki udon (2013 review)',
    website: null, gmaps: gm('KANA 伸子 祇園'), menu_url: TB,
    notes: '[Negiyaki and okonomiyaki · Hanamikoji, late] A tiny, snack-bar-looking counter in an alley beside the Lawson on Hanamikoji, where an older proprietress cooks almost single-handedly until 1:00 — negiyaki (the chikuwa one is the house pick), fluffy dashimaki, okonomiyaki, yakisoba and red sausage — helped along by regulars. Mostly reservations; closed Sunday and alternate Mondays.',
    chef_bio: { chef_name: null, roles: ['Proprietress (unnamed), runs it almost single-handedly (April 2026)'], origin: null,
      background: 'Per reviews: a long-running counter okonomiyaki shop in Gion known for negiyaki; a March 2020 reviewer heard it is loosely related to 祇園ねぎ焼 かな but under different management.',
      philosophy: null, specialty: 'Negiyaki; dashimaki.',
      anecdotes: [
        { text: 'An April 2026 first-timer found the place running on the proprietress’s work and the kindness of regulars.', source: R + 'B527687358/' },
        { text: 'A July 2026 visitor was told chikuwa is the best choice for the green-onion pancake — and agreed.', source: R + 'B531402811/' },
        { text: 'A March 2026 returnee after the pandemic years could not resist the red sausage.', source: R + 'B524910858/' },
      ],
      japanese_sources_summary: '食べログ: お好み焼き、東山区花見小路四条上がる、祇園四条駅・三条京阪駅から徒歩7分、月〜土18:30〜翌1:00、日曜と第2・第4月曜休み、チャージなし。口コミ (2012年9月〜2026年7月、英語): スナックのような外観のカウンターの店、ねぎ焼き、すじねぎ焼き、焼きうどん、赤いウインナー、砂肝、焼きそば、お好み焼き、椎茸、だし巻き、ちくわのねぎ焼き、ミックスのお好み焼き、ほぼ予約制、花見小路のローソンの横の路地、女将がほぼ一人で切り盛り。',
      confidence: 'medium', sources: [TB, R + 'B112380411/', R + 'B116307554/', R + 'B142061791/', R + 'B249743771/', R + 'B425775930/', R + 'B467471601/', R + 'B524910858/', R + 'B527687358/', R + 'B531402811/', R + 'B67251778/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; a tiny counter where regulars lend a hand. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区花見小路四条上がる',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.004958, 135.775414); the address has no lot number, so no GSI lot cross-check — approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No item prices in the sources; reviewers report ¥3,000–5,999 per person.', last_checked: TODAY, items: [
      it('', '', 'Chikuwa negiyaki', '', 'Negiyaki', 'no', 'no', 'July 2026.', 'chikuwa_negiyaki'),
      it('', '', 'Dashimaki', '', 'Teppan', 'ask', 'no', 'April and July 2026.', 'dashimaki'),
      it('', '', 'Mixed okonomiyaki', '', 'Okonomiyaki', 'no', 'no', 'July 2026.', 'mix'),
    ] }, {
    cuisine: '小さなカウンターのねぎ焼きとお好み焼き・赤いウインナー、ねぎを添えた砂肝、焼きそば、お好み焼き、椎茸焼き (2026年3月)・だし巻き、ねぎ焼き (2026年4月)・紅しょうが添えのふわふわのだし巻き、ちくわのねぎ焼き、ミックスのお好み焼き (2026年7月)・すじねぎ焼き、焼きうどん (2013年の口コミ)',
    neighborhood: '花見小路、四条の北。祇園四条',
    gf_detail: 'グルテンフリーではない。ねぎ焼き、お好み焼き、焼きそば、焼きうどん (2013〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。牛すじ、砂肝、赤いウインナー、ちくわ、だし巻き (2026年の口コミ)。',
    notes: '[ねぎ焼きとお好み焼き・花見小路、深夜まで] 花見小路のローソン横の路地にある、スナックのような外観の小さなカウンター。女将がほぼ一人で深夜1時まで焼く。ちくわのねぎ焼き (店のおすすめ)、ふわふわのだし巻き、お好み焼き、焼きそば、赤いウインナー。常連も手伝う雰囲気。ほぼ予約制。日曜と第2・第4月曜休み。',
  });
}

save();
