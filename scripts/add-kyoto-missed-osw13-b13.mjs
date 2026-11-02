// Kyoto "what did we miss" pass (kyoto-missed, notable phase) — lane osw13, batch 13.
//   + 出町ふたば Demachi Futaba (takeaway wagashi by the Demachi bridge; mame mochi and the autumn chestnut Mont Blanc queues)
//   + ASSEMBLAGES KAKIMOTO (pâtissier-chocolatier 垣本's machiya shop, counter café and reservation-only dessert dinner; since 2016)
//   + PTISSERIE.S salon (the eat-in branch of Patisserie S; cakes and tea, open 13:00 until the cakes run out)
//   + ぎをん 福志 Gion Fukushi (Takuji Fukushi's seven-seat kaiseki counter off Hanamikoji; since 2017)
//   Taken in queue order from `queue.mjs kyoto-missed next notable 80` on 2026-11-02 (the first four after batch 12).
//   None is in data/kyoto.json: grep by name (ふたば/Futaba, カキモト/Kakimoto/Assemblage, パティスリー エス/Patisserie S,
//   福志/Fukushi) and address (青龍町236, 松本町587-5, 朝倉町546, 570-120 with 福志) found none of them. Neighbours:
//   mp_inoue_no_gyoza 18 m from Futaba; kyoto_takeyamachi_mita 41 m from Kakimoto; mp_tominokoji_tempura_matsu 30 m from
//   S salon; kyoto_sottaku_tsukamoto_gion shares the 570-120 address with Fukushi but sits 26 m away — no stacking.
//   Chain check: Patisserie S has two shops (the takeaway main shop on Takatsuji and this salon) — a sister format, not a
//   chain (Greg, 2026-11-02). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-13');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 出町ふたば
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26001520/'; const R = TB + 'dtlrvwlst/';
  const H = day(['08:30', '17:30']);
  put({
    id: 'kyoto_demachi_futaba', name: '出町ふたば (Demachi Futaba)', category: 'OMNI',
    lat: 35.030108, lng: 135.769627, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Rice-cake sweets (mochi with red peas, black soybeans or chestnuts, dusted with rice flour) and red rice, but no ingredient list is published; the Mont Blanc has a chestnut paste and other items vary (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Bean-paste rice cakes and red rice; no ingredient list is published (2026 reviews).',
    hours_raw: '8:30–17:30; closed Tuesday and Wednesday (Tabelog). October 2026 reviewers report the shutters opening at 8:00. Takeaway only; sweets are to be eaten the same day (Tabelog). Long queues, often stretching across the street; some items can be reserved by phone (075-231-1658) and collected without queuing, e.g. black-bean daifuku and chestnut mochi a week ahead, but the autumn chestnut Mont Blanc cannot be reserved and sells out early, with a limit of three per person (2025–2026 reviews). Cash only (Tabelog). 7 min from Demachiyanagi Stn across the Kawai and Demachi bridges (Tabelog).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Demachi, on Kawaramachi-dori just west of the Kamo River bridges — 7 min from Demachiyanagi Stn',
    cuisine: 'Traditional Kyoto rice-cake sweets to take away (Tabelog; 2026 reviews) · the famous mame mochi with red peas and bean paste ¥290; chestnut mochi with two whole chestnuts ¥390 (October 2026) · seasonal: black-bean daifuku and chestnut red rice in autumn; the "Mochiya Chestnut Mont Blanc" with a Tanba chestnut, bean paste and mochi under chestnut paste made without cream (October 2026); hon-warabi mochi, mizore mochi and inaka mochi with yomogi (May 2026); fukumame daifuku with sweet potato (2025–2026) · three-colour dango, red rice',
    website: null, gmaps: gm('出町ふたば'), menu_url: null,
    notes: "[Sweets · Demachi, Kyoto's mame mochi queue] A takeaway counter by the Demachi bridges where the line regularly runs across Kawaramachi-dori for the famous mame mochi: soft rice cake studded with salty red peas around smooth bean paste, about ¥290. In autumn come chestnut mochi with two whole chestnuts, black-bean daifuku, chestnut red rice and a chestnut Mont Blanc that sells out soon after opening. Eat everything the same day, ideally on the Kamo riverbank a minute away. Some items can be reserved by phone to skip the queue. Cash only; closed Tuesday and Wednesday.",
    chef_bio: { chef_name: null, roles: ['Shop staff; no person is named in the sources'], origin: null,
      background: 'Tabelog Sweets WEST "Tabelog 100" 2018, 2019, 2020, 2022 and Japanese sweets WEST "Tabelog 100" 2023, 2026 (Tabelog). 2026 reviewers describe longer queues each year, mostly of visitors.',
      philosophy: null, specialty: 'Mame mochi; autumn chestnut sweets.',
      anecdotes: [
        { text: '"As always, there was an incredible line, and I was really glad I made a reservation!" — October 2026, an eleventh visit.', source: R + 'B472344263/' },
        { text: '"I arrived at the store at 7:00. There were already about 15 people in line." — October 2026, for the Mont Blanc.', source: R + 'B500026665/' },
        { text: '"I did get to enjoy one bean rice cake right away, and it was definitely the best I\'ve ever had!" — October 2026.', source: R + 'B516396739/' },
      ],
      japanese_sources_summary: '食べログ: 出町ふたば、和菓子・大福、上京区出町通今出川上ル青龍町236、出町柳駅から徒歩7分、月・木〜日 8:30〜17:30、火・水休み、持ち帰りのみ、消費期限は当日、カード・電子マネー・QR 不可、スイーツ WEST 百名店 2018・2019・2020・2022、和菓子・甘味処 WEST 百名店 2023・2026。口コミ (2025年11月〜2026年10月、英語): 名物の mame mochi、kuri mochi、kuromame daifuku、栗のモンブランの早朝の行列、電話で予約できる品も。',
      confidence: 'medium', sources: [TB, R + 'B472344263/', R + 'B500026665/', R + 'B516396739/', R + 'B517901390/', R + 'B537810416/', R + 'B537862470/', R + 'B537998308/', R + 'B538194641/', R + 'B538245475/', R + 'B538368959/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point and buy at the counter; queue, or reserve some items by phone.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市上京区出町通今出川上ル青龍町236',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; ten reviews dated October 2026; Japanese sweets WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.030108, 135.769627); cross-checked: GSI 京都府京都市上京区青龍町 (town only, no lot) 204m — pin stays on the Tabelog point; mp_inoue_no_gyoza is 18 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537998308/'],
    price_note: 'No published price list; prices from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Mame mochi (rice cake with red peas and bean paste)', '¥290', 'Mochi', 'ask', 'ask', 'October 2026.', 'mame_mochi'),
      it('', '', 'Chestnut mochi (autumn)', '¥390', 'Mochi', 'ask', 'ask', 'October 2026.', 'kuri_mochi'),
    ] }, {
    cuisine: '持ち帰りの京の mochi の和菓子 (食べログ、2026年の口コミ)・有名な mame mochi (赤えんどう豆とこし餡) 290円、栗が2つ入った kuri mochi 390円 (2026年10月)・季節: 秋の kuromame daifuku と栗の赤飯、Tanba の栗、餡、mochi を生クリームなしの栗のペーストで包んだ「Mochiya Chestnut Mont Blanc」(2026年10月)、hon warabi mochi、mizore mochi、yomogi の inaka mochi (2026年5月)、さつまいもの fukumame の daifuku (2025〜2026年)・三色の dango、赤飯',
    neighborhood: '出町、鴨川の橋のすぐ西の河原町通。出町柳駅から徒歩7分',
    gf_detail: '要確認。mochi の和菓子 (赤えんどう豆、黒豆、栗の mochi、米粉をまぶす) と赤飯だが、原材料は公開されていない。モンブランは栗のペーストで、品によって異なる (2026年の口コミ)。',
    vegan_detail: '要確認。餡の mochi の和菓子と赤飯。原材料は公開されていない (2026年の口コミ)。',
    notes: '[和菓子・出町、mame mochi の行列] 出町の橋のたもとの持ち帰りの店で、有名な mame mochi を求める行列が河原町通の向こうまで伸びることも。塩気のある赤えんどう豆を散らした柔らかい mochi でこし餡を包み、290円ほど。秋は栗が2つ入った kuri mochi、kuromame daifuku、栗の赤飯、開店後すぐ売り切れる栗のモンブランも。どれも当日中に、できればすぐそばの鴨川の河原で。電話で予約できる品もあり、行列を避けられる。現金のみ、火・水曜休み。',
  });
}

// ================================================================ ASSEMBLAGES KAKIMOTO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26027283/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://assemblages.jp/';
  const H = day(['12:00', '19:00']);
  put({
    id: 'kyoto_assemblages_kakimoto', name: 'ASSEMBLAGES KAKIMOTO (アッサンブラージュ カキモト)', category: 'MOM_AND_POP',
    lat: 35.016155, lng: 135.766742, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Mostly wheat-based cakes, pies and baked goods; chocolates and plated desserts may differ, but no ingredient list is published (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Cakes and plated desserts use cream, cheese and mousse (2026 reviews).',
    hours_raw: 'Shop 12:00–19:00 and café 12:00–17:00, Mon and Thu–Sun; dinner from 18:00 by reservation only; closed Tuesday and Wednesday (Tabelog). The official site gives takeaway 12:00–19:00, eat-in from 12:00, dinner 18:00–23:00 (last order 20:00) at ¥15,800 before tax, and closing on Tuesday and the second and fourth Wednesday. Café: choose your cake and pay at the entrance first; a drink alone is not accepted (October 2026 reviews). 10 counter seats (Tabelog). Non-smoking (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and QR payment (Tabelog). 8 min from Jingu-Marutamachi Stn (Tabelog). Opened 21 April 2016 (Tabelog).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Takeyamachi-dori by Teramachi, a converted townhouse just south of the Imperial Palace — 8 min from Jingu-Marutamachi Stn',
    cuisine: 'Cakes, chocolates and plated desserts from a chef who is pâtissier, chocolatier and cook at once; dinner courses by reservation (official site) · the signature "Assemblages" cake of chocolate mousse layered with banana, lemon, mango and caramel creams, about ¥900 (October 2026) · Mont Blanc ¥918 on a crisp pie base with lemon-scented fromage (October 2026) · plated "Le Jardin": a chocolate sphere melted with flaming strawberry brandy over shiso and pistachio ice cream and raspberries, ¥2,300 + tax (October 2026) · Zen, coffee mousse with mochi (September 2026) · baked goods: financier, madeleine, Florentine, Engadiner, blue-cheese sablé, caramel pie; orangettes and a chocolate saucisson · coffee and teas from ¥750 · dinner ¥15,800 before tax (official site)',
    website: SITE, gmaps: gm('アッサンブラージュ カキモト'), menu_url: null,
    notes: "[Sweets · Imperial Palace south, the pâtissier-chocolatier-cook's townhouse] Behind a discreet machiya front near Teramachi, a stylish modern counter where the chef — pâtissier, chocolatier and cook in one, per the shop — puts flavours together: the layered \"Assemblages\" chocolate cake, a Mont Blanc on crisp pastry, and plated desserts such as a chocolate sphere melted at the counter with flaming strawberry brandy. Choose and pay at the door, then take one of ten seats with tea or coffee; chocolates and baked goods go home well. In the evening it serves a dessert-led dinner by reservation. Closed Tuesday and Wednesday; cakes sell out by evening.",
    chef_bio: { chef_name: 'Kakimoto (垣本; official site: "パティシエ垣本"; no given name in a source read)', roles: ['Owner, pâtissier, chocolatier and cook (official site)'], origin: null,
      background: 'Per the official site: a chef with three faces — pâtissier, chocolatier and cuisinier — whose "assemblages" of flavours are served with drinks; dinner courses by the pâtissier. Tabelog: opened 21 April 2016; Sweets "Tabelog 100" 2017 and Sweets WEST 2018, 2019, 2020, 2022, 2023, 2026. Reviews of the bar Calvador (kyoto_calvador_bar, May 2026) mention Calvados chocolates made with Assemblage Kakimoto.',
      philosophy: 'Combining tastes — "assemblages" — to be enjoyed with drinks (official site).', specialty: 'Assemblages cake; plated chocolate desserts.',
      anecdotes: [
        { text: '"Blue flames were dancing on the surface of the chocolate sphere!!" — October 2026, the plated Le Jardin.', source: R + 'B455275544/' },
        { text: '"It seems that ordering drinks alone isn’t allowed; you must order a drink along with another item." — October 2026.', source: R + 'B537367107/' },
        { text: '"This is my number one cake in life" — September 2026.', source: R + 'B482359012/' },
      ],
      japanese_sources_summary: '公式サイト (assemblages.jp): 「パティシエ」「ショコラティエ」「キュイジニエ」3つの顔を持つシェフが織りなす味と味の「組み合わせ」、お酒とともに、中京区竹屋町通寺町西入る松本町587-5、テイクアウト12:00〜19:00、イートイン12:00〜、ディナー18:00〜23:00 (L.O.20:00)、パティシエ垣本の手掛けるディナー15,800円 (税抜)、火曜・第2・4水曜休み (不定休)。食べログ: ケーキ・チョコレート、月・木〜日 カフェ12:00〜17:00、ショップ12:00〜19:00、ディナーは18:00から予約のみ、火・水休み、カウンター10席、2016年4月21日オープン、スイーツ百名店 2017、スイーツ WEST 百名店 2018〜2020・2022・2023・2026。口コミ (2026年9〜10月、英語): アッサンブラージュのケーキ、モンブラン、炎のチョコレートの皿盛りデザート、焼き菓子、先に入口で会計。',
      confidence: 'medium', sources: [SITE, TB, R + 'B455275544/', R + 'B482359012/', R + 'B536675376/', R + 'B536799730/', R + 'B536864416/', R + 'B536928590/', R + 'B537042691/', R + 'B537367107/', R + 'B538486409/', R + 'B538490633/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Choose from the case and pay at the entrance; the official site has English shop details.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区竹屋町通寺町西入ル松本町587-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026; Sweets WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.016155, 135.766742); cross-checked: GSI 京都府京都市中京区松本町587番地 (lot) 64m; kyoto_takeyamachi_mita is 41 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [SITE, R + 'B455275544/', R + 'B538490633/', R + 'B536799730/'],
    price_note: 'Dinner from the official site (before tax); other prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Assemblages (signature layered chocolate cake)', '¥900', 'Cakes', 'ask', 'ask', 'October 2026, about ¥900.', 'assemblages'),
      it('', '', 'Mont Blanc', '¥918', 'Cakes', 'ask', 'ask', 'October 2026.', 'mont_blanc'),
      it('', '', 'Plated dessert "Le Jardin"', '¥2,300 + tax', 'Plated desserts', 'ask', 'ask', 'October 2026.', 'le_jardin'),
      it('パティシエ垣本の手掛けるディナー', '', 'Dinner course by the pâtissier (reservation only)', '¥15,800 + tax', 'Dinner', 'ask', 'ask', 'Official site.', 'dinner'),
    ] }, {
    cuisine: 'パティシエ、ショコラティエ、キュイジニエの3つの顔を持つシェフのケーキ、チョコレート、皿盛りデザート。予約制のディナーも (公式サイト)・名物「アッサンブラージュ」はチョコレートのムースにバナナ、レモン、マンゴー、キャラメルのクリームを重ねたケーキで約900円 (2026年10月)・サクサクのパイにレモン香るフロマージュのモンブラン918円 (2026年10月)・皿盛りの「Le Jardin」: 苺のブランデーの炎で溶かすチョコレートの球の中に shiso とピスタチオのアイス、ラズベリー、2,300円+税 (2026年10月)・コーヒーのムースに餅の入った Zen (2026年9月)・焼き菓子: フィナンシェ、マドレーヌ、フロランタン、Engadiner、ブルーチーズのサブレ、キャラメルパイ、オランジェット、チョコレートのサラミ・コーヒーや紅茶750円から・ディナー15,800円 (税抜、公式サイト)',
    neighborhood: '寺町近くの竹屋町通、京都御所のすぐ南の町家を改装した店。神宮丸太町駅から徒歩8分',
    gf_detail: '要確認。ケーキ、パイ、焼き菓子は主に小麦を使う。チョコレートや皿盛りデザートは異なるかもしれないが、原材料は公開されていない (2026年の口コミ)。',
    vegan_detail: '要確認。ケーキや皿盛りデザートにクリーム、チーズ、ムースを使う (2026年の口コミ)。',
    notes: '[スイーツ・御所の南、パティシエ兼ショコラティエ兼料理人の町家] 寺町近くの控えめな町家の奥に、スタイリッシュでモダンなカウンター。店によればパティシエ、ショコラティエ、料理人の3つの顔を持つシェフが味を組み合わせる: 層を重ねたチョコレートのケーキ「アッサンブラージュ」、パイ生地のモンブラン、カウンターで苺のブランデーの炎で溶かすチョコレートの球などの皿盛りデザート。入口で選んで先に会計し、10席のカウンターで紅茶やコーヒーと。チョコレートや焼き菓子はお土産に。夜は予約制でデザートが主役のディナー。火・水曜休み、ケーキは夕方には売り切れる。',
  });
}

// ================================================================ PTISSERIE.S salon
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26029620/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://patisserie-s.com/';
  const H = day(['13:00', '18:00']);
  put({
    id: 'kyoto_patisserie_s_salon', name: 'PTISSERIE.S salon (パティスリー エス サロン)', category: 'OMNI',
    lat: 35.007609, lng: 135.764824, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. French-style cakes and baked goods, mostly with flour; a meringue cake was on sale in 2026, but no ingredient list is published (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Cream, fromage blanc and mousse cakes (2026 reviews); no vegan item is mentioned.',
    hours_raw: '13:00–18:00 (last order 17:30); closed Wednesday and Thursday; may close early once the fresh cakes sell out (official site; Tabelog lists 12:30). 2026 reviewers find the case nearly empty by about 15:00–15:30, and a short queue at opening. No reservations (Tabelog). A few counter seats, tables and a terrace (September 2026 review); order and pay first (October 2026). Cards, e-money and PayPay accepted (Tabelog; September 2026). On Rokkaku-dori, about 10 min from Karasuma-Oike Stn (October 2026 review).',
    hours: { 0: H, 1: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Rokkaku-dori between Karasuma and City Hall, ground floor of ウェルスアーリ天保 — about 10 min from Karasuma-Oike Stn',
    cuisine: 'The café branch of Patisserie S, whose main shop on Takatsuji-dori is takeaway only (official site; 2026 reviews) · signature cake "S": fromage blanc with lemon and grapefruit over raspberries and cranberry, ¥806 · other cakes: Chocolat Framboise, Saint-Marc, Masala, Seduir, a meringue cake, éclair, cream puffs; mille-feuille at the main shop on weekends · baked goods and "CSS" crunchy caramels · tea such as Earl Grey ¥750, iced coffee ¥682 · diners spend about ¥1,000–1,999',
    website: SITE, gmaps: gm('パティスリーエス サロン'), menu_url: null,
    notes: "[Sweets · Rokkaku-dori, the sit-down branch of Patisserie S] Kyoto's much-loved Patisserie S sells only takeaway at its main shop, so this small antique-styled salon is where you can sit with the cakes: the signature \"S\", a light fromage blanc cake bright with lemon and grapefruit around red fruit, with an Earl Grey, or a Chocolat Framboise on the little terrace. It opens at 13:00 and the case is often nearly empty by mid-afternoon, so come early. Order and pay at the counter first. Cake and tea around ¥1,500. Closed Wednesday and Thursday.",
    chef_bio: { chef_name: null, roles: ['Shop staff; no person is named in the sources'], origin: null,
      background: 'Per the official site: two shops — the main shop at 下京区高辻通室町西入繁昌町300-1 (11:00–19:00) and this salon — both closed Wednesday and Thursday, both closing early when the fresh cakes run out. Tabelog Sweets WEST "Tabelog 100" 2023 and 2026 (Tabelog).',
      philosophy: null, specialty: 'The "S" cake; seasonal cakes with tea.',
      anecdotes: [
        { text: '"I learned that they open at 1 PM and sell out by 3:30 PM." — September 2026.', source: R + 'B536079967/' },
        { text: '"The atmosphere has a lovely British vibe." — September 2026.', source: R + 'B535873376/' },
        { text: '"They were delicate, light, and perfectly balanced—truly a work of art." — October 2026.', source: R + 'B487541188/' },
      ],
      japanese_sources_summary: '公式サイト (patisserie-s.com): パティスリーエス、本店は下京区高辻通室町西入繁昌町300-1 カノン室町四条1F、11:00〜19:00 (L.O.18:30)、サロンは中京区朝倉町546 ウェルスアーリ天保1F、13:00〜18:00 (L.O.17:30)、どちらも水・木曜定休、生菓子が終了次第早く閉店することあり、生菓子・焼菓子・冷蔵菓子・コンフィチュール。食べログ: ケーキ・カフェ、予約不可、カード・電子マネー可、スイーツ WEST 百名店 2023・2026。口コミ (2026年7〜10月、英語): 看板のケーキ「S」、イートインはサロンだけ、午後早くに売り切れ、テラス席。',
      confidence: 'medium', sources: [SITE, TB, R + 'B487541188/', R + 'B535873376/', R + 'B536079967/', R + 'B536346727/', R + 'B536735223/', R + 'B536802206/', R + 'B537493057/', R + 'B538337537/', R + 'B538433638/', R + 'B538503349/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point at the cake case, order and pay first.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区朝倉町546 ウェルスアーリ天保 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with current hours (calendar entries through October 2026); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007609, 135.764824); cross-checked: GSI 京都府京都市中京区朝倉町546番地 (lot) 40m; mp_tominokoji_tempura_matsu is 30 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537493057/', R + 'B535873376/'],
    price_note: 'No published price list; prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Cake "S" (fromage blanc, lemon, grapefruit, red fruit)', '¥806', 'Cakes', 'ask', 'ask', 'September–October 2026.', 's_cake'),
      it('', '', 'Earl Grey tea', '¥750', 'Drinks', '', '', 'September 2026.', 'earl_grey'),
      it('', '', 'Iced coffee', '¥682', 'Drinks', '', '', 'October 2026.', 'iced_coffee'),
    ] }, {
    cuisine: '持ち帰りのみの本店 (高辻通) に対し、イートインができるパティスリーエスのサロン (公式サイト、2026年の口コミ)・看板のケーキ「S」: レモンとグレープフルーツのフロマージュブランにラズベリーとクランベリー、806円・ほかに Chocolat Framboise、Saint-Marc、Masala、Seduir、メレンゲのケーキ、エクレア、シュークリーム。ミルフィーユは本店の週末のみ・焼き菓子とサクサクのキャラメル「CSS」・アールグレイ750円、アイスコーヒー682円・予算は約1,000〜1,999円',
    neighborhood: '烏丸と市役所の間の六角通、ウェルスアーリ天保の1階。烏丸御池駅から徒歩約10分',
    gf_detail: '要確認。主に小麦粉を使うフランス風のケーキや焼き菓子。2026年にはメレンゲのケーキもあったが、原材料は公開されていない (2026年の口コミ)。',
    vegan_detail: '要確認。クリーム、フロマージュブラン、ムースのケーキ (2026年の口コミ)。ヴィーガンの品の記載はない。',
    notes: '[スイーツ・六角通、パティスリーエスの座れる店] 京都で愛されるパティスリーエスは本店が持ち帰りのみなので、アンティーク調の小さなこのサロンでケーキを座って楽しめる。看板の「S」はレモンとグレープフルーツが明るい軽やかなフロマージュブランのケーキで中に赤い果実、アールグレイと一緒に。小さなテラスで Chocolat Framboise も。13時開店で、午後半ばにはケースがほぼ空になることが多いので早めに。先にカウンターで注文と会計。ケーキと紅茶で1,500円ほど。水・木曜休み。',
  });
}

// ================================================================ ぎをん 福志
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26030034/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_gion_fukushi', name: 'ぎをん 福志 (Gion Fukushi)', category: 'MOM_AND_POP',
    lat: 35.002126, lng: 135.774376, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information; a kaiseki course with soy- and miso-seasoned dishes, fried items and, at times, a soba course (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a dashi-centred kaiseki with fish, quail and beef (2026 reviews).',
    hours_raw: 'Dinner only, all guests starting together at 18:00 — please arrive by then; closed Sunday and irregularly (Tabelog). No closing time is published, so no hours are stored; a 2025 meal took about three hours. Reservation only, by phone (Tabelog); 100% cancellation charge from five days before (Tabelog, prices changed from 1 October). Seven counter seats; private hire for up to 8 (Tabelog). Children from junior-high age (Tabelog). Non-smoking (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); service charge 10% (Tabelog). About 10 min from Gion-Shijo Stn (Tabelog). Opened 1 December 2017 (Tabelog).',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, a quiet lane just off Hanamikoji — about 10 min from Gion-Shijo Stn',
    cuisine: 'Kyoto kaiseki at a seven-seat counter, centred on dashi and fine tableware (2026 review) · diners report ¥30,000–39,999 · February 2026: hassun with red clam, sweet shrimp and sea urchin, Tanba black soybeans; a clear soup of kinmedai and cod milt; Akashi sea bream and Awaji squid; grilled karasumi with daikon; grilled quail; grilled managatsuo; fried ebiimo with yuba sauce; beef simmered with seri; sea bream takikomi gohan; summer-orange jelly; matcha · 2025 courses included a hanasansho hot pot and a soba course · sake, shochu, wine',
    website: null, gmaps: gm('ぎをん 福志'), menu_url: null,
    notes: "[Kaiseki · Gion, a seven-seat counter with English-speaking staff] Down a quiet lane off Hanamikoji, a soft, calm counter of seven where owner-chef Takuji Fukushi, from Aomori, serves a dashi-led Kyoto kaiseki on beautiful tableware: clear soups, Akashi sea bream, grilled karasumi and quail, sea bream rice, and matcha whisked at the end. A February 2026 diner notes many overseas guests and staff fluent in English. Everyone starts at 18:00, so be on time; allow about three hours. Around ¥30,000–40,000 a head with service. Book by phone; closed Sundays.",
    chef_bio: { chef_name: 'Takuji Fukushi (February 2026 review: "The owner, Takuji Fukushi"; no given-name kanji in a source)', roles: ['Owner-chef'], origin: 'Aomori (February 2026 review).',
      background: 'Per a February 2026 review: from Aomori; the restaurant attracts international guests and the staff speak fluent English. Earlier reviews (2024–2025) call it Michelin one-starred and note the chef whisking the closing matcha and keeping guests entertained. Tabelog: opened 1 December 2017; Japanese cuisine WEST "Tabelog 100" 2023.',
      philosophy: null, specialty: 'Dashi-led seasonal kaiseki; sea bream rice.',
      anecdotes: [
        { text: '"the staff is fluent in English, providing attentive service that reassures foreign guests" — February 2026.', source: R + 'B522300097/' },
        { text: '"One of the few places in Kyoto that serves delicious food." — September 2026.', source: R + 'B536733996/' },
        { text: '"To conclude, the chef himself prepared matcha for us, which was truly delightful." — April 2025.', source: R + 'B505697427/' },
      ],
      japanese_sources_summary: '食べログ: ぎをん 福志、日本料理、東山区祇園町南側570-120、祇園四条駅から徒歩約10分、予約のみ、18:00一斉スタート、日曜と不定休、10月1日から価格改定、キャンセルは5日前から100%、カウンター7席、貸切は8名まで、中学生以上、カード可、サービス料10%、2017年12月1日オープン、日本料理 WEST 百名店 2023。口コミ (2024年11月〜2026年9月、英語): 店主の Takuji Fukushi さんは Aomori 出身、英語の堪能なスタッフ、器と出汁、海外からの客が多い。',
      confidence: 'medium', sources: [TB, R + 'B442444663/', R + 'B503536743/', R + 'B505697427/', R + 'B522300097/', R + 'B536733996/'] },
    cultural_comfort: { level: 'english', note: 'A February 2026 diner reports staff fluent in English and many overseas guests.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町南側570-120',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with an October 2026 price note; reviews dated February and September 2026.' },
    pin_source: `Tabelog ${TB} (35.002126, 135.774376); cross-checked: GSI 京都府京都市東山区祇園町南側570番地 (lot) 167m — the large 570 block, so the pin stays on the Tabelog point; kyoto_sottaku_tsukamoto_gion (same 570-120 address) is 26 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No published course price; diners report ¥30,000–39,999; service 10% (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Kaiseki course (dinner)', '', 'Course', 'ask', 'no', 'Diners report ¥30,000–39,999.', 'course'),
    ] }, {
    cuisine: '7席のカウンターの京懐石。出汁と器が主役 (2026年の口コミ)・口コミの予算は30,000〜39,999円・2026年2月: 赤貝、甘海老と雲丹、Tanba の黒豆の hassun、kinmedai と鱈の白子のお椀、Akashi の鯛と Awaji の烏賊、大根と焼き karasumi、鶉の焼き物、managatsuo の焼き物、yuba のあんの ebiimo の揚げ物、牛と seri の煮物、鯛の takikomi gohan、夏みかんの寒天、matcha・2025年のコースには hanasansho の鍋や soba も・日本酒、焼酎、ワイン',
    neighborhood: '祇園、花見小路からすぐの静かな路地。祇園四条駅から徒歩約10分',
    gf_detail: '予約時に要確認。グルテンの情報なし。醤油や味噌を使う料理、揚げ物、時には soba も出る懐石 (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。出汁が中心で、魚、鶉、牛を使う懐石 (2026年の口コミ)。',
    notes: '[懐石・祇園、英語の話せるスタッフのいる7席のカウンター] 花見小路からすぐの静かな路地、柔らかく落ち着いた7席のカウンター。Aomori 出身の店主 Takuji Fukushi さんが、美しい器で出汁の効いた京懐石を出す: お椀、Akashi の鯛、焼き karasumi や鶉、鯛のご飯、締めに点てる matcha。2026年2月の口コミでは海外の客が多く、スタッフは英語が堪能。全員18時に始まるので時間厳守で、3時間ほどみておきたい。サービス料込みで30,000〜40,000円ほど。予約は電話で、日曜休み。',
  });
}

save();
