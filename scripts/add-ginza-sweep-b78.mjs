// Ginza Station half-mile sweep (805 m), batch 78 — all-genre phase (all OMNI).
//   + OSAKA きっちん 銀座本店 (Osaka-style okonomiyaki and teppan; "honten")
//   + PENTHOUSE GINZA hanare: (casual sister of a members-only steakhouse; certified raw-beef licence)
//   + 鉄板焼コルザ (Kikkoman-run teppanyaki, renewed in 2024 at Toraya Ginza Bldg)
//   + ヴァンピックル 銀座 (charcoal skewers and fine wine bistro; auxamis group)
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ OSAKA きっちん 銀座本店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13100121/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['17:00', '23:00']);
  put({
    id: 'tokyo_osaka_kitchen_ginza4', name: 'OSAKA きっちん 銀座本店 (OSAKA Kitchen)', category: 'OMNI',
    lat: 35.669529, lng: 139.769164,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: okonomiyaki, yakisoba and sauce-and-mayo dishes are wheat-based.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonpei-yaki (pork and egg), beef tendon, octopus, chicken, bonito flakes.',
    hours_raw: 'Mon–Fri 17:00–23:00 (food L.O. 22:00); Sat and holidays 11:30–15:00 and 17:00–22:00; closed Sundays and the Monday ending a holiday weekend (Tabelog).',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: day(['11:30', '15:00'], ['17:00', '22:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 4-chōme back street, Great Bldg 2F — 1 min from Higashi-Ginza Stn',
    cuisine: 'Osaka-style okonomiyaki and teppanyaki · tonpei-yaki, fluffy okonomiyaki, yakisoba · ¥7,000 course with free-flow · weekend lunch set', cuisine_type: 'okonomiyaki',
    website: 'http://osaka-kitchen.com', gmaps: gm('OSAKA きっちん 銀座本店'), menu_url: null,
    notes: "[Okonomiyaki · Osaka teppan on a Higashi-Ginza back street] An 18-seat Osaka-style teppan restaurant with a wooden counter around a big griddle, open since 2009; one 2026 reviewer notes four straight years as a Michelin Bib Gourmand. The okonomiyaki is fluffy inside and crisp outside, light rather than heavy. The ¥7,000 omakase course with free-flow ran appetizers, tonpei-yaki, grilled beef tendon, cheese tofu, octopus, chicken with zucchini, okonomiyaki and coffee jelly; higher courses add Wagyu. The weekend-only lunch is six small savoury dishes, including Daisen chicken, grilled sesame tofu, a half okonomiyaki and a half yakisoba with thick noodles. Staff are kind.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 11 November 2009 (Tabelog); "honten" (main shop)', background: 'No source names the owner.', philosophy: null, specialty: 'Osaka okonomiyaki; tonpei-yaki.',
      anecdotes: [
        { text: '"It started with appetizers, followed by tonpeiyaki, grilled beef tendon, cheese and tofu, octopus, chicken with zucchini, okonomiyaki, and coffee jelly." — October 2026, ¥7,000 course.', source: R + 'B537600918/' },
        { text: '"This Teppan-yaki restaurant has been selected as a Michelin Bib Gourmand for four consecutive years." — October 2026, weekend lunch.', source: R + 'B537217755/' },
      ],
      japanese_sources_summary: '食べログ: OSAKA きっちん 銀座本店、銀座4-14-19 グレート2F、東銀座駅から徒歩1分、18席、平日17:00〜23:00、土祝11:30〜15:00・17:00〜22:00、日休、2009年11月11日開店、公式サイト osaka-kitchen.com。店の紹介: 銀座の路地裏で15年、大阪のお好み焼きと鉄板焼き、ふわふわで外はカリッと軽いお好み焼き、切りたてのキャベツ。2026年の口コミ: 飲み放題付きおまかせコース7,000円(前菜、とん平焼き、牛すじ焼き、チーズと豆腐、たこ、鶏とズッキーニ、お好み焼き、コーヒーゼリー)、上のコースは和牛、週末限定ランチ(とん平焼き、胡麻豆腐の焼き、大山鶏、ミニお好み焼きと焼きそばのハーフ)、ミシュランのビブグルマンに4年連続との記述、親切なスタッフ。',
      confidence: 'medium', sources: [TB, R + 'B537600918/', R + 'B537217755/', R + 'B536865171/', R + 'B536527401/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter around the griddle; kind staff.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座4-14-19 グレート2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座四丁目14番19号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536865171/', R + 'B537600918/'],
    price_note: 'Course price from October 2026 reviews.', last_checked: TODAY, items: [
      it('おまかせコース(飲み放題付き)', '', 'Omakase course with free-flow: tonpei-yaki, beef tendon, okonomiyaki, coffee jelly', '¥7,000', 'Courses', 'no', 'no', 'October 2026.', 'omakase'),
      it('とん平焼き', 'tonpei yaki', 'Tonpei-yaki (pork in omelette with sauce and mayo)', '', 'Teppan', 'no', 'no', '', 'tonpei'),
      it('お好み焼き', 'okonomiyaki', 'Osaka-style okonomiyaki', '', 'Teppan', 'no', 'no', '', 'okonomiyaki'),
    ] }, {
    cuisine: '大阪のお好み焼きと鉄板焼き・とん平焼き、ふわふわのお好み焼き、焼きそば・飲み放題付きコース7,000円・週末のランチ',
    neighborhood: '銀座四丁目の路地裏、グレート2F。東銀座駅から徒歩1分',
    gf_detail: 'グルテンフリーではありません。お好み焼き、焼きそば、ソースとマヨネーズの料理は小麦が中心です。',
    vegan_detail: 'ヴィーガンではありません。とん平焼き(豚と卵)、牛すじ、たこ、鶏、かつお節。',
    notes: '[お好み焼き・東銀座の路地裏の大阪の鉄板] 大きな鉄板を囲む木のカウンターの18席、2009年開店の大阪の鉄板焼きの店で、2026年の口コミではミシュランのビブグルマンに4年連続とのこと。お好み焼きは中はふわふわ外はカリッと、重くない軽さ。飲み放題付きの7,000円のおまかせコースは、前菜、とん平焼き、牛すじ焼き、チーズと豆腐、たこ、鶏とズッキーニ、お好み焼き、コーヒーゼリー。上のコースには和牛も。週末限定のランチは、大山鶏、胡麻豆腐の焼き、ミニのお好み焼きと太麺の焼きそばのハーフなど6種。スタッフも親切です。',
  });
}

// ================================================================ PENTHOUSE GINZA hanare:
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13209209/'; const R = TB + 'dtlrvwlst/';
  const d = day(['17:30', '22:30']);
  put({
    id: 'tokyo_penthouse_ginza_hanare_ginza8', name: 'PENTHOUSE GINZA hanare:', category: 'OMNI',
    lat: 35.668728, lng: 139.760005,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Steak, beef sashimi and carpaccio with ponzu, rice and miso soup, plus a curry; ponzu and miso usually contain wheat or soy and no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Wagyu sashimi and steak, abalone.',
    hours_raw: 'Mon–Fri 17:30–22:30 (L.O. 21:30); also listed Sat but noted closed Saturdays; closed Sundays, holidays and irregularly (Tabelog).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 8-chōme, Min’yū Bldg 3F — 3 min from Shimbashi Stn A5',
    cuisine: 'Casual sister of a members-only steakhouse (50 years) · licensed Wagyu sashimi, crisp sirloin, strip loin and filet · rice and miso soup · curry', cuisine_type: 'other',
    website: null, gmaps: gm('PENTHOUSE GINZA hanare 民友ビル'), menu_url: null,
    notes: "[Steak · the casual 'hanare' of a members-only steakhouse] The 23-seat annex of PENTHOUSE, a members-only Ginza steakhouse celebrating 50 years. It serves traditional steak casually and holds a licence to serve raw beef. Courses start with very tender beef sashimi and a carpaccio with myōga, red onion and house ponzu. Mains are a choice of two steaks, such as strip loin and filet, or the signature sirloin with a crisp crust, eaten with rice and miso soup. Grilled leeks come with sauce, and a spicy plain curry is also served. Monaka to finish. Quiet on weeknights. One diner found the sides and abalone uneven. Several restaurants share the building, so check the floor. About ¥20,000–30,000.",
    chef_bio: { chef_name: null, roles: [], origin: 'Sister of PENTHOUSE (50 years, per Tabelog)', background: 'Group-run (members-only parent steakhouse).', philosophy: null, specialty: 'Sirloin steak; beef sashimi.',
      anecdotes: [
        { text: '"The meat carpaccio was incredibly delicious. It was served with slices of myoga (Japanese ginger) and red onion, dressed in a special ponzu sauce." — April 2026.', source: R + 'B526134583/' },
        { text: '"The main focus is on beef dishes, starting with sashimi that is incredibly tender, almost like fish… you can choose two types of steak." — October 2026.', source: R + 'B537758820/' },
      ],
      japanese_sources_summary: '食べログ: PENTHOUSE GINZA hanare:、銀座8-5-9 民友ビル3F、新橋駅A5出口から徒歩3分、23席、平日17:30〜22:30、日祝休・土曜も休みのことあり・不定休。店の紹介: 生食用食肉取扱店認定、50周年、会員制ステーキハウス PENTHOUSE の姉妹店、カジュアルに伝統のステーキ、外はカリッとしたサーロイン。2026年の口コミ: 茗荷と紫玉ねぎと特製ポン酢の肉のカルパッチョ、ポテトサラダ、鮑(火入れが強い)、ストリップロインとヒレの食べ比べ、ご飯と味噌汁、具なしの辛口カレー、もなか、平日の夜は空いている、ネギ焼きとタレ、牛刺し、同じビルに複数の店舗。',
      confidence: 'medium', sources: [TB, R + 'B526134583/', R + 'B537758820/', R + 'B535146041/', R + 'B531849719/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Check the floor — several venues in the building.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [{ text: 'Carpaccio dressed in a special ponzu sauce.', source: R + 'B526134583/' }], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座8-5-9 民友ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated April–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座八丁目5番9号 (go) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B526134583/', R + 'B537758820/'],
    price_note: 'No prices captured; reviewers spend ¥20,000–30,000.', last_checked: TODAY, items: [
      it('肉のカルパッチョ', '', 'Beef carpaccio with myōga, red onion and ponzu', '', 'Starters', 'ask', 'no', 'April 2026.', 'carpaccio'),
      it('ステーキの食べ比べ', '', 'Two-steak comparison (e.g. strip loin and filet) with rice and miso soup', '', 'Mains', 'ask', 'no', '2026.', 'steak_pair'),
      it('カレー', 'karee', 'Spicy plain curry', '', 'Mains', 'ask', 'no', 'July 2026.', 'curry'),
    ] }, {
    cuisine: '会員制ステーキハウスの気軽な姉妹店(50年)・牛刺し、カリッとしたサーロイン、ストリップロインとヒレ・ご飯と味噌汁・カレー',
    neighborhood: '銀座八丁目、民友ビル3F。新橋駅A5出口から徒歩3分',
    gf_detail: '要確認。ステーキ、牛刺し、ポン酢のカルパッチョ、ご飯と味噌汁、カレー。ポン酢や味噌には小麦や大豆を使うのが普通で、グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。和牛の刺身とステーキ、鮑。',
    notes: '[ステーキ・会員制ステーキハウスの「離れ」] 50周年を迎えた銀座の会員制ステーキハウス PENTHOUSE の23席の姉妹店で、伝統のステーキを気軽に、生食用食肉の取扱認定も。コースは魚のように柔らかい牛刺しと、茗荷と紫玉ねぎに特製ポン酢のカルパッチョから。メインはストリップロインとヒレなど2種の食べ比べや、外がカリッとした名物のサーロインを、ご飯と味噌汁で。ネギ焼きにはタレ、具なしの辛口カレーも。締めにもなか。平日の夜は静か。付け合わせや鮑にむらがあったという声も。同じビルに複数の店があるので階を確認して。2万〜3万円ほど。',
  });
}

// ================================================================ 鉄板焼コルザ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13303848/'; const R = TB + 'dtlrvwlst/';
  const mw = day(['17:00', '22:00']), ts = day(['12:00', '15:00'], ['17:00', '22:00']);
  put({
    id: 'tokyo_teppanyaki_colza_ginza7', name: '鉄板焼コルザ (Colza)', category: 'OMNI',
    lat: 35.669311, lng: 139.762374,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: run by Kikkoman and built around its soy sauces (standard soy sauce contains wheat), including a house blend for the steak; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Wagyu, lobster; a Hokkaidō-soy tofu dish opens one course.',
    hours_raw: 'Mon–Wed 17:00–22:00; Thu–Sat and holidays 12:00–15:00 and 17:00–22:00 (food L.O. 20:00); closed Sundays and over New Year (Tabelog).',
    hours: { 0: mw, 1: mw, 2: mw, 3: ts, 4: ts, 5: ts }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 7-chōme, Toraya Ginza Bldg B1F — near Ginza Stn',
    cuisine: 'Kikkoman-run teppanyaki (since 1987, renewed 2024) · Wagyu with a Colza-only soy sauce · signature course with lobster · ¥10,000–40,000', cuisine_type: 'other',
    website: 'http://www.colza.co.jp/', gmaps: gm('鉄板焼コルザ 虎屋銀座ビル'), menu_url: null,
    notes: "[Teppanyaki · the soy-sauce maker's own counter] A teppanyaki restaurant run by the Kikkoman group, opened in 1987 and moved to the Toraya Ginza Building in late 2024 as Colza. Interior wood comes from old soy-sauce barrels and the tableware is custom-made. Counter seating plus a private room. The day's ingredients are shown first. Steaks such as sirloin cap or a melt-in-the-mouth strip loin come with a Kikkoman soy sauce made only for Colza, plus onions and fried garlic. The chef's signature course in October 2026 opened with Hokkaidō-soy tofu, autumn truffle and butternut purée, then grilled lobster with persimmon and celery. Suited to business dinners and celebrations.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1987 by Kikkoman; renewed as Colza in 2024 (2026 review; Tabelog opening 18 November 2024)', background: 'Kikkoman group restaurant.', philosophy: 'Traditional technique with new ideas; soy sauce and soybeans to lift umami (Tabelog listing; 2026 review).', specialty: 'Wagyu with house soy sauce.',
      anecdotes: [
        { text: '"This is a specialized Teppan-yaki restaurant opened in 1987 by the long-established Kikkoman… The restaurant relocated to the Toraya Ginza Building in Ginza 7-chome two years ago and was renewed as Colza." — October 2026.', source: R + 'B514991538/' },
        { text: '"I enjoyed it with a special Kikkoman soy sauce made exclusively for Colza." — October 2026, sirloin cap.', source: R + 'B537880304/' },
      ],
      japanese_sources_summary: '食べログ: 鉄板焼コルザ、銀座7-8-17 虎屋銀座ビルB1F、24席、月〜水17:00〜22:00、木〜土祝12:00〜15:00・17:00〜22:00、日・年末年始休、2024年11月18日開店、公式サイト colza.co.jp。店の紹介: 伝統と革新の鉄板焼き、キッコーマンの醤油を使った新メニュー。2026年10月の口コミ: 1987年にキッコーマンが開いた鉄板焼き、虎屋銀座ビルに移転してコルザに、醤油樽の杉材を使った内装、特注の器、食材を最初に見せてくれる、コルザ専用の醤油で食べるイチボ、玉ねぎとフライドガーリック、ストリップロイン、シェフズシグネチャーコース(北海道の大豆の豆腐と秋トリュフとバターナッツのピュレ、オマールの柿とセロリの薬味)、接待やお祝いに。',
      confidence: 'medium', sources: [TB, R + 'B514991538/', R + 'B537880304/', R + 'B537824451/', R + 'B537707153/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter teppan; good for business dinners.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [{ text: 'Steak served with a Kikkoman soy sauce made exclusively for Colza.', source: R + 'B537880304/' }], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-8-17 虎屋銀座ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目8番17号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537824451/', R + 'B537880304/'],
    price_note: 'No prices captured; reviewers spend ¥10,000–40,000.', last_checked: TODAY, items: [
      it('シェフズシグネチャーコース', '', 'Chef’s signature course: soy tofu with truffle, lobster, two Wagyu cuts', '', 'Courses', 'no', 'no', 'October 2026.', 'signature'),
      it('イチボのステーキ', '', 'Sirloin cap steak with Colza soy sauce, onions and fried garlic', '', 'Mains', 'no', 'no', 'October 2026.', 'sirloin_cap'),
    ] }, {
    cuisine: 'キッコーマンの鉄板焼き(1987年〜、2024年リニューアル)・コルザ専用の醤油で食べる和牛・オマールのシグネチャーコース・1万〜4万円',
    neighborhood: '銀座七丁目、虎屋銀座ビルB1F。銀座駅の近く',
    gf_detail: '実際上グルテンフリーではありません。キッコーマンの醤油(一般の醤油は小麦を含みます)が中心で、ステーキにも専用の醤油を使います。グルテンフリーの選択肢は記載がありません。',
    vegan_detail: 'ヴィーガンではありません。和牛、オマール。北海道の大豆の豆腐で始まるコースもあります。',
    notes: '[鉄板焼き・醤油メーカーのカウンター] キッコーマングループが1987年に開いた鉄板焼きで、2024年末に虎屋銀座ビルに移ってコルザに。内装には醤油樽の杉材、器は特注。カウンターと個室。最初にその日の食材を見せてくれます。イチボや口の中でとろけるストリップロインなどのステーキは、コルザ専用のキッコーマンの醤油と玉ねぎ、フライドガーリックで。2026年10月のシェフズシグネチャーコースは、北海道の大豆の豆腐と秋トリュフとバターナッツのピュレに始まり、柿とセロリの薬味のオマールのグリルなど。接待やお祝いに向いています。',
  });
}

// ================================================================ ヴァンピックル 銀座
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13002502/'; const R = TB + 'dtlrvwlst/';
  const mth = day(['17:00', '23:00']);
  put({
    id: 'tokyo_vinpicoeur_ginza4', name: 'ヴァンピックル 銀座 (vinpicoeur)', category: 'OMNI',
    lat: 35.672412, lng: 139.764867,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Charcoal-grilled skewers (meat, vegetables, Camembert, shiitake), venison, duck or lamb, and a rice porridge to finish; seasonings are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: duck, lamb, venison; vegetable and shiitake skewers exist but no vegan option is described.',
    hours_raw: 'Mon and Thu 17:00–23:00; Fri 17:00–23:30; Sat, Sun and holidays 15:30–23:00; closed Tuesdays, Wednesdays and irregularly (Tabelog).',
    hours: { 0: mth, 3: mth, 4: day(['17:00', '23:30']), 5: day(['15:30', '23:00']), 6: day(['15:30', '23:00']) }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 4-chōme, Ginza Izakaten Bldg 2F — near Ginza Stn',
    cuisine: 'Charcoal skewers and French bistro plates with fine wine · Burgundy and monthly by-the-glass fairs · duck, lamb, venison · counter-centred', cuisine_type: 'french',
    website: 'https://auxamis.com/vinpicoeur_ginza', gmaps: gm('ヴァンピックル 銀座4-3-4'), menu_url: null,
    notes: "[French bistro · charcoal skewers and fine wine] A counter-centred 24-seat wine bistro off Ginza 4-chōme, part of the group behind auxamis.com. One regular first came 20 years ago and finds the quality unchanged. Charcoal-grilled skewers of meat and vegetables, grilled Camembert, shiitake and venison go with a five-appetizer assortment. Mains are duck or lamb, and a rice porridge makes a good finish. The sommelier keeps the wine flowing with short, witty notes, and runs monthly by-the-glass fairs (Alsace in October 2026) plus Burgundy specials. About ¥6,000–10,000 a head.",
    chef_bio: { chef_name: null, roles: [], origin: 'Long-running (a regular first visited 20 years ago, per a 2026 review)', background: 'Group-run (auxamis.com).', philosophy: null, specialty: 'Charcoal skewers with wine.',
      anecdotes: [
        { text: '"We ordered an assortment of 5 appetizers, grilled Camembert cheese skewers, grilled shiitake mushrooms, and charcoal-grilled venison." — October 2026.', source: R + 'B537574485/' },
        { text: '"I first visited this place 20 years ago… The quality has not changed at all since the early days." — October 2026.', source: R + 'B537740565/' },
      ],
      japanese_sources_summary: '食べログ: ヴァンピックル 銀座(vinpicoeur)、銀座4-3-4 銀座居酒店ビル2F、24席、月木17:00〜23:00、金17:00〜23:30、土日祝15:30〜23:00、火水休・不定休、公式サイト auxamis.com。店の紹介: 炭火焼きとファインワイン、10月はアルザスのグラスワインフェア、ブルゴーニュのフェア。2026年の口コミ: 気軽なフレンチ、ソムリエのひと言が楽しい、鴨か仔羊のメイン、肉と野菜の串、締めのお粥、前菜5種盛り、カマンベールの串焼き、椎茸、鹿の炭火焼き、カウンター中心、20年前から変わらない品質。',
      confidence: 'medium', sources: [TB, R + 'B537574485/', R + 'B537740565/', R + 'B461256479/', R + 'B537161916/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter seats; sommelier on hand.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座4-3-4 銀座居酒店ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (October 2026 fair); reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座四丁目3番4号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537574485/', R + 'B461256479/'],
    price_note: 'No prices captured; reviewers spend ¥6,000–10,000.', last_checked: TODAY, items: [
      it('前菜5種盛り合わせ', '', 'Five-appetizer assortment', '', 'Starters', 'ask', 'ask', 'October 2026.', 'appetizers5'),
      it('カマンベールの串焼き', '', 'Grilled Camembert skewer', '', 'Skewers', 'ask', 'no', 'October 2026.', 'camembert'),
      it('鹿の炭火焼き', '', 'Charcoal-grilled venison', '', 'Mains', 'ask', 'no', 'October 2026.', 'venison'),
    ] }, {
    cuisine: '炭火の串とフレンチの皿とファインワイン・ブルゴーニュや毎月のグラスワインフェア・鴨、仔羊、鹿・カウンター中心',
    neighborhood: '銀座四丁目、銀座居酒店ビル2F。銀座駅の近く',
    gf_detail: '要確認。肉・野菜・カマンベール・椎茸の炭火の串、鹿、鴨や仔羊、締めのお粥などで、味つけの内容は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。鴨、仔羊、鹿。野菜や椎茸の串はありますが、ヴィーガンの選択肢は書かれていません。',
    notes: '[フレンチビストロ・炭火の串とファインワイン] 銀座四丁目、カウンター中心の24席のワインビストロで、auxamis.com のグループの店。20年前に初めて来た常連が、品質は当時のままと太鼓判。炭火で焼く肉と野菜の串、カマンベールの串焼き、椎茸、鹿を前菜5種盛りと。メインは鴨か仔羊、締めのお粥もおすすめ。ソムリエの気の利いたひと言でワインが進み、毎月のグラスワインフェア(2026年10月はアルザス)やブルゴーニュの特集も。1人6,000〜10,000円ほど。',
  });
}

save();
