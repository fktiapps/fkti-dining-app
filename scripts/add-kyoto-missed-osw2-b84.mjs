// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 84.
//   Queue run from the osw2 worktree, 2026-11-08. Rest tier, nearest-first (queue.mjs kyoto-missed next rest 2000, lane ids by distance).
//   Rest rule: at least one 2025–26 review and enough sourced detail. Days the sources do not state are left out of hours.
//   Brands checked against queue-status.jsonl (full names and brand stems), than.co.jp/brands and 株式会社WILL (will-food.com).
//   + ポキート Poquito (Spanish bar on Kawaramachi north of Sanjo since 2005)
//   - GRILL 54TH — large parent: the restaurant of Dhawa Yura Kyoto, a Banyan Group hotel (Greg 11-08 big-chain hotel ruling)
//   - sinoa — large parent: a THAN brand (than.co.jp/brands)
//   + 晦庵河道屋 Misoka-an Kawamichiya (Edo-period soba house, reopened at Anekoji-Fuyacho in October 2025; the 河道屋 noren family is
//     drafted shop by shop, as 河道屋倖松庵 was in osw13-92; 総本家 河道屋 in data is the confectionery, a different concept)
//   - TEPPAN TAVERN TENAMONYA — no 2025–26 review: the latest is from 2022 (rest rule)
//   + WAKASA & CO. LOUNGE (blueberry afternoon tea and bar of 株式会社わかさ生活 — a non-restaurant company with one lounge, as ハンザン)
//   - 玄品 京都祇園 — chain (関門海), as 26042669
//   - NO LIMIT — large parent: a THAN brand (than.co.jp/brands)
//   + 琉球食堂 KUKURU 烏丸店 (Okinawan lunch and izakaya by Nishiki; its site shows one shop)
//   None of the drafted shops is in data/kyoto.json, hidden records included: grep by id, name and address.
//   Service charges: KUKURU ¥300 at dinner (Tabelog).
//   Pins: Tabelog /en/ point, cross-checked with GSI; Poquito moved ~6.5 m to clear kyoto_simpson_and_sons (3.6 m) and kyoto_mizuta_shokudo
//   (5.9 m); each 9 m+ from every pin on main, hidden records included.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-84');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26032413', 'GRILL 54TH: large parent — the restaurant of Dhawa Yura Kyoto (dhawa.com), a hotel of the Banyan Group’s Dhawa brand (Greg 11-08 ruling on venues in big-chain hotels)');
skip('26037315', 'sinoa: large parent — sinoa is a brand of 株式会社THAN (than.co.jp/brands)');
skip('26005443', 'TEPPAN TAVERN TENAMONYA: no 2025–26 review — the latest Tabelog review is from 2022 (rest rule)');
skip('26002743', '玄品 京都祇園 ふぐ・うなぎ・かに料理: chain — 玄品 (関門海), about 60 shops; same ruling as 26042669');
skip('26044683', 'NO LIMIT: large parent — NO LIMIT is a brand of 株式会社THAN (than.co.jp/brands)');

// ================================================================ ポキート
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26002065/'; const R = TB + 'dtlrvwlst/';
  const A = day(['17:00', '23:00']), B = day(['17:00', '22:00']);
  put({
    id: 'kyoto_poquito_kawaramachi', name: 'ポキート (Poquito)', category: 'OMNI',
    lat: 35.010384, lng: 135.769382, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Spanish small plates, ham, carpaccio, ajillo, pizza, pasta and fried fish from a blackboard menu; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Spanish dishes of ham, seafood and meat (reviews).',
    hours_raw: '17:00–23:00 (last food order 22:00, drinks 22:30) Monday, Tuesday and Thursday–Saturday; 17:00–22:00 Sunday (last food order 21:00); closed Wednesday (Tabelog). Reservations by phone; same-day bookings sometimes possible (Tabelog; July 2025). Cards (VISA, Master, JCB, AMEX, Diners) and QR payments; no e-money (Tabelog). 30 seats: 15 at the counter and 15 at tables, with a private room; non-smoking (Tabelog). Ground floor on Kawaramachi north of Sanjo, 5 minutes from Kyoto Shiyakusho-mae (Tabelog). Opened 17 July 2005 (Tabelog).',
    hours: { 0: A, 1: A, 3: A, 4: A, 5: A, 6: B }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi, north of Sanjo',
    cuisine: 'Spanish bar with a blackboard of the day’s dishes, in Kyoto since 2005 (Tabelog; October 2025) · Iberico bellota ham, gazpacho with hamo, coca with sanma cream, sole in brown butter, octopus spring rolls, truffle carbonara (July 2025) · Poquito salad, carpaccio, duck and foie gras terrine, hotaru-ika ajillo, sole (May 2025); sea-urchin pasta with plenty of karasumi (May 2026) · pizza and pasta; a good whisky list for highballs (April 2025)',
    website: null, gmaps: gm('ポキート 京都 河原町'), menu_url: TB,
    notes: "[Spanish bar · Kawaramachi north of Sanjo, since 2005] A lively Spanish bar, one of Kyoto’s first, with a counter and a blackboard crowded with the day’s dishes — Iberico bellota, hotaru-ika ajillo, sea-urchin pasta, truffle carbonara. Book by phone; closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Chef not named'], origin: null,
      background: 'Opened in July 2005 (Tabelog); an October 2025 reviewer calls it a pioneering Spanish bar in Kyoto. Reviewers (2024–2026) describe friendly staff and a long blackboard of seasonal specials.',
      philosophy: null,
      specialty: 'Spanish tapas and seasonal specials.',
      anecdotes: [
        { text: 'An August 2025 guest returned after ten years and started with a well-chilled Heineken on a hot Saturday.', source: R + 'B111603911/' },
        { text: 'A July 2025 same-day booking ran through Iberico bellota, hamo gazpacho and sole in brown butter, with no room left for the truffle carbonara.', source: R + 'B510415053/' },
        { text: 'A May 2026 regular and spouse came for sea-urchin pasta heaped with karasumi.', source: R + 'B507290112/' },
      ],
      japanese_sources_summary: '食べログ: ポキート、スペイン料理・バル・ワインバー、京都市中京区河原町通三条上ル下丸屋町401-10 田中ビル1F、月・火・木〜土 17:00〜23:00 (料理L.O.22:00、ドリンクL.O.22:30)、日 17:00〜22:00 (料理L.O.21:00)、水曜定休、予約は電話で、カード・QR決済可、電子マネー不可、30席 (カウンター15、テーブル15)、個室あり、禁煙、2005年7月17日オープン。口コミ (2024〜2026年、英語): 京都のスペインバルの草分け、黒板にその日のおすすめ、イベリコ・ベジョータ、鱧のガスパチョ、さんまクリームのコカ、舌平目の焦がしバター、タコの春巻き、トリュフのカルボナーラ、ポキートサラダ、カルパッチョ、鴨とフォアグラのテリーヌ、ほたるいかのアヒージョ、雲丹とからすみのパスタ、ピザ、ハイボールのウイスキーも豊富、気さくなスタッフ。',
      confidence: 'low', sources: [TB, R + 'B111603911/', R + 'B498558248/', R + 'B504498663/', R + 'B507290112/', R + 'B510415053/', R + 'B515926906/', R + 'B517656916/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book by phone; busy counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町通三条上ル下丸屋町401-10 田中ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.010340, 135.769428), offset ~6.5m to clear kyoto_simpson_and_sons (3.6m) and kyoto_mizuta_shokudo (5.9m); cross-checked: GSI 京都府京都市中京区下丸屋町401番地 (lot) 28m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No published prices; reviews report about ¥5,000–15,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Iberico bellota ham', '', 'Tapas', 'ask', 'no', '', 'iberico'),
      it('', '', 'Hotaru-ika ajillo', '', 'Tapas', 'ask', 'no', 'Seasonal.', 'ajillo'),
      it('', '', 'Sea-urchin pasta with karasumi', '', 'Pasta', 'no', 'no', '', 'uni_pasta'),
    ] }, {
    cuisine: '2005年からの京都のスペインバル。黒板にその日の料理 (食べログ、2025年10月)・イベリコ・ベジョータ、鱧のガスパチョ、さんまクリームのコカ、舌平目の焦がしバター、タコの春巻き、トリュフのカルボナーラ (2025年7月)・ポキートサラダ、カルパッチョ、鴨とフォアグラのテリーヌ、ほたるいかのアヒージョ、舌平目 (2025年5月)、雲丹とたっぷりのからすみのパスタ (2026年5月)・ピザとパスタ、ハイボールのウイスキーも豊富 (2025年4月)',
    neighborhood: '河原町、三条の北',
    gf_detail: '要確認。スペインの小皿、生ハム、カルパッチョ、アヒージョ、ピザ、パスタ、魚のフライなど黒板のメニュー。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。生ハム、魚介、肉のスペイン料理 (口コミ)。',
    notes: '[スペインバル・河原町の三条北、2005年から] 京都のスペインバルの草分けのにぎやかな店。カウンターと、その日の料理がずらりと並ぶ黒板。イベリコ・ベジョータ、ほたるいかのアヒージョ、雲丹のパスタ、トリュフのカルボナーラ。予約は電話で、水曜休み。',
  });
}

// ================================================================ 晦庵河道屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26043813/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '16:00']);
  put({
    id: 'kyoto_misokaan_kawamichiya', name: '晦庵河道屋 (Misoka-an Kawamichiya)', category: 'OMNI',
    lat: 35.00977201786829, lng: 135.76542760040667, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: soba noodles (often with wheat), tempura and soy-based dashi; no 100% buckwheat option is described (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: soba in bonito dashi, duck, herring and chicken dishes (reviews).',
    hours_raw: '11:00–16:00 (last order 15:30); closed Wednesday and Thursday, plus occasional days on a monthly schedule (Tabelog). No seat reservations; the signature hot pot (Hokorō) is booked by phone or email up to two days ahead, for 11:00–13:00 or 13:30–15:30 (Tabelog; May 2026). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 28 table seats, including sofa tables; a waiting area inside; a garden at the back; non-smoking (Tabelog; June and August 2026). On Anekoji west of Fuyacho, near Kyoto City Hall (Tabelog). Reopened here on 19 October 2025 after the Edo-period soba house moved (Tabelog; March 2026).',
    hours: { 0: H, 1: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Anekoji at Fuyacho, near Kyoto City Hall',
    cuisine: 'Long-established Kyoto soba house dating from the Edo period, relocated in 2025 (March 2026) · duck nanban soba ¥1,600, seasonal rice ¥350 (March 2026); duck seiro soba; chilled sudachi soba ¥1,600; herring soba; ginger rice (2026) · tea soba; grilled chicken with sansho; tempura set (June 2026) · the signature Hokorō hot pot with a central chimney — yuba, shinjo, fried tofu, chicken, Kujo leek, shiitake and Kyoto vegetables, by reservation (May 2026) · soba tea to take home (August 2026)',
    website: null, gmaps: gm('晦庵河道屋 姉小路'), menu_url: TB,
    notes: "[Soba · Anekoji-Fuyacho, an Edo-period soba house reborn] The venerable Kawamichiya soba house, reopened at a new address in October 2025 with old fittings and a garden: duck nanban, herring soba, chilled sudachi soba, and its famous chimney hot pot by reservation. Lunch only; closed Wednesday and Thursday.",
    chef_bio: { chef_name: null, roles: ['Not named'], origin: null,
      background: 'A Kyoto soba house dating from the Edo period that relocated and renovated, reopening here in October 2025 (Tabelog; March and August 2026 reviews). An August 2026 reviewer notes that the new shop keeps much of the old atmosphere, with old fixtures, a garden at the back and an open kitchen.',
      philosophy: null,
      specialty: 'Kyoto soba; the Hokorō hot pot.',
      anecdotes: [
        { text: 'An April 2026 regular returned after the renovation for duck seiro soba with bamboo shoots, and missed the old room a little.', source: R + 'B526917928/' },
        { text: 'A May 2026 group had the chimney-centred Hokorō hot pot of yuba, shinjo and Kyoto vegetables, by reservation.', source: R + 'B532130040/' },
        { text: 'An August 2026 visitor bought the soba tea as a souvenir after herring soba and ginger rice.', source: R + 'B533594630/' },
      ],
      japanese_sources_summary: '食べログ: 晦庵河道屋、そば、京都市中京区姉小路通麩屋町西入姉大東町556-1、月・火・金〜日・祝日 11:00〜16:00 (L.O.15:30)、水・木定休、月ごとに臨時休業あり、席の予約不可、名物の鍋は2日前までに電話かメールで予約 (11:00〜13:00、13:30〜15:30)、カード可、電子マネー・QR決済不可、28席 (テーブルのみ)、禁煙、2025年10月19日オープン。口コミ (2026年、英語): 江戸時代からの老舗のそば屋が移転、鴨南蛮そば1,600円、季節のご飯350円、鴨せいろ、すだちそば1,600円、にしんそば、生姜ご飯、茶そば、鶏の山椒焼き、天ぷらのセット、中央に煙突のある名物の鍋 (湯葉、しんじょ、ひろうす、鶏、九条ねぎ、椎茸、京野菜)、そば茶を土産に、奥に庭、古い調度、オープンキッチン、ソファのテーブル、店内に待合。',
      confidence: 'low', sources: [TB, R + 'B525047843/', R + 'B526917928/', R + 'B529565151/', R + 'B530006548/', R + 'B532130040/', R + 'B533594630/', R + 'B534810879/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No seat reservations; hot pot booked 2 days ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区姉小路通麩屋町西入姉大東町556-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (reopened 19 October 2025); reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.009772, 135.765428); cross-checked: GSI 京都府京都市中京区姉大東町556番地 (lot) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525047843/', R + 'B534810879/'],
    price_note: 'Prices from March and August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Duck nanban soba', '¥1,600', 'Soba', 'no', 'no', 'March 2026.', 'kamonanban'),
      it('', '', 'Chilled sudachi soba', '¥1,600', 'Soba', 'no', 'no', 'Seasonal; August 2026.', 'sudachi'),
      it('', '', 'Seasonal rice', '¥350', 'Rice', 'ask', 'no', 'March 2026.', 'gohan'),
      it('', '', 'Hokorō hot pot (by reservation)', '', 'Hot pot', 'ask', 'no', 'Book 2 days ahead.', 'nabe'),
    ] }, {
    cuisine: '江戸時代からの京都のそば屋、2025年に移転 (2026年3月)・鴨南蛮そば1,600円、季節のご飯350円 (2026年3月)、鴨せいろ、すだちそば1,600円、にしんそば、生姜ご飯 (2026年)・茶そば、鶏の山椒焼き、天ぷらのセット (2026年6月)・中央に煙突のある名物の鍋、湯葉、しんじょ、ひろうす、鶏、九条ねぎ、椎茸、京野菜、要予約 (2026年5月)・持ち帰りのそば茶 (2026年8月)',
    neighborhood: '姉小路麩屋町、京都市役所の近く',
    gf_detail: 'グルテンフリー不可。そば (小麦を含むことが多い)、天ぷら、醤油の出汁。十割そばの説明はない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。鰹出汁のそば、鴨、にしん、鶏の料理 (口コミ)。',
    notes: '[そば・姉小路麩屋町、江戸からの老舗の新店] 老舗の河道屋のそば屋が2025年10月、新しい場所に移って再開。古い調度と奥の庭はそのままに、鴨南蛮、にしんそば、すだちそば、要予約の名物の煙突の鍋。昼のみ、水・木休み。',
  });
}

// ================================================================ WAKASA & CO. LOUNGE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26042655/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://sites.google.com/view/wakasaandco/';
  const H = day(['10:00', '20:00']);
  put({
    id: 'kyoto_wakasa_and_co_lounge', name: 'WAKASA & CO. LOUNGE', category: 'OMNI',
    lat: 35.00399402787039, lng: 135.76047815035176, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Afternoon-tea sweets and savouries, bagel sandwiches and cocktails; a rice-flour scone appeared on one tea set (September 2025), but no gluten information is published.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Blueberry drinks, smoothies and gin cocktails; the afternoon tea and sandwiches use dairy and meat (reviews).',
    hours_raw: '10:00–20:00 daily: afternoon tea 10:00–17:00 (90 minutes, reservation), tea lounge 11:00–16:00, bar 12:00–20:00 (Tabelog). Afternoon tea books up days ahead; the bar takes walk-ins (2025 reviews). Order from a menu or QR code; pay at the register (March 2025). Cards and e-money; no service or table charge (Tabelog). 23 seats: 17 at the counter, 4 at tables and 3 on sofas; non-smoking (Tabelog). Second floor of the WAKASA & Co. building of 株式会社わかさ生活 on Karasuma just east of Shijo — a café downstairs, a shrine to eye health on the fifth floor (Tabelog; September 2025). Opened 20 March 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo-Karasuma',
    cuisine: 'Blueberry-themed lounge from the blueberry-supplement maker Wakasa Seikatsu: reservation-only afternoon tea by day, a bar from noon (2025 reviews) · seasonal afternoon tea sets, e.g. chestnut and blueberry ¥5,000 with a rice-flour scone (September 2025), Shine Muscat (October 2026) · Buruburu-kun lunch set: bagel sandwich of prosciutto and cream cheese, salad and blueberry tea (September 2025) · blueberry smoothie (July 2025) · blueberry mojito with the house gin “Berry & Berry” made with Kyoto blueberries (September 2025)',
    website: SITE, gmaps: gm('WAKASA & Co. LOUNGE 京都 烏丸'), menu_url: SITE,
    notes: "[Café & bar · Shijo-Karasuma, blueberry afternoon tea] The lounge of a Kyoto blueberry-supplement company’s playful headquarters building: seasonal blueberry afternoon teas (about ¥5,000, book ahead), a cute Buruburu-kun lunch set, and blueberry-gin cocktails at the bar until 8 pm. No charge.",
    chef_bio: { chef_name: null, roles: ['Not named'], origin: null,
      background: 'Opened in March 2025 (Tabelog) in the WAKASA & Co. building of 株式会社わかさ生活, the Kyoto maker of blueberry supplements, registered at the same address (NTA invoice register; 2025 reviews). The building also holds a ground-floor café, a forest-bathing room and a small shrine to eye health (September 2025).',
      philosophy: null,
      specialty: 'Blueberry afternoon tea and cocktails.',
      anecdotes: [
        { text: 'A March 2025 pre-opening visitor tried the bar, ordering from a QR code and paying at the register.', source: R + 'B502435736/' },
        { text: 'A July 2025 guest found the afternoon tea fully booked three days ahead and settled for a blueberry smoothie.', source: R + 'B510643985/' },
        { text: 'A September 2025 visitor had a blueberry mojito, then climbed to the fifth-floor shrine to pray for good eyesight.', source: R + 'B513715779/' },
      ],
      japanese_sources_summary: '食べログ: WAKASA & CO. LOUNGE、バー・スイーツ、京都市下京区長刀鉾町22 三光ビル2F、毎日 10:00〜20:00、アフタヌーンティー 10:00〜17:00 (90分制)、ティーラウンジ 11:00〜16:00、バー 12:00〜20:00、カード・電子マネー可、サービス料・チャージなし、23席 (カウンター17、テーブル4、ソファ3)、禁煙、2025年3月20日オープン、インボイス T6130001019343 (株式会社わかさ生活)。口コミ (2025〜2026年、英語): わかさ生活のブルーベリー専門店、昼は予約制のブルーベリーのアフタヌーンティー、夜はバー、QRコードで注文してレジで会計、栗とブルーベリーのアフタヌーンティー5,000円 (米粉のスコーン)、シャインマスカット、ブルブルくんセット (生ハムとクリームチーズのベーグルサンド、サラダ、ブルーベリーティー)、ブルーベリースムージー、京都のブルーベリーのジン「Berry & Berry」のモヒート、1階はカフェ、5階に目の神社、北欧の森林浴の部屋。',
      confidence: 'medium', sources: [TB, SITE, R + 'B502435736/', R + 'B504629635/', R + 'B510643985/', R + 'B513630447/', R + 'B513715779/', R + 'B513874897/', R + 'B514058078/', 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=6130001019343'] },
    cultural_comfort: { level: 'none_needed', note: 'QR-code ordering; book afternoon tea ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区長刀鉾町22 三光ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (opened 20 March 2025); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003994, 135.760478); cross-checked: GSI 京都府京都市下京区長刀鉾町22番地 (lot) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B514058078/'],
    price_note: 'Price from a September 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Seasonal afternoon tea (blueberry)', '¥5,000', 'Afternoon tea', 'ask', 'no', 'Reservation; 90 minutes.', 'afternoon_tea'),
      it('', '', 'Blueberry mojito (Berry & Berry gin)', '', 'Cocktails', 'gf', 'vegan', '', 'mojito'),
      it('', '', 'Blueberry smoothie', '', 'Drinks', 'ask', 'ask', '', 'smoothie'),
    ] }, {
    cuisine: 'ブルーベリーのサプリメントのわかさ生活によるブルーベリーづくしのラウンジ。昼は予約制のアフタヌーンティー、12時からはバー (2025年の口コミ)・季節のアフタヌーンティー、たとえば栗とブルーベリーで5,000円、米粉のスコーン付き (2025年9月)、シャインマスカット (2026年10月)・ブルブルくんのランチセット、生ハムとクリームチーズのベーグルサンド、サラダ、ブルーベリーティー (2025年9月)・ブルーベリースムージー (2025年7月)・京都のブルーベリーを使ったジン「Berry & Berry」のモヒート (2025年9月)',
    neighborhood: '四条烏丸',
    gf_detail: '要確認。アフタヌーンティーのスイーツとセイボリー、ベーグルサンド、カクテル。米粉のスコーンが出たことはある (2025年9月) が、グルテンの情報は公開されていない。',
    vegan_detail: '要確認。ブルーベリーのドリンク、スムージー、ジンのカクテル。アフタヌーンティーやサンドには乳製品や肉を使う (口コミ)。',
    notes: '[カフェ&バー・四条烏丸、ブルーベリーのアフタヌーンティー] 京都のブルーベリーサプリメントの会社の遊び心ある本社ビルのラウンジ。季節のブルーベリーのアフタヌーンティー (5,000円ほど、要予約)、かわいいブルブルくんのランチ、20時までバーでブルーベリーのジンのカクテル。チャージなし。',
  });
}

// ================================================================ 琉球食堂 KUKURU 烏丸店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26040609/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kukuru-kyoto.jp/';
  const L = ['11:30', '14:30'], D = ['18:00', '23:00'];
  put({
    id: 'kyoto_ryukyu_shokudo_kukuru', name: '琉球食堂 KUKURU 烏丸店 (Ryukyu Shokudo KUKURU)', category: 'OMNI',
    lat: 35.00454017574004, lng: 135.7604560607146, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Okinawa soba is a wheat noodle; seasonings for the champuru, rafute and jushi rice are not described, and no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Okinawa soba topped with rafute (braised pork) and pork dishes such as champuru (reviews).',
    hours_raw: 'Lunch 11:30–14:30 (last order 14:15) Monday–Friday; dinner 18:00–23:00 (last food order 22:00, drinks 22:30) Tuesday–Saturday; holidays 12:00–21:00; closed Sunday (Tabelog). Lunch fills up — book ahead (2026 reviews). ¥300 charge at dinner only (Tabelog). Cards (VISA, Master, JCB, AMEX) and e-money (Tabelog). 30 seats at the counter and tables; non-smoking, ashtray outside (Tabelog). A small shop in a lane opposite Daimaru’s Higashinotoin entrance, 3 minutes from Hankyu Karasuma Exit 18 (official site; Tabelog; June 2026). Opened 28 November 2023 (Tabelog).',
    hours: { 0: day(L), 1: day(L, D), 2: day(L, D), 3: day(L, D), 4: day(L, D), 5: day(D) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashinotoin, by Nishiki and Daimaru',
    cuisine: 'Okinawan home cooking and izakaya, with a strong drinks list (official site) · lunch sets about ¥1,000 with white rice or jushi: Okinawa soba with rafute, goya champuru with a small Okinawa soba, yushi-tofu soba, taco rice; daily set ¥900 (2026 reviews) · kombu-based soba broth; tender rafute; pickled ginger (June–July 2026)',
    website: SITE, gmaps: gm('琉球食堂 KUKURU 烏丸'), menu_url: SITE,
    notes: "[Okinawan · Higashinotoin by Daimaru, Okinawa soba lunches] A small, lively Okinawan diner in a lane by Daimaru: ¥1,000 lunch sets of Okinawa soba with rafute, goya champuru or yushi-tofu soba with jushi rice, and an Okinawan izakaya at night. Book lunch; closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Not named'], origin: null,
      background: 'Opened in November 2023 (Tabelog) as an izakaya specialising in Okinawan home cooking, opposite Daimaru’s Higashinotoin entrance (official site). Reviewers (2026) describe a bustling room with friendly staff and an Okinawan feel.',
      philosophy: 'The real taste of Okinawan home cooking, with a strong line-up of drinks (official site).',
      specialty: 'Okinawa soba; champuru.',
      anecdotes: [
        { text: 'A June 2026 sixth-time regular finally ordered the last untried lunch, yushi-tofu soba.', source: R + 'B515085002/' },
        { text: 'A June 2026 first-timer watched the World Cup on the big TV over an Okinawa soba set.', source: R + 'B530993690/' },
        { text: 'A July 2026 diner nursed a hangover with the gentle soba broth and rafute.', source: R + 'B504288952/' },
      ],
      japanese_sources_summary: '公式サイト: 琉球食堂 KUKURU、沖縄の郷土料理に特化した居酒屋、本場の味、お酒にも力、阪急烏丸駅から徒歩約3分、京都大丸の東洞院口前。食べログ: 琉球食堂 KUKURU 烏丸店、沖縄料理・居酒屋・食堂、京都市中京区東洞院錦小路下ル阪東屋町662-6、月 11:30〜14:30 (L.O.14:15)、火〜金 11:30〜14:30・18:00〜23:00 (料理L.O.22:00、ドリンクL.O.22:30)、土 18:00〜23:00、祝日 12:00〜21:00、日曜定休、ディナーのみチャージ300円、カード・電子マネー可、30席、禁煙 (店外に灰皿)、2023年11月28日オープン。口コミ (2026年、英語): 沖縄そばとじゅーしーのセット1,000円、ラフテー、ゴーヤーチャンプルーのセットに小さな沖縄そば、ゆし豆腐そば、タコライス、日替わり900円、白米かじゅーしーを選べる、昆布の出汁、紅しょうが、ランチは予約がおすすめ、にぎやかで気さくなスタッフ。',
      confidence: 'medium', sources: [SITE, TB, R + 'B504288952/', R + 'B515085002/', R + 'B519017593/', R + 'B528864064/', R + 'B530187312/', R + 'B530576136/', R + 'B530993690/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book lunch ahead; ¥300 charge at dinner.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区東洞院錦小路下ル阪東屋町662-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.004540, 135.760456); cross-checked: GSI 京都府京都市中京区阪東屋町662番地 (lot) 30m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B504288952/', R + 'B528864064/', R + 'B530576136/'],
    price_note: 'Lunch prices from 2026 reviews; ¥300 charge at dinner.', last_checked: TODAY, items: [
      it('', '', 'Okinawa soba set with jushi', '¥1,000', 'Lunch', 'no', 'no', '', 'soba_set'),
      it('', '', 'Goya champuru set with a small Okinawa soba', '¥1,000', 'Lunch', 'no', 'no', '', 'champuru_set'),
      it('', '', 'Daily set meal', '¥900', 'Lunch', 'ask', 'no', '', 'daily'),
    ] }, {
    cuisine: '沖縄の郷土料理の食堂と居酒屋、お酒も充実 (公式サイト)・白米かじゅーしーを選べる1,000円ほどのランチ: ラフテーのせ沖縄そば、小さな沖縄そば付きのゴーヤーチャンプルー、ゆし豆腐そば、タコライス、日替わり900円 (2026年の口コミ)・昆布の出汁のそば、やわらかいラフテー、紅しょうが (2026年6〜7月)',
    neighborhood: '東洞院、錦と大丸の近く',
    gf_detail: '要確認。沖縄そばは小麦の麺。チャンプルー、ラフテー、じゅーしーの味付けの説明はなく、グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。ラフテー (豚の角煮) をのせた沖縄そばや、チャンプルーなど豚肉の料理 (口コミ)。',
    notes: '[沖縄料理・東洞院の大丸近く、沖縄そばのランチ] 大丸近くの路地のにぎやかな沖縄の食堂。1,000円のランチは、ラフテーの沖縄そば、ゴーヤーチャンプルー、ゆし豆腐そばにじゅーしー、夜は沖縄の居酒屋。ランチは予約を、日曜休み。',
  });
}

save();
