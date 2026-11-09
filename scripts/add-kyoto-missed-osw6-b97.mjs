// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 97.
//   + cao cafe ishikawa (café-bar open to 1:00, weekday lunches and desserts, Sanjo-Shinmachi) — rest
//   - skip 26020876 ブラッスリー ヴァプール 三条新町 (same-concept branch of a brand in data)
//   + 京乃たまや (Kyoto izakaya and courses in a townhouse at Sanjo-Shinmachi) — rest
//   + 種嘉商店 京都最中 (monaka-shell maker’s shop with an eat-in counter, Kurumayacho-Nijo) — rest
//   + 馬鈴 (Buzz) (warabi-mochi and zenzai café on Gojozaka) — rest
//   Rest tier, nearest-first from `next rest 2000`. Every brand checked against queue-status.jsonl, the THAN brand list
//   (than.co.jp/brands, read 2026-11-08) and the 株式会社WILL ruling (26043489): no matches. VAPEURS: ビストロ ヴァプール 烏丸御池
//   (kyoto_bistrot_vapeurs_karasuma_oike) is in data; an August 2024 reviewer of the 三条新町 shop had "been to another branch".
//   Same-name counts (2026-11-08): one each among those drafted.
//   種嘉商店: a sweets shop with eat-in seating and a menu of ice-cream monaka, anmitsu and tea, so drafted as a café, not as
//   pure retail; takeaway is the larger share and is stated.
//   None of the drafted shops is in data/kyoto.json.
//   Charges (Tabelog, Japanese originals): 京乃たまや 「単品でのご注文のみ先付けをご提供致します。」 (an appetizer is served with
//   à la carte orders; no amount given); others none listed. No halal claims; no owner deaths; single-review remarks about
//   other diners left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-97');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26020876', 'same-concept branch of a brand in data: ブラッスリー ヴァプール 三条新町 is a sister French bistro of ビストロ ヴァプール 烏丸御池, already in kyoto.json as kyoto_bistrot_vapeurs_karasuma_oike (an August 2024 reviewer had "been to another branch") (https://tabelog.com/en/kyoto/A2601/A260202/26020876/).');

// ================================================================ cao cafe ishikawa
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26012800/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '14:30'], ['18:00', '01:00']); const WE = day(['12:00', '01:00']);
  put({
    id: 'kyoto_cao_cafe_ishikawa', name: 'カオカフェイシカワ (cao cafe ishikawa)', category: 'OMNI',
    lat: 35.008517, lng: 135.756152, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tarts, cheesecakes, pizza, hayashi omurice, fried dishes (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cheesecakes, crème brûlée, taco rice with meat, egg and cheese (2025–26 reviews).',
    hours_raw: 'Weekdays 11:30–14:30 and 18:00–01:00; weekends and holidays 12:00–01:00 (food last order midnight); closing days not fixed (Tabelog). Some reviewers found lunch only on weekends (2024–25) — check. Busy on weekend nights (August 2025). Smoking allowed inside (Tabelog; July 2025). Cards (JCB, AMEX, Diners), e-money and QR (Tabelog). 23 seats: a counter by the door, sofa tables at the back and a courtyard (February 2025, April 2026). Sanjo-dori west of Shinmachi, near Karasuma Oike (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sanjo-Shinmachi — Karasuma Oike',
    cuisine: 'Café-bar open to 1:00 · lunch sets with a drink: taco rice, hayashi omurice ¥1,000–1,200 (April 2025, February 2026), curry (July 2025) · desserts: matcha basque cheesecake, fresh cheesecake and seasonal tart ¥850, peach tart, crème brûlée (2025–26 reviews) · fruit cocktails, wine, fresh juices; pizza and fried tripe with spicy sauce at night (August and November 2026)',
    website: null, gmaps: gm('cao cafe ishikawa 京都'), menu_url: TB,
    notes: '[Café-bar · Sanjo-Shinmachi] A long, tunnel-like café-bar near Karasuma Oike with a counter, sofas and a courtyard, open until 1:00: taco rice and omurice lunch sets, seasonal tarts and cheesecakes, fruit cocktails and late snacks. Smoking allowed.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog and reviews: a café and bar on Sanjo-dori near Karasuma Oike, open from lunch until 1:00.',
      philosophy: null, specialty: 'Seasonal tarts; matcha basque cheesecake.',
      anecdotes: [
        { text: 'A February 2026 pair had taco rice — meat, egg and cheese under the vegetables — and hayashi omurice, each with a drink for ¥1,200.', source: R + 'B523024169/' },
        { text: 'An October 2026 visitor praised the staff for going out of the way to help celebrate birthdays and anniversaries.', source: R + 'B538154264/' },
      ],
      japanese_sources_summary: '食べログ: カフェ・バー、中京区三条通新町西入ル釜座町31、平日11:30〜14:30・18:00〜翌1:00、土日・祝日12:00〜翌1:00 (料理L.O.0:00)、不定休、喫煙可、カード・電子マネー・QR 可、23席。口コミ (2025年2月〜2026年11月、英語): 入口にカウンター、奥にソファ席と中庭、昼はタコライスやハヤシのオムライスのドリンク付きセット1,000〜1,200円、カレー、抹茶のバスクチーズケーキ、生チーズケーキと季節のタルト850円、桃のタルト、クレームブリュレ、フルーツのカクテル、ワイン、生ジュース、ピザ、ミノの唐揚げのピリ辛だれ、誕生日や記念日の対応、昼は週末のみとの声も。',
      confidence: 'medium', sources: [TB, R + 'B500996041/', R + 'B507027122/', R + 'B513320695/', R + 'B513997796/', R + 'B522451353/', R + 'B523024169/', R + 'B526003053/', R + 'B534109565/', R + 'B538154264/', R + 'B538775536/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Smoking is allowed inside. Check whether weekday lunch is on. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三条通新町西入ル釜座町31',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.008517, 135.756152); cross-checked: GSI 京都府京都市中京区釜座町31番地 (lot) 32m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B522451353/', R + 'B523024169/'],
    price_note: 'Prices from February 2026.', last_checked: TODAY, items: [
      it('', '', 'Taco rice lunch with a drink', '¥1,200', 'Lunch', 'ask', 'no', 'February 2026.', 'taco_rice'),
      it('', '', 'Hayashi omurice lunch with a drink', '¥1,200', 'Lunch', 'no', 'no', 'February 2026.', 'omurice'),
      it('', '', 'Seasonal tart', '¥850', 'Desserts', 'no', 'no', 'February 2026.', 'tart'),
      it('', '', 'Matcha basque cheesecake', '¥850', 'Desserts', 'ask', 'no', 'April 2026; price from November 2024.', 'matcha_basque'),
    ] }, {
    cuisine: '深夜1時まで開くカフェバー・ドリンク付きの昼のセット: タコライス、ハヤシのオムライス1,000〜1,200円 (2025年4月、2026年2月)、カレー (2025年7月)・デザート: 抹茶のバスクチーズケーキ、生チーズケーキと季節のタルト850円、桃のタルト、クレームブリュレ (2025〜2026年の口コミ)・フルーツのカクテル、ワイン、生ジュース、夜はピザやミノの唐揚げのピリ辛だれ (2026年8月・11月)',
    neighborhood: '三条新町。烏丸御池',
    gf_detail: 'グルテンフリーではない。タルト、チーズケーキ、ピザ、ハヤシのオムライス、揚げ物 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。チーズケーキ、クレームブリュレ、肉・卵・チーズのタコライス (2025〜2026年の口コミ)。',
    notes: '[カフェバー・三条新町] 烏丸御池近く、カウンター、ソファ席、中庭のある細長いトンネルのようなカフェバー。深夜1時まで。昼はタコライスやオムライスのセット、季節のタルトやチーズケーキ、フルーツのカクテルと夜のつまみ。店内喫煙可。',
  });
}

// ================================================================ 京乃たまや
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26023252/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_kyono_tamaya', name: '京乃たまや', category: 'OMNI',
    lat: 35.008667, lng: 135.756224, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura, kushikatsu, negiyaki, sukiyaki and white-miso soup (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, hamo, Omi beef, dashi throughout (2025–26 reviews).',
    hours_raw: 'Daily 11:30–15:00 and 17:00–23:00 (last order 22:15); open all year (Tabelog). Lunch only by reservation made at least two days ahead (Tabelog). 「単品でのご注文のみ先付けをご提供致します。」 — an appetizer is served with à la carte orders (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and transit IC; no QR (Tabelog). A vermilion counter with the head chef and owner, tables, private rooms and a tatami room upstairs (March, June and October 2026). Sanjo-dori west of Shinmachi, near Karasuma Oike (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sanjo-Shinmachi — Karasuma Oike',
    cuisine: 'Kyoto izakaya with courses · Tamatebako course: white-miso soup and sesame tofu to start, sashimi chilled in a smoking "treasure box", seasonal dishes (June and October 2025, August 2026) · ¥4,500 course (April 2026) · à la carte: yellowtail with salt and soy, oven-baked negiyaki, shrimp kushikatsu (February 2026) · medicinal hot pot, kamameshi, karaage (June 2025) · ayu tempura, Omi-beef sukiyaki (May 2026) · sanma tempura, grilled hamo, sea-bream nyumen (October 2026) · Fushimi sake',
    website: null, gmaps: gm('京乃たまや 三条新町'), menu_url: TB,
    notes: '[Kyoto izakaya · Sanjo-Shinmachi] A lively Kyoto izakaya by Karasuma Oike with a vermilion counter, private rooms and tatami upstairs: courses that open with white-miso soup and sesame tofu and bring sashimi in a smoking box, plus seasonal à la carte — hamo, ayu tempura, Omi-beef sukiyaki — with Fushimi sake. Lunch by advance booking.',
    chef_bio: { chef_name: null, roles: ['Head chef and owner (unnamed) at the counter (June 2026)'], origin: null,
      background: 'Per Tabelog and reviews: a Japanese restaurant and izakaya on Sanjo-dori near Karasuma Oike, open all year.',
      philosophy: null, specialty: 'Tamatebako course; seasonal Kyoto dishes.',
      anecdotes: [
        { text: 'An August 2026 group celebrating after a concert enjoyed opening the lid on the sashimi, kept chilled in its box.', source: R + 'B538530798/' },
        { text: 'A June 2026 regular comes every month for the lively counter with the head chef and owner, and brings friends.', source: R + 'B529740539/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理・居酒屋・鍋、中京区三条通新町西入ル釜座町30、毎日11:30〜15:00・17:00〜23:00 (L.O.22:15)、年中無休、昼は2日前までの予約制、単品の注文のみ先付けあり、カード・交通系IC 可、QR 不可。口コミ (2025年6月〜2026年10月、英語): 玉手箱コース (白味噌の味噌汁とごま豆腐、煙の出る箱の刺身)、4,500円のコース、ぶりの塩と醤油、オーブンのねぎ焼き、海老の串カツ、薬膳鍋、釜めし、唐揚げ、稚鮎の天ぷら、近江牛のすき焼き、秋刀魚の天ぷら、焼き鱧、鯛にゅうめん、伏見の酒、朱色のカウンターと大将と店主、個室、2階の座敷。',
      confidence: 'medium', sources: [TB, R + 'B508804668/', R + 'B509717931/', R + 'B516423900/', R + 'B523720200/', R + 'B524172037/', R + 'B526185602/', R + 'B526403335/', R + 'B528921602/', R + 'B529740539/', R + 'B537950929/', R + 'B538530798/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; lunch needs two days’ notice. A mixed crowd of local and overseas diners (October 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三条通新町西入ル釜座町30',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.008667, 135.756224); cross-checked: GSI 京都府京都市中京区釜座町30番地 (lot) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B526185602/'],
    price_note: 'One course price from April 2026; reviewers report ¥4,000–9,999 per person.', last_checked: TODAY, items: [
      it('', '', 'Course (without all-you-can-drink)', '¥4,500', 'Courses', 'no', 'no', 'April 2026.', 'course'),
      it('', '', 'Tamatebako course', '', 'Courses', 'no', 'no', 'June 2025.', 'tamatebako'),
      it('', '', 'Omi-beef sukiyaki', '', 'À la carte', 'no', 'no', 'May 2026.', 'sukiyaki'),
    ] }, {
    cuisine: 'コースもある京の居酒屋・玉手箱コース: 白味噌の味噌汁とごま豆腐から、煙の出る箱で冷やした刺身、季節の料理 (2025年6月・10月、2026年8月)・4,500円のコース (2026年4月)・単品: ぶりの塩と醤油、オーブンで焼くねぎ焼き、海老の串カツ (2026年2月)・薬膳鍋、釜めし、唐揚げ (2025年6月)・稚鮎の天ぷら、近江牛のすき焼き (2026年5月)・秋刀魚の天ぷら、焼き鱧、鯛にゅうめん (2026年10月)・伏見の酒',
    neighborhood: '三条新町。烏丸御池',
    gf_detail: 'グルテンフリーではない。天ぷら、串カツ、ねぎ焼き、すき焼き、白味噌の味噌汁 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。刺身、鱧、近江牛、出汁 (2025〜2026年の口コミ)。',
    notes: '[京の居酒屋・三条新町] 烏丸御池近くの朱色のカウンター、個室、2階の座敷のあるにぎやかな居酒屋。白味噌の味噌汁とごま豆腐で始まり煙の出る箱で刺身が届くコースや、鱧、稚鮎の天ぷら、近江牛のすき焼きなど季節の単品を伏見の酒と。昼は前もって予約を。',
  });
}

// ================================================================ 種嘉商店 京都最中
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26034316/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://taneka.jp/';
  const H = day(['11:00', '17:00']);
  put({
    id: 'kyoto_taneka_shoten_monaka', name: '種嘉商店 京都最中', category: 'OMNI',
    lat: 35.012877, lng: 135.760296, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Monaka with red-bean paste or nut fillings (2026 reviews); the shell ingredients are not described and no gluten-free claim or allergen information is sourced.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Plain monaka of red-bean paste, and nut monaka (peanut, walnut, almond) may suit, but no vegan claim is sourced; the ice-cream monaka uses milk ice cream (July 2026).',
    hours_raw: 'Mon–Wed and Sunday 11:00–17:00; closed Thursday to Saturday and over the New Year (Tabelog). Mostly takeaway, with a small eat-in space; the monaka are freshly made (April 2026). Cards, e-money and QR (Tabelog). In a renovated townhouse with the workshop behind glass, on Kurumayacho-dori south of Nijo (Tabelog; April 2026). Opened 5 June 2020 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kurumayacho-Nijo — Karasuma Oike',
    cuisine: 'Freshly made monaka from a monaka-shell maker · plain red-bean monaka and walnut, peanut and almond monaka, each in its own shell shape, ¥250 (February and April 2026) · eat-in: ice-cream monaka of bean paste, mochi and milk ice cream ¥350 (June and July 2026), matcha monaka anmitsu ¥500 (July 2026), hojicha ¥120 with monaka, organic black tea ¥250 (February and April 2026)',
    website: SITE, gmaps: gm('種嘉商店 京都最中'), menu_url: SITE,
    notes: '[Monaka · Karasuma Oike] The townhouse shop of a monaka-shell maker near Karasuma Oike: crisp, freshly made monaka of red bean or with walnut, peanut or almond, ¥250 each, mostly to take away — or sit in for an ice-cream monaka (¥350) or monaka anmitsu with hojicha. Open Sunday to Wednesday only.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog and reviews: the shop of 種嘉商店, a maker of monaka shells, opened 5 June 2020 in a renovated townhouse with the workshop visible (April and July 2026); a July 2026 reviewer says the business was founded about 70 years ago (unconfirmed).',
      philosophy: null, specialty: 'Freshly made monaka; nut monaka.',
      anecdotes: [
        { text: 'An April 2026 visitor walking from Karasuma Oike found a workshop and sweet shop in an old townhouse, and had the square plain monaka and the walnut-shaped walnut one with organic black tea.', source: R + 'B526147731/' },
        { text: 'A July 2026 visitor watched the artisans making shells through glass doors over a ¥500 matcha monaka anmitsu.', source: R + 'B532331246/' },
      ],
      japanese_sources_summary: '食べログ: 和菓子、中京区車屋町通二条下ル仁王門突抜町317、月火水日11:00〜17:00、木金土休み、年末年始休み、カード・電子マネー・QR 可、2020年6月5日オープン。口コミ (2026年2月〜7月、英語): 最中の皮の製造元の店、改装した町家、ガラス越しに工房、作りたての最中、プレーン、くるみ、ピーナッツ、アーモンドの最中各250円、店内でアイス最中 (あんこ、餅、ミルクアイス) 350円、抹茶の最中あんみつ500円、ほうじ茶120円、オーガニックの紅茶250円、創業約70年との声。',
      confidence: 'medium', sources: [SITE, TB, R + 'B521790612/', R + 'B523396891/', R + 'B526147731/', R + 'B529330152/', R + 'B531376081/', R + 'B532331246/', R + 'B432407209/'] },
    cultural_comfort: { level: 'none_needed', note: 'Point to the monaka you want; ask to eat in if you want ice-cream monaka or anmitsu. Closed Thursday to Saturday.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区車屋町通二条下ル仁王門突抜町317',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop site; Tabelog reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.012877, 135.760296); cross-checked: GSI 京都府京都市中京区仁王門突抜町317番地 (lot) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B521790612/', R + 'B531376081/', R + 'B532331246/'],
    price_note: 'Prices from February to July 2026.', last_checked: TODAY, items: [
      it('', '', 'Monaka (plain, walnut, peanut or almond)', '¥250', 'Monaka', 'ask', 'ask', 'February and April 2026.', 'monaka'),
      it('', '', 'Ice-cream monaka (eat-in)', '¥350', 'Eat-in', 'ask', 'no', 'June and July 2026.', 'ice_monaka'),
      it('', '', 'Matcha monaka anmitsu', '¥500', 'Eat-in', 'ask', 'ask', 'July 2026.', 'anmitsu'),
      it('', '', 'Hojicha (with monaka)', '¥120', 'Drinks', 'ask', 'ask', 'February 2026.', 'hojicha'),
    ] }, {
    cuisine: '最中の皮の製造元の作りたての最中・プレーンのあんこの最中と、それぞれの形の皮のくるみ、ピーナッツ、アーモンドの最中各250円 (2026年2月・4月)・店内: あんこ、餅、ミルクアイスのアイス最中350円 (2026年6月・7月)、抹茶の最中あんみつ500円 (2026年7月)、最中と一緒にほうじ茶120円、オーガニックの紅茶250円 (2026年2月・4月)',
    neighborhood: '車屋町二条。烏丸御池',
    gf_detail: '要確認。あんこやナッツの最中 (2026年の口コミ)。皮の材料の情報はなく、グルテンフリーの記載やアレルゲンの情報もない。',
    vegan_detail: '要確認。プレーンのあんこの最中やナッツの最中は合うかもしれないが、ヴィーガンの記載はない。アイス最中はミルクアイス (2026年7月)。',
    notes: '[最中・烏丸御池] 烏丸御池近く、最中の皮の製造元の町家の店。作りたてのパリッとした最中 (あんこ、くるみ、ピーナッツ、アーモンド) 各250円をおもに持ち帰りで、店内ではアイス最中 (350円) や最中あんみつとほうじ茶も。日〜水曜のみ営業。',
  });
}

// ================================================================ 馬鈴 (Buzz)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26015398/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:30', '18:00']);
  put({
    id: 'kyoto_buzz_gojozaka', name: '馬鈴 (Buzz)', category: 'OMNI',
    lat: 34.995777, lng: 135.779704, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Warabi mochi made with domestic warabi starch, with kinako and syrups; shiratama and zenzai (2025–26 reviews). No gluten-free claim or allergen information; the toppings and syrups are not described.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Warabi mochi with kinako and syrup, and zenzai, may suit, but no vegan claim is sourced; ice cream and parfaits are not vegan (2025–26 reviews).',
    hours_raw: 'Daily except Tuesday 10:30 to about 18:00, or until the shiratama sells out (Tabelog). Rabbit-shaped warabi mochi to take away on a plate for walking, ¥350 (August 2026). No cards; e-money and QR (Tabelog). 24 seats at tables (Tabelog). On Gojozaka on the way to Kiyomizu-dera (August 2025, September 2026).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gojozaka — Kiyomizu',
    cuisine: 'Japanese sweets café · warabi mochi of domestic warabi starch, served with a kinako picture on the plate, with black syrup, matcha or yuzu (2025–26 reviews) · rabbit-shaped warabi mochi with yuzu syrup to take away ¥350 (August 2026) · warabi with vanilla ice cream (May 2026) · shiratama zenzai with sugar art of Daimonji and Kinkaku-ji (August 2025) · kakigori with shiratama (July 2025), parfaits',
    website: null, gmaps: gm('馬鈴 Buzz 五条坂'), menu_url: TB,
    notes: '[Warabi mochi · Gojozaka] A sweets café on Gojozaka on the way to Kiyomizu-dera: soft warabi mochi of domestic warabi starch with kinako drawn into pictures on the plate, shiratama zenzai decorated with sugar art, kakigori in summer, and rabbit-shaped warabi to eat as you walk. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog and reviews: a Japanese sweets café on Gojozaka near Kiyomizu-dera.',
      philosophy: null, specialty: 'Warabi mochi; plates decorated with kinako and sugar art.',
      anecdotes: [
        { text: 'An August 2025 couple ordered shiratama zenzai, its plate decorated with sugar pictures of the Daimonji mountain and Kinkaku-ji, and warabi with ice cream.', source: R + 'B528477716/' },
        { text: 'An August 2026 walker took a rabbit-shaped warabi mochi with yuzu syrup — rarely seen elsewhere, the staff said — on a plate for walking.', source: R + 'B533761559/' },
      ],
      japanese_sources_summary: '食べログ: 甘味処、東山区五条橋東6-583-37、火曜以外10:30〜18:00ごろ (白玉がなくなり次第終了)、カード不可、電子マネー・QR 可、24席。口コミ (2025年7月〜2026年9月、英語): 五条坂、国産のわらび粉のわらび餅、皿にきなこの絵、黒蜜・抹茶・柚子の蜜、うさぎのわらび餅の持ち帰り350円 (柚子の蜜)、わらび餅とバニラアイス、大文字と金閣寺の砂糖の絵の白玉ぜんざい、白玉入りのかき氷、パフェ。',
      confidence: 'medium', sources: [TB, R + 'B511473690/', R + 'B523452148/', R + 'B528477716/', R + 'B530938070/', R + 'B533761559/', R + 'B536761253/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Sit in for the decorated plates, or take a rabbit warabi to go. No cards. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区五条橋東6-583-37',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (34.995777, 135.779704); GSI matched only 京都府京都市東山区五条橋東六丁目 (chome, no lot) 225m — approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533761559/'],
    price_note: 'One price from August 2026; reviewers report ¥1,000–1,999 per person.', last_checked: TODAY, items: [
      it('', '', 'Rabbit-shaped warabi mochi with syrup (takeaway)', '¥350', 'Warabi mochi', 'ask', 'ask', 'August 2026.', 'usagi_warabi'),
      it('', '', 'Warabi mochi with kinako and black syrup', '', 'Warabi mochi', 'ask', 'ask', '2025–26 reviews.', 'warabi'),
      it('', '', 'Shiratama zenzai', '', 'Zenzai', 'ask', 'ask', 'August 2025.', 'zenzai'),
    ] }, {
    cuisine: '甘味処・国産のわらび粉のわらび餅、皿にきなこの絵、黒蜜・抹茶・柚子の蜜 (2025〜2026年の口コミ)・持ち帰りのうさぎのわらび餅と柚子の蜜350円 (2026年8月)・わらび餅とバニラアイス (2026年5月)・大文字と金閣寺の砂糖の絵の白玉ぜんざい (2025年8月)・白玉入りのかき氷 (2025年7月)、パフェ',
    neighborhood: '五条坂。清水',
    gf_detail: '要確認。国産のわらび粉のわらび餅にきなこと蜜、白玉、ぜんざい (2025〜2026年の口コミ)。グルテンフリーの記載やアレルゲンの情報はなく、トッピングや蜜の中身も不明。',
    vegan_detail: '要確認。きなこと蜜のわらび餅やぜんざいは合うかもしれないが、ヴィーガンの記載はない。アイスやパフェはヴィーガンではない (2025〜2026年の口コミ)。',
    notes: '[わらび餅・五条坂] 清水寺へ向かう五条坂の甘味処。国産のわらび粉のやわらかいわらび餅に皿のきなこの絵、砂糖の絵で飾った白玉ぜんざい、夏はかき氷、食べ歩き用のうさぎのわらび餅も。火曜休み。',
  });
}

save();
