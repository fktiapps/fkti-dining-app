// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first — worker osw2, batch 18 (lane: Tabelog id mod 4 = 1).
//   + 韓国石焼サムギョプサル専門 コッテジ 千日前本店 Kotteji (stone-grilled samgyeopsal, "Japan's first" samgyeopsal all-you-can-eat; K-pop room)
//   + 大衆焼肉ホルモン にくさわ 大阪なんば本店 Nikusawa (casual yakiniku of a meat wholesaler: A5 wagyu, four-flavour horumon, ¥299 bottled beer)
//   + コギソウル 難波店 Kogi Seoul (samgyeopsal and Korean dishes in a hidden second-floor room by Namba Stn exit 11)
//   Skipped (lane order):
//   - 俺のイタリアン 心斎橋 27107989 — chain: the operator's site lists 18 「俺の」 brands and shops (oreno.co.jp, read 2026-11-02).
//   - 会津屋 ナンバ店 27001205 — chain: the official site speaks of 11 shops, a 本店 and directly run shops (aiduya.com, read 2026-11-02).
//   - 力丸 炉ばた焼 法善寺 力丸茶屋 27001517 — same-concept branch of a group in data: the 力丸 group's ¥385 robatayaki, the same format
//     as its たぬき茶屋 (in data as osaka_tanuki_chaya_sennichimae) under another name; per the coordinator's batch-18 review.
//   Chain check of the three kept:
//   - Kotteji: the 千日前本店; search results (not opened) also name an NU茶屋町店. None in data. Kept; flagged as a small group.
//   - Nikusawa: the 大阪なんば本店 of a meat wholesaler's yakiniku; no other shop found. None in data.
//   - Kogi Seoul: opened sources show this shop and コギソウル 京都河原町店 (hotpepper.jp); search results (not opened) also name
//     天王寺店 and 大阪お初天神店, and a September 2026 diner compares it with the Tennoji shop. None in data. Kept on the 2–4 line;
//     FLAGGED as possibly larger.
//   None is in data/osaka.json (grep by name, romaji and address, 2026-11-02). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw2-18');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27107989', 'Chain: 俺のイタリアン is one of 18 「俺の」 brands and shops on the operator\'s site (oreno.co.jp).');
skip('27001205', 'Chain: 会津屋 has 11 shops per its official site (aiduya.com).');
skip('27001517', 'Same-concept branch of a group in data: 力丸茶屋 is the ¥385 robatayaki of the 力丸 group, the same format as its たぬき茶屋 under another name; たぬき茶屋 is in data as osaka_tanuki_chaya_sennichimae (rikimarugroup.com brand pages).');

// ================================================================ コッテジ 千日前本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27057981/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const H = day(['11:30', '15:30'], ['17:00', '23:00']);
  put({
    id: 'osaka_kotteji_sennichimae', name: '韓国石焼サムギョプサル専門 コッテジ 千日前本店 (Kotteji Sennichimae honten)', category: 'OMNI',
    lat: 34.66684, lng: 135.501404, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Pork belly is grilled plain, but the sides include chijimi, fried chicken, yangnyeom chicken and sauces (Tabelog menu; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a pork-belly restaurant; kimchi and lettuce come as sides and are not described.',
    hours_raw: 'Daily 11:30–15:30 (last order 15:00) and 17:00–23:00 (last order 22:30); 2-hour seating with last order 90 minutes before closing; open year-round (Tabelog). Reservations taken; same-day cancellations charged (courses in full, seats ¥4,000 a head); party-size changes after 23:00 the day before charged (Tabelog). A service fee is added (Tabelog). Cards, e-money and QR accepted. Orders by QR code (August 2026 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba 3-4-10, on Sennichimae-dori south of Ebisubashi-suji — 1 min from Namba Stn (Midosuji Line)',
    cuisine: 'Korean stone-grilled samgyeopsal, "the first restaurant in Japan to introduce all-you-can-eat samgyeopsal" (Tabelog): the signature Hanazaki samgyeopsal of thick "flowering" pork belly, with cheese, grilled kimchi and lettuce; samgyeopsal sets for one or more, cheese dak-galbi, nakgopsae, chijimi, yangnyeom chicken, sundubu (Tabelog menu, February 2026; reviews) · all-you-can-eat and all-you-can-drink courses about ¥4,800–5,500',
    website: TB, gmaps: gm('コッテジ 千日前本店'), menu_url: M,
    notes: "[Korean · Namba Sennichimae, all-you-can-eat samgyeopsal] A big K-pop-filled Korean restaurant on Sennichimae-dori, a minute from Namba Station, that calls itself the first in Japan to offer all-you-can-eat samgyeopsal and says many Korean artists visit. Staff grill the thick Hanazaki pork belly with grilled kimchi at the table, and side dishes in the buffet are cooked to order in small portions. Diners in 2026 like the juicy pork, the chijimi and the fried chicken, and note many young customers; one found the QR ordering confusing, another the buffet more than a light eater needs.",
    chef_bio: { chef_name: null, roles: ['Staff unnamed (Tabelog)'], origin: null, background: 'Per Tabelog, Kotteji is the first restaurant in Japan to introduce all-you-can-eat samgyeopsal, offered "in response to the desire for more freedom in dining"; the room plays K-pop and is said to be visited by many Korean artists.', philosophy: null, specialty: 'Hanazaki (flowering) samgyeopsal on a stone grill.',
      anecdotes: [
        { text: '"The staff grilled the samgyeopsal for us, so we could enjoy it without worrying about the cooking time." — October 2026.', source: R + 'B536948412/' },
        { text: '"Even though it\'s all-you-can-eat, each dish is made to order, ensuring everything is served hot and fresh." — September 2026.', source: R + 'B538234278/' },
        { text: '"Ordering via the QR code was a bit confusing, and I accidentally ordered extra meat" — August 2026, premium course.', source: R + 'B534688094/' },
      ],
      japanese_sources_summary: '日本語の情報源は未確認。食べログ (英語版): 韓国石焼サムギョプサル専門 コッテジ 千日前本店、難波3-4-10、千日前通りと戎橋筋の交差点の南、なんば駅から徒歩1分、毎日11:30〜15:30・17:00〜23:00、2時間制、年中無休、当日キャンセルはコース全額・席のみ1人4,000円、サービス料あり、サムギョプサル食べ放題を日本で初めて導入、韓国のアーティストも多く来店、K-POPが流れる店内。メニュー (2026年2月): 花咲サムギョプサルのセット (約450g) 4,345円、サムギョプサルのセット (約400g) 3,795円、チーズのセット、チーズタッカルビのセット。口コミ (2026年8月〜10月): 花咲サムギョプサル、焼いたキムチ、ヤンニョムチキン、ニラチヂミ、スンドゥブ、ナッコプセ、スタッフが焼いてくれる、食べ放題でも一品ずつ作る、若い客が多い、QRコードの注文がわかりにくいという声、10月は15%引き。',
      confidence: 'medium', sources: [TB, M, R + 'B512864281/', R + 'B533819474/', R + 'B534688094/', R + 'B534712596/', R + 'B536696488/', R + 'B536948412/', R + 'B537531732/', R + 'B537537293/', R + 'B538234278/', R + 'B538515943/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff grill at the table; orders by QR code (2026 reviews). No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波3-4-10',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波三丁目4番10号 (go) 18m. Nearest record (osaka_robata_motsuni_homura_namba, "…難波3-4-13", a different building) is about 26 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [M, TB],
    price_note: 'Tabelog menu last updated February 2026, tax included; a service fee is added. All-you-can-eat and drink courses about ¥4,800–5,500 (2026 reviews). Diners report ¥3,000–5,999 a head.', last_checked: TODAY, items: [
      it('', '', 'Hanazaki (flowering) samgyeopsal set, about 450 g', '¥4,345', 'Sets', 'ask', 'no', 'From one person.', 'hanazaki_samgyeopsal'),
      it('', '', 'Samgyeopsal set, about 400 g', '¥3,795', 'Sets', 'ask', 'no', '', 'samgyeopsal_set'),
      it('', '', 'Cheese dak-galbi set', '¥3,960', 'Sets', 'ask', 'no', '', 'cheese_dakgalbi'),
    ] }, {
    cuisine: '韓国の石焼サムギョプサル、「日本で初めてサムギョプサル食べ放題を導入」(食べログ): 看板は厚い花咲サムギョプサル、チーズ、焼いたキムチ、サンチュと。1人から頼めるサムギョプサルのセット、チーズタッカルビ、ナッコプセ、チヂミ、ヤンニョムチキン、スンドゥブ (食べログのメニュー、2026年2月、口コミ)・食べ飲み放題のコース約4,800〜5,500円',
    neighborhood: '難波3-4-10、千日前通りの戎橋筋の南。なんば駅 (御堂筋線) から徒歩1分',
    gf_detail: '要確認。グルテンの情報なし。豚バラはそのまま焼くが、チヂミ、唐揚げ、ヤンニョムチキン、タレもある (食べログのメニュー、口コミ)。',
    vegan_detail: 'ヴィーガンではありません。豚バラの店で、キムチとサンチュはサイド。説明はない。',
    notes: '[韓国料理・難波千日前、サムギョプサル食べ放題] なんば駅から1分、千日前通りのK-POPが流れる大きな韓国料理店で、日本で初めてサムギョプサル食べ放題を始めた店とし、韓国のアーティストも多く来ると言う。スタッフが厚い花咲サムギョプサルと焼きキムチを席で焼き、食べ放題のサイドも一品ずつ小さめに作る。2026年の客はジューシーな豚肉、チヂミ、唐揚げを褒め、若い客が多いと書く。QRコードの注文がわかりにくかった、食べ放題は少食には多すぎるという声も。',
  });
}

// ================================================================ にくさわ 大阪なんば本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27136141/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const H = day(['12:00', '24:00']);
  put({
    id: 'osaka_nikusawa_namba_honten', name: '大衆焼肉ホルモン にくさわ 大阪なんば本店 (Taishu Yakiniku Horumon Nikusawa Osaka Nanba Honten)', category: 'OMNI',
    lat: 34.666429, lng: 135.504919, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Horumon comes in rich, salt, red and curry seasonings; the menu has yukgaejang ramen and potato salad (Tabelog menu; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu and offal yakiniku; kimchi is a side and is not described.',
    hours_raw: 'Daily 12:00–24:00 (last food order 23:00); closed 31 December–2 January (Tabelog). Reservations taken; 2-hour limit at peak times (Tabelog). ¥330 appetizer charge (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money. 87 seats; private hire for up to 50 (Tabelog). Orders by QR code (July 2026 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sennichimae 2-5-7 — 3 min from Nippombashi Stn; 5 min from Namba Stn',
    cuisine: 'Casual yakiniku run directly by a meat wholesaler: A5 wagyu and house horumon seasoned four ways ("rich", salt, "aka", curry), fresh thick-sliced liver, raw omasum, heart sashimi, wagyu sushi, seared outside-skirt yukhoe, thick-cut tongue with green-onion salt, outside-skirt steak, assorted platters (Tabelog menu, October 2026) · yukgaejang ramen to finish, fresh kimchi (reviews) · eight bottled beers ¥299 (¥329 with tax), house sours; all-you-can-drink courses from ¥5,500',
    website: TB, gmaps: gm('にくさわ 大阪なんば本店'), menu_url: M,
    notes: "[Yakiniku · Sennichimae, a wholesaler's casual yakiniku] A big, casual yakiniku three minutes from Nippombashi Station, opened in June 2023 and run directly by a meat wholesaler, open from noon to midnight. Horumon comes in four house seasonings and the A5 wagyu is cheap for its grade; bottled beer is ¥299. Diners in 2026 single out the thick fresh liver, the four-horumon platter and the salted tongue; one August group found the course small and the staff inflexible. Good for groups and daytime drinking.",
    chef_bio: { chef_name: null, roles: ['Staff unnamed; directly run by a meat wholesaler (Tabelog)'], origin: null, background: 'Per Tabelog, Nikusawa is "a fusion of meat wholesale and casual yakiniku", directly operated by a meat wholesale company so it can serve A5 wagyu cheaply, with horumon prepared and seasoned to suit each cut. Opened 14 June 2023.', philosophy: null, specialty: 'Four-flavour horumon; thick fresh liver.',
      anecdotes: [
        { text: '"The most impressive dish was the thick, fresh liver✨. It was fresh, free of any unpleasant odor, and incredibly delicious." — July 2026.', source: R + 'B533138775/' },
        { text: '"What surprised me this time was that bottled beer was around JPY 290!!" — August 2026.', source: R + 'B533279239/' },
        { text: '"The drink service was decent, but we ordered a course and found the portions to be small and unsatisfactory." — August 2026, group of four.', source: R + 'B532803212/' },
      ],
      japanese_sources_summary: '日本語の情報源は未確認。食べログ (英語版): 大衆焼肉ホルモン にくさわ 大阪なんば本店、千日前2-5-7、日本橋駅から徒歩3分、2023年6月14日オープン、毎日12:00〜24:00 (L.O.23:00)、12月31日〜1月2日休み、繁忙時2時間制、付き出し330円、87席、50名まで貸切、精肉卸の直営で大衆焼肉、A5和牛をお値打ちに、部位ごとに味付けするホルモン、瓶ビール8種299円 (税込329円)、オリジナルサワー、飲み放題付きコース5,500円〜。メニュー (2026年10月): 「濃い」「塩」「赤」「カレー」のホルモン、生センマイ、ハツ刺し、和牛の寿司、ローストビーフ、ハラミの炙りユッケ、厚切りタン、上ねぎ塩タン、ハラミステーキ、盛り合わせ、新鮮な厚切りレバー。口コミ (2026年7月〜9月): 厚切りの新鮮なレバー、ユッケジャンラーメン、キムチ、ホルモン5種盛り、上塩タン、QRコードで注文、昼飲み、コースの量が少なく対応が硬いという声 (8月)。',
      confidence: 'medium', sources: [TB, M, R + 'B532803212/', R + 'B533138775/', R + 'B533279239/', R + 'B533768904/', R + 'B534314382/', R + 'B536239591/', R + 'B536304928/', R + 'B536364586/', R + 'B536407775/', R + 'B537586538/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Orders by QR code (July 2026). No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前2-5-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with an October 2026 menu; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (kept). GSI 大阪府大阪市中央区千日前二丁目5番7号 (go) is 7 m away and is where 裏難波スシトフジ (osaka_ura_namba_sushi_to_fuji, "…千日前2-5-7 2F", same building) is pinned, so the Tabelog point is kept, about 7 m from it, to avoid stacking; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [M, TB],
    price_note: 'Tabelog menu last updated October 2026, tax included; ¥330 appetizer charge. Bottled beer ¥329 with tax. Diners report ¥3,000–7,999 a head.', last_checked: TODAY, items: [
      it('', '', 'House horumon (rich, salt, aka or curry)', '¥658', 'Horumon', 'ask', 'no', 'Four seasonings.', 'horumon'),
      it('', '', 'Fresh thick-sliced liver', '¥1,098', 'Horumon', 'ask', 'no', 'Recommended.', 'thick_liver'),
      it('', '', 'Special thick-cut beef tongue', '¥1,208', 'Tongue', 'ask', 'no', '', 'thick_tongue'),
      it('', '', 'Seared outside-skirt yukhoe', '¥878', 'Meat appetizers', 'ask', 'no', '', 'harami_yukhoe'),
    ] }, {
    cuisine: '精肉卸直営の大衆焼肉: A5和牛と「濃い」「塩」「赤」「カレー」の4種のホルモン、新鮮な厚切りレバー、生センマイ、ハツ刺し、和牛の寿司、ハラミの炙りユッケ、上ねぎ塩の厚切りタン、ハラミステーキ、盛り合わせ (食べログのメニュー、2026年10月)・締めのユッケジャンラーメン、キムチ (口コミ)・瓶ビール8種299円 (税込329円)、オリジナルサワー、飲み放題付きコース5,500円〜',
    neighborhood: '千日前2-5-7。日本橋駅から徒歩3分、なんば駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。ホルモンは濃い、塩、赤、カレーの味付けで、ユッケジャンラーメンやポテサラもある (食べログのメニュー、口コミ)。',
    vegan_detail: 'ヴィーガンではありません。和牛とホルモンの焼肉店で、キムチはサイド。説明はない。',
    notes: '[焼肉・千日前、精肉卸の大衆焼肉] 日本橋駅から3分、2023年6月オープンの精肉卸直営の大きな大衆焼肉店で、昼12時から夜12時まで。ホルモンは店の4種の味付けで、A5和牛は等級のわりに安く、瓶ビールは299円。2026年の客は新鮮な厚切りレバー、ホルモン4種盛り、塩タンを挙げる。8月の4人組はコースの量が少なく対応が硬いと感じた。団体や昼飲みにも。',
  });
}

// ================================================================ コギソウル 難波店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27143205/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const W = day(['17:00', '23:00']); const E = day(['12:00', '23:00']);
  put({
    id: 'osaka_kogi_seoul_namba', name: 'コギソウル 難波店 (Kogi Seoul Nanba ten)', category: 'OMNI',
    lat: 34.666294, lng: 135.501114, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Pork belly is grilled plain, but chukumi, nakgopsae and bulgogi are sauced, and the menu has chijimi, japchae, tteokbokki, kimbap and kalguksu (Tabelog menu; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a samgyeopsal and Korean restaurant; no vegan options are described.',
    hours_raw: 'Mon–Fri 17:00–23:00; Sat, Sun and holidays 12:00–23:00 (last food order 22:00, drinks 22:30); lunch at weekends and holidays only (Tabelog). Reservations taken; a ¥330 weekend fee on courses (Fri–Sun, holidays and the eve of holidays) and a December surcharge (Tabelog). Children under elementary-school age are not admitted, for safety (Tabelog). Cards (incl. UnionPay), transport IC and other e-money, QR incl. Alipay and WeChat Pay. The entrance is hard to find, in a dim alley off the arcade with a small sign (October 2026 review).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba 3-7-23, 新戎橋ビル 2F, opposite the Midosuji Hotel (a yogurt shop on the 1st floor) — 1 min from Namba Stn exit 11',
    cuisine: 'Samgyeopsal and Korean dishes: aged thick-cut pork belly, Kirishima pork from Miyazaki, pork belly with chuck eye roll, chukumi (spicy octopus) samgyeopsal, nakgopsae, bulgogi; bokkeumbap or kalguksu to finish (Tabelog menu, October 2026) · chijimi, japchae, tteokbokki, cheese balls, gyeran-jjim, cheese kimbap, makgeolli (reviews) · all-you-can-eat samgyeopsal courses from about ¥2,980–3,480',
    website: TB, gmaps: gm('コギソウル 難波店'), menu_url: M,
    notes: "[Korean · Namba, samgyeopsal in a hidden second-floor room] A stylish samgyeopsal restaurant on the second floor of a building off the Ebisubashi arcade, a minute from Namba Station exit 11, opened July 2024; the entrance is easy to miss down a dim alley. Staff cook the aged thick pork belly and the chukumi samgyeopsal at the table, with chijimi, japchae and cheese dishes on the side. Diners in 2026 like the food and the Korea-trip atmosphere, and note many young women; one September diner who knows the Tennoji shop found service here slow. Pre-school children are not admitted.",
    chef_bio: { chef_name: null, roles: ['Staff unnamed (Tabelog)'], origin: null, background: 'Per Tabelog, the top recommendation is the aged thick-cut pork samgyeopsal, served with courses that include three Korean dishes; the interior is meant to feel like a trip to Korea. Opened 26 July 2024. Hot Pepper lists a コギソウル 京都河原町店, and a September 2026 diner compares it with a Tennoji shop.', philosophy: null, specialty: 'Aged thick-cut samgyeopsal; chukumi samgyeopsal.',
      anecdotes: [
        { text: '"The atmosphere and service here are definitely better at the Tennoji location!" — September 2026.', source: R + 'B535261328/' },
        { text: '"It\'s great that the staff prepares the dishes, allowing you to enjoy your meal at a leisurely pace." — September 2026.', source: R + 'B535950559/' },
        { text: '"It\'s located in a dim alley just off the arcade, and the sign is quite small." — October 2026.', source: R + 'B537033032/' },
      ],
      japanese_sources_summary: 'ホットペッパー: サムギョプサルと韓国料理 コギソウル 京都河原町店 (京都初出店)。食べログ (英語版): コギソウル 難波店、難波3-7-23 新戎橋ビル 2F、御堂筋ホテルの向かい (1階はヨーグルトの店)、なんば駅11番出口から徒歩1分、2024年7月26日オープン、平日17:00〜23:00、土日祝12:00〜23:00 (ランチは土日祝のみ)、コースは金〜日・祝・祝前日に週末料金330円、12月は加算あり、未就学児は安全のため入店不可、サムギョプサル食べ放題3,480円〜、熟成厚切りサムギョプサル、チュクミサムギョプサル、チュクミプルコギ、チーズキンパ、韓国旅行のようなおしゃれな店内。メニュー (2026年10月): 厚切りサムギョプサルのセット、宮崎県産霧島山麓豚、豚バラと肩ロースのMIX、チュクミのセット、ナッコプセ、締めのポックンパとカルグクス。口コミ (2026年8月〜10月): ナッコプセ、チヂミ、チャプチェ、トッポッキ、チーズボール、ケランチム、マッコリ、スタッフが調理してくれる、若い女性が多い、入口がわかりにくい、天王寺店の方が対応が良いという声。',
      confidence: 'medium', sources: [TB, M, 'https://www.hotpepper.jp/strJ004403552/', R + 'B526615515/', R + 'B533017622/', R + 'B534702990/', R + 'B535094703/', R + 'B535261328/', R + 'B535928965/', R + 'B535950559/', R + 'B536317568/', R + 'B536742611/', R + 'B537033032/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff cook at the table (2026 reviews). No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波3-7-23 新戎橋ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with an October 2026 menu; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波三丁目7番23号 (go) 11m. Nearest record (osaka_pancake_cafe_mog_namba, "…難波3-7-9") is about 37 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [M, TB],
    price_note: 'Tabelog menu last updated October 2026, tax included; ¥330 weekend fee on courses. All-you-can-eat samgyeopsal from about ¥2,980–3,480 (Tabelog). Diners report ¥3,000–7,999 a head.', last_checked: TODAY, items: [
      it('', '', 'Thick-cut samgyeopsal set, medium (2–3)', '¥4,048', 'Main', 'ask', 'no', 'Large ¥4,598.', 'samgyeopsal_set'),
      it('', '', 'Chukumi (spicy octopus) and pork belly set, medium', '¥4,598', 'Main', 'ask', 'no', '', 'chukumi_samgyeopsal'),
      it('', '', 'Kogi Seoul nakgopsae, medium (2–3)', '¥5,148', 'Main', 'ask', 'no', '', 'nakgopsae'),
      it('', '', 'Bokkeumbap to finish', '¥803', 'Finish', 'ask', 'no', '', 'bokkeumbap'),
    ] }, {
    cuisine: 'サムギョプサルと韓国料理: 熟成厚切りの豚バラ、宮崎県産霧島山麓豚、豚バラと肩ロース、チュクミサムギョプサル、ナッコプセ、プルコギ、締めのポックンパかカルグクス (食べログのメニュー、2026年10月)・チヂミ、チャプチェ、トッポッキ、チーズボール、ケランチム、チーズキンパ、マッコリ (口コミ)・サムギョプサル食べ放題のコース約2,980〜3,480円〜',
    neighborhood: '難波3-7-23 新戎橋ビル 2F、御堂筋ホテルの向かい (1階はヨーグルトの店)。なんば駅11番出口から徒歩1分',
    gf_detail: '要確認。グルテンの情報なし。豚バラはそのまま焼くが、チュクミ、ナッコプセ、プルコギはタレがあり、チヂミ、チャプチェ、トッポッキ、キンパ、カルグクスもある (食べログのメニュー、口コミ)。',
    vegan_detail: 'ヴィーガンではありません。サムギョプサルと韓国料理の店で、ヴィーガンの選択肢の説明はない。',
    notes: '[韓国料理・難波、隠れた2階のサムギョプサル] なんば駅11番出口から1分、戎橋の商店街から入ったビルの2階、2024年7月オープンのおしゃれなサムギョプサルの店。入口は薄暗い路地にあり見落としやすい。スタッフが熟成の厚い豚バラやチュクミサムギョプサルを席で調理し、チヂミ、チャプチェ、チーズの料理も。2026年の客は料理と韓国旅行のような雰囲気を褒め、若い女性客が多いと書く。天王寺店を知る9月の客は、ここは提供が遅かったと感じた。未就学児は入店不可。',
  });
}

save();
