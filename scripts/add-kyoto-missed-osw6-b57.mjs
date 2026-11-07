// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 57.
//   + 抹茶カフェ 宇治久兵衛 京都河原町店 Matcha Cafe Uji Kyubei (matcha espuma drinks, kakigori and soft serve, Rokkaku) — rest
//   + ハロードーリィ Hello Dolly (Pontocho jazz bar with records and a Kamo river window) — rest
//   + 先斗町 紫水 Pontocho Shisui (obanzai and hot-pot courses over the Kamo river) — rest
//   + 居酒屋 まもりや Izakaya Mamoriya (family-run late izakaya by Gion-Shijo) — rest
//   - skip 26043436 かきだ鮨 京都四条河原町本店 (chain)
//   Rest tier, nearest-first from `next rest 2000`.
//   Same-name counts first (2026-11-07): 宇治久兵衛 — two (Kyoto and Fuji-Q Highland); a March 2026 review calls it a new
//   concept from a Kyoto matcha shop; no large operator found. ハロードーリィ — one in Kyoto. 紫水 — one. まもりや — one.
//   None is in data/kyoto.json. Hello Dolly and 紫水 share the lot 松本町161 (7.7 m apart) — above 5 m, no offset.
//   Service charges per Tabelog: none listed for any of the four. No halal claims; no owner deaths.
//   Other diners: several reviews of 紫水 (September 2025, October 2026) and of まもりや (November 2023, March 2024) describe a
//   mostly overseas clientele — summarised and attributed in cultural_comfort; single remarks left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-57');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26043436', 'chain: Kakida Sushi — Tabelog lists Kakida Sushi in Shinjuku (main), Shiodome, Shibuya and Marunouchi plus a "Hanare" shop, besides this Kyoto Shijo Kawaramachi shop (https://tabelog.com/en/rstLst/?sw=%E3%81%8B%E3%81%8D%E3%81%A0%E9%AE%A8).');

// ================================================================ 抹茶カフェ 宇治久兵衛
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26040868/'; const R = TB + 'dtlrvwlst/';
  const M = day(['12:20', '21:00']); const H = day(['12:30', '21:00']);
  put({
    id: 'kyoto_matcha_cafe_uji_kyubei', name: '抹茶カフェ 宇治久兵衛 京都河原町店 (Matcha Cafe Uji Kyubei)', category: 'OMNI',
    lat: 35.005972, lng: 135.767436, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Matcha lattes, kakigori and soft serve, with shiratama and a Mont Blanc topping (2025–26 reviews); no gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Matcha drinks can be ordered unsweetened (May 2026); lattes, cream and soft serve contain dairy (2025–26 reviews).',
    hours_raw: 'Monday 12:20–21:00; Tue–Sun and holidays 12:30–21:00 (Tabelog). No reservations (Tabelog). Cards, e-money and QR incl. PayPay (Tabelog). 26 seats upstairs, with counter seating; take-away downstairs (Tabelog; November 2025; May 2026). Non-smoking; wheelchair accessible (Tabelog). On Rokkaku near Teramachi, 4 min from Kyoto-Kawaramachi (Tabelog). Opened 5 March 2024 (Tabelog).',
    hours: { 0: M, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Rokkaku, near Teramachi and Nishiki Market — Kyoto-Kawaramachi',
    cuisine: 'Stone-milled matcha drinks and sweets, open into the evening (2025–26 reviews) · matcha foam latte with a mousse-like espuma ¥800 (March 2026); unsweetened matcha latte (May 2026) · foam matcha parfait; matcha kakigori with matcha cream and soft serve (October 2025; August 2026) · espuma soft serve with shiratama and red bean (December 2025) · matcha Mont Blanc ice cream (January 2026) · sorbet (October 2026)',
    website: null, gmaps: gm('抹茶カフェ 宇治久兵衛 京都河原町'), menu_url: TB,
    notes: '[Matcha café · Rokkaku near Nishiki, open into the evening] A two-floor matcha stand and café a few minutes from Nishiki Market, serving stone-milled matcha as a foamy espuma latte, fluffy matcha kakigori, soft serve with shiratama and red bean, and Mont Blanc ice cream — sweet or unsweetened, to take away or upstairs. Open until 21:00 daily.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a matcha café and soft-serve shop opened in March 2024, with a second shop at Fuji-Q Highland. A March 2026 review describes it as a new concept from a Kyoto matcha shop known for espuma kakigori.',
      philosophy: null, specialty: 'Matcha espuma; matcha kakigori.',
      anecdotes: [
        { text: 'A March 2026 regular of the parent shop\'s kakigori found its matcha espuma reborn in a ¥800 foam latte.', source: R + 'B525716820/' },
        { text: 'A May 2026 visitor planned to take away but found seats upstairs, and liked that the latte could be unsweetened.', source: R + 'B529353175/' },
        { text: 'An August 2026 visitor found the "mildly sweet" matcha still quite sweet and fairly ordinary.', source: R + 'B533738431/' },
      ],
      japanese_sources_summary: '食べログ: カフェ・ソフトクリーム、中京区東側町503-15、京都河原町駅から徒歩4分、月12:20〜21:00、火〜日・祝12:30〜21:00、予約不可、カード・電子マネー・QR 可、26席、禁煙、車椅子可、2024年3月5日オープン、富士急ハイランドにも店。口コミ (2025年10月〜2026年10月、英語): 石臼挽きの抹茶、抹茶のエスプーマのラテ800円、無糖のラテ、エスプーマの抹茶パフェ、抹茶のかき氷、白玉とあんこのソフト、抹茶モンブランのアイス、シャーベット、2階に席、持ち帰りも。',
      confidence: 'medium', sources: [TB, R + 'B515860317/', R + 'B517363725/', R + 'B519898761/', R + 'B524648714/', R + 'B525716820/', R + 'B526802789/', R + 'B529353175/', R + 'B533324925/', R + 'B533417664/', R + 'B533561165/', R + 'B533738431/', R + 'B537322581/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter downstairs; seats upstairs; ask for unsweetened matcha. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区東側町503-15',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005972, 135.767436); cross-checked: GSI 京都府京都市中京区東側町503番地 (lot) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525716820/'],
    price_note: 'One price from March 2026.', last_checked: TODAY, items: [
      it('', '', 'Matcha foam latte', '¥800', 'Drinks', 'ask', 'no', 'March 2026.', 'foam_latte'),
      it('', '', 'Matcha kakigori', '', 'Kakigori', 'ask', 'no', 'October 2025; August 2026.', 'kakigori'),
      it('', '', 'Espuma soft serve with shiratama and red bean', '', 'Soft serve', 'ask', 'no', 'December 2025.', 'soft_serve'),
    ] }, {
    cuisine: '夜まで楽しめる石臼挽きの抹茶の飲み物と甘味 (2025〜2026年の口コミ)・ムースのようなエスプーマの抹茶フォームラテ800円 (2026年3月)、無糖の抹茶ラテ (2026年5月)・エスプーマの抹茶パフェ、抹茶クリームとソフトの抹茶かき氷 (2025年10月、2026年8月)・白玉とあんこのエスプーマソフト (2025年12月)・抹茶モンブランのアイス (2026年1月)・シャーベット (2026年10月)',
    neighborhood: '六角、寺町と錦市場の近く。京都河原町駅',
    gf_detail: '要確認。抹茶ラテ、かき氷、ソフトクリーム、白玉やモンブラン (2025〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認。抹茶の飲み物は無糖にできる (2026年5月)。ラテ、クリーム、ソフトは乳製品を含む (2025〜2026年の口コミ)。',
    notes: '[抹茶カフェ・錦市場近くの六角、夜まで営業] 錦市場から数分の2階建ての抹茶の店。石臼挽きの抹茶をエスプーマのラテ、ふわふわのかき氷、白玉とあんこのソフト、モンブランのアイスで、甘いのも無糖も、持ち帰りでも2階でも。毎日21時まで。',
  });
}

// ================================================================ ハロードーリィ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26017558/'; const R = TB + 'dtlrvwlst/';
  const OF = 'http://hellodolly.hannnari.com/';
  const H = day(['18:00', '01:30']); const S = day(['18:00', '00:30']);
  put({
    id: 'kyoto_hello_dolly_pontocho', name: 'ハロードーリィ (Hello Dolly)', category: 'OMNI',
    lat: 35.00555, lng: 135.771207, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A cocktail and whisky bar (2017–26 reviews); no food information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Drinks only in the sources (2017–26 reviews).',
    hours_raw: 'Mon–Sat 18:00–1:30, Sundays and holidays 18:00–0:30; closed only on 1 January (Tabelog). Reservations accepted (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) (Tabelog). 34 seats in a long, narrow room with a window over the Kamo river at the back (Tabelog; December 2021). Smoking allowed (Tabelog). Live music at times (Tabelog; June 2024). On Pontocho north of Shijo (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho, north of Shijo — on the Kamo river',
    cuisine: 'Jazz, cocktails and whisky in an antique-filled Pontocho bar (2017–26 reviews) · seasonal fruit cocktails (September 2017) · Gimlet and other classics (June 2024) · omakase cocktails (December 2023) · no wine (September 2024)',
    website: OF, gmaps: gm('Hello Dolly 先斗町 ジャズ'), menu_url: TB,
    notes: '[Jazz bar · Pontocho, records and a river window] A long, candlelit jazz bar on Pontocho lined with records and antiques, with a window at the back onto the Kamo river at night: classic and seasonal-fruit cocktails and whisky, records played on request, and live music at times. Open every night to 1:30 (Sundays 0:30). Smoking allowed.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a bar on Pontocho with live music, closed only on New Year\'s Day. Reviews from 2017 to 2026 describe a jazz bar with records, antiques and candlelight, and a window over the Kamo river.',
      philosophy: null, specialty: 'Jazz records; cocktails.',
      anecdotes: [
        { text: 'An August 2026 visitor mentioned a favourite song in passing and the staff put the record on.', source: R + 'B537225613/' },
        { text: 'A December 2021 visitor described the night view of the Kamo river from the window at the very back.', source: R + 'B535296441/' },
        { text: 'A December 2023 visitor felt the omakase cocktail was billed differently from the menu.', source: R + 'B476553887/' },
      ],
      japanese_sources_summary: '食べログ: バー、中京区先斗町四条上ル松本町161、月〜土18:00〜翌1:30、日祝18:00〜翌0:30、1月1日のみ休み、予約可、カード可、34席、喫煙可、ライブ演奏。口コミ (2017年9月〜2026年8月、英語): ジャズ、レコード、アンティーク、キャンドル、奥の窓から鴨川の夜景、季節の果物のカクテル、ギムレット、おまかせのカクテル、ワインはない、リクエストでレコードをかけてくれる。',
      confidence: 'medium', sources: [TB, OF, R + 'B296065900/', R + 'B365692346/', R + 'B442184890/', R + 'B461072337/', R + 'B476553887/', R + 'B477434615/', R + 'B478554718/', R + 'B487362038/', R + 'B492383793/', R + 'B514421658/', R + 'B535296441/', R + 'B537225613/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ask for a window seat at the back for the river view; smoking allowed. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町四条上ル松本町161',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.005550, 135.771207); cross-checked: GSI 京都府京都市中京区松本町161番地 (lot) 11m; 先斗町 紫水 at the same lot is 7.7 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B476553887/'],
    price_note: 'Two prices from a December 2023 review.', last_checked: TODAY, items: [
      it('', '', 'Omakase cocktail', '¥1,200', 'Cocktails', 'ask', 'ask', 'December 2023.', 'omakase_cocktail'),
      it('', '', 'Seasonal fruit cocktail', '', 'Cocktails', 'ask', 'ask', 'September 2017.', 'fruit_cocktail'),
    ] }, {
    cuisine: 'アンティークに囲まれた先斗町のバーでジャズ、カクテル、ウイスキー (2017〜2026年の口コミ)・季節の果物のカクテル (2017年9月)・ギムレットなどの定番 (2024年6月)・おまかせのカクテル (2023年12月)・ワインはない (2024年9月)',
    neighborhood: '先斗町、四条の北。鴨川沿い',
    gf_detail: '要確認。カクテルとウイスキーのバー (2017〜2026年の口コミ)。料理の情報はない。',
    vegan_detail: '要確認。口コミには飲み物しか出てこない (2017〜2026年の口コミ)。',
    notes: '[ジャズバー・先斗町、レコードと川の見える窓] レコードとアンティークが並ぶ先斗町の細長いジャズバー。キャンドルの灯り、奥の窓からは夜の鴨川。定番や季節の果物のカクテル、ウイスキー、リクエストでレコードも、時にはライブも。毎晩深夜1時半まで (日曜は0時半)。喫煙可。',
  });
}

// ================================================================ 先斗町 紫水
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26039602/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['15:00', '01:00']); const WE = day(['13:00', '02:00']);
  put({
    id: 'kyoto_pontocho_shisui', name: '先斗町 紫水 (Pontocho Shisui)', category: 'OMNI',
    lat: 35.0056, lng: 135.771149, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Obanzai and hot-pot courses with tempura, grilled fu and fried rice (2023–26 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based obanzai, sashimi, wagyu, sukiyaki (2023–26 reviews).',
    hours_raw: 'Mon–Fri 15:00–1:00; Sat–Sun 13:00–2:00 (Tabelog). Reservations accepted (Tabelog). Cards, e-money and QR incl. PayPay (Tabelog). 44 seats on the second and third floors, with counter and window tables over the Kamo river and private rooms (Tabelog; 2023–26 reviews). Designated smoking area (Tabelog). All-you-can-drink courses; one 2026 visitor found no sake or wine on the drinks plan (September 2026). Tables are close together (November 2023). On Pontocho north of Shijo, 3 min from Kyoto-Kawaramachi (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho, north of Shijo — on the Kamo river',
    cuisine: 'Kyoto obanzai and hot pots with local sake (Tabelog) · courses with all-you-can-drink around ¥5,000–6,000: obanzai, sashimi, dashimaki, cubed wagyu steak, tempura, chirimen-sansho rice (October 2023; October 2026) · obanzai course with yuba, grilled fu, katsuobushi ponzu, grilled pork, tempura, fried rice and miso soup (July 2025) · sukiyaki and yuba (November 2023); oysters (August 2023) · wagyu steak at the counter (September 2026)',
    website: null, gmaps: gm('先斗町 紫水'), menu_url: TB,
    notes: '[Obanzai and hot pots · Pontocho, tables over the Kamo river] A two-floor Pontocho restaurant whose window tables and counter look straight down on the Kamo river: good-value obanzai courses with tempura, wagyu steak and rice, sukiyaki and yuba, and all-you-can-drink, at Pontocho\'s friendlier end of the price scale. Open from mid-afternoon to 1–2 am. Tables are tight.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: an izakaya and Japanese restaurant on Pontocho serving Kyoto obanzai and hot pots with local sake, with counter seats and group tables.',
      philosophy: null, specialty: 'Obanzai courses; river-view tables.',
      anecdotes: [
        { text: 'A July 2025 diner watched the sun set over the Kamo river during the obanzai course and was not hurried at last orders.', source: R + 'B510590380/' },
        { text: 'An October 2023 visitor counted obanzai, sashimi, dashimaki, steak, tempura and chirimen-sansho rice in a ¥6,000 course.', source: R + 'B473867420/' },
        { text: 'A November 2023 group found the tables so close there was no room for the dishes.', source: R + 'B482439357/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・日本料理・鍋、中京区松本町161 大國ビル 2F・3F、河原町駅から徒歩3分、月〜金15:00〜翌1:00、土日13:00〜翌2:00、予約可、カード・電子マネー・QR 可、44席、個室、分煙、飲み放題、京のおばんざいと鍋と地酒。口コミ (2023年8月〜2026年10月、英語): 鴨川を見下ろす窓際とカウンター、飲み放題付きのコース5,000〜6,000円、おばんざい、刺身、だし巻き、和牛のサイコロステーキ、天ぷら、chirimen sansho のご飯、湯葉、焼き麩、炒飯、すき焼き、牡蠣、席が狭いとの声も。複数の口コミ (2025年9月、2026年10月) で海外からの客が多いとある。',
      confidence: 'medium', sources: [TB, R + 'B469752599/', R + 'B473863026/', R + 'B473867420/', R + 'B475346460/', R + 'B482439357/', R + 'B483790965/', R + 'B490649394/', R + 'B491862759/', R + 'B510590380/', R + 'B513666140/', R + 'B536443377/', R + 'B537680584/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ask for a river-view table when booking; check which drinks the all-you-can-drink plan includes. Several reviews (September 2025, October 2026) say most guests come from overseas.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区松本町161 大國ビル 2F・3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005600, 135.771149); cross-checked: GSI 京都府京都市中京区松本町161番地 (lot) 19m; Hello Dolly at the same lot is 7.7 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B473867420/', R + 'B537680584/'],
    price_note: 'Course prices from October 2023 and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Course with all-you-can-drink', '¥5,000', 'Courses', 'ask', 'no', 'October 2026.', 'course_nomihodai'),
      it('', '', 'Course (obanzai to rice)', '¥6,000', 'Courses', 'ask', 'no', 'October 2023.', 'course'),
      it('', '', 'Sukiyaki', '', 'Hot pots', 'ask', 'no', 'November 2023.', 'sukiyaki'),
    ] }, {
    cuisine: '京のおばんざいと鍋を地酒と (食べログ)・飲み放題付きのコース約5,000〜6,000円: おばんざい、刺身、だし巻き、和牛のサイコロステーキ、天ぷら、chirimen sansho のご飯 (2023年10月、2026年10月)・湯葉、焼き麩、かつお節のポン酢、焼いた豚、天ぷら、炒飯、味噌汁のおばんざいのコース (2025年7月)・すき焼きと湯葉 (2023年11月)、牡蠣 (2023年8月)・カウンターで和牛のステーキ (2026年9月)',
    neighborhood: '先斗町、四条の北。鴨川沿い',
    gf_detail: '要確認。天ぷら、焼き麩、炒飯もあるおばんざいと鍋のコース (2023〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。出汁のおばんざい、刺身、和牛、すき焼き (2023〜2026年の口コミ)。',
    notes: '[おばんざいと鍋・先斗町、鴨川を見下ろす席] 窓際の席とカウンターから鴨川を真下に見る先斗町の2フロアの店。天ぷら、和牛のステーキ、ご飯までのお得なおばんざいのコース、すき焼きや湯葉、飲み放題も。先斗町では手頃な価格帯。昼過ぎから深夜1〜2時まで。席は狭め。',
  });
}

// ================================================================ 居酒屋 まもりや
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26014858/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '03:00']);
  put({
    id: 'kyoto_izakaya_mamoriya', name: '居酒屋 まもりや (Izakaya Mamoriya)', category: 'OMNI',
    lat: 35.001843, lng: 135.771695, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A long izakaya menu with many fried dishes, sashimi, yakitori and omurice (2023–26 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, fried shrimp, yakitori, steak, yellowtail collar (2023–26 reviews).',
    hours_raw: 'Mon–Sat 17:00–3:00; closed Sunday; hours may change (Tabelog). Reservations accepted and advised — often full (Tabelog; January and November 2024). Cards (JCB, AMEX, Diners) and QR; no e-money (Tabelog). 42 seats: a counter of 10 and tables (Tabelog). Smoking allowed (Tabelog). Second floor, by the elevator, right outside Keihan Gion-Shijo exit 1, diagonally opposite Donguri Hall (Tabelog; January and March 2024).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Miyagawa-suji, by Keihan Gion-Shijo exit 1',
    cuisine: 'A family-run Showa-style izakaya with a long, hearty menu (2023–24 reviews) · thick five-kind sashimi platter (November 2023; March 2026) · fried shrimp, yakitori, steak on a hot stone (January 2024; November 2023) · meat tartare (August 2026) · omurice, roasted mushrooms, turnips (November 2023) · dashimaki and grilled yellowtail collar (March 2026) · many fried dishes (November 2024)',
    website: null, gmaps: gm('居酒屋 まもりや 祇園四条'), menu_url: TB,
    notes: '[Izakaya · Gion-Shijo, family-run and open to 3 am] A busy, Showa-feeling second-floor izakaya right by Keihan Gion-Shijo exit 1, run by a friendly family: a long menu of thick sashimi platters, fried shrimp, yakitori, hot-stone steak and meat tartare, served until 3:00. Book ahead — it fills up. Smoking allowed; closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Family (unnamed) running the izakaya (June 2023)'], origin: null,
      background: 'Per Tabelog: an izakaya on Miyagawa-suji by Gion-Shijo station. A June 2023 regular describes it as run by a friendly family.',
      philosophy: null, specialty: 'Sashimi platter; fried dishes.',
      anecdotes: [
        { text: 'A January 2024 visitor was surprised to find it just steps from Keihan Gion-Shijo exit 1, on the second floor.', source: R + 'B477949312/' },
        { text: 'A November 2024 group cancelled the yakitori after a long wait and wished slow dishes were flagged.', source: R + 'B496017187/' },
        { text: 'An August 2026 traveller called it the best meal of the Kyoto trip, for the meat tartare and sashimi platter.', source: R + 'B534477977/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋、東山区宮川筋2-239 2F、京阪祇園四条駅から徒歩3分、阪急河原町駅から徒歩5分、月〜土17:00〜翌3:00、日曜休み、予約可、カード (JCB、AMEX、Diners)・QR 可、42席 (カウンター10、テーブル32)、喫煙可。口コミ (2023年6月〜2026年8月、英語): 家族で営む、昭和の雰囲気、刺身5種盛り、エビフライ、焼鳥、石焼きのステーキ、肉のタルタル、オムライス、焼ききのこ、かぶ、だし巻き、ぶりかまの焼き物、揚げ物が多い、満席のことも、料理が遅いとの声も。複数の口コミ (2023年11月、2024年3月) で海外からの客が多いとある。',
      confidence: 'medium', sources: [TB, R + 'B458229534/', R + 'B477949312/', R + 'B478903947/', R + 'B479284309/', R + 'B482341990/', R + 'B485450204/', R + 'B491952008/', R + 'B495050746/', R + 'B496017187/', R + 'B507765594/', R + 'B524500351/', R + 'B534477977/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; take the elevator to the second floor; smoking allowed. Several reviews (November 2023, March 2024) say many guests come from overseas.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区宮川筋2-239 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.001843, 135.771695); cross-checked: GSI 京都府京都市東山区宮川筋二丁目239番地 (lot) 57m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524500351/'],
    price_note: 'Sashimi platter over ¥2,000 (March 2026); no other prices found.', last_checked: TODAY, items: [
      it('', '', 'Assorted sashimi (five kinds)', 'over ¥2,000', 'Sashimi', 'ask', 'no', 'March 2026.', 'sashimi'),
      it('', '', 'Steak on a hot stone', '', 'Meat', 'ask', 'no', 'November 2023.', 'ishiyaki_steak'),
      it('', '', 'Meat tartare', '', 'Meat', 'ask', 'no', 'August 2026.', 'tartare'),
    ] }, {
    cuisine: '家族で営む昭和の居酒屋の品数の多いボリュームある料理 (2023〜2024年の口コミ)・厚切りの刺身5種盛り (2023年11月、2026年3月)・エビフライ、焼鳥、石焼きのステーキ (2024年1月、2023年11月)・肉のタルタル (2026年8月)・オムライス、焼ききのこ、かぶ (2023年11月)・だし巻きとぶりかまの焼き物 (2026年3月)・揚げ物が多い (2024年11月)',
    neighborhood: '宮川筋、京阪祇園四条駅1番出口すぐ',
    gf_detail: '要確認。揚げ物、刺身、焼鳥、オムライスなど品数の多い居酒屋 (2023〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。刺身、エビフライ、焼鳥、ステーキ、ぶりかま (2023〜2026年の口コミ)。',
    notes: '[居酒屋・祇園四条、家族で営む深夜3時までの店] 京阪祇園四条駅1番出口すぐ、昭和の雰囲気のにぎやかな2階の居酒屋。気さくな家族が営み、厚切りの刺身盛り、エビフライ、焼鳥、石焼きのステーキ、肉のタルタルを深夜3時まで。満席になるので予約を。喫煙可、日曜休み。',
  });
}

save();
