// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first; worker osw1 (lane: Tabelog id mod 4 = 0), batch 12.
//   + Bird (yakitori and creative chicken dishes with craft beer, below its sister bird's nest, Ura-Namba, 2022)
//   + B portland coffee roastery (roastery café with a NOVO roaster, Minami-Senba, 2019)
//   + しゃぶ亭 心斎橋店 Shabu Tei Shinsaibashi (one-person copper-pot shabu-shabu with house sesame sauce, since 2003)
//   + チェルピーナ邸 Cher Pina (stone-oven Italian and natural-yeast pizza, Minami-Senba, 2014)
//   Lane: mod-4 = 0 ids in `queue.mjs osaka next notable 220` after batch 11: 27136664 (焼鳥 ぼんぞ, still undecided), 27131288,
//   27114964, 27006528, 27149612 (炭火焼鳥と一口餃子 TORA鶏YA 難波千日前店: opened 2025, likely a chain branch but no shop list
//   found; left undecided), 27076996.
//   Chain check: Bird belongs with bird's nest upstairs (osaka_birds_nest_namba, whose notes call Bird "its lively sister") and a third
//   shop named on enya-food.jp; Shabu Tei has four shops in Osaka City (Tabelog; shabutei.co.jp lists 心斎橋店, 西梅田店,
//   阪急かっぱ横丁店, 三ツ寺筋店), kept on the group-of-four precedent; B portland and Cher Pina are single shops as far as the sources
//   show. None is in data/osaka.json (grep by name, romaji and address, 2026-11-02).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw1-12');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ Bird
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27131288/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'osaka_bird_namba', name: 'Bird', category: 'OMNI',
    lat: 34.664457, lng: 135.503948, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Skewers come with sauce or salt; the appetizer platters include spring rolls, curry and a Worcestershire-marinated quail egg.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken restaurant; raw chicken and liver pâté are on the menu.',
    hours_raw: 'Daily 17:00–24:00; open year-round (Tabelog). Reservations accepted; if online booking is full, call (Tabelog). Starter ¥385, included in the weekday appetizer platter (Tabelog; September 2026). Cards (VISA, Master, JCB, AMEX) and PayPay; no e-money (Tabelog). 28 seats at a counter round an open kitchen and tables, parties up to 8; non-smoking (Tabelog). Opened 20 August 2022 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba-Sennichimae 9-17, 千日前セントラル第2ビル, a minute from Namba Grand Kagetsu — 4 min from Nippombashi Stn',
    cuisine: 'Charcoal yakitori and creative chicken and vegetable dishes in a bar-like room, with craft beer (Tabelog) · weekday appetizer platter for two ¥2,750 including the seat charge: sliced thigh and breast, potato salad, Worcestershire-marinated quail egg, chicken skin with ponzu, heart, liver pâté, chicken-neck and vegetable curry, chicken sashimi with watercress and kombu, caprese with prosciutto (September 2026) · skewers such as negima, shiso chicken neck, steamed tsukune; the signature Maple Chicken with honey mustard (Tabelog; September 2026) · fried sweet potato with cream cheese, black-bean paste with cheese, seasonal fruit in white-miso dressing, jerk chicken, clay-pot rice with corn and chicken (September 2026) · Maru-F draft beer in two pours, about 10 craft beers, a Matcha Pine tea cocktail supervised by Bar Hana of Douyamacho (Tabelog; September 2026)',
    website: 'https://enya-food.jp/', gmaps: gm('Bird 難波千日前'), menu_url: null,
    notes: "[Yakitori · Ura-Namba, a chicken bar a minute from NGK] A wood-warm yakitori bar a minute from Namba Grand Kagetsu, the busy downstairs sister of the course counter bird's nest, where charcoal skewers share the counter with playful chicken dishes and a long drinks list. The way in is the weekday platter for two (¥2,750 with the seat charge in September 2026), a run of small plates from liver pâté and chicken sashimi to a Worcestershire quail egg and a chicken-neck curry; then negima or the sweet-spicy Maple Chicken, and fried sweet potato with cream cheese. To drink: Asahi Maru-F poured two ways, ten-odd craft beers and a matcha-pineapple sake cocktail from Bar Hana. Lively and often full; one diner found the counter cramped. In October 2026 most of the big table was overseas guests.",
    chef_bio: { chef_name: null, roles: ['Yakitori chef (unnamed) trained at a high-end yakitori restaurant (September 2026 review)'], origin: null, background: 'Shop-maintained Tabelog listing: charcoal-grilled yakitori, Maple Chicken, creative vegetable dishes, drinks supervised by famous bars (Mr Okamura of Bar Hana in Douyamacho), about ten craft beers; opened 20 August 2022; operator site enya-food.jp. The data record for bird\'s nest (osaka_birds_nest_namba, same address, 2F) describes Bird as "its lively sister".', philosophy: 'Ingredients handled with respect for the producers, each step without cutting corners (quoted in a September 2026 review).', specialty: 'Weekday appetizer platter; Maple Chicken; charcoal skewers.',
      anecdotes: [
        { text: '"Available only on weekdays, this dish allows you to enjoy a variety of popular items in smaller portions, making it a fantastic deal." — September 2026, the appetizer platter for two ¥2,750.', source: R + 'B535772689/' },
        { text: '"This hidden gem offers authentic yakitori crafted by a chef who trained at a high-end yakitori restaurant." — September 2026, a weekday at 18:00.', source: R + 'B536338091/' },
        { text: '"I was surprised to see so many foreigners. At the large table, everyone except for our group of three was from overseas." — October 2026.', source: R + 'B537477853/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): Bird (バード)、居酒屋・鶏料理・焼き鳥、大阪市中央区難波千日前9-17 千日前セントラル第2ビル、日本橋駅から徒歩4分、Namba Grand Kagetsu から徒歩1分、毎日17:00〜24:00、年中無休、予約可 (ネットが満席でも電話で空いていることも)、突き出し385円、カード・PayPay 可、28席、最大8名、禁煙、2022年8月20日オープン、運営は enya-food.jp。店の紹介 (英訳): 炭火の焼き鳥、甘辛の Maple Chicken、創作の野菜料理、有名バーの監修のドリンク (Douyamacho の Bar Hana の Okamura さんの抹茶とパイナップルのお茶のカクテル)、クラフトビール10種ほど。口コミ(2026年9月〜10月): 平日限定の前菜盛り合わせ2人前2,750円 (席料込み、もも・むねのスライス、ポテトサラダ、うずらのウスター漬け、鶏皮ポン酢、ハツ、レバーパテ、首肉と野菜のカレー、鶏刺し、生ハムのカプレーゼ)、ねぎま、しそのせせり、蒸しつくね、さつまいもの揚げ物とクリームチーズ、黒豆ペーストのチーズ、季節の果物の白和え、ジャークチキン、とうもろこしと鶏の土鍋ご飯、Maru-F の生ビール、上の階に姉妹店、カウンターがせまいという声、海外の客が多い日も。',
      confidence: 'medium', sources: [TB, R + 'B535772689/', R + 'B536109444/', R + 'B536338091/', R + 'B536354162/', R + 'B536702231/', R + 'B536765956/', R + 'B536837777/', R + 'B537162354/', R + 'B537477853/', R + 'B538232901/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter and tables; many overseas guests on one October 2026 night. No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市中央区難波千日前9-17 千日前セントラル第2ビル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前9番17号 (go) 10m. bird's nest (osaka_birds_nest_namba) is upstairs in the same building with the same Tabelog point, so this pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535772689/', TB],
    price_note: 'One dated price from a September 2026 review; starter charge from the Tabelog listing.', last_checked: TODAY, items: [
      it('', '', 'Weekday appetizer platter for two (seat charge included)', '¥2,750', 'Small plates', 'ask', 'no', 'September 2026 review.', 'weekday_platter'),
      it('', '', 'Maple Chicken with honey mustard', '', 'Dishes', 'ask', 'no', 'Tabelog; September 2026.', 'maple_chicken'),
      it('', '', 'Negima skewer', '', 'Skewers', 'ask', 'no', 'September 2026 reviews.', 'negima'),
    ] }, {
    cuisine: 'バーのような店の炭火の焼き鳥と創作の鶏と野菜の料理、クラフトビールも (食べログ)・平日限定の前菜盛り合わせ2人前2,750円、席料込み: もも・むねのスライス、ポテトサラダ、うずらのウスター漬け、鶏皮ポン酢、ハツ、レバーパテ、首肉と野菜のカレー、クレソンと昆布の鶏刺し、生ハムのカプレーゼ (2026年9月)・ねぎま、しそのせせり、蒸しつくねなどの串、名物の Maple Chicken とハニーマスタード (食べログ、2026年9月)・さつまいもの揚げ物とクリームチーズ、黒豆ペーストとチーズ、季節の果物の白和え、ジャークチキン、とうもろこしと鶏の土鍋ご飯 (2026年9月)・2種類の注ぎ方の Maru-F の生ビール、クラフトビール10種ほど、Douyamacho の Bar Hana 監修の抹茶とパイナップルのカクテル (食べログ、2026年9月)',
    neighborhood: '難波千日前9-17、千日前セントラル第2ビル、Namba Grand Kagetsu から1分。日本橋駅から徒歩4分',
    gf_detail: '要確認。グルテンの情報なし。串はタレか塩、前菜の盛り合わせには春巻、カレー、うずらのウスター漬けも。',
    vegan_detail: 'ヴィーガンではありません。鶏料理の店で、鶏刺しやレバーパテもある。',
    notes: '[焼き鳥・裏なんば、Namba Grand Kagetsu から1分の鶏のバー] Namba Grand Kagetsu から1分の木のぬくもりの焼き鳥のバーで、上の階のコースのカウンター bird\'s nest のにぎやかな姉妹店。炭火の串と遊び心のある鶏料理、長いドリンクのリストがカウンターに並ぶ。入り口は平日限定の2人前の盛り合わせ (2026年9月は席料込みで2,750円) で、レバーパテや鶏刺しから、うずらのウスター漬け、首肉のカレーまで少しずつ。それからねぎまか甘辛い Maple Chicken、さつまいもの揚げ物とクリームチーズを。飲み物は2種類の注ぎ方の Maru-F の生ビール、10種ほどのクラフトビール、Bar Hana の抹茶とパイナップルの日本酒のカクテル。にぎやかでよく満席になり、カウンターがせまいという人も。2026年10月のある夜は大きなテーブルのほとんどが海外の客だったそう。',
  });
}

// ================================================================ B portland coffee roastery
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27114964/'; const R = TB + 'dtlrvwlst/';
  const H = day(['09:00', '20:00']);
  put({
    id: 'osaka_b_portland_coffee_minamisenba', name: 'B portland coffee roastery', category: 'OMNI',
    lat: 34.67777, lng: 135.499478, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The coffee itself is beans and water; the food is toast breakfasts, donuts and desserts.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. Black coffee and Americano are the plain options; lattes, ice cream and the breakfast use dairy and egg.',
    hours_raw: 'Daily 09:00–20:00; hours may change (Tabelog). No reservations (Tabelog). Cards, e-money and QR payments accepted (Tabelog). Few seats, so come early; many customers take away; tables inside and a terrace and bench with an ashtray outside (2026 reviews). Non-smoking inside (Tabelog). Opened 3 December 2019 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 4-8-3, 1F of the サクラブルービル on a corner by Midosuji — 10 min from Shinsaibashi Stn',
    cuisine: 'Roastery café with a NOVO MARK II hot-air roaster, said to be the first of its kind in Japan, roasting specialty beans picked by the roaster; you can choose green beans and have them roasted on the spot (August–October 2026) · iced blend coffee ¥500 (October 2026); espresso drinks, Americano, hazelnut latte, café au lait, single origins such as El Salvador, cold brew (2026 reviews) · breakfast set ¥800: thick toast, bacon, a fried egg, potage and salad (September 2026) · donuts, crème brûlée, coffee soft-serve (September–October 2026)',
    website: null, gmaps: gm('B portland coffee roastery 南船場'), menu_url: null,
    notes: "[Café · Minami-Senba, a roastery on a Midosuji corner] A stylish corner roastery café in Minami-Senba, built around a big NOVO MARK II hot-air roaster that a regular says was the first in Japan, where you can pick green beans and have them roasted while you wait. The coffee is a bargain for the area (an iced blend was ¥500 in October 2026), and the morning breakfast set of thick toast, bacon, a fried egg and potage is ¥800. Later, try a hazelnut latte, a donut or the coffee soft-serve dusted with coffee powder. Seats are few and many people take away, so come early; the terrace and bench outside suit a sunny day. Open daily from 9 a.m.",
    chef_bio: { chef_name: null, roles: ['Roaster and baristas (unnamed)'], origin: null, background: 'Tabelog: café, opened 3 December 2019. Reviews in August–October 2026 describe a glass-fronted NOVO MARK II hot-air roaster, "a European custom model, and reportedly the first of its kind in Japan", specialty beans chosen by the roaster, and green beans roasted to order.', philosophy: null, specialty: 'House-roasted coffee; breakfast set; coffee soft-serve.',
      anecdotes: [
        { text: '"It\'s a NOVO MARK II, a European custom model, and reportedly the first of its kind in Japan." — August 2026.', source: R + 'B533731647/' },
        { text: '"Breakfast Set: JPY 800 ... perfectly toasted bread, a rich potage soup with black pepper, bacon, a sunny-side-up egg, and a salad" — September 2026.', source: R + 'B536016511/' },
        { text: '"The beautifully swirled ice cream was generously dusted with powder, which instantly lifted my spirits." — October 2026, the coffee soft-serve.', source: R + 'B536796649/' },
      ],
      japanese_sources_summary: '食べログ: B portland coffee roastery (ビー ポートランド コーヒー ロースタリー)、カフェ、大阪市中央区南船場4-8-3 サクラブルービル 1F、心斎橋駅から徒歩10分、毎日9:00〜20:00、予約不可、カード・電子マネー・QR 可、禁煙、2019年12月3日オープン。口コミ(2025年6月〜2026年10月): アイスコーヒー (ブレンド) 500円、NOVO MARK II の焙煎機 (日本で初めてという)、生豆を選んでその場で焙煎、エスプレッソのドリンク、アメリカーノ、ヘーゼルナッツラテ、カフェオレ、El Salvador、水出し、モーニングセット800円 (厚切りトースト、ベーコン、目玉焼き、ポタージュ、サラダ)、ドーナツ、クリームブリュレ、コーヒーのソフトクリーム、テラスとベンチ、席は少なくテイクアウトが多い。',
      confidence: 'medium', sources: [TB, R + 'B508780614/', R + 'B533731647/', R + 'B534567767/', R + 'B534884127/', R + 'B536016511/', R + 'B536166156/', R + 'B536186425/', R + 'B536453877/', R + 'B536796649/', R + 'B537336380/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter; mostly takeaway (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場4-8-3 サクラブルービル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場四丁目8番3号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B508780614/', R + 'B536016511/'],
    price_note: 'Prices from September and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Iced coffee (blend)', '¥500', 'Coffee', 'ask', 'ask', 'October 2026 review.', 'iced_blend'),
      it('', '', 'Breakfast set (toast, bacon, egg, potage, salad)', '¥800', 'Breakfast', 'no', 'no', 'September 2026 reviews.', 'breakfast_set'),
      it('', '', 'Coffee soft-serve', '', 'Sweets', 'ask', 'no', 'October 2026 review.', 'coffee_softcream'),
    ] }, {
    cuisine: 'NOVO MARK II の熱風の焙煎機のあるロースタリーカフェ (日本で初めてという)、焙煎士が選ぶスペシャルティの豆、生豆を選んでその場で焙煎も (2026年8月〜10月)・ブレンドのアイスコーヒー500円 (2026年10月)。エスプレッソのドリンク、アメリカーノ、ヘーゼルナッツラテ、カフェオレ、El Salvador などのシングルオリジン、水出し (2026年の口コミ)・モーニングセット800円: 厚切りトースト、ベーコン、目玉焼き、ポタージュ、サラダ (2026年9月)・ドーナツ、クリームブリュレ、コーヒーのソフトクリーム (2026年9月〜10月)',
    neighborhood: '南船場4-8-3、御堂筋近くの角のサクラブルービル1階。心斎橋駅から徒歩10分',
    gf_detail: '要確認。グルテンの情報なし。コーヒーは豆と水だけだが、食べ物はトーストのモーニング、ドーナツ、デザート。',
    vegan_detail: '要確認。ヴィーガンの情報なし。ブラックコーヒーとアメリカーノがシンプルな選択肢で、ラテ、ソフトクリーム、モーニングには乳製品と卵を使う。',
    notes: '[カフェ・南船場、御堂筋近くの角のロースタリー] 南船場の角のおしゃれなロースタリーカフェで、主役は大きな NOVO MARK II の熱風の焙煎機 (常連によると日本で初めて)。生豆を選べば待つ間に焙煎してくれる。コーヒーはこのあたりではお得で (2026年10月はブレンドのアイスコーヒーが500円)、朝の厚切りトースト、ベーコン、目玉焼き、ポタージュのモーニングセットは800円。あとはヘーゼルナッツラテ、ドーナツ、コーヒーの粉をかけたコーヒーのソフトクリームも。席は少なくテイクアウトの人が多いので早めに。外のテラスとベンチは晴れた日に。毎日朝9時から。',
  });
}

// ================================================================ しゃぶ亭 心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27006528/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.shabutei.co.jp';
  const H = day(['11:00', '23:00']);
  put({
    id: 'osaka_shabutei_shinsaibashi', name: 'しゃぶ亭 心斎橋店 (Shabu Tei Shinsaibashi)', category: 'OMNI',
    lat: 34.672912, lng: 135.502011, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The sesame sauce blends 22 spices and the ponzu is house-made, but their ingredients are not given; sets end with wheat udon.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef and pork shabu-shabu; vegetables, tofu and udon come with the meat.',
    hours_raw: 'Daily 11:00–23:00, last order 22:00; closed 31 December and 1 January (Tabelog). Reservations accepted; groups of 20 or more can book a floor (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money (Tabelog). 188 seats over five floors: a 24-seat counter on 1F with a copper pot for each diner, tables, semi-private and private rooms for 4–6, rooms for 12, 30 and 40, sunken seating, karaoke and darts; non-smoking (Tabelog; October 2026). Opened 1 December 2003 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashi-suji 1-4-11, its own building on a one-way lane — 2 min from Shinsaibashi Stn exit 6',
    cuisine: 'Shabu-shabu specialist, one copper pot per person at the counter (Tabelog) · house sesame sauce of silver sesame roasted and ground for hours in a stone mill with 22 spices, made in the shop, which keeps its body even when diluted and is drunk as soup at the end; house ponzu; add green onion, garlic or chili (official site; Tabelog; 2026 reviews) · beef shabu-shabu set ¥1,900 with vegetables and udon (September 2026); pork shabu-shabu double (160 g) with vegetables, tofu and udon, rice and pickles refilled (October 2026); beef-and-pork mix; courses with a starter, meat by grade (premium loin, special black wagyu), udon and ice cream (September–October 2026) · all-you-can-eat black wagyu with all-you-can-drink ¥7,800 with a coupon (Tabelog)',
    website: SITE, gmaps: gm('しゃぶ亭 心斎橋店'), menu_url: null,
    notes: "[Shabu-shabu · Shinsaibashi, a copper pot for one] A long-running shabu-shabu house in its own five-storey building two minutes from Shinsaibashi Station, one of four Shabu Tei shops in Osaka. On the ground floor 24 diners sit at a counter, each with a copper pot, which makes it a favourite for eating alone; upstairs are rooms for groups. The draw is the sesame sauce, silver sesame roasted and ground in a stone mill in the shop with 22 spices, rich enough to drink as soup at the end, with the house ponzu beside it. A beef set with vegetables and udon was ¥1,900 in September 2026; a double portion of pork brings 160 g of meat with unlimited rice. In October 2026 about half the counter were overseas visitors. One diner asked for separate chopsticks for raw meat.",
    chef_bio: { chef_name: null, roles: ['Kitchen and counter staff (unnamed)'], origin: null, background: 'Per the official site (shabutei.co.jp): silver sesame roasted carefully and ground for a long time in a stone mill, blended with 22 spices, so the sauce keeps its flavour and body as it thins; shops 心斎橋店 (旧清水町店), 西梅田店, 阪急かっぱ横丁店 and 三ツ寺筋店. Tabelog: a long-established shabu-shabu specialist near Shinsaibashi Station; four shops in Osaka City making over 200,000 servings of sesame sauce a year; opened 1 December 2003.', philosophy: '"Shabu-shabu is decided by the meat and the sauce" (official site).', specialty: 'One-person copper-pot shabu-shabu; house sesame sauce.',
      anecdotes: [
        { text: '"You can even watch as they grind sesame seeds in a stone mortar during your visit!" — September 2026.', source: R + 'B529378118/' },
        { text: '"I had been curious about the solo shabu-shabu experience, so I decided to try the beef shabu-shabu for JPY 1900." — September 2026.', source: R + 'B536433945/' },
        { text: '"During my visit to the Shinsaibashi branch, I noticed that about half of the customers were foreign tourists." — October 2026, at the counter.', source: R + 'B536679651/' },
      ],
      japanese_sources_summary: '公式サイト (shabutei.co.jp): しゃぶ亭の胡麻だれは銀胡麻をじっくり炒ってセサモールを生かし、石臼で長時間練り上げ、22種類のスパイスを調合、薄くなっても味とコクが残り最後はスープとして、しゃぶしゃぶは肉とタレが決め手、店舗は心斎橋店 (旧清水町店)、西梅田店、阪急かっぱ横丁店、三ツ寺筋店。食べログ (店舗会員): しゃぶ亭 心斎橋店、しゃぶしゃぶ・日本料理・居酒屋、大阪市中央区心斎橋筋1-4-11 しゃぶ亭ビル、心斎橋駅6番出口から徒歩2分、毎日11:00〜23:00 (L.O.22:00)、12月31日・1月1日休み、予約可、カード可、電子マネー不可、188席 (カウンター24、テーブル、個室、半個室、12・30・40名の部屋)、掘りごたつ、カラオケ、ダーツ、禁煙、2003年12月1日オープン、大阪市内4店で年に20万食以上の胡麻だれ、純銅の鍋で1人1鍋、クーポンで黒毛和牛の食べ放題と飲み放題7,800円。口コミ(2026年6月〜10月): 石臼でごまをする様子が見える、牛しゃぶ1,900円 (野菜、うどん)、豚しゃぶのダブル160g、豆腐、ご飯と漬物のおかわり、ポン酢と胡麻だれににんにくとねぎ、コース (先付、上ロースや特選黒毛和牛、うどん、アイス)、1階はひとりの客が多い、海外の客が半分ほどの日も、生肉用の箸を別に頼んだという声。',
      confidence: 'high', sources: [TB, SITE, R + 'B529378118/', R + 'B536322012/', R + 'B536433945/', R + 'B536641754/', R + 'B536679651/', R + 'B536964578/', R + 'B537196661/', R + 'B537692038/', R + 'B537845046/', R + 'B538226732/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter sets with a pot for each diner; about half the counter was overseas visitors in October 2026. No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋1-4-11 しゃぶ亭ビル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋一丁目4番11号 (go) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536433945/', TB],
    price_note: 'Prices from a September 2026 review and the Tabelog listing (coupon price).', last_checked: TODAY, items: [
      it('', '', 'Beef shabu-shabu set (vegetables, udon)', '¥1,900', 'Shabu-shabu', 'no', 'no', 'September 2026 review.', 'gyu_shabu_set'),
      it('', '', 'Pork shabu-shabu double (160 g)', '', 'Shabu-shabu', 'no', 'no', 'October 2026 reviews.', 'buta_shabu_double'),
      it('', '', 'All-you-can-eat black wagyu with all-you-can-drink (coupon)', '¥7,800', 'Courses', 'no', 'no', 'Tabelog listing.', 'tabehodai_course'),
    ] }, {
    cuisine: 'しゃぶしゃぶの専門店で、カウンターは1人1つの銅鍋 (食べログ)・自家製の胡麻だれは、銀胡麻を炒って店内の石臼で長時間練り、22種類のスパイスを調合、薄くなってもコクが残り、最後はスープに。自家製のポン酢も。ねぎ、にんにく、唐辛子を加えて (公式サイト、食べログ、2026年の口コミ)・牛しゃぶのセット1,900円、野菜とうどんつき (2026年9月)。豚しゃぶのダブル (160g) に野菜、豆腐、うどん、ご飯と漬物はおかわりできる (2026年10月)。牛と豚のミックス。先付け、等級で選ぶ肉 (上ロース、特選黒毛和牛)、うどん、アイスのコース (2026年9月〜10月)・クーポンで黒毛和牛の食べ放題と飲み放題7,800円 (食べログ)',
    neighborhood: '心斎橋筋1-4-11、一方通行の道沿いの自社ビル。心斎橋駅6番出口から徒歩2分',
    gf_detail: '要確認。グルテンの情報なし。胡麻だれは22種類のスパイスの調合で、ポン酢も自家製だが、材料の説明はない。セットの締めは小麦のうどん。',
    vegan_detail: 'ヴィーガンではありません。牛と豚のしゃぶしゃぶで、野菜、豆腐、うどんは肉と一緒に出る。',
    notes: '[しゃぶしゃぶ・心斎橋、1人1つの銅鍋] 心斎橋駅から2分、5階建ての自社ビルの老舗のしゃぶしゃぶの店で、大阪にあるしゃぶ亭の4店のひとつ。1階は1人1つの銅鍋のカウンター24席で、ひとりで食べるのにぴったり。上の階はグループ用の部屋。主役は胡麻だれで、銀胡麻を炒って店内の石臼でひき、22種類のスパイスを合わせたもの。最後はスープとして飲めるほど濃く、自家製のポン酢も並ぶ。2026年9月は野菜とうどんつきの牛のセットが1,900円、豚のダブルなら肉160gでご飯はおかわり自由。2026年10月にはカウンターの半分ほどが海外の客だったそう。生肉用に別の箸を頼んだという人も。',
  });
}

// ================================================================ チェルピーナ邸
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27076996/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:30'], ['17:30', '23:00']);
  put({
    id: 'osaka_cher_pina_minamisenba', name: 'チェルピーナ邸 (Cher Pina)', category: 'OMNI',
    lat: 34.675277, lng: 135.50012, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: the centrepiece is wheat pizza dough of five Hokkaido flours, with fresh pasta and grissini; no gluten-free option described.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. The pizzas and pasta use cheese and meat; the dough itself is flour, salt, natural yeast and olive oil.',
    hours_raw: 'Tue–Sun and holidays 11:30–14:30 (last order 13:30) and 17:30–23:00 (food last order 21:30, drinks 22:00); closed Monday (it can open on a Monday for private hire) (Tabelog). Reservations accepted; cancellation fees apply on the day (Tabelog). Starter ¥300 with free refills, none at lunch or with a course (Tabelog). Cards, IC cards and other e-money, and QR payments including PayPay (Tabelog). Private hire for 25–40 (Tabelog). Down a staircase in the basement, behind the TUDOR watch shop\'s building door (Tabelog; October 2026). Opened 4 February 2014 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 4-4-8, B1F of the クリエイティブ心斎橋 (TUDOR on 1F) — 1 min from Shinsaibashi Stn exit 3',
    cuisine: 'Casual Italian street tavern: stone-oven cooking, natural-yeast pizza and fresh pasta (Tabelog) · pizza dough in two styles, fluffy thick Milanese and crisp thin Roman, made from five Hokkaido flours, Italian salt, natural yeast from Akita and olive oil, perfected over ten years (Tabelog) · banquet course with two hours of drinks ¥5,000: grissini and pickles refilled, Italian salad, five appetizers (oil sardines, marinated salmon, frittata, potato salad, olives), fries, a pizza such as Bismarck, pasta (September–October 2026) · lunch pasta set with an appetizer ¥1,200 (September 2026); beef-tendon meat-sauce pasta (September 2026) · celebration dessert plate with a message ¥880 (Tabelog) · dishes by a chef trained in Rome\'s taverns (Tabelog)',
    website: null, gmaps: gm('チェルピーナ邸 南船場'), menu_url: null,
    notes: "[Italian · Minami-Senba, natural-yeast pizza underground] A cosy, antique-feeling Italian tavern in a basement a minute from Shinsaibashi Station, through the door of the building with TUDOR on the ground floor and down the stairs. The kitchen bakes natural-yeast pizza in a stone oven in two styles, fluffy Milanese or crisp Roman, from a dough of five Hokkaido flours ten years in the making, and the chef trained in Roman taverns cooks to go with wine. Most groups take the ¥5,000 course with two hours of drinks, which runs from refilled grissini and five appetizers to a pizza and pasta; lunch is a pasta set from ¥1,200. One pizza purist was put off by Tabasco on the table and no knives (September 2026). Closed Mondays.",
    chef_bio: { chef_name: null, roles: ['Chef trained in taverns in Rome (unnamed; Tabelog)'], origin: null, background: 'Shop-maintained Tabelog listing: casual Italian street izakaya with stone-oven pizza and fresh pasta; natural-yeast pizza perfected over ten years, five Hokkaido wheat flours, sweet salt from Italy, natural yeast from Akita, a secret olive oil; all staff are pizza makers; banquet dishes by a wine-loving chef trained in Roman taverns. Opened 4 February 2014.', philosophy: '"The best drinks deserve the best snacks!" (Tabelog).', specialty: 'Natural-yeast stone-oven pizza; banquet course.',
      anecdotes: [
        { text: '"In this time of rising prices, I really appreciate that they continue to offer lunch in the JPY 1000 range." — September 2026, pasta set ¥1,200.', source: R + 'B535069217/' },
        { text: '"Although the address states it\'s on the basement level, the entrance is on the first floor. Be careful as there are stairs leading down immediately after you open the door!" — October 2026.', source: R + 'B537473686/' },
        { text: '"There was Tabasco on the table." — September 2026.', source: R + 'B535474711/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): チェルピーナ邸 イタリア石窯料理と天然酵母ピザ 心斎橋・南船場、ピザ・居酒屋・イタリアン、大阪市中央区南船場4-4-8 クリエイティブ心斎橋 B1Ｆ (1階に TUDOR)、心斎橋駅3番出口から徒歩1分、火〜日・祝11:30〜14:30 (L.O.13:30)・17:30〜23:00 (料理L.O.21:30)、月曜定休 (貸切なら営業も)、予約可、当日のキャンセル料あり、お通し300円 (おかわり無料、ランチとコースはなし)、カード・電子マネー・QR 可、貸切25〜40名、2014年2月4日オープン。店の紹介 (英訳): 石窯のピザと生パスタのカジュアルなイタリアの街の居酒屋、10年かけた天然酵母のピザの生地 (ふわふわの厚いミラノ風とカリカリの薄いローマ風、Hokkaido の小麦粉5種、Italy の塩、Akita の天然酵母、秘伝のオリーブオイル)、Rome の酒場で修業したワイン好きのシェフ、メッセージつきのデザートプレート880円。口コミ(2025年9月〜2026年10月): 2時間飲み放題つきの宴会コース5,000円 (グリッシーニとピクルスはおかわり自由、イタリアンサラダ、前菜5種、フライドポテト、ビスマルクなどのピザ、パスタ)、ランチのパスタセット1,200円、牛すじのミートソースのパスタ、アンティークな雰囲気、入口は1階で中に入るとすぐ下り階段、テーブルのタバスコとナイフがないのが残念という声。',
      confidence: 'medium', sources: [TB, R + 'B487129129/', R + 'B521774240/', R + 'B535069217/', R + 'B535474711/', R + 'B535701637/', R + 'B536137112/', R + 'B536138317/', R + 'B537473686/', R + 'B537515078/', R + 'B538318576/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Courses and set lunches; book for groups (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場4-4-8 クリエイティブ心斎橋 B1Ｆ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場四丁目4番8号 (go) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536137112/', R + 'B535069217/', TB],
    price_note: 'Prices from September and October 2026 reviews and the Tabelog listing.', last_checked: TODAY, items: [
      it('', '', 'Banquet course with two hours of drinks', '¥5,000', 'Courses', 'no', 'no', 'September and October 2026 reviews.', 'banquet_course'),
      it('', '', 'Lunch pasta set with appetizer', '¥1,200', 'Lunch', 'no', 'ask', 'September 2026 review.', 'pasta_lunch'),
      it('', '', 'Natural-yeast stone-oven pizza (e.g. Bismarck)', '', 'Pizza', 'no', 'no', 'Tabelog; October 2026.', 'pizza'),
      it('', '', 'Celebration dessert plate with message', '¥880', 'Desserts', 'no', 'no', 'Tabelog listing.', 'dessert_plate'),
    ] }, {
    cuisine: 'イタリアの街のカジュアルな酒場: 石窯の料理、天然酵母のピザ、生パスタ (食べログ)・ピザの生地はふわふわで厚いミラノ風とカリカリで薄いローマ風の2種、Hokkaido の小麦粉5種、Italy の塩、Akita の天然酵母、オリーブオイルで、10年かけて完成 (食べログ)・2時間の飲み放題つき宴会コース5,000円: おかわりできるグリッシーニとピクルス、イタリアンサラダ、前菜5種 (オイルサーディン、サーモンのマリネ、フリッタータ、ポテトサラダ、オリーブ)、フライドポテト、ビスマルクなどのピザ、パスタ (2026年9月〜10月)・前菜つきのランチのパスタセット1,200円 (2026年9月)。牛すじのミートソースのパスタ (2026年9月)・メッセージつきのお祝いのデザートプレート880円 (食べログ)・Rome の酒場で修業したシェフの料理 (食べログ)',
    neighborhood: '南船場4-4-8、クリエイティブ心斎橋の地下1階 (1階は TUDOR)。心斎橋駅3番出口から徒歩1分',
    gf_detail: 'グルテンフリーではありません。主役は Hokkaido の小麦粉5種のピザの生地で、生パスタやグリッシーニも。グルテンフリーの選択肢の説明はない。',
    vegan_detail: '要確認。ヴィーガンの情報なし。ピザとパスタにはチーズや肉を使う。生地は小麦粉、塩、天然酵母、オリーブオイル。',
    notes: '[イタリアン・南船場、地下の天然酵母ピザ] 心斎橋駅から1分、1階に TUDOR のあるビルの扉から階段を下りた地下の、アンティークな雰囲気のイタリアの酒場。石窯で焼く天然酵母のピザは、ふわふわのミラノ風かカリカリのローマ風の2種で、Hokkaido の小麦粉5種で10年かけて作った生地。Rome の酒場で修業したシェフがワインに合う料理を作る。グループの多くは2時間の飲み放題つき5,000円のコースで、おかわりできるグリッシーニと前菜5種からピザとパスタまで。ランチはパスタのセットが1,200円から。テーブルにタバスコがありナイフがないのが残念というピザ好きもいた (2026年9月)。月曜休み。',
  });
}

save();
