// Kyoto priority (kyoto-missed), worker osw13, batch 119 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: ときじく, TORIBA COFFEE KYOTO, 月下美人, コーヒー・お食事 OPEN. Brands checked against queue-status, data/kyoto.json, than.co.jp/brands and 株式会社WILL (none match).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-119');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26033172', 'retail food shop (Greg 11-07 ruling): フラッフィ is a take-away fruit-candy stand (strawberry and Shine Muscat candy on skewers, drinks; 2021–2026 reviews) — Tabelog lists no hours or seats, and several reviews describe a FLUFFY shop in Arashiyama rather than this Kiyomizu address; no GF or vegan options sourced');
skip('26039166', 'chain: 代官山 Candy apple 清水二寧坂店 — a branch of the Daikanyama Candy apple chain (same ruling as 京都河原町店)');

// ================================================================ ときじく
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26041266/'; const R = TB + 'dtlrvwlst/';
  const A = ['10:00', '18:00'], S = ['10:00', '21:00'];
  put({
    id: 'kyoto_tokijiku', name: 'ときじく (Tokijiku)', category: 'OMNI',
    lat: 34.998967, lng: 135.756535, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the food is two daily curries with rice and a hamburg curry (2024–2025 reviews), and curry roux often contains wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the curries reviewed are minced-meat and tomato, chicken green curry and hamburg curry (2024–2025).',
    hours_raw: 'Tabelog: Mon, Wed–Fri 10:00–18:00; Sat 10:00–21:00; closed Tuesday, Sunday and public holidays; hours may change. A gallery café opened 1 June 2024 that also sells bags and interior goods with Yuzen patterns and hosts events and classes; the eating area is open to the gallery. Round tables. In the Loi Krathong Shijo building on Matsubara-dori west of Shinmachi, 490 m from Gojo.',
    hours: { 0: [A], 2: [A], 3: [A], 4: [A], 5: [S] }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Matsubara-dori west of Shinmachi — 490 m from Gojo',
    cuisine: 'A gallery café of Yuzen-pattern goods serving two daily curries and coffee (Tabelog; 2024–2025 reviews) · minced-meat and tomato curry rice ¥750, a light, soupy curry; chicken green curry ¥900 (June 2024) · limited hamburg curry ¥1,200, large +¥100, home-style (April 2025) · coffee ¥500 in two blends, "Amaterasu" and "Susanoo" (June 2024)',
    website: null, gmaps: gm('ときじく 松原 新町'), menu_url: null,
    notes: '[Gallery café · Matsubara-Shinmachi, curry among Yuzen goods] A quiet community café inside a gallery of Yuzen-patterned bags and goods: two home-style curries a day from ¥750 and coffee at ¥500. Under ¥1,500. Closed Tue, Sun and holidays.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 1 June 2024 as "Cafe Gallery Tokijiku", a community hub with a café, exhibition gallery, fabric-goods making, events and classes (June 2024 reviews). Only three reviews so far, the newest from April 2025.',
      philosophy: null,
      specialty: 'Daily curries; coffee.',
      anecdotes: [
        { text: 'June 2024: "A gallery that sells bags and interior goods designed with traditional Yuzen patterns. Additionally, it functions as a café where you can enjoy curry rice and coffee."', source: R + 'B486301156/' },
        { text: 'April 2025: "It\'s not a gourmet spice curry, but rather has a comforting, home-style flavor."', source: R + 'B504563121/' },
      ],
      japanese_sources_summary: '食べログ: ときじく、カフェ、下京区松原通新町西入る藪下町31 ロイクラトン四条1F、五条から490m、月・水〜金10:00〜18:00、土10:00〜21:00、火・日・祝日休み。口コミ (2024年6月〜2025年4月、英語、3件): 2024年6月1日開店のギャラリーカフェ、友禅柄のバッグや雑貨の販売、イベントと教室、ひき肉とトマトのカレー750円、チキンのグリーンカレー900円、限定のハンバーグカレー1,200円 (大盛り+100円)、コーヒー500円 (アマテラス・スサノオの2種)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B486301156', 'B486314910', 'B504563121'])) },
    cultural_comfort: { level: 'friendly', note: 'Small gallery café; the dining area is open to the shop.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区松原通新町西入る藪下町31 ロイクラトン四条1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with hours; three reviews, the newest April 2025.' },
    pin_source: `Tabelog ${TB} (34.998967, 135.756535); GSI lot 京都府京都市下京区藪下町31番地 about 20m away; nearest pin kyoto_comfy_matcha 11.5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B486301156/', R + 'B504563121/'],
    price_note: 'Prices from June 2024 and April 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Minced-meat and tomato curry rice', '¥750', 'Curry', 'ask', 'no', 'June 2024.', 'keema_tomato_curry'),
      it('', '', 'Chicken green curry', '¥900', 'Curry', 'ask', 'no', 'June 2024.', 'green_curry'),
      it('', '', 'Hamburg curry (limited)', '¥1,200', 'Curry', 'ask', 'no', 'April 2025; large +¥100.', 'hamburg_curry'),
      it('', '', 'Coffee (Amaterasu or Susanoo blend)', '¥500', 'Drink', 'ask', 'ask', 'June 2024.', 'coffee'),
    ] }, {
    cuisine: '友禅柄の雑貨のギャラリーカフェ。日替わりのカレー2種とコーヒー (食べログ、2024〜2025年の口コミ)・ひき肉とトマトのカレーライス750円、軽いスープ状のカレー、チキンのグリーンカレー900円 (2024年6月)・限定のハンバーグカレー1,200円、大盛り+100円、家庭的な味 (2025年4月)・コーヒー500円、「アマテラス」と「スサノオ」の2種 (2024年6月)',
    neighborhood: '松原通、新町の西。五条から490m',
    gf_detail: '要確認: グルテンの情報はない。料理は日替わりのカレー2種とハンバーグカレー (2024〜2025年の口コミ) で、カレーのルウには小麦が入ることが多い。',
    vegan_detail: 'ヴィーガン不可: 口コミのカレーはひき肉とトマト、チキンのグリーンカレー、ハンバーグカレー (2024〜2025年)。',
    notes: '[ギャラリーカフェ・松原新町、友禅の雑貨とカレー] 友禅柄のバッグや雑貨のギャラリーの中の静かなカフェ。750円からの家庭的なカレーが日替わりで2種、コーヒーは500円。1,500円未満。火・日・祝日休み。',
  });
}

// ================================================================ TORIBA COFFEE KYOTO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26039004/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '21:00']);
  put({
    id: 'kyoto_toriba_coffee', name: 'TORIBA COFFEE KYOTO', category: 'OMNI',
    lat: 35.013749, lng: 135.774221, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A February 2025 reviewer says all the food is vegan and made with rice flour, and a February 2026 reviewer found "many gluten-free options" (canelé, cakes, strawberry daifuku); the katsu sandwich is on bread. Confirm each item and the shared kitchen.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask — promising. Reviewers say the food is vegan, including a soy-meat katsu sandwich (2025–2026), and staff offered "vegan options" when asked (September 2025). Lattes use milk unless you ask.',
    hours_raw: 'Tabelog: Mon, Wed–Sun 11:00–21:00; closed Tuesday; hours may change. The shop closed for renovation 3–12 March 2026 (March 2026 review). No reservations. Non-smoking. Cards and e-money; no QR codes. Hand-drip coffee about ¥800–1,200; sandwich and coffee set ¥1,500 (March 2025). Service can be slow when busy (April and June 2025). In a long-established former wagashi shop on Nijo-dori near Okazaki, about 10 min from Sanjo Keihan or Kyoto Shiyakusho-mae.',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nijo-dori toward Okazaki — 10 min from Sanjo Keihan',
    cuisine: 'The Kyoto branch (opened February 2023) of TORIBA COFFEE, a Ginza specialty roaster founded in 2014, in the restored building of the 100-year-old wagashi shop "Kyokado": hand-drip coffee and vegan, mostly rice-flour food (2025–2026 reviews) · "mildest of all time" blend ¥800, tuned to Kyoto water; decaf blend ¥1,000; 100% Hawaiian Kona from its own farm; light, dark and Latin blends; café latte, dark or sweet, ¥1,200 · vegan katsu sandwich with soy meat ¥1,200 (2025–2026) · rice-flour canelé ¥600; pound cake; lemon cake; strawberry daifuku; kurikinton (2025–2026) · homemade kakigori ¥1,000: raspberry, mango or cassis (August 2025) · hawthorn soda; Kyoto bancha; black tea; natural wine',
    website: null, gmaps: gm('TORIBA COFFEE KYOTO'), menu_url: null,
    notes: '[Specialty coffee · Nijo-Okazaki, vegan food in an old sweets shop] A Ginza roaster\'s Kyoto shop in a beautifully kept 100-year-old wagashi building, with kilim sofas and a hidden bar at the back. Hand-drip blends and Kona coffee, and food reviewers describe as all vegan and largely rice-flour — a soy-meat katsu sandwich, canelés. Coffee ¥800–1,200. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'TORIBA COFFEE was founded in Ginza, Tokyo in 2014 and is known for its self-roasted beans and once-famous ¥100 coffee; this Kyoto shop, its second, opened in February 2023 (2025–2026 reviews). It occupies the building of "Kyokado", a wagashi shop of over 100 years that closed in 2022, keeping the old sweets display case and kimono-shop shelving, with photographs by Keiichi Tahara (February 2025). A May 2025 diner saw a man who seemed to be the master and a woman staff member.',
      philosophy: 'Its signature blend aims to be "the mildest of all time", adjusted to Kyoto\'s water (March 2025 review).',
      specialty: 'Hand-drip coffee; vegan, rice-flour food.',
      anecdotes: [
        { text: 'February 2025: "I also had a canelé (JPY 600). All the food here is vegan, made with rice flour, and it was delightful."', source: R + 'B501909127/' },
        { text: 'February 2026: "Unfortunately, the lemon cake and strawberry daifuku were sold out, but I was pleased to find many gluten-free options, and the canelé was delicious!"', source: R + 'B523208281/' },
        { text: 'April 2025: "I also tried to order a canelé, and although I received a \'yes\' in response, it was never served."', source: R + 'B505585901/' },
      ],
      japanese_sources_summary: '食べログ: TORIBA COFFEE KYOTO、カフェ・喫茶店、左京区難波町226、三条京阪から496m、月・水〜日11:00〜21:00、火曜休み、予約不可、禁煙、カード・電子マネー可、QR不可。口コミ (2025年2月〜2026年3月、英語): 2014年に銀座で創業した自家焙煎のTORIBA COFFEEの2号店 (2023年2月開店)、100年以上の和菓子店「Kyokado」の建物、マイルドブレンド800円、デカフェ1,000円、自社農園のコナ、カフェラテ1,200円、料理はヴィーガンで米粉 (2025年2月)、大豆ミートのヴィーガンかつサンド、カヌレ600円、グルテンフリーの品が多い (2026年2月)、自家製かき氷1,000円、サンザシソーダ、京番茶、2026年3月3〜12日は改装で休業、注文が遅い・忘れられたとの声 (2025年4月)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B501909127', 'B502981645', 'B505585901', 'B507360457', 'B507785256', 'B512717313', 'B514354852', 'B516503050', 'B520171887', 'B521035607', 'B523208281', 'B523644666'])) },
    cultural_comfort: { level: 'english_friendly', note: 'Popular with overseas visitors for its vegan menu (January 2026).' },
    safety: { ...SAFETY0, positives: ['February 2025 review: all food is vegan and made with rice flour.', 'February 2026 review: many gluten-free options.', 'Soy-meat vegan katsu sandwich (2025–2026 reviews).'] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区難波町226',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews to March 2026, when it closed 3–12 March for renovation — check it reopened.' },
    pin_source: `Tabelog ${TB} (35.013749, 135.774221); GSI lot 京都府京都市左京区難波町226番地 about 27m away; nearest pin kyoto_bistro_verjus 10.8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B501909127/', R + 'B502981645/', R + 'B520171887/'],
    price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Mild blend (hand drip)', '¥800', 'Drink', 'ask', 'ask', 'February 2025.', 'mild_blend'),
      it('', '', 'Vegan katsu sandwich (soy meat)', '¥1,200', 'Sandwich', 'no', 'ask', '2025–2026.', 'vegan_katsu_sando'),
      it('', '', 'Rice-flour canelé', '¥600', 'Sweets', 'ask', 'ask', 'February 2025 and February 2026.', 'canele'),
      it('', '', 'Homemade kakigori', '¥1,000', 'Sweets', 'ask', 'ask', 'August 2025.', 'kakigori'),
      it('', '', 'Café latte (dark or sweet)', '¥1,200', 'Drink', 'ask', 'no', 'January 2026.', 'cafe_latte'),
    ] }, {
    cuisine: '2014年創業の銀座の自家焙煎店TORIBA COFFEEの京都店 (2023年2月開店)。100年続いた和菓子店「Kyokado」の建物で、ハンドドリップのコーヒーと、ヴィーガンで米粉中心の料理 (2025〜2026年の口コミ)・京都の水に合わせた「史上最もマイルド」なブレンド800円、デカフェ1,000円、自社農園のハワイ・コナ100%、ライト・ダーク・ラテンのブレンド、カフェラテ (ダークかスイート) 1,200円・大豆ミートのヴィーガンかつサンド1,200円 (2025〜2026年)・米粉のカヌレ600円、パウンドケーキ、レモンケーキ、いちご大福、栗きんとん (2025〜2026年)・自家製かき氷1,000円: ラズベリー、マンゴー、カシス (2025年8月)・サンザシソーダ、京番茶、紅茶、自然派ワイン',
    neighborhood: '二条通、岡崎方面。三条京阪から徒歩10分',
    gf_detail: '要確認: 2025年2月の口コミでは料理はすべてヴィーガンで米粉、2026年2月の口コミでは「グルテンフリーの品が多い」(カヌレ、ケーキ、いちご大福)。かつサンドはパン。品ごとと調理場の共用を確認を。',
    vegan_detail: '要確認 (期待できる): 口コミでは料理はヴィーガンで、大豆ミートのかつサンドも (2025〜2026年)、尋ねると「ヴィーガンのメニューがある」との答え (2025年9月)。ラテは牛乳なので頼む時に確認を。',
    notes: '[スペシャルティコーヒー・二条岡崎、古い和菓子店でヴィーガンの料理] 銀座の焙煎店の京都店。100年続いた和菓子店の建物を美しく生かし、キリムのソファや奥に隠れたバーも。ハンドドリップのブレンドやコナ、料理はすべてヴィーガンで米粉中心との声: 大豆ミートのかつサンド、カヌレ。コーヒー800〜1,200円。火曜休み。',
  });
}

// ================================================================ 月下美人
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26039640/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_gekka_bijin', name: '月下美人 (Gekka Bijin)', category: 'OMNI',
    lat: 34.998251, lng: 135.780952, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free as served: the signature mitarashi dango is glazed with a sweet soy-sauce sauce, and some dango are wrapped in a crepe-like batter (2026 reviews); no gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Dango with mitarashi, matcha or hojicha may be plant-based, but no ingredient information is given.',
    hours_raw: 'Tabelog lists no hours. A dango and sweet-potato snack shop near Kiyomizu-dera, busy with sightseers and school groups; a line moves quickly (May 2026). A few seats inside; most people eat on the go from a drip-proof cup (August 2026). Cards and e-money; no QR codes. No reservations.',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Below Kiyomizu-dera — 1 km from Gion-Shijo',
    cuisine: 'A dango and sweet-potato snack shop on the way to Kiyomizu-dera, known for oversized, chewy mitarashi dango (Tabelog; 2023–2026 reviews) · mitarashi dango ¥380 — three large, soft dumplings in a sweet soy glaze, served in an eat-on-the-go cup (August 2026) · matcha and hojicha dango; dango wrapped in mochi ("mochi maki") or in a crepe-like batter (March–May 2026) · sweet-potato chips (May 2026) · aguafresca fruit water ¥750 (August 2026)',
    website: null, gmaps: gm('月下美人 清水 団子'), menu_url: null,
    notes: '[Dango · Kiyomizu, giant mitarashi dango to go] A busy little snack shop near Kiyomizu-dera selling big, soft mitarashi dango (¥380) in a cup made for walking, plus matcha and hojicha versions and sweet-potato chips. A few seats inside. Under ¥1,000. Hours not listed.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Reviewers (2026) describe a photogenic shop known on social media for its big dango, with a quick-moving line and a few seats; one diner found prices had risen since 2023, and an August 2026 diner thought the ¥750 fruit water weak. The operator is not named in the sources.',
      philosophy: null,
      specialty: 'Large mitarashi dango.',
      anecdotes: [
        { text: 'August 2026: "Each piece is large and filling, wrapped in a crepe-like paper, making it perfect for eating on the go… The container designed for easy eating on the go is almost an invention, as it prevents the sauce from spilling."', source: R + 'B533901201/' },
        { text: 'May 2026: "Although there is a line, it moves quickly, making the wait feel manageable."', source: R + 'B530614890/' },
        { text: 'March 2026: "To be honest, I think it might be better to eat it without wrapping it in mochi."', source: R + 'B523616127/' },
      ],
      japanese_sources_summary: '食べログ: 月下美人、和菓子、東山区桝屋町351-14、祇園四条から1,010m、営業時間の記載なし、予約不可、カード・電子マネー可、QR不可。口コミ (2023年3月〜2026年10月、英語): 清水寺近くの団子と芋のお菓子の店、大きなみたらし団子380円 (2026年8月)、抹茶・ほうじ茶の団子、もち巻き、クレープ状の生地で包んだ団子、芋チップス、アグアフレスカ750円、行列は早く進む、席は少しある、食べ歩き用の容器、値上がりしたとの声。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B523616127', 'B524577382', 'B526858585', 'B527772703', 'B529484370', 'B530614890', 'B531025149', 'B533901201', 'B537322524'])) },
    cultural_comfort: { level: 'friendly', note: 'Order at the counter; mostly take-away with a few seats.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区桝屋町351-14',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated March to October 2026.' },
    pin_source: `Tabelog ${TB} (34.998251, 135.780952); GSI lot 京都府京都市東山区桝屋町351番地 about 66m away; nearest pin kyoto_ninenzaka_futaba 6.2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533901201/', R + 'B524577382/'],
    price_note: 'Prices from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Mitarashi dango', '¥380', 'Sweets', 'no', 'ask', 'August 2026.', 'mitarashi_dango'),
      it('', '', 'Hojicha or matcha dango', '', 'Sweets', 'ask', 'ask', 'March and May 2026.', 'hojicha_dango'),
      it('', '', 'Aguafresca (fruit water)', '¥750', 'Drink', 'ask', 'ask', 'August 2026.', 'aguafresca'),
    ] }, {
    cuisine: '清水寺への道の団子と芋のお菓子の店。大きくもちもちのみたらし団子で知られる (食べログ、2023〜2026年の口コミ)・みたらし団子380円。甘いしょうゆのたれの大きく柔らかい団子3個、食べ歩き用のカップ入り (2026年8月)・抹茶やほうじ茶の団子、もちで巻いた「もち巻き」やクレープ状の生地で包んだ団子 (2026年3〜5月)・芋チップス (2026年5月)・フルーツウォーターのアグアフレスカ750円 (2026年8月)',
    neighborhood: '清水寺の下。祇園四条から1,010m',
    gf_detail: 'グルテンフリーではない (提供時): 名物のみたらし団子は甘いしょうゆのたれ、クレープ状の生地で包んだ団子もある (2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認: みたらし、抹茶、ほうじ茶の団子は植物性の可能性があるが、原材料の情報はない。',
    notes: '[団子・清水、食べ歩きの大きなみたらし団子] 清水寺近くのにぎやかな小さな店。大きく柔らかいみたらし団子 (380円) を食べ歩き用のカップで。抹茶やほうじ茶の団子、芋チップスも。店内に少し席あり。1,000円未満。営業時間の記載なし。',
  });
}

// ================================================================ コーヒー・お食事 OPEN
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26020254/'; const R = TB + 'dtlrvwlst/';
  const H = day(['08:30', '20:00']);
  put({
    id: 'kyoto_coffee_oshokuji_open', name: 'コーヒー・お食事 OPEN (Coffee & Meals OPEN)', category: 'OMNI',
    lat: 34.996507, lng: 135.758239, cuisine_type: 'kissaten',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a classic kissaten menu of toast, katsu curry, fried shrimp, cutlets, kara-age and spaghetti Napolitan (2022–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: bacon and eggs, omurice, hamburg steak, pork sauté and fried meats (2022–2026 reviews).',
    hours_raw: 'Tabelog: daily 8:30–20:00, closed on some weekends and public holidays; hours may change. Breakfast only in the morning (April 2026), then set meals and café dishes. No reservations. SMOKING ALLOWED throughout — ashtrays on every table (2023–2026 reviews). Cash only: no cards or e-money. About 11 tables; busy at weekday lunch. Run by the older master alone, so food can take a while (March 2026). On the north-east corner of Muromachi and Gojo, 3–6 min from Gojo Station.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Muromachi-Gojo corner — 3–6 min from Gojo',
    cuisine: 'A Showa-era coffee shop open since 1964, run by its master alone: hearty breakfasts and cheap set meals to the sound of The Beatles (Tabelog; 2022–2026 reviews) · breakfast with a drink ¥840: bacon and eggs with toast, or ham-and-cheese toast with omelette (July 2025) · omurice with salad ¥850; iced coffee ¥480 (October 2023) · lunch set with coffee ¥1,050 (March 2025) · kara-age set ¥850 (March 2026); pork sauté ¥930 (May 2026) · fried platter of shrimp, cutlet and kara-age (October 2025); hamburg with shrimp fry (April 2024) · Japanese-style katsu curry (May 2025); spaghetti Napolitan, often sold out late; daily set meals such as bacon, egg and fried chicken (March 2022)',
    website: null, gmaps: gm('コーヒー・お食事 OPEN 室町五条'), menu_url: null,
    notes: '[Kissaten · Muromachi-Gojo, a 1964 coffee shop] A friendly, old-school coffee shop on the Gojo corner since 1964, where the master cooks alone: ¥840 bacon-and-egg breakfasts, omurice, kara-age and fried platters for under ¥1,100, Beatles on the stereo. Smoking at every table. Cash only.',
    chef_bio: { chef_name: null, roles: ['Master (unnamed; runs it alone)'], origin: null,
      background: 'The sign outside reads "SINCE 1964" (March 2022); a May 2026 regular counts 62 years. July 2025 and July 2026 reviewers say the older master runs the shop by himself; reviewers call him kind and the room calm and full of regulars, with The Beatles or Yumi Matsutoya playing. One May 2025 diner found the katsu curry salty and the promised soup never came.',
      philosophy: null,
      specialty: 'Kissaten breakfasts and set meals.',
      anecdotes: [
        { text: 'July 2025: "The restaurant is run solely by the owner… Having this along with a drink at such a reasonable price is truly delightful!"', source: R + 'B509525730/' },
        { text: 'October 2023: "A charming old-fashioned café with the Beatles playing in the background… The egg was fluffy and rolled just right."', source: R + 'B473544562/' },
        { text: 'May 2025: "The curry was quite salty; if they toned down the salt a bit, it could be really delicious—what a shame."', source: R + 'B506677819/' },
      ],
      japanese_sources_summary: '食べログ: コーヒー・お食事 OPEN、喫茶店、下京区室町五条東北角、五条駅から徒歩6分、毎日8:30〜20:00 (土日・祝日に休みあり)、予約不可、喫煙可、カード・電子マネー不可。口コミ (2022年3月〜2026年7月、英語): 「SINCE 1964」の看板、年配のマスターがひとりで営む、ビートルズが流れる昭和の喫茶店、モーニング (ベーコンエッグかハムチーズトーストとオムレツ、飲み物付き840円)、オムライス850円、アイスコーヒー480円、唐揚げ定食850円、ポークソテー930円、ミックスフライ定食、和風カツカレー (塩辛いとの声、2025年5月)、ナポリタン、全席に灰皿、提供に時間がかかることも。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B447564905', 'B473544562', 'B483447208', 'B500640024', 'B506677819', 'B509525730', 'B515421319', 'B523632622', 'B526950001', 'B528970813', 'B531781147'])) },
    cultural_comfort: { level: 'japanese', note: 'Smoking at every table; cash only; one-man kitchen.' },
    safety: { ...SAFETY0 },
    mom_and_pop: true, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区室町五条東北角',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated 2025 to July 2026.' },
    pin_source: `Tabelog ${TB} (34.996507, 135.758239); address is a street corner (室町五条東北角) — GSI matches only 下京区, so approximate; the Tabelog point sits at the north-east corner of Muromachi and Gojo; nearest pin kyoto_karasuma_gojo_jigen 113.5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B473544562/', R + 'B509525730/', R + 'B528970813/'],
    price_note: 'Prices from 2023–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Bacon-and-egg breakfast (with drink)', '¥840', 'Breakfast', 'no', 'no', 'July 2025.', 'bacon_egg_morning'),
      it('', '', 'Omurice with salad', '¥850', 'Main', 'ask', 'no', 'October 2023.', 'omurice'),
      it('', '', 'Kara-age set meal', '¥850', 'Set meal', 'no', 'no', 'March 2026.', 'karaage_teishoku'),
      it('', '', 'Pork sauté with rice', '¥930', 'Set meal', 'ask', 'no', 'May 2026.', 'pork_saute'),
      it('', '', 'Iced coffee', '¥480', 'Drink', 'ask', 'ask', 'October 2023 and July 2026.', 'iced_coffee'),
    ] }, {
    cuisine: '1964年から続く、マスターがひとりで営む昭和の喫茶店。ビートルズを聴きながらボリュームのあるモーニングと手頃な定食 (食べログ、2022〜2026年の口コミ)・飲み物付きのモーニング840円: ベーコンエッグとトースト、またはハムチーズトーストとオムレツ (2025年7月)・サラダ付きのオムライス850円、アイスコーヒー480円 (2023年10月)・コーヒー付きの昼1,050円 (2025年3月)・唐揚げ定食850円 (2026年3月)、ポークソテー930円 (2026年5月)・えび、カツ、唐揚げのミックスフライ (2025年10月)、ハンバーグとえびフライ (2024年4月)・和風カツカレー (2025年5月)、遅い時間には売り切れのナポリタン、ベーコンエッグと唐揚げなどの日替わり定食 (2022年3月)',
    neighborhood: '室町五条の角。五条から徒歩3〜6分',
    gf_detail: 'グルテンフリーではない: トースト、カツカレー、えびフライ、カツ、唐揚げ、ナポリタンなど昔ながらの喫茶店のメニュー (2022〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: ベーコンエッグ、オムライス、ハンバーグ、ポークソテー、揚げ物の肉 (2022〜2026年の口コミ)。',
    notes: '[喫茶店・室町五条、1964年からの喫茶店] 1964年から五条の角にある気さくな昔ながらの喫茶店。マスターがひとりで作る840円のベーコンエッグのモーニング、オムライス、唐揚げやミックスフライが1,100円以下、BGMはビートルズ。全席喫煙可。現金のみ。',
  });
}

save();
