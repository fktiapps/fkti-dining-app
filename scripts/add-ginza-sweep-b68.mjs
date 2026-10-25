// Ginza Station half-mile sweep (805 m), batch 68 — M&P-chance candidates first, then two more (all OMNI).
//   + チョウシ屋 (croquette-bun takeaway, founded 1927 as a butcher's per TV Tokyo; current owner not named in any source → OMNI)
//   + 佛蘭西料理 銀座 誠 (à la carte French, chef Makoto ex-Apicius per a 2023 review; ownership not stated → OMNI)
//   + RIGOLETTO KITCHEN (HUGE group; pasta lunch sets; late-night)
//   + ドイツ居酒屋 JSレネップ (German izakaya under the tracks; DLG-gold sausages)
// Skipped: ＤＡＴ 13053796 (last review 2008), 淡路島生パスタ 和太利庵 13261073 (delivery only; last review 2021).
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ チョウシ屋
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13012798/'; const R = TB + 'dtlrvwlst/';
  const TV = 'https://www.tv-tokyo.co.jp/adomachi/backnumber/20220910/143151.html';
  const d = day(['11:00', '14:00'], ['16:00', '18:00']);
  put({
    id: 'tokyo_choshiya_ginza3', name: 'チョウシ屋 (Choshiya)', category: 'OMNI',
    lat: 35.670892, lng: 139.768891,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: breaded, deep-fried croquettes and cutlets in bread rolls or sliced bread.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: ham cutlets and pork cutlets; the croquettes come from a butcher’s kitchen and no source says they are meat-free.',
    hours_raw: 'Tue–Fri 11:00–14:00 and 16:00–18:00, until sold out; closed Mon, Sat, Sun and holidays (Tabelog). Takeaway only.',
    hours: { 1: d, 2: d, 3: d, 4: d }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 3-chōme, quiet back lane behind Ginza Haru-chan Ramen — 2 min from Higashi-Ginza Stn exit A7',
    cuisine: 'Takeaway croquette buns since 1927 · croquette or ham-cutlet bun ¥430 · croquette ¥270 · house sauce', cuisine_type: 'other',
    website: null, gmaps: gm('チョウシ屋 銀座3-11-6'), menu_url: null,
    notes: "[Takeaway · Ginza's croquette buns since 1927] A tiny, retro takeaway counter on a quiet lane in Ginza 3-chōme, founded in 1927 as a butcher's, where kitchen and shop are one room. Croquettes, ham cutlets and pork cutlets are fried and tucked into a soft roll or sliced bread, cut in half and wrapped in paper. In 2026 a croquette bun or ham-cutlet bun cost ¥430 and a croquette alone ¥270. Ask for extra sauce and it's made to order. The croquette is crisp and light, best warm or reheated. Weekdays only (Tue–Fri), short hours, and it closes when sold out.",
    chef_bio: { chef_name: null, roles: [], origin: 'Founded 1927 (昭和2年) as a butcher’s (TV Tokyo, 2022)', background: 'A secondary source names Abe Seiroku (阿部清六) as the 1927 founder; no source names who runs the shop today.', philosophy: null, specialty: 'Croquette buns.',
      anecdotes: [
        { text: '"Established in 1927, this shop is famous for its croquette buns, allowing you to choose between a soft bread roll or sliced bread… Croquette Bread (JPY 430), Ham Cutlet Bread (JPY 430)." — August 2026.', source: R + 'B533081684/' },
        { text: '「ソース多め」にも対応し、その際は注文から作るので少し時間がかかる様です。— 2026年6月', source: R + 'B530596357/' },
      ],
      japanese_sources_summary: '食べログ: チョウシ屋、銀座3-11-6、東銀座駅A7出口から徒歩2分、テイクアウトのみ、火〜金11:00〜14:00・16:00〜18:00、売り切れ次第終了、月土日祝休。テレビ東京(2022年): 昭和2年創業の精肉店、揚げたてのコロッケ。ざつねた: 洋食店「長楽軒」のコックだった阿部清六が1927年に立ち上げた精肉店。2026年の口コミ: 「銀座はるちゃんラーメン」裏手の路地、コロッケ・ハムカツ・カツをコッペパンか食パンに挟む、コロッケパン・ハムカツパン各430円、コロッケ単品270円、ソース多めは注文後に作る、半分に切ってくれる。',
      confidence: 'medium', sources: [TB, TV, R + 'B533081684/', R + 'B530596357/', R + 'B535272432/', 'https://zatsuneta.com/archives/006753.html'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point and order at the counter; short weekday hours.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座3-11-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated May–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座三丁目11番6号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533081684/', R + 'B535272432/'],
    price_note: 'Prices from August–September 2026 reviews.', last_checked: TODAY, items: [
      it('コロッケパン', 'korokke pan', 'Croquette bun (roll or sliced bread)', '¥430', 'Buns', 'no', 'no', 'August 2026.', 'croquette_bun'),
      it('ハムカツパン', 'hamukatsu pan', 'Ham-cutlet bun', '¥430', 'Buns', 'no', 'no', 'August 2026.', 'hamkatsu_bun'),
      it('コロッケ', 'korokke', 'Croquette', '¥270', 'Fried', 'no', 'no', 'September 2026.', 'croquette'),
    ] }, {
    cuisine: '1927年からのテイクアウトのコロッケパン・コロッケパン、ハムカツパン各430円・コロッケ270円・オリジナルソース',
    neighborhood: '銀座三丁目、銀座はるちゃんラーメン裏手の静かな路地。東銀座駅A7出口から徒歩2分',
    gf_detail: 'グルテンフリーではありません。衣をつけて揚げたコロッケやカツをパンに挟んでいます。',
    vegan_detail: 'ヴィーガンではありません。ハムカツやカツ。コロッケも肉屋の厨房のもので、肉不使用とは書かれていません。',
    notes: '[テイクアウト・1927年からの銀座のコロッケパン] 銀座三丁目の静かな路地にある、厨房と売り場がひと続きのレトロで小さな持ち帰りの店で、1927年に精肉店として創業。コロッケ、ハムカツ、カツを揚げて、ふわふわのコッペパンか食パンに挟み、半分に切って紙で包んでくれます。2026年はコロッケパン・ハムカツパンが各430円、コロッケ単品270円。「ソース多め」は注文後に作ってくれます。コロッケはサクッと軽く、温かいうちか温め直して。火〜金のみ、短い営業時間で、売り切れ次第終了。',
  });
}

// ================================================================ 佛蘭西料理 銀座 誠
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13186596/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['18:00', '23:00']);
  put({
    id: 'tokyo_ginza_makoto_french_ginza7', name: '佛蘭西料理 銀座 誠 (French Ryori Ginza Makoto)', category: 'OMNI',
    lat: 35.669866, lng: 139.76202,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Classic à la carte French (pâtés, fish carpaccio, duck steak, veal with lentils); no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: pâtés, flounder, duck, veal, game.',
    hours_raw: 'Mon–Fri 18:00–23:00; Sat 18:00–21:30; closed Sundays (Tabelog). Smoking private room for 4–5 (2023 review).',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: day(['18:00', '21:30']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 7-chōme, Ginza HIT Bldg B1F, a block behind Namiki-dōri — near Ginza Stn',
    cuisine: 'Classic French, à la carte · pigeon and quail pâtés, flounder carpaccio, duck steak · about ¥10,000–15,000', cuisine_type: 'french',
    website: 'https://ginzamakoto.jimdo.com/', gmaps: gm('佛蘭西料理 銀座 誠 銀座HITビル'), menu_url: null,
    notes: "[French · classic à la carte in a Ginza 7-chōme basement] A calm, wood-toned basement French restaurant of about 20 seats, open since September 2015. There's a counter at the back and a private room. Rare for French in Ginza, you can order à la carte rather than a set course. Regulars return for the pâtés (pigeon, quail), flounder carpaccio with paprika sauce, a thick, tender duck steak, veal with lentils and blue-cheese sauce, and game, with good wine pairings. A 2023 regular names the chef as Makoto, formerly of Apicius. About ¥10,000–15,000 a head.",
    chef_bio: { chef_name: 'Chef Makoto (given name, per a 2023 review)', roles: ['chef'], origin: 'Opened September 2015 (2020 review)', background: 'Formerly of Apicius (2023 review); ownership not stated.', philosophy: null, specialty: 'Classic pâtés; à la carte French.',
      anecdotes: [
        { text: '"Duck Steak — Thick yet tender, full of flavor. Flounder Carpaccio with Paprika Sauce — The paprika sauce pairs perfectly with the flounder." — July 2026, 5th visit.', source: R + 'B464249643/' },
        { text: '"Chef Makoto, originally from Apicius, continues to impress with… classic dishes and wonderful wine pairings." — February 2023.', source: R + 'B433191659/' },
      ],
      japanese_sources_summary: '食べログ: 佛蘭西料理 銀座 誠(フランスリョウリ ギンザ マコト)、銀座7-6-4 銀座HITビルB1F、月〜金18:00〜23:00、土18:00〜21:30、日休、公式サイト ginzamakoto.jimdo.com。口コミ: 2015年9月開店、並木通りから一本裏、木目の落ち着いた約20席(奥にカウンター、個室)、アラカルトで頼めるフレンチ、鳩やうずらのパテ、平目のカルパッチョのパプリカソース、鴨のステーキ(2026年7月)、仔牛とレンズ豆のブルーチーズソース、ジビエ、ワインとの相性、シェフの Makoto(英文の口コミの表記)は元アピシウス(2023年)。',
      confidence: 'low', sources: [TB, R + 'B464249643/', R + 'B433191659/', R + 'B469597010/', R + 'B495448516/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small basement room; book ahead.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-6-4 銀座HITビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; a July 2026 review (5th visit).' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目6番4号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B464249643/', R + 'B433191659/'],
    price_note: 'No prices captured; reviewers spend ¥10,000–15,000.', last_checked: TODAY, items: [
      it('鴨のステーキ', 'kamo no suteeki', 'Duck steak', '', 'Mains', 'ask', 'no', 'July 2026.', 'duck'),
      it('平目のカルパッチョ パプリカソース', '', 'Flounder carpaccio with paprika sauce', '', 'Starters', 'ask', 'no', 'July 2026.', 'flounder'),
      it('鳩のパテ', 'hato no pate', 'Pigeon pâté', '', 'Starters', 'no', 'no', '2023.', 'pigeon_pate'),
    ] }, {
    cuisine: 'アラカルトのクラシックなフレンチ・鳩やうずらのパテ、平目のカルパッチョ、鴨のステーキ・1万〜1.5万円ほど',
    neighborhood: '銀座七丁目、銀座HITビルB1F、並木通りから一本裏。銀座駅の近く',
    gf_detail: '要確認。パテ、平目のカルパッチョ、鴨のステーキ、仔牛とレンズ豆などクラシックなアラカルトのフレンチで、グルテンフリーの対応は書かれていません。',
    vegan_detail: '記述上はヴィーガンではありません。パテ、平目、鴨、仔牛、ジビエ。',
    notes: '[フレンチ・銀座七丁目の地下でクラシックなアラカルト] 2015年9月開店、木目の落ち着いた約20席の地下のフレンチで、奥にカウンター、個室も。銀座のフレンチには珍しく、コースではなくアラカルトで頼めます。常連が通うのは、鳩やうずらのパテ、パプリカソースの平目のカルパッチョ、厚くて柔らかい鴨のステーキ、仔牛とレンズ豆のブルーチーズソース、ジビエなどと、料理に合うワイン。2023年の常連によれば、シェフは元アピシウスの Makoto(英文の口コミの表記)。1人1万〜1.5万円ほど。',
  });
}

// ================================================================ RIGOLETTO KITCHEN
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130103/13043443/'; const R = TB + 'dtlrvwlst/';
  const mt = day(['11:30', '15:00'], ['17:00', '02:00']);
  put({
    id: 'tokyo_rigoletto_kitchen_ginza8', name: 'RIGOLETTO KITCHEN (リゴレット キッチン)', category: 'OMNI',
    lat: 35.670024, lng: 139.759685,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: lunch is a pasta set (linguine) with optional pizza; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: shirasu peperoncino, prosciutto and egg Bismarck pizza, crema catalana.',
    hours_raw: 'Mon–Thu 11:30–15:00 and 17:00–02:00; Fri to 04:00; Sat 11:30–23:00; Sun and holidays 11:30–22:00 (Tabelog).',
    hours: { 0: mt, 1: mt, 2: mt, 3: mt, 4: day(['11:30', '15:00'], ['17:00', '04:00']), 5: day(['11:30', '23:00']), 6: day(['11:30', '22:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 8-chōme, Nitta Bldg B1F — near Shimbashi and Ginza Stns',
    cuisine: 'Italian-Spanish kitchen (HUGE group) · ¥1,600 pasta lunch set · Bismarck pizza, crema catalana · open late', cuisine_type: 'other',
    website: 'https://www.huge.co.jp/restaurant/rigoletto', gmaps: gm('RIGOLETTO KITCHEN 銀座8-2-1'), menu_url: null,
    notes: "[Italian · HUGE group's late-night basement kitchen] A 90-seat basement restaurant of the HUGE group (Rigoletto), open since 2007 and until 2 a.m. most nights, 4 a.m. on Fridays. Lunch is popular and hard to walk into. The ¥1,600 pasta set (October 2026) includes a generous salad with lotus-root chips, a drink and dessert; one diner chose a chewy linguine peperoncino with shiso and shirasu. Add-ons include a prosciutto and runny-egg Bismarck pizza, and the dessert to have is the ice-cold, crunchy crema catalana. A spicy arrabbiata also gets praise. Service can be stretched when short-staffed. Book via the group's app.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 20 September 2007 (Tabelog)', background: 'Group-run (HUGE, huge.co.jp).', philosophy: null, specialty: 'Pasta; crema catalana.',
      anecdotes: [
        { text: '"I ordered the pasta set (salad, drink, pasta, and dessert) for JPY 1600, and added a pizza on the side… peperoncino with shiso and shirasu." — October 2026.', source: R + 'B533209253/' },
        { text: '"The dessert, Catalana, was impressively cold with a crunchy texture." — October 2026.', source: R + 'B538025621/' },
      ],
      japanese_sources_summary: '食べログ: RIGOLETTO KITCHEN(リゴレット キッチン)、銀座8-2-1 ニッタビルB1F、90席、月〜木11:30〜15:00・17:00〜翌2:00、金は翌4:00まで、土11:30〜23:00、日祝11:30〜22:00、2007年9月20日開店、運営 HUGE(huge.co.jp)、予約アプリ THE HUGE CLUB。2026年10月の口コミ: 予約なしでは入りにくいランチ、パスタセット1,600円(サラダ・ドリンク・パスタ・デザート、蓮根チップスのサラダ)、大葉としらすのペペロンチーノ(リングイネ)、生ハムと半熟卵のビスマルク、カタラーナ、アラビアータ、スタッフが少ないと提供が遅いことも。',
      confidence: 'medium', sources: [TB, R + 'B533209253/', R + 'B538025621/', R + 'B537711090/', R + 'B472844879/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book lunch ahead; open late.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座8-2-1 ニッタビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座八丁目2番1号 (go) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533209253/'],
    price_note: 'Lunch price from an October 2026 review.', last_checked: TODAY, items: [
      it('パスタセット', 'pasuta setto', 'Pasta lunch set: salad, drink, pasta, dessert', '¥1,600', 'Lunch', 'no', 'no', 'October 2026.', 'pasta_set'),
      it('ビスマルク', 'bisumaruku', 'Bismarck pizza with prosciutto and runny egg', '', 'Pizza', 'no', 'no', '', 'bismarck'),
      it('カタラーナ', 'kataraana', 'Crema catalana', '', 'Dessert', 'ask', 'no', '', 'catalana'),
    ] }, {
    cuisine: 'イタリアン&スペインのキッチン(HUGEグループ)・パスタのランチセット1,600円・ビスマルク、カタラーナ・深夜営業',
    neighborhood: '銀座八丁目、ニッタビルB1F。新橋駅・銀座駅の近く',
    gf_detail: '実際上グルテンフリーではありません。ランチはパスタ(リングイネ)のセットで、ピザも追加でき、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: '記述上はヴィーガンではありません。しらすのペペロンチーノ、生ハムと卵のビスマルク、カタラーナ。',
    notes: '[イタリアン・HUGEグループの深夜まで開く地下のキッチン] HUGEグループ(リゴレット)の90席の地下のレストランで、2007年開店、ほぼ毎晩深夜2時まで、金曜は朝4時まで。ランチは人気で予約なしでは入りにくいほど。パスタセット(2026年10月は1,600円)は蓮根チップスをのせたたっぷりのサラダ、ドリンク、デザート付きで、もちもちのリングイネの大葉としらすのペペロンチーノなど。追加で生ハムと半熟卵のビスマルクも。デザートはひんやりパリッとしたカタラーナがおすすめ。ピリ辛のアラビアータも好評。スタッフが少ない日は提供が遅れることも。予約はグループのアプリから。',
  });
}

// ================================================================ ドイツ居酒屋 JSレネップ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130102/13007939/'; const R = TB + 'dtlrvwlst/';
  const tt = day(['16:00', '23:15']);
  put({
    id: 'tokyo_js_renep_yurakucho', name: 'ドイツ居酒屋 JSレネップ (JS Renep)', category: 'OMNI',
    lat: 35.672915, lng: 139.760605,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: German draft beer, German bread and sausages; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: sausages, Eisbein, schweinshaxe, beer stew, marinated sardines.',
    hours_raw: 'Mon 16:00–22:30; Tue–Thu 16:00–23:15; Fri and days before holidays 16:00–23:30; Sat 12:00–23:00; Sun and holidays 12:00–22:30; closing times vary — call ahead (Tabelog).',
    hours: { 0: day(['16:00', '22:30']), 1: tt, 2: tt, 3: tt, 4: day(['16:00', '23:30']), 5: day(['12:00', '23:00']), 6: day(['12:00', '22:30']) }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yūrakuchō 2-chōme, under the JR tracks on the Bic Camera side — 2 min from Yūrakuchō, Ginza or Hibiya Stn',
    cuisine: 'German izakaya · DLG gold-award ham and sausages, Eisbein, beer stew · five German draft beers', cuisine_type: 'other',
    website: null, gmaps: gm('ドイツ居酒屋 JSレネップ 有楽町'), menu_url: null,
    notes: "[German · beer and sausages under the Yūrakuchō tracks] A long-established 90-seat German izakaya under the JR tracks near Hibiya, with tables only, good for walk-ins and parties. The house ham and sausages have won DLG gold awards; the beer stew and Eisbein are the signatures. Five German draft beers, including Bitburger, weizen and dark beer, come in heavy ceramic mugs. 2026 diners liked the assorted sausages (white, herb), schweinshaxe, German potatoes, German bread, marinated sardines and an appetizer sampler. Courses with free-flow suit groups.",
    chef_bio: { chef_name: null, roles: [], origin: 'Long-established (Tabelog listing); opening date not given', background: 'No source names the owner.', philosophy: null, specialty: 'DLG-award sausages; Eisbein.',
      anecdotes: [
        { text: '"We started with a toast using Bitburger… all the varieties—white, herb, and schweinshaxe—were all tasty." — October 2026.', source: R + 'B537520636/' },
        { text: '"The marinated sardines are rich in flavor, perfectly balanced with acidity… The German potatoes have just the right amount of saltiness." — October 2026.', source: R + 'B537788871/' },
      ],
      japanese_sources_summary: '食べログ: ドイツ居酒屋 JSレネップ(ジェーエスレネップ)、千代田区有楽町2-1-8、JR高架下のビックカメラ側、有楽町・銀座・日比谷駅から徒歩2分、90席(テーブルのみ)、月16:00〜22:30、火〜木〜23:15、金・祝前日〜23:30、土12:00〜23:00、日祝12:00〜22:30(閉店時間は変動あり)。店の紹介: 老舗のドイツ料理、DLG金賞のハムとソーセージ、ビール煮込みとアイスバイン、ドイツの生ビール5種、コースとアラカルト。2026年10月の口コミ: ヴァイツェンと黒ビール、ジャーマンポテト、ソーセージ、ドイツパン、ビットブルガー、陶器のジョッキ、白・ハーブのソーセージとシュバイネハクセ、鰯のマリネ、前菜盛り合わせ、歓迎会のコース。',
      confidence: 'medium', sources: [TB, R + 'B537520636/', R + 'B537788871/', R + 'B516100828/', R + 'B537725361/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Walk-ins usually fine; good for groups.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒100-0006 東京都千代田区有楽町2-1-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都千代田区有楽町二丁目1番8号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537520636/', R + 'B537788871/'],
    price_note: 'No prices captured; reviewers spend ¥3,000–8,000.', last_checked: TODAY, items: [
      it('ソーセージ盛り合わせ', 'sooseeji moriawase', 'Assorted sausages (white, herb)', '', 'Mains', 'ask', 'no', 'October 2026.', 'sausages'),
      it('アイスバイン', 'aisubain', 'Eisbein (salted pork knuckle)', '', 'Mains', 'ask', 'no', 'Signature.', 'eisbein'),
      it('ビール煮込み', 'biiru nikomi', 'Beer stew', '', 'Mains', 'no', 'no', 'Signature.', 'beer_stew'),
      it('ジャーマンポテト', 'jaaman poteto', 'German potatoes', '', 'Sides', 'ask', 'no', '', 'german_potatoes'),
    ] }, {
    cuisine: 'ドイツ居酒屋・DLG金賞のハムとソーセージ、アイスバイン、ビール煮込み・ドイツの生ビール5種',
    neighborhood: '有楽町二丁目、JR高架下のビックカメラ側。有楽町・銀座・日比谷駅から徒歩2分',
    gf_detail: '実際上グルテンフリーではありません。ドイツの生ビール、ドイツパン、ソーセージが中心で、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: '記述上はヴィーガンではありません。ソーセージ、アイスバイン、シュバイネハクセ、ビール煮込み、鰯のマリネ。',
    notes: '[ドイツ料理・有楽町の高架下でビールとソーセージ] 日比谷寄りのJR高架下にある老舗の90席のドイツ居酒屋で、テーブル席のみ、ふらりと入れて宴会にも。自慢のハムとソーセージはDLG金賞受賞、名物はビール煮込みとアイスバイン。ドイツの生ビールは5種(ビットブルガー、ヴァイツェン、黒ビールなど)で、重い陶器のジョッキで出てきます。2026年の客は、白やハーブのソーセージの盛り合わせ、シュバイネハクセ、ジャーマンポテト、ドイツパン、鰯のマリネ、前菜の盛り合わせを好評。飲み放題のコースは団体向き。',
  });
}

save();
