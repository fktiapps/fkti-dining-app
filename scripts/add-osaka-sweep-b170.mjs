// Osaka sweep (2-mile circle around Dotonbori), batch 170 — mom phase (≤20 seats, 30+ reviews, nearest-first).
//   + 鉄板焼き 銀ひかり (14-seat hotel teppanyaki, kaiseki-style courses from ¥6,600; Higashi-Shinsaibashi)
//   + SEIDAKO (cash-only takoyaki izakaya, noon to 2–3 am; Amerikamura)
//   + タコタコキング 本店のちょっと西店 (late takoyaki bar with table teppan upstairs; Higashi-Shinsaibashi)
//   + 39チキン 日本橋本店 (8-seat Korean fried chicken, mostly takeout; Sennichimae)
//   Skips: 27119263 裏シズク (Shizuku), 27122747 たこ家道頓堀くくる 心斎橋店 (Kukuru), 27157788 焼鳥 無名 NO NAME -別邸- (NO NAME).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-29';
const { put, skip, save } = openCitySweep('osaka', TODAY, 170);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27119263', 'Sister shop of 鮨 Shizuku 心斎橋, already in data.');
skip('27122747', 'Chain branch: Takoya Dotonbori Kukuru already in data.');
skip('27157788', 'Branch of Yakitori Mumei NO NAME, already in data.');

// ================================================================ 鉄板焼き 銀ひかり
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27144962/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'osaka_teppanyaki_gin_hikari_higashishinsaibashi', name: '鉄板焼き 銀ひかり (Teppanyaki Gin Hikari)', category: 'OMNI',
    lat: 34.672321, lng: 135.503284, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the Wagyu steak comes with sauces, wasabi or rock salt (September 2026), and the courses also include simmered dishes, a meunière and garlic fried rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: courses built on sashimi, fish and Wagyu; nothing described as vegan.',
    hours_raw: 'Tabelog: Mon–Wed, Fri–Sun 12:00–15:00 and 17:00–23:00 (food last order 22:30); closed Thursday; lunch is by reservation and currently suspended, so dinner only. Dinner service charge 10% (Tabelog). Cards, e-money and QR accepted (Tabelog). Smoking allowed (Tabelog). BYO drinks allowed; menus in English and Chinese (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-16-5, Arashi Hotel 2F — 5 min from Shinsaibashi Stn',
    cuisine: 'Teppanyaki courses with kaiseki-style starters (14 seats: 8 at the counter, 6 at tables) · Chef\'s Omakase Course ¥6,600 and ¥8,800 (tax included) · five seasonal appetizers, three kinds of sashimi, a simmered or soup course, flounder meunière, Wagyu steak with grilled vegetables, garlic fried rice with miso soup, fruit dessert or parfait · higher courses with Ise lobster and abalone (Tabelog listing) · sake, wine, cocktails',
    website: null, gmaps: gm('鉄板焼き 銀ひかり 東心斎橋'), menu_url: TB + 'dtlmenu/',
    notes: "[Teppanyaki · kaiseki-style teppan courses in a hotel, Higashi-Shinsaibashi] A calm, chic teppanyaki room on the second floor of a Higashi-Shinsaibashi hotel, with eight counter seats facing the griddle. The courses read like kaiseki first: five seasonal appetizers (one diner loved the fugu-skin jelly), three kinds of sashimi, a simmered dish or soup, flounder meunière cooked on the teppan, then Wagyu steak flamed in front of you, eaten with wasabi and rock salt. Garlic fried rice and miso soup close it out before fruit or a parfait. A diner noted that courses now start at ¥6,600, lower than before; two diners chose the ¥8,800 omakase. Dinner only for now, 10% service charge; closed Thursdays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Teppanyaki restaurant in a hotel, with a staff-maintained Tabelog listing (Tabelog; 2026 reviews).', philosophy: 'Seasonal seafood, Wagyu and Kyoto vegetables; menu changes with the seasons (Tabelog listing).', specialty: 'Wagyu teppanyaki courses.',
      anecdotes: [
        { text: '"The steak was thick yet incredibly tender and delicious… You can season it to your liking with sauces, wasabi, or rock salt…" — September 2026, Chef\'s Omakase Course ¥8,800.', source: R + 'B535713485/' },
        { text: '"Previously, the restaurant mainly offered high-priced courses, but now you can enjoy an authentic teppanyaki course starting at JPY 6,600…" — August 2026.', source: R + 'B533057650/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員の公式情報): 鉄板焼き 銀ひかり、大阪市中央区東心斎橋1-16-5 嵐ホテル 2F、心斎橋駅から徒歩5分、月〜水・金〜日12:00〜15:00、17:00〜23:00 (料理L.O. 22:30)、木曜休み、ランチは前日までの予約制で現在休止中、ディナーのみサービス料10%、カード・電子マネー・QR可、喫煙可、14席 (カウンター8、テーブル6)、持ち込み可、英語・中国語のメニュー、旬の魚介、A5の和牛、京野菜、伊勢海老やあわびのコース。口コミ(2026年7〜9月): おまかせコース6,600円と8,800円、季節の前菜5種 (fugu の皮のゼリーなど)、sashimi 3種、煮物やスープ、鉄板で焼くカレイのムニエル、目の前で炎をあげる和牛ステーキをわさびと岩塩で、ガーリックライスとみそ汁、フルーツやパフェ、以前より手頃になったという声。',
      confidence: 'medium', sources: [TB, R + 'B532898154/', R + 'B533057650/', R + 'B535235982/', R + 'B535713485/', R + 'B536064120/', R + 'B536121914/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Menus in English and Chinese; Chinese-speaking staff (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-16-5 嵐ホテル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Staff-maintained Tabelog listing; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目16番5号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533057650/', R + 'B535713485/'],
    price_note: 'Prices from August–September 2026 reviews; dinner adds 10% service.', last_checked: TODAY, items: [
      it('', '', 'Chef\'s Omakase Course', '¥6,600', 'Courses', 'ask', 'no', 'August 2026.', 'omakase_6600'),
      it('', '', 'Chef\'s Omakase Course (casual)', '¥8,800', 'Courses', 'ask', 'no', 'July–September 2026.', 'omakase_8800'),
    ] }, {
    cuisine: '会席風の前菜から始まる鉄板焼きのコース (14席: カウンター8、テーブル6)・おまかせコース6,600円と8,800円 (税込)・季節の前菜5種、sashimi 3種、煮物かスープ、カレイのムニエル、焼き野菜と和牛ステーキ、ガーリックライスとみそ汁、フルーツかパフェ・伊勢海老やあわびの上のコース (食べログ)・日本酒、ワイン、カクテル',
    neighborhood: '東心斎橋1-16-5 嵐ホテル 2F。心斎橋駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。和牛ステーキはソース、わさび、岩塩で (2026年9月)。コースには煮物、ムニエル、ガーリックライスも。',
    vegan_detail: '実質ヴィーガンではありません。sashimi、魚、和牛のコース。ヴィーガンの記載なし。',
    notes: '[鉄板焼き・東心斎橋、ホテルの中の会席風の鉄板コース] 東心斎橋のホテル2階にある落ち着いたシックな鉄板焼きで、鉄板に向かうカウンター8席。コースはまず会席風に、季節の前菜5種 (fugu の皮のゼリーが気に入ったという声)、sashimi 3種、煮物かスープ、鉄板で焼くカレイのムニエル、そして目の前で炎をあげる和牛ステーキをわさびと岩塩で。しめはガーリックライスとみそ汁、最後にフルーツかパフェ。以前より手頃になり6,600円からという声、8,800円のおまかせを選んだ人がふたり。いまはディナーのみ、サービス料10%、木曜休み。',
  });
}

// ================================================================ SEIDAKO
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27088133/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['12:00', '02:00']); const WE = day(['12:00', '03:00']);
  put({
    id: 'osaka_seidako_nishishinsaibashi', name: 'SEIDAKO', category: 'OMNI',
    lat: 34.670054, lng: 135.497345, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: takoyaki batter, and the shop sells takoyaki flour; no gluten-free option described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: octopus takoyaki in a dashi batter.',
    hours_raw: 'Mon–Thu 12:00–02:00; Fri–Sun 12:00–03:00; may change, so check (Tabelog). Cash only (Tabelog). Smoking allowed (Tabelog). Good for daytime drinking (May 2026).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WE, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Nishi-Shinsaibashi 2-16-7, Mifune Central Bear Dotonbori 101, in Amerikamura — about 6 min from Namba Stn',
    cuisine: 'Takoyaki izakaya (20 seats) · dashi-rich takoyaki, crisp outside and creamy inside · toppings: salt mayo, salt butter, sauce mayo · plenty of drinking snacks · Masachan highball · takoyaki flour to take home (sometimes sold out)',
    website: null, gmaps: gm('SEIDAKO 西心斎橋'), menu_url: null,
    notes: "[Takoyaki · a cash-only takoyaki izakaya open from noon to the small hours, Amerikamura] A small takoyaki bar in Amerikamura, open from noon until 2 am (3 am at weekends), as good for a daytime drink as a late one. The takoyaki has a dashi-rich batter, crisp outside and creamy within; it's good plain, but salt mayo is the topping diners keep naming, with salt butter and sauce mayo as alternatives. There's a wide snack menu for drinking, a Masachan highball, and bags of the shop's takoyaki flour to take home when they're not sold out. Cheerful staff and a sticker-covered, hidden-away feel. Cash only; smoking allowed.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Takoyaki izakaya (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Dashi takoyaki with salt mayo.',
      anecdotes: [
        { text: '"Delicious takoyaki infused with flavorful dashi. It\'s tasty on its own, but I also recommend trying it with salt butter or salt mayo." — October 2025.', source: R + 'B516839243/' },
        { text: '"I was so tempted to take home some takoyaki flour, but it was sold out that day…" — July 2026.', source: R + 'B534245655/' },
      ],
      japanese_sources_summary: '食べログ: SEIDAKO、大阪市中央区西心斎橋2-16-7 ミフネセントラルベア道頓堀101、なんば駅から徒歩6分、月〜木12:00〜翌2:00、金〜日12:00〜翌3:00、現金のみ、喫煙可、20席。口コミ(2025年10月〜2026年10月): アメリカ村のたこ焼きの居酒屋、dashi の効いたたこ焼き、外はカリッと中はとろり、塩マヨ・塩バター・ソースマヨ、つまみが多い、昼飲みにも、Masachan ハイボール、たこ焼き粉の持ち帰り (売り切れの日も)、スタッフが明るい、ステッカーがたくさん。',
      confidence: 'medium', sources: [TB, R + 'B516839243/', R + 'B527585739/', R + 'B528939574/', R + 'B534245655/', R + 'B538147002/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual counter bar; cash only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋2-16-7 ミフネセントラルベア道頓堀101',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋二丁目16番7号 (go) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B516839243/', R + 'B527585739/'],
    price_note: 'No prices in the reviews; about ¥1,000–3,000 per person (Tabelog, reviews).', last_checked: TODAY, items: [
      it('', '', 'Takoyaki with salt mayo', '', 'Takoyaki', 'no', 'no', 'May–October 2026.', 'shiomayo'),
      it('', '', 'Takoyaki with salt butter', '', 'Takoyaki', 'no', 'no', 'October 2025.', 'shiobutter'),
      it('', '', 'Takoyaki with sauce and mayo', '', 'Takoyaki', 'no', 'no', 'October 2026.', 'saucemayo'),
    ] }, {
    cuisine: 'たこ焼きの居酒屋 (20席)・dashi の効いたたこ焼き、外はカリッと中はとろり・塩マヨ、塩バター、ソースマヨ・酒のつまみが豊富・Masachan ハイボール・持ち帰りのたこ焼き粉 (売り切れの日も)',
    neighborhood: '西心斎橋2-16-7 ミフネセントラルベア道頓堀101、アメリカ村。なんば駅から徒歩約6分',
    gf_detail: '実質グルテンフリーではありません。たこ焼きの生地で、店ではたこ焼き粉も売っている。グルテンフリーの品の記載なし。',
    vegan_detail: 'ヴィーガンではありません。dashi の生地のたこ入りのたこ焼き。',
    notes: '[たこ焼き・アメリカ村、昼から深夜まで開く現金のみのたこ焼き居酒屋] アメリカ村の小さなたこ焼きの店で、昼12時から深夜2時 (週末は3時) まで、昼飲みにも遅い一杯にも。たこ焼きはdashi の効いた生地で外はカリッと中はとろり。そのままでもおいしいが、口コミで繰り返し挙がるのは塩マヨで、塩バターやソースマヨも。つまみも多く、Masachan ハイボールや、売り切れていなければ持ち帰りのたこ焼き粉も。スタッフは明るく、ステッカーだらけの隠れ家のような店内。現金のみ、喫煙可。',
  });
}

// ================================================================ タコタコキング 本店のちょっと西店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27045445/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://takotakoking.com/honnishiten.html';
  put({
    id: 'osaka_takotako_king_honten_nishi', name: 'タコタコキング 本店のちょっと西店 (TAKOTAKO KING Honten no chotto nishi ten)', category: 'OMNI',
    lat: 34.671857, lng: 135.502702, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: takoyaki and fried takoyaki, okonomiyaki-style "modern yaki" and fried snacks; no gluten-free option described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: octopus takoyaki, seafood and squid dishes.',
    hours_raw: 'Daily 18:00–03:00; may change, so check (Tabelog). Busy around 1 am (September 2026). Reservations taken; groups seated on a Saturday (2026). Cards and QR accepted; no e-money (Tabelog). Smoking allowed (Tabelog). Takeout (Tabelog).',
    hours: ALL(day(['18:00', '03:00'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 2-8-28, 1F (with a second floor) — 3 min from Shinsaibashi Stn',
    cuisine: 'Takoyaki and teppan izakaya, a branch of the TAKOTAKO KING group (20 seats; teppan grills at the tables upstairs) · takoyaki with salt garlic or sauce; fried takoyaki with salt, soy sauce or sauce · four-flavor sampler (2 each); 16-piece set · cheese tororo-yaki; yam special; seafood mix special; modern yaki · grilled squid tentacles; dried-squid tempura; extra-large kara-age; crispy cheese corn; eringi with butter; honey cream cheese; omurice · lemon chuhai; Nikaido soda highball',
    website: OWN, gmaps: gm('タコタコキング 本店のちょっと西店'), menu_url: null,
    notes: "[Takoyaki · late-night takoyaki and table teppan, Higashi-Shinsaibashi] A branch of the TAKOTAKO KING takoyaki group, just west of the main shop, open from 18:00 to 3 am and still busy around 1 am. Upstairs, each table has its own teppan for reheating and grilling, with a toy train running past and an octopus-shaped smoke machine. Salt garlic takoyaki is the flavor diners keep naming, and a few prefer the hot, crunchy fried takoyaki; a four-flavor sampler lets you try several. Beyond takoyaki: a cheesy tororo-yaki, yam and seafood specials, grilled squid tentacles, extra-large kara-age and even omurice. Staff are usually cheerful, though one October 2026 diner found a new hire couldn't get the table grill hot. Takeout available.",
    chef_bio: { chef_name: null, roles: [], origin: 'Branch of the TAKOTAKO KING takoyaki group (official site; 2026 reviews).', background: 'Takoyaki and teppan izakaya (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Salt garlic takoyaki; fried takoyaki.',
      anecdotes: [
        { text: '"The photo shows a set of 16 takoyaki, and the salt garlic flavor was particularly addictive and incredibly tasty." — August 2026.', source: R + 'B533769752/' },
        { text: '"This restaurant has teppan-yaki grills at each table on the second floor. This means you can reheat and cook your food to your liking!" — October 2026.', source: R + 'B505477759/' },
      ],
      japanese_sources_summary: '食べログ: タコタコキング 本店のちょっと西店、大阪市中央区東心斎橋2-8-28 1階、心斎橋駅から3分、毎日18:00〜翌3:00、カード・QR可、電子マネー不可、喫煙可、20席、テイクアウト、公式サイトあり。口コミ(2026年8〜10月): 2階のテーブルに鉄板、おもちゃの電車、タコの形のスモークマシン、塩にんにくのたこ焼き、ソース、揚げたこ焼き (塩、醤油、ソース)、4種を2個ずつ、16個のセット、チーズの tororo-yaki、山芋のスペシャル、海鮮ミックスのスペシャル、modern yaki、イカの足の焼き物、するめの天ぷら、特大の kara-age、チーズコーン、エリンギバター、はちみつクリームチーズ、omurice、深夜1時でもにぎわう、10月に新人スタッフで鉄板が温まらなかったという声。',
      confidence: 'medium', sources: [TB, OWN, R + 'B489621545/', R + 'B493331067/', R + 'B505477759/', R + 'B533769752/', R + 'B535289083/', R + 'B535994701/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cheerful staff; group-friendly (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-8-28 1階',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目8番28号 (go) 5m; offset 7 m west of the Tabelog point to clear Angetsu (2-8-29, 8 m); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533769752/', R + 'B535994701/'],
    price_note: 'No prices in the reviews; about ¥1,000–4,000 per person (Tabelog, reviews).', last_checked: TODAY, items: [
      it('', '', 'Takoyaki, salt garlic', '', 'Takoyaki', 'no', 'no', 'August–October 2026.', 'shio_ninniku'),
      it('', '', 'Fried takoyaki (salt, soy sauce or sauce)', '', 'Takoyaki', 'no', 'no', 'October 2026.', 'agetako'),
      it('', '', 'Four-flavor takoyaki sampler', '', 'Takoyaki', 'no', 'no', 'September 2026.', 'sampler'),
      it('', '', 'Cheese tororo-yaki', '', 'Teppan', 'no', 'no', 'October 2026.', 'tororo'),
    ] }, {
    cuisine: 'たこ焼きと鉄板の居酒屋、TAKOTAKO KING の店 (20席、2階はテーブルに鉄板)・塩にんにくかソースのたこ焼き、揚げたこ焼き (塩、醤油、ソース)・4種の食べ比べ (2個ずつ)、16個のセット・チーズの tororo-yaki、山芋のスペシャル、海鮮ミックスのスペシャル、modern yaki・イカの足の焼き物、するめの天ぷら、特大の kara-age、チーズコーン、エリンギバター、はちみつクリームチーズ、omurice・レモンチューハイ、Nikaido ソーダハイボール',
    neighborhood: '東心斎橋2-8-28 1階 (2階あり)。心斎橋駅から3分',
    gf_detail: '実質グルテンフリーではありません。たこ焼き、揚げたこ焼き、modern yaki、揚げ物。グルテンフリーの品の記載なし。',
    vegan_detail: 'ヴィーガンではありません。たこ入りのたこ焼き、海鮮やイカの料理。',
    notes: '[たこ焼き・東心斎橋、深夜のたこ焼きとテーブルの鉄板] たこ焼きの TAKOTAKO KING の、本店の少し西の店で、18時から深夜3時まで、深夜1時でもにぎわう。2階は各テーブルに鉄板があり、温め直したり焼いたりでき、おもちゃの電車が走り、タコの形のスモークマシンも。口コミで繰り返し挙がるのは塩にんにくのたこ焼きで、熱々でカリッとした揚げたこ焼きのほうが好きという声も。4種の食べ比べもある。たこ焼き以外にもチーズの tororo-yaki、山芋や海鮮のスペシャル、イカの足の焼き物、特大の kara-age、omuriceまで。スタッフはたいてい明るいが、10月に新人で鉄板が温まらなかったという声も。テイクアウト可。',
  });
}

// ================================================================ 39チキン 日本橋本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27062849/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_39_chicken_nipponbashi', name: '39チキン 日本橋本店 (39 Chicken Nipponbashi honten)', category: 'OMNI',
    lat: 34.66767, lng: 135.50529, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the fried-chicken batter and the yangnyeom and soy sauces are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fried-chicken shop.',
    hours_raw: 'Daily 12:00–02:00 (last order 01:30); may change, so check (Tabelog). No reservations; the phone line is closed (Tabelog). Mostly takeout, with a few seats (8) and drinks outside (Tabelog; undated review); a one-drink rule for eating in was noted in 2018. Cards, e-money and QR accepted (Tabelog). Non-smoking (Tabelog).',
    hours: ALL(day(['12:00', '02:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sennichimae 1-2-8, on a shopping street near Nippombashi Stn',
    cuisine: 'Korean fried chicken, mostly takeout (8 seats) · crispy chicken, bone-in or boneless, aged 24 hours with 12 herbal ingredients (shop claim, per one review) · yangnyeom, soy and regular; half-and-half ¥1,950 (November 2025); a four-flavor set · pickled radish and a mild aurora sauce on the side · cheese balls · tteok and sausage skewers · Korean steamed egg in a stone pot',
    website: null, gmaps: gm('39チキン 日本橋本店'), menu_url: null,
    notes: "[Korean fried chicken · a takeout-first Korean chicken counter, Nippombashi] The original shop of 39 Chicken, a small Korean fried-chicken counter on a shopping street near Nippombashi, open noon to 2 am and built mostly for takeout. Chicken is fried to order, bone-in or boneless, with a crunchy coating; get it plain-crispy, yangnyeom (sweet-spicy) or soy, or half-and-half (¥1,950 in November 2025), with pickled radish on the side. A medium is plenty for two. Cheese balls, tteok-and-sausage skewers and a Korean steamed egg in a stone pot round it out. One diner found the price a bit high for takeout. Few recent reviews, so check before going.",
    chef_bio: { chef_name: null, roles: [], origin: 'The original shop of 39 Chicken; a second shop opened later (September 2020 review).', background: 'Korean fried-chicken shop (Tabelog; 2018–2025 reviews).', philosophy: null, specialty: 'Crispy and yangnyeom Korean fried chicken.',
      anecdotes: [
        { text: '"The crunchy batter was perfectly complemented by the juicy chicken flavor. [The shop says it is] aged… with 12 types of herbal ingredients for 24 hours…" — undated review, Crispy Chicken (medium, bone-in).', source: R + 'B473474247/' },
        { text: '"I ordered a half-and-half with crispy and soy sauce for JPY 1,950." — November 2025.', source: R + 'B519928768/' },
      ],
      japanese_sources_summary: '食べログ: 39チキン 日本橋本店、大阪市中央区千日前1-2-8、日本橋駅から109m、毎日12:00〜翌2:00 (L.O. 1:30)、予約不可 (電話受付なし)、カード・電子マネー・QR可、禁煙、8席、テイクアウト、デリバリー。口コミ(2018年〜2025年11月): 韓国のフライドチキン、注文を受けてから揚げる、骨つきか骨なし、12種の薬膳の材料で24時間熟成という店の説明、yangnyeom 、醤油、ハーフ&ハーフ1,950円 (2025年11月)、4種のセット、大根の漬け物とオーロラソース、チーズボール、tteokとソーセージの串、石鍋の韓国の蒸し卵、持ち帰りには少し高いという声、2号店もある。',
      confidence: 'low', sources: [TB, R + 'B351337759/', R + 'B468603768/', R + 'B473474247/', R + 'B509300259/', R + 'B516971232/', R + 'B519928768/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter; mostly takeout (reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前1-2-8',
    existence: { status: 'probable', checked: TODAY, note: 'Tabelog listing current; most recent review November 2025.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前一丁目2番8号 (go) 6m; offset 7 m south of the Tabelog point to clear Horumon Gibier Myojo (1-2-9, 9.5 m); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B519928768/', R + 'B509300259/'],
    price_note: 'Only one recent price (November 2025).', last_checked: TODAY, items: [
      it('', '', 'Half-and-half chicken (crispy and soy)', '¥1,950', 'Chicken', 'ask', 'no', 'November 2025.', 'half'),
      it('', '', 'Yangnyeom chicken', '', 'Chicken', 'ask', 'no', '2018–2020.', 'yangnyeom'),
      it('', '', 'Cheese balls', '', 'Sides', 'ask', 'no', 'July 2019.', 'cheeseball'),
    ] }, {
    cuisine: '韓国のフライドチキン、主に持ち帰り (8席)・骨つきか骨なしのクリスピーチキン、12種の薬膳の材料で24時間熟成 (口コミが伝える店の説明)・yangnyeom 、醤油、プレーン、ハーフ&ハーフ1,950円 (2025年11月)、4種のセット・大根の漬け物とマイルドなオーロラソース・チーズボール・tteok とソーセージの串・石鍋の韓国風の蒸し卵',
    neighborhood: '千日前1-2-8、日本橋駅近くの商店街',
    gf_detail: '要確認。グルテンの情報なし。衣やyangnyeom ・醤油のソースの説明なし。',
    vegan_detail: 'ヴィーガンではありません。フライドチキンの店。',
    notes: '[韓国チキン・日本橋、持ち帰り中心の韓国フライドチキン] 39チキンの本店で、日本橋駅近くの商店街にある小さな韓国フライドチキンの店。昼12時から深夜2時まで、主に持ち帰り。注文を受けてから揚げ、骨つきか骨なし、ザクザクの衣で、プレーンのクリスピー、甘辛いyangnyeom 、醤油、ハーフ&ハーフ (2025年11月で1,950円) から。大根の漬け物つき。Mサイズで2人分ほど。チーズボール、tteok とソーセージの串、石鍋の韓国風の蒸し卵も。持ち帰りには少し高いという声も。最近の口コミが少ないので、行く前に確認を。',
  });
}

save();
