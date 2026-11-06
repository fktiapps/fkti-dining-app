// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 39.
//   + Un Son Doux pâtisserie (one-person French baked-goods shop and bean-to-bar chocolate near Teramachi)  [core]
//   + お匙 京都 Osaji Kyoto (amazake-smoothie café in OSAJI's machiya concept store, opened April 2026)         [core]
//   + 夷川餃子 なかじま 団栗店 Ebisugawa Gyoza Nakajima (crisp gyoza and black fried rice, with a bath-house)   [notable]
//   + 京町スタンド 若旦那 Kyomachi Stand Wakadanna (standing bar with ¥220 happy-hour highballs near Shijo)   [notable]
//   - ことたま — no reviews from 2025–26 (latest March 2020).
//   Same-name counts first (same brand or operator): Un Son Doux 1; お匙 1 — the café of the cosmetics brand OSAJI's
//   first concept store (a non-restaurant company's only café found; drafted per the G LION precedent) — FLAGGED;
//   なかじま — the official site lists 本店, 団栗店 and 西院店, none in data, a small group, this one drafted;
//   若旦那 1 — reviewers place it in the いなせや group (Gallant, a Kyoto operator; kyoto_tachinomi_inaseya in data),
//   a differently named sister concept of a local group, so drafted — FLAGGED.
//   Taken in queue order on 2026-11-06: core 26041349, (26022029 skip), 26044871; notable 26036231, 26035025. None
//   drafted is in data/kyoto.json by name or address.
//   Service charges checked against Tabelog's Japanese original: 若旦那 「テーブル席は席料３００円」 (a September 2026
//   reviewer paid ¥330); the others have no section.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-39');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26022029', 'no reviews from 2025–26: ことたま\'s latest Tabelog review is from March 2020');

// ================================================================ Un Son Doux pâtisserie
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26041349/'; const R = TB + 'dtlrvwlst/';
  const H = day(['08:00', '18:00']);
  put({
    id: 'kyoto_un_son_doux', name: 'Un Son Doux pâtisserie', category: 'OMNI',
    lat: 35.014618, lng: 135.765743, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: croissants, brioche, pies and cakes; the gâteau nantais uses almond flour but is not described as wheat-free (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: butter- and egg-rich pastries; the bean-to-bar chocolate is described as only cacao and sugar — ask (2026 reviews).',
    hours_raw: 'Tue–Sat and holidays 8:00–18:00; closed Sunday and Monday; hours may change (Tabelog). One person bakes and serves, so items sell out by afternoon (June 2026 reviews). Cards, e-money and QR (Tabelog). Mainly take-away; 2 seats in a small café corner (Tabelog; September 2026 review). A sliding door, hard to see into, north of Nijo near Teramachi (Tabelog; 2026 reviews).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'North of Nijo near Teramachi — Kyoto Shiyakusho-mae Stn',
    cuisine: 'French regional baked goods and viennoiserie: croissant ¥300, pithivier ¥460, gâteau nantais ¥400, galette dufinois ¥400, alsacien ¥380 (August 2026); brioche à tête, Lorraine with custard and cherries, apricot danish, canelé, far breton, coquillage with anchovy, chocolat moelleux (marron ¥480, October 2026), sablés and petits fours; bean-to-bar chocolate bars from Peru, Colombia and Venezuela (2026 reviews)',
    website: null, gmaps: gm('Un Son Doux pâtisserie 京都'), menu_url: null,
    notes: "[Pâtisserie · north of Nijo near Teramachi] A quiet, gallery-like shop where one pâtissier bakes French regional sweets and viennoiserie — gâteau nantais, pithivier, buttery croissants — plus bean-to-bar chocolate. Mostly ¥300–500 a piece; go early, things sell out. Closed Sunday and Monday.",
    chef_bio: { chef_name: null, roles: ['Owner-pâtissier (unnamed), working alone'], origin: null,
      background: 'Opened 6 June 2024 (Tabelog). Reviewers say one person bakes everything (June and August 2026); a June 2026 diner read that the owner trained at Au Bon Vieux Temps.',
      philosophy: null, specialty: 'Gâteau nantais; pithivier.',
      anecdotes: [
        { text: 'A June 2026 visitor buying caramel was given an ice pack to keep it cool.', source: R + 'B529338813/' },
        { text: 'An August 2026 croissant fan rated it above those of Kyoto\'s top-100 bakeries.', source: R + 'B534477682/' },
        { text: 'An August 2026 reviewer, writing in Japanese, found that day\'s bakes a little dark and wanted more custard in the far breton.', source: R + 'B533297307/' },
      ],
      japanese_sources_summary: '食べログ: Un Son Doux pâtisserie、スイーツ、中京区麸屋町通二条上る布袋屋町495-1、京都市役所前駅から488m、火〜土・祝 8:00〜18:00、日月休み、カード・電子マネー・QR 可、2席、禁煙、2024年6月6日オープン。口コミ (2026年6〜10月、英語と日本語): 店主一人で焼く、午後は品薄、クロワッサン300円、ピティヴィエ460円、ガトー・ナンテ400円、アルザシアン380円、ブリオッシュ・ア・テット、ロレーヌ、カヌレ、ファーブルトン、コキヤージュ、ショコラ・モワルー (マロン480円)、サブレやプティフール、Bean to Bar のチョコレート (ペルー、コロンビア、ベネズエラ)、Au Bon Vieux Temps で修業という話、焼き色が強かったという声。',
      confidence: 'medium', sources: [TB, R + 'B529338813/', R + 'B529610751/', R + 'B530933984/', R + 'B533297307/', R + 'B533973845/', R + 'B534164742/', R + 'B534477682/', R + 'B536159667/', R + 'B536931158/', R + 'B538046261/'] },
    cultural_comfort: { level: 'none_needed', note: 'Point at the baked goods; take-away.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区麸屋町通二条上る布袋屋町495-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.014618, 135.765743); cross-checked: GSI 京都府京都市中京区布袋屋町495番地 (lot) 32m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534477682/'],
    price_note: 'No menu read; prices from an August 2026 review (tax included).', last_checked: TODAY, items: [
      it('', '', 'Croissant', '¥300', 'Viennoiserie', 'no', 'no', 'August 2026 review.', 'croissant'),
      it('', '', 'Pithivier', '¥460', 'Pastries', 'no', 'no', 'August 2026 review.', 'pithivier'),
      it('', '', 'Gâteau nantais', '¥400', 'Cakes', 'no', 'no', 'June and August 2026 reviews.', 'gateau_nantais'),
    ] }, {
    cuisine: 'フランス各地の焼き菓子とヴィエノワズリー: クロワッサン300円、ピティヴィエ460円、ガトー・ナンテ400円、ガレット・デュフィノワ400円、アルザシアン380円 (2026年8月)。ブリオッシュ・ア・テット、カスタードとさくらんぼのロレーヌ、杏のデニッシュ、カヌレ、ファーブルトン、アンチョビのコキヤージュ、ショコラ・モワルー (マロン480円、2026年10月)、サブレやプティフール。ペルー、コロンビア、ベネズエラの Bean to Bar のチョコレート (2026年の口コミ)',
    neighborhood: '寺町近く、二条の北。京都市役所前駅',
    gf_detail: 'グルテンフリー不可。クロワッサン、ブリオッシュ、パイ、ケーキ。ガトー・ナンテはアーモンドプードルだが小麦不使用とはされていない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。バターと卵の多い菓子。Bean to Bar のチョコはカカオと砂糖だけとの記述があり要確認 (2026年の口コミ)。',
    notes: '[パティスリー・寺町近くの二条の北] ギャラリーのような静かな店で、パティシエが一人でフランス地方菓子とヴィエノワズリーを焼く。ガトー・ナンテ、ピティヴィエ、バターの香るクロワッサン、Bean to Bar のチョコレートも。多くは一つ300〜500円。売り切れるので早めに。日月休み。',
  });
}

// ================================================================ お匙 京都
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26044871/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '18:00']);
  put({
    id: 'kyoto_osaji_kyoto', name: 'お匙 京都 (Osaji Kyoto)', category: 'OMNI',
    lat: 35.014116, lng: 135.763097, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Rice-koji amazake smoothies are likely wheat-free, but toppings, vegetable cakes, muffins and scones are not described (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Amazake made from Kyoto rice and koji with fruit and vegetables; toppings include honey; baked goods not described (2026 reviews).',
    hours_raw: '10:00–18:00 (last order 17:30); closed Monday, or the next weekday when Monday is a holiday (Tabelog). Bookings taken (Tabelog). Cards, e-money and QR (Tabelog). 16 seats at the café counter at the back of the store; take-away possible (Tabelog; October 2026 review). Inside OSAJI\'s concept store in a machiya north of Nijo; 7 min from Marutamachi Stn (Tabelog; 2026 reviews).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'North of Nijo — 7 min from Marutamachi Stn',
    cuisine: 'Fermentation-themed drinks and sweets (Tabelog): amazake smoothies of Kyoto rice and rice koji blended with seasonal fruit or vegetables — cassis and mixed berry, pineapple, beet, kabosu and basil — with toppings such as honey ginger or dried apricot; vegetable cakes, muffins, black-rice scones, a summer ice sandwich (2026 reviews)',
    website: null, gmaps: gm('OSAJI 京都 お匙'), menu_url: null,
    notes: "[Fermentation café · north of Nijo] The café counter at the back of skincare brand OSAJI's first concept store, a calm, incense-scented machiya: build your own amazake smoothie from Kyoto rice koji and fruit, with a vegetable cake or scone, then browse the cosmetics. About ¥1,000–1,500. Opened April 2026; closed Monday.",
    chef_bio: { chef_name: null, roles: ['Café of the cosmetics brand OSAJI (no person named)'], origin: null,
      background: 'Opened 25 April 2026 (Tabelog) as what an October 2026 reviewer calls OSAJI\'s first global concept store, combining cosmetics, a product-trial space and the café.',
      philosophy: 'A concept store offering drinks and sweets centred on fermentation (Tabelog).',
      specialty: 'Amazake smoothies.',
      anecdotes: [
        { text: 'Unsure what to pick, an October 2026 visitor was given seasonal recommendations and tips on local Kyoto events by the staff.', source: R + 'B537228018/' },
        { text: 'An October 2026 visitor found the smoothies distinctive enough to divide opinion, but enjoyed choosing bases and toppings.', source: R + 'B538553865/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): お匙 京都、カフェ、中京区堺町通二条上ル亀屋町172、丸太町駅から421m、10:00〜18:00 (L.O. 17:30)、月曜休み (祝日の場合は翌平日)、予約可、カード・電子マネー・QR 可、16席、2026年4月25日オープン、発酵を軸にしたドリンクとスイーツのカウンターのあるコンセプトストア。口コミ (2026年10月、英語): OSAJI 初のグローバルコンセプトストア、町家、お香の香り、京都の米と米麹の甘酒スムージー (カシスミックスベリー、パイナップル、ビーツ、かぼすバジル)、はちみつ生姜や干し杏のトッピング、野菜のケーキ、マフィン、黒米のスコーン、夏のアイスサンド、化粧品の売り場と体験スペース、親切なスタッフ。',
      confidence: 'medium', sources: [TB, R + 'B536591238/', R + 'B536642702/', R + 'B536654280/', R + 'B537098649/', R + 'B537100899/', R + 'B537228018/', R + 'B537849044/', R + 'B538034752/', R + 'B538252774/', R + 'B538553865/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff help choose smoothie bases and toppings.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区堺町通二条上ル亀屋町172',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.014116, 135.763097); cross-checked: GSI 京都府京都市中京区亀屋町172番地 (lot) 32m; 24.8 m from kyoto_tempura_eishun; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538034752/'],
    price_note: 'No menu or prices read.', last_checked: TODAY, items: [
      it('', '', 'Amazake smoothie with toppings', '', 'Drinks', 'ask', 'ask', '2026 reviews.', 'amazake_smoothie'),
      it('', '', 'Vegetable cake', '', 'Sweets', 'ask', 'ask', 'October 2026 reviews.', 'vegetable_cake'),
    ] }, {
    cuisine: '発酵を軸にしたドリンクとスイーツ (食べログ): 京都の米と米麹の甘酒に季節の果物や野菜を合わせた甘酒スムージー (カシスミックスベリー、パイナップル、ビーツ、かぼすバジル) に、はちみつ生姜や干し杏などのトッピング。野菜のケーキ、マフィン、黒米のスコーン、夏のアイスサンド (2026年の口コミ)',
    neighborhood: '二条の北の堺町。丸太町駅から徒歩7分',
    gf_detail: '要確認。米麹の甘酒スムージーは小麦を使わないとみられるが、トッピング、野菜のケーキ、マフィン、スコーンの説明はない (2026年の口コミ)。',
    vegan_detail: '要確認。京都の米と麹の甘酒に果物や野菜。トッピングにははちみつも。焼き菓子の説明はない (2026年の口コミ)。',
    notes: '[発酵のカフェ・二条近くの堺町] スキンケアブランド OSAJI 初のコンセプトストアの奥のカフェカウンター。お香の香る落ち着いた町家で、京都の米麹と果物で好みの甘酒スムージーを作り、野菜のケーキやスコーンと。その後は化粧品も。千〜1,500円ほど。2026年4月開店。月曜休み。',
  });
}

// ================================================================ 夷川餃子 なかじま 団栗店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26036231/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.nakajimagyoza.com/';
  const H = day(['11:30', '14:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_ebisugawa_gyoza_nakajima_donguri', name: '夷川餃子 なかじま 団栗店 (Ebisugawa Gyoza Nakajima Donguri)', category: 'OMNI',
    lat: 35.001959, lng: 135.771984, cuisine_type: 'gyoza',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat gyoza wrappers, fried rice and yakisoba with soy-based sauces (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork gyoza, chashu, pork miso soup (2026 reviews).',
    hours_raw: '11:30–14:00 (last order 13:30) and 17:00–23:00 (last order 22:30), daily (Tabelog; official site). Bookings taken, but may be refused in the cherry-blossom and autumn-leaf seasons (Tabelog); queues of about 20 minutes on busy nights (September 2026 review). Cash only — no cards, e-money or QR (Tabelog). English menu (Tabelog). 31 seats: counter in front of the kitchen and tables; order on a written slip; take-out and delivery (Tabelog; 2026 reviews). The building also houses "ぎょうざ湯", a bath and sauna by reservation only, built by the sauna-loving owner so guests can have gyoza and beer after a bath (official site). 1 min from Gion-Shijo Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Donguri-dori by Gion-Shijo Stn',
    cuisine: 'Light, crisp-bottomed Kyoto gyoza — with or without garlic, filled with Kyoto pork (September 2026) — fried in a special pan; the "black" fried rice; chashu with egg, shumai, yakisoba with sauce, pork miso soup, chilled Chinese noodles in summer, peach ice candy; a gyoza lunch set; highballs and sake (2026 reviews)',
    website: SITE, gmaps: gm('夷川餃子 なかじま 団栗店'), menu_url: TB + 'dtlmenu/',
    notes: "[Gyoza & fried rice · by Gion-Shijo Stn] A lively counter-and-table gyoza house a minute from the station, frying light, crisp gyoza to order with dark, chewy fried rice — about ¥1,500–2,500 — and a reservation-only sauna bath in the same building. Open daily to 23:00; cash only; English menu.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), a sauna lover'], origin: null,
      background: 'Opened 21 July 2021 (Tabelog). Per the official site: one of three なかじま shops (本店, 団栗店, 西院店); 本店 and 団栗店 each have a reservation-only bath, ぎょうざ湯, which the sauna-loving owner built to enjoy gyoza and beer after a sauna.',
      philosophy: 'Light, easy-eating Kyoto gyoza (official site).',
      specialty: 'Gyoza; black fried rice.',
      anecdotes: [
        { text: 'A September 2026 diner who had given up several times because of long lines got straight in at 20:30 for gyoza and black fried rice.', source: R + 'B536372854/' },
        { text: 'July 2026 diners laughed at the drawings on the chopstick sleeves, one featuring a celebrity\'s eyes.', source: R + 'B533117228/' },
        { text: 'On the last day of Silver Week 2026 a diner waited about 20 minutes outside and noted many foreign customers.', source: R + 'B536591746/' },
      ],
      japanese_sources_summary: '公式サイト: 京都 夷川餃子 なかじま・餃子湯、本店 (中京区西洞院通夷川下る薬師町652-1)、団栗店 (東山区団栗通大和大路西入六軒町206-1、11:30〜14:00・17:00〜23:00、無休)、西院店 (立ち飲み)、本店と団栗店に完全予約制の銭湯「ぎょうざ湯」、サウナ好きの店主がサウナ上がりの餃子とビールのために作った。食べログ: 夷川餃子 なかじま 団栗店、餃子・居酒屋・食堂、どんぐり会館1F、祇園四条駅から徒歩1分、予約可 (桜と紅葉の時期は断る場合あり)、カード・電子マネー・QR 不可、31席、英語メニュー、テイクアウト・デリバリー、2021年7月21日オープン。口コミ (2026年7〜9月、英語): にんにくあり・なしの餃子、京都ポークの餡、黒チャーハン、チャーシュー玉子、焼売、ソース焼きそば、豚汁、冷やし中華、桃のアイスキャンディー、箸袋の絵、伝票に記入して注文、外国人客も多い。',
      confidence: 'medium', sources: [TB, SITE, R + 'B517965364/', R + 'B531360936/', R + 'B532085380/', R + 'B532230227/', R + 'B532673417/', R + 'B533117228/', R + 'B534932893/', R + 'B535959042/', R + 'B536372854/', R + 'B536591746/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); order on a slip; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区団栗通大和大路西入六軒町206-1 どんぐり会館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and the official site; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.001959, 135.771984); cross-checked: GSI 京都府京都市東山区六軒町206番地 (lot) 5m; 6.2 m from kyoto_samgyetang_tottori; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536591746/'],
    price_note: 'No menu or item prices read; dishes from 2026 reviews.', last_checked: TODAY, items: [
      it('餃子', 'gyoza', 'Gyoza (with or without garlic)', '', 'Gyoza', 'no', 'no', '2026 reviews.', 'gyoza'),
      it('', '', 'Black fried rice', '', 'Rice', 'ask', 'no', '2026 reviews.', 'kuro_chahan'),
    ] }, {
    cuisine: '専用の鍋で焼く、底がパリッと軽い京都の餃子 (にんにくあり・なし、京都ポークの餡、2026年9月)、「黒」チャーハン、チャーシュー玉子、焼売、ソース焼きそば、豚汁、夏の冷やし中華、桃のアイスキャンディー、餃子のランチセット、ハイボールや日本酒 (2026年の口コミ)',
    neighborhood: '祇園四条駅そばの団栗通',
    gf_detail: 'グルテンフリー不可。小麦の餃子の皮、醤油やソースのチャーハンや焼きそば (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚肉の餃子、チャーシュー、豚汁 (2026年の口コミ)。',
    notes: '[餃子とチャーハン・祇園四条駅そば] 駅から1分の賑やかなカウンターとテーブルの餃子店。注文ごとに焼く軽くパリッとした餃子と、黒くもっちりしたチャーハンで1,500〜2,500円ほど。同じ建物に予約制のサウナ付き銭湯も。毎日23時まで。現金のみ。英語メニュー。',
  });
}

// ================================================================ 京町スタンド 若旦那
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26035025/'; const R = TB + 'dtlrvwlst/';
  const W = day(['16:00', '23:30']); const E = day(['13:00', '23:30']);
  put({
    id: 'kyoto_kyomachi_stand_wakadanna', name: '京町スタンド 若旦那 (Kyomachi Stand Wakadanna)', category: 'OMNI',
    lat: 35.002333, lng: 135.762720, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi, beef tataki and dashimaki beside ham katsu, garlic toast and fries (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, beef, dashi obanzai (2025–26 reviews).',
    hours_raw: 'Mon–Fri 16:00–23:30; Sat–Sun 13:00–23:30; hours may change (Tabelog). Happy hour until 18:00 with highballs from about ¥200–220 (September–October 2026 reviews). No bookings. Charge: Tabelog\'s Japanese original says 「テーブル席は席料３００円」 — ¥300 for table seats (a September 2026 reviewer paid ¥330); the standing counter has none. No cards or e-money; QR payments (Tabelog). Standing counter on the left, about 40 table seats on the right; non-smoking, ashtray outside (Tabelog; 2026 reviews). A little south of Shijo on Takakura; 4 min from Karasuma Stn (Tabelog; September 2026 review).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Takakura just south of Shijo — 4 min from Karasuma Stn',
    cuisine: 'Cheap standing-bar food and drink: assorted obanzai (mentaiko shirataki, stewed okara and one changing dish), wagyu tataki ¥580, assorted sashimi ¥850, wagyu senmai ¥520, dashimaki ¥380 (August 2026), meat tartare, fatty tuna, wagyu steak, ham katsu, shrimp mayo, tsukune with green pepper, crab miso, garlic toast, fries, pork soup; kaku highball, lemon chuhai, hot sake, giant beer mugs (2025–26 reviews)',
    website: null, gmaps: gm('京町スタンド 若旦那'), menu_url: null,
    notes: "[Standing bar · Takakura near Shijo] A big, cheerful standing bar with tables to the side, from the いなせや group: ¥220 happy-hour highballs until 18:00, obanzai trios, wagyu tataki and very fresh sashimi for well under ¥1,000 a plate. Standing is free; tables cost ¥300. Open to 23:30 daily.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Opened 11 November 2020 (Tabelog). Reviewers place it in the いなせや group (August and September 2026); the group\'s いなせや is run by Gallant, a Kyoto restaurant operator (kyoto_tachinomi_inaseya).',
      philosophy: null, specialty: 'Obanzai trio; wagyu tataki; happy-hour highballs.',
      anecdotes: [
        { text: 'An October 2026 regular takes being served a giant "baka jokki" beer as the cue to go home.', source: R + 'B531177852/' },
        { text: 'An August 2026 diner, delayed by a JR accident, came in starving for wagyu tataki, sashimi and dashimaki — all well priced.', source: R + 'B534246768/' },
        { text: 'An October 2026 guest who knows いなせや in Osaka found the Kyoto flavours quite different, and dipped shrimp mayo in the tsukune sauce.', source: R + 'B538383732/' },
      ],
      japanese_sources_summary: '食べログ: 京町スタンド 若旦那、立ち飲み、下京区綾材木町188-2、烏丸駅から274m、月〜金 16:00〜23:30、土日 13:00〜23:30、予約不可、テーブル席は席料300円、カード・電子マネー不可、QR 可、カウンター20・テーブル40、禁煙 (入口前に灰皿)、2020年11月11日オープン。口コミ (2025年2月〜2026年10月、英語): いなせやグループ、四条から高倉通を少し南、18時までのハッピーアワーで角ハイ220円ほど、おばんざい盛り (明太しらたき、おから、日替わり)、和牛たたき580円、刺身盛り850円、和牛生センマイ520円、だし巻き380円、ユッケ、ハムカツ、海老マヨ、つくねとピーマン、カニ味噌、ガーリックトースト、席料330円だったという声、バカジョッキ。',
      confidence: 'medium', sources: [TB, R + 'B451907982/', R + 'B483289605/', R + 'B531177564/', R + 'B531177852/', R + 'B531266978/', R + 'B532840344/', R + 'B534246768/', R + 'B536564036/', R + 'B538006806/', R + 'B538383732/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Standing counter or tables (¥300); no bookings.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区綾材木町188-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002333, 135.762720); cross-checked: GSI 京都府京都市下京区綾材木町188番地 (lot) 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534246768/', TB],
    price_note: 'No menu read; prices from an August 2026 review; table charge from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Wagyu tataki', '¥580', 'Dishes', 'ask', 'no', 'August 2026 review.', 'wagyu_tataki'),
      it('', '', 'Assorted sashimi', '¥850', 'Dishes', 'ask', 'no', 'August 2026 review.', 'sashimi_moriawase'),
      it('', '', 'Dashimaki tamago', '¥380', 'Dishes', 'ask', 'no', 'August 2026 review.', 'dashimaki'),
      it('', '', 'Table seat charge', '¥300', 'Charges', 'ask', 'ask', 'Tabelog; ¥330 paid in September 2026.', 'seat_charge'),
    ] }, {
    cuisine: '安い立ち飲みの料理と酒: おばんざい盛り (明太しらたき、おから、日替わり1品)、和牛たたき580円、刺身盛り合わせ850円、和牛生センマイ520円、だし巻き380円 (2026年8月)、ユッケ、とろ、和牛ステーキ、ハムカツ、海老マヨ、つくねとピーマン、カニ味噌、ガーリックトースト、ポテト、豚汁。角ハイボール、生レモンチューハイ、熱燗、特大ジョッキ (2025〜26年の口コミ)',
    neighborhood: '四条のすぐ南の高倉。烏丸駅から徒歩4分',
    gf_detail: '要確認。刺身、和牛たたき、だし巻きと、ハムカツ、ガーリックトースト、ポテト (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、牛肉、出汁のおばんざい (2025〜26年の口コミ)。',
    notes: '[立ち飲み・四条近くの高倉] 横にテーブル席もある広く賑やかな立ち飲みで、いなせやのグループ。18時までのハッピーアワーはハイボール220円、おばんざい3種盛り、和牛たたき、新鮮な刺身が一皿千円以下。立ち飲みは席料なし、テーブルは300円。毎日23時半まで。',
  });
}

save();
