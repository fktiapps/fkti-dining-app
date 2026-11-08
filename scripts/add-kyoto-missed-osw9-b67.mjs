// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 67.
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   + 卵がさきか鶏がさきか Tamago ga Saki ka Tori ga Saki ka (cheap yakitori on Kiyamachi until 5 am; since 2023)
//   + ロッカクハッテンナナ Rokkaku 887 (standing Italian wine bar from the chef of ricetta 8.7; since June 2025)
//   + 肉菓子 かぎりなき福 KAGIRINAKIFUKU (meat-filled daifuku and shigure soba in Gion; since December 2024)
//   - Arash Pub — too thin to verify (one 2025–26 review, about a tequila and the other guests)
//   + 焼鳥 かなざわ 六角店 Yakitori Kanazawa Rokkaku (Kyo Akajidori over binchotan; third shop of a Yamashina yakitori)
//   Same-name counts first (data and queue-status.jsonl): none for any of these; "Arash" matches only inside "% ARABICA"
//   and other words; かなざわ only in Kanazawa-city data. No earlier rulings. None drafted is in data/kyoto.json
//   by name or address.
//   Groups: Rokkaku 887 is a standing-bar sister of ricetta 8.7 (Karasuma Oike; not in data) — 2 shops, drafted.
//   かなざわ 六角店 is the third shop of 焼鳥かなざわ of Yamashina (Tabelog) — 3 shops, none in data, drafted.
//   Service charges checked against Tabelog's Japanese original: 卵がさきか 「チャージ料なし」; かなざわ 「ワンドリンク制」
//   (one drink per person); Rokkaku 887 and かぎりなき福 have no section.
//   Pins (checked against main): 卵がさきか at its Tabelog point. Rokkaku 887's Tabelog point is 4.5 m from 卵がさきか
//   and 6.8 m from kyoto_imo_matsu_kita_bekkan → moved 5 m south-east (6.4 m clearance). かぎりなき福's point is 4.9 m
//   from kyoto_yakiniku_gyusho_shin_gion (same address 末吉町95-5) → moved 2 m west (6.9 m).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-67');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26040641', 'too thin to verify: one 2025–26 review (June 2026), about a ¥500 tequila and chatting with other guests');

// ================================================================ 卵がさきか鶏がさきか
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26040233/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '29:00']);
  put({
    id: 'kyoto_tamago_ga_saki_ka', name: '卵がさきか鶏がさきか (Tamago ga Saki ka Tori ga Saki ka)', category: 'OMNI',
    lat: 35.007597, lng: 135.770586, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Salt skewers are possible, but the tare, gyoza and some side dishes are wheat or soy-based (2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken yakitori, egg dishes, chicken sashimi (2025–26 reviews).',
    hours_raw: 'Tue–Sun and holidays 17:00–05:00; closed Mondays (Tabelog). Bookings by phone from 16:00 (Tabelog). No cover charge (Tabelog Japanese original 「チャージ料なし」). Cards and PayPay; no e-money (Tabelog). 27 seats, counter and sofas; heated tobacco only in a designated area; English menu; children welcome (Tabelog). Orders by QR code or tablet (May and October 2025 reviews). A free dish for posting a review (June 2026 review). On Higashi-Kiyamachi south of Sanjo, 5 min from Sanjo or Kawaramachi (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi, south of Sanjo — 5 min from Sanjo Stn',
    cuisine: 'Charcoal yakitori at low prices, about ¥300 for two skewers: negima and chicken skin (¥308 a pair, May 2025), homemade tsukune three ways — cheese, plain, raw egg (¥572, May 2025), liver, thigh, ume-shiso chicken breast ¥290 (June 2026); dashimaki (March and October 2025); chicken sashimi of jidori breast, grilled aubergine with ponzu (October 2025); yukhoe and gyoza (October 2025); highballs ¥380 (June 2026)',
    website: null, gmaps: gm('卵がさきか鶏がさきか 木屋町'), menu_url: null,
    notes: '[Yakitori · Kiyamachi] A bright, casual yakitori bar on Kiyamachi grilling cheap charcoal skewers — about ¥300 for two — with fluffy dashimaki and tsukune three ways, until 5 am. About ¥2,000–4,000.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 6 October 2023 (Tabelog). A young team (October 2025 review); skewers grilled to order (June 2026 review).',
      philosophy: null,
      specialty: 'Cheap late-night yakitori; dashimaki.',
      anecdotes: [
        { text: 'A March 2025 diner came for a casual meal and found well-priced skewers, slightly small for trying many, and a fluffy but firm dashimaki.', source: R + 'B503988052/' },
        { text: 'A May 2025 diner tasted the three tsukune — cheese, plain and with raw egg — and came to use points but forgot to.', source: R + 'B507173000/' },
        { text: 'On a Sunday night in October 2025, with little else open on Kiyamachi, a diner found jazz playing and ¥308 pairs of skewers, gently grilled.', source: R + 'B515360433/' },
        { text: 'An October 2025 pair found the skewers small and the place geared to overseas visitors.', source: R + 'B515236098/' },
      ],
      japanese_sources_summary: '食べログ: 卵がさきか鶏がさきか、焼き鳥、中京区東木屋町通四条上ル材木町182-1 木屋町不動ビル1F、三条駅・河原町駅から徒歩5分、火〜日・祝 17:00〜翌5:00、月曜休み、電話予約は16:00から、チャージ料なし、カード・PayPay 可、電子マネー不可、27席、加熱式たばこのみ喫煙所、英語メニュー、子ども可、2023年10月6日オープン。口コミ (2024〜2026年、英語): 2本で300円ほどの炭火焼き鳥、ねぎまと皮308円、つくね3種572円、だし巻き、地鶏のむね肉の刺身、焼きなす、ユッケ、餃子、QR コードやタブレットで注文、口コミ投稿で1品サービス、朝5時まで。',
      confidence: 'medium', sources: [TB, R + 'B498396233/', R + 'B499901256/', R + 'B501544501/', R + 'B503988052/', R + 'B507173000/', R + 'B515236098/', R + 'B515360433/', R + 'B515923737/', R + 'B530817609/'] },
    cultural_comfort: { level: 'english', note: 'English menu; QR/tablet ordering (Tabelog; 2025 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区東木屋町通四条上ル材木町182-1 木屋町不動ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.007597, 135.770586); cross-checked: GSI 京都府京都市中京区材木町182番地 (lot) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B507173000/', R + 'B530817609/'],
    price_note: 'Prices from May 2025 and June 2026 reviews (June 2026 prices before tax).', last_checked: TODAY, items: [
      it('', '', 'Negima (2 skewers)', '¥308', 'Yakitori', 'ask', 'no', 'May 2025 review.', 'negima'),
      it('', '', 'Chicken skin (2 skewers)', '¥308', 'Yakitori', 'ask', 'no', 'May 2025 review.', 'kawa'),
      it('', '', 'Homemade tsukune, three ways', '¥572', 'Yakitori', 'ask', 'no', 'May 2025 review.', 'tsukune'),
      it('', '', 'Ume-shiso chicken breast', '¥290', 'Yakitori', 'ask', 'no', 'June 2026 review (before tax).', 'ume_shiso'),
      it('', '', 'Dashimaki', '', 'Plates', 'ask', 'no', 'March and October 2025 reviews.', 'dashimaki'),
    ] }, {
    cuisine: '2本300円ほどの安い炭火焼き鳥: ねぎまと皮 (2本308円、2025年5月)、チーズ・プレーン・生卵の自家製つくね3種 (572円、2025年5月)、レバー、もも、梅しそのむね肉290円 (2026年6月)、だし巻き (2025年3月・10月)、地鶏のむね肉の刺身、焼きなすのポン酢 (2025年10月)、ユッケと餃子 (2025年10月)、ハイボール380円 (2026年6月)',
    neighborhood: '木屋町、三条の南。三条駅から徒歩5分',
    gf_detail: '要確認。塩の串はあるが、たれ、餃子、一部の料理は小麦や醤油を使う (2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏の焼き鳥、卵料理、鶏の刺身 (2025〜26年の口コミ)。',
    notes: '[焼き鳥・木屋町] 木屋町の明るく気軽な焼き鳥店。2本300円ほどの炭火の串、ふわふわのだし巻き、3種のつくねを朝5時まで。2,000〜4,000円ほど。',
  });
}

// ================================================================ ロッカクハッテンナナ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26043281/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '25:00']);
  put({
    id: 'kyoto_rokkaku_887', name: 'ロッカクハッテンナナ (Rokkaku 887)', category: 'OMNI',
    lat: 35.007596, lng: 135.770656, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pizza, pasta, baguette toasts and fried dishes are wheat; ask about the rest (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: caviar, horse tartare, lamb tsukune, pork ragù pizza (2025–26 reviews).',
    hours_raw: 'Daily 17:00–01:00; hours may change (Tabelog). Bookings taken (Tabelog). JCB cards and e-money; no QR (Tabelog). Standing only, about 7–8 places at the counter; non-smoking (Tabelog; October 2025 review). Down a corridor on the 1st floor of the 都会館 building on Kiyamachi, 4 min from Hankyu Kawaramachi (Tabelog; March 2026 review).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi, between Sanjo and Shijo — 4 min from Kawaramachi Stn',
    cuisine: 'Standing Italian wine bar with ethnic twists: caviar (sometimes an opening bite), shrimp pâté in a stuffed chicken wing ¥600, lamb tsukune ¥900, nut pasta to finish ¥1,200 (March 2026); shrimp tempura with sweet chili, thick shiitake cutlet, yodare chicken, lamb tsukune masala (October 2025); horse tartare on buttered baguette, caviar and cream cheese baguette, burrata with Red Madonna (April 2026); "Buldog Pork Mexiko" pizza with pork ragù and chimichurri mayo, spinach quiche (October 2026); spring rolls, pizza and pasta; champagne ¥900, wine by the glass ¥600–900, white, red and orange (2025–26 reviews)',
    website: null, gmaps: gm('Rokkaku 887 京都 木屋町'), menu_url: null,
    notes: '[Standing Italian bar · Kiyamachi] A tiny, dim standing counter down a Kiyamachi corridor where the chef of ricetta 8.7 cooks inventive small plates — horse tartare toast, lamb tsukune, caviar, pizzas and pasta — with a sommelier\'s wines by the glass, until 1 am. About ¥4,000–8,000.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Opened 30 June 2025 (Tabelog). A standing bar from the chef of ricetta 8.7 in Karasuma Oike (March and April 2026 reviews), cooking in front of guests with a steam oven (March and April 2026 reviews). A sommelier picks wines (August 2026 review).',
      philosophy: null,
      specialty: 'Creative Italian small plates with wine.',
      anecdotes: [
        { text: 'An April 2026 diner who doubted white wine was guided to a glass to suit, and insisted the horse yukhoe on buttered toast was one each, not for sharing.', source: R + 'B527633117/' },
        { text: 'A March 2026 diner on a business trip found a young crowd drinking alone and an owner who was fun to talk to.', source: R + 'B528042018/' },
        { text: 'A February 2026 return visitor liked the pizza but found the new staff inexperienced compared with the first visit in October 2025.', source: R + 'B515502585/' },
        { text: 'An October 2026 diner came back for the "Buldog Pork Mexiko" pizza of pork ragù, red cheddar, spinach salsa and chimichurri mayo.', source: R + 'B537486066/' },
      ],
      japanese_sources_summary: '食べログ: ロッカクハッテンナナ (Rokkaku 887)、イタリアン・立ち飲み、中京区材木町184 都会館1F、阪急河原町駅から徒歩4分、毎日 17:00〜翌1:00 (変更の可能性あり)、予約可、カード (JCB)・電子マネー可、QR 不可、禁煙、立ち飲み、2025年6月30日オープン。口コミ (2025〜2026年、英語): Karasuma Oike の ricetta 8.7 のシェフの立ち飲み、キャビア、海老のパテ600円、ラムのつくね900円、締めのナッツのパスタ1,200円、シャンパン900円、グラスワイン600〜900円、馬肉のタルタルのバゲット、ピザとパスタ、ソムリエ。',
      confidence: 'medium', sources: [TB, R + 'B515464499/', R + 'B515502585/', R + 'B524964111/', R + 'B526775176/', R + 'B527139913/', R + 'B527633117/', R + 'B528042018/', R + 'B533073351/', R + 'B535780071/', R + 'B537486066/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Standing counter; staff help choose wine.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区材木町184 都会館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007628, 135.770617), 4.5 m from kyoto_tamago_ga_saki_ka and 6.8 m from kyoto_imo_matsu_kita_bekkan — moved 5 m south-east to (35.007596, 135.770656), 6.4 m clearance; cross-checked: GSI 京都府京都市中京区材木町184番地 (lot) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524964111/'],
    price_note: 'Prices from a March 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Shrimp pâté', '¥600', 'Small plates', 'ask', 'no', 'March 2026 review.', 'shrimp_pate'),
      it('', '', 'Lamb tsukune', '¥900', 'Small plates', 'ask', 'no', 'March 2026 review.', 'lamb_tsukune'),
      it('', '', 'Pasta to finish', '¥1,200', 'Pasta', 'no', 'ask', 'March 2026 review.', 'pasta'),
      it('', '', 'Champagne (glass)', '¥900', 'Drinks', 'ask', 'ask', 'March 2026 review.', 'champagne'),
      it('', '', 'Wine by the glass', '¥600–900', 'Drinks', 'ask', 'ask', 'March 2026 review.', 'wine'),
    ] }, {
    cuisine: 'エスニックの工夫を加えた立ち飲みのイタリアンとワイン: キャビア、手羽先に詰めた海老のパテ600円、ラムのつくね900円、締めのナッツのパスタ1,200円 (2026年3月)、海老の天ぷらのスイートチリ、厚切りしいたけのカツ、よだれ鶏、ラムのつくねのマサラ (2025年10月)、馬肉のタルタルのバゲット、キャビアとクリームチーズのバゲット、ブッラータ (2026年4月)、豚のラグーとチミチュリマヨの "Buldog Pork Mexiko" ピザ、ほうれん草のキッシュ (2026年10月)、春巻き、ピザ、パスタ、シャンパン900円、グラスワイン600〜900円 (2025〜26年の口コミ)',
    neighborhood: '木屋町、三条と四条の間。河原町駅から徒歩4分',
    gf_detail: '要確認。ピザ、パスタ、バゲット、揚げ物は小麦 (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。キャビア、馬肉のタルタル、ラムのつくね、豚のラグーのピザ (2025〜26年の口コミ)。',
    notes: '[立ち飲みイタリアン・木屋町] 木屋町の通路の奥の小さな立ち飲みカウンター。ricetta 8.7 のシェフが馬肉のタルタルのトースト、ラムのつくね、キャビア、ピザ、パスタなど工夫のある小皿を作り、ソムリエのグラスワインと深夜1時まで。4,000〜8,000円ほど。',
  });
}

// ================================================================ 肉菓子 かぎりなき福
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26042483/'; const R = TB + 'dtlrvwlst/';
  const STORE = 'https://store.kagirinakifuku.com/';
  const D = day(['18:00', '23:00']);
  put({
    id: 'kyoto_kagirinakifuku_gion', name: '肉菓子 かぎりなき福 (KAGIRINAKIFUKU)', category: 'OMNI',
    lat: 35.005058, lng: 135.773849, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Rice-mochi daifuku, but the meat fillings are soy-sauce seasoned and the soba is buckwheat-and-wheat (2025 reviews; Tabelog).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef, pork and chicken fillings (own store; 2025–26 reviews).',
    hours_raw: 'Mon–Sat 18:00–23:00 (food L.O. 22:30); closed Sundays and holidays (Tabelog). A March 2025 review gives 15:00–23:00, until sold out. Takeaway, eat-in and delivery; frozen gift boxes by mail (Tabelog; own store; December 2025 review). Cards, e-money and QR accepted (Tabelog). Non-smoking; dogs welcome; children welcome (Tabelog). 5 min from Gion-Shijo Stn (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion Sueyoshicho — 5 min from Gion-Shijo Stn',
    cuisine: '"Meat confectionery": slightly sweet mochi daifuku filled with savoury meat — 牛しぐれ ¥600, 鶏てり ¥550, 豚しょうが ¥550, a set of three ¥1,700, six ¥3,400 (own store); earlier ¥550, ¥450 and ¥500 (2025 reviews); best warmed for about 20 seconds in a microwave (July 2025); a standing counter for shigure soba with beef (Tabelog)',
    website: STORE, gmaps: gm('肉菓子 かぎりなき福 祇園'), menu_url: STORE,
    notes: '[Meat daifuku · Gion] A small Gion shop selling a new kind of daifuku: soft, slightly sweet mochi around beef shigure, ginger pork or teriyaki chicken, about ¥550–600 each, to take away or send as gifts, plus a standing counter for beef shigure soba. Open evenings.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 19 December 2024 (Tabelog; June 2025 review). Courteous owner (July 2025 review). Sells online and by subscription too (own store).',
      philosophy: '"あなたの心にかぎりなき福を" — boundless good fortune in your heart (own store).',
      specialty: 'Meat-filled daifuku.',
      anecdotes: [
        { text: 'A February 2025 passer-by bought all three — chicken teriyaki ¥450, pork ginger ¥500, beef shigure ¥550 — and liked the beef best.', source: R + 'B501866910/' },
        { text: 'A December 2025 reviewer received six frozen daifuku from relatives as a year-end gift.', source: R + 'B519848773/' },
        { text: 'Another December 2025 buyer found the microwave timing tricky and ¥600 a lot for the size.', source: R + 'B519858441/' },
      ],
      japanese_sources_summary: '食べログ: 肉菓子 かぎりなき福、大福、東山区末吉町95-5 光映会館1F、祇園四条駅から徒歩5分、月〜土 18:00〜23:00 (L.O. 22:30)、日・祝休み、カード・電子マネー・QR 可、禁煙、犬可、子ども可、テイクアウト・デリバリー、2024年12月19日オープン、立ち食いの牛しぐれのそば (紹介文、英訳)。公式ストア: 京都肉菓子 "牛しぐれ" 600円、"鶏てり" 550円、"豚しょうが" 550円、3個セット1,700円、6個セット3,400円、「あなたの心にかぎりなき福を。」。口コミ (2025〜2026年、英語): 2025年は450〜550円、15:00〜23:00 (売り切れまで、2025年3月)、電子レンジで20秒ほど温める、冷凍の贈答。',
      confidence: 'medium', sources: [TB, STORE, R + 'B501866910/', R + 'B504399386/', R + 'B507735185/', R + 'B509455469/', R + 'B514198645/', R + 'B519848773/', R + 'B519858441/', R + 'B519932821/', R + 'B526959120/', R + 'B534543333/'] },
    cultural_comfort: { level: 'none_needed', note: 'Takeaway counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区末吉町95-5 光映会館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and own online store; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.005058, 135.773871), 4.9 m from kyoto_yakiniku_gyusho_shin_gion at the same address — moved 2 m west to (35.005058, 135.773849), 6.9 m clearance; cross-checked: GSI 京都府京都市東山区末吉町95番地 (lot) 31m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [STORE],
    price_note: 'Prices from the online store, checked ' + TODAY + '; shop prices in 2025 reviews were ¥50–100 lower.', last_checked: TODAY, items: [
      it('', '', 'Beef shigure meat daifuku', '¥600', 'Meat daifuku', 'ask', 'no', 'Own store.', 'gyu_shigure'),
      it('', '', 'Chicken teriyaki meat daifuku', '¥550', 'Meat daifuku', 'ask', 'no', 'Own store.', 'tori_teri'),
      it('', '', 'Ginger pork meat daifuku', '¥550', 'Meat daifuku', 'ask', 'no', 'Own store.', 'buta_shoga'),
      it('', '', 'Set of three', '¥1,700', 'Meat daifuku', 'ask', 'no', 'Own store; August 2026 review.', 'set3'),
    ] }, {
    cuisine: '「肉菓子」: ほんのり甘い餅で肉を包んだ大福。牛しぐれ600円、鶏てり550円、豚しょうが550円、3個セット1,700円、6個セット3,400円 (公式ストア)。2025年は550円・450円・500円 (2025年の口コミ)。電子レンジで20秒ほど温めると良い (2025年7月)。立ち食いの牛しぐれのそば (食べログ)',
    neighborhood: '祇園末吉町。祇園四条駅から徒歩5分',
    gf_detail: '要確認。餅の大福だが、肉の具は醤油味で、そばは小麦を含む可能性 (2025年の口コミ、食べログ)。',
    vegan_detail: 'ヴィーガン不可。牛・豚・鶏の具 (公式ストア、2025〜26年の口コミ)。',
    notes: '[肉の大福・祇園] 祇園の小さな店の新しい大福。やわらかくほんのり甘い餅で牛しぐれ、豚しょうが、鶏てりを包み、1個550〜600円。持ち帰りや贈答に。立ち食いの牛しぐれそばも。夜の営業。',
  });
}

// ================================================================ 焼鳥 かなざわ 六角店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26027921/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'http://www.seseri.jp/rokkaku/index.html';
  const D = day(['12:00', '22:30']);
  put({
    id: 'kyoto_yakitori_kanazawa_rokkaku', name: '焼鳥 かなざわ 六角店 (Yakitori Kanazawa Rokkaku)', category: 'OMNI',
    lat: 35.007771, lng: 135.767241, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Mostly salt-grilled skewers, but tare skewers, kara-age and rice bowls are not (2019–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken yakitori, wagyu and pork skewers (2019–2026 reviews).',
    hours_raw: 'Daily 12:00–22:30 (L.O. 22:00) (Tabelog); Tabelog adds that lunch service has ended, but an April 2026 diner had a lunch rice bowl at 2 pm. Bookings taken; when busy, about 90 minutes a visit (Tabelog; September 2019 review). One drink per person (Tabelog Japanese original 「ワンドリンク制」). Cards (Visa, Master), e-money and QR (Tabelog). 11 seats — 7 at the counter, a table of 4; non-smoking; takeaway (Tabelog). Near UNIQLO Kawaramachi, 7 min from Hankyu Kawaramachi (Tabelog; April 2026 review).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Rokkaku, near Shinkyogoku — 7 min from Kawaramachi Stn',
    cuisine: 'Yakitori of Kyo Akajidori chicken slaughtered each morning, grilled over Kishu binchotan (Tabelog): mostly salt, with seseri, liver, gizzard, heart, tsukune, Kyoto pork and black wagyu skewers (July 2022); an omakase of five skewers ¥1,300, oboro Kyoto tofu ¥500 (September 2021); free-range chicken ¥280, wagyu ¥380, tsukune ¥250, camembert bacon ¥380, cabbage with negi-shio sauce ¥450 (September 2019); yakitori and kara-age rice bowls with chicken soup at lunch (April 2026)',
    website: WEB, gmaps: gm('焼鳥 かなざわ 六角店'), menu_url: null,
    notes: '[Yakitori · Rokkaku] A tiny 11-seat yakitori counter near Shinkyogoku grilling Kyoto red jidori over binchotan, mostly with salt; omakase sets of skewers, and rice bowls at midday. Third shop of a Yamashina yakitori. About ¥3,000–5,000.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 1 September 2016 as the third shop of 焼鳥かなざわ of Yamashina (Tabelog). A man grilling with two young staff (September 2021 review); a friendly owner (July 2022 review).',
      philosophy: 'Morning-fresh Kyo Akajidori, raised about 150 days on pesticide-free feed, over Kishu binchotan (Tabelog).',
      specialty: 'Salt-grilled Kyo Akajidori.',
      anecdotes: [
        { text: 'A Yamashina regular who heard of the new city branch (September 2019) was asked to keep to about 90 minutes when busy, and watched it fill up.', source: R + 'B420064090/' },
        { text: 'In September 2021 a diner who had found it too crowded to enter alone finally slipped in for the five-skewer omakase and the seseri.', source: R + 'B440476788/' },
        { text: 'An April 2026 holiday visitor got a seat at 2 pm for the yakitori and kara-age rice bowls with a rich chicken soup.', source: R + 'B526059452/' },
      ],
      japanese_sources_summary: '食べログ: 焼鳥 かなざわ 六角店、焼き鳥・居酒屋・鶏料理、中京区桜之町406-21 白鳥ビル、阪急河原町駅から徒歩7分、毎日 12:00〜22:30 (L.O. 22:00)、ランチ営業は終了の記載、予約可、ワンドリンク制、カード (VISA・Master)・電子マネー・QR 可、11席 (カウンター7、テーブル4)、禁煙、テイクアウト、2016年9月1日オープン、Yamashina の「焼鳥かなざわ」の3号店、朝びきの Kyo Akajidori をKishu の備長炭で (紹介文、英訳)。口コミ (2018〜2026年、英語): 塩焼き中心、せせり、レバー、砂肝、ハツ、つくね、京都の豚、黒毛和牛、おまかせ5本1,300円、おぼろ豆腐500円、混雑時は90分ほど、昼の焼き鳥丼と唐揚げ丼と鶏のスープ (2026年4月)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B355810779/', R + 'B420064090/', R + 'B433438698/', R + 'B440476788/', R + 'B452541670/', R + 'B469537303/', R + 'B519757711/', R + 'B523915612/', R + 'B526059452/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; many overseas guests (August 2023 review).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区桜之町406-21 白鳥ビル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB} (35.007771, 135.767241); cross-checked: GSI 京都府京都市中京区桜之町406番地 (lot) 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B440476788/', R + 'B420064090/'],
    price_note: 'Prices from September 2019 and September 2021 reviews — likely out of date.', last_checked: TODAY, items: [
      it('', '', 'Omakase, five skewers', '¥1,300', 'Yakitori', 'ask', 'no', 'September 2021 review.', 'omakase5'),
      it('', '', 'Oboro Kyoto tofu', '¥500', 'Plates', 'ask', 'ask', 'September 2021 review.', 'oboro_tofu'),
      it('', '', 'Tsukune (tare)', '¥250', 'Yakitori', 'no', 'no', 'September 2019 review.', 'tsukune'),
      it('', '', 'Black wagyu skewer (salt)', '¥380', 'Yakitori', 'ask', 'no', 'September 2019 review.', 'wagyu'),
    ] }, {
    cuisine: '朝びきの Kyo Akajidori をKishu の備長炭で焼く焼き鳥 (食べログ): 塩焼き中心、せせり、レバー、砂肝、ハツ、つくね、京都の豚、黒毛和牛 (2022年7月)、おまかせ5本1,300円、おぼろ豆腐500円 (2021年9月)、地鶏280円、和牛380円、つくね250円、カマンベールのベーコン巻き380円、キャベツのねぎ塩だれ450円 (2019年9月)、昼は焼き鳥丼と唐揚げ丼に鶏のスープ (2026年4月)',
    neighborhood: '六角通、新京極の近く。河原町駅から徒歩7分',
    gf_detail: '要確認。塩焼きの串が中心だが、たれの串、唐揚げ、丼は不可 (2019〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏の焼き鳥、和牛や豚の串 (2019〜2026年の口コミ)。',
    notes: '[焼き鳥・六角] 新京極近くの11席の小さな焼き鳥カウンター。Kyo Akajidori を備長炭で焼き、塩が中心。おまかせの串のセット、昼は丼も。Yamashina の焼き鳥店の3号店。3,000〜5,000円ほど。',
  });
}

save();
