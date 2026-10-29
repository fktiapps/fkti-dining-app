// Osaka sweep (2-mile circle around Dotonbori), batch 181 — mom phase (≤20 seats, 30+ reviews, nearest-first).
//   + 九志焼亭 本店 (teppan-grilled kushiyaki skewers; Takashimaya Namba Dining Maison 8F)
//   + Stand カテナッチョ (Japanese-Italian standing bar to 3 am, formerly a meat-sushi bar; Higashi-Shinsaibashi)
//   + PANAME CREPES DE PARIS 大阪店 (French crepes and galettes, 10 am–11 pm; behind Hotel Nikko)
//   + 心斎橋の美味しい串カツ あげてんかっ！ 本店 (light-batter kushikatsu and oden to 2 am; Higashi-Shinsaibashi)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-29';
const { put, skip, save } = openCitySweep('osaka', TODAY, 181);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 九志焼亭 本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27101888/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://yamatogushi.com';
  put({
    id: 'osaka_kushiyakitei_honten_namba', name: '九志焼亭 本店 (Kushi Yaki Tei Honten)', category: 'OMNI',
    lat: 34.663585, lng: 135.502386, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; skewers are seasoned on the teppan, and sides include spring-roll dumplings, mini okonomiyaki and tonpei-yaki.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: mostly meat- and seafood-wrapped skewers; vegetable skewers exist but seasonings are not described.',
    hours_raw: 'Daily 11:00–16:00 (last order 15:00) and 17:00–22:00 (last order 21:00); closes with Namba Dining Maison (Tabelog). Reservations on weekday evenings only (Tabelog). Charge ¥300 per person (Tabelog). Cards, e-money and QR accepted (Tabelog). Non-smoking. Children welcome (Tabelog). Two hours free at the Times car park west of Takashimaya with ¥3,000 spent (Tabelog). Opened 1 November 2017 (Tabelog).',
    hours: ALL(day(['11:00', '16:00'], ['17:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 5-1-18, Takashimaya Osaka Namba Dining Maison 8F — 1 min from Namba Stn',
    cuisine: 'Kushiyaki: skewers grilled on a teppan and served on the plate (20 seats: 6 at the counter, 14 at tables) · pork-wrapped whole asparagus; Wagyu; salmon with tartar sauce; enoki wrapped in meat; shrimp paste; tsukune; chicken neck; pork belly with green onion · monthly limited skewers · lunch: omakase of 9 skewers; Osaka course with 5 skewers, mini okonomiyaki and rolled omelet; rolled-omelet set ¥1,800 · seasonal dinner course of 12 skewers · rolled omelet with grated daikon; tonpei-yaki with bonito flakes; garlic fried rice · sake and wine',
    website: OWN, gmaps: gm('九志焼亭 本店 なんばダイニングメゾン'), menu_url: TB + 'dtlmenu/',
    notes: "[Kushiyaki · teppan-grilled skewers on Takashimaya's restaurant floor, Namba] A kushiyaki restaurant on the eighth floor of Takashimaya's Namba Dining Maison, where skewers of meat, seafood and vegetables are grilled on a teppan and served on the plate: pork-wrapped asparagus, Wagyu, enoki rolled in meat, shrimp paste, tsukune, plus a monthly limited menu. Lunch is the easy way in, from an omakase of nine skewers to an Osaka course with mini okonomiyaki and a teppan rolled omelet (the omelet set was ¥1,800 in July 2026; one diner found five skewers on the light side). At dinner, add tonpei-yaki and a punchy garlic fried rice. Reservations on weekday evenings only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 November 2017 (Tabelog).', background: 'Kushiyaki restaurant with a staff-maintained Tabelog listing (Tabelog; 2024–2026 reviews).', philosophy: null, specialty: 'Teppan-grilled kushiyaki skewers.',
      anecdotes: [
        { text: '"The skewers, carefully grilled on a teppan, not only bring out the rich flavors of the ingredients but are also seasoned perfectly… the garlic fried rice we ordered was exceptionally tasty." — June 2026.', source: R + 'B530353158/' },
        { text: '"I ordered the Dashimaki Set Meal for JPY 1,800… The Dashimaki made on the teppan is incredibly delicious…" — July 2026.', source: R + 'B533829756/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員の公式情報): 九志焼亭 本店、大阪市中央区難波5-1-18 高島屋大阪 なんばダイニングメゾン 8F、なんば駅から徒歩1分、毎日11:00〜16:00 (L.O. 15:00)、17:00〜22:00 (L.O. 21:00)、休みはダイニングメゾンに準じる、予約は平日の夜のみ、チャージ一人300円、カード・電子マネー・QR可、禁煙、20席 (カウンター6、テーブル14)、子ども歓迎、2017年11月1日開店、公式サイトあり、肉・魚・野菜の串焼き、季節の創作料理、鉄板焼き。口コミ(2024年12月〜2026年7月): 鉄板で焼いて皿で出す串、豚巻きのアスパラ、和牛、サーモンのタルタル、肉巻きの enoki、海老のすり身、tsukune、鶏の首とアスパラ、豚バラとねぎ、毎月の限定串、昼はおまかせ9本、5本の串とミニお好み焼きとdashimaki の大阪名物コース、dashimaki 定食1,800円、夜は季節の12本のコース、大根おろしのdashimaki 、かつお節たっぷりの tonpei-yaki、ガーリックライス、Amaou のいちごのアイス。',
      confidence: 'medium', sources: [TB, OWN, R + 'B424241111/', R + 'B498273767/', R + 'B511538683/', R + 'B523611480/', R + 'B530353158/', R + 'B533829756/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Department-store restaurant floor; weekday-evening bookings only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波5-1-18 高島屋大阪 なんばダイニングメゾン 8F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Staff-maintained Tabelog listing; reviews dated July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波五丁目1番18号 (go) 4m; offset 7 m south of the Tabelog point, which it shares with Tai Shio Soba Toka; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533829756/', R + 'B424241111/'],
    price_note: 'One lunch price from a July 2026 review; dinner about ¥4,000–5,000 (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Rolled-omelet set (lunch, 5 skewers)', '¥1,800', 'Lunch', 'ask', 'no', 'July 2026.', 'dashimaki_set'),
      it('', '', 'Omakase 9 skewers (lunch)', '', 'Lunch', 'ask', 'no', 'February 2025.', 'omakase'),
      it('', '', 'Seasonal course, 12 skewers', '', 'Courses', 'ask', 'no', 'February 2025.', 'course'),
      it('', '', 'Garlic fried rice', '', 'Rice', 'ask', 'no', 'March–June 2026.', 'garlic_rice'),
    ] }, {
    cuisine: '鉄板で焼いて皿で出す串焼き (20席: カウンター6、テーブル14)・豚巻きのアスパラ、和牛、サーモンのタルタル、肉巻きの enoki、海老のすり身、tsukune、鶏の首、豚バラとねぎ・毎月の限定串・昼: おまかせ9本、5本の串とミニお好み焼きとdashimaki の大阪のコース、dashimaki の定食1,800円・夜は季節の12本のコース・大根おろしのdashimaki 、かつお節をのせた tonpei-yaki、ガーリックライス・日本酒、ワイン',
    neighborhood: '難波5-1-18 高島屋大阪 なんばダイニングメゾン 8F。なんば駅から徒歩1分',
    gf_detail: '要確認。グルテンの情報なし。串は鉄板で味つけし、春巻き、ミニお好み焼き、tonpei-yaki もある。',
    vegan_detail: '実質ヴィーガンではありません。肉や魚介を巻いた串が中心。野菜の串もあるが味つけの説明なし。',
    notes: '[串焼き・なんば、高島屋のレストランフロアで鉄板の串焼き] 高島屋のなんばダイニングメゾン8階の串焼きの店で、肉・魚介・野菜の串を鉄板で焼いて皿で出す。豚巻きのアスパラ、和牛、肉巻きの enoki、海老のすり身、tsukune、毎月の限定串も。入りやすいのは昼で、おまかせ9本や、ミニお好み焼きと鉄板のdashimaki がつく大阪のコース (dashimaki の定食は2026年7月で1,800円、5本では少なめという声も)。夜は tonpei-yaki や香ばしいガーリックライスを足して。予約は平日の夜のみ。',
  });
}

// ================================================================ Stand カテナッチョ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27099676/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_stand_catenaccio_higashishinsaibashi', name: 'Stand カテナッチョ (Stand Catenaccio)', category: 'OMNI',
    lat: 34.674421, lng: 135.502684, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; dishes include beer-battered fritters, spring rolls and pasta.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: a meat-focused menu; small vegetable dishes exist but are not described as vegan.',
    hours_raw: 'Daily 18:00–03:00 (last order 02:30) (Tabelog). Reopened in September 2026 as a standing bar after renovation; two 4-person tables remain, and a private room for 5 or more (Tabelog; September 2026). Bookings released 10–15 minutes after the time (Tabelog). Cards and QR (including Alipay and WeChat Pay) accepted; no e-money (Tabelog). Smoking allowed (Tabelog). Opened 12 July 2017 as 肉寿司 イタリアンバル 閂 心斎橋店 (Tabelog).',
    hours: ALL(day(['18:00', '03:00'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-19-11, B1F — 2 min from Shinsaibashi Stn',
    cuisine: 'Japanese-Italian standing bar (8 at the counter, two 4-person tables) · appetizer assortment: molokhia greens, bagna cauda, chilled tofu with caviar, yatsuhashi with raisin butter · beer-battered summer vegetable fritters with bamboo-charcoal salt · lobster cream spring rolls with Grana Padano grated at the table · duck breast carpaccio with balsamic · crab pasta · water eggplant · a soup and ochazuke to finish · caramel pudding · meat sushi (before the September 2026 renewal) · sake and wine',
    website: null, gmaps: gm('Stand カテナッチョ 東心斎橋'), menu_url: TB + 'dtlmenu/',
    notes: "[Bar · a Japanese-Italian standing bar to 3 am, Higashi-Shinsaibashi] A basement bar near Shinsaibashi Station that ran for years as a meat-sushi and Italian bar and reopened in September 2026 as a standing bar, same chef and team, with the counter stools gone and two tables kept for groups. The menu now mixes Japanese and Italian: beer-battered zucchini fritters with charcoal salt, lobster cream spring rolls showered with Grana Padano, duck carpaccio, crab pasta, small plates like chilled tofu with caviar, and caramel pudding. One September 2026 diner reports the meat sushi was dropped in the renewal. A short but good sake list. Open until 3 am; smoking allowed.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 12 July 2017 as 肉寿司 イタリアンバル 閂 心斎橋店; renovated and reopened as a standing bar in September 2026 (Tabelog; September 2026 review).', background: 'Japanese-Italian bar (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Japanese-Italian bar plates.',
      anecdotes: [
        { text: '"…the restaurant has been renovated and reopened in a standing bar style since September!… the meat sushi has been removed from the previous Japanese menu, and Italian dishes have been added." — September 2026.', source: R + 'B525499614/' },
        { text: '"Both the meat sushi and crab pasta were incredibly delicious. The caramel pudding for dessert was just perfect to finish off the meal." — May 2026.', source: R + 'B527055431/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員の公式情報): Stand カテナッチョ (旧店名 肉寿司 イタリアンバル 閂 心斎橋店)、大阪市中央区東心斎橋1-19-11 B1F、心斎橋駅から徒歩2分、毎日18:00〜翌3:00 (L.O. 2:30)、2017年7月12日開店、改装して立ち飲みスタイルで再開、カウンター8と4人テーブル2、5人以上で個室、カード・QR可、電子マネー不可、喫煙可。口コミ(2026年2〜9月): 2026年9月に立ち飲みに改装、料理人とスタッフは以前と同じ、和とイタリアンの組み合わせ、前菜の盛り合わせ (モロヘイヤのおひたし、バーニャカウダ、キャビアの冷ややっこ、レーズンバターの yatsuhashi)、ズッキーニのビール衣のフリット 竹炭塩、ロブスターのクリーム春巻き グラナパダーノ、鴨のカルパッチョ バルサミコ、蟹のパスタ、水なす、しめのスープや ochazuke、キャラメルプリン、改装前は肉寿司も (改装後はなくなったという声)、日本酒は少ないが良いもの。',
      confidence: 'medium', sources: [TB, R + 'B522311543/', R + 'B525499614/', R + 'B527055431/', R + 'B529472712/', R + 'B530860629/', R + 'B532666402/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Standing counter; tables for groups (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-19-11 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Staff-maintained Tabelog listing; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目19番11号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525499614/'],
    price_note: 'No dish prices in the reviews; about ¥5,000–8,000 per person (reviews). Menu changed in September 2026.', last_checked: TODAY, items: [
      it('', '', 'Beer-battered vegetable fritters', '', 'Small plates', 'no', 'ask', 'September 2026.', 'fritters'),
      it('', '', 'Lobster cream spring rolls with Grana Padano', '', 'Small plates', 'no', 'no', 'September 2026.', 'harumaki'),
      it('', '', 'Duck breast carpaccio', '', 'Small plates', 'ask', 'no', 'May 2026.', 'duck'),
      it('', '', 'Crab pasta', '', 'Pasta', 'no', 'no', 'May–June 2026.', 'pasta'),
    ] }, {
    cuisine: '和とイタリアンの立ち飲み (カウンター8、4人テーブル2)・前菜の盛り合わせ: モロヘイヤ、バーニャカウダ、キャビアの冷ややっこ、レーズンバターの yatsuhashi・ズッキーニなど夏野菜のビール衣のフリット 竹炭塩・ロブスターのクリーム春巻き、席でグラナパダーノを削る・鴨のカルパッチョ バルサミコ・蟹のパスタ・水なす・しめのスープや ochazuke・キャラメルプリン・肉寿司 (2026年9月の改装前)・日本酒、ワイン',
    neighborhood: '東心斎橋1-19-11 B1F。心斎橋駅から徒歩2分',
    gf_detail: '要確認。グルテンの情報なし。ビール衣のフリット、春巻き、パスタなども。',
    vegan_detail: '実質ヴィーガンではありません。肉が中心のメニューで、野菜の小皿もあるがヴィーガンの記載なし。',
    notes: '[バー・東心斎橋、深夜3時までの和とイタリアンの立ち飲み] 心斎橋駅近くの地下のバーで、長く肉寿司とイタリアンの店だったが、2026年9月に改装して立ち飲みとして再開。料理人とスタッフはそのまま、カウンターの椅子をなくし、グループ用にテーブル2卓を残した。メニューは和とイタリアンを合わせ、竹炭塩のズッキーニのビール衣のフリット、グラナパダーノをたっぷり削るロブスターのクリーム春巻き、鴨のカルパッチョ、蟹のパスタ、キャビアの冷ややっこなどの小皿、キャラメルプリン。改装で肉寿司はなくなったという2026年9月の声も。日本酒は少ないが良いものが揃う。深夜3時まで、喫煙可。',
  });
}

// ================================================================ PANAME CREPES DE PARIS 大阪店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27139503/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_paname_crepes_de_paris', name: 'PANAME CREPES DE PARIS 大阪店 (PANAME CREPES DE PARIS Osaka)', category: 'OMNI',
    lat: 34.674226, lng: 135.499235, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The flour in the crepes and galettes is not stated; one diner described a rice-flour savory crepe (September 2026), but this is not confirmed by the shop.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options; crepes use butter and cream, so check.',
    hours_raw: 'Daily 10:00–23:00; irregular closures (Tabelog). No reservations (Tabelog). One drink required per person to eat in; cashless payment only (September–October 2026). Heated tobacco only (Tabelog). English menu; children welcome; takeout (Tabelog). Opened 26 April 2023 (Tabelog).',
    hours: ALL(day(['10:00', '23:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishi-Shinsaibashi 1-10-41, right behind Hotel Nikko Osaka — 2 min from Shinsaibashi Stn',
    cuisine: 'Parisian-style crepes and savory galettes (15 seats) · Salmon Royal galette with cheese · spicy minced-meat galette · Fifty-Fifty · chocolate crepe with whipped cream · Dubai chocolate crepe · sugar, butter and lemon · drinks (one required to eat in)',
    website: null, gmaps: gm('PANAME CREPES DE PARIS 大阪店'), menu_url: null,
    notes: "[Crêperie · Parisian crepes and galettes behind Hotel Nikko, Shinsaibashi] A stylish little crêperie behind the Hotel Nikko in Shinsaibashi, with a Paris-styled room and pretty tableware, open from 10 am to 11 pm. The savory side draws the warmest reviews: a Salmon Royal galette loaded with salmon and rich cheese, and a juicy, slightly spicy minced-meat one, both big enough for dinner. Sweet crepes are chewy with crisp edges, from a simple sugar-butter-lemon to chocolate with lightly sweet cream; one diner found the Dubai chocolate too sweet to finish. Eating in requires one drink each, and payment is cashless only. Tabelog lists vegetarian options.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 26 April 2023 (Tabelog).', background: 'Crêperie (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Savory galettes; sweet crepes.',
      anecdotes: [
        { text: '"The salmon crepe was filled with salmon no matter where you bit into it, and it was loaded with ingredients. The cheese was rich and incredibly tasty." — September 2026.', source: R + 'B536379840/' },
        { text: '"Please note that a drink order is required for in-house dining, and payments are cashless only…" — September 2026.', source: R + 'B536438610/' },
      ],
      japanese_sources_summary: '食べログ: PANAME CREPES DE PARIS 大阪店、大阪市中央区西心斎橋1-10-41、心斎橋駅から徒歩2分 (日航ホテルの裏)、毎日10:00〜23:00、不定休、予約不可、カード・電子マネー・QR可、加熱式たばこのみ、15席、ベジタリアン対応ありと掲載、英語のメニュー、子ども歓迎、テイクアウト、2023年4月26日開店。口コミ(2026年9〜10月): パリ風のおしゃれな店内ときれいな器、サーモンロワイヤル、少し辛いひき肉のガレット、チーズたっぷり、食事になるボリューム、フィフティフィフティ、チョコレートのクレープとほんのり甘いクリーム、もちもちで縁はパリッと、ドバイチョコ (甘すぎたという声)、シュガーバターレモン、イートインはワンドリンク制、キャッシュレスのみ。',
      confidence: 'medium', sources: [TB, R + 'B535727548/', R + 'B535806716/', R + 'B536076752/', R + 'B536379840/', R + 'B536438610/', R + 'B537072127/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); cashless; one drink each to eat in (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋1-10-41',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋一丁目10番41号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537072127/', R + 'B536379840/'],
    price_note: 'No prices in the reviews; about ¥1,000–3,000 per person (Tabelog, reviews).', last_checked: TODAY, items: [
      it('', '', 'Salmon Royal galette', '', 'Galettes', 'ask', 'no', 'September–October 2026.', 'salmon'),
      it('', '', 'Minced-meat galette', '', 'Galettes', 'ask', 'no', 'September 2026.', 'minced'),
      it('', '', 'Chocolate crepe', '', 'Crepes', 'ask', 'no', 'September 2026.', 'chocolate'),
      it('', '', 'Sugar, butter and lemon crepe', '', 'Crepes', 'ask', 'no', 'October 2026.', 'lemon'),
    ] }, {
    cuisine: 'パリ風のクレープとガレット (15席)・サーモンロワイヤルのガレット (チーズ)・少し辛いひき肉のガレット・フィフティフィフティ・ホイップクリームのチョコレートクレープ・ドバイチョコのクレープ・シュガーバターレモン・ドリンク (イートインはワンドリンク制)',
    neighborhood: '西心斎橋1-10-41、日航ホテル大阪のすぐ裏。心斎橋駅から徒歩2分',
    gf_detail: '要確認。クレープやガレットの粉は書かれていない。米粉のクレープだったという声 (2026年9月) もあるが、店の確認はない。',
    vegan_detail: '要確認。食べログにベジタリアン対応ありとあるが、クレープにはバターやクリームを使うので確認を。',
    notes: '[クレープ・心斎橋、日航ホテル裏のパリのクレープとガレット] 心斎橋の日航ホテルの裏にある小さなおしゃれなクレープ店で、パリ風の店内ときれいな器、朝10時から夜11時まで。いちばん好評なのは食事系で、サーモンとチーズたっぷりのサーモンロワイヤル、ジューシーで少し辛いひき肉のガレット、どちらも夕食になる大きさ。甘いクレープはもちもちで縁はパリッと、シンプルなシュガーバターレモンから、ほんのり甘いクリームのチョコレートまで。ドバイチョコは甘すぎて食べきれないという声も。イートインはひとりワンドリンク、支払いはキャッシュレスのみ。食べログにベジタリアン対応あり。',
  });
}

// ================================================================ 心斎橋の美味しい串カツ あげてんかっ！ 本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27118430/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_agetenka_kushikatsu_honten', name: '心斎橋の美味しい串カツ あげてんかっ！ 本店 (Shinsaibashi no Oishii Kushikatsu Agetenka! Honten)', category: 'OMNI',
    lat: 34.674235, lng: 135.504271, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: a kushikatsu shop of battered, deep-fried skewers with dipping sauce; no gluten-free option described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: Wagyu, shrimp, pork and fish skewers and oden; vegetable skewers exist but batter and sauce are not described.',
    hours_raw: 'Daily 17:00–02:00 (last order 01:00) (Tabelog). When full, guests may be sent to a nearby sister shop (Tabelog). Appetizer charge ¥385 (Tabelog). Cards, e-money and QR accepted (Tabelog). Smoking allowed (Tabelog). BYO drinks allowed; menus in English, Chinese and Korean (Tabelog).',
    hours: ALL(day(['17:00', '02:00'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-13-1, Fujieda Bldg 1F — 3 min from Nagahoribashi Stn',
    cuisine: 'Kushikatsu with a light, crisp batter, fried in front of the counter (13 seats) · domestic Wagyu; angel shrimp; house salmon tartare · marinated tuna · whiting (kisu); Camembert; pork; onion; pickled ginger · oden · frozen lemon sour (house signature) · beer, wine and sake; all-you-can-drink plans',
    website: null, gmaps: gm('あげてんかっ 本店 東心斎橋'), menu_url: TB + 'dtlmenu/',
    notes: "[Kushikatsu · light-batter kushikatsu and oden to 2 am, Higashi-Shinsaibashi] A small, lively kushikatsu counter in Higashi-Shinsaibashi, open until 2 am, where skewers are fried in front of you in a thin, crisp batter that stays light enough to keep ordering. Diners pick out the Wagyu, the angel shrimp, whiting, Camembert and a marinated tuna skewer, dipped in the house sauce, with the shop's frozen lemon sour alongside. Unusually, there's a good oden pot too. Expect ¥4,000–8,000 with drinks. Diners praise the friendly staff and the owner's sunny manner, though one found orders missed and the bill wrong on a busy night. Smoking allowed.",
    chef_bio: { chef_name: null, roles: ['owner'], origin: null, background: 'Kushikatsu restaurant with a staff-maintained Tabelog listing (Tabelog; 2026 reviews).', philosophy: 'A light "saku-karai" batter that does not feel greasy (Tabelog listing).', specialty: 'Kushikatsu; oden.',
      anecdotes: [
        { text: '"The kushikatsu has a light batter, making it easy to eat!… The beef and shrimp were particularly tasty." — September 2026, a visit with order and billing mix-ups.', source: R + 'B536448965/' },
        { text: '"This restaurant specializes in kushikatsu, but [also offers] a great selection of oden… I particularly enjoyed the marinated tuna kushikatsu!" — October 2026.', source: R + 'B537061311/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員の公式情報): 心斎橋の美味しい串カツ あげてんかっ！ 本店、大阪市中央区東心斎橋1-13-1 藤枝ビル 1F、長堀橋駅から徒歩3分、毎日17:00〜翌2:00 (L.O. 1:00)、満席時は近くの系列店に案内することも、お通し385円、カード・電子マネー・QR可、喫煙可、13席、持ち込み可、英語・中国語・韓国語のメニュー、飲み放題、軽い saku-karai の衣、国産和牛、天使の海老、自家製サーモンタルタル、凍結レモンサワー。口コミ(2026年8〜10月): 目の前で揚げる、軽い衣でいくらでも食べられる、和牛、海老、キス、カマンベール、豚、玉ねぎ、漬けた生姜、マグロの漬けの串カツ、おでん、店主の明るい人柄、スタッフが親しみやすい、予算4,000〜8,000円、注文が通らず会計も間違っていたという声。',
      confidence: 'medium', sources: [TB, R + 'B523979103/', R + 'B534344771/', R + 'B534937011/', R + 'B536448965/', R + 'B537061311/', R + 'B537153164/'] },
    cultural_comfort: { level: 'english', note: 'Menus in English, Chinese and Korean (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-13-1 藤枝ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Staff-maintained Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目13番1号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523979103/', R + 'B537061311/'],
    price_note: 'No skewer prices in the reviews; about ¥4,000–8,000 per person with drinks (reviews) plus ¥385 appetizer.', last_checked: TODAY, items: [
      it('', '', 'Wagyu kushikatsu', '', 'Kushikatsu', 'no', 'no', 'August–September 2026.', 'wagyu'),
      it('', '', 'Angel shrimp kushikatsu', '', 'Kushikatsu', 'no', 'no', 'Tabelog listing; September 2026.', 'ebi'),
      it('', '', 'Marinated tuna kushikatsu', '', 'Kushikatsu', 'no', 'no', 'October 2026.', 'maguro'),
      it('', '', 'Oden', '', 'Oden', 'ask', 'no', 'October 2026.', 'oden'),
    ] }, {
    cuisine: '軽くサクッとした衣でカウンターの前で揚げる串カツ (13席)・国産和牛、天使の海老、自家製サーモンタルタル・マグロの漬け・キス、カマンベール、豚、玉ねぎ、漬けた生姜・oden・名物の凍結レモンサワー・ビール、ワイン、日本酒、飲み放題',
    neighborhood: '東心斎橋1-13-1 藤枝ビル 1F。長堀橋駅から徒歩3分',
    gf_detail: '実質グルテンフリーではありません。衣をつけて揚げる串カツとソースの店で、グルテンフリーの品の記載なし。',
    vegan_detail: '実質ヴィーガンではありません。和牛、海老、豚、魚の串と oden。野菜の串もあるが衣やソースの説明なし。',
    notes: '[串カツ・東心斎橋、深夜2時までの軽い衣の串カツと oden] 東心斎橋の小さくにぎやかな串カツのカウンターで、深夜2時まで。目の前で薄くサクッとした衣で揚げ、軽いのでつい頼み続けてしまう。和牛、天使の海老、キス、カマンベール、マグロの漬けの串が好評で、店のソースにつけ、名物の凍結レモンサワーと一緒に。珍しくおいしい oden もある。飲んで4,000〜8,000円ほど。スタッフが親しみやすく店主も明るいという声、混んだ夜に注文が通らず会計も間違っていたという声も。喫煙可。',
  });
}

save();
