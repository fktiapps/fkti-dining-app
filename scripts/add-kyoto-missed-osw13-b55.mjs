// Kyoto priority (kyoto-missed), worker osw13, batch 55 — lane: Tabelog id mod 6 = 0.
// Core: Vance洋菓子店, スタンド酒場 ステム. Notable: アシェットデセール 未完, 天ぷら だるきん.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-06';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-55');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ Vance洋菓子店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26016276/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '20:00']);
  put({
    id: 'kyoto_vance_yogashiten', name: 'Vance洋菓子店 (Vance Yogashi Ten)', category: 'OMNI',
    lat: 35.009320, lng: 135.779246, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a Western-style cake shop — sponge cakes, cream puffs, pound cake, kugelhopf, millefeuille-style tortes (2023–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cream cakes, cheesecakes, custard puffs and pudding (reviews).',
    hours_raw: 'Tabelog: 10:00–20:00, closed Tuesday; hours may change. 19 seats — 3 at the counter, 16 at tables — for cake and coffee; take-out; birthday cakes to order (April 2026); non-smoking. Cash only — no cards, e-money or QR (Tabelog). The website Tabelog lists no longer belongs to the shop.',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Higashiyama-Sanjo — 1 min walk from Higashiyama Stn exit 2',
    cuisine: 'An old-style Western cake shop with a café room: "deliciously ordinary" cakes (September 2023) · Dobos torte and tiramisu ¥480 each (April 2026); classic strawberry shortcake ¥600 (March 2026); soufflé cheesecake ¥450 and coffee ¥450 (July 2026) · seen: Black Forest, rare cheesecake, hard cheesecake, cassis, Mont Blanc, honey mousse, coconut cake, white chocolate cake, kugelhopf, pudding, cream puffs, three pound cakes (2023–2026 reviews)',
    website: null, gmaps: gm('Vance洋菓子店 分木町'), menu_url: null,
    notes: '[Cake shop & café · by Higashiyama Station, an old-school Western pâtisserie] A retro-lit cake shop with a little café a minute from Higashiyama Station, handy after Eikando or the Kyoto City art museum: Black Forest, Dobos torte, kugelhopf, honey mousse and a shortcake at ¥600. Regulars call the cakes "deliciously ordinary" — reliable rather than flashy. Cash only. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Reviewers in 2023–2026 describe a Western-style pastry shop like the ones of their childhood, with a showcase on the left, about four tables, retro lighting, polite staff, a steady flow of customers, and cakes now mostly a little over ¥500 because of rising costs. A Sunday in April 2026 found a mothers’ tea party in the café.',
      philosophy: null,
      specialty: 'Black Forest; Dobos torte; kugelhopf.',
      anecdotes: [
        { text: '"I can’t help but feel that there are fewer and fewer cake shops like this one that serve \'deliciously ordinary\' treats." — September 2023.', source: R + 'B472442340/' },
        { text: 'A regular comes back for the Black Forest, "which is hard to find at other bakeries" (November 2025).', source: R + 'B522074115/' },
        { text: 'March 2026: "when a cake costs more than a beef bowl, it better be delicious!" — a ¥600 shortcake.', source: R + 'B524602815/' },
        { text: 'A September 2025 regular found the kugelhopf’s liqueur "a bit milder than usual… Was it just my imagination?"', source: R + 'B514471474/' },
      ],
      japanese_sources_summary: '食べログ: Vance洋菓子店、喫茶店・ケーキ・チョコレート、東山区三条東入ル分木町77、地下鉄東西線東山駅2番出口から徒歩1分、10:00〜20:00、火曜休み、19席 (カウンター3、テーブル16)、テイクアウト、禁煙、カード・電子マネー・QR不可。口コミ (2023年9月〜2026年7月、英語): 昔ながらの洋菓子店、喫茶スペース、レトロな照明、ドボシュトルテとティラミス各480円、ショートケーキ600円、スフレチーズケーキ450円、コーヒー450円、シュークリーム、パウンドケーキ3種、レアチーズ、カシス、モンブラン、ハニームース、ココナッツケーキ、ホワイトチョコのケーキ、クグロフ、ハードチーズケーキ、プリン、ブラックフォレスト、誕生日ケーキの予約可、値上げで500円を超えるケーキが多い。',
      confidence: 'medium', sources: [TB, R + 'B472442340/', R + 'B514471474/', R + 'B516293562/', R + 'B518020408/', R + 'B518026257/', R + 'B520280057/', R + 'B522074115/', R + 'B524602815/', R + 'B525634416/', R + 'B532368394/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point at the showcase; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区三条東入ル分木町77',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.009320, 135.779246); cross-checked: GSI 京都府京都市東山区分木町77番地 (lot) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525634416/', R + 'B524602815/', R + 'B532368394/'],
    price_note: 'Prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Dobos torte', '¥480', 'Cake', 'no', 'no', 'April 2026.', 'cake'),
      it('', '', 'Strawberry shortcake', '¥600', 'Cake', 'no', 'no', 'March 2026.', 'shortcake'),
      it('', '', 'Soufflé cheesecake', '¥450', 'Cake', 'no', 'no', 'July 2026.', 'cheesecake'),
      it('', '', 'Coffee', '¥450', 'Drink', 'ask', 'ask', 'July 2026.', 'coffee'),
    ] }, {
    cuisine: '喫茶スペースのある昔ながらの洋菓子店。「普通においしい」ケーキ (2023年9月)・ドボシュトルテとティラミス各480円 (2026年4月)、ショートケーキ600円 (2026年3月)、スフレチーズケーキ450円とコーヒー450円 (2026年7月)・口コミではブラックフォレスト、レアチーズ、ハードチーズケーキ、カシス、モンブラン、ハニームース、ココナッツケーキ、ホワイトチョコのケーキ、クグロフ、プリン、シュークリーム、パウンドケーキ3種 (2023〜2026年)',
    neighborhood: '東山三条。東山駅2番出口から徒歩1分',
    gf_detail: 'グルテンフリーではない: スポンジのケーキ、シュークリーム、パウンドケーキ、クグロフなどの洋菓子店 (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: クリームのケーキ、チーズケーキ、カスタードのシュークリーム、プリン (口コミ)。',
    notes: '[洋菓子店と喫茶・東山駅すぐ、昔ながらの洋菓子] 東山駅から1分、レトロな照明の小さな喫茶がある洋菓子店。Eikando や美術館の帰りに寄りやすい。ブラックフォレスト、ドボシュトルテ、クグロフ、ハニームース、600円のショートケーキなど。常連は「普通においしい」と評する、派手さより安心感のケーキ。現金のみ。火曜休み。',
  });
}

// ================================================================ スタンド酒場 ステム
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26038986/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.lotus0610.com/';
  const H = day(['18:00', '02:00']);
  put({
    id: 'kyoto_stand_sakaba_stem', name: 'スタンド酒場 ステム (Stand Sakaba Stem)', category: 'OMNI',
    lat: 35.003603, lng: 135.756274, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the signature is a breaded eel cream croquette; spring rolls and curry croquettes too (official site; 2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: small plates of fish, duck, beef and eel; oden in hamo dashi (2024–2026 reviews).',
    hours_raw: 'Official site and Tabelog: 18:00–2:00 (last orders food 1:00, drinks 1:30); closed Tuesday. 20 places — counter 4, standing 10, five tables for 2; private hire up to 20; heated-tobacco area, and a smoking area inside for cigarettes (Tabelog). Cards and most e-money and QR (official site). Service charge: none — Tabelog’s Japanese original says 「なし」 (the English auto-translation wrongly says one is added). Second floor, easy to miss (2026 reviews). Opened 6 March 2023 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Karasuma — 3–4 min walk from Shijo Stn exit 25 / Hankyu Karasuma Stn',
    cuisine: 'A late-night stand bar of creative small plates, some in half sizes, with sake (official site; Tabelog) · signatures: eel cream croquette, nori potato salad, obanzai on the counter (Tabelog) · seen: grilled lotus root with mimolette, slow-cooked tongue with negi-salt, duck breast in soy-sauce koji with hojicha mustard, bonito and persimmon carpaccio, oden in hamo dashi, curry croquette with spiced banana sauce, ayu confit, beef steak with chestnut dal curry, fig butter, smoked potato chips (2024–2026 reviews) · a sake list that changes — Jikon, Isojiman, Nabeshima and more; Sapporo Lager Akaboshi (2025–2026 reviews) · courses with all-you-can-drink (May 2026)',
    website: SITE + 'sutemu.html', gmaps: gm('スタンド酒場 ステム 郭巨山町'), menu_url: null,
    notes: '[Stand bar · Shijo-Karasuma, small plates till 2 am] A second-floor stand-and-sit bar near Shijo-Karasuma open until 2 am: inventive small plates — eel cream croquette, lotus root with mimolette, fig butter — and a rotating sake list. Lively with locals; one diner missed chairs with backs. Smoking area inside. No service charge. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source; one of three bars run together with スモーク＆グリル ロータス and 炭火焼×ワイン チャコール (official site)'], origin: null,
      background: 'Opened 6 March 2023 (Tabelog). The shared official site presents it as the casual, drop-in sibling of two Italian bars in the Shijo-Karasuma back streets, Smoke & Grill LOTUS and Charcoal, with standing places for one-person drinking, a pre-party or a second or third stop. It joins a yearly Sake Day event with the sake bar 日本酒BAR ○△□ and a curry and craft ginger ale shop (2024–2026 reviews).',
      philosophy: 'Official site: 「気軽に立ち寄れる酒場」 — a bar you can drop into easily.',
      specialty: 'Eel cream croquette; seasonal small plates.',
      anecdotes: [
        { text: '"I arrived already tipsy and immediately thought, \'I should have come here first!\'" — April 2026.', source: R + 'B526038235/' },
        { text: 'A July 2026 business traveller found it open past 11 pm when everything else was closing — "What I particularly loved was the fig butter."', source: R + 'B531044035/' },
        { text: '"I think it would have been even better if the chairs had backrests." — May 2026.', source: R + 'B529109315/' },
      ],
      japanese_sources_summary: '公式サイト (lotus0610.com): スモーク＆グリル ロータス、炭火焼×ワイン チャコール、スタンド酒場 ステムの3店、ステムは気軽に立ち寄れる酒場、小皿料理 (ハーフサイズもあり)、名物のウナクリームコロッケやお造り、1人飲み・0次会・2軒目3軒目に、下京区郭巨山町30 ホーリーハウス 2F、四条駅25番出口から徒歩4分、18:00〜2:00 (L.O. 1:00)、火曜休み、カード・電子マネー可。食べログ: 居酒屋・立ち飲み・バル、20席 (カウンター4、立ち10、2人テーブル5)、貸切20名、加熱式たばこ専用の喫煙所と店内の紙たばこの喫煙所、サービス料は原文で「なし」、2023年3月6日オープン、のりポテトサラダ、カウンターのおばんざい。口コミ (2024年10月〜2026年10月、英語): 蓮根のミモレット焼き、牛タンの低温調理とねぎ塩、鴨胸の醤油麹漬け ほうじ茶マスタード、鰹と柿のカルパッチョ、鱧だしのおでん、カレーコロッケ、鮎のコンフィ、無花果バター、燻製ポテトチップス、日本酒 (Jikon、Isojiman、Nabeshima など)、日本酒の日のイベント、飲み放題のコース、2階でわかりにくい、背もたれのない椅子、地元の常連でにぎやか。',
      confidence: 'high', sources: [SITE, TB, R + 'B467585411/', R + 'B523669543/', R + 'B523923835/', R + 'B526038235/', R + 'B527841337/', R + 'B529109315/', R + 'B531044035/', R + 'B531446433/', R + 'B536769496/', R + 'B537886023/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small plates you can point at; obanzai on the counter; lively with regulars.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区郭巨山町30 ホーリーハウス 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site live; Tabelog reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003603, 135.756274); cross-checked: GSI 京都府京都市下京区郭巨山町30番地 (lot) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [SITE + 'sutemu.html', R + 'B467585411/'],
    price_note: 'No prices in the sources; spend about ¥2,000–4,000 a head (2026 reviews).', last_checked: TODAY, items: [
      it('ウナクリームコロッケ', '', 'Eel cream croquette', null, 'Small plates', 'no', 'no', 'Official site; March 2026.', 'croquette'),
      it('のりポテトサラダ', '', 'Nori potato salad', null, 'Small plates', 'ask', 'ask', 'Tabelog.', 'potato_salad'),
      it('', '', 'Grilled lotus root with mimolette', null, 'Small plates', 'ask', 'no', 'February and March 2026.', 'renkon'),
    ] }, {
    cuisine: '創作の小皿 (ハーフサイズもあり) と日本酒の深夜まで開く立ち飲み (公式サイト、食べログ)・名物はウナクリームコロッケ、のりポテトサラダ、カウンターのおばんざい (食べログ)・口コミでは蓮根のミモレット焼き、牛タンの低温調理とねぎ塩、鴨胸の醤油麹漬け ほうじ茶マスタード、鰹と柿のカルパッチョ、鱧だしのおでん、スパイスバナナソースのカレーコロッケ、鮎のコンフィ、栗のダルカレーの牛ステーキ、無花果バター、燻製ポテトチップス (2024〜2026年)・入れ替わる日本酒 (Jikon、Isojiman、Nabeshima など)、Sapporo Lager Akaboshi (2025〜2026年の口コミ)・飲み放題付きのコース (2026年5月)',
    neighborhood: '四条烏丸。四条駅25番出口・阪急烏丸駅から徒歩3〜4分',
    gf_detail: 'グルテンフリーではない: 名物はパン粉のウナクリームコロッケ。春巻やカレーコロッケも (公式サイト、2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 魚、鴨、牛、鰻の小皿。鱧だしのおでん (2024〜2026年の口コミ)。',
    notes: '[立ち飲み・四条烏丸、深夜2時までの小皿] 四条烏丸近くの2階にある立ち飲みと座り飲みの店で、夜中の2時まで。ウナクリームコロッケ、蓮根のミモレット焼き、無花果バターなどひと工夫ある小皿と、入れ替わる日本酒。地元の常連でにぎやかで、背もたれのある椅子がほしいという声も。店内に喫煙所あり。サービス料なし。火曜休み。',
  });
}

// ================================================================ アシェットデセール 未完
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26029734/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.kyoto-mikan.jp/';
  const H = day(['12:00', '22:00']);
  put({
    id: 'kyoto_assiette_dessert_mikan', name: 'アシェットデセール 未完 (Assiette Dessert Mikan)', category: 'MOM_AND_POP',
    lat: 35.015752, lng: 135.766649, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: plated desserts with chiffon, puff pastry, tortellini, financiers and madeleines (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: ice creams, cream, mousse, panna cotta and butter pastries (reviews).',
    hours_raw: 'Official site: reservations only, courses starting together — lunch 12:00 full course and 15:00 short course; dinner 19:30 course, à la carte 19:00–21:00 with petits fours; closes 22:00; irregular closing days (calendar on Instagram) (Tabelog lists 13:00, 15:00 and 19:30). May be closed when there are no bookings (Tabelog). A charge on top at lunch and dinner — ¥500 from August 2021 (official site); one drink per person (official site; Tabelog 「ワンドリンク制」). Cancellation: 50% within 48 hours, 100% within 24 hours (official site). 7 counter seats; non-smoking; cards, e-money and QR (Tabelog). Opened 22 September 2017 (Tabelog; official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'North of Kyoto City Hall — 10 min walk from Kyoto Shiyakusho-mae or Marutamachi Stn',
    cuisine: 'Plated desserts made in front of you at a seven-seat counter, as a course (official site) · full course ¥6,600 tax included: amuse, the day’s assiette dessert, a salty palate cleanser, mignardises, nine plates in all with a gift to take home (official site); short course ¥5,500 (April 2026; 5 plates, October 2026) · themed courses: citrus (March–April 2026), peach (August 2026), a three-day chestnut course once a year (November 2025) · seen: grape plates, Tanba chestnut with pear, pistachio chiffon, mango with fromage-blanc ice, chestnut tortellini, a chestnut parfait of a dozen parts, white-miso financier, ginger madeleine (2025–2026 reviews) · welcome herbal tea (reviews)',
    website: SITE, gmaps: gm('アシェットデセール 未完 松本町'), menu_url: SITE + 'course',
    notes: '[Dessert course · seven-seat counter, plated desserts made in front of you] A reservation-only dessert counter north of the Kyoto City Hall area, open since 2017: chef 大村 壮史 builds a course of plated desserts in front of seven guests — citrus, peach, or a once-a-year chestnut course — ending with mignardises and warm financiers. Full course ¥6,600, short course ¥5,500, plus a drink and a charge. 100% cancellation fee within 24 hours.',
    chef_bio: { chef_name: '大村 壮史', roles: ['Owner-pâtissier (official site)'], origin: null,
      background: 'Per the official site: made cream puffs and café desserts at Crème de la Crème (2004–2006); wedding and café cakes at スター株式会社 (2006–2008); restaurant desserts and take-out cakes at Il Ghiottone (2008–2013); chocolate café desserts at マリベル (2013–2014); wedding cakes and desserts at the Westin Miyako Hotel (2014–2017); then opened Mikan in September 2017 as an assiette-dessert shop. An April 2026 regular calls it a pioneer of dessert courses in Kyoto that has kept its prices modest.',
      philosophy: 'Official site: the name 未完 ("unfinished") means 「現状に満足せず、常に新しい技術やデザインを追求し続ける」 — never satisfied, always chasing new techniques and designs; desserts to enjoy with all five senses.',
      specialty: 'Assiette dessert course; seasonal parfait.',
      anecdotes: [
        { text: 'An April 2026 regular: "When I try to find a similar dessert course in Tokyo, it can cost three to four times as much."', source: R + 'B527080660/' },
        { text: 'The once-a-year chestnut course ran three days in November 2025; its parfait alone had about a dozen components, from hojicha espuma to Tanba chestnut ice cream.', source: R + 'B517717634/' },
        { text: 'The same April 2026 regular found the short course good but felt "the true value of this restaurant shines through in their regular full course."', source: R + 'B527080660/' },
      ],
      japanese_sources_summary: '公式サイト (kyoto-mikan.jp): アシェットデセール 未完、完全予約制のデザートのコース、店名は「現状に満足せず、常に新しい技術やデザインを追求し続ける」という意味、カウンター席のみ、五感で楽しむ、シェフ 大村 壮史 (クレームデラクレーム、スター株式会社、イルギオットーネ、マリベル、ウェスティン都ホテルを経て2017年9月に開業)、コース 全9皿お土産付き 6,600円 (税込)、ワンドリンクオーダー、昼12:00フルコース・15:00ショートコース、夜19:30コース・アラカルト19:00〜21:00、22:00閉店、昼夜ともにチャージ料 (2021年8月から500円)、不定休、キャンセルは48時間以内50%・24時間以内100%。食べログ: ケーキ・カフェ、中京区御幸町通夷川上る松本町583-1 フォルム御幸町 1F、7席、ワンドリンク制、カード・電子マネー・QR可、2017年9月22日オープン、予約がない日は休みの場合あり。口コミ (2025年9月〜2026年10月、英語): ウェルカムのハーブティー、ぶどう、丹波栗と洋梨、ピスタチオのシフォン、年に一度の栗のコース (3日間)、柑橘のコース、桃のコース、ショートコース5,500円、白味噌のフィナンシェ、生姜のマドレーヌ、東京なら3〜4倍の値段、京都のデザートコースの草分け。',
      confidence: 'high', sources: [SITE, SITE + 'chef', SITE + 'course', TB, R + 'B514924386/', R + 'B517717634/', R + 'B524876185/', R + 'B527080660/', R + 'B528795668/', R + 'B529345223/', R + 'B529366273/', R + 'B533012257/', R + 'B537876284/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book online; a set course explained at the counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区御幸町通夷川上る松本町583-1 フォルム御幸町 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site live with online booking; Tabelog reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.015752, 135.766649); cross-checked: GSI 京都府京都市中京区松本町583番地 (lot) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE + 'course', R + 'B527080660/'],
    price_note: 'Official site, tax included; plus one drink and a charge.', last_checked: TODAY, items: [
      it('コース', '', 'Dessert course (nine plates, gift to take home)', '¥6,600', 'Course', 'no', 'no', 'Official site.', 'dessert_course'),
      it('ショートコース', '', 'Short course (15:00)', '¥5,500', 'Course', 'no', 'no', 'April 2026.', 'dessert_course'),
    ] }, {
    cuisine: '7席のカウンターで目の前で作る皿盛りデザートのコース (公式サイト)・コースは税込6,600円で、アミューズ、本日のアシェットデセール、お口直しの塩味の一皿、小菓子など全9皿にお土産付き (公式サイト)。ショートコース5,500円 (2026年4月、10月は5皿)・テーマのコースは柑橘 (2026年3〜4月)、桃 (2026年8月)、年に一度3日間の栗のコース (2025年11月)・口コミではぶどうの皿、丹波栗と洋梨、ピスタチオのシフォン、マンゴーとフロマージュブランのアイス、栗のトルテッリーニ、十数種のパーツの栗のパフェ、白味噌のフィナンシェ、生姜のマドレーヌ (2025〜2026年)・ウェルカムのハーブティー (口コミ)',
    neighborhood: '御幸町夷川。京都市役所前駅・丸太町駅から徒歩10分',
    gf_detail: 'グルテンフリーではない: シフォン、パイ生地、トルテッリーニ、フィナンシェ、マドレーヌの入ったデザート (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: アイス、クリーム、ムース、パンナコッタ、バターの焼き菓子 (口コミ)。',
    notes: '[デザートコース・7席のカウンター、目の前で作る皿盛りデザート] 2017年からの完全予約制のデザートのカウンター。シェフの大村 壮史さんが7人の前で皿盛りデザートのコースを仕立てる。柑橘、桃、年に一度の栗のコースなどがあり、最後は小菓子と焼きたてのフィナンシェ。フルコース6,600円、ショートコース5,500円に、ドリンクとチャージ料。24時間以内のキャンセルは100%。',
  });
}

// ================================================================ 天ぷら だるきん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26032554/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://tempuradarukin.com/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'kyoto_tempura_darukin', name: '天ぷら だるきん (Tempura Darukin)', category: 'MOM_AND_POP',
    lat: 35.002291, lng: 135.763240, cuisine_type: 'tempura',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: an omakase of wheat-batter tempura (official site; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish and seafood tempura, sea urchin, a dashi chazuke to finish (reviews).',
    hours_raw: 'Official site and Tabelog: daily 18:00–23:00, reservation only, two seatings starting together at 18:00 and 20:00; closed irregularly. Cancellations or changes in numbers at least two days before. Payment by credit card only — no cash (Tabelog; official site; March 2024). No children except when the shop is booked privately (Tabelog). 7 counter seats (Tabelog; the official site also says six, one turn); non-smoking. Opened April 2019 (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Near Shijo-Karasuma — 3 min walk from Hankyu Karasuma Stn exit 15',
    cuisine: 'Omakase tempura of ingredients rarely fried elsewhere (official site) · signatures: a hand-passed nori crisp with scallop and sea urchin to open; Kita Akari potato aged 18 months, cooked about an hour and a half; chutoro tempura hand roll; zucchini with Parmigiano (official site; 2024–2026 reviews) · seen: Donchicchi horse mackerel from Shimane, nodoguro over rice with shiso and Nara pickles, sawara, masu brushed with soy, slow-fried carrot, lotus root with soy powder, Brussels sprouts with pecorino, firefly squid dashi chazuke, fruit tomato to finish (2024–2026 reviews) · sake pairings explained (February 2022) · about ¥10,000–20,000 a head (Tabelog; reviews)',
    website: SITE, gmaps: gm('天ぷら だるきん 綾材木町'), menu_url: null,
    notes: '[Tempura · near Shijo-Karasuma, an oden master’s tempura] A seven-seat counter near Shijo-Karasuma opened in 2019 by the owner of the oden shop だるまときんぎょ, who asked why tempura always uses the same ingredients: 18-month-aged potatoes, chutoro hand rolls, zucchini with Parmigiano, a firefly-squid chazuke. Two seatings, 18:00 and 20:00, all start together. Cards only, no cash. No children unless booked privately.',
    chef_bio: { chef_name: '伊藤 大輔', roles: ['Owner-chef (official site); also runs the oden shop だるまときんぎょ'], origin: null,
      background: 'Per the official site: the owner of the oden shop だるまときんぎょ opened Darukin in April 2019 out of a wish to widen what tempura can use, starting from the question of why tempura ingredients are always the same; it has become a word-of-mouth hideaway near Karasuma, with art on the walls and a mirror-finished frying station. A February 2022 diner saw the owner running everything alone while still explaining the sake; a March 2024 diner met the chef’s wife at the counter.',
      philosophy: 'Official site: 「なぜ天ぷらの食材はいつも同じなのか」 — why are tempura ingredients always the same?',
      specialty: '18-month-aged potato tempura; nori with scallop and sea urchin.',
      anecdotes: [
        { text: 'A May 2026 diner asked other shops why they all fry the same things — "Because they are delicious" — and found Darukin "challenging that perspective."', source: R + 'B527899904/' },
        { text: 'March 2024: next to the diner sat a woman in red tights, tiger-print trousers, a red turtleneck and a red tiger cap, with red hair and eyebrows — "She was so charming, and it turned out she was the chef’s wife!"', source: R + 'B481478856/' },
        { text: '"Although the owner was busy managing everything alone, he provided thorough explanations of the sake pairings during the meal." — February 2022.', source: R + 'B513294812/' },
        { text: 'August 2021: the course starts for everyone together, and the diners waited about 15 minutes for a late group — "That was a bit disappointing."', source: R + 'B452467874/' },
      ],
      japanese_sources_summary: '公式サイト (tempuradarukin.com): 天ぷら だるきん、京都・綾小路堺町、旬の素材の天ぷらのおまかせコース、一回転のみ6席のカウンター、「なぜ天ぷらの食材はいつも同じなのか」から出発した大将、18ヶ月熟成キタアカリ、どんちっちアジ、中トロ、のどぐろ、ズッキーニ×パルメジャーノ、海苔に貝柱と雲丹の手渡しの一品、7席、完全予約制・2部制 (18時と20時)、クレジットカード決済のみ、おでん屋「だるまときんぎょ」の大将が2019年4月に開業、伊藤 大輔、18ヶ月熟成じゃがいもを1時間半かけて調理、月〜日 18:00〜23:00、キャンセル・人数変更は2日前まで。食べログ: 天ぷら・日本料理、下京区堺町通綾小路下ル綾材木町198-5、阪急烏丸駅15番出口から徒歩3分、予約のみ、7席、カードのみ、子供は貸切時のみ、禁煙。口コミ (2021〜2026年、英語): 揚げる音、軽い衣、鰆、人参、蓮根、芽キャベツとペコリーノ、ほたるいかの出汁茶漬け、フルーツトマト、一人で切り盛りしながら日本酒の説明 (2022年)、大将の奥さん (2024年)、遅れた組を15分待った (2021年)、1人1万〜2万円ほど。',
      confidence: 'high', sources: [SITE, TB, R + 'B446850757/', R + 'B452467874/', R + 'B475215210/', R + 'B481478856/', R + 'B486996090/', R + 'B505084270/', R + 'B513294812/', R + 'B513552339/', R + 'B527899904/', R + 'B535525274/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Omakase only; book ahead; cards only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区堺町通綾小路下ル綾材木町198-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site live; Tabelog reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.002291, 135.763240); cross-checked: GSI 京都府京都市下京区綾材木町198番地 (lot) 35m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527899904/', TB],
    price_note: 'No course price in the sources; about ¥10,000–20,000 a head (Tabelog; reviews).', last_checked: TODAY, items: [
      it('おまかせコース', '', 'Omakase tempura course', null, 'Course', 'no', 'no', 'Two seatings, 18:00 and 20:00.', 'tempura_course'),
      it('', '', '18-month-aged Kita Akari potato tempura', null, 'Course', 'no', 'ask', 'Official site; May 2026.', 'tempura'),
    ] }, {
    cuisine: 'ほかの店ではあまり揚げない食材のおまかせ天ぷら (公式サイト)・名物は手渡しの海苔に貝柱と雲丹をのせた最初の一品、1時間半ほどかけて調理する18ヶ月熟成のキタアカリ、中トロの手巻き天ぷら、ズッキーニとパルメジャーノ (公式サイト、2024〜2026年の口コミ)・口コミではどんちっちアジ、のどぐろと大葉と奈良漬のご飯、鰆、醤油を塗った鱒、じっくり揚げた人参、粉醤油の蓮根、芽キャベツとペコリーノ、ほたるいかの出汁茶漬け、締めのフルーツトマト (2024〜2026年)・日本酒の合わせ方も説明 (2022年2月)・1人1万〜2万円ほど (食べログ、口コミ)',
    neighborhood: '綾小路堺町、四条烏丸の近く。阪急烏丸駅15番出口から徒歩3分',
    gf_detail: 'グルテンフリーではない: 小麦の衣の天ぷらのおまかせ (公式サイト、口コミ)。',
    vegan_detail: 'ヴィーガン不可: 魚介の天ぷら、雲丹、締めは出汁茶漬け (口コミ)。',
    notes: '[天ぷら・綾小路堺町、おでん屋の大将の天ぷら] 四条烏丸近くの7席のカウンター。おでん屋「だるまときんぎょ」の大将が「なぜ天ぷらの食材はいつも同じなのか」と2019年に開いた。18ヶ月熟成のじゃがいも、中トロの手巻き、ズッキーニとパルメジャーノ、ほたるいかの茶漬けなど。18時と20時の2部制で一斉スタート。カードのみで現金不可。子供は貸切時のみ。',
  });
}

save();
