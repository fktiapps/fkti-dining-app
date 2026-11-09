// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 87.
//   Queue run from the osw2 worktree, 2026-11-08. Rest tier, nearest-first (queue.mjs kyoto-missed next rest 2000, lane ids by distance).
//   Rest rule: at least one 2025–26 review and enough sourced detail. Days the sources do not state are left out of hours.
//   Brands checked against queue-status.jsonl (full names and brand stems), than.co.jp/brands and 株式会社WILL (will-food.com).
//   - 牛禅 京都四条烏丸店 — five or more same-name shops, as 26003500
//   + かき谷 Kakitani (regulars' izakaya near Karasuma-Gojo: oden, sashimi, fried rice; 2025–26 reviews)
//   + 祇園 たけ Gion Take (six-seat French counter with house bread; 2025–26 reviews)
//   - 成城石井 四条烏丸店 — chain (Seijo Ishii supermarkets)
//   - チェックイン四条烏丸 — not a restaurant: a business hotel of the Check-in group whose only food is a guests' bread breakfast
//   - GOOD CHEESE LABORATORY 京都・三条 — large parent: inside Mitsui Garden Hotel Kyoto Sanjo Premier (Greg 11-08 big-chain hotel ruling)
//   + 特級ラーメン 寛 Tokkyu Ramen Hiroshi (classic Kyoto shoyu ramen at Higashiyama-Yasui; 2025–26 reviews)
//   + 柳馬場 梅乃井 Umenoi (family-run Edo-style eel house of 90-plus years on Yanaginobamba)
//   None of the drafted shops is in data/kyoto.json, hidden records included: grep by id, name and address.
//   Pins: Tabelog /en/ point, cross-checked with GSI; かき谷's GSI match is a different 堺町 1 km away, so it is marked approximate; 祇園 たけ moved
//   ~3 m off ZIRAEL Vegan Restaurant (6.4 m); each 9 m+ from every pin on main, hidden records included.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-87');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26003325', '牛禅 京都四条烏丸店: five or more same-name shops — same ruling as 厳選和牛 しゃぶしゃぶ・すき焼き 祇園 牛禅 (26003500)');
skip('26019525', '成城石井 四条烏丸店: chain — Seijo Ishii, a national supermarket chain');
skip('26028279', 'チェックイン四条烏丸: not a restaurant — Hotel Check-in Shijo Karasuma, a business hotel of the Check-in group (checkin.co.jp), whose reviews describe only a breakfast of mini breads for staying guests');
skip('26041707', 'GOOD CHEESE LABORATORY 京都・三条: large parent — inside Mitsui Garden Hotel Kyoto Sanjo Premier (Greg 11-08 ruling on venues in big-chain hotels)');

// ================================================================ かき谷
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26005095/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'kyoto_kakitani_sakaimachi', name: 'かき谷 (Kakitani)', category: 'OMNI',
    lat: 34.9977240278752, lng: 135.7631217502866, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Oden in dashi, sashimi, fried rice and noodle soup; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: oden with beef tendon, sashimi, crab and fried rice (reviews).',
    hours_raw: '18:00–23:00 (last order 22:30) Monday–Saturday; on Sundays and holidays open only for group bookings (Tabelog). Booking advised — tables fill with regulars (December 2024; February 2025). Cards (JCB, AMEX, Diners); no e-money (Tabelog). 22 seats: an 8-seat counter, a table for 6 and two raised tables for 4; smoking allowed (Tabelog). On Manjuji-dori east of Takakura, just off Karasuma-Gojo (Tabelog; March 2025). Birthday cake and champagne can be added to a banquet course for ¥5,000 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Manjuji-dori, near Karasuma-Gojo',
    cuisine: 'Traditional Kyoto izakaya loved by regulars (2024–2026 reviews) · oden: daikon, simmered egg, Kujo green onion, beef tendon (2024–2025) · assorted sashimi; crab; grilled lotus root with soy; tuna and avocado with wasabi (March 2025) · noodle soup; ume fried rice; shibazuke fried rice (March 2025) · banquet courses (Tabelog) · about ¥4,000–8,000 a head (2024–2025)',
    website: null, gmaps: gm('かき谷 京都 万寿寺'), menu_url: TB,
    notes: "[Izakaya · Manjuji-Takakura near Karasuma-Gojo, a regulars' haunt] A calm, old-style izakaya full of regulars: oden with the best simmered egg, Kujo onion and beef tendon, fine sashimi, and shibazuke or ume fried rice to finish. Counter seats for walk-ins if you are lucky; smoking allowed.",
    chef_bio: { chef_name: null, roles: ['Not named'], origin: null,
      background: 'An izakaya reviewed since 2011 (Tabelog). A March 2025 reviewer heard that the previous owner ran a catering business; reviewers describe friendly staff and many regulars.',
      philosophy: null,
      specialty: 'Oden; fried rice.',
      anecdotes: [
        { text: 'A February 2025 walk-in got one of the last counter seats and drank a little too much with the regulars.', source: R + 'B501985205/' },
        { text: 'A March 2025 diner singled out the Kujo green onion in the oden, then noodle soup and ume fried rice.', source: R + 'B503404960/' },
      ],
      japanese_sources_summary: '食べログ: かき谷、居酒屋、京都市下京区万寿寺通高倉東入ル堺町201-1、毎日 18:00〜23:00 (L.O.22:30)、日曜・祝日は団体の予約のみ、カード可 (JCB、AMEX、Diners)、電子マネー不可、22席 (カウンター8、6人テーブル1、小上がり4人2)、喫煙可、宴会コースに誕生日のケーキとシャンパンを5,000円で。口コミ (2011〜2026年、英語): 常連の多い昔ながらの居酒屋、おでん (大根、煮卵、九条ねぎ、牛すじ)、刺身の盛り合わせ、蟹、れんこんの醤油焼き、まぐろとアボカドのわさび和え、にゅうめん、梅の炒飯、しば漬けの炒飯、先代は仕出し屋と聞いた、予約がおすすめ、1人4,000〜8,000円ほど。',
      confidence: 'low', sources: [TB, R + 'B424610797/', R + 'B480629447/', R + 'B501985205/', R + 'B503404960/', R + 'B503554578/', R + 'B506176994/'] },
    cultural_comfort: { level: 'japanese', note: 'Regulars’ izakaya; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区万寿寺通高倉東入ル堺町201-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026. The official site (kakitani.net) did not respond.' },
    pin_source: `Tabelog ${TB} (34.997724, 135.763122); GSI 京都府京都市下京区堺町201-1 resolves only to a different 堺町 (town level) 1,087m away — marked approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No published prices; reviews report about ¥4,000–8,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Assorted oden', '', 'Oden', 'ask', 'no', '', 'oden'),
      it('', '', 'Assorted sashimi', '', 'Sashimi', 'ask', 'no', '', 'sashimi'),
      it('', '', 'Shibazuke fried rice', '', 'Rice', 'ask', 'no', '', 'chahan'),
    ] }, {
    cuisine: '常連に愛される昔ながらの京都の居酒屋 (2024〜2026年の口コミ)・おでん、大根、煮卵、九条ねぎ、牛すじ (2024〜2025年)・刺身の盛り合わせ、蟹、れんこんの醤油焼き、まぐろとアボカドのわさび和え (2025年3月)・にゅうめん、梅の炒飯、しば漬けの炒飯 (2025年3月)・宴会コース (食べログ)・1人4,000〜8,000円ほど (2024〜2025年)',
    neighborhood: '万寿寺通、烏丸五条の近く',
    gf_detail: '要確認。出汁のおでん、刺身、炒飯、にゅうめん。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。牛すじのおでん、刺身、蟹、炒飯 (口コミ)。',
    notes: '[居酒屋・万寿寺高倉の烏丸五条近く、常連の店] 常連でにぎわう落ち着いた昔ながらの居酒屋。煮卵のおいしいおでん、九条ねぎや牛すじ、上等な刺身、締めはしば漬けや梅の炒飯。運がよければカウンターに、喫煙可。',
  });
}

// ================================================================ 祇園 たけ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26042229/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_gion_take_french', name: '祇園 たけ (Gion Take)', category: 'OMNI',
    lat: 35.005109, lng: 135.777875, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. French courses with house-baked bread, brioche and pastry; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses of fish, shellfish, lamb and duck, with butter (reviews).',
    hours_raw: 'Lunch 12:00–14:00 and dinner 17:00–22:00 Tuesday–Sunday; closed Monday (Tabelog). Service, charges and tax all included in prices (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money (Tabelog). A 6-seat counter facing the chef; non-smoking (Tabelog; 2025 reviews). On Gion-machi Kitagawa (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, north of Shijo',
    cuisine: 'French courses with an emphasis on vegetables, at a six-seat counter (Tabelog; reviews) · a flower-like amuse-bouche; mackerel carpaccio with onion espuma; duck with confit, wild asparagus, mulberries and roast apple; country bread rested two days and crisp brioche with salted butter; riolle with Japanese mint ice cream and white-chocolate espuma (June 2026) · crab, surf clam and flounder starters, lamb main (January 2026) · bread and desserts all made by the chef (February 2025) · about ¥8,000–15,000 a head (Tabelog reviews)',
    website: null, gmaps: gm('祇園 たけ フレンチ'), menu_url: TB,
    notes: "[French · Gion north of Shijo, six-seat counter] A tiny French counter where the chef bakes the bread and desserts and plates intricate seasonal courses — a garden-like amuse-bouche, mackerel with onion espuma, duck confit in crisp skin. All-inclusive prices; lunch and dinner; closed Monday.",
    chef_bio: { chef_name: null, roles: ['Chef not named'], origin: null,
      background: 'Reviewers (2025–2026) describe a personable chef who chats with guests across the six-seat counter and makes the bread and desserts in house.',
      philosophy: null,
      specialty: 'Vegetable-forward French courses; house bread.',
      anecdotes: [
        { text: 'A February 2025 lunch for two sisters ended with the chef’s own bread and desserts.', source: R + 'B501539045/' },
        { text: 'A January 2026 New Year lunch opened with champagne, then crab, surf clam and flounder, and lamb.', source: R + 'B520051251/' },
        { text: 'A June 2026 diner was taken with an amuse-bouche arranged like a flower display.', source: R + 'B529354709/' },
      ],
      japanese_sources_summary: '食べログ: 祇園 たけ、フレンチ・野菜料理、京都市東山区祇園町北側313-8、火〜日 12:00〜14:00、17:00〜22:00、月曜定休、サービス料・チャージ・税込み、カード可、電子マネー不可、6席、禁煙。口コミ (2025〜2026年、英語): シェフと話せるカウンター、パンとデザートは自家製、花のようなアミューズ、鯖のカルパッチョと玉ねぎのエスプーマ、鴨のコンフィ、山のアスパラ、桑の実、焼きりんご、2日寝かせたカンパーニュとブリオッシュに塩バター、リオレと和ハッカのアイスとホワイトチョコのエスプーマ、蟹・ホッキ貝・ヒラメの前菜と仔羊、シャンパン、1人8,000〜15,000円ほど。',
      confidence: 'low', sources: [TB, R + 'B501539045/', R + 'B507200316/', R + 'B520051251/', R + 'B523450234/', R + 'B529354709/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Six seats; book ahead; all-inclusive prices.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側313-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.005088, 135.777896), offset ~3m to clear ZIRAEL Vegan Restaurant (6.4m); cross-checked: GSI 京都府京都市東山区祇園町北側313番地 (lot) 111m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No published prices; reviews report about ¥8,000–15,000 a head, all-inclusive.', last_checked: TODAY, items: [
      it('', '', 'Lunch course', '', 'Courses', 'ask', 'no', '', 'lunch'),
      it('', '', 'Dinner course', '', 'Courses', 'ask', 'no', '', 'dinner'),
    ] }, {
    cuisine: '6席のカウンターの野菜を生かしたフレンチのコース (食べログ、口コミ)・花のようなアミューズ、鯖のカルパッチョと玉ねぎのエスプーマ、パリッとした皮の鴨のコンフィに山のアスパラ・桑の実・焼きりんご、2日寝かせたカンパーニュとサクッとしたブリオッシュに塩バター、リオレと和ハッカのアイスとホワイトチョコのエスプーマ (2026年6月)・蟹、ホッキ貝、ヒラメの前菜と仔羊 (2026年1月)・パンとデザートはシェフの自家製 (2025年2月)・1人8,000〜15,000円ほど (食べログの口コミ)',
    neighborhood: '祇園、四条の北',
    gf_detail: '要確認。自家製のパン、ブリオッシュ、菓子を使うフレンチのコース。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、貝、仔羊、鴨とバターのコース (口コミ)。',
    notes: '[フレンチ・祇園の四条北、6席のカウンター] シェフがパンもデザートも焼く小さなフレンチのカウンター。庭のようなアミューズ、玉ねぎのエスプーマの鯖、パリッとした鴨のコンフィなど手の込んだ季節のコース。料金はすべて込み、昼も夜も、月曜休み。',
  });
}

// ================================================================ 特級ラーメン 寛
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26019669/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '21:30']);
  put({
    id: 'kyoto_tokkyu_ramen_hiroshi', name: '特級ラーメン 寛 (Tokkyu Ramen Hiroshi)', category: 'OMNI',
    lat: 35.000787637072534, lng: 135.77769187914555, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: wheat ramen noodles in a soy-sauce broth, and gyoza (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken broth with pork fat, chashu and gyoza (reviews).',
    hours_raw: '11:30–21:30 Monday, Tuesday and Thursday–Sunday; closed Wednesday (Tabelog). Cash only — no cards, e-money or QR (Tabelog). Counter seating; non-smoking (Tabelog; January 2026). At the Higashiyama-Yasui crossing (Tabelog; February 2024).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Higashiyama-Yasui',
    cuisine: 'Long-established shop of classic Kyoto shoyu ramen with back fat: clear chicken broth, soft traditional noodles (2024–2026 reviews) · gyoza; chashu with a balance of lean and fat, good as a snack with drinks (2024) · good value (June 2025)',
    website: null, gmaps: gm('特級ラーメン 寛 東山安井'), menu_url: TB,
    notes: "[Ramen · Higashiyama-Yasui, classic Kyoto shoyu] An old-school ramen shop at the Yasui crossing serving gentle, clear chicken-and-shoyu broth with back fat and soft noodles, plus gyoza and well-balanced chashu. Cash only; closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Not named'], origin: null,
      background: 'A long-established ramen shop at Higashiyama-Yasui (February 2024 review), reviewed since 2016 (Tabelog). Reviewers describe a classic, unflashy Kyoto bowl and friendly service that even welcomes guests ordering only gyoza and chashu.',
      philosophy: null,
      specialty: 'Kyoto shoyu ramen.',
      anecdotes: [
        { text: 'An October 2024 drinker between bars was welcomed for just gyoza and chashu.', source: R + 'B494205084/' },
        { text: 'A January 2026 diner had a bowl within five minutes and found the clear broth gentle and comforting.', source: R + 'B520268773/' },
      ],
      japanese_sources_summary: '食べログ: 特級ラーメン 寛、ラーメン・餃子、京都市東山区毘沙門町30-4、月・火・木〜日 11:30〜21:30、水曜定休、カード・電子マネー・QR決済不可、禁煙。口コミ (2016〜2026年、英語): 東山安井の交差点、背脂の京都の醤油ラーメンの老舗、澄んだ鶏のスープ、やわらかめの昔ながらの麺、餃子、赤身と脂のバランスのよいチャーシュー、つまみだけでも快く、コスパがよい。',
      confidence: 'low', sources: [TB, R + 'B479738495/', R + 'B480118884/', R + 'B494205084/', R + 'B507677890/', R + 'B520268773/'] },
    cultural_comfort: { level: 'none_needed', note: 'Cash only; counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区毘沙門町30-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through January 2026.' },
    pin_source: `Tabelog ${TB} (35.000788, 135.777692); cross-checked: GSI 京都府京都市東山区毘沙門町30番地 (lot) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No published prices; cash only.', last_checked: TODAY, items: [
      it('', '', 'Ramen (Kyoto shoyu with back fat)', '', 'Ramen', 'no', 'no', '', 'ramen'),
      it('', '', 'Gyoza', '', 'Sides', 'no', 'no', '', 'gyoza'),
      it('', '', 'Chashu', '', 'Sides', 'ask', 'no', '', 'chashu'),
    ] }, {
    cuisine: '背脂の京都の醤油ラーメンの老舗。澄んだ鶏のスープ、やわらかめの昔ながらの麺 (2024〜2026年の口コミ)・餃子、赤身と脂のバランスのよいチャーシューはつまみにも (2024年)・コスパがよい (2025年6月)',
    neighborhood: '東山安井',
    gf_detail: 'グルテンフリー不可。小麦のラーメンの麺と醤油のスープ、餃子 (口コミ)。',
    vegan_detail: 'ヴィーガン不可。背脂の鶏のスープ、チャーシュー、餃子 (口コミ)。',
    notes: '[ラーメン・東山安井、昔ながらの京都の醤油] 安井の交差点の昔ながらのラーメン屋。背脂の浮くやさしい澄んだ鶏と醤油のスープにやわらかめの麺、餃子とほどよいチャーシュー。現金のみ、水曜休み。',
  });
}

// ================================================================ 柳馬場 梅乃井
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26011341/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.umenoi.com/';
  const H = day(['11:00', '15:00'], ['17:00', '20:00']);
  put({
    id: 'kyoto_yanaginobamba_umenoi', name: '柳馬場 梅乃井 (Umenoi)', category: 'OMNI',
    lat: 35.01015652207058, lng: 135.7640454124266, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Grilled eel with a soy-based tare handed down since the founding, and dashimaki; no gluten information is published (official site; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an eel restaurant (official site).',
    hours_raw: 'Lunch 11:00–15:00 (last order 14:00) and dinner 17:00–20:00 (last order 19:30); closed Tuesday, plus listed extra days — in November 2026 the 3rd, 10th, 17th, 24th and 25th (official site). Tabelog gives lunch only, 11:30–14:00. Ends when the eel sells out; a family business that may close without notice if someone is unwell (official site). Few seats — booked guests are seated first; reservations may not be taken in July and August (official site; July 2024). Cards accepted; no e-money (Tabelog). Takeaway and delivery in boxed form; New Year osechi to order (official site). On Yanaginobamba north of Anekoji (official site).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yanaginobamba at Anekoji, near Kyoto City Hall',
    cuisine: 'Edo-style eel for over ninety years: split from the back each morning, steamed to order and finished with the house tare kept since the founding; about 30 minutes’ wait (official site) · unaju with a whole eel; shirayaki; liver soup and lunch box set; dashimaki in a tiered box (2024–2025) · light, tender Kanto-style eel (2024–2025 reviews) · osechi boxes ¥25,000–45,000 (official site)',
    website: SITE, gmaps: gm('柳馬場 梅乃井 うなぎ'), menu_url: SITE,
    notes: "[Eel · Yanaginobamba near City Hall, Edo-style unagi for 90 years] A small family eel house that steams its eel Kanto-style before grilling — soft and light, glazed with a tare kept since the founding. Unaju, shirayaki and fluffy dashimaki; expect a 30-minute wait. Closed Tuesday; ends when sold out.",
    chef_bio: { chef_name: null, roles: ['Family-run (official site)'], origin: null,
      background: 'Serving Edo-style grilled eel for more than ninety years to regulars, tourists, school trips and overseas guests (official site). The building was rebuilt and reopened by 2024 (2024 reviews).',
      philosophy: 'Eel from trusted wholesalers, prepared fresh each morning, finished with the tare handed down since the founding (official site).',
      specialty: 'Edo-style (Kanto) grilled eel.',
      anecdotes: [
        { text: 'A September 2024 regular praised the steamed-then-grilled eel and the slightly sweet house tare.', source: R + 'B491213165/' },
        { text: 'A September 2024 diner was won over by the fluffy dashimaki in a tiered box.', source: R + 'B492324213/' },
        { text: 'A June 2025 guest added shirayaki to the Kanto-style eel.', source: R + 'B509802644/' },
      ],
      japanese_sources_summary: '公式サイト: 柳馬場 梅乃井、江戸焼き鰻の味を伝えて九十余年、常連から観光客、修学旅行生、外国の客まで、信頼できる卸問屋から全国の鰻、毎朝その日の分を背開きにして白焼き、注文を受けてから蒸してタレで付け焼き、30分ほどかかる、創業以来のタレは醤油の素直な美味さと上品な甘さ、昼の部11:00〜15:00 (L.O.14:00)、夜の部17:00〜20:00 (L.O.19:30)、売り切れ次第終了、席が少ないので予約の客を先に、家族経営のため臨時休業も、火曜定休 (2026年11月の店休日は3・10・17・24・25日)、持ち帰りと配達は折詰、おせち (三段重45,000円、二段重35,000円、一段重25,000円)、京都市中京区柳馬場通姉小路上る柳八幡町74-2。食べログ: 梅乃井、うなぎ・寿司、月・水〜日 11:30〜14:00、カード可、電子マネー不可、禁煙。口コミ (2013〜2026年、英語): 京都で鰻なら梅乃井、関東風の蒸してから焼く鰻、鰻一尾のうな重、白焼き、肝吸いと弁当のセット、お重のだし巻き、建て替えて席数が減った、7・8月は予約不可と聞いた。',
      confidence: 'medium', sources: [SITE, TB, R + 'B348906844/', R + 'B480355943/', R + 'B491213165/', R + 'B492324213/', R + 'B495244795/', R + 'B509802644/'] },
    cultural_comfort: { level: 'japanese', note: 'Few seats; book ahead; ends when sold out.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区柳馬場通姉小路上る柳八幡町74-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with November 2026 closing days; Tabelog reviews through 2026.' },
    pin_source: `Tabelog ${TB} (35.010157, 135.764045); cross-checked: GSI 京都府京都市中京区柳八幡町74番地 (lot) 28m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Menu prices are not published in text; osechi prices from the official site (November 2026).', last_checked: TODAY, items: [
      it('', '', 'Unaju (whole eel)', '', 'Eel', 'ask', 'no', '', 'unaju'),
      it('', '', 'Shirayaki (eel without tare)', '', 'Eel', 'ask', 'no', '', 'shirayaki'),
      it('', '', 'Dashimaki in a tiered box', '', 'Sides', 'ask', 'no', '', 'dashimaki'),
    ] }, {
    cuisine: '九十余年の江戸焼き鰻。毎朝背開きにし、注文を受けてから蒸して創業以来のタレで焼く。30分ほどかかる (公式サイト)・鰻一尾のうな重、白焼き、肝吸いと弁当のセット、お重のだし巻き (2024〜2025年)・軽くやわらかい関東風の鰻 (2024〜2025年の口コミ)・おせちは25,000〜45,000円 (公式サイト)',
    neighborhood: '柳馬場姉小路、京都市役所の近く',
    gf_detail: '要確認。創業以来の醤油ベースのタレで焼く鰻、だし巻き。グルテンの情報は公開されていない (公式サイト、口コミ)。',
    vegan_detail: 'ヴィーガン不可。鰻の店 (公式サイト)。',
    notes: '[うなぎ・柳馬場の市役所近く、九十余年の江戸焼き] 鰻を関東風に蒸してから焼く小さな家族の店。やわらかく軽い身に創業以来のタレ。うな重、白焼き、ふわふわのだし巻き、30分ほど待つ。火曜休み、売り切れ次第終了。',
  });
}

save();
