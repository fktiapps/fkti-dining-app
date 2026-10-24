// Ginza Station half-mile sweep (805 m), batch 40 — small Ginza Japanese places from the Tabelog crawl candidates (all OMNI).
//   + 時喰み (à la carte kaiseki-izakaya; owner-chef Junya Kudo, with sister shops Ginza Kudo and others → group)
//   + 銀座 稲葉 (Japanese cuisine and a celebrated breakfast by Masanobu Inaba, formerly executive chef of Amanemu; young team)
//   + 鉄板お好み焼き 辻井 (luxury teppan okonomiyaki, opened 6 August 2026, open until 3 a.m.; owner not named)
//   + 鮨 昇 (red-vinegar Edomae sushi, 21 seats with private rooms; owner not named)
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);

// ================================================================ 時喰み
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13233337/'; const R = TB + 'dtlrvwlst/';
  const d = day(['18:00', '23:00']);
  put({
    id: 'tokyo_tokihami_higashi_ginza', name: '時喰み (Tokihami)', category: 'OMNI',
    lat: 35.670829, lng: 139.768871,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free in practice: à la carte Japanese small plates including cream croquettes (breaded) and a foie-gras monaka in a wafer shell; no gluten-free options are mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan as described: foie gras, cream croquettes, mascarpone; the grilled sesame tofu and potato salad are not described ingredient by ingredient.',
    hours_raw: 'Mon–Sat 18:00–23:00 (L.O. 22:30); closed Sundays and holidays (Tabelog). Same-day booking is hard. Cards, e-money and QR accepted.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 3-chōme, Suzuki Bldg 2F — 3 min from Higashi-Ginza Stn',
    cuisine: 'Japanese cuisine and wine, à la carte only · foie-gras monaka, grilled sesame tofu · 10 seats', cuisine_type: 'izakaya',
    website: null, gmaps: gm('時喰み 銀座3-11-6 鈴木ビル'), menu_url: null,
    notes: "[Izakaya · kaiseki dishes, à la carte] A ten-seat second-floor room behind a plain stairway in Higashi-Ginza, opened in April 2019. It serves Japanese cuisine and wine à la carte only, so diners pick kaiseki-style dishes one by one instead of a set course. Its Tabelog page names the owner-chef as Junya Kudo, formerly of Ginza Kudo, and lists sister restaurants including Ginza Kudo. 2026 diners order the signature grilled sesame tofu, the foie-gras monaka (crisp wafer filled with foie gras and jelly), cream croquettes, a simple but deep potato salad, and mascarpone with figs and grapes. Portions are made for sharing. Drinks run a little pricey. Book well ahead; same-day tables are rare.",
    chef_bio: {
      chef_name: 'Junya Kudo (owner-chef)', roles: ['owner-chef'], origin: 'Opened 8 April 2019 (Tabelog)',
      background: 'From Ginza Kudo; the restaurant lists sister shops including Ginza Kudo (Tabelog shop text).', philosophy: null, specialty: 'Foie-gras monaka; grilled sesame tofu.',
      anecdotes: [
        { text: '"Tokihami\'s famous foie gras monaka. When you break the crispy shell, you find rich foie gras and jelly inside." — September 2026.', source: R + 'B535660803/' },
        { text: '"Due to its popularity, making a reservation on the day is nearly impossible." — October 2026.', source: R + 'B537436171/' },
        { text: '"The potato salad was incredibly tasty; it was simple yet profound." — October 2026.', source: R + 'B537589017/' },
      ],
      japanese_sources_summary: '食べログ: 時喰み、銀座3-11-6 鈴木ビル2F、東銀座駅から徒歩3分、10席(カウンター5・テーブル2卓)、月〜土18:00〜23:00、日祝休、2019年4月8日開店、和食とワインのアラカルトのみ、オーナーシェフ Junya Kudo(銀座 Kudo 出身)、姉妹店あり、カード・電子マネー・QR可。2026年の口コミ: 焼き胡麻豆腐、フォアグラ最中、クリームコロッケ、ポテトサラダ、無花果と葡萄のマスカルポーネ、取り分け、当日予約はほぼ不可、酒はやや高め。',
      confidence: 'medium', sources: [TB, R + 'B535660803/', R + 'B537436171/', R + 'B537589017/', R + 'B535274884/', R + 'B536531381/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Small room up a building stairway; book days ahead. Dishes sized for sharing.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [{ text: 'Cream croquettes; foie-gras monaka in a wafer shell.', source: R + 'B535660803/' }], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座3-11-6 鈴木ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座三丁目11番6号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535660803/', R + 'B537589017/'],
    price_note: 'Dishes from 2026 reviews; Tabelog budget ¥8,000–10,000.', last_checked: TODAY, items: [
      it('焼き胡麻豆腐', 'yaki gomadoufu', 'Grilled sesame tofu', '', 'Small plates', 'ask', 'ask', '', 'sesame_tofu'),
      it('フォアグラ最中', 'foagura monaka', 'Foie-gras monaka', '', 'Small plates', 'no', 'no', '', 'foie_monaka'),
      it('クリームコロッケ', 'kuriimu korokke', 'Cream croquette', '', 'Small plates', 'no', 'no', '', 'croquette'),
      it('ポテトサラダ', 'poteto sarada', 'Potato salad', '', 'Small plates', 'ask', 'ask', '', 'potato_salad'),
    ] }, {
    cuisine: '和食とワインのアラカルト・フォアグラ最中、焼き胡麻豆腐・10席',
    neighborhood: '銀座三丁目、鈴木ビル2F。東銀座駅から徒歩3分',
    gf_detail: '実際上グルテンフリーではありません。クリームコロッケ(パン粉)や最中の皮のフォアグラ最中など和の一品料理。グルテンフリーの選択肢は記載がありません。',
    vegan_detail: '記述上はヴィーガンではありません。フォアグラ、クリームコロッケ、マスカルポーネ。焼き胡麻豆腐やポテトサラダも材料は書かれていません。',
    notes: '[居酒屋・懐石の料理をアラカルトで] 東銀座の雑居ビルの階段を上がった10席の店で、2019年4月開店。和食とワインをアラカルトのみで出し、コースではなく懐石風の料理を一品ずつ選べます。食べログにはオーナーシェフ Junya Kudo(銀座 Kudo 出身)と、銀座 Kudo などの姉妹店が記されています。2026年の口コミでは名物の焼き胡麻豆腐、フォアグラとジュレを詰めた最中、クリームコロッケ、シンプルで奥深いポテトサラダ、無花果と葡萄のマスカルポーネ。料理は取り分け前提の量で、酒はやや高め。人気で当日予約はまず取れません。',
  });
}

// ================================================================ 銀座 稲葉
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13259495/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'tokyo_ginza_inaba', name: '銀座 稲葉 (Ginza Inaba)', category: 'OMNI',
    lat: 35.667699, lng: 139.763099,
    gf_confidence: 'ask', gf_label: 'GF — ask',
    gf_detail: 'Ask. Japanese courses and a breakfast gozen with clay-pot rice, charcoal-grilled fish and meat, dashimaki tamago, sashimi and tempura; no source describes soy or wheat handling or a gluten-free option.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan: the breakfast and dinner courses include fish, beef, egg and dashi; one reviewer says the breakfast fuses shōjin and tea kaiseki styles, but it is not plant-only.',
    hours_raw: 'Breakfast by reservation from 10:30 on weekdays and 9:00 or 10:30 at weekends; dinner from 18:00; closed irregularly (Tabelog). Cards accepted.',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 8-chōme toward Higashi-Ginza, ground floor — 5–6 min from Shimbashi or Higashi-Ginza Stn',
    cuisine: 'Japanese cuisine and a celebrated reservation-only breakfast · clay-pot rice from an okudosan stove', cuisine_type: 'kaiseki',
    website: null, gmaps: gm('銀座 稲葉 銀座8-12-15'), menu_url: null,
    notes: "[Japanese · the breakfast from the okudosan] A quiet ground-floor restaurant in Ginza 8-chōme with a counter facing an okudosan wood-fired stove and private rooms for 2–8. A fourteen-visit regular says the reservation-only breakfast is the work of Masanobu Inaba, former executive chef of Amanemu, Aman's first Japanese resort. Rice is cooked to order in clay pots, fish and meat are grilled over charcoal, and dashimaki tamago is made after you arrive. An autumn 2026 breakfast began with mikan juice, Ise kabuse tea and roasted peanut tofu. Then came a gozen in ōryōki bowls: steamed anago, sea-bream sashimi with sesame, grilled mushrooms, tempura of Ise lobster, kisu and fig, simmered beef, rice and pickles. Dinner is a seasonal course, such as matsutake and pike conger in a clay-pot steam with young ayu, at about ¥30,000–40,000. Breakfast runs about ¥8,000–15,000. A September 2026 diner notes a young head chef and team.",
    chef_bio: {
      chef_name: 'Masanobu Inaba (owner, per a 2026 regular)', roles: ['owner'], origin: 'Ginza 8-chōme; opening date not found in a source read',
      background: 'Former executive chef of Amanemu, Aman\'s first resort in Japan, per a regular\'s review; a young head chef and team run service (2026 review).', philosophy: '"What is true culinary luxury in modern Japan?" — the shop\'s Tabelog text on its breakfast.', specialty: 'Okudosan clay-pot rice; breakfast gozen.',
      anecdotes: [
        { text: '"The breakfast at \'Ginza Inaba\' is a reservation-only experience crafted by Masanobu Inaba, the former executive chef of Aman\'s first resort, \'Amanemu.\'" — a fourteen-visit regular, September 2026.', source: R + 'B466313210/' },
        { text: '"The Matsutake mushroom and Hamo (pike eel) steamed in a clay pot, along with the young Ayu (sweetfish)…" — September 2026.', source: R + 'B536537797/' },
        { text: '"The head chef and all the staff are quite young, yet they create a wonderful atmosphere." — September 2026.', source: R + 'B536314775/' },
      ],
      japanese_sources_summary: '食べログ: 銀座 稲葉、銀座8-12-15、16席・個室(2〜8名)、朝食は平日10:30〜・土日9:00と10:30〜、夕食18:00〜、不定休、カード可、予算夜3〜4万円・朝8,000〜1万円、おくどさん、炊きたての土鍋ご飯・炭火焼き・出し巻き。2026年の口コミ: アマネムの元総料理長 Masanobu Inaba による予約制の朝食、秋の御膳(蜜柑ジュース、伊勢かぶせ茶、落花生豆腐、蒸し穴子、鯛の胡麻和え、焼き茸、伊勢海老・鱚・無花果の天ぷら、牛のしぐれ煮)、松茸と鱧の土瓶蒸し、若鮎、若い料理長とスタッフ。',
      confidence: 'medium', sources: [TB, R + 'B466313210/', R + 'B536537797/', R + 'B536314775/', R + 'B533937498/', R + 'B535926081/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Book breakfast in advance (fixed start times); counter seats watch the okudosan.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [{ text: 'Tempura (Ise lobster, kisu, fig) in the breakfast gozen.', source: R + 'B466313210/' }], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座8-12-15',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座八丁目12番15号 (go) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B466313210/', TB],
    price_note: 'Tabelog budget: breakfast ¥8,000–10,000, dinner ¥30,000–40,000.', last_checked: TODAY, items: [
      it('朝食御膳', 'choushoku gozen', 'Seasonal breakfast gozen with clay-pot rice (reservation only)', '', 'Breakfast', 'ask', 'no', '', 'breakfast'),
      it('夜のコース', 'yoru no koosu', 'Seasonal dinner course', '', 'Dinner', 'ask', 'no', '', 'dinner_course'),
    ] }, {
    cuisine: '日本料理と評判の予約制の朝食・おくどさんで炊く土鍋ご飯',
    neighborhood: '銀座八丁目の東銀座寄り、ビル1階。新橋駅・東銀座駅から徒歩5〜6分',
    gf_detail: '要確認。土鍋ご飯、炭火焼きの魚と肉、出し巻き、刺身、天ぷらの朝の御膳とコース。醤油や小麦の扱い、グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。朝も夜も魚・牛肉・卵・出汁を使います。精進と茶懐石を融合した御膳との口コミもありますが、植物性のみではありません。',
    notes: '[日本料理・おくどさんの朝ごはん] 銀座八丁目の静かなビル1階、おくどさん(かまど)に向かうカウンターと2〜8名の個室。14回通う常連によれば、予約制の朝食はアマン初の日本のリゾート「アマネム」の元総料理長 Masanobu Inaba によるもの。注文ごとに土鍋でご飯を炊き、魚と肉は炭火で、出し巻きは来店後に焼きます。2026年秋の朝食は蜜柑ジュース、伊勢かぶせ茶、落花生豆腐から始まり、応量器の御膳に蒸し穴子、鯛の胡麻和え、焼き茸、伊勢海老・鱚・無花果の天ぷら、牛のしぐれ煮、ご飯、香の物。夜は松茸と鱧の土瓶蒸しや若鮎などの季節のコースで3〜4万円ほど、朝は8,000〜15,000円ほど。2026年9月には料理長とスタッフが若いとの口コミも。',
  });
}

// ================================================================ 鉄板お好み焼き 辻井
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13325707/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['18:00', '03:00']);
  put({
    id: 'tokyo_teppan_okonomiyaki_tsujii', name: '鉄板お好み焼き 辻井 (Teppan Okonomiyaki Tsujii)', category: 'OMNI',
    lat: 35.670747, lng: 139.761571,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free: okonomiyaki is a wheat-flour batter, cooked on a shared teppan with courses of grilled meat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: teppan courses of meat and okonomiyaki.',
    hours_raw: 'Mon–Fri and holidays 18:00–3:00 (food L.O. 2:00); Sat 18:00–1:00; closed Sundays (Tabelog). 10% late-night charge after 22:00. Cards incl. UnionPay accepted.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: day(['18:00', '01:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 6-chōme, THE place Ginza 9F — 5 min from Ginza Stn C3',
    cuisine: 'Luxury teppan okonomiyaki · counter courses · open until 3 a.m.', cuisine_type: 'okonomiyaki',
    website: null, gmaps: gm('鉄板お好み焼き 辻井 銀座6-5-12'), menu_url: null,
    notes: "[Okonomiyaki · late-night teppan counter] A 13-seat ninth-floor teppan counter in Ginza 6-chōme, opened on 6 August 2026 as a 'luxury teppanyaki okonomiyaki' restaurant (Tabelog). Courses are cooked in front of you: teppan dishes and meat, then okonomiyaki. Early reviews praise the calm, upscale room, attentive service and generous portions, at about ¥10,000–20,000 a head. It stays open until 3 a.m. on weekdays, with a 10% late-night charge after 22:00. The first reviews are all from the opening weeks, so this record is provisional.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 6 August 2026 (Tabelog)', background: 'No source names the owner or chef.', philosophy: null, specialty: 'Teppan okonomiyaki.',
      anecdotes: [
        { text: '"The okonomiyaki was particularly exquisite, showcasing the deliciousness of the ingredients and the meticulous preparation." — October 2026.', source: R + 'B537590852/' },
        { text: '"When I think of Teppan-yaki in Ginza, I had an image of it being a bit intimidating and formal, but this restaurant offers a calm and elegant atmosphere." — September 2026.', source: R + 'B537074014/' },
      ],
      japanese_sources_summary: '食べログ: 鉄板お好み焼き 辻井、銀座6-5-12 THEplace銀座9F、13席、2026年8月6日開店、月〜金・祝18:00〜翌3:00、土18:00〜翌1:00、日休、22時以降深夜料金10%、カード可(銀聯含む)。2026年9〜10月の口コミ: 落ち着いた高級感、鉄板のコース、お好み焼き、量が多い、丁寧な接客、1〜2万円。',
      confidence: 'low', sources: [TB, R + 'B537074014/', R + 'B537590852/', R + 'B537591125/', R + 'B537451398/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'New (August 2026) late-night counter; 10% charge after 22:00.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [{ text: 'Okonomiyaki and meat cooked on the same teppan.', source: R + 'B537451398/' }], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-5-12 THEplace銀座 9F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Opened August 2026; Tabelog reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目5番12号 (go) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537590852/', R + 'B537451398/'],
    price_note: 'No prices captured; Tabelog budget ¥10,000–15,000.', last_checked: TODAY, items: [
      it('鉄板コース', 'teppan koosu', 'Teppan course with okonomiyaki', '', 'Courses', 'no', 'no', '', 'teppan_course'),
      it('お好み焼き', 'okonomiyaki', 'Okonomiyaki', '', 'Teppan', 'no', 'no', '', 'okonomiyaki'),
    ] }, {
    cuisine: '高級鉄板お好み焼き・カウンターのコース・深夜3時まで',
    neighborhood: '銀座六丁目、THEplace銀座9F。銀座駅C3出口から徒歩5分',
    gf_detail: 'グルテンフリーではありません。お好み焼きは小麦粉の生地で、肉のコースと同じ鉄板で焼きます。',
    vegan_detail: '記述上はヴィーガンではありません。肉とお好み焼きの鉄板コース。',
    notes: '[お好み焼き・深夜の鉄板カウンター] 銀座六丁目のビル9階、13席の鉄板カウンターで、2026年8月6日に「高級鉄板焼きお好み焼き」の店として開店(食べログ)。目の前で鉄板料理と肉、締めのお好み焼きのコース。開店直後の口コミでは、落ち着いた高級感、丁寧な接客、量の多さが好評で、1人1〜2万円ほど。平日は深夜3時まで営業し、22時以降は深夜料金10%。口コミはまだ開店直後のものだけです。',
  });
}

// ================================================================ 鮨 昇
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13269895/'; const R = TB + 'dtlrvwlst/';
  const a = day(['12:00', '14:30'], ['17:00', '23:00']);
  put({
    id: 'tokyo_sushi_noboru_ginza', name: '鮨 昇 (Sushi Noboru)', category: 'OMNI',
    lat: 35.668371, lng: 139.764239,
    gf_confidence: 'ask', gf_label: 'GF — ask',
    gf_detail: 'Ask. Edomae sushi on three-year-aged red-vinegar rice, with appetizers such as grilled kinmedai and liver sauce; no source describes the soy, nikiri or tsume ingredients or a gluten-free option.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish and shellfish omakase.',
    hours_raw: 'Daily 12:00–14:30 and 17:00–23:00; closed irregularly (Tabelog). 10% service charge. Cards accepted.',
    hours: { 0: a, 1: a, 2: a, 3: a, 4: a, 5: a, 6: a }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 7-chōme, Tomono Honsha Bldg B1F (wooden sign "Ginza Sushi Noboru") — 4 min from Ginza or Higashi-Ginza Stn',
    cuisine: 'Red-vinegar Edomae sushi · omakase ¥23,000–25,300 with sake pairing · 12-seat counter and private rooms', cuisine_type: 'sushi',
    website: null, gmaps: gm('鮨 昇 銀座7-12-4 友野本社ビル'), menu_url: null,
    notes: "[Sushi · aged red vinegar in a basement] A basement sushi restaurant in Ginza 7-chōme behind a wooden 'Ginza Sushi Noboru' sign, with a twelve-seat counter and private rooms for two or four. The rice is seasoned with three-year-aged red vinegar ('Jōyu', per one diner) and kept mildly acidic, and an eight-sake pairing is offered. October 2026 omakase courses cost ¥23,000 and ¥25,300. They began with mozuku in vinegar, grilled Kyoto vegetables and kinmedai, then nigiri: chūtoro first, striped jack, cuttlefish, kasugo, madai, returning bonito, marinated akami, kelp-cured flounder, seared toro, bafun uni and a liver sauce. The chef explains each fish, and many guests are from overseas. One October 2026 diner found the rice too loosely formed. A 10% service charge applies.",
    chef_bio: { chef_name: null, roles: [], origin: 'Ginza 7-chōme basement; opening date not found in a source read', background: 'No source read names the owner or chef.', philosophy: null, specialty: 'Red-vinegar nigiri; sake pairing.',
      anecdotes: [
        { text: '"The chef was incredibly friendly, patiently explaining each ingredient when I asked questions." — October 2026.', source: R + 'B537337594/' },
        { text: '"I started with the chu-toro. In my experience, a restaurant that serves chu-toro as the first piece is usually a safe bet." — October 2026.', source: R + 'B537225327/' },
        { text: '"What caught my attention was the poor cohesion of the sushi rice. It was quite crumbly." — October 2026.', source: R + 'B537703774/' },
      ],
      japanese_sources_summary: '食べログ: 鮨 昇、銀座7-12-4 友野本社ビルB1F、21席(カウンター12・個室2名と4名)、毎日12:00〜14:30・17:00〜23:00、不定休、サービス料10%、カード可、予算1.5〜2万円。2026年10月の口コミ: 3年熟成の赤酢のシャリ、日本酒8種のペアリング、おまかせ23,000円・25,300円、水雲酢、京野菜と金目鯛の焼き物、中トロから縞鯵・墨烏賊・春子・真鯛・戻り鰹・ヅケ・昆布締めの松川鰈・炙りトロ・馬糞雲丹・肝のソース、海外客が多い、シャリがほどけるとの声も。',
      confidence: 'low', sources: [TB, R + 'B537337594/', R + 'B537719584/', R + 'B537441263/', R + 'B537225327/', R + 'B537703774/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Basement counter; chef explains in detail; many overseas guests. 10% service charge.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-12-4 友野本社ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; five reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目12番4号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537337594/', R + 'B537719584/'],
    price_note: 'Course prices from October 2026 reviews; 10% service charge.', last_checked: TODAY, items: [
      it('おまかせ', 'omakase', 'Omakase course', '¥23,000', 'Courses', 'ask', 'no', '2026.', 'omakase'),
      it('おまかせ(上)', 'omakase', 'Omakase course with more appetizers', '¥25,300', 'Courses', 'ask', 'no', '2026.', 'omakase_plus'),
    ] }, {
    cuisine: '赤酢の江戸前鮨・おまかせ23,000〜25,300円と日本酒ペアリング・カウンター12席と個室',
    neighborhood: '銀座七丁目、友野本社ビルB1F(木の看板「銀座 鮨 昇」)。銀座駅・東銀座駅から徒歩4分',
    gf_detail: '要確認。3年熟成の赤酢のシャリの江戸前鮨で、金目鯛の焼き物や肝のソースなどのつまみ。醤油・煮切り・ツメの原材料やグルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。魚介のおまかせです。',
    notes: '[鮨・地下の熟成赤酢] 銀座七丁目のビル地下、木の看板「銀座 鮨 昇」の先にカウンター12席と2名・4名の個室。シャリは3年熟成の赤酢でまろやかな酸味、日本酒8種のペアリングも。2026年10月のおまかせは23,000円と25,300円で、水雲酢、京野菜と金目鯛の焼き物から、中トロに始まり縞鯵、墨烏賊、春子、真鯛、戻り鰹、ヅケ、昆布締めの松川鰈、炙りトロ、馬糞雲丹、肝のソース。大将は一つ一つ丁寧に説明し、海外客も多数。2026年10月にはシャリがほどけるとの声も。サービス料10%。',
  });
}

save();
