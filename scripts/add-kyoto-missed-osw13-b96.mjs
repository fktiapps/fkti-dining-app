// Kyoto priority (kyoto-missed), worker osw13, batch 96 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: 金の翼 エルドール, 新疆ウイグル料理ムカーム 京都店, フルーツ中澤 大丸京都店, ART MON ZEN KYOTO (THE TERRACE).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-96');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26018352', 'chain: 杉養蜂園 京都三条店 is one of about 75 directly run 杉養蜂園 shops nationwide (company profile on Mynavi; Japanese Wikipedia: 76 shops)');
skip('26040042', 'too thin to verify: 和飾 大福邸 has five reviews, none after October 2024');
skip('26002212', 'large parent: 桃屋 is run by 株式会社グラマラスフード (daniels.jp), which runs the ダニエルズ Italian group (本店, アルバ, ソーレ, ルーチェ, モンド and others) plus 桃屋 and 桃屋 錦; the shop sits in the company\'s own グラマラスフードビル, and January 2026 reviews call it part of the Daniels chain — flagged because ダニエルズ is in data as kyoto_daniels_nishiki');
skip('26013306', 'chain: 池田屋 はなの舞 京都三条河原町店 is a branch of チムニー\'s はなの舞 izakaya chain (298 shops in 2019, about 97 in 2022 per Chimney / PR Times)');

// ================================================================ 金の翼 エルドール
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26004024/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '22:30']);
  put({
    id: 'kyoto_kin_no_tsubasa_eldor_nishiki', name: '金の翼 エルドール (Kin no Tsubasa Eldor)', category: 'OMNI',
    lat: 35.004821, lng: 135.762523, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: fried set meals (croquettes, tonkatsu, karaage, fried shrimp), cold noodles and tare-grilled kalbi (2022–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat and fish set meals, Korean dishes and yakitori (2022–2026 reviews).',
    hours_raw: 'Tabelog: daily 11:30–22:30, lunch 11:30–15:30; closing days not fixed. Reservations taken. Cash only according to reviewers (April 2023; July 2026), though Tabelog lists cards — bring cash. 51 seats including a 19-seat counter and a second floor; banquets up to 35. Non-smoking (no smoking at lunch). In a renovated townhouse on Higashinotoin at Nishiki, opposite the market entrance, 2 min from Karasuma / Shijo.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Higashinotoin at Nishiki, by Daimaru — 2 min walk from Karasuma / Shijo',
    cuisine: 'A townhouse izakaya by Nishiki and Daimaru with a long, cheap lunch menu of set meals and Korean dishes (2022–2026 reviews) · daily lunch special ¥850 (November 2025) — e.g. croquette, tonkatsu, karaage, miso soup, simmered daikon (2023) · grilled-fish set ¥980 before tax with karaage, dashimaki and atsuage (August 2026); pork-cutlet set ¥990 (October 2026) · Korean: bibimbap set and Korean cold-noodle set ¥950 (August 2025); stone-grilled bibimbap; salad cold noodles (2026); kalbi set ¥1,023 (December 2025) · large fried-shrimp set ¥1,375 (December 2025); sashimi set (July 2026) · at night: yakitori, Korean dishes, sake, shochu and cocktails (Tabelog; July 2026)',
    website: null, gmaps: gm('金の翼 エルドール 錦'), menu_url: TB + 'dtlmenu/',
    notes: '[Izakaya & lunch sets · Higashinotoin at Nishiki, sub-¥1,000 set meals] A busy townhouse izakaya opposite the Nishiki entrance with a long list of cheap lunch sets — grilled fish, tonkatsu, karaage, bibimbap and Korean cold noodles mostly under ¥1,000 — turning to yakitori and Korean dishes at night. Cash only, reviewers say. Open daily.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Tabelog lists it as a corporate member. Reviewers from 2022 to 2026 praise the range and value of the lunch sets at a time of rising prices, and a lively crowd of office workers and shoppers; criticism: kalbi "a slight dryness" (December 2025) and Korean cold noodles that one diner found "a bit unappealing" (August 2025).',
      philosophy: null,
      specialty: 'Lunch set meals; Korean dishes.',
      anecdotes: [
        { text: 'August 2026: "For just JPY 980, you get grilled fish as the main dish, along with kara-age, dashimaki (Japanese omelette), thick fried tofu, and a small side dish!"', source: R + 'B535277506/' },
        { text: 'July 2026: "Upon arrival, I was informed that only cash payments were accepted."', source: R + 'B532100990/' },
      ],
      japanese_sources_summary: '食べログ: 金の翼 エルドール、居酒屋・韓国料理・魚介料理、中京区東洞院通錦小路東入ル西魚屋町622 (四条高倉上ル錦市場前)、阪急烏丸駅・地下鉄四条駅から徒歩2分、毎日 11:30〜22:30、ランチ 11:30〜15:30、不定休、予約可、51席 (カウンター19)、禁煙 (昼は禁煙)、カード可とあるが口コミでは現金のみ、法人会員。口コミ (2022年9月〜2026年10月、英語): 町家を改装、日替わりランチ850円 (コロッケ、とんかつ、唐揚げ、味噌汁、大根の煮物)、焼き魚定食980円 (税抜、唐揚げ・だし巻き・厚揚げ付き)、とんかつ定食990円、ビビンバと韓国冷麺のセット950円、石焼ビビンバ、サラダ冷麺、カルビ焼き定食1,023円、大海老フライ定食1,375円、刺身定食、夜は焼き鳥と韓国料理、現金のみ (2023年4月、2026年7月)、カルビが少しパサつく (2025年12月)。',
      confidence: 'medium', sources: [TB].concat(rv(R, ['B453827734', 'B511141466', 'B517718956', 'B519922327', 'B524215172', 'B530032799', 'B531856570', 'B532100990', 'B532303878', 'B534310244', 'B535277506', 'B538186414'])) },
    cultural_comfort: { level: 'japanese', note: 'Cash only (reviews); busy at lunch.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区東洞院通錦小路東入ル西魚屋町622',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing with reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004821, 135.762523); cross-checked: GSI 京都府京都市中京区西魚屋町622番地 (lot) 58m; nearest pin kyoto_daniels_nishiki 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B517718956/', R + 'B535277506/', R + 'B538186414/', R + 'B511141466/'],
    price_note: 'Lunch prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Daily lunch special', '¥850', 'Lunch', 'no', 'no', 'November 2025.', 'daily_lunch'),
      it('', '', 'Grilled-fish set', '¥980 + tax', 'Lunch', 'no', 'no', 'August 2026.', 'grilled_fish_set'),
      it('', '', 'Pork-cutlet set', '¥990', 'Lunch', 'no', 'no', 'October 2026.', 'tonkatsu_set'),
      it('', '', 'Bibimbap set', '¥950', 'Lunch', 'ask', 'no', 'August 2025.', 'bibimbap_set'),
      it('', '', 'Large fried-shrimp set', '¥1,375', 'Lunch', 'no', 'no', 'December 2025.', 'ebi_fry_set'),
    ] }, {
    cuisine: '錦と大丸のそばの町家の居酒屋で、安い定食と韓国料理の昼の品数が多い (2022〜2026年の口コミ)・日替わりランチ850円 (2025年11月)、たとえばコロッケ、とんかつ、唐揚げ、味噌汁、大根の煮物 (2023年)・唐揚げ、だし巻き、厚揚げ付きの焼き魚定食980円 (税抜、2026年8月)、とんかつ定食990円 (2026年10月)・韓国: ビビンバのセットと韓国冷麺のセット950円 (2025年8月)、石焼ビビンバ、サラダ冷麺 (2026年)、カルビ焼き定食1,023円 (2025年12月)・大海老フライ定食1,375円 (2025年12月)、刺身定食 (2026年7月)・夜は焼き鳥、韓国料理、日本酒、焼酎、カクテル (食べログ、2026年7月)',
    neighborhood: '東洞院錦、大丸のそば。烏丸・四条から徒歩2分',
    gf_detail: 'グルテンフリーではない: 揚げ物の定食 (コロッケ、とんかつ、唐揚げ、海老フライ)、冷麺、たれのカルビ (2022〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 肉や魚の定食、韓国料理、焼き鳥 (2022〜2026年の口コミ)。',
    notes: '[居酒屋と昼の定食・錦の東洞院、1,000円以下の定食] 錦の入口の向かいのにぎやかな町家の居酒屋。焼き魚、とんかつ、唐揚げ、ビビンバ、韓国冷麺など、多くが1,000円以下の昼の定食がずらり。夜は焼き鳥と韓国料理。口コミでは現金のみ。毎日営業。',
  });
}

// ================================================================ 新疆ウイグル料理ムカーム 京都店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26043186/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://mukamu.owst.jp/';
  const D = day(['17:00', '22:00']); const WE = day(['11:30', '14:30'], ['17:00', '22:00']);
  put({
    id: 'kyoto_muqam_uyghur_gion', name: '新疆ウイグル料理ムカーム 京都店 (MUQAM Kyoto)', category: 'OMNI',
    lat: 35.00482, lng: 135.77538, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: laghman noodles, flaky lamb buns, dumplings and fried rice-noodle dishes in wheat-based sauces (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: lamb- and beef-centred menu; Tabelog lists vegan and vegetarian options — ask which (Tabelog; reviews).',
    hours_raw: 'Tabelog: Mon, Tue, Thu, Fri and holidays 17:00–22:00 (food last order 21:30); Sat and Sun 11:30–14:30 and 17:00–22:00 (weekend lunch since March 2026); closed Wednesday. Reservations taken. 27 seats plus standing room for 40. Non-smoking; free Wi-Fi. Cards, e-money and QR (PayPay, Alipay, WeChat Pay and others). Tabelog tags halal, vegan and vegetarian options; no operator halal certification is cited, so the halal flag stays off. Ground floor of SAKIZO祇園花見小路ビル, north Hanamikoji. A reviewer had visited a Namba branch (October 2025).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Hanamikoji at Sueyoshi-cho, north Gion — 6 min walk from Gion-Shijo exit 9',
    cuisine: 'A Xinjiang Uyghur restaurant under colourful Turkish lamps, with owner and staff from Xinjiang (Tabelog; 2025–2026 reviews) · lamb skewers ¥400 with cumin and chilli; chicken skewers (October 2025; September 2026) · flaky roast-lamb-rib buns; lamb dumplings; Uyghur salad (2025) · Xinjiang fried rice noodles, thick and spicy, beef or chicken, two heat levels — the most popular dish (April 2026) · laghman hand-pulled noodles (April 2026) · Xinjiang yogurt with honey and raisins; Uyghur "Uus" beer (2025–2026)',
    website: SITE, gmaps: gm('ムカーム 京都店 花見小路'), menu_url: SITE,
    notes: '[Uyghur · north Hanamikoji, Gion, cumin lamb and laghman] A bazaar-lit Uyghur dining room off Hanamikoji run by Xinjiang natives: cumin-chilli lamb skewers, flaky lamb buns, laghman and fat spicy Xinjiang rice noodles, with Uyghur beer. Big portions for sharing. Dinner daily except Wednesday, plus weekend lunch.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: 'Xinjiang (owner and staff, per a September 2025 review)',
      background: 'A September 2025 reviewer writes that "the ingredients, owner, and waitstaff all come from Xinjiang"; another had eaten at a Namba branch about three years before (October 2025). Reviewers praise authentic cumin-led flavours and large portions; one April 2026 diner noted Japanese is spoken by the staff, and the Xinjiang beer was sold out on a September 2026 visit.',
      philosophy: null,
      specialty: 'Lamb skewers; Xinjiang fried rice noodles.',
      anecdotes: [
        { text: 'September 2025: "The outer layer is made of multiple flaky pastry layers that are crispy on the outside, and when you break it open, hot, juicy lamb fat spills out."', source: R + 'B513273409/' },
        { text: 'April 2026: "I visited for the first time since they started lunch service on weekends in March."', source: R + 'B526036396/' },
      ],
      japanese_sources_summary: '食べログ: 新疆ウイグル料理ムカーム 京都店、アジア・エスニック、東山区清本町352 SAKIZO祇園花見小路ビル 1F、京阪祇園四条駅9番出口から徒歩約6分、月・火・木・金・祝 17:00〜22:00 (料理 L.O. 21:30)、土日 11:30〜14:30・17:00〜22:00、水曜休み、予約可、27席、立食40名、禁煙、Wi-Fi、カード・電子マネー・QR可、ハラル・ヴィーガン・ベジタリアン対応の表記、トルコランプの内装、法人会員。口コミ (2025年7月〜2026年9月、英語): 店主もスタッフも新疆出身 (2025年9月)、羊肉串400円、鶏の串、羊のパイ包み、羊の水餃子、ウイグル風サラダ、人気の新疆米粉 (牛か鶏、辛さ2段階)、ラグメン、新疆ヨーグルト、新疆のビール、2026年3月から週末ランチ、難波にも店 (2025年10月)。',
      confidence: 'medium', sources: [TB, SITE].concat(rv(R, ['B513273409', 'B513764662', 'B515211826', 'B523912341', 'B526036396', 'B530095363', 'B536309321'])) },
    cultural_comfort: { level: 'english', note: 'Multilingual staff (Japanese and Chinese); halal options tagged, not certified.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区清本町352 SAKIZO祇園花見小路ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing with reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.004766, 135.775380), offset 6m north because kyoto_gion_sushi_taku (same SAKIZO building) sits 1.4m from the Tabelog point — now 7.2m from it; cross-checked: GSI 京都府京都市東山区清本町352番地 (lot) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B515211826/'],
    price_note: 'One price from an October 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Lamb skewer', '¥400', 'Grill', 'ask', 'no', 'October 2025.', 'lamb_skewer'),
      it('', '', 'Xinjiang fried rice noodles (beef or chicken)', null, 'Noodles', 'no', 'no', 'September 2025; April 2026.', 'xinjiang_noodles'),
      it('', '', 'Laghman', null, 'Noodles', 'no', 'no', 'April 2026.', 'laghman'),
    ] }, {
    cuisine: 'トルコランプが彩る新疆ウイグル料理の店で、店主もスタッフも新疆出身 (食べログ、2025〜2026年の口コミ)・クミンと唐辛子の羊肉串400円、鶏の串 (2025年10月、2026年9月)・パイ生地の羊のあばら肉包み、羊の水餃子、ウイグル風サラダ (2025年)・人気の太く辛い新疆米粉、牛か鶏、辛さ2段階 (2026年4月)・手延べのラグメン (2026年4月)・はちみつとレーズンの新疆ヨーグルト、新疆のビール (2025〜2026年)',
    neighborhood: '花見小路と末吉町の角、祇園の北側。祇園四条駅9番出口から徒歩6分',
    gf_detail: 'グルテンフリーではない: ラグメン、羊のパイ包み、水餃子、小麦の調味料を使う米粉の炒め物 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 羊肉と牛肉が中心。食べログにはヴィーガン・ベジタリアン対応の表記があるので内容を確認 (食べログ、口コミ)。',
    notes: '[ウイグル料理・祇園の花見小路北、クミンの羊とラグメン] 花見小路近くのバザールのような灯りのウイグル料理店で、新疆出身の店主たちが営む。クミンと唐辛子の羊肉串、パイ包みの羊、ラグメン、太く辛い新疆米粉に新疆のビール。量が多く分け合うのに向く。水曜以外の夜と週末の昼。',
  });
}

// ================================================================ フルーツ中澤 大丸京都店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26024622/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '20:00']);
  put({
    id: 'kyoto_fruits_nakazawa_daimaru', name: 'フルーツ中澤 大丸京都店 (Fruits Nakazawa Daimaru Kyoto)', category: 'OMNI',
    lat: 35.004059, lng: 135.762163, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: fresh fruit juices without added sugar may suit; soft-serve topping not checked (2016–2025 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: 100% fruit and vegetable juices may suit; mixed juices and soft serve may contain milk (2016–2025 reviews).',
    hours_raw: 'Tabelog: daily 10:00–20:00, closing days follow Daimaru Kyoto. No charge — Tabelog, Japanese original 「なし」. A juice stand in the basement food hall of Daimaru Kyoto near the Nishiki-side entrance (May 2018), with a few benches and tables nearby to drink on the spot (June 2022; March 2025). Non-smoking. Cards (JCB per Tabelog), e-money and QR. Directly connected to Karasuma / Shijo stations.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Daimaru Kyoto basement, Shijo-Takakura — direct from Karasuma / Shijo',
    cuisine: 'A department-store juice stand blending fresh fruit to order (2016–2025 reviews) · 100% fruit juices with no added sugar, the fruit cut as you order — apple, grapefruit, Okayama peach, kiwi, "peach of the day" (2017–2025) · classic mixed juice of banana, apple and orange ¥350, +¥100 for a soft-serve topping (2016; 2018) · kiwi mix ¥420 (May 2018); purple vegetable and red grape ¥450 (June 2022); big tropical juice with mango ¥580 (July 2016) · iced coffee; green tea (2016)',
    website: null, gmaps: gm('フルーツ中澤 大丸京都店'), menu_url: null,
    notes: '[Juice stand · Daimaru Kyoto basement, fruit cut and blended to order] A small juice counter in Daimaru\'s food hall where apples, peaches or kiwi are cut and blended as you order — no added sugar — plus a classic mixed juice with an optional soft-serve float. A few benches nearby. Open with the store, 10:00–20:00.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Reviewers since 2016 describe a juice stand in Daimaru Kyoto\'s basement where the fruit is cut and blended fresh for each order and the juices carry no added sugar (May 2018); one 2018 reviewer found it "a bit high" in price but worth it, and March and July 2025 reviewers praised the apple and Okayama peach juices. No source gives the operator or other shops.',
      philosophy: null,
      specialty: 'Fresh fruit juice.',
      anecdotes: [
        { text: 'March 2025: "After placing the order, I could hear the sound of the apples being cut fresh, which added to the delightful experience!"', source: R + 'B503468021/' },
        { text: 'July 2025: "They cut the fruit and blend it fresh for each order, making it incredibly delicious and refreshing."', source: R + 'B510122539/' },
      ],
      japanese_sources_summary: '食べログ: フルーツ中澤 大丸京都店、ジューススタンド・ジェラート・アイスクリーム、下京区立売西町79 大丸京都店 B1F、阪急烏丸駅・地下鉄四条駅直結、毎日 10:00〜20:00 (大丸京都店に準じる)、原文でサービス料「なし」、禁煙、カード (JCB)・電子マネー・QR可。口コミ (2016年1月〜2025年7月、英語): 大丸の地下の錦側の入口近く、注文ごとに果物を切って搾る、砂糖不使用、りんご、グレープフルーツ、岡山の桃、キウイ、日替わりの桃、ミックスジュース350円とソフトクリームのトッピング100円、キウイミックス420円、紫野菜と赤ぶどう450円、マンゴーのビッグトロピカル580円、アイスコーヒー、緑茶、近くにベンチとテーブル、やや高め (2018年)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B137383198', 'B138760471', 'B208757106', 'B233460879', 'B278960538', 'B350285721', 'B423120125', 'B450076026', 'B503468021', 'B510122539'])) },
    cultural_comfort: { level: 'japanese', note: 'Department-store counter; benches nearby.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区立売西町79 大丸京都店 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated March and July 2025.' },
    pin_source: `Tabelog ${TB} (35.004059, 135.762163); GSI resolves only to the town 京都府京都市下京区立売西町 (no lot), 42m away — marked approximate (inside the Daimaru basement); nearest pin kyoto_la_risotteria_daimaru 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B423120125/', R + 'B450076026/'],
    price_note: 'Only older prices in the sources (2016–2022).', last_checked: TODAY, items: [
      it('', '', 'Mixed juice (regular)', '¥350', 'Juice', 'ask', 'ask', 'July 2018.', 'mix_juice'),
      it('', '', 'Soft-serve topping', '+¥100', 'Topping', 'ask', 'no', '2016; 2018.', 'soft_serve_topping'),
      it('', '', 'Purple vegetable and red grape juice', '¥450', 'Juice', 'ask', 'ask', 'June 2022.', 'veg_grape_juice'),
      it('', '', 'Fresh apple juice', null, 'Juice', 'ask', 'ask', 'March and July 2025.', 'apple_juice'),
    ] }, {
    cuisine: '注文ごとに果物を搾る百貨店のジューススタンド (2016〜2025年の口コミ)・砂糖不使用の果汁100%のジュース、注文を受けてから果物を切る。りんご、グレープフルーツ、岡山の桃、キウイ、日替わりの桃 (2017〜2025年)・バナナ、りんご、オレンジの定番ミックスジュース350円、ソフトクリームのトッピング100円 (2016年、2018年)・キウイミックス420円 (2018年5月)、紫野菜と赤ぶどう450円 (2022年6月)、マンゴーのビッグトロピカル580円 (2016年7月)・アイスコーヒー、緑茶 (2016年)',
    neighborhood: '大丸京都店の地下、四条高倉。烏丸・四条から直結',
    gf_detail: '要確認: 砂糖不使用の生の果汁は合うかもしれない。ソフトクリームのトッピングは未確認 (2016〜2025年の口コミ)。',
    vegan_detail: '要確認: 果汁や野菜のジュースは合うかもしれないが、ミックスジュースやソフトクリームは乳を使う可能性 (2016〜2025年の口コミ)。',
    notes: '[ジューススタンド・大丸京都店の地下、注文ごとに搾る果物] 大丸の地下のジュースカウンターで、りんご、桃、キウイを注文を受けてから切って搾る。砂糖は使わない。定番のミックスジュースにはソフトクリームものせられる。近くにベンチ。店の営業時間に合わせ10時〜20時。',
  });
}

// ================================================================ ART MON ZEN KYOTO (THE TERRACE)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26032314/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.amz-kyoto.jp/'; const RS = 'https://www.amz-kyoto.jp/ja/restaurant/';
  const H = day(['11:30', '17:00']);
  put({
    id: 'kyoto_art_mon_zen_the_terrace', name: 'ART MON ZEN KYOTO (THE TERRACE)', category: 'OMNI',
    lat: 35.006951, lng: 135.77432, cuisine_type: 'french',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: afternoon-tea pastries and course breads; the afternoon tea cannot accommodate wheat, dairy, egg, nut, chocolate or fruit allergies (official site).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: French courses with fish, duck and dairy; no allergy accommodation for afternoon tea (official site; reviews).',
    hours_raw: 'Official site: THE TERRACE café and lunch Wed–Sun 11:30–17:00 (course last order 14:00, à la carte and café 16:15) until 8 December 2026; from 9 December 11:30–15:00 (course last order 13:00, café 14:00); closed Monday and Tuesday; temporary closures possible. Seasonal lunch course by reservation the day before by 17:00; café seating 90 minutes, weekend courses 120 minutes. Afternoon tea (SNOW WHITE, 21 October – 6 December 2026, then a new period to 31 January 2027) by reservation the day before by 11:00, two or more people, 120 minutes, with free-flow drinks; no allergy accommodation. Breakfast and dinner are for hotel guests only (breakfast opened to the public in limited periods). No children under six. Cards (Amex per Tabelog). Basement lounge of the small hotel ART MON ZEN KYOTO on Furumonzen-dori east of Yamatooji.',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Furumonzen-dori east of Yamatooji, north Gion — 4 min walk from Sanjo Keihan',
    cuisine: 'The basement restaurant of an art-filled boutique hotel on Furumonzen-dori, serving French lunch courses, a café and themed free-flow afternoon teas (official site; 2023–2026 reviews) · lunch course ¥4,500: prosciutto and ricotta mousse, chilled winter-melon cream soup, pan-seared isaki, mango jelly with mango ice cream (June 2024) · courses with terrine, pumpkin soup, poêlé horse mackerel, Mont Blanc (December 2024); amuse of ebi-imo risotto, Iberico ham with tomato sorbet, katsuo and barracuda with scallop and beurre blanc, roast duck (January 2026) · afternoon tea with sparkling wine and free-flow drinks, e.g. Rose & Berry ¥6,413 (April 2023); SNOW WHITE autumn–winter 2026 with 30 free-flow drinks (official site)',
    website: SITE, gmaps: gm('ART MON ZEN KYOTO THE TERRACE'), menu_url: RS,
    notes: '[French lunch & afternoon tea · Furumonzen, a boutique art hotel\'s lounge] The basement lounge of a small art-and-antiques hotel near Gion, open to non-guests for French lunch courses, café and elaborate free-flow afternoon teas among museum-grade pieces. Book a day ahead; no under-sixes. Closed Monday and Tuesday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'A January 2026 reviewer describes "a hotel restaurant owned by an art dealer in Kyoto"; other reviewers note museum-quality antiques (January 2024), a sukiya-and-Western interior with a sunken-hearth tatami room (June 2024) and attentive phone service (January 2024). Criticism: the breakfast mains disappointed one October 2025 guest. The official site lists the hotel\'s Kyoto kaiseki restaurant 祇園松むろ about 20 m west.',
      philosophy: null,
      specialty: 'French lunch courses; afternoon tea.',
      anecdotes: [
        { text: 'January 2024: "It feels like stepping into an art museum!"', source: R + 'B463679080/' },
        { text: 'January 2026: "A hotel restaurant owned by an art dealer in Kyoto. I had the pleasure of enjoying some truly exquisite French cuisine after a long time."', source: R + 'B520114336/' },
      ],
      japanese_sources_summary: '公式サイト: ART MON ZEN KYOTO 内レストラン「THE TERRACE」、地下のラウンジエリアで朝食・ランチ・カフェ、数寄屋と西洋建築の空間、カフェ・ランチは月・火定休、11:30〜17:00 (コース L.O. 14:00、アラカルト・カフェ L.O. 16:15)、12/9以降は11:30〜15:00、シーズナルコースは前日17時までに予約、朝食とディナーは宿泊客のみ (朝食は期間限定で一般も)、アフタヌーンティー「SNOW WHITE」(2026年10月21日〜12月6日、前日11時までに予約、2名から、120分、フリーフロー30種、アレルギー対応不可)、未就学児不可、京懐石「祇園松むろ」は約20m西。食べログ: 東山区古門前通大和大路東入元町391、三条京阪から260m、カード (AMEX) 可。口コミ (2020年9月〜2026年1月、英語): 美術館のような骨董、ランチコース4,500円 (生ハムとリコッタのムース、冬瓜の冷製スープ、いさきのポワレ、マンゴーゼリー)、テリーヌ、かぼちゃのスープ、あじのポワレ、モンブラン、海老芋のリゾット、イベリコハム、かつおとかますのブールブラン、鴨のロースト、ローズ＆ベリーのアフタヌーンティー6,413円 (2023年4月)、京都の美術商が営むホテルのレストラン (2026年1月)、朝食の主菜が物足りない (2025年10月)。',
      confidence: 'medium', sources: [SITE, RS, TB].concat(rv(R, ['B463679080', 'B465725196', 'B473474079', 'B478817460', 'B480812254', 'B487261769', 'B493692497', 'B496897570', 'B514856644', 'B520114336'])) },
    cultural_comfort: { level: 'english', note: 'Hotel restaurant open to non-guests at lunch; book a day ahead; no under-sixes.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区古門前通大和大路東入元町391',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official restaurant page (schedule updated November 2026) and Tabelog listing with reviews through January 2026.' },
    pin_source: `Tabelog ${TB} (35.006951, 135.774320); cross-checked: GSI 京都府京都市東山区元町391番地 (lot) 64m; nearest pin kyoto_kappo_tanyoshi 54m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B487261769/', R + 'B465725196/', RS],
    price_note: 'Course prices from 2023–2024 reviews; current prices on the official site.', last_checked: TODAY, items: [
      it('', '', 'Lunch course', '¥4,500', 'Course', 'no', 'no', 'June 2024.', 'lunch_course'),
      it('', '', 'Afternoon tea with free-flow drinks', '¥6,413', 'Afternoon tea', 'no', 'no', 'April 2023; themed seasonal sets.', 'afternoon_tea'),
    ] }, {
    cuisine: '古門前通にある美術品のブティックホテルの地下のレストランで、フレンチのランチコース、カフェ、テーマのあるフリーフロー付きのアフタヌーンティー (公式サイト、2023〜2026年の口コミ)・ランチコース4,500円: 生ハムとリコッタのムース、冬瓜の冷製クリームスープ、いさきのポワレ、マンゴーゼリーとマンゴーアイス (2024年6月)・テリーヌ、かぼちゃのスープ、あじのポワレ、モンブランのコース (2024年12月)、海老芋のリゾット、イベリコハムとトマトのソルベ、かつおとかますのホタテとブールブラン、鴨のロースト (2026年1月)・スパークリングとフリーフロー付きのアフタヌーンティー、ローズ＆ベリー6,413円 (2023年4月)、2026年秋冬は30種のフリーフローの SNOW WHITE (公式サイト)',
    neighborhood: '大和大路東入ルの古門前通、祇園の北。三条京阪から徒歩4分',
    gf_detail: 'グルテンフリーではない: アフタヌーンティーの菓子やコースのパン。アフタヌーンティーは小麦・乳・卵・ナッツ・チョコレート・果物のアレルギーに対応不可 (公式サイト)。',
    vegan_detail: 'ヴィーガン不可: 魚、鴨、乳製品のフレンチのコース。アフタヌーンティーはアレルギー対応不可 (公式サイト、口コミ)。',
    notes: '[フレンチのランチとアフタヌーンティー・古門前、ブティックアートホテルのラウンジ] 祇園近くの美術品と骨董のある小さなホテルの地下のラウンジで、宿泊者以外もフレンチのランチ、カフェ、凝ったフリーフローのアフタヌーンティーを楽しめる。前日までに予約、未就学児不可。月・火休み。',
  });
}

save();
