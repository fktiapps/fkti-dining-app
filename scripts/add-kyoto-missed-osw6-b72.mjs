// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 72.
//   + Bar RM (members-only cocktail bar in a Gion Shirakawa alley) — skipped in osw6-71, drafted on Greg's ruling that
//     referral-, introduction- and members-only places are listed with the restriction stated plainly
//   + Bar DOMA (machiya cocktail and whisky bar off Takakura-Shijo, formerly Bar Oku) — rest
//   + 祇園うえもり Gion Uemori (yudofu and yuba kaiseki just off Hanamikoji) — rest
//   + 京料理 およね Kyoryori Oyone (Kyoto cuisine on Ayanokoji since 1927) — rest
//   - skip 26043496 つまみとお酒 よんくら (thin: two reviews, no dishes named)
//   Rest tier, nearest-first from `next rest 2000`. queue-status.jsonl grepped for each brand (Bar RM, DOMA, よんくら, うえもり,
//   およね): no earlier rulings besides the osw6-71 skip of Bar RM, now reversed.
//   Same-name counts first (2026-11-07): Bar RM — one.
//   Bar DOMA — one (renamed from Bar Oku). 祇園うえもり — one. 京料理 およね — one. None of the four is in data/kyoto.json.
//   Charges per Tabelog's Japanese original: Bar RM 「チャージ800円(お通し込)」; Bar DOMA 「（席料金）スタート時点から 1F：お一人様500円
//   2F：お一人様1000円（税込）」; うえもり 「なし」; およね 「サービス料10％（お部屋15％）」. No halal claims; no owner deaths; single-review remarks about other diners and
//   staff looks left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-72');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26043496', 'thin: Tabelog has two reviews of つまみとお酒 よんくら (September 2025, October 2026) and neither names a dish or price — not enough sourced detail to draft (https://tabelog.com/en/kyoto/A2601/A260201/26043496/).');

// ================================================================ Bar RM
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26023492/'; const R = TB + 'dtlrvwlst/';
  const H = day(['19:00', '03:00']);
  put({
    id: 'kyoto_bar_rm_gion', name: 'Bar RM', category: 'OMNI',
    lat: 35.006003, lng: 135.774503, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A cocktail bar; the sources mention drinks only, apart from the appetizer included in the charge (Tabelog).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A cocktail bar; fresh-fruit cocktails (2020 and 2024 reviews), but no vegan information.',
    hours_raw: 'MEMBERS ONLY: described as a members-only, invitation-only bar (November 2024; October 2026) — entry by intercom up a narrow stair (March 2024); go with a member or ask about introduction. Mon and Wed–Sun 19:00–3:00 (last order 2:00); closed Tuesday; may change (Tabelog). Charge ¥800 incl. appetizer (Tabelog, Japanese text: 「チャージ800円(お通し込)」). Cards (JCB, AMEX, Diners); no QR (Tabelog). 6 counter seats (Tabelog). Smoking allowed (Tabelog). 2F in a renovated wooden house at the end of a quiet alley off Yamato-oji east of Shinbashi, Gion Shirakawa (Tabelog; November 2024; October 2026).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion Shirakawa, off Yamato-oji — Gion-Shijo',
    cuisine: 'Cocktail bar: fresh-fruit cocktails such as La France, Pione and Shine Muscat with champagne and ice (November 2020) · "the best lemon sour in the world"; fruit cocktails; a wide range of spirits (May 2024) · rare scotches and brandies; aromatic spirits (November 2024) · an extensive drinks list (October 2026)',
    website: null, gmaps: gm('Bar RM 祇園'), menu_url: TB,
    notes: '[Members-only cocktail bar · Gion Shirakawa] A six-seat, members-only bar up a narrow stair in a renovated wooden house at the end of a Gion alley — ring the intercom. Known for seasonal fresh-fruit cocktails, a famous lemon sour and rare scotch and brandy, open until 3:00 and said to draw chefs from all over Japan. Go with a member. ¥800 charge; closed Tuesday; smoking allowed.',
    chef_bio: { chef_name: null, roles: ['Bartender Murakami (October 2026)', 'Master/owner (unnamed), praised in 2020–24 reviews'], origin: null,
      background: 'Per reviews: a hidden Gion bar, described in 2024–26 reviews as members-only and invitation-only, in a renovated traditional wooden house; an October 2026 visitor says chefs from across Japan come here.',
      philosophy: null, specialty: 'Fresh-fruit cocktails; scotch and brandy.',
      anecdotes: [
        { text: 'A March 2024 visitor was taken by a friend, rang the intercom, climbed the narrow stairs and had time for just two cocktails before a train.', source: R + 'B496014335/' },
        { text: 'An October 2026 visitor found customers arriving steadily until late and praised bartender Murakami.', source: R + 'B537025245/' },
        { text: 'A November 2024 visitor tried scotches and brandies never met before.', source: R + 'B495706698/' },
      ],
      japanese_sources_summary: '食べログ: バー、東山区大和大路通新橋東入ル元吉町59-1 2F、月・水〜日19:00〜翌3:00 (L.O. 2:00)、火曜休み、チャージ800円 (お通し込み)、カード可、QR 不可、カウンター6席、喫煙可。口コミ (2014年8月〜2026年10月、英語): 会員制・紹介制の隠れ家のバー、インターホンで入る、古い木造の家を改装、季節の果物のカクテル (ラ・フランス、ピオーネ、シャインマスカット)、評判のレモンサワー、珍しいスコッチとブランデー、全国の料理人が通う。',
      confidence: 'medium', sources: [TB, R + 'B58451426/', R + 'B234038221/', R + 'B243898373/', R + 'B407098737/', R + 'B423720328/', R + 'B432457554/', R + 'B485008821/', R + 'B495706698/', R + 'B496014335/', R + 'B509810006/', R + 'B522902245/', R + 'B537025245/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Members-only: entry by introduction — go with a member or someone who can introduce you; ring the intercom.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区大和大路通新橋東入ル元吉町59-1 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.006003, 135.774426), offset 7 m east: kyoto_gion_shinbashi_nakatani shares the address 元吉町59-1 and sat 0.7 m away; cross-checked: GSI 京都府京都市東山区元吉町59番地 (lot) 60m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No prices in the sources beyond the ¥800 charge; reviewers report ¥4,000–5,999 per person.', last_checked: TODAY, items: [
      it('', '', 'Seasonal fresh-fruit cocktail', '', 'Cocktails', 'ask', 'ask', 'November 2020; May 2024.', 'fruit_cocktail'),
      it('', '', 'Lemon sour', '', 'Cocktails', 'ask', 'ask', 'May 2024.', 'lemon_sour'),
    ] }, {
    cuisine: 'カクテルバー。季節の果物 (ラ・フランス、ピオーネ、シャインマスカット) をシャンパーニュと氷で合わせるカクテル (2020年11月)・「世界一のレモンサワー」、フルーツカクテル、豊富なスピリッツ (2024年5月)・珍しいスコッチとブランデー (2024年11月)・豊富なお酒 (2026年10月)',
    neighborhood: '祇園白川、大和大路から入った路地。祇園四条',
    gf_detail: '要確認。カクテルバーで、チャージに含まれるお通し以外の料理の情報はない (食べログ)。',
    vegan_detail: '要確認。生の果物のカクテル (2020年・2024年の口コミ) があるが、ヴィーガンの情報はない。',
    notes: '[会員制のカクテルバー・祇園白川] 祇園の路地の奥、木造の家を改装した2階の、カウンター6席の会員制のバー。インターホンを押して入る。季節の果物のカクテル、評判のレモンサワー、珍しいスコッチやブランデーを深夜3時まで。全国の料理人が通うという。会員と一緒に。チャージ800円、火曜休み、喫煙可。',
  });
}

// ================================================================ Bar DOMA
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26002102/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['19:00', '01:00']); const SA = day(['15:00', '01:00']); const SU = day(['15:00', '00:00']);
  put({
    id: 'kyoto_bar_doma_karasuma', name: 'Bar DOMA', category: 'OMNI',
    lat: 35.002937, lng: 135.762438, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A cocktail and whisky bar; snacks such as homemade raisin butter and dried nibbles (2025–26 reviews); no gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A bar; seasonal fresh-fruit cocktails (April 2026), but the raisin butter is dairy and there is no vegan information.',
    hours_raw: 'Mon–Fri 19:00–1:00 (last order 0:00); Sat 15:00–1:00; Sun 15:00–0:00 (last order 23:00) (Tabelog). Seat charge from arrival: 1F ¥500, 2F ¥1,000 per person, incl. tax (Tabelog, Japanese text: 「（席料金）スタート時点から 1F：お一人様500円 2F：お一人様1000円（税込）」). Cards (incl. UnionPay) and PayPay; no e-money (Tabelog). 31 seats: 1F counter of 7 and 10 at tables by the courtyard; 2F 14 on sofas, shoes off (Tabelog; November 2024). Smoking allowed (Tabelog). A machiya at the end of an alley off Takakura-dori south of Shijo, behind an eel restaurant, 5 min from Hankyu Karasuma (Tabelog; October 2024; January 2025). Formerly Bar Oku; renamed Bar DOMA by September 2026.',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA, 6: SU }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Takakura-dori, south of Shijo — Karasuma',
    cuisine: 'Machiya bar for cocktails and whisky · original cocktails such as Grande Girasol; a sweet cocktail served in a wooden cup on request (September 2024) · drinks around ¥1,500 (November 2024) · bamboo and unusual glassware (January 2025) · Port Charlotte and other Islay whiskies (April 2025) · homemade raisin butter (December 2025) · dried snacks as the appetizer (January 2026) · seasonal fruit cocktails such as strawberry (April 2026) · Ron Zacapa and dark rums (May 2026) · a wide whisky selection (September 2026)',
    website: null, gmaps: gm('Bar DOMA 京都 高倉'), menu_url: TB,
    notes: '[Machiya bar · Takakura-Shijo] A bar hidden down a long alley off Takakura-dori in an old townhouse — courtyard-facing counter and tables downstairs, shoes-off sofas upstairs — with original and seasonal-fruit cocktails, Islay whiskies, dark rums and homemade raisin butter. Drinks around ¥1,500; seat charge ¥500 (1F) or ¥1,000 (2F). Opens at 15:00 at weekends. Formerly Bar Oku.',
    chef_bio: { chef_name: null, roles: ['Master (unnamed), described as warm and attentive (2024–25 reviews)'], origin: null,
      background: 'Per Tabelog and reviews: a bar in a renovated machiya at the end of an alley off Takakura-dori, operating as Bar Oku until renamed Bar DOMA (by September 2026).',
      philosophy: null, specialty: 'Cocktails and whisky in a machiya.',
      anecdotes: [
        { text: 'A September 2024 guest’s wife asked for a sweet cocktail in a wooden cup, and the master obliged.', source: R + 'B87906168/' },
        { text: 'An April 2025 visitor was steered by two bartenders to Port Charlotte, a smoky Islay whisky.', source: R + 'B505590529/' },
        { text: 'A September 2026 regular noted the change of name from Oku to DOMA, with the same homely machiya feel.', source: R + 'B536549597/' },
      ],
      japanese_sources_summary: '食べログ: バー、下京区高倉通り四条下る高材木町221-1、阪急烏丸駅から徒歩5分、月〜金19:00〜翌1:00 (L.O. 0:00)、土15:00〜翌1:00、日15:00〜24:00 (L.O. 23:00)、席料 1階500円・2階1,000円 (税込)、カード・PayPay 可、31席 (1階カウンター7とテーブル10、2階14)、喫煙可。口コミ (2017年4月〜2026年9月、英語): 路地の奥の町家のバー、うなぎ屋の奥、中庭、2階は靴を脱いでソファ、ドリンク約1,500円、オリジナルカクテル、竹のグラス、アイラのウイスキー、自家製のレーズンバター、乾き物のお通し、季節の果物のカクテル、ダークラム、旧店名は Oku。',
      confidence: 'medium', sources: [TB, R + 'B87906168/', R + 'B264004103/', R + 'B494429070/', R + 'B495967931/', R + 'B499350519/', R + 'B500546628/', R + 'B502114120/', R + 'B505590529/', R + 'B521473104/', R + 'B526292525/', R + 'B526514091/', R + 'B536549597/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Tell the bartenders your taste and mood for a recommendation (April 2025). Shoes off upstairs. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区高倉通り四条下る高材木町221-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026 (renamed from Bar Oku).' },
    pin_source: `Tabelog ${TB} (35.002937, 135.762438); cross-checked: GSI 京都府京都市下京区高材木町221番地 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B495967931/'],
    price_note: 'Drinks around ¥1,500 (November 2024); seat charge ¥500–1,000.', last_checked: TODAY, items: [
      it('', '', 'Cocktails and whisky', '~¥1,500', 'Drinks', 'ask', 'ask', 'November 2024.', 'drinks'),
      it('', '', 'Seasonal fruit cocktail', '', 'Drinks', 'ask', 'ask', 'April 2026.', 'fruit_cocktail'),
      it('', '', 'Homemade raisin butter', '', 'Snacks', 'ask', 'no', 'December 2025.', 'raisin_butter'),
    ] }, {
    cuisine: 'カクテルとウイスキーの町家のバー・Grande Girasol などのオリジナルカクテル、頼めば木のカップで甘いカクテル (2024年9月)・ドリンクは約1,500円 (2024年11月)・竹や珍しい形のグラス (2025年1月)・Port Charlotte などアイラのウイスキー (2025年4月)・自家製のレーズンバター (2025年12月)・乾き物のお通し (2026年1月)・いちごなど季節の果物のカクテル (2026年4月)・Ron Zacapa などのダークラム (2026年5月)・豊富なウイスキー (2026年9月)',
    neighborhood: '高倉通、四条の南。烏丸',
    gf_detail: '要確認。カクテルとウイスキーのバーで、つまみは自家製のレーズンバターや乾き物 (2025〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認。季節の果物のカクテル (2026年4月) があるが、レーズンバターは乳製品で、ヴィーガンの情報はない。',
    notes: '[町家のバー・高倉四条] 高倉通から長い路地を入った古い町家のバー。1階は中庭に面したカウンターとテーブル、2階は靴を脱いでくつろぐソファ。オリジナルや季節の果物のカクテル、アイラのウイスキー、ダークラム、自家製のレーズンバター。ドリンクは1,500円ほど、席料は1階500円・2階1,000円。土日は15時から。旧店名は Oku。',
  });
}

// ================================================================ 祇園うえもり
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26005252/'; const R = TB + 'dtlrvwlst/'; const SITE = 'http://www.uemori.net';
  const H = day(['12:00', '15:00'], ['17:00', '22:00']); const SU = day(['17:00', '20:30']);
  put({
    id: 'kyoto_gion_uemori', name: '祇園うえもり (Gion Uemori)', category: 'OMNI',
    lat: 35.002828, lng: 135.775455, cuisine_type: 'tofu',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura in every course, hiryozu, and Inaniwa udon to finish (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tofu and yuba lead, but courses include tuna sashimi, shrimp tempura and chirimen-jako rice, with dashi throughout (2025–26 reviews).',
    hours_raw: 'Mon–Sat 12:00–15:00 (last order 14:00) and 17:00–22:00 (last order 20:00); Sun 17:00–20:30 (last order 18:30); irregular closures (Tabelog). Reservations advised — one diner booked six weeks ahead, though same-day calls have worked on weekdays (December 2025; April 2026). Year-end rates apply (December 2025). No service charge (Tabelog, Japanese text: 「なし」). Cards; no e-money or QR (Tabelog). 30 seats: 1F counter of 5 and 6 at tables; four private rooms upstairs for 2–24 (Tabelog); the stairs are steep (December 2025). Non-smoking (Tabelog). Just off Hanamikoji, 4 min from Gion-Shijo exit 6 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, just off Hanamikoji — Gion-Shijo',
    cuisine: 'Yudofu and yuba kaiseki in a quiet house off Hanamikoji · yudofu and yuba kaiseki: yuba, yudofu, yuba and tuna sashimi, tempura of shrimp and vegetables, hiryozu, chirimen-sansho rice, soup, pickles, almond tofu (May 2026) · ¥5,500 at year-end rates (December 2025) · Morika tofu; fresh yuba, simmered hiro-usu, soy-milk pudding (March 2026) · freshly lifted yuba with fresh wasabi; cherry-blossom mousse (April 2026) · tofu lunch course with tempura, sashimi and soup (April 2026) · ¥8,000 course of seasonal Kyoto vegetables finishing with Inaniwa udon (September 2026)',
    website: SITE, gmaps: gm('祇園うえもり'), menu_url: TB,
    notes: '[Yudofu and yuba kaiseki · Gion] A calm restaurant in a lane just off Hanamikoji, with a small counter downstairs and private rooms up a steep stair, serving reasonably priced kaiseki built on yudofu and yuba — freshly lifted yuba with wasabi, Morika tofu, hiro-usu, tempura, chirimen-sansho rice — at lunch and dinner. Book ahead; no service charge.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a Japanese restaurant just off Hanamikoji with counter, tables and four private rooms upstairs; reviewers return for its yudofu and yuba kaiseki.',
      philosophy: null, specialty: 'Yudofu and yuba kaiseki.',
      anecdotes: [
        { text: 'A December 2025 traveller, panicking on a year-end Monday when many places were shut, found it and was surprised by the yuba.', source: R + 'B519849925/' },
        { text: 'A May 2026 diner on a third visit always orders the yudofu and yuba kaiseki as a meal for a tired body.', source: R + 'B485213153/' },
        { text: 'An April 2026 guest called the first plate — freshly lifted yuba with fresh wasabi and dashi — the highlight.', source: R + 'B525833351/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、東山区祇園町南側570-6、花見小路から少し入る、祇園四条駅6番出口から徒歩4分、月〜土12:00〜15:00 (L.O. 14:00) と17:00〜22:00 (L.O. 20:00)、日17:00〜20:30 (L.O. 18:30)、不定休、サービス料なし、カード可、電子マネー・QR 不可、30席 (1階カウンター5とテーブル6、2階個室4)、禁煙。口コミ (2025年12月〜2026年9月、英語・日本語): 湯豆腐と湯葉の会席、湯葉、刺身、天ぷら、飛竜頭、ちりめん山椒ご飯、杏仁豆腐、年末料金5,500円、Morika の豆腐、ひろうすの煮物、豆乳プリン、引き上げ湯葉とわさび、お豆腐ランチコース、季節の京野菜と稲庭うどんの8,000円のコース、階段が急。',
      confidence: 'medium', sources: [TB, SITE, R + 'B485213153/', R + 'B497433330/', R + 'B519849925/', R + 'B520140681/', R + 'B521060741/', R + 'B524276113/', R + 'B525654321/', R + 'B525833351/', R + 'B527536124/', R + 'B527643295/', R + 'B531009485/', R + 'B535767677/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; private rooms upstairs via steep stairs. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町南側570-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.002828, 135.775455); GSI 京都府京都市東山区祇園町南側570番地 is a large lot (its point is about 160 m north-west), so approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B519849925/', R + 'B535767677/'],
    price_note: 'Prices from December 2025 (year-end rate) and September 2026 reviews; no service charge.', last_checked: TODAY, items: [
      it('', '', 'Yudofu and yuba kaiseki', '¥5,500', 'Courses', 'no', 'no', 'Year-end rate, December 2025; contents May 2026.', 'yudofu_yuba'),
      it('', '', 'Seasonal course finishing with Inaniwa udon', '¥8,000', 'Courses', 'no', 'no', 'September 2026.', 'course_8000'),
      it('', '', 'Tofu lunch course', '', 'Lunch', 'no', 'no', 'April 2026.', 'tofu_lunch'),
    ] }, {
    cuisine: '花見小路近くの静かな店の湯豆腐と湯葉の会席・湯葉、湯豆腐、湯葉とまぐろの刺身、えびと野菜の天ぷら、飛竜頭、ちりめん山椒ご飯、汁物、香の物、杏仁豆腐の湯豆腐と湯葉の会席 (2026年5月)・年末料金で5,500円 (2025年12月)・Morika の豆腐、生湯葉、ひろうすの煮物、豆乳プリン (2026年3月)・引き上げ湯葉に生わさび、桜のムース (2026年4月)・天ぷら、刺身、椀もののお豆腐ランチコース (2026年4月)・季節の京野菜で稲庭うどんで締める8,000円のコース (2026年9月)',
    neighborhood: '祇園、花見小路から少し入る。祇園四条',
    gf_detail: 'グルテンフリーではない。どのコースにも天ぷら、飛竜頭、締めの稲庭うどん (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豆腐と湯葉が中心だが、まぐろの刺身、えびの天ぷら、ちりめんじゃこのご飯、出汁を使う (2025〜2026年の口コミ)。',
    notes: '[湯豆腐と湯葉の会席・祇園] 花見小路から少し入った路地の落ち着いた店。1階は小さなカウンター、2階は急な階段の上の個室。引き上げ湯葉とわさび、Morika の豆腐、ひろうす、天ぷら、ちりめん山椒ご飯など、湯豆腐と湯葉の手頃な会席を昼も夜も。予約がおすすめ。サービス料なし。',
  });
}

// ================================================================ 京料理 およね
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26004862/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_kyoryori_oyone', name: '京料理 およね (Kyoryori Oyone)', category: 'OMNI',
    lat: 35.002487, lng: 135.762399, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Traditional Kyoto kaiseki; the restaurant says it adapts to dietary restrictions on request (Tabelog), but soy-based seasoning is the norm and there is no gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The restaurant says it adapts to dietary restrictions (Tabelog), but courses include crab and sashimi and are built on dashi (October 2025).',
    hours_raw: 'Mon–Sat 17:00–22:00 (last orders food 20:30, drinks 21:00); closed Sunday (Tabelog). An October 2025 party had a full course at lunch for a business meeting. Reservations needed for private rooms (Tabelog). Service charge 10%, 15% in private rooms (Tabelog, Japanese text: 「サービス料10％（お部屋15％）」). Cards (incl. UnionPay); no e-money or QR (Tabelog). 25 seats: a 7-seat counter, a sunken-kotatsu room for 2–6 and an upstairs tatami room for 2–16 (Tabelog). Non-smoking (Tabelog). Ayanokoji-dori west of Takakura, near Daimaru (Tabelog). Founded in December 1927 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ayanokoji-dori, near Daimaru — Shijo / Karasuma',
    cuisine: 'Traditional Kyoto cuisine since 1927, made by hand with time-honoured methods, adapted for celebrations, dietary restrictions and dislikes (Tabelog) · full course of crab, matsutake dobin-mushi, sashimi, a warm dish, hassun and chestnut wagashi (October 2025)',
    website: 'http://www.oyone.com', gmaps: gm('京料理 およね'), menu_url: TB,
    notes: '[Kyoto cuisine · Ayanokoji, since 1927] A quiet, nearly century-old Kyoto-cuisine restaurant on Ayanokoji near Daimaru, with a counter, a sunken-kotatsu room and an upstairs tatami room, keeping to traditional flavours made by hand — seasonal courses such as matsutake dobin-mushi and hassun. It says it will adapt for dietary restrictions. 10% service (15% in rooms); closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed), described as kind (June 2023)'], origin: null,
      background: 'Per Tabelog: opened in December 1927 by the first generation in this area; it keeps to traditional Kyoto flavours with time-honoured, handmade methods while adding new initiatives.',
      philosophy: 'Traditional Kyoto flavour, made with care by hand; each guest’s needs met, from celebrations to dietary restrictions (Tabelog).', specialty: 'Seasonal Kyoto kaiseki.',
      anecdotes: [
        { text: 'An October 2025 business lunch for five felt like a dinner, from crab and matsutake dobin-mushi to chestnut wagashi.', source: R + 'B516497717/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、下京区綾小路通り高倉西入る神明町230、大丸の東の高倉通を南へ最初の角を右、月〜土17:00〜22:00 (L.O. 料理20:30、ドリンク21:00)、日曜休み、サービス料10% (部屋15%)、カード可、電子マネー・QR 不可、25席 (カウンター7、掘りごたつ6、座敷12)、禁煙、1927年12月4日創業、昔ながらの京の味を手作りで、誕生日や食事制限、苦手なものにも対応。口コミ (2009年11月〜2026年7月、英語): 蟹、松茸の土瓶蒸し、刺身、八寸、栗の和菓子 (2025年10月)、親切な料理長。',
      confidence: 'low', sources: [TB, R + 'B455574486/', R + 'B467015713/', R + 'B467309787/', R + 'B484215559/', R + 'B506658856/', R + 'B516497717/', R + 'B522608985/', R + 'B533016987/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Mention dietary restrictions when booking; the restaurant says it will adapt (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区綾小路通り高倉西入る神明町230',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.002487, 135.762399); cross-checked: GSI 京都府京都市下京区神明町230番地 (lot) 39m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No course prices in the sources; reviewers report ¥10,000–29,999 per person; 10% service (15% in rooms).', last_checked: TODAY, items: [
      it('', '', 'Seasonal Kyoto kaiseki course', '', 'Courses', 'ask', 'ask', 'October 2025.', 'kaiseki'),
    ] }, {
    cuisine: '1927年創業の昔ながらの京料理を手作りで。祝い事、食事制限、苦手なものにも対応 (食べログ)・蟹の先付、松茸の土瓶蒸し、刺身、温物、八寸、栗の和菓子のコース (2025年10月)',
    neighborhood: '綾小路通、大丸の近く。四条・烏丸',
    gf_detail: '要確認。伝統的な京料理の会席。食事制限には頼めば対応するという (食べログ) が、醤油を使うのが基本で、グルテンの情報はない。',
    vegan_detail: '要確認。食事制限に対応するという (食べログ) が、コースには蟹や刺身があり、出汁が基本 (2025年10月)。',
    notes: '[京料理・綾小路、1927年から] 大丸近くの綾小路にある、創業から100年近い静かな京料理の店。カウンター、掘りごたつの部屋、2階の座敷。松茸の土瓶蒸しや八寸など、手作りの昔ながらの京の味の季節のコース。食事制限にも対応するという。サービス料10% (部屋は15%)。日曜休み。',
  });
}

save();
