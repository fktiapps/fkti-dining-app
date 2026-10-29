// Osaka sweep (2-mile circle around Dotonbori), batch 173 — mom phase (≤20 seats, 30+ reviews, nearest-first).
//   + 隠 鳥魚 (reservation-only small-plates course in private rooms, no sign; Jumbo Bldg, Higashi-Shinsaibashi)
//   + 浅草茶屋たばねのし 大阪心斎橋店 (matcha crepe chain, Kakegawa matcha brûlée; Nishi-Shinsaibashi)
//   + Cafe NooNe (Korean-style dessert café, Dubai chocolate mochi; Higashi-Shinsaibashi)
//   + おいしい酒と料理 なかよし 日本橋店 (sake-and-fish izakaya, 40+ sake; Sennichimae)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-29';
const { put, skip, save } = openCitySweep('osaka', TODAY, 173);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 隠 鳥魚
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27103904/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://kakure-toriuo.com/';
  const H = day(['17:00', '22:30']);
  put({
    id: 'osaka_kakure_toriuo_higashishinsaibashi', name: '隠 鳥魚 (Kakure Toriuo)', category: 'OMNI',
    lat: 34.67123, lng: 135.505729, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the omakase course is many small seasonal dishes not described ingredient by ingredient.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: a fish-and-chicken small-plates course; nothing described as vegan.',
    hours_raw: 'Mon–Sat 17:00–22:30 (last order 22:00); closed Sunday (Tabelog). Reservation-only courses; every seat is in a private room (Tabelog). Cards accepted; no e-money or QR (Tabelog). Heated tobacco only (Tabelog). All-you-can-drink available (Tabelog). Opened 9 April 2018 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 2-1-13, Nippo Jumbo Bldg 1F Nos. 5–6, entrance facing Yahata-suji under a small red sign — 5 min from Shinsaibashi or Namba Stn',
    cuisine: 'Reservation-only omakase of small seasonal plates (16 seats in private rooms: three sunken-kotatsu rooms and two counter rooms) · fish and seasonal vegetables from producers · sashimi · chicken dishes · konjac with roe · a small rice dish to finish · sake-focused drink list; all-you-can-drink option',
    website: OWN, gmaps: gm('隠 鳥魚 東心斎橋'), menu_url: TB + 'dtlmenu/',
    notes: "[Japanese · a signless, reservation-only small-plates course in private rooms, Higashi-Shinsaibashi] A deliberately hidden Japanese restaurant with no sign on the street: look for a small red sign on the Yahata-suji side of the Nippo Jumbo Building. Every seat is in a private room, some with sunken kotatsu, some at a counter, and dinner is a reservation-only omakase of many bite-sized seasonal dishes, with very fresh fish, good chicken and a sake list to match. Diners praise the variety and presentation; one was surprised by the konjac with roe. Portions are small, and two diners left wishing for more volume. Expect ¥10,000–20,000. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 9 April 2018 (Tabelog).', background: 'Private-room Japanese restaurant with a staff-maintained Tabelog listing (Tabelog; 2025–2026 reviews).', philosophy: 'Fish and seasonal vegetables from producers, the day\'s best in small plates (Tabelog listing).', specialty: 'Small-plates omakase course.',
      anecdotes: [
        { text: '"All the dishes are elegant and served in bite-sized portions, making it highly recommended for those who enjoy drinking… I was pleasantly surprised by the deliciousness of the konjac with roe appetizer…" — September 2026.', source: R + 'B505955402/' },
        { text: '"It\'s on the first floor of the Nippo Jumbo Building, with the entrance facing Yahata Street, so look for the red sign…" — May 2026.', source: R + 'B527256008/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員の公式情報): 隠 鳥魚、大阪市中央区東心斎橋2-1-13 日宝ジャンボビル 1F 5,6号、心斎橋駅・なんば駅から徒歩5分、月〜土17:00〜22:30 (L.O. 22:00)、日曜休み、2018年4月9日開店、完全予約制、全席個室 (掘りごたつ個室3、カウンター個室2)、16席、カード可、電子マネー・QR不可、加熱式たばこのみ、飲み放題あり、看板のない隠れ家、生産者から仕入れる魚と季節の野菜の小皿のコース。口コミ(2025年10月〜2026年10月): 入口がわかりにくい、八幡筋側の赤い看板が目印、小さな品が少しずつ出るコース、新鮮な魚、鶏料理、こんにゃくと魚卵、日本酒に合う、量が少なめでもう少しほしいという声がふたり、予算10,000〜20,000円。',
      confidence: 'medium', sources: [TB, OWN, R + 'B505955402/', R + 'B515739799/', R + 'B521073202/', R + 'B525124558/', R + 'B527256008/', R + 'B536700056/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only; hard-to-find entrance; private rooms (Tabelog; 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-1-13 日宝ジャンボビル 1F 5,6号',
    existence: { status: 'confirmed', checked: TODAY, note: 'Staff-maintained Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目1番13号 (go) 20m; offset 7 m south of the Tabelog point to clear Oshokuji Dokoro Imachan (same building, 6.6 m); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B505955402/'],
    price_note: 'No course prices in the reviews; about ¥10,000–20,000 per person (Tabelog, reviews).', last_checked: TODAY, items: [
      it('', '', 'Omakase small-plates course (reservation only)', '', 'Courses', 'ask', 'no', 'October 2025–October 2026.', 'course'),
    ] }, {
    cuisine: '完全予約制の季節の小皿のおまかせコース (個室で16席: 掘りごたつの部屋3、カウンターの部屋2)・生産者から仕入れる魚と季節の野菜・sashimi・鶏料理・こんにゃくと魚卵・しめに少しのご飯もの・日本酒が中心の飲み物、飲み放題も',
    neighborhood: '東心斎橋2-1-13 日宝ジャンボビル 1F 5,6号、八幡筋側の入口の小さな赤い看板が目印。心斎橋駅・なんば駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。おまかせコースは季節の小皿が多く、材料の説明はひとつずつはない。',
    vegan_detail: '実質ヴィーガンではありません。魚と鶏の小皿のコース。ヴィーガンの記載なし。',
    notes: '[和食・東心斎橋、看板のない完全予約制の個室の小皿コース] 通りに看板のない隠れ家の和食で、日宝ジャンボビルの八幡筋側にある小さな赤い看板が目印。全席個室で、掘りごたつの部屋とカウンターの部屋があり、夜は完全予約制のおまかせで、ひと口サイズの季節の料理が次々と。新鮮な魚、おいしい鶏、それに合う日本酒。品数と盛りつけをほめる声、こんにゃくと魚卵に驚いたという声も。量は少なめで、もう少しほしかったという声がふたり。予算は10,000〜20,000円ほど。日曜休み。',
  });
}

// ================================================================ 浅草茶屋たばねのし 大阪心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27144891/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://tabanenoshi.com/';
  const WD = day(['11:30', '21:00']);
  put({
    id: 'osaka_asakusa_chaya_tabanenoshi_shinsaibashi', name: '浅草茶屋たばねのし 大阪心斎橋店 (Asakusa Chaya Tabanenoshi Osaka Shinsaibashi)', category: 'OMNI',
    lat: 34.672669, lng: 135.499228, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the crepe batter is made with matcha and described as chewy, but its flour is not stated.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: matcha cream, custard, ice cream, soft serve and butter fillings; nothing described as vegan.',
    hours_raw: 'Mon–Fri and holidays 11:30–21:00; Saturday 11:00–21:00; Sunday 10:00–20:00; last order 15 minutes before close; no closing day (Tabelog; October 2026). No reservations (Tabelog). Cards, e-money and QR (including Alipay and WeChat Pay) accepted (Tabelog). Non-smoking. English menu with photos; takeout (Tabelog). Opened 30 September 2024 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: day(['11:00', '21:00']), 6: day(['10:00', '20:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishi-Shinsaibashi 1-6-34, on Shimizu-machi-suji opposite the Daimaru Shinsaibashi car park — 3 min from Shinsaibashi Stn',
    cuisine: 'Japanese-style crepes made with Kakegawa matcha (8 seats, about five tables; takeout) · Kakegawa matcha brûlée: chewy matcha crepe with matcha custard or cream, strawberries and matcha ice cream under a torched sugar top · autumn Tsukimi brûlée ¥1,250 · hojicha crepe with anko butter · Kakegawa matcha soft serve · matcha latte; hojicha latte · drink ¥50 off with a crepe',
    website: OWN, gmaps: gm('浅草茶屋たばねのし 大阪心斎橋店'), menu_url: null,
    notes: "[Sweets · Kakegawa-matcha crepes from a Tokyo tea-house chain, Shinsaibashi] The Shinsaibashi branch of Asakusa Chaya Tabanenoshi, a Japanese-crepe chain from Asakusa, on Shimizu-machi-suji across from the Daimaru car park. Everything turns on Kakegawa matcha from Shizuoka: the signature Kakegawa matcha brûlée wraps matcha custard, strawberries and matcha ice cream in a chewy matcha crepe, then torches the top so it cracks. Seasonal versions rotate, such as an autumn Tsukimi brûlée (¥1,250); there's also hojicha with anko butter, matcha soft serve and lattes. You can watch them being made. Only about five tables, so on weekends it fills and takeout is the easy option.",
    chef_bio: { chef_name: null, roles: [], origin: 'Osaka branch of Asakusa Chaya Tabanenoshi, a chain begun in Asakusa, Tokyo (official site; October 2026 review); opened 30 September 2024 (Tabelog).', background: 'Japanese crepe shop (Tabelog; 2026 reviews).', philosophy: 'Kakegawa matcha from Shizuoka (Tabelog listing).', specialty: 'Kakegawa matcha brûlée crepe.',
      anecdotes: [
        { text: '"The crepe itself seemed to have matcha mixed into the batter, making it very delicious and chewy… There were only about five tables, so the place filled up quickly…" — September 2026, Matcha Brulee Crepe.', source: R + 'B536392715/' },
        { text: '"I was intrigued by the autumn limited \'Tsukimi Brulee\'… JPY 1,250… The restaurant was fully packed, and there were several people waiting for takeout…" — October 2026.', source: R + 'B537256104/' },
      ],
      japanese_sources_summary: '食べログ: 浅草茶屋たばねのし 大阪心斎橋店、大阪市中央区西心斎橋1-6-34、心斎橋駅から徒歩3分、大丸心斎橋店の駐車場の前、平日・祝11:30〜21:00、土11:00〜21:00、日10:00〜20:00 (L.O. は閉店15分前)、2024年9月30日開店、予約不可、カード・電子マネー・QR可、禁煙、8席、英語のメニュー、テイクアウト、掛川抹茶を使う和クレープの専門店、公式サイトあり。口コミ(2026年9〜10月): 浅草発のチェーン、清水町筋沿い、掛川抹茶ブリュレ (抹茶のもちもちのクレープに抹茶カスタードかクリーム、いちご、抹茶アイス、表面をキャラメリゼ)、秋限定のTsukimi ブリュレ1,250円、hojicha と anko バター、掛川抹茶のソフトクリーム、抹茶ラテ、hojicha ラテ、セットでドリンク50円引き、目の前で作る、テーブルは5つほどで週末は満席、持ち帰りも。',
      confidence: 'medium', sources: [TB, OWN, R + 'B536307162/', R + 'B536321678/', R + 'B536392715/', R + 'B536867239/', R + 'B536971065/', R + 'B537256104/'] },
    cultural_comfort: { level: 'english', note: 'English menu with photos (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋1-6-34',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋一丁目6番34号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537256104/', R + 'B536392715/'],
    price_note: 'Only the seasonal brûlée price appears in reviews (October 2026).', last_checked: TODAY, items: [
      it('', '', 'Kakegawa matcha brûlée crepe', '', 'Crepes', 'ask', 'no', 'September–October 2026.', 'brulee'),
      it('', '', 'Tsukimi brûlée (autumn)', '¥1,250', 'Crepes', 'ask', 'no', 'October 2026.', 'tsukimi'),
      it('', '', 'Hojicha crepe with anko butter', '', 'Crepes', 'ask', 'no', 'September 2026.', 'hojicha'),
      it('', '', 'Kakegawa matcha soft serve', '', 'Sweets', 'ask', 'no', 'October 2026.', 'soft'),
    ] }, {
    cuisine: '掛川抹茶の和クレープ (8席、テーブル5つほど、持ち帰り可)・掛川抹茶ブリュレ: もちもちの抹茶のクレープに抹茶カスタードかクリーム、いちご、抹茶アイス、表面をキャラメリゼ・秋のTsukimi ブリュレ1,250円・hojicha と anko バター・掛川抹茶のソフトクリーム・抹茶ラテ、hojicha ラテ・クレープと一緒ならドリンク50円引き',
    neighborhood: '西心斎橋1-6-34、清水町筋沿いで大丸心斎橋の駐車場の向かい。心斎橋駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。クレープの生地は抹茶入りでもちもちだが、粉の種類は書かれていない。',
    vegan_detail: '実質ヴィーガンではありません。抹茶クリーム、カスタード、アイス、ソフトクリーム、バター。ヴィーガンの記載なし。',
    notes: '[スイーツ・心斎橋、浅草発の茶屋チェーンの掛川抹茶クレープ] 浅草発の和クレープのチェーン、浅草茶屋たばねのしの心斎橋店で、清水町筋の大丸の駐車場の向かい。主役は静岡の掛川抹茶で、看板の掛川抹茶ブリュレは、もちもちの抹茶のクレープで抹茶カスタード、いちご、抹茶アイスを包み、表面をパリッとキャラメリゼ。秋のTsukimi ブリュレ (1,250円) など季節のものも。hojicha と anko バター、抹茶のソフトクリーム、ラテも。目の前で作るのを見られる。テーブルは5つほどなので週末は満席になりやすく、持ち帰りが手軽。',
  });
}

// ================================================================ Cafe NooNe
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27123833/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_cafe_noone_higashishinsaibashi', name: 'Cafe NooNe', category: 'OMNI',
    lat: 34.672881, lng: 135.503763, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the case holds mochi, cookies, sablés, shortcakes and cheesecakes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: cream cakes, cheesecakes and butter cookies; nothing described as vegan.',
    hours_raw: 'Daily 11:00–20:00; may change, so check (Tabelog). No reservations (Tabelog). Take a seat first, then order from the dessert case (March 2026). The Dubai chocolate mochi sells out; stock is posted on Instagram stories (March 2026). Also on Uber Eats (March 2026). Cards and e-money accepted; no QR (Tabelog). Non-smoking (Tabelog). Opened 31 May 2021 (Tabelog).',
    hours: ALL(day(['11:00', '20:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-14-14, T.K Bldg 1F, a slightly hidden spot with a terrace — 5 min from Shinsaibashi or Nagahoribashi Stn',
    cuisine: 'Korean-style dessert café (20 table seats plus a terrace) · Dubai chocolate mochi ¥740: chewy outside, pistachio and crunchy filling inside · Dubai chocolate cookie ¥920 · brûlée cheesecake with ice cream ¥980 · pumpkin Basque cheesecake ¥820 · brownie cheesecake; blueberry cheesecake · strawberry matcha shortcake ¥900; Earl Grey shortcake · bear sablé ¥400 · iced coffee ¥550; orange and grapefruit ades; Earl Grey tea',
    website: null, gmaps: gm('Cafe NooNe 東心斎橋'), menu_url: null,
    notes: "[Café · a Korean-style dessert café for Dubai chocolate mochi, Higashi-Shinsaibashi] A stylish, calm Korean-style café a few minutes from Shinsaibashi, with a terrace and a big glass case of desserts: grab a seat, then pick from the case. The draw is the Dubai chocolate mochi (¥740), chewy outside with pistachio and a crunchy filling, which often sells out (check the shop's Instagram stories). Also a crackly brûlée cheesecake with ice cream (¥980), strawberry-matcha and Earl Grey shortcakes, a pumpkin Basque cheesecake and bear-shaped sablés. There's another branch in Amerikamura with a slightly different menu. One diner waited a long time for an order; another found the cookies a little stale.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 31 May 2021 (Tabelog); a separate Amerikamura branch exists (March 2026 review).', background: 'Korean-style dessert café (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Dubai chocolate mochi; cheesecakes.',
      anecdotes: [
        { text: '"The Dubai Chocolate Mochi has a chewy exterior and a crunchy texture inside. The sweetness of the chocolate combined with the nuttiness of pistachios creates a completely new experience…" — March 2026, ¥740.', source: R + 'B524047658/' },
        { text: '"The ordering process involves securing a seat first and then choosing from a delightful array of desserts displayed in a large showcase…" — March 2026.', source: R + 'B525774224/' },
      ],
      japanese_sources_summary: '食べログ: Cafe NooNe、大阪市中央区東心斎橋1-14-14 T.Kビル 1F、心斎橋駅・長堀橋駅から徒歩5分、毎日11:00〜20:00、2021年5月31日開店、予約不可、カード・電子マネー可、QR不可、禁煙、テーブル20席、テラス席。口コミ(2026年3〜7月): 韓国風のおしゃれなカフェ、先に席を取ってからショーケースで選ぶ、Dubai チョコ mochi740円 (外は弾力があり、中はピスタチオとザクザクの食感、売り切れの日はインスタのストーリーで確認)、Dubai クッキー920円、ブリュレチーズケーキのアイス添え980円、かぼちゃのバスクチーズケーキ820円、ブラウニーチーズケーキ、ブルーベリーチーズケーキ、いちご抹茶のショートケーキ900円、アールグレイのショートケーキ、くまのサブレ400円、アイスコーヒー550円、オレンジやグレープフルーツのエード、Uber Eats も、アメ村にも店がある、提供が遅かったという声、クッキーが少し古い味だったという声。',
      confidence: 'medium', sources: [TB, R + 'B523650455/', R + 'B524047658/', R + 'B524486273/', R + 'B525774224/', R + 'B527929566/', R + 'B535418450/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Seat yourself, then order at the dessert case (March 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-14-14 T.Kビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目14番14号 (go) 14m; 13 m from Sushi Zen (separate building), no offset; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B524047658/', R + 'B525774224/'],
    price_note: 'Prices from March 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Dubai chocolate mochi', '¥740', 'Sweets', 'ask', 'no', 'March 2026.', 'dubai_mochi'),
      it('', '', 'Dubai chocolate cookie', '¥920', 'Sweets', 'ask', 'no', 'March 2026.', 'dubai_cookie'),
      it('', '', 'Brûlée cheesecake with ice cream', '¥980', 'Cakes', 'ask', 'no', 'March 2026.', 'brulee'),
      it('', '', 'Strawberry matcha shortcake', '¥900', 'Cakes', 'ask', 'no', 'March 2026.', 'shortcake'),
      it('', '', 'Bear sablé', '¥400', 'Sweets', 'ask', 'no', 'March 2026.', 'sable'),
      it('', '', 'Iced coffee', '¥550', 'Drinks', '', '', 'March 2026.', 'coffee'),
    ] }, {
    cuisine: '韓国風のデザートカフェ (テーブル20席とテラス)・Dubai チョコ mochi740円: 外は弾力があり、中はピスタチオとザクザクの食感・Dubai チョコクッキー920円・ブリュレチーズケーキのアイス添え980円・かぼちゃのバスクチーズケーキ820円・ブラウニーチーズケーキ、ブルーベリーチーズケーキ・いちご抹茶のショートケーキ900円、アールグレイのショートケーキ・くまのサブレ400円・アイスコーヒー550円、オレンジやグレープフルーツのエード、アールグレイ',
    neighborhood: '東心斎橋1-14-14 T.Kビル 1F、少しわかりにくい場所、テラスあり。心斎橋駅・長堀橋駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。ショーケースには mochi、クッキー、サブレ、ショートケーキ、チーズケーキ。',
    vegan_detail: '実質ヴィーガンではありません。クリームのケーキ、チーズケーキ、バターのクッキー。ヴィーガンの記載なし。',
    notes: '[カフェ・東心斎橋、Dubai チョコ mochiの韓国風デザートカフェ] 心斎橋から数分の、おしゃれで落ち着いた韓国風カフェで、テラス席と大きなデザートのショーケース。先に席を取ってからケースで選ぶ。目当てはDubai チョコ mochi (740円) で、外は弾力があり、中はピスタチオとザクザクの食感。売り切れが多いので店のインスタのストーリーで確認を。パリッとしたブリュレチーズケーキのアイス添え (980円)、いちご抹茶やアールグレイのショートケーキ、かぼちゃのバスクチーズケーキ、くまの形のサブレも。アメリカ村にも少しメニューの違う店がある。注文が出るまで長く待ったという声、クッキーが少し古い味だったという声も。',
  });
}

// ================================================================ おいしい酒と料理 なかよし 日本橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27060850/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:30']);
  put({
    id: 'osaka_oishii_sake_nakayoshi_nipponbashi', name: 'おいしい酒と料理 なかよし 日本橋店 (Oishii Sake to Ryouri Nakayoshi Nipponbashi ten)', category: 'OMNI',
    lat: 34.666135, lng: 135.505491, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the menu includes tempura, a beef cutlet and dishes with ponzu.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Homemade tofu and vegetable tempura are on the menu, but stocks and batters are not described.',
    hours_raw: 'Tue–Sun and holidays 17:00–23:30 (food last order 23:00); closed Monday (Tabelog). Seated without a reservation just before 21:00 on a Friday (August 2026). Cards accepted; no e-money or QR (Tabelog). Smoking allowed (Tabelog). Run by two people, so dishes can take a while (February–March 2026).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sennichimae 2-3-1, Seven Bldg 1F — 1 min from Kintetsu Nippombashi Stn and Nippombashi Stn exit 5',
    cuisine: 'Sake-and-fish izakaya (17 seats: 6 at the counter, tables) · fish bought at the market by the owner · sashimi platter of 5 or 7 kinds (tuna, yellowtail, sea bream, salmon, marinated mackerel, octopus, squid) · rolled omelet served on a hot teppan with extra dashi poured on · homemade zaru tofu · whitebait with grated daikon and ponzu · fried hatahata · tempura of asparagus, or aonori and onion · mackerel pressed sushi · monkfish liver with nara-zuke · crab miso · wakame and bamboo shoot stew · beef cutlet · over 40 sake, 80+ shochu, 15+ umeshu',
    website: null, gmaps: gm('おいしい酒と料理 なかよし 日本橋店'), menu_url: TB + 'dtlmenu/',
    notes: "[Izakaya · a quiet sake-and-fish izakaya by Kintetsu Nippombashi] A calm 17-seat izakaya a minute from Kintetsu Nippombashi, run by two people, with fish the owner buys at the market and a deep drink list: over 40 sakes kept in a dedicated fridge, 80-plus shochu and 15-plus umeshu. Start with the sashimi platter, then the rolled omelet, brought out on a hot teppan with extra dashi poured on so it bubbles at the table. Diners also praise the fried hatahata, homemade zaru tofu, whitebait with grated daikon and ponzu, mackerel pressed sushi and monkfish liver with nara-zuke. Dishes can take a while, and one diner found many sakes out of stock. Closed Mondays.",
    chef_bio: { chef_name: null, roles: ['owner'], origin: null, background: 'Sake-and-fish izakaya run by two people (March 2026 review; Tabelog).', philosophy: 'The owner buys seasonal fish at the market (Tabelog listing).', specialty: 'Sashimi platter; dashi rolled omelet; sake.',
      anecdotes: [
        { text: '"It\'s served on a hot teppan, and just before serving, [extra dashi is poured] over it! The steam rises, and the dashi bubbles on the teppan…" — September 2026, Dashimaki.', source: R + 'B481093841/' },
        { text: '"…every dish was delicious! I especially enjoyed the pressed sushi with mackerel and the tempura with aonori (seaweed) and onion. It\'s impressive that [it is managed] with just two people!" — March 2026.', source: R + 'B524738434/' },
      ],
      japanese_sources_summary: '食べログ: おいしい酒と料理 なかよし 日本橋店、大阪市中央区千日前2-3-1 セブンビル1F、近鉄日本橋駅から徒歩1分、火〜日・祝17:00〜23:30 (料理L.O. 23:00)、月曜休み、カード可、電子マネー・QR不可、喫煙可、17席 (カウンター6、テーブル8)、店主が市場で仕入れる旬の魚、日本酒40種以上を専用の冷蔵庫で、焼酎80種以上、umeshu 15種以上。口コミ(2026年2〜9月): sashimi の盛り合わせ (5種か7種: マグロ、ぶり、鯛、サーモン、鯖のマリネ、タコ、イカ)、熱い鉄板にのせて dashi をかける dashimaki、自家製の zaru tofu、shirasu の大根おろしと ponzu、hatahata のフライ、アスパラやaonori と玉ねぎの天ぷら、鯖の押し寿司、アンコウの肝の奈良漬け、蟹味噌、wakame と筍の煮物、牛カツ、ふたりで切り盛り、料理が出るまで少し時間がかかる、日本酒の品切れが多かったという声。',
      confidence: 'medium', sources: [TB, R + 'B481093841/', R + 'B523505876/', R + 'B524738434/', R + 'B525473760/', R + 'B531698059/', R + 'B534602583/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Quiet izakaya; menu with photos (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前2-3-1 セブンビル1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前二丁目3番1号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525473760/', R + 'B481093841/'],
    price_note: 'No dish prices in the reviews; about ¥3,000–8,000 per person (Tabelog, reviews).', last_checked: TODAY, items: [
      it('', '', 'Sashimi platter (5 or 7 kinds)', '', 'Fish', 'ask', 'no', 'March–August 2026.', 'sashimi'),
      it('', '', 'Rolled omelet on a hot teppan', '', 'Dishes', 'ask', 'no', 'July–September 2026.', 'dashimaki'),
      it('', '', 'Homemade zaru tofu', '', 'Dishes', 'ask', 'ask', 'July–September 2026.', 'zarudofu'),
      it('', '', 'Monkfish liver with nara-zuke', '', 'Dishes', 'ask', 'no', 'March 2026.', 'ankimo'),
    ] }, {
    cuisine: '日本酒と魚の居酒屋 (17席: カウンター6、テーブル)・店主が市場で仕入れる魚・sashimi の盛り合わせ5種か7種 (マグロ、ぶり、鯛、サーモン、鯖のマリネ、タコ、イカ)・熱い鉄板で出て dashi を注ぐ卵焼き・自家製の zaru tofu・shirasu の大根おろしと ponzu・hatahata のフライ・アスパラやaonori と玉ねぎの tempura・鯖の押し寿司・アンコウの肝と nara-zuke・蟹味噌・wakame と筍の煮物・牛カツ・日本酒40種以上、焼酎80種以上、umeshu 15種以上',
    neighborhood: '千日前2-3-1 セブンビル1F。近鉄日本橋駅・日本橋駅5番出口から徒歩1分',
    gf_detail: '要確認。グルテンの情報なし。tempura、牛カツ、ponzu を使う料理も。',
    vegan_detail: '要確認。自家製の豆腐や野菜の tempura はあるが、だしや衣の説明なし。',
    notes: '[居酒屋・日本橋、近鉄日本橋すぐの静かな日本酒と魚の居酒屋] 近鉄日本橋駅から1分の落ち着いた17席の居酒屋で、ふたりで切り盛り。店主が市場で仕入れる魚と、専用の冷蔵庫で管理する40種以上の日本酒、80種以上の焼酎、15種以上のumeshu 。まずは sashimi の盛り合わせ、それから熱い鉄板で出てきて dashi を注ぎ、テーブルでぐつぐつ言う卵焼きを。hatahata のフライ、自家製の zaru tofu、shirasu の大根おろしと ponzu、鯖の押し寿司、アンコウの肝と nara-zuke をほめる声も。料理は少し時間がかかり、日本酒の品切れが多かったという声も。月曜休み。',
  });
}

save();
