// Ginza Station half-mile sweep (805 m), batch 74 — all-genre phase, small seats (all OMNI).
//   + すし家 一柳 (chef Kazuya Ichiyanagi, ex-Sushiya Mao; eponymous, ownership not stated → OMNI)
//   + とんかつ檍 銀座8丁目店 (Kamata-born tonkatsu chain)
//   + Osteria da K.[kappa] (Italian by the Sushi Yoshitake group; chef Katsunari Isogai)
//   + 鉄板焼 ステーキ 集 銀座 (Kobe-beef teppan; solo chef, unnamed)
// Skipped: 築地 さとう 13002312 (last review 2024-08).
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ すし家 一柳
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13156961/'; const R = TB + 'dtlrvwlst/';
  const TA = 'https://www.tableall.com/restaurant/116';
  const d = day(['11:30', '14:00'], ['17:00', '22:00']);
  put({
    id: 'tokyo_sushiya_ichiyanagi_ginza1', name: 'すし家 一柳 (Sushiya Ichiyanagi)', category: 'OMNI',
    lat: 35.674957, lng: 139.767087,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Edomae sushi and appetizers; no source mentions wheat-free soy sauce or gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sushi omakase.',
    hours_raw: 'Daily 11:30–14:00 and 17:00–22:00; irregular closures depending on bookings (Tabelog). Same omakase price at lunch and dinner. 10% service charge.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 1-chōme, Ginza Koshimion Bldg 1F — near Ginza-itchōme Stn',
    cuisine: 'Edomae sushi, appetizers and drinks at your own pace · 10-seat counter · omakase about ¥40,000–46,000', cuisine_type: 'sushi',
    website: null, gmaps: gm('すし家 一柳 銀座1-5-14'), menu_url: null,
    notes: "[Sushi · relaxed omakase in Ginza 1-chōme] A 10-seat counter (plus a small private room) opened in 2013 by chef Kazuya Ichiyanagi, who spent 13 years at a Ginza sushi house before running Sushiya Mao in the Hotel Seiyo Ginza until it closed. The style is relaxed: start with appetizers and drinks, then have as much or as little nigiri as you like, in the order you like. The rice is firm and sharp with vinegar. The chef is funny and happy to drink along with guests, even boisterous groups. The omakase was about ¥40,000 in 2026 (¥46,000 including the booking fee on TABLEALL), and drinks push bills to ¥50,000+. Same price at lunch; 10% service.",
    chef_bio: { chef_name: 'Kazuya Ichiyanagi', roles: ['chef'], origin: 'Opened 2013 (TABLEALL)', background: 'Born 1973 in Chiba; 13 years at a Ginza sushi restaurant from age 19, then three Tokyo restaurants and Sushiya Mao at Hotel Seiyo Ginza, which earned a star; opened here after the hotel closed in 2013 (TABLEALL). Ownership not stated.', philosophy: 'Counter dining is about sharing the moment (2026 review).', specialty: 'Appetizers-then-nigiri omakase.',
      anecdotes: [
        { text: '"Chef Ichiyanagi was also drinking with us… under the generous hospitality of the chef, who believes that counter dining is about sharing the moment." — September 2026.', source: R + 'B535718397/' },
        { text: '"The chef was very friendly and asked me if I wanted to start with appetizers or sushi." — October 2026.', source: R + 'B537869831/' },
      ],
      japanese_sources_summary: '食べログ: すし家 一柳、銀座1-5-14 銀座コシミオンビル1F、15席(カウンター10)、毎日11:30〜14:00・17:00〜22:00、予約状況により不定休、サービス料10%(2022年5月から)、2013年6月22日開店。TABLEALL: 大将 Kazuya Ichiyanagi(英文表記)、1973年千葉生まれ、19歳から銀座の鮨店で13年、ホテル西洋銀座の「すし屋 真魚」を経て2013年に独立して開店、おまかせ46,000円(予約料込み)。2026年の口コミ: おまかせ約40,000円、昼夜同じ価格、つまみから始めて好きなだけ握り、シャリは酢が強めで硬め、ユーモアのある大将、一緒に飲んでくれる、飲むと1人5万円ほど。',
      confidence: 'medium', sources: [TB, TA, R + 'B535718397/', R + 'B537869831/', R + 'B536527575/', R + 'B536697973/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Relaxed counter; groups welcome.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [{ text: 'The chef prepared sushi based on the guests’ preferences and took requests.', source: R + 'B536527575/' }], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座1-5-14 銀座コシミオンビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座一丁目5番14号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535718397/', TA],
    price_note: 'Omakase price from a September 2026 review; TABLEALL lists ¥46,000 incl. an ¥8,000 booking fee.', last_checked: TODAY, items: [
      it('おまかせ', 'omakase', 'Omakase: appetizers and nigiri at your own pace', '¥40,000', 'Courses', 'ask', 'no', 'Per person, September 2026; 10% service extra.', 'omakase'),
    ] }, {
    cuisine: '好きなペースで楽しむ江戸前鮨とつまみ・カウンター10席・おまかせ約4万〜4.6万円',
    neighborhood: '銀座一丁目、銀座コシミオンビル1F。銀座一丁目駅の近く',
    gf_detail: '要確認。江戸前鮨とつまみで、小麦不使用の醤油やグルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。鮨のおまかせです。',
    notes: '[鮨・銀座一丁目の気取らないおまかせ] カウンター10席と小さな個室の鮨店で、2013年に大将の Kazuya Ichiyanagi(英文表記)が開店。銀座の鮨店で13年修業したあと、ホテル西洋銀座の「すし屋 真魚」を閉館まで任された人です。スタイルは自由で、つまみとお酒から始め、握りは好きなだけ好きな順番で。シャリは硬めで酢がきりっと。大将はユーモアがあり、にぎやかな客とも一緒に飲んでくれます。おまかせは2026年で約40,000円(TABLEALLでは予約料込みで46,000円)、飲むと5万円を超えることも。昼も同じ価格、サービス料10%。',
  });
}

// ================================================================ とんかつ檍 銀座8丁目店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13219635/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:00', '15:00'], ['17:00', '21:00']), we = day(['11:00', '15:00'], ['17:00', '20:00']);
  put({
    id: 'tokyo_tonkatsu_aoki_ginza8', name: 'とんかつ檍 銀座8丁目店 (Tonkatsu Aoki)', category: 'OMNI',
    lat: 35.668232, lng: 139.761491,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: breaded, deep-fried pork cutlets.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork cutlets.',
    hours_raw: 'Mon, Tue, Thu, Fri 11:00–15:00 and 17:00–21:00; Sat, Sun and holidays 11:00–15:00 and 17:00–20:00; closed Wednesdays and the day after some holidays (Tabelog).',
    hours: { 0: wk, 1: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 8-chōme, Dai-san Soiree de Bldg B1F — 6 min from JR Shimbashi Ginza exit',
    cuisine: 'Thick-cut tonkatsu from Kamata · premium loin set ¥1,980 · rock salt, wasabi and many condiments · long queues', cuisine_type: 'katsu',
    website: 'https://tonkatsu-aoki.com/', gmaps: gm('とんかつ檍 銀座8丁目店'), menu_url: null,
    notes: "[Tonkatsu · Kamata's famous thick cutlets in Ginza 8-chōme] A 15-seat basement branch of Tonkatsu Aoki, the Kamata shop known for very thick, rosy cutlets. Expect about an hour's queue on weekend lunchtimes. Staff take your order in line, so food arrives as you sit. The premium loin set (¥1,980 in October 2026) has a thin, very crunchy coat and meat cooked pink. Shiny rice and a counter full of condiments (rock salt, wasabi, soy sauce, chili) let you vary it; rock salt is recommended for the tenderloin. The counter chef is cheerful. One diner felt rushed to order in the queue.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 26 March 2018 (Tabelog); branch of the Kamata-born Aoki', background: 'Chain-run (tonkatsu-aoki.com).', philosophy: null, specialty: 'Thick-cut loin and tenderloin.',
      anecdotes: [
        { text: '"Premium Loin Cutlet Set Meal JPY 1,980… The meat was cooked quite rare." — October 2026, after an hour\'s Sunday wait.', source: R + 'B537328346/' },
        { text: '"There was a wide variety of condiments available, such as wasabi, salt, soy sauce, and chili." — October 2026.', source: R + 'B537356201/' },
      ],
      japanese_sources_summary: '食べログ: とんかつ檍 銀座8丁目店(とんかつ あおき)、銀座8-8-7 第3ソワレ・ドビルB1F、15席(カウンター5・4人卓2・2人卓1)、月火木金11:00〜15:00・17:00〜21:00、土日祝11:00〜15:00・17:00〜20:00、水休、2018年3月26日開店、公式サイト tonkatsu-aoki.com。2026年10月の口コミ: 休日の昼は約1時間待ち、並びながら注文、特上ロースかつ定食1,980円、薄い衣でカリカリ、レアな火入れ、厚切りでやわらかい、艶のあるご飯、わさび・塩・醤油・唐辛子など薬味が豊富、ヒレは岩塩で、蒲田生まれの店、カウンターの大将が明るい、注文を急かされたとの声も。',
      confidence: 'medium', sources: [TB, R + 'B537328346/', R + 'B537356201/', R + 'B537467970/', R + 'B537301834/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Queue; order while waiting.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座8-8-7 第3ソワレ・ドビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座八丁目8番7号 (go) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537328346/'],
    price_note: 'Price from an October 2026 review.', last_checked: TODAY, items: [
      it('特上ロースかつ定食', 'tokujoo roosu katsu teishoku', 'Premium loin tonkatsu set', '¥1,980', 'Sets', 'no', 'no', 'October 2026.', 'tokujo_rosu'),
      it('ヒレかつ定食', 'hire katsu teishoku', 'Tenderloin tonkatsu set (try with rock salt)', '', 'Sets', 'no', 'no', '', 'hire'),
    ] }, {
    cuisine: '蒲田生まれの厚切りとんかつ・特上ロースかつ定食1,980円・岩塩、わさびなど薬味が豊富・行列店',
    neighborhood: '銀座八丁目、第3ソワレ・ドビルB1F。JR新橋駅銀座口から徒歩6分',
    gf_detail: 'グルテンフリーではありません。衣をつけて揚げたとんかつです。',
    vegan_detail: 'ヴィーガンではありません。豚肉のとんかつです。',
    notes: '[とんかつ・銀座八丁目で蒲田の名店の厚切り] 分厚くロゼ色のとんかつで知られる蒲田の「檍」の、地下にある15席の店。休日の昼は1時間ほど並ぶことも。並んでいる間に注文を取るので、席に着くとすぐ料理が出てきます。特上ロースかつ定食(2026年10月は1,980円)は薄くてザクザクの衣に、ピンク色の火入れ。艶のあるご飯と、カウンターに並ぶ岩塩、わさび、醤油、唐辛子などの薬味で味を変えられ、ヒレは岩塩がおすすめ。カウンターの大将は明るい人。並んでいる間に注文を急かされたという声も。',
  });
}

// ================================================================ Osteria da K.[kappa]
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13172018/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['18:00', '22:00']);
  put({
    id: 'tokyo_osteria_da_kappa_ginza8', name: 'Osteria da K.[kappa] (オステリア ダ カッパ)', category: 'OMNI',
    lat: 35.668855, lng: 139.761593,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seafood-led à la carte: carpaccio, acqua pazza and roast beef sit alongside sea-urchin spaghetti, seafood ragù and carbonara risotto. No source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood, horse-meat carpaccio, tripe, burrata.',
    hours_raw: 'Mon–Fri 18:00–22:00 (L.O. 21:00); Sat 17:00–21:00; closed Sundays and holidays; irregular closures (Tabelog). Allow 2–2.5 hours.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: day(['17:00', '21:00']) }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 8-chōme on Hanatsubaki-dōri, Ginza Fujii Bldg 2 5F — 5 min from Ginza Stn A2',
    cuisine: 'Seafood Italian from the Sushi Yoshitake group · sea-urchin spaghetti, kinmedai acqua pazza, abalone ragù · à la carte', cuisine_type: 'other',
    website: null, gmaps: gm('Osteria da K. 銀座8-7-2'), menu_url: null,
    notes: "[Italian · sushi-grade seafood from the Sushi Yoshitake group] An 18-seat Italian restaurant (8 at the counter) on Hanatsubaki-dōri, opened in 2014 by the group behind Sushi Yoshitake. It buys fish from the same wholesalers as top sushi bars. Chef Katsunari Isogai, who trained in Japan and Italy, learned fish handling at Sushi Yoshitake. À la carte from an open kitchen: the day's carpaccio, horse-meat carpaccio, burrata, tripe, mussels in white wine, cold spaghetti with Hokkaidō sea urchin and seaweed, seafood ragù with abalone (ask for the tomato version), carbonara risotto, kinmedai or nodoguro acqua pazza and roast beef. A 2026 diner describes it as run by a couple, so order everything at once. Allow 2–2.5 hours.",
    chef_bio: { chef_name: 'Katsunari Isogai (chef, per Tabelog)', roles: ['chef'], origin: 'Opened 25 August 2014 (Tabelog)', background: 'Trained at restaurants in Japan and Italy and learned fish handling at Sushi Yoshitake (Tabelog listing); restaurant of the Sushi Yoshitake group.', philosophy: null, specialty: 'Seafood pasta; acqua pazza.',
      anecdotes: [
        { text: '"I ordered the horse meat carpaccio, mussels steamed in white wine, carbonara risotto, and spaghetti with seafood ragu featuring abalone (I recommend ordering it with a tomato base)." — September 2026.', source: R + 'B537582404/' },
        { text: '"Since it\'s run by a couple, it\'s best to place all your orders at once." — September 2026.', source: R + 'B535746992/' },
      ],
      japanese_sources_summary: '食べログ: Osteria da K.[kappa](オステリア ダ カッパ)、銀座8-7-2 銀座藤井ビル2 5F、花椿通り沿い、銀座駅A2出口から徒歩5分、18席(カウンター8)、月〜金18:00〜22:00、土17:00〜21:00、日祝休、不定休、所要2〜2.5時間、2014年8月25日開店。店の紹介: ミシュラン三つ星「鮨 よしたけ」のイタリアン、一流鮨店と同じ仲卸の魚、雲丹のパスタ、金目鯛やのどぐろのアクアパッツァ、鮑のラグー、シェフ Katsunari Isogai(英文表記)。2026年の口コミ: 本日のカルパッチョ、ブッラータ、トリッパ、北海道の雲丹と生海苔の冷製スパゲッティ、魚介のラグー、カルボナーラのリゾット、馬肉のカルパッチョ、ムール貝の白ワイン蒸し、ローストビーフ、夫婦で営んでいるので注文はまとめて。',
      confidence: 'medium', sources: [TB, R + 'B537582404/', R + 'B535039660/', R + 'B535746992/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small team — order all at once; allow 2+ hours.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座8-7-2 銀座藤井ビル2 5F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座八丁目7番2号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537582404/', R + 'B535039660/'],
    price_note: 'No prices captured; reviewers spend ¥10,000–15,000.', last_checked: TODAY, items: [
      it('北海道産雲丹と生海苔の冷製スパゲッティ', '', 'Cold spaghetti with Hokkaidō sea urchin and fresh seaweed', '', 'Pasta', 'no', 'no', '', 'uni_cold'),
      it('鮑の魚介ラグー スパゲッティ', '', 'Seafood ragù spaghetti with abalone', '', 'Pasta', 'no', 'no', '', 'abalone_ragu'),
      it('金目鯛のアクアパッツァ', '', 'Kinmedai acqua pazza', '', 'Mains', 'ask', 'no', '', 'acqua_pazza'),
    ] }, {
    cuisine: '鮨 よしたけのグループの魚介イタリアン・雲丹のスパゲッティ、金目鯛のアクアパッツァ、鮑のラグー・アラカルト',
    neighborhood: '銀座八丁目の花椿通り沿い、銀座藤井ビル2 5F。銀座駅A2出口から徒歩5分',
    gf_detail: '要確認。カルパッチョ、アクアパッツァ、ローストビーフのほか、雲丹のスパゲッティ、魚介のラグー、カルボナーラのリゾットなど魚介中心のアラカルト。グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。魚介、馬肉のカルパッチョ、トリッパ、ブッラータ。',
    notes: '[イタリアン・鮨 よしたけのグループの鮨品質の魚介] 花椿通り沿い、2014年に「鮨 よしたけ」のグループが開いた18席(カウンター8)のイタリアン。一流鮨店と同じ仲卸から魚を仕入れています。シェフの Katsunari Isogai(英文表記)は国内外の名店で修業し、鮨 よしたけで魚の扱いを身につけた人。オープンキッチンからのアラカルトで、本日のカルパッチョ、馬肉のカルパッチョ、ブッラータ、トリッパ、ムール貝の白ワイン蒸し、北海道の雲丹と生海苔の冷製スパゲッティ、鮑入りの魚介ラグー(トマトベースがおすすめ)、カルボナーラのリゾット、金目鯛やのどぐろのアクアパッツァ、ローストビーフ。2026年の客によれば夫婦で営んでいるので、注文はまとめて。2〜2.5時間を見込んで。',
  });
}

// ================================================================ 鉄板焼 ステーキ 集 銀座
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130103/13234842/'; const R = TB + 'dtlrvwlst/';
  const d = day(['12:00', '14:30'], ['17:30', '23:00']);
  put({
    id: 'tokyo_shu_ginza_teppan_ginza8', name: '鉄板焼 ステーキ 集 銀座 (SHU GINZA)', category: 'OMNI',
    lat: 35.668483, lng: 139.759675,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Teppan and charcoal courses of Kobe beef, abalone and fish; one course wrapped mackerel in kadaif (wheat pastry) and fish came in cream sauce. No source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Kobe beef, abalone, sea urchin, fish.',
    hours_raw: 'Mon–Sat 12:00–14:30 (food L.O. 13:00) and 17:30–23:00 (food L.O. 21:30); closed Sundays and holidays (Tabelog).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 8-chōme, Cortile Ginza IV B1F — 3 min from Shimbashi Stn',
    cuisine: 'Kobe-beef teppan and charcoal grill · monthly appetizers · lunch courses about ¥5,000–10,000 · garlic rice', cuisine_type: 'other',
    website: 'https://shu-ginza.jp', gmaps: gm('鉄板焼 ステーキ 集 銀座'), menu_url: null,
    notes: "[Teppanyaki · Kobe beef in a Ginza 8-chōme basement] A 16-seat teppan and charcoal-grill restaurant (10 at the counter, plus a 6-seat teppan room) open since 2019, serving Kobe beef, premium Wagyu and seafood from Toyosu and Tsukiji. Appetizers change monthly. 2026 lunch courses opened with sea urchin and salmon roe, or abalone, tomato and okra, followed by corn soup, mackerel wrapped in kadaif, fish in white cream sauce and lean beef. Each guest got an abalone at dinner. The garlic rice at the end (sometimes extra) is the favourite. A single chef cooks and talks with every table. Glass of white wine ¥1,600.",
    chef_bio: { chef_name: null, roles: ['chef'], origin: 'Opened 3 June 2019 (Tabelog)', background: 'A single chef runs the counter (2026 reviews), unnamed.', philosophy: 'Lively counter conversation with the chef (Tabelog listing).', specialty: 'Kobe beef; garlic rice.',
      anecdotes: [
        { text: '"The timing was perfect, and all the dishes were delicious! The first appetizer with sea urchin and salmon roe was so luxurious." — June 2026.', source: R + 'B516331480/' },
        { text: '"The course included cold appetizers of abalone, tomato, and okra, corn cream soup, mackerel wrapped in kadaif, salad, and meat, with an additional charge for garlic rice." — August 2026, lunch.', source: R + 'B534311788/' },
      ],
      japanese_sources_summary: '食べログ: 鉄板焼 ステーキ 集 銀座(SHU GINZA)、銀座8-5-18 Cortile GinzaⅣ BLDG B1F、新橋駅から徒歩3分、16席(鉄板カウンター10・鉄板個室6)、月〜土12:00〜14:30・17:30〜23:00、日祝休、2019年6月3日開店、公式サイト shu-ginza.jp。店の紹介: 神戸牛、厳選和牛、豊洲・築地の魚介、毎月替わる前菜、シェフとの会話。2026年の口コミ: 雲丹といくらの前菜、鮑・トマト・オクラの冷前菜、とうもろこしのスープ、鯖のカダイフ包み、魚の白いクリームソース、赤身の肉、ガーリックライス(追加料金のことも)、1人1個の鮑、シェフ1人で切り盛り、グラスワイン1,600円、昼は5,000〜10,000円。',
      confidence: 'medium', sources: [TB, R + 'B516331480/', R + 'B534311788/', R + 'B528111595/', R + 'B536966121/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Chatty solo chef at the counter.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [{ text: 'The chef accommodated a diner’s requests.', source: R + 'B516331480/' }], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座8-5-18 Cortile GinzaⅣ BLDG B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated May–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座八丁目5番18号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534311788/', R + 'B528111595/'],
    price_note: 'No course prices captured; reviewers spend ¥5,000–10,000 at lunch.', last_checked: TODAY, items: [
      it('ランチコース', 'ranchi koosu', 'Lunch course: cold appetizer, soup, fish, salad, beef (garlic rice extra)', '', 'Courses', 'ask', 'no', 'August 2026.', 'lunch_course'),
      it('ガーリックライス', 'gaarikku raisu', 'Garlic rice', '', 'Rice', 'ask', 'no', '', 'garlic_rice'),
    ] }, {
    cuisine: '神戸牛の鉄板焼きと炭火焼き・毎月替わる前菜・ランチコース5,000〜10,000円ほど・ガーリックライス',
    neighborhood: '銀座八丁目、Cortile GinzaⅣ BLDG B1F。新橋駅から徒歩3分',
    gf_detail: '要確認。神戸牛、鮑、魚の鉄板・炭火焼きのコースで、鯖のカダイフ包み(小麦の生地)や魚のクリームソースが出たことも。グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。神戸牛、鮑、雲丹、魚。',
    notes: '[鉄板焼き・銀座八丁目の地下で神戸牛] 2019年開店、鉄板カウンター10席と6席の鉄板個室の16席で、神戸牛や厳選和牛、豊洲・築地の魚介を鉄板と炭火で。前菜は毎月替わります。2026年のランチコースは雲丹といくら、または鮑・トマト・オクラの冷前菜に始まり、とうもろこしのスープ、鯖のカダイフ包み、白いクリームソースの魚、赤身の肉など。夜は1人に1個ずつ鮑も。締めのガーリックライス(追加料金のことも)が一番人気。シェフ1人で焼きながら各テーブルと会話。グラスの白ワインは1,600円。',
  });
}

save();
