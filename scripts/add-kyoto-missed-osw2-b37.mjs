// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 37.
//   Queue run from the osw2 worktree, 2026-11-06.
//   core (queue.mjs kyoto-missed next core 200, lane ids in order):
//   + トゥレ・ドゥー Tous Les Deux (French patisserie and café at Sanjo-Shinmachi)
//   + 焼鳥 仰 Yakitori Aogu (binchotan yakitori at Kawaramachi-Ebisugawa; since 2021)
//   notable (queue.mjs kyoto-missed next notable 200; トゥレ・ドゥー also heads this list):
//   + Sekki (Six Senses Kyoto) — the hotel’s all-day restaurant; Six Senses is a hotel brand, and no Six Senses record is in data, so
//     drafted like Téori; the hotel’s Cafe Sekki is a separate listing (not in data).
//   + 祇園ビストロ 丸橋 Gion Bistro Maruhashi (bistro in a machiya at Shijo-Kawabata) — invoice セントラルホールディングス株式会社 of Nagoya;
//     the group’s size could not be found (no other 丸橋 bistro in the crawl), so drafted and flagged for a parent-size check.
//   None of the four is in data/kyoto.json: grep by id, name (トゥレ/Tous Les Deux, 仰/Aogu, Sekki/Six Senses, 丸橋/Maruhashi — 丸橋珈琲 in
//   Tokyo is unrelated) and address (町頭町112, 指物町322, 妙法院前側町431, 常盤町177) found none.
//   Service charges: Sekki 「サービス料金 15％」; 丸橋 「チャージ代330円」 (a ¥330 cover); none listed for the other two.
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-37');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ トゥレ・ドゥー
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26002629/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.nau-now.com/cake/touslesdeux/';
  const H = day(['11:00', '17:00']);
  put({
    id: 'kyoto_tous_les_deux', name: 'トゥレ・ドゥー (Tous Les Deux)', category: 'MOM_AND_POP',
    lat: 35.008647887866225, lng: 135.75669172040145, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a French patisserie of tarts, cakes, brownies and baked goods (Tabelog; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: butter, cream and eggs throughout (reviews).',
    hours_raw: 'Shop 11:00–20:00 (Saturday, Sunday and holidays to 19:30), closing days shown on the official calendar (official site). Tabelog lists the upstairs café 11:00–17:00 on Monday, Tuesday, Thursday and Friday and closed Wednesday. A "sweets course" runs on set days in two sittings, 13:00 and 15:00, eight guests each; in 2026 it ends with November and resumes in January (official site; Tabelog). Cash only — no cards or e-money (Tabelog). No service charge listed (Tabelog). 18 seats; non-smoking; takeout and birthday cakes to order (Tabelog). At the corner of Sanjo and Shinmachi, 3 min from exit 6 of Karasuma-Oike Stn (official site).',
    hours: { 0: H, 1: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Sanjo-Shinmachi — 3 min from Karasuma-Oike Stn',
    cuisine: 'French patisserie with a café upstairs: additive-free cakes, chocolates and baked goods (Tabelog) · e.g. strawberry tart ¥680 (February 2026), dense walnut brownie, Gion Festival "Yamaboko parfait" in July (2025–2026 reviews) · the "sweets course" of many small sweets served from a cart, 16 guests a day across two sittings (Tabelog; October 2025–March 2026)',
    website: SITE, gmaps: gm('トゥレ・ドゥー 三条新町'), menu_url: SITE,
    notes: "[Sweets · Sanjo-Shinmachi, a pastry chef's shop and café] A long-running French cake shop on a corner of Sanjo-dori, with a café upstairs, where Chef Tsutsui — trained at patisseries abroad and in Kyoto hotels — makes additive-free tarts, cakes and chocolates. On set days a 'sweets course' wheels small cakes to just eight guests per sitting. Takarazuka photos on the walls. Cash only.",
    chef_bio: { chef_name: 'Tsutsui (pâtissier; per Tabelog’s official introduction)', roles: ['Owner-pâtissier'], origin: null,
      background: 'Per Tabelog’s official introduction: handmade cakes by Chef Tsutsui, who trained at renowned patisseries overseas and at Kyoto hotels, with cakes, chocolates and baked goods free of additives; a second-floor café with a weekend sweets service from a cart, and birthday cakes to order. The official site (Tous Les Deux) lists the shop’s hours and the sweets-course dates.',
      philosophy: 'Per Tabelog’s official introduction: carefully made sweets without additives.',
      specialty: 'Cake course from the cart; fruit tarts.',
      anecdotes: [
        { text: 'An October 2025 guest found the sweets course like being invited to a party, with eight groups per sitting.', source: R + 'B515727902/' },
        { text: 'A March 2026 visitor noticed photos of the Takarazuka Revue all over the interior.', source: R + 'B524971407/' },
        { text: 'A July 2026 visitor came on Gion Festival Yoiyama for the Yamaboko parfait missed the year before.', source: R + 'B532606494/' },
      ],
      japanese_sources_summary: '公式サイト (nau-now.com): 京都のフランス菓子ショップ トゥレ・ドゥー (Tous Les Deux)、中京区三条通新町角、地下鉄御池駅6番出口から徒歩3分、11:00〜20:00 (土日祝11:00〜19:30)、休みはカレンダーで、極上スイートコースは指定日に1部13:00・2部15:00、各8名、年内は11月で終了し1月から再開。食べログ: カフェ・ケーキ・チョコレート、中京区三条通新町角町頭町112 1F・2F、カフェは月火木金11:00〜17:00、土日はケーキビュッフェ2部制、水曜定休、カード・電子マネー不可、18席、禁煙、テイクアウト。公式紹介: 海外の有名パティスリーと京都のホテルで修業した Tsutsui シェフの無添加のケーキ、チョコレート、焼き菓子、2階のカフェ、誕生日ケーキ。口コミ (2025〜2026年、英語): いちごのタルト680円、くるみのブラウニー、祇園祭の山鉾パフェ、宝塚の写真。',
      confidence: 'medium', sources: [TB, SITE, R + 'B427005328/', R + 'B443891018/', R + 'B477534994/', R + 'B498387318/', R + 'B498648456/', R + 'B506050638/', R + 'B510866396/', R + 'B515727902/', R + 'B516874364/', R + 'B523626692/', R + 'B524971407/', R + 'B532606494/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; book the sweets course ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三条通新町角町頭町112 1F・2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with a November 2026 calendar and Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.008648, 135.756692); cross-checked: GSI 京都府京都市中京区町頭町112番地 (lot) 69m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523626692/', SITE],
    price_note: 'Price from a February 2026 review; course details from the official site.', last_checked: TODAY, items: [
      it('', '', 'Strawberry tart', '¥680', 'Cakes', 'no', 'no', 'February 2026.', 'strawberry_tart'),
      it('極上スイートコース', '', 'Sweets course (set days, 8 per sitting)', '', 'Course', 'no', 'no', 'Resumes January.', 'sweets_course'),
    ] }, {
    cuisine: '2階にカフェのあるフランス菓子店: 無添加のケーキ、チョコレート、焼き菓子 (食べログ)・例: いちごのタルト680円 (2026年2月)、濃厚なくるみのブラウニー、7月の祇園祭の「山鉾パフェ」(2025〜2026年の口コミ)・ワゴンから小さなケーキが次々に出る「スイートコース」は1日2部で16組 (食べログ、2025年10月〜2026年3月)',
    neighborhood: '三条新町。烏丸御池駅から徒歩3分',
    gf_detail: 'グルテンフリー不可。タルト、ケーキ、ブラウニー、焼き菓子のフランス菓子店 (食べログ、口コミ)。',
    vegan_detail: 'ヴィーガン不可。バター、生クリーム、卵を多く使う (口コミ)。',
    notes: '[スイーツ・三条新町、パティシエの店とカフェ] 三条通の角の、2階にカフェのある長く続くフランス菓子店。海外のパティスリーと京都のホテルで修業した Tsutsui シェフが、無添加のタルト、ケーキ、チョコレートを作る。決まった日には「スイートコース」で小さなケーキがワゴンから、1部8名だけ。壁には宝塚の写真。現金のみ。',
  });
}

// ================================================================ 焼鳥 仰
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26036829/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '01:00']);
  put({
    id: 'kyoto_yakitori_aogu', name: '焼鳥 仰 (Yakitori Aogu)', category: 'OMNI',
    lat: 35.01518070786592, lng: 135.76877083045892, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yakitori with salt or tare, fried wings, and nyumen; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakitori counter (Tabelog).',
    hours_raw: '18:00–01:00 (last order 24:00); closed Thursday; hours may change (Tabelog). Reservations recommended (June 2026). No service charge listed (Tabelog). 14 seats: 8 at the counter and 6 in private rooms; smoking allowed per Tabelog; VISA and PayPay (Tabelog). On the west side of Kawaramachi-dori just north of Ebisugawa, 457 m from Jingu-Marutamachi Stn (Tabelog; July 2024). Opened 31 October 2021 as a yakitori-and-soba collaboration; reviewers say the soba chef left in March 2024 and soba is no longer served (June 2024).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi-Ebisugawa — 457 m from Jingu-Marutamachi Stn',
    cuisine: 'Yakitori of Kyo-akaji chicken grilled over Kishu binchotan (January 2025 review) · skewers ¥180–280 (February 2025): thigh, negima, seseri, yagen cartilage, tsukune, back liver, sasami, overnight-dried crispy wings, quail eggs, thick fried tofu · small plates: chicken yukhoe ¥780, wasabi-greens ohitashi ¥400, vinegar-miso chicken and lotus root ¥550, spicy cartilage ¥700, chicken-soboro potato salad ¥550 · finish with chicken-and-egg Handa nyumen ¥850 or rice with raw egg (2025–2026 reviews)',
    website: null, gmaps: gm('焼鳥 仰 河原町夷川'), menu_url: TB,
    notes: "[Yakitori · Kawaramachi-Ebisugawa, binchotan skewers till 1 a.m.] A small counter and two private rooms on Kawaramachi north of Ebisugawa, grilling Kyo-akaji chicken over Kishu binchotan into the small hours. Skewers run about ¥180–280 — don't miss the overnight-dried crispy wings — and the side dishes are as good as the skewers. Finish with Handa nyumen or egg on rice. Book ahead; smoking allowed. Closed Thursday.",
    chef_bio: { chef_name: null, roles: ['Yakitori chef not named'], origin: null,
      background: 'Per Tabelog: opened 31 October 2021 as a yakitori-and-soba restaurant, a collaboration between a soba cook from a soba-restaurant family and a yakitori chef. A June 2024 reviewer reports the soba chef left in March 2024 and soba was dropped; it continues as a yakitori counter.',
      philosophy: null,
      specialty: 'Kyo-akaji yakitori over binchotan; crispy dried wings.',
      anecdotes: [
        { text: 'A February 2025 visitor recommends the overnight-dried crispy chicken wings above all.', source: R + 'B502047050/' },
        { text: 'A May 2026 diner finished with rice, raw egg and mustard-dressed cartilage.', source: R + 'B528841703/' },
        { text: 'A December 2024 regular comes back about every three months.', source: R + 'B499201270/' },
      ],
      japanese_sources_summary: '食べログ: 焼鳥 仰、居酒屋・焼き鳥、中京区河原町通夷川上ル指物町322、神宮丸太町駅から457m、18:00〜翌1:00 (L.O. 24:00)、木曜定休、14席 (カウンター8、個室6)、喫煙可、VISA・PayPay 可、2021年10月31日オープン、そば屋の家の蕎麦職人と焼鳥職人のコラボの焼鳥とそばの店。口コミ (2024〜2026年、英語): 2024年3月に蕎麦職人が抜けそばは終了、紀州備長炭の京赤地鶏、串180〜280円 (もも、ねぎま、せせり、やげん軟骨、つくね、背肝、ささみ、一夜干しの手羽、うずら、厚揚げ)、ユッケ780円、わさび菜のおひたし400円、ひね鶏と蓮根の酢味噌550円、ピリ辛軟骨700円、鶏そぼろのポテトサラダ550円、半田にゅうめん850円、卵かけご飯。',
      confidence: 'medium', sources: [TB, R + 'B486367750/', R + 'B489185509/', R + 'B493297425/', R + 'B499201270/', R + 'B502047050/', R + 'B505357164/', R + 'B517966018/', R + 'B526454578/', R + 'B528841703/', R + 'B529551113/', R + 'B530932677/', R + 'B531181829/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; book ahead; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町通夷川上ル指物町322',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.015181, 135.768771); cross-checked: GSI 京都府京都市中京区指物町322番地 (lot) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B502047050/'],
    price_note: 'Prices from a February 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Thigh skewer', '¥280', 'Skewers', 'ask', 'no', '', 'momo'),
      it('', '', 'Overnight-dried crispy wings', '¥260', 'Skewers', 'ask', 'no', '', 'teba'),
      it('', '', 'Tsukune skewer', '¥220', 'Skewers', 'ask', 'no', '', 'tsukune'),
      it('', '', 'Chicken yukhoe', '¥780', 'Dishes', 'ask', 'no', '', 'yukhoe'),
      it('', '', 'Chicken-and-egg Handa nyumen', '¥850', 'Finish', 'no', 'no', '', 'nyumen'),
    ] }, {
    cuisine: '紀州備長炭で焼く京赤地鶏の焼き鳥 (2025年1月の口コミ)・串は180〜280円 (2025年2月): もも、ねぎま、せせり、やげん軟骨、つくね、背肝、ささみ、一夜干しのパリパリ手羽、うずら、厚揚げ・一品: 鶏のユッケ780円、わさび菜のおひたし400円、ひね鶏と蓮根の酢味噌550円、ピリ辛軟骨700円、鶏そぼろのポテトサラダ550円・締めは鶏と卵の半田にゅうめん850円か卵かけご飯 (2025〜2026年の口コミ)',
    neighborhood: '河原町夷川。神宮丸太町駅から457m',
    gf_detail: '要確認。塩やたれの焼き鳥、揚げた手羽、にゅうめん。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。焼き鳥のカウンター (食べログ)。',
    notes: '[焼き鳥・河原町夷川、深夜1時までの備長炭の串] 夷川の北の河原町通の、小さなカウンターと個室2つ。京赤地鶏を紀州備長炭で深夜まで焼く。串は180〜280円ほどで、一夜干しのパリパリ手羽はぜひ。一品料理も串に負けない。締めは半田にゅうめんか卵かけご飯。予約を、喫煙可。木曜休み。',
  });
}

// ================================================================ Sekki (Six Senses Kyoto)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26041335/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.sixsenses.com/jp/hotels-resorts/asia-the-pacific/japan/kyoto/dining/sekki/';
  const H = day(['07:00', '10:30'], ['12:00', '21:30']);
  put({
    id: 'kyoto_sekki_six_senses', name: 'Sekki (Six Senses Kyoto)', category: 'OMNI',
    lat: 34.99105233788293, lng: 135.77405618021152, cuisine_type: 'other',
    gf_confidence: 'options', gf_label: 'Some GF options', gf_detail: 'Some options: the restaurant offers a gluten-free afternoon tea (Tabelog official introduction; August 2026 review). Other dishes are not marked; ask about cross-contact.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A plant-based dinner course was served to a vegan guest in September 2026; the regular menus use fish and meat (reviews).',
    hours_raw: 'Breakfast 7:00–10:30; lunch 12:00–14:30 (Sunday brunch 12:00–14:30); afternoon tea 12:00–17:30 Monday–Saturday and 15:00–17:30 Sunday; dinner 18:00–21:30 (Tabelog). Service charge 15% (Tabelog’s Japanese original: 「サービス料金 15％」). 52 seats including sofas and an open terrace facing a garden; a private room for 8 (¥6,000 for 2 hours); non-smoking; wheelchair accessible; cards (Tabelog; 2026 reviews). On basement level 2 of Six Senses Kyoto, near Sanjusangendo, 599 m from Shichijo Stn (Tabelog; July 2026). Opened 23 April 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Six Senses Kyoto, near Sanjusangendo — 599 m from Shichijo Stn',
    cuisine: 'All-day contemporary cooking inspired by the 24 solar terms (sekki): local vegetables, sustainable seafood, house-fermented ingredients; the menu changes about every two weeks (Tabelog) · afternoon tea by solar term, gluten-free and without refined sugar, e.g. Shine Muscat in autumn (August–October 2026) · lunch and dinner courses and a buffet; a cake-and-drink set ¥2,600 (July 2026); a plant-based dinner course on request (September 2026) (2026 reviews)',
    website: SITE, gmaps: gm('Sekki シックスセンシズ京都'), menu_url: SITE,
    notes: "[Hotel dining · Higashiyama-Shichijo, Six Senses' solar-term kitchen] The all-day restaurant of Six Senses Kyoto, two floors down yet opening onto a bright garden. The menu follows the 24 solar terms with local vegetables, sustainable fish and house ferments, changing every fortnight. The afternoon tea is gluten-free and refined-sugar-free; a plant-based dinner course has been served on request. 15% service. Near Sanjusangendo.",
    chef_bio: { chef_name: null, roles: ['Hotel restaurant of Six Senses Kyoto; chef not named'], origin: null,
      background: 'Per Tabelog’s official introduction: contemporary cuisine inspired by the 24 solar terms of the traditional calendar, with fresh local vegetables and sustainable seafood presented in a modern style rooted in Japanese food culture; homemade fermented ingredients and a gluten-free afternoon tea designed with guest wellness in mind; the menu changes about every two weeks. Opened 23 April 2024 (Tabelog). The hotel’s Cafe Sekki is a separate listing.',
      philosophy: 'Per Tabelog’s official introduction: guest wellness and the blessings of each season.',
      specialty: 'Solar-term afternoon tea.',
      anecdotes: [
        { text: 'A September 2026 diner with a vegan friend chose the plant-based course and found the herbs and spices excellent.', source: R + 'B537510755/' },
        { text: 'An August 2026 guest appreciated that the seasonal afternoon tea was gluten-free and free of refined sugar.', source: R + 'B534122837/' },
        { text: 'A July 2026 family found some dishes, such as the meat sauce, too grown-up for a five-year-old.', source: R + 'B535557025/' },
      ],
      japanese_sources_summary: '食べログ: Sekki (シックスセンシズ京都)、創作料理、東山区妙法院前側町431 シックスセンシズ京都 B2F、七条駅から599m、朝食7:00〜10:30、ランチ12:00〜14:30 (日曜はブランチ)、アフタヌーンティー12:00〜17:30 (日曜15:00〜17:30)、ディナー18:00〜21:30、サービス料15%、52席、個室 (8名、2時間6,000円)、禁煙、車椅子可、カード可、2024年4月23日オープン。公式紹介: 二十四節気から着想した現代的な料理、地元の野菜と持続可能な魚介、自家製の発酵食材、グルテンフリーのアフタヌーンティー、約2週間ごとにメニューが変わる。口コミ (2026年、英語): 庭に面した明るい空間、ケーキとドリンクのセット2,600円、シャインマスカットのアフタヌーンティー、プラントベースのコース、ビュッフェ。',
      confidence: 'medium', sources: [TB, SITE, R + 'B511070409/', R + 'B529520426/', R + 'B531538358/', R + 'B531702659/', R + 'B534122837/', R + 'B534213797/', R + 'B534261361/', R + 'B534396232/', R + 'B535557025/', R + 'B536130559/', R + 'B537510755/', R + 'B538170911/'] },
    cultural_comfort: { level: 'english', note: 'International hotel; 15% service.' },
    safety: { ...SAFETY0,
      positives: [{ text: 'The restaurant’s own introduction says the afternoon tea is gluten-free.', source: TB, verified: TODAY },
        { text: 'An August 2026 guest confirmed the seasonal afternoon tea was gluten-free and free of refined sugar.', source: R + 'B534122837/', verified: TODAY }],
      gf_cross_contamination: [{ text: 'No source describes how the gluten-free afternoon tea is kept apart from wheat in the kitchen, and the other menus are not marked gluten-free.', source: TB, verified: TODAY }] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区妙法院前側町431 シックスセンシズ京都 B2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Hotel website and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.991052, 135.774056); cross-checked: GSI 京都府京都市東山区妙法院前側町431番地 (lot) 45m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531702659/', R + 'B534122837/'],
    price_note: 'From 2026 reviews; menus change every two weeks.', last_checked: TODAY, items: [
      it('', '', 'Solar-term afternoon tea (gluten-free)', '', 'Afternoon tea', '', 'ask', 'Gluten-free per the restaurant.', 'afternoon_tea'),
      it('', '', 'Cake and drink set', '¥2,600', 'Café', 'ask', 'ask', 'July 2026.', 'cake_set'),
    ] }, {
    cuisine: '二十四節気から着想したオールデイの現代的な料理。地元の野菜、持続可能な魚介、自家製の発酵食材、メニューは約2週間ごとに変わる (食べログ)・節気ごとのアフタヌーンティーはグルテンフリーで精製糖不使用、たとえば秋のシャインマスカット (2026年8〜10月)・昼と夜のコースとビュッフェ、ケーキとドリンクのセット2,600円 (2026年7月)、頼めばプラントベースの夜のコース (2026年9月) (2026年の口コミ)',
    neighborhood: 'シックスセンシズ京都、三十三間堂の近く。七条駅から599m',
    gf_detail: '一部あり: グルテンフリーのアフタヌーンティーがある (食べログの公式紹介、2026年8月の口コミ)。ほかの料理は表示がないので、混入については要確認。',
    vegan_detail: '要確認。2026年9月にヴィーガンの客にプラントベースの夜のコースが出たが、通常のメニューは魚や肉を使う (口コミ)。',
    notes: '[ホテルダイニング・東山七条、シックスセンシズの二十四節気の料理] シックスセンシズ京都のオールデイダイニング。地下2階だが明るい庭に面している。メニューは二十四節気に沿い、地元の野菜、持続可能な魚、自家製の発酵食材で2週間ごとに変わる。アフタヌーンティーはグルテンフリーで精製糖不使用、頼めばプラントベースの夜のコースも。サービス料15%。三十三間堂の近く。',
  });
}

skip('26024607', '祇園ビストロ 丸橋: sub-brand of a large parent — the invoice holder セントラルホールディングス株式会社 (Nagoya) runs naoto.K, ASAHINA Gastronome, caillou and resort-hotel restaurants (same ruling as 京都牛懐石 稲吉, osw13-52) — integrator 2026-11-06');

save();
