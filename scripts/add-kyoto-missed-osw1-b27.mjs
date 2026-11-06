// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 27.
//   + ラクイイッカイ Rakui Ikkai (dashi-and-wine bistro off Muromachi-Ayanokoji, sommelier owner; since 2020)
//   + 天ぷら 天寅 新風館店 Tempura Tentora (casual tempura counter in Shinpukan by Karasuma-Oike; since 2020)
//   + マリーフランス 今出川店 Marie France (Imadegawa bakery known for heavy anpan; since 1984)
//   + 洋食の店 ITADAKI 円町店 (Enmachi branch of a Western-style restaurant founded 1921 at Kitano Hakubaicho)
//   - 瓢斗 四条烏丸店 (26002130) and 京のみやげ アスティ京都 (26023148): skipped (reasons below).
//   Picked on 2026-11-05: from `queue.mjs kyoto-missed next core 200`, lane ids 26034266, 26002130 (skipped), 26034404;
//   from `next notable 200`: 26023148 (skipped), 26003834, 26031614. None is in data/kyoto.json by name (ラクイ/Rakui, 天寅/
//   Tentora, マリーフランス/Marie France, ITADAKI — いただき繕 is a different brand). By address, 白楽天町502 福井ビル1F is also
//   kyoto_spice_chamber (address_ja “京都府京都市下京区室町綾小路下る白楽天町502番地 福井ビル1F”), a different shop, 7.6 m away.
//   Same-name count (same brand or operator only): ラクイイッカイ and 天寅 single shops. マリーフランス: this shop and one in
//   Kitayama named by reviewers — two. ITADAKI: the Kitano Hakubaicho original (since 1921) and this Enmachi branch (Tabelog
//   shop text) — two, neither in data. Service charges checked against Tabelog's Japanese original: ラクイイッカイ
//   お席代 ¥330; ITADAKI 特にございません; the others none listed.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-27');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26002130', '瓢斗 四条烏丸店: a same-name chain — the brand site hyoto.jp (read 2026-11-05) lists seven 瓢斗 shops: 京都駅前本店, 四条烏丸店, 渋谷店, 新橋店, 品川店, 梅田店 and 横浜駅前店; its operator also runs the nine-shop 瓢嘻 brand (hyoki.jp)');
skip('26023148', '京のみやげ アスティ京都: not a restaurant — a souvenir shop of sweets and deli items in the JR Kyoto Station Shinkansen concourse, with no seats listed (Tabelog); same reasoning as the coordinator’s ruling on the seatless Isetan bento counter');

// ================================================================ ラクイイッカイ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26034266/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '24:00']);
  put({
    id: 'kyoto_rakui_ikkai_muromachi', name: 'ラクイイッカイ (Rakui Ikkai)', category: 'OMNI',
    lat: 35.00241, lng: 135.75806, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Dashi-based dishes, carpaccio, game meats, terrines, pâté and a tonkatsu; agedashi tofu is the signature; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi throughout, fish, venison, horse, pork and chicken (2025–2026 reviews).',
    hours_raw: '18:00–24:00, Monday–Saturday; closed Sunday (Tabelog). Reservations accepted; phone ahead about dessert plates; one drink per person (Tabelog). Seat charge ¥330 a head including tax (Tabelog, original お席代). Cards accepted; no e-money or QR (Tabelog). 12 seats, including shared seating at a large iron teppan table for about eight; a private room, kanna., for course meals by reservation (Tabelog; November 2025). Non-smoking; Wi-Fi; BYO allowed; sommelier (Tabelog). No sign before opening (November 2025). Off Muromachi south of Ayanokoji, 2 min from Shijo / Karasuma Stns (Tabelog). Opened 5 June 2020 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Muromachi south of Ayanokoji — 2 min from Shijo Stn',
    cuisine: 'Dashi and wine bistro: Kyoto dashi dishes, local vegetables and game with over 150 wines chosen by the sommelier owner (Tabelog shop text; October 2026) · signature agedashi tofu (Tabelog shop text) · dashi and vegetable terrine ¥1,300 (November 2025) · carpaccio with edible flowers, salads (2025) · horse tartare, fromage de tête, herb-crusted venison, chicken-neck ajillo, liver pâté (January 2026) · venison steak; a light tonkatsu (2026) · wine by the glass to taste, pairings (2025–2026)',
    website: null, gmaps: gm('ラクイイッカイ 京都'), menu_url: null,
    notes: '[Wine bistro · Shijo-Muromachi, dashi meets wine] A small, sign-less bistro in the Muromachi back streets — formerly the restaurant sketch. — where a sommelier owner matches more than 150 wines to dashi dishes, local vegetables and game: agedashi tofu, a dashi-and-vegetable terrine, venison steak, fromage de tête. Shared seating around a big teppan table. Service can be slow when busy, and some find it pricey. ¥330 seat charge; closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner and sommelier (unnamed)'], origin: null,
      background: 'Per the Tabelog shop text: the restaurant sketch. became Rakui Ikkai, specialising in dashi and wine, with a private room, kanna., for course meals. Tabelog gives the opening as 5 June 2020. An October 2026 reviewer notes the owner is a sommelier.',
      philosophy: null, specialty: 'Agedashi tofu; game with wine pairings.',
      anecdotes: [
        { text: 'An August 2025 birthday diner, booking during Obon at half an hour’s notice, ordered only quick starters and ended up with a table of cold dishes.', source: R + 'B514931238/' },
        { text: 'A November 2025 visitor wished the soft drink came with dashi too, and was briefly unsure the sign-less door was the right place.', source: R + 'B520784169/' },
      ],
      japanese_sources_summary: '食べログ: ラクイイッカイ、居酒屋・創作料理・ワインバー、下京区白楽天町502 福井ビル1F、四条駅・烏丸駅から徒歩2分、月〜土 18:00〜24:00、日曜休み、予約可、デザートプレートは電話で確認、1ドリンク制、お席代1人330円、カード可、12席、禁煙、Wi-Fi、持ち込み可、ソムリエ、2020年6月5日オープン。店の紹介: sketch. が出汁とワインの店ラクイイッカイに、名物の揚げ出し豆腐、150種以上のワイン、個室 kanna. はコースのみ予約制。口コミ (2025〜2026年、英語): 出汁と野菜のテリーヌ1,300円、花をのせたカルパッチョ、馬肉のタルタル、フロマージュ・ド・テット、鹿のハーブ焼き、鶏ネックのアヒージョ、レバーパテ、鹿のステーキ、とんかつ、大きな鉄板のテーブルの相席、店主はソムリエ、提供が遅いことも。',
      confidence: 'medium', sources: [TB, R + 'B514931238/', R + 'B516964369/', R + 'B518709678/', R + 'B520310971/', R + 'B520784169/', R + 'B528066839/', R + 'B529828022/', R + 'B530237884/', R + 'B535838790/', R + 'B537019129/'] },
    cultural_comfort: { level: 'konnichiwa', note: '¥330 seat charge; one drink each; shared table; no sign before opening.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区白楽天町502 福井ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.00241, 135.75806); cross-checked: GSI 京都府京都市下京区白楽天町502番地 (lot) 54m; kyoto_spice_chamber (same building, 1F) is 7.6 m away, a different shop; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520784169/', TB],
    price_note: 'No menu read; one price from a November 2025 review; seat charge from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Dashi and vegetable terrine', '¥1,300', 'Plates', 'ask', 'no', 'November 2025.', 'dashi_terrine'),
      it('', '', 'Agedashi tofu (signature)', '', 'Plates', 'ask', 'no', 'Tabelog shop text; price not given.', 'agedashi_tofu'),
      it('', '', 'Seat charge, per person', '¥330', 'Charges', '', '', 'Tabelog.', 'seat_charge'),
    ] }, {
    cuisine: '出汁とワインのビストロ: 京の出汁料理、地元の野菜とジビエ、ソムリエの店主が選ぶ150種以上のワイン (食べログの店紹介、2026年10月)・名物の揚げ出し豆腐 (食べログの店紹介)・出汁と野菜のテリーヌ1,300円 (2025年11月)・エディブルフラワーのカルパッチョ、サラダ (2025年)・馬肉のタルタル、フロマージュ・ド・テット、鹿のハーブ焼き、鶏ネックのアヒージョ、レバーパテ (2026年1月)・鹿のステーキ、軽いとんかつ (2026年)・好みに合わせたグラスワインとペアリング (2025〜2026年)',
    neighborhood: '綾小路の南の室町。四条駅から徒歩2分',
    gf_detail: '要確認。出汁の料理、カルパッチョ、ジビエ、テリーヌ、パテ、とんかつ。名物は揚げ出し豆腐。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。出汁、魚、鹿、馬、豚、鶏 (2025〜2026年の口コミ)。',
    notes: '[ワインビストロ・四条室町、出汁とワイン] 室町の路地の看板のない小さなビストロ。元は sketch. で、ソムリエの店主が150種以上のワインを出汁料理、地元の野菜、ジビエに合わせる。揚げ出し豆腐、出汁と野菜のテリーヌ、鹿のステーキ、フロマージュ・ド・テット。大きな鉄板のテーブルで相席。混むと提供は遅め、高めと感じる声も。お席代330円、日曜休み。',
  });
}

// ================================================================ 天ぷら 天寅 新風館店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26034404/'; const R = TB + 'dtlrvwlst/';
  const HW = day(['11:00', '15:00'], ['17:00', '22:00']); const HE = day(['11:00', '22:00']);
  put({
    id: 'kyoto_tentora_shinpukan', name: '天ぷら 天寅 新風館店 (Tempura Tentora, Shinpukan)', category: 'OMNI',
    lat: 35.009355, lng: 135.760481, cuisine_type: 'tempura',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a tempura bar — wheat batter on nearly everything (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and there is vegetable tempura (sweet potato, fig), but batter, dipping broth and miso soup are not described (Tabelog; 2026 reviews).',
    hours_raw: 'Weekdays: lunch 11:00–15:00 (L.O. 14:30), dinner 17:00–22:00 (L.O. 21:30); weekends and holidays 11:00–17:00 (L.O. 16:30) and 17:00–22:00 (L.O. 21:30); open every day (Tabelog). Lunch reservations until 11:00, then first come, first served (Tabelog). Cards, e-money and QR accepted (Tabelog). 18 high counter seats (Tabelog; April 2026). Non-smoking; wheelchair accessible; Wi-Fi; children welcome (Tabelog). Ground floor of Shinpukan, 1 min from the Karasuma-Oike south ticket gate (Tabelog). Opened 22 June 2020 (Tabelog).',
    hours: { 0: HW, 1: HW, 2: HW, 3: HW, 4: HW, 5: HE, 6: HE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinpukan, Karasuma-Oike — 1 min from the station',
    cuisine: 'Casual tempura bar: freshly fried tempura sets and à la carte with drinks (2026 reviews) · tempura set meal ¥1,540 — shrimp, white fish, vegetables, a large sweet potato and kakiage, with rice, miso soup and pickles (April–July 2026) · Tentora set meal (May 2026) · tempura rice bowl, weekday lunch only (July 2026) · chilled sudachi soba with tempura; seasonal fig tempura (August 2026) · anago tempura, oden daikon, creative tempura of seafood, vegetables and meat (October 2026) · sake, wine, cocktails (Tabelog)',
    website: null, gmaps: gm('天ぷら 天寅 新風館'), menu_url: null,
    notes: '[Tempura · Shinpukan, a quick tempura counter by Karasuma-Oike] A bright, glass-fronted counter on the ground floor of Shinpukan, steps from Karasuma-Oike station, frying tempura to order all day. The ¥1,540 set brings shrimp, white fish, vegetables, a big slab of sweet potato and kakiage — more than most can finish — with rice and miso soup; weekday lunches add a tempura bowl, summer a chilled sudachi soba. In the evening it works as a tempura bar. Open daily; lunch walk-ins after 11:00.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Tabelog gives the opening as 22 June 2020. Reviewers note many visitors from abroad in Shinpukan (2026).',
      philosophy: null, specialty: 'Tempura set meal; tempura bowl.',
      anecdotes: [
        { text: 'A July 2026 diner, during the run-up to the Yamaboko procession, waited a little and then could not finish the generous tempura set.', source: R + 'B532110222/' },
        { text: 'An October 2026 group found the main tempura decent and the oden daikon good, but the anago tempura disappointing.', source: R + 'B537328433/' },
      ],
      japanese_sources_summary: '食べログ: 天ぷら 天寅 新風館店、天ぷら・バル・居酒屋、中京区烏丸通姉小路下ル場之町586-2 新風館、烏丸御池駅南改札から徒歩1分、平日 昼11:00〜15:00・夜17:00〜22:00、土日祝 11:00〜17:00・17:00〜22:00、無休、昼の予約は11時まで、カード・電子マネー・QR可、18席、禁煙、車椅子可、Wi-Fi、子ども可、ベジタリアン対応、2020年6月22日オープン。口コミ (2026年、英語): 天ぷら定食1,540円 (海老、白身魚、野菜、大きなさつまいも、かき揚げ)、天寅定食、平日の昼だけの天丼、すだちの冷やしそば、いちじくの天ぷら、穴子の天ぷら、おでんの大根、海外の客が多い。',
      confidence: 'medium', sources: [TB, R + 'B527921991/', R + 'B529283629/', R + 'B530578589/', R + 'B530684525/', R + 'B532110222/', R + 'B534258290/', R + 'B536128634/', R + 'B537328433/', R + 'B538033423/', R + 'B538041951/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter only; walk-ins for lunch after 11:00; many visitors from abroad.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区烏丸通姉小路下ル場之町586-2 新風館',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009355, 135.760481); cross-checked: GSI 京都府京都市中京区場之町586番地 (lot) 70m (Shinpukan is a large building); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532110222/', R + 'B538033423/'],
    price_note: 'No menu read; price from April and July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tempura set meal (regular)', '¥1,540', 'Set meals', 'no', 'no', 'April and July 2026.', 'tempura_teishoku'),
      it('', '', 'Tempura rice bowl (weekday lunch only)', '', 'Lunch', 'no', 'no', 'July 2026; price not given.', 'tendon'),
    ] }, {
    cuisine: '気軽な天ぷらバー: 揚げたての天ぷらの定食とアラカルト、お酒とともに (2026年の口コミ)・天ぷら定食1,540円、海老、白身魚、野菜、大きなさつまいも、かき揚げ、ご飯、味噌汁、漬物 (2026年4〜7月)・天寅定食 (2026年5月)・平日の昼だけの天丼 (2026年7月)・すだちの冷やしそばと天ぷら、季節のいちじくの天ぷら (2026年8月)・穴子の天ぷら、おでんの大根、魚介、野菜、肉の創作天ぷら (2026年10月)・日本酒、ワイン、カクテル (食べログ)',
    neighborhood: '烏丸御池の新風館。駅から徒歩1分',
    gf_detail: 'グルテンフリーではない。天ぷらの店で、ほぼすべて小麦の衣 (2026年の口コミ)。',
    vegan_detail: '要確認。食べログにベジタリアン対応の記載、野菜の天ぷら (さつまいも、いちじく) もあるが、衣、天つゆ、味噌汁の説明はない (食べログ、2026年の口コミ)。',
    notes: '[天ぷら・新風館、烏丸御池のさっと天ぷら] 烏丸御池駅からすぐ、新風館1階のガラス張りの明るいカウンター。一日中、注文ごとに天ぷらを揚げる。1,540円の定食は海老、白身魚、野菜、大きなさつまいも、かき揚げに、ご飯と味噌汁で、食べきれないほど。平日の昼は天丼、夏はすだちの冷やしそばも。夜は天ぷらバーに。無休、昼は11時以降は先着順。',
  });
}

// ================================================================ マリーフランス 今出川店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26003834/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.marry-france.jp/';
  const H = day(['07:00', '18:30']); const HS = day(['07:00', '18:00']);
  put({
    id: 'kyoto_marie_france_imadegawa', name: 'マリーフランス 今出川店 (Marie France, Imadegawa)', category: 'OMNI',
    lat: 35.02967, lng: 135.755601, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a wheat bakery of anpan, croissants, sweet rolls and filled breads (official site; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The anko is made in house, but the breads use butter, cream, custard and fillings with ham or sausage; nothing is described as plant-only (official site; 2026 reviews).',
    hours_raw: 'Official site: 7:00–18:30, Sundays and holidays to 18:00; closed Monday and Tuesday. Takeaway only (Tabelog). No cards or e-money; QR payments accepted (Tabelog). Small shop, crowded at weekends; you move along a set route and cannot go back (September 2026). Photography not allowed inside (Tabelog). On Imadegawa-dori west of Shinmachi, 7 min from Imadegawa Stn (Tabelog). Opened on Imadegawa-dori in 1984 (official site).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: HS }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Imadegawa-dori west of Shinmachi — 7 min from Imadegawa Stn',
    cuisine: 'Neighbourhood bakery making its own dough, coarse anko, curry filling, custard and butter cream; the anko is cooked daily (official site) · thin-skinned anpan packed with anko — ogura anpan ¥290, yomogi anpan ¥313, a yakimochi-style anpan, an butter (2026 reviews; official site) · croissant au beurre ¥330, Parmesan bacon ¥340, cream bread ¥290, homemade curry bread ¥340, pain au chocolat ¥300, cinnamon roll ¥302 (August–October 2026) · choco cornet, melon bread, frankfurter, corn-egg, almond twist, ham sandwich, cream puffs (2026 reviews)',
    website: SITE, gmaps: gm('マリーフランス 今出川'), menu_url: null,
    notes: '[Bakery · Imadegawa, anpan that is mostly anko] A small, unpretentious bakery on Imadegawa-dori, in business since 1984, famous for thin-skinned anpan so full of house-cooked anko that it feels almost all filling (¥290). Regulars also come for the curry bread, croissants and choco cornets. It fills up at weekends and the route through the shop is one-way. Takeaway only; no photos inside; closed Monday and Tuesday.',
    chef_bio: { chef_name: null, roles: ['Bakers (unnamed)'], origin: null,
      background: 'Per the official site: opened on Imadegawa-dori in 1984, making dough, anko, curry filling, custard and butter cream in house; anko is cooked every day, about 450 pieces a day across shop and online sales. Reviewers mention another shop in Kitayama (July and October 2026).',
      philosophy: 'To be a shop that keeps the neighbourhood company for years (official site).', specialty: 'Ogura anpan; yomogi anpan.',
      anecdotes: [
        { text: 'An October 2026 visitor found the ogura anpan surprisingly heavy, “95% red bean paste” yet not too sweet.', source: R + 'B537237475/' },
        { text: 'A June 2026 visitor loved the anko but wished for more bread to balance it.', source: R + 'B529544343/' },
        { text: 'A July 2026 visitor preferred the Kitayama shop’s bread.', source: R + 'B531229239/' },
      ],
      japanese_sources_summary: '公式サイト: マリーフランス、1984年 (昭和59年) に京都今出川通で営業開始、生地も粒あん、カレーフィーリング、カスタード、バタークリームもすべて自家製、小倉あんパン、よもぎあんパン、やきもち風あんパンの粒あんは毎日炊く、店舗とネットで1日約450個、7:00〜18:30 (日祝は18:00)、月・火休み。食べログ: 上京区今出川通新町西入ル元本満寺町307、今出川駅から徒歩7分、テイクアウトのみ、カード・電子マネー不可、QR可、店内撮影不可。口コミ (2026年、英語): 小倉あんパン290円、よもぎあんパン313円、クロワッサン330円、パルメザンベーコン340円、カレーパン340円、パンオショコラ300円、シナモンロール302円、チョコクロネ、メロンパン、週末は混み一方通行、北山の店も。',
      confidence: 'medium', sources: [TB, SITE, R + 'B523883071/', R + 'B525479785/', R + 'B529544343/', R + 'B529952985/', R + 'B531229239/', R + 'B534517493/', R + 'B535385720/', R + 'B536832104/', R + 'B537237475/', R + 'B537749869/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Takeaway only; no photos inside; QR payments but no cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区今出川通新町西入ル元本満寺町307',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.02967, 135.755601); cross-checked: GSI 京都府京都市上京区元本満寺町307番地 (lot) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537749869/', R + 'B535385720/', R + 'B534517493/'],
    price_note: 'No price list read; prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('小倉あんパン', '', 'Ogura anpan', '¥290', 'Anpan', 'no', 'ask', 'September–October 2026.', 'ogura_anpan'),
      it('よもぎあんパン', '', 'Yomogi anpan', '¥313', 'Anpan', 'no', 'ask', 'August 2026.', 'yomogi_anpan'),
      it('', '', 'Homemade curry bread', '¥340', 'Bread', 'no', 'no', 'October 2026.', 'curry_pan'),
      it('', '', 'Croissant au beurre', '¥330', 'Bread', 'no', 'no', 'September 2026.', 'croissant'),
    ] }, {
    cuisine: '生地、粒あん、カレーフィーリング、カスタード、バタークリームまで自家製の町のパン屋。粒あんは毎日炊く (公式サイト)・あんこぎっしりの薄皮あんパン、小倉あんパン290円、よもぎあんパン313円、やきもち風あんパン、あんバター (2026年の口コミ、公式サイト)・クロワッサン・オ・ブール330円、パルメザンベーコン340円、クリームパン290円、自家製カレーパン340円、パン・オ・ショコラ300円、シナモンロール302円 (2026年8〜10月)・チョココルネ、メロンパン、フランク、コーンエッグ、アーモンドツイスト、ハムサンド、シュークリーム (2026年の口コミ)',
    neighborhood: '新町の西の今出川通。今出川駅から徒歩7分',
    gf_detail: 'グルテンフリーではない。あんパン、クロワッサン、菓子パン、惣菜パンの小麦のパン屋 (公式サイト、2026年の口コミ)。',
    vegan_detail: '要確認。あんこは自家製だが、パンにはバター、クリーム、カスタード、ハムやソーセージの具。植物性のみと書かれた品はない (公式サイト、2026年の口コミ)。',
    notes: '[パン・今出川、ほぼあんこのあんパン] 1984年から今出川通で営む、気取らない小さなパン屋。名物は毎日炊く粒あんをぎっしり詰めた薄皮のあんパン (290円)。カレーパン、クロワッサン、チョココルネを目当ての常連も。週末は混み、店内は一方通行。テイクアウトのみ、店内撮影不可、月・火休み。',
  });
}

// ================================================================ 洋食の店 ITADAKI 円町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26031614/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:30'], ['17:30', '21:00']);
  put({
    id: 'kyoto_itadaki_enmachi', name: '洋食の店 ITADAKI 円町店 (Yoshoku no Mise ITADAKI, Enmachi)', category: 'OMNI',
    lat: 35.018469, lng: 135.732229, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: set meals built around fried shrimp, cream croquettes and katsu, with demi-glace; the hamburg steak is served alongside (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: hamburg steak, steak, fried shrimp and croquettes (2026 reviews).',
    hours_raw: 'Lunch 11:30–14:30, dinner 17:30–21:00; closed Wednesday and Thursday (Tabelog). No reservations (Tabelog). No cards or e-money; PayPay accepted (Tabelog). No service charge (Tabelog, original 特にございません). 20 seats on two floors — tables for two and four (Tabelog; August–October 2026). Non-smoking; wheelchair accessible; children welcome, kids’ menu (Tabelog). On Marutamachi-dori near Nishioji, 3 min from JR Enmachi Stn (Tabelog; June 2026).',
    hours: { 0: H, 1: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Marutamachi-dori near Nishioji — 3 min from JR Enmachi Stn',
    cuisine: 'Classic Kyoto yoshoku served sizzling on teppan: hamburg steak, steak, katsu and curry (Tabelog shop text) · hamburg steak set ¥1,850–1,940 — hamburg with demi-glace, shrimp fry with tartar, shrimp cream croquette with tomato sauce, with rice, salad, miso soup, a side and pickles (August 2026) · Kujo-negi teriyaki hamburg ¥1,700 (June 2026) · meat lunch of the day, e.g. sansho grilled chicken thigh with shrimp tempura and croquette (June 2026) · 200 g steak (July 2026) · kids’ menu (Tabelog)',
    website: null, gmaps: gm('洋食の店 ITADAKI 円町店'), menu_url: null,
    notes: '[Yoshoku · Enmachi, a century-old Kyoto Western kitchen] The Enmachi branch of ITADAKI, a Western-style restaurant serving Kitano Hakubaicho since 1921. The sets are what one reviewer called an “adult lunch”: a juicy demi-glace hamburg with fried shrimp and a cream croquette, each with its own sauce, plus rice, salad and miso soup (about ¥1,850–1,940). Busy at lunch; no reservations. PayPay but no cards; closed Wednesday and Thursday.',
    chef_bio: { chef_name: null, roles: ['Kitchen (unnamed)'], origin: null,
      background: 'Per the Tabelog shop text: ITADAKI has served Kitano Hakubaicho since 1921 and opened this Enmachi shop. A May 2026 reviewer who grew up with the original learned the name means a mountain peak, not “itadakimasu”.',
      philosophy: 'A long-standing commitment to handmade flavours (Tabelog shop text).', specialty: 'Hamburg steak set with fried shrimp and cream croquette.',
      anecdotes: [
        { text: 'A June 2026 diner watched a parent and child, apparently regulars, eating there and thought food like this every day would make for a healthy mind.', source: R + 'B531715133/' },
        { text: 'A July 2026 diner liked the hamburg, croquette and fried shrimp but found the lean 200 g steak not to taste.', source: R + 'B531498214/' },
      ],
      japanese_sources_summary: '食べログ: 洋食の店 ITADAKI 円町店、洋食・ハンバーグ・ステーキ、中京区西ノ京円町31-4、JR円町駅から徒歩3分、昼11:30〜14:30、夜17:30〜21:00、水・木休み、予約不可、カード・電子マネー不可、PayPay可、20席、禁煙、車椅子可、子ども可・キッズメニュー、北野白梅町店もある。店の紹介: 1921年から北野白梅町で ITADAKI の味を、鉄板で出すハンバーグ、ステーキ、カツ、カレー。口コミ (2026年、英語): ハンバーグ定食1,850〜1,940円 (デミグラスのハンバーグ、海老フライとタルタル、海老クリームコロッケとトマトソース、ご飯、サラダ、味噌汁、小鉢、漬物)、Kujo ねぎの照り焼きハンバーグ1,700円、日替わりの肉ランチ、200gのステーキ、名前は山の頂の意味。',
      confidence: 'medium', sources: [TB, R + 'B529600278/', R + 'B529668699/', R + 'B530487433/', R + 'B530550705/', R + 'B531498214/', R + 'B531715133/', R + 'B533976053/', R + 'B534100394/', R + 'B535044502/', R + 'B537019567/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No reservations; PayPay but no cards; kids’ menu.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区西ノ京円町31-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.018469, 135.732229); cross-checked: GSI 京都府京都市中京区西ノ京円町31番地 (lot) 37m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534100394/', R + 'B535044502/', R + 'B531715133/'],
    price_note: 'No menu read; prices from June–August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Hamburg steak set (hamburg, shrimp fry, cream croquette)', '¥1,850', 'Set meals', 'no', 'no', 'August 2026; ¥1,940 in another August 2026 review.', 'hamburg_set'),
      it('', '', 'Kujo-negi teriyaki hamburg steak', '¥1,700', 'Set meals', 'ask', 'no', 'June 2026.', 'kujo_teriyaki_hamburg'),
    ] }, {
    cuisine: '鉄板で熱々に出す昔ながらの京都の洋食: ハンバーグ、ステーキ、カツ、カレー (食べログの店紹介)・ハンバーグ定食1,850〜1,940円、デミグラスのハンバーグ、海老フライとタルタル、海老クリームコロッケとトマトソース、ご飯、サラダ、味噌汁、小鉢、漬物 (2026年8月)・Kujo ねぎの照り焼きハンバーグ1,700円 (2026年6月)・日替わりの肉ランチ、たとえば鶏ももの山椒焼きと海老天とコロッケ (2026年6月)・200gのステーキ (2026年7月)・キッズメニュー (食べログ)',
    neighborhood: '西大路近くの丸太町通。JR円町駅から徒歩3分',
    gf_detail: 'グルテンフリーではない。海老フライ、クリームコロッケ、カツ、デミグラスが中心の定食で、ハンバーグも添える (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。ハンバーグ、ステーキ、海老フライ、コロッケ (2026年の口コミ)。',
    notes: '[洋食・円町、百年続く京都の洋食] 1921年から北野白梅町で営む ITADAKI の円町店。定食は口コミいわく「大人のランチ」で、ジューシーなデミグラスのハンバーグに海老フライとクリームコロッケ、それぞれ別のソースで、ご飯、サラダ、味噌汁付き (約1,850〜1,940円)。昼は混み、予約不可。PayPay可、カード不可、水・木休み。',
  });
}

save();
