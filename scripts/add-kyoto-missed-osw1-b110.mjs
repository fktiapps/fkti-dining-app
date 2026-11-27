// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 110.
//   + 若たけ (small counter izakaya north of Kyoto Station, by Yodobashi Camera; thin record)
//   + 大西 (long-running yakitori on Shichijo-dori, owner at the grill)
//   + SPICEINMYHEAD (spice-and-European-style curry counter in front of the Kyoto Prefectural Office, opened 1 December 2025)
//   + 鉄板お好み焼 三喜 (Miki) (okonomiyaki and teppan izakaya near Gojo-Omiya, "over 60 years" per the own site)
//   - 5 skips: USAGI (no reviews), 洋食屋 サカ井 (existence doubtful), 欧風料理 モンスレー (no 2025–26 reviews),
//     京都タワーホテル (big-chain hotel), ブールヴァール (big-chain hotel restaurant).
//   Core and notable lists have nothing left in the lane; rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first,
//   lane ids: 26042738 (囲 — held for Greg, NOT drafted and NOT skipped), 26028830 (うぐいす — held for Greg, NOT drafted and
//   NOT skipped), 26028470, 26044526 (skip), 26013056, 26006840 (skip), 26044124, 26004176 (skip), 26021498 (skip),
//   26000870 (skip), 26013776.
//   Data check (main 3c90a1d9, hidden included): none of the four is in data/kyoto.json by Tabelog id, name or address;
//   none is in another worker's pending script (untracked add-kyoto-missed-* in osw6 b108, osw8 b110, osw9 b104 read).
//   Romaji rule (integrator 2026-11-26): 若たけ and 大西 — only Tabelog's English listing name ("Wakatake", "Oonishi") and
//   machine-translated reviews give romaji, so kanji/kana only with whole-string name glosses. SPICEINMYHEAD — written in
//   Latin letters on Tabelog's Japanese-name line. 三喜 — the own site okonomiyaki-miki.com (domain and English page:
//   Izakaya style Okonomiyaki "Miki") gives Miki.
//   Operator checks: one shop each found (Tabelog; own site for 三喜; web searches). SPICEINMYHEAD ran as a pop-up in a
//   sandwich shop near Kyoto City Hall before opening (December 2025 and January 2026 reviews); the sandwich shop's name and
//   the previous tenant's name appear only in machine-translated reviews and are left unnamed.
//   Other-diner remarks (Greg 2026-11-06): 大西 — one June 2023 review noting many foreign tourists is a single review and
//   left out. 若たけ — salarymen as the main crowd appears in two reviews (January 2017, October 2024), kept, attributed.
//   Halal: no operator in this batch claims halal.
//   JA text: no bare 祝 or 天. Yodobashi Camera, HUB and Kokekokko stay Latin in JA (English reviews only).
//   Pins: Tabelog /en/ ld+json points; no OSM/GSI cross-check this round (integrator runs pincheck). Nearest pins in main:
//   若たけ 49 m, 大西 33 m, SPICEINMYHEAD 16 m (kyoto_ushiya_yohei), 三喜 82 m; nothing pending within 98 m.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-26';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-110');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26044526', 'USAGI: no reviews on Tabelog (0 reviews, read 2026-11-26), so no 2025–26 visit to confirm it; the listing gives irregular hours "from 12:00 and from 17:00" and says to ask by phone');
skip('26006840', '洋食屋 サカ井: existence doubtful — the newest of its Tabelog reviews is dated May 2025, and a new French restaurant, USAGI (26044526, no reviews yet), is listed at the same lot, 上京区宮垣町88-2; until a newer visit or the shop itself confirms it is open, not drafted (read 2026-11-26)');
skip('26004176', '欧風料理 モンスレー: no 2025–26 reviews — the four Tabelog reviews are dated 2014, 2016, 2018 and 2019 (read 2026-11-26)');
skip('26021498', 'large parent: big-chain hotel (Greg 2026-11-08) — the Tabelog listing is the hotel itself, 京都タワーホテル, whose own site kyoto-towerhotel.jp links its company profile to keihanhotels-resorts.co.jp (京阪ホテルズ&リゾーツ); same group as 26005057, skipped osw8-110 (read 2026-11-26)');
skip('26000870', 'large parent: big-chain hotel (Greg 2026-11-08) — ブールヴァール is the buffet restaurant of 京都新阪急ホテル (Tabelog address 東塩小路町579 京都新阪急ホテル); hankyu-hotel.com, © Hankyu-Hanshin-Daiichi Hotel Group, lists 京都新阪急ホテル among about 36 group hotels (read 2026-11-26)');

// ================================================================ 若たけ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26028470/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '22:30']);
  put({
    id: 'kyoto_wakatake_higashishiokoji', name: '若たけ', category: 'OMNI',
    lat: 34.987761, lng: 135.757802, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Reviewers name fried fish cutlets, cream croquettes, fried fish cakes, sashimi and a soba-and-curry roll; no gluten information (2017–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The dishes reviewers name are mostly seafood and meat (fish cutlets, sashimi, dried squid, chicken-tail salad); nothing is described as vegan.',
    hours_raw: 'Monday–Saturday 17:30–22:30; closed Sundays and public holidays, and on some Saturdays (Tabelog). Reservations accepted (Tabelog). Counter seating; sake and shochu (Tabelog). About 5 minutes on foot from JR Kyoto Station, 303 m (Tabelog); near Yodobashi Camera (January 2017 and October 2024 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: null, halal: false, open_late: true },
    neighborhood: 'North of Kyoto Station — near Yodobashi Camera, about 5 minutes on foot from the station',
    cuisine: 'Neighbourhood izakaya with many cooked seafood dishes (January 2017) · small fried fish cutlet of tiny fish (jako katsu) ¥220; cream croquettes with ham; a soba roll with curry and cream cheese; shochu by the bottle (January 2017) · croquette salad, dried squid (surume), chicken-tail (bonjiri) salad, Kirin beer (October 2024) · fried fish cakes and sashimi (review updated February 2026)',
    website: null, gmaps: gm('若たけ 京都 東塩小路町579'), menu_url: TB,
    notes: '[Counter izakaya · north of Kyoto Station] A small izakaya near Yodobashi Camera, a few minutes from Kyoto Station, with spacious counter seats, sake and shochu and inexpensive seafood plates — fried fish cakes, sashimi, a tiny-fish cutlet — plus croquettes and salads. Reviewers in 2017 and 2024 found it full of office workers; easy for a solo drink. Few reviews, so check hours before going.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'A January 2017 reviewer, unsure about the "isoyaki" on the menu outside, went in and found a friendlier owner than expected and many cooked seafood dishes at low prices; the reviewer and an October 2024 reviewer both describe a place full of salarymen. An April 2026 solo first-timer found the counter seats spacious enough to drink at leisure. Tabelog lists 5 reviews (January 2017 to April 2026).',
      philosophy: null, specialty: 'Fried fish cakes and sashimi; small-fish cutlet.',
      anecdotes: [
        { text: 'A January 2017 diner ordered a soba roll with curry hesitantly and was won over by the mix of soba, sushi roll, curry and rich cream cheese.', source: R + 'B243218693/' },
      ],
      japanese_sources_summary: '食べログ: 若たけ、居酒屋・郷土料理、下京区東塩小路町579、JR京都駅から徒歩5分 (京都駅から303m)、17:30〜22:30、日曜・祝日休み、土曜は不定休、予約可、カウンター席、日本酒・焼酎、一人でも入りやすい。口コミ (2017〜2026年、英語): Yodobashi Camera の近く、HUB の先、魚介の料理が多い、じゃこカツ220円、ハムのクリームコロッケ、カレーとクリームチーズのそば巻き、焼酎のボトル、親切な店主、会社員が多い (2017年1月)、コロッケサラダ、するめいか、ぼんじりのサラダ、キリンビール、会社員でにぎわう (2024年10月)、さつま揚げと刺身 (2026年2月更新)、広いカウンター席でひとりでゆっくり (2026年4月更新)。',
      confidence: 'low', sources: [TB, R + 'B243218693/', R + 'B511037785/', R + 'B522847439/', R + 'B525404129/'] },
    cultural_comfort: { level: 'japanese', note: 'Small local counter izakaya; no English information found; phone may be Japanese only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区東塩小路町579',
    existence: { status: 'probable', checked: TODAY, note: 'Tabelog listing checked 2026-11-26 (no closure badge); reviews updated February and April 2026; no own site or social account found.' },
    pin_source: `Tabelog ${TB} (34.9877608, 135.7578025); not cross-checked this round; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B243218693/'],
    price_note: 'Only one price is known, from a January 2017 review; check current prices.', last_checked: TODAY, items: [
      it('じゃこカツ', '', 'Small fried cutlet of tiny fish (jako katsu)', '¥220', 'Small plates', 'no', 'no', 'January 2017.', 'jako_katsu'),
    ] }, {
    cuisine: '魚介の料理が多い町の居酒屋 (2017年1月)・じゃこカツ220円、ハムのクリームコロッケ、カレーとクリームチーズのそば巻き、焼酎のボトル (2017年1月)・コロッケサラダ、するめいか、ぼんじりのサラダ、キリンビール (2024年10月)・さつま揚げと刺身 (2026年2月更新)',
    neighborhood: '京都駅の北、Yodobashi Camera の近く、駅から徒歩約5分',
    gf_detail: '要確認。口コミにはじゃこカツ、クリームコロッケ、さつま揚げ、刺身、カレーのそば巻きが出てくる。グルテンの情報はない (2017〜2026年の口コミ)。',
    vegan_detail: '要確認。口コミに出る料理は魚介と肉が中心 (じゃこカツ、刺身、するめいか、ぼんじりのサラダ)。ヴィーガンと書かれた品はない。',
    notes: '[カウンターの居酒屋・京都駅の北] 京都駅から数分、Yodobashi Camera の近くの小さな居酒屋。広いカウンター席、日本酒と焼酎、さつま揚げ、刺身、じゃこカツなど手頃な魚介の料理に、コロッケやサラダも。2017年と2024年の口コミでは会社員でにぎわう店。ひとり飲みにも。口コミが少ないので、営業時間は事前に確認を。',
  });
}

// ================================================================ 大西
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26013056/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '23:00']); const L = day(['18:00', '24:00']);
  put({
    id: 'kyoto_onishi_yakitori_shichijo', name: '大西', category: 'OMNI',
    lat: 34.989394, lng: 135.754829, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Reviewers do not say which skewers are salted and which have sauce; the side dishes include a crab gratin and a beef-offal stew. No gluten information (2021–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A yakitori shop: the sides reviewers name besides meat are edamame, assorted pickles, avocado kimchi and grilled rice balls, but nothing is described as vegan.',
    hours_raw: 'Monday, Tuesday and Sunday 18:00–23:00; Friday and Saturday 18:00–24:00; closed Wednesday and Thursday (Tabelog). Reservations accepted (Tabelog); fully booked on a September 2022 visit; a May 2025 reviewer saw a solo diner turned away. No cards or e-money; QR payments accepted (Tabelog). 20 seats: 8 at the counter and three tables for four (Tabelog); a group of colleagues sat in a small room at the back in April 2023. Smoking allowed throughout (Tabelog; June 2023). No parking (Tabelog). About 8 minutes on foot from JR Kyoto Station, 600 m, on Shichijo-dori (Tabelog; February 2026).',
    hours: { 0: D, 1: D, 4: L, 5: L, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shichijo-dori, west of Nishinotoin — about 8 minutes on foot from Kyoto Station',
    cuisine: 'Charcoal-grilled yakitori, each skewer grilled to order, with offal and side dishes · fresh chicken liver and heart ¥500 each; skin, liver and plum-shiso skewers, a chu-hi, two go of hot sake and assorted pickles ¥2,400 in all; chicken wings take over 20 minutes, so order early (December 2021) · small skewers in many kinds, beef-tongue sashimi, chicken sashimi (September 2022) · yakitori about ¥100 a skewer; liver crisp outside and tender inside (October 2022) · January 2023: Kirin Classic Lager, edamame as the starter, beef-tongue sashimi, crab gratin, avocado kimchi, assorted pickles, beef-offal stew; liver, knee cartilage, neck, wings, skin, tsukune, gizzard, thigh and plum-shiso skewers · chestnut shochu, then sake (April 2023) · highballs (March 2024) · spicy sausages, beef-tongue sashimi, mochi with cheese and bacon, grilled rice balls (June 2023) · two diners with about two drinks each, around ¥5,000 (January 2024) · beef honmon (offal) stew, neck, skin, cartilage, pork belly and bonjiri; skewers ordered in twos or more; about ¥3,000 a head (February 2026) · beef-tongue sashimi (February 2026)',
    website: null, gmaps: gm('大西 焼鳥 京都 七条 大黒町'), menu_url: TB,
    notes: '[Old-school yakitori · Shichijo-dori, open late] A long-running, Showa-feeling yakitori shop on Shichijo-dori, a walk west of Kyoto Station: a counter and a few small tables, the owner grilling every skewer and, in 2022 and 2024 reviews, a woman skewering at the counter whom one reviewer took to be the owner’s mother. Small, cheap skewers in many kinds — liver, neck, skin, bonjiri — plus beef-tongue sashimi, offal stew and grilled rice balls, about ¥2,000–¥3,000 a head. Popular and often booked; smoking allowed; no cards.',
    chef_bio: { chef_name: null, roles: ['Owner, at the grill (unnamed)', 'Staff (unnamed)'], origin: null,
      background: 'A September 2022 reviewer describes a yakitori shop that has been around for a long time, with a woman the review calls "a mother" skewering at the corner of the counter; a July 2024 reviewer saw someone who seemed to be the owner\'s mother skewering at the counter while the owner grilled each skewer in front of the guests. A March 2024 regular found the owner as lively as ever; in June 2023 the owner grilled patiently despite the crowd, and the floor staff included international students, some new to the job, whom the reviewer found dedicated and polite. A February 2026 reviewer describes a cosy, Showa-era room with many regulars, and another loved the way the person at the grill calls out "Hai yo!". Criticism: a September 2023 diner found it average with small portions; a May 2025 diner found few kinds of skewer, lukewarm beer and a beer server in need of cleaning, and saw a foreign staff member being trained; two 2026 reviewers found the menu a little limited, and an October 2023 latecomer found items sold out.',
      philosophy: null, specialty: 'Yakitori grilled skewer by skewer; beef-tongue sashimi.',
      anecdotes: [
        { text: 'A June 2023 diner who does not drink much asked for a weaker peach-oolong drink, got one that was truly light, and finished it happily.', source: R + 'B466873413/' },
        { text: 'A January 2024 holiday visitor could find no free yakitori seat around Karasuma, walked back towards Kyoto Station and found a table here.', source: R + 'B478606883/' },
      ],
      japanese_sources_summary: '食べログ: 大西、焼鳥・居酒屋、下京区七条西洞院西入ル北側大黒町234番地、JR京都駅から徒歩8分 (600m)、月・火・日 18:00〜23:00、金・土 18:00〜24:00、水・木定休、予約可、カード・電子マネー不可、QR決済可、20席 (カウンター8席、4名テーブル3卓)、個室なし、喫煙可、駐車場なし、ひとりでも友人とでも。口コミ (2021〜2026年、英語): 新鮮なレバーとハツ各500円、皮、レバー、梅しそ、酎ハイ、熱燗2合、漬物の盛り合わせで2,400円、一本ずつ焼くので時間がかかる、手羽先は20分以上 (2021年12月)、昔からの焼鳥店、カウンターの隅で串を打つ「お母さん」、小ぶりの串、牛タン刺し、鶏刺し、満席 (2022年9月)、焼鳥は1本100円ほど、レバー (2022年10月)、キリンクラシックラガー、お通しの枝豆、牛タン刺し、カニグラタン、アボカドキムチ、漬物、牛もつ煮込み、レバー、ひざ軟骨、ネック、手羽先、皮、つくね、砂肝、もも、梅しそ (2023年1月)、奥の小さな部屋、栗焼酎、日本酒 (2023年4月)、混雑で提供が遅れる、店内喫煙可、店主が丁寧に焼く、留学生のスタッフ、辛いソーセージ、餅チーズベーコン、焼きおにぎり (2023年6月)、普通、量が少ない (2023年9月)、遅い時間は品切れ (2023年10月)、二人で約5,000円 (2024年1月)、店主は相変わらず元気、ハイボール (2024年3月)、店主が目の前で一本ずつ焼く、店主の母らしき人がカウンターで串打ち (2024年7月)、種類が少ない、ぬるいビール、一人客が断られた (2025年5月)、昭和の雰囲気、常連が多い、牛ほんもん煮込み、ネック、皮、軟骨、豚バラ、ぼんじり、串は2本から、予算は約3,000円 (2026年2月)、牛タン刺し、焼き手の「はいよ」の掛け声 (2026年2月)。',
      confidence: 'low', sources: [TB, R + 'B443763921/', R + 'B454865892/', R + 'B456595251/', R + 'B459144769/', R + 'B463900570/', R + 'B466873413/', R + 'B471300820/', R + 'B474276017/', R + 'B478606883/', R + 'B507044126/', R + 'B522297257/', R + 'B522358249/', R + 'B535097788/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small local yakitori counter; international students on the floor staff in June 2023; phone may be Japanese only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区七条西洞院西入ル北側大黒町234番地',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing checked 2026-11-26 (no closure badge); reviews dated December 2021 to February 2026.' },
    pin_source: `Tabelog ${TB} (34.9893938, 135.7548293); not cross-checked this round; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B443763921/', R + 'B456595251/'],
    price_note: 'Prices from reviews (December 2021, October 2022); check current prices.', last_checked: TODAY, items: [
      it('', '', 'Yakitori skewer', '¥100', 'Yakitori', 'ask', 'no', 'About ¥100 a skewer, October 2022.', 'yakitori'),
      it('', '', 'Fresh chicken liver', '¥500', 'Small plates', 'ask', 'no', 'December 2021.', 'fresh_liver'),
      it('', '', 'Fresh chicken heart', '¥500', 'Small plates', 'ask', 'no', 'December 2021.', 'fresh_heart'),
    ] }, {
    cuisine: '一本ずつ焼く炭火の焼鳥、ホルモンと一品料理・新鮮なレバーとハツ各500円、皮、レバー、梅しその串、酎ハイ、熱燗2合、漬物の盛り合わせで計2,400円、手羽先は20分以上かかるので早めに注文を (2021年12月)・小ぶりの串がいろいろ、牛タン刺し、鶏刺し (2022年9月)・焼鳥は1本100円ほど、外はカリッと中はやわらかいレバー (2022年10月)・2023年1月: キリンクラシックラガー、お通しの枝豆、牛タン刺し、カニグラタン、アボカドキムチ、漬物の盛り合わせ、牛もつ煮込み、レバー、ひざ軟骨、ネック、手羽先、皮、つくね、砂肝、もも、梅しその串・栗焼酎、日本酒 (2023年4月)・ハイボール (2024年3月)・辛いソーセージ、牛タン刺し、餅チーズベーコン、焼きおにぎり (2023年6月)・二人で二杯ずつ飲んで約5,000円 (2024年1月)・牛ほんもん煮込み、ネック、皮、軟骨、豚バラ、ぼんじり、串は2本から、予算は一人約3,000円 (2026年2月)・牛タン刺し (2026年2月)',
    neighborhood: '七条通、西洞院の西、京都駅から徒歩約8分',
    gf_detail: '要確認。口コミでは、どの串が塩でどれがタレかはわからない。一品にはカニグラタンや牛もつ煮込みも。グルテンの情報はない (2021〜2026年の口コミ)。',
    vegan_detail: '要確認。焼鳥店で、肉以外に口コミに出るのは枝豆、漬物の盛り合わせ、アボカドキムチ、焼きおにぎりだが、ヴィーガンと書かれた品はない。',
    notes: '[昔ながらの焼鳥・七条通、夜遅くまで] 京都駅から西へ歩いた七条通の、昭和の雰囲気が残る昔からの焼鳥店。カウンターと小さなテーブル席、店主が一本ずつ串を焼き、2022年と2024年の口コミではカウンターで女性が串を打つ (店主の母らしいという声も)。レバー、ネック、皮、ぼんじりなど小ぶりで手頃な串がいろいろ、牛タン刺し、もつ煮込み、焼きおにぎりも。ひとり2,000〜3,000円ほど。人気で予約で埋まることも。喫煙可、カード不可。',
  });
}

// ================================================================ SPICEINMYHEAD
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26044124/'; const R = TB + 'dtlrvwlst/';
  const L = day(['11:00', '14:30']); const LD = day(['11:00', '14:30'], ['18:00', '21:00']); const S = day(['11:00', '20:00']);
  put({
    id: 'kyoto_spiceinmyhead_fuchomae', name: 'SPICEINMYHEAD', category: 'OMNI',
    lat: 35.017549, lng: 135.754603, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The curries are a blend of spice curry and European-style curry (Tabelog); no gluten information. The menu also has jerk-chicken-style kara-age (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The standard curries are chicken, pork, keema and shrimp, and an August 2026 special was made with sea-bream dashi; nothing is described as vegan.',
    hours_raw: 'Monday–Wednesday 11:00–14:30 (last order 14:00); Thursday and Friday 11:00–14:30 (last order 14:00) and 18:00–21:00 (last order 20:30); Sunday 11:00–20:00 (last order 19:30); closed Saturday (Tabelog). An August 2026 reviewer found it closed one Sunday for an event. No reservations (Tabelog). Cards and e-money accepted, no QR (Tabelog). 14 seats: 8 at the counter and 6 at tables (Tabelog); reviewers count three tables for two (May and August 2026). Up a flight of stairs into a long, narrow room (January 2026). Non-smoking; no parking; take-out; children and strollers welcome, without special facilities (Tabelog). Opened 1 December 2025 (Tabelog). About 465 m from Marutamachi station; 1 minute from the Bunkacho-mae and Fucho-mae bus stops (Tabelog).',
    hours: { 0: L, 1: L, 2: L, 3: LD, 4: LD, 6: S }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'In front of the Kyoto Prefectural Office — about 465 m from Marutamachi station',
    cuisine: 'Curries blending spice curry with the umami of European-style curry, simple in look (Tabelog) · December 2025: chicken ¥1,100, pork ¥1,200 and keema ¥1,200 on saffron rice, pickled purple cabbage and chopped spiced shallots on the side, cilantro the one add-on; mild, about as hot as a chain curry\'s level one · chicken curry with carrot râpée ¥200 (January 2026) · chicken curry and green-salad set ¥1,250 on turmeric rice, with cabbage achar and pickled shallots; three curries at lunch and some dinner-only dishes; a small extra portion of a second curry (choimori) instead of a combination; cilantro with a small rice (January 2026) · jerk-chicken-style kara-age (January and March 2026) · shrimp curry added later (January 2026) · pork curry of braised pork belly; soft-boiled egg topping (February 2026) · chicken curry ¥1,100 and an extra small pork curry ¥300; shallots pickled with ajwain (March 2026) · large pork curry with a spiced boiled egg, saffron rice, pickled radish and shiba-zuke-style pickles (April 2026) · chicken and shrimp curry together, offered at dinner but not lunch (May 2026) · August limited curry: chilled rasam of sea-bream dashi with hamo, turmeric rice, cucumber and lime (August 2026) · shrimp and pork combination (September 2026) · chicken and pork combination (November 2026)',
    website: null, gmaps: gm('SPICEINMYHEAD 京都 横鍛冶町'), menu_url: TB,
    notes: '[Spice curry · Kyoto Prefectural Office, lunch daily except Saturday] A narrow, yellow-accented curry counter up a short stair in front of the Kyoto Prefectural Office, opened in December 2025 after about a year and a half of pop-ups. Chicken, pork, keema and shrimp curries that join spice curry to a rich European-style base, on turmeric or saffron rice with pickled shallots and achar, about ¥1,100–¥1,300; a small second curry for ¥300, jerk-chicken kara-age, and monthly specials. Dinner Thursday and Friday; cards accepted.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Opened 1 December 2025 (Tabelog). A December 2025 reviewer says the shop ran as a pop-up, renting space near Kyoto City Hall, for about a year and a half before opening; a January 2026 reviewer adds that a sandwich shop in front of City Hall had hosted it, that the combination plates of the pop-up days were gone in favour of a simple standard menu, and that the room had been a European-style clay-pot curry restaurant. The shop posts its menu and hours on Instagram (Tabelog). An August 2026 reviewer found one person running the shop. Reviewers find the curry approachable — one December 2025 diner thought it mild and lacking strong character, while a January 2026 colleague who dislikes spicy food managed it and still broke a sweat.',
      philosophy: 'Curry that joins the rich flavour of spice curry to the deep umami of European-style curry, simple enough in look for everyone (Tabelog).', specialty: 'Chicken curry; braised pork-belly curry.',
      anecdotes: [
        { text: 'A January 2026 diner first read the sign as just "HEAD" before working out the full name.', source: R + 'B522155274/' },
        { text: 'An August 2026 diner came back after missing out on an earlier trip, meant to order a combination, and switched on the spot to the chilled sea-bream rasam with hamo.', source: R + 'B533521520/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): SPICEINMYHEAD、カレー、中京区横鍛冶町113-1、地下鉄烏丸線丸太町駅から徒歩5分 (465m)、市バス文化庁前・府庁前から徒歩1分、月〜水 11:00〜14:30 (L.O. 14:00)、木・金 11:00〜14:30 (L.O. 14:00)、18:00〜21:00 (L.O. 20:30)、日 11:00〜20:00 (L.O. 19:30)、土曜定休、予約不可、カード・電子マネー可、QR決済不可、14席 (カウンター8席、テーブル6席)、貸切20名まで、禁煙、駐車場なし、テイクアウト、子ども・ベビーカー可、2025年12月1日オープン、京都府庁のすぐ近く、スパイスカレーと欧風カレーを合わせたカレー、最新の情報は Instagram で。口コミ (2025〜2026年、英語、一部日本語の写真説明): 辛さはやさしい (2025年12月)、約1年半の間借り営業を経て開店、チキン1,100円、ポーク1,200円、キーマ1,200円、サフランライス、紫キャベツの漬物、スパイスのエシャロット、パクチー (2025年12月)、うなぎの寝床のような店内、キャロットラペ200円 (2026年1月)、階段を上がる細長い店、黄色い内装、チキンカレーとグリーンサラダのセット1,250円、ターメリックライス、キャベツのアチャール、ちょい盛り、ジャークチキン風の唐揚げ、間借りのころのあいがけはなくなった、のちにエビを追加 (2026年1月)、豚バラの煮込みのポークカレー、半熟卵 (2026年2月)、チキンカレー1,100円、ちょい盛りポークカレー300円、アジョワンのエシャロット (2026年3月)、ポークカレーの大盛り、スパイスゆで卵 (2026年4月)、夜はあいがけ可 (2026年5月)、8月限定 鯛だしの冷製ラッサム 鱧、店は一人で営業 (2026年8月)、エビとポークのあいがけ (2026年9月)、チキンとポークのあいがけ (2026年11月)。',
      confidence: 'medium', sources: [TB, R + 'B518806963/', R + 'B519098960/', R + 'B520348993/', R + 'B521532930/', R + 'B521666032/', R + 'B522155274/', R + 'B522568617/', R + 'B523086772/', R + 'B523852830/', R + 'B525948579/', R + 'B526619824/', R + 'B528117809/', R + 'B528387033/', R + 'B533521520/', R + 'B535485627/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter curry shop; short menu of three or four curries; phone may be Japanese only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区横鍛冶町113-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing checked 2026-11-26 (no closure badge); opened 1 December 2025; reviews dated December 2025 to November 2026.' },
    pin_source: `Tabelog ${TB} (35.0175489, 135.7546026); not cross-checked this round; 16 m from kyoto_ushiya_yohei; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B519098960/', R + 'B520348993/', R + 'B522155274/', R + 'B523852830/'],
    price_note: 'Prices from reviews, December 2025 to March 2026.', last_checked: TODAY, items: [
      it('', '', 'Chicken curry', '¥1,100', 'Curry', 'ask', 'no', 'December 2025; March 2026.', 'chicken_curry'),
      it('', '', 'Pork curry (braised pork belly)', '¥1,200', 'Curry', 'ask', 'no', 'December 2025.', 'pork_curry'),
      it('', '', 'Keema curry', '¥1,200', 'Curry', 'ask', 'no', 'December 2025.', 'keema_curry'),
      it('', '', 'Chicken curry and green salad set', '¥1,250', 'Curry', 'ask', 'no', 'January 2026.', 'chicken_salad_set'),
      it('ちょい盛りポークカレー', '', 'Small extra portion of pork curry', '¥300', 'Topping', 'ask', 'no', 'March 2026.', 'choimori_pork'),
      it('', '', 'Carrot râpée', '¥200', 'Side', 'ask', 'ask', 'January 2026.', 'carrot_rapee'),
    ] }, {
    cuisine: 'スパイスカレーと欧風カレーのうま味を合わせた、見た目はシンプルなカレー (食べログ)・2025年12月: サフランライスのチキン1,100円、ポーク1,200円、キーマ1,200円、紫キャベツの漬物と刻んだスパイスのエシャロット添え、追加はパクチーだけ、辛さはやさしい・チキンカレーとキャロットラペ200円 (2026年1月)・ターメリックライスのチキンカレーとグリーンサラダのセット1,250円、キャベツのアチャールとエシャロットの漬物、昼はカレー3種と夜だけの品、あいがけの代わりにちょい盛り、ご飯少なめでパクチー (2026年1月)・ジャークチキン風の唐揚げ (2026年1・3月)・のちにエビのカレーを追加 (2026年1月)・豚バラの煮込みのポークカレー、半熟卵のトッピング (2026年2月)・チキンカレー1,100円とちょい盛りポークカレー300円、アジョワンで漬けたエシャロット (2026年3月)・ポークカレーの大盛りにスパイスゆで卵、サフランライス、大根の漬物としば漬け風の漬物 (2026年4月)・チキンとエビのあいがけ、昼はなく夜のみ (2026年5月)・8月限定の鯛だしの冷製ラッサム、鱧、ターメリックライス、きゅうり、ライム (2026年8月)・エビとポークのあいがけ (2026年9月)・チキンとポークのあいがけ (2026年11月)',
    neighborhood: '京都府庁の前、丸太町駅から約465m',
    gf_detail: '要確認。スパイスカレーと欧風カレーを合わせたカレー (食べログ)。グルテンの情報はない。ジャークチキン風の唐揚げもある (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。定番のカレーはチキン、ポーク、キーマ、エビで、2026年8月の限定カレーは鯛だし。ヴィーガンと書かれた品はない。',
    notes: '[スパイスカレー・京都府庁前、土曜以外の昼] 京都府庁の前、階段を上がった先にある、黄色を差し色にした細長いカレーの店。約1年半の間借り営業を経て2025年12月にオープン。チキン、ポーク、キーマ、エビのカレーは、スパイスカレーとコクのある欧風カレーを合わせた味で、ターメリックやサフランのライスにエシャロットの漬物とアチャール、1,100〜1,300円ほど。300円のちょい盛り、ジャークチキン風の唐揚げ、月替わりの限定も。夜は木・金、カード可。',
  });
}

// ================================================================ 鉄板お好み焼 三喜
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26013776/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://okonomiyaki-miki.com/'; const WEN = 'https://okonomiyaki-miki.com/en';
  const D = day(['17:00', '22:00']);
  put({
    id: 'kyoto_okonomiyaki_miki_gojo_omiya', name: '鉄板お好み焼 三喜 (Miki)', category: 'OMNI',
    lat: 34.995945, lng: 135.748268, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'No. Okonomiyaki, modern-yaki and Kyoto betayaki are wheat-batter dishes, and the yakisoba and sobameshi use wheat noodles (2023–2026 reviews); the shop gives no gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The okonomiyaki come topped with bonito flakes (January 2025), and the dishes reviewers name are built on pork, chicken, beef and seafood; grilled Kujo green onion with salt is on the menu (August 2024), but nothing is described as vegan.',
    hours_raw: 'Daily except Wednesday 17:00–22:00 (last order 21:30) (Tabelog); the own site gives 17:00–22:00 (last order 21:30). Tabelog also lists closures on Thursdays 5, 12 and 26 November. Reservations accepted, and reviewers say booking is all but essential (March 2024; May 2024; April 2025); online booking available (March 2024). A table for two may be moved to the counter (Tabelog). Courses with all-you-can-drink (Tabelog; May 2024). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 31 seats: counter, sofa, tatami and sunken seating (Tabelog). Non-smoking, with a smoking spot in front of the shop (Tabelog; March 2025). Four parking spaces next to the shop (Tabelog). Wheelchair accessible; free Wi-Fi; English and photo menus; take-out; children welcome (Tabelog). About 537 m from Tambaguchi station, 10 minutes on foot; 15 minutes from Hankyu Shijo-Omiya (Tabelog).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Near Gojo-Omiya — about 10 minutes on foot from Tambaguchi station',
    cuisine: 'Izakaya-style okonomiyaki and teppanyaki, the dishes cooked by the staff on the teppan and brought to the table (own site; August 2024) · suji-yaki of Japanese black wagyu ¥693; mixed okonomiyaki ¥1,188 (February 2023) · pork modern-yaki, yakisoba with mixed fillings, pork okonomiyaki (March 2024) · all-you-can-drink courses; sobameshi (May 2024) · chicken gizzards, billed as the top repeat order; pork modern-yaki (July 2024) · fluffy mixed okonomiyaki with squid and shrimp; kimchi (August 2024) · grilled squid, Kokekokko-yaki, grilled Kujo green onion with salt, butter scallops, salt yakisoba, pork and egg okonomiyaki (August 2024) · January 2025: Kirin Lager large bottle ¥792, beef tendon and daikon in broth ¥660, chicken betayaki modern-style ¥1,221 — thin batter, tempura bits, cabbage, chicken and soba in layers under a tangy sauce, bonito flakes and aonori, served on a plate in eight wedges; udon instead of soba on request · fried tofu and Kokekokko-yaki (February 2025) · salted gizzards with crisp garlic chips; shrimp okonomiyaki with large shrimp; non-alcoholic sours (March 2025) · frozen-fruit highball (March 2026) · pork modern-yaki, Kujo green onion yaki, Kokekokko-yaki (the most popular), yakisoba; grilled chicken with Kujo green onion in a garlic soy sauce (April 2026) · salt yakisoba, Kokekokko-yaki with salt, beef garlic, shrimp garlic, sliced beef (July 2026)',
    website: WEB, gmaps: gm('鉄板お好み焼 三喜 京都 下長福寺町'), menu_url: WEB,
    notes: '[Okonomiyaki izakaya · Gojo-Omiya, book ahead] A local okonomiyaki and teppan izakaya running for more than 60 years (own site), now with young staff who cook at the teppan and bring each dish to the table. Pork modern-yaki, Kyoto-style betayaki, salt yakisoba, garlicky gizzards and the house favourite Kokekokko-yaki, plus all-you-can-drink courses; about ¥2,000–¥5,000 a head. Lively and often fully booked, so reserve; four parking spaces, English menu, cards accepted.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'The own site says Miki has been in business for over 60 years and that this long-kept taste is the secret of its popularity; its English page adds that the shop is well known among celebrities nationwide. Reviewers in April and July 2026 also speak of 60 years of history, and two 2026 reviewers who first came as students find the taste unchanged. A July 2024 diner expected an older woman at the griddle and found young staff carrying on the tradition; in January 2025 three young men and women were running the shop. A February 2025 group of six classmates from Okinawa came on the hotel staff’s recommendation. A January 2025 reviewer found the betayaki base soggy from being served on a plate, the cabbage a little undercooked, tall partitions hiding the teppan from the counter, and small differences between the bill and the menu prices.',
      philosophy: 'A taste kept for 60 years (own site).', specialty: 'Kokekokko-yaki; pork modern-yaki; salt yakisoba.',
      anecdotes: [
        { text: 'A March 2024 diner and daughter arrived early, kept an eye on the Shinkansen timetable while ordering more, and left reminiscing and full.', source: R + 'B482501303/' },
        { text: 'An April 2025 diner who had been turned away without a booking came back with one, for a colleague\'s birthday.', source: R + 'B505074039/' },
      ],
      japanese_sources_summary: '公式サイト: 居酒屋風お好み焼き 三喜、創業60年の味のこだわりこそが人気のヒミツ、営業時間 17:00〜22:00 (L.O. 21:30)、メニューはお好み焼き、一品料理、飲み物 (PDF)。英語のページ: Izakaya style Okonomiyaki "Miki"、60年以上営業、全国の有名人にも知られる。食べログ (公式情報): 鉄板お好み焼 三喜、お好み焼き・居酒屋・鉄板焼き、創業60年 地元で愛される店、下京区下長福寺町295-3、丹波口駅から537m (徒歩10分)、阪急四条大宮駅から徒歩15分、月・火・木〜日 17:00〜22:00 (L.O. 21:30)、水曜定休、11月5・12・26日の木曜も休み、予約可、2名のテーブル予約はカウンターへの移動をお願いすることも、カード可、電子マネー不可、PayPay可、31席 (カウンター、ソファ、座敷、掘りごたつ)、禁煙 (店の前に喫煙所)、駐車場は店の横に4台、車椅子可、無料Wi-Fi、英語メニュー、写真付きメニュー、テイクアウト、子ども可、コース、飲み放題。口コミ (2023〜2026年、英語): 五条大宮の近く、地元の人が多い、黒毛和牛のすじ焼き693円、ミックスお好み焼き1,188円 (2023年2月)、予約は必須、ネット予約、豚のモダン焼、焼きそばのミックス、豚玉 (2024年3月)、飲み放題付きのコース、そばめし、予約が取りにくい (2024年5月)、若いスタッフ、砂肝、豚のモダン焼 (2024年7月)、スタッフが焼いて席に運ぶ、イカとエビのミックス、キムチ (2024年8月)、イカ焼き、Kokekokko、九条ねぎの塩焼き、ホタテのバター焼き、塩焼きそば、豚玉 (2024年8月)、若い男女3人で営業、キリンラガー大瓶792円、すじ大根660円、べた焼きの鶏のモダン焼1,221円、天かす、キャベツ、鶏、そばの層、かつお節と青のり、8等分、うどんにも変更可、皿で提供、伝票とメニューの価格の違い (2025年1月)、Okinawa からの同級生6人、ホテルのスタッフのすすめ、揚げ豆腐 (2025年2月)、砂肝の塩焼き ガーリックチップ、エビのお好み焼き、ノンアルコールのサワー、店の外に灰皿 (2025年3月)、予約なしで入れず、予約して再訪 (2025年4月)、冷凍フルーツのハイボール、学生時代から (2026年3月)、7時過ぎから混む、駐車場 (2026年4月)、60年以上の歴史、豚のモダン焼、九条ねぎ焼、Kokekokko 焼き 人気1位、焼きそば、九条ねぎと鶏のにんにく醤油 (2026年4月)、創業60年、学生時代から通う、塩焼きそば、Kokekokko 焼きの塩、牛肉のガーリック、エビのガーリック、牛肉の薄切り (2026年7月)。',
      confidence: 'medium', sources: [WEB, WEN, TB, R + 'B460987064/', R + 'B482501303/', R + 'B486060820/', R + 'B489282636/', R + 'B489732900/', R + 'B490491109/', R + 'B499066768/', R + 'B501503855/', R + 'B503697405/', R + 'B503713580/', R + 'B505074039/', R + 'B523662376/', R + 'B526854799/', R + 'B526940912/', R + 'B532134537/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English and photo menus (Tabelog); the own site has an English page; online booking (March 2024); phone may be Japanese only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区下長福寺町295-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Own site and Tabelog corporate-member listing checked 2026-11-26 (no closure badge); Tabelog lists November closure dates; reviews dated February 2023 to July 2026.' },
    pin_source: `Tabelog ${TB} (34.9959454, 135.7482681); not cross-checked this round; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B460987064/', R + 'B499066768/'],
    price_note: 'Prices from reviews (February 2023, January 2025); the own site\'s menu is an image PDF that could not be read.', last_checked: TODAY, items: [
      it('', '', 'Mixed okonomiyaki', '¥1,188', 'Okonomiyaki', 'no', 'no', 'February 2023.', 'mixed_okonomiyaki'),
      it('すじ焼き', '', 'Suji-yaki of Japanese black wagyu', '¥693', 'Okonomiyaki', 'no', 'no', 'February 2023.', 'suji_yaki'),
      it('', '', 'Chicken betayaki, modern-style (with soba)', '¥1,221', 'Okonomiyaki', 'no', 'no', 'January 2025.', 'betayaki_modern'),
      it('すじ大根', '', 'Beef tendon and daikon in broth', '¥660', 'Small plates', 'ask', 'no', 'January 2025.', 'suji_daikon'),
      it('', '', 'Kirin Lager, large bottle', '¥792', 'Drinks', 'no', 'ask', 'January 2025.', 'kirin_lager'),
    ] }, {
    cuisine: '居酒屋風のお好み焼きと鉄板焼き、スタッフが鉄板で焼いて席に運ぶ (公式サイト、2024年8月)・黒毛和牛のすじ焼き693円、ミックスお好み焼き1,188円 (2023年2月)・豚のモダン焼、焼きそばのミックス、豚玉 (2024年3月)・飲み放題付きのコース、そばめし (2024年5月)・一番リピートされるという砂肝、豚のモダン焼 (2024年7月)・イカとエビのふわふわのミックスお好み焼き、キムチ (2024年8月)・イカ焼き、Kokekokko 焼き、九条ねぎの塩焼き、ホタテのバター焼き、塩焼きそば、豚玉 (2024年8月)・2025年1月: キリンラガー大瓶792円、すじ大根660円、べた焼きの鶏のモダン焼1,221円 (薄い生地、天かす、キャベツ、鶏、そばを重ね、酸味のあるソース、かつお節、青のり、皿で8等分)、そばの代わりにうどんも可・揚げ豆腐と Kokekokko 焼き (2025年2月)・ガーリックチップをのせた砂肝の塩焼き、大きなエビのお好み焼き、ノンアルコールのサワー (2025年3月)・冷凍フルーツのハイボール (2026年3月)・豚のモダン焼、九条ねぎ焼、一番人気の Kokekokko 焼き、焼きそば、九条ねぎと鶏のにんにく醤油焼き (2026年4月)・塩焼きそば、塩の Kokekokko 焼き、牛肉のガーリック、エビのガーリック、牛肉の薄切り (2026年7月)',
    neighborhood: '五条大宮の近く、丹波口駅から徒歩約10分',
    gf_detail: 'グルテンフリー不可。お好み焼き、モダン焼、京都のべた焼きは小麦粉の生地で、焼きそばやそばめしも小麦の麺 (2023〜2026年の口コミ)。店のグルテンの情報はない。',
    vegan_detail: '要確認。お好み焼きにはかつお節がのり (2025年1月)、口コミに出る料理は豚肉、鶏肉、牛肉、魚介が中心。九条ねぎの塩焼きもある (2024年8月) が、ヴィーガンと書かれた品はない。',
    notes: '[お好み焼きの居酒屋・五条大宮、要予約] 創業60年を超える (公式サイト) 地元のお好み焼きと鉄板焼きの居酒屋。今は若いスタッフが鉄板で焼いて席まで運ぶ。豚のモダン焼、京都のべた焼き、塩焼きそば、ガーリックの砂肝、一番人気の Kokekokko 焼き、飲み放題付きのコースも。ひとり2,000〜5,000円ほど。にぎやかで予約で埋まることが多いので予約を。駐車場4台、英語メニュー、カード可。',
  });
}

save();
