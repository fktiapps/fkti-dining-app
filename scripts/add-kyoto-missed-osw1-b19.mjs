// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 19.
//   + ぢんとら Jintora (Nishiki Market shichimi house founded 1878; shichimi and sansho soft serve, 4 seats)
//   + ブイヤベースのお店 プチポワソン Petit Poisson (bouillabaisse bistro off Takakura near Shijo; since 2020)
//   + バル agiyao Bar agiyao (fish-and-white-wine bar at Gojo-Higashinotoin; since 2014)
//   + kurs (sourdough and sandwich bakery near Nijo Castle, early-morning opening)
//   - Restaurant Grand Cafe Fauchon (26035550) and agnes b. CAFE 祇園店 (26039240): skipped (reasons below).
//   Picked on 2026-11-05: from `queue.mjs kyoto-missed next core 200`, lane ids 26007056, 26035550 (skipped), 26039240
//   (skipped), 26035058; from `next notable 200`, after 26035550 again: 26023262, 26033570. None is in data/kyoto.json: grep
//   by name (ぢんとら/Jintora, プチポワソン/Petit Poisson, agiyao, kurs) and address (中魚屋町494, 西前町374, 深草町592,
//   西大黒町334) found none.
//   Same-name count (Greg's Samboa ruling): ぢんとら, プチポワソン and kurs single shops. バル agiyao shares a building with its
//   sister 魚料理あぎやお (2F); the owner also runs a fish restaurant near Gion (September 2026 review) — a small group, none in
//   data. Service charges checked against Tabelog's Japanese original: agiyao ¥550 otoshi; Petit Poisson none (one drink per
//   person at dinner); ぢんとら and kurs none listed.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-19');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26035550', 'Restaurant Grand Cafe Fauchon: a sub-brand of a large parent — the restaurant of FAUCHON Hotel Kyoto, which a FAUCHON Hospitality release (hotelexecutive.com, 17 April 2019, read 2026-11-05) describes as home to "The Grand Café FAUCHON" under a trademark licence; the same release says FAUCHON runs 28 shops, 2 cafés and 2 bakery-cafés in Japan and about 100 franchise shops worldwide');
skip('26039240', 'agnes b. CAFE 祇園店: a same-name chain (Greg, 2026-11-05: five or more same-name shops) — a KISS PRESS article of 28 April 2026 (read 2026-11-05) says the Kobe Hankyu café is the fifth agnès b. CAFÉ in Japan, after two each in Tokyo and Kyoto; the parent fashion brand runs many shops');

// ================================================================ ぢんとら
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26007056/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.dintora.com/';
  const H = day(['10:00', '18:00']);
  put({
    id: 'kyoto_jintora_nishiki', name: 'ぢんとら (Jintora)', category: 'OMNI',
    lat: 35.00505, lng: 135.763149, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Soft serve with shichimi or sansho mixed in; whether it comes in a cone or a cup, and the cone’s ingredients, are not stated (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: milk soft serve (2026 reviews). The spice blends are sold separately to take home.',
    hours_raw: 'Official site: 10:00–18:00, open every day except at New Year. Tabelog gives 9:30–18:00. No reservations (Tabelog). Cards and e-money accepted; no QR (Tabelog). 4 seats for eating in (Tabelog; March 2025). Inside Nishiki Market, 3 min from Hankyu Karasuma Stn (official site). Sansho products limited to two bags a person because of scarce supply (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishiki Market, west of Sakaimachi — 3 min from Hankyu Karasuma Stn',
    cuisine: 'Shichimi specialist founded in 1878, selling Kyoto shichimi, ichimi, sansho, yuzu-kosho and yuzu shichimi; a few seats for its soft serve (official site; Tabelog) · shichimi soft serve, pale pink, sweet first then a tingle of heat in the throat — ¥430 (2024–2025), ¥480 (July 2026) · sansho soft serve ¥480 (October 2026) · a mixed swirl (March 2025) · yuzu shichimi around ¥450 a jar to take home (January 2025)',
    website: SITE, gmaps: gm('ぢんとら 錦市場'), menu_url: null,
    notes: '[Sweets · Nishiki Market, shichimi soft serve] A Nishiki Market spice shop that has blended shichimi since 1878 and, on the side, swirls it into soft serve: pale pink, sweet at first, then a gentle heat that tickles the throat. There is a sansho version too (¥480 in 2026). Four seats to eat in; buy a jar of yuzu shichimi on the way out. Open daily 10:00–18:00.',
    chef_bio: { chef_name: null, roles: ['Family spice house (operator ぢんとら Co., Ltd.)'], origin: null,
      background: 'Per the official site: founded in Meiji 11 (1878), blending fragrant shichimi passed down from one heir to the next, in Nishiki Market.',
      philosophy: null, specialty: 'Kyoto shichimi; shichimi soft serve.',
      anecdotes: [
        { text: 'A March 2025 visitor asked how hot it was; the staff said not very, but that the throat would tingle later — so the visitor cautiously ordered a mixed swirl.', source: R + 'B502438406/' },
        { text: 'A January 2025 visitor bought three jars of yuzu shichimi as light souvenirs and ended up keeping the jars at home after the family raved about the yuzu shichimi in a hot pot.', source: R + 'B499369155/' },
      ],
      japanese_sources_summary: '公式サイト: ぢんとら、創業明治11年、一子相伝の七味、中京区中魚屋町494 (錦市場内)、阪急烏丸駅から徒歩3分、10:00〜18:00、無休 (年始は休み)、京七味、一味、柚こしょう、山椒、七味・山椒ソフトクリーム、山椒は入手困難のため1人2袋まで。食べログ: 9:30〜18:00、予約不可、カード・電子マネー可、4席。口コミ (2024〜2026年、英語): 七味ソフトクリーム430円 (2026年7月は480円)、山椒ソフトクリーム480円、ピンク色、甘さのあとに喉にピリッと、柚子七味は約450円。',
      confidence: 'medium', sources: [TB, SITE, R + 'B494170802/', R + 'B499369155/', R + 'B501612438/', R + 'B502438406/', R + 'B509817157/', R + 'B510029628/', R + 'B520908151/', R + 'B524118083/', R + 'B531467475/', R + 'B536822033/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Walk-up counter in Nishiki Market; four seats.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区錦小路通堺町西入ル中魚屋町494',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.00505, 135.763149); cross-checked: GSI 京都府京都市中京区中魚屋町494番地 (lot) 23m — the full Tabelog form parsed only to the ward, so the town and lot were queried alone; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531467475/', R + 'B536822033/'],
    price_note: 'No menu read; prices from 2026 reviews.', last_checked: TODAY, items: [
      it('七味ソフトクリーム', '', 'Shichimi soft serve', '¥480', 'Soft serve', 'ask', 'no', 'July 2026; ¥430 in 2024–2025.', 'shichimi_soft'),
      it('山椒ソフトクリーム', '', 'Sansho soft serve', '¥480', 'Soft serve', 'ask', 'no', 'October 2026.', 'sansho_soft'),
    ] }, {
    cuisine: '1878年創業の七味の専門店。京七味、一味、山椒、柚こしょう、柚子七味を売り、ソフトクリーム用の席が少し (公式サイト、食べログ)・七味ソフトクリーム、淡いピンクで最初は甘く、あとから喉にピリッと、430円 (2024〜2025年)、480円 (2026年7月)・山椒ソフトクリーム480円 (2026年10月)・ミックスも (2025年3月)・持ち帰りの柚子七味は1瓶約450円 (2025年1月)',
    neighborhood: '錦市場、堺町の西。阪急烏丸駅から徒歩3分',
    gf_detail: '要確認。七味か山椒を混ぜたソフトクリーム。コーンかカップか、コーンの材料は書かれていない (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。牛乳のソフトクリーム (2026年の口コミ)。七味そのものは持ち帰り用に販売。',
    notes: '[甘味・錦市場、七味のソフトクリーム] 1878年から七味を調合する錦市場の香辛料の店が、ソフトクリームにも七味を混ぜる。淡いピンクで最初は甘く、あとから喉をくすぐるやさしい辛さ。山椒味もある (2026年に480円)。イートインは4席、帰りに柚子七味をひと瓶。毎日10時〜18時。',
  });
}

// ================================================================ プチポワソン
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26035058/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '22:30']); const LD = day(['11:30', '15:00'], ['17:00', '22:30']);
  put({
    id: 'kyoto_petit_poisson_bouillabaisse', name: 'ブイヤベースのお店 プチポワソン (Petit Poisson)', category: 'OMNI',
    lat: 35.001799, lng: 135.762696, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Bouillabaisse of fish and shellfish served with focaccia; starters include quiche and pâté; a cutlet in one course; canelé to take away; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a bouillabaisse house built on fish stock, with duck and pâté among the starters (2026 reviews).',
    hours_raw: 'Lunch 11:30–15:00 (food L.O. 12:30, drinks 14:00) Thursday–Sunday; dinner 17:00–22:30 (food L.O. 20:00, drinks 21:30) Tuesday–Sunday; closed Monday and some Tuesdays and Wednesdays (Tabelog). Reservations accepted (card details for Tabelog online booking); à la carte bookings on the day only; 100% cancellation fee the day before for the private-room bouillabaisse course (Tabelog). No service charge; one drink per person at dinner (Tabelog, original text). Cards, e-money and QR accepted (Tabelog). 13 seats: 7 at the counter, 6 in a sunken-kotatsu private room (Tabelog). Non-smoking; ashtray outside (Tabelog). English menu (Tabelog). Off Takakura north of Bukkoji, 5 min from Shijo and Karasuma Stns (Tabelog). Opened 25 October 2020 (Tabelog).',
    hours: { 1: D, 2: D, 3: LD, 4: LD, 5: LD, 6: LD }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Takakura north of Bukkoji, near Shijo-Karasuma — 5 min from Shijo Stn',
    cuisine: 'Bouillabaisse specialist: a rich broth made with fish trimmings that would otherwise be discarded (Tabelog shop text; 2026 reviews) · lunch bouillabaisse set ¥3,600 — a generous starter plate (duck breast, tofu, quiche, carrot râpée, pâté, salad), the day’s bouillabaisse (sea bream, mussels, eggplant) and focaccia from HANAKAGO (August–October 2026) · dinner courses: two fish starters, bouillabaisse, a meat main such as a cutlet, dessert; a sweetfish bouillabaisse course in November 2026 · private-room bouillabaisse course (Tabelog) · large canelé to take away (October 2026) · wine, sake, shochu (Tabelog)',
    website: 'https://petit-poisson.com', gmaps: gm('プチポワソン ブイヤベース 京都'), menu_url: null,
    notes: '[French bistro · Shijo-Karasuma, Kyoto’s bouillabaisse house] A small counter bistro off Takakura that makes one thing its business: bouillabaisse, rich with seafood and built from fish trimmings. The ¥3,600 lunch brings a crowded starter plate and the day’s bouillabaisse — sea bream, mussels, vegetables — with focaccia; dinner courses add fish starters and a meat main. Take a canelé home. Book ahead (counter seats are few); one drink each at dinner; closed Monday.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed), trained at a Michelin-starred restaurant in Nice (September 2026 review)'], origin: null,
      background: 'Per a September 2026 review: the chef trained at a Michelin-starred restaurant in Nice, and the restaurant is listed in Gault&Millau POP. Tabelog gives the opening as 25 October 2020. An October 2026 reviewer took the calm host to be a female owner.',
      philosophy: 'The signature bouillabaisse uses fish trimmings that would otherwise be discarded (shop’s Tabelog text).', specialty: 'Bouillabaisse.',
      anecdotes: [
        { text: 'A July 2026 lunch guest, nervous about French table manners, found there was nothing to worry about.', source: R + 'B532755935/' },
        { text: 'A November 2026 diner had the chef’s course built around a sweetfish bouillabaisse.', source: R + 'B538497344/' },
      ],
      japanese_sources_summary: '食べログ: ブイヤベースのお店 プチポワソン、ビストロ・フレンチ、下京区高倉通仏光寺上ル西前町374-1、阪急烏丸駅・地下鉄四条駅から徒歩5分、昼11:30〜15:00 (木〜日)、夜17:00〜22:30 (火〜日、料理L.O.20:00)、月曜と一部の火・水休み、予約可、アラカルトは当日予約のみ、サービス料なし、ディナーは1ドリンク制、カード・電子マネー・QR可、13席 (カウンター7、掘りごたつ6)、禁煙、英語メニュー、2020年10月25日オープン。店の取り組み: 捨てられる魚のアラでブイヤベース。口コミ (2026年、英語): 昼のブイヤベースセット3,600円、前菜の盛り合わせ (鴨、豆腐、キッシュ、キャロットラペ、パテ)、鯛のブイヤベース、HANAKAGO のフォカッチャ、持ち帰りのカヌレ、シェフはニースの星付きで修業、Gault&Millau POP。',
      confidence: 'medium', sources: [TB, R + 'B463963785/', R + 'B498150027/', R + 'B532755935/', R + 'B533753634/', R + 'B534354125/', R + 'B535551611/', R + 'B536599062/', R + 'B536998320/', R + 'B537850956/', R + 'B538497344/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); book ahead; one drink per person at dinner.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区高倉通仏光寺上ル西前町374-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.001799, 135.762696); cross-checked: GSI 京都府京都市下京区西前町374番地 (lot) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B463963785/'],
    price_note: 'No menu read; lunch price from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Lunch bouillabaisse set (starter plate, bouillabaisse, focaccia)', '¥3,600', 'Lunch', 'ask', 'no', 'September 2026.', 'lunch_bouillabaisse'),
    ] }, {
    cuisine: 'ブイヤベースの専門店。捨てられる魚のアラで取る濃いスープ (食べログの店の取り組み、2026年の口コミ)・昼のブイヤベースセット3,600円、たっぷりの前菜 (鴨の胸肉、豆腐、キッシュ、キャロットラペ、パテ、サラダ)、その日のブイヤベース (鯛、ムール貝、なす)、HANAKAGO のフォカッチャ (2026年8〜10月)・夜のコースは魚の前菜2品、ブイヤベース、カツなどの肉料理、デザート、2026年11月は鮎のブイヤベースのコース・個室のブイヤベースのコース (食べログ)・持ち帰りの大きなカヌレ (2026年10月)・ワイン、日本酒、焼酎 (食べログ)',
    neighborhood: '四条烏丸近く、仏光寺の北の高倉通。地下鉄四条駅から徒歩5分',
    gf_detail: '要確認。魚と貝のブイヤベースにフォカッチャ、前菜にキッシュやパテ、コースにカツ、持ち帰りのカヌレ。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。魚のスープのブイヤベースの店で、前菜に鴨やパテ (2026年の口コミ)。',
    notes: '[フレンチビストロ・四条烏丸、京都のブイヤベース] 高倉通から入った小さなカウンターのビストロ。看板は魚介の旨みが濃い、アラから取るブイヤベース。昼は3,600円で、たっぷりの前菜とその日のブイヤベース (鯛、ムール貝、野菜) とフォカッチャ。夜のコースは魚の前菜と肉料理も。カヌレはお持ち帰りで。カウンターが少ないので予約を。夜は1ドリンク制、月曜休み。',
  });
}

// ================================================================ バル agiyao
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26023262/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://fishbar-agiyao.jp/';
  const HW = day(['17:00', '24:00']); const HE = day(['14:00', '24:00']);
  put({
    id: 'kyoto_bar_agiyao_gojo', name: 'バル agiyao (Bar agiyao)', category: 'OMNI',
    lat: 34.996591, lng: 135.761166, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Fish small plates with white wine; bread with the ajillo and pan con tomate, a monaka-wafer otoshi, fried monkfish, squid-ink rice croquettes and fries are not gluten-free (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-and-seafood bar (2026 reviews).',
    hours_raw: 'Official site: 17:00–24:00 on weekdays, 14:00–24:00 on weekends and holidays; lunch with white wine is served upstairs at 魚料理あぎやお from 12:00. Tabelog: 17:00–23:00 Monday–Thursday, 12:00–23:00 Friday–Sunday and holidays; irregular closures. Reservations accepted; take care not to book the 2nd-floor restaurant by mistake; ¥7,700 cancellation fee from two days before (Tabelog). Otoshi ¥550 per person (Tabelog, original text). Cards, e-money and QR accepted (Tabelog). 24 seats: 8 at the counter, two tables for four, a counter private room for five (room fee ¥2,500) (Tabelog). Non-smoking (Tabelog). Children only in the private room (Tabelog). About 10 m east of the Gojo–Higashinotoin crossing, 2 min from Gojo Stn (Tabelog). Opened 3 February 2014 (Tabelog).',
    hours: { 0: HW, 1: HW, 2: HW, 3: HW, 4: HW, 5: HE, 6: HE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gojo-Higashinotoin — 2 min from Gojo Stn',
    cuisine: '“Fish × white wine” bar: seasonal fish and a deep white-wine list, with Kyoto ingredients (official site) · otoshi of a taiyaki-shaped monaka (March–October 2026) · kohada with cucumber and aonori, purple sea urchin with pan con tomate, smoked anago with green papaya, squid and mushroom ajillo (September 2026) · mussels in white wine, boiled black clams, herring bagna cauda, uni bruschetta, grilled kinmedai, flounder marinated with dill, squid-ink rice croquettes, tuna with tomato, eel, soup paella (October 2026) · fried monkfish, Basque ham, French fries (September 2026) · white wine chosen to your taste, sparkling, champagne (2026 reviews)',
    website: SITE, gmaps: gm('バル agiyao 五条'), menu_url: null,
    notes: '[Wine bar · Gojo, fish and white wine] A grown-up bar at Gojo–Higashinotoin built on a simple pairing: seasonal fish and a long list of white wine, poured to your taste. Start with the taiyaki-shaped monaka otoshi, then small plates — sea urchin on pan con tomate, kohada, ajillo with bread, grilled kinmedai, a soup paella. The fish restaurant agiyao is upstairs; book the right floor. ¥550 otoshi; open until midnight.',
    chef_bio: { chef_name: null, roles: ['Owner (named Aoyagi in a September 2026 review), who also runs fish restaurants; kitchen chef (unnamed)'], origin: null,
      background: 'Per a September 2026 review: the owner, Aoyagi, also runs Uo Ryori Aoyagi near Gion and is involved in a wine shop; the sister restaurant 魚料理あぎやお is upstairs in the same building, which an October 2026 reviewer says holds a Michelin star. Tabelog gives the opening as 3 February 2014.',
      philosophy: 'Supporting Kyoto’s food culture and local producers with Kyoto ingredients (official site).', specialty: 'Fish small plates with white wine.',
      anecdotes: [
        { text: 'On a September 2026 day when the chef had just left, the owner was cooking and serving alone, and the lunchtime guest got to eat the owner’s own cooking.', source: R + 'B536346572/' },
        { text: 'Four friends in October 2026 got through about fifteen glasses of white wine, poured in a considered order.', source: R + 'B536801506/' },
        { text: 'An October 2026 visitor found the master intimidating at first, then friendly and full of wine recommendations.', source: R + 'B536964811/' },
      ],
      japanese_sources_summary: '公式サイト: お魚と白ワインのバル agiyao、下京区深草町592-3 1階、旬の魚と豊富な白ワインの大人のバル、京都産の食材で京都の食文化と地元産業を応援、平日17時〜24時、土日祝14時〜24時、白ワインのランチは2階の魚料理あぎやおで12時から。食べログ: 月〜木 17:00〜23:00、金〜日祝 12:00〜23:00、不定休、予約可、2日前からキャンセル料7,700円、お通し550円、カード・電子マネー・QR可、24席 (カウンター8、テーブル4人×2、個室5人、個室料2,500円)、禁煙、2014年2月3日オープン。口コミ (2026年、英語): 店主の Aoyagi さんは Gion 近くの魚料理店も営む、2階の姉妹店はミシュランの星、たい焼き型の最中のお通し、雲丹のパンコントマテ、アヒージョ、金目鯛の焼き物、スープパエリア、白ワイン。',
      confidence: 'medium', sources: [TB, SITE, R + 'B506896863/', R + 'B523738461/', R + 'B535913699/', R + 'B536346572/', R + 'B536801506/', R + 'B536964811/', R + 'B537309142/', R + 'B537370420/', R + 'B538418380/', R + 'B538685189/'] },
    cultural_comfort: { level: 'konnichiwa', note: '¥550 otoshi; book the right floor (bar on 1F, restaurant on 2F); cancellation fee from two days before.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区東洞院通五条上ル深草町592-3 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.996591, 135.761166); cross-checked: GSI 京都府京都市下京区深草町592番地 (lot) 55m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No menu read; otoshi and room fee from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Otoshi (taiyaki-shaped monaka), per person', '¥550', 'Charges', 'no', 'no', 'Tabelog; dish from 2026 reviews.', 'otoshi'),
      it('', '', 'Counter private room fee', '¥2,500', 'Charges', '', '', 'Tabelog.', 'room_fee'),
    ] }, {
    cuisine: '「魚×白ワイン」のバル: 旬の魚と豊富な白ワイン、京都産の食材 (公式サイト)・お通しはたい焼き型の最中 (2026年3〜10月)・こはだと胡瓜と青のり、紫雲丹のパンコントマテ、穴子の燻製と青パパイヤ、新いかときのこのアヒージョ (2026年9月)・ムール貝の白ワイン蒸し、黒はまぐりの塩茹で、にしんのバーニャカウダ、雲丹のブルスケッタ、金目鯛の焼き物、ひらめのディルマリネ、いか墨のライスコロッケ、まぐろとトマト、うなぎ、スープパエリア (2026年10月)・あんこうのフリット、バスクの生ハム、フライドポテト (2026年9月)・好みに合わせる白ワイン、スパークリング、シャンパン (2026年の口コミ)',
    neighborhood: '五条東洞院。五条駅から徒歩2分',
    gf_detail: '要確認。魚の小皿と白ワイン。アヒージョやパンコントマテのパン、最中のお通し、あんこうのフリット、いか墨のライスコロッケ、フライドポテトはグルテンフリーではない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。魚介のバル (2026年の口コミ)。',
    notes: '[ワインバー・五条、魚と白ワイン] 五条東洞院の大人のバル。旬の魚と、好みに合わせて注いでくれる豊富な白ワインが軸。まずはたい焼き型の最中のお通し、それから雲丹のパンコントマテ、こはだ、パンと食べるアヒージョ、金目鯛の焼き物、スープパエリアなどの小皿を。2階は魚料理のあぎやおなので予約の階を間違えずに。お通し550円、深夜0時まで。',
  });
}

// ================================================================ kurs
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26033570/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_kurs_bakery_nijo', name: 'kurs', category: 'OMNI',
    lat: 35.013511, lng: 135.754483, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a wheat bakery of sourdough, croissants, pain de mie and baguette sandwiches (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Croissants, condensed-milk butter bread and sandwiches use dairy, egg and meat; the levain and other lean breads are not described (2026 reviews).',
    hours_raw: 'Opens from about 7:00 (sometimes 6:00); the day’s opening time is posted on Instagram; closed Monday, Tuesday and Wednesday (Tabelog; July–October 2026). Closing time not given; long breaks are announced (one until 26 August in 2026). Queues at opening — 40 minutes in July 2026 — easier around 10:00 (2026 reviews). Cash only (Tabelog; July 2026). Takeaway bakery; seats not listed (Tabelog). In a back lane near Nijo Castle, a brick building with a spiral stair, 5–6 min from Nijojo-mae Stn (Tabelog; October 2026). Began as an event stall; shop opened at the end of 2019 (October 2026 review).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Near Nijo Castle, by Ogawa-dori — 5–6 min from Nijojo-mae Stn',
    cuisine: 'Bakery of hard breads and generous sandwiches: house sourdough levain, croissants, pain de mie seen on TV (2026 reviews) · sandwiches: chicken and gorgonzola ¥500, BLT ¥650, blue cheese and ham, croque madame ¥550, fig fruit sandwich ¥1,000 (September–October 2026) · sausage bread with Kawakita-ya sausage ¥600 (September 2026) · epi ¥300, salted butter ¥300, diamante ½ ¥340, chestnut and brown sugar ½ ¥380, céréales ½ ¥480, pain de mie ¥430 (September–October 2026) · cinnamon and cardamom rolls, flan, carrot cake, chewy doughnuts, condensed-milk butter bread (2026 reviews)',
    website: null, gmaps: gm('kurs パン 二条'), menu_url: null,
    notes: '[Bakery · Nijo Castle, hard bread at first light] A hidden bakery in a back lane near Nijo Castle — brick front, spiral stair — that opens around 7 a.m. (check Instagram that morning) and draws a queue for its sourdough, deeply buttery croissants and pain de mie. The sandwiches are the other reason to come: chicken and gorgonzola, a stacked BLT, a ¥1,000 fig fruit sandwich. Cash only; Thursday to Sunday; arrive at opening or around ten.',
    chef_bio: { chef_name: null, roles: ['Baker-owner (unnamed in Tabelog; one review thanks “Masamichi” and the baker’s wife)'], origin: null,
      background: 'Per an October 2026 review: it began as an event vendor and opened its shop at the end of 2019. Another October 2026 regular thanked "Masamichi and your wife".',
      philosophy: null, specialty: 'Croissants; sourdough; sandwiches.',
      anecdotes: [
        { text: 'A July 2026 visitor waited 40 minutes after a 7 a.m. opening and left with twelve items for ¥5,620.', source: R + 'B532276336/' },
        { text: 'An October 2026 regular calls these the best croissants of a lifetime, rich with butter yet never heavy, and still fairly priced.', source: R + 'B538300943/' },
      ],
      japanese_sources_summary: '食べログ: kurs、パン、中京区西大黒町334 コーポラス二条1F、二条城前駅から430m、朝7時から (その日の開店時間は Instagram で)、月・火・水休み、予約不可、カード・電子マネー・QR不可。口コミ (2026年、英語): 自家製の天然酵母のルヴァン、クロワッサン、テレビで紹介されたパンドミ、鶏とゴルゴンゾーラ500円、BLT650円、クロックマダム550円、いちじくのフルーツサンド1,000円、ソーセージパン600円、行列、現金のみ、イベント出店から始まり2019年末に店舗。',
      confidence: 'medium', sources: [TB, R + 'B455635168/', R + 'B532276336/', R + 'B534979789/', R + 'B535053575/', R + 'B536176732/', R + 'B537226128/', R + 'B537249472/', R + 'B538279422/', R + 'B538300943/', R + 'B538711482/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; check Instagram for the opening time; queues at opening.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区西大黒町334 コーポラス二条 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.013511, 135.754483); cross-checked: GSI 京都府京都市中京区西大黒町334番地 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B455635168/', R + 'B536176732/'],
    price_note: 'No menu read; prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Fig fruit sandwich', '¥1,000', 'Sandwiches', 'no', 'no', 'September–October 2026.', 'fig_sandwich'),
      it('', '', 'Chicken and gorgonzola sandwich', '¥500', 'Sandwiches', 'no', 'no', 'October 2026.', 'chicken_gorgonzola'),
      it('', '', 'BLT', '¥650', 'Sandwiches', 'no', 'no', 'September 2026.', 'blt'),
      it('', '', 'Pain de mie', '¥430', 'Bread', 'no', 'ask', 'October 2026.', 'pain_de_mie'),
      it('', '', 'Epi', '¥300', 'Bread', 'no', 'ask', 'September 2026.', 'epi'),
    ] }, {
    cuisine: 'ハード系のパンとボリュームのあるサンドのベーカリー: 自家製ルヴァン、クロワッサン、テレビで紹介されたパンドミ (2026年の口コミ)・サンド: 鶏とゴルゴンゾーラ500円、BLT650円、ブルーチーズとハム、クロックマダム550円、いちじくのフルーツサンド1,000円 (2026年9〜10月)・Kawakita-ya のソーセージのパン600円 (2026年9月)・エピ300円、塩バター300円、ディアマン ハーフ340円、栗と黒糖 ハーフ380円、セレアル ハーフ480円、パンドミ430円 (2026年9〜10月)・シナモンロールとカルダモンロール、フラン、キャロットケーキ、もちもちのドーナツ、練乳バター (2026年の口コミ)',
    neighborhood: '二条城近く、小川通のあたり。二条城前駅から徒歩5〜6分',
    gf_detail: 'グルテンフリーではない。ルヴァン、クロワッサン、パンドミ、バゲットサンドなど小麦のパン屋 (2026年の口コミ)。',
    vegan_detail: '要確認。クロワッサン、練乳バター、サンドには乳製品、卵、肉。ルヴァンなどシンプルなパンの材料は書かれていない (2026年の口コミ)。',
    notes: '[パン・二条城、朝いちばんのハード系] 二条城近くの路地、レンガの建物にらせん階段の隠れたパン屋。朝7時ごろに開き (当日の Instagram で確認を)、ルヴァン、バターの香るクロワッサン、パンドミを目当てに行列ができる。サンドも目当てのひとつで、鶏とゴルゴンゾーラ、具だくさんの BLT、1,000円のいちじくのフルーツサンド。現金のみ、木〜日、開店直後か10時ごろに。',
  });
}

save();
