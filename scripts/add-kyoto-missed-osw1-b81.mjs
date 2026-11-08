// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 81.
//   + 鉄板居酒屋 だい Teppan Izakaya Dai (Kagoshima pork and chicken on a thick teppan, Sanjo-Keihan back street)
//   + sekka Cafe + ショールーム (marble café and showroom of a ~95-year-old stone company, lava-plate French toast)
//   + 一献 うるうる Ikken Uruuru (sake-led izakaya in an old townhouse near Higashinotoin-Matsubara)
//   - ITALIAN QUATRO 四条烏丸店: skipped (reason below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26021894, 26045018, 26016572 (skipped),
//   26023442. 金隆 (26032256) is left for the next batch.
//   queue-status.jsonl grepped for each brand (だい, sekka, QUATRO, うるうる): no earlier rulings.
//   Data check: none of the three drafted is in data/kyoto.json by name or address. ITALIAN QUATRO 京都駅前店 is in data
//   (kyoto_italian_quatro_ekimae).
//   Same-name count (same brand or operator only): one shop each; sekka is run by a stone-processing company (name not
//   given in the sources read) as its only café. Large-parent and big-chain-hotel lists checked.
//   Service charges, checked against Tabelog’s Japanese original: sekka なし (Tabelog’s English wrongly says a fee may be
//   added); none listed for the other two.
//   Other-diner remarks (Greg 2026-11-06): none used.
//   Halal: no operator in this batch claims halal.
//   JA text: 祝日 written in full.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-81');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26016572', 'ITALIAN QUATRO 四条烏丸店: brand already in data — ITALIAN QUATRO 京都駅前店 (kyoto_italian_quatro_ekimae) is in kyoto.json with the same stone-oven pizza and pasta concept (same ruling as 26004942)');

// ================================================================ 鉄板居酒屋 だい
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26021894/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '00:30']);
  put({
    id: 'kyoto_teppan_izakaya_dai', name: '鉄板居酒屋 だい (Teppan Izakaya Dai)', category: 'OMNI',
    lat: 35.009913, lng: 135.773831, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Teppan-grilled pork and chicken, teppan dashimaki, okonomiyaki, chicken sashimi; no gluten information (Tabelog; June 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Kagoshima pork and chicken, chicken and horse sashimi, liver (Tabelog; June 2026).',
    hours_raw: 'Thursday–Sunday 17:00–00:30; closed Monday–Wednesday (Tabelog). No cards or e-money (Tabelog). 10 counter seats; private hire possible (Tabelog). Non-smoking, negotiable when booking (Tabelog). On the ground floor of 本田ビル, a short walk east of exit 8 of Keihan Sanjo (Tabelog).',
    hours: { 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'East of Sanjo Keihan — 1 min from exit 8',
    cuisine: 'Pork (Chami Buta) and chicken (Sakurajima Dori) sent from Kagoshima, cooked on a 12 mm iron plate; teppan dashimaki; Kagoshima chicken sashimi, seafood and vegetables; Kyushu and Okinawa shochu; daily specials on a blackboard (Tabelog) · chicken sashimi, grilled liver and horse sashimi; okonomiyaki and teppan dishes at fair prices; a few Okinawan dishes (June 2026)',
    website: null, gmaps: gm('鉄板居酒屋 だい 三条'), menu_url: TB + 'dtlmenu/',
    notes: '[Teppan izakaya · Sanjo-Keihan, Kagoshima pork and chicken] A ten-seat counter in a back street east of Sanjo Keihan, grilling Kagoshima pork and chicken on a thick iron plate, with teppan dashimaki, chicken sashimi and Kyushu shochu. Open Thursday to Sunday till 00:30.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Tabelog’s shop text describes pork and chicken delivered directly from Kagoshima and a 12 mm iron plate. A June 2026 reviewer found the staff cheerful and friendly.',
      philosophy: null, specialty: 'Teppan-grilled Kagoshima pork; teppan dashimaki.',
      anecdotes: [
        { text: 'A June 2026 diner had a platter of chicken sashimi, grilled liver and horse sashimi, and noticed a few Okinawan dishes on the menu.', source: R + 'B530483835/' },
      ],
      japanese_sources_summary: '食べログ: 鉄板居酒屋 だい、居酒屋、左京区法林寺門前町36-3 本田ビル 1F、京阪三条駅8番出口から東へ、木〜日 17:00〜翌0:30、月〜水定休、カード・電子マネー不可、カウンター10席、貸切可、禁煙、鹿児島直送の豚 (Chami Buta) と鶏 (Sakurajima Dori) を12mmの鉄板で、鉄板のだし巻き、鹿児島の鶏刺し、九州と沖縄の焼酎、黒板の日替わり。口コミ (2026年6月、英語): 鶏刺し、レバー焼き、馬刺し、お好み焼きと鉄板焼き、沖縄料理も少し、明るく親切なスタッフ。',
      confidence: 'low', sources: [TB, R + 'B530483835/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ten-seat counter; no cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区法林寺門前町36-3 本田ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; latest review June 2026.' },
    pin_source: `Tabelog ${TB} (35.009913, 135.773831); cross-checked: GSI 京都府京都市左京区法林寺門前町36番地 (lot) 66m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No menu prices found.', last_checked: TODAY, items: [
      it('', '', 'Teppan-grilled Kagoshima pork', '', 'Teppan', 'ask', 'no', 'Tabelog.', 'pork'),
      it('', '', 'Teppan dashimaki', '', 'Teppan', 'ask', 'no', 'Tabelog.', 'dashimaki'),
      it('', '', 'Kagoshima chicken sashimi', '', 'Sashimi', 'ask', 'no', 'Tabelog; June 2026; raw chicken.', 'torisashi'),
    ] }, {
    cuisine: '鹿児島から直送の豚 (Chami Buta) と鶏 (Sakurajima Dori) を12mmの鉄板で。鉄板のだし巻き、鹿児島の鶏刺し、魚介と野菜、九州と沖縄の焼酎、黒板の日替わり (食べログ)・鶏刺し、レバー焼き、馬刺し。手頃なお好み焼きと鉄板焼き、沖縄料理も少し (2026年6月)',
    neighborhood: '三条京阪の東。8番出口から1分',
    gf_detail: '要確認。鉄板で焼く豚と鶏、鉄板のだし巻き、お好み焼き、鶏刺し。グルテンの情報はない (食べログ、2026年6月)。',
    vegan_detail: 'ヴィーガンではない。鹿児島の豚と鶏、鶏刺しと馬刺し、レバー (食べログ、2026年6月)。',
    notes: '[鉄板居酒屋・三条京阪、鹿児島の豚と鶏] 三条京阪の東の路地にあるカウンター10席の店。鹿児島の豚と鶏を厚い鉄板で焼き、鉄板のだし巻き、鶏刺し、九州の焼酎。木曜から日曜、深夜0時半まで。',
  });
}

// ================================================================ sekka Cafe + ショールーム
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26045018/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:30', '18:00']);
  put({
    id: 'kyoto_sekka_cafe_showroom', name: 'sekka Cafe + ショールーム (sekka Cafe + Showroom)', category: 'OMNI',
    lat: 35.009737, lng: 135.763507, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. French toast of Kyoto Danish bread, afternoon tea and brunch sets with deli items, soup and ice cream; no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan dishes are named; the French toast comes with butter and ice cream (2026 reviews).',
    hours_raw: 'Monday, Tuesday, Friday–Sunday and holidays 10:30–18:00 (L.O. food 17:00, drinks 17:30); closed Wednesday and Thursday unless a holiday (Tabelog). No service charge (Tabelog, original なし; its English wrongly says a fee may be added). Reservations accepted (September 2026). Cards, IC, e-money and QR incl. Alipay and WeChat Pay (Tabelog). 14 seats, incl. a spacious private area (Tabelog; October 2026). On the ground floor of a machiya-style building on Aneyakoji, 3 min from Karasuma-Oike (Tabelog; October 2026). Opened summer 2026 (Tabelog).',
    hours: { 0: H, 1: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Aneyakoji near Karasuma-Oike — 3 min walk',
    cuisine: 'A “marble concept café” of a stone company of nearly 100 years: food served on stone and marble plates in a showroom of marble furniture and art (Tabelog; August 2026) · signature French toast of Kyoto Danish bread, crisped then baked on a lava-stone plate, ¥1,050, with toppings such as vanilla ice cream or chocolate (Tabelog; October 2026) · afternoon tea on stone plates; brunch and lunch sets; homemade drinks, deli, soup, ice cream (June–October 2026) · lattes (October 2026)',
    website: null, gmaps: gm('sekka Cafe 京都 姉小路'), menu_url: TB + 'dtlmenu/',
    notes: '[Café · Aneyakoji, a marble showroom café] A calm café inside the marble showroom of a stone company of nearly a century, on Aneyakoji: thick French toast of Kyoto Danish bread baked on a lava-stone plate (¥1,050), afternoon tea and brunch sets on stone plates, among marble tables and art that are also for sale. Closed Wednesday and Thursday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Tabelog’s shop text says the café is brought by a stone-processing company with nearly 100 years of experience; an August 2026 reviewer says the company has worked on important cultural properties and is about 95 years old. An October 2026 group was greeted by the owner.',
      philosophy: 'Plates of natural stone said to bring out the taste of the food (August 2026).', specialty: 'Lava-stone French toast.',
      anecdotes: [
        { text: 'An October 2026 visitor bought a marble coaster after the staff explained the stone products.', source: R + 'B537191495/' },
        { text: 'During Silver Week in September 2026, with every café nearby full, the staff found a seat for a reservation.', source: R + 'B535852061/' },
      ],
      japanese_sources_summary: '食べログ: sekka Cafe + ショールーム、カフェ・スイーツ・ジェラート、中京区木之下町299、烏丸御池駅から徒歩3分、月・火・金〜日・祝日 10:30〜18:00 (L.O.料理17:00、飲物17:30)、水・木定休 (祝日は営業)、サービス料なし、カード・電子マネー・QR可、14席、2026年夏、創業約100年の石材加工会社による「大理石のコンセプトカフェ」、溶岩石の熱で焼くふわふわのフレンチトースト、石の皿のアフタヌーンティー。口コミ (2026年、英語): 姉小路の町家風のビル1階、大理石の家具と絵画のショールーム、京都のデニッシュ食パンを溶岩プレートで焼くフレンチトースト1,050円、バニラアイスやチョコのトッピング、アフタヌーンティーとブランチセット、自家製ドリンク、デリ、スープ、大理石のコースター、店主のもてなし。',
      confidence: 'medium', sources: [TB, R + 'B531099290/', R + 'B534461817/', R + 'B535852061/', R + 'B536567918/', R + 'B536780343/', R + 'B536802075/', R + 'B537191495/', R + 'B537204053/', R + 'B538044029/', R + 'B538126518/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Calm café and showroom; staff explain the stone; no service charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区木之下町299',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009737, 135.763507); cross-checked: GSI 京都府京都市中京区木之下町299番地 (lot) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536567918/', R + 'B538126518/'],
    price_note: 'French-toast price from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lava-stone French toast', '¥1,050', 'Café', 'no', 'no', 'October 2026.', 'frenchtoast'),
      it('', '', 'Afternoon tea set', '', 'Café', 'ask', 'no', 'June and October 2026.', 'aftea'),
      it('', '', 'Brunch set', '', 'Café', 'ask', 'ask', 'October 2026.', 'brunch'),
    ] }, {
    cuisine: '創業約100年の石材会社の「大理石のコンセプトカフェ」。大理石の家具や絵画のショールームで、石や大理石の皿で出す (食べログ、2026年8月)・名物は京都のデニッシュ食パンを表面を焼いてから溶岩プレートでオーブン焼きするフレンチトースト1,050円、バニラアイスやチョコのトッピング (食べログ、2026年10月)・石の皿のアフタヌーンティー、ブランチやランチのセット、自家製ドリンク、デリ、スープ、アイス (2026年6〜10月)・ラテ (2026年10月)',
    neighborhood: '烏丸御池の近くの姉小路。徒歩3分',
    gf_detail: '要確認。京都のデニッシュ食パンのフレンチトースト、デリやスープ、アイスのアフタヌーンティーとブランチ。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: '要確認。ヴィーガンの品は書かれておらず、フレンチトーストはバターとアイス添え (2026年の口コミ)。',
    notes: '[カフェ・姉小路、大理石のショールームのカフェ] 創業約100年の石材会社の大理石のショールームの中にある落ち着いたカフェ。京都のデニッシュ食パンを溶岩プレートで焼く厚いフレンチトースト (1,050円)、石の皿のアフタヌーンティーやブランチ。大理石のテーブルや絵画は購入もできる。水・木定休。',
  });
}

// ================================================================ 一献 うるうる
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26023442/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_ikken_uruuru', name: '一献 うるうる (Ikken Uruuru)', category: 'OMNI',
    lat: 34.998974, lng: 135.761276, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tofu and yuba dishes, smoked eel, sashimi, dashimaki, twice-fried kara-age; no gluten information (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tofu and yuba dishes are a speciality (Tabelog), but nothing is said about dashi; most dishes include fish or meat (2025–2026 reviews).',
    hours_raw: '17:00–23:00 daily (L.O. food 22:00, drinks 22:30); closed on irregular days (Tabelog). Reservations recommended (July 2026). Cards, e-money and QR (Tabelog). 38 seats over two floors, with a private room for 10–20 (Tabelog; February 2026). Non-smoking (Tabelog). In a renovated old townhouse down narrow alleys between Shijo and Gojo, near Higashinotoin-Matsubara, about 10 min from Karasuma/Shijo (Tabelog; November 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo–Gojo, near Higashinotoin-Matsubara — 10 min from Karasuma/Shijo',
    cuisine: 'A sake-lover’s izakaya with many sakes, some off the menu, served in small ochoko you choose, and an all-you-can-drink sake course (2025–2026) · tofu dishes (Tabelog) · obanzai starter, smoked eel, sashimi, beef-tendon tamagoyaki, big kara-age (November 2025) · Kyoto yuba dishes; pickled daikon with plum paste (February 2026) · twice-fried kara-age; ochoko pudding (July 2026) · a staff member described as a sake sommelier who visits breweries (March 2026)',
    website: null, gmaps: gm('一献 うるうる'), menu_url: TB + 'dtlmenu/',
    notes: '[Sake izakaya · Shijo–Gojo backstreets, an old townhouse] A two-floor sake izakaya in a renovated townhouse down narrow alleys, where knowledgeable staff pour from a long list — often off-menu — into ochoko you pick, with yuba and tofu dishes, smoked eel and crisp kara-age. All-you-can-drink sake courses for groups. Upstairs can get hot in summer.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Reviewers describe kind, sake-savvy staff, including someone who visits breweries (March and July 2026); a local regular has come for over a decade (March 2026).',
      philosophy: null, specialty: 'Sake pairings; yuba and tofu dishes.',
      anecdotes: [
        { text: 'A group has held its annual drinking party here for more years than anyone remembers (August 2026).', source: R + 'B490523848/' },
        { text: 'The menus are made from record album covers, and even the creaky toilet door adds to the old-house charm (November 2025).', source: R + 'B517228660/' },
        { text: 'An August 2026 company party found the upstairs room scorching in summer.', source: R + 'B534630733/' },
      ],
      japanese_sources_summary: '食べログ: 一献 うるうる、居酒屋・豆腐料理・日本酒バー、下京区燈籠町東洞院松原東入ル、阪急烏丸駅・地下鉄四条駅から徒歩10分、毎日 17:00〜23:00 (L.O.料理22:00、飲物22:30)、不定休、カード・電子マネー・QR可、38席、10〜20名の個室、禁煙。口コミ (2025〜2026年、英語): 日本酒好きの店、メニューにない酒も、選べるお猪口、日本酒の飲み放題コース、おばんざいのお通し、燻製の鰻、刺身、牛すじの卵焼き、大きな唐揚げ、湯葉料理、梅肉の沢庵、二度揚げの唐揚げ、お猪口プリン、レコードジャケットのメニュー、町家を改装、2階は夏は暑い。',
      confidence: 'medium', sources: [TB, R + 'B490523848/', R + 'B517228660/', R + 'B518618135/', R + 'B520033588/', R + 'B522882706/', R + 'B525645562/', R + 'B531661345/', R + 'B532529907/', R + 'B534630733/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff recommend sake to your taste.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区燈籠町東洞院松原東入ル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (34.998974, 135.761276); the address has no lot number and GSI gives only the town 京都府京都市下京区燈籠町 (57 m); OSM reverse gives 石不動之町, not 燈籠町 — kept the Tabelog point, marked approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B517228660/', R + 'B532529907/'],
    price_note: 'No menu prices found.', last_checked: TODAY, items: [
      it('', '', 'All-you-can-drink sake course', '', 'Courses', 'ask', 'no', 'December 2025; August 2026.', 'nomihodai'),
      it('', '', 'Smoked eel', '', 'Small plates', 'ask', 'no', 'November 2025.', 'smokedeel'),
      it('', '', 'Twice-fried kara-age', '', 'Fried', 'no', 'no', 'July 2026.', 'karaage'),
      it('', '', 'Ochoko pudding', '', 'Dessert', 'ask', 'no', 'July 2026.', 'pudding'),
    ] }, {
    cuisine: '日本酒好きの居酒屋。メニューにない酒も多く、選べるお猪口で、日本酒の飲み放題コースも (2025〜2026年)・豆腐料理 (食べログ)・おばんざいのお通し、燻製の鰻、刺身、牛すじの卵焼き、大きな唐揚げ (2025年11月)・京都の湯葉料理、梅肉をのせた沢庵 (2026年2月)・二度揚げの唐揚げ、お猪口プリン (2026年7月)・酒蔵を回る詳しいスタッフ (2026年3月)',
    neighborhood: '四条と五条の間、東洞院松原の近く。烏丸・四条から徒歩10分',
    gf_detail: '要確認。豆腐と湯葉の料理、燻製の鰻、刺身、だし巻き、二度揚げの唐揚げ。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。豆腐と湯葉の料理が得意 (食べログ) だが、出汁については書かれておらず、ほとんどに魚や肉 (2025〜2026年の口コミ)。',
    notes: '[日本酒の居酒屋・四条と五条の路地、古い町家] 細い路地の奥、改装した町家の2階建ての日本酒居酒屋。詳しいスタッフがメニューにない酒も含めて好みのお猪口に注いでくれる。湯葉と豆腐の料理、燻製の鰻、カリッとした唐揚げ。団体には日本酒の飲み放題コース。夏の2階は暑くなることも。',
  });
}

save();
