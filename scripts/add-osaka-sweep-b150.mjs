// Osaka sweep (2-mile circle around Dotonbori), batch 150 — mom / small-shop phase (all OMNI).
//   + 鮨 かぜのぎ (6-seat sushi omakase in two seatings, with a gold-leaf uni finale; Minami-Senba)
//   + 食堂RUTA (second-floor Italian of set courses, pasta-centred; Minami-Senba)
//   + うを卯 (eel shop founded 1946: Edo-style unadon over Kishu Binchotan, cheap weekday lunches; Kitahorie) — mom
//   + ラ・ゴロセッタ (wood-fired pizza in a small house, Diavola and lunch sets; Minami-Senba)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 150);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 鮨 かぜのぎ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27141704/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_sushi_kazenogi_minamisenba', name: '鮨 かぜのぎ (Sushi Kazenogi)', category: 'OMNI',
    lat: 34.677869, lng: 135.502333, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soy sauce throughout; a fried spring roll; miso soup. Tell the restaurant when booking and ask.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish and shellfish omakase with beef and egg dishes.',
    hours_raw: 'Two seatings daily, 18:00–20:00 and 21:00–23:30; irregular closings and New Year break (Tabelog). Omakase ¥28,000 (February 2026). Cash only — no cards, e-money or QR (Tabelog). Gold leaf can be left off on request (March 2026).',
    hours: ALL(day(['18:00', '20:00'], ['21:00', '23:30'])), hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Minami-Senba 3-8-2 — 5 min from Nagahoribashi Stn; 5–8 min from Shinsaibashi',
    cuisine: 'Sushi omakase ¥28,000 · e.g. starters of young bamboo shoot and wakame; ankimo; Miyazaki beef spring roll; flounder sashimi; homemade half-dried karasumi; otoro with ikura and egg yolk; uni with caviar and honey; chawanmushi with cod roe cream; red miso soup; roasted tea ice cream · nigiri such as sea bream, scallop, shimaaji, otoro, kuruma shrimp, fugu milt, charcoal-grilled saba bozushi, anago, tamago, otoro with uni · finale: uni served on the back of your hand with a shower of gold leaf · draft beer ¥1,000; Kyoto highball ¥1,500 · 6 counter seats',
    website: null, gmaps: gm('鮨 かぜのぎ'), menu_url: null,
    notes: "[Sushi · a six-seat omakase with a gold-leaf finale, Minami-Senba] A quiet, six-seat sushi counter near Nagahoribashi with two seatings a night. It's known online for its show-stopping finale, uni served on the back of your hand under a shower of gold leaf, but diners who came for the photos stay for the food: delicate starters, homemade karasumi, a cod roe chawanmushi and nigiri like kuruma shrimp, fugu milt and charcoal-grilled saba bozushi, on slightly soft rice. The omakase was ¥28,000 in early 2026. Hospitality is warm and humble, with humor at the counter. Gold leaf can be skipped if you're heading to work. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Sushi omakase counter (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Sushi omakase.',
      anecdotes: [
        { text: '"One standout was the \'Saba Bōzushi\' (mackerel sushi) grilled with charcoal. The combination of the fragrant charcoal aroma and the rich flavor of the mackerel was exceptional…" — May 2026.', source: R + 'B527690977/' },
        { text: '"…upon entering, I was pleasantly surprised by the calm ambiance and the warm hospitality… The sushi rice was slightly softer than usual…" — March 2026.', source: R + 'B523778049/' },
      ],
      japanese_sources_summary: '食べログ: 鮨 かぜのぎ、大阪市中央区南船場3-8-2、長堀橋駅から徒歩5分、心斎橋・本町駅から5〜8分、毎日 18:00〜20:00・21:00〜23:30 の2部制、不定休・年末年始休み、カード・電子マネー・QR不可、カウンター6席。口コミ(2026年2〜9月): おまかせ28,000円 (2026年2月)、前菜 (若い筍と wakame)、ankimo、Miyazaki 牛の春巻き、ヒラメの刺身、自家製の半生の karasumi、otoro と ikura と卵黄、ウニとキャビアとはちみつ、たらこのクリームの茶碗蒸し、赤だし、ほうじ茶のアイス、握り (鯛、ホタテ、shimaaji、otoro、kuruma の海老、fugu の白子、炭火であぶった saba bozushi、anago、tamago、ウニをのせた otoro)、締めは手の甲にウニと金箔、金箔なしも可、生ビール1,000円、京都のハイボール1,500円、静かな店、シャリはやや柔らかめ、ていねいで気さくなもてなし。',
      confidence: 'medium', sources: [TB, R + 'B523493947/', R + 'B523778049/', R + 'B527690977/', R + 'B528065748/', R + 'B536039775/', R + 'B536251031/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter conversation; gold leaf optional (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場3-8-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場三丁目8番2号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B523493947/'],
    price_note: 'Prices from a February 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Omakase course', '¥28,000', 'Courses', 'no', 'no', 'February 2026.', 'omakase'),
      it('', '', 'Draft beer', '¥1,000', 'Drinks', 'no', 'ask', 'February 2026.', 'beer'),
      it('', '', 'Kyoto highball', '¥1,500', 'Drinks', 'ask', 'ask', 'February 2026.', 'highball'),
    ] }, {
    cuisine: '鮨のおまかせ28,000円・たとえば前菜の若い筍と wakame、ankimo、Miyazaki 牛の春巻き、ヒラメの刺身、自家製の半生の karasumi、otoro と ikura と卵黄、ウニとキャビアとはちみつ、たらこのクリームの茶碗蒸し、赤だし、ほうじ茶のアイス・握りは鯛、ホタテ、shimaaji、otoro、kuruma の海老、fugu の白子、炭火であぶった saba bozushi、anago、tamago、ウニをのせた otoroなど・締めは手の甲にのせたウニに金箔・生ビール1,000円、京都のハイボール1,500円・カウンター6席',
    neighborhood: '中央区南船場3-8-2。長堀橋駅から徒歩5分、心斎橋から5〜8分',
    gf_detail: 'グルテンフリーではありません。醤油、揚げた春巻き、赤だし。予約の際に伝えて確認を。',
    vegan_detail: 'ヴィーガンではありません。魚介のおまかせに牛肉や卵の料理。',
    notes: '[鮨・南船場、金箔の締めがある6席のおまかせ] 長堀橋近くの静かな6席の鮨カウンターで、夜は2部制。手の甲にのせたウニに金箔を降らせる派手な締めで知られるが、写真目当てで来た人も料理に納得する: 繊細な前菜、自家製の karasumi、たらこの茶碗蒸し、kuruma の海老やfugu の白子、炭火であぶった saba bozushi などの握りを、やや柔らかめのシャリで。おまかせは2026年初めで28,000円。もてなしはあたたかく腰が低く、カウンターではユーモアも。翌日仕事なら金箔なしも頼める。現金のみ。',
  });
}

// ================================================================ 食堂RUTA
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27085110/'; const R = TB + 'dtlrvwlst/';
  const L = day(['11:30', '15:00']); const LD = day(['11:30', '15:00'], ['17:00', '22:00']);
  put({
    id: 'osaka_shokudo_ruta_minamisenba', name: '食堂RUTA (Shokudo RUTA)', category: 'OMNI',
    lat: 34.677336, lng: 135.505491, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: pasta in every course; three kinds of bread.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish and meat dishes; cheese; the soup and desserts vary — ask.',
    hours_raw: 'Mon–Thu 11:30–15:00 (last food order 13:00); Fri–Sun and public holidays 11:30–15:00 and 17:00–22:00 (last food order 19:00); irregular closings (Tabelog). Courses; run by one person (September 2026). Cards accepted; no e-money or QR (Tabelog).',
    hours: { 0: L, 1: L, 2: L, 3: L, 4: LD, 5: LD, 6: LD }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 2-2-21, life&design Bldg 2F — 5 min from Nagahoribashi Stn',
    cuisine: 'Italian courses, pasta-centred · Lunch A: soup, three kinds of bread, appetizers, pasta, dessert and a drink · Lunch B adds a toast drink and a main · dinner course with two pastas, e.g. chilled corn soup; salmon fricassée with a hint of curry; orecchiette with octopus, aonori and mushrooms; beef cheek in red wine; spaghetti with Ryukyu black pork, beets and Parmigiano; peach melba · 13 seats at tables',
    website: null, gmaps: gm('食堂RUTA'), menu_url: null,
    notes: "[Italian · pasta-centred Italian courses, Minami-Senba] A small second-floor Italian near Nagahoribashi with a calm, warm wooden room, run by one person and still quick. Everything is a course built on seasonal ingredients and beautiful presentation, and pasta is the strength: dinner brings two, such as chewy orecchiette with octopus and aonori, and a spaghetti with Ryukyu black pork and beets. Lunch A (soup, three breads, appetizers, pasta, dessert, drink) is already generous; Lunch B adds a main. The vegetables and the desserts, like peach melba, get special mention. Dinner Fridays to Sundays only. Reserve.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Italian course restaurant run by one person (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Pasta courses.',
      anecdotes: [
        { text: '"The pasta, shaped like earlobes, was wonderfully chewy and had an amazing texture." — August 2026.', source: R + 'B534400863/' },
        { text: '"Despite being run by just one person, the service was quick, and not only was the taste excellent, but the presentation was beautiful as well!" — September 2026, Lunch A Course.', source: R + 'B535702189/' },
      ],
      japanese_sources_summary: '食べログ: 食堂RUTA、大阪市中央区南船場2-2-21 life&designビル 2F、長堀橋駅から徒歩5分、月〜木 11:30〜15:00 (L.O. 料理13:00)、金〜日・祝 11:30〜15:00・17:00〜22:00 (L.O. 料理19:00)、不定休、カード可、電子マネー・QR不可、13席 (テーブル)。口コミ(2026年8〜9月): ビル2階の木のあたたかい落ち着いた店、ひとりで切り盛り、季節の食材と美しい盛りつけ、ランチA (スープ、3種のパン、前菜、パスタ、デザート、食後のドリンク)、ランチBは乾杯のドリンクとメインつき、夜はパスタ2皿のコース (冷たいとうもろこしのスープ、カレー風味の鮭のフリカッセ、蛸と aonori ときのこのオレキエッテ、牛ほほ肉の赤ワイン煮、Ryukyu の黒豚とビーツとパルミジャーノのスパゲッティ、ピーチメルバ)、野菜とデザートが好評。',
      confidence: 'medium', sources: [TB, R + 'B534393790/', R + 'B534400863/', R + 'B534544035/', R + 'B534640432/', R + 'B535216888/', R + 'B535702189/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場2-2-21 life&designビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場二丁目2番21号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534544035/', R + 'B535216888/', R + 'B535702189/'],
    price_note: 'No prices in the reviews; lunch JPY 4,000–4,999, dinner JPY 6,000–9,999 (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Lunch A course', '', 'Lunch', 'no', 'no', 'September 2026.', 'lunch_a'),
      it('', '', 'Lunch B course (with main)', '', 'Lunch', 'no', 'no', 'August 2026.', 'lunch_b'),
      it('', '', 'Dinner course with two pastas', '', 'Dinner', 'no', 'no', 'August–September 2026.', 'dinner'),
    ] }, {
    cuisine: 'パスタが中心のイタリアンのコース・ランチA: スープ、3種のパン、前菜、パスタ、デザート、ドリンク・ランチBは乾杯のドリンクとメインつき・夜はパスタ2皿のコース、たとえば冷たいとうもろこしのスープ、カレー風味の鮭のフリカッセ、蛸と aonori ときのこのオレキエッテ、牛ほほ肉の赤ワイン煮、Ryukyu の黒豚とビーツとパルミジャーノのスパゲッティ、ピーチメルバ・テーブル13席',
    neighborhood: '中央区南船場2-2-21 life&designビル 2F。長堀橋駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。どのコースにもパスタ、3種のパン。',
    vegan_detail: 'ヴィーガンではありません。魚と肉の料理、チーズ。スープやデザートは変わるので確認を。',
    notes: '[イタリアン・南船場、パスタが主役のコース] 長堀橋近く、ビル2階の木のぬくもりのある落ち着いた小さなイタリアンで、ひとりで切り盛りしながら手際がいい。すべて季節の食材と美しい盛りつけのコースで、得意はパスタ: 夜は2皿で、もちもちの蛸と aonori のオレキエッテ、Ryukyu の黒豚とビーツのスパゲッティなど。ランチA (スープ、3種のパン、前菜、パスタ、デザート、ドリンク) でも十分な量で、ランチBはメインつき。野菜やピーチメルバなどのデザートも好評。夜は金〜日曜のみ。予約を。',
  });
}

// ================================================================ うを卯
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27015752/'; const R = TB + 'dtlrvwlst/'; const IG = 'https://www.instagram.com/uou_horie_unagi/';
  const D = day(['11:30', '14:00'], ['17:30', '20:30']);
  put({
    id: 'osaka_uwo_u_kitahorie', name: 'うを卯 (Uwo U)', category: 'OMNI',
    lat: 34.673704, lng: 135.492267, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soy-based eel sauce; breaded chicken katsu at lunch.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: eel, liver and chicken; fish-based soup likely.',
    hours_raw: 'Mon–Sat and public holidays 11:30–14:00 and 17:30–20:30; closed Sun (Tabelog). Eel grilled to order (July 2026). Very busy around Doyo no Ushi in late July (reviews). Cards, e-money and QR accepted (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitahorie 2-3-13, L\'Espoir Kitahorie 1F — 2 min south of Nishi-Ohashi Stn exit 3',
    cuisine: 'Eel, Edo style (steamed, then grilled over Kishu Binchotan) · unadon ¥1,800 (half eel) · jumbo / premium unaju with soup and pickles ¥3,600 · Gomori-ju of eel and grilled liver ¥2,200 · sansho from Wakayama, offered at the table · Kimagure weekday lunch: chicken katsu don small ¥700, regular ¥900 (two katsu), large; chicken kara-age ¥900 · charcoal-grilled chicken set · 10 counter seats',
    website: IG, gmaps: gm('うを卯'), menu_url: null,
    notes: "[Eel · an eel counter since 1946, Kitahorie] A small counter near Nishi-Ohashi that has grilled eel since 1946, Edo style: steamed so the eel is fluffy, then finished over Kishu Binchotan with a sauce kept since the start, light and only gently sweet. The unadon (¥1,800, half an eel) is the everyday order, and the premium unaju (¥3,600) or the Gomori-ju with grilled liver go further; you'll be asked whether you want sansho. Weekday Kimagure lunches are a bargain: a chicken katsu don from ¥700 that overflows the bowl. Eel is grilled to order. Expect crowds around Doyo no Ushi. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Founded 1946 (April 2026 review).', background: 'Eel restaurant run by two people (Tabelog; 2023–2026 reviews).', philosophy: 'Sauce kept since the restaurant opened (2025–2026 reviews).', specialty: 'Edo-style unadon and unaju.',
      anecdotes: [
        { text: '"The eel is grilled using Kishu Binchotan charcoal, following the Edo-style (Kanto-style). The tender meat is coated in a sauce that has been passed down since the restaurant\'s inception." — April 2026, Gomori Ju ¥2,200.', source: R + 'B526360884/' },
        { text: '"Since it\'s steamed, the meat is quite fluffy. The surface is grilled to a crisp, giving it a nice char…" — October 2026, premium unaju ¥3,600.', source: R + 'B440175882/' },
      ],
      japanese_sources_summary: '食べログ: うを卯、大阪市西区北堀江2丁目3-13 レスポワール北堀江１F、西大橋駅3番出口から南へ2分、月〜土・祝 11:30〜14:00・17:30〜20:30、日曜休み、カード・電子マネー・QR可、カウンター10席。口コミ(2014年〜2026年10月): 1946年創業のうなぎ店、関東風 (蒸してから Kishu Binchotan で焼く)、創業からのたれ、注文を受けてから焼く、うな丼1,800円 (2026年7月)、ジャンボの unaju 3,600円、Gomori-ju (うなぎと肝焼き) 2,200円、和歌山の山椒、平日の Kimagure lunch (チキンカツ丼 小700円・並900円、kara-age 900円)、炭火焼き鶏の定食、Doyo no Ushi のころは混む、ふたりで営む店、Instagram @uou_horie_unagi。',
      confidence: 'medium', sources: [TB, IG, R + 'B440175882/', R + 'B452289834/', R + 'B468387459/', R + 'B526360884/', R + 'B532468592/', R + 'B57581364/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; sansho offered (2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市西区北堀江2丁目3-13 レスポワール北堀江１F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区北堀江二丁目3番13号 (go) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B440175882/', R + 'B526360884/', R + 'B57581364/', R + 'B452289834/'],
    price_note: 'Prices from April–October 2026 reviews.', last_checked: TODAY, items: [
      it('うな丼', '', 'Unadon (half eel)', '¥1,800', 'Eel', 'no', 'no', 'July 2026.', 'unadon'),
      it('', '', 'Premium unaju with soup and pickles', '¥3,600', 'Eel', 'no', 'no', 'October 2026.', 'unaju'),
      it('', '', 'Gomori-ju (eel and grilled liver)', '¥2,200', 'Eel', 'no', 'no', 'April 2026.', 'gomori'),
      it('', '', 'Chicken katsu don, small (Kimagure lunch)', '¥700', 'Lunch', 'no', 'no', 'July 2026; regular ¥900.', 'katsudon'),
      it('', '', 'Chicken kara-age (Kimagure lunch)', '¥900', 'Lunch', 'no', 'no', 'April 2026.', 'karaage'),
    ] }, {
    cuisine: '関東風のうなぎ (蒸してから Kishu Binchotan で焼く)・うな丼1,800円 (うなぎ半身)・吸い物と漬物つきのジャンボの unaju 3,600円・うなぎと肝焼きの Gomori-ju 2,200円・和歌山の山椒、席で聞いてくれる・平日の Kimagure lunch: チキンカツ丼 小700円、並900円 (かつ2枚)、大も・鶏のkara-age 900円・炭火焼き鶏の定食・カウンター10席',
    neighborhood: '西区北堀江2丁目3-13 レスポワール北堀江１F。西大橋駅3番出口から南へ2分',
    gf_detail: 'グルテンフリーではありません。醤油のうなぎのたれ、昼の衣をつけたチキンカツ。',
    vegan_detail: 'ヴィーガンではありません。うなぎ、肝、鶏、吸い物も魚のだしと思われる。',
    notes: '[うなぎ・北堀江、1946年からのうなぎのカウンター] 西大橋近くの小さなカウンターで、1946年からうなぎを関東風に焼く: 蒸してふっくらさせ、Kishu Binchotan で仕上げ、創業からのたれは軽く甘さ控えめ。ふだんはうな丼 (1,800円、半身)、ジャンボの unaju (3,600円) や肝焼きもついた Gomori-ju ならさらに。山椒をかけるか聞いてくれる。平日の Kimagure lunch はお得で、丼からあふれるチキンカツ丼が700円から。うなぎは注文を受けてから焼く。Doyo no Ushi のころは混む。日曜休み。',
  });
}

// ================================================================ ラ・ゴロセッタ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27007042/'; const R = TB + 'dtlrvwlst/';
  const LD = day(['11:30', '14:00'], ['18:00', '21:00']);
  put({
    id: 'osaka_la_golosetta_minamisenba', name: 'ラ・ゴロセッタ (La Golosetta)', category: 'OMNI',
    lat: 34.6777, lng: 135.504502, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a pizzeria; wheat dough; tiramisu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cheese, salami and anchovy; a cheese-free marinara base exists — ask about toppings.',
    hours_raw: 'Tue–Fri and Sun 11:30–14:00 and 18:00–21:00; Sat 18:00–21:00; closed Mon (Tabelog). Busy after 12:00; 11:30–12:00 is quietest (August 2026). Weekday and weekend lunch menus differ (2023 review). Cards (VISA, JCB) accepted (Tabelog).',
    hours: { 1: LD, 2: LD, 3: LD, 4: LD, 5: day(['18:00', '21:00']), 6: LD }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 2-8-13, a small house with a counter downstairs and tables upstairs — walk from Shinsaibashi or Nagahoribashi',
    cuisine: 'Wood-fired pizza · lunch pizzas with salad (e.g. watercress) from just over ¥1,000: about 12 options incl. two daily specials · Margherita ¥1,200; Diavola ¥1,300 (marinara base, spicy salami, chili, garlic; spice level on request); Capricciosa; Quattro Formaggi; Bianca with porcini and smoked mozzarella; anchovy; buffalo mozzarella · three bases: Margherita, Marinara (no cheese), Bianca (no tomato) · marinated octopus, salami · tiramisu ¥500 · beer ¥500, wine · 18 seats: 6 at the counter, 12 upstairs',
    website: null, gmaps: gm('ラ・ゴロセッタ'), menu_url: null,
    notes: "[Pizza · wood-fired pizza in a little house, Minami-Senba] A charming small house near Nagahoribashi with an Italian wood-fired oven at the back, a counter downstairs and tables upstairs, and a stained-glass pizza in the window. Pizzas come out in minutes with a chewy, fragrant crust whose twisted edge is a highlight. The Diavola (¥1,300), a cheese-free marinara with spicy salami, chili and plenty of garlic, is properly hot, so ask for it milder if you like; the Bianca with porcini and smoked mozzarella and the Quattro Formaggi are the cheesy picks. Lunch pizzas come with a salad for about ¥1,000–1,300. Go before noon. Closed Mondays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Wood-fired pizzeria (Tabelog; 2023–2026 reviews).', philosophy: null, specialty: 'Wood-fired pizza.',
      anecdotes: [
        { text: '"The twisted edge has a nice chewiness and a wonderful wheat aroma, the dough itself is very delicious." — August 2026, Diavola ¥1,300.', source: R + 'B466783802/' },
        { text: '"I ordered the Bianca Porcini, and as expected from a wood-fired oven, it was served in just a few minutes! The aroma of smoked mozzarella and porcini mushrooms was irresistible!" — August 2026.', source: R + 'B533761762/' },
      ],
      japanese_sources_summary: '食べログ: ラ・ゴロセッタ、大阪市中央区南船場2-8-13、心斎橋・長堀橋駅から徒歩、火〜金・日 11:30〜14:00・18:00〜21:00、土 18:00〜21:00、月曜休み、カード (VISA・JCB) 可、18席 (1階カウンター6、2階テーブル12)。口コミ(2023年6月〜2026年10月): かわいい一軒家、奥にイタリアの薪窯、ピザのステンドグラス、数分で焼き上がる、もちもちで香ばしい生地とねじった耳、昼はサラダ (クレソンなど) つきで1,000円ちょっとから、日替わり2種を含め12種ほど、マルゲリータ1,200円、ディアボラ1,300円 (マリナーラにスパイシーなサラミ、唐辛子、にんにく、辛さは調整可)、カプリチョーザ、クアトロフォルマッジ、ポルチーニとスモークモッツァレラのビアンカ、アンチョビ、水牛のモッツァレラ、ベースはマルゲリータ・マリナーラ (チーズなし)・ビアンカ (トマトなし)、蛸のマリネ、サラミ、ティラミス500円、ビール500円、ワイン、12時を過ぎると混む、サラダのドレッシングは塩気が強めという声。',
      confidence: 'medium', sources: [TB, R + 'B466783802/', R + 'B526895915/', R + 'B533271155/', R + 'B533761762/', R + 'B536095860/', R + 'B536603021/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff suggest pizzas and adjust spice (2023–2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場2-8-13',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場二丁目8番13号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B466783802/', R + 'B533271155/'],
    price_note: 'Prices from 2023 and August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Diavola', '¥1,300', 'Pizza', 'no', 'no', 'August 2026.', 'diavola'),
      it('', '', 'Margherita with salad (lunch)', '¥1,200', 'Pizza', 'no', 'no', 'August 2026.', 'margherita'),
      it('', '', 'Bianca with porcini and smoked mozzarella', '', 'Pizza', 'no', 'no', 'August 2026.', 'bianca'),
      it('', '', 'Quattro Formaggi', '', 'Pizza', 'no', 'no', 'August 2026.', 'quattro'),
      it('', '', 'Tiramisu', '¥500', 'Dessert', 'no', 'no', 'December 2023; still served (September 2026).', 'tiramisu'),
    ] }, {
    cuisine: '薪窯のピッツァ・昼はサラダ (クレソンなど) つきで1,000円ちょっとから、日替わり2種を含め12種ほど・マルゲリータ1,200円、ディアボラ1,300円 (マリナーラのベースにスパイシーなサラミ、唐辛子、にんにく。辛さは調整可)、カプリチョーザ、クアトロフォルマッジ、ポルチーニとスモークモッツァレラのビアンカ、アンチョビ、水牛のモッツァレラ・ベースはマルゲリータ、マリナーラ (チーズなし)、ビアンカ (トマトなし) の3種・蛸のマリネ、サラミ・ティラミス500円・ビール500円、ワイン・18席: 1階カウンター6席、2階12席',
    neighborhood: '中央区南船場2-8-13、1階がカウンター、2階がテーブルの小さな一軒家。心斎橋・長堀橋駅から徒歩',
    gf_detail: 'グルテンフリーではありません。ピッツァの店で小麦の生地、ティラミス。',
    vegan_detail: 'ヴィーガンではありません。チーズ、サラミ、アンチョビ。チーズなしのマリナーラのベースもあるので具を確認。',
    notes: '[ピッツァ・南船場、小さな一軒家の薪窯ピッツァ] 長堀橋近くのかわいい小さな一軒家で、奥にイタリアの薪窯、1階はカウンター、2階はテーブル、窓にはピッツァのステンドグラス。数分で焼き上がり、もちもちで香ばしい生地のねじった耳がおいしい。チーズなしのマリナーラにスパイシーなサラミ、唐辛子、たっぷりのにんにくのディアボラ (1,300円) はしっかり辛いので、控えめにも頼める。チーズ好きならポルチーニとスモークモッツァレラのビアンカやクアトロフォルマッジを。昼はサラダつきで1,000〜1,300円ほど。12時前が狙い目。月曜休み。',
  });
}

save();
