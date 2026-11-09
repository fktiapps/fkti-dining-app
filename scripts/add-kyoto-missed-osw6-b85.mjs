// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 85.
//   + なごみ 煉 烏丸店 Nagomi Ren (Misaki-tuna izakaya in a machiya near Shijo-Karasuma, party courses) — rest
//   + 田中漬物舗 Tanaka Tsukemono Ho (Kyoto pickle shop since 1911, takeaway only; Greg 11-08 back-fill ruling) — rest
//   + 新三浦 Shin Miura (mizutaki chicken hot pot by the Kamogawa, summer riverside deck) — rest
//   - skip 26037196 瓢樹 (retail food shop, Greg 11-07 ruling: catering and bento only)
//   - skip 26014990 ホテルモントレ 京都 (big-chain hotel, Greg 11-08 ruling)
//   - skip 26043466 蒸キゲン～jokigen～ (THAN brand)
//   + エイト珈琲店 Eight Coffee Ten (Showa-era kissaten on Teramachi run by its master alone) — rest
//   Rest tier, nearest-first from `next rest 2000`. Every brand checked against queue-status.jsonl and the THAN brand list
//   (than.co.jp/brands, read 2026-11-08). Chain checks asked for by the coordinator:
//   なごみ 煉 — no other なごみ 煉 shop found on Tabelog, Gurunavi or Hotpepper; Hotpepper lists the same address
//   (釘隠町242) as 三崎屋 四条烏丸店, "まぐろ卸売直営店", with no sister shops named and no operating company given. Nothing sources
//   five or more shops or a large company, so it is drafted (the "烏丸店" suffix alone is not evidence of a chain).
//   新三浦 — Tabelog's name search shows 新三浦 in Hakata (honten, Tenjin), Kyoto, Osaka, Ibaraki and Tsukiji (closed). The Kyoto shop's
//   own site (sinmiura.jp) names no other shop; reviews say it was founded in the early Taisho era in the family home of actress
//   Mitsuko Mori, while Hakata's 新三浦 dates from Meiji 43. No tie between the two is sourced, so it is treated as an independent shop.
//   None of the drafted shops is in data/kyoto.json.
//   Charges: none listed on Tabelog. No halal claims; no owner deaths; single-review remarks about other diners left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-85');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26037196', 'retail food shop (Greg 11-07 ruling): 瓢樹 is now a catering and bento business — a January 2026 reviewer says the former restaurant now does catering and boxed meals, ordered for delivery; no dine-in sourced (https://www.hyoki-kyoto.com/; https://tabelog.com/en/kyoto/A2601/A260301/26037196/dtlrvwlst/B521420846/).');
skip('26014990', 'venue inside a big-chain hotel (Greg 11-08 ruling): ホテルモントレ 京都 is the Hotel Monterey hotel listing (earlier ruling on 26005628, THE LIBRARY) (https://tabelog.com/en/kyoto/A2601/A260202/26014990/).');
skip('26043466', 'THAN brand: 蒸キゲン (jokigen) is on the THAN brands page (https://www.than.co.jp/brands; https://tabelog.com/en/kyoto/A2601/A260202/26043466/).');

// ================================================================ なごみ 煉 烏丸店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26004664/'; const R = TB + 'dtlrvwlst/'; const HP = 'https://www.hotpepper.jp/strJ001126778/';
  const H = day(['17:00', '23:30']);
  put({
    id: 'kyoto_nagomi_ren_karasuma', name: 'なごみ 煉 烏丸店 (Nagomi Ren, Karasuma)', category: 'OMNI',
    lat: 35.001222, lng: 135.75859, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: courses include fried dishes, tuna karaage, wheat-gluten (fu) miso dengaku and red miso soup (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tuna courses — sashimi, yukhoe, grilled collar, negitoro rolls (2025–26 reviews).',
    hours_raw: 'Daily 17:00–23:30 (food last order 22:30, drinks 23:00); December 31 until 22:00; closed January 1 (Tabelog). Mostly courses with all-you-can-drink, ¥5,000–6,000 (2025–26 reviews); orders by QR code (April 2026). Semi-private rooms divided by curtains, sunken-kotatsu and sofa seating; 32 seats, parties up to 80 (Tabelog; July and December 2025, October 2026). Smoking allowed; no children (Tabelog). Cards (VISA, Master, AMEX); no e-money (Tabelog). A machiya on Karasuma-dori west side at Bukkoji, about three minutes from Shijo Station (Tabelog; December 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Karasuma-Bukkoji — Shijo Karasuma',
    cuisine: 'Tuna-focused izakaya in a Kyoto machiya, mostly party courses · Misaki-tuna courses with all-you-can-drink, three Kirin draft beers: three-kind sashimi, tuna yukhoe, salt-grilled tuna collar, bone-in tuna karaage, negitoro rolls, ¥5,000 for ten dishes (August and September 2026) · ¥6,000 three-hour course with medium-fatty tuna sashimi, fu dengaku, Kyoto pickles, red miso soup and dessert (December 2025) · yuba topped with salmon roe (October 2026)',
    website: null, gmaps: gm('なごみ 煉 烏丸店'), menu_url: TB,
    notes: '[Tuna izakaya · Shijo-Karasuma] A machiya izakaya near Shijo-Karasuma built around Misaki tuna and group courses: sashimi, yukhoe, a salt-grilled tuna collar each, bone-in tuna karaage and negitoro rolls, with all-you-can-drink including three Kirin draft beers, about ¥5,000–6,000. Curtained semi-private rooms. Smoking allowed; no children. Open daily to 23:30.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: an izakaya opened 8 August 2013 on Karasuma-dori at Bukkoji. Hotpepper lists the same address as 三崎屋 四条烏丸店 and describes it as run directly by a tuna wholesaler (まぐろ卸売直営店).',
      philosophy: null, specialty: 'Misaki tuna courses; salt-grilled tuna collar.',
      anecdotes: [
        { text: 'A December 2025 year-end party took the ¥6,000 three-hour course; the salt-grilled Misaki-tuna collar, one plate each, was the highlight.', source: R + 'B519778277/' },
        { text: 'A September 2025 group asked ahead for a birthday plate and, after the regular desserts, received an arranged plate of small cakes at no charge.', source: R + 'B513224067/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋、下京区烏丸通仏光寺西入釘隠町242、毎日17:00〜23:30 (料理L.O.22:30・ドリンクL.O.23:00)、12月31日は22時まで、1月1日休み、カード (VISA・Master・AMEX) 可、電子マネー不可、32席 (宴会80名)、個室あり、喫煙可、子ども不可、2013年8月8日オープン。ホットペッパー: 同じ住所で「三崎屋 四条烏丸店」、まぐろ卸売直営店。口コミ (2025年4月〜2026年10月、英語): マグロのコースと飲み放題、キリンの生ビール3種、刺身3種、ユッケ、マグロのかまの塩焼き、骨付きの唐揚げ、ねぎとろ巻き、5,000〜6,000円、QRコードで注文、カーテンで仕切った半個室、掘りごたつ、誕生日のデザートプレート、四条駅から徒歩3分。',
      confidence: 'medium', sources: [TB, HP, R + 'B504675877/', R + 'B510825726/', R + 'B513224067/', R + 'B519778277/', R + 'B524813569/', R + 'B525999188/', R + 'B534248563/', R + 'B535497705/', R + 'B538186810/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a course for a group; orders go through a QR code. Smoking is allowed and children are not admitted. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区烏丸通仏光寺西入釘隠町242',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.001222, 135.758590); cross-checked: GSI 京都府京都市下京区釘隠町242番地 (lot) 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B519778277/', R + 'B535497705/', R + 'B538186810/'],
    price_note: 'Course prices from December 2025 to October 2026, all-you-can-drink included.', last_checked: TODAY, items: [
      it('', '', 'Tuna course with all-you-can-drink (ten dishes)', '¥5,000', 'Courses', 'no', 'no', 'August and September 2026.', 'tuna_course_5000'),
      it('', '', 'Course with all-you-can-drink', '¥5,500', 'Courses', 'no', 'no', 'October 2026.', 'course_5500'),
      it('', '', 'Three-hour course with all-you-can-drink', '¥6,000', 'Courses', 'no', 'no', 'December 2025 and April 2026.', 'course_6000'),
    ] }, {
    cuisine: '京町家のマグロ中心の居酒屋、宴会コースが中心・キリンの生ビール3種の飲み放題付きの三崎マグロのコース: 刺身3種、マグロのユッケ、マグロのかまの塩焼き、骨付きのマグロの唐揚げ、ねぎとろ巻き、10品で5,000円 (2026年8月・9月)・中トロ入りの刺身、麩の田楽、京漬物、赤だし、デザートの3時間のコース6,000円 (2025年12月)・いくらをのせたゆば (2026年10月)',
    neighborhood: '烏丸仏光寺。四条烏丸',
    gf_detail: 'グルテンフリーではない。コースに揚げ物、マグロの唐揚げ、麩の味噌田楽、赤だし (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。マグロのコース。刺身、ユッケ、かまの焼き物、ねぎとろ巻き (2025〜2026年の口コミ)。',
    notes: '[マグロの居酒屋・四条烏丸] 四条烏丸近くの町家の居酒屋。三崎のマグロと宴会コースが中心で、刺身、ユッケ、一人一皿のかまの塩焼き、骨付きの唐揚げ、ねぎとろ巻きに、キリンの生ビール3種を含む飲み放題で約5,000〜6,000円。カーテンで仕切った半個室。喫煙可、子ども不可。毎日23:30まで。',
  });
}

// ================================================================ 田中漬物舗
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26027938/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://tanakatsukemono.com/';
  const H = day(['10:00', '17:30']);
  put({
    id: 'kyoto_tanaka_tsukemono_ho', name: '田中漬物舗 (Tanaka Tsukemono Ho)', category: 'OMNI',
    lat: 35.008532, lng: 135.777648, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pickles only; Nara-zuke is made with sake lees and the burdock with black mirin, and the bamboo shoots are pickled in dashi (March and April 2026). No allergen information is sourced — ask about soy sauce and other seasonings for each pickle.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Vegetable pickles, but the bamboo shoots are pickled in Kyoto-style dashi (April 2026) and other seasonings are not described; no vegan claim is sourced.',
    hours_raw: 'Takeaway only — a pickle shop, no eating in. Mon–Sat 10:00–17:30; closed Sunday (shop site; Tabelog lists to 18:00). No cards or e-money; QR accepted (Tabelog). Online and fax orders (shop site). Founded 1911 (tanakatsukemono.com); family succession not sourced. On a side street west of Higashioji, south of Sanjo, by a post office — about three minutes from the Higashiyama-Sanjo crossing (March 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashioji, south of Sanjo — Higashiyama',
    cuisine: 'Kyoto pickle shop since 1911, takeaway only · signature shiba-zuke cucumber pickles "Yamashiro no Sato" ¥540 · burdock in black mirin ¥540 · lightly pickled Senshu water eggplant ¥540 · bamboo shoots in Kyoto-style dashi ¥540 (April 2026) · Nara-zuke ¥810 (March 2026)',
    website: SITE, gmaps: gm('田中漬物舗 京都 東山'), menu_url: SITE,
    notes: '[Kyoto pickles · takeaway · Higashiyama-Sanjo] A pickle shop that has kept its noren in Higashiyama since 1911: shiba-zuke "Yamashiro no Sato", Nara-zuke, burdock, water eggplant and bamboo-shoot pickles, mostly ¥540 a pack. Takeaway only. Closed Sunday. Founded 1911 (tanakatsukemono.com); family succession not sourced.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per the shop site: 「京都・東山で明治四十四年からのれんを守る」 — a Higashiyama pickle shop since 1911. Family succession not sourced.',
      philosophy: null, specialty: 'Shiba-zuke "Yamashiro no Sato"; Nara-zuke.',
      anecdotes: [
        { text: 'A March 2026 regular buys the ¥810 Nara-zuke often, finding it lighter than most yet deep in flavour — good with unadon.', source: R + 'B524854988/' },
        { text: 'An April 2026 visitor bought four ¥540 packs — shiba-zuke, burdock, water eggplant and bamboo shoots — and noted the same pickles are sold in department-store food halls, but the shop itself is more fun.', source: R + 'B526865410/' },
      ],
      japanese_sources_summary: '公式サイト: 京都・東山で明治四十四年からのれんを守る漬物店、東山区東大路三条下がる二筋目西入る南木之元町536-2、月〜土10時〜17時30分、日曜休み、オンラインショップ・FAX注文。食べログ: カード・電子マネー不可、QR 可。口コミ (2026年3月・4月、英語): 看板はしば漬け「Yamashiro no Sato」、奈良漬810円、ごぼう、水なすの浅漬け、たけのこ各540円、東山三条の交差点から徒歩約3分、郵便局の角を西へ。家族の継承の情報はなし。',
      confidence: 'medium', sources: [SITE, TB, R + 'B524854988/', R + 'B526865410/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Takeaway only. Check the use-by dates if carrying pickles home (April 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区東大路三条下ル二筋目西入ル南木之元町536-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop site with current hours; Tabelog reviews dated March and April 2026.' },
    pin_source: `Tabelog ${TB} (35.008532, 135.777648); cross-checked: GSI 京都府京都市東山区南木之元町536番地 (lot) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524854988/', R + 'B526865410/'],
    price_note: 'Prices from March and April 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Shiba-zuke cucumber pickles "Yamashiro no Sato"', '¥540', 'Pickles', 'ask', 'ask', 'April 2026; the signature pickle.', 'shibazuke'),
      it('', '', 'Burdock pickled in black mirin', '¥540', 'Pickles', 'ask', 'ask', 'April 2026.', 'gobo'),
      it('', '', 'Lightly pickled water eggplant', '¥540', 'Pickles', 'ask', 'ask', 'April 2026.', 'mizunasu'),
      it('', '', 'Bamboo shoots pickled in Kyoto-style dashi', '¥540', 'Pickles', 'ask', 'no', 'April 2026; dashi.', 'takenoko'),
      it('', '', 'Nara-zuke', '¥810', 'Pickles', 'ask', 'ask', 'March 2026.', 'narazuke'),
    ] }, {
    cuisine: '1911年からの京漬物の店、持ち帰りのみ・看板のしば漬け「Yamashiro no Sato」540円・黒みりんのごぼう540円・泉州の水なすの浅漬け540円・京風の出汁で漬けたたけのこ540円 (2026年4月)・奈良漬810円 (2026年3月)',
    neighborhood: '東大路、三条の南。東山',
    gf_detail: '要確認。漬物のみ。奈良漬は酒かす、ごぼうは黒みりん、たけのこは出汁で漬ける (2026年3月・4月)。アレルゲンの情報はなし。漬物ごとに醤油などの調味料を確認を。',
    vegan_detail: '要確認。野菜の漬物だが、たけのこは京風の出汁で漬け (2026年4月)、ほかの調味料の情報はない。ヴィーガンの記載はない。',
    notes: '[京漬物・持ち帰り・東山三条] 1911年から東山でのれんを守る漬物店。しば漬け「Yamashiro no Sato」、奈良漬、ごぼう、水なす、たけのこの漬物、多くは1パック540円。持ち帰りのみ。日曜休み。創業1911年 (tanakatsukemono.com)、家族の継承の情報はなし。',
  });
}

// ================================================================ 新三浦
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26001166/'; const R = TB + 'dtlrvwlst/'; const SITE = 'http://www.sinmiura.jp';
  const H = day(['17:00', '21:30']);
  put({
    id: 'kyoto_shin_miura_kiyamachi', name: '新三浦 (Shin Miura)', category: 'OMNI',
    lat: 35.012241, lng: 135.771029, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the mizutaki pot includes wheat gluten (fu) and is eaten with ponzu; fried chicken is also served (2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken hot pot in a long-simmered chicken broth, finished as zosui (2024–26 reviews).',
    hours_raw: 'Mon–Sat 17:00–21:30, last entry 19:30; closed Sunday and some irregular days (shop site; Tabelog lists 16:30–22:00). Book by phone, 075-231-1297 (shop site). The summer riverside deck (noryo-yuka) runs 1 May to the end of September (shop site; in 2025 it was extended to 15 October, and an October 2025 diner ate outside). Some seating is on tatami (September 2024). Cards (VISA, Master); no e-money or QR (Tabelog). On Kiyamachi north of Oike, by the Kamogawa (Tabelog; reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi, north of Oike — Kamogawa',
    cuisine: 'Long-established mizutaki (chicken hot pot) restaurant · mizutaki course ¥5,100: appetizer, mizutaki, zosui, fruit (July 2025) · milky broth simmered for hours, first sipped with a little salt, then bone-in chicken, chicken meatballs, vegetables, fu, tofu and kudzu noodles with house ponzu (October 2024, May 2026) · zosui to finish (January 2025, August 2026) · grilled chicken with grated daikon, liver (October 2024) · Fushimi sake (May 2026)',
    website: SITE, gmaps: gm('新三浦 水炊き 木屋町 京都'), menu_url: TB,
    notes: '[Mizutaki · Kiyamachi, Kamogawa] A long-established chicken hot-pot house on Kiyamachi by the Kamogawa, said in reviews to date from the early Taisho era and to be the childhood home of actress Mitsuko Mori: a ¥5,100 mizutaki course with a milky, long-simmered broth, the staff tending the pot, and zosui to finish. Riverside deck May to September. Book by phone; last entry 19:30; closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), described as warm and friendly (May 2026)'], origin: null,
      background: 'Per reviews: a mizutaki restaurant founded in the early Taisho era, in the house where actress Mitsuko Mori grew up (October 2024, January 2025, July 2025). The shop site says it has long been known as 「鳥水炊きの新三浦」.',
      philosophy: null, specialty: 'Mizutaki course.',
      anecdotes: [
        { text: 'A July 2025 diner had the ¥5,100 mizutaki course on the riverside deck during Gion Matsuri, sipping the broth first with a little salt and finishing with zosui.', source: R + 'B510452113/' },
        { text: 'A January 2025 diner ate mizutaki in the actress’s childhood room, with shichimi from Nishiki on the table.', source: R + 'B499805852/' },
        { text: 'A May 2026 visitor, rained off the riverside deck, found the house full and the owner warm and friendly; the finishing zosui was gone in no time.', source: R + 'B528736247/' },
      ],
      japanese_sources_summary: '公式サイト: 古くから「鳥水炊きの新三浦」、17:00〜21:30 (最終入店19:30)、日曜・不定休、電話で予約、納涼床は5月1日〜9月末日 (2025年は10月15日まで延長)。食べログ: 鶏料理・水炊き、中京区木屋町通御池上ル上樵木町491、カード (VISA・Master) 可、電子マネー・QR 不可。口コミ (2024年10月〜2026年8月、英語): 大正初期の創業、女優 Mitsuko Mori の生家、水炊きのコース5,100円 (先付、水炊き、雑炊、果物)、何時間も煮込んだ白濁のスープをまず塩で、骨付きの鶏、つくね、麩、豆腐、葛きり、自家製ポン酢、鶏の大根おろし、きも、雑炊、伏見の酒、温かい店主、10月の川床。',
      confidence: 'medium', sources: [SITE, TB, R + 'B493974971/', R + 'B499805852/', R + 'B510452113/', R + 'B514760501/', R + 'B519799112/', R + 'B527677858/', R + 'B528736247/', R + 'B533314834/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book by phone; the staff cook the pot and explain the order — broth first, then chicken, then zosui. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区木屋町通御池上ル上樵木町491',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop site with current hours and riverside-deck season; Tabelog reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.012169, 135.771029); GSI matched only the town 京都府京都市中京区上樵木町 (no lot), 63m — approximate; offset 8 m north from the Tabelog point so as not to stack on 露瑚 Roko (上樵木町491-6, same lot); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B510452113/', R + 'B493974971/'],
    price_note: 'Course price from October 2024 and July 2025; reviewers report ¥6,000–9,999 per person.', last_checked: TODAY, items: [
      it('', '', 'Mizutaki course (appetizer, mizutaki, zosui, fruit)', '¥5,100', 'Courses', 'no', 'no', 'July 2025.', 'mizutaki_course'),
      it('', '', 'Grilled chicken with grated daikon', '', 'À la carte', 'ask', 'no', 'October 2024.', 'grilled_chicken_oroshi'),
      it('', '', 'Liver (kimo)', '', 'À la carte', 'ask', 'no', 'October 2023 and 2024.', 'kimo'),
    ] }, {
    cuisine: '老舗の鶏の水炊きの店・先付、水炊き、雑炊、果物の水炊きのコース5,100円 (2025年7月)・何時間も煮込んだ白濁のスープをまず少しの塩で、骨付きの鶏、つくね、野菜、麩、豆腐、葛きりを自家製ポン酢で (2024年10月・2026年5月)・しめの雑炊 (2025年1月・2026年8月)・鶏の大根おろし、きも (2024年10月)・伏見の酒 (2026年5月)',
    neighborhood: '木屋町、御池の北。鴨川',
    gf_detail: 'グルテンフリーではない。水炊きに麩が入り、ポン酢で食べる。鶏の唐揚げも (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。長時間煮込んだ鶏のスープの鍋、しめは雑炊 (2024〜2026年の口コミ)。',
    notes: '[水炊き・木屋町、鴨川] 鴨川沿い、木屋町の老舗の鶏の水炊きの店。口コミでは大正初期の創業で、女優 Mitsuko Mori が育った家。何時間も煮込んだ白濁のスープの水炊きのコース5,100円、鍋は店の人が世話をし、しめは雑炊。5月〜9月は納涼床。電話で予約、最終入店19:30、日曜休み。',
  });
}

// ================================================================ エイト珈琲店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26000458/'; const R = TB + 'dtlrvwlst/';
  const H = day(['08:00', '17:30']);
  put({
    id: 'kyoto_eight_coffee_ten', name: 'エイト珈琲店 (Eight Coffee Ten)', category: 'OMNI',
    lat: 35.01235, lng: 135.767327, cuisine_type: 'kissaten',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the food is toast sets (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: toast sets come with butter and a boiled egg (September 2025, March 2026); black coffee and iced tea are the only plainly plant-based orders.',
    hours_raw: 'Daily 8:00–17:30; closes on irregular days; may change (Tabelog). The master runs the shop alone (February 2025, September 2025, March 2026). No cards (Tabelog). No photos inside, by a sign (February 2025). A radio instead of background music (March 2026). On Teramachi-dori south of Nijo, near Kyoto Shiyakusho-mae Station (Tabelog; August 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Teramachi, south of Nijo — Kyoto City Hall',
    cuisine: 'Showa-era kissaten · toast set with salad, half a boiled egg and banana, butter and jam (September 2025, March 2026) · hot coffee ¥400 (December 2025) · iced coffee ¥450 (August 2026) · café au lait, fruity hot coffee (February 2025) · iced tea (February 2026)',
    website: null, gmaps: gm('エイト珈琲店 寺町 京都'), menu_url: TB,
    notes: '[Kissaten · Teramachi-Nijo] A long-running Showa-era coffee shop on Teramachi south of Nijo, run by its master alone, with a radio playing: coffee from ¥400 and a toast set with salad, boiled egg and banana for breakfast. Opens at 8:00. Cash only; no photos inside.',
    chef_bio: { chef_name: null, roles: ['Master (unnamed), who runs the shop alone (2025–26 reviews)'], origin: null,
      background: 'Per reviews: a long-established kissaten on Teramachi-dori (December 2025), run single-handed by an older master (September 2025, March 2026).',
      philosophy: null, specialty: 'Toast set; hot coffee.',
      anecdotes: [
        { text: 'A September 2025 breakfast visitor, finding no breakfast menu, ordered the toast set — toast with butter and jam, salad, half a boiled egg and a piece of banana — and drank the coffee black.', source: R + 'B513721228/' },
        { text: 'A December 2025 visitor remembered stopping here about 20 years earlier after early-morning pottery sales at a nearby antique shop, and found it unchanged; coffee was ¥400.', source: R + 'B518741756/' },
      ],
      japanese_sources_summary: '食べログ: 喫茶店、中京区寺町通二条下ル榎木町100-1、毎日8:00〜17:30、不定休、カード不可。口コミ (2025年2月〜2026年8月、英語): マスターが一人で営む、店内撮影禁止の貼り紙、昭和の雰囲気、BGM の代わりにラジオ、トーストセット (サラダ、ゆで卵半分、バナナ、バターとジャム)、ホットコーヒー400円、アイスコーヒー450円、カフェオレ、フルーティーなホットコーヒー、アイスティー、約20年前と変わらない店、京都市役所前駅の近く。',
      confidence: 'medium', sources: [TB, R + 'B126856375/', R + 'B501131881/', R + 'B502586469/', R + 'B513721228/', R + 'B518741756/', R + 'B524130307/', R + 'B533505278/', R + 'B534917619/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Bring cash and keep the camera away — a sign asks for no photos. The master works alone, so service is unhurried. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区寺町通二条下ル榎木町100-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.012350, 135.767327); cross-checked: GSI 京都府京都市中京区榎木町100番地 (lot) 65m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B518741756/', R + 'B533505278/', R + 'B513721228/'],
    price_note: 'Prices from December 2025 and August 2026; reviewers report under ¥1,000 per person.', last_checked: TODAY, items: [
      it('', '', 'Hot coffee', '¥400', 'Drinks', 'ask', 'ask', 'December 2025.', 'hot_coffee'),
      it('', '', 'Iced coffee', '¥450', 'Drinks', 'ask', 'ask', 'August 2026.', 'iced_coffee'),
      it('', '', 'Toast set (toast, salad, half a boiled egg, banana)', '', 'Food', 'no', 'no', 'September 2025 and March 2026.', 'toast_set'),
    ] }, {
    cuisine: '昭和の喫茶店・サラダ、ゆで卵半分、バナナ付き、バターとジャムのトーストセット (2025年9月・2026年3月)・ホットコーヒー400円 (2025年12月)・アイスコーヒー450円 (2026年8月)・カフェオレ、フルーティーなホットコーヒー (2025年2月)・アイスティー (2026年2月)',
    neighborhood: '寺町、二条の南。京都市役所前',
    gf_detail: 'グルテンフリーではない。食事はトーストセット (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。トーストセットにバターとゆで卵 (2025年9月・2026年3月)。植物性とはっきり言えるのはブラックコーヒーとアイスティーのみ。',
    notes: '[喫茶店・寺町二条] 寺町通二条下ルの昭和の雰囲気が残る喫茶店。マスターが一人で営み、ラジオが流れる。コーヒー400円から、朝はサラダ、ゆで卵、バナナ付きのトーストセット。8時開店。現金のみ、店内撮影禁止。',
  });
}

save();
