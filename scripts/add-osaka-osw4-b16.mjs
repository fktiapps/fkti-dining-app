// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first; worker osw4 (lane: Tabelog id mod 4 = 3), batch 16.
//   + 肉割烹 鋒 心斎橋 Niku Kappo Kissaki (wagyu and sushi kappo with private rooms, Higashi-Shinsaibashi)
//   + 炭焼きイタリアン Black Sumiyaki Italian Black (charcoal Italian, Sennichimae)
//   + そば居酒屋るちん Soba Izakaya Ruchin (soba izakaya with juwari soba and soba sushi, Higashi-Shinsaibashi)
//   + 焼肉マル 心斎橋本店 Yakiniku Maru (charcoal yakiniku open until 5 a.m., Higashi-Shinsaibashi)
//   - 27127867 茶想 もりた園 なんば店: 京都宇治 茶想もりた園 has 5–6 shops nationwide (search results) — chain (5+).
//   Group-size line (brief): 鋒 is the meat-kappo sister of the Nakago sushi shops (Tabelog shop text; a September
//   2026 reviewer) — 寿司 なかご 別邸 (osaka_sushi_nakago_bettei_shinsaibashi) is in data, but 鋒 is a different
//   concept, so drafted as a sister concept. るちん has a sister shop, るちん製麺所 九条店 (search result) — small group.
//   Black and マル: one shop found each (マル's "本店" name suggests others; none found). None of the four is in
//   data/osaka.json (grep by name, Tabelog id and address, 2026-11-02).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw4-16');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27127867', 'chain: 京都宇治 茶想もりた園, 5–6 shops nationwide (Tokyo Toyosu, Nagoya Hisaya-odori, Namba and more)');

// ================================================================ 肉割烹 鋒
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27123875/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00'], ['17:00', '23:00']);
  put({
    id: 'osaka_niku_kappo_kissaki_shinsaibashi', name: '肉割烹 鋒 心斎橋 (Niku Kappo Kissaki Shinsaibashi)', category: 'OMNI',
    lat: 34.674452, lng: 135.503796, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The courses mix sashimi, meat and fish sushi, red miso soup, grilled wagyu and dishes in sauces; à la carte includes tempura (August 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu and seafood kappo; courses include a clear soup with sea eel (July 2026) and red miso soup.',
    hours_raw: 'Daily 12:00–15:00 and 17:00–23:00, last order 22:00; closed irregularly (Tabelog). Same-day reservations welcome (Tabelog). Appetiser ¥500 (Tabelog). One drink per person is expected with the lunch course (October 2026). Cards (VISA, Master, JCB, AMEX, Diners), e-money and PayPay (Tabelog). 54 seats with a counter, tatami and private or semi-private rooms for 2 to 8; heated tobacco only, in private rooms (Tabelog). Children welcome (Tabelog). Weekday lunches can be nearly empty (August–October 2026); two reviewers waited a long time between courses (September–October 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-12-9, 2F — 3 min from Nagahoribashi Stn, 5 min from Shinsaibashi Stn',
    cuisine: 'Meat kappo built on Japanese cuisine and meat kaiseki, with sushi and seafood from its sister sushi restaurant; selected wagyu including Yonezawa beef; fish direct from the fishing port (Tabelog shop text) · lunch: niku sushi course ¥2,800 — appetiser, beef-tendon stew, three sashimi, steamed shima-cho (or a chawanmushi with offal), grilled special wagyu lean meat, seven pieces of wagyu and fish sushi, red miso soup (July–October 2026); basic course ¥5,800; shinogi course ¥8,800 (Tabelog) · Kissaki course (July 2026): meat namero with summer vegetables, sea bream and ribbonfish with meat sashimi, sea eel and ito-kabocha clear soup, white omasum, low-temperature liver sashimi, water eggplant in mustard, steamed anago with turnip, charcoal-grilled sirloin, asparagus tofu · à la carte: smoked edamame, five-piece sashimi, yukhoe, grilled tongue, assorted tempura, grilled wagyu top sirloin, clay-pot rice with pickles, sake ice cream (August 2026) · horse-meat sushi (September 2026)',
    website: 'https://www.tablecheck.com/kissaki', gmaps: gm('肉割烹 鋒 心斎橋'), menu_url: null,
    notes: '[Meat kappo · Higashi-Shinsaibashi, wagyu and sushi in private rooms] A dark, stylish second-floor kappo from the Nakago sushi group that pairs wagyu (including Yonezawa beef) with port-direct fish. The value is the ¥2,800 lunch: small plates, sashimi and seven pieces of wagyu and fish sushi; dinner courses run about ¥10,000–15,000. Good for private-room dinners; reviews in 2026 split between beautiful food and slow pacing or cool service.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop listing (corporate member): opened 7 July 2021; meat kappo working with a sister sushi restaurant. A September 2026 reviewer identifies it as a sister of Nakago; the data record 寿司 なかご 別邸 (osaka_sushi_nakago_bettei_shinsaibashi) notes it is "part of the small Nakago group".', philosophy: null, specialty: 'Wagyu and fish sushi; meat kappo courses.',
      anecdotes: [
        { text: '"Everything except the sushi and miso soup was served at once. The flavors were all excellent, but honestly, I felt it could have had a bit more volume." — July 2026, the ¥2,800 lunch course.', source: R + 'B532514125/' },
        { text: '"In the end, we waited about 30 minutes after the appetizer." — September 2026, a dinner course.', source: R + 'B535382735/' },
        { text: '"The white omasum, in particular, had no unpleasant odor and a delightful crunchy texture. Truly a meat kappo!" — July 2026, the Kissaki course.', source: R + 'B532849243/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 肉割烹 鋒 心斎橋、日本料理・寿司・居酒屋、大阪市中央区東心斎橋1-12-9 2F、長堀橋駅から徒歩3分、心斎橋駅から徒歩5分、毎日12:00〜15:00、17:00〜23:00 (L.O. 22:00)、不定休、当日予約可、お通し500円、カード・電子マネー・PayPay 可、54席、個室・半個室 (2〜8名)、加熱式たばこは個室のみ、子ども可、2021年7月7日オープン。和食と肉の懐石に寿司と鮮魚、系列の寿司店と連携、厳選の和牛と Yonezawa の牛肉、漁港直送の魚、肉寿司ランチ2,800円、ベーシック5,800円、Shinogi のコース8,800円。口コミ(2026年7月〜10月): ランチの牛すじ煮込み、刺身3種、和牛の赤身焼き、和牛と鮮魚の寿司7貫、赤だし、Kissaki のコースのなめろう、ハモと糸かぼちゃのお吸い物、白センマイ、レバー刺し、穴子とかぶの蒸し物、サーロインの炭火焼き、なかごの系列という声、量が少なめ、コースの間が空いた、接客が冷たかったという声も。',
      confidence: 'medium', sources: [TB, R + 'B532514125/', R + 'B532849243/', R + 'B533812274/', R + 'B533896674/', R + 'B533922627/', R + 'B535382735/', R + 'B535574677/', R + 'B535669037/', R + 'B535678629/', R + 'B536489820/', R + 'B537354988/', R + 'B537517968/', R + 'B538224990/', R + 'B538346296/', R + 'B538349335/', 'https://www.tablecheck.com/kissaki'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses in private rooms make ordering simple; booking via TableCheck. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-12-9 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and TableCheck page; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目12番9号 (go) 10m. Nearest records: まえだ家 (osaka_maedaya_higashishinsaibashi, 1-12-19) 19 m, 鳥焼酒場 暁 22 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B532514125/', R + 'B538224990/', TB],
    price_note: 'Courses from the Tabelog listing; lunch contents from July–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Niku sushi lunch course (small plates, sashimi, 7 pieces of wagyu and fish sushi, red miso soup)', '¥2,800', 'Lunch', 'ask', 'no', 'Tabelog listing; July–October 2026 reviews.', 'niku_sushi_lunch'),
      it('', '', 'Lunch basic course, 5 dishes', '¥5,800', 'Lunch', 'ask', 'no', 'Tabelog listing.', 'lunch_basic'),
      it('', '', 'Lunch shinogi course, 8 dishes', '¥8,800', 'Lunch', 'ask', 'no', 'Tabelog listing.', 'lunch_shinogi'),
      it('', '', 'Grilled wagyu top sirloin', '', 'À la carte', 'ask', 'no', 'August 2026 review.', 'wagyu_sirloin'),
      it('', '', 'Clay-pot rice with pickles', '', 'À la carte', 'ask', 'no', 'August 2026 review.', 'donabe_gohan'),
    ] }, {
    cuisine: '和食と肉の懐石をもとに、系列の寿司店と組んだ寿司と鮮魚の肉割烹。Yonezawa の牛肉など厳選の和牛と、漁港直送の魚 (食べログの店の紹介)・ランチ: 肉寿司のコース2,800円 — 前菜、牛すじ煮込み、刺身3種、シマチョウの蒸し物 (またはホルモンの茶碗蒸し)、特選和牛の赤身焼き、和牛と鮮魚の寿司7貫、赤だし (2026年7〜10月)、ベーシックのコース5,800円、Shinogi のコース8,800円 (食べログ)・Kissaki のコース (2026年7月): 夏野菜と肉のなめろう、鯛とタチウオと肉の刺身、ハモと糸かぼちゃのお吸い物、白センマイ、低温調理のレバー刺し、水なすのからし漬け、穴子とかぶの蒸し物、サーロインの炭火焼き、アスパラの豆腐・単品: 燻製枝豆、刺身5種、ユッケ、牛タン焼き、天ぷらの盛り合わせ、和牛のトップサーロイン焼き、土鍋ご飯と漬物、日本酒のアイス (2026年8月)・馬肉の寿司 (2026年9月)',
    neighborhood: '東心斎橋1-12-9 2F。長堀橋駅から徒歩3分、心斎橋駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。コースは刺身、肉と魚の寿司、赤だし、和牛の焼き物、たれの料理。単品には天ぷらも (2026年8月)。',
    vegan_detail: 'ヴィーガンではありません。和牛と魚介の割烹で、コースにはハモのお吸い物 (2026年7月) と赤だし。',
    notes: '[肉割烹・東心斎橋、個室で和牛と寿司] なかごの寿司の系列の、暗めでおしゃれな2階の割烹で、Yonezawa の牛肉などの和牛と漁港直送の魚を合わせる。お得なのは2,800円のランチで、小鉢、刺身、和牛と魚の寿司7貫。夜のコースは1万〜1万5千円ほど。個室の食事に。2026年の口コミは料理がきれいという声と、間が空く、接客が冷たいという声に分かれる。',
  });
}

// ================================================================ 炭焼きイタリアン Black
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27139383/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '23:00']);
  put({
    id: 'osaka_sumiyaki_italian_black_sennichimae', name: '炭焼きイタリアン Black (Sumiyaki Italian Black)', category: 'OMNI',
    lat: 34.66399, lng: 135.50528, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Signatures include breaded salmon, beef-tongue and lamb cutlets, fresh pasta and a French toast; the charcoal-grilled meats and carpaccio are the dishes without obvious wheat.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. The appetiser plate has vegetables (broccoli, carrot râpée, young corn pickles), but most dishes use meat, fish, cheese or cream.',
    hours_raw: 'Daily 12:00–23:00, last order 22:00; closed irregularly (Tabelog). Reservations recommended, dinner is hard to book (August 2026); two-hour limit; ¥3,000 per person charged for same-day changes in numbers; requested table or counter seating not guaranteed (Tabelog). Charge ¥400 (Tabelog). Cards (VISA, Master) and PayPay; no e-money (Tabelog). 22 seats with counter, sofas and a terrace; non-smoking; BYO allowed; sommelier on staff (Tabelog). Tables are close together (October 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba Sennichimae 5-30, 三陽グリーンハイツ, Ura-Namba — 5 min from Nankai Namba exit E8 or Nipponbashi Stn exit 5',
    cuisine: 'Charcoal-grilled Italian with sommelier-chosen wine (Tabelog shop text): thick-cut toro beef tongue, Kawachi duck carpaccio, signature salmon rare cutlet with homemade tartare in a black crust, desserts by a pastry chef · lunch omakase course of 4 dishes ¥3,000 (weekdays), dinner omakase ¥3,500 (Mon–Thu), Black premium plan of 7 dishes with Awaji fresh pasta ¥5,000 (Tabelog, discounted prices) · prosciutto, melon and mozzarella ¥1,300, salmon rare cutlet ¥1,200, beef-tongue Bolognese ¥1,800 (August 2026) · assorted appetisers, oyster omelette, gnocchi with gorgonzola cream, wagyu hiuchi tagliata, Basque cheesecake with olive oil, affogato (September 2026) · "French toast that pairs with drinks", served with prosciutto and cheese; shrimp tomato chili cream pasta; porcini and prosciutto cream pasta; beef tongue braised in red wine; tiramisu; charcoal-grilled wagyu flank (September 2026) · Caesar salad with prosciutto, mushroom omelette, lamb cutlet, karasumi vongole bianco; about 12 pastas (October 2026)',
    website: null, gmaps: gm('炭焼きイタリアン Black'), menu_url: null,
    notes: '[Italian · Ura-Namba, charcoal grill and wine all day] A dark, chic 22-seat Italian near Nipponbashi, open from noon, with charcoal-grilled meats, fresh pasta and sommelier-picked wine. Order the salmon rare cutlet with tartare (¥1,200), the thick-cut beef tongue and a pasta to share; the weekday lunch omakase is ¥3,000. Dinner books up: reserve, and note the ¥3,000 fee for changing numbers on the day. About one in ten guests is from overseas (September 2026).',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop listing (corporate member): opened 28 November 2023; charcoal-grilled Italian, wines chosen by a sommelier, desserts by a pastry chef, fresh pasta from Awaji Noodle Company.', philosophy: null, specialty: 'Salmon rare cutlet; charcoal-grilled beef tongue.',
      anecdotes: [
        { text: '"The clientele is predominantly Japanese, making up about 90%, with around 10% being foreign visitors" — September 2026.', source: R + 'B535325423/' },
        { text: '"I\'ve seen many of my followers visit this place, but it\'s really hard to get a reservation for dinner... So, I decided to challenge myself during lunch." — August 2026, an anniversary lunch.', source: R + 'B534587914/' },
        { text: '"Although the restaurant\'s name includes \'Sumiyaki\' (charcoal grilling), I was a bit puzzled about what other grilled dishes were offered besides the salmon cutlet, beef tongue cutlet, and lamb cutlet." — October 2026.', source: R + 'B536729989/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 炭焼きイタリアン Black、イタリアン・ダイニングバー、大阪市中央区難波千日前5-30 三陽グリーンハイツ、南海なんば駅 E8出口・日本橋駅5番出口から徒歩5分、毎日12:00〜23:00 (L.O. 22:00)、不定休、予約可、2時間制、当日の人数変更はひとり3,000円、チャージ400円、カード (VISA・Master)・PayPay 可、電子マネー不可、22席、禁煙、持ち込み可、ソムリエ在籍、2023年11月28日オープン。炭焼きのイタリアンとソムリエのワイン、厚切りのトロ牛タン、Kawachi の鴨のカルパッチョ、黒い衣の自家製タルタルのサーモンのレアカツ、パティシエのデザート、平日ランチのおまかせ3,000円、ディナーのおまかせ3,500円、7品のプラン5,000円。口コミ(2026年8月〜10月): 生ハムとメロンとモッツァレラ1,300円、サーモンのレアカツ1,200円、牛タンのボロネーゼ1,800円、前菜の盛り合わせ、牡蠣のオムレツ、ゴルゴンゾーラのニョッキ、和牛のタリアータ、お酒に合うフレンチトースト、牛タンの赤ワイン煮、パスタは12種ほど、夜は予約が取りにくい、席の間が近い、客の1割ほどが外国人。',
      confidence: 'medium', sources: [TB, R + 'B534242128/', R + 'B534587914/', R + 'B535289254/', R + 'B535325423/', R + 'B535372427/', R + 'B535521338/', R + 'B536119586/', R + 'B536202332/', R + 'B536341336/', R + 'B536385896/', R + 'B536540921/', R + 'B536548668/', R + 'B536729989/', R + 'B537971881/', R + 'B538255313/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Shared plates and omakase courses; about 10% of guests from overseas (September 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前5-30 三陽グリーンハイツ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前5番30号 (go) 9m. Nearest record: かき小屋ランドリー (osaka_kaki_goya_laundry_nipponbashi) 17 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534242128/', R + 'B534587914/', TB],
    price_note: 'À la carte prices from an August 2026 review; courses from the Tabelog listing (discounted prices).', last_checked: TODAY, items: [
      it('', '', 'Salmon rare cutlet with homemade tartare', '¥1,200', 'Signature', 'no', 'no', 'August 2026 review.', 'salmon_rare_katsu'),
      it('', '', 'Beef-tongue Bolognese (fresh pasta)', '¥1,800', 'Pasta', 'no', 'no', 'August 2026 review.', 'gyutan_bolognese'),
      it('', '', 'Prosciutto, melon and mozzarella', '¥1,300', 'Antipasti', 'ask', 'no', 'August 2026 review.', 'prosciutto_melon'),
      it('', '', 'Thick-cut toro beef tongue, charcoal-grilled', '', 'Charcoal grill', 'ask', 'no', 'Tabelog shop text.', 'atsugiri_gyutan'),
      it('', '', 'Weekday lunch omakase, 4 dishes', '¥3,000', 'Course', 'ask', 'no', 'Tabelog listing; August 2026 review.', 'lunch_omakase'),
    ] }, {
    cuisine: '炭焼きのイタリアンとソムリエが選ぶワイン (食べログの店の紹介): 厚切りのトロ牛タン、Kawachi の鴨のカルパッチョ、名物は黒い衣の自家製タルタルのサーモンのレアカツ、パティシエのデザート・平日ランチのおまかせ4品3,000円、ディナーのおまかせ3,500円 (月〜木)、Awaji の生パスタを使う7品のプレミアムプラン5,000円 (食べログ、割引後)・生ハムとメロンとモッツァレラ1,300円、サーモンのレアカツ1,200円、牛タンのボロネーゼ1,800円 (2026年8月)・前菜の盛り合わせ、牡蠣のオムレツ、ゴルゴンゾーラクリームのニョッキ、和牛ヒウチのタリアータ、オリーブオイルのバスクチーズケーキ、アフォガート (2026年9月)・生ハムとチーズを添えた「お酒に合うフレンチトースト」、エビのトマトチリクリームパスタ、ポルチーニと生ハムのクリームパスタ、牛タンの赤ワイン煮、ティラミス、和牛のフランクの炭火焼き (2026年9月)・生ハムのシーザーサラダ、きのこのオムレツ、ラムのカツ、からすみのボンゴレビアンコ、パスタは12種ほど (2026年10月)',
    neighborhood: '難波千日前5-30 三陽グリーンハイツ、Ura-Namba。南海なんば駅 E8出口・日本橋駅5番出口から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。名物はサーモン、牛タン、ラムのカツ、生パスタ、フレンチトースト。小麦が見えないのは炭焼きの肉とカルパッチョ。',
    vegan_detail: '要確認。ヴィーガンの情報なし。前菜の盛り合わせには野菜 (ブロッコリー、キャロットラペ、ヤングコーンのピクルス) もあるが、ほとんどの料理は肉、魚、チーズ、クリーム。',
    notes: '[イタリアン・Ura-Namba、昼から炭焼きとワイン] 日本橋に近い、暗めでシックな22席のイタリアンで、昼12時から炭焼きの肉、生パスタ、ソムリエのワイン。タルタルのサーモンのレアカツ (1,200円)、厚切り牛タン、パスタをシェアして。平日ランチのおまかせは3,000円。夜は予約で埋まるので早めに。当日の人数変更はひとり3,000円かかる。客の1割ほどが外国人 (2026年9月)。',
  });
}

// ================================================================ そば居酒屋るちん
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27059347/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'osaka_soba_izakaya_ruchin_higashishinsaibashi', name: 'そば居酒屋るちん (Soba Izakaya Ruchin)', category: 'OMNI',
    lat: 34.674185, lng: 135.503456, cuisine_type: 'udon_soba',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The soba is stone-ground 80% or 100% buckwheat (100% is +¥330, October 2026), and the party course lists "gluten-free soba sweets" (Tabelog), but the dipping sauce, soba-flour kara-age, tempura and soba sushi rolls are not described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: soba comes with a dashi dipping sauce, and the menu runs to sashimi, eel, shamo chicken and oden.',
    hours_raw: 'Daily 17:00–24:00, last order 23:30 (Tabelog). An older listing (savorjapan, search result) gives Tue–Sun 11:30–21:00, closed Mondays — Tabelog is current. Reservations for 2–28; two-hour limit when busy (Tabelog). Appetiser ¥550 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). Basement floor: 12 counter seats and tatami, non-smoking; 2nd floor with counter, box seats and the bar VALINO, smoking allowed; a 3rd floor too (Tabelog; January and April 2026). English menu (Tabelog). QR ordering (May 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-13-23, イルストリート B1F — 4 min from Shinsaibashi Stn, 5 min from Nagahoribashi Stn',
    cuisine: 'Creative soba izakaya: stone-ground 80% and 100% buckwheat soba, soba dishes and sake to match (Tabelog shop text) · party course ¥6,800 with drinks: sashimi, soba-sushi "Ruchin Roll", salad with soba-koji dressing, soba-dashi stew, soba-flour kara-age, seasonal soba, gluten-free soba sweets; sake pairing +¥1,500 or +¥2,700 (Tabelog) · Ruchin Roll of toro, nagaimo and nozawana in soba (June 2026); inari with toro-taku, 2:8 soba (February 2026); soba inari with sweet-vinegar ginger (July 2026); negitoro inari, soba cheese fry, eel shirayaki, spring sakura soba (March 2026); crunchy soba-tea cheese (February 2026) · juwari soba with dipping sauce and homemade sesame sauce (August 2026); juwari +¥330, topped with Kujo green onion (October 2026); sticky natto soba (August 2026); Hanamaki 100% soba and zaru soba (January 2026) · sashimi platter and boat, oden, dashimaki, fried chicken neck, grilled eel (2025–2026) · shamo chicken prosciutto with myoga and shiso, hot pot finished with soba (May–June 2026) · umibudo, celery with chili oil (August 2026) · sake by the 90 ml glass; soba shochu (2026)',
    website: 'http://www.rutin.co.jp/', gmaps: gm('そば居酒屋るちん'), menu_url: null,
    notes: '[Soba izakaya · Higashi-Shinsaibashi, creative soba and sake late] A calm basement soba izakaya open until midnight, where stone-ground soba turns up as sushi rolls, inari and kara-age as well as in the bowl. Start with the sashimi and the "Ruchin Roll" (toro, nagaimo and pickled greens wrapped in soba), have sake by the 90 ml glass, and finish with juwari soba (+¥330). The basement is non-smoking; the upstairs floors allow smoking. English menu.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop listing (corporate member): opened 1 August 2011; creative soba izakaya with healthy dishes and sake to match soba. A sister shop, るちん製麺所 九条店, is mentioned in a search result. A 2nd-floor bar, VALINO, is part of the building (April 2026).', philosophy: null, specialty: 'Soba sushi "Ruchin Roll"; juwari soba.',
      anecdotes: [
        { text: '"The service is attentive, with the staff changing the ochoko (sake cups) every time you switch your sake." — February 2026.', source: R + 'B525450929/' },
        { text: '"Upon arriving, I was surprised to find that our seats were actually reserved at the second-floor bar called VALINO." — April 2026.', source: R + 'B528180462/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): そば居酒屋るちん、居酒屋・そば・うなぎ、大阪市中央区東心斎橋1-13-23 イルストリート B1F、心斎橋駅から徒歩4分、長堀橋駅から徒歩5分、毎日17:00〜24:00 (L.O. 23:30)、予約可 (2〜28名)、混雑時は2時間制、お通し550円、カード・PayPay 可、電子マネー不可、40席、地下は禁煙・2階は喫煙可、英語のメニュー、2011年8月1日オープン、公式 rutin.co.jp。石臼挽きの二八と十割のそば、創作のそば料理と日本酒、宴会コース6,800円 (るちん巻き、そば麹のドレッシング、そばだしの煮物、そば粉の唐揚げ、季節のそば、グルテンフリーのそばのスイーツ)。口コミ(2026年1月〜10月): るちん巻き、とろたくのいなり、そばいなり、そばチーズフライ、うなぎの白焼き、十割は+330円、Kujo ねぎのそば、ねばねば納豆そば、刺身、おでん、だし巻き、軍鶏の生ハム、日本酒は90ml、2階のバー VALINO。',
      confidence: 'medium', sources: [TB, 'http://www.rutin.co.jp/', R + 'B501578223/', R + 'B514690034/', R + 'B515224711/', R + 'B524854558/', R + 'B525450929/', R + 'B528180462/', R + 'B528836874/', R + 'B529786096/', R + 'B530043059/', R + 'B530970692/', R + 'B531294719/', R + 'B532442537/', R + 'B533253499/', R + 'B534622731/', R + 'B535200694/', 'https://savorjapan.com/0008100037/map'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); counter seating suits solo diners; QR ordering (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-13-23 イルストリート B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目13番23号 (go) 10m. Nearest records: 創作中華 縁 (osaka_sosaku_chuka_enishi, 1-18-2) 16 m, 中華バル JAM 18 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B515224711/', TB],
    price_note: 'Course from the Tabelog listing; juwari surcharge from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', '"Ruchin Roll" (soba sushi with toro, nagaimo, nozawana)', '', 'Signature', 'ask', 'no', 'Tabelog course; June 2026 review.', 'ruchin_maki'),
      it('', '', 'Juwari (100% buckwheat) soba (upgrade)', '+¥330', 'Soba', 'ask', 'no', 'October 2026 review.', 'juwari_upgrade'),
      it('', '', 'Soba inari', '', 'Soba dishes', 'ask', 'no', 'July 2026 review.', 'soba_inari'),
      it('', '', 'Soba-flour kara-age', '', 'Soba dishes', 'ask', 'no', 'Tabelog course.', 'sobako_karaage'),
      it('', '', 'HANAKO party course with all-you-can-drink, 8 items', '¥6,800', 'Course', 'ask', 'no', 'Tabelog listing.', 'hanako_course'),
    ] }, {
    cuisine: '創作のそば居酒屋: 石臼挽きの二八そばと十割そば、そば料理と合う日本酒 (食べログの店の紹介)・飲み放題つきの宴会コース6,800円: 刺身、そばの寿司「るちん巻き」、そば麹ドレッシングのサラダ、そばだしの煮物、そば粉の唐揚げ、季節のそば、グルテンフリーのそばのスイーツ。日本酒のペアリングは+1,500円か+2,700円 (食べログ)・とろ、長芋、野沢菜をそばで巻いたるちん巻き (2026年6月)、とろたくのいなり、二八そば (2026年2月)、甘酢しょうがのそばいなり (2026年7月)、ねぎとろのいなり、そばチーズフライ、うなぎの白焼き、春の桜そば (2026年3月)、カリカリのそば茶チーズ (2026年2月)・つけ汁と自家製ごまだれの十割そば (2026年8月)、十割は+330円、Kujo ねぎのせ (2026年10月)、ねばねば納豆そば (2026年8月)、十割の Hanamaki のそばとざるそば (2026年1月)・刺身の盛り合わせと舟盛り、おでん、だし巻き、鶏首の唐揚げ、うなぎの蒲焼き (2025〜2026年)・みょうがと大葉の軍鶏の生ハム、締めにそばを入れる鍋 (2026年5〜6月)・海ぶどう、セロリのラー油和え (2026年8月)・日本酒は90mlのグラスで、そば焼酎も (2026年)',
    neighborhood: '東心斎橋1-13-23 イルストリート B1F。心斎橋駅から徒歩4分、長堀橋駅から徒歩5分',
    gf_detail: '要確認。そばは石臼挽きの二八か十割 (十割は+330円、2026年10月) で、宴会コースには「グルテンフリーのそばのスイーツ」がある (食べログ) が、つけ汁、そば粉の唐揚げ、天ぷら、そばの巻き寿司はグルテンフリーと書かれていない。',
    vegan_detail: 'ヴィーガンではありません。そばはだしのつけ汁で、刺身、うなぎ、軍鶏、おでんの店。',
    notes: '[そば居酒屋・東心斎橋、夜遅くまで創作そばと日本酒] 深夜0時まで開いている落ち着いた地下のそば居酒屋で、石臼挽きのそばが器の中だけでなく、巻き寿司、いなり、唐揚げにも。刺身と「るちん巻き」(とろ、長芋、野沢菜をそばで巻いたもの) から始めて、日本酒を90mlずつ、締めは十割そば (+330円) を。地下は禁煙、上の階は喫煙可。英語のメニューあり。',
  });
}

// ================================================================ 焼肉マル 心斎橋本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27017227/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '05:00']);
  put({
    id: 'osaka_yakiniku_maru_shinsaibashi', name: '焼肉マル 心斎橋本店 (Yakiniku Maru Shinsaibashi Honten)', category: 'OMNI',
    lat: 34.671853, lng: 135.505829, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Meat comes with tare or green-onion salt; set meals include miso soup; cold noodles are on the menu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a charcoal yakiniku and offal restaurant.',
    hours_raw: 'Daily 12:00–05:00 next morning, last order 04:00; lunch 12:00–17:00, dinner 17:00–05:00; closed irregularly (Tabelog). The regular menu can be ordered at lunch too (May–June 2026). Reservations accepted (Tabelog); reservations by phone only, per gurunavi (search result); cancellation fee from a week before (October 2025). Cards (VISA, Master, JCB, AMEX, Diners), PayPay, au PAY, LINE Pay and Alipay; no e-money (Tabelog). 30 seats with counter and tatami; smoking allowed, IQOS used inside (Tabelog; December 2025). Many foreign customers and mostly foreign staff (July 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 2-1-27, 周防ウイングスビル 1F, on Europa-dori — 3 min from Nagahoribashi Stn, 5 min from Shinsaibashi Stn',
    cuisine: 'Charcoal yakiniku of fresh black wagyu and a wide range of offal, including rare urute (Tabelog shop text) · party courses of 12–13 dishes ¥4,950, ¥6,050 and ¥8,250, drinks +¥1,980 (Tabelog); daytime "happy time" 12:00–17:00 (Tabelog) · lunch set meals under ¥1,500: signature mixed yakiniku set ¥1,250 with salad, miso soup, Korean nori, kimchi and four meats (March 2026); assorted set of tongue, skirt, short rib and horumon, 1.5× or 2× meat still under ¥2,000, with namul, miso soup, salad and rice (October 2026) · special yakiniku of five kinds (May 2026) · beef-tongue sashimi, fresh omasum, kimchi assortment, cold noodles (October 2026) · green-onion salt tongue, yukhoe, fresh heart sashimi (July 2026) · grilled outside skirt, liver, green-onion salad (2025)',
    website: 'https://ak-food-pro.co.jp/', gmaps: gm('焼肉マル 心斎橋本店'), menu_url: null,
    notes: '[Yakiniku · Higashi-Shinsaibashi, charcoal wagyu and offal until 5 a.m.] A street-level charcoal yakiniku on Europa-dori that runs from noon to 5 a.m. Lunch is the bargain: the mixed set of tongue, skirt, short rib and horumon with rice and soup for under ¥2,000 even with extra meat. At night go for green-onion salt tongue, skirt, fresh offal and the cold noodles. Smoking is allowed inside; many guests and staff are from overseas (July 2026).',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop listing (corporate member): opened 14 April 2008; operator site ak-food-pro.co.jp.', philosophy: null, specialty: 'Mixed yakiniku lunch set; fresh offal.',
      anecdotes: [
        { text: '"The staff is mostly foreign ... attentive and friendly service. Most of the customers are also foreigners." — July 2026.', source: R + 'B533759122/' },
        { text: '"My son and I ordered the 1.5 times assorted set, while my partner had the regular one." — October 2026, at lunch, all under ¥2,000.', source: R + 'B537967509/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 焼肉マル 心斎橋本店、焼肉・ホルモン・韓国料理、大阪市中央区東心斎橋2-1-27 周防ウイングスビル1F、心斎橋駅から Europa-dori を東へ徒歩5分、毎日12:00〜翌5:00 (L.O. 4:00)、昼12:00〜17:00、夜17:00〜翌5:00、不定休、予約可、カード・PayPay・au PAY 可、電子マネー不可、30席、喫煙可、2008年4月14日オープン、運営 ak-food-pro.co.jp。新鮮な黒毛和牛と珍しいウルテなどのホルモンを炭火で、宴会コース4,950円・6,050円・8,250円、飲み放題+1,980円、昼の HAPPY TIME。口コミ(2026年3月〜10月): Gochamaze の焼肉定食1,250円、タン・ハラミ・カルビ・ホルモンの盛り合わせ定食は肉1.5倍や2倍でも2,000円以下、昼もアラカルト可、タン刺し、生センマイ、ねぎ塩タン、ユッケ、ハツ刺し、冷麺、スタッフも客も外国人が多い。',
      confidence: 'medium', sources: [TB, 'https://r.gnavi.co.jp/kcmd900/', R + 'B498002851/', R + 'B510725530/', R + 'B515957453/', R + 'B515985396/', R + 'B516623788/', R + 'B517686186/', R + 'B519792502/', R + 'B520960128/', R + 'B523888807/', R + 'B524844323/', R + 'B528192150/', R + 'B532144659/', R + 'B533759122/', R + 'B534485655/', R + 'B537967509/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Many foreign customers and mostly foreign staff (July 2026); set lunches make ordering easy. No English-menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-1-27 周防ウイングスビル1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目1番27号 (go) 12m. Same building as 鮨 和恵 (osaka_sushi_kazue_higashishinsaibashi, 3F) 13 m and 鮨 Shizuku 心斎橋 (1F) 16 m, each on its own point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B498002851/', R + 'B537967509/', TB],
    price_note: 'Lunch prices from March and October 2026 reviews; courses from the Tabelog listing.', last_checked: TODAY, items: [
      it('', '', 'Signature mixed yakiniku set meal (four meats, salad, miso soup, nori, kimchi)', '¥1,250', 'Lunch', 'ask', 'no', 'March 2026 review.', 'gochamaze_teishoku'),
      it('', '', 'Assorted set meal (tongue, skirt, short rib, horumon), 1.5× or 2× meat', 'under ¥2,000', 'Lunch', 'ask', 'no', 'October 2026 review.', 'moriawase_teishoku'),
      it('', '', 'Green-onion salt tongue', '', 'Yakiniku', 'ask', 'no', 'July 2026 review.', 'negishio_tan'),
      it('', '', 'Cold noodles', '', 'Noodles', 'no', 'no', 'July and October 2026 reviews.', 'reimen'),
      it('', '', 'Yakiniku party course, 12 dishes', '¥4,950', 'Course', 'ask', 'no', 'Tabelog listing; drinks +¥1,980.', 'party_course'),
    ] }, {
    cuisine: '新鮮な黒毛和牛と、珍しいウルテなど種類の多いホルモンの炭火焼肉 (食べログの店の紹介)・12〜13品の宴会コース4,950円、6,050円、8,250円、飲み放題+1,980円 (食べログ)、昼12:00〜17:00の HAPPY TIME (食べログ)・昼は1,500円以下の定食: 名物のGochamaze の焼肉定食1,250円、サラダ、味噌汁、韓国のり、キムチ、肉4種 (2026年3月)、タン・ハラミ・カルビ・ホルモンの盛り合わせ定食は肉1.5倍か2倍でも2,000円以下、ナムル、味噌汁、サラダ、ご飯つき (2026年10月)・特選焼肉5種 (2026年5月)・タン刺し、生センマイ、キムチの盛り合わせ、冷麺 (2026年10月)・ねぎ塩タン、ユッケ、ハツ刺し (2026年7月)・ハラミ、レバー、ねぎサラダ (2025年)',
    neighborhood: '東心斎橋2-1-27 周防ウイングスビル 1F、Europa-dori 沿い。長堀橋駅から徒歩3分、心斎橋駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。肉はたれかねぎ塩で、定食には味噌汁、冷麺もある。',
    vegan_detail: 'ヴィーガンではありません。炭火焼肉とホルモンの店。',
    notes: '[焼肉・東心斎橋、朝5時まで炭火の和牛とホルモン] Europa-dori 沿いの1階、昼12時から朝5時まで開いている炭火焼肉。お得なのは昼で、タン、ハラミ、カルビ、ホルモンの盛り合わせ定食が肉を増やしても2,000円以下。夜はねぎ塩タン、ハラミ、新鮮なホルモン、冷麺を。店内は喫煙可。客もスタッフも外国人が多い (2026年7月)。',
  });
}

save();
