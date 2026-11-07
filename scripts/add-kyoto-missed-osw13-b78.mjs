// Kyoto priority (kyoto-missed), worker osw13, batch 78 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: ミリネヤンコプチャン, 花おおぎ, 藁焼きと水炊き 葵, ふじ寅.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-78');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26044932', 'chain: スター食堂 總本店 — スター食堂株式会社 lists six スター食堂-named shops (總本店, the former ウイズユー, 京都駅店, 烏丸分店, 髙島屋京都店 deli, 御幸町 take-out) among its fourteen (star-kyoto.co.jp shop list); 5+ same-name (Greg ruling 2026-11-05; coordinator 2026-11-07)');
skip('26033118', 'chain: お好み焼は ここやねん 四条河原町店 — a Kyoto-born okonomiyaki chain with four shops in the Kyoto crawl (四条大宮, 四条河原町, 三条高倉, 京都ポルタ) plus Kadoma, Minakuchi, Kashihara-jingu-mae, Hankyu Ibaraki, Ikawadani, Iwade, Seika and Muko-machi (EPARK, Retty, Hot Pepper, Gurunavi); 5+ same-name (Greg ruling 2026-11-05)');

// ================================================================ ミリネヤンコプチャン
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26034984/'; const R = TB + 'dtlrvwlst/';
  const W = day(['16:00', '23:00']), E = day(['11:30', '23:00']);
  put({
    id: 'kyoto_millennium_gopchang', name: 'ミリネヤンコプチャン (Millennium Gopchang)', category: 'OMNI',
    lat: 35.001671, lng: 135.766827, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tare-marinated offal and galbi, cold noodles, fried rice (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef and pork offal, pork galbi, octopus (2026 reviews).',
    hours_raw: 'Tabelog: Mon–Fri 16:00–23:00; Sat and Sun 11:30–23:00. Reservations taken — mostly full with bookings even on weekdays (June 2026). Staff grill everything at the table (2026 reviews). Counter seating; smoky from the grills (August 2026); non-smoking (Tabelog). Cash only: no cards, e-money or QR (Tabelog). About 8–10 min walk from Kyoto-Kawaramachi exit 9.',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'South of Shijo, Teramachi–Kawaramachi — 8–10 min walk from Kyoto-Kawaramachi Stn',
    cuisine: 'A Busan-style gopchang (offal) grill that looks and feels like a Korean street stall, part of a restaurant group (2026 reviews) · beef and pork horumon grilled on the teppan with tare; bone-in pork shoulder galbi; beef tongue (2026) · baby octopus (nakji) when available; perilla and lettuce wraps; several dipping sauces (2026) · cold noodles and fried rice to finish; Chamisul soju (2026)',
    website: null, gmaps: gm('ミリネヤンコプチャン 京都'), menu_url: null,
    notes: '[Korean offal grill · south of Shijo, a Busan gopchang stall] A loud, smoky Korean horumon grill near Teramachi that feels like a Busan street stall: staff grill beef and pork offal, bone-in pork galbi and baby octopus at your table, with perilla wraps, cold noodles and soju. Usually full of bookings. One diner found the kimchi sour and the cold-noodle broth too salty (May 2026). Cash only.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Reviewers in 2026 describe a Korean-styled room and staff, a lively full house, smoke from the grills, and staff who do all the grilling; a May 2026 reviewer calls it a restaurant "from the group", and a September 2026 visitor says it faithfully recreates a Busan gopchang spot. The group and its other shops were not identified.',
      philosophy: null,
      specialty: 'Beef and pork horumon; bone-in pork galbi.',
      anecdotes: [
        { text: 'May 2026: "the kimchi was not good. It was sour and salty… The cold noodles… It was salty. More like saltwater than broth."', source: R + 'B527787661/' },
        { text: 'September 2026: "This restaurant perfectly recreates a gopchang (grilled intestines) spot from Busan."', source: R + 'B535492388/' },
        { text: 'May 2026: "The staff grills everything for you, which adds to the overall atmosphere."', source: R + 'B441908573/' },
      ],
      japanese_sources_summary: '食べログ: ミリネヤンコプチャン、韓国料理・焼肉・ホルモン、下京区中之町558、京都河原町駅から徒歩10分、月〜金 16:00〜23:00・土日 11:30〜23:00、予約可、禁煙、カード・電子マネー・QR不可。口コミ (2026年5〜9月、英語・日本語): 韓国の屋台のような焼肉店、いつも満席で活気、店員がすべて焼く、牛と豚のホルモン (タレ)、骨付き豚肩ロース、牛タン、テナガダコ、エゴマの葉、つけだれいろいろ、冷麺と炒飯、チャミスル、グループの店、釜山のコプチャン屋の再現、キムチが酸っぱくしょっぱく冷麺のスープが塩辛いという声、骨付き肉を生焼けで先に切られて残念という声。',
      confidence: 'medium', sources: [TB, R + 'B441908573/', R + 'B518480934/', R + 'B527436879/', R + 'B527787661/', R + 'B528943710/', R + 'B529867346/', R + 'B530484872/', R + 'B534225537/', R + 'B534676749/', R + 'B534717033/', R + 'B535492388/', R + 'B536212333/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff grill at the table; cash only; book.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区中之町558',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.001671, 135.766827); cross-checked: GSI 京都府京都市下京区中之町 (town only, no lot) 37m — marked approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530484872/'],
    price_note: 'No prices in the sources; about ¥3,000–7,000 a head (2026 reviews).', last_checked: TODAY, items: [
      it('', '', 'Beef and pork horumon (tare)', null, 'Grill', 'no', 'no', 'May, August 2026.', 'horumon'),
      it('', '', 'Bone-in pork galbi', null, 'Grill', 'no', 'no', 'June 2026.', 'galbi'),
      it('', '', 'Cold noodles', null, 'Finish', 'no', 'no', 'May, June 2026.', 'naengmyeon'),
    ] }, {
    cuisine: '韓国の屋台のような釜山風のコプチャン (ホルモン) 焼きの店。グループの店 (2026年の口コミ)・鉄板で焼く牛と豚のホルモンのタレ、骨付き豚肩ロースのカルビ、牛タン (2026年)・入荷があればテナガダコ、エゴマの葉やサンチュで包む、つけだれいろいろ (2026年)・締めの冷麺と炒飯、チャミスル (2026年)',
    neighborhood: '四条の南、寺町と河原町の間。京都河原町駅から徒歩8〜10分',
    gf_detail: 'グルテンフリーではない: タレ漬けのホルモンとカルビ、冷麺、炒飯 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 牛と豚のホルモン、豚カルビ、タコ (2026年の口コミ)。',
    notes: '[韓国のホルモン焼き・四条の南、釜山のコプチャン屋台] 寺町近くのにぎやかで煙のこもる韓国のホルモン焼きの店で、釜山の屋台のよう。牛と豚のホルモン、骨付き豚カルビ、テナガダコを店員が卓で焼き、エゴマの葉で包み、冷麺と焼酎で。予約でいつも満席。キムチが酸っぱく冷麺のスープが塩辛いという声も (2026年5月)。現金のみ。',
  });
}

// ================================================================ 花おおぎ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26041716/'; const R = TB + 'dtlrvwlst/';
  const W = day(['18:00', '23:00']), U = day(['17:30', '22:00']);
  put({
    id: 'kyoto_hana_oogi_kiyamachi', name: '花おおぎ (Hana Oogi)', category: 'OMNI',
    lat: 35.001027, lng: 135.769413, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: mochi dishes with tempura bits, soy-based sauces and zoni soups (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, cod-roe mochi, dashi zoni (2024–2026 reviews).',
    hours_raw: 'Tabelog: Mon, Wed–Sat and nights around holidays 18:00–23:00 (last order 22:30); Sun and holidays 17:30–22:00; closed Tuesday (open on Mondays in long holidays). Reservations taken; 30 minutes late without word counts as a cancellation; course bookings cannot be switched to à la carte on arrival. Seat charge ¥700 and 10% service — Tabelog, Japanese original 「席料700円 サービス料10%」. 24 seats: 4 at the counter, 20 at tables; an upstairs tatami room (courses only, room fee) for 10–20. Non-smoking. Menus in English and Chinese; children and strollers welcome; BYO for a fee. Cards, transit IC, QR. In a townhouse by the Takase river on Kiyamachi above Bukkoji.',
    hours: { 0: W, 2: W, 3: W, 4: W, 5: W, 6: U }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi above Bukkoji, by the Takase river — 10 min walk from Shijo-Kawaramachi',
    cuisine: 'Freshly made mochi dishes and Kyoto small plates in a townhouse by the Takase river (2024–2026 reviews) · mochi in many flavours: cod-roe mochi; natto mochi with tempura bits; zoni to finish in clear soup or white miso (2024–2026) · sashimi platters (squid, salmon), grilled dishes, ochazuke with rice crackers (2024–2026) · a wide drinks list',
    website: null, gmaps: gm('花おおぎ 木屋町 天王町'), menu_url: null,
    notes: '[Mochi and Kyoto cooking · Kiyamachi by the Takase, a mochi family\'s successor] A townhouse on the Takase river run by a grandson of the old mochi restaurant Kitamura, keeping its freshly pounded mochi — cod-roe, natto, and zoni in clear or white-miso soup — alongside sashimi and seasonal plates. A reviewer met a Shimabara tayuu at the table (October 2026). ¥700 seat charge and 10% service. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source; run by a grandson of the former Kitamura (August 2024 review)'], origin: null,
      background: 'Per an August 2024 reviewer, it is run by the son of the eldest daughter of the former mochi restaurant "Kitamura", carrying on its flavours; an April 2026 diner\'s family had been regulars there. An October 2026 reviewer, invited by a regular, describes a townhouse by the Takase river where a long-serving Shimabara tayuu, Hanaogi, joined the table to talk about the old customs, and staff who asked about dislikes in advance.',
      philosophy: null,
      specialty: 'Freshly made mochi; zoni.',
      anecdotes: [
        { text: 'October 2026: "When I mentioned that I wasn\'t fond of cucumbers, they made sure to set aside the cucumbers from the appetizer."', source: R + 'B537510627/' },
        { text: 'December 2024: "Choosing between clear soup and white miso for the zoni soup at the end was quite difficult, so I ended up trying both."', source: R + 'B497704947/' },
      ],
      japanese_sources_summary: '食べログ: 花おおぎ、日本料理、下京区木屋町通仏光寺上る天王町157-8、祇園四条・河原町から徒歩10分、月水木金土・祝前日・祝後日 18:00〜23:00 (L.O. 22:30)・日祝 17:30〜22:00、火曜休み (連休中の月曜は営業)、予約可、30分連絡なしはキャンセル、コース予約は来店後の変更不可、原文で「席料700円 サービス料10%」、24席 (カウンター4、テーブル20)、2階の座敷 (コースのみ、部屋代別)、禁煙、英語・中国語メニュー、子供・ベビーカー可、持ち込み料あり、カード・電子マネー・QR可。口コミ (2024年8月〜2026年10月、英語): 元の餅料理の店 Kitamura の長女の息子が営む、つきたての餅、たらこ餅、納豆餅と天かす、締めのお雑煮 (すまし・白味噌)、刺身の盛り合わせ (いか、サーモン)、焼き物、あられの茶漬け、飲み物が豊富、高瀬川沿いの町家、島原の Hanaogi 太夫が席で話をしてくれたという声、苦手なものを事前に聞く。',
      confidence: 'low', sources: [TB, R + 'B491050340/', R + 'B497704947/', R + 'B501978252/', R + 'B517538745/', R + 'B520138381/', R + 'B536730175/', R + 'B537510627/'] },
    cultural_comfort: { level: 'english', note: 'English and Chinese menus; ¥700 seat charge and 10% service.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区木屋町通仏光寺上る天王町157-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.001004, 135.769429); cross-checked: GSI 京都府京都市下京区天王町157番地 (lot) 47m; offset about 3 m north-northwest because kyoto_oden_kappo_kanoya sat 5.1 m from the Tabelog point (now 8.1 m); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536730175/', R + 'B497704947/'],
    price_note: 'No prices in the sources; plus ¥700 seat charge and 10% service.', last_checked: TODAY, items: [
      it('', '', 'Cod-roe mochi', null, 'Mochi', 'no', 'no', 'October 2026.', 'mochi'),
      it('', '', 'Zoni (clear soup or white miso)', null, 'Finish', 'ask', 'no', 'December 2024.', 'zoni'),
    ] }, {
    cuisine: '高瀬川沿いの町家で、つきたての餅料理と京都の小皿 (2024〜2026年の口コミ)・いろいろな味の餅。たらこ餅、天かすの納豆餅、締めはすましか白味噌のお雑煮 (2024〜2026年)・刺身の盛り合わせ (いか、サーモン)、焼き物、あられの茶漬け (2024〜2026年)・飲み物もいろいろ',
    neighborhood: '木屋町仏光寺上る、高瀬川沿い。四条河原町から徒歩10分',
    gf_detail: 'グルテンフリーではない: 天かす入りの餅料理、醤油系のたれ、お雑煮 (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 刺身、たらこ餅、出汁のお雑煮 (2024〜2026年の口コミ)。',
    notes: '[餅と京料理・木屋町の高瀬川沿い、餅料理の店の後継] 元の餅料理の店 Kitamura の孫が営む高瀬川沿いの町家。つきたての餅をたらこや納豆で、締めはすましか白味噌のお雑煮、刺身や季節の小皿も。島原の太夫が席に来たという声も (2026年10月)。席料700円とサービス料10%。火曜休み。',
  });
}

// ================================================================ 藁焼きと水炊き 葵
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26034606/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:00', '23:00']), F = day(['17:00', '24:00']);
  put({
    id: 'kyoto_warayaki_mizutaki_aoi', name: '藁焼きと水炊き 葵 (Warayaki to Mizutaki Aoi)', category: 'OMNI',
    lat: 35.005254, lng: 135.771189, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: ponzu and soy-based warayaki, yuba rolls, course dishes (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken mizutaki, straw-seared fish and beef, duck (2026 reviews).',
    hours_raw: 'Tabelog: Sun–Thu 17:00–23:00 (last orders food 22:00, drinks 22:30); Fri and Sat 17:00–24:00; open all year. Reservations taken; select a kawadoko (summer river-terrace) seat when booking — 1 May to 30 September, ¥1,000 extra a seat, moved indoors if it rains. Appetiser charge ¥500 (plus a ¥500 seat charge 28 December–3 January) — Tabelog, Japanese original 「お通し代 500円 ※(年末年始12/28~1/3は席料+500円)」. 64 seats; private rooms for 2–8; a floor for up to 20. Non-smoking. Cards and e-money; no QR. On Pontocho with a view of the Kamo River. Opened 5 October 2020 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: F, 5: F, 6: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho, Kamo-River side — 3 min walk from Gion-Shijo / Hankyu Kawaramachi',
    cuisine: 'Straw-seared warayaki and chicken mizutaki with Kyoto vegetables, overlooking the Kamo River (2026 reviews) · warayaki three-kind platter; seared beef sashimi; a grilled-beef appetiser seared at the table; negitoro yuba rolls (2026) · chicken mizutaki hot pot; obanzai; duck dishes; chilled tofu (2026) · "Aoi" course ¥7,500 (April 2026) and courses with all-you-can-drink; summer kawadoko seats over the river',
    website: null, gmaps: gm('藁焼きと水炊き 葵 先斗町'), menu_url: null,
    notes: '[Warayaki and mizutaki · Pontocho, river views and a summer kawadoko] A Pontocho izakaya with Kamo River views and a summer river terrace: straw-seared fish and beef, chicken mizutaki and Kyoto obanzai, in reasonably priced courses for the area. Reviewers split on the mizutaki (rich, May and June 2026; no umami, April 2026); portions run small and the terrace can be buggy or rained off. ¥500 appetiser charge; ¥1,000 extra for a kawadoko seat.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 5 October 2020 (Tabelog). Reviewers in 2026 describe a calm, Kyoto-feeling restaurant with window seats and a private room on the Kamo River, a summer kawadoko, smooth moves indoors when it rains, and modest portions at prices reasonable for Pontocho.',
      philosophy: null,
      specialty: 'Warayaki; chicken mizutaki.',
      anecdotes: [
        { text: 'April 2026: "Everything was delicious except for the Mizutaki… I couldn\'t taste the umami at all."', source: R + 'B525477445/' },
        { text: 'August 2026: "I originally booked a seat by the river, but it was infested with bugs, so I switched to an indoor table… the service was a bit disappointing."', source: R + 'B536186411/' },
        { text: 'September 2026: "I recommend choosing a la carte drinks over the all-you-can-drink option, as there are many varieties available."', source: R + 'B537998962/' },
      ],
      japanese_sources_summary: '食べログ: 藁焼きと水炊き 葵、居酒屋・日本料理・郷土料理、中京区河原町通四条上る松本町166、祇園四条駅・阪急河原町駅から徒歩3分、日〜木 17:00〜23:00・金土 17:00〜24:00、年中無休、予約可、納涼床は予約時に選択 (5月1日〜9月30日、席料1,000円、雨天は店内)、原文で「お通し代 500円 ※(年末年始12/28~1/3は席料+500円)」、64席、個室 (2〜8名)、20名までのフロア貸切、禁煙、カード・電子マネー可、QR不可、2020年10月5日オープン。口コミ (2026年2〜10月、英語): 藁焼きの3種盛り、牛の炙り刺し、卓で炙る牛のお通し、ねぎとろの湯葉巻き、鶏の水炊き、おばんざい、鴨、冷奴、葵コース7,500円、飲み放題付きのコース、鴨川の見える席と個室、納涼床、水炊きにうまみがないという声、床は虫が多く接客が残念という声、量は少なめ、先斗町にしては手頃。',
      confidence: 'medium', sources: [TB, R + 'B456234227/', R + 'B523237643/', R + 'B524296050/', R + 'B525477445/', R + 'B527884749/', R + 'B534206376/', R + 'B535061140/', R + 'B535069157/', R + 'B536186411/', R + 'B537457982/', R + 'B537876824/', R + 'B537998962/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'River views; kawadoko seats ¥1,000 extra in summer; ¥500 appetiser charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町通四条上る松本町166',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005254, 135.771189); cross-checked: GSI 京都府京都市中京区松本町166番地 (lot) 37m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525477445/'],
    price_note: 'Course price from an April 2026 review.', last_checked: TODAY, items: [
      it('', '', '"Aoi" course (appetisers, warayaki, chilled tofu, mizutaki)', '¥7,500', 'Course', 'no', 'no', 'April 2026.', 'izakaya_course'),
      it('', '', 'Warayaki, three kinds', null, 'Warayaki', 'ask', 'no', 'February, October 2026.', 'warayaki'),
    ] }, {
    cuisine: '鴨川を見ながら、藁焼きと鶏の水炊きと京野菜 (2026年の口コミ)・藁焼きの3種盛り、牛の炙り刺し、卓で炙る牛のお通し、ねぎとろの湯葉巻き (2026年)・鶏の水炊き、おばんざい、鴨料理、冷奴 (2026年)・「葵コース」7,500円 (2026年4月) や飲み放題付きのコース。夏は川の上の納涼床',
    neighborhood: '先斗町、鴨川側。祇園四条駅・阪急河原町駅から徒歩3分',
    gf_detail: 'グルテンフリーではない: ポン酢や醤油の藁焼き、湯葉巻き、コースの料理 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 鶏の水炊き、藁焼きの魚や牛、鴨 (2026年の口コミ)。',
    notes: '[藁焼きと水炊き・先斗町、鴨川の眺めと夏の床] 鴨川の見える先斗町の居酒屋で、夏は納涼床。藁焼きの魚や牛、鶏の水炊き、京都のおばんざいを、先斗町にしては手頃なコースで。水炊きは評価が分かれ (濃厚という声 2026年5・6月、うまみがないという声 2026年4月)、量は少なめ、床は虫や雨で使えないことも。お通し500円、床は席料1,000円。',
  });
}

// ================================================================ ふじ寅
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26037984/'; const R = TB + 'dtlrvwlst/';
  const A = day(['11:00', '16:30'], ['17:00', '22:00']), B = day(['11:00', '17:30']);
  put({
    id: 'kyoto_gion_fujitora', name: 'ふじ寅 (Gion Fujitora)', category: 'OMNI',
    lat: 35.002319, lng: 135.771743, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: seiro-steamed vegetables, Kyoto pork and rice are wheat-free in themselves, but seven condiments, steamed buns and sweets come with them (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: steamed sets include Kyoto pork, salmon or other meat (Tabelog; 2026 reviews).',
    hours_raw: 'Tabelog: Mon, Fri, Sat, Sun and holidays 11:00–16:30 and 17:00–22:00; Tue and Thu 11:00–17:30; closed Wednesday (open if a holiday). Lunch from 11:00, tea from 14:00, dinner from 17:00. Book through TableCheck (Instagram or Google Maps links) or by phone — often full (July 2026). 25 seats on tatami, with private rooms and a courtyard. Non-smoking. Children welcome — kids\' menu, children\'s utensils, stroller storage. Cards (incl. UnionPay), transit IC and e-money; no QR. In a renovated 100-year-old townhouse on Kawabata-dori, 1–2 min from Gion-Shijo Stn. Opened 7 July 2022 (Tabelog).',
    hours: { 0: A, 1: B, 3: B, 4: A, 5: A, 6: A }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawabata-dori, Gion-Shijo — 1–2 min walk from Gion-Shijo Stn',
    cuisine: 'Seiro-steamed Kyoto vegetables and pork in a 100-year-old townhouse, plus matcha sweets (Tabelog; 2026 reviews) · lunch: "seasonal vegetable seiro" of meat, vegetables and rice with seven condiments, ¥2,750 (September 2026) · dinner: seiro courses of seasonal vegetables and Kyoto pork, salt-koji salmon; local sake and craft beer (Tabelog; July–August 2026) · tea time: "Tora parfait", Tora monaka with salted bean paste, yuzu and matcha mousse, steamed buns (2026)',
    website: null, gmaps: gm('ふじ寅 祇園 宮川筋'), menu_url: null,
    notes: '[Seiro steaming · Gion-Shijo, a townhouse by the Kamo] A renovated century-old townhouse on Kawabata-dori, a minute from Gion-Shijo Station: bamboo-steamed seasonal vegetables and Kyoto pork with seven condiments at lunch and dinner, then tiger-themed parfaits and monaka at tea time, in tatami rooms around a courtyard. Book — often full. One diner felt rushed as steamers were cleared mid-meal (July 2026). Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 7 July 2022 (Tabelog); per its Tabelog text, a renovated 100-year-old townhouse serving seiro-mushi courses of high-quality seasonal vegetables and Kyoto pork, with tatami seats, private rooms and a courtyard. Reviewers in 2026 say it began as a lunch spot and later added dinner, with hand-drawn menus and family-friendly service.',
      philosophy: null,
      specialty: 'Seiro-steamed vegetables; Tora parfait.',
      anecdotes: [
        { text: 'July 2026: "they cleared the steamer while I was still eating. While the cost performance isn\'t great, I think this place is more about enjoying the atmosphere."', source: R + 'B534958294/' },
        { text: 'July 2026: "When I mentioned that I liked the drawing on the back that wishes for happiness, they told me that each one is handwritten."', source: R + 'B531584712/' },
      ],
      japanese_sources_summary: '食べログ: ふじ寅 (Gion Fujitora)、カフェ・甘味処・日本料理、東山区宮川筋1-231-1、京阪祇園四条駅から川端通を徒歩1〜2分、月金土日祝 11:00〜16:30・17:00〜22:00・火木 11:00〜17:30、水曜休み (祝日は営業)、ランチ11時〜・甘味14時〜・ディナー17時〜、TableCheck か電話で予約、25席、座敷、個室、禁煙、子供可 (子供メニュー・食器・ベビーカー置き場)、カード・電子マネー可、QR不可、2022年7月7日オープン、築100年の京町家で季節の野菜と京都ポークのせいろ蒸しのコース、地酒とクラフトビール、抹茶の甘味と蒸しまんじゅう。口コミ (2026年6〜11月、英語): 季節野菜のせいろ蒸しランチ2,750円 (肉・野菜・ご飯、薬味7種)、夜の塩麹の鮭、手描きのメニュー、とらパフェ、とら最中、柚子と抹茶のムース、中庭、満席が多い、蒸籠を食べている途中で下げられたという声、割安ではないという声。',
      confidence: 'medium', sources: [TB, R + 'B530446559/', R + 'B531211931/', R + 'B531474500/', R + 'B531584712/', R + 'B532092082/', R + 'B532996029/', R + 'B534318701/', R + 'B534715295/', R + 'B534851191/', R + 'B534958294/', R + 'B536467424/', R + 'B538760308/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book via TableCheck; tatami rooms; family-friendly.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区宮川筋1-231-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.002319, 135.771743); cross-checked: GSI 京都府京都市東山区宮川筋一丁目231番地 (lot) 61m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536467424/'],
    price_note: 'Lunch price from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Seasonal vegetable seiro lunch (meat, vegetables, rice, seven condiments)', '¥2,750', 'Lunch', 'ask', 'no', 'September 2026.', 'seiro_mushi'),
      it('', '', 'Tora parfait', null, 'Sweets', 'no', 'no', 'July 2026.', 'parfait'),
    ] }, {
    cuisine: '築100年の町家で、せいろで蒸す京野菜と京都ポーク、抹茶の甘味 (食べログ、2026年の口コミ)・昼は肉、野菜、ご飯に薬味7種の「季節野菜のせいろ蒸し」2,750円 (2026年9月)・夜は季節の野菜と京都ポークのせいろ蒸しのコース、塩麹の鮭、地酒とクラフトビール (食べログ、2026年7〜8月)・甘味はとらパフェ、塩あんのとら最中、柚子と抹茶のムース、蒸しまんじゅう (2026年)',
    neighborhood: '川端通、祇園四条。祇園四条駅から徒歩1〜2分',
    gf_detail: '要確認: 蒸した野菜、京都ポーク、ご飯自体は小麦を含まないが、薬味7種、蒸しまんじゅう、甘味が付く (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: せいろ蒸しには京都ポークや鮭などが入る (食べログ、2026年の口コミ)。',
    notes: '[せいろ蒸し・祇園四条、鴨川沿いの町家] 祇園四条駅から1分、川端通の築100年の町家を改装した店。昼も夜も季節の野菜と京都ポークのせいろ蒸しに薬味7種、甘味の時間は虎のパフェや最中を、中庭を囲む座敷で。満席が多いので予約を。食べている途中で蒸籠を下げられたという声も (2026年7月)。水曜休み。',
  });
}

save();
