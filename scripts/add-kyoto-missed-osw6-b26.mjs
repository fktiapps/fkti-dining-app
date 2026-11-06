// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 26.
//   + Cafe & Dining Amber Court (Hotel Nikko Princess Kyoto) — un-skipped by the coordinator after batch 25: the hotel's own
//     café-restaurant, with no hotel-wide record in data (hotel-restaurant rule); the brief's "Nikko" large-parent example
//     means the 桃李 brand shared across Okura/Nikko hotels.
//   + エキュバランス Equivalence (pâtisserie with an eat-in counter, Kitashirakawa)
//   + 京都 かつ田 かつざんまい Kyoto Katsuda Katsuzanmai (tonkatsu fried piece by piece at the counter, Shijo Karasuma)
//   + 酒場きのはち 四条烏丸 Sakaba Kinohachi (seasonal-fish izakaya and sake bar from 15:00, Shijo Karasuma)
//   - skip 26028340 ディーン＆デルーカ 京都店 (chain)
//   - skip 26004190 サー・トーマス・リプトン 四条店 (chain; the Lipton skip of batch 22 stands)
//   Same-name counts first, per brand or operator (2026-11-05): Amber Court — one; エキュバランス — one; かつ田 — three in Kyoto
//   on Tabelog (京都とんかつ かつ田 四条河原町店, かつ田 三条河原町店, this shop), none in data: a small group, drafted.
//   きのはち — two (酒場きのはち 四条烏丸 and KINOHACHI 京都駅前), none in data: a small group, drafted. DEAN & DELUCA —
//   many shops nationwide on Tabelog: chain.
//   Taken on 2026-11-05: Amber Court 26002234 as instructed; `next core 200` gave かつ田 26037748, D&D (skip) and
//   きのはち 26043118; `next notable 200` gave Lipton 四条店 (skip) and エキュバランス 26002186. None is in data/kyoto.json:
//   grep by name and address (高橋町630 ホテル日航プリンセス京都, 北白川山田町4-1, 大政所町673-1 峯ビル, 童侍者町161
//   綾小路スクエア) found none. Service charges per Tabelog's Japanese original: Amber Court 「料金はサービス料15％・税金が
//   含まれた価格となります。」 (prices include 15% service and tax); きのはち 「380円（税抜）※418円（税込）季節の小皿付き」;
//   エキュバランス and かつ田 none listed.
//   Greg's 2026-11-05 rulings applied: no guests-only inn here; remarks about foreign customers kept as sourced facts.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-26');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26028340', 'chain: DEAN & DELUCA has many shops nationwide on Tabelog (https://tabelog.com/en/rstLst/?sw=ディーン＆デルーカ — CIAL Yokohama, Crysta Nagahori, Atré Kawasaki, Okayama, Tokyo Midtown Hibiya, Hoshigaoka Mitsukoshi and more).');
skip('26004190', 'chain by name count (as for the ポルタ店 in osw6-22): Tabelog (https://tabelog.com/en/rstLst/?sw=リプトン) lists Sir Thomas Lipton 三条本店, this 四条店 and ポルタ店, Lipton Cake Shop 三条店, and Lipton-named shops in Kagawa and Ehime — 5+.');

// ================================================================ Amber Court
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26002234/'; const R = TB + 'dtlrvwlst/';
  const H = day(['07:00', '14:30'], ['17:00', '21:30']);
  put({
    id: 'kyoto_amber_court_nikko_princess', name: 'Cafe & Dining Amber Court (Hotel Nikko Princess Kyoto)', category: 'OMNI',
    lat: 35.000338, lng: 135.760806, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The restaurant checks allergies and dislikes and swapped an ingredient for one guest (January 2026); menus lean on bread, pasta, curry and cakes (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A salad bar at breakfast, but most dishes have meat, fish, dairy or egg (2026 reviews).',
    hours_raw: 'Daily: breakfast 7:00–11:00 (buffet), lunch 11:00–14:30, café in the afternoon, dinner 17:00–21:30 (last order 21:00; courses 20:30) (Tabelog; 2026 reviews). Reservations accepted (Tabelog). Prices include a 15% service charge and tax (Tabelog, Japanese text: 「料金はサービス料15％・税金が含まれた価格となります。」). Free hotel membership gives 10% off (October 2026). 88 seats; non-smoking, smoking area in the building; parking; cards, IC cards, e-money and QR (Tabelog). Ground floor of Hotel Nikko Princess Kyoto, east of Karasuma on Takatsuji; 3 min from Shijo Stn exit 5 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Karasuma Takatsuji, in Hotel Nikko Princess — 3 min from Shijo Stn',
    cuisine: 'The hotel’s café-restaurant: French dishes of seasonal ingredients at dinner, casual lunches and afternoon tea (Tabelog, shop text) · breakfast buffet with a live omelette station, the signature Princess beef curry, doughnuts, breads, cheese and ham, a salad bar (May–August 2026) · lunch of appetizer, pasta (three choices), breads including a small melon bread, mini dessert and coffee ¥2,500 (July 2026); casual lunch course with a drink ¥3,200 via Ikkyu, grilled sirloin +¥500 (January 2026); bistro lunch with a toast (September 2026) · afternoon tea, priced below most hotel teas (July 2026) · Princess Dinner with choices from appetizer to main (October 2026) · cakes from the entrance showcase (2026 reviews)',
    website: 'https://www.princess-kyoto.co.jp/restaurant/ambercourt/', gmaps: gm('Amber Court ホテル日航プリンセス京都'), menu_url: TB + 'dtlmenu/',
    notes: "[Hotel café · Karasuma Takatsuji, breakfast to dinner] The bright ground-floor café-restaurant of Hotel Nikko Princess Kyoto, open from a 7 a.m. buffet (try the Princess beef curry) through good-value lunches — a pasta set with a basket of breads for ¥2,500 — to afternoon tea and French dinners. Prices include the 15% service charge. One September 2026 diner found the café drinks weak. Open daily.",
    chef_bio: { chef_name: null, roles: ['Hotel restaurant; chef unnamed'], origin: null,
      background: 'Per Tabelog (the shop’s own text): the café-restaurant of Hotel Nikko Princess Kyoto, where the chef prepares seasonal French dishes, with breakfast, lunch, afternoon tea and dinner. Reviewers single out the breakfast curry (May and August 2026) and the attentive hotel service (July and September 2026).',
      philosophy: null, specialty: 'Breakfast buffet and Princess beef curry; afternoon tea.',
      anecdotes: [
        { text: 'A September 2026 diner liked the cake but found the café au lait and iced tea weak and the glasses thick, "resembling those used in izakayas".', source: R + 'B536610147/' },
        { text: 'An April 2026 regular arrived at 16:00 to find the seasonal cakes sold out; a group of six tourists from abroad was the only other party.', source: R + 'B483321632/' },
        { text: 'A January 2026 anniversary lunch guest who dislikes fish had the appetizer changed after the staff asked about allergies and dislikes.', source: R + 'B520587478/' },
      ],
      japanese_sources_summary: '公式サイト (princess-kyoto.co.jp): ホテル日航プリンセス京都のカフェ&ダイニング アンバーコート。食べログ: ヨーロッパ料理・カフェ、下京区烏丸高辻東入高橋町630 ホテル日航プリンセス京都 1F、四条駅5番出口から徒歩約3分、毎日 朝 7:00〜11:00・昼 11:00〜14:30・夜 17:00〜21:30 (L.O. 21:00、コース20:30)、年中無休、予約可、料金はサービス料15%と税込み、88席、禁煙 (館内に喫煙所)、駐車場あり、カード・電子マネー・QR 可、季節の食材のフレンチ、アフタヌーンティー。口コミ (2025年2月〜2026年10月、英語): 朝食ビュッフェ (オムレツ、Princess beef curry)、パスタのランチ2,500円、一休のランチ3,200円、メロンパン、会員10%引き、カフェオレが薄いという声。',
      confidence: 'medium', sources: [TB, 'https://www.princess-kyoto.co.jp/restaurant/ambercourt/', R + 'B483321632/', R + 'B520587478/', R + 'B526344016/', R + 'B527744697/', R + 'B532405928/', R + 'B532664321/', R + 'B533208132/', R + 'B533598869/', R + 'B536316380/', R + 'B536610147/', R + 'B536841615/', R + 'B537618959/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hotel restaurant; book lunch or tea ahead; prices include 15% service; all cards and QR.' },
    safety: { ...SAFETY0, staff_allergy_handling: [{ text: 'Staff checked a guest’s allergies and dislikes before a lunch course and substituted the appetizer for a guest who dislikes fish (January 2026 review).', source: R + 'B520587478/', verified: TODAY }] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区烏丸高辻東入高橋町630 ホテル日航プリンセス京都 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Hotel site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.000338, 135.760806); cross-checked: GSI 京都府京都市下京区高橋町630番地 (lot) 45m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532664321/', R + 'B520587478/'],
    price_note: 'Prices from January and July 2026 reviews (service and tax included per Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Pasta lunch: appetizer, pasta, breads, mini dessert, coffee or tea', '¥2,500', 'Lunch', 'no', 'no', 'July 2026.', 'pasta_lunch'),
      it('', '', 'Casual lunch course with a drink (Ikkyu plan)', '¥3,200', 'Lunch', 'ask', 'no', 'January 2026; grilled sirloin +¥500.', 'casual_lunch'),
    ] }, {
    cuisine: 'ホテルのカフェ&ダイニング。季節の食材のフレンチの夜、気軽な昼、アフタヌーンティー (食べログの店の紹介)・朝食ビュッフェ: 目の前で焼くオムレツ、名物の Princess beef curry、ドーナツ、パン、チーズとハム、サラダバー (2026年5〜8月)・昼: 前菜、パスタ (3種から)、小さなメロンパンなどのパン、ミニデザート、コーヒーで2,500円 (2026年7月)、一休の飲み物付きランチ3,200円、サーロインは+500円 (2026年1月)、乾杯付きのビストロランチ (2026年9月)・ホテルにしては手頃なアフタヌーンティー (2026年7月)・前菜からメインまで選べる Princess Dinner (2026年10月)・入口のショーケースのケーキ (2026年の口コミ)',
    neighborhood: '烏丸高辻、ホテル日航プリンセス京都の中。四条駅から徒歩3分',
    gf_detail: '要確認。アレルギーや苦手なものを確認し、食材を替えてくれた例がある (2026年1月)。パン、パスタ、カレー、ケーキが多い (2026年の口コミ)。',
    vegan_detail: '要確認。朝食にサラダバーはあるが、多くの料理に肉、魚、乳製品、卵が入る (2026年の口コミ)。',
    notes: '[ホテルのカフェ・烏丸高辻、朝から夜まで] ホテル日航プリンセス京都の1階の明るいカフェ&ダイニング。朝7時からのビュッフェ (名物の Princess beef curryを)、パンのかごが付くパスタのランチ2,500円、アフタヌーンティー、フレンチのディナーまで。料金はサービス料15%込み。2026年9月の客はカフェの飲み物が薄いと書く。年中無休。',
  });
}

// ================================================================ エキュバランス
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26002186/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '18:00']);
  put({
    id: 'kyoto_equivalence_kitashirakawa', name: 'エキュバランス (Equivalence)', category: 'OMNI',
    lat: 35.034982, lng: 135.791394, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: cakes, tarts, cream puffs and baked goods on wheat (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cream, butter and egg in the cakes and puddings (2025–26 reviews).',
    hours_raw: '10:00–18:00; closed Monday (Tabelog). Take-away, or eat in at a few counter seats inside and a terrace (Tabelog; April and July 2025). No cards or e-money; QR accepted (Tabelog). Parking (Tabelog). On Shirakawa-dori opposite the Kyoto University of the Arts; by the bus stop (Tabelog; 2025–26 reviews).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitashirakawa, Shirakawa-dori — by the Kyoto University of the Arts bus stop',
    cuisine: 'Neighbourhood pâtisserie of over 20 years (April 2025) · signature "Equivalence" chocolate mousse with hazelnuts ¥700 (April 2025), ¥780 (May 2026) · shortcake and Shine Muscat tart ¥750 each (November 2025); seasonal peach shortcake, fig, pear-and-pistachio and kumquat tarts; mille-feuille, marjolaine, cream puffs (2025–26 reviews) · coconut-pineapple cream pudding ¥680, mango pudding ¥600 (April 2025, August 2026) · canelé ¥350, lemon cake and baked goods; coffee ¥450 (May–July 2026) · Christmas noël cakes (December 2025)',
    website: 'http://equibalance.jp/', gmaps: gm('エキュバランス 北白川'), menu_url: null,
    notes: "[Pâtisserie · Kitashirakawa, the chocolate mousse named after the shop] A small, smart cake shop on Shirakawa-dori opposite the art university, baking for the neighbourhood for over 20 years. Try the namesake chocolate-hazelnut mousse (¥780) or a seasonal fruit tart, and eat at the counter or on the terrace with coffee. Gently sweet, classic cakes; one diner found the cream-puff shell hard. Closed Monday.",
    chef_bio: { chef_name: null, roles: ['Pâtissier (unnamed)'], origin: null,
      background: 'An April 2025 reviewer says the shop has been in business for over 20 years; reviewers describe classic, gently sweet cakes and attentive service (2025–26 reviews).',
      philosophy: null, specialty: 'Equivalence chocolate mousse; fruit tarts.',
      anecdotes: [
        { text: 'A September 2026 diner loved the namesake mousse and fig tart but found the cream-puff shell a bit hard.', source: R + 'B536405162/' },
        { text: 'A May 2026 diner expected tiramisu from the shop’s name cake and found a chocolate mousse, not too sweet.', source: R + 'B528665371/' },
        { text: 'A June 2026 diner came because another cake shop was sold out and was glad to be able to eat in.', source: R + 'B530851544/' },
      ],
      japanese_sources_summary: '食べログ: ケーキ・カフェ、左京区北白川山田町4-1、Kyoto University of Art and Design のバス停の近く、火〜日 10:00〜18:00、月曜休み、カード・電子マネー不可、QR 可、13席、禁煙、駐車場あり。口コミ (2025年4月〜2026年9月、英語): 20年以上続く店、店名のチョコレートムース700円 (2025年4月)・780円 (2026年5月)、ショートケーキとシャインマスカットのタルト各750円、ココナッツとパインのプリン680円、マンゴープリン600円、カヌレ350円、コーヒー450円、店内と外の席でイートイン、シューの皮がやや硬いという声。',
      confidence: 'medium', sources: [TB, R + 'B111216697/', R + 'B505211152/', R + 'B505997999/', R + 'B507452265/', R + 'B510751255/', R + 'B513157405/', R + 'B517233898/', R + 'B528665371/', R + 'B530851544/', R + 'B531678630/', R + 'B532827779/', R + 'B536405162/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point at the showcase; eat in or take away; QR or cash.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区北白川山田町4-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.034982, 135.791394); cross-checked: GSI 京都府京都市左京区北白川山田町4番地 (lot) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B528665371/', R + 'B517233898/', R + 'B532827779/'],
    price_note: 'Prices from April 2025–August 2026 reviews; the namesake mousse rose from ¥700 to ¥780.', last_checked: TODAY, items: [
      it('', '', 'Equivalence (chocolate mousse)', '¥780', 'Cakes', 'no', 'no', 'May 2026; ¥700 in April 2025.', 'equivalence'),
      it('', '', 'Shortcake', '¥750', 'Cakes', 'no', 'no', 'November 2025.', 'shortcake'),
      it('', '', 'Mango pudding', '¥600', 'Puddings', 'ask', 'no', 'August 2026.', 'mango_pudding'),
      it('', '', 'Coffee', '¥450', 'Drinks', '', '', 'May 2026.', 'coffee'),
    ] }, {
    cuisine: '20年以上続く町の洋菓子店 (2025年4月)・店名のチョコレートとヘーゼルナッツのムース「エキュバランス」700円 (2025年4月)、780円 (2026年5月)・ショートケーキとシャインマスカットのタルト各750円 (2025年11月)、桃のショートケーキ、無花果や洋梨とピスタチオや金柑のタルト、ミルフィーユ、マルジョレーヌ、シュークリーム (2025〜2026年の口コミ)・ココナッツとパインのクリームプリン680円、マンゴープリン600円 (2025年4月、2026年8月)・カヌレ350円、レモンケーキなどの焼き菓子、コーヒー450円 (2026年5〜7月)・クリスマスのノエル (2025年12月)',
    neighborhood: '北白川、白川通。Kyoto University of Art and Design のバス停のそば',
    gf_detail: 'グルテンフリーではない。小麦のケーキ、タルト、シュー、焼き菓子 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ケーキやプリンに生クリーム、バター、卵を使う (2025〜2026年の口コミ)。',
    notes: '[洋菓子・北白川、店名のチョコレートムース] 芸術大学の向かいの白川通の、20年以上地元のために焼いてきた小さな洋菓子店。店名のチョコレートとヘーゼルナッツのムース (780円) や季節の果物のタルトを、カウンターかテラスでコーヒーと。やさしい甘さの定番のケーキで、シューの皮が硬いという声も。月曜休み。',
  });
}

// ================================================================ かつ田 かつざんまい
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26037748/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '15:00'], ['17:00', '22:00']); const WE = day(['11:30', '22:00']);
  put({
    id: 'kyoto_katsuda_katsuzanmai', name: '京都 かつ田 かつざんまい (Kyoto Katsuda Katsuzanmai)', category: 'OMNI',
    lat: 35.001263, lng: 135.759465, cuisine_type: 'katsu',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: breaded cutlets of pork, chicken, beef, seafood, vegetables and egg, fried in shared oil, with curry (2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: vegetable cutlets share the fryer with meat and seafood (2024–26 reviews).',
    hours_raw: 'Mon–Fri 11:30–15:00 (last order 14:45) and 17:00–22:00 (last order 21:45); Sat–Sun 11:30–22:00 (Tabelog). No reservations (Tabelog); queues at peak times (July 2026). 17 counter seats; non-smoking; free Wi-Fi; cards and IC cards, no QR (Tabelog). 2 min from Shijo and Karasuma Stns (Tabelog). Opened 3 June 2022 (Tabelog); recently renovated (February 2026).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo Karasuma — 2 min from Shijo Stn',
    cuisine: 'Katsu sets fried in front of you and served one piece at a time on a rack, tempura-style (2024–26 reviews) · set B ¥1,970 — 60 g pork and 60 g chicken-cheese katsu, fried eggplant and baby corn, a boiled-egg cutlet, curry soup (August 2026) · set C with tonkatsu, seafood cutlet, vegetables and a premium egg, with curry (July 2025, October 2026) · Wagyu Katsuzanmai with beef cutlet, shiitake, eggplant, chicken and pork cutlets ¥3,500 (November 2026) · branded pork from Kagoshima; lunch sets from ¥1,900 (January 2025) · eat with salt, wasabi or sauce; katsu curry (2025–26 reviews)',
    website: null, gmaps: gm('京都 かつ田 かつざんまい 四条烏丸'), menu_url: TB + 'dtlmenu/',
    notes: "[Tonkatsu · Shijo Karasuma, katsu one piece at a time] A 17-seat counter by Shijo Station that fries pork, chicken, beef, vegetable and egg cutlets to order and serves them one by one, tempura-style, with curry on the side. Sets run about ¥1,900–3,500. Busy with visitors; no bookings, so expect a queue at dinner. Reviews are mixed on value and service. Open daily, all day at weekends.",
    chef_bio: { chef_name: null, roles: ['Young counter staff (unnamed)'], origin: null,
      background: 'Opened 3 June 2022 (Tabelog), one of three かつ田 tonkatsu shops on Tabelog in central Kyoto. An August 2026 reviewer heard it began as a tonkatsu and curry restaurant; a February 2026 diner saw celebration flowers after a renovation.',
      philosophy: null, specialty: 'Katsuzanmai sets served piece by piece.',
      anecdotes: [
        { text: 'A July 2025 diner felt the staff were polite to foreign customers but treated Japanese customers with disdain, acting only when prompted.', source: R + 'B509831847/' },
        { text: 'A December 2024 diner found the format interesting but the katsu clearly below high-end shops and somewhat geared to tourists.', source: R + 'B497781949/' },
        { text: 'A November 2026 diner loved the Wagyu Katsuzanmai with salt and wasabi but found ¥3,500 a bit steep.', source: R + 'B538528406/' },
        { text: 'A February 2026 diner was the only local customer among many visitors from abroad.', source: R + 'B521892541/' },
      ],
      japanese_sources_summary: '食べログ: とんかつ・牛かつ・カレー、下京区大政所町673-1 峯ビル 1F、四条駅・烏丸駅から徒歩2分、月〜金 11:30〜15:00 (L.O. 14:45)・17:00〜22:00 (L.O. 21:45)、土日 11:30〜22:00、予約不可、カウンター17席、禁煙、Wi-Fi、カード・交通系IC可、2022年6月3日オープン。口コミ (2024年12月〜2026年11月、英語): 揚げたてを一品ずつ網に、B定食1,970円、C定食、和牛かつざんまい3,500円、Kagoshima のブランド豚、カレー、外国人客が多い、日本人客への対応が冷たいという声、値段が高いという声。',
      confidence: 'medium', sources: [TB, R + 'B497781949/', R + 'B499110487/', R + 'B499911154/', R + 'B509417473/', R + 'B509831847/', R + 'B521892541/', R + 'B523449543/', R + 'B523655095/', R + 'B531352234/', R + 'B532909112/', R + 'B537928924/', R + 'B538528406/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Walk in and queue; pick a set; cards and IC cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区大政所町673-1 峯ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.001263, 135.759465); cross-checked: GSI 京都府京都市下京区大政所町673番地 (lot) 60m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B532909112/', R + 'B538528406/'],
    price_note: 'Prices from January 2025–November 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Set B: pork and chicken katsu, vegetables, egg, curry soup', '¥1,970', 'Sets', 'no', 'no', 'August 2026.', 'set_b'),
      it('', '', 'Wagyu Katsuzanmai', '¥3,500', 'Sets', 'no', 'no', 'November 2026.', 'wagyu_katsuzanmai'),
    ] }, {
    cuisine: '目の前で揚げて一品ずつ網にのせる、天ぷらのような出し方のかつの定食 (2024〜2026年の口コミ)・B定食1,970円: 豚60g と鶏チーズかつ60g、茄子とヤングコーンの揚げ物、ゆで卵のかつ、カレーのスープ (2026年8月)・とんかつ、海鮮かつ、野菜、こだわり卵とカレーの C定食 (2025年7月、2026年10月)・牛かつ、椎茸、茄子、鶏と豚のかつの和牛かつざんまい3,500円 (2026年11月)・Kagoshima のブランド豚、昼は1,900円から (2025年1月)・塩、わさび、ソースで、かつカレーも (2025〜2026年の口コミ)',
    neighborhood: '四条烏丸。四条駅から徒歩2分',
    gf_detail: 'グルテンフリーではない。豚、鶏、牛、魚介、野菜、卵のパン粉のかつを共用の油で揚げ、カレーも付く (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。野菜のかつも肉や魚介と同じ油で揚げる (2024〜2026年の口コミ)。',
    notes: '[とんかつ・四条烏丸、一品ずつ揚げるかつ] 四条駅近くの17席のカウンター。豚、鶏、牛、野菜、卵のかつを注文ごとに揚げ、天ぷらのように一つずつ出し、カレーを添える。定食は約1,900〜3,500円。旅行者でにぎわい、予約はできないので夜は行列も。値段や接客への評価は分かれる。年中無休、土日は通し営業。',
  });
}

// ================================================================ 酒場きのはち
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26043118/'; const R = TB + 'dtlrvwlst/';
  const H = day(['15:00', '23:00']);
  put({
    id: 'kyoto_sakaba_kinohachi', name: '酒場きのはち 四条烏丸 (Sakaba Kinohachi)', category: 'OMNI',
    lat: 35.002439, lng: 135.758924, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seasonal fish, tempura, rare-fried fish cutlets and spring rolls, with dashi and soy (2026 reviews). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-led izakaya; even the starter tofu and the omelette use dashi (2026 reviews).',
    hours_raw: '15:00–23:00 (last orders food 22:00, drinks 22:30), daily, closing on some days irregularly (Tabelog). Reservations accepted; seat requests may not be met; bookings more than 20 minutes late are cancelled; no-shows for courses charged 100%; 2-hour limit when busy (Tabelog). Table charge ¥418 with a seasonal small plate (Tabelog, Japanese text: 「380円（税抜）※418円（税込）季節の小皿付き」). 20 seats: 10 at the counter, 10 at tables (Tabelog). Cards and QR, no e-money (Tabelog). In the Ayanokoji Square building in an alley off Shijo Karasuma; 2 min from Shijo Stn (Tabelog). Opened 25 June 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo Karasuma — 2 min from Shijo Stn',
    cuisine: 'Retro-modern izakaya of market-fresh seasonal fish by a chef from a hotel background, with sake chosen by a sake sommelier, whisky and gin from 15:00 (Tabelog, shop text; October 2026) · sashimi platter ¥1,980 — e.g. Tsushima Densuke anago, Ise hata, meichi-dai, Akashi sawara, Biwa masu (September 2026) · rare-fried seasonal fish cutlets, fried shrimp with sansho ¥913, dashi-poured tamagoyaki ¥858, Miyazaki A4 beef steak ¥3,168 (Tabelog; September 2026) · fig, prosciutto and mascarpone; duck and white-leek spring rolls; grilled chicken neck with black shichimi; firefly squid, shirako, seasonal vegetable tempura (2026 reviews) · Sapporo Black Label draft ¥682, Houou Biden sake ¥990 a glass, the Kinohachi highball (September–October 2026)',
    website: null, gmaps: gm('酒場きのはち 四条烏丸'), menu_url: TB + 'dtlmenu/',
    notes: "[Izakaya & sake bar · Shijo Karasuma, fresh fish from 3 p.m.] A retro-modern counter in an alley off Shijo Karasuma, opened in 2025 by a former hotel chef: a five-fish sashimi platter (¥1,980), rare-fried fish cutlets, figs with prosciutto and mascarpone, and a deep list of sake, whisky and gin picked by the manager. Friendly to solo drinkers. ¥418 table charge; small plates and prices on the high side. Daily from 15:00.",
    chef_bio: { chef_name: null, roles: ['Chef from a hotel background; manager and sake sommelier (unnamed)'], origin: null,
      background: 'Per Tabelog (the shop’s own text): a hideaway near Shijo Karasuma with a retro-modern room by a chef from a hotel background, and sake chosen by a sake sommelier and bartender; opened 25 June 2025. A sister shop, KINOHACHI 京都駅前, is on Tabelog. Reviewers praise the friendly manager and staff (April–May 2026).',
      philosophy: null, specialty: 'Seasonal sashimi; rare-fried fish cutlets.',
      anecdotes: [
        { text: 'An August 2026 diner found the dishes creative and good but the portions small for the price — meant for one, not for sharing.', source: R + 'B534601899/' },
        { text: 'An April 2026 diner liked the day’s fish but found the vegetable tempura a little oily and the prices high.', source: R + 'B527023533/' },
        { text: 'An April 2026 diner said the chef "might be a genius".', source: R + 'B526123813/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・天ぷら・創作料理、下京区童侍者町161 綾小路スクエア 1F、四条駅から徒歩2分、毎日15:00〜23:00 (L.O. 料理22:00、ドリンク22:30)、不定休、予約可 (20分以上の遅刻はキャンセル、コースの無断キャンセルは100%、混雑時は2時間制)、お通し418円 (税込、季節の小皿付き)、20席 (カウンター10、テーブル10)、カード・QR 可、2025年6月25日オープン、ホテル出身の料理人、日本酒のソムリエでバーテンダーの店長。口コミ (2026年4〜10月、英語): 刺身の盛り合わせ1,980円 (Tsushima の Densuke の穴子、Ise のはた、めいち鯛、Akashi の鰆、ビワマス)、魚のレアかつ、海老の山椒揚げ913円、だし巻き858円、Miyazaki の牛ステーキ3,168円、無花果と生ハムとマスカルポーネ、量が少なく値段が高めという声。',
      confidence: 'medium', sources: [TB, R + 'B526123813/', R + 'B526758880/', R + 'B527023533/', R + 'B527183214/', R + 'B527887419/', R + 'B534601899/', R + 'B535165010/', R + 'B535267266/', R + 'B536444827/', R + 'B536661189/', R + 'B538181199/', R + 'B538203852/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter welcomes solo diners; staff suggest drinks; ¥418 table charge; cards and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区童侍者町161 綾小路スクエア 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; opened June 2025; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002439, 135.758924); cross-checked: GSI 京都府京都市下京区童侍者町161番地 (lot) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536661189/', R + 'B536444827/'],
    price_note: 'Prices from September 2026 reviews (tax included); ¥418 table charge (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Assorted sashimi (five kinds)', '¥1,980', 'Sashimi', 'ask', 'no', 'September 2026.', 'sashimi_moriawase'),
      it('', '', 'Fried shrimp with sansho (3)', '¥913', 'Fried', 'no', 'no', 'September 2026.', 'ebi_sansho'),
      it('', '', 'Dashi-poured tamagoyaki', '¥858', 'Small plates', 'ask', 'no', 'September 2026.', 'dashimaki'),
      it('', '', 'Miyazaki A4 beef steak', '¥3,168', 'Mains', 'ask', 'no', 'September 2026.', 'miyazaki_steak'),
      it('', '', 'Table charge with a seasonal small plate', '¥418', 'Charge', '', '', 'Tabelog.', 'otoshi'),
    ] }, {
    cuisine: 'ホテル出身の料理人による、市場直送の季節の魚のレトロモダンな居酒屋。日本酒は日本酒のソムリエが選び、ウイスキーとジンも、15時から (食べログの店の紹介、2026年10月)・刺身の盛り合わせ1,980円: Tsushima の Densuke の穴子、Ise のはた、めいち鯛、Akashi の鰆、ビワマスなど (2026年9月)・季節の魚のレアかつ、海老の山椒揚げ913円、出汁をかけた卵焼き858円、Miyazaki の A4 牛ステーキ3,168円 (食べログ、2026年9月)・無花果と生ハムとマスカルポーネ、鴨と白ねぎの春巻き、鶏せせりと黒七味、ホタルイカ、白子、季節の野菜の天ぷら (2026年の口コミ)・Sapporo Black Label の生682円、Houou Bida のグラス990円、きのはちハイボール (2026年9〜10月)',
    neighborhood: '四条烏丸。四条駅から徒歩2分',
    gf_detail: '要確認。季節の魚、天ぷら、魚のレアかつ、春巻きなどで、出汁と醤油を使う (2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。魚が中心の居酒屋で、お通しの豆腐や卵焼きにも出汁を使う (2026年の口コミ)。',
    notes: '[居酒屋・日本酒バー・四条烏丸、15時からの鮮魚] 四条烏丸の路地の、2025年開店のレトロモダンなカウンター。ホテル出身の料理人による5種の刺身の盛り合わせ (1,980円)、魚のレアかつ、無花果と生ハムとマスカルポーネ、店長が選ぶ日本酒、ウイスキー、ジン。一人飲みも歓迎。お通し418円、量は少なめで値段は高めという声も。毎日15時から。',
  });
}

save();
