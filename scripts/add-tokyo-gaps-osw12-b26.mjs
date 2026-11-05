// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles), circle `ueno`, lane osw12, batch 26.
//   + RÉJOUISSANCE (6-seat French counter in Yushima; chef Tsunenori Sakaguchi, ex Pierre Gagnaire; opened April 2026)
//   + チーズ谷 Cheese Ya (raclette and cheese-fondue bar by Iriya Stn; opened 2020)
//   + Bar W (cocktail and whisky bar in Yushima, to 3 am; opened 2020)
//   + 春近 GABA SOBA Lab Haruchika (sprouted 100% buckwheat soba and sake by Yushima Stn; opened July 2025)
// Skipped (see skip()): ワインの酒場。ディプント 上野御徒町店 13205295 (chain).
// Undecided (no put, no skip): as before.
// Chain check (with Greg's 2026-11-02 rulings and the working line of 4 or fewer shops): RÉJOUISSANCE, Cheese Ya, Bar W and
//   Haruchika are single shops as found.
// Dedupe: none is in data/tokyo.json by name, Tabelog id or address. check-stacked-pins: no new pin within 3 m of another.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw12-26');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13205295', 'chain: ワインの酒場。ディプント (run by Pronto) has many same-brand shops — 浦和, さいたま新都心, 高円寺, 武蔵小杉, 渋谷神南, 渋谷, 品川インターシティ, 西新宿一丁目, 吉祥寺 (Gnavi/Retty/流通ニュース listings); this is the 上野御徒町店.');

// ================================================================ RÉJOUISSANCE
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13320464/'; const R = TB + 'dtlrvwlst/';
  const D = day(['19:00', '23:00']);
  put({
    id: 'tokyo_rejouissance_yushima', name: 'RÉJOUISSANCE (レジュイサンス)', category: 'MOM_AND_POP',
    lat: 35.708538, lng: 139.770248, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: a set French course; the restaurant takes allergy notes only in advance (in the booking request) and may refuse a booking for severe allergies; no gluten-free statement.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses built on caviar, seafood, kinmedai and Shiretoko beef; no same-day changes.',
    hours_raw: 'Thu–Sun 19:00–23:00; closed Mondays to Wednesdays (Tabelog). Reservations only; late arrivals may miss courses; allergies must be noted when booking (no same-day changes; severe allergies may be refused). Children 12 and over who can eat the adult course. No service charge; water charge ¥1,100. 6 counter seats. Non-smoking. Cards, transport IC, iD, QUICPay; no QR. English- and Chinese-speaking staff. Opened 1 April 2026.',
    hours: { 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Yushima 3-chōme (Bunkyō), 波岡ビル 1F — 1 min from Yushima Stn; 3 min from Ueno-Hirokoji / Ueno-Okachimachi; 5 min from JR Okachimachi',
    cuisine: 'French omakase with Japanese seasonal ingredients, dashi and Japanese aesthetics, at a six-seat open-kitchen counter (2026 reviews) · "Menu du RÉJOUISSANCE" course: e.g. hand-peeled shrimp and clam chowder with Osetra caviar, Beniharuka sweet-potato soup with chive oil, kinmedai, Shiretoko beef, matsutake in autumn · wine pairing with Kimura glassware · about ¥30,000–40,000 a head with drinks (reviews)',
    website: null, gmaps: gm('RÉJOUISSANCE 湯島3-46-8'), menu_url: null,
    notes: "[French · Yushima, a six-seat chef's counter] A sleek black-and-grey French counter of just six seats a minute from Yushima Station, opened in April 2026 by chef Tsunenori Sakaguchi, who trained in France and at Pierre Gagnaire (about five years at the two-Michelin-star restaurant, per October 2026 reviews; at Pierre Gagnaire Tokyo after returning to Japan, per a September 2026 review). The name means \"celebration\", and the single course leans into it: a mound of caviar over shrimp and clam chowder, sweet-potato soup, kinmedai, Shiretoko beef and autumn matsutake, mixing French technique with dashi and Japanese seasonal produce, with wine pairings poured into Kimura glasses. You watch everything cooked in front of you. Expect about ¥30,000–40,000 a head with drinks. Booking only, Thursday to Sunday evenings; note allergies when booking.",
    chef_bio: { chef_name: 'Tsunenori Sakaguchi', roles: ['chef'], origin: 'Opened 1 April 2026 (Tabelog)', background: 'Reviews differ on the training. Per a September 2026 review: graduated from Ecole Tsuji Osaka, went to France for the fundamentals, then after returning to Japan worked at Pierre Gagnaire Tokyo. Per October 2026 reviews: trained in France and worked about five years at the two-Michelin-star Pierre Gagnaire, then as a traveling chef in Japan and abroad before opening here. Name as written in English reviews; no Japanese spelling found.', philosophy: 'Per the listing: a special time of "celebration" in French cuisine.', specialty: 'French course with Japanese seasonal ingredients.',
      anecdotes: [
        { text: '"The meal began with hand-caught shrimp and clam chowder, accompanied by Osetra caviar and Champagne." — October 2026.', source: R + 'B537121602/' },
        { text: '"The course menu is centered around French cuisine while incorporating seasonal Japanese ingredients, dashi, and a sense of Japanese aesthetics throughout." — September 2026.', source: R + 'B535874542/' },
        { text: '"With only six counter seats, you can enjoy delicious dishes and wine while watching the chef prepare your meal right in front of you." — October 2026.', source: R + 'B538139596/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): RÉJOUISSANCE、文京区湯島3-46-8 波岡ビル 1F、湯島駅から徒歩1分、上野広小路駅・上野御徒町駅から3分、JR御徒町駅から5分、木〜日19:00〜23:00、月〜水休み、完全予約制、遅刻するとコースの一部を提供できない場合あり、アレルギーは予約時に (当日の変更不可、重い場合はお断りも)、12歳以上で大人と同じコースが食べられる子どもは可、サービス料なし、お水代1,100円、カウンター6席、禁煙、カード・交通系IC・iD・QUICPay可、英語・中国語のスタッフ、2026年4月1日オープン、フランス語で「祝祭」。口コミ (2026年9〜10月): シェフの Tsunenori Sakaguchi の経歴は口コミで異なる: 2026年9月の口コミでは Ecole Tsuji Osaka を卒業して渡仏、帰国後に Pierre Gagnaire Tokyo、2026年10月の口コミではミシュラン二つ星の Pierre Gagnaire で約5年、出張料理人を経て開店、フレンチに日本の旬の食材とだし、手むき海老とハマグリのチャウダーにキャビア、紅はるかのスープ、金目鯛、知床牛、松茸、木村硝子のグラスでワインのペアリング、一人約30,000〜40,000円。',
      confidence: 'medium', sources: [TB, R + 'B533213731/', R + 'B535874542/', R + 'B537121602/', R + 'B537863423/', R + 'B537995830/', R + 'B538139596/', R + 'B538247616/', R + 'B538270147/', R + 'B538313635/', R + 'B538330437/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists English- and Chinese-speaking staff; counter omakase; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都文京区湯島3-46-8 波岡ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing (opened April 2026); reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都文京区湯島三丁目46番8号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No course price published; reviews spent about ¥30,000–40,000 a head with drinks; water charge ¥1,100.', last_checked: TODAY, items: [] }, {
    cuisine: '6席のオープンキッチンのカウンターで、日本の旬の食材、だし、和の美意識を取り入れたフレンチのおまかせ (2026年の口コミ)・「Menu du RÉJOUISSANCE」のコース: たとえば手むき海老とハマグリのチャウダーにオシェトラキャビア、紅はるかのスープとチャイブオイル、金目鯛、知床牛、秋の松茸・木村硝子のグラスでワインのペアリング・ドリンク込みで一人約30,000〜40,000円 (口コミ)',
    neighborhood: '湯島三丁目 (文京区)、波岡ビル 1F。湯島駅から徒歩1分、上野広小路駅・上野御徒町駅から3分、JR御徒町駅から5分',
    gf_detail: 'グルテンフリーは要確認。フレンチのおまかせコースで、アレルギーは予約時のリクエスト欄でのみ受け付け、重い場合は予約を断ることも。グルテンフリーの説明はありません。',
    vegan_detail: 'ヴィーガンではありません。キャビア、魚介、金目鯛、知床牛のコースで、当日の変更は不可。',
    notes: '[フレンチ・湯島、6席のシェフズカウンター] 湯島駅から1分、黒とグレーを基調にした洗練された6席のフレンチのカウンターで、2026年4月に開店。2026年の口コミによると、シェフの Tsunenori Sakaguchi は渡仏し、Pierre Gagnaire で修業 (二つ星の店で約5年とも、帰国後の Pierre Gagnaire Tokyo とも)。店名はフランス語で「祝祭」で、コースもそのとおり: 山盛りのキャビアをのせた海老とハマグリのチャウダー、さつまいものスープ、金目鯛、知床牛、秋の松茸など、フレンチの技法にだしと日本の旬の食材を合わせ、木村硝子のグラスでワインのペアリングも。すべて目の前で調理。ドリンク込みで一人約30,000〜40,000円。完全予約制、木〜日の夜のみ、アレルギーは予約時に。',
  });
}

// ================================================================ チーズ谷
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131104/13248257/'; const R = TB + 'dtlrvwlst/';
  const W = day(['12:00', '15:00'], ['17:00', '01:00']); const S = day(['12:00', '15:00'], ['17:00', '23:00']);
  put({
    id: 'tokyo_cheese_ya_shitaya', name: 'チーズ谷 (Cheese Ya)', category: 'OMNI',
    lat: 35.720284, lng: 139.78302, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: raclette and fondue come with bread (refills ¥50) as well as potatoes and vegetables; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a cheese specialist — raclette, fondue, cheese risotto, cured meats and steak.',
    hours_raw: 'Tue–Sat 12:00–15:00 (food last order 13:30) and 17:00–1:00 (last order 24:00); Sun and holidays 12:00–15:00 and 17:00–23:00 (last order 22:30); closed Mondays (Tuesday after a Monday holiday) (Tabelog). Reservations taken; 2-hour limit when busy. Charge ¥400 per person. Weekend-and-holiday lunch fondue course with sparkling wine (September 2026). 17 seats (5 at the counter, tables) and a terrace. Smoking area. Cards, e-money and QR. Opened 18 May 2020.',
    hours: { 1: W, 2: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shitaya 2-chōme, 杉浦ビル 1F — 1 min from Iriya Stn Exit 2; 6 min from JR Uguisudani South Exit',
    cuisine: 'Raclette and cheese-fondue specialist (Tabelog) · courses: raclette and cheese fondue with 2-hour all-you-can-drink; weekend "King and Queen of Cheese" fondue course · menu (Tabelog, February 2026): wagyu top-blade stone-grilled steak ¥3,300, whole-mimolette risotto ¥2,400, fish carpaccio with Parmigiano ¥1,000; raclette or fondue sets from ¥1,600 with add-ons such as homemade bacon and sausages +¥770, five seasonal vegetables +¥550; extra potato, broccoli or sausage ¥330; bread refills ¥50 · 2026 reviews: choice of three raclette cheeses, shrimp and broccoli ajillo, Kamui pork, avocado farci, lamb meatloaf, curry risotto, prosciutto and melon, Spanish omelette · orange wine and other wines',
    website: null, gmaps: gm('チーズ谷 下谷2-3-1'), menu_url: TB + 'dtlmenu/',
    notes: "[Cheese bar · Iriya, raclette and fondue by the station] A small cheese restaurant a minute from Iriya Station, open since 2020, built around raclette scraped over potatoes, vegetables and sausages and pots of cheese fondue. You can choose from three raclette cheeses, finish with a risotto melted into a whole mimolette, or go for a course with two hours of drinks; weekends bring a 'King and Queen of Cheese' fondue lunch with sparkling wine. Expect about ¥4,000–5,000 a head at dinner plus a ¥400 charge. Cheese lovers rave; book, as it fills up. Open until 1 am except Sundays; closed Mondays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 18 May 2020 (Tabelog)', background: 'Tabelog official listing. No source names the owner or cooks.', philosophy: null, specialty: 'Raclette; cheese fondue.',
      anecdotes: [
        { text: '"The meal included salad, raclette, fondue, risotto, and even ice cream—cheese, cheese, cheese!!!" — June 2026, course with all-you-can-drink.', source: R + 'B530279201/' },
        { text: '"For the finale, I requested mimolette cheese to melt into the risotto, which not only looked appealing but was also incredibly tasty." — July 2026.', source: R + 'B532861549/' },
        { text: '"I opted for the vegetable raclette, and it was great that I could choose from three types of cheese." — July 2026.', source: R + 'B532861549/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): チーズ谷、下谷2-3-1 杉浦ビル 1F、入谷駅2番出口から徒歩1分、JR鶯谷駅南口から6分、火〜土12:00〜15:00 (料理L.O.13:30)・17:00〜翌1:00 (L.O.24:00)、日祝12:00〜15:00・17:00〜23:00、月曜休み、予約可、混雑時は2時間制、チャージ400円、17席、テラス、分煙、カード・電子マネー・QR可、2020年5月18日オープン、ラクレットとチーズフォンデュの専門店。メニュー (2026年2月): 和牛ミスジの石焼きステーキ3,300円、ミモレットのチーズリゾット2,400円、鮮魚のカルパッチョ1,000円、ベーシックセット1,600円から、自家製ベーコンとソーセージ+770円、季節の野菜5種+550円、パンのおかわり50円。口コミ (2026年3〜10月): 飲み放題付きのコース、週末の「チーズの王様と女王様」のフォンデュのランチ、3種から選べるラクレット、アヒージョ、カムイ豚、ラムのミートローフ、カレーのリゾット、オレンジワイン。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B524328565/', R + 'B525035917/', R + 'B527003591/', R + 'B530279201/', R + 'B530666438/', R + 'B530777316/', R + 'B532861549/', R + 'B532922773/', R + 'B536387061/', R + 'B538260833/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small cheese bar; book ahead; no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区下谷2-3-1 杉浦ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing (menu updated February 2026); reviews dated March–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区下谷二丁目3番1号 (go) 5m; ${TODAY}`,
  }, { verified: 'partial', confidence: 'medium', sources: [TB + 'dtlmenu/'],
    price_note: 'Prices from the Tabelog menu (updated February 2026); ¥400 charge per person.', last_checked: TODAY, items: [
      it('', '', 'Raclette or fondue basic set', 'from ¥1,600', 'Cheese', 'ask', 'no', 'Tabelog menu, February 2026.', 'basic_set'),
      it('', '', 'Whole-mimolette cheese risotto', '¥2,400', 'Cheese', 'ask', 'no', 'Tabelog menu, February 2026.', 'mimolette_risotto'),
      it('', '', 'Wagyu top-blade stone-grilled steak', '¥3,300', 'Mains', 'ask', 'no', 'Tabelog menu, February 2026.', 'misuji_steak'),
      it('', '', 'Fish carpaccio with Parmigiano', '¥1,000', 'Appetizers', 'ask', 'no', 'Tabelog menu, February 2026.', 'carpaccio'),
    ] }, {
    cuisine: 'ラクレットとチーズフォンデュの専門店 (食べログ)・コース: 2時間飲み放題付きのラクレットとフォンデュ、週末の「チーズの王様と女王様」のフォンデュのコース・メニュー (食べログ、2026年2月): 和牛ミスジの石焼きステーキ3,300円、ミモレット丸ごとのリゾット2,400円、パルミジャーノの鮮魚のカルパッチョ1,000円、ラクレットかフォンデュのセット1,600円から、自家製ベーコンとソーセージ+770円、季節の野菜5種+550円、じゃがいも・ブロッコリー・ソーセージの追加330円、パンのおかわり50円・2026年の口コミ: 3種から選べるラクレットのチーズ、海老とブロッコリーのアヒージョ、カムイ豚、アボカドのファルシ、ラムのミートローフ、カレーのリゾット、生ハムメロン、スパニッシュオムレツ・オレンジワインなどのワイン',
    neighborhood: '下谷二丁目、杉浦ビル 1F。入谷駅2番出口から徒歩1分、JR鶯谷駅南口から6分',
    gf_detail: 'グルテンフリーは要確認。ラクレットとフォンデュにはパン (おかわり50円) のほか、じゃがいもや野菜も。グルテンフリーの説明はありません。',
    vegan_detail: 'ヴィーガンではありません。チーズの専門店で、ラクレット、フォンデュ、チーズのリゾット、生ハム、ステーキ。',
    notes: '[チーズ・入谷、駅前のラクレットとフォンデュ] 入谷駅から1分の小さなチーズのレストランで2020年から。じゃがいも、野菜、ソーセージにかけるラクレットと、鍋のチーズフォンデュが主役。ラクレットは3種のチーズから選べ、締めはミモレットを丸ごと溶かしたリゾット、2時間飲み放題付きのコースも。週末の昼はスパークリングワイン付きの「チーズの王様と女王様」のフォンデュ。夜は一人約4,000〜5,000円とチャージ400円。チーズ好きに大好評で、混むので予約を。日曜以外は深夜1時まで、月曜休み。',
  });
}

// ================================================================ Bar W
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13243810/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '03:00']);
  put({
    id: 'tokyo_bar_w_yushima', name: 'Bar W', category: 'OMNI',
    lat: 35.708096, lng: 139.770645, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: a cocktail and whisky bar; small dishes such as duck prosciutto are not described for gluten.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Vegan — ask: fruit cocktails such as grated pear or strawberry, but snacks and some cocktails (blue cheese) are not vegan; nothing is described.',
    hours_raw: 'Tue–Sun and the day before or after a holiday 18:00–3:00 (drinks last order 2:00); closed Mondays and holidays (Tabelog). Reservations taken; same-day bookings by phone. Cover charge ¥1,000. 11 seats (7 at the counter, 4 at a table). Smoking allowed. Cards, QUICPay and QR. Free Wi-Fi. Opened 22 January 2020.',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Yushima 3-chōme (Bunkyō), SN湯島ビル 2F — 1 min from Yushima Stn Exit 4; 5 min from Ueno-Okachimachi; 6 min from JR Okachimachi',
    cuisine: 'Cocktail and whisky bar (Tabelog) · seasonal fruit cocktails — grated pear with St-Germain elderflower, strawberry; hojicha-rum Manhattan; blue-cheese cocktail; smoked highball; smoky whiskies (reviews 2025–2026) · snacks such as duck prosciutto · about ¥4,000–5,000 a visit (Tabelog)',
    website: null, gmaps: gm('Bar W 湯島3-35-11'), menu_url: null,
    notes: "[Bar · Yushima, creative cocktails until 3 am] A calm second-floor cocktail and whisky bar a minute from Yushima Station, open since 2020 and until 3 am. The drinks are the draw: fresh-fruit cocktails such as grated pear with elderflower or strawberry, a hojicha-rum Manhattan, an unusual blue-cheese cocktail, smoked highballs and smoky whiskies, with snacks like duck prosciutto. Reviewers like it for a quiet drink alone or with one or two friends, and say the bartender tailors drinks to your taste and looks after non-drinkers too. ¥1,000 cover; smoking allowed; closed Mondays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 22 January 2020 (Tabelog)', background: 'Tabelog official listing; an October 2025 repeat visitor notes a change of bartender, after which new cocktails such as the blue-cheese one appeared. No source names the owner.', philosophy: null, specialty: 'Fruit cocktails; blue-cheese cocktail.',
      anecdotes: [
        { text: '"I had a blue cheese cocktail, and it was truly delicious." — December 2025.', source: R + 'B524390920/' },
        { text: '"The interior has a calm atmosphere, and the staff can suggest various drinks tailored to your preferences." — August 2025.', source: R + 'B512521694/' },
        { text: '"The duck prosciutto was incredibly delicious." — June 2026.', source: R + 'B530121805/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): Bar W、文京区湯島3-35-11 SN湯島ビル 2F、湯島駅4番出口から徒歩1分、上野御徒町駅から5分、JR御徒町駅から6分、火〜日・祝前日・祝後日18:00〜翌3:00 (ドリンクL.O.2:00)、月曜・祝日休み、予約可、チャージ1,000円、11席 (カウンター7、テーブル4)、喫煙可、カード・QUICPay・QR可、Wi-Fi、2020年1月22日オープン。口コミ (2025年5月〜2026年6月): すりおろした梨とサンジェルマンのカクテル、ほうじ茶ラムのマンハッタン、ブルーチーズのカクテル、いちごのカクテル、スモークハイボール、スモーキーなウイスキー、鴨の生ハム、バーテンダーが替わった、好みに合わせて提案してくれる、ノンアルコールにも対応、落ち着いた雰囲気。',
      confidence: 'medium', sources: [TB, R + 'B430387624/', R + 'B444530398/', R + 'B506691901/', R + 'B506777921/', R + 'B508586997/', R + 'B510057655/', R + 'B512521694/', R + 'B524073800/', R + 'B524390920/', R + 'B530121805/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Quiet cocktail bar; tell the bartender your taste; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都文京区湯島3-35-11 SN湯島ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated May 2025–June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都文京区湯島三丁目35番11号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No item prices found; about ¥4,000–5,000 a visit; cover ¥1,000.', last_checked: TODAY, items: [] }, {
    cuisine: 'カクテルとウイスキーのバー (食べログ)・季節のフルーツカクテル (すりおろした梨とサンジェルマンのエルダーフラワー、いちご)、ほうじ茶ラムのマンハッタン、ブルーチーズのカクテル、スモークハイボール、スモーキーなウイスキー (2025〜2026年の口コミ)・鴨の生ハムなどのおつまみ・一回約4,000〜5,000円 (食べログ)',
    neighborhood: '湯島三丁目 (文京区)、SN湯島ビル 2F。湯島駅4番出口から徒歩1分、上野御徒町駅から5分、JR御徒町駅から6分',
    gf_detail: 'グルテンフリーは要確認。カクテルとウイスキーのバーで、鴨の生ハムなどのおつまみのグルテンの説明はありません。',
    vegan_detail: 'ヴィーガンは要確認。梨やいちごのフルーツカクテルもありますが、おつまみや一部のカクテル (ブルーチーズ) はヴィーガンではなく、説明もありません。',
    notes: '[バー・湯島、深夜3時までの創作カクテル] 湯島駅から1分、ビルの2階にある落ち着いたカクテルとウイスキーのバーで、2020年から深夜3時まで。目当てはカクテルで、すりおろした梨とエルダーフラワー、いちごなどのフルーツカクテル、ほうじ茶ラムのマンハッタン、珍しいブルーチーズのカクテル、スモークハイボール、スモーキーなウイスキー。鴨の生ハムなどのおつまみも。ひとりや2〜3人で静かに飲むのにいいという声が多く、好みに合わせて作ってくれ、お酒を飲まない人にも対応。チャージ1,000円、喫煙可、月曜休み。',
  });
}

// ================================================================ 春近 GABA SOBA Lab
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13311439/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '14:00'], ['18:00', '23:00']); const E = day(['11:30', '15:00'], ['17:30', '22:00']);
  put({
    id: 'tokyo_haruchika_gaba_soba_lab_ikenohata', name: '春近 GABA SOBA Lab (Haruchika GABA SOBA Lab)', category: 'OMNI',
    lat: 35.709248, lng: 139.769287, cuisine_type: 'udon_soba',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: the soba is described as 100% sprouted buckwheat (jūwari), but dipping sauces, tempura and other dishes are not described as gluten-free; ask about the sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based soba sauces, duck, shrimp tempura, sea urchin, sushi in courses; Tabelog lists vegetarian options but none are named.',
    hours_raw: 'Wed–Fri 11:30–14:00 and 18:00–23:00; Sat, Sun and holidays 11:30–15:00 and 17:30–22:00; closed Mondays and Tuesdays (Tabelog). Reservations taken. 36 seats (15 at the counter, 16 at tables, private rooms for 2–6). Non-smoking (smoking outside). Cards, e-money and QR. A TV shows baseball at times (April 2026). Opened 16 July 2025.',
    hours: { 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ikenohata 1-chōme, PROSビル 1F — 2 min from Yushima Stn Exit 1; 6 min from JR Okachimachi and Ueno-Hirokoji',
    cuisine: 'Soba made from 100% sprouted buckwheat (GABA soba), with sake and creative buckwheat dishes (Tabelog; reviews) · menu (Tabelog, May 2026): seiro soba ¥1,300; cold or hot soba ¥1,500; spicy grated-daikon soba ¥1,500; walnut-sauce soba ¥1,700; duck and green-onion soup soba ¥2,700; large shrimp tempura soba ¥3,000; karasumi cheese soba ¥3,000; additive-free sea-urchin soba ¥3,500; soba dumplings ¥1,800; larger portions +¥600 / +¥1,000 · soba tofu; mekabu natto soba; tororo mekabu soba; dinner courses including a sushi-and-soba course with grouper and abalone (September 2026) · sake chosen by the owner',
    website: null, gmaps: gm('春近 GABA SOBA Lab 池之端1-1-7'), menu_url: TB + 'dtlmenu/',
    notes: "[Soba · Yushima, sprouted-buckwheat soba and sake] A soba restaurant near Yushima Station, opened in 2025, that makes its noodles from 100% sprouted buckwheat — thin, fragrant and good with just salt. Lunch soba runs from ¥1,300 for seiro to ¥3,500 for sea-urchin soba; at night there are buckwheat small plates, sake recommended by the cheerful owner, and courses up to a sushi-and-soba dinner. Reviewers describe an enthusiastic owner, running it with family, who explains every dish. Service drew criticism in 2026: one diner waited 30 minutes for soba on a busy night, another found the service careless. Closed Mondays and Tuesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 16 July 2025 (Tabelog)', background: 'Per 2026 reviews, an owner who explains the soba in detail and seems to run the place with family. No source names the owner.', philosophy: null, specialty: 'Sprouted 100% buckwheat soba.',
      anecdotes: [
        { text: '"I began with a beer to quench my thirst, then enjoyed a series of creative buckwheat dishes, each accompanied by a glass of sake recommended by the cheerful owner." — July 2026.', source: R + 'B536078048/' },
        { text: '"Eating it with salt was delightful, and the texture was thin and delicate!" — October 2026, tororo mekabu soba.', source: R + 'B537044653/' },
        { text: '"The service was terrible." — July 2026.', source: R + 'B531959552/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): 春近 GABA SOBA Lab、池之端1-1-7 PROSビル 1F、湯島駅1番出口から徒歩2分、JR御徒町駅・上野広小路駅から6分、水〜金11:30〜14:00・18:00〜23:00、土日祝11:30〜15:00・17:30〜22:00、月火休み、予約可、36席 (カウンター15、テーブル16、個室6)、禁煙 (店外で喫煙可)、カード・電子マネー・QR可、2025年7月16日オープン、発芽そばの十割そば。メニュー (2026年5月): せいろ1,300円、冷・温そば1,500円、辛味おろし1,500円、くるみだれ1,700円、鴨南蛮2,700円、天然大海老天そば3,000円、からすみチーズそば3,000円、無添加のうにそば3,500円、そばがき1,800円、大盛り+600円・+1,000円。口コミ (2026年4〜10月): そば豆腐、めかぶ納豆そば、とろろめかぶそば、寿司とそばのディナーコース (クエ、アワビ)、店主おすすめの日本酒、家族で営んでいるよう、料理を詳しく説明する店主、混んだ夜にそばを30分待った、サービスが雑だったという声、野球中継のテレビ。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B510519966/', R + 'B516499194/', R + 'B524596020/', R + 'B527082875/', R + 'B527720485/', R + 'B529053733/', R + 'B531959552/', R + 'B535262092/', R + 'B536078048/', R + 'B537044653/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'The owner explains the soba in detail; no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区池之端1-1-7 PROSビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing (menu updated May 2026); reviews dated April–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区池之端一丁目1番7号 (go) 9m; ${TODAY}`,
  }, { verified: 'partial', confidence: 'medium', sources: [TB + 'dtlmenu/'],
    price_note: 'Prices from the Tabelog menu (updated May 2026, tax included).', last_checked: TODAY, items: [
      it('', '', 'Seiro soba (sprouted 100% buckwheat)', '¥1,300', 'Soba', 'ask', 'no', 'Tabelog menu, May 2026.', 'seiro'),
      it('', '', 'Walnut-sauce cold soba', '¥1,700', 'Soba', 'ask', 'ask', 'Tabelog menu, May 2026.', 'kurumi_soba'),
      it('', '', 'Duck and green-onion soup soba', '¥2,700', 'Soba', 'ask', 'no', 'Tabelog menu, May 2026.', 'kamo_nanban'),
      it('', '', 'Sea-urchin soba', '¥3,500', 'Soba', 'ask', 'no', 'Tabelog menu, May 2026.', 'uni_soba'),
      it('', '', 'Soba dumplings (sobagaki)', '¥1,800', 'Small plates', 'ask', 'ask', 'Tabelog menu, May 2026.', 'sobagaki'),
    ] }, {
    cuisine: '発芽そばの十割そば (GABA SOBA) に、日本酒と創作のそば料理 (食べログ、口コミ)・メニュー (食べログ、2026年5月): せいろ1,300円、冷・温そば1,500円、辛味おろしそば1,500円、くるみだれそば1,700円、鴨南蛮2,700円、天然大海老天そば3,000円、からすみチーズそば3,000円、無添加のうにそば3,500円、そばがき1,800円、大盛り+600円・+1,000円・そば豆腐、めかぶ納豆そば、とろろめかぶそば、クエやアワビの入る寿司とそばのディナーコースなど (2026年9月)・店主おすすめの日本酒',
    neighborhood: '池之端一丁目、PROSビル 1F。湯島駅1番出口から徒歩2分、JR御徒町駅・上野広小路駅から6分',
    gf_detail: 'グルテンフリーは要確認。そばは発芽そばの十割とされていますが、つゆ、天ぷら、ほかの料理はグルテンフリーの説明がないので、つゆについて確認を。',
    vegan_detail: 'ヴィーガンではありません。だしのつゆ、鴨、海老天、うに、コースの寿司。食べログにはベジタリアン向けメニューありとあるものの、料理名はありません。',
    notes: '[そば・湯島、発芽そばの十割と日本酒] 湯島駅近くのそば店で2025年開店。発芽そばの十割そばで、細く香りがよく、塩だけでもおいしいと好評。昼はせいろ1,300円からうにそば3,500円まで、夜はそばを使った小皿、明るい店主がすすめる日本酒、寿司とそばのコースまで。口コミでは家族で営んでいるらしい熱心な店主が料理を一つひとつ説明してくれるという声。2026年にはサービスへの不満も: 混んだ夜にそばを30分待った、接客が雑だったという声。月曜・火曜休み。',
  });
}

save();
