// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles), circle `ueno`, lane osw12, batch 18.
//   + 炭火焼 18 Sumibi Yaki 18 (charcoal yakitori near Uguisudani/Iriya; chicken rice-bowl lunches; opened 2022)
//   + Ａlvino (Italian counter bar in a Yushima back alley, open to 4 am; sea-urchin cream croquette; opened 2016)
//   + プロースト東京 ソーセージ＆燻製バル 上野店 Prost Tokyo (house sausages and smoked dishes; opened 2016)
//   + ラッフルズ カリー raffles curry (7-seat curry counter; Tabelog Curry TOKYO 100 2023/2024/2026)
// Undecided (no put, no skip): あさが家 13307245 and まつり屋 上野本店 13284227 (no shop count found).
// Prepared for the next batch: 海鮮・鮨 食べ放題 かに村 上野本店 13306677 — chain-checked against FANG DREAM COMPANY: かに村 is
//   one brand of the company's ~16 shops (also 銀座八芳, 銀座七芳, 銀座芳亭, 孫二娘, 魚でん, 乾杯500酒場 …; Compalyze, Aug 2026);
//   OZmall (May 2025) calls it a 系列店 of 銀座八芳. Only the 上野本店 of the かに村 brand found → a sister concept, draftable;
//   the group's 海鮮市場 八芳 上野店 is already in data (tokyo_kaisen_ichiba_happou_ueno).
// Chain check (with Greg's 2026-11-02 rulings and the working line of 4 or fewer shops). Sumibi Yaki 18, raffles curry: one
//   shop each found. Alvino: one Alvino; the operator also runs AJILLO (4 shops), Bistronomie Avin, 角打ち割烹 CONBU, Gourmandise
//   Alvino, Bar Buzz and Buzz Bee (Tabelog remarks) — different brands, so a sister concept. Prost Tokyo: Ueno + Akihabara,
//   two shops (Tabelog remarks) — kept under the two-shop ruling.
// Dedupe: none is in data/tokyo.json by name, Tabelog id or address.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw12-18');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 炭火焼 18
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131104/13278682/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '14:30'], ['17:00', '22:45']);
  put({
    id: 'tokyo_sumibiyaki_18_shitaya', name: '炭火焼 18 (Sumibi Yaki 18)', category: 'OMNI',
    lat: 35.719826, lng: 139.781006, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: salt-grilled skewers are on the menu, but sauce-grilled skewers, kara-age, chicken nanban and the rice bowls are seasoned with unlisted sauces; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken restaurant — yakitori, oyakodon, kara-age, chicken nanban.',
    hours_raw: 'Tue–Sun 11:30–14:30 (last order 14:00) and 17:00–22:45 (last order 22:15); closed Mondays and the third Thursday of each month (Tabelog). Reservations taken, lunch included (December 2025); groups and bookings with children by phone. Appetizer charge ¥275 per person at night. 14 seats (counter 6, tables 9, plus 4 outside per Tabelog). Non-smoking (ashtrays outside). Cards, e-money and QR. Free Wi-Fi. Take-out. Opened 8 October 2022.',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shitaya 1-chōme, ONE STAGE上野 1F, on Iriya-guchi-dōri — 5 min from JR Uguisudani South Exit and Iriya Stn Exit 2',
    cuisine: 'Charcoal yakitori and local-chicken dishes with sake (Tabelog) · lunch about ¥1,000 with miso soup and pickled daikon: yakitori rice bowl with four skewers and chicken soboro, oyakodon, half oyakodon and three kara-age ¥900 (April 2026), grilled thigh, chicken nanban, kara-age set, plus grilled pork (5 a day), grilled mackerel and fried horse mackerel · dinner (Tabelog menu, September 2025): omakase 6-skewer set with salad, small dish, half oyakodon and miso soup ¥3,520; negima ¥319; tail, gizzard, heart, liver, cartilage, skin ¥242; tsukune ¥363 (egg yolk +¥88); white liver; cheese · sake',
    website: null, gmaps: gm('炭火焼 18 下谷1-6-9'), menu_url: TB + 'dtlmenu/',
    notes: "[Yakitori · Uguisudani/Iriya, charcoal chicken and rice-bowl lunches] A small, clean charcoal-yakitori restaurant on the road between Uguisudani and Iriya, open since 2022, with a black-toned room of about six counter seats and a few tables. Lunch is the busy time: chicken rice bowls and set meals for about ¥1,000 — a yakitori bowl with four freshly grilled skewers, oyakodon with kara-age, chicken nanban — with miso soup and pickles, and it is open on Sundays, which is rare nearby. At night it is a yakitori izakaya with skewers from ¥242, a six-skewer omakase set and good sake; the white liver wins over even liver sceptics. Some 2026 lunch diners found portions small or the oyakodon chicken off; closed Mondays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 8 October 2022 (Tabelog)', background: 'Tabelog official listing. No source names the owner or cooks.', philosophy: null, specialty: 'Charcoal yakitori; yakitori rice bowl.',
      anecdotes: [
        { text: '"The skewers were freshly grilled, crispy on the outside, and tender on the inside. It was delicious." — December 2025, yakitori rice bowl lunch.', source: R + 'B508381130/' },
        { text: '"The biggest surprise was the white liver; I\'m not usually a fan of liver, but it was so good that I wanted to order it again!" — October 2025.', source: R + 'B515036311/' },
        { text: '"Unfortunately, the chicken in the Oyako-don had a slight odor, which was disappointing." — February 2026.', source: R + 'B522599565/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): 炭火焼 18、下谷1-6-9 ONE STAGE上野 1F、JR鶯谷駅南口・入谷駅2番出口から徒歩5分、火〜日11:30〜14:30 (L.O.14:00)・17:00〜22:45 (L.O.22:15)、月曜と第3木曜休み、予約可、お通し275円、14席、禁煙 (店の横に灰皿)、カード・電子マネー・QR可、Wi-Fi、2022年10月8日オープン、地鶏料理と日本酒。メニュー (2025年9月): おまかせ6本セット3,520円、ねぎま319円、串242円〜、つくね363円。口コミ (2025年10月〜2026年6月): 焼き鳥丼、親子丼、親子丼ハーフと唐揚げ3個900円、チキン南蛮、昼は約1,000円で味噌汁とたくあん付き、日曜も営業、白レバー、量が少なめ、親子丼の鶏ににおいという声も。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B508381130/', R + 'B515036311/', R + 'B517887655/', R + 'B520572937/', R + 'B522151236/', R + 'B522599565/', R + 'B523264274/', R + 'B523922308/', R + 'B526200181/', R + 'B530358107/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small neighbourhood yakitori; no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区下谷1-6-9 ONE STAGE上野 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated October 2025–June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区下谷一丁目6番9号 (go) 6m; ${TODAY}`,
  }, { verified: 'partial', confidence: 'medium', sources: [TB + 'dtlmenu/', R + 'B526200181/'],
    price_note: 'Dinner prices from the Tabelog menu (updated September 2025, tax included); lunch from April 2026.', last_checked: TODAY, items: [
      it('', '', 'Lunch: half oyakodon and kara-age (3) set', '¥900', 'Lunch', 'no', 'no', 'April 2026.', 'oyako_karaage_set'),
      it('', '', 'Omakase 6-skewer set (salad, small dish, half oyakodon, miso soup)', '¥3,520', 'Sets', 'ask', 'no', 'Tabelog menu, September 2025.', 'omakase6'),
      it('', '', 'Negima', '¥319', 'Skewers', 'ask', 'no', 'Tabelog menu, September 2025.', 'negima'),
      it('', '', 'Liver', '¥242', 'Skewers', 'ask', 'no', 'Tabelog menu, September 2025.', 'reba'),
      it('', '', 'Tsukune (sauce or rock salt)', '¥363', 'Skewers', 'ask', 'no', 'Tabelog menu September 2025; egg yolk +¥88.', 'tsukune'),
    ] }, {
    cuisine: '炭火の焼き鳥と地鶏料理、日本酒 (食べログ)・昼は約1,000円で味噌汁とたくあん付き: 串4本と鶏そぼろの焼き鳥丼、親子丼、親子丼ハーフと唐揚げ3個900円 (2026年4月)、もも焼き、チキン南蛮、唐揚げ定食、豚の焼肉 (1日5食)、さばの塩焼き、アジフライ・夜 (食べログのメニュー、2025年9月): おまかせ6本セット (サラダ、小鉢、親子丼ハーフ、味噌汁付き) 3,520円、ねぎま319円、ぼんじり、砂肝、ハツ、レバー、なんこつ、皮242円、つくね363円 (卵黄+88円)、白レバー、チーズ・日本酒',
    neighborhood: '下谷一丁目、ONE STAGE上野 1F、入谷口通り沿い。JR鶯谷駅南口・入谷駅2番出口から徒歩5分',
    gf_detail: 'グルテンフリーは要確認。塩焼きの串もありますが、タレの串、唐揚げ、チキン南蛮、丼の味付けは不明で、グルテンフリーの説明はありません。',
    vegan_detail: 'ヴィーガンではありません。鶏の店で、焼き鳥、親子丼、唐揚げ、チキン南蛮。',
    notes: '[焼き鳥・鶯谷/入谷、炭火の鶏と丼の昼] 鶯谷と入谷の間の通りにある、小さく清潔な炭火焼き鳥の店で2022年から。黒を基調にカウンター約6席とテーブル少し。忙しいのは昼で、約1,000円の鶏の丼や定食: 焼きたての串4本の焼き鳥丼、唐揚げ付きの親子丼、チキン南蛮など、味噌汁と漬物付き。この辺りでは珍しく日曜も営業。夜は串242円からの焼き鳥居酒屋で、6本のおまかせセットや日本酒も。白レバーはレバー嫌いもうならせるとの声。2026年の昼には量が少なめ、親子丼の鶏が気になったという声も。月曜休み。',
  });
}

// ================================================================ Ａlvino
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13196908/'; const R = TB + 'dtlrvwlst/';
  const WS = 'https://www.alvino.jp/';
  const W = day(['17:00', '04:00']); const S = day(['17:00', '23:30']);
  put({
    id: 'tokyo_alvino_ueno', name: 'Ａlvino (Alvino)', category: 'OMNI',
    lat: 35.708633, lng: 139.772324, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: the signature is a breaded croquette, and pasta, pizza and pâté en croûte are wheat; carpaccio, ajillo and salads are not described as gluten-free.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Vegan — ask: Tabelog lists vegetarian options and there are vegetable pickles, olives, green salad and bagna cauda (with a creamy sauce), but nothing is marked vegan.',
    hours_raw: 'Mon–Sat 17:00–4:00; Sun and holidays 17:00–23:30; closing days not fixed (Tabelog). Reservations taken; the sea-urchin croquette needs a reservation (Tabelog menu); seats may be limited to 2.5 hours when busy. Collect three reservation cards for a free bottle of wine (October 2026). 24 seats: counter on the ground floor, tables upstairs; the 2nd floor for groups of 8–20. Smoking allowed. Cards, e-money and QR. Take-away. Opened 26 July 2016.',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ueno 2-chōme, a back alley toward Yushima — 2 min from Exit A3 of Ueno-Hirokoji / Ueno-Okachimachi / Naka-Okachimachi; 3 min from Yushima',
    cuisine: 'Italian bar food and wine at a counter, from the group behind AJILLO (Tabelog) · signature sea-urchin cream croquette, filled with half a sea urchin; potato salad with amber onions; assorted appetizers of 3 or 5; Shōnai pork pâté en croûte; bagna cauda; fish carpaccio; olives (Tabelog menu, 2023) · 2026 reviews: crab-miso pasta, seasonal pasta, pizza of the day, ajillo with tomato, broccoli, mussels and shrimp, seared wagyu carpaccio, meat dishes, sangria · a wide wine list; sommelier; courses with all-you-can-drink',
    website: WS, gmaps: gm('Alvino 上野2-2-6'), menu_url: TB + 'dtlmenu/',
    notes: "[Italian bar · Ueno-Hirokoji, wine and sea-urchin croquettes until 4 am] A lively little Italian wine bar tucked into a back alley between Ueno and Yushima, open since 2016 and until 4 am except Sundays. Downstairs is a counter, upstairs tables for groups. The dish everyone orders is the sea-urchin cream croquette, stuffed with half an urchin (book ahead for it); then come crab-miso pasta, ajillo, seared wagyu carpaccio, pizza and generous appetizer plates, with a long wine list and quick, warm service that reviewers keep praising. Smoking is allowed inside. One September 2026 diner found it average for the price.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 26 July 2016 (Tabelog)', background: 'Per the Tabelog remarks, the same operator runs AJILLO (Ueno, Nakano, Kanda Nishiguchi, Shimokitazawa), Bistronomie Avin, 角打ち割烹 CONBU, Gourmandise Alvino, Bar Buzz and Buzz Bee. No source names the chef.', philosophy: null, specialty: 'Sea-urchin cream croquette.',
      anecdotes: [
        { text: '"The classic sea urchin cream croquette was exquisite, but the real MVP this time was the ajillo!" — October 2026.', source: R + 'B537319527/' },
        { text: '"Tucked away in a shady alley leading from Ueno to Nezu, this Italian restaurant is easy to miss on your first visit (laughs)." — October 2026.', source: R + 'B536700657/' },
        { text: '"The quality and cost performance were average. Smoking is allowed here." — September 2026.', source: R + 'B535608915/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): Ａlvino、上野2-2-6、上野広小路駅・上野御徒町駅・仲御徒町駅A3出口から徒歩2分、湯島駅から3分、月〜土17:00〜翌4:00、日祝17:00〜23:30、不定休、予約可、24席 (混雑時は2時間半制)、2階は8〜20名の貸切、喫煙可、カード・電子マネー・QR可、テイクアウト、2016年7月26日オープン、系列店は AJILLO (上野、中野、神田西口、下北沢)、Bistronomie Avin、角打ち割烹 CONBU、Gourmandise Alvino、Bar Buzz、Buzz Bee。メニュー (2023年): 名物のウニクリームコロッケ (要予約)、飴色玉ねぎのポテサラ、前菜盛り合わせ、庄内豚のパテアンクルート、バーニャカウダ。口コミ (2026年9〜10月): カニ味噌パスタ、アヒージョ、和牛の炙りカルパッチョ、本日のピザ、ワインの種類が多い、スタッフの気配り、予約カード3枚でワイン1本、コスパは普通という声も。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', WS, R + 'B535608915/', R + 'B535865356/', R + 'B536700657/', R + 'B536771502/', R + 'B536987068/', R + 'B537055791/', R + 'B537319527/', R + 'B537734030/', R + 'B537990164/', R + 'B538095293/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Lively counter bar; smoking allowed; no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区上野2-2-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区上野二丁目2番6号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB + 'dtlmenu/'],
    price_note: 'Prices from the Tabelog menu updated March 2023, before tax; likely higher now.', last_checked: TODAY, items: [
      it('', '', 'Sea-urchin cream croquette (reservation required)', '¥600', 'Signature', 'no', 'no', 'Tabelog menu 2023, before tax.', 'uni_croquette'),
      it('', '', 'Potato salad with amber onions', '¥500', 'Signature', 'ask', 'ask', 'Tabelog menu 2023, before tax.', 'potato_salad'),
      it('', '', 'Assorted appetizers (3 kinds)', '¥1,200', 'Signature', 'ask', 'ask', 'Tabelog menu 2023, before tax; 5 kinds ¥1,800.', 'antipasti'),
      it('', '', 'Fresh vegetable bagna cauda', '¥1,000', 'Salad', 'ask', 'ask', 'Tabelog menu 2023, before tax.', 'bagna_cauda'),
    ] }, {
    cuisine: 'AJILLO のグループによる、カウンターで楽しむイタリアンのバル料理とワイン (食べログ)・名物はウニを半分入れたウニクリームコロッケ、飴色玉ねぎのポテトサラダ、前菜盛り合わせ3種か5種、庄内豚のパテアンクルート、バーニャカウダ、鮮魚のカルパッチョ、オリーブ (食べログのメニュー、2023年)・2026年の口コミ: カニ味噌パスタ、季節のパスタ、本日のピザ、トマト、ブロッコリー、ムール貝、海老のアヒージョ、和牛の炙りカルパッチョ、肉料理、サングリア・豊富なワイン、ソムリエ、飲み放題付きのコース',
    neighborhood: '上野二丁目、湯島へ向かう裏路地。上野広小路駅・上野御徒町駅・仲御徒町駅A3出口から徒歩2分、湯島駅から3分',
    gf_detail: 'グルテンフリーは要確認。名物はパン粉のコロッケで、パスタ、ピザ、パテアンクルートは小麦。カルパッチョ、アヒージョ、サラダもグルテンフリーの説明はありません。',
    vegan_detail: 'ヴィーガンは要確認。食べログにはベジタリアン向けメニューありとあり、野菜のピクルス、オリーブ、グリーンサラダ、バーニャカウダ (クリーミーなソース) もありますが、ヴィーガンの表示はありません。',
    notes: '[イタリアンバル・上野広小路、朝4時までのワインとウニクリームコロッケ] 上野と湯島の間の裏路地にある、にぎやかな小さなイタリアンのワインバーで、2016年から、日曜以外は朝4時まで。1階はカウンター、2階はグループ向けのテーブル。誰もが頼むのはウニを半分詰めたウニクリームコロッケ (要予約)。続いてカニ味噌パスタ、アヒージョ、和牛の炙りカルパッチョ、ピザ、たっぷりの前菜盛り合わせ。ワインの種類が多く、手早く温かいサービスが口コミで何度もほめられています。店内は喫煙可。2026年9月には値段の割に普通という声も。',
  });
}

// ================================================================ プロースト東京 上野店
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13202406/'; const R = TB + 'dtlrvwlst/';
  const WS = 'https://proost-tokyo-ueno.com/';
  const W = day(['17:00', '23:00']); const E = day(['16:00', '23:00']);
  put({
    id: 'tokyo_prost_tokyo_ueno', name: 'プロースト東京 ソーセージ＆燻製バル 上野店 (Prost Tokyo)', category: 'OMNI',
    lat: 35.708267, lng: 139.772949, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: the house sausages are described as additive-free fresh meat, but casings, fillers and sauces are not described, and pasta, bread and desserts are on the menu; nothing is labelled gluten-free.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Vegan — ask: Tabelog lists vegetarian options, and vegetables come from the restaurant\'s own farm (bagna cauda, salads), but most dishes are sausage, smoked meat, fish and cheese; nothing is marked vegan.',
    hours_raw: 'Mon–Fri and the day before a holiday 17:00–23:00; Sat, Sun and holidays 16:00–23:00; last order food 22:00, drinks 22:30; closing time may vary; closing days not fixed (Tabelog). Reservations by phone 16:00–23:00 or online any time; same-day cancellations charged. If full, the sister shop Prost Tokyo Akihabara (7–10 min walk) serves the same menu. Table charge ¥770 per person (not on courses); private rooms add 10%. 50 seats; private rooms for 2–8. Non-smoking. Cards and QR (PayPay, Rakuten Pay); no e-money. Children welcome. BYO allowed. Opened 15 November 2016.',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ueno 2-chōme, VOLT上野広小路 6F — 1 min from Ueno-Hirokoji Exit A3; 2 min from Ueno-Okachimachi; 6 min from JR Ueno',
    cuisine: 'Additive-free sausages made in-house — over 20 kinds that change with the seasons, from Thüringer, weisswurst and salsiccia to habanero-garlic, shiso and Japanese-style — plus dishes smoked daily in the house smoker and vegetables from its own farm in Ibaraki (Tabelog menu, June 2026) · raclette grill with Hokkaido raclette and farm vegetables · October 2026 reviews: smoked umeshu ¥968, homemade smoked assortment (salmon, duck, pancetta) ¥1,188, fish carpaccio ¥1,078, smoked tofu, potato salad, Spanish omelette, bagna cauda, affogato ¥583 · beer, wine, sangria, smoked drinks; courses with all-you-can-drink',
    website: WS, gmaps: gm('プロースト東京 上野店'), menu_url: TB + 'dtlmenu/',
    notes: "[Sausage & smoke bar · Ueno-Hirokoji, house sausages from around the world] A dim, wood-toned sixth-floor bar a minute from Ueno-Hirokoji Station, open since 2016, that makes its own additive-free sausages — around twenty kinds through the year, from German Thüringer and weisswurst to a habanero Spanish sausage and a shiso one — and smokes salmon, duck, pancetta, cheese and even drinks in-house. Vegetables come from its own farm in Ibaraki, best in the raclette grill. Expect about ¥4,000–5,000 a head with a ¥770 table charge (none on courses); there are private rooms for couples and small groups. Most 2026 reviewers enjoyed the sausages and smoked plates; one in October 2026 found the food and drinks unremarkable. If it is full, the Akihabara branch has the same menu.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 November 2016 (Tabelog)', background: 'Tabelog official listing; sister shop Prost Tokyo Akihabara. The menu describes in-house sausage making (stuffing, drying, smoking) and a farm, Prost Farm, in Ibaraki Prefecture. No source names the operator or cooks.', philosophy: 'Additive-free sausages with no chemical seasonings or preservatives (Tabelog menu).', specialty: 'House sausages; smoked dishes.',
      anecdotes: [
        { text: '"From a selection of over a dozen types of sausages, I chose two: the Spanish habanero and garlic sausage, and the French tapenade with olives and anchovies sausage." — September 2026.', source: R + 'B536734527/' },
        { text: '"The smoked umeshu has a rich aroma, and when you taste it, the fruity flavor bursts forth with minimal bitterness" — October 2026.', source: R + 'B537695364/' },
        { text: '"The food isn\'t bad, but it\'s not particularly delicious either, and I wasn\'t impressed." — October 2026.', source: R + 'B536990820/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): プロースト東京 ソーセージ＆燻製バル 上野店、上野2-1-9 VOLT上野広小路 6F、上野広小路駅A3出口から徒歩1分、月〜金・祝前日17:00〜23:00、土日祝16:00〜23:00 (料理L.O.22:00、ドリンクL.O.22:30)、不定休、予約可 (電話は16時〜23時)、満席時は姉妹店のプロースト東京 秋葉原 (同じメニュー)、チャージ770円 (コースは不要)、個室は10%、50席、禁煙、カード・QR可、2016年11月15日オープン。メニュー (2026年6月): 無添加の自家製ソーセージ20種以上 (テューリンガー、ヴァイスヴルスト、サルシッチャ、スペインのハバネロ、しそなど)、自家燻製、茨城の自社農園 Prost Farm の野菜、ラクレットグリル。口コミ (2026年9〜11月): 燻製梅酒968円、自家製燻製の盛り合わせ1,188円、カルパッチョ1,078円、燻製豆腐、アフォガート583円、2026年10月にはそれほどおいしくないという声も。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', WS, R + 'B536152105/', R + 'B536621034/', R + 'B536734527/', R + 'B536990820/', R + 'B537695364/', R + 'B537708878/', R + 'B537805140/', R + 'B537832576/', R + 'B538096400/', R + 'B538470534/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain the menu in detail (October 2026); no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区上野2-1-9 VOLT上野広小路 6F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing (menu updated June 2026); reviews dated September–November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区上野二丁目1番9号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537695364/'],
    price_note: 'Prices from an October 2026 review (tax included); ¥770 table charge.', last_checked: TODAY, items: [
      it('', '', 'Smoked umeshu', '¥968', 'Drinks', 'ask', 'ask', 'October 2026.', 'smoked_umeshu'),
      it('', '', 'Homemade smoked assortment (salmon, duck, pancetta)', '¥1,188', 'Smoked', 'ask', 'no', 'October 2026.', 'smoked_assortment'),
      it('', '', 'Fresh fish carpaccio (daily)', '¥1,078', 'Appetizers', 'ask', 'no', 'October 2026.', 'carpaccio'),
      it('', '', 'Affogato', '¥583', 'Dessert', 'ask', 'no', 'October 2026.', 'affogato'),
    ] }, {
    cuisine: '自家製の無添加ソーセージ: 季節で替わる20種以上で、テューリンガー、ヴァイスヴルスト、サルシッチャから、ハバネロとにんにく、しそ、和風まで。毎日店の燻製器で作る燻製料理と茨城の自社農園の野菜 (食べログのメニュー、2026年6月)・北海道産ラクレットと農園野菜のラクレットグリル・2026年10月の口コミ: 燻製梅酒968円、自家製燻製の盛り合わせ (サーモン、鴨、パンチェッタ) 1,188円、鮮魚のカルパッチョ1,078円、燻製豆腐、ポテトサラダ、スパニッシュオムレツ、バーニャカウダ、アフォガート583円・ビール、ワイン、サングリア、燻製ドリンク、飲み放題付きコース',
    neighborhood: '上野二丁目、VOLT上野広小路 6F。上野広小路駅A3出口から徒歩1分、上野御徒町駅から2分、JR上野駅から6分',
    gf_detail: 'グルテンフリーは要確認。自家製ソーセージは無添加の生肉と説明されていますが、ケーシング、つなぎ、ソースの説明はなく、パスタ、パン、デザートもあります。グルテンフリーの表示はありません。',
    vegan_detail: 'ヴィーガンは要確認。食べログにはベジタリアン向けメニューありとあり、自社農園の野菜 (バーニャカウダ、サラダ) もありますが、ほとんどがソーセージ、燻製肉、魚、チーズで、ヴィーガンの表示はありません。',
    notes: '[ソーセージと燻製のバル・上野広小路、世界のソーセージを自家製で] 上野広小路駅から1分、ビルの6階にある薄暗く木の温かみのあるバルで2016年から。無添加のソーセージを自家製で、年間で約20種、ドイツのテューリンガーやヴァイスヴルストから、スペインのハバネロやしそのソーセージまで。サーモン、鴨、パンチェッタ、チーズ、さらに飲み物まで店で燻製に。野菜は茨城の自社農園から、おすすめはラクレットグリル。予算は一人約4,000〜5,000円、チャージ770円 (コースは不要)。2人や少人数向けの個室も。2026年の口コミの多くはソーセージと燻製を楽しんでいますが、2026年10月には料理も飲み物も印象に残らなかったという声も。満席なら同じメニューの秋葉原店へ。',
  });
}

// ================================================================ ラッフルズ カリー
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13033116/'; const R = TB + 'dtlrvwlst/';
  const L = day(['11:45', '16:00'], ['18:00', '21:30']);
  put({
    id: 'tokyo_raffles_curry_taito', name: 'ラッフルズ カリー (raffles curry)', category: 'OMNI',
    lat: 35.707314, lng: 139.778381, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: curry over rice with no bread on the menu, but the roux and the creamy chicken curry are not described; no gluten-free statement.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken and mutton curries; the vegetable curries are with chicken or mutton, and one is cream-based.',
    hours_raw: 'Mon, Wed, Thu, Fri 11:45–16:00 and 18:00–21:30; Tue 11:45–14:00 and 18:00–21:30; Sat 11:45–16:00; closed Sundays and holidays (Tabelog; may change). A November 2026 diner found it shut during posted hours on a weekday of a long holiday, with no notice on social media and no answer by phone. No reservations; a short queue at weekday noon (October 2026). Cash only. 7 counter seats. Non-smoking. Take-out.',
    hours: { 0: L, 1: day(['11:45', '14:00'], ['18:00', '21:30']), 2: L, 3: L, 4: L, 5: day(['11:45', '16:00']) }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Taitō 4-chōme, 第二さたけビル 1F — 3 min from Naka-Okachimachi; 4 min from Shin-Okachimachi and Ueno-Okachimachi; 5 min from JR Okachimachi',
    cuisine: 'Mild Indian-style curry at a tiny counter; Tabelog Curry TOKYO 100 in 2023, 2024 and 2026 · October 2026 reviews: chicken curry ¥950, the most popular, with plenty of tender chicken in a mild, coconut-like sauce; vegetable chicken curry ¥950; vegetable keema with green beans, carrots, potatoes, mushrooms and daikon; mutton curry; two-curry combinations ¥1,500–1,600; assorted curry with rice, salad and iced tea ¥1,800 · soft-boiled egg, chai mousse · three spice levels',
    website: null, gmaps: gm('ラッフルズ カリー 台東4-29-10'), menu_url: null,
    notes: "[Curry · Naka-Okachimachi, a seven-seat counter of gentle curries] A tiny counter curry shop, marked only by a sign, a few minutes from Naka-Okachimachi Station and a regular on Tabelog's Tokyo curry 100 lists. The curries are smooth and mild rather than fiery — chicken curry (¥950) heaped with tender chicken, a vegetable keema full of green beans and daikon, a deeper mutton — and most people get two in one plate for about ¥1,500. Seven seats fill fast at lunch; it is open in the evening on weekdays, cash only, closed Sundays and holidays. Reviewers who want heat find it too gentle even at the top spice level, one October 2026 diner thought the kitchen a bit dirty, and one in November 2026 found it closed without notice during posted hours.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Tabelog listing (Curry TOKYO 100: 2023, 2024, 2026). No source names the owner or cook.', philosophy: null, specialty: 'Chicken curry; mutton curry.',
      anecdotes: [
        { text: '"Both were the type of curry I love—smooth and not overly spicy, with a mild salty flavor." — October 2026, chicken curry and vegetable keema.', source: R + 'B537497176/' },
        { text: '"The tender chicken was indeed plentiful, just as the reviews said, making it very satisfying to eat." — October 2026, chicken curry ¥950.', source: R + 'B537549471/' },
        { text: '"However, even after the opening time, there was no sign of it being open, and I couldn\'t get through on the phone." — November 2026.', source: R + 'B537885076/' },
      ],
      japanese_sources_summary: '食べログ: ラッフルズ カリー、台東4-29-10 第二さたけビル 1F、仲御徒町駅から徒歩3分、新御徒町駅・上野御徒町駅から4分、JR御徒町駅から5分、月水木金11:45〜16:00・18:00〜21:30、火11:45〜14:00・18:00〜21:30、土11:45〜16:00、日祝休み、予約不可、カード・電子マネー・QR不可、カウンター7席、禁煙、テイクアウト、食べログ カレー TOKYO 百名店 2023・2024・2026。口コミ (2026年10〜11月): 一番人気のチキンカレー950円、野菜チキンカレー950円、野菜キーマ、マトンカレー、2種盛り1,500〜1,600円、盛り合わせ1,800円、マイルドで辛さ控えめ、平日昼は少し並ぶ、2026年11月には営業時間なのに開いておらず告知もなかったという声、厨房が清潔でないという声も。',
      confidence: 'medium', sources: [TB, R + 'B537380046/', R + 'B537389289/', R + 'B537497176/', R + 'B537549471/', R + 'B537836666/', R + 'B537837658/', R + 'B537885076/', R + 'B537891594/', R + 'B538211036/', R + 'B538430885/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Tiny counter; cash only; no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区台東4-29-10 第二さたけビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated October–November 2026 (one found it closed without notice in November).' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区台東四丁目29番10号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537549471/', R + 'B537836666/', R + 'B537837658/', R + 'B537389289/'],
    price_note: 'Prices from October 2026 reviews (tax included); no menu on Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Chicken curry', '¥950', 'Curry', 'ask', 'no', 'October 2026.', 'chicken_curry'),
      it('', '', 'Vegetable chicken curry', '¥950', 'Curry', 'ask', 'no', 'October 2026.', 'veg_chicken_curry'),
      it('', '', 'Two curries (chicken and vegetable mutton)', '¥1,500', 'Curry', 'ask', 'no', 'October 2026.', 'two_curry'),
      it('', '', 'Assorted curry with rice, salad and iced tea', '¥1,800', 'Curry', 'ask', 'no', 'October 2026.', 'assorted_curry'),
    ] }, {
    cuisine: '小さなカウンターのマイルドなインド風カレー。食べログ カレー TOKYO 百名店 2023・2024・2026・2026年10月の口コミ: 一番人気のチキンカレー950円、やわらかい鶏たっぷりでココナッツのようなまろやかなソース、野菜チキンカレー950円、いんげん、にんじん、じゃがいも、きのこ、大根の野菜キーマ、マトンカレー、2種盛り1,500〜1,600円、ライス、サラダ、アイスティー付きの盛り合わせ1,800円・半熟卵、チャイのムース・辛さは3段階',
    neighborhood: '台東四丁目、第二さたけビル 1F。仲御徒町駅から徒歩3分、新御徒町駅・上野御徒町駅から4分、JR御徒町駅から5分',
    gf_detail: 'グルテンフリーは要確認。パンはなくカレーとライスですが、ルウやクリームのチキンカレーの説明はなく、グルテンフリーの表示もありません。',
    vegan_detail: 'ヴィーガンではありません。チキンとマトンのカレー。野菜のカレーもチキンかマトン入りで、クリームのものも。',
    notes: '[カレー・仲御徒町、7席のやさしいカレーのカウンター] 仲御徒町駅から数分、看板だけが目印の小さなカウンターのカレー店で、食べログのカレー百名店の常連。カレーは辛さより、なめらかでマイルド: やわらかい鶏がたっぷりのチキンカレー (950円)、いんげんや大根たっぷりの野菜キーマ、コクのあるマトン。多くの人は2種盛りで約1,500円。7席は昼にすぐ埋まり、平日は夜も営業、現金のみ、日曜・祝日休み。辛さを求める人には最も辛いレベルでもやさしすぎるという声、2026年10月には厨房がやや不衛生という声、11月には営業時間なのに告知なく閉まっていたという声も。',
  });
}

save();
