// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 62.
//   + SferaBar SATONAKA (late-night cocktail bar in the Sfera building, Nawate-Shinbashi; rest)
//   + cafe grayish green (one-person mint-sweets cafe, reservation via Instagram, Gion south; rest)
//   + 京料理 田鶴 Kyoryori Tazuru (Kyoto cuisine at a riverside ryokan with a summer Kamo River terrace; rest)
//   + いづつ屋 先斗町店 Izutsuya Pontocho (Tanba beef sukiyaki on Pontocho; rest)
//   Rest list (mod 6 = 1) after batch 61, nearest-first — skipped:
//   - 串カツ小力 26042287: thin — two reviews.
//   - ガスト 京都河原町店 26020651: chain.
//   Brand check: queue-status.jsonl grepped for every crawl id of each name (サトナカ, grayish green, 田鶴, いづつ屋) — no
//   earlier skip or done entries. Same-name check, same brand or operator only: SATONAKA — one; it is a Sfera bar in the same
//   building as Cafe DOnG by Sfera (kyoto_cafe_dong_sfera, in data) — a sister concept of a small design brand, drafted.
//   grayish green — one. 田鶴 — one; a ryokan whose restaurant takes non-staying guests (business dinners, events in reviews).
//   いづつ屋 — one in Kyoto city; its site names only this shop (a Kyotanba meat business, 75 years) — drafted. None is in
//   data/kyoto.json (main fb7ef956) by name or address (弁財天町17 shares the Sfera building only; 小松町164; 美濃屋町179-1;
//   若松町140-4 — IL BUCO in data is at 140-2).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-62');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260301/26042287/', 'thin: two reviews');
skip('https://tabelog.com/en/kyoto/A2601/A260301/26020651/', 'chain: Gusto');

// ================================================================ SferaBar SATONAKA
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26006443/'; const R = TB + 'dtlrvwlst/'; const WEB = 'http://bar-satonaka.com/';
  const H = day(['19:00', '28:00']);
  put({
    id: 'kyoto_sferabar_satonaka', name: 'SferaBar SATONAKA (サトナカ)', category: 'OMNI',
    lat: 35.00603, lng: 135.7726068045587, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A cocktail, whisky and wine bar; no food or gluten information (2014–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Drinks only in the reviews (2014–2026 reviews).',
    hours_raw: 'Monday–Saturday 19:00–4:00; closed Sunday (open on the Sunday of a long weekend, closed on its last day); hours may change (Tabelog). Reservations accepted (Tabelog). Seat charge ¥525 at the counter, ¥1,050 at a table (Tabelog original カウンター席 \\525、テーブル席 \\1,050). Cards (JCB, AMEX, Diners) (Tabelog). 20 seats: a long counter and sofa booths; smoking allowed (Tabelog; November 2014). 3F of the Sfera building between Kawabata and Nawate north of Shinbashi, by a hard-to-find lift (Tabelog; 2014–2020 reviews). Opened 23 December 2006 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, Nawate north of Shinbashi — Sfera building 3F',
    cuisine: 'Stylish cocktail bar of the Kyoto design brand Sfera, with a broad whisky selection, plenty of wine and careful cocktails (2014–2020 reviews) · maiko fans on display (September 2026) · about ¥4,000–6,000 (Tabelog; 2017–2026 reviews)',
    website: WEB, gmaps: gm('SferaBar SATONAKA 祇園'), menu_url: null,
    notes: '[Cocktail bar · Gion, Nawate-Shinbashi, till 4 a.m.] A sleek, quiet bar on the third floor of the Sfera design building, with a long counter, sofa booths, maiko fans on the walls, a deep whisky shelf and stylish cocktails. Open late; take the hidden lift. Seat charge ¥525 at the counter, ¥1,050 at a table. Smoking allowed; closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Bartenders (unnamed)'], origin: null,
      background: 'Per Tabelog: a bar opened 23 December 2006 in the Sfera building. A February 2017 reviewer explains that Sfera is a Kyoto design brand founded in 2001, whose building also holds Cafe DOnG by Sfera (in data).',
      philosophy: null, specialty: 'Cocktails; whisky.',
      anecdotes: [
        { text: 'A November 2014 visitor found the counter and box seats a calm slice of Kyoto, the whisky impressive and the cocktails extraordinarily stylish.', source: R + 'B307572108/' },
        { text: 'A September 2020 guest noted the lift is in a slightly hard-to-find spot, and chose a cocktail over the many wines.', source: R + 'B430443230/' },
        { text: 'A September 2026 visitor noticed many maiko fans displayed around the room.', source: R + 'B536215984/' },
      ],
      japanese_sources_summary: '食べログ: バー、東山区縄手通新橋上ル西側弁財天町17 スフェラビルディング 3F、京阪三条駅から徒歩5分、月〜土 19:00〜翌4:00、日曜休み (連休の日曜は営業し最終日は休み)、営業時間は変わることあり、予約可、カウンター席525円・テーブル席1,050円、カード (JCB・AMEX・Diners) 可、20席、ソファ席、喫煙可、2006年12月23日開店、公式サイト bar-satonaka.com。口コミ (2014年9月〜2026年9月、英語): 川端通と縄手通の間のスフェラビル、わかりにくいエレベーター、広いカウンターとボックス席、ウイスキーが豊富、ワイン、洗練されたカクテル、舞妓さんのうちわが飾られている。',
      confidence: 'medium', sources: [TB, WEB, R + 'B115919251/', R + 'B247724486/', R + 'B249069394/', R + 'B279357770/', R + 'B290927443/', R + 'B304981179/', R + 'B307572108/', R + 'B339708092/', R + 'B430443230/', R + 'B536215984/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Seat charge by seat type; smoking allowed; cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区縄手通新橋上ル西側弁財天町17 スフェラビルディング ３Ｆ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and website; latest review September 2026.' },
    pin_source: `Tabelog ${TB} (35.005985, 135.772607) is 1.0 m from kyoto_cafe_dong_sfera (same Sfera building), so moved ~5 m north to 35.006030; cross-checked: GSI 京都府京都市東山区弁財天町17番地 (lot) 12 m; checked against main fb7ef956; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Seat charges from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Seat charge, counter', '¥525', 'Charge', 'gf', 'vegan', 'Tabelog.', 'charge_counter'),
      it('', '', 'Seat charge, table', '¥1,050', 'Charge', 'gf', 'vegan', 'Tabelog.', 'charge_table'),
    ] }, {
    cuisine: '京都のデザインブランド Sfera のスタイリッシュなカクテルバー。ウイスキーが豊富でワインも多く、カクテルも丁寧 (2014〜2020年の口コミ)・舞妓さんのうちわが飾られている (2026年9月)・4,000〜6,000円ほど (食べログ、2017〜2026年の口コミ)',
    neighborhood: '祇園、新橋の北の縄手。スフェラビル3階',
    gf_detail: '要確認。カクテル、ウイスキー、ワインのバー。食べ物やグルテンの情報はない (2014〜2026年の口コミ)。',
    vegan_detail: '要確認。口コミは飲み物のみ (2014〜2026年の口コミ)。',
    notes: '[カクテルバー・祇園の縄手新橋、朝4時まで] デザインビル「スフェラ」の3階の洗練された静かなバー。長いカウンター、ソファのボックス、壁には舞妓さんのうちわ、充実したウイスキー、スタイリッシュなカクテル。深夜まで。わかりにくいエレベーターで。席料はカウンター525円、テーブル1,050円。喫煙可、日曜休み。',
  });
}

// ================================================================ cafe grayish green
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26035897/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_cafe_grayish_green', name: 'cafe grayish green', category: 'OMNI',
    lat: 35.000382337070924, lng: 135.7718171791456, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Mint parfaits, jellies and drinks, some with chocolate; no gluten information (2022–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Mint jellies and drinks, but parfaits use cream and ice cream; no ingredient information (2022–2026 reviews).',
    hours_raw: 'Opening days are irregular — closed Tuesday to Thursday per Tabelog; no regular hours listed (Tabelog). Reservations by Instagram DM, with orders placed in advance; run by one person (Tabelog; March 2023–April 2026). Cash only: no cards or e-money (Tabelog). Non-smoking (Tabelog). A small cafe with a courtyard where mint is grown, south of Gion near Yamato-oji (Tabelog; March 2025). Opened 12 February 2021 (Tabelog).',
    hours: {}, hours_status: 'varies',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'South of Gion, near Yamato-oji — reservation via Instagram',
    cuisine: 'Mint-sweets specialist where almost everything uses home-grown mint: mint water, mint and chocolate-mint parfaits, seasonal parfaits such as a sakura and mint plate, drinks (2022–2026 reviews) · about ¥1,000–3,000 (Tabelog; 2022–2024 reviews)',
    website: null, gmaps: gm('cafe grayish green 京都'), menu_url: null,
    notes: '[Mint cafe · south of Gion, by Instagram reservation] A tiny, green-and-white cafe devoted to mint, run by one mint-loving owner who grows it in the courtyard: delicate mint parfaits, choco-mint and seasonal plates like sakura and mint, and mint-scented water. Open irregularly — reserve and pre-order by Instagram DM. Cash only.',
    chef_bio: { chef_name: null, roles: ['Owner, who runs the cafe alone (unnamed)'], origin: null,
      background: 'Per Tabelog and reviews (2022–2026): a mint-sweets cafe opened 12 February 2021, run by one owner passionate about mint, who grows mint in the courtyard and takes reservations by Instagram.',
      philosophy: 'Desserts made with home-grown mint and natural flavours (2022 reviews).', specialty: 'Mint parfait.',
      anecdotes: [
        { text: 'A September 2022 visitor who grows mint at home was greeted by the scent of mint on entering, and by mint-infused water.', source: R + 'B454434002/' },
        { text: 'An April 2024 diner explained the routine: DM on Instagram to reserve a seat and order in advance, as the shop opens only occasionally.', source: R + 'B482721050/' },
        { text: 'In April 2026 the owner warned that the sakura jelly under the sakura and mint parfait might not suit everyone; the reviewer found it a subtle taste of spring.', source: R + 'B526464551/' },
      ],
      japanese_sources_summary: '食べログ: カフェ、東山区小松町164、火・水・木曜休み、営業時間の記載なし、予約可 (Instagram で受付)、カード・電子マネー不可、禁煙、2021年2月12日開店。口コミ (2022年8月〜2026年4月、英語): ミントのスイーツの専門店、店主が1人で営む、Instagram の DM で予約と事前注文、不定期営業、中庭でミントを育てている、ミントの水、ミントやチョコミントのパフェ、桜とミントのパフェプレートなど季節のパフェ、緑と白の店内。',
      confidence: 'medium', sources: [TB, R + 'B453616725/', R + 'B454434002/', R + 'B455656804/', R + 'B456076449/', R + 'B461754385/', R + 'B462330898/', R + 'B474260815/', R + 'B482721050/', R + 'B520232578/', R + 'B526464551/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reserve and pre-order by Instagram DM; cash only; irregular opening.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区小松町164',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; latest review April 2026; opens irregularly.' },
    pin_source: `Tabelog ${TB} (35.000382, 135.771817); GSI matched only the town 小松町, so loc_precise false; nearest Kyoto record 61 m away; checked against main fb7ef956; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B526464551/'],
    price_note: 'No prices given in the reviews.', last_checked: TODAY, items: [
      it('', '', 'Mint parfait', '', 'Parfaits', 'ask', 'ask', '2022–2026 reviews.', 'mint_parfait'),
      it('', '', 'Sakura and mint parfait plate (seasonal)', '', 'Parfaits', 'ask', 'ask', 'April 2026.', 'sakura_parfait'),
    ] }, {
    cuisine: '中庭で育てたミントをほとんどすべてに使うミントのスイーツの専門店: ミントの水、ミントやチョコミントのパフェ、桜とミントのパフェプレートなど季節のパフェ、ドリンク (2022〜2026年の口コミ)・1,000〜3,000円ほど (食べログ、2022〜2024年の口コミ)',
    neighborhood: '祇園の南、大和大路の近く。Instagram で予約',
    gf_detail: '要確認。ミントのパフェ、ゼリー、ドリンク、チョコを使うものも。グルテンの情報はない (2022〜2026年の口コミ)。',
    vegan_detail: '要確認。ミントのゼリーやドリンクもあるが、パフェにはクリームやアイス。材料の情報はない (2022〜2026年の口コミ)。',
    notes: '[ミントのカフェ・祇園の南、Instagram で予約] ミント好きの店主が1人で営む緑と白の小さなカフェ。中庭で育てたミントの繊細なパフェ、チョコミント、桜とミントなど季節のプレート、ミントの香りの水。不定期営業なので Instagram の DM で予約と事前注文を。現金のみ。',
  });
}

// ================================================================ 京料理 田鶴 Kyoryori Tazuru
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26002903/'; const R = TB + 'dtlrvwlst/'; const WEB = 'http://www.tazuru.com/';
  const H = day(['11:00', '22:00']);
  put({
    id: 'kyoto_kyoryori_tazuru', name: '京料理 田鶴 (Kyoryori Tazuru)', category: 'OMNI',
    lat: 34.99948885787586, lng: 135.76870009030048, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto kaiseki seasoned with dashi and soy — sashimi, grilled ayu, eel, saba sushi in bamboo leaf; no gluten information (2017–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-based kaiseki course with dashi (2017–2025 reviews).',
    hours_raw: 'Daily 11:00–22:00, last order 20:00; hours may change (Tabelog). Reservations accepted (Tabelog). Cards; no QR (Tabelog). 50 seats with tatami banquet rooms and private rooms for 10–20; karaoke; bring-your-own drinks allowed (Tabelog). The restaurant of a long-established ryokan on Kiyamachi north of Matsubara, backing onto the Kamo River, with a summer river terrace (noryo-yuka) looking toward Higashiyama (Tabelog; 2017–2025 reviews). Non-staying guests dine here for lunches, business dinners and events (2019–2025 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi north of Matsubara, on the Kamo River',
    cuisine: 'Kyoto kaiseki at a riverside ryokan, served by kimono-clad staff, outside on the river terrace in summer (2017–2025 reviews) · a lacquered tray of appetisers such as saba sushi in bamboo leaf; dashi-rich, gently seasoned courses; sweetfish and eel in early summer (2019 and 2025 reviews) · Tanba wine (January 2024) · about ¥10,000–20,000 (2017–2023 reviews)',
    website: WEB, gmaps: gm('京料理 田鶴 木屋町'), menu_url: null,
    notes: '[Kyoto kaiseki · Kiyamachi-Matsubara, on the Kamo River] The restaurant of an old ryokan on the Kamo River, open to non-guests: dashi-rich, delicately seasoned Kyoto kaiseki brought by kimono-clad staff in tatami rooms, or in summer out on the river terrace facing Higashiyama — grilled ayu, eel, saba sushi in bamboo leaf. Good for business dinners and banquets.',
    chef_bio: { chef_name: null, roles: ['Kitchen and kimono-clad staff (unnamed)'], origin: null,
      background: 'Per Tabelog and reviews (2017–2025): the Kyoto-cuisine restaurant of a historic ryokan on the Kamo River between Gion-Shijo and Kiyomizu-Gojo, with a summer noryo-yuka terrace, banquet rooms and private rooms.',
      philosophy: null, specialty: 'Kaiseki on the summer river terrace.',
      anecdotes: [
        { text: 'A September 2019 diner walked through the inn to the river terrace as the sun set over Higashiyama, starting with saba sushi in bamboo leaf on a lacquered tray.', source: R + 'B419870732/' },
        { text: 'A July 2023 networking dinner was kept off the terrace by rain but enjoyed the room\'s summer platform.', source: R + 'B468268488/' },
        { text: 'A June 2025 business dinner found the early-June terrace a little chilly but the sweetfish and eel excellent.', source: R + 'B509336339/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、下京区木屋町通り松原上ル美濃屋町179-1、清水五条から378m、毎日 11:00〜22:00 (L.O.20:00)、営業時間は変わることあり、予約可、カード可、QR 不可、50席、座敷、10〜20名の個室、カラオケ、持ち込み可、公式サイト tazuru.com。口コミ (2017年6月〜2025年6月、英語): 鴨川沿いの老舗旅館の料理、夏は川床、東山の眺め、着物の仲居さん、黒塗りの足付きの器の前菜、笹巻きの鯖寿司、だしの効いたやさしい京料理、鮎、うなぎ、丹波ワイン、宿泊しない客の昼食・接待・会合にも、2階の広い宴会場。',
      confidence: 'medium', sources: [TB, WEB, R + 'B274856806/', R + 'B414768800/', R + 'B419870732/', R + 'B437320207/', R + 'B468268488/', R + 'B472310526/', R + 'B475780790/', R + 'B477779145/', R + 'B496185323/', R + 'B509336339/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ryokan restaurant open to non-guests; tatami rooms; cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区木屋町通り松原上ル美濃屋町179-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and website; reviews through June 2025.' },
    pin_source: `Tabelog ${TB} (34.999489, 135.768700); cross-checked: GSI 京都府京都市下京区美濃屋町179番地 (lot) 15 m; nearest Kyoto record 29.3 m away; checked against main fb7ef956; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B419870732/'],
    price_note: 'No course prices given; reviewers spent about ¥10,000–20,000.', last_checked: TODAY, items: [
      it('', '', 'Kyoto kaiseki course', '', 'Course', 'ask', 'no', '2017–2025 reviews.', 'kaiseki'),
    ] }, {
    cuisine: '着物の仲居さんが運ぶ鴨川沿いの旅館の京料理の懐石、夏は川床で (2017〜2025年の口コミ)・笹巻きの鯖寿司などを黒塗りの器に盛った前菜、だしの効いたやさしい味のコース、初夏の鮎とうなぎ (2019年・2025年の口コミ)・丹波ワイン (2024年1月)・10,000〜20,000円ほど (2017〜2023年の口コミ)',
    neighborhood: '松原の北の木屋町、鴨川沿い',
    gf_detail: '要確認。だしと醤油の京料理の懐石: 刺身、鮎の塩焼き、うなぎ、笹巻きの鯖寿司。グルテンの情報はない (2017〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚とだしの懐石のコース (2017〜2025年の口コミ)。',
    notes: '[京料理の懐石・木屋町松原、鴨川沿い] 宿泊しなくても利用できる鴨川沿いの老舗旅館の料理。着物の仲居さんが運ぶだしの効いた上品な京料理を座敷で、夏は東山を望む川床で。鮎、うなぎ、笹巻きの鯖寿司。接待や宴会に。',
  });
}

// ================================================================ いづつ屋 先斗町店 Izutsuya Pontocho
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26040481/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://kyoto-izutsuya.com/';
  const MO = day(['17:00', '23:00']); const H = day(['11:30', '15:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_izutsuya_pontocho', name: 'いづつ屋 先斗町店 (Izutsuya Pontocho)', category: 'OMNI',
    lat: 35.00707403787183, lng: 135.77117159037536, cuisine_type: 'sukiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: sukiyaki in a sweet soy sauce (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef sukiyaki restaurant (2025–2026 reviews).',
    hours_raw: 'Monday 17:00–23:00 (last order 22:00); Tuesday–Sunday 11:30–15:00 (last order 14:30) and 17:00–23:00 (last order 22:00) (Tabelog). Reservations accepted; with a seat-only booking you choose the course on arrival (Tabelog). Dinner is courses only (official site). Cards and e-money; no QR (Tabelog). 44 seats, 22 on each floor, private rooms, and a river-view space by the Kamo (Tabelog; 2025–2026 reviews). On Pontocho south of Sanjo; 5 min walk from Keihan Sanjo or Hankyu Kawaramachi Stn (Tabelog). Opened 20 November 2023 (Tabelog).',
    hours: { 0: MO, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho south of Sanjo, by the Kamo River',
    cuisine: 'Pontocho restaurant of a Kyotanba meat business with its own ranch, serving sukiyaki cooked at the table by staff (2025–2026 reviews) · lean or marbled sukiyaki courses with appetisers, finishing rice and dessert, and an abura-yaki (oil-grilled) option; matsutake in autumn (November 2025–September 2026) · sukiyaki lunch (November 2025, January 2026) · about ¥5,000–6,000 at lunch, ¥10,000–15,000 at dinner (Tabelog; 2025–2026 reviews)',
    website: WEB, gmaps: gm('いづつ屋 先斗町店'), menu_url: null,
    notes: '[Sukiyaki · Pontocho by the Kamo River] A calm, upscale sukiyaki house on Pontocho, run by a Kyotanba meat business with its own ranch: staff cook lean or marbled beef in sweet soy with vegetables and tofu, for dipping in rich egg, with appetisers and rice to finish — or oil-grilled. Private rooms and river views; lunch too. Not cheap, but reviewers found it worth it.',
    chef_bio: { chef_name: null, roles: ['Staff who cook the sukiyaki at the table (unnamed)'], origin: null,
      background: 'Per Tabelog and the official site: a Tanba beef and Kyoto meat sukiyaki restaurant opened 20 November 2023 on Pontocho. The site says Izutsuya has 75 years in Kyotanba (京丹波で75年), raises cattle on its own ranch and runs restaurants to feed diners\' views back into production.',
      philosophy: 'From its own ranch to the table, with diners\' views fed back into production (official site).', specialty: 'Marbled sukiyaki course.',
      anecdotes: [
        { text: 'A November 2025 family of five marked a second anniversary with the ¥10,000 course in a private room, with plenty of matsutake.', source: R + 'B518217617/' },
        { text: 'An August 2026 visitor too late to book the riverside seats was told to come anyway, and got a table by the river.', source: R + 'B533820254/' },
        { text: 'A September 2026 diner called it not cheap but worth it for the food, room and sense of occasion.', source: R + 'B535889824/' },
      ],
      japanese_sources_summary: '食べログ: すき焼き、中京区先斗町通り三条下ル若松町140-4、阪急京都河原町駅・京阪三条駅から徒歩5分、月 17:00〜23:00 (L.O.22:00)、火〜日 11:30〜15:00 (L.O.14:30)・17:00〜23:00 (L.O.22:00)、予約可 (席のみの予約は来店後にコースを選ぶ)、カード・電子マネー可、QR 不可、44席 (1階22・2階22)、2023年11月20日開店、公式サイト kyoto-izutsuya.com。公式サイト: 京丹波で75年、自社牧場、夜はコース料理。口コミ (2025年11月〜2026年9月、英語): 店員が席で作るすき焼き、上質な卵、前菜、締めのご飯、油焼き、秋の松茸、昼のすき焼き、個室、鴨川沿いの席、安くはないが価値があるとの声。',
      confidence: 'medium', sources: [TB, WEB, R + 'B515630966/', R + 'B517938496/', R + 'B518217617/', R + 'B520283173/', R + 'B520852963/', R + 'B529405714/', R + 'B533820254/', R + 'B535889824/', R + 'B536515143/', R + 'B536579499/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff cook at the table; private rooms; cards and IC.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町通り三条下ル若松町140-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and website; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.007074, 135.771172); cross-checked: GSI 京都府京都市中京区若松町140番地 (lot) 20 m; kyoto_il_buco_pontocho (140-2) is 6.6 m away; checked against main fb7ef956; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B518217617/'],
    price_note: 'Price from a November 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Sukiyaki course', '¥10,000', 'Courses', 'no', 'no', 'November 2025.', 'course'),
      it('', '', 'Sukiyaki lunch', '', 'Lunch', 'no', 'no', 'November 2025.', 'lunch'),
    ] }, {
    cuisine: '自社牧場をもつ京丹波の精肉の会社の先斗町の店で、店員が席で作るすき焼き (2025〜2026年の口コミ)・前菜、締めのご飯、デザート付きの赤身か霜降りのすき焼きのコース、油焼きも、秋は松茸 (2025年11月〜2026年9月)・昼のすき焼き (2025年11月、2026年1月)・昼5,000〜6,000円ほど、夜10,000〜15,000円ほど (食べログ、2025〜2026年の口コミ)',
    neighborhood: '三条の南の先斗町、鴨川沿い',
    gf_detail: 'グルテンフリー不可。甘い醤油のすき焼き (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。牛肉のすき焼きの店 (2025〜2026年の口コミ)。',
    notes: '[すき焼き・鴨川沿いの先斗町] 京丹波で75年の精肉の会社の店で、落ち着いた上質な先斗町のすき焼き。店員が赤身か霜降りの牛肉を甘い醤油で野菜や豆腐と炊き、濃厚な卵にくぐらせて。前菜と締めのご飯付き、油焼きも。個室や川の見える席、昼も営業。安くはないが価値があると口コミ。',
  });
}

save();
