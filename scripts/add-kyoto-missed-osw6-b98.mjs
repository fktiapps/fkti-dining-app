// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 98.
//   - skip 26029204 京都清水寺 ちぎりや (thin)
//   - skip 26036818 LAWSON 東山三条店 (chain)
//   - skip 26017420 鍵長 (retail food shop; no review since 2024)
//   + 雲ノ茶 清水三年坂店 KUMONOCHA (cloud-shaped matcha mousse café on Sannenzaka) — rest
//   + 七味家本舗 (shichimi shop founded in the Meireki era, takeaway; Greg 11-08 back-fill ruling) — rest
//   + てっぱちチキン (karaage izakaya off Kawaramachi-Marutamachi; dogs welcome inside) — rest
//   - skip 26005948 豆政 本店 (five or more same-name shops; earlier ruling 26020288)
//   - skip 26023516 聖護院八ツ橋 岩月堂清水店 (retail food shop; branch of a multi-shop yatsuhashi maker)
//   + 藝術喫茶いとゆふ (gallery café of a Kyoto pottery brand near Higashi Honganji; vegan, gluten-free tiramisu) — rest
//   Rest tier, nearest-first from `next rest 2000`. Every brand checked against queue-status.jsonl, the THAN brand list
//   (than.co.jp/brands, read 2026-11-08) and the 株式会社WILL ruling (26043489): no THAN or WILL matches; 豆政 ruled (26020288).
//   Same-name counts (2026-11-08): KUMONOCHA — Tabelog lists open shops at Kiyomizu Sannenzaka, Bukkoji and Arashiyama (Kumo no
//   Cha Cafe) in Kyoto and Shibuya 109 in Tokyo; Gion Minamiza and Shijo Karasuma are on hold and four others closed. Four open,
//   below the five-shop line, so drafted with the count flagged. 七味家本舗, てっぱちチキン, いとゆふ — one each.
//   七味家本舗: shop site 「明暦年間の創業以来」, 「三百有余年」 and 「一子相伝の味」 — a famous old shop with a sourced founding era,
//   drafted takeaway-only under the 11-08 back-fill ruling.
//   None of the drafted shops is in data/kyoto.json.
//   Charges (Tabelog, Japanese originals): いとゆふ 「各自ワンドリンクオーダー必須キャッシュレスオンリー（現金払い不可）」; others none listed.
//   No halal claims; no owner deaths; single-review remarks about other diners left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-98');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26029204', 'thin: 京都清水寺 ちぎりや is a takeaway shumai-skewer stall with two short 2025–26 Tabelog reviews (April 2025, March 2026) and no listed hours — not enough current sourced detail to draft (https://tabelog.com/en/kyoto/A2601/A260301/26029204/).');
skip('26036818', 'chain: LAWSON convenience store (https://tabelog.com/en/kyoto/A2601/A260301/26036818/).');
skip('26017420', 'retail food shop (Greg 11-07 ruling) and thin: 鍵長 is a takeaway wagashi shop with no Tabelog review since June 2024 (https://kagicho.jp/; https://tabelog.com/en/kyoto/A2601/A260201/26017420/).');
skip('26005948', 'five or more same-name shops: Tabelog lists seven 豆政 shops (same ruling as 26020288, osw6-75) (https://tabelog.com/en/kyoto/A2601/A260202/26005948/).');
skip('26023516', 'retail food shop (Greg 11-07 ruling): 聖護院八ツ橋 岩月堂清水店 is a takeaway yatsuhashi shop on the Kiyomizu approach, a branch of the 聖護院八ツ橋 maker (reviews call it the 聖護院八ツ橋 brand), not the main shop; no eat-in sourced (https://tabelog.com/en/kyoto/A2601/A260301/26023516/).');

// ================================================================ 雲ノ茶 清水三年坂店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26037328/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://www.kumonocha.com/';
  const WD = day(['10:00', '18:00']); const WE = day(['10:00', '18:30']);
  put({
    id: 'kyoto_kumonocha_sannenzaka', name: '雲ノ茶 清水三年坂店 (KUMONOCHA)', category: 'OMNI',
    lat: 34.996603, lng: 135.780974, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the cloud mousse sits on sponge cake; kadaif in the chocolate mousse (May and September 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: mousses, cream daifuku, crème brûlée and matcha lattes (2026 reviews).',
    hours_raw: 'Mon–Fri 10:00–18:00; Saturday and Sunday 10:00–18:30 (Tabelog). Order at the entrance and collect at the counter beside it (September 2026); small, so there may be a wait — quieter near closing (February and September 2026). Device charging available (January 2026). Cards (VISA, Master, JCB, AMEX), PayPay and d Barai; no e-money (Tabelog). 26 seats: 6 downstairs, 16 upstairs, 4 in the garden (Tabelog). On Sannenzaka on the way to Kiyomizu-dera (May 2026). Opened 26 March 2022 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sannenzaka — Kiyomizu',
    cuisine: 'Matcha sweets café known for cloud-shaped mousse · cloud matcha mousse on sponge with red-bean paste, sets with a drink (March, September and October 2026) · seasonal clouds: sakura (March 2026), "Dubai chocolate" with pistachio and kadaif, double-melon (May 2026) · strawberry daifuku with white or red bean paste, hojicha cream daifuku (January and March 2026) · matcha crème brûlée (February 2026) · matcha latte, yuzu sencha, premium matcha (2026 reviews)',
    website: SITE, gmaps: gm('KUMONOCHA 清水三年坂店'), menu_url: TB,
    notes: '[Matcha sweets · Sannenzaka] A small, photogenic café on Sannenzaka, part of the KUMONOCHA brand, known for cloud-shaped matcha mousse on sponge and red bean, seasonal "cloud" sweets, strawberry daifuku and matcha crème brûlée, with seats upstairs and in a little garden. Order at the door.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog and reviews: a KUMONOCHA café on Sannenzaka, opened 26 March 2022; the brand has other shops at Bukkoji and Arashiyama and in Shibuya 109 (Tabelog search, 2026-11-08).',
      philosophy: null, specialty: 'Cloud-shaped matcha mousse.',
      anecdotes: [
        { text: 'A January 2026 regular arrived ten minutes before opening to be first in, ordered the New Year matcha latte set, and charged a phone while there.', source: R + 'B520269950/' },
        { text: 'A September 2026 visitor came just before closing to find the upstairs empty for photos, and found the cloud mousse built on sponge with matcha mousse and red bean.', source: R + 'B535816026/' },
      ],
      japanese_sources_summary: '食べログ: カフェ、東山区産寧坂松原上る入清水3-317、月〜金10:00〜18:00、土日10:00〜18:30、カード・PayPay・d払い可、電子マネー不可、26席 (1階6、2階16、庭4)、2022年3月26日オープン。口コミ (2026年1月〜10月、英語): 雲の抹茶ムース (スポンジとあんこ) のドリンクセット、季節の雲 (桜、ドバイチョコとピスタチオとカダイフ、2種のメロン)、いちご大福 (白あんかこしあん)、ほうじ茶クリーム大福、抹茶のクレームブリュレ、抹茶ラテ、柚子煎茶、上級抹茶、入口で注文して横のカウンターで受け取り、充電可、三年坂。',
      confidence: 'medium', sources: [SITE, TB, R + 'B520148110/', R + 'B520269950/', R + 'B524431287/', R + 'B525365810/', R + 'B528022393/', R + 'B529306346/', R + 'B535816026/', R + 'B537650921/'] },
    cultural_comfort: { level: 'none_needed', note: 'Order at the entrance counter and pick up beside it; the menu is pictured. Expect a short wait on busy days.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区産寧坂松原上る入清水3-317',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.996603, 135.780974); GSI matched only 京都府京都市東山区清水三丁目 (chome, no lot) 80m — approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524431287/', R + 'B537650921/'],
    price_note: 'No prices quoted in 2026 reviews; reviewers report ¥1,000–2,999 per person.', last_checked: TODAY, items: [
      it('', '', 'Cloud matcha mousse set with a drink', '', 'Sets', 'no', 'no', 'March to October 2026.', 'cloud_mousse'),
      it('', '', 'Strawberry daifuku (white or red bean paste)', '', 'Wagashi', 'ask', 'ask', 'January and March 2026.', 'ichigo_daifuku'),
      it('', '', 'Matcha crème brûlée', '', 'Desserts', 'ask', 'no', 'February 2026.', 'creme_brulee'),
    ] }, {
    cuisine: '雲の形のムースで知られる抹茶の甘味のカフェ・スポンジとあんこに雲の抹茶ムース、ドリンク付きのセット (2026年3月・9月・10月)・季節の雲: 桜 (2026年3月)、ピスタチオとカダイフの「ドバイチョコ」、2種のメロン (2026年5月)・白あんかこしあんのいちご大福、ほうじ茶クリーム大福 (2026年1月・3月)・抹茶のクレームブリュレ (2026年2月)・抹茶ラテ、柚子煎茶、上級抹茶 (2026年の口コミ)',
    neighborhood: '三年坂。清水',
    gf_detail: 'グルテンフリーではない。雲のムースの下はスポンジ、チョコのムースにカダイフ (2026年5月・9月)。',
    vegan_detail: 'ヴィーガン不可。ムース、クリーム大福、クレームブリュレ、抹茶ラテ (2026年の口コミ)。',
    notes: '[抹茶の甘味・三年坂] 三年坂の小さな写真映えするカフェ、KUMONOCHA の店。スポンジとあんこの雲の形の抹茶ムース、季節の「雲」、いちご大福、抹茶のクレームブリュレを、2階や小さな庭の席で。入口で注文。',
  });
}

// ================================================================ 七味家本舗
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26007238/'; const R = TB + 'dtlrvwlst/'; const SITE = 'http://www.shichimiya.co.jp/index.html';
  const H = day(['09:30', '17:30']);
  put({
    id: 'kyoto_shichimiya_honpo', name: '七味家本舗', category: 'OMNI',
    lat: 34.99632, lng: 135.780794, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Shichimi and sansho blends are spices (shop site); the pork buns sold at the shop are wheat (2024–26 reviews). No allergen information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The spice blends are plant-based by nature but no vegan claim is sourced; the dashi packs and the chicken-oil condiment are not vegan (shop site), and the buns contain pork.',
    hours_raw: 'Takeaway only — a spice shop, no seating (Tabelog). 9:30–17:30, varying with the season; open all year (Tabelog). Tastings before you buy (2017–21 reviews). Pork buns with the house shichimi, ¥500, sold from the shop (May 2026). Cards, e-money and QR (Tabelog). Online shop and stockists (shop site). Founded in the Meireki era (shichimiya.co.jp); the recipe is described as passed down to a single heir (「一子相伝の味」). At the meeting of Sannenzaka and Gojozaka on the way to Kiyomizu-dera (shop site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'seasonal',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sannenzaka and Gojozaka — Kiyomizu',
    cuisine: 'Shichimi togarashi maker since the Meireki era, takeaway only · house shichimi with fragrant sansho and chilli (September 2025, May 2026) · sansho and chilli powders, dashi packs, a chicken-oil condiment, a potato snack made with Calbee (shop site) · steamed pork bun with shichimi ¥500 (May 2026)',
    website: SITE, gmaps: gm('七味家本舗 清水'), menu_url: SITE,
    notes: '[Shichimi · takeaway · Kiyomizu] A spice shop at the fork of Sannenzaka and Gojozaka that has sold its own shichimi togarashi since the Meireki era — "over three hundred years", the shop says: blends heavy on sansho, chilli powders, dashi packs, and a shichimi pork bun to eat as you walk. Takeaway only. Founded in the Meireki era (shichimiya.co.jp); recipe passed to a single heir, per the shop site.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per the shop site: 「明暦年間の創業以来」 — founded in the Meireki era, "over three hundred years" (三百有余年), the recipe kept as 「一子相伝の味」, passed down to a single heir.',
      philosophy: 'Per the shop site: preserving a flavour passed to a single heir.', specialty: 'House shichimi togarashi.',
      anecdotes: [
        { text: 'A September 2025 buyer grew up with this shop’s shichimi — the one always kept at home by the reviewer’s mother — and loves it on udon.', source: R + 'B514214234/' },
        { text: 'A May 2026 visitor ate the ¥500 pork bun with a shake of the house shichimi after visiting Kiyomizu-dera.', source: R + 'B527986775/' },
      ],
      japanese_sources_summary: '公式サイト: 明暦年間の創業以来、三百有余年、一子相伝の味、産寧坂・五条坂の交わる場所、七味・一味・山椒、だしパック、鶏油の調味料、カルビーと作ったポテトのお菓子、オンラインショップ。食べログ: その他、東山区清水2-221、9:30〜17:30 (季節により変更)、年中無休、持ち帰りのみ、カード・電子マネー・QR 可。口コミ (2025年9月・2026年5月、英語): 山椒の香りの七味、うどんに、350年以上の老舗、七味をかけて食べる肉まん500円。',
      confidence: 'medium', sources: [SITE, TB, R + 'B514214234/', R + 'B527986775/'] },
    cultural_comfort: { level: 'none_needed', note: 'Takeaway only; ask to taste blends before buying.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区清水2-221',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop site; Tabelog reviews dated September 2025 and May 2026.' },
    pin_source: `Tabelog ${TB} (34.996320, 135.780794); GSI matched only 京都府京都市東山区清水二丁目 (chome, no lot) 69m — approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527986775/', SITE],
    price_note: 'One price from May 2026.', last_checked: TODAY, items: [
      it('', '', 'House shichimi togarashi', '', 'Spices', 'ask', 'ask', 'Shop site; 2025–26 reviews.', 'shichimi'),
      it('', '', 'Pork bun with shichimi', '¥500', 'Snacks', 'no', 'no', 'May 2026.', 'nikuman'),
    ] }, {
    cuisine: '明暦年間からの七味唐辛子の店、持ち帰りのみ・山椒と唐辛子の香りの店の七味 (2025年9月、2026年5月)・山椒や一味、だしパック、鶏油の調味料、カルビーと作ったポテトのお菓子 (公式サイト)・七味をかけて食べる肉まん500円 (2026年5月)',
    neighborhood: '産寧坂と五条坂。清水',
    gf_detail: '要確認。七味や山椒は香辛料 (公式サイト)。店で売る肉まんは小麦 (2024〜2026年の口コミ)。アレルゲンの情報なし。',
    vegan_detail: '要確認。香辛料は植物性だが、ヴィーガンの記載はない。だしパックと鶏油の調味料はヴィーガンではなく (公式サイト)、肉まんは豚肉。',
    notes: '[七味・持ち帰り・清水] 産寧坂と五条坂が交わる場所で、明暦年間から自家の七味唐辛子を売る店 (店は「三百有余年」とする)。山椒の効いた七味、一味、だしパック、食べ歩きの七味の肉まん。持ち帰りのみ。創業は明暦年間 (shichimiya.co.jp)、店のサイトでは一子相伝の味。',
  });
}

// ================================================================ てっぱちチキン
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26039674/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '22:00']);
  put({
    id: 'kyoto_teppachi_chicken', name: 'てっぱちチキン', category: 'OMNI',
    lat: 35.015636, lng: 135.769516, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: karaage, croquettes, fried rice, soy-seasoned stir-fries (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken izakaya — karaage, chicken stir-fries, katsuo tataki (2025–26 reviews).',
    hours_raw: 'Dinner Mon–Wed, Fri, Sat 18:00–22:00; holidays and the day before 18:00–22:30; closed Thursday and Sunday; lunch from 11:30 until sold out (Tabelog). Lunch is one daily set, ¥800–850 with a free large rice, plus bento to take away from ¥500 (November 2025, January 2026); it fills quickly (November 2026). Dinner courses with all-you-can-drink, ¥4,500 (January 2026). Reservations until the day before (Tabelog). Dogs welcome inside, including the three private rooms upstairs (January 2024, January and November 2026). No cards or e-money; PayPay (Tabelog). 25 seats: a five-seat counter downstairs, private rooms upstairs (Tabelog; 2024 review). Down a narrow alley just east of Kawaramachi-Marutamachi (2024 review, November 2025).',
    hours: { 0: D, 1: D, 2: D, 4: D, 5: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi-Marutamachi, Takeyamachi',
    cuisine: 'Chicken izakaya famous for karaage · lunch daily set ¥800–850 — e.g. karaage with stir-fried chicken and eggplant (November 2025), karaage with katsuo tataki (January 2026), karaage with croquettes and two sides (June 2025) · bento to take away from ¥500 (January 2026) · dinner course with all-you-can-drink ¥4,500 (January 2026) · Korean-style rice balls (January 2025)',
    website: null, gmaps: gm('てっぱちチキン 京都'), menu_url: TB,
    notes: '[Karaage izakaya · Kawaramachi-Marutamachi] A small alley izakaya near Kawaramachi-Marutamachi known for juicy karaage: an ¥800-odd daily lunch set with free large rice and cheap bento, and ¥4,500 all-you-can-drink courses at night. Dogs are welcome inside, even in the private rooms upstairs. Closed Thursday and Sunday; PayPay or cash.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog and reviews: an izakaya opened 9 January 2023 near Kawaramachi-Marutamachi, serving chicken dishes, lunch sets and bento.',
      philosophy: null, specialty: 'Karaage.',
      anecdotes: [
        { text: 'A January 2026 family chose it for a daughter’s twentieth-birthday dinner because the dog could come inside, and had the ¥4,500 course in a private room upstairs.', source: R + 'B520702172/' },
        { text: 'A November 2025 lunch diner had the ¥800 set of karaage and stir-fried chicken with eggplant, with a free large rice.', source: R + 'B516602264/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・鶏料理、中京区末丸町278-6、夜は月火水金土18:00〜22:00、祝日と祝日の前日18:00〜22:30、木・日曜休み、昼は11:30から売り切れまで、予約は前日まで、カード・電子マネー不可、PayPay 可、25席、2023年1月9日オープン。口コミ (2025年1月〜2026年11月、英語): 唐揚げが名物、昼は日替わり定食800〜850円 (ご飯大盛り無料)、弁当500円から、夜は飲み放題付きのコース4,500円、韓国風のおにぎり、犬も店内可、2階に完全個室3室、河原町丸太町の東の路地。',
      confidence: 'medium', sources: [TB, R + 'B491346135/', R + 'B509851575/', R + 'B516602264/', R + 'B520367819/', R + 'B520702172/', R + 'B538636902/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book by the day before for dinner; bring your dog if you like. Cash or PayPay only. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区末丸町278-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.015636, 135.769516); cross-checked: GSI 京都府京都市中京区末丸町278番地 (lot) 46m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B516602264/', R + 'B520367819/', R + 'B520702172/'],
    price_note: 'Prices from November 2025 and January 2026.', last_checked: TODAY, items: [
      it('', '', 'Daily lunch set (karaage and a main)', '¥850', 'Lunch', 'no', 'no', 'January 2026; ¥800 in November 2025.', 'lunch_set'),
      it('', '', 'Bento (takeaway)', '¥500', 'Bento', 'no', 'no', 'January 2026; from ¥500.', 'bento'),
      it('', '', 'Dinner course with all-you-can-drink', '¥4,500', 'Dinner', 'no', 'no', 'January 2026.', 'course'),
    ] }, {
    cuisine: '唐揚げが名物の鶏料理の居酒屋・昼は日替わり定食800〜850円: 唐揚げと鶏となすの炒め物 (2025年11月)、唐揚げとかつおのたたき (2026年1月)、唐揚げ、コロッケ、小鉢2品 (2025年6月)・持ち帰りの弁当500円から (2026年1月)・夜は飲み放題付きのコース4,500円 (2026年1月)・韓国風のおにぎり (2025年1月)',
    neighborhood: '河原町丸太町、竹屋町',
    gf_detail: 'グルテンフリーではない。唐揚げ、コロッケ、チャーハン、醤油の炒め物 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏料理の居酒屋。唐揚げ、鶏の炒め物、かつおのたたき (2025〜2026年の口コミ)。',
    notes: '[唐揚げの居酒屋・河原町丸太町] 河原町丸太町近くの路地の小さな居酒屋。ジューシーな唐揚げが名物で、昼はご飯大盛り無料の800円台の日替わり定食と安い弁当、夜は4,500円の飲み放題付きのコース。2階の個室も含め犬も店内可。木・日曜休み、現金か PayPay。',
  });
}

// ================================================================ 藝術喫茶いとゆふ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26044312/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://itoyufu.jp/';
  const H = day(['07:30', '18:00']);
  put({
    id: 'kyoto_geijutsu_kissa_itoyufu', name: '藝術喫茶いとゆふ', category: 'OMNI',
    lat: 34.99239, lng: 135.762023, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The matcha tiramisu is described as gluten-free (March 2026); the baked cheesecake and seasonal sweets are not. No cross-contact information.',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'Some vegan options: the matcha tiramisu is described as vegan (March 2026); ask about plant milk for lattes. The baked cheesecake is not vegan.',
    hours_raw: 'Daily except Tuesday 7:30–18:00 (Tabelog). 「各自ワンドリンクオーダー必須キャッシュレスオンリー（現金払い不可）」 — one drink per person, and cashless only, no cash (Tabelog). A counter and benches beside a small gallery with changing exhibitions (March and April 2026). Closed 8–30 June 2026 for renovation (May 2026). In a renovated wooden townhouse that was a tobacco shop, near Higashi Honganji and Shoseien, about ten minutes from Kyoto Station; opened 2 February 2026 (Tabelog; February and April 2026).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Near Higashi Honganji and Shoseien — Kyoto Station',
    cuisine: 'Gallery café of the Kyoto pottery brand QUTOTEN. · matcha tiramisu ¥800 (vegan and gluten-free, March 2026) · baked cheesecake ¥850 (February and March 2026) · seasonal sweets ¥1,000 and seasonal drinks ¥1,000 (April 2026) · café latte ¥700, unsweetened matcha latte made to order, Komyo tea ¥500, blend and light-roast Tanzania coffee (2026 reviews), served in QUTOTEN. tea ware',
    website: SITE, gmaps: gm('藝術喫茶いとゆふ 京都'), menu_url: SITE,
    notes: '[Gallery café · near Higashi Honganji] A quiet gallery café opened in 2026 by the Kyoto pottery brand QUTOTEN. in an old tobacco shop near Higashi Honganji: matcha lattes and coffee in its own tea ware, a vegan, gluten-free matcha tiramisu, baked cheesecake and seasonal sweets, with art and bonsai on show. Cashless only; one drink each; closed Tuesday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog and reviews: a gallery café produced by the Kyoto pottery brand QUTOTEN., opened 2 February 2026 in a renovated wooden former tobacco shop; the name refers to spider threads shimmering in the air (February 2026).',
      philosophy: null, specialty: 'Matcha latte in house tea ware; matcha tiramisu.',
      anecdotes: [
        { text: 'A March 2026 visitor watched the unsweetened matcha latte made to order and noted the small matcha tiramisu is vegan and gluten-free.', source: R + 'B524686786/' },
        { text: 'A March 2026 guest came for an exhibition of bonsai-like works and had a matcha latte in a QUTOTEN. collaboration cup.', source: R + 'B524987912/' },
      ],
      japanese_sources_summary: '食べログ: カフェ、下京区天神町396-4、火曜以外7:30〜18:00、各自ワンドリンクオーダー必須、キャッシュレスのみ (現金不可)、2026年2月2日オープン。口コミ (2026年2月〜9月、英語): 京都の陶磁器ブランド QUTOTEN. のギャラリーカフェ、元たばこ屋の木造の町家を改装、ギャラリーの展示が変わる、抹茶ティラミス800円 (ヴィーガン・グルテンフリー)、ベイクドチーズケーキ850円、季節の甘味1,000円、季節のドリンク1,000円、カフェラテ700円、無糖の抹茶ラテ、Komyo tea 500円、ブレンド、タンザニアの浅煎り、カウンターとベンチ、東本願寺・渉成園の近く、京都駅から徒歩約10分、2026年6月8日〜30日は改装で休み。',
      confidence: 'medium', sources: [SITE, TB, R + 'B522212724/', R + 'B522868924/', R + 'B524404800/', R + 'B524686786/', R + 'B524787775/', R + 'B524987912/', R + 'B526101546/', R + 'B529548971/', R + 'B535760565/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Bring a card or app — no cash. One drink each. Seats are a counter and benches, so it can be close. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区天神町396-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop site; Tabelog reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (34.992390, 135.762023); cross-checked: GSI 京都府京都市下京区天神町396番地 (lot) 49m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524787775/', R + 'B526101546/', R + 'B524686786/'],
    price_note: 'Prices from March and April 2026.', last_checked: TODAY, items: [
      it('', '', 'Matcha tiramisu (vegan, gluten-free)', '¥800', 'Sweets', 'ask', 'vegan', 'March and April 2026.', 'matcha_tiramisu'),
      it('', '', 'Baked cheesecake', '¥850', 'Sweets', 'no', 'no', 'March 2026.', 'cheesecake'),
      it('', '', 'Café latte', '¥700', 'Drinks', 'ask', 'ask', 'March and April 2026.', 'latte'),
      it('', '', 'Komyo tea', '¥500', 'Drinks', 'ask', 'ask', 'March 2026.', 'komyo_tea'),
    ] }, {
    cuisine: '京都の陶磁器ブランド QUTOTEN. のギャラリーカフェ・抹茶ティラミス800円 (ヴィーガン・グルテンフリー、2026年3月)・ベイクドチーズケーキ850円 (2026年2月・3月)・季節の甘味1,000円、季節のドリンク1,000円 (2026年4月)・カフェラテ700円、注文してから点てる無糖の抹茶ラテ、Komyo tea 500円、ブレンドやタンザニアの浅煎り (2026年の口コミ)、QUTOTEN. の器で',
    neighborhood: '東本願寺・渉成園の近く。京都駅',
    gf_detail: '要確認。抹茶ティラミスはグルテンフリーとの記載 (2026年3月)。ベイクドチーズケーキや季節の甘味は違う。交差接触の情報なし。',
    vegan_detail: 'ヴィーガンの選択肢あり: 抹茶ティラミスはヴィーガン (2026年3月)。ラテの植物性ミルクは要確認。ベイクドチーズケーキはヴィーガンではない。',
    notes: '[ギャラリーカフェ・東本願寺の近く] 京都の陶磁器ブランド QUTOTEN. が2026年に元たばこ屋で開いた静かなギャラリーカフェ。自社の器で抹茶ラテやコーヒー、ヴィーガンでグルテンフリーの抹茶ティラミス、ベイクドチーズケーキ、季節の甘味を、展示の作品や盆栽とともに。キャッシュレスのみ、ワンドリンク制、火曜休み。',
  });
}

save();
