// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 56.
//   + 先斗町 一花 Pontocho Ichihana (Kyoto oden and obanzai counter, about 20 years in Pontocho) — rest
//   + サムギョプサルと韓国料理 コギソウル 京都河原町店 Kogi Seoul (samgyeopsal and Korean dishes, Kawaramachi) — rest
//   + さんじや 河原町本店 Sanjiya (budget take-away crepes, Takoyakushi) — rest
//   + FULL MOON 京都河原町 (pizza and drinks bar with dried flowers and old films, Shijo) — rest
//   - skip 26003686 KICHIRI 河原町 (chain)
//   - skip 26040964 LE LABO CAFE KYOTO MACHIYA (sub-brand of a large parent)
//   - skip 26025694 京つけもの もり 錦市場店 (chain)
//   Rest tier, nearest-first from `next rest 2000`.
//   Same-name counts first (2026-11-07): 一花 — one. コギソウル — four (Umeda Ohatsu Tenjin, Tennoji, Namba, Kyoto), under five and
//   no large operator found, so drafted. さんじや — one. FULL MOON 京都河原町 — one; reviews mention a sister restaurant; the Tokyo
//   "FULLMOoN" bistros are a different business. None is in data/kyoto.json.
//   Service charges per Tabelog's Japanese original: 一花 「お通し代：800円～1000円」; コギソウル 「テーブルチャージ料350円（込）」;
//   FULL MOON 「サービス料、チャージ料金 無し」; さんじや none listed. No halal claims; no owner deaths; a March 2025 review's
//   remark about the owner's health is left out; no single-review remarks about other diners kept.
//   Pin: 一花 shares 紫光会館 1F with kyoto_hoshoan_pontocho (3.7 m); offset 5.5 m east, stated in pin_source.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-56');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26003686', 'chain: KICHIRI — Tabelog lists KICHIRI restaurants in Shinjuku, Shibuya, Ikebukuro, Chayamachi, Tennoji and more (https://tabelog.com/en/rstLst/?sw=KICHIRI).');
skip('26040964', 'sub-brand of a large parent: LE LABO is an Estée Lauder Companies brand (https://www.elcompanies.com/en/our-brands/le-labo); Tabelog: https://tabelog.com/en/kyoto/A2601/A260201/26040964/.');
skip('26025694', 'chain: Kyo Tsukemono Mori — Tabelog lists Mori pickle shops at Uzumasa (main), Yasaka, Arashiyama, Matsuo Taisha, Ryoanji, Gion, Kameoka and Nishiki Market (https://tabelog.com/en/rstLst/?sw=%E4%BA%AC%E3%81%A4%E3%81%91%E3%82%82%E3%81%AE%20%E3%82%82%E3%82%8A).');

// ================================================================ 先斗町 一花
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26030812/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_pontocho_ichihana', name: '先斗町 一花 (Pontocho Ichihana)', category: 'OMNI',
    lat: 35.005082, lng: 135.771275, cuisine_type: 'oden',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto oden in dashi, obanzai and simmered fish, plus tempura (2024–25 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: oden and obanzai are dashi-based; simmered sea bream, miso-marinated meat (2024–25 reviews).',
    hours_raw: 'Tue–Sun 17:00–23:00; closed Monday (open on a holiday Monday, closed the next day) (Tabelog). Reservations accepted (Tabelog). Appetizer charge ¥800–1,000 (Tabelog, Japanese text: 「お通し代：800円～1000円」). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 13 seats: a counter of 7 and a tatami room for 5 (Tabelog). Smoking allowed (Tabelog; September 2024). Prices are not shown for food items (December 2023). Inside the Shiko Kaikan building on Pontocho, 5 min from Gion-Shijo and Kyoto-Kawaramachi (Tabelog; March 2025).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho, north of Shijo',
    cuisine: 'Kyoto-style oden and obanzai with seasonal Kyoto ingredients and creative Japanese dishes, about 20 years in Pontocho (Tabelog) · oden of daikon, egg, hirousu, red konnyaku and oboro tofu in a refined dashi (October and December 2025) · conger-eel tempura (December 2025) · simmered sea bream, grilled miso-marinated meat (May 2024) · simmered dishes and a warm sake soup (February 2025) · sake (Tabelog)',
    website: null, gmaps: gm('先斗町 一花'), menu_url: TB,
    notes: '[Kyoto oden · Pontocho, a small counter of about 20 years] A 13-seat counter and tatami room tucked inside a Pontocho building, serving delicate Kyoto oden soaked in a fine dashi — daikon, hirousu, red konnyaku, oboro tofu — alongside obanzai, simmered fish and seasonal plates with sake. Food prices are not listed; ¥800–1,000 appetizer charge. Smoking allowed; closed Monday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)', 'Head chef (unnamed)'], origin: null,
      background: 'Per Tabelog: a long-established Japanese restaurant in a corner of Pontocho, about 20 years old, where the chef chooses seasonal Kyoto ingredients for obanzai and creative dishes. Reviews in 2025 describe a proprietress and a head chef.',
      philosophy: null, specialty: 'Kyoto oden; obanzai.',
      anecdotes: [
        { text: 'A February 2025 visitor wandering Pontocho for oden was welcomed by the proprietress and head chef with simmered dishes and a warm sake soup.', source: R + 'B501318312/' },
        { text: 'A May 2024 group came after the Kamogawa Odori on a friend\'s recommendation for oden and simmered sea bream.', source: R + 'B486021971/' },
        { text: 'A December 2023 diner loved the food but found unpriced items hard to judge for value.', source: R + 'B477207977/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・おでん、中京区先斗町通四条上ル鍋屋町227 紫光会館 1F、祇園四条駅・四条河原町駅から徒歩約5分、火〜日17:00〜23:00、月曜休み (祝日の場合は翌日)、予約可、お通し代800〜1000円、カード可、13席 (カウンター7、座敷5)、喫煙可、創業約20年、京都の旬の食材でおばんざいと創作和食。口コミ (2022年1月〜2025年12月、英語): 京風おでん (大根、卵、hirousu、赤こんにゃく、oboro の豆腐)、鯛の炊いたもの、味噌漬けの肉、炊いたもの、温かい酒のスープ、女将と板前、料理に値段の表示がない。',
      confidence: 'medium', sources: [TB, R + 'B445620690/', R + 'B469925250/', R + 'B477207977/', R + 'B480119048/', R + 'B486021971/', R + 'B491821768/', R + 'B501318312/', R + 'B503602492/', R + 'B505198697/', R + 'B515785421/', R + 'B518390382/', R + 'B519038717/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ask the counter for recommendations — prices are not shown; ¥800–1,000 appetizer; smoking allowed. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町通四条上ル鍋屋町227 紫光会館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through December 2025.' },
    pin_source: `Tabelog ${TB} (35.005082, 135.771215), offset 5.5 m east: kyoto_hoshoan_pontocho shares 紫光会館 1F (3.7 m away); cross-checked: GSI 京都府京都市中京区鍋屋町227番地 (lot) 50m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B519038717/'],
    price_note: 'Food prices are not shown in the shop (December 2023); ¥800–1,000 appetizer charge.', last_checked: TODAY, items: [
      it('', '', 'Kyoto-style oden', '', 'Oden', 'ask', 'no', 'October and December 2025.', 'oden'),
      it('', '', 'Conger-eel tempura', '', 'À la carte', 'no', 'no', 'December 2025.', 'conger_tempura'),
      it('', '', 'Appetizer charge', '¥800–1,000', 'Charge', '', '', 'Tabelog.', 'otoshi'),
    ] }, {
    cuisine: '京都の旬の食材の京風おでんとおばんざい、創作の和食、先斗町で約20年 (食べログ)・上品な出汁の大根、卵、hirousu、赤こんにゃく、oboro の豆腐のおでん (2025年10月・12月)・鯛の炊いたもの、味噌漬けの肉の焼き物 (2024年5月)・炊いたものと温かい酒のスープ (2025年2月)・日本酒 (食べログ)',
    neighborhood: '先斗町、四条の北',
    gf_detail: '要確認。出汁の京風おでん、おばんざい、魚の炊いたもの、天ぷら (2024〜2025年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。おでんとおばんざいは出汁、鯛の炊いたもの、味噌漬けの肉 (2024〜2025年の口コミ)。',
    notes: '[京風おでん・先斗町、約20年の小さなカウンター] 先斗町のビルの奥にある13席のカウンターと座敷。上品な出汁がしみた京風おでん (大根、hirousu、赤こんにゃく、oboro の豆腐) に、おばんざい、魚の炊いたもの、季節の皿を日本酒と。料理に値段の表示はなく、お通し800〜1,000円。喫煙可、月曜休み。',
  });
}

// ================================================================ コギソウル 京都河原町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26043412/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '23:00']); const WE = day(['12:00', '23:00']);
  put({
    id: 'kyoto_kogi_seoul_kawaramachi', name: 'サムギョプサルと韓国料理 コギソウル 京都河原町店 (Kogi Seoul)', category: 'OMNI',
    lat: 35.005934, lng: 135.769484, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Grilled pork belly with namul and kimchi, but also kimbap, fried chicken, cheese balls and pasta-style dishes (2026 reviews). The restaurant asks guests with allergies not to order (Tabelog).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: samgyeopsal, yukhoe, chicken, shrimp (2026 reviews).',
    hours_raw: 'Mon–Fri 17:00–23:00; Sat, Sun and holidays 12:00–23:00 (last order food 22:00, drinks 22:30); closed 31 December and 1 January (Tabelog). Reservations accepted and recommended (Tabelog; August 2026). Table charge ¥350 incl. tax for à la carte orders (Tabelog, Japanese text: 「テーブルチャージ料350円（込）」); a ¥330 weekend fee on courses and a year-end fee in December (Tabelog). Guests with allergies are asked not to order; no preschool children (Tabelog). Cards incl. UnionPay; e-money; QR incl. PayPay, Alipay and WeChat Pay (Tabelog). 104 seats in a basement, with semi-private rooms for 6–8 (Tabelog). Order by QR code; staff grill the pork at the table (September 2026). 4 min from Kyoto-Kawaramachi exit 3 (Tabelog). Opened 9 August 2025 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi, south of Takoyakushi — Kyoto-Kawaramachi',
    cuisine: 'Aged thick-cut samgyeopsal and Korean dishes; all-you-can-eat pork belly, chuck eye roll and offal courses from ¥3,680 before tax; all-you-can-drink +¥1,100 (Tabelog) · extra-thick samgyeopsal set with perilla leaves, grilled kimchi, bean-sprout namul and leek salad (September 2026) · yukhoe, gyeran-jjim (July 2026); kimbap with stretchy cheese (August 2026) · honey garlic chicken, cheese balls, ganjang shrimp, teppan risotto (August–September 2026) · nakkopsae; stone-grilled carbonara (August–September 2026)',
    website: 'https://www.instagram.com/kogiseoul.kyoto', gmaps: gm('コギソウル 京都河原町'), menu_url: TB,
    notes: '[Korean · Kawaramachi, samgyeopsal grilled for you] A big, playful basement Korean restaurant — you enter through a fridge door — where staff grill aged, extra-thick pork belly at the table with perilla, kimchi and namul; plus yukhoe, cheese kimbap, honey garlic chicken and all-you-can-eat courses from about ¥3,700. Open from noon at weekends. ¥350 table charge à la carte.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: the Kyoto Kawaramachi shop of Kogi Seoul, opened in August 2025, specialising in aged thick-cut samgyeopsal; Tabelog also lists shops in Umeda, Tennoji and Namba.',
      philosophy: null, specialty: 'Aged thick-cut samgyeopsal.',
      anecdotes: [
        { text: 'An August 2026 visitor needed a photo to work out how to open the fridge-door entrance.', source: R + 'B533832041/' },
        { text: 'A September 2026 diner warned that the floor is slippery with oil, and noted the big bags provided for belongings.', source: R + 'B535568212/' },
        { text: 'An August 2026 visitor recommends asking about spice levels: the seasoning runs mild.', source: R + 'B533280366/' },
      ],
      japanese_sources_summary: '食べログ: 韓国料理・居酒屋・バル、中京区奈良屋町302 幸楽ビル B1F、阪急京都河原町駅3番出口から徒歩約4分、月〜金17:00〜23:00、土日祝12:00〜23:00 (L.O. 料理22:00、ドリンク22:30)、12月31日と1月1日休み、予約可、単品はテーブルチャージ350円 (込)、土日祝のコースは330円、12月は年末料金、アレルギーのある方は注文を控えて、未就学児は入店不可、カード・電子マネー・QR 可、104席、半個室、2025年8月9日オープン、熟成厚切りサムギョプサル、食べ放題のコース3,680円 (税抜) から、飲み放題+1,100円。口コミ (2026年7月〜9月、英語): 冷蔵庫の扉の入口、店員が焼いてくれる、エゴマの葉、焼きキムチ、ユッケ、Gyeran-jjim、チーズのキンパ、ハニーガーリックチキン、チーズボール、Nakkopsae、石焼きカルボナーラ、QR で注文。',
      confidence: 'medium', sources: [TB, R + 'B515675898/', R + 'B531258477/', R + 'B532827620/', R + 'B533280366/', R + 'B533832041/', R + 'B533988525/', R + 'B535549074/', R + 'B535568212/', R + 'B535736488/', R + 'B536002831/', R + 'B536118675/', R + 'B537150051/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by QR code; staff grill the pork; book ahead; no preschool children; guests with allergies are asked not to order. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区奈良屋町302 幸楽ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.005934, 135.769484); cross-checked: GSI 京都府京都市中京区奈良屋町302番地 (lot) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from Tabelog; ¥350 table charge à la carte; weekend and year-end fees.', last_checked: TODAY, items: [
      it('', '', 'All-you-can-eat samgyeopsal course (from)', '¥3,680 + tax', 'Courses', 'ask', 'no', 'Tabelog.', 'course'),
      it('', '', 'All-you-can-drink add-on', '+¥1,100', 'Drinks', '', '', 'Tabelog.', 'nomihodai'),
      it('', '', 'Extra-thick samgyeopsal set', '', 'Samgyeopsal', 'ask', 'no', 'September 2026.', 'samgyeopsal'),
      it('', '', 'Table charge (à la carte)', '¥350', 'Charge', '', '', 'Tabelog.', 'table_charge'),
    ] }, {
    cuisine: '熟成厚切りサムギョプサルと韓国料理。豚バラ、肩ロース、ホルモンの食べ放題コースは税抜3,680円から、飲み放題+1,100円 (食べログ)・エゴマの葉、焼きキムチ、もやしのナムル、ねぎのサラダ付きの極厚サムギョプサルのセット (2026年9月)・ユッケ、Gyeran-jjim (2026年7月)、チーズがのびるキンパ (2026年8月)・ハニーガーリックチキン、チーズボール、Ganjang の海老、鉄板リゾット (2026年8月〜9月)・Nakkopsae、石焼きカルボナーラ (2026年8月〜9月)',
    neighborhood: '河原町、蛸薬師の南。京都河原町駅',
    gf_detail: '要確認。焼いた豚バラとナムルやキムチのほか、キンパ、フライドチキン、チーズボールなど (2026年の口コミ)。アレルギーのある方は注文を控えるよう店が案内 (食べログ)。',
    vegan_detail: 'ヴィーガン不可。サムギョプサル、ユッケ、鶏、海老 (2026年の口コミ)。',
    notes: '[韓国料理・河原町、焼いてくれるサムギョプサル] 冷蔵庫の扉から入る遊び心のある地下の大きな韓国料理店。熟成した極厚の豚バラを店員が卓で焼き、エゴマの葉やキムチ、ナムルと。ユッケ、チーズのキンパ、ハニーガーリックチキン、食べ放題は約3,700円から。週末は昼から。単品はテーブルチャージ350円。',
  });
}

// ================================================================ さんじや 河原町本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26004916/'; const R = TB + 'dtlrvwlst/';
  const H = day(['13:00', '20:00']);
  put({
    id: 'kyoto_sanjiya_kawaramachi', name: 'さんじや 河原町本店 (Sanjiya)', category: 'OMNI',
    lat: 35.005955, lng: 135.768145, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat crepes (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: crepes filled with whipped cream and condensed milk (2025–26 reviews).',
    hours_raw: 'Daily 13:00–20:00; hours may change (Tabelog). Take-away only, no seats (March and May 2026). No reservations; cash only — no cards, e-money or QR (Tabelog). Short queues; crepes made in front of you (January and October 2026). On Takoyakushi-dori at the Shinkyogoku entrance, 3 min from Kyoto-Kawaramachi (Tabelog; November 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Takoyakushi-dori, Shinkyogoku — Kyoto-Kawaramachi',
    cuisine: 'Cheap, small take-away crepes, most under ¥500 (2025–26 reviews) · "Uji": matcha, shiratama, red bean and whipped cream (October 2025; May 2026) · matcha with condensed milk ¥450 (October 2026) · rainbow chocolate ¥450 (October 2026) · banana chocolate (January 2026)',
    website: null, gmaps: gm('さんじや 河原町本店'), menu_url: TB,
    notes: '[Crepes · Takoyakushi, cheap take-away] A tiny take-away crepe stand on Takoyakushi-dori by Shinkyogoku, praised for prices under ¥500 in a pricey area: matcha "Uji" crepes with shiratama and red bean, matcha with condensed milk, banana chocolate, made while you watch. Cash only; open 13:00–20:00.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a crepe and galette shop, the Kawaramachi main shop of Sanjiya. Reviews in 2025–26 describe a take-away counter with a long menu at low prices.',
      philosophy: null, specialty: 'Matcha crepes.',
      anecdotes: [
        { text: 'A December 2025 visitor, put off by tourist prices at lunch, was relieved to find crepes for a few coins.', source: R + 'B519021518/' },
        { text: 'An October 2026 regular watched the rainbow chocolate crepe being made and hopes the shop stays for a long time.', source: R + 'B538166945/' },
        { text: 'An October 2025 visitor liked the Uji crepe but found the shiratama less chewy than usual.', source: R + 'B515433992/' },
      ],
      japanese_sources_summary: '食べログ: クレープ・ガレット、中京区蛸薬師通新京極東入裏寺町595-3、京都河原町駅から約250m、毎日13:00〜20:00、予約不可、現金のみ、禁煙。口コミ (2025年10月〜2026年11月、英語): テイクアウトのみ、500円以下の手頃なクレープ、Uji (抹茶、白玉、あんこ、ホイップ)、抹茶練乳450円、レインボーチョコ450円、バナナチョコ、目の前で焼く。',
      confidence: 'medium', sources: [TB, R + 'B515433992/', R + 'B516776327/', R + 'B519021518/', R + 'B520256755/', R + 'B520479854/', R + 'B528442482/', R + 'B529522144/', R + 'B529962779/', R + 'B537891776/', R + 'B538166945/', R + 'B538278859/', R + 'B538463677/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by number from the board; cash only; take-away. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区蛸薬師通新京極東入裏寺町595-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.005955, 135.768145); cross-checked: GSI 京都府京都市中京区裏寺町595番地 (lot) 51m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538166945/', R + 'B538278859/'],
    price_note: 'Prices from October 2026 reviews; cash only.', last_checked: TODAY, items: [
      it('', '', 'Matcha with condensed milk crepe', '¥450', 'Crepes', 'no', 'no', 'October 2026.', 'matcha_rennyu'),
      it('', '', 'Rainbow chocolate crepe', '¥450', 'Crepes', 'no', 'no', 'October 2026.', 'rainbow_choco'),
      it('', '', '"Uji" crepe (matcha, shiratama, red bean, cream)', '', 'Crepes', 'no', 'no', 'October 2025; May 2026.', 'uji'),
    ] }, {
    cuisine: '手頃で小ぶりなテイクアウトのクレープ、ほとんど500円以下 (2025〜2026年の口コミ)・「Uji」: 抹茶、白玉、あんこ、ホイップ (2025年10月、2026年5月)・抹茶練乳450円 (2026年10月)・レインボーチョコ450円 (2026年10月)・バナナチョコ (2026年1月)',
    neighborhood: '蛸薬師通、新京極。京都河原町駅',
    gf_detail: 'グルテンフリーではない。小麦のクレープ (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ホイップや練乳を包んだクレープ (2025〜2026年の口コミ)。',
    notes: '[クレープ・蛸薬師、手頃なテイクアウト] 新京極そばの蛸薬師通にある小さなテイクアウトのクレープ店。観光地で500円以下と評判。白玉とあんこの抹茶の「Uji」、抹茶練乳、バナナチョコを目の前で。現金のみ、13時〜20時。',
  });
}

// ================================================================ FULL MOON 京都河原町
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26040628/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '23:00']); const WE = day(['16:00', '23:00']);
  put({
    id: 'kyoto_full_moon_kawaramachi', name: 'FULL MOON 京都河原町', category: 'OMNI',
    lat: 35.003476, lng: 135.765758, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a pizza-led menu with carbonara (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: prosciutto, cheese and egg-topped pizzas, steak (2026 reviews).',
    hours_raw: 'Mon–Fri 17:00–23:00; Sat, Sun and holidays 16:00–23:00 (last order food 22:00, drinks 22:30); closing days vary (Tabelog). Reservations accepted; counter or table cannot be chosen online — call (Tabelog). No service or cover charge (Tabelog, Japanese text: 「サービス料、チャージ料金 無し」). Cards incl. UnionPay; QR incl. PayPay and Alipay; no e-money (Tabelog). 52 seats (Tabelog). SAKIZO SEED Building 3F, 2 min from Shijo Stn exit 12 (Tabelog). Opened 19 February 2024 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo, between Karasuma and Kawaramachi',
    cuisine: 'Pizza and drinks in a room of dried flowers and old films (2026 reviews) · signature FULL MOON pizza: Bismarck with prosciutto and plenty of cheese; half-and-half pizzas (Tabelog; February and April 2026) · Caesar salad with prosciutto and soft-boiled egg, potato salad, flap steak, carbonara (February–April 2026) · fresh-fruit drinks and sours; all-you-can-drink (February–June 2026) · ¥6,000 course (June 2026)',
    website: null, gmaps: gm('FULL MOON 京都河原町'), menu_url: TB,
    notes: '[Pizza bar · Shijo, dried flowers and old films] A third-floor pizza and drinks bar decorated with dried flowers, with black-and-white films projected on the wall: the signature Bismarck pizza heaped with prosciutto and cheese, half-and-half pizzas, steak and fruit-loaded sours, with good-value all-you-can-drink. No cover charge. Popular for birthdays and dates.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a pizza Italian restaurant opened in February 2024 near Shijo. A February 2026 review describes it as the sister of a restaurant the reviewer had visited before.',
      philosophy: null, specialty: 'FULL MOON pizza (Bismarck with prosciutto).',
      anecdotes: [
        { text: 'A February 2026 couple chose it for an anniversary after several visits to the sister restaurant, and found this one brighter.', source: R + 'B523704308/' },
        { text: 'An April 2026 visitor had read reviews about slow service but found it prompt, and named the FULL MOON pizza the standout.', source: R + 'B527024993/' },
        { text: 'A June 2026 diner on the ¥6,000 course enjoyed it but found too many dishes featured prosciutto.', source: R + 'B530617567/' },
      ],
      japanese_sources_summary: '食べログ: イタリアン・居酒屋・バル、下京区奈良物町361 SAKIZO SEED ビル 3F、地下鉄四条駅12番出口から徒歩2分、月〜金17:00〜23:00、土日祝16:00〜23:00 (L.O. 料理22:00、ドリンク22:30)、定休日は変動、予約可、サービス料・チャージ料金なし、カード・QR 可、52席、2024年2月19日オープン、生ハムとチーズのピザ、ハーフ&ハーフ、果物たっぷりのドリンク。口コミ (2026年2月〜6月、英語): ドライフラワーと白黒の映画、FULL MOON ピザ (生ハムとチーズのビスマルク)、生ハムと半熟卵のシーザーサラダ、ポテトサラダ、ハラミのステーキ、カルボナーラ、飲み放題、6,000円のコース。',
      confidence: 'medium', sources: [TB, R + 'B521972407/', R + 'B522741082/', R + 'B523415402/', R + 'B523704308/', R + 'B525307204/', R + 'B526600319/', R + 'B526700289/', R + 'B527024993/', R + 'B529983546/', R + 'B530155257/', R + 'B530617567/', R + 'B531264799/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead at weekends; call to request counter or table; no cover charge. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区奈良物町361 SAKIZO SEEDビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.003476, 135.765758); cross-checked: GSI 京都府京都市下京区奈良物町361番地 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530617567/'],
    price_note: 'One course price from June 2026; no cover charge.', last_checked: TODAY, items: [
      it('', '', 'FULL MOON pizza (Bismarck with prosciutto)', '', 'Pizza', 'no', 'no', 'February and April 2026.', 'full_moon_pizza'),
      it('', '', 'Course', '¥6,000', 'Courses', 'no', 'no', 'June 2026.', 'course'),
      it('', '', 'Caesar salad with prosciutto and soft-boiled egg', '', 'Salads', 'ask', 'no', 'February 2026.', 'caesar'),
    ] }, {
    cuisine: 'ドライフラワーと昔の映画の部屋でピザとお酒 (2026年の口コミ)・看板の FULL MOON ピザ: 生ハムとたっぷりのチーズのビスマルク、ハーフ&ハーフのピザ (食べログ、2026年2月・4月)・生ハムと半熟卵のシーザーサラダ、ポテトサラダ、ハラミのステーキ、カルボナーラ (2026年2月〜4月)・果物たっぷりのドリンクやサワー、飲み放題 (2026年2月〜6月)・6,000円のコース (2026年6月)',
    neighborhood: '四条、烏丸と河原町の間',
    gf_detail: 'グルテンフリーではない。ピザが中心でカルボナーラも (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。生ハム、チーズ、卵のピザ、ステーキ (2026年の口コミ)。',
    notes: '[ピザバー・四条、ドライフラワーと昔の映画] ビル3階のピザとお酒の店。ドライフラワーが飾られ、壁には白黒の映画。生ハムとチーズを盛った看板のビスマルク、ハーフ&ハーフのピザ、ステーキ、果物たっぷりのサワー、お得な飲み放題。チャージなし。誕生日やデートに人気。',
  });
}

save();
