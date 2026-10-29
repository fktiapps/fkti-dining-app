// Osaka sweep (2-mile circle around Dotonbori), batch 178 — mom phase (≤20 seats, 30+ reviews, nearest-first).
//   + LINK (house-roasting kissa with cheesecake; Higashi-Shinsaibashi)
//   + ワインショップ&ダイナー FUJIMARU 東心斎橋店 (wine shop with a Portuguese diner upstairs; near Nagahoribashi)
//   + BANCO (espresso café-bar, noon to 2 am, homemade tiramisu; Amerikamura edge)
//   + 鉄板焼 神戸 ホテルモントレ グラスミア大阪 (22F hotel teppanyaki counter with city views; JR Namba)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-29';
const { put, skip, save } = openCitySweep('osaka', TODAY, 178);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ LINK
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27017439/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://linkcoffee.jp/';
  put({
    id: 'osaka_link_coffee_higashishinsaibashi', name: 'LINK', category: 'OMNI',
    lat: 34.673786, lng: 135.503473, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; food is cakes and sandwiches (Tabelog), with a baked cheesecake the usual pick.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee is the core; cakes and sandwiches are not described.',
    hours_raw: 'Daily 10:00–21:00 (last order 20:30) (Tabelog). Cash only (Tabelog; April 2026). Fully non-smoking, including e-cigarettes, from October 2025 (Tabelog). One diner was told stays are limited to 60 minutes, though the door sign said 90 (April 2026). Beans sold in the shop and by web, phone or fax order (Tabelog).',
    hours: ALL(day(['10:00', '21:00'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-13-19, NT Bldg 1F, about 20 m north of the FamilyMart corner — 5 min from Shinsaibashi or Nagahoribashi Stn',
    cuisine: 'House-roasting coffee shop in Showa-kissa and mid-century style (17 seats: 12 at tables, 5 at the counter) · hand-brewed single origins such as Mandheling and a mocha, plus a strong blend · baked cheesecake · coffee jelly · sandwiches and cakes · beans from around the world to take home',
    website: OWN, gmaps: gm('LINK 東心斎橋 コーヒー'), menu_url: null,
    notes: "[Coffee · a quiet house-roasting kissa off the Shinsaibashi bustle, Higashi-Shinsaibashi] A calm, dim coffee shop just off the busy Higashi-Shinsaibashi streets, part Showa kissa and part mid-century American, with jazz playing and a counter for solo visits. It roasts its own beans and brews each cup to order: ask the owner for a recommendation (one diner was steered to a freshly roasted Mandheling), or try the mocha with its grapefruit-like acidity or the strong blend. The baked cheesecake is the standard partner, smooth and well balanced; coffee jelly is on the menu too. Not everyone was won over: one diner found the coffee ordinary, the dish-washing loud and the stay limited to 60 minutes. Cash only.",
    chef_bio: { chef_name: null, roles: ['owner'], origin: null, background: 'House-roasting coffee shop (Tabelog; 2026 reviews).', philosophy: null, specialty: 'House-roasted hand-brewed coffee; baked cheesecake.',
      anecdotes: [
        { text: '"…[the owner] suggested the freshly roasted Mandheling!… The cheesecake was a baked type with a smooth texture, perfectly balanced in cheese flavor, sweetness, and acidity…" — February 2026.', source: R + 'B522319899/' },
        { text: '"The atmosphere is a blend of a Showa-era Japanese café and mid-century American style. I ordered the Mocha Tamari. It had a subtle acidity reminiscent of grapefruit…" — December visit, April 2026 review.', source: R + 'B518656123/' },
      ],
      japanese_sources_summary: '食べログ: LINK、大阪市中央区東心斎橋1-13-19 NT BLD. 1F、心斎橋駅5・6番出口から東へ、ファミリーマートの角を左に約20m、長堀橋駅からも徒歩5分、毎日10:00〜21:00 (L.O. 20:30)、現金のみ、2025年10月から電子たばこを含め全面禁煙、17席 (テーブル12、カウンター5)、テイクアウト、世界各地のコーヒー豆の販売 (ウェブ・電話・FAXでも注文可)、公式サイトあり。口コミ(2026年2〜10月): 自家焙煎、一杯ずつ淹れる、昭和の喫茶店とミッドセンチュリーのアメリカの雰囲気、ジャズ、マンデリン、モカ、ストロングブレンド、ベイクドチーズケーキ、コーヒーゼリー、店主のおすすめを聞ける、ふつうの味だった・洗い物の音が大きい・滞在は60分と言われたという声。',
      confidence: 'medium', sources: [TB, OWN, R + 'B518656123/', R + 'B522319899/', R + 'B526183110/', R + 'B526296261/', R + 'B532603127/', R + 'B537140568/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; quiet room (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-13-19 NT BLD. 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目13番19号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B522319899/', R + 'B518656123/'],
    price_note: 'No prices in the reviews; about ¥1,000–2,000 per person (Tabelog, reviews).', last_checked: TODAY, items: [
      it('', '', 'Mandheling (hot)', '', 'Coffee', '', '', 'February–April 2026.', 'mandheling'),
      it('', '', 'Strong blend', '', 'Coffee', '', '', 'April 2026.', 'strong'),
      it('', '', 'Baked cheesecake', '', 'Cakes', 'ask', 'no', 'February–October 2026.', 'cheesecake'),
    ] }, {
    cuisine: '昭和の喫茶店とミッドセンチュリー風の自家焙煎のコーヒー店 (17席: テーブル12、カウンター5)・マンデリンやモカなど一杯ずつ淹れるシングルオリジン、ストロングブレンド・ベイクドチーズケーキ・コーヒーゼリー・サンドとケーキ・世界各地の豆の持ち帰り',
    neighborhood: '東心斎橋1-13-19 NT BLD. 1F、ファミリーマートの角から北へ約20m。心斎橋駅・長堀橋駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。食べ物はケーキとサンドで、定番はベイクドチーズケーキ。',
    vegan_detail: '要確認。中心はブラックコーヒーで、ケーキとサンドの説明なし。',
    notes: '[コーヒー・東心斎橋、にぎやかな通りの静かな自家焙煎の喫茶] 東心斎橋のにぎやかな通りから少し入った、落ち着いたほの暗いコーヒー店で、昭和の喫茶店とミッドセンチュリーのアメリカが混じる雰囲気、ジャズが流れ、ひとりならカウンターへ。豆は自家焙煎で一杯ずつ淹れる。店主におすすめを聞くか (焙煎したてのマンデリンを勧められた人も)、グレープフルーツのような酸味のモカやストロングブレンドを。定番の相棒はなめらかでバランスのいいベイクドチーズケーキ、コーヒーゼリーも。ふつうの味だった、洗い物の音が大きかった、60分制と言われたという声も。現金のみ。',
  });
}

// ================================================================ ワインショップ&ダイナー FUJIMARU 東心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27111094/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'osaka_fujimaru_higashishinsaibashi_portuguese', name: 'ワインショップ&ダイナー FUJIMARU 東心斎橋店 (Wine Shop & Diner FUJIMARU Higashi shinsaibashi ten)', category: 'OMNI',
    lat: 34.67293, lng: 135.505408, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the course includes cod croquettes, bread, a rice or risotto finish and an egg tart.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: Portuguese seafood, cod, octopus and chicken dishes; nothing described as vegan.',
    hours_raw: '2F Portuguese diner Tue–Sat and holidays 17:00–23:00 (food last order 22:00); 1F wine shop 15:00–22:00; 1F standing bar 17:00–22:00; closed Sunday and Monday (Tabelog). Reservations for the second floor only; often fully booked (September 2026). Cards accepted; no e-money or QR (Tabelog). Non-smoking (Tabelog). Bottles from the shop downstairs can be opened upstairs for a corkage fee (September 2026). When full, the shop points to its sister restaurant RAINDROP near Tanimachi 4-chome (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-4-18, Uehara Bldg — 2 min from Nagahoribashi Stn exit 7',
    cuisine: 'Portuguese diner upstairs (Casa da Andorinha, moved from Honmachi) above a 1,000-bottle wine shop and standing bar (18 seats: 6 at the counter, 12 at tables) · course ¥5,500: assorted appetizers, pastel de bacalhau (cod croquettes), green salad, Tanba chicken piri-piri, seafood cataplana, a rice or risotto finish, pastel de nata · octopus salad; octopus carpaccio · Alentejana (pork and clams) · Portuguese wines, port and Madeira; Minoh craft beer',
    website: null, gmaps: gm('FUJIMARU 東心斎橋店'), menu_url: TB + 'dtlmenu/',
    notes: "[Portuguese · a Portuguese diner above a wine shop, near Nagahoribashi] Part of the FUJIMARU wine-shop group: downstairs a shop of about 1,000 wines and a standing bar, upstairs Casa da Andorinha, a long-running Portuguese restaurant that moved here from Honmachi. The ¥5,500 course is the way in: appetizers, crisp bacalhau croquettes, Tanba chicken piri-piri, a seafood cataplana, then rice or risotto to finish and a freshly baked pastel de nata. Two diners single out the octopus and the port wine, and you can pick a bottle downstairs and pay corkage. Staff are good at pairing wines. One diner missed Vinho Verde. It fills up, so book. Closed Sundays and Mondays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Branch of the FUJIMARU wine-shop and restaurant group (Tokyo and Osaka); the upstairs Portuguese restaurant Casa da Andorinha moved from Honmachi (Tabelog listing).', background: 'Wine shop, standing bar and Portuguese diner (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Portuguese cooking with Portuguese wines.',
      anecdotes: [
        { text: '"Pastel de Bacalhau (Cod Croquettes)… Tanba Chicken Piri Piri… Seafood-filled Cataplana… Risotto to Finish Off… Pastel de Nata (Egg Tart)… The Egg Tart was freshly baked and incredibly tasty." — July 2026, course.', source: R + 'B521681797/' },
        { text: '"We ordered the course for JPY 5,500 per person… selected a bottle of wine from the first floor, paying the corkage fee… finished with a tasting of Madeira wine." — September 2026.', source: R + 'B535134225/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員の公式情報): ワインショップ&ダイナー FUJIMARU 東心斎橋店、大阪市中央区東心斎橋1-4-18 上原ビル 2F、長堀橋駅7番出口から徒歩2分、2F ダイナー火〜土・祝17:00〜23:00 (料理L.O. 22:00)、1F ワインショップ15:00〜22:00、1F 角打ち17:00〜22:00、日・月休み、予約は2階のみ、カード可、電子マネー・QR不可、禁煙、18席 (カウンター6、テーブル12)、東京と大阪のワインショップとレストランのグループ、1階に約1,000種のワイン、2階は本町から移った老舗のポルトガル料理 Casa da Andorinha (タコのサラダ、バカリャウのコロッケ、アレンテージョ風)、ポルトガルワインとマデイラ、満席時は谷町四丁目の姉妹店 RAINDROP へ。口コミ(2026年7〜9月): 5,500円のコース (前菜盛り合わせ、バカリャウのコロッケ、サラダ、丹波の鶏のピリピリ、魚介のカタプラーナ、しめのリゾット、焼きたてのエッグタルト)、タコのカルパッチョ、ポートワイン、箕面ビール、1階のボトルを持ち込み料で、ワイン選びの相談にのってくれる、ヴィーニョ・ヴェルデがほしかったという声、予約がおすすめ。',
      confidence: 'medium', sources: [TB, R + 'B521681797/', R + 'B531415127/', R + 'B534094723/', R + 'B535075362/', R + 'B535134225/', R + 'B536084596/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff help pair wines; book the second floor (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-4-18 上原ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Staff-maintained Tabelog listing; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目4番18号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B521681797/', R + 'B535134225/'],
    price_note: 'Course price from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Portuguese course', '¥5,500', 'Courses', 'ask', 'no', 'July–September 2026.', 'course'),
      it('', '', 'Pastel de bacalhau (cod croquettes)', '', 'À la carte', 'no', 'no', 'July–September 2026.', 'bacalhau'),
      it('', '', 'Octopus salad', '', 'À la carte', 'ask', 'no', 'July 2026.', 'polvo'),
      it('', '', 'Pastel de nata', '', 'Dessert', 'no', 'no', 'July–August 2026.', 'nata'),
    ] }, {
    cuisine: '約1,000種のワインショップと立ち飲みの上にあるポルトガル料理 (本町から移った Casa da Andorinha、18席: カウンター6、テーブル12)・5,500円のコース: 前菜の盛り合わせ、バカリャウのコロッケ、グリーンサラダ、丹波の鶏のピリピリ、魚介のカタプラーナ、しめのごはんかリゾット、エッグタルト・タコのサラダ、タコのカルパッチョ・アレンテージョ風 (豚とあさり)・ポルトガルワイン、ポートワイン、マデイラ、箕面のクラフトビール',
    neighborhood: '東心斎橋1-4-18 上原ビル。長堀橋駅7番出口から徒歩2分',
    gf_detail: '要確認。グルテンの情報なし。コースにはタラのコロッケ、パン、ごはんかリゾット、エッグタルトも。',
    vegan_detail: '実質ヴィーガンではありません。ポルトガルの魚介、タラ、タコ、鶏の料理。ヴィーガンの記載なし。',
    notes: '[ポルトガル料理・長堀橋、ワインショップの2階のポルトガル料理] ワインショップのグループ FUJIMARU の店で、1階は約1,000種のワインショップと立ち飲み、2階は本町から移ってきた長く続くポルトガル料理の Casa da Andorinha。入りやすいのは5,500円のコースで、前菜、カリッとしたバカリャウのコロッケ、丹波の鶏のピリピリ、魚介のカタプラーナ、しめにごはんかリゾット、焼きたてのエッグタルト。タコの料理とポートワインを挙げる声がふたり、1階でボトルを選んで持ち込み料を払うこともできる。ワイン選びの相談にのってくれる。ヴィーニョ・ヴェルデがほしかったという声も。満席になりやすいので予約を。日・月休み。',
  });
}

// ================================================================ BANCO
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27042441/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_banco_cafe_bar_nishishinsaibashi', name: 'BANCO', category: 'OMNI',
    lat: 34.673405, lng: 135.498457, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; food is paninis, doria and homemade tiramisu.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Espresso is on the menu; food and milk options are not described.',
    hours_raw: 'Daily 12:00–02:00; may change, so check (Tabelog). Cards, e-money and PayPay accepted (Tabelog; April 2024). Smoking allowed inside (Tabelog; March 2025). No restroom in the shop; staff point you to one nearby (2023). Terrace seats; pets seen on the terrace (April 2024).',
    hours: ALL(day(['12:00', '02:00'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishi-Shinsaibashi 1-9-26, Hariju Daihoji Bldg 1F, on Daikokubashi-suji at the north edge of Amerikamura — 2 min from Shinsaibashi Stn',
    cuisine: 'Espresso café-bar (20 seats, terrace) · espresso solo ¥363; doppio ¥440; cappuccino doppio ¥583 (2024) · homemade tiramisu · paninis; doria · desserts around ¥500 · beer and a long drinks list from noon',
    website: null, gmaps: gm('BANCO 西心斎橋 カフェ'), menu_url: null,
    notes: "[Café · an espresso café-bar from noon to 2 am, Amerikamura] A casual espresso bar on the north edge of Amerikamura, by the Hariju building, open from noon until 2 am and as much a day-drinking spot as a café. Order a double espresso, strong and well-roasted, or a cappuccino doppio, at prices one diner called cheap for a city café (¥363–583 in 2024). The homemade tiramisu, light and not too sweet, is the reason two diners came back; paninis and doria cover meals. Tables are well spaced and the style is laid-back: you're left alone. Smoking is allowed inside, there's no restroom, and one diner found the room getting cluttered. Terrace seats.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Espresso café-bar (Tabelog; 2023–2026 reviews).', philosophy: null, specialty: 'Espresso; homemade tiramisu.',
      anecdotes: [
        { text: '"A solo espresso is JPY 363, and a doppio is JPY 440, which is quite affordable for a café in the city… I ordered a cappuccino doppio for JPY 583…" — April 2024.', source: R + 'B482918502/' },
        { text: '"The coffee has a classic taste and is delicious, and the tiramisu is fantastic… You can smoke inside the café, which might be tough for non-smokers." — March 2025.', source: R + 'B503326627/' },
      ],
      japanese_sources_summary: '食べログ: BANCO、大阪市中央区西心斎橋1-9-26 はり重大宝寺店1F、心斎橋駅から西へ徒歩2分、毎日12:00〜翌2:00、カード・電子マネー可、喫煙可、20席、テラス席。口コミ(2023年6月〜2026年7月): アメリカ村の北側、大黒橋筋沿い、ダブルエスプレッソ、エスプレッソ363円・ドッピオ440円・カプチーノのドッピオ583円 (2024年)、自家製ティラミス、パニーニ、ドリア、デザート約500円、昼からビール、お酒も多い、テーブルの間隔が広い、放っておいてくれる気楽さ、店内喫煙可、トイレはなく近くを教えてくれる、店内がごちゃついてきたという声、PayPay可。',
      confidence: 'low', sources: [TB, R + 'B186334722/', R + 'B431464581/', R + 'B482918502/', R + 'B497771890/', R + 'B503326627/', R + 'B532682015/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Laid-back; smoking allowed inside (2025).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋1-9-26 はり重大宝寺店1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; review dated July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋一丁目9番26号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B482918502/'],
    price_note: 'Prices from an April 2024 review; may have changed.', last_checked: TODAY, items: [
      it('', '', 'Espresso (solo)', '¥363', 'Coffee', '', 'ask', 'April 2024.', 'espresso'),
      it('', '', 'Doppio', '¥440', 'Coffee', '', 'ask', 'April 2024.', 'doppio'),
      it('', '', 'Cappuccino doppio', '¥583', 'Coffee', '', 'no', 'April 2024.', 'cappuccino'),
      it('', '', 'Homemade tiramisu', '', 'Dessert', 'ask', 'no', '2023–2025.', 'tiramisu'),
    ] }, {
    cuisine: 'エスプレッソのカフェバー (20席、テラス)・エスプレッソ363円、ドッピオ440円、カプチーノのドッピオ583円 (2024年)・自家製ティラミス・パニーニ、ドリア・デザート約500円・昼からビールと豊富なお酒',
    neighborhood: '西心斎橋1-9-26 はり重大宝寺店1F、アメリカ村の北端の大黒橋筋沿い。心斎橋駅から徒歩2分',
    gf_detail: '要確認。グルテンの情報なし。食べ物はパニーニ、ドリア、自家製ティラミス。',
    vegan_detail: '要確認。エスプレッソはあるが、食べ物やミルクの選択肢の説明なし。',
    notes: '[カフェ・アメリカ村、昼から深夜2時までのエスプレッソのカフェバー] アメリカ村の北端、はり重のビルの1階にある気取らないエスプレッソバーで、昼12時から深夜2時まで、カフェであり昼飲みの店でもある。濃く深煎りのダブルエスプレッソかカプチーノのドッピオを、街なかのカフェにしては安いという声の値段で (2024年で363〜583円)。軽くて甘すぎない自家製ティラミスが、ふたりがまた来た理由。食事はパニーニやドリア。テーブルの間隔は広く、放っておいてくれる気楽さ。店内喫煙可、トイレはなく、店内がごちゃついてきたという声も。テラス席あり。',
  });
}

// ================================================================ 鉄板焼 神戸 ホテルモントレ グラスミア大阪
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27043342/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:30'], ['17:30', '22:00']);
  put({
    id: 'osaka_teppanyaki_kobe_monterey_grasmere', name: '鉄板焼 神戸 ホテルモントレ グラスミア大阪 (Teppanyaki Kobe, Hotel Monterey Grasmere Osaka)', category: 'OMNI',
    lat: 34.666607, lng: 135.496107, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Steak comes with garlic soy sauce, grated daikon with ponzu and rock salts (June 2026), so request salt; courses also include a quiche, sauces and an optional black curry. The restaurant says it cannot handle allergies to the rose family (Rosaceae) (Tabelog).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: Wagyu, live abalone, lobster and seafood courses; nothing described as vegan.',
    hours_raw: 'Wed–Mon and holidays 11:30–14:30 (food last order 13:30) and 17:30–22:00 (food last order 20:00); closed Tuesday; may take substitute days off after holidays (Tabelog). Course prices include tax and service (Tabelog). Cannot accommodate Rosaceae-family allergies (Tabelog). Cards, e-money and QR accepted (Tabelog). Non-smoking (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minatomachi 1-2-3, Hotel Monterey Grasmere Osaka 22F — 1 min from JR Namba, connected to Osaka Metro Namba',
    cuisine: 'Hotel teppanyaki at two 6-seat counters on the 22nd floor, with views west toward Kobe and Akashi Kaikyo Bridge · lunch courses (special lunch, A5 steak lunch) about ¥10,000–15,000 · dinner courses such as Maya and Rokko about ¥20,000–30,000 · live abalone with liver sauce; Ise lobster; scallops and shrimp; fish of the day · black Wagyu sirloin cap, ribeye or filet with two sauces and three salts · four seasonal grilled vegetables · garlic rice or black beef curry (+¥500) with red miso soup · dessert and coffee · a special Yonezawa beef course every two months (Tabelog)',
    website: null, gmaps: gm('鉄板焼 神戸 ホテルモントレ グラスミア大阪'), menu_url: TB + 'dtlmenu/',
    notes: "[Teppanyaki · a 22nd-floor hotel teppan counter with a view, JR Namba] A teppanyaki counter on the 22nd floor of the Hotel Monterey Grasmere by JR Namba, with big windows looking west over Kyocera Dome toward Kobe, the Rokko range and Akashi Kaikyo Bridge. Courses move from small appetizers to seafood (live abalone grilled in front of you, Ise lobster, scallops), four seasonal vegetables, and black Wagyu with a choice of sauces and salts, then garlic rice or a rich black beef curry. Lunch courses are the value play; one long-time diner noted lunch prices have risen and the 80 g steak now feels small. Chefs are happy to chat. Closed Tuesdays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Hotel teppanyaki restaurant with a staff-maintained Tabelog listing (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Teppanyaki courses with Wagyu and live seafood.',
      anecdotes: [
        { text: '"The fresh abalone was quickly grilled while still alive, served with its liver and an oriental sauce… We had sirloin cap and strip loin, served with garlic soy sauce, grated ponzu, and several types of rock salt." — June 2026, lunch course.', source: R + 'B529217351/' },
        { text: '"It\'s unfortunate that due to rising costs, the price of the lunch special has increased… The 80g steak portion feels a bit small…" — October 2026.', source: R + 'B40692651/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員の公式情報): 鉄板焼 神戸 ホテルモントレ グラスミア大阪、大阪市浪速区湊町1-2-3 ホテルモントレ グラスミア大阪 22F、JR難波駅から徒歩1分、地下鉄なんば駅直結、水〜月・祝11:30〜14:30 (料理L.O. 13:30)、17:30〜22:00 (料理L.O. 20:00)、火曜休み、コース料金は税・サ込、バラ科のアレルギーには対応できない、カード・電子マネー・QR可、禁煙、カウンター6席×2、2か月ごとに米沢牛などの特別コース。口コミ(2026年6〜10月): 22階の大きな窓から京セラドーム、神戸、六甲、明石海峡大橋まで、ランチコース、A5の牛のステーキランチ、夜は Maya や Rokko のコース、活けあわびの肝ソース、伊勢海老、ホタテと海老、季節の野菜4種、黒毛和牛のサーロインキャップ・リブロース・ヒレ、ソース2種と塩3種、ガーリックライスか黒カレー (+500円)、赤みそのみそ汁、デザート、ランチは値上がりしてステーキ80gが少なく感じるという声、シェフとの会話。',
      confidence: 'medium', sources: [TB, R + 'B40692651/', R + 'B465943631/', R + 'B529217351/', R + 'B533791885/', R + 'B535694323/', R + 'B536906305/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hotel counter; chefs chat as they grill (2026).' },
    safety: { ...SAFETY0, staff_allergy_handling: ['The restaurant states it cannot accommodate Rosaceae-family allergies (Tabelog).'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区湊町1-2-3 ホテルモントレ グラスミア大阪 22F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Staff-maintained Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: OSM モントレ グラスミア大阪 way/494984450 28m; GSI 大阪府大阪市浪速区湊町一丁目2番3号 (go) 74m — Tabelog point kept (hotel building); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536906305/', R + 'B529217351/'],
    price_note: 'Course names from 2026 reviews; about ¥10,000–15,000 at lunch and ¥20,000–30,000 at dinner (Tabelog, reviews).', last_checked: TODAY, items: [
      it('', '', 'Lunch course (appetizers, seafood, steak, garlic rice, dessert)', '', 'Lunch', 'ask', 'no', 'June–October 2026.', 'lunch'),
      it('', '', 'Rokko course (live abalone, Wagyu)', '', 'Courses', 'ask', 'no', 'September–October 2026.', 'rokko'),
      it('', '', 'Black beef curry instead of garlic rice', '+¥500', 'Courses', 'ask', 'no', 'October 2026.', 'curry'),
    ] }, {
    cuisine: '22階の6席のカウンター2つで鉄板焼き、西に神戸や明石海峡大橋を望む・ランチコース (特別ランチ、A5のステーキランチ) 約10,000〜15,000円・Maya や Rokko などのディナーコース約20,000〜30,000円・活けあわびの肝ソース、伊勢海老、ホタテと海老、本日の魚・黒毛和牛のサーロインキャップ、リブロース、ヒレをソース2種と塩3種で・季節の焼き野菜4種・ガーリックライスか牛の黒カレー (+500円)、赤みそのみそ汁・デザートとコーヒー・2か月ごとに米沢牛の特別コース (食べログ)',
    neighborhood: '湊町1-2-3 ホテルモントレ グラスミア大阪 22F。JR難波駅から1分、地下鉄なんば駅直結',
    gf_detail: '要確認。ステーキはにんにく醤油、おろし ponzu、岩塩で出る (2026年6月) ので塩を頼んで。コースにはキッシュ、ソース、選べる黒カレーも。バラ科のアレルギーには対応できないとのこと (食べログ)。',
    vegan_detail: '実質ヴィーガンではありません。和牛、活けあわび、伊勢海老、魚介のコース。ヴィーガンの記載なし。',
    notes: '[鉄板焼き・JR難波、眺めのいいホテル22階の鉄板カウンター] JR難波のホテルモントレ グラスミアの22階にある鉄板焼きのカウンターで、大きな窓から京セラドームの向こうに神戸、六甲の山並み、明石海峡大橋まで。コースは前菜から魚介 (目の前で焼く活けあわび、伊勢海老、ホタテ)、季節の野菜4種、ソースと塩を選ぶ黒毛和牛へ、しめはガーリックライスか濃厚な牛の黒カレー。お得なのはランチコースだが、値上がりしてステーキ80gが少なく感じるという長く通う人の声も。シェフは気さくに話してくれる。火曜休み。',
  });
}

save();
