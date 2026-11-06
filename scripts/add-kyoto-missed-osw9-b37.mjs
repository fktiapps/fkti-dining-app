// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 37.
//   + れすとらん 西島 Restaurant Nishijima (Kyoto-style French at a counter near Kiyamachi-Nijo; about 25 years)   [core]
//   + 魚の匠 あさきぬ Sakana no Takumi Asakinu (couple-run fish counter by Karasuma Oike; ¥1,200 lunch set)      [core]
//   + Saffron Saffron (yoshoku of hamburg steak, fries and pork ginger near Shijo Stn; queues at opening)       [notable]
//   + 接方来 京都駅ビル店 Seppou Rai (Kyoto-vegetable, yuba and fu izakaya in the Kyoto Station building)        [notable]
//   Same-name counts first (same brand or operator): 西島 1; あさきぬ 1; Saffron Saffron 1; 接方来 — 京都タワー店
//   and this 京都駅ビル店 (gurunavi lists both; no operator named in the sources), none in data: a small group, this
//   one drafted — FLAGGED in case the operator runs other brands.
//   Taken in queue order on 2026-11-06: core 26001263, 26004017; notable 26009105, 26003441. None is in
//   data/kyoto.json by name or address.
//   Service charges checked against Tabelog's Japanese original: none of the four has a section.
//   Pins: 西島's address has no lot number; あさきぬ GSI lot 27 m; Saffron 55 m; 接方来's lot is the whole Kyoto
//   Station building (215 m off), so 西島 and 接方来 are loc_precise false.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-37');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ れすとらん 西島
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001263/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:30'], ['17:00', '22:00']);
  put({
    id: 'kyoto_restaurant_nishijima', name: 'れすとらん 西島 (Restaurant Nishijima)', category: 'OMNI',
    lat: 35.013401, lng: 135.770247, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. French courses with sauces, a curry gratin and breaded fish; allergies should be stated when booking (Tabelog; 2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: French courses with seafood, fish and wagyu (2025–26 reviews).',
    hours_raw: '11:30–14:30 (last order 13:00) and 17:00–22:00 (last order 20:00); closed Monday (Tabelog). Bookings taken; mention allergies when booking (Tabelog). Lunch is cash only; cards at dinner (Tabelog). Children under 3 at lunch only (Tabelog). English menu (Tabelog). 16 counter seats; private hire up to 20; a smoking space inside; wheelchair accessible; free Wi-Fi (Tabelog). Cross Sanjo-Ohashi and walk north up Kiyamachi to its end, at Nijo; 5 min from Kyoto Shiyakusho-mae Stn (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi at Nijo — 5 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Kyoto-style French marrying bouillon and kombu dashi (Tabelog): courses of cold and hot appetizers — sea urchin with potato or carrot jelly, salmon and shrimp salad, scallop mousse — the house mini curry gratin with kinmedai or amadai in seafood dashi, fish such as sea bass, soup, wagyu steak (ponzu and miso sauces on one 2019 plate), dessert and coffee; a ¥6,600 course (October 2026) (Tabelog; 2024–26 reviews)',
    website: null, gmaps: gm('れすとらん 西島 京都'), menu_url: TB + 'dtlmenu/',
    notes: "[Kyoto-style French · Kiyamachi-Nijo] A calm counter restaurant of about 25 years, where French courses meet Kyoto vegetables and kombu dashi: a parade of small appetizers, the much-loved mini curry gratin with kinmedai, then wagyu steak. Courses from about ¥6,600; lunch cash only. Closed Monday.",
    chef_bio: { chef_name: null, roles: ['Kitchen staff (unnamed)'], origin: null,
      background: 'Per Tabelog\'s shop text: celebrating 25 years in July (year not stated).',
      philosophy: 'Authentic French cooking with a Kyoto twist and gentle flavours (Tabelog).',
      specialty: 'Mini curry gratin of kinmedai; wagyu steak.',
      anecdotes: [
        { text: 'A January 2025 diner liked that cold and hot appetizers come one after another before the steak, as in classic French dining.', source: R + 'B500668670/' },
        { text: 'An October 2026 party insisted on the mini curry gratin; guests aged 80 and 90 managed the tender steak easily.', source: R + 'B537958720/' },
        { text: 'For a mother\'s 60th birthday in March 2024, the staff prepared a dessert plate.', source: R + 'B525436722/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): れすとらん 西島、フレンチ・創作料理・日本料理、中京区二条通り木屋町 西村ビル 1F、京都市役所前駅から徒歩5分、11:30〜14:30・17:00〜22:00、月曜休み、ランチは現金のみ、3歳未満はランチのみ、カウンター16席、店内に喫煙スペース、車椅子可、Wi-Fi、英語メニュー、7月で25周年、京野菜と和牛の京風フレンチ、ブイヨンと昆布出汁、甘鯛や金目鯛の魚介出汁のカレーグラタン。口コミ (2024年3月〜2026年10月、英語): 冷前菜と温前菜が続くコース、雲丹とじゃがいも、サーモンと海老のサラダ、ほたてのムース、金目鯛のカレーグラタン、すずき、牛肉のソテー、6,600円のコース、誕生日のデザートプレート。',
      confidence: 'medium', sources: [TB, R + 'B475073611/', R + 'B488396797/', R + 'B490916318/', R + 'B500668670/', R + 'B504292264/', R + 'B525436722/', R + 'B537958720/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); counter seating.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区二条通り木屋町 西村ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.013401, 135.770247); the address has no lot number, so no GSI lot match — loc_precise false; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537958720/'],
    price_note: 'No menu read; the course price is from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Course with mini curry gratin and wagyu steak', '¥6,600', 'Courses', 'ask', 'no', 'October 2026 review.', 'course'),
    ] }, {
    cuisine: 'ブイヨンと昆布出汁を合わせた京風フレンチ (食べログ): 冷前菜と温前菜が続くコース (雲丹とじゃがいもやにんじんのジュレ、サーモンと海老のサラダ、ほたてのムース)、名物の金目鯛や甘鯛の魚介出汁のミニカレーグラタン、すずきなどの魚、スープ、和牛のステーキ (2019年はポン酢と味噌のソース)、デザートとコーヒー。6,600円のコース (2026年10月) (食べログ、2024〜26年の口コミ)',
    neighborhood: '二条の木屋町。京都市役所前駅から徒歩5分',
    gf_detail: '要確認。ソースのあるフランス料理のコース、カレーグラタン、パン粉焼きの魚。アレルギーは予約時に伝える (食べログ、2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚介、魚、和牛のフランス料理のコース (2025〜26年の口コミ)。',
    notes: '[京風フレンチ・木屋町二条] 25年ほど続く落ち着いたカウンターの店。京野菜と昆布出汁を合わせたフランス料理のコースで、小さな前菜が次々に、名物の金目鯛のミニカレーグラタン、そして和牛のステーキ。コースは6,600円ほどから。ランチは現金のみ。月曜休み。',
  });
}

// ================================================================ 魚の匠 あさきぬ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26004017/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_sakana_no_takumi_asakinu', name: '魚の匠 あさきぬ (Sakana no Takumi Asakinu)', category: 'OMNI',
    lat: 35.010234, lng: 135.758922, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi with tamari or dashi soy sauce, tempura, obanzai in dashi (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish restaurant (Tabelog).',
    hours_raw: 'Tabelog gives no hours. Lunch from 11:30, often sold out or queued by 12:30 — no lunch bookings; dinner by reservation (Tabelog; 2025–26 reviews). Cash only (Tabelog). 12 seats around a U-shaped counter, with dividers; non-smoking; children welcome (Tabelog; 2026 reviews). Tucked behind a building just below Oike; 1 min from Karasuma Oike Stn exit 4-1 (Tabelog; March 2026 review).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Just south of Oike — 1 min from Karasuma Oike Stn',
    cuisine: 'Fish counter: at lunch three choices — the Asakinu gozen of sashimi (sea bream, tuna, hamachi), tempura, two obanzai, dashimaki, cold tofu, salad, pickles, rice and miso soup, ¥1,200 (March and July 2026); a seafood bowl ¥1,300; a shirasu bowl ¥1,000 (April 2026); sashimi served with tamari and dashi soy sauces; seasonal fish dishes and sake at dinner (2025–26 reviews)',
    website: null, gmaps: gm('魚の匠 あさきぬ'), menu_url: null,
    notes: "[Fish lunch & dinner · Karasuma Oike] A small, quiet counter run by a couple, known for its ¥1,200 Asakinu lunch tray of fresh sashimi, tempura and obanzai — come at 11:30, it sells out. Dinner of seasonal fish and sake by reservation. Cash only.",
    chef_bio: { chef_name: null, roles: ['Owner couple (unnamed)'], origin: null,
      background: 'A March 2026 diner describes a small place run by a couple, with only counter seats.',
      philosophy: null, specialty: 'Sashimi; the Asakinu lunch gozen.',
      anecdotes: [
        { text: 'A June 2026 regular found the dim room and lingering counter dividers made everyone eat in silence, and wished the dividers gone.', source: R + 'B489008465/' },
        { text: 'Arriving at 12:30 in January 2026, a diner got the last Asakinu gozen; the next customer was turned away.', source: R + 'B521898955/' },
        { text: 'A June 2026 dinner guest felt the owner\'s dedication in every fish dish.', source: R + 'B530625249/' },
      ],
      japanese_sources_summary: '食べログ: 魚の匠 あさきぬ、魚介料理、中京区両替町通御池下ル龍池町424-1 キョウトホーム御池ビル 1F、烏丸御池駅4-1番出口から徒歩1分、営業時間の記載なし、昼は予約不可、12席 (カウンターのみ)、禁煙、カード・電子マネー・QR 不可、子供可。口コミ (2025年10月〜2026年7月、英語): 夫婦で営む小さな店、コの字のカウンター、ランチはあさきぬ御膳 (刺身、天ぷら、おばんざい2品、だし巻き、冷奴、サラダ、漬物、ご飯、味噌汁) 1,200円、海鮮丼1,300円、しらす丼1,000円、たまり醤油と出汁醤油、11:30開店で売り切れや行列、照明が暗く仕切りが残るという声、夜の魚料理と日本酒。',
      confidence: 'medium', sources: [TB, R + 'B489008465/', R + 'B507808442/', R + 'B515856563/', R + 'B520444875/', R + 'B521898955/', R + 'B523738986/', R + 'B524043460/', R + 'B524723400/', R + 'B527065831/', R + 'B530625249/'] },
    cultural_comfort: { level: 'japanese', note: 'Small counter; lunch is three set choices; cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区両替町通御池下ル龍池町424-1 キョウトホーム御池ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.010234, 135.758922); cross-checked: GSI 京都府京都市中京区龍池町424番地 (lot) 27m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524043460/', R + 'B527065831/'],
    price_note: 'No menu read; lunch prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Asakinu gozen (sashimi, tempura, obanzai, rice, miso soup)', '¥1,200', 'Lunch', 'ask', 'no', 'March and July 2026 reviews.', 'asakinu_gozen'),
      it('', '', 'Seafood rice bowl', '¥1,300', 'Lunch', 'ask', 'no', 'March and April 2026 reviews.', 'kaisendon'),
      it('', '', 'Shirasu rice bowl', '¥1,000', 'Lunch', 'ask', 'no', 'April 2026 review.', 'shirasu_don'),
    ] }, {
    cuisine: '魚のカウンター: 昼は3種から。あさきぬ御膳は刺身 (鯛、まぐろ、はまち)、天ぷら、おばんざい2品、だし巻き、冷奴、サラダ、漬物、ご飯、味噌汁で1,200円 (2026年3月、7月)、海鮮丼1,300円、しらす丼1,000円 (2026年4月)。刺身はたまり醤油と出汁醤油で。夜は季節の魚料理と日本酒 (2025〜26年の口コミ)',
    neighborhood: '御池のすぐ南。烏丸御池駅から徒歩1分',
    gf_detail: '要確認。たまりや出汁醤油の刺身、天ぷら、出汁のおばんざい (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚料理の店 (食べログ)。',
    notes: '[魚の昼と夜・烏丸御池] 夫婦で営む小さく静かなカウンター。新鮮な刺身、天ぷら、おばんざいの1,200円の「あさきぬ御膳」が名物で、11時半に来ないと売り切れる。夜は予約で季節の魚と日本酒。現金のみ。',
  });
}

// ================================================================ Saffron Saffron
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26009105/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:30', '21:00']);
  put({
    id: 'kyoto_saffron_saffron', name: 'Saffron Saffron', category: 'OMNI',
    lat: 35.001262, lng: 135.761158, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: breaded fries, croquettes and cutlets alongside hamburg steak and ginger pork with sauces (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: hamburg steak, pork, shrimp and oysters; pork miso soup (2025–26 reviews).',
    hours_raw: '11:30–15:00 (last order 14:00) and 17:30–21:00 (last order 20:30); closed Tuesday; see the shop\'s site for closures (Tabelog). Bookings taken, but queues of six or seven groups form before the 11:30 opening (Tabelog; 2025–26 reviews). Cash only (Tabelog). Small children may be refused (Tabelog). 41 seats: 10 at the counter downstairs, tables and tatami upstairs; non-smoking (Tabelog). On a street corner south of Shijo; 2 min from Shijo Stn exit 5 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'South of Shijo-Karasuma — 2 min from Shijo Stn',
    cuisine: 'Generous yoshoku sets with rice, salad, small sides and pork miso soup or a seasonal soup (chilled pear in October 2026): hamburg steak with a mini cream croquette, the DX plate of special hamburg, sweet-shrimp cream croquette and fried shrimp, thick ginger pork (chuck-eye pork ginger and fried shrimp ¥1,500, October 2026), pork cutlet, mentaiko roll, fried fish, oyster fry, shrimp and avocado gratin; most sets under ¥2,000 (2025–26 reviews)',
    website: null, gmaps: gm('Saffron Saffron 京都'), menu_url: TB + 'dtlmenu/',
    notes: "[Yoshoku · south of Shijo-Karasuma] A busy neighbourhood Western-food house with a counter downstairs and tatami upstairs, known for huge sets — hamburg steak, shrimp fry, cream croquettes, heaped ginger pork — with excellent rice and pork miso soup, mostly under ¥2,000. Queue before 11:30; cash only; closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: a long-popular yoshoku restaurant near Shijo-Karasuma that fills at opening.',
      philosophy: null, specialty: 'Hamburg steak; cream croquettes; ginger pork.',
      anecdotes: [
        { text: 'An October 2026 diner counted six people waiting by the 11:30 opening and a full house, upstairs too, by 11:45.', source: R + 'B537384295/' },
        { text: 'Arriving just before last order in October 2026, a diner was comforted by very kind staff.', source: R + 'B537140006/' },
        { text: 'One October 2026 visitor reckoned a set at 1,384 kcal — "enough for two servings" — and suggested bringing a bento box.', source: R + 'B538292846/' },
      ],
      japanese_sources_summary: '食べログ: Saffron Saffron、洋食・ハンバーグ、下京区東洞院通仏光寺東南角高橋町605、四条駅5番出口から徒歩2分、11:30〜15:00・17:30〜21:00、火曜休み (店のサイトで確認)、予約可、カード・電子マネー・QR 不可、乳幼児は断る場合あり、41席 (1階カウンター10、2階テーブル17・座敷14)、禁煙。口コミ (2025年10月〜2026年11月、英語): 開店前の行列、ハンバーグとミニクリームコロッケ、DX セット (特製ハンバーグ、甘えびクリームコロッケ、海老フライ)、厚切りの生姜焼き、チャックアイロールの生姜焼きと海老フライ1,500円、豚カツ、明太子巻き、魚フライ、カキフライ、豚汁か季節のスープ (梨の冷製スープ)、ご飯がおいしい、量が多い。',
      confidence: 'medium', sources: [TB, R + 'B515989775/', R + 'B535751813/', R + 'B536138288/', R + 'B536979998/', R + 'B537140006/', R + 'B537205177/', R + 'B537384295/', R + 'B537412612/', R + 'B537579368/', R + 'B538292846/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Busy set-meal diner; cash only; small children may be refused (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区東洞院通仏光寺東南角高橋町605',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.001262, 135.761158); cross-checked: GSI 京都府京都市下京区高橋町605番地 (lot) 55m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537384295/'],
    price_note: 'No menu read; one price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Chuck-eye pork ginger and fried shrimp set', '¥1,500', 'Sets', 'no', 'no', 'October 2026 review.', 'shogayaki_ebifry'),
      it('', '', 'DX plate: special hamburg, sweet-shrimp cream croquette, fried shrimp', '', 'Sets', 'no', 'no', 'October 2026 review.', 'dx_plate'),
    ] }, {
    cuisine: 'ご飯、サラダ、小鉢、豚汁か季節のスープ (2026年10月は梨の冷製スープ) が付くボリュームのある洋食の定食: ハンバーグとミニクリームコロッケ、特製ハンバーグ・甘えびクリームコロッケ・海老フライの DX プレート、厚切りの生姜焼き (肩ロースの生姜焼きと海老フライ1,500円、2026年10月)、豚カツ、明太子巻き、魚フライ、カキフライ、海老とアボカドのグラタン。ほとんどが2千円以下 (2025〜26年の口コミ)',
    neighborhood: '四条烏丸の南。四条駅から徒歩2分',
    gf_detail: 'グルテンフリー不可。パン粉のフライ、コロッケ、カツと、ソースのハンバーグや生姜焼き (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ハンバーグ、豚肉、海老、カキ、豚汁 (2025〜26年の口コミ)。',
    notes: '[洋食・四条烏丸の南] 1階はカウンター、2階はテーブルと座敷の賑やかな町の洋食屋。ハンバーグ、海老フライ、クリームコロッケ、山盛りの生姜焼きなどの大盛りの定食に、おいしいご飯と豚汁。ほとんど2千円以下。11時半前から並ぶ。現金のみ。火曜休み。',
  });
}

// ================================================================ 接方来 京都駅ビル店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26003441/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://seppourai-kyotoeki.com/';
  const H = day(['11:00', '22:00']);
  put({
    id: 'kyoto_seppourai_kyoto_station', name: '接方来 京都駅ビル店 (Seppou Rai Kyoto Ekibiru)', category: 'OMNI',
    lat: 34.986005, lng: 135.760530, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Fresh fu (wheat gluten) appears in many dishes, plus tempura and soy-based dashi; vegetable and tofu dishes also served (official site; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Kyoto vegetables, yuba and tofu lead, but dashi, duck and fish are used (official site; 2026 reviews).',
    hours_raw: '11:00–22:00 (last order 21:00), daily (Tabelog). Bookings online — reservations recommended at lunch; lunch sets without a fixed course; an appetizer system at night; ordering by terminal after the first round (Tabelog; 2026 reviews). Cards, IC cards, PayPay, Alipay, WeChat Pay and more (Tabelog). 99 seats: counter, semi-private tables for 2–6, a sunken-kotatsu room for up to 18; non-smoking (Tabelog; official site). On the 2nd floor of the Kyoto Theatre side of the Kyoto Station building; 1 min from JR Kyoto Stn (Tabelog; October 2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kyoto Station building (Kyoto Theatre side), 2F',
    cuisine: 'Kyoto-vegetable cooking with yuba and fresh fu (official site): seasonal basket salad ¥1,210, steamed vegetable platter ¥1,650, tempura platter ¥968, basket of obanzai ¥1,595, yuba-shiso-cheese fritters ¥660; the monthly eight-dish Kyoto-vegetable course ¥4,730; house cocktails such as a yogurt-sake "iki yoyo" ¥715 (official site) · lunch sets such as the "Higashiyama" wappa bento ¥1,848 (October 2026) and "Ohara"; matsutake kamameshi, matsutake and hamo dobin-mushi, yuba dengaku, oboro tofu, fu pizza and fu ice cream, kushikatsu (2026 reviews)',
    website: SITE, gmaps: gm('接方来 京都駅ビル店'), menu_url: SITE,
    notes: "[Kyoto vegetables & yuba · Kyoto Station] A machiya-style izakaya inside the station building, handy between trains: basket salads and obanzai of Kyoto vegetables, yuba, fresh fu and seasonal kamameshi, with Kyoto sake. Lunch sets about ¥1,800; the dinner course ¥4,730. Open daily 11:00–22:00; book at lunch.",
    chef_bio: { chef_name: null, roles: ['Operator unnamed in the sources'], origin: null,
      background: 'One of two 接方来 shops, with 京都タワー店 (gurunavi). A Google review quoted on the official site remarks that it does not seem to be an independent shop.',
      philosophy: 'The true taste of seasonal Kyoto vegetables, with yuba and fresh fu (official site).',
      specialty: 'Kyoto-vegetable dishes; yuba; fresh fu.',
      anecdotes: [
        { text: 'An October 2026 traveller changing from the Shinkansen to Kintetsu booked online, expected a tourist trap, and was pleasantly surprised.', source: R + 'B537037638/' },
        { text: 'A September 2026 diner found the flavours a little strong and the room full by 20:00.', source: R + 'B536398229/' },
        { text: 'An October 2026 visitor from Tokyo found the shop hard to locate before realising it was inside the Kyoto Theatre building.', source: R + 'B537447603/' },
      ],
      japanese_sources_summary: '公式サイト: 京やさい料理 接方来 京都駅ビル店、京都駅徒歩1分、旬の京野菜と湯葉・生麩、季節のかご盛りサラダ1,210円、季節の蒸し焼盛り合せ1,650円、季節の天ぷら盛り合せ968円、季節のかご盛りおばんざい1,595円、湯葉しそチーズ揚げ660円、いき"よーよー"715円、くずし京野菜料理コース4,730円 (全8品)、京町家風の店内、カウンター、半個室、18名までの掘りごたつ席。食べログ (店舗会員): 居酒屋・野菜料理・豆腐料理、下京区烏丸通塩小路下ル東塩小路町901 京都駅ビル 2F、11:00〜22:00 (L.O. 21:00)、無休、99席、禁煙、カード・電子マネー・QR 可。ぐるなび: 京都タワー店もある。口コミ (2026年9〜10月、英語): Kyoto Theater のビル2階、ランチの「Higashiyama」わっぱ弁当1,848円、「Ohara」、松茸の釜飯、松茸と鱧の土瓶蒸し、湯葉田楽、おぼろ豆腐、麩のピザ、串カツ、端末での注文、お通し、味が濃いという声。',
      confidence: 'medium', sources: [TB, SITE, 'https://gurunavi.com/ja/k844404/rst', R + 'B536398229/', R + 'B536968475/', R + 'B537037638/', R + 'B537144827/', R + 'B537447603/', R + 'B537694819/', R + 'B537838830/', R + 'B537876211/', R + 'B538026788/', R + 'B538286720/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ordering terminals; online booking.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区烏丸通塩小路下ル東塩小路町901 京都駅ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.986005, 135.760530); GSI 京都府京都市下京区東塩小路町901番地 is the whole station building's lot (215m off), so loc_precise false; 29.7 m from kyoto_tsukumo_udon_shiokoji; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [SITE],
    price_note: 'Prices from the official site; lunch set price from an October 2026 review.', last_checked: TODAY, items: [
      it('くずし京野菜料理コース', '', 'Monthly Kyoto-vegetable course (8 dishes)', '¥4,730', 'Courses', 'ask', 'ask', 'Official site.', 'kyoyasai_course'),
      it('季節のかご盛りおばんざい', '', 'Basket of seasonal obanzai', '¥1,595', 'Dishes', 'ask', 'ask', 'Official site.', 'obanzai_basket'),
      it('湯葉しそチーズ揚げ', '', 'Yuba, shiso and cheese fritters', '¥660', 'Dishes', 'no', 'no', 'Official site.', 'yuba_cheese'),
      it('', '', 'Higashiyama wappa bento (lunch)', '¥1,848', 'Lunch', 'ask', 'no', 'October 2026 review.', 'wappa_higashiyama'),
    ] }, {
    cuisine: '湯葉と生麩を合わせた京野菜の料理 (公式サイト): 季節のかご盛りサラダ1,210円、季節の蒸し焼盛り合せ1,650円、季節の天ぷら盛り合せ968円、季節のかご盛りおばんざい1,595円、湯葉しそチーズ揚げ660円、月替わりのくずし京野菜料理コース (全8品) 4,730円、ヨーグルト酒のいき"よーよー"715円 (公式サイト)・ランチの「Higashiyama」わっぱ弁当1,848円 (2026年10月) や「Ohara」、松茸の釜飯、松茸と鱧の土瓶蒸し、湯葉田楽、おぼろ豆腐、麩のピザと麩のアイス、串カツ (2026年の口コミ)',
    neighborhood: '京都駅ビル (Kyoto Theater 側) 2階',
    gf_detail: '要確認。生麩 (小麦グルテン) を使う料理が多く、天ぷらや醤油の出汁も。野菜や豆腐の料理もある (公式サイト、2026年の口コミ)。',
    vegan_detail: '要確認。京野菜、湯葉、豆腐が中心だが、出汁、鴨、魚も使う (公式サイト、2026年の口コミ)。',
    notes: '[京野菜と湯葉・京都駅] 駅ビルの中の京町家風の居酒屋で、乗り換えの合間にも。京野菜のかご盛りサラダやおばんざい、湯葉、生麩、季節の釜飯を京都の酒と。ランチの定食は1,800円ほど、夜のコースは4,730円。毎日11〜22時。ランチは予約を。',
  });
}

save();
