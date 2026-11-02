// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first — lane osw3 (Tabelog id mod 4 = 2), batch 13.
//   + お好み焼き・鉄板焼 ぼんくら家 道頓堀店 (Bonkuraya Dotonbori: fluffy okonomiyaki up a staircase on the Dotonbori main street)
//   + 焼鳥祐 アラカルト (Yakitori Yuu A La Carte: second shop of Tanimachi's Yakitori Yuu; mixed-bird platters, ostrich)
//   + 大阪カオマンガイキッチン (Osaka Khao Man Gai Kitchen: Thai, khao man gai specialist since 2013)
//   + たこやき座 (Takoyaki Za: takoyaki across from Namba Grand Kagetsu, open to midnight)
//   Lane: the first four ids with id mod 4 = 2 in `queue.mjs osaka next notable 80` (2026-11-02, after batch 12):
//   27056606, 27128770, 27074938, 27018542 (last two digits 06, 70, 38, 42: each = 2 mod 4).
//   None is in data/osaka.json or any other city file (grep by Tabelog id, name, romaji and address).
//   Chain check (Greg's rulings, 2026-11-02). Bonkuraya: a small Osaka chain (a Nishinakajima branch is on Tabelog), none
//   in data and no sign of fast expansion; kept, and later Bonkuraya branches should now be skipped as chain-in-data.
//   Yakitori Yuu A La Carte: the second shop of 焼鳥祐 (Tanimachi 9-chome, not in data); its group also runs other brands,
//   one of them 麺屋 たにぐち 難波店 (osaka_menya_taniguchi_namba, same address) — a sister concept, not a chain skip.
//   Khao Man Gai Kitchen and Takoyaki Za: single shops.
//   GF: okonomiyaki and takoyaki are wheat-batter foods, so 'no' (rule). open_late: true only when closing after 22:00.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw3-13');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ ぼんくら家 道頓堀店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27056606/'; const R = TB + 'dtlrvwlst/'; const NISHI = 'https://tabelog.com/osaka/A2701/A270301/27083768/';
  const MO = day(['17:00', '23:30']); const TS = day(['11:30', '23:30']); const SU = day(['11:30', '22:30']);
  put({
    id: 'osaka_bonkuraya_dotonbori', name: 'お好み焼き・鉄板焼 ぼんくら家 道頓堀店 (Okonomiyaki Teppanyaki Bonkuraya Doutonbori ten)', category: 'OMNI',
    lat: 34.668859, lng: 135.503384, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: okonomiyaki, yakisoba, sobameshi and tonpei-yaki are wheat-based and cooked on shared griddles. The steak teppanyaki is the only dish to ask about.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: okonomiyaki with pork, beef tendon, seafood and egg; the Bon-chan-yaki is served with a dashi (October 2026).',
    hours_raw: 'Mon 17:00–23:30; Tue–Sat 11:30–23:30 (last order 23:00); Sun 11:30–22:30 (last order 22:00); irregular closures (Tabelog). Reservations, including seat-only bookings at lunch (August 2026); a two-hour limit when busy (August 2026). At least one drink per person; no service or table charge (Tabelog). Courses: six dishes with 90-minute all-you-can-drink from ¥3,500; the Bonkuraya course of six dishes with 120 minutes for ¥4,500 (Tabelog; August 2026). Cards (VISA, Master, JCB, AMEX) and PayPay; no e-money (Tabelog). 87 seats, private hire for 50–87; non-smoking (Tabelog). Up a narrow staircase to the second floor, which a September 2026 diner flags for anyone with mobility issues. Takeaway and Uber Eats (Tabelog).',
    hours: { 0: MO, 1: TS, 2: TS, 3: TS, 4: TS, 5: TS, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Dotonbori 1-5-9, 2F, on the Dotonbori main street — 3 min from exit B22 of Namba Walk',
    cuisine: 'Okonomiyaki and teppanyaki (Tabelog) · the signature "fluffy and melty" okonomiyaki, Bonkura-yaki, with a soft batter, also with grated yam on top (2026) · Kasune-gi Mix-yaki with pickled ginger and dashi; Mixed Bon-chan-yaki served Akashi-yaki style with a dashi of green onion and bonito (October 2026) · pork okonomiyaki; Hiroshima-style okonomiyaki; Kyonyuu-yaki, a novelty okonomiyaki with mentaiko mayonnaise that the shop calls its No. 1 (Tabelog; August–September 2026) · tonpei-yaki, pork yakisoba, mega yakisoba, beef-tendon sobameshi with konnyaku, horumon, Iberico pork with chives and bean sprouts, steak teppanyaki (Tabelog; 2026) · courses with all-you-can-drink from ¥3,500; seasonal fairs (Tabelog)',
    website: null, gmaps: gm('ぼんくら家 道頓堀店'), menu_url: null,
    notes: "[Okonomiyaki · Dotonbori, fluffy okonomiyaki above the main street] A big second-floor okonomiyaki and teppanyaki restaurant on the Dotonbori main street, up a narrow staircase, part of a small Osaka chain. The house okonomiyaki, Bonkura-yaki, is soft and fluffy; try the Akashi-yaki-style Bon-chan-yaki in dashi or the beef-tendon sobameshi, with tonpei-yaki and yakisoba on the side. Courses with all-you-can-drink start at ¥3,500, and a drink per person is required. Diners in 2026 found it reliable and easy to get into, with friendly staff, many from overseas, though several called the okonomiyaki ordinary and one found the mayonnaise heavy. Open daily to 23:30 (Mondays from 17:00, Sundays to 22:30).",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: okonomiyaki and teppanyaki in Dotonbori, famous for "fluffy and melty" okonomiyaki, featured in the media and visited by celebrities and comedians. A Bonkuraya branch in Nishinakajima is also on Tabelog. 2026 reviews note friendly staff, many from overseas.',
      philosophy: null, specialty: 'Fluffy okonomiyaki (Bonkura-yaki); Bon-chan-yaki; sobameshi.',
      anecdotes: [
        { text: '"The Mixed Bon-chan-yaki was served in a style reminiscent of Akashiyaki, pairing perfectly with the dashi infused with green onions and bonito flakes. Personally, I found it to be the most delicious!" — October 2026.', source: R + 'B537951711/' },
        { text: '"I climbed a narrow staircase to get here (be cautious if you have mobility issues)." — September 2026, Bonkura-yaki and beef-tendon sobameshi.', source: R + 'B536034571/' },
        { text: '"Perhaps I had set my expectations too high, as the taste was quite ordinary." — August 2026, a first family visit to Dotonbori.', source: R + 'B534595393/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): お好み焼き・鉄板焼 ぼんくら家 道頓堀店、お好み焼き・鉄板焼き・居酒屋、道頓堀1-5-9 2F、Namba Walk B22出口から徒歩3分、月 17:00〜23:30、火〜土 11:30〜23:30 (L.O.23:00)、日 11:30〜22:30 (L.O.22:00)、不定休、予約可、1人1ドリンク制、サービス料・チャージなし、カード・PayPay可、87席、貸切50〜87名、禁煙、テイクアウト、Uber Eats、名物「ふわトロ」お好み焼き、メディアで紹介、芸能人や芸人も来店、6品と120分飲み放題のぼんくら家コース4,500円、90分飲み放題のコース3,500円から、明太マヨの人気No.1メニュー、本格ステーキ鉄板焼き。口コミ(2026年8月〜10月): Bonkura-yaki、Kasune-gi Mix-yaki、明石焼き風の Mixed Bon-chan-yaki、とん平焼き、豚玉、豚焼きそば、牛すじそばめし、広島焼き、ホルモン、狭い階段で2階へ、土曜は2時間制、外国人スタッフが親切、お好み焼きは普通という声も。',
      confidence: 'medium', sources: [TB, NISHI, R + 'B534269843/', R + 'B534313772/', R + 'B534442601/', R + 'B534540807/', R + 'B534595393/', R + 'B534598090/', R + 'B536034571/', R + 'B536652705/', R + 'B536933023/', R + 'B537717628/', R + 'B537767588/', R + 'B537951711/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Many overseas guests and friendly staff from overseas (August–September 2026). No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀1-5-9 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀一丁目5番9号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B534313772/'],
    price_note: 'Only course prices are published (Tabelog, read November 2026; August 2026 review); no à la carte prices found.', last_checked: TODAY, items: [
      it('', 'Bonkura-yaki', 'Bonkura-yaki, the house fluffy okonomiyaki', '', 'Okonomiyaki', 'no', 'no', '2026 reviews.', 'bonkurayaki'),
      it('', 'Bon-chan-yaki', 'Mixed Bon-chan-yaki in dashi', '', 'Okonomiyaki', 'no', 'no', 'October 2026.', 'bonchanyaki'),
      it('', '', 'Beef-tendon sobameshi', '', 'Teppanyaki', 'no', 'no', 'September 2026.', 'sobameshi'),
      it('', '', 'Course, six dishes with 90-minute all-you-can-drink', '¥3,500', 'Courses', 'no', 'no', 'Tabelog; August 2026.', 'course_light'),
      it('', '', 'Bonkuraya course, six dishes with 120-minute all-you-can-drink', '¥4,500', 'Courses', 'no', 'no', 'Tabelog.', 'course'),
    ] }, {
    cuisine: 'お好み焼きと鉄板焼き (食べログ)・名物の「ふわトロ」お好み焼き、Bonkura-yaki はやわらかい生地で、とろろをのせても (2026年)・紅しょうがと出汁の Kasune-gi Mix-yaki、ねぎと鰹の出汁で明石焼き風に食べる Mixed Bon-chan-yaki (2026年10月)・豚玉、広島焼き、店が人気No.1という明太マヨの変わり種お好み焼き Kyonyuu-yaki (食べログ、2026年8〜9月)・とん平焼き、豚焼きそば、メガ焼きそば、こんにゃく入りの牛すじそばめし、ホルモン、イベリコ豚のニラもやし、ステーキの鉄板焼き (食べログ、2026年)・飲み放題つきのコースは3,500円から、季節のフェア (食べログ)',
    neighborhood: '道頓堀1-5-9 2F、道頓堀の大通り沿い。Namba Walk の B22出口から徒歩3分',
    gf_detail: 'グルテンフリーではありません。お好み焼き、焼きそば、そばめし、とん平焼きは小麦を使い、共用の鉄板で焼く。確認するならステーキの鉄板焼きだけ。',
    vegan_detail: 'ヴィーガンではありません。豚、牛すじ、魚介、卵のお好み焼きで、Bon-chan-yaki は出汁で食べる (2026年10月)。',
    notes: '[お好み焼き・道頓堀、大通りの上のふわふわお好み焼き] 道頓堀の大通り沿い、狭い階段を上った2階の広いお好み焼き・鉄板焼きの店で、大阪の小さなチェーンの1軒。看板の Bonkura-yaki はやわらかくふわふわ。明石焼き風に出汁で食べる Bon-chan-yakiや牛すじそばめし、とん平焼きや焼きそばも。飲み放題つきのコースは3,500円からで、1人1ドリンク制。2026年の口コミでは入りやすく、海外出身のスタッフも多く親切という声の一方、お好み焼きは普通という声やマヨネーズが重いという声も。毎日23時30分まで (月曜は17時から、日曜は22時30分まで)。',
  });
}

// ================================================================ 焼鳥祐 アラカルト
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27128770/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://yu-alacarte.com/';
  const A = day(['11:30', '23:00']); const B = day(['11:30', '24:00']);
  put({
    id: 'osaka_yakitori_yuu_a_la_carte_namba', name: '焼鳥祐 アラカルト (Yakitori Yuu A La Carte)', category: 'OMNI',
    lat: 34.664236, lng: 135.499747, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Salt-seasoned skewers and the bird sashimi platter are where to start; sauce skewers, tsukune with sauce, chicken nanban, yam fries and the paitan ramen are not.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakitori and poultry restaurant.',
    hours_raw: 'Mon–Thu, Sun and holidays 11:30–23:00 (last orders food 22:00, drinks 22:30); Fri, Sat and the day before a holiday 11:30–24:00 (last orders 23:00 and 23:30) (Tabelog). The official site still lists 17:00 openings and Sundays closed, but diners came for lunch in September 2026 and on a Sunday evening in August 2026. Happy hour until 17:00 with chuhai and highballs at ¥99 (Tabelog; September 2026). Reservations online or by phone; walk-ins on a Friday (October 2026). Courses with two-hour all-you-can-drink ¥5,500, ¥4,500 Monday–Thursday (official site); banquet courses ¥4,500 and ¥6,500 (Tabelog). Cards (VISA, Master, JCB, AMEX); the official site also lists PayPay, while Tabelog says no QR. 50 seats: a counter on the first floor facing the grill and tables upstairs; non-smoking (Tabelog; official site). Mobile ordering (August 2026). The entrance, upstairs beside a noodle shop, is a little hard to find (September 2026). Opened 20 April 2022 (Tabelog).',
    hours: { 0: A, 1: A, 2: A, 3: A, 4: B, 5: B, 6: A }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nambanaka 1-15-23, 難波清覚ビル (Naniwa-ku) — 20 seconds from exit 5 of Namba Stn, 1 min from Nankai Namba Stn',
    cuisine: 'Yakitori and creative chicken dishes from branded and local birds, including the group\'s own brand 六角大魔王 and Nagoya Cochin (official site) · the signature mixed-bird platter of chicken, Kawachi duck, ostrich, pheasant and pigeon as sashimi or tataki, by the day\'s buying (official site; ostrich in August 2026) · 水煙蒸し, steamed in front of you with 六角大魔王 and Awaji Island vegetables (official site) · skewers: negima, heart, gizzard, skin, seseri, liver, cheese-topped skewers, tsukune with egg yolk, chicken wings with a spicy kick, pork lettuce rolls (2026) · ostrich yukke; chicken sashimi with wasabi leaves; chicken tataki; liver pâté in crisp pastry; yodare chicken; chicken nanban; yam fries; homemade pickles with quail eggs; fresh spring rolls as a starter; chicken paitan ramen to finish (2026) · about 20 wines and sakes, fruit chuhai and whisky (official site)',
    website: SITE, gmaps: gm('焼鳥祐 アラカルト 難波'), menu_url: null,
    notes: "[Yakitori · Namba, Yakitori Yuu's second shop: ostrich, duck and pheasant] The second shop of Yakitori Yuu, a popular yakitori place in Tanimachi 9-chome, a minute from Nankai Namba, with a counter facing the grill downstairs and tables upstairs. Beyond chicken skewers it serves a platter of different birds, chicken, Kawachi duck, ostrich, pheasant and pigeon, as sashimi or tataki, plus ostrich yukke, tsukune with egg yolk and creative plates such as liver pâté pastries, with a chicken paitan ramen to finish. It opens at 11:30 with a ¥99 chuhai and highball happy hour until 17:00, and stays open late. Diners in 2026 praise the variety and value; a couple found the grilling or the seseri less impressive than the creative dishes.",
    chef_bio: { chef_name: null, roles: ['Grill team (unnamed)'], origin: null,
      background: 'Per the official site: the second shop of the popular 焼鳥祐 in Tanimachi 9-chome, with courses at the same level as the main shop; branded and local chickens including the house brand 六角大魔王 and Nagoya Cochin; the group\'s other shops, listed on the site, include 鶏家 六角鶏 (Namba and Sakai-Higashi) and 麺屋 たにぐち. Per Tabelog: the main 焼鳥祐 takes no reservations; opened 20 April 2022.',
      philosophy: 'A space to unwind over good food and drink; the counter for dates and business dinners, tables upstairs for parties (official site).', specialty: 'Mixed-bird platter; 水煙蒸し; tsukune with egg yolk.',
      anecdotes: [
        { text: '"The yakitori was excellent, and the ostrich meat included in the assorted poultry was a rare and delicious treat. The chicken paitan ramen served at the end was exceptional." — August 2026.', source: R + 'B534073743/' },
        { text: '"It\'s close to the station, but the entrance was a bit hard to find... I thought it was missing, but it\'s actually on the second floor of a udon shop!!" — September 2026, ¥99 happy hour.', source: R + 'B536751491/' },
        { text: '"While the grilling technique could be better utilized to enhance the flavor, considering the location, cost, and ambiance, I believe it\'s a very convenient place to visit." — September 2026.', source: R + 'B536499957/' },
      ],
      japanese_sources_summary: '公式サイト (yu-alacarte.com): 焼鳥祐 アラカルト、谷町九丁目で人気の『焼鳥祐』2号店、難波駅1分、自社ブランド「六角大魔王」や名古屋コーチンなどの地鶏、名物『鳥類盛』(鶏、河内鴨、駝鳥、雉、鳩などをお造りやたたきで、その日の仕入れによって)、目の前で蒸し上げる「水煙蒸し」(六角大魔王と淡路島野菜)、おすすめユッケ、2時間飲み放題付のおまかせコース5,500円、月〜木限定の飲み放題付コース4,500円、本店同様レベル、ワインと日本酒を約20種、1Fカウンター、2Fテーブル席、難波中1-15-23 難波清覚ビル、難波駅5番出口から徒歩20秒、営業時間 月〜木17:00〜23:00・金土祝前日17:00〜24:00・日曜定休、カード・PayPay可、同じグループに鶏家 六角鶏、麺屋 たにぐちなど。食べログ (店舗会員): 焼き鳥・居酒屋・鶏料理、毎日11:30から (月〜木・日祝23:00まで、金土祝前日24:00まで)、昼は酎ハイとハイボール99円、予約可、50席、禁煙、2022年4月20日オープン。口コミ(2026年8月〜10月): 駝鳥のユッケ、鳥類盛、卵黄つくね、チキン南蛮、レバーパテ、山芋フライ、鶏白湯ラーメン、モバイルオーダー、3階まで席、入口が分かりにくい。',
      confidence: 'medium', sources: [SITE, TB, R + 'B510444419/', R + 'B533135150/', R + 'B534073743/', R + 'B534550675/', R + 'B534710447/', R + 'B536388001/', R + 'B536499957/', R + 'B536639034/', R + 'B536751491/', R + 'B537368404/', R + 'B537388285/', R + 'B538042067/'] },
    cultural_comfort: { level: 'english', note: 'The official site has an English version; many international staff and mobile ordering (August 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中1-15-23 難波清覚ビル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (blog posts to 28 October 2026) and the shop-maintained Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中一丁目15番23号 (go) 6m; same address as osaka_menya_taniguchi_namba, 9 m apart, not stacked; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, TB],
    price_note: 'Course prices from the official site and Tabelog (read November 2026), tax included; no à la carte prices found.', last_checked: TODAY, items: [
      it('鳥類盛', '', 'Mixed-bird platter (sashimi or tataki)', '', 'Signatures', 'ask', 'no', 'Official site.', 'bird_platter'),
      it('水煙蒸し', '', 'Steam-cooked chicken and Awaji vegetables', '', 'Signatures', 'ask', 'no', 'Official site.', 'steamed'),
      it('', '', 'Omakase course with two-hour all-you-can-drink', '¥5,500', 'Courses', 'ask', 'no', 'Official site.', 'course'),
      it('', '', 'Course with two-hour all-you-can-drink (Mon–Thu)', '¥4,500', 'Courses', 'ask', 'no', 'Official site.', 'course_weekday'),
      it('', '', 'Chuhai or highball at happy hour (to 17:00)', '¥99', 'Drinks', 'ask', 'ask', 'Tabelog; September 2026.', 'happy_hour'),
    ] }, {
    cuisine: '銘柄鶏や地鶏の焼き鳥と創作の鶏料理。自社ブランド「六角大魔王」や名古屋コーチンなど (公式サイト)・名物の鳥類盛は鶏、河内鴨、駝鳥、雉、鳩などをその日の仕入れでお造りやたたきに (公式サイト、2026年8月は駝鳥)・六角大魔王と淡路島の野菜を目の前で蒸し上げる水煙蒸し (公式サイト)・串: ねぎま、ハツ、砂肝、皮、せせり、レバー、チーズの串、卵黄つくね、ピリ辛の手羽先、豚のレタス巻き (2026年)・駝鳥のユッケ、わさび菜を添えた鶏刺し、鶏のたたき、さくさくの生地のレバーパテ、よだれ鶏、チキン南蛮、山芋フライ、うずらの卵の自家製ピクルス、お通しの生春巻き、締めの鶏白湯ラーメン (2026年)・ワインと日本酒約20種、果実の酎ハイ、ウイスキー (公式サイト)',
    neighborhood: '難波中1-15-23 難波清覚ビル (浪速区)。難波駅5番出口から徒歩20秒、Nankai Namba 駅から1分',
    gf_detail: '要確認。グルテンの情報なし。塩の串と鳥類盛の刺身から確認を。タレの串、タレのつくね、チキン南蛮、山芋フライ、白湯ラーメンは避けて。',
    vegan_detail: 'ヴィーガンではありません。焼き鳥と鳥料理の店。',
    notes: '[焼き鳥・難波、焼鳥祐の2号店、駝鳥、鴨、雉] 谷町九丁目の人気店、焼鳥祐の2号店で、Nankai Namba から1分。1階は焼き台に向かうカウンター、上はテーブル席。鶏の串だけでなく、鶏、河内鴨、駝鳥、雉、鳩を刺身やたたきで盛る鳥類盛、駝鳥のユッケ、卵黄つくね、レバーパテのパイのような創作の一品、締めの鶏白湯ラーメン。11時30分から開き、17時まで酎ハイとハイボールが99円、夜も遅くまで。2026年の口コミでは種類の多さと値段が好評で、焼きやせせりは創作料理ほどではないという声も。',
  });
}

// ================================================================ 大阪カオマンガイキッチン
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27074938/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:45'], ['17:00', '22:00']);
  put({
    id: 'osaka_khao_man_gai_kitchen_nambanaka', name: '大阪カオマンガイキッチン (Osaka Khao Man Gai Kitchen)', category: 'OMNI',
    lat: 34.662723, lng: 135.504217, cuisine_type: 'thai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Steamed-chicken khao man gai comes with a ginger sauce and a chili sauce whose contents are not described; the fried chicken and anything with soy or oyster sauce may contain wheat. The shop takes custom orders where it can (Tabelog).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and the Thai chef takes custom orders where possible, but Thai dishes use fish sauce and shrimp, and the khao man gai is chicken.',
    hours_raw: 'Daily 11:30–14:45 and 17:00–22:00 (last order 21:30) (Tabelog). At lunch you pay first and then sit (September 2026); lunch comes with oolong tea or coffee (October 2026); lunch reservations on weekdays only; courses need booking a day ahead; groups of 10 or more are contacted to confirm (Tabelog). Water and condiments are self-service (July and October 2026). Cards (VISA, Master, JCB, AMEX, Diners), IC cards, Rakuten Edy, nanaco, WAON, iD, QUICPay and QR including Alipay and WeChat Pay (Tabelog); no service charge (Tabelog original text). 46 table seats on the ground floor and a loft; private hire for 20–50; non-smoking with a smoking area; children welcome; English menu; takeaway and Uber delivery (Tabelog). Opened 5 September 2013 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nambanaka 2-4-14 (Naniwa-ku), on the way from Namba toward Nipponbashi — 2 min from Namba Stn',
    cuisine: 'Thai, cooked by a Thai chef, with khao man gai as the specialty (Tabelog) · khao man gai of steamed chicken on chicken rice with a homemade sauce, ¥1,200 (October 2026); fried khao man gai with a sweeter, spicier sauce ¥1,180 (October 2026); half-and-half steamed and fried ¥1,250, with a red chili sauce and a strong ginger sauce, cilantro optional (September 2026) · pad thai with shrimp, fried tofu, egg, peanuts and sakura shrimp ¥1,050 at lunch (October 2026); gapao rice; mini tom yum noodles with flat rice noodles (July 2026) · dinner: tom yum kung, stir-fried clams, water spinach, roast pork, fried shrimp paste, glass-noodle salad, red curry, green-curry fried rice, fresh spring rolls (September–October 2026) · bua loy, rice balls in warm coconut milk (August 2026) · spice levels and orders adjusted on request (Tabelog; September 2026)',
    website: null, gmaps: gm('大阪カオマンガイキッチン 難波中'), menu_url: null,
    notes: "[Thai · Nambanaka, khao man gai since 2013] A Thai restaurant run with a Thai chef since 2013, between Namba and Nipponbashi, with tables downstairs and a loft upstairs. The name is the dish to order: khao man gai of steamed chicken on fragrant rice, or fried, or half and half (¥1,180–¥1,250), with ginger and chili sauces and a soup; there is also pad thai, gapao rice, curries and, at night, tom yum kung and stir-fries. Lunch starts at 11:30 and runs to 14:45, with a free tea or coffee. Diners in 2026 call it great value and easy to get into; some found the flavors sweet or the rice too mild, which the self-service condiments can fix. Open daily.",
    chef_bio: { chef_name: null, roles: ['Thai chef (unnamed)'], origin: 'Thailand (Tabelog: run by a native Thai chef)',
      background: 'Per the shop-maintained Tabelog listing: an authentic Thai restaurant in Namba run by a native Thai chef, celebrating 12 years; khao man gai with a homemade sauce is the specialty; custom spice levels and orders accommodated where possible; opened 5 September 2013.',
      philosophy: 'The true flavors of Thailand, even for solo diners (Tabelog).', specialty: 'Khao man gai; pad thai.',
      anecdotes: [
        { text: '"The crispy texture of the fried chicken and the moistness of the boiled chicken were both irresistible and absolutely fantastic." — September 2026, half-and-half khao man gai, a second visit.', source: R + 'B536254856/' },
        { text: '"I arrived around 8:30 PM on a Sunday. There were three groups, including myself." — October 2026, khao man gai ¥1,200.', source: R + 'B537222901/' },
        { text: '"Overall, the flavors were on the sweeter side." — October 2026, a first dinner visit.', source: R + 'B536667570/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 大阪カオマンガイキッチン、タイ料理・カレー、難波中2-4-14、各線 Namba 駅から徒歩2分、毎日11:30〜14:45・17:00〜22:00 (L.O.21:30)、予約可 (ランチの予約は平日のみ、コースは前日までに)、カード・電子マネー・QR可、サービス料なし、46席 (テーブル)、2階のロフト、貸切20〜50名、禁煙 (喫煙所あり)、ベジタリアンメニュー、英語メニュー、テイクアウト、Uber などのデリバリー、2013年9月5日オープン、12周年、タイ人シェフ、名物カオマンガイと自家製ソース、辛さなどの調整に対応。口コミ(2026年7月〜10月): カオマンガイ1,200円、揚げカオマンガイ1,180円、ハーフ＆ハーフ1,250円、パッタイ1,050円、ガパオライス、トムヤムクン、ブアローイ、ランチは先払い、ウーロン茶かコーヒーつき、水と調味料はセルフ、味は甘めという声。',
      confidence: 'medium', sources: [TB, R + 'B530918310/', R + 'B533789959/', R + 'B534139772/', R + 'B535321185/', R + 'B535366273/', R + 'B535711415/', R + 'B536254856/', R + 'B536667570/', R + 'B537001685/', R + 'B537019224/', R + 'B537222901/', R + 'B537967042/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); a Thai chef; Alipay and WeChat Pay accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中2-4-14',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中二丁目4番14号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537222901/', R + 'B535366273/', R + 'B537967042/', R + 'B537001685/'],
    price_note: 'Prices from September–October 2026 reviews (tax included as reported); no menu online.', last_checked: TODAY, items: [
      it('', 'Khao Man Gai', 'Khao man gai (steamed chicken rice)', '¥1,200', 'Rice', 'ask', 'no', 'October 2026.', 'khao_man_gai'),
      it('', '', 'Fried khao man gai', '¥1,180', 'Rice', 'no', 'no', 'October 2026.', 'khao_man_gai_fried'),
      it('', '', 'Half-and-half khao man gai (steamed and fried)', '¥1,250', 'Rice', 'no', 'no', 'September 2026.', 'khao_man_gai_half'),
      it('', '', 'Pad thai (lunch)', '¥1,050', 'Noodles', 'ask', 'no', 'October 2026.', 'pad_thai'),
    ] }, {
    cuisine: 'タイ人シェフのタイ料理で、名物はカオマンガイ (食べログ)・蒸し鶏とチキンライスに自家製ソースのカオマンガイ1,200円 (2026年10月)、甘辛いソースの揚げカオマンガイ1,180円 (2026年10月)、蒸しと揚げのハーフ＆ハーフ1,250円、赤いチリソースとしょうがの効いたソース、パクチーは選べる (2026年9月)・エビ、厚揚げ、卵、ピーナッツ、桜えびのパッタイはランチで1,050円 (2026年10月)、ガパオライス、平たい米麺のミニトムヤム麺 (2026年7月)・夜: トムヤムクン、アサリ炒め、空芯菜、ローストポーク、エビのすり身揚げ、春雨サラダ、レッドカレー、グリーンカレーのチャーハン、生春巻き (2026年9〜10月)・温かいココナッツミルクに白玉のブアローイ (2026年8月)・辛さや注文の調整に対応 (食べログ、2026年9月)',
    neighborhood: '難波中2-4-14 (浪速区)、Namba から Nipponbashi へ向かう途中。Namba 駅から徒歩2分',
    gf_detail: '要確認。グルテンの情報なし。蒸し鶏のカオマンガイにはしょうがのソースとチリソースがつくが、中身は書かれていない。揚げ鶏、醤油やオイスターソースの料理は小麦を含むことがある。できる範囲で注文に対応 (食べログ)。',
    vegan_detail: '要確認。食べログにベジタリアンメニューがあり、タイ人シェフができる範囲で注文に対応するが、タイ料理には魚醤やエビを使い、カオマンガイは鶏。',
    notes: '[タイ料理・難波中、2013年からのカオマンガイ] Namba と Nipponbashi の間で2013年からタイ人シェフのいるタイ料理店。1階はテーブル、上はロフト。頼むなら店名の料理: 香りのよいご飯に蒸し鶏のカオマンガイ、揚げ、またはハーフ＆ハーフ (1,180〜1,250円) で、しょうがとチリのソースとスープつき。パッタイ、ガパオライス、カレー、夜はトムヤムクンや炒め物も。ランチは11時30分から14時45分までで、お茶かコーヒーつき。2026年の口コミでは手頃で入りやすいと好評で、味が甘い、ご飯があっさりという声もあるが、セルフの調味料で調整できる。毎日営業。',
  });
}

// ================================================================ たこやき座
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27018542/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['10:00', '24:00']); const WE = day(['09:00', '24:00']);
  put({
    id: 'osaka_takoyaki_za_sennichimae', name: 'たこやき座 (Takoyaki Za)', category: 'OMNI',
    lat: 34.665285, lng: 135.503244, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: takoyaki, okonomiyaki and yakisoba are wheat-batter or wheat-noodle dishes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: octopus balls in a dashi-rich batter (August 2026).',
    hours_raw: 'Mon–Fri 10:00–24:00; Sat, Sun and holidays 09:00–24:00 (Tabelog). Takeaway, or eat in (2026). Reservations; private hire up to 50 (Tabelog). Cash only: no cards, e-money or QR (Tabelog; August 2026). 100 seats over three floors, with a tatami area (Tabelog; October 2026). Smoking allowed (Tabelog). The listed website, takoyakiza.com, did not respond in November 2026.',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Namba Sennichimae 12-2, diagonally across from Namba Grand Kagetsu — straight down Nankai Street from Namba Stn (Takashimaya)',
    cuisine: 'Takoyaki, okonomiyaki and yakisoba (Tabelog) · soft, fluffy takoyaki with a rich dashi batter, crisp outside and gooey inside, nine to a small order; sauce and mayonnaise, soy sauce, salt, garlic soy sauce or ponzu (2026); the salt and salt-mayo flavors are a regular\'s favorite (September 2026) · a six-flavor tasting set (August 2026) · okonomiyaki; pork yakisoba; doteyaki (2026) · draft beer, sake and shochu (Tabelog; 2026)',
    website: null, gmaps: gm('たこやき座 難波千日前'), menu_url: null,
    notes: "[Takoyaki · Sennichimae, takoyaki across from NGK] A takoyaki shop diagonally across from Namba Grand Kagetsu, its walls covered in comedians' and celebrities' signatures, with seats on three floors including tatami, so you can sit down with a beer before or after a show. The takoyaki are small, soft and gooey in a dashi-rich batter; have them with sauce and mayo, or try salt, which one seven-time regular calls the best in the world, or a six-flavor set. Okonomiyaki, yakisoba and doteyaki too. Most 2026 diners were happy; one found the flavor not to taste and another the doteyaki small. Cash only, smoking allowed, open from morning to midnight.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: takoyaki, okonomiyaki and yakisoba diagonally in front of Namba Grand Kagetsu, with 100 seats on the second and third floors too. 2026 reviews note signatures of comedians and celebrities on the walls and friendly staff, many from overseas. No opening date is given; a September 2026 diner first came 11 years earlier.',
      philosophy: null, specialty: 'Takoyaki with salt or sauce.',
      anecdotes: [
        { text: '"The takoyaki salt at Takoyaki Za is the best in Japan, and indeed, the best in the world." — February 2025, the fifth of seven visits.', source: R + 'B480596207/' },
        { text: '"Among the many famous takoyaki shops in the area, I chose this place because it has a tatami seating area where I could relax." — October 2026, before a rakugo show at NGK.', source: R + 'B537956918/' },
        { text: '"Even the plain one, which has no seasoning, is delicious on its own thanks to the rich dashi flavor." — August 2026, the six-flavor set.', source: R + 'B534740422/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): たこやき座、たこ焼き・お好み焼き・焼きそば、難波千日前12-2、Namba 駅 (Takashimaya) から Nankai 通りをまっすぐ、Namba Grand Kagetsu の斜め前、月〜金 10:00〜24:00、土日祝 9:00〜24:00、予約可、カード・電子マネー・QR不可、100席 (2階・3階も)、座敷、貸切50名まで、喫煙可、テイクアウト、日本酒・焼酎。口コミ(2026年6月〜10月): ふわふわでとろとろのたこ焼き、出汁の効いた生地、ソース、醤油、塩、にんにく醤油、ポン酢、塩マヨ、6種の食べ比べ、小9個、豚焼きそば、どて焼き、芸人やタレントのサイン、現金のみ、外国人スタッフが親切。',
      confidence: 'medium', sources: [TB, R + 'B480596207/', R + 'B531701718/', R + 'B533309219/', R + 'B534060715/', R + 'B534740422/', R + 'B535491814/', R + 'B536126979/', R + 'B536968686/', R + 'B537368810/', R + 'B537956918/', R + 'B538066301/', R + 'B538381120/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Friendly staff, many from overseas (August–September 2026); cash only. No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前12-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026. The listed website did not respond.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前12番2号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538381120/', R + 'B534740422/'],
    price_note: 'No prices found: the website is down and reviews give none (November 2026).', last_checked: TODAY, items: [
      it('', '', 'Takoyaki, small (9), sauce and mayonnaise', '', 'Takoyaki', 'no', 'no', 'August and October 2026.', 'takoyaki'),
      it('', '', 'Takoyaki with salt', '', 'Takoyaki', 'no', 'no', '2025–2026.', 'takoyaki_salt'),
      it('', '', 'Six-flavor takoyaki set', '', 'Takoyaki', 'no', 'no', 'August 2026.', 'takoyaki_six'),
      it('', '', 'Pork yakisoba', '', 'Teppan', 'no', 'no', 'August 2026.', 'yakisoba'),
    ] }, {
    cuisine: 'たこ焼き、お好み焼き、焼きそば (食べログ)・出汁の効いた生地のやわらかくふわふわのたこ焼きは外はかりっと中はとろとろで、小は9個。ソースとマヨネーズ、醤油、塩、にんにく醤油、ポン酢 (2026年)。7回通う常連のお気に入りは塩と塩マヨ (2026年9月)・6種の食べ比べ (2026年8月)・お好み焼き、豚焼きそば、どて焼き (2026年)・生ビール、日本酒、焼酎 (食べログ、2026年)',
    neighborhood: '難波千日前12-2、Namba Grand Kagetsu の斜め前。Namba 駅 (Takashimaya) から Nankai 通りをまっすぐ',
    gf_detail: 'グルテンフリーではありません。たこ焼き、お好み焼き、焼きそばは小麦の生地や麺。',
    vegan_detail: 'ヴィーガンではありません。出汁の効いた生地のたこ焼き (2026年8月)。',
    notes: '[たこ焼き・千日前、NGK の斜め前のたこ焼き] Namba Grand Kagetsu の斜め前のたこ焼き店で、壁には芸人やタレントのサインがずらり。3フロアに座敷を含む席があり、公演の前後にビールと座って食べられる。たこ焼きは小ぶりでやわらかく、出汁の効いた生地でとろとろ。ソースとマヨか、7回通う常連が世界一という塩、6種の食べ比べも。お好み焼き、焼きそば、どて焼きも。2026年の口コミはおおむね満足で、味が好みでないという声、どて焼きが少ないという声も。現金のみ、喫煙可、朝から夜12時まで。',
  });
}

save();
