// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles), circle `ueno`, lane osw12, batch 25.
//   + 炭火焼鳥 駿 Sumibi Yakitori Shun (couple-run charcoal yakitori and sake in a Yushima back street; opened 2014)
//   + 鉄板ビストロ ラフ+たす Teppan Bistro Rafutasu (teppanyaki courses and wine by Shinobazu Pond)
//   + Woodwork Welcome Coffee (café inside a furniture shop near Naka-Okachimachi)
//   + スコッチバー ノア Scotch Bar Noah (Scotch bar on Kasuga-dōri, Yushima, over 50 years with the same owner)
// Undecided (no put, no skip): as before; plus 焼肉やっちゃん 湯島店 13292164 — an Osaka brand with 神田店, 本厚木店 (分店) and
//   湯島店 found; no full count.
// Chain check (with Greg's 2026-11-02 rulings and the working line of 4 or fewer shops): all four are single shops as found.
// Dedupe: none is in data/tokyo.json by name, Tabelog id or address. Scotch Bar Noah (湯島3-46-2 2F) shares a building with the
//   hidden placeholder tokyo3__229 (油そば専門店 浜そば 本店), which sits on the GSI point; Noah is offset ~4 m from it.
//   check-stacked-pins: no new pin within 3 m of another.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw12-25');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 炭火焼鳥 駿
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13168744/'; const R = TB + 'dtlrvwlst/';
  const WS = 'http://www.sumibiyakitori-syun.com/';
  const W = day(['17:00', '24:00']);
  put({
    id: 'tokyo_sumibi_yakitori_shun_yushima', name: '炭火焼鳥 駿 (Sumibi Yakitori Shun)', category: 'OMNI',
    lat: 35.70858, lng: 139.77034, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: salt skewers are possible, but tare, ponzu and side dishes are not described; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken skewers, soft roe, sashimi.',
    hours_raw: 'Mon–Fri 17:00–24:00 (last order 23:00); Sat 17:00–23:00 (last order 22:00); closed Sundays (Tabelog). Reservations recommended — fully booked with walk-ins turned away (March 2025). Appetizer ¥324. 16 seats: 8 at an L-shaped counter, a table for 6 and a curtained semi-private seat. Smoking allowed. Cards (VISA, Master, JCB, AMEX). Opened 7 May 2014.',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: day(['17:00', '23:00']) }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Yushima 3-chōme (Bunkyō), 小林市ビル 1F, a back street near Yushima Tenjin — 1 min from Yushima Stn Exit 2; 5 min from Ueno-Hirokoji and JR Okachimachi',
    cuisine: 'Charcoal yakitori with a strong list of local sake and shōchū (Tabelog) · menu (Tabelog, October 2022): Shun course ¥2,950; skewers ¥220–350 — negima, tsukune, skin, tail ¥240, gizzard ¥230, liver, heart ¥220, chicken tender with ume-shiso or wasabi ¥260, wings ¥350 · reviews: grilled daikon, bamboo shoots, soft roe with ponzu, sashimi, a starter salad',
    website: WS, gmaps: gm('炭火焼鳥 駿 湯島3-45-3'), menu_url: TB + 'dtlmenu/',
    notes: "[Yakitori · Yushima, a couple-run charcoal grill with good sake] A small yakitori bar in a Yushima back street near Yushima Tenjin, open since 2014 and run by a couple — a quiet cook at the grill and a lively host out front, per an August 2025 review. Skewers are grilled over charcoal and sent out one at a time even if you order everything at once; reviewers rave about the wings, gizzards and chicken tenders, and the sake and shōchū list is long. Smoking is allowed, which some see as a plus. It fills up with bookings early in the evening and suits a calmer second round later. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 7 May 2014 (Tabelog)', background: 'Per an August 2025 review, owned by a couple: one cooks, the other manages the dining room; a July 2026 diner saw the chef working alone that day. No source names the owners.', philosophy: null, specialty: 'Charcoal yakitori; local sake.',
      anecdotes: [
        { text: '"It\'s a restaurant owned by a couple, who are acquaintances of my companion." — August 2025.', source: R + 'B494871286/' },
        { text: '"Everything was delicious, but personally, the chicken wings were the best." — December 2025.', source: R + 'B519359969/' },
        { text: '"It was fully booked with reservations, and walk-ins were turned away." — March 2025.', source: R + 'B503322187/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): 炭火焼鳥 駿、文京区湯島3-45-3 小林市ビル 1F、湯島駅2番出口から徒歩1分、上野広小路駅・JR御徒町駅から5分、月〜金17:00〜24:00 (L.O.23:00)、土17:00〜23:00 (L.O.22:00)、日曜休み、予約可、お通し324円、16席 (カウンター8、6名テーブル、カーテンの半個室)、喫煙可、カード可、2014年5月7日オープン、厳選した地酒と本格焼酎。メニュー (2022年10月): 駿コース2,950円、ねぎま240円、手羽先350円、つくね240円、砂肝230円、レバー・ハツ220円、ささみ梅しそ・わさび焼き260円。口コミ (2024年5月〜2026年7月): 夫婦で営む店、焼き大根、たけのこ、白子ポン酢、刺身、手羽先、砂肝、串は1本ずつ出てくる、日本酒と焼酎が豊富、予約で満席の日も、喫煙可。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', WS, R + 'B485142115/', R + 'B494871286/', R + 'B500580848/', R + 'B503322187/', R + 'B513013447/', R + 'B519359969/', R + 'B519679632/', R + 'B527916956/', R + 'B531451471/', R + 'B532209062/'] },
    cultural_comfort: { level: 'japanese', note: 'Small counter yakitori; smoking allowed; no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都文京区湯島3-45-3 小林市ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated May 2024–July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都文京区湯島三丁目45番3号 (go) 10m; ${TODAY}`,
  }, { verified: 'partial', confidence: 'low', sources: [TB + 'dtlmenu/'],
    price_note: 'Prices from the Tabelog menu dated October 2022; likely higher now; appetizer ¥324.', last_checked: TODAY, items: [
      it('', '', 'Shun course', '¥2,950', 'Courses', 'ask', 'no', 'Tabelog menu, 2022.', 'shun_course'),
      it('', '', 'Negima', '¥240', 'Skewers', 'ask', 'no', 'Tabelog menu, 2022.', 'negima'),
      it('', '', 'Chicken wings', '¥350', 'Skewers', 'ask', 'no', 'Tabelog menu, 2022.', 'tebasaki'),
      it('', '', 'Chicken tender with ume-shiso', '¥260', 'Skewers', 'ask', 'no', 'Tabelog menu, 2022.', 'sasami_umeshiso'),
    ] }, {
    cuisine: '炭火焼き鳥に、充実した地酒と本格焼酎 (食べログ)・メニュー (食べログ、2022年10月): 駿コース2,950円、串は220〜350円、ねぎま、つくね、皮、ぼんじり240円、砂肝230円、レバー、ハツ220円、ささみの梅しそ・わさび焼き260円、手羽先350円・口コミ: 焼き大根、たけのこ、白子ポン酢、刺身、お通しのサラダ',
    neighborhood: '湯島三丁目 (文京区)、小林市ビル 1F、湯島天神近くの裏通り。湯島駅2番出口から徒歩1分、上野広小路駅・JR御徒町駅から5分',
    gf_detail: 'グルテンフリーは要確認。塩の串もできますが、タレ、ポン酢、一品料理の説明はなく、グルテンフリーの説明もありません。',
    vegan_detail: 'ヴィーガンではありません。鶏の串、白子、刺身。',
    notes: '[焼き鳥・湯島、夫婦で営む炭火焼き鳥と日本酒] 湯島天神近くの裏通りにある小さな焼き鳥の店で、2014年から。2025年8月の口コミによると夫婦で営み、焼き場には物静かな料理人、客席には明るい接客。炭火で焼いた串は、まとめて頼んでも1本ずつ出てきます。手羽先、砂肝、ささみが好評で、日本酒と焼酎も豊富。喫煙可で、愛煙家には好評。早い時間は予約で埋まり、遅めの二軒目向き。日曜休み。',
  });
}

// ================================================================ 鉄板ビストロ ラフ+たす
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13294398/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '14:30'], ['17:00', '22:30']);
  put({
    id: 'tokyo_teppan_bistro_rafutasu_ikenohata', name: '鉄板ビストロ ラフ+たす (Teppan Bistro Rafutasu)', category: 'OMNI',
    lat: 35.711697, lng: 139.76799, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: steak and fish are grilled on the teppan, but sauces, garlic rice and the curry finish are not described; tell the restaurant when booking (the listing invites allergy notes).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef, fish and squid courses; hamburg steak; butter-soy dishes.',
    hours_raw: 'Daily 11:30–14:30 (last order 13:30) and 17:00–22:30 (last order 20:30); some irregular closing days (Tabelog). Reservations recommended — weekend lunch is often fully booked (2026 reviews). 10% service charge at dinner only. 12 seats (6 at the counter facing the teppan, 6 at tables). Non-smoking. Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR. Birthday plates.',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ikenohata 1-chōme, 高瀬ビル 1F, a quiet residential street across Shinobazu Pond — 5 min from Yushima Stn Exit 1; 12 min from JR Ueno Park Exit',
    cuisine: 'Teppanyaki bistro with selected wines (Tabelog) · lunch: thick 180 g hamburg steak with demi-glace and rock salt; lunch courses with appetizers, fish and meat, finishing with garlic rice, a house rice bowl or customizable curry (2026 reviews) · dinner courses with Saitama black-haired wagyu, yellowtail carpaccio, butter-soy squid, swordfish with anchovy sauce, spring-onion mousse; wine pairing · about ¥3,000–4,000 at lunch, ¥8,000–10,000 at dinner (Tabelog)',
    website: null, gmaps: gm('鉄板ビストロ ラフ+たす 池之端1-6-19'), menu_url: null,
    notes: "[Teppanyaki · Ikenohata, a cosy teppan bistro by Shinobazu Pond] A twelve-seat teppan bistro on a quiet residential street on the far side of Shinobazu Pond, where the chef cooks in front of a counter of six. Lunch is the popular slot: a thick hamburg steak cooked on the plate, or a course of appetizers, fish and Saitama wagyu finished with garlic rice or curry (about ¥3,000–4,000). Dinner courses with wine pairings run about ¥8,000–10,000 plus 10% service. Reviewers in 2026 praise the tender meat with rock salt, the friendly chef and the calm room; weekends are booked out, so reserve.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Tabelog official listing; a September 2026 reviewer describes a warm chef cooking in front of the counter. No source names the chef.', philosophy: null, specialty: 'Teppan wagyu; hamburg steak.',
      anecdotes: [
        { text: '"As I sipped from a small bottle of beer, the hamburg steak was finally ready. I enjoyed it with demi-glace sauce and rock salt." — October 2026, hamburg steak lunch.', source: R + 'B519677558/' },
        { text: '"The black-haired Wagyu from Saitama was tender and rich in fat." — October 2026, holiday lunch course.', source: R + 'B537550411/' },
        { text: '"The meat was especially tender and delicious when enjoyed with rock salt." — July 2026.', source: R + 'B532426421/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): 鉄板ビストロ ラフ+たす、池之端1-6-19 高瀬ビル 1F、湯島駅1番出口から徒歩5分、JR上野駅公園口から12分、毎日11:30〜14:30 (L.O.13:30)・17:00〜22:30 (L.O.20:30)、不定休、予約可、夜のみサービス料10%、12席 (カウンター6、テーブル6)、禁煙、カード可 (電子マネー・QR不可)、鉄板焼きとこだわりのワイン。口コミ (2025年11月〜2026年10月): 180gのハンバーグにデミグラスソースと岩塩、ランチのコース (前菜、魚、肉、ガーリックライス、丼、カレー)、埼玉の黒毛和牛、ぶりのカルパッチョ、イカのバター醤油、メカジキのアンチョビソース、ワインのペアリング、週末のランチは予約で満席、静かな住宅街、温かいシェフ。',
      confidence: 'medium', sources: [TB, R + 'B502998235/', R + 'B517333306/', R + 'B519677558/', R + 'B522678633/', R + 'B524133257/', R + 'B526572076/', R + 'B532426421/', R + 'B535363058/', R + 'B535626970/', R + 'B537550411/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter seats face the teppan; book ahead; no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区池之端1-6-19 高瀬ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated November 2025–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区池之端一丁目6番19号 (go) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No item prices found; Tabelog budget ¥2,000–3,000 lunch, ¥8,000–10,000 dinner; 10% service at dinner.', last_checked: TODAY, items: [] }, {
    cuisine: 'こだわりのワインと楽しむ鉄板焼きのビストロ (食べログ)・昼: 180gの厚いハンバーグにデミグラスソースと岩塩、前菜、魚、肉のランチコース、締めはガーリックライス、丼、選べるカレー (2026年の口コミ)・夜のコース: 埼玉の黒毛和牛、ぶりのカルパッチョ、イカのバター醤油、メカジキのアンチョビソース、新玉ねぎのムース、ワインのペアリング・昼は約3,000〜4,000円、夜は約8,000〜10,000円 (食べログ)',
    neighborhood: '池之端一丁目、高瀬ビル 1F、不忍池の向こうの静かな住宅街。湯島駅1番出口から徒歩5分、JR上野駅公園口から12分',
    gf_detail: 'グルテンフリーは要確認。ステーキや魚を鉄板で焼きますが、ソース、ガーリックライス、締めのカレーの説明はありません。予約時に伝えて (店はアレルギーの申告を受け付けています)。',
    vegan_detail: 'ヴィーガンではありません。牛肉、魚、イカのコース、ハンバーグ、バター醤油の料理。',
    notes: '[鉄板焼き・池之端、不忍池そばの小さな鉄板ビストロ] 不忍池の向こうの静かな住宅街にある12席の鉄板ビストロで、6席のカウンターの目の前でシェフが焼きます。人気は昼: 鉄板で焼く厚いハンバーグや、前菜、魚、埼玉の和牛のコースをガーリックライスやカレーで締めて (約3,000〜4,000円)。夜はワインのペアリング付きのコースで約8,000〜10,000円、サービス料10%。2026年の口コミでは岩塩で食べるやわらかい肉、気さくなシェフ、落ち着いた店内が好評。週末は予約で埋まるので予約を。',
  });
}

// ================================================================ Woodwork Welcome Coffee
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13209400/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:00', '18:00']);
  put({
    id: 'tokyo_woodwork_welcome_coffee_taito', name: 'Woodwork Welcome Coffee', category: 'OMNI',
    lat: 35.706295, lng: 139.77803, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: scones, brownies and Basque cheesecake are baked goods; nothing is described as gluten-free.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Vegan — ask: soy milk is available for lattes (June 2026), but the baked goods are not described.',
    hours_raw: 'Mon, Thu, Fri, Sat 11:00–18:00; Sun 11:00–17:00; closed Tuesdays and Wednesdays (Tabelog; may change). An October 2026 reviewer came early on a holiday morning for a morning deal. No reservations; busy around 15:00 and at weekends, sometimes a short wait. 10 seats. Non-smoking. Cards (JCB, AMEX), e-money and QR.',
    hours: { 0: W, 3: W, 4: W, 5: W, 6: day(['11:00', '17:00']) }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Taitō 4-chōme, シモジンパークビル 1F — 3 min from Naka-Okachimachi; near JR Okachimachi',
    cuisine: 'Café sharing a space with a furniture shop, signposted "Furniture and Coffee" (September 2026) · large scones with ice cream, sweet-potato scone; Basque cheesecake; brownie · coffee: dark-roast blend, maple latte, café latte (soy milk available), hot chocolate ¥600, scone ¥450 (May 2026)',
    website: null, gmaps: gm('Woodwork Welcome Coffee 台東4-14-8'), menu_url: null,
    notes: "[Café · Naka-Okachimachi, coffee among furniture] A bright, wood-scented café that shares its room with a furniture shop a few minutes from Naka-Okachimachi Station. People come for big scones (sweet potato in autumn), Basque cheesecake and brownies with a dark-roast blend or a maple latte; soy milk is available. Expect a short wait mid-afternoon and at weekends; quieter near closing. Most reviewers loved the atmosphere, though one in October 2026 felt the cold drink was overpriced and the café and furniture shop did not quite gel. Closed Tuesdays and Wednesdays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Tabelog listing; a café inside a furniture shop (2026 reviews). No source names the owner.', philosophy: null, specialty: 'Scones; maple latte.',
      anecdotes: [
        { text: '"A wonderful café with a lovely wooden scent." — May 2026, hot chocolate ¥600 and scone ¥450.', source: R + 'B528804582/' },
        { text: '"I was completely satisfied with the big scone paired with ice cream that had a hint of vanilla. I customized my cafe latte with soy milk." — June 2026.', source: R + 'B537508732/' },
        { text: '"I ordered a cold drink this time, but I couldn\'t shake the feeling that it didn\'t quite match the price." — October 2026.', source: R + 'B538034959/' },
      ],
      japanese_sources_summary: '食べログ: Woodwork Welcome Coffee、台東4-14-8 シモジンパークビル 1F、仲御徒町駅から210m、月木金土11:00〜18:00、日11:00〜17:00、火水休み、予約不可、10席、禁煙、カード (JCB、AMEX)・電子マネー・QR可。口コミ (2026年5〜10月): 家具店と一緒のカフェ、「家具とコーヒー」の看板、木の香り、大きなスコーンとアイス、さつまいものスコーン、バスクチーズケーキ、ブラウニー、深煎りブレンド、メープルラテ、豆乳に変更可、ホットチョコレート600円、スコーン450円、15時ごろや週末は混む、値段に見合わないという声も。',
      confidence: 'medium', sources: [TB, R + 'B528804582/', R + 'B529255190/', R + 'B529604593/', R + 'B530815857/', R + 'B535520363/', R + 'B536911739/', R + 'B537508732/', R + 'B537932052/', R + 'B538034959/', R + 'B538338619/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter; no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区台東4-14-8 シモジンパークビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated May–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区台東四丁目14番8号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528804582/'],
    price_note: 'Prices from a May 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Hot chocolate', '¥600', 'Drinks', 'ask', 'no', 'May 2026.', 'hot_chocolate'),
      it('', '', 'Scone', '¥450', 'Sweets', 'no', 'ask', 'May 2026.', 'scone'),
    ] }, {
    cuisine: '家具店と同じ空間のカフェ、看板は「家具とコーヒー」(2026年9月)・アイスを添えた大きなスコーン、さつまいものスコーン、バスクチーズケーキ、ブラウニー・深煎りブレンド、メープルラテ、カフェラテ (豆乳に変更可)、ホットチョコレート600円、スコーン450円 (2026年5月)',
    neighborhood: '台東四丁目、シモジンパークビル 1F。仲御徒町駅から徒歩3分、JR御徒町駅の近く',
    gf_detail: 'グルテンフリーは要確認。スコーン、ブラウニー、バスクチーズケーキは焼き菓子で、グルテンフリーの説明はありません。',
    vegan_detail: 'ヴィーガンは要確認。ラテは豆乳に変更できます (2026年6月) が、焼き菓子の説明はありません。',
    notes: '[カフェ・仲御徒町、家具に囲まれたコーヒー] 仲御徒町駅から数分、家具店と同じ部屋にある明るく木の香りのするカフェ。目当ては大きなスコーン (秋はさつまいも)、バスクチーズケーキ、ブラウニーに、深煎りのブレンドやメープルラテ。豆乳にも変更できます。午後3時ごろと週末は少し待つことも、閉店間際は空いています。口コミの多くは雰囲気を絶賛、2026年10月には冷たい飲み物が値段に見合わず、カフェと家具店がかみ合っていないという声も。火曜・水曜休み。',
  });
}

// ================================================================ スコッチバー ノア
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13074778/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '24:00']);
  put({
    id: 'tokyo_scotch_bar_noah_yushima', name: 'スコッチバー ノア (Scotch Bar Noah)', category: 'OMNI',
    lat: 35.70834, lng: 139.77054, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: a whisky bar; food is limited to snacks such as homemade dried fruit, which is not described for gluten.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Vegan — ask: a whisky bar with homemade dried fruit as the snack; nothing is described.',
    hours_raw: 'Daily 17:00–24:00; closed 1–3 January (Tabelog; may change). Reservations taken. Cash only. 8 counter seats. Smoking allowed.',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Yushima 3-chōme (Bunkyō), 2F on Kasuga-dōri — 1 min from Yushima Stn',
    cuisine: 'Classic Scotch whisky bar with a focus on cask-strength bottlings (March 2024) · homemade dried fruit to go with the whisky · classic recommendations and stories of Japanese whisky history from the owner · about ¥3,000–4,000 a visit (Tabelog)',
    website: null, gmaps: gm('スコッチバー ノア 湯島'), menu_url: null,
    notes: "[Bar · Yushima, a half-century Scotch bar with its founding owner] A small second-floor Scotch bar on Kasuga-dōri, a minute from Yushima Station, run for over 50 years by an owner who trained in Ginza and, in April 2026, was 86 and planning to keep going until 90. Eight counter seats, classic Scotch — especially cask-strength bottlings — with homemade dried fruit, and conversation about Ueno and the history of Japanese whisky. Recommendations are strictly classic, in the old hotel-bar style. Cash only; smoking allowed.",
    chef_bio: { chef_name: null, roles: ['owner-bartender'], origin: 'In business for over 50 years (April 2024 and September 2025 reviews); the owner trained in Ginza before opening here (April 2024).', background: 'Per reviews, a one-generation bar run by its owner-bartender, aged 82 in September 2022 and 86 in April 2026. No source names the owner.', philosophy: null, specialty: 'Cask-strength Scotch; homemade dried fruit.',
      anecdotes: [
        { text: '"The owner and bartender is currently 86 years old and still going strong." — April 2026.', source: R + 'B525924778/' },
        { text: '"This place focuses on Scotch, especially Cask Strength whiskies." — March 2024.', source: R + 'B482092289/' },
        { text: '"A great place to learn about whiskey." — July 2024.', source: R + 'B488147718/' },
      ],
      japanese_sources_summary: '食べログ: スコッチバー ノア、文京区湯島3-46-2 2F、湯島駅から徒歩1分、毎日17:00〜24:00、1月1〜3日休み、予約可、カード・電子マネー・QR不可、カウンター8席、喫煙可。口コミ (2018年5月〜2026年4月): 50年以上続く湯島の老舗のバー、銀座で修業した店主、2022年に82歳、2026年4月には86歳で90歳まで続ける予定、スコッチ、特にカスクストレングス、自家製のドライフルーツ、上野や日本のウイスキーの歴史の話、おすすめは王道のクラシック。',
      confidence: 'medium', sources: [TB, R + 'B405628860/', R + 'B454199245/', R + 'B467009369/', R + 'B482092289/', R + 'B482661319/', R + 'B488147718/', R + 'B513076998/', R + 'B525924778/', R + 'B90851929/'] },
    cultural_comfort: { level: 'japanese', note: 'Classic bar run by its elderly owner; cash only; no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都文京区湯島3-46-2 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; latest review April 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都文京区湯島三丁目46番2号 (go) 3m; offset ~4 m from the hidden placeholder tokyo3__229 (油そば専門店 浜そば 本店, same building) on the GSI point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No item prices found; about ¥3,000–4,000 a visit (Tabelog).', last_checked: TODAY, items: [] }, {
    cuisine: 'カスクストレングスを中心にした王道のスコッチウイスキーのバー (2024年3月)・ウイスキーに合わせる自家製のドライフルーツ・店主による王道のおすすめと日本のウイスキーの歴史の話・一回約3,000〜4,000円 (食べログ)',
    neighborhood: '湯島三丁目 (文京区)、春日通り沿いの2F。湯島駅から徒歩1分',
    gf_detail: 'グルテンフリーは要確認。ウイスキーのバーで、食べ物は自家製のドライフルーツなどのおつまみのみ。グルテンの説明はありません。',
    vegan_detail: 'ヴィーガンは要確認。ウイスキーのバーで、おつまみは自家製のドライフルーツ。説明はありません。',
    notes: '[バー・湯島、創業店主が50年以上続けるスコッチバー] 湯島駅から1分、春日通り沿いの2階にある小さなスコッチバーで、銀座で修業した店主が50年以上営み、2026年4月には86歳で、90歳まで続けるつもりとのこと。カウンター8席、王道のスコッチ、特にカスクストレングスを自家製のドライフルーツとともに、上野や日本のウイスキーの歴史の話も。おすすめは昔のホテルのバーのような王道のクラシック。現金のみ、喫煙可。',
  });
}

save();
