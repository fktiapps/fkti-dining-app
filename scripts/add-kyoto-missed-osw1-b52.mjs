// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 52.
//   + 花うさぎ Hana Usagi (Japanese-sweets café on the Ginkakuji approach; matcha, zenzai, anmitsu)
//   + Le temps du gout (pâtisserie-café near Chayama; made-to-order choux and Chantilly caramel)
//   + 有喜屋 京都高島屋店 Ukiya, Kyoto Takashimaya (soba house founded in Pontocho in 1929; 4-shop local group)
//   - 虎屋 京都高島屋店, 浪花古市庵 京都高島屋店, ロイヤルホスト 京都髙島屋S.C.店, おこわ米八 高島屋京都店,
//     みのりカフェ 高島屋京都店, カフェ シトラス, 田ごと 光悦舗 京都高島屋店, フランソア洋菓子店, 壱銭洋食 京都高島屋店:
//     skipped (reasons below).
//   Core list first: 26026544 and 26039720 were the last two core shops in this lane. Then the rest list
//   (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26033318 (skipped), 26040488, 26016542 (skipped),
//   26019146 (skipped), 26040518 (skipped), 26013698 (アヴァンセ — left: Tabelog's name search mixes several Avance
//   businesses, operator not established), 26019884 (skipped), 26026664 (skipped), 26022884 (skipped), 26004854 (skipped),
//   26036156 (ののの — left: invoice holder 株式会社治元, Uji, whose size I could not establish from a page I opened),
//   26032748 (skipped).
//   None of the three drafted is in data/kyoto.json by name (花うさぎ/Hana Usagi, Le temps du gout, 有喜屋/Ukiya) or
//   address (銀閣寺参道, 一乗寺地蔵本町30-3, 真町52 京都高島屋S.C. 7F).
//   Same-name count (same brand or operator only): 花うさぎ — our crawl also has cafe 花うさぎ elsewhere, no link
//   found. Le temps du gout — one shop. 有喜屋 — the official site lists four shops (先斗町本店, 清水吉晴庵, ホテルオークラ
//   京都店, 京都高島屋店) plus one noren-wake shop — a small local group, flagged; the Pontocho head shop is not in data.
//   Large-parent list checked.
//   Service charges, checked against Tabelog's Japanese original: none listed for any of the three.
//   Other-diner remarks (Greg 2026-11-06): none used.
//   Halal: no operator in this batch claims halal.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-52');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26033318', '壱銭洋食 京都高島屋店: too thin to verify — a takeaway counter in the Takashimaya food hall; Tabelog gives no hours or seats, and only two reviews (June and October 2025) are recent. The Gion head shop (壱銭洋食 本店) would be the better record');
skip('26016542', '虎屋 京都高島屋店: large parent — Toraya is on the brief’s large-parent list');
skip('26019146', '浪花古市庵 京都高島屋店: chain — Tabelog’s name search lists Naniwa Koichian shops at JR Nagoya Takashimaya, Esparu Sendai, Hankyu Umeda (honten), Umeda Hanshin, JR Kyoto Isetan, Namba Takashimaya and more');
skip('26040518', 'ロイヤルホスト 京都髙島屋S.C.店: national chain — Tabelog’s name search lists Royal Host shops from New Chitose Airport to Naha Airport, Yokohama, Nagoya and beyond');
skip('26019884', 'おこわ米八 高島屋京都店: chain — Tabelog’s name search lists Okowa Yonehachi shops in Funabashi, JR Nagoya Takashimaya, Omiya, Yokohama Takashimaya, Shin-Yokohama, Sendai and more');
skip('26026664', 'みのりカフェ 高島屋京都店: chain — Tabelog’s name search lists Minori Cafe shops at Ginza Mitsukoshi, Kyoto Porta, Sendai, Hakata and Fukuoka Tenjin, among others');
skip('26022884', 'カフェ シトラス: closed — Tabelog says the café closed on 7 February 2022');
skip('26004854', '田ごと 光悦舗 京都高島屋店: a branch of a brand already in data — 京料理 御旅町田ごと (kyoto_otabicho_tagoto), 株式会社田ごと');
skip('26032748', 'フランソア洋菓子店: annex of フランソア喫茶室 (kyoto_francois_kissa), already in data — Tabelog notes its hours are shorter than “the neighboring Francois Café”, and most of its reviews describe the café itself; too thin to verify as a separate shop');

// ================================================================ 花うさぎ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26026544/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:30', '17:00']);
  put({
    id: 'kyoto_hana_usagi_ginkakuji', name: '花うさぎ (Hana Usagi)', category: 'OMNI',
    lat: 35.027773, lng: 135.796171, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Matcha, zenzai, anmitsu, shiratama with red-bean ice cream, matcha Mont Blanc and cakes; no gluten information (2023–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Matcha, zenzai and anmitsu can be plant-based, but ice cream, lattes and cakes are dairy and nothing is described as vegan (reviews).',
    hours_raw: '10:30–17:00; days off not fixed; hours may change (Tabelog). Reservations accepted (Tabelog). Cash only (Tabelog). 20 seats, tables inside and on a terrace; pets reportedly allowed on the terrace (Tabelog; March 2024). On the approach to Ginkakuji, about 2 min from the temple (Tabelog; reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Ginkakuji approach — 2 min from the temple',
    cuisine: 'A small Japanese-sweets café on the Ginkakuji approach (reviews) · matcha, hot or as a set with sweets (2026) · zenzai with tea ¥700 (December 2022); zenzai on a snowy day (February 2026) · anmitsu and matcha set (May 2026) · shiratama with red-bean ice cream (June 2026) · matcha Mont Blanc, matcha float, café au lait, iced latte (2024) · cakes in the case (February 2026)',
    website: null, gmaps: gm('花うさぎ 銀閣寺'), menu_url: null,
    notes: '[Japanese sweets · on the Ginkakuji approach] A calm little tea café a couple of minutes from Ginkakuji, with tables inside and a terrace: matcha with anmitsu, warm zenzai, shiratama with red-bean ice cream and a matcha Mont Blanc — a good stop after the Philosopher’s Path. Cash only.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Reviewers describe a café on the path to Ginkakuji, set among the approach shops, with attentive staff (March 2024) and terrace seats (2024–2026).',
      philosophy: null, specialty: 'Matcha with Japanese sweets.',
      anecdotes: [
        { text: 'A February 2026 visitor was grateful it stayed open on a cold, snowy day, and warmed up with zenzai and matcha.', source: R + 'B523343989/' },
        { text: 'A May 2026 walker stopped in after the Philosopher’s Path from Nanzenji for anmitsu and matcha.', source: R + 'B528250136/' },
      ],
      japanese_sources_summary: '食べログ: 花うさぎ、カフェ・甘味処、左京区銀閣寺参道、10:30〜17:00、定休日は不定、予約可、現金のみ、20席。口コミ (2022〜2026年、英語): 銀閣寺の参道のカフェ、抹茶、ぜんざい (お茶付き700円、2022年12月)、あんみつと抹茶のセット、白玉と小豆アイス、抹茶のモンブラン、抹茶フロート、カフェオレ、テラス席。',
      confidence: 'low', sources: [TB, R + 'B475214756/', R + 'B482274409/', R + 'B482853862/', R + 'B484224886/', R + 'B520126591/', R + 'B523343989/', R + 'B528250136/', R + 'B529516335/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Tourist-friendly tea café; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市左京区銀閣寺参道',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.027773, 135.796171), kept: OSM Nominatim reverse-geocodes it to 銀閣寺町 on Imadegawa-dori, matching reviews that place the café on the Ginkakuji approach about 2 min from the temple; the address (銀閣寺参道) has no lot number for GSI, so the pin is marked approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B475214756/', R + 'B528250136/', R + 'B529516335/'],
    price_note: 'Only one price read, from a December 2022 review.', last_checked: TODAY, items: [
      it('ぜんざい', 'zenzai', 'Zenzai with tea', '¥700', 'Sweets', 'ask', 'ask', 'December 2022.', 'zenzai'),
      it('', '', 'Anmitsu and matcha set', '', 'Sets', 'ask', 'ask', 'May 2026.', 'anmitsu_set'),
      it('', '', 'Shiratama with red-bean ice cream', '', 'Sweets', 'ask', 'no', 'June 2026.', 'shiratama'),
    ] }, {
    cuisine: '銀閣寺の参道の小さな甘味のカフェ (口コミ)・温かい抹茶や甘味とのセット (2026年)・お茶付きのぜんざい700円 (2022年12月)。雪の日のぜんざい (2026年2月)・あんみつと抹茶のセット (2026年5月)・白玉と小豆アイス (2026年6月)・抹茶のモンブラン、抹茶フロート、カフェオレ、アイスラテ (2024年)・ショーケースのケーキ (2026年2月)',
    neighborhood: '銀閣寺の参道。寺から徒歩2分',
    gf_detail: '要確認。抹茶、ぜんざい、あんみつ、白玉と小豆アイス、抹茶のモンブラン、ケーキ。グルテンの情報はない (2023〜2026年の口コミ)。',
    vegan_detail: '要確認。抹茶、ぜんざい、あんみつは植物性のこともあるが、アイス、ラテ、ケーキには乳製品を使い、ヴィーガンと書かれたものはない (口コミ)。',
    notes: '[甘味・銀閣寺の参道] 銀閣寺から2分ほど、店内とテラスに席のある落ち着いた小さな甘味のカフェ。抹茶とあんみつ、温かいぜんざい、白玉と小豆アイス、抹茶のモンブラン。哲学の道を歩いたあとのひと休みに。現金のみ。',
  });
}

// ================================================================ Le temps du gout
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26039720/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '17:00']);
  put({
    id: 'kyoto_le_temps_du_gout', name: 'Le temps du gout', category: 'OMNI',
    lat: 35.041252, lng: 135.784879, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a pâtisserie of choux, feuilletés, tarts, madeleines, fruit cake and cookies (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: custard, caramel cream, vanilla ice cream, meringue and butter pastries (2025–2026 reviews).',
    hours_raw: '10:00–17:00; closed Thursday, with other days off announced monthly on Instagram; hours may change (Tabelog). Reservations accepted (Tabelog). Cards and e-money (Tabelog). 10 seats: 3 at the counter, one table for 3 and two for 2 (Tabelog). Baked goods to take away; the choux and Chantilly caramel are eat-in only (Tabelog; December 2025). About 6–7 min on foot from Chayama–Kyoto University of the Arts Station (Tabelog; January 2026). Opened 6 June 2023 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ichijoji, near Chayama Stn — residential street',
    cuisine: 'A pâtisserie-café of baked sweets and plated desserts with a French base (January 2026) · eat-in only: choux à la crème ¥500, filled to order; Chantilly caramel ¥500 — crisp choux with custard and caramel cream (December 2025, January 2026) · seasonal plates: black-fig feuilleté with black-beer ice cream ¥1,500 (October 2025); vacherin, lime tart, peach crêpe (2026) · baked goods: fruit cake ¥500, madeleines, canelés, langues de chat, cookies, Earl Grey and raspberry, marron glacé (2025–2026); some use Amazonian cupuaçu and macambo (January 2026) · herbal tea ¥700, chai ¥700, coffee (2025)',
    website: null, gmaps: gm('Le temps du gout 一乗寺'), menu_url: null,
    notes: '[Pâtisserie café · Ichijoji near Chayama, choux filled to order] A small, calm pâtisserie-café on a residential street, where the owner bakes in the open kitchen: crisp choux and a much-loved Chantilly caramel filled only when you order (¥500, eat-in only), seasonal plated desserts, and a case of madeleines and cakes to take home. Closed Thursday; other days off on Instagram.',
    chef_bio: { chef_name: null, roles: ['Owner-pâtissier (unnamed)'], origin: null,
      background: 'A January 2026 reviewer says the owner trained as a pastry chef in Kyoto restaurants and Tokyo pâtisseries, works from a French base without limiting the menu to French classics, and uses ingredients such as cupuaçu and macambo from the Amazon; the owner bakes in the kitchen behind the counter.',
      philosophy: 'A French base, open to influences from other countries (January 2026 review).', specialty: 'Chantilly caramel; choux à la crème.',
      anecdotes: [
        { text: 'A November 2025 regular comes back just for the Chantilly caramel and would order three if not for embarrassment.', source: R + 'B517624526/' },
        { text: 'A December 2025 visitor waited about 15 minutes at 15:00 for a seat.', source: R + 'B519913504/' },
      ],
      japanese_sources_summary: '食べログ: Le temps du gout、カフェ、左京区一乗寺地蔵本町30-3 タカシマビル1F、叡電茶山・京都芸術大学駅から335m、10:00〜17:00、木曜定休、ほかの休みはインスタグラムで告知、予約可、カード・電子マネー可、10席、テイクアウトあり、2023年6月6日オープン。口コミ (2025〜2026年、英語): 焼き菓子と季節のデザート、シュー・ア・ラ・クレーム500円、シャンティ・キャラメル500円 (イートインのみ、注文後に詰める)、黒いちじくのフイユテ1,500円、フルーツケーキ500円、ハーブティー700円、チャイ700円、ヴァシュラン、ライムのタルト、桃のクレープ、マドレーヌ、カヌレ、店主は京都のレストランと東京のパティスリーで修業、クプアスやマカンボを使う焼き菓子。',
      confidence: 'medium', sources: [TB, R + 'B515108635/', R + 'B515859164/', R + 'B517624526/', R + 'B519913504/', R + 'B520412822/', R + 'B520467996/', R + 'B520822585/', R + 'B526904106/', R + 'B532748759/', R + 'B532966548/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small café; some desserts eat-in only; check Instagram for days off.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区一乗寺地蔵本町30-3 タカシマビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.041252, 135.784879); cross-checked: GSI 京都府京都市左京区一乗寺地蔵本町30番地 (lot) 42m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B515859164/', R + 'B519913504/'],
    price_note: 'Prices from October and December 2025 reviews, tax included.', last_checked: TODAY, items: [
      it('', '', 'Chantilly caramel (eat-in only)', '¥500', 'Eat-in', 'no', 'no', 'December 2025.', 'chantilly_caramel'),
      it('', '', 'Choux à la crème (eat-in only)', '¥500', 'Eat-in', 'no', 'no', 'October 2025.', 'choux'),
      it('', '', 'Black-fig feuilleté (seasonal)', '¥1,500', 'Seasonal', 'no', 'no', 'October 2025.', 'fig_feuillete'),
      it('', '', 'Herbal tea or chai', '¥700', 'Drinks', '', '', '2025.', 'tea'),
    ] }, {
    cuisine: 'フランス菓子を土台にした焼き菓子と皿盛りのデザートのパティスリーカフェ (2026年1月)・イートインのみ: 注文を受けてから詰めるシュー・ア・ラ・クレーム500円、さくさくのシューにカスタードとキャラメルクリームのシャンティ・キャラメル500円 (2025年12月、2026年1月)・季節の皿: 黒ビールのアイスを添えた黒いちじくのフイユテ1,500円 (2025年10月)。ヴァシュラン、ライムのタルト、桃のクレープ (2026年)・焼き菓子: フルーツケーキ500円、マドレーヌ、カヌレ、ラングドシャ、クッキー、アールグレイとフランボワーズ、マロングラッセ (2025〜2026年)。アマゾンのクプアスやマカンボを使うものも (2026年1月)・ハーブティー700円、チャイ700円、コーヒー (2025年)',
    neighborhood: '一乗寺、茶山駅の近くの住宅街',
    gf_detail: 'グルテンフリーではない。シュー、フイユテ、タルト、マドレーヌ、フルーツケーキ、クッキーのパティスリー (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。カスタード、キャラメルクリーム、バニラアイス、メレンゲ、バターの菓子 (2025〜2026年の口コミ)。',
    notes: '[パティスリーカフェ・茶山近くの一乗寺、注文してから詰めるシュー] 住宅街の小さく落ち着いたパティスリーカフェ。店主がオープンキッチンで焼き、さくさくのシューや人気のシャンティ・キャラメルは注文後に詰める (500円、イートインのみ)。季節のデザートや、持ち帰りのマドレーヌやケーキも。木曜定休、ほかの休みはインスタグラムで。',
  });
}

// ================================================================ 有喜屋 京都高島屋店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26040488/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.ukiya.co.jp/';
  const H = day(['11:00', '21:30']);
  put({
    id: 'kyoto_ukiya_takashimaya', name: '有喜屋 京都高島屋店 (Ukiya, Kyoto Takashimaya)', category: 'OMNI',
    lat: 35.003539, lng: 135.768919, cuisine_type: 'udon_soba',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Juwari (100% buckwheat) soba is on the menu alongside ni-hachi (80% buckwheat, 20% wheat) (official site; August 2026), but the dipping sauces and broths are soy- and dashi-based and no gluten information is given; soba can be swapped for udon (August 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: soba served in dashi-based broth and dipping sauce (official site; reviews).',
    hours_raw: '11:00–21:30 (L.O. 20:30), every day; hours follow the store (Tabelog). No reservations on Tabelog, though a reviewer booked lunch via LINE (August 2026). Cards, e-money and QR payments (Tabelog). On the 7th floor of Kyoto Takashimaya S.C., in the Dining Garden Kyo-kairo (Tabelog). Baby chairs available (August 2026). Opened at this site 13 December 2023 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo-Kawaramachi — Kyoto Takashimaya 7F',
    cuisine: 'Kyoto soba from a house founded in Pontocho in 1929, using 100% domestic buckwheat flour; juwari and ni-hachi soba (official site; August 2026) · ni-hachi tempura zaru or seiro with salt and soba-yu (2025–2026) · tororo zaru with quail egg ¥1,600 (September 2026); Ukiya soba with whipped natto and tempura bits, a house original (August 2026) · warm soba: torinamba, yuba with egg, Kujo green onion, shrimp-tempura curry soba (2025–2026) · sets with tempura, kayaku rice and pickles; oyakodon, gyudon with egg (2024–2025) · soba miso with a sake (Kamizake 180 ml ¥1,100) (September 2026)',
    website: SITE, gmaps: gm('有喜屋 京都高島屋店'), menu_url: SITE,
    notes: '[Soba · Takashimaya 7F, a Pontocho soba house since 1929] The department-store branch of a Kyoto soba house founded in 1929, serving thin juwari and ni-hachi soba made from domestic buckwheat — cold zaru with crisp tempura, warm torinamba or yuba soba, and the house “Ukiya soba” with whipped natto. Easy to get into, open daily until 21:30.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'The official site says Ukiya was founded in Pontocho in 1929 (Showa 4) and names 三嶋吉晴, the third-generation owner, as head of its soba-making school; it lists four shops — 先斗町本店, 清水吉晴庵, ホテルオークラ京都店 and this 京都高島屋店 — plus one noren-wake shop. A reviewer notes the flour comes from Toshima Seifun (August 2026).',
      philosophy: 'Kyoto soba with real flavour — “ほんまもんの美味しさ” — through ingredients and technique (official site).', specialty: 'Juwari and ni-hachi soba; Ukiya soba.',
      anecdotes: [
        { text: 'An August 2026 family found it easy with children — baby chairs, and soba swapped for udon on request.', source: R + 'B534656723/' },
        { text: 'A September 2026 diner was served a crunchy ball of soba miso with the first sake.', source: R + 'B534882336/' },
      ],
      japanese_sources_summary: '公式サイト: 京都 有喜屋 (うきや)、昭和4年に京都先斗町で創業、100%国内産のそば粉、十割と二八、三代目 三嶋吉晴、店舗は先斗町本店・清水吉晴庵・ホテルオークラ京都店・京都高島屋店、のれんわけ店 和蕎庵。食べログ: そば・うどん・丼、下京区四条通河原町西入真町52 京都高島屋S.C. 7F ダイニングガーデン京回廊、11:00〜21:30 (L.O.20:30)、予約不可、カード・電子マネー・QR決済可、2023年12月13日オープン。口コミ (2024〜2026年、英語): 二八の天ざる・天せいろ、そば湯、とろろざる1,600円、納豆と天かすの有喜屋そば、鳥なんば、湯葉と卵とじ、九条ねぎ、えび天カレーそば、かやくご飯、親子丼、そば味噌、Kamizake 180ml 1,100円、十割そば、うどんにも替えられる、ベビーチェア。',
      confidence: 'medium', sources: [SITE, TB, R + 'B490354815/', R + 'B490362757/', R + 'B491074177/', R + 'B505574761/', R + 'B519074344/', R + 'B534009817/', R + 'B534656723/', R + 'B534882336/', R + 'B537585004/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Department-store dining floor; usually little wait; family-friendly.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区四条通河原町西入真町52 京都高島屋S.C. 7F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003539, 135.768919); cross-checked: GSI 京都府京都市下京区真町52番地 (lot) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534882336/', SITE],
    price_note: 'One dish price from a September 2026 review.', last_checked: TODAY, items: [
      it('とろろざる', 'tororo zaru', 'Tororo zaru soba with quail egg', '¥1,600', 'Cold soba', 'ask', 'no', 'September 2026.', 'tororo_zaru'),
      it('', '', 'Ni-hachi tempura zaru set', '', 'Cold soba', 'no', 'no', '2025–2026.', 'ten_zaru'),
      it('', '', 'Ukiya soba (whipped natto, tempura bits)', '', 'Soba', 'no', 'no', 'August 2026; house original.', 'ukiya_soba'),
    ] }, {
    cuisine: '昭和4年に先斗町で創業した店の京都のそば。100%国内産のそば粉で十割と二八 (公式サイト、2026年8月)・塩とそば湯で食べる二八の天ざるや天せいろ (2025〜2026年)・うずらの卵のとろろざる1,600円 (2026年9月)。納豆と天かすの店オリジナルの有喜屋そば (2026年8月)・温かいそば: 鳥なんば、湯葉の卵とじ、九条ねぎ、えび天カレーそば (2025〜2026年)・天ぷら、かやくご飯、漬物のセット、親子丼、卵の牛丼 (2024〜2025年)・日本酒 (Kamizake 180ml 1,100円) にそば味噌 (2026年9月)',
    neighborhood: '四条河原町。京都高島屋7階',
    gf_detail: '要確認。二八 (そば粉8、小麦粉2) のほかに十割 (そば粉100%) もある (公式サイト、2026年8月) が、つゆは醤油と出汁で、グルテンの情報はない。そばはうどんにも替えられる (2026年8月)。',
    vegan_detail: 'ヴィーガンではない。出汁のつゆやかけ汁のそば (公式サイト、口コミ)。',
    notes: '[そば・高島屋7階、昭和4年創業の先斗町のそば屋] 昭和4年創業の京都のそば屋の百貨店の店。国産そば粉の細い十割と二八を、さくさくの天ぷらの冷たいざるや、温かい鳥なんば、湯葉のそば、納豆の「有喜屋そば」で。待たずに入れることが多く、毎日21時半まで。',
  });
}

save();
