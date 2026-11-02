// Tokyo gaps sweep (1-mile circles between the existing Tokyo clusters), circle roppongi — lane osw9, batch 14.
//   + 白土 shirato (8-seat counter, about 20 small Japanese-French dishes by chef Seiji Shirato; lunch ¥9,900, dinner ¥24,200)
//   + てんぷら 味覚 Tempura Mikaku (Edo-style tempura since 1931, in Roppongi about 30 years; ¥1,300 tendon lunch) — TEMPORARILY
//     CLOSED for renovation since 1 September, reopening planned for early December (Tabelog notice)
//   + 芋洗坂の下 Imoarai Zaka no Shita (wagyu kappo: single-portion A5 Yamagata-beef "choi-suki" from ¥2,420)
//   + 一億 Ichi Oku (international home cooking since 1968; tofu steak, ginger-grilled tuna; dinner only)
//   Skipped: MASHI NO MASHI TOKYO 13245303 — WAGYUMAFIA's ramen shop (Tabelog website wagyumafia.official.ec; 2026 reviews
//   say it is operated by WAGYUMAFIA); press in 2022 counted 11 WAGYUMAFIA shops in Tokyo and 3 in Hong Kong, and a
//   Mashi No Mashi opened in Sydney — expanding fast.
//   Chain check: none of the four is in data/tokyo, osaka or kyoto by name, Tabelog id or address.
//   Pins: Mikaku (6-7-17, ground floor) and Imoarai Zaka no Shita (6-7-17 小俣ビル 2F) have Tabelog points 3 m apart, so
//   Imoarai is offset ~10 m south-west. Tabelog URLs copied from each listing.txt line 1. No placeholder hours.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw9-14');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13245303', 'MASHI NO MASHI TOKYO: WAGYUMAFIA ramen shop (wagyumafia.official.ec); WAGYUMAFIA had 11 Tokyo + 3 Hong Kong shops by 2022 and a Mashi No Mashi in Sydney — expanding fast');

// ================================================================ 白土
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13239450/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.shirato.tokyo';
  const E = day(['18:00', '23:00']); const L = day(['11:30', '15:00'], ['18:00', '23:00']);
  put({
    id: 'tokyo_shirato_roppongi', name: '白土 (shirato)', category: 'OMNI',
    lat: 35.664765, lng: 139.73188, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. An omakase of small dishes that has included house focaccia, a fried dish with tartar sauce and a truffle ramen (July–August 2026); nothing is said about gluten.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options, but the courses are built on fish, shellfish and meat and no vegan course is described.',
    hours_raw: 'Tue–Fri 18:00–23:00 (last order 22:30); Sat, Sun and holidays also lunch 11:30–15:00 (last order 13:00); closed Mondays (Tabelog). All guests are served at the same time, so please be punctual. 10% service charge. 8 counter seats; private hire up to 20. Non-smoking. Cards (VISA, Master, JCB, AMEX); no e-money. English menu. BYO possible. Alcoholic and non-alcoholic pairings cost extra. Opened 21 October 2019 (Tabelog).',
    hours: { 1: E, 2: E, 3: E, 4: E, 5: L, 6: L }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Roppongi 4-4-8, エトワール六本木ビル 2F — 1 min from Roppongi Stn exit 7',
    cuisine: 'About 20 small dishes of seasonal ingredients from around Japan, cooked Japanese, Western or Chinese style as suits each one (Tabelog shop text) · courses (Tabelog, tax included): autumn seafood and mushroom course and winter seafood omakase, 15 items, ¥24,200, both with the house "Nodoguro Soup de Poisson"; omakase with alcohol pairing ¥40,700 · weekend lunch course ¥9,900 (September 2026), 8 dishes with focaccia (June 2026) · in 2026: white shrimp with caviar; tiger fugu and shirako chawanmushi; Ezo abalone with liver sauce and risotto; botan shrimp marinated in brandy; nodoguro grilled over charcoal with fish soup and saffron risotto; sweetfish confit; sea bass in saffron sauce on ratatouille; Ezo venison or Obanazawa beef with two-year-aged potatoes; a truffle ramen; kaffir-lime ice cream · pairings of 7–8 drinks: wines and sake, or domestic teas including smoked tea (Tabelog shop text)',
    website: SITE, gmaps: gm('白土 六本木4-4-8'), menu_url: TB + 'dtlmenu/',
    notes: "[French · Roppongi, a white 8-seat counter of 20 small seasonal dishes] Up on the second floor a minute from Roppongi Station, an L-shaped counter of eight before an open kitchen, in a room of white plaster, wood, earth and stone — the name means \"white soil\". Chef Seiji Shirato cooks about twenty small plates of seasonal produce from around Japan, French at heart but borrowing from Japanese and Chinese cooking: brandy-marinated botan shrimp, charcoal-grilled nodoguro with soup de poisson, Ezo venison with two-year-aged potatoes, even a truffle ramen. Diners in 2026 loved the variety and the drink or tea pairings; one found the sauces a touch sweet. Dinner ¥24,200; weekend lunch ¥9,900.",
    chef_bio: { chef_name: 'Seiji Shirato (as written in the Tabelog shop text)', roles: ['Chef (Tabelog shop text)'], origin: null,
      background: 'Per the Tabelog shop text: chef Seiji Shirato trained at a hotel in Tokyo, spent three years as sous chef at a bistro in Azabu-Juban, and opened this restaurant at 29. A July 2026 diner describes the chef running the place solo; an August 2026 diner saw one chef cooking and a staff member serving drinks. Opened 21 October 2019 (Tabelog).',
      philosophy: 'Each ingredient cooked in the way that tastes best, whether Japanese, Western or Chinese (Tabelog shop text).', specialty: 'Nodoguro soup de poisson; about 20 small seasonal dishes.',
      anecdotes: [
        { text: '"One standout dish was the "Botan Ebi (Sweet Shrimp) marinated in Brandy."" — May 2026, omakase course.', source: R + 'B528950791/' },
        { text: '"This course, centered around fish dishes, kept me engaged until the end with various cooking methods such as grilling, frying, charcoal cooking, confit, and escabeche." — July 2026, ¥24,200 course.', source: R + 'B531213310/' },
        { text: '"However, I found that the sauces for all the dishes were a bit on the sweet side." — September 2026, lunch ¥9,900.', source: R + 'B535105168/' },
      ],
      japanese_sources_summary: '食べログ: 白土、港区六本木4-4-8 エトワール六本木ビル2F、六本木駅7番出口から徒歩1分、火〜金18:00〜23:00 (L.O.22:30)、土日祝は11:30〜15:00も、月休み、一斉スタート、サービス料10%、8席 (カウンター)、貸切20名まで、禁煙、カード可、英語メニュー、持ち込み可、ベジタリアンメニューあり、2019年10月21日オープン。店の紹介: 全国の旬の食材を和洋中にとらわれず約20品の小皿で、名物「のどぐろのスープ・ド・ポワソン」、ワイン・日本酒や国産茶のペアリング、白い漆喰の壁と土色のカウンター、シェフ Seiji Shirato (東京のホテル、Azabu-Juban のビストロで3年スーシェフ、29歳で独立)。コース24,200円、アルコールペアリング付き40,700円。口コミ(2026年1月〜9月): 昼のコース9,900円、ブランデー漬けの牡丹海老、炭火ののどぐろ、Ezo の鹿、Obanazawa の牛、トリュフのラーメン、ソースが少し甘いという声。',
      confidence: 'medium', sources: [TB, SITE, R + 'B521100097/', R + 'B528950791/', R + 'B530303139/', R + 'B531213310/', R + 'B531618791/', R + 'B532000856/', R + 'B535105168/', R + 'B536446790/', R + 'B536551617/', R + 'B537500100/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); omakase at the counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木4-4-8 エトワール六本木ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with courses and an official site; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.664765, 139.731880); GSI 東京都港区六本木四丁目4番 (lot) 34m; Steam (4-12-2) is 16 m and Goku (4-12-4) 24 m away in other buildings; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B535105168/'],
    price_note: 'Course prices from Tabelog (tax included) and a September 2026 review; 10% service charge.', last_checked: TODAY, items: [
      it('', '', 'Seasonal seafood omakase course, 15 items (nodoguro soup de poisson)', '¥24,200', 'Course', 'ask', 'no', 'Tabelog.', 'omakase'),
      it('', '', 'Omakase course with alcohol pairing', '¥40,700', 'Course', 'ask', 'no', 'Tabelog.', 'omakase_pairing'),
      it('', '', 'Weekend lunch course', '¥9,900', 'Lunch', 'ask', 'no', 'September 2026 review.', 'lunch'),
    ] }, {
    cuisine: '全国から集めた旬の食材を、和洋中にとらわれずそれぞれいちばんおいしい形で出す約20品の小皿 (食べログの店の紹介)・コース (食べログ、税込み): 名物「のどぐろのスープ・ド・ポワソン」が入る秋の魚介ときのこのコースと冬の魚介のおまかせ、15品24,200円、アルコールペアリング付き40,700円・週末の昼のコース9,900円 (2026年9月)、フォカッチャ付きの8品 (2026年6月)・2026年の料理: キャビアをのせた白海老、とらふぐと白子の茶碗蒸し、Ezo の鮑の肝ソースとリゾット、ブランデー漬けの牡丹海老、炭火焼きののどぐろとスープとサフランのリゾット、鮎のコンフィ、ラタトゥイユにのせたサフランソースの鱸、Ezo の鹿か Obanazawa の牛と2年熟成のじゃがいも、トリュフのラーメン、こぶみかんのアイス・7〜8杯のペアリング: ワインと日本酒、または燻製茶などの国産茶 (食べログの店の紹介)',
    neighborhood: '六本木4-4-8 エトワール六本木ビル2F。六本木駅7番出口から徒歩1分',
    gf_detail: '要確認。小皿のおまかせで、自家製フォカッチャ、タルタルソースの揚げ物、トリュフのラーメンも出た (2026年7〜8月)。グルテンについての説明はない。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあるが、コースは魚、貝、肉が中心で、ヴィーガンのコースの記載はない。',
    notes: '[フレンチ・六本木、白い8席のカウンターで旬の小皿20品] 六本木駅から1分、2階の白い漆喰、木、土、石の空間に、オープンキッチンを囲むL字のカウンター8席。店名の通り「白い土」。シェフ Seiji Shirato が全国の旬の食材で、フレンチを軸に和や中華も取り入れた約20品の小皿を作る。ブランデー漬けの牡丹海老、炭火焼きののどぐろとスープ・ド・ポワソン、2年熟成の芋を添えた Ezo の鹿、トリュフのラーメンまで。2026年の客は品数の多さとお酒やお茶のペアリングを楽しみ、ソースが少し甘いという声も。夜24,200円、週末の昼9,900円。',
  });
}

// ================================================================ てんぷら 味覚
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13016615/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'tokyo_tempura_mikaku_roppongi', name: 'てんぷら 味覚 (Tempura Mikaku)', category: 'OMNI',
    lat: 35.661662, lng: 139.732659, cuisine_type: 'tempura',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat-batter tempura, with a sweet-savoury tendon sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the vegetable tendon includes an egg (January 2025 visit), and bowls come with tendon sauce and miso soup; most tempura is shrimp and fish.',
    hours_raw: 'TEMPORARILY CLOSED for renovation since 1 September; the shop first aimed to reopen in mid-October and now plans early December (Tabelog notice). Before the closure: Mon–Fri and days before/after holidays, lunch 11:30–14:00 (last order 13:30) and dinner 18:00–22:00 (food last order 20:30, drinks 21:00); closed Saturdays, Sundays and holidays; dinner reservations until 15:00 the day before (Tabelog). Lunch queues at noon (June 2026). 30 seats: 9 at the counter, 8 at tables, 8 in a tatami room, 6 in a small room; private hire up to 20. Non-smoking inside. Cards, e-money and QR (PayPay, Alipay, WeChat Pay and others). Children and babies welcome. BYO, takeout and delivery.',
    hours: {}, hours_status: 'irregular',
    closed: { status: 'temporary', until: 'early December (planned; Tabelog notice)', note: 'Closed for renovation since 1 September; reopening delayed from mid-October to early December (Tabelog notice).', checked: TODAY },
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Roppongi 6-7-17, in a side street below Roppongi crossing towards Roppongi Hills — 3 min from Roppongi Stn exit 3',
    cuisine: 'Edo-style tempura (2026 reviews) · lunch with miso soup and pickles: tendon ¥1,300 (two shrimp, small-shrimp tempura, onion, shishito, eggplant); salt tendon ¥1,500 with rock salt instead of sauce (June and August 2026); omakase tendon ¥1,800 of about seven items such as kisu, anago, small-shrimp tempura, a soft-boiled egg and vegetables (June 2026); vegetable tendon ¥1,300 (January 2025 visit) · dinner tempura courses about ¥6,600 and ¥8,800 (July 2026) and a duck hot-pot course (June 2026) · fried in Imai first-press sesame oil and cottonseed oil (June 2026) · sake and shochu',
    website: null, gmaps: gm('てんぷら 味覚 六本木'), menu_url: TB + 'dtlmenu/',
    notes: "[Tempura · Roppongi, a Showa-era tendon counter, closed for renovation until December] A long-established tempura house in a side street below Roppongi crossing — founded in Nihonbashi in 1931 and in Roppongi for about 30 years, per a June 2026 diner — with a counter, tables and a tatami room. Lunch is the famous part: tendon from ¥1,300, the salt tendon sprinkled with rock salt, and the ¥1,800 omakase bowl piled with shrimp, kisu, anago and a soft-boiled egg, fried in sesame and cottonseed oil, with a noon queue. Evenings bring tempura courses and a duck hot pot. Diners in 2026 found it great value for Roppongi; one found the salt bowl too salty. Closed for renovation since 1 September; reopening planned for early December.",
    chef_bio: { chef_name: null, roles: [], origin: 'Founded in Nihonbashi in 1931; in Roppongi for about 30 years (June 2026 review)',
      background: 'A June 2026 diner writes that the shop was founded in Nihonbashi in 1931 and moved to Roppongi about 30 years ago; another June 2026 diner counted five staff at lunch, led by an owner who looked to be in the seventies age range; an August 2026 diner saw an elderly chef frying alone. No one is named in the sources read.',
      philosophy: null, specialty: 'Tendon — sauce, salt and omakase.',
      anecdotes: [
        { text: '"Upon my return, I can confidently say that this is the go-to place for tempura rice bowls in Roppongi." — June 2026, omakase tendon ¥1,800.', source: R + 'B108339573/' },
        { text: '"Using Imai\'s first-pressed sesame oil and cottonseed oil, the tempura is remarkably flavorful and light." — June 2026.', source: R + 'B530533654/' },
        { text: '"The salt tempura rice bowl, not dipped in sauce, is a serious challenge seasoned only with salt!" — August 2026, ¥1,500.', source: R + 'B533068960/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): てんぷら 味覚、港区六本木6-7-17、六本木駅3番出口から徒歩3分、月〜金と祝前日・祝後日の11:30〜14:00 (L.O.13:30)、18:00〜22:00 (料理L.O.20:30)、土日祝休み、夜の予約は前日15時まで、30席 (カウンター9、テーブル8、座敷8、小部屋6)、貸切20名まで、店内禁煙、カード・電子マネー・QR可、子ども可、持ち込み・テイクアウト・デリバリー、ベジタリアンメニューあり。お知らせ: 9月1日から改装のため休業、10月中旬の再開予定が遅れ、12月上旬の再開をめざす。口コミ(2025年1月〜2026年8月): 1931年に Nihonbashi で創業、約30年前に六本木へ、天丼1,300円、塩天丼1,500円、おまかせ丼1,800円、ごま油と綿実油、夜のコースと鴨鍋、昼は行列。',
      confidence: 'medium', sources: [TB, R + 'B108339573/', R + 'B378868615/', R + 'B498917344/', R + 'B502634318/', R + 'B529420904/', R + 'B530533654/', R + 'B530560703/', R + 'B531800173/', R + 'B533019544/', R + 'B533068960/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter lunch; many overseas customers noted (March 2024 visit).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木6-7-17',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with a renovation-closure notice; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.661662, 139.732659); GSI 東京都港区六本木六丁目7番 (lot) 47m; Imoarai Zaka no Shita (tokyo_imoarai_zaka_no_shita_roppongi, same address, 2F) is the one offset; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B498917344/', R + 'B530533654/', R + 'B533068960/'],
    price_note: 'Lunch prices from May–August 2026 reviews, before the renovation closure.', last_checked: TODAY, items: [
      it('', '', 'Tendon (lunch, with miso soup and pickles)', '¥1,300', 'Lunch', 'no', 'no', 'May–July 2026 reviews.', 'tendon'),
      it('', '', 'Salt tendon', '¥1,500', 'Lunch', 'no', 'no', 'June and August 2026 reviews.', 'shio_tendon'),
      it('', '', 'Omakase tendon', '¥1,800', 'Lunch', 'no', 'no', 'June 2026 reviews.', 'omakase_don'),
      it('', '', 'Vegetable tendon (includes egg)', '¥1,300', 'Lunch', 'no', 'no', 'January 2025 visit.', 'yasai_tendon'),
    ] }, {
    cuisine: '江戸前の天ぷら (2026年の口コミ)・昼は味噌汁と漬物付き: 天丼1,300円 (海老2本、小海老の天ぷら、玉ねぎ、ししとう、茄子)、たれの代わりに岩塩をふる塩天丼1,500円 (2026年6月・8月)、鱚、穴子、小海老の天ぷら、半熟卵、野菜など約7品のおまかせ丼1,800円 (2026年6月)、野菜天丼1,300円 (2025年1月)・夜は約6,600円と8,800円の天ぷらのコース (2026年7月) と鴨鍋のコース (2026年6月)・Imai の一番搾りのごま油と綿実油で揚げる (2026年6月)・日本酒と焼酎',
    neighborhood: '六本木6-7-17、六本木交差点から Roppongi Hills 方面に下った脇道。六本木駅3番出口から徒歩3分',
    gf_detail: 'グルテンフリー不可。小麦の衣の天ぷらで、甘辛い天丼のたれ。',
    vegan_detail: 'ヴィーガン不可。野菜天丼にも卵が入り (2025年1月)、丼はたれと味噌汁付き。天ぷらは海老と魚が中心。',
    notes: '[天ぷら・六本木、昭和の天丼のカウンター、12月まで改装で休業] 六本木交差点から下った脇道の老舗の天ぷら店。2026年6月の客によれば1931年に Nihonbashi で創業し、六本木に移って約30年。カウンター、テーブル、座敷がある。有名なのは昼で、1,300円からの天丼、岩塩をふる塩天丼、海老、鱚、穴子、半熟卵がのる1,800円のおまかせ丼。ごま油と綿実油で揚げ、昼どきは行列。夜は天ぷらのコースや鴨鍋。2026年の客は六本木にしては安いと書き、塩天丼が塩辛すぎたという声も。9月1日から改装で休業中、12月上旬の再開予定。',
  });
}

// ================================================================ 芋洗坂の下
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13307712/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:00', '23:00']);
  put({
    id: 'tokyo_imoarai_zaka_no_shita_roppongi', name: '芋洗坂の下 (Imoarai Zaka no Shita)', category: 'OMNI',
    lat: 35.661587, lng: 139.732598, cuisine_type: 'sukiyaki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The sukiyaki is simmered in a sweet-savoury sauce whose ingredients are not given, and the menu has breaded wagyu katsu, menchi katsu and tempura; nothing is called gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu kappo — beef sukiyaki and shabu-shabu with egg, Kyoto pork, chicken and fish dishes.',
    hours_raw: 'Daily 11:30–15:00 (last order 14:30) and 17:00–23:00 (food last order 22:00, drinks 22:30) (Tabelog). Lunch: walk-in on Wednesdays, Fridays and Saturdays; reservation needed on Mondays, Tuesdays, Thursdays and Sundays (Tabelog). Closed 29 November for a special holiday. ¥500 (plus tax) cover per person; one drink per person at dinner. 14 seats: 8 at the counter, 6 in semi-private rooms (private rooms for 4 or 6). Heated tobacco only, in a designated area. Cards, e-money and QR (PayPay, Alipay, WeChat Pay and others). Multilingual menu, many overseas guests (July 2026). Children welcome. Opened in 2025 (July 2026 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Roppongi 6-7-17, 小俣ビル 2F, at the foot of Imoarai-zaka — 3 min from Roppongi Stn exit 3',
    cuisine: 'Wagyu kappo built around A5 female Yamagata-beef strip loin (Tabelog shop text; September 2026) · "choi-suki": sukiyaki for one in a small iron pot from 100 g, dipped in a fluffy meringue of Awasonodachi eggs offered at Ise Jingu — set with vegetables, rice and pickles ¥4,480, à la carte ¥2,420 (September 2026) · Yamagata beef and Kyoto pork shabu-shabu with ponzu and sesame sauce · drinking dishes: Tokachi herb-beef yukhoe ¥1,760, wagyu tataki, low-temperature liver, beef-toro potato salad ¥660, wagyu rare katsu and menchi katsu, dashimaki in sukiyaki broth, spicy-miso chicken ¥990, figs with mascarpone and nara-zuke ¥880, sweet-potato tempura ¥880 (September 2026); small dishes ¥500–900 (Tabelog shop text) · course: chawanmushi, yukhoe, fritto, then sukiyaki or shabu-shabu, ¥9,900; all-you-can-drink option with premium sake (September 2026)',
    website: null, gmaps: gm('芋洗坂の下 六本木6-7-17'), menu_url: TB + 'dtlmenu/',
    notes: "[Sukiyaki · Roppongi, A5 Yamagata-beef sukiyaki for one at the foot of Imoarai-zaka] A retro-modern second-floor counter with semi-private rooms, opened in 2025, that makes wagyu sukiyaki casual: the \"choi-suki\" is two or three slices of A5 Yamagata strip loin simmered in a small iron pot in front of you and dipped not in raw egg but in a fluffy meringue of eggs offered at Ise Jingu — ¥4,480 as a set with vegetables and rice. Around it, a menu of drinking dishes from ¥500: beef-toro potato salad, Tokachi beef yukhoe, wagyu rare katsu. Diners in 2026 praised the meat, the cheerful manager and the value for Roppongi; many guests are from overseas. Course ¥9,900; ¥500 cover.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A July 2026 diner says the restaurant opened the previous year and found the manager and staff cheerful and chatty across the counter. A September 2026 diner notes Yamagata beef, Kyoto pork and vegetables from contracted farms. No one is named in the sources read.',
      philosophy: 'Wagyu dishes that go with a drink, and sukiyaki in small portions for a relaxed, casual evening (Tabelog shop text).', specialty: 'Choi-suki — single-portion A5 Yamagata sukiyaki with meringue egg.',
      anecdotes: [
        { text: '"… a new style of sukiyaki called "Choi Suki," allowing you to order as few as 2 to 3 slices, making it perfect for enjoying as a snack or a main dish." — July 2026.', source: R + 'B531549310/' },
        { text: '"The meat was, of course, delicious, but the meringue-like egg was a new experience for me." — September 2026, course with all-you-can-drink.', source: R + 'B536279175/' },
        { text: '"It’s popular among inbound customers, with a multilingual menu available, making it easy to recommend to travelers from abroad." — July 2026.', source: R + 'B531549310/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 芋洗坂の下、港区六本木6-7-17 小俣ビル2F、六本木駅3番出口から徒歩3分、毎日11:30〜15:00、17:00〜23:00、昼は水金土は予約なし、月火木日は要予約、11月29日は臨時休業、お通し500円 (税別)、夜は1人1ドリンク、14席 (カウンター8、半個室6)、加熱式たばこのみの喫煙所、カード・電子マネー・QR可、子ども可。店の紹介: Tokachi ハーブ牛のユッケなどのつまみ、A5の Yamagata 牛のすき焼きを100gから小鍋で、Ise Jingu に奉納される卵、和牛のレアカツ、すき焼きの割下のだし巻き、500〜900円の一品。コース9,900円。口コミ(2026年7月〜10月): ちょいすきセット4,480円 (単品2,420円)、メレンゲ状の卵、牛トロのポテトサラダ660円、店長が気さく、海外の客が多い、2025年オープン。',
      confidence: 'medium', sources: [TB, R + 'B531469199/', R + 'B531549310/', R + 'B532435434/', R + 'B533021622/', R + 'B535157108/', R + 'B535868804/', R + 'B536158255/', R + 'B536279175/', R + 'B536949706/', R + 'B538203534/'] },
    cultural_comfort: { level: 'english', note: 'Multilingual menu; popular with overseas guests (July 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木6-7-17 小俣ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with a course; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.661637, 139.732658), 3 m from Tempura Mikaku (tokyo_tempura_mikaku_roppongi, same address, ground floor), so offset ~10 m south-west; GSI 東京都港区六本木六丁目7番 (lot) 47m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B535868804/', R + 'B536158255/'],
    price_note: 'Prices from Tabelog and September 2026 reviews; ¥500 cover at dinner.', last_checked: TODAY, items: [
      it('', '', 'Choi-suki set: A5 Yamagata strip-loin sukiyaki for one, vegetables, rice, pickles', '¥4,480', 'Sukiyaki', 'ask', 'no', 'September 2026 reviews; ¥2,420 à la carte.', 'choisuki_set'),
      it('', '', 'Tokachi herb-beef yukhoe', '¥1,760', 'Small dishes', 'ask', 'no', 'September 2026 review.', 'yukhoe'),
      it('', '', 'Beef-toro potato salad', '¥660', 'Small dishes', 'ask', 'no', 'September 2026 review.', 'potato_salad'),
      it('', '', 'Course: chawanmushi, yukhoe, fritto, sukiyaki or shabu-shabu (8 items)', '¥9,900', 'Course', 'no', 'no', 'Tabelog.', 'course'),
    ] }, {
    cuisine: 'A5の Yamagata 牛のメスのサーロインを軸にした和牛割烹 (食べログの店の紹介、2026年9月)・「ちょいすき」: 100gから一人用の小さな鉄鍋で作るすき焼きを、Ise Jingu に奉納される Awasonodachi の卵のふわふわのメレンゲにくぐらせる。野菜、ご飯、漬物付きのセット4,480円、単品2,420円 (2026年9月)・Yamagata 牛と Kyoto ポークのしゃぶしゃぶ、ポン酢と胡麻だれ・つまみ: Tokachi ハーブ牛のユッケ1,760円、和牛のたたき、低温調理のレバー、牛トロのポテトサラダ660円、和牛のレアカツとメンチカツ、すき焼きの割下のだし巻き、辛味噌のよだれ鶏990円、無花果のマスカルポーネと奈良漬880円、さつまいもの天ぷら880円 (2026年9月)、500〜900円の一品 (食べログの店の紹介)・コース: 茶碗蒸し、ユッケ、フリット、すき焼きかしゃぶしゃぶで9,900円。上等な日本酒の飲み放題も (2026年9月)',
    neighborhood: '六本木6-7-17 小俣ビル2F、芋洗坂の下。六本木駅3番出口から徒歩3分',
    gf_detail: '要確認。すき焼きは甘辛いたれで煮るが、たれの材料は書かれていない。メニューには衣を付けた和牛カツ、メンチカツ、天ぷらも。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガン不可。和牛割烹で、卵を使う牛肉のすき焼きやしゃぶしゃぶ、Kyoto ポーク、鶏、魚の料理。',
    notes: '[すき焼き・六本木、芋洗坂の下で一人用のA5 Yamagata 牛のすき焼き] 2025年にできた、2階のレトロモダンなカウンターと半個室の店。和牛のすき焼きを気軽にしたのが「ちょいすき」で、A5の Yamagata 牛のサーロイン2〜3枚を目の前の小さな鉄鍋で煮て、生卵の代わりに Ise Jingu に奉納される卵のふわふわのメレンゲにくぐらせる。野菜とご飯付きのセットで4,480円。ほかに500円からのつまみ: 牛トロのポテトサラダ、Tokachi ハーブ牛のユッケ、和牛のレアカツ。2026年の客は肉、気さくな店長、六本木にしては手頃な値段を称え、海外の客も多い。コース9,900円、お通し500円。',
  });
}

// ================================================================ 一億
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13013008/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://ichioku1968.jimdo.com/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'tokyo_ichi_oku_roppongi', name: '一億 (Ichi Oku)', category: 'OMNI',
    lat: 35.664919, lng: 139.732159, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The tofu steak comes with a steak sauce, and the menu includes gyoza, spring rolls and katsu (2025–2026 reviews); nothing is said about gluten.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options, but the tofu steak is seasoned with dashi (March 2026) and most signatures are tuna, pork, oysters or shirasu.',
    hours_raw: 'Mon–Sat 17:00–23:00 (food last order 22:00, drinks 22:30); closed Sundays and holidays; closed 16–19 August 2026 (Tabelog). Lunch, served for 35 years, ended on 20 December 2024 (Tabelog notice). ¥550 per person table charge at dinner. Dinner bills of ¥12,000 or less must be paid in cash; above that, cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 30 table seats; private hire for up to 50. Non-smoking inside, ashtray at the front. Children and strollers welcome (large strollers left outside). No printed menu: the menu is on the tables and you write your own order (2025–2026 reviews). Often full; booking recommended.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Roppongi 4-4-5, a quiet back alley near Tokyo Midtown — 2 min from Roppongi Stn, 5 min from Nogizaka Stn',
    cuisine: 'Japanese-leaning home cooking from many countries, in Roppongi since 1968 (Tabelog shop text) · signatures in 2025–2026 reviews: the original tofu steak, crisp and seasoned with dashi, with steak sauce; ginger-grilled tuna; Western-style gyoza topped with cheese; Polynesian pork; shirasu and cucumber salad; kaki-meshi oyster rice; a Thai curry close to a Japanese soup curry; stir-fried mushrooms simmered 30 hours; wagyu teppanyaki and wagyu steak with grated daikon; spring rolls; ikura hand roll; clam rice; a Showa-style pudding · sake, shochu, wine and cocktails · about ¥8,000–¥10,000 a head',
    website: SITE, gmaps: gm('一億 六本木4-4-5'), menu_url: null,
    notes: "[Home cooking · Roppongi, a 1968 back-alley original known for its tofu steak] A warm, eclectic dining room in a quiet alley behind Midtown that has been feeding Roppongi since 1968 — the name, \"one hundred million\", came from the founder\'s hopes for Japan\'s population, its guests and its sales, as one reviewer tells it. There is no printed menu: dishes are listed on the tables and you write your own order, choosing among Japanese, Italian, Asian and Chinese plates that regulars return for — the crisp dashi tofu steak, ginger-grilled tuna, cheese-topped gyoza, Polynesian pork, oyster rice and a Showa pudding. Diners in 2025–2026 found it welcoming and often full. Dinner only; small bills are cash.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Founded in 1968 (Tabelog shop text; 2026 review). An August 2025 reviewer explains the name — Japan\'s population of one hundred million at the founding, the hope of one hundred million guests and of one hundred million yen in sales. A July 2025 diner saw the master practising qigong outside; a February 2026 diner praises the owner\'s warm hospitality and the posters by Tadanori Yokoo on the walls. No one is named in the sources read.',
      philosophy: 'A timeless place in a Roppongi back alley, with Japanese-inspired international cooking found nowhere else (Tabelog shop text).', specialty: 'Original tofu steak; ginger-grilled tuna.',
      anecdotes: [
        { text: '"There is no printed menu; the tables themselves serve as the menu." — March 2026.', source: R + 'B446856725/' },
        { text: '"I particularly enjoyed the stir-fried mushrooms, which are said to be simmered for 30 hours." — July 2025.', source: R + 'B511091027/' },
        { text: '"The Aoyasa Shirasu, Ginger Grilled Tuna, and Teppan-yaki are must-orders!!" — November 2025.', source: R + 'B518523482/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 一億、港区六本木4-4-5、六本木駅から徒歩2分、Nogizaka 駅から5分、月〜土17:00〜23:00 (料理L.O.22:00、ドリンクL.O.22:30)、日祝休み、2026年8月16〜19日休み、夜のチャージ550円、夜は会計12,000円以下なら現金のみ、30席 (テーブル)、貸切50名まで、店内禁煙、子ども・ベビーカー可、ベジタリアンメニューあり。店の紹介: 1968年創業、六本木の路地裏の老舗、和をベースにした多国籍料理、35年続いた昼の営業は2024年12月20日で終了。口コミ(2025年3月〜2026年3月): 豆腐ステーキ、鮪の生姜焼き、チーズをのせた洋風餃子、ポリネシアンポーク、しらすと胡瓜のサラダ、牡蠣めし、タイカレー、和牛の鉄板焼き、昭和のプリン、テーブルのメニューに自分で注文を書く、店名の由来。',
      confidence: 'medium', sources: [TB, SITE, R + 'B446856725/', R + 'B503118701/', R + 'B509346308/', R + 'B510985037/', R + 'B511091027/', R + 'B511354735/', R + 'B516328095/', R + 'B518523482/', R + 'B518598232/', R + 'B523938569/'] },
    cultural_comfort: { level: 'japanese', note: 'Menu written on the tables; you write down your own order.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木4-4-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with an August 2026 closure notice; reviews dated through March 2026.' },
    pin_source: `Tabelog ${TB} (35.664919, 139.732159); GSI 東京都港区六本木四丁目4番 (lot) 12m; Provision (4-5-13) is 15 m and shirato (4-4-8) 30 m away in other buildings; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B446856725/', R + 'B518598232/'],
    price_note: 'No menu prices in the sources read; reviewers paid about ¥8,000–¥10,000 a head with drinks.', last_checked: TODAY, items: [
      it('', '', 'Original tofu steak', '', 'Signatures', 'ask', 'ask', '2025–2026 reviews; seasoned with dashi.', 'tofu_steak'),
      it('', '', 'Ginger-grilled tuna', '', 'Signatures', 'ask', 'no', '2025 reviews.', 'tuna_ginger'),
      it('', '', 'Western-style gyoza with cheese', '', 'Signatures', 'no', 'no', 'March 2026 and June 2025 reviews.', 'gyoza'),
    ] }, {
    cuisine: '1968年から六本木で、和をベースにした多国籍の家庭的な料理 (食べログの店の紹介)・2025〜2026年の口コミの名物: 出汁で味付けしたカリッとした豆腐ステーキのステーキソース、鮪の生姜焼き、チーズをのせた洋風餃子、ポリネシアンポーク、しらすと胡瓜のサラダ、牡蠣めし、日本のスープカレーに近いタイカレー、30時間煮込んだきのこの炒め物、和牛の鉄板焼きと大根おろしの和牛ステーキ、春巻き、いくらの手巻き、あさりのご飯、昭和のプリン・日本酒、焼酎、ワイン、カクテル・1人約8,000〜10,000円',
    neighborhood: '六本木4-4-5、Tokyo Midtown 近くの静かな路地裏。六本木駅から徒歩2分、Nogizaka 駅から5分',
    gf_detail: '要確認。豆腐ステーキはステーキソースで、餃子、春巻き、カツもある (2025〜2026年の口コミ)。グルテンについての説明はない。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあるが、豆腐ステーキは出汁で味付けし (2026年3月)、名物の多くは鮪、豚、牡蠣、しらす。',
    notes: '[多国籍料理・六本木、豆腐ステーキで知られる1968年からの路地裏の店] Midtown の裏の静かな路地で、1968年から六本木の人々に食べさせてきた温かく個性的な店。ある客によれば、店名「一億」は創業時の日本の人口、一億人の客、一億円の売上という創業者の願いから。印刷したメニューはなく、テーブルに書かれた料理から自分で注文を書く。和、イタリアン、アジア、中華の料理が並び、常連の目当てはカリッとした出汁の豆腐ステーキ、鮪の生姜焼き、チーズの洋風餃子、ポリネシアンポーク、牡蠣めし、昭和のプリン。2025〜2026年の客は居心地のよさを書き、いつも満席に近い。夜のみ、少額の会計は現金。',
  });
}

save();
