// Osaka sweep (2-mile circle around Dotonbori), batch 152 — mom / small-shop phase (all OMNI).
//   + スタイリッシュグリル Tyu (7-seat hamburg steak lunch with egg rice and free soup refills; Hakurocho)
//   + no 29 (butcher with a yakiniku kaiseki counter at night and steak lunches; Shinmachi)
//   + ピッツェリア ダ ティグレ (one-person Neapolitan pizza counter, ¥1,000 Margherita; Shinmachi) — mom
//   + 和レー屋 南船場ゴヤクラ (one-person dashi-based Japanese curry, lunch only; Minami-Senba) — mom
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 152);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ スタイリッシュグリル Tyu
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27013318/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '15:30']);
  put({
    id: 'osaka_stylish_grill_tyu_hakurocho', name: 'スタイリッシュグリル Tyu (Stylish Grill Tyu)', category: 'OMNI',
    lat: 34.678362, lng: 135.50233, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: hamburg steak usually has breadcrumbs; demi-glace and soy-based sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef hamburg steak; beef-tendon soup; egg rice.',
    hours_raw: 'Mon, Tue, Thu–Sun and public holidays 11:00–15:30 (last order 15:00); closed Wed (Tabelog). Lines at weekday lunch; before opening or after 14:00 is easiest (September 2026). PayPay only — no cards or e-money (Tabelog).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Hakurocho 3-3-13, in the Senba textile district — 8 min from Shinsaibashi Stn; 7 min from Honmachi',
    cuisine: 'Hamburg steak lunch on a hot iron plate · hamburg steak set ¥1,350 with Japanese or Western (demi-glace) sauce · wasabi grated-daikon, shiso grated-daikon, cheese, bacon, mushroom, homemade tomato sauce (¥1,300) · size up +70 g · egg rice with Ran-oh eggs from Oita +¥100 · hamburg and pork set ¥2,000 · free refills of rice and a ginger and beef-tendon soup · some chicken dishes and limited specials · 7 seats',
    website: null, gmaps: gm('スタイリッシュグリル Tyu'), menu_url: null,
    notes: "[Hamburg steak · a seven-seat hamburg steak lunch, Hakurocho] A tiny lunch-only grill in the Senba textile district with a line most weekdays. The hamburg steak is coarse-ground, seared crisp on a sizzling iron plate and juicy inside, roughly 150–200 g; top it with wasabi grated daikon (one repeat diner's usual order), cheese, bacon or a tangy homemade tomato sauce, in Japanese or demi-glace style. Pay ¥100 more for egg rice made with rich Ran-oh eggs. Rice and a ginger beef-tendon soup are refillable. Friendly staff. Arrive before opening or after 2 pm. PayPay only. Closed Wednesdays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Hamburg steak lunch spot (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Hamburg steak with egg rice.',
      anecdotes: [
        { text: '"This hamburg steak has a coarsely ground texture that gives it a satisfying meatiness, crumbling delightfully in my mouth." — August 2026, bacon hamburg steak +70 g with egg rice.', source: R + 'B534274192/' },
        { text: '"The wasabi adds a nice touch, making it refreshing and enhancing the flavors of the meat and fat." — September 2026, Wasabi Oroshi Hamburger Steak with Egg Rice.', source: R + 'B518122850/' },
      ],
      japanese_sources_summary: '食べログ: スタイリッシュグリル Tyu、大阪市中央区博労町3-3-13、心斎橋駅から徒歩8分、月・火・木〜日・祝 11:00〜15:30 (L.O. 15:00)、水曜休み、PayPay のみ (カード・電子マネー不可)、7席。口コミ(2025年1月〜2026年9月): 船場の繊維街、平日の昼は行列、粗びきで鉄板で焼き目をつけたハンバーグ、和風か洋風 (デミグラス) のソース、わさびと大根おろし、shiso のおろし、チーズ、ベーコン、きのこ、自家製トマトソース1,300円、ハンバーグのセット1,350円、+70g、大分の Ran-oh の卵の卵かけご飯 +100円、ハンバーグと豚のセット2,000円、ご飯と生姜と牛すじのスープはおかわり自由、鶏の料理や期間限定も、気さくな店の人、開店前か14時以降がおすすめ。',
      confidence: 'medium', sources: [TB, R + 'B487814951/', R + 'B518122850/', R + 'B534274192/', R + 'B534661776/', R + 'B535500691/', R + 'B536013679/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order while waiting in line (June 2025).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区博労町3-3-13',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区博労町三丁目3番13号 (go) 9m; OSM スタイリッシュグリル Tyu node/6325432696 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535500691/', R + 'B536013679/'],
    price_note: 'Prices from September 2026 reviews, tax included.', last_checked: TODAY, items: [
      it('', '', 'Hamburg steak set', '¥1,350', 'Hamburg steak', 'no', 'no', 'September 2026.', 'hamburg'),
      it('', '', 'Homemade tomato sauce hamburg steak', '¥1,300', 'Hamburg steak', 'no', 'no', 'September 2026.', 'tomato'),
      it('', '', 'Wasabi grated-daikon hamburg steak', '', 'Hamburg steak', 'no', 'no', 'September 2026.', 'wasabi'),
      it('', '', 'Egg rice upgrade (Ran-oh eggs)', '+¥100', 'Sides', 'ask', 'no', 'September 2026.', 'tkg'),
      it('', '', 'Hamburg steak and pork set', '¥2,000', 'Sets', 'no', 'no', 'September 2026.', 'combo'),
    ] }, {
    cuisine: '鉄板のハンバーグのランチ・ハンバーグのセット1,350円、和風か洋風 (デミグラス) のソース・わさびと大根おろし、shiso のおろし、チーズ、ベーコン、きのこ、自家製トマトソース (1,300円)・+70gの増量・大分の Ran-oh の卵の卵かけご飯 +100円・ハンバーグと豚のセット2,000円・ご飯と生姜と牛すじのスープはおかわり自由・鶏の料理や限定メニューも・7席',
    neighborhood: '中央区博労町3-3-13、船場の繊維街。心斎橋駅から徒歩8分、本町から7分',
    gf_detail: 'グルテンフリーではありません。ハンバーグにはふつうパン粉、デミグラスや醤油のソース。',
    vegan_detail: 'ヴィーガンではありません。牛のハンバーグ、牛すじのスープ、卵かけご飯。',
    notes: '[ハンバーグ・博労町、7席のハンバーグのランチ] 船場の繊維街にある昼だけの小さなグリルで、平日はたいてい行列。粗びきのハンバーグは熱い鉄板でかりっと焼き目をつけ、中はジューシー、150〜200gほど。わさびと大根おろし (何度も頼む人も)、チーズ、ベーコン、酸味のある自家製トマトソースから選び、和風かデミグラスで。+100円で濃厚な Ran-oh の卵の卵かけご飯に。ご飯と生姜の牛すじスープはおかわり自由。気さくな店の人。開店前か14時以降が狙い目。PayPay のみ。水曜休み。',
  });
}

// ================================================================ no 29
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27126092/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_no_29_shinmachi', name: 'no 29', category: 'OMNI',
    lat: 34.676775, lng: 135.493994, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soy-based yakiniku sauces and sukiyaki; ponzu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a butcher and beef restaurant.',
    hours_raw: 'Meat counter 11:30–20:00; lunch 11:30–14:30 (last order 13:30); kappo course dinner by reservation only, two sittings 18:00–20:00 and 20:30–22:30; irregular closings (Tabelog). 10% service charge at dinner (Tabelog). Cards and PayPay accepted (Tabelog).',
    hours: ALL(day(['11:30', '14:30'], ['18:00', '22:30'])), hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi 1-31-6, behind a butcher\'s counter — 3–5 min from Nishi-Ohashi Stn',
    cuisine: 'Beef: a butcher with a yakiniku kaiseki counter · dinner course: appetizers and small plates, smoked yukke with ikura rice, grilled liver, sukiyaki, then a yakiniku round of strip loin, tongue, thigh, intestines and harami, with all-you-can-eat meat on some courses · lunch steak sets with salad, refillable rice and soup: harami 150 g ¥1,580, ichi-bo 150 g ¥1,980, lean top sirloin; extra sauces ¥150 (e.g. grated daikon ponzu) · 8 seats and a private room for 8',
    website: null, gmaps: gm('no 29'), menu_url: null,
    notes: "[Yakiniku · a butcher's back-room yakiniku kaiseki, Shinmachi] Walk past the meat counter of this butcher near Nishi-Ohashi to a heavy door and an eight-seat chef's table. Dinner is a reserved meat kaiseki: appetizers, smoked yukke spooned over ikura rice, grilled liver and sukiyaki, then yakiniku of strip loin, tongue and the much-praised harami, cooked and explained in front of you. Two sittings a night; 10% service. Lunch is a simpler way in: a thick, tender harami steak set (¥1,580) with refillable rice and soup, though one diner found lunch service inattentive and the extra sauces cost ¥150.",
    chef_bio: { chef_name: null, roles: [], origin: 'Osaka branch of a yakiniku business from Ehime (May 2024 review).', background: 'Butcher and yakiniku kaiseki counter (Tabelog; 2024–2026 reviews).', philosophy: null, specialty: 'Yakiniku kaiseki; harami.',
      anecdotes: [
        { text: '"As you head towards the back of the butcher shop, you\'ll find a heavy door leading to the chef\'s table." — August 2026.', source: R + 'B481026738/' },
        { text: '"Every single meat dish was delicious, and the staff provided thorough explanations, making it easy to understand. It was exciting to see the cooking done right in front of me." — September 2026, dinner.', source: R + 'B535767774/' },
      ],
      japanese_sources_summary: '食べログ: no 29、大阪市西区新町1-31-6、西大橋駅から徒歩5分、精肉販売11:30〜20:00、昼11:30〜14:30 (L.O. 13:30)、夜は完全予約制の割烹コース (1部18:00〜20:00、2部20:30〜22:30)、不定休、夜はサービス料10%、カード・PayPay 可、8席、8名の個室。口コミ(2024年3月〜2026年10月): 精肉店の奥の重い扉の先のカウンター、焼肉の会席、前菜、燻製の yukke と ikura ご飯、レバー焼き、sukiyaki、焼肉 (ロース、タン、もも、腸、ハラミ)、コースによっては肉の食べ放題、ていねいな説明、昼は ハラミ150g(1,580円)、Ichi-bo 150g 1,980円、赤身のステーキ、サラダつき、ご飯とスープはおかわり自由、追加のたれ150円 (おろしポン酢など)、昼の接客が気になったという声。',
      confidence: 'medium', sources: [TB, R + 'B481026738/', R + 'B534278925/', R + 'B535117541/', R + 'B535767774/', R + 'B536556070/', R + 'B537455207/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Dishes explained at the counter (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町1-31-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目31番6号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535117541/', R + 'B536556070/'],
    price_note: 'Lunch prices from September 2026 reviews; dinner JPY 10,000–19,999 (Tabelog, reviews).', last_checked: TODAY, items: [
      it('ハラミ150g', '', 'Harami steak lunch, 150 g', '¥1,580', 'Lunch', 'ask', 'no', 'September 2026.', 'harami'),
      it('', '', 'Ichi-bo steak lunch, 150 g', '¥1,980', 'Lunch', 'ask', 'no', 'September 2026.', 'ichibo'),
      it('', '', 'Extra sauce (e.g. grated daikon ponzu)', '¥150', 'Lunch', 'no', 'no', 'September 2026.', 'sauce'),
      it('', '', 'Yakiniku kaiseki course', '', 'Dinner', 'no', 'no', 'August–September 2026; reservation only.', 'kaiseki'),
    ] }, {
    cuisine: '牛肉: 焼肉の会席のカウンターがある精肉店・夜のコース: 前菜と小皿、燻製の yukke と ikura ご飯、レバー焼き、sukiyaki、そして焼肉 (ロース、タン、もも、腸、ハラミ)、コースによっては肉の食べ放題・昼はサラダつきでご飯とスープはおかわりできるステーキのセット: ハラミ150g 1,580円、Ichi-bo 150g 1,980円、赤身のステーキ。追加のたれ150円 (おろしポン酢など)・8席と8名の個室',
    neighborhood: '西区新町1-31-6、精肉店の奥。西大橋駅から徒歩3〜5分',
    gf_detail: 'グルテンフリーではありません。醤油の焼肉のたれと sukiyaki、ポン酢。',
    vegan_detail: 'ヴィーガンではありません。精肉店と牛肉の店。',
    notes: '[焼肉・新町、精肉店の奥の焼肉の会席] 西大橋近くの精肉店のカウンターを抜け、重い扉の先に8席のシェフズテーブル。夜は予約制の肉の会席で、前菜、ikura ご飯にのせる燻製の yukke、レバー焼き、sukiyaki、それからロース、タン、評判のハラミの焼肉を、目の前で焼きながら説明してくれる。夜は2部制、サービス料10%。昼はもっと気軽で、厚くやわらかいハラミのステーキのセット (1,580円)、ご飯とスープはおかわりできる。ただし昼の接客が気になったという声もあり、追加のたれは150円。',
  });
}

// ================================================================ ピッツェリア ダ ティグレ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27079870/'; const R = TB + 'dtlrvwlst/';
  const LD = day(['11:30', '14:30'], ['17:00', '21:00']);
  put({
    id: 'osaka_pizzeria_da_tigre_shinmachi', name: 'ピッツェリア ダ ティグレ (Pizzeria da Tigre)', category: 'OMNI',
    lat: 34.677284, lng: 135.494307, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a pizza-only menu; wheat dough.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cheese on most pizzas; the Marinara is the usual cheese-free Neapolitan pizza — ask.',
    hours_raw: 'Wed, Fri, Sat, Sun 11:30–14:30 and 17:00–21:00; Thu 11:30–14:30; closed Mon–Tue (Tabelog). No reservations; ticket machine; cash only (2026 reviews; Tabelog). Lines at weekend lunch (April 2026). Takeout too (September 2026).',
    hours: { 2: LD, 3: day(['11:30', '14:30']), 4: LD, 5: LD, 6: LD }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shinmachi 1-18-13 — 3 min from Nishi-Ohashi Stn exit 2; 5 min from Yotsubashi',
    cuisine: 'Neapolitan pizza only, wood-fired · Margherita ¥1,000 · Marinara · Ricotta e Cipolla ¥1,500 · served uncut, with a note on how to eat it · Coke ¥300 · ticket machine · 13 counter seats facing the oven',
    website: null, gmaps: gm('ピッツェリア ダ ティグレ'), menu_url: null,
    notes: "[Pizza · a one-person Neapolitan pizza counter, Shinmachi] A clean, thirteen-seat counter near Nishi-Ohashi where one pizzaiolo stretches, tops and fires every pizza in a blazing wood oven in front of you, alongside a steady run of takeout orders. Buy a ticket from the machine; the Margherita is ¥1,000 and arrives in a few minutes, toasted outside and chewy within, uncut so you slice it yourself. Try the Marinara or the Ricotta e Cipolla too. No reservations and cash only; go right at opening, as lunch lines form fast. Closed Mondays and Tuesdays.",
    chef_bio: { chef_name: null, roles: ['owner'], origin: null, background: 'Neapolitan pizzeria run by one person (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Neapolitan pizza.',
      anecdotes: [
        { text: '"The counter seating allows you to closely watch the skilled pizzaiolo at work, which is a real treat. The way… the dough [is stretched]… is mesmerizing." — September 2026, Margherita ¥1,000.', source: R + 'B475544401/' },
        { text: '"The paper bag containing my fork and knife had notes on why the pizza isn\'t served pre-sliced and tips on the best way to enjoy it…" — September 2026.', source: R + 'B535372633/' },
      ],
      japanese_sources_summary: '食べログ: ピッツェリア ダ ティグレ、大阪市西区新町1-18-13、西大橋駅2番出口から徒歩3分、四ツ橋駅から5分、水・金・土・日 11:30〜14:30・17:00〜21:00、木 11:30〜14:30、月・火休み、カード・電子マネー・QR不可、カウンター13席。口コミ(2026年4〜10月): ナポリピッツァだけ、薪窯、食券制、予約不可、現金のみ、ひとりで切り盛り、目の前で生地をのばして焼く、数分で焼き上がる、マルゲリータ1,000円、マリナーラ、Ricotta e Cipolla 1,500円、切らずに出し食べ方のメモつき、コーラ300円、持ち帰りも多い、週末の昼は行列、開店直後が狙い目。',
      confidence: 'medium', sources: [TB, R + 'B475544401/', R + 'B535097456/', R + 'B535372633/', R + 'B535467607/', R + 'B537873008/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; watch the pizzas being made (2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市西区新町1-18-13',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目18番13号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B475544401/', R + 'B535097456/'],
    price_note: 'Prices from April–September 2026 reviews, tax included.', last_checked: TODAY, items: [
      it('', '', 'Margherita', '¥1,000', 'Pizza', 'no', 'no', 'September 2026.', 'margherita'),
      it('', '', 'Ricotta e Cipolla', '¥1,500', 'Pizza', 'no', 'no', 'April 2026.', 'ricotta'),
      it('', '', 'Marinara', '', 'Pizza', 'no', 'ask', 'September 2026.', 'marinara'),
      it('', '', 'Coke', '¥300', 'Drinks', 'ask', 'ask', 'September 2026.', 'coke'),
    ] }, {
    cuisine: '薪窯のナポリピッツァだけ・マルゲリータ1,000円・マリナーラ・Ricotta e Cipolla 1,500円・切らずに出し、食べ方のメモつき・コーラ300円・食券制・窯に向いたカウンター13席',
    neighborhood: '西区新町1-18-13。西大橋駅2番出口から徒歩3分、四ツ橋から5分',
    gf_detail: 'グルテンフリーではありません。ピッツァだけの店で小麦の生地。',
    vegan_detail: 'ヴィーガンではありません。ほとんどのピッツァにチーズ。マリナーラはふつうチーズなしなので確認を。',
    notes: '[ピッツァ・新町、ひとりで焼くナポリピッツァのカウンター] 西大橋近くの清潔な13席のカウンターで、ピッツァイオーロがひとりで生地をのばし、具をのせ、目の前の熱い薪窯で焼き上げる。持ち帰りの注文もひっきりなし。券売機で食券を買い、マルゲリータは1,000円、数分で焼き上がり、外は香ばしく中はもちもち、切らずに出てくるので自分で切って。マリナーラやRicotta e Cipolla も。予約不可で現金のみ、昼はすぐ行列になるので開店直後に。月・火曜休み。',
  });
}

// ================================================================ 和レー屋 南船場ゴヤクラ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27015562/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '15:00']); const WE = day(['12:00', '15:00']);
  put({
    id: 'osaka_goyakura_minamisenba', name: '和レー屋 南船場ゴヤクラ (Wareya Minamisemba Goyakura)', category: 'OMNI',
    lat: 34.677695, lng: 135.508939, cuisine_type: 'curry',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: miso and soy-based dashi curries; whether the sauces use flour is unknown — ask.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef, pork and chicken curries made with dashi.',
    hours_raw: 'Mon, Tue, Fri about 11:30–15:00; Sat, Sun and public holidays about 12:00–15:00; closed Wed–Thu (Tabelog). Wait for the owner to take your order (September 2026). Rice can take about 10 minutes at times (October 2026). Cash only (Tabelog). Smoking allowed (Tabelog).',
    hours: { 0: WD, 1: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 1-7-8, Dia Palace Junkeimachi 103, behind a heavy door — 6 min from Sakaisuji-Honmachi Stn exit 3',
    cuisine: 'Dashi-based Japanese curry ("wa-curry") · Special Beef Ware ¥1,500 · Beef & Pork Mara, a miso-flavored curry · Goyakura Keema (tomato) · Japanese Chicken Keema with daikon · super-spicy chicken keema · Beef & Spicy Chicken Keema ¥900 · off-menu combinations · four pickles incl. carrot, daikon and onion achar and fukujinzuke · 16 seats',
    website: null, gmaps: gm('和レー屋 南船場ゴヤクラ'), menu_url: null,
    notes: "[Curry · a one-person dashi curry shop, Minami-Senba] A calm, lunch-only curry counter behind a heavy door in Minami-Senba, where the owner cooks alone and calls the style \"Ware\": thick curries built on Japanese dashi, aromatic rather than hot. Try the Japanese Chicken Keema with daikon, the miso-rich Beef & Pork Mara, or the tomato Goyakura Keema, and ask for a combination even though it isn't on the menu; the super-spicy chicken keema is for heat seekers. Four pickles sit on the side. House rule: wait for your order to be taken. Cash only; smoking allowed. Closed Wednesdays and Thursdays.",
    chef_bio: { chef_name: null, roles: ['owner'], origin: null, background: 'Curry shop run by one person (Tabelog; 2026 reviews).', philosophy: 'Calls its own dashi-based curries "Ware" (September 2026 review).', specialty: 'Dashi-based Japanese curry.',
      anecdotes: [
        { text: '"The umami from the ingredients, combined with the dashi, elevates the flavor, creating a unique taste that doesn\'t quite fit into the categories of European or spice curry." — September 2026, Special Beef Ware ¥1,500.', source: R + 'B535337625/' },
        { text: '"True to its name, the moment I took a bite, the flavor of the dashi was incredible! It even had daikon radish in it…" — October 2026, Japanese Chicken Keema.', source: R + 'B537122497/' },
      ],
      japanese_sources_summary: '食べログ: 和レー屋 南船場ゴヤクラ、大阪市中央区南船場1-7-8 ダイアパレス順慶町 103、堺筋本町駅3番出口から徒歩6分、月・火・金 11:30〜15:00ごろ、土・日・祝 12:00〜15:00ごろ、水・木休み、カード・電子マネー・QR不可、喫煙可、16席 (カウンター8、4名テーブル2)。口コミ(2026年9〜10月): ひとりで営む店、重い扉、注文は店の人が聞きに来るまで待つ、だしの和風カレー「Ware」、Special Beef Ware 1,500円、味噌味の Beef & Pork Mara、トマトのゴヤクラキーマ、大根入りの和風チキンキーマ、激辛チキンキーマ、Beef & Spicy Chicken Keema 900円、メニューにない合いがけも、漬物4種 (にんじん・大根・玉ねぎのアチャール、fukujinzuke)、ご飯が炊けるまで10分ほど待つことも。',
      confidence: 'medium', sources: [TB, R + 'B535337625/', R + 'B535986720/', R + 'B536049891/', R + 'B537044646/', R + 'B537122497/', R + 'B538021163/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Wait to be asked for your order (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区南船場1-7-8 ダイアパレス順慶町 103',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場一丁目7番8号 (go) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535337625/', R + 'B537044646/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Special Beef Ware', '¥1,500', 'Curry', 'ask', 'no', 'September 2026.', 'beef_ware'),
      it('', '', 'Beef & Spicy Chicken Keema', '¥900', 'Curry', 'ask', 'no', 'October 2026.', 'beef_keema'),
      it('', '', 'Japanese Chicken Keema', '', 'Curry', 'ask', 'no', 'October 2026.', 'chicken_keema'),
      it('', '', 'Beef & Pork Mara (miso)', '', 'Curry', 'ask', 'no', 'September 2026.', 'mara'),
    ] }, {
    cuisine: 'だしの和風カレー・Special Beef Ware 1,500円・味噌味の Beef & Pork Mara・トマトのゴヤクラキーマ・大根入りの和風チキンキーマ・激辛のチキンキーマ・Beef & Spicy Chicken Keema 900円・メニューにない合いがけも・にんじん、大根、玉ねぎのアチャールと fukujinzuke など漬物4種・16席',
    neighborhood: '中央区南船場1-7-8 ダイアパレス順慶町 103、重い扉の奥。堺筋本町駅3番出口から徒歩6分',
    gf_detail: 'グルテンフリーではありません。味噌や醤油のだしのカレー、ルーに小麦粉を使うかは不明なので確認を。',
    vegan_detail: 'ヴィーガンではありません。だしを使った牛、豚、鶏のカレー。',
    notes: '[カレー・南船場、ひとりで営むだしのカレーの店] 南船場の重い扉の奥にある昼だけの落ち着いたカレー店で、店主がひとりで作り、その料理を「Ware」と呼ぶ: 和のだしで作る濃いカレーで、辛さより香り。大根入りの和風チキンキーマ、味噌の効いた Beef & Pork Mara、トマトのゴヤクラキーマを試し、メニューにない合いがけも頼んでみて。辛いのが好きなら激辛のチキンキーマを。漬物4種つき。店のルール: 注文は聞きに来るまで待つ。現金のみ、喫煙可。水・木曜休み。',
  });
}

save();
