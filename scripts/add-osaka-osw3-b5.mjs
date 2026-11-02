// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first — lane osw3 (Tabelog id mod 4 = 2), batch 5.
//   + 粉もん處 光圀 裏なんば店 Konamon Dokoro Mitsukuni (okonomiyaki, creative monjayaki, factory-fresh yakisoba; Okonomiyaki 100 2025)
//   + 個室 和牛焼肉 吟 難波店 Gin Namba (all-private-room wagyu yakiniku on Namba HIPS 10F; Yakiniku WEST 100 2022)
//   + 作一 本店 Sakuichi Honten (Shinsaibashi kappo with a metre-long daily menu; owner 奥長弘一; 40+ years)
//   + ドゥ アッシュ Deux Ash (French courses in a former securities-company building, dessert tree; Higashi-Shinsaibashi)
//   Lane: the first four ids with id mod 4 = 2 in `queue.mjs osaka next notable 80` (2026-11-01, after batch 4):
//   27139866, 27060998, 27013934, 27005446 (last two digits 66, 98, 34, 46: each = 2 mod 4).
//   None is in data/osaka.json (grep by Tabelog id, name, romaji and address).
//   Chain check. Mitsukuni: the official site covers this one shop (its parent company is a noodle maker, unnamed).
//   Gin: one shop (gin-nanba.com). Sakuichi: 作一本店 and its sister counter 弘作一 in the same building (sakuichi.com);
//   not a chain. Deux Ash: one restaurant (french-2h.jp). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw3-5');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 粉もん處 光圀 裏なんば店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27139866/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://konamondokoro-mitsukuni.com/'; const CONCEPT = SITE + 'concept/'; const MENU = SITE + 'jp/menu/'; const INFO = SITE + 'jp/shopinfo/';
  const H = day(['11:00', '15:00'], ['17:00', '23:00']);
  put({
    id: 'osaka_konamon_mitsukuni_uranamba', name: '粉もん處 光圀 裏なんば店 (Konamon Dokoro Mitsukuni Ura Namba)', category: 'OMNI',
    lat: 34.66526, lng: 135.50415, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the okonomiyaki batter is 100% Japanese wheat (official site), the yakisoba and modern-yaki use wheat noodles, and the monjayaki is a flour batter. The menu marks allergens with pictograms, so ask staff about any side dish.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the okonomiyaki batter is made with a Kyoto-style bonito dashi (official site), and the fillings are pork, seafood, egg and cheese.',
    hours_raw: 'Daily 11:00–15:00 (last order 14:00) and 17:00–23:00 (last order 22:00); no closing day (official site; Tabelog). Lunch is limited to 90 minutes and takes no courses; when busy, dinner seats are limited to two hours (official site). Reservations online or by phone; on-the-day booking worked on a weekday (2026 reviews); in September 2026 two walk-in groups were turned away. Each guest orders at least one drink and one dish; no outside drinks (official site). Cards (VISA, Master, JCB, AMEX, Diners, Discover), IC cards, e-money and QR (official site; Tabelog). 40 seats, all at sunken horigotatsu tables (September 2026 review); a heated-tobacco-only smoking area; private hire possible (Tabelog). Upstairs on 2F, up stairs that one diner found steep (Google review quoted on the official site). Children welcome (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba Sennichimae 3-18, 中村ビル 2F, in Ura Namba — 4 min from Kintetsu Nippombashi, Nihonbashi or Nankai Namba Stn',
    cuisine: 'An "upmarket" okonomiyaki house with creative monjayaki and wine (official site; prices from the official menu) · okonomiyaki on a batter of 100% Japanese wheat with Kyoto-style bonito dashi: pork ¥1,300, squid ¥1,500, shrimp ¥1,800, scallop ¥2,000, natto ¥1,200, mozzarella ¥1,900, seafood special ¥2,700; miso-shibire and salted-shrimp "shizuku" versions · modern-yaki with fresh noodles straight from the parent company\'s noodle works, pork ¥1,600 to seafood special ¥3,000 · about ten creative monjayaki ¥2,600–¥2,800: basil Genovese with Parmigiano, white-miso with melting mochi (the house speciality), Sichuan mapo, prawn and scallop ebi-chili, beef-jaw curry, gratin, bibimbap · yakisoba on chewy fresh noodles boiled to order; beef-jaw (agosuji) yakisoba (September 2026) · side dishes for drinking: poached-egg avocado and shrimp tartare, seared cured-mackerel carpaccio, dashimaki, salmon potato salad with tenkasu, smoked daikon with cream cheese, octopus and zucchini with anchovy (2026 reviews); grilled apple with ice cream to finish · courses with all-you-can-drink (2026 reviews) · every KENZO ESTATE wine plus about 20 others; Japanese whiskies such as 響, 山崎 and 白州',
    website: SITE, gmaps: gm('粉もん處 光圀 裏なんば店'), menu_url: MENU,
    notes: "[Okonomiyaki · Ura Namba, okonomiyaki and creative monja with wine] Up a flight of stairs in Ura Namba, a calm Japanese room of sunken horigotatsu tables that bills itself as an \"upmarket\" okonomiyaki house and, as one diner found, is one of the few that take bookings. The head chef's okonomiyaki uses 100% Japanese wheat and a Kyoto-style bonito dashi and comes fluffy, loaded with shrimp and scallops; the yakisoba and modern-yaki use fresh noodles from the noodle works behind the shop, which several diners rate as the real star. The monjayaki go far from the classic, cooked for you at the table: basil Genovese, white miso with mochi, mapo, ebi-chili, bibimbap. Plenty of side dishes for drinking, all of the KENZO ESTATE wines and Japanese whisky. Tabelog Okonomiyaki 100 in 2025. Book ahead (walk-ins were turned away on a September 2026 night); open daily for lunch and dinner to 23:00.",
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed; 料理長 on the official site)'], origin: null,
      background: 'Per the official site: the head chef spent years eating around restaurants before deciding to cook, and worked out the batter and the cooking through trial and error; the yakisoba noodles come from the noodle works that is the shop\'s parent company. The site stocks every KENZO ESTATE wine. Tabelog Okonomiyaki 100, 2025. No opening date or owner is given.',
      philosophy: 'A "one rank above" okonomiyaki house: ingredients, technique and taste pursued to their limit (official site).', specialty: 'Seafood okonomiyaki; creative monjayaki; fresh-noodle yakisoba.',
      anecdotes: [
        { text: '"On this day alone, two groups were turned away." — September 2026, mozzarella okonomiyaki.', source: R + 'B535440274/' },
        { text: '"The okonomiyaki was incredibly fluffy and delicious, but the yakisoba was the real star—thick noodles with a chewy texture" — October 2026, a weekday walk-in.', source: R + 'B537794395/' },
        { text: '"It felt like there were many international customers." — October 2026.', source: R + 'B536790609/' },
      ],
      japanese_sources_summary: '公式サイト (konamondokoro-mitsukuni.com): 粉もん處 光圀 裏なんば店、大阪難波・千日前にあるワンランク上のお好み焼き店、料理長が試行錯誤を重ねた特製レシピ、国産小麦を100%使用、香り豊かな京風の鰹出汁、グラタン・黒ごま坦々・ジェノベーゼなど約10種類のもんじゃ焼き、店舗の母体である製麺所から直送の焼きそば専用の生麺、ケンゾーエステートのワインを全種類、響・山崎・白州、掘りごたつ式のテーブル席、難波千日前3-18 中村ビル 2F、11:00-15:00 (L.O.14:00)・17:00-23:00 (L.O.22:00)、ランチはコース不可、定休日なし、カード・電子マネー・交通系IC可。メニュー: 1人1ドリンク1フード、日本円かカード、混雑時は2時間、ランチは90分制、アレルギーのピクトグラム、ぶた玉1,300円、えび玉1,800円、ほたて玉2,000円、モッツァレラ玉1,900円、海鮮スペシャル2,700円、生麺モダン ぶた1,600円〜海鮮スペシャル3,000円、ジェノベーゼもんじゃ2,700円、とろけるお餅の白味噌みつくにもんじゃ2,800円、四川麻婆もんじゃ2,600円。食べログ (店舗会員): お好み焼き 百名店 2025、40席、加熱式たばこのみの喫煙所、貸切可、子ども可。口コミ(2026年9月〜10月): 予約がおすすめ、全席掘りごたつ、海鮮たっぷり、ふわふわの生地、太くもちもちの焼きそば、もんじゃは店の人が焼く、ジェノベーゼ、コースと飲み放題、海外からの客も多い。',
      confidence: 'medium', sources: [SITE, CONCEPT, MENU, INFO, TB, R + 'B535233241/', R + 'B535440274/', R + 'B535578686/', R + 'B535618400/', R + 'B535905262/', R + 'B536401328/', R + 'B536790609/', R + 'B536914800/', R + 'B537448966/', R + 'B537794395/', R + 'B537969407/', R + 'B538260427/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'The official site has an English page; staff cook the monja at the table; many overseas guests (October 2026).' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Official menu: allergen pictograms (egg, milk, wheat, buckwheat, shrimp, crab, peanut and others) shown per dish.'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前3-18 中村ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (2026 notices) and the shop-maintained Tabelog listing; reviews dated through October 2026.' },
    pin_source: `GSI 大阪府大阪市中央区難波千日前三丁目18番 (go), 8m from the Tabelog point (${TB}: 34.665297, 135.504230); pinned on GSI because the Tabelog point sits 6m from Sumibi Yakitori Kamojin (osaka_sumibi_yakitori_kamojin_namba, address_ja "難波千日前3-19", next street number), and the GSI point keeps 11m between them; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Prices from the official menu (read November 2026; the site notes prices may change).', last_checked: TODAY, items: [
      it('ぶた玉', '', 'Pork okonomiyaki', '¥1,300', 'Okonomiyaki', 'no', 'no', 'Official menu.', 'buta_tama'),
      it('お好み焼き 海鮮スペシャル', '', 'Seafood special okonomiyaki', '¥2,700', 'Okonomiyaki', 'no', 'no', 'Official menu; September 2026.', 'seafood_special'),
      it('モッツァレラ玉', '', 'Mozzarella okonomiyaki', '¥1,900', 'Okonomiyaki', 'no', 'no', 'Official menu; September 2026.', 'mozzarella'),
      it('生麺モダン ぶた', '', 'Fresh-noodle modern-yaki, pork', '¥1,600', 'Okonomiyaki', 'no', 'no', 'Official menu; September 2026.', 'modern_pork'),
      it('バジル香る贅沢ジェノベーゼもんじゃ', '', 'Basil Genovese monjayaki with Parmigiano', '¥2,700', 'Monjayaki', 'no', 'no', 'Official menu; September–October 2026.', 'genovese_monja'),
      it('とろけるお餅の白味噌みつくにもんじゃ', '', 'White-miso monjayaki with melting mochi (house speciality)', '¥2,800', 'Monjayaki', 'no', 'no', 'Official menu.', 'shiromiso_monja'),
    ] }, {
    cuisine: 'ワンランク上のお好み焼き店で、創作もんじゃとワインも (公式サイト、値段は公式メニュー)・お好み焼きは国産小麦100%の生地に京風の鰹出汁: ぶた玉1,300円、いか玉1,500円、えび玉1,800円、ほたて玉2,000円、なっとう玉1,200円、モッツァレラ玉1,900円、海鮮スペシャル2,700円、味噌しびれ玉、塩エビしずく玉・母体の製麺所から直送の生麺のモダン焼き、ぶた1,600円〜海鮮スペシャル3,000円・約10種類の創作もんじゃ2,600〜2,800円: パルミジャーノをかけたジェノベーゼ、とろけるお餅の白味噌みつくにもんじゃ (名物)、四川麻婆、大海老と帆立のエビチリ、牛アゴスジカレー、グラタン、ビビンバ・注文ごとに茹でるもちもちの生麺の焼きそば、牛アゴスジの焼きそば (2026年9月)・お酒に合う一品: 温玉アボカドと海老のタルタル、炙り〆鯖のカルパッチョ、だし巻き、天かす入りのサーモンのポテトサラダ、燻製大根とクリームチーズ、タコとズッキーニのアンチョビ炒め (2026年の口コミ)、締めは林檎の鉄板焼きアイス添え・飲み放題つきのコース (2026年の口コミ)・ケンゾーエステートのワインを全種類と約20種類のワイン、響、山崎、白州などのジャパニーズウイスキー',
    neighborhood: '難波千日前3-18 中村ビル 2F、Ura Namba。Kintetsu Nihonbashi 駅、Nihonbashi 駅、Nankai Namba 駅から徒歩4分',
    gf_detail: 'グルテンフリーではありません。お好み焼きの生地は国産小麦100% (公式サイト)、焼きそばとモダン焼きは小麦の麺、もんじゃは粉の生地。メニューにはアレルギーのピクトグラムがあるので、一品料理は店の人に確認して。',
    vegan_detail: 'ヴィーガンではありません。お好み焼きの生地には京風の鰹出汁 (公式サイト)、具は豚、魚介、卵、チーズ。',
    notes: '[お好み焼き・Ura Namba、ワインと楽しむお好み焼きと創作もんじゃ] Ura Namba の階段を上がった2階、掘りごたつのテーブルが並ぶ落ち着いた和の店。「ワンランク上のお好み焼き店」をうたい、予約できる数少ないお好み焼き屋でもある。料理長のお好み焼きは国産小麦100%と京風の鰹出汁で、ふわふわの生地にエビやホタテがたっぷり。焼きそばとモダン焼きは母体の製麺所の生麺で、こちらが主役という声も多い。もんじゃは定番から離れた創作もので、店の人がテーブルで焼く: ジェノベーゼ、お餅の白味噌、麻婆、エビチリ、ビビンバ。お酒に合う一品も多く、ケンゾーエステートのワインは全種類、ジャパニーズウイスキーも。食べログ お好み焼き 百名店 2025。予約がおすすめ (2026年9月には飛び込みの2組が断られた)。毎日、昼と夜23時まで。',
  });
}

// ================================================================ 個室 和牛焼肉 吟 難波店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27060998/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://gin-nanba.com/'; const MENU = SITE + 'menu/'; const RENEW = SITE + 'news/1364';
  const W = day(['17:00', '23:00']); const E = day(['16:00', '23:00']);
  put({
    id: 'osaka_wagyu_yakiniku_gin_namba', name: '個室 和牛焼肉 吟 難波店 (Gin Namba)', category: 'OMNI',
    lat: 34.667654, lng: 135.500746, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The meat comes with the house-made tare and the yukhoe with a sauce; salt-grilled tongue and plain rice are the simplest, but nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu yakiniku restaurant; the courses are built on beef, with kimchi, namul and salad as starters.',
    hours_raw: 'Mon–Fri 17:00–23:00; Sat–Sun 16:00–23:00; last orders food 22:00, drinks 22:30 (official site). Tabelog adds a weekend and holiday lunch from 12:00; closed 31 December–1 January (Tabelog). Reservations; a same-day cancellation fee applies (Tabelog); one diner found private rooms reserved for course bookings (October 2026). A service charge on à la carte orders, not on courses (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), IC cards, e-money and QR including Alipay and WeChat Pay (Tabelog). 80 seats in 25 private rooms for 2 to 16, some with sofas or sunken horigotatsu, with night views; non-smoking (Tabelog). On the 10th floor of Namba HIPS, linked underground to Namba Stn exit 15-B (Tabelog; official site). Opened 15 April 2015; renewed 10 June 2025 (Tabelog; official site).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba 1-8-16, Namba HIPS 10F — linked to Namba Stn exit 15-B (Midosuji Line) without going outside',
    cuisine: 'Private-room yakiniku of A5 kuroge wagyu and Kobe beef, aiming to be Japan\'s best value (official site) · A5 kuroge wagyu from ¥680 (¥748 with tax) (official site) · courses with tax: the Tuesday–Thursday "彩" course of 10 dishes ¥5,000 (signature fresh kimchi, two namul, salad, raw tripe and heart sashimi, freshly cooked rice, salted tongue, two wagyu cuts of the day, Kobe beef sukiyaki kalbi, pork skirt, ice cream); "和" course ¥6,000 with seared wagyu sushi, three wagyu cuts, Kobe beef dashi-shabu kalbi, skirt, horumon and yukgaejang gukbap; "竹" course ¥7,000 with top tongue and wagyu loin; all-you-can-drink +¥2,000 (official site) · à la carte, licensed to serve raw meat: wagyu mille-feuille yukhoe ¥1,078, three kimchi ¥858, premium thick-cut tongue (limited) ¥2,178, A5 flap meat ¥1,078 (September 2026); Kobe beef uchi-harami; wagyu and ikura on rice cooked to order in its own pot · Beam highball ¥480, draft beer ¥580 (2026)',
    website: SITE, gmaps: gm('個室 和牛焼肉 吟 難波'), menu_url: MENU,
    notes: "[Yakiniku · Namba, private-room wagyu above the station] On the 10th floor of Namba HIPS, reached from Namba station without going outside, 25 private rooms of two to sixteen seats, many with a night view. The pitch is A5 kuroge wagyu and Kobe beef at low prices (cuts from ¥680), and a raw-meat licence for its signature wagyu mille-feuille yukhoe, layered with green onion and mixed with egg yolk. Rice is cooked to order pot by pot, best with wagyu and ikura on top. Weeknight courses start at ¥5,000 for ten dishes (Tuesday to Thursday), with all-you-can-drink for ¥2,000 more. Diners in 2026 praise the value and the privacy for dates and celebrations; one found the grilled cuts only average and the room dark. Renewed in June 2025. Tabelog Yakiniku WEST 100 in 2022.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per the official site: aims to be the best-value yakiniku in Japan for A5 kuroge wagyu and Kobe beef; licensed to serve raw meat; rice cooked to order in individual pots; renewed and reopened on 10 June 2025. Opened 15 April 2015 (Tabelog). Tabelog Yakiniku WEST 100, 2022. No owner or chef is named.',
      philosophy: null, specialty: 'Wagyu mille-feuille yukhoe; thick-cut tongue; pot-cooked rice with wagyu and ikura.',
      anecdotes: [
        { text: '"An unusual combination was the ikura (salmon roe) with wagyu rice, which surprisingly worked well together." — October 2026, a first visit.', source: R + 'B536697691/' },
        { text: '"It seems that the private room can only be reserved by those who order the course meal." — October 2026.', source: R + 'B538105045/' },
        { text: '"As for the grilled meats, I found them to be just average." — October 2026.', source: R + 'B537768691/' },
      ],
      japanese_sources_summary: '公式サイト (gin-nanba.com): 個室 和牛焼肉 吟〜ぎん〜、難波1-8-16 難波HIPS 10F、なんば駅15B出口すぐ (地下鉄連絡通路直結)、月〜金 17:00〜23:00、土日 16:00〜23:00 (料理L.O.22:00、ドリンクL.O.22:30)、2025年6月10日リニューアルOPEN、A5ランク黒毛和牛が680円 (税込748円) から、日本一お値打ちを目指す神戸牛、名物のタン、生食許可店の和牛ミルフィーユユッケ、一釜ずつ炊き上げる贅沢炊き立て銀シャリ。お品書き: 火〜木限定の彩コース5,000円 (吟名物 生キムチ、ナムル2種盛り、本日のサラダ、生せんまい・ハツ刺し、炊き立て吟シャリ、牛タン塩、本日の和牛2種、神戸牛 吟 特選すき焼きカルビ、りんごハラミ (豚)、本日のアイス)、和コース6,000円 (和牛赤身炙り寿司、神戸牛出汁しゃぶカルビ、ユッケジャンクッパなど)、竹コース7,000円、飲み放題はプラス2,000円。食べログ (店舗会員): 焼肉・ホルモン・ステーキ、全室個室 (25室、2〜16名)、80席、夜景、禁煙、別途サービス料 (コースは不要)、当日キャンセル料、土日祝はランチも、2015年4月15日オープン、焼肉 WEST 百名店 2022。口コミ(2026年9月〜10月): 上タン、和牛ミルフィーユユッケ、和牛といくらの吟シャリ、コースの値打ち、個室はコース予約のみという声、焼いた肉はふつうという声も。',
      confidence: 'medium', sources: [SITE, MENU, RENEW, TB, R + 'B535799944/', R + 'B536264596/', R + 'B536694370/', R + 'B536697691/', R + 'B537102441/', R + 'B537662059/', R + 'B537688545/', R + 'B537768691/', R + 'B537854193/', R + 'B538060638/', R + 'B538105045/', R + 'B538232765/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses in private rooms; book online or by phone. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-8-16 なんばHIPS 10F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (June 2025 renewal notice, current hours) and the shop-maintained Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目8番16号 (go) 22m. Same building (Namba HIPS) as Kamikakushi (osaka_men_to_umami_no_kamikakushi, address_ja "難波1-8-16 ナンバヒップス B1F"), pinned 9m away, so no offset; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, R + 'B535799944/'],
    price_note: 'Courses from the official menu (tax included; read November 2026); à la carte from a September 2026 review.', last_checked: TODAY, items: [
      it('彩コース', '', '彩 course, 10 dishes (Tuesday–Thursday)', '¥5,000', 'Courses', 'ask', 'no', 'Official menu; October 2026.', 'irodori'),
      it('和コース', '', '和 course, 11 dishes', '¥6,000', 'Courses', 'ask', 'no', 'Official menu; all-you-can-drink +¥2,000.', 'wa_course'),
      it('和牛ミルフィーユユッケ', '', 'Wagyu mille-feuille yukhoe (raw)', '¥1,078', 'À la carte', 'ask', 'no', 'Official site (name); price September 2026.', 'yukhoe'),
      it('', '', 'Premium thick-cut tongue (limited)', '¥2,178', 'À la carte', 'ask', 'no', 'September 2026.', 'thick_tongue'),
      it('', '', 'Three kinds of kimchi', '¥858', 'À la carte', 'ask', 'ask', 'September 2026.', 'kimchi'),
    ] }, {
    cuisine: 'A5の黒毛和牛と神戸牛の個室焼肉、日本一お値打ちを目指す (公式サイト)・A5ランク黒毛和牛は680円 (税込748円) から (公式サイト)・コース (税込): 火〜木限定の彩コース10品5,000円 (吟名物 生キムチ、ナムル2種盛り、本日のサラダ、生せんまい・ハツ刺し、炊き立て吟シャリ、牛タン塩、本日の和牛2種、神戸牛 吟 特選すき焼きカルビ、りんごハラミ (豚)、本日のアイス)、和コース6,000円 (和牛赤身炙り寿司、本日の和牛3種、神戸牛出汁しゃぶカルビ、上ハラミ、本日のホルモン、ユッケジャンクッパ)、竹コース7,000円、飲み放題はプラス2,000円 (公式サイト)・生食許可店の一品: 和牛ミルフィーユユッケ1,078円、キムチ3種858円、数量限定の上タン厚切り2,178円、A5和牛の flap meat 1,078円 (2026年9月)、神戸牛のウチハラミ、一釜ずつ炊く吟シャリに和牛といくら・Beam のハイボール480円、生ビール580円 (2026年)',
    neighborhood: '難波1-8-16 なんばHIPS 10F。地下鉄なんば駅15B出口から地下で直結',
    gf_detail: '要確認。グルテンの情報なし。肉は自家製のタレ、ユッケもタレで食べる。牛タン塩と白いご飯がいちばんシンプルだが、グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。和牛の焼肉店で、コースは牛肉が中心、前菜にキムチ、ナムル、サラダ。',
    notes: '[焼肉・難波、駅の上の個室で和牛] なんばHIPS の10階、なんば駅から外に出ずに行ける。2人から16人までの個室が25室、夜景が見える部屋も多い。A5の黒毛和牛と神戸牛を安く (680円から) 出すのが売りで、生食許可店ならではの名物の和牛ミルフィーユユッケは、肉とねぎを重ねて卵黄と混ぜる。ご飯は注文ごとに一釜ずつ炊き、和牛といくらをのせて。平日の火〜木は10品5,000円のコース、飲み放題はプラス2,000円。2026年の口コミでは値打ちと個室の落ち着きでデートやお祝いに好評、焼いた肉はふつう、部屋が暗いという声も。2025年6月にリニューアル。食べログ 焼肉 WEST 百名店 2022。',
  });
}

// ================================================================ 作一 本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27013934/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://sakuichi.com/'; const HON = SITE + 'sakuichi-honten'; const COURSE = SITE + 'course'; const KOU = SITE + 'kousakuichi';
  const HOURS = SITE + 'archives/5167';
  const H = day(['17:00', '22:00']);
  put({
    id: 'osaka_sakuichi_honten', name: '作一 本店 (Sakuichi Honten)', category: 'MOM_AND_POP',
    lat: 34.674024, lng: 135.499275, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. A kappo built around fish: sashimi, grilled fish and plain-cooked seasonal produce are on the long à la carte menu, but tempura, fried fugu and katsu are wheat, and soy sauce and dashi-based seasonings are used throughout.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-led Japanese kitchen with dashi-based dishes; vegetables appear mainly as seasonal sides.',
    hours_raw: 'Mon–Sat from 17:00; the official site gives 17:00–22:00 with last orders (drinks included) at 21:30 since March 2022, while Tabelog lists 17:00–24:00. Closed Sunday and the third Monday of each month (official notice, from February 2024). Reservations; walk-ins possible (April 2026). Cards (VISA, Master, JCB, AMEX, Diners) and e-money; no QR; no service charge (Tabelog). 40 seats on the 3rd and 4th floors: an 8-seat counter, private rooms for 2 to 8 including horigotatsu rooms; smoking allowed on the 3rd floor and in a two-person room on the 4th (Tabelog). The entrance is on the 4th floor (September 2025). The sister counter 弘作一 is on the ground floor of the same building (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishi-Shinsaibashi 1-10-3, エースビル 3F・4F, behind the Nikko Hotel Osaka (September 2025 review) — 1 min from Shinsaibashi Stn exit 8',
    cuisine: 'Osaka kappo where you choose from a handwritten menu of the day\'s produce, over a metre long (March 2026; "about 1.8 metres", September 2025), and ask for it cooked as you like; a course from ¥15,000 (8–9 dishes: starter, sashimi, simmered, vinegared, grilled or fried, dressed, hassun, seasonal rice or kamameshi, dessert) (official site) · spring 2026: Yura purple sea urchin, conger eel and octopus from Himeji, bamboo shoots, green peas, sea-bream roe, young ayu from Lake Biwa, negi-maguro, firefly-squid risotto (March 2026) · autumn 2025: sashimi platters of about ten fish, matsutake from a basket to choose, grilled sea bream, dobin-mushi, Iwaya kisu tempura, akagai nuta, funazushi, mackerel bōzushi, fried fugu, sea-bream rice, beef fillet as steak or katsu · in season on the site (November 2026): roe-filled shishamo dried overnight, autumn mackerel bōzushi · diners report ¥10,000–¥49,999 a head',
    website: SITE, gmaps: gm('作一 本店 西心斎橋'), menu_url: COURSE,
    notes: "[Kappo · Shinsaibashi, a long-running Osaka kappo with a metre-long menu] On the upper floors of a building behind the Nikko Hotel Osaka, a quiet kappo that has cooked in Minami for more than 40 years and moved here from 三津寺筋 in October 2002. The rooms, designed by 喜多俊之 of IDKデザイン on a theme of medieval Naniwa, run from an eight-seat counter where the owner cooks to private rooms for two to eight. The joy is the handwritten menu of the day, over a metre of washi listing seasonal fish and vegetables, from which you choose and say how you would like it cooked: Yura sea urchin, Biwa ayu, firefly-squid risotto in spring; matsutake picked from a basket, dobin-mushi, mackerel bōzushi in autumn. A course runs from ¥15,000. Long a favourite for business dinners; expect ¥20,000–¥30,000 a head. Closed Sundays.",
    chef_bio: { chef_name: '奥長弘一 (as written; no romaji given)', roles: ['主人 (owner) of 作一 (official notices, signed 主人 奥長弘一)', 'The owner cooks at the counter (official site: カウンターでは店主みずからが…腕を振るいます)', 'Sister counter 弘作一 managed by 河村幸貴 (official site)'], origin: null,
      background: 'Per the official site: Sakuichi has traded for more than 40 years and now has two shops in one building, 作一本店 on the 3rd and 4th floors and 弘作一 on the ground floor (renewed on 12 June 2020); the main shop moved from 三津寺筋 in October 2002, with interiors by 喜多俊之 of IDKデザイン on the theme of "medieval Naniwa"; the owner cooks at the counter with the season\'s produce. A March 2026 diner on a fifth visit, and others since 2022, describe choosing dishes and cooking styles with the chef across the counter.',
      philosophy: '"作一に行けば、本物が食べられる" — go to Sakuichi and you eat the real thing (official site tagline); a quiet place to ease the day\'s fatigue (official site).', specialty: 'Seasonal fish chosen from the daily menu; sashimi platters; mackerel bōzushi.',
      anecdotes: [
        { text: '"The menu, written on a washi paper over a meter long, lists seasonal ingredients alongside classic dishes, making it a joy to discuss and decide what to eat today." — March 2026, a fifth visit.', source: R + 'B431000691/' },
        { text: '"I have fond memories of this place from my days working at a major securities firm, where I visited many times for business dinners." — August 2026.', source: R + 'B533927173/' },
        { text: '"I was allowed to choose from a basket of Iwate matsutake mushrooms" — October 2025.', source: R + 'B515124375/' },
      ],
      japanese_sources_summary: '公式サイト (sakuichi.com): 作一、日本料理、作一に行けば、本物が食べられる、40年以上営業、同じビルに2つの店、作一本店 (3・4階、完全個室、4階2名・4名、3階6名・8名)、弘作一 (1階、2020年6月12日新装開店、店長 河村幸貴、主人 奥長弘一)、2002年10月に三津寺筋より移店、IDKデザインの喜多俊之さんのコンセプトは「日本、浪速の中世」、カウンターでは店主みずからが四季折々の旬の素材で腕を振るう、西心斎橋1-10-3 エースビル3・4階、2022年3月22日から17時〜22時 (L.O.21時30分)、2024年2月から定休日は日曜日と第三月曜日、コース15,000円〜 (前菜、お造り、煮物、酢の物、焼き物又は揚げ物、和え物、八寸盛り、季節のごはん・釜飯、デザート)、季節のおすすめ (2026年11月): 子持ち本ししゃも一夜干し、秋サバの棒ずし。食べログ (店舗会員): 日本料理、40席 (カウンター8、個室)、3階と4階の2名個室は喫煙可、カード・電子マネー可、サービス料なし。口コミ(2025年9月〜2026年8月): 1メートル以上の和紙のお品書き、好きな素材と調理法を選べる、お造りの盛り合わせ、松茸を籠から選ぶ、土瓶蒸し、鯖の棒ずし、ふぐの唐揚げ、接待に、Nikko Hotel Osaka の裏、入口は4階。',
      confidence: 'medium', sources: [SITE, HON, COURSE, KOU, HOURS, TB, R + 'B431000691/', R + 'B491534648/', R + 'B513467749/', R + 'B514990404/', R + 'B515124375/', R + 'B516683962/', R + 'B516721814/', R + 'B519473626/', R + 'B526358289/', R + 'B530119670/', R + 'B533927173/', R + 'B534812251/'] },
    cultural_comfort: { level: 'japanese', note: 'A long handwritten Japanese menu; order by talking with the chef or staff. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋1-10-3 エースビル 3F・4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (seasonal posts dated November 2026) and the shop-maintained Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋一丁目10番3号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [COURSE, R + 'B431000691/', R + 'B514990404/'],
    price_note: 'Course price from the official site; à la carte dishes from 2025–2026 reviews, unpriced (the menu changes daily).', last_checked: TODAY, items: [
      it('コース', '', 'Course, 8–9 dishes', '¥15,000', 'Course', 'ask', 'no', 'Official site (from ¥15,000).', 'course'),
      it('', '', 'Sashimi platter of the day', '', 'À la carte', 'ask', 'no', '2025–2026 reviews.', 'sashimi'),
      it('秋サバの棒ずし', '', 'Autumn mackerel bōzushi', '', 'À la carte', 'ask', 'no', 'Official site (November 2026); October–November 2025 reviews.', 'saba_bozushi'),
      it('子持ち本ししゃも一夜干し', '', 'Roe-filled shishamo, dried overnight', '', 'À la carte', 'ask', 'no', 'Official site (November 2026).', 'shishamo'),
    ] }, {
    cuisine: 'その日の素材を並べた1メートルを超える手書きのお品書き (2026年3月。2025年9月の口コミでは約1.8メートル) から選び、好みの調理法を頼める大阪の割烹。コースは15,000円から (8〜9品: 前菜、お造り、煮物、酢の物、焼き物又は揚げ物、和え物、八寸盛り、季節のごはん・釜飯、デザート) (公式サイト)・2026年の春: Yura の紫ウニ、Himeji の穴子とタコ、筍、えんどう豆、鯛の子、Lake Biwa の稚鮎、ねぎまぐろ、ホタルイカのリゾット (2026年3月)・2025年の秋: 10種類ほどのお造り、籠から選ぶ松茸、鯛の塩焼き、土瓶蒸し、Iwaya のキスの天ぷら、赤貝のぬた、鮒寿司、鯖の棒ずし、ふぐの唐揚げ、鯛めし、牛ヒレはステーキかカツで・サイトの季節のおすすめ (2026年11月): 子持ち本ししゃも一夜干し、秋サバの棒ずし・口コミの予算は1人10,000〜49,999円',
    neighborhood: '西心斎橋1-10-3 エースビル 3F・4F、Nikko Hotel Osaka の裏。Shinsaibashi 駅8番出口から徒歩1分',
    gf_detail: '予約時に要確認。グルテンの情報なし。魚が中心の割烹で、長いお品書きにはお造り、焼き魚、旬の素材をそのまま調理したものもあるが、天ぷら、ふぐの唐揚げ、カツは小麦、醤油や出汁の味付けも多い。',
    vegan_detail: 'ヴィーガンではありません。魚が中心で出汁を使う料理が多く、野菜は主に季節の脇役。',
    notes: '[割烹・心斎橋、1メートルのお品書きの老舗割烹] Nikko Hotel Osaka の裏のビルの上の階、ミナミで40年以上続き、2002年10月に三津寺筋から移った静かな割烹。IDKデザインの喜多俊之さんが「日本、浪速の中世」をテーマに手がけた店内は、主人が腕を振るう8席のカウンターから2〜8名の個室まで。楽しみはその日の手書きのお品書きで、和紙に1メートル以上、旬の魚や野菜が並び、選んで好みの調理法を頼める。春は Yura のウニ、Lake Biwa の稚鮎、ホタルイカのリゾット、秋は籠から選ぶ松茸、土瓶蒸し、鯖の棒ずし。コースは15,000円から。昔から接待の店として愛され、予算は1人2〜3万円ほど。日曜休み。',
  });
}

// ================================================================ ドゥ アッシュ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27005446/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.french-2h.jp/'; const LUNCH = SITE + 'lunch.php'; const DINNER = SITE + 'dinner.php'; const ACCESS = SITE + 'access.html';
  const L = ['11:30', '15:00']; const D = ['17:30', '22:30']; const H = day(L, D);
  put({
    id: 'osaka_deux_ash_higashishinsaibashi', name: 'ドゥ アッシュ (Deux Ash)', category: 'OMNI',
    lat: 34.672923, lng: 135.504402, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. The listing asks guests to state allergies and dislikes in advance and says same-day requests may not be possible. Courses include homemade bread, granita, and a dessert tree; nothing is described as gluten-free.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask when booking. Tabelog lists vegetarian options, and the kitchen adjusted a main course for a guest who does not eat much meat (August 2026); no vegan course is listed.',
    hours_raw: 'Tue–Sun lunch 11:30–15:00 (last order 13:30), dinner 17:30–22:30 (last order 21:00); closed Monday, and from the third Monday to Wednesday of each month (official site). Tabelog gives last orders of 13:00 for lunch food and 20:00 for dinner food. Courses only; prices include tax and the 10% service charge (official site; Tabelog). Reservations; state allergies and dislikes (oysters, raw fish, shellfish, foie gras) in advance (Tabelog). At least one drink per guest (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 36 seats with a counter, parties up to 24, private rooms for 4 to 20 with no room charge but course minimums (lunch from ¥7,800, dinner from ¥12,800) (Tabelog). Children only in private rooms; a children\'s meal ¥2,800 booked the day before (Tabelog). Up to three hours in the ABC Motor Pool across from the entrance, north of Minami Elementary School (Tabelog). Non-smoking (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-7-18, near Minami Elementary School (Tabelog parking note) — 5–7 min from Shinsaibashi Stn exits 5 and 6',
    cuisine: 'French courses with a dessert tree (prices include tax and service; official site, read November 2026) · lunch: Menu Avantarge, 8 dishes ¥5,900; Menu Luxueux, 11 dishes ¥7,800; Menu Prestige, 11 dishes with lobster and beef fillet ¥13,600 · dinner: Menu Saison, 12 dishes ¥9,200; Menu Gastoronomie ¥12,800; Menu Dégustation, all left to the chef ¥16,500; Menu Spécialité de Chef ¥22,000 (book two days ahead) · an August 2026 Avantarge: salmon tartare with summer vegetables, corn parfait, Spanish mackerel with crisp skin, granita, a choice of two mains, corn rice, house-baked breads, the dessert tree (any of eight desserts), coffee or tea, petits fours; beef cheek (October 2026), lamb carved at the table (September 2026), sanma mixed rice (October 2026) · a sommelier and wine pairings · birthday plates; a ¥2,800 children\'s meal (shrimp tempura or pasta)',
    website: SITE, gmaps: gm('ドゥ アッシュ 東心斎橋'), menu_url: DINNER,
    notes: "[French · Higashi-Shinsaibashi, courses in a former securities office] Through a heavy door, past the old vault door kept from the building's days as a securities company, a high-ceilinged room with a single tree reaching up from a stone floor laid like a river, and private rooms on a mezzanine. The courses change with the season, from an eight-dish lunch at ¥5,900 to a chef's surprise menu at ¥16,500, all with tax and service included, and end at the dessert tree, where you pick from about eight desserts, as many as you like (one diner who was full got tiny portions of each). Service is warm and funny: diners in 2026 describe staff and a sommelier who joke, remember returning guests, cut the lamb at the table and explain each dish. A favourite for birthdays and family celebrations; children are welcome in private rooms. Closed Mondays and the third Monday to Wednesday.",
    chef_bio: { chef_name: null, roles: ['Chef (料理長, unnamed; official site)', 'Manager and sommelier (unnamed; 2026 reviews)'], origin: null,
      background: 'Per the official site, run under the name Cabinet2\'H (copyright 2005–2009); courses only, prices including service and tax; staff recruitment notice and an Instagram account (site news, March 2026). An October 2026 diner says the building was formerly a securities company, its vault door still at the entrance. The listing is shop-maintained (corporate member) and says the kitchen is particular about vegetables and fish.',
      philosophy: null, specialty: 'Seasonal French courses; the dessert tree.',
      anecdotes: [
        { text: '"I was greeted by the imposing vault door, a remnant of its former life as a securities company." — October 2026.', source: R + 'B536977593/' },
        { text: '"I wanted to try them all, but when I mentioned I was full, [the staff] kindly served me very small portions!" — September 2026, weekday lunch, on the dessert selection.', source: R + 'B536179169/' },
        { text: '"I was informed that my sister isn\'t very fond of meat, so [the kitchen] prepared a low-temperature cooked chicken dish [instead]." — August 2026, a ¥5,900 lunch for a birthday.', source: R + 'B534467473/' },
      ],
      japanese_sources_summary: '公式サイト (french-2h.jp): ドゥアッシュ、東心斎橋1-7-18、地下鉄御堂筋線心斎橋駅5・6出口から徒歩7分、提携駐車場あり、ランチ11:30〜15:00 (L.O.13:30)、ディナー17:30〜22:30 (L.O.21:00)、定休日は月曜日と第3月曜日〜水曜日。ランチ: Menu Avantarge 8皿5,900円、Menu Luxueux 11皿7,800円、Menu Prestige 11皿13,600円 (魚料理はオマール海老、肉料理は牛フィレ肉)、料理とデザート、食後のお飲物と小菓子。ディナー: Menu Saison 12皿9,200円、Menu Gastoronomie 12皿12,800円、Menu Dégustation 16,500円 (料理長に全ておまかせ)、Menu Spécialité de Chef 22,000円 (前々日までに予約)、価格はすべてサービス料、消費税込み。デザートツリーからお好みのデザートを。2026年3月にお休みのお知らせ、Instagram開始。食べログ (店舗会員): フレンチ・洋食、アレルギーや苦手な食材 (牡蠣、生魚、貝、フォアグラ) は事前に、36席、個室 (4〜20名)、子どもは個室のみ、お子様料理2,800円、1人1ドリンク、サービス料10%込み、禁煙、ベジタリアンメニューあり、ソムリエ。口コミ(2026年8月〜10月): 証券会社だった建物の金庫の扉、天井まで伸びる木、川のような石の床、中二階の個室、デザートを好きなだけ、肉が苦手な人に低温調理の鶏、ラムをテーブルで切り分ける、楽しいスタッフ、誕生日のプレート。',
      confidence: 'medium', sources: [SITE, LUNCH, DINNER, ACCESS, TB, R + 'B534168281/', R + 'B534467473/', R + 'B535094777/', R + 'B535530493/', R + 'B536179169/', R + 'B536409003/', R + 'B536680399/', R + 'B536792545/', R + 'B536977593/', R + 'B537378723/', R + 'B538235832/', R + 'B538465759/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses explained dish by dish; book ahead and give allergies in advance. No English evidence found.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Tabelog listing: state food allergies or dislikes (oysters, raw fish, shellfish, foie gras) in advance; same-day requests may not be possible.', 'August 2026 review: a main course was changed for a guest who does not eat much meat.'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-7-18',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (March 2026 notice) and the shop-maintained Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目7番18号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [LUNCH, DINNER],
    price_note: 'Course prices from the official site (tax and service included; read November 2026).', last_checked: TODAY, items: [
      it('Menu Avantarge', '', 'Lunch course, 8 dishes', '¥5,900', 'Lunch', 'ask', 'ask', 'Official site; August 2026.', 'avantarge'),
      it('Menu Luxueux', '', 'Lunch course, 11 dishes', '¥7,800', 'Lunch', 'ask', 'ask', 'Official site.', 'luxueux'),
      it('Menu Saison', '', 'Dinner course, 12 dishes', '¥9,200', 'Dinner', 'ask', 'ask', 'Official site.', 'saison'),
      it('Menu Gastoronomie', '', 'Dinner course Gastronomie, 12 dishes', '¥12,800', 'Dinner', 'ask', 'ask', 'Official site (spelled as written).', 'gastronomie'),
      it('Menu Dégustation', '', 'Chef\'s surprise dinner course', '¥16,500', 'Dinner', 'ask', 'ask', 'Official site.', 'degustation'),
    ] }, {
    cuisine: 'デザートツリーで締めるフランス料理のコース (値段は税・サービス料込み、公式サイト、2026年11月に確認)・ランチ: Menu Avantarge 8皿5,900円、Menu Luxueux 11皿7,800円、オマール海老と牛フィレ肉の Menu Prestige 11皿13,600円・ディナー: Menu Saison 12皿9,200円、Menu Gastoronomie 12,800円、料理長に全ておまかせの Menu Dégustation 16,500円、Menu Spécialité de Chef 22,000円 (前々日までに予約)・2026年8月の Avantarge: 夏野菜とサーモンのタルタル、とうもろこしのパフェ、皮がパリッとした鰆、グラニテ、2種から選ぶメイン、とうもろこしご飯、自家製のパン、デザートツリー (8種から好きなだけ)、コーヒーか紅茶、小菓子。牛ほほ肉 (2026年10月)、テーブルで切り分けるラム (2026年9月)、さんまの混ぜご飯 (2026年10月)・ソムリエとワインのペアリング・誕生日のプレート、お子様料理2,800円 (shrimp tempura かパスタ)',
    neighborhood: '東心斎橋1-7-18、Minami Elementary School の近く。心斎橋駅5・6番出口から徒歩5〜7分',
    gf_detail: '予約時に要確認。食べログではアレルギーや苦手な食材は事前に伝えるようにとあり、当日は対応できない場合も。コースには自家製のパン、グラニテ、デザートツリー。グルテンフリーの説明はない。',
    vegan_detail: '予約時に要確認。食べログにはベジタリアンメニューありとあり、肉が苦手な人にメインを変えてくれた (2026年8月)。ヴィーガンのコースは載っていない。',
    notes: '[フレンチ・東心斎橋、元証券会社の建物でコース] 重い扉を押し、証券会社だったころの金庫の扉を過ぎると、天井の高い空間に1本の木が伸び、川のような石の床、中二階には個室。コースは季節ごとに変わり、昼は8皿5,900円から、夜は料理長おまかせの16,500円まで、すべて税・サービス料込み。最後はデザートツリーで、8種ほどから好きなだけ選べる (お腹いっぱいの人にはごく小さく盛ってくれたという)。サービスは温かく楽しく、2026年の口コミでは冗談を言い、再訪を覚えていて、テーブルでラムを切り分け、一皿ずつ説明するスタッフとソムリエの話が多い。誕生日や家族のお祝いに人気で、子どもは個室で歓迎。月曜と第3月曜〜水曜休み。',
  });
}

save();
