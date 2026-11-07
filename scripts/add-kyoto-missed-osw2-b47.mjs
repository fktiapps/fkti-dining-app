// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 47.
//   Queue run from the osw2 worktree, 2026-11-06.
//   core (queue.mjs kyoto-missed next core 200, lane ids in order):
//   + 食堂マルシン Shokudo Marushin (three-choice set-meal diner near Kyoto University Hospital; since 2019) — unrelated to マルシン飯店
//     per an April 2026 reviewer.
//   + じじばばDOS Jijibaba DOS (8-seat counter bar in the Rido dining alley; second shop of じじばば) — じじばば group: four same-name
//     shops in our crawl, three in data (酒肴屋 じじばば, じじばば木馬亭, じじばば第三酒場), drafted as in osw6-39.
//   notable (queue.mjs kyoto-missed next notable 200, lane ids in order):
//   + レストラン キエフ Restaurant Kiev (Ukrainian, Georgian and Russian above the Kamo at Gion-Shijo; since 1972)
//   - ワビスケ 京都ポルタ店 — skipped: sub-brand of a large parent (森口産業, 24 shops).
//   - OLU BURGER KYOTO — skipped: chain (six OLU BURGER KYOTO shops on the official site).
//   + 京都おぶや 京都駅店 Kyoto Obuya (dashi-chazuke counter at the JR Kyoto Station west gate; since 2022) — now a single shop (the
//     Shijo-Karasuma shop closed 15 March 2026 per the official site).
//   None of the four is in data/kyoto.json: grep by id, name and address; 東境町180 (Rido dining alley), 廿一軒町236 (鴨東ビル) and
//   東塩小路町901 (JR Kyoto Isetan) hold other shops in data.
//   Service charges: じじばばDOS ¥500 otoshi (June 2024 review); キエフ none (Tabelog original text: なし); none listed for the others.
//   Remarks about other diners kept only where several reviews agree.
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-47');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26037321', 'ワビスケ 京都ポルタ店: a sub-brand of a large parent — Tabelog’s Kuzuha shop names moriguchi-sangyo.co.jp, whose brand page lists 酒房ワビスケ (Abeno Lucias, Kyoto Porta, Kuzuha Ekinaka) beside 冨士屋, 膳や and musi-vege+, and whose company page (read 2026-11-06) gives 森口産業株式会社 (Osaka, founded 1962) with 24 shops and over 600 staff');
skip('26034909', 'OLU BURGER KYOTO: a chain — the official site (oluburgerkyoto.com, read 2026-11-06) lists six OLU BURGER KYOTO shops: 荒神口 (this one), 梅小路, 洛西口, 緑地, 茨木 and 南船場');

// ================================================================ 食堂マルシン
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26031945/'; const R = TB + 'dtlrvwlst/';
  const LD = day(['11:30', '14:00'], ['18:00', '20:00']);
  put({
    id: 'kyoto_shokudo_marushin', name: '食堂マルシン (Shokudo Marushin)', category: 'OMNI',
    lat: 35.01801180786725, lng: 135.77859378048066, cuisine_type: 'shokudo',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Three set meals — young-chicken kara-age, ginger pork and sweet-savoury beef belly — with sides, miso soup and rice; no gluten information is published (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: every main is chicken, pork or beef (reviews).',
    hours_raw: 'Lunch 11:30–14:00, dinner 18:00–20:00, Monday–Saturday; closed Sunday; hours may change (Tabelog). The same three sets at dinner (October 2026). Bookings accepted (Tabelog); fills up soon after 11:30 and dishes are cooked to order, so it can be slow when busy (February and July 2026). Cash only — no cards, e-money or QR (Tabelog). 15 seats: a 5-seat counter and three tables; wooden interior; non-smoking (Tabelog; January 2026). On Higashi-oji just north of Higashiyama-Marutamachi, near Kyoto University Hospital and Kumano Shrine; 579 m from Jingu-Marutamachi Stn (Tabelog; June 2026).',
    hours: { 0: LD, 1: LD, 2: LD, 3: LD, 4: LD, 5: LD }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Higashiyama-Marutamachi, by Kyoto University Hospital — 579 m from Jingu-Marutamachi Stn',
    cuisine: 'A three-dish set-meal diner (2025–2026 reviews) · young-chicken kara-age (five big pieces), ginger pork, or beef belly grilled with onions in a sweet-savoury sauce, each with two small sides (such as simmered daikon, white-sesame tofu salad, potato and cabbage salads), miso soup and rice · ¥1,200 at lunch (July 2025–April 2026); large kara-age set ¥1,350 (February 2026); ginger pork set ¥1,300 at dinner (October 2026) · large rice +¥50; refills ¥50–150 (July 2025)',
    website: null, gmaps: gm('食堂マルシン 聖護院'), menu_url: TB,
    notes: "[Set-meal diner · Higashiyama-Marutamachi by Kyoto University Hospital] A small, wooden, privately run diner with just three choices — crisp young-chicken kara-age, ginger pork, or sweet-savoury beef belly with onions — each with two homemade sides, miso soup and piping-hot rice for about ¥1,200–1,300. Everything is cooked to order, so come early: it fills soon after 11:30. Same menu at night. Cash only; closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Opened 6 February 2019 (Tabelog). A small, privately owned diner, unrelated to the well-known マルシン飯店 (April 2026 review).',
      philosophy: null,
      specialty: 'Young-chicken kara-age set.',
      anecdotes: [
        { text: 'A May 2025 pair waited five minutes outside, and the staff moved a counter seat so the two could sit together.', source: R + 'B506646830/' },
        { text: 'A July 2026 regular came back for the beef-belly set and blew on the piping-hot rice.', source: R + 'B531147704/' },
        { text: 'A February 2026 visitor at 11:30 sharp watched the place fill before the food arrived.', source: R + 'B507838954/' },
      ],
      japanese_sources_summary: '食べログ: 食堂マルシン、食堂、左京区聖護院山王町11-1、京阪神宮丸太町駅4番出口から徒歩9分 (579m)、月〜土 11:30〜14:00・18:00〜20:00、日曜定休、予約可、カード・電子マネー・QR不可、15席 (カウンター5、4人掛け2、2人掛け1)、禁煙、2019年2月6日オープン。口コミ (2025〜2026年、英語): 若鶏の唐揚げ、豚の生姜焼き、牛バラ焼きの3種の定食、小鉢2品 (大根の煮物、白胡麻豆腐のサラダ、ポテトサラダ、キャベツのサラダ)、味噌汁、ご飯、昼1,200円、唐揚げ大盛り1,350円、夜の生姜焼き定食1,300円、ご飯大盛り+50円、おかわり50〜150円、注文後に調理、11時半すぎに満席、木の内装、京大病院と熊野神社の近く、有名なマルシン飯店とは無関係。',
      confidence: 'medium', sources: [TB, R + 'B414317809/', R + 'B482153165/', R + 'B500596016/', R + 'B506646830/', R + 'B507838954/', R + 'B520739784/', R + 'B521935019/', R + 'B530819767/', R + 'B531147704/', R + 'B537813550/', R + 'B537869691/', R + 'B538093747/'] },
    cultural_comfort: { level: 'japanese', note: 'Three set meals; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区聖護院山王町11-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.018012, 135.778594); cross-checked: GSI 京都府京都市左京区聖護院山王町11番地 (lot) 42m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B482153165/', R + 'B537813550/'],
    price_note: 'Prices from July 2025–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Young-chicken kara-age set', '¥1,200', 'Set', 'no', 'no', 'Large ¥1,350 (February 2026).', 'karaage'),
      it('', '', 'Ginger pork set', '¥1,200', 'Set', 'ask', 'no', '¥1,300 at dinner (October 2026).', 'shogayaki'),
      it('', '', 'Beef belly grilled with onions, set', '¥1,200', 'Set', 'ask', 'no', '', 'barayaki'),
    ] }, {
    cuisine: '3種だけの定食屋 (2025〜2026年の口コミ)・若鶏の唐揚げ (大きめ5個)、豚の生姜焼き、玉ねぎと甘辛く焼いた牛バラ焼き、それぞれ小鉢2品 (大根の煮物、白胡麻豆腐のサラダ、ポテトサラダやキャベツのサラダなど)、味噌汁、ご飯付き・昼1,200円 (2025年7月〜2026年4月)、唐揚げ大盛り1,350円 (2026年2月)、夜の生姜焼き定食1,300円 (2026年10月)・ご飯大盛り+50円、おかわり50〜150円 (2025年7月)',
    neighborhood: '東山丸太町、京大病院のそば。神宮丸太町駅から579m',
    gf_detail: '要確認。若鶏の唐揚げ、豚の生姜焼き、甘辛い牛バラ焼きの3種の定食に、小鉢、味噌汁、ご飯。グルテンの情報は公開されていない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。おかずはすべて鶏、豚、牛 (口コミ)。',
    notes: '[定食屋・京大病院近くの東山丸太町] 木の内装の個人経営の小さな食堂。メニューはカリッとした若鶏の唐揚げ、生姜焼き、玉ねぎと甘辛い牛バラ焼きの3つだけで、手作りの小鉢2品、味噌汁、熱々のご飯付きで1,200〜1,300円ほど。注文後に作るので早めに。11時半すぎには満席に。夜も同じメニュー。現金のみ、日曜休み。',
  });
}

// ================================================================ じじばばDOS
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26007789/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:30', '01:00']);
  put({
    id: 'kyoto_jijibaba_dos', name: 'じじばばDOS (Jijibaba DOS)', category: 'OMNI',
    lat: 34.989195, lng: 135.758725, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Small plates — prosciutto, mapo tofu, tacos, Napolitan spaghetti, fried gizzards, beef-tripe stew — with no gluten information published (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: ham, meat and fish plates (reviews).',
    hours_raw: '18:30–1:00 Monday–Saturday; closed Sunday and holidays; hours may change (Tabelog). Bookings by phone. Cash only — no cards, e-money or QR (Tabelog). Otoshi ¥500 (June 2024). 8 counter seats only (Tabelog; reviews mention about ten); smoking allowed (Tabelog). In the Rido dining alley (リド飲食街) off Shichijo-Karasuma, two doors from the original じじばば, 438 m from Kyoto Station (Tabelog; May 2024).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Rido dining alley, Shichijo-Karasuma — 438 m from Kyoto Station',
    cuisine: 'Counter bar of the じじばば group with wine and sake (Tabelog; reviews) · Spanish prosciutto (serrano) ¥1,000 for a full plate; mapo tofu ¥780; tako-butsu ¥650; Napolitan spaghetti ¥1,000; tacos; ham-hock ajoarriero; kiwi caprese; miso-marinated pork belly; kombu-cured sea bream; freshly fried gizzards; beef-tripe stew; carp kara-age (2024–2026 reviews) · otoshi such as blue-cheese potato salad, honeyed blue cheese with baguette, japchae (2024–2026) · sake such as Ine Mankai (red rice) and Shinkame, Sapporo Sorachi draught (2024)',
    website: null, gmaps: gm('じじばばDOS リド飲食街'), menu_url: TB,
    notes: "[Counter bar · Rido dining alley by Kyoto Station, じじばば's second shop] A tiny, smoky eight-seat counter in the retro Rido alley, two doors from the original じじばば and often where its overflow lands. Eclectic small plates — serrano ham, mapo tofu, tacos, Napolitan — with good sake and wine, about ¥3,000–5,000. Opens 18:30 till 1:00. Cash only; closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner not named; じじばば group'], origin: null,
      background: 'The second shop of the izakaya じじばば, two doors from the original in the Rido dining alley (January and May 2024 reviews). Group shops in data: kyoto_sakenoateya_jijibaba, kyoto_jijibaba_mokubatei, kyoto_jijibaba_daisan_sakaba.',
      philosophy: null,
      specialty: 'Small plates with sake and wine.',
      anecdotes: [
        { text: 'A May 2024 guest turned away from a full じじばば walked two doors down and found it was じじばば too.', source: R + 'B485934757/' },
        { text: 'A July 2024 visitor found the owner’s Kuraki Mai playing and ordered tacos with a Sapporo Sorachi.', source: R + 'B489413251/' },
        { text: 'A March 2025 diner watched the ¥1,000 Napolitan vanish between drinks.', source: R + 'B503829444/' },
      ],
      japanese_sources_summary: '食べログ: じじばばDOS、ダイニングバー・バル・ワインバー、下京区東境町180、京都駅から徒歩10分 (438m)、月〜土 18:30〜翌1:00、日祝定休、予約可、カード・電子マネー・QR不可、カウンター8席、喫煙可。口コミ (2024〜2026年、英語): リド飲食街、じじばばの2号店、本店の2軒隣、お通し500円、生ハム (ハモンセラーノ) 1,000円、麻婆豆腐780円、たこぶつ650円、ナポリタン1,000円、タコス、アホアリエロ、キウイのカプレーゼ、豚バラの味噌漬け焼き、鯛の昆布締め、砂肝の唐揚げ、もつ煮、鯉の唐揚げ、ブルーチーズのポテトサラダ、伊根満開、神亀、サッポロ ソラチ。',
      confidence: 'low', sources: [TB, R + 'B480061375/', R + 'B485934757/', R + 'B487768436/', R + 'B488316113/', R + 'B489413251/', R + 'B491458782/', R + 'B493143983/', R + 'B503829444/', R + 'B507050789/', R + 'B521171859/', R + 'B523251910/', R + 'B82040192/'] },
    cultural_comfort: { level: 'japanese', note: 'Tiny smoking counter; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区東境町180',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through February 2026.' },
    pin_source: `Tabelog ${TB} (34.98915, 135.758725) moved about 5m north to 34.989195, as kyoto_akaboshi_rido (same alley, 180) sits 1m away; cross-checked: GSI 京都府京都市下京区東境町180番地 (lot) 33m; 8m from kyoto_sakenoateya_jijibaba; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B487768436/', R + 'B503829444/', R + 'B491458782/'],
    price_note: 'Prices from 2024–2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Spanish prosciutto (serrano), full', '¥1,000', 'Plates', 'ask', 'no', 'June 2024.', 'jamon'),
      it('', '', 'Mapo tofu', '¥780', 'Plates', 'ask', 'no', 'June 2024.', 'mapo'),
      it('', '', 'Napolitan spaghetti', '¥1,000', 'Plates', 'no', 'no', 'March 2025.', 'napolitan'),
      it('', '', 'Tako-butsu (octopus)', '¥650', 'Plates', 'ask', 'no', 'September 2024.', 'tako'),
    ] }, {
    cuisine: 'じじばば系列の、ワインと日本酒のカウンター (食べログ、口コミ)・スペインの生ハム (ハモンセラーノ) 1皿1,000円、麻婆豆腐780円、たこぶつ650円、ナポリタン1,000円、タコス、アホアリエロ、キウイのカプレーゼ、豚バラの味噌漬け焼き、鯛の昆布締め、揚げたての砂肝、もつ煮、鯉の唐揚げ (2024〜2026年の口コミ)・お通しはブルーチーズのポテトサラダ、はちみつのブルーチーズとバゲット、チャプチェなど (2024〜2026年)・伊根満開、神亀などの日本酒、サッポロ ソラチの生 (2024年)',
    neighborhood: 'リド飲食街、七条烏丸。京都駅から438m',
    gf_detail: '要確認。生ハム、麻婆豆腐、タコス、ナポリタン、砂肝の唐揚げ、もつ煮などの小皿。グルテンの情報は公開されていない (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ハム、肉、魚の皿 (口コミ)。',
    notes: '[カウンターバー・京都駅近くのリド飲食街、じじばばの2号店] レトロなリド飲食街の、8席の小さな喫煙可のカウンター。本店じじばばの2軒隣で、満席のときの受け皿にも。生ハム、麻婆豆腐、タコス、ナポリタンなど何でもありの小皿に、良い日本酒とワイン。3,000〜5,000円ほど。18:30から深夜1時まで。現金のみ、日曜休み。',
  });
}

// ================================================================ レストラン キエフ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000565/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://restaurant-kiev.com/';
  const WD = day(['12:00', '15:30'], ['17:00', '21:00']); const WE = day(['12:00', '21:00']);
  put({
    id: 'kyoto_restaurant_kiev', name: 'レストラン キエフ (Restaurant Kiev)', category: 'OMNI',
    lat: 35.004291, lng: 135.7728, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pirozhki, borscht, beef stroganoff, cabbage rolls, mushroom stews, pilaf and bakes; no gluten information is published (Tabelog; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat-based borscht, stroganoff, cabbage rolls and cream stews (reviews).',
    hours_raw: 'Weekdays 12:00–15:30 (last food order 14:30) and 17:00–21:00 (last food order 20:00); weekends and holidays 12:00–21:00; closures on a calendar; year-end closure 30 December–2 January (Tabelog). Rooftop beer garden 14 May–30 September, its terrace the only smoking area (Tabelog). Bookings online; 9 or more by phone; ask for a window table (Tabelog; August 2026). No service charge (Tabelog original text: なし). Cards, transport IC and PayPay (Tabelog). 80 seats, private rooms for 6–20, live stage; English menu and English-speaking staff; wheelchair accessible; children welcome with a kids’ menu (Tabelog). On the 6th floor of the Kamoto Building on Nawate just north of Shijo, overlooking the Kamo, 1 min from Gion-Shijo Stn (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion-Shijo, Nawate — 1 min walk from Gion-Shijo Stn',
    cuisine: 'Ukrainian, Georgian and Russian cooking with a view of the Kamo River and Kyoto Tower (Tabelog; reviews) · weekday lunch A ¥1,650 and B (golubtsy cabbage rolls) ¥1,880, with pirozhki, borscht, cabbage salad, the main and Russian tea (August–October 2026) · holiday and dinner courses about ¥3,000–4,000 and up, e.g. griby (mushrooms), pirozhki, beef stroganoff, stews and pilaf (2026 reviews) · summer rooftop beer garden with all-you-can-drink including craft beers (July–September 2026) · celebration dessert plates; online shop (Tabelog)',
    website: SITE, gmaps: gm('レストラン キエフ 祇園四条'), menu_url: TB + 'dtlmenu/',
    notes: "[Ukrainian–Russian · Gion-Shijo above the Kamo, since 1972] A long-loved sixth-floor dining room at Gion-Shijo with big windows over the Kamo River and Kyoto Tower, serving borscht, crisp pirozhki, cabbage rolls and beef stroganoff. Weekday lunch sets run about ¥1,650–1,900; in summer the rooftop becomes a beer garden. Book and ask for a window table.",
    chef_bio: { chef_name: null, roles: ['Chef and owner not named'], origin: null,
      background: 'Per Tabelog’s introduction: open since 1972, serving traditional Ukrainian, Georgian and Russian dishes with views of Kyoto through large windows; private rooms and a live stage. The official site describes it as loved in Gion-Shijo for over 50 years. An October 2026 reviewer understood it to be linked to Sungari, a Russian restaurant with two branches in Shinjuku, Tokyo.',
      philosophy: null,
      specialty: 'Borscht and pirozhki.',
      anecdotes: [
        { text: 'An August 2026 couple shared lunches A and B — borscht, freshly fried pirozhki, cabbage rolls and a mushroom cream stew — and advised asking for a window table.', source: R + 'B533753929/' },
        { text: 'An October 2026 solo diner before a Danjuro show was given a table turned towards the river.', source: R + 'B537808012/' },
        { text: 'A September 2026 visitor had a second helping of pirozhki while thinking of far-off Russia and Ukraine.', source: R + 'B536055494/' },
      ],
      japanese_sources_summary: '公式サイト: 京都・祇園四条で50年以上愛される、ロシア・ウクライナ・ジョージア料理のレストラン。食べログ: ロシア料理・洋食・ビアガーデン、東山区廿一軒町236 縄手通四条上ル 鴨東ビル6F、祇園四条駅7・8番出口から徒歩1分、平日12:00〜15:30・17:00〜21:00、土日祝12:00〜21:00、休業日はカレンダー、年末年始12月30日〜1月2日、9名以上は電話予約、サービス料なし、カード・交通系IC・PayPay可、80席、個室 (6〜12名、12〜20名)、ライブステージ、禁煙 (ビアガーデンのテラスは喫煙可)、英語メニュー・英語を話すスタッフ、車椅子可、子どもメニュー、1972年創業、大きな窓から京都の景色、屋上ビアガーデン (5月14日〜9月30日)、オンラインショップ。口コミ (2026年、英語): 平日のAランチ1,650円、Bランチ (ロールキャベツ) 1,880円、ピロシキ、ボルシチ、キャベツのサラダ、ロシアンティー、休日のコース3,000〜4,000円、きのこ料理 (griby)、ビーフストロガノフ、ピラフ、窓際の席、鴨川と京都タワーの眺め、ビアガーデンの飲み放題にクラフトビール、新宿の Sungari と系列という口コミ。',
      confidence: 'medium', sources: [TB, SITE, R + 'B51178435/', R + 'B515264556/', R + 'B532292809/', R + 'B533753929/', R + 'B533884315/', R + 'B534258148/', R + 'B534656149/', R + 'B535414486/', R + 'B536055494/', R + 'B536888191/', R + 'B537723746/', R + 'B537808012/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区廿一軒町236 縄手通四条上ル 鴨東ビル 6F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with online booking; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004291, 135.772825) moved about 2m west to 135.7728 to clear kyoto_gion_sonou (same building, 2F; 4m); cross-checked: GSI 京都府京都市東山区廿一軒町236番地 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B515264556/', R + 'B537808012/'],
    price_note: 'Lunch prices from August and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Weekday lunch A (borscht, pirozhki, salad, main, tea)', '¥1,650', 'Lunch', 'no', 'no', 'August 2026.', 'lunch_a'),
      it('', '', 'Weekday lunch B, golubtsy (cabbage rolls)', '¥1,880', 'Lunch', 'no', 'no', 'October 2026.', 'lunch_b'),
      it('', '', 'Pirozhki', '', 'Dishes', 'no', 'no', '', 'pirozhki'),
      it('', '', 'Beef stroganoff', '', 'Dishes', 'ask', 'no', '', 'stroganoff'),
    ] }, {
    cuisine: '鴨川と京都タワーを望むウクライナ、ジョージア、ロシア料理 (食べログ、口コミ)・平日のAランチ1,650円、ロールキャベツのBランチ1,880円、ピロシキ、ボルシチ、キャベツのサラダ、メイン、ロシアンティー付き (2026年8〜10月)・休日や夜のコースは3,000〜4,000円ほどから、きのこ料理 (griby)、ピロシキ、ビーフストロガノフ、煮込み、ピラフなど (2026年の口コミ)・夏の屋上ビアガーデン、クラフトビールを含む飲み放題 (2026年7〜9月)・お祝いのデザートプレート、オンラインショップ (食べログ)',
    neighborhood: '祇園四条、縄手。祇園四条駅から徒歩1分',
    gf_detail: '要確認。ピロシキ、ボルシチ、ビーフストロガノフ、ロールキャベツ、きのこの煮込み、ピラフ、オーブン焼き。グルテンの情報は公開されていない (食べログ、口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉のボルシチ、ストロガノフ、ロールキャベツ、クリーム煮込み (口コミ)。',
    notes: '[ウクライナ・ロシア料理・祇園四条の鴨川沿い、1972年から] 祇園四条のビル6階、大きな窓から鴨川と京都タワーを望む長く愛される店。ボルシチ、カリッとしたピロシキ、ロールキャベツ、ビーフストロガノフ。平日のランチは1,650〜1,900円ほど、夏は屋上がビアガーデンに。予約して窓際の席を。',
  });
}

// ================================================================ 京都おぶや 京都駅店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26038047/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.kyoto-obuya.jp/'; const MENU = SITE + 'pages/4620382/menu'; const KODAWARI = SITE + 'pages/4620490/page_202102051731';
  const H = day(['11:00', '22:00']);
  put({
    id: 'kyoto_obuya_kyoto_station', name: '京都おぶや 京都駅店 (Kyoto Obuya, Kyoto Station)', category: 'OMNI',
    lat: 34.98539951369563, lng: 135.75837985539877, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Dashi chazuke — rice with bonito-and-kombu dashi — topped with seafood, some dishes soy- or butter-soy-seasoned, with arare crackers among the condiments; Tabelog notes allergy information is available (official site; Tabelog; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: bonito-and-kombu dashi and bonito, tuna and mackerel flakes on every bowl (official site).',
    hours_raw: '11:00–22:00 (last order 21:15); closing days irregular, following JR Kyoto Isetan (official site; Tabelog). No reservations — take a numbered ticket and pay first; waits of 20–50 minutes at peak are common, the wait can be tracked by QR code (2026 reviews). Cards, ICOCA, WeChat Pay and Alipay; no QR codes (Tabelog). 27 seats at counters and tables; non-smoking; children and strollers welcome (Tabelog). In Eat Paradise in front of the JR west exit gate, JR Kyoto Isetan restaurant floor, 60 m from Kyoto Stn (Tabelog; official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kyoto Station, JR west exit gate (JR Kyoto Isetan Eat Paradise)',
    cuisine: 'Kyoto dashi chazuke (official site) · every bowl comes with the house shaved bonito, tuna and mackerel flakes and pickles; rice cooked with kombu from a near-century-old Kyoto rice dealer; light bonito-and-kombu dashi; toppings chosen by a fishmonger of over 90 years (official site) · Obuya luxury chazuke with nine seafoods and sea urchin ¥1,990; kombu and plum ¥880; scallop and mentaiko in butter-soy ¥1,300; salmon four ways ¥1,300; marinated tuna with negitoro ¥1,200; sea bream with sesame sauce ¥1,400; Kyoto beef and Kujo leek ¥1,800; saikyo-grilled fish ¥1,800 (official menu) · small, medium or large rice (2026 reviews) · winter takeaway "cup de odashi" (official site)',
    website: SITE, gmaps: gm('京都おぶや 京都駅店'), menu_url: MENU,
    notes: "[Dashi chazuke · Kyoto Station west gate] A calm counter steps from the JR west gate pouring house bonito-and-kombu dashi over kombu-cooked rice and fishmonger-chosen toppings — sea bream with sesame, salmon four ways, a nine-seafood luxury bowl with urchin (¥880–1,990). Eat it plain, then with condiments and the house bonito flakes. Expect a queue at mealtimes; ticket first, pay first. Open 11:00–22:00.",
    chef_bio: { chef_name: null, roles: ['Operator not named; toppings chosen by a fishmonger founded over 90 years ago (official site)'], origin: null,
      background: 'Opened 31 August 2022 (Tabelog), described as Japanese fast food with a calm air (Tabelog introduction). Per the official site: rice from a Kyoto rice wholesaler of nearly 100 years, cooked with kombu as "obu-zuke mai"; a light homemade bonito-and-kombu dashi; a house blend of thinly shaved bonito, tuna and mackerel flakes; a second shop at Shijo-Karasuma opened and then closed on 15 March 2026.',
      philosophy: 'Per the official site: enjoy the dashi and toppings plain first, then add condiments, then the house flakes for a richer bowl.',
      specialty: 'Sea bream with sesame sauce chazuke.',
      anecdotes: [
        { text: 'A September 2026 diner came after a gyoza festival for something light and found about 20 groups already waiting.', source: R + 'B536206299/' },
        { text: 'An October 2026 visitor waited about 50 minutes at lunch but could track the queue by QR code.', source: R + 'B537258830/' },
        { text: 'A September 2026 guest with an upset stomach chose the saikyo-grilled fish and takana chazuke.', source: R + 'B535685220/' },
      ],
      japanese_sources_summary: '公式サイト (kyoto-obuya.jp): 京だし茶漬け専門店「京都おぶや」、すべてのだし茶漬けに「おぶや特製 けずり節」と「漬物」付き、おぶやの贅沢茶漬け1,990円 (9種の海の幸と雲丹)、昆布と梅880円、帆立と明太子のバター醤油1,300円、鮭尽くし1,300円、漬鮪と葱とろろ1,200円、鯛と胡麻だれ1,400円、京都牛と九条ネギ1,800円 (亀岡牛)、西京焼き茶漬け1,800円、京都で100年近い米問屋の国産米を昆布と炊いた「おぶ漬け米」、鰹と昆布の自家製だし、鰹節・鮪節・さば節の特製けずり節、創業90余年の魚屋が選んだ具材、京都駅店は11:00〜22:00 (L.O. 21:15)、不定休、席の予約不可、四条烏丸店は2026年3月15日で営業終了、冬季限定「カップdeおだし」。食べログ: お茶漬け・日本料理、ジェイアール京都伊勢丹 レストラン街 JR西口改札前イートパラダイス、京都駅から60m、カード・電子マネー可、QR不可、27席、禁煙、アレルギー表示あり、2022年8月31日オープン。口コミ (2026年、英語): 発券機で番号札、先払い、20〜50分待ち、QRで待ち状況、ご飯は小・中・大、あられ・胡麻・わさびの薬味。',
      confidence: 'medium', sources: [TB, SITE, MENU, KODAWARI, R + 'B535685220/', R + 'B536133166/', R + 'B536135890/', R + 'B536206299/', R + 'B536421082/', R + 'B537148841/', R + 'B537258830/', R + 'B537408437/', R + 'B537435529/', R + 'B537839887/', R + 'B538249215/', R + 'B538766653/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine and pay-first counter; queue at mealtimes.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区烏丸通塩小路下ル東塩小路町901 ジェイアール京都伊勢丹 レストラン街 JR西口改札前イートパラダイス',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with 2026 notices; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.9854, 135.75838); cross-checked: GSI 京都府京都市下京区東塩小路町901番地 (lot) 111m — the Kyoto Station building spans the lot; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Official menu prices (tax included), read November 2026.', last_checked: TODAY, items: [
      it('おぶやの贅沢茶漬け', '', 'Obuya luxury chazuke (nine seafoods, sea urchin)', '¥1,990', 'Chazuke', 'ask', 'no', '', 'zeitaku'),
      it('昆布と梅', '', 'Kombu and plum chazuke', '¥880', 'Chazuke', 'ask', 'no', '', 'kombu_ume'),
      it('鮭尽くし', '', 'Salmon four ways chazuke', '¥1,300', 'Chazuke', 'ask', 'no', '', 'sake'),
      it('鯛と胡麻だれ', '', 'Sea bream with sesame sauce chazuke', '¥1,400', 'Chazuke', 'ask', 'no', '', 'tai_goma'),
      it('帆立と明太子のバター醤油', '', 'Scallop and mentaiko in butter-soy chazuke', '¥1,300', 'Chazuke', 'no', 'no', '', 'hotate_mentai'),
      it('京都牛と九条ネギ', '', 'Kyoto beef and Kujo leek chazuke', '¥1,800', 'Chazuke', 'ask', 'no', '', 'gyu_negi'),
    ] }, {
    cuisine: '京だし茶漬け (公式サイト)・すべてに特製の鰹・鮪・さば節のけずり節と漬物付き、京都の100年近い米問屋の米を昆布と炊いたご飯、鰹と昆布のあっさりした出汁、創業90余年の魚屋が選ぶ具材 (公式サイト)・9種の海の幸と雲丹のおぶやの贅沢茶漬け1,990円、昆布と梅880円、帆立と明太子のバター醤油1,300円、鮭尽くし1,300円、漬鮪と葱とろろ1,200円、鯛と胡麻だれ1,400円、京都牛と九条ネギ1,800円、西京焼き茶漬け1,800円 (公式のメニュー)・ご飯は小・中・大 (2026年の口コミ)・冬の持ち帰り「カップdeおだし」 (公式サイト)',
    neighborhood: '京都駅、JR西口改札前 (ジェイアール京都伊勢丹 イートパラダイス)',
    gf_detail: '要確認。鰹と昆布の出汁をかけるだし茶漬けに海鮮の具材、醤油やバター醤油の味付けのものも、薬味にあられ。食べログではアレルギー表示あり (公式サイト、食べログ、口コミ)。',
    vegan_detail: 'ヴィーガン不可。どの茶漬けにも鰹と昆布の出汁と、鰹・鮪・さば節 (公式サイト)。',
    notes: '[だし茶漬け・京都駅JR西口改札前] JR西口改札からすぐの落ち着いたカウンター。昆布と炊いたご飯に、魚屋が選んだ具材と自家製の鰹昆布だしをかける。鯛の胡麻だれ、鮭尽くし、雲丹入りの9種の贅沢茶漬けなど (880〜1,990円)。まずはそのまま、次に薬味、最後に特製けずり節で。食事時は行列、番号札と先払い。11:00〜22:00。',
  });
}

save();
