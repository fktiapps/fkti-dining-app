// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 73.
//   Queue run from the osw2 worktree, 2026-11-08. Rest tier, nearest-first (queue.mjs kyoto-missed next rest 2000, lane ids by distance).
//   Rest rule: at least one 2025–26 review and enough sourced detail. Days the sources do not state are left out of hours.
//   + マノワール28 manoir28 (wine salon in a house on Fuyacho facing a park; invitation-only / LINE-member booking — listed with the restriction,
//     Greg's ruling on referral- and members-only places; reverses this lane's osw2-72 skip)
//   - 本家 西尾八ツ橋 祇園北店 — large parent (西尾八ツ橋), as the earlier rulings
//   + バー バッカス Bar Bacchus (Pontocho malt bar with 300+ whiskies and a Kamo riverside terrace; since 2012)
//   - 京都和牛すき焼きしゃぶしゃぶ 富之上 匠 祇園四条店 — same-concept branch of 富之上 祇園本店 (in data)
//   + 串カツ 楽珍 Kushikatsu Rakuchin (omakase kushikatsu counter in a Gion basement)
//   + 馬肉料理 樹 Baniku Ryori Itsuki (horse-meat counter on Tominaga-cho, open to 4 am; since 2023)
//   None of the four is in data/kyoto.json, hidden records included: grep by id, name and address. Brand names grepped in queue-status.jsonl: rulings
//   followed for 西尾八ツ橋 and 富之上.
//   Service charges: manoir28 ¥2,000 seat charge from 18:00 (free 15:00–18:00) and 10% service (official site).
//   Pins: Tabelog /en/ point, cross-checked with GSI only; バッカス offset ~12 m toward the river to clear かに侍別邸 (5 m) and ステーキ みくら (7 m) on a
//   crowded stretch of Pontocho, 樹 ~8 m off 祇園ししし (same building, 1 m); each now 9 m+ from every pin on main, hidden records included.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-73');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26022363', '本家 西尾八ツ橋 祇園北店: a shop of a large parent — the yatsuhashi maker 本家西尾八ツ橋 (8284.co.jp lists about a dozen shops); same ruling as its ぎをん為治郎 cafés (26027207, 26027430)');
skip('26044845', '京都和牛すき焼きしゃぶしゃぶ 富之上 匠 祇園四条店: a same-concept branch of a brand in data — 富之上 祇園本店 (kyoto_tominojo_gion_honten); same ruling as 富之上 三条河原町店 (26043996)');

// ================================================================ マノワール28
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26032533/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://manoir28kyoto.com/';
  const H = day(['15:00', '24:00']);
  put({
    id: 'kyoto_manoir28_wine_salon', name: 'マノワール28 (manoir28)', category: 'OMNI',
    lat: 35.007203532562144, lng: 135.76577398260784, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A wine bar; snacks come from well-known Kyoto restaurants and no ingredients are published (official site).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Wine by the glass and bottle; snacks and kaiseki come from other restaurants (official site).',
    hours_raw: 'Invitation-only (Tabelog): first-time guests register as manoir28 LINE members and book by message; anyone who wants to enjoy wine may come once registered (official site). 15:00–24:00, irregular closing days (official site; Tabelog). Seat charge: none 15:00–18:00, ¥2,000 a person from 18:00; 10% service (official site). Cards accepted; no e-money or QR (Tabelog). Counter and private rooms for 6 to 20; non-smoking, smoking in the courtyard (Tabelog; official site). A house facing a small park — taxis can drop at Fuyacho-Rokkaku (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Fuyacho at Rokkaku, north of Shijo',
    cuisine: 'Wine salon centred on Burgundy and Champagne, opened February 2019 (Tabelog; official site) · about 20 fine wines by the glass, ¥3,000–10,000 from the day’s list; 300+ bottles from ¥20,000 (official site) · snacks and light dishes from well-known Kyoto restaurants (official site; 2024 reviews) · kaiseki by a Michelin-listed restaurant in a private room, booked 3 days ahead (official site)',
    website: SITE, gmaps: gm('manoir28 京都 麩屋町'), menu_url: SITE,
    notes: "[Wine bar · Fuyacho-Rokkaku, invitation-only wine salon] A house by a small park given over to wine: about 20 Burgundies and Champagnes by the glass (¥3,000–10,000) from a deep cellar, from 3 pm. It is invitation-only — first-timers register via its LINE account and book by message. No seat charge before 6 pm.",
    chef_bio: { chef_name: null, roles: ['Owner and sommelier staff not named'], origin: null,
      background: 'Opened in February 2019 (Tabelog). A July 2022 reviewer says it belongs to Kitamura, known as the "wine prince" of Nagoya, with a walk-in cellar of about 1,500 bottles including DRC; the official site describes a wine salon in a house facing a park on Fuyacho.',
      philosophy: 'To make time spent with wine the finest moment of a guest’s life (official site).',
      specialty: 'Fine Burgundy and Champagne by the glass.',
      anecdotes: [
        { text: 'An April 2026 regular dropped in early for an aperitif before dinner, just in time for the cherry blossom.', source: R + 'B441416886/' },
        { text: 'A June 2024 visitor explained the way in: register on LINE, then reserve.', source: R + 'B487562299/' },
        { text: 'A September 2026 guest returned with a friend from Tokyo for a bottle of white and staff-chosen glasses.', source: R + 'B442458592/' },
      ],
      japanese_sources_summary: '公式サイト: manoir28 (マノワール28)、ワインテイスティングサロン、京都市中京区八百屋町98-3、麩屋町の公園の前の一軒家、ブルゴーニュとシャンパーニュを中心にグラス1杯から、グラスワイン20種ほど (3,000〜10,000円)、ボトル300アイテム以上 (20,000円から)、15:00〜24:00、不定休、カード可、喫煙は中庭、タクシーは麩屋町六角で下車、シートチャージ 15:00〜18:00は無料・18:00からは1人2,000円、サービス料10%、ミシュラン店の京懐石を個室で (3日前までに予約)、京都の銘店のおつまみと軽食、はじめての客は LINE メンバー登録のうえメッセージで予約 (ワインを愉しみたい方はどなたでも)。食べログ: ワインバー、紹介制のワインバー、2019年2月28日オープン、個室 (6〜20名)、禁煙。口コミ (2022〜2026年、英語): 名古屋の「ワインの王子」北村氏の店、1,500本のセラー、DRC、15時から開いて食前にも二次会にも、グラスで上質なワインを、気さくなマスター、地元の名店の料理を事前に頼める。',
      confidence: 'medium', sources: [SITE, SITE + 'free/visit', SITE + 'free/afternoon', SITE + 'free/kaiseki', TB, R + 'B419492542/', R + 'B424141392/', R + 'B441416886/', R + 'B442458592/', R + 'B452020985/', R + 'B464184765/', R + 'B487562299/', R + 'B489264981/', R + 'B496871944/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Invitation-only: register via LINE and book ahead; seat charge from 18:00.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区八百屋町98-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through September 2026. Invitation-only, listed with the restriction stated (Greg’s ruling on referral- and members-only places).' },
    pin_source: `Tabelog ${TB} (35.007204, 135.765774); cross-checked: GSI 京都府京都市中京区八百屋町98番地 (lot) 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Prices from the official site (November 2026); plus seat charge from 18:00 and 10% service.', last_checked: TODAY, items: [
      it('', '', 'Wine by the glass (about 20 on the day’s list)', '¥3,000', 'Wine', 'gf', 'ask', '¥3,000–10,000.', 'glass'),
      it('', '', 'Bottle wine (300+ labels)', '¥20,000', 'Wine', 'gf', 'ask', 'From ¥20,000.', 'bottle'),
      it('', '', 'Seat charge from 18:00, per person', '¥2,000', 'Charge', 'gf', 'vegan', 'Free 15:00–18:00.', 'seat'),
    ] }, {
    cuisine: 'ブルゴーニュとシャンパーニュを中心にしたワインサロン、2019年2月開業 (食べログ、公式サイト)・グラスワインはその日のリストから20種ほど3,000〜10,000円、ボトルは300アイテム以上で20,000円から (公式サイト)・京都の銘店のおつまみや軽食 (公式サイト、2024年の口コミ)・ミシュラン店の京懐石を個室で、3日前までに予約 (公式サイト)',
    neighborhood: '麩屋町六角、四条の北',
    gf_detail: '要確認。ワインバー。おつまみは京都の銘店のもので、原材料は公開されていない (公式サイト)。',
    vegan_detail: '要確認。グラスとボトルのワイン。おつまみと懐石は他店の料理 (公式サイト)。',
    notes: '[ワインバー・麩屋町六角、紹介制のワインサロン] 小さな公園の前の一軒家のワインのための場所。上質なブルゴーニュやシャンパーニュをグラスで20種ほど (3,000〜10,000円)、15時から。紹介制で、はじめての人は LINE に登録してメッセージで予約。18時まではシートチャージなし。',
  });
}

// ================================================================ バー バッカス
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26021895/'; const R = TB + 'dtlrvwlst/';
  const A = day(['17:00', '02:00']), B = day(['17:00', '03:00']);
  put({
    id: 'kyoto_bar_bacchus_pontocho', name: 'バー バッカス (Bar Bacchus)', category: 'OMNI',
    lat: 35.007727, lng: 135.771339, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Whisky, cocktails, wine and sake, with cheesecake, chocolate cake and pancakes; no gluten information is published (reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Drinks, with dried grapes and chocolate among the snacks; cakes are not vegan (reviews).',
    hours_raw: '17:00–02:00 Monday–Thursday, Sunday, holidays and the day after a holiday; 17:00–03:00 Friday, Saturday and holiday eves; closures are posted on Instagram, clubbacchus8 (Tabelog). Cards, e-money and QR payments accepted (Tabelog). 26 seats: counter and sofas, plus a riverside terrace with floor seating in the warmer months; smoking allowed (Tabelog; 2022–2025 reviews). On Pontocho south of Sanjo, near the Kaburenjo (Tabelog; February 2024).',
    hours: { 0: A, 1: A, 2: A, 3: A, 4: B, 5: B, 6: A }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho, north end near Sanjo — on the Kamo River',
    cuisine: 'Malt bar with over 300 Japanese and imported whiskies and a view of the Kamo River, opened June 2012 (Tabelog) · whisky flights, e.g. three tastings with chocolate and dried grapes about ¥5,000 (September 2025); Hakushu highball, Port Charlotte, rare Glenfarclas (2022) · a long cocktail list, wine and sake (2023–2024) · cheesecake, chocolate cake, pancakes (2021–2024)',
    website: null, gmaps: gm('Bar Bacchus 先斗町'), menu_url: TB,
    notes: "[Whisky bar · Pontocho near Sanjo, on the river] A grown-up malt bar at the north end of Pontocho with over 300 whiskies and a long cocktail list, and in summer a riverside terrace looking over the Kamo. Try a three-whisky flight (about ¥5,000); the cheesecake is a favourite. Open to 2–3 am; smoking allowed.",
    chef_bio: { chef_name: null, roles: ['Bartenders not named'], origin: null,
      background: 'Opened in June 2012 (Tabelog). Reviewers (2021–2025) describe a stylish Pontocho bar with counter and sofa seats, bartenders with flair and a summer terrace over the Kamo River.',
      philosophy: null,
      specialty: 'Malt whisky; cocktails.',
      anecdotes: [
        { text: 'A July 2022 returning guest spotted a Glenfarclas usually sold only overseas.', source: R + 'B331512148/' },
        { text: 'An April 2023 visitor sat on the floor-level terrace by the river with a small cheesecake-like appetiser.', source: R + 'B464202019/' },
        { text: 'A September 2025 second-round guest had a three-whisky flight with chocolate and dried grapes.', source: R + 'B514189832/' },
      ],
      japanese_sources_summary: '食べログ: バー バッカス、バー、京都市中京区先斗町通三条下ル橋下町135 先斗町ビル1F、月〜木・日・祝日・祝日の翌日 17:00〜翌2:00、金土・祝前日 17:00〜翌3:00、カード・電子マネー・QR決済可、休みはインスタグラム (clubbacchus8) で告知、26席、喫煙可、2012年6月23日オープン、国内外300種以上のウイスキー、鴨川を望むモルトバー。口コミ (2021〜2025年、英語): 先斗町の北、歌舞練場の近く、カウンターとソファ、夏は鴨川のテラス (座敷)、白州ハイボール、ポートシャーロット、海外限定のグレンファークラス、カクテルが充実、日本酒とワイン、チーズケーキ、ガトーショコラ、パンケーキ、ウイスキー3種の飲み比べとチョコとレーズンで5,000円ほど (2025年9月)、値段は高め。',
      confidence: 'low', sources: [TB, R + 'B331512148/', R + 'B454370879/', R + 'B464202019/', R + 'B464962147/', R + 'B481323221/', R + 'B499846468/', R + 'B511700780/', R + 'B514189832/', R + 'B520767527/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cards accepted; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町通三条下ル橋下町135 先斗町ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2025.' },
    pin_source: `Tabelog ${TB} (35.007745, 135.771207), offset ~12m toward the river to clear 京都先斗町 かに侍別邸 (5m) and ステーキ・鉄板焼 みくら (7m); cross-checked: GSI 京都府京都市中京区橋下町135番地 (lot) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B514189832/'],
    price_note: 'Price from a September 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Whisky flight, three tastings with chocolate and dried grapes', '¥5,000', 'Whisky', 'ask', 'ask', 'About; September 2025.', 'flight'),
      it('', '', 'Cocktails', '', 'Cocktails', 'ask', 'ask', '', 'cocktail'),
      it('', '', 'Cheesecake', '', 'Sweets', 'ask', 'no', '', 'cheesecake'),
    ] }, {
    cuisine: '国内外300種以上のウイスキーと鴨川の眺めのモルトバー、2012年6月開業 (食べログ)・ウイスキーの飲み比べ、たとえば3種にチョコとレーズンで5,000円ほど (2025年9月)、白州ハイボール、ポートシャーロット、珍しいグレンファークラス (2022年)・充実したカクテル、ワイン、日本酒 (2023〜2024年)・チーズケーキ、ガトーショコラ、パンケーキ (2021〜2024年)',
    neighborhood: '先斗町の北、三条の近く。鴨川沿い',
    gf_detail: '要確認。ウイスキー、カクテル、ワイン、日本酒、チーズケーキ、ガトーショコラ、パンケーキ。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: '要確認。飲み物、つまみにレーズンやチョコ。ケーキはヴィーガン不可 (口コミ)。',
    notes: '[ウイスキーバー・先斗町の三条寄り、鴨川沿い] 先斗町の北端の大人のモルトバー。300種以上のウイスキーと充実したカクテル、夏は鴨川を望むテラス。ウイスキー3種の飲み比べ (5,000円ほど) を、チーズケーキも人気。深夜2〜3時まで、喫煙可。',
  });
}

// ================================================================ 串カツ 楽珍
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26024763/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_kushikatsu_rakuchin_gion', name: '串カツ 楽珍 (Kushikatsu Rakuchin)', category: 'OMNI',
    lat: 35.00456561787449, lng: 135.77450042034775, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: breaded, deep-fried skewers (Tabelog menu; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: most skewers are meat or seafood; a few vegetable skewers (ginkgo, sweet potato) are fried in the same oil (Tabelog menu).',
    hours_raw: '17:00–23:00 Monday–Saturday; the kushikatsu course runs 17:00–22:00 (last order 21:30); closed Sunday, and Monday when it follows a holiday (Tabelog). Omakase: skewers keep coming in menu order until you say stop — about 25 in all — or order single skewers (Tabelog menu; 2016 and 2022 reviews). Cards accepted; no e-money (Tabelog). A 15-seat counter in a basement; smoking allowed (Tabelog). In the Yasaka Building basement on Kiyomoto-cho, Gion (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, Kiyomoto-cho near Shirakawa',
    cuisine: 'Omakase kushikatsu at a Gion counter (reviews) · skewers from ¥240 each, served one by one until you stop: pork fillet, octopus with cucumber, hamo-shiso roll, shrimp, torigai, quail egg, ginkgo, beef fillet and more (Tabelog menu, 2021) · rice, red miso soup and pickles set ¥800 extra (Tabelog menu) · the chef suggests a flavour for each skewer (August 2016) · about ¥8,000–10,000 a head (Tabelog reviews)',
    website: null, gmaps: gm('串カツ 楽珍 祇園'), menu_url: TB + 'dtlmenu/',
    notes: "[Kushikatsu · Gion basement, omakase skewers] A fifteen-seat basement counter in Gion where a quiet veteran fries crisp, juicy kushikatsu one at a time — pork fillet, hamo, octopus, quail egg — until you say stop (about 25 in all), each with its own suggested dip. About ¥8,000–10,000; closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Master not named'], origin: null,
      background: 'Reviewers (2016–2025) describe a long-running Gion kushikatsu counter, relocated at some point, where a quiet master fries skewers swiftly in omakase order.',
      philosophy: null,
      specialty: 'Omakase kushikatsu.',
      anecdotes: [
        { text: 'An August 2016 regular from Kanto had visited for about ten years, since before the move.', source: R + 'B210202288/' },
        { text: 'A November 2022 diner found about 25 skewers too many to finish.', source: R + 'B456524375/' },
        { text: 'A March 2025 guest wished the omakase let diners choose what came.', source: R + 'B506776134/' },
      ],
      japanese_sources_summary: '食べログ: 串カツ 楽珍、串揚げ・日本料理・創作料理、京都市東山区清本町370 ヤサカビルB1F、月〜土 17:00〜23:00 (串カツコースは17:00〜22:00、L.O.21:30)、日曜定休、日曜・祝日の翌月曜休み、カード可、電子マネー不可、カウンター15席、喫煙可、予算8,000〜10,000円ほど。メニュー (2021年): 串カツは1本240円から、ストップと言うまで順に出す (1本ずつの注文も可)、ご飯・赤だし・香の物のセットは800円追加、豚ヒレ、タコときゅうり、鱧の大葉巻き、海老、鳥貝、うずら卵、銀杏、牛ヒレなど。口コミ (2016〜2025年、英語): 移転前から通う客も、地下の隠れ家、寡黙なマスター、サクサクでジューシーな衣、串ごとにおすすめの味、25本ほどで多すぎるという声、選べるとよいという声。',
      confidence: 'low', sources: [TB, TB + 'dtlmenu/', R + 'B210202288/', R + 'B280217683/', R + 'B286943647/', R + 'B412855332/', R + 'B431884131/', R + 'B454655159/', R + 'B456524375/', R + 'B506776134/'] },
    cultural_comfort: { level: 'japanese', note: 'Omakase counter; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区清本町370 ヤサカビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through March 2025.' },
    pin_source: `Tabelog ${TB} (35.004566, 135.774500); cross-checked: GSI 京都府京都市東山区清本町370番地 (lot) 43m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB + 'dtlmenu/'],
    price_note: 'Prices from the Tabelog menu (September 2021); may have risen.', last_checked: TODAY, items: [
      it('', '', 'Kushikatsu, per skewer (omakase until you stop)', '¥240', 'Kushikatsu', 'no', 'no', 'From ¥240.', 'kushi'),
      it('', '', 'Rice, red miso soup and pickles set', '¥800', 'Rice', 'ask', 'ask', '', 'rice_set'),
    ] }, {
    cuisine: '祇園のカウンターのおまかせ串カツ (口コミ)・1本240円から、ストップと言うまで1本ずつ: 豚ヒレ、タコときゅうり、鱧の大葉巻き、海老、鳥貝、うずら卵、銀杏、牛ヒレなど (食べログのメニュー、2021年)・ご飯、赤だし、香の物のセット800円追加 (食べログのメニュー)・串ごとに合う味をおすすめ (2016年8月)・1人8,000〜10,000円ほど (食べログの口コミ)',
    neighborhood: '祇園、清本町の白川の近く',
    gf_detail: 'グルテンフリー不可。衣をつけて揚げた串 (食べログのメニュー、口コミ)。',
    vegan_detail: 'ヴィーガン不可。ほとんどが肉か魚介の串。銀杏やさつまいもの串も同じ油で揚げる (食べログのメニュー)。',
    notes: '[串カツ・祇園の地下、おまかせの串] 祇園の地下の15席のカウンター。寡黙なベテランがサクサクでジューシーな串カツを1本ずつ、豚ヒレ、鱧、タコ、うずら卵など、ストップと言うまで (全部で25本ほど)、串ごとにおすすめの味で。8,000〜10,000円ほど、日曜休み。',
  });
}

// ================================================================ 馬肉料理 樹
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26038815/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:30', '04:00']);
  put({
    id: 'kyoto_baniku_ryori_itsuki', name: '馬肉料理 樹 (Baniku Ryori Itsuki)', category: 'OMNI',
    lat: 35.004282, lng: 135.774532, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Horse sashimi with soy-based dips, harihari and shabu-shabu pots, rice porridge to finish; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a horse-meat restaurant (Tabelog).',
    hours_raw: '18:30–04:00 Monday–Saturday, holiday eves and the day after a holiday; closed Sunday and holidays (Tabelog). Reservations recommended — only 8 counter seats (December 2024). Cards accepted; no e-money (Tabelog). Heated tobacco only, ashtray at the entrance (Tabelog). A bar-like basement room with a karaoke machine (March 2026). In the Bizenya Building basement on Tominaga-cho, Gion (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, Tominaga-cho north of Shijo',
    cuisine: 'Horse-meat counter opened February 2023, with horse meat sent from Kumamoto, rare cuts included (Tabelog) · courses built on the harihari hot pot with futaego or o-toro (Tabelog) · horse sashimi — assorted platters, a three-kind tasting, crunchy horse liver (2024–2026) · harihari hot-pot course; futaego (belly) shabu-shabu with a rice-porridge finish (2023–2026) · Orion beer and sake (2024–2025) · about ¥10,000–15,000 a head (Tabelog); two people ¥13,000 with drinks (February 2025)',
    website: null, gmaps: gm('馬肉料理 樹 祇園'), menu_url: TB,
    notes: "[Horse meat · Gion Tominaga-cho, sashimi and shabu-shabu to 4 am] An eight-seat Gion basement counter devoted to horse meat: sashimi tastings free of any gaminess, crunchy fresh liver, and futaego shabu-shabu or harihari pots finished with porridge. Open until 4 am; book ahead; closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Chef not named'], origin: null,
      background: 'Opened in February 2023 (Tabelog). Reviewers (2023–2026) describe a small counter in a quiet Gion alley where a friendly chef prepares horse-meat dishes in front of guests .',
      philosophy: null,
      specialty: 'Horse sashimi and futaego shabu-shabu.',
      anecdotes: [
        { text: 'A February 2025 liver lover called the horse liver the best in over twenty years.', source: R + 'B501401835/' },
        { text: 'An October 2025 business dinner watched each dish prepared at the counter.', source: R + 'B515609369/' },
        { text: 'A May 2026 first-timer had futaego shabu-shabu and found no gamey taste at all.', source: R + 'B528743184/' },
      ],
      japanese_sources_summary: '食べログ: 馬肉料理 樹、馬肉料理・しゃぶしゃぶ、京都市東山区八坂新地富永町127 備前屋ビルB1F、月〜土・祝前日・祝日の翌日 18:30〜翌4:00、日曜・祝日定休、熊本直送の馬肉、カード可、電子マネー不可、8席、加熱式たばこのみ (入口に灰皿)、2023年2月3日オープン、予算10,000〜15,000円ほど。口コミ (2023〜2026年、英語): 馬刺しの盛り合わせ、3種の食べ比べ、コリコリの馬レバー、はりはり鍋のコース、フタエゴのしゃぶしゃぶ、締めの雑炊、オリオンビール、日本酒、気さくな料理人、席が少ないので予約を、カラオケのあるバーのような雰囲気 (2026年3月)、2人で酒込み13,000円 (2025年2月)。',
      confidence: 'low', sources: [TB, R + 'B467537659/', R + 'B489013081/', R + 'B498627029/', R + 'B501401835/', R + 'B502471301/', R + 'B515609369/', R + 'B526013155/', R + 'B528743184/', R + 'B530749501/'] },
    cultural_comfort: { level: 'japanese', note: 'Eight-seat counter; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区八坂新地富永町127 備前屋ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004331, 135.774593), offset ~8m to clear 祇園ししし (1m); cross-checked: GSI 京都府京都市東山区富永町127番地 (lot) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B501401835/'],
    price_note: 'No published item prices; Tabelog reviews average ¥10,000–15,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Horse sashimi platter', '', 'Sashimi', 'ask', 'no', '', 'basashi'),
      it('', '', 'Horse liver sashimi', '', 'Sashimi', 'ask', 'no', '', 'liver'),
      it('', '', 'Futaego shabu-shabu with rice porridge', '', 'Pots', 'ask', 'no', '', 'shabu'),
    ] }, {
    cuisine: '2023年2月開業の馬肉のカウンター、熊本から届く馬肉、希少部位も (食べログ)・はりはり鍋にフタエゴや大トロを合わせたコース (食べログ)・馬刺しの盛り合わせ、3種の食べ比べ、コリコリの馬レバー (2024〜2026年)・はりはり鍋のコース、フタエゴのしゃぶしゃぶ、締めの雑炊 (2023〜2026年)・オリオンビールと日本酒 (2024〜2025年)・1人10,000〜15,000円ほど (食べログ)、2人で酒込み13,000円 (2025年2月)',
    neighborhood: '祇園、富永町の四条の北',
    gf_detail: '要確認。醤油ベースのたれの馬刺し、はりはり鍋としゃぶしゃぶ、締めの雑炊。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。馬肉料理の店 (食べログ)。',
    notes: '[馬肉・祇園富永町、深夜4時まで馬刺しとしゃぶしゃぶ] 祇園の地下の8席の馬肉のカウンター。臭みのない馬刺しの食べ比べ、コリコリのレバー、フタエゴのしゃぶしゃぶやはりはり鍋を雑炊で締める。深夜4時まで、予約を、日曜休み。',
  });
}

save();
